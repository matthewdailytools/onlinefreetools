/**
 * i18n tool shard (batch-convert-web-pages-to-excel / en).
 * Master H1: Batch convert web pages to Excel.
 * IG: HTML <table> cells into one .xlsx workbook — not a screenshot, not A4 PDF, not Word prose.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'Advanced settings (optional)',
	tool_batch_convert_web_pages_to_excel_article:
		'Pull HTML tables from a public URL list into one Excel workbook: each table becomes a sheet of cells you can sort and formula. Paragraphs and screenshots are ignored. This is not an A4 PDF and not a Word document. Each address is fetched once through our server and is not stored. Pasted HTML stays in this tab. Need printable pages? Use Batch convert web pages to PDF. Need editable headings? Use Convert HTML web pages to a Word document.',
	tool_batch_convert_web_pages_to_excel_clear: 'Clear',
	tool_batch_convert_web_pages_to_excel_col_file: 'Sheets',
	tool_batch_convert_web_pages_to_excel_col_status: 'Status',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'Convert all',
	tool_batch_convert_web_pages_to_excel_desc:
		'Extract HTML tables from a URL list into one Excel workbook — not a screenshot, not a PDF, not Word.',
	tool_batch_convert_web_pages_to_excel_description:
		'Batch convert web pages to Excel: pull HTML tables from a URL list into one .xlsx workbook (html table to excel / convert html to excel). Not a screenshot, not A4 PDF. Steps: paste URLs, Convert all, Download Excel. Example: a price list and a stock grid become two sheets. Fetched once, not stored.',
	tool_batch_convert_web_pages_to_excel_download: 'Download Excel',
	tool_batch_convert_web_pages_to_excel_empty: 'Paste at least one page URL, or switch to Paste HTML.',
	tool_batch_convert_web_pages_to_excel_err_convert: 'No usable HTML table on that page. Skipped.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'Paste HTML that contains a <table> first.',
	tool_batch_convert_web_pages_to_excel_err_load: 'The Excel library failed to load. Refresh and retry.',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'This page takes at most 10 URLs. Extra lines were not added.',
	tool_batch_convert_web_pages_to_excel_err_url: 'Could not load that URL. Check the address, or the site may block fetches.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'That line is not a valid http(s) page URL. Skipped.',
	tool_batch_convert_web_pages_to_excel_example:
		'Load sample fills a price-list URL and a stock-grid URL, builds one local workbook from two HTML tables (without fetching the live site), and enables Download Excel. Convert all fetches the addresses you pasted. Paste HTML is the same table mapping without a URL.',
	tool_batch_convert_web_pages_to_excel_example_title: 'Example',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'Pasted HTML never leaves this tab. If you convert URLs, we send each address to our server once to fetch HTML and do not store the pages. The .xlsx is built in your browser.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'The Word sibling maps headings, lists, and paragraphs into an editable .docx. This page ignores prose and only copies HTML table cells into Excel sheets. Same fetch, different artifact.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG siblings are viewport screenshots (ZIP of images). The PDF sibling paginates A4 print pages. This page writes numbers and text you can filter in Excel — one workbook, not a ZIP of pictures.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'Yes. One line is enough for convert web page to excel / webpage to excel. Successful URLs share one .xlsx with multiple sheets.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'No. There is no OCR and no PDF parser here. Convert the HTML page (or paste the table markup). For an existing CSV, use CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'Use the Paste HTML tab (html to excel / html table to excel / html to xlsx). Chrome complete-page / .mhtml is out of scope — export HTML or copy the table markup instead. This is not Excel for the web.',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'Are my pages uploaded and stored?',
	tool_batch_convert_web_pages_to_excel_faq_q2: 'How is this different from Convert HTML web pages to a Word document?',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'How is this different from batch webpage JPG, PNG, or PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'Can I convert a single URL?',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'Can you extract tables from a PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'I have HTML or an HTML table, not a URL. What about Excel Online or mhtml?',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} URLs in the queue',
	tool_batch_convert_web_pages_to_excel_how_body:
		'Paste public page URLs that contain HTML tables, press Convert all, then download one Excel workbook. Prose is skipped; only <table> cells become sheets.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'Paste one https URL per line (price lists and public HTML tables work well). One line is enough for webpage to excel.',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'Press Convert all. Each public URL is fetched once; pages with no usable table skip; the rest continue.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'Have markup instead of a URL (html to excel / html table to excel)? Open the Paste HTML tab, paste the source, then Convert all.',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'Need one sheet per URL instead of one sheet per table, or keep tiny nav tables? Open Advanced settings.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'Need printable A4 files? Use Batch convert web pages to PDF. Need editable headings? Use Convert HTML web pages to a Word document. Already have CSV? Use CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'Download Excel when at least one table was mapped.',
	tool_batch_convert_web_pages_to_excel_how_title: 'How it works',
	tool_batch_convert_web_pages_to_excel_html_hint:
		'Paste a fragment or a full HTML document that contains <table>. Mapping stays in this tab; nothing is uploaded.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML with tables',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>Qty</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'Sheets',
	tool_batch_convert_web_pages_to_excel_layout_table: 'One sheet per HTML table',
	tool_batch_convert_web_pages_to_excel_layout_url: 'One sheet per URL (stack tables)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'Default is one sheet per HTML table in a single workbook. Stacking puts every table from a URL onto one sheet with a blank row between them. Tiny tables (under two rows or two columns) are skipped so nav grids do not clutter the file.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'Only HTML <table> cells are copied. One http(s) URL per line, up to 10. Failed rows skip. Successful tables share one .xlsx. This is not a renamed screenshot or PDF export.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'Each URL is sent to our server once to fetch HTML and is not stored. Pasted HTML never leaves this tab. The workbook is built here.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'Private networks, logins, and pages with no <table> fail that row. The rest of the batch continues.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan inserts empty placeholder cells. rowspan is flattened (each row is independent). Scripts are stripped, so JavaScript-only tables will be empty.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'This is not a whole-site crawler and not Excel for the web. Paste the URLs or HTML you already have. Sheet names are capped at 31 characters.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'Compared with Convert HTML web pages to a Word document: tables only, not headings/lists. Compared with batch JPG/PNG/PDF: cells in one workbook, not ZIP rasters or A4 pages. Compared with CSV ↔ JSON: input is a webpage, not a file you already have.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'Rules you should expect',
	tool_batch_convert_web_pages_to_excel_sample: 'Load sample',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'Skip tiny tables (under 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'Mapping HTML tables…',
	tool_batch_convert_web_pages_to_excel_status_done: 'Batch finished — check the table, then download Excel.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'Fetching page HTML…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'Tables mapped',
	tool_batch_convert_web_pages_to_excel_status_queued: 'Queued',
	tool_batch_convert_web_pages_to_excel_status_skip: 'Skipped',
	tool_batch_convert_web_pages_to_excel_status_working: 'Converting the batch…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} ready · {skip} skipped',
	tool_batch_convert_web_pages_to_excel_tab_html: 'Paste HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'Page URLs',
	tool_batch_convert_web_pages_to_excel_title: 'Batch convert web pages to Excel',
	tool_batch_convert_web_pages_to_excel_url_hint:
		'One public http(s) URL per line, up to 10. We fetch each page once. Scripts are removed. Only HTML tables become sheets.',
	tool_batch_convert_web_pages_to_excel_url_label: 'Page URLs (one per line)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'Archive a public price-list or SKU HTML table into Excel so quantities stay numbers you can filter — a PNG screenshot would be pixels.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'Grab parameter tables from two help URLs into one workbook, then add your own SUM column. Word would keep the headings as prose instead.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'Keep A4 printouts on Batch convert web pages to PDF and already-have-CSV work on CSV ↔ JSON; use this page when the source is still a webpage table.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'Good fits',
};

export default en;
