/**
 * i18n tool shard (compare-two-pdfs / id).
 * Bahasa Indonesia: bandingkan lapisan teks dua PDF, sorot tambahan/hapusan,
 * unduh diff HTML; tanpa OCR dan tanpa unggah ke server. Kunci dan urutan sama dengan en.ts.
 */
import type { SiteLangDict } from '../../../types';

/** Kamus Bahasa Indonesia untuk alat „Bandingkan Dua PDF“. */
const id: SiteLangDict = {
	tool_compare_two_pdfs_title: "Bandingkan Dua PDF — Sorot Perbedaan Teks",
	tool_compare_two_pdfs_desc: "Bandingkan teks dua PDF di browser dan unduh diff HTML — file tetap di perangkat, tanpa unggah ke server.",
	tool_compare_two_pdfs_description:
		"Bandingkan dua PDF dan sorot perbedaan teksnya: kata tambahan hijau, kata yang dihapus merah. Langkah: pilih PDF A dan PDF B, klik Bandingkan, lalu Unduh diff HTML bila perlu. Contoh: “tiga puluh hari” dibanding “enam puluh hari” akan disorot. Hanya lapisan teks: hasil pindaian perlu OCR dulu.",
	tool_compare_two_pdfs_file_a: "PDF A (lama / asli)",
	tool_compare_two_pdfs_file_b: "PDF B (baru / revisi)",
	tool_compare_two_pdfs_choose_file: "Pilih PDF — atau seret ke kotak ini",
	tool_compare_two_pdfs_choose_files: "Pilih file",
	tool_compare_two_pdfs_drop_hint: "Atau letakkan PDF di sini. Pemrosesan tetap di tab ini.",
	tool_compare_two_pdfs_compare: "Bandingkan",
	tool_compare_two_pdfs_download: "Unduh diff HTML",
	tool_compare_two_pdfs_sample: "Muat contoh",
	tool_compare_two_pdfs_clear: "Hapus",
	tool_compare_two_pdfs_advanced: "Pengaturan lanjutan (opsional)",
	tool_compare_two_pdfs_ignore_case: "Abaikan huruf besar/kecil",
	tool_compare_two_pdfs_ignore_space: "Gabungkan spasi dan baris baru yang berulang",
	tool_compare_two_pdfs_advanced_hint: "Berguna jika satu ekspor memotong baris secara berbeda, padahal isinya sama.",
	tool_compare_two_pdfs_result_label: "Perbedaan teks (A → B)",
	tool_compare_two_pdfs_legend_added: "Ditambahkan di B",
	tool_compare_two_pdfs_legend_removed: "Dihapus dari A",
	tool_compare_two_pdfs_empty: "Pilih PDF A dan PDF B terlebih dahulu.",
	tool_compare_two_pdfs_err_convert: "Perbandingan gagal dibuat. Muat ulang halaman lalu coba lagi.",
	tool_compare_two_pdfs_err_encrypted: "PDF ini tampaknya dilindungi kata sandi. Buka kuncinya, lalu bandingkan lagi.",
	tool_compare_two_pdfs_err_load: "Salah satu file PDF tidak bisa dibaca.",
	tool_compare_two_pdfs_err_notext: "Lapisan teks yang bisa diseleksi tidak ditemukan. PDF hasil pindaian yang hanya berisi gambar perlu OCR sebelum bisa dibandingkan.",
	tool_compare_two_pdfs_err_pdfjs: "Penampil PDF gagal dimuat.",
	tool_compare_two_pdfs_status_working: "Mengambil teks dan membandingkan…",
	tool_compare_two_pdfs_status_done: "Selesai — hijau berarti ditambahkan di B, merah berarti dihapus dari A. Unduhan menyimpan file HTML.",
	tool_compare_two_pdfs_status_identical: "Tidak ada perbedaan teks dengan opsi saat ini.",
	tool_compare_two_pdfs_summary_tpl: "{added} ditambahkan · {removed} dihapus",
	tool_compare_two_pdfs_pages_tpl: "halaman A={a}, B={b}",
	tool_compare_two_pdfs_warn_large: "File besar — perbandingan mungkin lambat.",
	tool_compare_two_pdfs_how_title: "Cara membandingkan dua PDF",
	tool_compare_two_pdfs_how_body:
		"Alat ini membaca lapisan teks setiap PDF dengan PDF.js, lalu membandingkannya per kata. Tata letak, font, dan gambar tidak diperiksa — hanya teks yang bisa diseleksi.",
	tool_compare_two_pdfs_how_item_1: "Pilih PDF A (asli) dan PDF B (revisi), atau seret masing-masing file ke kotaknya.",
	tool_compare_two_pdfs_how_item_2: "Jika perlu, buka Pengaturan lanjutan untuk mengabaikan huruf besar/kecil atau menggabungkan spasi.",
	tool_compare_two_pdfs_how_item_3: "Klik Bandingkan dan tunggu bilah progres selagi kedua file ditampilkan dan teksnya diambil.",
	tool_compare_two_pdfs_how_item_4: "Baca sorotan hijau/merah, cek jumlah tambahan dan hapusan, lalu klik Unduh diff HTML jika Anda butuh file.",
	tool_compare_two_pdfs_why_choose_title: "Kenapa memakai alat Bandingkan Dua PDF ini",
	tool_compare_two_pdfs_why_choose_item_1: "Pratinjau kedua PDF berdampingan, ditambah satu perbandingan teks per kata dalam sekali proses.",
	tool_compare_two_pdfs_why_choose_item_2: "Opsi abaikan huruf besar/kecil dan gabungkan spasi untuk ekspor yang hanya berbeda pemotongan baris.",
	tool_compare_two_pdfs_why_choose_item_3: "Menghitung blok yang ditambahkan dan dihapus, serta menampilkan jumlah halaman tiap file.",
	tool_compare_two_pdfs_why_choose_item_4: "Pesan kesalahan yang jelas untuk file berkata sandi dan PDF pindaian tanpa lapisan teks.",
	tool_compare_two_pdfs_why_choose_item_5: "Berjalan di browser: PDF tetap di perangkat, tanpa unggah ke server.",
	tool_compare_two_pdfs_rules_title: "Aturan dan batasan",
	tool_compare_two_pdfs_rules_body: "Perbandingan hanya pada lapisan teks — bukan tampilan visual atau per piksel.",
	tool_compare_two_pdfs_rules_item_1: "Teks yang bisa diseleksi dari A dan B diambil dengan PDF.js, lalu disorot dengan jsdiff.",
	tool_compare_two_pdfs_rules_item_2: "Semua tetap di tab ini; memilih file tidak mengunggahnya ke server.",
	tool_compare_two_pdfs_rules_item_3: "Tanpa OCR. Pindaian berupa gambar harus di-OCR di tempat lain lebih dulu.",
	tool_compare_two_pdfs_rules_item_4: "PDF berkata sandi atau rusak berhenti dengan pesan kesalahan yang mudah dipahami.",
	tool_compare_two_pdfs_rules_item_5: "Unduhan menyimpan teks bersorot dalam format HTML — bukan PDF beranotasi.",
	tool_compare_two_pdfs_example_title: "Contoh",
	tool_compare_two_pdfs_example:
		"Muat contoh membuat dua kontrak satu halaman. A berbunyi “Pembayaran jatuh tempo dalam tiga puluh hari.” dan B berbunyi “Pembayaran jatuh tempo dalam enam puluh hari.” Bandingkan menyorot “tiga” sebagai dihapus dan “enam” sebagai ditambahkan. Jika Abaikan huruf besar/kecil aktif, “Hari” dan “hari” dianggap sama.",
	tool_compare_two_pdfs_usecases_title: "Kapan alat ini berguna",
	tool_compare_two_pdfs_usecase_1: "Mencocokkan PDF kontrak yang sudah direvisi dengan versi yang Anda kirim minggu lalu.",
	tool_compare_two_pdfs_usecase_2: "Menemukan perubahan kalimat di PDF kebijakan atau syarat dan ketentuan sebelum tanda tangan.",
	tool_compare_two_pdfs_usecase_3: "Membandingkan dua ekspor teks saat yang penting hanya kata-katanya, bukan font atau margin.",
	tool_compare_two_pdfs_usecase_4: "Menjaga draf rahasia tetap di perangkat — tidak ada yang diunggah untuk perbandingan.",
	tool_compare_two_pdfs_faq_q1: "Apakah PDF saya diunggah ke server?",
	tool_compare_two_pdfs_faq_a1:
		"Tidak. Tampilan dan pengambilan teks berjalan di tab browser Anda. Skrip pustaka dimuat dari situs ini sendiri; file Anda tetap di perangkat dan tidak dikirim ke server kami.",
	tool_compare_two_pdfs_faq_q2: "Kenapa PDF hasil pindaian muncul “lapisan teks tidak ditemukan”?",
	tool_compare_two_pdfs_faq_a2:
		"Pindaian adalah gambar tanpa lapisan teks, dan halaman ini tidak melakukan OCR. Jalankan OCR di alat lain, simpan sebagai PDF yang bisa dicari, lalu bandingkan di sini.",
	tool_compare_two_pdfs_faq_q3: "Bagaimana dengan PDF yang dilindungi kata sandi?",
	tool_compare_two_pdfs_faq_a3:
		"File terenkripsi tidak bisa dibuka di sini. Buka kuncinya dulu di aplikasi pembaca PDF, simpan salinan tanpa kata sandi, lalu pilih salinan itu.",
	tool_compare_two_pdfs_faq_q4: "Apa bedanya dengan perbandingan teks biasa?",
	tool_compare_two_pdfs_faq_a4:
		"Di sini Anda memasukkan PDF, melihat pratinjau halaman, dan mendapat jumlah halaman. Alat perbandingan teks ditujukan untuk teks yang ditempel atau file .txt tanpa membaca PDF.",
	tool_compare_two_pdfs_faq_q5: "Apakah tata letak, gambar, atau tanda tangan ikut dibandingkan?",
	tool_compare_two_pdfs_faq_a5:
		"Tidak. Hanya teks yang bisa diseleksi yang dibandingkan. Logo yang bergeser atau font berbeda dengan kata yang sama akan tampak identik di sini.",
	tool_compare_two_pdfs_faq_q6: "Apa yang tersimpan saat mengunduh?",
	tool_compare_two_pdfs_faq_a6:
		"File HTML dengan sorotan hijau/merah yang sama seperti di halaman — praktis untuk dikirim lewat email atau diarsipkan. Ini bukan PDF bertanda.",
	tool_compare_two_pdfs_faq_q7: "Kapan sebaiknya mengabaikan huruf besar/kecil atau spasi?",
	tool_compare_two_pdfs_faq_a7:
		"Saat satu ekspor hanya mengubah kapitalisasi atau pemotongan baris. Nyalakan opsinya jika kalimatnya sama tetapi lapisan teks mentahnya berbeda.",
	tool_compare_two_pdfs_article: "Bandingkan teks yang bisa diseleksi dari dua PDF dan unduh diff HTML per kata — tanpa unggah ke server.",
	tool_compare_two_pdfs_references: "PDF.js untuk mengambil teks; jsdiff untuk sorotan per kata.",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — penampil PDF dari Mozilla",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — pustaka perbandingan teks",
};

export default id;
