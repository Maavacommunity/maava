# The AI frontier is a plateau: Opus 5, Fable 5, GPT-5.6 and Kimi K3 compared | olud.ai

> Claude Opus 5, Claude Fable 5, GPT-5.6 and Kimi K3 sit within 3.6 points of each other on intelligence while their prices vary by 3.3x. Measured numbers, updated daily, and what they mean when you actually pick one.

_Source: https://olud.ai/blog/frontier-models-plateau-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Frontier models

Model comparison

## The frontier is a plateau — and one of the four is open

Claude Opus 5, Claude Fable 5, GPT-5.6 Sol and Kimi K3 land within 3.6 points of each other on intelligence. Their output prices vary by 3.3×. That gap between capability and price is the whole story.

Updated 28 July 2026·8 min read·No paywall

### TL;DR — the short version

**Claude Opus 5 leads on both indices and costs half what Claude Fable 5 costs.** Anthropic’s flagship is not Anthropic’s best model on these measures.

**Kimi K3 is open-weight and lands 3.6 points behind the leader**, at 30 % of Fable 5’s output price. At $15 per million output tokens it costs exactly what GPT-5.6 Terra costs — and scores 2.1 points higher.

**Price no longer tracks capability at the top.** Choose on latency, licence and context window, because that is where these four genuinely differ.

### The numbers, this morning

Everything below comes from our daily benchmark fusion, sourced from Artificial Analysis and rebuilt every morning. Two composite indices — Intelligence and Coding — plus the throughput and price we track ourselves. No estimates, no rounding up.

| Model | Intelligence | Coding | $ / 1M out | Tokens / s | Weights |
| --- | --- | --- | --- | --- | --- |
| **Claude Opus 5** | 60.7 | 78.0 | $25 | 62.8 | Closed |
| **Claude Fable 5** | 59.9 | 76.5 | $50 | 71.3 | Closed |
| **GPT-5.6 Sol** | 58.9 | 77.4 | $30 | 90.2 | Closed |
| **Kimi K3** | 57.1 | 76.2 | $15 | 32.9 | **Open** |
| **GPT-5.6 Terra** | 55.0 | 76.7 | $15 | 165.4 | Closed |
| **GPT-5.6 Luna** | 51.2 | 71.4 | $6 | 220.4 | Closed |
| **DeepSeek V4 Flash** | 40.3 | 56.2 | $0.28 | 125.4 | **Open** |

Read the top four rows again. The spread from Kimi K3 to Opus 5 is **3.6 points of intelligence** — about six percent. The spread in output price across those same four models is **$15 to $50**. Capability has compressed; pricing has not.

### Anthropic’s flagship is not its best model

Claude Fable 5 is the model Anthropic puts forward, and it is the most expensive of the seven at $50 per million output tokens. Claude Opus 5 beats it on both indices — 60.7 against 59.9 on intelligence, 78.0 against 76.5 on coding — for half the price.

Opus 5 is also faster to first token: 31 seconds against 80. On a long agentic run that difference compounds.

Claude Opus 5 versus Claude Fable 5: output price per million tokens

Opus 5 leads both indices at half the price. Redrawn daily from live pricing.

There is a caveat worth stating plainly: Fable 5 runs an adaptive-reasoning configuration with an Opus 4.8 fallback, so the two are not identical products. But on the numbers a buyer actually compares — score, price, latency — the cheaper one wins on all three.

### An open-weight model now matches OpenAI’s mid-tier, at the same price

Kimi K3, from Moonshot AI, ships with open weights. It scores **57.1** on intelligence. GPT-5.6 Terra scores **55.0**. Both cost **$15** per million output tokens.

That is the sentence this site was built to be able to write. An open-weight model, which you can download and run yourself, outscores a closed mid-tier model at an identical price. Two years ago the open gap was measured in generations; here it is 3.6 points behind the absolute leader.

Kimi K3 versus GPT-5.6 Terra: output price per million tokens

Same price, 2.1 points apart — and one of them ships its weights.

Kimi K3 pays for this with throughput: **32.9 tokens per second**, the slowest of the seven. GPT-5.6 Terra runs at 165.4 — five times faster. If your users are waiting on the output, that matters more than two points of index.

### GPT-5.6 is four models, not one

“GPT-5.6” names a family, and the variants are far apart. Sol scores 58.9 at $30. Terra scores 55.0 at $15. Luna scores 51.2 at $6.

Read that as a ladder rather than a lineup: **each step down costs half as much and gives up three to four points**. Luna is a fifth of Sol’s price for 87 % of its intelligence score, and it is the fastest thing here at 220 tokens per second. For classification, extraction or summarisation, paying for Sol is paying for headroom you will not use.

### What the leaderboard does not tell you

Opus 5 scores **89.1 on Terminal-Bench** and **93.2 on GPQA**. It also scores **30.3 on τ-Bench Banking**. The best-ranked model in the world gets roughly a third of a realistic banking-agent task right.

Composite indices average away exactly this kind of variance. A model that is excellent at terminal work and mediocre at multi-turn tool use looks like a single number, and that number will not predict how it behaves on your task. Test on your own workload before you commit.

The same applies to time-to-first-token, which none of these indices include. DeepSeek V4 Flash answers in **under a second**. Kimi K3 takes **126 seconds** to start. For a chat interface those are different products, whatever their scores say.

### How to choose

**Hardest reasoning, cost secondary.** Claude Opus 5. It leads both indices and undercuts Fable 5 by half.

**You want speed above all.** GPT-5.6 Luna at 220 tokens per second, or DeepSeek V4 Flash if sub-second latency matters more than the last ten points of score.

**You need the weights.** Kimi K3 — for auditability, on-premise deployment, or because a licence change in a closed API is a risk you cannot carry. You accept the throughput penalty knowingly.

**High volume, ordinary tasks.** DeepSeek V4 Flash. At $0.28 per million output tokens it is 179 times cheaper than Fable 5, and it is four times faster. It scores two thirds as well, which for extraction and classification is enough.

#### These numbers change every morning

Prices, context windows and benchmark indices for 500+ models, rebuilt daily. Free, no sign-up.

[Open the comparator →](https://olud.ai/compare/)

### The bottom line

The frontier has flattened. When four models sit within six percent of each other on capability while their prices span 3.3×, the leaderboard stops being a buying guide. What still separates them is throughput, latency, context window and whether you are allowed to hold the weights.

And the open side of that table is no longer a compromise you explain to your board. It is one row, 3.6 points down, at 30 % of the price.

Composite indices from [Artificial Analysis](https://artificialanalysis.ai/); prices, throughput and context windows fused by olud.ai from public sources and rebuilt every morning. Figures in this article were read on 28 July 2026 — check the [live leaderboard](https://olud.ai/leaderboard.html) for today’s.
