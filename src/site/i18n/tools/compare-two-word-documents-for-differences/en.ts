/**
 * i18n (compare-two-word-documents-for-differences / en).
 * H1: Compare two Word documents for differences.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'Choose two .docx files and compare the visible wording. Styles, headers, and the Word Review pane are not reproduced. Files stay on your device and are not uploaded.',
	tool_compare_two_word_documents_for_differences_clear: 'Clear',
	tool_compare_two_word_documents_for_differences_compare: 'Compare',
	tool_compare_two_word_documents_for_differences_desc:
		'Compare two Word documents for differences: extract visible text from two .docx files in the browser — nothing is uploaded.',
	tool_compare_two_word_documents_for_differences_description:
		'Compare two Word documents for differences in your browser. Process: choose two .docx files, extract visible paragraph text, then highlight wording adds and deletes. Files stay on your device and are not uploaded. Example: two short memos where one sentence changes. This is not Microsoft Review → Compare; headers and styles are dropped. PDF is out of scope.',
	tool_compare_two_word_documents_for_differences_empty: 'Choose two Word files first, or load the sample.',
	tool_compare_two_word_documents_for_differences_err_extract: 'Could not read text from a file. It may be damaged, encrypted, or not a .docx.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'No extractable text in either file (empty or image-only).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'Use .docx (Office Open XML). Older .doc is not supported here.',
	tool_compare_two_word_documents_for_differences_example:
		'Load sample builds two tiny .docx files. The second memo changes “meet at noon” to “meet at 3pm”. First paint already shows that wording diff.',
	tool_compare_two_word_documents_for_differences_example_title: 'Example',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'No. Files are read in this tab. mammoth and jsdiff may load from a CDN as library code; your documents are not uploaded to our servers.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'No. Microsoft Word can compare formatting and tracked revisions. This page extracts visible text only, then diffs that text. Headers, footers, and styles are discarded.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'If extract fails, the file may be password-protected, corrupt, or not OOXML. Image-only pages yield empty text.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		"This comparison accepts two .docx files and checks extracted wording. PDF and legacy .doc files are not parsed, and formatting or Word revision history is outside the result.",
	tool_compare_two_word_documents_for_differences_faq_q1: 'Are my Word files uploaded?',
	tool_compare_two_word_documents_for_differences_faq_q2: 'Is this the same as Word Review → Compare?',
	tool_compare_two_word_documents_for_differences_faq_q3: 'Why did extraction fail or miss headers?',
	tool_compare_two_word_documents_for_differences_faq_q4: 'Can I compare PDF or any two documents?',
	tool_compare_two_word_documents_for_differences_how_body:
		'Pick two Word files and read the wording diff. This page does not open the Review pane.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'Choose the first .docx (original).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'Choose the second .docx (revised).',
	tool_compare_two_word_documents_for_differences_how_item_3: "Select Compare to extract the visible text and run the wording diff.",
	tool_compare_two_word_documents_for_differences_how_item_4: 'Read green adds and red deletes in the extracted text.',
	tool_compare_two_word_documents_for_differences_how_title: 'How it works',
	tool_compare_two_word_documents_for_differences_label_a: 'First Word document',
	tool_compare_two_word_documents_for_differences_label_b: 'Second Word document',
	tool_compare_two_word_documents_for_differences_legend: 'Green = added · Red = deleted',
	tool_compare_two_word_documents_for_differences_load_sample: 'Load sample',
	tool_compare_two_word_documents_for_differences_need_lib: 'A library failed to load. Check your network and refresh.',
	tool_compare_two_word_documents_for_differences_no_diff: 'No wording differences in the extracted text.',
	tool_compare_two_word_documents_for_differences_result_label: 'Wording differences',
	tool_compare_two_word_documents_for_differences_rules_body:
		'Comparison is a text diff after extraction. Formatting is not a revision track.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth reads visible paragraph text from OOXML. That text is then line-diffed with jsdiff.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'Headers, footers, comments, and most styles are dropped. Two files that only restyle the same words may look identical.',
	tool_compare_two_word_documents_for_differences_rules_item_3:
		'Encrypted or damaged .docx files fail. Legacy .doc is not parsed.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'This is not Microsoft “Compare Documents”. Use Word itself if you need tracked formatting.',
	tool_compare_two_word_documents_for_differences_rules_title: 'Rules you should expect',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '{added} added, {removed} removed',
	tool_compare_two_word_documents_for_differences_title: 'Compare two Word documents for differences',
	tool_compare_two_word_documents_for_differences_usecase_1: 'Contract drafts: see which sentences changed between two .docx exports.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'Meeting notes: compare last week’s minutes with this week’s file.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'Homework: two Word submissions where you need wording, not layout.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'Good fits',
};

export default en;
