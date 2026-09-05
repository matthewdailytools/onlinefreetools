/**
 * i18n 工具分片（compress-pdf / id）。按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_compress_pdf_article:
    'Perkecil ukuran PDF di browser dengan menggambar ulang tiap halaman sebagai JPEG lalu membangun ulang dokumen—file tetap di perangkat, tanpa unggah ke server. Ini kompresi terbatas yang jujur, bukan re-encode cloud.',
  tool_compress_pdf_choose_file: 'Pilih PDF',
  tool_compress_pdf_clear: 'Hapus',
  tool_compress_pdf_compress: 'Kompres',
  tool_compress_pdf_desc:
    'Kompres PDF di browser untuk mengecilkan file—tetap di perangkat, tanpa unggah ke server.',
  tool_compress_pdf_description:
    'Kompres ukuran PDF di browser dan lihat byte sebelum/sesudah—tidak ada unggah ke server. Langkah: buka PDF, pilih Sedang atau Rendah, kompres, lalu unduh. Contoh: sampel dua halaman dengan gambar turun dari ~180 KB ke ~90 KB pada Sedang. PDF teks saja mungkin hampir tidak berubah. File terenkripsi gagal dengan pesan jelas. Berbeda dari Atur halaman (urut ulang) dan Gabung (gabung file).',
  tool_compress_pdf_download: 'Unduh',
  tool_compress_pdf_drop_hint: 'Atau jatuhkan PDF di sini. Proses tetap di tab ini.',
  tool_compress_pdf_empty: 'Tambahkan PDF untuk dikompres.',
  tool_compress_pdf_err_compress: 'Kompresi gagal. Periksa file dan coba lagi.',
  tool_compress_pdf_err_encrypted: 'PDF ini tampak dilindungi sandi. Buka kuncinya dulu.',
  tool_compress_pdf_err_load: 'PDF tidak bisa dibaca (rusak atau tidak didukung). Coba file lain.',
  tool_compress_pdf_example:
    'Sampel memuat PDF dua halaman dengan blok warna dan JPEG tertanam, menjalankan kompresi Sedang, menampilkan ukuran sebelum/sesudah dengan persen hemat, dan mengaktifkan unduh compressed.pdf.',
  tool_compress_pdf_example_title: 'Perkecil ukuran file PDF',
  tool_compress_pdf_faq_a1:
    'Tidak. pdf.js dan pustaka PDF berjalan di tab Anda (pustaka mungkin dimuat dari CDN). PDF tidak diunggah ke server kami.',
  tool_compress_pdf_faq_a2:
    'Alat ini meraster setiap halaman ke JPEG lalu membangun ulang PDF. PDF berisi teks atau sudah optimal mungkin hampir tidak mengecil. Bukan re-kompresi cloud untuk aliran tertanam.',
  tool_compress_pdf_faq_a3:
    'Tidak. Halaman digambar ulang sebagai gambar di browser—tanpa langkah cloud dan byte Anda tidak keluar perangkat.',
  tool_compress_pdf_faq_a4: 'PDF bersandi biasanya gagal di sini. Hapus sandi dulu, lalu kompres.',
  tool_compress_pdf_faq_a5:
    'Sedang menjaga detail lebih (skala 1.2, JPEG ~72%). Rendah lebih kecil tapi lebih lembut (skala 1.0, JPEG ~55%). Pilih sesuai batas email vs keterbacaan.',
  tool_compress_pdf_faq_q1: 'Apakah PDF saya diunggah?',
  tool_compress_pdf_faq_q2: 'Kenapa hampir tidak mengecil?',
  tool_compress_pdf_faq_q3: 'Apakah ini re-encode cloud?',
  tool_compress_pdf_faq_q4: 'Bagaimana PDF terenkripsi?',
  tool_compress_pdf_faq_q5: 'Preset kualitas mana?',
  tool_compress_pdf_how_body:
    'Pilih PDF, pilih Sedang atau Rendah, klik Kompres lalu Unduh. Tiap halaman disimpan sebagai JPEG dalam PDF baru. Statistik menampilkan ukuran awal, baru, dan persen perubahan. Pustaka dimuat saat pertama kali dipakai.',
  tool_compress_pdf_how_item_1: "Pilih masukan dengan “Pilih PDF”",
  tool_compress_pdf_how_item_2: "Atur opsi lalu klik “Kompres”",
  tool_compress_pdf_how_item_3: "Periksa pratinjau, jumlah halaman, atau status",
  tool_compress_pdf_how_item_4: "Klik “Unduh” untuk menyimpan hasil",
  tool_compress_pdf_how_title: 'Cara kerja',
  tool_compress_pdf_pages_label: 'Halaman',
  tool_compress_pdf_quality_label: 'Kualitas',
  tool_compress_pdf_quality_low: 'Rendah — file lebih kecil',
  tool_compress_pdf_quality_med: 'Sedang — seimbang',
  tool_compress_pdf_rules_body:
    'Cara preset JPEG raster, statistik sebelum/sesudah, privasi, dan kegagalan saat kompres di browser (tanpa unggah ke server).',
  tool_compress_pdf_rules_item_1:
    'Mesin: pdf.js menggambar halaman ke canvas; pustaka PDF menyematkan JPEG ke PDF baru—file tidak lewat server.',
  tool_compress_pdf_rules_item_2:
    'Preset: Sedang (skala 1.2, JPEG ~72%) vs Rendah (skala 1.0, JPEG ~55%). Preset lebih rendah = file lebih kecil tapi lebih lembut.',
  tool_compress_pdf_rules_item_3:
    'Statistik: byte asli, terkompres, dan persen perubahan. Hemat di bawah 5% memicu catatan «hampir tidak berubah».',
  tool_compress_pdf_rules_item_4:
    'Batas: PDF terenkripsi/rusak gagal dengan pesan jelas; file sangat besar (>~25 MB) bisa lambat; PDF teks saja mungkin sedikit manfaat.',
  tool_compress_pdf_rules_title: 'Aturan yang diharapkan',
  tool_compress_pdf_sample: 'Muat contoh',
  tool_compress_pdf_stats_tpl: '{from} → {to} · hemat {pct}%',
  tool_compress_pdf_status_done: 'Selesai — klik Unduh untuk menyimpan compressed.pdf.',
  tool_compress_pdf_status_working: 'Mengompres PDF…',
  tool_compress_pdf_title: 'Perkecil ukuran file PDF',
  tool_compress_pdf_usecase_1: 'Kantor: kecilkan scan sebelum batas lampiran email.',
  tool_compress_pdf_usecase_2: 'Pelajar: perkecil PDF berisi foto untuk formulir unggah.',
  tool_compress_pdf_usecase_3: 'Pemilik situs: ringankan PDF marketing untuk dibagikan jika kualitas raster cukup.',
  tool_compress_pdf_usecases_title: 'Cocok untuk',
  tool_compress_pdf_warn_large: 'File lebih dari ~25 MB—kompresi bisa lambat atau gagal di beberapa browser.',
  tool_compress_pdf_warn_little: 'Hampir tidak berubah—PDF teks atau sudah terkompresi mungkin tidak cocok untuk JPEG raster.',
  tool_compress_pdf_warn_pdflib: 'Pustaka PDF gagal dimuat. Periksa jaringan dan coba lagi.',
  tool_compress_pdf_warn_pdfjs: 'Perender PDF gagal dimuat. Periksa jaringan dan coba lagi.',
};
export default id;
