/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / ja).
 * 当地H1：スキャンしたPDFをOCRでまとめてWordにする。
 * キー名は en.ts と同じ。文は独立して書き直し。場面見出しは「こんなときに」。
 */
import type { SiteLangDict } from '../../../types';

/** このツールの日本語コピー。ボタン文言は brief の「すべて変換 / Wordをダウンロード / サンプルを読み込む / クリア」。 */
const ja: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: '詳細設定（任意）',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'印刷されたスキャンPDFを、このタブで1ページずつ読み取って、編集できるWordにします。「すべて変換」のあと「Wordをダウンロード」。初期値はバッチ全体でWord 1つ。PDFごとに分けることもでき、複数成功時は「ZIPをダウンロード」になります。ファイル名が見出し、成功したページが段落。照合用にスキャン画像を本文の上へ入れるのが初期値です。ぼけた1ページはスキップし、残りは同じ文書に残ります。ファイルは端末に留まり、サーバーへは上がりません。すでに文字が選べるデジタルPDFは「PDF を Word 文書にする」。写真の束は「複数のJPGをOCRでまとめて編集できるWordにする」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'PDFファイルを選ぶ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'クリア',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'ファイル',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'メモ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'ページ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: '状態',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'すべて変換',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n}件（上限5、20ページ）',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'スキャンしたPDFをOCRでまとめてWordにする：並べてすべて変換し、Wordをダウンロード。処理は端末内、サーバーへは上がりません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'スキャンPDFをWordにする作業はこのタブで完結します。ページを描いてから文字を拾い、編集できるDOCXを1つダウンロード。手順はPDFを追加→すべて変換→Wordをダウンロード。例：印刷サンプル2ページが見出し付きのWordになり、照合用のページ画像も付けられます。PDF OCRでWord、複数のスキャンPDFをWordへ、とも呼ばれます。ファイルは端末に留まり、サーバーへは上がりません。文字レイヤー付きは「PDF を Word 文書にする」。写真は「複数のJPGをOCRでまとめて編集できるWordにする」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Wordをダウンロード',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'ZIPをダウンロード',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'スキャンPDFをここにドロップ（上限5件、20ページ）。処理はこのタブ内です。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: '先にスキャンPDFを追加してください。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'このブラウザではWordを組み立てられません。新しいブラウザで試してください。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'このブラウザではZIPを組み立てられません。新しいブラウザで試してください。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'活字が見つかりませんでした。スキップしました。手書きではなく、はっきりした印刷スキャンを試してください。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'そのPDFはパスワード付きです。追加していません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'PDFの描画またはOCRエンジンを読み込めませんでした。再読み込みしてからすべて変換を押してください。済んだページはダウンロードできます。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'ここはスキャンPDF用で、写真は受けません。JPG・PNG・WebPは「複数のJPGをOCRでまとめて編集できるWordにする」へ。そのファイルは追加していません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'そのPDFを読めませんでした。スキップしました。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'このタブでPDF描画を読み込めませんでした。再読み込みしてからやり直してください。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: '12MBを超えています。先に圧縮してください。追加していません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'PDFは最大5件です。それ以上は追加していません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: '一度に読むのは20ページまでです。余分なファイルは追加していません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'「サンプルを読み込む」は sample-scan.pdf（1ページ目：ONLINEFREETOOLS と The quick brown fox、2ページ目：SAMPLE TWO と Printed sample page）を入れ、すべて変換を走らせ、見出し1つ・本文2ページのWordをダウンロードできるようにします。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: '例',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'上がりません。PDFはこのブラウザのタブに留まります。描画・OCR・Word組み立てのスクリプトはこのサイトから読み込み、ファイルは当社サーバーへ送りません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'「PDF を Word 文書にする」は既存の文字レイヤーを写すだけで、OCRしません。こちらは各ページを絵にしてから読むので、選べないスキャンでも段落になります。すでに単語を選べるなら、そちらへ。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'「複数のJPGをOCRでまとめて編集できるWordにする」は写真の列です。ここはPDFだけ。JPGを落とすと意図的に拒否します。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'なりません。失敗した1ページはスキップし、ほかのページとほかのPDFは同じWordに残ります。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'初期値の「バッチでWord 1つ」では、成功したPDFごとに見出し（ファイル名）。成功したページごとに任意のページ画像、OCRの段落、改ページです。別々の文書がよければ、PDFごとにWord 1つへ切り替えます。表や段組は元のレイアウトどおりにはなりません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'できません。写真は「複数のJPGをOCRでまとめて編集できるWordにする」へ。ここのドロップはPDF専用です。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'活字がいちばん安定します。連筆の手書きは、そのページで失敗しがちです。手書き専用ではありません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'出てくるのはWordであり、TXTでも検索可能なPDFの書き戻しでもありません。スキャンPDFをWordに、PDF OCRでWord、と探す人の仕事はここです。文字レイヤーの抜き出しは「PDF からテキストを抽出」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'PDFは最大5件、各12MB、まとめて20ページまで。1件だけでもすべて変換→Wordをダウンロードです。単ファイル用の別URLはありません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'できます。「PDFごとにWord 1つ」を選んでからすべて変換。成功が1件ならボタンは「Wordをダウンロード」のまま。2件以上なら「ZIPをダウンロード」で、入力ごとに .docx が1つ入ります。まとめて1つのWordが初期値です。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'スキャンPDFはサーバーに行きますか？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'すでに文字が選べるPDFなら「PDF を Word 文書にする」ですか？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'JPGの束がある。PDFではない。どこへ？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: '1ページ失敗したら、Word全体が空になりますか？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'できたWordの中身は？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'JPG写真をここに落とせますか？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: '手書きのOCRは使えますか？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'TXTや検索可能なPDFが出ますか。それともWordだけ？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'ファイル数とページ数の上限は？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'PDFごとに別々のWordにできますか。まとめなくていい？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'紙のスキャンを、編集できるWord 1つにします。PDFを入れてすべて変換（初回クリックでこのタブに描画とOCRを読み込み、1ページずつ読む）し、Wordをダウンロードします。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'スキャンPDFを1件以上ドロップする（またはファイルを選ぶ）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: '任意：バッチ全体の言語チップを選ぶ（初期値は中国語＋英語）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'任意：バッチ全体でWord 1つのままにするか、PDFごとにWord 1つにする（複数成功時はZIPをダウンロード）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'「すべて変換」を押す — 初回はこのタブでPDF描画とOCRエンジンを読み込み、そのあと1ページずつ読みます。失敗したページはスキップします。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'「Wordをダウンロード」を押す — PDFごとに分けて2件以上成功した場合は「ZIPをダウンロード」になります。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: '使い方',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '{s}秒経過',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: '再読み込みしてからすべて変換。読み終わったページはまだダウンロードできます。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: '変換が止まりました',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: '完了。次はWordをダウンロード。PDFごとに分けて複数成功ならZIPをダウンロード。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: '読み込み',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: '組み立て',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: '読み取り',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: '描画',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: '変換の進み',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: '開始…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'アラビア語',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: '英語',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: '日本語',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'バッチ全体の認識言語',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: '中国語',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: '中国語 + 英語',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: '読み取り前の最長辺（px）',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: '初期値2048。小さくするとスマホが楽です。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'初期値はWord 1つ。PDFごとに分ける場合：成功1件ならWordをダウンロード、複数成功ならZIPをダウンロード。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Wordの出し方',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'バッチ全体でWord 1つ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'PDFごとにWord 1つ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'初期値オン。Wordの各ページで、OCR段落の上にスキャン画像を出して照合できます。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: '本文の上にページ画像を入れる',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · {page}/{pages}ページ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'最大5ファイル・20ページの列です。各ページを描き、最長辺が上限を超えたら縮小し、見た目の順で読みます。OCRは1本が順番に動きます。失敗ページはスキップ。書き出しはまとめてWord 1つか、PDFごとにWord 1つです。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'初期値はWord 1つ：成功したPDFが見出し（ファイル名）、各ページは任意画像・OCR段落・改ページ。PDFごとに分けると、成功した入力がそれぞれ .docx になり、複数はZIPで降ります。TXTのZIPではありません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'ファイルは端末に留まり、サーバーへは上がりません。スクリプトはこのサイトから読み込みます。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'手書き、強いぼけ、強いパースはそのページで失敗しがちです。表は読み順の行になります。段組は元スキャンどおりになりません。文字レイヤー付きのデジタルPDFもここでは絵にしてから読みます。レイヤーだけ欲しいなら「PDF を Word 文書にする」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'写真入力はありません。JPGの束は「複数のJPGをOCRでまとめて編集できるWordにする」。検索可能なPDFは書きません。TXTもダウンロードしません。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: '先に知っておくこと',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'サンプルを読み込む',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: '完了',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: '待ち',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: '読み取り中',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: '描画中',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'スキップ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: '作業中',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: '完了。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: 'PDF描画とOCRを読み込み中…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Wordを組み立て中…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'スキャンしたPDFをOCRでまとめてWordにする',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'講義のスキャンPDFを入れて、見出しを直せるWordを1つダウンロードする。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'契約書のスキャン2件を、ページ画像つきの照合用Wordにまとめる。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'複数ページの請求スキャンを、同僚が直せるWordにする（請求項目の抽出はしません）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'こんなときに',
};

export default ja;
