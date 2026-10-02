import type { SiteLangDict } from '../../../types';

/**
 * 日本語：複数の MOV から音声を一括抽出（.mov のみ・逐次・ZIP・YouTube 不可）。
 * H1 は「複数movから音声抽出」「mov一括mp3」方向。
 */
const ja: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: '複数のMOVファイルから音声を一括抽出',
	tool_batch_extract_audio_from_mov_files_desc:
		'ローカル MOV のみキュー：1本ずつ抽出、失敗はスキップ、WAV/MP3 の ZIP。サーバーにアップロードしません。',
	tool_batch_extract_audio_from_mov_files_description:
		'ローカルの複数 MOV からブラウザで順次音声抽出し、WAV または MP3 の ZIP を保存します。手順：.mov を追加 → 抽出 → ZIP をダウンロード。例：「サンプルを読み込む」で短い合成 MOV を2本作り、音声をパック。各ファイルの上限は単体 MOV ツールと同じ demux+OPFS（OPFS あり約 5 GiB / 6 時間、なし約 1 GiB）。失敗行はスキップ、成功はパック。端末内のみ・非アップロード。YouTube 不可。1本だけなら「MOVファイルから音声を抽出」。MP4/WebM/MKV 混在は「動画ファイルから音声を一括抽出」。',
	tool_batch_extract_audio_from_mov_files_article:
		'スマホ書き出しの MOV フォルダは AAC 口トラックだけ欲しいことが多いです。本ページは .mov だけをキューし、他拡張子は追加時に拒否、メモリ安定のため1本ずつ抽出し、失敗を飛ばして成功分を ZIP に入れます。YouTube プレイリスト取得や混在コンテナ向けハブではありません。',
	tool_batch_extract_audio_from_mov_files_choose: 'MOVファイルを選択',
	tool_batch_extract_audio_from_mov_files_hint:
		'ローカル .mov 最大30本。MOV 以外は拒否—混在バッチ頁へ。1ファイル上限は単体 MOV ツールと同じ。',
	tool_batch_extract_audio_from_mov_files_list_label: 'MOVキュー',
	tool_batch_extract_audio_from_mov_files_convert: '抽出',
	tool_batch_extract_audio_from_mov_files_stop: '停止',
	tool_batch_extract_audio_from_mov_files_download: 'ZIPをダウンロード',
	tool_batch_extract_audio_from_mov_files_sample: 'サンプルを読み込む',
	tool_batch_extract_audio_from_mov_files_clear: 'クリア',
	tool_batch_extract_audio_from_mov_files_advanced: '書き出し形式（任意）',
	tool_batch_extract_audio_from_mov_files_format_label: '出力形式',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV（16ビット）',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'MP3ビットレート',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'短い MOV は既定で WAV。大きなファイルは行ごとにストリーミング MP3 になることがあります。URL/YouTube 不可。',
	tool_batch_extract_audio_from_mov_files_progress: 'MOV一括抽出の進捗',
	tool_batch_extract_audio_from_mov_files_read: '読み取り',
	tool_batch_extract_audio_from_mov_files_decode: 'デマルチ',
	tool_batch_extract_audio_from_mov_files_extract: '抽出',
	tool_batch_extract_audio_from_mov_files_write: '書き込み',
	tool_batch_extract_audio_from_mov_files_pack: 'ZIPにパック',
	tool_batch_extract_audio_from_mov_files_done: '完了。抽出音声の ZIP をダウンロードしてください。',
	tool_batch_extract_audio_from_mov_files_failed: '一括抽出に失敗しました。壊れた MOV を外すか本数を減らしてください。',
	tool_batch_extract_audio_from_mov_files_elapsed: '経過 {s} 秒',
	tool_batch_extract_audio_from_mov_files_preview: '一括結果',
	tool_batch_extract_audio_from_mov_files_result: '音声 {n} 件をパック · ZIP {output} KiB',
	tool_batch_extract_audio_from_mov_files_partial: '成功 {ok}、失敗 {fail} · ZIP には成功分のみ（{output} KiB）',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'MOV を1本以上追加するか、サンプルを読み込んでください。',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'まだ MOV がありません。ローカル .mov をドロップするかサンプルを読み込んでください。YouTube や MOV 以外は不可。',
	tool_batch_extract_audio_from_mov_files_remove: '削除',
	tool_batch_extract_audio_from_mov_files_queue_count: 'キュー内 MOV {n} 本',
	tool_batch_extract_audio_from_mov_files_status_pending: '待機',
	tool_batch_extract_audio_from_mov_files_status_running: '抽出中…',
	tool_batch_extract_audio_from_mov_files_status_ok: '完了',
	tool_batch_extract_audio_from_mov_files_status_fail: '失敗',
	tool_batch_extract_audio_from_mov_files_status_stopped: '停止',
	tool_batch_extract_audio_from_mov_files_err_file: '.mov のみ追加できます。',
	tool_batch_extract_audio_from_mov_files_err_format:
		'.mov のみ受け付けます。MP4・WebM・MKV は「動画ファイルから音声を一括抽出」へ。',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'demux 上限超過の MOV（OPFS あり約 5 GiB / 6 時間、なし約 1 GiB）。その行はスキップ。',
	tool_batch_extract_audio_from_mov_files_err_container:
		'demux 可能な ISOBMFF MOV ではありません。その行はスキップ。',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'この経路で解けない音声コーデックの MOV です。その行はスキップ。',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'扱えないチャンネル配置の MOV です。その行はスキップ。',
	tool_batch_extract_audio_from_mov_files_err_decode: 'ブラウザが MOV から音声をデコードできませんでした。その行はスキップ。',
	tool_batch_extract_audio_from_mov_files_err_encoder: '音声を書き出せませんでした。形式を確認して再抽出してください。',
	tool_batch_extract_audio_from_mov_files_err_zip: 'ZIP を作れませんでした。MOV 本数を減らしてください。',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'キュー上限は MOV 30 本です。',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'このブラウザではサンプル MOV を作れません。自分の .mov をドロップしてください。',
	tool_batch_extract_audio_from_mov_files_err_unsupported: '抽出に必要な Web Audio がありません。',
	tool_batch_extract_audio_from_mov_files_err_empty: 'MOV キューから使える音声がありません。',
	tool_batch_extract_audio_from_mov_files_forced_mp3: '長い/大きな MOV のその行はストリーミング MP3 になりました。',
	tool_batch_extract_audio_from_mov_files_how_title: '複数 MOV から音声を一括抽出する方法',
	tool_batch_extract_audio_from_mov_files_how_body:
		'ローカル MOV をキューし、1本ずつ抽出し、ZIP をダウンロード—アップロードも URL 貼り付けも不要。',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'ローカル .mov を複数選ぶか、「サンプルを読み込む」で短い合成 MOV を2本用意します。',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'MP3 が必要なら「書き出し形式」を開き、必要ならビットレートを設定します。',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'「抽出」を押し、ファイルごとに 読み取り → デマルチ → 抽出 → 書き込み を確認。「停止」で残りをキャンセル。',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'HUD 完了後に「ZIPをダウンロード」。失敗行はスキップ、1件以上成功すればパックされます。',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'この MOV 一括抽出を選ぶ理由',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'MOV のみ受付なので、「mov一括mp3」フォルダに MP4/WebM/MKV が黙って混ざりません。',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'ISOBMFF 内 AAC のスマホ書き出しが数 GiB でも、逐次抽出でメモリを安定させます。',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'行ごとの待機/抽出中/完了/失敗表示で、1本の不良 MOV が ZIP 全体を壊しません。',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'「停止」で途中打ち切り。実アーカイブができるまで ZIP ダウンロードは無効です。',
	tool_batch_extract_audio_from_mov_files_rules_title: 'MOVキュー・逐次抽出・ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'各 MOV を分類し単独抽出し ZIP に格納。部分成功も残します。YouTube→MP3 でも無音動画書き出しでもありません。',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'.mov 最大30本。各ファイルは demux 上限（OPFS あり約 5 GiB / 6 時間）に従います。',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'MOV 以外は入キュー時に拒否—MP4/WebM/MKV は混在ハブへ。',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'1行の失敗はその行だけスキップ。1本でも成功すればパックします。',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'処理は端末のブラウザ内。サーバーへは上げません。',
	tool_batch_extract_audio_from_mov_files_example_title: '実際の MOV 一括を試す',
	tool_batch_extract_audio_from_mov_files_example:
		'サンプル読み込みで短い音付き MOV を2本作り（MediaRecorder が H.264+AAC 対応時）、抽出して ZIP に2音声を入れます。',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'こんなときに',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'スマホ MOV フォルダをクラウドなしで「mov一括mp3」風の音声 ZIP にしたいとき。',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'1週間分の画面録画 MOV を共有用音声にしたい—YouTube からではなく端末上で。',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'カメラ書き出し MOV から AAC だけまとめて抜き、原本はそのまま残したいとき。',
	tool_batch_extract_audio_from_mov_files_faq_q1: 'YouTube の URL や再生リストを貼れますか？',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'いいえ。ドロップまたは選択したローカル .mov のみ。先に端末へ保存してください。',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'MOV が1本だけですがこのページを使うべき？',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'1本は「MOVファイルから音声を抽出」へ。本ページは複数 MOV と ZIP 向けです。',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'フォルダに .mov と .mp4 が混在しています',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'ここは .mov のみ。「動画ファイルから音声を一括抽出」で混在コンテナを扱えます。',
	tool_batch_extract_audio_from_mov_files_faq_q4: 'オンラインの「mov一括mp3」ですか？',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'ローカル MOV 向けの同趣旨：AAC を demux し端末上で MP3/WAV の ZIP に—URL 取得なし。',
	tool_batch_extract_audio_from_mov_files_faq_q5: 'なぜ1本ずつ処理するのですか？',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'同時デコードはメモリを急騰させます。逐次なら ZIP に載せるのは現在ファイルの音声だけです。',
	tool_batch_extract_audio_from_mov_files_faq_q6: '動画はサーバーにアップロードされますか？',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'いいえ。読み取り・demux・ZIP 作成は端末のブラウザ内で完結します。',
};
export default ja;
