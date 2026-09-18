"""Scraping/parsing/loading pipeline for the olud.ai mirror.

Run as three separate steps:

    python -m scraper.olud.scrape [category ...]
    python -m scraper.olud.parse
    python -m scraper.olud.load [--endpoint-url ...] [table ...]
"""
