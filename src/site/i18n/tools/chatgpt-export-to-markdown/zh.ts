/**
 * i18n 工具分片（chatgpt-export-to-markdown / zh）。
 * 检索向 H1：ChatGPT 导出转 Markdown；Claude / JSON / CSV 同页。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'在本页把 ChatGPT 导出打成 Markdown。粘贴或拖入 JSON，得到可读对话，也可切到 JSON 或 CSV。Claude 导出走同一画布。文件留在本机，不上传服务器。',
	tool_chatgpt_export_to_markdown_choose_file: '选择文件',
	tool_chatgpt_export_to_markdown_clear: '清空',
	tool_chatgpt_export_to_markdown_convert: '转换',
	tool_chatgpt_export_to_markdown_copy: '复制',
	tool_chatgpt_export_to_markdown_desc: '把 ChatGPT 导出转成 Markdown（可切 JSON/CSV）；文件留在本机，不上传服务器。',
	tool_chatgpt_export_to_markdown_description:
		'ChatGPT 导出转 Markdown：拖入或粘贴导出 JSON，映射用户/助手轮次，下载 Markdown。示例：进页样例对话会先转成 Markdown。JSON 与 CSV 是输出芯片。Claude 的 chat_messages 也在本页识别。文件不出本机，不上传服务器。这不是 token 计数，也不是云端同步。',
	tool_chatgpt_export_to_markdown_download: '下载',
	tool_chatgpt_export_to_markdown_drop_hint: '拖入 conversations JSON，或在下方粘贴。解析只在本标签页。',
	tool_chatgpt_export_to_markdown_empty: '请先粘贴或选择导出文件。',
	tool_chatgpt_export_to_markdown_err_none: '没有找到对话轮次。请确认 JSON 含 mapping、messages 或 chat_messages。',
	tool_chatgpt_export_to_markdown_err_parse: 'JSON 解析失败。请粘贴有效的 ChatGPT 或 Claude 导出。',
	tool_chatgpt_export_to_markdown_example:
		'加载示例会插入两轮 ChatGPT mapping JSON，转成带 User / Assistant 标题的 Markdown，并启用复制与下载。',
	tool_chatgpt_export_to_markdown_example_title: '示例',
	tool_chatgpt_export_to_markdown_faq_a1: '不会。导出在本标签页读取。不会上传到 OpenAI、Anthropic 或我们的服务器。',
	tool_chatgpt_export_to_markdown_faq_a2: '主路径是带 mapping 树的 ChatGPT 数据导出。扁平 role/content 数组和 Claude chat_messages 也可。',
	tool_chatgpt_export_to_markdown_faq_a3: '可以。Claude 风格的 chat_messages（sender + text）并入本页，不另开网址。',
	tool_chatgpt_export_to_markdown_faq_a4: '空的 system 节点和没有正文的 tool 壳会跳过。附件与图片不会还原成文件。',
	tool_chatgpt_export_to_markdown_faq_a5: 'Token 计数是另一件事（已延后）。本 H1 只管导出 → Markdown。',
	tool_chatgpt_export_to_markdown_faq_q1: '对话会上传吗？',
	tool_chatgpt_export_to_markdown_faq_q2: '支持哪些导出形状？',
	tool_chatgpt_export_to_markdown_faq_q3: 'Claude 导出能用吗？',
	tool_chatgpt_export_to_markdown_faq_q4: '哪些字段会丢掉？',
	tool_chatgpt_export_to_markdown_faq_q5: '这是 token 计数工具吗？',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: '输出格式',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body: '先导出对话，粘贴或拖入 JSON，转成 Markdown，再复制或下载。JSON 和 CSV 是同任务芯片。',
	tool_chatgpt_export_to_markdown_how_item_1: '拿到 ChatGPT 数据导出（或 Claude JSON）——任务是 ChatGPT 导出转 Markdown。',
	tool_chatgpt_export_to_markdown_how_item_2: '拖入文件或把 JSON 粘进输入框。',
	tool_chatgpt_export_to_markdown_how_item_3: '保持 Markdown，除非你要 JSON 或 CSV 芯片。',
	tool_chatgpt_export_to_markdown_how_item_4: '复制或下载。进页已自动跑过示例。',
	tool_chatgpt_export_to_markdown_how_title: '怎么用',
	tool_chatgpt_export_to_markdown_input_label: '导出 JSON',
	tool_chatgpt_export_to_markdown_input_ph: '在此粘贴 conversations JSON…',
	tool_chatgpt_export_to_markdown_load_sample: '加载示例',
	tool_chatgpt_export_to_markdown_output_label: '结果',
	tool_chatgpt_export_to_markdown_role_assistant: '助手',
	tool_chatgpt_export_to_markdown_role_system: '系统',
	tool_chatgpt_export_to_markdown_role_tool: '工具',
	tool_chatgpt_export_to_markdown_role_user: '用户',
	tool_chatgpt_export_to_markdown_rules_body: '导出转换要有字段映射、默认 Markdown，以及清楚的隐私说明——不要按厂商拆第二个转换器网址。',
	tool_chatgpt_export_to_markdown_rules_item_1: '默认输出是带 ## 用户 / ## 助手 小节的 Markdown，可选 # 标题。',
	tool_chatgpt_export_to_markdown_rules_item_2: 'ChatGPT mapping 树、扁平 role/content 数组、Claude chat_messages 在同一页解析。',
	tool_chatgpt_export_to_markdown_rules_item_3: 'JSON 与 CSV 芯片输出同一批轮次，不改 H1。',
	tool_chatgpt_export_to_markdown_rules_item_4: '厂商格式会变。解析失败时粘贴原始 JSON，并对照 FAQ。',
	tool_chatgpt_export_to_markdown_rules_title: '会碰到的规则',
	tool_chatgpt_export_to_markdown_status_copied: '已复制到剪贴板。',
	tool_chatgpt_export_to_markdown_status_done: '完成 — {n} 轮（{source}）。',
	tool_chatgpt_export_to_markdown_status_working: '正在解析导出…',
	tool_chatgpt_export_to_markdown_title: 'ChatGPT 导出转 Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: '删线程前，把今天的 ChatGPT 导出归档成 Markdown。',
	tool_chatgpt_export_to_markdown_usecase_2: '需要表格列时，切到 CSV 拿 role/content。',
	tool_chatgpt_export_to_markdown_usecase_3: 'Claude 的 chat_messages JSON 也丢到本页——不必第二个工具。',
	tool_chatgpt_export_to_markdown_usecases_title: '适合这些情况',
};

export default zh;
