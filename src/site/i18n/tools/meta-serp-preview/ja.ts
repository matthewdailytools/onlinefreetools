/**
 * i18n tool shard (meta-serp-preview / ja).
 * Japanese locale — 検索向けに独立して書き直し。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_serp_home_title: 'Google 検索結果プレビュー',
	tool_serp_home_desc: '検索結果でタイトルが切れるとクリックを逃す——公開前に切れ目を確認。',
	tool_serp_title: 'Google 検索結果プレビュー — タイトルと説明文の切れ目を確認',
	tool_serp_description:
		'検索結果でタイトルが切れるとクリックを逃します。タイトルと説明文を貼り、デスクトップとモバイルの切れ目、文字数とピクセル目安を確認します。ブラウザ内で完結し、アップロードはありません。手順は明確で例もあります。プライバシーに配慮し、本文はアップロードしません。',
	tool_serp_preview: 'プレビュー',
	tool_serp_sample: 'サンプル',
	tool_serp_clear: 'クリア',
	tool_serp_copy: 'コピー',
	tool_serp_copied: 'コピーしました',
	tool_serp_title_label: 'タイトル',
	tool_serp_title_ph: '検索結果に表示されるページタイトル',
	tool_serp_desc_label: 'メタディスクリプション',
	tool_serp_desc_ph: '検索結果のタイトルの下に表示される要約文',
	tool_serp_url_label: 'URL（任意）',
	tool_serp_url_ph: '例：https://example.com/page',
	tool_serp_compare_label: '2 つ目のタイトルと比較',
	tool_serp_title_b_label: 'タイトル B',
	tool_serp_title_b_ph: '比較する候補タイトルを貼り付け',
	tool_serp_desktop: 'デスクトップ表示',
	tool_serp_mobile: 'モバイル表示',
	tool_serp_char_count: '{n} 文字',
	tool_serp_px_width: '約 {n}px',
	tool_serp_cut_warning: '切れています — 行が約 {limit}px のビューポートを超えています',
	tool_serp_fit: 'ビューポート内に収まっています',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'プレビューするにはタイトルを入力してください。',
	tool_serp_how_title: '使い方',
	tool_serp_how_body:
		'タイトル・説明文・任意の URL を入力または貼り付けます。フォント幅の近似計算で各行の文字数とおおよそのピクセル幅を求め（全角かな・漢字は約 1em、半角英数字は約 0.55em として計算）、デスクトップ用とモバイル用の Google 風スニペットを描画します。推定ビューポート幅を超えた行には切れ目マークが付きます。',
	tool_serp_how_item_1: 'タイトルと meta description を入力する（表示 URL は任意）。',
	tool_serp_how_item_2: '両方のプレビューが重要ならデスクトップ/モバイル表示を切り替える。',
	tool_serp_how_item_3: '編集しながら文字数とピクセルヒントを確認する。',
	tool_serp_how_item_4: 'プレビューがきれいに切れるまで文言を調整する。',
	tool_serp_rules_title: 'プレビューで分かること',
	tool_serp_rules_body:
		'ピクセル上限は目安です。Google は文字数ではなく描画幅で切り捨てるため、文字が密な言語や幅の広い文字は少ない文字数で切れます。',
	tool_serp_rules_item_1: 'デスクトップのタイトル上限は約 600px、モバイルは約 460px と推定。これより広い行には切れ目マークが付きます。',
	tool_serp_rules_item_2: '説明文は約 2 行と推定（デスクトップは 1 行約 600px、モバイルは約 460px）。',
	tool_serp_rules_item_3: '文字幅は近似で計算：半角英数字は約 0.5em、全角かな・漢字は約 1em、絵文字はさらに広め。',
	tool_serp_rules_item_4: 'これらは計画用の目安です。Google がタイトルや説明文を書き換えることもあり、実際の表示は検索者のフォントとビューポートに依存します。',
	tool_serp_example_title: '例',
	tool_serp_example:
		'例：タイトル「Meta SERP Preview — How to Preview Google Title & Description Truncation Online」、説明文 2 行分、URL example.com/page → デスクトップでは 57 文字目付近で「…」と切れ、モバイルではさらに早く切れます。説明文は 2 行内に収まります。',
	tool_serp_usecases_title: 'こんなときに',
	tool_serp_usecase_1: '公開前：最終のタイトルと説明文を貼り、キーワードがピクセル切れで消えないか確認。',
	tool_serp_usecase_2: '候補タイトルを 2 つ並べて比較し、モバイルでもメインキーワードが見える方を選ぶ。',
	tool_serp_usecase_3: '日本語ページ：全角文字は幅が広いので、何文字までなら切れずに収まるかを確認する。',
	tool_serp_faq_q1: 'なぜ 30 文字の日本語タイトルが 60 文字の英語タイトルより先に切れるのですか？',
	tool_serp_faq_a1: '検索結果は文字数ではなく描画ピクセル幅で切られます。全角文字は約 1em、英字は平均約 0.5em なので、同じビューポートでも日本語は少ない文字数で埋まります。',
	tool_serp_faq_q2: 'ピクセル上限は正確ですか？',
	tool_serp_faq_a2: 'いいえ。デスクトップとモバイルのビューポートは端末とフォントによって変わります。このツールはよく引用されるデスクトップ約 600px・モバイル約 460px を計画用の目安として使い、Google の実際の描画を保証するものではありません。',
	tool_serp_faq_q3: 'Google のツールで最終的なスニペットを確認できますか？',
	tool_serp_faq_a3: 'できません。URL 検査が返すのはクロールとインデックスの状況、それとレンダリング後のスクリーンショットで、リッチリザルトテストは構造化データの対象条件を調べるだけです。どちらもテキストのスニペットをプレビューする機能ではありません。さらに Google はクエリとタイトルが噛み合わないときにタイトルリンクを書き換えるため、確実に確かめる方法は公開中の URL を実際に検索することだけです。',
	tool_serp_faq_q4: 'タイトルはどこかに送信されますか？',
	tool_serp_faq_a4: 'いいえ。テキストはすべてブラウザのタブ内に留まり、サーバーへ送信されることはありません。タブを閉じればすべて消えます。',
	tool_serp_references: 'Google Search Central — 検索結果のタイトルの管理；Google Search Central — スニペットの管理。',
	tool_serp_ref_title_label: 'Search Central — タイトル リンクを管理',
	tool_serp_ref_snippet_label: 'Search Central — スニペットを管理',
};

export default ja;
