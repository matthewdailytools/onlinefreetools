/**
 * i18n tool shard（split-pdf / ja）。検索向けに独立して書き直し。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_split_pdf_article:
    'クライアント側の pdf-lib でページ単位または範囲で PDF を分割。複数出力は fflate で ZIP。アップロードなし。',
  tool_split_pdf_choose_file: 'PDFを選ぶ',
  tool_split_pdf_clear: 'クリア',
  tool_split_pdf_desc: '端末内でPDFからページを取り出します（サーバーにアップロードしません）。全ページまたは範囲指定。必要ならZIP。',
  tool_split_pdf_description:
    'ブラウザでPDFを分割し、ページや範囲を別ファイルとしてダウンロードできます。アップロードはありません。手順：PDFを選び、「1ページごと」か 1-3,5 のような範囲を指定して分割し、ダウンロード。例：3ページのサンプルは page-1.pdf〜page-3.pdf のZIPになります。出力が1ファイルだけのときはPDFを直接保存。暗号化ファイルは分かりやすいエラーになります。',
  tool_split_pdf_download: 'ダウンロード',
  tool_split_pdf_drop_hint: 'ここにPDFを1つドロップしても構いません。処理はこのタブ内です。',
  tool_split_pdf_empty: '先にPDFファイルを選んでください。',
  tool_split_pdf_err_encrypted: 'パスワード保護されているようです。解除してから再度お試しください。',
  tool_split_pdf_err_fflate: 'ZIPライブラリの読み込みに失敗しました。ネットワークを確認して再試行してください。',
  tool_split_pdf_err_load: 'PDFを読めませんでした（破損または非対応）。別のファイルを試してください。',
  tool_split_pdf_err_range: 'ページ指定が無効または範囲外です。1始まりで 1-3,5 のように書いてください。',
  tool_split_pdf_err_split: '分割に失敗しました。ファイルと範囲を確認して再試行してください。',
  tool_split_pdf_example:
    'サンプルは3ページのPDFを作り、1ページごとに分割し、page-1.pdf〜page-3.pdf のZIPをダウンロードできるようにします。',
  tool_split_pdf_example_title: '例',
  tool_split_pdf_faq_a1:
    'いいえ。pdf-lib と fflate はタブ内で動作します（スクリプトはCDNから読み込む場合があります）。PDFはサーバーに送られません。',
  tool_split_pdf_faq_a2:
    'ページ番号は1始まりです。1-3,5 は1〜3ページと5ページ。空白は任意。空や範囲外は失敗します。',
  tool_split_pdf_faq_a3:
    '出力が2つ以上ならZIP、ちょうど1つならPDFをダウンロードします。',
  tool_split_pdf_faq_a4:
    'パスワード付きPDFはここでは開けないことが多いです。信頼できる方法で解除してから分割してください。',
  tool_split_pdf_faq_a5:
    'PDF結合は複数PDFを1つにします。本ツールは1つのPDFからページを取り出して複数ファイルにします。',
  tool_split_pdf_faq_q1: 'PDFはアップロードされますか？',
  tool_split_pdf_faq_q2: 'ページ範囲の書き方は？',
  tool_split_pdf_faq_q3: 'ZIPとPDFのどちらになりますか？',
  tool_split_pdf_faq_q4: '暗号化PDFはどうなりますか？',
  tool_split_pdf_faq_q5: 'PDF結合との違いは？',
  tool_split_pdf_how_body:
    'PDFを1つ選び、全ページまたは範囲を指定して「分割」→「ダウンロード」。複数出力はZIP、単一はPDF。ライブラリ読込後は端末内処理です。',
  tool_split_pdf_how_title: '使い方',
  tool_split_pdf_mode_every: '1ページごと（ページごとに1ファイル）',
  tool_split_pdf_mode_label: '分割モード',
  tool_split_pdf_mode_ranges: 'ページ範囲を指定',
  tool_split_pdf_pages_label: 'ページ数',
  tool_split_pdf_ranges_hint: '例：1-3,5（1始まり）',
  tool_split_pdf_ranges_label: 'ページ範囲',
  tool_split_pdf_rules_body: '1始まりの範囲、ファイル名、ZIP/PDF、プライバシーと失敗時の扱い。',
  tool_split_pdf_rules_item_1: 'モード：全ページ→各ページ1PDF；範囲→カンマ区切りの各区間が1PDF（例：1-3 と 5）。',
  tool_split_pdf_rules_item_2: '名前：単ページは page-N.pdf、連続区間は pages-A-B.pdf。',
  tool_split_pdf_rules_item_3: '出力：2ファイル以上→fflate のZIP；ちょうど1つ→そのPDFをダウンロード。',
  tool_split_pdf_rules_item_4: 'プライバシーと制限：バイトはタブ内。暗号化・破損は明確に失敗。巨大ファイルはメモリで遅くなることがあります。',
  tool_split_pdf_rules_title: 'ルール',
  tool_split_pdf_sample: 'サンプルを読み込む',
  tool_split_pdf_split: '分割',
  tool_split_pdf_stats_tpl: '{n} ファイル · {bytes}',
  tool_split_pdf_status_done: '完了 — ダウンロードで保存できます。',
  tool_split_pdf_status_splitting: 'PDFを分割しています…',
  tool_split_pdf_title: 'PDF分割 — ページを端末内で取り出す',
  tool_split_pdf_usecase_1: '事務：長い契約書から署名ページだけ取り出す。',
  tool_split_pdf_usecase_2: '教材：スライドPDFをページごとの配布資料に分ける。',
  tool_split_pdf_usecase_3: '運用：スキャンをページ単位で個別保存する。',
  tool_split_pdf_usecases_title: '向いている用途',
  tool_split_pdf_warn_large: '約25MB超のファイルです。分割が遅い、または一部ブラウザで失敗することがあります。',
  tool_split_pdf_warn_pdflib: 'PDFライブラリの読み込みに失敗しました。ネットワークを確認して再試行してください。',
};
export default ja;
