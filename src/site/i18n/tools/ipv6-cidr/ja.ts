/**
 * i18n tool shard (ipv6-cidr / ja).
 * 当地检索：IPv6 CIDR 計算 / プレフィックス。H1 は計算機だが「接続テスト」にしない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_ipv6_cidr_title: 'IPv6 CIDR 計算機 — プレフィックスをアドレス範囲に展開'
	tool_ipv6_cidr_desc:
		'IPv6 CIDR 計算：2001:db8:1::/64 を貼るとネットワーク、末尾、圧縮表記が出ます。端末内で計算し、サーバーへ送りません。',
	tool_ipv6_cidr_description:
		'IPv6 CIDR 計算機にプレフィックス（例 2001:db8:1::/64）を貼ると、ネットワークアドレス、末尾アドレス、アドレス数、RFC 5952 の圧縮/展開表記が分かります。4 の倍数でないプレフィックスは nibble 境界の警告を出します。/64 の LAN、/127 の対向、/128 の単一ホストに対応。計算はお使いの端末内で、サーバーにはアップロードしません。',
	tool_ipv6_cidr_article:
		'手元の IPv6 CIDR を、コピーできるネットワーク範囲と正規の圧縮表記にします。nibble 非整列は警告のみです。',
	tool_ipv6_cidr_calculate: '計算',
	tool_ipv6_cidr_sample: 'サンプル読込',
	tool_ipv6_cidr_clear: 'クリア',
	tool_ipv6_cidr_copy: '結果をコピー',
	tool_ipv6_cidr_copy_done: 'コピーしました',
	tool_ipv6_cidr_input_label: 'IPv6 CIDR',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: '結果',
	tool_ipv6_cidr_lbl_network: 'ネットワーク（圧縮）',
	tool_ipv6_cidr_lbl_network_exp: 'ネットワーク（展開）',
	tool_ipv6_cidr_lbl_last: '末尾アドレス（圧縮）',
	tool_ipv6_cidr_lbl_last_exp: '末尾アドレス（展開）',
	tool_ipv6_cidr_lbl_prefix: 'プレフィックス長',
	tool_ipv6_cidr_lbl_count: 'アドレス数',
	tool_ipv6_cidr_lbl_nibble: 'ニブル整列',
	tool_ipv6_cidr_nibble_yes: 'はい — プレフィックス長は 4 の倍数です。',
	tool_ipv6_cidr_nibble_no:
		'いいえ — 4 ビット（ニブル）境界にありません。逆引き（ip6.arpa）や多くの割り当ては /4、/8…/64、/68 刻みを想定します。',
	tool_ipv6_cidr_note_64: '/64 は一般的な LAN プレフィックスです（SLAAC と多くのホストサブネット）。',
	tool_ipv6_cidr_note_127: '/127 は対向リンク用（RFC 6164）で、アドレスは 2 個だけです。',
	tool_ipv6_cidr_note_128: '/128 は単一ホストです。',
	tool_ipv6_cidr_err_empty: '2001:db8:1::/64 のような IPv6 CIDR を入力してください。',
	tool_ipv6_cidr_err_parse: 'IPv6 アドレスまたは CIDR として解釈できません。',
	tool_ipv6_cidr_err_prefix: 'プレフィックス長は 0 から 128 の整数である必要があります。',
	tool_ipv6_cidr_err_ipv4: 'このページは IPv6 専用です。IPv4 は「CIDR を IP 範囲へ」ツールを使ってください。',
	tool_ipv6_cidr_how_title: '使い方',
	tool_ipv6_cidr_how_body:
		'IPv6 CIDR 計算機は、プレフィックスをネットワーク範囲と圧縮表記に変えます。IPv6 が通るかの接続テストではありません。',
	tool_ipv6_cidr_how_item_1: 'まず「IPv6 の網段を計算する」作業だと確認する（接続テストではない）。',
	tool_ipv6_cidr_how_item_2: '2001:db8:1::/64 のような IPv6 CIDR を貼る（またはサンプル読込）。',
	tool_ipv6_cidr_how_item_3: '圧縮・展開のネットワークと末尾、アドレス数を読み、必要なものをコピーする。',
	tool_ipv6_cidr_how_item_4: 'プレフィックスが 4 の倍数でなければ、ニブル警告を読む。',
	tool_ipv6_cidr_how_item_5: 'IPv4 は CIDR を IP 範囲へ。開始–終了の集約は IP 範囲を CIDR へ。',
	tool_ipv6_cidr_formula_title: '計算式',
	tool_ipv6_cidr_formula_body:
		'IPv6 テキストを解析（「::」は一度だけ）。マスク = 2^128 − 2^(128−プレフィックス)。ネットワーク = アドレス AND マスク。末尾 = ネットワーク OR NOT マスク。RFC 5952 で圧縮。個数は 2^(128−プレフィックス)。',
	tool_ipv6_cidr_formula_item_1: 'IPv4 リテラルと 0–128 外のプレフィックスは拒否する。',
	tool_ipv6_cidr_formula_item_2: '128 ビットの AND/OR でネットワークと末尾を求める。',
	tool_ipv6_cidr_formula_item_3: '特別な長さ：/128 → 1、/127 → 2（RFC 6164）、/64 → 2^64（典型的な LAN）。',
	tool_ipv6_cidr_formula_item_4: 'ニブル整列はプレフィックス mod 4 = 0。それ以外も計算し、警告だけ出す。',
	tool_ipv6_cidr_example_title: '例',
	tool_ipv6_cidr_example:
		'入力: 2001:db8:1::/64。出力: ネットワーク 2001:db8:1::（展開 2001:0db8:0001:0000:0000:0000:0000:0000）、末尾 2001:db8:1:0:ffff:ffff:ffff:ffff、個数 2^64、ニブル整列あり。',
	tool_ipv6_cidr_usecases_title: 'こんなときに',
	tool_ipv6_cidr_usecase_1: 'オフィス LAN を /64 で切り、圧縮したネットワークをルータ設定へ貼る。',
	tool_ipv6_cidr_usecase_2: '対向リンクが /127（RFC 6164）になっているか確認する。',
	tool_ipv6_cidr_usecase_3: '資料用の 2001:db8::/32 を RFC 5952 の圧縮にそろえてから画面を撮る。',
	tool_ipv6_cidr_faq_q1: '「ニブル非整列」とは？',
	tool_ipv6_cidr_faq_a1:
		'IPv6 逆引きや多くの割り当ては 4 ビット単位です。/67 でも範囲は正しいですが、ip6.arpa や一部 ISP はニブル刻みを想定します。本ツールは範囲を出し、警告を添えます。',
	tool_ipv6_cidr_faq_q2: '/64・/127・/128 の違いは？',
	tool_ipv6_cidr_faq_a2:
		'/64 は一般的な LAN。/127 は対向の 2 アドレス（RFC 6164）。/128 は単一ホスト。該当する長さを貼ると結果に注記が出ます。',
	tool_ipv6_cidr_faq_q3: 'IPv6 CIDR の表記確認と同じですか？',
	tool_ipv6_cidr_faq_a3:
		'「1 本のプレフィックスを網段と正規表記にする」作業としては同じです。IPv4 のマスク早見表はこのページにはありません。',
	tool_ipv6_cidr_faq_q4: 'IPv4 の CIDR はどこで展開しますか？',
	tool_ipv6_cidr_faq_a4: '関連の「CIDR を IP 範囲へ」を使います。このページは IPv4 リテラルを拒否します。',
	tool_ipv6_cidr_faq_q5: 'IPv6 が通るか調べられますか？',
	tool_ipv6_cidr_faq_a5: 'いいえ。接続テストは別の仕事です。ここではプレフィックス計算だけです。',
	tool_ipv6_cidr_faq_q6: 'アドレスは送信されますか？',
	tool_ipv6_cidr_faq_a6: 'いいえ。お使いの端末のこのタブ内に留まり、サーバーへはアップロードしません。',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6 アドレスアーキテクチャ',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — IPv6 テキスト表現の推奨',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — ルータ間リンクでの 127 ビットプレフィックス',
	tool_ipv6_cidr_disclaimer:
		'結果は一般的な IPv6 CIDR 計算（RFC 4291、5952、6164）に従います。経路設計の助言ではありません。重要な変更は自環境で確認してください。',
};

export default ja;
