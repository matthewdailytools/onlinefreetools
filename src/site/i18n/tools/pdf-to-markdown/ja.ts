/**
 * i18n tool shard (pdf-to-markdown / ja). 検索向けに独立リライト。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'ブラウザで PDF のテキスト層から選択可能な文字を取り出し Markdown として保存します。ファイルは端末内で処理され、サーバーにアップロードしません。OCR は行いません。',
  tool_pdf_to_markdown_choose_file: 'PDF を選ぶ',
  tool_pdf_to_markdown_clear: 'クリア',
  tool_pdf_to_markdown_convert: '変換',
  tool_pdf_to_markdown_desc:
    'PDF の文字を Markdown にしてメモや LLM 用に——端末内で処理、サーバーにアップロードしません。',
  tool_pdf_to_markdown_description:
    'ブラウザで PDF テキストを Markdown に抽出し、メモや LLM 貼り付けに使えます——ファイルは端末に残り、サーバーにアップロードしません。手順：テキスト層のある PDF を選び、変換、プレビュー確認、.md をダウンロード。例：1 ページのサンプルは「Hello PDF to Markdown sample.」を含む .md になります。スキャン画像のみの PDF は OCR なしで失敗します。暗号化・破損は明確なエラー。',
  tool_pdf_to_markdown_download: '.md をダウンロード',
  tool_pdf_to_markdown_drop_hint: 'ここに PDF をドロップも可。このタブ内で処理します。',
  tool_pdf_to_markdown_empty: '先に PDF ファイルを選んでください。',
  tool_pdf_to_markdown_err_convert: '変換に失敗しました。ファイルを確認して再試行してください。',
  tool_pdf_to_markdown_err_encrypted: 'この PDF はパスワード保護の可能性があります。解除してから再試行してください。',
  tool_pdf_to_markdown_err_load: 'PDF を読めません（破損または非対応）。別ファイルを試してください。',
  tool_pdf_to_markdown_err_notext:
    '選択可能な文字がありません。テキスト層のみ読み取り、OCR はしません。デジタル PDF を使うか、画像が必要なら PDF→JPG を。',
  tool_pdf_to_markdown_err_pdfjs: 'PDF レンダラの読み込みに失敗しました。ネットワークを確認して再試行してください。',
  tool_pdf_to_markdown_example:
    'サンプルは Helvetica 1 ページ PDF を作り、変換してプレビューに文を表示し、.md ダウンロードを有効にします。',
  tool_pdf_to_markdown_example_title: '例',
  tool_pdf_to_markdown_faq_a1:
    'いいえ。ページ描画 はタブ内で動作します（このサイトから読み込みます）。PDF は当社サーバーに送られません。',
  tool_pdf_to_markdown_faq_a2:
    'スキャン PDF は多くが画像のみでテキスト層がありません。OCR しないため空になり、明確に失敗します。',
  tool_pdf_to_markdown_faq_a3:
    '見出しや表は再構成しません。位置で行にまとめたプレーンテキストを出力します。',
  tool_pdf_to_markdown_faq_a4:
    '「PDF からテキスト抽出」はページ間に空行の plain .txt をダウンロードします。本ツールは各ページを ## Page N で包み、--- で区切って Markdown エディタ向けにします。',
  tool_pdf_to_markdown_faq_a5:
    'PDF→JPG は各ページを画像化。編集可能な文字が欲しいデジタル PDF には本ツールを。',
  tool_pdf_to_markdown_faq_q1: 'PDF はアップロードされますか？',
  tool_pdf_to_markdown_faq_q2: 'スキャン PDF が失敗するのはなぜ？',
  tool_pdf_to_markdown_faq_q3: '見出しや表は残りますか？',
  tool_pdf_to_markdown_faq_q4: '「PDF からテキスト抽出」との違いは？',
  tool_pdf_to_markdown_faq_q5: 'PDF→JPG を使うべきときは？',
  tool_pdf_to_markdown_how_body:
    'テキスト層のある PDF を選び、変換し、ページ見出し付き Markdown 草案を確認して .md をダウンロード。テキストのないスキャンは明確に失敗 — OCR なし。',
  tool_pdf_to_markdown_how_item_1: "テキスト層のある PDF を選択またはドロップ（またはサンプル読み込み）",
  tool_pdf_to_markdown_how_item_2: "「変換」を押して Markdown 草案を作成",
  tool_pdf_to_markdown_how_item_3: "プレビューで ## Page N セクションと --- 区切りを確認",
  tool_pdf_to_markdown_how_item_4: "「.md をダウンロード」で草案を保存",
  tool_pdf_to_markdown_how_title: '使い方',
  tool_pdf_to_markdown_pages_label: 'ページ数',
  tool_pdf_to_markdown_preview_label: 'Markdown プレビュー',
  tool_pdf_to_markdown_rules_body: 'テキスト層抽出、ページ区切り、OCR なし、プライバシーと失敗条件。',
  tool_pdf_to_markdown_rules_item_1:
    '各ページは ## Page N とテキスト行；ページは --- で Markdown エディタ向けに区切られます。',
  tool_pdf_to_markdown_rules_item_2: '「PDF からテキスト抽出」（.txt）と異なり、このダウンロードはエディタ向け .md 草案 — レイアウト忠実変換ではありません。',
  tool_pdf_to_markdown_rules_item_3: 'OCR なし：trim 後空なら明確に失敗——スキャンは別ワークフロー。',
  tool_pdf_to_markdown_rules_item_4: '制限：バイトはタブ内；暗号化/破損は明確；~25 MB 超は遅くなる場合あり。',
  tool_pdf_to_markdown_rules_title: '想定されるルール',
  tool_pdf_to_markdown_sample: 'サンプルを読み込む',
  tool_pdf_to_markdown_stats_tpl: '{n} ページ · {chars} 文字',
  tool_pdf_to_markdown_status_converting: 'テキストを抽出中…',
  tool_pdf_to_markdown_status_done: '完了 — .md をダウンロードして保存。',
  tool_pdf_to_markdown_title: 'PDFをMarkdownに — 端末内でテキスト抽出',
  tool_pdf_to_markdown_usecase_1: 'オフィス：契約条項をメモや Wiki にコピー、再入力不要。',
  tool_pdf_to_markdown_usecase_2: '執筆・AI：レポート本文を Markdown 化して編集やプロンプトに。',
  tool_pdf_to_markdown_usecase_3: '学生：テキスト層のある講義 PDF から復習メモ用テキストを。',
  tool_pdf_to_markdown_usecases_title: '向いている場面',
  tool_pdf_to_markdown_warn_large: '約 25 MB 超 — 抽出が遅いか失敗する場合があります。',
  tool_pdf_to_markdown_warn_pdflib: 'PDF ライブラリの読み込みに失敗。ネットワークを確認してください。',
};
export default ja;
