import type { SiteLangDict } from '../../../types';

/**
 * 日本語（D3 一括）：ローカル MKV 複数 → AAC ステレオ MP4 を ZIP 化。
 * 検索意図：mkv を一括で mp4 に、複数 mkv 変換、アップロードなし。
 */
const ja: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'MKVファイルを一括でMP4に変換する',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'ブラウザで複数のローカル MKV を AAC ステレオの MP4 に変換し、ZIP でまとめてダウンロード。約20本・各500 MiBまで。サーバーにアップロードしません。',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    '端末内で複数の MKV を AAC ステレオ付き MP4 に一括変換し、ZIP を1つ取得します。手順：MKV を追加 → すべて変換 → ZIPをダウンロード。例：サンプルを読み込むと短い Matroska を2本キューに入れ、両方の MP4 を ZIP にします。1ファイル約500 MiB/2時間、最大約20本。失敗した行はスキップし、成功分だけ部分 ZIP に入ります。ローカルファイルのみ、YouTube URL 不可。ファイルは端末に残り、サーバーにアップロードしません。1本だけなら「MKVをMP4に変換」の単一ファイルページを。',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    '録画フォルダは MKV ばかりでも、編集ソフトは MP4 を求めることが多いです。単一ファイルツールと同じ AAC 優先の変換を、複数ファイルのキュー・行ごとの状態表示・成功 MP4 の ZIP 化で行います。音声だけの一括抽出や URL 取得はしません。クリップが1本なら単一ページを使ってください。',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'MKVファイルを選択',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'ローカルの .mkv を複数（各約500 MiB/2時間、最大約20本）。音声は AAC ステレオになります。YouTube ではありません。',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'キュー',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: 'キュー {n} 件',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'すべて変換',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'ZIPをダウンロード',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'サンプルを読み込む',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'クリア',
  tool_batch_convert_mkv_files_to_mp4_files_stop: '停止',
  tool_batch_convert_mkv_files_to_mp4_files_remove: '削除',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: '音声設定（任意）',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: '音声チャンネル',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'ステレオ（既定）',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'モノラル',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'AAC 品質',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: '小さめ',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'バランス',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: '高品質（既定）',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    '既定はキュー内の全ファイルに適用されます。設定を変えると完成した ZIP はクリアされます。',
  tool_batch_convert_mkv_files_to_mp4_files_progress: '一括変換の進捗',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'エンジン読込',
  tool_batch_convert_mkv_files_to_mp4_files_read: '読取',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'デコード',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'エンコード',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'ZIP 作成',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    '完了。ZIPをダウンロードするか、1本だけなら単一 MKV→MP4 ページを開いてください。',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    '一括変換に失敗しました。行のエラーを確認するか、より小さい/少ない MKV で再試行してください。',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '経過 {s} 秒',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'ZIP 結果',
  tool_batch_convert_mkv_files_to_mp4_files_result: 'MP4 {n} 件を ZIP 化 · {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '成功 {ok}、失敗 {fail} · ZIP {output} KiB（部分）。成功分はダウンロード可能です。',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'MKV を追加するか、先にサンプルを読み込んでください。',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'まだファイルがありません。各約500 MiB 以内のローカル .mkv をドロップするか、サンプルを読み込んでください。YouTube 不可。',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: '待機中',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: '変換中…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 完了',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: '失敗',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: '停止済み',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'MKV ファイルを1つ以上ドロップしてください。',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: '未対応のファイルです。このページは .mkv のみです。',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'ファイルが約500 MiB/2時間を超えるか、キューがこのブラウザの上限を超えています。',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'ファイルが多すぎます。1回あたり MKV は約20本以内にしてください。',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'Matroska として開けないファイルがあるか、使える映像/音声トラックがありません。',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'ここではデコード/エンコードできないコーデックがあります。その行は失敗し、他は ZIP に入る場合があります。',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: '行の MP4 を書き出せませんでした。再試行するか行を削除してください。',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'ZIP を作成できませんでした。もう一度「すべて変換」を押してください。',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'サンプル MKV を読み込めませんでした。お持ちのファイルを使ってください。',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'このブラウザで変換エンジンを読み込めませんでした。',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: '変換を停止しました。',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'MKV を一括で MP4 にする手順',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'ローカル MKV をキューに入れ、「すべて変換」のあと「ZIPをダウンロード」— 成功した各行は AAC ステレオ MP4 です。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'ローカルの .mkv を複数（各約500 MiB）選ぶか、サンプルを読み込みます。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    '必要なら音声設定でモノラルや小さめ AAC（全ファイルに適用）を選びます。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    '「すべて変換」を押し各行を確認（「停止」可）。失敗行はスキップし、成功は続行します。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    '進捗が終わったら ZIPをダウンロード。1本だけなら単一 MKV→MP4 ページへ。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'この一括 MKV→MP4 を使う理由',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'Matroska フォルダをクラウドに上げず、AAC MP4 を ZIP 1つで受け取れる。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    '行ごとの状態表示と失敗スキップで、1本の bad トラックが全体を止めない。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    '単一ファイルページと同じ AAC 優先エンジン。上限を明示し、黙って remux だけにはしない。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    '単一変換や音声抽出ツールへの導線がはっきり— MP4 ができてから抽音も可能。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: '一括変換の前提と上限',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    'ローカル .mkv のみ。音声は AAC に再エンコード。上限と行失敗は最初に明示— 巨大リップはデスクトップ ffmpeg 向き。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    '1ファイル約500 MiB/2時間、1回約20本。超えるとページに分かりやすいエラーが出ます。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'URL や YouTube の取得は不可。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC ステレオ（またはモノ）を意図的に書き込み。E-AC-3 は共有ヘルパーでデコード可；特殊な映像は行失敗のことがあります。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    '元 MKV は上書きしません。音声だけの一括抽出ではありません— 音声のみは関連ページへ。',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: '実際のバッチを試す',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'サンプル読み込みでサイト内の短い MKV 2本をキューし、すべて変換で ZIP 化。本番確認は上限内の自有ファイルで。',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'こんなときに',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    '画面録画 MKV のフォルダを、Matroska 非対応の編集ソフト用に MP4 へ一括変換したい。',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'DDP/Atmos 入り MKV が複数あり、MP4 で AAC にしてから音声を抜きたい。',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'オンライン変換に丸ごと上げず、ZIP で一括ダウンロードしたい。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'YouTube の URL は貼れますか？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'いいえ。ローカルの .mkv のみです。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: '単一ファイルの MKV→MP4 ページとの違いは？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'あちらは1ファイルで MP4 を直接ダウンロード。こちらは複数をキューして ZIP。変換エンジンは同じ AAC 方式です。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: '1本の MKV が失敗したら？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'その行は失敗表示でスキップ。成功した MP4 は部分 ZIP に入り、ダウンロードできます。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'remux（音声コーデックそのまま）ですか？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'いいえ。音声は常に AAC に再エンコード。映像は可能なら copy します。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: '多数 MKV から WAV/MP3 だけ欲しい— ページ違い？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    '音声のみなら MKV 一括音声抽出の関連ページへ。ここは映像付き MP4 の ZIP です。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'フォルダはサーバーに送られますか？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'いいえ。変換はブラウザタブ内で完結し、ファイルは端末に残りサーバーにアップロードしません。エンジンスクリプトは当サイトから1回読み込みます。',
};

export default ja;
