/**
 * i18n tool shard (jwt-decoder / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_jwt_decoder_article:
    'Decode JWT header and payload locally with Base64url rules, registered-claim time hints, and a clear no-verify boundary. Built for OAuth debugging and API token inspection without uploading secrets.',
  tool_jwt_decoder_claims_local: 'Local',
  tool_jwt_decoder_claims_title: 'Registered claim times',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'Clear',
  tool_jwt_decoder_copy_done: 'Copied',
  tool_jwt_decoder_copy_header: 'Copy header',
  tool_jwt_decoder_copy_payload: 'Copy payload',
  tool_jwt_decoder_decode: 'Decode',
  tool_jwt_decoder_desc:
    'Decode JWT header and payload locally — no signature verification, paste stays in the browser.',
  tool_jwt_decoder_description:
    'Paste a JWT to read its header and payload JSON in your browser — no signature verification. Steps: paste the token, decode, then copy header or payload. Example: the sample token shows alg HS256 and iat 1516239022 with UTC and local time. Tokens are not uploaded.',
  tool_jwt_decoder_disclaimer:
    'Not verified — this tool decodes Base64url only. It does not validate signatures and must not be used for authorization decisions.',
  tool_jwt_decoder_empty: 'Nothing to copy yet — decode a JWT first.',
  tool_jwt_decoder_error_base64_header: 'Header is not valid Base64url.',
  tool_jwt_decoder_error_base64_payload: 'Payload is not valid Base64url.',
  tool_jwt_decoder_error_json_header: 'Header is not valid JSON after decoding.',
  tool_jwt_decoder_error_json_payload: 'Payload is not valid JSON after decoding.',
  tool_jwt_decoder_error_segments: 'A JWT must have exactly three dot-separated segments (header.payload.signature).',
  tool_jwt_decoder_example:
    'Input: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header: {"alg":"HS256","typ":"JWT"}. Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022} with iat shown in UTC and local time. Signature is shown raw — not verified.',
  tool_jwt_decoder_example_title: 'Example',
  tool_jwt_decoder_faq_a1:
    'No. Decoding only reverses Base64url on the header and payload. Anyone can read those parts; signature verification needs the issuer secret or public key and is intentionally not implemented here.',
  tool_jwt_decoder_faq_a2:
    'Check that you pasted the full token with two dots separating three segments. Extra dots, truncated paste, or non-JWS strings (plain Base64 blobs) will fail.',
  tool_jwt_decoder_faq_a3:
    'JWT uses Base64url: - instead of +, _ instead of /, and padding = is often omitted. Standard Base64 tools may mishandle URL-safe tokens — use this page or our Base64 tool with url-safe mode.',
  tool_jwt_decoder_faq_a4:
    'exp, iat, and nbf are Unix seconds (UTC). This page converts them to readable UTC and your local timezone. Compare exp to now for expiry; pair with our Unix Timestamp tool for other formats.',
  tool_jwt_decoder_faq_a5:
    'No. Splitting, Base64url decode, and JSON parsing run entirely in your browser tab. Do not paste production secrets on shared machines.',
  tool_jwt_decoder_faq_q1: 'Does this page verify the JWT signature?',
  tool_jwt_decoder_faq_q2: 'Why does my token fail with a segment error?',
  tool_jwt_decoder_faq_q3: 'How is JWT Base64url different from normal Base64?',
  tool_jwt_decoder_faq_q4: 'How do I read exp, iat, or nbf?',
  tool_jwt_decoder_faq_q5: 'Is my token uploaded to a server?',
  tool_jwt_decoder_header_label: 'Header (JSON)',
  tool_jwt_decoder_how_body:
    'Paste a complete JWT string (header.payload.signature). The page splits on dots, Base64url-decodes the first two segments, and pretty-prints JSON. exp, iat, and nbf numeric claims also show UTC and local times. The signature segment is shown as raw text only — we never verify it.',
	tool_jwt_decoder_how_item_1: 'Paste a complete JWT (header.payload.signature).',
	tool_jwt_decoder_how_item_2: 'Click Decode (or Load sample for a demo token).',
	tool_jwt_decoder_how_item_3: 'Review the pretty-printed header and payload JSON.',
	tool_jwt_decoder_how_item_4: 'Check exp / iat / nbf times shown for claim timestamps.',
  tool_jwt_decoder_how_title: 'How it works',
  tool_jwt_decoder_input_label: 'JWT input',
  tool_jwt_decoder_input_placeholder: 'Paste access token or ID token…',
  tool_jwt_decoder_large_warn: 'Large token (>8 KB). Decoding may feel slow — avoid pasting huge JWE blobs here.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'What this decoder does and does not do: structure, Base64url steps, registered claims, and the no-verify boundary.',
  tool_jwt_decoder_rules_item_1:
    'Structure: a signed JWT (JWS compact form) has three Base64url segments — header (alg, typ), payload (claims), signature (bytes, not JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url decode: replace -→+, _→/, pad to length % 4, then atob, decode those bytes as UTF-8, and JSON.parse — so accented or CJK claim values stay readable. Malformed segments fail with a specific header/payload error.',
  tool_jwt_decoder_rules_item_3:
    'Registered claims: exp (expiry), iat (issued at), nbf (not before) are numeric Unix seconds in UTC. Decoding them does not prove the token is trustworthy.',
  tool_jwt_decoder_rules_item_4:
    'Privacy & limits: paste stays local; no HMAC/RSA verification. Do not use decoded JSON alone to grant access in production.',
  tool_jwt_decoder_rules_title: 'Rules you should expect',
  tool_jwt_decoder_sample: 'Load sample',
  tool_jwt_decoder_signature_label: 'Signature (raw, not verified)',
  tool_jwt_decoder_title: 'JWT Decoder — Read Header & Payload Locally (No Verify)',
  tool_jwt_decoder_usecase_1:
    'Full-stack debugging: inspect OAuth access token sub, scope, and exp before wiring an API gateway rule.',
  tool_jwt_decoder_usecase_2:
    'API contracts: confirm iss and aud in an ID token match your service documentation.',
  tool_jwt_decoder_usecase_3:
    'Learning: see how header alg/typ and payload claims map to the three JWS segments.',
  tool_jwt_decoder_usecases_title: 'Good fits',
};
export default en;
