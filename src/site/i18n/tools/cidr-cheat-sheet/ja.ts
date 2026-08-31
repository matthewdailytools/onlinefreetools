/**
 * i18n tool shard (cidr-cheat-sheet / ja).
 * 当地：CIDR 早見表 / チートシート / CIDR とは。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'CIDR 早見表 — クリックでマスクとホスト数',
	tool_cidr_cheat_sheet_desc:
		'CIDR 早見表：/8–/32 を押すとマスク・ワイルドカード・ホスト数。CIDR チャートと同じ表。端末内で、サーバーへ送りません。',
	tool_cidr_cheat_sheet_description:
		'CIDR 早見表（チートシート）：/8 から /32 を選ぶとサブネットマスク、ワイルドカード、使用可能ホスト数が分かります。例：/24 → 255.255.255.0、使用可能ホスト 254。CompTIA 向けの列と /31 /32 の注記付き。CIDR チャートや CIDR 記法表と同じ役割です。特定ブロックの展開は CIDR を IP 範囲へ。表示はお使いの端末内で、サーバーにはアップロードしません。',
	tool_cidr_cheat_sheet_article:
		'クリックできる IPv4 プレフィックス表です。計算機で任意ホストを展開するページではありません。',
	tool_cidr_cheat_sheet_sample: 'サンプル読込',
	tool_cidr_cheat_sheet_clear: 'ハイライト解除',
	tool_cidr_cheat_sheet_jump: '表示',
	tool_cidr_cheat_sheet_jump_label: 'プレフィックスへ',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: '選択中',
	tool_cidr_cheat_sheet_col_prefix: 'プレフィックス',
	tool_cidr_cheat_sheet_col_mask: 'サブネットマスク',
	tool_cidr_cheat_sheet_col_wild: 'ワイルドカード',
	tool_cidr_cheat_sheet_col_hosts: '使用可能ホスト',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Network+ 系の表でよく出る',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'アドレス総数',
	tool_cidr_cheat_sheet_note_31: '/31：両方のアドレスが使えます（RFC 3021 の対向）。',
	tool_cidr_cheat_sheet_note_32: '/32：単一ホスト。ネットワークはそのアドレス自身です。',
	tool_cidr_cheat_sheet_err_jump: '8 から 32 の整数プレフィックスを入力してください。',
	tool_cidr_cheat_sheet_how_title: '使い方',
	tool_cidr_cheat_sheet_how_body:
		'CIDR 早見表は、スラッシュ長とマスク・ホスト数を対照します。PDF を開かず行をクリックします。',
	tool_cidr_cheat_sheet_how_item_1: '作業はプレフィックスの対照であり、任意 IP の展開ではないと確認する。',
	tool_cidr_cheat_sheet_how_item_2: '/8–/32 の行をクリックするか、数値を入れて表示（サンプルは /24）。',
	tool_cidr_cheat_sheet_how_item_3: 'マスク、ワイルドカード、ホスト数、CompTIA 列を読む。',
	tool_cidr_cheat_sheet_how_item_4: '/31 と /32 は注記を読む（「マイナス 2」は使わない）。',
	tool_cidr_cheat_sheet_how_item_5: '192.168.1.0/24 を網段とブロードキャストに展開するなら CIDR を IP 範囲へ。',
	tool_cidr_cheat_sheet_formula_title: '規則',
	tool_cidr_cheat_sheet_formula_body:
		'マスク = 2^32 − 2^(32−n)。ワイルドカードはマスクのビット反転。ホスト：/32 → 1、/31 → 2（RFC 3021）、それ以外 2^(32−n) − 2。',
	tool_cidr_cheat_sheet_formula_item_1: 'IPv4 の /8 から /32 のみ。',
	tool_cidr_cheat_sheet_formula_item_2: 'CompTIA 列は試験で出やすい長さの目安で、公式シラバスではない。',
	tool_cidr_cheat_sheet_formula_item_3: '/31 /32 の注記が古典的な「2 を引く」規則に優先する。',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR は Classless Inter-Domain Routing。獣医用 CIDR は別語。',
	tool_cidr_cheat_sheet_example_title: '例',
	tool_cidr_cheat_sheet_example:
		'/24 を選択。出力：マスク 255.255.255.0、ワイルドカード 0.0.0.255、使用可能 254、総数 256。CompTIA 列あり。初期サンプルと同じ。',
	tool_cidr_cheat_sheet_usecases_title: 'こんなときに',
	tool_cidr_cheat_sheet_usecase_1: 'Network+ 系の表問題の前に /24 /25 /26 を確認する。',
	tool_cidr_cheat_sheet_usecase_2: 'ACL を書く前に /28 の使用可能ホスト数を確かめる。',
	tool_cidr_cheat_sheet_usecase_3: '「スラッシュ 24」が 256 アドレス・マスク 255.255.255.0 だと説明する。',
	tool_cidr_cheat_sheet_faq_q1: 'CIDR とは何ですか？',
	tool_cidr_cheat_sheet_faq_a1:
		'Classless Inter-Domain Routing です。スラッシュ（例 /24）がプレフィックス長です。本ページは早見表であり、ネットワーク入門ではありません。',
	tool_cidr_cheat_sheet_faq_q2: 'CompTIA 系でよく出るプレフィックスは？',
	tool_cidr_cheat_sheet_faq_a2:
		'/8、/16、/24 と近くの /25–/28、/30 がよくマークされます。CompTIA 列はその行です。公式アウトラインではありません。',
	tool_cidr_cheat_sheet_faq_q3: '/31 と /32 のホスト数は？',
	tool_cidr_cheat_sheet_faq_a3:
		'/32 は 1 ホスト。/31 は RFC 3021 で両方使えます。それ以外はネットワークとブロードキャストで 2 を引きます。',
	tool_cidr_cheat_sheet_faq_q4: '家畜用の CIDR 製剤ですか？',
	tool_cidr_cheat_sheet_faq_a4: 'いいえ。畜産の CIDR は別物です。ここはネットワークのスラッシュとマスクだけです。',
	tool_cidr_cheat_sheet_faq_q5: '192.168.1.37/24 をここで展開できますか？',
	tool_cidr_cheat_sheet_faq_a5: 'できません。CIDR を IP 範囲へを使ってください。本表は /n → マスクとホスト数だけです。',
	tool_cidr_cheat_sheet_faq_q6: '参照は送信されますか？',
	tool_cidr_cheat_sheet_faq_a6: 'いいえ。クリックはお使いの端末のこのタブ内に留まり、サーバーへはアップロードしません。',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — クラスレスなドメイン間ルーティング',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — IPv4 対向リンクでの 31 ビットプレフィックス',
	tool_cidr_cheat_sheet_disclaimer:
		'数値は一般的な IPv4 CIDR 計算（/31 は RFC 3021）に従います。CompTIA 列は学習用の印であり、公式シラバスではありません。',
};

export default ja;
