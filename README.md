# Maava

Monorepo for the Portdex/Maava project.

## Layout

```
apps/
  frontend/     Next.js + TypeScript web app
  desktop/      Electron desktop shell
  olud-viewer/  Static frontend for the olud.ai mirror (browses services/olud-api)
services/
  api/          FastAPI microservice, deployed to AWS Lambda (via Mangum)
  olud-api/     Read-only FastAPI API over the olud.ai mirror data, backed by DynamoDB
scraper/        Python scraping jobs
  scraper/olud/ Scrape + parse + load pipeline for the olud.ai mirror
  data/olud/    Scraped markdown (raw/) and parsed JSONL (structured/) for the mirror
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
- Docker (for local Postgres + DynamoDB via `docker-compose.yml`)
- Terraform 1.7+ and an AWS account (for `infra/`)

## Getting started

```bash
# JS/TS apps
corepack enable
pnpm install
pnpm dev:frontend      # http://localhost:3000
pnpm dev:desktop        # opens Electron pointed at the frontend dev server
pnpm dev:olud-viewer    # http://localhost:5173

# Package installers for each OS (run from apps/desktop)
pnpm --filter desktop package   # outputs to apps/desktop/release/ (dmg/zip, nsis, AppImage/deb)

# Local Postgres + DynamoDB (mirrors the Aurora setup used in prod, plus
# the DynamoDB local instance the olud.ai mirror pipeline uses)
docker compose up -d

# Microservice
cd services/api
python -m venv .venv && source .venv/bin/activate
pip install .[dev]
cp .env.example .env
uvicorn app.main:app --reload

# olud.ai mirror API (reads from DynamoDB local)
cd services/olud-api
python -m venv .venv && source .venv/bin/activate
pip install .[dev]
cp .env.example .env
uvicorn app.main:app --reload --port 8080

# Scraper
cd scraper
python -m venv .venv && source .venv/bin/activate
pip install .[dev]
python -m scraper.main --target default

# olud.ai mirror pipeline (scrape -> parse -> load into DynamoDB local)
cd scraper
python -m scraper.olud.scrape   # fetches raw markdown into data/olud/raw/
python -m scraper.olud.parse    # writes data/olud/structured/*.jsonl
python -m scraper.olud.load     # loads structured/*.jsonl into DynamoDB local

# Pipelines
cd pipelines
pip install ../scraper .[dev]
python -m pipelines.run_daily
```

## Desktop app

`apps/desktop` is the "Steam for AI tools" client: it ships a local agent
catalog (`apps/desktop/src/agentRegistry.ts`), installs an agent into an
isolated Python virtualenv under Electron's per-user data directory, and
launches it with output streamed live into the UI. It registers the
`maava://` protocol, so "Install & Launch in Desktop" links from the website
(`apps/frontend`) open the app and kick off an install directly.

A bundled `hello-agent` (no external dependencies) exercises the full
install → launch → uninstall pipeline offline; the rest of the catalog
installs from their real upstream git repos and needs network + the
runtime listed in their manifest.

### Branches & releases

- `main` — production. Tagging a commit on `main` as `desktop-v<version>`
  (e.g. `git tag desktop-v0.1.0 && git push origin desktop-v0.1.0`) triggers
  `desktop-release.yml`, which builds installers for macOS/Windows/Linux and
  opens a **draft** GitHub Release with them attached for review before
  publishing.
- `develop` — everyday work and testing. Every push to `develop` builds the
  same installers and publishes them immediately as a **pre-release**
  (tagged `desktop-test-<short-sha>`) so you can grab a build to test without
  cutting a version tag.

Both channels run through the same workflow file; CI (typecheck/build) also
runs on pushes to either branch, not just `main`.

Known local dev quirk: on very new Node versions, `electron`'s postinstall
can silently extract only `dist/locales` and stop (an `extract-zip`
incompatibility), leaving `electron failed to install correctly` errors. If
that happens, re-extract the cached zip manually:

```bash
cd node_modules/.pnpm/electron@*/node_modules/electron
rm -rf dist && unzip -q "$(find ~/.cache/electron -name 'electron-v*.zip' | head -1)" -d dist
echo electron > path.txt
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
- `microservice-ci.yml`, `olud-api-ci.yml` — test + build the Lambda deployment package
- `scraper-ci.yml`, `pipelines-ci.yml` — lint/test
- `pipelines-schedule.yml` — runs `pipelines/run_daily.py` on a daily cron
- `infra-ci.yml` — `terraform fmt`/`validate` on PR; plan/apply steps are
  stubbed out until AWS credentials are configured
