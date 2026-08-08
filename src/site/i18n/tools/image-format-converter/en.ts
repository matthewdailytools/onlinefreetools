/**
 * i18n tool shard (image-format-converter / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_image_format_converter_article:
    'Local image format conversion with clear rules for quality, transparency, browser encode support, plus BMP/GIF/ICO/SVG extras.',
  tool_image_format_converter_avif_unsupported: 'This browser cannot encode AVIF. Choose WebP, JPEG, or PNG instead.',
  tool_image_format_converter_choose_file: 'Choose an image',
  tool_image_format_converter_clear: 'Clear',
  tool_image_format_converter_convert: 'Convert',
  tool_image_format_converter_description:
    'Convert images between PNG, JPEG, WebP, AVIF, BMP, GIF, ICO, and SVG in your browser. Steps: choose a file, pick the target format, set quality when it applies, then download. Example: turn a PNG icon into WebP for the web or ICO for a favicon — files stay on your device.',
  tool_image_format_converter_download: 'Download',
  tool_image_format_converter_drop_hint: 'Or drop PNG, JPEG, WebP, AVIF, GIF, BMP, ICO, or SVG here. Conversion stays in this tab.',
  tool_image_format_converter_empty: 'Choose an image first.',
  tool_image_format_converter_err_decode: 'This browser could not decode that file. Try PNG, JPEG, or WebP.',
  tool_image_format_converter_err_encode: 'Encoding failed. Try another format or a smaller image.',
  tool_image_format_converter_err_mime_mismatch:
    'The browser did not return the format you asked for (silent fallback). Pick another target or use a Chromium-based browser for AVIF.',
  tool_image_format_converter_example:
    'Input: a 240×160 PNG icon with a transparent background. Target JPEG + white fill → output image/jpeg with no alpha and a white matte. Same icon to WebP at quality 0.85 → often a smaller file at the same pixel size. Use “Load sample” to try both paths.',
  tool_image_format_converter_example_title: 'Example',
  tool_image_format_converter_faq_a1:
    'No. Decoding and encoding run locally. You can confirm in DevTools Network that the image file is not POSTed to a server.',
  tool_image_format_converter_faq_a2:
    'Many browsers can display AVIF, but only some can encode it (often Chromium). If encode is missing, the option is disabled or conversion fails with a clear message — we do not pretend success.',
  tool_image_format_converter_faq_a3:
    'JPEG has no alpha channel. Pick a white, black, or custom background so the result is predictable instead of browser-dependent black or white fill.',
  tool_image_format_converter_faq_a4:
    'No. PNG output is lossless and the quality control is ignored. For JPEG, WebP, and AVIF, quality maps to the encoder’s lossy setting (WebP at 1.0 may be lossless).',
  tool_image_format_converter_faq_a5:
    'After convert, check the output stats line for the MIME type, and download the file. If the browser silently fell back, we show an error instead of a fake success.',
  tool_image_format_converter_faq_a6: 'No. Canvas conversion uses a single frame (usually the first). Export still images only.',
  tool_image_format_converter_faq_a7:
    'They are encoded locally in this tab. GIF keeps one frame with a reduced palette; ICO embeds PNG; SVG wraps a PNG bitmap (it is not a path-based vector redraw). Prefer WebP/AVIF for web delivery.',
  tool_image_format_converter_faq_q1: 'Does my image leave the browser?',
  tool_image_format_converter_faq_q2: 'Why is AVIF sometimes unavailable?',
  tool_image_format_converter_faq_q3: 'What happens to transparent pixels in JPEG?',
  tool_image_format_converter_faq_q4: 'Does the quality slider affect PNG?',
  tool_image_format_converter_faq_q5: 'How do I know the file really became WebP or AVIF?',
  tool_image_format_converter_faq_q6: 'Do animated GIFs stay animated?',
  tool_image_format_converter_faq_q7: 'What about BMP, GIF, ICO, and SVG?',
  tool_image_format_converter_format_avif: 'AVIF',
  tool_image_format_converter_format_bmp: 'BMP',
  tool_image_format_converter_format_gif: 'GIF',
  tool_image_format_converter_format_ico: 'ICO',
  tool_image_format_converter_format_jpeg: 'JPEG',
  tool_image_format_converter_format_png: 'PNG',
  tool_image_format_converter_format_svg: 'SVG',
  tool_image_format_converter_format_webp: 'WebP',
  tool_image_format_converter_group_extra: 'More formats',
  tool_image_format_converter_group_web: 'Web formats',
  tool_image_format_converter_how_body:
    'Pick an image and a target format. The page decodes pixels in this tab, draws them on a canvas, then encodes with the browser (toBlob) or a local encoder for BMP, GIF, ICO, and SVG. For JPEG it can fill a solid background first. Output MIME is checked so a silent fallback is not treated as success.',
  tool_image_format_converter_how_title: 'How it works',
  tool_image_format_converter_jpeg_bg_black: 'Black',
  tool_image_format_converter_jpeg_bg_custom: 'Custom',
  tool_image_format_converter_jpeg_bg_label: 'JPEG background',
  tool_image_format_converter_jpeg_bg_white: 'White',
  tool_image_format_converter_preview_in: 'Original',
  tool_image_format_converter_preview_out: 'Converted',
  tool_image_format_converter_quality_hint_extra: 'BMP, GIF, ICO, and SVG ignore the quality slider.',
  tool_image_format_converter_quality_hint_png: 'PNG is lossless — quality is ignored.',
  tool_image_format_converter_quality_hint_webp_lossless: 'WebP at 1.0 may encode as lossless.',
  tool_image_format_converter_quality_label: 'Quality',
  tool_image_format_converter_rules_body:
    'Formats are not just MIME labels — transparency, lossy quality, and encode support differ. Use this table of expectations before you pick a target.',
  tool_image_format_converter_rules_item_1:
    'Pipeline: decode → optional background fill → canvas draw → encode. PNG/JPEG/WebP/AVIF use browser toBlob; BMP/GIF/ICO/SVG use local encoders. PNG and extra formats ignore the quality slider.',
  tool_image_format_converter_rules_item_2:
    'Transparency: PNG, WebP, and AVIF can keep alpha. JPEG has no alpha — choose white, black, or a custom fill before encode.',
  tool_image_format_converter_rules_item_3:
    'Encode support: decode support ≠ encode support. AVIF encode is mainly Chromium today; some browsers may quietly fall back to another type — we verify blob.type and warn.',
  tool_image_format_converter_rules_item_4: 'Privacy: your image bytes are not uploaded. Everything runs with built-in browser APIs in this tab.',
  tool_image_format_converter_rules_item_5:
    'Extra formats: BMP is 24-bit; GIF is a single quantized frame (animations stay single-frame); ICO wraps a PNG; SVG embeds a PNG data URL — useful for icons and simple handoff, not a vector redraw.',
  tool_image_format_converter_rules_title: 'Rules you should expect',
  tool_image_format_converter_sample: 'Load sample',
  tool_image_format_converter_stats_tpl: '{mime} · {w}×{h} · {bytes}',
  tool_image_format_converter_status_converting: 'Converting…',
  tool_image_format_converter_status_done: 'Done — check MIME and size below, then download.',
  tool_image_format_converter_target_label: 'Target format',
  tool_image_format_converter_title: 'Image Format Converter — PNG JPEG WebP AVIF BMP GIF ICO SVG',
  tool_image_format_converter_usecase_1: 'Web delivery: convert PNG screenshots or photos to WebP/AVIF before uploading to a CMS or CDN.',
  tool_image_format_converter_usecase_2:
    'Design handoff: flatten a transparent UI icon to JPEG with a chosen background for tools that reject alpha.',
  tool_image_format_converter_usecase_3: 'Compatibility: turn an AVIF or WebP download into JPEG for older office or print software.',
  tool_image_format_converter_usecases_title: 'Good fits',
  tool_image_format_converter_warn_animation: 'Animated files: only the first frame is converted.',
  tool_image_format_converter_warn_edge: 'Very large dimensions (>8192 px on a side) — expect slowdowns.',
  tool_image_format_converter_warn_large: 'Large file (>25 MB) — conversion may be slow or run out of memory.',
};
export default en;
