/**
 * i18n tool shard (ios-prompt-builder / zh)。
 * 中文用户按「iOS 提示词生成器 / prompt 生成」检索；主词进 H1，次词（Swift 栈、SwiftUI、HIG、VoiceOver、JSON 导出）落在 description、FAQ 与适用场景。
 * 事实边界：默认在浏览器内组装，不发请求；可选 AI 扩写/润色把当前草稿发到 Cloudflare Workers AI（须 Turnstile，有配额），返回文本整段替换结果区。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_ios_prompt_builder_article:
		'在本页把 iOS 需求整理成能直接粘贴的提示词：填功能规格、Swift 技术栈、SwiftUI 界面与 HIG 无障碍约束，页面在浏览器里拼成 Markdown 或 JSON，复制后到 ChatGPT、Gemini、Claude 或 DeepSeek 提问。默认不发任何请求；只有点「AI 扩写」或「AI 润色」时，当前草稿才会发到 Cloudflare Workers AI（须完成 Turnstile，有频率与配额限制）。',
	tool_ios_prompt_builder_build:
		'生成 Prompt',
	tool_ios_prompt_builder_clear:
		'清空',
	tool_ios_prompt_builder_copy:
		'复制',
	tool_ios_prompt_builder_desc:
		'iOS 提示词生成器：填功能、Swift 栈、SwiftUI 界面与 HIG 约束，浏览器内拼成 Markdown 或 JSON；需要更详细时再用可选的 Cloudflare AI 扩写。',
	tool_ios_prompt_builder_description:
		'把 iOS 需求写成能直接粘贴的提示词：填功能规格、Swift 与 SwiftUI 技术栈、界面结构和 HIG 无障碍约束，页面在浏览器内按 Role / Task / Constraints / Output 拼成 Markdown，也可切成 JSON。例如「HealthKit 步数趋势 + 静息心率区间」会展开成要求动态字体到 XXL、图表点可被 VoiceOver 朗读的任务段。点「加载样例」会一键填入预设并生成结果；需要写得更细时再点可选 AI 扩写/润色（Cloudflare Workers AI，须 Turnstile，有配额）。 示例：点「加载样例」填入默认预设，再生成或可选 AI 扩写/润色。',
	tool_ios_prompt_builder_download:
		'下载',
	tool_ios_prompt_builder_empty:
		'至少填一个字段才能生成。',
	tool_ios_prompt_builder_example:
		'输入：功能 = HealthKit 步数周趋势 + 静息心率区间，权限请求附白话说明；Swift 栈 = Swift 5.10、SwiftUI、iOS 17+、async/await、SwiftData 缓存；界面 = NavigationStack + Charts，首次查询前弹权限说明页；HIG = 动态字体到 XXL、图表点带 VoiceOver 标签、样例代码不用强解包。输出（Markdown）：## Role 写明高级 iOS 工程师身份，## Task 按功能、Swift 栈、SwiftUI、HIG 逐行列出。',
	tool_ios_prompt_builder_example_title:
		'示例',
	tool_ios_prompt_builder_faq_a1:
		'默认不会。填字段和点「生成 Prompt」都只在这个浏览器标签页里完成，不发请求。只有你点可选的「AI 扩写」或「AI 润色」，当前草稿才会发到 Cloudflare Workers AI；我们不会再从服务器转给 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_ios_prompt_builder_faq_a2:
		'不会。本地生成只是把你填的内容按 Role / Task / Constraints / Output 排版。可选 AI 走 Cloudflare Workers AI（先过 Turnstile），不经我们的服务器调用 ChatGPT、Gemini、Claude 或 DeepSeek 的接口。',
	tool_ios_prompt_builder_faq_a3:
		'Prompt 模板构建器给的是通用四段模板，任何主题都能套。本页把字段换成 iOS 开发真正要交代的东西——功能规格、Swift 与 SwiftUI 技术栈、导航与图表结构、HIG 的动态字体与 VoiceOver 约束，样例和边界也按这个场景写。',
	tool_ios_prompt_builder_faq_a4:
		'需要。点「AI 扩写」或「AI 润色」前先在可选 AI 面板完成 Turnstile 验证；没有有效凭据时 AI 按钮会报错，本地生成照常可用。',
	tool_ios_prompt_builder_faq_a5:
		'可以。把输出格式切到 JSON，会同时给出各字段原文和拼好的 Prompt 文本，方便挂进 XCTest 的快照用例或提示词配置流水线。',
	tool_ios_prompt_builder_faq_a6:
		'可以。生成的是纯文本，复制后粘到 ChatGPT、Gemini、Claude 或 DeepSeek 的对话框即可；本页不代你调用它们的接口。',
	tool_ios_prompt_builder_faq_q1:
		'我填的内容会上传吗？',
	tool_ios_prompt_builder_faq_q2:
		'这个页面会调用 ChatGPT 等大模型接口吗？',
	tool_ios_prompt_builder_faq_q3:
		'和 Prompt 模板构建器有什么不同？',
	tool_ios_prompt_builder_faq_q4:
		'可选 AI 为什么要过 Turnstile？',
	tool_ios_prompt_builder_faq_q5:
		'能导出 JSON 吗？',
	tool_ios_prompt_builder_faq_q6:
		'能配合 ChatGPT、Gemini、Claude、DeepSeek 用吗？',
	tool_ios_prompt_builder_faq_q7:
		'本地生成和可选 Cloudflare AI 有什么区别？',
	tool_ios_prompt_builder_faq_a7:
		'本地生成只排版你填的字段，不发请求，也没有次数限制。可选 AI 扩写/润色会把当前草稿发到 Cloudflare Workers AI（须 Turnstile，有频率与配额限制），返回的文本会整段写入结果区、覆盖原来的草稿，复制前请核对。失败或配额用完时继续用本地生成。',
	tool_ios_prompt_builder_ai_expand:
		'AI 扩写',
	tool_ios_prompt_builder_ai_polish:
		'AI 润色',
	tool_ios_prompt_builder_ai_panel_label:
		'可选 Cloudflare AI（需 Turnstile）',
	tool_ios_prompt_builder_ai_consent_title:
		'把草稿发到 Cloudflare Workers AI？',
	tool_ios_prompt_builder_ai_consent_body:
		'这一步是可选的：会把当前草稿发到 Cloudflare Workers AI 做推理，不会从我们的服务器转给 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能在浏览器里把 Prompt 生成出来。',
	tool_ios_prompt_builder_ai_consent_ok:
		'继续',
	tool_ios_prompt_builder_ai_consent_cancel:
		'取消',
	tool_ios_prompt_builder_ai_working:
		'Cloudflare AI 处理中…',
	tool_ios_prompt_builder_ai_done:
		'AI 返回的文本已整段替换结果区，复制前请核对。',
	tool_ios_prompt_builder_ai_err_generic:
		'AI 调用失败，结果区内容未改动。',
	tool_ios_prompt_builder_ai_err_rate:
		'AI 配额已用完，先用本地生成，或次日（UTC）再试。',
	tool_ios_prompt_builder_ai_err_turnstile:
		'请先完成 Turnstile 验证再用 AI。',
	tool_ios_prompt_builder_fmt_json:
		'JSON',
	tool_ios_prompt_builder_fmt_label:
		'输出格式',
	tool_ios_prompt_builder_fmt_md:
		'Markdown',
	tool_ios_prompt_builder_feature_spec_label:
		'功能 / 规格',
	tool_ios_prompt_builder_feature_spec_ph:
		'例：HealthKit 步数趋势 + 静息心率区间…',
	tool_ios_prompt_builder_swift_stack_label:
		'Swift / 技术栈',
	tool_ios_prompt_builder_swift_stack_ph:
		'例：Swift 5.10、SwiftUI、iOS 17+、SwiftData…',
	tool_ios_prompt_builder_swiftui_ui_label:
		'SwiftUI / 界面',
	tool_ios_prompt_builder_swiftui_ui_ph:
		'例：NavigationStack + Charts、权限说明页…',
	tool_ios_prompt_builder_hig_constraints_label:
		'HIG / 约束',
	tool_ios_prompt_builder_hig_constraints_ph:
		'例：动态字体 XXL、VoiceOver 标签、禁强解包…',
	tool_ios_prompt_builder_how_body:
		'把需求填进四个字段，页面在浏览器里拼成 Markdown（或 JSON）；需要写得更细再让 Cloudflare AI 扩写，最后复制到 ChatGPT、Gemini、Claude 或 DeepSeek。',
	tool_ios_prompt_builder_how_item_1:
		'点「加载样例」填入默认预设并生成一份 Markdown Prompt，照着改最快。',
	tool_ios_prompt_builder_how_item_2:
		'改写功能、Swift 栈、SwiftUI 与 HIG 字段后点「生成 Prompt」；要结构化导出就切到 JSON。',
	tool_ios_prompt_builder_how_item_3:
		'（可选）完成 Turnstile 后点 AI 扩写或 AI 润色，返回文本会整段替换结果区。',
	tool_ios_prompt_builder_how_item_4:
		'复制或下载结果，粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek 提问。',
	tool_ios_prompt_builder_how_title:
		'使用方法',
	tool_ios_prompt_builder_load_sample:
		'加载样例',
	tool_ios_prompt_builder_platforms_lead:
		'生成的是纯文本提示词，ChatGPT、Gemini、Claude、DeepSeek 都能直接粘贴使用。',
	tool_ios_prompt_builder_result_label:
		'Prompt 输出',
	tool_ios_prompt_builder_rules_body:
		'本页只负责把 iOS 需求排版成提示词：不编译代码，也不运行 Xcode 构建。可选 AI 有频率与配额限制，且须先过 Turnstile。',
	tool_ios_prompt_builder_rules_item_1:
		'四个字段会分别映射到 Markdown 的 Role、Task、Constraints、Output 段。',
	tool_ios_prompt_builder_rules_item_2:
		'默认导出 Markdown；同一结果区可切成 JSON，字段原文与拼好的文本一并输出。',
	tool_ios_prompt_builder_rules_item_3:
		'可选 Cloudflare AI 不替代本地生成；它返回的文本会整段覆盖结果区，请核对后再复制。',
	tool_ios_prompt_builder_rules_item_4:
		'本工具只组装文字，不会编译 Swift、不会跑 Xcode，也不会代你调用聊天接口。',
	tool_ios_prompt_builder_rules_title:
		'需要知道的边界',
	tool_ios_prompt_builder_sec_constraints:
		'Constraints',
	tool_ios_prompt_builder_sec_output:
		'Output',
	tool_ios_prompt_builder_sec_role:
		'Role',
	tool_ios_prompt_builder_sec_task:
		'Task',
	tool_ios_prompt_builder_status_copied:
		'已复制到剪贴板。',
	tool_ios_prompt_builder_status_done:
		'Prompt 已生成。',
	tool_ios_prompt_builder_status_working:
		'正在生成…',
	tool_ios_prompt_builder_title:
		'iOS 提示词生成器 — 本地组装 Prompt，可选 AI 扩写',
	tool_ios_prompt_builder_usecase_1:
		'把评审会上口述的 iOS 需求整理成一段可粘贴的提示词，发到团队群或直接问 ChatGPT。',
	tool_ios_prompt_builder_usecase_2:
		'导出 JSON，把无障碍约束当成检查项接进用例或提示词配置，再按需用 Cloudflare AI 扩写。',
	tool_ios_prompt_builder_usecase_3:
		'只需要通用四段模板、不带 iOS 字段时，改用 Prompt 模板构建器。',
	tool_ios_prompt_builder_usecase_4:
		'未发布功能的描述先在浏览器里成型，确认可以外发后再决定要不要用可选 AI。',
	tool_ios_prompt_builder_usecases_title:
		'适用场景',
};

export default zh;
