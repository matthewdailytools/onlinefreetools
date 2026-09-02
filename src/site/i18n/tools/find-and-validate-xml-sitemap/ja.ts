/**
 * i18n ツール断片（find-and-validate-xml-sitemap / ja）。
 * 場面：サイトURL入力 → sitemap 発見 → XML構造と loc サンプル検証（生成しない）。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'XMLサイトマップの検索と検証',
	tool_find_and_validate_xml_sitemap_home_desc:
		'robots.txt または /sitemap.xml からサイトマップを見つけ、構造・種類・loc サンプルを確認します。',
	tool_find_and_validate_xml_sitemap_desc:
		'robots.txt または /sitemap.xml からサイトマップを見つけ、構造・種類・loc サンプルを確認します。',
	tool_find_and_validate_xml_sitemap_title: 'XMLサイトマップを見つけて検証',
	tool_find_and_validate_xml_sitemap_description:
		'サイトURLを入力すると、robots.txt の Sitemap: 行や /sitemap.xml から XMLサイトマップを探し、構造を検証し loc 数を数え、urlset と sitemapindex を区別します。生成はしません。例：sitemaps.org。',
	tool_find_and_validate_xml_sitemap_url_label: 'サイトURL',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: '検索して検証',
	tool_find_and_validate_xml_sitemap_sample: 'サンプル',
	tool_find_and_validate_xml_sitemap_clear: 'クリア',
	tool_find_and_validate_xml_sitemap_running: 'サイトマップを検索・検証しています…',
	tool_find_and_validate_xml_sitemap_url_error: '有効な http(s) サイトURL（オリジンまたはトップ）を入力してください。',
	tool_find_and_validate_xml_sitemap_error_prefix: 'エラー: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'サイトマップ候補を取得できませんでした。ホストがオフラインか、ボットを拒否している可能性があります。',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'URL とホスト名は robots.txt / sitemap 取得のため Worker に送られます。業務DBとして長期保存しません。',
	tool_find_and_validate_xml_sitemap_result_site: 'サイトオリジン',
	tool_find_and_validate_xml_sitemap_result_candidates: '試した候補',
	tool_find_and_validate_xml_sitemap_result_primary: '主な結果',
	tool_find_and_validate_xml_sitemap_result_none_primary: '有効なサイトマップ構造が見つかりませんでした',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'HTTPステータス',
	tool_find_and_validate_xml_sitemap_col_kind: '種類',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'loc数',
	tool_find_and_validate_xml_sitemap_col_valid: '構造OK',
	tool_find_and_validate_xml_sitemap_col_samples: 'locサンプル',
	tool_find_and_validate_xml_sitemap_valid_yes: 'はい',
	tool_find_and_validate_xml_sitemap_valid_no: 'いいえ',
	tool_find_and_validate_xml_sitemap_empty_findings: 'このサイトの検出結果はありません。',
	tool_find_and_validate_xml_sitemap_how_title: '使い方',
	tool_find_and_validate_xml_sitemap_how_body:
		'やることは一つだけです。サイトの XMLサイトマップを見つけ、urlset / sitemapindex として妥当かを見る——新しいファイルは作りません。',
	tool_find_and_validate_xml_sitemap_how_item_1: 'サイトのオリジンまたはトップページURLを入力します。',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'「検索して検証」を押すと、Worker が robots.txt の Sitemap: を読み、続けて /sitemap.xml など一般的なパスを試します。',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'結果表でルート種類（urlset / sitemapindex）、URL数、サンプル <loc> を確認します。',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'IndexNow や Search Console に送る前に、ここで出た XML / 発見の問題を直します。',
	tool_find_and_validate_xml_sitemap_formula_title: '発見と検証のルール',
	tool_find_and_validate_xml_sitemap_formula_body:
		'sitemaps.org プロトコルに沿います。整形式の XML で、ルートが urlset か sitemapindex、かつ <loc> を数えられること。',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'発見順：robots.txt の Sitemap: → /sitemap.xml → /sitemap_index.xml → /sitemap-index.xml。',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'応答がサイトマップXMLらしく、HTTPが成功なら「構造OK」とします。',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex は子サイトマップ、urlset はページ loc。どちらも報告します。',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'<loc> を数え、最大10件のサンプルを表示。一覧の全URLはクロールしません。',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'gzip・巨大本文・リダイレクト・非XMLは失敗し得ます。プライベートホストは拒否します。',
	tool_find_and_validate_xml_sitemap_example_title: '例',
	tool_find_and_validate_xml_sitemap_example:
		'サンプル入力 https://www.sitemaps.org/。Worker が robots.txt の Sitemap: と一般パスを試し、各候補の HTTPステータス、種類、loc数、サンプル、validStructure を表示します。',
	tool_find_and_validate_xml_sitemap_usecases_title: 'こんなときに',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'サイトマップ検索：CMS移行やCDN切替のあと、公開場所を確認する。',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'XMLサイトマップ チェッカー / バリデータ：Search Console 提出前に整形式か、インデックスか urlset かを確認。',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'loc のざっと確認：大きなサイトマップ再生成後、サンプル <loc> だけ見て全体ダウンロードを避ける。',
	tool_find_and_validate_xml_sitemap_faq_q1: 'サイトマップ生成ツールですか？',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'いいえ。既存のサイトマップを見つけて検証するだけです。URL一覧から作るなら XML Sitemap 生成ツールを使ってください。',
	tool_find_and_validate_xml_sitemap_faq_q2: 'どこを探しますか？',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'まず robots.txt の Sitemap: 行、次に同じホストの /sitemap.xml と一般的なインデックスパスです。',
	tool_find_and_validate_xml_sitemap_faq_q3: 'sitemapindex と urlset の違いは？',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex は子サイトマップURL、urlset はページ loc。どちらもプロトコル上の正当なルートで、表に種類が出ます。',
	tool_find_and_validate_xml_sitemap_faq_q4: 'サイトマップ内の全URLをクロールしますか？',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'しません。<loc> の件数とサンプル、構造チェックのみで、各ページの生存確認はしません。',
	tool_find_and_validate_xml_sitemap_faq_q5: 'URLはアップロード・保存されますか？',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'robots.txt とサイトマップ取得のため URL/ホスト名は Worker に届きます。チェック結果を業務DBとして長期保存はしません。エッジツールであり「アップロードなし」ではありません。',
	tool_find_and_validate_xml_sitemap_references:
		'sitemaps.org プロトコル；Google Search Central — サイトマップ概要。',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — プロトコル',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — サイトマップ概要',
};

export default ja;
