/**
 * i18n tool shard (on-page-seo-checker / ja).
 * 日本語 — 検索習慣に合わせて独立に書き直し。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_onpage_home_title: 'オンページ SEO チェッカー',
	tool_onpage_home_desc:
		'検索順位を下げるページのタグ問題を発見：ブラウザ上で title・H1・meta description・canonical・Open Graph・JSON-LD をチェック。',
	tool_onpage_title: 'オンページ SEO チェッカー — ページのタグ問題を見つけて直す',
	tool_onpage_description:
		'タイトルが弱い、meta description が無い、H1 が重複する、canonical が誤っている——どれも検索順位とクリックを静かに損なう原因です。URL または HTML を貼り付けて、title・H1・meta description・canonical・Open Graph・JSON-LD・混合コンテンツ・レンダリングブロックを項目ごとに修正案付きでチェック。貼り付けモードは端末内処理、URL モードは一度だけ取得し保存しません。例：H1 が 2 つあり http:// 画像を含むサンプルページ。',
	tool_onpage_url_tab: 'URL を取得',
	tool_onpage_html_tab: 'HTML を貼り付け',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'URL をチェック',
	tool_onpage_html_ph: 'ここに <head>（と body の一部）の HTML を貼り付け…',
	tool_onpage_check: 'ページをチェック',
	tool_onpage_sample: 'サンプル',
	tool_onpage_clear: 'クリア',
	tool_onpage_copy: 'コピー',
	tool_onpage_copied: 'コピーしました',
	tool_onpage_running: 'チェック中…',
	tool_onpage_error_prefix: 'エラー：',
	tool_onpage_url_error: '有効な http(s) URL を入力してください。',
	tool_onpage_fetch_failed: 'URL を取得できませんでした。オフライン、ボット拒否、または HTML 以外の可能性があります。',
	tool_onpage_no_html: '先に HTML を貼り付けるか、URL を取得してください。',
	tool_onpage_no_results: '表示できるチェック結果がまだありません。',
	tool_onpage_summary_title: 'チェック結果のまとめ',
	tool_onpage_summary_n_ok: '{n} 件 OK',
	tool_onpage_summary_n_warn: '{n} 件 警告',
	tool_onpage_summary_n_err: '{n} 件 問題',
	tool_onpage_status_ok: 'OK',
	tool_onpage_status_warn: '警告',
	tool_onpage_status_err: '問題',
	tool_onpage_title_check: 'タイトル',
	tool_onpage_title_missing: '<title> が見つかりません。<head> 内に追加してください。',
	tool_onpage_title_ok: 'タイトルは {n} 文字。50〜60 文字前後だと検索結果で表示されやすいです。',
	tool_onpage_title_long: 'タイトルが {n} 文字あり、検索結果で切れる可能性が高いです。50〜60 文字程度を目指しましょう。',
	tool_onpage_title_short: 'タイトルが {n} 文字しかありません。ページの焦点を具体的に足すと分かりやすくなります。',
	tool_onpage_desc_check: 'メタディスクリプション',
	tool_onpage_desc_missing: 'meta description がありません。ページ内容に合った 140〜160 文字の要約を書きましょう。',
	tool_onpage_desc_ok: '説明文は {n} 文字。140〜160 文字の範囲は多くのスニペットでよく表示されます。',
	tool_onpage_desc_long: '説明文が {n} 文字あり、スニペットは約 160 文字で切れることが多いです。',
	tool_onpage_desc_short: '説明文が {n} 文字しかありません。ページの提供価値をまとめる文字数を増やしましょう。',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'H1 が見つかりません。ページの主題を示す H1 を 1 つだけ使いましょう。',
	tool_onpage_h1_multiple: 'H1 が {n} 個見つかりました。ページごとに H1 は 1 つにし、セクションは H2〜H6 を使いましょう。',
	tool_onpage_h1_ok: 'H1 が 1 つあり、<body> 内にあります。',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'canonical が未設定です。同じ内容が複数の URL で見られる場合は <link rel="canonical"> を追加してください。',
	tool_onpage_canonical_ok: '自己参照の canonical を確認できました。',
	tool_onpage_canonical_other: 'canonical が別の URL を指しています。このページが対象のコピーでない限り、自己参照 canonical を使いましょう。',
	tool_onpage_robots_check: 'Robots meta',
	tool_onpage_robots_missing: 'robots meta がありません。既定は index,follow で、多くの公開ページでは適切です。',
	tool_onpage_robots_noindex: 'ページが noindex に設定されており、Google 検索に表示されません。インデックスさせる場合は削除してください。',
	tool_onpage_robots_ok: 'robots meta はインデックスとリンク追従を許可しています。',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'og: タグが見つかりません。SNS 共有プレビューのために og:title・og:description・og:image を追加しましょう。',
	tool_onpage_og_partial: '必須の og: フィールドが {n} 個不足しています。og:title・og:description・og:image を揃えてください。',
	tool_onpage_og_ok: 'og:title・og:description・og:image が揃っています。',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'JSON-LD 構造化データが見つかりません。可視コンテンツを説明する場合、schema.org マークアップを検討してください。',
	tool_onpage_jsonld_invalid: 'JSON-LD ブロックを JSON として解析できませんでした。構文エラーを確認してください。',
	tool_onpage_jsonld_ok: 'JSON-LD ブロックを {n} 個確認。構造化データは訪問者に見える内容と一致させてください。',
	tool_onpage_mixed_check: '混合コンテンツ',
	tool_onpage_mixed_none: 'https コンテキスト内に http:// リソース参照は見つかりませんでした。',
	tool_onpage_mixed_found: 'http:// 参照が {n} 件あります。ブラウザは混合コンテンツをブロックするため、https に切り替えてください。',
	tool_onpage_render_check: 'レンダリングブロック',
	tool_onpage_render_none: '明らかなレンダリングブロック要因のスタイルシートやスクリプトは検出されませんでした。',
	tool_onpage_render_found: '<head> 内に media 属性のない <link rel="stylesheet"> が {n} 件あります。重要 CSS のインライン化か遅延読み込みで LCP を改善しましょう。',
	tool_onpage_unknown: '判定できません：{label}',
	tool_onpage_how_title: '仕組み',
	tool_onpage_how_body:
		'チェッカーは貼り付けたマークアップ（または URL から取得した HTML）を解析し、固定のオンページ SEO チェック項目を評価します。各チェックは 1 種類のタグだけを読み取ります：title、meta description、H1、canonical、robots meta、Open Graph フィールド、JSON-LD、混合コンテンツ、レンダリングブロック要因。貼り付けモードはすべてブラウザ内で完結し、URL モードは Worker 経由でページを一度だけ取得し保存しません。',
	tool_onpage_rules_title: 'チェックが基準にするルール',
	tool_onpage_rules_body:
		'各チェックが比較する基準は以下のとおりです。Google Search Central と HTML 仕様に基づいています。',
	tool_onpage_rules_item_1:
		'タイトル：ページには説明的な <title> を 1 つ。Google が書き換える場合もありますが、50〜60 文字前後の簡潔なタイトルは表示されやすい傾向があります。',
	tool_onpage_rules_item_2:
		'H1：ページの主題を示す H1 を 1 つだけ使い、残りは H2〜H6 で論理的な構成にします。',
	tool_onpage_rules_item_3:
		'Canonical：重複がある場合、自己参照 canonical で Google に優先 URL を伝えます。Link rel="canonical" は <head> に置きます。',
	tool_onpage_rules_item_4:
		'混合コンテンツ：https ページが http:// リソースを参照するとブラウザにブロックされます。このチェックは警告として列挙します。',
	tool_onpage_rules_item_5:
		'レンダリングブロック：<head> 内の media 属性のないスタイルシートはレンダリングを妨げます。このチェックはヒューリスティックで、実際の読み込み時間を測定しません。',
	tool_onpage_example_title: '例',
	tool_onpage_example:
		'サンプル入力は、71 文字のタイトル、meta description なし、H1 が 2 つ、別 URL を指す canonical、og:image 1 つ、有効な JSON-LD、http:// 画像 1 つを持つページです。チェッカーはタイトルを「切れる可能性」、H1 を警告、canonical を非自己参照、混合コンテンツを警告と報告します。サンプル読み込み後の表示と一致します。',
	tool_onpage_usecases_title: 'おすすめの使い方',
	tool_onpage_usecase_1:
		'リニューアルや再公開の前：同じページをチェッカーにかけ、報告された問題を一度に修正します。',
	tool_onpage_usecase_2:
		'テンプレート引き渡し時：外部制作やページビルダーから受け取った HTML は、出力を信頼せず head タグを確認します。',
	tool_onpage_usecase_3:
		'コンテンツ更新時：CMS 編集後、title・description・canonical が新しいページ内容と一致しているか確認します。',
	tool_onpage_faq_q1: 'オンページ SEO チェッカーは何を見るのですか？',
	tool_onpage_faq_a1:
		'ページ自身が制御できるタグを確認します：title、meta description、H1、canonical、robots meta、Open Graph、JSON-LD 構造化データ、混合コンテンツ、レンダリングブロック要因。順位や被リンクは測定しません。',
	tool_onpage_faq_q2: 'なぜ H1 は 1 つだけにすべきですか？',
	tool_onpage_faq_a2:
		'H1 を 1 つにするとページの主題が読者にも検索エンジンにも明確に伝わります。H1 が複数あると構成がぼやけるため、1 つの H1 と H2〜H6 で構造化しましょう。',
	tool_onpage_faq_q3: 'canonical は自分自身を指す必要がありますか？',
	tool_onpage_faq_a3:
		'順位付けしたいページなら、はい。自己参照 canonical が最も明確なシグナルです。別 URL を指す canonical は「このページは重複」と伝えるため、本当に重複の場合だけ使います。',
	tool_onpage_faq_q4: 'なぜ http:// リソースが混合コンテンツと判定されるのですか？',
	tool_onpage_faq_a4:
		'https で配信しているページが http:// の画像・スクリプト・スタイルを参照すると、ブラウザは既定でリクエストをブロックします。このチェックは https への変更を促すため警告として列挙します。',
	tool_onpage_faq_q5: 'JSON-LD チェックはバリデーションまで行いますか？',
	tool_onpage_faq_a5:
		'JSON として正しくパースできるかを確認し、構造化データを可視コンテンツと一致させるよう促します。完全な schema.org バリデータは実行しません。',
	tool_onpage_faq_q6: 'HTML はアップロードされますか？',
	tool_onpage_faq_a6:
		'されません。HTML を貼り付けた場合、解析は端末内で完結しサーバーには送信されません。URL モードは Worker 経由で一度だけページを取得し、保存しません。',
	tool_onpage_references: 'Google Search Central — meta タグ；Google Search Central — canonical；MDN — <meta> 要素。',
	tool_onpage_ref_tags_label: 'Search Central — Google が理解できる meta タグ',
	tool_onpage_ref_canonical_label: 'Search Central — 正規 URL',
	tool_onpage_ref_mdn_label: 'MDN — <meta>：メタデータ要素',
};

export default ja;
