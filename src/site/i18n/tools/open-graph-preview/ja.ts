/**
 * i18n tool shard (open-graph-preview / ja).
 * 日本語 — ローカル検索向けに独立した書き直し。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_og_home_title: 'Open Graph プレビュー',
	tool_og_home_desc:
		'シェアされるたびにクリックにつなげる——Facebook、X、メッセージアプリで共有したときの見え方をブラウザで確認できます。',
	tool_og_title: 'Open Graph プレビュー — ソーシャル共有カードを確認',
	tool_og_description:
		'OG 画像やタイトル不足はシェアのクリックを損ないます。og/twitter タグか URL を貼り、Facebook・X・メッセージカードを確認して不足を直します。貼り付けは端末内。例：1200×630 の大カード。手順は明確で例もあります。',
	tool_og_tags_tab: 'タグを貼り付け',
	tool_og_url_tab: 'URL を取得',
	tool_og_tags_ph: '<meta property="og:*"> と <meta name="twitter:*"> タグをここに貼り付け…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'URL を取得',
	tool_og_preview: 'プレビュー',
	tool_og_sample: 'サンプル',
	tool_og_clear: 'クリア',
	tool_og_copy: 'コピー',
	tool_og_copied: 'コピー済み',
	tool_og_running: '確認中…',
	tool_og_error_prefix: 'エラー：',
	tool_og_url_error: '有効な http(s) URL を入力してください。',
	tool_og_fetch_failed: 'URL を取得できませんでした。ページがオフライン、ボットを拒否、または HTML を返していない可能性があります。',
	tool_og_no_tags: 'OG タグが検出されませんでした',
	tool_og_no_tags_fallback:
		'Open Graph タグがない場合、Facebook・X・WhatsApp はページのタイトル、meta description、最初の画像からカードを作ります。',
	tool_og_required_label: '必須',
	tool_og_optional_label: '任意',
	tool_og_missing_label: '不足',
	tool_og_ok_label: 'あり',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'タグの状態',
	tool_og_ratio_warning: 'og:image は約 1200×630 ピクセル（1.91:1）が推奨です。',
	tool_og_ratio_ok: 'og:image は 1200×630 ピクセル（1.91:1）に近いです。',
	tool_og_ratio_unknown: 'URL から画像サイズを読み取れませんでした。',
	tool_og_dimensions: '{w}×{h} ピクセル',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'メッセージアプリ（WhatsApp 風）',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'twitter:card 未設定のため、プラットフォームは og: タグから summary カードと推測します。',
	tool_og_how_title: '仕組み',
	tool_og_how_body:
		'プレビューは貼り付けた og:/twitter: タグ（または URL から取得した HTML から抽出したタグ）を解析し、3 枚の共有カードを描画します。Facebook は左に 1.91:1 の画像、下にタイトル・説明・ドメインを表示します。X は twitter:card に従い、summary_large_image は上に大きな画像、summary は本文の横に小さい画像を表示します。WhatsApp などのメッセージアプリは大きなカードを 1 枚表示します。フィールド表ではプロトコルが必須とする 4 つのフィールドを示し、任意項目も列挙します。',
	tool_og_how_item_1: 'og:/twitter: meta タグを貼るか URL を取得する。',
	tool_og_how_item_2: '「プレビュー」（または「サンプル」）をクリックする。',
	tool_og_how_item_3: 'Facebook、X、メッセージアプリのカードを比較する。',
	tool_og_how_item_4: '表で不足している必須フィールドを修正する。',
	tool_og_rules_title: 'プレビューで使うルール',
	tool_og_rules_body: '以下は各プラットフォームが使う画像サイズとフォールバックです。Open Graph プロトコルと X Cards のドキュメントに基づきます。',
	tool_og_rules_item_1: 'Open Graph プロトコルが必須とするのは og:title、og:type、og:image、og:url の 4 つです。og:description は仕様上は任意ですが主要プラットフォームはどこでも表示するため、書かないとプラットフォームがページ本文から独自の要約を作ります。',
	tool_og_rules_item_2: 'og:image は 1200×630 ピクセル（1.91:1）なら主要プラットフォームで問題なく表示されます。Facebook は 2:1 と 1:1 の切り抜きにも対応。小さすぎる画像は拡大されてぼやけます。',
	tool_og_rules_item_3: 'twitter:card の summary_large_image は大きな画像、summary は小さな画像に対応します。twitter:card がない場合、プラットフォームは og: タグから summary カードと推測します。',
	tool_og_rules_item_4: 'og:title または og:image がない場合、プラットフォームは HTML のタイトル、meta description、ページ内の最初の画像にフォールバックします。',
	tool_og_rules_item_5: '画像サイズはブラウザの画像読み込みで測定します。画像を読み込めない場合（遮断・オフライン・URL 誤り）は「不明」と報告します。',
	tool_og_example_title: '例',
	tool_og_example:
		'サンプルタグは 1200×630 の og:image と twitter:card summary_large_image を持つブログ記事を表します。プレビューでは、左に画像のある Facebook カード、X の大カード、WhatsApp 風カード、必須フィールドがすべて揃ったタグ表が表示されます。',
	tool_og_usecases_title: '使える場面',
	tool_og_usecase_1:
		'記事やランディングページを公開する前に、タグを一度貼り付けて Facebook・X・メッセージアプリでの見え方を確認します。',
	tool_og_usecase_2:
		'共有リンクに画像が出ない、または切り取られる場合、og: タグを貼って og:image の不足や比率の誤りを確認します。',
	tool_og_usecase_3:
		'CMS やテーマを更新した後、公開 URL を取得して og: タグがページと一致しているか確認します。',
	tool_og_faq_q1: 'Open Graph タグがないページはどうなりますか？',
	tool_og_faq_a1:
		'Facebook・X・WhatsApp は HTML のタイトル、meta description、ページ内で見つかった画像を代わりに使います。この代替の挙動はプラットフォームごとに異なり、時期によっても変わります。そのためカードが不完全になったり意図しない画像が選ばれたりするので、og: フィールドは自分で指定します。',
	tool_og_faq_q2: 'og:image はどのくらいのサイズがよいですか？',
	tool_og_faq_a2:
		'安全なサイズは 1200×630 ピクセル（1.91:1）で、主要プラットフォームすべてで使えます。Facebook は 2:1 と 1:1 の切り抜きにも対応。小さすぎる画像は拡大されてぼやけます。',
	tool_og_faq_q3: 'twitter:card と og: タグの関係は？',
	tool_og_faq_a3:
		'twitter:card がレイアウトを決めます。summary_large_image は横長の画像、summary は小さな画像を表示します。twitter:title・twitter:description・twitter:image がない場合、X は対応する og: タグにフォールバックします。',
	tool_og_faq_q4: 'og:image がない場合、プラットフォームはどうしますか？',
	tool_og_faq_a4:
		'ページ HTML 内の最初の画像にフォールバックするか、画像なしのカードを表示します。og:image の不足は、共有リンクにプレビュー画像が出ない最も一般的な原因です。',
	tool_og_faq_q5: '比率チェックが「不明」になるのはなぜですか？',
	tool_og_faq_a5:
		'プレビューはブラウザの画像読み込みで og:image の実サイズを読み取ろうとします。画像が遮断・オフライン・低速だったり、サーバーがリクエストを拒否したりするとサイズを読み取れず「不明」と報告します。',
	tool_og_faq_q6: 'タグはどこかにアップロードされますか？',
	tool_og_faq_a6:
		'いいえ。貼り付けモードでは解析とプレビューが端末内で完結します。URL モードはページを 1 回だけ worker 経由で取得し、保存しません。',
	tool_og_references: 'ogp.me — Open Graph プロトコル；X — Cards のマークアップ。',
	tool_og_ref_ogp_label: 'ogp.me — Open Graph プロトコル',
	tool_og_ref_x_label: 'X — Cards のマークアップ',
};

export default ja;
