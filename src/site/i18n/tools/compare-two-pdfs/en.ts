/**
 * i18n tool shard (compare-two-pdfs / en).
 * 对比两份 PDF 文本层：高亮增删、页数摘要、可选忽略大小写/空白；非 OCR。
 */
import type { SiteLangDict } from '../../../types';

/** 英文文案字典。 */
const en: SiteLangDict = {
	tool_compare_two_pdfs_title: 'Compare Two PDFs — Highlight Text Differences',
	tool_compare_two_pdfs_desc: 'Compare selectable text from two PDFs locally and download an HTML diff.',
	tool_compare_two_pdfs_description:
		'Compare two PDF files by extracting their selectable text and highlighting words that were added or removed. Steps: choose PDF A and PDF B, click Compare, review the green/red diff, Download HTML. Example: “thirty days” vs “sixty days” is highlighted. Scanned pages need OCR first — this tool does not OCR.',
	tool_compare_two_pdfs_file_a: 'PDF A (older / original)',
	tool_compare_two_pdfs_file_b: 'PDF B (newer / revised)',
	tool_compare_two_pdfs_choose_file: 'Choose a PDF — or drop it on this box',
	tool_compare_two_pdfs_choose_files: 'Choose files',
	tool_compare_two_pdfs_drop_hint: 'Or drop a PDF here. Processing stays in this tab.',
	tool_compare_two_pdfs_compare: 'Compare',
	tool_compare_two_pdfs_download: 'Download HTML diff',
	tool_compare_two_pdfs_sample: 'Load sample',
	tool_compare_two_pdfs_clear: 'Clear',
	tool_compare_two_pdfs_advanced: 'Advanced settings (optional)',
	tool_compare_two_pdfs_ignore_case: 'Ignore letter case',
	tool_compare_two_pdfs_ignore_space: 'Collapse repeated spaces and line breaks',
	tool_compare_two_pdfs_advanced_hint: 'Useful when one export wraps lines differently but the wording is the same.',
	tool_compare_two_pdfs_result_label: 'Text diff (A → B)',
	tool_compare_two_pdfs_legend_added: 'Added in B',
	tool_compare_two_pdfs_legend_removed: 'Removed from A',
	tool_compare_two_pdfs_empty: 'Choose both PDF A and PDF B first.',
	tool_compare_two_pdfs_err_convert: 'Could not build the comparison. Refresh and try again.',
	tool_compare_two_pdfs_err_encrypted: 'This PDF looks password-protected. Unlock it, then compare again.',
	tool_compare_two_pdfs_err_load: 'Could not read one of the PDF files.',
	tool_compare_two_pdfs_err_notext: 'No selectable text layer found. Scanned image-only PDFs need OCR before this tool can compare them.',
	tool_compare_two_pdfs_err_pdfjs: 'PDF renderer failed to load.',
	tool_compare_two_pdfs_status_working: 'Extracting text and comparing…',
	tool_compare_two_pdfs_status_done: 'Done — green is added in B, red is removed from A. Download saves an HTML file.',
	tool_compare_two_pdfs_status_identical: 'No text differences under the current options.',
	tool_compare_two_pdfs_summary_tpl: '{added} added · {removed} removed',
	tool_compare_two_pdfs_pages_tpl: 'pages A={a}, B={b}',
	tool_compare_two_pdfs_warn_large: 'Large file — comparison may be slow.',
	tool_compare_two_pdfs_how_title: 'How to compare two PDFs',
	tool_compare_two_pdfs_how_body:
		'The tool reads the text layer of each PDF with PDF.js, then runs a word-level diff. It does not look at layout, fonts or images — only selectable text.',
	tool_compare_two_pdfs_how_item_1: 'Choose PDF A (original) and PDF B (revised), or drop each file onto its box.',
	tool_compare_two_pdfs_how_item_2: 'Optionally open Advanced settings to ignore case or collapse whitespace.',
	tool_compare_two_pdfs_how_item_3: 'Click Compare and wait for the progress bar while both files are previewed and extracted.',
	tool_compare_two_pdfs_how_item_4: 'Read the green/red highlight, check the added/removed counts, then click Download HTML diff if you need a file.',
	tool_compare_two_pdfs_why_choose_title: 'Why choose our Compare Two PDFs tools',
	tool_compare_two_pdfs_why_choose_item_1: 'Side-by-side PDF previews plus a single word-level text diff in one pass.',
	tool_compare_two_pdfs_why_choose_item_2: 'Counts added and removed blocks, and shows each file’s page count.',
	tool_compare_two_pdfs_why_choose_item_3: 'Optional ignore-case and whitespace collapse for exports that only re-wrap lines.',
	tool_compare_two_pdfs_why_choose_item_4: 'Clear errors for password-protected files and for scanned PDFs with no text layer.',
	tool_compare_two_pdfs_why_choose_item_5: 'Runs in your browser; the PDFs are not uploaded to our servers.',
	tool_compare_two_pdfs_rules_title: 'Rules',
	tool_compare_two_pdfs_rules_body: 'Comparison is text-layer only — not visual or pixel-perfect.',
	tool_compare_two_pdfs_rules_item_1: 'Extract selectable text from A and B with PDF.js, then highlight with jsdiff.',
	tool_compare_two_pdfs_rules_item_2: 'Everything stays in this tab; choosing a file does not upload it.',
	tool_compare_two_pdfs_rules_item_3: 'No OCR. Image-only scans must be OCR’d elsewhere first.',
	tool_compare_two_pdfs_rules_item_4: 'Password-protected or damaged PDFs fail with a readable error.',
	tool_compare_two_pdfs_rules_item_5: 'Download exports the highlighted text as HTML — not a annotated PDF.',
	tool_compare_two_pdfs_example_title: 'Example',
	tool_compare_two_pdfs_example:
		'Load sample builds two one-page contracts. A says “Payment due in thirty days.” and B says “Payment due in sixty days.” Compare highlights thirty as removed and sixty as added. Turning on Ignore letter case would treat “Days” and “days” as the same.',
	tool_compare_two_pdfs_usecases_title: 'When to use it',
	tool_compare_two_pdfs_usecase_1: 'Checking a revised contract PDF against the version you sent last week.',
	tool_compare_two_pdfs_usecase_2: 'Spotting wording changes in a policy or terms PDF before you sign.',
	tool_compare_two_pdfs_usecase_3: 'Comparing two text exports when you only care about words, not fonts or margins.',
	tool_compare_two_pdfs_usecase_4: 'Keeping sensitive drafts on the device — nothing is uploaded for the diff.',
	tool_compare_two_pdfs_faq_q1: 'Are my PDFs uploaded?',
	tool_compare_two_pdfs_faq_a1:
		'No. Rendering and text extraction run in your browser tab. Library scripts load from this site’s vendor folder; your file bytes stay local.',
	tool_compare_two_pdfs_faq_q2: 'Why do scanned PDFs show “no selectable text”?',
	tool_compare_two_pdfs_faq_a2:
		'Scans are images without a text layer. This page does not OCR. Run OCR in another tool, export a searchable PDF, then compare here.',
	tool_compare_two_pdfs_faq_q3: 'What about password-protected PDFs?',
	tool_compare_two_pdfs_faq_a3:
		'Encrypted files cannot be opened here. Unlock them in a PDF reader first, save an unprotected copy, then choose that copy.',
	tool_compare_two_pdfs_faq_q4: 'How is this different from a plain text diff?',
	tool_compare_two_pdfs_faq_a4:
		'You drop PDFs, see page previews, and get page counts. The Text Diff tool is for pasted strings or .txt files without PDF parsing.',
	tool_compare_two_pdfs_faq_q5: 'Does it compare layout, images or signatures?',
	tool_compare_two_pdfs_faq_a5:
		'No. Only selectable text is compared. A moved logo or a different font with the same wording will look identical here.',
	tool_compare_two_pdfs_faq_q6: 'What does Download save?',
	tool_compare_two_pdfs_faq_a6:
		'An HTML file with the same green/red highlights you see on the page — handy to email or archive. It is not a marked-up PDF.',
	tool_compare_two_pdfs_faq_q7: 'When should I ignore case or whitespace?',
	tool_compare_two_pdfs_faq_a7:
		'When one export only changed capitalisation or line wrapping. Turn the options on if the wording is the same but the raw text layer differs.',
	tool_compare_two_pdfs_article: 'Compare selectable text from two PDFs and download an HTML word-level diff.',
	tool_compare_two_pdfs_references: 'PDF.js for text extraction; jsdiff for word-level highlighting.',
	tool_compare_two_pdfs_ref_a_label: 'PDF.js — Mozilla PDF renderer',
	tool_compare_two_pdfs_ref_b_label: 'jsdiff — text diff library',
};

export default en;
