/**
 * i18n tool shard (svg-optimizer / ja).
 * H1: SVGオプティマイザー / SVGを圧縮。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語文案。 */
const ja: SiteLangDict = {
	tool_svg_optimizer_article:
		'SVG を貼り付けまたはドロップし、オプションでクリーンアップしてバイト削減とプレビューを確認。SVGOMG 風の操作で、端末内処理・サーバーにアップロードしません。',
	tool_svg_optimizer_choose_file: 'SVG ファイルを選ぶ',
	tool_svg_optimizer_clear: 'クリア',
	tool_svg_optimizer_copy: 'コピー',
	tool_svg_optimizer_desc:
		'ブラウザで SVG を圧縮し、バイト削減とプレビューを表示。端末内・サーバー非送信。',
	tool_svg_optimizer_description:
		'SVGオプティマイザー：SVG を貼付またはドロップし、クリーンアップオプションを選んで最適化前後のバイトとプレビューを比較。例：初回表示でサンプルアイコンが読み込まれ、コメントとエディタメタデータ削除でサイズが減ります。結果をコピーまたはダウンロード。ファイルは端末内に留まり、サーバーにアップロードしません。フル SVGO ではない軽量ブラウザ処理です。',
	tool_svg_optimizer_download: 'ダウンロード',
	tool_svg_optimizer_drop_hint: '.svg をここにドロップも可。このタブ内で最適化します。',
	tool_svg_optimizer_empty: '先に SVG を貼るかファイルを選んでください。',
	tool_svg_optimizer_err_not_svg: 'SVG に見えません。<svg> ルートを含む markup を貼ってください。',
	tool_svg_optimizer_example:
		'サンプル読込で XML コメント、Inkscape 名前空間、余分な空白、長い小数を含むアイコンを挿入。全オプション ON でバイトが減り、プレビューは同じ見た目です。',
	tool_svg_optimizer_example_title: '例',
	tool_svg_optimizer_faq_a1:
		'いいえ。このタブ内で読み取りと最適化のみ行い、当社サーバーへ POST しません。',
	tool_svg_optimizer_faq_a2:
		'軽量テキスト処理（コメント、メタデータ、空白、丸め、空グループ）です。フル SVGO の深度が必要なら SVGO を使ってください。',
	tool_svg_optimizer_faq_a3:
		'コメント削除：<!-- … --> を除去。エディタメタデータ：Inkscape/Sketch 系 xmlns・属性・<metadata> を除去。空白折りたたみ：タグ間を結合。数値丸め：パスを小数2桁。空グループ：<g></g> などを除去。',
	tool_svg_optimizer_faq_a4:
		'プレビューは最適化 SVG を画像として表示するだけで、ページ DOM に markup を注入しません。',
	tool_svg_optimizer_faq_q1: 'SVG はアップロードされますか？',
	tool_svg_optimizer_faq_q2: 'SVGO や SVGOMG との違いは？',
	tool_svg_optimizer_faq_q3: '各オプションの意味は？',
	tool_svg_optimizer_faq_q4: 'プレビューは安全ですか？',
	tool_svg_optimizer_how_body:
		'SVG を貼付またはドロップし、クリーンアップオプションを調整、バイトとプレビューを確認してコピーまたはダウンロード。すべてブラウザ内で完結します。',
	tool_svg_optimizer_how_item_1: 'SVG markup を貼るか .svg ファイルをドロップ。',
	tool_svg_optimizer_how_item_2: 'オプション：コメント、エディタメタデータ、空白、小数、空グループ。',
	tool_svg_optimizer_how_item_3: '元バイト、最適化後バイト、削減率を確認。',
	tool_svg_optimizer_how_item_4: 'プレビューを確認し、コピーまたは optimized.svg を保存。',
	tool_svg_optimizer_how_title: '使い方',
	tool_svg_optimizer_input_label: 'SVG 入力',
	tool_svg_optimizer_input_ph: '<svg>…</svg> をここに…',
	tool_svg_optimizer_load_sample: 'サンプル読込',
	tool_svg_optimizer_opt_collapse_whitespace: 'タグ間の空白を折りたたむ',
	tool_svg_optimizer_opt_round_numbers: 'パス数値を小数2桁に丸める',
	tool_svg_optimizer_opt_strip_comments: 'XML/HTML コメントを削除',
	tool_svg_optimizer_opt_strip_empty: '空の <g> と属性の余分な空白を削除',
	tool_svg_optimizer_opt_strip_metadata: 'エディタメタデータを削除（Inkscape、Sketch 等）',
	tool_svg_optimizer_optimize: '最適化',
	tool_svg_optimizer_options_label: 'オプション',
	tool_svg_optimizer_output_label: '最適化後 SVG',
	tool_svg_optimizer_preview_label: 'プレビュー',
	tool_svg_optimizer_rules_body:
		'ブラウザ SVG クリーンアップは即時フィードバック重視。公開前に確認してください。',
	tool_svg_optimizer_rules_item_1:
		'本番アイコンではコメントとエディタ xmlns は通常削除して問題ありません。',
	tool_svg_optimizer_rules_item_2:
		'座標丸めはサイズ削減に有効ですがストロークが微動する場合あり — プレビュー必須。',
	tool_svg_optimizer_rules_item_3:
		'空グループ削除は Sketch/Figma 出力向け；id/transform 付きグループは残します。',
	tool_svg_optimizer_rules_item_4:
		'ラスタも圧縮するなら画像オプティマイザーと併用 — ここはベクター専用。',
	tool_svg_optimizer_rules_title: '知っておくこと',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: '最適化後',
	tool_svg_optimizer_size_original: '元',
	tool_svg_optimizer_size_saved: '削減',
	tool_svg_optimizer_stats_tpl: '元 {orig} B → 最適化 {opt} B（{pct}% 削減）',
	tool_svg_optimizer_status_copied: 'クリップボードにコピーしました。',
	tool_svg_optimizer_status_done: '最適化完了 — バイトとプレビューを確認。',
	tool_svg_optimizer_title: 'SVGオプティマイザー',
	tool_svg_optimizer_usecase_1: 'Sketch から出したアイコンを repo に入れる前にサイズを削る。',
	tool_svg_optimizer_usecase_2: 'ランディングのインライン SVG を SVGO なしで軽量化。',
	tool_svg_optimizer_usecase_3: 'デザイン引き渡し SVG からコメントとメタデータだけ落とす。',
	tool_svg_optimizer_usecases_title: 'こんなときに',
};

export default ja;
