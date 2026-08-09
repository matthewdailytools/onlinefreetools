Date: 2026-08-09 22:27
Summary: Estimated per-language AI machine-translation cost for a 2,600-char zh-TW subtitle file across English/Vietnamese/Korean/Hindi/Indonesian/Russian/Japanese/German for OpenAI, Anthropic, Google Gemini, DeepSeek, and Cloudflare Workers AI.

[question]
/Users/xuli/Downloads/zh-TW.txt 分析:如果针对提交的文本，进行对接ai进行纯粹机器翻译成别的语言，分别是英语，越南，韩国，印度语，印度尼西亚，俄语，日语，德语，不同的供应商每种语言翻译成本多少？

[try to solve]
Source stats: 199 subtitle entries, ~2,604 characters (1,952 CJK chars), ~697 s runtime. Using an assumed ~2,900 input tokens (source + prompt) and per-language output-token estimates, per-language LLM costs range from ~$0.0005 (Gemini 2.5 Flash-Lite / DeepSeek V4-Flash / CF Llama 3.2-3B) to ~$0.057 (Claude Opus 5 / Japanese). Eight-language totals: budget tier <$0.01, mid tier ~$0.03-0.12, premium tier ~$0.13-0.39. Reference char-billed MT engines: Azure $0.026, Google NMT $0.052, DeepL overage $0.072 — all covered by free tiers in practice. Caveats: output-token ratios differ per language (Japanese/Korean costlier); preserving SRT numbering/timestamps roughly multiplies output cost by 1.5-2x; per-line (vs batched) requests multiply prompt overhead by 199x; DeepL traditional engine lacks Hindi/Vietnamese.

[actions]
- none (read-only analysis of /Users/xuli/Downloads/zh-TW.txt; pricing verified via web searches, Aug 2026)
