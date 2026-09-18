# Python peaked in 2024: from 57% of new AI projects to 36% | olud.ai

> Python fell from 57.5% of new AI projects in 2024 to 36.4% in 2026, while TypeScript rose to 27.3% and Jupyter notebooks collapsed to 0.9%. Measured across 10,216 repositories on olud.ai.

_Source: https://olud.ai/blog/python-peaked-2026/_

---

[AI Tools](https://olud.ai/#freetools)
[Projects](https://olud.ai/#projects)
[Directory](https://olud.ai/#tools)

[🏆 Leaderboard](https://olud.ai/#leaderboard)
[📡 News](https://olud.ai/#news)
[✨ Prompts](https://olud.ai/#prompts)
[⚖️ Compare Models](https://olud.ai/compare/)
[🔧 Tools](https://olud.ai/tools/)
[📦 Projects](https://olud.ai/projects/)
[🚀 Spaces](https://olud.ai/spaces/)

[Blog](https://olud.ai/blog/)

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Languages

Ecosystem data

## Python peaked in 2024: from 57% of new AI projects to 36%

We grouped 10,216 AI repositories by the year they were created. Python sat between 53 % and 57 % of every single cohort from 2017 to 2024. Among projects started in 2026 it is at 36 %, and TypeScript is at 27 %.

Updated 2 August 2026·7 min read·No paywall

### TL;DR — the short version

**Python's share of new AI projects was flat for eight years** — between 53 % and 57.5 % every year from 2017 through 2024 — then fell to 49.4 % in 2025 and 36.4 % in 2026.

**TypeScript went from 1.8 % to 27.3 %.** It is now within nine points of Python among projects started this year.

**Jupyter notebooks have essentially vanished** from new projects: 14.6 % in 2021, 0.9 % in 2026. That single line is the clearest signal in the data.

Language-popularity charts are usually about all repositories that exist, which means they mostly measure history. A project written in 2019 keeps voting forever. We wanted the other question: **what are people reaching for when they start something new?**

So we took all 10,216 repositories in the catalogue, grouped them by the year they were created, and looked at the main language within each cohort. Each year is a separate snapshot of what “new AI project” meant at the time.

Main language of AI repositories, grouped by creation year. Python, the solid line, falls from 57.5 % of the 2024 cohort to 36.4 % of the 2026 one; TypeScript, dashed, rises from 2.5 % to 27.3 %.

### Eight flat years, then a cliff

The remarkable part is not the fall. It is how still the line was beforehand.

| Cohort | Repos | Python | TypeScript | Jupyter |
| --- | --- | --- | --- | --- |
| 2019 | 520 | 53.5 % | 5.4 % | 12.3 % |
| 2021 | 471 | 53.7 % | 5.3 % | 14.6 % |
| 2023 | 1,610 | 56.7 % | 13.5 % | 7.6 % |
| 2024 | 1,121 | **57.5 %** | 14.4 % | 8.0 % |
| 2025 | 1,336 | 49.4 % | 22.3 % | 2.5 % |
| 2026 | 1,505 | **36.4 %** | **27.3 %** | 0.9 % |

Through the entire deep-learning boom, through the transformer papers, through the first two years of the LLM era, Python's share of new AI work did not move. It peaked in 2024, the year of the agent frameworks, and then dropped twenty-one points in twenty-four months.

### What is actually being built has changed

The Jupyter line tells you why. In 2021, one new AI repository in seven was primarily a notebook. Today it is one in a hundred and ten.

A notebook is how you share an experiment. A TypeScript repository is how you ship a product. The languages did not change their merits between 2024 and 2026 — the work did. Model training moved to a small number of large labs, and what everyone else builds now sits on top of an API: interfaces, agents, retrieval layers, orchestration, tooling. That work lives where the users are, which is a browser and a Node process.

You can see the same shift in the rest of the 2026 cohort:

| Language | Share of projects started in 2026 | In 2022 |
| --- | --- | --- |
| Python | 36.4 % | 54.5 % |
| TypeScript | 27.3 % | 7.2 % |
| Rust | 8.4 % | 3.2 % |
| JavaScript | 8.0 % | 1.7 % |
| Go | 5.6 % | 2.7 % |
| C++ | 1.0 % | 6.0 % |
| Jupyter Notebook | 0.9 % | 14.4 % |

Rust more than doubled, and Go nearly did. Both are infrastructure languages: inference servers, gateways, vector stores, the plumbing that appears once a field stops experimenting and starts running things in production. C++ collapsing from 6 % to 1 % is the same story from the other end — writing your own kernels stopped being a common way to enter this field.

### Three honest caveats
- **This is our catalogue, not GitHub.** 10,216 AI repositories that met our inclusion criteria. It is a large sample of the field, not a census of it.
- **One language per repository.** The main language is the one with the most bytes of code. A project with a Python core and a TypeScript front end is counted once, and which way it falls depends on how much of each got written. Some of the shift is genuinely this — AI projects grew user interfaces.
- **2026 is seven months long.** That affects the count in the cohort, not the percentages inside it. But a partial year is a partial year, and the December figure may differ from today's.

### So is Python finished?

No, and the data does not say that. Python is still the largest single language among new AI projects by nine points, and it remains the language of essentially everything that touches a model directly — training, fine-tuning, evaluation, the entire scientific stack.

What ended is the assumption that *an AI project* and *a Python project* are the same sentence. For eight years that was a safe bet. Among things started this year, it is now true slightly more often than not.

You can browse the catalogue by language on the [languages page](https://olud.ai/languages.html), or see what is being created right now in [new projects](https://olud.ai/projects.html).
