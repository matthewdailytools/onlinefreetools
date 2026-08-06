import type { SiteLangDict } from './types';
const ja: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'ホーム',
  nav_devlogs: '開発ログ',
  nav_tools: 'ツール',
  footer_text: 'Online Free Tools · 学習プロジェクト · 継続的にイテレーション',
  tool_headers_title: 'Webサイトレスポンスヘッダーを取得',
  tool_headers_description:
    "サーバー側で URL の HTTP レスポンスヘッダーを取得（HEAD、405/501 の場合は GET にフォールバック）。手順：HEAD を送信し、リダイレクトを追跡、ヘッダーを収集、プライベートホストをブロック。例：CORS、Cache-Control、HSTS を確認してリダイレクトや CDN 設定をデバッグ。",
  tool_headers_article:
    '何ですか：WebサイトのHTTPレスポンスヘッダーを取得・検査します。CORS、キャッシュ、リダイレクト、セキュリティやCDNヘッダーのデバッグに役立ちます。利用シーン：開発者によるデバッグ、SEOチェック、サーバー構成確認。',
  url_label: 'URL',
  url_placeholder: '例：https://example.com',
  fetch_button: 'ヘッダーを取得',
  result_title: '結果',
  status_label: 'ステータス',
  final_url_label: '最終URL',
  headers_label: 'ヘッダー',
  error_prefix: 'エラー：',
  note_title: '注意',
  note_1: '一部のサイトではHEADがサポートされていないため、GETにフォールバックします。',
  note_2: 'セキュリティ上、ローカルホスト/プライベートネットワークへのリクエストはブロックされています。',
  tool_markdown_title: 'Markdown と HTML を相互変換（プレビュー付き）',
  tool_markdown_description:
    'Markdown を安全な HTML にしたい、または CMS の HTML を Markdown に戻したいときに。向きを選び、ブラウザ内で marked / Turndown と DOMPurify を使います。例：README を .html 化、管理画面の HTML をリポジトリ用 .md に。',
  tool_markdown_article:
    '双方向を同一 URL にまとめ、除去内容と変換損失を明示。貼り付けは送信せず、CDN はライブラリ取得用です。',
  tool_markdown_dir_label: '変換の向き',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'HTMLをコピー',
  tool_markdown_copy_md: 'Markdownをコピー',
  tool_markdown_copy_done: 'コピー完了',
  tool_markdown_download: 'HTMLをダウンロード',
  tool_markdown_download_md: 'Markdownをダウンロード',
  tool_markdown_clear: 'クリア',
  tool_markdown_full_doc: '完全なHTML文書を生成',
  tool_markdown_input_label: 'Markdown入力',
  tool_markdown_preview_label: 'HTMLプレビュー',
  tool_markdown_html_input_label: 'HTML入力',
  tool_markdown_md_output_label: 'Markdown出力',
  tool_markdown_placeholder:
    "# 見出し\n\n基本 Markdown：**太字**、リスト、コードブロック。\n\n- 項目1\n- 項目2\n\n```js\nconsole.log('Hello Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>見出し</h1>\n<p>こんにちは <strong>世界</strong></p>',
  tool_markdown_sample_md:
    "# 見出し\n\n基本 Markdown：**太字**、リスト、コードブロック。\n\n- 項目1\n- 項目2\n\n```js\nconsole.log('Hello Markdown');\n```",
  tool_markdown_sample_html: '<h1>見出し</h1>\n<p>こんにちは <strong>世界</strong></p>',
  tool_markdown_export_title: 'MarkdownからHTMLへのエクスポート',
  tool_markdown_export_description:
    'Markdown からテンプレートと meta 付きの完全な HTML 文書を生成します。手順：レンダリング、テンプレートへの挿入、meta 追加、ダウンロード提供。例：ブログ記事を単体の .html として書き出し、オフライン共有や静的ホスティングに使えます。',
  tool_markdown_large_warn:
    '貼り付けが非常に大きい（20万文字超）。変換が遅くなることがあります。短い抜粋を試してください。',
  tool_markdown_need_lib: '変換ライブラリを読み込めませんでした。接続を確認して再読み込みしてください。',
  tool_markdown_loss_hint:
    'Markdown がほとんど出ませんでした。スクリプト、空タグ、未対応マークアップが除かれた可能性があります。ルールと FAQ を参照。',
  tool_markdown_how_title: '使い方',
  tool_markdown_how_body:
    'タブで向きを決め、左に入力すると右がローカル更新されます。HTML 側は断片または簡易な完全文書、Markdown 側は編集・LLM 向けのプレーンテキストです。',
  tool_markdown_rules_title: '向きごとのルール',
  tool_markdown_rules_intro:
    '「HTML を Markdown に」だけの薄い別ページは作りません。',
  tool_markdown_rules_item_md_html:
    'HTML へ：CommonMark を解釈し、表示・保存前に DOMPurify。',
  tool_markdown_rules_item_html_md:
    'Markdown へ：先に整理し、Turndown（ATX・フェンス付きコード）。',
  tool_markdown_rules_item_loss:
    'スタイルやスクリプト、複雑な表は残りにくい。往復一致は保証しません。',
  tool_markdown_rules_privacy:
    '本文はタブ内。CDN はライブラリ配信でありアップロードではありません。',
  tool_markdown_example_title: '例',
  tool_markdown_example:
    '`# 見出し` と `こんにちは **世界**` ↔ 安全な HTML と太字の Markdown。',
  tool_markdown_usecases_title: 'こんなときに',
  tool_markdown_usecase_1:
    'CMS 向けに安全な HTML を渡す。',
  tool_markdown_usecase_2:
    'メールや管理画面の HTML から原稿を取り戻す。',
  tool_markdown_usecase_3:
    'リッチテキストを整えてからモデルに渡す。',
  tool_markdown_faq_q1: 'HTML から危険なスクリプトは除かれますか？',
  tool_markdown_faq_a1:
    'Markdown → HTML では、プレビューやダウンロード前に DOMPurify が入ります。',
  tool_markdown_faq_q2: 'レイアウトは Markdown に残りますか？',
  tool_markdown_faq_a2:
    '多くは残りません。編集しやすい下書きと考えてください。',
  tool_markdown_faq_q3: '貼り付けはサーバーへ送られますか？',
  tool_markdown_faq_a3:
    '変換は端末内です。CDN はライブラリの取得だけです。',
  tool_markdown_faq_q4: '往復で同一になりますか？',
  tool_markdown_faq_a4:
    '保証しません。必要なら外部で Diff してください。',
  tool_markdown_faq_q5: '対応記法と書き出しは？',
  tool_markdown_faq_a5:
    '見出し・リスト・リンク・強調・コードブロックなど。オフライン共有用の完全 HTML も選べます。',
  tool_text_diff_description:
    '2つのテキストをオンラインで比較し、どこが変わったか確認できます。手順: 原文と修正後を貼り付け、行・単語・文字のどれで比べるか選び、必要なら空白を無視したり Windows の改行（CRLF→LF）を揃えたりして、ブラウザ内で追加と削除を色分け表示。例: 「こんにちは世界」を「こんにちは友人」に変えると、単語モードでは1か所の置換だけが分かります。',
  tool_text_diff_article:
    '無料のテキスト差分比較。設定やコードは行単位、文章やプロンプトは単語単位、細かい誤字は文字単位が向いています。処理はブラウザ内のみで、入力内容はサーバーに送りません。',
  tool_text_diff_example:
    '例（単語モード）: A = 「こんにちは世界」, B = 「こんにちは友人」→ 変更は1か所（世界 → 友人）。3行のうち真ん中だけ変えた場合、行モードではその行だけがマークされます。',
  tool_text_diff_sample_a: 'こんにちは世界\n二行目\n三行目',
  tool_text_diff_sample_b: 'こんにちは友人\n二行目\n三行目',
  tool_text_diff_label_a: '原文',
  tool_text_diff_label_b: '修正後',
  tool_text_diff_placeholder_a: '原文を貼り付け…',
  tool_text_diff_placeholder_b: '修正後を貼り付け…',
  tool_text_diff_mode_label: '比較単位',
  tool_text_diff_mode_lines: '行',
  tool_text_diff_mode_words: '単語',
  tool_text_diff_mode_chars: '文字',
  tool_text_diff_ignore_ws: '空白を無視',
  tool_text_diff_normalize_eol: 'CRLF と LF を同じに扱う',
  tool_text_diff_compare: '比較する',
  tool_text_diff_swap: '左右を入れ替え',
  tool_text_diff_clear: 'クリア',
  tool_text_diff_result_label: '差分',
  tool_text_diff_legend: '緑 = 追加 · 赤 = 削除',
  tool_text_diff_summary: '追加 {added}、削除 {removed}',
  tool_text_diff_no_diff: '差分なし — 両方のテキストは同じです。',
  tool_text_diff_empty_hint: '片方または両方にテキストを貼り付けてから比較してください。',
  tool_text_diff_large_warn: '貼り付けが非常に大きいです（10万文字超）。重くなることがあるので短い抜粋を試してください。',
  tool_text_diff_need_lib: '比較機能を読み込めませんでした。通信を確認して再読み込みしてください。',
  tool_text_diff_how_title: '使い方',
  tool_text_diff_how_body:
    '2つの版を貼り付け、行・単語・文字のどれで見るかを選び、緑の追加と赤の削除を確認します。貼り付けた本文は当社へ送信・保存しません。比較のため、ページが CDN からオープンソースの jsdiff を読み込む場合があります。',
  tool_text_diff_rules_title: '差分の出し方',
  tool_text_diff_rules_body:
    '原文から修正後へ変えるための短い編集リストを求めます（古典的な diff / Myers 系、jsdiff 使用）。行モードは設定・コード向け。単語モードは文章・プロンプト向け。文字モードは細かい誤字向きですが騒がしくなりがちです。空白無視はインデントだけの差を隠します。CRLF と LF を揃えると、改行コードだけの差で行全体が赤くなるのを防げます。',
  tool_text_diff_rules_intro:
    '原文から修正後へ変えるための短い編集リストを求めます（古典的な diff / Myers 系、jsdiff 使用）。用途に合わせて比較単位を選んでください:',
  tool_text_diff_rules_item_lines:
    '行 — .env・YAML・コード向け。変更行が丸ごとマークされ読みやすい一方、1語だけの変更でも行全体が赤くなります。',
  tool_text_diff_rules_item_words:
    '単語 — 文章・メール・プロンプト向け。変わった語だけを示します。散文に向き、句読点付近で細かく分かれることがあります。',
  tool_text_diff_rules_item_chars:
    '文字 — 細かい誤字向け。最も精密ですが、長い変更では騒がしく見えがちです。',
  tool_text_diff_rules_options:
    '空白無視はインデントだけの差を隠します。CRLF と LF を揃えると、改行コードだけの差で行全体が赤くなるのを防げます。',
  tool_text_diff_example_title: '例',
  tool_text_diff_usecases_title: 'こんなときに',
  tool_text_diff_usecase_1: '設定の確認: .env や YAML の断片を行単位で比べる。',
  tool_text_diff_usecase_2: 'プロンプトの修正前後: 単語単位で、どの言い回しが増減したかを見る。',
  tool_text_diff_usecase_3: '校正・翻訳チェック: 意図した文だけが変わっているか確認する。',
  tool_text_diff_faq_q1: '行と単語、どちらで比べる？',
  tool_text_diff_faq_a1: 'コードや設定は行。文章・メール・プロンプトは単語 — 変わった単語だけが目立ちます。',
  tool_text_diff_faq_q2: '入力したテキストはサーバーに送られますか？',
  tool_text_diff_faq_a2:
    '貼り付けた本文は当社へ送信・保存しません。比較はブラウザ内で行います。ページが CDN から jsdiff（オープンソース）を読み込むことがありますが、本文は当社サーバーには送られません。',
  tool_text_diff_faq_q3: '改行だけ違うのに行全体が赤くなるのはなぜ？',
  tool_text_diff_faq_a3: 'Windows は CRLF、Mac/Linux は LF が多いためです。「CRLF と LF を同じに扱う」をオンにしてから比較してください。',
  tool_text_diff_faq_q4: '画像やバイナリも比較できますか？',
  tool_text_diff_faq_a4: 'いいえ。プレーンテキスト専用です。',

};
export default ja;