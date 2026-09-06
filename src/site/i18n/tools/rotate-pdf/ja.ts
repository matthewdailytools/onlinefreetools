/**
 * i18n 工具分片（rotate-pdf / ja）。日本語検索向けに独立リライト。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '反時計回り 90°',
  tool_rotate_pdf_angle_90cw: '時計回り 90°',
  tool_rotate_pdf_angle_label: '回転',
  tool_rotate_pdf_article:
    'ブラウザで PDF ライブラリ を使い、横向き・逆さの PDF ページを直します。全ページまたは範囲指定—ファイルは端末に留まり、サーバーにアップロードしません。',
  tool_rotate_pdf_choose_file: 'PDF を選ぶ',
  tool_rotate_pdf_clear: 'クリア',
  tool_rotate_pdf_desc:
    '端末内で PDF の向きを直す—全ページまたは範囲指定。サーバーへは送信しません。',
  tool_rotate_pdf_description:
    'ブラウザで PDF ページを回転し、縦横の混在を修正—サーバーにアップロードしません。手順：PDF を選び、全ページまたは 1-3,5 のような範囲を指定し、時計回り 90°・180°・反時計回り 90° を選んで回転→ダウンロード。例：2 ページのサンプルを全ページ時計回り 90° に回し、rotated.pdf のダウンロードを有効化。暗号化ファイルは明確なエラーで失敗します。',
  tool_rotate_pdf_download: 'ダウンロード',
  tool_rotate_pdf_drop_hint: 'PDF をここにドロップも可。処理はこのタブ内で完結します。',
  tool_rotate_pdf_empty: '先に PDF を選んでください。',
  tool_rotate_pdf_err_encrypted: 'この PDF はパスワード保護の可能性があります。解除してから再試行してください。',
  tool_rotate_pdf_err_load: 'PDF を読み取れません（破損または非対応）。別ファイルをお試しください。',
  tool_rotate_pdf_err_range: 'ページ指定が無効または範囲外です。1 始まりで 1-3,5 のように入力してください。',
  tool_rotate_pdf_err_rotate: '回転に失敗しました。ファイルと範囲を確認して再試行してください。',
  tool_rotate_pdf_example:
    'サンプルは 2 ページの PDF を作成し、全ページを時計回り 90° 回転して rotated.pdf のダウンロードを有効にします。',
  tool_rotate_pdf_example_title: '例',
  tool_rotate_pdf_faq_a1:
    'いいえ。PDF ライブラリ はタブ内で動作します（スクリプトは このサイトから読み込みます）。PDF は当社サーバーにアップロードされません。',
  tool_rotate_pdf_faq_a2: 'はい—ダウンロードしたファイルに回転後の向きが書き込まれます。共有前にビューアで確認してください。',
  tool_rotate_pdf_faq_a3:
    '1 始まり：1-3,5 は 1〜3 ページと 5 ページです。空白は任意。空または範囲外は失敗します。',
  tool_rotate_pdf_faq_a4: 'パスワード付き PDF は通常ここでは開けません。信頼できる方法で解除してから回転してください。',
  tool_rotate_pdf_faq_q1: 'PDF はアップロードされますか？',
  tool_rotate_pdf_faq_q2: '回転はファイルを永久に変えますか？',
  tool_rotate_pdf_faq_q3: 'ページ範囲の書き方は？',
  tool_rotate_pdf_faq_q4: '暗号化 PDF は？',
  tool_rotate_pdf_how_body:
    'PDF を選び、全ページまたは範囲を指定し、角度を選んで「回転」→「ダウンロード」。既存の回転角に加算されます。ライブラリ読込後はすべて端末内です。',
  tool_rotate_pdf_how_item_1: "「PDF を選ぶ」で入力ファイルを選択",
  tool_rotate_pdf_how_item_2: "オプションを設定し「回転」を押す",
  tool_rotate_pdf_how_item_3: "プレビュー、ページ数、ステータスを確認",
  tool_rotate_pdf_how_item_4: "「ダウンロード」で結果を保存",
  tool_rotate_pdf_how_title: '使い方',
  tool_rotate_pdf_mode_all: '全ページ',
  tool_rotate_pdf_mode_label: '回転するページ',
  tool_rotate_pdf_mode_ranges: 'ページ範囲を指定',
  tool_rotate_pdf_pages_label: 'ページ数',
  tool_rotate_pdf_ranges_hint: '例：1-3,5（1 始まり）',
  tool_rotate_pdf_ranges_label: 'ページ範囲',
  tool_rotate_pdf_rotate: '回転',
  tool_rotate_pdf_rules_body: '角度、累加回転、範囲構文、プライバシー、失敗時の挙動。',
  tool_rotate_pdf_rules_item_1: '角度：時計回り 90°、180°、反時計回り 90°（270°）。ページの現在角に加算。',
  tool_rotate_pdf_rules_item_2: 'ページ：全ページ、または 1 始まりの 1-3,5（PDF 分割と同じ構文）。',
  tool_rotate_pdf_rules_item_3: '出力：指定ページだけ向きを変えた 1 つの PDF。未指定ページはそのまま。',
  tool_rotate_pdf_rules_item_4: '制限：バイトはタブ内；暗号化/破損は明確に失敗；巨大ファイルはメモリで遅くなる場合あり。',
  tool_rotate_pdf_rules_title: '想定されるルール',
  tool_rotate_pdf_sample: 'サンプルを読み込む',
  tool_rotate_pdf_stats_tpl: '{n} ページ回転 · {bytes}',
  tool_rotate_pdf_status_done: '完了 — ダウンロードで rotated.pdf を保存。',
  tool_rotate_pdf_status_rotating: 'PDF を回転中…',
  tool_rotate_pdf_title: 'PDF回転 — ブラウザでページの向きを直す',
  tool_rotate_pdf_usecase_1: 'オフィス：印刷やメール前に横向きスキャンを縦に直す。',
  tool_rotate_pdf_usecase_2: '学生：スマホ撮影のスライドで縦横が混在しているとき。',
  tool_rotate_pdf_usecase_3: 'サイト運営：配布 PDF の 1 ページだけ向きを直し、全体を再スキャンしない。',
  tool_rotate_pdf_usecases_title: 'こんなときに',
  tool_rotate_pdf_warn_large: '約 25 MB 超—回転が遅い、または一部ブラウザで失敗する場合があります。',
  tool_rotate_pdf_warn_pdflib: 'PDF ライブラリの読み込みに失敗しました。ネットワークを確認して再試行してください。',
};
export default ja;
