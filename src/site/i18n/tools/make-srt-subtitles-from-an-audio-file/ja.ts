import type { SiteLangDict } from '../../../types';

/**
 * Japanese (ja) copy for make-srt-subtitles-from-an-audio-file.
 * Local search: 音声から字幕 / SRT 作成 / ブラウザ Whisper.
 * On-device Whisper tiny; first ~45 MB model download; editable SRT; optional mic.
 * Privacy: サーバーにアップロードしない; processing on device. How labels match UI buttons.
 */
const ja: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: '音声ファイルから SRT 字幕を作る',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    '端末内の Whisper でローカルの話し声から時間付き .srt を作成。ファイルは端末内に留まり、サーバーにアップロードしません。',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'ブラウザで端末内 Whisper モデルを使い、ローカルの音声や音声トラック付き動画から時間付き SRT 字幕を作ります。ファイルは端末内に留まり、サーバーにアップロードしません。手順：音声ファイルを選ぶ → 言語（または自動）→ SRTを作る → キューを編集 → .srt をダウンロード。例：サンプルを押すと短い話し声を Whisper に通し、SRT を表示します。初回のみ約 45 MB のモデルをダウンロード（以降はキャッシュ）。クラウド ASR ではなく、時刻は Whisper のセグメント由来です。',
  tool_make_srt_subtitles_from_an_audio_file_article:
    '「音声から字幕」「SRT 作成」で探す人は、手元の録音からダウンロードできる時間付き字幕を求めています。このツールは同一オリジンの /vendor/whisper 上で Whisper tiny を端末内実行し、タブ内でデコード・セグメント時刻の取得・編集可能な標準 SRT の整形・ダウンロードまで行います。ブラウザがデコードできる音声トラック付き動画も可です。「マイクで口述」は Web Speech がある場合だけの副経路で、なくても SRTを作る は使えます。初回約 45 MB をダウンロードしてキャッシュ。時刻は Whisper セグメント境界で、フレーム単位の強制アラインではありません。動画への字幕焼き込みはしません。',
  tool_make_srt_subtitles_from_an_audio_file_choose: '音声ファイルを選ぶ',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'ローカルの WAV・MP3・M4A、またはブラウザがデコードできる音声—デコード後でおおよそ 120 MiB・約 2 時間まで。長いファイルはスライディング窓で認識（窓 n/N；停止で可能な範囲の部分 SRT を残します）。音声トラック付き動画もデコードできれば可。失敗時は分かりやすいエラーを出します。',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: '話し言葉の言語',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    '自動検出では Whisper が言語を判定します。分かっている言語を選ぶとキューが安定しやすいです。マイク口述は Web Speech があるとき同じ選択を使います。',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: '自動検出',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: '英語',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: '中国語',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'スペイン語',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: '日本語',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'ドイツ語',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'フランス語',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'ポルトガル語',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'インドネシア語',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'アラビア語',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'ロシア語',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'SRTを作る',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'マイクで口述',
  tool_make_srt_subtitles_from_an_audio_file_stop: '停止',
  tool_make_srt_subtitles_from_an_audio_file_download: 'ダウンロード',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'サンプル',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'クリア',
  tool_make_srt_subtitles_from_an_audio_file_source_play: '元の音声を再生',
  tool_make_srt_subtitles_from_an_audio_file_advanced: '正直な制限',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny は同一オリジンの /vendor/whisper からこのタブで動きます。初回の SRTを作る で約 45 MB を一度ダウンロードし、以降はキャッシュを再利用します。時刻は Whisper セグメントに沿い、フレーム単位の強制アラインではありません。マイク口述は任意の Web Speech で、ブラウザベンダーの音声サービスを使う場合があります。動画への字幕焼き込みはしません。',
  tool_make_srt_subtitles_from_an_audio_file_progress: '字幕の進捗',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: '字幕の進捗',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: '完了しました。必要ならキューを編集し、ダウンロードを押してください。',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'SRT を作れませんでした',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint:
    '別のファイル・短いクリップ・またはサンプルを試してください。ファイルは端末内に留まります。',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: '{file} をダウンロード中 — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: '開始中…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'モデル',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'デコード',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: '書き起こし',
  tool_make_srt_subtitles_from_an_audio_file_write: 'SRT書き出し',
  tool_make_srt_subtitles_from_an_audio_file_done: '準備完了。必要なら SRT を編集し、ダウンロードを押してください。',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'SRT を作れませんでした。サンプル、より明瞭な話し声、または約 2 時間以内の短いクリップを試してください。',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '経過 {s} 秒',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'SRT プレビュー',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: '仮結果（マイク）',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} キュー · {chars} 文字',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty:
    'ローカルの音声ファイルを選ぶか、使える場合はマイクで口述を使ってください。',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'まだ SRT がありません。話し声ファイルをドロップして SRTを作る を押してください。サンプルは端末内 Whisper で短いクリップを処理します。ファイルはサーバーにアップロードしません。',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'メディア: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'このブラウザには Web Speech API がなく、マイクで口述は使えません。ローカルファイルの Whisper による SRTを作る は引き続き使えます。',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'Whisper がほとんど話し声テキストを返しませんでした。より明瞭な録音にするか、話し言葉の言語を指定してください。',
  tool_make_srt_subtitles_from_an_audio_file_status_mic:
    'マイクを聞いています…はっきり話し、停止を押してください。時刻はセッション経過時間を使います。',
  tool_make_srt_subtitles_from_an_audio_file_status_model:
    '端末内 Whisper モデルを読み込み中（初回は約 45 MB のダウンロードあり）…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'このタブで音声をデコード中…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Whisper で書き起こし中…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: '窓 {n}/{total} を書き起こし中…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: '停止しました。既にキューがあれば部分 SRT を残します。',
  tool_make_srt_subtitles_from_an_audio_file_status_write: '時間付き SRT キューを書き出し中…',
  tool_make_srt_subtitles_from_an_audio_file_err_file: 'ローカルの音声または動画を1つ選ぶか、サンプルを使ってください。',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    '未対応のメディア形式です。一般的な音声か、ブラウザがデコードできる音声トラック付き動画を使ってください。',
  tool_make_srt_subtitles_from_an_audio_file_err_limit: 'デコード後でおおよそ 120 MiB・約 2 時間までのメディアを使ってください。メモリの少ない端末ではさらに短いクリップが必要な場合があります。',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'ブラウザがこのファイルを音声としてデコードできませんでした。使える音声トラックのない動画や未対応コーデックはここで失敗します。',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported:
    'この経路に必要な Web Audio または音声 API がこのブラウザで使えません。',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'マイク権限が拒否されました。マイクで口述には許可が必要です。またはファイルに対して SRTを作る を使ってください。',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt:
    'Whisper が使える話し声テキストを出しませんでした。別のクリップか言語設定を試してください。',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'このサイトから端末内 Whisper モデルを読み込めませんでした。初回ダウンロードのためオンラインのまま再試行してください。',
  tool_make_srt_subtitles_from_an_audio_file_how_title: '音声ファイルから SRT 字幕を作る手順',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'ローカルの音声を選び、端末内 Whisper で時間付きキューを得て、プレビューを編集してから .srt をダウンロードします。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1:
    'ローカルの音声ファイルを選ぶ（またはサンプル）、自動検出か話し言葉の言語を選ぶ。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2:
    'SRTを作る を押す。進捗カードは モデル → デコード → 書き起こし → SRT書き出し の順で進みます。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3:
    '任意：ブラウザが Web Speech をサポートしていればマイクで口述し、話し終わったら停止。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4: '必要なら SRT プレビューを編集し、ダウンロードを押す。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title: '音声ファイルから SRT 字幕を作るを使う理由',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    '同一オリジン vendor 上の端末内 Whisper tiny—録音は ASR のために当サイトのサーバーへ上がりません。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    '初回コストを明示：約 45 MB のモデルは一度だけ。進捗は モデル / デコード / 書き起こし / SRT書き出し の四段。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'ダウンロード前に編集できる標準 .srt プレビュー—プレーン TXT だけでも、動画焼き込みでもありません。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    '近接ツールでプレーン書き起こしや波形動画もでき、統合編集ハブを強制しません。',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'SRT のルールと端末内 Whisper の制限',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    '同一オリジン資産上でブラウザ内 Whisper tiny を動かします。時刻はモデルのセグメント由来。サイズと長さの上限でタブを応答可能に保ちます。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    '主経路は Web Audio デコードと /vendor/whisper 下の端末内 Whisper が必要です。マイク口述は Web Speech が必要で任意です。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'おおよそ 120 MiB、デコード後約 2 時間、スライディング窓で処理。それより長い・大きいと上限エラー。低メモリ端末では短いクリップを。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'タイムスタンプは Whisper セグメントの開始・終了—プレイヤー用途には十分で、フレーム単位の強制アラインではありません。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Whisper のファイル経路ではファイルは端末内に留まり、サーバーにアップロードしません。任意のマイク口述はブラウザベンダーの音声サービスを使うことがあります—ブラウザのプライバシー設定を確認してください。',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'サンプルの話し声クリップを試す',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'サンプルは短い話し声 WAV を取得し、端末内 Whisper で SRTを作る を実行してプレビューを埋めます。開いた直後に自動実行しないのは、訪問者全員に約 45 MB の初回モデルダウンロードをかけないためです。',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'こんなときに',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    '手元のボイスメモやインタビューの WAV/MP3 から、プレイヤーや編集ソフト用の .srt が欲しいとき。',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    '短い動画に音声トラックがあり、クラウド ASR サイトへ上げずに時間付き字幕が欲しいとき。',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    '公開前に直すための下書き SRT を端末内 Whisper で作りたい、またはファイルがないときマイクで口述に切り替えたいとき。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: '端末内 Whisper ですか、クラウドへのアップロードですか？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'SRTを作る は同一オリジン vendor 上の端末内 Whisper tiny です。音声・動画ファイルは端末内に留まり、認識のために当サイトのサーバーへは上がりません。任意のマイクで口述はブラウザの Web Speech API を使い、ベンダーの音声サービスを経由する場合があります。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: '初回の SRTを作る が遅い・大きいのはなぜ？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    '初回は本サイトから約 45 MB の Whisper tiny モデルと WASM をブラウザキャッシュへ取り込みます。以降はそのキャッシュを再利用します。進捗はモデル手順に表示されます。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'SRT のタイムスタンプはどのくらい正確？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'Whisper セグメントの開始・終了に従います。多くのプレイヤーや編集には足りますが、デスクトップ制作パイプラインのようなフレーム単位の強制アラインではありません。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: '音声はサーバーにアップロードされますか？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'Whisper のファイル経路ではいいえ：デコードと書き起こしはこのタブ内で行われ、ファイルは端末内に留まりサーバーには上がりません。初回に同一オリジンのモデル用スクリプトを取るときだけオンラインが必要です。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: '「音声ファイルをテキストに書き起こす」との違いは？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    '関連ツールはプレーンな書き起こしテキスト向けです。こちらは .srt を期待するプレイヤーや編集ソフト向けに、開始・終了付きの番号付き SRT キューを整形します。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: '動画ファイルに字幕を焼き込めますか？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'いいえ。ダウンロードするのは .srt サイドカーだけです。音声から波形風動画を作る関連ツールもありますが、焼き込み字幕ではありません。',
};
export default ja;
