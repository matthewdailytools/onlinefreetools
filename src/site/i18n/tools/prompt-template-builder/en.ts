/**
 * i18n tool shard (prompt-template-builder / en).
 * Master H1: Prompt template builder; not an LLM — structured Role/Task/Constraints/Output.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Turn draft prompt text into a reusable Role / Task / Constraints / Output template on this page. Paste free-form notes or fill the fields, then copy Markdown or JSON. Nothing is sent to a model API. Text stays on your device and is not uploaded to a server.',
	tool_prompt_template_builder_build: 'Build template',
	tool_prompt_template_builder_clear: 'Clear',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'Tone limits, scope, what to avoid…',
	tool_prompt_template_builder_copy: 'Copy',
	tool_prompt_template_builder_desc:
		'Build a structured Prompt template (Markdown/JSON) — stays on your device, not uploaded.',
	tool_prompt_template_builder_description:
		'Prompt template builder: merge free-form prompt text with Role, Task, Constraints, and Output fields into a reusable template. Example: the sample code-review Agent template appears on first paint. Markdown is the default chip; JSON emits {role,task,constraints,output}. Parsing stays in this tab — not an LLM and not a cloud prompt library. Text stays on your device and is not uploaded to a server.',
	tool_prompt_template_builder_download: 'Download',
	tool_prompt_template_builder_empty: 'Add free text or at least one field before building.',
	tool_prompt_template_builder_example:
		'Load sample fills Role, Task, Constraints, and Output for a code-review Agent, builds Markdown with four ## sections, and enables Copy and Download.',
	tool_prompt_template_builder_example_title: 'Example',
	tool_prompt_template_builder_faq_a1:
		'No. Templates are built in this browser tab. Nothing is uploaded to OpenAI, Anthropic, or our servers.',
	tool_prompt_template_builder_faq_a2:
		'No. This page only formats your text into blocks. It does not call any model API or invent new copy.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown turns conversation exports into readable files. This page structures a reusable system prompt from your draft — use both when you archive chats then refine a template.',
	tool_prompt_template_builder_faq_a4:
		'Yes. The JSON chip emits {role,task,constraints,output} for configs or tests. Pair with JSON Schema validator if you need schema checks.',
	tool_prompt_template_builder_faq_a5:
		'Lines starting with Role:, Task:, Constraints:, or Output: in the free-text box are split into sections. Explicit fields override parsed lines.',
	tool_prompt_template_builder_faq_q1: 'Is my prompt uploaded?',
	tool_prompt_template_builder_faq_q2: 'Does this call an LLM?',
	tool_prompt_template_builder_faq_q3: 'How is this different from ChatGPT export to Markdown?',
	tool_prompt_template_builder_faq_q4: 'Can I get JSON output?',
	tool_prompt_template_builder_faq_q5: 'How does free-text parsing work?',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Output format',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Free-form prompt (optional)',
	tool_prompt_template_builder_free_ph: 'Paste a draft, or lines like Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Draft a prompt, optionally split Role / Task / Constraints / Output, build a template, then copy or download. Markdown and JSON are chips on the same job.',
	tool_prompt_template_builder_how_item_1:
		'Paste a draft in the free box or fill Role, Task, Constraints, and Output — the job is a structured prompt template.',
	tool_prompt_template_builder_how_item_2: 'Click Build template (Load sample already ran on first paint).',
	tool_prompt_template_builder_how_item_3: 'Switch to JSON if you need {role,task,constraints,output} for code or config.',
	tool_prompt_template_builder_how_item_4: 'Copy or download. Edit fields and rebuild anytime.',
	tool_prompt_template_builder_how_title: 'How it works',
	tool_prompt_template_builder_load_sample: 'Load sample',
	tool_prompt_template_builder_output_fmt_label: 'Output format',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown sections, JSON shape, bullet list…',
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
		'This tool formats text only. It does not estimate tokens or validate JSON against a schema.',
	tool_prompt_template_builder_rules_title: 'Rules you should expect',
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
		'Ship a code-review Agent system prompt your team can paste into any chat UI.',
	tool_prompt_template_builder_usecase_2:
		'Turn meeting notes into Role/Task/Constraints blocks before you wire an API call.',
	tool_prompt_template_builder_usecase_3:
		'Export JSON, then open JSON Schema validator to check downstream config files.',
	tool_prompt_template_builder_usecases_title: 'Good fits',
};

export default en;
