/**
 * i18n tool shard (short-drama-prompt-generator / ja).
 * 日本語の検索語（縦型 ショートドラマ プロンプト、話数の掴み、引き、9:16 焼き込み字幕、JSON 出力）に合わせて書き直し。
 * 主要語は H1、副次語は description・FAQ・使いどころへ。
 * 事実の境界：既定はブラウザー内で項目を並べるだけ。「AI で加筆」「AI で整える」を押したときだけ
 * 現在の下書きを Cloudflare Workers AI に送る（Turnstile 必須・上限あり）。動画は作らない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'話数と一話の長さ、冒頭の掴み、各話の終わりに置く引き、縦型の仕様、ジャンルを入れると、このページがブラウザー内で並べ替え、そのままモデルに渡せるプロンプトを Markdown か JSON で書き出します。ChatGPT・Gemini・Claude・DeepSeek に貼れば、話ごとの区切りで書き進められます。既定では送信なし。「AI で加筆」「AI で整える」を押したときだけ、Turnstile を通してから下書きを Cloudflare Workers AI に送ります。ここで作るのは文章で、動画ではありません。',
	tool_short_drama_prompt_generator_build:
		'プロンプトを作る',
	tool_short_drama_prompt_generator_clear:
		'消す',
	tool_short_drama_prompt_generator_copy:
		'コピー',
	tool_short_drama_prompt_generator_desc:
		'縦型ショートドラマのプロンプト作成ツール。話数・掴み・引き・9:16 の仕様をブラウザー内で Markdown／JSON に整理。Cloudflare AI での加筆は任意（Turnstile 必須）。',
	tool_short_drama_prompt_generator_description:
		'縦型ショートドラマのプロンプト作成ツール：話数と一話の長さ、最初の二秒で効かせる掴み、各話の終わりに置く引き、縦型の仕様、ジャンルをそれぞれ入れると、ページが Role・Task・Constraints・Output に振り分け、ChatGPT・Gemini・Claude・DeepSeek が話ごとのテンポで書けるようにします。既定は Markdown、話数管理用に JSON も選べます。開いた時点で「12 話 × 75 秒・職場の秘密」の作例が動いた状態です。掴みが弱いときは、任意の加筆／整えで下書きを Cloudflare Workers AI へ（Turnstile 必須・上限あり）。',
	tool_short_drama_prompt_generator_download:
		'ダウンロード',
	tool_short_drama_prompt_generator_empty:
		'どれか一つは入力してからプロンプトを作ってください。',
	tool_short_drama_prompt_generator_example:
		'入力：話数＝12 話 × 75 秒／掴み＝インターンが給与情報の流出を暴くと、社長が十年前の親権をめぐる留守電の声に気づく／引き＝第 6 話は社長が留守電を再生途中で消すところで終わり、第 7 話はエレベーターの無言のにらみ合いから始まる／縦型の仕様＝9:16、焼き込み字幕、最初の二秒で指を止めさせる冒頭。出力（Markdown）：## Task に Episodes、Hook、Cliffhanger、Vertical / Format、Genre が並び、縦型連続再生向けのプロンプトになります。',
	tool_short_drama_prompt_generator_example_title:
		'入力と出力の例',
	tool_short_drama_prompt_generator_faq_a1:
		'並べ替えはこのタブの中で終わるので、既定では何も送りません。送信が発生するのは「AI で加筆」「AI で整える」を押したときだけで、宛先は Cloudflare Workers AI です。当サイトのサーバーから OpenAI・Google・Anthropic・DeepSeek へ転送することはありません。',
	tool_short_drama_prompt_generator_faq_a2:
		'ローカル動作ではモデルを一切呼びません。話数・掴み・引き・縦型の仕様・ジャンルを Role・Task・Constraints・Output に振り分けているだけです。加筆と整えは Turnstile を通したうえで Cloudflare Workers AI を使い、当サイトのサーバーから ChatGPT・Gemini・Claude・DeepSeek の API を呼ぶことはありません。',
	tool_short_drama_prompt_generator_faq_a3:
		'プロンプトテンプレート作成ツールは題材を問わない四段構成のひな型を返します。こちらの項目は縦型連続ドラマのもの（話数と長さ・掴み・引き・縦型の仕様・ジャンル）で、開いた時点で作例が入り、話ごとに見る形式でつまずきやすい点だけを注意書きにしています。',
	tool_short_drama_prompt_generator_faq_a4:
		'Turnstile は自動スクリプトを弾いて、無料の枠を人の利用に残すためのものです。加筆や整えを押す前に AI 欄で確認を済ませてください。有効なトークンがないとそのボタンはエラーになりますが、ブラウザー内での並べ替えは変わらず使えます。',
	tool_short_drama_prompt_generator_faq_a5:
		'できます。JSON に切り替えると、同じ出力欄に項目化したデータと組み立て済みのプロンプト本文が並ぶので、各話を表に残して掴みと引きの手が重複していないか見比べられます。',
	tool_short_drama_prompt_generator_faq_a6:
		'使えます。出力をコピーして好きなチャット欄に貼ってください。このページは話ごとの割り振りを整えるだけで API を呼ばないため、サービスごとに別 URL を用意していません。',
	tool_short_drama_prompt_generator_faq_q1:
		'入力した筋書きはどこかに送信されますか',
	tool_short_drama_prompt_generator_faq_q2:
		'ChatGPT などのモデル API を呼びますか',
	tool_short_drama_prompt_generator_faq_q3:
		'プロンプトテンプレート作成ツールとの違いは何ですか',
	tool_short_drama_prompt_generator_faq_q4:
		'AI を使うのに Turnstile が必要なのはなぜですか',
	tool_short_drama_prompt_generator_faq_q5:
		'JSON で受け取れますか',
	tool_short_drama_prompt_generator_faq_q6:
		'ChatGPT・Gemini・Claude・DeepSeek で使えますか',
	tool_short_drama_prompt_generator_faq_q7:
		'ローカル動作と任意の Cloudflare AI はどう違いますか',
	tool_short_drama_prompt_generator_faq_a7:
		'ローカル動作はこのタブ内だけで完結し、ブラウザーから出ません。加筆や整えは現在の下書きを Cloudflare Workers AI に送り（Turnstile 必須、回数と一日あたりの上限あり）、返ってきた文章はそのまま全文が出力欄に書き込まれて、表示していた下書きを上書きします。書き換えで引きの並びが崩れないよう、コピーする前に読み直してください。失敗したときや上限に達したときは、ローカル動作のまま続けられます。',
	tool_short_drama_prompt_generator_ai_expand:
		'AI で加筆',
	tool_short_drama_prompt_generator_ai_polish:
		'AI で整える',
	tool_short_drama_prompt_generator_ai_panel_label:
		'任意：Cloudflare AI（Turnstile 必須）',
	tool_short_drama_prompt_generator_ai_consent_title:
		'下書きを Cloudflare Workers AI に送りますか',
	tool_short_drama_prompt_generator_ai_consent_body:
		'この手順は任意です。いま入力欄にある下書きを Cloudflare Workers AI に送って推論します。当サイトのサーバーから OpenAI・Google・Anthropic・DeepSeek へ転送することはありません。AI を使わなくても、プロンプトはブラウザー内で組み立てられます。',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'続ける',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'やめる',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI が処理しています…',
	tool_short_drama_prompt_generator_ai_done:
		'AI の文章を全文そのまま出力欄に書き込みました。コピーする前に確認してください。',
	tool_short_drama_prompt_generator_ai_err_generic:
		'今回は AI が応答しませんでした。出力欄の内容はそのままです。',
	tool_short_drama_prompt_generator_ai_err_rate:
		'AI の上限に達しました。ここでの組み立てを続けるか、UTC の翌日に試してください。',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'AI を使う前に Turnstile の確認を済ませてください。',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'出力形式',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'話数と長さ',
	tool_short_drama_prompt_generator_episodes_ph:
		'例：12 話 × 75 秒…',
	tool_short_drama_prompt_generator_hook_label:
		'冒頭の掴み',
	tool_short_drama_prompt_generator_hook_ph:
		'例：インターンが給与情報の流出を暴く…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'各話の引き',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'例：第 6 話は留守電を消すところで終わる…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'縦型の仕様',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'例：9:16、焼き込み字幕、冒頭 2 秒で掴む…',
	tool_short_drama_prompt_generator_genre_label:
		'ジャンル',
	tool_short_drama_prompt_generator_genre_ph:
		'例：職場もの＋家族の秘密…',

	tool_short_drama_prompt_generator_how_body:
		'話数・掴み・引きを埋めてプロンプトを作り、ChatGPT・Gemini・Claude・DeepSeek に貼って話ごとに書き進める流れです。掴みが弱いときは任意の Cloudflare AI で加筆・整えます。',
	tool_short_drama_prompt_generator_how_item_1:
		'「サンプルを読み込む」でデフォルトのプリセットを入れる。',
	tool_short_drama_prompt_generator_how_item_2:
		'話数と長さ・掴み・引き・縦型の仕様・ジャンルを直して「プロンプトを作る」を押します。項目ごとに書き出したいときは JSON へ。',
	tool_short_drama_prompt_generator_how_item_3:
		'任意：AI 欄で Turnstile を済ませ、「AI で加筆」か「AI で整える」を押すと、返ってきた文章が出力欄に入ります。',
	tool_short_drama_prompt_generator_how_item_4:
		'コピーまたはダウンロードして ChatGPT・Gemini・Claude・DeepSeek に貼り、この話数割りのまま続きを書かせます。',
	tool_short_drama_prompt_generator_how_title:
		'使い方',
	tool_short_drama_prompt_generator_load_sample:
		'作例を読み込む',
	tool_short_drama_prompt_generator_platforms_lead:
		'出力はそのまま ChatGPT・Gemini・Claude・DeepSeek の入力欄に貼れます。',
	tool_short_drama_prompt_generator_result_label:
		'出来上がったプロンプト',
	tool_short_drama_prompt_generator_rules_body:
		'縦型で続けて見る前提の並びです。話数と長さで容れ物を決め、掴みで最初の二秒に指を止めさせ、引きで次の話へ送り、縦型の仕様で画面比と字幕を指定します。既定はブラウザー内での組み立て。任意の AI は利用回数に上限があり、Turnstile が必要です。',
	tool_short_drama_prompt_generator_rules_item_1:
		'入力欄の項目は、Markdown の「役割・タスク・制約・出力形式」のいずれかに振り分けられます。',
	tool_short_drama_prompt_generator_rules_item_2:
		'既定の書き出しは Markdown。JSON は同じ出力欄の切り替えボタンです。',
	tool_short_drama_prompt_generator_rules_item_3:
		'任意の AI は一手間を足すだけで、置き換えではありません。ローカル動作はいつでも使え、AI の文章は出力欄を全部入れ替えるので、コピー前に読み直してください。',
	tool_short_drama_prompt_generator_rules_item_4:
		'このページが作るのは文章だけです。動画は生成せず、ブラウザー内でモデルやチャット API を動かすこともありません。',
	tool_short_drama_prompt_generator_rules_title:
		'できること・できないこと',
	tool_short_drama_prompt_generator_sec_constraints:
		'制約',
	tool_short_drama_prompt_generator_sec_output:
		'出力形式',
	tool_short_drama_prompt_generator_sec_role:
		'役割',
	tool_short_drama_prompt_generator_sec_task:
		'タスク',
	tool_short_drama_prompt_generator_status_copied:
		'クリップボードにコピーしました。',
	tool_short_drama_prompt_generator_status_done:
		'プロンプトができました。',
	tool_short_drama_prompt_generator_status_working:
		'組み立てています…',
	tool_short_drama_prompt_generator_title:
		'縦型ショートドラマのプロンプト作成ツール — 掴みと引きをブラウザー内で',
	tool_short_drama_prompt_generator_usecase_1:
		'打ち合わせ前に話数・掴み・各話の引きを一つのプロンプトにまとめ、ChatGPT・Gemini・Claude・DeepSeek にそのまま貼る。',
	tool_short_drama_prompt_generator_usecase_2:
		'JSON を書き出し、各話の掴みと引きを表の項目として残して、同じ手が続いていないか確かめる。',
	tool_short_drama_prompt_generator_usecase_3:
		'縦型連続ドラマの項目ではなく題材を問わない四段構成のひな型が欲しいときは、プロンプトテンプレート作成ツールを使う。',
	tool_short_drama_prompt_generator_usecase_4:
		'配信前の企画はローカル動作だけで進める。確認ダイアログに同意しない限り、文章はブラウザーから出ません。',
	tool_short_drama_prompt_generator_usecases_title:
		'こんなときに',
};

export default ja;
