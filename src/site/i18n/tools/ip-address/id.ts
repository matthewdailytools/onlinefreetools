/**
 * i18n tool shard (ip-address / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_ip_address_article:
    'Menampilkan IP egress publik plus perkiraan wilayah dan nama jaringan dari edge (tanpa geo eksternal). Berguna untuk VPN, support, dan allowlist. Bukan geolokasi presisi, cek tagihan operator, atau «cari IP orang lain».',
  tool_ip_address_description:
    'Lihat IP publik dan perkiraan wilayah menurut edge (hanya metadatos Cloudflare request.cf, tanpa API pihak ketiga). Proses: buka halaman atau Muat ulang; worker membaca IP tepercaya dan geo. Contoh: 203.0.113.10 dengan petunjuk negara/ISP jika ada. VPN/proxy menampilkan keluar, bukan 192.168 router.',
  tool_ip_address_example:
    'Contoh: edge melihat 203.0.113.10 (TEST-NET-3) dengan petunjuk negara/ISP jika metadatos ada. Hasil langsung adalah IP egress publik nyata, berlabel IPv4 atau IPv6.',
  tool_ip_address_example_title: 'Contoh',
  tool_ip_address_faq_a1:
    'Di router sering 192.168.x.x — IP privat LAN. Di sini IP keluar publik di internet yang dilihat kebanyakan situs.',
  tool_ip_address_faq_a2:
    'Umumnya Anda melihat IP keluar VPN/proxy, bukan broadband rumah. Muat ulang setelah ganti VPN untuk memastikan.',
  tool_ip_address_faq_a3:
    'Tidak. Satu permintaan mengembalikan satu alamat — IPv4 atau IPv6 sesuai jalur. Dual-stack bisa berubah setelah reconnect.',
  tool_ip_address_faq_a4: 'Browser meminta API edge; worker mengembalikan IP klien tepercaya untuk koneksi itu.',
  tool_ip_address_faq_a5:
    'Pencarian adalah permintaan singkat di edge. Tidak ada riwayat IP; anggap hasil sebagai tampilan sementara.',
  tool_ip_address_faq_a6:
    'Dari metadatos Cloudflare terkait IP ini — sering negara/wilayah/kota dan pemilik ASN. VPN/proxy menampilkan keluar; mobile atau CGNAT bisa meleset. Tanpa database geo eksternal.',
  tool_ip_address_faq_q1: 'Kenapa beda dengan IP di router?',
  tool_ip_address_faq_q2: 'Bagaimana jika saya pakai VPN/proxy?',
  tool_ip_address_faq_q3: 'Apakah IPv4 dan IPv6 sekaligus?',
  tool_ip_address_faq_q4: 'Bagaimana halaman ini mendapatkan IP saya?',
  tool_ip_address_faq_q5: 'Apakah IP saya disimpan?',
  tool_ip_address_faq_q6: 'Seberapa akurat wilayah dan ISP?',
  tool_ip_address_how_body:
    'Browser memanggil API edge. Worker mengembalikan IP klien tepercaya dan, jika ada, negara/wilayah/kota/zona waktu plus organisasi ASN dari request.cf. Satu alamat per permintaan — IPv4 atau IPv6.',
  tool_ip_address_how_title: 'Cara kerja',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — Apa itu alamat IP?',
  tool_ip_address_ref_mdn_label: 'MDN — Header X-Forwarded-For (risiko spoofing)',
  tool_ip_address_rules_body:
    'Nilainya adalah alamat publik yang dikaitkan edge dengan koneksi TCP/TLS Anda — identitas egress yang biasanya dilihat situs. Batasan:',
  tool_ip_address_rules_item_1: 'Dengan VPN atau proxy HTTP, Anda melihat IP keluar penyedia, bukan LAN rumah.',
  tool_ip_address_rules_item_2: 'Di balik NAT, banyak perangkat berbagi satu IP publik; 192.168.x.x tidak muncul di sini.',
  tool_ip_address_rules_item_3: 'Kami mengutamakan IP klien edge, bukan X-Forwarded-For saja (bisa dipalsukan).',
  tool_ip_address_rules_item_4: 'IPv4 atau IPv6 bisa muncul tergantung jalur; dual-stack bisa berganti setelah reconnect.',
  tool_ip_address_rules_item_5:
    'Wilayah dan ISP dari metadatos IP edge — sering tingkat kota; mobile/CGNAT bisa salah; VPN menampilkan node keluar.',
  tool_ip_address_rules_title: 'Arti IP ini',
  tool_ip_address_title: 'Cek IP saya — Alamat IP publik (IPv4/IPv6)',
  tool_ip_address_usecase_1: 'Remote desktop, NAS, atau game: laporkan IP publik saat ini untuk firewall atau port.',
  tool_ip_address_usecase_2: 'Nyalakan/matikan VPN/proxy lalu muat ulang untuk lihat apakah IP keluar berubah.',
  tool_ip_address_usecase_3: 'Sebelum security group cloud, firewall kantor, atau allowlist API.',
  tool_ip_address_usecases_title: 'Kapan dipakai',
};
export default id;
