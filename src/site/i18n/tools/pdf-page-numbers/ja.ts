/**
 * i18n tool shard (pdf-page-numbers / ja). 日本語検索向けに独立リライト。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_pdf_page_numbers_add: '番号を追加',
  tool_pdf_page_numbers_article:
    'ブラウザで PDF ライブラリ を使い PDF の各ページにページ番号を追加。位置・開始番号・余白を選べます。ファイルは端末内、サーバーにアップロードしません。',
  tool_pdf_page_numbers_choose_file: 'PDF を選択',
  tool_pdf_page_numbers_clear: 'クリア',
  tool_pdf_page_numbers_desc:
    'ブラウザで PDF にページ番号—位置と開始番号を指定。端末内で処理し、サーバーにアップロードしません。',
  tool_pdf_page_numbers_description:
    'ブラウザで PDF にページ番号を追加—サーバーにアップロードしません。手順：PDF を開き、下中央または四隅を選び、開始番号（既定 1）、余白、文字サイズを設定。「Page N」形式も可。番号追加後ダウンロード。例：3 ページのサンプルは下中央から 1 始まりで numbered.pdf をダウンロード可能。暗号化 PDF は明確なエラー。',
  tool_pdf_page_numbers_download: 'ダウンロード',
  tool_pdf_page_numbers_drop_hint: 'PDF をここにドロップも可。このタブ内で処理します。',
  tool_pdf_page_numbers_empty: '先に PDF を選んでください。',
  tool_pdf_page_numbers_err_encrypted: 'パスワード付き PDF のようです。解除してから再度お試しください。',
  tool_pdf_page_numbers_err_load: 'PDF を読めません（破損または非対応）。別ファイルをお試しください。',
  tool_pdf_page_numbers_err_number: '番号追加に失敗しました。ファイルと設定を確認してください。',
  tool_pdf_page_numbers_example:
    'サンプルは 3 ページ PDF を作成し、下中央から 1 で番号を付け、numbered.pdf のダウンロードを有効にします。',
  tool_pdf_page_numbers_example_title: '例',
  tool_pdf_page_numbers_faq_a1:
    'いいえ。PDF ライブラリ はタブ内で動作（CDN から読み込む場合あり）。PDF は当社サーバーに送られません。',
  tool_pdf_page_numbers_faq_a2:
    'はい—「開始番号」は 1 ページ目に表示する数字です（表紙を 0 にする、別ツールで削除後 5 から始める等）。以降は 1 ずつ増えます。',
  tool_pdf_page_numbers_faq_a3:
    '数字のみ（1, 2, 3…）または「Page N」。位置・余白（pt）・サイズは全ページ共通です。',
  tool_pdf_page_numbers_faq_a4:
    'パスワード PDF は通常開けません。信頼できる方法で解除してから番号を追加してください。',
  tool_pdf_page_numbers_faq_q1: 'PDF はアップロードされますか？',
  tool_pdf_page_numbers_faq_q2: '表紙の後から番号を始められますか？',
  tool_pdf_page_numbers_faq_q3: '形式と位置は？',
  tool_pdf_page_numbers_faq_q4: '暗号化 PDF は？',
  tool_pdf_page_numbers_font_size_label: '文字サイズ (pt)',
  tool_pdf_page_numbers_format_label: '形式',
  tool_pdf_page_numbers_format_number: '数字のみ',
  tool_pdf_page_numbers_format_page_n: 'Page N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Page {n}',
  tool_pdf_page_numbers_how_body:
    'PDF を選び、位置（既定は下中央）、開始番号、余白、文字サイズを設定し「番号を追加」→「ダウンロード」。各ページに drawText で描画。初回利用時にライブラリを読み込みます。',
  tool_pdf_page_numbers_how_item_1: "「PDF を選択」で入力ファイルを選択",
  tool_pdf_page_numbers_how_item_2: "オプションを設定し「番号を追加」を押す",
  tool_pdf_page_numbers_how_item_3: "プレビュー、ページ数、ステータスを確認",
  tool_pdf_page_numbers_how_item_4: "「ダウンロード」で結果を保存",
  tool_pdf_page_numbers_how_title: '使い方',
  tool_pdf_page_numbers_margin_label: '余白 (pt)',
  tool_pdf_page_numbers_pages_label: 'ページ数',
  tool_pdf_page_numbers_position_bc: '下中央',
  tool_pdf_page_numbers_position_bl: '左下',
  tool_pdf_page_numbers_position_br: '右下',
  tool_pdf_page_numbers_position_label: '位置',
  tool_pdf_page_numbers_position_tc: '上中央',
  tool_pdf_page_numbers_position_tl: '左上',
  tool_pdf_page_numbers_position_tr: '右上',
  tool_pdf_page_numbers_rules_body: '番号の位置・開始値・形式・プライバシーと失敗時の挙動。',
  tool_pdf_page_numbers_rules_item_1:
    '位置：下中央（既定）、上下中央、四隅。余白は PDF ポイント（既定 24 pt）。',
  tool_pdf_page_numbers_rules_item_2:
    '開始番号：ファイル 1 ページ目の数字（既定 1）。以降 +1—Organize PDF で削除後に便利。',
  tool_pdf_page_numbers_rules_item_3:
    '形式：数字または「Page N」。既定 12 pt。新しい PDF を出力；原本はサーバーに送りません。',
  tool_pdf_page_numbers_rules_item_4:
    '制限：暗号化・破損は明確に失敗；~25 MB 超は遅くなる場合あり；番号は焼き付け—元ファイルが必要。',
  tool_pdf_page_numbers_rules_title: '想定されるルール',
  tool_pdf_page_numbers_sample: 'サンプル',
  tool_pdf_page_numbers_start_at_label: '開始番号',
  tool_pdf_page_numbers_stats_tpl: '{n} ページに番号 · {bytes}',
  tool_pdf_page_numbers_status_done: '完了 — ダウンロードで numbered.pdf を保存。',
  tool_pdf_page_numbers_status_working: 'ページ番号を追加中…',
  tool_pdf_page_numbers_title: 'PDFにページ番号 — ブラウザで追加',
  tool_pdf_page_numbers_usecase_1: 'オフィス：印刷前にレポートへ番号を付け「12 ページ目」と言いやすく。',
  tool_pdf_page_numbers_usecase_2: '学生：章を結合した論文 PDF に 1–N のフッター番号。',
  tool_pdf_page_numbers_usecase_3: 'サイト運営：整理や透かし後の配布 PDF に統一番号。',
  tool_pdf_page_numbers_usecases_title: 'こんなときに',
  tool_pdf_page_numbers_warn_large: '約 25 MB 超—番号追加が遅いか失敗する場合があります。',
  tool_pdf_page_numbers_warn_pdflib: 'PDF ライブラリの読み込みに失敗。ネットワークを確認してください。',
};
export default ja;
