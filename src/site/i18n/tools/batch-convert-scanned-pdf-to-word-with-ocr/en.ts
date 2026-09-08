/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / en).
 * Master H1 is the locked task sentence “Batch convert scanned PDF to Word with OCR”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'Advanced settings (optional)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'Drop one or more scanned PDFs, click Convert all, then Download Word. Default is one Word file for the whole queue; you can switch to one Word per PDF (several files then Download ZIP). Each file becomes a heading; each successful page becomes editable paragraphs. The page picture is included by default so you can proof in Word. A blurry page is skipped. Files stay on your device, not uploaded to a server. Digital PDFs that already have a text layer belong on Turn PDF into Word document. Photo stacks belong on Batch convert JPG to editable Word with OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'Choose PDF files',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'Clear',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'File',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'Notes',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'Pages',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'Status',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'Convert all',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} files (max 5, 20 pages)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'Batch convert scanned PDF to Word with OCR: queue PDFs, Convert all, Download Word — stays on your device, not uploaded to a server.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'Drop scanned PDFs and download one Word file you can edit — each page is read in this tab. Steps: add PDFs, Convert all, Download Word. Example: a two-page printed sample becomes two headed pages with optional images. Also called convert scanned pdf to word and ocr pdf to word. Files stay on your device, not uploaded to a server. A digital PDF with a text layer belongs on Turn PDF into Word document. Photos belong on Batch convert JPG to editable Word with OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Download Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'Download ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'Drop scanned PDFs here (max 5 files, 20 pages). Processing stays in this tab.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'Add scanned PDF files first.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'Could not build the Word file in this browser. Try a current browser.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'Could not build the ZIP in this browser. Try a current browser.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'No printed text found on that page. Skipped. Try a sharper printed scan, not handwriting.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'That PDF is password-protected. It was not added.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'PDF rendering or the OCR engine failed to load. Refresh, then Convert all. Finished pages stay downloadable.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'This page reads scanned PDFs, not photos. Use Batch convert JPG to editable Word with OCR for JPG, PNG, or WebP. That file was not added.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'Could not read that PDF. Skipped.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'Could not load the PDF renderer in this tab. Refresh, then try again.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'Larger than 12 MB. Compress first. That file was not added.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'This page takes at most 5 PDFs. Extra files were not added.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages:
		'This page reads at most 20 pages in one batch. Extra files were not added.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'Load sample adds sample-scan.pdf (page 1: ONLINEFREETOOLS and The quick brown fox; page 2: SAMPLE TWO and Printed sample page), runs Convert all, and enables Download Word with one heading and two pages.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'Example',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'No. PDFs stay in this browser tab. Rendering, OCR, and Word scripts load from this site; files are not uploaded to our servers.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'Turn PDF into Word document copies an existing text layer and does not OCR. This page rasterizes each page and reads the picture, so a scan without selectable text can still become paragraphs. If your PDF already lets you highlight words, use that other page.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'Batch convert JPG to editable Word with OCR is a photo queue. This page only accepts PDF. Dropping a JPG here is rejected on purpose.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'No. A failed page is skipped; other pages and other PDFs still go into the Word file.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'In the default “one Word for the batch” mode, each successful PDF is a heading (the filename). Each successful page is optional picture, then OCR paragraphs, then a page break. Switch to one Word per PDF if you want separate documents. Columns and tables will not match the original layout.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'No. Photos belong on Batch convert JPG to editable Word with OCR. This dropzone is PDF only.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'Printed type works best. Cursive handwriting often fails on that page. This is not a handwriting product.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'This page outputs Word, not a TXT file and not a searchable PDF written back. People also search convert scanned pdf to word, scan to word converter, and ocr pdf to word — those jobs for a scanned PDF are this page. A text-layer dump belongs on Extract text from a PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'At most 5 PDFs, 12 MB each, and 20 pages in the whole batch. One PDF still uses Convert all and Download Word; there is no second URL for a single file.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'Yes. Choose one Word per PDF, then Convert all. One successful PDF still uses Download Word. Two or more successful PDFs use Download ZIP, with one .docx per input file. Merge into one Word is the default.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'Are my PDFs uploaded?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'How is this different from Turn PDF into Word document?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'How is this different from batch JPG to editable Word with OCR?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'If one page fails, is the whole Word file empty?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'What does the Word file look like?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'Can I drop JPG photos here?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: 'Does handwritten OCR work here?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'Is this ocr pdf to word, or do I get TXT / a searchable PDF?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'What are the file and page limits?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'Can I export one Word file per PDF instead of merging?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'Turn scanned PDFs into one Word file you can edit: add the PDFs, click Convert all (PDF rendering and OCR load on first click, then one page after another), then Download Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'Drop one or more scanned PDF files (or choose files).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2:
		'Optional: pick a language chip for the whole batch (Chinese and English are the default).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'Optional: keep one Word for the batch, or choose one Word per PDF (several PDFs then Download ZIP).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'Click Convert all — the first run loads PDF rendering and the OCR engine in this tab, then reads one page after another. A failed page is skipped.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'Click Download Word — or Download ZIP if you chose one Word per PDF and more than one file succeeded.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'How it works',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '{s}s elapsed',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'Refresh, then Convert all. Pages already read can still be downloaded.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'Conversion stopped',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_api: "Starting the recognizer…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_core: "First run: loading the OCR engine (~4 MB WASM). Stay on this tab — this can take a minute.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_docx: "Loading the Word builder (~0.7 MB)…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_lang: "First run: loading language data (a few MB). Later runs reuse this.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_pdf: "First run: loading the PDF renderer. Stay on this tab.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_script: "Loading OCR scripts…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'Finished. Next step: Download Word, or Download ZIP if you chose one Word per PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'Load',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'Pack',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'Read',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'Render',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'Conversion progress',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'Starting…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'Arabic',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'English',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'Japanese',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'Recognition language for the whole batch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'Chinese',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'Chinese + English',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'Longest edge before reading (px)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'Default 2048. Smaller is lighter on phones.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'Default is one Word file. One Word per PDF: Download Word for a single file, Download ZIP when several succeed.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Word export',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'One Word file for the whole batch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'One Word file per PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'On by default. Each Word page then shows the scan above the OCR paragraphs so you can proof in Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'Include the page picture above the text',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · page {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'PDFs enter a queue of up to 5 files and 20 pages. Each page is drawn, shrunk if the longest edge exceeds the limit, then read in visual order. One OCR worker runs serially. A failed page is skipped. Export is either one merged Word file or one Word per PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'Default: one Word file, heading per PDF, optional picture and OCR paragraphs per page, then a page break. One Word per PDF: each successful input becomes its own .docx; several files download as a ZIP. Not a ZIP of TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'Files stay on your device; they are not uploaded to a server. Scripts load from this site.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'Handwriting, heavy blur, and strong perspective often fail on that page. Tables become reading-order lines. Columns will not match the original scan. A digital PDF with a text layer is still rasterized here; use Turn PDF into Word document if you only need that layer.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'No photo input. JPG stacks belong on Batch convert JPG to editable Word with OCR. This page does not write a searchable PDF and does not download TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'Rules you should expect',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'Load sample',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'Done',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'Queued',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'Reading',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'Rendering',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'Skipped',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'Working',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'Done.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: "First run loads PDF rendering and the OCR engine (~4 MB). Stay on this tab…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Building the Word file…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'Batch convert scanned PDF to Word with OCR',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'Drop a scanned lecture PDF and download one Word file to retitle headings in Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'Combine two scanned contract PDFs into one proofing document with the page picture above each OCR section.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'Turn a multi-page invoice scan into Word for a colleague to edit (this page does not extract invoice fields).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'Good fits',
};

export default en;
