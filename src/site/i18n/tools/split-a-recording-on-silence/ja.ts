/**
 * i18n tool shard (split-a-recording-on-silence / ja).
 * Job: split a recording on silence into a ZIP of clips (録音を無音で分割).
 */
import type { SiteLangDict } from '../../../types';

/** Japanese copy: 録音を無音で分割し、クリップ入り ZIP を書き出す。 */
const ja: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: '詳細設定（任意）',
  tool_split_a_recording_on_silence_article:
    'このタブで録音を無音で分割できます。端末のファイルを開き、「無音で分割」のあと「ZIPをダウンロード」。十分な長さの無音は中点で切れ、各クリップは別ファイルのままです。音声は端末内に留まり、サーバーにはアップロードしません。',
  tool_split_a_recording_on_silence_bitrate: 'MP3 ビットレート',
  tool_split_a_recording_on_silence_bitrate_hint: '初期値 128 kbps。ZIP 形式が MP3 のときだけ使います。',
  tool_split_a_recording_on_silence_choose_file: '音声ファイルを選ぶ',
  tool_split_a_recording_on_silence_clear: 'クリア',
  tool_split_a_recording_on_silence_clip_download: 'このクリップを保存',
  tool_split_a_recording_on_silence_clip_play: 'クリップを再生',
  tool_split_a_recording_on_silence_clip_row_tpl: 'クリップ {n} · {dur}秒（{start}s–{end}s）',
  tool_split_a_recording_on_silence_clips_title: 'ZIP に入れるクリップ',
  tool_split_a_recording_on_silence_desc:
    '長い無音で録音を切り、クリップ入り ZIP を端末内で書き出す。サーバーにアップロードしない。',
  tool_split_a_recording_on_silence_description:
    '録音を無音で分割する作業は端末内で完結します。長い無音を切れ目にしてクリップを ZIP にまとめ、ファイルはサーバーにアップロードしません。無音で音声を分割、無音検出でカット、無音でファイルを分ける、ZIPで書き出す、といった検索も同じ「複数ファイル」の仕事です。手順: 録音を開き、無音で分割（初期値 −40 dB / 1.0 s / 最短クリップ 0.3 s）を押し、ZIPをダウンロード。例: 5.00 秒のサンプルに 1.20 秒の無音が 2 か所あると、クリップは 1.40 / 2.00 / 1.60 秒の 3 本になります。無音を削除して 1 本に縫う作業、等間隔分割、動画のミュートではありません。',
  tool_split_a_recording_on_silence_download_zip: 'ZIPをダウンロード',
  tool_split_a_recording_on_silence_drop_hint: 'または WAV / MP3 / M4A / OGG をここにドロップ。処理はこのタブ内です。',
  tool_split_a_recording_on_silence_empty: '先に音声ファイルを選んでください。',
  tool_split_a_recording_on_silence_err_caps:
    'この端末の上限を超えています（デスクトップはおよそ 40 MB / 20 分、狭い画面は 20 MB / 8 分）。先に短くするか、短いファイルを使ってください。',
  tool_split_a_recording_on_silence_err_decode:
    'このブラウザではそのファイルを復号できませんでした。WAV か MP3、DRM のないクリップを試してください。',
  tool_split_a_recording_on_silence_err_empty: '処理するものがありません。ファイルかサンプルを先に読み込んでください。',
  tool_split_a_recording_on_silence_err_lame: 'MP3 エンコーダを読み込めませんでした。このタブのまま ZIPをダウンロードを再実行してください。',
  tool_split_a_recording_on_silence_err_no_clips:
    '残せる長さのクリップがありません。最短クリップを下げるか、最短無音を上げて、短い息継ぎが切れ目にならないようにしてください。',
  tool_split_a_recording_on_silence_err_too_many:
    'クリップが 50 本を超えています。最短無音を上げるか、しきい値をより負にして近い無音をまとめ、もう一度「無音で分割」してください。途中で切らずに拒否します。',
  tool_split_a_recording_on_silence_err_video:
    '動画は主入力として受け付けません。音声ファイルを無音で切るページであり、映像のミュートやジャンプカットではありません。',
  tool_split_a_recording_on_silence_err_zip: 'ZIP 用の処理を読み込めませんでした。このタブのまま ZIPをダウンロードを再実行してください。',
  tool_split_a_recording_on_silence_example:
    '「サンプルを読み込む」は 5.00 秒のトーンに 1.20 秒の無音を 2 か所入れます（0.80 + 1.20 + 0.80 + 1.20 + 1.00）。−40 dB / 1.0 s / 最短クリップ 0.3 s で無音で分割すると 1.40 秒と 3.40 秒で切れ、3 本は 1.40 / 2.00 / 1.60 秒です。ZIPをダウンロードは sample-01.wav 形式の WAV を書き出します（詳細設定で MP3 を選んだ場合を除く）。',
  tool_split_a_recording_on_silence_example_title: '動作例',
  tool_split_a_recording_on_silence_faq_a1:
    'しません。復号・検出・分割・ZIP 化はすべてこのタブ内です。スクリプトはこのサイトから読みます。ファイルは当方のサーバーへ送りません。',
  tool_split_a_recording_on_silence_faq_a2:
    '別ツールではありません。無音で音声を分割、無音検出でカット、ZIPで書き出す、といった検索は、長い無音で切って複数ファイルを ZIP に入れるこの作業です。',
  tool_split_a_recording_on_silence_faq_a3:
    '違います。録音から無音を削除する側は、空白を詰めて 1 本の短いファイルにします。こちらは無音を切れ目にして多数のクリップを出します。ZIP が不要なら 1 ファイル側を使ってください。無音を削除は本ページの仕事ではありません。',
  tool_split_a_recording_on_silence_faq_a4:
    '等間隔（N 秒ごと）の分割は別作業です。キューシートによるアルバム分割も対象外です。十分な長さの静かな隙間があるところだけ切ります。',
  tool_split_a_recording_on_silence_faq_a5:
    'まずは話し声（−40 dB / 1.0 s / 最短クリップ 0.3 s）。講義は講義（−40 dB / 2.0 s）。アルバムの曲間はアルバム（−45 dB / 1.5 s / 最短クリップ 1.0 s）。息継ぎがクリップになるなら最短無音を上げてください。',
  tool_split_a_recording_on_silence_faq_a6:
    'ZIP 内は {stem}-01.wav（または .mp3）。一覧から 1 本だけ保存もできます。上限は 50 本で、超えると分割を拒否します。',
  tool_split_a_recording_on_silence_faq_a7:
    'できません。ノイズ除去、えー・あのの削除、動画ミュート、cue/APE、YouTube 取り込みは対象外です。権利のある音声ファイルを使ってください。',
  tool_split_a_recording_on_silence_faq_a8:
    'デスクトップはおよそ 40 MB または 20 分。狭い画面はおよそ 20 MB または 8 分。上限超えは復号前に拒否します。ダイナミックレンジの広い音楽は無音に見えることがあるので、最短隙間を上げるか別の手段を使ってください。',
  tool_split_a_recording_on_silence_faq_q1: '録音はサーバーにアップロードされますか？',
  tool_split_a_recording_on_silence_faq_q2: '「無音で音声を分割」「ZIPで書き出す」で探したのですが、別の機能ですか？',
  tool_split_a_recording_on_silence_faq_q3: '空白を詰めた 1 本の短いファイルが欲しいです。ここは無音削除ですか？',
  tool_split_a_recording_on_silence_faq_q4: '等間隔やキューシートでも切れますか？',
  tool_split_a_recording_on_silence_faq_q5: 'しきい値はどれを使えばよいですか？息継ぎでも切れますか？',
  tool_split_a_recording_on_silence_faq_q6: 'ファイル名はどうなり、何本まで切れますか？',
  tool_split_a_recording_on_silence_faq_q7: 'ノイズ除去、動画分割、cue、YouTube 取り込みはできますか？',
  tool_split_a_recording_on_silence_faq_q8: '扱える大きさは？静かな音楽でも使えますか？',
  tool_split_a_recording_on_silence_format: 'ZIP 内の形式',
  tool_split_a_recording_on_silence_format_hint: 'WAV はロスレス PCM。MP3 エンコーダは ZIPをダウンロードを押したときだけ読み込みます。',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    '十分な長さの静かな隙間を見つけ、各隙間の中点で切り、クリップ入り ZIP をダウンロードします。端末内で処理し、サーバーには送りません。',
  tool_split_a_recording_on_silence_how_item_1: '録音を開く（または「サンプルを読み込む」）。',
  tool_split_a_recording_on_silence_how_item_2: '初期値のままでよければそのままで、変えるなら「詳細設定（任意）」でしきい値と最短無音を調整。',
  tool_split_a_recording_on_silence_how_item_3: '「無音で分割」を押す。',
  tool_split_a_recording_on_silence_how_item_4: '「ZIPをダウンロード」を押す。',
  tool_split_a_recording_on_silence_how_title: '使い方',
  tool_split_a_recording_on_silence_hud_decode: 'このタブでファイルを復号しています…',
  tool_split_a_recording_on_silence_hud_decoded: '復号済み。赤い印が隙間です。設定がよければ「無音で分割」を押してください。',
  tool_split_a_recording_on_silence_hud_detect: '静かな区間を測っています…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}秒経過',
  tool_split_a_recording_on_silence_hud_encode: 'MP3 クリップをエンコード中…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'ファイルか設定を直して、もう一度「無音で分割」。',
  tool_split_a_recording_on_silence_hud_fail_title: '無音で分割を中断しました',
  tool_split_a_recording_on_silence_hud_next: '完了。次は ZIPをダウンロード。',
  tool_split_a_recording_on_silence_hud_next_zip: '完了。ZIP のダウンロードが始まるはずです。',
  tool_split_a_recording_on_silence_hud_pack: 'クリップを ZIP にまとめています…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: '無音の中点で切断しています…',
  tool_split_a_recording_on_silence_hud_step_decode: '復号',
  tool_split_a_recording_on_silence_hud_step_detect: '検出',
  tool_split_a_recording_on_silence_hud_step_pack: '梱包',
  tool_split_a_recording_on_silence_hud_step_split: '分割',
  tool_split_a_recording_on_silence_hud_title: '無音で分割の進捗',
  tool_split_a_recording_on_silence_hud_working: '開始しています…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: '最短クリップ（秒）',
  tool_split_a_recording_on_silence_min_clip_hint: '初期値 0.3 s。切ったあとにこれより短い断片は捨てます。',
  tool_split_a_recording_on_silence_min_silence: '最短無音（秒）',
  tool_split_a_recording_on_silence_min_silence_hint: '初期値 1.0 s。短い息継ぎを切れ目にしないためです。',
  tool_split_a_recording_on_silence_pause: '一時停止',
  tool_split_a_recording_on_silence_play: '再生',
  tool_split_a_recording_on_silence_preset_album: 'アルバム',
  tool_split_a_recording_on_silence_preset_hint: '初期は話し声。講義は章の長い間を待ちます。アルバムは曲間の隙間を想定します。',
  tool_split_a_recording_on_silence_preset_lecture: '講義',
  tool_split_a_recording_on_silence_preset_speech: '話し声',
  tool_split_a_recording_on_silence_preview_hint: '赤い帯は分割できる長さの無音です。再生は現在のファイルのプレビューです。',
  tool_split_a_recording_on_silence_result_one:
    '{orig}秒 · 分割できる長さの間が無いので、ZIP にはこの 1 本だけ入ります。最短無音を下げるか、しきい値を 0 に近づけてください。ZIPをダウンロードの準備はできています。',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}秒 · 隙間 {gaps} → クリップ {count} 本: {list}。ZIPをダウンロードの準備ができました。',
  tool_split_a_recording_on_silence_rules_body:
    'およそ 50 ms ごとに RMS を測り dB にします: levelDb = 20 × log10(rms)。しきい値未満が最短無音以上続く区間は、その中点で切れます。最短クリップより短いものは捨てます。WAV は 16-bit PCM。MP3 は選んだビットレートの CBR。ZIP はこのタブ内で組み立てます。',
  tool_split_a_recording_on_silence_rules_item_1:
    '話し声の初期値: −40 dB、最短無音 1.0 s、最短クリップ 0.3 s。講義: −40 dB / 2.0 s / 0.5 s。アルバムの曲間: −45 dB / 1.5 s / 1.0 s。',
  tool_split_a_recording_on_silence_rules_item_2:
    'デスクトップ上限はおよそ 40 MB または 20 分、狭い画面はおよそ 20 MB または 8 分。超えたファイルは切り詰めず拒否。50 本超も拒否。',
  tool_split_a_recording_on_silence_rules_item_3:
    'ファイルは端末内に留まり、サーバーにはアップロードしません。JSZip と MP3 エンコーダはこのサイトから、ZIPをダウンロードのあとだけ読み込みます。',
  tool_split_a_recording_on_silence_rules_item_4:
    '復号はブラウザ次第です。DRM、一部コーデック、動画コンテナは明示エラーになります。',
  tool_split_a_recording_on_silence_rules_item_5:
    '多数のファイルを ZIP に出します。1 本に縫う、固定秒数で切る、cue に従う、ノイズ除去、動画ミュート、YouTube 取得はしません。',
  tool_split_a_recording_on_silence_rules_title: '守っているルール',
  tool_split_a_recording_on_silence_sample: 'サンプルを読み込む',
  tool_split_a_recording_on_silence_split: '無音で分割',
  tool_split_a_recording_on_silence_status_done: '完了。',
  tool_split_a_recording_on_silence_threshold: '無音しきい値（dB）',
  tool_split_a_recording_on_silence_threshold_hint: '初期値 −40 dB。0 に近いほど、より多くの区間を無音と見なします。',
  tool_split_a_recording_on_silence_title: '録音を無音で分割',
  tool_split_a_recording_on_silence_usecase_1:
    '講義の章の間でファイルを分け、等間隔チョップではなく ZIP に章ごとの音声を入れる。',
  tool_split_a_recording_on_silence_usecase_2:
    'インタビューの答えごとにクリップを分け、あとからラベルを付ける。',
  tool_split_a_recording_on_silence_usecase_3:
    '曲間に隙間があるミックスで cue が無いとき、無音でファイルを分ける。',
  tool_split_a_recording_on_silence_usecases_title: '向いている場面',
  tool_split_a_recording_on_silence_why_choose_body:
    '無音の中点で切ったクリップを ZIP にまとめるためのページです。話し声 / 講義 / アルバムの初期値は画面上で確認できます。',
  tool_split_a_recording_on_silence_why_choose_item_1:
    '長い静かな隙間の中点で切り、多数のファイルを ZIP に入れます。1 本の短いファイルに縫いません。',
  tool_split_a_recording_on_silence_why_choose_item_2:
    '話し声（−40 dB / 1.0 s / 最短クリップ 0.3 s）は息継ぎを細切れにしにくいです。講義とアルバムも画面に名前があります。',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'ファイルはこのブラウザタブ内に留まり、サーバーにアップロードしません。JSZip と lamejs は ZIPをダウンロードを押したときだけ読み込みます。',
  tool_split_a_recording_on_silence_why_choose_item_4:
    '大きすぎるファイルと 50 本超は、途中までの ZIP を出す前に拒否します。1 GB を約束してタブを落とすことはしません。',
  tool_split_a_recording_on_silence_why_choose_title: '録音を無音で分割をここで使う理由',
};
export default ja;
