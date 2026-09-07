/**
 * i18n tool shard (convert-html-web-pages-to-word-document / en).
 * Master H1: Convert HTML web pages to a Word document.
 * IG: editable Word styles (headings/lists/tables), not A4 PDF and not a screenshot.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'Advanced settings (optional)',
	tool_convert_html_web_pages_to_word_document_article:
		'Turn pasted HTML or a public webpage into an editable .docx: headings, lists, tables, and links become Word styles you can revise. This is not an A4 PDF and not a screenshot. Pasted HTML stays in this tab. A URL is fetched once through our server and is not stored. Need print pages? Use Convert HTML to PDF. Already have a PDF? Use Turn PDF into Word document.',
	tool_convert_html_web_pages_to_word_document_clear: 'Clear',
	tool_convert_html_web_pages_to_word_document_convert: 'Convert',
	tool_convert_html_web_pages_to_word_document_desc:
		'Paste HTML or fetch a page URL into an editable Word .docx — not a PDF, not a screenshot.',
	tool_convert_html_web_pages_to_word_document_description:
		'Convert HTML web pages to a Word document (html to word / html to docx): paste HTML or fetch a URL, map headings, lists, and tables into editable .docx, then Download. Steps: paste or fetch, Convert, Download. Example: a release-notes heading and table become Word styles. Pasted HTML stays in this tab; URLs are fetched once, not stored.',
	tool_convert_html_web_pages_to_word_document_download: 'Download',
	tool_convert_html_web_pages_to_word_document_empty: 'Paste HTML or enter a page URL first.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'Could not build a Word file from that HTML. Check the markup and retry.',
	tool_convert_html_web_pages_to_word_document_err_load: 'The Word library failed to load. Refresh and retry.',
	tool_convert_html_web_pages_to_word_document_err_url: 'Could not load that URL. Check the address, or the site may block fetches.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'Enter a valid http(s) page URL first.',
	tool_convert_html_web_pages_to_word_document_example:
		'Load sample fills release-notes HTML (an H1, a list, a two-column table, and a link), runs Convert, and enables Download. The .docx uses Word heading and table styles — you can edit the text. Convert on the Page URL tab fetches a live address instead.',
	tool_convert_html_web_pages_to_word_document_example_title: 'Example',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'Pasted HTML never leaves this tab. If you convert a page URL, we send that address to our server once to fetch HTML and do not store it. The .docx is built in your browser.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'Convert HTML to PDF paginates into A4 print pages. This page maps HTML into editable Word paragraphs, headings, lists, and tables. Same HTML, different artifact.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'Turn PDF into Word starts from a PDF file and its text layer. This page starts from HTML you paste or a webpage URL. If you already have a PDF, use that tool.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'Yes. Open the Page URL tab, paste one https address, then Convert. Scripts are stripped. Login walls and JavaScript apps often will not match the live site. CSS layout is not preserved pixel-for-pixel.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'The download is a .docx (html to docx). Open it in Word or another editor that reads Office Open XML. This is not a .doc binary and not an .mhtml Chrome save.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'No. Export or copy the HTML instead. Chrome complete-page / MHTML packages are a different format and are not parsed here.',
	tool_convert_html_web_pages_to_word_document_faq_q1: 'Are my HTML or pages uploaded and stored?',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'How is this different from Convert HTML to PDF?',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'How is this different from Turn PDF into Word document?',
	tool_convert_html_web_pages_to_word_document_faq_q4: 'Can I convert a webpage URL (webpage to word)?',
	tool_convert_html_web_pages_to_word_document_faq_q5: 'Is the result html to docx / a .docx file?',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'Can I convert a Chrome .mhtml save?',
	tool_convert_html_web_pages_to_word_document_how_body:
		'Paste HTML (html to word) or switch to a page URL, press Convert, then download an editable .docx. Headings and tables become Word styles — not a picture of the page.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'Stay on Paste HTML for source you already have. Switch to Page URL for one public https address (convert webpage to word).',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'Press Convert. Scripts are stripped. Headings, lists, tables, and links are mapped into Word. Failed images are skipped.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'Want <img> tags in the Word file? Open Advanced settings — Include images is on by default and still skips blocked pictures. Need a draft without heading styles or table objects? Turn on Plain text (that also turns images off).',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'Need A4 print pages? Use Convert HTML to PDF. Need a screenshot? Use Batch convert web pages to PNG or JPG. Already have a PDF? Use Turn PDF into Word document.',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'Download when Convert succeeds. Open the .docx and edit the text.',
	tool_convert_html_web_pages_to_word_document_how_title: 'How it works',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'Paste a fragment or a full HTML document. Scripts are removed before conversion. Layout CSS will not be recreated pixel-for-pixel.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>Release notes</h1><p>Paste HTML here…</p>',
	tool_convert_html_web_pages_to_word_document_hud_download: 'Download the Word file',
	tool_convert_html_web_pages_to_word_document_hud_elapsed_tpl: '{s}s elapsed',
	tool_convert_html_web_pages_to_word_document_hud_fail_hint: 'Check the HTML or URL, then press Convert again.',
	tool_convert_html_web_pages_to_word_document_hud_fail_title: 'Conversion failed',
	tool_convert_html_web_pages_to_word_document_hud_next: 'Conversion finished. Next step: download the .docx, then open it and edit the text.',
	tool_convert_html_web_pages_to_word_document_hud_pct_tpl: '{pct}%',
	tool_convert_html_web_pages_to_word_document_hud_step_fetch: 'Fetch',
	tool_convert_html_web_pages_to_word_document_hud_step_map: 'Map',
	tool_convert_html_web_pages_to_word_document_hud_step_pack: 'Pack',
	tool_convert_html_web_pages_to_word_document_hud_title: 'Conversion progress',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'When on, <img> tags are fetched and embedded if the browser can read them. Broken or blocked images are skipped. Turn off for text-only Word.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'Include images',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'Include images tries to embed pictures from the HTML. Plain text flattens headings, tables, and links into ordinary paragraphs. CSS positioning is not mapped. Output is always one .docx.',
	tool_convert_html_web_pages_to_word_document_plain_hint:
		'Keep editable paragraphs only — no Word heading styles, no table objects, no embedded pictures. Links become “label (URL)”. Table cells become tab-separated lines.',
	tool_convert_html_web_pages_to_word_document_plain_label: 'Plain text',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'One Convert produces one .docx. Headings, paragraphs, lists, tables, links, and optional images are mapped. Absolute CSS, fixed bars, and scripts are not.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'Pasted HTML stays in this tab. A page URL is fetched once and not stored.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'By default h1–h6 become Word headings, ul/ol become lists, table becomes a Word table, and a becomes a hyperlink. Plain text in Advanced settings turns those into ordinary paragraphs.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'Login walls, JavaScript apps, and print CSS often will not match the live page. This is not a screenshot raster.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'Compared with Convert HTML to PDF: editable Word, not A4 pages. Compared with Turn PDF into Word: input is HTML or a URL, not a PDF upload. Compared with Images to Word: input is markup, not a photo pile.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'Rules you should expect',
	tool_convert_html_web_pages_to_word_document_sample: 'Load sample',
	tool_convert_html_web_pages_to_word_document_status_done: 'Done — next, click Download.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'Fetching page HTML…',
	tool_convert_html_web_pages_to_word_document_status_mapping: 'Mapping HTML into Word paragraphs…',
	tool_convert_html_web_pages_to_word_document_status_packing: 'Packing the .docx…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Building the Word document…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'Paste HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: 'Page URL',
	tool_convert_html_web_pages_to_word_document_title: 'Convert HTML web pages to a Word document',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'One public http(s) URL. We fetch the HTML once and rewrite CSS/image URLs. Scripts are stripped before the Word mapping.',
	tool_convert_html_web_pages_to_word_document_url_label: 'Page URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'Turn a help-center HTML export into a Word draft that legal can comment in — headings stay headings, not a flattened image.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'Fetch a public release-notes URL and keep the table as a real Word table you can edit.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'Keep A4 printouts on Convert HTML to PDF and screenshots on Batch convert web pages to PNG; use this page when you need an editable .docx.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'Good fits',
};

export default en;
