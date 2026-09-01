/**
 * i18n tool shard (short-drama-prompt-generator / ja).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'このページで ショートドラマPromptジェネレーター 用 Prompt を作成。項目入力後 Markdown/JSON を ChatGPT/Gemini/Claude/DeepSeek へ。既定ローカル；任意 Expand/Polish は Cloudflare Workers AI（Turnstile）。',
	tool_short_drama_prompt_generator_build:
		'Prompt を作成',
	tool_short_drama_prompt_generator_clear:
		'クリア',
	tool_short_drama_prompt_generator_copy:
		'コピー',
	tool_short_drama_prompt_generator_desc:
		'ショートドラマPromptジェネレーター — ローカル既定、任意 Cloudflare AI 拡張/推敲（Turnstile）；Markdown/JSON は端末内。',
	tool_short_drama_prompt_generator_description:
		'手順と例：ショートドラマPromptジェネレーター — ローカル + オプションAI（ChatGPT/Gemini/Claude/DeepSeek）：既定はブラウザ内ローカル組み立て、任意で Cloudflare Workers AI Expand/Polish（Turnstile 必須・レート制限）。初回表示でサンプル。Markdown 既定。AI 未使用時は端末外に出ません。',
	tool_short_drama_prompt_generator_download:
		'ダウンロード',
	tool_short_drama_prompt_generator_empty:
		'作成前に少なくとも1項目を入力してください。',
	tool_short_drama_prompt_generator_example:
		'サンプル読込でプリセット投入・Markdown 生成・コピー有効。任意 AI は Turnstile 後そのクリック分のみ送信。',
	tool_short_drama_prompt_generator_example_title:
		'例',
	tool_short_drama_prompt_generator_faq_a1:
		'既定はこのタブ内ローカル。任意 Expand/Polish はそのクリック分のみ Cloudflare Workers AI へ。',
	tool_short_drama_prompt_generator_faq_a2:
		'ローカルはこのタブのみ。任意 AI は Turnstile 後 Cloudflare Workers AI — チャット API は呼びません。',
	tool_short_drama_prompt_generator_faq_a3:
		'Promptテンプレートビルダー covers generic Role/Task/Constraints/Output templates. This page focuses on short drama prompt generator fields with a dedicated sample and rules for this scenario.',
	tool_short_drama_prompt_generator_faq_a4:
		'はい。Expand/Polish 前に Turnstile を完了してください。',
	tool_short_drama_prompt_generator_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_short_drama_prompt_generator_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_short_drama_prompt_generator_faq_q1:
		'Is my prompt uploaded?',
	tool_short_drama_prompt_generator_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_short_drama_prompt_generator_faq_q3:
		'How is this different from Promptテンプレートビルダー?',
	tool_short_drama_prompt_generator_faq_q4:
		'任意 AI に Turnstile が必要な理由は？',
	tool_short_drama_prompt_generator_faq_q5:
		'Can I get JSON output?',
	tool_short_drama_prompt_generator_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'ローカルと任意 Cloudflare AI の違いは？',
	tool_short_drama_prompt_generator_faq_a7:
		'ローカルはこのタブのみ非アップロード。任意 Expand/Polish は Cloudflare Workers AI（Turnstile・制限）。',
	tool_short_drama_prompt_generator_ai_expand:
		'AI で拡張',
	tool_short_drama_prompt_generator_ai_polish:
		'AI で推敲',
	tool_short_drama_prompt_generator_ai_panel_label:
		'任意 Cloudflare AI（Turnstile）',
	tool_short_drama_prompt_generator_ai_consent_title:
		'Cloudflare Workers AI に送信しますか？',
	tool_short_drama_prompt_generator_ai_consent_body:
		'任意のステップで下書きを Cloudflare Workers AI に送ります。当サーバーから OpenAI 等には送りません。',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'続行',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'キャンセル',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI 処理中…',
	tool_short_drama_prompt_generator_ai_done:
		'AI 提案を適用しました。コピー前に確認してください。',
	tool_short_drama_prompt_generator_ai_err_generic:
		'AI 失敗。ローカル Prompt は変更されていません。',
	tool_short_drama_prompt_generator_ai_err_rate:
		'AI クォータ到達。ローカルモードか明日（UTC）再試行。',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'AI 利用前に Turnstile を完了してください。',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'出力形式',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Episodes',
	tool_short_drama_prompt_generator_episodes_ph:
		'Sample episodes…',
	tool_short_drama_prompt_generator_hook_label:
		'フック',
	tool_short_drama_prompt_generator_hook_ph:
		'Sample hook…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Cliffhanger',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Sample cliffhanger…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Vertical / Format',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Sample vertical format…',
	tool_short_drama_prompt_generator_genre_label:
		'ジャンル',
	tool_short_drama_prompt_generator_genre_ph:
		'Sample genre…',
	tool_short_drama_prompt_generator_how_body:
		'ショートドラマPromptジェネレーター の項目を入力し、ローカルで Prompt を組み立て、任意で Turnstile 後に Expand/Polish、ChatGPT/Gemini/Claude/DeepSeek へ貼り付け。',
	tool_short_drama_prompt_generator_how_item_1:
		'ページ表示時にサンプルが自動実行済み（サンプルを読み込む）。',
	tool_short_drama_prompt_generator_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_short_drama_prompt_generator_how_item_3:
		'任意：Turnstile 完了後、Cloudflare Workers AI で拡張/推敲。',
	tool_short_drama_prompt_generator_how_item_4:
		'コピー/ダウンロードし、ChatGPT/Gemini/Claude/DeepSeek に貼り付け。',
	tool_short_drama_prompt_generator_how_title:
		'使い方',
	tool_short_drama_prompt_generator_load_sample:
		'サンプルを読み込む',
	tool_short_drama_prompt_generator_platforms_lead:
		'ChatGPT、Gemini、Claude、DeepSeek 向け — 完成 Prompt を任意のチャット UI に貼り付け。',
	tool_short_drama_prompt_generator_result_label:
		'Prompt 出力',
	tool_short_drama_prompt_generator_rules_body:
		'ショートドラマPromptジェネレーター：既定ローカル；任意 Cloudflare AI はレート制限＋Turnstile。',
	tool_short_drama_prompt_generator_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_short_drama_prompt_generator_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_short_drama_prompt_generator_rules_item_3:
		'任意 Cloudflare AI はローカルを置き換えない — コピー前に確認。',
	tool_short_drama_prompt_generator_rules_item_4:
		'This tool assembles text only; it does not run short drama prompt generator engines or call chat APIs locally.',
	tool_short_drama_prompt_generator_rules_title:
		'知っておくルール',
	tool_short_drama_prompt_generator_sec_constraints:
		'Constraints',
	tool_short_drama_prompt_generator_sec_output:
		'Output format',
	tool_short_drama_prompt_generator_sec_role:
		'Role',
	tool_short_drama_prompt_generator_sec_task:
		'Task',
	tool_short_drama_prompt_generator_status_copied:
		'クリップボードにコピーしました。',
	tool_short_drama_prompt_generator_status_done:
		'Prompt 準備完了。',
	tool_short_drama_prompt_generator_status_working:
		'Prompt を作成中…',
	tool_short_drama_prompt_generator_title:
		'ショートドラマPromptジェネレーター — ローカル + オプションAI',
	tool_short_drama_prompt_generator_usecase_1:
		'ChatGPT/Gemini/Claude/DeepSeek 用に ショートドラマPromptジェネレーター ブリーフをチーム共有。',
	tool_short_drama_prompt_generator_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_short_drama_prompt_generator_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_short_drama_prompt_generator_usecase_4:
		'機密下書きはローカル — 同意後のみ AI。',
	tool_short_drama_prompt_generator_usecases_title:
		'向いている用途',
};

export default ja;
