/**
 * i18n tool shard (color-from-image / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_color_from_image_article: 'Local dominant-color palette plus click-to-pick region average with copyable HEX/RGB/HSL.',
  tool_color_from_image_choose_file: 'Choose an image',
  tool_color_from_image_clear: 'Clear',
  tool_color_from_image_copied: 'Copied',
  tool_color_from_image_copy: 'Copy HEX',
  tool_color_from_image_count_label: 'Colors',
  tool_color_from_image_description:
    'Get dominant colors and a full palette from any photo — or use the built-in image color picker to click a region. Steps: choose an image, set color count (2–12), extract, copy HEX/RGB/HSL, or click the preview for a local average. Example: six swatches from a brand photo, then click a logo spot for an exact accent — files stay on your device.',
  tool_color_from_image_drop_hint: 'Or drop a JPEG, PNG, or WebP here. Extraction stays in this tab.',
  tool_color_from_image_empty: 'Choose an image first.',
  tool_color_from_image_err_decode: 'This browser could not decode that file. Try JPEG, PNG, or WebP.',
  tool_color_from_image_err_no_pixels: 'No opaque pixels to sample — the image may be fully transparent.',
  tool_color_from_image_example:
    'Load the four-block sample, keep Colors at 6, and extract — teal, amber, green, cream, and red appear among the swatches. Then click the red circle: the picked card shows a red HEX from the ~7×7 average around that point, ready to copy.',
  tool_color_from_image_example_title: 'Example',
  tool_color_from_image_extract: 'Extract',
  tool_color_from_image_faq_a1: 'No. Palette math and click sampling run locally. Check the Network panel — the image is not POSTed.',
  tool_color_from_image_faq_a2:
    'The page shrinks the image, drops low-alpha pixels, splits color space with median-cut, averages each bucket, and sorts by how many samples fell in each bucket.',
  tool_color_from_image_faq_a3:
    'The tool maps the click back to source pixels and averages opaque colors in a small square (~7×7). You get HEX/RGB/HSL for that region, separate from the palette list.',
  tool_color_from_image_faq_a4:
    'Photos and UI shots are noisy at 1×1. A tiny region average is more stable for CSS accents while still tracking where you clicked.',
  tool_color_from_image_faq_a5: 'Only the first frame is drawn, used for the palette, and available for click picking.',
  tool_color_from_image_faq_q1: 'Does my image leave the browser?',
  tool_color_from_image_faq_q2: 'How are the main colors chosen?',
  tool_color_from_image_faq_q3: 'What happens when I click the image?',
  tool_color_from_image_faq_q4: 'Why is a click not a single pixel?',
  tool_color_from_image_faq_q5: 'Are animated GIFs fully analyzed?',
  tool_color_from_image_how_body:
    'Choose a photo and extract a palette: the page shrinks a working copy (longest edge about 256 px), skips nearly transparent pixels, groups colors, and sorts by how often they appear. Separately, click the preview to average a small square around that point in full resolution and copy HEX, RGB, or HSL — nothing is uploaded.',
  tool_color_from_image_how_title: 'How it works',
  tool_color_from_image_palette_label: 'Palette',
  tool_color_from_image_pct_tpl: '{pct}% of samples',
  tool_color_from_image_pick_hint: 'Click the image to average a small region around that point (about 7×7 source pixels).',
  tool_color_from_image_pick_label: 'Picked color',
  tool_color_from_image_pick_transparent: 'That spot has no opaque pixels — click elsewhere.',
  tool_color_from_image_pick_xy_tpl: 'Around ({x}, {y}) · {size}×{size} avg',
  tool_color_from_image_preview_label: 'Source — click to pick',
  tool_color_from_image_rules_body:
    'Palette extraction and click-to-pick share one image but answer different questions. Use the checklist when a color looks unexpected.',
  tool_color_from_image_rules_item_1:
    'Palette sampling uses a downscaled bitmap (max edge ~256 px) so large photos stay responsive. Fine detail may merge into nearby hues.',
  tool_color_from_image_rules_item_2:
    'Pixels with alpha under 128 are ignored for the palette and for click averages. Fully transparent spots show a clear message.',
  tool_color_from_image_rules_item_3:
    'You request 2–12 palette colors; median-cut may return fewer on flat images. Colors are ordered by sample share.',
  tool_color_from_image_rules_item_4:
    'Click pick averages opaque pixels in about a 7×7 window around the click in source coordinates (not the scaled preview alone). It is a region sample, not a single-pixel lab eyedropper.',
  tool_color_from_image_rules_item_5: 'Privacy: decode, palette math, and click sampling all run locally in this tab.',
  tool_color_from_image_rules_title: 'Rules you should expect',
  tool_color_from_image_sample: 'Load sample',
  tool_color_from_image_status_done: 'Done — copy a swatch, or click the image to pick a region.',
  tool_color_from_image_status_extracting: 'Extracting palette…',
  tool_color_from_image_status_picked: 'Picked — click HEX/RGB/HSL to copy.',
  tool_color_from_image_title: 'Extract Colors from Image — Palette & Click Pick',
  tool_color_from_image_usecase_1: 'Brand photos: pull a palette, then click a logo or button for a specific accent.',
  tool_color_from_image_usecase_2: 'UI screenshots: skim the interface palette, then click a chip or icon for the exact region color.',
  tool_color_from_image_usecase_3: 'Gradient ideas: grab two accents from the palette or by clicking, then open the gradient calculator.',
  tool_color_from_image_usecases_title: 'Good fits',
  tool_color_from_image_warn_animation: 'Animated files: only the first frame is sampled.',
  tool_color_from_image_warn_large: 'Large file (>25 MB) — sampling may be slow.',
};
export default en;
