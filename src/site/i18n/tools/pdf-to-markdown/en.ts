/**
 * i18n tool shard (pdf-to-markdown / en). Master locale; result-oriented title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'Pull selectable text from a PDF text layer in your browser and download plain Markdown—files stay on your device, not on a server. No OCR: scanned image-only PDFs fail with a clear message.',
  tool_pdf_to_markdown_choose_file: 'Choose a PDF',
  tool_pdf_to_markdown_clear: 'Clear',
  tool_pdf_to_markdown_convert: 'Convert',
  tool_pdf_to_markdown_desc:
    'Turn PDF text into Markdown on your device for notes or LLM paste—files stay in your browser, not uploaded to a server.',
  tool_pdf_to_markdown_description:
    'Extract PDF text to Markdown in your browser for notes or LLM paste—files stay on your device and are not uploaded to a server. Steps: choose a PDF with a text layer, click Convert, preview the output, then Download .md. Example: the sample one-page PDF becomes a .md file containing “Hello PDF to Markdown sample.” Scanned image-only PDFs fail because there is no OCR. Encrypted or damaged files show a clear error.',
  tool_pdf_to_markdown_download: 'Download .md',
  tool_pdf_to_markdown_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_pdf_to_markdown_empty: 'Choose a PDF file first.',
  tool_pdf_to_markdown_err_convert: 'Conversion failed. Check the file and retry.',
  tool_pdf_to_markdown_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_pdf_to_markdown_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_pdf_to_markdown_err_notext:
    'No selectable text found. This tool reads the PDF text layer only—it does not OCR scanned pages. Try a born-digital PDF or use PDF to JPG for images.',
  tool_pdf_to_markdown_err_pdfjs: 'PDF renderer failed to load. Check your network and retry.',
  tool_pdf_to_markdown_example:
    'Sample builds a one-page PDF with Helvetica text, converts it, shows the sentence in the preview, and enables Download for a .md file.',
  tool_pdf_to_markdown_example_title: 'Example',
  tool_pdf_to_markdown_faq_a1:
    'No. the page renderer runs in your tab (scripts may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_pdf_to_markdown_faq_a2:
    'Scanned PDFs are usually pictures of pages with no text layer. This tool does not run OCR, so extraction returns empty and fails with a clear message.',
  tool_pdf_to_markdown_faq_a3:
    'No. Only embedded text from the PDF text layer is exported. Headings, lists, and tables are not reconstructed—output is plain lines grouped by position.',
  tool_pdf_to_markdown_faq_a4:
    'Markdown to HTML turns Markdown syntax into a previewable web page. This tool exports raw text from a PDF into a .md file you can edit or paste elsewhere.',
  tool_pdf_to_markdown_faq_a5:
    'PDF to JPG renders each page as an image. Use this tool when you need editable text from a digital PDF, not pictures of pages.',
  tool_pdf_to_markdown_faq_q1: 'Is my PDF uploaded?',
  tool_pdf_to_markdown_faq_q2: 'Why does my scanned PDF fail?',
  tool_pdf_to_markdown_faq_q3: 'Does this preserve headings or tables?',
  tool_pdf_to_markdown_faq_q4: 'How is this different from Markdown to HTML?',
  tool_pdf_to_markdown_faq_q5: 'When should I use PDF to JPG instead?',
  tool_pdf_to_markdown_how_body:
    'Choose one PDF, click Convert, review the preview, then Download .md. Text is grouped into lines by vertical position; pages are separated with ---. Everything runs in this tab after the libraries load—your file is not uploaded to a server.',
  tool_pdf_to_markdown_how_item_1: "Select the input with “Choose a PDF”",
  tool_pdf_to_markdown_how_item_2: "Set the available options, then click “Convert”",
  tool_pdf_to_markdown_how_item_3: "Review the preview, page count, or status message",
  tool_pdf_to_markdown_how_item_4: "Click “Download .md” to save the result",
  tool_pdf_to_markdown_how_title: 'How it works',
  tool_pdf_to_markdown_pages_label: 'Pages',
  tool_pdf_to_markdown_preview_label: 'Markdown preview',
  tool_pdf_to_markdown_rules_body:
    'Text-layer extraction, page separators, no OCR, privacy, and failure cases for local PDF-to-Markdown export.',
  tool_pdf_to_markdown_rules_item_1:
    'Engine: the page renderer getTextContent per page; items on similar y coordinates join into lines with spaces.',
  tool_pdf_to_markdown_rules_item_2:
    'Pages: output joins with a blank line, ---, and another blank line between pages.',
  tool_pdf_to_markdown_rules_item_3:
    'No OCR: if trimmed text is empty, conversion stops with a readable error—scanned PDFs need another workflow.',
  tool_pdf_to_markdown_rules_item_4:
    'Privacy & limits: bytes stay in the tab; encrypted/corrupt PDFs fail clearly; files above ~25 MB may be slow.',
  tool_pdf_to_markdown_rules_title: 'Rules you should expect',
  tool_pdf_to_markdown_sample: 'Load sample',
  tool_pdf_to_markdown_stats_tpl: '{n} page(s) · {chars} characters',
  tool_pdf_to_markdown_status_converting: 'Extracting text…',
  tool_pdf_to_markdown_status_done: 'Done — click Download .md to save.',
  tool_pdf_to_markdown_title: 'PDF to Markdown — Extract Text for Notes in Your Browser',
  tool_pdf_to_markdown_usecase_1: 'Office: copy contract clauses into notes or a wiki without retyping.',
  tool_pdf_to_markdown_usecase_2: 'Writers & AI users: export report text into Markdown for editing or LLM prompts.',
  tool_pdf_to_markdown_usecase_3: 'Students: pull readable lecture PDF text into study notes—when the file has a text layer.',
  tool_pdf_to_markdown_usecases_title: 'Good fits',
  tool_pdf_to_markdown_warn_large: 'File larger than ~25 MB — extraction may be slow or fail in some browsers.',
  tool_pdf_to_markdown_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
