/**
 * i18n tool shard (curl-to-fetch / zh).
 * 简体：H1「curl 转 fetch」；本地解析 cURL，不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文文案键表。 */
const zh: SiteLangDict = {
	tool_curl_to_fetch_article:
		'把 API 文档或终端里的 cURL 命令粘贴进来，得到可放进前端项目的 JavaScript fetch 代码。支持方法、请求头、JSON 正文、Basic 认证与 -G 查询串；解析在浏览器内完成，不上传服务器。',
	tool_curl_to_fetch_clear: '清空',
	tool_curl_to_fetch_convert: '转换',
	tool_curl_to_fetch_copy: '复制',
	tool_curl_to_fetch_copy_done: '已复制',
	tool_curl_to_fetch_copy_empty: '还没有可复制的内容 — 请先转换 cURL。',
	tool_curl_to_fetch_desc: '浏览器内把 cURL 转成 fetch 代码 — 不上传服务器，命令留在本机。',
	tool_curl_to_fetch_description:
		'粘贴 cURL 命令，生成 JavaScript fetch 片段 — 支持方法、请求头、JSON 正文、Basic 认证（-u）与 -G 查询串。示例：进页自动加载 POST JSON 样例并显示 fetch 代码。命令在浏览器内处理，不会上传到服务器。',
	tool_curl_to_fetch_error_empty: '请先粘贴 cURL 命令。',
	tool_curl_to_fetch_error_no_url: '找不到 URL，请加上 https://… 或使用 --url。',
	tool_curl_to_fetch_error_parse: '无法解析这条 cURL，请检查引号与行续符。',
	tool_curl_to_fetch_error_unclosed_quote: '引号未闭合 — 请修正后重试。',
	tool_curl_to_fetch_example:
		'输入：curl -X POST https://api.example.com/users -H "Content-Type: application/json" -d \'{"name":"Ada"}\' → 输出：带 method、headers、body 的 fetch(...)。',
	tool_curl_to_fetch_example_title: '示例',
	tool_curl_to_fetch_faq_a1: '不会。解析与生成代码都在当前标签页完成，命令不会 POST 到我们的服务器。',
	tool_curl_to_fetch_faq_a2:
		'支持 URL（位置参数或 --url）、-X/-H/-d/-u、-G 把 data 拼进查询串、引号字符串与反斜杠续行。不认识的 flag 会跳过并提示。',
	tool_curl_to_fetch_faq_a3: '-G 会把 --data 内容拼到 URL 查询串，而不是请求体；本页与 curl 行为一致。',
	tool_curl_to_fetch_faq_a4: '-u 用户名:密码 会生成 Authorization: Basic + Base64，与 curl 一致。',
	tool_curl_to_fetch_faq_a5:
		'本页只输出浏览器 fetch API。axios 或 Python requests 请按 URL/方法/头/正文自行改写 — 本站不另开转换页。',
	tool_curl_to_fetch_faq_q1: 'cURL 会上传吗？',
	tool_curl_to_fetch_faq_q2: '支持哪些 curl 参数？',
	tool_curl_to_fetch_faq_q3: '-G 在这里怎么用？',
	tool_curl_to_fetch_faq_q4: '-u 怎么处理？',
	tool_curl_to_fetch_faq_q5: '能输出 axios 或 Python 吗？',
	tool_curl_to_fetch_how_body: '从文档或终端复制 cURL，在本地解析常见参数，得到可粘贴的 fetch 代码。',
	tool_curl_to_fetch_how_item_1: '粘贴完整 cURL（行末 \\ 续行也可以）。',
	tool_curl_to_fetch_how_item_2: '选择 fetch 或 async/await 输出，点「转换」。',
	tool_curl_to_fetch_how_item_3: '检查生成代码里的 method、headers、body。',
	tool_curl_to_fetch_how_item_4: '复制到项目；改命令后再点一次转换。',
	tool_curl_to_fetch_how_title: '怎么用',
	tool_curl_to_fetch_input_label: 'cURL 命令',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.example.com/…',
	tool_curl_to_fetch_large_warn: '命令较大（>50 KB），解析可能变慢。',
	tool_curl_to_fetch_load_sample: '加载样例',
	tool_curl_to_fetch_output_label: 'JavaScript fetch 输出',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: '输出格式',
	tool_curl_to_fetch_rules_body: 'curl 参数如何映射到 fetch options — 以及哪些仍需手工改。',
	tool_curl_to_fetch_rules_item_1: '-X POST → options.method = "POST"；仅有 -d 时默认 POST（-G 时保持 GET）。',
	tool_curl_to_fetch_rules_item_2: '每个 -H 写入 options.headers，JSON 的 Content-Type 会保留。',
	tool_curl_to_fetch_rules_item_3: '-d 正文进 body；-G 时拼到 URL 查询串。',
	tool_curl_to_fetch_rules_item_4: 'Cookie、证书、代理等浏览器 fetch 无法复现的 flag 会跳过并警告。',
	tool_curl_to_fetch_rules_title: '规则说明',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: '已转换 — 请查看下方 fetch 代码。',
	tool_curl_to_fetch_title: 'curl 转 fetch',
	tool_curl_to_fetch_usecase_1: 'OpenAPI 文档里的 curl 示例 — 粘贴后快速得到前端 fetch。',
	tool_curl_to_fetch_usecase_2: '调试 Bearer 请求：保留 Authorization 头，把逻辑迁到 JavaScript。',
	tool_curl_to_fetch_usecase_3: '把 shell 里的 curl 命令改成浏览器或 Node 的 fetch 调用。',
	tool_curl_to_fetch_usecases_title: '适用场景',
	tool_curl_to_fetch_warn_unknown_flags: '已跳过不支持的参数：{flags}',
};

export default zh;
