/**
 * i18n tool shard (image-grayscale / id).
 * Indonesian rewrite (2026-10-14): hitam putih / grayscale converter with selectable method,
 * strength slider, show-original toggle, Convert → Download, gold progress HUD, collapsed export.
 */
import type { SiteLangDict } from '../../../types';

/** Indonesian strings for the image grayscale converter (casual tone). */
const id: SiteLangDict = {
	tool_image_grayscale_title: 'Ubah Foto Jadi Hitam Putih — Konversi Gambar ke Grayscale dengan Metode Pilihan',
	tool_image_grayscale_desc: 'Ubah foto berwarna jadi hitam putih di browser, pilih metode grayscale, lalu unduh.',
	tool_image_grayscale_description:
		'Ubah foto berwarna ke grayscale (hitam putih) di browser. Langkah: pilih gambar, pilih metode — luminansi, rata-rata, lightness, atau satu kanal warna — atur kekuatan, klik ubah, lalu unduh JPEG, WebP, atau PNG.',
	tool_image_grayscale_choose_file: 'Pilih gambar',
	tool_image_grayscale_drop_hint: 'Atau jatuhkan JPEG, PNG, WebP, atau GIF di sini.',
	tool_image_grayscale_convert: 'Ubah ke hitam putih',
	tool_image_grayscale_download: 'Unduh',
	tool_image_grayscale_sample: 'Muat contoh',
	tool_image_grayscale_clear: 'Hapus',
	tool_image_grayscale_method_label: 'Metode grayscale',
	tool_image_grayscale_method_luma601: 'Luminansi — Rec.601 (disarankan)',
	tool_image_grayscale_method_luma709: 'Luminansi — Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'Rata-rata R, G, B',
	tool_image_grayscale_method_lightness: 'Lightness — (max + min) ÷ 2',
	tool_image_grayscale_method_red: 'Kanal merah saja (efek filter merah)',
	tool_image_grayscale_method_green: 'Kanal hijau saja',
	tool_image_grayscale_method_blue: 'Kanal biru saja',
	tool_image_grayscale_method_hint: 'Luminansi menjaga kecerahan seperti yang dilihat mata. Pratinjau berubah saat Anda ganti metode.',
	tool_image_grayscale_amount_label: 'Kekuatan',
	tool_image_grayscale_amount_hint: '100% = sepenuhnya hitam putih; nilai lebih rendah menyisakan sedikit warna (saturasi).',
	tool_image_grayscale_show_original: 'Tampilkan asli',
	tool_image_grayscale_advanced: 'Pengaturan lanjutan (opsional)',
	tool_image_grayscale_format_label: 'Format keluaran',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP kecil dan menjaga transparansi. PNG tanpa kehilangan. JPEG butuh warna latar.',
	tool_image_grayscale_quality_label: 'Kualitas',
	tool_image_grayscale_quality_hint: 'Hanya JPEG dan WebP; PNG mengabaikannya.',
	tool_image_grayscale_jpeg_bg_label: 'Latar JPEG',
	tool_image_grayscale_jpeg_bg_hint: 'Mengisi area transparan sebelum ekspor JPEG. Default-nya putih.',
	tool_image_grayscale_preview_label: 'Pratinjau',
	tool_image_grayscale_progress: 'Mengubah ke grayscale…',
	tool_image_grayscale_step_decode: 'Dekode',
	tool_image_grayscale_step_gray: 'Ubah piksel',
	tool_image_grayscale_step_encode: 'Enkode',
	tool_image_grayscale_decode_step: 'Membaca gambar…',
	tool_image_grayscale_gray_step: 'Menghitung ulang setiap piksel…',
	tool_image_grayscale_encode_step: 'Menyimpan sebagai {fmt}…',
	tool_image_grayscale_elapsed: 'Berlalu: {s} dtk',
	tool_image_grayscale_empty: 'Pilih gambar dulu.',
	tool_image_grayscale_err_decode: 'File ini tidak bisa dibuka sebagai gambar. Coba JPEG, PNG, atau WebP.',
	tool_image_grayscale_err_encode: 'Gambar tidak bisa disimpan. Coba gambar lebih kecil atau format lain.',
	tool_image_grayscale_warn_large: 'File besar (lebih dari 25 MB) — konversi bisa lambat.',
	tool_image_grayscale_warn_edge: 'Salah satu sisi lebih panjang dari sekitar 8.192 px — sebagian browser mungkin gagal memproses.',
	tool_image_grayscale_warn_animation: 'GIF animasi: hanya frame pertama yang diubah.',
	tool_image_grayscale_status_working: 'Sedang diproses…',
	tool_image_grayscale_status_done: 'Selesai — klik Unduh untuk menyimpan.',
	tool_image_grayscale_stats_tpl: '{w}×{h} px · {method} ke {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'Cara mengubah gambar jadi hitam putih',
	tool_image_grayscale_how_body:
		'Nilai merah, hijau, dan biru tiap piksel diganti satu nilai abu-abu, sehingga R = G = B. Metode menentukan cara menghitung abu-abu itu — makanya foto yang sama bisa lebih terang, lebih gelap, atau lebih datar.',
	tool_image_grayscale_how_item_1: 'Pilih foto atau jatuhkan ke kotak.',
	tool_image_grayscale_how_item_2: 'Pilih metode grayscale dan kekuatan; centang Tampilkan asli untuk membandingkan.',
	tool_image_grayscale_how_item_3: 'Klik Ubah ke hitam putih dan tunggu bilah progres.',
	tool_image_grayscale_how_item_4: 'Klik Unduh. Buka dulu Pengaturan lanjutan jika butuh PNG, JPEG, atau kualitas lain.',
	tool_image_grayscale_why_choose_title: 'Kenapa pakai konverter grayscale ini',
	tool_image_grayscale_why_choose_item_1:
		'Piksel benar-benar ditulis ulang, jadi file yang diunduh tetap hitam putih di aplikasi mana pun — beda dari filter CSS atau pengaturan tampilan.',
	tool_image_grayscale_why_choose_item_2:
		'Tujuh metode konversi, bukan satu filter tetap. Di contoh, merah murni jadi 76 dengan luminansi Rec.601 tapi 85 dengan rata-rata biasa — dan metode lightness membuat merah, hijau, biru, dan kuning jadi abu-abu 128 yang sama.',
	tool_image_grayscale_why_choose_item_3:
		'Transparansi tetap di PNG dan WebP; foto diproses di tab browser ini tanpa diunggah ke server.',
	tool_image_grayscale_why_choose_item_4:
		'Mode satu kanal meniru efek filter hitam putih: kanal merah menggelapkan langit biru dan menghaluskan kulit, kanal biru mencerahkan langit dan menonjolkan bintik freckle.',
	tool_image_grayscale_why_choose_item_5:
		'Slider kekuatan memberi tampilan pudar, saturasi turun sebagian, sekaligus hitam putih penuh.',
	tool_image_grayscale_rules_title: 'Rumus grayscale yang dipakai',
	tool_image_grayscale_rules_body: 'R, G, dan B adalah nilai piksel 0–255; hasil Y ditulis ke ketiga kanal.',
	tool_image_grayscale_rules_item_1: 'Luminansi Rec.601: Y = 0,299 R + 0,587 G + 0,114 B — bobot klasik TV dan JPEG, paling dekat dengan kecerahan warna yang terlihat.',
	tool_image_grayscale_rules_item_2: 'Luminansi Rec.709: Y = 0,2126 R + 0,7152 G + 0,0722 B — bobot video HD, juga dipakai filter CSS grayscale(). Seperti kebanyakan editor, diterapkan ke nilai sRGB tersimpan tanpa linearisasi gamma.',
	tool_image_grayscale_rules_item_3: 'Rata-rata: Y = (R + G + B) ÷ 3. Lightness: Y = (terbesar + terkecil) ÷ 2. Mode kanal menyalin R, G, atau B saja.',
	tool_image_grayscale_rules_item_4: 'Kekuatan s: nilai baru = asli + (Y − asli) × s. Di 100% setiap piksel abu-abu; di 50% warna setengah jalan ke abu-abu.',
	tool_image_grayscale_rules_item_5: 'Alpha (transparansi) tidak diubah; JPEG mengisinya dengan warna latar. GIF animasi memakai frame pertama. Menyimpan mengenkode ulang gambar.',
	tool_image_grayscale_example_title: 'Contoh',
	tool_image_grayscale_example:
		'Contoh punya batang merah, hijau, biru, dan kuning murni di atas strip pelangi. Dengan Rec.601 jadi 76, 150, 29, dan 226 — empat abu-abu yang jelas berbeda. Rec.709 memberi 54, 182, 18, dan 237; rata-rata memberi 85, 85, 85, dan 170 sehingga merah, hijau, dan biru menyatu; lightness membuat keempatnya 128. Ganti metode untuk lihat pratinjau, lalu ubah dan unduh.',
	tool_image_grayscale_usecases_title: 'Kapan dipakai',
	tool_image_grayscale_usecase_1: 'Foto hitam putih untuk potret, unggahan sosial, atau gaya vintage — coba kanal merah untuk rasa filter film klasik.',
	tool_image_grayscale_usecase_2: 'Cetak di printer laser mono atau untuk koran: ubah dulu supaya kelihatan bagaimana warna terpisah jadi abu-abu.',
	tool_image_grayscale_usecase_3: 'Cek bagan, logo, atau palet warna UI: kalau dua warna jadi abu-abu sama, orang dengan gangguan penglihatan warna sulit membedakannya.',
	tool_image_grayscale_usecase_4: 'Siapkan pindaian dan dokumen: grayscale menghilangkan cast warna kertas dan menjaga file tetap sederhana.',
	tool_image_grayscale_faq_q1: 'Kenapa foto hitam putih terasa datar?',
	tool_image_grayscale_faq_a1:
		'Warna yang beda hanya di hue bisa jadi abu-abu yang sama. Bunga merah di daun hijau kasus klasik: dengan metode rata-rata keduanya 85. Pindah ke luminansi atau coba kanal merah/hijau untuk memisahkannya.',
	tool_image_grayscale_faq_q2: 'Bisa tetap menyisakan sedikit warna?',
	tool_image_grayscale_faq_a2:
		'Bisa. Turunkan kekuatan: 70–80% memberi tampilan pudar dan saturasi rendah, 0% meninggalkan foto apa adanya. Menyisakan satu warna saja (selective colour) butuh masking — halaman ini tidak melakukannya.',
	tool_image_grayscale_faq_q3: 'Metode grayscale mana yang harus dipilih?',
	tool_image_grayscale_faq_a3:
		'Untuk foto, mulai dengan luminansi Rec.601: hijau paling berat, biru paling ringan, cocok dengan kecerahan yang terlihat. Rec.709 sedikit lebih terang di hijau. Rata-rata dan lightness lebih sederhana tapi bisa meratakan gambar berwarna. Pakai satu kanal kalau mau efek filter yang disengaja.',
	tool_image_grayscale_faq_q4: 'Sama dengan filter CSS grayscale() atau filter mono di HP?',
	tool_image_grayscale_faq_a4:
		'CSS grayscale(100%) memakai bobot yang sama dengan opsi Rec.709, tapi hanya mengubah tampilan di halaman; file tetap berwarna. Filter HP sering menambah kontras atau tone. Alat ini menulis piksel abu-abu biasa ke file baru.',
	tool_image_grayscale_faq_q5: 'File unduhan benar-benar grayscale, dan apakah lebih kecil?',
	tool_image_grayscale_faq_a5:
		'Setiap piksel punya R, G, dan B sama, jadi tampil dan tercetak abu-abu murni. Browser menyimpannya sebagai file RGB biasa, bukan satu kanal, jadi penurunan ukuran sedang — biasanya paling terasa di PNG. Pakai editor gambar kalau butuh mode warna grayscale 8-bit.',
	tool_image_grayscale_faq_q6: 'Apa yang terjadi pada PNG transparan?',
	tool_image_grayscale_faq_a6:
		'Transparansi tetap ada saat mengunduh PNG atau WebP. JPEG tidak bisa menyimpan transparansi, jadi area itu diisi warna latar JPEG dari Pengaturan lanjutan.',
	tool_image_grayscale_faq_q7: 'Apakah foto saya diunggah?',
	tool_image_grayscale_faq_a7:
		'Tidak. Dekode, konversi, dan penyimpanan berjalan di tab browser ini. Simpan file asli kalau mungkin masih butuh versi berwarna — unduhan abu-abu tidak bisa dikembalikan jadi berwarna.',
	tool_image_grayscale_article: 'Gambar ke grayscale',
	tool_image_grayscale_ref_a_label: 'Wikipedia — Grayscale (konversi warna ke abu-abu)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — matriks grayscale()',
};

export default id;
