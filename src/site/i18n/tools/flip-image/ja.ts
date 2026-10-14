/**
 * i18n tool shard (flip-image / ja).
 * 端末内 Canvas で左右・上下ミラー反転；詳細設定で出力形式；金標進捗 HUD。
 * キー集合は en.ts と同一。日本語の検索語に合わせて独立に書き直し（英模直訳禁止）。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語文案辞書（画像反転ツールの UI・説明・FAQ 全文）。 */
const ja: SiteLangDict = {
	tool_flip_image_title: '画像を反転 — 左右または上下ミラー',
	tool_flip_image_desc: '端末内で写真を左右・上下にミラーし、JPEG / WebP / PNG をダウンロード。サーバーに上げません。',
	tool_flip_image_description:
		'ブラウザだけで画像を左右反転・上下反転。「反転する」のあと「ダウンロード」で JPEG/WebP/PNG を保存。手順は選ぶ→方向を付ける→反転する→保存。例：A/B/C/D の色ブロック見本を水平反転すると A が右側へ移ります。処理はタブ内完結、ファイルは端末から出ません。',
	tool_flip_image_choose_file: '画像を選ぶ',
	tool_flip_image_drop_hint: 'または JPEG・PNG・WebP・GIF をここにドロップ。処理はこのタブ内だけです。',
	tool_flip_image_flip: '反転する',
	tool_flip_image_download: 'ダウンロード',
	tool_flip_image_sample: 'サンプルを読み込む',
	tool_flip_image_clear: 'クリア',
	tool_flip_image_flip_h: '左右反転',
	tool_flip_image_flip_v: '上下反転',
	tool_flip_image_advanced: '詳細設定（任意）',
	tool_flip_image_format_label: '出力形式',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint: 'WebP は小さく透明度も残せます。PNG はロスレス。JPEG は背景色で透明を埋めます。',
	tool_flip_image_quality_label: '画質',
	tool_flip_image_quality_hint: 'JPEG と WebP のみ有効。PNG はこのスライダーを無視します。',
	tool_flip_image_jpeg_bg_label: 'JPEG の背景色',
	tool_flip_image_jpeg_bg_hint: 'JPEG 書き出し前に透明画素をこの色で塗りつぶします。既定は白です。',
	tool_flip_image_preview_label: 'プレビュー',
	tool_flip_image_progress: '画像を反転しています…',
	tool_flip_image_step_decode: 'デコード',
	tool_flip_image_step_flip: '画素を反転',
	tool_flip_image_step_encode: 'エンコード',
	tool_flip_image_decode_step: '画像をデコードしています…',
	tool_flip_image_flip_step: 'スケール変換を適用しています…',
	tool_flip_image_encode_step: '{fmt} をエンコードしています…',
	tool_flip_image_elapsed: '経過 {s} 秒',
	tool_flip_image_empty: '先に画像を選んでください。',
	tool_flip_image_no_flip: '「左右反転」または「上下反転」（あるいは両方）を選んでください。',
	tool_flip_image_err_decode: '画像をデコードできませんでした。JPEG / PNG / WebP をお試しください。',
	tool_flip_image_err_encode: '書き出せませんでした。画像を小さくするか、形式を変えてください。',
	tool_flip_image_warn_large: '大きなファイル（25 MB 超）— 時間がかかることがあります。',
	tool_flip_image_warn_edge: '辺が約 8192 px を超えると、ブラウザによっては失敗することがあります。',
	tool_flip_image_warn_animation: 'アニメ GIF：先頭フレームのみ使います。',
	tool_flip_image_status_working: '処理中…',
	tool_flip_image_status_done: '完了 — 「ダウンロード」で保存してください。',
	tool_flip_image_stats_tpl: '反転済み {w}×{h} → {fmt}（{bytes}）',
	tool_flip_image_how_title: '画像を反転する手順',
	tool_flip_image_how_body:
		'キャンバス上で画素を本当にミラーし直します。CSS だけの見た目反転ではありません。書き出しは詳細設定の形式で再エンコードします。',
	tool_flip_image_how_item_1: '画像を選ぶか、JPEG・PNG・WebP・GIF を枠へドロップします。',
	tool_flip_image_how_item_2: '「左右反転」や「上下反転」にチェック。プレビューはその場で変わります。',
	tool_flip_image_how_item_3: '必要なら「詳細設定」で JPEG / WebP / PNG、画質、JPEG 背景色を選びます。',
	tool_flip_image_how_item_4: '「反転する」を押し、進捗が終わったら「ダウンロード」します。',
	tool_flip_image_why_choose_title: '画像を反転を使う理由',
	tool_flip_image_why_choose_item_1: '左右と上下を一度に指定でき、矩形写真では 180° 相当のコーナー入れ替えになります。',
	tool_flip_image_why_choose_item_2: '書き出し前にライブプレビューで、印がどちら側へ移るか確認できます。',
	tool_flip_image_why_choose_item_3: '詳細設定で JPEG / WebP / PNG と画質・JPEG マット色を選べます。',
	tool_flip_image_why_choose_item_4: '巨大ファイル、超長い辺、アニメ GIF（先頭フレームのみ）には柔らかい警告が出ます。',
	tool_flip_image_why_choose_item_5: 'このタブだけで完結し、写真は当社サーバーへアップロードされません。',
	tool_flip_image_rules_title: 'ルール',
	tool_flip_image_rules_body: '元サイズのキャンバス上で左右／上下にミラーし、その結果をダウンロード用に書き出します。',
	tool_flip_image_rules_item_1: '左右：縦軸を境に左と右を入れ替えます。',
	tool_flip_image_rules_item_2: '上下：横軸を境に上と下を入れ替えます。',
	tool_flip_image_rules_item_3: '両方オン＝矩形画像では 180° 回転と同等（四隅が入れ替わる）。',
	tool_flip_image_rules_item_4: 'アニメ GIF は先頭フレームのみ。PNG/WebP は透明度を維持。JPEG は背景色で透明を埋めます。',
	tool_flip_image_rules_item_5: '反転自体は画素の並べ替えだけ。JPEG/WebP 保存時は再エンコードでバイトが変わり得ます。',
	tool_flip_image_example_title: '例',
	tool_flip_image_example:
		'「サンプルを読み込む」で 480×320、A B / C D 付きの色ブロックが出ます。既定の左右反転では A が右側へ移ります。「反転する」→「ダウンロード」。上下も付けて再度「反転する」と 180° 相当が見られます。',
	tool_flip_image_usecases_title: 'こんなときに',
	tool_flip_image_usecase_1: '投稿前にミラー自撮りを直し、シャツの文字が読める向きにする。',
	tool_flip_image_usecase_2: '商品モックの左右を入れ替え、ボタンや文言を好みの側へ置く。',
	tool_flip_image_usecase_3: 'スキャンが上下逆に撮れたページを、上下反転で正立させる。',
	tool_flip_image_usecase_4: '印刷用のミラー配置を、デスクトップ編集ソフトを開かずに用意する。',
	tool_flip_image_faq_q1: '画像はアップロードされますか？',
	tool_flip_image_faq_a1:
		'いいえ。デコード・反転・書き出しはこのブラウザタブ内で行います。必要なライブラリは本サイト同域の vendor から読み込みます。ファイルのバイトは端末に残り、サーバーには上がりません。',
	tool_flip_image_faq_q2: '画質は落ちますか？',
	tool_flip_image_faq_a2:
		'反転そのものは画素の並べ替えだけです。JPEG や WebP で保存すると再エンコードされ、バイトが変わることがあります。ロスレスにしたいときは詳細設定で PNG を選んでください。',
	tool_flip_image_faq_q3: '反転と回転の違いは？',
	tool_flip_image_faq_a3:
		'反転は軸に対するミラー、回転は角度で回す操作です。このページはミラー専用です。90° 刻みが必要なら回転ツールを使ってください。',
	tool_flip_image_faq_q4: '左右と上下を同時にできますか？',
	tool_flip_image_faq_a4:
		'できます。「左右反転」と「上下反転」を両方オンにしてください。矩形写真では 180° 回転と同等です。',
	tool_flip_image_faq_q5: 'アニメ GIF はどうなりますか？',
	tool_flip_image_faq_a5:
		'先頭フレームだけをデコードして反転します。ダウンロード結果に複数フレームのアニメは残りません。',
	tool_flip_image_faq_q6: 'JPEG がプレビューと違って見えるのはなぜ？',
	tool_flip_image_faq_a6:
		'JPEG に透明度はありません。エンコード前に透明画素を JPEG 背景色で埋めます。このページのプレビューは透明をチェッカーで示します。',
	tool_flip_image_faq_q7: '画像反転と切り抜き・グレースケールの違いは？',
	tool_flip_image_faq_a7:
		'このページはミラーだけです。切り抜きは端を削り、グレースケールは色を落とします。それらには関連の切り抜き／グレースケールツールを使ってください。',
	tool_flip_image_article:
		'端末内キャンバスで左右・上下ミラー。画素を描き直し、CSS だけの反転ではありません。',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

export default ja;
