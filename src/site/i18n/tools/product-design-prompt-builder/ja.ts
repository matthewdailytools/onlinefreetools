/**
 * i18n tool shard (product-design-prompt-builder / ja)。
 * 日本語の検索語：「プロダクトデザイン プロンプト 生成」「UX 要件 ChatGPT 指示文」。主要語は H1、次要語（ペルソナ・ワイヤーフレーム範囲・デザイントークン・WCAG AA・JSON 出力）は description / FAQ / 活用場面へ。
 * 事実境界：既定はブラウザ内で組み立て（通信なし）。任意の拡張・仕上げは下書きを Cloudflare Workers AI に送り（Turnstile 必須・回数制限）、返答は結果欄を丸ごと置き換える。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'プロダクトデザインの依頼を、そのまま貼れるプロンプトにまとめるページです。ターゲット像、解きたい課題、ワイヤーフレームの範囲、デザイントークンを書き込むと、ブラウザ内で Markdown または JSON に整形します。既定では通信しません。「AI で拡張」または「AI で仕上げ」を押したときだけ、現在の下書きが Cloudflare Workers AI に送られます（Turnstile の通過が必要で、利用回数に上限があります）。',
	tool_product_design_prompt_builder_build:
		'プロンプトを作成',
	tool_product_design_prompt_builder_clear:
		'クリア',
	tool_product_design_prompt_builder_copy:
		'コピー',
	tool_product_design_prompt_builder_desc:
		'プロダクトデザイン向けプロンプト生成ツール：ターゲット像・課題・ワイヤー範囲・デザイントークンを入れると、ブラウザ内で Markdown か JSON に整形します。AI 拡張は任意です。',
	tool_product_design_prompt_builder_description:
		'UX 要件を、そのまま貼れるプロンプトに整えます。ターゲット像、解きたい課題、ワイヤーフレームの範囲（何画面・どの画面）、デザイントークン（グリッド、主要色、コントラスト条件）を入力すると、ブラウザ内で Role / Task / Constraints / Output の順に Markdown へ整形（JSON にも切替可）。例：「共同養育の親が引き渡し予定を週単位で見たい」は 3 画面の範囲＋8pt グリッド＋WCAG AA という条件付きのタスクになります。「見本を読み込む」で既定の入力が入り、物足りなければ任意の AI 拡張（Cloudflare Workers AI、Turnstile 必須・回数制限あり）を使えます。',
	tool_product_design_prompt_builder_download:
		'ダウンロード',
	tool_product_design_prompt_builder_empty:
		'少なくとも 1 つの項目を入力してください。',
	tool_product_design_prompt_builder_example:
		'入力：ターゲット像＝週ごとに交代する共同養育の親（一方が予定を組み、他方が送迎、Android と iPhone が混在）／課題＝カレンダーが騒がしく、今週の引き渡しを一画面で見てメモも残したい、アカウント連携は強制しない／ワイヤー範囲＝ホームの週バー＋担当色の凡例、引き渡しチェックリスト付きの詳細シート、SMS ディープリンクでの招待の 3 画面／トークン＝8pt グリッド、主要色 #2563eb、確定済み引き渡しは #059669、キャプションは WCAG AA。出力（Markdown）：## Role にワイヤーフレーム簡報向けの UX プロンプトコーチ、## Task に各項目が 1 行ずつ並びます。',
	tool_product_design_prompt_builder_example_title:
		'入出力の例',
	tool_product_design_prompt_builder_faq_a1:
		'既定では送信しません。入力と「プロンプトを作成」はこのタブ内だけで完結し、通信は発生しません。下書きが外に出るのは「AI で拡張」または「AI で仕上げ」を押したときだけで、送り先は Cloudflare Workers AI です。当サイトのサーバーから OpenAI、Google、Anthropic、DeepSeek へ転送することはありません。',
	tool_product_design_prompt_builder_faq_a2:
		'呼びません。ローカル生成は入力内容を Role / Task / Constraints / Output に並べ替えるだけです。任意の AI は Turnstile 通過後に Cloudflare Workers AI を使い、ChatGPT・Gemini・Claude・DeepSeek の API は経由しません。',
	tool_product_design_prompt_builder_faq_a3:
		'プロンプトテンプレート作成ツールは、話題を問わない汎用の 4 ブロック（Role / Task / Constraints / Output）を用意します。このページは項目自体が UX 簡報向けで、ターゲット像・課題・ワイヤーが何画面か・守るべきデザイントークンとコントラストを書く形になっており、見本と注意点もこの場面に合わせています。',
	tool_product_design_prompt_builder_faq_a4:
		'必要です。「AI で拡張」「AI で仕上げ」の前に、AI パネルの Turnstile を通してください。有効なトークンがないとボタンはエラーを返しますが、ローカル生成はそのまま使えます。',
	tool_product_design_prompt_builder_faq_a5:
		'できます。出力形式を JSON にすると、各項目の原文と組み立て済みのプロンプト本文が同時に出力され、要件リポジトリやデザインレビューのひな形に残せます。',
	tool_product_design_prompt_builder_faq_a6:
		'使えます。出力はプレーンテキストなので、コピーして ChatGPT・Gemini・Claude・DeepSeek の入力欄に貼るだけです。このページが代わりに API を呼ぶことはありません。',
	tool_product_design_prompt_builder_faq_q1:
		'入力した内容はアップロードされますか？',
	tool_product_design_prompt_builder_faq_q2:
		'ChatGPT などのモデル API を呼び出しますか？',
	tool_product_design_prompt_builder_faq_q3:
		'プロンプトテンプレート作成ツールとの違いは？',
	tool_product_design_prompt_builder_faq_q4:
		'任意の AI に Turnstile が必要な理由は？',
	tool_product_design_prompt_builder_faq_q5:
		'JSON で書き出せますか？',
	tool_product_design_prompt_builder_faq_q6:
		'ChatGPT・Gemini・Claude・DeepSeek で使えますか？',
	tool_product_design_prompt_builder_faq_q7:
		'ローカル生成と任意の Cloudflare AI はどう違いますか？',
	tool_product_design_prompt_builder_faq_a7:
		'ローカル生成は入力を並べ替えるだけで、通信も回数制限もありません。任意の拡張・仕上げは下書きを Cloudflare Workers AI に送り（Turnstile 必須、利用上限あり）、返ってきた文章が結果欄を丸ごと置き換えます。コピーする前に必ず読み直してください。失敗したときや上限に達したときは、ローカル生成を続けてください。',
	tool_product_design_prompt_builder_ai_expand:
		'AI で拡張',
	tool_product_design_prompt_builder_ai_polish:
		'AI で仕上げ',
	tool_product_design_prompt_builder_ai_panel_label:
		'任意の Cloudflare AI（Turnstile）',
	tool_product_design_prompt_builder_ai_consent_title:
		'下書きを Cloudflare Workers AI に送りますか？',
	tool_product_design_prompt_builder_ai_consent_body:
		'任意の操作です。現在の下書きを推論のために Cloudflare Workers AI へ送ります。当サイトのサーバーから OpenAI、Google、Anthropic、DeepSeek へ渡すことはありません。AI を使わなくても、ブラウザ内での組み立てはそのまま使えます。',
	tool_product_design_prompt_builder_ai_consent_ok:
		'続行',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'キャンセル',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI が処理中…',
	tool_product_design_prompt_builder_ai_done:
		'AI の文章で結果欄を置き換えました。コピー前に確認してください。',
	tool_product_design_prompt_builder_ai_err_generic:
		'AI に失敗しました。結果欄は変わっていません。',
	tool_product_design_prompt_builder_ai_err_rate:
		'AI の利用上限に達しました。ローカル生成を使うか、翌日（UTC）に再試行してください。',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'AI を使う前に Turnstile を通してください。',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'出力形式',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'ターゲット像 / ペルソナ',
	tool_product_design_prompt_builder_persona_ph:
		'例：週ごとに交代する共同養育の親…',
	tool_product_design_prompt_builder_problem_label:
		'解きたい課題',
	tool_product_design_prompt_builder_problem_ph:
		'例：カレンダーが騒がしく今週分を一画面で見たい…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'ワイヤーフレーム / 範囲',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'例：週バー、詳細シート、SMS 招待の 3 画面…',
	tool_product_design_prompt_builder_design_tokens_label:
		'デザイン / トークン',
	tool_product_design_prompt_builder_design_tokens_ph:
		'例：8pt グリッド、主要色 #2563eb、WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'4 つの項目を埋めると、ブラウザ内で Markdown（または JSON）に整形されます。もっと書き足したいときだけ Cloudflare AI に拡張させ、最後に ChatGPT・Gemini・Claude・DeepSeek へ貼ってください。',
	tool_product_design_prompt_builder_how_item_1:
		'「見本を読み込む」を押すと既定の入力が入り、プロンプトが 1 本できます。そこから書き換えてください。',
	tool_product_design_prompt_builder_how_item_2:
		'ターゲット像・課題・ワイヤー範囲・デザイントークンを書き換えて「プロンプトを作成」を押します。構造化して渡すなら JSON に切り替えます。',
	tool_product_design_prompt_builder_how_item_3:
		'任意：Turnstile を通してから「AI で拡張」または「AI で仕上げ」を押すと、返ってきた文章が結果欄を置き換えます。',
	tool_product_design_prompt_builder_how_item_4:
		'結果をコピーまたはダウンロードし、ChatGPT・Gemini・Claude・DeepSeek に貼って相談します。',
	tool_product_design_prompt_builder_how_title:
		'使い方',
	tool_product_design_prompt_builder_load_sample:
		'見本を読み込む',
	tool_product_design_prompt_builder_platforms_lead:
		'出力はプレーンテキストなので、ChatGPT・Gemini・Claude・DeepSeek のどれにでもそのまま貼れます。',
	tool_product_design_prompt_builder_result_label:
		'プロンプト出力',
	tool_product_design_prompt_builder_rules_body:
		'このページは依頼文を整えるだけで、ワイヤーフレームを描いたり Figma ファイルを書き出したりはしません。任意の AI には利用上限があり、Turnstile の通過が必要です。',
	tool_product_design_prompt_builder_rules_item_1:
		'4 つの項目は Markdown の Role・Task・Constraints・Output に分かれて入ります。',
	tool_product_design_prompt_builder_rules_item_2:
		'既定の出力は Markdown。同じ結果欄で JSON に切り替えると、項目の原文と完成した本文が並びます。',
	tool_product_design_prompt_builder_rules_item_3:
		'任意の Cloudflare AI はローカル生成の代わりではありません。返答は結果欄を丸ごと置き換えるので、コピー前に確認してください。',
	tool_product_design_prompt_builder_rules_item_4:
		'このツールは文章を組み立てるだけで、画面を生成したり、あなたのデザインファイルを読んだり、チャット API を代理で呼んだりはしません。',
	tool_product_design_prompt_builder_rules_title:
		'知っておきたい制限',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'クリップボードにコピーしました。',
	tool_product_design_prompt_builder_status_done:
		'プロンプトができました。',
	tool_product_design_prompt_builder_status_working:
		'プロンプトを組み立て中…',
	tool_product_design_prompt_builder_title:
		'プロダクトデザイン向けプロンプト生成ツール — ブラウザ内で作成、AI 拡張は任意',
	tool_product_design_prompt_builder_usecase_1:
		'要件会議で口頭に出たデザインの狙いを、チャットに貼れるプロンプトとしてまとめる。',
	tool_product_design_prompt_builder_usecase_2:
		'JSON で書き出してターゲット像とトークンを要件リポジトリに残し、必要なら Cloudflare AI で拡張する。',
	tool_product_design_prompt_builder_usecase_3:
		'UX 固有の項目が不要で汎用の 4 ブロックで足りるときは、プロンプトテンプレート作成ツールに切り替える。',
	tool_product_design_prompt_builder_usecase_4:
		'未公表のプロダクト構想をまずブラウザ内で仕上げ、外に出せると判断してから任意の AI を使う。',
	tool_product_design_prompt_builder_usecases_title:
		'こんなときに',
};

export default ja;
