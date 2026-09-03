/**
 * i18n tool shard（merge-pdf / en）。仅编辑本工具键；母版语。
 * 中文注释：title/desc 结果向，禁参数枚举副标题。
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_merge_pdf_article:
    'Merge several PDFs in list order with client-side pdf-lib—files never leave your device. Reorder files, handle encrypted failures clearly, and download one combined document.',
  tool_merge_pdf_choose_files: 'Choose PDFs',
  tool_merge_pdf_clear: 'Clear',
  tool_merge_pdf_desc: 'Combine multiple PDFs into one file in your browser—files stay on your device, not uploaded to a server.',
  tool_merge_pdf_description:
    'Merge PDF files in your browser and download one combined document—nothing is uploaded to a server. Steps: add two or more PDFs, reorder the list, merge, then download. Example: two one-page samples become a two-page PDF. Encrypted or damaged files fail with a clear error. Differs from Images to PDF, which starts from photos.',
  tool_merge_pdf_download: 'Download',
  tool_merge_pdf_drop_hint: 'Or drop PDF files here. Processing stays in this tab.',
  tool_merge_pdf_empty: 'Add at least two PDF files to merge.',
  tool_merge_pdf_err_encrypted: 'A file looks password-protected. Unlock it first, then try again.',
  tool_merge_pdf_err_load: 'Could not read a PDF (damaged or unsupported). Try another file.',
  tool_merge_pdf_err_merge: 'Merge failed. Check files and retry.',
  tool_merge_pdf_example:
    'Sample loads two one-page PDFs labeled A and B, merges in list order, and enables Download for a two-page merged.pdf.',
  tool_merge_pdf_example_title: 'Combine PDF files into one',
  tool_merge_pdf_faq_a1:
    'No. pdf-lib runs in your tab (the library may load from a CDN). Your PDFs are not uploaded to our servers.',
  tool_merge_pdf_faq_a2:
    'Images to PDF builds a PDF from photos. This tool joins existing PDF files into one document.',
  tool_merge_pdf_faq_a3:
    'Yes—use Up/Down on each row. Merge uses the list order from top to bottom as the page order.',
  tool_merge_pdf_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password with an unlock tool you trust, then merge.',
  tool_merge_pdf_faq_a5: 'Most desktop and mobile PDF readers open the merged file.',
  tool_merge_pdf_faq_q1: 'Are my PDFs uploaded?',
  tool_merge_pdf_faq_q2: 'How is this different from Images to PDF?',
  tool_merge_pdf_faq_q3: 'Can I change the merge order?',
  tool_merge_pdf_faq_q4: 'What about encrypted PDFs?',
  tool_merge_pdf_faq_q5: 'Will the result open in Acrobat or Preview?',
  tool_merge_pdf_how_body:
    'Add two or more PDFs, reorder with Up/Down if needed, click Merge, then Download. Page order follows the list. Everything runs locally after the PDF library loads.',
  tool_merge_pdf_how_title: 'How it works',
  tool_merge_pdf_merge: 'Merge',
  tool_merge_pdf_move_down: 'Down',
  tool_merge_pdf_move_up: 'Up',
  tool_merge_pdf_remove: 'Remove',
  tool_merge_pdf_rules_body:
    'How list order, copyPages, privacy, and failure cases work when you merge PDFs locally.',
  tool_merge_pdf_rules_item_1:
    'Order: pages are copied in list order (top file first). Reorder before Merge.',
  tool_merge_pdf_rules_item_2:
    'Engine: pdf-lib loads each PDF and copyPages into a new document—no server round-trip for your files.',
  tool_merge_pdf_rules_item_3:
    'Privacy: bytes stay in the browser tab. The library script may load from a CDN.',
  tool_merge_pdf_rules_item_4:
    'Limits: need ≥2 files; encrypted or corrupt PDFs fail with a readable error; very large sets may be slow in memory.',
  tool_merge_pdf_rules_title: 'Rules you should expect',
  tool_merge_pdf_sample: 'Load sample',
  tool_merge_pdf_stats_tpl: '{n} files → {pages} pages · {bytes}',
  tool_merge_pdf_status_done: 'Done — click Download to save merged.pdf.',
  tool_merge_pdf_status_merging: 'Merging PDFs…',
  tool_merge_pdf_title: 'Combine PDF files into one',
  tool_merge_pdf_usecase_1: 'Office: combine signed pages and attachments into one packet.',
  tool_merge_pdf_usecase_2: 'Students: stitch homework chapters before submission.',
  tool_merge_pdf_usecase_3: 'Ops: pack brand assets and specs into a single PDF handoff.',
  tool_merge_pdf_usecases_title: 'Good fits',
  tool_merge_pdf_warn_large: 'A file is larger than ~25 MB — merge may be slow or fail in some browsers.',
  tool_merge_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
