/**
 * i18n tool shard (smart-website-color-scheme / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'AA未満',
  tool_smart_website_color_scheme_aa_pass: 'AA OK',
  tool_smart_website_color_scheme_add_theme: 'テーマを追加',
  tool_smart_website_color_scheme_article:
    'ブランド色ひとつからサイト配色を組み立てます。共有ニュートラル、セマンティックトークン（リンクは中立・ステータスは固定）、ライトな UI プレビュー、コントラスト自己チェック、貼れる :root CSS —— すべてブラウザ内で完結します。',
  tool_smart_website_color_scheme_bad_hex: '3桁または6桁の有効な HEX を入力してください（例: #0F6E8C）。',
  tool_smart_website_color_scheme_bad_id:
    'テーマ id は一意で、1–32 文字の英数字・-・_ のみです。',
  tool_smart_website_color_scheme_check_muted: 'サーフェス上の補助テキスト',
  tool_smart_website_color_scheme_check_on_action: 'アクション上の文字（on-action）',
  tool_smart_website_color_scheme_check_text: 'サーフェス上の本文',
  tool_smart_website_color_scheme_checks_label: 'コントラスト自己チェック（アクティブテーマ）',
  tool_smart_website_color_scheme_clear: 'クリア',
  tool_smart_website_color_scheme_col_role: '役割',
  tool_smart_website_color_scheme_col_token: 'トークン',
  tool_smart_website_color_scheme_col_value: '値',
  tool_smart_website_color_scheme_copy_css: 'CSSをコピー',
  tool_smart_website_color_scheme_copy_done: 'コピー済み',
  tool_smart_website_color_scheme_copy_json: 'JSONをコピー',
  tool_smart_website_color_scheme_cp_brand: 'ブランド',
  tool_smart_website_color_scheme_cp_btn: 'アウトラインボタン',
  tool_smart_website_color_scheme_cp_card_body:
    'カード本文はミュート色。リンクは中立のまま——ブランドのアクション色ではありません。',
  tool_smart_website_color_scheme_cp_card_title: 'カード見出し',
  tool_smart_website_color_scheme_cp_err: 'エラーは danger。ブランド色は使いません。',
  tool_smart_website_color_scheme_cp_link: '関連リンク',
  tool_smart_website_color_scheme_cp_nav: 'ナビ項目',
  tool_smart_website_color_scheme_cp_side1: 'サイドバー',
  tool_smart_website_color_scheme_cp_side2: '選択中',
  tool_smart_website_color_scheme_desc:
    'サイト配色：ニュートラル＋セマンティック CSS トークン。中立リンクと固定ステータス——ローカル。',
  tool_smart_website_color_scheme_description:
    'ブラウザだけでサイト配色方案を生成します。手順：ブランド HEX（サンプルのティール #0F6E8C）を選び、共有ニュートラル、action/hover/soft/focus、中立リンク、固定ステータス色、UI プレビュー、AA 自己チェックを確認し、:root CSS か JSON をコピー。開くと例が自動表示。ルールベースでクラウド AI ではなく、色はアップロードしません。',
  tool_smart_website_color_scheme_empty: '先に方案を生成してから CSS か JSON をコピーしてください。',
  tool_smart_website_color_scheme_example:
    'サンプルを読み込みます（テーマ id teal、#0F6E8C）。プレビューは白サーフェス、選択中サイドバーのティール薄い背景（左の色棒なし）、中立本文リンク、赤の danger 行です。セマンティクスは --link をテキスト色に割り当て（--action ではありません）。CSS コピーで :root のニュートラルと html[data-theme="teal"] の上書きが得られます。',
  tool_smart_website_color_scheme_example_title: '例',
  tool_smart_website_color_scheme_faq_a1:
    'ここでの「スマート」は決定的なルールです。ニュートラルは固定、ブランドから action/hover/soft/focus を導き、リンクは中立、ステータス色はブランドに追従しません。モデル呼び出しもアップロードもなく、計算はこのタブ内です。',
  tool_smart_website_color_scheme_faq_a2:
    '既定リンクはテキスト色を使い、ページ全体がブランド色のリンク壁にならないようにします。ブランド色はアクション・選択・フォーカスリング・薄い soft 塗りに残します。',
  tool_smart_website_color_scheme_faq_a3:
    'danger / success / warning / info はテーマをまたいで固定です。琥珀色のブランドがエラー色になると、UI 全体が警報に見えてしまいます。',
  tool_smart_website_color_scheme_faq_a4:
    '50–950 のランプや HEX/HSL/OKLCH 一覧が要るときは「ブランド色スケールを生成」を使ってください。このページは貼れるライトサイトのセマンティック方案（bg/surface/link/action/status）向けです。',
  tool_smart_website_color_scheme_faq_a5:
    '自己チェックはアクティブテーマの主要ペア数組です。任意の前景/背景や AAA は WCAG コントラストチェッカーにトークン HEX を貼って確認してください。',
  tool_smart_website_color_scheme_faq_q1: '「スマート」は AI 配色と同じですか？',
  tool_smart_website_color_scheme_faq_q2: 'なぜリンクはブランド色ではないのですか？',
  tool_smart_website_color_scheme_faq_q3: 'ステータス色がテーマで変わらない理由は？',
  tool_smart_website_color_scheme_faq_q4: 'ブランド色スケール生成はいつ使う？',
  tool_smart_website_color_scheme_faq_q5: 'コントラスト自己チェックの範囲は？',
  tool_smart_website_color_scheme_generate: '生成',
  tool_smart_website_color_scheme_how_body:
    'ブランドテーマを最大4つ（id + HEX）入力します。共有ニュートラル階段を保ち、各ブランドからアクション系トークンを導き、セマンティック役割（中立リンクと固定ステータスを含む）を割り当て、ライトな chrome を描き、AA 自己チェックを走らせ、CSS 変数か JSON をコピーできます——すべてローカルです。',
  tool_smart_website_color_scheme_how_title: '使い方',
  tool_smart_website_color_scheme_max_themes: '同じニュートラルを共有するテーマは最大4つまで追加できます。',
  tool_smart_website_color_scheme_preview_label: 'ライト UI プレビュー',
  tool_smart_website_color_scheme_primitives_label: 'プリミティブ（アクティブテーマ＋共有ニュートラル）',
  tool_smart_website_color_scheme_remove_theme: '削除',
  tool_smart_website_color_scheme_role_action: 'アクション / ブランド強調',
  tool_smart_website_color_scheme_role_bg: 'ページ / セクション背景',
  tool_smart_website_color_scheme_role_border: '境界線と区切り',
  tool_smart_website_color_scheme_role_focus: 'フォーカスリング',
  tool_smart_website_color_scheme_role_link: '既定リンク（中立）',
  tool_smart_website_color_scheme_role_muted: '補助テキスト',
  tool_smart_website_color_scheme_role_on_action: '塗りつぶしアクション上の文字',
  tool_smart_website_color_scheme_role_status: 'ステータス（ブランドと分離）',
  tool_smart_website_color_scheme_role_surface: '浮きサーフェス / カード',
  tool_smart_website_color_scheme_role_text: '本文 / 強調テキスト',
  tool_smart_website_color_scheme_rules_body:
    'トークン階層、リンクとアクションの分離、ステータス独立、コントラストの目安、プライバシー。',
  tool_smart_website_color_scheme_rules_item_1:
    'プリミティブは生のニュートラルとブランド派生を持ちます。セマンティクスは用途名（bg, surface, link, action…）。コンポーネントはセマンティクスだけを参照してください。',
  tool_smart_website_color_scheme_rules_item_2:
    'ブランド → --action。hover は約22%暗く、soft ≈ 透明度10%、focus-ring ≈ 透明度40%、--bg はごく薄い色付きニュートラルです。',
  tool_smart_website_color_scheme_rules_item_3:
    'リンクは text / text-strong（中立）へ。既定の --link を --action に結びつけないでください。',
  tool_smart_website_color_scheme_rules_item_4:
    'danger / success / warning / info はテーマ横断で固定し、ブランドがエラー意味を置き換えないようにします。',
  tool_smart_website_color_scheme_rules_item_5:
    'プライバシー：生成・プレビュー・クリップボードコピーはこのタブ内。ブランド色はアップロードしません。',
  tool_smart_website_color_scheme_rules_title: '想定されるルール',
  tool_smart_website_color_scheme_sample: 'サンプル読込',
  tool_smart_website_color_scheme_semantics_label: 'セマンティクス（アクティブテーマ）',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'テーマ id',
  tool_smart_website_color_scheme_themes_hint:
    'ニュートラルとステータス色は共有。各テーマはブランド派生トークンだけを上書き。最大4テーマ。',
  tool_smart_website_color_scheme_themes_label: 'ブランドテーマ',
  tool_smart_website_color_scheme_title: 'サイト配色方案 — 貼れるセマンティック CSS トークン',
  tool_smart_website_color_scheme_usecase_1:
    'ツールサイトや SaaS の chrome：読みやすいライト骨格に、選択とフォーカスだけブランドアクセント。全リンクを染めません。',
  tool_smart_website_color_scheme_usecase_2:
    'ランディングのリブランディング：html[data-theme] でブランドを差し替え、ニュートラル骨格とステータス色はそのまま。',
  tool_smart_website_color_scheme_usecase_3:
    'デザイン→開発の受け渡し：スクショの HEX 一覧ではなく :root CSS 変数を貼る。',
  tool_smart_website_color_scheme_usecases_title: '利用シーン',
  tool_smart_website_color_scheme_warn_contrast:
    '警告：アクション色上の文字が 4.5:1 未満です——塗りつぶしボタン公開前にブランドを深くするか --on-action を調整してください。',
};
export default ja;
