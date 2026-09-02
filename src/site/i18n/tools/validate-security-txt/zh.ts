/**
 * i18n tool shard (validate-security-txt / zh).
 * 场景：输入域名 → 拉取 security.txt → 按 RFC 9116 检查必填字段。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_validate_security_txt_home_title: '验证 security.txt',
	tool_validate_security_txt_home_desc:
		'检查站点是否发布含 Contact、Expires 等字段的合法 security.txt。',
	tool_validate_security_txt_desc:
		'检查站点是否发布含 Contact、Expires 等字段的合法 security.txt。',
	tool_validate_security_txt_title: '验证 security.txt',
	tool_validate_security_txt_description:
		'输入域名或网址做 security.txt 检查：拉取 /.well-known/security.txt（回退 /security.txt），解析 Contact 与 Expires，标出缺失必填项。示例：google.com。',
	tool_validate_security_txt_url_label: '域名或网址',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ 或 example.com',
	tool_validate_security_txt_check: '验证',
	tool_validate_security_txt_sample: '加载示例',
	tool_validate_security_txt_clear: '清空',
	tool_validate_security_txt_running: '正在拉取 security.txt…',
	tool_validate_security_txt_url_error: '请输入域名或 http(s) 网址。',
	tool_validate_security_txt_error_prefix: '错误：',
	tool_validate_security_txt_fetch_failed:
		'无法拉取 security.txt。主机可能不可达、屏蔽爬虫或拒绝请求。',
	tool_validate_security_txt_privacy_note:
		'网址与域名会发到我们的 Worker 以便拉取 security.txt，不会作为业务库长期保存。',
	tool_validate_security_txt_result_found_yes: '已找到 security.txt',
	tool_validate_security_txt_result_found_no: '未找到 security.txt',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: '缺失必填',
	tool_validate_security_txt_result_missing_none: '必填字段齐全',
	tool_validate_security_txt_result_expired_yes: 'Expires 已过期',
	tool_validate_security_txt_result_expired_no: 'Expires 仍有效（或未能解析）',
	tool_validate_security_txt_result_file_url: '实际拉取地址',
	tool_validate_security_txt_result_http_status: 'HTTP 状态',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'security.txt 预览',
	tool_validate_security_txt_result_none: '（无）',
	tool_validate_security_txt_how_title: '怎么用',
	tool_validate_security_txt_how_body:
		'本页回答一件事：站点有没有发布可用的 security.txt，尤其是 Contact，以及 Expires 是否还能用。',
	tool_validate_security_txt_how_item_1: '输入域名或 HTTPS 网址。',
	tool_validate_security_txt_how_item_2:
		'点击「验证」；Worker 先拉 /.well-known/security.txt，再回退 /security.txt。',
	tool_validate_security_txt_how_item_3:
		'查看解析出的 Contact、Expires、Preferred-Languages、Canonical 与原文预览。',
	tool_validate_security_txt_how_item_4: '发布自己的 security.txt 前，先补齐标出的缺失项。',
	tool_validate_security_txt_formula_title: '我们按 RFC 9116 检查的规则',
	tool_validate_security_txt_formula_body:
		'对齐 RFC 9116（安全漏洞披露辅助文件格式）与 securitytxt.org 常见实践。',
	tool_validate_security_txt_formula_item_1:
		'发现顺序：先 https://主机/.well-known/security.txt，再 /security.txt。',
	tool_validate_security_txt_formula_item_2: 'Contact 为必填；列出全部 Contact，缺失则标出。',
	tool_validate_security_txt_formula_item_3: 'Expires 强烈建议提供；缺失或已过期会标为缺口。',
	tool_validate_security_txt_formula_item_4:
		'若有 Preferred-Languages、Canonical 会一并展示，但不强制作为通过条件。',
	tool_validate_security_txt_formula_item_5: '仅做拉取与解析——不是漏洞邮箱，也不是渗透测试。',
	tool_validate_security_txt_example_title: '示例',
	tool_validate_security_txt_example:
		'示例输入 https://www.google.com/。Worker 依次尝试 well-known 与根路径 security.txt，并展示是否找到、Contact、Expires、缺失项、是否过期与原文预览。',
	tool_validate_security_txt_usecases_title: '适用场景',
	tool_validate_security_txt_usecase_1: '上线前做 security.txt 检查：确认 well-known 可访问且含 Contact。',
	tool_validate_security_txt_usecase_2: '改完 Expires 后做校验：确认日期能解析且尚未过期。',
	tool_validate_security_txt_usecase_3: '联系厂商前：先确认对方域名是否发布了 discovery 文件。',
	tool_validate_security_txt_faq_q1: 'security.txt 应该放在哪？',
	tool_validate_security_txt_faq_a1:
		'优先 https://主机/.well-known/security.txt；同主机 /security.txt 是文档中的回退路径。',
	tool_validate_security_txt_faq_q2: '哪些字段是必填？',
	tool_validate_security_txt_faq_a2:
		'至少要有 Contact。按 RFC 9116 实践，Expires 也强烈建议有——缺失或过期都会标出。',
	tool_validate_security_txt_faq_q3: '标题会写成 RFC 9116 吗？',
	tool_validate_security_txt_faq_a3:
		'不会。H1 是「验证 security.txt」。RFC 写在规则与参考文献里——本页是检查器，不是标准原文阅读器。',
	tool_validate_security_txt_faq_q4: '会保存漏洞报告吗？',
	tool_validate_security_txt_faq_a4: '不会。只经 Worker 拉取并解析已发布文件，不是披露邮箱。',
	tool_validate_security_txt_faq_q5: '网址会存档吗？',
	tool_validate_security_txt_faq_a5:
		'网址/域名必须到达 Worker 才能拉取文件；我们不会把检查当作长期业务库保存。这是边缘工具，不是「不上传」。',
	tool_validate_security_txt_references: 'RFC 9116；securitytxt.org。',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default zh;
