/**
 * i18n tool shard (pdf-to-jpg / en). Master locale; result-oriented title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'Render each PDF page to JPEG in your browser with the page renderer. Multiple pages download as a ZIP via the ZIP library—your file never leaves the device.',
  tool_pdf_to_jpg_choose_file: 'Choose a PDF',
  tool_pdf_to_jpg_clear: 'Clear',
  tool_pdf_to_jpg_convert: 'Convert',
  tool_pdf_to_jpg_desc: 'Turn PDF pages into JPG images on your device—ZIP when there are many pages; nothing uploaded to a server.',
  tool_pdf_to_jpg_description:
    'Convert PDF pages to JPG images in your browser—files stay on your device and are not uploaded to a server. Steps: choose a PDF, click Convert, then Download. Example: a two-page sample becomes page-1.jpg and page-2.jpg inside a ZIP. A single-page PDF downloads one JPG directly. Password-protected or damaged files show a clear error.',
  tool_pdf_to_jpg_download: 'Download',
  tool_pdf_to_jpg_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_pdf_to_jpg_empty: 'Choose a PDF file first.',
  tool_pdf_to_jpg_err_convert: 'Conversion failed. Check the file and retry.',
  tool_pdf_to_jpg_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_pdf_to_jpg_err_fflate: 'ZIP library failed to load. Check your network and retry.',
  tool_pdf_to_jpg_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_pdf_to_jpg_err_pdfjs: 'PDF renderer failed to load. Check your network and retry.',
  tool_pdf_to_jpg_example:
    'Sample builds a two-page PDF, converts every page, and enables Download for a ZIP with page-1.jpg and page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'Example',
  tool_pdf_to_jpg_faq_a1:
    'No. the page renderer and the ZIP library run in your tab (scripts may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_pdf_to_jpg_faq_a2:
    'More than one page → a ZIP named pdf-pages.zip with page-1.jpg, page-2.jpg, and so on. Exactly one page → a single JPG file.',
  tool_pdf_to_jpg_faq_a3:
    'Images to PDF combines photos into one multi-page PDF. This tool exports each PDF page as a separate JPG image.',
  tool_pdf_to_jpg_faq_a4:
    'Pages render at 2× scale for sharper text on screen and in chat apps. Very large PDFs may take longer or use more memory.',
  tool_pdf_to_jpg_faq_a5:
    'This page outputs JPG only. Use Image Format Converter if you need PNG or WebP from an existing image file.',
  tool_pdf_to_jpg_faq_q1: 'Is my PDF uploaded?',
  tool_pdf_to_jpg_faq_q2: 'When do I get a ZIP vs one JPG?',
  tool_pdf_to_jpg_faq_q3: 'How is this different from Images to PDF?',
  tool_pdf_to_jpg_faq_q4: 'Why do the JPGs look soft or sharp?',
  tool_pdf_to_jpg_faq_q5: 'Can I get PNG instead?',
  tool_pdf_to_jpg_how_body:
    'Choose one PDF, click Convert, then Download. Each page becomes a JPG; multiple pages pack into a ZIP. Everything runs in this tab after the libraries load—your file is not uploaded to a server.',
  tool_pdf_to_jpg_how_title: 'How it works',
  tool_pdf_to_jpg_pages_label: 'Pages',
  tool_pdf_to_jpg_rules_body:
    'Rendering scale, JPG output, ZIP vs single file, privacy, and failure cases for local PDF-to-JPG conversion.',
  tool_pdf_to_jpg_rules_item_1:
    'Each page renders to JPEG at 2× scale with quality 0.92—good balance for slides, scans, and contracts.',
  tool_pdf_to_jpg_rules_item_2:
    'Naming: page-N.jpg for page N. Multi-page jobs download as pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3:
    'Output: one page → single JPG download; two or more pages → ZIP via the ZIP library.',
  tool_pdf_to_jpg_rules_item_4:
    'Privacy & limits: bytes stay in the tab; encrypted/corrupt PDFs fail clearly; files above ~25 MB may be slow.',
  tool_pdf_to_jpg_rules_title: 'Rules you should expect',
  tool_pdf_to_jpg_sample: 'Load sample',
  tool_pdf_to_jpg_stats_tpl: '{n} page(s) · {bytes}',
  tool_pdf_to_jpg_status_converting: 'Converting pages to JPG…',
  tool_pdf_to_jpg_status_done: 'Done — click Download to save.',
  tool_pdf_to_jpg_title: 'PDF to JPG — Convert Pages to Images in Your Browser',
  tool_pdf_to_jpg_usecase_1: 'Office: export a slide or signed page to paste into chat or email.',
  tool_pdf_to_jpg_usecase_2: 'Marketing: pull product pages from a catalog PDF as JPG thumbnails.',
  tool_pdf_to_jpg_usecase_3: 'Students: save lecture PDF pages as images for notes apps.',
  tool_pdf_to_jpg_usecases_title: 'Good fits',
  tool_pdf_to_jpg_warn_large: 'File larger than ~25 MB — conversion may be slow or fail in some browsers.',
  tool_pdf_to_jpg_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
