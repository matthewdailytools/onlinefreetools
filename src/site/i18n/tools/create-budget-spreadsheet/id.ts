/**
 * i18n 工具分片（create-budget-spreadsheet / id）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 教育规划，非理财建议。
 * 检索向：buat spreadsheet anggaran / buat anggaran Excel / unduh anggaran xlsx。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "Buat spreadsheet anggaran — kategori & jumlah ke Excel xlsx",
	tool_create_budget_spreadsheet_description: "Susun spreadsheet anggaran sederhana dari baris kategori dan jumlah, pratinjau totalnya, lalu unduh .xlsx dengan rumus SUM yang hidup. Contoh: Sewa 1200 + Makanan 400 → Total 1600. Berjalan di browser — angka perencanaan saja, bukan saran keuangan, pajak, atau investasi.",
	tool_create_budget_spreadsheet_article: "Masukkan baris kategori,jumlah, pratinjau total berjalan, lalu unduh anggaran.xlsx yang sel Total-nya memakai SUM.",
	tool_create_budget_spreadsheet_desc: "Jumlah per kategori → total pratinjau → xlsx dengan SUM. Hanya lokal.",

	tool_create_budget_spreadsheet_safety_banner: "Angka perencanaan saja. Halaman ini membuat daftar kategori dengan total SUM. Bukan buku besar, SPT, atau saran investasi.",
	tool_create_budget_spreadsheet_hint: "Satu baris per entri: kategori,jumlah (koma atau tab). Jumlah harus bilangan hingga. Baris rusak dilewati.",
	tool_create_budget_spreadsheet_input_label: "Baris anggaran (kategori, jumlah)",
	tool_create_budget_spreadsheet_input_ph: "mis. Sewa,1200",
	tool_create_budget_spreadsheet_write: "Buat spreadsheet",
	tool_create_budget_spreadsheet_download: "Unduh xlsx",
	tool_create_budget_spreadsheet_sample: "Muat contoh",
	tool_create_budget_spreadsheet_clear: "Hapus",
	tool_create_budget_spreadsheet_preview_title: "Pratinjau",
	tool_create_budget_spreadsheet_col_category: "Kategori",
	tool_create_budget_spreadsheet_col_amount: "Jumlah",
	tool_create_budget_spreadsheet_total_label: "Total",
	tool_create_budget_spreadsheet_rows_label: "Baris dihitung",
	tool_create_budget_spreadsheet_ready_note: "Pratinjau siap. Unduhan menulis anggaran.xlsx dengan rumus SUM di sel Total.",
	tool_create_budget_spreadsheet_empty: "Tambahkan setidaknya satu baris valid kategori,jumlah (misalnya Sewa,1200), atau muat contoh.",
	tool_create_budget_spreadsheet_need_lib: "Pustaka spreadsheet gagal dimuat. Periksa jaringan dan segarkan.",
	tool_create_budget_spreadsheet_sheet_name: "Anggaran",

	tool_create_budget_spreadsheet_how_title: "Cara membuat spreadsheet anggaran",
	tool_create_budget_spreadsheet_how_body: "Cantumkan setiap kategori pengeluaran dan jumlahnya, buat pratinjau beserta total, lalu unduh .xlsx. Mengubah jumlah di Excel menghitung ulang total SUM.",
	tool_create_budget_spreadsheet_how_item_1: "Masukkan satu baris per entri sebagai kategori,jumlah.",
	tool_create_budget_spreadsheet_how_item_2: "Klik Buat spreadsheet untuk pratinjau baris dan total.",
	tool_create_budget_spreadsheet_how_item_3: "Perbaiki atau hapus baris yang dilewati jika total terlihat salah.",
	tool_create_budget_spreadsheet_how_item_4: "Klik Unduh xlsx untuk menyimpan anggaran.xlsx dengan SUM hidup.",

	tool_create_budget_spreadsheet_why_choose_title: "Yang diberikan pembuat spreadsheet anggaran ini",
	tool_create_budget_spreadsheet_why_choose_item_1: "Daftar kategori cepat dengan pratinjau total di halaman.",
	tool_create_budget_spreadsheet_why_choose_item_2: "Sel Total yang diunduh memakai rumus Excel SUM yang hidup.",
	tool_create_budget_spreadsheet_why_choose_item_3: "Rotasi contoh untuk daftar bulanan, perjalanan, dan gaya klub.",
	tool_create_budget_spreadsheet_why_choose_item_4: "Berjalan di browser — baris tidak diunggah.",
	tool_create_budget_spreadsheet_why_choose_item_5: "Batas YMYL jelas: perencanaan saja — bukan buku besar atau alat pajak.",

	tool_create_budget_spreadsheet_rules_title: "Aturan yang perlu diharapkan",
	tool_create_budget_spreadsheet_rules_body: "Alat ini membangun satu lembar perencanaan dari jumlah per kategori. Bukan perangkat lunak akuntansi.",
	tool_create_budget_spreadsheet_rules_item_1: "Jumlah harus bilangan hingga; baris rusak dilewati.",
	tool_create_budget_spreadsheet_rules_item_2: "Sel Total yang diunduh memakai =SUM pada kolom jumlah.",
	tool_create_budget_spreadsheet_rules_item_3: "Hanya satu daftar bergaya pengeluaran — tanpa mesin selisih pendapatan vs pengeluaran.",
	tool_create_budget_spreadsheet_rules_item_4: "Nilai tetap di perangkat Anda dan tidak diunggah.",
	tool_create_budget_spreadsheet_rules_item_5: "Format mengikuti praktik OOXML/xlsx umum lewat SheetJS di browser.",

	tool_create_budget_spreadsheet_example_title: "Contoh terurai",
	tool_create_budget_spreadsheet_example: "Muat contoh dimulai dengan Sewa 1200 dan Makanan 400 → Total 1600. Berikutnya menambah Utilitas 150 dan Transportasi 200. Contoh terakhir adalah daftar perjalanan singkat (Hotel, Penerbangan, Makanan).",

	tool_create_budget_spreadsheet_usecases_title: "Kapan membuat spreadsheet anggaran di sini",
	tool_create_budget_spreadsheet_usecase_1: "Draft anggaran amplop bulanan sebelum templat yang lebih lengkap.",
	tool_create_budget_spreadsheet_usecase_2: "Masukkan biaya perjalanan atau acara yang diperkirakan ke satu lembar yang bisa diunduh.",
	tool_create_budget_spreadsheet_usecase_3: "Siapkan rencana belanja klub sebelum pembukuan formal.",
	tool_create_budget_spreadsheet_usecase_4: "Serahkan .xlsx dengan total SUM yang masih dihitung ulang di Excel.",

	tool_create_budget_spreadsheet_faq_q1: "Apakah ini buku besar?",
	tool_create_budget_spreadsheet_faq_a1: "Tidak. Tidak ada akun, transaksi, rekonsiliasi, atau riwayat audit.",
	tool_create_budget_spreadsheet_faq_q2: "Apakah baris saya diunggah?",
	tool_create_budget_spreadsheet_faq_a2: "Tidak. Parsing dan penulisan xlsx berjalan di browser Anda.",
	tool_create_budget_spreadsheet_faq_q3: "Apakah xlsx yang diunduh dihitung ulang?",
	tool_create_budget_spreadsheet_faq_a3: "Ya. Sel Total berisi rumus SUM pada kolom jumlah.",
	tool_create_budget_spreadsheet_faq_q4: "Apakah melacak pendapatan versus pengeluaran?",
	tool_create_budget_spreadsheet_faq_a4: "Tidak. Untuk pendapatan, target, selisih, atau grafik, gunakan templat anggaran yang lebih lengkap.",
	tool_create_budget_spreadsheet_faq_q5: "Format kategori,jumlah seperti apa?",
	tool_create_budget_spreadsheet_faq_a5: "Satu baris per entri, kategori lalu jumlah dipisah koma atau tab. Contoh: Sewa,1200.",
	tool_create_budget_spreadsheet_faq_q6: "Apakah ini saran keuangan?",
	tool_create_budget_spreadsheet_faq_a6: "Tidak. Hanya aritmetika perencanaan — bukan saran keuangan, pajak, atau investasi.",

	tool_create_budget_spreadsheet_disclaimer: "Angka perencanaan saja — bukan saran keuangan, pajak, akuntansi, atau investasi.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML; dokumentasi SheetJS untuk penulisan xlsx di browser.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "Docs SheetJS",
};

export default id;
