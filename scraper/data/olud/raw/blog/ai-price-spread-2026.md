# The same job costs 245× more depending on which model you pick | olud.ai

> Output prices across 190 AI models span 500× — $0.03 to $15.00 per million tokens, median $0.87. On a month of ordinary agent work the bill ranges from $0.06 to $13.50. Where the market actually clusters.

_Source: https://olud.ai/blog/ai-price-spread-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Model pricing

Pricing data

## The same job costs 245× more depending on which model you pick

Output prices across 190 AI models run from $0.03 to $15.00 per million tokens. On one month of ordinary agent work, that is the difference between six cents and thirteen dollars fifty — for output most teams never compare.

Updated 7 August 2026·6 min read·No paywall

### TL;DR — the short version

**Output prices across the 190 models we track run from $0.03 to $15.00 per million tokens — a 500× spread.** The median is $0.87.

**On a concrete workload — 2 million input tokens and 500,000 output tokens, roughly a busy month of agent use — the bill ranges from 6 cents to $13.50.** Same task, 245× the price.

**Thirteen models cost nothing at all**, and 59 sit under fifty cents. The expensive end is almost empty: exactly two models cost more than $10.

Model pricing is quoted per million tokens, which is a unit nobody has intuition for. So the numbers slide past: $0.60 and $6.00 both read as “cheap enough”, and you pick on benchmark scores or on whichever name you saw last.

Here is what that habit costs.

### A 500× spread, on the same shelf

Across the 190 commercial models we price, output runs from **$0.03 per million tokens** (Mistral Nemo) to **$15.00** (Kimi K3). The median is $0.87.

These are not different products in the way a bicycle and a car are different. They are all text-in, text-out APIs, most of them will handle your summarisation job perfectly well, and they sit next to each other in the same dropdown in whatever framework you are using.

### Where the models actually cluster

Number of models in each output-price band, US$ per million tokens: 13 free, 26 under $0.20, 33 between $0.20 and $0.50, 37 between $0.50 and $1, 59 between $1 and $3, 20 between $3 and $10, and 2 above $10.

The shape is worth a second look. The market has a fat middle at $1–3 — that is where 59 models compete, and where most defaults land. Below it sits a large, quiet population: **72 models priced under a dollar**, thirteen of them free.

Above $3 the shelf empties fast. Twenty models between $3 and $10, and precisely two above: Kimi K3 at $15.00 and Cohere’s Command R+ at $10.00.

### What it looks like on a real bill

Per-million pricing only becomes real when you attach it to work. Take a month of moderate agent use: **2 million input tokens and 500,000 output tokens** — a few thousand document summaries, or one developer using a coding assistant regularly.

| Model | Provider | That month costs |
| --- | --- | --- |
| Mistral Nemo | Mistral AI | $0.06 |
| Llama 3.1 8B Instruct | Meta | $0.14 |
| *the median model* | — | $0.97 |
| Qwen3.6 Max Preview | Alibaba | $5.68 |
| Kimi K3 | Moonshot AI | $13.50 |

Six cents against thirteen dollars and fifty cents. If that workload is a product feature running for ten thousand users, the same two rows are $600 against $135,000.

**The point is not that cheap wins.** Kimi K3 is not overpriced — it is priced for work the eight-cent models genuinely cannot do. The point is that the gap is 245×, so the question “does this task actually need the expensive model?” is worth asking every single time, and almost nobody asks it once.

### Three habits that cost money for no reason
- **One model for everything.** Classification, routing, extraction and formatting are not reasoning. Sending them to a flagship is paying reasoning prices for lookup work.
- **Ignoring the input/output split.** Output usually costs three to five times input. A prompt that asks for a rewritten document instead of a diff can quietly multiply the bill.
- **Never re-checking.** We record hundreds of price changes a week. The model you benchmarked in March may be twice the price — or half — of the one next to it today.

### How to pick without spreadsheets

Sort by price, filter by the context window you actually need, and start from the bottom rather than the top. Run your real prompts against the cheapest model that could plausibly work, then move up only when it visibly fails. Most teams stop two or three rungs lower than where they started.

Our [model leaderboard](https://olud.ai/leaderboard.html) lists all 190 with live input and output pricing, context windows and tool-calling support, and the [head-to-head pages](https://olud.ai/models-vs/) put any two side by side. Everything is free to read and there is no account.

### Method

190 commercial models with published list pricing, collected from provider price pages via OpenRouter and refreshed daily; figures here are those of 7 August 2026. Prices are US dollars per million tokens. “Free” means an output price of zero on the free tier the provider publishes — those tiers carry rate limits we do not model.

The monthly example is arithmetic on list prices: 2 × input price plus 0.5 × output price. It ignores caching discounts, batch pricing and committed-use agreements, all of which move real bills. Self-hosted open-weight models are excluded here because their cost is hardware, not tokens — for those, see our [local AI](https://olud.ai/local-ai.html) pages.
