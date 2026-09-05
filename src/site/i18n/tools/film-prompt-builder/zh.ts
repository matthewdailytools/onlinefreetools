/**
 * i18n 分片（film-prompt-builder / zh）。
 * 按中文用户检索习惯独立重写：主词「电影剧本提示词生成器」进 H1；
 * 次词「三幕结构」「场景表 / 分场大纲」「人物弧光」「导出 JSON」落在 description / FAQ / Use cases。
 * 事实边界：默认在浏览器里把字段排成提示词；可选扩写/润色才把当前草稿发到 Cloudflare Workers AI（须 Turnstile、有额度）；本站不替你写剧本。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_film_prompt_builder_article:
		'把长片的一句话故事、三幕走向、分场表和人物弧光填进表单，这一页就在浏览器里排成一份结构清楚的提示词，导出 Markdown 或 JSON，复制进 ChatGPT、Gemini、Claude 或 DeepSeek 让模型往下写。默认不上传；只有点了可选的 AI 扩写或润色，才会把当前草稿发到 Cloudflare Workers AI（须先过 Turnstile）。',
	tool_film_prompt_builder_build:
		'生成提示词',
	tool_film_prompt_builder_clear:
		'清空',
	tool_film_prompt_builder_copy:
		'复制',
	tool_film_prompt_builder_desc:
		'电影剧本提示词生成器：填一句话故事、三幕和分场表，浏览器里排成 Markdown 或 JSON；可选 Cloudflare AI 扩写润色（须 Turnstile）。',
	tool_film_prompt_builder_description:
		'电影剧本提示词生成器：把 logline、第一到第三幕、分场表和人物弧光分别填好，这一页在浏览器里排成 Role／Task／Constraints／Output 四段提示词，让 ChatGPT、Gemini、Claude 或 DeepSeek 知道该沿哪条线往下写。默认导出 Markdown，也能切 JSON 存进自己的剧本表；进页就有一份「两家餐车共用厨房 30 天」的样例可以改。需要把某一幕写细时，可选的 Cloudflare Workers AI 扩写／润色会把当前草稿发过去（须 Turnstile、有额度）。 示例：点「加载样例」填入默认预设，再生成或可选 AI 扩写/润色。',
	tool_film_prompt_builder_download:
		'下载',
	tool_film_prompt_builder_empty:
		'请先填至少一个字段，再生成提示词。',
	tool_film_prompt_builder_example:
		'输入：一句话故事＝市政审批出错，两家宿敌餐车老板被迫共用一间厨房 30 天；第二幕＝美食节爆单后美食博主把配方记错，家族香料旧怨被摊上社交平台；分场表＝六个编号节拍；人物弧光＝傲气 → 勉强搭伙 → 谈得成条件的合伙人。输出（Markdown）：## Task 段按 Logline、Act1–3、Scene / List、Character / Arc 逐行列出——与进页样例的内容一致。',
	tool_film_prompt_builder_example_title:
		'示例',
	tool_film_prompt_builder_faq_a1:
		'默认只在这个浏览器标签页里排文字，不会上传。只有你点「AI 扩写」或「AI 润色」时，才会把当前草稿发到 Cloudflare Workers AI；我们不会从自己的服务器转发给 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_film_prompt_builder_faq_a2:
		'本地拼装不调用任何大模型，只是把 logline、三幕、分场表和人物弧光排进 Role、Task、Constraints、Output 四段。可选的扩写和润色走 Cloudflare Workers AI，先过 Turnstile 才执行，不经我们的服务器调用 ChatGPT、Gemini、Claude 或 DeepSeek 的接口。',
	tool_film_prompt_builder_faq_a3:
		'提示词模板生成器给的是通用四段式骨架，什么题材都能填。这一页的字段是长片剧本那一套——一句话故事、三幕、分场表、人物弧光，进页带一份完整的三幕样例，规则也只讲这一类稿子会踩的坑。',
	tool_film_prompt_builder_faq_a4:
		'Turnstile 用来挡自动脚本，把免费额度留给真人。请先在可选 AI 面板里完成校验，再点扩写或润色；没有有效凭证时 AI 按钮会报错，本地拼装照常可用。',
	tool_film_prompt_builder_faq_a5:
		'能。切到 JSON 后，同一块输出区会给出结构化字段和已经排好的提示词正文，方便把每一稿的三幕和分场存进表格或版本库比对。',
	tool_film_prompt_builder_faq_a6:
		'可以。把输出区的成品复制进任意一家的对话框即可。这一页只负责把结构排清楚，不替你调接口，所以没有按平台拆成多个地址。',
	tool_film_prompt_builder_faq_q1:
		'我填的剧本内容会上传吗？',
	tool_film_prompt_builder_faq_q2:
		'这一页会调用 ChatGPT 之类的大模型接口吗？',
	tool_film_prompt_builder_faq_q3:
		'和「提示词模板生成器」有什么区别？',
	tool_film_prompt_builder_faq_q4:
		'为什么用 AI 之前要过 Turnstile？',
	tool_film_prompt_builder_faq_q5:
		'能导出 JSON 吗？',
	tool_film_prompt_builder_faq_q6:
		'可以配合 ChatGPT、Gemini、Claude 或 DeepSeek 用吗？',
	tool_film_prompt_builder_faq_q7:
		'本地拼装和可选的 Cloudflare AI 差在哪？',
	tool_film_prompt_builder_faq_a7:
		'本地拼装只在这个标签页排版，不联网。可选扩写／润色会把当前草稿发到 Cloudflare Workers AI（须 Turnstile，有频率和每日额度限制），返回的文本会整段写进输出区、覆盖原来显示的草稿——复制前先核对，别让改写过的三幕悄悄替掉你的版本。失败或额度用完时，回到本地拼装继续用。',
	tool_film_prompt_builder_ai_expand:
		'AI 扩写',
	tool_film_prompt_builder_ai_polish:
		'AI 润色',
	tool_film_prompt_builder_ai_panel_label:
		'可选：Cloudflare AI（需 Turnstile）',
	tool_film_prompt_builder_ai_consent_title:
		'把当前草稿发到 Cloudflare Workers AI？',
	tool_film_prompt_builder_ai_consent_body:
		'这一步是可选的：会把输入框里当前的草稿发到 Cloudflare Workers AI 做一次推理。我们不会从自己的服务器转给 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能继续在浏览器里排提示词。',
	tool_film_prompt_builder_ai_consent_ok:
		'继续',
	tool_film_prompt_builder_ai_consent_cancel:
		'取消',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI 正在处理…',
	tool_film_prompt_builder_ai_done:
		'AI 返回的文本已整段写入输出区，复制前请核对。',
	tool_film_prompt_builder_ai_err_generic:
		'AI 这次没成功，输出区内容未改动。',
	tool_film_prompt_builder_ai_err_rate:
		'AI 额度已用完。先用本地拼装，或按 UTC 时间明天再试。',
	tool_film_prompt_builder_ai_err_turnstile:
		'用 AI 前请先完成 Turnstile 校验。',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'输出格式',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'一句话故事',
	tool_film_prompt_builder_logline_ph:
		'例如：两家宿敌餐车被迫共用一间厨房…',
	tool_film_prompt_builder_act1_label:
		'第一幕',
	tool_film_prompt_builder_act1_ph:
		'例如：冲突起因与被迫接受的条件…',
	tool_film_prompt_builder_act2_label:
		'第二幕',
	tool_film_prompt_builder_act2_ph:
		'例如：短暂成功后事情失控…',
	tool_film_prompt_builder_act3_label:
		'第三幕',
	tool_film_prompt_builder_act3_ph:
		'例如：正面对决与代价不小的和解…',
	tool_film_prompt_builder_scene_list_label:
		'分场表',
	tool_film_prompt_builder_scene_list_ph:
		'例如：1. 巷口争车位 2. 双份卫生检查…',
	tool_film_prompt_builder_character_arc_label:
		'人物弧光',
	tool_film_prompt_builder_character_arc_ph:
		'例如：傲气 → 勉强搭伙 → 合伙人…',

	tool_film_prompt_builder_how_body:
		'填一句话故事、三幕和分场表，生成提示词，再复制到 ChatGPT、Gemini、Claude 或 DeepSeek 往下写；某一幕太干时用可选的 Cloudflare AI 扩写或润色。',
	tool_film_prompt_builder_how_item_1:
		'点「加载样例」载入默认预设。',
	tool_film_prompt_builder_how_item_2:
		'改一句话故事、三幕、分场表和人物弧光，点「生成提示词」；要结构化导出就切到 JSON。',
	tool_film_prompt_builder_how_item_3:
		'可选：在 AI 面板完成 Turnstile，再点 AI 扩写或 AI 润色，返回的文本会写进输出区。',
	tool_film_prompt_builder_how_item_4:
		'点复制或下载，粘进 ChatGPT、Gemini、Claude 或 DeepSeek，让模型按这份结构接着写。',
	tool_film_prompt_builder_how_title:
		'使用步骤',
	tool_film_prompt_builder_load_sample:
		'加载样例',
	tool_film_prompt_builder_platforms_lead:
		'输出可直接粘进 ChatGPT、Gemini、Claude、DeepSeek 的对话框。',
	tool_film_prompt_builder_result_label:
		'提示词输出',
	tool_film_prompt_builder_rules_body:
		'按长片惯用的三幕加分场表来组织：一句话故事定方向，三幕定走向，分场表把节拍编号，人物弧光交代变化。默认在浏览器里拼装；可选 AI 有频率与每日额度限制，且须先过 Turnstile。',
	tool_film_prompt_builder_rules_item_1:
		'表单里的字段会分别落进 Markdown 导出的 Role、Task、Constraints、Output 四段。',
	tool_film_prompt_builder_rules_item_2:
		'默认导出 Markdown；同一块输出区可切到 JSON。',
	tool_film_prompt_builder_rules_item_3:
		'可选 AI 只是多加一步，本地拼装始终可用；AI 返回的文本会整段替换输出区，复制前请核对。',
	tool_film_prompt_builder_rules_item_4:
		'这一页只组装文字：不替你写剧本，也不在本地跑任何模型或聊天接口。',
	tool_film_prompt_builder_rules_title:
		'需要知道的规则',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'已复制到剪贴板。',
	tool_film_prompt_builder_status_done:
		'提示词已生成。',
	tool_film_prompt_builder_status_working:
		'正在生成…',
	tool_film_prompt_builder_title:
		'电影剧本提示词生成器 — 在浏览器拼装三幕分场提示词，可选 AI',
	tool_film_prompt_builder_usecase_1:
		'开会前把三幕走向和分场表整成一份提示词，直接粘进 ChatGPT、Gemini、Claude 或 DeepSeek 讨论。',
	tool_film_prompt_builder_usecase_2:
		'导出 JSON，把每一稿的 logline、三幕和人物弧光当字段存进表格或版本库，方便逐稿比对。',
	tool_film_prompt_builder_usecase_3:
		'要的不是长片三幕而是通用四段式模板时，改用「提示词模板生成器」。',
	tool_film_prompt_builder_usecase_4:
		'还没签约的项目就只用本地拼装：只有接受弹窗提示后，文字才会发到 Cloudflare Workers AI。',
	tool_film_prompt_builder_usecases_title:
		'适合什么场景',
};

export default zh;
