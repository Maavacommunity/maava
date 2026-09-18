from scraper.olud.parse import parse_alt, parse_project, parse_tool

PROJECT_MD = """# awesome-example — Curated list

> A curated list of example things.

_Source: https://github.com/example/awesome-example_

by **example-org**

[1,234](x)
Stars

[56](x)
Forks

[MIT](x)
License

[Python](x)
Language

[View on GitHub](https://github.com/example/awesome-example)
"""

TOOL_MD = """# Example Tool — Do things

> Does things well.

_Source: https://example.com_

by **acme**

| Category | Productivity |
| --- | --- |
| Type | Utility |
| License | MIT |

[Visit website →](https://example.com)
[View on GitHub](https://github.com/acme/example-tool)
"""

ALT_MD = """# Example Alt — Open alternative

> An open-source alternative.

_Source: https://olud.ai/alt/example-alt.html_

License

MIT
"""


def test_parse_project_extracts_core_fields() -> None:
    rec = parse_project(PROJECT_MD, "example-org__awesome-example")
    assert rec["slug"] == "example-org__awesome-example"
    assert rec["name"] == "awesome-example"
    assert rec["description"] == "A curated list of example things."
    assert rec["owner"] == "example-org"
    assert rec["stars"] == "1,234"
    assert rec["license"] == "MIT"
    assert rec["github_url"] == "https://github.com/example/awesome-example"


def test_parse_tool_extracts_glance_table() -> None:
    rec = parse_tool(TOOL_MD, "example-tool")
    assert rec["name"] == "Example Tool"
    assert rec["category"] == "Productivity"
    assert rec["license"] == "MIT"
    assert rec["website"] == "https://example.com"


def test_parse_alt_extracts_license() -> None:
    rec = parse_alt(ALT_MD, "example-alt")
    assert rec["name"] == "Example Alt"
    assert rec["license"] == "MIT"
    assert rec["other_alternatives"] == []
