Date: 2026-09-02 21:44
Summary: Ran Bing SERP (en-US / CloakBrowser) for six video-downloader queries and extracted ranked competitor domains by platform cluster.
Visibility: people

[question]
可以采用bing serp搜索
（承接上一问：调研 YouTube / TikTok / Instagram / 多站视频下载工具网站）

[try to solve]
## Context
User asked to re-run / ground the video-downloader landscape research with this repo’s Bing SERP pipeline instead of generic web search alone.

## Process
1. Used `~/vscodeai/aibrowsercrawler` venv + `ops/seo/bing_serp/run_bing_serp.py` (CloakBrowser, isolated context, en-US international lock).
2. Seed queries (user-habit phrasing, no forced quotes):
   - `youtube video downloader online`
   - `tiktok video downloader no watermark`
   - `instagram reel downloader online`
   - `download video youtube tiktok instagram`
   - `best online video downloader 2026`
   - `cobalt tools video downloader`
3. Wrote batch markdown: `docs/seo/keywords/video-downloader/2026-09-02-video-downloader-bing-serp.md`
4. Summarized organic top domains into YouTube / TikTok / Instagram / multi-site / Cobalt / review clusters for the chat reply.

## Root cause / analysis
Bing organic for these intents is dominated by:
- **Platform specialists** (TikTok: ssstik/snaptik/savetik…; Instagram: snapreels/snapsave/indown/sssinstagram…).
- **YouTube-focused portals** (savefrom mirrors, y2mate clones, ytdownloader/clipto/flixier…).
- **All-in-one social downloaders** (snapvee, pullvid, giststack, ripper.video, clipssaver, postsyncer, sceneform…).
- **Listicle/review SERP** for “best … 2026” (videoproc, itechguides, wondershare, etc.) rather than only tools.
- **Cobalt brand cluster** includes official `cobalt.tools`, community instance `cobalt.meowing.de`, and lookalike `cobalttools.tools` plus mirrors/docs.

Draft `competition_tier` from the script is a starting point only; this session did **not** auto-enter `keyword-daily-pool` or open `work-tasks/` (market map only).

## Solution
Delivered Bing-grounded competitor map to the user; artifacts:
- Batch MD under `docs/seo/keywords/video-downloader/`
- Local JSON under `.cache/serp/bing/2026-09-02-video-downloader-bing-serp/` (gitignored)

## Notes / boundaries
- Related-search parse returned empty for this batch (warnings only); organic lists were still usable.
- Domain lists churn; mirrors/clones and ad-heavy portals are common in this niche.
- Research ≠ product go-ahead; copyright/ToS risk for shipping a downloader remains high.

[actions]
- Ran `ops/seo/bing_serp/run_bing_serp.py` with `--theme video-downloader --write-batch-md`
- Created `docs/seo/keywords/video-downloader/2026-09-02-video-downloader-bing-serp.md`
