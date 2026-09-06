/**
 * i18n (excel-compare-files / en).
 * H1: Excel compare files — “online” stays in description.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_excel_compare_files_article:
		'Choose two spreadsheets and compare the current sheet cell by cell. Empty cells count as blank strings. Files stay on your device and are not uploaded.',
	tool_excel_compare_files_clear: 'Clear',
	tool_excel_compare_files_col_addr: 'Cell',
	tool_excel_compare_files_col_left: 'First file',
	tool_excel_compare_files_col_right: 'Second file',
	tool_excel_compare_files_compare: 'Compare',
	tool_excel_compare_files_desc:
		'Excel compare files: pick two spreadsheets, compare the current sheet cell by cell — stays on the device, not uploaded.',
	tool_excel_compare_files_description:
		'Excel compare files in your browser. Process: choose two xlsx or csv files, pick the current sheet (first sheet by default), then list cells whose values differ. Files stay on your device and are not uploaded. Example: two 3-row tables where B3 changes from 2 to 9. Column shifts are compared by address, not by header name.',
	tool_excel_compare_files_empty: 'Choose two spreadsheet files first, or load the sample.',
	tool_excel_compare_files_err_read: 'Could not read a spreadsheet. Try xlsx or csv, and unlock protected workbooks first.',
	tool_excel_compare_files_example:
		'Load sample compares two CSV tables. Name/Qty headers match; Gadget quantity is 2 vs 9, so B3 is listed. First paint already shows that cell.',
	tool_excel_compare_files_example_title: 'Example',
	tool_excel_compare_files_faq_a1:
		'No. Bytes are read in this tab with SheetJS. The library load from this site; your files are not uploaded to our servers.',
	tool_excel_compare_files_faq_a2:
		'Yes. The first sheet is selected by default. Use the sheet lists if you need another tab in the same file. Other sheets are not compared until you select them.',
	tool_excel_compare_files_faq_a3:
		"Yes. CSV is read as a single sheet, so you can compare two CSV files or compare a CSV export with an Excel sheet by cell address.",
	tool_excel_compare_files_faq_a4:
		'Missing cells and empty cells are both treated as a blank string. A shifted column still compares A1 to A1, not “the Name column” by header. That avoids silent mismatches when headers move.',
	tool_excel_compare_files_faq_q5: "Does it compare formulas, formatting, or only displayed values?",
	tool_excel_compare_files_faq_a5: "It compares the displayed text SheetJS reads for each cell. Formula expressions, styles, comments, column widths, and workbook structure are not compared separately. A formula change with the same cached display value can therefore look unchanged.",
	tool_excel_compare_files_faq_q1: 'Are my Excel files uploaded?',
	tool_excel_compare_files_faq_q2: 'Does it only compare the first sheet?',
	tool_excel_compare_files_faq_q3: 'Can I compare two CSV files here?',
	tool_excel_compare_files_faq_q4: 'How are empty cells and shifted columns handled?',
	tool_excel_compare_files_how_body:
		'Pick two tables and read which cell addresses differ on the current sheets.',
	tool_excel_compare_files_how_item_1: 'Choose the first spreadsheet (xlsx, xls, or csv).',
	tool_excel_compare_files_how_item_2: 'Choose the second spreadsheet.',
	tool_excel_compare_files_how_item_3: 'Leave the first sheet selected unless you need another tab.',
	tool_excel_compare_files_how_item_4: "Select Compare to list cells whose displayed text differs on the two selected sheets.",
	tool_excel_compare_files_how_title: 'How it works',
	tool_excel_compare_files_label_a: 'First spreadsheet',
	tool_excel_compare_files_label_b: 'Second spreadsheet',
	tool_excel_compare_files_load_sample: 'Load sample',
	tool_excel_compare_files_need_lib: 'SheetJS failed to load. Check your network and refresh.',
	tool_excel_compare_files_no_diff: 'No cell differences on the current sheets.',
	tool_excel_compare_files_result_label: 'Cell differences',
	tool_excel_compare_files_rules_body:
		'Values are compared by grid address on the selected sheet only.',
	tool_excel_compare_files_rules_item_1:
		'SheetJS reads the workbook. The default sheet is the first name in the file.',
	tool_excel_compare_files_rules_item_2:
		'Each cell is compared as text after SheetJS conversion. Empty and missing cells are "".',
	tool_excel_compare_files_rules_item_3:
		'A column inserted on one side still lines up by A1/B1 addresses, not by header labels.',
	tool_excel_compare_files_rules_item_4:
		'Other sheets in the workbook are ignored until you select them. This is not a whole-workbook default scan.',
	tool_excel_compare_files_rules_title: 'Rules you should expect',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'Sheet in first file',
	tool_excel_compare_files_sheet_b: 'Sheet in second file',
	tool_excel_compare_files_summary: '{n} cells differ',
	tool_excel_compare_files_title: 'Excel compare files',
	tool_excel_compare_files_usecase_1: 'Quotes: two exported price lists where a few cells moved.',
	tool_excel_compare_files_usecase_2: 'Attendance or inventory CSV dumps week over week.',
	tool_excel_compare_files_usecase_3: 'Homework tables saved as xlsx from two students.',
	tool_excel_compare_files_usecases_title: 'Good fits',
};

export default en;
