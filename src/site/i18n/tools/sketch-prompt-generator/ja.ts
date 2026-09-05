/**
 * i18n tool shard (sketch-prompt-generator / ja).
 * H1: Sketch.appプロンプトジェネレーター（Macデザインソフト操作。鉛筆線画の文生図ではない）。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'ChatGPT / Gemini / Claude / DeepSeek に Sketch.app の操作手順（アートボード・シンボル・共有スタイル・書き出し）を案内させるためのプロンプトを、このページで組み立てます。フィールド入力後に Markdown / JSON をコピー。既定ではブラウザ内で組み立て、「AIで拡充／整える」を押したときだけ、その時点の下書きが Cloudflare Workers AI に送られます（Turnstile 必須、レート・上限あり）。返ってきた文章は結果欄をまるごと置き換えます。',
	tool_sketch_prompt_generator_build: 'プロンプトを作成',
	tool_sketch_prompt_generator_clear: 'クリア',
	tool_sketch_prompt_generator_copy: 'コピー',
	tool_sketch_prompt_generator_desc:
		'Sketch.appプロンプトジェネレーター — アートボード・シンボル・書き出し手順をブラウザ内で組み立て、任意で Cloudflare AI の拡充／整形（Turnstile）。',
	tool_sketch_prompt_generator_description:
		'Sketch.appプロンプトジェネレーター — ローカル + オプションAI：ChatGPT・Gemini・Claude・DeepSeek 向けに、目標・アートボード・シンボル・書き出しを入力すると、Sketch.app の作業手順を示す構造化プロンプトをブラウザ内で組み立てます。初回表示から編集できる例が入っており、その後は任意で Cloudflare Workers AI の拡充／整形（Turnstile 必須・上限あり）。既定は Markdown、パイプライン向けに JSON も選べます。',
	tool_sketch_prompt_generator_download: 'ダウンロード',
	tool_sketch_prompt_generator_empty: '作成前に少なくとも1つの欄を入力してください。',
	tool_sketch_prompt_generator_example:
		'入力：目標 = Sketch.app のログイン画面、アートボード = iPhone 14 390×844、シンボル = Button/Primary + Input、書き出し = 1x/2x/3x PNG + PDF。出力（Markdown）：## 役割 → Sketch.app 操作アシスタント、## タスク → 番号付きチェックリスト。',
	tool_sketch_prompt_generator_example_title: '例',
	tool_sketch_prompt_generator_faq_a1:
		'ローカル組み立てはこのタブ内のみで、既定ではアップロードしません。任意の Expand/Polish はそのクリック分のテキストだけを Cloudflare Workers AI に送り、当サーバーから OpenAI / Google / Anthropic / DeepSeek には送りません。',
	tool_sketch_prompt_generator_faq_a2:
		'ローカルは欄の整形のみ。任意 AI は Turnstile 後に Cloudflare Workers AI を使い、チャット API 呼び出しや Sketch.app の遠隔操作はしません。',
	tool_sketch_prompt_generator_faq_a3:
		'Promptテンプレートビルダーは汎用4欄。本ページは Sketch.app の目標・アートボード・シンボル／スタイル・書き出しに特化します。',
	tool_sketch_prompt_generator_faq_a4:
		'いいえ。Midjourney 向けはラスター画像スタイル用。ここは Mac のデザインソフト Sketch.app の操作手順用です。鉛筆線画の画像プロンプトは Midjourney ページを使ってください。',
	tool_sketch_prompt_generator_faq_a5:
		'はい。Expand / Polish の前に任意 AI パネルで Turnstile を完了してください。トークンが無いと AI はエラーになり、ローカルは引き続き使えます。',
	tool_sketch_prompt_generator_faq_a6: 'はい。JSON チップは構造化フィールドと組み立て済みプロンプトを出します。',
	tool_sketch_prompt_generator_faq_a7:
		'はい。完成プロンプトを ChatGPT などに貼り、Sketch.app のメニュー操作を案内させられます。テキスト整形のみで、Sketch 自体は実行しません。',
	tool_sketch_prompt_generator_faq_a8:
		'ローカルはこのタブ内で整形するだけで、どこにも送信しません。任意の拡充／整形は下書きを Cloudflare Workers AI に送り（Turnstile と1日の上限あり）、返答が結果欄をまるごと置き換えます。失敗時や上限到達時はローカルのまま作業を続けられます。',
	tool_sketch_prompt_generator_faq_q1: 'プロンプトはアップロードされますか？',
	tool_sketch_prompt_generator_faq_q2: 'ChatGPT 呼び出しや Sketch.app の遠隔操作はしますか？',
	tool_sketch_prompt_generator_faq_q3: 'Promptテンプレートビルダーとの違いは？',
	tool_sketch_prompt_generator_faq_q4: '鉛筆スケッチや Midjourney 線画プロンプト用ですか？',
	tool_sketch_prompt_generator_faq_q5: '任意 AI に Turnstile が必要な理由は？',
	tool_sketch_prompt_generator_faq_q6: 'JSON 出力はできますか？',
	tool_sketch_prompt_generator_faq_q7: 'ChatGPT / Gemini / Claude / DeepSeek で使えますか？',
	tool_sketch_prompt_generator_faq_q8: 'ローカルと任意 Cloudflare AI の違いは？',
	tool_sketch_prompt_generator_ai_expand: 'AIで拡充',
	tool_sketch_prompt_generator_ai_polish: 'AIで整える',
	tool_sketch_prompt_generator_ai_panel_label: '任意の Cloudflare AI（Turnstile）',
	tool_sketch_prompt_generator_ai_consent_title: 'Cloudflare Workers AI にテキストを送りますか？',
	tool_sketch_prompt_generator_ai_consent_body:
		'この任意ステップは下書きを Cloudflare Workers AI に送ります。当サーバーから OpenAI / Google / Anthropic / DeepSeek には送りません。AI なしでもローカル組み立ては使えます。',
	tool_sketch_prompt_generator_ai_consent_ok: '続ける',
	tool_sketch_prompt_generator_ai_consent_cancel: 'キャンセル',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI 処理中…',
	tool_sketch_prompt_generator_ai_done: 'AI の文章を結果欄にそのまま書き込みました。コピー前に確認してください。',
	tool_sketch_prompt_generator_ai_err_generic: 'AI に失敗しました。ローカルプロンプトは変更されていません。',
	tool_sketch_prompt_generator_ai_err_rate: 'AI 上限に達しました。ローカルを使うか明日（UTC）再試行してください。',
	tool_sketch_prompt_generator_ai_err_turnstile: 'AI 利用前に Turnstile を完了してください。',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: '出力形式',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: '目標 / 成果物',
	tool_sketch_prompt_generator_goal_ph: '例: Sketch.app でログイン画面…',
	tool_sketch_prompt_generator_artboard_label: 'アートボード / ページ',
	tool_sketch_prompt_generator_artboard_ph: '例: iPhone 14 390×844、Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'シンボル / スタイル / ライブラリ',
	tool_sketch_prompt_generator_symbols_ph: '例: Button/Primary、Shared Styles…',
	tool_sketch_prompt_generator_export_label: '書き出し / 引き渡し',
	tool_sketch_prompt_generator_export_ph: '例: 1x/2x/3x PNG、PDF レビュー…',
	tool_sketch_prompt_generator_how_body:
		'Sketch.app 用フィールドを埋め、ローカルでプロンプトを作り、任意で Turnstile 後に Expand/Polishし、チャット AI に貼って Sketch.app 手順を案内させます。',
	tool_sketch_prompt_generator_how_item_1: '初回表示でログイン画面のサンプルが既に入っています。',
	tool_sketch_prompt_generator_how_item_2: '目標・アートボード・シンボル・書き出しを編集し「プロンプトを作成」、または JSON に切替。',
	tool_sketch_prompt_generator_how_item_3: '任意: Turnstile 完了後、Cloudflare Workers AI で拡充または整形。',
	tool_sketch_prompt_generator_how_item_4: 'コピーまたはダウンロードし、チャットに貼って Sketch.app チェックリストに従う。',
	tool_sketch_prompt_generator_how_title: '使い方',
	tool_sketch_prompt_generator_load_sample: 'サンプルを読み込む',
	tool_sketch_prompt_generator_platforms_lead:
		'ChatGPT / Gemini / Claude / DeepSeek 向け — 完成プロンプトをコピーして Sketch.app 操作を案内させます。',
	tool_sketch_prompt_generator_result_label: 'プロンプト出力',
	tool_sketch_prompt_generator_rules_body:
		'欄は Sketch.app の成果物・アートボード・シンボル・書き出しに対応。既定はローカル。任意 AI は Turnstile と上限あり。本ページは Sketch.app を起動しません。',
	tool_sketch_prompt_generator_rules_item_1: '構造化フィールドは Markdown の Role/Task/Constraints/Output に対応。',
	tool_sketch_prompt_generator_rules_item_2: '既定は Markdown。同じ画面で JSON も選択可。',
	tool_sketch_prompt_generator_rules_item_3: '任意 Cloudflare AI はローカルの代替ではない — コピー前に確認。',
	tool_sketch_prompt_generator_rules_item_4:
		'テキスト組み立てのみ。Sketch.app・プラグイン・Midjourney・チャット API はローカルでは実行しません。',
	tool_sketch_prompt_generator_rules_title: '想定されるルール',
	tool_sketch_prompt_generator_sec_constraints: '制約',
	tool_sketch_prompt_generator_sec_output: '出力形式',
	tool_sketch_prompt_generator_sec_role: '役割',
	tool_sketch_prompt_generator_sec_task: 'タスク',
	tool_sketch_prompt_generator_status_copied: 'クリップボードにコピーしました。',
	tool_sketch_prompt_generator_status_done: 'プロンプト準備完了。',
	tool_sketch_prompt_generator_status_working: '作成中…',
	tool_sketch_prompt_generator_title: 'Sketch.appプロンプトジェネレーター — ローカル + オプションAI',
	tool_sketch_prompt_generator_usecase_1:
		'アートボード寸法とシンボル名をチームのチャット AI に渡し、Sketch.app で画面を再現させる。',
	tool_sketch_prompt_generator_usecase_2: 'デザイン QA 前に PNG / PDF 書き出しチェックリストを用意する。',
	tool_sketch_prompt_generator_usecase_3:
		'ペルソナ／ワイヤーの製品思考が主目的なら Product design prompt builder と比較。',
	tool_sketch_prompt_generator_usecase_4: '機微な下書きはローカルに留め、同意後だけ AI を使う。',
	tool_sketch_prompt_generator_usecases_title: '向いている場面',
};

export default ja;
