/**
 * i18n tool shard (bulk-compress-product-photos / en).
 * Master H1 is the locked long-tail “Bulk compress product photos”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_bulk_compress_product_photos_article:
		'Compress a folder of product photos in this browser tab, share one size cap, skip files that fail, and download a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_bulk_compress_product_photos_chip_200kb: '200 KB',
	tool_bulk_compress_product_photos_chip_jpeg: 'JPEG',
	tool_bulk_compress_product_photos_chip_jpg: '.jpg',
	tool_bulk_compress_product_photos_choose_files: 'Choose product photos',
	tool_bulk_compress_product_photos_clear: 'Clear',
	tool_bulk_compress_product_photos_col_after: 'After',
	tool_bulk_compress_product_photos_col_before: 'Before',
	tool_bulk_compress_product_photos_col_name: 'File',
	tool_bulk_compress_product_photos_col_status: 'Status',
	tool_bulk_compress_product_photos_compress: 'Compress all',
	tool_bulk_compress_product_photos_desc:
		'Bulk compress product photos toward 200 KB and download a ZIP — files stay on your device.',
	tool_bulk_compress_product_photos_description:
		'Bulk compress product photos: add listing shots, share one longest-edge and a 200 KB cap, encode JPEG or WebP in this tab, skip files that fail, then download a ZIP. Steps: choose a batch, keep the 200 KB chip unless your channel needs another cap, compress all, read hit or miss rows. Example: two sample photos run on first paint toward 200 KB. Files stay on your device and are not uploaded to a server.',
	tool_bulk_compress_product_photos_download_zip: 'Download ZIP',
	tool_bulk_compress_product_photos_drop_hint:
		'Drop JPEG, PNG, or WebP listing photos (up to 20). Compression stays in this tab.',
	tool_bulk_compress_product_photos_empty: 'Add product photos first.',
	tool_bulk_compress_product_photos_err_decode: 'This photo could not be decoded. It was skipped.',
	tool_bulk_compress_product_photos_err_encode: 'This photo could not be compressed. It was skipped.',
	tool_bulk_compress_product_photos_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_bulk_compress_product_photos_err_too_many: 'This page takes at most 20 photos at a time. Extra files were not added.',
	tool_bulk_compress_product_photos_err_webp:
		'This browser cannot encode WebP. JPEG (.jpg) is selected instead.',
	tool_bulk_compress_product_photos_example:
		'Load sample adds two stand-in listing photos, compresses them with the default 200 KB JPEG settings, fills the hit/miss table, and enables Download ZIP. Duplicate names in the ZIP become name (2).jpg.',
	tool_bulk_compress_product_photos_example_title: 'Example',
	tool_bulk_compress_product_photos_faq_a1:
		'No. Decode, resize, and encode run in this tab. Your photos stay on the device and are not uploaded to a server. A ZIP helper script may load from a CDN; your files still never leave the tab.',
	tool_bulk_compress_product_photos_faq_a2:
		'No. Noisy or already-small shots have a floor. Quality stops at 0.5. A miss row still packs the closest file so you can judge whether to shrink the longest edge.',
	tool_bulk_compress_product_photos_faq_a3:
		'Yes. JPEG and JPG are the same output here. Files are named .jpg. A search for jpeg bulk compress belongs on this page, not a second tool.',
	tool_bulk_compress_product_photos_faq_a4:
		'This page is for product photos that can become JPEG or WebP. Transparent UI PNG that must stay PNG belongs on a PNG compress page. Changing PNG into JPG as the main job belongs on a convert-to-JPG page.',
	tool_bulk_compress_product_photos_faq_a5:
		'No. Only the first frame is compressed as a still image. Animated files are noted in the warning and in that row.',
	tool_bulk_compress_product_photos_faq_q1: 'Are my product photos uploaded to a server?',
	tool_bulk_compress_product_photos_faq_q2: 'Will every photo hit 200 KB?',
	tool_bulk_compress_product_photos_faq_q3: 'Do I need a separate JPEG tool besides JPG?',
	tool_bulk_compress_product_photos_faq_q4: 'Should I use this for transparent PNG logos?',
	tool_bulk_compress_product_photos_faq_q5: 'Do animated GIFs stay animated?',
	tool_bulk_compress_product_photos_file_count_tpl: '{n} photos in the queue',
	tool_bulk_compress_product_photos_format_jpeg: 'JPEG (.jpg)',
	tool_bulk_compress_product_photos_format_webp: 'WebP',
	tool_bulk_compress_product_photos_how_body:
		'Pick a batch of listing photos, share one size cap, compress them here, then take a ZIP of the files that succeeded. Failed photos are skipped so the rest still download.',
	tool_bulk_compress_product_photos_how_item_1:
		'Choose the product photos you need smaller — that is the job, not one file at a time.',
	tool_bulk_compress_product_photos_how_item_2:
		'Keep the 200 KB chip unless your shop or email form uses another cap. JPEG (.jpg) is the default listing format.',
	tool_bulk_compress_product_photos_how_item_3:
		'Optionally cap the longest edge so huge phone photos shrink before quality does the rest.',
	tool_bulk_compress_product_photos_how_item_4:
		'Press Compress all and read hit, miss, or skip for each name. Miss still keeps the smallest attempt.',
	tool_bulk_compress_product_photos_how_item_5:
		'Download ZIP when at least one file succeeded. Load sample already ran on first paint.',
	tool_bulk_compress_product_photos_how_title: 'How it works',
	tool_bulk_compress_product_photos_jpeg_bg_black: 'Black',
	tool_bulk_compress_product_photos_jpeg_bg_custom: 'Custom',
	tool_bulk_compress_product_photos_jpeg_bg_label: 'JPEG background',
	tool_bulk_compress_product_photos_jpeg_bg_white: 'White',
	tool_bulk_compress_product_photos_max_edge_label: 'Max edge',
	tool_bulk_compress_product_photos_output_label: 'Output',
	tool_bulk_compress_product_photos_quality_label: 'Quality',
	tool_bulk_compress_product_photos_resize_on: 'Limit longest side',
	tool_bulk_compress_product_photos_rules_body:
		'One shared setting applies to the whole batch. Use the table, not a fake “all succeeded” banner, when a file misses the cap.',
	tool_bulk_compress_product_photos_rules_item_1:
		'Longest side: scales down in proportion and never upscales. Fewer pixels often cut more bytes than quality alone.',
	tool_bulk_compress_product_photos_rules_item_2:
		'Quality applies to JPEG and WebP. A 200 KB target searches quality down to 0.5, then reports hit or miss per file.',
	tool_bulk_compress_product_photos_rules_item_3:
		'A decode or encode failure skips that row and continues. Duplicate ZIP names become name (2).jpg.',
	tool_bulk_compress_product_photos_rules_item_4:
		'Photos stay on your device and are not uploaded to a server. Re-encoding usually drops EXIF.',
	tool_bulk_compress_product_photos_rules_title: 'Rules you should expect',
	tool_bulk_compress_product_photos_sample: 'Load sample',
	tool_bulk_compress_product_photos_status_compressing: 'Compressing the batch…',
	tool_bulk_compress_product_photos_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_bulk_compress_product_photos_status_hit: 'Hit',
	tool_bulk_compress_product_photos_status_miss: 'Missed cap',
	tool_bulk_compress_product_photos_status_skip: 'Skipped',
	tool_bulk_compress_product_photos_summary_tpl: '{ok} ready · {miss} missed cap · {skip} skipped',
	tool_bulk_compress_product_photos_target_kb_label: 'Max size',
	tool_bulk_compress_product_photos_target_on: 'Aim for target size',
	tool_bulk_compress_product_photos_title: 'Bulk compress product photos',
	tool_bulk_compress_product_photos_usecase_1:
		'Listing day: shrink a folder of SKU photos toward a 200 KB marketplace cap before upload.',
	tool_bulk_compress_product_photos_usecase_2:
		'Email a buyer a pack of product shots without bouncing on attachment limits.',
	tool_bulk_compress_product_photos_usecase_3:
		'Hand a designer compressed JPEGs of the same shoot so the ZIP is small enough to share.',
	tool_bulk_compress_product_photos_usecases_title: 'Good fits',
	tool_bulk_compress_product_photos_warn_anim: 'Animated files: only the first frame is compressed.',
	tool_bulk_compress_product_photos_warn_edge: 'A photo is wider or taller than 8192 px — expect it to be slow.',
	tool_bulk_compress_product_photos_warn_large: 'A file is larger than 25 MB — this tab may run out of memory.',
};

export default en;
