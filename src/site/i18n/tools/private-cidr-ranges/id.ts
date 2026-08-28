/**
 * i18n tool shard (private-cidr-ranges / id).
 * Local search: rentang cidr privat / ip privat cidr.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'Rentang CIDR privat — Cek apakah IP atau prefix termasuk privat atau special-use',
	tool_private_cidr_ranges_desc:
		'Rentang CIDR privat: RFC1918, CGNAT, ULA. Contoh: 100.64.1.10 → ruang bersama CGNAT.',
	tool_private_cidr_ranges_description:
		'Rentang CIDR privat: tempel IP atau CIDR untuk melihat rentang IP privat RFC1918, CGNAT (100.64/10), ULA IPv6, dan blok dokumentasi (contoh: 100.64.1.10 → ruang bersama). Tabel referensi bisa diklik, termasuk catatan Tailscale di ruang CGNAT. Pengecekan tetap di perangkat Anda tanpa unggah ke server.',
	tool_private_cidr_ranges_article:
		'Tempel alamat atau CIDR untuk mencocokkan prefix privat atau special-use (RFC1918, CGNAT, link-local, loopback, dokumentasi, ULA IPv6). Klik baris tabel untuk memuat prefix itu. Halaman ini tidak memperluas daftar host.',
	tool_private_cidr_ranges_check: 'Periksa',
	tool_private_cidr_ranges_sample: 'Muat contoh',
	tool_private_cidr_ranges_clear: 'Hapus',
	tool_private_cidr_ranges_copy: 'Salin ringkasan',
	tool_private_cidr_ranges_copy_done: 'Tersalin',
	tool_private_cidr_ranges_input_label: 'Alamat IP atau CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 atau 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'Semua',
	tool_private_cidr_ranges_filter_v4: 'Tabel IPv4',
	tool_private_cidr_ranges_filter_v6: 'Tabel IPv6',
	tool_private_cidr_ranges_result_label: 'Cocok',
	tool_private_cidr_ranges_table_title: 'Tabel referensi (klik baris)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'Nama',
	tool_private_cidr_ranges_col_family: 'Keluarga',
	tool_private_cidr_ranges_col_spec: 'Spesifikasi',
	tool_private_cidr_ranges_no_match:
		'Tidak ada di daftar privat/special-use bawaan (bisa unicast global atau ruang lain).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale dan produk lain sering memakai ruang CGNAT ini (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'Masukkan alamat IPv4/IPv6 atau CIDR.',
	tool_private_cidr_ranges_err_parse: 'Tidak bisa diurai sebagai alamat IP atau CIDR.',
	tool_private_cidr_ranges_name_rfc1918_10: 'Privat RFC1918',
	tool_private_cidr_ranges_name_rfc1918_172: 'Privat RFC1918',
	tool_private_cidr_ranges_name_rfc1918_192: 'Privat RFC1918',
	tool_private_cidr_ranges_name_cgnat: 'Ruang bersama CGNAT',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'Dokumentasi (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'Dokumentasi (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'Dokumentasi (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'ULA IPv6',
	tool_private_cidr_ranges_name_linklocal_v6: 'Link-local IPv6',
	tool_private_cidr_ranges_name_doc_v6: 'Dokumentasi IPv6',
	tool_private_cidr_ranges_note_rfc1918_10: 'Penggunaan privat — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'Penggunaan privat — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'Penggunaan privat — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'Ruang bersama untuk carrier-grade NAT (RFC 6598). Bukan RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Loopback host — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'Hanya dokumentasi — jangan dipakai produksi (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'Hanya dokumentasi — jangan dipakai produksi (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'Hanya dokumentasi — jangan dipakai produksi (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'Alamat lokal unik — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'Link-local IPv6 — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'Prefix dokumentasi — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'Cara kerja',
	tool_private_cidr_ranges_how_body:
		'Anda mengklasifikasikan apakah alamat masuk CIDR privat atau special-use (RFC1918, CGNAT, ULA, dokumentasi…), bukan menghitung host. Tempel alamat, baca kecocokan, atau klik tabel referensi.',
	tool_private_cidr_ranges_how_item_1:
		'Pastikan tujuan Anda mengklasifikasi blok privat/special-use — bukan memperluas daftar host.',
	tool_private_cidr_ranges_how_item_2: 'Tempel alamat IPv4/IPv6 atau CIDR (contoh 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3:
		'Baca kategori, CIDR, dan catatan RFC (plus tip Tailscale saat CGNAT cocok).',
	tool_private_cidr_ranges_how_item_4: 'Opsional: klik baris tabel untuk memeriksa prefix itu.',
	tool_private_cidr_ranges_how_item_5:
		'Jika tidak cocok, anggap di luar daftar privat/special ini — verifikasi sebelum menyebut «privat».',
	tool_private_cidr_ranges_formula_title: 'Aturan',
	tool_private_cidr_ranges_formula_body:
		'Input diurai sebagai alamat atau prefix, lalu diuji keanggotaannya di tabel bawaan. Kecocokan lebih panjang (lebih spesifik) ditampilkan lebih dulu.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 memakai bilangan 32-bit; IPv6 memakai 128-bit. Keluarga tidak dicampur.',
	tool_private_cidr_ranges_formula_item_2: 'Untuk alamat polos: cocokkan setiap CIDR tabel yang memuatnya.',
	tool_private_cidr_ranges_formula_item_3:
		'Untuk input CIDR: cocokkan entri tabel yang sepenuhnya memuat prefix itu (uji subset).',
	tool_private_cidr_ranges_formula_item_4:
		'Urutkan hasil menurun menurut panjang prefix agar blok paling spesifik muncul pertama.',
	tool_private_cidr_ranges_example_title: 'Contoh',
	tool_private_cidr_ranges_example:
		'Input: 100.64.1.10. Output: ruang bersama CGNAT 100.64.0.0/10 (RFC 6598), dengan catatan Tailscale dan produk serupa sering memakai ruang ini. Input 10.0.0.5 cocok RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'Kapan berguna',
	tool_private_cidr_ranges_usecase_1:
		'Pilih blok VPC atau lab dan pastikan benar-benar RFC1918 privat sebelum buka lubang firewall.',
	tool_private_cidr_ranges_usecase_2:
		'Lihat alamat 100.x dan pisahkan ruang CGNAT / Tailscale dari rentang IP privat RFC1918.',
	tool_private_cidr_ranges_usecase_3:
		'Periksa ULA IPv6 atau alamat dokumentasi 2001:db8 sebelum dianggap routing produksi.',
	tool_private_cidr_ranges_faq_q1: 'Apakah 100.64.0.0/10 «privat»? Bagaimana dengan Tailscale?',
	tool_private_cidr_ranges_faq_a1:
		'Itu ruang bersama untuk carrier-grade NAT (RFC 6598), bukan RFC1918. Tailscale dan overlay lain sering memakai CIDR CGNAT ini; halaman ini hanya memberi label ruang — bukan konsol Tailscale.',
	tool_private_cidr_ranges_faq_q2: 'Mengapa prefix dokumentasi perlu ditandai?',
	tool_private_cidr_ranges_faq_a2:
		'Blok seperti 192.0.2.0/24 dan 2001:db8::/32 dicadangkan untuk contoh dan docs. Memakainya di produksi merusak ekspektasi konektivitas.',
	tool_private_cidr_ranges_faq_q3: 'Tiga rentang CIDR privat RFC1918 apa saja?',
	tool_private_cidr_ranges_faq_a3:
		'10.0.0.0/8, 172.16.0.0/12, dan 192.168.0.0/16 — rentang IP privat klasik dalam bentuk CIDR.',
	tool_private_cidr_ranges_faq_q4: 'Apakah alamat saya diunggah atau daftar host diperluas?',
	tool_private_cidr_ranges_faq_a4:
		'Tidak — tidak ada perluasan host atau broadcast di sini; itu untuk alat CIDR-to-range. Pengecekan tetap di perangkat tanpa unggah ke server.',
	tool_private_cidr_ranges_faq_q5: 'Apa itu ULA IPv6 (fc00::/7)?',
	tool_private_cidr_ranges_faq_a5:
		'Alamat lokal unik untuk jaringan lokal. Bukan unicast global Internet; jangan harap routing di internet publik.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — Address Allocation for Private Internets',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — IANA-Reserved IPv4 Prefix for Shared Address Space',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — Unique Local IPv6 Unicast Addresses',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — IPv4 Address Blocks Reserved for Documentation',
	tool_private_cidr_ranges_disclaimer:
		'Kecocokan mengikuti RFC yang dipublikasikan untuk ruang privat dan special-use. Ini bukan saran routing atau kebijakan firewall; verifikasi perubahan kritis di lab Anda.',
};

export default id;
