/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / ja).
 * 当地主词：複数のJPGをOCRでまとめて編集できるWordにする。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: '詳細設定（任意）',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'印刷したページやスクリーンショットをまとめて入れ、「すべて変換」のあと「Wordをダウンロード」します。写真ごとに見出し付きの節になり、本文は編集できる文字です。照合用に元画像を本文の上へ入れるのが初期値です。ぼやけた1枚はスキップされ、残りは同じ文書に残ります。ファイルは端末に留まり、サーバーへは上がりません。TXTのZIPが欲しいときは「複数のJPGをOCRでまとめてテキストにする」を使ってください。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'JPG・PNG・WebPを選ぶ',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'クリア',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'メモ',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'ファイル',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'ピクセル',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: '状態',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'すべて変換',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n}件（上限10）',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'複数のJPGをOCRでまとめて編集できるWordにする：並べてすべて変換し、Wordをダウンロード。処理は端末内で、サーバーへは上がりません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'複数のJPGやスクリーンショットをこのタブで一枚ずつ文字起こしし、編集できるWordを1つダウンロードします。ファイルは端末に留まり、サーバーへは上がりません。手順は画像を追加→すべて変換→Wordをダウンロード。例：印刷サンプル2枚が、ファイル名見出し付きの2節になります。JPGをOCRでWordに、とも呼ばれます。1枚失敗しても残りは文書に残ります。TXTのZIPなら別ページです。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Wordをダウンロード',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: '写真をここにドロップ（上限10枚）。処理はこのタブ内です。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: '先に写真を追加してください。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'このブラウザではWordを組み立てられません。新しいブラウザで試してください。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'活字が見つかりませんでした。スキップしました。手書きではなく、はっきりした印刷ページを試してください。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'OCRエンジンを読み込めませんでした。再読み込みしてからすべて変換を押してください。済んだ節はダウンロードできます。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'その画像を読めませんでした。JPEG・PNG・WebPを使ってください。スキップしました。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'このページは写真用で、PDFは受け付けません。そのファイルは追加していません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: '12MBを超えています。先に圧縮または切り抜きしてください。スキップしました。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: '上限は10枚です。それ以上は追加していません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'「サンプルを読み込む」は sample-1.jpg（ONLINEFREETOOLS と The quick brown fox）と sample-2.jpg（SAMPLE TWO と印刷体样例）を入れ、すべて変換を走らせ、見出し付き2節のWordをダウンロードできるようにします。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: '例',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'上がりません。写真はこのブラウザのタブに留まります。エンジンとWord用スクリプトはこのサイトから読み込み、ファイルは当社サーバーへ送りません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'「複数のJPGをOCRでまとめてテキストにする」はTXTのZIPです。こちらは写真ごとに節のある、編集できるWordを1つ作ります。エンジンは同じでも仕事が違います。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'「画像をWordに」は写真を図として貼るだけなので文字を選べません。ここではOCRが段落を書くので編集できます。元画像は照合用の任意項目です。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'なりません。失敗した1枚はスキップし、残りは同じWordに入ります。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'成功した写真ごとに1節です。見出しはファイル名、そのあと任意の元画像、OCRの段落、改ページです。段組や表は元のレイアウトどおりにはなりません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'できません。このページはPDFを受けません。スキャンPDFをWordにする作業は別ツール（このURLではありません）。文字レイヤー付きのデジタルPDFは「PDFをWord文書にする」へ。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'活字が向いています。崩した手書きはその行で失敗しがちです。手書き専用の製品ではありません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'できます。JPEG・PNG・WebPは同じ待ち列です。1枚だけでもダウンロードはWordであり、TXTではありません。1枚の文字起こしは「OCRでJPGを文字にする」を使ってください。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: '写真はアップロードされますか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: '複数JPGをOCRで文字にするページと何が違いますか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: '「画像をWordに」と何が違いますか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: '1枚失敗するとWord全体が空になりますか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'Wordの各節はどう見えますか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'スキャンPDFをOCRしてWordにできますか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: '手書きは読めますか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'PNGも使えますか。JPGは1枚だけですか？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'印刷写真の束を、編集できるWord 1つにします。画像を追加し、すべて変換（初回クリックでこのタブにエンジンを読み込み、一枚ずつ読む）のあと、Wordをダウンロードします。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'JPG・PNG・WebPを複数ドロップ（またはファイルを選択）。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'任意：バッチ全体の言語チップを選ぶ（初期値は中国語＋英語）。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'「すべて変換」を押すと、初回はこのタブでOCRエンジンを読み込み、その後一枚ずつ読みます。失敗した写真はスキップします。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'「Wordをダウンロード」で、写真ごとに節のある文書（見出し、任意の画像、編集できる本文）を得ます。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: '使い方',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'アラビア語',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: '英語',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: '日本語',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'バッチ全体の認識言語',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: '中国語',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: '中国語＋英語',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: '読み取り前の最長辺（px）',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: '初期値2048。スマホでは小さくすると軽いです。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'初期値はオン。各節でOCR段落の上に写真を置き、Word上で照合できます。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: '本文の上に元の写真を入れる',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'待ち列は最大10枚。最長辺が上限を超えると縮小してから、見た目の順に読みます。OCRワーカーは1つ、直列です。失敗行はスキップし、成功行だけが1つのWordの節になります。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'成功した写真はWordの1節です。見出し1はファイル名、そのあと任意の画像、OCR段落、改ページ。これは束のJPGをOCRでWordにするもので、TXTのZIPではありません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'ファイルは端末に留まり、サーバーへは上がりません。スクリプトはこのサイトから読み込みます。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'手書き、強いボケ、強いパースはその行で失敗しやすいです。表は読み順の行になります。段組は元ページどおりになりません。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'PDFは受けません。TXTのZIPは「複数のJPGをOCRでまとめてテキストにする」。OCRなしの貼り付けは「画像をWordに」。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'あらかじめ知っておくこと',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'サンプルを読み込む',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: '完了',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: '待ち',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: '読み取り中',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'スキップ',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: '完了。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'OCRエンジンを読み込み中…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Wordを組み立てています…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: '複数のJPGをOCRでまとめて編集できるWordにする',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'配布資料を連続撮影し、1つのWordをダウンロードして見出しを直す。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'メニュー写真を、照合用の画像付きOCR節が並ぶ1文書にする。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'エラー画面のスクリーンショットを編集できるWordにまとめて同僚へ送る。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: '向いている場面',
};

export default ja;
