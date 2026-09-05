/**
 * i18n tool shard (pdf-page-numbers / id). Ditulis ulang untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_pdf_page_numbers_add: 'Tambah nomor',
  tool_pdf_page_numbers_article:
    'Tambahkan nomor halaman ke setiap lembar PDF di browser dengan pustaka PDF. Pilih sudut atau tengah, angka awal dan margin—file tetap di perangkat, tanpa unggah ke server.',
  tool_pdf_page_numbers_choose_file: 'Pilih PDF',
  tool_pdf_page_numbers_clear: 'Hapus',
  tool_pdf_page_numbers_desc:
    'Beri nomor halaman PDF di browser—posisi dan angka awal bebas; tanpa unggah ke server, tetap di perangkat.',
  tool_pdf_page_numbers_description:
    'Tambahkan nomor halaman ke PDF di browser—tanpa unggah ke server. Langkah: buka PDF, pilih tengah bawah atau sudut, atur angka pertama (default 1), margin dan ukuran font, opsional format «Halaman N», tambah nomor, unduh. Contoh: sampel tiga halaman dengan nomor tengah bawah dari 1 dan unduh numbered.pdf. PDF terenkripsi gagal dengan pesan jelas.',
  tool_pdf_page_numbers_download: 'Unduh',
  tool_pdf_page_numbers_drop_hint: 'Atau jatuhkan PDF di sini. Proses di tab ini.',
  tool_pdf_page_numbers_empty: 'Pilih PDF dulu.',
  tool_pdf_page_numbers_err_encrypted: 'PDF ini sepertinya berpassword. Buka kuncinya lalu coba lagi.',
  tool_pdf_page_numbers_err_load: 'PDF tidak bisa dibaca (rusak atau tidak didukung). Coba file lain.',
  tool_pdf_page_numbers_err_number: 'Penomoran gagal. Periksa file dan pengaturan lalu coba lagi.',
  tool_pdf_page_numbers_example:
    'Sampel membuat PDF tiga halaman, menomori tengah bawah dari 1, dan mengaktifkan Unduh numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'Contoh',
  tool_pdf_page_numbers_faq_a1:
    'Tidak. pustaka PDF berjalan di tab Anda (skrip bisa dimuat dari CDN). PDF tidak diunggah ke server kami.',
  tool_pdf_page_numbers_faq_a2:
    'Ya—«Mulai dari» adalah angka di halaman 1 (mis. 0 untuk sampul, atau 5 setelah hapus halaman). Setiap halaman +1.',
  tool_pdf_page_numbers_faq_a3:
    'Angka saja (1, 2, 3…) atau label «Halaman N». Posisi, margin (pt), dan ukuran sama di semua halaman.',
  tool_pdf_page_numbers_faq_a4:
    'PDF berpassword biasanya tidak bisa dibuka di sini. Hapus password dengan alat tepercaya lalu nomori.',
  tool_pdf_page_numbers_faq_q1: 'Apakah PDF diunggah?',
  tool_pdf_page_numbers_faq_q2: 'Bisa mulai setelah sampul?',
  tool_pdf_page_numbers_faq_q3: 'Format dan posisi apa saja?',
  tool_pdf_page_numbers_faq_q4: 'Bagaimana PDF terenkripsi?',
  tool_pdf_page_numbers_font_size_label: 'Ukuran font (pt)',
  tool_pdf_page_numbers_format_label: 'Format',
  tool_pdf_page_numbers_format_number: 'Angka saja',
  tool_pdf_page_numbers_format_page_n: 'Halaman N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Halaman {n}',
  tool_pdf_page_numbers_how_body:
    'Pilih PDF, posisi (tengah bawah default), angka awal, margin dan ukuran, klik Tambah nomor lalu Unduh. Nomor digambar di setiap halaman. Library dimuat saat pertama dipakai.',
  tool_pdf_page_numbers_how_item_1: "Pilih masukan dengan “Pilih PDF”",
  tool_pdf_page_numbers_how_item_2: "Atur opsi lalu klik “Tambah nomor”",
  tool_pdf_page_numbers_how_item_3: "Periksa pratinjau, jumlah halaman, atau status",
  tool_pdf_page_numbers_how_item_4: "Klik “Unduh” untuk menyimpan hasil",
  tool_pdf_page_numbers_how_title: 'Cara kerja',
  tool_pdf_page_numbers_margin_label: 'Margin (pt)',
  tool_pdf_page_numbers_pages_label: 'Halaman',
  tool_pdf_page_numbers_position_bc: 'Tengah bawah',
  tool_pdf_page_numbers_position_bl: 'Kiri bawah',
  tool_pdf_page_numbers_position_br: 'Kanan bawah',
  tool_pdf_page_numbers_position_label: 'Posisi',
  tool_pdf_page_numbers_position_tc: 'Tengah atas',
  tool_pdf_page_numbers_position_tl: 'Kiri atas',
  tool_pdf_page_numbers_position_tr: 'Kanan atas',
  tool_pdf_page_numbers_rules_body:
    'Posisi nomor, nilai awal, format, privasi, dan batas kegagalan penomoran di browser.',
  tool_pdf_page_numbers_rules_item_1:
    'Posisi: tengah bawah (default), tengah atas/bawah, atau sudut. Margin dalam poin PDF (default 24 pt).',
  tool_pdf_page_numbers_rules_item_2:
    'Mulai dari: angka di halaman 1 (default 1). Setiap halaman +1—berguna setelah hapus halaman di Organize PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'Format: digit atau «Halaman N». Ukuran default 12 pt. Output PDF baru; asli tidak dikirim ke server.',
  tool_pdf_page_numbers_rules_item_4:
    'Batas: PDF terenkripsi/rusak gagal jelas; >~25 MB bisa lambat; nomor terbakar—butuh file asli untuk hapus.',
  tool_pdf_page_numbers_rules_title: 'Aturan yang perlu diharapkan',
  tool_pdf_page_numbers_sample: 'Muat contoh',
  tool_pdf_page_numbers_start_at_label: 'Mulai dari',
  tool_pdf_page_numbers_stats_tpl: '{n} halaman dinomori · {bytes}',
  tool_pdf_page_numbers_status_done: 'Selesai — klik Unduh untuk simpan numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'Menambahkan nomor halaman…',
  tool_pdf_page_numbers_title: 'Nomor Halaman PDF — tambahkan di browser',
  tool_pdf_page_numbers_usecase_1: 'Kantor: nomori laporan sebelum cetak agar mudah sebut «halaman 12».',
  tool_pdf_page_numbers_usecase_2: 'Mahasiswa: footer 1–N pada skripsi setelah gabung bab.',
  tool_pdf_page_numbers_usecase_3: 'Pemilik situs: nomori handout setelah atur ulang atau watermark.',
  tool_pdf_page_numbers_usecases_title: 'Cocok untuk',
  tool_pdf_page_numbers_warn_large: 'File lebih dari ~25 MB — penomoran bisa lambat atau gagal.',
  tool_pdf_page_numbers_warn_pdflib: 'Library PDF gagal dimuat. Periksa jaringan dan coba lagi.',
};
export default id;
