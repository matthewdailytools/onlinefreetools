/**
 * i18n tool shard (writing-prompt-generator / en).
 * Master H1: Writing prompt generator; local assembly for dialogue, character, script, random.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Build paste-ready writing prompts for dialogue scenes, character studies, script outlines, or random story starters. Choose a mode, fill fields or roll random, then copy Markdown or JSON into ChatGPT, Gemini, Claude, or DeepSeek. Local assembly stays in your browser; optional Expand/Polish uses Cloudflare Workers AI with Turnstile. Text stays on your device unless you choose AI.',
	tool_writing_prompt_generator_build: 'Build prompt',
	tool_writing_prompt_generator_char_flaw_label: 'Flaw / weakness',
	tool_writing_prompt_generator_char_flaw_ph: 'What holds them back…',
	tool_writing_prompt_generator_char_goal_label: 'Goal',
	tool_writing_prompt_generator_char_goal_ph: 'What they want in this story…',
	tool_writing_prompt_generator_char_name_label: 'Character name',
	tool_writing_prompt_generator_char_name_ph: 'First name or role label…',
	tool_writing_prompt_generator_char_traits_label: 'Traits',
	tool_writing_prompt_generator_char_traits_ph: 'Personality, habits, contradictions…',
	tool_writing_prompt_generator_char_voice_label: 'Voice / diction',
	tool_writing_prompt_generator_char_voice_ph: 'Sentence rhythm, vocabulary…',
	tool_writing_prompt_generator_clear: 'Clear',
	tool_writing_prompt_generator_copy: 'Copy',
	tool_writing_prompt_generator_desc:
		'Writing prompt generator — local default + optional Cloudflare AI Expand/Polish (Turnstile); Markdown/JSON on device.',
	tool_writing_prompt_generator_description:
		'Writing prompt generator — Local + Optional AI for ChatGPT, Gemini, Claude, and DeepSeek: assemble structured prompts locally by default, then optionally Expand/Polish via Cloudflare Workers AI (Turnstile required, rate-limited). Example runs on first paint. Markdown default; JSON for pipelines. Local text stays on your device unless you use optional AI.',
	tool_writing_prompt_generator_dlg_characters_label: 'Characters',
	tool_writing_prompt_generator_dlg_characters_ph: 'Names + one-line roles…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Conflict',
	tool_writing_prompt_generator_dlg_conflict_ph: 'What tension drives the scene…',
	tool_writing_prompt_generator_dlg_genre_label: 'Genre / tone',
	tool_writing_prompt_generator_dlg_genre_ph: 'Contemporary drama, rom-com…',
	tool_writing_prompt_generator_dlg_setting_label: 'Setting',
	tool_writing_prompt_generator_dlg_setting_ph: 'Place, time, atmosphere…',
	tool_writing_prompt_generator_dlg_tone_label: 'Dialogue style',
	tool_writing_prompt_generator_dlg_tone_ph: 'Subtext, banter, sparse…',
	tool_writing_prompt_generator_download: 'Download',
	tool_writing_prompt_generator_empty: 'Fill at least one field in this mode before building.',
	tool_writing_prompt_generator_example:
		'Load sample selects Dialogue mode, fills a late-night diner scene, builds Markdown with Role/Task/Constraints/Output sections, and enables Copy. Try Character, Script, or Random chips for other defaults.',
	tool_writing_prompt_generator_example_title: 'Example',
	tool_writing_prompt_generator_faq_a1:
		'Local assembly runs in this browser tab — nothing is uploaded by default. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
	tool_writing_prompt_generator_faq_a2:
		'Local mode only formats your writing fields in this tab. Optional Expand/Polish uses Cloudflare Workers AI after a Turnstile check — it does not call ChatGPT, Gemini, Claude, or DeepSeek APIs from our servers.',
	tool_writing_prompt_generator_faq_a3:
		'Prompt template builder structures generic Role/Task/Constraints/Output templates. This page defaults to writing modes — dialogue fields, character sheets, script beats, and a random prompt generator on one canvas.',
	tool_writing_prompt_generator_faq_a4:
		'Yes. Random mode rolls genre, setting, object, emotion, and conflict. Optional numeric seed reproduces the same roll. Random output is inspiration only — not quality-guaranteed.',
	tool_writing_prompt_generator_faq_a5:
		'Yes. Complete the Turnstile widget in the optional AI panel before Expand or Polish. Without a valid token, AI buttons show an error and local mode still works.',
	tool_writing_prompt_generator_faq_a6:
		'Yes. The JSON chip emits {mode,fields,role,task,constraints,output} for tests or config. Markdown uses ## Role / Task / Constraints / Output headings.',
	tool_writing_prompt_generator_faq_a7:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_writing_prompt_generator_faq_a8:
		'Local mode formats your writing fields in this tab only — nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode.',
	tool_writing_prompt_generator_faq_q1: 'Is my writing prompt uploaded?',
	tool_writing_prompt_generator_faq_q2: 'Does this call an LLM?',
	tool_writing_prompt_generator_faq_q3: 'How is this different from Prompt template builder?',
	tool_writing_prompt_generator_faq_q4: 'Does random prompt generator work here?',
	tool_writing_prompt_generator_faq_q5: 'Why do I need Turnstile for optional AI?',
	tool_writing_prompt_generator_faq_q6: 'Can I get JSON output?',
	tool_writing_prompt_generator_faq_q7: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_writing_prompt_generator_faq_q8: 'What is the difference between local and optional Cloudflare AI?',
	tool_writing_prompt_generator_ai_expand: 'Expand with AI',
	tool_writing_prompt_generator_ai_polish: 'Polish with AI',
	tool_writing_prompt_generator_ai_panel_label: 'Optional Cloudflare AI (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title: 'Send text to Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
	tool_writing_prompt_generator_ai_consent_ok: 'Continue',
	tool_writing_prompt_generator_ai_consent_cancel: 'Cancel',
	tool_writing_prompt_generator_ai_working: 'Cloudflare AI is working…',
	tool_writing_prompt_generator_ai_done: 'AI suggestion applied. Review before copying.',
	tool_writing_prompt_generator_ai_err_generic: 'AI failed. Your local prompt is unchanged.',
	tool_writing_prompt_generator_ai_err_rate: 'AI quota reached. Use local mode or try tomorrow (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile: 'Complete the Turnstile check before using AI.',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Output format',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Pick a writing mode, fill the fields or roll random, build a prompt block, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Choose Dialogue, Character, Script, or Random — Load sample already ran the dialogue preset on first paint.',
	tool_writing_prompt_generator_how_item_2: 'Fill mode-specific fields (or enter a seed and Roll random).',
	tool_writing_prompt_generator_how_item_3: 'Click Build prompt (Random: Roll random), or optionally complete Turnstile and Expand/Polish with Cloudflare Workers AI.',
	tool_writing_prompt_generator_how_item_4: 'Copy or download Markdown/JSON and paste into your chat UI.',
	tool_writing_prompt_generator_how_title: 'How it works',
	tool_writing_prompt_generator_load_sample: 'Load sample',
	tool_writing_prompt_generator_mode_character: 'Character',
	tool_writing_prompt_generator_mode_dialogue: 'Dialogue',
	tool_writing_prompt_generator_mode_label: 'Writing mode',
	tool_writing_prompt_generator_mode_random: 'Random',
	tool_writing_prompt_generator_mode_script: 'Script / outline',
	tool_writing_prompt_generator_platforms_lead:
		'Built for ChatGPT, Gemini, Claude, and DeepSeek — copy the finished writing prompt into any of those chat UIs.',
	tool_writing_prompt_generator_random_lead:
		'Roll a story starter from genre, setting, object, emotion, and conflict. Optional seed repeats the same roll.',
	tool_writing_prompt_generator_random_roll: 'Roll random',
	tool_writing_prompt_generator_random_seed_label: 'Seed (optional)',
	tool_writing_prompt_generator_random_seed_ph: 'e.g. 42',
	tool_writing_prompt_generator_result_label: 'Writing prompt',
	tool_writing_prompt_generator_rules_body:
		'Writing prompts need mode-specific fields, honest random limits, and the same local privacy as other builder tools.',
	tool_writing_prompt_generator_rules_item_1:
		'Four blocks in output: Role, Task, Constraints, Output — aligned with structured prompt templates.',
	tool_writing_prompt_generator_rules_item_2:
		'Random mode absorbs random prompt generator on this URL — no separate doorway page.',
	tool_writing_prompt_generator_rules_item_3:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_writing_prompt_generator_rules_item_4:
		'Optional Cloudflare AI never replaces local mode — review AI output before copying. This tool assembles text only; it does not generate finished stories locally.',
	tool_writing_prompt_generator_rules_title: 'Rules you should expect',
	tool_writing_prompt_generator_scr_notes_label: 'Beat notes',
	tool_writing_prompt_generator_scr_notes_ph: 'Scene count, pacing, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Premise / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'One-paragraph setup…',
	tool_writing_prompt_generator_scr_structure_label: 'Structure',
	tool_writing_prompt_generator_scr_structure_ph: 'Three-act, save the cat, episodic…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'Copied to clipboard.',
	tool_writing_prompt_generator_status_done: 'Prompt ready.',
	tool_writing_prompt_generator_status_working: 'Building prompt…',
	tool_writing_prompt_generator_title:
		'Writing prompt generator — Local + Optional AI',
	tool_writing_prompt_generator_usecase_1:
		'Draft a dialogue-scene prompt for a writers\' group — paste into ChatGPT or Claude for beat suggestions, not full prose.',
	tool_writing_prompt_generator_usecase_2:
		'Spin a random prompt generator roll when you need a fresh story starter without opening a separate randomizer site.',
	tool_writing_prompt_generator_usecase_3:
		'Export a character-sheet prompt JSON for a pipeline test, then open Prompt template builder for API-style four-field templates.',
	tool_writing_prompt_generator_usecase_4:
		'Outline a short script beat sheet locally before you move the prompt into Gemini for table reads.',
	tool_writing_prompt_generator_usecases_title: 'Good fits',
};

export default en;
