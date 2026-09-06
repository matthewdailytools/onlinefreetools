/**
 * i18n tool shard (pdf-to-jpg / ja). 日本語検索向けに独立リライト。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'ページ描画 で各ページを JPEG に描画します。複数ページは ZIP ライブラリ で ZIP 化。ファイルは端末から出ません。',
  tool_pdf_to_jpg_choose_file: 'PDF を選択',
  tool_pdf_to_jpg_clear: 'クリア',
  tool_pdf_to_jpg_convert: '変換',
  tool_pdf_to_jpg_desc: 'PDF の各ページを JPG に—複数ページは ZIP、サーバーにアップロードしません。',
  tool_pdf_to_jpg_description:
    'ブラウザで PDF の各ページを JPG 画像に変換します。ファイルは端末内で処理され、サーバーにアップロードされません。手順：PDF を選び「変換」→「ダウンロード」。例：2 ページのサンプルは page-1.jpg と page-2.jpg を含む ZIP になります。1 ページだけなら JPG を直接保存。パスワード付きや破損ファイルは明確なエラーを表示します。',
  tool_pdf_to_jpg_download: 'ダウンロード',
  tool_pdf_to_jpg_drop_hint: 'PDF をここにドロップも可。このタブ内で処理します。',
  tool_pdf_to_jpg_empty: '先に PDF を選んでください。',
  tool_pdf_to_jpg_err_convert: '変換に失敗しました。ファイルを確認して再試行してください。',
  tool_pdf_to_jpg_err_encrypted: 'この PDF はパスワード保護の可能性があります。解除してから再試行してください。',
  tool_pdf_to_jpg_err_fflate: 'ZIP ライブラリの読み込みに失敗しました。ネットワークを確認してください。',
  tool_pdf_to_jpg_err_load: 'PDF を読み取れません（破損または非対応）。別ファイルをお試しください。',
  tool_pdf_to_jpg_err_pdfjs: 'PDF レンダラーの読み込みに失敗しました。ネットワークを確認してください。',
  tool_pdf_to_jpg_example:
    'サンプルは 2 ページの PDF を作成し、各ページを変換して page-1.jpg と page-2.jpg の ZIP をダウンロード可能にします。',
  tool_pdf_to_jpg_example_title: 'PDF の各ページを JPG に変換',
  tool_pdf_to_jpg_faq_a1:
    'いいえ。ページ描画 と ZIP ライブラリ はタブ内で動作します（スクリプトは このサイトから読み込まれます）。PDF は当社サーバーに送られません。',
  tool_pdf_to_jpg_faq_a2:
    '2 ページ以上 → pdf-pages.zip（page-1.jpg、page-2.jpg…）。1 ページのみ → JPG 1 ファイル。',
  tool_pdf_to_jpg_faq_a3:
    '画像から PDF は写真を 1 つの PDF にまとめます。こちらは PDF の各ページを JPG 画像として書き出します。',
  tool_pdf_to_jpg_faq_a4:
    'ページは 2 倍スケールで描画し、文字をくっきり表示します。ページ数が多いと時間とメモリを多く使います。',
  tool_pdf_to_jpg_faq_a5:
    'このページは JPG のみです。既存画像を PNG や WebP にしたい場合は画像形式変換をご利用ください。',
  tool_pdf_to_jpg_faq_q1: 'PDF はアップロードされますか？',
  tool_pdf_to_jpg_faq_q2: 'ZIP と JPG 1 枚の違いは？',
  tool_pdf_to_jpg_faq_q3: '画像から PDF との違いは？',
  tool_pdf_to_jpg_faq_q4: 'JPG の鮮明さは？',
  tool_pdf_to_jpg_faq_q5: 'PNG も出せますか？',
  tool_pdf_to_jpg_how_body:
    'PDF を選び「変換」→「ダウンロード」。各ページが JPG になり、複数ページは ZIP 化。ライブラリ読み込み後は端末内で完結します。',
  tool_pdf_to_jpg_how_title: '使い方',
  tool_pdf_to_jpg_pages_label: 'ページ数',
  tool_pdf_to_jpg_rules_body: '描画倍率、JPG 出力、ZIP/単体、プライバシーと失敗時の挙動。',
  tool_pdf_to_jpg_rules_item_1: '各ページを 2 倍スケール・品質 0.92 の JPEG に—スライドやスキャン向け。',
  tool_pdf_to_jpg_rules_item_2: '命名：N ページ目は page-N.jpg。複数ページは pdf-pages.zip。',
  tool_pdf_to_jpg_rules_item_3: '出力：1 ページ → JPG 単体；2 ページ以上 → ZIP ライブラリ ZIP。',
  tool_pdf_to_jpg_rules_item_4:
    'プライバシーと制限：データはタブ内；暗号化/破損 PDF は明確にエラー；約 25 MB 超は遅くなる場合あり。',
  tool_pdf_to_jpg_rules_title: '想定されるルール',
  tool_pdf_to_jpg_sample: 'サンプルを読み込む',
  tool_pdf_to_jpg_stats_tpl: '{n} ページ · {bytes}',
  tool_pdf_to_jpg_status_converting: 'ページを JPG に変換中…',
  tool_pdf_to_jpg_status_done: '完了 — ダウンロードをクリックして保存。',
  tool_pdf_to_jpg_title: 'PDF ページを JPG に変換',
  tool_pdf_to_jpg_usecase_1: '仕事：スライドや署名ページをチャット用 JPG に。',
  tool_pdf_to_jpg_usecase_2: 'マーケ：カタログ PDF からサムネ JPG を抽出。',
  tool_pdf_to_jpg_usecase_3: '学生：講義 PDF のページをノートアプリ用画像に。',
  tool_pdf_to_jpg_usecases_title: 'こんなときに',
  tool_pdf_to_jpg_warn_large: '約 25 MB 超 — 変換が遅い、またはブラウザによって失敗する場合があります。',
  tool_pdf_to_jpg_warn_pdflib: 'PDF ライブラリの読み込みに失敗しました。ネットワークを確認してください。',
};
export default ja;
