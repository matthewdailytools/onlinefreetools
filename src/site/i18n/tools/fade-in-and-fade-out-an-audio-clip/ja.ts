import type { SiteLangDict } from '../../../types';

/**
 * Japanese copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const ja: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "オーディオクリップにフェードイン・アウトを付ける",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "0.5〜3秒チップと直線または等パワー曲線で急な起止を柔らかくし、16ビットWAVを保存。端末内のみ。",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "オーディオクリップにフェードイン・アウトを付ける：両端は0.5・1・2・3秒チップ、曲線は直線または等パワー。手順：フェード、試聴、WAVを保存。例：急峻なサンプルを読み込む。端のフェードだけ—シームレスループ用の巻き込みクロスフェードでも、リミッターやEQでもありません。音声は端末に残り、アップロードされません。",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "クリップの硬い切り始め・切り終わりはスピーカーでクリックし、タイムラインでも唐突に聞こえます。このページは先頭にフェードイン、末尾にフェードアウトのエンベロープを掛けます。各端で0.5・1・2・3秒を選び、直線または等パワーを選びます。合計が長さを超えると両端が比例して縮みます。これは1本の端フェード—尾を頭に巻くシームレスループでも、ピーク制限でも、EQでもありません。チャンネルは1または2のまま。元ファイルは残し、ダウンロードは新しい16ビットWAVです。処理はブラウザ内で完了します。",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "音声ファイルを選ぶ",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "WAV・MP3・M4A・AAC・OGGを1つ。最大40 MiB・10分。モノラルまたはステレオ。",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "フェード",
  tool_fade_in_and_fade_out_an_audio_clip_download: "WAVを保存",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "サンプルを読み込む",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "クリア",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "フェード設定",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "フェードイン",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "フェードアウト",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "曲線",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "直線",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "等パワー",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "既定はイン1秒・アウト1秒・等パワー。短いチップはドラム向け、長いチップはパッドや話し声向け。長さを超えると両端が一緒に縮みます。",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "フェードの進行",
  tool_fade_in_and_fade_out_an_audio_clip_read: "読み取り",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "デコード",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "フェード",
  tool_fade_in_and_fade_out_an_audio_clip_write: "書き込み",
  tool_fade_in_and_fade_out_an_audio_clip_done: "完了。フェード後のWAVを試聴してから「WAVを保存」してください。",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "フェードに失敗しました。小さめの有効な音声で再試行してください。",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "{s}秒経過",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "フェード後のWAVを聴く",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds}秒 · イン {fadeIn}s · アウト {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "四秒急峻デモ",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "先に音声ファイルを選ぶかサンプルを読み込んでください。",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "音声ファイルはちょうど1つにしてください。",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "未対応または破損した音声です。ブラウザがデコードできる形式（WAV、MP3、M4A、AAC、OGG）を使ってください。",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "40 MiB以下・10分以内・1〜2チャンネルのファイルを使ってください。",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "ブラウザがこの音声をデコードできませんでした。別の有効な録音を試してください。",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "フェード後のWAVを書けませんでした。設定を確認して再度「フェード」してください。",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "ほぼ無音のためフェードできません。聞こえるレベルの録音を使ってください。",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "クリップが短すぎて意味のあるフェードができません。おおよそ50 msより長いファイルを使ってください。",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "オーディオクリップにフェードイン・アウトを付ける方法",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "両端の長さと曲線を選び、適用して聴き、16ビットWAVを保存—ファイルはアップロードしません。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "音声ファイルを選ぶか、「サンプルを読み込む」で約4秒の急峻デモを使います。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "「フェード設定」を開き、イン／アウトのチップ（0.5 / 1 / 2 / 3秒）を選びます。既定は各1秒です。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "直線または等パワー（既定）を選び、「フェード」を押し、読み取り → デコード → フェード → 書き込みを待ちます。",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "柔らかい起止を試聴し、結果行を確認して「WAVを保存」します。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title:
    "「オーディオクリップにフェードイン・アウトを付ける」を選ぶ理由",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "保存前にフェードイン／アウト秒数、曲線名、出力KiBが分かります。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "分かりやすい時間チップと2曲線—端フェード専用で、シームレスループ巻き込みやリミッター／EQではありません。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "デコード、エンベロープ、WAV書き込みは端末内で実行され、処理のために録音をアップロードしません。",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "チップ・曲線・入力を変えると古いダウンロードが無効になり、古いWAVの誤保存を防ぎます。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "長さ・曲線・上限",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "フェードインは先頭で無音から立ち上がり、フェードアウトは末尾で無音へ落ちます。直線は直線ランプ、等パワーは正弦／余弦。重なる要求は比例して縮みます。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "各端は0.5・1・2・3秒。既定はイン1秒・アウト1秒・等パワーです。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "1本の端だけをフェードします。尾を頭に巻くシームレスループでも、ピーク制限でも、EQでもありません。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "書き出しのチャンネルは1または2。タグはコピーされず、元ファイルは上書きされません。",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "1ファイル最大40 MiB・10分。イン＋アウトが長さを超えると両端が縮小し、中央が残ります。",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "実際の端フェードを試す",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "「サンプルを読み込む」は約4秒の起止が急なトーンを作り、1秒／1秒等パワーで自動フェードします。自動再生はしません—柔らかい端を聴くにはプレビューの再生を押してください。",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "こんなときに",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "切点でクリックするナレーションや音楽ベッド—1秒／1秒でフェードしてWAVを保存。",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "他で切る前やタイムラインに載せる前に柔らかい端が欲しいとき—シームレスループにする必要はありません。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "「オーディオをシームレスループにする」と同じですか？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "違います。あちらは選んだ尾を頭にクロスフェードして接合をきれいにループします。こちらは1本の起止を柔らかくするだけです。シームレスループにはそのツールを使ってください。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "ピーク制限やEQもしますか？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "しません。サンプルにフェード包絡を掛けるだけです。ピーク制限や低音ブースト、こもった声のEQはそれぞれの専用ページへ。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "等パワーと直線の違いは？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "直線はゲインを直線で上げ下げします。等パワーはインに正弦、アウトに対応する余弦形を使い、聞こえ方が滑らかです。既定は等パワーです。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "3秒＋3秒がクリップより長い場合は？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "両端が比例して縮み、合計が長さを超えません。結果行に実際に適用された秒数が出ます。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "一端だけフェードできますか？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "チップは両端を設定します。ほとんど触りたくない端は最短0.5秒にし、または先に「オーディオクリップを切り出して書き出す」で切ってからフェードしてください。",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "音声はサーバーにアップロードされますか？",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "いいえ。デコード・フェード・WAV書き込みはブラウザ内で行われます。初回表示にはネットワークが必要で、オフライン利用は保証しません。シームレスループや長さの切り出しは各専用ツールへ。",
};
export default ja;
