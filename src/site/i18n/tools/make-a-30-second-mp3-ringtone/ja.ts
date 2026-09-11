/**
 * i18n tool shard (make-a-30-second-mp3-ringtone / ja).
 * H1 は 30秒のMP3着信音を作る。着信音作成／着メロは FAQ で吸収。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：手元の曲を約30秒に切ってフェードし、MP3着信音として書き出す。 */
const ja: SiteLangDict = {
  tool_make_a_30_second_mp3_ringtone_advanced: '詳細設定（任意）',
  tool_make_a_30_second_mp3_ringtone_article:
    'このタブで30秒のMP3着信音を作ります。端末の曲を開き、およそ30秒を残し、フェードイン／アウトを入れて「着信音を作る」、続けて「MP3を書き出す」。ファイルは端末内に留まり、サーバーにアップロードしません。着信音作成や着メロ作成は、この切り出しであり、波形スタジオでも iPhone の M4R インストーラでもありません。',
  tool_make_a_30_second_mp3_ringtone_bitrate: 'MP3 ビットレート',
  tool_make_a_30_second_mp3_ringtone_bitrate_hint: '初期値は 128 kbps。「MP3を書き出す」を押したときだけ使います。',
  tool_make_a_30_second_mp3_ringtone_choose_file: '音声ファイルを選ぶ',
  tool_make_a_30_second_mp3_ringtone_clear: 'クリア',
  tool_make_a_30_second_mp3_ringtone_desc:
    '手元で30秒のMP3着信音を作る：曲を切り、端をフェードして MP3 を書き出します。端末内で処理し、サーバーにアップロードしません。',
  tool_make_a_30_second_mp3_ringtone_description:
    '手元の曲から30秒のMP3着信音を作ります。端にフェードをかけて MP3 を保存します。ファイルは端末内に留まり、サーバーにアップロードしません。手順：ファイルを開く → 開始と長さ（初期30秒、チップ 15 / 20 / 30 / 40）→ フェードイン 0.5秒・フェードアウト 1.5秒 →「着信音を作る」→「再生」→「MP3を書き出す」。例：32秒サンプルの 1.00秒から30秒を取ると約 30.00秒。着信音作成、MP3着信音、着メロ、曲を着信音にする、30秒着信音も同じ作業です。波形編集アプリではありません。iPhone の M4R 書き出しや YouTube 取得はしません。',
  tool_make_a_30_second_mp3_ringtone_disclaimer:
    'そのファイルを処理する権利があることを確認してください。楽曲ライセンスは付与せず、M4R も配信の代行取得もしません。',
  tool_make_a_30_second_mp3_ringtone_drop_hint: 'WAV、MP3、M4A、OGG をここにドロップしても構いません。処理はこのタブ内です。',
  tool_make_a_30_second_mp3_ringtone_duration: '長さ（秒）',
  tool_make_a_30_second_mp3_ringtone_duration_hint:
    '初期は30秒です。チップは今の開始位置から 15 / 20 / 30 / 40 秒にします。40秒超は拒否します。',
  tool_make_a_30_second_mp3_ringtone_empty: '先に音声ファイルを選んでください。',
  tool_make_a_30_second_mp3_ringtone_err_caps:
    'このファイルは端末の上限を超えています（デスクトップ約 40 MB / 20 分、狭い画面は約 20 MB / 8 分）。先に短くするか、短いファイルを使ってください。',
  tool_make_a_30_second_mp3_ringtone_err_decode:
    'このブラウザではそのファイルを復号できません。WAV や MP3、DRM のない素材を試してください。',
  tool_make_a_30_second_mp3_ringtone_err_empty: '着信音にする材料がありません。ファイルかサンプルを読み込んでください。',
  tool_make_a_30_second_mp3_ringtone_err_fade:
    'フェードインとフェードアウトの合計は長さより短くしてください。フェードを短くするか、区間を長くしてください。',
  tool_make_a_30_second_mp3_ringtone_err_lame:
    'MP3 エンコーダの読み込みに失敗しました。このタブに留まったまま、もう一度「MP3を書き出す」を押してください。',
  tool_make_a_30_second_mp3_ringtone_err_long: '着信音は40秒を超えられません。長さを短くするか開始を動かしてください。',
  tool_make_a_30_second_mp3_ringtone_err_range: '長さは開始より後、復号したファイルの内側である必要があります。',
  tool_make_a_30_second_mp3_ringtone_err_video:
    '動画を主入力にはできません。先に音声を取り出してから、その音で着信音を作ってください。',
  tool_make_a_30_second_mp3_ringtone_example:
    'サンプル読み込みは 32.00秒のトーンをメモリ上に作り、開始 1.00・長さ 30、フェードイン 0.5秒・フェードアウト 1.5秒で「着信音を作る」と約 30.00秒になります。「MP3を書き出す」は詳細設定を変えなければ 128 kbps です。',
  tool_make_a_30_second_mp3_ringtone_example_title: '例',
  tool_make_a_30_second_mp3_ringtone_export_mp3: 'MP3を書き出す',
  tool_make_a_30_second_mp3_ringtone_fade_hint:
    '初期はフェードイン 0.5秒、フェードアウト 1.5秒です。サビがブツ切りになりません。線形ゲインで、ファイルは短くなりません。',
  tool_make_a_30_second_mp3_ringtone_fade_in: 'フェードイン（秒）',
  tool_make_a_30_second_mp3_ringtone_fade_out: 'フェードアウト（秒）',
  tool_make_a_30_second_mp3_ringtone_faq_a1:
    'いいえ。復号とフェードはこのタブ内です。スクリプトはこのサイトから読み込みます。ファイルはサーバーに送られません。',
  tool_make_a_30_second_mp3_ringtone_faq_a2:
    '別ツールではありません。着信音作成、MP3着信音、着メロ作成、30秒着信音、曲を着信音に、はすべて：約30秒を残し、端をフェードして「MP3を書き出す」です。',
  tool_make_a_30_second_mp3_ringtone_faq_a3:
    '着信音としてよく使われるのが30秒です。15・20・40秒のチップもあります。40秒超は拒否し、普通の長尺カットにはしません。',
  tool_make_a_30_second_mp3_ringtone_faq_a4:
    '選択区間に線形の音量ランプをかけます。初期は入り 0.5秒、終わり 1.5秒。長さは変わらず、音量だけ変わります。合計は長さより短くしてください。',
  tool_make_a_30_second_mp3_ringtone_faq_a5:
    '出力は MP3 のみ（初期 128 kbps）です。M4R も M4A も書きません。Android ではこの MP3 を着信音にできます。iPhone は GarageBand や Finder が別途必要で、ブラウザからシステム着信音には入れられません。',
  tool_make_a_30_second_mp3_ringtone_faq_a6:
    'Android では MP3 をダウンロードし、着信音フォルダへ置くか、設定 → 音で選びます。',
  tool_make_a_30_second_mp3_ringtone_faq_a7:
    '違います。任意長のトリムは別ページ、シームレスループは末尾を先頭へクロスフェードする作業です。波形スタジオでも YouTube 取得でもありません。',
  tool_make_a_30_second_mp3_ringtone_faq_a8:
    'デスクトップは約 40 MB または 20 分、狭い画面は約 20 MB または 8 分。超えると復号前に拒否します。着信音区間自体も40秒までです。',
  tool_make_a_30_second_mp3_ringtone_faq_q1: '音声はアップロードされますか？',
  tool_make_a_30_second_mp3_ringtone_faq_q2: '着信音作成や着メロ、MP3着信音で検索しました。別のツールですか？',
  tool_make_a_30_second_mp3_ringtone_faq_q3: 'なぜ初期が30秒の着信音なのですか？',
  tool_make_a_30_second_mp3_ringtone_faq_q4: 'フェードインとフェードアウトはどう効きますか？',
  tool_make_a_30_second_mp3_ringtone_faq_q5: 'iPhone 用の M4R 着信音は作れますか？',
  tool_make_a_30_second_mp3_ringtone_faq_q6: 'Android でこの MP3 を着信音にするには？',
  tool_make_a_30_second_mp3_ringtone_faq_q7: '音声トリムやシームレスループ、音の編集アプリですか？',
  tool_make_a_30_second_mp3_ringtone_faq_q8: 'どのくらいの大きさまで扱えますか？',
  tool_make_a_30_second_mp3_ringtone_how_body:
    '手元の曲からおよそ30秒を残し、端をフェードしてブツ切りを避け、MP3 をダウンロードします。ファイルはサーバーに上げません。',
  tool_make_a_30_second_mp3_ringtone_how_item_1: '音声ファイルを開く（または「サンプルを読み込む」）。',
  tool_make_a_30_second_mp3_ringtone_how_item_2:
    '波形をドラッグするか、開始と長さを入力（初期30秒、チップ 15 / 20 / 30 / 40）。0.5秒 / 1.5秒のフェードが合わなければ変更。',
  tool_make_a_30_second_mp3_ringtone_how_item_3: '「着信音を作る」を押す。',
  tool_make_a_30_second_mp3_ringtone_how_item_4: '「再生」でループ確認してから「MP3を書き出す」。',
  tool_make_a_30_second_mp3_ringtone_how_title: '使い方',
  tool_make_a_30_second_mp3_ringtone_hud_decode: 'このタブで復号しています…',
  tool_make_a_30_second_mp3_ringtone_hud_decoded: '復号できました。開始・長さ・フェードを決めて「着信音を作る」を押してください。',
  tool_make_a_30_second_mp3_ringtone_hud_elapsed_tpl: '{s}秒経過',
  tool_make_a_30_second_mp3_ringtone_hud_encode: 'MP3 をエンコード中…',
  tool_make_a_30_second_mp3_ringtone_hud_fail_hint: 'ファイル、時間、フェードを直してから、もう一度「着信音を作る」。',
  tool_make_a_30_second_mp3_ringtone_hud_fail_title: '着信音作成を止めました',
  tool_make_a_30_second_mp3_ringtone_hud_fade: 'フェードをかけています…',
  tool_make_a_30_second_mp3_ringtone_hud_next: '完了。次は「再生」で確認し、「MP3を書き出す」。',
  tool_make_a_30_second_mp3_ringtone_hud_next_mp3: '完了。MP3 のダウンロードが始まるはずです。',
  tool_make_a_30_second_mp3_ringtone_hud_pct_tpl: '{pct}%',
  tool_make_a_30_second_mp3_ringtone_hud_step_decode: '復号',
  tool_make_a_30_second_mp3_ringtone_hud_step_encode: 'エンコード',
  tool_make_a_30_second_mp3_ringtone_hud_step_fade: 'フェード',
  tool_make_a_30_second_mp3_ringtone_hud_title: '着信音の進捗',
  tool_make_a_30_second_mp3_ringtone_hud_working: '開始…',
  tool_make_a_30_second_mp3_ringtone_make: '着信音を作る',
  tool_make_a_30_second_mp3_ringtone_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} ch',
  tool_make_a_30_second_mp3_ringtone_pause: '一時停止',
  tool_make_a_30_second_mp3_ringtone_play: '再生',
  tool_make_a_30_second_mp3_ringtone_preview_hint:
    '波形をクリックまたはドラッグして開始と長さを決めます。「着信音を作る」のあと、「再生」はフェード済みクリップを着信のように繰り返します。',
  tool_make_a_30_second_mp3_ringtone_result_tpl:
    '着信音は {dur}秒（{start}〜{end}秒）、フェードイン {fadeIn}秒、フェードアウト {fadeOut}秒です。MP3を書き出せます。',
  tool_make_a_30_second_mp3_ringtone_rules_body:
    '開始＋長さ（最大40秒）で区間をコピーします。線形フェードはゲインだけ変え、書き出し長さは区間のままです。「MP3を書き出す」後に指定ビットレートの CBR になります。',
  tool_make_a_30_second_mp3_ringtone_rules_item_1:
    'デスクトップは約 40 MB または 20 分、狭い画面は約 20 MB または 8 分。超過は拒否し、切り詰めません。着信音区間は40秒までです。',
  tool_make_a_30_second_mp3_ringtone_rules_item_2:
    'ファイルは端末内に留まり、サーバーにアップロードしません。MP3 エンコーダはこのサイトから「MP3を書き出す」後にだけ読み込みます。',
  tool_make_a_30_second_mp3_ringtone_rules_item_3:
    '初期の長さは30秒。フェードイン 0.5秒とフェードアウト 1.5秒の合計は長さより短く。フェードでファイルは短くなりません。',
  tool_make_a_30_second_mp3_ringtone_rules_item_4:
    '復号はブラウザ次第です。DRM、一部コーデック、動画コンテナは明示エラーになります。',
  tool_make_a_30_second_mp3_ringtone_rules_item_5:
    'M4R/M4A は書かず、iPhone に着信音を入れず、40秒上限なしのトリムもシームレスループも YouTube 取得もしません。ファイル1つ、窓1つ、MP3 1つです。',
  tool_make_a_30_second_mp3_ringtone_rules_title: '想定されるルール',
  tool_make_a_30_second_mp3_ringtone_sample: 'サンプルを読み込む',
  tool_make_a_30_second_mp3_ringtone_start: '開始（秒）',
  tool_make_a_30_second_mp3_ringtone_status_done: '完了。',
  tool_make_a_30_second_mp3_ringtone_title: '30秒のMP3着信音を作る',
  tool_make_a_30_second_mp3_ringtone_usecase_1:
    '権利のある曲のサビを30秒のMP3着信音にし、Android の着信音に設定する。',
  tool_make_a_30_second_mp3_ringtone_usecase_2:
    '15秒または20秒チップでアラームや通知用の短い音を作り、フェードアウトを残して MP3 にする。',
  tool_make_a_30_second_mp3_ringtone_usecase_3:
    '先に MP3 を書き出し、iPhone のカスタム着信音が必要なら GarageBand に渡す。このページは M4R を書きません。',
  tool_make_a_30_second_mp3_ringtone_usecases_title: '向いている場面',
  tool_make_a_30_second_mp3_ringtone_why_choose_body:
    '着信音の長さの MP3 専用です。フェードは耳で確認でき、40秒上限はページに書いてあります。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_1:
    '復号とフェードはこのタブ内。「MP3を書き出す」がエンコーダ読み込みの最初です。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_2:
    '長さの初期値は30秒。15 / 20 / 40秒チップあり。40秒超は拒否します。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_3:
    'フェードイン 0.5秒・フェードアウト 1.5秒が最初の画面にあり、ブツ切りが初期値ではありません。',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_4:
    'M4R を書くふりをせず、ブラウザから iPhone に着信音を入れません。',
  tool_make_a_30_second_mp3_ringtone_why_choose_title: '30秒のMP3着信音を作るを使う理由',
  tool_make_a_30_second_mp3_ringtone_zerocross: '窓の端を近くのゼロクロスへ吸着',
  tool_make_a_30_second_mp3_ringtone_zerocross_hint:
    '初期はオンです。フェード前の切れ目を整えます。サンプル精度が必要ならオフにしてください。',
};
export default ja;
