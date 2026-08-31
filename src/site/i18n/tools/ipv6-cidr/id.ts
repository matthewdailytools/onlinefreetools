/**
 * i18n tool shard (ipv6-cidr / id).
 * Kueri lokal: kalkulator cidr ipv6 / notasi cidr ipv6.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_ipv6_cidr_title: 'Kalkulator CIDR IPv6 — Ubah prefiks menjadi rentang alamat'
	tool_ipv6_cidr_desc:
		'Kalkulator CIDR IPv6: tempel 2001:db8:1::/64 untuk jaringan, alamat terakhir, dan bentuk ringkas. Di perangkat Anda.',
	tool_ipv6_cidr_description:
		'Kalkulator CIDR IPv6: tempel prefiks (contoh 2001:db8:1::/64) untuk mendapat alamat jaringan, alamat terakhir, jumlah, serta bentuk ringkas/panjang RFC 5952. Memberi peringatan bila prefiks tidak di batas nibble. Mencakup LAN /64, titik-ke-titik /127, dan host /128. Dihitung di perangkat Anda, tidak diunggah ke server.',
	tool_ipv6_cidr_article:
		'Ubah CIDR IPv6 menjadi rentang jaringan dan teks ringkas baku. Prefiks di luar nibble hanya diperingatkan.',
	tool_ipv6_cidr_calculate: 'Hitung',
	tool_ipv6_cidr_sample: 'Muat contoh',
	tool_ipv6_cidr_clear: 'Hapus',
	tool_ipv6_cidr_copy: 'Salin kolom',
	tool_ipv6_cidr_copy_done: 'Tersalin',
	tool_ipv6_cidr_input_label: 'CIDR IPv6',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'Hasil',
	tool_ipv6_cidr_lbl_network: 'Jaringan (ringkas)',
	tool_ipv6_cidr_lbl_network_exp: 'Jaringan (panjang)',
	tool_ipv6_cidr_lbl_last: 'Alamat terakhir (ringkas)',
	tool_ipv6_cidr_lbl_last_exp: 'Alamat terakhir (panjang)',
	tool_ipv6_cidr_lbl_prefix: 'Panjang prefiks',
	tool_ipv6_cidr_lbl_count: 'Jumlah alamat',
	tool_ipv6_cidr_lbl_nibble: 'Selaras nibble',
	tool_ipv6_cidr_nibble_yes: 'Ya — panjang prefiks kelipatan 4.',
	tool_ipv6_cidr_nibble_no:
		'Tidak — prefiks ini tidak di batas 4 bit. DNS terbalik (ip6.arpa) dan banyak ISP mengharapkan langkah /4, /8, … /64, /68.',
	tool_ipv6_cidr_note_64: '/64 adalah prefiks LAN yang umum.',
	tool_ipv6_cidr_note_127: '/127 untuk tautan titik-ke-titik (RFC 6164): dua alamat.',
	tool_ipv6_cidr_note_128: '/128 adalah satu host.',
	tool_ipv6_cidr_err_empty: 'Masukkan CIDR IPv6 seperti 2001:db8:1::/64.',
	tool_ipv6_cidr_err_parse: 'Tidak bisa diuraikan sebagai alamat atau CIDR IPv6.',
	tool_ipv6_cidr_err_prefix: 'Panjang prefiks harus bilangan bulat 0 sampai 128.',
	tool_ipv6_cidr_err_ipv4: 'Halaman ini hanya IPv6. Untuk IPv4 gunakan CIDR ke rentang IP.',
	tool_ipv6_cidr_how_title: 'Cara kerja',
	tool_ipv6_cidr_how_body:
		'Kalkulator CIDR IPv6 mengubah prefiks menjadi rentang jaringan dan notasi ringkas. Bukan tes apakah IPv6 “nyala” di jaringan Anda.',
	tool_ipv6_cidr_how_item_1: 'Pastikan tugasnya menghitung rentang CIDR IPv6, bukan tes konektivitas.',
	tool_ipv6_cidr_how_item_2: 'Tempel CIDR IPv6 seperti 2001:db8:1::/64 (atau Muat contoh).',
	tool_ipv6_cidr_how_item_3: 'Baca jaringan dan alamat terakhir (ringkas serta panjang) lalu salin yang perlu.',
	tool_ipv6_cidr_how_item_4: 'Jika prefiks bukan kelipatan 4, baca peringatan nibble.',
	tool_ipv6_cidr_how_item_5: 'Untuk IPv4 gunakan CIDR ke rentang IP; untuk merangkum awal–akhir, IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'Rumus',
	tool_ipv6_cidr_formula_body:
		'Urai teks IPv6 (satu “::”). Mask = 2^128 − 2^(128−prefiks). Jaringan = alamat AND mask. Terakhir = jaringan OR NOT mask. Ringkas menurut RFC 5952.',
	tool_ipv6_cidr_formula_item_1: 'Tolak literal IPv4 dan prefiks di luar 0–128.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR 128 bit untuk jaringan dan alamat terakhir.',
	tool_ipv6_cidr_formula_item_3: 'Ukuran khusus: /128 → 1; /127 → 2 (RFC 6164); /64 → 2^64.',
	tool_ipv6_cidr_formula_item_4: 'Selaras nibble: prefiks modulo 4 = 0. Nilai lain tetap dihitung plus peringatan.',
	tool_ipv6_cidr_example_title: 'Contoh',
	tool_ipv6_cidr_example:
		'Masukan: 2001:db8:1::/64. Keluaran: jaringan 2001:db8:1:: (panjang 2001:0db8:0001:0000:0000:0000:0000:0000), terakhir 2001:db8:1:0:ffff:ffff:ffff:ffff, jumlah 2^64, nibble selaras ya.',
	tool_ipv6_cidr_usecases_title: 'Kapan berguna',
	tool_ipv6_cidr_usecase_1: 'Merencanakan LAN kantor /64 dan menempel jaringan ringkas ke konfigurasi router.',
	tool_ipv6_cidr_usecase_2: 'Memeriksa tautan titik-ke-titik yang seharusnya /127 (RFC 6164).',
	tool_ipv6_cidr_usecase_3: 'Menyeragamkan prefiks dokumentasi seperti 2001:db8::/32 sebelum tangkapan layar.',
	tool_ipv6_cidr_faq_q1: 'Apa arti “tidak selaras nibble”?',
	tool_ipv6_cidr_faq_a1:
		'DNS terbalik IPv6 dan banyak alokasi maju 4 bit. /67 tetap rentang sah, tetapi ip6.arpa dan sebagian ISP mengharapkan langkah nibble. Di sini rentang tetap tampil plus peringatan.',
	tool_ipv6_cidr_faq_q2: 'Apa beda /64, /127, dan /128?',
	tool_ipv6_cidr_faq_a2:
		'/64 LAN umum. /127 dua alamat titik-ke-titik (RFC 6164). /128 satu host. Panel menandai saat Anda menempelnya.',
	tool_ipv6_cidr_faq_q3: 'Apakah sama dengan melihat notasi CIDR IPv6?',
	tool_ipv6_cidr_faq_a3:
		'Ya untuk mengubah notasi menjadi jaringan/alamat terakhir dan teks baku. Tidak ada tabel semua prefiks IPv6 di halaman ini.',
	tool_ipv6_cidr_faq_q4: 'Di mana mengembangkan CIDR IPv4?',
	tool_ipv6_cidr_faq_a4: 'Alat CIDR ke rentang IP. Halaman ini menolak literal IPv4 dengan sengaja.',
	tool_ipv6_cidr_faq_q5: 'Apakah ini menguji IPv6 di jaringan saya?',
	tool_ipv6_cidr_faq_a5: 'Tidak. Tes konektivitas pekerjaan lain. Di sini hanya aritmetika prefiks.',
	tool_ipv6_cidr_faq_q6: 'Apakah alamat diunggah?',
	tool_ipv6_cidr_faq_a6: 'Tidak. Tetap di perangkat Anda, di tab ini, dan tidak diunggah ke server.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — Arsitektur alamat IPv6',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — Representasi teks IPv6 yang disarankan',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — Prefiks 127 bit pada tautan antar-router',
	tool_ipv6_cidr_disclaimer:
		'Hasil mengikuti aritmetika CIDR IPv6 umum (RFC 4291, 5952, 6164). Bukan saran perutean; verifikasi perubahan penting di lab Anda.',
};

export default id;
