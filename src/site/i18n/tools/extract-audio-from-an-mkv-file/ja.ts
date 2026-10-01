import type { SiteLangDict } from '../../../types';

/**
 * 日本語：MKVファイルから音声を抽出する。
 * D1 の正直な境界：MediaElement フォールバック約 500 MiB / 4 時間。数 GiB や DDP/Atmos は PC で ffmpeg により AAC ステレオ MP4 に変換し、MP4 抽出ページを使う。
 * キーは英語マスターと同一。英語の型文は使わず、サイト既存の日本語表現に合わせる。
 */
const ja: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'MKVファイルから音声を抽出する',
  tool_extract_audio_from_an_mkv_file_desc:
    '約 500 MiB / 4 時間のフォールバック経路に収まるローカル MKV なら、ブラウザで WAV/MP3 に抽出できます。数 GiB や DDP/Atmos の MKV は、先に PC で ffmpeg で AAC MP4 に変換し、「MP4ファイルから音声を抽出する」を使ってください。',
  tool_extract_audio_from_an_mkv_file_description:
    'ローカル MKV 1 本から音声トラックをブラウザで取り出し、WAV または MP3 を保存。手順：MKV 選択 → 抽出 → 試聴 → ダウンロード。例：「サンプルを読み込む」は MediaRecorder が使えるとき短い合成代替を作ります—実ファイルの .mkv（約 500 MiB 以内）の方が確実です。本ページは MediaElement フォールバック（約 500 MiB / 4 時間）。上限超過はすぐ err_container。数 GiB の MKV や Dolby Digital Plus / Atmos（E-AC-3）は非対応—PC で ffmpeg により AAC ステレオ MP4（映像は copy 可）にしてから「MP4ファイルから音声を抽出する」で大容量 demux へ。ローカルのみ—YouTube URL 不可、アップロードなし。複数 MKV は「MKVファイルから音声を一括抽出する」。',
  tool_extract_audio_from_an_mkv_file_article:
    '画面録画やキャプチャは MKV で届くことが多いです。本ページは .mkv のみ受け付け、共有フォールバック経路で WAV/MP3 を書き出し、アップロードしません。ISOBMFF demux や数 GiB OPFS ストリーミングは謳いません—AAC の MP4/MOV 向けです。ブラウザでも E-AC-3 / DTS はデコードしません。数 GiB や Atmos トラックは端末で ffmpeg → AAC MP4 のあと MP4 抽出ランディングへ。混在フォルダは動画ハブまたはハブ一括へ。',
  tool_extract_audio_from_an_mkv_file_choose: 'MKVファイルを選ぶ',
  tool_extract_audio_from_an_mkv_file_hint:
    '約 500 MiB / 4 時間以内のローカル .mkv をドロップ。それ以上や DDP/Atmos の MKV は PC で ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 のあと「MP4ファイルから音声を抽出する」。',
  tool_extract_audio_from_an_mkv_file_convert: '抽出',
  tool_extract_audio_from_an_mkv_file_download: 'ダウンロード',
  tool_extract_audio_from_an_mkv_file_download_wav: 'WAVを保存',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'MP3を保存',
  tool_extract_audio_from_an_mkv_file_sample: 'サンプルを読み込む',
  tool_extract_audio_from_an_mkv_file_clear: 'クリア',
  tool_extract_audio_from_an_mkv_file_advanced: '書き出し形式',
  tool_extract_audio_from_an_mkv_file_format_label: '出力形式',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV（16-bit）',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'MP3 ビットレート',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    '短い MKV は WAV 既定で十分。長いクリップは MP3 ストリームになることがあります。上限はフォールバック（約 500 MiB）であり MP4 demux ではありません。URL 不可。',
  tool_extract_audio_from_an_mkv_file_progress: '抽出の進捗',
  tool_extract_audio_from_an_mkv_file_read: '読み取り',
  tool_extract_audio_from_an_mkv_file_decode: 'デコード',
  tool_extract_audio_from_an_mkv_file_extract: '抽出',
  tool_extract_audio_from_an_mkv_file_write: '書き込み',
  tool_extract_audio_from_an_mkv_file_done: '完了。音声をプレビューしてから WAV または MP3 を保存してください。',
  tool_extract_audio_from_an_mkv_file_failed:
    '抽出に失敗しました。より小さい MKV を試すか、先に ffmpeg で AAC MP4 に変換してください。',
  tool_extract_audio_from_an_mkv_file_elapsed: '{s}秒経過',
  tool_extract_audio_from_an_mkv_file_preview: '抽出した音声を聴く',
  tool_extract_audio_from_an_mkv_file_result: '{seconds}s · {channels} ch · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: '短mkv音声デモ',
  tool_extract_audio_from_an_mkv_file_empty: '先に MKV を選ぶかサンプルを読み込んでください。',
  tool_extract_audio_from_an_mkv_file_empty_state:
    '未読込。約 500 MiB 以内のローカル .mkv をドロップするかサンプル読込。数 GiB / DDP は先に ffmpeg で AAC MP4 へ。YouTube 不可。',
  tool_extract_audio_from_an_mkv_file_err_file: 'MKV ファイルはちょうど 1 つだけドロップしてください。',
  tool_extract_audio_from_an_mkv_file_err_format: '非対応ファイルです。本ページは .mkv のみです。',
  tool_extract_audio_from_an_mkv_file_err_limit: 'この MKV はフォールバック経路のサイズまたは時間上限を超えています。',
  tool_extract_audio_from_an_mkv_file_err_container:
    'この MKV はフォールバック上限（約 500 MiB / 4 時間）を超えるか、ここではデコードできません。PC で ffmpeg により AAC ステレオ MP4（映像 copy）に変換し「MP4ファイルから音声を抽出する」—またはより小さい MKV を。',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'この MKV の音声コーデックはブラウザ非対応です（E-AC-3 / DDP / Atmos が多い）。ffmpeg で MP4 内 AAC に変換し、MP4 抽出ページを使ってください。',
  tool_extract_audio_from_an_mkv_file_err_channels:
    'このトラックのチャンネル配置は抽出器が扱えません。先に MP4 でステレオ AAC にダウンミックスしてください。',
  tool_extract_audio_from_an_mkv_file_err_decode: 'ブラウザがこの MKV から音声をデコードできませんでした。',
  tool_extract_audio_from_an_mkv_file_err_encoder: '音声ファイルを書き出せませんでした。もう一度抽出してください。',
  tool_extract_audio_from_an_mkv_file_err_sample: 'サンプル MKV を作れませんでした。自分の .mkv をドロップしてください。',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'このブラウザには抽出に必要な Web Audio がありません。',
  tool_extract_audio_from_an_mkv_file_err_empty: '使える音声サンプルが取れませんでした。',
  tool_extract_audio_from_an_mkv_file_stop: '停止',
  tool_extract_audio_from_an_mkv_file_status_stopped: '停止しました。途中の音声ファイルは残しません。',
  tool_extract_audio_from_an_mkv_file_forced_mp3: '長い/大きい入力はフォールバック経路で MP3 ストリームになりました。',
  tool_extract_audio_from_an_mkv_file_how_title: 'MKVファイルから音声を抽出する方法',
  tool_extract_audio_from_an_mkv_file_how_body:
    '小さなローカル MKV：ドロップ → 抽出 → ダウンロード。数 GiB や DDP/Atmos：先に端末で ffmpeg で AAC MP4 に変換し、MP4 抽出ツールへ。',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    '約 500 MiB 以内のローカル .mkv を選ぶか、MediaRecorder が使えるときサンプル読込。ファイルが数 GiB や DDP/Atmos なら、ここで止めて先に ffmpeg で変換。',
  tool_extract_audio_from_an_mkv_file_how_item_2: '「書き出し形式」を開き WAV か MP3 を選び、必要ならビットレートを設定。',
  tool_extract_audio_from_an_mkv_file_how_item_3: '「抽出」を押し、読み取り → デコード → 抽出 → 書き込みを待つ（または「停止」）。',
  tool_extract_audio_from_an_mkv_file_how_item_4: '試聴してから「WAVを保存」または「MP3を保存」。',
  tool_extract_audio_from_an_mkv_file_why_choose_title: '「MKVファイルから音声を抽出する」を使う理由',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1: 'MKV のみ受付—Matroska を MP4 ランディングと混ぜません。',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2: 'フォールバック上限を正直に記載—MKV に 5 GiB demux の虚偽宣伝はしません。',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3:
    '超大容量/DDP 向けの明確な次の一手：PC の ffmpeg → AAC MP4 → MP4 抽出ページ。',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: '処理は端末内。停止で実行中もキャンセルできます。',
  tool_extract_audio_from_an_mkv_file_rules_title: 'MKV のみとフォールバック上限',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'MediaElement フォールバックで 1 実行あたりローカル MKV 1 本。YouTube→MP3 ではありません。無音動画の書き出しでもありません。大きい/特殊コーデックの MKV は先に端末で AAC MP4 が必要です。',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    '約 500 MiB / 4 時間フォールバック。超過 → err_container。大容量 demux は現状 MP4/MOV のみ。',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'URL や YouTube ダウンロード不可。',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS は多く err_codec。PC の例：ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 のあと「MP4ファイルから音声を抽出する」。',
  tool_extract_audio_from_an_mkv_file_rules_item_4: '元の MKV は上書きしません。一括は MKV 一括抽出ツールへ。',
  tool_extract_audio_from_an_mkv_file_example_title: '実 MKV 抽出を試す',
  tool_extract_audio_from_an_mkv_file_example:
    'サンプル読込は MediaRecorder が使えるとき短い合成代替を作り、続けて抽出します。フォールバック上限内の自分の .mkv を推奨。数 GiB の rip は ffmpeg で AAC MP4 にして MP4 ページへ。',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'こんなときに',
  tool_extract_audio_from_an_mkv_file_usecase_1:
    'ブラウザ録画の MKV が約 500 MiB 以内—アップロードなしで共有用 MP3 に。',
  tool_extract_audio_from_an_mkv_file_usecase_2: '短い MKV インタビューから音声トラックだけ WAV が欲しい。',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    '超大 MKV や DDP と分かっている—本ページではなく、先にローカルで AAC MP4 にして MP4 抽出ツールを使う。',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'YouTube の URL を貼れますか？',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'いいえ。ローカル .mkv のみです。',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'MP4 ページのように 5 GiB にならないのはなぜ？',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    '大容量 demux は現状 ISOBMFF（MP4/MOV）向けです。MKV は Matroska demux 実装まで MediaElement フォールバック約 500 MiB です。',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'MKV が数 GiB または Dolby Atmos / DDP です—どうすれば？',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    '本ページは拒否します（err_container および/または err_codec）。PC で AAC ステレオ MP4 に変換してください。例：ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4。その後「MP4ファイルから音声を抽出する」で大容量 demux 経路へ。AAC に再エンコードせず remux だけでは、トラックが E-AC-3 のままなら依然失敗します。',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'MKV を無音動画にしますか？',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'いいえ。WAV/MP3 に音声を取り出すだけです。',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'ファイルはアップロードされますか？',
  tool_extract_audio_from_an_mkv_file_faq_a5:
    'いいえ。デコードと書き込みはブラウザ内です。必要な ffmpeg もあなたの PC 上で完結します。',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'MKV がたくさんある—どのページ？',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    '小さめ MKV フォルダ：「MKVファイルから音声を一括抽出する」。巨大/DDP は各ファイルを先に AAC MP4 に変換し、「MP4ファイルから音声を一括抽出する」または単体 MP4 ページへ。',
  tool_extract_audio_from_an_mkv_file_faq_q7: '抽出後にトリムできますか？',
  tool_extract_audio_from_an_mkv_file_faq_a7: '本ページでは不可。ダウンロード後、「音声クリップを切り出して書き出す」を使ってください。',
};
export default ja;
