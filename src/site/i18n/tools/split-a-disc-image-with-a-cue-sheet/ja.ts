/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / ja).
 * H1 は作業文；cue分割 / flac cue 分割は desc と FAQ へ。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語の検索向け文案：キューシートでディスクイメージをトラックに分割して ZIP にする。 */
const ja: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: '詳細設定（任意）',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'このタブでキューシートを使ってディスクイメージを分割します。イメージと .cue を開き、「トラックに分割」のあと「ZIPをダウンロード」。切れ目は INDEX 01（1秒あたり75フレーム）です。ファイルは端末に残り、サーバーへは上がりません。',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'MP3 ビットレート',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: '初期値 128 kbps。ZIP 形式が MP3 のときだけ使います。',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'ディスクイメージと .cue を選ぶ',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'クリア',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'このトラックを保存',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'このトラックを再生',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'キューシート',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    '端末上で cue の INDEX 01 に合わせてイメージを切り、曲名付き ZIP を受け取る。サーバーには上げません。',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'キューシートでディスクイメージを分割：端末上で INDEX 01 で切り、曲名付き ZIP を受け取ります。ファイルはサーバーに上がりません。手順：イメージと .cue を開く（シートを貼っても可）→「トラックに分割」→「ZIPをダウンロード」。例：6.00秒のサンプルで INDEX 01 が 0 / 2 / 4 秒なら Intro / Middle / Outro の 2.00 / 2.00 / 2.00 秒。cue分割、flac cue 分割、wav cue 分割、ape cue 分割は同じ作業です。無音分割でも等時間分割でも、YouTube チャプターでもありません。',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'ZIPをダウンロード',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'WAV・FLAC・MP3・BIN と .cue をまとめてドロップ。処理はこのタブ内です。',
  tool_split_a_disc_image_with_a_cue_sheet_empty: '先にディスクイメージとキューシートを追加してください。',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: '対応するイメージ（WAV / FLAC / MP3 / BIN）を追加してください。',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: '.cue ファイルを追加するか、シートを貼り付けてください。',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'このブラウザは APE を復号できません。イメージを WAV か FLAC に変換し、同じ cue を残してから「トラックに分割」してください。',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'この端末の上限を超えています（デスクトップ約 80 MB / 30 分、狭い画面は約 30 MB / 10 分）。700 MB の CD .bin はこのタブに入りません。',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'そのテキストは使えるキューシートではありません。TRACK 行と MM:SS:FF の INDEX 01 が必要です。',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'この cue はデータディスク（MODE トラック）です。AUDIO トラックだけを分割します。',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'このブラウザではそのイメージを復号できません。WAV か FLAC、DRM のないファイルを試してください。APE は扱いません。',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: '処理するものがありません。ファイルかサンプルを読み込んでください。',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'MP3 エンコーダの読み込みに失敗しました。このタブのまま「ZIPをダウンロード」を再試行してください。',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'この cue は FILE が複数あります。すでに1トラック1ファイルなので、ここで割る対象はありません。',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'INDEX 01 が見つかりません。cue分割には MM:SS:FF の開始時刻が必要です。',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    '50 トラックを超えています。切り詰めずに拒否します。短いシートにするか、デスクトップの shnsplit を使ってください。',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    '動画を主入力にはできません。キューシート付きの音声イメージを分割するページです。',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'ZIP ライブラリの読み込みに失敗しました。このタブのまま「ZIPをダウンロード」を再試行してください。',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'サンプルを読み込むと 6.00 秒のイメージ（440 / 550 / 660 Hz を各2秒）と、INDEX 01 が 00:00:00・00:02:00・00:04:00 の cue（Intro Tone / Middle Tone / Outro Tone）が入ります。「トラックに分割」で各 2.00 秒の3ファイルになります。「ZIPをダウンロード」は 01 Intro Tone.wav を書き出します（詳細設定で MP3 にした場合を除く）。',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: '例',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'いいえ。解析・復号・分割・ZIP 化はこのタブで行います。スクリプトはこのサイトから読みます。イメージも cue もサーバーへは送りません。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    '同じ作業です。cue分割、flac cue 分割、wav cue 分割、ape cue 分割は INDEX 01 に従い、曲名付き ZIP を受け取るツールです。APE という検索も同じ意図ですが、.ape は復号できないので WAV か FLAC に直して cue を残してください。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 がトラック開始（MM:SS:FF、75フレーム/秒）です。INDEX 00 はプリギャップ表示用で、既定の切れ目は 01 です。最後のトラックはイメージ末尾まで続きます。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'いいえ。無音で分割するページも、秒数で等分割するページも別です。ここはキューシートだけです。FILE/INDEX のない YouTube チャプターは対象外です。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    '.cue ファイルが無いときは、ドロップ欄の下に全文を貼れます。.cue を落とすのと同じ解析です。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'ZIP 内の名前は「{nn} {title}.wav」（または .mp3）です。一覧から1曲だけ保存もできます。上限は 50 トラックで、超えると拒否します。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'できません。ノイズ除去、動画の無音化、等時間分割、手切り、YouTube 吸い出し、ISO データディスクは対象外です。権利のある音声イメージを使ってください。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'デスクトップは約 80 MB または 30 分。狭い画面は約 30 MB または 10 分。700 MB の CD .bin は拒否します。上限超えは復号前に止まります。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'ディスクイメージとキューシートはアップロードされますか？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2: 'cue分割や flac cue 分割で検索しました。別ツールですか？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'INDEX 01 と INDEX 00 の違いは？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: '無音・秒数・YouTube チャプターでも切れますか？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: '.cue の代わりにシートを貼れますか？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'ファイル名とトラック数の上限は？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: 'APE 復号、動画分割、等分割、YouTube 吸い出しはできますか？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'どのくらい大きいイメージまで扱えますか？',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'ZIP 内の形式',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV はロスレス PCM です。MP3 エンコーダは「ZIPをダウンロード」のときだけ読み込みます。',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'キューシートの INDEX 01 を読み、対応するディスクイメージをそこで切り、曲名付き ZIP をダウンロードします。アップロードはありません。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'ディスクイメージと .cue を開く（または「サンプルを読み込む」）。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'テキストしか無いときはキューシートを貼る。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: '「トラックに分割」を押す。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: '「ZIPをダウンロード」を押す。',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: '使い方',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'このタブでイメージを復号しています…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'cue を解析し、イメージを復号しました。白い印が INDEX 01 です。リストが正しければ「トラックに分割」してください。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '{s}秒経過',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'MP3 トラックをエンコードしています…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'cue かイメージを直して、もう一度「トラックに分割」してください。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'cue 分割を停止しました',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: '完了。次は ZIPをダウンロード です。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: '完了。ZIP のダウンロードが始まるはずです。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'トラックを ZIP にまとめています…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'キューシートを読んでいます…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'INDEX 01 で切っています…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: '復号',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: '梱包',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: '解析',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: '分割',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'cue 分割の進捗',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: '開始…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'ディスクイメージ',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} ch · INDEX 01 が {tracks} 箇所',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'FILE / TRACK / INDEX 01 のあるキューシート全文を貼ってください。YouTube のチャプター一覧ではありません。',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'またはキューシートを貼る',
  tool_split_a_disc_image_with_a_cue_sheet_pause: '一時停止',
  tool_split_a_disc_image_with_a_cue_sheet_play: '再生',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: '白い印が INDEX 01 の開始位置です。再生するとイメージ全体が聴けます。',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}秒 · {count} トラック：{list}。ZIPをダウンロードできます。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'INDEX 01 は mm:ss:ff（75フレーム/秒）で、t = mm×60 + ss + ff/75 です。トラック n はその時刻から次の INDEX 01 まで、最後は末尾まで。WAV/BIN の 16bit PCM はバイト位置で切り、他形式はブラウザのデコーダを使います。ZIP はこのタブで作ります。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    '切れ目は INDEX 01 です。INDEX 00 はプリギャップ表示で、既定の切れ目ではありません。時刻は CD フレームでありミリ秒ではありません。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'デスクトップは約 80 MB または 30 分、狭い画面は約 30 MB または 10 分。超過は切り詰めず拒否。50 トラック超も拒否。700 MB の CD .bin は入りません。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'ファイルは端末に残り、サーバーへは上がりません。JSZip と MP3 エンコーダは「ZIPをダウンロード」のあと、このサイトからだけ読みます。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE と BINARY（.bin、2352バイトの CDDA セクタ）はコーデック無しで切れます。MP3/FLAC/M4A はブラウザ復号が必要です。APE/TTA/WavPack は明示エラーになります。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    '扱うのは FILE が1つで INDEX 01 があるシートです。無音・等時間・YouTube チャプター・容量・動画ミュート・YouTube 吸い出しはしません。FILE が複数の cue はすでに分割済みです。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: '想定している規則',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'サンプルを読み込む',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'トラックに分割',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: '完了。',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'キューシートでディスクイメージを分割',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}秒（{start}s–{end}s）',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'ZIP に入れるトラック',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'Exact Audio Copy や XLD の FLAC+CUE リップを、shnsplit を入れずに曲名付きトラックへ分ける。',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'アナログレコード片面や CD の WAV/BIN イメージを cue 付きで切り、ZIP で持ち帰る。',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'キューシート付きの DJ セットから、無音を推測せず INDEX 01 で曲を取り出す。',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: '向いている場面',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'INDEX 01 でのアルバム分割と曲名 ZIP 用で、APE や巨大な .bin についてはできないことを先に書きます。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'cue の INDEX 01（75フレーム/秒）で切り、ZIP 名は TITLE です。等秒カットでも無音カットでもありません。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'イメージと .cue は同じドロップ欄。同じシートの貼り付けも可。YouTube チャプター編集を cue 分割と称しません。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'ファイルはこのブラウザタブに留まり、アップロードしません。JSZip と lamejs は「ZIPをダウンロード」のときだけ読みます。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE 復号、複数 FILE の cue、過大なイメージは平文で拒否します。700 MB を請け負ってタブを落とす約束はしません。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title: 'キューシートでディスクイメージを分割を使う理由',
};
export default ja;
