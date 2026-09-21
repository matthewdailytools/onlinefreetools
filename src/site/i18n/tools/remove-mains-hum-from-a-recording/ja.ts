import type { SiteLangDict } from '../../../types';

/**
 * Japanese copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const ja: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "録音から電源ハムを除去する",
  tool_remove_mains_hum_from_a_recording_desc:
    "50 または 60 Hz のノッチと任意の高調波で電源ハムを抑え、16-bit WAV をダウンロード。端末内のみ。",
  tool_remove_mains_hum_from_a_recording_description:
    "録音から電源ハムを除去します。50 または 60 Hz のノッチと任意の第2〜第5高調波を使います。手順：ハム除去、試聴、WAV をダウンロード。例：ハム付きサンプルを読み込みます。狭いノッチで電気ハム向け—広帯域デノイズでも、デクリックでも、こもった声の EQ でもありません。音声は端末に留まり、アップロードされません。",
  tool_remove_mains_hum_from_a_recording_article: "電源や調光器、接地の悪い機材の近くで録ると、50 または 60 Hz の定常ハムと高調波が乗りやすいです。本ページは on-device audio processing で EQ filter のノッチを直列し、選んだ基本波と、任意で Nyquist 未満の第2〜第5高調波を狙います。狭い電気トーン向けで、ファンノイズの広帯域デノイズやクリック修復、3 バンドのこもった声 EQ ではありません。ノッチ近くの低音が少し薄くなることがあります。チャンネルは 1 または 2 のまま。原ファイルは残し、ダウンロードは新しい 16-bit WAV です。処理はブラウザ内の端末で行います。",
  tool_remove_mains_hum_from_a_recording_choose: "音声ファイルを選ぶ",
  tool_remove_mains_hum_from_a_recording_hint: "WAV、MP3、M4A、AAC、OGG を1つドロップ。最大 40 MiB・10 分。モノラルまたはステレオ。",
  tool_remove_mains_hum_from_a_recording_convert: "ハム除去",
  tool_remove_mains_hum_from_a_recording_download: "WAVを保存",
  tool_remove_mains_hum_from_a_recording_sample: "サンプルを読み込む",
  tool_remove_mains_hum_from_a_recording_clear: "クリア",
  tool_remove_mains_hum_from_a_recording_advanced: "電源周波数と高調波",
  tool_remove_mains_hum_from_a_recording_hz_label: "電源周波数",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "高調波",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "基本波のみ",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "高調波を含める",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "既定の 50 Hz＋高調波は基本波と Nyquist 未満の第2〜第5をノッチします。北米などでは 60 Hz を選んでください。基本波のみは近くの低音に優しい設定です。",
  tool_remove_mains_hum_from_a_recording_progress: "ハム除去の進捗",
  tool_remove_mains_hum_from_a_recording_read: "読み取り",
  tool_remove_mains_hum_from_a_recording_decode: "デコード",
  tool_remove_mains_hum_from_a_recording_dehum: "ハム除去",
  tool_remove_mains_hum_from_a_recording_write: "書き込み",
  tool_remove_mains_hum_from_a_recording_done: "完了。ハム除去後の WAV を試聴し、WAVを保存してください。",
  tool_remove_mains_hum_from_a_recording_failed: "ハム除去に失敗しました。より小さく有効な音声で再試行してください。",
  tool_remove_mains_hum_from_a_recording_elapsed: "{s}秒経過",
  tool_remove_mains_hum_from_a_recording_preview: "ハム除去後の WAV を聴く",
  tool_remove_mains_hum_from_a_recording_result: "{seconds}秒 · {hz} Hz · {harmonics} · ノッチ {notches} · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "三秒電源ハムデモ",
  tool_remove_mains_hum_from_a_recording_empty: "先に音声ファイルを選ぶかサンプルを読み込んでください。",
  tool_remove_mains_hum_from_a_recording_err_file: "音声ファイルはちょうど1つドロップしてください。",
  tool_remove_mains_hum_from_a_recording_err_format: "非対応または破損した音声です。ブラウザがデコードできるファイル（WAV、MP3、M4A、AAC、OGG）を使ってください。",
  tool_remove_mains_hum_from_a_recording_err_limit: "40 MiB または 10 分以内、1〜2 チャンネルのファイルを使ってください。",
  tool_remove_mains_hum_from_a_recording_err_decode: "ブラウザがこの音声をデコードできませんでした。別の有効な録音を試してください。",
  tool_remove_mains_hum_from_a_recording_err_encoder: "ハム除去後の WAV を書けませんでした。周波数と高調波を確認して再実行してください。",
  tool_remove_mains_hum_from_a_recording_err_silence: "ほぼ無音です。聞こえるレベルの録音を試してください。",
  tool_remove_mains_hum_from_a_recording_how_title: "録音から電源ハムを除去する方法",
  tool_remove_mains_hum_from_a_recording_how_body:
    "50 か 60 Hz を選び、高調波を決め、ノッチを実行して試聴し、16-bit WAV をダウンロード—アップロードなし。",
  tool_remove_mains_hum_from_a_recording_how_item_1: "音声ファイルを選ぶか、「サンプルを読み込む」で三秒のハムデモを使います。",
  tool_remove_mains_hum_from_a_recording_how_item_2: "電源周波数と高調波を開き、50 か 60 Hz、基本波のみか高調波を含めるかを選びます。",
  tool_remove_mains_hum_from_a_recording_how_item_3: "「ハム除去」をクリックし、読み取り → デコード → ハム除去 → 書き込みが終わるまで待ちます。",
  tool_remove_mains_hum_from_a_recording_how_item_4: "静かな電気ノイズ床を試聴し、結果行を確認してから WAVを保存します。",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "録音から電源ハムを除去するツールを選ぶ理由",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "保存前に電源 Hz、高調波モード、ノッチ数、出力 KiB を確認できます。",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "明確なハム除去だけ—50/60 Hz ノッチと任意の高調波。埋もれた DAW ラックではありません。",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "デコード、ノッチ、WAV 書き込みは端末内。処理のために録音をアップロードしません。",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "周波数・高調波・入力を変えると古いダウンロードを消し、古い WAV を誤保存しません。",
  tool_remove_mains_hum_from_a_recording_rules_title: "ノッチ周波数・高調波と正直なブラウザ上限",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "毎回、選んだ基本波に狭いノッチを直列し、有効なら Nyquist 未満の第2〜第5も加えます。本物の電源トーンに最も効き、広帯域ヒスは別のデノイズが必要です。ソフトピーク保護でフルスケール未満に保ちます。",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 Hz または 60 Hz が基本波。高調波を含めると Nyquist 未満で 2×〜5× のノッチを追加。既定は 50 Hz＋高調波。",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "ブラウザのノッチ連鎖です。広帯域デノイズでも、クリック修復でも、こもった声の EQ でもありません。",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "書き出しは 1 または 2 チャンネル。タグはコピーしません。原ファイルは上書きしません。",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "1 ファイル最大 40 MiB・10 分。ノッチ近くの低音が薄くなることがあります。空洞に聞こえたら基本波のみを試してください。",
  tool_remove_mains_hum_from_a_recording_example_title: "実際のハム付きクリップを試す",
  tool_remove_mains_hum_from_a_recording_example:
    "「サンプルを読み込む」は 50 Hz ハム＋高調波の下に三秒の音声様トーンを作り、自動で 50 Hz＋高調波のハム除去を実行します。再生は自動開始しません—静かな床を聴くにはプレビューの再生を押してください。",
  tool_remove_mains_hum_from_a_recording_usecases_title: "役立つ場面",
  tool_remove_mains_hum_from_a_recording_usecase_1: "充電器や調光器由来の定常電気バズが乗ったボイスメモ—地域の Hz を選び、ハム除去、WAV を保存。",
  tool_remove_mains_hum_from_a_recording_usecase_2: "現場録音で電源トーンを先に消し、その後に広帯域ヒスのデノイズやこもった声の EQ をする前処理。",
  tool_remove_mains_hum_from_a_recording_usecase_3: "電源由来の50/60Hzハムがテイクの下に聞こえる。",
  tool_remove_mains_hum_from_a_recording_faq_q1: "ボイスメモの背景ノイズ低減と同じですか？",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "違います。そちらはハイパスとノイズフロアゲートでファン／空調ヒスを抑えます。本ページは狭い 50/60 Hz の電気トーンをノッチします。広帯域ヒスにはボイスメモの背景ノイズを減らすを使ってください。",
  tool_remove_mains_hum_from_a_recording_faq_q2: "クリックやポップも取れますか？",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "いいえ。クリック、口のポップ、レコードのクラックルはデクリックが必要です。本ページは電源基本波と任意の高調波だけをノッチします。",
  tool_remove_mains_hum_from_a_recording_faq_q3: "こもった声の EQ と同じですか？",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "違います。そちらは Clarity / Warmth / Presence で音色を整えます。本ページは電源ハムを除去します。ハム除去後のこもった音色には EQ a muffled voice recording を使ってください。",
  tool_remove_mains_hum_from_a_recording_faq_q4: "50 Hz と 60 Hz のどちら？",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "電力網に合わせてください。欧州・アジア多く・アフリカ・豪州はおおむね 50 Hz。北米と日本の一部・南米の一部は 60 Hz。間違えるとハムはほぼ残ります。",
  tool_remove_mains_hum_from_a_recording_faq_q5: "「高調波を含める」は何をしますか？",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "基本波の 2〜5 倍が Nyquist 未満ならノッチを追加します。バズには高調波が多いです。基本波のみは近くの低音に優しいです。",
  tool_remove_mains_hum_from_a_recording_faq_q6: "音声はサーバーにアップロードされますか？",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "いいえ。デコード、ノッチ、WAV 書き込みはブラウザの端末内です。初回読み込みにはネットワークが必要で、オフライン動作は保証しません。広帯域ヒスはボイスメモの背景ノイズ低減、こもった音色は EQ a muffled voice recording を使ってください。",
};
export default ja;
