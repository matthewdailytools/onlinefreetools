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
		'title・meta description・H1・canonical・robots・Open Graph・JSON-LD を一括チェック。URL か HTML を貼るだけで、直し方も表示。貼り付けは端末内で処理し、サーバーには送りません。例：H1 が 2 つのページ。',
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
	tool_onpage_desc_missing: 'meta description がありません。この場合 Google はページ本文からスニペットを作ります。文面を自分で決めたいときだけ要約を書きましょう。',
	tool_onpage_desc_ok: '説明文は {n} 文字。140〜160 文字の範囲は多くのスニペットでよく表示されます。',
	tool_onpage_desc_long: '説明文が {n} 文字あり、スニペットは約 160 文字で切れることが多いです。',
	tool_onpage_desc_short: '説明文が {n} 文字しかありません。ページの提供価値をまとめる文字数を増やしましょう。',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'H1 が見つかりません。ページの主題を示す最上位の見出しを追加しましょう。スクリーンリーダーも検索結果の見出しもこれを手がかりにします。',
	tool_onpage_h1_multiple: 'H1 が {n} 個見つかりました。Google は H1 の数に関係なくページを評価するので、これはペナルティではありません。それでも H1 を 1 つにして H2〜H6 で区切ったほうが、スクリーンリーダーには読みやすくなります。',
	tool_onpage_h1_ok: 'H1 が 1 つあり、<body> 内にあります。',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'canonical が未設定です。同じ内容が複数の URL で見られる場合は <link rel="canonical"> を追加してください。',
	tool_onpage_canonical_ok: '自己参照の canonical を確認できました。',
	tool_onpage_canonical_other: 'canonical が別の URL を指しています。これは「このページはそちらの重複」と Google に伝える指定です。本当に重複のときだけ残してください。canonical はヒントなので、Google が別の URL を選ぶこともあります。',
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
	tool_onpage_how_item_1: '「HTML を貼り付け」のままにするか、「URL を取得」で公開ページを確認する。',
	tool_onpage_how_item_2: 'マークアップを貼るか https URL を入力する。',
	tool_onpage_how_item_3: '「ページをチェック」（または「サンプル」）をクリックする。',
	tool_onpage_how_item_4: '各チェック結果を確認し、指摘されたタグを修正する。',
	tool_onpage_rules_title: 'チェックが基準にするルール',
	tool_onpage_rules_body:
		'各チェックが何と比較し、どこまで強い根拠があるかをまとめました。タグの挙動（robots、canonical、混合コンテンツ）は Google Search Central と HTML 仕様に沿います。文字数や見出しに関する助言は表示と読みやすさの目安で、順位を決めるルールではありません。',
	tool_onpage_rules_item_1:
		'タイトル：ページには説明的な <title> を 1 つ。Google が書き換える場合もありますが、50〜60 文字前後の簡潔なタイトルは表示されやすい傾向があります。',
	tool_onpage_rules_item_2:
		'H1：ページには主題を示す見出しが必要です。Google は理想的な見出しの数を定めておらず、H1 が余分にあっても減点しません。複数を警告として出すのは、構成の見通しとアクセシビリティのためだけです。',
	tool_onpage_rules_item_3:
		'Canonical：<head> 内の <link rel="canonical"> は重複の中で優先したい URL を示すヒントで、命令ではありません。Google はリダイレクト・サイトマップ・内部リンクと合わせて検討したうえで、正規 URL を自分で決めます。',
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
	tool_onpage_faq_q2: 'H1 が複数あると SEO に悪影響ですか？',
	tool_onpage_faq_a2:
		'いいえ。Google は「理想的な見出しの数はない」と明言しており、H1 がゼロでも 1 つでも複数でもページを評価します。それでも H1 を 1 つにしておく理由は、アクセシビリティと構成の分かりやすさ、そして検索結果の見出しに自分の H1 が使われやすくなることです。',
	tool_onpage_faq_q3: 'canonical は自分自身を指す必要がありますか？',
	tool_onpage_faq_a3:
		'必須ではありませんが、そのページ自体を検索結果に出したいなら自己参照 canonical がいちばん明確なシグナルです。別 URL を指すと「このページは重複」という宣言になります。どちらの場合も Google は canonical をヒントとして扱い、別の URL を正規と判断することがあります。',
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
