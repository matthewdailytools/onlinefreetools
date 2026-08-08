/**
 * i18n tool shard (image-optimizer / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_image_optimizer_article:
    'Optimizer gambar lokal WASM: pilihan codec, kualitas/upaya, batas sisi terpanjang opsional, bandingkan slider, dan peringatan jujur soal AVIF lambat.',
  tool_image_optimizer_avif_slow: 'AVIF bisa lama pada foto besar — Anda bisa membatalkan.',
  tool_image_optimizer_cancel: 'Batal',
  tool_image_optimizer_cancelled: 'Dibatalkan.',
  tool_image_optimizer_choose_file: 'Pilih gambar',
  tool_image_optimizer_clear: 'Bersihkan',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'Codec / keluaran',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'Optimalkan gambar untuk web di browser dengan MozJPEG, WebP, AVIF, atau OxiPNG. Langkah: pilih foto, muat mesin, pilih codec dan pengaturan, bandingkan sebelum/sesudah dengan slider, lalu unduh. Contoh: ubah JPEG hero besar jadi WebP lebih ringan — tetap di perangkat setelah mesin dimuat.',
  tool_image_optimizer_download: 'Unduh',
  tool_image_optimizer_drop_hint: 'Atau jatuhkan JPEG, PNG, atau WebP di sini. Setelah mesin dimuat, optimasi tetap di tab ini.',
  tool_image_optimizer_effort_label: 'Upaya / kecepatan',
  tool_image_optimizer_empty: 'Pilih gambar dulu.',
  tool_image_optimizer_engine_failed: 'Gagal memuat mesin. Periksa koneksi dan coba lagi.',
  tool_image_optimizer_engine_loading: 'Memuat mesin…',
  tool_image_optimizer_engine_needed: 'Muat mesin optimasi sebelum encode.',
  tool_image_optimizer_engine_ready: 'Mesin siap — pilih codec lalu optimalkan.',
  tool_image_optimizer_err_decode: 'Tidak bisa mendekode. Coba JPEG, PNG, atau WebP.',
  tool_image_optimizer_err_encode: 'Encode gagal. Coba codec lain, upaya lebih rendah, atau gambar lebih kecil.',
  tool_image_optimizer_example:
    'JPEG HP yang sama (~3–4 MB): MozJPEG sering lebih kecil dari JPEG kasual browser; WebP biasanya lebih hemat lagi dengan tampilan mirip; AVIF bisa lebih kecil lagi tapi butuh hitungan detik di frame besar. Angka bersifat perkiraan — percaya slider pada berkas Anda.',
  tool_image_optimizer_example_title: 'Contoh',
  tool_image_optimizer_faq_a1:
    'Kalau yang utama tinggal ganti tipe (termasuk latar JPEG untuk transparansi). Pakai optimizer ini bila ukuran dan kontrol codec lebih penting daripada tukar format cepat.',
  tool_image_optimizer_faq_a2:
    'Tidak. Setelah mesin dimuat, decode dan encode tetap di tab ini. Cek Network bahwa gambar tidak di-POST.',
  tool_image_optimizer_faq_a3:
    'Kompresor adalah pass cepat ukuran/kualitas (bagus untuk target KB). Halaman ini memuat mesin agar Anda bisa memilih MozJPEG, WebP, AVIF, atau OxiPNG dan membandingkan dengan slider.',
  tool_image_optimizer_faq_a4:
    'Codec berukuran besar. Kami menunggu klik agar layar pertama tetap ringan — diunduh hanya saat Anda butuh optimasi tingkat codec.',
  tool_image_optimizer_faq_a5:
    'Encode AVIF berat di CPU, terutama foto besar. Kami tampilkan progres dan izinkan batal, bukan berpura-pura instan.',
  tool_image_optimizer_faq_a6:
    'Input animasi jadi still frame pertama. Re-encode biasanya menghapus EXIF — periksa dulu dengan alat EXIF jika perlu.',
  tool_image_optimizer_faq_q1: 'Kapan pakai konverter format?',
  tool_image_optimizer_faq_q2: 'Apakah berkas keluar dari browser?',
  tool_image_optimizer_faq_q3: 'Bedanya dengan kompresor gambar?',
  tool_image_optimizer_faq_q4: 'Mengapa harus muat mesin dulu?',
  tool_image_optimizer_faq_q5: 'Mengapa AVIF lambat?',
  tool_image_optimizer_faq_q6: 'Bagaimana dengan animasi dan EXIF?',
  tool_image_optimizer_how_body:
    'Pilih foto, muat mesin sekali, pilih MozJPEG, WebP, AVIF, atau OxiPNG, atur kualitas atau upaya, opsional batasi sisi terpanjang, lalu geser untuk membandingkan. Encode di tab ini. Jika hanya butuh perkecil cepat tanpa kontrol codec, pakai kompresor ringan.',
  tool_image_optimizer_how_title: 'Cara kerja',
  tool_image_optimizer_load_engine: 'Muat mesin',
  tool_image_optimizer_max_edge_label: 'Sisi maks',
  tool_image_optimizer_optimize: 'Optimalkan',
  tool_image_optimizer_optimizing: 'Mengoptimalkan…',
  tool_image_optimizer_preview_after: 'Sesudah',
  tool_image_optimizer_preview_before: 'Sebelum',
  tool_image_optimizer_quality_label: 'Kualitas',
  tool_image_optimizer_ratio_tpl: '{from} → {to} ({pct}% lebih kecil)',
  tool_image_optimizer_resize_on: 'Batasi sisi terpanjang',
  tool_image_optimizer_rules_body:
    'Tiap codec menukar ukuran, tampilan, transparansi, dan waktu. Baca dulu sebelum mengejar berkas paling kecil.',
  tool_image_optimizer_rules_item_1: 'MozJPEG: JPEG lossy, biasanya lebih kecil dari JPEG biasa browser — cocok jika masih butuh .jpg.',
  tool_image_optimizer_rules_item_2:
    'WebP: foto lebih kecil dengan tampilan mirip; mendukung transparansi. Default bagus untuk banyak situs.',
  tool_image_optimizer_rules_item_3: 'AVIF: sering paling kecil secara lossy, tapi lebih lambat — progres dan batal memang diharapkan.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG: perkecil PNG lossless. Foto tetap besar; cocok untuk UI tajam ber-alfa. Re-encode biasanya menghapus EXIF; byte tidak keluar dari tab.',
  tool_image_optimizer_rules_title: 'Yang perlu diingat',
  tool_image_optimizer_sample: 'Muat contoh',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} ms',
  tool_image_optimizer_status_done: 'Selesai — cek slider dan ukuran, lalu unduh.',
  tool_image_optimizer_title: 'Optimasi gambar — WebP, AVIF & MozJPEG di perangkat',
  tool_image_optimizer_usecase_1: 'Kirim gambar hero atau produk sebagai WebP/AVIF setelah cek tampilan lewat slider.',
  tool_image_optimizer_usecase_2: 'Tetap kirim JPEG, tapi pakai MozJPEG saat JPEG bawaan browser masih terlalu berat.',
  tool_image_optimizer_usecase_3: 'Perkecil PNG UI transparan dengan OxiPNG atau WebP hampir lossless sebelum diserahkan.',
  tool_image_optimizer_usecases_title: 'Cocok untuk',
  tool_image_optimizer_warn_animation: 'Animasi: hanya frame pertama yang dioptimalkan.',
  tool_image_optimizer_warn_edge: 'Dimensi sangat besar (>8192 px) — expect lambat; batasi sisi terpanjang.',
  tool_image_optimizer_warn_large: 'Berkas besar (>25 MB) — bisa lambat atau kehabisan memori.',
};
export default id;
