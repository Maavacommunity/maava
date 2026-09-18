# Maava

Monorepo for the Portdex/Maava project.

## Layout

```
apps/
  frontend/     Next.js + TypeScript web app
  desktop/      Electron desktop shell
services/
  api/          FastAPI microservice, deployed to AWS Lambda (via Mangum)
scraper/        Python scraping jobs
pipelines/      Scheduled data pipeline scripts (run via GitHub Actions cron)
infra/          Terraform: VPC, Aurora Serverless Postgres, Lambda, API Gateway
packages/
  tsconfig/     Shared TypeScript configs
.github/workflows/  Per-package CI + scheduled pipeline runs
```

Node packages are wired together with plain pnpm workspaces (no Turborepo/Nx).
Python packages (`services/api`, `scraper`, `pipelines`) are independent
`pyproject.toml` projects — install each with `pip install .` in its own
virtualenv, or `pip install ./scraper ./pipelines` when one depends on
another.

## Prerequisites

- Node 20+ and [pnpm](https://pnpm.io) (`corepack enable` will provide it)
- Python 3.12+
- Docker (for local Postgres via `docker-compose.yml`)
- Terraform 1.7+ and an AWS account (for `infra/`)

## Getting started

```bash
# JS/TS apps
corepack enable
pnpm install
pnpm dev:frontend      # http://localhost:3000
pnpm dev:desktop        # opens Electron pointed at the frontend dev server

# Local Postgres (mirrors the RDS/Aurora setup used in prod)
docker compose up -d

# Microservice
cd services/api
python -m venv .venv && source .venv/bin/activate
pip install .[dev]
cp .env.example .env
uvicorn app.main:app --reload

# Scraper
cd scraper
python -m venv .venv && source .venv/bin/activate
pip install .[dev]
python -m scraper.main --target default

# Pipelines
cd pipelines
pip install ../scraper .[dev]
python -m pipelines.run_daily
```

## Infrastructure

`infra/` provisions a VPC, Aurora Serverless v2 (Postgres), a Lambda-backed
HTTP API Gateway for `services/api`, and the IAM/networking around them.
It's serverless by design — no always-on compute to manage.

```bash
cd infra
terraform init
terraform plan -var-file=environments/dev.tfvars
```

Set `TF_VAR_db_password` (never commit it) before planning/applying. Wire a
remote state backend (see the commented block in `infra/versions.tf`) and AWS
credentials before running this against a real environment — the
`infra-ci.yml` workflow currently only lints/validates until that's set up.

## CI

Each app/service has its own workflow, scoped by path filters, so a change
to `apps/frontend` doesn't trigger the Python or Terraform jobs:

- `frontend-ci.yml`, `desktop-ci.yml` — lint/typecheck/build
- `microservice-ci.yml` — test + build the Lambda deployment package
- `scraper-ci.yml`, `pipelines-ci.yml` — lint/test
- `pipelines-schedule.yml` — runs `pipelines/run_daily.py` on a daily cron
- `infra-ci.yml` — `terraform fmt`/`validate` on PR; plan/apply steps are
  stubbed out until AWS credentials are configured
