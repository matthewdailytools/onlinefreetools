/**
 * i18n tool shard (make-a-seamless-audio-loop / ja).
 * H1 はシームレスな音声ループを作る。ループメーカーは FAQ で吸収。ユースケースは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：継ぎ目の目立たない音声ループを作って書き出す。 */
const ja: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: '詳細設定（任意）',
  tool_make_a_seamless_audio_loop_article:
    'このタブでシームレスな音声ループを作ります。端末のファイルを開き、開始と終了を決め、クロスフェードを入れて「ループを作る」のあと「WAVを書き出す」または「MP3を書き出す」。末尾が先頭に溶け、クリック音が出にくくなります。ファイルは端末内に留まり、サーバーにアップロードしません。',
  tool_make_a_seamless_audio_loop_bitrate: 'MP3 ビットレート',
  tool_make_a_seamless_audio_loop_bitrate_hint: '初期値は 128 kbps。「MP3を書き出す」を押したときだけ使います。',
  tool_make_a_seamless_audio_loop_choose_file: '音声ファイルを選ぶ',
  tool_make_a_seamless_audio_loop_clear: 'クリア',
  tool_make_a_seamless_audio_loop_crossfade: 'クロスフェード（ミリ秒）',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    '初期値は 50 ms。ドラムは 20 ms、パッドやドローン、環境音は 200–500 ms が向きます。',
  tool_make_a_seamless_audio_loop_desc:
    '手元でシームレスな音声ループを作る：末尾を先頭へクロスフェードし、WAV か MP3 を書き出します。端末内で処理し、サーバーにアップロードしません。',
  tool_make_a_seamless_audio_loop_description:
    '手元の音声からシームレスな音声ループを作り、WAV または MP3 を保存します。末尾を先頭へクロスフェードします。ファイルは端末内に留まり、サーバーにアップロードしません。手順：ファイルを開く → 開始と終了を指定 → クロスフェード（初期 50 ms）→「ループを作る」→「再生」で継ぎ目を確認 →「WAVを書き出す」または「MP3を書き出す」。例：5秒のサンプルの 1.00〜3.00秒を 50 ms の等パワーで巻くと約 1.95秒。音声ループ、ループ音源、シームレスループ、クロスフェード、ループメーカーも同じ作業です。波形スタジオではありません。2曲のDJつなぎや YouTube 取得はしません。',
  tool_make_a_seamless_audio_loop_disclaimer:
    'そのファイルを処理する権利があることを確認してください。このページは楽曲ライセンスを付与せず、配信の代行取得もしません。',
  tool_make_a_seamless_audio_loop_drop_hint: 'WAV、MP3、M4A、OGG をここにドロップしても構いません。処理はこのタブ内です。',
  tool_make_a_seamless_audio_loop_empty: '先に音声ファイルを選んでください。',
  tool_make_a_seamless_audio_loop_end: '終了（秒）',
  tool_make_a_seamless_audio_loop_equal_power: '等パワーのクロスフェード',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    '初期はオンです。継ぎ目の音量が落ちにくいです。オフにすると線形ミックスになります。',
  tool_make_a_seamless_audio_loop_err_bake: '焼き付け後が約 3 分を超えます。回数を減らすか範囲を短くしてください。',
  tool_make_a_seamless_audio_loop_err_caps:
    'このファイルは端末の上限を超えています（デスクトップ約 40 MB / 20 分、狭い画面は約 20 MB / 8 分）。先に短くするか、短いファイルを使ってください。',
  tool_make_a_seamless_audio_loop_err_decode:
    'このブラウザではそのファイルを復号できません。WAV や MP3、DRM のない素材を試してください。',
  tool_make_a_seamless_audio_loop_err_empty: 'ループする材料がありません。ファイルかサンプルを読み込んでください。',
  tool_make_a_seamless_audio_loop_err_fade:
    'クロスフェードは選択範囲より短くしてください。ミリ秒を下げるか、開始〜終了を長くしてください。',
  tool_make_a_seamless_audio_loop_err_lame:
    'MP3 エンコーダの読み込みに失敗しました。このタブに留まったまま、もう一度「MP3を書き出す」を押してください。',
  tool_make_a_seamless_audio_loop_err_range: '終了は開始より後で、復号した長さの内側にしてください。',
  tool_make_a_seamless_audio_loop_err_video:
    'このページは動画を主入力にしません。先に音だけ取り出してからループを作ってください。',
  tool_make_a_seamless_audio_loop_example:
    '「サンプルを読み込む」はメモリ上に 5.00 秒の音を作り、開始 1.00・終了 3.00、50 ms の等パワーで「ループを作る」と約 1.95 秒の1周になります。「WAVを書き出す」は PCM、「MP3を書き出す」は初期 128 kbps です。',
  tool_make_a_seamless_audio_loop_example_title: '例',
  tool_make_a_seamless_audio_loop_export_mp3: 'MP3を書き出す',
  tool_make_a_seamless_audio_loop_export_wav: 'WAVを書き出す',
  tool_make_a_seamless_audio_loop_faq_a1:
    'いいえ。復号と巻き込みはこのタブ内です。スクリプトはこのサイトから読みます。ファイルをサーバーへ送りません。',
  tool_make_a_seamless_audio_loop_faq_a2:
    'いいえ。音声ループ、ループ音源、シームレスループ、クロスフェード、ループメーカー、ループ作成は、範囲を決めて継ぎ目を溶かして書き出す、この同じ作業です。',
  tool_make_a_seamless_audio_loop_faq_a3:
    'クロスフェードは範囲の末尾を先頭へ混ぜます。初期は 50 ms の等パワー。ドラムは約 20 ms、パッドは 200–500 ms が目安です。',
  tool_make_a_seamless_audio_loop_faq_a4:
    '書き出す1周は、開始〜終了よりクロスフェード分だけ短くなります。重なりを一度だけ混ぜるためです。2.00秒＋50 ms なら約 1.95秒です。',
  tool_make_a_seamless_audio_loop_faq_a5:
    'ゲームエンジンがファイルを繰り返すなら WAV。配信ソフトがループしないなら詳細設定で 4 周や 8 周を焼き、MP3 にします。「MP3を書き出す」で初めてエンコーダが載ります。',
  tool_make_a_seamless_audio_loop_faq_a6:
    '回数の初期値は 1 です。詳細設定（任意）で 4 や 8 を焼けます。約 3 分を超える出力は拒否します。10時間版は作りません。',
  tool_make_a_seamless_audio_loop_faq_a7:
    '2曲をつなぐDJクロスフェードではありません。波形エディタでも、着信音の M4A でも、自動でループ点を探す機能でも、YouTube 取得でもありません。',
  tool_make_a_seamless_audio_loop_faq_a8:
    'デスクトップは約 40 MB または 20 分。狭い画面は約 20 MB または 8 分。超えたファイルは拒否し、黙って切り詰めません。',
  tool_make_a_seamless_audio_loop_faq_q1: '音声はアップロードされますか？',
  tool_make_a_seamless_audio_loop_faq_q2: 'ループメーカーや音声ループ、シームレスループで検索しました。別の道具ですか？',
  tool_make_a_seamless_audio_loop_faq_q3: 'クロスフェードでクリック音はどう消えますか？',
  tool_make_a_seamless_audio_loop_faq_q4: '書き出しが選んだ範囲より短いのはなぜ？',
  tool_make_a_seamless_audio_loop_faq_q5: 'ゲーム用は WAV、配信用は MP3 ですか？',
  tool_make_a_seamless_audio_loop_faq_q6: '配信ソフトがループしません。何周か焼き付けられますか？',
  tool_make_a_seamless_audio_loop_faq_q7: '2曲つなぎ、着信音、自動ループ探しにも使えますか？',
  tool_make_a_seamless_audio_loop_faq_q8: 'どのくらい大きなファイルまで扱えますか？',
  tool_make_a_seamless_audio_loop_how_body:
    '繰り返したい範囲を決め、末尾を先頭へクロスフェードし、WAV か MP3 を保存します。ファイルは端末内に留まり、サーバーにアップロードしません。',
  tool_make_a_seamless_audio_loop_how_item_1: '音声ファイルを開く（または「サンプルを読み込む」）。',
  tool_make_a_seamless_audio_loop_how_item_2:
    '波形をクリックまたはドラッグ（あるいは開始と終了を入力）。50 ms で足りなければクロスフェードを変える（20 / 50 / 200 / 500 ms）。',
  tool_make_a_seamless_audio_loop_how_item_3: '「ループを作る」を押す。',
  tool_make_a_seamless_audio_loop_how_item_4: '「再生」で継ぎ目を聞き、「WAVを書き出す」または「MP3を書き出す」。',
  tool_make_a_seamless_audio_loop_how_title: '使い方',
  tool_make_a_seamless_audio_loop_hud_decode: 'このタブでファイルを復号しています…',
  tool_make_a_seamless_audio_loop_hud_decoded: '復号できました。開始・終了・クロスフェードを決めて「ループを作る」。',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '{s}秒経過',
  tool_make_a_seamless_audio_loop_hud_encode: 'MP3 をエンコードしています…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'ファイルや時間、クロスフェードを直して、もう一度「ループを作る」。',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'ループ作成を止めました',
  tool_make_a_seamless_audio_loop_hud_loop: '末尾を先頭へ巻き込んでいます…',
  tool_make_a_seamless_audio_loop_hud_next: '完了。次は「再生」で継ぎ目を確認し、WAV または MP3 を書き出します。',
  tool_make_a_seamless_audio_loop_hud_next_mp3: '完了。MP3 のダウンロードが始まるはずです。',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: '復号',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'エンコード',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'ループ',
  tool_make_a_seamless_audio_loop_hud_title: 'ループの進捗',
  tool_make_a_seamless_audio_loop_hud_working: '開始…',
  tool_make_a_seamless_audio_loop_make: 'ループを作る',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} ch',
  tool_make_a_seamless_audio_loop_pause: '一時停止',
  tool_make_a_seamless_audio_loop_play: '再生',
  tool_make_a_seamless_audio_loop_preview_hint:
    '波形をクリックまたはドラッグして開始と終了を決めます。ループを作ったあと「再生」は結果を繰り返し、継ぎ目を聞けます。',
  tool_make_a_seamless_audio_loop_repeats: '回数（焼き付けコピー）',
  tool_make_a_seamless_audio_loop_repeats_hint:
    'ファイルを繰り返せる再生側なら初期の 1 周で十分です。繰り返せないときは 4 や 8。約 3 分超は拒否します。',
  tool_make_a_seamless_audio_loop_result_tpl:
    'ループは {dur}秒（{start}〜{end}秒、クロスフェード {fade} ms、{n} 周）。書き出せます。',
  tool_make_a_seamless_audio_loop_rules_body:
    '範囲をコピーし、等パワー（または線形）で末尾のフェード分を先頭へ混ぜます。出力の長さは範囲からフェードを引いた値です。回数が 2 以上ならその1周を並べます。WAV は 16-bit PCM、MP3 は指定ビットレートの CBR です。',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'デスクトップ上限は約 40 MB または 20 分、狭い画面は約 20 MB または 8 分。超えたファイルは拒否し、切り詰めません。',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'ファイルは端末内に留まり、サーバーにアップロードしません。MP3 エンコーダはこのサイトから、「MP3を書き出す」のあとだけ読みます。',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'クロスフェードは範囲より短くします。書き出す1周はその重なり分だけ短くなります。曲線の初期は等パワーです。',
  tool_make_a_seamless_audio_loop_rules_item_4:
    '復号はブラウザ次第です。DRM、一部のコーデック、動画コンテナはエラーを出して失敗します。',
  tool_make_a_seamless_audio_loop_rules_item_5:
    '2曲のミックス、M4A、BPM 検出、自動ループ探し、YouTube 取得はしません。ファイル1つ、範囲1つ、ループ1つです。',
  tool_make_a_seamless_audio_loop_rules_title: '守るルール',
  tool_make_a_seamless_audio_loop_sample: 'サンプルを読み込む',
  tool_make_a_seamless_audio_loop_start: '開始（秒）',
  tool_make_a_seamless_audio_loop_status_done: '完了。',
  tool_make_a_seamless_audio_loop_title: 'シームレスな音声ループを作る',
  tool_make_a_seamless_audio_loop_usecase_1:
    'ゲームの2秒ベッドをシームレスな音声ループにして、ファイルを繰り返すエンジン向けに WAV を書き出す。',
  tool_make_a_seamless_audio_loop_usecase_2:
    '配信のBGM：フレーズを切り、50 ms のクロスフェードを残し、詳細設定で 8 周焼いて MP3 にする。',
  tool_make_a_seamless_audio_loop_usecase_3:
    '環境音やドローンを 200–500 ms のクロスフェードでつなぎ、継ぎ目をほとんど聞こえなくする。',
  tool_make_a_seamless_audio_loop_usecases_title: 'こんなときに',
  tool_make_a_seamless_audio_loop_why_choose_body:
    '「巻いて書き出す」一件に絞っています。フェードは耳で確認でき、上限はページに書いてあります。',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    '復号と巻き込みはこのタブ内。「MP3を書き出す」がエンコーダ読み込みの最初のタイミングです。',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    '等パワーのクロスフェードが初期オン。20 / 50 / 200 / 500 ms のチップでドラムとパッドを切り替えられます。',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'ループを作ったあと「再生」が結果を繰り返すので、保存前に継ぎ目を聴けます。',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    '大きすぎるファイルと、焼き付けが約 3 分を超える出力は拒否し、黙って切り詰めません。',
  tool_make_a_seamless_audio_loop_why_choose_title: 'シームレスな音声ループを作るを使う理由',
  tool_make_a_seamless_audio_loop_zerocross: '開始と終了を近くのゼロクロスへ吸着する',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    '初期はオンです。クロスフェードの前に端を安定させます。サンプル単位で切りたいときはオフにします。',
};
export default ja;
