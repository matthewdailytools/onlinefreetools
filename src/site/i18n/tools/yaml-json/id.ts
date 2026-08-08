/**
 * i18n tool shard (yaml-json / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_yaml_json_article:
    'YAML ↔ JSON dua arah dengan aturan tipe yang jelas, kebijakan multi-dokumen, dan catatan jujur soal pemrosesan lokal. Untuk tukar config — bukan URL tipis kedua.',
  tool_yaml_json_clear: 'Hapus',
  tool_yaml_json_convert: 'Konversi',
  tool_yaml_json_copy_done: 'Tersalin',
  tool_yaml_json_copy_json: 'Salin JSON',
  tool_yaml_json_copy_yaml: 'Salin YAML',
  tool_yaml_json_description:
    'Konversi YAML ke JSON atau JSON ke YAML di browser. Langkah: pilih arah, tempel config, aktifkan tipe aman JSON bila perlu, lalu salin atau unduh. Multi-dokumen dipisah --- jadi array JSON. Contoh: ubah peta layanan singkat jadi JSON berindentasi untuk klien API — tempelan tetap lokal, tidak diunggah.',
  tool_yaml_json_dir_label: 'Arah konversi',
  tool_yaml_json_download_json: 'Unduh JSON',
  tool_yaml_json_download_yaml: 'Unduh YAML',
  tool_yaml_json_empty: 'Tempel dulu isinya.',
  tool_yaml_json_example:
    'YAML `nama: demo` plus daftar `daftar: [a, b]` jadi JSON `{"nama":"demo","daftar":["a","b"]}`. JSON `{"judul":"Halo","jumlah":2}` di-dump ke YAML berindentasi. Batas: `flag: yes` telanjang jadi boolean true di DEFAULT; aktifkan tipe aman JSON agar string "yes" tetap.',
  tool_yaml_json_example_title: 'Contoh',
  tool_yaml_json_faq_a1:
    'Komentar tidak pernah bertahan di JSON. Anchor mengembang jadi nilai berulang. Dump JSON kembali ke YAML tidak memulihkan komentar atau nama anchor asli.',
  tool_yaml_json_faq_a2:
    'Dokumen dipisah --- dibaca dengan loadAll. Satu dokumen → satu nilai JSON; dua atau lebih → array JSON. Dokumen setelah yang pertama tidak dibuang.',
  tool_yaml_json_faq_a3:
    'Konversi tetap di tab. CDN boleh menyajikan js-yaml; permintaan itu hanya mengunduh kode — bukan mengunggah teks YAML atau JSON Anda.',
  tool_yaml_json_faq_a4:
    'Sering ya di skema DEFAULT js-yaml — yes/no/on/off tanpa kutip bisa jadi boolean. Centang «Tipe aman JSON» agar skalar itu tetap string kecuali ditipekan eksplisit.',
  tool_yaml_json_faq_a5:
    'YAML tidak valid memunculkan mark parser berisi baris dan kolom bila tersedia. JSON tidak valid dilaporkan JSON.parse tanpa mark gaya YAML.',
  tool_yaml_json_faq_q1: 'Apa yang hilang kalau bolak-balik?',
  tool_yaml_json_faq_q2: 'Bagaimana multi-dokumen (---) ditangani?',
  tool_yaml_json_faq_q3: 'Apakah tempelan meninggalkan browser?',
  tool_yaml_json_faq_q4: 'Apakah yes atau no telanjang jadi boolean?',
  tool_yaml_json_faq_q5: 'Dari mana nomor baris error?',
  tool_yaml_json_how_body:
    'Konversi berjalan di tab ini lewat js-yaml. Pilih YAML → JSON atau sebaliknya, tempel teks, lalu salin atau unduh hasilnya. Aliran multi-dokumen dipisah ---: satu dokumen → satu nilai JSON; dua atau lebih → array JSON. Kesalahan YAML bisa menampilkan baris dan kolom jika parser memberi mark.',
  tool_yaml_json_how_title: 'Cara pakai',
  tool_yaml_json_indent_2: '2 spasi',
  tool_yaml_json_indent_4: '4 spasi',
  tool_yaml_json_indent_label: 'Indentasi',
  tool_yaml_json_indent_minify: 'Minifikasi JSON',
  tool_yaml_json_json_input_label: 'Input JSON',
  tool_yaml_json_json_output_label: 'Output JSON',
  tool_yaml_json_json_placeholder: '{\\n  "judul": "Halo",\\n  "jumlah": 2\\n}',
  tool_yaml_json_json_safe: 'Tipe aman JSON (yes/no telanjang tetap string)',
  tool_yaml_json_large_warn: 'Tempelan sangat besar (>200k karakter). Konversi bisa terasa lambat — coba cuplikan lebih pendek.',
  tool_yaml_json_need_lib: 'Gagal memuat js-yaml. Periksa koneksi lalu muat ulang halaman.',
  tool_yaml_json_rules_body:
    'Yang bisa diharapkan saat mengonversi: bagaimana nilai tanpa tanda kutip ditentukan tipenya, bagaimana YAML multi-dokumen dipetakan ke JSON, dan di mana konversi bolak-balik bisa kehilangan komentar atau format.',
  tool_yaml_json_rules_item_1:
    'Tipe: dengan skema DEFAULT, yes/no/on/off telanjang dan beberapa skalar mirip tanggal bisa jadi boolean atau tipe lain. Skema aman JSON menjaga skalar tanpa kutip sebagai string kecuali ditipekan eksplisit.',
  tool_yaml_json_rules_item_2:
    'Multi-dokumen: loadAll — satu dokumen → nilai JSON itu; dua atau lebih → array JSON. Kami tidak diam-diam membuang dokumen setelah yang pertama.',
  tool_yaml_json_rules_item_3:
    'Hilang saat bolak-balik: komentar tidak masuk JSON; anchor/alias mengembang jadi nilai duplikat; urutan kunci dan gaya bisa berubah setelah dump.',
  tool_yaml_json_rules_item_4:
    'Privasi: tempelan tidak diunggah. Mengambil js-yaml dari CDN hanya mengunduh kode pustaka, bukan teks config Anda.',
  tool_yaml_json_rules_title: 'Aturan yang perlu Anda tahu',
  tool_yaml_json_sample: 'Muat contoh',
  tool_yaml_json_sample_json: '{\\n  "judul": "Halo",\\n  "jumlah": 2\\n}',
  tool_yaml_json_sample_yaml: 'nama: demo\\naktif: true\\ndaftar:\\n  - a\\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'YAML ke JSON & sebaliknya — aturan tipe, multi-dokumen',
  tool_yaml_json_usecase_1: 'DevOps: ubah YAML Kubernetes multi-resource (dipisah ---) jadi array JSON untuk skrip.',
  tool_yaml_json_usecase_2: 'Pengembang: susun ulang payload JSON API jadi YAML terbaca sebelum mengedit config manual.',
  tool_yaml_json_usecase_3:
    'Pipeline data / AI: jembatani parameter YAML yang diedit manusia dengan tooling yang hanya menerima JSON.',
  tool_yaml_json_usecases_title: 'Kapan dipakai',
  tool_yaml_json_yaml_input_label: 'Input YAML',
  tool_yaml_json_yaml_output_label: 'Output YAML',
  tool_yaml_json_yaml_placeholder: 'nama: demo\\naktif: true\\ndaftar:\\n  - a\\n  - b',
};
export default id;
