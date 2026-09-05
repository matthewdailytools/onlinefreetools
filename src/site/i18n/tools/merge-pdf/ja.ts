/**
 * i18n tool shard（merge-pdf / ja）。検索向けに独立して書き直し。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_merge_pdf_article:
    'クライアント側の pdf-lib でリスト順に複数 PDF を結合。アップロードなし。並べ替え、暗号化失敗の明示、結合後のダウンロードに対応。',
  tool_merge_pdf_choose_files: 'PDFを選ぶ',
  tool_merge_pdf_clear: 'クリア',
  tool_merge_pdf_desc: 'ブラウザで複数のPDFを1つにまとめます。サーバーにはアップロードせず、端末内で処理します。',
  tool_merge_pdf_description:
    'ブラウザでPDFを結合し、1つのファイルとしてダウンロードできます。アップロードはありません。手順：2つ以上のPDFを追加し、必要なら順番を変え、結合してからダウンロード。例：1ページずつのサンプル2つが2ページのPDFになります。暗号化や破損ファイルは分かりやすいエラーになります。「画像からPDF」は写真から作るのに対し、本ツールは既存PDF同士をまとめます。',
  tool_merge_pdf_download: 'ダウンロード',
  tool_merge_pdf_drop_hint: 'ここにPDFをドロップしても構いません。処理はこのタブ内で行います。',
  tool_merge_pdf_empty: '結合するにはPDFを2つ以上追加してください。',
  tool_merge_pdf_err_encrypted: 'パスワード保護されているようです。解除してから再度お試しください。',
  tool_merge_pdf_err_load: 'PDFを読めませんでした（破損または非対応）。別のファイルを試してください。',
  tool_merge_pdf_err_merge: '結合に失敗しました。ファイルを確認して再試行してください。',
  tool_merge_pdf_example:
    'サンプルは1ページのPDFを2つ（AとB）読み込み、リスト順に結合し、2ページのmerged.pdfをダウンロードできるようにします。',
  tool_merge_pdf_example_title: '複数の PDF を1つにまとめる',
  tool_merge_pdf_faq_a1:
    'いいえ。pdf-lib はタブ内で動作します（ライブラリはCDNから読み込む場合があります）。PDFはサーバーに送られません。',
  tool_merge_pdf_faq_a2:
    '「画像からPDF」は写真からPDFを作ります。本ツールは既存のPDFファイルを1つにまとめます。',
  tool_merge_pdf_faq_a3:
    'はい。各行の「上へ／下へ」で並べ替えできます。上から下の順がページ順です。',
  tool_merge_pdf_faq_a4:
    'パスワード付きPDFはここでは開けないことが多いです。信頼できる方法で解除してから結合してください。',
  tool_merge_pdf_faq_a5: '一般的なPC・スマホのPDFビューアで開けます。',
  tool_merge_pdf_faq_q1: 'PDFはアップロードされますか？',
  tool_merge_pdf_faq_q2: '画像からPDFとの違いは？',
  tool_merge_pdf_faq_q3: '結合順を変えられますか？',
  tool_merge_pdf_faq_q4: '暗号化PDFはどうなりますか？',
  tool_merge_pdf_faq_q5: 'Acrobatやプレビューで開けますか？',
  tool_merge_pdf_how_body:
    'PDFを2つ以上追加し、必要なら並べ替え、「結合」のあと「ダウンロード」。ページ順はリストどおりです。ライブラリ読込後は端末内処理です。',
  tool_merge_pdf_how_item_1: "「PDFを選ぶ」で入力ファイルを選択",
  tool_merge_pdf_how_item_2: "オプションを設定し「結合」を押す",
  tool_merge_pdf_how_item_3: "プレビュー、ページ数、ステータスを確認",
  tool_merge_pdf_how_item_4: "「ダウンロード」で結果を保存",
  tool_merge_pdf_how_title: '使い方',
  tool_merge_pdf_merge: '結合',
  tool_merge_pdf_move_down: '下へ',
  tool_merge_pdf_move_up: '上へ',
  tool_merge_pdf_remove: '削除',
  tool_merge_pdf_rules_body: 'リスト順・copyPages・プライバシー・失敗時の扱い。',
  tool_merge_pdf_rules_item_1: '順序：リスト上からページをコピーします。結合前に並べ替えてください。',
  tool_merge_pdf_rules_item_2: 'エンジン：pdf-lib が各PDFを読み込み copyPages で新文書へ。ファイルはサーバー経由しません。',
  tool_merge_pdf_rules_item_3: 'プライバシー：バイトはブラウザタブ内に留まります。ライブラリはCDNから来る場合があります。',
  tool_merge_pdf_rules_item_4: '制限：2ファイル以上が必要。暗号化・破損はエラー表示。巨大な集合はメモリで遅くなることがあります。',
  tool_merge_pdf_rules_title: 'ルール',
  tool_merge_pdf_sample: 'サンプルを読み込む',
  tool_merge_pdf_stats_tpl: '{n} ファイル → {pages} ページ · {bytes}',
  tool_merge_pdf_status_done: '完了 — ダウンロードで merged.pdf を保存できます。',
  tool_merge_pdf_status_merging: 'PDFを結合しています…',
  tool_merge_pdf_title: '複数の PDF を1つに結合',
  tool_merge_pdf_usecase_1: '事務：署名ページと添付を1つの束にまとめる。',
  tool_merge_pdf_usecase_2: '学生：提出前に課題の章を結合する。',
  tool_merge_pdf_usecase_3: '運用：仕様書とアセットを1つのPDFで渡す。',
  tool_merge_pdf_usecases_title: '向いている用途',
  tool_merge_pdf_warn_large: '約25MB超のファイルがあります。結合が遅い、または一部ブラウザで失敗することがあります。',
  tool_merge_pdf_warn_pdflib: 'PDFライブラリの読み込みに失敗しました。ネットワークを確認して再試行してください。',
};
export default ja;
