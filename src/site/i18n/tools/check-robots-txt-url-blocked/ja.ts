/**
 * i18n ツール断片（check-robots-txt-url-blocked / ja）。
 * 用途：ページ URL を貼り、robots.txt でブロックされるか確認する。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'robots.txt URLブロック確認',
	tool_check_robots_txt_url_blocked_home_desc:
		'ページURLを貼り、robots.txtがそのパスをブロックするか確認できます。',
	tool_check_robots_txt_url_blocked_desc:
		'ページURLを貼り、robots.txtがそのパスをブロックするか確認できます。',
	tool_check_robots_txt_url_blocked_title: 'URLがrobots.txtでブロックされているか確認',
	tool_check_robots_txt_url_blocked_description:
		'ページURLを貼り、Googlebot・*・Bingbot・GPTBot向けにrobots.txtがそのパスをブロックするかオンラインで確認。一致ルールを表示。例: /admin。',
	tool_check_robots_txt_url_blocked_url_label: 'ページURL',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'UA',
	tool_check_robots_txt_url_blocked_check: '確認',
	tool_check_robots_txt_url_blocked_sample: 'サンプル',
	tool_check_robots_txt_url_blocked_clear: 'クリア',
	tool_check_robots_txt_url_blocked_running: 'robots.txt を取得中…',
	tool_check_robots_txt_url_blocked_url_error: '確認したいパスを含む有効な http(s) URL を入力してください。',
	tool_check_robots_txt_url_blocked_error_prefix: 'エラー: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'robots.txt を取得できませんでした。ホスト障害やボット拒否の可能性があります。',
	tool_check_robots_txt_url_blocked_privacy_note:
		'URLとホスト名は /robots.txt 取得のため Worker に送られます。製品用DBとして長期保存しません。',
	tool_check_robots_txt_url_blocked_result_allowed_yes: '許可',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'ブロック',
	tool_check_robots_txt_url_blocked_result_matched: '一致した規則',
	tool_check_robots_txt_url_blocked_result_matched_none: '一致する Allow/Disallow なし（許可扱い）',
	tool_check_robots_txt_url_blocked_result_http_status: 'robots.txt の HTTP ステータス',
	tool_check_robots_txt_url_blocked_result_path: '評価したパス',
	tool_check_robots_txt_url_blocked_result_ua: '使用した UA',
	tool_check_robots_txt_url_blocked_result_robots_url: 'robots.txt の URL',
	tool_check_robots_txt_url_blocked_result_group: '一致した User-agent グループ',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'robots.txt 本文なし（欠落または HTML エラーページ）。全許可として扱います。',
	tool_check_robots_txt_url_blocked_result_preview: 'robots.txt プレビュー',
	tool_check_robots_txt_url_blocked_how_title: '使い方',
	tool_check_robots_txt_url_blocked_how_body:
		'選んだクローラに対し、そのパスが robots.txt で許可かブロックかを判定します。取得するのは /robots.txt のみで、ページ本体は取りません。',
	tool_check_robots_txt_url_blocked_how_item_1: '確認したいページの完全な URL を貼る（パスが重要）。',
	tool_check_robots_txt_url_blocked_how_item_2: 'UA を選ぶ（既定は Googlebot。* / Bingbot / GPTBot も可）。',
	tool_check_robots_txt_url_blocked_how_item_3: '「確認」を押し、Worker が /robots.txt を取得するのを待つ。',
	tool_check_robots_txt_url_blocked_how_item_4: '許可/ブロック、一致ルール、HTTP ステータスを読む。',
	tool_check_robots_txt_url_blocked_how_item_5: '必要ならプレビューで適用グループを確認する。',
	tool_check_robots_txt_url_blocked_formula_title: 'マッチングの考え方',
	tool_check_robots_txt_url_blocked_formula_body:
		'Google の robots.txt 解説と RFC 9309 に沿った一般的な評価：最長一致。同じ長さなら Allow が Disallow より優先。',
	tool_check_robots_txt_url_blocked_formula_item_1: '選んだクローラに合う User-agent グループを使い、なければ * にフォールバック。',
	tool_check_robots_txt_url_blocked_formula_item_2: 'パスに合う Allow/Disallow のうち、最も長い接頭辞が勝つ。',
	tool_check_robots_txt_url_blocked_formula_item_3: '長さが同じときは Allow を優先する。',
	tool_check_robots_txt_url_blocked_formula_item_4: 'robots.txt 欠如や空グループは全面許可扱い。HTTP ステータスは表示する。',
	tool_check_robots_txt_url_blocked_formula_item_5: '/robots.txt のみ取得。プライベートホストは拒否。Search Console 公式テスターの代替ではない。',
	tool_check_robots_txt_url_blocked_example_title: '例',
	tool_check_robots_txt_url_blocked_example:
		'サンプル https://www.bing.com/search（Googlebot）。Worker が https://www.bing.com/robots.txt を取得し、/search を評価して許可/ブロックと一致行を表示します。',
	tool_check_robots_txt_url_blocked_usecases_title: 'こんなときに',
	tool_check_robots_txt_url_blocked_usecase_1:
		'公開前チェック：/admin や /staging がブロックされ、公開ページはクロール可能なままかを確認。',
	tool_check_robots_txt_url_blocked_usecase_2:
		'robots.txt テスター／検証：Disallow 変更後、意図した URL に本当に当たるか確かめる。',
	tool_check_robots_txt_url_blocked_usecase_3:
		'AI クローラ規則：UA を GPTBot（または *）にして、学習系ボットが敏感パスを見られるか確認。',
	tool_check_robots_txt_url_blocked_faq_q1: 'robots.txt を生成できますか？',
	tool_check_robots_txt_url_blocked_faq_a1:
		'いいえ。ブロック確認のみです。ルール作成は robots.txt ジェネレータを使ってください。',
	tool_check_robots_txt_url_blocked_faq_q2: 'なぜ Googlebot と * を別々に試すのですか？',
	tool_check_robots_txt_url_blocked_faq_a2:
		'Googlebot 専用グループがあればそれを使い、他の多くは * に落ちます。分けて確認しないと一つの規則で全ボットをカバーしたと誤解しやすいです。',
	tool_check_robots_txt_url_blocked_faq_q3: 'robots.txt が無い、または 404 のときは？',
	tool_check_robots_txt_url_blocked_faq_a3:
		'一般的なクローラ慣行では全面許可とみなします。ツールは HTTP ステータスを表示するので 404 やリダイレクトも分かります。',
	tool_check_robots_txt_url_blocked_faq_q4: 'GPTBot など AI クローラも試せますか？',
	tool_check_robots_txt_url_blocked_faq_a4:
		'はい。UA 一覧から GPTBot を選べます。マッチングは RFC 9309 準拠のエッジ評価であり、公式クローラの判定ではありません。',
	tool_check_robots_txt_url_blocked_faq_q5: 'URL は保存されますか？',
	tool_check_robots_txt_url_blocked_faq_a5:
		'/robots.txt 取得のため URL/ホスト名は Worker に届きます。製品用DBとして長期保存しません。エッジツールであり「アップロードなし」ではありません。',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt；RFC 9309 Robots Exclusion Protocol。',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default ja;
