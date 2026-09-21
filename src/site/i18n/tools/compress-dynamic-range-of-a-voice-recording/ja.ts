import type { SiteLangDict } from '../../../types';

/**
 * Japanese copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const ja: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "音声録音のダイナミックレンジを圧縮する",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    "軽／中／強プリセットと任意のメイクアップで声のピークを整え、16bit WAV を保存。端末内のみ。",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    
    "音声録音のダイナミックレンジを、軽・中・強のスレッショルド／レシオプリセットと任意のメイクアップで圧縮します。手順：圧縮、試聴、WAV を保存。例：大小のあるサンプルを読み込む。ダイナミクス整形——MP3 容量圧縮でも固定 dB ゲインでもなく、ピーク／LUFS 正規化でもない。音声は端末に留まり、アップロードされません。",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    
    "声のテイクはささやきとピークが飛びがちです。このページは純 JavaScript のピーク包絡コンプレッサーを使い、軽／中はソフトニー、強はハードニー（軽 ≈ −18 dB / 2:1、中 ≈ −24 / 3:1 既定、強 ≈ −30 / 6:1）です。任意のメイクアップでピーク抑制後の全体レベルを戻し、16bit WAV 書き出し前にソフトピーク保護します。大きい部分がより強く抑えられる——ダイナミックレンジ圧縮であり、MP3 容量の「圧縮」や固定ゲイン、ピーク正規化、LUFS 合わせではありません。チャンネルは 1 または 2。マスターは残し、ダウンロードは新しいファイルです。",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "音声ファイルを選ぶ",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "WAV、MP3、M4A、AAC、OGG を一つ。最大 40 MiB・10 分。モノラルまたはステレオ。",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "圧縮する",
  tool_compress_dynamic_range_of_a_voice_recording_download: "WAVを保存",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "サンプルを読み込む",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "クリア",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "コンプレッサー設定",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "強度プリセット",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "軽",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "中",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "強",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "メイクアップゲイン",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "オン",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "オフ",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    
    "軽（−18 dB、2:1、ソフトニー）は穏やか。中（−24 dB、3:1、ソフトニー）は多くのナレーション向き。強（−30 dB、6:1、ハードニー）はピークをより強く潰します。メイクアップ（既定オン）は圧縮後の全体レベルを戻し、ソフトピーク保護付きです。",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "圧縮の進行",
  tool_compress_dynamic_range_of_a_voice_recording_read: "読み込み",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "デコード",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "圧縮",
  tool_compress_dynamic_range_of_a_voice_recording_write: "書き出し",
  tool_compress_dynamic_range_of_a_voice_recording_done: "完了。圧縮した WAV を試聴してから保存してください。",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "圧縮に失敗しました。小さめの有効な音声で再試行してください。",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "{s}秒経過",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "圧縮した WAV を聴く",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds}秒 · {preset} · メイク {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "二秒ダイナミック音声デモ",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "先に音声を選ぶかサンプルを読み込んでください。",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "音声ファイルは一つだけドロップしてください。",
  tool_compress_dynamic_range_of_a_voice_recording_err_format: "非対応または破損した音声です。ブラウザがデコードできるファイル（WAV、MP3、M4A、AAC、OGG）を使ってください。",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "40 MiB 以下・10 分以内・1 または 2 チャンネルのファイルを使ってください。",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "この音声をデコードできませんでした。別の有効な録音を試してください。",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "圧縮 WAV を書き出せませんでした。プリセットとメイクアップを確認し、再度「圧縮する」を押してください。",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "ほぼ無音で圧縮できません。聞こえるレベルのある録音を使ってください。",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "音声録音のダイナミックレンジを圧縮する方法",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    "強度プリセットを選び、必要ならメイクアップをオンにし、ダイナミクスを圧縮して聴き、16bit WAV を保存——ファイルはアップロードしません。",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "音声録音を選ぶか、「サンプルを読み込む」で約二秒の高ダイナミックなトーンを試します。",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    "コンプレッサー設定で軽／中（既定）／強を選び、ピークだけ抑えたい場合以外はメイクアップをオンのままにします。",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "「圧縮する」を押し、読み込み → デコード → 圧縮 → 書き出しを待ちます。",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "結果を試聴し、プリセット／スレ／レシオ／メイクとピークを確認してから WAV を保存します。",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "当サイトのダイナミックレンジ圧縮ツールを選ぶ理由",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "保存前にプリセット、スレッショルド、レシオ、メイクアップ、ピーク前後、出力 KiB が見えます。",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "声向け三プリセット——一つのダイナミクス作業で、MP3 容量／ゲイン／正規化の壁ではありません。",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "デコード・圧縮・WAV 書き出しは端末内。録音をアップロードして処理しません。",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "プリセット・メイクアップ・入力を変えると古いダウンロードを消し、古い WAV の誤保存を防ぎます。",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "スレッショルド、レシオ、メイクアップと制限",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    
    "ピーク包絡コンプレッサーはスレッショルドを超えるとレシオに応じてゲインを下げます（軽／中はソフトニー、強はハードニー）。その後メイクアップを掛け、必要なら約 0.99 未満にソフトピーク保護します。大小の比率を変える点で、固定ゲイン・ピーク正規化・LUFS・MP3 ビットレート削減とは違います。",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1: "中（−24 dB、3:1、ソフトニー）が既定。軽は弱め、強は低いスレ・高いレシオ・ハードニーです。",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2: "メイクアップは既定オンで、ピーク抑制後の全体レベルを戻します。ピークだけ静かにしたいときはオフにします。",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "書き出しは 1 または 2 チャンネル。タグはコピーしません。元ファイルは上書きしません。",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4: "ファイルは 40 MiB・十分まで。MP3 容量圧縮でも固定ゲイン増幅でもピーク正規化でも LUFS 合わせでもありません。",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "実際のダイナミックレンジ圧縮を試す",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    "「サンプルを読み込む」は大小のバーストがある約二秒の 440 Hz トーンを作り、中＋メイクアップオンで自動圧縮します。自動再生はしません——平らなダイナミクスを聴くにはプレビューで再生を押してください。",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "役立つ場面",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "小声とピークが飛ぶナレーション——ポッドキャストで圧縮して WAV を保存。",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "ラウドネス合わせの前にインタビューを均一にしたいが、MP3 を容量のために縮めたくないとき。",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_3: "ささやきとピークが同居し、聴きやすいレベルに揃えたい。",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "MP3 の容量を「圧縮」して小さくするのと同じですか？",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "違います。ここでの圧縮はダイナミックレンジ（スレ／レシオ）であり、ビットレートやバイト削減ではありません。小さい MP3 には Reduce an MP3 file size を。中国語でも「圧縮人声動態 ≠ 圧縮 MP3 体積」です。",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "静かな録音を固定 dB ゲインで大きくするのと同じですか？",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2: "違います。固定ゲインは全体を同じ倍率で上げます。ここでは大きい部分がより強く抑えられます。均一ブーストには Make a quiet recording louder を。",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "ピーク正規化やポッドキャスト LUFS 合わせですか？",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "違います。ピーク正規化は絶対ピークを dBFS 目標へ、LUFS は総合ラウドネスへ。本ページはコンプレッサーでダイナミクスを変えます。Normalize an audio file to peak または Match podcast loudness to −16 LUFS を使ってください。",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "軽・中・強は何を変えますか？",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4: "スレッショルド、レシオ、ニーです。軽 ≈ −18 / 2:1 ソフト；中 ≈ −24 / 3:1 ソフト；強 ≈ −30 / 6:1 ハード。メイクアップのオン／オフは別項目です。",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "メイクアップはオンのままがよいですか？",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    "通常はオン——圧縮後に平均が下がることがあり、メイクアップがソフトピーク保護付きで戻します。ピークだけ抑えたいときはオフにします。",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "音声はサーバーにアップロードされますか？",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "されません。デコード・圧縮・WAV 書き出しは端末のブラウザ内です。初回読み込みには通信が必要で、オフライン保証はありません。ラウドネスやゲインには Match podcast loudness to −16 LUFS または Make a quiet recording louder を。",
};
export default ja;
