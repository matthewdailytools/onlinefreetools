/**
 * i18n tool shard (domain-lookup / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
	tool_domain_lookup_article:
		'一次查看域名的现网 DNS 解析与注册信息。查询经本站边缘发往 DoH 与 RDAP；联系人常被脱敏，结果也可能与你本机解析器不同。',
	tool_domain_lookup_clear: '清空',
	tool_domain_lookup_col_data: '数据',
	tool_domain_lookup_col_name: '名称',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: '类型',
	tool_domain_lookup_copied: '已复制',
	tool_domain_lookup_copy: '复制摘要',
	tool_domain_lookup_desc: '域名查询：查看 DNS 解析与注册信息（WHOIS/RDAP），含 A/MX/NS 与注册商、到期等。',
	tool_domain_lookup_description:
		'域名查询：在线查看 DNS 解析与注册信息（口语常说的 WHOIS，本工具走 RDAP）。步骤：输入 example.com 一类域名，并行查 DNS-over-HTTPS 与 RDAP，对照 A/AAAA/MX/NS/TXT 以及注册商、状态、到期事件。联系人常脱敏；查询经边缘转发，不做历史存档产品。',
	tool_domain_lookup_domain_label: '域名',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: '所查类型暂无 DNS 应答。',
	tool_domain_lookup_dns_fail: 'DNS 查询失败。',
	tool_domain_lookup_dns_heading: 'DNS 记录',
	tool_domain_lookup_err_empty: '请输入域名。',
	tool_domain_lookup_domain_normalized: '已校准为 {domain}。',
	tool_domain_lookup_err_format: '域名格式无效。请使用类似 example.com 的主机名（粘贴完整 URL 会自动校准）。',
	tool_domain_lookup_err_need_one: '请至少勾选 DNS 或注册信息。',
	tool_domain_lookup_captcha_label: '安全验证',
	tool_domain_lookup_err_captcha: '请先完成安全验证再查询。',
	tool_domain_lookup_err_captcha_fail: '安全验证失败，请重试。',
	tool_domain_lookup_events: '事件',
	tool_domain_lookup_example:
		'示例：查询 example.com → DNS 区可能看到公开 A/AAAA/NS；注册信息区可能列出注册商、状态与到期/注册事件（字段可能脱敏）。',
	tool_domain_lookup_example_title: '示例',
	tool_domain_lookup_faq_a1:
		'大家仍习惯说 WHOIS。多数通用顶级域已用 RDAP（HTTPS JSON）发布同类数据。本工具走 RDAP；部分国家域可能没有 RDAP。',
	tool_domain_lookup_faq_a2:
		'隐私规则下，注册人邮箱电话常被脱敏。注册商、状态、日期通常仍可见。我们只展示 RDAP 返回的内容。',
	tool_domain_lookup_faq_a3:
		'DNS 来自公共解析器视角（DoH）；RDAP 的 NS 是注册局登记值。传播延迟或刚改过解析时可能不一致。',
	tool_domain_lookup_faq_a4:
		'浏览器请求本站边缘 API，由 Worker 再查 DoH 与 RDAP。我们不做域名历史产品；结果按一次性展示理解。',
	tool_domain_lookup_faq_a5:
		'TLD 不支持、超时或 DNS 无应答会在对应分区提示，一侧失败不会挡住另一侧。',
	tool_domain_lookup_faq_q1: '这是 WHOIS 查询吗？',
	tool_domain_lookup_faq_q2: '为什么所有者联系方式是空的？',
	tool_domain_lookup_faq_q3: '为什么 DNS 的 NS 和注册信息里的不一致？',
	tool_domain_lookup_faq_q4: '会保存我查过的域名吗？',
	tool_domain_lookup_faq_q5: 'DNS 或 RDAP 失败怎么办？',
	tool_domain_lookup_how_body:
		'输入域名，选择查 DNS、注册信息或两者。边缘 Worker 用 Cloudflare DoH 查常见记录类型，并用 IANA bootstrap 找到该 TLD 的 RDAP 服务，读取注册商、状态、事件与注册局 NS。两个分区可独立成功或失败。',
	tool_domain_lookup_how_title: '如何使用',
	tool_domain_lookup_loading: '查询中…',
	tool_domain_lookup_lookup: '查询',
	tool_domain_lookup_ns_mismatch: '提示：DNS 的 NS 与 RDAP 登记的 NS 不一致——常见于传播未完成或刚改过解析。',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: '注册信息',
	tool_domain_lookup_rdap_fail: '注册信息（RDAP）查询失败。',
	tool_domain_lookup_rdap_heading: '注册信息（RDAP）',
	tool_domain_lookup_rdap_link: 'RDAP 链接',
	tool_domain_lookup_rdap_ns: '注册局 NS',
	tool_domain_lookup_rdap_ok: '已从 RDAP 取得注册信息。',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — DNS over HTTPS API',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup（RDAP）',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — 域名系统',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: '注册商',
	tool_domain_lookup_rules_body: '本页用于查看解析器侧 DNS 与注册局侧登记信息。含义与边界：',
	tool_domain_lookup_rules_item_1: 'DNS 查询类型：A、AAAA、CNAME、MX、NS、TXT、SOA（公共 DoH 视角）。',
	tool_domain_lookup_rules_item_2: '注册数据来自 RDAP，是多数 gTLD 上传统 WHOIS 的结构化替代。',
	tool_domain_lookup_rules_item_3: '联系人字段可能脱敏，勿默认能查到完整所有者信息。',
	tool_domain_lookup_rules_item_4: '传播期间 DNS 应答与 RDAP NS 可能不一致。',
	tool_domain_lookup_rules_item_5: '查询经本站边缘发往上游；我们不会改你的 DNS 或注册资料。',
	tool_domain_lookup_rules_title: '你会看到什么',
	tool_domain_lookup_sample: '加载样例',
	tool_domain_lookup_status: '状态',
	tool_domain_lookup_title: '域名查询 — 查看 DNS 解析与注册信息',
	tool_domain_lookup_usecase_1: '上线前：确认 A/AAAA/CNAME 是否指向预期主机。',
	tool_domain_lookup_usecase_2: '续费或交接：核对注册商、状态与到期事件（联系人可能脱敏）。',
	tool_domain_lookup_usecase_3: '邮件配置：查看 MX 与相关 TXT 片段（不做完整投递审计）。',
	tool_domain_lookup_usecases_title: '适合什么场景',
};
export default zh;
