/**
 * i18n tool shard (protect-pdf / en). Master locale; password-encrypt title.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_protect_pdf_article:
    'Password-protect a PDF in your browser with the PDF library—set an open password before sharing sensitive attachments. Files stay on your device.',
  tool_protect_pdf_choose_file: 'Choose a PDF',
  tool_protect_pdf_clear: 'Clear',
  tool_protect_pdf_confirm_label: 'Confirm password',
  tool_protect_pdf_desc:
    'Add an open password to a PDF on your device—nothing uploaded to a server.',
  tool_protect_pdf_description:
    'Password-protect a PDF in your browser before you email or share it—nothing is uploaded to a server. Steps: choose a PDF, enter and confirm a password (empty passwords are rejected), click Protect, then Download protected.pdf. Example: a one-page sample is encrypted with password sample and Download is enabled. This is standard user-password encryption—not military-grade; opening later needs that password (see Unlock PDF when we ship it). Files over ~25 MB may be slow.',
  tool_protect_pdf_download: 'Download',
  tool_protect_pdf_drop_hint: 'Or drop one PDF here. Processing stays in this tab.',
  tool_protect_pdf_empty: 'Choose a PDF file first.',
  tool_protect_pdf_err_encrypted:
    'This PDF already looks password-protected. Decrypt it with the password you know, then protect again.',
  tool_protect_pdf_err_load: 'Could not read the PDF (damaged or unsupported). Try another file.',
  tool_protect_pdf_err_password_empty: 'Enter a password—empty passwords are not allowed.',
  tool_protect_pdf_err_password_mismatch: 'Passwords do not match. Re-type both fields.',
  tool_protect_pdf_err_protect: 'Encryption failed. Check the file and password, then retry.',
  tool_protect_pdf_example:
    'Sample builds a one-page PDF, encrypts it with password sample, enables Download for protected.pdf, and shows sample in the status line.',
  tool_protect_pdf_example_title: 'Password-protect a PDF',
  tool_protect_pdf_faq_a1:
    'No. The PDF library runs in your tab (scripts may load from a CDN). Your PDF is not uploaded to our servers.',
  tool_protect_pdf_faq_a2:
    'It applies normal PDF user-password encryption so viewers must enter the password to open. It is not marketed as military-grade—pick a strong password you will remember.',
  tool_protect_pdf_faq_a3:
    'You need the same password you set here. When our Unlock PDF tool is available, use it with the password you chose—this site does not crack or bypass passwords.',
  tool_protect_pdf_faq_a4:
    'Already encrypted files usually fail to load. Remove the old password with a tool you trust, then add your new password here.',
  tool_protect_pdf_faq_q1: 'Is my PDF uploaded?',
  tool_protect_pdf_faq_q2: 'How strong is the encryption?',
  tool_protect_pdf_faq_q3: 'How do I open the file later?',
  tool_protect_pdf_faq_q4: 'What if the PDF is already protected?',
  tool_protect_pdf_how_body:
    'Choose one PDF, type a password twice so they match, click Protect, then Download. Encryption runs in this tab after the PDF library loads. Reject empty passwords before encrypting.',
  tool_protect_pdf_how_title: 'How it works',
  tool_protect_pdf_pages_label: 'Pages in file',
  tool_protect_pdf_password_label: 'Password',
  tool_protect_pdf_protect: 'Protect',
  tool_protect_pdf_rules_body:
    'Password rules, encryption scope, privacy, and failure cases for local PDF protection.',
  tool_protect_pdf_rules_item_1:
    'Password: required; confirm field must match. Empty passwords are rejected before encrypt runs.',
  tool_protect_pdf_rules_item_2:
    'Encryption: the PDF library sets user and owner password to the same value—viewers need it to open the file.',
  tool_protect_pdf_rules_item_3:
    'Output: one encrypted PDF (protected.pdf). Already encrypted inputs fail with a clear message.',
  tool_protect_pdf_rules_item_4:
    'Privacy & limits: bytes stay in the tab; not military-grade; ~25 MB soft warning; huge files may fail in memory.',
  tool_protect_pdf_rules_title: 'Rules you should expect',
  tool_protect_pdf_sample: 'Load sample',
  tool_protect_pdf_stats_tpl: '{pages} page(s) · encrypted · {bytes}',
  tool_protect_pdf_status_done: 'Done — click Download to save protected.pdf.',
  tool_protect_pdf_status_sample_pwd: 'Sample ready — password is "{pwd}". Download protected.pdf to try it.',
  tool_protect_pdf_status_working: 'Encrypting PDF…',
  tool_protect_pdf_title: 'Password-protect a PDF',
  tool_protect_pdf_usecase_1: 'Office: add an open password before emailing a contract or payroll export.',
  tool_protect_pdf_usecase_2: 'Ops: lock a one-off report PDF before sending it to a client portal.',
  tool_protect_pdf_usecase_3: 'Students: protect a scanned assignment with a password only your instructor knows.',
  tool_protect_pdf_usecases_title: 'Good fits',
  tool_protect_pdf_warn_large: 'File larger than ~25 MB — encryption may be slow or fail in some browsers.',
  tool_protect_pdf_warn_pdflib: 'PDF library failed to load. Check your network and retry.',
};
export default en;
