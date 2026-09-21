import type { SiteLangDict } from '../../../types';

/**
 * ja copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. ローカル音声をローカル動画に合成。YouTube不可。ミュートのみ・抽出のみではない。WebM/再エンコード制限を明示。
 */
const ja: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: '動画に音声トラックを追加する',
  tool_add_an_audio_track_to_a_video_desc:
    'ローカルの動画にローカル音声を合成して保存。端末内のみ—YouTube の取得はしません。',
  tool_add_an_audio_track_to_a_video_description: 'ブラウザでローカル動画に音声トラックを追加し、映像と選んだサウンドトラックを合成して保存します。手順：動画と音声を選ぶ → 音声を追加 → プレビュー → 保存。例：無音クリップ＋短い WAV。captureStream と browser media recording を使用—多くは WebM。ロスレス remux ではありません。アップロードなし。YouTube 取得なし。',
  tool_add_an_audio_track_to_a_video_article: '無音や声が弱いクリップは、共有前に新しいサウンドトラックが必要になることがあります。このページではローカル動画とローカル音声を開き、元の音声トラックを外してフレームをキャプチャし、the browser audio engine でサウンドをデコードして browser media recording で再エンコード—ブラウザにより多くは WebM。出力尺は動画に合わせ、長い音声は切れ、短い音声は映像より先に終わります。YouTube や URL の取得はせず、ミュートだけでも音声抽出だけでもありません。両方の再生と音声付き browser media recording が条件です。原本は残し、ダウンロードは新しいファイル。処理は端末内です。',
  tool_add_an_audio_track_to_a_video_choose_video: '動画ファイルを選ぶ',
  tool_add_an_audio_track_to_a_video_hint_video:
    'ブラウザで再生できるローカル MP4 / WebM / MOV / M4V をドロップまたは選択。最大約 80 MiB・約 3 分。YouTube や URL 貼り付けは不可。',
  tool_add_an_audio_track_to_a_video_choose_audio: '音声ファイルを選ぶ',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'ブラウザがデコードできるローカル WAV / MP3 / M4A などをドロップまたは選択。最大約 40 MiB。',
  tool_add_an_audio_track_to_a_video_convert: '音声を追加',
  tool_add_an_audio_track_to_a_video_download: '保存',
  tool_add_an_audio_track_to_a_video_sample: 'サンプルを読み込む',
  tool_add_an_audio_track_to_a_video_clear: 'クリア',
  tool_add_an_audio_track_to_a_video_advanced: '合成の注意',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'ブラウザは通常、元の音声を外してあなたのサウンドを付けたあと browser media recording で再エンコードします。出力は多く WebM で、元 MP4 のロスレス remux ではありません。YouTube は取得しません。',
  tool_add_an_audio_track_to_a_video_progress: '音声追加の進捗',
  tool_add_an_audio_track_to_a_video_read: '読み込み',
  tool_add_an_audio_track_to_a_video_decode: 'デコード',
  tool_add_an_audio_track_to_a_video_merge: '合成',
  tool_add_an_audio_track_to_a_video_write: '書き出し',
  tool_add_an_audio_track_to_a_video_done: '完了。合成動画をプレビューしてから保存してください。',
  tool_add_an_audio_track_to_a_video_failed:
    'この動画へ音声を合成できませんでした。ブラウザで再生できる短いファイルを試してください。',
  tool_add_an_audio_track_to_a_video_elapsed: '{s} 秒経過',
  tool_add_an_audio_track_to_a_video_preview: '合成動画をプレビュー',
  tool_add_an_audio_track_to_a_video_result: '{seconds} 秒 · 音声あり · {mime} · {output} KiB',
  tool_add_an_audio_track_to_a_video_sample_name: '音声追加サンプル',
  tool_add_an_audio_track_to_a_video_empty: 'まずローカルの動画と音声を選ぶか、サンプルを読み込んでください。',
  tool_add_an_audio_track_to_a_video_empty_state:
    'まだファイルがありません。ローカル動画とサウンドトラックをドロップするか「サンプルを読み込む」。映像へ音声を合成します—ミュートのみ・抽出のみ・YouTube 取得ではありません。',
  tool_add_an_audio_track_to_a_video_video_label: '動画: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: '音声: {name}',
  tool_add_an_audio_track_to_a_video_err_file: '対応するローカル動画と音声を 1 つずつ選んでください。',
  tool_add_an_audio_track_to_a_video_err_format:
    '未対応または再生できないファイルです。ブラウザがデコードできる一般的な動画/音声を使ってください。YouTube URL は不可。',
  tool_add_an_audio_track_to_a_video_err_limit:
    '動画は約 80 MiB / 約 3 分まで、音声は約 40 MiB までのローカルファイルにしてください。',
  tool_add_an_audio_track_to_a_video_err_decode:
    'ブラウザが動画または音声をデコードできませんでした。別のコンテナか短いクリップを試してください。',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'browser media recording が合成動画を書けませんでした。Chrome/Edge、または短い WebM/MP4 と WAV/MP3 を試してください。',
  tool_add_an_audio_track_to_a_video_how_title: '動画に音声トラックを追加する方法',
  tool_add_an_audio_track_to_a_video_how_body:
    'ローカルの動画と音声を選び、「音声を追加」→ プレビュー → 保存。アップロードも YouTube 取得もしません。',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'ローカル動画とローカル音声を選ぶ（またはサンプルを読み込む）。YouTube リンクは貼らない。',
  tool_add_an_audio_track_to_a_video_how_item_2:
    '「音声を追加」をクリックし、読み込み → デコード → 合成 → 書き出しが終わるまで待つ。',
  tool_add_an_audio_track_to_a_video_how_item_3:
    '結果をプレビュー。新しいサウンドトラックが映像と一緒に聞こえるはずです。',
  tool_add_an_audio_track_to_a_video_how_item_4:
    '結果行を確認してから「保存」をクリック。',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'この動画に音声を追加するツールを選ぶ理由',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    '保存前に長さ・MIME タイプ・出力 KiB を確認できます。',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    '合成ジョブは明確で、browser media recording の制限を正直に示します—偽のロスレス remux 約束はありません。',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    '読み込みと録画は端末内。処理のためにファイルをアップロードしません。',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'どちらかのファイルを変えると古いダウンロードが消え、古い合成を誤保存しません。',
  tool_add_an_audio_track_to_a_video_rules_title: '合成ルールと正直なブラウザ制限',
  tool_add_an_audio_track_to_a_video_rules_body:
    '毎回、元の音声を外し、あなたのサウンドを付け、browser media recording で再エンコードします。出力は多く WebM。YouTube 取得でもミュートのみでも音声抽出でもありません。',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'ローカル動画は約 80 MiB・約 3 分まで、ローカル音声は約 40 MiB まで。先に再生/デコードできる必要があります。',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    '出力尺は動画に合わせます。長い音声は切り詰め、短い音声は映像より先に終わります。',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'YouTube・ポッドキャスト URL・リモート取得は不可。貼り付け非対応。',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'コンテナやコーデックは元と変わることがあります。原本を残し、ダウンロードは新しい再エンコードファイルです。',
  tool_add_an_audio_track_to_a_video_example_title: '短い無音クリップ＋トーンのベッドを試す',
  tool_add_an_audio_track_to_a_video_example:
    '「サンプルを読み込む」は短いキャンバス動画と単純なトーンを作り、続けて「音声を追加」が自動実行されます。新しいサウンド付きの映像が見えます。自動再生はしません—見るときは再生を押してください。',
  tool_add_an_audio_track_to_a_video_usecases_title: 'こんなときに',
  tool_add_an_audio_track_to_a_video_usecase_1:
    '無音の画面録画と WAV ベッドがある—ここで合成して共有用に保存。',
  tool_add_an_audio_track_to_a_video_usecase_2:
    '弱い内蔵トラックを、デスクトップ編集ソフトなしでより明瞭なローカル音声に差し替えたい。',
  tool_add_an_audio_track_to_a_video_usecase_3: '無音の画面録画と別撮りナレーションを、アップロード前に一本化したい。',
  tool_add_an_audio_track_to_a_video_faq_q1: 'YouTube の取得や URL の貼り付けはできますか？',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'できません。手元のローカルファイルのみ。YouTube ダウンローダーもリモート取得もありません。',
  tool_add_an_audio_track_to_a_video_faq_q2: '動画から音声を消すのと同じですか？',
  tool_add_an_audio_track_to_a_video_faq_a2:
    '違います。ミュート/除去は別の作業です。このページは映像に新しいサウンドトラックを付けます。',
  tool_add_an_audio_track_to_a_video_faq_q3: '音声だけを別ファイルとして抽出しますか？',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'しません。動画からの音声抽出は別ツールです。ここでの結果は合成済み音声付きの動画です。',
  tool_add_an_audio_track_to_a_video_faq_q4: '出力は元と同じ MP4 になりますか？',
  tool_add_an_audio_track_to_a_video_faq_a4:
    '通常はなりません。ブラウザは browser media recording で再エンコードし、多くは WebM になります。画質とコンテナは変わり得ます。',
  tool_add_an_audio_track_to_a_video_faq_q5: 'サーバーへアップロードされますか？',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'されません。デコードと録画は端末のブラウザ内です。初回読み込みにはネットワークが必要で、オフライン動作は保証しません。',
  tool_add_an_audio_track_to_a_video_faq_q6: '音声が動画より長い場合は？',
  tool_add_an_audio_track_to_a_video_faq_a6:
    '合成は動画の長さに合わせます。映像終了後の余分な音声はダウンロードに含まれません。',
};
export default ja;
