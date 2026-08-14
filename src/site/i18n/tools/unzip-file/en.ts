/**
 * i18n tool shard (unzip-file / en). Master copy; ZIP-first wording, no broad archive promise.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
  tool_unzip_file_article:
    'Open a ZIP file in your browser, inspect the file tree, preview text or images, and download selected files. The archive stays on your device and is not uploaded to a server.',
  tool_unzip_file_choose_file: 'Choose ZIP',
  tool_unzip_file_clear: 'Clear',
  tool_unzip_file_desc:
    'Unzip ZIP files in your browser, preview contents, and download files — no server upload.',
  tool_unzip_file_description:
    'Unzip a ZIP file online in your browser: choose or drop a ZIP, inspect the file tree, preview text or images, then download one file or export everything. Files stay on your device and are not uploaded to a server. Example: the sample project-files.zip shows readme.txt, assets/logo.png, and docs/notes.md with safe paths.',
  tool_unzip_file_download_all: 'Export all',
  tool_unzip_file_download_file: 'Download file',
  tool_unzip_file_drop_hint: 'Drop one .zip file here. Processing stays in this tab.',
  tool_unzip_file_empty: 'Choose a ZIP file first.',
  tool_unzip_file_err_archive: 'Could not read the ZIP file. It may be damaged, encrypted, or not a ZIP archive.',
  tool_unzip_file_err_fflate: 'ZIP engine failed to load. Check your network and retry.',
  tool_unzip_file_err_no_file: 'No extracted file is selected.',
  tool_unzip_file_example:
    'The built-in project-files.zip sample extracts three safe entries: readme.txt, assets/logo.png, and docs/notes.md. The page shows the tree, previews readme.txt, and enables both Download file and Export all.',
  tool_unzip_file_example_title: 'Example',
  tool_unzip_file_exported_all: 'Exported files are packed into a new ZIP with safe paths.',
  tool_unzip_file_faq_a1:
    'No. The ZIP is read in your browser tab, and extracted bytes stay on your device. The ZIP engine script may load from a CDN, but your archive is not uploaded to our servers.',
  tool_unzip_file_faq_a2:
    'This page is ZIP-first. RAR, 7Z, ISO, and TAR.GZ need a heavier multi-format archive engine and should be handled by a separate archive extractor when that support is implemented.',
  tool_unzip_file_faq_a3:
    'Password-protected ZIP files may fail here unless browser-compatible password support is added. This tool does not crack or recover passwords.',
  tool_unzip_file_faq_a4:
    'Entries with absolute paths, ../ segments, empty names, or duplicate names are renamed or blocked before export. The result list tells you when a path was changed.',
  tool_unzip_file_faq_a5:
    'Large ZIP files can be slow or run out of memory in the browser, especially on phones. The page warns when file count, expanded size, or expansion ratio looks risky.',
  tool_unzip_file_faq_q1: 'Is my ZIP file uploaded?',
  tool_unzip_file_faq_q2: 'Does this extract RAR, 7Z, or TAR.GZ?',
  tool_unzip_file_faq_q3: 'Can it open password-protected ZIP files?',
  tool_unzip_file_faq_q4: 'What happens to unsafe paths?',
  tool_unzip_file_faq_q5: 'How are very large ZIP files handled?',
  tool_unzip_file_file_count_label: 'Files',
  tool_unzip_file_how_body:
    'Choose or drop one ZIP file. The page reads the archive, normalizes paths, builds a file list, and shows safe previews for text and images. Pick any row to preview and download it, or export all extracted files as a fresh ZIP with cleaned paths.',
  tool_unzip_file_how_title: 'How it works',
  tool_unzip_file_load_sample: 'Load sample',
  tool_unzip_file_no_preview:
    'Preview is not available for this file type. You can still download the file.',
  tool_unzip_file_preview_title: 'Preview',
  tool_unzip_file_rules_body:
    'ZIP extraction in the browser needs clear rules for paths, previews, download modes, and failure cases.',
  tool_unzip_file_rules_item_1:
    'Path safety: leading slashes, drive letters, ../ segments, and duplicate names are cleaned before export.',
  tool_unzip_file_rules_item_2:
    'Preview: small text, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP, and SVG entries can be previewed; other files show metadata only.',
  tool_unzip_file_rules_item_3:
    'Download: a selected file downloads directly; Export all creates a new ZIP from the sanitized extracted files.',
  tool_unzip_file_rules_item_4:
    'Limits: encrypted, split, damaged, or unusually expanding archives may fail or require confirmation in future versions.',
  tool_unzip_file_rules_title: 'Rules you should expect',
  tool_unzip_file_selected_label: 'Selected',
  tool_unzip_file_size_label: 'Extracted size',
  tool_unzip_file_status_done: 'ZIP extracted — select a file or export all.',
  tool_unzip_file_status_reading: 'Reading ZIP...',
  tool_unzip_file_title: 'Unzip File Online — Extract ZIP Files in Your Browser',
  tool_unzip_file_total_size_label: 'Expanded size',
  tool_unzip_file_usecase_1:
    'Office: open a supplier ZIP attachment and download only the invoice or image you need.',
  tool_unzip_file_usecase_2:
    'Study: inspect a course material ZIP on a managed computer or tablet without installing desktop software.',
  tool_unzip_file_usecase_3:
    'Development: check a source release tree, then use File Hash Checker to record the original ZIP checksum.',
  tool_unzip_file_usecases_title: 'Good fits',
  tool_unzip_file_warn_dangerous:
    'Some paths were renamed for safety before export.',
  tool_unzip_file_warn_large:
    'Large archive warning: this ZIP may be slow or memory-heavy in the browser.',
};

export default en;
