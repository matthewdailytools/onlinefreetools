/**
 * i18n tool shard (sitemap-xml-generator / ja).
 * Japanese independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_sitemap_home_title: 'XML sitemap 生成ツール',
	tool_sitemap_home_desc: 'Google にページの発見とインデックスを促す——URL リストから lastmod・changefreq・priority 付きの正しい sitemap.xml を、ブラウザ内で生成。',
	tool_sitemap_title: 'XML sitemap 生成ツール — URL リストから sitemap.xml を作成',
	tool_sitemap_description:
		'sitemap は Google の発見とインデックスを早めます。https URL を貼り（任意で lastmod）、正しい sitemap.xml をプレビューしてルートへコピーします。アップロードなし。例：3 URL → 3 エントリ。',
	tool_sitemap_generate: '生成',
	tool_sitemap_sample: 'サンプル',
	tool_sitemap_clear: 'クリア',
	tool_sitemap_copy: 'コピー',
	tool_sitemap_copied: 'コピー済み',
	tool_sitemap_download: 'ダウンロード',
	tool_sitemap_urls_label: 'URL（1 行に 1 つ）',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'各行：URL、または URL | lastmod（yyyy-MM-dd）、または URL | lastmod | changefreq | priority。例：https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'http 以外の URL をスキップ：{url}',
	tool_sitemap_warn_bad_lastmod: 'lastmod の形式が不正（yyyy-MM-dd または W3C 日時）：{url}',
	tool_sitemap_warn_too_many: '50,000 URL 超：複数の sitemap に分割し、sitemap index でまとめてください。',
	tool_sitemap_how_title: '仕組み',
	tool_sitemap_how_body:
		'URL リストを 1 行 1 つで貼り付けます。パイプの後に lastmod（yyyy-MM-dd）、changefreq、priority を任意で追加。ページが各行を解析し、予約文字をエスケープし、http(s) で始まるか確認し、sitemap プロトコルに沿って urlset を組み立てます。XML をサイトのルートにコピーし、robots.txt から参照するか Search Console に送信します。',
	tool_sitemap_rules_title: 'プロトコルのルールと上限',
	tool_sitemap_rules_body: 'この生成ツールが従う、sitemap プロトコルと Google のルールです。',
	tool_sitemap_rules_item_1: '必須：各 <url> に完全な URL の <loc> を含めること。lastmod・changefreq・priority は任意。',
	tool_sitemap_rules_item_2: 'lastmod の形式：W3C の日付（yyyy-MM-dd）か 2026-08-01T12:00:00+00:00 のような日時。他の形式は無視または却下。',
	tool_sitemap_rules_item_3: 'changefreq はヒントであり信号ではありません。Google は読み取らないため、入力してもクロール頻度は変わりません。',
	tool_sitemap_rules_item_4: '上限：1 つの sitemap は最大 50,000 URL・圧縮後 50MB。超える場合は分割して sitemap index を使用。',
	tool_sitemap_example_title: '例',
	tool_sitemap_example:
		'サンプル入力：https://example.com/ と、lastmod 2026-08-01 の https://example.com/products、さらに https://example.com/about —— 出力は 3 つの url 要素を持つ urlset で、真ん中が lastmod を持ちます。',
	tool_sitemap_usecases_title: 'こんな場面で',
	tool_sitemap_usecase_1: '新サイト：URL リストから最初の sitemap.xml を生成し、Search Console に送信。',
	tool_sitemap_usecase_2: '更新コンテンツ：最近変更したページに lastmod を付けて、鮮度のシグナルをクローラーに届ける。',
	tool_sitemap_usecase_3: '発見性：robots.txt に sitemap の URL を書けば、送信を待たずにクローラーが辿り着ける。',
	tool_sitemap_faq_q1: '1 つの sitemap の URL 上限は？',
	tool_sitemap_faq_a1: '50,000 URL または 50MB（非圧縮）。リストが 50,000 を超えると警告が出るので、分割して sitemap index で各ファイルをまとめます。',
	tool_sitemap_faq_q2: 'lastmod の形式は？',
	tool_sitemap_faq_a2: 'W3C の日付（yyyy-MM-dd）か 2026-08-01T12:00:00+00:00 のような完全な日時。形式が合わない行は警告されるので、保存前に修正できます。',
	tool_sitemap_faq_q3: 'changefreq はクロールに影響しますか？',
	tool_sitemap_faq_a3: 'いいえ。Google は changefreq も priority も読み取りません。どちらも他の利用者向けのヒントです。正確に保つ価値があるのは lastmod です。',
	tool_sitemap_faq_q4: 'IndexNow とどう違いますか？',
	tool_sitemap_faq_a4: 'IndexNow は URL の変更を参加エンジンに即時通知します。sitemap はクローラーが定期的に確認する常設のリスト。両方を使うのがおすすめです。',
	tool_sitemap_references: 'sitemaps.org — sitemap プロトコル；Google Search Central — sitemap の作成と送信。',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — プロトコル',
	tool_sitemap_ref_google_label: 'Search Central — sitemap の作成と送信',
};

export default ja;
