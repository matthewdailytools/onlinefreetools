/**
 * i18n tool shard (bulk-convert-images-to-jpg / en).
 * Master H1 is the locked long-tail “Bulk convert images to JPG”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'Convert a folder of images to .jpg in this tab with one matte for transparency, skip files that fail, and download a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'White matte',
	tool_bulk_convert_images_to_jpg_choose_files: 'Choose images',
	tool_bulk_convert_images_to_jpg_clear: 'Clear',
	tool_bulk_convert_images_to_jpg_col_after: 'After',
	tool_bulk_convert_images_to_jpg_col_before: 'Before',
	tool_bulk_convert_images_to_jpg_col_name: 'File',
	tool_bulk_convert_images_to_jpg_col_status: 'Status',
	tool_bulk_convert_images_to_jpg_convert: 'Convert all',
	tool_bulk_convert_images_to_jpg_desc:
		'Bulk convert images to JPG with a shared matte and download a ZIP — stays on your device, not uploaded to a server.',
	tool_bulk_convert_images_to_jpg_description:
		'Bulk convert images to JPG: add photos, PNG logos, or HEIC shots, paint one matte behind transparency, encode .jpg in this tab, skip files that fail, download a ZIP. Steps: choose a batch, keep the white matte unless you need black, convert all. Example: a photo and a see-through logo on white become two .jpg files. Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_jpg_download_zip: 'Download ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'Drop PNG, JPEG, WebP, GIF, or HEIC (up to 20). Conversion stays in this tab.',
	tool_bulk_convert_images_to_jpg_empty: 'Add images first.',
	tool_bulk_convert_images_to_jpg_err_decode: 'This file could not be decoded (HEIC may need another browser). Skipped.',
	tool_bulk_convert_images_to_jpg_err_encode: 'Could not write a JPEG for this file. Skipped.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_bulk_convert_images_to_jpg_err_too_many: 'This page takes at most 20 images. Extra files were not added.',
	tool_bulk_convert_images_to_jpg_example:
		'Load sample adds an opaque photo block and a transparent logo, paints both on white, writes two .jpg names, and enables Download ZIP.',
	tool_bulk_convert_images_to_jpg_example_title: 'Example',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'No. Decode and JPEG encode run in this tab. Files stay on the device and are not uploaded to a server. A ZIP helper may load from a CDN; your images still never leave the tab.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'Yes. PNG to JPG is this page: pick the files, keep the white matte so holes do not turn into black blocks, convert all.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'If this browser cannot decode HEIC, that row is skipped and the rest still pack. Try Safari or convert that file on the phone first.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'No. JPEG and JPG are the same output. Files are named .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'This page changes the suffix to JPG. Shrinking listing photos toward 200 KB is Bulk compress product photos.',
	tool_bulk_convert_images_to_jpg_faq_q1: 'Are my images uploaded to a server?',
	tool_bulk_convert_images_to_jpg_faq_q2: 'How do I convert PNG to JPG here?',
	tool_bulk_convert_images_to_jpg_faq_q3: 'What if HEIC to JPG fails?',
	tool_bulk_convert_images_to_jpg_faq_q4: 'Do I need a separate JPEG tool besides JPG?',
	tool_bulk_convert_images_to_jpg_faq_q5: 'Is this the same as compressing photos?',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} images in the queue',
	tool_bulk_convert_images_to_jpg_how_body:
		'Pick the images that must become .jpg, share one matte for transparent pixels, convert them here, then take a ZIP of the files that succeeded.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'Choose the photos, PNG files, or HEIC shots that a form will only accept as JPG.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'Keep White matte unless the form wants a black backdrop. JPEG cannot keep holes.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'Optionally lower quality if the email attachment must stay small — conversion is still the job, not a 200 KB hunt.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'Press Convert all. Failed HEIC or decode errors skip so the rest still pack as .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'Download ZIP when at least one file succeeded. Load sample already ran on first paint.',
	tool_bulk_convert_images_to_jpg_how_title: 'How it works',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'Black',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'Custom',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'Matte behind transparency',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'White',
	tool_bulk_convert_images_to_jpg_quality_label: 'JPEG quality',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG has no alpha. Every file is drawn on the same matte, then saved as .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'Output names always end in .jpg. A search for jpeg lands on this page, not a second tool.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'Transparent pixels are filled with the shared matte before encode. There is no “skip matte” mode that would leave black blocks unexplained.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'A decode or encode failure skips that row. Duplicate ZIP names become name (2).jpg. Animated files use the first frame.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'Files stay on your device and are not uploaded to a server.',
	tool_bulk_convert_images_to_jpg_rules_title: 'Rules you should expect',
	tool_bulk_convert_images_to_jpg_sample: 'Load sample',
	tool_bulk_convert_images_to_jpg_status_compressing: 'Converting the batch to JPG…',
	tool_bulk_convert_images_to_jpg_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG ready',
	tool_bulk_convert_images_to_jpg_status_skip: 'Skipped',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} ready · {skip} skipped',
	tool_bulk_convert_images_to_jpg_title: 'Bulk convert images to JPG',
	tool_bulk_convert_images_to_jpg_usecase_1: 'A signup form that rejects PNG and only takes JPG attachments.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'Email a pack of product shots that must be .jpg for the print shop.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'Phone HEIC photos that a Windows PC will not open — convert what this browser can decode.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'Good fits',
	tool_bulk_convert_images_to_jpg_warn_anim: 'Animated files: only the first frame is converted.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'A file is wider or taller than 8192 px — expect it to be slow.',
	tool_bulk_convert_images_to_jpg_warn_large: 'A file is larger than 25 MB — this tab may run out of memory.',
};

export default en;
