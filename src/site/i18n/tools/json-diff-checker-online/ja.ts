/**
 * i18n（json-diff-checker-online / ja）。
 * H1: JSONの差分をオンラインで確認。
 * 既定はキー順無視。YAML/XML は対象外。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'2つの JSON を貼り、パス単位の追加・削除・変更を並べます。既定ではキー順を無視します。貼り付けは端末内に留まり、サーバーにアップロードしません。YAML と XML はここでは解析しません。',
	tool_json_diff_checker_online_array_as_set: "配列の順序を無視（重複は数える）",
	tool_json_diff_checker_online_clear: 'クリア',
	tool_json_diff_checker_online_compare: '比較',
	tool_json_diff_checker_online_desc:
		'JSONの差分をオンラインで確認：パス単位で2つの JSON を比べ、既定でキー順を無視。貼り付けは端末内に留まります。',
	tool_json_diff_checker_online_description:
		'JSONの差分をオンラインで確認します。手順：2つの JSON を貼って解析し、オブジェクトのキー順を無視（既定オン）したうえで、パス単位の追加・削除・変更を出します。内容は端末内に留まり、サーバーにアップロードしません。例：{"b":1,"a":2} と {"a":2,"b":1} は一致し、price を変えると /price が出ます。YAML や XML の検査ではありません。',
	tool_json_diff_checker_online_empty: '左右に JSON を貼るか、サンプルを読み込んでください。',
	tool_json_diff_checker_online_err_bad_a: '左側は正しい JSON ではありません。',
	tool_json_diff_checker_online_err_bad_b: '右側は正しい JSON ではありません。',
	tool_json_diff_checker_online_example:
		'サンプル左は sku のあとに price、右は price を先に書き 9.5 を 10 に変えています。キー順無視オンなら /price だけが報告されます。初回表示ですでにそのパスが出ます。',
	tool_json_diff_checker_online_example_title: '例',
	tool_json_diff_checker_online_faq_a1:
		'いいえ。このタブで JSON.parse します。当社サーバーにはアップロードしません。',
	tool_json_diff_checker_online_faq_a2:
		'既定では {"a":1,"b":2} と {"b":2,"a":1} は同じオブジェクトです。書いた順が大事なら「オブジェクトのキー順を無視」をオフにしてください。',
	tool_json_diff_checker_online_faq_a3:
		"通常は配列を添字ごとに比較します。順序を無視すると正規化した要素を並べ替えますが、重複は残ります。結果の添字は並べ替え後の順序で、id によるオブジェクト照合はしません。",
	tool_json_diff_checker_online_faq_a4:
		"有効な JSON だけを解析します。YAML や XML の構文は受け付けないため、YAML は先に JSON へ変換するか、形式専用の比較ツールを使ってください。",
	tool_json_diff_checker_online_faq_q1: 'JSON はアップロードされますか？',
	tool_json_diff_checker_online_faq_q2: 'キーの並び順は差分になりますか？',
	tool_json_diff_checker_online_faq_q3: '配列はどう比べますか？',
	tool_json_diff_checker_online_faq_q4: 'JSON Diff Checker や YAML/XML 差分と同じですか？',
	tool_json_diff_checker_online_how_body:
		'2つの JSON を貼り、パスの変化を読みます。オフにしない限りキー順は無視します。',
	tool_json_diff_checker_online_how_item_1: '左に元の JSON を貼る。',
	tool_json_diff_checker_online_how_item_2: '右に改訂後の JSON を貼る。',
	tool_json_diff_checker_online_how_item_3: '書いたキー順が要るとき以外は、キー順無視をオンのままにする。',
	tool_json_diff_checker_online_how_item_4: "「比較」を押し、現在の設定で追加・削除・変更されたパスを一覧にします。",
	tool_json_diff_checker_online_how_title: '使い方',
	tool_json_diff_checker_online_ignore_keys: 'オブジェクトのキー順を無視',
	tool_json_diff_checker_online_label_a: '元の JSON',
	tool_json_diff_checker_online_label_b: '改訂後の JSON',
	tool_json_diff_checker_online_load_sample: 'サンプルを読み込む',
	tool_json_diff_checker_online_no_diff: '現在のオプションでは意味上の差はありません。',
	tool_json_diff_checker_online_op_added: '追加',
	tool_json_diff_checker_online_op_changed: '変更',
	tool_json_diff_checker_online_op_removed: '削除',
	tool_json_diff_checker_online_result_label: 'パスの差分',
	tool_json_diff_checker_online_rules_body:
		'JSON.parse のあと、キーを並べ替えてから比べると、書いた順だけの差は出ません。',
	tool_json_diff_checker_online_rules_item_1:
		'不正な JSON は左右別々に知らせます。重複キーは JSON.parse に従い（許すエンジンでは後勝ち）。',
	tool_json_diff_checker_online_rules_item_2:
		'キー順無視（既定オン）はパスを辿る前にオブジェクトのキーをソートします。',
	tool_json_diff_checker_online_rules_item_3:
		"配列順を無視すると正規化した要素を並べ替えますが重複は保持します。結果の添字は元の位置ではなく比較時の順序です。",
	tool_json_diff_checker_online_rules_item_4:
		'YAML と XML は解析しません。必要なら関連の YAML ↔ JSON ページで先に変換してください。',
	tool_json_diff_checker_online_rules_title: '比較の約束事',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '追加 {added}、削除 {removed}、変更 {changed}',
	tool_json_diff_checker_online_title: 'JSONの差分をオンラインで確認',
	tool_json_diff_checker_online_usecase_1: 'API サンプル：整形でキー順が入れ替わっても差にしたくない2つのレスポンス。',
	tool_json_diff_checker_online_usecase_2: '設定スナップショット：デプロイ間で本当に変わったパスだけ見る。',
	tool_json_diff_checker_online_usecase_3: 'モデル JSON：下流に渡す前に構造化出力を突き合わせる。',
	tool_json_diff_checker_online_usecases_title: 'こんなときに',
};

export default ja;
