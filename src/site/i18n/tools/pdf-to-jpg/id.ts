/**
 * i18n tool shard (pdf-to-jpg / id). Tulis ulang independen untuk pencarian Indonesia.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'Render setiap halaman PDF ke JPEG di browser dengan perender halaman. Banyak halaman diunduh sebagai ZIP via pustaka ZIP—file tetap di perangkat.',
  tool_pdf_to_jpg_choose_file: 'Pilih PDF',
  tool_pdf_to_jpg_clear: 'Hapus',
  tool_pdf_to_jpg_convert: 'Konversi',
  tool_pdf_to_jpg_desc: 'Ubah halaman PDF jadi JPG di perangkat—ZIP jika banyak halaman; tanpa unggah ke server.',
  tool_pdf_to_jpg_description:
    'Konversi halaman PDF ke gambar JPG di browser—file tetap di perangkat dan tidak diunggah ke server. Langkah: pilih PDF, klik Konversi, lalu Unduh. Contoh: sampel dua halaman menghasilkan page-1.jpg dan page-2.jpg dalam ZIP. PDF satu halaman mengunduh satu JPG langsung. File terenkripsi atau rusak menampilkan error jelas.',
  tool_pdf_to_jpg_download: 'Unduh',
  tool_pdf_to_jpg_drop_hint: 'Atau jatuhkan PDF di sini. Proses di tab ini.',
  tool_pdf_to_jpg_empty: 'Pilih file PDF dulu.',
  tool_pdf_to_jpg_err_convert: 'Konversi gagal. Periksa file dan coba lagi.',
  tool_pdf_to_jpg_err_encrypted: 'PDF ini tampak dilindungi sandi. Buka kuncinya dulu, lalu coba lagi.',
  tool_pdf_to_jpg_err_fflate: 'Gagal memuat pustaka ZIP. Periksa jaringan dan coba lagi.',
  tool_pdf_to_jpg_err_load: 'Tidak bisa membaca PDF (rusak atau tidak didukung). Coba file lain.',
  tool_pdf_to_jpg_err_pdfjs: 'Gagal memuat perender PDF. Periksa jaringan dan coba lagi.',
  tool_pdf_to_jpg_example:
    'Sampel membuat PDF dua halaman, mengonversi tiap halaman, dan mengaktifkan Unduh ZIP berisi page-1.jpg dan page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'Ubah halaman PDF ke JPG',
  tool_pdf_to_jpg_faq_a1:
    'Tidak. perender halaman dan pustaka ZIP berjalan di tab Anda (skrip mungkin dimuat dari situs ini). PDF tidak diunggah ke server kami.',
  tool_pdf_to_jpg_faq_a2:
    'Lebih dari satu halaman → ZIP pdf-pages.zip dengan page-1.jpg, page-2.jpg, dst. Satu halaman → satu JPG langsung.',
  tool_pdf_to_jpg_faq_a3:
    'Gambar ke PDF menggabungkan foto jadi PDF multipage. Alat ini mengekspor tiap halaman PDF sebagai JPG terpisah.',
  tool_pdf_to_jpg_faq_a4:
    'Halaman dirender skala 2× agar teks lebih tajam. PDF sangat besar bisa lebih lambat.',
  tool_pdf_to_jpg_faq_a5:
    'Halaman ini hanya keluaran JPG. Gunakan konverter format gambar jika butuh PNG atau WebP dari gambar yang ada.',
  tool_pdf_to_jpg_faq_q1: 'Apakah PDF diunggah?',
  tool_pdf_to_jpg_faq_q2: 'Kapan dapat ZIP vs satu JPG?',
  tool_pdf_to_jpg_faq_q3: 'Bedanya dengan Gambar ke PDF?',
  tool_pdf_to_jpg_faq_q4: 'Mengapa JPG tajam atau buram?',
  tool_pdf_to_jpg_faq_q5: 'Bisa PNG?',
  tool_pdf_to_jpg_how_body:
    'Pilih PDF, klik Konversi lalu Unduh. Tiap halaman jadi JPG; banyak halaman dipaket ZIP. Semua di tab ini setelah pustaka dimuat—file tidak diunggah ke server.',
  tool_pdf_to_jpg_how_title: 'Cara kerja',
  tool_pdf_to_jpg_pages_label: 'Halaman',
  tool_pdf_to_jpg_rules_body: 'Skala render, keluaran JPG, ZIP vs file tunggal, privasi, dan kegagalan.',
  tool_pdf_to_jpg_rules_item_1:
    'Tiap halaman diekspor JPEG skala 2× kualitas 0.92—cocok untuk slide dan scan.',
  tool_pdf_to_jpg_rules_item_2: 'Nama: page-N.jpg untuk halaman N. Banyak halaman → pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3: 'Keluaran: 1 halaman → JPG; 2+ → ZIP via pustaka ZIP.',
  tool_pdf_to_jpg_rules_item_4:
    'Privasi & batas: byte tetap di tab; PDF terenkripsi/rusak gagal jelas; >25 MB bisa lambat.',
  tool_pdf_to_jpg_rules_title: 'Aturan yang diharapkan',
  tool_pdf_to_jpg_sample: 'Muat contoh',
  tool_pdf_to_jpg_stats_tpl: '{n} halaman · {bytes}',
  tool_pdf_to_jpg_status_converting: 'Mengonversi halaman ke JPG…',
  tool_pdf_to_jpg_status_done: 'Selesai — klik Unduh untuk simpan.',
  tool_pdf_to_jpg_title: 'Ubah halaman PDF jadi JPG',
  tool_pdf_to_jpg_usecase_1: 'Kantor: ekspor slide atau halaman tanda tangan untuk chat.',
  tool_pdf_to_jpg_usecase_2: 'Marketing: ambil thumbnail JPG dari katalog PDF.',
  tool_pdf_to_jpg_usecase_3: 'Pelajar: simpan halaman PDF sebagai gambar catatan.',
  tool_pdf_to_jpg_usecases_title: 'Cocok untuk',
  tool_pdf_to_jpg_warn_large: 'File lebih dari ~25 MB — konversi bisa lambat atau gagal di beberapa browser.',
  tool_pdf_to_jpg_warn_pdflib: 'Gagal memuat pustaka PDF. Periksa jaringan dan coba lagi.',
};
export default id;
