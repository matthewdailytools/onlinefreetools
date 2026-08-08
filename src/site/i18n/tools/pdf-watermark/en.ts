/**
 * i18n tool shard (pdf-watermark / en). Master locale; stamp-on-every-page title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_pdf_watermark_apply: 'Apply watermark',
  tool_pdf_watermark_article:
    'Stamp DRAFT, CONFIDENTIAL, or custom text on every PDF page in your browser with the PDF library. Optional PNG/JPG logo overlay—files never leave your device.',
  tool_pdf_watermark_choose_file: 'Choose PDF',
  tool_pdf_watermark_clear: 'Clear',
  tool_pdf_watermark_desc:
    'Stamp text on every PDF page in your browser—files stay on your device, not uploaded to a server.',
  tool_pdf_watermark_description:
    'Add a text watermark to every page of a PDF in your browser—nothing is uploaded to a server. Steps: open a PDF, enter stamp text (e.g. DRAFT), set opacity and angle, optionally add a PNG/JPG logo, apply, then download. Example: a two-page sample loads with text DRAFT at center, −45° rotation, and enables Download for watermarked.pdf. Encrypted files fail with a clear error. Differs from Add Watermark (photos) and Rotate PDF (orientation).',
  tool_pdf_watermark_download: 'Download',
  tool_pdf_watermark_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_pdf_watermark_empty: 'Add a PDF to watermark.',
  tool_pdf_watermark_err_apply: 'Watermark failed. Check the file and settings, then retry.',
  tool_pdf_watermark_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_pdf_watermark_err_image: 'Could not read the image. Use PNG or JPG.',
  tool_pdf_watermark_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_pdf_watermark_example:
    'Sample builds a two-page PDF, applies text DRAFT at center with 35% opacity and −45° rotation on every page, and enables Download for watermarked.pdf.',
  tool_pdf_watermark_example_title: 'Example',
  tool_pdf_watermark_faq_a1:
    'No. The PDF library runs in your tab (scripts may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_pdf_watermark_faq_a2:
    'Add Watermark overlays text or logos on photos in the browser. This tool stamps every page of a PDF document—use both when you need image edits vs document drafts.',
  tool_pdf_watermark_faq_a3:
    'No. Watermarks are burned into the page content when you download. Removing them needs the original file or heavy editing—not something this tool reverses.',
  tool_pdf_watermark_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password with a tool you trust, then watermark.',
  tool_pdf_watermark_faq_a5:
    'Yes—pick a PNG or JPG. It scales to roughly one-third of the page and uses the same position, opacity, and rotation as the text stamp.',
  tool_pdf_watermark_faq_q1: 'Is my PDF uploaded?',
  tool_pdf_watermark_faq_q2: 'How is this different from the image Add Watermark tool?',
  tool_pdf_watermark_faq_q3: 'Can I remove a watermark later?',
  tool_pdf_watermark_faq_q4: 'What about encrypted PDFs?',
  tool_pdf_watermark_faq_q5: 'Can I add a logo image?',
  tool_pdf_watermark_how_body:
    'Choose one PDF, enter stamp text, adjust opacity and rotation, pick a position, optionally attach a PNG/JPG logo, click Apply, then Download. Every page gets the same overlay. Libraries load on first use.',
  tool_pdf_watermark_how_title: 'How it works',
  tool_pdf_watermark_image_hint: 'Optional PNG/JPG logo (same position as text).',
  tool_pdf_watermark_image_label: 'Image watermark (optional)',
  tool_pdf_watermark_opacity_label: 'Opacity',
  tool_pdf_watermark_pages_label: 'Pages',
  tool_pdf_watermark_position_bl: 'Bottom left',
  tool_pdf_watermark_position_br: 'Bottom right',
  tool_pdf_watermark_position_center: 'Center',
  tool_pdf_watermark_position_label: 'Position',
  tool_pdf_watermark_position_tl: 'Top left',
  tool_pdf_watermark_position_tr: 'Top right',
  tool_pdf_watermark_rotation_label: 'Rotation (degrees)',
  tool_pdf_watermark_rules_body:
    'Text/image overlays, position and opacity rules, privacy, and failure cases for local PDF watermarking.',
  tool_pdf_watermark_rules_item_1:
    'Text: Helvetica stamp on every page via drawText; default sample uses DRAFT at center, 35% opacity, −45°.',
  tool_pdf_watermark_rules_item_2:
    'Image: optional PNG/JPG embeds with embedPng/embedJpg, scaled to ~35% of page width/height, same position/opacity/rotation.',
  tool_pdf_watermark_rules_item_3:
    'Positions: center or corners; opacity 0.1–1; rotation −180° to 180°. Output is a new PDF—original bytes are not sent to a server.',
  tool_pdf_watermark_rules_item_4:
    'Limits: encrypted or corrupt PDFs fail clearly; files over ~25 MB may be slow; watermark removal is not supported.',
  tool_pdf_watermark_rules_title: 'Rules you should expect',
  tool_pdf_watermark_sample: 'Load sample',
  tool_pdf_watermark_stats_tpl: '{pages} page(s) watermarked · {bytes}',
  tool_pdf_watermark_status_done: 'Done — click Download to save watermarked.pdf.',
  tool_pdf_watermark_status_working: 'Applying watermark…',
  tool_pdf_watermark_text_label: 'Watermark text',
  tool_pdf_watermark_title: 'PDF Watermark — Stamp Text on Every Page in Your Browser',
  tool_pdf_watermark_usecase_1: 'Legal/ops: mark contract drafts CONFIDENTIAL before external review.',
  tool_pdf_watermark_usecase_2: 'Students: stamp DRAFT on thesis chapters shared for feedback.',
  tool_pdf_watermark_usecase_3: 'Site owners: brand preview PDFs with a semi-transparent logo on every page.',
  tool_pdf_watermark_usecases_title: 'Good fits',
  tool_pdf_watermark_warn_large: 'This file is larger than ~25 MB — watermarking may be slow or fail in some browsers.',
  tool_pdf_watermark_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
