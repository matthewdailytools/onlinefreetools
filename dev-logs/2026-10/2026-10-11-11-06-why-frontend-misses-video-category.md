Date: 2026-10-11 11:06
Summary: Explained that homepage video category is live, while the Tools mega menu still uses topics (sound-editor) so no separate Video tab appears there.
Visibility: people

[question]
为什么前端没有增加视频工具分类

[try to solve]
## Context
After shipping browser AV tools and the `category: video` home section, the user asked why the frontend still seemed to lack a video tools category.

## Process
1. Confirmed source maps: `TOOL_CATEGORY_ORDER` includes `video` (`src/site/categories.ts` / `scripts/site/categories.mjs`); catalog has 37 tools with `category: "video"`.
2. Fetched production `https://onlinefreetools.org/` and `/zh/`: both render `#cat-video` with labels “Video tools” / “视频工具”.
3. Opened the top-nav **工具** mega menu in a real browser: rail tabs are **topics** (`TOOL_TOPIC_ORDER`), not home categories.
4. Counted catalog fields for those 37 video tools: every row has `primaryTopic: "sound-editor"`, `scenario: "media"`, and subject mostly `video` (27) or `audio` (10). There is no `video-*` topic id.

## Root cause / analysis
The site has three different navigation layers:

| Layer | Field | Video status |
| --- | --- | --- |
| Homepage sections + category anchors | `category` | **Shipped** — `#cat-video` live |
| Top-nav Tools mega menu, `/topics`, tool sidebar accordion | `primaryTopic` | **Unchanged** — still `sound-editor` / `image-media` |
| Tool-type taxonomy | `subject` / `scenario` | `subject: video` exists; not a new “category” tab |

The 2026-10-03 video-category change was intentionally navigation-scoped to home `category` only; the log noted topic menu and tool-type taxonomy kept their existing fields. Looking only at the mega menu therefore looks like “no video category,” even though the homepage section exists.

## Solution
No code change in this turn. Clarified where video already appears (`/#cat-video`, `/zh/#cat-video`) versus where it does not (Tools mega menu topics). If a dedicated mega-menu / `/topics` entry is desired, that would be a separate topic split (e.g. new topic id + reassignment of `primaryTopic` + topic IG copy), not another home `category` wire-up.

## Notes / boundaries
- Do not conflate `category` (home) with `primaryTopic` (mega menu / topics).
- Live Worker/R2 remain at `PAGES_CACHE_VERSION=4.90` with homepage HTML that includes `#cat-video`.

[actions]
- Inspected live home and Tools mega menu; no repository edit
