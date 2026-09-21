import type { SiteLangDict } from '../../../types';

/**
 * 日本語コピー：音声ファイルを順番に結合する（F7 A2）。
 * 先頭から末尾へ連結 → 1 本の WAV；重ね合わせ混音ではない。
 */
const ja: SiteLangDict = {
  tool_join_audio_files_in_order_title: '音声ファイルを順番に結合する',
  tool_join_audio_files_in_order_desc:
    '複数のローカル音声をリスト順に先頭から末尾へつなぎ、16-bit WAV をダウンロード。端末内のみ—重ね合わせではありません。',
  tool_join_audio_files_in_order_description:
    'ブラウザで複数のローカル音声ファイルをリスト順に先頭から末尾へ結合し、1 本の 16-bit WAV をダウンロードします。手順：クリップ追加、必要なら並べ替え、結合、プレビュー、ダウンロード。例：短いトーン 2 本のサンプルを読み込む。連結のみ—重ね合わせでもクロスフェードでもありません。アップロードしません。',
  tool_join_audio_files_in_order_article:
    'ポッドキャストのテイクやボイスメモ、曲の区間を 1 本の連続ファイルにしたい場面があります。このページでは複数のローカル音声をドロップし、リストで並べ替え、ブラウザで各クリップをデコードし、サンプリングレートとチャンネルを揃えたうえで、その順にサンプルを連結して 16-bit PCM WAV を書き出します。同時に重ねるミックスでも、曲間のクロスフェードでも、動画からの抽出でもありません。成否はブラウザが各コンテナをデコードできるかに依存します。チャンネルは 1 または 2。原本は残し、ダウンロードは新しいファイルです。処理は端末内で行います。',
  tool_join_audio_files_in_order_choose: '音声ファイルを追加',
  tool_join_audio_files_in_order_hint:
    'WAV / MP3 / M4A / AAC / OGG を複数ドロップまたは選択。追加も可能。最大 20 本・各 40 MiB・結合後合計 20 分以内；モノラルまたはステレオ。',
  tool_join_audio_files_in_order_list_label: '結合順',
  tool_join_audio_files_in_order_move_up: '上へ',
  tool_join_audio_files_in_order_move_down: '下へ',
  tool_join_audio_files_in_order_remove: '削除',
  tool_join_audio_files_in_order_convert: '結合',
  tool_join_audio_files_in_order_download: 'WAV を保存',
  tool_join_audio_files_in_order_sample: 'サンプルを読み込む',
  tool_join_audio_files_in_order_clear: 'クリア',
  tool_join_audio_files_in_order_advanced: '結合の注意',
  tool_join_audio_files_in_order_settings_hint:
    'クリップはリスト順に先頭から末尾へ結合されます。異なるサンプリングレートは先頭クリップに揃えます。連結のみ—重ね合わせでもクロスフェードでもありません。',
  tool_join_audio_files_in_order_progress: '結合の進捗',
  tool_join_audio_files_in_order_read: '読み取り',
  tool_join_audio_files_in_order_decode: 'デコード',
  tool_join_audio_files_in_order_join: '結合',
  tool_join_audio_files_in_order_write: '書き出し',
  tool_join_audio_files_in_order_done: '完了。結合 WAV をプレビューしてから保存してください。',
  tool_join_audio_files_in_order_failed: '結合に失敗しました。本数を減らすか、短い有効な音声を試してください。',
  tool_join_audio_files_in_order_elapsed: '{s} 秒経過',
  tool_join_audio_files_in_order_preview: '結合した WAV を聴く',
  tool_join_audio_files_in_order_result:
    '{files} 本 · {seconds} 秒 · {channels} ch · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: '結合トーン',
  tool_join_audio_files_in_order_empty: '先に音声を 2 本以上追加するか、サンプルを読み込んでください。',
  tool_join_audio_files_in_order_empty_state:
    'まだクリップがありません。ローカル音声を複数ドロップするか、「サンプルを読み込む」で短いトーン 2 本を入れます。リスト順に連結するだけで、同時に重ねません。',
  tool_join_audio_files_in_order_queue_count: 'キューに {n} 本',
  tool_join_audio_files_in_order_err_file: '対応する音声を少なくとも 2 本追加してください。',
  tool_join_audio_files_in_order_err_format:
    '非対応または破損した音声です。ブラウザがデコードできる WAV / MP3 / M4A / AAC / OGG を使ってください。',
  tool_join_audio_files_in_order_err_limit:
    '最大 20 本・各 40 MiB・モノラルまたはステレオ・結合後合計 20 分以内にしてください。',
  tool_join_audio_files_in_order_err_decode:
    'いずれかのファイルをデコードできませんでした。削除するか別の符号化を試してください。',
  tool_join_audio_files_in_order_err_encoder: '結合 WAV を書き出せませんでした。もう一度「結合」を試してください。',
  tool_join_audio_files_in_order_how_title: '音声ファイルを順番に結合する方法',
  tool_join_audio_files_in_order_how_body:
    'ローカルのクリップを追加し順を決め、「結合」して聴き、16-bit WAV を保存—アップロードしません。',
  tool_join_audio_files_in_order_how_item_1:
    '音声を 2 本以上追加（またはサンプルで短いトーン 2 本）。再度ドロップすると追加入力できます。',
  tool_join_audio_files_in_order_how_item_2:
    'リストの上へ / 下へ / 削除で、聴きたい順に並べ替えます。',
  tool_join_audio_files_in_order_how_item_3:
    '「結合」を押し、読み取り → デコード → 結合 → 書き出しの完了を待ちます。',
  tool_join_audio_files_in_order_how_item_4:
    '連続トラックをプレビューし、結果行を確認して「WAV を保存」します。',
  tool_join_audio_files_in_order_why_choose_title: 'この「順番に結合」ツールを選ぶ理由',
  tool_join_audio_files_in_order_why_choose_item_1: '保存前に本数・長さ・チャンネル・レート・出力 KiB を確認できます。',
  tool_join_audio_files_in_order_why_choose_item_2:
    'リスト順の連結という一つの作業に集中し、デコードできないクリップには正直な上限を示します。',
  tool_join_audio_files_in_order_why_choose_item_3:
    '読み取り・デコード・書き出しは端末内。処理のためにアップロードしません。',
  tool_join_audio_files_in_order_why_choose_item_4:
    'キューを変えると古いダウンロードが消えるため、古い WAV を誤保存しにくいです。',
  tool_join_audio_files_in_order_rules_title: '連結のルールとブラウザの正直な上限',
  tool_join_audio_files_in_order_rules_body:
    '毎回リスト順に先頭から末尾へ結合します。サンプリングレートは先頭クリップに揃えます。出力は 16-bit WAV。重ね合わせでもクロスフェードでも、動画抽出でもありません。',
  tool_join_audio_files_in_order_rules_item_1:
    'ローカル音声 2〜20 本、各 40 MiB まで。結合後は 20 分未満。チャンネルは 1 または 2。',
  tool_join_audio_files_in_order_rules_item_2:
    '本ページは連結のみ。同時に声と音楽を重ねず、曲間クロスフェードもしません。',
  tool_join_audio_files_in_order_rules_item_3:
    'タグはコピーしません。原本は上書きしません。成否はファイルごとのブラウザ・デコードに依存します。',
  tool_join_audio_files_in_order_rules_item_4:
    '結合後の切り出しは「音声クリップをトリムして書き出す」を。動画は先に音声を抽出してください。',
  tool_join_audio_files_in_order_example_title: '短いトーン 2 本を試す',
  tool_join_audio_files_in_order_example:
    '「サンプルを読み込む」は高さの異なる短い WAV トーン 2 本をキューに入れ、自動で結合します。音 A のあと音 B が続き、重なりはありません。プレビューは自動再生しません—聴くときは再生を押してください。',
  tool_join_audio_files_in_order_usecases_title: 'こんなときに',
  tool_join_audio_files_in_order_usecase_1:
    '複数のボイスメモを 1 本の連続トラックにしたい—順に追加、結合、WAV 保存。',
  tool_join_audio_files_in_order_usecase_2:
    '曲の区間やポッドキャスト章が別ファイルのとき、結合サイトへ上げずに 1 本書き出したい。',
  tool_join_audio_files_in_order_faq_q1: '2 本を同時に重ねるミックスと同じですか？',
  tool_join_audio_files_in_order_faq_a1:
    '違います。重ね合わせは同時再生（例：声＋BGM）です。本ページはリスト順に 1 本ずつつなげます。',
  tool_join_audio_files_in_order_faq_q2: '曲の間でクロスフェードしますか？',
  tool_join_audio_files_in_order_faq_a2:
    'しません。クロスフェードや DJ トランジションはありません。クリップは端と端で接します。クロスフェードは別作業です。',
  tool_join_audio_files_in_order_faq_q3: '結合順を変えられますか？',
  tool_join_audio_files_in_order_faq_a3:
    'できます。各行の上へ・下へ、または削除して再追加。結合は常に上から下のリスト順です。',
  tool_join_audio_files_in_order_faq_q4: 'サンプリングレートが違う場合は？',
  tool_join_audio_files_in_order_faq_a4:
    '後続クリップは先頭のレートに揃えてから連結します。チャンネルはモノラルまたはステレオのままです。',
  tool_join_audio_files_in_order_faq_q5: '音声はサーバーにアップロードされますか？',
  tool_join_audio_files_in_order_faq_a5:
    'されません。読み取り・デコード・書き出しはブラウザ内の端末で行います。初回読み込みにネットワークが必要で、オフライン利用は保証しません。',
  tool_join_audio_files_in_order_faq_q6: '動画から抽出した音声も結合できますか？',
  tool_join_audio_files_in_order_faq_a6:
    '先に「動画ファイルから音声を抽出する」でトラックを得てから、ここに追加してください。本ページは動画コンテナを結合入力として受け付けません。',
};
export default ja;
