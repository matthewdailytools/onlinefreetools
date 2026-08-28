/**
 * i18n tool shard (cidr-to-ip-range / id).
 * Local search: cidr ke rentang ip; kalkulator cidr / notasi cidr land in desc+FAQ.
 * H1 stays CIDR→rentang (not sole “Kalkulator CIDR”); subtitle is expand/result oriented.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR ke rentang IP — Perluas prefix jadi alamat yang bisa dipakai',
	tool_cidr_to_ip_range_desc:
		'CIDR ke rentang IP: tempel 192.168.1.0/24 untuk jaringan, broadcast, host usable, dan mask. Hitung di perangkat Anda.',
	tool_cidr_to_ip_range_description:
		'CIDR ke rentang IP: tempel CIDR IPv4 (contoh 192.168.1.0/24) untuk melihat alamat jaringan, broadcast, host pertama/terakhir yang usable, jumlah host, dan subnet mask. Bisa juga ubah mask ↔ prefix, cek apakah IP ada di blok, atau perluas daftar alamat dengan batas baris aman. Pekerjaan yang sama dengan kalkulator notasi CIDR—tetap di perangkat Anda, tidak diunggah ke server.',
	tool_cidr_to_ip_range_article:
		'Tempel CIDR IPv4 untuk melihat alamat jaringan, broadcast, host usable pertama/terakhir, jumlah host, subnet mask, dan wildcard. Mode opsional: konversi mask ↔ prefix, cek contains/overlap, atau perluas alamat hingga batas aman.',
	tool_cidr_to_ip_range_calculate: 'Hitung',
	tool_cidr_to_ip_range_sample: 'Muat contoh',
	tool_cidr_to_ip_range_clear: 'Hapus',
	tool_cidr_to_ip_range_copy: 'Salin field',
	tool_cidr_to_ip_range_copy_done: 'Tersalin',
	tool_cidr_to_ip_range_mode_label: 'Mode',
	tool_cidr_to_ip_range_mode_range: 'Prefix → rentang',
	tool_cidr_to_ip_range_mode_mask: 'Mask ↔ prefix',
	tool_cidr_to_ip_range_mode_check: 'Contains / overlap',
	tool_cidr_to_ip_range_mode_expand: 'Perluas (dibatasi)',
	tool_cidr_to_ip_range_input_label: 'CIDR IPv4',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'Subnet mask (titik-titik)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP atau CIDR kedua',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 atau 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'Hasil',
	tool_cidr_to_ip_range_lbl_network: 'Jaringan',
	tool_cidr_to_ip_range_lbl_broadcast: 'Broadcast',
	tool_cidr_to_ip_range_lbl_first: 'Host usable pertama',
	tool_cidr_to_ip_range_lbl_last: 'Host usable terakhir',
	tool_cidr_to_ip_range_lbl_hosts: 'Jumlah host',
	tool_cidr_to_ip_range_lbl_mask: 'Subnet mask',
	tool_cidr_to_ip_range_lbl_wildcard: 'Wildcard mask',
	tool_cidr_to_ip_range_lbl_prefix: 'Panjang prefix',
	tool_cidr_to_ip_range_lbl_normalized: 'CIDR ternormalisasi',
	tool_cidr_to_ip_range_norm_hint: 'Bit host tidak nol; nilai yang ditampilkan memakai alamat jaringan.',
	tool_cidr_to_ip_range_expand_limit:
		'Perluasan berhenti di batas aman ({limit} baris). Pakai prefix lebih panjang atau naikkan batas nanti.',
	tool_cidr_to_ip_range_check_in: 'Alamat berada di dalam CIDR.',
	tool_cidr_to_ip_range_check_out: 'Alamat berada di luar CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'Blok identik.',
	tool_cidr_to_ip_range_overlap_contain: 'CIDR pertama berisi CIDR kedua.',
	tool_cidr_to_ip_range_overlap_inside: 'CIDR pertama berada di dalam CIDR kedua.',
	tool_cidr_to_ip_range_overlap_overlap: 'Blok saling tumpang tindih sebagian.',
	tool_cidr_to_ip_range_overlap_disjoint: 'Blok tidak bersinggungan.',
	tool_cidr_to_ip_range_mask_to_prefix: 'Prefix dari mask: /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'Mask dari prefix: {mask}',
	tool_cidr_to_ip_range_err_empty: 'Masukkan CIDR IPv4 seperti 192.168.1.0/24.',
	tool_cidr_to_ip_range_err_parse: 'Tidak bisa diurai sebagai alamat IPv4 atau CIDR.',
	tool_cidr_to_ip_range_err_prefix: 'Panjang prefix harus bilangan bulat 0 sampai 32.',
	tool_cidr_to_ip_range_err_ipv6: 'Halaman ini hanya IPv4. Untuk prefix IPv6 gunakan alat CIDR IPv6.',
	tool_cidr_to_ip_range_err_mask: 'Mask titik-titik itu bukan subnet mask IPv4 yang kontigu.',
	tool_cidr_to_ip_range_err_second: 'Masukkan alamat IPv4 atau CIDR kedua untuk contains/overlap.',
	tool_cidr_to_ip_range_how_title: 'Cara kerja',
	tool_cidr_to_ip_range_how_body:
		'Ubah prefix CIDR menjadi rentang IP: jaringan, broadcast, host usable, dan mask. Itu pekerjaan yang sama yang dimaksud orang dengan kalkulator notasi CIDR.',
	tool_cidr_to_ip_range_how_item_1:
		'Pastikan tugas Anda: ubah prefix CIDR menjadi rentang (bukan start–end → CIDR).',
	tool_cidr_to_ip_range_how_item_2: 'Tempel CIDR IPv4 seperti 192.168.1.0/24 (atau klik Muat contoh).',
	tool_cidr_to_ip_range_how_item_3:
		'Baca jaringan, broadcast, host usable pertama/terakhir, jumlah host, dan mask; salin yang perlu.',
	tool_cidr_to_ip_range_how_item_4: 'Opsional: ganti ke konversi mask, contains/overlap, atau perluas terbatas.',
	tool_cidr_to_ip_range_how_item_5:
		'Untuk start–end → CIDR, pakai alat terkait IP range ke CIDR; untuk IPv6 tunggu halaman CIDR IPv6 khusus.',
	tool_cidr_to_ip_range_formula_title: 'Rumus',
	tool_cidr_to_ip_range_formula_body:
		'Mask = 2^32 − 2^(32−prefix). Jaringan = alamat AND mask. Broadcast = jaringan OR NOT mask. Host usable mengikuti kasus khusus /31 (RFC 3021) dan /32.',
	tool_cidr_to_ip_range_formula_item_1: 'Parse a.b.c.d/nn; tolak IPv6 dan prefix di luar 0–32.',
	tool_cidr_to_ip_range_formula_item_2: 'Hitung bit mask, lalu jaringan dan broadcast dengan AND/OR bitwise.',
	tool_cidr_to_ip_range_formula_item_3:
		'Usable: /32 → satu host; /31 → kedua alamat (RFC 3021); selain itu first=network+1, last=broadcast−1.',
	tool_cidr_to_ip_range_formula_item_4: 'Jika bit host terisi di input, normalisasi ke alamat jaringan dan tampilkan petunjuk.',
	tool_cidr_to_ip_range_example_title: 'Contoh',
	tool_cidr_to_ip_range_example:
		'Input: 192.168.1.0/24. Output: jaringan 192.168.1.0, broadcast 192.168.1.255, usable 192.168.1.1–192.168.1.254, mask 255.255.255.0, host 254. Input 192.168.1.37/24 dinormalisasi ke 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'Kapan ini membantu',
	tool_cidr_to_ip_range_usecase_1:
		'Perluas CIDR security-group jadi alamat pertama/terakhir sebelum menulis ACL yang masih pakai rentang.',
	tool_cidr_to_ip_range_usecase_2:
		'Berikan rekan mask titik-titik dan jumlah host usable dari /24 tanpa membuka spreadsheet.',
	tool_cidr_to_ip_range_usecase_3:
		'Cek rencana Proxmox atau bridge: pastikan jaringan dan broadcast sesuai CIDR yang akan Anda assign.',
	tool_cidr_to_ip_range_faq_q1: 'Bagaimana host usable dihitung untuk /31 dan /32?',
	tool_cidr_to_ip_range_faq_a1:
		'/32 adalah satu host (jaringan = alamat itu; tanpa broadcast klasik). /31 mengikuti RFC 3021: kedua alamat usable untuk point-to-point; tidak ada pasangan network/broadcast yang menganggur.',
	tool_cidr_to_ip_range_faq_q2: 'Bagaimana jika saya tempel 192.168.1.37/24?',
	tool_cidr_to_ip_range_faq_a2:
		'Alat menormalisasi ke 192.168.1.0/24, menampilkan petunjuk singkat bahwa bit host diabaikan, lalu tetap menampilkan jaringan, broadcast, dan rentang usable untuk blok itu.',
	tool_cidr_to_ip_range_faq_q3: 'Apakah ini sama dengan kalkulator notasi CIDR?',
	tool_cidr_to_ip_range_faq_a3:
		'Ya untuk tugas umum: ubah notasi CIDR menjadi field jaringan/broadcast/host usable dan mask. Judul memakai “CIDR ke rentang IP” karena itu menggambarkan hasilnya; pencarian bergaya kalkulator tetap mendarat di alat yang sama.',
	tool_cidr_to_ip_range_faq_q4: 'Bisakah saya perluas setiap IP di blok besar?',
	tool_cidr_to_ip_range_faq_a4:
		'Pakai mode Perluas. Listing berhenti di batas aman (1024 baris) agar /8 tidak membekukan tab. Persempit prefix atau pakai field ringkasan saja.',
	tool_cidr_to_ip_range_faq_q5: 'Di mana saya ubah start–end menjadi CIDR?',
	tool_cidr_to_ip_range_faq_a5:
		'Tugas kebalikan itu ada di alat terkait IP range ke CIDR. Halaman ini hanya memperluas prefix menjadi field rentang (dan daftar terbatas opsional).',
	tool_cidr_to_ip_range_faq_q6: 'Apakah alamat saya diunggah?',
	tool_cidr_to_ip_range_faq_a6:
		'Tidak. Alamat tetap di perangkat Anda di tab browser ini dan tidak diunggah ke server.',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'Hasil mengikuti aritmetika CIDR IPv4 umum (termasuk RFC 3021 untuk /31). Ini bukan penasihat kebijakan routing atau firewall; verifikasi perubahan kritis di lab Anda sendiri.',
};

export default id;
