/**
 * i18n 工具分片（compress-pdf / ja）。按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_compress_pdf_article:
    'ブラウザで PDF の各ページを JPEG として描き直し、新しい PDF にまとめてファイルサイズを小さくします。ファイルは端末に残り、サーバーにアップロードされません。クラウド級の再エンコードではない、正直な限定的圧縮です。',
  tool_compress_pdf_choose_file: 'PDF を選択',
  tool_compress_pdf_clear: 'クリア',
  tool_compress_pdf_compress: '圧縮',
  tool_compress_pdf_desc:
    'ブラウザで PDF を圧縮してサイズを縮小—ファイルは端末内に留まり、サーバーにアップロードされません。',
  tool_compress_pdf_description:
    'ブラウザで PDF を圧縮し、圧縮前後のバイト数を確認—サーバーには送信されません。手順：PDF を開き、中または低画質を選び、圧縮してダウンロード。例：2 ページの画像入りサンプルは「中」で約 180 KB から約 90 KB に。テキストのみの PDF はほとんど変わらない場合があります。暗号化 PDF は明確なエラーで失敗。整理（ページ順変更）や結合（複数→1）とは異なります。',
  tool_compress_pdf_download: 'ダウンロード',
  tool_compress_pdf_drop_hint: 'PDF をここにドロップも可。処理はこのタブ内で完結します。',
  tool_compress_pdf_empty: '圧縮する PDF を追加してください。',
  tool_compress_pdf_err_compress: '圧縮に失敗しました。ファイルを確認して再試行してください。',
  tool_compress_pdf_err_encrypted: 'この PDF はパスワード保護されているようです。先に解除してください。',
  tool_compress_pdf_err_load: 'PDF を読み込めません（破損または非対応）。別ファイルをお試しください。',
  tool_compress_pdf_example:
    'サンプルはグラデーション付き JPEG ページ 2 枚の PDF を読み込み、「中」画質で圧縮、前後サイズと節約率を表示し、compressed.pdf のダウンロードを有効にします。',
  tool_compress_pdf_example_title: 'PDF のファイルサイズを小さく',
  tool_compress_pdf_faq_a1:
    'いいえ。pdf.js と PDF ライブラリ はタブ内で動作します（ライブラリは CDN から読み込む場合あり）。PDF は当社サーバーにアップロードされません。',
  tool_compress_pdf_faq_a2:
    '各ページを JPEG にラスタライズして PDF を再構築します。テキスト中心や既に最適化済みの PDF はほとんど縮まない、またはわずかに大きくなることもあります。サーバー側のストリーム再圧縮とは異なります。',
  tool_compress_pdf_faq_a3:
    'いいえ。ページはブラウザ内で画像として描き直されます。クラウド再エンコードはなく、バイトは端末から出ません。',
  tool_compress_pdf_faq_a4: 'パスワード付き PDF は通常ここでは開けません。先に解除してから圧縮してください。',
  tool_compress_pdf_faq_a5:
    '「中」は詳細を多めに保持（スケール 1.2、JPEG 約 72%）。「低」はより小さいがやわらかい（スケール 1.0、JPEG 約 55%）。メール制限と可読性で選んでください。',
  tool_compress_pdf_faq_q1: 'PDF はアップロードされますか？',
  tool_compress_pdf_faq_q2: 'なぜほとんど小さくならない？',
  tool_compress_pdf_faq_q3: 'クラウド再エンコードですか？',
  tool_compress_pdf_faq_q4: '暗号化 PDF は？',
  tool_compress_pdf_faq_q5: 'どの画質を選べばいい？',
  tool_compress_pdf_how_body:
    'PDF を選び、中または低画質を選んで「圧縮」→「ダウンロード」。各ページを JPEG として新 PDF に保存。統計で元サイズ・新サイズ・変化率を表示。ライブラリは初回使用時に読み込みます。',
  tool_compress_pdf_how_title: '使い方',
  tool_compress_pdf_pages_label: 'ページ数',
  tool_compress_pdf_quality_label: '画質',
  tool_compress_pdf_quality_low: '低 — より小さいファイル',
  tool_compress_pdf_quality_med: '中 — バランス',
  tool_compress_pdf_rules_body:
    'JPEG ラスター設定、前後統計、プライバシー、失敗時の挙動について。',
  tool_compress_pdf_rules_item_1:
    'エンジン：pdf.js が各ページを canvas に描画；PDF ライブラリ が JPEG ページを新 PDF に埋め込み—ファイルはサーバーに送られません。',
  tool_compress_pdf_rules_item_2:
    '設定：中（スケール 1.2、JPEG ~72%）と低（スケール 1.0、JPEG ~55%）。低いほど小さいがソフト。',
  tool_compress_pdf_rules_item_3:
    '統計：元バイト、圧縮後バイト、変化率を表示。5% 未満の節約は「ほとんど変わらず」と通知。',
  tool_compress_pdf_rules_item_4:
    '制限：暗号化/破損 PDF は読みやすいエラー；超大ファイル（~25 MB 超）は遅い；テキストのみは効果薄い場合あり。',
  tool_compress_pdf_rules_title: '想定されるルール',
  tool_compress_pdf_sample: 'サンプルを読み込む',
  tool_compress_pdf_stats_tpl: '{from} → {to} · {pct}% 節約',
  tool_compress_pdf_status_done: '完了 — ダウンロードで compressed.pdf を保存。',
  tool_compress_pdf_status_working: 'PDF を圧縮中…',
  tool_compress_pdf_title: 'PDF のファイルサイズを縮小',
  tool_compress_pdf_usecase_1: 'オフィス：メール添付上限前にスキャン PDF を縮小。',
  tool_compress_pdf_usecase_2: '学生：写真入り課題 PDF をフォーム上限内に。',
  tool_compress_pdf_usecase_3: 'サイト運営：ラスター画質で足りる場合、共有用 PDF を軽量化。',
  tool_compress_pdf_usecases_title: '向いている場面',
  tool_compress_pdf_warn_large: 'ファイルが ~25 MB 超—圧縮が遅い、またはブラウザで失敗する場合があります。',
  tool_compress_pdf_warn_little: 'ほとんど変わらず—テキストのみや既に圧縮済みの PDF には JPEG ラスターが向かない場合があります。',
  tool_compress_pdf_warn_pdflib: 'PDF ライブラリの読み込みに失敗。ネットワークを確認して再試行。',
  tool_compress_pdf_warn_pdfjs: 'PDF レンダラーの読み込みに失敗。ネットワークを確認して再試行。',
};
export default ja;
