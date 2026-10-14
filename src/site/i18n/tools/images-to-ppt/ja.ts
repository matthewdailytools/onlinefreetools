/**
 * i18n tool shard (images-to-ppt / ja).
 * 複数画像を PowerPoint にする日本語：1枚1スライド、16:9/4:3・contain/cover・背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語文案字典。 */
const ja: SiteLangDict = {
	tool_images_to_ppt_title: "画像を PowerPoint に変換 — 写真から PPTX スライドへ",
	tool_images_to_ppt_desc: "端末の写真を1枚1スライドの .pptx にまとめます。",
	tool_images_to_ppt_description:
		"ブラウザ上で複数の写真を PowerPoint（.pptx）に変換——1枚1スライド、16:9 か 4:3、全体表示か塗りつぶし。手順：画像を選択、PowerPoint に変換、ダウンロード。例：3枚の写真 → 3枚のスライド。ファイルはこのタブから出ず、サーバーにアップロードしません。",
	tool_images_to_ppt_choose_files: "画像を選択",
	tool_images_to_ppt_drop_hint: "または JPEG・PNG・WebP・GIF をここにドロップ。処理はこのタブ内で完結します。",
	tool_images_to_ppt_convert: "PowerPoint に変換",
	tool_images_to_ppt_download: "ダウンロード",
	tool_images_to_ppt_sample: "サンプルを読み込む",
	tool_images_to_ppt_clear: "クリア",
	tool_images_to_ppt_advanced: "詳細設定（任意）",
	tool_images_to_ppt_layout_label: "スライドサイズ",
	tool_images_to_ppt_layout_16x9: "ワイド 16:9",
	tool_images_to_ppt_layout_4x3: "標準 4:3",
	tool_images_to_ppt_layout_hint: "最近のプロジェクターは多くが 16:9。教室の古い機材なら 4:3 を選んでください。",
	tool_images_to_ppt_fit_label: "画像の収め方",
	tool_images_to_ppt_fit_contain: "全体を収める（レターボックス）",
	tool_images_to_ppt_fit_cover: "スライドいっぱいに（端が切れる場合あり）",
	tool_images_to_ppt_fit_hint: "全体表示は画素をすべて残します。塗りつぶしは縦長・横長の写真を切り取る場合があります。",
	tool_images_to_ppt_bg_label: "スライド背景",
	tool_images_to_ppt_bg_hint: "「全体を収める」時の余白帯に使います。初期値は白です。",
	tool_images_to_ppt_progress: "PowerPoint を作成中…",
	tool_images_to_ppt_step_encode: "画像をエンコード",
	tool_images_to_ppt_step_build: "スライドを組み立て",
	tool_images_to_ppt_step_pack: "PPTX をパック",
	tool_images_to_ppt_encode_step: "画像 {i} / {n} をエンコード中…",
	tool_images_to_ppt_build_step: "デッキにスライドを追加中…",
	tool_images_to_ppt_pack_step: ".pptx ファイルをパック中…",
	tool_images_to_ppt_elapsed: "経過 {s} 秒",
	tool_images_to_ppt_move_up: "上へ",
	tool_images_to_ppt_move_down: "下へ",
	tool_images_to_ppt_remove: "削除",
	tool_images_to_ppt_empty: "先に画像を1枚以上追加してください。",
	tool_images_to_ppt_err_decode: "画像を読めませんでした。JPEG・PNG・WebP を試してください。",
	tool_images_to_ppt_err_convert: "PowerPoint を作れませんでした。枚数を減らすか、小さい画像で再試行してください。",
	tool_images_to_ppt_err_lib: "PPTX ライブラリの読み込みに失敗しました。ページを更新して再試行してください。",
	tool_images_to_ppt_warn_large: "大きなファイル（>25 MB）——変換に時間がかかることがあります。",
	tool_images_to_ppt_warn_edge: "一辺が約 8192 px を超えています——ブラウザによっては失敗します。",
	tool_images_to_ppt_warn_animation: "アニメ GIF：スライドには先頭フレームのみ使います。",
	tool_images_to_ppt_status_converting: "PowerPoint に変換中…",
	tool_images_to_ppt_status_done: "完了 — 「ダウンロード」で .pptx を保存してください。",
	tool_images_to_ppt_stats_tpl: "{n} 枚のスライド → PPTX 準備完了（{bytes}）",
	tool_images_to_ppt_how_title: "画像を PowerPoint に変換する手順",
	tool_images_to_ppt_how_body:
		"リストの各ファイルが1枚のスライドになります。矢印で並べ替えてから変換。任意設定でサイズ・収め方・余白色を変えられます。",
	tool_images_to_ppt_how_item_1: "「画像を選択」するか、JPEG・PNG・WebP・GIF をドロップゾーンへ落とします。",
	tool_images_to_ppt_how_item_2: "順番が違うときは「上へ / 下へ」で並べ替え。不要なら「削除」。",
	tool_images_to_ppt_how_item_3: "必要なら「詳細設定」で 16:9 か 4:3、全体表示か塗りつぶし、背景色を選びます。",
	tool_images_to_ppt_how_item_4: "「PowerPoint に変換」を押し、進捗バーのあと「ダウンロード」します。",
	tool_images_to_ppt_why_choose_title: "画像を PowerPoint に変換 — 写真から PPTX スライドへを使う理由",
	tool_images_to_ppt_why_choose_item_1: "並べた順に1枚1スライド——クラウドへ上げず、アカウントも不要。",
	tool_images_to_ppt_why_choose_item_2: "ワイド 16:9 かクラシック 4:3 で、会場のプロジェクターに合わせやすい。",
	tool_images_to_ppt_why_choose_item_3: "全体表示は写真をすべて残し、塗りつぶしはフルブリードに近い見え方。",
	tool_images_to_ppt_why_choose_item_4: "巨大ファイル・極端な辺長・アニメ GIF（先頭フレームのみ）にソフト警告。",
	tool_images_to_ppt_why_choose_item_5: "エンコードから .pptx パックまで見える進捗 HUD。",
	tool_images_to_ppt_rules_title: "ルール",
	tool_images_to_ppt_rules_body: "デッキは PptxGenJS で、このブラウザタブ内だけで組み立てます。",
	tool_images_to_ppt_rules_item_1: "既定レイアウトはワイド 16:9。必要なら詳細設定で 4:3 に切替え。",
	tool_images_to_ppt_rules_item_2: "スライド順はリスト順。「PowerPoint に変換」の前に「上へ / 下へ」で整える。",
	tool_images_to_ppt_rules_item_3: "全体表示は背景色のレターボックス；塗りつぶしはコンテンツ枠いっぱいに切り取り。",
	tool_images_to_ppt_rules_item_4: "アニメ GIF は先頭フレームのみ。タイトルやトランジションは付けません——ダウンロード後に PowerPoint で編集。",
	tool_images_to_ppt_rules_item_5: "本サイトから PPTX ライブラリを読んでも、写真は当社サーバーへ上がりません。",
	tool_images_to_ppt_example_title: "例",
	tool_images_to_ppt_example:
		"「サンプルを読み込む」は色ブロック3枚（sample-a、sample-b、sample-c）を 16:9・全体表示で作ります。「PowerPoint に変換」はブラウザ内で完了し、「ダウンロード」で images.pptx を保存。4:3 や塗りつぶしに変えて再変換すると切り取りの違いが分かります。",
	tool_images_to_ppt_usecases_title: "こんなときに",
	tool_images_to_ppt_usecase_1: "スマホの写真セットを、まずデスクトップ版 PowerPoint を開かずに短い発表用デッキへ。",
	tool_images_to_ppt_usecase_2: "製品ウォークスルーで、各スクリーンショットをフルブリードまたはレターボックスの単独スライドに。",
	tool_images_to_ppt_usecase_3: "教室や現場の写真を、まだ 4:3 のプロジェクターに合わせたいとき。",
	tool_images_to_ppt_usecase_4: "画像から下書きデッキを作り、あとで PowerPoint や LibreOffice Impress でタイトル・メモ・アニメを追加。",
	tool_images_to_ppt_faq_q1: "写真はアップロードされますか？",
	tool_images_to_ppt_faq_a1:
		"いいえ。デコード・レイアウト・PPTX パックはすべてこのタブ内。ネットワークは本サイト vendor から PptxGenJS を読むだけです。",
	tool_images_to_ppt_faq_q2: "Microsoft PowerPoint のインストールは必要ですか？",
	tool_images_to_ppt_faq_a2:
		"不要です。.pptx を開けるアプリなら何でも——PowerPoint、Google スライド（ファイル → インポート）、LibreOffice Impress、Keynote など。",
	tool_images_to_ppt_faq_q3: "ここでタイトルやアニメを付けられますか？",
	tool_images_to_ppt_faq_a3:
		"このページではできません。写真スライドを書き出してから、PowerPoint（または Impress）で文字・トランジション・発表者ノートを追加してください。",
	tool_images_to_ppt_faq_q4: "画像を PowerPoint に変換と、画像から PDF の違いは？",
	tool_images_to_ppt_faq_a4:
		"PPTX はスライドとして編集できます。PDF は配布・印刷向けの固定文書。デッキではなく文書が欲しいときは「画像を PDF に」ツールを使ってください。",
	tool_images_to_ppt_faq_q5: "全体表示と塗りつぶし、どちらを選ぶべき？",
	tool_images_to_ppt_faq_a5:
		"全体表示（既定）は写真全体を見せ、余白帯は背景色。塗りつぶしは端を切ってスライドを埋めます——製品のフルブリード向き。",
	tool_images_to_ppt_faq_q6: "アニメ GIF はどうなりますか？",
	tool_images_to_ppt_faq_a6:
		"先頭フレームだけがスライドに載ります。この書き出しでは PowerPoint が多フレーム GIF をアニメとして再生しません。",
	tool_images_to_ppt_faq_q7: "変換が遅い・失敗するのはなぜ？",
	tool_images_to_ppt_faq_a7:
		"非常に大きいファイル（>25 MB）や約 8192 px 超の辺はブラウザに負荷がかかります。縮小・圧縮してから、必要なら枚数を減らして再変換してください。",
	tool_images_to_ppt_article: "ブラウザで画像を PowerPoint PPTX デッキに変換する",
	tool_images_to_ppt_references: "クライアント側エクスポート向けの PptxGenJS と MDN Blob の参考。",
	tool_images_to_ppt_ref_a_label: "PptxGenJS — JavaScript の PowerPoint ライブラリ",
	tool_images_to_ppt_ref_b_label: "MDN — Blob",
};

export default ja;
