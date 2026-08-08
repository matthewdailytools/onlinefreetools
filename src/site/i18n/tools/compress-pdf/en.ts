/**
 * i18n tool shard（compress-pdf / en）。母版语；title 结果向。
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_compress_pdf_article:
    'Shrink PDF file size in your browser by re-rendering pages as JPEG and rebuilding the document—files stay on your device, not on a server. This is honest, limited compression, not cloud-grade re-encoding.',
  tool_compress_pdf_choose_file: 'Choose PDF',
  tool_compress_pdf_clear: 'Clear',
  tool_compress_pdf_compress: 'Compress',
  tool_compress_pdf_desc:
    'Compress a PDF in your browser to shrink file size—files stay on your device, not uploaded to a server.',
  tool_compress_pdf_description:
    'Compress PDF file size in your browser and see before/after bytes—nothing is uploaded to a server. Steps: open a PDF, pick Medium or Low quality, compress, then download. Example: a two-page sample with embedded images drops from about 180 KB to roughly 90 KB on Medium. Text-only PDFs may barely shrink. Encrypted files fail with a clear error. Differs from Organize (reorder pages) and Merge (combine files).',
  tool_compress_pdf_download: 'Download',
  tool_compress_pdf_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_compress_pdf_empty: 'Add a PDF to compress.',
  tool_compress_pdf_err_compress: 'Compress failed. Check the file and retry.',
  tool_compress_pdf_err_encrypted: 'This PDF looks password-protected. Unlock it first, then try again.',
  tool_compress_pdf_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_compress_pdf_example:
    'Sample loads a two-page PDF with gradient blocks and embedded JPEG pages, runs Medium compression, shows before/after size with percent saved, and enables Download for compressed.pdf.',
  tool_compress_pdf_example_title: 'Example',
  tool_compress_pdf_faq_a1:
    'No. pdf.js and the PDF library run in your tab (libraries may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_compress_pdf_faq_a2:
    'This tool rasterizes each page to JPEG and rebuilds a PDF. Text-heavy or already-optimized files may shrink little or grow slightly. It is not the same as server-side recompression of embedded streams.',
  tool_compress_pdf_faq_a3:
    'No. Pages are redrawn as images in the browser. There is no cloud re-encoding step—your bytes never leave the device.',
  tool_compress_pdf_faq_a4:
    'Password-protected PDFs usually fail to open here. Remove the password first, then compress.',
  tool_compress_pdf_faq_a5:
    'Medium keeps more detail (scale 1.2, JPEG ~72%). Low is smaller but softer (scale 1.0, JPEG ~55%). Pick based on email limits vs readability.',
  tool_compress_pdf_faq_q1: 'Is my PDF uploaded?',
  tool_compress_pdf_faq_q2: 'Why did my file barely get smaller?',
  tool_compress_pdf_faq_q3: 'Is this cloud re-encoding?',
  tool_compress_pdf_faq_q4: 'What about encrypted PDFs?',
  tool_compress_pdf_faq_q5: 'Which quality preset should I use?',
  tool_compress_pdf_how_body:
    'Choose one PDF, pick Medium or Low, click Compress, then Download. Each page is rendered and saved as JPEG inside a new PDF. Stats show original size, new size, and percent change. Libraries load on first use.',
  tool_compress_pdf_how_title: 'How it works',
  tool_compress_pdf_pages_label: 'Pages',
  tool_compress_pdf_quality_label: 'Quality',
  tool_compress_pdf_quality_low: 'Low — smaller file',
  tool_compress_pdf_quality_med: 'Medium — balanced',
  tool_compress_pdf_rules_body:
    'How raster JPEG presets, before/after stats, privacy, and failure cases work when you compress a PDF locally.',
  tool_compress_pdf_rules_item_1:
    'Engine: pdf.js draws each page to canvas; the PDF library embeds JPEG pages into a new PDF—no server round-trip for your file.',
  tool_compress_pdf_rules_item_2:
    'Presets: Medium (scale 1.2, JPEG ~72%) vs Low (scale 1.0, JPEG ~55%). Lower preset = smaller but softer output.',
  tool_compress_pdf_rules_item_3:
    'Stats: shows original bytes, compressed bytes, and percent change. Saves under 5% trigger a “barely smaller” note.',
  tool_compress_pdf_rules_item_4:
    'Limits: encrypted or corrupt PDFs fail with a readable error; very large files (>~25 MB) may be slow; text-only PDFs may not shrink much.',
  tool_compress_pdf_rules_title: 'Rules you should expect',
  tool_compress_pdf_sample: 'Load sample',
  tool_compress_pdf_stats_tpl: '{from} → {to} · {pct}% saved',
  tool_compress_pdf_status_done: 'Done — click Download to save compressed.pdf.',
  tool_compress_pdf_status_working: 'Compressing PDF…',
  tool_compress_pdf_title: 'Compress PDF — Shrink File Size in Your Browser',
  tool_compress_pdf_usecase_1: 'Office: shrink a scan packet before email attachment limits.',
  tool_compress_pdf_usecase_2: 'Students: reduce a photo-heavy assignment PDF for upload forms.',
  tool_compress_pdf_usecase_3: 'Site owners: trim a marketing PDF for faster sharing—when raster quality is acceptable.',
  tool_compress_pdf_usecases_title: 'Good fits',
  tool_compress_pdf_warn_large: 'This file is larger than ~25 MB — compress may be slow or fail in some browsers.',
  tool_compress_pdf_warn_little: 'Barely smaller—text-only or already-compressed PDFs may not benefit from raster JPEG.',
  tool_compress_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
  tool_compress_pdf_warn_pdfjs: 'PDF renderer failed to load. Check your network and retry.',
};
export default en;
