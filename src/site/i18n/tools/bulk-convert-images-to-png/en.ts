/**
 * i18n tool shard (bulk-convert-images-to-png / en).
 * Master H1 is the locked long-tail “Bulk convert images to PNG”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'Convert a folder of images to PNG in this tab, keep transparency when the source has it, skip failures, download a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_png_choose_files: 'Choose images',
	tool_bulk_convert_images_to_png_clear: 'Clear',
	tool_bulk_convert_images_to_png_col_after: 'After',
	tool_bulk_convert_images_to_png_col_before: 'Before',
	tool_bulk_convert_images_to_png_col_name: 'File',
	tool_bulk_convert_images_to_png_col_status: 'Status',
	tool_bulk_convert_images_to_png_convert: 'Convert all',
	tool_bulk_convert_images_to_png_desc:
		'Bulk convert images to PNG and keep alpha — ZIP download; files stay on your device, not uploaded to a server.',
	tool_bulk_convert_images_to_png_description:
		'Bulk convert images to PNG: add JPEGs or screenshots, re-encode as PNG in this tab without a JPEG matte, skip files that fail, download a ZIP. Steps: choose a batch, convert all, read the table if a JPEG grew larger as PNG. Example: an opaque photo and a logo with a hole both become .png. Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_png_download_zip: 'Download ZIP',
	tool_bulk_convert_images_to_png_drop_hint: 'Drop JPEG, PNG, WebP, or GIF (up to 20). Conversion stays in this tab.',
	tool_bulk_convert_images_to_png_empty: 'Add images first.',
	tool_bulk_convert_images_to_png_err_decode: 'This file could not be decoded. Skipped.',
	tool_bulk_convert_images_to_png_err_encode: 'Could not write a PNG for this file. Skipped.',
	tool_bulk_convert_images_to_png_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_bulk_convert_images_to_png_err_too_many: 'This page takes at most 20 images. Extra files were not added.',
	tool_bulk_convert_images_to_png_example:
		'Load sample adds a JPEG color block and a transparent logo, writes two .png files, and enables Download ZIP. The JPEG row often shows a larger PNG.',
	tool_bulk_convert_images_to_png_example_title: 'Example',
	tool_bulk_convert_images_to_png_faq_a1:
		'No. Decode and PNG encode run in this tab. Files stay on the device and are not uploaded to a server. A ZIP helper loads from this site; your images still never leave the tab.',
	tool_bulk_convert_images_to_png_faq_a2:
		'No. JPEG never stored holes. jpg to png gives you a PNG wrapper; the backdrop stays opaque. True holes only survive if the source already had alpha.',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG is lossless. A photo JPEG often gets larger. The table marks “larger”. Shrink pixels on Bulk compress PNG images, or stay JPEG if you do not need PNG.',
	tool_bulk_convert_images_to_png_faq_a4:
		'Compress PNG is for files that are already PNG and should stay PNG but smaller. This page changes the suffix to PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'No. Only the first frame is saved as a still PNG, and that row is noted.',
	tool_bulk_convert_images_to_png_faq_q1: 'Are my images uploaded to a server?',
	tool_bulk_convert_images_to_png_faq_q2: 'Does JPG to PNG restore transparency?',
	tool_bulk_convert_images_to_png_faq_q3: 'Why is the PNG larger than the JPEG?',
	tool_bulk_convert_images_to_png_faq_q4: 'How is this different from compressing PNG?',
	tool_bulk_convert_images_to_png_faq_q5: 'Do animated GIFs stay animated?',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} images in the queue',
	tool_bulk_convert_images_to_png_how_body:
		'Pick images that should become PNG, convert them here without painting a matte, then take a ZIP of the files that succeeded.',
	tool_bulk_convert_images_to_png_how_item_1: 'Choose the screenshots or logos that must be PNG.',
	tool_bulk_convert_images_to_png_how_item_2: 'There is no white-matte control — holes stay holes when the source has alpha.',
	tool_bulk_convert_images_to_png_how_item_3: 'Press Convert all. JPEG sources become opaque PNG; the table warns if the file grew.',
	tool_bulk_convert_images_to_png_how_item_4: 'Need JPG instead? Use Bulk convert images to JPG. Need smaller PNG? Use Bulk compress PNG images.',
	tool_bulk_convert_images_to_png_how_item_5: 'Download ZIP when at least one file succeeded. Load sample already ran on first paint.',
	tool_bulk_convert_images_to_png_how_title: 'How it works',
	tool_bulk_convert_images_to_png_max_edge_label: 'Max edge',
	tool_bulk_convert_images_to_png_resize_on: 'Limit longest side',
	tool_bulk_convert_images_to_png_rules_body:
		'Output is always PNG. This page does not flatten transparency onto a JPEG matte.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'Alpha is kept when the source has it. A JPEG source has no alpha to keep.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'Optional longest-edge shrink is off by default so conversion does not secretly resize.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'If the PNG is larger than the original, the row says so. Decode failures skip. Duplicate ZIP names become name (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_png_rules_title: 'Rules you should expect',
	tool_bulk_convert_images_to_png_sample: 'Load sample',
	tool_bulk_convert_images_to_png_status_compressing: 'Converting the batch to PNG…',
	tool_bulk_convert_images_to_png_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_bulk_convert_images_to_png_status_larger: 'Larger than source',
	tool_bulk_convert_images_to_png_status_ok: 'PNG ready',
	tool_bulk_convert_images_to_png_status_skip: 'Skipped',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} ready · {larger} larger · {skip} skipped',
	tool_bulk_convert_images_to_png_title: 'Bulk convert images to PNG',
	tool_bulk_convert_images_to_png_usecase_1: 'Archive screenshots as PNG for a design handoff.',
	tool_bulk_convert_images_to_png_usecase_2: 'Unify sticker assets as PNG when the source already has holes.',
	tool_bulk_convert_images_to_png_usecase_3: 'jpg to png when a CMS only accepts PNG — expect a larger photo file.',
	tool_bulk_convert_images_to_png_usecases_title: 'Good fits',
	tool_bulk_convert_images_to_png_warn_anim: 'Animated files: only the first frame is saved as a still PNG.',
	tool_bulk_convert_images_to_png_warn_edge: 'A file is wider or taller than 8192 px — expect it to be slow.',
	tool_bulk_convert_images_to_png_warn_large: 'A file is larger than 25 MB — this tab may run out of memory.',
	tool_bulk_convert_images_to_png_warn_larger: 'Some PNGs are larger than the originals. That is expected for photo JPEGs.',
};

export default en;
