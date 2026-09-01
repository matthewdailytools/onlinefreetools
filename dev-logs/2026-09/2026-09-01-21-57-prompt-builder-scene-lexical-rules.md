Date: 2026-09-01 21:57
Summary: Prompt-builder tools must name with ai/prompt/builder|generator and split only by Planner-evidenced usage scenes.
Visibility: people

[question]
1、必须包含 ai / prompt / builder/ generator.2、按使用场景来制定工具，例如图片，视频，小说，论文，安卓项目代码，ios 项目代码（我只是举例子，需要根据实际用户搜索习惯来制定）等场景

[try to solve]
## Context
After prompt-builder Keyword Planner + SERP work, the user tightened product rules: lexical frame for naming, and scene URLs only from real search habits (examples like video/thesis/mobile code are illustrative, not a forced IA).

## Process
1. Re-read `Keyword Planner 09-01-2026 at 12-29-20.csv` (98 rows) and tagged scene tokens (image, video, novel/writing, essay, android/ios, code, marketing, chat/copilot, random, text-to, etc.).
2. Counted hits: image (midjourney/sketch), writing/dialogue/character/script/scenario/idea, random, copilot/chat, text-to, website; **video / essay-thesis / android / ios / general code / marketing = 0**.
3. Rewrote the authoritative planner doc with §0 naming hard rules and §3 scene table S0–S7; marked non-evidenced examples as “do not invent.”
4. Synced theme README, playbook note on theme lexical frames, keyword pool rows, and tracker.

## Root cause / analysis
Ad-group labels (Maker/Creator/Free) are synonym clusters, not scenes. User examples without Planner volume would create doorway-like empty scenes and violate people-first / no-scaled-thin-URL policy. Naming without `prompt`+(builder|generator) drifts into generic “idea tools” outside the seed intent.

## Solution
- **Lexical**: every tool slug/H1/primary keyword must include `prompt` and (`builder` or `generator`); prefer `ai` in primary keywords.
- **Scenes from this CSV**: S0 structured (live page), S1 image, S2 writing/story/dialogue, S3 random, S4 text→structure, S5 chat/copilot, S6 website, S7 head synonym shells.
- **Not in batch**: video, thesis, Android/iOS code — wait for future Planner/SERP with the same lexical frame.
- Coverage still mandatory for S0–S7; week **build remains 0** (SERP all head/mid).

## Notes / boundaries
Authoritative file: `docs/seo/keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md`. Independent image or writing URLs need user naming + still pass SERP; do not auto-open `work-tasks/`.

[actions]
- Updated prompt-builder planner, README, `keyword-planner-analysis-rules.md`, pool, tracker
