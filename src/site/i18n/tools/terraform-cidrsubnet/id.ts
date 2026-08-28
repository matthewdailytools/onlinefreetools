/**
 * i18n tool shard (terraform-cidrsubnet / id).
 * Pencarian lokal: terraform cidrsubnet, hitung cidrsubnet, subnet terraform.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Lihat CIDR anak yang akan dikembalikan Terraform',
	tool_terraform_cidrsubnet_desc:
		'Hitung terraform cidrsubnet. Contoh: 10.1.2.0/24, 4, 15 → 10.1.2.240/28. Tetap di perangkat, tanpa unggah ke server.',
	tool_terraform_cidrsubnet_description:
		'Hitung terraform cidrsubnet: masukkan prefix induk, newbits, dan netnum untuk mendapat CIDR anak. Contoh: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. cidrhost dan cidrnetmask juga bisa dicek di halaman yang sama. Angka tetap di perangkat dan tidak diunggah ke server.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet mengembalikan prefix jaringan anak, bukan IP host. newbits adalah bit prefix tambahan, bukan “empat subnet”. netnum mulai dari 0. cidrhost untuk host; cidrnetmask hanya IPv4. Perhitungan di peramban mengikuti aturan HashiCorp.',
	tool_terraform_cidrsubnet_evaluate: 'Hitung',
	tool_terraform_cidrsubnet_sample: 'Muat contoh',
	tool_terraform_cidrsubnet_clear: 'Hapus',
	tool_terraform_cidrsubnet_copy_cidr: 'Salin CIDR',
	tool_terraform_cidrsubnet_copy_hcl: 'Salin HCL',
	tool_terraform_cidrsubnet_copy_ip: 'Salin alamat',
	tool_terraform_cidrsubnet_copy_done: 'Tersalin',
	tool_terraform_cidrsubnet_prefix_label: 'Prefix induk',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'CIDR anak',
	tool_terraform_cidrsubnet_result_hcl_label: 'Panggilan HCL',
	tool_terraform_cidrsubnet_result_len_label: 'Panjang prefix baru',
	tool_terraform_cidrsubnet_result_range_label: 'netnum yang sah',
	tool_terraform_cidrsubnet_result_bits_label: 'Pembagian bit',
	tool_terraform_cidrsubnet_table_title: 'Semua netnum untuk newbits ini',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'Fungsi terkait',
	tool_terraform_cidrsubnet_host_prefix_label: 'Prefix cidrhost',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'Hitung cidrhost',
	tool_terraform_cidrsubnet_host_result_label: 'Alamat host',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'Prefix cidrnetmask (hanya IPv4)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'Hitung cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: 'Netmask',
	tool_terraform_cidrsubnet_err_empty: 'Isi prefix CIDR serta newbits dan netnum berupa bilangan bulat.',
	tool_terraform_cidrsubnet_err_prefix: 'Itu bukan prefix CIDR (perlu alamat/panjang, IPv4 atau IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits harus bilangan bulat ≥ 0, dan panjang hasil tidak boleh lebih dari 32 (IPv4) atau 128 (IPv6).',
	tool_terraform_cidrsubnet_err_netnum:
		'newbits={nb} hanya muat netnum 0–{max}; {nn} tidak muat — Terraform juga menolak.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum tidak muat di sisa bit host.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask hanya IPv4. Untuk IPv6 pakai cidrsubnet atau cidrhost.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'Induk /{old} plus {nb} bit → /{neu}. netnum {nn} mengisi bit tambahan; sisa bit host: {hb}.',
	tool_terraform_cidrsubnet_how_title: 'Cara kerja',
	tool_terraform_cidrsubnet_how_body:
		'Salin tiga argumen cidrsubnet dari HCL ke sini, lalu bandingkan CIDR anak sebelum apply.',
	tool_terraform_cidrsubnet_how_item_1: 'cidrsubnet mengembalikan prefix subnet. IP host dihitung cidrhost.',
	tool_terraform_cidrsubnet_how_item_2: 'Tempel CIDR induk dari variabel Terraform (contoh 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'Isi newbits (bit prefix tambahan) dan netnum (nomor subnet dari 0).',
	tool_terraform_cidrsubnet_how_item_4: 'Baca CIDR anak, salin HCL, atau bandingkan dengan terraform console.',
	tool_terraform_cidrsubnet_how_item_5: 'Jika newbits tidak muat netnum, muncul galat — Terraform menolak nilai yang sama.',
	tool_terraform_cidrsubnet_formula_title: 'Rumus',
	tool_terraform_cidrsubnet_formula_body:
		'Bit host pada alamat induk di-nol-kan, lalu netnum ditulis ke bit prefix tambahan. Nol di depan oktet IPv4 dibaca desimal, sesuai catatan HashiCorp.',
	tool_terraform_cidrsubnet_formula_item_1: 'panjang_baru = panjang_induk + newbits (IPv4 ≤32, IPv6 ≤128).',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits.',
	tool_terraform_cidrsubnet_formula_item_3: 'Alamat jaringan OR (netnum digeser sisa bit host).',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost menaruh hostnum di bit host (negatif dihitung dari belakang). cidrnetmask adalah mask IPv4 bertitik.',
	tool_terraform_cidrsubnet_example_title: 'Contoh',
	tool_terraform_cidrsubnet_example:
		'Masukan: 10.1.2.0/24, newbits 4, netnum 15. Keluaran: 10.1.2.240/28. Empat bit tambahan menampung 0–15; 15 mengisi nibble tinggi oktet terakhir (240).',
	tool_terraform_cidrsubnet_usecases_title: 'Kapan dipakai',
	tool_terraform_cidrsubnet_usecase_1:
		'Pratinjau subnet VPC: cidrsubnet(var.vpc_cidr, 8, count.index) — AZ0 adalah netnum 0.',
	tool_terraform_cidrsubnet_usecase_2:
		'Cocokkan contoh resmi 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28, lalu cidrhost pada /28 itu (host 1 dan 14).',
	tool_terraform_cidrsubnet_usecase_3:
		'Potong ULA IPv6: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: 'Apa beda cidrhost dan cidrsubnet?',
	tool_terraform_cidrsubnet_faq_a1:
		'cidrsubnet mengembalikan prefix plus panjang. cidrhost mengembalikan satu alamat host. hostnum 0 adalah alamat jaringan; negatif dihitung dari belakang (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q2: 'newbits=4 artinya empat subnet?',
	tool_terraform_cidrsubnet_faq_a2:
		'Tidak. Itu empat bit prefix tambahan: 16 netnum (0–15) dan anak bertambah empat bit (/24 → /28).',
	tool_terraform_cidrsubnet_faq_q3: 'Mengapa netnum 16 gagal jika newbits 4?',
	tool_terraform_cidrsubnet_faq_a3:
		'Empat bit hanya menyimpan 0–15. Terraform tidak wrap: error. Halaman ini sama, supaya CIDR yang tak pernah apply tidak tersalin.',
	tool_terraform_cidrsubnet_faq_q4: 'Mengapa cidrnetmask menolak IPv6?',
	tool_terraform_cidrsubnet_faq_a4:
		'Fungsi HashiCorp hanya IPv4 dan mengembalikan mask bertitik seperti 255.255.255.0. Untuk IPv6 pertahankan panjang prefix, pakai cidrsubnet atau cidrhost.',
	tool_terraform_cidrsubnet_faq_q5: 'Apakah cidrsubnets atau modul hashicorp/subnets/cidr dihitung?',
	tool_terraform_cidrsubnet_faq_a5:
		'Tidak. cidrsubnets (jamak) mengalokasikan beberapa prefix berurutan dari nol. Modul Registry alat lain. Di sini satu panggilan per kali.',
	tool_terraform_cidrsubnet_faq_q6: 'Apakah prefix diunggah ke server?',
	tool_terraform_cidrsubnet_faq_a6:
		'Tidak. Nilai tetap di perangkat, di tab ini, dan tidak diunggah ke server. Jika butuh versi CLI tertentu, gunakan terraform console.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — fungsi cidrsubnet',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — fungsi cidrhost',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — fungsi cidrnetmask',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — notasi CIDR',
	tool_terraform_cidrsubnet_disclaimer:
		'Tujuannya selaras dengan cidrsubnet, cidrhost, dan cidrnetmask HashiCorp. Ini bukan terraform console; jika versi berbeda, utamakan dokumen resmi.',
};

export default id;
