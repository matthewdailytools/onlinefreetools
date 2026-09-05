/**
 * i18n tool shard (compare-two-text-files-online / en).
 * Master H1 is the locked long-tail “Compare two text files online”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'Choose two text files in this tab and see line-level adds and deletes. Files stay on your device and are not uploaded. This page has no large paste boxes — paste-only comparison lives on the related text page.',
	tool_compare_two_text_files_online_clear: 'Clear',
	tool_compare_two_text_files_online_compare: 'Compare',
	tool_compare_two_text_files_online_desc:
		'Compare two text files online: pick two .txt files, see line diffs in the browser — nothing is uploaded.',
	tool_compare_two_text_files_online_description:
		"Compare two text files online in your browser. Choose the original and revised .txt files; each is decoded strictly as UTF-8, its leading BOM is removed, and invalid encoding or binary content is rejected before line additions and deletions are highlighted. Files stay on your device and are not uploaded to a server. Example: notes-a.txt and notes-b.txt differ only on the middle line. Word, spreadsheet, and structured JSON files are not parsed.",
	tool_compare_two_text_files_online_empty: 'Choose two text files first, or load the sample.',
	tool_compare_two_text_files_online_err_binary:
		'One file looks binary (null bytes). This page only compares plain text such as .txt.',
	tool_compare_two_text_files_online_err_encoding: "A file is not valid UTF-8. Save or convert it as UTF-8, then compare again.",
	tool_compare_two_text_files_online_err_too_large:
		'A file is larger than about 1 MB. Try a shorter excerpt so the tab stays responsive.',
	tool_compare_two_text_files_online_example:
		'Load sample compares notes-a.txt (“alpha / second line / third”) with notes-b.txt where the middle line is “changed line”. Line mode marks only that line. First paint already shows this result.',
	tool_compare_two_text_files_online_example_title: 'Example',
	tool_compare_two_text_files_online_faq_a1:
		'No. Bytes are read in this tab with FileReader. jsdiff may load from a CDN as library code; your files are not uploaded to our servers.',
	tool_compare_two_text_files_online_faq_a2:
		"Files are decoded strictly as UTF-8. A leading BOM is removed; invalid UTF-8 is rejected instead of being shown with replacement characters. Convert legacy encodings such as Windows-1252 first.",
	tool_compare_two_text_files_online_faq_a3:
		'If the file contains a null byte it is treated as binary and refused. Use a hex or archive tool for those. Word and Excel files belong on their own compare pages.',
	tool_compare_two_text_files_online_faq_a4:
		"This tool accepts .txt / .text files decoded as UTF-8. Use the paste comparer when there are no files, and the dedicated Word or spreadsheet comparers for .docx, xlsx, xls, or csv.",
	tool_compare_two_text_files_online_faq_q1: 'Are my files uploaded?',
	tool_compare_two_text_files_online_faq_q2: 'What encoding and BOM rules apply?',
	tool_compare_two_text_files_online_faq_q3: 'Can I compare binary, Word, or Excel here?',
	tool_compare_two_text_files_online_faq_q4: 'Is this the same as txt compare or compare two files?',
	tool_compare_two_text_files_online_how_body:
		'Pick two text files you already have on disk, then read the highlighted lines. There is no large paste box on this first screen.',
	tool_compare_two_text_files_online_how_item_1: 'Choose the first text file (original snapshot or export).',
	tool_compare_two_text_files_online_how_item_2: 'Choose the second text file (revised snapshot).',
	tool_compare_two_text_files_online_how_item_3: "Select Compare to refresh the line diff; choosing both files also runs it automatically.",
	tool_compare_two_text_files_online_how_item_4: 'Read green adds and red deletes. Clear removes both files from this tab.',
	tool_compare_two_text_files_online_how_title: 'How it works',
	tool_compare_two_text_files_online_label_a: 'First text file',
	tool_compare_two_text_files_online_label_b: 'Second text file',
	tool_compare_two_text_files_online_legend: 'Green = added · Red = deleted',
	tool_compare_two_text_files_online_load_sample: 'Load sample',
	tool_compare_two_text_files_online_need_lib: 'The comparer failed to load. Check your network and refresh.',
	tool_compare_two_text_files_online_no_diff: 'No differences: the two files match as text.',
	tool_compare_two_text_files_online_result_label: 'Line differences',
	tool_compare_two_text_files_online_rules_body:
		'Comparison is a line diff after UTF-8 decode. Encoding, BOM, and binary checks happen before highlighting.',
	tool_compare_two_text_files_online_rules_item_1:
		'Each file is read with FileReader / ArrayBuffer and decoded as UTF-8. A UTF-8 BOM at the start is stripped so it does not fake a first-line change.',
	tool_compare_two_text_files_online_rules_item_2:
		'A null byte means the file is treated as binary and refused. This is not a hex dump tool.',
	tool_compare_two_text_files_online_rules_item_3:
		'Diff uses line mode (jsdiff diffLines). Whole-line highlights are expected when a single word in that line changed.',
	tool_compare_two_text_files_online_rules_item_4:
		'There is no first-screen paste box. Paste two texts without files on the related Check difference between two texts page.',
	tool_compare_two_text_files_online_rules_title: 'Rules you should expect',
	tool_compare_two_text_files_online_sample_a: 'alpha\nsecond line\nthird',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\nchanged line\nthird',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '{added} added, {removed} removed',
	tool_compare_two_text_files_online_title: 'Compare two text files online',
	tool_compare_two_text_files_online_usecase_1:
		'Exports: compare yesterday’s log.txt with today’s export without pasting tens of thousands of lines.',
	tool_compare_two_text_files_online_usecase_2:
		'Config backups: two .env or .txt snapshots from disk, line by line.',
	tool_compare_two_text_files_online_usecase_3:
		'Homework: two assignment .txt files where you need to see which lines changed.',
	tool_compare_two_text_files_online_usecases_title: 'Good fits',
};

export default en;
