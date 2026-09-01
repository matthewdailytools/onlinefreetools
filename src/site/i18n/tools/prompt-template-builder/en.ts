/**
 * i18n tool shard (prompt-template-builder / en).
 * Master H1: Prompt template builder; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Turn draft prompt text into a reusable Role / Task / Constraints / Output template on this page. Paste free-form notes or fill the fields, then copy Markdown or JSON into ChatGPT, Gemini, Claude, or DeepSeek. Nothing is sent to a model API. Text stays on your device and is not uploaded to a server.',
	tool_prompt_template_builder_build: 'Build template',
	tool_prompt_template_builder_clear: 'Clear',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'Tone limits, scope, what to avoid…',
	tool_prompt_template_builder_copy: 'Copy',
	tool_prompt_template_builder_desc:
		'Prompt template builder for ChatGPT, Gemini, Claude & DeepSeek — Markdown/JSON; stays on device.',
	tool_prompt_template_builder_description:
		'Prompt template builder for ChatGPT, Gemini, Claude, and DeepSeek: merge Role, Task, Constraints, and Output into a reusable template. Scene chips cover code review, feature film, short drama, Android, and iOS. Example: the code-review Agent sample runs on first paint. Markdown default; JSON emits {role,task,constraints,output}. Parsing stays in this tab — not an LLM. Text stays on your device and is not uploaded to a server.',
	tool_prompt_template_builder_download: 'Download',
	tool_prompt_template_builder_empty: 'Add free text or at least one field before building.',
	tool_prompt_template_builder_example:
		'Load sample fills the code-review Agent preset, builds Markdown with four ## sections, and enables Copy and Download. Try Movie, Short drama, Android, or iOS chips for other defaults.',
	tool_prompt_template_builder_example_title: 'Example',
	tool_prompt_template_builder_faq_a1:
		'By default, templates are built locally in this browser tab. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI—not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
	tool_prompt_template_builder_faq_a2:
		'Local mode only formats your text in this tab—it does not call ChatGPT, Gemini, Claude, DeepSeek, or any model API. Optional Expand/Polish uses Cloudflare Workers AI (see the FAQ below).',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown turns conversation exports into readable files. This page structures a reusable system prompt from your draft — use both when you archive chats then refine a template.',
	tool_prompt_template_builder_faq_a4:
		'Yes. The JSON chip emits {role,task,constraints,output} for configs or tests. Pair with JSON Schema validator if you need schema checks.',
	tool_prompt_template_builder_faq_a5:
		'Lines starting with Role:, Task:, Constraints:, or Output: in the free-text box are split into sections. Explicit fields override parsed lines.',
	tool_prompt_template_builder_faq_a6:
		'Yes. Copy the built template into ChatGPT, Gemini, Claude, or DeepSeek — same four-field structure works in each chat UI. We do not maintain separate URLs per platform because the job is formatting text, not calling APIs.',
	tool_prompt_template_builder_faq_q1: 'Is my prompt uploaded?',
	tool_prompt_template_builder_faq_q2: 'Does this call an LLM?',
	tool_prompt_template_builder_faq_q3: 'How is this different from ChatGPT export to Markdown?',
	tool_prompt_template_builder_faq_q4: 'Can I get JSON output?',
	tool_prompt_template_builder_faq_q5: 'How does free-text parsing work?',
	tool_prompt_template_builder_faq_q6: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_prompt_template_builder_faq_q7: 'What is the difference between local and optional Cloudflare AI?',
	tool_prompt_template_builder_faq_a7:
		'Local mode formats your text in this tab only—nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode. We do not promise unlimited AI.',
	tool_prompt_template_builder_ai_expand: 'Expand with AI',
	tool_prompt_template_builder_ai_polish: 'Polish with AI',
	tool_prompt_template_builder_ai_panel_label: 'Optional Cloudflare AI',
	tool_prompt_template_builder_ai_consent_title: 'Send text to Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
	tool_prompt_template_builder_ai_consent_ok: 'Continue',
	tool_prompt_template_builder_ai_consent_cancel: 'Cancel',
	tool_prompt_template_builder_ai_working: 'Cloudflare AI is working…',
	tool_prompt_template_builder_ai_done: 'AI suggestion applied. Review before copying.',
	tool_prompt_template_builder_ai_err_generic: 'AI failed. Your local template is unchanged.',
	tool_prompt_template_builder_ai_err_rate: 'AI quota reached. Use local mode or try tomorrow (UTC).',
	tool_prompt_template_builder_ai_err_turnstile: 'Complete the Turnstile check before using AI.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Output format',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Free-form prompt (optional)',
	tool_prompt_template_builder_free_ph: 'Paste a draft, or lines like Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Pick a scene chip or draft your own text, fill Role / Task / Constraints / Output, build a template, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Choose Code review, Movie, Short drama, Android, or iOS — or paste your own draft in the free box.',
	tool_prompt_template_builder_how_item_2: 'Click Build template (Load sample already ran the code-review preset on first paint).',
	tool_prompt_template_builder_how_item_3: 'Switch to JSON if you need {role,task,constraints,output} for code or config.',
	tool_prompt_template_builder_how_item_4: 'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_prompt_template_builder_how_title: 'How it works',
	tool_prompt_template_builder_load_sample: 'Load sample',
	tool_prompt_template_builder_output_fmt_label: 'Output format',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown sections, JSON shape, bullet list…',
	tool_prompt_template_builder_platforms_lead:
		'Built for ChatGPT, Gemini, Claude, and DeepSeek — copy the finished template into any of those chat UIs.',
	tool_prompt_template_builder_result_label: 'Template',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Who the model should act as…',
	tool_prompt_template_builder_rules_body:
		'A reusable prompt template needs clear blocks, field precedence, and honest limits — not a second generator product.',
	tool_prompt_template_builder_rules_item_1:
		'Four blocks: Role, Task, Constraints, Output format. Empty blocks are omitted from Markdown.',
	tool_prompt_template_builder_rules_item_2:
		'Explicit fields win over lines parsed from the free-text box.',
	tool_prompt_template_builder_rules_item_3:
		'Default export is Markdown with ## headings. JSON is a chip on the same canvas.',
	tool_prompt_template_builder_rules_item_4:
		'Scene chips preset fields for film, short drama, and mobile code — same builder, not separate platform URLs.',
	tool_prompt_template_builder_rules_title: 'Rules you should expect',
	tool_prompt_template_builder_scene_android: 'Android code',
	tool_prompt_template_builder_scene_code: 'Code review',
	tool_prompt_template_builder_scene_ios: 'iOS code',
	tool_prompt_template_builder_scene_label: 'Scene preset',
	tool_prompt_template_builder_scene_movie: 'Feature film',
	tool_prompt_template_builder_scene_short_drama: 'Short drama',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'Copied to clipboard.',
	tool_prompt_template_builder_status_done: 'Template ready.',
	tool_prompt_template_builder_status_working: 'Building template…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'What to do step by step…',
	tool_prompt_template_builder_title: 'Prompt template builder',
	tool_prompt_template_builder_usecase_1:
		'Ship a code-review Agent system prompt your team can paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_prompt_template_builder_usecase_2:
		'Turn meeting notes into Role/Task/Constraints blocks before you wire an API call to any chat provider.',
	tool_prompt_template_builder_usecase_3:
		'Export JSON, then open JSON Schema validator to check downstream config files.',
	tool_prompt_template_builder_usecase_4:
		'Load the Movie chip for a three-act beat sheet you paste into your preferred chat UI.',
	tool_prompt_template_builder_usecase_5:
		'Load Short drama for vertical serial hooks and cliffhangers — binge-style mobile episodes.',
	tool_prompt_template_builder_usecase_6:
		'Load Android or iOS for Kotlin/Swift coding-agent templates without opening four platform-specific pages.',
	tool_prompt_template_builder_usecases_title: 'Good fits',
};

export default en;
