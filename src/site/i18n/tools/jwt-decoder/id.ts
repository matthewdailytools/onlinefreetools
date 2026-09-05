/**
 * i18n tool shard (jwt-decoder / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_jwt_decoder_article:
    'Decode header dan payload JWT di browser dengan aturan Base64url, waktu claim terdaftar, dan batas jelas: tanpa verifikasi tanda tangan. Cocok untuk debug OAuth tanpa mengunggah token.',
  tool_jwt_decoder_claims_local: 'Lokal',
  tool_jwt_decoder_claims_title: 'Waktu claim terdaftar',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'Hapus',
  tool_jwt_decoder_copy_done: 'Tersalin',
  tool_jwt_decoder_copy_header: 'Salin header',
  tool_jwt_decoder_copy_payload: 'Salin payload',
  tool_jwt_decoder_decode: 'Decode',
  tool_jwt_decoder_desc:
    'Decode header & payload JWT secara lokal — tanpa verifikasi tanda tangan; tempel tetap di browser.',
  tool_jwt_decoder_description:
    'Tempel JWT untuk membaca header dan payload JSON di browser — tanpa verifikasi tanda tangan. Langkah: tempel token, decode, salin header atau payload. Contoh: token sampel menampilkan alg HS256 dan iat 1516239022 dengan UTC dan waktu lokal. Token tidak diunggah.',
  tool_jwt_decoder_disclaimer:
    'Tidak diverifikasi — alat ini hanya decode Base64url. Tidak memvalidasi tanda tangan dan tidak untuk keputusan otorisasi.',
  tool_jwt_decoder_empty: 'Belum ada yang disalin — decode JWT dulu.',
  tool_jwt_decoder_error_base64_header: 'Header bukan Base64url yang valid.',
  tool_jwt_decoder_error_base64_payload: 'Payload bukan Base64url yang valid.',
  tool_jwt_decoder_error_json_header: 'Header setelah decode bukan JSON valid.',
  tool_jwt_decoder_error_json_payload: 'Payload setelah decode bukan JSON valid.',
  tool_jwt_decoder_error_segments:
    'JWT harus punya tepat tiga segmen dipisah titik (header.payload.signature).',
  tool_jwt_decoder_example:
    'Input: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header: {"alg":"HS256","typ":"JWT"}. Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022} dengan iat UTC dan lokal. Signature ditampilkan mentah — tidak diverifikasi.',
  tool_jwt_decoder_example_title: 'Contoh',
  tool_jwt_decoder_faq_a1:
    'Tidak. Decode hanya membalik Base64url di header dan payload; verifikasi tanda tangan butuh kunci penerbit — sengaja tidak ada di sini.',
  tool_jwt_decoder_faq_a2:
    'Pastikan token lengkap dengan dua titik dan tiga segmen. Titik ekstra, tempel terpotong, atau string non-JWT akan gagal.',
  tool_jwt_decoder_faq_a3:
    'JWT memakai Base64url: - menggantikan +, _ menggantikan /, sering tanpa =. Base64 biasa bisa gagal pada token URL-safe.',
  tool_jwt_decoder_faq_a4:
    'exp, iat, dan nbf adalah detik Unix UTC. Halaman ini menampilkan UTC dan zona lokal Anda; bandingkan exp dengan waktu sekarang.',
  tool_jwt_decoder_faq_a5:
    'Tidak. Split, decode Base64url, dan JSON parsing hanya di tab browser Anda.',
  tool_jwt_decoder_faq_q1: 'Apakah halaman ini memverifikasi tanda tangan JWT?',
  tool_jwt_decoder_faq_q2: 'Mengapa token gagal dengan error segmen?',
  tool_jwt_decoder_faq_q3: 'Apa beda Base64url dengan Base64 biasa?',
  tool_jwt_decoder_faq_q4: 'Bagaimana membaca exp, iat, atau nbf?',
  tool_jwt_decoder_faq_q5: 'Apakah token saya diunggah ke server?',
  tool_jwt_decoder_header_label: 'Header (JSON)',
  tool_jwt_decoder_how_body:
    'Tempel JWT lengkap (header.payload.signature). Halaman memisah per titik, decode Base64url pada dua segmen pertama, lalu format JSON. exp, iat, nbf numerik menampilkan UTC dan waktu lokal. Segmen signature hanya teks mentah — tidak diverifikasi.',
  tool_jwt_decoder_how_item_1: 'Tempel JWT lengkap (header.payload.signature).',
  tool_jwt_decoder_how_item_2: 'Klik Decode (atau Muat contoh untuk token demo).',
  tool_jwt_decoder_how_item_3: 'Tinjau JSON header dan payload yang diformat.',
  tool_jwt_decoder_how_item_4: 'Periksa waktu exp / iat / nbf yang ditampilkan.',
  tool_jwt_decoder_how_title: 'Cara kerja',
  tool_jwt_decoder_input_label: 'Input JWT',
  tool_jwt_decoder_input_placeholder: 'Tempel access token atau ID token…',
  tool_jwt_decoder_large_warn: 'Token besar (>8 KB). Decode bisa lambat — hindari JWE raksasa.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'Apa yang decoder ini lakukan dan tidak lakukan: struktur, Base64url, claim terdaftar, dan batas tanpa verifikasi.',
  tool_jwt_decoder_rules_item_1:
    'Struktur: JWT bertanda tangan (JWS compact) punya tiga segmen Base64url — header (alg, typ), payload (claims), signature (byte, bukan JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url: -→+, _→/, padding sampai panjang %4, lalu atob, baca byte-nya sebagai UTF-8, baru JSON.parse — claim beraksen atau CJK tetap terbaca. Error menyebut header atau payload.',
  tool_jwt_decoder_rules_item_3:
    'Claim terdaftar: exp, iat, nbf adalah detik Unix UTC. Bisa baca JSON ≠ token terpercaya.',
  tool_jwt_decoder_rules_item_4:
    'Privasi: tempel lokal; tanpa HMAC/RSA. Jangan otorisasi produksi hanya dari JSON hasil decode.',
  tool_jwt_decoder_rules_title: 'Aturan yang perlu Anda tahu',
  tool_jwt_decoder_sample: 'Muat contoh',
  tool_jwt_decoder_signature_label: 'Signature (mentah, tidak diverifikasi)',
  tool_jwt_decoder_title: 'JWT Decoder — baca header & payload di browser (tanpa verifikasi)',
  tool_jwt_decoder_usecase_1:
    'Debug OAuth: cek sub, scope, exp access token sebelum aturan API gateway.',
  tool_jwt_decoder_usecase_2:
    'Kontrak API: pastikan iss dan aud ID token sesuai dokumentasi.',
  tool_jwt_decoder_usecase_3:
    'Belajar: lihat header, payload, dan signature dalam tiga segmen JWS.',
  tool_jwt_decoder_usecases_title: 'Cocok untuk',
};
export default id;
