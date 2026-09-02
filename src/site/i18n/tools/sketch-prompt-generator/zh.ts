/**
 * i18n tool shard (sketch-prompt-generator / zh).
 * H1：Sketch.app Prompt 生成器（Mac 设计软件操作步骤，非素描线稿文生图）。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'在本页组装可粘贴 Prompt，让 ChatGPT、Gemini、Claude 或 DeepSeek 指导你在 Sketch.app 里建 Artboard、Symbol、Shared Style 并导出。填写字段后复制 Markdown 或 JSON。默认本地组装；可选扩写/润色走 Cloudflare Workers AI（须 Turnstile）。不用 AI 时文本留在本机。',
	tool_sketch_prompt_generator_build: '构建 Prompt',
	tool_sketch_prompt_generator_clear: '清空',
	tool_sketch_prompt_generator_copy: '复制',
	tool_sketch_prompt_generator_desc:
		'Sketch.app Prompt 生成器 — 默认本地组装，可选 Cloudflare AI 扩写/润色（Turnstile）；Markdown/JSON 留在本机。',
	tool_sketch_prompt_generator_description:
		'步骤与示例：Sketch.app Prompt 生成器 — 本地 + 可选 AI：面向 ChatGPT、Gemini、Claude、DeepSeek，默认在本浏览器组装「操作 Sketch.app」的结构化 Prompt（目标稿、Artboard、Symbol、导出），可选 Cloudflare Workers AI 扩写/润色（须 Turnstile、有频率限制）。进页自动展示样例。默认 Markdown；JSON 便于流水线。不用 AI 时文本不出本机。',
	tool_sketch_prompt_generator_download: '下载',
	tool_sketch_prompt_generator_empty: '请至少填写一个字段后再构建。',
	tool_sketch_prompt_generator_example:
		'输入：目标 = Sketch.app 登录页；Artboard = iPhone 14 390×844；Symbol = Button/Primary + Input/TextField；导出 = 1x/2x/3x PNG + PDF 审阅。输出（Markdown）：## Role → Sketch.app 操作助手；## Task → Artboard / Symbol / 导出清单。',
	tool_sketch_prompt_generator_example_title: '示例',
	tool_sketch_prompt_generator_faq_a1:
		'默认只在本浏览器标签页本地组装。可选「AI 扩写/润色」仅把该次点击提交的文字发往 Cloudflare Workers AI，不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_sketch_prompt_generator_faq_a2:
		'本地模式只在本标签页整理字段，不调用 ChatGPT 等 API，也不会远程操控 Sketch.app。可选 AI 使用 Cloudflare Workers AI（须 Turnstile）。',
	tool_sketch_prompt_generator_faq_a3:
		'Prompt 模板构建器面向通用四字段模板。本页专攻 Sketch.app：目标交付、Artboard、Symbol/样式、导出交接。',
	tool_sketch_prompt_generator_faq_a4:
		'不是。Midjourney Prompt 构建器面向栅格文生图风格；本页写的是 Mac 设计软件 Sketch.app 的操作步骤。若要铅笔/线稿出图 Prompt，请用 Midjourney 那页。',
	tool_sketch_prompt_generator_faq_a5:
		'可以。使用扩写/润色前须在可选 AI 面板完成 Turnstile；无有效 token 时 AI 按钮报错，本地模式仍可用。',
	tool_sketch_prompt_generator_faq_a6: '可以。JSON 输出包含字段与组装后的 Prompt，便于测试或流水线。',
	tool_sketch_prompt_generator_faq_a7:
		'可以。把成品 Prompt 粘到 ChatGPT、Gemini、Claude 或 DeepSeek，让对话 AI 逐步指导 Sketch.app 菜单操作或起草插件说明。我们只格式化文本，不会替你运行 Sketch。',
	tool_sketch_prompt_generator_faq_a8:
		'本地模式只在本标签页整理文字，不上传。可选扩写/润色发往 Cloudflare Workers AI（须 Turnstile、有频率限制）。失败或超额时继续用本地模式。',
	tool_sketch_prompt_generator_faq_q1: '我的 Prompt 会上传吗？',
	tool_sketch_prompt_generator_faq_q2: '会调用 ChatGPT 或远程控制 Sketch.app 吗？',
	tool_sketch_prompt_generator_faq_q3: '和 Prompt 模板构建器有何不同？',
	tool_sketch_prompt_generator_faq_q4: '这是素描线稿或 Midjourney 出图 Prompt 吗？',
	tool_sketch_prompt_generator_faq_q5: '为什么可选 AI 需要 Turnstile？',
	tool_sketch_prompt_generator_faq_q6: '能否导出 JSON？',
	tool_sketch_prompt_generator_faq_q7: '能配合 ChatGPT、Gemini、Claude、DeepSeek 使用吗？',
	tool_sketch_prompt_generator_faq_q8: '本地模式与可选 Cloudflare AI 有何区别？',
	tool_sketch_prompt_generator_ai_expand: 'AI 扩写',
	tool_sketch_prompt_generator_ai_polish: 'AI 润色',
	tool_sketch_prompt_generator_ai_panel_label: '可选 Cloudflare AI（Turnstile）',
	tool_sketch_prompt_generator_ai_consent_title: '发送到 Cloudflare Workers AI？',
	tool_sketch_prompt_generator_ai_consent_body:
		'此可选步骤会把当前草稿发往 Cloudflare Workers AI；不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能本地组装。',
	tool_sketch_prompt_generator_ai_consent_ok: '继续',
	tool_sketch_prompt_generator_ai_consent_cancel: '取消',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI 处理中…',
	tool_sketch_prompt_generator_ai_done: '已应用 AI 建议，复制前请核对。',
	tool_sketch_prompt_generator_ai_err_generic: 'AI 失败，本地 Prompt 未改。',
	tool_sketch_prompt_generator_ai_err_rate: 'AI 配额已满，请用本地模式或明日（UTC）再试。',
	tool_sketch_prompt_generator_ai_err_turnstile: '使用 AI 前请完成 Turnstile 验证。',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: '输出格式',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: '目标 / 交付物',
	tool_sketch_prompt_generator_goal_ph: '例如：在 Sketch.app 做登录页…',
	tool_sketch_prompt_generator_artboard_label: 'Artboard / 页面',
	tool_sketch_prompt_generator_artboard_ph: '例如：iPhone 14 390×844，Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbol / 样式 / Library',
	tool_sketch_prompt_generator_symbols_ph: '例如：Button/Primary、Shared Styles…',
	tool_sketch_prompt_generator_export_label: '导出 / 交接步骤',
	tool_sketch_prompt_generator_export_ph: '例如：1x/2x/3x PNG、PDF 审阅…',
	tool_sketch_prompt_generator_how_body:
		'填写 Sketch.app 字段（目标、Artboard、Symbol、导出），本地构建 Prompt，可选 Turnstile 后扩写/润色，再粘贴到 ChatGPT 等，让 AI 指导 Sketch.app 操作。',
	tool_sketch_prompt_generator_how_item_1: '进页已自动加载默认「Sketch.app 登录页」样例。',
	tool_sketch_prompt_generator_how_item_2: '编辑目标、Artboard、Symbol、导出，点击「构建 Prompt」，或切换 JSON。',
	tool_sketch_prompt_generator_how_item_3: '可选：完成 Turnstile，再通过 Cloudflare Workers AI 扩写或润色。',
	tool_sketch_prompt_generator_how_item_4: '复制或下载，粘贴到对话 AI，按返回的 Sketch.app 清单操作。',
	tool_sketch_prompt_generator_how_title: '使用方法',
	tool_sketch_prompt_generator_load_sample: '加载示例',
	tool_sketch_prompt_generator_platforms_lead:
		'适用于 ChatGPT、Gemini、Claude、DeepSeek — 复制成品 Prompt，让对话指导 Sketch.app 操作。',
	tool_sketch_prompt_generator_result_label: 'Prompt 输出',
	tool_sketch_prompt_generator_rules_body:
		'字段对应 Sketch.app 工作流：交付物、Artboard、Symbol/样式、导出。默认本地组装；可选 AI 有频率限制且须 Turnstile。本页不会启动 Sketch.app。',
	tool_sketch_prompt_generator_rules_item_1: '结构化字段映射到 Markdown 的 Role / Task / Constraints / Output。',
	tool_sketch_prompt_generator_rules_item_2: '默认导出 Markdown；同画布可切 JSON。',
	tool_sketch_prompt_generator_rules_item_3: '可选 Cloudflare AI 不取代本地模式 — 复制前请核对 AI 输出。',
	tool_sketch_prompt_generator_rules_item_4:
		'本工具只组装文本；不会在本机运行 Sketch.app、插件、Midjourney 或聊天 API。',
	tool_sketch_prompt_generator_rules_title: '规则说明',
	tool_sketch_prompt_generator_sec_constraints: '约束',
	tool_sketch_prompt_generator_sec_output: '输出格式',
	tool_sketch_prompt_generator_sec_role: '角色',
	tool_sketch_prompt_generator_sec_task: '任务',
	tool_sketch_prompt_generator_status_copied: '已复制到剪贴板。',
	tool_sketch_prompt_generator_status_done: 'Prompt 已就绪。',
	tool_sketch_prompt_generator_status_working: '正在构建…',
	tool_sketch_prompt_generator_title: 'Sketch.app Prompt 生成器 — 本地 + 可选 AI',
	tool_sketch_prompt_generator_usecase_1:
		'把 Artboard 尺寸与 Symbol 名交给同事的对话 AI，方便在 Sketch.app 复建界面。',
	tool_sketch_prompt_generator_usecase_2: '设计验收前起草 PNG 切片与 PDF 审阅的导出清单。',
	tool_sketch_prompt_generator_usecase_3:
		'若更需要人物/线框产品思考而非 Sketch.app 菜单步骤，改用产品设计 Prompt 构建器。',
	tool_sketch_prompt_generator_usecase_4: '敏感草稿保持本地 — 仅在同意弹窗后启用 AI。',
	tool_sketch_prompt_generator_usecases_title: '适用场景',
};

export default zh;
