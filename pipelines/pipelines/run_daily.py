"""Daily pipeline: run the scraper, then process/load results.

Scheduled by .github/workflows/pipelines-schedule.yml. Kept as a plain
script (no orchestrator) — add steps to `main()` as pipelines grow.
"""

import logging
import subprocess
import sys

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("pipelines.daily")


def run_scraper() -> None:
    logger.info("running scraper")
    subprocess.run(
        [sys.executable, "-m", "scraper.main", "--target", "default"],
        check=True,
    )


def process_results() -> None:
    logger.info("processing scraped results")
    # TODO: transform/load scraped data.


def main() -> None:
    run_scraper()
    process_results()


if __name__ == "__main__":
    main()
