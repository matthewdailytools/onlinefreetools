/**
 * i18n tool shard (file-hash / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_file_hash_algo_label: 'Algorithms',
  tool_file_hash_article:
    'Compute MD5 and SHA hex digests for pasted text or a local file. Compare release checksums, fingerprint configs, or verify downloads — hashing stays in your browser except a one-time CDN fetch when you pick MD5.',
  tool_file_hash_clear: 'Clear',
  tool_file_hash_copy: 'Copy all',
  tool_file_hash_copy_done: 'Copied',
  tool_file_hash_desc:
    'Verify text or file digests locally in your browser — MD5 and SHA hex output.',
  tool_file_hash_description:
    'Hash pasted text or a local file in your browser. Steps: pick Text or File, tick MD5/SHA algorithms, click Hash, copy lowercase hex. Example: text `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. Files are read locally; MD5 loads crypto-js from CDN only when selected.',
  tool_file_hash_empty: 'Paste text or choose a file first.',
  tool_file_hash_example:
    'Text input `hello` with SHA-256 selected → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 of the same string → `5d41402abc4b2a76b9719d911017c592`. Text uses UTF-8 bytes; files use raw bytes.',
  tool_file_hash_example_title: 'Example',
  tool_file_hash_faq_a1:
    'MD5 is fast and still used for legacy checksums (older Linux `md5sum` lists, some CDN ETags). For security (signatures, passwords, tamper evidence) prefer SHA-256 or SHA-512. SHA-1 is deprecated for certificates but may appear in old artifacts.',
  tool_file_hash_faq_a2:
    'Large files are read in chunks with a progress bar. Files over ~100 MB show a warning but we still try. Very large files may be slow or run out of memory — split or use a desktop hasher for multi-GB archives.',
  tool_file_hash_faq_a3:
    'Text is hashed as UTF-8 encoded bytes. A file is hashed as its raw byte stream. The same letters in a `.txt` file can differ from pasted text if encoding or line endings differ.',
  tool_file_hash_faq_a4:
    'No upload. Text and files stay on your device. SHA-* uses the browser Web Crypto API. MD5 alone triggers a lazy load of crypto-js from jsDelivr — your content is not sent to the CDN.',
  tool_file_hash_faq_a5:
    'We output lowercase hex without a `0x` prefix, one line per algorithm. This matches common `md5sum` / `sha256sum` tools on Linux and macOS.',
  tool_file_hash_faq_q1: 'When should I use MD5 vs SHA-256?',
  tool_file_hash_faq_q2: 'How are large files handled?',
  tool_file_hash_faq_q3: 'Does pasted text hash the same as a file?',
  tool_file_hash_faq_q4: 'Is my file or text uploaded?',
  tool_file_hash_faq_q5: 'What hex format do you output?',
  tool_file_hash_file_bytes: 'bytes',
  tool_file_hash_file_label: 'Choose file',
  tool_file_hash_hash: 'Hash',
  tool_file_hash_how_body:
    'Pick Text to hash a paste (UTF-8 bytes) or File to hash a local file (raw bytes). Select one or more algorithms, then Hash. SHA family digests use Web Crypto; MD5 loads a small library on first use. Results appear as lowercase hex, one row per algorithm.',
  tool_file_hash_how_title: 'How it works',
  tool_file_hash_input_mode_label: 'Input mode',
  tool_file_hash_large_warn:
    'File is over 100 MB. Hashing may be slow or use a lot of memory — consider a desktop tool for very large archives.',
  tool_file_hash_md5_fail: 'Could not load the MD5 library from CDN. Try SHA-256 or check your network.',
  tool_file_hash_no_algo: 'Select at least one algorithm.',
  tool_file_hash_output_label: 'Hex digests',
  tool_file_hash_progress_label: 'Reading file…',
  tool_file_hash_rules_body:
    'Algorithm choice, byte semantics, and output format — what to expect before you compare a digest elsewhere.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex chars (128 bits). SHA-1 → 40 hex. SHA-256 → 64 hex. SHA-384 → 96 hex. SHA-512 → 128 hex. All lowercase, no prefix.',
  tool_file_hash_rules_item_2:
    'Text mode: `TextEncoder` UTF-8. File mode: entire file byte stream. A UTF-8 BOM or CRLF in a file changes the digest vs plain paste.',
  tool_file_hash_rules_item_3:
    'Empty text or zero-byte file yields the standard empty-input digest for each algorithm (still valid hex).',
  tool_file_hash_rules_item_4:
    'Privacy: no upload. MD5 is the only path that fetches crypto-js from CDN; SHA-* uses built-in Web Crypto only.',
  tool_file_hash_rules_title: 'Rules you should expect',
  tool_file_hash_sample: 'Load sample',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'File',
  tool_file_hash_tab_text: 'Text',
  tool_file_hash_text_label: 'Text input',
  tool_file_hash_text_placeholder: 'Paste text to hash as UTF-8…',
  tool_file_hash_title: 'File Hash Checker — Verify Digests in Your Browser',
  tool_file_hash_usecase_1:
    'Release engineering: compare an installer SHA-256 with the value published on a download page.',
  tool_file_hash_usecase_2:
    'Config drift: fingerprint a JSON or `.env` snippet before and after a deploy.',
  tool_file_hash_usecase_3:
    'Legacy QA: verify an old MD5 manifest still matches a rebuilt artifact.',
  tool_file_hash_usecases_title: 'Good fits',
};
export default en;
