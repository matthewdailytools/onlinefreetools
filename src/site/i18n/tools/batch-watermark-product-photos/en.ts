/**
 * i18n tool shard (batch-watermark-product-photos / en).
 * Master H1 is the locked long-tail “Batch watermark product photos”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: 'Bottom',
	tool_batch_watermark_product_photos_anchor_bl: 'Bottom left',
	tool_batch_watermark_product_photos_anchor_br: 'Bottom right',
	tool_batch_watermark_product_photos_anchor_label: 'Anchor',
	tool_batch_watermark_product_photos_anchor_mc: 'Center',
	tool_batch_watermark_product_photos_anchor_ml: 'Mid left',
	tool_batch_watermark_product_photos_anchor_mr: 'Mid right',
	tool_batch_watermark_product_photos_anchor_tc: 'Top',
	tool_batch_watermark_product_photos_anchor_tl: 'Top left',
	tool_batch_watermark_product_photos_anchor_tr: 'Top right',
	tool_batch_watermark_product_photos_apply: 'Apply all',
	tool_batch_watermark_product_photos_article:
		'Stamp one copyright line on a shoot of listing photos in this tab. Type size follows each photo’s short edge so landscape and portrait land in the same relative corner. Preview one frame, apply to all, skip canvases that are too small, download a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_batch_watermark_product_photos_chip_draft: 'Diagonal DRAFT',
	tool_batch_watermark_product_photos_choose_files: 'Choose photos',
	tool_batch_watermark_product_photos_clear: 'Clear',
	tool_batch_watermark_product_photos_col_after: 'After',
	tool_batch_watermark_product_photos_col_before: 'Before',
	tool_batch_watermark_product_photos_col_name: 'File',
	tool_batch_watermark_product_photos_col_status: 'Status',
	tool_batch_watermark_product_photos_color_label: 'Color',
	tool_batch_watermark_product_photos_desc:
		'Batch watermark product photos with one short-edge stamp, preview one, apply to all, ZIP — stays on your device, not uploaded to a server.',
	tool_batch_watermark_product_photos_description:
		'Batch watermark product photos: add a shoot of listing shots, set one text stamp sized from each photo’s short edge, preview one frame, apply to all, skip tiny canvases, download a ZIP. Steps: choose the batch, keep the corner mark, preview one, apply all. Example: a landscape and a portrait share the same relative SAMPLE mark. Files stay on your device and are not uploaded to a server.',
	tool_batch_watermark_product_photos_download_zip: 'Download ZIP',
	tool_batch_watermark_product_photos_drop_hint: 'Drop JPEG, PNG, or WebP listing photos (up to 20). Stamping stays in this tab.',
	tool_batch_watermark_product_photos_empty: 'Add photos first.',
	tool_batch_watermark_product_photos_empty_text: 'Type the stamp text before you apply.',
	tool_batch_watermark_product_photos_err_decode: 'This file could not be decoded. Skipped.',
	tool_batch_watermark_product_photos_err_encode: 'Could not write this file. Skipped.',
	tool_batch_watermark_product_photos_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_batch_watermark_product_photos_err_tiny: 'Short side under 64 px — stamp skipped on that row.',
	tool_batch_watermark_product_photos_err_too_many: 'This page takes at most 20 photos. Extra files were not added.',
	tool_batch_watermark_product_photos_example:
		'Load sample adds a landscape block and a portrait block, sets SAMPLE, previews the first frame, applies the same relative mark to both, and enables Download ZIP.',
	tool_batch_watermark_product_photos_example_title: 'Example',
	tool_batch_watermark_product_photos_faq_a1:
		'No. Decode and Canvas stamping run in this tab. Files stay on the device and are not uploaded to a server. A ZIP helper may load from a CDN; your photos still never leave the tab.',
	tool_batch_watermark_product_photos_faq_a2:
		'No. Type size is a percent of each photo’s short edge, and the nine anchors are fractions of that canvas. A portrait and a landscape keep the same relative corner.',
	tool_batch_watermark_product_photos_faq_a3:
		'No. This page stamps photos. PDF stamps are a different job — use the PDF watermark tool when you need pages, not listing JPEGs.',
	tool_batch_watermark_product_photos_faq_a4:
		'Add text watermark is one photo with pixel tweaks. This page shares one stamp across a shoot, previews one, then applies all into a ZIP.',
	tool_batch_watermark_product_photos_faq_a5:
		'People also search “watermark photos in bulk”. On this site that job lives here under batch — there is no second bulk-watermark URL.',
	tool_batch_watermark_product_photos_faq_q1: 'Are my photos uploaded to a server?',
	tool_batch_watermark_product_photos_faq_q2: 'Will landscape and portrait marks drift?',
	tool_batch_watermark_product_photos_faq_q3: 'Can I watermark a PDF here?',
	tool_batch_watermark_product_photos_faq_q4: 'How is this different from Add text watermark?',
	tool_batch_watermark_product_photos_faq_q5: 'I searched “watermark photos in bulk” — is this the page?',
	tool_batch_watermark_product_photos_file_count_tpl: '{n} photos in the queue',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: 'Output',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'Put the shoot in the queue, set one stamp, preview a single frame, then apply the same relative mark to every photo and take a ZIP.',
	tool_batch_watermark_product_photos_how_item_1: 'Choose the listing photos that need the same copyright line.',
	tool_batch_watermark_product_photos_how_item_2: 'Set the text, corner, and short-edge percent. Default is SAMPLE at bottom right, 8% of the short side.',
	tool_batch_watermark_product_photos_how_item_3: 'Press Preview one. Check that landscape and portrait both sit in the same relative corner.',
	tool_batch_watermark_product_photos_how_item_4: 'Press Apply all. Canvases shorter than 64 px skip. JPEG output paints a white matte first.',
	tool_batch_watermark_product_photos_how_item_5: 'Download ZIP when at least one file succeeded. Need a single-photo tweak? Use Add text watermark.',
	tool_batch_watermark_product_photos_how_title: 'How it works',
	tool_batch_watermark_product_photos_opacity_label: 'Opacity',
	tool_batch_watermark_product_photos_pct_label: 'Size vs short side',
	tool_batch_watermark_product_photos_preview: 'Preview one',
	tool_batch_watermark_product_photos_rotation_label: 'Angle',
	tool_batch_watermark_product_photos_rules_body:
		'Font size in pixels is the short side times the percent. Anchors are fractions of that canvas, not fixed pixels.',
	tool_batch_watermark_product_photos_rules_item_1:
		'Default stamp: SAMPLE, bottom-right, 8% of min(width, height), opacity 45%. JPEG output uses a white matte.',
	tool_batch_watermark_product_photos_rules_item_2:
		'A short side under 64 px fails that row. Empty text disables Apply all. Decode failures skip.',
	tool_batch_watermark_product_photos_rules_item_3:
		'Diagonal DRAFT tiles the word across the frame. Duplicate ZIP names become name (2).jpg or .png.',
	tool_batch_watermark_product_photos_rules_item_4:
		'Files stay on your device and are not uploaded to a server.',
	tool_batch_watermark_product_photos_rules_title: 'Rules you should expect',
	tool_batch_watermark_product_photos_sample: 'Load sample',
	tool_batch_watermark_product_photos_status_applying: 'Stamping the batch…',
	tool_batch_watermark_product_photos_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_batch_watermark_product_photos_status_ok: 'Stamped',
	tool_batch_watermark_product_photos_status_preview: 'Preview is the first photo in the queue.',
	tool_batch_watermark_product_photos_status_skip: 'Skipped',
	tool_batch_watermark_product_photos_status_tiny: 'Too small',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} stamped · {skip} skipped',
	tool_batch_watermark_product_photos_text_label: 'Stamp text',
	tool_batch_watermark_product_photos_title: 'Batch watermark product photos',
	tool_batch_watermark_product_photos_usecase_1: 'Stamp a shop name on a folder of listing photos before they go live.',
	tool_batch_watermark_product_photos_usecase_2: 'Mark sample shots SAMPLE so a buyer cannot reuse the preview as a listing.',
	tool_batch_watermark_product_photos_usecase_3: 'Add a copyright line to several images without opening each file in Add text watermark.',
	tool_batch_watermark_product_photos_usecases_title: 'Good fits',
	tool_batch_watermark_product_photos_warn_anim: 'Animated files: only the first frame is stamped.',
	tool_batch_watermark_product_photos_warn_edge: 'A file is wider or taller than 8192 px — expect it to be slow.',
	tool_batch_watermark_product_photos_warn_large: 'A file is larger than 25 MB — this tab may run out of memory.',
};

export default en;
