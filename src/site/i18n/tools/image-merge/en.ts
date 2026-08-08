/**
 * i18n tool shard (image-merge / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_image_merge_article:
    'Local multi-image collage with layout, gap, background, grid fit, output format, and optional size presets.',
  tool_image_merge_bg_label: 'Background',
  tool_image_merge_choose_files: 'Add images',
  tool_image_merge_clear: 'Clear',
  tool_image_merge_cols_label: 'Columns',
  tool_image_merge_description:
    'Combine photos into one collage or stitched image in your browser. Steps: add images, pick horizontal/vertical/grid layout, set gap and background, merge, then download JPEG/WebP/PNG. Example: three sample blocks in a row with 8 px white gap → one WebP — files never leave your device; optional size presets for common social posts.',
  tool_image_merge_download: 'Download',
  tool_image_merge_drop_hint: 'Or drop two or more JPEG, PNG, or WebP files here. Merging stays in this tab.',
  tool_image_merge_empty: 'Add at least one image first.',
  tool_image_merge_err_decode: 'This browser could not decode one of the files. Try JPEG, PNG, or WebP.',
  tool_image_merge_err_encode: 'Could not export the merged image. Try a smaller layout or different format.',
  tool_image_merge_example:
    'Load the three-color sample, keep Horizontal, gap 8 px, white background, WebP quality 0.90, preset None, and merge. You should get one wide strip (~728×180 px before export). Switch to Grid with 3 columns to stack them in one row of equal cells.',
  tool_image_merge_example_title: 'Example',
  tool_image_merge_faq_a1: 'No. Decode, layout, and export run in your browser. Check the Network panel — images are not POSTed.',
  tool_image_merge_faq_a2:
    'Horizontal unifies height and grows width; vertical unifies width and grows height. Grid uses fixed cells with contain or cover.',
  tool_image_merge_faq_a3: 'No. They are common output sizes only. Platform rules change; always check the app you publish to.',
  tool_image_merge_faq_a4: 'Only the first frame is decoded and drawn. Animation is not preserved in the output.',
  tool_image_merge_faq_a5:
    'Very large canvas edges (above ~8192 px) or many megapixel sources can exceed browser memory. Reduce count, use grid with fewer columns, or resize sources first with the crop tool.',
  tool_image_merge_faq_q1: 'Are my photos uploaded?',
  tool_image_merge_faq_q2: 'How is horizontal different from vertical?',
  tool_image_merge_faq_q3: 'Do the 1080 or 1200 presets guarantee Instagram/Facebook approval?',
  tool_image_merge_faq_q4: 'What happens with animated GIFs?',
  tool_image_merge_faq_q5: 'Why did merge fail on a huge collage?',
  tool_image_merge_fit_contain: 'Contain',
  tool_image_merge_fit_cover: 'Cover',
  tool_image_merge_fit_label: 'Cell fit',
  tool_image_merge_format_jpeg: 'JPEG',
  tool_image_merge_format_label: 'Output format',
  tool_image_merge_format_png: 'PNG',
  tool_image_merge_format_webp: 'WebP',
  tool_image_merge_gap_label: 'Gap (px)',
  tool_image_merge_how_body:
    'Add two or more images, reorder if needed, pick a layout, set gap and background, then merge. The page builds one canvas locally, draws each photo in order, optionally scales the result into a common square or link-preview size, and lets you download — nothing is uploaded.',
  tool_image_merge_how_title: 'How it works',
  tool_image_merge_layout_grid: 'Grid',
  tool_image_merge_layout_horizontal: 'Horizontal',
  tool_image_merge_layout_label: 'Layout',
  tool_image_merge_layout_vertical: 'Vertical',
  tool_image_merge_merge: 'Merge',
  tool_image_merge_move_down: 'Move down',
  tool_image_merge_move_up: 'Move up',
  tool_image_merge_need_two: 'Add at least two images to merge.',
  tool_image_merge_preset_fb: '1200×630 (common link preview)',
  tool_image_merge_preset_ig: '1080×1080 (common square post)',
  tool_image_merge_preset_label: 'Size preset',
  tool_image_merge_preset_none: 'None',
  tool_image_merge_preview_label: 'Merged preview',
  tool_image_merge_quality_label: 'Quality',
  tool_image_merge_remove: 'Remove',
  tool_image_merge_rules_body:
    'Canvas size follows the formulas below. Grid cells share one width and height; contain letterboxes, cover crops.',
  tool_image_merge_rules_item_1:
    'Horizontal: height = max of source heights; each image scales to that height; canvas width = sum of scaled widths + (n−1)×gap.',
  tool_image_merge_rules_item_2:
    'Vertical: width = max of source widths; each image scales to that width; canvas height = sum of scaled heights + (n−1)×gap.',
  tool_image_merge_rules_item_3:
    'Grid: pick 2–4 columns; rows = ceil(n/cols); cell size = max source width × max source height; gap between cells; contain or cover inside each cell.',
  tool_image_merge_rules_item_4:
    'Presets scale the finished collage into 1080×1080 or 1200×630 with your background color (common sizes, not platform approval). Background is filled before images are drawn.',
  tool_image_merge_rules_title: 'Layout rules',
  tool_image_merge_sample: 'Load sample',
  tool_image_merge_stats_tpl: '{w}×{h} · {mime} · {bytes}',
  tool_image_merge_status_done: 'Done — preview below; click Download to save.',
  tool_image_merge_status_merging: 'Merging images…',
  tool_image_merge_title: 'Merge Images — Combine Photos into One Collage',
  tool_image_merge_usecase_1: 'Before/after pairs: place two shots side by side for reviews or fitness progress.',
  tool_image_merge_usecase_2: 'Tutorial steps: stack screenshots vertically into one scrollable image.',
  tool_image_merge_usecase_3: 'Product angles or story boards: use a 3×3 grid, then compress if the file is heavy.',
  tool_image_merge_usecases_title: 'Good fits',
  tool_image_merge_warn_animation: 'Animated GIFs: only the first frame is merged.',
  tool_image_merge_warn_edge: 'Canvas edge exceeds ~8192 px — some browsers may fail or run out of memory.',
  tool_image_merge_warn_large: 'Large file (>25 MB) — decoding may be slow.',
};
export default en;
