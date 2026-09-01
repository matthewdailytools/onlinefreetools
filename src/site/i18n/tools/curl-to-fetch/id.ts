/**
 * i18n tool shard (curl-to-fetch / id).
 * H1: curl ke fetch — ubah perintah curl jadi JavaScript fetch.
 */
import type { SiteLangDict } from '../../../types';

/** Teks Bahasa Indonesia. */
const id: SiteLangDict = {
	tool_curl_to_fetch_article:
		'Tempel perintah cURL dari dokumentasi atau terminal, dapatkan cuplikan fetch JavaScript — metode, header, body JSON, Basic auth, dan -G. Parsing di browser; tanpa unggah ke server.',
	tool_curl_to_fetch_clear: 'Hapus',
	tool_curl_to_fetch_convert: 'Konversi',
	tool_curl_to_fetch_copy: 'Salin',
	tool_curl_to_fetch_copy_done: 'Disalin',
	tool_curl_to_fetch_copy_empty: 'Belum ada yang disalin — konversi cURL dulu.',
	tool_curl_to_fetch_desc:
		'Ubah cURL jadi fetch di browser — tetap di perangkat, tanpa unggah ke server.',
	tool_curl_to_fetch_description:
		'Tempel cURL, dapatkan fetch JavaScript — mendukung metode, header, JSON, Basic auth (-u), dan -G. Contoh POST JSON dimuat saat buka halaman. Perintah tetap di perangkat dan tidak diunggah ke server.',
	tool_curl_to_fetch_error_empty: 'Tempel perintah cURL dulu.',
	tool_curl_to_fetch_error_no_url: 'URL tidak ditemukan. Tambahkan https://… atau --url.',
	tool_curl_to_fetch_error_parse: 'Tidak bisa mengurai cURL ini. Periksa tanda kutip dan lanjutan baris.',
	tool_curl_to_fetch_error_unclosed_quote: 'Tanda kutip belum ditutup — perbaiki lalu coba lagi.',
	tool_curl_to_fetch_example: 'Masukan: curl -X POST … → Keluaran: fetch dengan method, headers, body.',
	tool_curl_to_fetch_example_title: 'Contoh',
	tool_curl_to_fetch_faq_a1: 'Tidak. Parsing hanya di tab ini; kami tidak mengirim cURL ke server.',
	tool_curl_to_fetch_faq_a2: 'URL, -X, -H, -d, -u, -G, string berkutip, dan \\ lanjutan baris. Flag aneh dilewati dengan peringatan.',
	tool_curl_to_fetch_faq_a3: '-G memindahkan --data ke query URL, bukan body.',
	tool_curl_to_fetch_faq_a4: '-u user:pass menjadi Authorization Basic base64.',
	tool_curl_to_fetch_faq_a5: 'Halaman ini untuk fetch browser. axios atau Python — sesuaikan manual.',
	tool_curl_to_fetch_faq_q1: 'Apakah cURL diunggah?',
	tool_curl_to_fetch_faq_q2: 'Flag curl apa yang didukung?',
	tool_curl_to_fetch_faq_q3: 'Apa fungsi -G di sini?',
	tool_curl_to_fetch_faq_q4: 'Bagaimana -u ditangani?',
	tool_curl_to_fetch_faq_q5: 'Bisa axios atau Python?',
	tool_curl_to_fetch_how_body: 'Salin cURL dari docs; kami parse flag umum dan tampilkan fetch siap tempel.',
	tool_curl_to_fetch_how_item_1: 'Tempel cURL lengkap (boleh pakai \\ di akhir baris).',
	tool_curl_to_fetch_how_item_2: 'Pilih fetch atau async/await, lalu Konversi.',
	tool_curl_to_fetch_how_item_3: 'Periksa method, headers, dan body hasil.',
	tool_curl_to_fetch_how_item_4: 'Salin ke proyek; konversi lagi setelah edit.',
	tool_curl_to_fetch_how_title: 'Cara kerja',
	tool_curl_to_fetch_input_label: 'Perintah cURL',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.example.com/…',
	tool_curl_to_fetch_large_warn: 'Perintah besar (>50 KB) — parsing bisa lambat.',
	tool_curl_to_fetch_load_sample: 'Muat contoh',
	tool_curl_to_fetch_output_label: 'Keluaran fetch JavaScript',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'Gaya keluaran',
	tool_curl_to_fetch_rules_body: 'Pemetaan flag curl ke fetch dan bagian yang perlu edit manual.',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST; -d saja pakai POST kecuali -G.',
	tool_curl_to_fetch_rules_item_2: 'Setiap -H masuk headers; Content-Type dipertahankan.',
	tool_curl_to_fetch_rules_item_3: '-d ke body; -G digabung ke URL.',
	tool_curl_to_fetch_rules_item_4: 'Cookie, sertifikat, proxy tidak didukung fetch browser.',
	tool_curl_to_fetch_rules_title: 'Aturan yang perlu diketahui',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'Selesai — lihat fetch di bawah.',
	tool_curl_to_fetch_title: 'curl ke fetch',
	tool_curl_to_fetch_usecase_1: 'Contoh curl di OpenAPI — tempel untuk mulai fetch frontend.',
	tool_curl_to_fetch_usecase_2: 'Debug Bearer: pertahankan header Authorization.',
	tool_curl_to_fetch_usecase_3: 'Ubah perintah curl ke fetch saat migrasi skrip shell.',
	tool_curl_to_fetch_usecases_title: 'Cocok untuk',
	tool_curl_to_fetch_warn_unknown_flags: 'Flag tidak didukung dilewati: {flags}',
};

export default id;
