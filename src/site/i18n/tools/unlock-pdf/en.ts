/**
 * i18n tool shard (unlock-pdf / en). Master locale; known-password unlock title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_unlock_pdf_article:
    'Remove PDF open-password protection when you already know the password—runs in your browser, not a password cracker. Files stay on your device.',
  tool_unlock_pdf_choose_file: 'Choose an encrypted PDF',
  tool_unlock_pdf_clear: 'Clear',
  tool_unlock_pdf_desc:
    'Remove a PDF open password you already know—on your device, nothing uploaded to a server.',
  tool_unlock_pdf_description:
    'Unlock a password-protected PDF in your browser when you know the open password—nothing is uploaded to a server. Steps: choose an encrypted PDF, enter the password (empty is rejected if the file needs one), click Unlock, then Download unlocked.pdf. Example: a one-page sample is encrypted with password sample, auto-filled, unlocked, and Download is enabled. This is not password cracking, brute force, or recovery of forgotten passwords. Files over ~25 MB may be slow.',
  tool_unlock_pdf_download: 'Download',
  tool_unlock_pdf_drop_hint: 'Or drop one encrypted PDF here. Processing stays in this tab.',
  tool_unlock_pdf_empty: 'Choose an encrypted PDF file first.',
  tool_unlock_pdf_encrypted_label: 'Password protected',
  tool_unlock_pdf_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_unlock_pdf_err_not_encrypted:
    'This PDF does not look password-protected. Use Merge PDF or other tools instead.',
  tool_unlock_pdf_err_password_empty: 'Enter the open password—empty passwords are rejected.',
  tool_unlock_pdf_err_password_wrong: 'Wrong password. Re-enter the password you set when the file was protected.',
  tool_unlock_pdf_err_unlock: 'Unlock failed. Check the file and password, then retry.',
  tool_unlock_pdf_example:
    'Sample builds a one-page encrypted PDF with password sample, auto-fills the password, unlocks it, enables Download for unlocked.pdf, and shows sample in the status line.',
  tool_unlock_pdf_example_title: 'Unlock my PDF',
  tool_unlock_pdf_faq_a1:
    'No. This tool only removes protection when you supply the correct open password. It does not crack, brute force, or recover unknown passwords.',
  tool_unlock_pdf_faq_a2:
    'No. The PDF library runs in your tab (scripts may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_unlock_pdf_faq_a3:
    'You see a clear wrong-password message. Try the password you used in Protect PDF or another app—this site cannot guess it for you.',
  tool_unlock_pdf_faq_a4:
    'Use Protect PDF to add an open password, or Merge PDF after you unlock here. Unlock only works on files that already require a password to open.',
  tool_unlock_pdf_faq_q1: 'Does this crack or recover forgotten passwords?',
  tool_unlock_pdf_faq_q2: 'Is my PDF uploaded?',
  tool_unlock_pdf_faq_q3: 'What if the password is wrong?',
  tool_unlock_pdf_faq_q4: 'How does this relate to Protect PDF?',
  tool_unlock_pdf_how_body:
    'Choose one password-protected PDF, enter the open password you already know, click Unlock, then Download. Decryption runs in this tab after the PDF library loads. Empty passwords are rejected when the file needs one.',
  tool_unlock_pdf_how_title: 'How it works',
  tool_unlock_pdf_pages_label: 'Pages in file',
  tool_unlock_pdf_password_label: 'Open password',
  tool_unlock_pdf_rules_body:
    'Password rules, unlock scope, privacy, and failure cases for local PDF decryption.',
  tool_unlock_pdf_rules_item_1:
    'Scope: you must know the open password. No cracking, brute force, or recovery of unknown passwords.',
  tool_unlock_pdf_rules_item_2:
    'Input: encrypted PDF only. Unprotected files are rejected with a clear message.',
  tool_unlock_pdf_rules_item_3:
    'Output: one unencrypted PDF (unlocked.pdf). Wrong password shows an explicit error—no silent failure.',
  tool_unlock_pdf_rules_item_4:
    'Privacy & limits: bytes stay in the tab; not uploaded to a server; ~25 MB soft warning; huge files may fail in memory.',
  tool_unlock_pdf_rules_title: 'Rules you should expect',
  tool_unlock_pdf_sample: 'Load sample',
  tool_unlock_pdf_stats_tpl: '{pages} page(s) · unlocked · {bytes}',
  tool_unlock_pdf_status_done: 'Done — click Download to save unlocked.pdf.',
  tool_unlock_pdf_status_sample_pwd: 'Sample ready — password is "{pwd}". Download unlocked.pdf to try it.',
  tool_unlock_pdf_status_working: 'Unlocking PDF…',
  tool_unlock_pdf_title: 'Unlock my PDF',
  tool_unlock_pdf_unlock: 'Unlock',
  tool_unlock_pdf_usecase_1: 'Office: remove your own open password so a PDF can merge or print in another app.',
  tool_unlock_pdf_usecase_2: 'Ops: unlock a client export you encrypted earlier before uploading to a portal.',
  tool_unlock_pdf_usecase_3: 'Students: drop the password from a scanned assignment after grading, using the password you set.',
  tool_unlock_pdf_usecases_title: 'Good fits',
  tool_unlock_pdf_warn_large: 'File larger than ~25 MB — unlock may be slow or fail in some browsers.',
  tool_unlock_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
