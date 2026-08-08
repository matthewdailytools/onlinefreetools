/**
 * i18n tool shard (jwt-decoder / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_jwt_decoder_article:
    'ブラウザ内で JWT の Header と Payload を Base64url 規則に従ってデコード。登録クレームの時刻表示と「署名検証なし」の境界を明示。OAuth デバッグ向けで、トークンはアップロードしません。',
  tool_jwt_decoder_claims_local: 'ローカル',
  tool_jwt_decoder_claims_title: '登録クレームの時刻',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'クリア',
  tool_jwt_decoder_copy_done: 'コピーしました',
  tool_jwt_decoder_copy_header: 'Header コピー',
  tool_jwt_decoder_copy_payload: 'Payload コピー',
  tool_jwt_decoder_decode: 'デコード',
  tool_jwt_decoder_desc:
    'JWT の Header/Payload をローカルでデコード — 署名は検証せず、貼り付けはブラウザ内に留まります。',
  tool_jwt_decoder_description:
    'JWT を貼り付けて Header と Payload の JSON をブラウザで確認 — 署名検証はしません。手順：トークンを貼る→デコード→Header または Payload をコピー。例：サンプル token は alg HS256、iat 1516239022 を UTC とローカル時刻で表示。トークンは送信されません。',
  tool_jwt_decoder_disclaimer:
    '未検証 — Base64url のデコードのみです。署名を検証せず、認可判断には使えません。',
  tool_jwt_decoder_empty: 'コピーする内容がありません — 先に JWT をデコードしてください。',
  tool_jwt_decoder_error_base64_header: 'Header が有効な Base64url ではありません。',
  tool_jwt_decoder_error_base64_payload: 'Payload が有効な Base64url ではありません。',
  tool_jwt_decoder_error_json_header: 'デコード後の Header が有効な JSON ではありません。',
  tool_jwt_decoder_error_json_payload: 'デコード後の Payload が有効な JSON ではありません。',
  tool_jwt_decoder_error_segments:
    'JWT はドット区切りの 3 セグメント（header.payload.signature）である必要があります。',
  tool_jwt_decoder_example:
    '入力：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header：{"alg":"HS256","typ":"JWT"}。Payload：{"sub":"1234567890","name":"John Doe","iat":1516239022}、iat は UTC とローカル時刻を表示。Signature は生文字列のみ — 未検証。',
  tool_jwt_decoder_example_title: '例',
  tool_jwt_decoder_faq_a1:
    'いいえ。デコードは Header/Payload の Base64url を戻すだけです。署名検証には発行者の鍵が必要で、本ページでは行いません。',
  tool_jwt_decoder_faq_a2:
    'ドット 2 つで 3 セグメントの完全な token か確認してください。余分なドット、途中までの貼り付け、JWT 以外の文字列は失敗します。',
  tool_jwt_decoder_faq_a3:
    'JWT は Base64url：+ の代わりに -、/ の代わりに _、末尾の = を省略することが多いです。通常の Base64 ツールは URL-safe token で失敗することがあります。',
  tool_jwt_decoder_faq_a4:
    'exp・iat・nbf は UTC の Unix 秒です。本ページは UTC とローカル時刻に変換します。exp は現在時刻と比較して期限切れを判断してください。',
  tool_jwt_decoder_faq_a5:
    'いいえ。分割・Base64url デコード・JSON 解析はすべてブラウザのタブ内で完結します。',
  tool_jwt_decoder_faq_q1: '署名を検証しますか？',
  tool_jwt_decoder_faq_q2: 'セグメント数エラーになるのはなぜ？',
  tool_jwt_decoder_faq_q3: 'Base64url と通常の Base64 の違いは？',
  tool_jwt_decoder_faq_q4: 'exp・iat・nbf の読み方は？',
  tool_jwt_decoder_faq_q5: 'トークンはサーバーに送られますか？',
  tool_jwt_decoder_header_label: 'Header（JSON）',
  tool_jwt_decoder_how_body:
    '完全な JWT（header.payload.signature）を貼り付けます。ドットで分割し、最初の 2 セグメントを Base64url デコードして JSON を整形。exp/iat/nbf が数値なら UTC とローカル時刻も表示。3 番目の Signature は生文字列のみ — 検証しません。',
  tool_jwt_decoder_how_title: '使い方',
  tool_jwt_decoder_input_label: 'JWT 入力',
  tool_jwt_decoder_input_placeholder: 'access token または ID token を貼り付け…',
  tool_jwt_decoder_large_warn: '大きな token（>8 KB）。デコードが遅くなることがあります — 巨大な JWE は避けてください。',
  tool_jwt_decoder_payload_label: 'Payload（JSON）',
  tool_jwt_decoder_rules_body:
    'このデコーダーが行うこと・行わないこと：構造、Base64url、登録クレーム、署名検証なしの境界。',
  tool_jwt_decoder_rules_item_1:
    '構造：署名付き JWT（JWS コンパクト形式）は Base64url の 3 セグメント — Header（alg, typ）、Payload（claims）、Signature（バイナリ、JSON ではない）。',
  tool_jwt_decoder_rules_item_2:
    'Base64url：-→+、_→/、長さ %4 になるよう padding を補い、atob と JSON.parse。エラーは Header か Payload を明示。',
  tool_jwt_decoder_rules_item_3:
    '登録クレーム：exp（失効）、iat（発行）、nbf（有効開始）は UTC の Unix 秒。JSON が読めても token が信頼できるとは限りません。',
  tool_jwt_decoder_rules_item_4:
    'プライバシー：貼り付けはローカル；HMAC/RSA 検証なし。本番の認可はデコード結果だけに依存しないでください。',
  tool_jwt_decoder_rules_title: '知っておくべきルール',
  tool_jwt_decoder_sample: 'サンプル',
  tool_jwt_decoder_signature_label: 'Signature（生データ、未検証）',
  tool_jwt_decoder_title: 'JWT デコーダー — Header/Payload をブラウザで表示（署名検証なし）',
  tool_jwt_decoder_usecase_1:
    'OAuth デバッグ：access token の sub・scope・exp を API ゲートウェイ設定前に確認。',
  tool_jwt_decoder_usecase_2:
    'API 契約：ID token の iss・aud がドキュメントと一致するか確認。',
  tool_jwt_decoder_usecase_3:
    '学習：Header・Payload・Signature が JWS 3 セグメントにどう対応するかを理解。',
  tool_jwt_decoder_usecases_title: 'こんなときに',
};
export default ja;
