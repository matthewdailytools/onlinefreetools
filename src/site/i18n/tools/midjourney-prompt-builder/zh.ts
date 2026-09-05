/**
 * i18n 分片（midjourney-prompt-builder / zh）。
 * 按中文用户检索习惯独立重写：主词「Midjourney 提示词生成器」进 H1；
 * 次词「midjourney 提示词怎么写」「--ar 画幅参数」「提示词导出 JSON」落在 description / FAQ / Use cases。
 * 事实边界：默认在浏览器里拼装文字；可选扩写/润色才把当前草稿发到 Cloudflare Workers AI（须 Turnstile、有额度）；本站不出图、不调用 Midjourney。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'在这一页把 Midjourney 提示词拼好再拿去用：填主体、风格、光线、画幅和 MJ 参数，页面在浏览器里组装成 Markdown 或 JSON，复制进 ChatGPT、Gemini、Claude 或 DeepSeek 继续改。本站只产出文字，不生成图片、也不调用 Midjourney。默认不上传；只有点了可选的 AI 扩写或润色，才会把当前草稿发到 Cloudflare Workers AI（须先过 Turnstile）。',
	tool_midjourney_prompt_builder_build:
		'生成提示词',
	tool_midjourney_prompt_builder_clear:
		'清空',
	tool_midjourney_prompt_builder_copy:
		'复制',
	tool_midjourney_prompt_builder_desc:
		'Midjourney 提示词生成器：填主体、风格、光线和画幅，浏览器里拼成 Markdown 或 JSON；可选 Cloudflare AI 扩写润色（须 Turnstile）。',
	tool_midjourney_prompt_builder_description:
		'Midjourney 提示词生成器：填好主体、风格、光线、画幅和 MJ 参数，页面在浏览器里拼成一行可直接粘贴的提示词，画幅会换成 --ar，没写版本时补 --v 6.1。默认导出 Markdown，也能切 JSON 给脚本用；进页就有一份「石桥拔刀武士」的示例可以改。想要更细的描述，可选的 Cloudflare Workers AI 扩写／润色会把当前草稿发过去（须 Turnstile、有额度）。本站只出文字，不出图。',
	tool_midjourney_prompt_builder_download:
		'下载',
	tool_midjourney_prompt_builder_empty:
		'请先填至少一个字段，再生成提示词。',
	tool_midjourney_prompt_builder_example:
		'输入：主体＝苔藓石桥上正拔刀的武士、雨雾、远处鸟居；风格＝电影感水墨、青灰与炭黑、细颗粒；光线＝日出侧逆光加体积雾；画幅＝16:9；MJ 参数＝--v 6.1 --style raw --stylize 120 --chaos 8。输出（Markdown）：## Task 段给出把主体、风格、光线串成一行的 MJ 提示词，末尾补上 --ar 16:9；切到 JSON 时同一份内容以结构化字段输出。',
	tool_midjourney_prompt_builder_example_title:
		'示例',
	tool_midjourney_prompt_builder_faq_a1:
		'默认的本地拼装只在这个浏览器标签页里排文字，不会上传。只有你点「AI 扩写」或「AI 润色」时，才会把当前草稿发到 Cloudflare Workers AI；我们不会从自己的服务器转发给 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_midjourney_prompt_builder_faq_a2:
		'本地拼装不调用任何大模型，只是把你填的字段排进 Role、Task、Constraints、Output 四段。可选的扩写和润色走 Cloudflare Workers AI，先过 Turnstile 才执行，不经我们的服务器调用 ChatGPT、Gemini、Claude 或 DeepSeek 的接口。',
	tool_midjourney_prompt_builder_faq_a3:
		'提示词模板生成器给的是通用四段式骨架，什么题材都能填。这一页的字段直接换成了 Midjourney 那套——主体、风格、光线、画幅、MJ 参数，进页带一份可改的样例，还有一张参数对应表只管这个场景。',
	tool_midjourney_prompt_builder_faq_a4:
		'Turnstile 用来挡自动脚本，把免费额度留给真人。请先在可选 AI 面板里完成校验，再点扩写或润色；没有有效凭证时 AI 按钮会报错，本地拼装照常可用。',
	tool_midjourney_prompt_builder_faq_a5:
		'能。切到 JSON 后，同一块输出区会给出结构化字段和已经拼好的提示词正文，方便写进批量出图的脚本、测试用例或配置文件。',
	tool_midjourney_prompt_builder_faq_a6:
		'可以。把输出区的成品复制进任意一家的对话框即可，也能直接贴到 Midjourney。这一页只负责把文字排好，不替你调接口，所以没有按平台拆成多个地址。',
	tool_midjourney_prompt_builder_faq_q1:
		'我填的内容会上传吗？',
	tool_midjourney_prompt_builder_faq_q2:
		'这一页会调用 ChatGPT 之类的大模型接口吗？',
	tool_midjourney_prompt_builder_faq_q3:
		'和「提示词模板生成器」有什么区别？',
	tool_midjourney_prompt_builder_faq_q4:
		'为什么用 AI 之前要过 Turnstile？',
	tool_midjourney_prompt_builder_faq_q5:
		'能导出 JSON 吗？',
	tool_midjourney_prompt_builder_faq_q6:
		'可以配合 ChatGPT、Gemini、Claude 或 DeepSeek 用吗？',
	tool_midjourney_prompt_builder_faq_q7:
		'本地拼装和可选的 Cloudflare AI 差在哪？',
	tool_midjourney_prompt_builder_faq_a7:
		'本地拼装只在这个标签页排版，不联网。可选扩写／润色会把当前草稿发到 Cloudflare Workers AI（须 Turnstile，有频率和每日额度限制），返回的文本会整段写进输出区、覆盖原来显示的草稿——复制前先核对。失败或额度用完时，回到本地拼装继续用。',
	tool_midjourney_prompt_builder_ai_expand:
		'AI 扩写',
	tool_midjourney_prompt_builder_ai_polish:
		'AI 润色',
	tool_midjourney_prompt_builder_ai_panel_label:
		'可选：Cloudflare AI（需 Turnstile）',
	tool_midjourney_prompt_builder_ai_consent_title:
		'把当前草稿发到 Cloudflare Workers AI？',
	tool_midjourney_prompt_builder_ai_consent_body:
		'这一步是可选的：会把输入框里当前的草稿发到 Cloudflare Workers AI 做一次推理。我们不会从自己的服务器转给 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能继续在浏览器里拼装提示词。',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'继续',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'取消',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI 正在处理…',
	tool_midjourney_prompt_builder_ai_done:
		'AI 返回的文本已整段写入输出区，复制前请核对。',
	tool_midjourney_prompt_builder_ai_err_generic:
		'AI 这次没成功，输出区内容未改动。',
	tool_midjourney_prompt_builder_ai_err_rate:
		'AI 额度已用完。先用本地拼装，或按 UTC 时间明天再试。',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'用 AI 前请先完成 Turnstile 校验。',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'输出格式',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'主体',
	tool_midjourney_prompt_builder_subject_ph:
		'例如：石桥上正拔刀的武士、雨雾…',
	tool_midjourney_prompt_builder_style_label:
		'风格',
	tool_midjourney_prompt_builder_style_ph:
		'例如：电影感水墨、青灰与炭黑…',
	tool_midjourney_prompt_builder_lighting_label:
		'光线',
	tool_midjourney_prompt_builder_lighting_ph:
		'例如：日出侧逆光、体积雾…',
	tool_midjourney_prompt_builder_aspect_label:
		'画幅',
	tool_midjourney_prompt_builder_aspect_ph:
		'例如 16:9、9:16、1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'MJ 参数',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'例如 --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Midjourney 参数对应表',
	tool_midjourney_prompt_builder_rules_table_ar:
		'画幅 → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'版本 → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'填了画幅就按表换成 --ar 追加到行尾；参数里没写版本时补 --v 6.1。',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 方形',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 横构图',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 竖构图',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'MJ v6 默认版本',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'填字段、生成提示词，再复制到 ChatGPT、Gemini、Claude 或 DeepSeek；描述不够细时用可选的 Cloudflare AI 扩写或润色。',
	tool_midjourney_prompt_builder_how_item_1:
		'点「加载样例」载入默认预设。',
	tool_midjourney_prompt_builder_how_item_2:
		'改主体、风格、光线、画幅和 MJ 参数，点「生成提示词」；要结构化导出就切到 JSON。',
	tool_midjourney_prompt_builder_how_item_3:
		'可选：在 AI 面板完成 Turnstile，再点 AI 扩写或 AI 润色，返回的文本会写进输出区。',
	tool_midjourney_prompt_builder_how_item_4:
		'点复制或下载，粘进 ChatGPT、Gemini、Claude、DeepSeek 继续改，或直接贴到 Midjourney 里出图。',
	tool_midjourney_prompt_builder_how_title:
		'使用步骤',
	tool_midjourney_prompt_builder_load_sample:
		'加载样例',
	tool_midjourney_prompt_builder_platforms_lead:
		'输出可直接粘进 ChatGPT、Gemini、Claude、DeepSeek 的对话框。',
	tool_midjourney_prompt_builder_result_label:
		'提示词输出',
	tool_midjourney_prompt_builder_rules_body:
		'参数怎么对应：画幅按下表换成 --ar，没写版本时补 --v 6.1。默认在浏览器里拼装；可选 AI 有频率与每日额度限制，且须先过 Turnstile。',
	tool_midjourney_prompt_builder_rules_item_1:
		'表单里的字段会分别落进 Markdown 导出的 Role、Task、Constraints、Output 四段。',
	tool_midjourney_prompt_builder_rules_item_2:
		'默认导出 Markdown；同一块输出区可切到 JSON。',
	tool_midjourney_prompt_builder_rules_item_3:
		'可选 AI 只是多加一步，本地拼装始终可用；AI 返回的文本会整段替换输出区，复制前请核对。',
	tool_midjourney_prompt_builder_rules_item_4:
		'这一页只组装文字：不生成图片，也不调用 Midjourney 或任何聊天接口。',
	tool_midjourney_prompt_builder_rules_title:
		'需要知道的规则',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'已复制到剪贴板。',
	tool_midjourney_prompt_builder_status_done:
		'提示词已生成。',
	tool_midjourney_prompt_builder_status_working:
		'正在生成…',
	tool_midjourney_prompt_builder_title:
		'Midjourney 提示词生成器 — 浏览器内拼装，可选 AI 扩写',
	tool_midjourney_prompt_builder_usecase_1:
		'给团队发一份能直接粘进 ChatGPT、Gemini、Claude 或 DeepSeek 的 Midjourney 提示词，不用再逐条口述参数。',
	tool_midjourney_prompt_builder_usecase_2:
		'批量出图前先导出 JSON，把主体、风格、画幅当字段存进自己的脚本或表格。',
	tool_midjourney_prompt_builder_usecase_3:
		'要的不是出图而是通用四段式模板时，改用「提示词模板生成器」。',
	tool_midjourney_prompt_builder_usecase_4:
		'草稿涉及还没公开的项目时就只用本地拼装：只有接受弹窗提示后，文字才会发到 Cloudflare Workers AI。',
	tool_midjourney_prompt_builder_usecases_title:
		'适合什么场景',
};

export default zh;
