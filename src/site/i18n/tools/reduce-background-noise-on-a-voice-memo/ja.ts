import type { SiteLangDict } from '../../../types';

/**
 * Japanese copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const ja: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "ボイスメモの背景ノイズを減らす",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "軽め・標準・強めのハイパス＋ノイズフロアゲートでファンや空調の定常ヒスを抑え、16-bit WAV をダウンロード。端末内の近似処理のみ。",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "ボイスメモの背景ノイズを、軽め・標準・強めのハイパス＋ノイズフロアゲートで低減。手順：ノイズ低減、試聴、WAV を保存。例：ヒス付きサンプルを読み込む。ブラウザ近似—Adobe Enhance Speech でも 50/60 Hz ハム除去でも、こもった声の EQ でもありません。音声は端末内のみ、アップロードしません。",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "ボイスメモにはファン・空調・部屋の定常ヒスが乗り、声を覆いがちです。本ページはハイパスで低域のゴロゴロを落とし、静かなフレームからノイズフロアを推定し、その付近を緩やかにゲートします。軽め／標準／強めで静かな区間の減衰量が変わります。クラウドの Enhance でも狭いハムノッチでも、3 バンドのこもった声 EQ でもない、正直なブラウザ近似です。音楽は鈍ることがあります。チャンネルは 1〜2。元ファイルは残し、新しい 16-bit WAV をダウンロードします。処理は端末のブラウザ内です。",
  tool_reduce_background_noise_on_a_voice_memo_choose: "音声ファイルを選ぶ",
  tool_reduce_background_noise_on_a_voice_memo_hint: "WAV / MP3 / M4A / AAC / OGG を1つ。最大 40 MiB・10 分。モノラルまたはステレオ。",
  tool_reduce_background_noise_on_a_voice_memo_convert: "ノイズ低減",
  tool_reduce_background_noise_on_a_voice_memo_download: "WAVを保存",
  tool_reduce_background_noise_on_a_voice_memo_sample: "サンプルを読み込む",
  tool_reduce_background_noise_on_a_voice_memo_clear: "クリア",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "低減の強さ",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "ノイズ低減の強さ",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "軽め",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "標準",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "強め",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "標準が声と定常ヒスのバランス向き。声が弱いときは軽め。強めは静かな区間を強く抑え、子音が薄くなることがあります。ML Enhance ではありません。",
  tool_reduce_background_noise_on_a_voice_memo_progress: "ノイズ低減の進捗",
  tool_reduce_background_noise_on_a_voice_memo_read: "読み込み",
  tool_reduce_background_noise_on_a_voice_memo_decode: "デコード",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "ノイズ低減",
  tool_reduce_background_noise_on_a_voice_memo_write: "書き出し",
  tool_reduce_background_noise_on_a_voice_memo_done: "完了。試聴してから WAV を保存してください。",
  tool_reduce_background_noise_on_a_voice_memo_failed: "ノイズ低減に失敗しました。小さい有効な音声で再試行してください。",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "{s}秒経過",
  tool_reduce_background_noise_on_a_voice_memo_preview: "低減後の WAV を聴く",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds}秒 · {preset} · ノイズフロア {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "三秒ヒス付きボイスメモデモ",
  tool_reduce_background_noise_on_a_voice_memo_empty: "先に音声を選ぶかサンプルを読み込んでください。",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "音声ファイルは1つだけドロップしてください。",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "非対応または破損。ブラウザがデコードできる WAV / MP3 / M4A / AAC / OGG を使ってください。",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "40 MiB・10 分以内、1〜2 チャンネルのファイルにしてください。",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "ブラウザがこの音声をデコードできませんでした。",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "WAV を書けませんでした。強さを確認して再実行してください。",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "ほぼ無音です。聞こえる録音を使ってください。",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "ボイスメモの背景ノイズを減らす手順",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "強さを選び、ハイパスとノイズフロアゲートを実行し、試聴して 16-bit WAV を保存—アップロードなし。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "音声を選ぶか「サンプルを読み込む」で三秒ヒス付きデモを使う。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "低減の強さで軽め・標準（既定）・強めを選ぶ。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "「ノイズ低減」を押し、読み込み → デコード → ノイズ低減 → 書き出しを待つ。",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "静かになった下地を試聴し、結果行を確認して WAV を保存。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "ボイスメモの背景ノイズを減らすツールを選ぶ理由",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "保存前に強さ名・推定ノイズフロア・出力 KiB を確認できる。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "強さは3つ—メモのノイズ低減だけに集中。DAW ラックやクラウド Enhance の売り込みではない。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "デコード・ハイパス・ゲート・WAV 書き出しは端末内。録音はアップロードしません。",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "強さや入力を変えると古いダウンロードは破棄されます。",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "強さ・ノイズフロアと正直なブラウザ限界",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "各強さはハイパスのあと静かなフレームからフロアを推定し、その付近をゲートします。定常ヒスに効きやすく、子音や音楽は薄くなることがあります。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "軽め・標準・強めでハイパス截止と残留ゲインが変わります。既定は標準。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "ブラウザ近似です。Adobe Enhance Speech でも 50/60 Hz ハム除去でも、こもった声の EQ でもありません。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "出力は 1〜2 チャンネル。タグはコピーしません。元ファイルは上書きしません。",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "1 ファイル最大 40 MiB・10 分。強めで空洞感が出たら軽め／標準に戻してください。",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "ヒス付きメモを試す",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "サンプルは三秒の音声風トーン＋定常ヒスを作り、標準で自動低減します。自動再生はしません—プレビューで再生してください。",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "役立つ場面",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "スマホメモの下にファン／空調のヒスがある—標準で低減し WAV を保存。",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "フェードやこもった声 EQ の前に部屋のヒスを軽く抑えたいとき。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "Adobe Enhance Speech と同じですか？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "違います。クラウド Enhance は大規模モデルで声を再構築します。本ページはブラウザ内のハイパスとフロアゲートだけです。控えめな近似です。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "50/60 Hz のハムは取れますか？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "専用のデハムではありません。広帯域の定常ヒスが主な対象です。狭い 50/60 Hz の電気ハムには録音から電源ハムを除去するを使ってください。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "こもった声の EQ と同じですか？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "違います。EQ ページは音色を変えます。本ページは定常ノイズを下げます。音色は EQ a muffled voice recording を使ってください。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "強めは声や音楽を壊しますか？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "あり得ます。静かな区間を強く抑え、子音が薄くなることがあります。通常は標準、声が弱いときは軽め。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "軽め・標準・強めの違いは？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "ハイパス截止を少し上げ、フロア付近の残留ゲインを下げます。既定は標準です。",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "音声はサーバーに上がりますか？",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "いいえ。デコード・低減・WAV 書き出しは端末のブラウザ内です。初回表示には通信が必要で、オフライン保証はありません。端のフェードは Fade in and fade out an audio clip、こもった音色は EQ a muffled voice recording を使ってください。",
};
export default ja;
