/**
 * i18n tool shard (product-design-prompt-builder / zh)。
 * 中文用户按「产品设计提示词生成器 / UX 需求 prompt」检索；主词进 H1，次词（Persona、线框范围、design tokens、WCAG AA、JSON 导出）落在 description、FAQ 与适用场景。
 * 事实边界：默认在浏览器内组装，不发请求；可选 AI 扩写/润色把当前草稿发到 Cloudflare Workers AI（须 Turnstile，有配额），返回文本整段替换结果区。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'在本页把一次产品设计需求整理成能直接粘贴的提示词：填目标用户、要解决的问题、线框范围与 design tokens，页面在浏览器里拼成 Markdown 或 JSON，复制后到 ChatGPT、Gemini、Claude 或 DeepSeek 讨论方案。默认不发任何请求；只有点「AI 扩写」或「AI 润色」时，当前草稿才会发到 Cloudflare Workers AI（须完成 Turnstile，有频率与配额限制）。',
	tool_product_design_prompt_builder_build:
		'生成 Prompt',
	tool_product_design_prompt_builder_clear:
		'清空',
	tool_product_design_prompt_builder_copy:
		'复制',
	tool_product_design_prompt_builder_desc:
		'产品设计提示词生成器：填目标用户、问题、线框范围与 design tokens，浏览器内拼成 Markdown 或 JSON；需要更详细时再用可选的 Cloudflare AI 扩写。',
	tool_product_design_prompt_builder_description:
		'把 UX 需求写成能直接粘贴的提示词：填目标用户画像、要解决的问题、线框范围（几屏、哪些界面）与 design tokens（网格、主色、对比度要求），页面在浏览器内按 Role / Task / Constraints / Output 拼成 Markdown，也可切成 JSON。例如「共同抚养的父母需要按周查看交接安排」会展开成三屏范围加 8pt 网格、WCAG AA 对比度的任务段。点「加载样例」会一键填入预设并生成结果；需要写得更细时再点可选 AI 扩写/润色（Cloudflare Workers AI，须 Turnstile，有配额）。 示例：点「加载样例」填入默认预设，再生成或可选 AI 扩写/润色。',
	tool_product_design_prompt_builder_download:
		'下载',
	tool_product_design_prompt_builder_empty:
		'至少填一个字段才能生成。',
	tool_product_design_prompt_builder_example:
		'输入：目标用户 = 轮周共同抚养的父母，一方排期、另一方接送，安卓与 iPhone 混用；问题 = 日历太吵，想要一屏看完本周交接并留备注，且不强制绑定账号；线框范围 = 首页周条 + 交接图例、详情面板含交接清单、用短信深链邀请，共 3 屏；tokens = 8pt 网格、主色 #2563eb、已确认交接用 #059669、说明文字满足 WCAG AA。输出（Markdown）：## Role 写明面向线框简报的 UX 提示词教练，## Task 按目标用户、问题、线框、tokens 逐行列出。',
	tool_product_design_prompt_builder_example_title:
		'示例',
	tool_product_design_prompt_builder_faq_a1:
		'默认不会。填字段和点「生成 Prompt」都只在这个浏览器标签页里完成，不发请求。只有你点可选的「AI 扩写」或「AI 润色」，当前草稿才会发到 Cloudflare Workers AI；我们不会再从服务器转给 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_product_design_prompt_builder_faq_a2:
		'不会。本地生成只是把你填的内容按 Role / Task / Constraints / Output 排版。可选 AI 走 Cloudflare Workers AI（先过 Turnstile），不经我们的服务器调用 ChatGPT、Gemini、Claude 或 DeepSeek 的接口。',
	tool_product_design_prompt_builder_faq_a3:
		'Prompt 模板构建器给的是通用四段模板，任何主题都能套。本页把字段换成写 UX 简报时真正要交代的东西——目标用户、要解决的问题、线框覆盖几屏、design tokens 与对比度要求，样例和边界也按这个场景写。',
	tool_product_design_prompt_builder_faq_a4:
		'需要。点「AI 扩写」或「AI 润色」前先在可选 AI 面板完成 Turnstile 验证；没有有效凭据时 AI 按钮会报错，本地生成照常可用。',
	tool_product_design_prompt_builder_faq_a5:
		'可以。把输出格式切到 JSON，会同时给出各字段原文和拼好的 Prompt 文本，方便存进需求库或设计评审模板。',
	tool_product_design_prompt_builder_faq_a6:
		'可以。生成的是纯文本，复制后粘到 ChatGPT、Gemini、Claude 或 DeepSeek 的对话框即可；本页不代你调用它们的接口。',
	tool_product_design_prompt_builder_faq_q1:
		'我填的内容会上传吗？',
	tool_product_design_prompt_builder_faq_q2:
		'这个页面会调用 ChatGPT 等大模型接口吗？',
	tool_product_design_prompt_builder_faq_q3:
		'和 Prompt 模板构建器有什么不同？',
	tool_product_design_prompt_builder_faq_q4:
		'可选 AI 为什么要过 Turnstile？',
	tool_product_design_prompt_builder_faq_q5:
		'能导出 JSON 吗？',
	tool_product_design_prompt_builder_faq_q6:
		'能配合 ChatGPT、Gemini、Claude、DeepSeek 用吗？',
	tool_product_design_prompt_builder_faq_q7:
		'本地生成和可选 Cloudflare AI 有什么区别？',
	tool_product_design_prompt_builder_faq_a7:
		'本地生成只排版你填的字段，不发请求，也没有次数限制。可选 AI 扩写/润色会把当前草稿发到 Cloudflare Workers AI（须 Turnstile，有频率与配额限制），返回的文本会整段写入结果区、覆盖原来的草稿，复制前请核对。失败或配额用完时继续用本地生成。',
	tool_product_design_prompt_builder_ai_expand:
		'AI 扩写',
	tool_product_design_prompt_builder_ai_polish:
		'AI 润色',
	tool_product_design_prompt_builder_ai_panel_label:
		'可选 Cloudflare AI（需 Turnstile）',
	tool_product_design_prompt_builder_ai_consent_title:
		'把草稿发到 Cloudflare Workers AI？',
	tool_product_design_prompt_builder_ai_consent_body:
		'这一步是可选的：会把当前草稿发到 Cloudflare Workers AI 做推理，不会从我们的服务器转给 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能在浏览器里把 Prompt 生成出来。',
	tool_product_design_prompt_builder_ai_consent_ok:
		'继续',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'取消',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI 处理中…',
	tool_product_design_prompt_builder_ai_done:
		'AI 返回的文本已整段替换结果区，复制前请核对。',
	tool_product_design_prompt_builder_ai_err_generic:
		'AI 调用失败，结果区内容未改动。',
	tool_product_design_prompt_builder_ai_err_rate:
		'AI 配额已用完，先用本地生成，或次日（UTC）再试。',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'请先完成 Turnstile 验证再用 AI。',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'输出格式',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'目标用户 / Persona',
	tool_product_design_prompt_builder_persona_ph:
		'例：轮周共同抚养的父母，安卓与 iPhone 混用…',
	tool_product_design_prompt_builder_problem_label:
		'要解决的问题',
	tool_product_design_prompt_builder_problem_ph:
		'例：日历太吵，想一屏看完本周交接…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'线框 / 范围',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'例：周条、详情面板、短信邀请，共 3 屏…',
	tool_product_design_prompt_builder_design_tokens_label:
		'设计 / Design tokens',
	tool_product_design_prompt_builder_design_tokens_ph:
		'例：8pt 网格、主色 #2563eb、WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'把需求填进四个字段，页面在浏览器里拼成 Markdown（或 JSON）；需要写得更细再让 Cloudflare AI 扩写，最后复制到 ChatGPT、Gemini、Claude 或 DeepSeek。',
	tool_product_design_prompt_builder_how_item_1:
		'点「加载样例」填入默认预设并生成一份 Markdown Prompt，照着改最快。',
	tool_product_design_prompt_builder_how_item_2:
		'改写目标用户、问题、线框范围与 design tokens 后点「生成 Prompt」；要结构化导出就切到 JSON。',
	tool_product_design_prompt_builder_how_item_3:
		'（可选）完成 Turnstile 后点 AI 扩写或 AI 润色，返回文本会整段替换结果区。',
	tool_product_design_prompt_builder_how_item_4:
		'复制或下载结果，粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek 讨论方案。',
	tool_product_design_prompt_builder_how_title:
		'使用方法',
	tool_product_design_prompt_builder_load_sample:
		'加载样例',
	tool_product_design_prompt_builder_platforms_lead:
		'生成的是纯文本提示词，ChatGPT、Gemini、Claude、DeepSeek 都能直接粘贴使用。',
	tool_product_design_prompt_builder_result_label:
		'Prompt 输出',
	tool_product_design_prompt_builder_rules_body:
		'本页只负责把 UX 需求排版成提示词：不会画线框图，也不会导出 Figma 文件。可选 AI 有频率与配额限制，且须先过 Turnstile。',
	tool_product_design_prompt_builder_rules_item_1:
		'四个字段会分别映射到 Markdown 的 Role、Task、Constraints、Output 段。',
	tool_product_design_prompt_builder_rules_item_2:
		'默认导出 Markdown；同一结果区可切成 JSON，字段原文与拼好的文本一并输出。',
	tool_product_design_prompt_builder_rules_item_3:
		'可选 Cloudflare AI 不替代本地生成；它返回的文本会整段覆盖结果区，请核对后再复制。',
	tool_product_design_prompt_builder_rules_item_4:
		'本工具只组装文字，不会生成界面图、不会读你的设计文件，也不会代你调用聊天接口。',
	tool_product_design_prompt_builder_rules_title:
		'需要知道的边界',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'已复制到剪贴板。',
	tool_product_design_prompt_builder_status_done:
		'Prompt 已生成。',
	tool_product_design_prompt_builder_status_working:
		'正在生成…',
	tool_product_design_prompt_builder_title:
		'产品设计提示词生成器 — 本地组装 UX 简报，可选 AI 扩写',
	tool_product_design_prompt_builder_usecase_1:
		'把需求评审上口述的设计目标整理成一段可粘贴的提示词，发给团队或直接问 ChatGPT 要方案。',
	tool_product_design_prompt_builder_usecase_2:
		'导出 JSON，把目标用户与 tokens 存进需求库或设计评审模板，再按需用 Cloudflare AI 扩写。',
	tool_product_design_prompt_builder_usecase_3:
		'只需要通用四段模板、不带 UX 字段时，改用 Prompt 模板构建器。',
	tool_product_design_prompt_builder_usecase_4:
		'未公开的产品构想先在浏览器里成型，确认可以外发后再决定要不要用可选 AI。',
	tool_product_design_prompt_builder_usecases_title:
		'适用场景',
};

export default zh;
