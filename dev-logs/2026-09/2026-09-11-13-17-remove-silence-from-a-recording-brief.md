Date: 2026-09-11 13:17
Summary: Briefed S2 remove-silence-from-a-recording with a full same-intent search table, intent review, and a green coverage:gate 0b pass—without shipping a page yet.
Visibility: people

[question]
立项：remove-silence-from-a-recording，特别注重要seo优化必须要优秀

[try to solve]
## Context

The sound-editor job table already named this slug as **S2**: take a long recording, cut out silence / dead air, and export **one** shorter file. That is not S1 (hand-set start and end) and not A3 (split on silence into a ZIP). The request was to open a work-tasks brief and make the SEO coverage unusually thorough before any `src/` work.

There is no Keyword Planner CSV for this cluster, and Ahrefs was unavailable in this session. Coverage therefore used public SERP pages, People Also Ask-style queries, competitor product names, and local-language search phrasing for all ten locales.

## Process

1. Loaded the coverage-pass skill, work-tasks brief rule, and the S1 trim brief as the quality bar for tables and gates.
2. Copied the `_template` into `work-tasks/remove-silence-from-a-recording/` and recorded the user wording in `00-request.md`.
3. Classed the tool as direction **A** (browser Web Audio + windowed RMS, lamejs only on Export MP3). First-screen FFmpeg.wasm is out of scope, matching the executable sound-editor plan.
4. Searched English, Chinese, Spanish, Japanese, and German SERPs. Typical pages: Vesta (upload-then-delete), Tembrica / Notevibes / Hearably (in-browser RMS), netfisher / AudioWave (ffmpeg.wasm), Kapwing / Clipchamp / Cleanvoice (account + often video or filler-word AI), and the Audacity **Truncate Silence** manual for the PAA query.
5. Wrote the 02 coverage table, the full same-intent related-search table (absorb vs drop), intent review, interaction spec, and ten locale briefs with local H1 directions—not English calques.
6. Marked S2 as briefed in `docs/sound-editor/12-slug-hub-and-scene.md`. Ran `npm run coverage:gate -- --slug=remove-silence-from-a-recording --phase=0b` (green).

## Root cause / analysis

Most competitor landing pages attack the **head term** “Silence Remover Online” and then bolt on three modes: remove all gaps, trim edges only, and split at silence. That last mode is a different job (A3). Google doorway rules forbid a second URL that only swaps “delete silence” / “cut silence” / “dead air remover”. The SEO win is therefore:

- H1 stays the **task sentence** the user named: Remove silence from a recording.
- Near-synonyms land in description, FAQ, and Use cases.
- Split-by-silence, mute-video, denoise, and filler-word queries are **intentionally unsatisfied**, with one FAQ sentence each.

Information gain versus the SERP is not “another upload widget”. It is an honest file/time cap, a recording-type threshold table, a visible seconds-removed stat, keep-padding so cuts are not jump-cuts, and a clear one-file result.

## Solution

| Item | Decision |
|---|---|
| Slug / H1 | Keep `remove-silence-from-a-recording` / **Remove silence from a recording** |
| Chinese H1 direction | 从一段录音里去掉静音 |
| Meta window | Remove silence + dead air + one shorter file + WAV/MP3 + not uploaded |
| Absorb | silence remover; delete/cut silence; remove dead air; truncate/strip silence; auto cut silence; gap remover; 去除音频静音; 去掉空白; 无音部分削除; quitar silencios; Stille entfernen; … |
| Do not absorb | split by silence; remove audio from video; noise reduction; um/uh; YouTube rip |
| Defaults | −40 dB / 0.5 s min gap / 0.15 s keep; Speech / Gentle / Tight in collapsed settings |
| Sample | 5.00 s with two 1.20 s gaps → about 2.90 s after Remove silence |
| Related (when built) | `trim-an-audio-clip-and-export`, `file-metadata-analyzer` |
| Status | `02` ready, `03` briefs-ready; **no page yet** |

Next session (only if asked to implement): catalog `opts` + Page + English i18n → `coverage:gate --phase=2` → other locales → phase 4 → `verify:tool`.

## Notes / boundaries

- Implementation was **not** requested; do not start `src/pages/` until that is explicit.
- Do not related-link the unbuilt Hub or A3 slug.
- Do not put Split ZIP or a video dropzone on this page’s first screen.
- Planner/Ahrefs volume numbers were not available; do not treat the “medium” row in doc 12 as a KPI.

[actions]
- Added `work-tasks/remove-silence-from-a-recording/` (`00`–`03`, `notes.md`)
- Updated `docs/sound-editor/12-slug-hub-and-scene.md` S2 progress
- Ran `npm run coverage:gate -- --slug=remove-silence-from-a-recording --phase=0b` (OK)
