/**
 * i18n tool shard (ip-range-to-cidr / ja)。
 * 当地主词「IPレンジをCIDRに」；集約・変換は desc/FAQ。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'IPレンジをCIDRに — 開始～終了アドレスをプレフィックス一覧へ',
	tool_ip_range_to_cidr_desc:
		'IPレンジをCIDRに変換。例: 192.168.1.0–192.168.1.255 → 192.168.1.0/24。端末内で処理し、サーバーにアップロードしません。',
	tool_ip_range_to_cidr_description:
		'IP範囲をCIDRへ：開始と終了（または複数行）を貼ると、区間を覆うプレフィックスが出ます。例: 192.168.1.0–192.168.1.255 → 192.168.1.0/24。境界が揃わないと複数本になります。複数行はCIDR集約向き。アドレスは端末内に留まり、サーバーへアップロードしません。',
	tool_ip_range_to_cidr_article:
		'ACLの「開始–終了」表記を、ルールに貼れるCIDR一覧にまとめます。非整列なら複数プレフィックスになります。IPv4とIPv6は同じバッチに混ぜません。',
	tool_ip_range_to_cidr_convert: '変換',
	tool_ip_range_to_cidr_sample: 'サンプル読込',
	tool_ip_range_to_cidr_clear: 'クリア',
	tool_ip_range_to_cidr_copy: 'CIDRをコピー',
	tool_ip_range_to_cidr_copy_done: 'コピーしました',
	tool_ip_range_to_cidr_input_label: 'IPレンジ（1行に1つ）',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'CIDRプレフィックス',
	tool_ip_range_to_cidr_meta_label: '概要',
	tool_ip_range_to_cidr_meta_tpl: '{n} 件 · {family}',
	tool_ip_range_to_cidr_swap_hint: '開始の方が大きかったため、開始と終了を入れ替えて変換しました。',
	tool_ip_range_to_cidr_err_empty: 'IPレンジを1行以上入力してください（開始 - 終了）。',
	tool_ip_range_to_cidr_err_parse: 'その行をIPまたは開始–終了として解釈できません。',
	tool_ip_range_to_cidr_err_mixed: '同じ変換でIPv4とIPv6を混ぜないでください。',
	tool_ip_range_to_cidr_err_limit: 'CIDR件数が上限を超えました。範囲を狭めて再試行してください。',
	tool_ip_range_to_cidr_how_title: '使い方',
	tool_ip_range_to_cidr_how_body:
		'閉区間の全アドレスを覆うCIDR一覧が欲しいときに使います。ファイアウォールやセキュリティグループへそのまま貼れます。',
	tool_ip_range_to_cidr_how_item_1: '非整列なら複数本になることを先に理解する（単一の「だいたいの」マスクではない）。',
	tool_ip_range_to_cidr_how_item_2: '「A - B」で貼る。集約したいなら1行に1レンジ。',
	tool_ip_range_to_cidr_how_item_3: '変換して一覧を確認し、まとめてコピーする。',
	tool_ip_range_to_cidr_how_item_4: '逆順なら入替ヒントが出る。混族ならファミリーを揃えて再実行。',
	tool_ip_range_to_cidr_formula_title: '計算の考え方',
	tool_ip_range_to_cidr_formula_body:
		'現在位置から終端まで進み、整列可能かつ残りに収まる最大の2の累乗ブロックを毎回切り出します。',
	tool_ip_range_to_cidr_formula_item_1: '端点を整数化（32/128ビット）。同一ファミリーのみ。',
	tool_ip_range_to_cidr_formula_item_2: '開始>終了なら入れ替え、ヒントを出す。',
	tool_ip_range_to_cidr_formula_item_3: 'ホストビット = 末尾ゼロ ∩ 残り長の2の累乗上限。',
	tool_ip_range_to_cidr_formula_item_4: 'network/prefix を出し、2^ホストビット進めて繰り返す。',
	tool_ip_range_to_cidr_example_title: '例',
	tool_ip_range_to_cidr_example:
		'入力: 192.168.1.0 - 192.168.1.255。出力: 192.168.1.0/24。非整列の 10.0.0.10 - 10.0.0.20 は 10.0.0.10/31、10.0.0.12/30、10.0.0.16/30、10.0.0.20/32。',
	tool_ip_range_to_cidr_usecases_title: 'こんなときに',
	tool_ip_range_to_cidr_usecase_1: 'ベンダーACLの開始–終了を、CIDRしか受けないFWルールへ落とす。',
	tool_ip_range_to_cidr_usecase_2: 'クラウドのセキュリティグループ入力を、手書きの大きすぎる網を避けて埋める。',
	tool_ip_range_to_cidr_usecase_3: 'チケットの複数私網を行ごとにCIDR集約し、自動化変数へ渡す。',
	tool_ip_range_to_cidr_faq_q1: 'アドレスはアップロードされますか？',
	tool_ip_range_to_cidr_faq_a1: 'いいえ。このブラウザタブ内の端末に留まり、サーバーへアップロードしません。',
	tool_ip_range_to_cidr_faq_q2: 'なぜ複数のCIDRになるのですか？',
	tool_ip_range_to_cidr_faq_a2: '境界が揃わないと単一プレフィックスでは正確に覆えません。整列した複数本で閉区間を覆います。',
	tool_ip_range_to_cidr_faq_q3: '大きい方を先に貼っても大丈夫？',
	tool_ip_range_to_cidr_faq_a3: '自動で入れ替え、短いヒントを出してから変換します。',
	tool_ip_range_to_cidr_faq_q4: 'IPv4とIPv6を混ぜられますか？',
	tool_ip_range_to_cidr_faq_a4: 'できません。バッチは1ファミリーだけ。別々に変換してください。',
	tool_ip_range_to_cidr_faq_q5: '複数行の集約はどう動きますか？',
	tool_ip_range_to_cidr_faq_a5: '各行を個別に変換し、順に並べます。行間の隙間は無理にまとめません。',
	tool_ip_range_to_cidr_faq_q6: '「CIDR→IPレンジ」はどこ？',
	tool_ip_range_to_cidr_faq_a6: '本ページはレンジ→プレフィックスのみ。CIDRを展開する逆方向は別ツールです。',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — CIDR',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6アドレス体系',
	tool_ip_range_to_cidr_disclaimer:
		'出力は入力した閉区間を覆うプレフィックスです。ルーティングプロトコルのシミュレータではありません。重要なACL変更は自環境で確認してください。',
};

export default ja;
