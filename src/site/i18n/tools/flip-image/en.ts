/**
 * i18n tool shard (flip-image / en).
 * 本地 Canvas 水平/垂直镜像翻转；Advanced 导出格式；金标进度 HUD。
 */
import type { SiteLangDict } from '../../../types';

/** 英文文案字典。 */
const en: SiteLangDict = {
	tool_flip_image_title: 'Flip Image — Mirror Horizontally or Vertically',
	tool_flip_image_desc: 'Mirror a photo left-right or top-bottom locally, then download JPEG/WebP/PNG.',
	tool_flip_image_description:
		'Flip a photo horizontally or vertically in your browser—mirror selfies or swap layout sides without uploading. Steps: choose an image, tick Flip horizontal and/or Flip vertical, click Flip, Download JPEG/WebP/PNG. Example: sample blocks with A/B/C/D → horizontal flip moves A to the right. Files stay on your device.',
	tool_flip_image_choose_file: 'Choose image',
	tool_flip_image_drop_hint: 'Or drop JPEG, PNG, WebP or GIF here. Processing stays in this tab.',
	tool_flip_image_flip: 'Flip',
	tool_flip_image_download: 'Download',
	tool_flip_image_sample: 'Load sample',
	tool_flip_image_clear: 'Clear',
	tool_flip_image_flip_h: 'Flip horizontal',
	tool_flip_image_flip_v: 'Flip vertical',
	tool_flip_image_advanced: 'Advanced settings (optional)',
	tool_flip_image_format_label: 'Output format',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint: 'WebP keeps small files with transparency. PNG is lossless. JPEG needs a background colour.',
	tool_flip_image_quality_label: 'Quality',
	tool_flip_image_quality_hint: 'Applies to JPEG and WebP only. PNG ignores this slider.',
	tool_flip_image_jpeg_bg_label: 'JPEG background',
	tool_flip_image_jpeg_bg_hint: 'Fills transparent pixels before JPEG export. Default is white.',
	tool_flip_image_preview_label: 'Preview',
	tool_flip_image_progress: 'Flipping image…',
	tool_flip_image_step_decode: 'Decode',
	tool_flip_image_step_flip: 'Flip pixels',
	tool_flip_image_step_encode: 'Encode',
	tool_flip_image_decode_step: 'Decoding the image…',
	tool_flip_image_flip_step: 'Applying scale transform…',
	tool_flip_image_encode_step: 'Encoding {fmt}…',
	tool_flip_image_elapsed: 'Elapsed {s}s',
	tool_flip_image_empty: 'Choose an image first.',
	tool_flip_image_no_flip: 'Select Flip horizontal and/or Flip vertical.',
	tool_flip_image_err_decode: 'Could not decode the image. Try JPEG, PNG, or WebP.',
	tool_flip_image_err_encode: 'Could not export. Try a smaller image or another format.',
	tool_flip_image_warn_large: 'Large file (>25 MB) — may be slow.',
	tool_flip_image_warn_edge: 'Edge exceeds ~8192 px — some browsers may fail.',
	tool_flip_image_warn_animation: 'Animated GIF: only the first frame is used.',
	tool_flip_image_status_working: 'Working…',
	tool_flip_image_status_done: 'Done — click Download to save.',
	tool_flip_image_stats_tpl: 'Flipped {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'How to flip an image',
	tool_flip_image_how_body:
		'The tool redraws pixels with Canvas scale(-1,1) and/or scale(1,-1). That is a real mirror of the bitmap, not a CSS-only preview. Export re-encodes into the format you pick in Advanced settings.',
	tool_flip_image_how_item_1: 'Choose an image or drop a JPEG, PNG, WebP or GIF onto the box.',
	tool_flip_image_how_item_2: 'Tick Flip horizontal and/or Flip vertical. The preview updates live.',
	tool_flip_image_how_item_3: 'Optionally open Advanced settings to pick JPEG, WebP or PNG, quality, and a JPEG background colour.',
	tool_flip_image_how_item_4: 'Click Flip, wait for the progress bar, then click Download.',
	tool_flip_image_why_choose_title: 'Why choose our Flip Image tools',
	tool_flip_image_why_choose_item_1: 'Horizontal and vertical mirrors in one pass — tick both for a 180° equivalent on rectangular photos.',
	tool_flip_image_why_choose_item_2: 'Live preview before you export, so you see which side the mark moves to.',
	tool_flip_image_why_choose_item_3: 'JPEG / WebP / PNG export with quality and JPEG matte controls in Advanced settings.',
	tool_flip_image_why_choose_item_4: 'Soft warnings for huge files, giant pixel edges and animated GIFs (first frame only).',
	tool_flip_image_why_choose_item_5: 'Runs entirely in this tab — the photo is not uploaded to our servers.',
	tool_flip_image_rules_title: 'Rules',
	tool_flip_image_rules_body: 'Flip uses CanvasRenderingContext2D.scale on a canvas matching the source size, then toBlob for download.',
	tool_flip_image_rules_item_1: 'Horizontal: reflect across the vertical axis (left↔right) with scale(-1,1).',
	tool_flip_image_rules_item_2: 'Vertical: reflect across the horizontal axis (top↔bottom) with scale(1,-1).',
	tool_flip_image_rules_item_3: 'Both checked = 180° rotation equivalent for rectangular images (corners swap).',
	tool_flip_image_rules_item_4: 'Animated GIF uses the first frame only; PNG/WebP keep transparency; JPEG fills with the background colour.',
	tool_flip_image_rules_item_5: 'Flip itself reorders pixels; saving as JPEG/WebP re-encodes and may change file bytes.',
	tool_flip_image_example_title: 'Example',
	tool_flip_image_example:
		'Load sample builds a 480×320 grid labelled A B / C D. Flip horizontal (default) moves A to the right side. Click Flip, then Download. Tick Flip vertical as well and Flip again to see the 180° equivalent.',
	tool_flip_image_usecases_title: 'When to use it',
	tool_flip_image_usecase_1: 'Fixing a mirrored selfie before you post it so text on a shirt reads correctly.',
	tool_flip_image_usecase_2: 'Swapping left/right on a product mockup so the call-to-action sits on the preferred side.',
	tool_flip_image_usecase_3: 'Flipping a scanned page that was photographed upside-down (use Flip vertical).',
	tool_flip_image_usecase_4: 'Preparing a mirrored layout variant for print without opening a desktop editor.',
	tool_flip_image_faq_q1: 'Are images uploaded?',
	tool_flip_image_faq_a1:
		'No. Decode, flip and export run in your browser tab. Library scripts load from this site’s vendor folder only when needed; your file bytes stay local.',
	tool_flip_image_faq_q2: 'Is quality lost?',
	tool_flip_image_faq_a2:
		'The flip itself only reorders pixels. Saving as JPEG or WebP re-encodes and may change bytes. Choose PNG in Advanced settings for a lossless download.',
	tool_flip_image_faq_q3: 'Flip vs rotate?',
	tool_flip_image_faq_a3:
		'Flip mirrors across an axis. Rotate turns by an angle. This page only mirrors — use a rotate tool when you need 90° steps.',
	tool_flip_image_faq_q4: 'Can I flip both ways?',
	tool_flip_image_faq_a4:
		'Yes. Tick Flip horizontal and Flip vertical together. On a rectangular photo that is equivalent to a 180° rotation.',
	tool_flip_image_faq_q5: 'What about animated GIFs?',
	tool_flip_image_faq_a5:
		'Only the first frame is decoded and flipped. Multi-frame animation is not preserved in the download.',
	tool_flip_image_faq_q6: 'Why does JPEG look different from the preview?',
	tool_flip_image_faq_a6:
		'JPEG has no transparency. Transparent pixels are filled with the JPEG background colour before encoding. Preview on this page uses a checkerboard for transparency.',
	tool_flip_image_faq_q7: 'Flip Image vs image crop or grayscale?',
	tool_flip_image_faq_a7:
		'This page only mirrors. Crop trims edges; grayscale removes colour. Use the related Image Crop or Image Grayscale tools for those jobs.',
	tool_flip_image_article:
		'Local canvas flip with horizontal and vertical mirrors; pixels are redrawn, not only CSS-flipped.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

export default en;
