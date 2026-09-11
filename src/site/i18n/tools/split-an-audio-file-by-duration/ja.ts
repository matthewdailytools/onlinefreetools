/**
 * i18n tool shard (split-an-audio-file-by-duration / ja).
 * H1 は作業文；秒数で分割 / 等分割を desc と FAQ に。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語の検索向け文案：音声ファイルを秒数で分割して ZIP にする。 */
const ja: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: '詳細設定（任意）',
  tool_split_an_audio_file_by_duration_article:
    'このタブで音声ファイルを秒数で分割します。ファイルを開き、秒数を入れて「秒数で分割」、続けて「ZIPをダウンロード」。各クリップは N 秒で、最後だけ余りを残します。ファイルは端末内に留まり、サーバーにはアップロードしません。',
  tool_split_an_audio_file_by_duration_bitrate: 'MP3 ビットレート',
  tool_split_an_audio_file_by_duration_bitrate_hint: '初期値 128 kbps。ZIP 形式が MP3 のときだけ使います。',
  tool_split_an_audio_file_by_duration_chip_180: '3分',
  tool_split_an_audio_file_by_duration_chip_30: '30秒',
  tool_split_an_audio_file_by_duration_chip_300: '5分',
  tool_split_an_audio_file_by_duration_chip_60: '60秒',
  tool_split_an_audio_file_by_duration_choose_file: '音声ファイルを選ぶ',
  tool_split_an_audio_file_by_duration_chunk: '1本あたりの長さ（秒）',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '初期値 2 秒はサンプル用です。講義なら 60 秒や 3 分を押してください。最後のクリップは余った時間を残します。',
  tool_split_an_audio_file_by_duration_clear: 'クリア',
  tool_split_an_audio_file_by_duration_clip_download: 'このクリップを保存',
  tool_split_an_audio_file_by_duration_clip_play: 'このクリップを再生',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'クリップ {n} · {dur}秒（{start}s–{end}s）',
  tool_split_an_audio_file_by_duration_clips_title: 'ZIP に入れるクリップ',
  tool_split_an_audio_file_by_duration_desc:
    '端末内で長さで分割し、等長クリップの ZIP を保存。サーバーにはアップロードしません。',
  tool_split_an_audio_file_by_duration_description:
    '音声ファイルを秒数で分割：端末上で等長に切り、余りは最後のクリップへ。ZIP でまとめて保存し、サーバーにはアップロードしません。手順：ファイルを開く、秒数を入れる（サンプルは 2 秒。チップは 30 / 60 / 180 / 300 秒）、秒数で分割、ZIPをダウンロード。例：5.00 秒を 2 秒で切ると 2.00 / 2.00 / 1.00 秒の 3 本。長さで分割、等分割、60秒ごとに切る検索も同じ作業です。無音で分割でも cue でも、手切りや動画ミュートでもありません。',
  tool_split_an_audio_file_by_duration_download_zip: 'ZIPをダウンロード',
  tool_split_an_audio_file_by_duration_drop_hint: 'WAV、MP3、M4A、OGG をここにドロップしても構いません。処理はこのタブ内です。',
  tool_split_an_audio_file_by_duration_empty: '先に音声ファイルを選んでください。',
  tool_split_an_audio_file_by_duration_equal_parts: 'または N 等分する',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    '空なら上の秒数を使います。2–50 を入れると、この分割の 1 本あたりは総長 ÷ N になります。',
  tool_split_an_audio_file_by_duration_err_caps:
    'この端末の上限を超えています（デスクトップ約 40 MB / 20 分、狭い画面は約 20 MB / 8 分）。先に短くするか、短いファイルを使ってください。',
  tool_split_an_audio_file_by_duration_err_chunk:
    '1本あたりは 0.5〜1200 秒にしてください。50 本の上限に当たったら秒数を上げてください。',
  tool_split_an_audio_file_by_duration_err_decode:
    'このブラウザではそのファイルを復号できません。WAV か MP3、または DRM のない素材を試してください。',
  tool_split_an_audio_file_by_duration_err_empty: '処理するものがありません。ファイルかサンプルを先に読み込んでください。',
  tool_split_an_audio_file_by_duration_err_lame: 'MP3 エンコーダの読み込みに失敗しました。このタブのまま ZIPをダウンロードをもう一度。',
  tool_split_an_audio_file_by_duration_err_too_many:
    '50 本を超えています。秒数を大きくしてください（60 秒や 3 分）。途中で切らずに拒否します。',
  tool_split_an_audio_file_by_duration_err_video:
    'このページは動画を主入力にしません。音声を秒数で分割するだけで、映像の音声を消す作業ではありません。',
  tool_split_an_audio_file_by_duration_err_zip: 'ZIP ライブラリの読み込みに失敗しました。このタブのまま ZIPをダウンロードをもう一度。',
  tool_split_an_audio_file_by_duration_example:
    'サンプルを読み込むと 5.00 秒の 440 Hz トーンができます。秒数で分割（2.00 秒）すると 2.00 秒と 4.00 秒で切れ、2.00 / 2.00 / 1.00 秒の 3 本になります（最後が余り）。ZIPをダウンロードは sample-01.wav を書き出します。MP3 にしたいときは詳細設定で選んでください。',
  tool_split_an_audio_file_by_duration_example_title: '例',
  tool_split_an_audio_file_by_duration_faq_a1:
    'いいえ。復号、分割、ZIP 作成はこのタブ内です。スクリプトはこのサイトから読みます。ファイルをサーバーへ送りません。',
  tool_split_an_audio_file_by_duration_faq_a2:
    '同じ作業です。秒数で分割、長さで分割、等分割、60秒ごとに切る、ZIPで書き出す検索は、このページで N 秒ごとに切って ZIP で持ち帰る話です。N 等分は詳細設定にあります。',
  tool_split_an_audio_file_by_duration_faq_a3:
    '最後のクリップが余りを持ちます。5.00 秒を 2 秒で切ると 2.00 / 2.00 / 1.00 秒になり、無音で埋めません。',
  tool_split_an_audio_file_by_duration_faq_a4:
    'いいえ。録音を無音で分割は長い無音で切ります。こちらは時計だけです。cue やファイルサイズ分割も対象外です。',
  tool_split_an_audio_file_by_duration_faq_a5:
    'サンプルは 2 秒のまま。短尺なら 30 秒か 60 秒、講義の通勤用なら 3 分か 5 分。4 本に等分したいときは詳細設定に 4 を入れてください。',
  tool_split_an_audio_file_by_duration_faq_a6:
    'ZIP 内は {stem}-01.wav（または .mp3）です。一覧から 1 本だけ保存もできます。上限 50 本。超えたら拒否します。',
  tool_split_an_audio_file_by_duration_faq_a7:
    'できません。ノイズ除去、動画ミュート、cue/APE、手切り、YouTube の取り込みは範囲外です。権利のある音声ファイルを使ってください。',
  tool_split_an_audio_file_by_duration_faq_a8:
    'デスクトップは約 40 MB または 20 分。狭い画面は約 20 MB または 8 分。超えたファイルは復号前に拒否します。',
  tool_split_an_audio_file_by_duration_faq_q1: '音声はアップロードされますか？',
  tool_split_an_audio_file_by_duration_faq_q2: '秒数で分割・等分割・長さで分割を検索しました。別のツールですか？',
  tool_split_an_audio_file_by_duration_faq_q3: '割り切れないとき、最後のクリップはどうなりますか？',
  tool_split_an_audio_file_by_duration_faq_q4: '無音で分割したり、cue やサイズで切ったりしますか？',
  tool_split_an_audio_file_by_duration_faq_q5: '1本あたり何秒にすればよいですか？',
  tool_split_an_audio_file_by_duration_faq_q6: 'ファイル名と本数の上限は？',
  tool_split_an_audio_file_by_duration_faq_q7: 'ノイズ除去、動画分割、cue、YouTube 取り込みはできますか？',
  tool_split_an_audio_file_by_duration_faq_q8: 'どのくらい大きいファイルまで扱えますか？',
  tool_split_an_audio_file_by_duration_format: 'ZIP 内の形式',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV はロスレス PCM です。MP3 は ZIPをダウンロードを押したときだけエンコーダを読みます。',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    '時計どおり N 秒ごとに切り、余りは最後のクリップへ。ZIP を保存し、ファイルは端末から出さずサーバーにも上げません。',
  tool_split_an_audio_file_by_duration_how_item_1: '音声ファイルを開く（または「サンプルを読み込む」）。',
  tool_split_an_audio_file_by_duration_how_item_2: '2 秒のまま、またはチップ / 秒数入力で長さを決める。',
  tool_split_an_audio_file_by_duration_how_item_3: '「秒数で分割」をクリック。',
  tool_split_an_audio_file_by_duration_how_item_4: '「ZIPをダウンロード」をクリック。',
  tool_split_an_audio_file_by_duration_how_title: '使い方',
  tool_split_an_audio_file_by_duration_hud_decode: 'このタブでファイルを復号しています…',
  tool_split_an_audio_file_by_duration_hud_decoded: '復号できました。白い印は予定の切れ目です。長さがよければ秒数で分割してください。',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '{s}秒経過',
  tool_split_an_audio_file_by_duration_hud_encode: 'MP3 クリップをエンコードしています…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'ファイルか秒数を直して、もう一度「秒数で分割」してください。',
  tool_split_an_audio_file_by_duration_hud_fail_title: '秒数で分割を中断しました',
  tool_split_an_audio_file_by_duration_hud_next: '完了。次は ZIPをダウンロード。',
  tool_split_an_audio_file_by_duration_hud_next_zip: '完了。ZIP のダウンロードが始まるはずです。',
  tool_split_an_audio_file_by_duration_hud_pack: 'クリップを ZIP にまとめています…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: '等長クリップを切っています…',
  tool_split_an_audio_file_by_duration_hud_step_decode: '復号',
  tool_split_an_audio_file_by_duration_hud_step_pack: '梱包',
  tool_split_an_audio_file_by_duration_hud_step_split: '分割',
  tool_split_an_audio_file_by_duration_hud_title: '秒数で分割の進捗',
  tool_split_an_audio_file_by_duration_hud_working: '開始…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} ch',
  tool_split_an_audio_file_by_duration_pause: '一時停止',
  tool_split_an_audio_file_by_duration_play: '再生',
  tool_split_an_audio_file_by_duration_preview_hint: '白い印は N 秒ごとの切れ目です。再生で今のファイルを聴けます。',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}秒 · 1本の長さが全体以上なので、ZIP にはこの 1 ファイルだけ入ります。秒数を短くしてから、もう一度秒数で分割。ZIPをダウンロードは使えます。',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}秒 · {chunk}秒ごと → {count} 本：{list}。ZIPをダウンロードが使えます。',
  tool_split_an_audio_file_by_duration_rules_body:
    '切れ目は k × D 秒です。D が 1 本の長さ。最後は [floor(T / D) × D, T] で短くなり得ます。N 等分を指定した回は D = T / N。WAV は 16-bit PCM。MP3 は選んだビットレートの CBR。ZIP はこのタブで作ります。',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'サンプルの初期値は 2 秒。チップは同じ欄に 30 秒、60 秒、180 秒（3 分）、300 秒（5 分）を入れます。N 等分（2–50）は詳細設定の任意項目です。',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'デスクトップ上限は約 40 MB または 20 分。狭い画面は約 20 MB または 8 分。超えたら切り詰めず拒否。50 本超も拒否します。',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'ファイルは端末に留まり、サーバーにはアップロードしません。JSZip と MP3 エンコーダは ZIPをダウンロードのあと、このサイトから読みます。',
  tool_split_an_audio_file_by_duration_rules_item_4:
    '復号はブラウザ次第です。DRM、一部コーデック、動画コンテナははっきりしたエラーになります。',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'このページは時計で多ファイル ZIP を出します。無音分割、cue、メガバイト分割、ノイズ除去、動画ミュート、YouTube 取得はしません。',
  tool_split_an_audio_file_by_duration_rules_title: '想定しておきたい規則',
  tool_split_an_audio_file_by_duration_sample: 'サンプルを読み込む',
  tool_split_an_audio_file_by_duration_split: '秒数で分割',
  tool_split_an_audio_file_by_duration_status_done: '完了。',
  tool_split_an_audio_file_by_duration_title: '音声ファイルを秒数で分割',
  tool_split_an_audio_file_by_duration_usecase_1:
    '講義を 3 分の通勤用に長さで分割し、ZIP で持ち帰る。無音待ちは不要。',
  tool_split_an_audio_file_by_duration_usecase_2:
    '長い回から 60 秒の短尺用に等分割する。',
  tool_split_an_audio_file_by_duration_usecase_3:
    '長めのボイスメモをチャットの時間上限に収まる本数へ切り、余りは最後のクリップへ。',
  tool_split_an_audio_file_by_duration_usecases_title: 'こんなときに',
  tool_split_an_audio_file_by_duration_why_choose_body:
    '時計どおりの ZIP 向け。30 秒 / 60 秒 / 3 分 / 5 分のチップと、短い最後のクリップをページ上で確認できます。',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'N 秒ごとに切って多ファイル ZIP にします。最後のクリップは余りを残し、無音で埋めません。',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    '30 秒 / 60 秒 / 3 分 / 5 分のチップと、任意の N 等分。無音検出で等分したように見せるページではありません。',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'ファイルはこのブラウザタブに留まり、サーバーにはアップロードしません。JSZip と lamejs は ZIPをダウンロードを押したときだけ読みます。',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    '大きすぎるファイルと 50 本超は、欠けた ZIP を出す前に拒否します。1 GB まで大丈夫という約束はしません。',
  tool_split_an_audio_file_by_duration_why_choose_title: '音声ファイルを秒数で分割を使う理由',
};
export default ja;
