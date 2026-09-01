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
		'写作 Prompt 生成器：对话、人物、剧本与随机模式 — Markdown/JSON；文本留在本机。',
	tool_writing_prompt_generator_description:
		'面向 ChatGPT、Gemini、Claude、DeepSeek 的写作 Prompt 生成器：在本页本地组装对话、人物、剧本或随机故事 Prompt。随机模式在同一页摇出体裁、场景、物件与冲突，相当于内置随机 Prompt 生成器。示例：进页自动展示深夜 diner 对话场景。默认 Markdown；JSON 输出 {mode,fields,role,task,constraints,output}。不是 LLM — 文本不出本机，不上传服务器。',
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
		'加载示例会选中对话模式，填入深夜 diner 场景，生成带 Role/Task/Constraints/Output 四段的 Markdown 并启用复制。可点人物、剧本或随机芯片切换其他预设。',
	tool_writing_prompt_generator_example_title: '示例',
	tool_writing_prompt_generator_faq_a1:
		'不会。Prompt 只在本浏览器标签页组装。不会上传到 OpenAI、Google、Anthropic、DeepSeek 或我们的服务器。',
	tool_writing_prompt_generator_faq_a2:
		'不会。本页只把你的写作 brief 格式化成 Prompt 块，不调用 ChatGPT、Gemini、Claude、DeepSeek 或任何模型 API。',
	tool_writing_prompt_generator_faq_a3:
		'Prompt 模板构建器侧重通用 Role/Task/Constraints/Output 模板。本页默认写作模式 — 对话字段、人物表、剧本节拍，以及同一画布上的随机 Prompt 生成器。',
	tool_writing_prompt_generator_faq_a4:
		'可以。随机模式摇出体裁、场景、物件、情绪与冲突。可选数字 seed 可复现同一组结果。随机输出仅供灵感，不保证质量。',
	tool_writing_prompt_generator_faq_a5:
		'可以。JSON 芯片输出 {mode,fields,role,task,constraints,output}，便于测试或配置。Markdown 使用 ## Role / Task / Constraints / Output 标题。',
	tool_writing_prompt_generator_faq_a6:
		'可以。把成品 Prompt 复制到 ChatGPT、Gemini、Claude 或 DeepSeek。我们不按平台拆独立 URL，因为任务是整理文本，不是代调用 API。',
	tool_writing_prompt_generator_faq_q1: '写作 Prompt 会上传吗？',
	tool_writing_prompt_generator_faq_q2: '会调用大模型吗？',
	tool_writing_prompt_generator_faq_q3: '和 Prompt 模板构建器有何不同？',
	tool_writing_prompt_generator_faq_q4: '这里有随机 Prompt 生成器吗？',
	tool_writing_prompt_generator_faq_q5: '能输出 JSON 吗？',
	tool_writing_prompt_generator_faq_q6: '能在 ChatGPT、Gemini、Claude、DeepSeek 里用吗？',
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
	tool_writing_prompt_generator_title: '写作 Prompt 生成器',
	tool_writing_prompt_generator_usecase_1:
		'为写作小组起草一场对话场景的 Prompt — 粘贴到 ChatGPT 或 Claude 要节拍建议，而非完整正文。',
	tool_writing_prompt_generator_usecase_2:
		'需要新故事开头时在本页摇随机，不必再打开单独的随机生成器网站。',
	tool_writing_prompt_generator_usecase_3:
		'导出人物表 Prompt 的 JSON 做流水线测试，再打开 Prompt 模板构建器做 API 风格四字段模板。',
	tool_writing_prompt_generator_usecase_4:
		'在本地先搭好短剧本节拍表，再把 Prompt 放进 Gemini 做围读。',
	tool_writing_prompt_generator_usecases_title: '适用场景',
};

export default zh;
