/**
 * i18n tool shard (website-headers / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_headers_article: '公開URLについてエッジが受け取ったレスポンスヘッダを確認できます。キャッシュ、CORS、リダイレクト、セキュリティヘッダの点検に使えます。リクエストはプロキシ経由で、ページ本文は保存しません。',
  tool_headers_description:
    'URLのHTTPレスポンスヘッダをエッジからオンライン確認。手順：httpsを貼り付け、HEAD送信（必要ならGET）、リダイレクト追跡、ステータスとヘッダー一覧を表示、プライベートホストを拒否。例：CDNやリダイレクト調査でCache-Control・CORS・HSTSを読む。',
  tool_headers_example: 'example.com → ステータス200、最終URL変更なし。content-type: text/html などに加え、オリジン次第でcache-controlやセキュリティヘッダー。',
  tool_headers_example_title: '例',
  tool_headers_faq_a1: 'サーバー応答のメタデータです。Content-Type、キャッシュ、リダイレクト、HSTS・CSP・CORSなどのポリシーが含まれます。',
  tool_headers_faq_a2: 'HEADを優先し、必要ならGET。目的はヘッダー確認であり、本文のスクレイピングや保存ではありません。',
  tool_headers_faq_a3: '内部ホストのスキャンに使われないよう、プライベートネットワーク宛てを拒否しています。',
  tool_headers_faq_a4: '必ずしも同じではありません。当社エッジからの応答であり、CDNの地域振り分けやボット対策でローカルと差が出ることがあります。',
  tool_headers_faq_a5: '短命なエッジリクエストで、URL履歴機能はありません。クエリに秘密情報を入れないでください。',
  tool_headers_faq_q1: 'HTTPレスポンスヘッダーには何が載る？',
  tool_headers_faq_q2: 'ページ本文まるごと取得しますか？',
  tool_headers_faq_q3: 'localhostやプライベートIPはなぜ不可？',
  tool_headers_faq_q4: 'ブラウザのDevToolsと同じ結果？',
  tool_headers_faq_q5: '確認したURLは保存されますか？',
  tool_headers_how_body:
    '公開のhttp(s) URLを貼って確認。エッジWorkerがHEAD（必要ならGET）を送り、リダイレクトを追い、観測したステータス・最終URL・ヘッダーを返します。内部宛ては拒否。エッジ視点のため、CDNの地域振り分けでローカルブラウザと異なる場合があります。',
  tool_headers_how_title: '使い方',
  tool_headers_ref_mdn_label: 'MDN — HTTPヘッダー',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — HTTPセマンティクス',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTPキャッシュ',
  tool_headers_rules_body: 'ヘッダー確認用の短命プロキシです。ページ本文は製品機能として保持しません。名称はHTTPセマンティクスに従います（参考リンク参照）。',
  tool_headers_rules_item_1: 'HEAD優先。未対応ならGET。',
  tool_headers_rules_item_2: 'リダイレクトを追い、最終URLを表示。',
  tool_headers_rules_item_3: 'localhostとプライベートIPを拒否。',
  tool_headers_rules_item_4: 'Cache-Control、CORS、CSPなど主要ヘッダーを表示。',
  tool_headers_rules_title: 'チェッカーの動作',
  tool_headers_title: 'サイトのHTTPヘッダを確認 — レスポンスヘッダ検査',
  tool_headers_usecase_1: 'リリース前にCache-ControlやCDNキャッシュを確認。',
  tool_headers_usecase_2: 'Access-Control-* を読んでCORS preflightを切り分け。',
  tool_headers_usecase_3: 'CSPやHSTSなどセキュリティヘッダが本当に返るか spot check。',
  tool_headers_usecases_title: 'こんなときに',
};
export default ja;
