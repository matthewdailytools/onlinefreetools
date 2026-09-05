/**
 * i18n tool shard (film-prompt-builder / ja).
 * 日本語の検索語（映画 脚本 プロンプト、三幕構成、シーンリスト、プロンプト JSON 出力）に合わせて書き直し。
 * 主要語は H1、副次語は description・FAQ・使いどころへ。
 * 事実の境界：既定はブラウザー内で項目を並べるだけ。「AI で加筆」「AI で整える」を押したときだけ
 * 現在の下書きを Cloudflare Workers AI に送る（Turnstile 必須・上限あり）。脚本を代わりに書くページではない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_film_prompt_builder_article:
		'長編のログライン、三幕の流れ、シーンリスト、人物の変化を入れると、このページがブラウザー内で構成の整ったプロンプトに並べ替え、Markdown か JSON で書き出します。そのまま ChatGPT・Gemini・Claude・DeepSeek に貼れば、その構成の続きを書かせられます。既定では送信なし。「AI で加筆」「AI で整える」を押したときだけ、Turnstile を通してから下書きを Cloudflare Workers AI に送ります。',
	tool_film_prompt_builder_build:
		'プロンプトを作る',
	tool_film_prompt_builder_clear:
		'消す',
	tool_film_prompt_builder_copy:
		'コピー',
	tool_film_prompt_builder_desc:
		'映画脚本プロンプト作成ツール。ログライン・三幕・シーンリストをブラウザー内で Markdown／JSON に整理。Cloudflare AI での加筆は任意（Turnstile 必須）。',
	tool_film_prompt_builder_description:
		'映画脚本プロンプト作成ツール：ログライン、第一幕から第三幕、シーンリスト、人物の変化をそれぞれ入れると、ページが Role・Task・Constraints・Output に振り分け、ChatGPT・Gemini・Claude・DeepSeek にどの線で続けるかを伝えられる形にします。既定は Markdown、稿の管理用に JSON も選べます。開いた時点で「二台のフードトラックが 30 日だけ同じ厨房を使う」作例が動いた状態です。ある幕が薄いときは、任意の加筆／整えで下書きを Cloudflare Workers AI へ（Turnstile 必須・上限あり）。',
	tool_film_prompt_builder_download:
		'ダウンロード',
	tool_film_prompt_builder_empty:
		'どれか一つは入力してからプロンプトを作ってください。',
	tool_film_prompt_builder_example:
		'入力：ログライン＝許可証の記載ミスで、いがみ合う二台のフードトラックの店主が 30 日だけ同じ厨房を共有することになる／第二幕＝フェスの大盛況が、ブロガーがレシピの出どころを取り違えたことで崩れ、香辛料をめぐる家族の因縁が表に出る／シーンリスト＝番号付きの六場／人物の変化＝矜持 → 渋々の協働 → 条件を交渉できる共同経営者。出力（Markdown）：## Task に Logline、Act1–3、Scene / List、Character / Arc が順に並びます（開いた時点の作例と同じ内容）。',
	tool_film_prompt_builder_example_title:
		'入力と出力の例',
	tool_film_prompt_builder_faq_a1:
		'並べ替えはこのタブの中で終わるので、既定では何も送りません。送信が発生するのは「AI で加筆」「AI で整える」を押したときだけで、宛先は Cloudflare Workers AI です。当サイトのサーバーから OpenAI・Google・Anthropic・DeepSeek へ転送することはありません。',
	tool_film_prompt_builder_faq_a2:
		'ローカル動作ではモデルを一切呼びません。ログライン・三幕・シーンリスト・人物の変化を Role・Task・Constraints・Output に振り分けているだけです。加筆と整えは Turnstile を通したうえで Cloudflare Workers AI を使い、当サイトのサーバーから ChatGPT・Gemini・Claude・DeepSeek の API を呼ぶことはありません。',
	tool_film_prompt_builder_faq_a3:
		'プロンプトテンプレート作成ツールは題材を問わない四段構成のひな型を返します。こちらの項目は長編脚本のもの（ログライン・三幕・シーンリスト・人物の変化）で、開いた時点で三幕そろった作例が入り、この種の資料でつまずきやすい点だけを注意書きにしています。',
	tool_film_prompt_builder_faq_a4:
		'Turnstile は自動スクリプトを弾いて、無料の枠を人の利用に残すためのものです。加筆や整えを押す前に AI 欄で確認を済ませてください。有効なトークンがないとそのボタンはエラーになりますが、ブラウザー内での並べ替えは変わらず使えます。',
	tool_film_prompt_builder_faq_a5:
		'できます。JSON に切り替えると、同じ出力欄に項目化したデータと組み立て済みのプロンプト本文が並ぶので、稿ごとの三幕とシーンリストを表や版管理に残して見比べられます。',
	tool_film_prompt_builder_faq_a6:
		'使えます。出力をコピーして好きなチャット欄に貼ってください。このページは構成を整えるだけで API を呼ばないため、サービスごとに別 URL を用意していません。',
	tool_film_prompt_builder_faq_q1:
		'入力した脚本の内容はどこかに送信されますか',
	tool_film_prompt_builder_faq_q2:
		'ChatGPT などのモデル API を呼びますか',
	tool_film_prompt_builder_faq_q3:
		'プロンプトテンプレート作成ツールとの違いは何ですか',
	tool_film_prompt_builder_faq_q4:
		'AI を使うのに Turnstile が必要なのはなぜですか',
	tool_film_prompt_builder_faq_q5:
		'JSON で受け取れますか',
	tool_film_prompt_builder_faq_q6:
		'ChatGPT・Gemini・Claude・DeepSeek で使えますか',
	tool_film_prompt_builder_faq_q7:
		'ローカル動作と任意の Cloudflare AI はどう違いますか',
	tool_film_prompt_builder_faq_a7:
		'ローカル動作はこのタブ内だけで完結し、ブラウザーから出ません。加筆や整えは現在の下書きを Cloudflare Workers AI に送り（Turnstile 必須、回数と一日あたりの上限あり）、返ってきた文章はそのまま全文が出力欄に書き込まれて、表示していた下書きを上書きします。書き換えられた三幕が自分の稿を消してしまわないよう、コピーする前に読み直してください。失敗したときや上限に達したときは、ローカル動作のまま続けられます。',
	tool_film_prompt_builder_ai_expand:
		'AI で加筆',
	tool_film_prompt_builder_ai_polish:
		'AI で整える',
	tool_film_prompt_builder_ai_panel_label:
		'任意：Cloudflare AI（Turnstile 必須）',
	tool_film_prompt_builder_ai_consent_title:
		'下書きを Cloudflare Workers AI に送りますか',
	tool_film_prompt_builder_ai_consent_body:
		'この手順は任意です。いま入力欄にある下書きを Cloudflare Workers AI に送って推論します。当サイトのサーバーから OpenAI・Google・Anthropic・DeepSeek へ転送することはありません。AI を使わなくても、プロンプトはブラウザー内で組み立てられます。',
	tool_film_prompt_builder_ai_consent_ok:
		'続ける',
	tool_film_prompt_builder_ai_consent_cancel:
		'やめる',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI が処理しています…',
	tool_film_prompt_builder_ai_done:
		'AI の文章を全文そのまま出力欄に書き込みました。コピーする前に確認してください。',
	tool_film_prompt_builder_ai_err_generic:
		'今回は AI が応答しませんでした。出力欄の内容はそのままです。',
	tool_film_prompt_builder_ai_err_rate:
		'AI の上限に達しました。ここでの組み立てを続けるか、UTC の翌日に試してください。',
	tool_film_prompt_builder_ai_err_turnstile:
		'AI を使う前に Turnstile の確認を済ませてください。',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'出力の形式',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'ログライン',
	tool_film_prompt_builder_logline_ph:
		'例：いがみ合う二台のフードトラックが同じ厨房を使う…',
	tool_film_prompt_builder_act1_label:
		'第一幕',
	tool_film_prompt_builder_act1_ph:
		'例：もめごとの発端と、受け入れざるを得ない条件…',
	tool_film_prompt_builder_act2_label:
		'第二幕',
	tool_film_prompt_builder_act2_ph:
		'例：短い成功のあと収拾がつかなくなる…',
	tool_film_prompt_builder_act3_label:
		'第三幕',
	tool_film_prompt_builder_act3_ph:
		'例：正面からの対決と、代償のある折り合い…',
	tool_film_prompt_builder_scene_list_label:
		'シーンリスト',
	tool_film_prompt_builder_scene_list_ph:
		'例：1. 路地の駐車争い 2. 二重の衛生検査…',
	tool_film_prompt_builder_character_arc_label:
		'人物の変化',
	tool_film_prompt_builder_character_arc_ph:
		'例：矜持 → 渋々の協働 → 共同経営者…',

	tool_film_prompt_builder_how_body:
		'ログライン・三幕・シーンリストを埋めてプロンプトを作り、ChatGPT・Gemini・Claude・DeepSeek に貼って続きを書かせる流れです。ある幕が薄いときは任意の Cloudflare AI で加筆・整えます。',
	tool_film_prompt_builder_how_item_1:
		'「サンプルを読み込む」でデフォルトのプリセットを入れる。',
	tool_film_prompt_builder_how_item_2:
		'ログライン・三幕・シーンリスト・人物の変化を直して「プロンプトを作る」を押します。項目ごとに書き出したいときは JSON へ。',
	tool_film_prompt_builder_how_item_3:
		'任意：AI 欄で Turnstile を済ませ、「AI で加筆」か「AI で整える」を押すと、返ってきた文章が出力欄に入ります。',
	tool_film_prompt_builder_how_item_4:
		'コピーまたはダウンロードして ChatGPT・Gemini・Claude・DeepSeek に貼り、この構成のまま続きを書かせます。',
	tool_film_prompt_builder_how_title:
		'使い方',
	tool_film_prompt_builder_load_sample:
		'作例を読み込む',
	tool_film_prompt_builder_platforms_lead:
		'出力はそのまま ChatGPT・Gemini・Claude・DeepSeek の入力欄に貼れます。',
	tool_film_prompt_builder_result_label:
		'出来上がったプロンプト',
	tool_film_prompt_builder_rules_body:
		'長編の作り方にならった並びです。ログラインで方向を決め、三幕で道筋を示し、シーンリストで場に番号を振り、人物の変化で何が変わるかを添えます。既定はブラウザー内での組み立て。任意の AI は利用回数に上限があり、Turnstile が必要です。',
	tool_film_prompt_builder_rules_item_1:
		'入力欄の項目は、Markdown の Role・Task・Constraints・Output のいずれかに振り分けられます。',
	tool_film_prompt_builder_rules_item_2:
		'既定の書き出しは Markdown。JSON は同じ出力欄の切り替えボタンです。',
	tool_film_prompt_builder_rules_item_3:
		'任意の AI は一手間を足すだけで、置き換えではありません。ローカル動作はいつでも使え、AI の文章は出力欄を全部入れ替えるので、コピー前に読み直してください。',
	tool_film_prompt_builder_rules_item_4:
		'このページが作るのは文章だけです。脚本を代わりに書くことはなく、ブラウザー内でモデルやチャット API を動かすこともありません。',
	tool_film_prompt_builder_rules_title:
		'できること・できないこと',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'クリップボードにコピーしました。',
	tool_film_prompt_builder_status_done:
		'プロンプトができました。',
	tool_film_prompt_builder_status_working:
		'組み立てています…',
	tool_film_prompt_builder_title:
		'映画脚本プロンプト作成ツール — 三幕とシーンリストをブラウザー内で',
	tool_film_prompt_builder_usecase_1:
		'打ち合わせ前に三幕の流れとシーンリストを一つのプロンプトにまとめ、ChatGPT・Gemini・Claude・DeepSeek にそのまま貼る。',
	tool_film_prompt_builder_usecase_2:
		'JSON を書き出し、稿ごとのログライン・三幕・人物の変化を表や版管理の項目として残して見比べる。',
	tool_film_prompt_builder_usecase_3:
		'長編の三幕ではなく題材を問わない四段構成のひな型が欲しいときは、プロンプトテンプレート作成ツールを使う。',
	tool_film_prompt_builder_usecase_4:
		'契約前の企画はローカル動作だけで進める。確認ダイアログに同意しない限り、文章はブラウザーから出ません。',
	tool_film_prompt_builder_usecases_title:
		'こんなときに',
};

export default ja;
