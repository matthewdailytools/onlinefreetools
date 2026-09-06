import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
  tool_unzip_file_article:
    'Buka ZIP di browser, lihat pohon file, pratinjau teks atau gambar, lalu unduh file yang dibutuhkan. Arsip tetap di perangkat dan tidak diunggah ke server.',
  tool_unzip_file_choose_file: 'Pilih ZIP',
  tool_unzip_file_clear: 'Bersihkan',
  tool_unzip_file_desc:
    'Ekstrak ZIP online, pratinjau isi, dan unduh file di browser tanpa unggah ke server.',
  tool_unzip_file_description:
    'Ekstrak file ZIP online di browser: pilih atau jatuhkan ZIP, lihat pohon file, pratinjau teks atau gambar, lalu unduh satu file atau ekspor semuanya. File tetap di perangkat Anda dan tidak diunggah ke server. Contoh project-files.zip menampilkan readme.txt, assets/logo.png, dan docs/notes.md dengan jalur aman.',
  tool_unzip_file_download_all: 'Ekspor semua',
  tool_unzip_file_download_file: 'Unduh file',
  tool_unzip_file_drop_hint: 'Jatuhkan satu file .zip di sini. Proses tetap di tab ini.',
  tool_unzip_file_empty: 'Pilih file ZIP terlebih dahulu.',
  tool_unzip_file_err_archive: 'ZIP tidak dapat dibaca. File mungkin rusak, terenkripsi, atau bukan arsip ZIP.',
  tool_unzip_file_err_fflate: 'Mesin ZIP gagal dimuat. Periksa jaringan lalu coba lagi.',
  tool_unzip_file_err_no_file: 'Belum ada file hasil ekstrak yang dipilih.',
  tool_unzip_file_example:
    'Contoh project-files.zip mengekstrak tiga entri aman: readme.txt, assets/logo.png, dan docs/notes.md. Halaman menampilkan pohon file, mempratinjau readme.txt, dan mengaktifkan Unduh file serta Ekspor semua.',
  tool_unzip_file_example_title: 'Contoh',
  tool_unzip_file_exported_all: 'File dikemas ke ZIP baru dengan jalur aman.',
  tool_unzip_file_faq_a1:
    'Tidak. ZIP dibaca di tab browser dan byte hasil ekstrak tetap di perangkat Anda. Skrip mesin ZIP mungkin dimuat dari situs ini, tetapi arsip Anda tidak diunggah ke server kami.',
  tool_unzip_file_faq_a2:
    'Halaman ini fokus pada ZIP. RAR, 7Z, ISO, dan TAR.GZ membutuhkan mesin arsip multi-format yang lebih berat dan sebaiknya ditangani oleh extractor arsip terpisah ketika dukungannya tersedia.',
  tool_unzip_file_faq_a3:
    'ZIP dengan kata sandi dapat gagal jika dukungan yang kompatibel belum ditambahkan. Alat ini tidak membobol atau memulihkan kata sandi.',
  tool_unzip_file_faq_a4:
    'Jalur absolut, segmen ../, nama kosong, atau nama duplikat akan diganti nama atau diblokir sebelum ekspor. Daftar hasil memberi tahu saat jalur berubah.',
  tool_unzip_file_faq_a5:
    'ZIP besar bisa lambat atau kehabisan memori di browser, terutama di ponsel. Halaman memberi peringatan jika jumlah file, ukuran hasil ekstrak, atau rasio ekspansi terlihat berisiko.',
  tool_unzip_file_faq_q1: 'Apakah file ZIP saya diunggah?',
  tool_unzip_file_faq_q2: 'Apakah bisa mengekstrak RAR, 7Z, atau TAR.GZ?',
  tool_unzip_file_faq_q3: 'Bisa membuka ZIP berkata sandi?',
  tool_unzip_file_faq_q4: 'Apa yang terjadi pada jalur tidak aman?',
  tool_unzip_file_faq_q5: 'Bagaimana menangani ZIP yang sangat besar?',
  tool_unzip_file_file_count_label: 'File',
  tool_unzip_file_how_body:
    'Pilih atau jatuhkan satu ZIP. Halaman membaca arsip, menormalkan jalur, membuat daftar file, dan menampilkan pratinjau aman untuk teks dan gambar. Pilih baris apa pun untuk pratinjau dan unduh, atau ekspor semua sebagai ZIP baru dengan jalur yang dibersihkan.',
  tool_unzip_file_how_title: 'Cara kerja',
  tool_unzip_file_load_sample: 'Muat contoh',
  tool_unzip_file_no_preview:
    'Pratinjau tidak tersedia untuk jenis file ini. File tetap bisa diunduh.',
  tool_unzip_file_preview_title: 'Pratinjau',
  tool_unzip_file_rules_body:
    'Ekstraksi ZIP di browser memerlukan aturan yang jelas untuk jalur, pratinjau, mode unduh, dan kasus gagal.',
  tool_unzip_file_rules_item_1:
    'Keamanan jalur: garis miring awal, huruf drive, segmen ../, dan nama duplikat dibersihkan sebelum ekspor.',
  tool_unzip_file_rules_item_2:
    'Pratinjau: teks kecil, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP, dan SVG dapat dipratinjau; file lain hanya menampilkan metadata.',
  tool_unzip_file_rules_item_3:
    'Unduh: file terpilih diunduh langsung; Ekspor semua membuat ZIP baru dari file yang sudah disanitasi.',
  tool_unzip_file_rules_item_4:
    'Batas: arsip terenkripsi, terpecah, rusak, atau mengembang tidak wajar dapat gagal atau memerlukan konfirmasi di versi mendatang.',
  tool_unzip_file_rules_title: 'Aturan yang perlu diketahui',
  tool_unzip_file_selected_label: 'Dipilih',
  tool_unzip_file_size_label: 'Ukuran hasil ekstrak',
  tool_unzip_file_status_done: 'ZIP diekstrak — pilih file atau ekspor semua.',
  tool_unzip_file_status_reading: 'Membaca ZIP...',
  tool_unzip_file_title: 'Ekstrak ZIP online — lihat dan ambil file di browser',
  tool_unzip_file_total_size_label: 'Ukuran hasil ekstrak',
  tool_unzip_file_usecase_1:
    'Kantor: buka lampiran ZIP dari vendor dan unduh hanya faktur atau gambar yang dibutuhkan.',
  tool_unzip_file_usecase_2:
    'Belajar: periksa paket materi kursus di komputer terkelola atau tablet tanpa memasang aplikasi desktop.',
  tool_unzip_file_usecase_3:
    'Pengembangan: cek struktur rilis source code, lalu catat checksum ZIP asli dengan File Hash Checker.',
  tool_unzip_file_usecases_title: 'Cocok untuk',
  tool_unzip_file_warn_dangerous:
    'Beberapa jalur diganti nama demi keamanan sebelum ekspor.',
  tool_unzip_file_warn_large:
    'Peringatan arsip besar: ZIP ini bisa lambat atau memakai banyak memori di browser.',
};

export default id;
