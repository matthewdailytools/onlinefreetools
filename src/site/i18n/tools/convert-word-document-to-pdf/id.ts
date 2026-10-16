/**
 * i18n 工具分片（convert-word-document-to-pdf / id）。
 * 印尼语检索向重写：Konversi dokumen Word ke PDF。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 印尼语文案表；键名与英文母版一一对应。 */
const id: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: ".docx menjadi PDF di tab ini. File tetap di perangkat Anda dan tidak diunggah ke server.",
  tool_convert_word_document_to_pdf_choose_file: "Pilih file Word (.docx)",
  tool_convert_word_document_to_pdf_choose_files: "Pilih berkas",
  tool_convert_word_document_to_pdf_clear: "Bersihkan",
  tool_convert_word_document_to_pdf_convert: "Konversi",
  tool_convert_word_document_to_pdf_desc: "Konversi dokumen Word ke PDF di browser: pilih .docx, baca pratinjau HTML, lalu ekspor. File tetap di perangkat dan tidak diunggah ke server.",
  tool_convert_word_document_to_pdf_description: "Ini mengubah dokumen Word yang sudah ada, bukan editor kosong. «Pilih file Word (.docx)», baca pratinjau HTML, lalu «Konversi» dan «Unduh PDF». File tetap di perangkat ini dan tidak diunggah ke server. «Muat contoh» membuat satu paragraf dan PDF satu halaman.",
  tool_convert_word_document_to_pdf_download: "Unduh PDF",
  tool_convert_word_document_to_pdf_drop_hint: "Atau jatuhkan .docx di sini. Pemrosesan tetap di tab ini.",
  tool_convert_word_document_to_pdf_empty: "Pilih file .docx terlebih dahulu.",
  tool_convert_word_document_to_pdf_err_convert: "Konversi gagal. Coba lagi dengan dokumen yang lebih sederhana.",
  tool_convert_word_document_to_pdf_err_encrypted: "File ini sepertinya terkunci kata sandi. Buka kuncinya dulu.",
  tool_convert_word_document_to_pdf_err_load: "File .docx tidak bisa dibaca.",
  tool_convert_word_document_to_pdf_err_notext: "Tidak ada teks isi yang bisa dibaca di dokumen ini.",
  tool_convert_word_document_to_pdf_err_pdfjs: "Perender PDF gagal dimuat.",
  tool_convert_word_document_to_pdf_example: "«Muat contoh» membuat .docx yang hanya berisi «Paragraf contoh Word untuk konversi.», menampilkan pratinjau HTML, lalu mengekspor PDF satu halaman.",
  tool_convert_word_document_to_pdf_example_title: "Contoh",
  tool_convert_word_document_to_pdf_faq_a1: "Tidak. Pembacaan dan ekspor PDF berjalan di tab ini; skrip dimuat dari situs ini. Dokumen tidak diunggah ke server kami.",
  tool_convert_word_document_to_pdf_faq_a2: "Jalurnya .docx, lalu pratinjau HTML, lalu PDF. Header, bentuk mengambang, dan sebagian font menjadi rata. Jika markup sudah ada, pakai «Konversi HTML ke PDF».",
  tool_convert_word_document_to_pdf_faq_a3: "Tidak. Simpan dulu sebagai .docx. Halaman ini hanya menerima paket Office Open XML dan tidak melakukan OCR pada pindaian.",
  tool_convert_word_document_to_pdf_faq_a4: "Halaman ini mulai dari file Word yang sudah ada. «Tulis Dokumen PDF Online» adalah editor kosong.",
  tool_convert_word_document_to_pdf_faq_a5: ".docx yang besar bisa lambat. Coba dulu di browser desktop.",
  tool_convert_word_document_to_pdf_faq_q1: "Apakah file Word keluar dari perangkat ini?",
  tool_convert_word_document_to_pdf_faq_q2: "Mengapa PDF terlihat lebih sederhana daripada di Word?",
  tool_convert_word_document_to_pdf_faq_q3: "Bisakah file .doc lama dikonversi?",
  tool_convert_word_document_to_pdf_faq_q4: "Apa bedanya dengan menulis PDF di browser?",
  tool_convert_word_document_to_pdf_faq_q5: "Apakah file besar didukung?",
  tool_convert_word_document_to_pdf_how_body: "Ubah dokumen Word ke PDF lewat «Pilih file Word (.docx)» atau «Muat contoh», baca bagian «Pratinjau HTML», lalu «Konversi» dan «Unduh PDF». File tidak meninggalkan tab ini.",
  tool_convert_word_document_to_pdf_how_item_1: "Klik «Pilih file Word (.docx)» atau «Muat contoh».",
  tool_convert_word_document_to_pdf_how_item_2: "Baca bagian «Pratinjau HTML» dari teks isi.",
  tool_convert_word_document_to_pdf_how_item_3: "Klik «Konversi» untuk menyusun PDF dari pratinjau itu.",
  tool_convert_word_document_to_pdf_how_item_4: "Klik «Unduh PDF» saat status menampilkan «Selesai.».",
  tool_convert_word_document_to_pdf_how_title: "Cara konversi dokumen Word ke PDF",
  tool_convert_word_document_to_pdf_preview_label: "Pratinjau HTML",
  tool_convert_word_document_to_pdf_rules_body: "Hanya .docx yang diterima. Tata letak, header, dan gaya yang rumit bisa menjadi rata di PDF.",
  tool_convert_word_document_to_pdf_rules_item_1: "Tugasnya: mengubah dokumen Word menjadi PDF yang bisa dicetak di browser.",
  tool_convert_word_document_to_pdf_rules_item_2: "Hanya di perangkat Anda; file tidak diunggah ke server.",
  tool_convert_word_document_to_pdf_rules_item_3: ".doc lama dan pindaian yang hanya gambar tidak kena OCR.",
  tool_convert_word_document_to_pdf_rules_item_4: "Paket berpassword atau rusak gagal dengan pesan yang bisa dibaca.",
  tool_convert_word_document_to_pdf_rules_item_5: "Header, bentuk mengambang, dan sebagian font menjadi rata karena jalur dari .docx ke HTML lalu ke PDF.",
  tool_convert_word_document_to_pdf_rules_title: "Apa yang tetap utuh setelah konversi",
  tool_convert_word_document_to_pdf_sample: "Muat contoh",
  tool_convert_word_document_to_pdf_sample_paragraph: "Paragraf contoh Word untuk konversi.",
  tool_convert_word_document_to_pdf_status_done: "Selesai.",
  tool_convert_word_document_to_pdf_status_working: "Sedang mengonversi…",
  tool_convert_word_document_to_pdf_title: "Konversi dokumen Word ke PDF",
  tool_convert_word_document_to_pdf_usecase_1: "Surat pribadi yang harus tetap di perangkat",
  tool_convert_word_document_to_pdf_usecase_2: "Tugas singkat: cek pratinjau sebelum cetak",
  tool_convert_word_document_to_pdf_usecase_3: "Kantor tanpa Word desktop, kirim draf sebagai PDF",
  tool_convert_word_document_to_pdf_usecases_title: "Situasi yang cocok",
  tool_convert_word_document_to_pdf_warn_large: "File besar: bisa lambat.",
};
export default id;
