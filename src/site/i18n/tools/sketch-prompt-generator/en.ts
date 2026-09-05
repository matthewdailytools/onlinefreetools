/**
 * i18n tool shard (sketch-prompt-generator / en).
 * Master H1: Sketch.app prompt generator — AI steps for the Mac design app (not pencil line-art).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Build paste-ready prompts that tell ChatGPT, Gemini, Claude, or DeepSeek how to operate Sketch.app — Artboards, Symbols, Shared Styles, and exports. Fill the fields, copy Markdown or JSON. Local assembly stays in your browser; optional Expand/Polish uses Cloudflare Workers AI with Turnstile. Text stays on your device unless you choose AI.',
	tool_sketch_prompt_generator_build: 'Build prompt',
	tool_sketch_prompt_generator_clear: 'Clear',
	tool_sketch_prompt_generator_copy: 'Copy',
	tool_sketch_prompt_generator_desc:
		'Sketch.app prompt generator — local default + optional Cloudflare AI Expand/Polish (Turnstile); Markdown/JSON on device.',
	tool_sketch_prompt_generator_description:
		'Sketch.app prompt generator — Local + Optional AI for ChatGPT, Gemini, Claude, and DeepSeek: assemble structured prompts that guide Sketch.app design steps (Artboards, Symbols, exports) locally by default, then optionally Expand/Polish via Cloudflare Workers AI (Turnstile required, rate-limited). Markdown default; JSON for pipelines. Local text stays on your device unless you use optional AI.',
	tool_sketch_prompt_generator_download: 'Download',
	tool_sketch_prompt_generator_empty: 'Fill at least one field before building.',
	tool_sketch_prompt_generator_example:
		'Input: Goal = mobile login screen in Sketch.app; Artboards = iPhone 14 390×844; Symbols = Button/Primary + Input/TextField; Export = 1x/2x/3x PNG + PDF review. Output (Markdown): ## Role → Sketch.app ops assistant; ## Task → numbered Artboard / Symbol / Export checklist.',
	tool_sketch_prompt_generator_example_title: 'Example',
	tool_sketch_prompt_generator_faq_a1:
		'Local assembly runs in this browser tab — nothing is uploaded by default. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
	tool_sketch_prompt_generator_faq_a2:
		'Local mode only formats your fields in this tab. Optional Expand/Polish uses Cloudflare Workers AI after a Turnstile check — it does not call ChatGPT, Gemini, Claude, or DeepSeek APIs from our servers, and it does not remote-control Sketch.app.',
	tool_sketch_prompt_generator_faq_a3:
		'Prompt template builder covers generic Role/Task/Constraints/Output templates. This page focuses on Sketch.app operations: goal, Artboards, Symbols/styles, and export steps.',
	tool_sketch_prompt_generator_faq_a4:
		'No. Midjourney prompt builder targets raster AI image styles. This page builds prompts for operating Sketch.app (Mac UI/design software). For pencil or line-art image prompts, use Midjourney prompt builder instead.',
	tool_sketch_prompt_generator_faq_a5:
		'Yes. Complete the Turnstile widget in the optional AI panel before Expand or Polish. Without a valid token, AI buttons show an error and local mode still works.',
	tool_sketch_prompt_generator_faq_a6:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_sketch_prompt_generator_faq_a7:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek so the chat AI can walk you through Sketch.app menus — or draft plugin/script notes. We format text only; we do not run Sketch for you.',
	tool_sketch_prompt_generator_faq_a8:
		'Local mode formats your fields in this tab only — nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode.',
	tool_sketch_prompt_generator_faq_q1: 'Is my prompt uploaded?',
	tool_sketch_prompt_generator_faq_q2: 'Does this call ChatGPT or control Sketch.app remotely?',
	tool_sketch_prompt_generator_faq_q3: 'How is this different from Prompt template builder?',
	tool_sketch_prompt_generator_faq_q4: 'Is this for pencil sketch or Midjourney line-art prompts?',
	tool_sketch_prompt_generator_faq_q5: 'Why do I need Turnstile for optional AI?',
	tool_sketch_prompt_generator_faq_q6: 'Can I get JSON output?',
	tool_sketch_prompt_generator_faq_q7: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_sketch_prompt_generator_faq_q8: 'What is the difference between local and optional Cloudflare AI?',
	tool_sketch_prompt_generator_ai_expand: 'Expand with AI',
	tool_sketch_prompt_generator_ai_polish: 'Polish with AI',
	tool_sketch_prompt_generator_ai_panel_label: 'Optional Cloudflare AI (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: 'Send text to Cloudflare Workers AI?',
	tool_sketch_prompt_generator_ai_consent_body:
		'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
	tool_sketch_prompt_generator_ai_consent_ok: 'Continue',
	tool_sketch_prompt_generator_ai_consent_cancel: 'Cancel',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI is working…',
	tool_sketch_prompt_generator_ai_done: 'AI suggestion applied. Review before copying.',
	tool_sketch_prompt_generator_ai_err_generic: 'AI failed. Your local prompt is unchanged.',
	tool_sketch_prompt_generator_ai_err_rate: 'AI quota reached. Use local mode or try tomorrow (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile: 'Complete the Turnstile check before using AI.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'Output format',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'Goal / deliverable',
	tool_sketch_prompt_generator_goal_ph: 'e.g. Login screen set in Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'Artboards / pages',
	tool_sketch_prompt_generator_artboard_ph: 'e.g. iPhone 14 390×844, Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbols / styles / libraries',
	tool_sketch_prompt_generator_symbols_ph: 'e.g. Button/Primary, Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'Export / handoff steps',
	tool_sketch_prompt_generator_export_ph: 'e.g. 1x/2x/3x PNG, PDF review…',
	tool_sketch_prompt_generator_how_body:
		'Fill Sketch.app fields (goal, Artboards, Symbols, export), build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek so the AI can guide Sketch.app steps.',
	tool_sketch_prompt_generator_how_item_1: 'Click Load sample for the default Sketch.app login-screen preset.',
	tool_sketch_prompt_generator_how_item_2: 'Edit Goal, Artboards, Symbols, and Export, then click Build prompt (or switch to JSON).',
	tool_sketch_prompt_generator_how_item_3: 'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'Copy or download, paste into your chat AI, and follow the Sketch.app checklist it returns.',
	tool_sketch_prompt_generator_how_title: 'How it works',
	tool_sketch_prompt_generator_load_sample: 'Load sample',
	tool_sketch_prompt_generator_platforms_lead:
		'Built for ChatGPT, Gemini, Claude, and DeepSeek — copy the finished prompt so those chats can coach Sketch.app operations.',
	tool_sketch_prompt_generator_result_label: 'Prompt output',
	tool_sketch_prompt_generator_rules_body:
		'Fields map to Sketch.app work: deliverable, Artboards, Symbols/styles, export. Local assembly is default; optional AI is rate-limited and requires Turnstile. This page does not launch Sketch.app.',
	tool_sketch_prompt_generator_rules_item_1: 'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_sketch_prompt_generator_rules_item_2: 'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_sketch_prompt_generator_rules_item_3: 'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_sketch_prompt_generator_rules_item_4:
		'This tool assembles text only; it does not run Sketch.app, plugins, Midjourney, or chat APIs locally.',
	tool_sketch_prompt_generator_rules_title: 'Rules you should expect',
	tool_sketch_prompt_generator_sec_constraints: 'Constraints',
	tool_sketch_prompt_generator_sec_output: 'Output format',
	tool_sketch_prompt_generator_sec_role: 'Role',
	tool_sketch_prompt_generator_sec_task: 'Task',
	tool_sketch_prompt_generator_status_copied: 'Copied to clipboard.',
	tool_sketch_prompt_generator_status_done: 'Prompt ready.',
	tool_sketch_prompt_generator_status_working: 'Building prompt…',
	tool_sketch_prompt_generator_title: 'Sketch.app prompt generator — Local + Optional AI',
	tool_sketch_prompt_generator_usecase_1:
		'Brief a teammate’s chat AI with Artboard sizes and Symbol names so they can rebuild a screen in Sketch.app.',
	tool_sketch_prompt_generator_usecase_2:
		'Draft export and handoff checklists (PNG slices, PDF review) before design QA.',
	tool_sketch_prompt_generator_usecase_3:
		'Compare with Product design prompt builder when you need persona/wireframe product thinking instead of Sketch.app menu steps.',
	tool_sketch_prompt_generator_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_sketch_prompt_generator_usecases_title: 'Good fits',
};

export default en;
