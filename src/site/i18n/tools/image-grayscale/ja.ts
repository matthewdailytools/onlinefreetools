/**
 * i18n tool shard (image-grayscale / ja).
 * Native Japanese rewrite (2026-10-14): search-oriented copy for 画像 白黒 変換 / モノクロ /
 * グレースケール, matching the English master’s key set, formulas, sample values, and UI.
 */
import type { SiteLangDict } from '../../../types';

/** Japanese strings for the image grayscale converter. */
const ja: SiteLangDict = {
	tool_image_grayscale_title: '画像を白黒に変換 — 写真をグレースケール（モノクロ）にする方法も選べるツール',
	tool_image_grayscale_desc: 'ブラウザで写真を白黒・モノクロにし、方式を選んでダウンロード。',
	tool_image_grayscale_description:
		'カラー写真を白黒・グレースケール（モノクロ）に変換する手順：画像を選び、輝度・平均・明度または単一チャンネルを選び、強度を調整して「白黒に変換」し、JPEG / WebP / PNG で保存します。計算の公式と純色帯の例を掲載。彩度を下げた半脱色もでき、処理はこのブラウザのタブ内で完結しサーバーにはアップロードしません。',
	tool_image_grayscale_choose_file: '画像を選ぶ',
	tool_image_grayscale_drop_hint: 'JPEG、PNG、WebP、GIF をここにドロップしても構いません。',
	tool_image_grayscale_convert: '白黒に変換',
	tool_image_grayscale_download: 'ダウンロード',
	tool_image_grayscale_sample: 'サンプルを読み込む',
	tool_image_grayscale_clear: 'クリア',
	tool_image_grayscale_method_label: 'グレースケール方式',
	tool_image_grayscale_method_luma601: '輝度 — Rec.601（推奨）',
	tool_image_grayscale_method_luma709: '輝度 — Rec.709 / sRGB',
	tool_image_grayscale_method_average: '平均値（R、G、B）',
	tool_image_grayscale_method_lightness: '明度（最大 + 最小）÷ 2',
	tool_image_grayscale_method_red: '赤チャンネルのみ（赤フィルター風）',
	tool_image_grayscale_method_green: '緑チャンネルのみ',
	tool_image_grayscale_method_blue: '青チャンネルのみ',
	tool_image_grayscale_method_hint: '輝度は目で感じる明るさに近いです。切り替えるとプレビューがすぐ更新されます。',
	tool_image_grayscale_amount_label: '強度',
	tool_image_grayscale_amount_hint: '100% で完全な白黒。下げると色が少し残り、彩度を下げたような見た目になります。',
	tool_image_grayscale_show_original: '元画像を表示',
	tool_image_grayscale_advanced: '詳細設定（任意）',
	tool_image_grayscale_format_label: '出力形式',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP は小さく透明度も残せます。PNG は可逆。JPEG は背景色が必要です。',
	tool_image_grayscale_quality_label: '画質',
	tool_image_grayscale_quality_hint: 'JPEG と WebP のみ。PNG では無視されます。',
	tool_image_grayscale_jpeg_bg_label: 'JPEG の背景色',
	tool_image_grayscale_jpeg_bg_hint: 'JPEG 書き出し前に透明部分を塗りつぶします。初期値は白です。',
	tool_image_grayscale_preview_label: 'プレビュー',
	tool_image_grayscale_progress: '白黒に変換しています…',
	tool_image_grayscale_step_decode: '読み取り',
	tool_image_grayscale_step_gray: '画素変換',
	tool_image_grayscale_step_encode: '書き出し',
	tool_image_grayscale_decode_step: '画像を読み込んでいます…',
	tool_image_grayscale_gray_step: '各画素を再計算しています…',
	tool_image_grayscale_encode_step: '{fmt} として保存しています…',
	tool_image_grayscale_elapsed: '経過 {s} 秒',
	tool_image_grayscale_empty: '先に画像を選んでください。',
	tool_image_grayscale_err_decode: '画像として開けませんでした。JPEG、PNG、WebP をお試しください。',
	tool_image_grayscale_err_encode: '保存できませんでした。画像を小さくするか、別の形式にしてください。',
	tool_image_grayscale_warn_large: '大きなファイル（25 MB 超）— 変換に時間がかかることがあります。',
	tool_image_grayscale_warn_edge: '一辺が約 8,192 ピクセルを超えています — ブラウザによっては処理に失敗します。',
	tool_image_grayscale_warn_animation: 'アニメーション GIF：最初のフレームだけ変換します。',
	tool_image_grayscale_status_working: '処理中…',
	tool_image_grayscale_status_done: '完了 — 「ダウンロード」で保存してください。',
	tool_image_grayscale_stats_tpl: '{w}×{h} px · {method} → {fmt}（{bytes}）',
	tool_image_grayscale_how_title: '画像を白黒にする手順',
	tool_image_grayscale_how_body:
		'各画素の赤・緑・青を一つの灰色値に置き換え、R = G = B にします。その灰色の求め方が方式ごとに違うため、同じ写真でも明るさや平坦さが変わります。',
	tool_image_grayscale_how_item_1: '写真を選ぶか、枠へドロップします。',
	tool_image_grayscale_how_item_2: 'グレースケール方式と強度を選び、「元画像を表示」で比較できます。',
	tool_image_grayscale_how_item_3: '「白黒に変換」を押し、進捗バーが終わるのを待ちます。',
	tool_image_grayscale_how_item_4: '「ダウンロード」を押します。PNG・JPEG や画質を変えるときは先に詳細設定を開いてください。',
	tool_image_grayscale_why_choose_title: 'この画像を白黒に変換ツールを使う理由',
	tool_image_grayscale_why_choose_item_1:
		'強度スライダーで、完全なモノクロだけでなく、彩度を下げたような半脱色の見た目にもできます。',
	tool_image_grayscale_why_choose_item_2:
		'方式は 7 つ。サンプルの純赤は Rec.601 輝度で 76、単純平均では 85。明度では赤・緑・青・黄がすべて同じ 128 の灰になります。',
	tool_image_grayscale_why_choose_item_3:
		'単一チャンネルは白黒フィルターに近い効果：赤は青空を暗くし肌をなめらかに、青は空を明るくしそばかすを際立たせます。',
	tool_image_grayscale_why_choose_item_4: '画素そのものを書き換えるので、ダウンロード後はどのアプリでも白黒のままです（CSS フィルターや表示設定とは違います）。',
	tool_image_grayscale_why_choose_item_5: 'PNG と WebP では透明度を維持。処理はこのブラウザのタブ内で行い、サーバーへはアップロードしません。',
	tool_image_grayscale_rules_title: '使用するグレースケールの計算式',
	tool_image_grayscale_rules_body: 'R、G、B は画素の 0–255 の値。結果 Y を三チャンネルすべてに書き込みます。',
	tool_image_grayscale_rules_item_1: 'Rec.601 輝度：Y = 0.299 R + 0.587 G + 0.114 B — 従来のテレビ／JPEG の重みで、色の見た目の明るさに近いです。',
	tool_image_grayscale_rules_item_2: 'Rec.709 輝度：Y = 0.2126 R + 0.7152 G + 0.0722 B — HD 映像の重みで、CSS grayscale() も同じです。多くの編集ソフトと同様、保存された sRGB 値にそのまま適用し、ガンマ線形化はしません。',
	tool_image_grayscale_rules_item_3: '平均：Y = (R + G + B) ÷ 3。明度：Y = (最大 + 最小) ÷ 2。チャンネル方式は R、G、B のいずれかだけをコピーします。',
	tool_image_grayscale_rules_item_4: '強度 s：新しい値 = 元の値 + (Y − 元の値) × s。100% ですべて灰、50% で色が灰へ半分進みます。',
	tool_image_grayscale_rules_item_5: 'アルファ（透明度）はそのまま。JPEG は背景色で埋めます。アニメ GIF は最初のフレームのみ。保存時に再エンコードします。',
	tool_image_grayscale_example_title: '例',
	tool_image_grayscale_example:
		'サンプル上部は純赤・緑・青・黄の帯、下は虹の帯です。Rec.601 では 76、150、29、226 と四段階のはっきりした灰に。Rec.709 は 54、182、18、237。平均は 85、85、85、170 で赤緑青が同じ灰に寄り、明度では四つとも 128。方式を切り替えてプレビューを見てから、「白黒に変換」→「ダウンロード」してください。',
	tool_image_grayscale_usecases_title: 'こんなときに',
	tool_image_grayscale_usecase_1: 'ポートレートや SNS、レトロなモノクロ風 — 赤チャンネルでフィルムの赤フィルターに近い感じを試せます。',
	tool_image_grayscale_usecase_2: 'モノクロレーザープリンタや新聞用の印刷前に、色が灰でどう分かれるか確認する。',
	tool_image_grayscale_usecase_3: 'チャート・ロゴ・UI の配色チェック：二つの色が同じ灰になると、色覚の違いがある人には区別しづらくなります。',
	tool_image_grayscale_usecase_4: 'スキャンや書類：グレースケール化で紙の色かぶりを除き、ファイルを単純に保てます。',
	tool_image_grayscale_faq_q1: 'どのグレースケール方式を選べばよいですか？',
	tool_image_grayscale_faq_a1:
		'写真ならまず Rec.601 輝度から。緑を重く、青を軽く扱い、見た目の明るさに近いです。Rec.709 は緑がやや明るめ。平均と明度は単純ですが、色の多い画像は平坦になりがちです。意図的なフィルター感が欲しいときだけ単一チャンネルを使ってください。',
	tool_image_grayscale_faq_q2: 'ダウンロードしたファイルは本物のグレースケールですか？サイズは小さくなりますか？',
	tool_image_grayscale_faq_a2:
		'各画素の R、G、B が等しいので、表示も印刷も純灰です。ブラウザは単一チャンネルではなく通常の RGB として保存するため、容量の減少は控えめです — 多くは PNG で目立ちます。8 ビットのグレースケール色モードが必要なら画像編集ソフトで保存してください。',
	tool_image_grayscale_faq_q3: '白黒にした写真が平坦に見えるのはなぜですか？',
	tool_image_grayscale_faq_a3:
		'色相だけが違う色は同じ灰になり得ます。緑の葉の上の赤い花が典型で、平均ではどちらも 85 です。輝度に切り替えるか、赤／緑チャンネルを試すと分かれます。',
	tool_image_grayscale_faq_q4: '透明な PNG はどうなりますか？',
	tool_image_grayscale_faq_a4:
		'PNG または WebP でダウンロードすれば透明度は保たれます。JPEG は透明を持てないため、詳細設定の JPEG 背景色で塗りつぶされます。',
	tool_image_grayscale_faq_q5: '色を少し残せますか？',
	tool_image_grayscale_faq_a5:
		'はい。強度を下げてください。70–80% でくすんだ半脱色、0% で変化なし。一色だけ残す（セレクティブカラー）にはマスクが必要で、このページでは扱いません。',
	tool_image_grayscale_faq_q6: 'CSS の grayscale() やスマホのモノクロフィルターと同じですか？',
	tool_image_grayscale_faq_a6:
		'CSS grayscale(100%) の重みは Rec.709 と同じですが、表示だけが変わりファイルはカラーのままです。スマホのフィルターはコントラストやトーンを足すことが多いです。このツールは新しいファイルに純粋な灰の画素を書き込みます。',
	tool_image_grayscale_faq_q7: '写真はアップロードされますか？',
	tool_image_grayscale_faq_a7:
		'いいえ。読み取り・変換・保存はこのブラウザのタブ内で完結します。カラー版が必要になるかもしれない場合は元ファイルを残してください — 灰のダウンロードから色は戻せません。',
	tool_image_grayscale_article: '画像のグレースケール変換',
	tool_image_grayscale_ref_a_label: 'Wikipedia — グレースケール（カラーから灰への変換）',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — grayscale() の行列',
};

export default ja;
