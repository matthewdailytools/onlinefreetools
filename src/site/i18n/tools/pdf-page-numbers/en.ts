/**
 * i18n tool shard (pdf-page-numbers / en). Master locale; page-numbering intent title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_pdf_page_numbers_add: 'Add numbers',
  tool_pdf_page_numbers_article:
    'Stamp page numbers on every PDF page in your browser with the PDF library. Pick a corner or center, set start number and margin—files never leave your device.',
  tool_pdf_page_numbers_choose_file: 'Choose a PDF',
  tool_pdf_page_numbers_clear: 'Clear',
  tool_pdf_page_numbers_desc:
    'Add page numbers to a PDF in your browser—pick position and start number; files stay on your device, not uploaded to a server.',
  tool_pdf_page_numbers_description:
    'Add page numbers to a PDF in your browser—nothing is uploaded to a server. Steps: open a PDF, choose bottom-center or a corner, set the first number (default 1), margin, and font size, optionally use “Page N” format, add numbers, then download. Example: a three-page sample loads with bottom-center numbers starting at 1 and enables Download for numbered.pdf. Encrypted files fail with a clear error.',
  tool_pdf_page_numbers_download: 'Download',
  tool_pdf_page_numbers_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_pdf_page_numbers_empty: 'Choose a PDF file first.',
  tool_pdf_page_numbers_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_pdf_page_numbers_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_pdf_page_numbers_err_number: 'Page numbering failed. Check the file and settings, then retry.',
  tool_pdf_page_numbers_example:
    'Sample builds a three-page PDF, adds bottom-center numbers starting at 1 on every page, and enables Download for numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'Example',
  tool_pdf_page_numbers_faq_a1:
    'No. The PDF library runs in your tab (scripts load from this site). Your PDF is not uploaded to our servers.',
  tool_pdf_page_numbers_faq_a2:
    'Yes—set “Start at” to the number you want on page 1 (e.g. 0 for a cover that should not count, or 5 if earlier pages were removed elsewhere). Every following page increments by 1.',
  tool_pdf_page_numbers_faq_a3:
    'Pick plain numbers (1, 2, 3…) or “Page N” labels. Position, margin (pt), and font size apply to every page the same way.',
  tool_pdf_page_numbers_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password with a tool you trust, then add numbers.',
  tool_pdf_page_numbers_faq_q1: 'Is my PDF uploaded?',
  tool_pdf_page_numbers_faq_q2: 'Can I start numbering after a cover page?',
  tool_pdf_page_numbers_faq_q3: 'What formats and positions are supported?',
  tool_pdf_page_numbers_faq_q4: 'What about encrypted PDFs?',
  tool_pdf_page_numbers_font_size_label: 'Font size (pt)',
  tool_pdf_page_numbers_format_label: 'Format',
  tool_pdf_page_numbers_format_number: 'Number only',
  tool_pdf_page_numbers_format_page_n: 'Page N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Page {n}',
  tool_pdf_page_numbers_how_body:
    'Choose one PDF, pick a position (bottom-center by default), set the first page number, margin, and font size, click Add numbers, then Download. Numbers are drawn on every page with drawText. Libraries load on first use.',
  tool_pdf_page_numbers_how_item_1: "Select the input with “Choose a PDF”",
  tool_pdf_page_numbers_how_item_2: "Set the available options, then click “Add numbers”",
  tool_pdf_page_numbers_how_item_3: "Review the preview, page count, or status message",
  tool_pdf_page_numbers_how_item_4: "Click “Download” to save the result",
  tool_pdf_page_numbers_how_title: 'How it works',
  tool_pdf_page_numbers_margin_label: 'Margin (pt)',
  tool_pdf_page_numbers_pages_label: 'Pages in file',
  tool_pdf_page_numbers_position_bc: 'Bottom center',
  tool_pdf_page_numbers_position_bl: 'Bottom left',
  tool_pdf_page_numbers_position_br: 'Bottom right',
  tool_pdf_page_numbers_position_label: 'Position',
  tool_pdf_page_numbers_position_tc: 'Top center',
  tool_pdf_page_numbers_position_tl: 'Top left',
  tool_pdf_page_numbers_position_tr: 'Top right',
  tool_pdf_page_numbers_rules_body:
    'Numbering positions, start value, format, privacy, and failure cases for local PDF page numbers.',
  tool_pdf_page_numbers_rules_item_1:
    'Position: bottom-center (default), bottom/top center, or any corner. Margin is in PDF points (default 24 pt).',
  tool_pdf_page_numbers_rules_item_2:
    'Start at: first visible number on page 1 of the file (default 1). Each next page adds 1—useful after deleting pages in Organize PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'Format: plain digit or “Page N”. Font size default 12 pt. Output is a new PDF; original bytes are not sent to a server.',
  tool_pdf_page_numbers_rules_item_4:
    'Limits: encrypted or corrupt PDFs fail clearly; files over ~25 MB may be slow; numbers are burned in—removal needs the original.',
  tool_pdf_page_numbers_rules_title: 'Rules you should expect',
  tool_pdf_page_numbers_sample: 'Load sample',
  tool_pdf_page_numbers_start_at_label: 'Start at',
  tool_pdf_page_numbers_stats_tpl: '{n} page(s) numbered · {bytes}',
  tool_pdf_page_numbers_status_done: 'Done — click Download to save numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'Adding page numbers…',
  tool_pdf_page_numbers_title: 'Add Page Numbers to PDF — In Your Browser',
  tool_pdf_page_numbers_usecase_1: 'Office: number a report before printing so colleagues can cite “page 12”.',
  tool_pdf_page_numbers_usecase_2: 'Students: add 1–N footer numbers to a thesis export after merging chapters.',
  tool_pdf_page_numbers_usecase_3: 'Site owners: stamp page numbers on handouts downloaded from Organize PDF or watermark drafts.',
  tool_pdf_page_numbers_usecases_title: 'Good fits',
  tool_pdf_page_numbers_warn_large: 'File larger than ~25 MB — numbering may be slow or fail in some browsers.',
  tool_pdf_page_numbers_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
