/**
 * i18n tool shard (batch-compress-pdfs-for-email / en).
 * Master H1 is the locked long-tail “Batch compress PDFs for email”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'Shrink several PDFs in this tab so they fit an email attachment cap. Each file stays a separate PDF inside a ZIP — not one merged booklet. Skip a file that is encrypted or too heavy, then download the rest. Files stay on your device and are not uploaded to a server.',
	tool_batch_compress_pdfs_for_email_choose_files: 'Choose PDFs',
	tool_batch_compress_pdfs_for_email_chip_email: 'Email preset',
	tool_batch_compress_pdfs_for_email_chip_max: 'Maximum shrink',
	tool_batch_compress_pdfs_for_email_chip_print: 'Print preset',
	tool_batch_compress_pdfs_for_email_clear: 'Clear',
	tool_batch_compress_pdfs_for_email_col_after: 'After',
	tool_batch_compress_pdfs_for_email_col_before: 'Before',
	tool_batch_compress_pdfs_for_email_col_name: 'File',
	tool_batch_compress_pdfs_for_email_col_status: 'Status',
	tool_batch_compress_pdfs_for_email_compress: 'Compress all',
	tool_batch_compress_pdfs_for_email_desc:
		'Batch compress PDFs for email into a ZIP of separate files — stays on your device, not uploaded to a server.',
	tool_batch_compress_pdfs_for_email_description:
		'Batch compress PDFs for email: add several quotes or scans, apply one email-size preset to each file, skip encrypted or oversized items, download a ZIP of separate PDFs—not one merged booklet. Steps: choose the stack, keep the email preset, compress all, read the saved-bytes total. Example: two short sample PDFs stay two files in the ZIP. Files stay on your device and are not uploaded to a server.',
	tool_batch_compress_pdfs_for_email_download_zip: 'Download ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: 'Drop PDFs (up to 20). Each file is compressed on its own. Conversion stays in this tab.',
	tool_batch_compress_pdfs_for_email_empty: 'Add PDFs first.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'Password-protected. Skipped.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'Could not build the ZIP in this browser. Try another current browser.',
	tool_batch_compress_pdfs_for_email_err_load: 'Could not read this PDF. Skipped.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'The PDF library did not load. Try another current browser.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js did not load. Try another current browser.',
	tool_batch_compress_pdfs_for_email_err_too_many: 'This page takes at most 20 PDFs. Extra files were not added.',
	tool_batch_compress_pdfs_for_email_example:
		'Load sample builds two tiny PDFs with a picture page, runs the email preset on each, keeps two separate files in the ZIP, and shows bytes saved.',
	tool_batch_compress_pdfs_for_email_example_title: 'Example',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'No. Rasterize and rebuild run in this tab. Files stay on the device and are not uploaded to a server. pdf.js, pdf-lib, and a ZIP helper load from this site; your PDFs still never leave the tab.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'No. You get a ZIP of N PDFs. Combining into one booklet is Merge PDF — a different job, not this page.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'Scans with photos usually shrink. Text-only PDFs may barely move. The table shows before and after so you can see it.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'Compress PDF is one file. This page shares one email preset across a stack and packs successes into a ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'That row is skipped and the rest continue. Unlock it elsewhere, then add it again.',
	tool_batch_compress_pdfs_for_email_faq_q1: 'Are my PDFs uploaded to a server?',
	tool_batch_compress_pdfs_for_email_faq_q2: 'Does this merge everything into one PDF?',
	tool_batch_compress_pdfs_for_email_faq_q3: 'Do scans shrink more than text PDFs?',
	tool_batch_compress_pdfs_for_email_faq_q4: 'How is this different from Compress PDF?',
	tool_batch_compress_pdfs_for_email_faq_q5: 'What if one file is encrypted?',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} PDFs in the queue',
	tool_batch_compress_pdfs_for_email_how_body:
		'Put several attachments in the queue, pick the email preset, compress each file on its own, then take a ZIP of the PDFs that succeeded.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'Choose the quotes or scans that must pass an email size gate.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'Keep Email preset unless you need Print (clearer) or Maximum shrink.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'Press Compress all. Files stay separate. Nothing is concatenated into one booklet.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'Encrypted or broken files skip. The summary totals bytes saved across successes.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'Download ZIP when at least one file succeeded. Need one PDF only? Use Compress PDF.',
	tool_batch_compress_pdfs_for_email_how_title: 'How it works',
	tool_batch_compress_pdfs_for_email_preset_label: 'Shared preset',
	tool_batch_compress_pdfs_for_email_rules_body:
		'Each PDF is rasterized to JPEG pages and rebuilt. Output is always a ZIP of separate PDFs.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'Email is the default: scale about 1.0 and JPEG quality about 0.55. Print is milder. Maximum shrinks further.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'Encrypted, damaged, or out-of-memory files skip that row only. Duplicate ZIP names become name (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'Text-only files may barely shrink. That is expected; the table still reports the sizes.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'Files stay on your device and are not uploaded to a server.',
	tool_batch_compress_pdfs_for_email_rules_title: 'Rules you should expect',
	tool_batch_compress_pdfs_for_email_sample: 'Load sample',
	tool_batch_compress_pdfs_for_email_status_compressing: 'Compressing each PDF for email…',
	tool_batch_compress_pdfs_for_email_status_done: 'Batch finished — check the table, then download the ZIP.',
	tool_batch_compress_pdfs_for_email_status_ok: 'Compressed',
	tool_batch_compress_pdfs_for_email_status_skip: 'Skipped',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} ready · {skip} skipped · saved {saved}',
	tool_batch_compress_pdfs_for_email_title: 'Batch compress PDFs for email',
	tool_batch_compress_pdfs_for_email_usecase_1: 'A stack of quotes that together blow a 25 MB mailbox cap.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'Send scanned receipts as separate attachments, not one booklet.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'Shrink several PDFs before email without merging them.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'Good fits',
	tool_batch_compress_pdfs_for_email_warn_large: 'A file is larger than 40 MB — this tab may run out of memory on that row.',
};

export default en;
