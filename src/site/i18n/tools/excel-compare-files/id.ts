/**
 * i18n（excel-compare-files / id）。
 * H1: Bandingkan file Excel（tanpa “online” di H1）。
 * Lembar pertama secara default; sel kosong = string kosong.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_excel_compare_files_article:
		'Pilih dua lembar kerja dan bandingkan lembar saat ini sel demi sel. Sel kosong dihitung sebagai string kosong. Berkas tetap di perangkat dan tidak diunggah ke server.',
	tool_excel_compare_files_clear: 'Hapus',
	tool_excel_compare_files_col_addr: 'Sel',
	tool_excel_compare_files_col_left: 'Berkas pertama',
	tool_excel_compare_files_col_right: 'Berkas kedua',
	tool_excel_compare_files_compare: 'Bandingkan',
	tool_excel_compare_files_desc:
		'Bandingkan file Excel: pilih dua tabel, bandingkan lembar saat ini sel demi sel — tetap di perangkat, tanpa unggah ke server.',
	tool_excel_compare_files_description:
		'Bandingkan file Excel di peramban. Proses: pilih dua xlsx atau csv, pilih lembar saat ini (lembar pertama secara default), lalu daftar sel yang nilainya berbeda. Berkas tetap di perangkat dan tidak diunggah ke server. Contoh: dua tabel 3 baris di mana B3 berubah dari 2 menjadi 9. “Online” menjelaskan cara jalan, bukan judul. Pergeseran kolom dibandingkan menurut alamat, bukan nama header.',
	tool_excel_compare_files_empty: 'Pilih dulu dua berkas lembar kerja, atau muat contoh.',
	tool_excel_compare_files_err_read:
		'Lembar kerja tidak bisa dibaca. Coba xlsx atau csv, dan buka kunci buku kerja terlindungi.',
	tool_excel_compare_files_example:
		'Muat contoh membandingkan dua tabel CSV. Header Name/Qty cocok; jumlah Gadget 2 vs 9, jadi B3 terdaftar. Tampilan pertama sudah menunjukkan sel itu.',
	tool_excel_compare_files_example_title: 'Contoh',
	tool_excel_compare_files_faq_a1:
		'Tidak. Byte dibaca di tab ini dengan SheetJS. Pustaka bisa datang dari CDN; berkas Anda tidak diunggah ke server kami.',
	tool_excel_compare_files_faq_a2:
		'Ya: lembar pertama dipilih secara default. Gunakan daftar lembar jika butuh tab lain di berkas yang sama. Lembar lain tidak dibandingkan sampai Anda memilihnya.',
	tool_excel_compare_files_faq_a3:
		'Ya. CSV dibaca sebagai satu lembar. Mencari bandingkan dua csv tetap halaman ini, tanpa URL tambahan.',
	tool_excel_compare_files_faq_a4:
		'Sel yang hilang dan sel kosong sama-sama string kosong. Kolom yang bergeser tetap membandingkan A1 dengan A1, bukan “kolom Name” menurut header, supaya tidak salah pasang diam-diam saat header pindah.',
	tool_excel_compare_files_faq_q1: 'Apakah berkas Excel saya diunggah?',
	tool_excel_compare_files_faq_q2: 'Apakah hanya lembar pertama yang dibandingkan?',
	tool_excel_compare_files_faq_q3: 'Bisakah membandingkan dua CSV di sini?',
	tool_excel_compare_files_faq_q4: 'Bagaimana sel kosong dan kolom bergeser ditangani?',
	tool_excel_compare_files_how_body:
		'Pilih dua tabel dan baca alamat sel mana yang berbeda pada lembar saat ini.',
	tool_excel_compare_files_how_item_1: 'Pilih lembar kerja pertama (xlsx, xls, atau csv).',
	tool_excel_compare_files_how_item_2: 'Pilih lembar kerja kedua.',
	tool_excel_compare_files_how_item_3: 'Biarkan lembar pertama, kecuali Anda butuh tab lain.',
	tool_excel_compare_files_how_item_4: 'Bandingkan mendaftar sel yang beda; Muat contoh sudah jalan saat pertama dibuka.',
	tool_excel_compare_files_how_title: 'Cara pakai',
	tool_excel_compare_files_label_a: 'Lembar kerja pertama',
	tool_excel_compare_files_label_b: 'Lembar kerja kedua',
	tool_excel_compare_files_load_sample: 'Muat contoh',
	tool_excel_compare_files_need_lib: 'SheetJS gagal dimuat. Periksa jaringan lalu muat ulang.',
	tool_excel_compare_files_no_diff: 'Tidak ada perbedaan sel pada lembar saat ini.',
	tool_excel_compare_files_result_label: 'Perbedaan sel',
	tool_excel_compare_files_rules_body: 'Nilai dibandingkan menurut alamat kisi hanya pada lembar yang dipilih.',
	tool_excel_compare_files_rules_item_1: 'SheetJS membaca buku kerja. Lembar default adalah nama pertama dalam berkas.',
	tool_excel_compare_files_rules_item_2:
		'Setiap sel dibandingkan sebagai teks setelah konversi SheetJS. Kosong dan hilang adalah "".',
	tool_excel_compare_files_rules_item_3:
		'Kolom yang disisipkan di satu sisi tetap sejajar menurut A1/B1, bukan label header.',
	tool_excel_compare_files_rules_item_4:
		'Lembar lain dalam buku kerja diabaikan sampai Anda memilihnya. Ini bukan pindai seluruh buku secara default.',
	tool_excel_compare_files_rules_title: 'Aturan yang perlu diketahui',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'Lembar di berkas pertama',
	tool_excel_compare_files_sheet_b: 'Lembar di berkas kedua',
	tool_excel_compare_files_summary: '{n} sel berbeda',
	tool_excel_compare_files_title: 'Bandingkan file Excel',
	tool_excel_compare_files_usecase_1: 'Penawaran: dua daftar harga yang diekspor, beberapa sel bergeser.',
	tool_excel_compare_files_usecase_2: 'Absensi atau stok CSV minggu ke minggu.',
	tool_excel_compare_files_usecase_3: 'Tabel tugas yang disimpan sebagai xlsx dari dua siswa.',
	tool_excel_compare_files_usecases_title: 'Cocok untuk',
};

export default id;
