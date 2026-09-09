Date: 2026-09-09 12:50
Summary: After Weights shut down, demand for a voice-model website is real, but a celebrity RVC catalog is still not a viable product; the remaining space is private self-model hosting and mobile-ready packaging.
Visibility: people

[question]
如果做网站模型站，是否还有空间
保存为文档

[try to solve]
## Context

The intended singing product is a BYOM mobile converter with no in-app celebrity shelf. The follow-up was whether a **website that hosts or indexes voice models** still has room, especially after the community’s largest cover-model hub disappeared.

## Process

The 2026 public record: Weights.gg / Replay stopped hosted service around 1 April 2026; reporting described an OpenAI acquisition of the small team and IP, with no plan to run a similar public cloning catalog. Remaining discovery is Hugging Face dumps, thin directories (Voice-Models, AIVoices), Chinese workshop packs, and Discord.

Those leftovers were scored as product types, not as “is search volume high”: unauthorized celebrity/character shops, HF-link aggregators, consented artist markets (Kits, ElevenLabs libraries), private “my own weights” hosting, and a packaging layer (version, sample rate, F0, pth→ONNX) for the mobile app.

Google site-reputation and scaled-content rules were applied to the question of putting any of this on onlinefreetools.org.

## Root cause / analysis

Weights’ shutdown created a **finding** vacuum, not a **license**. Rebuilding the same named-voice shelf repeats the legal, payments, CDN, and app-review pile-up that made the hub a liability. Directory SEO is already a commodity and would be thin pages. Licensed marketplaces exist and compete on contracts, not on another upload form.

What is actually scarce for a BYOM app is trustworthy packaging and a place to keep *the user’s own* checkpoints—not more unlicensed `.pth` files named after famous people.

## Solution

Filed `docs/sound-editor/10-voice-model-site-space.md`. Decisions recorded there:

- Do not build Weights-class celebrity model sites.
- If a site exists, it is a pipe: identity-checked self-hosting, metadata, optional ONNX export, private links into the app’s file importer.
- Do not attach that site to onlinefreetools.org.
- Do not lead with a 10k-model index before the converter loop in 08 works.

README and the request log now point round 11 at document 10. No `src/` or `work-tasks/` changes.

## Notes / boundaries

- 09 still lists Weights as a competitor snapshot; 10 is the shutdown/strategy correction.
- This is not a download directory and not a how-to for scraping celebrity checkpoints.

[actions]
- Added `docs/sound-editor/10-voice-model-site-space.md`
- Updated `docs/sound-editor/README.md` and `docs/sound-editor/00-request.md`
