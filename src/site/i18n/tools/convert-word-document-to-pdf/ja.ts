/**
 * i18n 工具分片（convert-word-document-to-pdf / ja）。
 * 日语检索向重写：Word文書をPDFに変換。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器标签页内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 日语文案表；键名与英文母版一一对应。 */
const ja: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: "このタブで .docx を PDF にします。ファイルは端末内に残り、サーバーへは送りません。",
  tool_convert_word_document_to_pdf_choose_file: "Wordファイル（.docx）を選ぶ",
  tool_convert_word_document_to_pdf_choose_files: "ファイルを選ぶ",
  tool_convert_word_document_to_pdf_clear: "クリア",
  tool_convert_word_document_to_pdf_convert: "変換",
  tool_convert_word_document_to_pdf_desc: "ブラウザで Word 文書を PDF に変換します。.docx を選び、HTMLプレビューを見てから書き出します。ファイルは端末に残り、サーバーにはアップロードしません。",
  tool_convert_word_document_to_pdf_description: "文書はこの端末に残り、サーバーにはアップロードしません。Word文書をPDFに変換するときは「Wordファイル（.docx）を選ぶ」か「サンプルを読み込む」から入り、HTMLプレビューを読んで「変換」、状態が「完了。」になったら「PDFをダウンロード」です。手順の例は一文の Word と 1 ページの PDF です。",
  tool_convert_word_document_to_pdf_download: "PDFをダウンロード",
  tool_convert_word_document_to_pdf_drop_hint: ".docx をここにドロップしても始められます。処理はこのタブの中だけです。",
  tool_convert_word_document_to_pdf_empty: "先に .docx を選んでください。",
  tool_convert_word_document_to_pdf_err_convert: "変換できませんでした。より簡単な文書でやり直してください。",
  tool_convert_word_document_to_pdf_err_encrypted: "パスワードがかかっているようです。先に解除してください。",
  tool_convert_word_document_to_pdf_err_load: "この .docx を読めませんでした。",
  tool_convert_word_document_to_pdf_err_notext: "読める本文が見つかりません。",
  tool_convert_word_document_to_pdf_err_pdfjs: "PDF の描画部品を読み込めませんでした。",
  tool_convert_word_document_to_pdf_example: "「サンプルを読み込む」は「変換用のサンプル Word 段落です。」だけの .docx を作り、HTMLプレビューを出してから 1 ページの PDF にします。",
  tool_convert_word_document_to_pdf_example_title: "例",
  tool_convert_word_document_to_pdf_faq_a1: "送られません。HTML への読み取りと PDF への書き出しはこのタブで動きます。スクリプトは当サイトから読み込みます。文書は当社のサーバーに届きません。",
  tool_convert_word_document_to_pdf_faq_a2: "経路が .docx から HTMLプレビュー、そのあと PDF だからです。ヘッダー、浮動図形、一部のフォントは平坦になります。マークアップがすでにあるなら「HTML を PDF に変換」へ。",
  tool_convert_word_document_to_pdf_faq_a3: "受け付けません。先に .docx で保存してください。対象は Office Open XML だけで、スキャン画像の文字認識もしません。",
  tool_convert_word_document_to_pdf_faq_a4: "こちらは手元の Word ファイルから始めます。「オンラインでPDF文書を作成」は白紙のエディタです。",
  tool_convert_word_document_to_pdf_faq_a5: "大きな .docx は時間がかかります。まずはデスクトップのブラウザで試してください。",
  tool_convert_word_document_to_pdf_faq_q1: "この Word ファイルは外に送られますか？",
  tool_convert_word_document_to_pdf_faq_q2: "仕上がりの PDF が Word より単純になるのはなぜですか？",
  tool_convert_word_document_to_pdf_faq_q3: "古い .doc はそのまま変換できますか？",
  tool_convert_word_document_to_pdf_faq_q4: "オンラインで PDF 文書を作る機能とどう違いますか？",
  tool_convert_word_document_to_pdf_faq_q5: "大きなファイルでも大丈夫ですか？",
  tool_convert_word_document_to_pdf_how_body: "本文の HTMLプレビュー を確認してから「変換」します。入口は「Wordファイル（.docx）を選ぶ」か「サンプルを読み込む」。終わったら「PDFをダウンロード」。ファイルはこのタブの外に出ません。",
  tool_convert_word_document_to_pdf_how_item_1: "「Wordファイル（.docx）を選ぶ」か「サンプルを読み込む」を押します。",
  tool_convert_word_document_to_pdf_how_item_2: "本文の HTMLプレビュー を読みます。",
  tool_convert_word_document_to_pdf_how_item_3: "「変換」を押し、そのプレビューから PDF を作ります。",
  tool_convert_word_document_to_pdf_how_item_4: "状態が「完了。」になったら「PDFをダウンロード」を押します。",
  tool_convert_word_document_to_pdf_how_title: "Word文書をPDFに変換する手順",
  tool_convert_word_document_to_pdf_preview_label: "HTMLプレビュー",
  tool_convert_word_document_to_pdf_rules_body: "受け取れるのは .docx だけです。レイアウト、ヘッダー、込み入ったスタイルは PDF で平坦になることがあります。",
  tool_convert_word_document_to_pdf_rules_item_1: "やることは一つ。ブラウザの中で Word 文書を印刷できる PDF にすること。",
  tool_convert_word_document_to_pdf_rules_item_2: "処理は端末内だけ。ファイルはサーバーにアップロードしません。",
  tool_convert_word_document_to_pdf_rules_item_3: "旧 .doc と、画像だけのスキャンは文字認識しません。",
  tool_convert_word_document_to_pdf_rules_item_4: "パスワード付きや壊れたファイルは、読めるエラーで止まります。",
  tool_convert_word_document_to_pdf_rules_item_5: "ヘッダー、浮動図形、一部のフォントは平坦になります。経路が .docx から HTML、そして PDF だからです。",
  tool_convert_word_document_to_pdf_rules_title: "変換後に残るものと崩れるもの",
  tool_convert_word_document_to_pdf_sample: "サンプルを読み込む",
  tool_convert_word_document_to_pdf_sample_paragraph: "変換用のサンプル Word 段落です。",
  tool_convert_word_document_to_pdf_status_done: "完了。",
  tool_convert_word_document_to_pdf_status_working: "処理しています…",
  tool_convert_word_document_to_pdf_title: "Word文書をPDFに変換",
  tool_convert_word_document_to_pdf_usecase_1: "授業の短い .docx を、印刷の前にプレビューで確認する",
  tool_convert_word_document_to_pdf_usecase_2: "社用 PC に Word がなく、下書きを PDF で渡したい",
  tool_convert_word_document_to_pdf_usecase_3: "内容を端末の外に出せない手紙",
  tool_convert_word_document_to_pdf_usecases_title: "こんなときに使う",
  tool_convert_word_document_to_pdf_warn_large: "大きいファイルです。時間がかかることがあります。",
};
export default ja;
