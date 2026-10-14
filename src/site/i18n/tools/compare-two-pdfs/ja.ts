/**
 * i18n tool shard (compare-two-pdfs / ja)。
 * 2つの PDF のテキスト層を比較：追加・削除のハイライト、ページ数、大文字小文字/空白の無視オプション。OCR なし。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語文案辞書（「PDF 比較 / PDF テキスト差分 / 2つのPDFを比較」の検索習慣で書き直し）。 */
const ja: SiteLangDict = {
	tool_compare_two_pdfs_title: "2つの PDF を比較 — テキストの差分をハイライト",
	tool_compare_two_pdfs_desc: "PDF 比較：2つの PDF のテキスト差分を色分けし HTML で保存。サーバーにアップロードしません。",
	tool_compare_two_pdfs_description:
		"2つの PDF を比較して、文言の変更をすばやく見つけます。各ファイルから選択できるテキストを取り出し、B で追加された語を緑、A から削除された語を赤でハイライトします。手順：PDF A と PDF B を選び、「比較する」を押して差分と件数を確認し、必要なら「HTML 差分をダウンロード」。例：「支払期限は三十日」が「支払期限は六十日」に変わると、三十と六十が色分けされます。対象はテキスト層のみで、OCR は行いません。",
	tool_compare_two_pdfs_file_a: "PDF A（旧版・原本）",
	tool_compare_two_pdfs_file_b: "PDF B（新版・改訂版）",
	tool_compare_two_pdfs_choose_file: "PDF を選択、またはこの枠にドロップ",
	tool_compare_two_pdfs_choose_files: "ファイルを選択",
	tool_compare_two_pdfs_drop_hint: "PDF をここにドロップしてもかまいません。処理はこのタブ内で完結します。",
	tool_compare_two_pdfs_compare: "比較する",
	tool_compare_two_pdfs_download: "HTML 差分をダウンロード",
	tool_compare_two_pdfs_sample: "サンプルを読み込む",
	tool_compare_two_pdfs_clear: "クリア",
	tool_compare_two_pdfs_advanced: "詳細設定（任意）",
	tool_compare_two_pdfs_ignore_case: "大文字と小文字を区別しない",
	tool_compare_two_pdfs_ignore_space: "連続する空白と改行をまとめる",
	tool_compare_two_pdfs_advanced_hint: "文言は同じでも、書き出しごとに改行位置が違うときに役立ちます。",
	tool_compare_two_pdfs_result_label: "テキスト差分（A → B）",
	tool_compare_two_pdfs_legend_added: "B で追加",
	tool_compare_two_pdfs_legend_removed: "A から削除",
	tool_compare_two_pdfs_empty: "先に PDF A と PDF B の両方を選んでください。",
	tool_compare_two_pdfs_err_convert: "比較結果を作成できませんでした。ページを再読み込みしてもう一度お試しください。",
	tool_compare_two_pdfs_err_encrypted: "この PDF はパスワードで保護されているようです。保護を解除してから比較してください。",
	tool_compare_two_pdfs_err_load: "PDF ファイルのどちらかを読み込めませんでした。",
	tool_compare_two_pdfs_err_notext: "選択できるテキスト層が見つかりません。画像だけのスキャン PDF は、先に OCR をかけないと比較できません。",
	tool_compare_two_pdfs_err_pdfjs: "PDF の表示コンポーネントを読み込めませんでした。",
	tool_compare_two_pdfs_status_working: "テキストを抽出して比較しています…",
	tool_compare_two_pdfs_status_done: "完了しました。緑は B で追加、赤は A から削除された箇所です。ダウンロードすると HTML ファイルとして保存できます。",
	tool_compare_two_pdfs_status_identical: "現在の設定では、テキストに違いはありません。",
	tool_compare_two_pdfs_summary_tpl: "追加 {added} 件 · 削除 {removed} 件",
	tool_compare_two_pdfs_pages_tpl: "ページ数 A={a}、B={b}",
	tool_compare_two_pdfs_warn_large: "ファイルが大きいため、比較に時間がかかることがあります。",
	tool_compare_two_pdfs_how_title: "2つの PDF を比較する手順",
	tool_compare_two_pdfs_how_body:
		"PDF.js で各 PDF のテキスト層を読み取り、単語単位で差分を取ります。レイアウト・フォント・画像は見ず、選択できる文字だけを比べます。",
	tool_compare_two_pdfs_how_item_1: "PDF A（原本）と PDF B（改訂版）を選ぶか、それぞれの枠にファイルをドロップします。",
	tool_compare_two_pdfs_how_item_2: "必要に応じて「詳細設定」を開き、大文字小文字の区別や空白のまとめ方を切り替えます。",
	tool_compare_two_pdfs_how_item_3: "「比較する」を押し、両ファイルのプレビューとテキスト抽出が終わるまで進捗バーを待ちます。",
	tool_compare_two_pdfs_how_item_4: "緑・赤のハイライトと追加・削除の件数を確認し、ファイルで残したいときは「HTML 差分をダウンロード」を押します。",
	tool_compare_two_pdfs_why_choose_title: "「2つの PDF を比較」ツールを使う理由",
	tool_compare_two_pdfs_why_choose_item_1: "各 PDF のプレビューを並べつつ、単語単位の差分を1回の操作でまとめて表示します。",
	tool_compare_two_pdfs_why_choose_item_2: "パスワード付きファイルや、テキスト層のないスキャン PDF では理由がわかるエラーを出します。",
	tool_compare_two_pdfs_why_choose_item_3: "追加と削除を別々に数え、各ファイルのページ数も表示します。",
	tool_compare_two_pdfs_why_choose_item_4: "改行位置だけが違う書き出しにも、大文字小文字の無視と空白のまとめで対応できます。",
	tool_compare_two_pdfs_why_choose_item_5: "ブラウザ内で動くため、PDF を当サイトのサーバーにアップロードしません。",
	tool_compare_two_pdfs_rules_title: "比較のルール",
	tool_compare_two_pdfs_rules_body: "比較するのはテキスト層だけで、見た目やピクセル単位の比較ではありません。",
	tool_compare_two_pdfs_rules_item_1: "PDF.js で A と B から選択可能なテキストを取り出し、jsdiff で差分をハイライトします。",
	tool_compare_two_pdfs_rules_item_2: "処理はすべてこのタブ内で行い、ファイルを選んでもアップロードはされません。",
	tool_compare_two_pdfs_rules_item_3: "OCR は行いません。画像だけのスキャンは、先に別のツールで文字認識してください。",
	tool_compare_two_pdfs_rules_item_4: "パスワード付きや破損した PDF は、内容のわかるエラーで止まります。",
	tool_compare_two_pdfs_rules_item_5: "ダウンロードされるのはハイライト付きの HTML で、注釈入りの PDF ではありません。",
	tool_compare_two_pdfs_example_title: "例",
	tool_compare_two_pdfs_example:
		"「サンプルを読み込む」を押すと、1ページの契約書が2つ作られます。A は「支払期限は三十日です。」、B は「支払期限は六十日です。」。「比較する」を押すと「三十」が削除、「六十」が追加として色分けされます。「大文字と小文字を区別しない」をオンにすると、英字の Days と days は同じものとして扱われます。",
	tool_compare_two_pdfs_usecases_title: "こんなときに",
	tool_compare_two_pdfs_usecase_1: "先週送った契約書 PDF と、先方から戻ってきた修正版を突き合わせたいとき。",
	tool_compare_two_pdfs_usecase_2: "署名する前に、規約やポリシーの PDF で文言が変わった箇所を探したいとき。",
	tool_compare_two_pdfs_usecase_3: "フォントや余白ではなく、言葉の違いだけを2つの書き出しで確かめたいとき。",
	tool_compare_two_pdfs_usecase_4: "機密の下書きを端末内で比較したいとき。差分を取るためにサーバーへアップロードすることはありません。",
	tool_compare_two_pdfs_faq_q1: "PDF はサーバーにアップロードされますか？",
	tool_compare_two_pdfs_faq_a1:
		"いいえ。表示とテキスト抽出はブラウザのタブ内で行います。ライブラリは当サイトの vendor フォルダーから読み込みますが、ファイルの中身は端末から出ません。",
	tool_compare_two_pdfs_faq_q2: "スキャンした PDF で「選択できるテキストがない」と出るのはなぜ？",
	tool_compare_two_pdfs_faq_a2:
		"スキャンはテキスト層のない画像だからです。このページは OCR に対応していません。別のツールで OCR をかけ、検索可能な PDF として書き出してから比較してください。",
	tool_compare_two_pdfs_faq_q3: "パスワード付きの PDF は比較できますか？",
	tool_compare_two_pdfs_faq_a3:
		"暗号化されたファイルはここでは開けません。PDF リーダーで保護を解除して保護なしのコピーを保存し、そのコピーを選んでください。",
	tool_compare_two_pdfs_faq_q4: "普通のテキスト差分ツールとどう違いますか？",
	tool_compare_two_pdfs_faq_a4:
		"PDF をそのままドロップでき、ページのプレビューとページ数も確認できます。当サイトのテキスト差分ツールは貼り付けた文字や .txt ファイル向けで、PDF は解析しません。",
	tool_compare_two_pdfs_faq_q5: "レイアウトや画像、署名も比較できますか？",
	tool_compare_two_pdfs_faq_a5:
		"できません。比べるのは選択できるテキストだけです。ロゴの位置やフォントが変わっても、文言が同じなら差分なしと表示されます。",
	tool_compare_two_pdfs_faq_q6: "ダウンロードでは何が保存されますか？",
	tool_compare_two_pdfs_faq_a6:
		"画面と同じ緑・赤のハイライトを含む HTML ファイルです。メールで送ったり保管したりするのに便利ですが、注釈付きの PDF ではありません。",
	tool_compare_two_pdfs_faq_q7: "大文字小文字や空白を無視するのはどんなとき？",
	tool_compare_two_pdfs_faq_a7:
		"書き出し直しで大文字小文字や改行だけが変わったときです。文言は同じなのに元のテキスト層が違う場合は、オプションをオンにしてください。",
	tool_compare_two_pdfs_article: "2つの PDF の選択可能なテキストを比較し、単語単位の差分を HTML でダウンロードできます。",
	tool_compare_two_pdfs_references: "テキスト抽出には PDF.js、単語単位のハイライトには jsdiff を使っています。",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — Mozilla の PDF レンダラー",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — テキスト差分ライブラリ",
};

export default ja;
