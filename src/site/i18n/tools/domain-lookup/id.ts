/**
 * i18n tool shard (domain-lookup / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
	tool_domain_lookup_article:
		'Lihat catatan DNS live dan data registrasi domain dalam satu halaman. Permintaan lewat edge kami ke DNS-over-HTTPS dan RDAP; kontak sering disembunyikan dan hasil bisa beda dari resolver lokal Anda.',
	tool_domain_lookup_clear: 'Hapus',
	tool_domain_lookup_col_data: 'Data',
	tool_domain_lookup_col_name: 'Nama',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'Tipe',
	tool_domain_lookup_copied: 'Tersalin',
	tool_domain_lookup_copy: 'Salin ringkasan',
	tool_domain_lookup_desc:
		'Cek domain: lihat DNS dan registrasi (WHOIS/RDAP) — A/MX/NS, registrar, dan kedaluwarsa dalam satu tampilan.',
	tool_domain_lookup_description:
		'Cek domain online: periksa catatan DNS live dan data registrasi ala WHOIS lewat RDAP. Langkah: masukkan domain seperti example.com, jalankan DNS-over-HTTPS dan RDAP paralel, lalu bandingkan A/AAAA/MX/NS/TXT dengan registrar, status, dan event kedaluwarsa. Kontak sering disembunyikan; lookup lewat edge kami dan tidak disimpan sebagai riwayat.',
	tool_domain_lookup_domain_label: 'Domain',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'Tidak ada jawaban DNS untuk tipe yang diminta.',
	tool_domain_lookup_dns_fail: 'Lookup DNS gagal.',
	tool_domain_lookup_dns_heading: 'Catatan DNS',
	tool_domain_lookup_err_empty: 'Masukkan nama domain.',
	tool_domain_lookup_err_need_one: 'Pilih DNS, registrasi, atau keduanya.',
	tool_domain_lookup_events: 'Event',
	tool_domain_lookup_example:
		'Contoh: cek example.com → DNS bisa menampilkan A/AAAA/NS publik via DoH; Registrasi bisa menampilkan registrar, kode status, dan event kedaluwarsa/pendaftaran dari RDAP (field bisa disembunyikan).',
	tool_domain_lookup_example_title: 'Contoh',
	tool_domain_lookup_faq_a1:
		'TLD tidak didukung, timeout, atau DNS kosong seperti NXDOMAIN ditampilkan per bagian agar satu kegagalan tidak menutupi yang lain.',
	tool_domain_lookup_faq_a2:
		'Jawaban DNS dari sudut resolver publik (DoH). NS di RDAP adalah yang tercatat di registry. Propagasi atau perubahan baru bisa membuat keduanya berbeda.',
	tool_domain_lookup_faq_a3:
		'Orang masih menyebut WHOIS. Untuk sebagian besar gTLD, registry menerbitkan data serupa lewat RDAP (JSON via HTTPS). Alat ini memakai RDAP; beberapa ccTLD mungkin tanpa RDAP.',
	tool_domain_lookup_faq_a4:
		'Browser memanggil API edge kami; worker menanyakan DoH dan RDAP upstream. Kami tidak menawarkan riwayat domain; anggap hasil sementara.',
	tool_domain_lookup_faq_a5:
		'Sesuai aturan privasi, email dan telepon pemilik sering disembunyikan. Nama registrar, status, dan tanggal biasanya tetap terlihat. Kami tampilkan apa yang dikembalikan server RDAP.',
	tool_domain_lookup_faq_q1: 'Bagaimana jika DNS atau RDAP gagal?',
	tool_domain_lookup_faq_q2: 'Mengapa NS di DNS bisa beda dengan registrasi?',
	tool_domain_lookup_faq_q3: 'Apakah ini lookup WHOIS?',
	tool_domain_lookup_faq_q4: 'Apakah domain yang saya cek disimpan?',
	tool_domain_lookup_faq_q5: 'Mengapa kontak pemilik kosong?',
	tool_domain_lookup_how_body:
		'Masukkan domain lalu pilih DNS, registrasi, atau keduanya. Worker di edge menanyakan Cloudflare DNS-over-HTTPS untuk tipe umum dan server RDAP TLD (via bootstrap IANA) untuk registrar, status, event, dan NS registry. Tiap bagian bisa sukses atau gagal sendiri.',
	tool_domain_lookup_how_title: 'Cara kerjanya',
	tool_domain_lookup_loading: 'Mengecek…',
	tool_domain_lookup_lookup: 'Cek',
	tool_domain_lookup_ns_mismatch:
		'Catatan: jawaban NS DNS berbeda dari NS RDAP — sering karena propagasi belum selesai atau perubahan baru.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'Registrasi',
	tool_domain_lookup_rdap_fail: 'Lookup registrasi (RDAP) gagal.',
	tool_domain_lookup_rdap_heading: 'Registrasi (RDAP)',
	tool_domain_lookup_rdap_link: 'URL RDAP',
	tool_domain_lookup_rdap_ns: 'NS registry',
	tool_domain_lookup_rdap_ok: 'Data registrasi dari RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — DNS over HTTPS API',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — Nama domain',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'Registrar',
	tool_domain_lookup_rules_body:
		'Halaman ini untuk memeriksa DNS resolver dan data registrasi registry. Batas dan artinya:',
	tool_domain_lookup_rules_item_1:
		'Tipe DNS yang ditanya: A, AAAA, CNAME, MX, NS, TXT, SOA (sudut DoH publik).',
	tool_domain_lookup_rules_item_2:
		'Data registrasi dari RDAP, penerus terstruktur WHOIS klasik untuk sebagian besar gTLD.',
	tool_domain_lookup_rules_item_3:
		'Field kontak bisa disembunyikan; jangan anggap detail pemilik lengkap.',
	tool_domain_lookup_rules_item_4:
		'Jawaban DNS dan NS RDAP bisa tidak cocok saat propagasi.',
	tool_domain_lookup_rules_item_5:
		'Lookup lewat edge kami ke server upstream; kami tidak mengubah DNS atau registrasi Anda.',
	tool_domain_lookup_rules_title: 'Apa yang Anda dapat',
	tool_domain_lookup_sample: 'Contoh',
	tool_domain_lookup_status: 'Status',
	tool_domain_lookup_title: 'Cek domain — lihat DNS dan data registrasi',
	tool_domain_lookup_usecase_1:
		'Sebelum go-live: pastikan A/AAAA/CNAME mengarah ke host yang diharapkan.',
	tool_domain_lookup_usecase_2:
		'Perpanjangan atau serah terima: cek registrar, status, dan event kedaluwarsa (kontak bisa disembunyikan).',
	tool_domain_lookup_usecase_3:
		'Setup email: lihat MX dan cuplikan TXT terkait (bukan audit deliverability penuh).',
	tool_domain_lookup_usecases_title: 'Kapan dipakai',
};
export default id;
