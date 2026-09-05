/**
 * i18n 分片（short-drama-prompt-generator / zh）。
 * 按中文用户检索习惯独立重写：主词「短剧提示词生成器」进 H1；
 * 次词「竖屏短剧」「分集钩子」「卡点悬念」「导出 JSON」落在 description / FAQ / Use cases。
 * 事实边界：默认在浏览器里把字段排成提示词；可选扩写/润色才把当前草稿发到 Cloudflare Workers AI（须 Turnstile、有额度）；本站不生成视频。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'把集数时长、开场钩子、卡点悬念、竖屏规格和题材填进表单，这一页就在浏览器里排成一份能直接投喂模型的提示词，导出 Markdown 或 JSON，复制进 ChatGPT、Gemini、Claude 或 DeepSeek 让它按集往下写。默认不上传；只有点了可选的 AI 扩写或润色，才会把当前草稿发到 Cloudflare Workers AI（须先过 Turnstile）。本站只产出文字，不生成视频。',
	tool_short_drama_prompt_generator_build:
		'生成提示词',
	tool_short_drama_prompt_generator_clear:
		'清空',
	tool_short_drama_prompt_generator_copy:
		'复制',
	tool_short_drama_prompt_generator_desc:
		'短剧提示词生成器：填集数、钩子、卡点和竖屏规格，浏览器里排成 Markdown 或 JSON；可选 Cloudflare AI 扩写润色（须 Turnstile）。',
	tool_short_drama_prompt_generator_description:
		'短剧提示词生成器：把集数与单集时长、前两秒的开场钩子、每集结尾的卡点悬念、竖屏规格和题材分别填好，这一页在浏览器里排成 Role／Task／Constraints／Output 四段提示词，让 ChatGPT、Gemini、Claude 或 DeepSeek 按分集节奏往下写。默认导出 Markdown，也能切 JSON 存进自己的剧本表；进页就有一份「12 集 × 75 秒、职场秘密」的样例可以改。某集钩子太钝时，可选的 Cloudflare Workers AI 扩写／润色会把当前草稿发过去（须 Turnstile、有额度）。 示例：点「加载样例」填入默认预设，再生成或可选 AI 扩写/润色。',
	tool_short_drama_prompt_generator_download:
		'下载',
	tool_short_drama_prompt_generator_empty:
		'请先填至少一个字段，再生成提示词。',
	tool_short_drama_prompt_generator_example:
		'输入：集数＝12 集 × 75 秒；开场钩子＝实习生捅出工资表泄露，老板却在录音里听出十年前那通争夺监护权的留言是谁；卡点＝第 6 集在老板边听边删留言时收尾，第 7 集从电梯里一言不发的对视开场；竖屏规格＝9:16、硬字幕、前两秒就得让人停住手指。输出（Markdown）：## Task 段按 Episodes、Hook、Cliffhanger、Vertical / Format、Genre 逐行列出，专给竖屏连播用的提示词。',
	tool_short_drama_prompt_generator_example_title:
		'示例',
	tool_short_drama_prompt_generator_faq_a1:
		'默认只在这个浏览器标签页里排文字，不会上传。只有你点「AI 扩写」或「AI 润色」时，才会把当前草稿发到 Cloudflare Workers AI；我们不会从自己的服务器转发给 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_short_drama_prompt_generator_faq_a2:
		'本地拼装不调用任何大模型，只是把集数、钩子、卡点、竖屏规格和题材排进 Role、Task、Constraints、Output 四段。可选的扩写和润色走 Cloudflare Workers AI，先过 Turnstile 才执行，不经我们的服务器调用 ChatGPT、Gemini、Claude 或 DeepSeek 的接口。',
	tool_short_drama_prompt_generator_faq_a3:
		'提示词模板生成器给的是通用四段式骨架，什么题材都能填。这一页的字段是竖屏短剧那一套——集数时长、开场钩子、卡点悬念、竖屏规格、题材，进页带一份完整样例，规则也只讲连播型短剧会踩的坑。',
	tool_short_drama_prompt_generator_faq_a4:
		'Turnstile 用来挡自动脚本，把免费额度留给真人。请先在可选 AI 面板里完成校验，再点扩写或润色；没有有效凭证时 AI 按钮会报错，本地拼装照常可用。',
	tool_short_drama_prompt_generator_faq_a5:
		'能。切到 JSON 后，同一块输出区会给出结构化字段和已经排好的提示词正文，方便按集存进表格，逐集核对钩子和卡点有没有重复。',
	tool_short_drama_prompt_generator_faq_a6:
		'可以。把输出区的成品复制进任意一家的对话框即可。这一页只负责把分集结构排清楚，不替你调接口，所以没有按平台拆成多个地址。',
	tool_short_drama_prompt_generator_faq_q1:
		'我填的剧情内容会上传吗？',
	tool_short_drama_prompt_generator_faq_q2:
		'这一页会调用 ChatGPT 之类的大模型接口吗？',
	tool_short_drama_prompt_generator_faq_q3:
		'和「提示词模板生成器」有什么区别？',
	tool_short_drama_prompt_generator_faq_q4:
		'为什么用 AI 之前要过 Turnstile？',
	tool_short_drama_prompt_generator_faq_q5:
		'能导出 JSON 吗？',
	tool_short_drama_prompt_generator_faq_q6:
		'可以配合 ChatGPT、Gemini、Claude 或 DeepSeek 用吗？',
	tool_short_drama_prompt_generator_faq_q7:
		'本地拼装和可选的 Cloudflare AI 差在哪？',
	tool_short_drama_prompt_generator_faq_a7:
		'本地拼装只在这个标签页排版，不联网。可选扩写／润色会把当前草稿发到 Cloudflare Workers AI（须 Turnstile，有频率和每日额度限制），返回的文本会整段写进输出区、覆盖原来显示的草稿——复制前先核对，别让改写过的卡点悄悄替掉你的排法。失败或额度用完时，回到本地拼装继续用。',
	tool_short_drama_prompt_generator_ai_expand:
		'AI 扩写',
	tool_short_drama_prompt_generator_ai_polish:
		'AI 润色',
	tool_short_drama_prompt_generator_ai_panel_label:
		'可选：Cloudflare AI（需 Turnstile）',
	tool_short_drama_prompt_generator_ai_consent_title:
		'把当前草稿发到 Cloudflare Workers AI？',
	tool_short_drama_prompt_generator_ai_consent_body:
		'这一步是可选的：会把输入框里当前的草稿发到 Cloudflare Workers AI 做一次推理。我们不会从自己的服务器转给 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能继续在浏览器里排提示词。',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'继续',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'取消',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI 正在处理…',
	tool_short_drama_prompt_generator_ai_done:
		'AI 返回的文本已整段写入输出区，复制前请核对。',
	tool_short_drama_prompt_generator_ai_err_generic:
		'AI 这次没成功，输出区内容未改动。',
	tool_short_drama_prompt_generator_ai_err_rate:
		'AI 额度已用完。先用本地拼装，或按 UTC 时间明天再试。',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'用 AI 前请先完成 Turnstile 校验。',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'输出格式',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'集数与时长',
	tool_short_drama_prompt_generator_episodes_ph:
		'例如：12 集 × 75 秒…',
	tool_short_drama_prompt_generator_hook_label:
		'开场钩子',
	tool_short_drama_prompt_generator_hook_ph:
		'例如：实习生捅出工资表泄露…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'卡点悬念',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'例如：第 6 集在删除留言时收尾…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'竖屏规格',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'例如：9:16、硬字幕、前两秒抓人…',
	tool_short_drama_prompt_generator_genre_label:
		'题材',
	tool_short_drama_prompt_generator_genre_ph:
		'例如：职场情感 + 家庭秘密…',

	tool_short_drama_prompt_generator_how_body:
		'填集数、钩子和卡点，生成提示词，再复制到 ChatGPT、Gemini、Claude 或 DeepSeek 按集往下写；某集钩子太钝时用可选的 Cloudflare AI 扩写或润色。',
	tool_short_drama_prompt_generator_how_item_1:
		'点「加载样例」载入默认预设。',
	tool_short_drama_prompt_generator_how_item_2:
		'改集数时长、开场钩子、卡点悬念、竖屏规格和题材，点「生成提示词」；要结构化导出就切到 JSON。',
	tool_short_drama_prompt_generator_how_item_3:
		'可选：在 AI 面板完成 Turnstile，再点 AI 扩写或 AI 润色，返回的文本会写进输出区。',
	tool_short_drama_prompt_generator_how_item_4:
		'点复制或下载，粘进 ChatGPT、Gemini、Claude 或 DeepSeek，让模型按这份分集结构接着写。',
	tool_short_drama_prompt_generator_how_title:
		'使用步骤',
	tool_short_drama_prompt_generator_load_sample:
		'加载样例',
	tool_short_drama_prompt_generator_platforms_lead:
		'输出可直接粘进 ChatGPT、Gemini、Claude、DeepSeek 的对话框。',
	tool_short_drama_prompt_generator_result_label:
		'提示词输出',
	tool_short_drama_prompt_generator_rules_body:
		'按竖屏连播的节奏来组织：集数与时长定容量，开场钩子决定前两秒留不留人，卡点悬念负责把观众推向下一集，竖屏规格交代画幅与字幕。默认在浏览器里拼装；可选 AI 有频率与每日额度限制，且须先过 Turnstile。',
	tool_short_drama_prompt_generator_rules_item_1:
		'表单里的字段会分别落进 Markdown 导出的 Role、Task、Constraints、Output 四段。',
	tool_short_drama_prompt_generator_rules_item_2:
		'默认导出 Markdown；同一块输出区可切到 JSON。',
	tool_short_drama_prompt_generator_rules_item_3:
		'可选 AI 只是多加一步，本地拼装始终可用；AI 返回的文本会整段替换输出区，复制前请核对。',
	tool_short_drama_prompt_generator_rules_item_4:
		'这一页只组装文字：不生成视频，也不在本地跑任何模型或聊天接口。',
	tool_short_drama_prompt_generator_rules_title:
		'需要知道的规则',
	tool_short_drama_prompt_generator_sec_constraints:
		'Constraints',
	tool_short_drama_prompt_generator_sec_output:
		'Output',
	tool_short_drama_prompt_generator_sec_role:
		'Role',
	tool_short_drama_prompt_generator_sec_task:
		'Task',
	tool_short_drama_prompt_generator_status_copied:
		'已复制到剪贴板。',
	tool_short_drama_prompt_generator_status_done:
		'提示词已生成。',
	tool_short_drama_prompt_generator_status_working:
		'正在生成…',
	tool_short_drama_prompt_generator_title:
		'短剧提示词生成器 — 在浏览器拼装竖屏分集钩子提示词，可选 AI',
	tool_short_drama_prompt_generator_usecase_1:
		'开会前把集数、钩子和每集卡点整成一份提示词，直接粘进 ChatGPT、Gemini、Claude 或 DeepSeek 讨论。',
	tool_short_drama_prompt_generator_usecase_2:
		'导出 JSON，把每集的钩子和卡点当字段存进表格，逐集查有没有重复套路。',
	tool_short_drama_prompt_generator_usecase_3:
		'要的不是竖屏连播那套字段而是通用四段式模板时，改用「提示词模板生成器」。',
	tool_short_drama_prompt_generator_usecase_4:
		'还没上线的项目就只用本地拼装：只有接受弹窗提示后，文字才会发到 Cloudflare Workers AI。',
	tool_short_drama_prompt_generator_usecases_title:
		'适合什么场景',
};

export default zh;
