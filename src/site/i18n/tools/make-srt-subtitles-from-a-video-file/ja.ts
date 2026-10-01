import type { SiteLangDict } from '../../../types';

/**
 * Japanese (ja) copy for make-srt-subtitles-from-a-video-file.
 * Local search: 動画から字幕 / 動画を SRT / ビデオ字幕 作成.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: サーバーにアップロードしない; processing on device.
 */
const ja: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: '動画ファイルから SRT 字幕を作る',
  tool_make_srt_subtitles_from_a_video_file_desc:
    '端末内の Whisper で、対話のあるローカル動画から時間付き .srt を作成。ファイルは端末内に留まり、サーバーにアップロードしません。',
  tool_make_srt_subtitles_from_a_video_file_description:
    'ブラウザで端末内 Whisper を使い、ローカルの動画ファイルから時間付き SRT 字幕を作ります。ファイルは端末内に留まり、サーバーにアップロードしません。手順：対話のある動画を選ぶ → 再生してクリップを確認 → 言語（または自動）→ SRTを作る → キューを編集 → .srt をダウンロード。例：サンプルを押すと短い話し声の MP4 を Whisper に通します。初回のみ約 45 MB のモデルをダウンロード（以降はキャッシュ）。WAV/MP3 など音声のみは「音声ファイルから SRT 字幕を作る」へ。焼き込みなし；時刻は Whisper セグメント由来です。',
  tool_make_srt_subtitles_from_a_video_file_article:
    '「動画から字幕」「動画を SRT」で探す人は、手元の映像からダウンロードできる時間付き字幕を求めており、ボイスメモ向けのページではありません。このツールは同一オリジンの /vendor/whisper 上で Whisper tiny を端末内実行し、タブ内で動画の音声トラックをデコードし、映像プレビューで対話と画を照合し、セグメント時刻を取り、編集可能な標準 SRT を整形してダウンロードします。純粋な音声ファイルは拒否し、「音声ファイルから SRT 字幕を作る」への案内を出します。マイク経路はありません。初回約 45 MB をダウンロードしてキャッシュ。時刻は Whisper セグメント境界で、フレーム単位の強制アラインではありません。動画への字幕焼き込みもしません。',
  tool_make_srt_subtitles_from_a_video_file_choose: '動画ファイルを選ぶ',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'ローカルの MP4・WebM・MOV、またはブラウザがデコードできる動画—デコード後でおおよそ 120 MiB・約 2 時間まで。使える音声トラックが必要です。長いクリップはスライディング窓で認識（窓 n/N；停止で可能な範囲の部分 SRT を残します）。音声のみは関連の音声 SRT ツールへ。',
  tool_make_srt_subtitles_from_a_video_file_lang_label: '話し言葉の言語',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    '自動検出では Whisper がサウンドトラックの言語を判定します。分かっている言語を選ぶとキューが安定しやすいです。',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: '自動検出',
  tool_make_srt_subtitles_from_a_video_file_lang_en: '英語',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: '中国語',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'スペイン語',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: '日本語',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'ドイツ語',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'フランス語',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'ポルトガル語',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'インドネシア語',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'アラビア語',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'ロシア語',
  tool_make_srt_subtitles_from_a_video_file_convert: 'SRTを作る',
  tool_make_srt_subtitles_from_a_video_file_stop: '停止',
  tool_make_srt_subtitles_from_a_video_file_download: 'ダウンロード',
  tool_make_srt_subtitles_from_a_video_file_sample: 'サンプル',
  tool_make_srt_subtitles_from_a_video_file_clear: 'クリア',
  tool_make_srt_subtitles_from_a_video_file_source_play: '元の動画を再生',
  tool_make_srt_subtitles_from_a_video_file_advanced: '正直な制限',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny は同一オリジンの /vendor/whisper からこのタブで動きます。初回の SRTを作る で約 45 MB を一度ダウンロードし、以降はキャッシュを再利用します。長いクリップは約 2 分ずつのスライディング窓です。時刻は Whisper セグメントに沿い、フレーム単位の強制アラインではありません。動画のみ受け付け、焼き込みはしません。画のないボイスメモは関連の音声 SRT ツールへ。',
  tool_make_srt_subtitles_from_a_video_file_progress: '字幕の進捗',
  tool_make_srt_subtitles_from_a_video_file_hud_title: '字幕の進捗',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: '完了しました。必要ならキューを編集し、ダウンロードを押してください。',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'SRT を作れませんでした',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    '別の動画・短いクリップ・またはサンプルを試してください。ファイルは端末内に留まります。',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: '{file} をダウンロード中 — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: '開始中…',
  tool_make_srt_subtitles_from_a_video_file_model: 'モデル',
  tool_make_srt_subtitles_from_a_video_file_decode: 'デコード',
  tool_make_srt_subtitles_from_a_video_file_transcribe: '文字起こし',
  tool_make_srt_subtitles_from_a_video_file_write: 'SRT 書き出し',
  tool_make_srt_subtitles_from_a_video_file_done: '準備できました。必要なら SRT を編集し、ダウンロードを押してください。',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'SRT を作れませんでした。サンプル、より明瞭な話し声の動画、または約 2 時間以内の短いクリップを試してください。',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '経過 {s} 秒',
  tool_make_srt_subtitles_from_a_video_file_preview: 'SRT プレビュー',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} キュー · {chars} 文字',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'サウンドトラックに話し声があるローカル動画を選んでください。',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'まだ SRT はありません。対話のある動画をドロップして SRTを作る を押してください。サンプルは短い話し声の MP4 を端末内 Whisper に通します。プレビュー再生で画とキューを照合できます。ファイルは端末内に留まります。',
  tool_make_srt_subtitles_from_a_video_file_file_label: '動画: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: '端末内 Whisper モデルを読み込み中（初回は約 45 MB のダウンロードあり）…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'このタブで動画の音声トラックをデコード中…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Whisper で文字起こし中…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: '窓 {n}/{total} を文字起こし中…',
  tool_make_srt_subtitles_from_a_video_file_status_write: '時間付き SRT キューを書き出し中…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: '停止しました。既にキューがあれば部分 SRT を残します。',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'ローカルの動画ファイルを1つ選ぶか、サンプルを使ってください。',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    '非対応の種類です。ブラウザがデコードできる一般的な動画コンテナ（例: MP4、WebM）で、音声トラック付きのものを使ってください。',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'デコード後でおおよそ 120 MiB・約 2 時間までの動画にしてください。メモリの少ないスマホでは長い素材が失敗することがあります—先に短くするか圧縮してください。',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'この動画から使える音声トラックをブラウザがデコードできませんでした。無音・音声なし・非対応コーデックはここで失敗します。',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'この経路に必要な Web Audio がこのブラウザでは使えません。',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper が使える話し声テキストを出せませんでした。別のクリップや言語設定を試してください。',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'このサイトから端末内 Whisper モデルを読み込めませんでした。初回ダウンロードはオンラインのまま再試行してください。',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'このページは動画ファイルのみ受け付けます。WAV・MP3 など音声のみの話し声は「音声ファイルから SRT 字幕を作る」を使ってください。',
  tool_make_srt_subtitles_from_a_video_file_how_title: '動画ファイルから SRT 字幕を作る手順',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    '話し声のあるローカル動画を選び、プレビューしてから端末内 Whisper で時間付きキューを作り、編集してダウンロードします。',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'ローカル動画を選ぶ（またはサンプル）、自動検出か話し言葉の言語を選びます。',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    '対話と画を照合したいときは元の動画を再生し、SRTを作る を押します。',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    '進捗カードを確認：モデル → デコード → 文字起こし（長いファイルは窓 n/N）→ SRT 書き出し。停止で中止し、可能なら部分 SRT を残します。',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: '必要なら SRT プレビューを編集し、ダウンロードを押します。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: '動画ファイルから SRT 字幕を作るを使う理由',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    '動画優先：ページ内でクリップをプレビューし、端末内 Whisper でサウンドトラックから .srt を作成—ASR のために当サイトのサーバーへ動画を上げません。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    '音声 SRT ツールとの切り分けが明確：音声のみは拒否し、マイク経路もないため、「動画を SRT」で来た人がボイスメモ UI に落ちません。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    '初回コストを正直に提示（約 45 MB は一度だけ）し、長い素材ではスライディング窓の進捗 HUD を表示。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    '編集可能な .srt サイドカーのみ—動画への焼き込みなし。関連ツールが音声のみ SRT と波形動画をカバーします。',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'SRT のルールと動画 Whisper の制限',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny は同一オリジン資産からブラウザ内で動きます。ブラウザが動画から使える音声トラックをデコードできる必要があります。サイズと長さの上限でタブを使いやすく保ちます。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    '動画コンテナのみ（例: MP4、WebM、MOV）。音声のみは関連の音声 SRT ページを使います。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'おおよそ 120 MiB・デコード後約 2 時間までをスライディング窓で文字起こし。それより長い・大きい場合は明確な上限エラーを出します。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'タイムスタンプは Whisper セグメントの境界—再生には十分で、画のカットへのフレーム単位強制アラインではありません。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Whisper 用に動画は端末内に留まります。このページは字幕を焼き込まず、動画プラットフォームから字幕を取得もしません。',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'サンプル動画クリップを試す',
  tool_make_srt_subtitles_from_a_video_file_example:
    'サンプルは短い話し声の MP4 を取得し、端末内 Whisper で SRTを作る を実行してプレビューに入れます。開いた瞬間には自動実行しないので、約 45 MB の初回モデル取得が全訪問者にかかりません。',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'こんなときに',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    '手元のインタビュー・トーキングヘッド・画面録画の MP4 から、プレイヤーや編集ソフト用のダウンロードできる .srt が欲しいとき。',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    '動画ファイルに字幕を付けたいが、クラウド ASR に素材を上げたくなく、キュー確認中に画も見たいとき。',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'カメラや編集ソフトから MP4/WebM を書き出したあと、公開前に直せるたたき台の SRT が欲しいとき。',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'SRT のタイムスタンプはどれくらい正確ですか？',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'サウンドトラック上の Whisper セグメントの開始・終了に従います。多くのプレイヤーには十分ですが、画のカットへのフレーム単位同期ではありません。',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: '端末内 Whisper ですか、クラウドへのアップロードですか？',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'SRTを作る は同一オリジンの vendor から端末内 Whisper tiny を動かします。動画は端末内に留まり、認識のために当サイトのサーバーへアップロードしません。',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: '初回の SRTを作る が遅い・大きいのはなぜ？',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    '初回は本サイトから約 45 MB の Whisper tiny モデルと WASM をブラウザキャッシュへダウンロードします。以降は再利用。長い動画は文字起こしが窓 n/N で進み、停止でキャンセルして部分 SRT を残せる場合があります。',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: '「音声ファイルから SRT 字幕を作る」との違いは？',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    '関連ツールはボイスメモなど音声優先ファイル（任意のマイク口述）向けです。このページは動画向け：映像プレビュー、動画のみの受け付け、動画から字幕の文言。下層の端末内 Whisper は同じです。',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'WAV や MP3 は使えますか？',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'いいえ。純粋な音声は拒否し、「動画を SRT」で来た人が音声 UI に混ざらないようにしています。WAV/MP3/M4A は「音声ファイルから SRT 字幕を作る」を開いてください。',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: '動画に字幕を焼き込めますか？YouTube から取れますか？',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'いいえ。.srt サイドカーのダウンロードのみです。YouTube などからの自動字幕取得もしません。',
};
export default ja;
