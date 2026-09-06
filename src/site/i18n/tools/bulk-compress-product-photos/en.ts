/**
 * i18n tool shard (bulk-compress-product-photos / en).
 * Master H1 is the locked long-tail “Bulk compress product photos”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_bulk_compress_product_photos_article:
		'Compress a folder of product photos in this browser tab, share one size cap, skip files that fail, and download a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_bulk_compress_product_photos_chip_100kb: '100 KB',
	tool_bulk_compress_product_photos_chip_200kb: '200 KB',
	tool_bulk_compress_product_photos_chip_jpeg: 'JPEG',
	tool_bulk_compress_product_photos_chip_jpg: '.jpg',
	tool_bulk_compress_product_photos_chip_png: 'PNG',
	tool_bulk_compress_product_photos_chip_webp: 'WebP',
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
		'Bulk compress product photos: add listing shots, share one size rule and a 200 KB cap, encode JPEG, WebP, or PNG in this tab, skip files that fail, then download a ZIP. Steps: choose a batch, pick a listing preset or keep the 200 KB chip, compress all, read hit or miss rows. Example: two sample photos run on first paint toward 200 KB. Files stay on your device and are not uploaded to a server.',
	tool_bulk_compress_product_photos_download_zip: 'Download ZIP',
	tool_bulk_compress_product_photos_drop_hint:
		'Drop JPEG, PNG, WebP, GIF, BMP, or AVIF listing photos (up to 20). Compression stays in this tab.',
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
		'No. Decode, resize, and encode run in this tab. Your photos stay on the device and are not uploaded to a server. A ZIP helper script load from this site; your files still never leave the tab.',
	tool_bulk_compress_product_photos_faq_a2:
		'No. Noisy or already-small shots have a floor. Quality stops at 0.5. A miss row still packs the closest file so you can judge whether to shrink the longest edge.',
	tool_bulk_compress_product_photos_faq_a3:
		'Yes. JPEG and JPG are the same output here. Files are named .jpg. A search for jpeg bulk compress belongs on this page, not a second tool.',
	tool_bulk_compress_product_photos_faq_a4:
		'This page defaults to JPEG or WebP for listing size caps. PNG is available when you need lossless output, but photos rarely shrink under a KB target that way. Transparent UI PNG that must stay PNG belongs on a PNG compress page. Changing PNG into JPG as the main job belongs on a convert-to-JPG page.',
	tool_bulk_compress_product_photos_faq_a5:
		'No. Only the first frame is compressed as a still image. Animated files are noted in the warning and in that row.',
	tool_bulk_compress_product_photos_faq_q1: 'Are my product photos uploaded to a server?',
	tool_bulk_compress_product_photos_faq_q2: 'Will every photo hit 200 KB?',
	tool_bulk_compress_product_photos_faq_q3: 'Do I need a separate JPEG tool besides JPG?',
	tool_bulk_compress_product_photos_faq_q4: 'Should I use this for transparent PNG logos?',
	tool_bulk_compress_product_photos_faq_q5: 'Do animated GIFs stay animated?',
	tool_bulk_compress_product_photos_file_count_tpl: '{n} photos in the queue',
	tool_bulk_compress_product_photos_format_jpeg: 'JPEG (.jpg)',
	tool_bulk_compress_product_photos_format_png: 'PNG',
	tool_bulk_compress_product_photos_format_webp: 'WebP',
	tool_bulk_compress_product_photos_how_body:
		'Pick a batch of listing photos, share one size rule and size cap, compress them here, then take a ZIP of the files that succeeded. Failed photos are skipped so the rest still download.',
	tool_bulk_compress_product_photos_how_item_1:
		'Choose the product photos you need smaller — that is the job, not one file at a time.',
	tool_bulk_compress_product_photos_how_item_2:
		'Keep the 200 KB chip or pick a listing preset. JPEG (.jpg) is the default listing format; WebP and PNG are also available.',
	tool_bulk_compress_product_photos_how_item_3:
		'Choose a size rule: longest side, max width, or max height — then cap huge phone photos before quality does the rest.',
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
	tool_bulk_compress_product_photos_preset_custom: 'Custom',
	tool_bulk_compress_product_photos_preset_email: 'Email pack — 1280 px · 100 KB',
	tool_bulk_compress_product_photos_preset_group_combo: 'Listing scenes (size + KB)',
	tool_bulk_compress_product_photos_preset_group_edge: 'Size rule only',
	tool_bulk_compress_product_photos_preset_group_kb: 'Target size only',
	tool_bulk_compress_product_photos_preset_hint: 'Fills size rule, pixels, and KB',
	tool_bulk_compress_product_photos_preset_label: 'Size presets',
	tool_bulk_compress_product_photos_preset_listing: 'Listing standard — 1280 px · 200 KB',
	tool_bulk_compress_product_photos_preset_listing_hd: 'Listing HD — 1920 px',
	tool_bulk_compress_product_photos_preset_social: 'Social / mobile — 1080 px · 150 KB',
	tool_bulk_compress_product_photos_preset_thumb: 'Thumb width — 800 px · 50 KB',
	tool_bulk_compress_product_photos_preset_tiny: 'Tiny height — 512 px · 30 KB',
	tool_bulk_compress_product_photos_quality_hint_png: 'PNG is lossless — the quality slider does not shrink bytes.',
	tool_bulk_compress_product_photos_quality_label: 'Quality',
	tool_bulk_compress_product_photos_resize_on: 'Limit output size',
	tool_bulk_compress_product_photos_rules_body:
		'One shared setting applies to the whole batch. Use the table, not a fake “all succeeded” banner, when a file misses the cap.',
	tool_bulk_compress_product_photos_rules_item_1:
		'Size rules scale down in proportion and never upscale: longest side, max width, or max height. Fewer pixels often cut more bytes than quality alone.',
	tool_bulk_compress_product_photos_rules_item_2:
		'Quality applies to JPEG and WebP. A 200 KB target searches quality down to 0.5, then reports hit or miss per file. PNG skips the KB search.',
	tool_bulk_compress_product_photos_rules_item_3:
		'A decode or encode failure skips that row and continues. Duplicate ZIP names become name (2).jpg.',
	tool_bulk_compress_product_photos_rules_item_4:
		'Photos stay on your device and are not uploaded to a server. Re-encoding usually drops EXIF.',
	tool_bulk_compress_product_photos_rules_title: 'Rules you should expect',
	tool_bulk_compress_product_photos_sample: 'Load sample',
	tool_bulk_compress_product_photos_size_px_height: 'Max height',
	tool_bulk_compress_product_photos_size_px_width: 'Max width',
	tool_bulk_compress_product_photos_size_rule_label: 'Size rule',
	tool_bulk_compress_product_photos_size_rule_max_edge: 'Longest side',
	tool_bulk_compress_product_photos_size_rule_max_height: 'Max height',
	tool_bulk_compress_product_photos_size_rule_max_width: 'Max width',
	tool_bulk_compress_product_photos_status_compressing: 'Compressing the batch…',
	tool_bulk_compress_product_photos_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_bulk_compress_product_photos_status_hit: 'Hit',
	tool_bulk_compress_product_photos_status_miss: 'Missed cap',
	tool_bulk_compress_product_photos_status_skip: 'Skipped',
	tool_bulk_compress_product_photos_summary_tpl: '{ok} ready · {miss} missed cap · {skip} skipped',
	tool_bulk_compress_product_photos_target_kb_label: 'Max size',
	tool_bulk_compress_product_photos_target_on: 'Aim for target size',
	tool_bulk_compress_product_photos_title: 'Bulk compress product photos (JPEG, PNG, WebP)',
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
	tool_bulk_compress_product_photos_warn_png: 'PNG output often stays large — for listing caps prefer JPEG or WebP.',
};

export default en;
