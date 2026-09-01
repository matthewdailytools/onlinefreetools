/**
 * i18n tool shard (writing-prompt-generator / zh).
 * Search H1: 写作 Prompt 生成器 — dialogue, character, script, random modes; local assembly only.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** 写作 Prompt 生成器 — 中文文案分片 */
const zh: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'在本页组装可直接粘贴的写作 Prompt：对话场景、人物小传、剧本大纲或随机故事开头。选模式、填字段或摇随机，再复制 Markdown 或 JSON 到 ChatGPT、Gemini、Claude 或 DeepSeek。不调用任何模型 API。文本留在本机，不上传服务器。',
	tool_writing_prompt_generator_build: '生成 Prompt',
	tool_writing_prompt_generator_char_flaw_label: '缺陷 / 弱点',
	tool_writing_prompt_generator_char_flaw_ph: '什么在拖后腿…',
	tool_writing_prompt_generator_char_goal_label: '目标',
	tool_writing_prompt_generator_char_goal_ph: '在这个故事里想要什么…',
	tool_writing_prompt_generator_char_name_label: '角色名',
	tool_writing_prompt_generator_char_name_ph: '名字或角色标签…',
	tool_writing_prompt_generator_char_traits_label: '性格特征',
	tool_writing_prompt_generator_char_traits_ph: '性格、习惯、矛盾点…',
	tool_writing_prompt_generator_char_voice_label: '语言风格',
	tool_writing_prompt_generator_char_voice_ph: '句式节奏、用词习惯…',
	tool_writing_prompt_generator_clear: '清空',
	tool_writing_prompt_generator_copy: '复制',
	tool_writing_prompt_generator_desc:
		'写作 Prompt 生成器 — 默认本地组装，可选 Cloudflare AI 扩写/润色（Turnstile）；Markdown/JSON 留在本机。',
	tool_writing_prompt_generator_description:
		'步骤与示例：写作 Prompt 生成器 — 本地 + 可选 AI：面向 ChatGPT、Gemini、Claude、DeepSeek，默认在本浏览器本地组装 Prompt，可选 Cloudflare Workers AI 扩写/润色（须 Turnstile、有频率限制）。进页自动展示样例。默认 Markdown；JSON 便于流水线。不用 AI 时文本不出本机。',
	tool_writing_prompt_generator_dlg_characters_label: '出场人物',
	tool_writing_prompt_generator_dlg_characters_ph: '姓名 + 一行角色定位…',
	tool_writing_prompt_generator_dlg_conflict_label: '冲突',
	tool_writing_prompt_generator_dlg_conflict_ph: '什么张力驱动这场戏…',
	tool_writing_prompt_generator_dlg_genre_label: '体裁 / 基调',
	tool_writing_prompt_generator_dlg_genre_ph: '当代剧情、浪漫喜剧…',
	tool_writing_prompt_generator_dlg_setting_label: '场景',
	tool_writing_prompt_generator_dlg_setting_ph: '地点、时间、氛围…',
	tool_writing_prompt_generator_dlg_tone_label: '对白风格',
	tool_writing_prompt_generator_dlg_tone_ph: '潜台词、斗嘴、极简…',
	tool_writing_prompt_generator_download: '下载',
	tool_writing_prompt_generator_empty: '请在本模式下至少填写一个字段后再生成。',
	tool_writing_prompt_generator_example:
		'输入（对白模式 · 加载样例）：Genre = 当代戏剧；Characters = Maya（咖啡师）与 Jonah（音乐人）；Conflict = Maya 听出 Jonah 歌里写的是前任，两人都不说破。输出（Markdown）：## Role → 写作教练；## Task → genre/characters/setting/conflict/tone 各行。剧本模式为灯塔传真预言谜题，与电影页的餐车样例不重复。',
	tool_writing_prompt_generator_example_title: '示例',
	tool_writing_prompt_generator_faq_a1:
		'默认只在本浏览器标签页本地组装。可选「AI 扩写/润色」仅把该次点击提交的文字发往 Cloudflare Workers AI，不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。',
	tool_writing_prompt_generator_faq_a2:
		'本地模式只在本标签页整理字段，不调用 ChatGPT、Gemini、Claude、DeepSeek API。可选 AI 使用 Cloudflare Workers AI（须 Turnstile）。',
	tool_writing_prompt_generator_faq_a3:
		'Prompt 模板构建器侧重通用 Role/Task/Constraints/Output 模板。本页默认写作模式 — 对话字段、人物表、剧本节拍，以及同一画布上的随机 Prompt 生成器。',
	tool_writing_prompt_generator_faq_q1: '写作 Prompt 会上传吗？',
	tool_writing_prompt_generator_faq_q2: '会调用大模型吗？',
	tool_writing_prompt_generator_faq_q3: '和 Prompt 模板构建器有何不同？',
	tool_writing_prompt_generator_faq_a4:
		'可以。随机模式摇出体裁、场景、物件、情绪与冲突；可选数字 seed 可重复同一组结果。随机输出仅供灵感，不保证质量。',
	tool_writing_prompt_generator_faq_a5:
		'可以。使用 Expand/Polish 前须在可选 AI 面板完成 Turnstile；无有效 token 时 AI 按钮报错，本地模式仍可用。',
	tool_writing_prompt_generator_faq_a6:
		'可以。JSON 芯片输出 {mode,fields,role,task,constraints,output}，便于测试或配置。Markdown 使用 ## Role / Task / Constraints / Output 标题。',
	tool_writing_prompt_generator_faq_a7:
		'可以。把成品 Prompt 复制到 ChatGPT、Gemini、Claude 或 DeepSeek。我们不按平台拆独立 URL，因为任务是整理文本，不是代调用 API。',
	tool_writing_prompt_generator_faq_a8:
		'本地模式只在本标签页整理写作字段，不上传。可选 Expand/Polish 发往 Cloudflare Workers AI（须 Turnstile、有频率限制）。失败或超额时继续用本地模式。',
	tool_writing_prompt_generator_faq_q4: '随机 Prompt 生成器在本页能用吗？',
	tool_writing_prompt_generator_faq_q5: '为什么可选 AI 需要 Turnstile？',
	tool_writing_prompt_generator_faq_q6: '能输出 JSON 吗？',
	tool_writing_prompt_generator_faq_q7: '能在 ChatGPT、Gemini、Claude、DeepSeek 里用吗？',
	tool_writing_prompt_generator_faq_q8: '本地模式与可选 Cloudflare AI 有何区别？',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: '输出格式',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'选写作模式，填字段或摇随机，生成 Prompt 块，再粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek。',
	tool_writing_prompt_generator_how_item_1:
		'选对话、人物、剧本或随机 — 进页已自动跑过对话预设样例。',
	tool_writing_prompt_generator_how_item_2: '填写模式字段（或在随机模式输入 seed 后点「摇随机」）。',
	tool_writing_prompt_generator_how_item_3: '点「生成 Prompt」（随机模式隐藏此按钮 — 用「摇随机」代替）。',
	tool_writing_prompt_generator_how_item_4: '复制或下载 Markdown/JSON，粘贴到你的聊天界面。',
	tool_writing_prompt_generator_how_title: '怎么用',
	tool_writing_prompt_generator_load_sample: '加载示例',
	tool_writing_prompt_generator_mode_character: '人物',
	tool_writing_prompt_generator_mode_dialogue: '对话',
	tool_writing_prompt_generator_mode_label: '写作模式',
	tool_writing_prompt_generator_mode_random: '随机',
	tool_writing_prompt_generator_mode_script: '剧本 / 大纲',
	tool_writing_prompt_generator_platforms_lead:
		'面向 ChatGPT、Gemini、Claude、DeepSeek — 把成品写作 Prompt 复制到任一聊天界面即可。',
	tool_writing_prompt_generator_random_lead:
		'从体裁、场景、物件、情绪与冲突摇出一个故事开头。可选 seed 可重复同一组结果。',
	tool_writing_prompt_generator_random_roll: '摇随机',
	tool_writing_prompt_generator_random_seed_label: 'Seed（可选）',
	tool_writing_prompt_generator_random_seed_ph: '如 42',
	tool_writing_prompt_generator_result_label: '写作 Prompt',
	tool_writing_prompt_generator_rules_body:
		'写作 Prompt 需要模式专属字段、诚实的随机边界，以及与其他构建器相同的本地隐私。',
	tool_writing_prompt_generator_rules_item_1:
		'输出四块：Role、Task、Constraints、Output — 与结构化 Prompt 模板对齐。',
	tool_writing_prompt_generator_rules_item_2:
		'随机模式在本 URL 内吸收随机 Prompt 生成器 — 无需另开页面。',
	tool_writing_prompt_generator_rules_item_3:
		'默认导出 Markdown。JSON 为同一画布上的芯片切换。',
	tool_writing_prompt_generator_rules_item_4:
		'本工具只组装文本，不生成成稿故事，也不调用云端模型。',
	tool_writing_prompt_generator_rules_title: '使用约定',
	tool_writing_prompt_generator_scr_notes_label: '节拍备注',
	tool_writing_prompt_generator_scr_notes_ph: '场数、节奏、视角…',
	tool_writing_prompt_generator_scr_premise_label: '前提 / 一句话梗概',
	tool_writing_prompt_generator_scr_premise_ph: '一段式设定…',
	tool_writing_prompt_generator_scr_structure_label: '结构',
	tool_writing_prompt_generator_scr_structure_ph: '三幕、救猫咪、单元剧…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: '已复制到剪贴板。',
	tool_writing_prompt_generator_status_done: 'Prompt 已就绪。',
	tool_writing_prompt_generator_status_working: '正在生成 Prompt…',
	tool_writing_prompt_generator_title:
		'写作 Prompt 生成器 — 本地 + 可选 AI',
	tool_writing_prompt_generator_usecase_1:
		'为写作小组起草一场对话场景的 Prompt — 粘贴到 ChatGPT 或 Claude 要节拍建议，而非完整正文。',
	tool_writing_prompt_generator_usecase_2:
		'需要新故事开头时在本页摇随机，不必再打开单独的随机生成器网站。',
	tool_writing_prompt_generator_usecase_3:
		'导出人物表 Prompt 的 JSON 做流水线测试，再打开 Prompt 模板构建器做 API 风格四字段模板。',
	tool_writing_prompt_generator_usecase_4:
		'在本地先搭好短剧本节拍表，再把 Prompt 放进 Gemini 做围读。',
	tool_writing_prompt_generator_usecases_title: '适用场景',
	tool_writing_prompt_generator_ai_expand:
		'AI 扩写',
	tool_writing_prompt_generator_ai_polish:
		'AI 润色',
	tool_writing_prompt_generator_ai_panel_label:
		'可选 Cloudflare AI（Turnstile）',
	tool_writing_prompt_generator_ai_consent_title:
		'发送到 Cloudflare Workers AI？',
	tool_writing_prompt_generator_ai_consent_body:
		'此可选步骤会把当前草稿发往 Cloudflare Workers AI；不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能本地组装。',
	tool_writing_prompt_generator_ai_consent_ok:
		'继续',
	tool_writing_prompt_generator_ai_consent_cancel:
		'取消',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI 处理中…',
	tool_writing_prompt_generator_ai_done:
		'已应用 AI 建议，复制前请核对。',
	tool_writing_prompt_generator_ai_err_generic:
		'AI 失败，本地 Prompt 未改。',
	tool_writing_prompt_generator_ai_err_rate:
		'AI 配额已满，请用本地模式或明日（UTC）再试。',
	tool_writing_prompt_generator_ai_err_turnstile:
		'使用 AI 前请完成 Turnstile 验证。',
};

export default zh;
