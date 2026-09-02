/**
 * i18n 工具分片（check-robots-txt-url-blocked / zh）。
 * 场景：粘贴页面网址 → Worker 拉取 /robots.txt → 报告是否屏蔽及命中规则。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'robots.txt 网址屏蔽检查',
	tool_check_robots_txt_url_blocked_home_desc:
		'粘贴页面网址，查看 robots.txt 是否对 Googlebot 等爬虫屏蔽该路径。',
	tool_check_robots_txt_url_blocked_desc:
		'粘贴页面网址，查看 robots.txt 是否对 Googlebot 等爬虫屏蔽该路径。',
	tool_check_robots_txt_url_blocked_title: '检查网址是否被 robots.txt 屏蔽',
	tool_check_robots_txt_url_blocked_description:
		'粘贴页面网址，在线检查 robots.txt 是否对 Googlebot、*、Bingbot 或 GPTBot 屏蔽该路径。边缘拉取并显示命中规则。示例：/admin。',
	tool_check_robots_txt_url_blocked_url_label: '页面网址',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: '用户代理',
	tool_check_robots_txt_url_blocked_check: '检查',
	tool_check_robots_txt_url_blocked_sample: '加载示例',
	tool_check_robots_txt_url_blocked_clear: '清空',
	tool_check_robots_txt_url_blocked_running: '正在拉取 robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: '请输入含路径的合法 http(s) 网址。',
	tool_check_robots_txt_url_blocked_error_prefix: '错误：',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'无法拉取 robots.txt。站点可能离线、拦截机器人或拒绝请求。',
	tool_check_robots_txt_url_blocked_privacy_note:
		'网址与域名会发到我们的 Worker 以便请求 /robots.txt；不作业务库长期存储。',
	tool_check_robots_txt_url_blocked_result_allowed_yes: '允许抓取',
	tool_check_robots_txt_url_blocked_result_allowed_no: '已屏蔽',
	tool_check_robots_txt_url_blocked_result_matched: '命中规则',
	tool_check_robots_txt_url_blocked_result_matched_none: '无匹配 Allow/Disallow（按允许处理）',
	tool_check_robots_txt_url_blocked_result_http_status: 'robots.txt HTTP 状态',
	tool_check_robots_txt_url_blocked_result_path: '评估路径',
	tool_check_robots_txt_url_blocked_result_ua: '使用的用户代理',
	tool_check_robots_txt_url_blocked_result_robots_url: 'robots.txt 地址',
	tool_check_robots_txt_url_blocked_result_group: '命中的 User-agent 组',
	tool_check_robots_txt_url_blocked_result_preview_missing: '无 robots.txt 正文（缺失或返回了 HTML 错误页）。按允许全部处理。',
	tool_check_robots_txt_url_blocked_result_preview: 'robots.txt 预览',
	tool_check_robots_txt_url_blocked_how_title: '怎么用',
	tool_check_robots_txt_url_blocked_how_body:
		'本工具只回答一件事：对选定爬虫，站点 robots.txt 是否允许抓取该页面路径。只拉 /robots.txt，不抓页面正文。',
	tool_check_robots_txt_url_blocked_how_item_1: '粘贴完整页面网址（路径很重要，不只是域名）。',
	tool_check_robots_txt_url_blocked_how_item_2: '选择用户代理（默认 Googlebot；也可选 *、Bingbot、GPTBot）。',
	tool_check_robots_txt_url_blocked_how_item_3: '点击「检查」，等待 Worker 拉取源站 /robots.txt。',
	tool_check_robots_txt_url_blocked_how_item_4: '查看「允许/已屏蔽」、命中规则行与 HTTP 状态。',
	tool_check_robots_txt_url_blocked_how_item_5: '需要核对时，浏览下方 robots.txt 预览确认所用分组。',
	tool_check_robots_txt_url_blocked_formula_title: '匹配规则说明',
	tool_check_robots_txt_url_blocked_formula_body:
		'评估对齐 Google robots.txt 文档与 RFC 9309 的常见做法：最长前缀匹配；同长度时 Allow 优先于 Disallow。',
	tool_check_robots_txt_url_blocked_formula_item_1: '先找与所选爬虫匹配的 User-agent 组；没有则回退到 * 组。',
	tool_check_robots_txt_url_blocked_formula_item_2: '在匹配该路径的 Allow/Disallow 中，最长前缀胜出。',
	tool_check_robots_txt_url_blocked_formula_item_3: '长度相同时，Allow 优先于 Disallow（Google 文档偏好）。',
	tool_check_robots_txt_url_blocked_formula_item_4: '缺少 robots.txt 或空分组按「全部允许」处理，仍显示 HTTP 状态。',
	tool_check_robots_txt_url_blocked_formula_item_5: '只请求 /robots.txt；拒绝私网主机。结果不是 Search Console 官方测试器结论。',
	tool_check_robots_txt_url_blocked_example_title: '示例',
	tool_check_robots_txt_url_blocked_example:
		'示例输入 https://www.bing.com/search，用户代理 Googlebot。Worker 拉取 https://www.bing.com/robots.txt，评估路径 /search，并报告允许或屏蔽及命中的 Disallow/Allow 行（若有）。',
	tool_check_robots_txt_url_blocked_usecases_title: '适合什么场景',
	tool_check_robots_txt_url_blocked_usecase_1:
		'上线前确认：检查 /admin、/staging 等路径是否已被屏蔽，同时公开页仍可被抓取。',
	tool_check_robots_txt_url_blocked_usecase_2:
		'robots.txt 测试/校验：改完 Disallow 后，验证目标网址是否真的命中，无需改写成生成器。',
	tool_check_robots_txt_url_blocked_usecase_3:
		'AI 爬虫规则：把 UA 换成 GPTBot（或保留 *），看敏感路径是否对训练爬虫屏蔽。',
	tool_check_robots_txt_url_blocked_faq_q1: '这个工具会生成 robots.txt 吗？',
	tool_check_robots_txt_url_blocked_faq_a1:
		'不会。本页只检查网址是否被屏蔽。若要编写 Allow/Disallow，请用 robots.txt 生成工具。',
	tool_check_robots_txt_url_blocked_faq_q2: '为什么要分别测 Googlebot 和 *？',
	tool_check_robots_txt_url_blocked_faq_a2:
		'有 Googlebot 专属分组时会优先用它；许多其他爬虫回退到 *。分开测可避免误以为一条规则覆盖所有机器人。',
	tool_check_robots_txt_url_blocked_faq_q3: 'robots.txt 不存在或返回 404 怎么办？',
	tool_check_robots_txt_url_blocked_faq_a3:
		'常见爬虫实践会把缺失文件当作全部允许。工具仍显示 HTTP 状态，方便你看到 404 或重定向。',
	tool_check_robots_txt_url_blocked_faq_q4: '可以测试 GPTBot 这类 AI 爬虫吗？',
	tool_check_robots_txt_url_blocked_faq_a4:
		'可以，在用户代理列表选 GPTBot。匹配仍按 RFC 9309 路径规则；结果是边缘评估，不是官方爬虫裁决。',
	tool_check_robots_txt_url_blocked_faq_q5: '我的网址会上传或长期保存吗？',
	tool_check_robots_txt_url_blocked_faq_a5:
		'网址/域名必须到达 Worker 才能拉取 /robots.txt。我们不作业务库长期存储。这是边缘工具，不是「不上传」。',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt；RFC 9309 Robots Exclusion Protocol。',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default zh;
