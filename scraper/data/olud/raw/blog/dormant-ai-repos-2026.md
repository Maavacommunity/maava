# A quarter of the most-starred AI software has stopped receiving commits | olud.ai

> 223 of 848 AI repositories above 10,000 stars have not received a commit in a month; 63 have been silent for over a year, holding 1.27 million stars between them. Python projects go quiet five times more often than Go ones.

_Source: https://olud.ai/blog/dormant-ai-repos-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Project health

Ecosystem data

## A quarter of the most-starred AI software has stopped receiving commits

Among the 848 AI code repositories above 10,000 stars, 223 have gone a month without a commit and 63 have gone a full year. Star counts do not decay, so nothing on the page tells you.

Updated 2 August 2026·7 min read·No paywall

### TL;DR — the short version

**223 of 848 AI code repositories above 10,000 stars — 26 % — have had no commit for over a month.** 63 of them have had none for over a year, and those 63 hold 1.27 million stars between them.

**Python projects go quiet five times more often than Go projects.** 36 % against 7 %.

**We excluded courses, awesome-lists and books before counting.** A finished book does not need commits, and including those would have inflated the figure to 33 % while telling you nothing.

A star is permanent. Somebody starred a repository in 2023 because it was the best thing available that week, and that star is still there, still counting, still pushing the project up every ranking that sorts by popularity — including ours.

The last commit date is not permanent. It is the one number on a GitHub page that tells you whether anyone is still home.

So we checked all 1,092 repositories in the catalogue with more than 10,000 stars, and asked how long it had been since each one received a commit.

### First, a correction we had to make to ourselves

The raw answer is 364 of 1,092, or 33 %. We do not think that number is honest, and here is why.

A large share of the most-starred repositories in AI are not software. They are courses, awesome-lists, interview-prep collections, roadmaps and books. *system-design-101* has 86,592 stars and has not been touched in 485 days. *d2l-zh* has 78,962 stars and 733 days of silence. Neither is broken. A completed textbook is supposed to stop changing.

Counting those as decay would be a cheap way to reach a bigger headline. So we separated them:

| Kind | Repos above 10k stars | Silent over a month |
| --- | --- | --- |
| Courses, lists, books | 244 | 141  (58 %) |
| **Software you install** | **848** | **223  (26 %)** |

26 % is the number that matters. It is smaller than the headline we could have written, and it is about code that people are actually running.

### Sixty-three projects, 1.27 million stars, one year of silence

Within that 848, sixty-three repositories have gone a full year or more without a single commit. They are not obscure:

| Repository | Stars | Days since last commit | Language |
| --- | --- | --- | --- |
| nomic-ai/gpt4all | 77,402 | 432 | C++ |
| lencx/ChatGPT | 54,401 | 703 | Rust |
| coqui-ai/TTS | 45,770 | 716 | Python |
| zai-org/ChatGLM-6B | 41,012 | 766 | Python |
| QuivrHQ/quivr | 39,374 | 389 | Python |
| TencentARC/GFPGAN | 37,614 | 737 | Python |
| LAION-AI/Open-Assistant | 37,377 | 715 | Python |
| myshell-ai/OpenVoice | 36,968 | 470 | Python |
| BVLC/caffe | 34,571 | 732 | C++ |
| CMU-Perceptual-Computing-Lab/openpose | 34,291 | 729 | C++ |

Several of these are still the first result people find when they search for what they do. GFPGAN is still widely recommended for face restoration. Coqui’s TTS is still in tutorials. Open-Assistant was the community answer to ChatGPT and has been still for nearly two years.

None of this makes them useless — frozen code that works keeps working. It does mean nobody is merging your bug report, updating the dependency with the advisory in it, or making it run on the driver you installed last month.

### Python goes quiet five times more often than Go

The split by language is sharper than we expected.

Share of repositories above 10,000 stars with no commit in the last month, by main language: Python 36 %, JavaScript 32 %, C++ 18 %, Rust 16 %, TypeScript 14 %, Go 7 %.

We do not think this is about the languages. It is about what people build with them, and who builds it.

Python is where research prototypes live. A paper ships with code, the code gets 30,000 stars in a fortnight, the authors graduate, and the repository is done — it was never a product. Go and Rust in this catalogue are mostly infrastructure: inference servers, gateways, runtimes. That kind of project either has someone running it in production or it has no stars at all.

TypeScript at 14 % sits where you would expect application code that has users to sit.

### How to read a star count from now on
- **Look at the last commit before the star count.** One is a measure of the past, the other of the present.
- **A month of silence is normal. A year is a decision.** Mature software genuinely goes quiet between releases; twelve months without a merge is a maintainer who has moved on.
- **Check the open issues, not just the dates.** Frozen code with three open issues is finished. Frozen code with 900 is abandoned.
- **For research code, assume it is a snapshot.** It was published to reproduce a paper. That is a legitimate purpose and it is complete.

Every project page in the catalogue shows the last commit date next to the star count, and the [projects page](https://olud.ai/projects.html) lets you sort by recent activity rather than popularity.

### Method

10,216 repositories in the catalogue, of which 1,092 have more than 10,000 stars. Dormancy is measured from the last push date recorded by GitHub, as of 2 August 2026. The content/software split uses the repository name and main language: anything named as a course, list, roadmap, book, cheatsheet or paper collection, and anything whose main language is Jupyter Notebook, Markdown, HTML or TeX, was classified as content. That rule is imperfect at the margins — a few genuine notebook-based tools will have been set aside — and it is deliberately biased toward *excluding* repositories, so the 26 % is a floor rather than a ceiling.

A push is not the same as a release, and some projects here are maintained on a branch we do not see. Where we could not tell, we counted the repository as active.
