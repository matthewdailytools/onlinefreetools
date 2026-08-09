/**
 * i18n tool shard (on-page-seo-checker / zh).
 * 简体中文 — 按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_onpage_home_title: '页面 SEO 检查器',
	tool_onpage_home_desc:
		'揪出拖累搜索表现的页面标签问题：在浏览器里检查标题、H1、meta 描述、canonical、Open Graph 与 JSON-LD。',
	tool_onpage_title: '页面 SEO 检查器 — 找出并修复页面标签问题',
	tool_onpage_description:
		'标题偏弱、meta 描述缺失、重复 H1 或 canonical 配置错误，都会悄悄拖累搜索排名与点击。粘贴 URL 或 HTML，逐项检查标题、H1、meta 描述、canonical、Open Graph、JSON-LD、混合内容与渲染阻塞，每条都附修复建议。粘贴模式在本地解析；URL 模式仅抓取一次、不存储。示例：一个双 H1 且含 http:// 图片的样例页面。',
	tool_onpage_url_tab: '抓取 URL',
	tool_onpage_html_tab: '粘贴 HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: '检查 URL',
	tool_onpage_html_ph: '在此粘贴 <head>（及 body 片段）HTML…',
	tool_onpage_check: '检查页面',
	tool_onpage_sample: '加载样例',
	tool_onpage_clear: '清空',
	tool_onpage_copy: '复制',
	tool_onpage_copied: '已复制',
	tool_onpage_running: '检查中…',
	tool_onpage_error_prefix: '错误：',
	tool_onpage_url_error: '请输入有效的 http(s) URL。',
	tool_onpage_fetch_failed: '无法抓取该 URL。页面可能离线、屏蔽了爬虫，或返回的不是 HTML。',
	tool_onpage_no_html: '请先粘贴 HTML，或抓取一个 URL。',
	tool_onpage_no_results: '暂无检查结果。',
	tool_onpage_summary_title: '检查汇总',
	tool_onpage_summary_n_ok: '{n} 项通过',
	tool_onpage_summary_n_warn: '{n} 项警告',
	tool_onpage_summary_n_err: '{n} 项问题',
	tool_onpage_status_ok: '通过',
	tool_onpage_status_warn: '警告',
	tool_onpage_status_err: '问题',
	tool_onpage_title_check: '标题',
	tool_onpage_title_missing: '未找到 <title>。请在 <head> 中补充一个。',
	tool_onpage_title_ok: '标题共 {n} 个字符。接近 50–60 字符时搜索结果展示效果较好。',
	tool_onpage_title_long: '标题有 {n} 个字符，在搜索结果中很可能被截断，建议控制在 50–60 字符左右。',
	tool_onpage_title_short: '标题只有 {n} 个字符。可以补充页面核心信息，让标题更有价值。',
	tool_onpage_desc_check: 'Meta 描述',
	tool_onpage_desc_missing: '未找到 meta description。请写一段 140–160 字符、与页面内容一致的摘要。',
	tool_onpage_desc_ok: '描述共 {n} 个字符。140–160 字符在大多数搜索结果片段中展示完整。',
	tool_onpage_desc_long: '描述有 {n} 个字符，搜索片段通常会在 160 字符左右截断。',
	tool_onpage_desc_short: '描述只有 {n} 个字符。可以多写几句页面提供的价值。',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: '未找到 H1。请使用一个能概括页面主题的 H1。',
	tool_onpage_h1_multiple: '发现 {n} 个 H1。每页只保留一个 H1，小节标题使用 H2–H6。',
	tool_onpage_h1_ok: '已找到一个 H1，且位于 <body> 内。',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: '未设置 canonical。当同一内容可通过多个 URL 访问时，应添加 <link rel="canonical">。',
	tool_onpage_canonical_ok: '已找到自引用 canonical。',
	tool_onpage_canonical_other: 'Canonical 指向了其他 URL。除非本页确实是目标页的副本，否则应使用自引用 canonical。',
	tool_onpage_robots_check: 'Robots meta',
	tool_onpage_robots_missing: '未设置 robots meta。默认即 index,follow，对大多数公开页面是合适的。',
	tool_onpage_robots_noindex: '页面设置了 noindex，将不会出现在 Google 搜索结果中。如果页面需要被收录，请移除该设置。',
	tool_onpage_robots_ok: 'Robots meta 允许索引与跟踪链接。',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: '未找到 og: 标签。添加 og:title、og:description 与 og:image 以便社交分享预览。',
	tool_onpage_og_partial: '缺少 {n} 个必需 og: 字段。请确保 og:title、og:description 与 og:image 齐全。',
	tool_onpage_og_ok: 'og:title、og:description 与 og:image 均已就位。',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: '未找到 JSON-LD 结构化数据。当 schema.org 标记描述可见内容时，可以考虑添加。',
	tool_onpage_jsonld_invalid: '某个 JSON-LD 块无法解析为 JSON。请检查语法错误。',
	tool_onpage_jsonld_ok: '发现 {n} 个 JSON-LD 块。请保持结构化数据与访客看到的内容一致。',
	tool_onpage_mixed_check: '混合内容',
	tool_onpage_mixed_none: '在 https 上下文中未发现 http:// 资源引用。',
	tool_onpage_mixed_found: '发现 {n} 处 http:// 引用。浏览器会拦截混合内容，请改为 https 地址。',
	tool_onpage_render_check: '渲染阻塞',
	tool_onpage_render_none: '未发现明显的渲染阻塞样式表或脚本。',
	tool_onpage_render_found: '在 <head> 中发现 {n} 个未带 media 属性的样式表。可将关键 CSS 内联或延迟加载以改善 LCP。',
	tool_onpage_unknown: '无法判定：{label}',
	tool_onpage_how_title: '工作原理',
	tool_onpage_how_body:
		'检查器会解析你粘贴的标记（或从 URL 抓取的 HTML），对一组固定的页面 SEO 检查项逐项评估。每项只读取一类标签：标题、meta 描述、H1、canonical、robots meta、Open Graph 字段、JSON-LD、混合内容与渲染阻塞资源。粘贴模式完全在浏览器本地进行；URL 模式通过本站 Worker 拉取页面一次，不存储内容。',
	tool_onpage_rules_title: '检查项依据的规则',
	tool_onpage_rules_body:
		'以下是每项检查对照的标准，来源为 Google Search Central 与 HTML 规范。',
	tool_onpage_rules_item_1:
		'标题：每页应有一个描述性的 <title>。Google 可能改写标题，但 50–60 字符左右的简洁标题通常展示较好。',
	tool_onpage_rules_item_2:
		'H1：每个页面只使用一个能概括主题的 H1，其余标题用 H2–H6 形成清晰的层级。',
	tool_onpage_rules_item_3:
		'Canonical：当存在重复内容时，自引用 canonical 告诉 Google 哪个 URL 是首选。<link rel="canonical"> 放在 <head> 中。',
	tool_onpage_rules_item_4:
		'混合内容：https 页面引用 http:// 资源会被浏览器默认拦截。本项把这些引用列为警告。',
	tool_onpage_rules_item_5:
		'渲染阻塞：<head> 中未带 media 属性的样式表会阻塞渲染。本检查为启发式判断，不测量真实加载耗时。',
	tool_onpage_example_title: '示例',
	tool_onpage_example:
		'样例输入是一个 71 字符标题、无 meta 描述、两个 H1、canonical 指向其他 URL、含一个 og:image、一段合法 JSON-LD 与一处 http:// 图片的页面。检查器会把标题判为可能截断、H1 判为警告、canonical 判为非自引用、混合内容判为警告——与加载样例后页面展示的结果一致。',
	tool_onpage_usecases_title: '适用场景',
	tool_onpage_usecase_1:
		'改版或重新上线前：把同一页面跑一遍检查器，一次性修复列出的问题。',
	tool_onpage_usecase_2:
		'模板交接：收到外包或页面构建器导出的 HTML 时，先核对 head 标签，而不是直接信任导出结果。',
	tool_onpage_usecase_3:
		'内容更新：CMS 编辑后，确认标题、描述与 canonical 仍与页面新内容一致。',
	tool_onpage_faq_q1: '页面 SEO 检查器都查什么？',
	tool_onpage_faq_a1:
		'它检查页面自己能控制的标签：标题、meta 描述、H1、canonical、robots meta、Open Graph、JSON-LD 结构化数据、混合内容与渲染阻塞资源。它不测量排名，也不检查外链。',
	tool_onpage_faq_q2: '为什么每页只应有一个 H1？',
	tool_onpage_faq_a2:
		'单个 H1 能清晰地向读者和搜索引擎表达页面主题。多个 H1 会让层级变得模糊；用一个 H1，其余用 H2–H6 组织。',
	tool_onpage_faq_q3: 'Canonical 必须指向自己吗？',
	tool_onpage_faq_a3:
		'对需要参与排名的页面，是的——自引用 canonical 是最清晰的信号。把 canonical 指向其他 URL 是在告诉 Google 本页是重复页，只有确属如此时才该这样做。',
	tool_onpage_faq_q4: '为什么检查器把 http:// 资源标记为混合内容？',
	tool_onpage_faq_a4:
		'当页面通过 https 提供，却引用了 http:// 的图片、脚本或样式时，浏览器会默认拦截这些请求。本项把这些引用列为警告，方便你改成 https。',
	tool_onpage_faq_q5: 'JSON-LD 检查会做完整校验吗？',
	tool_onpage_faq_a5:
		'它会验证 JSON-LD 块能否解析为合法 JSON，并提醒你保持结构化数据与可见内容一致。它不运行完整的 schema.org 校验器。',
	tool_onpage_faq_q6: '我的 HTML 会被上传吗？',
	tool_onpage_faq_a6:
		'不会。粘贴 HTML 时，解析在你的设备上完成，不向服务器发送任何内容。URL 模式会通过本站 Worker 拉取页面一次，但不存储。',
	tool_onpage_references: 'Google Search Central — meta 标签；Google Search Central — canonical；MDN — <meta> 元素。',
	tool_onpage_ref_tags_label: 'Search Central — Google 能识别的 meta 标签',
	tool_onpage_ref_canonical_label: 'Search Central — 规范化 URL',
	tool_onpage_ref_mdn_label: 'MDN — <meta>：元数据元素',
};

export default zh;
