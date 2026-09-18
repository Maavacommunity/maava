import pathlib

DATA_ROOT = pathlib.Path(__file__).resolve().parent.parent.parent / "data" / "olud"
RAW = DATA_ROOT / "raw"
STRUCTURED = DATA_ROOT / "structured"
LOGS = DATA_ROOT / "logs"
MANIFEST = DATA_ROOT / "url_manifest.json"
