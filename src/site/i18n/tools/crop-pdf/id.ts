/**
 * i18n tool shard (crop-pdf / id). Ditulis ulang untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_crop_pdf_all_sides_label: 'Semua sisi (pt)',
  tool_crop_pdf_article:
    'Pangkas margin PDF di browser dengan pustaka PDF—seragam atau per sisi dalam poin. Bukan editor seret piksel; file tetap di perangkat.',
  tool_crop_pdf_bottom_label: 'Bawah (pt)',
  tool_crop_pdf_choose_file: 'Pilih PDF',
  tool_crop_pdf_clear: 'Hapus',
  tool_crop_pdf_crop: 'Potong',
  tool_crop_pdf_desc:
    'Pangkas margin PDF di perangkat—seragam atau per sisi (pt); tanpa unggah ke server.',
  tool_crop_pdf_description:
    'Pangkas margin PDF di browser dengan mengetatkan CropBox—tidak diunggah ke server. Atur margin atas/kanan/bawah/kiri dalam poin (default 36) atau satu nilai untuk semua sisi, lalu unduh. Contoh: sampel satu halaman memotong 36 pt tiap sisi dan mengaktifkan cropped.pdf dengan statistik ukuran. Bukan editor seret; PDF terenkripsi gagal dengan pesan jelas.',
  tool_crop_pdf_download: 'Unduh',
  tool_crop_pdf_drop_hint: 'Atau jatuhkan PDF di sini. Pemrosesan di tab ini.',
  tool_crop_pdf_empty: 'Pilih file PDF dulu.',
  tool_crop_pdf_err_crop: 'Pemotongan gagal. Periksa margin dan file, lalu coba lagi.',
  tool_crop_pdf_err_encrypted: 'PDF ini tampak dilindungi sandi. Buka kuncinya dulu sebelum memotong.',
  tool_crop_pdf_err_load: 'PDF tidak terbaca (rusak atau tidak didukung). Coba file lain.',
  tool_crop_pdf_err_margin:
    'Margin terlalu besar—lebar atau tinggi hasil potong ≤ 10 pt. Kurangi satu atau lebih sisi.',
  tool_crop_pdf_example:
    'Sampel membuat PDF satu halaman, memotong 36 pt di semua sisi, dan mengaktifkan cropped.pdf dengan statistik ukuran.',
  tool_crop_pdf_example_title: 'Contoh',
  tool_crop_pdf_faq_a1:
    'Tidak. pustaka PDF berjalan di tab Anda (skrip mungkin dimuat dari CDN). PDF tidak diunggah ke server kami.',
  tool_crop_pdf_faq_a2:
    'Alat ini mengetatkan kotak PDF dengan margin poin—bukan menyeret kotak di pratinjau seperti gambar.',
  tool_crop_pdf_faq_a3:
    'Benar. Hanya input poin; tanpa kotak bebas atau edit piksel—gunakan alat gambar jika perlu.',
  tool_crop_pdf_faq_a4:
    'PDF bersandi biasanya tidak terbuka di sini. Hapus sandi dengan alat tepercaya lalu potong.',
  tool_crop_pdf_faq_q1: 'Apakah PDF diunggah?',
  tool_crop_pdf_faq_q2: 'Bedanya dengan memotong gambar?',
  tool_crop_pdf_faq_q3: 'Apakah editor seret piksel?',
  tool_crop_pdf_faq_q4: 'Bagaimana PDF terenkripsi?',
  tool_crop_pdf_how_body:
    'Pilih PDF, atur margin poin (seragam atau per tepi), klik Potong lalu Unduh. CropBox dan MediaBox mengecil; penampil dan cetak menghormati batas baru. Semua di tab ini setelah pustaka dimuat—file tidak diunggah ke server.',
  tool_crop_pdf_how_title: 'Cara kerja',
  tool_crop_pdf_left_label: 'Kiri (pt)',
  tool_crop_pdf_margins_title: 'Margin yang dipangkas (poin)',
  tool_crop_pdf_pages_label: 'Halaman dalam file',
  tool_crop_pdf_right_label: 'Kanan (pt)',
  tool_crop_pdf_rules_body: 'Perhitungan margin, kotak PDF, batas, privasi, dan kegagalan pemotongan di browser.',
  tool_crop_pdf_rules_item_1: 'Satuan: poin PDF (pt). 72 pt ≈ 1 inci. Sampel memakai 36 pt (½ inci) tiap sisi.',
  tool_crop_pdf_rules_item_2: 'Kotak: CropBox dan MediaBox mengecil dari tiap tepi. Asal kiri-bawah (spes PDF).',
  tool_crop_pdf_rules_item_3: 'Keamanan: jika lebar/tinggi hasil ≤ 10 pt, pengaturan ditolak sebelum simpan.',
  tool_crop_pdf_rules_item_4: 'Privasi & batas: byte di tab; terenkripsi/rusak gagal jelas; file besar bisa lambat.',
  tool_crop_pdf_rules_title: 'Aturan yang perlu diketahui',
  tool_crop_pdf_sample: 'Muat contoh',
  tool_crop_pdf_stats_page_tpl: 'Halaman {n}: {ow}×{oh} pt → {nw}×{nh} pt',
  tool_crop_pdf_stats_tpl: '{pages} · {bytes}',
  tool_crop_pdf_status_cropping: 'Memotong PDF…',
  tool_crop_pdf_status_done: 'Selesai — klik Unduh untuk menyimpan cropped.pdf.',
  tool_crop_pdf_title: 'Potong PDF — pangkas margin di browser',
  tool_crop_pdf_top_label: 'Atas (pt)',
  tool_crop_pdf_uniform_hint: 'Mengubah «Semua sisi» memperbarui setiap tepi; tetap bisa sesuaikan per sisi.',
  tool_crop_pdf_usecase_1: 'Kantor: buang tepi putih scan sebelum cetak atau arsip.',
  tool_crop_pdf_usecase_2: 'Pelajar: rapatkan margin handout agar lebih banyak konten di layar.',
  tool_crop_pdf_usecase_3: 'Pemilik situs: pangkas margin sama pada flyer satu halaman.',
  tool_crop_pdf_usecases_title: 'Cocok untuk',
  tool_crop_pdf_warn_large: 'File lebih dari ~25 MB — pemotongan bisa lambat atau gagal di beberapa browser.',
  tool_crop_pdf_warn_pdflib: 'Pustaka PDF gagal dimuat. Periksa jaringan dan coba lagi.',
};
export default id;
