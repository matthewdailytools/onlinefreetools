import type { SiteLangDict } from '../../../types';

/**
 * 日本語: WebMファイルから音声を抽出する。
 * .webm のみ；MediaElement フォールバック（約 500 MiB / 4 時間）—5 GiB デマックス主張なし。
 * 端末内処理；出力は WAV または MP3；YouTube URL なし。
 */
const ja: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'WebMファイルから音声を抽出する',
  tool_extract_audio_from_a_webm_file_desc:
    'ローカル WebM の Opus/Vorbis 音声を端末上で WAV または MP3 に抽出。ブラウザのフォールバックは約 500 MiB / 4 時間—5 GiB デマックスは謳いません。',
  tool_extract_audio_from_a_webm_file_description:
    'ローカル WebM の音声トラックをブラウザで抽出し、WAV または MP3 をダウンロード。手順：WebM を選ぶ → 抽出 → プレビュー → ダウンロード。例：サンプルを読み込むは MediaRecorder が使えるとき短い合成 WebM を作ります。この WebM 専用ページは共有エンジンの MediaElement フォールバック（約 500 MiB / 4 時間）を使い、大きすぎるファイルは err_container で即失敗します。大きな MP4/MOV デマックスは各形式ページまたは動画ハブへ。ローカルのみ—YouTube や URL 取得なし。アップロードしません。多数の WebM なら「複数のWebMファイルから音声を一括抽出」へ。',
  tool_extract_audio_from_a_webm_file_article:
    '画面録画やブラウザキャプチャは Opus 付き WebM になりがちです。本ページは .webm のみ受け付け、抽出能力表のフォールバック経路で WAV/MP3 を書き、アップロードしません。ISOBMFF デマックスや数 GiB の OPFS ストリーミングは主張しません—それは MP4/MOV 向けです。YouTube URL は取得しません。混在フォルダはハブまたはハブ一括へ。',
  tool_extract_audio_from_a_webm_file_choose: 'WebMファイルを選ぶ',
  tool_extract_audio_from_a_webm_file_hint:
    'ローカルの .webm を1つドロップ。フォールバック上限は約 500 MiB / 4 時間。それより大きい WebM は明確なコンテナメッセージで失敗—大容量デマックスなら MP4 にリマックスするか、ファイルを縮小してください。',
  tool_extract_audio_from_a_webm_file_convert: '抽出',
  tool_extract_audio_from_a_webm_file_download: 'ダウンロード',
  tool_extract_audio_from_a_webm_file_download_wav: 'WAVをダウンロード',
  tool_extract_audio_from_a_webm_file_download_mp3: 'MP3をダウンロード',
  tool_extract_audio_from_a_webm_file_sample: 'サンプルを読み込む',
  tool_extract_audio_from_a_webm_file_clear: 'クリア',
  tool_extract_audio_from_a_webm_file_advanced: '書き出し形式',
  tool_extract_audio_from_a_webm_file_format_label: '出力形式',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV（16ビット）',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'MP3ビットレート',
  tool_extract_audio_from_a_webm_file_settings_hint:
    '短い WebM には既定の WAV。長いクリップは MP3 ストリームになることがあります。上限はフォールバック経路（約 500 MiB）であり、MP4 デマックスではありません。URL 取得なし。',
  tool_extract_audio_from_a_webm_file_progress: '抽出の進捗',
  tool_extract_audio_from_a_webm_file_read: '読み込み',
  tool_extract_audio_from_a_webm_file_decode: 'デコード',
  tool_extract_audio_from_a_webm_file_extract: '抽出',
  tool_extract_audio_from_a_webm_file_write: '書き込み',
  tool_extract_audio_from_a_webm_file_done: '完了。音声をプレビューしてから WAV または MP3 をダウンロードしてください。',
  tool_extract_audio_from_a_webm_file_failed:
    '抽出に失敗しました。ブラウザがデコードできる小さめの WebM を試してください。',
  tool_extract_audio_from_a_webm_file_elapsed: '{s}秒経過',
  tool_extract_audio_from_a_webm_file_preview: '抽出した音声を聴く',
  tool_extract_audio_from_a_webm_file_result: '{seconds}秒 · {channels} ch · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_a_webm_file_sample_name: 'short-webm-audio-demo',
  tool_extract_audio_from_a_webm_file_empty: '先に WebM ファイルを選ぶか、サンプルを読み込んでください。',
  tool_extract_audio_from_a_webm_file_empty_state:
    'まだファイルがありません。約 500 MiB 以内のローカル .webm をドロップするか、サンプルを読み込む。YouTube ではありません。',
  tool_extract_audio_from_a_webm_file_err_file: 'WebM ファイルをちょうど1つドロップしてください。',
  tool_extract_audio_from_a_webm_file_err_format:
    '非対応のファイルです。このページでは .webm（video/webm）のみです。',
  tool_extract_audio_from_a_webm_file_err_limit:
    'この WebM はフォールバック経路の時間またはサイズ制限を超えています。',
  tool_extract_audio_from_a_webm_file_err_container:
    'この WebM はフォールバック上限（約 500 MiB / 4 時間）を超えるか、ここでデコードできません。大容量デマックスなら MP4 にリマックスするか、小さめの WebM を使ってください。',
  tool_extract_audio_from_a_webm_file_err_codec:
    'この WebM の音声コーデックはブラウザのフォールバック経路でサポートされていません。',
  tool_extract_audio_from_a_webm_file_err_channels:
    'このトラックのチャンネル構成は抽出器が扱えません。',
  tool_extract_audio_from_a_webm_file_err_decode: 'ブラウザはこの WebM から音声をデコードできませんでした。',
  tool_extract_audio_from_a_webm_file_err_encoder: '音声ファイルを書き込めませんでした。もう一度「抽出」してください。',
  tool_extract_audio_from_a_webm_file_err_sample:
    'サンプル WebM を作れませんでした。ご自身の .webm をドロップしてください。',
  tool_extract_audio_from_a_webm_file_err_unsupported:
    'このブラウザには抽出に必要な Web Audio がありません。',
  tool_extract_audio_from_a_webm_file_err_empty: '使える音声サンプルを取得できませんでした。',
  tool_extract_audio_from_a_webm_file_stop: '停止',
  tool_extract_audio_from_a_webm_file_status_stopped: '停止しました。途中の音声ファイルは保持されません。',
  tool_extract_audio_from_a_webm_file_forced_mp3:
    '長い／大きい入力はフォールバック経路でストリーム MP3 を使いました。',
  tool_extract_audio_from_a_webm_file_how_title: 'WebMファイルから音声を抽出する方法',
  tool_extract_audio_from_a_webm_file_how_body:
    'ローカル WebM をドロップし、WAV または MP3 を選び、抽出→プレビュー→ダウンロード。アップロードなし。',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'ローカルの .webm（約 500 MiB 以内）を選ぶか、MediaRecorder が動くときサンプルを読み込む。',
  tool_extract_audio_from_a_webm_file_how_item_2:
    '書き出し形式を開き、WAV または MP3 を選び、必要ならビットレートを設定。',
  tool_extract_audio_from_a_webm_file_how_item_3:
    '「抽出」をクリックし、読み込み → デコード → 抽出 → 書き込みを待つ（または停止）。',
  tool_extract_audio_from_a_webm_file_how_item_4: 'プレビュー後、「WAVをダウンロード」または「MP3をダウンロード」。',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'WebMファイルから音声を抽出するを使う理由',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'WebM 専用受付なので、画面キャプチャが MP4 ランディングと混ざりません。',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'フォールバック上限を正直に示す—WebM 向けの偽 5 GiB デマックス宣伝なし。',
  tool_extract_audio_from_a_webm_file_why_choose_item_3:
    '処理は端末内；「停止」で途中キャンセル可能。',
  tool_extract_audio_from_a_webm_file_why_choose_item_4:
    'デマックスが必要なときは近くのハブや MP4/MOV 大容量ページへ。',
  tool_extract_audio_from_a_webm_file_rules_title: 'WebMのみとフォールバック制限',
  tool_extract_audio_from_a_webm_file_rules_body:
    'MediaElement フォールバックでローカル WebM を1回につき1本。YouTube から MP3 ではありません。無音動画の書き出しでもありません。',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    'フォールバック約 500 MiB / 4 時間。超過 → err_container。大容量デマックスは現状 MP4/MOV のみ。',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'URL や YouTube ダウンロードなし。',
  tool_extract_audio_from_a_webm_file_rules_item_3: '成否はブラウザの WebM/Opus 対応に依存します。',
  tool_extract_audio_from_a_webm_file_rules_item_4:
    '元の WebM は上書きしません。複数 WebM は WebM 一括ツールへ。',
  tool_extract_audio_from_a_webm_file_example_title: '実際のWebM抽出を試す',
  tool_extract_audio_from_a_webm_file_example:
    'サンプルを読み込むは MediaRecorder が使えるとき短い合成 WebM を作り、その後「抽出」が走ります。サンプルが作れないときはご自身の .webm を推奨。',
  tool_extract_audio_from_a_webm_file_usecases_title: 'こんなときに役立ちます',
  tool_extract_audio_from_a_webm_file_usecase_1:
    'ブラウザの画面キャプチャ WebM → アップロードなしで共有できる MP3。',
  tool_extract_audio_from_a_webm_file_usecase_2:
    'インタビューの WebM クリップから Opus トラックだけを WAV にしたい。',
  tool_extract_audio_from_a_webm_file_usecase_3:
    'ファイルが WebM だと分かっていて、混在ハブではなく形式専用ページが欲しい。',
  tool_extract_audio_from_a_webm_file_faq_q1: 'YouTubeのURLを貼れますか？',
  tool_extract_audio_from_a_webm_file_faq_a1: 'いいえ。ローカルの .webm のみです。',
  tool_extract_audio_from_a_webm_file_faq_q2: 'MP4ページのように5 GiBではないのですか？',
  tool_extract_audio_from_a_webm_file_faq_a2:
    '大容量デマックスは現状 ISOBMFF（MP4/MOV）です。WebM は MediaElement フォールバック約 500 MiB を使い、WebM デマックスが来るまでこの上限です。',
  tool_extract_audio_from_a_webm_file_faq_q3: 'WebMを無音動画（ミュート）にしますか？',
  tool_extract_audio_from_a_webm_file_faq_a3: 'いいえ。音声だけを WAV/MP3 に抽出します。',
  tool_extract_audio_from_a_webm_file_faq_q4: 'ファイルはアップロードされますか？',
  tool_extract_audio_from_a_webm_file_faq_a4: 'いいえ。デコードと書き込みはブラウザ内です。',
  tool_extract_audio_from_a_webm_file_faq_q5: 'WebMが多数あります—どのページ？',
  tool_extract_audio_from_a_webm_file_faq_a5:
    '成功分の ZIP なら「複数のWebMファイルから音声を一括抽出」を使ってください。',
  tool_extract_audio_from_a_webm_file_faq_q6: '抽出後にトリムできますか？',
  tool_extract_audio_from_a_webm_file_faq_a6:
    'ここではありません。ダウンロード後、「音声クリップをトリムして書き出す」を使ってください。',
};
export default ja;
