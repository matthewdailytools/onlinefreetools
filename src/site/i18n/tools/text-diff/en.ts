/**
 * i18n tool shard (text-diff / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_text_diff_article:
    'Use this free text diff checker to compare two strings or documents side by side. Choose line mode for configs and code, word mode for writing and prompts, and character mode for tiny edits. Everything runs locally — your paste is not uploaded.',
  tool_text_diff_clear: 'Clear',
  tool_text_diff_compare: 'Compare',
  tool_text_diff_desc:
    'Check the difference between two texts by pasting both sides — line, word, or character, in the browser.',
  tool_text_diff_description:
    'Check the difference between two texts in your browser. Process: paste original and revised text, pick line, word, or character mode, in line or word mode, optionally ignore spaces or treat Windows newlines (CRLF) like LF, then highlight adds and deletes. Files stay on your device and are not uploaded. Example: change "hello world" to "hello there" — word mode shows one replacement. It accepts pasted plain text rather than Word, Excel, or structured JSON files.',
  tool_text_diff_empty_hint: 'Paste text on one or both sides, then compare.',
  tool_text_diff_example:
    'Example (word mode): A = "Hello world", B = "Hello there" → one change (world → there). Line mode on three lines where only the middle line differs marks that line as changed.',
  tool_text_diff_example_title: 'Example',
  tool_text_diff_faq_a1:
    'Use line mode for code and config files. Use word mode for sentences, emails, and AI prompts — it highlights individual words instead of whole lines.',
  tool_text_diff_faq_a2:
    'Your pasted text is not uploaded or stored by us — comparison runs in your browser. The page loads the open-source jsdiff library from this site; that does not send your text to our servers.',
  tool_text_diff_faq_a3:
    'Windows uses CRLF and Unix uses LF, so the same line can look different. Turn on “Treat CRLF and LF the same” before comparing.',
  tool_text_diff_faq_a4:
    'No. This page is paste-only plain text — not images, ZIP, Word, Excel, or structured JSON. Use a dedicated compare page if you need to open .txt files, .docx, JSON objects, or spreadsheets.',
  tool_text_diff_faq_q4: 'Can I compare images, Word, or binary files?',
  tool_text_diff_faq_q1: 'Should I compare by line or by word?',
  tool_text_diff_faq_q2: 'Is my text uploaded to a server?',
  tool_text_diff_faq_q3: 'Why does a newline-only change mark a whole line red?',
  tool_text_diff_faq_q5: "Does Ignore spaces work in character mode?",
  tool_text_diff_faq_a5:
    "No. Character mode compares every character, so the option is disabled there. Use line or word mode when whitespace-only edits should be ignored.",
  tool_text_diff_how_body:
    "Paste the original and revised text, choose line, word, or character comparison, then review green additions and red deletions. The text stays on your device and is not uploaded to a server.",
  tool_text_diff_load_sample: "Load sample",
  tool_text_diff_how_item_1: "Paste the original text on the left.",
  tool_text_diff_how_item_2: "Paste the revised text on the right.",
  tool_text_diff_how_item_3: "Choose line, word, or character mode, then set whitespace and newline options when available.",
  tool_text_diff_how_item_4: "Select Compare and review the highlighted additions and deletions.",
  tool_text_diff_how_title: 'How it works',
  tool_text_diff_ignore_ws: 'Ignore spaces',
  tool_text_diff_label_a: 'Original text',
  tool_text_diff_label_b: 'Revised text',
  tool_text_diff_large_warn: 'Very large paste (>100k characters). Comparison may feel slow — try a shorter excerpt.',
  tool_text_diff_legend: 'Green = added · Red = removed',
  tool_text_diff_mode_chars: 'Character',
  tool_text_diff_mode_label: 'Compare by',
  tool_text_diff_mode_lines: 'Line',
  tool_text_diff_mode_words: 'Word',
  tool_text_diff_need_lib: 'Could not load the diff library. Check your connection and refresh.',
  tool_text_diff_no_diff: 'No differences — the two texts match.',
  tool_text_diff_normalize_eol: 'Treat CRLF and LF the same',
  tool_text_diff_placeholder_a: 'Paste the original text…',
  tool_text_diff_placeholder_b: 'Paste the revised text…',
  tool_text_diff_result_label: 'Differences',
  tool_text_diff_rules_body:
    "The selected mode controls what counts as one change. Character mode disables Ignore spaces because that option only applies to line and word comparison.",
  tool_text_diff_rules_intro:
    'The checker finds a short list of edits that turn text A into text B (classic diff / Myers-style matching via jsdiff). Pick a mode that matches your task:',
  tool_text_diff_rules_item_3: 'Character — best for tiny typos; most precise, but noisy on longer edits.',
  tool_text_diff_rules_item_1:
    'Line — best for .env, YAML, and code; one changed line lights up as a whole. Fast and easy to scan, but a single-word edit still marks the entire line.',
  tool_text_diff_rules_item_2:
    'Word — best for sentences, emails, and AI prompts; highlights individual words. Clearer for prose, but can split awkwardly on punctuation.',
  tool_text_diff_rules_item_4:
    "Ignore spaces applies to line and word modes only. Treat CRLF and LF the same normalizes Windows and Unix newlines in every mode.",
  tool_text_diff_rules_title: 'How the comparison works',
  tool_text_diff_sample_a: 'Hello world\nline two\nline three',
  tool_text_diff_sample_b: 'Hello there\nline two\nline three',
  tool_text_diff_summary: '{added} added, {removed} removed',
  tool_text_diff_swap: 'Swap sides',
  tool_text_diff_title: 'Check difference between two texts',
  tool_text_diff_usecase_1: 'Check config changes: compare two .env or YAML snippets line by line.',
  tool_text_diff_usecase_2: 'Review prompt edits: use word mode to see which wording was added or removed.',
  tool_text_diff_usecase_3: 'Proofread copy or translations: confirm only the intended sentences changed.',
  tool_text_diff_usecases_title: 'When to use it',
};
export default en;
