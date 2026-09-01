/**
 * i18n tool shard (short-drama-prompt-generator / en).
 * Master H1: Short drama prompt generator; local assembly + optional Cloudflare AI (Turnstile).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Build paste-ready short drama prompt generator prompts on this page. Fill the scene fields, copy Markdown or JSON into ChatGPT, Gemini, Claude, or DeepSeek. Local assembly stays in your browser; optional Expand/Polish uses Cloudflare Workers AI with Turnstile. Text stays on your device unless you choose AI.',
	tool_short_drama_prompt_generator_build: 'Build prompt',
	tool_short_drama_prompt_generator_clear: 'Clear',
	tool_short_drama_prompt_generator_copy: 'Copy',
	tool_short_drama_prompt_generator_desc:
		'Short drama prompt generator — local default + optional Cloudflare AI Expand/Polish (Turnstile); Markdown/JSON on device.',
	tool_short_drama_prompt_generator_description:
		'Short drama prompt generator — Local + Optional AI for ChatGPT, Gemini, Claude, and DeepSeek: assemble structured prompts locally by default, then optionally Expand/Polish via Cloudflare Workers AI (Turnstile required, rate-limited). Example runs on first paint. Markdown default; JSON for pipelines. Local text stays on your device unless you use optional AI.',
	tool_short_drama_prompt_generator_download: 'Download',
	tool_short_drama_prompt_generator_empty: 'Fill at least one field before building.',
	tool_short_drama_prompt_generator_example:
		'Load sample fills the default preset, builds Markdown, and enables Copy. Optional AI sends only the text you submit for that click after Turnstile.',
	tool_short_drama_prompt_generator_example_title: 'Example',
	tool_short_drama_prompt_generator_faq_a1:
		'Local assembly runs in this browser tab — nothing is uploaded by default. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
	tool_short_drama_prompt_generator_faq_a2:
		'Local mode only formats your fields in this tab. Optional Expand/Polish uses Cloudflare Workers AI after a Turnstile check — it does not call ChatGPT, Gemini, Claude, or DeepSeek APIs from our servers.',
	tool_short_drama_prompt_generator_faq_a3:
		'Prompt template builder covers generic Role/Task/Constraints/Output templates. This page focuses on short drama prompt generator fields with a dedicated sample and rules for this scenario.',
	tool_short_drama_prompt_generator_faq_a4:
		'Yes. Complete the Turnstile widget in the optional AI panel before Expand or Polish. Without a valid token, AI buttons show an error and local mode still works.',
	tool_short_drama_prompt_generator_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_short_drama_prompt_generator_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_short_drama_prompt_generator_faq_q1: 'Is my prompt uploaded?',
	tool_short_drama_prompt_generator_faq_q2: 'Does this call ChatGPT or other LLM APIs?',
	tool_short_drama_prompt_generator_faq_q3: 'How is this different from Prompt template builder?',
	tool_short_drama_prompt_generator_faq_q4:
		'Why do I need Turnstile for optional AI?',
	tool_short_drama_prompt_generator_faq_q5: 'Can I get JSON output?',
	tool_short_drama_prompt_generator_faq_q6: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'What is the difference between local and optional Cloudflare AI?',
	tool_short_drama_prompt_generator_faq_a7:
		'Local mode formats your fields in this tab only — nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode.',
	tool_short_drama_prompt_generator_ai_expand:
		'Expand with AI',
	tool_short_drama_prompt_generator_ai_polish:
		'Polish with AI',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Optional Cloudflare AI (Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'Send text to Cloudflare Workers AI?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Continue',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Cancel',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI is working…',
	tool_short_drama_prompt_generator_ai_done:
		'AI suggestion applied. Review before copying.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'AI failed. Your local prompt is unchanged.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'AI quota reached. Use local mode or try tomorrow (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Complete the Turnstile check before using AI.',
	tool_short_drama_prompt_generator_fmt_json: 'JSON',
	tool_short_drama_prompt_generator_fmt_label: 'Output format',
	tool_short_drama_prompt_generator_fmt_md: 'Markdown',
	tool_short_drama_prompt_generator_episodes_label: 'Episodes',
	tool_short_drama_prompt_generator_episodes_ph: 'Sample episodes…',
	tool_short_drama_prompt_generator_hook_label: 'Hook',
	tool_short_drama_prompt_generator_hook_ph: 'Sample hook…',
	tool_short_drama_prompt_generator_cliffhanger_label: 'Cliffhanger',
	tool_short_drama_prompt_generator_cliffhanger_ph: 'Sample cliffhanger…',
	tool_short_drama_prompt_generator_vertical_format_label: 'Vertical / Format',
	tool_short_drama_prompt_generator_vertical_format_ph: 'Sample vertical format…',
	tool_short_drama_prompt_generator_genre_label: 'Genre',
	tool_short_drama_prompt_generator_genre_ph: 'Sample genre…',

	tool_short_drama_prompt_generator_how_body:
		'Fill short drama prompt generator fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_short_drama_prompt_generator_how_item_1: 'Load sample already ran the default preset on first paint.',
	tool_short_drama_prompt_generator_how_item_2: 'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_short_drama_prompt_generator_how_item_3: 'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_short_drama_prompt_generator_how_item_4: 'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_short_drama_prompt_generator_how_title: 'How it works',
	tool_short_drama_prompt_generator_load_sample: 'Load sample',
	tool_short_drama_prompt_generator_platforms_lead:
		'Built for ChatGPT, Gemini, Claude, and DeepSeek — copy the finished prompt into any of those chat UIs.',
	tool_short_drama_prompt_generator_result_label: 'Prompt output',
	tool_short_drama_prompt_generator_rules_body:
		'Episodic hooks and cliffhangers for vertical binge. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1: 'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_short_drama_prompt_generator_rules_item_2: 'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_short_drama_prompt_generator_rules_item_3: 'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_short_drama_prompt_generator_rules_item_4: 'This tool assembles text only; it does not run short drama prompt generator engines or call chat APIs locally.',
	tool_short_drama_prompt_generator_rules_title: 'Rules you should expect',
	tool_short_drama_prompt_generator_sec_constraints: 'Constraints',
	tool_short_drama_prompt_generator_sec_output: 'Output format',
	tool_short_drama_prompt_generator_sec_role: 'Role',
	tool_short_drama_prompt_generator_sec_task: 'Task',
	tool_short_drama_prompt_generator_status_copied: 'Copied to clipboard.',
	tool_short_drama_prompt_generator_status_done: 'Prompt ready.',
	tool_short_drama_prompt_generator_status_working: 'Building prompt…',
	tool_short_drama_prompt_generator_title:
		'Short drama prompt generator — Local + Optional AI',
	tool_short_drama_prompt_generator_usecase_1:
		'Ship a paste-ready short drama prompt generator brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_short_drama_prompt_generator_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_short_drama_prompt_generator_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_short_drama_prompt_generator_usecases_title: 'Good fits',
};

export default en;
