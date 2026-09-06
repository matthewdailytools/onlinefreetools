/**
 * i18n tool shard (pdf-page-to-image-sizes / id). Ditulis ulang untuk pencarian Indonesia.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'Pilih satu halaman PDF dan ekspor sebagai ZIP JPEG siap sosial — persegi 1080, OG 1200×630, HD 1280×720, vertikal 1080×1920. perender halaman render sekali; Canvas fit contain ke setiap preset dengan pinggir putih bila perlu.',
  tool_pdf_page_to_image_sizes_choose_file: 'Pilih PDF',
  tool_pdf_page_to_image_sizes_clear: 'Hapus',
  tool_pdf_page_to_image_sizes_desc:
    'Ekspor satu halaman PDF sebagai paket JPEG multi-ukuran di perangkat — ZIP; tanpa unggah ke server.',
  tool_pdf_page_to_image_sizes_description:
    'Ubah satu halaman PDF menjadi paket JPEG multi-ukuran di browser — file tetap di perangkat dan tidak diunggah ke server. Pilih PDF, isi nomor halaman (default 1), klik Ekspor, lalu Unduh ZIP berisi page-N-WxH.jpg. Contoh: sampul demo mengekspor empat preset (1080², 1200×630, 1280×720, 1080×1920). PDF terenkripsi atau rusak menampilkan error jelas.',
  tool_pdf_page_to_image_sizes_download: 'Unduh',
  tool_pdf_page_to_image_sizes_drop_hint: 'Atau jatuhkan PDF di sini. Proses di tab ini.',
  tool_pdf_page_to_image_sizes_empty: 'Pilih file PDF dulu.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'Nomor halaman di luar jangkauan. Periksa total halaman.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'PDF ini tampak dilindungi sandi. Buka kuncinya dulu.',
  tool_pdf_page_to_image_sizes_err_export: 'Ekspor gagal. Periksa file dan nomor halaman.',
  tool_pdf_page_to_image_sizes_err_fflate: 'Pustaka ZIP gagal dimuat. Periksa jaringan.',
  tool_pdf_page_to_image_sizes_err_load: 'PDF tidak terbaca (rusak atau tidak didukung). Coba file lain.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'Renderer PDF gagal dimuat. Periksa jaringan.',
  tool_pdf_page_to_image_sizes_example:
    'Sampel membuat PDF satu halaman, mengekspor halaman 1 ke empat preset JPEG, dan mengaktifkan Unduh page-1-sizes.zip.',
  tool_pdf_page_to_image_sizes_example_title: 'Contoh',
  tool_pdf_page_to_image_sizes_export: 'Ekspor',
  tool_pdf_page_to_image_sizes_faq_a1:
    'Tidak. perender halaman, pustaka PDF, dan pustaka ZIP berjalan di tab Anda (skrip bisa dari situs ini). PDF tidak diunggah ke server kami.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF ke JPG mengekspor setiap halaman dengan rasio asli. Alat ini memilih satu halaman dan menyesuaikannya ke ukuran platform tetap (contain, tengah, pinggir putih).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (persegi Instagram), 1200×630 (pratinjau Open Graph / Facebook), 1280×720 (HD landscape), 1080×1920 (story / vertikal).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'Halaman diskalakan agar muat penuh tanpa crop. Ruang kosong diisi putih agar JPEG rapi.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'File di atas ~25 MB bisa lambat atau gagal di beberapa browser. Halaman rumit memakai lebih banyak memori.',
  tool_pdf_page_to_image_sizes_faq_q1: 'Apakah PDF diunggah?',
  tool_pdf_page_to_image_sizes_faq_q2: 'Bedanya dengan PDF ke JPG?',
  tool_pdf_page_to_image_sizes_faq_q3: 'Ukuran apa saja yang disertakan?',
  tool_pdf_page_to_image_sizes_faq_q4: 'Mengapa ada ruang putih di sekitar gambar?',
  tool_pdf_page_to_image_sizes_faq_q5: 'Ada batas ukuran file?',
  tool_pdf_page_to_image_sizes_how_body:
    'Pilih PDF, masukkan nomor halaman (mulai 1), klik Ekspor lalu Unduh. Satu render, fit ke tiap preset, lalu ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'Cara kerja',
  tool_pdf_page_to_image_sizes_page_label: 'Nomor halaman',
  tool_pdf_page_to_image_sizes_pages_label: 'Halaman',
  tool_pdf_page_to_image_sizes_rules_body:
    'Ukuran preset, perilaku contain, JPEG, penamaan ZIP, privasi dan kegagalan.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Preset: 1080×1080 (instagram-square), 1200×630 (og-facebook), 1280×720 (hd-landscape), 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'Render halaman terpilih sekali skala 2×, lalu drawImage contain di tengah; JPEG kualitas 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'Nama ZIP: page-{N}-{W}x{H}.jpg. Arsip: page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'Privasi & batas: byte tetap di tab; PDF terenkripsi/rusak gagal jelas; >~25 MB bisa lambat.',
  tool_pdf_page_to_image_sizes_rules_title: 'Aturan yang perlu diketahui',
  tool_pdf_page_to_image_sizes_sample: 'Muat contoh',
  tool_pdf_page_to_image_sizes_stats_tpl: 'Halaman {page} · {n} ukuran · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'Selesai — klik Unduh untuk simpan ZIP.',
  tool_pdf_page_to_image_sizes_status_exporting: 'Merender halaman dan membuat paket ukuran…',
  tool_pdf_page_to_image_sizes_title: 'Halaman PDF ke banyak ukuran — paket ekspor multiplatform',
  tool_pdf_page_to_image_sizes_usecase_1: 'Sosmed: ubah poster PDF jadi persegi IG, OG, dan vertikal dalam satu ZIP.',
  tool_pdf_page_to_image_sizes_usecase_2: 'Pemilik situs: ekspor slide cover 1200×630 untuk preview link tanpa crop manual.',
  tool_pdf_page_to_image_sizes_usecase_3: 'Pelajar: simpan satu slide kuliah ukuran ramah ponsel.',
  tool_pdf_page_to_image_sizes_usecases_title: 'Cocok untuk',
  tool_pdf_page_to_image_sizes_warn_large: 'File lebih dari ~25 MB — ekspor bisa lambat atau gagal.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'Pustaka PDF gagal dimuat. Periksa jaringan.',
};
export default id;
