/**
 * i18n tool shard (archive-extractor / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
  tool_archive_extractor_article:
    'ZIP、TAR、TAR.GZ の圧縮ファイルをブラウザで開き、ファイルツリーを確認し、一般的なテキストや画像をプレビューして、対応済みの中身を安全な ZIP として書き出します。ファイルは端末内に残り、サーバーにアップロードされません。',
  tool_archive_extractor_choose_file: 'アーカイブを選択',
  tool_archive_extractor_clear: 'クリア',
  tool_archive_extractor_desc:
    '圧縮ファイルをオンラインで解凍し、ZIP、TAR、TAR.GZ をブラウザで確認して ZIP 書き出しできます。サーバーにアップロードしません。',
  tool_archive_extractor_description:
    'この圧縮ファイル解凍ツールで、ブラウザ内のまま圧縮ファイルを開けます。ZIP、TAR、TAR.GZ を選び、ファイルツリーを確認し、テキストや画像をプレビューし、1 ファイルをダウンロードするか対応済みの中身を安全な ZIP として書き出します。ファイルは端末内で処理され、サーバーにアップロードされません。sample-archive.tar.gz の例では README.txt、src/index.js、assets/logo.png を安全なパスで表示します。',
  tool_archive_extractor_download_all: 'ZIPで書き出し',
  tool_archive_extractor_download_file: 'ファイルをダウンロード',
  tool_archive_extractor_drop_hint:
    'アーカイブを1つドロップ。ZIP、TAR、TAR.GZ は今すぐ処理できます。RAR、7Z、ISO は対応メモを表示します。',
  tool_archive_extractor_empty: '先にアーカイブを選択してください。',
  tool_archive_extractor_engine_badge: '対応メモ',
  tool_archive_extractor_err_archive:
    'このアーカイブを読めませんでした。破損、暗号化、分割ボリューム、または未対応の圧縮方式の可能性があります。',
  tool_archive_extractor_err_engine:
    'RAR、7Z、ISO には重めの多形式エンジンが必要で、この版には同梱していません。ZIP、TAR、TAR.GZ はブラウザ内で使えます。',
  tool_archive_extractor_err_fflate: 'アーカイブエンジンを読み込めません。ネットワークを確認して再試行してください。',
  tool_archive_extractor_err_no_file: '展開済みファイルが選択されていません。',
  tool_archive_extractor_err_unsupported:
    'このファイル形式はまだここでは対応していません。ZIP、TAR、TAR.GZ を試すか、この形式はデスクトップ用ツールを使ってください。',
  tool_archive_extractor_example:
    '内蔵サンプル sample-archive.tar.gz は実際のアーカイブとして開き、README.txt、src/index.js、assets/logo.png の3項目を表示します。ページはツリーを表示し、README.txt をプレビューし、対応済みの中身を extracted-archive.zip として書き出せます。',
  tool_archive_extractor_example_title: '例',
  tool_archive_extractor_exported_all: '安全なパスで新しい ZIP にまとめました。',
  tool_archive_extractor_faq_a1:
    'いいえ。アーカイブはブラウザタブ内で読み込まれ、展開されたデータも端末内に残ります。補助スクリプトはこのサイトから読みますが、あなたのファイルは当サイトのサーバーへアップロードされません。',
  tool_archive_extractor_faq_a2:
    'この版で実際に動くのは ZIP、TAR、TAR.GZ、TGZ です。RAR、7Z、ISO は、重い多形式エンジンが有効になるまで対応メモとして表示します。',
  tool_archive_extractor_faq_a3:
    'パスワード付きアーカイブはパスワード入力が必要です。ただし形式や暗号方式が未対応なら失敗します。このツールはパスワードの解除、復元、推測をしません。',
  tool_archive_extractor_faq_a4:
    '絶対パス、../、重複名、安全でない文字は、書き出し前に改名またはブロックします。シンボリックリンクの参照先はリンクとして書き出しません。',
  tool_archive_extractor_faq_a5:
    '大きいアーカイブはブラウザ内で遅くなったり、特にスマートフォンでメモリ不足になることがあります。ファイル数、展開後サイズ、展開比率が危険に見える場合は警告します。',
  tool_archive_extractor_faq_a6:
    'ZIPで書き出しとは、展開できた対応ファイルを安全なパスで新しい ZIP に詰め直すことです。元のアーカイブ形式の全機能を保持する意味ではありません。',
  tool_archive_extractor_faq_q1: 'アーカイブはアップロードされますか？',
  tool_archive_extractor_faq_q2: 'どの圧縮形式に対応していますか？',
  tool_archive_extractor_faq_q3: 'パスワード付き RAR や 7Z を開けますか？',
  tool_archive_extractor_faq_q4: '危険なパスやシンボリックリンクはどうなりますか？',
  tool_archive_extractor_faq_q5: '非常に大きいアーカイブはどう扱いますか？',
  tool_archive_extractor_faq_q6: 'RAR から ZIP、7Z から ZIP は本当の変換ですか？',
  tool_archive_extractor_file_count_label: 'ファイル',
  tool_archive_extractor_format_label: '形式',
  tool_archive_extractor_how_body:
    'アーカイブを選択またはドロップします。ページは ZIP、TAR、TAR.GZ を判定し、安全なファイル一覧を作り、小さなテキストや画像をプレビューします。行を選んで1ファイルをダウンロードするか、対応済みファイルを新しい ZIP として書き出します。',
  tool_archive_extractor_how_title: '仕組み',
  tool_archive_extractor_load_engine: '多形式エンジンを読み込み',
  tool_archive_extractor_load_sample: 'サンプル読み込み',
  tool_archive_extractor_no_preview:
    'このファイル形式はプレビューできません。ファイルのダウンロードはできます。',
  tool_archive_extractor_preview_title: 'プレビュー',
  tool_archive_extractor_rules_body:
    '圧縮ファイルの解凍には、形式対応、パス安全性、プレビュー、ZIP 書き出しのルールが必要です。',
  tool_archive_extractor_rules_item_1:
    'ZIP は中央ディレクトリを読みます。TAR.GZ は GZIP を展開してから TAR ヘッダーを読む二段階です。',
  tool_archive_extractor_rules_item_2:
    'RAR、7Z、ISO には重めの多形式エンジンが必要です。読み込み前にそれらが有効であるようには表示しません。',
  tool_archive_extractor_rules_item_3:
    'パス安全性：先頭スラッシュ、ドライブ文字、../、重複名、安全でない文字は書き出し前に整理します。',
  tool_archive_extractor_rules_item_4:
    'プレビュー：小さなテキスト、Markdown、JSON、CSV、PNG、JPEG、GIF、WebP、SVG は表示できます。その他はメタ情報のみです。',
  tool_archive_extractor_rules_item_5:
    '制限：暗号化、分割、破損、solid、異常に膨らむアーカイブは失敗するか、デスクトップツールが必要です。',
  tool_archive_extractor_rules_title: '想定されるルール',
  tool_archive_extractor_selected_label: '選択中',
  tool_archive_extractor_size_label: '展開後サイズ',
  tool_archive_extractor_status_done: 'アーカイブを開きました — ファイルを選ぶか ZIP で書き出してください。',
  tool_archive_extractor_status_reading: 'アーカイブを読み込み中...',
  tool_archive_extractor_title:
    '圧縮ファイルをオンラインで解凍 — ブラウザで中身を確認して取り出す',
  tool_archive_extractor_total_size_label: '展開後合計',
  tool_archive_extractor_usecase_1:
    '開発：.tar.gz のソース配布を開き、README と src を確認して必要なファイルだけ取得します。',
  tool_archive_extractor_usecase_2:
    '業務：取引先の ZIP、RAR、7Z 素材パックを確認し、対応済みファイルを安全な ZIP としてチームへ渡します。',
  tool_archive_extractor_usecase_3:
    '管理端末：Chromebook などソフトを入れられない環境で、教材や添付ファイルを一時確認します。',
  tool_archive_extractor_usecases_title: '使いやすい場面',
  tool_archive_extractor_warn_dangerous:
    '一部のパスは安全のため、書き出し前に改名またはスキップされました。',
  tool_archive_extractor_warn_large:
    '大きなアーカイブの警告：このファイルはブラウザ内で遅い、またはメモリを多く使う可能性があります。',
};

export default ja;
