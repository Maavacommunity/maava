# One in five AI projects has no licence a machine can read | olud.ai

> 1,641 of 8,246 AI software repositories have no machine-readable licence — 8.3 million stars with no stated permission. The rate is flat across popularity: 21.5% under 1k stars, 19.1% above 50k.

_Source: https://olud.ai/blog/unlicensed-ai-projects-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Licensing

Ecosystem data

## One in five AI projects has no licence a machine can read

1,641 of the 8,246 AI software repositories we track carry no identifiable licence, and together they hold 8.3 million stars. The rate barely changes between a 200-star experiment and a 50,000-star tool.

Updated 7 August 2026·6 min read·No paywall

### TL;DR — the short version

**1,641 of the 8,246 AI software projects we track — one in five — carry no licence that GitHub can identify.** Between them they hold 8.3 million stars.

**Popularity does not protect you.** The rate is 21.5 % below a thousand stars and 19.1 % above fifty thousand. It is essentially flat.

**Without an identifiable licence, the legal default is that you have no permission at all.** Not permissive, not copyleft — nothing.

Open source is a licensing arrangement before it is anything else. A public repository is not a permission slip: under the Berne Convention, code is copyrighted the moment it is written, and the author keeps every right they have not explicitly given away.

So we asked a boring question of the catalogue: how many AI projects actually say what you are allowed to do with them?

### One in five says nothing

Of the 8,246 repositories we classify as software — courses, awesome-lists, roadmaps and books excluded, using the same rule as our [dormancy analysis](https://olud.ai/blog/dormant-ai-repos-2026/) — **1,641 have no SPDX licence identifier**. That is 19.9 %.

The excluded content is worse, for the record: 39.5 % of the 2,090 courses and lists have no licence either. We left them out because nobody deploys a roadmap.

### It is not a hobby-project problem

This was the finding we did not expect. The intuitive story — someone pushes a weekend experiment and never gets round to adding a LICENSE file — would produce a rate that falls sharply as projects get serious. It does not fall.

Share of AI software repositories with no machine-readable licence, by star count: under 1k 21.5 %, 1k–10k 18.1 %, 10k–50k 19.8 %, over 50k 19.1 %.

A repository with fifty thousand stars is almost exactly as likely to be unlicensed as one with two hundred. Among the 175 unlicensed projects above 10,000 stars are tools you have probably installed.

Language barely moves it either: Go is the most disciplined at 15.1 %, C++ the least at 23.3 %, and everything else sits between 18 and 22 %.

### “No licence” covers two different situations

We need to be precise, because the two cases look identical from the outside and have different consequences.

**Some projects genuinely have nothing.** No LICENSE file, no terms in the README, no statement anywhere. The default applies: all rights reserved. You may look at the code. You may not copy it into your product.

**Others have a licence that simply is not one of the standard identifiers.** A custom variant, a source-available licence with commercial restrictions, a modified BSD, terms written by a company lawyer. Some of the biggest names in our unlicensed list fall into this second group — they are not lawless, they are just not standard.

The practical problem is that *no automated tool can tell the two apart*. Your dependency scanner reports “unknown” for both. Your compliance dashboard reports “unknown”. And increasingly, the coding agent that just pulled that snippet into your codebase reported nothing at all, because it never looked.

**The agent-era version of this problem.** When a human copied a function, a human could read the licence. AI coding assistants suggest code at a rate no reviewer checks line by line. A fifth of the AI ecosystem being legally unclassifiable is a much bigger deal in 2026 than it was in 2022.

### What this means in practice
- **Reading the code is always allowed.** Learning from it, understanding an approach, being inspired — none of that needs a licence.
- **Shipping it is not.** Copying unlicensed code into a product you distribute or sell is copyright infringement, however public the repository was.
- **Running it internally sits in a grey zone** that depends on your jurisdiction and on how the code got to you. Ask a lawyer, not a blog.
- **Just ask.** Opening an issue that says “we would like to use this, would you consider adding a licence?” works far more often than people expect. Maintainers usually forgot, and most add MIT within a week.

### If you maintain one of these

Adding a licence takes about ninety seconds on GitHub: *Add file* → *Create new file* → type `LICENSE` → a template picker appears. MIT if you want maximum adoption, Apache-2.0 if you want the same plus an explicit patent grant, AGPL-3.0 if you want anyone running a modified version as a service to publish their changes.

It is the single highest-leverage minute you can spend on your project. Without it, every serious company that finds your work has a policy that says: do not touch.

Every project page on olud.ai shows the detected licence next to the health score — and shows it as unknown when it is unknown, rather than guessing.

### Method

10,336 AI repositories tracked as of 7 August 2026. Licence identifiers come from the GitHub API, which returns an SPDX identifier when it recognises the LICENSE file and nothing when it does not. We count “no identifiable licence” as the absence of that identifier — which, as explained above, merges genuinely unlicensed projects with those using non-standard terms. We separated software from content (courses, lists, books) with the same name-and-language rule used in our dormancy analysis, and report the software figure.

This article describes what our data shows about licence metadata. It is not legal advice, and the authors are not lawyers.
