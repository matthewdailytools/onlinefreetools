/**
 * i18n tool shard (writing-prompt-generator / en).
 * Master H1: Writing prompt generator; local assembly for dialogue, character, script, random.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Build paste-ready writing prompts for dialogue scenes, character studies, script outlines, or random story starters. Choose a mode, fill fields or roll random, then copy Markdown or JSON into ChatGPT, Gemini, Claude, or DeepSeek. Nothing is sent to a model API. Text stays on your device and is not uploaded to a server.',
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
		'Writing prompt generator for dialogue, character, script & random — Markdown/JSON; stays on device.',
	tool_writing_prompt_generator_description:
		'Writing prompt generator for ChatGPT, Gemini, Claude, and DeepSeek: assemble dialogue, character, script, or random story prompts locally. Random prompt generator mode rolls genre, setting, object, and conflict on the same page. Example: a dialogue scene sample runs on first paint. Markdown default; JSON emits {mode,fields,role,task,constraints,output}. Not an LLM — text stays on your device and is not uploaded to a server.',
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
		'No. Prompts are assembled in this browser tab. Nothing is uploaded to OpenAI, Google, Anthropic, DeepSeek, or our servers.',
	tool_writing_prompt_generator_faq_a2:
		'No. This page formats your writing brief into prompt blocks. It does not call ChatGPT, Gemini, Claude, DeepSeek, or any other model API.',
	tool_writing_prompt_generator_faq_a3:
		'Prompt template builder structures generic Role/Task/Constraints/Output templates. This page defaults to writing modes — dialogue fields, character sheets, script beats, and a random prompt generator on one canvas.',
	tool_writing_prompt_generator_faq_a4:
		'Yes. Random mode rolls genre, setting, object, emotion, and conflict. Optional numeric seed reproduces the same roll. Random output is inspiration only — not quality-guaranteed.',
	tool_writing_prompt_generator_faq_a5:
		'Yes. The JSON chip emits {mode,fields,role,task,constraints,output} for tests or config. Markdown uses ## Role / Task / Constraints / Output headings.',
	tool_writing_prompt_generator_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_writing_prompt_generator_faq_q1: 'Is my writing prompt uploaded?',
	tool_writing_prompt_generator_faq_q2: 'Does this call an LLM?',
	tool_writing_prompt_generator_faq_q3: 'How is this different from Prompt template builder?',
	tool_writing_prompt_generator_faq_q4: 'Does random prompt generator work here?',
	tool_writing_prompt_generator_faq_q5: 'Can I get JSON output?',
	tool_writing_prompt_generator_faq_q6: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Output format',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Pick a writing mode, fill the fields or roll random, build a prompt block, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Choose Dialogue, Character, Script, or Random — Load sample already ran the dialogue preset on first paint.',
	tool_writing_prompt_generator_how_item_2: 'Fill mode-specific fields (or enter a seed and Roll random).',
	tool_writing_prompt_generator_how_item_3: 'Click Build prompt (hidden in Random — use Roll random instead).',
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
		'This tool assembles text only. It does not generate finished stories or call cloud models.',
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
	tool_writing_prompt_generator_title: 'Writing prompt generator',
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
