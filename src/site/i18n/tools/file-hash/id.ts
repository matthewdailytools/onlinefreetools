/**
 * i18n tool shard (file-hash / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_file_hash_algo_label: 'Algoritma',
  tool_file_hash_article:
    'Hitung ringkasan hex MD5 dan SHA untuk teks tempel atau file lokal. Bandingkan checksum rilis, sidik jari config, atau verifikasi unduhan — hashing di browser kecuali fetch CDN sekali saat memilih MD5.',
  tool_file_hash_clear: 'Hapus',
  tool_file_hash_copy: 'Salin semua',
  tool_file_hash_copy_done: 'Disalin',
  tool_file_hash_desc:
    'Hash teks atau file secara lokal — ringkasan hex MD5, SHA-1, SHA-256, SHA-384, SHA-512.',
  tool_file_hash_description:
    'Hitung hash teks tempel atau file lokal di browser Anda. Langkah: pilih Teks atau File, centang MD5/SHA, klik Hash, salin hex huruf kecil. Contoh: teks `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. File dibaca lokal; MD5 hanya memuat crypto-js dari CDN jika dipilih.',
  tool_file_hash_empty: 'Tempel teks atau pilih file dulu.',
  tool_file_hash_example:
    'Teks `hello` dengan SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 string sama → `5d41402abc4b2a76b9719d911017c592`. Teks pakai byte UTF-8; file pakai byte mentah.',
  tool_file_hash_example_title: 'Contoh',
  tool_file_hash_faq_a1:
    'MD5 cepat dan masih dipakai untuk checksum lama (daftar `md5sum` lawas, beberapa ETag CDN). Untuk keamanan (tanda tangan, password, bukti manipulasi) pilih SHA-256 atau SHA-512. SHA-1 usang untuk sertifikat tapi bisa muncul di artefak lama.',
  tool_file_hash_faq_a2:
    'File besar dibaca per chunk dengan progress bar. Di atas ~100 MB ada peringatan tapi kami tetap coba. File sangat besar bisa lambat atau kehabisan memori — untuk arsip multi-GB gunakan hasher desktop.',
  tool_file_hash_faq_a3:
    'Teks di-hash sebagai byte UTF-8. File di-hash sebagai aliran byte mentah. Huruf sama di `.txt` bisa beda dari tempel jika encoding atau line ending berbeda.',
  tool_file_hash_faq_a4:
    'Tanpa upload. Teks dan file tetap di perangkat Anda. SHA-* memakai Web Crypto browser. Hanya MD5 yang lazy-load crypto-js dari jsDelivr — konten tidak dikirim ke CDN.',
  tool_file_hash_faq_a5:
    'Keluaran hex huruf kecil tanpa prefiks `0x`, satu baris per algoritma. Sesuai `md5sum` / `sha256sum` umum di Linux dan macOS.',
  tool_file_hash_faq_q1: 'Kapan pakai MD5 vs SHA-256?',
  tool_file_hash_faq_q2: 'Bagaimana file besar ditangani?',
  tool_file_hash_faq_q3: 'Apakah teks tempel sama dengan hash file?',
  tool_file_hash_faq_q4: 'Apakah file atau teks saya diunggah?',
  tool_file_hash_faq_q5: 'Format hex apa yang dihasilkan?',
  tool_file_hash_file_bytes: 'byte',
  tool_file_hash_file_label: 'Pilih file',
  tool_file_hash_hash: 'Hash',
  tool_file_hash_how_body:
    'Pilih Teks untuk hash tempel (byte UTF-8) atau File untuk file lokal (byte mentah). Centang satu atau lebih algoritma lalu Hash. SHA memakai Web Crypto; MD5 memuat library kecil saat pertama kali. Hasil hex kecil, satu baris per algoritma.',
  tool_file_hash_how_title: 'Cara kerja',
  tool_file_hash_input_mode_label: 'Mode input',
  tool_file_hash_large_warn:
    'File di atas 100 MB. Hashing bisa lambat atau boros memori — pertimbangkan alat desktop untuk arsip sangat besar.',
  tool_file_hash_md5_fail: 'Gagal memuat library MD5 dari CDN. Coba SHA-256 atau periksa jaringan.',
  tool_file_hash_no_algo: 'Pilih minimal satu algoritma.',
  tool_file_hash_output_label: 'Ringkasan hex',
  tool_file_hash_progress_label: 'Membaca file…',
  tool_file_hash_rules_body:
    'Pilihan algoritma, semantik byte, dan format keluaran — yang perlu Anda ketahui sebelum membandingkan digest di tempat lain.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex (128 bit). SHA-1 → 40 hex. SHA-256 → 64 hex. SHA-384 → 96 hex. SHA-512 → 128 hex. Semua huruf kecil, tanpa prefiks.',
  tool_file_hash_rules_item_2:
    'Mode teks: UTF-8 via `TextEncoder`. Mode file: seluruh aliran byte. BOM UTF-8 atau CRLF di file mengubah digest vs tempel biasa.',
  tool_file_hash_rules_item_3:
    'Teks kosong atau file nol byte tetap menghasilkan digest input kosong standar per algoritma (hex valid).',
  tool_file_hash_rules_item_4:
    'Privasi: tanpa upload. MD5 satu-satunya jalur yang fetch crypto-js dari CDN; SHA-* hanya Web Crypto bawaan.',
  tool_file_hash_rules_title: 'Aturan yang perlu diharapkan',
  tool_file_hash_sample: 'Muat contoh',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'File',
  tool_file_hash_tab_text: 'Teks',
  tool_file_hash_text_label: 'Input teks',
  tool_file_hash_text_placeholder: 'Tempel teks untuk di-hash sebagai UTF-8…',
  tool_file_hash_title: 'Pemeriksa Hash File — verifikasi ringkasan di browser',
  tool_file_hash_usecase_1:
    'Rilis: bandingkan SHA-256 installer dengan nilai di halaman unduhan.',
  tool_file_hash_usecase_2:
    'Config: sidik jari JSON atau cuplikan `.env` sebelum dan sesudah deploy.',
  tool_file_hash_usecase_3:
    'QA legacy: verifikasi manifest MD5 lama masih cocok dengan artefak yang dibangun ulang.',
  tool_file_hash_usecases_title: 'Cocok untuk',
};
export default id;
