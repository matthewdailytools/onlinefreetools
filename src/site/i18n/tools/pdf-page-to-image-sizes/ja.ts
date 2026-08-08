/**
 * i18n tool shard (pdf-page-to-image-sizes / ja). 日本語検索向けに独立リライト。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'PDF の 1 ページを選び、SNS 向け JPEG サイズ一式を ZIP で書き出します（1080 正方形、1200×630 OG、1280×720 HD、1080×1920 縦）。ページ描画 で 1 回レンダリングし、各プリセットに contain で中央配置します。',
  tool_pdf_page_to_image_sizes_choose_file: 'PDF を選択',
  tool_pdf_page_to_image_sizes_clear: 'クリア',
  tool_pdf_page_to_image_sizes_desc:
    'PDF 1 ページを複数サイズ JPEG パックとして端末内で書き出し — ZIP ダウンロード。サーバーにアップロードしません。',
  tool_pdf_page_to_image_sizes_description:
    'ブラウザで PDF の指定ページを複数サイズ JPEG パックに変換 — ファイルは端末内に留まり、サーバーにアップロードされません。PDF を選び、ページ番号（既定 1）を入力し、「書き出し」→「ダウンロード」で page-N-WxH.jpg を含む ZIP を取得。例：サンプル表紙は 4 プリセット（1080²、1200×630、1280×720、1080×1920）を出力。パスワード付き・破損 PDF は明確なエラーを表示。',
  tool_pdf_page_to_image_sizes_download: 'ダウンロード',
  tool_pdf_page_to_image_sizes_drop_hint: 'PDF をここにドロップも可。処理はこのタブ内で完結します。',
  tool_pdf_page_to_image_sizes_empty: '先に PDF ファイルを選んでください。',
  tool_pdf_page_to_image_sizes_err_bad_page: 'ページ番号が範囲外です。総ページ数を確認してください。',
  tool_pdf_page_to_image_sizes_err_encrypted: 'この PDF はパスワード保護の可能性があります。解除してから再試行してください。',
  tool_pdf_page_to_image_sizes_err_export: '書き出しに失敗しました。ファイルとページ番号を確認してください。',
  tool_pdf_page_to_image_sizes_err_fflate: 'ZIP ライブラリの読み込みに失敗しました。ネットワークを確認してください。',
  tool_pdf_page_to_image_sizes_err_load: 'PDF を読み取れません（破損または非対応）。別ファイルをお試しください。',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'PDF レンダラーの読み込みに失敗しました。ネットワークを確認してください。',
  tool_pdf_page_to_image_sizes_example:
    'サンプルは 1 ページ PDF を生成し、1 ページ目を 4 プリセット JPEG で書き出し、page-1-sizes.zip のダウンロードを有効にします。',
  tool_pdf_page_to_image_sizes_example_title: '例',
  tool_pdf_page_to_image_sizes_export: '書き出し',
  tool_pdf_page_to_image_sizes_faq_a1:
    'いいえ。ページ描画・PDF ライブラリ・ZIP ライブラリ はタブ内で動作します（スクリプトは CDN から読み込まれる場合があります）。PDF は当社サーバーにアップロードされません。',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF→JPG は全ページを元のアスペクト比で出力します。本ツールは 1 ページを選び、固定プラットフォームサイズに contain（中央、必要なら白余白）で収めます。',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080（Instagram 正方形）、1200×630（Open Graph / Facebook リンクプレビュー）、1280×720（HD 横）、1080×1920（ストーリー / 縦フィード）。',
  tool_pdf_page_to_image_sizes_faq_a4:
    'ページ全体が枠内に収まるよう拡大縮小し、切り抜きません。余白は白で埋め、JPEG をきれいに保ちます。',
  tool_pdf_page_to_image_sizes_faq_a5:
    '約 25 MB 超のファイルは遅くなったり、一部ブラウザで失敗することがあります。複雑なページはメモリを多く使います。',
  tool_pdf_page_to_image_sizes_faq_q1: 'PDF はアップロードされますか？',
  tool_pdf_page_to_image_sizes_faq_q2: 'PDF→JPG との違いは？',
  tool_pdf_page_to_image_sizes_faq_q3: '含まれるサイズは？',
  tool_pdf_page_to_image_sizes_faq_q4: '画像の周りに白い余白があるのはなぜ？',
  tool_pdf_page_to_image_sizes_faq_q5: 'ファイルサイズの制限は？',
  tool_pdf_page_to_image_sizes_how_body:
    'PDF を選び、ページ番号（1 始まり）を入力し、「書き出し」→「ダウンロード」。1 回レンダリング後、各プリセット canvas に fit して ZIP にまとめます。',
  tool_pdf_page_to_image_sizes_how_title: '使い方',
  tool_pdf_page_to_image_sizes_page_label: 'ページ番号',
  tool_pdf_page_to_image_sizes_pages_label: 'ページ数',
  tool_pdf_page_to_image_sizes_rules_body:
    'プリセットサイズ、contain 動作、JPEG 出力、ZIP 命名、プライバシーと失敗時の挙動。',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'プリセット：1080×1080（instagram-square）、1200×630（og-facebook）、1280×720（hd-landscape）、1080×1920（story-portrait）。',
  tool_pdf_page_to_image_sizes_rules_item_2:
    '選択ページを 2× スケールで 1 回レンダリングし、各ターゲット canvas に contain 中央配置；JPEG 品質 0.9。',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'ZIP 内ファイル名：page-{N}-{W}x{H}.jpg。アーカイブ：page-{N}-sizes.zip。',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'プライバシーと制限：バイトはタブ内；暗号化/破損 PDF は明確に失敗；約 25 MB 超は遅くなる場合あり。',
  tool_pdf_page_to_image_sizes_rules_title: '想定されるルール',
  tool_pdf_page_to_image_sizes_sample: 'サンプルを読み込む',
  tool_pdf_page_to_image_sizes_stats_tpl: '{page} ページ · {n} サイズ · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: '完了 — ダウンロードで ZIP を保存。',
  tool_pdf_page_to_image_sizes_status_exporting: 'ページをレンダリングしてサイズパックを作成中…',
  tool_pdf_page_to_image_sizes_title: 'PDFページの複数サイズ書き出し — マルチサイズパック',
  tool_pdf_page_to_image_sizes_usecase_1: 'SNS 運用：ポスター PDF 1 ページから IG 正方形・OG・縦を 1 つの ZIP に。',
  tool_pdf_page_to_image_sizes_usecase_2: 'サイト運営：表紙スライドを 1200×630 のリンクプレビュー用に手裁ちなしで出力。',
  tool_pdf_page_to_image_sizes_usecase_3: '学生：講義 PDF の 1 枚をスマホ向けサイズでノートアプリへ。',
  tool_pdf_page_to_image_sizes_usecases_title: 'こんなときに',
  tool_pdf_page_to_image_sizes_warn_large: '約 25 MB 超 — 書き出しが遅くなる、または失敗する場合があります。',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'PDF ライブラリの読み込みに失敗しました。ネットワークを確認してください。',
};
export default ja;
