/**
 * i18n tool shard (protect-pdf / ja). 日本語検索向けに独立執筆。
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_protect_pdf_article:
    'ブラウザで PDF に開くパスワードを設定。機密ファイルを送る前に暗号化。ファイルは端末内、サーバーにアップロードしません。',
  tool_protect_pdf_choose_file: 'PDF を選択',
  tool_protect_pdf_clear: 'クリア',
  tool_protect_pdf_confirm_label: 'パスワード確認',
  tool_protect_pdf_desc: '端末内で PDF に開くパスワードを設定。サーバーへは送りません。',
  tool_protect_pdf_description:
    '共有前にブラウザで PDF をパスワード保護—サーバーにアップロードしません。手順：PDF を選び、パスワードを入力・確認（空は不可）、保護を押して protected.pdf をダウンロード。例：1 ページのサンプルを sample で暗号化し、そのまま DL 可能。一般的なユーザーパスワード暗号化で、軍事級ではありません。後から開くには同じパスワードが必要（Unlock PDF 公開後に利用。当サイトはパスワード解除・クラックは行いません）。約 25 MB 超は遅くなる場合があります。',
  tool_protect_pdf_download: 'ダウンロード',
  tool_protect_pdf_drop_hint: 'PDF をここにドロップも可。このタブ内で処理します。',
  tool_protect_pdf_empty: '先に PDF を選んでください。',
  tool_protect_pdf_err_encrypted: '既にパスワード付きのようです。既知のパスワードで解除してから再度保護してください。',
  tool_protect_pdf_err_load: 'PDF を読めません（破損または非対応）。別ファイルをお試しください。',
  tool_protect_pdf_err_password_empty: 'パスワードを入力してください。空は不可です。',
  tool_protect_pdf_err_password_mismatch: 'パスワードが一致しません。両方を再入力してください。',
  tool_protect_pdf_err_protect: '暗号化に失敗しました。ファイルとパスワードを確認して再試行してください。',
  tool_protect_pdf_example:
    'サンプルは 1 ページを作成し sample で暗号化、protected.pdf の DL を有効化し、状態行にパスワードを表示します。',
  tool_protect_pdf_example_title: 'PDF にパスワードを設定',
  tool_protect_pdf_faq_a1:
    'いいえ。PDF ライブラリ はタブ内で動作（スクリプトは CDN から読み込む場合あり）。PDF は当社サーバーに送られません。',
  tool_protect_pdf_faq_a2:
    'PDF の一般的なユーザーパスワード暗号化です。開くときにパスワードが必要。軍事級ではなく、覚えやすい強力なパスワードを選んでください。',
  tool_protect_pdf_faq_a3:
    'ここで設定した同じパスワードが必要です。Unlock PDF 公開後はそちらで入力してください—当サイトはパスワード破解しません。',
  tool_protect_pdf_faq_a4: '既に保護された PDF は読み込めないことが多いです。信頼できるツールで旧パスワードを外してから再度保護してください。',
  tool_protect_pdf_faq_q1: 'PDF はアップロードされますか？',
  tool_protect_pdf_faq_q2: '暗号化の強度は？',
  tool_protect_pdf_faq_q3: '後からどう開きますか？',
  tool_protect_pdf_faq_q4: '既に保護されている PDF は？',
  tool_protect_pdf_how_body: 'PDF を選び、同じパスワードを 2 回入力、保護→ダウンロード。PDF ライブラリ 読込後は端末内で暗号化。空パスワードは拒否します。',
  tool_protect_pdf_how_item_1: "「PDF を選択」で入力ファイルを選択",
  tool_protect_pdf_how_item_2: "オプションを設定し「保護」を押す",
  tool_protect_pdf_how_item_3: "プレビュー、ページ数、ステータスを確認",
  tool_protect_pdf_how_item_4: "「ダウンロード」で結果を保存",
  tool_protect_pdf_how_title: '使い方',
  tool_protect_pdf_pages_label: 'ページ数',
  tool_protect_pdf_password_label: 'パスワード',
  tool_protect_pdf_protect: '保護',
  tool_protect_pdf_rules_body: 'パスワード規則、暗号化範囲、プライバシー、失敗時の挙動。',
  tool_protect_pdf_rules_item_1: 'パスワード必須。確認欄と一致。空は暗号化前に拒否。',
  tool_protect_pdf_rules_item_2: 'PDF ライブラリ はユーザー/オーナーパスワードを同一に設定—閲覧時に入力が必要。',
  tool_protect_pdf_rules_item_3: '出力：暗号化 PDF（protected.pdf）。既保護ファイルは明確にエラー。',
  tool_protect_pdf_rules_item_4: 'プライバシー：バイトはタブ内。軍事級ではない。約 25 MB で警告。巨大ファイルは失敗し得ます。',
  tool_protect_pdf_rules_title: '想定されるルール',
  tool_protect_pdf_sample: 'サンプル読込',
  tool_protect_pdf_stats_tpl: '{pages} ページ · 暗号化 · {bytes}',
  tool_protect_pdf_status_done: '完了 — ダウンロードで protected.pdf を保存。',
  tool_protect_pdf_status_sample_pwd: 'サンプル準備完了 — パスワードは「{pwd}」。protected.pdf を DL して試せます。',
  tool_protect_pdf_status_working: 'PDF を暗号化中…',
  tool_protect_pdf_title: 'PDF にパスワード保護を設定',
  tool_protect_pdf_usecase_1: 'オフィス：契約書をメールする前に開くパスワードを設定。',
  tool_protect_pdf_usecase_2: '運用：クライアント向けレポート PDF を一時的にロック。',
  tool_protect_pdf_usecase_3: '学生：提出用スキャンに担当教員だけが知るパスワードを設定。',
  tool_protect_pdf_usecases_title: 'こんなときに',
  tool_protect_pdf_warn_large: '約 25 MB 超 — 暗号化が遅い、または失敗する場合があります。',
  tool_protect_pdf_warn_pdflib: 'PDF ライブラリの読み込みに失敗。ネットワークを確認してください。',
};
export default ja;
