/**
 * i18n tool shard (spf-dkim-dmarc-checker / zh).
 * 检索：SPF DKIM DMARC 检查；DMARC 记录检查；查询 DMARC；SPF 查询。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'SPF DKIM DMARC 检查器',
	tool_spf_dkim_dmarc_checker_desc:
		'一次检查域名的 SPF、DKIM、DMARC DNS，并用白话说明 ~all/-all 与 p= 策略。',
	tool_spf_dkim_dmarc_checker_description:
		'输入发信域名与可选 DKIM 选择器（默认 google）。经 DoH 查询 SPF、_dmarc、selector._domainkey，解释 ~all/-all 与 DMARC p=。示例：google.com。 本页展示过程、步骤和示例。',
	tool_spf_dkim_dmarc_checker_domain_label: '域名',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'DKIM 选择器',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: '检查',
	tool_spf_dkim_dmarc_checker_sample: '加载示例',
	tool_spf_dkim_dmarc_checker_clear: '清空',
	tool_spf_dkim_dmarc_checker_running: '正在通过 DNS 查询 SPF、DKIM、DMARC…',
	tool_spf_dkim_dmarc_checker_domain_error: '请输入有效域名（主机名，或粘贴完整网址）。',
	tool_spf_dkim_dmarc_checker_error_prefix: '错误：',
	tool_spf_dkim_dmarc_checker_fetch_failed: 'DNS 查询失败。解析器可能不可用，或域名被拒绝。',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'域名与 DKIM 选择器会发到 Worker，用于 DNS-over-HTTPS 查询。我们不会把它们当作业务库长期保存。',
	tool_spf_dkim_dmarc_checker_result_found_yes: '已找到',
	tool_spf_dkim_dmarc_checker_result_found_no: '未找到',
	tool_spf_dkim_dmarc_checker_result_record: '记录',
	tool_spf_dkim_dmarc_checker_result_explain: '说明',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'all 限定符',
	tool_spf_dkim_dmarc_checker_result_policy: 'DMARC 策略 (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: '选择器',
	tool_spf_dkim_dmarc_checker_result_pubkey: '公钥 (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: '有',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: '缺失或为空',
	tool_spf_dkim_dmarc_checker_how_title: '怎么用',
	tool_spf_dkim_dmarc_checker_how_body:
		'送达率排查通常要同时看 SPF、DKIM、DMARC。填入发信域名，必要时改 DKIM 选择器，再读每条 TXT 与策略摘要。',
	tool_spf_dkim_dmarc_checker_how_item_1: '输入发信域名与可选 DKIM 选择器（默认 google）。',
	tool_spf_dkim_dmarc_checker_how_item_2: '点击「检查」；Worker 经 DoH 查询 SPF、_dmarc 与 selector._domainkey 的 TXT。',
	tool_spf_dkim_dmarc_checker_how_item_3: '分别阅读记录，以及 SPF 机制（~all / -all）与 DMARC p= 的白话说明。',
	tool_spf_dkim_dmarc_checker_how_item_4: '在 DNS 服务商处修好记录后再查——本页不会改你的区域。',
	tool_spf_dkim_dmarc_checker_formula_title: '我们查什么',
	tool_spf_dkim_dmarc_checker_formula_body:
		'查询遵循 RFC 7208（SPF）、RFC 6376（DKIM）、RFC 7489（DMARC）的公开 TXT 形态。只做策略摘要，不发信、不探测邮箱是否存在。',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF：域名上以 v=spf1 开头的 TXT；展示末尾 all 限定符（~all 软失败，-all 硬失败）。',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC：_dmarc.域名 上以 v=DMARC1 开头的 TXT；突出 p=（none / quarantine / reject）与可选 pct。',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM：{selector}._domainkey.域名 的 TXT；检查是否有非空公钥 (p=)。',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'缺失记录会如实标出。DoH 失败会报错——这不是 ESP 的实机签名测试。',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'不做 SMTP RCPT 探测，也不改区域。「邮箱地址是否存在」不在本工具范围。',
	tool_spf_dkim_dmarc_checker_example_title: '示例',
	tool_spf_dkim_dmarc_checker_example:
		'示例输入 google.com，DKIM 选择器 google。Worker 查询 SPF、_dmarc.google.com 与 google._domainkey.google.com，并为每项显示找到/记录/说明。',
	tool_spf_dkim_dmarc_checker_usecases_title: '适合什么时候用',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'上线前：ESP DNS 发布后，确认发信域名的 SPF、DKIM、DMARC TXT 都已生效。',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'做 DMARC 记录检查：用白话读懂 p=none 与 quarantine/reject，而不是只贴原文。',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'邮件进垃圾箱时做 SPF 查询：看是 ~all 还是 -all，再把 DKIM 选择器与 ESP 对齐。',
	tool_spf_dkim_dmarc_checker_faq_q1: '为什么一页同时查 SPF、DKIM、DMARC？',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'收件方通常三者一起评估。只做 DMARC 记录检查，可能漏掉坏掉的 SPF 或错误的 DKIM 选择器。',
	tool_spf_dkim_dmarc_checker_faq_q2: '默认 DKIM 选择器是什么？',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google——Google Workspace 常见。若 ESP 发布的是其他选择器（如 s1、k1），请自行改掉。',
	tool_spf_dkim_dmarc_checker_faq_q3: '这是邮箱地址验证工具吗？',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'不是。本页只查域名认证 DNS（SPF 查询、DKIM 公钥、DMARC 策略），不验证邮箱是否存在。',
	tool_spf_dkim_dmarc_checker_faq_q4: '结果是不是只有 TXT 原文？',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'不是。除记录外还有说明行：SPF 的 all 机制与 DMARC 的 p= 策略，不是纯 dump。',
	tool_spf_dkim_dmarc_checker_faq_q5: '域名会被保存吗？',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'域名与选择器必须到达 Worker 才能做 DNS-over-HTTPS。我们不会把查询当作长期业务库保存。这是边缘 DNS 工具，不是「不上传」。',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF；RFC 6376 DKIM；RFC 7489 DMARC。',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default zh;
