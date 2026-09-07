/**
 * i18n tool shard (batch-convert-web-pages-to-png / en).
 * Master H1 is the task sentence “Batch convert web pages to PNG”.
 * Lossless PNG, optional transparent background, and 1x/2x scale are the IG vs the JPG sibling.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'Advanced settings (optional)',
	tool_batch_convert_web_pages_to_png_article:
		'Capture each public URL as a lossless PNG at a width you pick (desktop 1280, tablet 768, or phone 390). Choose a white or transparent background and 1x or 2x pixels, then take a ZIP. This keeps sharp UI edges — it is not a JPEG for chat, and not A4 print pages. Each address is fetched once through our server and is not stored. Need a smaller photo-style file? Use Batch convert web pages to JPG.',
	tool_batch_convert_web_pages_to_png_bg_label: 'Background',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'Transparent',
	tool_batch_convert_web_pages_to_png_bg_white: 'White',
	tool_batch_convert_web_pages_to_png_capture_first: 'First screen',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'Hidden page capture frame',
	tool_batch_convert_web_pages_to_png_capture_full: 'Full page',
	tool_batch_convert_web_pages_to_png_capture_label: 'Capture',
	tool_batch_convert_web_pages_to_png_clear: 'Clear',
	tool_batch_convert_web_pages_to_png_col_file: 'File',
	tool_batch_convert_web_pages_to_png_col_status: 'Status',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'Convert all',
	tool_batch_convert_web_pages_to_png_desc:
		'Screenshot a URL list to lossless PNG — optional transparent background and 2x scale; ZIP. Not JPEG, not A4 PDF.',
	tool_batch_convert_web_pages_to_png_description:
		'Batch convert web pages to PNG: lossless screenshots from a URL list (one line = webpage to png). White or transparent background, 1x or 2x scale, Download ZIP. Steps: paste URLs, Convert all, Download ZIP. Example: two UI pages become two sharp PNGs. Fetched once, not stored.',
	tool_batch_convert_web_pages_to_png_download_zip: 'Download ZIP',
	tool_batch_convert_web_pages_to_png_empty: 'Paste at least one page URL first.',
	tool_batch_convert_web_pages_to_png_err_convert: 'This page could not be turned into a PNG. Skipped.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_batch_convert_web_pages_to_png_err_load: 'The converter library failed to load. Refresh and retry.',
	tool_batch_convert_web_pages_to_png_err_too_many: 'This page takes at most 10 URLs. Extra lines were not added.',
	tool_batch_convert_web_pages_to_png_err_url: 'Could not load that URL. Check the address, or the site may block fetches.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'That line is not a valid http(s) page URL. Skipped.',
	tool_batch_convert_web_pages_to_png_example:
		'Load sample fills a component-kit URL and a translucent-overlay URL, builds two local PNGs (1px borders stay sharp; the overlay keeps alpha when Background is Transparent) without fetching the live site, and enables Download ZIP. Convert all fetches the addresses you pasted. Viewport, background, scale, and full page vs first screen change the pixels.',
	tool_batch_convert_web_pages_to_png_example_title: 'Example',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'Conversion runs in this tab. If you convert a URL list, we send each address to our server once so it can fetch the HTML; we do not store the pages. The PNGs are built in your browser and packed into a ZIP here.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'The JPG sibling is a lossy photo-style JPEG (quality slider) for chat and tickets. This page writes lossless PNG so 1px UI edges and type stay sharp, with optional transparent background and 1x/2x scale. Same URL list, different artifact.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'The PDF sibling paginates into A4 documents for reading and print. This page is one PNG raster per URL. Need printable pages? Use Batch convert web pages to PDF.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'No. Scripts are stripped. Login walls, paywalls, and JavaScript-rendered apps often will not match the live site. Responsive CSS follows the viewport width you selected.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'Successful rows become separate PNGs in one ZIP. One URL still works (webpage to png / convert webpage to png): paste a single line. This page does not merge images into one file.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'Transparent only shows through where the page itself has alpha (or no solid body fill). A typical white homepage still looks white. 2x doubles pixels for retina review and makes a larger file. A solid-color page cannot be “punched through” to checkerboard.',
	tool_batch_convert_web_pages_to_png_faq_q1: 'Are my pages uploaded and stored?',
	tool_batch_convert_web_pages_to_png_faq_q2: 'How is this different from Batch convert web pages to JPG?',
	tool_batch_convert_web_pages_to_png_faq_q3: 'How is this different from Batch convert web pages to PDF?',
	tool_batch_convert_web_pages_to_png_faq_q4: 'Will a logged-in or JavaScript-heavy site match the live page?',
	tool_batch_convert_web_pages_to_png_faq_q5: 'Is the result one PNG or a ZIP? Can I convert one URL?',
	tool_batch_convert_web_pages_to_png_faq_q6: 'When does transparent background actually show, and what does 2x change?',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} URLs in the queue',
	tool_batch_convert_web_pages_to_png_how_body:
		'Paste URLs you would archive as sharp UI screenshots, press Convert all (desktop 1280, white background, 1x, full page by default), then download a ZIP of the PNGs that succeeded.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'Paste one https URL per line (component kits and public UI docs work well). One line is enough for webpage to png.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'Press Convert all. Defaults are desktop 1280, white background, 1x scale, and full page. Each public URL is fetched once; failed rows skip.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'Need transparent background, 2x pixels, phone width, or first screen only? Open Advanced settings for viewport, background, scale, capture, and Load wait.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'Need a smaller JPEG for chat? Use Batch convert web pages to JPG. Need printable A4 files? Use Batch convert web pages to PDF. Already have local photos? Use Bulk convert images to PNG.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'Download ZIP when at least one row succeeded.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'Click Load sample to try two local UI pages; the progress panel shows while they convert.',
	tool_batch_convert_web_pages_to_png_how_title: 'How it works',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '{s}s elapsed',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'Fetch',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_png_hud_title: 'Batch progress',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'Viewport width changes the layout. Transparent background keeps alpha. 2x scale doubles pixels. Full page is a tall screenshot; first screen is roughly one viewport high.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'One http(s) URL per line, up to 10. Conversion is serial. Failed rows skip. Successful PNGs go into a ZIP. Background and scale change the pixels — this is not a renamed JPEG or PDF export.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'Each URL is sent to our server once to fetch HTML and is not stored. The PNG is built in this tab.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'Private networks, logins, and missing pages fail that row. The rest of the batch continues.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'Duplicate ZIP names become name (2).png. Scripts and noscript refresh traps are stripped. Very tall pages are capped so the canvas does not crash the tab.',
	tool_batch_convert_web_pages_to_png_rules_item_4:
		'This is not a whole-site crawler. Paste the URLs you already have.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'Compared with Batch convert web pages to JPG: lossless PNG, no JPEG quality slider, optional transparent background. Compared with Batch convert web pages to PDF: no A4 pagination. Compared with Bulk convert images to PNG: input is a webpage URL, not a local photo.',
	tool_batch_convert_web_pages_to_png_rules_title: 'Rules you should expect',
	tool_batch_convert_web_pages_to_png_sample: 'Load sample',
	tool_batch_convert_web_pages_to_png_scale_1x: '1x',
	tool_batch_convert_web_pages_to_png_scale_2x: '2x (retina)',
	tool_batch_convert_web_pages_to_png_scale_label: 'Pixel scale',
	tool_batch_convert_web_pages_to_png_status_converting: 'Rendering PNG… this tab may pause for a few seconds',
	tool_batch_convert_web_pages_to_png_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'Fetching page HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG ready',
	tool_batch_convert_web_pages_to_png_status_queued: 'Queued',
	tool_batch_convert_web_pages_to_png_status_skip: 'Skipped',
	tool_batch_convert_web_pages_to_png_status_waiting: 'Waiting for images to finish…',
	tool_batch_convert_web_pages_to_png_status_working: 'Converting the batch…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} ready · {skip} skipped',
	tool_batch_convert_web_pages_to_png_title: 'Batch convert web pages to PNG',
	tool_batch_convert_web_pages_to_png_url_hint:
		'One public http(s) URL per line, up to 10. We fetch each page once and rewrite CSS/image URLs. Scripts are removed before the PNG capture. Layout follows the viewport you pick.',
	tool_batch_convert_web_pages_to_png_url_label: 'Page URLs (one per line)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'Archive a component-kit or design-preview URL as a sharp PNG so 1px borders and labels stay readable — JPEG would smear the edges.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'Export a floating panel with transparent background and drop the PNG onto a Figma frame. A solid white homepage will still look white.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'Keep chat-sized JPEGs on Batch convert web pages to JPG and A4 archives on Batch convert web pages to PDF; use this page when you need lossless UI rasters.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'Good fits',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'Viewport',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'Phone 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'Extra seconds after images start loading so remote pictures can finish. Default is 1. Raise it if a PNG shows empty image boxes.',
	tool_batch_convert_web_pages_to_png_wait_label: 'Load wait (sec)',
};

export default en;
