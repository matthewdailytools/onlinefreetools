import type { SiteLangDict } from '../../../types';

/**
 * 日本語 (ja) for mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for local search habits—not a verbatim machine translation of en.
 * Stereo L/R beat WAV; 娯楽・雰囲気用途のみ; 医療・治療・効能は主張しない。
 */
const ja: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: '集中用バイノーラルビートをミックスする',
  tool_mix_binaural_beats_for_focus_desc:
    'キャリアとビート差から集中用バイノーラルビートをミックスし、ステレオ WAV を保存。端末内のみ—娯楽・雰囲気音であり、治療ではありません。',
  tool_mix_binaural_beats_for_focus_description:
    'ブラウザでキャリアとビート差から集中用バイノーラルビートをミックスし、ステレオ 16-bit WAV を保存。手順：キャリアとビート Hz を設定（またはプリセット）、長さを選び、ミックス、ヘッドホンで試聴、保存。例：キャリア 200 Hz・差 10 Hz・10 秒。娯楽と集中用の雰囲気音のみ—医療・治療ではありません。アップロードしません。',
  tool_mix_binaural_beats_for_focus_article:
    '集中セッション向けのバイノーラルビートを探す人は、手元に残せるシンプルなステレオファイルを求めることが多いです。このページでは左耳用キャリアと、わずかに高い右耳用周波数（差がビート）を設定し、長さを選び、ブラウザ内で 44.1 kHz のステレオ PCM を合成して 16-bit WAV を保存できます。ヘッドホン必須—左右差が本質です。プリセットはヘルツ値だけを変え、医療プロトコルではありません。本ページは治療効果を主張せず、診断・治療も行わず、娯楽または個人の雰囲気聴取のみです。モノラル正弦発生器でも、UI 通知音メーカーでもありません。処理は端末内です。',
  tool_mix_binaural_beats_for_focus_carrier_label: 'キャリア（左耳、Hz）',
  tool_mix_binaural_beats_for_focus_carrier_hint: '左チャンネル周波数。目安 80–500 Hz。初期値 200 Hz。',
  tool_mix_binaural_beats_for_focus_beat_label: 'ビート差（Hz）',
  tool_mix_binaural_beats_for_focus_beat_hint: '右耳はキャリア＋この値。差は 1〜40 Hz に保ってください。',
  tool_mix_binaural_beats_for_focus_preset_label: '雰囲気ビートのプリセット',
  tool_mix_binaural_beats_for_focus_dur_label: '長さ',
  tool_mix_binaural_beats_for_focus_convert: 'ミックス',
  tool_mix_binaural_beats_for_focus_download: 'WAVを保存',
  tool_mix_binaural_beats_for_focus_sample: 'サンプルを読み込む',
  tool_mix_binaural_beats_for_focus_clear: 'クリア',
  tool_mix_binaural_beats_for_focus_advanced: 'バイノーラルの説明',
  tool_mix_binaural_beats_for_focus_settings_hint:
    '出力は 44.1 kHz・ステレオ・16-bit WAV、短いフェード付き。左右差を聴くにはヘッドホンが必要。娯楽と集中用の雰囲気音のみ—医療・治療ではありません。',
  tool_mix_binaural_beats_for_focus_progress: 'ミックスの進捗',
  tool_mix_binaural_beats_for_focus_synth: '合成',
  tool_mix_binaural_beats_for_focus_write: '書き出し',
  tool_mix_binaural_beats_for_focus_done: '完了。ヘッドホンで試聴してから WAV を保存。',
  tool_mix_binaural_beats_for_focus_failed: 'ミックスに失敗しました。キャリア、ビート差、長さを確認してください。',
  tool_mix_binaural_beats_for_focus_elapsed: '{s}秒経過',
  tool_mix_binaural_beats_for_focus_preview: 'バイノーラル WAV を聴く',
  tool_mix_binaural_beats_for_focus_result:
    'L {left} Hz · R {right} Hz · 差 {beat} Hz · {seconds}秒 · ステレオ · {rate} Hz · WAV {output} KiB',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: '先にキャリアとビート Hz を設定するか、サンプルを読み込んでください。',
  tool_mix_binaural_beats_for_focus_empty_state:
    'キャリアとビート差（またはプリセット）を設定し、長さを選んでミックス—またはサンプル（200 Hz / 10 Hz / 10 秒）。ヘッドホンを使用。娯楽の雰囲気音のみ—医療ではありません。',
  tool_mix_binaural_beats_for_focus_err_carrier: 'キャリアは 80〜1000 Hz で入力してください。',
  tool_mix_binaural_beats_for_focus_err_beat: 'ビート差は 1〜40 Hz で入力してください（右 = キャリア + 差）。',
  tool_mix_binaural_beats_for_focus_err_limit: '長さは 0〜120 秒にしてください。',
  tool_mix_binaural_beats_for_focus_err_encoder: 'ステレオ WAV を書き出せませんでした。もう一度ミックスしてください。',
  tool_mix_binaural_beats_for_focus_how_title: '集中用バイノーラルビートをミックスする方法',
  tool_mix_binaural_beats_for_focus_how_body:
    'キャリアとビート Hz を設定し、長さを選び、ミックス、ヘッドホンで試聴し、ステレオ WAV を 1 本保存—アップロードなし、治療主張なし。',
  tool_mix_binaural_beats_for_focus_how_item_1:
    '左耳用キャリア Hz（または初期値 200 Hz）と、右耳用ビート差を入力する。',
  tool_mix_binaural_beats_for_focus_how_item_2:
    '任意で雰囲気プリセット（差 4 / 10 / 16 Hz）を押す—数字だけ変わり、医療プロトコルではない。',
  tool_mix_binaural_beats_for_focus_how_item_3:
    '長さチップを選び、ミックスをクリックし、合成 → 書き出しを待つ。',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'ヘッドホンで試聴し、結果行を確認して WAV を保存する。',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'この集中用バイノーラルビート・ミックスを選ぶ理由',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    '保存前に左 Hz・右 Hz・ビート差・長さ・出力 KiB を確認できる。',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'ステレオ・バイノーラル 1 本に特化し、YMYL 境界を正直に書く—娯楽の雰囲気であり治療ではない。',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    '合成と書き出しは端末内。トーン処理のためにアップロードしない。',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'キャリア・ビート・長さを変えると古い保存が消え、古い WAV を誤って残さない。',
  tool_mix_binaural_beats_for_focus_rules_title: 'バイノーラルのルールと正直な制限',
  tool_mix_binaural_beats_for_focus_rules_body:
    '毎回左 = キャリア、右 = キャリア + ビートを 44.1 kHz で合成し、短い端フェード付き。出力はステレオ 16-bit WAV。娯楽・雰囲気のみ—医療ではない。モノラル正弦や UI ビープでもない。',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'キャリア 80〜1000 Hz。ビート差 1〜40 Hz。長さは 120 秒以下。出力はステレオ。',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    '真の左右差にはヘッドホンが必須。スピーカーはチャンネルが合わさりビート効果が薄れる。',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    '医療・睡眠・治療効果は主張しない。ラベルは雰囲気のショートカットであり、治療プロトコルではない。',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    '短いフェードでクリックを抑える。保存は新規ファイルで、アップロードしない。モノラル正弦発生器でも UI 通知音でもない。',
  tool_mix_binaural_beats_for_focus_example_title: '試す：キャリア 200 Hz・ビート 10 Hz・10 秒',
  tool_mix_binaural_beats_for_focus_example:
    'サンプルを読み込むと 200 Hz / 10 Hz / 10 秒になり、自動でミックスされます。ヘッドホンでは安定したステレオペアが聞こえるはずです。自動再生はしません—聴きたいときだけ再生を押してください。',
  tool_mix_binaural_beats_for_focus_usecases_title: 'こんなときに',
  tool_mix_binaural_beats_for_focus_usecase_1:
    '再利用できる集中用の雰囲気 WAV が欲しいとき：キャリアとビートを設定、ミックス、保存してヘッドホンで聴く。',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'デスクトップのトーンアプリを入れず、治療主張にも頼らず、素早くステレオ・ビートのデモが欲しいとき。',
  tool_mix_binaural_beats_for_focus_faq_q1: 'これは医療や治療ですか？',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'いいえ。娯楽と個人向けの集中用雰囲気音のみです。診断・治療・治癒は行わず、治療効果も主張しません。',
  tool_mix_binaural_beats_for_focus_faq_q2: 'ヘッドホンは必要ですか？',
  tool_mix_binaural_beats_for_focus_faq_a2:
    '意図した左右差を聴くなら必要です。スピーカーではチャンネルが混ざり、ビート効果が弱まるか失われます。',
  tool_mix_binaural_beats_for_focus_faq_q3: 'モノラルの正弦トーン発生器と同じですか？',
  tool_mix_binaural_beats_for_focus_faq_a3:
    '違います。正弦ページは単一周波数のモノラルです。本ページは常にわずかに異なる 2 周波数のステレオを書き出します。',
  tool_mix_binaural_beats_for_focus_faq_q4: '雰囲気プリセットの意味は？',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'ビート差のヘルツ（例：4・10・16 Hz）だけを設定します。医療プロトコルではなく、睡眠や集中の結果も約束しません。',
  tool_mix_binaural_beats_for_focus_faq_q5: 'サーバーへアップロードされますか？',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'いいえ。合成と書き出しはブラウザ内の端末で行います。初回読み込み時はネットワークが必要で、オフライン利用は保証しません。',
  tool_mix_binaural_beats_for_focus_faq_q6: '保存形式は何ですか？',
  tool_mix_binaural_beats_for_focus_faq_a6:
    '44.1 kHz・ステレオ・16-bit PCM WAV です。再利用できる雰囲気クリップとして残せます。',
};
export default ja;
