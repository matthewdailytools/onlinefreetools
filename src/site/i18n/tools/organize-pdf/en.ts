/**
 * i18n tool shard（organize-pdf / en）。母版语；title 结果向。
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_organize_pdf_article:
    'Reorder, remove, or keep selected pages from one PDF in your browser—files stay on your device, not on a server.',
  tool_organize_pdf_apply: 'Apply',
  tool_organize_pdf_choose_file: 'Choose PDF',
  tool_organize_pdf_clear: 'Clear',
  tool_organize_pdf_desc:
    'Reorder or remove PDF pages in your browser—files stay on your device, not uploaded to a server.',
  tool_organize_pdf_description:
    'Organize a PDF in your browser: reorder pages, delete blanks, or keep only the pages you need, then download one file—nothing is uploaded to a server. Steps: open a PDF, rearrange the page list, remove unwanted rows, click Apply, then Download. Example: a three-page sample with the middle page removed becomes a two-page PDF. Encrypted files fail with a clear error. Differs from Merge (many files→one) and Split (one→many files).',
  tool_organize_pdf_download: 'Download',
  tool_organize_pdf_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_organize_pdf_empty: 'Add a PDF with at least one page left in the list.',
  tool_organize_pdf_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_organize_pdf_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_organize_pdf_err_organize: 'Organize failed. Check the file and page list, then retry.',
  tool_organize_pdf_example:
    'Sample loads a three-page PDF labeled 1–3, removes page 2, applies the new order, and enables Download for a two-page organized.pdf.',
  tool_organize_pdf_example_title: 'Example',
  tool_organize_pdf_faq_a1:
    'No. The PDF library runs in your tab (the library may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_organize_pdf_faq_a2:
    'Merge combines several PDFs into one. Split exports pages as separate files (or a ZIP). Organize edits page order inside a single PDF and downloads one file.',
  tool_organize_pdf_faq_a3:
    'Yes—use Up/Down on each page row. Apply copies pages in list order from top to bottom.',
  tool_organize_pdf_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password first, then organize.',
  tool_organize_pdf_faq_a5: 'Use Remove on a row, or uncheck Include before Apply. Empty lists are rejected.',
  tool_organize_pdf_faq_q1: 'Is my PDF uploaded?',
  tool_organize_pdf_faq_q2: 'How is this different from Merge or Split?',
  tool_organize_pdf_faq_q3: 'Can I change page order?',
  tool_organize_pdf_faq_q4: 'What about encrypted PDFs?',
  tool_organize_pdf_faq_q5: 'How do I delete pages?',
  tool_organize_pdf_how_body:
    'Choose one PDF, reorder or remove pages in the list, click Apply, then Download. Output page order follows the list. Everything runs in this tab after the PDF library loads.',
  tool_organize_pdf_how_item_1: "Select the input with “Choose PDF”",
  tool_organize_pdf_how_item_2: "Set the available options, then click “Apply”",
  tool_organize_pdf_how_item_3: "Review the preview, page count, or status message",
  tool_organize_pdf_how_item_4: "Click “Download” to save the result",
  tool_organize_pdf_how_title: 'How it works',
  tool_organize_pdf_include: 'Include',
  tool_organize_pdf_move_down: 'Down',
  tool_organize_pdf_move_up: 'Up',
  tool_organize_pdf_page_label: 'Page {n}',
  tool_organize_pdf_pages_label: 'Pages',
  tool_organize_pdf_remove: 'Remove',
  tool_organize_pdf_rules_body:
    'How list order, include flags, page order, privacy, and failures work when you organize a PDF in your browser.',
  tool_organize_pdf_rules_item_1:
    'Order: Apply copies included pages in list order (top first). Reorder with Up/Down before Apply.',
  tool_organize_pdf_rules_item_2:
    'Include vs Remove: unchecked rows are skipped; Remove deletes the row from the list entirely.',
  tool_organize_pdf_rules_item_3:
    'Engine: pages are copied into a new document—no server round-trip for your file bytes.',
  tool_organize_pdf_rules_item_4:
    'Limits: need ≥1 included page; encrypted or corrupt PDFs fail with a readable error; very large files may be slow in memory.',
  tool_organize_pdf_rules_title: 'Rules you should expect',
  tool_organize_pdf_sample: 'Load sample',
  tool_organize_pdf_stats_tpl: '{from} → {to} pages · {bytes}',
  tool_organize_pdf_status_done: 'Done — click Download to save organized.pdf.',
  tool_organize_pdf_status_working: 'Organizing PDF…',
  tool_organize_pdf_title: 'Organize PDF — Reorder or Remove Pages in Your Browser',
  tool_organize_pdf_usecase_1: 'Office: drop blank scanned pages before sending a packet.',
  tool_organize_pdf_usecase_2: 'Students: put chapters in the right order before submission.',
  tool_organize_pdf_usecase_3: 'Ops: keep only the pages that matter for a handoff PDF.',
  tool_organize_pdf_usecases_title: 'Good fits',
  tool_organize_pdf_warn_large: 'This file is larger than ~25 MB — organize may be slow or fail in some browsers.',
  tool_organize_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
