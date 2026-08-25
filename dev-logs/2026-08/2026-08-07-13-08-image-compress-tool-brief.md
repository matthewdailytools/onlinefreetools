Date: 2026-08-07 13:08
Summary: Created the work-tasks brief for a local image compressor (direction A).

[question]
工具立项：图片压缩

[try to solve]
Briefing docs are complete under `work-tasks/image-compress/`:

- **Primary direction A** (A.2; split from direction B platform-spec packs: this page is general compression, not Amazon-style compliance tables)
- **slug**: `image-compress`; catalog category `image`; do not split compress-jpg / reduce-image-size thin near-duplicates
- **Tech**: Tier 0 Canvas (longest edge + quality + optional target-size iteration); optional Tier 1 `browser-image-compression`; no Squoosh
- **Related plan**: `image-format-converter`, `image-exif`
- `02` status `ready`; `03` ten-locale brief `briefs-ready` (pre-implement)

No `src/` edits; implement only after an explicit request, via `tool-creation.mdc`.

[actions]
- Created `work-tasks/image-compress/00`–`03`
