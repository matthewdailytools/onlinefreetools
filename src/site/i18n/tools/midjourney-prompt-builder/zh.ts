/**
 * i18n tool shard (midjourney-prompt-builder / zh).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'在本页构建可粘贴的 Midjourney Prompt 构建器 Prompt。填写字段，复制 Markdown 或 JSON 到 ChatGPT、Gemini、Claude 或 DeepSeek。默认本地组装；可选 Expand/Polish 使用 Cloudflare Workers AI（Turnstile）。不用 AI 时文本留在本机。',
	tool_midjourney_prompt_builder_build:
		'构建 Prompt',
	tool_midjourney_prompt_builder_clear:
		'清空',
	tool_midjourney_prompt_builder_copy:
		'复制',
	tool_midjourney_prompt_builder_desc:
		'Midjourney Prompt 构建器 — 默认本地组装，可选 Cloudflare AI 扩写/润色（Turnstile）；Markdown/JSON 留在本机。',
	tool_midjourney_prompt_builder_description:
		'步骤与示例：Midjourney Prompt 构建器 — 本地 + 可选 AI：面向 ChatGPT、Gemini、Claude、DeepSeek，默认在本浏览器本地组装 Prompt，可选 Cloudflare Workers AI 扩写/润色（须 Turnstile、有频率限制）。进页自动展示样例。默认 Markdown；JSON 便于流水线。不用 AI 时文本不出本机。',
	tool_midjourney_prompt_builder_download:
		'下载',
	tool_midjourney_prompt_builder_empty:
		'请至少填写一个字段后再构建。',
	tool_midjourney_prompt_builder_example:
		'加载示例填入默认预设、生成 Markdown 并启用复制。可选 AI 在 Turnstile 后仅发送该次点击的文本。',
	tool_midjourney_prompt_builder_example_title:
		'示例',
	tool_midjourney_prompt_builder_faq_a1:
		'默认只在本浏览器标签页本地组装。可选「AI 扩写/润色」仅把该次点击提交的文字发往 Cloudflare Workers AI，不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_midjourney_prompt_builder_faq_a2:
		'本地模式只在本标签页整理字段，不调用 ChatGPT、Gemini、Claude、DeepSeek API。可选 AI 使用 Cloudflare Workers AI（须 Turnstile）。',
	tool_midjourney_prompt_builder_faq_a3:
		'Prompt 模板构建器 covers generic Role/Task/Constraints/Output templates. This page focuses on midjourney prompt builder fields with a dedicated sample and rules for this scenario.',
	tool_midjourney_prompt_builder_faq_a4:
		'可以。使用 Expand/Polish 前须在可选 AI 面板完成 Turnstile；无有效 token 时 AI 按钮报错，本地模式仍可用。',
	tool_midjourney_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_midjourney_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_midjourney_prompt_builder_faq_q1:
		'Is my prompt uploaded?',
	tool_midjourney_prompt_builder_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_midjourney_prompt_builder_faq_q3:
		'How is this different from Prompt 模板构建器?',
	tool_midjourney_prompt_builder_faq_q4:
		'为什么可选 AI 需要 Turnstile？',
	tool_midjourney_prompt_builder_faq_q5:
		'Can I get JSON output?',
	tool_midjourney_prompt_builder_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_midjourney_prompt_builder_faq_q7:
		'本地模式与可选 Cloudflare AI 有何区别？',
	tool_midjourney_prompt_builder_faq_a7:
		'本地模式只在本标签页整理文字，不上传。可选 Expand/Polish 发往 Cloudflare Workers AI（须 Turnstile、有频率限制）。失败或超额时继续用本地模式。',
	tool_midjourney_prompt_builder_ai_expand:
		'AI 扩写',
	tool_midjourney_prompt_builder_ai_polish:
		'AI 润色',
	tool_midjourney_prompt_builder_ai_panel_label:
		'可选 Cloudflare AI（Turnstile）',
	tool_midjourney_prompt_builder_ai_consent_title:
		'发送到 Cloudflare Workers AI？',
	tool_midjourney_prompt_builder_ai_consent_body:
		'此可选步骤会把当前草稿发往 Cloudflare Workers AI；不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能本地组装。',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'继续',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'取消',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI 处理中…',
	tool_midjourney_prompt_builder_ai_done:
		'已应用 AI 建议，复制前请核对。',
	tool_midjourney_prompt_builder_ai_err_generic:
		'AI 失败，本地 Prompt 未改。',
	tool_midjourney_prompt_builder_ai_err_rate:
		'AI 配额已满，请用本地模式或明日（UTC）再试。',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'使用 AI 前请完成 Turnstile 验证。',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'输出格式',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'主体',
	tool_midjourney_prompt_builder_subject_ph:
		'主体描述…',
	tool_midjourney_prompt_builder_style_label:
		'风格',
	tool_midjourney_prompt_builder_style_ph:
		'风格描述…',
	tool_midjourney_prompt_builder_lighting_label:
		'光线',
	tool_midjourney_prompt_builder_lighting_ph:
		'光线描述…',
	tool_midjourney_prompt_builder_aspect_label:
		'画幅',
	tool_midjourney_prompt_builder_aspect_ph:
		'如 16:9…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'MJ 参数',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'如 --v 6.1 --ar 16:9…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Midjourney flag mapping',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Aspect → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'Version → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Append flags from the table when aspect or version is set.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 square',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 landscape',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 vertical',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'MJ v6 default',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'填写 Midjourney Prompt 构建器 字段，本地构建 Prompt，可选 Turnstile 后 Expand/Polish，再粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek。',
	tool_midjourney_prompt_builder_how_item_1:
		'进页已自动运行默认样例（Load sample）。',
	tool_midjourney_prompt_builder_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_midjourney_prompt_builder_how_item_3:
		'可选：完成 Turnstile，再通过 Cloudflare Workers AI 扩写或润色。',
	tool_midjourney_prompt_builder_how_item_4:
		'复制或下载，粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek。',
	tool_midjourney_prompt_builder_how_title:
		'使用方法',
	tool_midjourney_prompt_builder_load_sample:
		'加载示例',
	tool_midjourney_prompt_builder_platforms_lead:
		'适用于 ChatGPT、Gemini、Claude、DeepSeek — 复制成品 Prompt 到任意聊天界面。',
	tool_midjourney_prompt_builder_result_label:
		'Prompt 输出',
	tool_midjourney_prompt_builder_rules_body:
		'Midjourney Prompt 构建器：默认本地组装；可选 Cloudflare AI 有频率限制且须 Turnstile。',
	tool_midjourney_prompt_builder_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_midjourney_prompt_builder_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_midjourney_prompt_builder_rules_item_3:
		'可选 Cloudflare AI 不取代本地模式 — 复制前请核对 AI 输出。',
	tool_midjourney_prompt_builder_rules_item_4:
		'This tool assembles text only; it does not run midjourney prompt builder engines or call chat APIs locally.',
	tool_midjourney_prompt_builder_rules_title:
		'规则说明',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output format',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'已复制到剪贴板。',
	tool_midjourney_prompt_builder_status_done:
		'Prompt 已就绪。',
	tool_midjourney_prompt_builder_status_working:
		'正在构建…',
	tool_midjourney_prompt_builder_title:
		'Midjourney Prompt 构建器 — 本地 + 可选 AI',
	tool_midjourney_prompt_builder_usecase_1:
		'为团队在 ChatGPT、Gemini、Claude 或 DeepSeek 准备可粘贴的 Midjourney Prompt 构建器 简报。',
	tool_midjourney_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_midjourney_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_midjourney_prompt_builder_usecase_4:
		'敏感草稿保持本地 — 仅在同意弹窗后启用 AI。',
	tool_midjourney_prompt_builder_usecases_title:
		'适用场景',
};

export default zh;
