import type { SiteLangDict } from './types';
const id: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Beranda',
  nav_devlogs: 'Log Pengembangan',
  nav_tools: 'Alat',
  footer_text: 'Online Free Tools · Proyek pembelajaran · Terus beriterasi',
  tool_headers_title: 'Dapatkan Header Respons Website',
  tool_headers_description:
    "Ambil header HTTP sebuah URL di server (HEAD, fallback ke GET). Proses: kirim HEAD, ikuti redirect, kumpulkan header, blokir host privat. Contoh: periksa CORS, Cache-Control, HSTS untuk debug redirect dan pengaturan CDN.",
  tool_headers_article:
    'Apa itu: Ambil dan periksa header respons HTTP dari sebuah situs web. Berguna untuk mendebug CORS, caching, redirect, dan verifikasi keamanan atau header CDN. Skenario: debugging pengembang, pemeriksaan SEO, dan verifikasi konfigurasi server.',
  url_label: 'URL',
  url_placeholder: 'contoh https://contoh.com',
  fetch_button: 'Ambil Header',
  result_title: 'Hasil',
  status_label: 'Status',
  final_url_label: 'URL Akhir',
  headers_label: 'Header',
  error_prefix: 'Kesalahan: ',
  note_title: 'Catatan',
  note_1: 'Beberapa situs tidak mendukung HEAD; kami akan kembali ke GET.',
  note_2: 'Untuk keamanan, permintaan ke localhost/jaringan pribadi diblokir.',
  tool_markdown_title: 'Markdown ke HTML & sebaliknya — pratinjau aman',
  tool_markdown_description:
    'Butuh HTML aman dari Markdown, atau Markdown dari HTML CMS? Pilih arah, tempel di browser: marked/Turndown + DOMPurify. Contoh: draf README jadi HTML, atau markup admin jadi .md untuk Git.',
  tool_markdown_article:
    'Satu halaman dua arah, dengan penjelasan apa yang dibersihkan dan apa yang hilang. Tempelan lokal; CDN hanya untuk pustaka.',
  tool_markdown_dir_label: 'Arah konversi',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'Salin HTML',
  tool_markdown_copy_md: 'Salin Markdown',
  tool_markdown_copy_done: 'Disalin',
  tool_markdown_download: 'Unduh HTML',
  tool_markdown_download_md: 'Unduh Markdown',
  tool_markdown_clear: 'Hapus',
  tool_markdown_full_doc: 'Buat dokumen HTML lengkap',
  tool_markdown_input_label: 'Input Markdown',
  tool_markdown_preview_label: 'Pratinjau HTML',
  tool_markdown_html_input_label: 'Input HTML',
  tool_markdown_md_output_label: 'Output Markdown',
  tool_markdown_placeholder:
    "# Judul\n\nMarkdown dasar: **tebal**, daftar, dan blok kode.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Halo Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>Judul</h1>\n<p>Halo <strong>dunia</strong></p>',
  tool_markdown_sample_md:
    "# Judul\n\nMarkdown dasar: **tebal**, daftar, dan blok kode.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Halo Markdown');\n```",
  tool_markdown_sample_html: '<h1>Judul</h1>\n<p>Halo <strong>dunia</strong></p>',
  tool_markdown_export_title: 'Ekspor Markdown ke HTML',
  tool_markdown_export_description:
    'Buat dokumen HTML lengkap dari Markdown dengan template dan meta. Langkah: render, sisipkan ke template, tambah meta, unduh. Contoh: ekspor artikel sebagai .html mandiri.',
  tool_markdown_large_warn:
    'Tempelan sangat besar (>200k karakter). Konversi bisa lambat — coba cuplikan lebih pendek.',
  tool_markdown_need_lib: 'Pustaka konversi gagal dimuat. Periksa koneksi lalu muat ulang.',
  tool_markdown_loss_hint:
    'Hampir tidak ada Markdown — skrip, tag kosong, atau markup tak didukung mungkin dihapus. Lihat Aturan dan FAQ.',
  tool_markdown_how_title: 'Alur singkat',
  tool_markdown_how_body:
    'Tab menentukan arah. Kiri input, kanan hasil lokal. HTML bisa fragmen atau dokumen sederhana; Markdown siap untuk editor/LLM.',
  tool_markdown_rules_title: 'Aturan per arah',
  tool_markdown_rules_intro:
    'Tidak membuat URL tipis kedua hanya demi kata kunci “html ke markdown”.',
  tool_markdown_rules_item_md_html:
    'Ke HTML: parse lalu sanitasi sebelum tampil/unduh.',
  tool_markdown_rules_item_html_md:
    'Ke Markdown: bersihkan dulu, lalu Turndown (ATX + fenced).',
  tool_markdown_rules_item_loss:
    'Gaya, skrip, tabel rumit sering hilang. Bolak-balik ≠ asli.',
  tool_markdown_rules_privacy:
    'Teks tetap di tab Anda; unduh CDN bukan unggah konten.',
  tool_markdown_example_title: 'Contoh',
  tool_markdown_example:
    '`# Judul` + `Halo **dunia**` ↔ heading/paragraf aman dan Markdown tebal.',
  tool_markdown_usecases_title: 'Cocok untuk',
  tool_markdown_usecase_1:
    'Kirim HTML bersih ke CMS.',
  tool_markdown_usecase_2:
    'Ambil ulang dokumen dari HTML email/panel.',
  tool_markdown_usecase_3:
    'Rapikan rich text sebelum prompt.',
  tool_markdown_faq_q1: 'Apakah output HTML aman dari skrip?',
  tool_markdown_faq_a1:
    'Pada arah Markdown → HTML, DOMPurify jalan sebelum pratinjau dan unduhan.',
  tool_markdown_faq_q2: 'Apakah tata letak HTML bertahan di Markdown?',
  tool_markdown_faq_a2:
    'Jarang. Anggap hasilnya draf yang bisa diedit.',
  tool_markdown_faq_q3: 'Apakah tempelan dikirim ke server?',
  tool_markdown_faq_a3:
    'Tidak. Konversi lokal; CDN hanya mengantar file pustaka.',
  tool_markdown_faq_q4: 'Bisakah bolak-balik tanpa ubah?',
  tool_markdown_faq_a4:
    'Tidak dijamin. Diff jika Anda butuh sama persis.',
  tool_markdown_faq_q5: 'Fitur Markdown dan opsi ekspor?',
  tool_markdown_faq_a5:
    'Dasar CommonMark; opsi dokumen HTML penuh untuk berbagi offline.',
  tool_text_diff_description:
    'Bandingkan dua teks online dan lihat apa yang berubah. Proses: tempel teks asli dan revisi, pilih per baris, per kata, atau per karakter, opsional abaikan spasi atau samakan baris baru Windows (CRLF→LF), lalu sorot penambahan dan penghapusan di browser. Contoh: ubah "halo dunia" menjadi "halo kawan" — mode kata menampilkan satu penggantian.',
  tool_text_diff_article:
    'Alat gratis untuk membandingkan dua teks berdampingan. Mode baris untuk config dan kode; mode kata untuk tulisan dan prompt; mode karakter untuk typo kecil. Semua di browser — teks Anda tidak diunggah.',
  tool_text_diff_example:
    'Contoh (mode kata): A = "Halo dunia", B = "Halo teman" → satu perubahan (dunia → teman). Jika hanya baris tengah dari tiga baris yang berubah, mode baris menandai baris itu.',
  tool_text_diff_sample_a: 'Halo dunia\nbaris dua\nbaris tiga',
  tool_text_diff_sample_b: 'Halo teman\nbaris dua\nbaris tiga',
  tool_text_diff_label_a: 'Teks asli',
  tool_text_diff_label_b: 'Teks revisi',
  tool_text_diff_placeholder_a: 'Tempel teks asli…',
  tool_text_diff_placeholder_b: 'Tempel teks revisi…',
  tool_text_diff_mode_label: 'Bandingkan per',
  tool_text_diff_mode_lines: 'Baris',
  tool_text_diff_mode_words: 'Kata',
  tool_text_diff_mode_chars: 'Karakter',
  tool_text_diff_ignore_ws: 'Abaikan spasi',
  tool_text_diff_normalize_eol: 'Samakan CRLF dan LF',
  tool_text_diff_compare: 'Bandingkan',
  tool_text_diff_swap: 'Tukar sisi',
  tool_text_diff_clear: 'Kosongkan',
  tool_text_diff_result_label: 'Perbedaan',
  tool_text_diff_legend: 'Hijau = ditambahkan · Merah = dihapus',
  tool_text_diff_summary: '{added} ditambah, {removed} dihapus',
  tool_text_diff_no_diff: 'Tidak ada perbedaan — kedua teks sama.',
  tool_text_diff_empty_hint: 'Tempel teks di satu atau kedua sisi, lalu bandingkan.',
  tool_text_diff_large_warn: 'Tempelan sangat besar (>100k karakter). Bisa lambat — coba cuplikan lebih pendek.',
  tool_text_diff_need_lib: 'Gagal memuat pembanding. Periksa koneksi dan muat ulang.',
  tool_text_diff_how_title: 'Cara memakai',
  tool_text_diff_how_body:
    'Tempel dua versi, pilih ketelitian (baris, kata, atau karakter), lalu lihat tambahan hijau dan penghapusan merah. Teks yang Anda tempel tidak diunggah atau disimpan oleh kami. Halaman dapat memuat pustaka open-source jsdiff dari CDN agar perbandingan berjalan di browser.',
  tool_text_diff_rules_title: 'Cara perbedaan dihitung',
  tool_text_diff_rules_body:
    'Alat ini mencari daftar singkat perubahan dari teks A ke B (diff klasik / pendekatan Myers dengan jsdiff). Mode baris: config dan kode. Mode kata: kalimat dan prompt. Mode karakter: typo kecil, tapi lebih ramai. Abaikan spasi menyembunyikan perubahan indent saja. Samakan CRLF dan LF agar baris tidak merah hanya karena gaya baris baru.',
  tool_text_diff_rules_intro:
    'Alat ini mencari daftar singkat suntingan untuk mengubah teks A menjadi B (diff klasik / pendekatan Myers dengan jsdiff). Pilih mode sesuai tugas:',
  tool_text_diff_rules_item_lines:
    'Baris — cocok untuk .env, YAML, dan kode; satu baris berubah ditandai utuh. Cepat dibaca, tapi satu kata saja tetap membuat seluruh baris merah.',
  tool_text_diff_rules_item_words:
    'Kata — cocok untuk kalimat, email, dan prompt; menyorot kata. Lebih jelas untuk prosa; tanda baca bisa memecah hasil.',
  tool_text_diff_rules_item_chars:
    'Karakter — cocok untuk typo kecil; paling teliti, tapi berisik pada suntingan panjang.',
  tool_text_diff_rules_options:
    'Abaikan spasi menyembunyikan perubahan indentasi saja. Samakan CRLF dan LF agar baris utuh tidak merah hanya karena gaya baris baru (Windows vs Unix).',
  tool_text_diff_example_title: 'Contoh',
  tool_text_diff_usecases_title: 'Kapan dipakai',
  tool_text_diff_usecase_1: 'Cek config: bandingkan cuplikan .env atau YAML baris demi baris.',
  tool_text_diff_usecase_2: 'Revisi prompt: mode kata untuk melihat frasa yang ditambah atau dihapus.',
  tool_text_diff_usecase_3: 'Koreksi teks atau terjemahan: pastikan hanya kalimat yang dimaksud yang berubah.',
  tool_text_diff_faq_q1: 'Bandingkan per baris atau per kata?',
  tool_text_diff_faq_a1: 'Baris untuk kode dan config. Kata untuk kalimat, email, dan prompt — hanya kata yang berubah yang disorot.',
  tool_text_diff_faq_q2: 'Apakah teks saya diunggah ke server?',
  tool_text_diff_faq_a2:
    'Teks yang Anda tempel tidak diunggah atau disimpan oleh kami — perbandingan berjalan di browser. Halaman dapat memuat jsdiff (open source) dari CDN; itu tidak mengirim teks Anda ke server kami.',
  tool_text_diff_faq_q3: 'Mengapa hanya beda baris baru membuat seluruh baris merah?',
  tool_text_diff_faq_a3: 'Windows sering memakai CRLF; Mac/Linux biasanya LF. Aktifkan “Samakan CRLF dan LF” lalu bandingkan lagi.',
  tool_text_diff_faq_q4: 'Bisakah membandingkan gambar atau file biner?',
  tool_text_diff_faq_a4: 'Tidak. Hanya teks biasa.',

};
export default id;