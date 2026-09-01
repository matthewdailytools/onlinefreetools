/**
 * i18n tool shard (writing-prompt-generator / ja).
 * Search H1: ライティングプロンプト生成 — 対話・キャラ・脚本・ランダム；ローカル組み立て。
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** ライティングプロンプト生成 — 日本語テキストシャード */
const ja: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'対話シーン、キャラ研究、脚本アウトライン、ランダムな物語のきっかけ向けに、貼り付け可能なライティング prompt をこのページで組み立てます。モードを選び、フィールドを埋めるかランダムを振り、Markdown か JSON を ChatGPT、Gemini、Claude、DeepSeek にコピー。モデル API は呼びません。テキストは端末内に留まり、サーバーにアップロードされません。',
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
		'ライティングPromptジェネレーター — ローカル既定、任意 Cloudflare AI 拡張/推敲（Turnstile）；Markdown/JSON は端末内。',
	tool_writing_prompt_generator_description:
		'手順と例：ライティングPromptジェネレーター — ローカル + オプションAI（ChatGPT/Gemini/Claude/DeepSeek）：既定はブラウザ内ローカル組み立て、任意で Cloudflare Workers AI Expand/Polish（Turnstile 必須・レート制限）。初回表示でサンプル。Markdown 既定。AI 未使用時は端末外に出ません。',
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
		'サンプル読込で対話モードを選び、深夜ダイナーのシーンを入れ、Role/Task/Constraints/Output 四段の Markdown を生成し、コピーを有効化。キャラ、脚本、ランダムチップで他の既定値も試せます。',
	tool_writing_prompt_generator_example_title: '例',
	tool_writing_prompt_generator_faq_a1:
		'既定はこのタブ内ローカル。任意 Expand/Polish はそのクリック分のみ Cloudflare Workers AI へ。',
	tool_writing_prompt_generator_faq_a2:
		'ローカルはこのタブのみ。任意 AI は Turnstile 後 Cloudflare Workers AI — チャット API は呼びません。',
	tool_writing_prompt_generator_faq_a3:
		'Prompt テンプレートビルダーは汎用 Role/Task/Constraints/Output テンプレート向け。本ページは執筆モード優先 — 対話フィールド、キャラシート、脚本ビート、同一キャンバスのランダムプロンプト生成。',
	tool_writing_prompt_generator_faq_a4:
		'はい。Expand/Polish 前に Turnstile を完了してください。',
	tool_writing_prompt_generator_faq_a5:
		'はい。JSON チップで {mode,fields,role,task,constraints,output} を出力。テストや設定用。Markdown は ## Role / Task / Constraints / Output 見出し。',
	tool_writing_prompt_generator_faq_a6:
		'はい。完成 prompt を ChatGPT、Gemini、Claude、DeepSeek にコピー。テキスト整形が目的のためプラットフォーム別 URL は設けていません。',
	tool_writing_prompt_generator_faq_q1: 'ライティング prompt はアップロードされますか？',
	tool_writing_prompt_generator_faq_q2: 'LLM を呼び出しますか？',
	tool_writing_prompt_generator_faq_q3: 'Prompt テンプレートビルダーとの違いは？',
	tool_writing_prompt_generator_faq_q4:
		'任意 AI に Turnstile が必要な理由は？',
	tool_writing_prompt_generator_faq_q5: 'JSON 出力はできますか？',
	tool_writing_prompt_generator_faq_q6: 'ChatGPT、Gemini、Claude、DeepSeek で使えますか？',
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
		'ライティング prompt にはモード別フィールド、ランダムの正直な限界、他ビルダーと同じローカルプライバシーが必要。',
	tool_writing_prompt_generator_rules_item_1:
		'出力四ブロック：Role、Task、Constraints、Output — 構造化 prompt テンプレートに整合。',
	tool_writing_prompt_generator_rules_item_2:
		'ランダムモードはこの URL 内でランダムプロンプト生成を吸収 — 別ページ不要。',
	tool_writing_prompt_generator_rules_item_3:
		'既定エクスポートは Markdown。JSON は同一キャンバスのチップ。',
	tool_writing_prompt_generator_rules_item_4:
		'本ツールはテキスト組み立てのみ。完成物語の生成やクラウドモデル呼び出しはしません。',
	tool_writing_prompt_generator_rules_title: '期待できるルール',
	tool_writing_prompt_generator_scr_notes_label: 'ビートメモ',
	tool_writing_prompt_generator_scr_notes_ph: 'シーン数、テンポ、POV…',
	tool_writing_prompt_generator_scr_premise_label: '前提 / ログライン',
	tool_writing_prompt_generator_scr_premise_ph: '一段落のセットアップ…',
	tool_writing_prompt_generator_scr_structure_label: '構造',
	tool_writing_prompt_generator_scr_structure_ph: '三幕、セーブ・ザ・キャット、エピソード型…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
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
		'任意のステップで下書きを Cloudflare Workers AI に送ります。当サーバーから OpenAI 等には送りません。',
	tool_writing_prompt_generator_ai_consent_ok:
		'続行',
	tool_writing_prompt_generator_ai_consent_cancel:
		'キャンセル',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI 処理中…',
	tool_writing_prompt_generator_ai_done:
		'AI 提案を適用しました。コピー前に確認してください。',
	tool_writing_prompt_generator_ai_err_generic:
		'AI 失敗。ローカル Prompt は変更されていません。',
	tool_writing_prompt_generator_ai_err_rate:
		'AI クォータ到達。ローカルモードか明日（UTC）再試行。',
	tool_writing_prompt_generator_ai_err_turnstile:
		'AI 利用前に Turnstile を完了してください。',
	tool_writing_prompt_generator_faq_q7:
		'ローカルと任意 Cloudflare AI の違いは？',
	tool_writing_prompt_generator_faq_a7:
		'ローカルはこのタブのみ非アップロード。任意 Expand/Polish は Cloudflare Workers AI（Turnstile・制限）。',
};

export default ja;
