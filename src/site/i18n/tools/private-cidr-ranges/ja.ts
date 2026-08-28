/**
 * i18n tool shard (private-cidr-ranges / ja).
 * 当地检索：プライベート CIDR / プライベート IP レンジ。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'プライベート CIDR 範囲 — IP/プレフィックスが私有または特殊用途か確認',
	tool_private_cidr_ranges_desc:
		'プライベート CIDR：RFC1918・CGNAT・ULA を確認。例：100.64.1.10 → 共有アドレス空間。',
	tool_private_cidr_ranges_description:
		'プライベート CIDR 範囲：IP または CIDR を貼り付けて RFC1918 のプライベート IP レンジ、CGNAT（100.64/10）、IPv6 ULA、ドキュメント用ブロックを判定します（例：100.64.1.10 → 共有アドレス空間）。参照表をクリックでき、Tailscale が CGNAT を使う点も触れます。判定は端末内で行い、サーバーにアップロードしません。',
	tool_private_cidr_ranges_article:
		'アドレスまたは CIDR を入力し、組み込みの私有・特殊用途プレフィックスと照合します。表の行をクリックするとそのプレフィックスを読み込みます。ホスト一覧の展開はしません。',
	tool_private_cidr_ranges_check: '確認',
	tool_private_cidr_ranges_sample: 'サンプル読込',
	tool_private_cidr_ranges_clear: 'クリア',
	tool_private_cidr_ranges_copy: '要約をコピー',
	tool_private_cidr_ranges_copy_done: 'コピー済み',
	tool_private_cidr_ranges_input_label: 'IP アドレスまたは CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 または 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'すべて',
	tool_private_cidr_ranges_filter_v4: 'IPv4 表',
	tool_private_cidr_ranges_filter_v6: 'IPv6 表',
	tool_private_cidr_ranges_result_label: '一致',
	tool_private_cidr_ranges_table_title: '参照表（行をクリック）',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: '名称',
	tool_private_cidr_ranges_col_family: 'ファミリ',
	tool_private_cidr_ranges_col_spec: '規格',
	tool_private_cidr_ranges_no_match:
		'組み込みの私有/特殊用途リストにありません（グローバルユニキャスト等の可能性）。',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale などはこの CGNAT 空間（100.64.0.0/10）をよく使います。',
	tool_private_cidr_ranges_err_empty: 'IPv4/IPv6 アドレスまたは CIDR を入力してください。',
	tool_private_cidr_ranges_err_parse: 'IP または CIDR として解析できません。',
	tool_private_cidr_ranges_name_rfc1918_10: 'RFC1918 プライベート',
	tool_private_cidr_ranges_name_rfc1918_172: 'RFC1918 プライベート',
	tool_private_cidr_ranges_name_rfc1918_192: 'RFC1918 プライベート',
	tool_private_cidr_ranges_name_cgnat: 'CGNAT 共有アドレス空間',
	tool_private_cidr_ranges_name_loopback: 'ループバック',
	tool_private_cidr_ranges_name_linklocal_v4: 'リンクローカル',
	tool_private_cidr_ranges_name_doc_testnet1: 'ドキュメント（TEST-NET-1）',
	tool_private_cidr_ranges_name_doc_testnet2: 'ドキュメント（TEST-NET-2）',
	tool_private_cidr_ranges_name_doc_testnet3: 'ドキュメント（TEST-NET-3）',
	tool_private_cidr_ranges_name_ula: 'IPv6 ULA',
	tool_private_cidr_ranges_name_linklocal_v6: 'IPv6 リンクローカル',
	tool_private_cidr_ranges_name_doc_v6: 'IPv6 ドキュメント',
	tool_private_cidr_ranges_note_rfc1918_10: '私有用途 — 10.0.0.0/8（RFC 1918）。',
	tool_private_cidr_ranges_note_rfc1918_172: '私有用途 — 172.16.0.0/12（RFC 1918）。',
	tool_private_cidr_ranges_note_rfc1918_192: '私有用途 — 192.168.0.0/16（RFC 1918）。',
	tool_private_cidr_ranges_note_cgnat: 'キャリアグレード NAT 用共有空間（RFC 6598）。RFC1918 ではありません。',
	tool_private_cidr_ranges_note_loopback: 'ホストループバック — 127.0.0.0/8。',
	tool_private_cidr_ranges_note_linklocal_v4: 'リンクローカル APIPA — 169.254.0.0/16。',
	tool_private_cidr_ranges_note_doc_testnet1: 'ドキュメント専用 — 本番利用禁止（RFC 5737）。',
	tool_private_cidr_ranges_note_doc_testnet2: 'ドキュメント専用 — 本番利用禁止（RFC 5737）。',
	tool_private_cidr_ranges_note_doc_testnet3: 'ドキュメント専用 — 本番利用禁止（RFC 5737）。',
	tool_private_cidr_ranges_note_ula: 'ユニークローカル — fc00::/7（RFC 4193）。',
	tool_private_cidr_ranges_note_linklocal_v6: 'IPv6 リンクローカル — fe80::/10。',
	tool_private_cidr_ranges_note_doc_v6: 'ドキュメント用プレフィックス — 2001:db8::/32。',
	tool_private_cidr_ranges_how_title: '使い方',
	tool_private_cidr_ranges_how_body:
		'ホスト数を数えるのではなく、私有/特殊用途 CIDR に入るかを確認します。貼り付けて結果を見るか、表をクリックしてください。',
	tool_private_cidr_ranges_how_item_1: '目的は分類であり、ホスト一覧の展開ではありません。',
	tool_private_cidr_ranges_how_item_2: 'IPv4/IPv6 アドレスまたは CIDR を貼り付けます（例 100.64.1.10）。',
	tool_private_cidr_ranges_how_item_3: 'カテゴリ・CIDR・RFC 注記を読みます（CGNAT 時は Tailscale 注記も）。',
	tool_private_cidr_ranges_how_item_4: '必要なら参照表の行をクリックしてそのプレフィックスを確認します。',
	tool_private_cidr_ranges_how_item_5: '一致なしの場合、この私有/特殊リスト外として扱います。',
	tool_private_cidr_ranges_formula_title: 'ルール',
	tool_private_cidr_ranges_formula_body:
		'入力を解析し、組み込み表との包含関係を調べます。より具体的な（長い）プレフィックスを先に示します。',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 は 32 ビット、IPv6 は 128 ビット。ファミリは混ぜません。',
	tool_private_cidr_ranges_formula_item_2: '単独アドレス：それを含むすべての表項目。',
	tool_private_cidr_ranges_formula_item_3: 'CIDR 入力：そのプレフィックスを完全に含む表項目。',
	tool_private_cidr_ranges_formula_item_4: 'プレフィックス長の降順で並べます。',
	tool_private_cidr_ranges_example_title: '例',
	tool_private_cidr_ranges_example:
		'入力：100.64.1.10。出力：CGNAT 共有空間 100.64.0.0/10（RFC 6598）と Tailscale 注記。10.0.0.5 は RFC1918 10.0.0.0/8。',
	tool_private_cidr_ranges_usecases_title: 'こんなときに',
	tool_private_cidr_ranges_usecase_1: 'VPC/ラボ用ブロックが本物の RFC1918 か確認してから穴を開ける。',
	tool_private_cidr_ranges_usecase_2: '100.x を見て CGNAT/Tailscale と RFC1918 を切り分ける。',
	tool_private_cidr_ranges_usecase_3: 'IPv6 ULA や 2001:db8 を本番扱いする前に確認する。',
	tool_private_cidr_ranges_faq_q1: 'RFC1918 の 3 つのプライベート CIDR は？',
	tool_private_cidr_ranges_faq_a1: '10.0.0.0/8、172.16.0.0/12、192.168.0.0/16 です。',
	tool_private_cidr_ranges_faq_q2: '100.64.0.0/10 はプライベート？Tailscale との関係は？',
	tool_private_cidr_ranges_faq_a2:
		'CGNAT 共有空間（RFC 6598）で RFC1918 ではありません。Tailscale 等がよく使いますが、本ページはラベルのみでコンソールではありません。',
	tool_private_cidr_ranges_faq_q3: 'IPv6 ULA（fc00::/7）とは？',
	tool_private_cidr_ranges_faq_a3: 'ローカル網向けのユニークローカルアドレスで、公衆インターネットのグローバルユニキャストではありません。',
	tool_private_cidr_ranges_faq_q4: 'ドキュメント用プレフィックスを出す理由は？',
	tool_private_cidr_ranges_faq_a4: '192.0.2.0/24 や 2001:db8::/32 は例示用です。本番に使うと期待が壊れます。',
	tool_private_cidr_ranges_faq_q5: 'ホスト展開やアップロードはしますか？',
	tool_private_cidr_ranges_faq_a5:
		'ホスト一覧は出しません。判定は端末内で完結し、サーバーへアップロードしません。',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — プライベートインターネットアドレス',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — 共有アドレス空間',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — IPv6 ユニークローカル',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — ドキュメント用 IPv4 ブロック',
	tool_private_cidr_ranges_disclaimer:
		'一致結果は公開 RFC に基づきます。ルーティングやファイアウォール方針の助言ではありません。重要変更は自環境で検証してください。',
};

export default ja;
