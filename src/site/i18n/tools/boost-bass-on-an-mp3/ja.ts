import type { SiteLangDict } from '../../../types';

/**
 * Japanese copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const ja: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "MP3の低音をブーストする",
  tool_boost_bass_on_an_mp3_desc:
    "Mild / Medium / Strong のローシェルフで薄い低音を厚くし、16ビットWAVを保存。端末内のみ。",
  tool_boost_bass_on_an_mp3_description:
    "MP3の低音をブースト：Mild・Medium・Strongのローシェルフプリセットで低域を持ち上げます。手順：ブースト、プレビュー、WAVを保存。例：薄い低音サンプルを読み込む。ローシェルフの低音のみ—フル多帯域EQでも、ファイル全体の音量ブースターでもありません。音声は端末に留まり、アップロードしません。",
  tool_boost_bass_on_an_mp3_article: "スマホ書き出しやノートPCスピーカーではキックとベースが薄くなりがちで、中域は足りても約100Hz以下の重さが足りません。本ページはon-device audio processingでEQ filterのlowshelf一段を走らせます。Mildは穏やか、Medium（既定）は日常向け、Strongはより重い低音。クリップしそうならソフトピーク保護でスケールします。これは低音ブーストであり、こもった声向けClarity/Warmth/Presence三帯域EQでも、全帯域を同じdBで上げる音量ブースターでもありません。チャンネルは1〜2。マスターは残し、ダウンロードは新しい16ビットWAV。処理はブラウザ内です。",
  tool_boost_bass_on_an_mp3_choose: "音声ファイルを選ぶ",
  tool_boost_bass_on_an_mp3_hint: "WAV、MP3、M4A、AAC、OGGを1つ。最大40MiB・10分。モノラルまたはステレオ。",
  tool_boost_bass_on_an_mp3_convert: "ブースト",
  tool_boost_bass_on_an_mp3_download: "WAVを保存",
  tool_boost_bass_on_an_mp3_sample: "サンプルを読み込む",
  tool_boost_bass_on_an_mp3_clear: "クリア",
  tool_boost_bass_on_an_mp3_advanced: "低音プリセット",
  tool_boost_bass_on_an_mp3_preset_label: "ローシェルフ低音プリセット",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "既定のMediumは約90Hz付近のローシェルフ。Mildは弱め、Strongは強め。ソフトピーク保護でクリップを防ぎます。",
  tool_boost_bass_on_an_mp3_progress: "低音ブーストの進捗",
  tool_boost_bass_on_an_mp3_read: "読込",
  tool_boost_bass_on_an_mp3_decode: "デコード",
  tool_boost_bass_on_an_mp3_boost: "ブースト",
  tool_boost_bass_on_an_mp3_write: "書込",
  tool_boost_bass_on_an_mp3_done: "完了。ブースト後のWAVを試し、WAVを保存してください。",
  tool_boost_bass_on_an_mp3_failed: "低音ブーストに失敗しました。より小さく有効な音声を試してください。",
  tool_boost_bass_on_an_mp3_elapsed: "{s}秒経過",
  tool_boost_bass_on_an_mp3_preview: "低音ブースト後のWAVを聴く",
  tool_boost_bass_on_an_mp3_result: "{seconds}秒 · {preset} · ピーク {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "二秒薄い低音デモ",
  tool_boost_bass_on_an_mp3_empty: "先に音声ファイルを選ぶか、サンプルを読み込んでください。",
  tool_boost_bass_on_an_mp3_err_file: "音声ファイルは1つだけドロップしてください。",
  tool_boost_bass_on_an_mp3_err_format: "非対応または破損した音声です。ブラウザがデコードできるWAV、MP3、M4A、AAC、OGGを使ってください。",
  tool_boost_bass_on_an_mp3_err_limit: "40MiBまたは10分以内、1〜2チャンネルのファイルを使ってください。",
  tool_boost_bass_on_an_mp3_err_decode: "この音声をデコードできませんでした。別の有効な録音を試してください。",
  tool_boost_bass_on_an_mp3_err_encoder: "ブースト後WAVを書けませんでした。プリセットを確認して再ブーストしてください。",
  tool_boost_bass_on_an_mp3_err_silence: "ほぼ無音でブーストできません。聞こえるレベルの録音を使ってください。",
  tool_boost_bass_on_an_mp3_how_title: "MP3の低音をブーストする方法",
  tool_boost_bass_on_an_mp3_how_body:
    "ローシェルフプリセットを選び、低音を上げ、聴いてから16ビットWAVを保存—ファイルはアップロードしません。",
  tool_boost_bass_on_an_mp3_how_item_1: "音声ファイルを選ぶか、「サンプルを読み込む」で約2秒の薄い低音デモを試します。",
  tool_boost_bass_on_an_mp3_how_item_2: "低音プリセットを開き、Mild・Medium（既定）・Strongから選びます。",
  tool_boost_bass_on_an_mp3_how_item_3: "「ブースト」を押し、読込 → デコード → ブースト → 書込を待ちます。",
  tool_boost_bass_on_an_mp3_how_item_4: "結果を試し、プリセットとピークを確認して「WAVを保存」します。",
  tool_boost_bass_on_an_mp3_why_choose_title: "このMP3低音ブーストを選ぶ理由",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "保存前にプリセット名、ピーク前後、出力KiBを確認できます。",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "ローシェルフ三択—低音だけの作業で、十帯域EQや全体音量壁ではありません。",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "デコード・lowshelf・WAV書き込みは端末内。処理のためにアップロードしません。",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "プリセットや入力を変えると古いダウンロードを消し、古いWAVの誤保存を防ぎます。",
  tool_boost_bass_on_an_mp3_rules_title: "Mild・Medium・Strongと制限",
  tool_boost_bass_on_an_mp3_rules_body:
    "各プリセットはlowshelf一段。Mildは穏やか、Mediumは日常、Strongは強め。クリップしそうならピーク保護でスケールします。",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "既定Mediumは約90Hzで約+8dB。Mildは約+4dB、Strongは約+12dBで棚がやや低めです。",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "ローシェルフ低音のみ。こもった声EQのように中高域を形作らず、音量ブースターのように全帯域を上げません。",
  tool_boost_bass_on_an_mp3_rules_item_3: "書き出しチャンネルは1または2。タグはコピーしません。元ファイルは上書きしません。",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "1ファイル最大40MiB・10分。Strong後にピークが高い場合、フルスケール未満になるよう全体レベルを下げます。",
  tool_boost_bass_on_an_mp3_example_title: "実際の低音ブーストを試す",
  tool_boost_bass_on_an_mp3_example:
    "「サンプルを読み込む」は中域強め・低域弱めの約2秒トーンを作り、Mediumで自動ブーストします。自動再生はしません—重い結果を聴くにはプレビューで再生してください。",
  tool_boost_bass_on_an_mp3_usecases_title: "こんなときに",
  tool_boost_bass_on_an_mp3_usecase_1: "書き出したMP3がスピーカーで薄い—Mediumを選んでブーストし、WAVを保存。",
  tool_boost_bass_on_an_mp3_usecase_2: "フルグラフィックEQやミックス全体の音量上げなしでキックに重さが欲しいとき。",
  tool_boost_bass_on_an_mp3_usecase_3: "スマホ書き出しのMP3がノートPCで薄く、キックだけ厚くしたい。",
  tool_boost_bass_on_an_mp3_faq_q1: "こもったボイス録音のEQと同じですか？",
  tool_boost_bass_on_an_mp3_faq_a1:
    "いいえ。あちらはClarity/Warmth/Presenceの三帯域でこもった声向け。こちらはlowshelfで低域だけ。こもった声EQは「こもったボイス録音をEQする」を使ってください。",
  tool_boost_bass_on_an_mp3_faq_q2: "静かな録音を大きくするのと同じですか？",
  tool_boost_bass_on_an_mp3_faq_a2:
    "いいえ。音量ブースターは全サンプルを同じdBで上げます。こちらは低音シェルフだけ。全体ゲインは「静かな録音を大きくする」を使ってください。",
  tool_boost_bass_on_an_mp3_faq_q3: "Mild・Medium・Strongは何が違いますか？",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mildは穏やかなローシェルフ。Medium（既定）は日常の低音リフト。Strongはより重い棚。ソフトピーク保護でクリップを防ぎます。",
  tool_boost_bass_on_an_mp3_faq_q4: "ブーストでファイルが熱く（大きく）なったら？",
  tool_boost_bass_on_an_mp3_faq_a4:
    "lowshelf後、ピークが約−0.2dBFSを超えそうならソフトピーク保護でスケールします。専用リミッティングは「ピークを抑えてクリップさせない」が使えるとき利用してください。",
  tool_boost_bass_on_an_mp3_faq_q5: "音声はサーバーにアップロードされますか？",
  tool_boost_bass_on_an_mp3_faq_a5:
    "いいえ。デコード・低音ブースト・WAV書き込みは端末のブラウザ内です。初回読み込みにネットワークが必要で、オフライン動作は保証しません。",
  tool_boost_bass_on_an_mp3_faq_q6: "MP3だけですか？WAVやM4Aも使えますか？",
  tool_boost_bass_on_an_mp3_faq_a6:
    "ブラウザがデコードできる形式なら可—WAV、MP3、M4A、AAC、OGG。タイトルはよく検索されるMP3表記で、書き出しは常に新しい16ビットWAVです。",
};
export default ja;
