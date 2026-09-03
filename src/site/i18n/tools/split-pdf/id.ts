/**
 * i18n tool shard（split-pdf / id）. Ditulis ulang mandiri.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_split_pdf_article:
    'Pisahkan PDF menjadi file per halaman atau rentang dengan pdf-lib di klien. Beberapa keluaran diunduh sebagai ZIP lewat fflate—tanpa unggah ke server; file tetap di perangkat.',
  tool_split_pdf_choose_file: 'Pilih PDF',
  tool_split_pdf_clear: 'Hapus',
  tool_split_pdf_desc: 'Ekstrak halaman dari PDF di perangkat Anda—setiap halaman atau rentang; ZIP bila perlu; tanpa unggah ke server.',
  tool_split_pdf_description:
    'Pisahkan PDF di browser dan unduh halaman atau rentang terpisah—tanpa unggah ke server. Langkah: pilih PDF, pilih setiap halaman atau masukkan rentang seperti 1-3,5, pisah, lalu unduh. Contoh: sampel tiga halaman menjadi ZIP berisi page-1.pdf hingga page-3.pdf. Satu file keluaran diunduh sebagai PDF. File terenkripsi gagal dengan pesan jelas.',
  tool_split_pdf_download: 'Unduh',
  tool_split_pdf_drop_hint: 'Atau jatuhkan satu PDF di sini. Pemrosesan tetap di tab ini.',
  tool_split_pdf_empty: 'Pilih file PDF terlebih dahulu.',
  tool_split_pdf_err_encrypted: 'PDF ini tampak dilindungi kata sandi. Buka kuncinya dulu, lalu coba lagi.',
  tool_split_pdf_err_fflate: 'Gagal memuat pustaka ZIP. Periksa jaringan dan coba lagi.',
  tool_split_pdf_err_load: 'Tidak bisa membaca PDF (rusak atau tidak didukung). Coba file lain.',
  tool_split_pdf_err_range: 'Halaman tidak valid atau di luar jangkauan. Gunakan rentang mulai 1, misalnya 1-3,5.',
  tool_split_pdf_err_split: 'Pemisahan gagal. Periksa file dan rentang, lalu coba lagi.',
  tool_split_pdf_example:
    'Sampel membuat PDF tiga halaman, memisah tiap halaman, dan mengaktifkan Unduh untuk ZIP berisi page-1.pdf, page-2.pdf, dan page-3.pdf.',
  tool_split_pdf_example_title: 'Pisah PDF saya',
  tool_split_pdf_faq_a1:
    'Tidak. pdf-lib dan fflate berjalan di tab Anda (skrip bisa dimuat dari CDN). PDF tidak diunggah ke server kami.',
  tool_split_pdf_faq_a2:
    'Halaman mulai dari 1: 1-3,5 berarti halaman 1–3 dan 5. Spasi opsional. Nilai kosong atau di luar jangkauan gagal.',
  tool_split_pdf_faq_a3:
    'Jika hasil lebih dari satu file, Anda mendapat ZIP. Satu file keluaran diunduh sebagai PDF.',
  tool_split_pdf_faq_a4:
    'PDF berpassword biasanya gagal dibuka di sini. Hapus kata sandinya dengan cara tepercaya, lalu pisahkan.',
  tool_split_pdf_faq_a5:
    'Gabung PDF menyatukan beberapa PDF. Alat ini mengekstrak halaman dari satu PDF menjadi file terpisah.',
  tool_split_pdf_faq_q1: 'Apakah PDF saya diunggah?',
  tool_split_pdf_faq_q2: 'Bagaimana cara menulis rentang halaman?',
  tool_split_pdf_faq_q3: 'Kapan ZIP dan kapan PDF?',
  tool_split_pdf_faq_q4: 'Bagaimana dengan PDF terenkripsi?',
  tool_split_pdf_faq_q5: 'Bedanya dengan Gabung PDF?',
  tool_split_pdf_how_body:
    'Pilih satu PDF, pilih setiap halaman atau rentang, klik Pisah, lalu Unduh. Beberapa keluaran jadi ZIP; satu keluaran jadi PDF. Semuanya lokal setelah pustaka dimuat.',
  tool_split_pdf_how_title: 'Cara kerja',
  tool_split_pdf_mode_every: 'Setiap halaman (satu file per halaman)',
  tool_split_pdf_mode_label: 'Mode pemisahan',
  tool_split_pdf_mode_ranges: 'Rentang halaman kustom',
  tool_split_pdf_pages_label: 'Jumlah halaman',
  tool_split_pdf_ranges_hint: 'Contoh: 1-3,5 (mulai dari 1)',
  tool_split_pdf_ranges_label: 'Rentang halaman',
  tool_split_pdf_rules_body:
    'Rentang mulai 1, penamaan, ZIP vs PDF, privasi, dan kegagalan saat memisah lokal.',
  tool_split_pdf_rules_item_1:
    'Mode: setiap halaman → satu PDF per halaman; rentang → satu PDF per segmen dipisah koma (mis. 1-3 dan 5).',
  tool_split_pdf_rules_item_2:
    'Nama: page-N.pdf untuk satu halaman; pages-A-B.pdf untuk segmen berurutan.',
  tool_split_pdf_rules_item_3:
    'Keluaran: lebih dari satu file → ZIP lewat fflate; tepat satu → unduh PDF itu.',
  tool_split_pdf_rules_item_4:
    'Privasi & batas: byte tetap di tab; PDF terenkripsi/rusak gagal jelas; file sangat besar bisa lambat di memori.',
  tool_split_pdf_rules_title: 'Aturan yang perlu Anda tahu',
  tool_split_pdf_sample: 'Muat contoh',
  tool_split_pdf_split: 'Pisah',
  tool_split_pdf_stats_tpl: '{n} file · {bytes}',
  tool_split_pdf_status_done: 'Selesai — klik Unduh untuk menyimpan.',
  tool_split_pdf_status_splitting: 'Memisahkan PDF…',
  tool_split_pdf_title: 'Pisahkan PDF saya',
  tool_split_pdf_usecase_1: 'Kantor: ambil satu halaman bertanda tangan dari kontrak panjang.',
  tool_split_pdf_usecase_2: 'Pengajaran: pecah PDF slide menjadi handout per halaman.',
  tool_split_pdf_usecase_3: 'Ops: arsipkan setiap halaman hasil pindaian sebagai file sendiri.',
  tool_split_pdf_usecases_title: 'Cocok untuk',
  tool_split_pdf_warn_large: 'File lebih dari ~25 MB — pemisahan bisa lambat atau gagal di sebagian browser.',
  tool_split_pdf_warn_pdflib: 'Gagal memuat pustaka PDF. Periksa jaringan dan coba lagi.',
};
export default id;
