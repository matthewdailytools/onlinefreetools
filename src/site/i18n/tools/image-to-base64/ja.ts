/**
 * i18n tool shard (image-to-base64 / ja)。
 * 画像 → Base64（data URL）エンコードと Base64 → 画像デコードを同じ画面で切り替え。端末内で処理しサーバーにアップロードしない。
 * キー集合は en.ts と完全一致させること。ボタン語：エンコード / デコード / コピー / ダウンロード / サンプルを読み込む / クリア。
 * プレースホルダーはそのまま：{mime} {chars} {bytes} {s}。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語文案辞書（「画像 Base64」「Base64 画像 変換」など日本の検索語に合わせて書き直し）。 */
const ja: SiteLangDict = {
	tool_image_to_base64_title: '画像を Base64 に変換 — ローカルでエンコード／デコード',
	tool_image_to_base64_desc: '画像を Base64・data URL に変換、Base64 から画像にも戻せます。サーバーにアップロードしません。',
	tool_image_to_base64_description:
		'画像を Base64（data URL）に変換し、Base64 文字列から画像へ戻すこともできます。処理は端末内のブラウザで行い、サーバーにはアップロードしません。手順：画像を選択→「エンコード」→「コピー」または「ダウンロード」。戻すときは貼り付けて「デコード」。例：サンプル PNG → data:image/png;base64,… を HTML の img にそのまま使えます。',
	tool_image_to_base64_mode_label: 'モード',
	tool_image_to_base64_tab_encode: 'エンコード',
	tool_image_to_base64_tab_decode: 'デコード',
	tool_image_to_base64_choose_file: '画像を選択',
	tool_image_to_base64_drop_hint: 'JPEG・PNG・WebP・GIF をここにドロップしても OK。処理はこのタブの中だけで行います。',
	tool_image_to_base64_encode: 'エンコード',
	tool_image_to_base64_decode_btn: 'デコード',
	tool_image_to_base64_copy: 'コピー',
	tool_image_to_base64_copy_done: 'コピーしました',
	tool_image_to_base64_download: 'ダウンロード',
	tool_image_to_base64_sample: 'サンプルを読み込む',
	tool_image_to_base64_clear: 'クリア',
	tool_image_to_base64_advanced: '詳細設定（任意）',
	tool_image_to_base64_strip_prefix: 'data: プレフィックスを外す（Base64 本体のみ）',
	tool_image_to_base64_strip_hint: 'オフ（既定）なら data:image/…;base64, 付きで、そのまま HTML に貼れます。オンにするとカンマ以降の Base64 本体だけをコピーします。',
	tool_image_to_base64_decode_mime_label: 'プレフィックスなし Base64 の既定 MIME',
	tool_image_to_base64_decode_mime_hint: '貼り付けた文字列に data: が付いていないときだけ使います。data URL は自身の MIME を優先します。',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'data:image/…;base64,… またはプレフィックスなしの Base64 を貼り付け',
	tool_image_to_base64_output_label: '出力',
	tool_image_to_base64_preview_label: 'プレビュー',
	tool_image_to_base64_progress: '処理中…',
	tool_image_to_base64_step_read: 'ファイル読込',
	tool_image_to_base64_step_encode: 'エンコード',
	tool_image_to_base64_step_ready: '完了',
	tool_image_to_base64_read_step: 'ファイルを読み込んでいます…',
	tool_image_to_base64_encode_step: 'data URL を生成しています…',
	tool_image_to_base64_ready_step: '出力の準備ができました',
	tool_image_to_base64_decode_step_parse: '解析',
	tool_image_to_base64_decode_step_blob: '画像を復元',
	tool_image_to_base64_decode_step_ready: '完了',
	tool_image_to_base64_parse_step: 'Base64 を解析しています…',
	tool_image_to_base64_blob_step: '画像データを復元しています…',
	tool_image_to_base64_elapsed: '経過 {s} 秒',
	tool_image_to_base64_empty: '先に画像を選択してください。',
	tool_image_to_base64_empty_decode: '先に data URL か Base64 文字列を貼り付けてください。',
	tool_image_to_base64_err_decode: 'デコードできませんでした。画像の data URL または正しい Base64 か確認してください。',
	tool_image_to_base64_err_encode: 'このファイルはエンコードできませんでした。JPEG・PNG・WebP でお試しください。',
	tool_image_to_base64_err_invalid: 'Base64 または data URL の形式が正しくありません。',
	tool_image_to_base64_warn_large: 'ファイルが大きめです（25 MB 超）。時間がかかったりメモリを多く使ったりする場合があります。',
	tool_image_to_base64_status_working: '処理中…',
	tool_image_to_base64_status_done: '完了 — 文字列をコピーするか、「ダウンロード」で保存できます。',
	tool_image_to_base64_status_decoded: '完了 — プレビューを確認し、「ダウンロード」で画像を保存してください。',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} 文字 · {bytes}',
	tool_image_to_base64_how_title: '画像を Base64 に変換する手順',
	tool_image_to_base64_how_body:
		'エンコードは画像ファイルを丸ごと data URL 文字列に変えます。デコードは data URL でもプレフィックスなしの Base64 でも受け付け、後者は「詳細設定」の既定 MIME で画像として扱います。どちらもブラウザ内で完結し、サーバーにはアップロードしません。',
	tool_image_to_base64_how_item_1: '「エンコード」タブのまま「画像を選択」（またはドロップ）し、「エンコード」を押します。',
	tool_image_to_base64_how_item_2: 'API に Base64 本体だけを渡したいときは、「詳細設定」で data: プレフィックスを外します。',
	tool_image_to_base64_how_item_3: '「コピー」でクリップボードへ、または「ダウンロード」で元の画像を保存します。',
	tool_image_to_base64_how_item_4: 'Base64 から画像に戻すときは「デコード」タブで文字列を貼り付けて「デコード」し、「ダウンロード」で保存します。',
	tool_image_to_base64_why_choose_title: '画像 Base64 変換ツールを使う理由',
	tool_image_to_base64_why_choose_item_1: 'エンコード後もデコード後もすぐにプレビューが出るので、長い文字列だけでなく実際の画像で確認できます。',
	tool_image_to_base64_why_choose_item_2: '画像→Base64 と Base64→画像をタブ一つで切り替えられ、別のツールを探す必要がありません。',
	tool_image_to_base64_why_choose_item_3: 'data: プレフィックスの有無を切り替えられ、Base64 本体しか受け付けない API 項目にもそのまま渡せます。',
	tool_image_to_base64_why_choose_item_4: '25 MB を超える大きなファイルは事前に警告し、ブラウザが固まる前に気づけます。',
	tool_image_to_base64_why_choose_item_5: 'ファイルは端末内のこのタブで処理し、サーバーにはアップロードしません。',
	tool_image_to_base64_rules_title: '変換のルール',
	tool_image_to_base64_rules_body: 'エンコードは元ファイルのバイトをそのまま data URL にし、再圧縮はしません。デコードは文字列から画像ファイルを組み立て直してダウンロードできるようにします。',
	tool_image_to_base64_rules_item_1: '既定の出力は data:image/…;base64,… 形式のフル文字列で、HTML の img src にそのまま使えます。',
	tool_image_to_base64_rules_item_2: 'プレフィックスを外すと最初のカンマより前をすべて削除し、Base64 本体だけが残ります。',
	tool_image_to_base64_rules_item_3: 'プレフィックスなしの Base64 は「詳細設定」の既定 MIME（初期値 image/png）として扱います。',
	tool_image_to_base64_rules_item_4: '使えない文字を含む文字列や途中で切れた文字列はエラーを表示します。何もアップロードされません。',
	tool_image_to_base64_rules_item_5: 'アニメーション GIF はファイル全体をまとめてエンコードします。フレームの分割・編集はしません。',
	tool_image_to_base64_example_title: '例',
	tool_image_to_base64_example:
		'「サンプルを読み込む」を押すと「Base64」と書かれた 320×200 の PNG を作って自動で「エンコード」し、出力欄に data:image/png;base64,… が入ります。これを HTML の <img src="…"> に貼れば表示できます。「デコード」タブで同じ文字列を貼って「デコード」すると、decoded.png として「ダウンロード」できます。',
	tool_image_to_base64_usecases_title: 'こんなときに',
	tool_image_to_base64_usecase_1: 'API のレスポンスに入っていた Base64 を画像に戻して、中身を確かめたいとき。',
	tool_image_to_base64_usecase_2: '小さなアイコンやロゴを HTML・CSS に埋め込み、画像リクエストを 1 本減らしたいとき。',
	tool_image_to_base64_usecase_3: 'メールや Markdown に埋め込まれた data URL 画像が正しく表示されない原因を調べるとき。',
	tool_image_to_base64_usecase_4: 'data: 付きを受け付けないフォーム項目に、Base64 本体だけを渡したいとき。',
	tool_image_to_base64_faq_q1: '画像はサーバーにアップロードされますか？',
	tool_image_to_base64_faq_a1:
		'いいえ。読み込み・エンコード・デコードはすべてブラウザのタブ内で行います。ファイルは端末から出ず、サーバーにはアップロードしません。',
	tool_image_to_base64_faq_q2: 'data URL とプレフィックスなし Base64 の違いは？',
	tool_image_to_base64_faq_a2:
		'data URL は data:image/png;base64, に本体が続く形で、HTML にそのまま使えます。プレフィックスなしは本体だけです。こちらが必要なら「詳細設定」で data: プレフィックスを外してからコピーしてください。',
	tool_image_to_base64_faq_q3: 'サイズの大きい画像も変換できますか？',
	tool_image_to_base64_faq_a3:
		'できますがメモリを多く使います。Base64 にすると元より約 33% 大きくなるため、25 MB を超える場合は先に圧縮やリサイズをおすすめします。',
	tool_image_to_base64_faq_q4: 'デコード時の画像形式（MIME）はどう決まりますか？',
	tool_image_to_base64_faq_a4:
		'data URL ならその中の MIME を使います。プレフィックスなしの Base64 は「詳細設定」の既定 MIME（初期値 image/png）を使います。',
	tool_image_to_base64_faq_q5: 'GIF アニメも Base64 にできますか？',
	tool_image_to_base64_faq_a5:
		'できます。ファイル全体を data URL にするのでアニメーションも保たれます。フレームを分けたり編集したりはしません。',
	tool_image_to_base64_faq_q6: '画像形式の変換ツールとの違いは？',
	tool_image_to_base64_faq_a6:
		'このツールが作るのはテキスト文字列（またはそこから戻した画像）です。JPEG・PNG・WebP 同士をファイルのまま変換したいなら、画像形式変換ツールを使ってください。',
	tool_image_to_base64_faq_q7: '「コピー」が押せない・空になるのはなぜ？',
	tool_image_to_base64_faq_a7:
		'「コピー」はエンコード結果があるときだけ使えます。画像を選んで「エンコード」してからコピーしてください。デコードした画像は「ダウンロード」で保存します。',
	tool_image_to_base64_article:
		'エンコードは画像を data URL として読み込み、デコードは data URL とプレフィックスなし Base64 の両方に対応（既定 MIME は変更可）。',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — データ URL',
};

/** 既定エクスポート：merge:tools でサイトの ja 言語パックに統合される。 */
export default ja;
