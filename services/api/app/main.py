from fastapi import FastAPI

from app.config import settings

app = FastAPI(title="Maava API")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "environment": settings.environment}
