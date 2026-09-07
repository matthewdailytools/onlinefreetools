/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / en).
 * Master H1 is the task sentence “Batch convert web pages to JPG”.
 * Viewport, JPEG quality, and full-page vs first-screen are the IG vs the PDF batch sibling.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'Advanced settings (optional)',
	tool_batch_convert_web_pages_to_jpg_article:
		'Capture each public URL as a JPEG screenshot at a width you pick (desktop 1280, tablet 768, or phone 390). Choose full-page scroll or first screen, and JPEG quality, then take a ZIP of the images. This is a raster for chat, tickets, and layout review — not A4 print pages. Each address is fetched once through our server and is not stored. Need printable documents? Use Batch convert web pages to PDF.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'First screen',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'Hidden page capture frame',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'Full page',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'Capture',
	tool_batch_convert_web_pages_to_jpg_clear: 'Clear',
	tool_batch_convert_web_pages_to_jpg_col_file: 'File',
	tool_batch_convert_web_pages_to_jpg_col_status: 'Status',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'Convert all',
	tool_batch_convert_web_pages_to_jpg_desc:
		'Screenshot a URL list to JPEG at desktop, tablet, or phone width — ZIP; not an A4 PDF.',
	tool_batch_convert_web_pages_to_jpg_description:
		'Batch convert web pages to JPG: screenshot a URL list at desktop, tablet, or phone width (one line = webpage to jpg). Full page or first screen, pick JPEG quality, Download ZIP. Steps: paste URLs, Convert all, Download ZIP. Example: two ticket links become two JPEGs. Fetched once, not stored.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'Download ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: 'Paste at least one page URL first.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'This page could not be turned into a JPEG. Skipped.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'The converter library failed to load. Refresh and retry.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'This page takes at most 10 URLs. Extra lines were not added.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'Could not load that URL. Check the address, or the site may block fetches.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'That line is not a valid http(s) page URL. Skipped.',
	tool_batch_convert_web_pages_to_jpg_example:
		'Load sample fills a ticket-layout URL and a mobile-hero URL, builds two local screenshots (phone 390 turns the header blue; desktop 1280 keeps it dark) without fetching the live site, and enables Download ZIP. Convert all fetches the addresses you pasted. Viewport, quality, and full page vs first screen change the pixels.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'Example',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'Conversion runs in this tab. If you convert a URL list, we send each address to our server once so it can fetch the HTML; we do not store the pages. The JPEGs are built in your browser and packed into a ZIP here.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'The PDF sibling paginates into A4 documents for reading and print. This page rasterizes one JPEG per URL at a viewport you pick (desktop 1280, tablet 768, or phone 390), with JPEG quality and full page or first screen. Same URL list, different artifact.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF to JPG starts from a PDF file you upload. This page starts from webpage URLs. If you already have PDFs, use PDF to JPG; if you have a URL list, use this page.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'No. Scripts are stripped. Login walls, paywalls, and JavaScript-rendered apps often will not match the live site. Responsive CSS will follow the viewport width you selected.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'Successful rows become separate JPEGs in one ZIP. One URL still works (webpage to jpg / url to jpg): paste a single line. This page does not merge images into one file.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'Viewport width changes the layout (phone vs desktop CSS). JPEG quality trades file size for compression artifacts. Full page captures the scroll height (capped so huge homepages do not crash the tab); first screen keeps roughly one viewport height.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'Are my pages uploaded and stored?',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'How is this different from Batch convert web pages to PDF?',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'How is this different from PDF to JPG?',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'Will a logged-in or JavaScript-heavy site match the live page?',
	tool_batch_convert_web_pages_to_jpg_faq_q5: 'Is the result one JPG or a ZIP? Can I convert one URL?',
	tool_batch_convert_web_pages_to_jpg_faq_q6: 'What do viewport, JPEG quality, and first screen change?',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} URLs in the queue',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'Paste URLs you would screenshot for chat or a layout review, press Convert all (desktop 1280, 85% JPEG, full page by default), then download a ZIP of the images that succeeded.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'Paste one https URL per line (ticket links and public help heroes work well). One line is enough for webpage to jpg / url to jpg.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'Press Convert all. Defaults are desktop 1280, 85% JPEG, and full page. Each public URL is fetched once; failed rows skip.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'Need phone layout, first screen only, or more wait for blank images? Open Advanced settings for viewport, JPEG quality, capture, and Load wait.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: 'Need printable A4 files instead of screenshots? Use Batch convert web pages to PDF. Already have a PDF file? Use PDF to JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'Download ZIP when at least one row succeeded.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'Click Load sample to try two local pages; the progress panel shows while they convert.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'How it works',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '{s}s elapsed',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'Fetch',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'Batch progress',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'Viewport width changes the layout. JPEG quality changes file size. Full page is a tall screenshot; first screen is roughly one viewport high.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'JPEG quality',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'One http(s) URL per line, up to 10. Conversion is serial. Failed rows skip. Successful JPEGs go into a ZIP. Viewport, quality, and capture mode change the pixels — this is not a renamed PDF export.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'Each URL is sent to our server once to fetch HTML and is not stored. The JPEG is built in this tab.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'Private networks, logins, and missing pages fail that row. The rest of the batch continues.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'Duplicate ZIP names become name (2).jpg. Scripts and noscript refresh traps are stripped. Very tall pages are capped so the canvas does not crash the tab.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'This is not a whole-site crawler. Paste the URLs you already have.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'Compared with Batch convert web pages to PDF: no A4 pagination. Compared with PDF to JPG: input is a URL list, not a PDF upload. Compared with bulk image converters: input is a webpage, not a local photo.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'Rules you should expect',
	tool_batch_convert_web_pages_to_jpg_sample: 'Load sample',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'Rendering JPEG… this tab may pause for a few seconds',
	tool_batch_convert_web_pages_to_jpg_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'Fetching page HTML…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG ready',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'Queued',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'Skipped',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'Waiting for images to finish…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'Converting the batch…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} ready · {skip} skipped',
	tool_batch_convert_web_pages_to_jpg_title: 'Batch convert web pages to JPG',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'One public http(s) URL per line, up to 10. We fetch each page once and rewrite CSS/image URLs. Scripts are removed before the JPEG capture. Layout follows the viewport you pick.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'Page URLs (one per line)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/tickets/chat-layout',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'Drop several ticket or help URLs and get JPEG screenshots to paste into chat — a raster you can attach, not a printable booklet.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'Capture the same public page at phone 390 and desktop 1280 to compare the first screen before a review.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'Keep A4 archival PDFs on Batch convert web pages to PDF; use this page when you need image files from a URL list.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'Good fits',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'Viewport',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'Phone 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'Extra seconds after images start loading so remote pictures can finish. Default is 1. Raise it if a JPEG shows empty image boxes.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'Load wait (sec)',
};

export default en;
