import type { SiteLangDict } from '../../../types';

/**
 * Japanese copy for eq-a-muffled-voice-recording (S20).
 * ≠ 低音のみ (S21)、≠ ノイズ除去 (S24)、≠ ディエッサー (S31)。
 */
const ja: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "こもったボイス録音をEQする",
  tool_eq_a_muffled_voice_recording_desc:
    "Clarity / Warmth / Presence の3バンドプリセットでこもった声を開き、16-bit WAV をダウンロード。端末内のみ。",
  tool_eq_a_muffled_voice_recording_description:
    "こもったボイス録音をEQする：Clarity・Warmth・Presence の3バンドプリセット。手順：EQ、プレビュー、WAV を保存。例：こもったサンプルを読み込む。音色整形のみ—低音ブースト専用ではなく、ノイズ除去でもディエッサーでもありません。音声は端末に留まり、アップロードしません。",
  tool_eq_a_muffled_voice_recording_article: "電話・マスク・遠いマイクは、数百ヘルツ以下の濁りと声帯域の不足でこもって聞こえます。本ページは on-device audio processing で lowshelf / peaking / highshelf の3段 EQ filter をプリセットとして実行します。Clarity は濁りを切り声を開き、Warmth はボディを足して鋭い高域を抑え、Presence は中高域の存在感とエアを上げます。こもった声のトーンEQであり、単帯域の低音ブースト、背景ノイズ除去、歯擦音だけを抑えるディエッサーではありません。チャンネルは1〜2。マスターは残し、ダウンロードは新しい16-bit WAV。処理はブラウザ内です。",
  tool_eq_a_muffled_voice_recording_choose: "音声ファイルを選ぶ",
  tool_eq_a_muffled_voice_recording_hint: "WAV / MP3 / M4A / AAC / OGG を1つ。最大 40 MiB・10分。モノラルまたはステレオ。",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "WAVを保存",
  tool_eq_a_muffled_voice_recording_sample: "サンプルを読み込む",
  tool_eq_a_muffled_voice_recording_clear: "クリア",
  tool_eq_a_muffled_voice_recording_advanced: "EQプリセット",
  tool_eq_a_muffled_voice_recording_preset_label: "ボイスEQプリセット",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "既定の Clarity は濁りを切り声を開きます。Warmth はボディを足し高域を柔らかく。Presence は中高域の存在感とエアを上げます。ブースト後のクリップ防止にソフトピーク保護があります。",
  tool_eq_a_muffled_voice_recording_progress: "EQの進捗",
  tool_eq_a_muffled_voice_recording_read: "読み込み",
  tool_eq_a_muffled_voice_recording_decode: "デコード",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "書き出し",
  tool_eq_a_muffled_voice_recording_done: "完了。EQ後のWAVを試し聞きし、「WAVを保存」してください。",
  tool_eq_a_muffled_voice_recording_failed: "EQに失敗しました。小さめの有効な音声で再試行してください。",
  tool_eq_a_muffled_voice_recording_elapsed: "{s}秒経過",
  tool_eq_a_muffled_voice_recording_preview: "EQ後のWAVを聞く",
  tool_eq_a_muffled_voice_recording_result: "{seconds}s · {preset} · ピーク {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "2秒こもった声デモ",
  tool_eq_a_muffled_voice_recording_empty: "先に音声ファイルを選ぶかサンプルを読み込んでください。",
  tool_eq_a_muffled_voice_recording_err_file: "音声ファイルは1つだけドロップしてください。",
  tool_eq_a_muffled_voice_recording_err_format: "未対応または破損した音声です。ブラウザがデコードできる WAV / MP3 / M4A / AAC / OGG を使ってください。",
  tool_eq_a_muffled_voice_recording_err_limit: "40 MiB または 10分以内、チャンネル1〜2のファイルを使ってください。",
  tool_eq_a_muffled_voice_recording_err_decode: "ブラウザがこの音声をデコードできませんでした。別の有効な録音を試してください。",
  tool_eq_a_muffled_voice_recording_err_encoder: "EQ後WAVを書けませんでした。プリセットを確認して再実行してください。",
  tool_eq_a_muffled_voice_recording_err_silence: "ほぼ無音でEQできません。聞こえるレベルの録音を使ってください。",
  tool_eq_a_muffled_voice_recording_how_title: "こもったボイス録音をEQする方法",
  tool_eq_a_muffled_voice_recording_how_body:
    "3バンドプリセットを選び、音色を整え、聞き、16-bit WAV を保存—ファイルはアップロードしません。",
  tool_eq_a_muffled_voice_recording_how_item_1: "音声を選ぶか、「サンプルを読み込む」で2秒のこもった声デモを使います。",
  tool_eq_a_muffled_voice_recording_how_item_2: "EQプリセットを開き、Clarity（既定）/ Warmth / Presence を選びます。",
  tool_eq_a_muffled_voice_recording_how_item_3: "「EQ」をクリックし、読み込み → デコード → EQ → 書き出しを待ちます。",
  tool_eq_a_muffled_voice_recording_how_item_4: "結果を試し聞きし、プリセットとピークを確認して「WAVを保存」。",
  tool_eq_a_muffled_voice_recording_why_choose_title: "こもったボイス録音をEQするツールを選ぶ理由",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "保存前にプリセット名・ピーク前後・出力 KiB が見えます。",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "声向け3プリセット—こもった声EQ専用で、10バンド玩具や低音だけの壁ではありません。",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "デコード・EQ EQ・WAV書き出しは端末内。ページは処理のために録音をアップロードしません。",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "プリセットや入力を変えると古いダウンロードは破棄され、古いWAVの誤保存を防ぎます。",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity / Warmth / Presence と制限",
  tool_eq_a_muffled_voice_recording_rules_body:
    "各プリセットは EQ 3段（lowshelf / peaking / highshelf）。Clarity はこもった声を開き、Warmth はボディ、Presence は存在感とエア。ブーストでクリップしそうならソフトピーク保護でスケールします。",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "既定 Clarity は濁った低域を切り声の明瞭度を上げます。Warmth は低域ボディを足し鋭い高域を柔らかく。Presence は中高域の存在感に焦点。",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "トーンEQのみ。ファンノイズ除去ではなく、低音だけのブーストでも、ディエッサーのような歯擦音狙いでもありません。",
  tool_eq_a_muffled_voice_recording_rules_item_3: "書き出しはチャンネル1〜2。タグはコピーしません。元ファイルは上書きしません。",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "1ファイル最大 40 MiB・10分。強いブースト後はソフトピーク保護で全体レベルが下がることがあります。",
  tool_eq_a_muffled_voice_recording_example_title: "実際のこもったEQを試す",
  tool_eq_a_muffled_voice_recording_example:
    "「サンプルを読み込む」は低域強・高域弱の2秒トーンを作り、Clarity で自動EQします。自動再生はしません—よりクリアな結果を聞くにはプレビューで再生してください。",
  tool_eq_a_muffled_voice_recording_usecases_title: "こんなときに",
  tool_eq_a_muffled_voice_recording_usecase_1: "電話やマスクでこもったテイク—Clarity を選び EQ して WAV を保存。",
  tool_eq_a_muffled_voice_recording_usecase_2: "フルDAWのEQを開かずに、ポッドキャスト声に暖かさや存在感が欲しいとき。",
  tool_eq_a_muffled_voice_recording_usecase_3: "遠い/マスク越しの収録がこもっており、声の存在感を出したい。",
  tool_eq_a_muffled_voice_recording_faq_q1: "低音ブーストと同じですか？",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "違います。低音ブーストは主に低域を上げます。本ページはこもった声向けの多バンド3プリセットです。低音専用は別作業です（Boost bass on an MP3、公開時）。",
  tool_eq_a_muffled_voice_recording_faq_q2: "背景ノイズは消えますか？",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "いいえ。EQは音色を変えるだけで、ファン・ヒス・部屋ノイズは抑えません。ノイズ除去は専用ツール（公開時）を使ってください。",
  tool_eq_a_muffled_voice_recording_faq_q3: "ディエッサーですか？",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "いいえ。ディエッサーは歯擦音（S/Sh）を狙います。これらのプリセットは低・中・高でこもった音色全体を整形します。",
  tool_eq_a_muffled_voice_recording_faq_q4: "Clarity / Warmth / Presence は何をしますか？",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity は濁りを切り声を開きます。Warmth は低域ボディを足し鋭い高域を柔らかく。Presence は中高域の存在感とエアを上げます。ソフトピーク保護でブースト後のクリップを防ぎます。",
  tool_eq_a_muffled_voice_recording_faq_q5: "EQで音が熱くなったら？",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "フィルタ後、ピークが約 −0.2 dBFS を超えそうならソフトピーク保護でスケールします。専用ピーク制限は「ピークを制限してファイルがクリップしないようにする」を使ってください。",
  tool_eq_a_muffled_voice_recording_faq_q6: "音声はサーバーにアップロードされますか？",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "いいえ。デコード・EQ・WAV書き出しはブラウザ内です。初回読み込みにネットワークが必要で、オフライン保証はありません。EQ後のダイナミクスは「ボイス録音のダイナミックレンジを圧縮する」やピーク制限ツールを使ってください。",
};
export default ja;
