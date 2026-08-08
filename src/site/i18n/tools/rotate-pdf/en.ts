/**
 * i18n tool shard (rotate-pdf / en). Master locale; orientation-first title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° counter-clockwise',
  tool_rotate_pdf_angle_90cw: '90° clockwise',
  tool_rotate_pdf_angle_label: 'Rotation',
  tool_rotate_pdf_article:
    'Fix sideways or upside-down PDF pages in your browser with the PDF library. Rotate all pages or selected ranges—files never leave your device.',
  tool_rotate_pdf_choose_file: 'Choose a PDF',
  tool_rotate_pdf_clear: 'Clear',
  tool_rotate_pdf_desc:
    'Fix PDF page orientation on your device—rotate all pages or a range; nothing uploaded to a server.',
  tool_rotate_pdf_description:
    'Rotate PDF pages in your browser to fix landscape/portrait mix-ups—nothing is uploaded to a server. Steps: choose a PDF, pick all pages or ranges like 1-3,5, select 90° clockwise, 180°, or 90° counter-clockwise, rotate, then download. Example: a two-page sample rotates all pages 90° clockwise and enables Download for rotated.pdf. Encrypted files fail with a clear error.',
  tool_rotate_pdf_download: 'Download',
  tool_rotate_pdf_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_rotate_pdf_empty: 'Choose a PDF file first.',
  tool_rotate_pdf_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_rotate_pdf_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_rotate_pdf_err_range: 'Invalid or out-of-range pages. Use 1-based ranges like 1-3,5.',
  tool_rotate_pdf_err_rotate: 'Rotation failed. Check the file and ranges, then retry.',
  tool_rotate_pdf_example:
    'Sample builds a two-page PDF, rotates every page 90° clockwise, and enables Download for rotated.pdf.',
  tool_rotate_pdf_example_title: 'Example',
  tool_rotate_pdf_faq_a1:
    'No. The PDF library runs in your tab (scripts may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_rotate_pdf_faq_a2:
    'Yes—the new file keeps the rotated orientation. Re-open it in a viewer to confirm before sharing.',
  tool_rotate_pdf_faq_a3:
    'Use 1-based pages: 1-3,5 means pages 1–3 and page 5. Spaces are optional. Empty or out-of-range values fail.',
  tool_rotate_pdf_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password with a tool you trust, then rotate.',
  tool_rotate_pdf_faq_q1: 'Is my PDF uploaded?',
  tool_rotate_pdf_faq_q2: 'Does rotation change the file permanently?',
  tool_rotate_pdf_faq_q3: 'How do page ranges work?',
  tool_rotate_pdf_faq_q4: 'What about encrypted PDFs?',
  tool_rotate_pdf_how_body:
    'Choose one PDF, select all pages or enter ranges, pick a rotation angle, click Rotate, then Download. Rotation adds to any existing page angle. Everything runs in this tab after the libraries load—your file is not uploaded to a server.',
  tool_rotate_pdf_how_title: 'How it works',
  tool_rotate_pdf_mode_all: 'All pages',
  tool_rotate_pdf_mode_label: 'Pages to rotate',
  tool_rotate_pdf_mode_ranges: 'Custom page ranges',
  tool_rotate_pdf_pages_label: 'Pages in file',
  tool_rotate_pdf_ranges_hint: 'Example: 1-3,5 (1-based)',
  tool_rotate_pdf_ranges_label: 'Page ranges',
  tool_rotate_pdf_rotate: 'Rotate',
  tool_rotate_pdf_rules_body:
    'Angles, cumulative rotation, range syntax, privacy, and failure cases for local PDF rotation.',
  tool_rotate_pdf_rules_item_1:
    'Angles: 90° clockwise, 180°, or 90° counter-clockwise (270°). Each choice adds to the page’s current rotation.',
  tool_rotate_pdf_rules_item_2:
    'Pages: all pages, or 1-based ranges like 1-3,5 (same syntax as Split PDF).',
  tool_rotate_pdf_rules_item_3:
    'Output: one PDF with selected pages re-oriented; unlisted pages keep their original angle.',
  tool_rotate_pdf_rules_item_4:
    'Privacy & limits: bytes stay in the tab; encrypted/corrupt PDFs fail clearly; huge files may be slow in memory.',
  tool_rotate_pdf_rules_title: 'Rules you should expect',
  tool_rotate_pdf_sample: 'Load sample',
  tool_rotate_pdf_stats_tpl: '{n} page(s) rotated · {bytes}',
  tool_rotate_pdf_status_done: 'Done — click Download to save rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'Rotating PDF…',
  tool_rotate_pdf_title: 'Rotate PDF — Fix Page Orientation in Your Browser',
  tool_rotate_pdf_usecase_1: 'Office: turn a sideways scan upright before printing or emailing.',
  tool_rotate_pdf_usecase_2: 'Students: fix phone photos of slides mixed landscape and portrait.',
  tool_rotate_pdf_usecase_3: 'Site owners: batch-fix one wrong page in a handout without re-scanning.',
  tool_rotate_pdf_usecases_title: 'Good fits',
  tool_rotate_pdf_warn_large: 'File larger than ~25 MB — rotation may be slow or fail in some browsers.',
  tool_rotate_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
