/**
 * i18n tool shard (rotate-pdf / id). Ditulis ulang untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° berlawanan arah jarum jam',
  tool_rotate_pdf_angle_90cw: '90° searah jarum jam',
  tool_rotate_pdf_angle_label: 'Rotasi',
  tool_rotate_pdf_article:
    'Luruskan halaman PDF miring atau terbalik di browser dengan pustaka PDF. Putar semua atau rentang—file tetap di perangkat, tanpa unggah ke server.',
  tool_rotate_pdf_choose_file: 'Pilih PDF',
  tool_rotate_pdf_clear: 'Hapus',
  tool_rotate_pdf_desc:
    'Perbaiki orientasi PDF di perangkat Anda—semua halaman atau rentang; tidak diunggah ke server.',
  tool_rotate_pdf_description:
    'Putar halaman PDF di browser untuk memperbaiki campuran landscape/portrait—tidak ada yang diunggah ke server. Langkah: pilih PDF, semua halaman atau rentang seperti 1-3,5, pilih 90° searah jarum jam, 180°, atau 90° berlawanan, putar lalu unduh. Contoh: sampel dua halaman memutar semua 90° searah jarum jam dan mengaktifkan Unduh rotated.pdf. File terenkripsi gagal dengan pesan jelas.',
  tool_rotate_pdf_download: 'Unduh',
  tool_rotate_pdf_drop_hint: 'Atau jatuhkan PDF di sini. Pemrosesan tetap di tab ini.',
  tool_rotate_pdf_empty: 'Pilih file PDF dulu.',
  tool_rotate_pdf_err_encrypted: 'PDF ini tampak dilindungi kata sandi. Buka kuncinya dulu, lalu coba lagi.',
  tool_rotate_pdf_err_load: 'Tidak bisa membaca PDF (rusak atau tidak didukung). Coba file lain.',
  tool_rotate_pdf_err_range: 'Halaman tidak valid atau di luar rentang. Gunakan rentang dari 1, mis. 1-3,5.',
  tool_rotate_pdf_err_rotate: 'Rotasi gagal. Periksa file dan rentang, lalu coba lagi.',
  tool_rotate_pdf_example:
    'Sampel membuat PDF dua halaman, memutar semua 90° searah jarum jam, dan mengaktifkan Unduh rotated.pdf.',
  tool_rotate_pdf_example_title: 'Contoh',
  tool_rotate_pdf_faq_a1:
    'Tidak. pustaka PDF berjalan di tab Anda (skrip mungkin dimuat dari CDN). PDF tidak diunggah ke server kami.',
  tool_rotate_pdf_faq_a2: 'Ya—file unduhan menyimpan orientasi baru. Buka di penampil sebelum dibagikan.',
  tool_rotate_pdf_faq_a3: 'Halaman dari 1: 1-3,5 berarti halaman 1–3 dan 5. Spasi opsional. Kosong atau di luar rentang gagal.',
  tool_rotate_pdf_faq_a4: 'PDF berpassword biasanya tidak bisa dibuka di sini. Hapus password dengan alat tepercaya lalu putar.',
  tool_rotate_pdf_faq_q1: 'Apakah PDF saya diunggah?',
  tool_rotate_pdf_faq_q2: 'Apakah rotasi mengubah file permanen?',
  tool_rotate_pdf_faq_q3: 'Bagaimana rentang halaman bekerja?',
  tool_rotate_pdf_faq_q4: 'Bagaimana dengan PDF terenkripsi?',
  tool_rotate_pdf_how_body:
    'Pilih PDF, semua halaman atau rentang, pilih sudut, klik Putar lalu Unduh. Rotasi ditambahkan ke sudut halaman saat ini. Semua di tab ini setelah pustaka dimuat—file tidak diunggah ke server.',
  tool_rotate_pdf_how_title: 'Cara kerja',
  tool_rotate_pdf_mode_all: 'Semua halaman',
  tool_rotate_pdf_mode_label: 'Halaman untuk diputar',
  tool_rotate_pdf_mode_ranges: 'Rentang kustom',
  tool_rotate_pdf_pages_label: 'Halaman dalam file',
  tool_rotate_pdf_ranges_hint: 'Contoh: 1-3,5 (dari 1)',
  tool_rotate_pdf_ranges_label: 'Rentang halaman',
  tool_rotate_pdf_rotate: 'Putar',
  tool_rotate_pdf_rules_body: 'Sudut, rotasi kumulatif, sintaks rentang, privasi, dan kegagalan.',
  tool_rotate_pdf_rules_item_1: 'Sudut: 90° searah jarum jam, 180°, atau 90° berlawanan (270°). Ditambahkan ke rotasi halaman.',
  tool_rotate_pdf_rules_item_2: 'Halaman: semua atau rentang dari 1 seperti 1-3,5 (sintaks sama dengan Pisah PDF).',
  tool_rotate_pdf_rules_item_3: 'Keluaran: satu PDF dengan halaman terpilih diorientasi ulang; yang lain tidak berubah.',
  tool_rotate_pdf_rules_item_4: 'Privasi & batas: byte tetap di tab; terenkripsi/rusak gagal jelas; file besar bisa lambat.',
  tool_rotate_pdf_rules_title: 'Aturan yang diharapkan',
  tool_rotate_pdf_sample: 'Muat contoh',
  tool_rotate_pdf_stats_tpl: '{n} halaman diputar · {bytes}',
  tool_rotate_pdf_status_done: 'Selesai — klik Unduh untuk menyimpan rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'Memutar PDF…',
  tool_rotate_pdf_title: 'Putar PDF — perbaiki orientasi di browser',
  tool_rotate_pdf_usecase_1: 'Kantor: luruskan scan miring sebelum cetak atau kirim email.',
  tool_rotate_pdf_usecase_2: 'Pelajar: perbaiki foto slide HP dengan orientasi campuran.',
  tool_rotate_pdf_usecase_3: 'Pemilik situs: betulkan satu halaman salah tanpa scan ulang semua.',
  tool_rotate_pdf_usecases_title: 'Cocok untuk',
  tool_rotate_pdf_warn_large: 'File lebih dari ~25 MB — rotasi bisa lambat atau gagal di beberapa browser.',
  tool_rotate_pdf_warn_pdflib: 'Library PDF gagal dimuat. Periksa jaringan dan coba lagi.',
};
export default id;
