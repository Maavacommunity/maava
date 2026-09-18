# Half the AI models you can buy now come from Chinese labs | olud.ai

> 97 of 190 commercially priced AI models come from Chinese labs; Alibaba ships 49 on its own. But the median Chinese model costs $1.13 per million output tokens against $0.30 for the median US one — the cheap-model story does not hold.

_Source: https://olud.ai/blog/who-ships-ai-models-2026/_

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

[Home](https://olud.ai/) / [Blog](https://olud.ai/blog/) / Model market

Market data

## Half the AI models you can buy now come from Chinese labs

97 of the 190 commercially priced models we track are Chinese, and Alibaba alone ships 49 of them — more than OpenAI, Google and Meta put together. They are not, however, the cheap ones.

Updated 7 August 2026·6 min read·No paywall

### TL;DR — the short version

**97 of the 190 commercially priced AI models we track come from Chinese labs. That is 51 %.** US labs account for 42, or 22 %.

**Alibaba alone ships 49 models — more than a quarter of the entire market**, and more than OpenAI, Google and Meta put together.

**They are not the cheap option.** The median Chinese model costs $1.13 per million output tokens against $0.30 for the median American one. The “cheap Chinese model” story does not survive contact with the price list.

**Where they do dominate is memory:** 24 of the 33 models offering a million tokens of context are Chinese.

Count the models a developer can actually call today — published price, public endpoint, available now — and the map of who supplies the world’s AI looks different from the one in the headlines.

### Half the shelf

Of 190 commercially priced models, **97 come from Chinese labs**: Alibaba, Z.AI, DeepSeek, MiniMax, Moonshot, Tencent, Xiaomi and others. Forty-two come from American ones. Fifty-one come from everywhere else, a group Mistral dominates with eighteen models on its own.

Number of commercially priced models by lab: Alibaba 49, Mistral AI 18, Z.AI 13, DeepSeek 12, NVIDIA 11, MiniMax 9, Google 9, Moonshot AI 8, Meta 8, OpenAI 4.

The single most striking bar is the first one. **Alibaba ships 49 models — 25.8 % of everything on the market.** The Qwen family has become the Linux distribution of language models: a version for every size, every budget and every context length, released faster than anyone can benchmark them.

OpenAI appears with four. That is not a measure of importance — it is a measure of strategy. OpenAI sells a handful of models to an enormous number of people; Alibaba floods the shelf. Both work. They just produce very different-looking charts.

### The part that contradicts the story

The received wisdom is that Chinese labs compete on price. Our price list says otherwise.

| Origin | Models priced | Median output price | Range |
| --- | --- | --- | --- |
| Chinese labs | 97 | $1.13 | $0.13 – $15.00 |
| US labs | 29 | $0.30 | $0.08 – $10.00 |
| Everyone else | 51 | $0.65 | $0.03 – $8.00 |

The median Chinese model costs nearly four times the median American one, and the most expensive model on the entire market is Kimi K3, from Moonshot AI, at $15.00.

There is a real reason for this, and it is not that anyone got more expensive. The American median is pulled down by a large number of small open-weight models — NVIDIA’s Nemotron line, Google’s Gemma, Meta’s Llama — published cheaply or free as ecosystem plays. The Chinese median is pulled up by Alibaba’s flagship Qwen Max tiers. Compare like with like and the gap mostly closes: in the under-fifty-cents band, there are 18 Chinese models against 22 American ones.

**What this means when you are choosing.** “Chinese model” is not a price tier and has not been one for a while. It is a supplier list as varied as the American one, with cheap models and expensive models in roughly the same proportions. Pick on the number, not the flag.

### Where they genuinely lead: memory

Thirty-three models on the market offer a context window of a million tokens or more. **Twenty-four of them are Chinese** — six are American, three are from elsewhere.

The median context window follows the same line: 262,144 tokens for Chinese models, 193,536 for American ones, 131,072 for the rest. If your problem is “this whole codebase has to fit in the prompt”, the long-context shelf is where the concentration is real.

### Why a market count is not a capability ranking

We are counting models available with a published price. That is a genuine measure of supply — of who is filling the shelf a developer picks from — and it is not a measure of who has the best model, who serves the most tokens, or who makes the most money.

A lab that ships one model used by four hundred million people and a lab that ships forty-nine models used by specialists appear here as 1 and 49. Both facts are true and they answer different questions. This article answers: *when you open the model picker, whose work is in it?* Increasingly, the answer is a Chinese lab.

### Method

190 models with published commercial pricing, collected via OpenRouter from provider price pages and refreshed daily; the snapshot is 7 August 2026. Origin is assigned by the lab that trained and publishes the model, not by hosting location: Alibaba, DeepSeek, Moonshot AI, Z.AI, MiniMax, Tencent, Baidu, ByteDance, Xiaomi, StepFun and InternLM count as Chinese; OpenAI, Anthropic, Google, Meta, NVIDIA, Microsoft, Cohere, xAI, Amazon, Perplexity, Poolside and AI21 as American; everything else, including Mistral, in the third group.

One gap worth naming: a lab appears here only if its models are sold through the price source we read. Anthropic, for instance, has no entry in this count — not because it ships nothing, but because its models are not listed there. Read this as a census of one very large shelf, not of the whole world.

Medians are computed over models with a non-zero output price, which is why the counts in the price table are smaller than the counts in the chart — free tiers are excluded from price statistics but included in the market count. Open-weight models that anyone can self-host appear here only when a provider also sells them as an API.
