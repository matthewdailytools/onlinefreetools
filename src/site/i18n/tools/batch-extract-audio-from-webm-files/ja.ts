import type { SiteLangDict } from '../../../types';

/**
 * 日本語: 複数のWebMファイルから音声を一括抽出。
 * .webm のみのキュー；順次抽出；成功分を残す部分 ZIP；
 * フォールバック上限 約 500 MiB / 4 時間・各ファイル；最大 30 件；YouTube なし。
 */
const ja: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: '複数のWebMファイルから音声を一括抽出',
  tool_batch_extract_audio_from_webm_files_desc:
    'ローカル WebM を1本ずつ WAV/MP3 の ZIP に抽出。各ファイルのフォールバック約 500 MiB—部分 ZIP は成功分を保持。',
  tool_batch_extract_audio_from_webm_files_description:
    'ローカル WebM をキューに入れ、共有エンジンのフォールバック経路（各約 500 MiB / 4 時間）で順次抽出し、失敗は明確なコードでスキップ、ZIP をダウンロード。手順：WebM を追加 → 抽出 → ZIPをダウンロード。例：サンプルを読み込むは MediaRecorder が動くとき短いクリップを2本作ります。YouTube ではありません。1本だけなら「WebMファイルから音声を抽出する」へ。',
  tool_batch_extract_audio_from_webm_files_article:
    'WebM キャプチャのフォルダには音声だけの ZIP が必要です。本ページは .webm のみをキューし、1本ずつ抽出し、大きすぎるものは err_container でスキップし、成功分をまとめます。YouTube なし。5 GiB デマックスの主張なし。',
  tool_batch_extract_audio_from_webm_files_choose: 'WebMファイルを選ぶ',
  tool_batch_extract_audio_from_webm_files_hint:
    'ローカル .webm は最大 30 本。各ファイルのフォールバック約 500 MiB / 4 時間。失敗はスキップ；ZIP は成功分を保持。',
  tool_batch_extract_audio_from_webm_files_list_label: 'ファイルキュー',
  tool_batch_extract_audio_from_webm_files_convert: '抽出',
  tool_batch_extract_audio_from_webm_files_stop: '停止',
  tool_batch_extract_audio_from_webm_files_download: 'ZIPをダウンロード',
  tool_batch_extract_audio_from_webm_files_sample: 'サンプルを読み込む',
  tool_batch_extract_audio_from_webm_files_clear: 'クリア',
  tool_batch_extract_audio_from_webm_files_advanced: '書き出し形式（任意）',
  tool_batch_extract_audio_from_webm_files_format_label: '出力形式',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV（16ビット）',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'MP3ビットレート',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    '短いクリップは既定の WAV。上限はフォールバック経路に従います。URL 取得なし。',
  tool_batch_extract_audio_from_webm_files_progress: '一括抽出の進捗',
  tool_batch_extract_audio_from_webm_files_read: '読み込み',
  tool_batch_extract_audio_from_webm_files_decode: 'デコード',
  tool_batch_extract_audio_from_webm_files_extract: '抽出',
  tool_batch_extract_audio_from_webm_files_write: '書き込み',
  tool_batch_extract_audio_from_webm_files_pack: 'ZIPにまとめる',
  tool_batch_extract_audio_from_webm_files_done: '完了。抽出した音声ファイルの ZIP をダウンロードしてください。',
  tool_batch_extract_audio_from_webm_files_failed:
    '一括抽出に失敗しました。壊れたファイルを外すか、本数を減らしてください。',
  tool_batch_extract_audio_from_webm_files_elapsed: '{s}秒経過',
  tool_batch_extract_audio_from_webm_files_preview: '一括結果',
  tool_batch_extract_audio_from_webm_files_result: '音声ファイル {n} 本をパック · ZIP {output} KiB',
  tool_batch_extract_audio_from_webm_files_partial:
    '成功 {ok}、失敗 {fail} · ZIP には成功分が含まれます（{output} KiB）',
  tool_batch_extract_audio_from_webm_files_sample_name: 'batch-webm-audio-demo',
  tool_batch_extract_audio_from_webm_files_empty: 'WebM を1本以上追加するか、先にサンプルを読み込んでください。',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'まだファイルがありません。ローカル .webm をドロップ。YouTube ではありません。',
  tool_batch_extract_audio_from_webm_files_remove: '削除',
  tool_batch_extract_audio_from_webm_files_queue_count: 'キューに {n} 件',
  tool_batch_extract_audio_from_webm_files_status_pending: '待機中',
  tool_batch_extract_audio_from_webm_files_status_running: '抽出中…',
  tool_batch_extract_audio_from_webm_files_status_ok: '完了',
  tool_batch_extract_audio_from_webm_files_status_fail: '失敗',
  tool_batch_extract_audio_from_webm_files_status_stopped: '停止',
  tool_batch_extract_audio_from_webm_files_err_file: 'ブラウザがデコードできる WebM を追加してください。',
  tool_batch_extract_audio_from_webm_files_err_format:
    '非対応のファイルです。このページでは .webm のみです。',
  tool_batch_extract_audio_from_webm_files_err_limit:
    'あるファイルがフォールバック経路のサイズ／時間制限を超えました。',
  tool_batch_extract_audio_from_webm_files_err_container:
    'あるファイルがフォールバック上限 ~500 MiB / 4 時間を超えるか、有効な WebM ではありません。行をスキップしました。',
  tool_batch_extract_audio_from_webm_files_err_codec:
    'あるファイルが非対応の音声コーデックです。行をスキップしました。',
  tool_batch_extract_audio_from_webm_files_err_channels:
    'あるファイルが非対応のチャンネル構成です。行をスキップしました。',
  tool_batch_extract_audio_from_webm_files_err_decode: 'ブラウザがあるファイルから音声をデコードできませんでした。',
  tool_batch_extract_audio_from_webm_files_err_encoder: '音声ファイルを書き込めませんでした。',
  tool_batch_extract_audio_from_webm_files_err_zip: 'ZIP を作成できませんでした。',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'キュー上限は 30 件です。',
  tool_batch_extract_audio_from_webm_files_err_sample: 'サンプルを作れませんでした。ご自身のファイルをドロップしてください。',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'このブラウザには Web Audio がありません。',
  tool_batch_extract_audio_from_webm_files_err_empty: '使える音声サンプルがありません。',
  tool_batch_extract_audio_from_webm_files_forced_mp3: '長い／大きいファイルがストリーム MP3 を使いました。',
  tool_batch_extract_audio_from_webm_files_how_title: '複数のWebMから音声を一括抽出する方法',
  tool_batch_extract_audio_from_webm_files_how_body:
    'ローカル WebM をキューし、1本ずつ抽出し、ZIP をダウンロード。',
  tool_batch_extract_audio_from_webm_files_how_item_1: '複数の .webm を選ぶか、サンプルを読み込む。',
  tool_batch_extract_audio_from_webm_files_how_item_2: '必要なら WAV の代わりに MP3 を設定。',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    '「抽出」をクリック；残りの行を止めるときは「停止」。',
  tool_batch_extract_audio_from_webm_files_how_item_4: 'ZIPをダウンロード。失敗した行はスキップされます。',
  tool_batch_extract_audio_from_webm_files_why_choose_title:
    '複数のWebMファイルから音声を一括抽出を使う理由',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    '順次抽出でメモリを安定させます。',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2:
    '行ごとの状態；1件の失敗で ZIP 全体が消えません。',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3: 'WebM 向けの正直なフォールバック上限。',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    '端末内処理；混在形式は近くのハブへ。',
  tool_batch_extract_audio_from_webm_files_rules_title: '順次WebM抽出とZIPの正直さ',
  tool_batch_extract_audio_from_webm_files_rules_body:
    '各 WebM を分類してから単独で抽出。部分 ZIP は成功分を残します。',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    '最大 30 件；各約 500 MiB / 4 時間のフォールバック。',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'URL や YouTube ダウンロードなし。',
  tool_batch_extract_audio_from_webm_files_rules_item_3:
    '失敗は必要に応じて err_container / err_codec でスキップ。',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'ファイルは端末に留まります。',
  tool_batch_extract_audio_from_webm_files_example_title: '実際の一括処理を試す',
  tool_batch_extract_audio_from_webm_files_example:
    'サンプルを読み込むは可能なら短いクリップを2本作り、ZIP にまとめます。',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'こんなときに役立ちます',
  tool_batch_extract_audio_from_webm_files_usecase_1:
    'WebM キャプチャのフォルダを1つの ZIP に音声化したい。',
  tool_batch_extract_audio_from_webm_files_usecase_2: '1本ずつアップロードせずまとめて抽出。',
  tool_batch_extract_audio_from_webm_files_usecase_3:
    '大きすぎるファイルが混ざっていても、部分 ZIP は使える。',
  tool_batch_extract_audio_from_webm_files_faq_q1: 'YouTubeプレイリスト？',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'いいえ。ローカル .webm のみです。',
  tool_batch_extract_audio_from_webm_files_faq_q2: '1本だけ？',
  tool_batch_extract_audio_from_webm_files_faq_a2: '単体の WebM 抽出ページを使ってください。',
  tool_batch_extract_audio_from_webm_files_faq_q3: 'なぜ500 MiBで5 GiBではない？',
  tool_batch_extract_audio_from_webm_files_faq_a3:
    'WebM デマックスはまだないためフォールバック上限が適用されます。MP4/MOV には大容量デマックスがあります。',
  tool_batch_extract_audio_from_webm_files_faq_q4: 'アップロードされますか？',
  tool_batch_extract_audio_from_webm_files_faq_a4: 'いいえ。ブラウザのみです。',
  tool_batch_extract_audio_from_webm_files_faq_q5: '巨大な1本が失敗したら？',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'その行は err_container で失敗し、他はパックされます。',
  tool_batch_extract_audio_from_webm_files_faq_q6: 'あとでトリム？',
  tool_batch_extract_audio_from_webm_files_faq_a6:
    'ZIP をダウンロードし、ファイルごとにトリムツールを使ってください。',
};
export default ja;
