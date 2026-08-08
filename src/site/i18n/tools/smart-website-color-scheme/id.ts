/**
 * i18n tool shard (smart-website-color-scheme / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'Di bawah AA',
  tool_smart_website_color_scheme_aa_pass: 'AA oke',
  tool_smart_website_color_scheme_add_theme: 'Tambah tema',
  tool_smart_website_color_scheme_article:
    'Dari satu warna merek, bangun skema warna website: netral bersama, token semantik (tautan netral, status tetap), pratinjau chrome terang, cek kontras mandiri, plus CSS :root siap tempel — semuanya di browser lokal.',
  tool_smart_website_color_scheme_bad_hex: 'Masukkan HEX 3 atau 6 digit yang valid (mis. #0F6E8C).',
  tool_smart_website_color_scheme_bad_id:
    'Id tema harus unik, 1–32 karakter: huruf, angka, - atau _.',
  tool_smart_website_color_scheme_check_muted: 'Teks sekunder di atas permukaan',
  tool_smart_website_color_scheme_check_on_action: 'Teks di atas aksi (on-action)',
  tool_smart_website_color_scheme_check_text: 'Teks isi di atas permukaan',
  tool_smart_website_color_scheme_checks_label: 'Cek kontras mandiri (tema aktif)',
  tool_smart_website_color_scheme_clear: 'Bersihkan',
  tool_smart_website_color_scheme_col_role: 'Peran',
  tool_smart_website_color_scheme_col_token: 'Token',
  tool_smart_website_color_scheme_col_value: 'Nilai',
  tool_smart_website_color_scheme_copy_css: 'Salin CSS',
  tool_smart_website_color_scheme_copy_done: 'Disalin',
  tool_smart_website_color_scheme_copy_json: 'Salin JSON',
  tool_smart_website_color_scheme_cp_brand: 'Merek',
  tool_smart_website_color_scheme_cp_btn: 'Tombol outline',
  tool_smart_website_color_scheme_cp_card_body:
    'Isi kartu memakai teks redup. Tautan tetap netral — bukan warna aksi merek.',
  tool_smart_website_color_scheme_cp_card_title: 'Judul kartu',
  tool_smart_website_color_scheme_cp_err: 'Pesan error memakai danger, bukan merek.',
  tool_smart_website_color_scheme_cp_link: 'Tautan terkait',
  tool_smart_website_color_scheme_cp_nav: 'Item nav',
  tool_smart_website_color_scheme_cp_side1: 'Sidebar',
  tool_smart_website_color_scheme_cp_side2: 'Aktif',
  tool_smart_website_color_scheme_desc:
    'Skema website: netral + token CSS semantik, tautan netral & status tetap — lokal.',
  tool_smart_website_color_scheme_description:
    'Buat skema warna website di browser Anda. Pilih HEX merek (contoh teal #0F6E8C), dapatkan netral bersama, action/hover/soft/focus, tautan netral, warna status tetap, pratinjau chrome, dan cek AA; lalu salin CSS :root atau JSON. Berbasis aturan — bukan AI cloud; tidak ada yang diunggah.',
  tool_smart_website_color_scheme_empty: 'Buat skema dulu, baru salin CSS atau JSON.',
  tool_smart_website_color_scheme_example:
    'Muat contoh (id tema teal, #0F6E8C). Pratinjau menampilkan permukaan putih, sorotan lembut teal pada item aktif (tanpa bilah kiri), tautan isi netral, dan baris danger merah. Semantik memetakan --link ke warna teks (bukan --action). Salin CSS menghasilkan netral :root plus override html[data-theme="teal"].',
  tool_smart_website_color_scheme_example_title: 'Contoh',
  tool_smart_website_color_scheme_faq_a1:
    'Di sini «cerdas» berarti aturan deterministik: netral tetap, merek menurunkan action/hover/soft/focus, tautan tetap netral, dan warna status tidak ikut merek. Tanpa panggilan model dan tanpa unggahan — hitungan berjalan di tab ini.',
  tool_smart_website_color_scheme_faq_a2:
    'Tautan bawaan memakai warna teks supaya halaman tidak jadi dinding hyperlink merek. Warna merek disimpan untuk aksi, seleksi, cincin fokus, dan fill soft ringan.',
  tool_smart_website_color_scheme_faq_a3:
    'Danger, success, warning, dan info tetap sama di semua tema. Merek amber tidak boleh jadi warna error — UI akan terlihat seperti peringatan terus-menerus.',
  tool_smart_website_color_scheme_faq_a4:
    'Pakai Buat skala warna merek bila Anda butuh rampa 50–950 atau daftar HEX/HSL/OKLCH. Halaman ini untuk skema semantik situs terang lengkap (bg/surface/link/action/status) siap tempel.',
  tool_smart_website_color_scheme_faq_a5:
    'Cek mandiri mencakup beberapa pasangan kunci pada tema aktif. Untuk pasangan bebas atau AAA, buka pemeriksa kontras WCAG dan tempel HEX token apa pun.',
  tool_smart_website_color_scheme_faq_q1: 'Apakah «cerdas» sama dengan AI generator warna?',
  tool_smart_website_color_scheme_faq_q2: 'Mengapa tautan tidak memakai warna merek?',
  tool_smart_website_color_scheme_faq_q3: 'Mengapa warna status tidak berubah bersama tema?',
  tool_smart_website_color_scheme_faq_q4: 'Kapan sebaiknya pakai Buat skala warna merek?',
  tool_smart_website_color_scheme_faq_q5: 'Seberapa lengkap cek kontras mandiri?',
  tool_smart_website_color_scheme_generate: 'Buat',
  tool_smart_website_color_scheme_how_body:
    'Isi satu sampai empat tema merek (id + HEX). Alat menjaga tangga netral bersama, menurunkan token aksi dari tiap merek, memetakan peran semantik (termasuk tautan netral dan status tetap), menggambar chrome terang, menjalankan cek AA, lalu membiarkan Anda menyalin variabel CSS atau JSON — semuanya lokal.',
  tool_smart_website_color_scheme_how_title: 'Cara kerjanya',
  tool_smart_website_color_scheme_max_themes: 'Anda bisa menambah hingga 4 tema yang berbagi netral yang sama.',
  tool_smart_website_color_scheme_preview_label: 'Pratinjau UI terang',
  tool_smart_website_color_scheme_primitives_label: 'Primitif (tema aktif + netral bersama)',
  tool_smart_website_color_scheme_remove_theme: 'Hapus',
  tool_smart_website_color_scheme_role_action: 'Aksi / penekanan merek',
  tool_smart_website_color_scheme_role_bg: 'Latar halaman / bagian',
  tool_smart_website_color_scheme_role_border: 'Border & pemisah',
  tool_smart_website_color_scheme_role_focus: 'Cincin fokus',
  tool_smart_website_color_scheme_role_link: 'Tautan bawaan (netral)',
  tool_smart_website_color_scheme_role_muted: 'Teks sekunder',
  tool_smart_website_color_scheme_role_on_action: 'Teks di atas aksi padat',
  tool_smart_website_color_scheme_role_status: 'Status (lepas dari merek)',
  tool_smart_website_color_scheme_role_surface: 'Permukaan terangkat / kartu',
  tool_smart_website_color_scheme_role_text: 'Teks isi / kuat',
  tool_smart_website_color_scheme_rules_body:
    'Lapisan token, tautan vs aksi, status mandiri, petunjuk kontras, dan privasi.',
  tool_smart_website_color_scheme_rules_item_1:
    'Primitif menyimpan netral mentah dan turunan merek. Semantik menamai tujuan (bg, surface, link, action…). Komponen sebaiknya hanya merujuk semantik.',
  tool_smart_website_color_scheme_rules_item_2:
    'Merek → --action; hover menggelapkan ~22%; soft ≈ 10% alpha; focus-ring ≈ 40% alpha; --bg adalah netral yang sedikit diwarnai.',
  tool_smart_website_color_scheme_rules_item_3:
    'Tautan dipetakan ke text / text-strong (netral). Jangan ikat --link bawaan ke --action.',
  tool_smart_website_color_scheme_rules_item_4:
    'Danger / success / warning / info tetap tetap di semua tema agar merek tidak pernah mengganti semantik error.',
  tool_smart_website_color_scheme_rules_item_5:
    'Privasi: pembuatan, pratinjau, dan salin ke clipboard berjalan di tab ini. Warna merek tidak diunggah.',
  tool_smart_website_color_scheme_rules_title: 'Aturan yang perlu Anda harapkan',
  tool_smart_website_color_scheme_sample: 'Muat contoh',
  tool_smart_website_color_scheme_semantics_label: 'Semantik (tema aktif)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'id tema',
  tool_smart_website_color_scheme_themes_hint:
    'Netral + warna status bersama; tiap tema hanya menimpa token turunan merek. Maks. 4 tema.',
  tool_smart_website_color_scheme_themes_label: 'Tema merek',
  tool_smart_website_color_scheme_title: 'Skema warna website — token CSS semantik',
  tool_smart_website_color_scheme_usecase_1:
    'Chrome tools atau SaaS: kerangka terang yang mudah dibaca dengan aksen merek pada seleksi dan fokus, bukan di setiap tautan.',
  tool_smart_website_color_scheme_usecase_2:
    'Rebrand landing: ganti merek lewat html[data-theme] sambil mempertahankan kerangka netral dan warna status.',
  tool_smart_website_color_scheme_usecase_3:
    'Serah terima desain→dev: tempel variabel CSS :root, bukan daftar HEX dari screenshot.',
  tool_smart_website_color_scheme_usecases_title: 'Cocok untuk',
  tool_smart_website_color_scheme_warn_contrast:
    'Peringatan: teks di atas warna aksi di bawah 4,5:1 — gelapkan merek atau sesuaikan --on-action sebelum merilis tombol padat.',
};
export default id;
