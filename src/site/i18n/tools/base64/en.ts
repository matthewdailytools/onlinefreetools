/**
 * i18n tool shard (base64 / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_base64_article:
    'Encode and decode UTF-8 text or raw bytes to Base64 and Base64url in one tabbed page. Built for API payloads, JWT segments, and config strings — distinct from our image-only Base64 tool.',
  tool_base64_clear: 'Clear',
  tool_base64_convert: 'Convert',
  tool_base64_copy: 'Copy output',
  tool_base64_copy_done: 'Copied',
  tool_base64_desc: 'Encode or decode Base64 for text and file bytes — all local in your browser.',
  tool_base64_description:
    'Convert text or file bytes to Base64 and back in your browser. Steps: pick Encode or Decode, paste text or choose a file, toggle Base64url if needed, then copy. Example: Hello 世界 → SGVsbG8g5LiW55WM. Handles Unicode via UTF-8; nothing is uploaded.',
  tool_base64_dir_label: 'Mode',
  tool_base64_empty: 'Paste some input first.',
  tool_base64_error_invalid: 'Invalid Base64 characters or padding.',
  tool_base64_example:
    'Encode (standard): Hello 世界 → SGVsbG8g5LiW55WM. Encode (Base64url): same bytes → SGVsbG8g5LiW55WM (no +/=). Decode reverses either form back to Hello 世界.',
  tool_base64_example_title: 'Example',
  tool_base64_faq_a1:
    'Standard Base64 uses A–Z, a–z, 0–9, +, /, and = padding. Base64url (RFC 4648 §5) replaces + with - and / with _ and usually drops padding — common in JWT and URL-safe tokens.',
  tool_base64_faq_a2:
    'Yes. Text is encoded as UTF-8 bytes first, then Base64. Decoding produces the original Unicode string. If you see mojibake, the input may not be valid Base64 or was encoded with a different charset.',
  tool_base64_faq_a3:
    'This page handles general text and raw bytes plus Base64url. Image ↔ Base64 focuses on photos — preview, MIME type, and download — not arbitrary UTF-8 strings.',
  tool_base64_faq_a4:
    'No. Conversion runs entirely in your browser with TextEncoder, btoa/atob, and FileReader. Your paste and files never leave the device.',
  tool_base64_faq_a5:
    'Whitespace is ignored when decoding. Invalid characters, bad padding, or truncated strings throw an error. Very large pastes (>1M chars) may feel slow — try a shorter excerpt.',
  tool_base64_faq_q1: 'What is the difference between Base64 and Base64url?',
  tool_base64_faq_q2: 'Does this support Unicode / UTF-8?',
  tool_base64_faq_q3: 'How is this different from Image ↔ Base64?',
  tool_base64_faq_q4: 'Does my text or file leave the browser?',
  tool_base64_faq_q5: 'What happens with invalid Base64 input?',
  tool_base64_file_label: 'Or encode a file',
  tool_base64_file_large_warn: 'Large file (>5 MB). Encoding may take a moment.',
  tool_base64_file_loaded: 'Encoded file: {name} ({size} bytes). Output shows Base64 only.',
  tool_base64_how_body:
    'Choose Encode to turn UTF-8 text or file bytes into Base64, or Decode to reverse it. Unicode is handled via UTF-8 bytes before btoa. Enable Base64url for JWT-style output (- and _ instead of + and /, no padding). File input reads bytes locally — no upload.',
	tool_base64_how_item_1: 'Choose Encode or Decode.',
	tool_base64_how_item_2: 'Paste text or pick a file for Encode; paste Base64 for Decode.',
	tool_base64_how_item_3: 'Turn on Base64url when you need JWT-style - and _ without padding.',
	tool_base64_how_item_4: 'Click Encode/Decode, then copy or download the result.',
  tool_base64_how_title: 'How it works',
  tool_base64_input_label: 'Input',
  tool_base64_input_placeholder: 'Paste plain text or Base64 string…',
  tool_base64_large_warn: 'Very large paste (>1M characters). Conversion may feel slow — try a shorter excerpt.',
  tool_base64_output_label: 'Output',
  tool_base64_rules_body:
    'What to expect when encoding or decoding: alphabet variants, UTF-8 handling, padding, and file vs text input.',
  tool_base64_rules_item_1:
    'Standard Base64 alphabet: A–Z, a–z, 0–9, +, /. Output length is a multiple of 4 with = padding as needed. Base64url swaps +→- and /→_ and often omits =.',
  tool_base64_rules_item_2:
    'Text is always UTF-8 encoded before Base64. One Unicode character may become several Base64 characters (e.g. 世界). Decoding restores the original string when input is valid.',
  tool_base64_rules_item_3:
    'File encode reads raw bytes — useful for checksums, attachments, or binary blobs. Text encode and file encode share the same output panel; file mode clears the text area and shows a file info banner.',
  tool_base64_rules_item_4:
    'Privacy: no server upload. This tool uses zero external libraries — conversion stays entirely in the browser per RFC 4648.',
  tool_base64_rules_title: 'Rules you should expect',
  tool_base64_sample: 'Load sample',
  tool_base64_sample_decode: 'SGVsbG8g5LiW55WM',
  tool_base64_sample_encode: 'Hello 世界',
  tool_base64_tab_decode: 'Decode',
  tool_base64_tab_encode: 'Encode',
  tool_base64_title: 'Base64 Encode & Decode — Convert Text in Your Browser',
  tool_base64_url_label: 'Base64url (-_ instead of +/, no padding)',
  tool_base64_usecase_1: 'Developers: encode JSON or UTF-8 strings for API bodies, data URLs, or test fixtures.',
  tool_base64_usecase_2: 'JWT / OAuth: produce or inspect Base64url segments before pasting into a JWT decoder.',
  tool_base64_usecase_3: 'Config / DevOps: embed small binary blobs or secrets as Base64 in YAML, env files, or CI variables.',
  tool_base64_usecases_title: 'Good fits',
};
export default en;
