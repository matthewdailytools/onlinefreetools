/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / ja).
 * 当地主词：複数のJPGをOCRでまとめてテキストにする。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: '詳細設定（任意）',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'印刷したページやスクリーンショットをまとめて入れ、「すべて変換」のあと ZIP を保存します。1枚ごとに TXT。結合ファイルはファイル名で区切ります。不鮮明な1枚はスキップ。ファイルは端末内に留まり、サーバーにアップロードしません。1枚だけなら「JPGをOCRでテキストにする」へ。',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'JPG / PNG / WebP を選ぶ',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'クリア',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'メモ',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'ファイル',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'ピクセル',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: '状態',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'初期値はオン。ZIP に combined.txt が入り、各写真の間は --- ファイル名 --- です。',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'ZIP に combined.txt を入れる',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'すべて変換',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'コピーしました。',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: '結合テキストをコピー',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} ファイル（最大 10）',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'複数のJPGをOCRでまとめてテキストにし、ZIP で保存。端末内で処理し、サーバーにアップロードしません。',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'複数のJPGや画面キャプチャを、このタブで1枚ずつ読み取り、テキストのZIPにします。サーバーにアップロードしません。手順：画像を追加 → すべて変換 → ZIPをダウンロード。例：印刷サンプル2枚が TXT 2つと結合ファイルになります。一括OCRや複数画像の文字起こしとも呼ばれます。1枚だけなら単体ページへ。',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'ZIPをダウンロード',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: '写真をここに複数ドロップ（最大10）。処理はこのタブ内です。',
	tool_batch_convert_jpg_to_text_with_ocr_empty: '先に写真を追加してください。',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'活字が見つかりません。スキップしました。手書きではなく、はっきりした印刷を試してください。',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'OCRエンジンを読み込めませんでした。更新して「すべて変換」を再実行。完了行はダウンロードできます。',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザを試してください。',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: '画像を読めません。JPEG / PNG / WebP を使ってください。スキップ。',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: '写真専用です。PDF はこの列に入りません。',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: '12 MB を超えています。圧縮か切り抜きを。スキップ。',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: '最大 10 枚です。それ以上は追加していません。',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'「サンプルを読み込む」で sample-1.jpg（ONLINEFREETOOLS と The quick brown fox）と sample-2.jpg（SAMPLE TWO と印刷体样例）を入れ、すべて変換し、TXT 2つと combined.txt の ZIP を有効にします。',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: '例',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'いいえ。写真はこのタブに留まります。エンジンと ZIP のスクリプトは本サイトから読みます。サーバーには上げません。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'1枚用のページはコピーと単一 TXT です。こちらはキューです。すべて変換、失敗行スキップ、ZIP。エンジンは同じでも作業が違います。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3:
		'いいえ。その1枚をスキップして残りを続けます。成功分は ZIP に入ります。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'元の名前の TXT が1枚ずつ（重複は stem (2).txt）。初期状態で combined.txt があり、--- ファイル名 --- で区切ります。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'1枚なら「JPGをOCRでテキストにする」へ。ここでも1枚は置けますが、ボタンはすべて変換と ZIP です。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6:
		'はい。JPEG・PNG・WebP は同じ列です。複数画像の文字起こしを別 URL に分けません。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'活字向きです。手書きや縦書きは失敗しやすく、その行はスキップします。スキャン業者向けではありません。日本語は大きめのモデルが必要なことがあります。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'PDF は不可。表計算も出しません。編集できる OCR の Word は「複数のJPGをOCRでまとめて編集できるWordにする」。文字レイヤー付き PDF は「PDFからテキストを抽出」。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: '写真はアップロードされますか？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: '1枚のJPG OCRと何が違いますか？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: '1枚失敗すると全部止まりますか？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'ZIP の中身は？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: '写真が1枚しかないときは？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'PNG や WebP の画面キャプチャもまとめてできますか？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: '手書きやスキャン業者向けですか？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'スキャンPDFは置けますか？',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'印刷写真の束をテキストの ZIP にします。画像を追加し、すべて変換（初回でエンジンを読み、1枚ずつ認識）したあと、ZIPをダウンロードするか結合テキストをコピーします。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'JPG・PNG・WebP を複数ドロップ（またはファイルを選択）。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2: '任意：束全体の言語チップ（初期値は中国語+英語）。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'「すべて変換」を押すと、初回はこのタブで OCR エンジンを読み、1枚ずつ読みます。失敗した写真はスキップします。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'「ZIPをダウンロード」（写真ごとの TXT と結合ファイル）または「結合テキストをコピー」。',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: '使い方',
	tool_batch_convert_jpg_to_text_with_ocr_hud_elapsed_tpl: "{s}秒経過",
	tool_batch_convert_jpg_to_text_with_ocr_hud_fail_hint: "再読み込みしてからすべて変換。終わった行はまだダウンロードできます。",
	tool_batch_convert_jpg_to_text_with_ocr_hud_fail_title: "変換が止まりました",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_api: "認識器を起動しています…",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_core: "初回：OCRエンジン（約4MB）を読み込みます。このタブのままお待ちください。1分ほどかかることがあります。",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_lang: "初回：言語データ（数MB）を読み込みます。次回以降は使い回します。",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_script: "OCRスクリプトを読み込み中…",
	tool_batch_convert_jpg_to_text_with_ocr_hud_next: "完了。次はZIPをダウンロード。",
	tool_batch_convert_jpg_to_text_with_ocr_hud_pct_tpl: "{pct}%",
	tool_batch_convert_jpg_to_text_with_ocr_hud_step_load: "読み込み",
	tool_batch_convert_jpg_to_text_with_ocr_hud_step_read: "読み取り",
	tool_batch_convert_jpg_to_text_with_ocr_hud_title: "変換の進み",
	tool_batch_convert_jpg_to_text_with_ocr_hud_working: "開始…",
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'アラビア語',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: '英語',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: '日本語',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: '束全体の認識言語',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: '中国語',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: '中国語 + 英語',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: '読み取り前の長辺（px）',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: '初期値 2048。スマホでは小さめの方が軽いです。',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: '結合テキストのプレビュー',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'最大10枚。長辺が上限を超えると縮小してから、表示順に読みます。OCR ワーカーは1つを直列再利用。失敗行はスキップし、成功分を ZIP にします。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'ZIP 名は元ファイルに合わせます。combined.txt（初期オン）は --- ファイル名 --- で区切り、連続撮影を1本の文書にします。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'ファイルは端末に留まり、サーバーにアップロードしません。スクリプトは本サイトから読みます。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'手書き・強いボケ・大きな遠近は失敗しやすいです。表は読み順の行になり、CSV ではありません。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'PDF・Word・検索可能PDF・表計算は対象外。1枚をコピーする作業は「JPGをOCRでテキストにする」へ。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: '想定される動き',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'サンプルを読み込む',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: '完了',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: '待機',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: '読み取り中',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'スキップ',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: '完了。',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: "初回はOCRエンジン（約4MB）を読み込みます。このタブのままお待ちください…",
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: '複数のJPGをOCRでまとめてテキストにする',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1: '配布資料を何枚か撮って、TXT の ZIP をノートに貼る。',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2: 'チャットやエラー画面のキャプチャをまとめて文字起こしする。',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3: 'メニュー写真をファイル名区切りの combined.txt にして校正する。',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'こんなときに',
};

export default ja;
