/**
 * i18n tool shard (cidr-cheat-sheet / id).
 * Kueri: lembar contekan cidr / tabel cidr.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'Contekan CIDR — Klik prefiks untuk melihat mask dan host',
	tool_cidr_cheat_sheet_desc:
		'Contekan CIDR: klik /8–/32 untuk mask, wildcard, dan jumlah host. Tabel yang sama dengan chart CIDR. Di perangkat Anda.',
	tool_cidr_cheat_sheet_description:
		'Contekan CIDR: klik prefiks /8 sampai /32 untuk subnet mask, wildcard, dan host yang bisa dipakai. Contoh: /24 → 255.255.255.0 dan 254 host. Ada kolom bergaya CompTIA serta catatan /31 /32. Sama dengan CIDR chart. Untuk mengembangkan blok tertentu gunakan CIDR ke rentang IP. Klik di browser, tidak diunggah ke server.',
	tool_cidr_cheat_sheet_article: 'Tabel prefiks IPv4 yang bisa diklik. Bukan kalkulator alamat host sembarang.',
	tool_cidr_cheat_sheet_sample: 'Muat contoh',
	tool_cidr_cheat_sheet_clear: 'Hapus sorotan',
	tool_cidr_cheat_sheet_jump: 'Tampilkan',
	tool_cidr_cheat_sheet_jump_label: 'Lompat ke prefiks',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'Prefiks terpilih',
	tool_cidr_cheat_sheet_col_prefix: 'Prefiks',
	tool_cidr_cheat_sheet_col_mask: 'Subnet mask',
	tool_cidr_cheat_sheet_col_wild: 'Wildcard',
	tool_cidr_cheat_sheet_col_hosts: 'Host bisa dipakai',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Sering di tabel bergaya Network+',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'Total alamat',
	tool_cidr_cheat_sheet_note_31: '/31: kedua alamat bisa dipakai (RFC 3021).',
	tool_cidr_cheat_sheet_note_32: '/32: satu host. Jaringan adalah alamat itu sendiri.',
	tool_cidr_cheat_sheet_err_jump: 'Masukkan prefiks bulat 8 sampai 32.',
	tool_cidr_cheat_sheet_how_title: 'Cara kerja',
	tool_cidr_cheat_sheet_how_body:
		'Contekan CIDR membandingkan panjang slash dengan mask dan host. Klik baris, bukan membuka PDF.',
	tool_cidr_cheat_sheet_how_item_1: 'Pastikan tugasnya melihat prefiks, bukan mengembangkan IP tertentu.',
	tool_cidr_cheat_sheet_how_item_2: 'Klik baris /8–/32 atau ketik prefiks lalu Tampilkan (contoh memilih /24).',
	tool_cidr_cheat_sheet_how_item_3: 'Baca mask, wildcard, host, dan kolom CompTIA.',
	tool_cidr_cheat_sheet_how_item_4: 'Untuk /31 dan /32 baca catatan; jangan kurangi dua.',
	tool_cidr_cheat_sheet_how_item_5: 'Untuk mengembangkan 192.168.1.0/24 gunakan CIDR ke rentang IP.',
	tool_cidr_cheat_sheet_formula_title: 'Aturan',
	tool_cidr_cheat_sheet_formula_body:
		'Mask = 2^32 − 2^(32−n). Wildcard = NOT mask. Host: /32 → 1; /31 → 2; selain itu 2^(32−n) − 2.',
	tool_cidr_cheat_sheet_formula_item_1: 'Hanya prefiks IPv4 /8 sampai /32.',
	tool_cidr_cheat_sheet_formula_item_2: 'Kolom CompTIA petunjuk belajar, bukan silabus resmi.',
	tool_cidr_cheat_sheet_formula_item_3: 'Catatan /31 /32 mengalahkan aturan “kurang dua”.',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR = Classless Inter-Domain Routing. CIDR veteriner kata lain.',
	tool_cidr_cheat_sheet_example_title: 'Contoh',
	tool_cidr_cheat_sheet_example:
		'Pilih /24. Keluaran: mask 255.255.255.0, wildcard 0.0.0.255, host 254, total 256. Sama dengan contoh awal.',
	tool_cidr_cheat_sheet_usecases_title: 'Kapan berguna',
	tool_cidr_cheat_sheet_usecase_1: 'Meninjau /24 /25 /26 sebelum soal tabel Network+.',
	tool_cidr_cheat_sheet_usecase_2: 'Mengecek host /28 sebelum menulis ACL.',
	tool_cidr_cheat_sheet_usecase_3: 'Menjelaskan bahwa slash 24 berarti 256 alamat dan mask 255.255.255.0.',
	tool_cidr_cheat_sheet_faq_q1: 'CIDR kepanjangannya apa?',
	tool_cidr_cheat_sheet_faq_a1: 'Classless Inter-Domain Routing. Slash adalah panjang prefiks. Ini contekan, bukan kursus jaringan.',
	tool_cidr_cheat_sheet_faq_q2: 'Prefiks mana yang sering di tabel CompTIA?',
	tool_cidr_cheat_sheet_faq_a2: 'Biasanya /8, /16, /24 dan /25–/28, /30. Kolom menandainya; bukan silabus resmi.',
	tool_cidr_cheat_sheet_faq_q3: 'Bagaimana hitungan /31 dan /32?',
	tool_cidr_cheat_sheet_faq_a3: '/32 satu host. /31 mengikuti RFC 3021. Lainnya dikurangi dua.',
	tool_cidr_cheat_sheet_faq_q4: 'Ini implan CIDR untuk ternak?',
	tool_cidr_cheat_sheet_faq_a4: 'Bukan. Di peternakan CIDR arti lain. Di sini hanya prefiks jaringan.',
	tool_cidr_cheat_sheet_faq_q5: 'Bisa mengembangkan 192.168.1.37/24 di sini?',
	tool_cidr_cheat_sheet_faq_a5: 'Tidak. Gunakan CIDR ke rentang IP.',
	tool_cidr_cheat_sheet_faq_q6: 'Apakah klik diunggah?',
	tool_cidr_cheat_sheet_faq_a6: 'Tidak. Tetap di perangkat Anda, di tab ini, dan tidak diunggah ke server.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — Perutean antardomain tanpa kelas',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — Prefiks 31 bit pada tautan titik-ke-titik',
	tool_cidr_cheat_sheet_disclaimer:
		'Angka mengikuti aritmetika CIDR IPv4 umum. Kolom CompTIA petunjuk belajar, bukan silabus resmi.',
};

export default id;
