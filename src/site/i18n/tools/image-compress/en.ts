/**
 * i18n tool shard (image-compress / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_image_compress_article:
    'Local image compressor with resize, quality, target-size binary search, before/after stats, and honest miss warnings.',
  tool_image_compress_choose_file: 'Choose an image',
  tool_image_compress_clear: 'Clear',
  tool_image_compress_compress: 'Compress',
  tool_image_compress_description:
    'Compress photos in your browser with max dimension, quality, and optional target KB. Steps: choose an image, set resize/quality or a size cap, then download WebP or JPEG. Example: shrink a phone JPEG toward ~200 KB for email — files stay on your device; EXIF is usually dropped by re-encode.',
  tool_image_compress_download: 'Download',
  tool_image_compress_drop_hint: 'Or drop a JPEG, PNG, or WebP here. Compression stays in this tab.',
  tool_image_compress_empty: 'Choose an image first.',
  tool_image_compress_err_decode: 'This browser could not decode that file. Try JPEG, PNG, or WebP.',
  tool_image_compress_err_encode: 'Compression failed. Try another format or a smaller image.',
  tool_image_compress_err_mime_mismatch: 'The browser did not return the format you asked for. Pick JPEG or another browser for WebP.',
  tool_image_compress_example:
    'A ~4 MB phone JPEG with longest side 1920 and WebP quality ~0.8 often lands in the hundreds of KB (range varies by content). Enable a 200 KB target to iterate quality; if the floor still exceeds 200 KB, you see a miss warning with the closest file. Transparent PNG → JPEG uses your chosen matte.',
  tool_image_compress_example_title: 'Example',
  tool_image_compress_faq_a1:
    'No. Decode, resize, and encode run locally. Confirm in DevTools Network that the image is not POSTed.',
  tool_image_compress_faq_a2:
    'No. Already-small or noisy photos have a floor. We stop at quality 0.5 and warn if the target is still missed.',
  tool_image_compress_faq_a3:
    'PNG is lossless. For photos, switch to WebP or JPEG. PNG is better when you must keep sharp UI with alpha.',
  tool_image_compress_faq_a4:
    'Usually not. Canvas re-encode drops metadata. Inspect or strip deliberately with the EXIF tool if needed.',
  tool_image_compress_faq_a5:
    'Format converter focuses on changing MIME with transparency rules. This page focuses on smaller files via resize, quality, and target size.',
  tool_image_compress_faq_a6: 'No. Only the first frame is compressed into a still image.',
  tool_image_compress_faq_q1: 'Does my image leave the browser?',
  tool_image_compress_faq_q2: 'Can I always hit any target KB?',
  tool_image_compress_faq_q3: 'Why is PNG still large?',
  tool_image_compress_faq_q4: 'Will EXIF survive?',
  tool_image_compress_faq_q5: 'How is this different from the format converter?',
  tool_image_compress_faq_q6: 'Do animated GIFs stay animated?',
  tool_image_compress_format_jpeg: 'JPEG',
  tool_image_compress_format_png: 'PNG',
  tool_image_compress_format_webp: 'WebP',
  tool_image_compress_how_body:
    'Pick a photo, optionally cap the longest side, set quality or a target KB, and choose WebP/JPEG/PNG. The page decodes pixels here, scales down if needed, draws on a canvas, then encodes with toBlob. For a size cap it searches quality downward. Re-encoding usually removes EXIF.',
  tool_image_compress_how_title: 'How it works',
  tool_image_compress_jpeg_bg_black: 'Black',
  tool_image_compress_jpeg_bg_custom: 'Custom',
  tool_image_compress_jpeg_bg_label: 'JPEG background',
  tool_image_compress_jpeg_bg_white: 'White',
  tool_image_compress_max_edge_label: 'Max edge',
  tool_image_compress_output_label: 'Output format',
  tool_image_compress_preset_custom: 'Custom',
  tool_image_compress_preset_email: 'Email / attach — 1280 px · 100 KB',
  tool_image_compress_preset_form: 'Form upload — 1600 px · 300 KB',
  tool_image_compress_preset_group_combo: 'Scenes (size + file size)',
  tool_image_compress_preset_group_edge: 'Max edge only',
  tool_image_compress_preset_group_kb: 'Target size only',
  tool_image_compress_preset_hint: 'Fills max edge / target KB / quality',
  tool_image_compress_preset_label: 'Common presets',
  tool_image_compress_preset_social: 'Social / mobile — 1080 px · 150 KB',
  tool_image_compress_preset_thumb: 'Thumbnail — 800 px · 50 KB',
  tool_image_compress_preset_tiny: 'Tiny / avatar — 512 px · 30 KB',
  tool_image_compress_preset_web_hd: 'Web HD — 1920 px',
  tool_image_compress_preset_web_light: 'Web light — 1280 px · 200 KB',
  tool_image_compress_preview_in: 'Original',
  tool_image_compress_preview_out: 'Compressed',
  tool_image_compress_quality_hint_png: 'PNG is lossless — quality is ignored.',
  tool_image_compress_quality_label: 'Quality',
  tool_image_compress_ratio_tpl: '{from} → {to} ({pct}% smaller)',
  tool_image_compress_resize_on: 'Limit longest side',
  tool_image_compress_rules_body: 'Three knobs do different jobs. Use this checklist before you chase a tiny target size.',
  tool_image_compress_rules_item_1:
    'Longest side: scales down proportionally; never upscales in this tool. Smaller pixels often cut bytes more than quality alone.',
  tool_image_compress_rules_item_2:
    'Quality (JPEG/WebP): maps to the encoder’s lossy setting. PNG ignores quality. WebP/JPEG usually beat PNG for photos.',
  tool_image_compress_rules_item_3:
    'Target KB: binary-search quality down to 0.5. If still too large, you get the smallest attempt plus a clear miss warning — not a fake “success”.',
  tool_image_compress_rules_item_4:
    'Privacy & metadata: bytes stay in this tab. Canvas export typically drops EXIF; use the EXIF tool if you need to inspect tags first.',
  tool_image_compress_rules_title: 'Rules you should expect',
  tool_image_compress_sample: 'Load sample',
  tool_image_compress_stats_tpl: '{mime} · {w}×{h} · {bytes}',
  tool_image_compress_status_compressing: 'Compressing…',
  tool_image_compress_status_done: 'Done — check sizes below, then download.',
  tool_image_compress_status_target_miss:
    'Could not reach the target KB at the quality floor — showing the smallest result (not pretending success).',
  tool_image_compress_status_target_ok: 'Target size reached — download when ready.',
  tool_image_compress_target_kb_label: 'Max size',
  tool_image_compress_target_on: 'Aim for target size',
  tool_image_compress_title: 'Image Compressor — Resize, Quality & Target Size Local',
  tool_image_compress_usecase_1: 'Web delivery: shrink hero or product photos before CMS/CDN upload.',
  tool_image_compress_usecase_2: 'Email or forms: aim near an attachment size limit with the target KB control.',
  tool_image_compress_usecase_3: 'Social posts: cap longest side and lower quality to reduce failed uploads.',
  tool_image_compress_usecases_title: 'Good fits',
  tool_image_compress_warn_animation: 'Animated files: only the first frame is compressed.',
  tool_image_compress_warn_edge: 'Very large dimensions (>8192 px) — expect slowdowns.',
  tool_image_compress_warn_large: 'Large file (>25 MB) — compression may be slow or run out of memory.',
  tool_image_compress_warn_png: 'PNG output often stays large — try WebP or JPEG for smaller files.',
  tool_image_compress_webp_unsupported: 'This browser cannot encode WebP. JPEG is selected instead.',
};
export default en;
