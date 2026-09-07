/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / en).
 * Master H1 is the task sentence “Batch convert web pages to PDF”.
 * IG vs JPG sibling: A4 portrait pagination / print archive, not a viewport screenshot.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Paste public page URLs and turn each one into an A4 portrait PDF in this tab — pages split for print and later reading, not one tall JPEG. Failed rows skip; successful files go into a ZIP. Each address is fetched once through our server and is not stored. Need chat screenshots or phone-vs-desktop first screens? Use Batch convert web pages to JPG.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Hidden page capture frame',
	tool_batch_convert_web_pages_to_pdf_clear: 'Clear',
	tool_batch_convert_web_pages_to_pdf_col_file: 'File',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Convert all',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Save a URL list as A4 portrait PDFs for print and reading — ZIP download; not a webpage screenshot.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Batch convert web pages to PDF as A4 portrait pages for print and later reading — not one tall JPEG. Paste a URL list, click Convert all, Download ZIP. Example: two policy pages become two PDFs. Each URL is fetched once and is not stored. For pasted HTML, use Convert HTML to PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Download ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Paste at least one page URL first.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'This page could not be turned into a PDF. Skipped.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'The converter library failed to load. Refresh and retry.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'This page takes at most 10 URLs. Extra lines were not added.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Could not load that URL. Check the address, or the site may block fetches.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'That line is not a valid http(s) page URL. Skipped.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Load sample fills two example.com help and policy URLs, builds two local A4 portrait PDFs with a CSS page break (no live fetch), and enables Download ZIP. Convert all fetches the addresses you pasted. Print CSS can change where each A4 page splits.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Example',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'The JPG sibling captures one JPEG per URL at a viewport you pick (desktop 1280, tablet 768, or phone 390), with quality and full page or first screen. This page slices each URL into A4 portrait pages for print and page-by-page reading. Same URL list, different artifact: paginated document vs screenshot.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'This page is a URL list: several public pages become separate A4 PDFs in a ZIP. For one HTML snippet or a single address with a live preview editor, use Convert HTML to PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Paper is always A4 portrait. Long pages split using CSS page-break rules (plus a legacy fallback). It is not one infinitely tall page. Want a long screenshot instead? Use Batch convert web pages to JPG.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Conversion runs in this tab. Each URL is sent to our server once to fetch HTML; we do not store the pages. The PDF is built on your device and packed into a ZIP here.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Successful rows become separate PDFs in one ZIP. This page does not merge them — use Combine files into one PDF after you download if you need a single booklet.',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'No. Scripts are stripped. Login walls, paywalls, and JavaScript-rendered apps often will not match the live site. Print CSS may also move the page breaks away from what you see on screen.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'How is this different from Batch convert web pages to JPG?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'How is this different from Convert HTML to PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'What paper size is used? Is it one long page?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Are my pages uploaded and stored?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Is the result one PDF or a ZIP of many?',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'Will a logged-in or JavaScript-heavy site match the live page?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs in the queue',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Paste the public URLs you want to archive, convert each into an A4 portrait PDF, then take a ZIP of the files that succeeded.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Paste one https URL per line. Help-center, policy, and other public docs you would print work well.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Leave Load wait near 1 second unless images stay blank on an A4 page.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Press Convert all. Each public URL is fetched once and paginated to A4 portrait (CSS page-break can split sections). Failed rows skip.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Need one HTML snippet with a preview? Use Convert HTML to PDF. Need a viewport screenshot instead of paginated paper? Use Batch convert web pages to JPG.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Download ZIP when at least one row succeeded. Click Load sample to try two local A4 pages; the progress panel shows while they convert.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'To bind several PDFs into one booklet, download first, then use Combine files into one PDF.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'How it works',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Batch progress',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s}s elapsed',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Fetch',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'One http(s) URL per line, up to 10. Output is A4 portrait with CSS page breaks — not a full-page JPEG. Conversion is serial. Failed rows skip. Successful PDFs go into a ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Each URL is sent to our server once to fetch HTML and is not stored. The PDF is built in this tab on A4 portrait paper.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Pagination follows CSS page-break rules (with a legacy fallback). Print styles can differ from the on-screen layout. Very tall pages are still capped so the tab does not crash.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Private networks, logins, and missing pages fail that row. Duplicate ZIP names become name (2).pdf. Scripts are stripped before capture.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'This is not a whole-site crawler and not a screenshot tool. Paste the public URLs you already have.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'Compared with Batch convert web pages to JPG: that page rasterizes one JPEG at a chosen viewport. Compared with Convert HTML to PDF: that page takes pasted HTML, not a URL list. Compared with Combine files into one PDF: this page does not merge outputs.',
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
		'One public http(s) URL per line, up to 10. We fetch each page once and rewrite CSS/image URLs. Scripts are removed; the result is A4 portrait with CSS page breaks.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'Page URLs (one per line)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Archive several help-center or public docs as printable A4 PDFs before a meeting, without opening Print in every tab.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Pack a URL list of policies, terms, or notices into a ZIP for later offline reading or email attachments.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Keep a pasted HTML snippet on Convert HTML to PDF. Keep chat screenshots and phone-vs-desktop first screens on Batch convert web pages to JPG. This page is the URL-list print archive.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Good fits',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Extra seconds after images start loading so remote pictures can finish on each A4 page. Default is 1. Raise it if a PDF shows empty image boxes.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Load wait (sec)',
};

export default en;
