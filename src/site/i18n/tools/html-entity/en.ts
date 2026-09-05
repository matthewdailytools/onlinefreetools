/**
 * i18n tool shard (html-entity / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_html_entity_article:
    'Bidirectional HTML entity encode and decode with explicit scope, output form, double-encoding notes, and attribute vs text guidance. Built for developers cleaning API strings and CMS snippets.',
  tool_html_entity_clear: 'Clear',
  tool_html_entity_convert: 'Convert',
  tool_html_entity_copy: 'Copy output',
  tool_html_entity_copy_done: 'Copied',
  tool_html_entity_desc:
    'Encode and decode HTML entities with scope, named/decimal/hex output, and strict decode — all in-browser.',
  tool_html_entity_description:
    'Encode or decode HTML character references in your browser. Steps: pick Encode or Decode, paste text, choose scope (minimal, non-ASCII, or all) and output form (named, decimal, hex), then copy. Example: Tom & Jerry → Tom &amp; Jerry. Handles &copy;, &#169;, and emoji like &#x1F600; — paste stays local.',
  tool_html_entity_dir_label: 'Mode',
  tool_html_entity_empty: 'Paste some input first.',
  tool_html_entity_error_invalid: 'Invalid or incomplete character reference (strict mode).',
  tool_html_entity_example:
    'Encode (minimal + named): Tom & Jerry <3 → Tom &amp; Jerry &lt;3. Encode (non-ASCII + hex): © 😀 → &#xA9; &#x1F600;. Decode: &lt;p&gt;Tom &amp; Jerry &copy; &#x1F600;&lt;/p&gt; → plain text `<p>Tom & Jerry © 😀</p>` in the preview.',
  tool_html_entity_example_title: 'Example',
  tool_html_entity_faq_a1:
    'Minimal escapes only the five HTML-critical characters (& < > " \'). Non-ASCII leaves plain ASCII alone and encodes everything above U+007F. All applies minimal rules plus non-ASCII — use it when you want both safety and Unicode coverage.',
  tool_html_entity_faq_a2:
    'Yes when decoding — all three become ©. When encoding, pick Named for readable names where available, or Decimal/Hex if you need a specific numeric form for templates or email.',
  tool_html_entity_faq_a3:
    'You may see &amp;amp; instead of &. Decode once normally, or choose Decode → Until stable to repeat until the string stops changing (up to eight passes). Avoid encoding output that is already escaped.',
  tool_html_entity_faq_a4:
    'No. Encoding helps represent characters safely in HTML source, but it is not a sanitizer. The decode preview shows plain text only — we never render your input as live HTML in the page.',
  tool_html_entity_faq_a5:
    'No. Conversion runs locally with built-in browser APIs only — no CDN library fetch and no upload of your paste.',
  tool_html_entity_faq_q1: 'What is the difference between encoding scopes?',
  tool_html_entity_faq_q2: 'Are &copy;, &#169;, and &#xA9; the same?',
  tool_html_entity_faq_q3: 'What if my text was encoded twice?',
  tool_html_entity_faq_q4: 'Does this sanitize HTML or prevent XSS?',
  tool_html_entity_faq_q5: 'Does my text leave the browser?',
  tool_html_entity_form_decimal: 'Decimal &#…;',
  tool_html_entity_form_hex: 'Hex &#x…;',
  tool_html_entity_form_label: 'Output form',
  tool_html_entity_form_named: 'Named when available',
  tool_html_entity_how_body:
    'Choose Encode to turn characters into HTML character references, or Decode to reverse them. Encoding runs character-by-character in this tab — pick a scope (which characters to escape) and an output form (named like &copy;, decimal &#169;, or hex &#xA9;). Decoding uses a safe textarea parse; the preview shows plain text only, never rendered HTML.',
	tool_html_entity_how_item_1: 'Choose Encode or Decode.',
	tool_html_entity_how_item_2: 'Paste the source text and pick which characters to escape when encoding.',
	tool_html_entity_how_item_3: 'For Decode, choose once or until stable for nested entities.',
	tool_html_entity_how_item_4: 'Click Encode/Decode and copy the result.',
  tool_html_entity_how_title: 'How it works',
  tool_html_entity_input_label: 'Input',
  tool_html_entity_input_placeholder: 'Paste plain text or entity string…',
  tool_html_entity_large_warn: 'Very large paste (>1M characters). Conversion may feel slow — try a shorter excerpt.',
  tool_html_entity_output_label: 'Output',
  tool_html_entity_passes_label: 'Passes',
  tool_html_entity_passes_once: 'Once',
  tool_html_entity_passes_stable: 'Until stable',
  tool_html_entity_preview_label: 'Decoded preview (plain text)',
  tool_html_entity_rules_body:
    'What to expect when you encode or decode: which characters change, how named and numeric references relate, and common pitfalls.',
  tool_html_entity_rules_item_1:
    'Minimal scope escapes only & < > " \' — enough for typical HTML text nodes. Non-ASCII scope leaves ASCII as-is and turns symbols and emoji into entities. All combines both.',
  tool_html_entity_rules_item_2:
    'Named (&copy;), decimal (&#169;), and hex (&#xA9;) forms decode to the same character. When encoding with “Named when available”, common symbols use names; others fall back to numeric entities.',
  tool_html_entity_rules_item_3:
    'Double encoding happens if you encode already-escaped text — & becomes &amp;amp;. Use Decode → “Until stable” once if you suspect double escaping; raw < and > in your input are kept literally across passes instead of being read as markup. Attribute values in real HTML may also need quotes escaped even when text nodes do not.',
  tool_html_entity_rules_item_4:
    'Privacy: your paste is not uploaded. This tool uses zero external libraries — conversion stays entirely in the browser.',
  tool_html_entity_rules_title: 'Rules you should expect',
  tool_html_entity_sample: 'Load sample',
  tool_html_entity_sample_decode: '&lt;p&gt;Tom &amp; Jerry &copy; &#x1F600;&lt;/p&gt;',
  tool_html_entity_sample_encode: 'Tom & Jerry <3 "quotes" © 😀',
  tool_html_entity_scope_all: 'All (minimal + non-ASCII)',
  tool_html_entity_scope_label: 'Encoding scope',
  tool_html_entity_scope_minimal: 'Minimal (< > & " \')',
  tool_html_entity_scope_nonascii: 'Non-ASCII only',
  tool_html_entity_strict_label: 'Decode mode',
  tool_html_entity_strict_lenient: 'Lenient',
  tool_html_entity_strict_strict: 'Strict',
  tool_html_entity_tab_decode: 'Decode',
  tool_html_entity_tab_encode: 'Encode',
  tool_html_entity_title: 'HTML Entity Encoder & Decoder — Escape, Unescape & Local',
  tool_html_entity_usecase_1: 'Developers: decode `&lt;div&gt;…` strings from an API or log before diffing or editing.',
  tool_html_entity_usecase_2: 'CMS / content: encode titles or snippets that contain & or < before inserting into an HTML template.',
  tool_html_entity_usecase_3: 'Email / i18n: turn emoji or special symbols into numeric entities for older HTML clients.',
  tool_html_entity_usecases_title: 'Good fits',
};
export default en;
