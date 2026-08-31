/**
 * i18n tool shard (cidr-cheat-sheet / zh)。
 * 当地主词「CIDR 速查表」；chart / CompTIA / 是什么 落 desc/FAQ。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'CIDR 速查表 — 点选前缀看掩码和主机数',
	tool_cidr_cheat_sheet_desc:
		'CIDR 速查表：点 /8–/32 看掩码、通配符和主机数。就是常说的 CIDR 对照表。浏览器内查看，不上传服务器。',
	tool_cidr_cheat_sheet_description:
		'CIDR 速查表：点选 /8 到 /32 任意前缀，立刻看到子网掩码、通配符和可用主机数。示例：/24 → 255.255.255.0、254 台可用主机。带 CompTIA 常考列，以及 /31 /32 脚注。和 CIDR 对照表、CIDR 记法表是同一张表。若要展开某个具体网段，请用 CIDR 转 IP 范围。查询留在本机，不上传服务器。',
	tool_cidr_cheat_sheet_article:
		'可点的 IPv4 前缀表：掩码、通配符、主机数。这是速查，不是把任意主机地址展开成广播。',
	tool_cidr_cheat_sheet_sample: '加载示例',
	tool_cidr_cheat_sheet_clear: '清除高亮',
	tool_cidr_cheat_sheet_jump: '跳转',
	tool_cidr_cheat_sheet_jump_label: '跳到前缀',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: '当前前缀',
	tool_cidr_cheat_sheet_col_prefix: '前缀',
	tool_cidr_cheat_sheet_col_mask: '子网掩码',
	tool_cidr_cheat_sheet_col_wild: '通配符',
	tool_cidr_cheat_sheet_col_hosts: '可用主机',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Network+ 类图表常见',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: '地址总数',
	tool_cidr_cheat_sheet_note_31: '/31：两个地址都可用（RFC 3021 点对点），没有闲置的网络/广播对。',
	tool_cidr_cheat_sheet_note_32: '/32：单主机。网络地址就是它本身，没有传统广播。',
	tool_cidr_cheat_sheet_err_jump: '请输入 8 到 32 的整数前缀。',
	tool_cidr_cheat_sheet_how_title: '怎么用',
	tool_cidr_cheat_sheet_how_body:
		'CIDR 速查表（也就是 CIDR 对照表）用来对照斜杠长度、点分掩码和主机数。点一行即可，不必翻 PDF。',
	tool_cidr_cheat_sheet_how_item_1: '先确认任务是查前缀对应的掩码和主机数，不是展开某个具体 IP。',
	tool_cidr_cheat_sheet_how_item_2: '在表中点 /8 到 /32 的一行，或输入前缀后点跳转（加载示例会选中 /24）。',
	tool_cidr_cheat_sheet_how_item_3: '阅读掩码、通配符、可用主机，以及是否常出现在 CompTIA 类图表。',
	tool_cidr_cheat_sheet_how_item_4: '/31 和 /32 请看脚注：不能套「减 2」的经典算法。',
	tool_cidr_cheat_sheet_how_item_5: '若要把 192.168.1.0/24 展开成网段和广播，请用 CIDR 转 IP 范围。',
	tool_cidr_cheat_sheet_formula_title: '规则',
	tool_cidr_cheat_sheet_formula_body:
		'掩码位数 = 2^32 − 2^(32−n)。通配符是掩码按位取反。可用主机：/32 → 1；/31 → 2（RFC 3021）；其余 2^(32−n) − 2。总地址 = 2^(32−n)。',
	tool_cidr_cheat_sheet_formula_item_1: '本表只覆盖 IPv4 的 /8 到 /32。',
	tool_cidr_cheat_sheet_formula_item_2: 'CompTIA 列只标记常考前缀，不是官方大纲。',
	tool_cidr_cheat_sheet_formula_item_3: '/31 /32 脚注覆盖「减网络/广播」的经典算法。',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR 全称 Classless Inter-Domain Routing。兽医 CIDR 是另一个词。',
	tool_cidr_cheat_sheet_example_title: '示例',
	tool_cidr_cheat_sheet_example:
		'选中 /24。输出：掩码 255.255.255.0，通配符 0.0.0.255，可用主机 254，总地址 256。CompTIA 列有标记。与默认示例相同。',
	tool_cidr_cheat_sheet_usecases_title: '什么时候用得上',
	tool_cidr_cheat_sheet_usecase_1: '考 Network+ 类图表前扫一眼 /24 /25 /26，不必打开静态 PDF。',
	tool_cidr_cheat_sheet_usecase_2: '写 ACL 前确认 /28 防火墙对象到底有多少可用主机。',
	tool_cidr_cheat_sheet_usecase_3: '向同事解释「斜杠 24」就是 256 个地址、掩码 255.255.255.0。',
	tool_cidr_cheat_sheet_faq_q1: 'CIDR 是什么意思？',
	tool_cidr_cheat_sheet_faq_a1:
		'Classless Inter-Domain Routing（无类域间路由）。斜杠（如 /24）是前缀长度。本页是这些长度的速查表，不是网络入门课。',
	tool_cidr_cheat_sheet_faq_q2: 'CompTIA 类图表要记哪些前缀？',
	tool_cidr_cheat_sheet_faq_a2:
		'常见 Network+ 表会标 /8、/16、/24 以及附近的 /25–/28、/30。CompTIA 列标出这些行。这不是 CompTIA 官方大纲。',
	tool_cidr_cheat_sheet_faq_q3: '/31 和 /32 的主机数怎么算？',
	tool_cidr_cheat_sheet_faq_a3:
		'/32 是一台主机。/31 按 RFC 3021：点对点两条都可用。其余长度才减 2 给网络和广播。',
	tool_cidr_cheat_sheet_faq_q4: '这是给牛用的兽医 CIDR 吗？',
	tool_cidr_cheat_sheet_faq_a4: '不是。畜牧业里 CIDR 可能指激素栓。本页只做网络斜杠前缀和掩码速查。',
	tool_cidr_cheat_sheet_faq_q5: '能在这里把 192.168.1.37/24 展开成广播地址吗？',
	tool_cidr_cheat_sheet_faq_a5: '不能。请用 CIDR 转 IP 范围。本表只查 /n → 掩码和主机数。',
	tool_cidr_cheat_sheet_faq_q6: '查询会上传吗？',
	tool_cidr_cheat_sheet_faq_a6: '不会。点击留在你这台设备的浏览器标签页里，不会上传到服务器。',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — 无类域间路由',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — IPv4 点对点链路使用 31 位前缀',
	tool_cidr_cheat_sheet_disclaimer:
		'数字遵循常见 IPv4 CIDR 算术（含 RFC 3021 的 /31）。CompTIA 列只是备考提示，不是官方大纲。这不是路由建议。',
};

export default zh;
