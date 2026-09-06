/**
 * i18n tool shard（split-pdf / en）。母版语；结果向 title，禁参数枚举。
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_split_pdf_article:
    'Split a PDF into separate files by page or page ranges with client-side pdf-lib. Multiple outputs download as a ZIP via fflate—files never leave your device.',
  tool_split_pdf_choose_file: 'Choose a PDF',
  tool_split_pdf_clear: 'Clear',
  tool_split_pdf_desc: 'Extract pages from a PDF on your device—every page or custom ranges, ZIP when needed; nothing uploaded to a server.',
  tool_split_pdf_description:
    'Split a PDF in your browser and download separate pages or ranges—nothing is uploaded to a server. Steps: choose a PDF, pick every page or enter ranges like 1-3,5, split, then download. Example: a three-page sample becomes a ZIP of page-1.pdf through page-3.pdf. One range that yields a single file downloads as PDF directly. Encrypted files fail with a clear error.',
  tool_split_pdf_download: 'Download',
  tool_split_pdf_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_split_pdf_empty: 'Choose a PDF file first.',
  tool_split_pdf_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_split_pdf_err_fflate: 'ZIP library failed to load. Check your network and retry.',
  tool_split_pdf_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_split_pdf_err_range: 'Invalid or out-of-range pages. Use 1-based ranges like 1-3,5.',
  tool_split_pdf_err_split: 'Split failed. Check the file and ranges, then retry.',
  tool_split_pdf_example:
    'Sample builds a three-page PDF, splits every page, and enables Download for a ZIP with page-1.pdf, page-2.pdf, and page-3.pdf.',
  tool_split_pdf_example_title: 'Split my PDF',
  tool_split_pdf_faq_a1:
    'No. pdf-lib and fflate run in your tab (scripts load from this site). Your PDF is not uploaded to our servers.',
  tool_split_pdf_faq_a2:
    'Use 1-based pages: 1-3,5 means pages 1–3 and page 5. Spaces are optional. Empty or out-of-range values fail.',
  tool_split_pdf_faq_a3:
    'If the split produces more than one file, you get a ZIP. A single output file downloads as a PDF.',
  tool_split_pdf_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password with a tool you trust, then split.',
  tool_split_pdf_faq_a5:
    'Merge PDF joins multiple PDFs into one. This tool extracts pages from a single PDF into separate files.',
  tool_split_pdf_faq_q1: 'Is my PDF uploaded?',
  tool_split_pdf_faq_q2: 'How do page ranges work?',
  tool_split_pdf_faq_q3: 'When do I get a ZIP vs a PDF?',
  tool_split_pdf_faq_q4: 'What about encrypted PDFs?',
  tool_split_pdf_faq_q5: 'How is this different from Merge PDF?',
  tool_split_pdf_how_body:
    'Choose one PDF, select every page or enter ranges, click Split, then Download. Multiple outputs pack into a ZIP; a single output is a PDF. Everything runs locally after the libraries load.',
  tool_split_pdf_how_item_1: "Select the input with “Choose a PDF”",
  tool_split_pdf_how_item_2: "Set the available options, then click “Split”",
  tool_split_pdf_how_item_3: "Review the preview, page count, or status message",
  tool_split_pdf_how_item_4: "Click “Download” to save the result",
  tool_split_pdf_how_title: 'How it works',
  tool_split_pdf_mode_every: 'Every page (one file per page)',
  tool_split_pdf_mode_label: 'Split mode',
  tool_split_pdf_mode_ranges: 'Custom page ranges',
  tool_split_pdf_pages_label: 'Pages in file',
  tool_split_pdf_ranges_hint: 'Example: 1-3,5 (1-based)',
  tool_split_pdf_ranges_label: 'Page ranges',
  tool_split_pdf_rules_body:
    '1-based ranges, naming, ZIP vs PDF output, privacy, and failure cases for local PDF splits.',
  tool_split_pdf_rules_item_1:
    'Modes: every page → one PDF per page; ranges → one PDF per comma-separated segment (e.g. 1-3 and 5).',
  tool_split_pdf_rules_item_2:
    'Names: page-N.pdf for single pages; pages-A-B.pdf for a contiguous range segment.',
  tool_split_pdf_rules_item_3:
    'Output: more than one file → ZIP via fflate; exactly one file → download that PDF.',
  tool_split_pdf_rules_item_4:
    'Privacy & limits: bytes stay in the tab; encrypted/corrupt PDFs fail clearly; huge files may be slow in memory.',
  tool_split_pdf_rules_title: 'Rules you should expect',
  tool_split_pdf_sample: 'Load sample',
  tool_split_pdf_split: 'Split',
  tool_split_pdf_stats_tpl: '{n} file(s) · {bytes}',
  tool_split_pdf_status_done: 'Done — click Download to save.',
  tool_split_pdf_status_splitting: 'Splitting PDF…',
  tool_split_pdf_title: 'Split my PDF',
  tool_split_pdf_usecase_1: 'Office: pull one signed page out of a long contract PDF.',
  tool_split_pdf_usecase_2: 'Teaching: split a slide deck PDF into per-page handouts.',
  tool_split_pdf_usecase_3: 'Ops: archive each scanned page as its own file.',
  tool_split_pdf_usecases_title: 'Good fits',
  tool_split_pdf_warn_large: 'File larger than ~25 MB — split may be slow or fail in some browsers.',
  tool_split_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
