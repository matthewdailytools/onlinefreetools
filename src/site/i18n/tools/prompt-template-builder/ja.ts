/**
 * i18n tool shard (prompt-template-builder / ja).
 * Master H1: Promptテンプレートビルダー; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_prompt_template_builder_article:
		'このページで下書き prompt を Role / Task / Constraints / Output の再利用テンプレートに整理します。自由入力または各フィールドを埋め、Markdown か JSON を ChatGPT、Gemini、Claude、DeepSeek にコピー。モデル API は呼びません。テキストは端末内に留まり、サーバーにアップロードされません。',
	tool_prompt_template_builder_build: 'テンプレート作成',
	tool_prompt_template_builder_clear: 'クリア',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'トーン、範囲、避けること…',
	tool_prompt_template_builder_copy: 'コピー',
	tool_prompt_template_builder_desc:
		'Promptテンプレートビルダー — ローカル既定、任意 Cloudflare AI 拡張/推敲（Turnstile）；Markdown/JSON は端末内。',
	tool_prompt_template_builder_description:
		'手順と例：Promptテンプレートビルダー — ローカル + オプションAI（ChatGPT/Gemini/Claude/DeepSeek）：既定はブラウザ内ローカル組み立て、任意で Cloudflare Workers AI Expand/Polish（Turnstile 必須・レート制限）。初回表示でサンプル。Markdown 既定。AI 未使用時は端末外に出ません。',
	tool_prompt_template_builder_download: 'ダウンロード',
	tool_prompt_template_builder_empty: '自由入力またはいずれかのフィールドを入力してから作成してください。',
	tool_prompt_template_builder_example:
		'サンプル読込でコードレビュー Agent プリセットを入れ、## 見出し四つの Markdown を生成し、コピーとダウンロードを有効にします。映画、ショートドラマ、Android、iOS チップで他のデフォルトも試せます。',
	tool_prompt_template_builder_example_title: '例',
	tool_prompt_template_builder_faq_a1:
		'既定はこのタブ内ローカル。任意 Expand/Polish はそのクリック分のみ Cloudflare Workers AI へ。',
	tool_prompt_template_builder_faq_a2:
		'ローカルはこのタブのみ。任意 AI は Turnstile 後 Cloudflare Workers AI — チャット API は呼びません。',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown は会話エクスポートを読みやすいファイルにします。ここでは再利用可能な system prompt を構造化 — チャット保存後にテンプレート化する際に併用できます。',
	tool_prompt_template_builder_faq_a4:
		'はい。Expand/Polish 前に Turnstile を完了してください。',
	tool_prompt_template_builder_faq_a5:
		'自由入力で Role: / Task: / Constraints: / Output: で始まる行はセクションに分割。明示フィールドが優先されます。',
	tool_prompt_template_builder_faq_a6:
		'はい。作成したテンプレートを ChatGPT、Gemini、Claude、DeepSeek にコピー — 四フィールド構造は各チャット UI で通用します。テキスト整形が目的のため、プラットフォーム別 URL は設けていません。',
	tool_prompt_template_builder_faq_q1: 'Prompt はアップロードされますか？',
	tool_prompt_template_builder_faq_q2: 'LLM を呼び出しますか？',
	tool_prompt_template_builder_faq_q3: 'ChatGPT エクスポート→Markdown との違いは？',
	tool_prompt_template_builder_faq_q4:
		'任意 AI に Turnstile が必要な理由は？',
	tool_prompt_template_builder_faq_q5: '自由入力の解析はどう動きますか？',
	tool_prompt_template_builder_faq_q6: 'ChatGPT、Gemini、Claude、DeepSeek で使えますか？',
	tool_prompt_template_builder_faq_q7:
		'ローカルと任意 Cloudflare AI の違いは？',
	tool_prompt_template_builder_faq_a7:
		'ローカルはこのタブのみ非アップロード。任意 Expand/Polish は Cloudflare Workers AI（Turnstile・制限）。',
	tool_prompt_template_builder_ai_expand:
		'AI で拡張',
	tool_prompt_template_builder_ai_polish:
		'AI で推敲',
	tool_prompt_template_builder_ai_panel_label:
		'任意 Cloudflare AI（Turnstile）',
	tool_prompt_template_builder_ai_consent_title:
		'Cloudflare Workers AI に送信しますか？',
	tool_prompt_template_builder_ai_consent_body:
		'任意のステップで下書きを Cloudflare Workers AI に送ります。当サーバーから OpenAI 等には送りません。',
	tool_prompt_template_builder_ai_consent_ok:
		'続行',
	tool_prompt_template_builder_ai_consent_cancel:
		'キャンセル',
	tool_prompt_template_builder_ai_working:
		'Cloudflare AI 処理中…',
	tool_prompt_template_builder_ai_done:
		'AI 提案を適用しました。コピー前に確認してください。',
	tool_prompt_template_builder_ai_err_generic:
		'AI 失敗。ローカル Prompt は変更されていません。',
	tool_prompt_template_builder_ai_err_rate:
		'AI クォータ到達。ローカルモードか明日（UTC）再試行。',
	tool_prompt_template_builder_ai_err_turnstile:
		'AI 利用前に Turnstile を完了してください。',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: '出力形式',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: '自由 Prompt（任意）',
	tool_prompt_template_builder_free_ph: '下書き、または Role: … Task: … の行',
	tool_prompt_template_builder_how_body:
		'シーンチップを選ぶか自分で下書きし、Role / Task / Constraints / Output を埋め、テンプレートを作成して ChatGPT、Gemini、Claude、DeepSeek に貼り付け。',
	tool_prompt_template_builder_how_item_1:
		'コードレビュー、映画、ショートドラマ、Android、iOS を選ぶ — または自由欄に下書きを貼る。',
	tool_prompt_template_builder_how_item_2: 'テンプレート作成をクリック（サンプル読込は初回表示でコードレビュー preset 済み）。',
	tool_prompt_template_builder_how_item_3: 'コードや設定用に {role,task,constraints,output} が必要なら JSON に切替。',
	tool_prompt_template_builder_how_item_4: 'コピーまたはダウンロード後、ChatGPT、Gemini、Claude、DeepSeek に貼り付け。',
	tool_prompt_template_builder_how_title: '使い方',
	tool_prompt_template_builder_load_sample: 'サンプル読込',
	tool_prompt_template_builder_output_fmt_label: 'Output format',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown 節、JSON 形、箇条書き…',
	tool_prompt_template_builder_platforms_lead:
		'ChatGPT、Gemini、Claude、DeepSeek 向け — 完成テンプレートをいずれかのチャット UI にコピー。',
	tool_prompt_template_builder_result_label: 'テンプレート',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'モデルが演じる役割…',
	tool_prompt_template_builder_rules_body:
		'再利用テンプレートには明確なブロック、フィールド優先順位、正直な限界が必要 — 第二の生成器製品ではありません。',
	tool_prompt_template_builder_rules_item_1:
		'四ブロック：Role、Task、Constraints、Output。空は Markdown に出しません。',
	tool_prompt_template_builder_rules_item_2: '明示フィールドは自由入力の解析より優先。',
	tool_prompt_template_builder_rules_item_3: '既定は ## 見出しの Markdown。JSON は同ページのチップ。',
	tool_prompt_template_builder_rules_item_4:
		'シーンチップは映画・ショートドラマ・モバイルコード用フィールドを preset — 同一ビルダー、プラットフォーム別 URL なし。',
	tool_prompt_template_builder_rules_title: '想定されるルール',
	tool_prompt_template_builder_scene_android: 'Android コード',
	tool_prompt_template_builder_scene_code: 'コードレビュー',
	tool_prompt_template_builder_scene_ios: 'iOS コード',
	tool_prompt_template_builder_scene_label: 'シーンプリセット',
	tool_prompt_template_builder_scene_movie: '長編映画',
	tool_prompt_template_builder_scene_short_drama: 'ショートドラマ',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'クリップボードにコピーしました。',
	tool_prompt_template_builder_status_done: 'テンプレート完成。',
	tool_prompt_template_builder_status_working: 'テンプレート作成中…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: '段階的に行うこと…',
	tool_prompt_template_builder_title:
		'Promptテンプレートビルダー — ローカル + オプションAI',
	tool_prompt_template_builder_usecase_1:
		'チームが ChatGPT、Gemini、Claude、DeepSeek に貼れるコードレビュー Agent の system prompt を共有。',
	tool_prompt_template_builder_usecase_2:
		'任意のチャット API 接続前に議事録を Role/Task/Constraints ブロックに整理。',
	tool_prompt_template_builder_usecase_3:
		'JSON を出力し、JSON Schema バリデータで downstream 設定ファイルを確認。',
	tool_prompt_template_builder_usecase_4:
		'映画チップで三幕ビートシートを読み込み、好みのチャット UI に貼り付け。',
	tool_prompt_template_builder_usecase_5:
		'ショートドラマで縦型連載のフックと cliffhanger — モバイル binge 向けエピソード。',
	tool_prompt_template_builder_usecase_6:
		'Android または iOS で Kotlin/Swift コーディング Agent テンプレート — 四つのプラットフォーム専用ページ不要。',
	tool_prompt_template_builder_usecases_title: '向いている場面',
};

export default ja;
