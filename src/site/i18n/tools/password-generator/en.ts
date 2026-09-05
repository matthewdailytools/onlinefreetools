/**
 * i18n tool shard (password-generator / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_password_generator_article:
    'Build random passwords from chosen character sets using crypto.getRandomValues — for quick demos, throwaway accounts, or brainstorming length/charset rules. Not a password manager and not a strength guarantee.',
  tool_password_generator_charset_label: 'Character sets',
  tool_password_generator_clear: 'Clear',
  tool_password_generator_copy: 'Copy',
  tool_password_generator_copy_done: 'Copied',
  tool_password_generator_count_label: 'Count (1–100)',
  tool_password_generator_desc:
    'Create random passwords locally in your browser with crypto.getRandomValues.',
  tool_password_generator_description:
    'Generate random passwords in your browser. Steps: set length (8–128), tick uppercase/lowercase/digits/symbols, optional exclude ambiguous chars, click Generate, copy. Example: 16 chars mixing cases, digits, and symbols. Uses crypto.getRandomValues only — not stored or uploaded.',
  tool_password_generator_digits: 'Digits',
  tool_password_generator_disclaimer:
    'Demo-grade generator for convenience — not a password vault. For banking or primary accounts, use a dedicated password manager and its generator. Passwords are created locally and not saved on our servers.',
  tool_password_generator_empty_charset: 'Enable at least one character set (after exclusions).',
  tool_password_generator_example:
    'Length 16 with all sets enabled might look like `Xk9#mP2$vL4@nQ8!` — mixed case, digits, and symbols. Each click produces a new random string; Load sample uses length 16 and all sets.',
  tool_password_generator_example_title: 'Example',
  tool_password_generator_exclude_ambiguous: 'Exclude ambiguous (0 O I l 1)',
  tool_password_generator_faq_a1:
    'No. Generation runs entirely in your browser. We do not log, store, or transmit passwords you create here.',
  tool_password_generator_faq_a2:
    'Randomness comes from crypto.getRandomValues (CSPRNG), not Math.random. Longer passwords with more character classes generally resist guessing, but no browser tab can promise “unbreakable” — follow your org’s policy and use a manager for production secrets.',
  tool_password_generator_faq_a3:
    'No. This page only creates new random strings. It cannot audit, crack, or recover existing passwords.',
  tool_password_generator_faq_a4:
    'They remove visually similar characters (0/O, 1/l/I) so passwords are easier to read aloud or type — at the cost of a slightly smaller charset.',
  tool_password_generator_faq_a5:
    'Up to 100 passwords per click, one per line in the output. Generate again for another batch.',
  tool_password_generator_faq_q1: 'Are passwords stored or sent to a server?',
  tool_password_generator_faq_q2: 'How strong are these passwords?',
  tool_password_generator_faq_q3: 'Can this tool crack my existing password?',
  tool_password_generator_faq_q4: 'What does “exclude ambiguous” do?',
  tool_password_generator_faq_q5: 'How many passwords can I generate at once?',
  tool_password_generator_generate: 'Generate',
  tool_password_generator_how_body:
    'Slide length, pick character classes, optionally exclude ambiguous glyphs, set count, then Generate. Each character is picked with crypto.getRandomValues from the combined pool. Copy the list — nothing is persisted after you leave the page.',
	tool_password_generator_how_item_1: 'Set password length with the slider.',
	tool_password_generator_how_item_2: 'Tick the character classes you need; optionally exclude ambiguous glyphs.',
	tool_password_generator_how_item_3: 'Set how many passwords to generate, then click Generate.',
	tool_password_generator_how_item_4: 'Copy a single row or copy all, then store them in a password manager.',
  tool_password_generator_how_title: 'How it works',
  tool_password_generator_length_label: 'Length',
  tool_password_generator_lower: 'Lowercase',
  tool_password_generator_output_label: 'Passwords',
  tool_password_generator_rules_body:
    'Charset rules, randomness source, and honest limits — read before using output on a real account.',
  tool_password_generator_rules_item_1:
    'Pools: A–Z, a–z, 0–9, and a default symbol set. At least one pool must remain after toggles and ambiguous exclusion.',
  tool_password_generator_rules_item_2:
    'Random index uses crypto.getRandomValues bytes — never Math.random. Bytes that would skew the modulo are discarded, so every character in the pool stays equally likely.',
  tool_password_generator_rules_item_3:
    'This is not NIST-certified composition enforcement (no forced “one of each class” rule). Enable the sets you need manually.',
  tool_password_generator_rules_item_4:
    'Privacy: local-only generation; clear the output when done on shared machines.',
  tool_password_generator_rules_title: 'Rules you should expect',
  tool_password_generator_sample: 'Load sample',
  tool_password_generator_symbols: 'Symbols',
  tool_password_generator_title: 'Random Password Generator — Create Passwords Locally',
  tool_password_generator_upper: 'Uppercase',
  tool_password_generator_usecase_1: 'Spin up a one-time credential for a staging login you will rotate soon.',
  tool_password_generator_usecase_2: 'Prototype signup forms that need sample strong passwords in QA scripts.',
  tool_password_generator_usecase_3: 'Compare how length and symbol sets change readability before updating team policy.',
  tool_password_generator_usecases_title: 'Good fits',
};
export default en;
