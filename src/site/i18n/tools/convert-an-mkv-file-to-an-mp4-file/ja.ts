import type { SiteLangDict } from '../../../types';

/**
 * 日本語：ブラウザで MKV を MP4 に変換（AAC ステレオ、D2）。
 * 単なる remux ではない。YouTube 非対応。OPFS 利用時約 5 GiB（なし約 1 GiB）。E-AC-3 は WASM ヘルパー経由。
 */
const ja: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'MKVファイルをMP4ファイルに変換する',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'ローカル MKV をブラウザで MP4 に変換し、音声は AAC ステレオ。映像は可能ならコピー。OPFS 利用時約 5 GiB（なし約 1 GiB）。アップロードなし。',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    '端末上でローカル MKV を MP4 に変換し、音声を AAC ステレオにしてプレイヤーや抽出ツールで使えるようにします。手順：MKV を選ぶ → 変換 → ダウンロード。例：「サンプルを読み込む」で短い合成 Matroska を変換。ブラウザが許すときは映像パケットをコピーし、音声は常に AAC に再エンコード（E-AC-3/DDP はページ内 WASM でデコード可）。大容量は私有 OPFS へストリーム書き出し（約 5 GiB；OPFS なし約 1 GiB）。ローカルのみ。YouTube URL 取得ではありません。アップロードしません。音声だけ欲しい場合は「MP4ファイルから音声を抽出する」。',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    '編集ソフトやスマホは MP4 を求めがちですが、録画は MKV で届くことがあります。安全なら remux しつつ、常に AAC ステレオを書き、E-AC-3 のまま remux して無音になるのを避けます。リモート URL は取得せず、抽出用ランディングの代わりにはなりません——AAC MP4 のあとは関連の抽出ページへ。複数本は一括変換ページへ。',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'MKVファイルを選ぶ',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'ローカルの .mkv を 1 本ドロップ（OPFS あり約 5 GiB、なし約 1 GiB）。音声は AAC ステレオになります。YouTube ではありません。',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: '変換',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'ダウンロード',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'サンプルを読み込む',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'クリア',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: '停止',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: '音声設定（任意）',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: '音声チャンネル',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'ステレオ（既定）',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'モノラル',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'AAC 品質',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: '小さめのサイズ',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'バランス',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: '高品質（既定）',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    '多くのファイルは既定のままで十分：ステレオ AAC・高めの品質。設定を変えると完了済みのダウンロードはクリアされます。',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: '変換の進捗',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'エンジン読み込み',
  tool_convert_an_mkv_file_to_an_mp4_file_read: '読み取り',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'デコード',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'エンコード',
  tool_convert_an_mkv_file_to_an_mp4_file_write: '書き込み',
  tool_convert_an_mkv_file_to_an_mp4_file_done:
    '完了。MP4 をダウンロードするか、音声だけなら MP4 抽出ツールを開いてください。',
  tool_convert_an_mkv_file_to_an_mp4_file_failed:
    '変換に失敗しました。より小さい MKV か別の音声トラックを試してください。',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '経過 {s} 秒',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: '変換後 MP4 のプレビュー',
  tool_convert_an_mkv_file_to_an_mp4_file_result: '入力 {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: '短mkv-mp4デモ',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: '先に MKV を選ぶかサンプルを読み込んでください。',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'まだファイルがありません。ローカル .mkv をドロップ（OPFS あり約 5 GiB、なし約 1 GiB）、または「サンプルを読み込む」。YouTube ではありません。',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: '停止しました。途中の MP4 は残しません。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'MKV ファイルを 1 つだけドロップしてください。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: '未対応のファイルです。このページは .mkv のみです。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'この MKV はブラウザ変換の上限を超えています（OPFS あり約 5 GiB、なし約 1 GiB）。大きいファイルはデスクトップ ffmpeg を使ってください。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'Matroska として開けないか、使える映像/音声トラックがありません。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'ここでは音声または映像コーデックをデコード/エンコードできませんでした。別トラックを試すか、PC の ffmpeg で変換してください。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'MP4 を書き込めませんでした。もう一度変換してください。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'サンプル MKV を読み込めませんでした。ご自身のファイルをドロップしてください。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'このブラウザでは変換エンジンを読み込めませんでした。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: '変換は停止されました。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'MKVファイルをMP4ファイルに変換する手順',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'ローカル MKV をドロップし「変換」、その後 MP4 を「ダウンロード」——音声は AAC ステレオになり、後の抽出ツールが使えます。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1:
    'OPFS あり約 5 GiB（なし約 1 GiB）以内のローカル .mkv を選ぶか、「サンプルを読み込む」をクリック。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2:
    '任意：「音声設定」でモノラルや低めの AAC 品質に変更。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    '「変換」をクリックし、エンジン読み込み → 読み取り → デコード → エンコード → 書き込みを待つ（または「停止」）。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'プレビューがあれば確認し「ダウンロード」。音声だけなら「MP4ファイルから音声を抽出する」。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title: 'MKVファイルをMP4ファイルに変換する — このページを使う理由',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    '意図的に AAC ステレオを書く——E-AC-3 のまま remux して多くのブラウザで再生できない結果にしない。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    '数ギガの MKV は私有 OPFS へストリーム書き出しし、MP4 全体を RAM に載せません。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    '処理は端末内。エンジンスクリプトはこのサイトから初回のみ読み込み。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    '次の一手が明確：ダウンロード後は関連 MP4 抽出ページへ。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV→MP4 と AAC — 正直な境界',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    '1 回につきローカル MKV 1 本。音声は AAC に再エンコード。上限とコーデックは誇張なし——数 GB のリップはデスクトップ ffmpeg が必要なことも。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'OPFS あり約 5 GiB のストリーム書き出し；なし約 1 GiB。超過 → err_limit。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'URL や YouTube からの取得は不可。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3/DDP は同梱 AC-3 ヘルパーでデコード後、AAC ステレオに。珍しい映像コーデックは err_codec の可能性。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    '元の MKV は上書きしません。複数本は「MKVファイルを一括でMP4に変換する」（ZIP）へ。',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: '実際の変換を試す',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    '「サンプルを読み込む」でサイト内の短い MKV を取得し変換が走ります。本番確認は上限内のご自身の .mkv を。',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'こんなときに',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1:
    '画面録画の MKV を、MP4 しか受け付けない編集ソフトに渡したい。',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'DDP/Atmos の MKV は、先に AAC にしてから「MP4ファイルから音声を抽出する」。',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'Matroska をクラウド変換に上げず、共有用 MP4 が欲しい。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'YouTube の URL を貼れますか？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'いいえ。ローカルの .mkv のみです。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'remux だけ（音声コーデックそのまま）ですか？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'いいえ。音声は常に AAC に再エンコードし、ブラウザ demux や多くのプレイヤーで使えるようにします。映像は可能なら再エンコードせずコピーできます。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'MKV に Dolby Atmos / DDP / E-AC-3 があります——動きますか？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'サイズ上限内なら多くの場合は可：AC-3/E-AC-3 デコーダーを読み込み、ステレオ AAC にダウンミックスして MP4 を書きます。巨大な多 GB リップは失敗や極端な遅さがあり得ます——その場合はデスクトップ ffmpeg。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'ファイルはアップロードされますか？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4:
    'いいえ。変換はブラウザ内で実行。エンジンスクリプトはこのサイトから 1 回読み込みます。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: '音声トラックだけ欲しい——このページを使いますか？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'MKV が抽出フォールバックに合いブラウザ向けコーデックなら「MKVファイルから音声を抽出する」。DDP や抽出には大きすぎる場合は、ここで変換してから「MP4ファイルから音声を抽出する」。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'MKV ではなく WebM や MOV？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6:
    'このページは .mkv のみ。他コンテナは別の変換ページを予定。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'MKV をまとめて変換できますか？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7:
    'このページに ZIP 一括はまだありません。今は 1 本ずつ変換してください。',
};
export default ja;
