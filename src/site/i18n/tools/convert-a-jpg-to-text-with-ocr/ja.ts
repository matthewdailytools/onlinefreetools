/**
 * i18n tool shard (convert-a-jpg-to-text-with-ocr / ja).
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_convert_a_jpg_to_text_with_ocr_advanced: '詳細設定（任意）',
  tool_convert_a_jpg_to_text_with_ocr_article:
    '印刷された写真やスクリーンショットをドロップし、このタブで「変換」してテキストをコピーまたは TXT 保存します。既定は中国語と英語。アラビア語・日本語チップは別パックを読み込みます。ファイルは端末内に留まり、サーバーには上がりません。',
  tool_convert_a_jpg_to_text_with_ocr_choose_file: 'JPG / PNG / WebP を選ぶ',
  tool_convert_a_jpg_to_text_with_ocr_clear: 'クリア',
  tool_convert_a_jpg_to_text_with_ocr_confidence_tpl: '平均信頼度: {n}%',
  tool_convert_a_jpg_to_text_with_ocr_convert: '変換',
  tool_convert_a_jpg_to_text_with_ocr_copied: 'コピーしました。',
  tool_convert_a_jpg_to_text_with_ocr_copy: 'テキストをコピー',
  tool_convert_a_jpg_to_text_with_ocr_desc:
    'JPG を OCR でテキストにする処理は端末内。サーバーにアップロードしません。',
  tool_convert_a_jpg_to_text_with_ocr_description:
    'JPG やスクリーンショットの活字を、このタブだけでテキスト化します。サーバーには上げません。PNG と WebP も同じです。手順: 画像を置く → 変換 → テキストをコピー / TXTをダウンロード。例: サンプルを読み込むと ONLINEFREETOOLS と The quick brown fox が入ります。画像から文字起こし、写真テキスト抽出の検索にも応えます。中国語+英語が既定。日本語チップは大きめのモデルを読み込み、活字向けです。',
  tool_convert_a_jpg_to_text_with_ocr_download: 'TXTをダウンロード',
  tool_convert_a_jpg_to_text_with_ocr_drop_hint: 'ここに写真をドロップ。処理はこのタブ内です。',
  tool_convert_a_jpg_to_text_with_ocr_empty: '先に画像を選んでください。',
  tool_convert_a_jpg_to_text_with_ocr_err_empty: '活字が見つかりません。ピンぼけや手書きは失敗しやすいです。',
  tool_convert_a_jpg_to_text_with_ocr_err_engine: 'エンジンを読み込めませんでした。再読み込みして「変換」を押してください。',
  tool_convert_a_jpg_to_text_with_ocr_err_load: '画像を読めません。JPEG / PNG / WebP を使ってください。',
  tool_convert_a_jpg_to_text_with_ocr_err_pdf:
    'このページは写真用です。PDF は受けません。文字レイヤー付き PDF は「PDF からテキストを抽出」へ。',
  tool_convert_a_jpg_to_text_with_ocr_err_size: '12 MB を超えています。圧縮か切り抜きをしてください。',
  tool_convert_a_jpg_to_text_with_ocr_example:
    '「サンプルを読み込む」は ONLINEFREETOOLS、The quick brown fox、印刷体样例 の JPEG を描き、「変換」でその行を枠に入れます（中国語は既定チップのまま）。',
  tool_convert_a_jpg_to_text_with_ocr_example_title: '例',
  tool_convert_a_jpg_to_text_with_ocr_faq_a1:
    'いいえ。写真は端末のタブに留まります。スクリプトはこのサイトから読み、ファイルはサーバーにアップロードしません。',
  tool_convert_a_jpg_to_text_with_ocr_faq_a2:
    'PDF テキスト抽出は既存の文字レイヤーを読みます。こちらは画像の OCR です。スキャン PDF は受け付けません。',
  tool_convert_a_jpg_to_text_with_ocr_faq_a3:
    'できます。画面キャプチャの PNG も同じ「変換」です。別 URL は作りません。',
  tool_convert_a_jpg_to_text_with_ocr_faq_a4:
    '活字向けです。連筆の手書きは失敗しやすく、手書き専用ではありません。縦書きも保証しません。',
  tool_convert_a_jpg_to_text_with_ocr_faq_a5:
    '既定は中国語と英語です。アラビア語はチップ。日本語チップは大きめの言語パックを読みます。言語ごとの別ページはありません。',
  tool_convert_a_jpg_to_text_with_ocr_faq_a6:
    '「オンラインOCR」は何でも屋の検索語です。ここは TXT だけです。Word や検索可能な PDF、表計算、インストール用ソフトではありません。',
  tool_convert_a_jpg_to_text_with_ocr_faq_a7:
    '文字認識は、印刷ピクセルをコピーできる行にすることです。変換は 1 枚ずつ。まとめて処理するなら「複数のJPGをOCRでまとめてテキストにする」を使います。',
  tool_convert_a_jpg_to_text_with_ocr_faq_a8:
    'このページは 1 枚・テキストをコピー・1 つの TXT です。すべて変換、失敗行のスキップ、ZIP は「複数のJPGをOCRでまとめてテキストにする」へ。',
  tool_convert_a_jpg_to_text_with_ocr_faq_q1: '写真はサーバーに上がりますか？',
  tool_convert_a_jpg_to_text_with_ocr_faq_q2: 'PDF のテキスト抽出と何が違いますか？',
  tool_convert_a_jpg_to_text_with_ocr_faq_q3: 'スクリーンショットや PNG は使えますか？',
  tool_convert_a_jpg_to_text_with_ocr_faq_q4: '手書きは読めますか？',
  tool_convert_a_jpg_to_text_with_ocr_faq_q5: '中国語やアラビア語、日本語はどう選びますか？',
  tool_convert_a_jpg_to_text_with_ocr_faq_q6: 'オンラインOCRで Word も出ますか？',
  tool_convert_a_jpg_to_text_with_ocr_faq_q7: '画像から文字起こしとは何を指しますか？',
  tool_convert_a_jpg_to_text_with_ocr_faq_q8: '複数の JPG を一度に変換できますか？',
  tool_convert_a_jpg_to_text_with_ocr_how_body:
    '写真の活字をコピーできるテキストにします。JPG を置き、「変換」（初回だけエンジン読み込み）のあと「テキストをコピー」か「TXTをダウンロード」。',
  tool_convert_a_jpg_to_text_with_ocr_how_item_1: 'JPG、PNG、WebP をドロップするかファイルを選ぶ。',
  tool_convert_a_jpg_to_text_with_ocr_how_item_2: '任意: 言語チップを選ぶ（既定は中国語 + 英語）。',
  tool_convert_a_jpg_to_text_with_ocr_how_item_3: '「変換」を押す。初回はこのタブでエンジンを読み込んでから写真を読む。',
  tool_convert_a_jpg_to_text_with_ocr_how_item_4: '「テキストをコピー」または「TXTをダウンロード」。',
  tool_convert_a_jpg_to_text_with_ocr_how_title: '使い方',
  tool_convert_a_jpg_to_text_with_ocr_hud_elapsed_tpl: "{s}秒経過",
  tool_convert_a_jpg_to_text_with_ocr_hud_fail_hint: "再読み込みしてから変換。読み終わった文字はまだコピーやダウンロードできます。",
  tool_convert_a_jpg_to_text_with_ocr_hud_fail_title: "変換が止まりました",
  tool_convert_a_jpg_to_text_with_ocr_hud_load_api: "認識器を起動しています…",
  tool_convert_a_jpg_to_text_with_ocr_hud_load_core: "初回：OCRエンジン（約4MB）を読み込みます。このタブのままお待ちください。1分ほどかかることがあります。",
  tool_convert_a_jpg_to_text_with_ocr_hud_load_lang: "初回：言語データ（数MB）を読み込みます。次回以降は使い回します。",
  tool_convert_a_jpg_to_text_with_ocr_hud_load_script: "OCRスクリプトを読み込み中…",
  tool_convert_a_jpg_to_text_with_ocr_hud_next: "完了。次はテキストをコピー、またはTXTをダウンロード。",
  tool_convert_a_jpg_to_text_with_ocr_hud_pct_tpl: "{pct}%",
  tool_convert_a_jpg_to_text_with_ocr_hud_step_load: "読み込み",
  tool_convert_a_jpg_to_text_with_ocr_hud_step_read: "読み取り",
  tool_convert_a_jpg_to_text_with_ocr_hud_title: "変換の進み",
  tool_convert_a_jpg_to_text_with_ocr_hud_working: "開始…",
  tool_convert_a_jpg_to_text_with_ocr_lang_ar: 'アラビア語',
  tool_convert_a_jpg_to_text_with_ocr_lang_en: '英語',
  tool_convert_a_jpg_to_text_with_ocr_lang_ja: '日本語',
  tool_convert_a_jpg_to_text_with_ocr_lang_legend: '認識する言語',
  tool_convert_a_jpg_to_text_with_ocr_lang_zh: '中国語',
  tool_convert_a_jpg_to_text_with_ocr_lang_zh_en: '中国語 + 英語',
  tool_convert_a_jpg_to_text_with_ocr_low_conf: '信頼度 50% 未満の語を一覧（本文は上に残す）',
  tool_convert_a_jpg_to_text_with_ocr_low_conf_label: '低信頼の語',
  tool_convert_a_jpg_to_text_with_ocr_max_edge: '読み取り前の最長辺（px）',
  tool_convert_a_jpg_to_text_with_ocr_max_edge_hint: '既定 2048。スマホでは小さくすると軽いです。',
  tool_convert_a_jpg_to_text_with_ocr_meta_tpl: '{name} · {w}×{h}px',
  tool_convert_a_jpg_to_text_with_ocr_preview_label: '認識したテキスト',
  tool_convert_a_jpg_to_text_with_ocr_rules_body:
    '最長辺が上限を超えると縮小し、画面順に活字領域を UTF-8 へつなぎます。信頼度は目安であり校正ではありません。',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_1: '出力はプレーンテキスト（.txt）。表は読み順の行になり、セルは保証しません。',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_2: 'ファイルは端末内。サーバーにアップロードしません。スクリプトはこのサイトからです。',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_3: '手書き、強いボケ、急な遠近は失敗しやすいです。段組みは順が乱れることがあります。',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_4: '変換は 1 枚ずつ。PDF、Word、検索可能 PDF、表計算は対象外です。',
  tool_convert_a_jpg_to_text_with_ocr_rules_title: 'ルールと限界',
  tool_convert_a_jpg_to_text_with_ocr_sample: 'サンプルを読み込む',
  tool_convert_a_jpg_to_text_with_ocr_status_done: '完了。',
  tool_convert_a_jpg_to_text_with_ocr_status_loading: "初回はOCRエンジン（約4MB）を読み込みます。このタブのままお待ちください…",
  tool_convert_a_jpg_to_text_with_ocr_status_reading: '読み取り中…',
  tool_convert_a_jpg_to_text_with_ocr_title: 'JPGをOCRでテキストにする',
  tool_convert_a_jpg_to_text_with_ocr_usecase_1: '印刷された配布資料を撮って、ノートに貼る。',
  tool_convert_a_jpg_to_text_with_ocr_usecase_2: 'チャットやエラー画面のキャプチャから文字を拾う。',
  tool_convert_a_jpg_to_text_with_ocr_usecase_3: 'メニューや説明書の写真にある活字（手書きメモではない）。',
  tool_convert_a_jpg_to_text_with_ocr_usecases_title: 'こんなときに',
};
export default ja;
