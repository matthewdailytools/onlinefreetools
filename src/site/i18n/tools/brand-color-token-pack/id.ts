/**
 * i18n tool shard (brand-color-token-pack / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'Satu warna dasar merek jadi paket token lengkap: HEX, RGB, HSL, OKLCH, skala 50–950, pasangan teks hitam/putih per langkah, plus variabel CSS atau JSON yang bisa disalin — semua di browser.',
  tool_brand_color_token_pack_bad_hex: 'Masukkan HEX valid 3 atau 6 digit (mis. #2563EB).',
  tool_brand_color_token_pack_base_label: 'Warna dasar',
  tool_brand_color_token_pack_clear: 'Hapus',
  tool_brand_color_token_pack_contrast_col: 'Teks',
  tool_brand_color_token_pack_copy_css: 'Salin CSS',
  tool_brand_color_token_pack_copy_done: 'Tersalin',
  tool_brand_color_token_pack_copy_json: 'Salin JSON',
  tool_brand_color_token_pack_desc:
    'Satu warna dasar → HEX/RGB/HSL/OKLCH, skala 50–950, pasangan kontras, variabel CSS — lokal.',
  tool_brand_color_token_pack_description:
    'Buat paket token warna merek dari satu warna dasar di browser. Langkah: pilih dasar (HEX atau color picker), lihat HEX/RGB/HSL/OKLCH, buat skala 50–950 dengan pasangan hitam/putih di setiap langkah, lalu salin variabel CSS atau JSON. Contoh biru #2563eb dimuat saat buka — tidak ada unggahan.',
  tool_brand_color_token_pack_empty: 'Buat token dulu, baru salin CSS atau JSON.',
  tool_brand_color_token_pack_example:
    'Muat contoh (#2563EB). Blok ruang warna menampilkan HEX, RGB, HSL, OKLCH untuk dasar; grid skala 50–950 dengan teks hitam/putih yang disarankan dan rasio kontras. Salin CSS menghasilkan :root { --color-50: …; … --color-950: …; } siap untuk stylesheet.',
  tool_brand_color_token_pack_example_title: 'Contoh',
  tool_brand_color_token_pack_faq_a1:
    'Tidak. Perhitungan dan ekspor berjalan di tab ini — warna Anda tidak dikirim ke server.',
  tool_brand_color_token_pack_faq_a2:
    'Langkah 500 sama dengan warna dasar Anda. Langkah lebih terang (50–400) dicampur ke putih; lebih gelap (600–950) ke hitam. Pencampuran linear di sRGB agar rona tetap stabil.',
  tool_brand_color_token_pack_faq_a3:
    'Setiap swatch membandingkan teks hitam dan putih di latar itu lalu memilih yang kontras WCAG-nya lebih tinggi. Label menampilkan rasio dan apakah teks normal mungkin memenuhi AA (4,5:1) atau AA teks besar (3:1).',
  tool_brand_color_token_pack_faq_a4:
    'Salin CSS mengeluarkan properti kustom :root (--color-50 hingga --color-950). Salin JSON memberi skala yang sama plus ruang warna dasar sebagai data terstruktur untuk token desain.',
  tool_brand_color_token_pack_faq_a5:
    'Ini saran cepat hitam/putih per langkah. Untuk pasangan foreground/background kustom atau level WCAG tepat, buka pemeriksa kontras WCAG dan tempel HEX swatch mana pun.',
  tool_brand_color_token_pack_faq_q1: 'Apakah warna saya keluar dari browser?',
  tool_brand_color_token_pack_faq_q2: 'Bagaimana skala 50–950 dibuat?',
  tool_brand_color_token_pack_faq_q3: 'Apa arti kolom kontras?',
  tool_brand_color_token_pack_faq_q4: 'Apa isi Salin CSS dan Salin JSON?',
  tool_brand_color_token_pack_faq_q5: 'Kapan pakai pemeriksa kontras?',
  tool_brand_color_token_pack_generate: 'Buat',
  tool_brand_color_token_pack_how_body:
    'Masukkan atau pilih satu warna dasar merek. Halaman menampilkan HEX, RGB, HSL, OKLCH, lalu membuat skala 11 langkah (50–950) dengan pratinjau UI. Setiap swatch menyarankan teks hitam/putih dan rasio kontras. Salin variabel CSS atau JSON jika ramp sudah pas — semua lokal.',
  tool_brand_color_token_pack_how_title: 'Cara kerja',
  tool_brand_color_token_pack_preview_label: 'Pratinjau UI',
  tool_brand_color_token_pack_rules_body:
    'Yang diharapkan dari skala, ruang warna, petunjuk kontras, dan privasi.',
  tool_brand_color_token_pack_rules_item_1:
    'Langkah 500 adalah dasar Anda. Di bawahnya mencerahkan dengan campuran ke putih; di atasnya menggelapkan ke hitam (campuran linear sRGB).',
  tool_brand_color_token_pack_rules_item_2:
    'Blok dasar mencantumkan HEX, RGB, HSL, OKLCH untuk warna yang sama. OKLCH memakai konversi sRGB → linear → OKLab agar selaras dengan sintaks CSS modern.',
  tool_brand_color_token_pack_rules_item_3:
    'Setiap swatch menyarankan teks hitam atau putih — mana yang kontrasnya lebih tinggi di latar itu. Rasio mengikuti luminance relatif WCAG; label AA hanya petunjuk.',
  tool_brand_color_token_pack_rules_item_4:
    'Privasi: pembuatan, pratinjau, dan salin clipboard semua lokal di tab ini — warna merek tidak diunggah.',
  tool_brand_color_token_pack_rules_title: 'Aturan yang perlu Anda tahu',
  tool_brand_color_token_pack_sample: 'Contoh',
  tool_brand_color_token_pack_scale_label: 'Skala warna (50–950)',
  tool_brand_color_token_pack_spaces_label: 'Ruang warna (dasar)',
  tool_brand_color_token_pack_text_on: 'Teks di dasar',
  tool_brand_color_token_pack_title: 'Buat skala warna merek — palet 50–950 & token CSS',
  tool_brand_color_token_pack_ui_body: 'Isi pratinjau di warna dasar merek dengan teks yang disarankan.',
  tool_brand_color_token_pack_ui_btn: 'Aksi utama',
  tool_brand_color_token_pack_ui_title: 'Judul pratinjau',
  tool_brand_color_token_pack_usecase_1:
    'Design system: mulai dari satu HEX merek dan kirim ramp 50–950 konsisten plus variabel CSS untuk komponen.',
  tool_brand_color_token_pack_usecase_2:
    'Mode gelap: cek tint terang (50–300) untuk permukaan dan shade dalam (700–950) untuk teks di atas warna merek.',
  tool_brand_color_token_pack_usecase_3:
    'Serah ke dev: salin token JSON atau properti CSS alih-alih mengetik ulang HEX dari tangkapan layar.',
  tool_brand_color_token_pack_usecases_title: 'Cocok untuk',
};
export default id;
