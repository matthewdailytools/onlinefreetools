/**
 * i18n 工具分片（prompt-template-builder / zh）。
 * 检索向 H1：Prompt 模板构建器；description 与首屏体现 ChatGPT / Gemini / Claude / DeepSeek。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_prompt_template_builder_article:
		'在本页把草稿 Prompt 整理成可复用的 Role / Task / Constraints / Output 模板。可粘贴自由文本或填写字段，再复制 Markdown 或 JSON 到 ChatGPT、Gemini、Claude 或 DeepSeek。不调用任何模型 API。文本留在本机，不上传服务器。',
	tool_prompt_template_builder_build: '构建模板',
	tool_prompt_template_builder_clear: '清空',
	tool_prompt_template_builder_constraints_label: '约束',
	tool_prompt_template_builder_constraints_ph: '语气限制、范围、避免事项…',
	tool_prompt_template_builder_copy: '复制',
	tool_prompt_template_builder_desc:
		'Prompt 模板构建器 — 默认本地组装，可选 Cloudflare AI 扩写/润色（Turnstile）；Markdown/JSON 留在本机。',
	tool_prompt_template_builder_description:
		'步骤与示例：Prompt 模板构建器 — 本地 + 可选 AI：面向 ChatGPT、Gemini、Claude、DeepSeek，默认在本浏览器本地组装 Prompt，可选 Cloudflare Workers AI 扩写/润色（须 Turnstile、有频率限制）。进页自动展示样例。默认 Markdown；JSON 便于流水线。不用 AI 时文本不出本机。',
	tool_prompt_template_builder_download: '下载',
	tool_prompt_template_builder_empty: '请先填写自由文本或至少一个字段。',
	tool_prompt_template_builder_example:
		'输入（加载样例 · 代码芯片）：Role = 资深代码审查（安全与可读性）；Task = 审查我接下来粘贴的 PR diff；Constraints = 最多 12 条、标出密钥风险。输出（Markdown）：## Role / ## Task / ## Constraints / ## Output format 四段，可直接复制到 ChatGPT 或 Claude。与首屏画布一致。',
	tool_prompt_template_builder_example_title: '示例',
	tool_prompt_template_builder_faq_a1:
		'默认只在本浏览器标签页本地组装。可选「AI 扩写/润色」仅把该次点击提交的文字发往 Cloudflare Workers AI，不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_prompt_template_builder_faq_a2:
		'本地模式只在本标签页整理字段，不调用 ChatGPT、Gemini、Claude、DeepSeek API。可选 AI 使用 Cloudflare Workers AI（须 Turnstile）。',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT 导出转 Markdown 是把对话导出变成可读文件。本页是把草稿整理成可复用的系统 Prompt——归档对话后可再用本页提炼模板。',
	tool_prompt_template_builder_faq_a4:
		'可以。使用 Expand/Polish 前须在可选 AI 面板完成 Turnstile；无有效 token 时 AI 按钮报错，本地模式仍可用。',
	tool_prompt_template_builder_faq_a5: '自由文本框里以 Role:、Task:、Constraints:、Output: 开头的行会分段；显式字段优先于解析结果。',
	tool_prompt_template_builder_faq_a6:
		'可以。构建完成后复制到 ChatGPT、Gemini、Claude 或 DeepSeek 即可——四字段结构在各聊天界面通用。我们不按平台拆独立 URL，因为任务是整理文本，不是代调用 API。',
	tool_prompt_template_builder_faq_q1: 'Prompt 会上传吗？',
	tool_prompt_template_builder_faq_q2: '会调用大模型吗？',
	tool_prompt_template_builder_faq_q3: '和 ChatGPT 导出转 Markdown 有何不同？',
	tool_prompt_template_builder_faq_q4:
		'为什么可选 AI 需要 Turnstile？',
	tool_prompt_template_builder_faq_q5: '自由文本如何分段？',
	tool_prompt_template_builder_faq_q6: '能在 ChatGPT、Gemini、Claude、DeepSeek 里用吗？',
	tool_prompt_template_builder_faq_q7:
		'本地模式与可选 Cloudflare AI 有何区别？',
	tool_prompt_template_builder_faq_a7:
		'本地模式只在本标签页整理文字，不上传。可选 Expand/Polish 发往 Cloudflare Workers AI（须 Turnstile、有频率限制）。失败或超额时继续用本地模式。',
	tool_prompt_template_builder_ai_expand:
		'AI 扩写',
	tool_prompt_template_builder_ai_polish:
		'AI 润色',
	tool_prompt_template_builder_ai_panel_label:
		'可选 Cloudflare AI（Turnstile）',
	tool_prompt_template_builder_ai_consent_title:
		'发送到 Cloudflare Workers AI？',
	tool_prompt_template_builder_ai_consent_body:
		'此可选步骤会把当前草稿发往 Cloudflare Workers AI；不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能本地组装。',
	tool_prompt_template_builder_ai_consent_ok:
		'继续',
	tool_prompt_template_builder_ai_consent_cancel:
		'取消',
	tool_prompt_template_builder_ai_working:
		'Cloudflare AI 处理中…',
	tool_prompt_template_builder_ai_done:
		'已应用 AI 建议，复制前请核对。',
	tool_prompt_template_builder_ai_err_generic:
		'AI 失败，本地 Prompt 未改。',
	tool_prompt_template_builder_ai_err_rate:
		'AI 配额已满，请用本地模式或明日（UTC）再试。',
	tool_prompt_template_builder_ai_err_turnstile:
		'使用 AI 前请完成 Turnstile 验证。',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: '输出格式',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: '自由 Prompt（可选）',
	tool_prompt_template_builder_free_ph: '粘贴草稿，或 Role: … Task: … 这样的行',
	tool_prompt_template_builder_how_body:
		'选场景芯片或自行写草稿，填 Role / Task / Constraints / Output，构建模板，再粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek。',
	tool_prompt_template_builder_how_item_1: '选代码审查、电影、短剧、Android 或 iOS 芯片，或在自由框粘贴草稿。',
	tool_prompt_template_builder_how_item_2: '点「构建模板」（进页已自动跑过代码审查示例）。',
	tool_prompt_template_builder_how_item_3: '需要 {role,task,constraints,output} 时可切到 JSON。',
	tool_prompt_template_builder_how_item_4: '复制或下载后，粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek。',
	tool_prompt_template_builder_how_title: '怎么用',
	tool_prompt_template_builder_load_sample: '加载示例',
	tool_prompt_template_builder_output_fmt_label: '输出格式',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown 小节、JSON 结构、要点列表…',
	tool_prompt_template_builder_platforms_lead:
		'适用于 ChatGPT、Gemini、Claude、DeepSeek——把成品模板复制到任一聊天界面即可。',
	tool_prompt_template_builder_result_label: '模板',
	tool_prompt_template_builder_role_label: '角色 Role',
	tool_prompt_template_builder_role_ph: '模型应扮演谁…',
	tool_prompt_template_builder_rules_body: '可复用模板需要清晰分块、字段优先级和诚实边界——不是第二个生成器产品。',
	tool_prompt_template_builder_rules_item_1: '四块：Role、Task、Constraints、Output。空块不出现在 Markdown 里。',
	tool_prompt_template_builder_rules_item_2: '显式字段优先于自由文本解析。',
	tool_prompt_template_builder_rules_item_3: '默认 Markdown，## 标题；JSON 是同页芯片。',
	tool_prompt_template_builder_rules_item_4: '场景芯片预设电影、短剧、移动开发字段——同一构建器，不按平台拆 URL。',
	tool_prompt_template_builder_rules_title: '使用规则',
	tool_prompt_template_builder_scene_android: 'Android 代码',
	tool_prompt_template_builder_scene_code: '代码审查',
	tool_prompt_template_builder_scene_ios: 'iOS 代码',
	tool_prompt_template_builder_scene_label: '场景预设',
	tool_prompt_template_builder_scene_movie: '电影剧本',
	tool_prompt_template_builder_scene_short_drama: '短剧',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: '已复制到剪贴板。',
	tool_prompt_template_builder_status_done: '模板已就绪。',
	tool_prompt_template_builder_status_working: '正在构建模板…',
	tool_prompt_template_builder_task_label: '任务 Task',
	tool_prompt_template_builder_task_ph: '要完成的步骤…',
	tool_prompt_template_builder_title:
		'Prompt 模板构建器 — 本地 + 可选 AI',
	tool_prompt_template_builder_usecase_1: '产出可粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek 的代码审查 Agent 系统 Prompt。',
	tool_prompt_template_builder_usecase_2: '在接任意聊天 API 前，把会议记录整理成 Role/Task/Constraints 块。',
	tool_prompt_template_builder_usecase_3: '导出 JSON 后，用 JSON Schema 校验器检查下游配置文件。',
	tool_prompt_template_builder_usecase_4: '点「电影剧本」芯片，生成三幕节拍表再粘贴到常用聊天界面。',
	tool_prompt_template_builder_usecase_5: '点「短剧」芯片，为竖屏连载写钩子与 cliffhanger 大纲。',
	tool_prompt_template_builder_usecase_6: '点 Android 或 iOS 芯片，得到 Kotlin/Swift 编码 Agent 模板，无需开四个平台专页。',
	tool_prompt_template_builder_usecases_title: '适用场景',
};

export default zh;
