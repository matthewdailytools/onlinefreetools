import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
  tool_unzip_file_article:
    'ブラウザでZIPを開き、ファイルツリーを確認し、テキストや画像をプレビューして必要なファイルをダウンロードできます。アーカイブは端末内に残り、サーバーにアップロードしません。',
  tool_unzip_file_choose_file: 'ZIPを選択',
  tool_unzip_file_clear: 'クリア',
  tool_unzip_file_desc:
    'ZIPをオンラインで解凍し、ブラウザ内で中身を確認してダウンロードできます。サーバーにアップロードしません。',
  tool_unzip_file_description:
    'ZIPファイルをオンラインで解凍します。ZIPを選択またはドロップし、ファイルツリーを確認し、テキストや画像をプレビューして、1ファイルだけ、またはすべてを出力できます。ファイルは端末内のブラウザで処理され、サーバーにアップロードしません。例の project-files.zip では readme.txt、assets/logo.png、docs/notes.md と安全なパスを確認できます。',
  tool_unzip_file_download_all: 'すべて書き出し',
  tool_unzip_file_download_file: 'ファイルをダウンロード',
  tool_unzip_file_drop_hint: '.zip ファイルを1つドロップしてください。処理はこのタブ内で行われます。',
  tool_unzip_file_empty: '先にZIPファイルを選択してください。',
  tool_unzip_file_err_archive: 'ZIPを読み取れませんでした。破損、暗号化、またはZIPではない可能性があります。',
  tool_unzip_file_err_fflate: 'ZIPエンジンを読み込めませんでした。ネットワークを確認して再試行してください。',
  tool_unzip_file_err_no_file: '選択された展開済みファイルがありません。',
  tool_unzip_file_example:
    '内蔵サンプル project-files.zip は readme.txt、assets/logo.png、docs/notes.md の3つを展開します。ページにはツリー、readme.txt のプレビュー、ファイルダウンロードとすべて書き出しが表示されます。',
  tool_unzip_file_example_title: '例',
  tool_unzip_file_exported_all: '安全なパスで新しいZIPにまとめました。',
  tool_unzip_file_faq_a1:
    'いいえ。ZIPはブラウザタブ内で読み取られ、展開後のデータも端末内に残ります。ZIPエンジンのスクリプトはCDNから読み込まれる場合がありますが、アーカイブ自体はサーバーにアップロードされません。',
  tool_unzip_file_faq_a2:
    'このページはZIP向けです。RAR、7Z、ISO、TAR.GZ はより重いマルチ形式エンジンが必要なため、対応する場合は別のアーカイブ展開ツールで扱うのが適切です。',
  tool_unzip_file_faq_a3:
    'パスワード付きZIPは、互換性のある対応が追加されていない場合は失敗することがあります。このツールはパスワードを解析したり復元したりしません。',
  tool_unzip_file_faq_a4:
    '絶対パス、../、空の名前、重複名は書き出し前にリネームまたはブロックします。パスが変更された場合は一覧で分かります。',
  tool_unzip_file_faq_a5:
    '大きなZIPはブラウザ内で遅くなったり、特にスマートフォンでメモリ不足になることがあります。ファイル数、展開後サイズ、展開倍率が大きい場合は警告します。',
  tool_unzip_file_faq_q1: 'ZIPファイルはアップロードされますか？',
  tool_unzip_file_faq_q2: 'RAR、7Z、TAR.GZ も展開できますか？',
  tool_unzip_file_faq_q3: 'パスワード付きZIPを開けますか？',
  tool_unzip_file_faq_q4: '危険なパスはどう処理されますか？',
  tool_unzip_file_faq_q5: 'とても大きなZIPはどうなりますか？',
  tool_unzip_file_file_count_label: 'ファイル数',
  tool_unzip_file_how_body:
    'ZIPを選択またはドロップします。ページはアーカイブを読み取り、パスを整え、ファイル一覧を作り、テキストと画像の安全なプレビューを表示します。行を選ぶとプレビューとダウンロードができ、すべてを安全なパスの新しいZIPとして書き出せます。',
  tool_unzip_file_how_title: '使い方',
  tool_unzip_file_load_sample: 'サンプル読み込み',
  tool_unzip_file_no_preview:
    'この種類のファイルはプレビューできません。ダウンロードは可能です。',
  tool_unzip_file_preview_title: 'プレビュー',
  tool_unzip_file_rules_body:
    'ブラウザでZIPを展開するには、パス、プレビュー、ダウンロード方法、失敗時の扱いを明確にする必要があります。',
  tool_unzip_file_rules_item_1:
    'パス安全性: 先頭スラッシュ、ドライブ文字、../、重複名は書き出し前に整理します。',
  tool_unzip_file_rules_item_2:
    'プレビュー: 小さなテキスト、Markdown、JSON、CSV、PNG、JPEG、GIF、WebP、SVG は表示できます。他の形式はメタ情報のみです。',
  tool_unzip_file_rules_item_3:
    'ダウンロード: 選択したファイルは直接保存し、すべて書き出しは整理済みファイルから新しいZIPを作ります。',
  tool_unzip_file_rules_item_4:
    '制限: 暗号化、分割、破損、異常に膨らむアーカイブは失敗するか、将来の確認手順が必要になる場合があります。',
  tool_unzip_file_rules_title: '知っておきたいルール',
  tool_unzip_file_selected_label: '選択中',
  tool_unzip_file_size_label: '展開後サイズ',
  tool_unzip_file_status_done: 'ZIPを展開しました。ファイルを選ぶか、すべて書き出してください。',
  tool_unzip_file_status_reading: 'ZIPを読み込み中...',
  tool_unzip_file_title: 'ZIPをオンラインで解凍 — ブラウザで中身を確認して取り出す',
  tool_unzip_file_total_size_label: '展開後サイズ',
  tool_unzip_file_usecase_1:
    '仕事: 取引先から届いたZIPを開き、必要な請求書や画像だけを保存できます。',
  tool_unzip_file_usecase_2:
    '学習: 管理されたPCやタブレットで、デスクトップアプリを入れずに教材ZIPを確認できます。',
  tool_unzip_file_usecase_3:
    '開発: ソース配布ZIPのツリーを確認し、あとで元ZIPのチェックサムを記録できます。',
  tool_unzip_file_usecases_title: '向いている場面',
  tool_unzip_file_warn_dangerous:
    '一部のパスは安全のため書き出し前にリネームされました。',
  tool_unzip_file_warn_large:
    '大きなアーカイブです。このZIPはブラウザで遅くなる、またはメモリを多く使う可能性があります。',
};

export default ja;
