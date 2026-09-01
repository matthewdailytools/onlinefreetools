/**
 * i18n tool shard (curl-to-fetch / ja).
 * H1: curlをfetchに変換 — ブラウザ内でcURLをJavaScript fetchに。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語文案。 */
const ja: SiteLangDict = {
	tool_curl_to_fetch_article:
		'APIドキュメントやターミナルの cURL を貼り付け、JavaScript の fetch スニペットを取得 — メソッド、ヘッダー、JSON 本文、Basic 認証、-G に対応。解析はブラウザ内、サーバーにアップロードしません。',
	tool_curl_to_fetch_clear: 'クリア',
	tool_curl_to_fetch_convert: '変換',
	tool_curl_to_fetch_copy: 'コピー',
	tool_curl_to_fetch_copy_done: 'コピーしました',
	tool_curl_to_fetch_copy_empty: 'コピーする内容がありません — 先に cURL を変換してください。',
	tool_curl_to_fetch_desc:
		'ブラウザで cURL を fetch に — 端末内で処理、サーバーにアップロードしません。',
	tool_curl_to_fetch_description:
		'cURL を貼り付けて JavaScript fetch を生成 — メソッド、ヘッダー、JSON、Basic 認証（-u）、-G に対応。手順：貼り付け→変換→コピー。POST JSON のサンプルは初回表示時に fetch コードを表示。コマンドは端末内に留まり、サーバーにアップロードされません。',
	tool_curl_to_fetch_error_empty: 'cURL コマンドを貼り付けてください。',
	tool_curl_to_fetch_error_no_url: 'URL が見つかりません。https://… または --url を追加してください。',
	tool_curl_to_fetch_error_parse: 'この cURL を解析できません。引用符と行継続を確認してください。',
	tool_curl_to_fetch_error_unclosed_quote: '引用符が閉じていません — 修正して再試行してください。',
	tool_curl_to_fetch_example: '入力: curl -X POST … → 出力: method・headers・body 付き fetch。',
	tool_curl_to_fetch_example_title: '例',
	tool_curl_to_fetch_faq_a1: 'いいえ。解析はこのタブ内のみで、サーバーへ POST しません。',
	tool_curl_to_fetch_faq_a2: 'URL、-X、-H、-d、-u、-G、引用符、行末 \\ に対応。未知のフラグは警告付きでスキップ。',
	tool_curl_to_fetch_faq_a3: '-G は --data を URL クエリに移し、body にしません。',
	tool_curl_to_fetch_faq_a4: '-u user:pass → Authorization Basic（base64）。',
	tool_curl_to_fetch_faq_a5: 'このページはブラウザ fetch 向け。axios や Python は手動で書き換えてください。',
	tool_curl_to_fetch_faq_q1: 'cURL はアップロードされますか？',
	tool_curl_to_fetch_faq_q2: 'どの curl フラグに対応？',
	tool_curl_to_fetch_faq_q3: '-G の扱いは？',
	tool_curl_to_fetch_faq_q4: '-u はどう処理？',
	tool_curl_to_fetch_faq_q5: 'axios や Python は？',
	tool_curl_to_fetch_how_body: 'ドキュメントの cURL をコピー — よく使うフラグをローカル解析し fetch を表示。',
	tool_curl_to_fetch_how_item_1: 'cURL 全文を貼り付け（\\ による改行も可）。',
	tool_curl_to_fetch_how_item_2: 'fetch または async/await を選び「変換」。',
	tool_curl_to_fetch_how_item_3: '生成された method・headers・body を確認。',
	tool_curl_to_fetch_how_item_4: 'プロジェクトにコピー — 編集後は再変換。',
	tool_curl_to_fetch_how_title: '使い方',
	tool_curl_to_fetch_input_label: 'cURL コマンド',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.example.com/…',
	tool_curl_to_fetch_large_warn: '大きなコマンド（>50 KB）— 解析が遅くなる場合があります。',
	tool_curl_to_fetch_load_sample: 'サンプルを読み込む',
	tool_curl_to_fetch_output_label: 'JavaScript fetch 出力',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: '出力形式',
	tool_curl_to_fetch_rules_body: 'curl フラグと fetch オプションの対応、および手動修正が必要な点。',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST；-d のみは -G 以外 POST。',
	tool_curl_to_fetch_rules_item_2: '各 -H は headers へ。Content-Type は維持。',
	tool_curl_to_fetch_rules_item_3: '-d は body；-G は URL クエリへ。',
	tool_curl_to_fetch_rules_item_4: 'Cookie・証明書・プロキシはブラウザ fetch では再現不可。',
	tool_curl_to_fetch_rules_title: '想定ルール',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: '変換完了 — 下の fetch を確認してください。',
	tool_curl_to_fetch_title: 'curlをfetchに変換',
	tool_curl_to_fetch_usecase_1: 'OpenAPI の curl 例 — 貼ってフロントの fetch を素早く作成。',
	tool_curl_to_fetch_usecase_2: 'Bearer デバッグ — Authorization ヘッダーを保ったまま JS へ。',
	tool_curl_to_fetch_usecase_3: 'シェルスクリプトから fetch へ移行するときの curl 変換。',
	tool_curl_to_fetch_usecases_title: '向いている場面',
	tool_curl_to_fetch_warn_unknown_flags: '未対応フラグをスキップ: {flags}',
};

export default ja;
