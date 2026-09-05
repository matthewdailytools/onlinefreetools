/**
 * i18n tool shard (pdf-watermark / id). Ditulis ulang untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_pdf_watermark_apply: 'Terapkan',
  tool_pdf_watermark_article:
    'Stempel DRAFT, RAHASIA, atau teks kustom di setiap halaman PDF di browser dengan pustaka PDF. Logo PNG/JPG opsional — file tetap di perangkat, tanpa unggah ke server.',
  tool_pdf_watermark_choose_file: 'Pilih PDF',
  tool_pdf_watermark_clear: 'Hapus',
  tool_pdf_watermark_desc:
    'Stempel teks di setiap halaman PDF di browser — tanpa unggah ke server; tetap di perangkat.',
  tool_pdf_watermark_description:
    'Tambahkan watermark teks di setiap halaman PDF di browser, tanpa unggah ke server. Langkah: buka PDF, masukkan teks (mis. DRAFT), atur opasitas dan sudut, opsional logo PNG/JPG, terapkan, unduh. Contoh: sampel dua halaman dengan DRAFT di tengah, −45°, opasitas 35%; unduh watermarked.pdf. PDF terenkripsi gagal dengan pesan jelas. Beda dari Tambah watermark (foto) dan Putar PDF.',
  tool_pdf_watermark_download: 'Unduh',
  tool_pdf_watermark_drop_hint: 'Atau jatuhkan PDF di sini. Diproses di tab ini.',
  tool_pdf_watermark_empty: 'Tambahkan PDF untuk distempel.',
  tool_pdf_watermark_err_apply: 'Watermark gagal. Periksa file dan pengaturan.',
  tool_pdf_watermark_err_encrypted: 'PDF ini tampak berpassword. Buka kuncinya dulu.',
  tool_pdf_watermark_err_image: 'Gambar tidak terbaca. Gunakan PNG atau JPG.',
  tool_pdf_watermark_err_load: 'PDF tidak terbaca (rusak atau tidak didukung).',
  tool_pdf_watermark_example:
    'Sampel membuat PDF dua halaman, menerapkan DRAFT di tengah dengan opasitas 35% dan −45° di setiap halaman, lalu mengaktifkan Unduh watermarked.pdf.',
  tool_pdf_watermark_example_title: 'Contoh',
  tool_pdf_watermark_faq_a1:
    'Tidak. pustaka PDF berjalan di tab Anda (skrip mungkin dari CDN). PDF tidak diunggah ke server kami.',
  tool_pdf_watermark_faq_a2:
    'Tambah watermark menempel teks/logo pada foto. Alat ini menstempel setiap halaman dokumen PDF.',
  tool_pdf_watermark_faq_a3:
    'Tidak. Setelah unduh, watermark tertanam. Menghapus perlu file asli atau edit berat.',
  tool_pdf_watermark_faq_a4:
    'PDF berpassword biasanya tidak terbuka di sini. Hapus password dengan alat tepercaya.',
  tool_pdf_watermark_faq_a5:
    'Ya — pilih PNG atau JPG. Diskalakan ~sepertiga halaman, posisi/opasitas/rotasi sama dengan teks.',
  tool_pdf_watermark_faq_q1: 'Apakah PDF diunggah?',
  tool_pdf_watermark_faq_q2: 'Bedanya dengan watermark gambar?',
  tool_pdf_watermark_faq_q3: 'Bisa hapus watermark nanti?',
  tool_pdf_watermark_faq_q4: 'Bagaimana PDF terenkripsi?',
  tool_pdf_watermark_faq_q5: 'Bisa tambah logo?',
  tool_pdf_watermark_how_body:
    'Pilih PDF, masukkan teks, atur opasitas dan rotasi, posisi, opsional logo PNG/JPG, klik Terapkan lalu Unduh. Setiap halaman dapat lapisan yang sama.',
  tool_pdf_watermark_how_item_1: "Pilih masukan dengan “Pilih PDF”",
  tool_pdf_watermark_how_item_2: "Atur opsi lalu klik “Terapkan”",
  tool_pdf_watermark_how_item_3: "Periksa pratinjau, jumlah halaman, atau status",
  tool_pdf_watermark_how_item_4: "Klik “Unduh” untuk menyimpan hasil",
  tool_pdf_watermark_how_title: 'Cara kerja',
  tool_pdf_watermark_image_hint: 'Logo PNG/JPG opsional (posisi sama dengan teks).',
  tool_pdf_watermark_image_label: 'Watermark gambar (opsional)',
  tool_pdf_watermark_opacity_label: 'Opasitas',
  tool_pdf_watermark_pages_label: 'Halaman',
  tool_pdf_watermark_position_bl: 'Kiri bawah',
  tool_pdf_watermark_position_br: 'Kanan bawah',
  tool_pdf_watermark_position_center: 'Tengah',
  tool_pdf_watermark_position_label: 'Posisi',
  tool_pdf_watermark_position_tl: 'Kiri atas',
  tool_pdf_watermark_position_tr: 'Kanan atas',
  tool_pdf_watermark_rotation_label: 'Rotasi (derajat)',
  tool_pdf_watermark_rules_body:
    'Aturan teks/gambar, posisi, opasitas, privasi, dan kegagalan watermark di browser.',
  tool_pdf_watermark_rules_item_1:
    'Teks: stempel Helvetica di setiap halaman; sampel DRAFT tengah, opasitas 35%, −45°.',
  tool_pdf_watermark_rules_item_2:
    'Gambar: PNG/JPG opsional ~35% halaman, posisi/opasitas/rotasi sama.',
  tool_pdf_watermark_rules_item_3:
    'Posisi: tengah atau sudut; opasitas 0,1–1; rotasi −180°–180°. Output PDF baru tanpa kirim ke server.',
  tool_pdf_watermark_rules_item_4:
    'Batas: PDF terenkripsi/rusak gagal; >~25 MB mungkin lambat; penghapusan tidak didukung.',
  tool_pdf_watermark_rules_title: 'Aturan yang diharapkan',
  tool_pdf_watermark_sample: 'Muat contoh',
  tool_pdf_watermark_stats_tpl: '{pages} halaman distempel · {bytes}',
  tool_pdf_watermark_status_done: 'Selesai — klik Unduh untuk watermarked.pdf.',
  tool_pdf_watermark_status_working: 'Menerapkan watermark…',
  tool_pdf_watermark_text_label: 'Teks watermark',
  tool_pdf_watermark_title: 'Watermark PDF — stempel teks di setiap halaman di browser',
  tool_pdf_watermark_usecase_1: 'Legal/ops: RAHASIA pada draf kontrak sebelum dikirim.',
  tool_pdf_watermark_usecase_2: 'Mahasiswa: DRAFT pada bab tugas untuk umpan balik.',
  tool_pdf_watermark_usecase_3: 'Pemilik situs: logo semi-transparan di setiap halaman PDF pratinjau.',
  tool_pdf_watermark_usecases_title: 'Cocok untuk',
  tool_pdf_watermark_warn_large: 'File >~25 MB — mungkin lambat atau gagal.',
  tool_pdf_watermark_warn_pdflib: 'Library PDF gagal dimuat. Periksa jaringan.',
};
export default id;
