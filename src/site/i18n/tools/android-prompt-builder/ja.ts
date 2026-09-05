/**
 * i18n tool shard (android-prompt-builder / ja)。
 * 日本語の検索語：「Android プロンプト 生成」「ChatGPT 指示文 Android 開発」。主要語は H1、次要語（Kotlin スタック・Compose・Gradle・minSdk・JSON 出力）は description / FAQ / 活用場面へ。
 * 事実境界：既定はブラウザ内で組み立て（通信なし）。任意の拡張・仕上げは下書きを Cloudflare Workers AI に送り（Turnstile 必須・回数制限）、返答は結果欄を丸ごと置き換える。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_android_prompt_builder_article:
		'Android の実装依頼を、そのまま貼れるプロンプトにまとめるページです。機能仕様、Kotlin の技術スタック、Compose の画面構成、Gradle の制約を書き込むと、ブラウザ内で Markdown または JSON に整形します。既定では通信しません。「AI で拡張」または「AI で仕上げ」を押したときだけ、現在の下書きが Cloudflare Workers AI に送られます（Turnstile の通過が必要で、利用回数に上限があります）。',
	tool_android_prompt_builder_build:
		'プロンプトを作成',
	tool_android_prompt_builder_clear:
		'クリア',
	tool_android_prompt_builder_copy:
		'コピー',
	tool_android_prompt_builder_desc:
		'Android プロンプト生成ツール：機能仕様・Kotlin スタック・Compose 画面・Gradle 制約を入れると、ブラウザ内で Markdown か JSON に整形します。AI 拡張は任意です。',
	tool_android_prompt_builder_description:
		'Android 開発の依頼を、そのまま貼れるプロンプトに整えます。機能仕様、Kotlin 2.0 と Jetpack Compose のスタック、画面構成、Gradle の制約を入力すると、ブラウザ内で Role / Task / Constraints / Output の順に Markdown へ整形（JSON にも切替可）。例：「オフライン閲覧リスト＋全文検索＋スワイプ退避」は minSdk 26 付きのタスクになります。「見本を読み込む」で既定の入力が入り、物足りなければ任意の AI 拡張（Cloudflare Workers AI、Turnstile 必須・回数制限あり）を使えます。',
	tool_android_prompt_builder_download:
		'ダウンロード',
	tool_android_prompt_builder_empty:
		'少なくとも 1 つの項目を入力してください。',
	tool_android_prompt_builder_example:
		'入力：機能＝オフライン閲覧リスト（共有シートから保存、全文検索、スワイプ退避と取り消し）／スタック＝Kotlin 2.0、Jetpack Compose、Room FTS4、Hilt／Compose＝日付固定ヘッダー付き LazyColumn と SwipeToDismissBox／Gradle＝minSdk 26、targetSdk 35、:core:data 分離。出力（Markdown）：## Role に上級 Android エンジニアの役割、## Task に各項目が 1 行ずつ並びます。',
	tool_android_prompt_builder_example_title:
		'入出力の例',
	tool_android_prompt_builder_faq_a1:
		'既定では送信しません。入力と「プロンプトを作成」はこのタブ内だけで完結し、通信は発生しません。下書きが外に出るのは「AI で拡張」または「AI で仕上げ」を押したときだけで、送り先は Cloudflare Workers AI です。当サイトのサーバーから OpenAI、Google、Anthropic、DeepSeek へ転送することはありません。',
	tool_android_prompt_builder_faq_a2:
		'呼びません。ローカル生成は入力内容を Role / Task / Constraints / Output に並べ替えるだけです。任意の AI は Turnstile 通過後に Cloudflare Workers AI を使い、ChatGPT・Gemini・Claude・DeepSeek の API は経由しません。',
	tool_android_prompt_builder_faq_a3:
		'プロンプトテンプレート作成ツールは、話題を問わない汎用の 4 ブロック（Role / Task / Constraints / Output）を用意します。このページは項目自体が Android 案件向けで、機能仕様・Kotlin スタック・Compose 画面・minSdk と Gradle のモジュール構成を書く形になっており、見本と注意点もこの場面に合わせています。',
	tool_android_prompt_builder_faq_a4:
		'必要です。「AI で拡張」「AI で仕上げ」の前に、AI パネルの Turnstile を通してください。有効なトークンがないとボタンはエラーを返しますが、ローカル生成はそのまま使えます。',
	tool_android_prompt_builder_faq_a5:
		'できます。出力形式を JSON にすると、各項目の原文と組み立て済みのプロンプト本文が同時に出力され、テストや設定パイプラインに流し込めます。',
	tool_android_prompt_builder_faq_a6:
		'使えます。出力はプレーンテキストなので、コピーして ChatGPT・Gemini・Claude・DeepSeek の入力欄に貼るだけです。このページが代わりに API を呼ぶことはありません。',
	tool_android_prompt_builder_faq_q1:
		'入力した内容はアップロードされますか？',
	tool_android_prompt_builder_faq_q2:
		'ChatGPT などのモデル API を呼び出しますか？',
	tool_android_prompt_builder_faq_q3:
		'プロンプトテンプレート作成ツールとの違いは？',
	tool_android_prompt_builder_faq_q4:
		'任意の AI に Turnstile が必要な理由は？',
	tool_android_prompt_builder_faq_q5:
		'JSON で書き出せますか？',
	tool_android_prompt_builder_faq_q6:
		'ChatGPT・Gemini・Claude・DeepSeek で使えますか？',
	tool_android_prompt_builder_faq_q7:
		'ローカル生成と任意の Cloudflare AI はどう違いますか？',
	tool_android_prompt_builder_faq_a7:
		'ローカル生成は入力を並べ替えるだけで、通信も回数制限もありません。任意の拡張・仕上げは下書きを Cloudflare Workers AI に送り（Turnstile 必須、利用上限あり）、返ってきた文章が結果欄を丸ごと置き換えます。コピーする前に必ず読み直してください。失敗したときや上限に達したときは、ローカル生成を続けてください。',
	tool_android_prompt_builder_ai_expand:
		'AI で拡張',
	tool_android_prompt_builder_ai_polish:
		'AI で仕上げ',
	tool_android_prompt_builder_ai_panel_label:
		'任意の Cloudflare AI（Turnstile）',
	tool_android_prompt_builder_ai_consent_title:
		'下書きを Cloudflare Workers AI に送りますか？',
	tool_android_prompt_builder_ai_consent_body:
		'任意の操作です。現在の下書きを推論のために Cloudflare Workers AI へ送ります。当サイトのサーバーから OpenAI、Google、Anthropic、DeepSeek へ渡すことはありません。AI を使わなくても、ブラウザ内での組み立てはそのまま使えます。',
	tool_android_prompt_builder_ai_consent_ok:
		'続行',
	tool_android_prompt_builder_ai_consent_cancel:
		'キャンセル',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI が処理中…',
	tool_android_prompt_builder_ai_done:
		'AI の文章で結果欄を置き換えました。コピー前に確認してください。',
	tool_android_prompt_builder_ai_err_generic:
		'AI に失敗しました。結果欄は変わっていません。',
	tool_android_prompt_builder_ai_err_rate:
		'AI の利用上限に達しました。ローカル生成を使うか、翌日（UTC）に再試行してください。',
	tool_android_prompt_builder_ai_err_turnstile:
		'AI を使う前に Turnstile を通してください。',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'出力形式',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'機能 / 仕様',
	tool_android_prompt_builder_feature_spec_ph:
		'例：オフライン閲覧リスト＋全文検索…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / 技術スタック',
	tool_android_prompt_builder_kotlin_stack_ph:
		'例：Kotlin 2.0、Jetpack Compose、Room、Hilt…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / 画面',
	tool_android_prompt_builder_compose_ui_ph:
		'例：日付固定ヘッダー付き LazyColumn…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / 制約',
	tool_android_prompt_builder_gradle_constraints_ph:
		'例：minSdk 26、targetSdk 35、:core:data 分離…',
	tool_android_prompt_builder_how_body:
		'4 つの項目を埋めると、ブラウザ内で Markdown（または JSON）に整形されます。もっと書き足したいときだけ Cloudflare AI に拡張させ、最後に ChatGPT・Gemini・Claude・DeepSeek へ貼ってください。',
	tool_android_prompt_builder_how_item_1:
		'「見本を読み込む」を押すと既定の入力が入り、プロンプトが 1 本できます。そこから書き換えてください。',
	tool_android_prompt_builder_how_item_2:
		'機能・Kotlin スタック・Compose・Gradle を書き換えて「プロンプトを作成」を押します。構造化して渡すなら JSON に切り替えます。',
	tool_android_prompt_builder_how_item_3:
		'任意：Turnstile を通してから「AI で拡張」または「AI で仕上げ」を押すと、返ってきた文章が結果欄を置き換えます。',
	tool_android_prompt_builder_how_item_4:
		'結果をコピーまたはダウンロードし、ChatGPT・Gemini・Claude・DeepSeek に貼って質問します。',
	tool_android_prompt_builder_how_title:
		'使い方',
	tool_android_prompt_builder_load_sample:
		'見本を読み込む',
	tool_android_prompt_builder_platforms_lead:
		'出力はプレーンテキストなので、ChatGPT・Gemini・Claude・DeepSeek のどれにでもそのまま貼れます。',
	tool_android_prompt_builder_result_label:
		'プロンプト出力',
	tool_android_prompt_builder_rules_body:
		'このページは依頼文を整えるだけで、コードのコンパイルも Gradle の実行もしません。任意の AI には利用上限があり、Turnstile の通過が必要です。',
	tool_android_prompt_builder_rules_item_1:
		'4 つの項目は Markdown の Role・Task・Constraints・Output に分かれて入ります。',
	tool_android_prompt_builder_rules_item_2:
		'既定の出力は Markdown。同じ結果欄で JSON に切り替えると、項目の原文と完成した本文が並びます。',
	tool_android_prompt_builder_rules_item_3:
		'任意の Cloudflare AI はローカル生成の代わりではありません。返答は結果欄を丸ごと置き換えるので、コピー前に確認してください。',
	tool_android_prompt_builder_rules_item_4:
		'このツールは文章を組み立てるだけで、Kotlin のビルドや Gradle の実行、チャット API の代理呼び出しはしません。',
	tool_android_prompt_builder_rules_title:
		'知っておきたい制限',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'クリップボードにコピーしました。',
	tool_android_prompt_builder_status_done:
		'プロンプトができました。',
	tool_android_prompt_builder_status_working:
		'プロンプトを組み立て中…',
	tool_android_prompt_builder_title:
		'Android プロンプト生成ツール — ブラウザ内で作成、AI 拡張は任意',
	tool_android_prompt_builder_usecase_1:
		'スプリント会議で口頭に出た Android の要件を、チャットに貼れるプロンプトとしてまとめる。',
	tool_android_prompt_builder_usecase_2:
		'JSON で書き出して回帰テストや設定パイプラインに項目を渡し、必要なら Cloudflare AI で拡張する。',
	tool_android_prompt_builder_usecase_3:
		'Android 固有の項目が不要で汎用の 4 ブロックで足りるときは、プロンプトテンプレート作成ツールに切り替える。',
	tool_android_prompt_builder_usecase_4:
		'社内向けの機能説明をまずブラウザ内で仕上げ、外に出せると判断してから任意の AI を使う。',
	tool_android_prompt_builder_usecases_title:
		'こんなときに',
};

export default ja;
