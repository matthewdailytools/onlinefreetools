/**
 * i18n shard for compare-two-text-files-online (Indonesian).
 * H1 is the search task “Bandingkan dua file teks secara online”; ID search phrasing, not an English sentence skeleton.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'Di tab ini pilih dua file teks, lalu lihat baris yang bertambah atau hilang. File tetap di perangkat Anda dan tidak diunggah. Tidak ada kotak tempel besar di sini — menempel teks saja ada di «Periksa perbedaan antara dua teks».',
	tool_compare_two_text_files_online_clear: 'Hapus',
	tool_compare_two_text_files_online_compare: 'Bandingkan',
	tool_compare_two_text_files_online_desc:
		'Bandingkan dua file teks secara online: pilih dua .txt, lihat diff baris di browser, tanpa unggah.',
	tool_compare_two_text_files_online_description:
		"Bandingkan dua file teks secara online di browser. Pilih .txt asli dan revisi; keduanya didekode sebagai UTF-8 ketat, BOM awal dibuang, dan encoding tidak valid atau isi biner ditolak sebelum tambahan serta penghapusan per baris disorot. File tetap di perangkat dan tidak diunggah ke server. Contoh: notes-a.txt dan notes-b.txt hanya berbeda pada baris tengah. File Word, spreadsheet, dan JSON terstruktur tidak diuraikan.",
	tool_compare_two_text_files_online_empty: 'Pilih dulu dua file teks, atau muat contoh.',
	tool_compare_two_text_files_online_err_binary:
		'Salah satu file tampak biner (byte null). Halaman ini hanya membandingkan teks polos seperti .txt.',
	tool_compare_two_text_files_online_err_encoding: "Salah satu file bukan UTF-8 yang valid. Simpan atau konversikan ke UTF-8 lalu bandingkan lagi.",
	tool_compare_two_text_files_online_err_too_large:
		'Sebuah file lebih besar dari sekitar 1 MB. Potong cuplikan lebih pendek agar tab tetap ringan.',
	tool_compare_two_text_files_online_example:
		'Muat contoh membandingkan notes-a.txt (alpha / baris kedua / ketiga) dengan notes-b.txt yang tengahnya «baris diubah». Mode baris hanya menandai baris itu. Hasil ini sudah tampil sejak gambar pertama.',
	tool_compare_two_text_files_online_example_title: 'Contoh',
	tool_compare_two_text_files_online_faq_a1:
		'Tidak. FileReader membaca byte di tab ini. jsdiff mungkin dimuat dari situs ini sebagai pustaka; file Anda tidak dikirim ke server kami.',
	tool_compare_two_text_files_online_faq_a2:
		"File didekode sebagai UTF-8 ketat dan BOM awal dibuang. UTF-8 yang tidak valid ditolak, bukan ditampilkan sebagai karakter pengganti; konversikan encoding lama seperti Windows-1252 terlebih dahulu.",
	tool_compare_two_text_files_online_faq_a3:
		'Kalau ada byte null, file dianggap biner dan ditolak. Pakai alat hex atau arsip. Word dan Excel punya halaman banding sendiri.',
	tool_compare_two_text_files_online_faq_a4:
		"Alat ini menerima .txt / .text yang didekode sebagai UTF-8. Gunakan pembanding tempel tanpa file, serta pembanding Word atau spreadsheet untuk .docx, xlsx, xls, atau csv.",
	tool_compare_two_text_files_online_faq_q1: 'Apakah file saya diunggah?',
	tool_compare_two_text_files_online_faq_q2: 'Aturan encoding dan BOM apa yang dipakai?',
	tool_compare_two_text_files_online_faq_q3: 'Bisa bandingkan biner, Word, atau Excel di sini?',
	tool_compare_two_text_files_online_faq_q4: 'Sama dengan bandingkan txt atau bandingkan dua file?',
	tool_compare_two_text_files_online_how_body:
		'Pilih dua file teks yang sudah ada di disk, lalu baca baris yang diwarnai. Layar pertama tidak punya kotak tempel besar.',
	tool_compare_two_text_files_online_how_item_1: 'Pilih file teks pertama (ekspor atau salinan asli).',
	tool_compare_two_text_files_online_how_item_2: 'Pilih file teks kedua (versi yang sudah diubah).',
	tool_compare_two_text_files_online_how_item_3:
		"Tekan Bandingkan untuk memperbarui diff per baris; memilih kedua file juga menjalankannya otomatis.",
	tool_compare_two_text_files_online_how_item_4: 'Hijau adalah tambahan, merah adalah hapusan. Hapus mengeluarkan kedua file dari tab ini.',
	tool_compare_two_text_files_online_how_title: 'Cara memakai',
	tool_compare_two_text_files_online_label_a: 'File teks pertama',
	tool_compare_two_text_files_online_label_b: 'File teks kedua',
	tool_compare_two_text_files_online_legend: 'Hijau = ditambah · Merah = dihapus',
	tool_compare_two_text_files_online_load_sample: 'Muat contoh',
	tool_compare_two_text_files_online_need_lib: 'Pembanding gagal dimuat. Periksa jaringan lalu muat ulang.',
	tool_compare_two_text_files_online_no_diff: 'Tidak ada perbedaan: kedua file sama sebagai teks.',
	tool_compare_two_text_files_online_result_label: 'Perbedaan baris',
	tool_compare_two_text_files_online_rules_body:
		'Setelah decode UTF-8, diff-nya per baris. Encoding, BOM, dan cek biner terjadi sebelum pewarnaan.',
	tool_compare_two_text_files_online_rules_item_1:
		'Setiap file dibaca dengan FileReader / ArrayBuffer lalu didekode UTF-8. BOM UTF-8 di awal dipotong agar tidak seolah baris pertama berubah.',
	tool_compare_two_text_files_online_rules_item_2:
		'Byte null berarti biner dan ditolak. Ini bukan alat dump heksadesimal.',
	tool_compare_two_text_files_online_rules_item_3:
		'Diff memakai mode baris (jsdiff diffLines). Satu kata di baris itu berubah pun, seluruh baris sering ditandai.',
	tool_compare_two_text_files_online_rules_item_4:
		'Tidak ada kotak tempel di layar pertama. Tempel dua teks tanpa file di «Periksa perbedaan antara dua teks».',
	tool_compare_two_text_files_online_rules_title: 'Aturan yang perlu diingat',
	tool_compare_two_text_files_online_sample_a: 'alpha\nbaris kedua\nketiga',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\nbaris diubah\nketiga',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '{added} ditambah, {removed} dihapus',
	tool_compare_two_text_files_online_title: 'Bandingkan dua file teks secara online',
	tool_compare_two_text_files_online_usecase_1:
		'Ekspor: bandingkan log.txt kemarin dengan ekspor hari ini tanpa menempel puluhan ribu baris.',
	tool_compare_two_text_files_online_usecase_2:
		'Cadangan konfigurasi: dua snapshot .env atau .txt dari disk, baris demi baris.',
	tool_compare_two_text_files_online_usecase_3:
		'Tugas: dua file .txt PR, untuk melihat baris mana yang berubah.',
	tool_compare_two_text_files_online_usecases_title: 'Kapan dipakai',
};

export default id;
