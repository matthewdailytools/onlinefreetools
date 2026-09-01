/**
 * i18n tool shard (android-prompt-builder / ja).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_android_prompt_builder_article:
		'このページで Android Promptビルダー 用 Prompt を作成。項目入力後 Markdown/JSON を ChatGPT/Gemini/Claude/DeepSeek へ。既定ローカル；任意 Expand/Polish は Cloudflare Workers AI（Turnstile）。',
	tool_android_prompt_builder_build:
		'Prompt を作成',
	tool_android_prompt_builder_clear:
		'クリア',
	tool_android_prompt_builder_copy:
		'コピー',
	tool_android_prompt_builder_desc:
		'Android Promptビルダー — ローカル既定、任意 Cloudflare AI 拡張/推敲（Turnstile）；Markdown/JSON は端末内。',
	tool_android_prompt_builder_description:
		'手順と例：Android Promptビルダー — ローカル + オプションAI（ChatGPT/Gemini/Claude/DeepSeek）：既定はブラウザ内ローカル組み立て、任意で Cloudflare Workers AI Expand/Polish（Turnstile 必須・レート制限）。初回表示でサンプル。Markdown 既定。AI 未使用時は端末外に出ません。',
	tool_android_prompt_builder_download:
		'ダウンロード',
	tool_android_prompt_builder_empty:
		'作成前に少なくとも1項目を入力してください。',
	tool_android_prompt_builder_example:
		'入力：Feature = オフライン読書リスト + FTS；Stack = Kotlin 2.0, Compose, Room FTS4；Gradle = minSdk 26。出力（Markdown）：## Task → Feature / Kotlin / Compose / Gradle。',
	tool_android_prompt_builder_example_title:
		'例',
	tool_android_prompt_builder_faq_a1:
		'既定はこのタブ内ローカル。任意 Expand/Polish はそのクリック分のみ Cloudflare Workers AI へ。',
	tool_android_prompt_builder_faq_a2:
		'ローカルはこのタブのみ。任意 AI は Turnstile 後 Cloudflare Workers AI — チャット API は呼びません。',
	tool_android_prompt_builder_faq_a3:
		'Promptテンプレートビルダー covers generic Role/Task/Constraints/Output templates. This page focuses on android prompt builder fields with a dedicated sample and rules for this scenario.',
	tool_android_prompt_builder_faq_a4:
		'はい。Expand/Polish 前に Turnstile を完了してください。',
	tool_android_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_android_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_android_prompt_builder_faq_q1:
		'Is my prompt uploaded?',
	tool_android_prompt_builder_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_android_prompt_builder_faq_q3:
		'How is this different from Promptテンプレートビルダー?',
	tool_android_prompt_builder_faq_q4:
		'任意 AI に Turnstile が必要な理由は？',
	tool_android_prompt_builder_faq_q5:
		'Can I get JSON output?',
	tool_android_prompt_builder_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_android_prompt_builder_faq_q7:
		'ローカルと任意 Cloudflare AI の違いは？',
	tool_android_prompt_builder_faq_a7:
		'ローカルはこのタブのみ非アップロード。任意 Expand/Polish は Cloudflare Workers AI（Turnstile・制限）。',
	tool_android_prompt_builder_ai_expand:
		'AI で拡張',
	tool_android_prompt_builder_ai_polish:
		'AI で推敲',
	tool_android_prompt_builder_ai_panel_label:
		'任意 Cloudflare AI（Turnstile）',
	tool_android_prompt_builder_ai_consent_title:
		'Cloudflare Workers AI に送信しますか？',
	tool_android_prompt_builder_ai_consent_body:
		'任意のステップで下書きを Cloudflare Workers AI に送ります。当サーバーから OpenAI 等には送りません。',
	tool_android_prompt_builder_ai_consent_ok:
		'続行',
	tool_android_prompt_builder_ai_consent_cancel:
		'キャンセル',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI 処理中…',
	tool_android_prompt_builder_ai_done:
		'AI 提案を適用しました。コピー前に確認してください。',
	tool_android_prompt_builder_ai_err_generic:
		'AI 失敗。ローカル Prompt は変更されていません。',
	tool_android_prompt_builder_ai_err_rate:
		'AI クォータ到達。ローカルモードか明日（UTC）再試行。',
	tool_android_prompt_builder_ai_err_turnstile:
		'AI 利用前に Turnstile を完了してください。',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'出力形式',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'機能 / 仕様',
	tool_android_prompt_builder_feature_spec_ph:
		'Sample feature spec…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / Stack',
	tool_android_prompt_builder_kotlin_stack_ph:
		'Sample kotlin stack…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / Ui',
	tool_android_prompt_builder_compose_ui_ph:
		'Sample compose ui…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / Constraints',
	tool_android_prompt_builder_gradle_constraints_ph:
		'Sample gradle constraints…',
	tool_android_prompt_builder_how_body:
		'Android Promptビルダー の項目を入力し、ローカルで Prompt を組み立て、任意で Turnstile 後に Expand/Polish、ChatGPT/Gemini/Claude/DeepSeek へ貼り付け。',
	tool_android_prompt_builder_how_item_1:
		'ページ表示時にサンプルが自動実行済み（サンプルを読み込む）。',
	tool_android_prompt_builder_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_android_prompt_builder_how_item_3:
		'任意：Turnstile 完了後、Cloudflare Workers AI で拡張/推敲。',
	tool_android_prompt_builder_how_item_4:
		'コピー/ダウンロードし、ChatGPT/Gemini/Claude/DeepSeek に貼り付け。',
	tool_android_prompt_builder_how_title:
		'使い方',
	tool_android_prompt_builder_load_sample:
		'サンプルを読み込む',
	tool_android_prompt_builder_platforms_lead:
		'ChatGPT、Gemini、Claude、DeepSeek 向け — 完成 Prompt を任意のチャット UI に貼り付け。',
	tool_android_prompt_builder_result_label:
		'Prompt 出力',
	tool_android_prompt_builder_rules_body:
		'Android Promptビルダー：既定ローカル；任意 Cloudflare AI はレート制限＋Turnstile。',
	tool_android_prompt_builder_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_android_prompt_builder_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_android_prompt_builder_rules_item_3:
		'任意 Cloudflare AI はローカルを置き換えない — コピー前に確認。',
	tool_android_prompt_builder_rules_item_4:
		'This tool assembles text only; it does not run android prompt builder engines or call chat APIs locally.',
	tool_android_prompt_builder_rules_title:
		'知っておくルール',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output format',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'クリップボードにコピーしました。',
	tool_android_prompt_builder_status_done:
		'Prompt 準備完了。',
	tool_android_prompt_builder_status_working:
		'Prompt を作成中…',
	tool_android_prompt_builder_title:
		'Android Promptビルダー — ローカル + オプションAI',
	tool_android_prompt_builder_usecase_1:
		'ChatGPT/Gemini/Claude/DeepSeek 用に Android Promptビルダー ブリーフをチーム共有。',
	tool_android_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_android_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_android_prompt_builder_usecase_4:
		'機密下書きはローカル — 同意後のみ AI。',
	tool_android_prompt_builder_usecases_title:
		'向いている用途',
};

export default ja;
