/**
 * i18n 工具分片（find-and-validate-xml-sitemap / zh）。
 * 场景：输入站点 → 发现 sitemap → 校验 XML 结构与 loc 抽样（不做生成）。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: '查找并验证 XML sitemap',
	tool_find_and_validate_xml_sitemap_home_desc:
		'从 robots.txt 或 /sitemap.xml 发现站点地图，检查 XML 结构、类型与样例 loc。',
	tool_find_and_validate_xml_sitemap_desc:
		'从 robots.txt 或 /sitemap.xml 发现站点地图，检查 XML 结构、类型与样例 loc。',
	tool_find_and_validate_xml_sitemap_title: '查找并验证 XML 站点地图',
	tool_find_and_validate_xml_sitemap_description:
		'输入站点网址，经 robots.txt 的 Sitemap: 行或 /sitemap.xml 查找 XML 站点地图，校验结构、统计 loc，并区分 urlset 与 sitemapindex。不做生成。示例：sitemaps.org。 本页展示过程、步骤和示例。',
	tool_find_and_validate_xml_sitemap_url_label: '站点网址',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: '查找并验证',
	tool_find_and_validate_xml_sitemap_sample: '加载示例',
	tool_find_and_validate_xml_sitemap_clear: '清空',
	tool_find_and_validate_xml_sitemap_running: '正在发现并校验 sitemap…',
	tool_find_and_validate_xml_sitemap_url_error: '请输入合法的 http(s) 站点网址（源站或首页）。',
	tool_find_and_validate_xml_sitemap_error_prefix: '错误：',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'无法拉取 sitemap 候选。站点可能离线、拦截机器人或拒绝请求。',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'网址与域名会发到我们的 Worker 以便请求 robots.txt 与 sitemap；不作业务库长期存储。',
	tool_find_and_validate_xml_sitemap_result_site: '站点源',
	tool_find_and_validate_xml_sitemap_result_candidates: '尝试过的候选',
	tool_find_and_validate_xml_sitemap_result_primary: '主要结果',
	tool_find_and_validate_xml_sitemap_result_none_primary: '候选中未发现有效的 sitemap 结构',
	tool_find_and_validate_xml_sitemap_col_url: '地址',
	tool_find_and_validate_xml_sitemap_col_status: 'HTTP 状态',
	tool_find_and_validate_xml_sitemap_col_kind: '类型',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'loc 数量',
	tool_find_and_validate_xml_sitemap_col_valid: '结构有效',
	tool_find_and_validate_xml_sitemap_col_samples: '样例 loc',
	tool_find_and_validate_xml_sitemap_valid_yes: '是',
	tool_find_and_validate_xml_sitemap_valid_no: '否',
	tool_find_and_validate_xml_sitemap_empty_findings: '该站点未返回任何发现结果。',
	tool_find_and_validate_xml_sitemap_how_title: '怎么用',
	tool_find_and_validate_xml_sitemap_how_body:
		'本工具只做一件事：找到站点的 XML 站点地图，并判断是否像合法的 urlset 或 sitemapindex——不会替你生成新文件。',
	tool_find_and_validate_xml_sitemap_how_item_1: '输入站点源或首页网址。',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'点击「查找并验证」；Worker 先读 robots.txt 的 Sitemap: 行，再尝试 /sitemap.xml 等常见路径。',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'在结果表里查看根类型（urlset / sitemapindex）、URL 数量与样例 <loc>。',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'先修好这里标出的 XML 或发现路径问题，再去提交 IndexNow 或 Search Console。',
	tool_find_and_validate_xml_sitemap_formula_title: '发现与校验规则',
	tool_find_and_validate_xml_sitemap_formula_body:
		'对齐 sitemaps.org 协议：结构良好的 XML，根节点为 urlset 或 sitemapindex，并可统计 <loc>。',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'发现顺序：先 robots.txt 的 Sitemap: 指令，再 /sitemap.xml、/sitemap_index.xml、/sitemap-index.xml。',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'响应看起来像 sitemap XML 且 HTTP 成功时，记为「结构有效」。',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'根类型：sitemapindex 列出子 sitemap；urlset 列出页面 loc——两者都会报告。',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'统计 <loc> 并最多展示 10 条样例；不会逐个抓取列表里的每个网址。',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'gzip、超大正文、重定向与非 XML 可能导致校验失败。私网主机一律拒绝。',
	tool_find_and_validate_xml_sitemap_example_title: '示例',
	tool_find_and_validate_xml_sitemap_example:
		'示例输入 https://www.sitemaps.org/。Worker 检查 robots.txt Sitemap: 与常见路径，并报告每条候选的 HTTP 状态、类型（urlset/sitemapindex）、loc 数量、样例 loc 与 validStructure。',
	tool_find_and_validate_xml_sitemap_usecases_title: '适用场景',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'查找 sitemap：CMS 迁移或 CDN 切换后，确认站点地图发布在哪个地址。',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'XML sitemap 检查 / 校验：提交 Search Console 前确认文件结构合法，并分清是索引还是 urlset。',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'快速核对 loc：大型 sitemap 重新生成后，抽样看几条 <loc>，不必整文件下载。',
	tool_find_and_validate_xml_sitemap_faq_q1: '这是 sitemap 生成器吗？',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'不是。本页只查找并验证已有站点地图。若要从 URL 列表生成文件，请用 XML Sitemap 生成工具。',
	tool_find_and_validate_xml_sitemap_faq_q2: '你们会到哪里找 sitemap？',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'先读 robots.txt 的 Sitemap: 行，再尝试同主机上的 /sitemap.xml 与常见索引路径。',
	tool_find_and_validate_xml_sitemap_faq_q3: 'sitemapindex 和 urlset 有什么区别？',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex 列出子 sitemap 地址；urlset 列出页面 loc。两者都是协议合法根节点，结果表会标出类型。',
	tool_find_and_validate_xml_sitemap_faq_q4: '会抓取 sitemap 里每一个网址吗？',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'不会。只统计 <loc>、展示少量样例并做结构检查，不逐条探测页面状态。',
	tool_find_and_validate_xml_sitemap_faq_q5: '我的网址会上传或被保存吗？',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'网址/域名必须到达我们的 Worker 才能拉取 robots.txt 与 sitemap。检查记录不作业务库长期存储。这是边缘工具，不是「不上传」。',
	tool_find_and_validate_xml_sitemap_references:
		'sitemaps.org 协议；Google Search Central — 站点地图概览。',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — 协议',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — 站点地图概览',
};

export default zh;
