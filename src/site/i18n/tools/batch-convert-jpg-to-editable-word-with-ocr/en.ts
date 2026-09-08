/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / en).
 * Master H1 is the locked long-tail “Batch convert JPG to editable Word with OCR”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'Advanced settings (optional)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'Drop a stack of printed JPGs or screenshots, click Convert all, then Download Word. Each photo becomes a section with a heading and editable paragraphs; the original picture is included by default for proofing. One blurry shot is skipped. Files stay on your device, not uploaded to a server. Need a ZIP of TXT instead? Use Batch convert JPG to text with OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'Choose JPG, PNG, or WebP files',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'Clear',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'Notes',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'File',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'Pixels',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'Convert all',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} files (max 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'Batch convert JPG to editable Word with OCR: queue photos, Convert all, Download Word — stays on your device, not uploaded to a server.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'Drop several JPGs and download one Word file you can edit — recognition runs in this tab, photo after photo. Steps: add images, Convert all, Download Word. Example: two printed samples become two sections with headings and optional photos. Also called jpg to word ocr. Files stay on your device, not uploaded to a server. Need a ZIP of text? Use Batch convert JPG to text with OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Download Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'Drop several photos here (max 10). Processing stays in this tab.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'Add photos first.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'Could not build the Word file in this browser. Try a current browser.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'No printed text found. Skipped. Try a sharper printed page, not handwriting.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'The OCR engine failed to load. Refresh, then Convert all. Finished sections stay downloadable.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'Could not read that image. Use JPEG, PNG, or WebP. Skipped.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'This page reads photos, not PDF files. That file was not added.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'Larger than 12 MB. Compress or crop first. Skipped.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'This page takes at most 10 photos. Extra files were not added.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'Load sample adds sample-1.jpg (ONLINEFREETOOLS and The quick brown fox) and sample-2.jpg (SAMPLE TWO and 印刷体样例), runs Convert all, and enables Download Word with two headed sections.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'Example',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'No. Photos stay in this browser tab. Engine and Word scripts load from this site; files are not uploaded to our servers.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'Batch convert JPG to text with OCR downloads a ZIP of TXT files. This page builds one editable Word document with a section per photo. Same engine, different job.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'Images to Word puts photos on pages as pictures — you cannot select the letters. Here OCR writes paragraphs you can edit. The original photo is optional, for proofing.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'No. A failed photo is skipped; the rest still go into the Word file.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'Each successful photo is a section: heading is the filename, then optional picture, then OCR paragraphs, then a page break. Columns and tables will not match the original layout.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'No. This page does not take PDF. Scanned PDFs belong on Batch convert scanned PDF to Word with OCR. A digital PDF with a text layer belongs on Turn PDF into Word document.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'Printed type works best. Cursive handwriting often fails on that row. This is not a handwriting product.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'Yes — JPEG, PNG, and WebP share the same queue. One photo still downloads Word, not a TXT. For a single jpg to text run use Convert a JPG to text with OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: 'Are my photos uploaded?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: 'How is this different from batch JPG to text with OCR?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: 'How is this different from Images to Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'If one photo fails, is the whole Word file empty?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'What does each section in Word look like?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'Can I drop a scanned PDF for OCR to Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: 'Does handwritten OCR work here?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'Can I use PNG, or only one JPG?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'Turn a stack of printed photos into one Word file you can edit: add the images, click Convert all (the engine loads on first click, then reads one photo after another), then Download Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'Drop several JPG, PNG, or WebP files (or choose files).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'Optional: pick a language chip for the whole batch (Chinese and English are the default).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'Click Convert all — the first run loads the OCR engine in this tab, then reads one photo after another. A failed photo is skipped.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'Click Download Word — one document with a section per photo (heading, optional picture, editable text).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'How it works',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'Arabic',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'English',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'Japanese',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'Recognition language for the whole batch',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'Chinese',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'Chinese + English',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'Longest edge before reading (px)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'Default 2048. Smaller is lighter on phones.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'On by default. Each section then shows the photo above the OCR paragraphs so you can proof in Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'Include the original photo above the text',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'Photos enter a queue of up to 10. Each is shrunk if the longest edge exceeds the limit, then read in visual order. One OCR worker runs serially. A failed row is skipped; successful rows become sections in one Word file.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'Each successful photo is a Word section: Heading 1 is the filename, then optional picture, then OCR paragraphs, then a page break. That is jpg to word ocr for a stack, not a ZIP of TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'Files stay on your device; they are not uploaded to a server. Scripts load from this site.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'Handwriting, heavy blur, and strong perspective often fail on that row. Tables become reading-order lines. Columns will not match the original page.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'No PDF input. A ZIP of TXT belongs on Batch convert JPG to text with OCR. Photos without OCR belong on Images to Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'Rules you should expect',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'Load sample',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'Done',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'Queued',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'Reading',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'Skipped',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'Done.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'Loading OCR engine…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Building the Word file…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'Batch convert JPG to editable Word with OCR',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'Photograph several printed handout pages and download one Word file to retitle in Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'Turn menu photos into one document with a picture above each OCR section for proofing.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'Collect error screenshots into one editable Word file to send a colleague.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'Good fits',
};

export default en;
