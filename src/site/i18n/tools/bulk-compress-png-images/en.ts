/**
 * i18n tool shard (bulk-compress-png-images / en).
 * Master H1 is the locked long-tail “Bulk compress PNG images”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'Compress a folder of PNG logos or UI assets in this tab, keep transparency, skip files that fail, and download a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: 'Re-encode only',
	tool_bulk_compress_png_images_choose_files: 'Choose PNG images',
	tool_bulk_compress_png_images_clear: 'Clear',
	tool_bulk_compress_png_images_col_after: 'After',
	tool_bulk_compress_png_images_col_before: 'Before',
	tool_bulk_compress_png_images_col_name: 'File',
	tool_bulk_compress_png_images_col_status: 'Status',
	tool_bulk_compress_png_images_compress: 'Compress all',
	tool_bulk_compress_png_images_desc:
		'Bulk compress PNG images, keep alpha, download a ZIP — files stay on your device, not uploaded to a server.',
	tool_bulk_compress_png_images_description:
		'Bulk compress PNG images: add logos or UI cuts, keep transparency, optionally cap the longest edge, re-encode PNG in this tab, skip failures, download a ZIP. Steps: choose a folder of PNGs, leave the 1024 px chip if icons must shrink, compress all, read the table. Example: two checkerboard samples stay PNG with holes. Files stay on your device and are not uploaded to a server.',
	tool_bulk_compress_png_images_download_zip: 'Download ZIP',
	tool_bulk_compress_png_images_drop_hint: 'Drop PNG files (up to 20). Other images export as PNG too. Stays in this tab.',
	tool_bulk_compress_png_images_empty: 'Add PNG images first.',
	tool_bulk_compress_png_images_err_decode: 'This image could not be decoded. It was skipped.',
	tool_bulk_compress_png_images_err_encode: 'This image could not be written as PNG. It was skipped.',
	tool_bulk_compress_png_images_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_bulk_compress_png_images_err_too_many: 'This page takes at most 20 files at a time. Extra files were not added.',
	tool_bulk_compress_png_images_example:
		'Load sample adds two transparent checkerboard PNGs, re-encodes them as PNG, fills the table, and enables Download ZIP. Duplicate names become name (2).png.',
	tool_bulk_compress_png_images_example_title: 'Example',
	tool_bulk_compress_png_images_faq_a1:
		'No. Decode and PNG encode run in this tab. Files stay on the device and are not uploaded to a server. A ZIP helper loads from this site; your images still never leave the tab.',
	tool_bulk_compress_png_images_faq_a2:
		'No. Output is always PNG. There is no JPEG matte. If you want smaller photo files and can accept JPEG, use Bulk compress product photos.',
	tool_bulk_compress_png_images_faq_a3:
		'Yes. Pixels are drawn without a solid backdrop, then saved as PNG, so holes should still be holes.',
	tool_bulk_compress_png_images_faq_a4:
		'Often, if you do not shrink the longest edge. Canvas PNG is not a palette optimizer like some cloud tools. Indexed-color banding can appear after re-encode.',
	tool_bulk_compress_png_images_faq_a5:
		'No. Only the first frame is saved as a still PNG.',
	tool_bulk_compress_png_images_faq_q1: 'Are my PNG files uploaded to a server?',
	tool_bulk_compress_png_images_faq_q2: 'Will this turn my PNGs into JPEG?',
	tool_bulk_compress_png_images_faq_q3: 'Does transparency survive?',
	tool_bulk_compress_png_images_faq_q4: 'Why is the file still large after compress?',
	tool_bulk_compress_png_images_faq_q5: 'Do animated GIFs stay animated?',
	tool_bulk_compress_png_images_file_count_tpl: '{n} files in the queue',
	tool_bulk_compress_png_images_how_body:
		'Pick a batch of PNGs that must stay PNG, share one longest-edge cap if you need smaller pixels, compress here, then take a ZIP of the files that succeeded.',
	tool_bulk_compress_png_images_how_item_1: 'Choose the PNG logos or UI cuts that must keep transparency.',
	tool_bulk_compress_png_images_how_item_2: 'Use the 1024 px chip when icons should shrink; use Re-encode only when size in pixels must stay.',
	tool_bulk_compress_png_images_how_item_3: 'Press Compress all. Each row stays a PNG. Failures skip so the rest still pack.',
	tool_bulk_compress_png_images_how_item_4: 'If a photo-like PNG barely shrinks, the table warns you — JPEG on the product-photo page is smaller.',
	tool_bulk_compress_png_images_how_item_5: 'Download ZIP when at least one file succeeded. Load sample already ran on first paint.',
	tool_bulk_compress_png_images_how_title: 'How it works',
	tool_bulk_compress_png_images_max_edge_label: 'Max edge',
	tool_bulk_compress_png_images_resize_on: 'Limit longest side',
	tool_bulk_compress_png_images_rules_body:
		'This page never paints a JPEG backdrop. Size usually drops when you shrink the longest edge, not when you only re-save.',
	tool_bulk_compress_png_images_rules_item_1:
		'Output MIME is PNG. Alpha is not flattened. There is no quality slider because PNG here is lossless.',
	tool_bulk_compress_png_images_rules_item_2:
		'Longest side scales down in proportion and never upscales. Re-encode only keeps the pixel size and may barely change bytes.',
	tool_bulk_compress_png_images_rules_item_3:
		'A decode or encode failure skips that row. Duplicate ZIP names become name (2).png. Indexed palettes may band after Canvas.',
	tool_bulk_compress_png_images_rules_item_4:
		'Files stay on your device and are not uploaded to a server.',
	tool_bulk_compress_png_images_rules_title: 'Rules you should expect',
	tool_bulk_compress_png_images_sample: 'Load sample',
	tool_bulk_compress_png_images_status_compressing: 'Compressing the PNG batch…',
	tool_bulk_compress_png_images_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_bulk_compress_png_images_status_ok: 'PNG ready',
	tool_bulk_compress_png_images_status_same: 'Still large',
	tool_bulk_compress_png_images_status_skip: 'Skipped',
	tool_bulk_compress_png_images_summary_tpl: '{ok} ready · {same} barely smaller · {skip} skipped',
	tool_bulk_compress_png_images_title: 'Bulk compress PNG images',
	tool_bulk_compress_png_images_usecase_1: 'A folder of transparent logos that must stay PNG for the storefront.',
	tool_bulk_compress_png_images_usecase_2: 'UI export cuts that need a shared longest edge before a design handoff.',
	tool_bulk_compress_png_images_usecase_3: 'Promo stickers with holes; JPEG would fill the holes with a matte.',
	tool_bulk_compress_png_images_usecases_title: 'Good fits',
	tool_bulk_compress_png_images_warn_anim: 'Animated files: only the first frame is saved as a still PNG.',
	tool_bulk_compress_png_images_warn_edge: 'A file is wider or taller than 8192 px — expect it to be slow.',
	tool_bulk_compress_png_images_warn_large: 'A file is larger than 25 MB — this tab may run out of memory.',
	tool_bulk_compress_png_images_warn_same: 'Some PNGs barely shrank. Shrink the longest edge, or use product-photo compress if JPEG is acceptable.',
};

export default en;
