/**
 * i18n tool shard (bulk-convert-images-to-webp / en).
 * Master H1 is the locked long-tail “Bulk convert images to WebP”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'Convert a folder of images to lossy WebP in this tab, keep transparency when the source has it, skip files this browser cannot encode, download a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_webp_chip_q80: 'Quality 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'Choose images',
	tool_bulk_convert_images_to_webp_clear: 'Clear',
	tool_bulk_convert_images_to_webp_col_after: 'After',
	tool_bulk_convert_images_to_webp_col_before: 'Before',
	tool_bulk_convert_images_to_webp_col_name: 'File',
	tool_bulk_convert_images_to_webp_col_status: 'Status',
	tool_bulk_convert_images_to_webp_convert: 'Convert all',
	tool_bulk_convert_images_to_webp_desc:
		'Bulk convert images to WebP with lossy quality and alpha when present — ZIP download; files stay on your device, not uploaded to a server.',
	tool_bulk_convert_images_to_webp_description:
		'Bulk convert images to WebP: add PNG logos or photos, encode lossy WebP in this tab without a JPEG matte, skip files this browser cannot write, download a ZIP. Steps: choose a batch, keep quality near 0.8, convert all. Example: an opaque photo and a logo with a hole both become .webp. Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_webp_download_zip: 'Download ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: 'Drop JPEG, PNG, WebP, or GIF (up to 20). Conversion stays in this tab.',
	tool_bulk_convert_images_to_webp_empty: 'Add images first.',
	tool_bulk_convert_images_to_webp_err_decode: 'This file could not be decoded. Skipped.',
	tool_bulk_convert_images_to_webp_err_encode: 'Could not write a WebP for this file. Skipped.',
	tool_bulk_convert_images_to_webp_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_bulk_convert_images_to_webp_err_too_many: 'This page takes at most 20 images. Extra files were not added.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'This browser did not return a WebP blob. That row is skipped instead of writing JPEG.',
	tool_bulk_convert_images_to_webp_example:
		'Load sample adds an opaque color block and a transparent logo, writes two .webp files, and enables Download ZIP. The logo keeps its hole.',
	tool_bulk_convert_images_to_webp_example_title: 'Example',
	tool_bulk_convert_images_to_webp_faq_a1:
		'No. Decode and WebP encode run in this tab. Files stay on the device and are not uploaded to a server. A ZIP helper loads from this site; your images still never leave the tab.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'Yes. png to webp is this page: pick the files, keep quality near 0.8, convert all. Holes stay when the PNG had alpha.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'Some mail apps and CMS still reject WebP. For those attachments use Bulk convert images to JPG instead of this page.',
	tool_bulk_convert_images_to_webp_faq_a4:
		'That row is skipped. This page does not secretly write JPEG. Try a current Chrome, Edge, or Firefox.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'No. Only the first frame is saved as a still WebP, and that row is noted.',
	tool_bulk_convert_images_to_webp_faq_q1: 'Are my images uploaded to a server?',
	tool_bulk_convert_images_to_webp_faq_q2: 'How do I convert PNG to WebP here?',
	tool_bulk_convert_images_to_webp_faq_q3: 'Will email clients accept these WebP files?',
	tool_bulk_convert_images_to_webp_faq_q4: 'What if this browser cannot encode WebP?',
	tool_bulk_convert_images_to_webp_faq_q5: 'Do animated GIFs stay animated?',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} images in the queue',
	tool_bulk_convert_images_to_webp_how_body:
		'Pick images that should become WebP for a site, convert them here without a JPEG matte, then take a ZIP of the files that succeeded.',
	tool_bulk_convert_images_to_webp_how_item_1: 'Choose the photos or PNG stickers that should be WebP on the site.',
	tool_bulk_convert_images_to_webp_how_item_2: 'Leave quality near 0.8 unless you need a smaller file. There is no JPEG matte.',
	tool_bulk_convert_images_to_webp_how_item_3: 'Press Convert all. If toBlob is not WebP, that row fails instead of writing JPEG.',
	tool_bulk_convert_images_to_webp_how_item_4: 'Need JPG for email? Use Bulk convert images to JPG. Need lossless PNG? Use Bulk convert images to PNG.',
	tool_bulk_convert_images_to_webp_how_item_5: 'Download ZIP when at least one file succeeded. Load sample already ran on first paint.',
	tool_bulk_convert_images_to_webp_how_title: 'How it works',
	tool_bulk_convert_images_to_webp_quality_label: 'WebP quality',
	tool_bulk_convert_images_to_webp_rules_body:
		'Output is always WebP. This page does not flatten transparency onto a JPEG matte and does not fall back to JPEG.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'Alpha is kept when the source has it. A JPEG source has no alpha to keep.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'Quality defaults to 0.8. Lower it only if the site budget needs a smaller file.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'If this browser cannot write WebP, that row is skipped. Decode failures skip. Duplicate ZIP names become name (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_webp_rules_title: 'Rules you should expect',
	tool_bulk_convert_images_to_webp_sample: 'Load sample',
	tool_bulk_convert_images_to_webp_status_compressing: 'Converting the batch to WebP…',
	tool_bulk_convert_images_to_webp_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP ready',
	tool_bulk_convert_images_to_webp_status_skip: 'Skipped',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} ready · {skip} skipped',
	tool_bulk_convert_images_to_webp_title: 'Bulk convert images to WebP',
	tool_bulk_convert_images_to_webp_usecase_1: 'Shrink site heroes and thumbnails to WebP without a format dropdown.',
	tool_bulk_convert_images_to_webp_usecase_2: 'png to webp for stickers that already have holes.',
	tool_bulk_convert_images_to_webp_usecase_3: 'Keep JPEG for email when the mail client still rejects WebP.',
	tool_bulk_convert_images_to_webp_usecases_title: 'Good fits',
	tool_bulk_convert_images_to_webp_warn_anim: 'Animated files: only the first frame is saved as a still WebP.',
	tool_bulk_convert_images_to_webp_warn_edge: 'A file is wider or taller than 8192 px — expect it to be slow.',
	tool_bulk_convert_images_to_webp_warn_large: 'A file is larger than 25 MB — this tab may run out of memory.',
};

export default en;
