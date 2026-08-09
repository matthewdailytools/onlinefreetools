/**
 * i18n tool shard (robots-txt-generator / ja).
 * Japanese locale — 検索向けに独立して書き直し。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_robots_home_title: 'robots.txt 生成ツール',
	tool_robots_home_desc: 'robots.txt で検索エンジンのクロール範囲を制御——許可・拒否・AI クローラーをブラウザ内で作成。',
	tool_robots_title: 'robots.txt 生成ツール — AI クローラーを拒否してアクセスを制御',
	tool_robots_description:
		'robots.txt は Google にどのページをクロール・インデックスしてよいかを伝えるファイルです。誤ったルールはサイト全体を検索結果から隠してしまいます。ブラウザ内で robots.txt を生成。手順：User-agent を選び、各グループに Allow / Disallow パスと Sitemap 行を追加し、構文ルールと最新の AI クローラー向け User-agent の説明付きで結果をコピー。すべてローカルで完結し、アップロードは一切ありません。例：GPTBot をブロックしつつ Googlebot は完全に許可する構成。',
	tool_robots_generate: '生成',
	tool_robots_sample: 'サンプル',
	tool_robots_clear: 'クリア',
	tool_robots_copy: 'コピー',
	tool_robots_copied: 'コピーしました',
	tool_robots_agents_label: 'User-agent',
	tool_robots_agents_hint: '含めたいクローラーにチェックを入れ、各グループにパスを追加してください。',
	tool_robots_include: 'この User-agent を含める',
	tool_robots_agent_add: 'カスタムエージェントを追加',
	tool_robots_agent_remove: 'エージェントを削除',
	tool_robots_allow_label: 'Allow パス（1 行に 1 つ）',
	tool_robots_disallow_label: 'Disallow パス（1 行に 1 つ）',
	tool_robots_sitemap_label: 'Sitemap URL（任意）',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'ダウンロード',
	tool_robots_empty_agent: '先に User-agent を選ぶか追加してください。',
	tool_robots_owner_of: '運営元：{owner}',
	tool_robots_how_title: '使い方',
	tool_robots_how_body:
		'対象のクローラーを選び、グループごとに Allow と Disallow パスを追加し、必要なら Sitemap 行を入れて「生成」を押します。ページが RFC 9309 のレイアウトに沿ってテキストを組み立てます：グループごとに User-agent 行、その下に Allow/Disallow 行、グループ間は空行、末尾に Sitemap 行。結果をサイトのルート /robots.txt に配置してください。',
	tool_robots_rules_title: '押さえておきたい構文ルール',
	tool_robots_rules_body:
		'robots.txt のルールはパスプレフィックスで、正規表現ではありません。クローラーはファイル内で最後に一致したグループを適用します。このツールが従うルールは次のとおりです。',
	tool_robots_rules_item_1: 'グループの順序：User-agent 行でそのクローラー向けグループが始まり、空行で終わります。最後に一致したグループが優先されます。',
	tool_robots_rules_item_2: 'プレフィックス一致：Allow と Disallow はパスプレフィックスで照合され、部分一致や正規表現ではありません。特殊文字は * と $ のみ（RFC 9309）。',
	tool_robots_rules_item_3: 'Disallow: / はそのエージェントをサイト全体からブロックします。値が空の Disallow はそのエージェントにすべて許可します。',
	tool_robots_rules_item_4: 'Sitemap は拡張であり、RFC 9309 の一部ではありません。大文字小文字を問わず任意の位置に書けますが、通常は末尾に置きます。',
	tool_robots_example_title: '例',
	tool_robots_example:
		'サンプル：Googlebot は Allow: /（完全許可）、GPTBot は Disallow: /（ブロック）、最後に Sitemap 行が /sitemap.xml を指す構成。出力はクローラーごとに 1 グループ、グループ間は空行、末尾に sitemap というレイアウトになります。',
	tool_robots_usecases_title: 'こんなときに',
	tool_robots_usecase_1: '新規サイト：検索エンジンを有効に保ちつつ、非公開のステージングパスを隠す初期 robots.txt を生成。',
	tool_robots_usecase_2: 'AI クローラー対策：Googlebot には触れずに、GPTBot・ClaudeBot・Google-Extended・CCBot・PerplexityBot を学習や要約抽出からブロック。',
	tool_robots_usecase_3: '発見性向上：robots.txt に Sitemap 行を入れて、クローラーがサイトマップを見つけやすくする。',
	tool_robots_faq_q1: 'Disallow: / と書くとどうなりますか？',
	tool_robots_faq_a1: 'そのクローラーにサイトルート配下の URL を取得しないよう伝えます。Googlebot に Disallow: / を設定すると、ページが Google 検索から消える可能性があります。ステージングは Disallow: /private/ のように具体的なパスで指定してください。',
	tool_robots_faq_q2: 'GPTBot などの AI クローラーはどうブロックしますか？',
	tool_robots_faq_a2: 'クローラーの User-agent（例：GPTBot、ClaudeBot、Google-Extended、CCBot、PerplexityBot）でグループを作り、Disallow: / を追加します。AI クローラーは User-agent や IP 帯を更新することがあるため、公式ドキュメントを確認してください。',
	tool_robots_faq_q3: 'Sitemap 行はどこに置くべきですか？',
	tool_robots_faq_a3: '位置は検索エンジンの読み取りに影響しませんが、慣例ではファイル末尾に置きます。このツールは URL を入力すると末尾に追加します。',
	tool_robots_faq_q4: 'robots.txt はどこかにアップロードされますか？',
	tool_robots_faq_a4: 'いいえ。ファイルはブラウザ内で生成され、サーバーに送信されることはありません。タブを閉じれば何も残りません。',
	tool_robots_references: 'RFC 9309 Robots Exclusion Protocol；Google Search Central — robots.txt；Google Search Central — AI クローラーの管理。',
	tool_robots_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — AI クローラーの管理',
};

export default ja;
