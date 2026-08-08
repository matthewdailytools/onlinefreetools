/**
 * i18n tool shard (image-merge / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_image_merge_article: 'Kolase multi-gambar lokal dengan tata letak, jarak, latar, fit kisi, format, dan preset ukuran.',
  tool_image_merge_bg_label: 'Latar',
  tool_image_merge_choose_files: 'Tambah gambar',
  tool_image_merge_clear: 'Bersihkan',
  tool_image_merge_cols_label: 'Kolom',
  tool_image_merge_description:
    'Satukan foto menjadi kolase atau gambar panjang di browser. Langkah: tambah gambar, pilih tata horizontal/vertikal/kisi, atur jarak & latar, gabung, unduh JPEG/WebP/PNG. Contoh: tiga blok sejajar, latar putih, jarak 8 px → satu WebP — file tidak meninggalkan perangkat; preset ukuran opsional untuk unggahan umum.',
  tool_image_merge_download: 'Unduh',
  tool_image_merge_drop_hint: 'Atau jatuhkan dua JPEG, PNG, atau WebP ke sini. Penggabungan di tab ini.',
  tool_image_merge_empty: 'Tambahkan minimal satu gambar dulu.',
  tool_image_merge_err_decode: 'Browser tidak bisa decode salah satu file. Coba JPEG, PNG, atau WebP.',
  tool_image_merge_err_encode: 'Tidak bisa mengekspor hasil gabungan. Coba layout lebih kecil atau format lain.',
  tool_image_merge_example:
    'Muat sampel tiga warna, Horizontal, jarak 8 px, latar putih, WebP 0,90, preset Tidak ada, lalu gabung. Harus dapat strip ~728×180 px. Coba Kisi 3 kolom untuk satu baris sel sama.',
  tool_image_merge_example_title: 'Contoh',
  tool_image_merge_faq_a1: 'Tidak. Decode, tata, dan ekspor di browser. Cek tab Network — tidak ada POST gambar.',
  tool_image_merge_faq_a2:
    'Horizontal menyamakan tinggi dan melebar; vertikal menyamakan lebar dan memanjang. Kisi pakai sel tetap dengan muat penuh atau isi crop.',
  tool_image_merge_faq_a3: 'Tidak. Hanya ukuran keluaran umum. Aturan platform berubah; cek app tempat Anda posting.',
  tool_image_merge_faq_a4: 'Hanya bingkai pertama yang didecode dan digambar. Animasi tidak ikut di output.',
  tool_image_merge_faq_a5:
    'Sisi kanvas di atas ~8192 px atau sumber terlalu besar bisa melebihi memori browser. Kurangi jumlah, kolom kisi, atau crop dulu.',
  tool_image_merge_faq_q1: 'Apakah foto saya diunggah?',
  tool_image_merge_faq_q2: 'Bedanya horizontal dan vertikal?',
  tool_image_merge_faq_q3: 'Apakah preset 1080/1200 menjamin lolos Instagram/Facebook?',
  tool_image_merge_faq_q4: 'Bagaimana dengan GIF animasi?',
  tool_image_merge_faq_q5: 'Kenapa kolase besar gagal?',
  tool_image_merge_fit_contain: 'Muat penuh',
  tool_image_merge_fit_cover: 'Isi crop',
  tool_image_merge_fit_label: 'Muat sel',
  tool_image_merge_format_jpeg: 'JPEG',
  tool_image_merge_format_label: 'Format keluaran',
  tool_image_merge_format_png: 'PNG',
  tool_image_merge_format_webp: 'WebP',
  tool_image_merge_gap_label: 'Jarak (px)',
  tool_image_merge_how_body:
    'Tambah dua gambar atau lebih, urutkan bila perlu, pilih tata letak, jarak, dan latar, lalu gabung. Halaman membuat kanvas lokal, menggambar tiap foto berurutan, bisa men-skala hasil ke ukuran kotak atau pratinjau tautan umum, lalu unduh — tanpa unggah.',
  tool_image_merge_how_title: 'Cara kerja',
  tool_image_merge_layout_grid: 'Kisi',
  tool_image_merge_layout_horizontal: 'Horizontal',
  tool_image_merge_layout_label: 'Tata letak',
  tool_image_merge_layout_vertical: 'Vertikal',
  tool_image_merge_merge: 'Gabung',
  tool_image_merge_move_down: 'Turun',
  tool_image_merge_move_up: 'Naik',
  tool_image_merge_need_two: 'Butuh minimal dua gambar untuk digabung.',
  tool_image_merge_preset_fb: '1200×630 (pratinjau tautan umum)',
  tool_image_merge_preset_ig: '1080×1080 (kotak umum)',
  tool_image_merge_preset_label: 'Preset ukuran',
  tool_image_merge_preset_none: 'Tidak ada',
  tool_image_merge_preview_label: 'Pratinjau gabungan',
  tool_image_merge_quality_label: 'Kualitas',
  tool_image_merge_remove: 'Hapus',
  tool_image_merge_rules_body:
    'Ukuran kanvas mengikuti rumus di bawah. Di kisi, sel berbagi lebar & tinggi; muat penuh beri pinggir, isi crop memotong.',
  tool_image_merge_rules_item_1:
    'Horizontal: tinggi = maks sumber; tiap gambar diskala ke tinggi itu; lebar = jumlah lebar diskala + (n−1)×jarak.',
  tool_image_merge_rules_item_2:
    'Vertikal: lebar = maks sumber; tiap gambar diskala ke lebar itu; tinggi = jumlah tinggi diskala + (n−1)×jarak.',
  tool_image_merge_rules_item_3:
    'Kisi: 2–4 kolom; baris = ceil(n/kolom); sel = lebar maks × tinggi maks; jarak antar sel; muat penuh atau isi crop di tiap sel.',
  tool_image_merge_rules_item_4:
    'Preset men-skala kolase jadi 1080×1080 atau 1200×630 dengan warna latar Anda (ukuran umum, bukan jaminan platform). Latar diisi sebelum gambar digambar.',
  tool_image_merge_rules_title: 'Aturan tata letak',
  tool_image_merge_sample: 'Muat contoh',
  tool_image_merge_stats_tpl: '{w}×{h} · {mime} · {bytes}',
  tool_image_merge_status_done: 'Selesai — pratinjau di bawah; klik Unduh untuk simpan.',
  tool_image_merge_status_merging: 'Menggabungkan gambar…',
  tool_image_merge_title: 'Gabung gambar — satukan foto jadi kolase',
  tool_image_merge_usecase_1: 'Sebelum/sesudah: dua foto berdampingan untuk review atau progres fitness.',
  tool_image_merge_usecase_2: 'Langkah tutorial: tumpuk screenshot vertikal jadi satu gambar panjang.',
  tool_image_merge_usecase_3: 'Sudut produk atau storyboard kisi: lalu kompres jika filenya berat.',
  tool_image_merge_usecases_title: 'Cocok untuk',
  tool_image_merge_warn_animation: 'GIF animasi: hanya bingkai pertama yang digabung.',
  tool_image_merge_warn_edge: 'Sisi kanvas melebihi ~8192 px — beberapa browser bisa gagal atau kehabisan memori.',
  tool_image_merge_warn_large: 'File besar (>25 MB) — decode bisa lambat.',
};
export default id;
