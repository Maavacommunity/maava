"""
Read-only API over the olud.ai mirror data in DynamoDB, for apps/olud-viewer.

Each table is small enough (largest is ~10.6k projects) to cache fully in
memory at startup via a Scan, then search/paginate in-process — far snappier
than re-scanning DynamoDB per request, and avoids needing a secondary search
index for a local test app.
"""
import boto3
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings

ddb = boto3.resource(
    "dynamodb",
    region_name=settings.aws_region,
    endpoint_url=settings.dynamodb_endpoint or None,
    aws_access_key_id="local" if settings.dynamodb_endpoint else None,
    aws_secret_access_key="local" if settings.dynamodb_endpoint else None,
)

app = FastAPI(title="olud.ai mirror API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

TABLES = {
    "projects": ("OludProjects", "slug"),
    "tools": ("OludTools", "slug"),
    "models": ("OludModels", "slug"),
    "dna": ("OludDnaFamilies", "slug"),
    "alternatives": ("OludAlternatives", "slug"),
    "blog": ("OludBlog", "slug"),
    "reports": ("OludReports", "slug"),
    "mcp-categories": ("OludMcpCategories", "slug"),
    "mcp-servers": ("OludMcpServers", "project_slug"),
}

CACHE = {}  # category -> list[dict]


def scan_all(table_name):
    table = ddb.Table(table_name)
    items, resp = [], table.scan()
    items.extend(resp["Items"])
    while "LastEvaluatedKey" in resp:
        resp = table.scan(ExclusiveStartKey=resp["LastEvaluatedKey"])
        items.extend(resp["Items"])
    return items


def to_int(v):
    try:
        return int(str(v).replace(",", "").replace(" ", "").lower()
                   .replace("k", "000").split(".")[0]) if v else 0
    except Exception:
        return 0


@app.on_event("startup")
def load_cache():
    for cat, (table_name, pk) in TABLES.items():
        items = scan_all(table_name)
        CACHE[cat] = items
        print(f"cached {cat}: {len(items)} items from {table_name}")


def search_fields(cat):
    return {
        "projects": ["name", "description", "owner", "category", "language"],
        "tools": ["name", "description", "owner", "category", "type"],
        "models": ["name", "description", "provider"],
        "dna": ["name", "description"],
        "alternatives": ["name", "description", "replaces"],
        "blog": ["title", "description"],
        "reports": ["title", "description"],
        "mcp-categories": ["name", "description"],
        "mcp-servers": ["name", "mcp_category", "language"],
    }.get(cat, [])


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "environment": settings.environment}


@app.get("/api/stats")
def stats():
    return {cat: len(items) for cat, items in CACHE.items()}


@app.get("/api/{category}")
def list_items(category: str, q: str = Query(None), sort: str = Query(None),
                page: int = Query(1, ge=1), page_size: int = Query(30, ge=1, le=200)):
    if category not in TABLES:
        raise HTTPException(404, f"unknown category '{category}'")
    items = CACHE[category]
    if q:
        ql = q.lower()
        fields = search_fields(category)
        items = [it for it in items if any(ql in str(it.get(f, "")).lower() for f in fields)]
    if sort == "stars" and category in ("projects", "tools", "mcp-servers"):
        items = sorted(items, key=lambda it: to_int(it.get("stars")), reverse=True)
    total = len(items)
    start = (page - 1) * page_size
    page_items = items[start:start + page_size]
    return {"total": total, "page": page, "page_size": page_size, "items": page_items}


@app.get("/api/{category}/{slug}")
def get_item(category: str, slug: str):
    if category not in TABLES:
        raise HTTPException(404, f"unknown category '{category}'")
    _, pk = TABLES[category]
    for it in CACHE[category]:
        if it.get(pk) == slug:
            return it
    raise HTTPException(404, "not found")
