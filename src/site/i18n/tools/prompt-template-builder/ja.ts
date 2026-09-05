/**
 * i18n tool shard (prompt-template-builder / ja).
 * Master H1: Promptテンプレートビルダー; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_prompt_template_builder_article:
		'このページで下書き prompt を Role / Task / Constraints / Output の再利用テンプレートに整理します。自由入力または各フィールドを埋め、Markdown か JSON を ChatGPT、Gemini、Claude、DeepSeek にコピー。既定ではブラウザ内で組み立てるだけで、チャットの API を代理で呼ぶことはありません。「AI で拡張」「AI で推敲」を押したときだけ、その時点の下書きが Cloudflare Workers AI に送られます（Turnstile 必須・回数と枠に上限あり）。',
	tool_prompt_template_builder_build: 'テンプレート作成',
	tool_prompt_template_builder_clear: 'クリア',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'トーン、範囲、避けること…',
	tool_prompt_template_builder_copy: 'コピー',
	tool_prompt_template_builder_desc:
		'Promptテンプレートビルダー — ローカル既定、任意 Cloudflare AI 拡張/推敲（Turnstile）；Markdown/JSON は端末内。',
	tool_prompt_template_builder_description:
		'Prompt テンプレートビルダー：下書きを Role / Task / Constraints / Output の四つに整理する手順で、ChatGPT・Gemini・Claude・DeepSeek にそのまま貼れる形にします。開いた時点でコードレビューの例が動き、既定は Markdown、パイプライン用に JSON も選べます。組み立てはブラウザ内、Cloudflare AI の拡張/推敲は任意（Turnstile と利用枠あり）。',
	tool_prompt_template_builder_download: 'ダウンロード',
	tool_prompt_template_builder_empty: '自由入力またはいずれかのフィールドを入力してから作成してください。',
	tool_prompt_template_builder_example:
		'入力（サンプル読込・Codeチップ）：Role = シニアコードレビュアー（セキュリティと可読性）；Task = 貼り付けたPR diffをレビュー；Constraints = 最大12項目。出力（Markdown）：## 役割 / ## タスク / ## 制約 / ## 出力形式 の4セクション。ChatGPTやClaudeにそのままコピー可能。',
	tool_prompt_template_builder_example_title: '例',
	tool_prompt_template_builder_faq_a1:
		'既定ではこのタブ内で組み立てるだけで、どこにも送信しません。任意の拡張/推敲を押したときだけ、そのクリックで送った文面が Cloudflare Workers AI に渡ります。当方のサーバーから OpenAI・Google・Anthropic・DeepSeek へ回すことはありません。',
	tool_prompt_template_builder_faq_a2:
		'ローカルモードは入力欄を整形するだけです。任意の拡張/推敲は Turnstile 通過後に Cloudflare Workers AI を使います。ChatGPT・Gemini・Claude・DeepSeek の API を代理で呼ぶことはありません。',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown は会話エクスポートを読みやすいファイルにします。ここでは再利用可能な system prompt を構造化 — チャット保存後にテンプレート化する際に併用できます。',
	tool_prompt_template_builder_faq_a4:
		'必要です。任意 AI パネルの Turnstile を通してから拡張または推敲を押してください。トークンがないとボタンはエラーになりますが、ローカルの組み立てはそのまま使えます。',
	tool_prompt_template_builder_faq_a5:
		'自由入力で Role: / Task: / Constraints: / Output: で始まる行はセクションに分割。明示フィールドが優先されます。',
	tool_prompt_template_builder_faq_a6:
		'使えます。作成したテンプレートを ChatGPT、Gemini、Claude、DeepSeek に貼るだけで、四フィールドの構造はどのチャット UI でもそのまま通ります。このページは文面を整えるだけで、各サービスへのログインや API 呼び出しは行いません。',
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
		'ローカルはこのタブ内だけで完結し、送信はありません。任意の拡張/推敲は下書きを Cloudflare Workers AI に送り（Turnstile 必須・1日の枠あり）、返ってきた文章が結果欄をまるごと置き換えます。失敗や枠切れのときはローカルのまま使い続けられます。',
	tool_prompt_template_builder_ai_expand:
		'AI で拡張',
	tool_prompt_template_builder_ai_polish:
		'AI で推敲',
	tool_prompt_template_builder_ai_panel_label:
		'任意 Cloudflare AI（Turnstile）',
	tool_prompt_template_builder_ai_consent_title:
		'Cloudflare Workers AI に送信しますか？',
	tool_prompt_template_builder_ai_consent_body:
		'この任意の操作では、いまの下書きを Cloudflare Workers AI に送って推論します。当方のサーバーから OpenAI・Google・Anthropic・DeepSeek に渡すことはありません。AI を使わなくてもローカルの組み立ては動きます。',
	tool_prompt_template_builder_ai_consent_ok:
		'続行',
	tool_prompt_template_builder_ai_consent_cancel:
		'キャンセル',
	tool_prompt_template_builder_ai_working:
		'Cloudflare AI 処理中…',
	tool_prompt_template_builder_ai_done:
		'AI の文章を結果欄にそのまま書き出しました。コピー前に確認してください。',
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
	tool_prompt_template_builder_how_item_2: '「テンプレート作成」をクリック（コードレビューの既定例は「サンプル読込」で入れます）。',
	tool_prompt_template_builder_how_item_3: 'コードや設定用に {role,task,constraints,output} が必要なら JSON に切替。',
	tool_prompt_template_builder_how_item_4: 'コピーまたはダウンロード後、ChatGPT、Gemini、Claude、DeepSeek に貼り付け。',
	tool_prompt_template_builder_how_title: '使い方',
	tool_prompt_template_builder_load_sample: 'サンプル読込',
	tool_prompt_template_builder_output_fmt_label: '出力形式',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown 節、JSON 形、箇条書き…',
	tool_prompt_template_builder_platforms_lead:
		'ChatGPT、Gemini、Claude、DeepSeek 向け — 完成テンプレートをいずれかのチャット UI にコピー。',
	tool_prompt_template_builder_result_label: 'テンプレート',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'モデルが演じる役割…',
	tool_prompt_template_builder_rules_body:
		'再利用できるテンプレートには、はっきりしたブロック分け、フィールドの優先順位、そして「このページがやらないこと」の明示が要ります。',
	tool_prompt_template_builder_rules_item_1:
		'四ブロック：Role、Task、Constraints、Output。空は Markdown に出しません。',
	tool_prompt_template_builder_rules_item_2: '明示フィールドは自由入力の解析より優先。',
	tool_prompt_template_builder_rules_item_3: '既定は ## 見出しの Markdown。JSON は同ページのチップ。',
	tool_prompt_template_builder_rules_item_4:
		'シーンチップは映画・ショートドラマ・モバイル開発でよく使う項目を先に埋めます。切り替えた後も手で書き換えられます。',
	tool_prompt_template_builder_rules_title: '想定されるルール',
	tool_prompt_template_builder_scene_android: 'Android コード',
	tool_prompt_template_builder_scene_code: 'コードレビュー',
	tool_prompt_template_builder_scene_ios: 'iOS コード',
	tool_prompt_template_builder_scene_label: 'シーンプリセット',
	tool_prompt_template_builder_scene_movie: '長編映画',
	tool_prompt_template_builder_scene_short_drama: 'ショートドラマ',
	tool_prompt_template_builder_sec_constraints: '制約',
	tool_prompt_template_builder_sec_output: '出力形式',
	tool_prompt_template_builder_sec_role: '役割',
	tool_prompt_template_builder_sec_task: 'タスク',
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
		'Android や iOS のチップから Kotlin/Swift 前提のコーディング Agent 用テンプレートを作り、社内のコーディング規約を足す。',
	tool_prompt_template_builder_usecases_title: '向いている場面',
};

export default ja;
