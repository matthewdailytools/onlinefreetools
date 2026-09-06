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
    'Extract PDF text to a Markdown draft in your browser—each page becomes ## Page N with --- separators—for notes or LLM paste. Files stay on your device and are not uploaded. Steps: choose a PDF with a text layer, click Convert, preview, then Download .md. Example: the sample becomes a .md with “## Page 1” plus “Hello PDF to Markdown sample.” Scanned image-only PDFs fail (no OCR). For plain .txt without page headings, use Extract text from PDF.',
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
    'No. the page renderer runs in your tab (scripts load from this site). Your PDF is not uploaded to our servers.',
  tool_pdf_to_markdown_faq_a2:
    'Scanned PDFs are usually pictures of pages with no text layer. This tool does not run OCR, so extraction returns empty and fails with a clear message.',
  tool_pdf_to_markdown_faq_a3:
    'Only the PDF text layer is exported. True heading styles, lists, and tables are not reconstructed—each page gets a ## Page N wrapper plus plain lines from the text layer.',
  tool_pdf_to_markdown_faq_a4:
    'Extract text from PDF downloads plain .txt with blank lines between pages. This tool wraps each page as ## Page N and separates pages with --- for Markdown editors. Markdown to HTML converts Markdown syntax the other direction.',
  tool_pdf_to_markdown_faq_a5:
    'PDF to JPG renders each page as an image. Use this tool when you need editable text from a digital PDF, not pictures of pages.',
  tool_pdf_to_markdown_faq_q1: 'Is my PDF uploaded?',
  tool_pdf_to_markdown_faq_q2: 'Why does my scanned PDF fail?',
  tool_pdf_to_markdown_faq_q3: 'Does this preserve headings or tables?',
  tool_pdf_to_markdown_faq_q4: 'How is this different from Extract text from PDF?',
  tool_pdf_to_markdown_faq_q5: 'When should I use PDF to JPG instead?',
  tool_pdf_to_markdown_how_body:
		'Choose a PDF with a text layer, convert it, review the Markdown draft with per-page headings, then download .md. Scanned pages without text fail clearly — no OCR.',
  tool_pdf_to_markdown_how_item_1: 'Choose or drop a PDF with a text layer (or click Load sample)',
  tool_pdf_to_markdown_how_item_2: 'Click Convert to build the Markdown draft',
  tool_pdf_to_markdown_how_item_3: 'Review ## Page N sections and --- separators in the preview',
  tool_pdf_to_markdown_how_item_4: 'Click Download .md to save the draft',
  tool_pdf_to_markdown_how_title: 'How it works',
  tool_pdf_to_markdown_pages_label: 'Pages',
  tool_pdf_to_markdown_preview_label: 'Markdown preview',
  tool_pdf_to_markdown_rules_body:
    'Text-layer extraction, page separators, no OCR, privacy, and failure cases for local PDF-to-Markdown export.',
  tool_pdf_to_markdown_rules_item_1:
		'Each page becomes ## Page N plus its text-layer lines; pages are separated with --- for Markdown editors.',
  tool_pdf_to_markdown_rules_item_2:
    'Unlike Extract text from PDF (.txt), this download is a .md draft meant for editors—not a layout-faithful conversion.',
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
