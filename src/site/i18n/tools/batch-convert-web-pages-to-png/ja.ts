/**
 * i18n tool shard (batch-convert-web-pages-to-png / ja).
 * H1: ウェブページをまとめて PNG にする. IG vs JPG: ロスレス PNG、1px の枠がにじまない、任意の透過、1×/2×。JPEG 画質スライダーでも A4 でもない.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: '詳細設定（任意）',
	tool_batch_convert_web_pages_to_png_article:
		'公開 URL を、選んだ幅（デスクトップ 1280、タブレット 768、スマホ 390）でロスレス PNG にします。白背景か透過、1× か 2× を選び、できた分を ZIP にまとめます。文字がにじまない UI スクショ向きで、チャット用 JPEG でも A4 印刷でもありません。各アドレスは HTML 取得のためサーバー経由で一度だけ取り、保存しません。PNG 化はこのタブで行います。小さい写真風ファイルなら「ウェブページをまとめてJPGに変換」へ。',
	tool_batch_convert_web_pages_to_png_bg_label: '背景',
	tool_batch_convert_web_pages_to_png_bg_transparent: '透過',
	tool_batch_convert_web_pages_to_png_bg_white: '白',
	tool_batch_convert_web_pages_to_png_capture_first: '最初の画面',
	tool_batch_convert_web_pages_to_png_capture_frame_title: '非表示のキャプチャ枠',
	tool_batch_convert_web_pages_to_png_capture_full: 'ページ全体',
	tool_batch_convert_web_pages_to_png_capture_label: 'キャプチャ範囲',
	tool_batch_convert_web_pages_to_png_clear: 'クリア',
	tool_batch_convert_web_pages_to_png_col_file: 'ファイル',
	tool_batch_convert_web_pages_to_png_col_status: '状態',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'すべて変換',
	tool_batch_convert_web_pages_to_png_desc:
		'URL リストをロスレス PNG に。透過と 2× は任意、ZIP でまとめる。JPEG でも A4 でもない。',
	tool_batch_convert_web_pages_to_png_description:
		'ウェブページをまとめて PNG にする：URL リストからロスレス PNG を ZIP に。白または透過、1×/2×。手順：URL を貼る → すべて変換 → ZIPをダウンロード。例：2つの UI がシャープな PNG になる。1行でもウェブページをPNGに変換できる。各 URL は一度だけ取得し保存せず、変換はこのタブ。',
	tool_batch_convert_web_pages_to_png_download_zip: 'ZIPをダウンロード',
	tool_batch_convert_web_pages_to_png_empty: '先に公開 URL を1行以上貼ってください。',
	tool_batch_convert_web_pages_to_png_err_convert: 'この URL は PNG にできませんでした。スキップします。',
	tool_batch_convert_web_pages_to_png_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザを試してください。',
	tool_batch_convert_web_pages_to_png_err_load: '変換ライブラリの読み込みに失敗しました。更新してもう一度。',
	tool_batch_convert_web_pages_to_png_err_too_many: 'URL は最大 10 件です。超えた行は入れていません。',
	tool_batch_convert_web_pages_to_png_err_url: 'その URL を読み込めませんでした。アドレスを確認するか、先方が取得を拒否しています。',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'その行は有効な http(s) URL ではありません。スキップします。',
	tool_batch_convert_web_pages_to_png_example:
		'サンプルを読み込むと、コンポーネントキット用と半透明オーバーレイ用の HTML が入り、端末内で 2 枚の PNG を作ります（1px の枠はシャープ、背景を透過にするとオーバーレイが市松を通す）。実サイトには取りに行きません。ZIPをダウンロードが有効になります。「すべて変換」は貼った URL を取得します。幅・背景・倍率・全体／最初の画面で画素が変わります。',
	tool_batch_convert_web_pages_to_png_example_title: '実例',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'JPG 側は画質スライダー付きの非可逆 JPEG で、チャットやチケット向けです。こちらはロスレス PNG なので 1px の枠と文字がにじみにくく、画面キャプチャ 透過PNG と 1×/2× が選べます。同じ URL リストでも成果物が違います。',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'成功した行はそれぞれ別 PNG になり、1つの ZIP に入ります。1本の URL でもウェブページをPNGに変換できます。複数枚を1ファイルに合成はしません。',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'変換はこのタブで完了します。URL リストを変換する場合、HTML 取得のため各アドレスをサーバー経由で一度送りますが、ページは保存しません。PNG はブラウザ内で作り、ZIP もここで固めます。サーバーにアップロードして保管はしません。',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'透過は、ページ自身にアルファがある（または地色が塗られていない）部分だけ抜けます。よくある白背景のトップは白のままです。2× は画素が倍になり、レティナ確認向きでファイルは大きくなります。べた塗りの面は市松まで抜けません。',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'PDF 側は読む・印刷するための A4 分割です。こちらは URL ごとに 1 枚の PNG ラスタです。印刷用なら「複数のウェブページをPDFにまとめて変換」を使ってください。',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'一致しません。スクリプトは除去されます。ログイン壁や JavaScript で描くアプリは、ログイン後の見た目と違うことが多いです。レスポンシブは選んだ幅に従います。',
	tool_batch_convert_web_pages_to_png_faq_q1: '「ウェブページをまとめてJPGに変換」と何が違いますか？',
	tool_batch_convert_web_pages_to_png_faq_q2: '結果は1枚の PNG ですか、ZIP ですか？URL 1本でもできますか？',
	tool_batch_convert_web_pages_to_png_faq_q3: 'ページはアップロードされて保存されますか？',
	tool_batch_convert_web_pages_to_png_faq_q4: '透過背景はいつ見えますか？2× は何が変わりますか？',
	tool_batch_convert_web_pages_to_png_faq_q5: 'PDF にまとめるツールとの違いは？',
	tool_batch_convert_web_pages_to_png_faq_q6: 'ログインや JavaScript が多いサイトは実物と同じになりますか？',
	tool_batch_convert_web_pages_to_png_file_count_tpl: 'キューに {n} 件の URL',
	tool_batch_convert_web_pages_to_png_how_body:
		'文字がにじまない UI スクショを残したいとき向けです。URL を貼り、「すべて変換」を押すと（初期値はデスクトップ 1280・白背景・1×・ページ全体）、できた PNG を ZIP で受け取れます。',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'1行に https URL を1つ（コンポーネントキットや公開 UI ドキュメント向き）。1行でもウェブページをPNGに変換できます。',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'「すべて変換」を押します。初期値はデスクトップ 1280、白、1×、ページ全体。公開 URL は一度だけ取得し、失敗行は飛ばします。',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'透過、2×、スマホ幅、最初の画面だけが必要なら「詳細設定（任意）」で幅・背景・倍率・範囲・読み込み待ちを変えます。',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'チャット用の小さい JPEG は「ウェブページをまとめてJPGに変換」。A4 は「複数のウェブページをPDFにまとめて変換」。手元の写真なら「画像を PNG に一括変換」。',
	tool_batch_convert_web_pages_to_png_how_item_5: '1行でも成功したら「ZIPをダウンロード」できます。',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'「サンプルを読み込む」で端末内の UI 2件を試せます。変換中は進捗パネルが出ます。',
	tool_batch_convert_web_pages_to_png_how_title: '手順',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '{s}秒経過',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: '取得',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: '画像',
	tool_batch_convert_web_pages_to_png_hud_title: '一括の進捗',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'幅でレイアウトが変わります。透過はアルファを残します。2× は画素が倍です。ページ全体は縦長、最初の画面はだいたい1画面分の高さです。',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'1行1つの http(s)、最大 10。直列処理。失敗はスキップ。成功した PNG は ZIP へ。背景と倍率で画素が変わります。JPEG の拡張子替えでも PDF でもありません。',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'各 URL は HTML 取得のためサーバーへ一度送り、保存しません。PNG はこのタブで作ります。',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'社内ネット、ログイン必須、存在しない URL はその行だけ失敗し、残りは続きます。',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'ZIP 内の同名は name (2).png になります。スクリプトと noscript のリロード罠は除去します。極端に高いキャプチャはタブが落ちないよう上限があります。',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'サイト全体のクローラではありません。手元の URL を貼ってください。',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'JPG 一括と比べ：ロスレス PNG、JPEG 画質なし、任意の透過。PDF 一括と比べ：A4 分割なし。画像一括 PNG と比べ：入力はウェブの URL であって端末の写真ではありません。',
	tool_batch_convert_web_pages_to_png_rules_title: '守っておくこと',
	tool_batch_convert_web_pages_to_png_sample: 'サンプルを読み込む',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2×（レティナ）',
	tool_batch_convert_web_pages_to_png_scale_label: '画素倍率',
	tool_batch_convert_web_pages_to_png_status_converting: 'PNG を描画中… タブが数秒止まることがあります',
	tool_batch_convert_web_pages_to_png_status_done: '一括が終わりました。表を確認して ZIP をダウンロードしてください。',
	tool_batch_convert_web_pages_to_png_status_fetching: 'HTML を取得しています…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG 準備完了',
	tool_batch_convert_web_pages_to_png_status_queued: '待機中',
	tool_batch_convert_web_pages_to_png_status_skip: 'スキップ',
	tool_batch_convert_web_pages_to_png_status_waiting: '画像の読み込み待ち…',
	tool_batch_convert_web_pages_to_png_status_working: '一括変換中…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} 完了 · {skip} スキップ',
	tool_batch_convert_web_pages_to_png_title: 'ウェブページをまとめて PNG にする',
	tool_batch_convert_web_pages_to_png_url_hint:
		'公開 http(s) を1行1件、最大 10。一度取得し、CSS と画像 URL を書き換えます。キャプチャ前にスクリプトを外します。レイアウトは選んだ幅に従います。',
	tool_batch_convert_web_pages_to_png_url_label: 'URL（1行に1つ）',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'デザインプレビューやコンポーネントキットをシャープな PNG で残す。JPEG だと 1px の枠がにじみます。',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'半透明オーバーレイを透過 PNG で書き出し、Figma に置く。塗りつぶされた白トップは白のままです。',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'チャット用 JPEG は JPG 一括、印刷用 A4 は PDF 一括へ。UI をロスレスで残すときだけこちらです。',
	tool_batch_convert_web_pages_to_png_usecases_title: 'こんなときに',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'デスクトップ 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: '表示幅',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'スマホ 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'タブレット 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'画像の読み込みが始まったあと、追加で待つ秒数です。初期値は 1。PNG に空の枠が出るときは増やしてください。',
	tool_batch_convert_web_pages_to_png_wait_label: '読み込み待ち（秒）',
};

export default ja;
