/**
 * i18n tool shard (hreflang-generator / ja).
 * 日本語 — ローカル検索向けの独立した書き起こし。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_hreflang_home_title: 'hreflang 生成ツール',
	tool_hreflang_home_desc:
		'Google にどの言語版を誰に見せるかを伝える——言語別 URL を hreflang タグ、HTTP Link ヘッダー、sitemap マークアップに変換。ブラウザだけで完結。',
	tool_hreflang_title: 'hreflang 生成ツール — 多言語サイト用の言語タグを作成',
	tool_hreflang_description:
		'hreflang がないと翻訳が重複とみなされ得ます。言語別 URL を link タグ・HTTP Link ヘッダー・sitemap 表記に変換します。すべて端末内で完結。例：同一ページの en・es・ja。手順は明確で例もあります。プライバシーに配慮し、本文はアップロードしません。',
	tool_hreflang_input_label: '言語別 URL リスト',
	tool_hreflang_input_ph:
		'1 行に 1 ペア：言語コード + URL。例：\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'各行は「言語コード URL」または「URL 言語コード」。コードは BCP 47 形式（en、en-US、zh-Hans など）を使います。',
	tool_hreflang_xdefault_label: 'x-default フォールバック URL',
	tool_hreflang_xdefault_none: '— x-default を追加しない —',
	tool_hreflang_xdefault_hint:
		'任意。x-default は、訪問者の言語がどのコードにも一致しない場合に表示するバージョンを Google に伝えます。英語のトップページやルートページに有効です。',
	tool_hreflang_generate: '生成',
	tool_hreflang_sample: 'サンプルを読み込む',
	tool_hreflang_clear: 'クリア',
	tool_hreflang_copy: 'コピー',
	tool_hreflang_copied: 'コピーしました',
	tool_hreflang_error_prefix: 'エラー：',
	tool_hreflang_url_protocol: 'プロトコルが無い URL がありました — https:// を自動追加しました。',
	tool_hreflang_lang_invalid: '言語コードが無効です：{lang}。BCP 47 形式（en、en-US、zh-Hans など）を使ってください。',
	tool_hreflang_no_valid_rows: '有効な行がありません。言語コードと URL を 1 組以上追加してください。',
	tool_hreflang_output_label: '生成されたマークアップ',
	tool_hreflang_tab_link: '<link> タグ',
	tool_hreflang_tab_http: 'HTTP Link ヘッダー',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: '仕組み',
	tool_hreflang_how_body:
		'生成ツールは各行を言語コードと URL に分解し、同じ対応関係を 3 つの形式で出力します。<link> 形式は各ページの <head> に置きます。HTTP Link ヘッダー形式はサーバーが応答時に返します。sitemap 形式は各 <url> ブロック内に <xhtml:link> を埋め込みます。各 URL には自分自身を指す自己参照 hreflang が付き、言語版同士が互いを指し合います。任意の x-default は、一覧にない言語の訪問者をカバーします。',
	tool_hreflang_rules_title: '生成ツールが使うルール',
	tool_hreflang_rules_body: 'これらのルールは Google Search Central と BCP 47 言語タグ標準に基づきます。',
	tool_hreflang_rules_item_1:
		'各言語版は、自分の URL を指す自己参照 hreflang を含める必要があります。欠けるとシグナルが弱まります。',
	tool_hreflang_rules_item_2:
		'どの言語版からもすべての URL を列挙します。各ページに代替バージョンの完全なセットを置き、片方向だけにしないでください。',
	tool_hreflang_rules_item_3:
		'言語コードは BCP 47：2 文字の言語に、地域（en-US）や文字体系（zh-Hans）を任意で追加します。x-default は特別なフォールバックコードです。',
	tool_hreflang_rules_item_4:
		'x-default は、一覧にない言語に一致したときに表示するページ（通常は英語のルートページ）を指します。Google は未検出のすべての言語のフォールバックとして使えます。',
	tool_hreflang_rules_item_5:
		'Google は HTML の <link> タグ、HTTP Link ヘッダー、sitemap の xhtml:link という 3 形式を同等に扱い、同時に使うことも認めていますが、検索上のメリットはないとしています。ページセットごとに 1 つを選びましょう。3 系統を並行運用すると内容が次第にずれ、矛盾したアノテーションは無視されます。',
	tool_hreflang_example_title: '例',
	tool_hreflang_example:
		'サンプルは 1 ページの 3 バージョン：https://example.com/（en）、https://example.com/es/（es）、https://example.com/ja/（ja）。生成される <link> タグは各言語の自己参照を含み、必要に応じて英語ルートを指す x-default も追加できます。',
	tool_hreflang_usecases_title: '活用シーン',
	tool_hreflang_usecase_1:
		'多言語サイトの公開：テンプレートごとに <link> タグを一度生成し、全言語版が完全なセットを列挙しているか確認します。',
	tool_hreflang_usecase_2:
		'サイト改修後はマークアップを再生成し、言語間の URL 対応がずれないように保ちます。',
	tool_hreflang_usecase_3:
		'検索結果が誤った言語を表示するときは、自己参照と x-default の有無、URL が正規ページを指すかを確認します。',
	tool_hreflang_faq_q1: '3 つの形式のどれを使えばよいですか？',
	tool_hreflang_faq_a1:
		'HTML を編集できるなら <link> タグを使います。HTML を変更しづらくサーバーを管理している場合は HTTP Link ヘッダーを、XML sitemap にまとめたい場合は sitemap 形式を使います。',
	tool_hreflang_faq_q2: 'x-default はいつ追加すべきですか？',
	tool_hreflang_faq_a2:
		'訪問者の言語が一覧のどのコードにも一致しない場合に表示するバージョンを、x-default は Google に伝えます。ルートページやフォールバックページ（通常は英語）があれば追加します。',
	tool_hreflang_faq_q3: 'すべての URL に自己参照は必要ですか？',
	tool_hreflang_faq_a3:
		'必要です。各言語版は自分の URL をセットに含め、自己参照 hreflang で自分を指します。Google は完全なセットから言語ごとの正しいページを選びます。',
	tool_hreflang_faq_q4: '有効な言語コードの形式は？',
	tool_hreflang_faq_a4:
		'BCP 47 形式：2〜3 文字の言語に、地域（en-US）と文字体系（zh-Hans）を任意で追加。言語は小文字にし、「en-us-en」のような独自コードは作らないでください。',
	tool_hreflang_faq_q5: 'hreflang は <head> と sitemap のどちらに置きますか？',
	tool_hreflang_faq_a5:
		'どちらでも動作しますが、ページセットごとに 1 つの形式に統一します。<head> には <link> タグ、サーバー応答には HTTP Link ヘッダー、sitemap には xhtml:link ブロックを使います。',
	tool_hreflang_faq_q6: 'URL はどこかにアップロードされますか？',
	tool_hreflang_faq_a6: 'いいえ。生成ツールはブラウザ内だけで完結し、何もアップロードされません。',
	tool_hreflang_references: 'Google Search Central — ローカライズ版（hreflang）；BCP 47 言語タグ。',
	tool_hreflang_ref_searchcentral_label: 'Search Central — ローカライズ版（hreflang）',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — 言語識別タグ',
};

export default ja;
