/**
 * i18n tool shard (markdown-to-html / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_markdown_article:
    'Satu halaman dua arah, dengan penjelasan apa yang dibersihkan dan apa yang hilang. Tempelan lokal; CDN hanya untuk pustaka.',
  tool_markdown_clear: 'Hapus',
  tool_markdown_copy: 'Salin HTML',
  tool_markdown_copy_done: 'Disalin',
  tool_markdown_copy_md: 'Salin Markdown',
  tool_markdown_description:
    'Butuh HTML aman dari Markdown, atau Markdown dari HTML CMS? Pilih arah, tempel di browser: marked/Turndown + DOMPurify. Contoh: draf README jadi HTML, atau markup admin jadi .md untuk Git.',
  tool_markdown_dir_label: 'Arah konversi',
  tool_markdown_download: 'Unduh HTML',
  tool_markdown_download_md: 'Unduh Markdown',
  tool_markdown_example: '`# Judul` + `Halo **dunia**` ↔ heading/paragraf aman dan Markdown tebal.',
  tool_markdown_example_title: 'Contoh',
  tool_markdown_export_description:
    'Buat dokumen HTML lengkap dari Markdown dengan template dan meta. Langkah: render, sisipkan ke template, tambah meta, unduh. Contoh: ekspor artikel sebagai .html mandiri.',
  tool_markdown_export_title: 'Ekspor Markdown ke HTML',
  tool_markdown_faq_a1: 'Pada arah Markdown → HTML, DOMPurify jalan sebelum pratinjau dan unduhan.',
  tool_markdown_faq_a2: 'Jarang. Anggap hasilnya draf yang bisa diedit.',
  tool_markdown_faq_a3: 'Tidak. Konversi lokal; CDN hanya mengantar file pustaka.',
  tool_markdown_faq_a4: 'Tidak dijamin. Diff jika Anda butuh sama persis.',
  tool_markdown_faq_a5: 'Dasar CommonMark; opsi dokumen HTML penuh untuk berbagi offline.',
  tool_markdown_faq_q1: 'Apakah output HTML aman dari skrip?',
  tool_markdown_faq_q2: 'Apakah tata letak HTML bertahan di Markdown?',
  tool_markdown_faq_q3: 'Apakah tempelan dikirim ke server?',
  tool_markdown_faq_q4: 'Bisakah bolak-balik tanpa ubah?',
  tool_markdown_faq_q5: 'Fitur Markdown dan opsi ekspor?',
  tool_markdown_full_doc: 'Buat dokumen HTML lengkap',
  tool_markdown_how_body:
    'Tab menentukan arah. Kiri input, kanan hasil lokal. HTML bisa fragmen atau dokumen sederhana; Markdown siap untuk editor/LLM.',
  tool_markdown_how_title: 'Alur singkat',
  tool_markdown_html_input_label: 'Input HTML',
  tool_markdown_html_placeholder: '<h1>Judul</h1>\n<p>Halo <strong>dunia</strong></p>',
  tool_markdown_input_label: 'Input Markdown',
  tool_markdown_large_warn: 'Tempelan sangat besar (>200k karakter). Konversi bisa lambat — coba cuplikan lebih pendek.',
  tool_markdown_loss_hint:
    'Hampir tidak ada Markdown — skrip, tag kosong, atau markup tak didukung mungkin dihapus. Lihat Aturan dan FAQ.',
  tool_markdown_md_output_label: 'Output Markdown',
  tool_markdown_need_lib: 'Pustaka konversi gagal dimuat. Periksa koneksi lalu muat ulang.',
  tool_markdown_placeholder:
    '# Judul\n\nMarkdown dasar: **tebal**, daftar, dan blok kode.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log(\'Halo Markdown\');\n```',
  tool_markdown_preview_label: 'Pratinjau HTML',
  tool_markdown_rules_intro:
    'Yang dicakup konversi: sintaks Markdown apa yang didukung, bagaimana HTML dibersihkan, dan bagaimana teks yang Anda tempel diproses secara lokal.',
  tool_markdown_rules_item_html_md: 'Ke Markdown: bersihkan dulu, lalu Turndown (ATX + fenced).',
  tool_markdown_rules_item_loss: 'Gaya, skrip, tabel rumit sering hilang. Bolak-balik ≠ asli.',
  tool_markdown_rules_item_md_html: 'Ke HTML: parse lalu sanitasi sebelum tampil/unduh.',
  tool_markdown_rules_privacy: 'Teks tetap di tab Anda; unduh CDN bukan unggah konten.',
  tool_markdown_rules_title: 'Aturan per arah',
  tool_markdown_sample_html: '<h1>Judul</h1>\n<p>Halo <strong>dunia</strong></p>',
  tool_markdown_sample_md:
    '# Judul\n\nMarkdown dasar: **tebal**, daftar, dan blok kode.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log(\'Halo Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'Markdown ke HTML & sebaliknya — pratinjau aman',
  tool_markdown_usecase_1: 'Kirim HTML bersih ke CMS.',
  tool_markdown_usecase_2: 'Ambil ulang dokumen dari HTML email/panel.',
  tool_markdown_usecase_3: 'Rapikan rich text sebelum prompt.',
  tool_markdown_usecases_title: 'Cocok untuk',
};
export default id;
