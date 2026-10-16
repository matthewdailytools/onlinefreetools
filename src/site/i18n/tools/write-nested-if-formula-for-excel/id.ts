/**
 * i18n 工具分片（write-nested-if-formula-for-excel / id）。
 * 有序条件 → 嵌套 IF 公式；浏览器试算；复制粘贴到 Excel。
 * 印尼文检索主词：rumus IF bersarang；公式输出仍为英文函数名与逗号。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Pembuat rumus IF bersarang untuk Excel — kondisi berurutan siap disalin",
	tool_write_nested_if_formula_for_excel_description: "Buat rumus IF bersarang untuk Excel dari uji sama dengan, berisi, atau kosong, berurutan. Contoh: West → A, East → B, selainnya Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). Coba hasilnya di browser, lalu salin. Nama fungsi bahasa Inggris dan koma.",
	tool_write_nested_if_formula_for_excel_article: "Tambahkan kondisi berurutan, hasil per baris, dan else akhir, pratinjau nilai uji, lalu salin rumus IF bersarang lengkap.",
	tool_write_nested_if_formula_for_excel_desc: "Kondisi berurutan → rumus IF bersarang, uji di browser, dan salin.",

	tool_write_nested_if_formula_for_excel_hint: "Kondisi diuji dari atas ke bawah. Yang cocok pertama menang. Berisi mengeluarkan ISNUMBER(SEARCH(...)). Rumus memakai nama Inggris dan koma.",
	tool_write_nested_if_formula_for_excel_cell_label: "Sel target",
	tool_write_nested_if_formula_for_excel_cell_ph: "mis. A1",
	tool_write_nested_if_formula_for_excel_trial_label: "Nilai uji",
	tool_write_nested_if_formula_for_excel_trial_ph: "mis. West",
	tool_write_nested_if_formula_for_excel_else_label: "Else (salah akhir)",
	tool_write_nested_if_formula_for_excel_else_ph: "mis. Other",
	tool_write_nested_if_formula_for_excel_col_op: "Uji",
	tool_write_nested_if_formula_for_excel_col_val: "Nilai / teks",
	tool_write_nested_if_formula_for_excel_col_then: "Maka hasil",
	tool_write_nested_if_formula_for_excel_op_eq: "sama dengan",
	tool_write_nested_if_formula_for_excel_op_contains: "berisi",
	tool_write_nested_if_formula_for_excel_op_blank: "kosong",
	tool_write_nested_if_formula_for_excel_add: "Tambah kondisi",
	tool_write_nested_if_formula_for_excel_write: "Buat rumus",
	tool_write_nested_if_formula_for_excel_sample: "Muat contoh",
	tool_write_nested_if_formula_for_excel_clear: "Hapus",
	tool_write_nested_if_formula_for_excel_copy: "Salin rumus",
	tool_write_nested_if_formula_for_excel_copied: "Disalin.",
	tool_write_nested_if_formula_for_excel_formula_label: "Rumus IF bersarang",
	tool_write_nested_if_formula_for_excel_trial_result_label: "Hasil uji",
	tool_write_nested_if_formula_for_excel_empty: "Tambahkan minimal satu kondisi (atau muat contoh), lalu buat rumus.",
	tool_write_nested_if_formula_for_excel_copy_fail: "Tidak bisa menyalin. Pilih rumus dan salin secara manual.",

	tool_write_nested_if_formula_for_excel_how_title: "Cara menulis rumus IF bersarang",
	tool_write_nested_if_formula_for_excel_how_body: "Isi sel target dan kondisi berurutan. Buat rumus menampilkan IF bersarang dan mengevaluasi nilai uji Anda. Salin menempel sintaks Excel bahasa Inggris dengan koma.",
	tool_write_nested_if_formula_for_excel_how_item_1: "Atur sel target dan nilai uji opsional.",
	tool_write_nested_if_formula_for_excel_how_item_2: "Tambahkan baris sama dengan, berisi, atau kosong sesuai urutan yang harus diuji Excel.",
	tool_write_nested_if_formula_for_excel_how_item_3: "Isi setiap Maka hasil dan nilai Else akhir.",
	tool_write_nested_if_formula_for_excel_how_item_4: "Klik Buat rumus, cek hasil uji, lalu Salin rumus.",

	tool_write_nested_if_formula_for_excel_why_choose_title: "Yang didapat dari pembuat IF bersarang ini",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "Kondisi sama dengan / berisi / kosong berurutan dalam satu IF bersarang.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "Uji di browser agar Anda melihat cabang mana yang menang sebelum menempel.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "Rotasi contoh: label wilayah, pita nilai, dan uji berisi.",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "Salin satu klik untuk string rumus lengkap.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "Catatan jelas: ini membangun IF bersarang, bukan IFS (lihat halaman IFS terkait).",

	tool_write_nested_if_formula_for_excel_rules_title: "Aturan yang perlu Anda harapkan",
	tool_write_nested_if_formula_for_excel_rules_body: "Pembuat mengeluarkan IF(...) bersarang klasik. Tanda kutip di dalam teks Excel digandakan.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "Tanda kutip di dalam teks Excel digandakan.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "Berisi mengeluarkan ISNUMBER(SEARCH(...)); kosong menguji teks kosong.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "Kondisi yang cocok pertama menang (atas ke bawah).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "Nama fungsi Inggris dan koma mungkin perlu dilokalkan di instalasi Excel Anda.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "Untuk sintaks IFS() gunakan halaman write-IFS terkait.",

	tool_write_nested_if_formula_for_excel_example_title: "Contoh terurai",
	tool_write_nested_if_formula_for_excel_example: "Muat contoh dimulai dengan West → A dan East → B, else Other, uji West → A. Berikutnya membangun pita nilai (≥90 / ≥80). Contoh terakhir memakai uji berisi untuk \"promo\".",

	tool_write_nested_if_formula_for_excel_usecases_title: "Kapan memakai pembuat rumus IF bersarang",
	tool_write_nested_if_formula_for_excel_usecase_1: "Menetapkan pita nilai atau risiko dari aturan berurutan.",
	tool_write_nested_if_formula_for_excel_usecase_2: "Mengubah kode wilayah menjadi label laporan.",
	tool_write_nested_if_formula_for_excel_usecase_3: "Memeriksa rumus multi-cabang sebelum menempel ke workbook.",
	tool_write_nested_if_formula_for_excel_usecase_4: "Memprototipe cabang berisi/kosong tanpa menulis SEARCH manual.",

	tool_write_nested_if_formula_for_excel_faq_q1: "Apakah nilai saya diunggah?",
	tool_write_nested_if_formula_for_excel_faq_a1: "Tidak. Pembuatan dan evaluasi uji tetap di browser Anda.",
	tool_write_nested_if_formula_for_excel_faq_q2: "Apakah ini sama dengan IFS?",
	tool_write_nested_if_formula_for_excel_faq_a2: "Tidak. Halaman ini mengeluarkan IF(...) bersarang. Gunakan pembuat IFS terkait untuk IFS().",
	tool_write_nested_if_formula_for_excel_faq_q3: "Bagaimana cara kerja berisi?",
	tool_write_nested_if_formula_for_excel_faq_a3: "Mengeluarkan ISNUMBER(SEARCH(\"teks\", sel)) di dalam uji IF.",
	tool_write_nested_if_formula_for_excel_faq_q4: "Apakah rumus menempel di setiap bahasa Excel?",
	tool_write_nested_if_formula_for_excel_faq_a4: "Memakai nama fungsi Inggris dan koma. Beberapa instalasi butuh nama terjemahan atau pemisah titik koma.",
	tool_write_nested_if_formula_for_excel_faq_q5: "Untuk apa nilai uji?",
	tool_write_nested_if_formula_for_excel_faq_a5: "Mengevaluasi urutan cabang yang sama di browser agar Anda memastikan Maka/Else mana yang menang.",
	tool_write_nested_if_formula_for_excel_faq_q6: "Bisakah saya menyarangkan lebih dari dua kondisi?",
	tool_write_nested_if_formula_for_excel_faq_a6: "Ya. Tambah baris; masing-masing menjadi lapisan IF lain di sekitar Else akhir.",

	tool_write_nested_if_formula_for_excel_references: "Dokumentasi fungsi IF Microsoft.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — fungsi IF",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — fungsi IFS",
};

export default id;
