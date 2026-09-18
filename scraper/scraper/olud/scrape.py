#!/usr/bin/env python3
"""
Polite bulk scraper for olud.ai — fetches the Markdown twin of every page
in url_manifest.json, resumable (skips files already on disk), rate-limited.

robots.txt for olud.ai (checked 2026-09-10) explicitly allows this:
  User-agent: *  ->  Allow: /   (only /api/ disallowed, which we never touch)
  Content-Signal: search=yes, ai-input=yes, ai-train=yes
"""
import json
import queue
import sys
import threading
import time
import urllib.error
import urllib.request

from scraper.olud.paths import MANIFEST, RAW, LOGS

LOG_FILE = LOGS / "scrape.log"

UA = "Mozilla/5.0 (compatible; olud-research-scraper/1.0; +personal research use)"
WORKERS = 4
DELAY = 0.35          # seconds between requests, per worker
MAX_RETRIES = 3

log_lock = threading.Lock()
counters = {"ok": 0, "skip": 0, "fail": 0}


def log(msg):
    line = f"{time.strftime('%H:%M:%S')} {msg}"
    with log_lock:
        print(line, flush=True)
        LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(LOG_FILE, "a") as f:
            f.write(line + "\n")


def md_url_and_path(cat, url):
    """Map a page URL to (markdown-twin URL, local file path)."""
    rest = url.split(f"olud.ai/{cat}/", 1)[1] if f"/{cat}/" in url else url.split("olud.ai/", 1)[1]
    if url.endswith("/"):
        slug = rest.rstrip("/") or "index"
        md_url = url + "index.md"
    elif rest.endswith(".html"):
        slug = rest[:-5]
        md_url = url[:-5] + ".md"
    else:
        slug = rest
        md_url = url + ".md"
    safe = slug.replace("/", "__") or "index"
    path = RAW / cat / f"{safe}.md"
    return md_url, path


def fetch(md_url):
    req = urllib.request.Request(md_url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.status, resp.read()


def worker(q):
    while True:
        item = q.get()
        if item is None:
            q.task_done()
            return
        cat, url = item
        try:
            md_url, path = md_url_and_path(cat, url)
        except Exception as e:
            log(f"SKIP malformed url cat={cat} url={url}: {e}")
            counters["fail"] += 1
            q.task_done()
            continue
        if path.exists() and path.stat().st_size > 0:
            counters["skip"] += 1
            q.task_done()
            continue
        path.parent.mkdir(parents=True, exist_ok=True)
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                status, body = fetch(md_url)
                if status == 200 and body:
                    path.write_bytes(body)
                    counters["ok"] += 1
                else:
                    log(f"WARN status={status} {md_url}")
                    counters["fail"] += 1
                break
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    log(f"404 {md_url}")
                    counters["fail"] += 1
                    break
                log(f"HTTPError {e.code} attempt {attempt} {md_url}")
                time.sleep(1.5 * attempt)
            except Exception as e:
                log(f"ERROR attempt {attempt} {md_url}: {e}")
                time.sleep(1.5 * attempt)
        else:
            counters["fail"] += 1
        time.sleep(DELAY)
        q.task_done()


def main():
    only_cats = sys.argv[1:] or None
    manifest = json.loads(MANIFEST.read_text())
    q = queue.Queue()
    total = 0
    for cat, urls in manifest.items():
        if only_cats and cat not in only_cats:
            continue
        for u in urls:
            q.put((cat, u))
            total += 1
    log(f"=== starting run: {total} urls queued, {WORKERS} workers ===")

    threads = []
    for _ in range(WORKERS):
        t = threading.Thread(target=worker, args=(q,), daemon=True)
        t.start()
        threads.append(t)

    last_report = time.time()
    while any(t.is_alive() for t in threads) and not q.empty():
        time.sleep(5)
        if time.time() - last_report > 10:
            done = counters["ok"] + counters["skip"] + counters["fail"]
            log(f"progress: {done}/{total} (ok={counters['ok']} skip={counters['skip']} fail={counters['fail']})")
            last_report = time.time()

    q.join()
    for _ in threads:
        q.put(None)
    for t in threads:
        t.join()

    log(f"=== DONE: ok={counters['ok']} skip={counters['skip']} fail={counters['fail']} total={total} ===")


if __name__ == "__main__":
    main()
