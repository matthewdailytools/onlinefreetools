/**
 * i18n tool shard (archive-extractor / id).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
  tool_archive_extractor_article:
    'Buka arsip ZIP, TAR, dan TAR.GZ di browser, lihat pohon file, pratinjau teks atau gambar umum, lalu ekspor konten yang didukung sebagai ZIP bersih. Arsip tetap di perangkat Anda dan tidak diunggah ke server.',
  tool_archive_extractor_choose_file: 'Pilih arsip',
  tool_archive_extractor_clear: 'Bersihkan',
  tool_archive_extractor_desc:
    'Ekstrak arsip online untuk membuka ZIP, TAR, dan TAR.GZ di browser, melihat file, dan ekspor ZIP tanpa unggah ke server.',
  tool_archive_extractor_description:
    'Gunakan ekstrak arsip online ini untuk membuka file kompresi di browser: pilih ZIP, TAR, atau TAR.GZ, lihat pohon file, pratinjau teks atau gambar, unduh satu file, atau ekspor konten yang didukung sebagai ZIP bersih. File tetap di perangkat dan tidak diunggah ke server. Contoh sample-archive.tar.gz menampilkan README.txt, src/index.js, dan assets/logo.png dengan jalur aman.',
  tool_archive_extractor_download_all: 'Ekspor ZIP',
  tool_archive_extractor_download_file: 'Unduh file',
  tool_archive_extractor_drop_hint:
    'Lepas satu arsip di sini. ZIP, TAR, dan TAR.GZ berjalan sekarang; RAR, 7Z, dan ISO menampilkan catatan dukungan.',
  tool_archive_extractor_empty: 'Pilih arsip terlebih dahulu.',
  tool_archive_extractor_engine_badge: 'catatan dukungan',
  tool_archive_extractor_err_archive:
    'Arsip ini tidak dapat dibaca. File mungkin rusak, terenkripsi, terbagi volume, atau memakai metode kompresi yang belum didukung.',
  tool_archive_extractor_err_engine:
    'RAR, 7Z, dan ISO memerlukan mesin multi-format yang lebih berat dan belum disertakan di versi ini. ZIP, TAR, dan TAR.GZ tetap berjalan di browser.',
  tool_archive_extractor_err_fflate: 'Mesin arsip gagal dimuat. Periksa jaringan lalu coba lagi.',
  tool_archive_extractor_err_no_file: 'Belum ada file hasil ekstrak yang dipilih.',
  tool_archive_extractor_err_unsupported:
    'Jenis file ini belum didukung di sini. Coba ZIP, TAR, atau TAR.GZ, atau gunakan alat desktop untuk format ini.',
  tool_archive_extractor_example:
    'Contoh bawaan sample-archive.tar.gz dibuka sebagai arsip nyata dengan tiga entri: README.txt, src/index.js, dan assets/logo.png. Halaman menampilkan pohon, mempratinjau README.txt, dan dapat mengekspor konten yang didukung sebagai extracted-archive.zip.',
  tool_archive_extractor_example_title: 'Contoh',
  tool_archive_extractor_exported_all: 'File dikemas ke ZIP baru dengan jalur aman.',
  tool_archive_extractor_faq_a1:
    'Tidak. Arsip dibaca di tab browser dan byte hasil ekstrak tetap di perangkat Anda. Skrip pembantu dapat dimuat dari CDN, tetapi file Anda tidak diunggah ke server kami.',
  tool_archive_extractor_faq_a2:
    'Versi ini menjalankan ZIP, TAR, TAR.GZ, dan TGZ. RAR, 7Z, dan ISO ditampilkan sebagai format dengan catatan dukungan sampai mesin multi-format yang lebih berat diaktifkan.',
  tool_archive_extractor_faq_a3:
    'Arsip berkata sandi mengharuskan Anda memasukkan sandi dan masih bisa gagal jika format atau enkripsinya belum didukung. Alat ini tidak membobol, memulihkan, atau menebak sandi.',
  tool_archive_extractor_faq_a4:
    'Jalur absolut, segmen ../, nama duplikat, atau karakter tidak aman akan diganti nama atau diblokir sebelum ekspor. Target symlink tidak ditulis sebagai tautan.',
  tool_archive_extractor_faq_a5:
    'Arsip besar bisa lambat atau kehabisan memori di browser, terutama di ponsel. Halaman memberi peringatan saat jumlah file, ukuran setelah ekstrak, atau rasio ekspansi tampak berisiko.',
  tool_archive_extractor_faq_a6:
    'Ekspor ZIP berarti file yang berhasil diekstrak dan didukung dikemas ulang dengan jalur bersih. Ini bukan janji untuk mempertahankan semua fitur arsip asli.',
  tool_archive_extractor_faq_q1: 'Apakah arsip saya diunggah?',
  tool_archive_extractor_faq_q2: 'Format arsip apa yang berjalan?',
  tool_archive_extractor_faq_q3: 'Bisakah membuka RAR atau 7Z dengan sandi?',
  tool_archive_extractor_faq_q4: 'Apa yang terjadi pada jalur tidak aman atau symlink?',
  tool_archive_extractor_faq_q5: 'Bagaimana menangani arsip sangat besar?',
  tool_archive_extractor_faq_q6: 'Apakah RAR ke ZIP atau 7Z ke ZIP adalah konversi asli?',
  tool_archive_extractor_file_count_label: 'File',
  tool_archive_extractor_format_label: 'Format',
  tool_archive_extractor_how_body:
    'Pilih atau lepaskan satu arsip. Halaman mendeteksi ZIP, TAR, atau TAR.GZ, membuat daftar file aman, dan mempratinjau entri teks atau gambar kecil. Pilih baris untuk mengunduh satu file, atau ekspor file yang didukung sebagai ZIP baru.',
  tool_archive_extractor_how_title: 'Cara kerja',
  tool_archive_extractor_load_engine: 'Muat mesin multi-format',
  tool_archive_extractor_load_sample: 'Muat contoh',
  tool_archive_extractor_no_preview:
    'Pratinjau tidak tersedia untuk jenis file ini. Anda tetap dapat mengunduh file.',
  tool_archive_extractor_preview_title: 'Pratinjau',
  tool_archive_extractor_rules_body:
    'Ekstraksi arsip membutuhkan aturan jelas untuk dukungan format, keamanan jalur, pratinjau, dan ekspor ZIP.',
  tool_archive_extractor_rules_item_1:
    'ZIP membaca direktori pusat. TAR.GZ dibuka dua langkah: dekompresi GZIP, lalu baca header TAR.',
  tool_archive_extractor_rules_item_2:
    'RAR, 7Z, dan ISO memerlukan mesin multi-format yang lebih berat; halaman tidak menganggap jalur itu aktif sebelum mesin dimuat.',
  tool_archive_extractor_rules_item_3:
    'Keamanan jalur: slash awal, huruf drive, ../, nama duplikat, dan karakter tidak aman dibersihkan sebelum ekspor.',
  tool_archive_extractor_rules_item_4:
    'Pratinjau: teks kecil, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP, dan SVG dapat dilihat; file lain hanya menampilkan metadata.',
  tool_archive_extractor_rules_item_5:
    'Batas: arsip terenkripsi, terbagi, rusak, solid, atau mengembang tidak wajar bisa gagal atau memerlukan alat desktop.',
  tool_archive_extractor_rules_title: 'Aturan yang perlu diketahui',
  tool_archive_extractor_selected_label: 'Dipilih',
  tool_archive_extractor_size_label: 'Ukuran ekstrak',
  tool_archive_extractor_status_done: 'Arsip terbuka — pilih file atau ekspor ZIP.',
  tool_archive_extractor_status_reading: 'Membaca arsip...',
  tool_archive_extractor_title: 'Ekstrak arsip online — buka file kompresi di browser',
  tool_archive_extractor_total_size_label: 'Ukuran setelah ekstrak',
  tool_archive_extractor_usecase_1:
    'Pengembangan: buka rilis kode .tar.gz, periksa README dan file src, lalu unduh hanya yang diperlukan.',
  tool_archive_extractor_usecase_2:
    'Operasional: tinjau paket aset ZIP, RAR, atau 7Z dari vendor dan ekspor file yang didukung sebagai ZIP bersih untuk tim.',
  tool_archive_extractor_usecase_3:
    'Perangkat terkelola: periksa materi kelas atau lampiran di Chromebook tanpa memasang software desktop.',
  tool_archive_extractor_usecases_title: 'Cocok untuk',
  tool_archive_extractor_warn_dangerous:
    'Beberapa jalur diganti nama atau dilewati demi keamanan sebelum ekspor.',
  tool_archive_extractor_warn_large:
    'Peringatan arsip besar: file ini mungkin lambat atau memakai banyak memori di browser.',
};

export default id;
