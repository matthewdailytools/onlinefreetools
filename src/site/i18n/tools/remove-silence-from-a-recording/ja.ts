/**
 * i18n tool shard (remove-silence-from-a-recording / ja).
 * H1: 録音から無音を削除（無音トリマーは頭尾寄り、FAQ で中も切ると明示）。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：無音部分削除 / 無音カット。ページ名は使わない。 */
const ja: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: '詳細設定（任意）',
  tool_remove_silence_from_a_recording_article:
    'このタブで録音から無音を削除します。ファイルを開き、「無音を削除」のあと WAV または MP3 を書き出します。長い間は切り、発話は1本に繋ぎます。ファイルは端末内に留まり、サーバーにはアップロードしません。',
  tool_remove_silence_from_a_recording_bitrate: 'MP3 ビットレート',
  tool_remove_silence_from_a_recording_bitrate_hint: '初期値 128 kbps。「MP3を書き出す」を押したときだけ使います。',
  tool_remove_silence_from_a_recording_choose_file: '音声ファイルを選ぶ',
  tool_remove_silence_from_a_recording_clear: 'クリア',
  tool_remove_silence_from_a_recording_desc:
    '録音の無音を切って短い WAV または MP3 を書き出します。端末内で処理し、サーバーにアップロードしません。',
  tool_remove_silence_from_a_recording_description:
    '録音から無音を削除：長い間と空白を切って1本の短いファイルにし、WAV または MP3 を書き出します。サーバーにはアップロードしません。手順：録音を開く → 無音を削除（初期値 −40 dB / 0.5 秒 / 0.15 秒残す）→ WAV または MP3 を書き出す。例：1.20 秒の無音が2か所ある 5.00 秒のサンプルは約 2.90 秒になります。無音部分削除・無音カット・無音を消す検索も同じ作業です。無音で ZIP 分割したり、動画の音声を消したりはしません。',
  tool_remove_silence_from_a_recording_drop_hint: 'WAV・MP3・M4A・OGG をここにドロップしても構いません。処理はこのタブ内です。',
  tool_remove_silence_from_a_recording_empty: '先に音声ファイルを選んでください。',
  tool_remove_silence_from_a_recording_err_caps:
    'この端末の上限を超えています（デスクトップ約 40 MB / 20 分、狭い画面は約 20 MB / 8 分）。先に短くするか、短いファイルを使ってください。',
  tool_remove_silence_from_a_recording_err_decode:
    'このブラウザでは復号できませんでした。WAV か MP3、または DRM のない素材を試してください。',
  tool_remove_silence_from_a_recording_err_empty: '処理するものがありません。ファイルかサンプルを読み込んでください。',
  tool_remove_silence_from_a_recording_err_empty_keep:
    '残す音がありません。しきい値をより小さく（より負に）するか、最小無音を長くして、発話を無音扱いしないでください。',
  tool_remove_silence_from_a_recording_err_lame: 'MP3 エンコーダの読み込みに失敗しました。このタブのまま、もう一度「MP3を書き出す」を押してください。',
  tool_remove_silence_from_a_recording_err_video:
    'このツールは動画を主入力にしません。音声ファイルを短くするだけで、ミュートやジャンプカットはしません。',
  tool_remove_silence_from_a_recording_example:
    'サンプルを読み込むと、1.20 秒の無音が2か所ある 5.00 秒の音（0.80 + 1.20 + 0.80 + 1.20 + 1.00）ができます。−40 dB / 0.5 秒 / 0.15 秒残しで無音を削除すると約 2.90 秒です。WAV は PCM、MP3 は詳細設定を変えなければ 128 kbps です。',
  tool_remove_silence_from_a_recording_example_title: '例',
  tool_remove_silence_from_a_recording_export_mp3: 'MP3を書き出す',
  tool_remove_silence_from_a_recording_export_wav: 'WAVを書き出す',
  tool_remove_silence_from_a_recording_faq_a1:
    'いいえ。復号とカットはこのタブ内です。スクリプトはこのサイトから読みます。ファイルはサーバーに送りません。',
  tool_remove_silence_from_a_recording_faq_a2:
    '同じ作業です。無音部分削除、無音カット、無音を消す、沈黙を削除は、長い静かな区間を切って1本の短い WAV または MP3 を書き出すことです。「無音トリマー」が前後だけを指す場合でも、このページは途中の無音も切ります。',
  tool_remove_silence_from_a_recording_faq_a3:
    'まずは「話し声」（−40 dB / 0.5 秒 / 0.15 秒）。騒がしい部屋は −30 dB 寄り、最小 0.8 秒。「やさしめ」は −50 dB。語尾が消えるときは、しきい値をより負にするか最小無音を長くしてください。',
  tool_remove_silence_from_a_recording_faq_a4:
    '手動の切り出しは開始と終了を自分で指定します。こちらは途中の空白も切って1本に繋ぎます。手で前後だけ切るなら、トリム用のツールを使ってください。',
  tool_remove_silence_from_a_recording_faq_a5:
    'いいえ。無音で複数ファイルや ZIP に分ける作業ではありません。常に1つのファイルを書き出します。',
  tool_remove_silence_from_a_recording_faq_a6:
    'いいえ。ノイズ除去は長さを変えません。「えー」の削除は書き起こしが要ります。動画ミュートや YouTube の取り込みは対象外です。権利のある音声だけを使ってください。',
  tool_remove_silence_from_a_recording_faq_a7:
    '仕事は同じでソフトが違います。Audacity の Truncate Silence も、しきい値以下が十分続いた区間を短くします。このページはブラウザで同じことをします。インストール手順ではありません。',
  tool_remove_silence_from_a_recording_faq_a8:
    'デスクトップは約 40 MB または 20 分、狭い画面は約 20 MB または 8 分。超えると復号前に拒否します。意図した弱い演奏は誤って切れることがあるので、最小無音を長くするか、このツールを使わないでください。',
  tool_remove_silence_from_a_recording_faq_q1: '録音はアップロードされますか？',
  tool_remove_silence_from_a_recording_faq_q2: '無音部分削除や無音カットで検索しました。別のツールですか？',
  tool_remove_silence_from_a_recording_faq_q3: 'しきい値はどう選べばよいですか。息継ぎも切れますか？',
  tool_remove_silence_from_a_recording_faq_q4: '前後だけ切りたいです。音声カットと同じですか？',
  tool_remove_silence_from_a_recording_faq_q5: '無音で何本にも分割されますか？',
  tool_remove_silence_from_a_recording_faq_q6: 'ノイズ除去、フィラー削除、動画ミュート、YouTube 取り込みはできますか？',
  tool_remove_silence_from_a_recording_faq_q7: 'Audacity の無音の切り詰めと同じですか？',
  tool_remove_silence_from_a_recording_faq_q8: 'どのくらいの大きさまで扱えますか。静かな音楽は？',
  tool_remove_silence_from_a_recording_how_body:
    '十分に長い静かな区間を見つけて短くし、発話を1本に繋いで WAV または MP3 を書き出します。サーバーには上げません。',
  tool_remove_silence_from_a_recording_how_item_1: '録音を開く（または「サンプルを読み込む」）。',
  tool_remove_silence_from_a_recording_how_item_2: '初期値のままでも構いません。しきい値を変えるなら「詳細設定（任意）」を開きます。',
  tool_remove_silence_from_a_recording_how_item_3: '「無音を削除」をクリックします。',
  tool_remove_silence_from_a_recording_how_item_4: '「WAVを書き出す」または「MP3を書き出す」をクリックします。',
  tool_remove_silence_from_a_recording_how_title: '使い方',
  tool_remove_silence_from_a_recording_hud_cut: '無音を切って1本に繋いでいます…',
  tool_remove_silence_from_a_recording_hud_decode: 'このタブで復号しています…',
  tool_remove_silence_from_a_recording_hud_decoded: '復号しました。赤が切る区間です。よければ「無音を削除」を押してください。',
  tool_remove_silence_from_a_recording_hud_detect: '静かな窓を測っています…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '{s}秒経過',
  tool_remove_silence_from_a_recording_hud_encode: 'MP3 をエンコードしています…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'ファイルか設定を直して、もう一度「無音を削除」してください。',
  tool_remove_silence_from_a_recording_hud_fail_title: '無音の削除を止めました',
  tool_remove_silence_from_a_recording_hud_next: '完了。次は WAV または MP3 を書き出します。',
  tool_remove_silence_from_a_recording_hud_next_mp3: '完了。MP3 のダウンロードが始まるはずです。',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'カット',
  tool_remove_silence_from_a_recording_hud_step_decode: '復号',
  tool_remove_silence_from_a_recording_hud_step_detect: '検出',
  tool_remove_silence_from_a_recording_hud_step_encode: 'エンコード',
  tool_remove_silence_from_a_recording_hud_title: '無音削除の進捗',
  tool_remove_silence_from_a_recording_hud_working: '開始…',
  tool_remove_silence_from_a_recording_keep: '各ギャップの残し（秒）',
  tool_remove_silence_from_a_recording_keep_hint: '初期値 0.15 秒。ジャンプカットに聞こえにくくします。0 ならギャップを全部切ります。',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} ch',
  tool_remove_silence_from_a_recording_min_silence: '最小無音（秒）',
  tool_remove_silence_from_a_recording_min_silence_hint: '初期値 0.5 秒。それより短い間は残します。',
  tool_remove_silence_from_a_recording_pause: '一時停止',
  tool_remove_silence_from_a_recording_play: '再生',
  tool_remove_silence_from_a_recording_preset_gentle: 'やさしめ',
  tool_remove_silence_from_a_recording_preset_hint: '「話し声」が初期値です。やさしめは間を多めに残し、きつめは多めに切ります。',
  tool_remove_silence_from_a_recording_preset_speech: '話し声',
  tool_remove_silence_from_a_recording_preset_tight: 'きつめ',
  tool_remove_silence_from_a_recording_preview_hint: '赤い帯は切るのに十分な無音です。再生は現在のファイル（削除後は結果）を聴きます。',
  tool_remove_silence_from_a_recording_remove: '無音を削除',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}秒 → {next}秒。{gaps}か所で {removed}秒（{pct}%）切りました。書き出せます。',
  tool_remove_silence_from_a_recording_rules_body:
    '約 50 ms ごとに RMS を測り、levelDb = 20 × log10(rms) で dB にします。しきい値未満が最小無音以上続いた区間を「残し」の長さまで短くし、発話を繋ぎます。WAV は 16-bit PCM、MP3 は指定ビットレートの CBR です。',
  tool_remove_silence_from_a_recording_rules_item_1:
    '話し声：−40 dB、最小 0.5 秒、残し 0.15 秒。騒がしい部屋：−30 dB / 0.8 秒 / 0.20 秒。静かなスタジオ：−50 dB / 0.4 秒 / 0.15 秒。',
  tool_remove_silence_from_a_recording_rules_item_2:
    'デスクトップ上限は約 40 MB または 20 分、狭い画面は約 20 MB または 8 分。超えると拒否し、黙って切り詰めません。',
  tool_remove_silence_from_a_recording_rules_item_3:
    'ファイルは端末に留まり、サーバーにアップロードしません。MP3 エンコーダはこのサイトから、「MP3を書き出す」のあとだけ読み込みます。',
  tool_remove_silence_from_a_recording_rules_item_4:
    '復号はブラウザ次第です。DRM、一部のコーデック、動画コンテナは明示エラーになります。',
  tool_remove_silence_from_a_recording_rules_item_5:
    '書き出すのは1ファイルです。ZIP 分割、ノイズ除去、フィラー削除、動画ミュート、YouTube 取得はしません。',
  tool_remove_silence_from_a_recording_rules_title: '守っているルール',
  tool_remove_silence_from_a_recording_sample: 'サンプルを読み込む',
  tool_remove_silence_from_a_recording_status_done: '完了。',
  tool_remove_silence_from_a_recording_threshold: '無音しきい値（dB）',
  tool_remove_silence_from_a_recording_threshold_hint: '初期値 −40 dB。0 に近いほど、より多くの部分を無音とみなします。',
  tool_remove_silence_from_a_recording_title: '録音から無音を削除',
  tool_remove_silence_from_a_recording_usecase_1:
    '対談ポッドキャストの長い間を切って、1本の短い回として書き出す。',
  tool_remove_silence_from_a_recording_usecase_2:
    '会議録音の無人区間を削り、1つの MP3 にして聞き返す。',
  tool_remove_silence_from_a_recording_usecase_3:
    'ボイスメモの考え込みを切って、送る用の1ファイルにする。',
  tool_remove_silence_from_a_recording_usecases_title: 'こんなときに',
  tool_remove_silence_from_a_recording_why_choose_body:
    '「短くした1本」向けです。しきい値の目安と切った秒数をページ上で確認できます。',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    '無音を切って発話を1本に繋ぎます。クリップの ZIP は配りません。',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    '話し声の初期値（−40 dB / 0.5 秒 / 0.15 秒残し）は音声向きで、結果行に切った秒数が出ます。',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'ファイルはこのブラウザタブに留まり、サーバーに上げません。MP3 エンコーダは書き出し時だけ読みます。',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    '大きすぎ・長すぎは復号前に拒否します。1 GB を謳ってタブを落とすことはしません。',
  tool_remove_silence_from_a_recording_why_choose_title: '録音から無音を削除を使う理由',
};
export default ja;
