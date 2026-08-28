/**
 * i18n tool shard (ip-range-to-cidr / id).
 * Kata lokal: Rentang IP ke CIDR.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'Rentang IP ke CIDR — Ubah awal–akhir menjadi daftar awalan',
	tool_ip_range_to_cidr_desc:
		'Rentang IP ke CIDR: awal–akhir jadi awalan. Contoh: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Tetap di perangkat, tanpa unggah ke server.',
	tool_ip_range_to_cidr_description:
		'Konversi rentang IP ke CIDR: tempel awal dan akhir (atau beberapa baris) untuk mendapat awalan yang menutupi interval. Contoh: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Jika tidak sejajar, muncul beberapa awalan; multi-baris untuk agregasi CIDR. Alamat tetap di perangkat dan tidak diunggah ke server.',
	tool_ip_range_to_cidr_article:
		'Ubah ekspor ACL berformat awal–akhir menjadi daftar CIDR siap tempel. IPv4 dan IPv6 jangan dicampur dalam satu batch.',
	tool_ip_range_to_cidr_convert: 'Konversi',
	tool_ip_range_to_cidr_sample: 'Muat contoh',
	tool_ip_range_to_cidr_clear: 'Hapus',
	tool_ip_range_to_cidr_copy: 'Salin CIDR',
	tool_ip_range_to_cidr_copy_done: 'Disalin',
	tool_ip_range_to_cidr_input_label: 'Rentang IP (satu per baris)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'Awalan CIDR',
	tool_ip_range_to_cidr_meta_label: 'Ringkasan',
	tool_ip_range_to_cidr_meta_tpl: '{n} awalan · {family}',
	tool_ip_range_to_cidr_swap_hint: 'Awal dan akhir ditukar karena alamat pertama lebih besar.',
	tool_ip_range_to_cidr_err_empty: 'Masukkan setidaknya satu rentang (awal - akhir), satu per baris.',
	tool_ip_range_to_cidr_err_parse: 'Baris itu tidak bisa dibaca sebagai IP atau rentang.',
	tool_ip_range_to_cidr_err_mixed: 'Jangan campur IPv4 dan IPv6 dalam konversi yang sama.',
	tool_ip_range_to_cidr_err_limit: 'Terlalu banyak awalan CIDR (batas aman). Persempit rentangnya.',
	tool_ip_range_to_cidr_how_title: 'Cara kerja',
	tool_ip_range_to_cidr_how_body:
		'Hasilnya menutupi setiap alamat di interval tertutup dengan satu atau lebih awalan—cocok saat firewall hanya menerima CIDR.',
	tool_ip_range_to_cidr_how_item_1: 'Pahami: ujung tidak sejajar = beberapa awalan tepat, bukan tebakan mask tunggal.',
	tool_ip_range_to_cidr_how_item_2: 'Tempel “A - B” atau satu baris per rentang untuk agregasi.',
	tool_ip_range_to_cidr_how_item_3: 'Konversi, periksa, lalu salin.',
	tool_ip_range_to_cidr_how_item_4: 'Urutan terbalik memunculkan petunjuk tukar; keluarga campur harus diperbaiki.',
	tool_ip_range_to_cidr_formula_title: 'Aturan',
	tool_ip_range_to_cidr_formula_body:
		'Dari alamat saat ini sampai akhir: ambil blok pangkat dua terbesar yang sejajar dan masih muat di sisa rentang.',
	tool_ip_range_to_cidr_formula_item_1: 'Urai ujung jadi bilangan bulat; keluarga sama.',
	tool_ip_range_to_cidr_formula_item_2: 'Jika awal > akhir, tukar dan beri catatan.',
	tool_ip_range_to_cidr_formula_item_3: 'Bit host = trailing zero ∩ pangkat dua dari sisa panjang.',
	tool_ip_range_to_cidr_formula_item_4: 'Keluarkan jaringan/prefix, maju 2^bit, ulangi.',
	tool_ip_range_to_cidr_example_title: 'Contoh',
	tool_ip_range_to_cidr_example:
		'Masukan: 192.168.1.0 - 192.168.1.255. Keluaran: 192.168.1.0/24. Tidak sejajar: 10.0.0.10 - 10.0.0.20 → 10.0.0.10/31, 10.0.0.12/30, 10.0.0.16/30, 10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'Kapan berguna',
	tool_ip_range_to_cidr_usecase_1: 'Ubah ekspor ACL awal–akhir menjadi aturan CIDR firewall.',
	tool_ip_range_to_cidr_usecase_2: 'Isi security group cloud yang hanya menerima notasi CIDR.',
	tool_ip_range_to_cidr_usecase_3: 'Agregasi beberapa rentang privat dari tiket, satu baris per rentang.',
	tool_ip_range_to_cidr_faq_q1: 'Mengapa kadang banyak CIDR?',
	tool_ip_range_to_cidr_faq_a1: 'Tanpa batas bersih, satu awalan tidak menutupi tepat; keluar beberapa awalan sejajar.',
	tool_ip_range_to_cidr_faq_q2: 'Kalau alamat lebih besar ditulis dulu?',
	tool_ip_range_to_cidr_faq_a2: 'Ditukar otomatis, ada petunjuk singkat, lalu dikonversi.',
	tool_ip_range_to_cidr_faq_q3: 'Boleh campur IPv4 dan IPv6?',
	tool_ip_range_to_cidr_faq_a3: 'Tidak. Satu batch satu keluarga; konversi terpisah.',
	tool_ip_range_to_cidr_faq_q4: 'Bagaimana agregasi multi-baris?',
	tool_ip_range_to_cidr_faq_a4: 'Tiap baris dikonversi sendiri; celah antar baris tidak digabung paksa.',
	tool_ip_range_to_cidr_faq_q5: 'Apakah alamat diunggah?',
	tool_ip_range_to_cidr_faq_a5: 'Tidak. Tetap di perangkat pada tab ini; tanpa unggah ke server.',
	tool_ip_range_to_cidr_faq_q6: 'Di mana “CIDR ke rentang IP”?',
	tool_ip_range_to_cidr_faq_a6: 'Halaman ini hanya rentang→awalan. Memperluas CIDR adalah arah sebaliknya di alat lain.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — Perutean CIDR',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — Pengalamatan IPv6',
	tool_ip_range_to_cidr_disclaimer:
		'Awalan menutupi interval tertutup yang Anda masukkan. Ini bukan simulator protokol perutean; verifikasi ACL kritis di lab Anda.',
};

export default id;
