Date: 2026-09-03 15:30
Summary: Split bulk image convert into per-output-format slugs (JPG, PNG, WebP) because users search the destination suffix, not a codec picker.
Visibility: people

[question]
bulk-convert-images-to-webp，用户一般不熟悉格式，需要把区分不同的批量转换格式slug

[try to solve]
## Context

The bulk/batch independent-tool list had one convert URL: `bulk-convert-images-to-webp`, with JPEG/PNG/AVIF as on-page chips. That assumes the visitor already knows WebP and will pick another codec. The user said people generally do **not** know formats; they search for a result file they recognize (usually JPG, sometimes PNG).

## Process

1. Re-read §3.3 H: split only when job/rules differ, not for synonym labels.
2. Treat **output format** as the job users name in search (`to jpg`, `to png`, `to webp`). Direction pairs (`png to jpg`, `heic to jpg`) share the same output rules → absorb onto the destination page.
3. Write distinct IG/Rules per page so the three URLs are not title-only clones:
   - JPG: flatten alpha with a shared matte; `.jpg` extension; quality for forms/email.
   - PNG: keep alpha; warn that files often grow versus JPEG; first frame of GIF.
   - WebP: lossy + optional alpha; clients that reject WebP; size vs PNG.
4. AVIF stays a future **own** slug (`bulk-convert-images-to-avif`) because it is even less familiar and slow — not a chip on WebP.
5. Drop a hub slug `bulk-image-converter` with a format dropdown.

Updated: authority note `docs/seo/keywords/bulk-batch/2026-09-03-bulk-vs-batch-tool-split.md` §0.1, README P0 table, keyword pool rows, tracker log, analysis canvas.

## Root cause / analysis

A single WebP-first converter hides the query people actually type. A dropdown does not fix that: the H1 and default output would still be WebP. Separate slugs make the landing task “get a ZIP of JPGs” with no format literacy required. Split is allowed because failure modes differ (matte vs keep-alpha vs WebP client support), not because JPEG and JPG are two words.

## Solution

Independent convert URLs (all `bulk`):

| slug | H1 | Who it is for |
| --- | --- | --- |
| `bulk-convert-images-to-jpg` | Bulk convert images to JPG | Default convert page; absorb png/heic→jpg |
| `bulk-convert-images-to-png` | Bulk convert images to PNG | Transparency / logos |
| `bulk-convert-images-to-webp` | Bulk convert images to WebP | Site/CDN; not the only convert entry |

Ship order among convert: JPG first. No output-format switcher on any of these pages; sibling formats are related links.

## Notes / boundaries

- No `work-tasks/` this turn.
- Do not also ship `png-to-jpg` or `jpeg` duplicate bulk URLs.
- zh titles should use 转 JPG / 转 PNG, not force the English codec names.

[actions]
- Updated `docs/seo/keywords/bulk-batch/*`, pool, tracker, canvas
