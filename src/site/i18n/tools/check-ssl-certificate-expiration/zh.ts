/**
 * i18n tool shard (check-ssl-certificate-expiration / zh).
 * 场景：主机名 → crt.sh CT → 最新证书过期日（非实时握手）。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: '检查 SSL 证书过期时间',
	tool_check_ssl_certificate_expiration_home_desc:
		'查看主机名在证书透明度（crt.sh）中最新证书的过期时间——不是实时 TLS 握手。',
	tool_check_ssl_certificate_expiration_desc:
		'查看主机名在证书透明度（crt.sh）中最新证书的过期时间——不是实时 TLS 握手。',
	tool_check_ssl_certificate_expiration_title: '检查 SSL 证书过期时间',
	tool_check_ssl_certificate_expiration_description:
		'输入主机名做 SSL 证书到期检查：经 crt.sh 查询证书透明度，展示最新匹配证书的 notBefore、notAfter、颁发者与剩余天数。不是实时 TLS 握手。示例：example.com。 本页展示过程、步骤和示例。 本页展示过程、步骤和示例。',
	tool_check_ssl_certificate_expiration_host_label: '主机名',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: '检查',
	tool_check_ssl_certificate_expiration_sample: '加载示例',
	tool_check_ssl_certificate_expiration_clear: '清空',
	tool_check_ssl_certificate_expiration_running: '正在查询证书透明度…',
	tool_check_ssl_certificate_expiration_host_error: '请输入主机名（或粘贴 https 网址）。',
	tool_check_ssl_certificate_expiration_error_prefix: '错误：',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'无法查询 crt.sh。服务可能限流或暂时不可达。',
	tool_check_ssl_certificate_expiration_privacy_note:
		'主机名会发到我们的 Worker 以便查询 crt.sh，不会作为业务库长期保存。',
	tool_check_ssl_certificate_expiration_result_found_yes: '已找到 CT 证书',
	tool_check_ssl_certificate_expiration_result_found_no: '该主机无 CT 记录',
	tool_check_ssl_certificate_expiration_result_host: '主机名',
	tool_check_ssl_certificate_expiration_result_cn: '通用名',
	tool_check_ssl_certificate_expiration_result_issuer: '颁发者',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter（过期）',
	tool_check_ssl_certificate_expiration_result_days_left: '剩余天数',
	tool_check_ssl_certificate_expiration_result_expired_yes: '已过期（按 CT notAfter）',
	tool_check_ssl_certificate_expiration_result_expired_no: '未过期（按 CT notAfter）',
	tool_check_ssl_certificate_expiration_result_source: '来源',
	tool_check_ssl_certificate_expiration_result_row_count: '返回的 CT 行数',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'CT 日志可能有延迟——不是实时 TLS 握手对端证书。签发/续期后日期可能滞后。',
	tool_check_ssl_certificate_expiration_result_none: '（无）',
	tool_check_ssl_certificate_expiration_how_title: '怎么用',
	tool_check_ssl_certificate_expiration_how_body:
		'本页回答一件事：该主机名在证书透明度里最新匹配证书何时过期？不是实时 SSL 握手审计。',
	tool_check_ssl_certificate_expiration_how_item_1: '输入主机名（不必带路径）。',
	tool_check_ssl_certificate_expiration_how_item_2: '点击「检查」；Worker 向 crt.sh 查询匹配证书。',
	tool_check_ssl_certificate_expiration_how_item_3: '查看最新匹配的 notBefore、notAfter、颁发者与剩余天数。',
	tool_check_ssl_certificate_expiration_how_item_4: '把日期当作 CT 公布值——时间敏感时请再做本机实时握手确认。',
	tool_check_ssl_certificate_expiration_formula_title: 'CT 查询规则（非实时 TLS）',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers 无法从 fetch 读取对端证书。我们改用 crt.sh 上的公开证书透明度数据。',
	tool_check_ssl_certificate_expiration_formula_item_1: '用主机名查询 crt.sh 并解析 JSON 证书列表。',
	tool_check_ssl_certificate_expiration_formula_item_2: '按 notBefore 降序，取最新一行作为主结果。',
	tool_check_ssl_certificate_expiration_formula_item_3:
		'展示 notBefore、notAfter、颁发者、剩余天数，以及相对当前时间的过期标记。',
	tool_check_ssl_certificate_expiration_formula_item_4: 'CT 可能滞后于线上签发/续期——切勿当作握手结论。',
	tool_check_ssl_certificate_expiration_formula_item_5: '私网或屏蔽主机名会被拒绝。不是完整链审计或 CA 下单工具。',
	tool_check_ssl_certificate_expiration_example_title: '示例',
	tool_check_ssl_certificate_expiration_example:
		'示例输入 example.com。Worker 查询 crt.sh，选取最新匹配证书，展示 notBefore、notAfter、颁发者、剩余天数与过期标记，并附 CT 延迟说明。',
	tool_check_ssl_certificate_expiration_usecases_title: '适用场景',
	tool_check_ssl_certificate_expiration_usecase_1: '续期前做 SSL 证书到期检查：看最新 CT 叶子还剩多少天。',
	tool_check_ssl_certificate_expiration_usecase_2: 'CDN 切换后核对 SSL 有效期：确认 CT 是否出现新的 notAfter。',
	tool_check_ssl_certificate_expiration_usecase_3: '只需过期日、不做完整链审计时，快速盘点多个厂商域名。',
	tool_check_ssl_certificate_expiration_faq_q1: '这是实时 SSL 握手吗？',
	tool_check_ssl_certificate_expiration_faq_a1:
		'不是。Workers 无法从 fetch 读对端证书；我们查询证书透明度（crt.sh）。',
	tool_check_ssl_certificate_expiration_faq_q2: '日期为什么可能落后？',
	tool_check_ssl_certificate_expiration_faq_a2:
		'CT 日志可能滞后于签发或续期。时间敏感时请用本机实时握手工具再确认。',
	tool_check_ssl_certificate_expiration_faq_q3: '会检查完整证书链吗？',
	tool_check_ssl_certificate_expiration_faq_a3:
		'重点是最新匹配证书的过期时间。完整链检查是次要需求，不是本页 H1。',
	tool_check_ssl_certificate_expiration_faq_q4: '标题是「SSL 证书检查」吗？',
	tool_check_ssl_certificate_expiration_faq_a4:
		'不是。H1 是「检查 SSL 证书过期时间」。更宽的「SSL 证书检查」头词有意不作为唯一标题。',
	tool_check_ssl_certificate_expiration_faq_q5: '私网 IP 主机名呢？',
	tool_check_ssl_certificate_expiration_faq_a5:
		'私网或屏蔽主机会被拒绝。私网地址段可参考站内 private CIDR 工具。',
	tool_check_ssl_certificate_expiration_references: 'crt.sh；Certificate Transparency。',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default zh;
