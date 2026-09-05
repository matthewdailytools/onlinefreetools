/**
 * i18n tool shard (writing-prompt-generator / ja).
 * 検索向け H1：ライティングプロンプト生成 — 対話・キャラ・脚本・ランダム。
 * 既定はブラウザ内で組み立て、拡張/推敲は任意で Cloudflare Workers AI（Turnstile と利用枠あり）。
 * AI の返答は結果欄をまるごと置き換える。
 * ChatGPT / Gemini / Claude / DeepSeek は description と初回表示に登場。
 */
import type { SiteLangDict } from '../../../types';

/** ライティングプロンプト生成 — 日本語テキストシャード */
const ja: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'対話シーン、キャラ研究、脚本アウトライン、ランダムな物語のきっかけ向けに、貼り付け可能なライティング prompt をこのページで組み立てます。モードを選び、フィールドを埋めるかランダムを振り、Markdown か JSON を ChatGPT、Gemini、Claude、DeepSeek にコピー。既定ではブラウザ内で組み立てるだけで、チャットの API を代理で呼ぶことはありません。「AI で拡張」「AI で推敲」を押したときだけ、その時点の下書きが Cloudflare Workers AI に送られます（Turnstile 必須・回数と枠に上限あり）。',
	tool_writing_prompt_generator_build: 'プロンプト作成',
	tool_writing_prompt_generator_char_flaw_label: '欠点 / 弱点',
	tool_writing_prompt_generator_char_flaw_ph: '何が足を引っ張るか…',
	tool_writing_prompt_generator_char_goal_label: '目標',
	tool_writing_prompt_generator_char_goal_ph: 'この物語で何を望むか…',
	tool_writing_prompt_generator_char_name_label: 'キャラ名',
	tool_writing_prompt_generator_char_name_ph: '名前または役割ラベル…',
	tool_writing_prompt_generator_char_traits_label: '特性',
	tool_writing_prompt_generator_char_traits_ph: '性格、癖、矛盾…',
	tool_writing_prompt_generator_char_voice_label: '声 / 文体',
	tool_writing_prompt_generator_char_voice_ph: '文のリズム、語彙…',
	tool_writing_prompt_generator_clear: 'クリア',
	tool_writing_prompt_generator_copy: 'コピー',
	tool_writing_prompt_generator_desc:
		'ライティングPromptジェネレーター — 対話・キャラ・脚本・ランダムの4モード。組み立てはブラウザ内、Cloudflare AI の拡張/推敲は任意。',
	tool_writing_prompt_generator_description:
		'ライティング Prompt ジェネレーター：対話・キャラ・脚本・ランダムからモードを選び、フィールドを埋める手順で、ChatGPT・Gemini・Claude・DeepSeek にそのまま貼れる prompt を作ります。開いた時点で対話の例が動き、ランダムでは物語のきっかけを振り出して seed で同じ結果を再現できます。Markdown と JSON を出力でき、Cloudflare AI の拡張/推敲は任意です。',
	tool_writing_prompt_generator_dlg_characters_label: '登場人物',
	tool_writing_prompt_generator_dlg_characters_ph: '名前 + 一行の役割…',
	tool_writing_prompt_generator_dlg_conflict_label: '葛藤',
	tool_writing_prompt_generator_dlg_conflict_ph: 'シーンを動かす緊張…',
	tool_writing_prompt_generator_dlg_genre_label: 'ジャンル / トーン',
	tool_writing_prompt_generator_dlg_genre_ph: '現代ドラマ、ラブコメ…',
	tool_writing_prompt_generator_dlg_setting_label: '舞台',
	tool_writing_prompt_generator_dlg_setting_ph: '場所、時代、雰囲気…',
	tool_writing_prompt_generator_dlg_tone_label: '対話スタイル',
	tool_writing_prompt_generator_dlg_tone_ph: 'サブテキスト、軽口、簡潔…',
	tool_writing_prompt_generator_download: 'ダウンロード',
	tool_writing_prompt_generator_empty: 'このモードで少なくとも1フィールドを入力してから作成してください。',
	tool_writing_prompt_generator_example:
		'入力（対話・サンプル）：Genre = 現代ドラマ；Characters = Maya（バリスタ）とJonah（音楽家）；Conflict = 元カレの歌だと気づく。出力（Markdown）：## 役割 → ライティングコーチ；## タスク → genre/characters/setting/conflict/tone。脚本モードは灯台FAX謎 — 映画のフードトラック例とは別。',
	tool_writing_prompt_generator_example_title: '例',
	tool_writing_prompt_generator_faq_a1:
		'既定ではこのタブ内で組み立てるだけで、どこにも送信しません。任意の拡張/推敲を押したときだけ、そのクリックで送った文面が Cloudflare Workers AI に渡ります。当方のサーバーから OpenAI・Google・Anthropic・DeepSeek へ回すことはありません。',
	tool_writing_prompt_generator_faq_a2:
		'ローカルモードは執筆用の入力欄を整形するだけです。任意の拡張/推敲は Turnstile 通過後に Cloudflare Workers AI を使います。ChatGPT・Gemini・Claude・DeepSeek の API を代理で呼ぶことはありません。',
	tool_writing_prompt_generator_faq_a3:
		'Prompt テンプレートビルダーは汎用 Role/Task/Constraints/Output テンプレート向け。本ページは執筆モード優先 — 対話フィールド、キャラシート、脚本ビート、同一キャンバスのランダムプロンプト生成。',
	tool_writing_prompt_generator_faq_a4:
		'使えます。ランダムモードはジャンル・舞台・小道具・感情・葛藤を振り出します。数値の seed を入れれば同じ組み合わせを再現できます。出てくるのは着想のたたき台で、質は保証しません。',
	tool_writing_prompt_generator_faq_a5:
		'必要です。任意 AI パネルの Turnstile を通してから拡張または推敲を押してください。トークンがないとボタンはエラーになりますが、ローカルの組み立てはそのまま使えます。',
	tool_writing_prompt_generator_faq_a6:
		'はい。JSON チップで {mode,fields,role,task,constraints,output} を出力。テストや設定用。Markdown は ## 役割 / タスク / 制約 / 出力形式 の見出しになります。',
	tool_writing_prompt_generator_faq_q1: 'ライティング prompt はアップロードされますか？',
	tool_writing_prompt_generator_faq_q2: 'LLM を呼び出しますか？',
	tool_writing_prompt_generator_faq_q3: 'Prompt テンプレートビルダーとの違いは？',
	tool_writing_prompt_generator_faq_q4:
		'ランダムプロンプト生成はここで使えますか？',
	tool_writing_prompt_generator_faq_q5: '任意 AI に Turnstile が必要な理由は？',
	tool_writing_prompt_generator_faq_q6: 'JSON 出力はできますか？',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: '出力形式',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'執筆モードを選び、フィールドを埋めるかランダムを振り、prompt ブロックを作成し、ChatGPT、Gemini、Claude、DeepSeek に貼り付け。',
	tool_writing_prompt_generator_how_item_1:
		'対話、キャラ、脚本、ランダムから選択 — サンプル読込は初回表示で対話プリセットを実行済み。',
	tool_writing_prompt_generator_how_item_2: 'モード別フィールドを入力（または seed を入れてランダムを振る）。',
	tool_writing_prompt_generator_how_item_3: 'プロンプト作成をクリック（ランダムでは非表示 — ランダムを振るを使用）。',
	tool_writing_prompt_generator_how_item_4: 'Markdown/JSON をコピーまたはダウンロードし、チャット UI に貼り付け。',
	tool_writing_prompt_generator_how_title: '使い方',
	tool_writing_prompt_generator_load_sample: 'サンプル読込',
	tool_writing_prompt_generator_mode_character: 'キャラ',
	tool_writing_prompt_generator_mode_dialogue: '対話',
	tool_writing_prompt_generator_mode_label: '執筆モード',
	tool_writing_prompt_generator_mode_random: 'ランダム',
	tool_writing_prompt_generator_mode_script: '脚本 / アウトライン',
	tool_writing_prompt_generator_platforms_lead:
		'ChatGPT、Gemini、Claude、DeepSeek 向け — 完成したライティング prompt をいずれかのチャット UI にコピー。',
	tool_writing_prompt_generator_random_lead:
		'ジャンル、舞台、小道具、感情、葛藤から物語のきっかけを振り出し。任意 seed で同じ結果を再現。',
	tool_writing_prompt_generator_random_roll: 'ランダムを振る',
	tool_writing_prompt_generator_random_seed_label: 'Seed（任意）',
	tool_writing_prompt_generator_random_seed_ph: '例：42',
	tool_writing_prompt_generator_result_label: 'ライティング prompt',
	tool_writing_prompt_generator_rules_body:
		'ライティング prompt には、モードごとに違うフィールドと、ランダムで出るものの限界をごまかさない説明、そして他のビルダーと同じ「まずブラウザ内で組み立てる」前提が要ります。',
	tool_writing_prompt_generator_rules_item_1:
		'出力四ブロック：Role、Task、Constraints、Output — 構造化 prompt テンプレートに整合。',
	tool_writing_prompt_generator_rules_item_2:
		'ランダムモードは同じ画面の中にあります。ジャンル・舞台・小道具・感情・葛藤を振り出し、seed を入れれば同じ結果を再現できます。',
	tool_writing_prompt_generator_rules_item_3:
		'既定エクスポートは Markdown。JSON は同一キャンバスのチップ。',
	tool_writing_prompt_generator_rules_item_4:
		'任意の Cloudflare AI はローカルモードの代わりにはなりません。コピー前に AI の文章を確認してください。本ツールは prompt を組み立てるだけで、完成した物語は書きません。',
	tool_writing_prompt_generator_rules_title: '期待できるルール',
	tool_writing_prompt_generator_scr_notes_label: 'ビートメモ',
	tool_writing_prompt_generator_scr_notes_ph: 'シーン数、テンポ、POV…',
	tool_writing_prompt_generator_scr_premise_label: '前提 / ログライン',
	tool_writing_prompt_generator_scr_premise_ph: '一段落のセットアップ…',
	tool_writing_prompt_generator_scr_structure_label: '構造',
	tool_writing_prompt_generator_scr_structure_ph: '三幕、セーブ・ザ・キャット、エピソード型…',
	tool_writing_prompt_generator_sec_constraints: '制約',
	tool_writing_prompt_generator_sec_output: '出力形式',
	tool_writing_prompt_generator_sec_role: '役割',
	tool_writing_prompt_generator_sec_task: 'タスク',
	tool_writing_prompt_generator_status_copied: 'クリップボードにコピーしました。',
	tool_writing_prompt_generator_status_done: 'Prompt 準備完了。',
	tool_writing_prompt_generator_status_working: 'Prompt 作成中…',
	tool_writing_prompt_generator_title:
		'ライティングPromptジェネレーター — ローカル + オプションAI',
	tool_writing_prompt_generator_usecase_1:
		'作家グループ向けに対話シーン prompt を起草 — ChatGPT や Claude にビート提案を求め、全文ではなく。',
	tool_writing_prompt_generator_usecase_2:
		'別のランダマイザーサイトを開かず、新鮮な物語のきっかけが欲しいときにランダムを振る。',
	tool_writing_prompt_generator_usecase_3:
		'パイプライン試験用にキャラシート prompt の JSON をエクスポートし、API 四フィールド向け Prompt テンプレートビルダーを開く。',
	tool_writing_prompt_generator_usecase_4:
		'短編脚本のビート表をローカルで組み、Gemini でテーブルリードする前に prompt を整える。',
	tool_writing_prompt_generator_usecases_title: '向いている用途',
	tool_writing_prompt_generator_ai_expand:
		'AI で拡張',
	tool_writing_prompt_generator_ai_polish:
		'AI で推敲',
	tool_writing_prompt_generator_ai_panel_label:
		'任意 Cloudflare AI（Turnstile）',
	tool_writing_prompt_generator_ai_consent_title:
		'Cloudflare Workers AI に送信しますか？',
	tool_writing_prompt_generator_ai_consent_body:
		'この任意の操作では、いまの下書きを Cloudflare Workers AI に送って推論します。当方のサーバーから OpenAI・Google・Anthropic・DeepSeek に渡すことはありません。AI を使わなくてもローカルの組み立ては動きます。',
	tool_writing_prompt_generator_ai_consent_ok:
		'続行',
	tool_writing_prompt_generator_ai_consent_cancel:
		'キャンセル',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI 処理中…',
	tool_writing_prompt_generator_ai_done:
		'AI の文章を結果欄にそのまま書き出しました。コピー前に確認してください。',
	tool_writing_prompt_generator_ai_err_generic:
		'AI 失敗。ローカル Prompt は変更されていません。',
	tool_writing_prompt_generator_ai_err_rate:
		'AI クォータ到達。ローカルモードか明日（UTC）再試行。',
	tool_writing_prompt_generator_ai_err_turnstile:
		'AI 利用前に Turnstile を完了してください。',
	tool_writing_prompt_generator_faq_q7:
		'ChatGPT、Gemini、Claude、DeepSeek で使えますか？',
	tool_writing_prompt_generator_faq_a7:
		'使えます。完成した prompt を ChatGPT、Gemini、Claude、DeepSeek に貼り付けてください。このページは文面を整えるだけで、各サービスへのログインや API 呼び出しは行いません。',
	tool_writing_prompt_generator_faq_q8:
		'ローカルと任意 Cloudflare AI の違いは？',
	tool_writing_prompt_generator_faq_a8:
		'ローカルはこのタブ内だけで完結し、送信はありません。任意の拡張/推敲は下書きを Cloudflare Workers AI に送り（Turnstile 必須・1日の枠あり）、返ってきた文章が結果欄をまるごと置き換えます。失敗や枠切れのときはローカルのまま使い続けられます。',
};

export default ja;
