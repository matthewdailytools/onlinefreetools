Date: 2026-08-07 11:22
Summary: Completed the tool brief for a PNG/JPEG/WebP/AVIF image format converter (direction A).

[question]
工具立项：格式转换 PNG/JPEG/WebP/AVIF

[try to solve]
Briefing is done under `work-tasks/image-format-converter/` (no page code yet).

**Primary direction: A** (browser JS · A.2 image processing), not direction B platform-spec image packs.
- slug: `image-format-converter` → `/tools/image-format-converter`
- Tech: Tier 0 Canvas `toBlob`, local-only (no upload); v1 does not pull Squoosh
- One page with target-format choice among four formats; **do not** split near-duplicate URLs like `png-to-webp`
- `02-tool-info.md` status **`ready`** (IG: format comparison table, transparency→JPEG background, encode/`blob.type` fallback detection, privacy, ten locales)
- `03-locale-briefs.md` status **`briefs-ready`** (ten-locale search terms and button phrasing filled)

Say “implement per brief” before coding; then follow `tool-creation.mdc` with master-locale first → per-locale rewrite ≥3 rounds.

[actions]
- Created work-tasks/image-format-converter/00-request.md
- Created work-tasks/image-format-converter/01-direction-discussion.md
- Created work-tasks/image-format-converter/02-tool-info.md (ready)
- Created work-tasks/image-format-converter/03-locale-briefs.md (briefs-ready)
