/**
 * i18n 工具分片（sitemap-xml-generator / zh）。
 * 中文独立重写：sitemap 生成器 语义本地化，保留 sitemap.xml/lastmod/changefreq/priority 等技术专名。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_sitemap_home_title: 'XML Sitemap 生成器',
	tool_sitemap_home_desc: '帮 Google 发现内链走不到的页面——把 URL 列表转成合法的 sitemap.xml，支持 lastmod、changefreq 与 priority，全程在浏览器内完成。',
	tool_sitemap_title: 'XML Sitemap 生成器 — 从 URL 列表生成 sitemap.xml',
	tool_sitemap_description:
		'sitemap 告诉 Google 站内有哪些 URL，尤其是内链薄弱、爬虫不容易走到的那些页面。粘贴 https URL（可附 lastmod），预览合法的 sitemap.xml 并复制到站点根目录，内容不上传服务器。示例：三条 URL 对应三个条目。',
	tool_sitemap_generate: '生成',
	tool_sitemap_sample: '加载样例',
	tool_sitemap_clear: '清空',
	tool_sitemap_copy: '复制',
	tool_sitemap_copied: '已复制',
	tool_sitemap_download: '下载',
	tool_sitemap_urls_label: 'URL（每行一条）',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'每行：URL，或 URL | lastmod（yyyy-MM-dd），或 URL | lastmod | changefreq | priority。例如：https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: '已跳过非 http 链接：{url}',
	tool_sitemap_warn_bad_lastmod: 'lastmod 格式无效（应为 yyyy-MM-dd 或 W3C 日期时间）：{url}',
	tool_sitemap_warn_too_many: '超过 50,000 条 URL——请拆成多个 sitemap，并用 sitemap index 链接起来。',
	tool_sitemap_how_title: '工作原理',
	tool_sitemap_how_body:
		'粘贴 URL 列表，每行一条。可用竖线追加可选元数据：lastmod（yyyy-MM-dd）、changefreq 与 priority。页面逐行解析，转义保留字符，检查每个 URL 是否以 http(s) 开头，再按 sitemap 协议拼出 urlset。把 XML 复制到站点根目录，在 robots.txt 中引用或在 Search Console 提交即可。',
	tool_sitemap_rules_title: '协议规则与限制',
	tool_sitemap_rules_body: '以下为 sitemap 协议与 Google 的要求，本工具按此生成。',
	tool_sitemap_rules_item_1: '必需项：每个 <url> 必须包含 <loc> 完整地址；lastmod、changefreq、priority 均为可选。',
	tool_sitemap_rules_item_2: 'lastmod 格式：W3C 日期（yyyy-MM-dd）或完整日期时间如 2026-08-01T12:00:00+00:00；其他格式会被忽略或标为无效。',
	tool_sitemap_rules_item_3: 'changefreq 只是提示而非信号，Google 不读取它，填写与否不影响抓取频率。',
	tool_sitemap_rules_item_4: '限制：单个 sitemap 最多 50,000 条 URL、压缩后 50MB；超出需拆分并用 sitemap index。',
	tool_sitemap_example_title: '示例',
	tool_sitemap_example:
		'样例输入：https://example.com/ 与带 lastmod 2026-08-01 的 https://example.com/products，再加上 https://example.com/about——输出为包含三个 url 条目的 urlset，中间一条带 lastmod 元素。',
	tool_sitemap_usecases_title: '适用场景',
	tool_sitemap_usecase_1: '新站：把 URL 列表生成第一份 sitemap.xml，并在 Search Console 提交。',
	tool_sitemap_usecase_2: '内容更新：只给真正改过的页面写 lastmod。Google 只有在整份文件里的 lastmod 都真实一致时才会采用这个字段，给所有 URL 一律填今天，反而会让它被忽略。',
	tool_sitemap_usecase_3: '收录加速：在 robots.txt 里指向 sitemap 地址，无需等待提交即可被发现。',
	tool_sitemap_faq_q1: '单个 sitemap 最多多少条 URL？',
	tool_sitemap_faq_a1: '50,000 条 URL 或 50MB（未压缩）。列表超过 50,000 时工具会提示，方便你拆分成多个文件并用 sitemap index 汇总。',
	tool_sitemap_faq_q2: 'lastmod 要求什么格式？',
	tool_sitemap_faq_a2: 'W3C 日期（yyyy-MM-dd）或完整日期时间如 2026-08-01T12:00:00+00:00。工具会标出格式不符的行，便于保存前修正。',
	tool_sitemap_faq_q3: 'changefreq 会影响抓取吗？',
	tool_sitemap_faq_a3: '不会。Google 不读取 changefreq，priority 同样被忽略；两者只是给其他消费者看的提示。最值得写准确的是 lastmod。',
	tool_sitemap_faq_q4: '和 IndexNow 有什么区别？',
	tool_sitemap_faq_a4: 'IndexNow 在页面变更后立即通知参与引擎，sitemap 则是爬虫周期性轮询的常驻清单。两者可并用：IndexNow 负责即时通知，sitemap 负责持续发现。',
	tool_sitemap_references: 'sitemaps.org — sitemap 协议；Google Search Central — 创建并提交 sitemap。',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — 协议',
	tool_sitemap_ref_google_label: 'Search Central — 创建并提交 sitemap',
};

export default zh;
