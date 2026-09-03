/**
 * i18n ツール分片（batch-compress-pdfs-for-email / ja）。
 * H1 は検索句「メール用に PDF を一括圧縮」。ユースケースという見出しは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：添付の束を個別に小さくして ZIP に入れる。 */
const ja: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'メール前に、見積やスキャンをこのタブでそれぞれ小さくする。ZIP の中は別々の PDF のまま、1 冊にはしない。暗号化や重すぎるファイルは飛ばし、残りをダウンロード。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_compress_pdfs_for_email_choose_files: 'PDF を選ぶ',
	tool_batch_compress_pdfs_for_email_chip_email: 'メール用',
	tool_batch_compress_pdfs_for_email_chip_max: '最大限に縮小',
	tool_batch_compress_pdfs_for_email_chip_print: '印刷用',
	tool_batch_compress_pdfs_for_email_clear: 'クリア',
	tool_batch_compress_pdfs_for_email_col_after: '圧縮後',
	tool_batch_compress_pdfs_for_email_col_before: '圧縮前',
	tool_batch_compress_pdfs_for_email_col_name: 'ファイル',
	tool_batch_compress_pdfs_for_email_col_status: '状態',
	tool_batch_compress_pdfs_for_email_compress: 'すべて圧縮',
	tool_batch_compress_pdfs_for_email_desc:
		'メール用に PDF を一括圧縮。各ファイルを別々に小さくし ZIP に入れる。端末内で処理し、サーバーにアップロードしない。',
	tool_batch_compress_pdfs_for_email_description:
		'メール用に PDF を一括圧縮：見積やスキャンを並べ、同じメール用プリセットでそれぞれ小さくし、暗号化や重すぎるものは飛ばし、別々の PDF の ZIP を取る。1 冊にはしない。手順：束を選び、メール用のまま、すべて圧縮、節約バイトを見る。例：短いサンプル PDF 2 件は ZIP 内でも 2 件のまま。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_compress_pdfs_for_email_download_zip: 'ZIP をダウンロード',
	tool_batch_compress_pdfs_for_email_drop_hint: 'PDF をドロップ（最大 20）。各ファイルは個別に圧縮。処理はこのタブ内。',
	tool_batch_compress_pdfs_for_email_empty: '先に PDF を追加してください。',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'パスワード付きです。スキップしました。',
	tool_batch_compress_pdfs_for_email_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザを試してください。',
	tool_batch_compress_pdfs_for_email_err_load: 'この PDF は読めません。スキップしました。',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'PDF ライブラリが読み込めませんでした。新しいブラウザを試してください。',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js が読み込めませんでした。新しいブラウザを試してください。',
	tool_batch_compress_pdfs_for_email_err_too_many: '一度に 20 件まで。超えた分は追加していません。',
	tool_batch_compress_pdfs_for_email_example:
		'サンプル読込は画像ページ付きの短い PDF を 2 件作り、メール用でそれぞれ圧縮し、ZIP 内は 2 件のまま節約バイトを出します。',
	tool_batch_compress_pdfs_for_email_example_title: '例',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'しません。ラスタと再埋め込みはこのタブ内。ファイルは端末内に留まり、サーバーにアップロードしない。pdf.js、pdf-lib、ZIP 用スクリプトは CDN から来る場合がありますが、PDF 自体はタブを出ません。',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'しません。手に入るのは N 件の PDF の ZIP です。1 冊にまとめるのは PDF 結合で、別作業です。',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'写真のスキャンは小さくなりやすいです。文字だけの PDF はほとんど動かないことがあります。表に前後サイズが出ます。',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'PDF 圧縮は 1 件向け。このページは束で同じメール用を共有し、成功分を ZIP に入れます。',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'その行だけ飛ばし、残りは続けます。別途ロックを外してから入れ直してください。',
	tool_batch_compress_pdfs_for_email_faq_q1: 'PDF はサーバーに上がりますか？',
	tool_batch_compress_pdfs_for_email_faq_q2: '全部を 1 つの PDF にまとめますか？',
	tool_batch_compress_pdfs_for_email_faq_q3: 'スキャンは文字原稿より小さくなりますか？',
	tool_batch_compress_pdfs_for_email_faq_q4: '単体の PDF 圧縮と何が違いますか？',
	tool_batch_compress_pdfs_for_email_faq_q5: '1 件が暗号化されていたら？',
	tool_batch_compress_pdfs_for_email_file_count_tpl: 'キューに {n} 件の PDF',
	tool_batch_compress_pdfs_for_email_how_body:
		'添付の束を入れ、メール用を選び、それぞれ圧縮し、成功した PDF の ZIP を取る。',
	tool_batch_compress_pdfs_for_email_how_item_1: 'メールの容量制限を通したい見積やスキャンを選ぶ。',
	tool_batch_compress_pdfs_for_email_how_item_2: '特に理由がなければメール用のまま。より鮮明なら印刷用、より小さくなら最大限に縮小。',
	tool_batch_compress_pdfs_for_email_how_item_3: 'すべて圧縮を押す。ファイルは別々のまま。1 冊にはつながない。',
	tool_batch_compress_pdfs_for_email_how_item_4: '暗号化や壊れたファイルはその行だけ飛ばす。要約は成功分の節約バイトを合計する。',
	tool_batch_compress_pdfs_for_email_how_item_5: '1 件でも成功したら ZIP をダウンロード。1 件だけなら PDF 圧縮を使う。',
	tool_batch_compress_pdfs_for_email_how_title: 'メール用に一括で小さくする流れ',
	tool_batch_compress_pdfs_for_email_preset_label: '共有プリセット',
	tool_batch_compress_pdfs_for_email_rules_body:
		'各 PDF は JPEG ページにラスタして再構築する。出力は常に別々の PDF の ZIP。',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'メール用が初期値：拡大率およそ 1.0、JPEG 品質およそ 0.55。印刷用は弱め。最大限はさらに小さくする。',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'暗号化、破損、メモリ不足はその行だけスキップ。ZIP 内の重複名は 名前 (2).pdf になる。',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'文字だけのファイルはほとんど小さくならないことがある。想定どおりで、表にはサイズが出る。',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_compress_pdfs_for_email_rules_title: '想定してよいこと',
	tool_batch_compress_pdfs_for_email_sample: 'サンプル読込',
	tool_batch_compress_pdfs_for_email_status_compressing: 'メール用に各 PDF を圧縮しています…',
	tool_batch_compress_pdfs_for_email_status_done: '一括完了 — 表を確認してから ZIP をダウンロード。',
	tool_batch_compress_pdfs_for_email_status_ok: '圧縮済み',
	tool_batch_compress_pdfs_for_email_status_skip: 'スキップ',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} 件成功 · {skip} 件スキップ · {saved} 節約',
	tool_batch_compress_pdfs_for_email_title: 'メール用に PDF を一括圧縮',
	tool_batch_compress_pdfs_for_email_usecase_1: '見積の束が合わせてメールボックス 25 MB を超えるとき。',
	tool_batch_compress_pdfs_for_email_usecase_2: 'スキャンした領収書を別添付で送りたい。1 冊にはしたくない。',
	tool_batch_compress_pdfs_for_email_usecase_3: 'メール前に複数 PDF を小さくしたいが結合はしたくない。',
	tool_batch_compress_pdfs_for_email_usecases_title: '向いている場面',
	tool_batch_compress_pdfs_for_email_warn_large: '40 MB を超えるファイルがあります。その行でこのタブのメモリが足りなくなることがあります。',
};

export default ja;
