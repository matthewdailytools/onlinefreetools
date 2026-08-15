/**
 * i18n tool shard (archive-extractor / en). Master copy.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
  tool_archive_extractor_article:
    'Open ZIP, TAR, and TAR.GZ archives in your browser, inspect the file tree, preview common text or image entries, and export supported contents as a clean ZIP. Your archive stays on your device and is not uploaded to a server.',
  tool_archive_extractor_choose_file: 'Choose archive',
  tool_archive_extractor_clear: 'Clear',
  tool_archive_extractor_desc:
    'Open ZIP, TAR, and TAR.GZ archives in your browser, preview files, and export a clean ZIP — no server upload.',
  tool_archive_extractor_description:
    'Use this archive extractor online to open compressed files in your browser: choose a ZIP, TAR, or TAR.GZ, inspect the file tree, preview text or images, download one file, or export supported contents as a clean ZIP. Files stay on your device and are not uploaded to a server. Example: sample-archive.tar.gz shows README.txt, src/index.js, and assets/logo.png with safe paths.',
  tool_archive_extractor_download_all: 'Export ZIP',
  tool_archive_extractor_download_file: 'Download file',
  tool_archive_extractor_drop_hint:
    'Drop one archive here. ZIP, TAR, and TAR.GZ run now; RAR, 7Z, and ISO show support notes.',
  tool_archive_extractor_empty: 'Choose an archive first.',
  tool_archive_extractor_engine_badge: 'support notes',
  tool_archive_extractor_err_archive:
    'Could not read this archive. It may be damaged, encrypted, split into volumes, or use an unsupported compression method.',
  tool_archive_extractor_err_engine:
    'RAR, 7Z, and ISO need a heavier multi-format engine that is not bundled in this version. ZIP, TAR, and TAR.GZ still work in the browser.',
  tool_archive_extractor_err_fflate: 'Archive engine failed to load. Check your network and retry.',
  tool_archive_extractor_err_no_file: 'No extracted file is selected.',
  tool_archive_extractor_err_unsupported:
    'This file type is not supported here yet. Try ZIP, TAR, or TAR.GZ, or use a desktop archive tool for this format.',
  tool_archive_extractor_example:
    'The built-in sample-archive.tar.gz opens as a real archive with three entries: README.txt, src/index.js, and assets/logo.png. The page shows the tree, previews README.txt, and can export the supported contents as extracted-archive.zip.',
  tool_archive_extractor_example_title: 'Example',
  tool_archive_extractor_exported_all:
    'Exported files are packed into a new ZIP with safe paths.',
  tool_archive_extractor_faq_a1:
    'No. The archive is read in your browser tab, and extracted bytes stay on your device. The helper script can load from a CDN, but your files are not uploaded to our servers.',
  tool_archive_extractor_faq_a2:
    'ZIP, TAR, TAR.GZ, and TGZ are the working paths in this version. RAR, 7Z, and ISO are shown as support-note formats until a heavier multi-format engine is enabled.',
  tool_archive_extractor_faq_a3:
    'Password-protected archives require a password and may still fail if the format or encryption method is not supported. This tool does not crack, recover, or guess passwords.',
  tool_archive_extractor_faq_a4:
    'Entries with absolute paths, ../ segments, duplicate names, or unsafe characters are renamed or blocked before export. Symlink targets are not written as links.',
  tool_archive_extractor_faq_a5:
    'Large archives can be slow or run out of memory in the browser, especially on phones. The page warns when file count, expanded size, or expansion ratio looks risky.',
  tool_archive_extractor_faq_a6:
    'Export ZIP means the extracted supported files are packed into a new ZIP with cleaned paths. It is not a promise to preserve every original archive feature.',
  tool_archive_extractor_faq_q1: 'Is my archive uploaded?',
  tool_archive_extractor_faq_q2: 'Which archive formats work?',
  tool_archive_extractor_faq_q3: 'Can it open password-protected RAR or 7Z files?',
  tool_archive_extractor_faq_q4: 'What happens to unsafe paths or symlinks?',
  tool_archive_extractor_faq_q5: 'How are very large archives handled?',
  tool_archive_extractor_faq_q6: 'Is RAR to ZIP or 7Z to ZIP a true conversion?',
  tool_archive_extractor_file_count_label: 'Files',
  tool_archive_extractor_format_label: 'Format',
  tool_archive_extractor_how_body:
    'Choose or drop one archive. The page detects ZIP, TAR, or TAR.GZ, builds a safe file list, and previews small text or image entries. Pick a row to download one item, or export the supported extracted files as a new ZIP.',
  tool_archive_extractor_how_title: 'How it works',
  tool_archive_extractor_load_engine: 'Load multi-format engine',
  tool_archive_extractor_load_sample: 'Load sample',
  tool_archive_extractor_no_preview:
    'Preview is not available for this file type. You can still download the file.',
  tool_archive_extractor_preview_title: 'Preview',
  tool_archive_extractor_rules_body:
    'Archive extraction needs clear rules for format support, path safety, previews, and ZIP export behavior.',
  tool_archive_extractor_rules_item_1:
    'ZIP reads the central directory. TAR.GZ is opened in two steps: decompress GZIP, then read TAR file headers.',
  tool_archive_extractor_rules_item_2:
    'RAR, 7Z, and ISO require a heavier multi-format engine; this page does not pretend those paths are active until the engine is loaded.',
  tool_archive_extractor_rules_item_3:
    'Path safety: leading slashes, drive letters, ../ segments, duplicate names, and unsafe characters are cleaned before export.',
  tool_archive_extractor_rules_item_4:
    'Preview: small text, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP, and SVG entries can be previewed; other files show metadata only.',
  tool_archive_extractor_rules_item_5:
    'Limits: encrypted, split, damaged, solid, or unusually expanding archives may fail or require a desktop tool.',
  tool_archive_extractor_rules_title: 'Rules you should expect',
  tool_archive_extractor_selected_label: 'Selected',
  tool_archive_extractor_size_label: 'Extracted size',
  tool_archive_extractor_status_done: 'Archive opened — select a file or export ZIP.',
  tool_archive_extractor_status_reading: 'Reading archive...',
  tool_archive_extractor_title:
    'Archive Extractor Online — Open Compressed Files in Your Browser',
  tool_archive_extractor_total_size_label: 'Expanded size',
  tool_archive_extractor_usecase_1:
    'Development: open a source .tar.gz release, inspect README and src files, then download only what you need.',
  tool_archive_extractor_usecase_2:
    'Operations: review a supplier ZIP, RAR, or 7Z asset package and export supported files as a clean ZIP for teammates.',
  tool_archive_extractor_usecase_3:
    'Managed devices: inspect course materials or attachments on a Chromebook without installing desktop archive software.',
  tool_archive_extractor_usecases_title: 'Good fits',
  tool_archive_extractor_warn_dangerous:
    'Some paths were renamed or skipped for safety before export.',
  tool_archive_extractor_warn_large:
    'Large archive warning: this file may be slow or memory-heavy in the browser.',
};

export default en;
