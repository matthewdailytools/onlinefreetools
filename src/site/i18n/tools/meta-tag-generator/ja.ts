/**
 * i18n tool shard (meta-tag-generator / ja).
 * 日本語 — ローカル検索向けの独立した書き起こし。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_meta_home_title: 'メタタグ生成ツール',
	tool_meta_home_desc:
		'検索でクリックを生む title・description・canonical・Open Graph タグを作成——ページの head タグ一式をブラウザだけで生成。',
	tool_meta_title: 'メタタグ生成ツール — ページの head タグ一式を作成',
	tool_meta_description:
		'タイトルと meta description はユーザーが Google で最初に目にするもので、canonical を間違えると重複 URL に評価が分散します。タイトル、ディスクリプション、canonical、robots、Open Graph の各フィールドを入力すると、そのまま貼り付けられる <head> メタタグを生成します。手順は、フィールドを入力し、文字数のヒントとプレビューを確認し、正しくエスケープされた HTML をコピーするだけ。& や < などの特殊文字は自動でエスケープされ、タグは常に有効です。すべて端末内で完結し、データは一切アップロードされません。例：canonical と og タグの併用。',
	tool_meta_title_label: 'Meta タイトル',
	tool_meta_title_ph: 'メタタグ生成ツール — ページの head タグ一式を作成',
	tool_meta_title_hint: '60 文字前後を目安に。長すぎると検索エンジンが書き換えることがあります。',
	tool_meta_desc_label: 'Meta ディスクリプション',
	tool_meta_desc_ph: '文字数ヒント、robots の値、OG フィールド付きで貼り付けられる head メタタグを生成。',
	tool_meta_desc_hint: '155〜160 文字前後を目安に。それ以上長いと検索結果で省略されることがあります。',
	tool_meta_canonical_label: 'Canonical URL',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'このページの優先 URL。プロトコル付きの完全な URL を入力してください。',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— robots meta を追加しない —',
	tool_meta_robots_index_follow: 'index, follow（デフォルト、検索エンジンにインデックス許可）',
	tool_meta_robots_noindex_follow: 'noindex, follow（結果に表示しない、リンクは追跡）',
	tool_meta_robots_index_nofollow: 'index, nofollow（インデックス許可、リンクは追跡しない）',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow（非表示かつリンク追跡なし）',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image（完全な URL）',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: '生成',
	tool_meta_sample: 'サンプルを読み込む',
	tool_meta_clear: 'クリア',
	tool_meta_copy: 'コピー',
	tool_meta_copied: 'コピーしました',
	tool_meta_error_prefix: 'エラー：',
	tool_meta_canonical_protocol: 'canonical URL にプロトコルがありません — https:// か http:// を付けてください。',
	tool_meta_title_len: 'タイトル：{n} 文字',
	tool_meta_title_len_warn: 'タイトル：{n} 文字 — 60 文字超、短縮を検討してください。',
	tool_meta_desc_len: 'ディスクリプション：{n} 文字',
	tool_meta_desc_len_warn: 'ディスクリプション：{n} 文字 — 160 文字超、省略される恐れがあります。',
	tool_meta_output_label: '生成された head スニペット',
	tool_meta_how_title: '仕組み',
	tool_meta_how_body:
		'生成ツールは入力されたフィールドから対応する head タグを組み立てます。空の任意フィールドはスキップされるので、出力には入力した内容だけが含まれます。すべての値は HTML エスケープされ、& は &amp; に、< は &lt; になり、ページ内でタグが常に有効に保たれます。文字数ヒントは、タイトルやディスクリプションがよく使われる上限を超えたときに知らせますが、テキストは切り詰めません。',
	tool_meta_rules_title: '生成ツールが使うルール',
	tool_meta_rules_body: 'これらのルールは、Google Search Central のメタタグ・タイトルリンク・canonical URL の指針に従います。',
	tool_meta_rules_item_1:
		'meta タイトルとディスクリプションは指示ではなく提案です。検索エンジンが書き換えたり省略したりするため、タイトルは約 60 文字、ディスクリプションは 155〜160 文字が目安です。',
	tool_meta_rules_item_2:
		'すべての値は HTML エスケープされます：& < > " と \' が実体参照になり、タイトルやディスクリプションの文字がタグ構造を壊しません。',
	tool_meta_rules_item_3:
		'canonical URL はプロトコル付きの完全な絶対 URL にします。相対 URL やプロトコルの無い URL は canonical の対象になりません。',
	tool_meta_rules_item_4:
		'robots meta は index/noindex と follow/nofollow の値を使います。省略した場合、検索エンジンは既定（インデックスして追跡）に従います。',
	tool_meta_rules_item_5:
		'canonical と Open Graph タグは同じページに共存できます。og:url は canonical URL と一致させ、SNS 共有が同じアドレスを指すようにします。',
	tool_meta_example_title: '例',
	tool_meta_example:
		'サンプルは、タイトル、ディスクリプション、canonical、robots、3 つの Open Graph フィールドを入力しています。生成されるスニペットは、<title> タグ、meta description、canonical リンク、robots meta、入力済みの og: タグを出力します。',
	tool_meta_usecases_title: '活用シーン',
	tool_meta_usecase_1:
		'新規ページのテンプレート作成：head ブロックを一度生成し、文字数ヒントを確認してからテンプレートに貼り付けます。',
	tool_meta_usecase_2:
		'クライアントへの納品：canonical と OG フィールド付きの head スニペットを正確に生成し、CMS に貼り付けます。',
	tool_meta_usecase_3:
		'公開前にはタグを生成し、検索結果プレビューと見比べて、タイトルとディスクリプションが表示中のページと一致しているか確認します。',
	tool_meta_faq_q1: 'robots meta の値はどういう意味ですか？',
	tool_meta_faq_a1:
		'index は検索エンジンがページを結果に含めるのを許可し、noindex は除外します。follow はページ内リンクのクロールを許可し、nofollow は追跡しないよう指示します。タグが無い場合の既定は index, follow です。',
	tool_meta_faq_q2: '入力した特殊文字はエスケープされますか？',
	tool_meta_faq_a2:
		'はい。生成ツールは & < > " と \' をエスケープし、& は &amp; に、< は &lt; になります。値にタグのような文字が含まれても、出力は常に有効です。',
	tool_meta_faq_q3: 'canonical と Open Graph タグは共存できますか？',
	tool_meta_faq_a3:
		'できます。役割が異なるためです。canonical リンクは検索エンジンに優先 URL を伝え、og: タグは SNS 共有用にページを説明します。og:url は canonical URL に合わせてください。',
	tool_meta_faq_q4: 'タイトルとディスクリプションはどのくらいの長さがよいですか？',
	tool_meta_faq_a4:
		'タイトルは約 60 文字、ディスクリプションは 155〜160 文字が一般的な目安です。あくまで提案で、より長い値は検索エンジンが書き換えたり省略したりする可能性があります。',
	tool_meta_faq_q5: '空のフィールドはどうなりますか？',
	tool_meta_faq_a5:
		'空の任意フィールドはスキップされるため、生成されるスニペットには入力したフィールドのタグだけが含まれます。',
	tool_meta_faq_q6: 'データはどこかにアップロードされますか？',
	tool_meta_faq_a6: 'いいえ。生成ツールはブラウザ内だけで完結し、何もアップロードされません。',
	tool_meta_references: 'Google Search Central — Google が理解するメタタグ；タイトルリンクを制御する；Canonical URL。',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Google が理解するメタタグ',
	tool_meta_ref_searchcentral_title_label: 'Search Central — タイトルリンクを制御する',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — Canonical URL',
};

export default ja;
