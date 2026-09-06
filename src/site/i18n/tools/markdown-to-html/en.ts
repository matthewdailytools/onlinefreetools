/**
 * i18n tool shard (markdown-to-html / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_markdown_article:
    'One page for both directions: live preview, export, and plain talk about what sanitization removes and what Turndown cannot keep. Paste never leaves the tab; libraries may still load from this site.',
  tool_markdown_clear: 'Clear',
  tool_markdown_copy: 'Copy HTML',
  tool_markdown_copy_done: 'Copied',
  tool_markdown_copy_md: 'Copy Markdown',
  tool_markdown_description:
    'Need safe HTML from Markdown, or Markdown back from messy HTML? Switch direction, paste locally, then preview or download. We parse with marked or Turndown and clean with DOMPurify. Example: ship a README as HTML, or pull CMS markup into Git-friendly Markdown.',
  tool_markdown_dir_label: 'Conversion direction',
  tool_markdown_download: 'Download HTML',
  tool_markdown_download_md: 'Download Markdown',
  tool_markdown_example:
    'From Markdown `# Title` + `Hello **world**` you get a safe heading and bold paragraph. From `<h1>Title</h1><p>Hello <strong>world</strong></p>` you get `# Title` and `Hello **world**`.',
  tool_markdown_example_title: 'Example',
  tool_markdown_export_description:
    'Generate a full HTML document from Markdown including sanitization and template wrapping. Steps: render Markdown, inject into HTML template, add meta and assets, provide download. Example: export a post as a standalone .html file.',
  tool_markdown_export_title: 'Markdown to HTML Export',
  tool_markdown_faq_a1:
    'On Markdown → HTML, yes — DOMPurify runs before preview and before copy/download so common script payloads do not survive.',
  tool_markdown_faq_a2:
    'Usually not. Think “readable Markdown draft”: scripts and heavy styling go away; nested tables may collapse.',
  tool_markdown_faq_a3:
    'Conversion is local. This site serves the open-source libraries; that network request is not an upload of your text.',
  tool_markdown_faq_a4:
    'No guarantee. Whitespace and unsupported tags drift. If you need byte equality, diff outside this tool.',
  tool_markdown_faq_a5:
    'Headings, lists, links, emphasis, fenced code (CommonMark basics). Toggle full-document wrap when you need a shareable .html shell.',
  tool_markdown_faq_q1: 'Do you sanitize the HTML output?',
  tool_markdown_faq_q2: 'Will HTML → Markdown keep my layout?',
  tool_markdown_faq_q3: 'Does paste leave my machine?',
  tool_markdown_faq_q4: 'Can I round-trip without changes?',
  tool_markdown_faq_q5: 'What syntax and export options exist?',
  tool_markdown_full_doc: 'Generate full HTML document',
  tool_markdown_how_body:
    'Pick a tab. Left side is input; right side updates in the browser. Markdown → HTML can copy a fragment or wrap a minimal full document. HTML → Markdown yields plain text for editors and LLMs. Loading this site's libraries ≠ uploading your paste.',
	tool_markdown_how_item_1: 'Pick the Markdown → HTML or HTML → Markdown tab.',
	tool_markdown_how_item_2: 'Paste input on the left (or click Load sample).',
	tool_markdown_how_item_3: 'For Markdown → HTML, optionally wrap a minimal full HTML document.',
	tool_markdown_how_item_4: 'Copy or download the converted output on the right.',
  tool_markdown_how_title: 'How it works',
  tool_markdown_html_input_label: 'HTML input',
  tool_markdown_html_placeholder: '<h1>Title</h1>\n<p>Hello <strong>world</strong></p>',
  tool_markdown_input_label: 'Markdown input',
  tool_markdown_large_warn: 'Very large paste (>200k characters). Conversion may feel slow — try a shorter excerpt.',
  tool_markdown_loss_hint:
    'Little or no Markdown was produced — scripts, empty tags, or unsupported markup may have been removed. See Rules and FAQ.',
  tool_markdown_md_output_label: 'Markdown output',
  tool_markdown_need_lib: 'Could not load a conversion library. Check your connection and refresh.',
  tool_markdown_placeholder:
    '# Title\n\nBasic Markdown supported: **bold**, lists, and code blocks.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log(\'Hello Markdown\');\n```',
  tool_markdown_preview_label: 'HTML preview',
  tool_markdown_rules_intro:
    'What the conversion covers: which Markdown syntax is supported, how HTML is sanitized, and how your pasted text is handled locally.',
  tool_markdown_rules_item_html_md:
    'Inbound: sanitize first, then Turndown with ATX headings and fenced code — tuned for readable drafts, not pixel-perfect clones.',
  tool_markdown_rules_item_loss:
    'Expect loss: style blocks, scripts, comments, and fiddly tables often flatten. Do not assume MD→HTML→MD equals the original.',
  tool_markdown_rules_item_md_html:
    'Outbound: marked reads CommonMark-style Markdown; DOMPurify strips risky scripts/attributes before you see or save HTML.',
  tool_markdown_rules_privacy:
    'Your paste stays client-side. Fetching marked / DOMPurify / Turndown from this site only delivers code, not your document.',
  tool_markdown_rules_title: 'What each direction does',
  tool_markdown_sample_html: '<h1>Title</h1>\n<p>Hello <strong>world</strong></p>',
  tool_markdown_sample_md:
    '# Title\n\nBasic Markdown supported: **bold**, lists, and code blocks.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log(\'Hello Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'Markdown ↔ HTML Converter — Sanitize & Preview',
  tool_markdown_usecase_1: 'Hand a sanitized HTML export to a CMS or save a standalone .html from a Markdown draft.',
  tool_markdown_usecase_2: 'Strip email/CMS HTML down to Markdown before committing to a docs repo.',
  tool_markdown_usecase_3: 'Normalize rich-text clipboard junk before an LLM prompt.',
  tool_markdown_usecases_title: 'Good fits',
};
export default en;
