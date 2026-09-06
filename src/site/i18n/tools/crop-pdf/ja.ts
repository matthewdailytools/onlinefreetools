/**
 * i18n tool shard (crop-pdf / ja). 日本語検索向けに独立リライト。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_crop_pdf_all_sides_label: '四辺共通 (pt)',
  tool_crop_pdf_article:
    'ブラウザで PDF ライブラリ により PDF の余白を pt 単位でトリミング—四辺一括または辺ごと。ドラッグ式のピクセル編集ではありません。ファイルは端末内で処理。',
  tool_crop_pdf_bottom_label: '下 (pt)',
  tool_crop_pdf_choose_file: 'PDF を選択',
  tool_crop_pdf_clear: 'クリア',
  tool_crop_pdf_crop: '裁断',
  tool_crop_pdf_desc:
    '端末内で PDF ページ余白をトリミング—四辺共通または辺ごと（pt）。サーバーにアップロードしません。',
  tool_crop_pdf_description:
    'ブラウザで CropBox を狭めて PDF 余白をカット—サーバーにアップロードしません。上/右/下/左の pt（既定 36）または四辺共通値を設定してダウンロード。例：1 ページサンプルを四辺 36 pt で裁断し cropped.pdf を保存可能、裁断前後のサイズを表示。ピクセルドラッグ編集ではありません。暗号化 PDF は明確なエラーで失敗します。',
  tool_crop_pdf_download: 'ダウンロード',
  tool_crop_pdf_drop_hint: 'PDF をここにドロップも可。このタブ内で処理します。',
  tool_crop_pdf_empty: '先に PDF を選んでください。',
  tool_crop_pdf_err_crop: '裁断に失敗しました。余白とファイルを確認して再試行してください。',
  tool_crop_pdf_err_encrypted: 'この PDF はパスワード保護の可能性があります。解除してから裁断してください。',
  tool_crop_pdf_err_load: 'PDF を読めません（破損または非対応）。別ファイルをお試しください。',
  tool_crop_pdf_err_margin:
    '余白が大きすぎます—裁断後の幅または高さが 10 pt 以下になります。余白を減らしてください。',
  tool_crop_pdf_example:
    'サンプルは 1 ページ PDF を生成し四辺 36 pt で裁断、cropped.pdf のダウンロードとサイズ統計を有効化します。',
  tool_crop_pdf_example_title: '例',
  tool_crop_pdf_faq_a1:
    'いいえ。PDF ライブラリ はタブ内で動作（スクリプトは このサイトから読み込みます）。PDF は当社サーバーに送られません。',
  tool_crop_pdf_faq_a2:
    'pt 余白で PDF ボックスを狭めるツールで、画像のようにプレビュー上で矩形をドラッグできません。',
  tool_crop_pdf_faq_a3:
    'その通りです。pt 入力のみで自由枠やピクセル編集はありません—必要なら画像ツールをご利用ください。',
  tool_crop_pdf_faq_a4:
    'パスワード付き PDF は通常開けません。信頼できる方法で解除してから裁断してください。',
  tool_crop_pdf_faq_q1: 'PDF はアップロードされますか？',
  tool_crop_pdf_faq_q2: '画像のトリミングと何が違いますか？',
  tool_crop_pdf_faq_q3: 'ピクセルドラッグ編集ですか？',
  tool_crop_pdf_faq_q4: '暗号化 PDF は？',
  tool_crop_pdf_how_body:
    'PDF を選び pt 余白（四辺共通または辺別）を設定し「裁断」→「ダウンロード」。各ページの CropBox と MediaBox が内側に縮み、ビューアと印刷が新境界を尊重します。ライブラリ読込後はすべてローカル。',
  tool_crop_pdf_how_item_1: "「PDF を選択」で入力ファイルを選択",
  tool_crop_pdf_how_item_2: "オプションを設定し「裁断」を押す",
  tool_crop_pdf_how_item_3: "プレビュー、ページ数、ステータスを確認",
  tool_crop_pdf_how_item_4: "「ダウンロード」で結果を保存",
  tool_crop_pdf_how_title: '使い方',
  tool_crop_pdf_left_label: '左 (pt)',
  tool_crop_pdf_margins_title: 'トリミングする余白（ポイント）',
  tool_crop_pdf_pages_label: 'ページ数',
  tool_crop_pdf_right_label: '右 (pt)',
  tool_crop_pdf_rules_body: '余白計算、PDF ボックス、制限、プライバシー、失敗時の挙動。',
  tool_crop_pdf_rules_item_1: '単位：PDF ポイント（pt）。72 pt ≈ 1 インチ。サンプルは各辺 36 pt（約 0.5 インチ）。',
  tool_crop_pdf_rules_item_2: 'ボックス：CropBox と MediaBox が各辺から内側に縮小。原点は左下（PDF 仕様）。',
  tool_crop_pdf_rules_item_3: '安全：裁断後の幅または高さが 10 pt 以下になる設定は保存前に拒否。',
  tool_crop_pdf_rules_item_4: '制限：バイトはタブ内；暗号化/破損は明確に失敗；巨大ファイルはメモリで遅くなる場合あり。',
  tool_crop_pdf_rules_title: '知っておくルール',
  tool_crop_pdf_sample: 'サンプル読込',
  tool_crop_pdf_stats_page_tpl: '{n} ページ：{ow}×{oh} pt → {nw}×{nh} pt',
  tool_crop_pdf_stats_tpl: '{pages} · {bytes}',
  tool_crop_pdf_status_cropping: 'PDF を裁断中…',
  tool_crop_pdf_status_done: '完了 — ダウンロードで cropped.pdf を保存。',
  tool_crop_pdf_title: 'PDFを裁断 — ブラウザで余白をトリミング',
  tool_crop_pdf_top_label: '上 (pt)',
  tool_crop_pdf_uniform_hint: '「四辺共通」を変えると全辺が同期—各辺は個別調整も可。',
  tool_crop_pdf_usecase_1: 'オフィス：印刷・保管前にスキャンの白余白を除去。',
  tool_crop_pdf_usecase_2: '学生：配布資料の余白を詰めて画面に多く表示。',
  tool_crop_pdf_usecase_3: 'サイト運営：1 ページチラシ出力の余白を一括で統一。',
  tool_crop_pdf_usecases_title: 'こんなときに',
  tool_crop_pdf_warn_large: '約 25 MB 超—裁断が遅いかブラウザによって失敗する場合があります。',
  tool_crop_pdf_warn_pdflib: 'PDF ライブラリの読込に失敗。ネットワークを確認して再試行。',
};
export default ja;
