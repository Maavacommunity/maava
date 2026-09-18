#!/usr/bin/env python3
"""
Parses the raw Markdown twins scraped from olud.ai into structured JSONL,
one file per category, ready to load into DynamoDB.
"""
import json
import re

from scraper.olud.paths import RAW, STRUCTURED


def title_and_desc(text):
    m = re.search(r"^#\s+(.+)$", text, re.M)
    title_line = m.group(1).split(" | ")[0] if m else ""
    name = re.split(r"\s+[—-]\s+", title_line)[0].strip()
    m2 = re.search(r"^>\s+(.+)$", text, re.M)
    desc = m2.group(1).strip() if m2 else ""
    return name, desc


def after_label(text, label):
    """Value of the '[value](url)' link immediately preceding a bare-line label."""
    m = re.search(r"\[([^\]]*)\]\([^)]*\)\s*\n+\s*" + re.escape(label) + r"\s*\n", text)
    return m.group(1).strip() if m else None


def word_before_label(text, label):
    m = re.search(r"\n([A-Za-z]+)\s*\n+\s*" + re.escape(label) + r"\s*\n", text)
    return m.group(1).strip() if m else None


def source_url(text):
    m = re.search(r"_Source:\s*(\S+)_", text)
    return m.group(1) if m else None


# ---------------------------------------------------------------- projects
def parse_project(text, slug):
    name, desc = title_and_desc(text)
    return {
        "slug": slug,
        "name": name,
        "description": desc,
        "url": source_url(text),
        "owner": (re.search(r"by \*\*([^*]+)\*\*", text) or [None, None])[1],
        "stars": after_label(text, "Stars"),
        "forks": after_label(text, "Forks"),
        "trending": after_label(text, "Trending"),
        "license": after_label(text, "License"),
        "created": after_label(text, "Created"),
        "last_commit": after_label(text, "Last commit"),
        "category": after_label(text, "Category"),
        "language": after_label(text, "Language"),
        "self_hostable": word_before_label(text, "Self-hostable"),
        "github_url": (re.search(r"\[View on GitHub\]\(([^)]+)\)", text) or [None, None])[1],
    }


# ------------------------------------------------------------------- tools
def parse_tool(text, slug):
    name, desc = title_and_desc(text)
    glance = {}
    for key in ["Category", "Type", "License", "Runs locally", "Built with", "Skill level", "Best for"]:
        m = re.search(r"\|\s*" + re.escape(key) + r"\s*\|\s*([^|]+?)\s*\|", text)
        if m:
            glance[key.lower().replace(" ", "_")] = m.group(1).strip()
    stars_m = re.search(r"\[\*\*([\d, ]+)\*{3}stars\*\]", text)
    forks_m = re.search(r"\[\*\*([\d, ]+)\*{3}forks\*\]", text)
    return {
        "slug": slug,
        "name": name,
        "description": desc,
        "url": source_url(text),
        "owner": (re.search(r"by \*\*([^*]+)\*\*", text) or [None, None])[1],
        "stars": stars_m.group(1).strip() if stars_m else None,
        "forks": forks_m.group(1).strip() if forks_m else None,
        "website": (re.search(r"\[Visit website →\]\(([^)]+)\)", text) or [None, None])[1],
        "github_url": (re.search(r"\[View on GitHub\]\(([^)]+)\)", text) or [None, None])[1],
        **glance,
    }


# ------------------------------------------------------------------ models
def parse_model(text, slug):
    name, desc = title_and_desc(text)

    def grab(label):
        m = re.search(r"\n([^\n]*?)" + re.escape(label), text)
        return m.group(1).strip() if m else None

    return {
        "slug": slug,
        "name": name,
        "description": desc,
        "url": source_url(text),
        "context_window": grab("Context window"),
        "input_price": grab("Input price"),
        "output_price": grab("Output price"),
        "provider": grab("Provider"),
    }


# ------------------------------------------------------------------ mcp
LINK_RE = re.compile(r"-\s\[(.+?)\]\(https://olud\.ai/project/([a-z0-9-]+)\.html\)")


def parse_mcp(text, slug):
    out = []
    cat_name, cat_desc = title_and_desc(text)
    for rank, (label, proj_slug) in enumerate(LINK_RE.findall(text), start=1):
        name_m = re.search(r"\*\*([^*]+)\*\*", label)
        score_m = re.search(r"(\d{1,3})/100\s*$", label)
        stars_m = re.search(r"★\s*([\d,.]+k?)", label)
        lang_m = re.search(r"·\s*([A-Za-z+#]+)\s*·", label)
        out.append({
            "mcp_category": slug,
            "rank": rank,
            "project_slug": proj_slug,
            "project_url": f"https://olud.ai/project/{proj_slug}.html",
            "name": name_m.group(1) if name_m else None,
            "mcp_score": score_m.group(1) if score_m else None,
            "stars": stars_m.group(1) if stars_m else None,
            "language": lang_m.group(1) if lang_m else None,
        })
    return cat_name, cat_desc, out


# -------------------------------------------------------------------- alt
def parse_alt(text, slug):
    name, desc = title_and_desc(text)
    license_m = re.search(r"\nLicense\s*\n+\s*\n([^\n]+)\n", text)
    website_m = re.search(r"\[([a-z0-9.\-]+\.[a-z]{2,})\]\((https?://[^)]+)\)", text)
    replaces_m = re.search(r"\[([^\]]+)\]\(https://olud\.ai/alternatives/[^)]+\)", text)
    replaces_n_m = re.search(r"Replaces\s*\n+\s*\n(\d+)", text)
    others = re.findall(
        r"\[([^*\]]+)\*\s*·\s*⭐\s*([\d.,]+k?)\s*·\s*([^*]+)\*([^\]]*)\]\((https://olud\.ai/alt/[^)]+\.html)\)",
        text,
    )
    return {
        "slug": slug,
        "name": name,
        "description": desc,
        "url": source_url(text),
        "license": license_m.group(1).strip() if license_m else None,
        "website": website_m.group(2) if website_m else None,
        "replaces": replaces_m.group(1) if replaces_m else None,
        "replaces_count": int(replaces_n_m.group(1)) if replaces_n_m else None,
        "other_alternatives": [{"name": o[0], "stars": o[1], "language": o[2].strip(), "url": o[4]} for o in others],
    }


# ---------------------------------------------------------- blog / reports
def parse_article(text, slug):
    name, desc = title_and_desc(text)
    return {
        "slug": slug,
        "title": name,
        "description": desc,
        "url": source_url(text),
        "content_markdown": text,
    }


# ------------------------------------------------------------------ dna
MEMBER_RE = re.compile(r"-\s\[(.+?)\s★\s([\d,.]+k?)\]\((https://olud\.ai/project/[^)]+\.html)\)")
RELATED_RE = re.compile(r"-\s\[([a-z0-9-]+)\s(\d+)\]\((https://olud\.ai/dna/[^)]+\.html)\)")


def parse_dna(text, slug):
    name, desc = title_and_desc(text)
    members = [{"label": lbl.strip(), "stars": st, "project_url": url}
               for lbl, st, url in MEMBER_RE.findall(text)]
    related = [{"slug": s, "count": int(c), "url": u} for s, c, u in RELATED_RE.findall(text)]
    return {
        "slug": slug,
        "name": name,
        "description": desc,
        "url": source_url(text),
        "member_count": len(members),
        "members": members,
        "related_families": related,
    }


def run(cat, parser, single_record=True):
    files = sorted((RAW / cat).glob("*.md"))
    recs = []
    for f in files:
        slug = f.stem
        text = f.read_text(errors="ignore")
        if single_record:
            recs.append(parser(text, slug))
        else:
            recs.extend(parser(text, slug))
    STRUCTURED.mkdir(parents=True, exist_ok=True)
    with open(STRUCTURED / f"{cat}.jsonl", "w") as out:
        for r in recs:
            out.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"{cat}: {len(files)} files -> {len(recs)} records")
    return recs


def main():
    run("project", parse_project)
    run("tool", parse_tool)
    run("model", parse_model)
    run("dna", parse_dna)
    run("alt", parse_alt)
    run("blog", parse_article)
    run("reports", parse_article)

    # mcp: flatten server listings across the category pages
    mcp_servers = []
    mcp_cats = []
    for f in sorted((RAW / "mcp").glob("*.md")):
        slug = f.stem
        if slug == "index":
            continue
        text = f.read_text(errors="ignore")
        cat_name, cat_desc, servers = parse_mcp(text, slug)
        mcp_cats.append({"slug": slug, "name": cat_name, "description": cat_desc, "server_count": len(servers)})
        mcp_servers.extend(servers)
    STRUCTURED.mkdir(parents=True, exist_ok=True)
    with open(STRUCTURED / "mcp_categories.jsonl", "w") as out:
        for r in mcp_cats:
            out.write(json.dumps(r, ensure_ascii=False) + "\n")
    with open(STRUCTURED / "mcp_servers.jsonl", "w") as out:
        for r in mcp_servers:
            out.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"mcp: {len(mcp_cats)} categories -> {len(mcp_servers)} server entries")


if __name__ == "__main__":
    main()
