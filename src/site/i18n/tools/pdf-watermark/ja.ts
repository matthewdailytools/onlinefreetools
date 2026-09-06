/**
 * i18n tool shard (pdf-watermark / ja). 検索向けに独立リライト。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_pdf_watermark_apply: '適用',
  tool_pdf_watermark_article:
    'PDF ライブラリ で PDF の全ページに DRAFT や CONFIDENTIAL などの文字を重ねます。PNG/JPG ロゴも可。ファイルは端末内、サーバーにアップロードしません。',
  tool_pdf_watermark_choose_file: 'PDF を選択',
  tool_pdf_watermark_clear: 'クリア',
  tool_pdf_watermark_desc:
    'ブラウザで PDF 全ページに文字透かし — サーバーにアップロードせず、端末内で処理します。',
  tool_pdf_watermark_description:
    'ブラウザで PDF の各ページに文字透かしを入れます — サーバーにアップロードしません。手順：PDF を開き、透かし文字（例 DRAFT）を入力、不透明度と角度を設定、必要なら PNG/JPG ロゴを追加、適用してダウンロード。例：2 ページのサンプルに DRAFT を中央・−45°・35% で全ページに印字し watermarked.pdf を保存可能。暗号化 PDF は明確なエラー。画像ウォーターマークや PDF 回転とは用途が異なります。',
  tool_pdf_watermark_download: 'ダウンロード',
  tool_pdf_watermark_drop_hint: 'PDF をここにドロップも可。このタブ内で処理します。',
  tool_pdf_watermark_empty: '透かしを入れる PDF を追加してください。',
  tool_pdf_watermark_err_apply: '透かしの適用に失敗しました。ファイルと設定を確認してください。',
  tool_pdf_watermark_err_encrypted: 'パスワード付き PDF の可能性があります。解除してからお試しください。',
  tool_pdf_watermark_err_image: '画像を読み込めません。PNG または JPG を使ってください。',
  tool_pdf_watermark_err_load: 'PDF を読み込めません（破損または非対応）。別ファイルをお試しください。',
  tool_pdf_watermark_example:
    'サンプルは 2 ページ PDF を生成し、DRAFT を中央・35% 不透明度・−45° で全ページに適用、watermarked.pdf のダウンロードを有効にします。',
  tool_pdf_watermark_example_title: '例',
  tool_pdf_watermark_faq_a1:
    'いいえ。PDF ライブラリ はタブ内で動作（このサイトから読み込みます）。PDF は当社サーバーに送られません。',
  tool_pdf_watermark_faq_a2:
    '画像ウォーターマークは写真に文字やロゴを重ねます。本ツールは PDF 文書の各ページにスタンプ — 用途が異なります。',
  tool_pdf_watermark_faq_a3:
    'いいえ。ダウンロード後は透かしがページに焼き付きます。除去には原本か大幅な編集が必要です。',
  tool_pdf_watermark_faq_a4:
    'パスワード PDF は通常開けません。信頼できるツールで解除してから透かしを入れてください。',
  tool_pdf_watermark_faq_a5:
    'はい — PNG/JPG を選べます。ページの約 3 分の 1 に縮小し、文字と同じ位置・不透明度・角度を使います。',
  tool_pdf_watermark_faq_q1: 'PDF はアップロードされますか？',
  tool_pdf_watermark_faq_q2: '画像のウォーターマークツールとの違いは？',
  tool_pdf_watermark_faq_q3: '後から透かしを消せますか？',
  tool_pdf_watermark_faq_q4: '暗号化 PDF は？',
  tool_pdf_watermark_faq_q5: 'ロゴ画像は使えますか？',
  tool_pdf_watermark_how_body:
    'PDF を選び、透かし文字を入力、不透明度と回転、位置を設定、必要なら PNG/JPG ロゴを添付、「適用」→「ダウンロード」。全ページに同じオーバーレイが入ります。',
  tool_pdf_watermark_how_item_1: "「PDF を選択」で入力ファイルを選択",
  tool_pdf_watermark_how_item_2: "オプションを設定し「適用」を押す",
  tool_pdf_watermark_how_item_3: "プレビュー、ページ数、ステータスを確認",
  tool_pdf_watermark_how_item_4: "「ダウンロード」で結果を保存",
  tool_pdf_watermark_how_title: '使い方',
  tool_pdf_watermark_image_hint: '任意の PNG/JPG ロゴ（文字と同じ位置）。',
  tool_pdf_watermark_image_label: '画像透かし（任意）',
  tool_pdf_watermark_opacity_label: '不透明度',
  tool_pdf_watermark_pages_label: 'ページ数',
  tool_pdf_watermark_position_bl: '左下',
  tool_pdf_watermark_position_br: '右下',
  tool_pdf_watermark_position_center: '中央',
  tool_pdf_watermark_position_label: '位置',
  tool_pdf_watermark_position_tl: '左上',
  tool_pdf_watermark_position_tr: '右上',
  tool_pdf_watermark_rotation_label: '回転（度）',
  tool_pdf_watermark_rules_body:
    '文字/画像オーバーレイ、位置・不透明度、プライバシーと失敗時の挙動。',
  tool_pdf_watermark_rules_item_1:
    '文字：Helvetica で全ページに drawText。サンプルは DRAFT 中央・35%・−45°。',
  tool_pdf_watermark_rules_item_2:
    '画像：任意の PNG/JPG を embedPng/embedJpg、ページ約 35% に縮小、同位置/不透明度/角度。',
  tool_pdf_watermark_rules_item_3:
    '位置：中央または四隅。不透明度 0.1–1。回転 −180°〜180°。新 PDF を出力 — 原本はサーバーへ送りません。',
  tool_pdf_watermark_rules_item_4:
    '制限：暗号化/破損はエラー。~25 MB 超は遅い場合あり。透かし除去は非対応。',
  tool_pdf_watermark_rules_title: '想定されるルール',
  tool_pdf_watermark_sample: 'サンプルを読み込む',
  tool_pdf_watermark_stats_tpl: '{pages} ページに透かし · {bytes}',
  tool_pdf_watermark_status_done: '完了 — ダウンロードで watermarked.pdf を保存。',
  tool_pdf_watermark_status_working: '透かしを適用中…',
  tool_pdf_watermark_text_label: '透かし文字',
  tool_pdf_watermark_title: 'PDF透かし — 端末内で全ページに文字を入れる',
  tool_pdf_watermark_usecase_1: '法務/運用：外注前に契約ドラフトへ CONFIDENTIAL を印字。',
  tool_pdf_watermark_usecase_2: '学生：フィードバック用に章ドラフトへ DRAFT を付与。',
  tool_pdf_watermark_usecase_3: 'サイト運営：プレビュー PDF 全ページに半透明ロゴ。',
  tool_pdf_watermark_usecases_title: 'こんなときに',
  tool_pdf_watermark_warn_large: '約 25 MB 超 — 処理が遅いか失敗する場合があります。',
  tool_pdf_watermark_warn_pdflib: 'PDF ライブラリの読み込みに失敗。ネットワークを確認してください。',
};
export default ja;
