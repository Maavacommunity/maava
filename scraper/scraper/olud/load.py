#!/usr/bin/env python3
"""
Creates tables (if needed) and loads structured/*.jsonl into DynamoDB.
Defaults to the local DynamoDB container from the repo's docker-compose.yml;
point --endpoint-url at a real AWS endpoint (or pass '') to load into an
actual account.
"""
import argparse
import json

import boto3
from botocore.exceptions import ClientError

from scraper.olud.paths import STRUCTURED

# table_name -> (jsonl file, partition key, sort key or None)
TABLES = {
    "OludProjects":      ("project.jsonl",       "slug", None),
    "OludTools":         ("tool.jsonl",           "slug", None),
    "OludModels":        ("model.jsonl",          "slug", None),
    "OludDnaFamilies":   ("dna.jsonl",             "slug", None),
    "OludAlternatives":  ("alt.jsonl",             "slug", None),
    "OludBlog":          ("blog.jsonl",            "slug", None),
    "OludReports":       ("reports.jsonl",         "slug", None),
    "OludMcpCategories": ("mcp_categories.jsonl",  "slug", None),
    "OludMcpServers":    ("mcp_servers.jsonl",     "mcp_category", "project_slug"),
}


def get_client(endpoint_url, region):
    kwargs = dict(region_name=region)
    if endpoint_url:
        kwargs.update(endpoint_url=endpoint_url, aws_access_key_id="local", aws_secret_access_key="local")
    return boto3.resource("dynamodb", **kwargs), boto3.client("dynamodb", **kwargs)


def ensure_table(ddb_client, name, pk, sk):
    existing = ddb_client.list_tables()["TableNames"]
    if name in existing:
        return
    attrs = [{"AttributeName": pk, "AttributeType": "S"}]
    key_schema = [{"AttributeName": pk, "KeyType": "HASH"}]
    if sk:
        attrs.append({"AttributeName": sk, "AttributeType": "S"})
        key_schema.append({"AttributeName": sk, "KeyType": "RANGE"})
    print(f"creating table {name} (pk={pk}, sk={sk})")
    ddb_client.create_table(
        TableName=name,
        AttributeDefinitions=attrs,
        KeySchema=key_schema,
        BillingMode="PAY_PER_REQUEST",
    )
    ddb_client.get_waiter("table_exists").wait(TableName=name)


def clean_item(d):
    """Drop Nones/empty so we don't store noise; DynamoDB is fine with empty
    strings, but skipping keeps items smaller and avoids ambiguity."""
    out = {}
    for k, v in d.items():
        if v is None:
            continue
        if isinstance(v, list):
            v = [clean_item(x) if isinstance(x, dict) else x for x in v]
        out[k] = v
    return out


def load_table(ddb_resource, table_name, jsonl_file, pk):
    path = STRUCTURED / jsonl_file
    if not path.exists():
        print(f"  SKIP {table_name}: {jsonl_file} not found")
        return 0
    table = ddb_resource.Table(table_name)
    count = 0
    with table.batch_writer(overwrite_by_pkeys=None) as batch:
        for line in path.open():
            line = line.strip()
            if not line:
                continue
            item = clean_item(json.loads(line))
            if not item.get(pk):
                continue
            batch.put_item(Item=item)
            count += 1
    return count


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--endpoint-url", default="http://localhost:8000",
                     help="DynamoDB endpoint; pass '' to hit real AWS")
    ap.add_argument("--region", default="us-east-1")
    ap.add_argument("tables", nargs="*", help="subset of table names to load (default: all)")
    args = ap.parse_args()

    endpoint = args.endpoint_url or None
    resource, client = get_client(endpoint, args.region)

    targets = {k: v for k, v in TABLES.items() if not args.tables or k in args.tables}
    for name, (fname, pk, sk) in targets.items():
        try:
            ensure_table(client, name, pk, sk)
        except ClientError as e:
            print(f"  ERROR creating {name}: {e}")
            continue
        n = load_table(resource, name, fname, pk)
        print(f"{name}: loaded {n} items")


if __name__ == "__main__":
    main()
