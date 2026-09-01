/**
 * i18n 工具分片（prompt-template-builder / zh）。
 * 检索向 H1：Prompt 模板构建器；非 LLM，结构化 Role/Task/Constraints/Output。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_prompt_template_builder_article:
		'在本页把草稿 Prompt 整理成可复用的 Role / Task / Constraints / Output 模板。可粘贴自由文本或填写字段，再复制 Markdown 或 JSON。不调用任何模型 API。文本留在本机，不上传服务器。',
	tool_prompt_template_builder_build: '构建模板',
	tool_prompt_template_builder_clear: '清空',
	tool_prompt_template_builder_constraints_label: '约束',
	tool_prompt_template_builder_constraints_ph: '语气限制、范围、避免事项…',
	tool_prompt_template_builder_copy: '复制',
	tool_prompt_template_builder_desc: '构建结构化 Prompt 模板（Markdown/JSON）；文本留在本机，不上传服务器。',
	tool_prompt_template_builder_description:
		'Prompt 模板构建器：把自由 Prompt 文本与 Role、Task、Constraints、Output 字段合并为可复用模板。示例：进页会自动展示代码审查 Agent 样例。默认 Markdown 芯片；JSON 输出 {role,task,constraints,output}。解析只在本标签页——不是 LLM，也不是云端 Prompt 库。文本不出本机，不上传服务器。',
	tool_prompt_template_builder_download: '下载',
	tool_prompt_template_builder_empty: '请先填写自由文本或至少一个字段。',
	tool_prompt_template_builder_example:
		'加载示例会填入代码审查 Agent 的四段字段，生成带四个 ## 标题的 Markdown，并启用复制与下载。',
	tool_prompt_template_builder_example_title: '示例',
	tool_prompt_template_builder_faq_a1: '不会。模板只在本浏览器标签页构建。不会上传到 OpenAI、Anthropic 或我们的服务器。',
	tool_prompt_template_builder_faq_a2: '不会。本页只把你的文字整理成块，不调用模型 API，也不替你写新文案。',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT 导出转 Markdown 是把对话导出变成可读文件。本页是把草稿整理成可复用的系统 Prompt——归档对话后可再用本页提炼模板。',
	tool_prompt_template_builder_faq_a4:
		'可以。JSON 芯片输出 {role,task,constraints,output}，便于配置或测试。需要 Schema 校验时可配合 JSON Schema 校验器。',
	tool_prompt_template_builder_faq_a5: '自由文本框里以 Role:、Task:、Constraints:、Output: 开头的行会分段；显式字段优先于解析结果。',
	tool_prompt_template_builder_faq_q1: 'Prompt 会上传吗？',
	tool_prompt_template_builder_faq_q2: '会调用大模型吗？',
	tool_prompt_template_builder_faq_q3: '和 ChatGPT 导出转 Markdown 有何不同？',
	tool_prompt_template_builder_faq_q4: '能输出 JSON 吗？',
	tool_prompt_template_builder_faq_q5: '自由文本如何分段？',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: '输出格式',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: '自由 Prompt（可选）',
	tool_prompt_template_builder_free_ph: '粘贴草稿，或 Role: … Task: … 这样的行',
	tool_prompt_template_builder_how_body: '写好草稿，可选填四段，构建模板，再复制或下载。Markdown 与 JSON 是同任务的芯片。',
	tool_prompt_template_builder_how_item_1: '在自由框粘贴草稿，或填写 Role、Task、Constraints、Output——任务是结构化 Prompt 模板。',
	tool_prompt_template_builder_how_item_2: '点「构建模板」（进页已自动跑过示例）。',
	tool_prompt_template_builder_how_item_3: '需要 {role,task,constraints,output} 时可切到 JSON。',
	tool_prompt_template_builder_how_item_4: '复制或下载。可随时改字段再构建。',
	tool_prompt_template_builder_how_title: '怎么用',
	tool_prompt_template_builder_load_sample: '加载示例',
	tool_prompt_template_builder_output_fmt_label: '输出格式',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown 小节、JSON 结构、要点列表…',
	tool_prompt_template_builder_result_label: '模板',
	tool_prompt_template_builder_role_label: '角色 Role',
	tool_prompt_template_builder_role_ph: '模型应扮演谁…',
	tool_prompt_template_builder_rules_body: '可复用模板需要清晰分块、字段优先级和诚实边界——不是第二个生成器产品。',
	tool_prompt_template_builder_rules_item_1: '四块：Role、Task、Constraints、Output。空块不出现在 Markdown 里。',
	tool_prompt_template_builder_rules_item_2: '显式字段优先于自由文本解析。',
	tool_prompt_template_builder_rules_item_3: '默认 Markdown，## 标题；JSON 是同页芯片。',
	tool_prompt_template_builder_rules_item_4: '本工具只整理文字，不估 token，也不做 Schema 校验。',
	tool_prompt_template_builder_rules_title: '使用规则',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: '已复制到剪贴板。',
	tool_prompt_template_builder_status_done: '模板已就绪。',
	tool_prompt_template_builder_status_working: '正在构建模板…',
	tool_prompt_template_builder_task_label: '任务 Task',
	tool_prompt_template_builder_task_ph: '要完成的步骤…',
	tool_prompt_template_builder_title: 'Prompt 模板构建器',
	tool_prompt_template_builder_usecase_1: '产出团队可粘贴到任意聊天界面的代码审查 Agent 系统 Prompt。',
	tool_prompt_template_builder_usecase_2: '在接 API 前，把会议记录整理成 Role/Task/Constraints 块。',
	tool_prompt_template_builder_usecase_3: '导出 JSON 后，用 JSON Schema 校验器检查下游配置文件。',
	tool_prompt_template_builder_usecases_title: '适用场景',
};

export default zh;
