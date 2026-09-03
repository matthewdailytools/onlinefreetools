/**
 * i18n tool shard (batch-compress-pdfs-for-email / id).
 * H1 mengikuti pencarian «Kompres PDF untuk email sekaligus».
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: beberapa lampiran diperkecil terpisah lalu masuk ZIP. */
const id: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'Sebelum kirim email, perkecil beberapa penawaran atau pindaian di tab ini. Di dalam ZIP tetap PDF terpisah, bukan satu buku. File terenkripsi atau terlalu berat dilewati, sisanya diunduh. File tetap di perangkat dan tidak diunggah ke server.',
	tool_batch_compress_pdfs_for_email_choose_files: 'Pilih PDF',
	tool_batch_compress_pdfs_for_email_chip_email: 'Preset email',
	tool_batch_compress_pdfs_for_email_chip_max: 'Perkecil maksimal',
	tool_batch_compress_pdfs_for_email_chip_print: 'Preset cetak',
	tool_batch_compress_pdfs_for_email_clear: 'Hapus',
	tool_batch_compress_pdfs_for_email_col_after: 'Sesudah',
	tool_batch_compress_pdfs_for_email_col_before: 'Sebelum',
	tool_batch_compress_pdfs_for_email_col_name: 'Berkas',
	tool_batch_compress_pdfs_for_email_col_status: 'Status',
	tool_batch_compress_pdfs_for_email_compress: 'Kompres semua',
	tool_batch_compress_pdfs_for_email_desc:
		'Kompres PDF untuk email sekaligus: tiap berkas diperkecil sendiri dan ZIP tetap berisi beberapa PDF; tetap di perangkat, tidak diunggah ke server.',
	tool_batch_compress_pdfs_for_email_description:
		'Kompres PDF untuk email sekaligus: masukkan beberapa penawaran atau pindaian, terapkan preset email ke tiap berkas, lewati yang terenkripsi atau terlalu berat, unduh ZIP berisi PDF terpisah — bukan satu buku gabungan. Langkah: pilih tumpukan, biarkan preset email, kompres semua, lihat byte yang dihemat. Contoh: dua PDF sampel pendek tetap dua berkas di ZIP. File tetap di perangkat dan tidak diunggah ke server.',
	tool_batch_compress_pdfs_for_email_download_zip: 'Unduh ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: 'Jatuhkan PDF (maks. 20). Tiap berkas dikompres sendiri. Pekerjaan tetap di tab ini.',
	tool_batch_compress_pdfs_for_email_empty: 'Tambahkan PDF dulu.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'Dilindungi kata sandi. Dilewati.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'Peramban ini tidak bisa merakit ZIP. Coba yang lebih baru.',
	tool_batch_compress_pdfs_for_email_err_load: 'PDF ini tidak bisa dibaca. Dilewati.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'Pustaka PDF tidak dimuat. Coba peramban yang lebih baru.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js tidak dimuat. Coba peramban yang lebih baru.',
	tool_batch_compress_pdfs_for_email_err_too_many: 'Paling banyak 20 PDF. Sisanya tidak ditambahkan.',
	tool_batch_compress_pdfs_for_email_example:
		'Muat contoh membuat dua PDF pendek berhalaman gambar, menjalankan preset email pada masing-masing, menjaga dua berkas di ZIP, dan menampilkan byte yang dihemat.',
	tool_batch_compress_pdfs_for_email_example_title: 'Contoh',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'Tidak. Raster dan penyusunan ulang terjadi di tab ini. File tetap di perangkat dan tidak diunggah ke server. pdf.js, pdf-lib, dan pembantu ZIP bisa dimuat dari CDN; PDF Anda tidak meninggalkan tab.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'Tidak. Anda mendapat ZIP berisi N PDF. Menggabungkan jadi satu buku adalah Gabung PDF — pekerjaan lain, bukan halaman ini.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'Pindaian berfoto biasanya mengecil. PDF teks saja kadang hampir tidak bergerak. Tabel menampilkan sebelum dan sesudah.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'Kompres PDF menangani satu berkas. Halaman ini berbagi satu preset email untuk tumpukan dan memasukkan yang berhasil ke ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'Baris itu dilewati, sisanya lanjut. Buka kuncinya di tempat lain, lalu tambahkan lagi.',
	tool_batch_compress_pdfs_for_email_faq_q1: 'Apakah PDF diunggah ke server?',
	tool_batch_compress_pdfs_for_email_faq_q2: 'Apakah ini menggabungkan semuanya jadi satu PDF?',
	tool_batch_compress_pdfs_for_email_faq_q3: 'Apakah pindaian lebih mengecil daripada teks?',
	tool_batch_compress_pdfs_for_email_faq_q4: 'Apa bedanya dengan Kompres PDF?',
	tool_batch_compress_pdfs_for_email_faq_q5: 'Bagaimana jika satu berkas terenkripsi?',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} PDF dalam antrean',
	tool_batch_compress_pdfs_for_email_how_body:
		'Masukkan beberapa lampiran, pilih preset email, kompres tiap berkas sendiri, lalu ambil ZIP dari yang berhasil.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'Pilih penawaran atau pindaian yang harus lolos batas lampiran email.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'Biarkan preset email kecuali Anda butuh Cetak (lebih tajam) atau Perkecil maksimal.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'Tekan Kompres semua. Berkas tetap terpisah. Tidak ada yang disambung jadi satu buku.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'Terenkripsi atau rusak dilewati. Ringkasan menjumlahkan byte yang dihemat dari yang berhasil.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'Unduh ZIP bila paling tidak satu berhasil. Hanya satu PDF? Gunakan Kompres PDF.',
	tool_batch_compress_pdfs_for_email_how_title: 'Cara mengompres tumpukan untuk email',
	tool_batch_compress_pdfs_for_email_preset_label: 'Preset bersama',
	tool_batch_compress_pdfs_for_email_rules_body:
		'Setiap PDF diraster menjadi halaman JPEG lalu disusun ulang. Keluaran selalu ZIP berisi PDF terpisah.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'Email adalah bawaan: skala sekitar 1.0 dan JPEG sekitar 0.55. Cetak lebih lembut. Maksimal memperkecil lebih jauh.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'Terenkripsi, rusak, atau kehabisan memori hanya melewati baris itu. Nama ganda di ZIP menjadi nama (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'Berkas teks saja mungkin hampir tidak mengecil. Itu wajar; tabel tetap melaporkan ukuran.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'File tetap di perangkat dan tidak diunggah ke server.',
	tool_batch_compress_pdfs_for_email_rules_title: 'Yang perlu diharapkan',
	tool_batch_compress_pdfs_for_email_sample: 'Muat contoh',
	tool_batch_compress_pdfs_for_email_status_compressing: 'Mengompres tiap PDF untuk email…',
	tool_batch_compress_pdfs_for_email_status_done: 'Tumpukan selesai — cek tabel, lalu unduh ZIP.',
	tool_batch_compress_pdfs_for_email_status_ok: 'Dikompres',
	tool_batch_compress_pdfs_for_email_status_skip: 'Dilewati',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} siap · {skip} dilewati · dihemat {saved}',
	tool_batch_compress_pdfs_for_email_title: 'Kompres PDF untuk email sekaligus',
	tool_batch_compress_pdfs_for_email_usecase_1: 'Tumpukan penawaran yang bersama-sama menembus batas kotak 25 MB.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'Kirim struk pindaian sebagai lampiran terpisah, bukan satu buku.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'Perkecil beberapa PDF sebelum email tanpa menggabungkannya.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'Cocok untuk ini',
	tool_batch_compress_pdfs_for_email_warn_large: 'Ada berkas lebih dari 40 MB — tab ini bisa kehabisan memori di baris itu.',
};

export default id;
