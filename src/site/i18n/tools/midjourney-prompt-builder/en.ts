/**
 * i18n tool shard (midjourney-prompt-builder / en).
 * Master H1: Midjourney prompt builder; local assembly + optional Cloudflare AI (Turnstile).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Build paste-ready midjourney prompt builder prompts on this page. Fill the scene fields, copy Markdown or JSON into ChatGPT, Gemini, Claude, or DeepSeek. Local assembly stays in your browser; optional Expand/Polish uses Cloudflare Workers AI with Turnstile. Text stays on your device unless you choose AI.',
	tool_midjourney_prompt_builder_build: 'Build prompt',
	tool_midjourney_prompt_builder_clear: 'Clear',
	tool_midjourney_prompt_builder_copy: 'Copy',
	tool_midjourney_prompt_builder_desc:
		'Midjourney prompt builder — local default + optional Cloudflare AI Expand/Polish (Turnstile); Markdown/JSON on device.',
	tool_midjourney_prompt_builder_description:
		'Midjourney prompt builder — Local + Optional AI for ChatGPT, Gemini, Claude, and DeepSeek: assemble structured prompts locally by default, then optionally Expand/Polish via Cloudflare Workers AI (Turnstile required, rate-limited). Markdown default; JSON for pipelines. Local text stays on your device unless you use optional AI. Example: click Load sample for a ready preset, then Build or optionally Expand/Polish.',
	tool_midjourney_prompt_builder_download: 'Download',
	tool_midjourney_prompt_builder_empty: 'Fill at least one field before building.',
	tool_midjourney_prompt_builder_example:
		'Input: Subject = samurai mid-draw on mossy bridge; Style = cinematic ink wash, teal/charcoal; Lighting = sunrise rim + fog; Flags = --v 6.1 --style raw --stylize 120 --chaos 8. Output (Markdown): ## Task includes a suggested MJ line with subject, style, lighting, and --ar 16:9. JSON chip adds structured fields for pipelines.',
	tool_midjourney_prompt_builder_example_title: 'Example',
	tool_midjourney_prompt_builder_faq_a1:
		'Local assembly runs in this browser tab — nothing is uploaded by default. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
	tool_midjourney_prompt_builder_faq_a2:
		'Local mode only formats your fields in this tab. Optional Expand/Polish uses Cloudflare Workers AI after a Turnstile check — it does not call ChatGPT, Gemini, Claude, or DeepSeek APIs from our servers.',
	tool_midjourney_prompt_builder_faq_a3:
		'Prompt template builder covers generic Role/Task/Constraints/Output templates. This page focuses on midjourney prompt builder fields with a dedicated sample and rules for this scenario.',
	tool_midjourney_prompt_builder_faq_a4:
		'Yes. Complete the Turnstile widget in the optional AI panel before Expand or Polish. Without a valid token, AI buttons show an error and local mode still works.',
	tool_midjourney_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_midjourney_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_midjourney_prompt_builder_faq_q1: 'Is my prompt uploaded?',
	tool_midjourney_prompt_builder_faq_q2: 'Does this call ChatGPT or other LLM APIs?',
	tool_midjourney_prompt_builder_faq_q3: 'How is this different from Prompt template builder?',
	tool_midjourney_prompt_builder_faq_q4:
		'Why do I need Turnstile for optional AI?',
	tool_midjourney_prompt_builder_faq_q5: 'Can I get JSON output?',
	tool_midjourney_prompt_builder_faq_q6: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_midjourney_prompt_builder_faq_q7:
		'What is the difference between local and optional Cloudflare AI?',
	tool_midjourney_prompt_builder_faq_a7:
		'Local mode formats your fields in this tab only — nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode.',
	tool_midjourney_prompt_builder_ai_expand:
		'Expand with AI',
	tool_midjourney_prompt_builder_ai_polish:
		'Polish with AI',
	tool_midjourney_prompt_builder_ai_panel_label:
		'Optional Cloudflare AI (Turnstile)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'Send text to Cloudflare Workers AI?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Continue',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Cancel',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI is working…',
	tool_midjourney_prompt_builder_ai_done:
		'AI suggestion applied. Review before copying.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'AI failed. Your local prompt is unchanged.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'AI quota reached. Use local mode or try tomorrow (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Complete the Turnstile check before using AI.',
	tool_midjourney_prompt_builder_fmt_json: 'JSON',
	tool_midjourney_prompt_builder_fmt_label: 'Output format',
	tool_midjourney_prompt_builder_fmt_md: 'Markdown',
	tool_midjourney_prompt_builder_subject_label: 'Subject',
	tool_midjourney_prompt_builder_subject_ph: 'Sample subject…',
	tool_midjourney_prompt_builder_style_label: 'Style',
	tool_midjourney_prompt_builder_style_ph: 'Sample style…',
	tool_midjourney_prompt_builder_lighting_label: 'Lighting',
	tool_midjourney_prompt_builder_lighting_ph: 'Sample lighting…',
	tool_midjourney_prompt_builder_aspect_label: 'Aspect',
	tool_midjourney_prompt_builder_aspect_ph: 'Sample aspect…',
	tool_midjourney_prompt_builder_mj_flags_label: 'Mj / Flags',
	tool_midjourney_prompt_builder_mj_flags_ph: 'Sample mj flags…',
	tool_midjourney_prompt_builder_rules_table_title: 'Midjourney flag mapping',
	tool_midjourney_prompt_builder_rules_table_ar: 'Aspect → --ar',
	tool_midjourney_prompt_builder_rules_table_v: 'Version → --v',
	tool_midjourney_prompt_builder_rules_table_note: 'Append flags from the table when aspect or version is set.',
	tool_midjourney_prompt_builder_rules_map_1_label: '1:1 square',
	tool_midjourney_prompt_builder_rules_map_1_flag: '--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label: '16:9 landscape',
	tool_midjourney_prompt_builder_rules_map_2_flag: '--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label: '9:16 vertical',
	tool_midjourney_prompt_builder_rules_map_3_flag: '--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label: 'MJ v6 default',
	tool_midjourney_prompt_builder_rules_map_4_flag: '--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Fill midjourney prompt builder fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_midjourney_prompt_builder_how_item_1: 'Click Load sample for the default preset.',
	tool_midjourney_prompt_builder_how_item_2: 'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_midjourney_prompt_builder_how_item_3: 'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_midjourney_prompt_builder_how_item_4: 'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_midjourney_prompt_builder_how_title: 'How it works',
	tool_midjourney_prompt_builder_load_sample: 'Load sample',
	tool_midjourney_prompt_builder_platforms_lead:
		'Built for ChatGPT, Gemini, Claude, and DeepSeek — copy the finished prompt into any of those chat UIs.',
	tool_midjourney_prompt_builder_result_label: 'Prompt output',
	tool_midjourney_prompt_builder_rules_body:
		'MJ parameter mapping table for --ar and --v. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1: 'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_midjourney_prompt_builder_rules_item_2: 'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_midjourney_prompt_builder_rules_item_3: 'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_midjourney_prompt_builder_rules_item_4: 'This tool assembles text only; it does not run midjourney prompt builder engines or call chat APIs locally.',
	tool_midjourney_prompt_builder_rules_title: 'Rules you should expect',
	tool_midjourney_prompt_builder_sec_constraints: 'Constraints',
	tool_midjourney_prompt_builder_sec_output: 'Output format',
	tool_midjourney_prompt_builder_sec_role: 'Role',
	tool_midjourney_prompt_builder_sec_task: 'Task',
	tool_midjourney_prompt_builder_status_copied: 'Copied to clipboard.',
	tool_midjourney_prompt_builder_status_done: 'Prompt ready.',
	tool_midjourney_prompt_builder_status_working: 'Building prompt…',
	tool_midjourney_prompt_builder_title:
		'Midjourney prompt builder — Local + Optional AI',
	tool_midjourney_prompt_builder_usecase_1:
		'Ship a paste-ready midjourney prompt builder brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_midjourney_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_midjourney_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_midjourney_prompt_builder_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_midjourney_prompt_builder_usecases_title: 'Good fits',
};

export default en;
