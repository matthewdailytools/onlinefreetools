/**
 * i18n tool shard (color-from-image / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_color_from_image_article: 'Palet warna dominan lokal plus rata-rata region saat klik, dengan HEX/RGB/HSL siap salin.',
  tool_color_from_image_choose_file: 'Pilih gambar',
  tool_color_from_image_clear: 'Bersihkan',
  tool_color_from_image_copied: 'Tersalin',
  tool_color_from_image_copy: 'Salin HEX',
  tool_color_from_image_count_label: 'Warna',
  tool_color_from_image_description:
    'Ambil warna dominan dan palet lengkap dari foto apa pun — atau gunakan color picker dengan klik region kecil. Langkah: pilih gambar, atur jumlah warna (2–12), ekstrak, salin HEX/RGB/HSL, atau klik pratinjau untuk rata-rata lokal. Contoh: enam warna dari foto brand lalu klik logo untuk aksen — file tetap di perangkat.',
  tool_color_from_image_drop_hint: 'Atau jatuhkan JPEG, PNG, atau WebP di sini. Ekstraksi tetap di tab ini.',
  tool_color_from_image_empty: 'Pilih gambar dulu.',
  tool_color_from_image_err_decode: 'Browser ini tidak bisa decode file itu. Coba JPEG, PNG, atau WebP.',
  tool_color_from_image_err_no_pixels: 'Tidak ada piksel opaque untuk disample — gambar mungkin sepenuhnya transparan.',
  tool_color_from_image_example:
    'Muat contoh empat blok, biarkan Warna di 6, lalu ekstrak — Anda seharusnya melihat teal, amber, hijau, krem, dan merah. Lalu klik lingkaran merah: kartu warna diambil menampilkan HEX merah dari rata-rata ~7×7 di sekitar titik itu, siap salin.',
  tool_color_from_image_example_title: 'Contoh',
  tool_color_from_image_extract: 'Ekstrak',
  tool_color_from_image_faq_a1: 'Tidak. Perhitungan palet dan sampling klik berjalan lokal. Cek tab Network — gambar tidak di-POST.',
  tool_color_from_image_faq_a2:
    'Halaman mengecilkan gambar, membuang piksel alpha rendah, membagi ruang warna dengan median-cut, merata-ratakan tiap bucket, dan mengurutkan menurut jumlah sampel.',
  tool_color_from_image_faq_a3:
    'Alat memetakan klik ke piksel sumber dan merata-ratakan warna opaque dalam kotak kecil (~7×7). Anda dapat HEX/RGB/HSL untuk region itu, terpisah dari daftar palet.',
  tool_color_from_image_faq_a4:
    'Foto dan screenshot UI berisik pada 1×1. Rata-rata region kecil lebih stabil untuk aksen CSS sambil tetap melacak tempat Anda klik.',
  tool_color_from_image_faq_a5: 'Hanya frame pertama yang digambar, dipakai untuk palet, dan tersedia untuk ambil warna dengan klik.',
  tool_color_from_image_faq_q1: 'Apakah gambar saya keluar dari browser?',
  tool_color_from_image_faq_q2: 'Bagaimana warna utama dipilih?',
  tool_color_from_image_faq_q3: 'Apa yang terjadi saat saya klik gambar?',
  tool_color_from_image_faq_q4: 'Mengapa klik bukan satu piksel?',
  tool_color_from_image_faq_q5: 'Apakah GIF animasi dianalisis penuh?',
  tool_color_from_image_how_body:
    'Pilih foto dan ekstrak palet: halaman mengecilkan salinan kerja (sisi terpanjang ~256 px), melewati piksel hampir transparan, mengelompokkan warna, dan mengurutkan menurut frekuensi. Terpisah, klik pratinjau untuk rata-rata kotak kecil di sekitar titik itu pada resolusi penuh dan salin HEX, RGB, atau HSL — tidak ada unggahan.',
  tool_color_from_image_how_title: 'Cara kerja',
  tool_color_from_image_palette_label: 'Palet',
  tool_color_from_image_pct_tpl: '{pct}% sampel',
  tool_color_from_image_pick_hint: 'Klik gambar untuk rata-rata region kecil di sekitar titik itu (sekitar 7×7 piksel sumber).',
  tool_color_from_image_pick_label: 'Warna diambil',
  tool_color_from_image_pick_transparent: 'Titik itu tidak punya piksel opaque — klik tempat lain.',
  tool_color_from_image_pick_xy_tpl: 'Sekitar ({x}, {y}) · rata-rata {size}×{size}',
  tool_color_from_image_preview_label: 'Sumber — klik untuk ambil warna',
  tool_color_from_image_rules_body:
    'Ekstraksi palet dan ambil warna dengan klik memakai gambar yang sama tapi menjawab pertanyaan berbeda. Gunakan daftar ini jika warna terasa aneh.',
  tool_color_from_image_rules_item_1:
    'Sampling palet memakai bitmap diperkecil (tepi maks ~256 px) agar foto besar tetap responsif. Detail halus bisa menyatu ke hue terdekat.',
  tool_color_from_image_rules_item_2:
    'Piksel dengan alpha di bawah 128 diabaikan untuk palet dan rata-rata klik. Titik sepenuhnya transparan menampilkan pesan jelas.',
  tool_color_from_image_rules_item_3:
    'Anda minta 2–12 warna palet; gambar datar bisa mengembalikan lebih sedikit. Warna diurutkan menurut porsi sampel.',
  tool_color_from_image_rules_item_4:
    'Klik merata-ratakan piksel opaque dalam jendela ~7×7 di sekitar klik pada koordinat sumber (bukan hanya pratinjau kecil). Ini sample region, bukan pipet satu piksel lab.',
  tool_color_from_image_rules_item_5: 'Privasi: decode, perhitungan palet, dan sampling klik berjalan lokal di tab ini.',
  tool_color_from_image_rules_title: 'Yang perlu diharapkan',
  tool_color_from_image_sample: 'Muat contoh',
  tool_color_from_image_status_done: 'Selesai — salin swatch atau klik gambar untuk ambil region.',
  tool_color_from_image_status_extracting: 'Mengekstrak palet…',
  tool_color_from_image_status_picked: 'Diambil — klik HEX/RGB/HSL untuk menyalin.',
  tool_color_from_image_title: 'Ekstrak warna gambar — palet & klik ambil',
  tool_color_from_image_usecase_1: 'Foto brand: ambil palet, lalu klik logo atau tombol untuk aksen spesifik.',
  tool_color_from_image_usecase_2: 'Screenshot UI: lihat palet antarmuka, lalu klik chip atau ikon untuk warna region itu.',
  tool_color_from_image_usecase_3: 'Ide gradien: ambil dua aksen dari palet atau dengan klik, lalu buka kalkulator gradien.',
  tool_color_from_image_usecases_title: 'Cocok untuk',
  tool_color_from_image_warn_animation: 'File animasi: hanya frame pertama yang disample.',
  tool_color_from_image_warn_large: 'File besar (>25 MB) — sampling bisa lambat.',
};
export default id;
