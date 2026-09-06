/**
 * i18n tool shard (batch-checksum-release-files / en).
 * Master H1 is the locked long-tail “Batch checksum release files”.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'Hash a folder of release assets in this tab. You get a table, a CSV, and a SHA256SUMS text file — not a ZIP of the binaries. Paste an official list to mark match or mismatch. Files stay on your device and are not uploaded to a server.',
	tool_batch_checksum_release_files_choose_files: 'Choose files',
	tool_batch_checksum_release_files_clear: 'Clear',
	tool_batch_checksum_release_files_col_compare: 'Compare',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'Path',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'Size',
	tool_batch_checksum_release_files_desc:
		'Batch checksum release files: SHA-256 table, optional MD5, paste SHA256SUMS, export CSV or SUMS — stays on your device, not uploaded to a server.',
	tool_batch_checksum_release_files_description:
		'Batch checksum release files: add the assets, hash each with SHA-256 in this tab, optionally add MD5, paste a SHA256SUMS list to compare, export CSV or SUMS text — not a ZIP of the binaries. Steps: choose the set, hash all, paste a list if you have one, export. Example: two tiny sample binaries fill two SHA-256 rows and a match column. Files stay on your device and are not uploaded to a server.',
	tool_batch_checksum_release_files_drop_hint: 'Drop release files (up to 20). Hashing stays in this tab. This page does not ZIP the originals.',
	tool_batch_checksum_release_files_empty: 'Add files first.',
	tool_batch_checksum_release_files_err_md5: 'The MD5 library did not load. Try another current browser, or leave MD5 off.',
	tool_batch_checksum_release_files_err_read: 'Could not read this file. Skipped.',
	tool_batch_checksum_release_files_err_too_many: 'This page takes at most 20 files. Extra files were not added.',
	tool_batch_checksum_release_files_example:
		'Load sample hashes two tiny binaries, fills SHA-256 rows, pastes one SUMS line for the first file so that row shows match, and enables CSV and SUMS export.',
	tool_batch_checksum_release_files_example_title: 'Example',
	tool_batch_checksum_release_files_export_csv: 'Export CSV',
	tool_batch_checksum_release_files_export_sums: 'Export SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'No. Hashing runs in this tab. Files stay on the device and are not uploaded to a server. SHA-256 uses Web Crypto. MD5 loads crypto-js from this site; your bytes still never leave the tab.',
	tool_batch_checksum_release_files_faq_a2:
		'No. Exports are a checksum table as CSV and a SHA256SUMS text file. Packing the binaries is Create ZIP — a different job.',
	tool_batch_checksum_release_files_faq_a3:
		'File Hash is one file or a paste. This page hashes a release set, compares a pasted SHA256SUMS list, and exports CSV plus SUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'Turn on Also MD5. SHA-256 always runs. MD5 is an extra digest for older release lists that still expect it.',
	tool_batch_checksum_release_files_faq_a5:
		'The path column prefers webkitRelativePath. Duplicate names in the queue get a numeric suffix so SUMS lines stay unique.',
	tool_batch_checksum_release_files_faq_q1: 'Are my files uploaded to a server?',
	tool_batch_checksum_release_files_faq_q2: 'Does this ZIP the release binaries?',
	tool_batch_checksum_release_files_faq_q3: 'How is this different from File Hash?',
	tool_batch_checksum_release_files_faq_q4: 'Where is MD5?',
	tool_batch_checksum_release_files_faq_q5: 'What if two files share a name?',
	tool_batch_checksum_release_files_file_count_tpl: '{n} files in the queue',
	tool_batch_checksum_release_files_hash_all: 'Hash all',
	tool_batch_checksum_release_files_how_body:
		'Put the release assets in the queue, hash each file with SHA-256, paste a SHA256SUMS list if you have one, then export CSV or SUMS text — not a ZIP of the files.',
	tool_batch_checksum_release_files_how_item_1: 'Choose the binaries, installers, or checksums you are about to publish.',
	tool_batch_checksum_release_files_how_item_2: 'Keep SHA-256. Turn on Also MD5 only if an older list still uses it.',
	tool_batch_checksum_release_files_how_item_3: 'Press Hash all. Progress is per file. A read error skips that row.',
	tool_batch_checksum_release_files_how_item_4: 'Paste an official SHA256SUMS list to mark match, mismatch, or missing.',
	tool_batch_checksum_release_files_how_item_5: 'Export CSV or SUMS when at least one hash succeeded. Need one file only? Use File Hash.',
	tool_batch_checksum_release_files_how_title: 'How it works',
	tool_batch_checksum_release_files_md5_label: 'Also compute MD5',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 uses Web Crypto on bytes read in 4 MiB slices then concatenated. Output is a table plus CSV and SUMS text, never a ZIP of the originals.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 always runs. MD5 is opt-in and lazy-loads crypto-js from this site; file bytes stay in the tab.',
	tool_batch_checksum_release_files_rules_item_2:
		'SUMS lines look like GNU sha256sum: hex, two spaces or space-star, then a name. Extra names in the paste show as missing.',
	tool_batch_checksum_release_files_rules_item_3:
		'Read failures skip that row. Duplicate queue names get a suffix. Empty queue disables export.',
	tool_batch_checksum_release_files_rules_item_4:
		'Files stay on your device and are not uploaded to a server.',
	tool_batch_checksum_release_files_rules_title: 'Rules you should expect',
	tool_batch_checksum_release_files_sample: 'Load sample',
	tool_batch_checksum_release_files_status_done: 'Batch finished — check the table, then export CSV or SUMS.',
	tool_batch_checksum_release_files_status_hashing: 'Hashing each release file…',
	tool_batch_checksum_release_files_status_match: 'Match',
	tool_batch_checksum_release_files_status_mismatch: 'Mismatch',
	tool_batch_checksum_release_files_status_missing: 'Missing',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'Hashed',
	tool_batch_checksum_release_files_status_skip: 'Skipped',
	tool_batch_checksum_release_files_summary_tpl: '{ok} hashed · {skip} skipped · {match} match · {mismatch} mismatch',
	tool_batch_checksum_release_files_sums_label: 'Paste SHA256SUMS to compare',
	tool_batch_checksum_release_files_sums_placeholder: 'hex  filename',
	tool_batch_checksum_release_files_title: 'Batch checksum release files',
	tool_batch_checksum_release_files_usecase_1: 'GitHub Release assets that need a SHA256SUMS file beside the downloads.',
	tool_batch_checksum_release_files_usecase_2: 'Compare a mirror’s files against an upstream checksum list.',
	tool_batch_checksum_release_files_usecase_3: 'Hash several files without packing the binaries into a ZIP.',
	tool_batch_checksum_release_files_usecases_title: 'Good fits',
	tool_batch_checksum_release_files_warn_large: 'A file is larger than 64 MB — this tab may run out of memory on that row.',
};

export default en;
