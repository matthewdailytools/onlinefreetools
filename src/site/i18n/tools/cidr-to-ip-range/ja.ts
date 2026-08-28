/**
 * i18n tool shard (cidr-to-ip-range / ja).
 * 当地检索：CIDR から IP 範囲；CIDR 計算／表記は desc・FAQ に吸収。H1 を「CIDR 計算機」のみにしない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語ツール文案（検索向け独立リライト）。プレースホルダ `{n}` / `{mask}` / `{limit}` は実行時置換用。 */
const ja: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR から IP 範囲 — プレフィックスを利用可能アドレスに展開',
	tool_cidr_to_ip_range_desc:
		'CIDR から IP 範囲：192.168.1.0/24 を貼るとネットワーク・ブロードキャスト・利用可能ホストが分かります。端末内で処理し、サーバーにアップロードしません。',
	tool_cidr_to_ip_range_description:
		'CIDR から IP 範囲：IPv4 の CIDR（例 192.168.1.0/24）を貼り付けて、ネットワークアドレス、ブロードキャスト、利用可能ホストの先頭／末尾、ホスト数、サブネットマスクを表示します。サブネットマスク↔プレフィックス変換、包含／重複チェック、行数上限つきの CIDR 展開にも対応。いわゆる CIDR 計算・CIDR 表記の確認と同じ用途です。処理は端末内のブラウザで完結し、サーバーにアップロードしません。',
	tool_cidr_to_ip_range_article:
		'IPv4 CIDR を入力すると、ネットワーク／ブロードキャスト／利用可能範囲／ホスト数／マスク／ワイルドカードを一覧表示します。必要ならマスク変換、包含・重複判定、上限つき展開に切り替えられます。',
	tool_cidr_to_ip_range_calculate: '計算',
	tool_cidr_to_ip_range_sample: 'サンプル読込',
	tool_cidr_to_ip_range_clear: 'クリア',
	tool_cidr_to_ip_range_copy: '結果をコピー',
	tool_cidr_to_ip_range_copy_done: 'コピー済み',
	tool_cidr_to_ip_range_mode_label: 'モード',
	tool_cidr_to_ip_range_mode_range: 'プレフィックス → 範囲',
	tool_cidr_to_ip_range_mode_mask: 'マスク ↔ プレフィックス',
	tool_cidr_to_ip_range_mode_check: '包含／重複',
	tool_cidr_to_ip_range_mode_expand: '展開（上限あり）',
	tool_cidr_to_ip_range_input_label: 'IPv4 CIDR',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'ドット付きサブネットマスク',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP または第2の CIDR',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 または 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: '結果',
	tool_cidr_to_ip_range_lbl_network: 'ネットワーク',
	tool_cidr_to_ip_range_lbl_broadcast: 'ブロードキャスト',
	tool_cidr_to_ip_range_lbl_first: '先頭の利用可能ホスト',
	tool_cidr_to_ip_range_lbl_last: '末尾の利用可能ホスト',
	tool_cidr_to_ip_range_lbl_hosts: 'ホスト数',
	tool_cidr_to_ip_range_lbl_mask: 'サブネットマスク',
	tool_cidr_to_ip_range_lbl_wildcard: 'ワイルドカードマスク',
	tool_cidr_to_ip_range_lbl_prefix: 'プレフィックス長',
	tool_cidr_to_ip_range_lbl_normalized: '正規化した CIDR',
	tool_cidr_to_ip_range_norm_hint: 'ホストビットが立っていたため、ネットワークアドレスで正規化して表示しています。',
	tool_cidr_to_ip_range_expand_limit:
		'安全上限（{limit} 行）に達したため展開を止めました。より長いプレフィックスにするか、要約フィールドだけを使ってください。',
	tool_cidr_to_ip_range_check_in: 'このアドレスは CIDR の内側です。',
	tool_cidr_to_ip_range_check_out: 'このアドレスは CIDR の外側です。',
	tool_cidr_to_ip_range_overlap_equal: '両ブロックは同一です。',
	tool_cidr_to_ip_range_overlap_contain: '第1の CIDR が第2を含みます。',
	tool_cidr_to_ip_range_overlap_inside: '第1の CIDR は第2の内側です。',
	tool_cidr_to_ip_range_overlap_overlap: 'ブロックは部分的に重なります。',
	tool_cidr_to_ip_range_overlap_disjoint: 'ブロックは交わりません。',
	tool_cidr_to_ip_range_mask_to_prefix: 'マスクから得たプレフィックス：/{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'プレフィックスから得たマスク：{mask}',
	tool_cidr_to_ip_range_err_empty: '192.168.1.0/24 のような IPv4 CIDR を入力してください。',
	tool_cidr_to_ip_range_err_parse: 'IPv4 アドレスまたは CIDR として解析できません。',
	tool_cidr_to_ip_range_err_prefix: 'プレフィックス長は 0〜32 の整数である必要があります。',
	tool_cidr_to_ip_range_err_ipv6: '本ページは IPv4 専用です。IPv6 プレフィックスは専用の IPv6 CIDR ツールを使ってください。',
	tool_cidr_to_ip_range_err_mask: '連続した IPv4 サブネットマスクとして無効なドット表記です。',
	tool_cidr_to_ip_range_err_second: '包含／重複判定には、第2の IPv4 アドレスまたは CIDR が必要です。',
	tool_cidr_to_ip_range_how_title: '使い方',
	tool_cidr_to_ip_range_how_body:
		'CIDR プレフィックスを IP 範囲に展開し、ネットワーク・ブロードキャスト・利用可能ホスト・マスクを確認します。CIDR 表記の計算と同じ作業です。',
	tool_cidr_to_ip_range_how_item_1:
		'まず「CIDR → IP 範囲」であること（ネットワーク／ブロードキャスト／利用可能ホスト）を意識する——CIDR 計算と同じ目的です。',
	tool_cidr_to_ip_range_how_item_2: '192.168.1.0/24 のような IPv4 CIDR を貼るか、「サンプル読込」を押す。',
	tool_cidr_to_ip_range_how_item_3:
		'ネットワーク、ブロードキャスト、利用可能先頭／末尾、ホスト数、サブネットマスクを読み取り、必要な値をコピーする。',
	tool_cidr_to_ip_range_how_item_4: '必要ならマスク変換、包含／重複、上限つき展開に切り替える。',
	tool_cidr_to_ip_range_how_item_5:
		'開始〜終了アドレスから CIDR へ戻す場合は関連の「IP 範囲 → CIDR」ツールを、IPv6 は専用ページを使います。',
	tool_cidr_to_ip_range_formula_title: '計算の考え方',
	tool_cidr_to_ip_range_formula_body:
		'マスク = 2^32 − 2^(32−prefix)。ネットワーク = アドレス AND マスク。ブロードキャスト = ネットワーク OR NOT マスク。利用可能ホストは /31（RFC 3021）と /32 を特別扱いします。',
	tool_cidr_to_ip_range_formula_item_1: 'a.b.c.d/nn を解析し、IPv6 および 0〜32 外のプレフィックスを拒否する。',
	tool_cidr_to_ip_range_formula_item_2: 'マスクビットを求め、ビット演算でネットワークとブロードキャストを出す。',
	tool_cidr_to_ip_range_formula_item_3:
		'利用可能：/32 は単一ホスト；/31 は両端とも利用可（RFC 3021）；それ以外は先頭=ネットワーク+1、末尾=ブロードキャスト−1。',
	tool_cidr_to_ip_range_formula_item_4: '入力にホストビットがあればネットワークアドレスへ正規化し、短いヒントを出す。',
	tool_cidr_to_ip_range_example_title: '例',
	tool_cidr_to_ip_range_example:
		'入力：192.168.1.0/24。出力：ネットワーク 192.168.1.0、ブロードキャスト 192.168.1.255、利用可能 192.168.1.1–192.168.1.254、マスク 255.255.255.0、ホスト数 254。入力 192.168.1.37/24 は 192.168.1.0/24 に正規化されます。',
	tool_cidr_to_ip_range_usecases_title: 'こんなときに',
	tool_cidr_to_ip_range_usecase_1:
		'セキュリティグループの CIDR を、まだ範囲指定の ACL に書く前に先頭／末尾アドレスへ展開する。',
	tool_cidr_to_ip_range_usecase_2:
		'/24 からドット付きマスクと利用可能ホスト数だけ同僚へ伝え、表計算を開かずに済ませる。',
	tool_cidr_to_ip_range_usecase_3:
		'Proxmox やブリッジ設計で、割り当て予定の CIDR のネットワーク／ブロードキャストを確認する。',
	tool_cidr_to_ip_range_faq_q1: 'アドレスはサーバーに送られますか？',
	tool_cidr_to_ip_range_faq_a1:
		'いいえ。アドレスはこのブラウザのタブ内（端末）に留まり、サーバーにアップロードされません。',
	tool_cidr_to_ip_range_faq_q2: '/31 と /32 の利用可能ホストはどう数えますか？',
	tool_cidr_to_ip_range_faq_a2:
		'/32 は単一ホスト（ネットワーク＝そのアドレス、古典的ブロードキャストなし）。/31 は RFC 3021 に従い両アドレスともポイントツーポイントで利用可能で、未使用のネットワーク／ブロードキャスト対はありません。',
	tool_cidr_to_ip_range_faq_q3: '192.168.1.37/24 を貼るとどうなりますか？',
	tool_cidr_to_ip_range_faq_a3:
		'192.168.1.0/24 に正規化し、ホストビットを無視した旨の短いヒントを出しつつ、そのブロックのネットワーク／ブロードキャスト／利用可能範囲を表示します。',
	tool_cidr_to_ip_range_faq_q4: 'CIDR 計算（CIDR 表記計算機）と同じですか？',
	tool_cidr_to_ip_range_faq_a4:
		'よくある用途——CIDR 表記からネットワーク／ブロードキャスト／利用可能ホストとマスクを出す——は同じです。ページタイトルは結果が分かりやすい「CIDR から IP 範囲」にしています。計算系の検索もこのツールに着地します。',
	tool_cidr_to_ip_range_faq_q5: '大きなブロックの全 IP を一覧できますか？',
	tool_cidr_to_ip_range_faq_a5:
		'「展開」モードを使います。安全上限（1024 行）で止め、/8 などでタブが固まるのを防ぎます。プレフィックスを狭めるか、要約フィールドだけを使ってください。',
	tool_cidr_to_ip_range_faq_q6: '開始〜終了から CIDR へ戻すには？',
	tool_cidr_to_ip_range_faq_a6:
		'逆方向は関連の「IP 範囲 → CIDR」ツールです。本ページはプレフィックスを範囲フィールド（と任意の上限つき一覧）へ展開するだけです。',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'結果は一般的な IPv4 CIDR 算術（/31 は RFC 3021）に従います。ルーティングやファイアウォール方針の助言ではありません。重要な変更は自環境で検証してください。',
};

export default ja;
