/**
 * i18n ツール分片（chatgpt-export-to-markdown / ja）。
 * 検索向け H1：ChatGPTエクスポートをMarkdownに。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'このページで ChatGPT のエクスポートを Markdown にします。JSON を貼るかドロップし、読みやすい往復を得て、必要なら JSON や CSV に切り替えます。Claude のエクスポートも同じキャンバスです。ファイルは端末に留まり、サーバーへは送りません。',
	tool_chatgpt_export_to_markdown_choose_file: 'ファイルを選ぶ',
	tool_chatgpt_export_to_markdown_clear: 'クリア',
	tool_chatgpt_export_to_markdown_convert: '変換',
	tool_chatgpt_export_to_markdown_copy: 'コピー',
	tool_chatgpt_export_to_markdown_desc:
		'ChatGPTエクスポートをMarkdownに（JSON/CSV チップ）。端末内に留まり、サーバーへは送りません。',
	tool_chatgpt_export_to_markdown_description:
		'ChatGPTエクスポートをMarkdownに：エクスポート JSON をドロップまたは貼り付け、ユーザー/アシスタントの往復をマップして Markdown を保存します。例：開いた時点でサンプル会話は Markdown です。JSON と CSV は出力チップです。Claude の chat_messages も同じページで検出します。ファイルは端末に留まり、サーバーへは送りません。トークン集計でもクラウド同期でもありません。',
	tool_chatgpt_export_to_markdown_download: '保存',
	tool_chatgpt_export_to_markdown_drop_hint: 'conversations JSON をドロップするか下に貼り付け。解析はこのタブ内です。',
	tool_chatgpt_export_to_markdown_empty: '先にエクスポートを貼るかファイルを選んでください。',
	tool_chatgpt_export_to_markdown_err_none: '往復が見つかりません。mapping / messages / chat_messages があるか確認してください。',
	tool_chatgpt_export_to_markdown_err_parse: 'その JSON は読めません。有効な ChatGPT か Claude のエクスポートを貼ってください。',
	tool_chatgpt_export_to_markdown_example:
		'サンプル読込は 2 往復の ChatGPT mapping JSON を入れ、User / Assistant 見出しの Markdown にし、コピーと保存を有効にします。',
	tool_chatgpt_export_to_markdown_example_title: '例',
	tool_chatgpt_export_to_markdown_faq_a1: 'いいえ。エクスポートはこのタブで読みます。OpenAI・Anthropic・当方サーバーへは送りません。',
	tool_chatgpt_export_to_markdown_faq_a2: '主経路は mapping ツリー付きの ChatGPT データエクスポートです。平坦な role/content と Claude chat_messages も受けます。',
	tool_chatgpt_export_to_markdown_faq_a3: 'はい。Claude 風 chat_messages（sender + text）はこのページに吸収します。別 URL はありません。',
	tool_chatgpt_export_to_markdown_faq_a4: '空の system と本文のない tool 殻は飛ばします。添付や画像はファイルとしては復元しません。',
	tool_chatgpt_export_to_markdown_faq_a5: 'トークン集計は別仕事（延期）。この H1 はエクスポート → Markdown です。',
	tool_chatgpt_export_to_markdown_faq_q1: 'チャットはアップロードされますか？',
	tool_chatgpt_export_to_markdown_faq_q2: 'どのエクスポート形が動きますか？',
	tool_chatgpt_export_to_markdown_faq_q3: 'Claude のエクスポートは使えますか？',
	tool_chatgpt_export_to_markdown_faq_q4: 'どのフィールドが落ちますか？',
	tool_chatgpt_export_to_markdown_faq_q5: 'トークン集計ツールですか？',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: '出力形式',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'チャットをエクスポートし、JSON を貼るかドロップし、Markdown に変換してコピーまたは保存。JSON と CSV は同じ仕事のチップです。',
	tool_chatgpt_export_to_markdown_how_item_1: 'ChatGPT データエクスポート（または Claude JSON）を用意 — 仕事は ChatGPTエクスポートをMarkdownに です。',
	tool_chatgpt_export_to_markdown_how_item_2: 'ファイルをドロップするか JSON を枠に貼る。',
	tool_chatgpt_export_to_markdown_how_item_3: 'JSON / CSV チップが要るとき以外は Markdown のまま。',
	tool_chatgpt_export_to_markdown_how_item_4: 'コピーまたは保存。サンプルは初回描画ですでに動いています。',
	tool_chatgpt_export_to_markdown_how_title: '使い方',
	tool_chatgpt_export_to_markdown_input_label: 'エクスポート JSON',
	tool_chatgpt_export_to_markdown_input_ph: 'conversations JSON をここに貼る…',
	tool_chatgpt_export_to_markdown_load_sample: 'サンプル読込',
	tool_chatgpt_export_to_markdown_output_label: '結果',
	tool_chatgpt_export_to_markdown_role_assistant: 'アシスタント',
	tool_chatgpt_export_to_markdown_role_system: 'システム',
	tool_chatgpt_export_to_markdown_role_tool: 'ツール',
	tool_chatgpt_export_to_markdown_role_user: 'ユーザー',
	tool_chatgpt_export_to_markdown_rules_body:
		'エクスポート変換にはフィールド対応表、既定の Markdown、明確なプライバシーが必要です。ベンダーごとに第二の変換 URL は作りません。',
	tool_chatgpt_export_to_markdown_rules_item_1: '既定出力は ## ユーザー / ## アシスタント節の Markdown と、任意の # タイトルです。',
	tool_chatgpt_export_to_markdown_rules_item_2: 'ChatGPT mapping、平坦配列、Claude chat_messages を一ページで解析します。',
	tool_chatgpt_export_to_markdown_rules_item_3: 'JSON / CSV チップは同じ往復を出します。H1 は変わりません。',
	tool_chatgpt_export_to_markdown_rules_item_4: 'ベンダー形式は変わります。失敗したら生 JSON を貼り、FAQ を確認してください。',
	tool_chatgpt_export_to_markdown_rules_title: '想定してよい規則',
	tool_chatgpt_export_to_markdown_status_copied: 'クリップボードにコピーしました。',
	tool_chatgpt_export_to_markdown_status_done: '完了 — {n} 往復（{source}）。',
	tool_chatgpt_export_to_markdown_status_working: 'エクスポートを解析中…',
	tool_chatgpt_export_to_markdown_title: 'ChatGPTエクスポートをMarkdownに',
	tool_chatgpt_export_to_markdown_usecase_1: 'スレッドを消す前に、今日の ChatGPT エクスポートを Markdown で保管する。',
	tool_chatgpt_export_to_markdown_usecase_2: '表が要るときは CSV に切り替え、role/content 列を取る。',
	tool_chatgpt_export_to_markdown_usecase_3: 'Claude の chat_messages JSON も同じページへ — 第二のツールは不要。',
	tool_chatgpt_export_to_markdown_usecases_title: '向いている場面',
};

export default ja;
