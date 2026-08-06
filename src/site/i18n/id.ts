import type { SiteLangDict } from './types';
const id: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Beranda',
  nav_devlogs: 'Log Pengembangan',
  nav_tools: 'Alat',
  footer_text: 'Online Free Tools · Proyek pembelajaran · Terus beriterasi',
  tool_headers_title: 'Cek header HTTP website — Lihat response headers',
  tool_headers_description:
    'Periksa header HTTP response sebuah URL dari edge kami. Alur: tempel https, kirim HEAD (GET bila perlu), ikuti redirect, tampilkan status dan peta header; blokir host privat. Contoh: baca Cache-Control, CORS, HSTS saat debug CDN atau redirect.',
  tool_headers_article:
    'Lihat header yang diterima edge untuk URL publik — berguna untuk cache, CORS, redirect, dan cek header keamanan. Permintaan diproxy; kami tidak menyimpan body halaman.',
  url_label: 'URL',
  url_placeholder: 'contoh https://contoh.com',
  fetch_button: 'Periksa header',
  result_title: 'Hasil',
  status_label: 'Status',
  final_url_label: 'URL Akhir',
  headers_label: 'Header',
  error_prefix: 'Kesalahan: ',
  note_title: 'Catatan',
  note_1: 'Situs yang menolak HEAD akan dicoba dengan GET. Tujuannya header, bukan unduh HTML penuh.',
  note_2: 'localhost dan jaringan privat diblokir agar worker tidak bisa memindai host internal.',
  tool_headers_how_title: 'Cara kerjanya',
  tool_headers_how_body:
    'Tempel URL http(s) publik lalu periksa. Worker edge mengirim HEAD (GET jika perlu), mengikuti redirect, lalu mengembalikan status, URL akhir, dan header yang terlihat. Target privat ditolak. Ini sudut pandang edge — bisa beda dengan browser lokal jika CDN route per wilayah.',
  tool_headers_rules_title: 'Aturan pemeriksa',
  tool_headers_rules_body:
    'Worker berperan sebagai proxy singkat untuk inspeksi header; tidak menyimpan isi halaman. Nama header mengikuti semantik HTTP (lihat Referensi).',
  tool_headers_rules_item_1: 'Utamakan HEAD; GET jika origin tidak mendukung HEAD.',
  tool_headers_rules_item_2: 'Ikuti redirect dan laporkan URL akhir.',
  tool_headers_rules_item_3: 'Blokir localhost dan IP jaringan privat.',
  tool_headers_rules_item_4: 'Tampilkan header umum: Cache-Control, CORS, CSP, dll.',
  tool_headers_example_title: 'Contoh',
  tool_headers_example:
    'contoh.com → status 200, URL akhir sama; header berisi content-type: text/html dan mungkin cache-control atau header keamanan tergantung origin.',
  tool_headers_usecases_title: 'Kapan dipakai',
  tool_headers_usecase_1: 'Sebelum rilis, pastikan Cache-Control atau cache CDN sudah benar.',
  tool_headers_usecase_2: 'Debug preflight CORS dengan membaca Access-Control-* di respons.',
  tool_headers_usecase_3: 'Cek apakah CSP, HSTS, atau header keamanan lain benar-benar terkirim.',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semantik HTTP',
  tool_headers_ref_mdn_label: 'MDN — Header HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP Caching',
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
  tool_yaml_json_title: 'YAML ke JSON & sebaliknya — aturan tipe, multi-dokumen',
  tool_yaml_json_description:
    'Konversi YAML ke JSON atau JSON ke YAML di browser. Langkah: pilih arah, tempel config, aktifkan tipe aman JSON bila perlu, lalu salin atau unduh. Multi-dokumen dipisah --- jadi array JSON. Contoh: ubah peta layanan singkat jadi JSON berindentasi untuk klien API — tempelan tetap lokal, tidak diunggah.',
  tool_yaml_json_article:
    'YAML ↔ JSON dua arah dengan aturan tipe yang jelas, kebijakan multi-dokumen, dan catatan jujur soal pemrosesan lokal. Untuk tukar config — bukan URL tipis kedua.',
  tool_yaml_json_dir_label: 'Arah konversi',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_convert: 'Konversi',
  tool_yaml_json_copy_json: 'Salin JSON',
  tool_yaml_json_copy_yaml: 'Salin YAML',
  tool_yaml_json_copy_done: 'Tersalin',
  tool_yaml_json_download_json: 'Unduh JSON',
  tool_yaml_json_download_yaml: 'Unduh YAML',
  tool_yaml_json_sample: 'Muat contoh',
  tool_yaml_json_clear: 'Hapus',
  tool_yaml_json_json_safe: 'Tipe aman JSON (yes/no telanjang tetap string)',
  tool_yaml_json_indent_label: 'Indentasi',
  tool_yaml_json_indent_2: '2 spasi',
  tool_yaml_json_indent_4: '4 spasi',
  tool_yaml_json_indent_minify: 'Minifikasi JSON',
  tool_yaml_json_yaml_input_label: 'Input YAML',
  tool_yaml_json_json_output_label: 'Output JSON',
  tool_yaml_json_json_input_label: 'Input JSON',
  tool_yaml_json_yaml_output_label: 'Output YAML',
  tool_yaml_json_yaml_placeholder: 'nama: demo\naktif: true\ndaftar:\n  - a\n  - b',
  tool_yaml_json_json_placeholder: '{\n  "judul": "Halo",\n  "jumlah": 2\n}',
  tool_yaml_json_sample_yaml: 'nama: demo\naktif: true\ndaftar:\n  - a\n  - b',
  tool_yaml_json_sample_json: '{\n  "judul": "Halo",\n  "jumlah": 2\n}',
  tool_yaml_json_large_warn:
    'Tempelan sangat besar (>200k karakter). Konversi bisa terasa lambat — coba cuplikan lebih pendek.',
  tool_yaml_json_need_lib: 'Gagal memuat js-yaml. Periksa koneksi lalu muat ulang halaman.',
  tool_yaml_json_empty: 'Tempel dulu isinya.',
  tool_yaml_json_how_title: 'Cara pakai',
  tool_yaml_json_how_body:
    'Konversi berjalan di tab ini lewat js-yaml. Pilih YAML → JSON atau sebaliknya, tempel teks, lalu salin atau unduh hasilnya. Aliran multi-dokumen dipisah ---: satu dokumen → satu nilai JSON; dua atau lebih → array JSON. Kesalahan YAML bisa menampilkan baris dan kolom jika parser memberi mark.',
  tool_yaml_json_rules_title: 'Aturan yang perlu Anda tahu',
  tool_yaml_json_rules_body:
    'Sebelum mengandalkan hasil, pahami aturan tipe dan multi-dokumen. Default mengikuti skema klasik js-yaml; centang «Tipe aman JSON» agar yes/no tanpa tanda kutip tetap string. Kedua arah satu halaman — bukan doorway terpisah.',
  tool_yaml_json_rules_item_1:
    'Tipe: dengan skema DEFAULT, yes/no/on/off telanjang dan beberapa skalar mirip tanggal bisa jadi boolean atau tipe lain. Skema aman JSON menjaga skalar tanpa kutip sebagai string kecuali ditipekan eksplisit.',
  tool_yaml_json_rules_item_2:
    'Multi-dokumen: loadAll — satu dokumen → nilai JSON itu; dua atau lebih → array JSON. Kami tidak diam-diam membuang dokumen setelah yang pertama.',
  tool_yaml_json_rules_item_3:
    'Hilang saat bolak-balik: komentar tidak masuk JSON; anchor/alias mengembang jadi nilai duplikat; urutan kunci dan gaya bisa berubah setelah dump.',
  tool_yaml_json_rules_item_4:
    'Privasi: tempelan tidak diunggah. Mengambil js-yaml dari CDN hanya mengunduh kode pustaka, bukan teks config Anda.',
  tool_yaml_json_example_title: 'Contoh',
  tool_yaml_json_example:
    'YAML `nama: demo` plus daftar `daftar: [a, b]` jadi JSON `{"nama":"demo","daftar":["a","b"]}`. JSON `{"judul":"Halo","jumlah":2}` di-dump ke YAML berindentasi. Batas: `flag: yes` telanjang jadi boolean true di DEFAULT; aktifkan tipe aman JSON agar string "yes" tetap.',
  tool_yaml_json_usecases_title: 'Kapan dipakai',
  tool_yaml_json_usecase_1:
    'DevOps: ubah YAML Kubernetes multi-resource (dipisah ---) jadi array JSON untuk skrip.',
  tool_yaml_json_usecase_2:
    'Pengembang: susun ulang payload JSON API jadi YAML terbaca sebelum mengedit config manual.',
  tool_yaml_json_usecase_3:
    'Pipeline data / AI: jembatani parameter YAML yang diedit manusia dengan tooling yang hanya menerima JSON.',
  tool_bmi_title: 'Kalkulator BMI — Cara menghitung indeks massa tubuh',
  tool_bmi_description:
    'Hitung indeks massa tubuh (BMI) dengan rumus skrining dewasa. Langkah: pilih satuan metrik atau imperial, masukkan berat dan tinggi, lihat BMI, lalu bandingkan dengan kategori umum. Contoh: 70 kg dan 175 cm → BMI 22,9 (normal). Hanya edukasi skrining, bukan diagnosis.',
  tool_bmi_article:
    'Kalkulator gratis ini menjelaskan cara BMI dewasa dihitung dari berat dan tinggi: rumus metrik/imperial, batas kategori, serta keterbatasan (atlet, anak). Perhitungan di browser Anda, data tidak diunggah.',
  tool_bmi_weight_label: 'Berat (kg)',
  tool_bmi_weight_placeholder: 'Masukkan berat dalam kilogram',
  tool_bmi_height_label: 'Tinggi (cm)',
  tool_bmi_height_placeholder: 'Masukkan tinggi dalam sentimeter',
  tool_bmi_calculate: 'Hitung BMI',
  tool_bmi_how_title: 'Cara kerja',
  tool_bmi_how_body:
    'Pilih metrik atau imperial, isi berat dan tinggi, lalu hitung. Alat memakai rumus BMI dewasa standar, menampilkan satu desimal, dan memetakan ke rentang skrining yang lazim. Semua di browser; ukuran Anda tidak dikirim.',
  tool_bmi_formula_title: 'Rumus BMI dan kategori dewasa',
  tool_bmi_formula_body:
    'Metrik: BMI = berat (kg) ÷ tinggi (m)². Imperial: BMI = 703 × berat (lb) ÷ tinggi (in)². Batas dewasa di sini mengikuti rentang skrining yang umum dipublikasikan.',
  tool_bmi_formula_item_1: 'Kurus: BMI < 18,5',
  tool_bmi_formula_item_2: 'Normal: BMI 18,5–24,9',
  tool_bmi_formula_item_3: 'Gemuk: BMI 25–29,9',
  tool_bmi_formula_item_4: 'Obesitas: BMI ≥ 30',
  tool_bmi_example_title: 'Contoh',
  tool_bmi_example:
    'Contoh (metrik): berat 70 kg, tinggi 175 cm → tinggi = 1,75 m → BMI = 70 / (1,75²) ≈ 22,9 → rentang normal skrining.',
  tool_bmi_usecases_title: 'Cocok untuk',
  tool_bmi_usecase_1: 'Cek cepat sebelum kontrol rutin (skrining saja, bukan diagnosis).',
  tool_bmi_usecase_2: 'Catat BMI awal saat mulai program kebugaran.',
  tool_bmi_usecase_3: 'Verifikasi pengukuran yang sama dalam satuan metrik dan imperial.',
  tool_bmi_ref_who_label: 'WHO — Lembar fakta obesitas dan kelebihan berat',
  tool_bmi_ref_cdc_label: 'CDC — Kategori BMI dewasa',
  bmi_chart_title: 'Kategori BMI dewasa (skrining)',
  bmi_underweight: 'Kurus',
  bmi_normal: 'Normal',
  bmi_overweight: 'Gemuk',
  bmi_obese: 'Obesitas',
  bmi_metric_units: 'Metrik',
  bmi_imperial_units: 'Imperial',
  bmi_unit_group_label: 'Satuan',
  bmi_result_label: 'BMI Anda',
  bmi_invalid_input: 'Masukkan berat dan tinggi positif untuk menghitung.',
  bmi_weight_lbs: 'Berat (lb)',
  bmi_weight_lbs_placeholder: 'Berat dalam pon',
  bmi_height_ft: 'Tinggi (ft)',
  bmi_height_ft_placeholder: 'Kaki',
  bmi_height_in: 'Tinggi (in)',
  bmi_height_in_placeholder: 'Inci',
  bmi_interpretation_underweight:
    'Hasil skrining: rentang kurus. BMI bukan diagnosis — konsultasikan tenaga kesehatan jika perlu.',
  bmi_interpretation_normal:
    'Hasil skrining: rentang normal untuk dewasa. BMI sendiri tidak mengukur lemak tubuh atau kebugaran.',
  bmi_interpretation_overweight:
    'Hasil skrining: rentang gemuk. BMI bukan diagnosis — konsultasikan tenaga kesehatan jika perlu.',
  bmi_interpretation_obese:
    'Hasil skrining: rentang obesitas. BMI bukan diagnosis — konsultasikan tenaga kesehatan jika perlu.',
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
  tool_headers_faq_q1: 'Apa yang terlihat dari header respons HTTP?',
  tool_headers_faq_a1:
    'Metadata dari server: tipe konten, aturan cache, redirect, dan kebijakan seperti HSTS, CSP, atau CORS.',
  tool_headers_faq_q2: 'Apakah alat ini mengunduh body halaman penuh?',
  tool_headers_faq_a2:
    'Utamakan HEAD, GET hanya bila perlu. Tujuannya inspeksi header, bukan scraping atau menyimpan body.',
  tool_headers_faq_q3: 'Mengapa localhost dan IP privat diblokir?',
  tool_headers_faq_a3:
    'Jaringan privat diblokir agar worker tidak dipakai memindai host internal.',
  tool_headers_faq_q4: 'Sama dengan DevTools browser?',
  tool_headers_faq_a4:
    'Belum tentu. Anda melihat dari edge kami; CDN, geo, atau filter bot bisa beda dengan browser lokal.',
  tool_headers_faq_q5: 'Apakah URL yang saya cek disimpan?',
  tool_headers_faq_a5:
    'Permintaan singkat di edge tanpa produk riwayat URL. Jangan tempel rahasia di query string.',
  tool_yaml_json_faq_q1: 'Apa yang hilang kalau bolak-balik?',
  tool_yaml_json_faq_a1:
    'Komentar tidak pernah bertahan di JSON. Anchor mengembang jadi nilai berulang. Dump JSON kembali ke YAML tidak memulihkan komentar atau nama anchor asli.',
  tool_yaml_json_faq_q2: 'Bagaimana multi-dokumen (---) ditangani?',
  tool_yaml_json_faq_a2:
    'Dokumen dipisah --- dibaca dengan loadAll. Satu dokumen → satu nilai JSON; dua atau lebih → array JSON. Dokumen setelah yang pertama tidak dibuang.',
  tool_yaml_json_faq_q3: 'Apakah tempelan meninggalkan browser?',
  tool_yaml_json_faq_a3:
    'Konversi tetap di tab. CDN boleh menyajikan js-yaml; permintaan itu hanya mengunduh kode — bukan mengunggah teks YAML atau JSON Anda.',
  tool_yaml_json_faq_q4: 'Apakah yes atau no telanjang jadi boolean?',
  tool_yaml_json_faq_a4:
    'Sering ya di skema DEFAULT js-yaml — yes/no/on/off tanpa kutip bisa jadi boolean. Centang «Tipe aman JSON» agar skalar itu tetap string kecuali ditipekan eksplisit.',
  tool_yaml_json_faq_q5: 'Dari mana nomor baris error?',
  tool_yaml_json_faq_a5:
    'YAML tidak valid memunculkan mark parser berisi baris dan kolom bila tersedia. JSON tidak valid dilaporkan JSON.parse tanpa mark gaya YAML.',

  tool_csv_json_title: 'Konverter CSV ↔ JSON — tipe, pemisah, lokal',
  tool_csv_json_description:
    'Konversi CSV ke JSON atau JSON ke CSV di browser. Langkah: pilih arah, tempel atau unggah, atur pemisah dan header, lalu salin atau unduh. Menangani kolom bertanda kutip dengan koma, titik koma, dan tab; dari JSON ke CSV, objek bersarang diratakan menjadi kolom. Contoh: ubah lembar produk (sku, judul, harga) menjadi array JSON — data tetap lokal.',
  tool_csv_json_article:
    'CSV ↔ JSON dua arah dengan aturan jelas soal tipe, pemisah, dan tanda kutip, serta cara JSON bersarang diratakan menjadi kolom. Untuk pertukaran spreadsheet ↔ API, bukan URL kosong tambahan.',
  tool_csv_json_dir_label: 'Arah konversi',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_convert: 'Konversi',
  tool_csv_json_copy_json: 'Salin JSON',
  tool_csv_json_copy_csv: 'Salin CSV',
  tool_csv_json_copy_done: 'Tersalin',
  tool_csv_json_download_json: 'Unduh JSON',
  tool_csv_json_download_csv: 'Unduh CSV',
  tool_csv_json_sample: 'Muat contoh',
  tool_csv_json_clear: 'Bersihkan',
  tool_csv_json_delimiter_label: 'Pemisah',
  tool_csv_json_delimiter_auto: 'Deteksi otomatis',
  tool_csv_json_delimiter_comma: 'Koma ,',
  tool_csv_json_delimiter_semicolon: 'Titik koma ;',
  tool_csv_json_delimiter_tab: 'Tab',
  tool_csv_json_header: 'Baris pertama sebagai header',
  tool_csv_json_typing: 'Deteksi tipe (angka/boolean)',
  tool_csv_json_indent_label: 'Indentasi',
  tool_csv_json_indent_2: '2 spasi',
  tool_csv_json_indent_4: '4 spasi',
  tool_csv_json_indent_minify: 'Perkecil JSON',
  tool_csv_json_csv_input_label: 'Masukan CSV',
  tool_csv_json_json_output_label: 'Keluaran JSON',
  tool_csv_json_json_input_label: 'Masukan JSON',
  tool_csv_json_csv_output_label: 'Keluaran CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_large_warn:
    'Masukan sangat besar (lebih dari 2 juta karakter). Konversi bisa terasa lambat; coba file yang lebih kecil.',
  tool_csv_json_need_lib: 'Gagal memuat Papa Parse. Periksa koneksi lalu muat ulang.',
  tool_csv_json_empty: 'Tempel dulu isinya.',
  tool_csv_json_how_title: 'Cara kerja',
  tool_csv_json_how_body:
    'Pilih CSV → JSON atau JSON → CSV; penguraian dan pembuatan berjalan di tab ini dengan Papa Parse. Untuk CSV, pilih pemisah (atau deteksi otomatis), apakah baris pertama header, dan apakah angka/boolean dideteksi. Untuk JSON, objek bersarang menjadi kolom jalur titik dan kolom adalah gabungan semua kunci.',
  tool_csv_json_rules_title: 'Aturan yang perlu diketahui',
  tool_csv_json_rules_body:
    'Yang bisa diharapkan saat mengonversi: bagaimana tipe sel ditangani, pemisah dan aturan tanda kutip mana yang berlaku, dan bagaimana JSON bersarang dipetakan ke kolom.',
  tool_csv_json_rules_item_1:
    'Tipe: sel CSV bawaannya teks. Aktifkan “Deteksi tipe” untuk angka/boolean, tetapi 007 menjadi 7 dan deret angka panjang bisa kehilangan presisi; matikan untuk SKU, kode pos, dan nomor telepon.',
  tool_csv_json_rules_item_2:
    'Pemisah: koma, titik koma (umum di Excel Eropa), dan tab (TSV); deteksi otomatis menebak dari teks. Kolom yang memuat pemisah, tanda kutip, atau baris baru dibungkus tanda kutip ganda sesuai RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: objek diratakan dengan jalur titik (dim.w, dim.h); array ditulis sebagai string JSON dalam satu sel; kolom adalah gabungan semua kunci, yang kosong dibiarkan kosong.',
  tool_csv_json_rules_item_4:
    'Privasi: teks dan file Anda tidak diunggah. Mengambil Papa Parse dari CDN hanya mengunduh kode pustaka, bukan data Anda.',
  tool_csv_json_example_title: 'Contoh',
  tool_csv_json_example:
    'CSV `sku,title,price` dengan baris `A-001,"Chair, oak",129.9` menjadi JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (tanpa tipe, price tetap teks; aktifkan untuk angka 129.9). Sebaliknya: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` menghasilkan header `sku,dim.w,dim.h` dengan baris `A-001,40,90`.',
  tool_csv_json_usecases_title: 'Cocok untuk',
  tool_csv_json_usecase_1:
    'E-commerce: ubah lembar produk hasil ekspor (sku, judul, harga) menjadi array JSON untuk API toko atau marketplace.',
  tool_csv_json_usecase_2:
    'Developer: ubah respons JSON menjadi CSV untuk spreadsheet, rekonsiliasi, atau serah terima.',
  tool_csv_json_usecase_3:
    'Data/operasional: bawa CSV laporan atau event (koma, titik koma, atau TSV) ke JSON untuk pipeline, dengan koma dan baris baru yang aman.',
  tool_csv_json_faq_q1: 'Apakah angka, nol di depan, dan ID tetap utuh?',
  tool_csv_json_faq_a1:
    'Secara bawaan setiap sel diperlakukan sebagai teks, jadi 007 dan ID panjang tetap utuh. Jika “Deteksi tipe” aktif, nilai mirip angka menjadi angka: 007 jadi 7 dan deret digit sangat panjang bisa kehilangan presisi. Matikan untuk SKU, kode pos, dan nomor telepon.',
  tool_csv_json_faq_q2: 'Bisakah menangani titik koma atau tab, bukan hanya koma?',
  tool_csv_json_faq_a2:
    'Bisa. Pilih koma, titik koma, atau tab, atau biarkan deteksi otomatis dan Papa Parse menebak dari teks. Titik koma umum pada ekspor Excel Eropa; tab berarti TSV.',
  tool_csv_json_faq_q3: 'Bagaimana kolom berisi koma, tanda kutip, atau baris baru ditangani?',
  tool_csv_json_faq_a3:
    'Dibungkus tanda kutip ganda dan tanda kutip di dalamnya digandakan, mengikuti RFC 4180. Jadi judul seperti Chair, oak tetap dalam satu kolom, bukan terpecah jadi dua.',
  tool_csv_json_faq_q4: 'Bagaimana JSON bersarang menjadi kolom CSV?',
  tool_csv_json_faq_a4:
    'Objek diratakan menjadi kolom jalur titik (dim.w, dim.h). Array ditulis sebagai string JSON dalam satu sel. Kolom adalah gabungan kunci semua record, dan record tanpa kunci itu dibiarkan kosong.',
  tool_csv_json_faq_q5: 'Apakah data saya keluar dari browser?',
  tool_csv_json_faq_a5:
    'Tidak. Penguraian tetap di tab ini dan file yang dipilih dibaca secara lokal. CDN mungkin menyediakan Papa Parse; permintaan itu hanya mengunduh kode, bukan mengunggah CSV atau JSON Anda.',
  tool_bmi_faq_q1: 'Apa rumus BMI?',
  tool_bmi_faq_a1: 'Metrik: BMI = berat(kg) / tinggi(m)². Imperial: BMI = 703 × berat(lb) / tinggi(in)².',
  tool_bmi_faq_q2: 'Apa arti kategori BMI?',
  tool_bmi_faq_a2:
    'Batas umum dewasa: kurus <18,5; normal 18,5–24,9; gemuk 25–29,9; obesitas ≥30. Ini acuan skrining, bukan diagnosis.',
  tool_bmi_faq_q3: 'Apakah BMI akurat untuk atlet?',
  tool_bmi_faq_a3:
    'Tidak selalu. BMI tidak membedakan otot dan lemak. Atlet bisa masuk rentang tinggi dengan lemak rendah — minta penilaian personal ke tenaga medis.',
  tool_bmi_faq_q4: 'Bisa dipakai untuk anak atau kehamilan?',
  tool_bmi_faq_a4:
    'Batas dewasa ini tidak untuk anak, remaja, atau kehamilan. Gunakan grafik usia dan panduan klinis.',
  tool_bmi_disclaimer:
    'Kalkulator BMI ini hanya untuk skrining edukatif dewasa. Bukan saran medis, tidak mendiagnosis penyakit, dan tidak menggantikan profesional kesehatan.',
  tool_bmi_references:
    'Lembar fakta WHO tentang obesitas; panduan CDC kategori BMI dewasa; rumus metrik dan imperial standar.',

  /* --- IG: ip / roi / mr --- */
tool_ip_address_title: 'Berapa IP saya — Lihat IP publik Anda',
  tool_ip_address_description:
    'Lihat IP publik yang diamati edge kami untuk koneksi Anda. Proses: buka halaman atau ketuk Muat ulang; worker membaca alamat klien tepercaya. Contoh: bisa menampilkan 203.0.113.10. VPN/proxy menampilkan IP keluar, bukan IP LAN.',
  tool_ip_address_article:
    'Halaman ini menampilkan IP egress publik menurut edge kami — berguna untuk cek VPN, lapor ke support, atau debug allowlist. Bukan produk geolokasi atau ISP.',
  tool_ip_address_how_title: 'Cara kerja',
  tool_ip_address_how_body:
    'Browser memanggil API edge kami. Worker mengembalikan IP klien yang terikat pada koneksi (bukan hanya header yang bisa dipalsukan). Muat ulang kapan saja; tanpa akun.',
  tool_ip_address_rules_title: 'Arti IP ini',
  tool_ip_address_rules_body:
    'Nilainya adalah alamat publik yang dikaitkan edge dengan koneksi TCP/TLS Anda — identitas egress yang biasanya dilihat situs. Batasan:',
  tool_ip_address_rules_item_1: 'Dengan VPN atau proxy HTTP, Anda melihat IP keluar penyedia, bukan LAN rumah.',
  tool_ip_address_rules_item_2: 'Di balik NAT, banyak perangkat berbagi satu IP publik; 192.168.x.x tidak muncul di sini.',
  tool_ip_address_rules_item_3: 'Kami mengutamakan IP klien edge, bukan X-Forwarded-For saja (bisa dipalsukan).',
  tool_ip_address_rules_item_4: 'IPv4 atau IPv6 bisa muncul tergantung jalur; dual-stack bisa berganti setelah reconnect.',
  tool_ip_address_example_title: 'Contoh',
  tool_ip_address_example:
    'Contoh dokumentasi: edge melihat 203.0.113.10 (alamat cadangan TEST-NET-3). Hasil langsung Anda adalah IP publik egress nyata.',
  tool_ip_address_usecases_title: 'Kapan dipakai',
  tool_ip_address_usecase_1: 'Pastikan VPN/proxy benar-benar mengubah IP publik.',
  tool_ip_address_usecase_2: 'Beritahu support atau firewall IP publik yang perlu di-allowlist.',
  tool_ip_address_usecase_3: 'Cek cepat saat debug akses jarak jauh atau allowlist API.',
  tool_ip_address_ref_mdn_label: 'MDN — Header X-Forwarded-For (risiko spoofing)',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — Apa itu alamat IP?',
  ip_label: 'IP publik Anda',
  fetch_ip_button: 'Muat ulang',
  fetching_message: 'Mengambil…',
  tool_ip_address_faq_q1: 'Bagaimana halaman ini mendapatkan IP saya?',
  tool_ip_address_faq_a1:
    'Browser meminta API edge; worker mengembalikan IP klien tepercaya untuk koneksi itu.',
  tool_ip_address_faq_q2: 'Kenapa beda dengan IP LAN?',
  tool_ip_address_faq_a2:
    'Alamat privat (mis. 192.168.x.x) tetap di jaringan lokal lewat NAT. Di sini hanya IP publik.',
  tool_ip_address_faq_q3: 'Bagaimana jika saya pakai VPN/proxy?',
  tool_ip_address_faq_a3:
    'Umumnya Anda melihat IP keluar VPN/proxy. Itu wajar: situs melihat identitas egress yang sama.',
  tool_ip_address_faq_q4: 'Apakah IP saya disimpan?',
  tool_ip_address_faq_a4:
    'Pencarian adalah permintaan singkat di edge. Kami tidak menyediakan riwayat IP.',

  tool_roi_title: 'Kalkulator ROI — Cara menghitung return on investment',
  tool_roi_description:
    'Hitung ROI sederhana dengan (Keuntungan − Biaya) / Biaya × 100%, atau (Nilai akhir − Awal) / Awal × 100%. Proses: masukkan biaya dan nilai akhir (atau keuntungan bersih), lalu tinjau asumsi pajak, biaya, dan waktu. Contoh: biaya 1000, akhir 1300 → ROI 30%. Hanya ilustrasi edukasi — bukan saran investasi.',
  tool_roi_article:
    'ROI sederhana mengekspresikan keuntungan bersih terhadap biaya dalam persen. Cocok untuk rekap kasar kampanye/proyek; bukan IRR/NPV multiperiode.',
  tool_roi_initial_label: 'Investasi awal (biaya)',
  tool_roi_initial_placeholder: 'mis. 1000',
  tool_roi_final_label: 'Nilai akhir',
  tool_roi_final_placeholder: 'mis. 1300',
  tool_roi_gain_label: 'Keuntungan bersih (opsional)',
  tool_roi_gain_placeholder: 'Jika diketahui, mengganti akhir − awal',
  tool_roi_calculate: 'Hitung',
  tool_roi_result_label: 'ROI',
  tool_roi_how_title: 'Cara kerja',
  tool_roi_how_body:
    'Masukkan biaya dan nilai akhir atau keuntungan bersih yang diketahui. ROI = bersih / biaya × 100%. Jika kosong, bersih = akhir − awal. Biaya nol ditolak.',
  tool_roi_formula_title: 'Rumus dan asumsi',
  tool_roi_formula_body:
    'ROI = (Nilai akhir − Investasi awal) / Investasi awal × 100%, atau Keuntungan bersih / Biaya × 100%. Perhatikan:',
  tool_roi_formula_item_1: 'Pajak: tidak diestimasi — masukkan angka setelah pajak jika itu target Anda.',
  tool_roi_formula_item_2: 'Waktu: ROI sederhana mengabaikan periode holding; bukan return tahunan.',
  tool_roi_formula_item_3: 'Biaya: masukkan komisi/platform fee ke biaya atau nilai akhir sendiri.',
  tool_roi_formula_item_4: 'Arus kas multiperiode dan IRR/NPV di luar cakupan persentase satu periode ini.',
  tool_roi_example_title: 'Contoh',
  tool_roi_example:
    'Contoh: biaya 1000, nilai akhir 1300 → keuntungan 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_usecases_title: 'Kapan dipakai',
  tool_roi_usecase_1: 'Pemasaran: ROI kasar kampanye setelah tahu belanja dan pendapatan teratribusi.',
  tool_roi_usecase_2: 'Tugas kuliah: latihan persentase ROI dasar dengan angka tetap.',
  tool_roi_usecase_3: 'Rekap proyek: ringkas satu inisiatif sebagai pasangan biaya/keuntungan (perkiraan saja).',
  tool_roi_ref_investopedia_label: 'Investopedia — Return on Investment (ROI)',
  tool_roi_ref_guide_label: 'Investopedia — Panduan menghitung ROI',
  tool_roi_interpret_positive: 'ROI positif (untung relatif terhadap biaya) — hanya ilustrasi edukasi.',
  tool_roi_interpret_zero: 'ROI nol — tidak ada untung/rugi pada input ini.',
  tool_roi_interpret_negative: 'ROI negatif (rugi relatif terhadap biaya) — hanya ilustrasi edukasi.',
  tool_roi_zero_cost: 'Investasi awal harus lebih dari nol.',
  tool_roi_faq_q1: 'Rumus ROI apa yang dipakai?',
  tool_roi_faq_a1:
    'ROI = (Akhir − Awal) / Awal × 100%, atau Keuntungan bersih / Biaya × 100% jika Anda mengisi keuntungan.',
  tool_roi_faq_q2: 'Bagaimana dengan pajak, biaya, dan waktu?',
  tool_roi_faq_a2:
    'Kami tidak mengestimasi pajak/biaya — masukkan sendiri. ROI sederhana juga tidak menganualisasi periode.',
  tool_roi_faq_q3: 'Apakah ini saran investasi?',
  tool_roi_faq_a3: 'Bukan. Hasil hanya ilustrasi edukasi, bukan saran investasi/pajak/keuangan.',
  tool_roi_faq_q4: 'Bagaimana jika biaya awal nol?',
  tool_roi_faq_a4: 'ROI tidak terdefinisi (pembagian nol). Masukkan biaya positif.',
  tool_roi_disclaimer:
    'Hasil ROI hanya ilustrasi edukasi dan bukan saran investasi, pajak, atau keuangan. Imbal hasil masa lalu atau hipotetis tidak menjamin hasil di masa depan.',
  tool_roi_references:
    'Definisi dan panduan Investopedia tentang ROI; ROI sederhana = keuntungan bersih / biaya.',

  tool_marginal_revenue_title: 'Kalkulator pendapatan marjinal — Rumus ΔTR / ΔQ',
  tool_marginal_revenue_description:
    'Hitung pendapatan marjinal dengan MR = ΔTR / ΔQ. Proses: masukkan kuantitas dan total pendapatan di dua titik, hitung ΔTR dan ΔQ, lalu bagi. Contoh: Q 10→11, TR 1000→1080 → MR = 80. Hanya edukasi — bukan saran harga.',
  tool_marginal_revenue_article:
    'Pendapatan marjinal adalah perubahan total pendapatan saat kuantitas berubah. Kalkulator ini menampilkan derivasi diskrit dua titik.',
  tool_marginal_revenue_how_title: 'Cara kerja',
  tool_marginal_revenue_how_body:
    'Masukkan kuantitas dan total pendapatan untuk tingkat 1 dan 2. Alat menghitung ΔTR = TR2 − TR1, ΔQ = Q2 − Q1, lalu MR = ΔTR / ΔQ di browser.',
  tool_marginal_revenue_formula_title: 'Derivasi rumus',
  tool_marginal_revenue_formula_body:
    'Menurut definisi, pendapatan marjinal mengukur perubahan total pendapatan saat kuantitas berubah. Untuk dua titik:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (perubahan total pendapatan)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (perubahan kuantitas)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ jika ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Langkah diskrit mendekati MR rata-rata pada interval; model kontinu memakai dTR/dQ. MR negatif berarti pendapatan turun saat kuantitas naik.',
  tool_marginal_revenue_example_title: 'Contoh',
  tool_marginal_revenue_example:
    'Contoh: Q₁ = 10, TR₁ = 1000; Q₂ = 11, TR₂ = 1080 → ΔTR = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_usecases_title: 'Kapan dipakai',
  tool_marginal_revenue_usecase_1: 'PR ekonomi: cek tabel kuantitas/pendapatan dua tingkat.',
  tool_marginal_revenue_usecase_2: 'Perkiraan kasar: perubahan pendapatan saat output naik satu unit.',
  tool_marginal_revenue_usecase_3: 'Bandingkan bahasa MR dengan pendapatan rata-rata di mikroekonomi pengantar.',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Marginal Revenue (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principles of Microeconomics (kompetisi)',
  tool_marginal_revenue_q1_label: 'Kuantitas (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'mis. 10',
  tool_marginal_revenue_tr1_label: 'Total pendapatan (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'mis. 1000',
  tool_marginal_revenue_q2_label: 'Kuantitas (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'mis. 11',
  tool_marginal_revenue_tr2_label: 'Total pendapatan (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'mis. 1080',
  tool_marginal_revenue_quantity_label: 'Kuantitas',
  tool_marginal_revenue_revenue_label: 'Total pendapatan',
  tool_marginal_revenue_calculate: 'Hitung MR',
  tool_marginal_revenue_result_label: 'Pendapatan marjinal',
  tool_marginal_revenue_zero_dq: 'ΔQ = 0 — kuantitas harus berbeda antara dua titik.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_faq_q1: 'Apa bedanya dengan pendapatan rata-rata?',
  tool_marginal_revenue_faq_a1:
    'Pendapatan rata-rata adalah TR / Q pada suatu tingkat. Marginal adalah perubahan TR saat Q berubah; hanya berimpit pada kasus khusus.',
  tool_marginal_revenue_faq_q2: 'Bagaimana MR diturunkan di sini?',
  tool_marginal_revenue_faq_a2:
    'MR = ΔTR / ΔQ dengan ΔTR = TR₂ − TR₁ dan ΔQ = Q₂ − Q₁. Ini derivasi diskrit, bukan turunan kontinu.',
  tool_marginal_revenue_faq_q3: 'Bagaimana jika ΔQ nol?',
  tool_marginal_revenue_faq_a3: 'MR tidak terdefinisi jika kuantitas tidak berubah. Pilih dua kuantitas berbeda.',
  tool_marginal_revenue_faq_q4: 'MR positif berarti harus menaikkan output?',
  tool_marginal_revenue_faq_a4:
    'Tidak. Alat ini tidak memberi saran harga/produksi; keputusan laba juga butuh biaya marjinal.',
  tool_marginal_revenue_disclaimer:
    'Kalkulator ini untuk mempelajari konsep mikroekonomi. Bukan saran bisnis, harga, atau investasi.',
  tool_marginal_revenue_references:
    'Entri Investopedia tentang marginal revenue; perlakuan pengantar MR = ΔTR/ΔQ (mis. OpenStax).',

  tool_squarefeet_title: 'Konversi square feet ke m² — Untuk rumah & renovasi',
  tool_squarefeet_description:
    'Ubah luas ruangan antara square feet dan meter persegi untuk listing dan renovasi. Alur: pilih ft/m/in, masukkan panjang × lebar, hitung luas, lalu tampilkan ft² dan m² dengan faktor NIST 1 ft² = 0.09290304 m². Contoh: apartemen 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_article:
    'Perkirakan luas persegi panjang dari panjang dan lebar, lalu konversi antara square feet dan meter persegi. Untuk iklan properti, lantai, dan cat — bukan taksiran harga rumah dan tidak membedakan luas bersih vs kotor.',
  tool_squarefeet_length_label: 'Panjang',
  tool_squarefeet_length_placeholder: 'Masukkan panjang',
  tool_squarefeet_width_label: 'Lebar',
  tool_squarefeet_width_placeholder: 'Masukkan lebar',
  tool_squarefeet_calculate: 'Konversi luas',
  tool_squarefeet_unit_group_label: 'Satuan input',
  unit_feet: 'Kaki',
  unit_meters: 'Meter',
  unit_inches: 'Inci',
  sqft_unit: 'sq ft',
  tool_squarefeet_result_note: 'Dibulatkan dua desimal. Faktor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_invalid_input: 'Masukkan panjang dan lebar positif.',
  tool_squarefeet_usage_title: 'Cara pakai',
  tool_squarefeet_usage: 'Pilih satuan, masukkan panjang dan lebar untuk mendapat sq ft plus setara m².',
  tool_squarefeet_how_title: 'Cara kerja',
  tool_squarefeet_how_body:
    'Pilih apakah ukuran dalam kaki, meter, atau inci. Kalikan panjang × lebar setelah keduanya diubah ke kaki, lalu konversi ke m² dengan faktor SI. Input kosong atau negatif ditolak.',
  tool_squarefeet_formula_title: 'Rumus luas dan faktor konversi',
  tool_squarefeet_formula_body:
    'Luas (ft²) = panjang (ft) × lebar (ft). Dalam meter: ft² = (L×W) ÷ 0.09290304. Dalam inci: bagi tiap sisi dengan 12. Faktor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Input kaki: luas_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Input meter: luas_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Input inci: luas_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = luas_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_example_title: 'Contoh',
  tool_squarefeet_example:
    'Listing: apartemen 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Ruangan: 10 ft × 12 ft = 120 sq ft ≈ 11,15 m².',
  tool_squarefeet_usecases_title: 'Kapan berguna',
  tool_squarefeet_usecase_1: 'Membandingkan listing AS ber-satuan sq ft dengan iklan lokal ber-m².',
  tool_squarefeet_usecase_2: 'Memperkirakan lantai/karpet ruangan persegi panjang sebelum pesan material.',
  tool_squarefeet_usecase_3: 'Cek kasar cat atau renovasi saat gambar campur satuan.',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Panduan Sistem Satuan Internasional (SI)',
  tool_squarefeet_faq_q1: 'Faktor konversi ft² ↔ m² yang dipakai?',
  tool_squarefeet_faq_a1: 'Tepat 1 ft² = 0.09290304 m² (panduan SI / NIST). Hasil ditampilkan dua desimal.',
  tool_squarefeet_faq_q2: 'Apakah membedakan luas bersih dan kotor?',
  tool_squarefeet_faq_a2: 'Tidak. Hanya mengonversi luas datar persegi panjang.',
  tool_squarefeet_faq_q3: 'Bisa untuk menaksir harga rumah?',
  tool_squarefeet_faq_a3: 'Tidak. Konversi luas bukan valuasi atau model harga.',
  tool_squarefeet_faq_q4: 'Bagaimana ruang berbentuk L?',
  tool_squarefeet_faq_a4: 'Pecah jadi beberapa persegi panjang, konversi masing-masing, lalu jumlahkan.',
  tool_percentage_change_title: 'Kalkulator perubahan persentase — Dari nilai lama ke baru',
  tool_percentage_change_description:
    'Hitung kenaikan atau penurunan persen dari nilai lama ke nilai baru. Alur: masukkan keduanya, hitung (baru − lama) / lama × 100, lalu baca tandanya. Contoh: 80 → 100 = +25%. Cocok untuk pendapatan MoM, DAU, dan harga — bukan poin persentase.',
  tool_percentage_change_article:
    'Perubahan persentase relatif menjawab seberapa jauh metrik bergerak dibanding baseline. Masukkan nilai lama dan baru; rumus (baru − lama) / lama × 100. Untuk KPI, bukan pengganti ROI.',
  tool_percentage_change_original_label: 'Nilai lama',
  tool_percentage_change_new_label: 'Nilai baru',
  tool_percentage_change_calculate: 'Hitung',
  tool_percentage_change_result_label: 'Perubahan persentase',
  tool_percentage_change_example:
    'Contoh lengkap: lama 80, baru 100 → Δ = 20 → (20 / 80) × 100 = kenaikan 25%. Turun: 100 → 80 = −20%.',
  tool_percentage_change_result_invalid: 'Nilai lama harus angka bukan nol.',
  tool_percentage_change_increase: 'kenaikan',
  tool_percentage_change_decrease: 'penurunan',
  tool_percentage_change_no_change: 'tidak berubah',
  tool_percentage_change_abs_note: 'Perubahan absolut: {delta}',
  tool_percentage_change_how_title: 'Cara kerja',
  tool_percentage_change_how_body:
    'Masukkan baseline (lama) dan nilai berikutnya. Kami kurangi, bagi dengan lama, lalu kali 100. Positif naik; negatif turun. Jika lama = 0, perubahan relatif tidak terdefinisi.',
  tool_percentage_change_formula_title: 'Rumus perubahan persentase',
  tool_percentage_change_formula_body:
    'Perubahan % = (baru − lama) / lama × 100. Penyebut memakai nilai lama bertanda (bukan |lama|).',
  tool_percentage_change_formula_item_1: 'Δ = baru − lama',
  tool_percentage_change_formula_item_2: 'persen = (Δ / lama) × 100',
  tool_percentage_change_formula_item_3: 'lama = 0 → tidak terdefinisi (error)',
  tool_percentage_change_example_title: 'Contoh',
  tool_percentage_change_usecases_title: 'Skenario bisnis & data',
  tool_percentage_change_usecase_1: 'Pendapatan bulanan: GMV 80 bulan lalu vs 100 bulan ini → +25%.',
  tool_percentage_change_usecase_2: 'Analitik produk: DAU 50k ke 55k → +10% relatif.',
  tool_percentage_change_usecase_3: 'Harga: dari 40 ke 34 → −15% (bukan “6 poin persentase”).',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_faq_q1: 'Apa rumus perubahan persentase?',
  tool_percentage_change_faq_a1: 'Perubahan % = (baru − lama) / lama × 100. Positif = naik; negatif = turun.',
  tool_percentage_change_faq_q2: 'Mengapa nilai lama tidak boleh nol?',
  tool_percentage_change_faq_a2: 'Pembagian dengan nol tidak terdefinisi. Tanpa baseline tidak ada perubahan relatif.',
  tool_percentage_change_faq_q3: 'Sama dengan poin persentase?',
  tool_percentage_change_faq_a3: 'Tidak. Dari 10% ke 12% adalah +2 poin, tetapi kenaikan relatif 20%.',
  tool_percentage_change_faq_q4: 'Bedanya dengan ROI?',
  tool_percentage_change_faq_a4: 'ROI membandingkan keuntungan dengan biaya investasi. Perubahan persen membandingkan nilai baru apa pun dengan baseline lama.',
  tool_gradient_title: 'Kalkulator gradien — ∇f multivariabel (turunan parsial)',
  tool_gradient_description:
    'Hitung gradien ∇f medan skalar sebagai vektor turunan parsial. Alur: turunkan tiap variabel, susun ∇f, evaluasi di sebuah titik. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); di (1,2) → (4,4). Berguna untuk optimasi dan penjelasan gradient descent ML.',
  tool_gradient_desc:
    'Hitung gradien ∇f medan skalar sebagai vektor turunan parsial. Alur: turunkan tiap variabel, susun ∇f, evaluasi di sebuah titik. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); di (1,2) → (4,4). Berguna untuk optimasi dan penjelasan gradient descent ML.',
  tool_gradient_article:
    'Gradien fungsi skalar multivariabel adalah vektor turunan parsial orde pertama. Menunjuk kenaikan lokal tercepat. Halaman ini bukan kalkulator kemiringan dua titik.',
  tool_gradient_fn_hint: 'Fungsi demo (tetap di kotak interaktif):',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'mis. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'mis. 2',
  tool_gradient_calculate: 'Hitung ∇f',
  tool_gradient_result_label: 'Gradien di titik Anda',
  tool_gradient_result_note: 'Dievaluasi f(x,y)=x²y+3y di ({x}, {y}).',
  tool_gradient_invalid_input: 'Masukkan nilai numerik hingga untuk x dan y.',
  tool_gradient_how_title: 'Cara kerja',
  tool_gradient_how_body:
    'Untuk skalar f, hitung tiap parsial ∂f/∂xᵢ dengan variabel lain tetap, susun ∇f, lalu substitusi koordinat. Kotak memakai f(x,y)=x²y+3y agar bisa dicek manual.',
  tool_gradient_formula_title: 'Rumus gradien multivariabel',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). Dua variabel: ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f adalah naik curam; −∇f dipakai di gradient descent.',
  tool_gradient_formula_item_1: 'Hitung ∂f/∂xᵢ untuk tiap variabel',
  tool_gradient_formula_item_2: 'Susun vektor ∇f',
  tool_gradient_formula_item_3: 'Evaluasi komponen di titik',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_example_title: 'Contoh',
  tool_gradient_example:
    'f(x,y)=x²y+3y. Parsial: ∂f/∂x=2xy, ∂f/∂y=x²+3. Di (1,2): ∇f=(4,4).',
  tool_gradient_usecases_title: 'Optimasi & machine learning',
  tool_gradient_usecase_1: 'Cek parsial PR sebelum langkah optimasi.',
  tool_gradient_usecase_2: 'Jelaskan gradient descent: tiap langkah berlawanan ∇loss.',
  tool_gradient_usecase_3: 'Intuisi fisika: ∇f menunjuk di mana medan skalar naik paling cepat.',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_faq_q1: 'Apa itu gradien dalam kalkulus multivariabel?',
  tool_gradient_faq_a1: '∇f adalah vektor turunan parsial dan menunjuk kenaikan lokal tercepat.',
  tool_gradient_faq_q2: 'Bagaimana menghitung manual?',
  tool_gradient_faq_a2: 'Turunkan tiap variabel dengan yang lain tetap, susun vektor, evaluasi di titik.',
  tool_gradient_faq_q3: 'Sama dengan “gradien” di ML gradient descent?',
  tool_gradient_faq_a3: 'Objek matematikanya sama: ∇ dari loss skalar. Halaman ini mengajarkan definisi, bukan melatih model.',
  tool_gradient_faq_q4: 'Apakah ini kalkulator kemiringan dua titik?',
  tool_gradient_faq_a4: 'Bukan. Kemiringan rise/run alat lain; di sini ∇f adalah vektor parsial.',

};
export default id;