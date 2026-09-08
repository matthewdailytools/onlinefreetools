Date: 2026-09-08 20:25
Summary: Briefed batch-convert-jpg-to-editable-word-with-ocr with Word-document IG, not a TXT-ZIP reskin; coverage gate 0b passed.
Visibility: people

[question]
立项：batch convert jpg to editable word with ocr，需要额外的info Gain增益，区别于其他ocr工具

[try to solve]
## Context
The site already has printed-photo OCR that ends in **text files**: N1 (one JPG → one TXT) and N1-batch (many JPGs → ZIP of TXT + combined.txt). It also has `images-to-word`, which puts photos into a DOCX **as pictures**, so the letters are not editable. Planner N4 was a scanned-**PDF** → Word job and had parked `jpg to word ocr` as a chip on that unbuilt page.

The request is a new URL whose job is **a stack of JPGs → one Word file you can edit**. That is a different result file from TXT (planner §0) and a different object from PDF.

## Process
1. Read OCR planner §0 / §3.2 / §6.4, N1-batch brief IG table, and `images-to-word` catalog copy.
2. Locked slug/H1 to the user task sentence: `batch-convert-jpg-to-editable-word-with-ocr` / **Batch convert JPG to editable Word with OCR** (Chinese direction: 用 OCR 批量把 JPG 转成可编辑的 Word). Forbidden H1s: `OCR to Word`, `jpg to word`, `Batch OCR`.
3. Wrote IG as **controls**, not adjectives: queue + skip (shared with N1-batch) plus **one sectioned DOCX** (Heading 1 = filename, page break, OCR paragraphs), default **photo above text** for proofing, primary button **Download Word** (not Download ZIP of txt).
4. Absorbed Planner `jpg to word ocr` here; left `ocr pdf to word` / `convert scanned pdf to word` for unbuilt N4. FAQ must split N1-batch (TXT ZIP) and `images-to-word` (no OCR).
5. Filled `work-tasks/…/00–03` + `notes.md`; `02=ready`, `03=briefs-ready`. `npm run coverage:gate --phase=0b` green. Updated planner, keyword pool, tracker.

## Root cause / analysis
A second OCR URL is doorway if the only change is MIME (`.txt` → `.docx` inside the same ZIP). Searchers who want Word want to **open and edit in Word**: sections, headings, optional proof images. Searchers who want a zip of notes stay on N1-batch. Searchers who only want a photo album in Word stay on `images-to-word`. PDF scanners stay on future N4.

## Solution
- Brief folder: `work-tasks/batch-convert-jpg-to-editable-word-with-ocr/`
- Related (when implemented): N1-batch, N1, `images-to-word`
- Engine reuse: Tesseract vendor + existing `/vendor/docx/`
- No page code this session. No `long_gap` KPI (no human SERP).

## Notes / boundaries
- Do not accept PDF. Do not promise column/table layout. Handwriting FAQ-fail.
- Implementation session must keep Convert all / Download Word labels aligned with How, skip auto-OCR on landing (Tier 2 WASM).

[actions]
- Added work-tasks brief; planner/pool/tracker/ocr-scan README
- `npm run coverage:gate -- --slug=batch-convert-jpg-to-editable-word-with-ocr --phase=0b`
