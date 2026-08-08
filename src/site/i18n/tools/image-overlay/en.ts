/**
 * i18n tool shard (image-overlay / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_image_overlay_article:
    'Local two-layer compositing with opacity, top-left position, scale, blend modes, and JPEG matte when flattening transparency.',
  tool_image_overlay_blend_darken: 'Darken',
  tool_image_overlay_blend_label: 'Blend mode',
  tool_image_overlay_blend_lighten: 'Lighten',
  tool_image_overlay_blend_multiply: 'Multiply',
  tool_image_overlay_blend_overlay: 'Overlay',
  tool_image_overlay_blend_screen: 'Screen',
  tool_image_overlay_blend_source_over: 'Normal (source-over)',
  tool_image_overlay_choose_base: 'Base image',
  tool_image_overlay_choose_overlay: 'Overlay image',
  tool_image_overlay_clear: 'Clear',
  tool_image_overlay_description:
    'Put a logo or PNG watermark on a base photo in your browser — not typed text watermark, and not stitching many images like merge. Steps: pick base + overlay, set opacity and scale, position with x/y or drag, choose blend mode, overlay and download JPEG/WebP/PNG. Example: sample photo + semi-transparent LOGO at bottom-right, 75% opacity → PNG — files stay on your device.',
  tool_image_overlay_download: 'Download',
  tool_image_overlay_drop_hint_base: 'Or drop a JPEG, PNG, or WebP base here. Processing stays in this tab.',
  tool_image_overlay_drop_hint_overlay: 'Or drop the layer image (PNG with transparency works well).',
  tool_image_overlay_empty_base: 'Choose a base image first.',
  tool_image_overlay_empty_overlay: 'Choose an overlay image first.',
  tool_image_overlay_err_decode: 'This browser could not decode one of the files. Try JPEG, PNG, or WebP.',
  tool_image_overlay_err_encode: 'Could not export the composited image. Try a smaller base or different format.',
  tool_image_overlay_example:
    'Load sample: a gradient base and a semi-transparent LOGO badge placed bottom-right at 75% opacity with Normal blend. Click Overlay, keep PNG, and download. Drag the badge on the preview to nudge position; try Multiply on a light logo over a photo.',
  tool_image_overlay_example_title: 'Example',
  tool_image_overlay_faq_a1:
    'No. Decode, composite, and export run in your browser. Check the Network panel — files are not POSTed.',
  tool_image_overlay_faq_a2:
    'Merge stitches several photos into one layout (horizontal, vertical, or grid). Overlay keeps one base and paints one layer on top with opacity, position, and blend.',
  tool_image_overlay_faq_a3:
    'They follow Canvas composite rules: Normal stacks the layer; Multiply darkens; Screen lightens; Overlay boosts contrast; Darken/Lighten pick min/max channels. Preview updates live.',
  tool_image_overlay_faq_a4:
    'JPEG has no transparency. Before export the tool fills the canvas with your chosen color so transparent PNG areas become solid instead of turning black.',
  tool_image_overlay_faq_a5: 'This page layers image files only. For typed text watermarks, use the Add Text Watermark tool.',
  tool_image_overlay_faq_q1: 'Are my images uploaded?',
  tool_image_overlay_faq_q2: 'How is overlay different from merge?',
  tool_image_overlay_faq_q3: 'What do the blend modes do?',
  tool_image_overlay_faq_q4: 'Why pick a JPEG background color?',
  tool_image_overlay_faq_q5: 'Can I type text watermarks here?',
  tool_image_overlay_format_jpeg: 'JPEG',
  tool_image_overlay_format_label: 'Output format',
  tool_image_overlay_format_png: 'PNG',
  tool_image_overlay_format_webp: 'WebP',
  tool_image_overlay_how_body:
    'Add a base photo and a second image (logo, badge, or PNG with transparency). Adjust opacity, scale, and position — drag on the preview or type x/y in base pixels. Pick a blend mode, export format, and optional JPEG background, then overlay and download. Everything runs locally; nothing is uploaded.',
  tool_image_overlay_how_title: 'How it works',
  tool_image_overlay_jpeg_bg_label: 'JPEG background',
  tool_image_overlay_opacity_label: 'Opacity (%)',
  tool_image_overlay_overlay: 'Overlay',
  tool_image_overlay_pos_bc: 'Bottom center',
  tool_image_overlay_pos_bl: 'Bottom left',
  tool_image_overlay_pos_br: 'Bottom right',
  tool_image_overlay_pos_mc: 'Center',
  tool_image_overlay_pos_ml: 'Middle left',
  tool_image_overlay_pos_mr: 'Middle right',
  tool_image_overlay_pos_tc: 'Top center',
  tool_image_overlay_pos_tl: 'Top left',
  tool_image_overlay_pos_tr: 'Top right',
  tool_image_overlay_position_label: 'Quick position',
  tool_image_overlay_preview_label: 'Preview (drag overlay to move)',
  tool_image_overlay_quality_label: 'Quality',
  tool_image_overlay_rules_body:
    'The output canvas matches the base image pixel size. The overlay is drawn with its top-left corner at (x, y) after scaling. Blend and opacity apply only while the overlay is painted.',
  tool_image_overlay_rules_item_1: 'Canvas width × height = base natural width × height. The base is drawn at (0, 0) filling the canvas.',
  tool_image_overlay_rules_item_2:
    'Overlay draw size = natural overlay width × height × (scale% ÷ 100). Position uses the top-left anchor in base pixel coordinates.',
  tool_image_overlay_rules_item_3:
    'globalAlpha = opacity ÷ 100; globalCompositeOperation = selected blend (source-over, multiply, screen, overlay, darken, lighten). Both reset after the overlay draw.',
  tool_image_overlay_rules_item_4:
    'JPEG export fills the canvas with your background color first to flatten transparent areas, then draws base and overlay. PNG/WebP keep alpha where the base or overlay provides it.',
  tool_image_overlay_rules_title: 'Drawing rules',
  tool_image_overlay_sample: 'Load sample',
  tool_image_overlay_scale_label: 'Scale (%)',
  tool_image_overlay_status_done: 'Done — click Download to save.',
  tool_image_overlay_status_working: 'Compositing…',
  tool_image_overlay_title: 'Overlay Images — Put a Logo on a Photo',
  tool_image_overlay_usecase_1: 'Brand marks: place a logo on product shots or social headers without opening desktop editors.',
  tool_image_overlay_usecase_2: 'Corner badges: add a “NEW” or rating sticker with adjustable opacity and quick nine-grid placement.',
  tool_image_overlay_usecase_3: 'Texture blends: use Multiply or Screen on a grayscale overlay to tint or soften a background photo.',
  tool_image_overlay_usecases_title: 'Good fits',
  tool_image_overlay_warn_edge: 'Base edge exceeds ~8192 px — some browsers may fail or run out of memory.',
  tool_image_overlay_warn_large: 'Large file (>25 MB) — decoding may be slow.',
  tool_image_overlay_x_label: 'X (px)',
  tool_image_overlay_y_label: 'Y (px)',
};
export default en;
