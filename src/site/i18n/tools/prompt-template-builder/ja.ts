/**
 * i18n tool shard (prompt-template-builder / ja).
 * H1 local: Promptテンプレートビルダー.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_prompt_template_builder_article:
		'このページで下書き Prompt を Role / Task / Constraints / Output の再利用テンプレートに整理します。自由入力または各フィールドを埋め、Markdown か JSON をコピー。モデル API は呼びません。テキストは端末内に留まり、サーバーにアップロードされません。',
	tool_prompt_template_builder_build: 'テンプレート作成',
	tool_prompt_template_builder_clear: 'クリア',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'トーン、範囲、避けること…',
	tool_prompt_template_builder_copy: 'コピー',
	tool_prompt_template_builder_desc:
		'構造化 Prompt テンプレート（Markdown/JSON）— 端末内、サーバーにアップロードしない。',
	tool_prompt_template_builder_description:
		'Promptテンプレートビルダー：自由テキストと Role・Task・Constraints・Output を統合し、再利用可能なテンプレートにします。例：コードレビュー Agent のサンプルが初回表示で出ます。既定は Markdown チップ、JSON は {role,task,constraints,output}。解析はこのタブ内 — LLM でもクラウド Prompt ライブラリでもありません。テキストは端末内に留まり、サーバーにアップロードされません。',
	tool_prompt_template_builder_download: 'ダウンロード',
	tool_prompt_template_builder_empty: '自由入力またはいずれかのフィールドを入力してから作成してください。',
	tool_prompt_template_builder_example:
		'サンプル読込でコードレビュー Agent の四フィールドを入れ、## 見出し四つの Markdown を生成し、コピーとダウンロードを有効にします。',
	tool_prompt_template_builder_example_title: '例',
	tool_prompt_template_builder_faq_a1:
		'いいえ。テンプレートはこのブラウザタブ内で組み立てます。OpenAI・Anthropic・当社サーバーへは送信しません。',
	tool_prompt_template_builder_faq_a2:
		'いいえ。テキストをブロックに整形するだけで、モデル API は呼ばず、新しい文案も生成しません。',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown は会話エクスポートを読みやすいファイルにします。ここでは再利用可能な system prompt を構造化 — チャット保存後にテンプレート化する際に併用できます。',
	tool_prompt_template_builder_faq_a4:
		'はい。JSON チップで {role,task,constraints,output} を出力。必要なら JSON Schema バリデータと組み合わせてください。',
	tool_prompt_template_builder_faq_a5:
		'自由入力で Role: / Task: / Constraints: / Output: で始まる行はセクションに分割。明示フィールドが優先されます。',
	tool_prompt_template_builder_faq_q1: 'Prompt はアップロードされますか？',
	tool_prompt_template_builder_faq_q2: 'LLM を呼び出しますか？',
	tool_prompt_template_builder_faq_q3: 'ChatGPT エクスポート→Markdown との違いは？',
	tool_prompt_template_builder_faq_q4: 'JSON 出力はできますか？',
	tool_prompt_template_builder_faq_q5: '自由入力の解析はどう動きますか？',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: '出力形式',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: '自由 Prompt（任意）',
	tool_prompt_template_builder_free_ph: '下書き、または Role: … Task: … の行',
	tool_prompt_template_builder_how_body:
		'下書きを書き、必要なら Role / Task / Constraints / Output に分け、テンプレートを作成してコピーまたはダウンロード。Markdown と JSON は同じ作業のチップです。',
	tool_prompt_template_builder_how_item_1:
		'自由欄に下書き、または Role・Task・Constraints・Output を入力 — 目的は構造化 prompt テンプレート。',
	tool_prompt_template_builder_how_item_2: 'テンプレート作成をクリック（初回表示でサンプル済み）。',
	tool_prompt_template_builder_how_item_3: 'コードや設定用に {role,task,constraints,output} が必要なら JSON に切替。',
	tool_prompt_template_builder_how_item_4: 'コピーまたはダウンロード。フィールドを編集して再作成できます。',
	tool_prompt_template_builder_how_title: '使い方',
	tool_prompt_template_builder_load_sample: 'サンプル読込',
	tool_prompt_template_builder_output_fmt_label: 'Output format',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown 節、JSON 形、箇条書き…',
	tool_prompt_template_builder_result_label: 'テンプレート',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'モデルが演じる役割…',
	tool_prompt_template_builder_rules_body:
		'再利用テンプレートには明確なブロックと正直な限界が必要 — 第二の生成器ではありません。',
	tool_prompt_template_builder_rules_item_1:
		'四ブロック：Role、Task、Constraints、Output。空は Markdown に出しません。',
	tool_prompt_template_builder_rules_item_2: '明示フィールドは自由入力の解析より優先。',
	tool_prompt_template_builder_rules_item_3: '既定は ## 見出しの Markdown。JSON は同ページのチップ。',
	tool_prompt_template_builder_rules_item_4: 'テキスト整形のみ。トークン推定や Schema 検証はしません。',
	tool_prompt_template_builder_rules_title: '想定されるルール',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'クリップボードにコピーしました。',
	tool_prompt_template_builder_status_done: 'テンプレート完成。',
	tool_prompt_template_builder_status_working: 'テンプレート作成中…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: '段階的に行うこと…',
	tool_prompt_template_builder_title: 'Promptテンプレートビルダー',
	tool_prompt_template_builder_usecase_1:
		'チームがどのチャット UI にも貼れるコードレビュー Agent の system prompt を共有。',
	tool_prompt_template_builder_usecase_2:
		'API 接続前に議事録を Role/Task/Constraints ブロックに整理。',
	tool_prompt_template_builder_usecase_3:
		'JSON を出力し、JSON Schema バリデータで設定ファイルを確認。',
	tool_prompt_template_builder_usecases_title: '向いている場面',
};

export default ja;
