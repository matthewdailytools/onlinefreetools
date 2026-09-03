/**
 * i18n ツール分片（batch-checksum-release-files / ja）。
 * H1 は検索句「リリースファイルのチェックサムを一括計算」。ユースケースという見出しは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：リリース資産の SHA-256 表と SUMS 照合。 */
const ja: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'リリース資産のフォルダをこのタブでハッシュする。手に入るのは表、CSV、SHA256SUMS テキストであり、バイナリの ZIP ではない。公式リストを貼って一致・不一致を付ける。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_checksum_release_files_choose_files: 'ファイルを選ぶ',
	tool_batch_checksum_release_files_chip_md5: 'MD5 も計算',
	tool_batch_checksum_release_files_clear: 'クリア',
	tool_batch_checksum_release_files_col_compare: '照合',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'パス',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'サイズ',
	tool_batch_checksum_release_files_desc:
		'リリースファイルのチェックサムを一括計算。SHA-256 表、任意の MD5、SHA256SUMS 貼付、CSV または SUMS 書き出し。端末内で処理し、サーバーにアップロードしない。',
	tool_batch_checksum_release_files_description:
		'リリースファイルのチェックサムを一括計算：資産を入れ、このタブで SHA-256 を計算し、必要なら MD5 を足し、SHA256SUMS を貼って照合し、CSV または SUMS テキストを書き出す。バイナリの ZIP にはしない。手順：セットを選び、すべてハッシュ、リストがあれば貼る、書き出す。例：小さなサンプル 2 件が SHA-256 の 2 行と照合列を埋める。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_checksum_release_files_drop_hint: 'リリースファイルをドロップ（最大 20）。ハッシュはこのタブ内。原ファイルを ZIP にはしない。',
	tool_batch_checksum_release_files_empty: '先にファイルを追加してください。',
	tool_batch_checksum_release_files_err_md5: 'MD5 ライブラリが読み込めませんでした。新しいブラウザを試すか、MD5 をオフにしてください。',
	tool_batch_checksum_release_files_err_read: 'このファイルは読めません。スキップしました。',
	tool_batch_checksum_release_files_err_too_many: '一度に 20 件まで。超えた分は追加していません。',
	tool_batch_checksum_release_files_example:
		'サンプル読込は小さなバイナリ 2 件をハッシュし、SHA-256 行を埋め、先頭ファイルの SUMS 行を貼って一致を出し、CSV と SUMS を有効にします。',
	tool_batch_checksum_release_files_example_title: '例',
	tool_batch_checksum_release_files_export_csv: 'CSV 書き出し',
	tool_batch_checksum_release_files_export_sums: 'SUMS 書き出し',
	tool_batch_checksum_release_files_faq_a1:
		'しません。ハッシュはこのタブ内。ファイルは端末内に留まり、サーバーにアップロードしない。SHA-256 は Web Crypto。MD5 は CDN から crypto-js を読むことがありますが、バイトはタブを出ません。',
	tool_batch_checksum_release_files_faq_a2:
		'しません。書き出しは CSV の表と SHA256SUMS テキストです。バイナリを固めるのは ZIP 作成で、別作業です。',
	tool_batch_checksum_release_files_faq_a3:
		'ファイルハッシュは 1 件または貼り付け向け。このページはリリース一式をハッシュし、貼った SHA256SUMS と照合し、CSV と SUMS を出します。',
	tool_batch_checksum_release_files_faq_a4:
		'「MD5 も計算」をオン。SHA-256 は常に実行。MD5 は古いリスト用で、別 URL はありません。',
	tool_batch_checksum_release_files_faq_a5:
		'パス列は webkitRelativePath を優先。キュー内の同名は接尾辞を付け、SUMS 行がぶつからないようにします。',
	tool_batch_checksum_release_files_faq_q1: 'ファイルはサーバーに上がりますか？',
	tool_batch_checksum_release_files_faq_q2: 'リリースバイナリを ZIP にしますか？',
	tool_batch_checksum_release_files_faq_q3: 'ファイルハッシュと何が違いますか？',
	tool_batch_checksum_release_files_faq_q4: 'MD5 はどこですか？',
	tool_batch_checksum_release_files_faq_q5: '同名ファイルが 2 件あったら？',
	tool_batch_checksum_release_files_file_count_tpl: 'キューに {n} 件',
	tool_batch_checksum_release_files_hash_all: 'すべてハッシュ',
	tool_batch_checksum_release_files_how_body:
		'リリース資産を入れ、SHA-256 でそれぞれハッシュし、SHA256SUMS があれば貼って照合し、CSV または SUMS を書き出す。ファイルの ZIP ではない。',
	tool_batch_checksum_release_files_how_item_1: '公開予定のバイナリ、インストーラ、チェックサムを選ぶ。',
	tool_batch_checksum_release_files_how_item_2: 'SHA-256 のまま。古いリストがまだ MD5 のときだけ MD5 も計算をオン。',
	tool_batch_checksum_release_files_how_item_3: 'すべてハッシュを押す。進捗はファイルごと。読み取り失敗はその行を飛ばす。',
	tool_batch_checksum_release_files_how_item_4: '公式 SHA256SUMS を貼り、一致・不一致・欠損を付ける。',
	tool_batch_checksum_release_files_how_item_5: '1 件でも成功したら CSV または SUMS を書き出す。1 件だけならファイルハッシュを使う。',
	tool_batch_checksum_release_files_how_title: '一括でチェックサムを出す流れ',
	tool_batch_checksum_release_files_md5_label: 'MD5 も計算する',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 は 4 MiB スライスで読んだバイトを結合して Web Crypto で計算する。出力は表と CSV と SUMS であり、原ファイルの ZIP ではない。',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 は常に走る。MD5 は任意で、CDN から crypto-js を遅延読み込みする。バイトはタブ内。',
	tool_batch_checksum_release_files_rules_item_2:
		'SUMS 行は GNU sha256sum：16 進、空白 2 つか空白+星、その後に名前。貼り付けの余剰名は欠損。',
	tool_batch_checksum_release_files_rules_item_3:
		'読み取り失敗はその行をスキップ。キュー内の重複名は接尾辞。空キューでは書き出せない。',
	tool_batch_checksum_release_files_rules_item_4:
		'ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_checksum_release_files_rules_title: '想定してよいこと',
	tool_batch_checksum_release_files_sample: 'サンプル読込',
	tool_batch_checksum_release_files_status_done: '一括完了 — 表を確認してから CSV または SUMS を書き出す。',
	tool_batch_checksum_release_files_status_hashing: '各リリースファイルをハッシュしています…',
	tool_batch_checksum_release_files_status_match: '一致',
	tool_batch_checksum_release_files_status_mismatch: '不一致',
	tool_batch_checksum_release_files_status_missing: '欠損',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'ハッシュ済み',
	tool_batch_checksum_release_files_status_skip: 'スキップ',
	tool_batch_checksum_release_files_summary_tpl: '{ok} 件ハッシュ · {skip} 件スキップ · {match} 件一致 · {mismatch} 件不一致',
	tool_batch_checksum_release_files_sums_label: '照合用に SHA256SUMS を貼る',
	tool_batch_checksum_release_files_sums_placeholder: '16進  ファイル名',
	tool_batch_checksum_release_files_title: 'リリースファイルのチェックサムを一括計算',
	tool_batch_checksum_release_files_usecase_1: 'GitHub Release の横に SHA256SUMS を置きたいとき。',
	tool_batch_checksum_release_files_usecase_2: 'ミラーのファイルを上流のチェックサムリストと照合する。',
	tool_batch_checksum_release_files_usecase_3: '複数ファイルをハッシュしたいが、バイナリを ZIP にはしたくない。',
	tool_batch_checksum_release_files_usecases_title: '向いている場面',
	tool_batch_checksum_release_files_warn_large: '64 MB を超えるファイルがあります。その行でこのタブのメモリが足りなくなることがあります。',
};

export default ja;
