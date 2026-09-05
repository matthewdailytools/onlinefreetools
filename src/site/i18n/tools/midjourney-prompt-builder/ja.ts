/**
 * i18n tool shard (midjourney-prompt-builder / ja).
 * 日本語の検索語（Midjourney プロンプト 作成／書き方、--ar 指定、プロンプト JSON 出力）に合わせて書き直し。
 * 主要語は H1、副次語は description・FAQ・使いどころへ。
 * 事実の境界：既定はブラウザー内で文章を組み立てるだけ。「AI で加筆」「AI で整える」を押したときだけ
 * 現在の下書きを Cloudflare Workers AI に送る（Turnstile 必須・上限あり）。画像は生成せず、Midjourney も呼び出さない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Midjourney に投げる前のプロンプトをこのページで組み立てます。被写体・画風・光・画面比・MJ パラメーターを入れると、ブラウザー内で Markdown か JSON にまとめるので、そのまま ChatGPT・Gemini・Claude・DeepSeek に貼って続きを詰められます。ここで作るのは文章だけで、画像生成は行わず Midjourney も呼び出しません。既定では送信なし。「AI で加筆」「AI で整える」を押したときだけ、Turnstile を通してから下書きを Cloudflare Workers AI に送ります。',
	tool_midjourney_prompt_builder_build:
		'プロンプトを作る',
	tool_midjourney_prompt_builder_clear:
		'消す',
	tool_midjourney_prompt_builder_copy:
		'コピー',
	tool_midjourney_prompt_builder_desc:
		'Midjourney プロンプト作成ツール。被写体・画風・光・画面比を入れるとブラウザー内で Markdown／JSON に整形。Cloudflare AI での加筆は任意（Turnstile 必須）。',
	tool_midjourney_prompt_builder_description:
		'Midjourney プロンプト作成ツール：被写体・画風・光・画面比・MJ パラメーターを入れると、貼ればそのまま使える一行に組み立てます。画面比は --ar に置き換わり、バージョン未指定なら --v 6.1 を補います。既定は Markdown、スクリプト用に JSON も選べます。開いた時点で「苔の橋で抜刀する武士」の例が動いた状態です。描写を足したいときは、任意の加筆／整えで下書きを Cloudflare Workers AI へ（Turnstile 必須・上限あり）。出力は文章だけで、画像は作りません。',
	tool_midjourney_prompt_builder_download:
		'ダウンロード',
	tool_midjourney_prompt_builder_empty:
		'どれか一つは入力してからプロンプトを作ってください。',
	tool_midjourney_prompt_builder_example:
		'入力：被写体＝苔の生えた橋で抜刀する武士、雨の霧、遠くに鳥居／画風＝映画的な水墨、青灰と炭色、細かい粒子／光＝日の出の逆光と体積霧／画面比＝16:9／MJ パラメーター＝--v 6.1 --style raw --stylize 120 --chaos 8。出力（Markdown）：## Task に被写体・画風・光をつないだ Midjourney の一行が入り、末尾に --ar 16:9 が付きます。JSON に切り替えると同じ内容が項目ごとに出ます。',
	tool_midjourney_prompt_builder_example_title:
		'入力と出力の例',
	tool_midjourney_prompt_builder_faq_a1:
		'組み立てはこのタブの中で終わるので、既定では何も送りません。送信が発生するのは「AI で加筆」「AI で整える」を押したときだけで、宛先は Cloudflare Workers AI です。当サイトのサーバーから OpenAI・Google・Anthropic・DeepSeek へ転送することはありません。',
	tool_midjourney_prompt_builder_faq_a2:
		'ローカル動作ではモデルを一切呼びません。入力を Role・Task・Constraints・Output の四つに並べ替えているだけです。加筆と整えは Turnstile を通したうえで Cloudflare Workers AI を使い、当サイトのサーバーから ChatGPT・Gemini・Claude・DeepSeek の API を呼ぶことはありません。',
	tool_midjourney_prompt_builder_faq_a3:
		'プロンプトテンプレート作成ツールは題材を問わない四段構成のひな型を返します。こちらは項目が最初から Midjourney 向け（被写体・画風・光・画面比・パラメーター）で、開いた時点の作例と、この用途だけのパラメーター対応表が付きます。',
	tool_midjourney_prompt_builder_faq_a4:
		'Turnstile は自動スクリプトを弾いて、無料の枠を人の利用に残すためのものです。加筆や整えを押す前に AI 欄で確認を済ませてください。有効なトークンがないとそのボタンはエラーになりますが、ブラウザー内での組み立ては変わらず使えます。',
	tool_midjourney_prompt_builder_faq_a5:
		'できます。JSON に切り替えると、同じ出力欄に項目化したデータと組み立て済みのプロンプト本文が並ぶので、連続生成のスクリプトやテスト、設定ファイルにそのまま回せます。',
	tool_midjourney_prompt_builder_faq_a6:
		'使えます。出力をコピーして好きなチャット欄に貼るか、Midjourney に直接貼ってください。このページは文章を整えるだけで API を呼ばないため、サービスごとに別 URL を用意していません。',
	tool_midjourney_prompt_builder_faq_q1:
		'入力した内容はどこかに送信されますか',
	tool_midjourney_prompt_builder_faq_q2:
		'ChatGPT などのモデル API を呼びますか',
	tool_midjourney_prompt_builder_faq_q3:
		'プロンプトテンプレート作成ツールとの違いは何ですか',
	tool_midjourney_prompt_builder_faq_q4:
		'AI を使うのに Turnstile が必要なのはなぜですか',
	tool_midjourney_prompt_builder_faq_q5:
		'JSON で受け取れますか',
	tool_midjourney_prompt_builder_faq_q6:
		'ChatGPT・Gemini・Claude・DeepSeek で使えますか',
	tool_midjourney_prompt_builder_faq_q7:
		'ローカル動作と任意の Cloudflare AI はどう違いますか',
	tool_midjourney_prompt_builder_faq_a7:
		'ローカル動作はこのタブ内だけで完結し、ブラウザーから出ません。加筆や整えは現在の下書きを Cloudflare Workers AI に送り（Turnstile 必須、回数と一日あたりの上限あり）、返ってきた文章はそのまま全文が出力欄に書き込まれて、表示していた下書きを上書きします。コピーする前に必ず読み直してください。失敗したときや上限に達したときは、ローカル動作のまま続けられます。',
	tool_midjourney_prompt_builder_ai_expand:
		'AI で加筆',
	tool_midjourney_prompt_builder_ai_polish:
		'AI で整える',
	tool_midjourney_prompt_builder_ai_panel_label:
		'任意：Cloudflare AI（Turnstile 必須）',
	tool_midjourney_prompt_builder_ai_consent_title:
		'下書きを Cloudflare Workers AI に送りますか',
	tool_midjourney_prompt_builder_ai_consent_body:
		'この手順は任意です。いま入力欄にある下書きを Cloudflare Workers AI に送って推論します。当サイトのサーバーから OpenAI・Google・Anthropic・DeepSeek へ転送することはありません。AI を使わなくても、プロンプトはブラウザー内で組み立てられます。',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'続ける',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'やめる',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI が処理しています…',
	tool_midjourney_prompt_builder_ai_done:
		'AI の文章を全文そのまま出力欄に書き込みました。コピーする前に確認してください。',
	tool_midjourney_prompt_builder_ai_err_generic:
		'今回は AI が応答しませんでした。出力欄の内容はそのままです。',
	tool_midjourney_prompt_builder_ai_err_rate:
		'AI の上限に達しました。ここでの組み立てを続けるか、UTC の翌日に試してください。',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'AI を使う前に Turnstile の確認を済ませてください。',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'出力の形式',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'被写体',
	tool_midjourney_prompt_builder_subject_ph:
		'例：苔の橋で抜刀する武士…',
	tool_midjourney_prompt_builder_style_label:
		'画風',
	tool_midjourney_prompt_builder_style_ph:
		'例：映画的な水墨、青灰と炭色…',
	tool_midjourney_prompt_builder_lighting_label:
		'光',
	tool_midjourney_prompt_builder_lighting_ph:
		'例：日の出の逆光、体積霧…',
	tool_midjourney_prompt_builder_aspect_label:
		'画面比',
	tool_midjourney_prompt_builder_aspect_ph:
		'例：16:9、9:16、1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'MJ パラメーター',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'例：--v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Midjourney パラメーター対応表',
	tool_midjourney_prompt_builder_rules_table_ar:
		'画面比 → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'バージョン → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'画面比を入れると表のとおり --ar として行末に付き、パラメーターにバージョンがなければ --v 6.1 を補います。',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 正方形',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 横長',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 縦長',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'MJ v6 の既定バージョン',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'項目を埋めてプロンプトを作り、ChatGPT・Gemini・Claude・DeepSeek に貼るまでの流れです。描写が足りないときは任意の Cloudflare AI で加筆・整えます。',
	tool_midjourney_prompt_builder_how_item_1:
		'「サンプルを読み込む」でデフォルトのプリセットを入れる。',
	tool_midjourney_prompt_builder_how_item_2:
		'被写体・画風・光・画面比・パラメーターを直して「プロンプトを作る」を押します。項目ごとに書き出したいときは JSON へ。',
	tool_midjourney_prompt_builder_how_item_3:
		'任意：AI 欄で Turnstile を済ませ、「AI で加筆」か「AI で整える」を押すと、返ってきた文章が出力欄に入ります。',
	tool_midjourney_prompt_builder_how_item_4:
		'コピーまたはダウンロードして、ChatGPT・Gemini・Claude・DeepSeek で詰めるか、Midjourney にそのまま貼ります。',
	tool_midjourney_prompt_builder_how_title:
		'使い方',
	tool_midjourney_prompt_builder_load_sample:
		'作例を読み込む',
	tool_midjourney_prompt_builder_platforms_lead:
		'出力はそのまま ChatGPT・Gemini・Claude・DeepSeek の入力欄に貼れます。',
	tool_midjourney_prompt_builder_result_label:
		'出来上がったプロンプト',
	tool_midjourney_prompt_builder_rules_body:
		'パラメーターの置き換え方：画面比は下の表のとおり --ar になり、バージョン未記入なら --v 6.1 を補います。既定はブラウザー内での組み立て。任意の AI は利用回数に上限があり、Turnstile が必要です。',
	tool_midjourney_prompt_builder_rules_item_1:
		'入力欄の項目は、Markdown の Role・Task・Constraints・Output のいずれかに振り分けられます。',
	tool_midjourney_prompt_builder_rules_item_2:
		'既定の書き出しは Markdown。JSON は同じ出力欄の切り替えボタンです。',
	tool_midjourney_prompt_builder_rules_item_3:
		'任意の AI は一手間を足すだけで、置き換えではありません。ローカル動作はいつでも使え、AI の文章は出力欄を全部入れ替えるので、コピー前に読み直してください。',
	tool_midjourney_prompt_builder_rules_item_4:
		'このページが作るのは文章だけです。画像は生成せず、Midjourney やチャットの API も呼びません。',
	tool_midjourney_prompt_builder_rules_title:
		'できること・できないこと',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'クリップボードにコピーしました。',
	tool_midjourney_prompt_builder_status_done:
		'プロンプトができました。',
	tool_midjourney_prompt_builder_status_working:
		'組み立てています…',
	tool_midjourney_prompt_builder_title:
		'Midjourney プロンプト作成ツール — ブラウザー内で組み立て、AI は任意',
	tool_midjourney_prompt_builder_usecase_1:
		'チームのチャットにそのまま貼れる Midjourney プロンプトを渡し、パラメーターを口頭で伝える手間をなくす。',
	tool_midjourney_prompt_builder_usecase_2:
		'まとめて生成する前に JSON を書き出し、被写体・画風・画面比を自分のスクリプトや表の項目として持っておく。',
	tool_midjourney_prompt_builder_usecase_3:
		'画像ではなく題材を問わない四段構成のひな型が欲しいときは、プロンプトテンプレート作成ツールを使う。',
	tool_midjourney_prompt_builder_usecase_4:
		'未公開の案件の下書きはローカル動作だけで進める。確認ダイアログに同意しない限り、文章はブラウザーから出ません。',
	tool_midjourney_prompt_builder_usecases_title:
		'こんなときに',
};

export default ja;
