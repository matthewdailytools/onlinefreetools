/**
 * i18n tool shard (image-to-base64 / en).
 * 图片 ↔ Base64 / data URL 互转；Encode/Decode 分 Tab；金标 HUD。
 */
import type { SiteLangDict } from '../../../types';

/** 英文文案字典。 */
const en: SiteLangDict = {
	tool_image_to_base64_title: 'Image to Base64 Converter — Encode & Decode Locally',
	tool_image_to_base64_desc: 'Encode photos to Base64/data URLs or decode strings back to images locally.',
	tool_image_to_base64_description:
		'Convert an image to a Base64 data URL (or back) in your browser—no upload. Steps: Choose image, click Encode, Copy or Download; or paste Base64 and click Decode. Example: sample PNG → data:image/png;base64,… ready for HTML. Files stay on your device.',
	tool_image_to_base64_mode_label: 'Mode',
	tool_image_to_base64_tab_encode: 'Encode',
	tool_image_to_base64_tab_decode: 'Decode',
	tool_image_to_base64_choose_file: 'Choose image',
	tool_image_to_base64_drop_hint: 'Or drop JPEG, PNG, WebP or GIF here. Processing stays in this tab.',
	tool_image_to_base64_encode: 'Encode',
	tool_image_to_base64_decode_btn: 'Decode',
	tool_image_to_base64_copy: 'Copy',
	tool_image_to_base64_copy_done: 'Copied',
	tool_image_to_base64_download: 'Download',
	tool_image_to_base64_sample: 'Load sample',
	tool_image_to_base64_clear: 'Clear',
	tool_image_to_base64_advanced: 'Advanced settings (optional)',
	tool_image_to_base64_strip_prefix: 'Strip data: prefix (raw Base64 only)',
	tool_image_to_base64_strip_hint: 'Off (default) keeps data:image/…;base64, so you can paste into HTML. On copies only the Base64 body.',
	tool_image_to_base64_decode_mime_label: 'Default MIME for raw Base64',
	tool_image_to_base64_decode_mime_hint: 'Used only when the paste has no data: prefix. Data URLs keep their own MIME.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'Paste data:image/…;base64,… or raw Base64',
	tool_image_to_base64_output_label: 'Output',
	tool_image_to_base64_preview_label: 'Preview',
	tool_image_to_base64_progress: 'Working…',
	tool_image_to_base64_step_read: 'Read file',
	tool_image_to_base64_step_encode: 'Encode',
	tool_image_to_base64_step_ready: 'Ready',
	tool_image_to_base64_read_step: 'Reading the file…',
	tool_image_to_base64_encode_step: 'Building the data URL…',
	tool_image_to_base64_ready_step: 'Output ready',
	tool_image_to_base64_decode_step_parse: 'Parse',
	tool_image_to_base64_decode_step_blob: 'Build image',
	tool_image_to_base64_decode_step_ready: 'Ready',
	tool_image_to_base64_parse_step: 'Parsing Base64…',
	tool_image_to_base64_blob_step: 'Building the image blob…',
	tool_image_to_base64_elapsed: 'Elapsed {s}s',
	tool_image_to_base64_empty: 'Choose an image first.',
	tool_image_to_base64_empty_decode: 'Paste a data URL or Base64 string first.',
	tool_image_to_base64_err_decode: 'Could not decode. Check the string is a valid image data URL or Base64.',
	tool_image_to_base64_err_encode: 'Could not encode the file. Try JPEG, PNG, or WebP.',
	tool_image_to_base64_err_invalid: 'Invalid Base64 or data URL.',
	tool_image_to_base64_warn_large: 'Large input (>25 MB) — may be slow or use a lot of memory.',
	tool_image_to_base64_status_working: 'Working…',
	tool_image_to_base64_status_done: 'Done — Copy the string or click Download.',
	tool_image_to_base64_status_decoded: 'Done — preview is ready; click Download to save the image.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} characters · {bytes}',
	tool_image_to_base64_how_title: 'How to convert image to Base64',
	tool_image_to_base64_how_body:
		'Encode reads the file with FileReader.readAsDataURL. Decode accepts a full data URL or raw Base64 (default MIME from Advanced settings). Nothing is uploaded.',
	tool_image_to_base64_how_item_1: 'Stay on Encode, choose an image (or drop it), then click Encode.',
	tool_image_to_base64_how_item_2: 'Optionally open Advanced settings to strip the data: prefix for raw Base64.',
	tool_image_to_base64_how_item_3: 'Click Copy to put the string on the clipboard, or Download to save the original image bytes.',
	tool_image_to_base64_how_item_4: 'Switch to Decode, paste a data URL or Base64, click Decode, then Download the recovered image.',
	tool_image_to_base64_why_choose_title: 'Why choose our Image to Base64 tools',
	tool_image_to_base64_why_choose_item_1: 'Encode and decode on one page — no separate “base64 to image” URL.',
	tool_image_to_base64_why_choose_item_2: 'Optional strip of the data: prefix when you need raw Base64 for an API field.',
	tool_image_to_base64_why_choose_item_3: 'Live preview after encode or decode so you see the pixels, not only the string.',
	tool_image_to_base64_why_choose_item_4: 'Soft warning on very large inputs that may stress browser memory.',
	tool_image_to_base64_why_choose_item_5: 'Runs in this tab; the file is not uploaded to our servers.',
	tool_image_to_base64_rules_title: 'Rules',
	tool_image_to_base64_rules_body: 'Encode uses FileReader.readAsDataURL. Decode uses fetch(dataUrl) to build a Blob for download.',
	tool_image_to_base64_rules_item_1: 'Default encode output is a full data:image/…;base64,… string suitable for HTML img src.',
	tool_image_to_base64_rules_item_2: 'Strip prefix removes everything before the first comma — useful for APIs that want raw Base64 only.',
	tool_image_to_base64_rules_item_3: 'Raw Base64 without a prefix is treated as the Advanced default MIME (image/png by default).',
	tool_image_to_base64_rules_item_4: 'Invalid alphabet or truncated strings show an error; nothing is uploaded.',
	tool_image_to_base64_rules_item_5: 'Animated GIFs are encoded as the whole file blob; this page does not edit frames.',
	tool_image_to_base64_example_title: 'Example',
	tool_image_to_base64_example:
		'Load sample builds a 320×200 PNG labelled “Base64”, runs Encode, and fills the output with data:image/png;base64,…. Copy the string into an HTML <img src="…">. Switch to Decode, paste the same string, click Decode, then Download decoded.png.',
	tool_image_to_base64_usecases_title: 'When to use it',
	tool_image_to_base64_usecase_1: 'Embedding a small icon or logo in HTML/CSS without a separate image request.',
	tool_image_to_base64_usecase_2: 'Debugging an email or markdown payload that already contains a data URL.',
	tool_image_to_base64_usecase_3: 'Recovering a preview image from a Base64 dump in an API response.',
	tool_image_to_base64_usecase_4: 'Handing a designer a raw Base64 body for a form field that rejects the data: prefix.',
	tool_image_to_base64_faq_q1: 'Are images uploaded?',
	tool_image_to_base64_faq_a1:
		'No. FileReader and decode run in your browser tab. Your file bytes stay local.',
	tool_image_to_base64_faq_q2: 'Data URL vs raw Base64?',
	tool_image_to_base64_faq_a2:
		'A data URL includes data:image/png;base64, plus the body — ready for HTML. Raw Base64 is only the body; turn on Strip data: prefix in Advanced settings to copy that form.',
	tool_image_to_base64_faq_q3: 'What about huge files?',
	tool_image_to_base64_faq_a3:
		'Possible but memory-heavy. Base64 expands size by about 33%. Compress or resize first when the file is over ~25 MB.',
	tool_image_to_base64_faq_q4: 'Which MIME is used on decode?',
	tool_image_to_base64_faq_a4:
		'Taken from the data URL when present. For raw Base64, the Advanced “Default MIME” value applies (image/png by default).',
	tool_image_to_base64_faq_q5: 'What about animated GIFs?',
	tool_image_to_base64_faq_a5:
		'Encode keeps the whole file as a data URL. This page does not split or edit animation frames.',
	tool_image_to_base64_faq_q6: 'Encode vs image format converter?',
	tool_image_to_base64_faq_a6:
		'This page produces a text string (or recovers an image from one). Use Image Format Converter when you need JPEG/PNG/WebP file conversion without Base64.',
	tool_image_to_base64_faq_q7: 'Why is Copy disabled or empty?',
	tool_image_to_base64_faq_a7:
		'Copy needs Encode output. Choose an image, click Encode, then Copy. On Decode, use Download for the image file instead.',
	tool_image_to_base64_article:
		'FileReader data URLs for encode; decode accepts data URLs or raw Base64 with a configurable default MIME.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — Data URLs',
};

export default en;
