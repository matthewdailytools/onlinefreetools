/**
 * i18n tool shard (product-design-prompt-builder / en).
 * Master H1: Product design prompt builder; local assembly + optional Cloudflare AI (Turnstile).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Build paste-ready product design prompt builder prompts on this page. Fill the scene fields, copy Markdown or JSON into ChatGPT, Gemini, Claude, or DeepSeek. Local assembly stays in your browser; optional Expand/Polish uses Cloudflare Workers AI with Turnstile. Text stays on your device unless you choose AI.',
	tool_product_design_prompt_builder_build: 'Build prompt',
	tool_product_design_prompt_builder_clear: 'Clear',
	tool_product_design_prompt_builder_copy: 'Copy',
	tool_product_design_prompt_builder_desc:
		'Product design prompt builder — local default + optional Cloudflare AI Expand/Polish (Turnstile); Markdown/JSON on device.',
	tool_product_design_prompt_builder_description:
		'Product design prompt builder — Local + Optional AI for ChatGPT, Gemini, Claude, and DeepSeek: assemble structured prompts locally by default, then optionally Expand/Polish via Cloudflare Workers AI (Turnstile required, rate-limited). Example runs on first paint. Markdown default; JSON for pipelines. Local text stays on your device unless you use optional AI.',
	tool_product_design_prompt_builder_download: 'Download',
	tool_product_design_prompt_builder_empty: 'Fill at least one field before building.',
	tool_product_design_prompt_builder_example:
		'Load sample fills the default preset, builds Markdown, and enables Copy. Optional AI sends only the text you submit for that click after Turnstile.',
	tool_product_design_prompt_builder_example_title: 'Example',
	tool_product_design_prompt_builder_faq_a1:
		'Local assembly runs in this browser tab — nothing is uploaded by default. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
	tool_product_design_prompt_builder_faq_a2:
		'Local mode only formats your fields in this tab. Optional Expand/Polish uses Cloudflare Workers AI after a Turnstile check — it does not call ChatGPT, Gemini, Claude, or DeepSeek APIs from our servers.',
	tool_product_design_prompt_builder_faq_a3:
		'Prompt template builder covers generic Role/Task/Constraints/Output templates. This page focuses on product design prompt builder fields with a dedicated sample and rules for this scenario.',
	tool_product_design_prompt_builder_faq_a4:
		'Yes. Complete the Turnstile widget in the optional AI panel before Expand or Polish. Without a valid token, AI buttons show an error and local mode still works.',
	tool_product_design_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_product_design_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_product_design_prompt_builder_faq_q1: 'Is my prompt uploaded?',
	tool_product_design_prompt_builder_faq_q2: 'Does this call ChatGPT or other LLM APIs?',
	tool_product_design_prompt_builder_faq_q3: 'How is this different from Prompt template builder?',
	tool_product_design_prompt_builder_faq_q4:
		'Why do I need Turnstile for optional AI?',
	tool_product_design_prompt_builder_faq_q5: 'Can I get JSON output?',
	tool_product_design_prompt_builder_faq_q6: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_product_design_prompt_builder_faq_q7:
		'What is the difference between local and optional Cloudflare AI?',
	tool_product_design_prompt_builder_faq_a7:
		'Local mode formats your fields in this tab only — nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode.',
	tool_product_design_prompt_builder_ai_expand:
		'Expand with AI',
	tool_product_design_prompt_builder_ai_polish:
		'Polish with AI',
	tool_product_design_prompt_builder_ai_panel_label:
		'Optional Cloudflare AI (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'Send text to Cloudflare Workers AI?',
	tool_product_design_prompt_builder_ai_consent_body:
		'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Continue',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Cancel',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI is working…',
	tool_product_design_prompt_builder_ai_done:
		'AI suggestion applied. Review before copying.',
	tool_product_design_prompt_builder_ai_err_generic:
		'AI failed. Your local prompt is unchanged.',
	tool_product_design_prompt_builder_ai_err_rate:
		'AI quota reached. Use local mode or try tomorrow (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Complete the Turnstile check before using AI.',
	tool_product_design_prompt_builder_fmt_json: 'JSON',
	tool_product_design_prompt_builder_fmt_label: 'Output format',
	tool_product_design_prompt_builder_fmt_md: 'Markdown',
	tool_product_design_prompt_builder_persona_label: 'Persona',
	tool_product_design_prompt_builder_persona_ph: 'Sample persona…',
	tool_product_design_prompt_builder_problem_label: 'Problem',
	tool_product_design_prompt_builder_problem_ph: 'Sample problem…',
	tool_product_design_prompt_builder_wireframe_scope_label: 'Wireframe / Scope',
	tool_product_design_prompt_builder_wireframe_scope_ph: 'Sample wireframe scope…',
	tool_product_design_prompt_builder_design_tokens_label: 'Design / Tokens',
	tool_product_design_prompt_builder_design_tokens_ph: 'Sample design tokens…',

	tool_product_design_prompt_builder_how_body:
		'Fill product design prompt builder fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_product_design_prompt_builder_how_item_1: 'Load sample already ran the default preset on first paint.',
	tool_product_design_prompt_builder_how_item_2: 'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_product_design_prompt_builder_how_item_3: 'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_product_design_prompt_builder_how_item_4: 'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_product_design_prompt_builder_how_title: 'How it works',
	tool_product_design_prompt_builder_load_sample: 'Load sample',
	tool_product_design_prompt_builder_platforms_lead:
		'Built for ChatGPT, Gemini, Claude, and DeepSeek — copy the finished prompt into any of those chat UIs.',
	tool_product_design_prompt_builder_result_label: 'Prompt output',
	tool_product_design_prompt_builder_rules_body:
		'Persona/problem/wireframe/tokens for UX briefs. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_product_design_prompt_builder_rules_item_1: 'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_product_design_prompt_builder_rules_item_2: 'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_product_design_prompt_builder_rules_item_3: 'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_product_design_prompt_builder_rules_item_4: 'This tool assembles text only; it does not run product design prompt builder engines or call chat APIs locally.',
	tool_product_design_prompt_builder_rules_title: 'Rules you should expect',
	tool_product_design_prompt_builder_sec_constraints: 'Constraints',
	tool_product_design_prompt_builder_sec_output: 'Output format',
	tool_product_design_prompt_builder_sec_role: 'Role',
	tool_product_design_prompt_builder_sec_task: 'Task',
	tool_product_design_prompt_builder_status_copied: 'Copied to clipboard.',
	tool_product_design_prompt_builder_status_done: 'Prompt ready.',
	tool_product_design_prompt_builder_status_working: 'Building prompt…',
	tool_product_design_prompt_builder_title:
		'Product design prompt builder — Local + Optional AI',
	tool_product_design_prompt_builder_usecase_1:
		'Ship a paste-ready product design prompt builder brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_product_design_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_product_design_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_product_design_prompt_builder_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_product_design_prompt_builder_usecases_title: 'Good fits',
};

export default en;
