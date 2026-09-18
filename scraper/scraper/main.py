"""Entry point for a single scrape run. Wire real targets/parsers in here."""

import argparse
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("scraper")


def run(target: str) -> None:
    logger.info("scraping target=%s", target)
    # TODO: fetch, parse, and persist results.


def main() -> None:
    parser = argparse.ArgumentParser(description="Run a Maava scrape job")
    parser.add_argument("--target", default="default", help="Named scrape target")
    args = parser.parse_args()
    run(args.target)


if __name__ == "__main__":
    main()
