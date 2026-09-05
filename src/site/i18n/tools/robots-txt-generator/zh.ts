/**
 * i18n tool shard (robots-txt-generator / zh).
 * Chinese locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_robots_home_title: 'Robots.txt 生成器',
	tool_robots_home_desc: '用一份语法正确的 robots.txt 控制搜索引擎的抓取范围——在浏览器里配置允许、禁止与 AI 爬虫规则。',
	tool_robots_title: 'Robots.txt 生成器 — 管理允许与禁止并配置 AI 爬虫',
	tool_robots_description:
		'robots.txt 写错可能让整站从搜索结果消失。在浏览器里配置 Allow、Disallow 与 AI 爬虫规则，再复制文件。内容不上传服务器。示例：拦截 GPTBot、同时保留 Googlebot。步骤清晰，含示例说明。隐私友好，正文不上传。',
	tool_robots_generate: '生成',
	tool_robots_sample: '加载样例',
	tool_robots_clear: '清空',
	tool_robots_copy: '复制',
	tool_robots_copied: '已复制',
	tool_robots_agents_label: 'User-agent',
	tool_robots_agents_hint: '勾选要包含的爬虫，再为每个分组添加路径。',
	tool_robots_include: '包含此 User-agent',
	tool_robots_agent_add: '添加自定义代理',
	tool_robots_agent_remove: '删除代理',
	tool_robots_allow_label: 'Allow 路径（每行一个）',
	tool_robots_disallow_label: 'Disallow 路径（每行一个）',
	tool_robots_sitemap_label: 'Sitemap URL（可选）',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: '下载',
	tool_robots_empty_agent: '请先勾选或添加一个 User-agent。',
	tool_robots_owner_of: '所属：{owner}',
	tool_robots_how_title: '怎么用',
	tool_robots_how_body:
		'选好要针对的爬虫，为每个分组添加 Allow 与 Disallow 路径，可选地加一行 Sitemap，然后点「生成」。页面按 RFC 9309 的布局组装纯文本：每个分组一行 User-agent，下方是它的 Allow/Disallow 行，分组之间空一行，Sitemap 行放在末尾。复制后放到站点根目录 /robots.txt 即可。',
	tool_robots_rules_title: '需要记住的语法规则',
	tool_robots_rules_body:
		'robots.txt 的规则是路径前缀而非正则；一个爬虫只遵守一组规则——User-agent 与它匹配得最具体的那一组。以下是本生成器遵循的规则。',
	tool_robots_rules_item_1: '分组选择：爬虫遵守 User-agent 匹配最具体的那一组，写出它本名的分组优先于 *，文件里的先后顺序不起决定作用；同一个爬虫的多条 User-agent 记录会合并成一组（RFC 9309）。',
	tool_robots_rules_item_2: '前缀匹配：Allow 与 Disallow 匹配路径前缀，不是子串也不是正则；只有 * 和 $ 是特殊字符（RFC 9309）。',
	tool_robots_rules_item_3: '组内优先级：匹配路径最长的规则胜出；Allow 与 Disallow 匹配长度相同时，Allow 胜出。所以 Disallow: /admin/ 搭配 Allow: /admin/public/，public 子目录仍然可抓。',
	tool_robots_rules_item_4: '整站与 Sitemap 行：Disallow: / 会挡住该代理的所有 URL，Disallow 后面留空则表示全部放行。Sitemap: 是 RFC 9309 之外的扩展，不区分大小写、可放在任意位置——本生成器把它放在最后。',
	tool_robots_example_title: '示例',
	tool_robots_example:
		'样例：Googlebot 配置 Allow: /（完全放行），GPTBot 配置 Disallow: /（完全禁止），最后一行 Sitemap 指向 /sitemap.xml。输出就是这个布局：每个爬虫一个分组、组间空行、sitemap 在最后。',
	tool_robots_usecases_title: '适合什么场景',
	tool_robots_usecase_1: '新站上线：生成一份初始 robots.txt，让搜索引擎正常抓取，同时隐藏私有暂存路径。',
	tool_robots_usecase_2: 'AI 爬虫管控：给 GPTBot、ClaudeBot、Google-Extended、CCBot 或 PerplexityBot 单独建一组 Disallow，同时让 Googlebot 照常抓取。注意 Google-Extended 管的是 Gemini 与 Vertex AI 的引用取材，搜索结果里的 AI 概览仍然走 Googlebot。',
	tool_robots_usecase_3: '抓取发现：在 robots.txt 里加一行 Sitemap，让爬虫更容易找到你的站点地图。',
	tool_robots_faq_q1: '写 Disallow: / 会怎样？',
	tool_robots_faq_a1: '它告诉该爬虫不要抓取站点根目录下的任何 URL。如果 Googlebot 拿到 Disallow: /，你的页面可能从 Google 搜索结果中消失。要注意 Disallow 拦的是抓取而不是索引：被屏蔽但有外部链接指向的 URL 仍可能出现在结果里，只是没有摘要；真想让它下架，得让页面可抓取并加上 noindex。只是要隐藏暂存路径的话，用 Disallow: /private/ 这类具体路径。',
	tool_robots_faq_q2: '怎么阻止 GPTBot 这类 AI 爬虫？',
	tool_robots_faq_a2: '用该爬虫的 User-agent（例如 GPTBot、ClaudeBot、Google-Extended、CCBot、PerplexityBot）建一个分组，加上 Disallow: /。AI 爬虫会不时更新 User-agent 和 IP 段，请以各家官方文档为准。',
	tool_robots_faq_q3: 'Sitemap 行应该放在哪里？',
	tool_robots_faq_a3: '位置不影响搜索引擎读取，但惯例是放在文件末尾。本工具在填写 URL 时会把它追加到最后。',
	tool_robots_faq_q4: '我的 robots.txt 会被上传到任何地方吗？',
	tool_robots_faq_a4: '不会。文件在浏览器里生成，从不发送到服务器。关闭标签页后不会保留任何内容。',
	tool_robots_references: 'RFC 9309 Robots 排除协议；Google Search Central — robots.txt；Google Search Central — 管理 AI 爬虫。',
	tool_robots_ref_rfc_label: 'RFC 9309 — Robots 排除协议',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — 管理 AI 爬虫',
};

export default zh;
