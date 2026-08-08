/**
 * i18n tool shard (brand-color-token-pack / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'ブランドの基準色1つから、HEX/RGB/HSL/OKLCH、50–950スケール、各段階の白黒テキストペア、コピー可能なCSS変数またはJSONまで一式をブラウザ内で生成します。',
  tool_brand_color_token_pack_bad_hex: '有効な3桁または6桁のHEXを入力してください（例: #2563EB）。',
  tool_brand_color_token_pack_base_label: '基準色',
  tool_brand_color_token_pack_clear: 'クリア',
  tool_brand_color_token_pack_contrast_col: '文字',
  tool_brand_color_token_pack_copy_css: 'CSSをコピー',
  tool_brand_color_token_pack_copy_done: 'コピー済み',
  tool_brand_color_token_pack_copy_json: 'JSONをコピー',
  tool_brand_color_token_pack_desc:
    '基準色1色 → HEX/RGB/HSL/OKLCH、50–950スケール、コントラストペア、CSS変数 — ローカル処理。',
  tool_brand_color_token_pack_description:
    'ブラウザで基準色1つからブランドカラートークン一式を作成。手順: 基準色を選ぶ（HEXまたはカラーピッカー）→ HEX/RGB/HSL/OKLCHを確認 → 50–950スケールを生成し各段階に白黒テキストのコントラストペアを表示 → CSS変数またはJSONをコピー。開くとサンプル青 #2563eb を読み込み — アップロードなし。',
  tool_brand_color_token_pack_empty: '先にトークンを生成してから、CSSまたはJSONをコピーしてください。',
  tool_brand_color_token_pack_example:
    'サンプル（#2563EB）を読み込む。色彩空間ブロックに基準色のHEX/RGB/HSL/OKLCHが表示され、スケールグリッドに50–950各段階の推奨白/黒文字とコントラスト比が並ぶ。CSSをコピーで :root { --color-50: …; … --color-950: …; } がスタイルシートにそのまま使える。',
  tool_brand_color_token_pack_example_title: '例',
  tool_brand_color_token_pack_faq_a1:
    'いいえ。色計算とエクスポートはこのタブ内で完結し、色はサーバーに送られません。',
  tool_brand_color_token_pack_faq_a2:
    '500段階が入力した基準色です。50–400は白方向へ、600–950は黒方向へ線形混合。sRGB上で色相を保ちやすいランプです。',
  tool_brand_color_token_pack_faq_a3:
    '各スウォッチでその背景に黒字・白字のWCAGコントラストを比較し、高い方を推奨文字色として表示。比率と、通常テキストがAA（4.5:1）または大きい文字AA（3:1）を満たしそうかも示します。',
  tool_brand_color_token_pack_faq_a4:
    'CSSをコピーは :root カスタムプロパティ（--color-50〜--color-950）を出力。JSONをコピーは同じスケールに基準色の各色彩空間を構造化データで返し、デザイントークンやビルドに使えます。',
  tool_brand_color_token_pack_faq_a5:
    '各段階の白黒テキストのクイック提案です。任意の前景/背景ペアや正確なWCAGレベルを確認する場合は、WCAGコントラストチェッカーを開き、任意のスウォッチHEXを貼り付けてください。',
  tool_brand_color_token_pack_faq_q1: '色はブラウザ外に出ますか？',
  tool_brand_color_token_pack_faq_q2: '50–950スケールはどう作られますか？',
  tool_brand_color_token_pack_faq_q3: 'コントラスト列の意味は？',
  tool_brand_color_token_pack_faq_q4: 'CSS/JSONのコピーには何が含まれますか？',
  tool_brand_color_token_pack_faq_q5: 'コントラストチェッカーはいつ使う？',
  tool_brand_color_token_pack_generate: '生成',
  tool_brand_color_token_pack_how_body:
    'ブランドの基準色を入力または選択。HEX/RGB/HSL/OKLCHを表示し、11段階（50–950）のスケールとUIプレビューを生成。各スウォッチに推奨白/黒文字とコントラスト比を表示。ランプが決まったらCSS変数またはJSONをコピー — すべてローカル処理。',
  tool_brand_color_token_pack_how_title: '使い方',
  tool_brand_color_token_pack_preview_label: 'UIプレビュー',
  tool_brand_color_token_pack_rules_body: 'スケール、色彩空間、コントラストの目安、プライバシーについて。',
  tool_brand_color_token_pack_rules_item_1:
    '500段階が基準色。それより明るい段階は白へ、暗い段階は黒へ線形混合（sRGB線形ブレンド）。',
  tool_brand_color_token_pack_rules_item_2:
    '基準色ブロックにHEX/RGB/HSL/OKLCHを同時表示。OKLCHは sRGB → 線形 → OKLab 変換で、現行CSS色構文と比較しやすくしています。',
  tool_brand_color_token_pack_rules_item_3:
    '各スウォッチで黒字か白字か — その背景でコントラストが高い方を推奨。比率はWCAG相対輝度に基づき、AA表示は目安であり完全監査ではありません。',
  tool_brand_color_token_pack_rules_item_4:
    'プライバシー: 生成・プレビュー・コピーはこのタブ内で完結。ブランド色はアップロードされません。',
  tool_brand_color_token_pack_rules_title: '知っておきたいルール',
  tool_brand_color_token_pack_sample: 'サンプル',
  tool_brand_color_token_pack_scale_label: 'カラースケール（50–950）',
  tool_brand_color_token_pack_spaces_label: '色彩空間（基準色）',
  tool_brand_color_token_pack_text_on: '基準色上の文字',
  tool_brand_color_token_pack_title: 'ブランド色スケールを生成 — 50–950パレットとCSSトークン',
  tool_brand_color_token_pack_ui_body: '基準色背景での本文プレビューと推奨文字色。',
  tool_brand_color_token_pack_ui_btn: '主要ボタン',
  tool_brand_color_token_pack_ui_title: 'プレビュー見出し',
  tool_brand_color_token_pack_usecase_1:
    'デザインシステム: ブランドHEX1色から50–950ランプとCSS変数を揃え、コンポーネントに配布。',
  tool_brand_color_token_pack_usecase_2:
    'ダークモード設計: 明るい段階（50–300）でサーフェス、深い段階（700–950）でブランド上の文字色を検討。',
  tool_brand_color_token_pack_usecase_3:
    '開発引き渡し: スクショからHEXを打ち直す代わりにJSONトークンやCSSカスタムプロパティをコピー。',
  tool_brand_color_token_pack_usecases_title: 'こんなときに',
};
export default ja;
