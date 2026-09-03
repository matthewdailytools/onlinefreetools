/**
 * i18n tool shard (unlock-pdf / ja). Local rewrite; known password, not cracking.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_unlock_pdf_article:
    '既知の開くパスワードで PDF の保護を外します。ブラウザ内処理で、パスワード解析ツールではありません。ファイルは端末内に留まります。',
  tool_unlock_pdf_choose_file: '暗号化 PDF を選択',
  tool_unlock_pdf_clear: 'クリア',
  tool_unlock_pdf_desc: '知っている開くパスワードで PDF の保護を外す—端末内、サーバーにアップロードしません。',
  tool_unlock_pdf_description:
    '開くパスワードが分かっている PDF をブラウザで解除—サーバーにアップロードしません。手順：暗号化 PDF を選び、パスワードを入力（必要なら空欄不可）、解除して unlocked.pdf をダウンロード。例：1 ページのサンプルを password sample で暗号化し、自動入力・解除後にダウンロード可能。パスワードクラック・総当たり・忘れたパスワードの復元は行いません。約 25 MB 超は遅くなる場合があります。',
  tool_unlock_pdf_download: 'ダウンロード',
  tool_unlock_pdf_drop_hint: '暗号化 PDF をここにドロップも可。このタブ内で処理します。',
  tool_unlock_pdf_empty: '先に暗号化 PDF を選択してください。',
  tool_unlock_pdf_encrypted_label: 'パスワード保護',
  tool_unlock_pdf_err_load: 'PDF を読めません（破損または非対応）。別ファイルをお試しください。',
  tool_unlock_pdf_err_not_encrypted: 'この PDF は開くパスワードが設定されていないようです。PDF 結合などをご利用ください。',
  tool_unlock_pdf_err_password_empty: '開くパスワードを入力—必要な場合は空欄不可です。',
  tool_unlock_pdf_err_password_wrong: 'パスワードが違います。保護時に設定したパスワードを再入力してください。',
  tool_unlock_pdf_err_unlock: '解除に失敗しました。ファイルとパスワードを確認して再試行してください。',
  tool_unlock_pdf_example:
    'サンプルは 1 ページ PDF を password sample で暗号化し、パスワードを自動入力、解除後 unlocked.pdf のダウンロードを有効にします。',
  tool_unlock_pdf_example_title: 'PDF のパスワードを解除',
  tool_unlock_pdf_faq_a1:
    'いいえ。正しい開くパスワードを入力した場合のみ保護を外します。クラック・総当たり・未知のパスワード復元は行いません。',
  tool_unlock_pdf_faq_a2:
    'いいえ。PDF ライブラリ はタブ内で動作（CDN から読み込む場合あり）。PDF は当社サーバーにアップロードされません。',
  tool_unlock_pdf_faq_a3:
    'パスワード不一致の明確なメッセージが出ます。PDF を保護 で設定したパスワードなど、ご自身が知っているものを入力してください。',
  tool_unlock_pdf_faq_a4:
    'PDF を保護 で開くパスワードを付け、ここで解除後に PDF 結合 などが使えます。解除は開く際にパスワードが必要なファイル向けです。',
  tool_unlock_pdf_faq_q1: 'パスワードクラックや忘れたパスワードの復元はできますか？',
  tool_unlock_pdf_faq_q2: 'PDF はアップロードされますか？',
  tool_unlock_pdf_faq_q3: 'パスワードが違う場合は？',
  tool_unlock_pdf_faq_q4: 'PDF を保護 との関係は？',
  tool_unlock_pdf_how_body:
    'パスワード付き PDF を 1 つ選び、既知の開くパスワードを入力、解除してダウンロード。PDF ライブラリ 読み込み後はローカル処理。パスワード必須時は空欄を拒否します。',
  tool_unlock_pdf_how_title: '使い方',
  tool_unlock_pdf_pages_label: 'ページ数',
  tool_unlock_pdf_password_label: '開くパスワード',
  tool_unlock_pdf_rules_body: 'パスワード条件、解除範囲、プライバシー、失敗時の挙動。',
  tool_unlock_pdf_rules_item_1: '範囲：開くパスワードを知っている必要があります。クラック・総当たり・未知パスワード復元は不可。',
  tool_unlock_pdf_rules_item_2: '入力：暗号化 PDF のみ。未保護ファイルは明確に拒否。',
  tool_unlock_pdf_rules_item_3: '出力：暗号なし PDF（unlocked.pdf）。誤パスワードは明示エラー。',
  tool_unlock_pdf_rules_item_4: 'プライバシー：タブ内処理、サーバー非送信、約 25 MB 警告、巨大ファイルはメモリ不足の可能性。',
  tool_unlock_pdf_rules_title: '想定されるルール',
  tool_unlock_pdf_sample: 'サンプルを読み込む',
  tool_unlock_pdf_stats_tpl: '{pages} ページ · 解除済 · {bytes}',
  tool_unlock_pdf_status_done: '完了 — ダウンロードで unlocked.pdf を保存。',
  tool_unlock_pdf_status_sample_pwd: 'サンプル準備完了 — パスワードは「{pwd}」。unlocked.pdf をダウンロードして試せます。',
  tool_unlock_pdf_status_working: 'PDF を解除中…',
  tool_unlock_pdf_title: 'PDF のロックを解除',
  tool_unlock_pdf_unlock: '解除',
  tool_unlock_pdf_usecase_1: 'オフィス：自分で付けたパスワードを外し、他アプリで結合・印刷。',
  tool_unlock_pdf_usecase_2: '運用：以前暗号化したクライアント PDF をポータル提出前に解除。',
  tool_unlock_pdf_usecase_3: '学生：採点後、設定したパスワードでスキャン課題の保護を外す。',
  tool_unlock_pdf_usecases_title: 'こんなときに',
  tool_unlock_pdf_warn_large: '約 25 MB 超 — 解除が遅い、または失敗する場合があります。',
  tool_unlock_pdf_warn_pdflib: 'PDF ライブラリの読み込みに失敗。ネットワークを確認してください。',
};
export default ja;
