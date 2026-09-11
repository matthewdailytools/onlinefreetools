/**
 * i18n tool shard (trim-an-audio-clip-and-export / ja).
 * H1 は切り出して書き出す。mp3カットは FAQ で吸収。ユースケースは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：音声クリップの切り出しと書き出し。 */
const ja: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: '詳細設定（任意）',
  tool_trim_an_audio_clip_and_export_article:
    '端末の音声を開き、開始と終了を入れて「切り出し」のあと「WAV書き出し」または「MP3書き出し」します。ファイルは端末内に留まり、サーバーにアップロードしません。波形をいじる編集ソフトではありません。',
  tool_trim_an_audio_clip_and_export_bitrate: 'MP3 ビットレート',
  tool_trim_an_audio_clip_and_export_bitrate_hint: '初期値は 128 kbps。「MP3書き出し」を押したときだけ使います。',
  tool_trim_an_audio_clip_and_export_choose_file: '音声ファイルを選ぶ',
  tool_trim_an_audio_clip_and_export_clear: 'クリア',
  tool_trim_an_audio_clip_and_export_desc:
    '手元で音声カット：開始と終了を指定して WAV か MP3 を書き出します。端末内で処理し、サーバーにアップロードしません。',
  tool_trim_an_audio_clip_and_export_description:
    '手元の音声を開始〜終了で切り出し、WAV または MP3 を保存します。ファイルは端末内に留まり、サーバーにアップロードしません。手順：ファイルを開く → 波形をクリックまたはドラッグ（あるいは開始と終了を入力）→「切り出し」→「WAV書き出し」または「MP3書き出し」。例：5秒のサンプル音から 1.00〜3.00秒を WAV（または 128 kbps の MP3）で残す。音声カット、mp3カット、音声トリミング、音源切り取り、音声切り出しも同じ切り出しです。波形スタジオではありません。動画を主入力にはしません。',
  tool_trim_an_audio_clip_and_export_drop_hint: 'WAV、MP3、M4A、OGG をここにドロップしても構いません。処理はこのタブ内です。',
  tool_trim_an_audio_clip_and_export_empty: '先に音声ファイルを選んでください。',
  tool_trim_an_audio_clip_and_export_end: '終了（秒）',
  tool_trim_an_audio_clip_and_export_err_caps:
    'このファイルは端末の上限を超えています（デスクトップ約 40 MB / 20 分、狭い画面は約 20 MB / 8 分）。先に短くするか、短いファイルを使ってください。',
  tool_trim_an_audio_clip_and_export_err_decode:
    'このブラウザではそのファイルを復号できませんでした。WAV や MP3、DRM のないクリップを試してください。',
  tool_trim_an_audio_clip_and_export_err_empty: '切り出すものがありません。ファイルかサンプルを先に読み込んでください。',
  tool_trim_an_audio_clip_and_export_err_lame: 'MP3 エンコーダの読み込みに失敗しました。このタブのまま「MP3書き出し」をもう一度押してください。',
  tool_trim_an_audio_clip_and_export_err_range: '終了は開始より後で、復号した長さの内側にしてください。',
  tool_trim_an_audio_clip_and_export_err_video:
    'このページは動画を主入力にしません。先に音声を取り出してから切ってください。',
  tool_trim_an_audio_clip_and_export_example:
    '「サンプル読込」はメモリ上に 5.00 秒の音を作り、開始 1.00・終了 3.00 にして自動で「切り出し」、およそ 2.00 秒残します。「WAV書き出し」は PCM、「MP3書き出し」は詳細設定を変えなければ 128 kbps です。',
  tool_trim_an_audio_clip_and_export_example_title: '例',
  tool_trim_an_audio_clip_and_export_export_mp3: 'MP3書き出し',
  tool_trim_an_audio_clip_and_export_export_wav: 'WAV書き出し',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'しません。復号と切り出しはこのタブ内です。スクリプトはこのサイトから読みます。ファイルは当方サーバーへ送りません。',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'いいえ。音声カット、mp3カット、音声トリミング、音源切り取り、音声切り出しは、開始〜終了を残して「WAV書き出し」または「MP3書き出し」する作業です。',
  tool_trim_an_audio_clip_and_export_faq_a3:
    '初期設定では切れ目を近くのゼロクロスへ寄せ、クリックノイズを減らします。詳細設定（任意）でオフにできます。',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV は切った PCM のまま。MP3 は小さく（初期 128 kbps）、「MP3書き出し」を押したときだけエンコーダを読みます。',
  tool_trim_an_audio_clip_and_export_faq_a5:
    '違います。開始と終了を切って書き出すだけです。波形を扱うオンライン編集は別ツールになります。',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'およそ 30 秒まで切ることはできますが、M4A も自動フェードも出しません。着信音の仕様は別作業です。',
  tool_trim_an_audio_clip_and_export_faq_q7: '動画や YouTube から音声を抜けますか？',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'できません。動画の分離も YouTube の吸い出しも対象外です。権利のある音声ファイルを使ってください。',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'デスクトップはおよそ 40 MB または 20 分。狭い画面はおよそ 20 MB または 8 分。上限超えは拒否し、黙って切り詰めません。',
  tool_trim_an_audio_clip_and_export_faq_q1: '音声はアップロードされますか？',
  tool_trim_an_audio_clip_and_export_faq_q2: '音声カット、mp3カット、音声トリミングで検索しました。別のツールですか？',
  tool_trim_an_audio_clip_and_export_faq_q3: '切れ目が少し動くのはなぜ？他サイトではカチッと聞こえます。',
  tool_trim_an_audio_clip_and_export_faq_q4: 'WAV と MP3、どちらを書き出すべき？',
  tool_trim_an_audio_clip_and_export_faq_q5: 'これはオンライン音声編集ですか？',
  tool_trim_an_audio_clip_and_export_faq_q6: 'iPhone の M4A 着信音は作れますか？',
  tool_trim_an_audio_clip_and_export_faq_q8: 'どれくらい大きなファイルまで切れますか？',
  tool_trim_an_audio_clip_and_export_how_body:
    '開始と終了のあいだだけ残し、WAV か MP3 を保存します。ファイルは端末内、サーバーにアップロードしません。',
  tool_trim_an_audio_clip_and_export_how_item_1: '音声ファイルを開く（または「サンプル読込」）。',
  tool_trim_an_audio_clip_and_export_how_item_2: '波形をクリックまたはドラッグ（または開始と終了を入力）して残す範囲を決めます。',
  tool_trim_an_audio_clip_and_export_how_item_3: '「切り出し」を押す。',
  tool_trim_an_audio_clip_and_export_how_item_4: '「WAV書き出し」または「MP3書き出し」を押す。',
  tool_trim_an_audio_clip_and_export_how_title: '使い方',
  tool_trim_an_audio_clip_and_export_hud_decode: 'このタブでファイルを復号しています…',
  tool_trim_an_audio_clip_and_export_hud_decoded: '復号できました。開始と終了を入れて「切り出し」を押してください。',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '{s}秒経過',
  tool_trim_an_audio_clip_and_export_hud_encode: 'MP3 をエンコードしています…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'ファイルか時刻を直して、もう一度「切り出し」。',
  tool_trim_an_audio_clip_and_export_hud_fail_title: '切り出しを止めました',
  tool_trim_an_audio_clip_and_export_hud_next: '完了。次は WAV書き出し または MP3書き出しです。',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: '完了。MP3 のダウンロードが始まるはずです。',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: '復号',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'エンコード',
  tool_trim_an_audio_clip_and_export_hud_step_trim: '切り出し',
  tool_trim_an_audio_clip_and_export_hud_title: '切り出しの進捗',
  tool_trim_an_audio_clip_and_export_hud_trim: '開始〜終了を切り取っています…',
  tool_trim_an_audio_clip_and_export_hud_working: '開始…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} ch',
  tool_trim_an_audio_clip_and_export_pause: '一時停止',
  tool_trim_an_audio_clip_and_export_play: '再生',
  tool_trim_an_audio_clip_and_export_preview_hint: '波形をクリックまたはドラッグして開始と終了を決めます。再生はその範囲を試聴します。',
  tool_trim_an_audio_clip_and_export_result_tpl: '{dur}秒を残しました（{start}〜{end}秒）。書き出せます。',
  tool_trim_an_audio_clip_and_export_rules_body:
    '開始から終了までのサンプルを新しいバッファへコピーします。初期設定では端を近くのゼロクロスへ寄せます。WAV は 16-bit PCM。MP3 は選んだビットレートの CBR です。',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'デスクトップはおよそ 40 MB または 20 分、狭い画面はおよそ 20 MB または 8 分。超えたら拒否し、黙って短くしません。',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'ファイルは端末に留まり、サーバーにアップロードしません。MP3 エンコーダはこのサイトから、「MP3書き出し」のあとだけ読みます。',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    '復号はブラウザ次第です。DRM、一部コーデック、動画コンテナは明示的に失敗します。',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'ミックス、フェード、M4A、YouTube 取得はありません。ファイルひとつ、範囲ひとつ、書き出しひとつです。',
  tool_trim_an_audio_clip_and_export_rules_title: '想定してほしいルール',
  tool_trim_an_audio_clip_and_export_sample: 'サンプル読込',
  tool_trim_an_audio_clip_and_export_start: '開始（秒）',
  tool_trim_an_audio_clip_and_export_status_done: '完了。',
  tool_trim_an_audio_clip_and_export_title: '音声クリップを切り出して書き出す',
  tool_trim_an_audio_clip_and_export_trim: '切り出し',
  tool_trim_an_audio_clip_and_export_usecase_1: 'ポッドキャストを音声カット：8秒のジングルを飛ばして MP3 をチャット用に書き出す。',
  tool_trim_an_audio_clip_and_export_usecase_2: '会議録音から 12 秒の引用を残し、WAV で保管する。',
  tool_trim_an_audio_clip_and_export_usecase_3: 'ボイスメモの両端の無音を切る。mp3カットや音源切り取りと同じ切り出しです。',
  tool_trim_an_audio_clip_and_export_usecases_title: '向いている作業',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    '切って保存する一点向け。上限とクリック低減はページ上で確認できます。',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    '復号と切り出しはこのタブ内。「MP3書き出し」がエンコーダを初めて読むタイミングです。',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    '大きすぎる・長すぎるファイルは拒否し、黙って切り詰めません。',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'ゼロクロス寄せが初期オンなので継ぎ目がカチッとなりにくい。オフにもできます。',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV と MP3 は別ボタンで、手順の文言と揃えています。ビットレートは詳細設定だけです。',
  tool_trim_an_audio_clip_and_export_why_choose_title: '「音声クリップを切り出して書き出す」を選ぶ理由',
  tool_trim_an_audio_clip_and_export_zerocross: '開始と終了を近くのゼロクロスへ寄せる',
  tool_trim_an_audio_clip_and_export_zerocross_hint: '初期オン。継ぎ目のクリックを減らします。サンプル単位で正確に切りたいときはオフ。',
};
export default ja;
