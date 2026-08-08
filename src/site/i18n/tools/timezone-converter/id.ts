/**
 * i18n tool shard (timezone-converter / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_timezone_converter_article:
    'Pilih satu momen di zona IANA sumber, lalu lihat waktu yang sama di UTC, New York, London, Tokyo, dan zona lain yang dicentang. Cocok untuk tim remote, korelasi log, dan jam dunia — Intl di browser, tanpa unggah.',
  tool_timezone_converter_clear: 'Hapus',
  tool_timezone_converter_col_local: 'Tanggal & waktu lokal',
  tool_timezone_converter_col_offset: 'Offset UTC',
  tool_timezone_converter_col_zone: 'Zona waktu',
  tool_timezone_converter_compare_zones: 'Bandingkan di zona ini',
  tool_timezone_converter_convert: 'Konversi',
  tool_timezone_converter_desc:
    'Bandingkan satu momen antar zona IANA dengan catatan DST — lokal di browser.',
  tool_timezone_converter_description:
    'Konversi tanggal-waktu dari satu zona IANA ke beberapa zona lain di browser. Proses: masukkan waktu lokal, pilih zona sumber, centang zona perbandingan, lalu Konversi. Contoh: 15 Jun 2026 14:30 Los Angeles → baris New York, London, Tokyo, UTC dengan offset. Menjelaskan celah DST; bukan paket rapat ekspor.',
  tool_timezone_converter_error_dst_gap:
    'Waktu lokal itu tidak ada di zona sumber (jam loncat DST). Pilih jam tetangga.',
  tool_timezone_converter_error_empty: 'Masukkan tanggal-waktu dan centang minimal satu zona perbandingan.',
  tool_timezone_converter_error_invalid: 'Format tidak valid. Gunakan picker atau YYYY-MM-DDTHH:MM.',
  tool_timezone_converter_example:
    'Contoh tetap saat buka: 15 Jun 2026 14:30 America/Los_Angeles → UTC, New York, London, Tokyo dengan jam lokal dan offset UTC menurut aturan IANA tanggal itu.',
  tool_timezone_converter_example_title: 'Contoh',
  tool_timezone_converter_faq_a1:
    'Kami memakai identitas IANA seperti America/New_York atau Asia/Tokyo — sama dengan browser/server. Singkatan EST/JST ambigu; untuk jadwal gunakan nama IANA penuh.',
  tool_timezone_converter_faq_a2:
    'Saat DST mulai, beberapa jam lokal hilang — muncul error jelas. Saat DST berakhir, waktu yang sama bisa dua kali; Intl memilih satu offset — cek rapat penting di hari itu.',
  tool_timezone_converter_faq_a3:
    'Konverter Unix timestamp biasanya epoch ↔ jam, sering UTC. Halaman ini mempertahankan zona sumber bernama dan menampilkan beberapa target sekaligus — untuk «jam berapa di sana?».',
  tool_timezone_converter_faq_a4:
    'Tidak. Ini tabel instan untuk referensi pribadi. Tidak membuat paket rapat berbagi, daftar peserta, atau ekspor ICS.',
  tool_timezone_converter_faq_a5:
    'Ya, semua lokal: hanya Intl.DateTimeFormat bawaan; tidak diunggah.',
  tool_timezone_converter_faq_q1: 'Mengapa nama IANA, bukan EST/PST/GMT?',
  tool_timezone_converter_faq_q2: 'Apa yang terjadi saat pergantian DST?',
  tool_timezone_converter_faq_q3: 'Bedanya dengan konverter Unix timestamp?',
  tool_timezone_converter_faq_q4: 'Bisa ekspor paket zona untuk rapat tim di sini?',
  tool_timezone_converter_faq_q5: 'Apakah tanggal-waktu dikirim ke server?',
  tool_timezone_converter_how_body:
    'Masukkan waktu lokal dan zona IANA sumber. Centang zona perbandingan, lalu Konversi. Tabel menampilkan jam lokal dan offset UTC untuk momen yang sama, dihitung Intl di browser.',
  tool_timezone_converter_how_title: 'Cara kerja',
  tool_timezone_converter_local_tz: 'browser Anda',
  tool_timezone_converter_now: 'Sekarang',
  tool_timezone_converter_rules_body:
    'Aturan IANA, perilaku DST, dan batas dibanding epoch atau ekspor rapat.',
  tool_timezone_converter_rules_item_1:
    'Zona mengikuti basis IANA (tzdata). Offset berubah saat DST — tabel mengikuti tanggal yang Anda masukkan, bukan selisih GMT tetap.',
  tool_timezone_converter_rules_item_2:
    'Celah musim semi: jam tidak ada → error. Tumpang tindih musim gugur: jam ganda → Intl pilih satu offset; verifikasi kasus tepi.',
  tool_timezone_converter_rules_item_3:
    'CST, IST, dll. bisa beda wilayah. Di API dan cron gunakan nama IANA lengkap.',
  tool_timezone_converter_rules_item_4:
    'Privasi: tanpa unggah. Hanya perbandingan baca — bukan penjadwal rapat atau geolokasi IP.',
  tool_timezone_converter_rules_title: 'Aturan yang perlu diketahui',
  tool_timezone_converter_sample: 'Muat contoh',
  tool_timezone_converter_source_time: 'Tanggal & waktu sumber',
  tool_timezone_converter_source_tz: 'Zona waktu sumber',
  tool_timezone_converter_title: 'Konverter Zona Waktu — bandingkan satu momen di seluruh dunia',
  tool_timezone_converter_usecase_1:
    'Tim remote: «15:30 Pasifik» — lihat New York, London, Tokyo sekaligus.',
  tool_timezone_converter_usecase_2:
    'Ops/log: cap waktu zona Chicago — bandingkan UTC dan zona Anda tanpa hitung manual.',
  tool_timezone_converter_usecase_3:
    'Perjalanan: mendarat di Dubai — baca Sydney dan Los Angeles berdampingan untuk panggilan.',
  tool_timezone_converter_usecases_title: 'Kapan cocok',
};
export default id;
