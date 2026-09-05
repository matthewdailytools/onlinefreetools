/**
 * i18n tool shard (crop-pdf / en). Master locale; margin-trim title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_crop_pdf_all_sides_label: 'All sides (pt)',
  tool_crop_pdf_article:
    'Trim PDF page margins in your browser with the PDF library—uniform or per-side in points. Not a drag-and-drop pixel editor; files stay on your device.',
  tool_crop_pdf_bottom_label: 'Bottom (pt)',
  tool_crop_pdf_choose_file: 'Choose a PDF',
  tool_crop_pdf_clear: 'Clear',
  tool_crop_pdf_crop: 'Crop',
  tool_crop_pdf_desc:
    'Trim PDF page margins on your device—uniform or per-side in points; nothing uploaded to a server.',
  tool_crop_pdf_description:
    'Crop PDF page margins in your browser by tightening the CropBox—nothing is uploaded to a server. Set top/right/bottom/left margins in points (default 36 each) or one value for all sides, then download. Example: a one-page sample crops 36 pt on every side and enables Download for cropped.pdf with before/after sizes. This is not a pixel drag editor; encrypted files fail with a clear error.',
  tool_crop_pdf_download: 'Download',
  tool_crop_pdf_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_crop_pdf_empty: 'Choose a PDF file first.',
  tool_crop_pdf_err_crop: 'Crop failed. Check margins and the file, then retry.',
  tool_crop_pdf_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_crop_pdf_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_crop_pdf_err_margin:
    'Margins are too large—cropped width or height would be 10 pt or less. Lower one or more sides.',
  tool_crop_pdf_example:
    'Sample builds a one-page PDF, crops 36 pt on all sides, and enables Download for cropped.pdf with size stats.',
  tool_crop_pdf_example_title: 'Example',
  tool_crop_pdf_faq_a1:
    'No. The PDF library runs in your tab (scripts may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_crop_pdf_faq_a2:
    'This tool trims PDF page boxes by point margins—it does not let you drag a rectangle on a page preview like an image cropper.',
  tool_crop_pdf_faq_a3:
    'Correct. You enter margins in points (1/72 inch). There is no freehand box or pixel-level editing—use an image tool if you need that workflow.',
  tool_crop_pdf_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password with a tool you trust, then crop.',
  tool_crop_pdf_faq_q1: 'Is my PDF uploaded?',
  tool_crop_pdf_faq_q2: 'How is this different from cropping an image?',
  tool_crop_pdf_faq_q3: 'Is this a pixel drag editor?',
  tool_crop_pdf_faq_q4: 'What about encrypted PDFs?',
  tool_crop_pdf_how_body:
    'Choose one PDF, set margins in points (all sides or each edge), click Crop, then Download. Each page’s crop and media boxes shrink inward; viewers and printers respect the new bounds. Everything runs in this tab after the libraries load—your file is not uploaded to a server.',
  tool_crop_pdf_how_item_1: "Select the input with “Choose a PDF”",
  tool_crop_pdf_how_item_2: "Set the available options, then click “Crop”",
  tool_crop_pdf_how_item_3: "Review the preview, page count, or status message",
  tool_crop_pdf_how_item_4: "Click “Download” to save the result",
  tool_crop_pdf_how_title: 'How it works',
  tool_crop_pdf_left_label: 'Left (pt)',
  tool_crop_pdf_margins_title: 'Margins to trim (points)',
  tool_crop_pdf_pages_label: 'Pages in file',
  tool_crop_pdf_right_label: 'Right (pt)',
  tool_crop_pdf_rules_body:
    'Margin math, PDF box behavior, limits, privacy, and failure cases for local PDF cropping.',
  tool_crop_pdf_rules_item_1:
    'Units: margins are in PDF points (pt). 72 pt ≈ 1 inch. Default sample uses 36 pt (½ inch) on each side.',
  tool_crop_pdf_rules_item_2:
    'Boxes: crop and media boxes shrink inward from each edge. Origin is bottom-left per the PDF spec.',
  tool_crop_pdf_rules_item_3:
    'Safety: if cropped width or height would be ≤ 10 pt, the tool rejects the settings before saving.',
  tool_crop_pdf_rules_item_4:
    'Privacy & limits: bytes stay in the tab; encrypted/corrupt PDFs fail clearly; huge files may be slow in memory.',
  tool_crop_pdf_rules_title: 'Rules you should expect',
  tool_crop_pdf_sample: 'Load sample',
  tool_crop_pdf_stats_page_tpl: 'Page {n}: {ow}×{oh} pt → {nw}×{nh} pt',
  tool_crop_pdf_stats_tpl: '{pages} · {bytes}',
  tool_crop_pdf_status_cropping: 'Cropping PDF…',
  tool_crop_pdf_status_done: 'Done — click Download to save cropped.pdf.',
  tool_crop_pdf_title: 'Crop PDF — Trim Page Margins in Your Browser',
  tool_crop_pdf_top_label: 'Top (pt)',
  tool_crop_pdf_uniform_hint: 'Changing “All sides” updates every edge; you can still fine-tune each side.',
  tool_crop_pdf_usecase_1: 'Office: remove scanner white borders before printing or archiving.',
  tool_crop_pdf_usecase_2: 'Students: tighten handout margins so more content fits on screen.',
  tool_crop_pdf_usecase_3: 'Site owners: batch-trim the same margin on a one-page flyer export.',
  tool_crop_pdf_usecases_title: 'Good fits',
  tool_crop_pdf_warn_large: 'File larger than ~25 MB — cropping may be slow or fail in some browsers.',
  tool_crop_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
