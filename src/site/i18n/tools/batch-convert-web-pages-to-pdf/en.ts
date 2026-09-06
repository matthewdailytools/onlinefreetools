/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / en).
 * Master H1 is the task sentence “Batch convert web pages to PDF”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Paste one public page URL per line, convert each page to an A4 PDF in this tab, skip rows that fail, then download a ZIP. Each address is fetched once through our server and is not stored; conversion stays in the tab.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Hidden page capture frame',
	tool_batch_convert_web_pages_to_pdf_clear: 'Clear',
	tool_batch_convert_web_pages_to_pdf_col_file: 'File',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Convert all',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Batch convert web pages to PDF from a URL list — ZIP download; each URL is fetched once and not stored.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Batch convert web pages to PDF: paste a URL list (one https address per line, up to 10) to convert multiple webpages to PDF in this tab, skip rows that fail, download a ZIP. Steps: paste the list, click Convert all, review the table, download. Example: two sample help and policy pages become two PDFs in one ZIP. Each URL is fetched once through our server and is not stored; conversion stays in the tab. For a single HTML snippet, use Convert HTML to PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Download ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Paste at least one page URL first.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'This page could not be turned into a PDF. Skipped.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'The converter library failed to load. Refresh and retry.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'This page takes at most 10 URLs. Extra lines were not added.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Could not load that URL. Check the address, or the site may block fetches.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'That line is not a valid http(s) page URL. Skipped.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Load sample fills two example.com URLs, builds two local sample pages into PDFs without fetching the live site, and enables Download ZIP. Convert all fetches the addresses you pasted.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Example',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Conversion runs in this tab. If you convert a URL list, we send each address to our server once so it can fetch the HTML; we do not store the pages. The PDFs are built in your browser and packed into a ZIP here.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'This page is for a URL list (convert multiple webpages to PDF, then ZIP). For one HTML snippet or a single address with a live preview editor, use Convert HTML to PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'No. Scripts are stripped. Login walls, paywalls, and JavaScript-rendered apps often will not match the live site. Print CSS may also differ.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Successful rows become separate PDFs in one ZIP. This page does not merge them into a single file — use Combine files into one PDF after you download if you need that.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Up to 10 http(s) URLs. Extra lines are ignored. Failed rows are skipped so the rest of the batch can finish.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Are my pages uploaded and stored?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'How is this different from Convert HTML to PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Will a logged-in or JavaScript-heavy site match the live page?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Is the result one PDF or a ZIP of many?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'How many URLs can I convert at once?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs in the queue',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Paste a URL list of public pages, convert them here one after another, then take a ZIP of the PDFs that succeeded.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Paste one https URL per line (help-center or policy pages work well).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Leave Load wait near 1 second unless images stay blank in the PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Press Convert all. Each public URL is fetched once; failed rows are skipped.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Need one HTML snippet instead of a list? Use Convert HTML to PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Download ZIP when at least one row succeeded. Click Load sample to try two local pages; the progress panel shows while they convert.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'How it works',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Batch progress',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s}s elapsed',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Fetch',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'One http(s) URL per line, up to 10. Conversion is serial. Failed rows skip. Successful PDFs go into a ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Each URL is sent to our server once to fetch HTML and is not stored. The PDF is built in this tab.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Private networks, logins, and missing pages fail that row. The rest of the batch continues.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Duplicate ZIP names become name (2).pdf. Scripts are stripped before capture.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'This is not a whole-site crawler. Paste the URLs you already have.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Rules you should expect',
	tool_batch_convert_web_pages_to_pdf_sample: 'Load sample',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Fetching page HTML…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF ready',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Skipped',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Waiting for images to finish…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'Rendering PDF… this tab may pause for a few seconds',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'Queued',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Converting the batch…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} ready · {skip} skipped',
	tool_batch_convert_web_pages_to_pdf_title: 'Batch convert web pages to PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'One public http(s) URL per line, up to 10. We fetch each page once and rewrite CSS/image URLs. Scripts are removed before PDF.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'Page URLs (one per line)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Save several help-center or docs pages as PDF without opening each one.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Archive a URL list of public policy pages into a ZIP for later reading.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Keep a single HTML paste on Convert HTML to PDF; use this page when you already have many links.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Good fits',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Extra seconds after images start loading so remote pictures can finish. Default is 1. Raise it if a PDF shows empty image boxes.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Load wait (sec)',
};

export default en;
