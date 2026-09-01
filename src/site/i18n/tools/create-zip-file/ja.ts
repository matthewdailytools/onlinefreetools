/**
 * i18n tool shard (create-zip-file / ja)。
 * H1 は検索句「zipファイルを作成」。英文の直訳骨格は使わない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_create_zip_file_article:
		'このタブでファイルを選び、ZIP にまとめてダウンロードします。ファイルは端末内に留まり、サーバーへはアップロードしません。Gzip は単一ファイル用の副モードです。',
	tool_create_zip_file_choose_files: 'ファイルを選ぶ',
	tool_create_zip_file_clear: 'クリア',
	tool_create_zip_file_desc:
		'ブラウザ内で複数ファイルやフォルダパスを zip にしてダウンロード。端末内で処理し、サーバーには上げません。',
	tool_create_zip_file_description:
		'zipファイルを作成：ファイルを選び（ブラウザが相対パスを返すときはフォルダ名を残す）、ZIP のままダウンロード。ファイルは端末に留まり、サーバーへアップロードしません。例：サンプルは notes.txt、photo.png、docs/readme.md を sample.zip に入れます。Gzip は単一ファイルの副モード。パスワード付き zip は FAQ の境界であり、初画面では約束しません。',
	tool_create_zip_file_download: 'ZIPをダウンロード',
	tool_create_zip_file_drop_hint: 'ここにファイルをドロップ。フォルダを落とすと、ブラウザが相対パスを出せばエントリ名に使います。',
	tool_create_zip_file_empty: '先にファイルを1つ以上選んでください。',
	tool_create_zip_file_err_fflate: 'ZIP エンジンの読み込みに失敗しました。通信を確認して再試行してください。',
	tool_create_zip_file_err_gzip_many: 'Gzip は1ファイルだけです。複数なら ZIP に戻すか、1つにしてください。',
	tool_create_zip_file_err_too_large: 'この一式はブラウザで安全にまとめるには大きすぎます。減らして再試行してください。',
	tool_create_zip_file_example:
		'サンプルは notes.txt、小さな photo.png、docs/readme.md を入れ、sample.zip を作ります。最初の画面で ZIP をダウンロードできます。',
	tool_create_zip_file_example_title: '例',
	tool_create_zip_file_faq_a1:
		'いいえ。バイトはこのタブ内で読みます。ZIP エンジンスクリプトは CDN から来ることがありますが、ファイルは当サイトのサーバーには上がりません。',
	tool_create_zip_file_faq_a2:
		'ブラウザが webkitRelativePath を返す（フォルダドロップやディレクトリ選択）場合、../ を除いたパスを ZIP エントリにします。これがこのページの「フォルダをzipにする」作業です。',
	tool_create_zip_file_faq_a3:
		'AES 暗号 ZIP を初画面の機能にはしていません。パスワード付き zip は FAQ の境界です。破解もしません。',
	tool_create_zip_file_faq_a4:
		'.gz が欲しい単一ファイルのときだけ Gzip を使います。複数ファイルは ZIP。Gzip は PDF 圧縮ではありません。',
	tool_create_zip_file_faq_a5:
		'巨大な一式はタブのメモリを使い果たすことがあります。ページは警告して止めます。解凍は関連の ZIP 展開ページへ。',
	tool_create_zip_file_faq_q1: 'ファイルはアップロードされますか？',
	tool_create_zip_file_faq_q2: 'フォルダを zip にできますか？',
	tool_create_zip_file_faq_q3: 'パスワード付き zip は作れますか？',
	tool_create_zip_file_faq_q4: 'ZIP ではなく Gzip を使うのはいつ？',
	tool_create_zip_file_faq_q5: '巨大ファイルは？解凍はどこ？',
	tool_create_zip_file_file_count_label: 'ファイル数',
	tool_create_zip_file_how_body:
		'一つの書庫として送りたいファイルを選び、ブラウザがパスを出せばフォルダ名を残し、ZIP をダウンロードします。Gzip は単一ファイルの別経路です。',
	tool_create_zip_file_how_item_1: '一つの zip として送りたいファイルを選ぶ——それが本ページの仕事で、第二の解凍器ではありません。',
	tool_create_zip_file_how_item_2: '相対パスが残るならフォルダをドロップ。../ は梱包前に除きます。',
	tool_create_zip_file_how_item_3: '既定の ZIP のままダウンロード。サンプルは開いた時点で3ファイルを梱包済みです。',
	tool_create_zip_file_how_item_4: '1ファイルで .gz が欲しいときだけ Gzip に切替。複数は ZIP のまま。',
	tool_create_zip_file_how_title: '使い方',
	tool_create_zip_file_level_label: '圧縮レベル',
	tool_create_zip_file_load_sample: 'サンプル',
	tool_create_zip_file_mode_gzip: 'Gzip（1ファイル）',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: '梱包後のサイズ',
	tool_create_zip_file_rules_body:
		'ブラウザ内の梱包ではパスの掃除、ZIP と Gzip の切り分け、容量上限、パスワード境界が必要です。',
	tool_create_zip_file_rules_item_1:
		'ZIP は fflate の zipSync で DEFLATE。レベル 0–9 は任意。サンプルは初回表示を速くするため弱いレベルです。',
	tool_create_zip_file_rules_item_2:
		'エントリ名はファイル名または webkitRelativePath。先頭のスラッシュと ../ は除きます。',
	tool_create_zip_file_rules_item_3:
		'Gzip モードはちょうど1ファイルに gzipSync をかけます。2つ以上は ZIP。',
	tool_create_zip_file_rules_item_4:
		'パスワード付き ZIP は初画面の出力ではありません。暗号化書庫の復旧や破解はしません。',
	tool_create_zip_file_rules_title: '想定される規則',
	tool_create_zip_file_status_done: '書庫の準備ができました。ダウンロードするか、ファイルを入れ替えてください。',
	tool_create_zip_file_status_packing: '梱包中…',
	tool_create_zip_file_title: 'zipファイルを作成',
	tool_create_zip_file_usecase_1:
		'メール：いくつかの添付を一つの zip にして送る。梱包サイトへ上げなくてよい。',
	tool_create_zip_file_usecase_2:
		'提出物：先生が一つの書庫を求めたとき、ノートフォルダとスクリーンショットを zip にする。',
	tool_create_zip_file_usecase_3:
		'小さなソース一式：readme と数ファイルをまとめたあと、関連のファイルハッシュで zip を確認。',
	tool_create_zip_file_usecases_title: '向いている場面',
};

export default ja;
