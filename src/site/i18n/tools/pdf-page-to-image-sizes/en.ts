/**
 * i18n tool shard (pdf-page-to-image-sizes / en). Master locale; result-oriented title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'Pick one PDF page and export it as a ZIP of social-ready JPEG sizes—1080 square, OG 1200×630, HD 1280×720, and story 1080×1920. the page renderer renders once; Canvas fits each preset with white letterboxing.',
  tool_pdf_page_to_image_sizes_choose_file: 'Choose a PDF',
  tool_pdf_page_to_image_sizes_clear: 'Clear',
  tool_pdf_page_to_image_sizes_desc:
    'Export one PDF page as a multi-size JPEG pack on your device—ZIP download; nothing uploaded to a server.',
  tool_pdf_page_to_image_sizes_description:
    'Turn one PDF page into a multi-size JPEG pack in your browser—files stay on your device and are not uploaded to a server. Choose a PDF, set the page number (default 1), click Export, then Download a ZIP with page-N-WxH.jpg files. Example: the sample cover page exports four presets (1080², 1200×630, 1280×720, 1080×1920). Password-protected or damaged PDFs show a clear error.',
  tool_pdf_page_to_image_sizes_download: 'Download',
  tool_pdf_page_to_image_sizes_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_pdf_page_to_image_sizes_empty: 'Choose a PDF file first.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'Page number is out of range. Check total pages and try again.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_pdf_page_to_image_sizes_err_export: 'Export failed. Check the file and page number, then retry.',
  tool_pdf_page_to_image_sizes_err_fflate: 'ZIP library failed to load. Check your network and retry.',
  tool_pdf_page_to_image_sizes_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'PDF renderer failed to load. Check your network and retry.',
  tool_pdf_page_to_image_sizes_example:
    'Sample builds a one-page PDF, exports page 1 to four JPEG presets, and enables Download for page-1-sizes.zip with page-1-1080x1080.jpg through page-1-1080x1920.jpg.',
  tool_pdf_page_to_image_sizes_example_title: 'Example',
  tool_pdf_page_to_image_sizes_export: 'Export',
  tool_pdf_page_to_image_sizes_faq_a1:
    'No. the page renderer, the PDF library, and the ZIP library run in your tab (scripts load from this site). Your PDF is not uploaded to our servers.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF to JPG exports every page at its native aspect ratio. This tool picks one page and fits it into fixed platform sizes (contain, centered, white bars if needed).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (Instagram square), 1200×630 (Open Graph / Facebook link preview), 1280×720 (HD landscape), 1080×1920 (story / vertical feed).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'The page is scaled down (or up) to fit inside each box without cropping. Empty space is filled with white so JPEG output stays clean.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'Files above ~25 MB may be slow or fail in some browsers. Very complex pages use more memory during rendering.',
  tool_pdf_page_to_image_sizes_faq_q1: 'Is my PDF uploaded?',
  tool_pdf_page_to_image_sizes_faq_q2: 'How is this different from PDF to JPG?',
  tool_pdf_page_to_image_sizes_faq_q3: 'Which sizes are included?',
  tool_pdf_page_to_image_sizes_faq_q4: 'Why is there white space around the image?',
  tool_pdf_page_to_image_sizes_faq_q5: 'Any file size limits?',
  tool_pdf_page_to_image_sizes_how_body:
    'Choose a PDF, enter the page number (1-based), click Export, then Download. One page renders once, then fits into each preset canvas and packs into a ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'How it works',
  tool_pdf_page_to_image_sizes_page_label: 'Page number',
  tool_pdf_page_to_image_sizes_pages_label: 'Pages',
  tool_pdf_page_to_image_sizes_rules_body:
    'Preset sizes, contain-fit behavior, JPEG output, ZIP naming, privacy, and failure cases for local multi-size export.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Presets: 1080×1080 (instagram-square), 1200×630 (og-facebook), 1280×720 (hd-landscape), 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'Render the chosen page once at 2× scale, then drawImage contain-centered onto each target canvas; JPEG quality 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'ZIP filenames: page-{N}-{W}x{H}.jpg (example: page-1-1200x630.jpg). Archive: page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'Privacy & limits: bytes stay in the tab; encrypted/corrupt PDFs fail clearly; files above ~25 MB may be slow.',
  tool_pdf_page_to_image_sizes_rules_title: 'Rules you should expect',
  tool_pdf_page_to_image_sizes_sample: 'Load sample',
  tool_pdf_page_to_image_sizes_stats_tpl: 'Page {page} · {n} sizes · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'Done — click Download to save the ZIP.',
  tool_pdf_page_to_image_sizes_status_exporting: 'Rendering page and building size pack…',
  tool_pdf_page_to_image_sizes_title: 'PDF Page to Image Sizes — Multi-Size Export Pack',
  tool_pdf_page_to_image_sizes_usecase_1: 'Social ops: turn a poster PDF page into IG square, OG, and story assets in one ZIP.',
  tool_pdf_page_to_image_sizes_usecase_2: 'Site owners: export a cover slide to 1200×630 for link previews without manual cropping.',
  tool_pdf_page_to_image_sizes_usecase_3: 'Students: save one lecture slide at phone-friendly sizes for notes apps.',
  tool_pdf_page_to_image_sizes_usecases_title: 'Good fits',
  tool_pdf_page_to_image_sizes_warn_large: 'File larger than ~25 MB — export may be slow or fail in some browsers.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
