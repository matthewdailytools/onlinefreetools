/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / en).
 * Master H1 is the locked long-tail “Batch convert JPG to text with OCR”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'Advanced settings (optional)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'Drop a stack of printed JPGs or screenshots, click Convert all, then Download ZIP. Each photo becomes its own .txt; a combined file joins them with filename separators. One blurry shot is skipped. Files stay on your device, not uploaded to a server. One photo only? Use Convert a JPG to text with OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'Choose JPG, PNG, or WebP files',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'Clear',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'Notes',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'File',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'Pixels',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'On by default. The ZIP then includes combined.txt with --- filename --- between photos.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'Include combined.txt in the ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'Convert all',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'Copied.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'Copy combined text',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} files (max 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'Batch convert JPG to text with OCR: queue photos, Convert all, Download ZIP — stays on your device, not uploaded to a server.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'Drop several JPGs or screenshots and download a ZIP of text files — recognition runs in this tab, one photo after another. Steps: add images, Convert all, Download ZIP. Example: two printed sample photos become two TXT files plus one combined file. Also called batch OCR or bulk OCR. Files stay on your device, not uploaded to a server. One photo only? Use Convert a JPG to text with OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'Download ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: 'Drop several photos here (max 10). Processing stays in this tab.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'Add photos first.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'No printed text found. Skipped. Try a sharper printed page, not handwriting.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'The OCR engine failed to load. Refresh, then Convert all. Finished rows stay downloadable.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'Could not build the ZIP in this browser. Try a current browser.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'Could not read that image. Use JPEG, PNG, or WebP. Skipped.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'This page reads photos, not PDF files. That row was not added.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'Larger than 12 MB. Compress or crop first. Skipped.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: 'This page takes at most 10 photos. Extra files were not added.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'Load sample adds sample-1.jpg (ONLINEFREETOOLS and The quick brown fox) and sample-2.jpg (SAMPLE TWO and 印刷体样例), runs Convert all, fills the queue, and enables Download ZIP with two TXT files plus combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'Example',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'No. Photos stay in this browser tab. Engine and ZIP scripts load from this site; files are not uploaded to our servers.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'Convert a JPG to text with OCR is one photo, Copy text, one TXT. This page is a queue: Convert all, skip a failed row, Download ZIP of per-file text plus a combined file. Same engine, different job.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3:
		'No. A failed photo is skipped; the rest keep running. Successful rows still go into the ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'One .txt per photo, named after the original file (duplicates become stem (2).txt). Combined.txt is included by default, with --- filename --- between pages. That is how you convert multiple jpg to text in one download.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'Use Convert a JPG to text with OCR for a single jpg to text run. This page is for a stack. You can drop one file here, but the buttons are Convert all and Download ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6:
		'Yes — JPEG, PNG, and WebP share the same queue. That covers batch image to text without extra URLs.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'Printed type works best. Cursive handwriting often fails on that row and is skipped. This is not a handwriting product or a scanning-bureau service.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'No PDF input, no Word or spreadsheet export, no bulk document scanning service. A digital PDF with a text layer belongs on Extract text from a PDF.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: 'Are my photos uploaded?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: 'How is this different from converting one JPG with OCR?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'If one photo fails, does the whole batch stop?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'What is inside the ZIP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'I only have one photo. Can I still use this?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'Can I batch PNG or screenshot WebP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: 'Does handwritten OCR or a scanning service work here?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'Can I drop a scanned PDF?',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'Turn a stack of printed photos into a ZIP of text files: add the images, click Convert all (the engine loads on first click, then reads one photo after another), then Download ZIP or Copy combined text.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'Drop several JPG, PNG, or WebP files (or choose files).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2:
		'Optional: pick a language chip for the whole batch (Chinese and English are the default).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'Click Convert all — the first run loads the OCR engine in this tab, then reads one photo after another. A failed photo is skipped.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'Click Download ZIP (one TXT per photo, plus a combined file) or Copy combined text.',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'How it works',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'Arabic',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'English',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'Japanese',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'Recognition language for the whole batch',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'Chinese',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'Chinese + English',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'Longest edge before reading (px)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'Default 2048. Smaller is lighter on phones.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'Combined text preview',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'Photos enter a queue of up to 10. Each is shrunk if the longest edge exceeds the limit, then read in visual order. One OCR worker runs serially. A failed row is skipped; successful text is packed into a ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'ZIP names follow the original files. Combined.txt (default on) inserts --- filename --- between photos so a booklet shoot becomes one document.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'Files stay on your device; they are not uploaded to a server. Scripts load from this site.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'Handwriting, heavy blur, and strong perspective often fail on that row. Tables become reading-order lines, not CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'PDFs, Word, searchable PDFs, and spreadsheets are out of scope. One photo with Copy text belongs on Convert a JPG to text with OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'Rules you should expect',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'Load sample',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'Done',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'Queued',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'Reading',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'Skipped',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'Done.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: 'Loading OCR engine…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'Batch convert JPG to text with OCR',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1:
		'Photograph several printed handout pages and download a ZIP of TXT files for notes.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2:
		'Batch image to text for a stack of chat or error screenshots when you cannot select the pixels.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3:
		'Turn a booklet of menu photos into one combined.txt with filename separators, then copy to proofread.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'Good fits',
};

export default en;
