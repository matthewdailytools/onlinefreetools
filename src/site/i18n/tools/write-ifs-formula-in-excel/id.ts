/**
 * i18n 工具分片（write-ifs-formula-in-excel / id）。
 * 有序条件 → =IFS(...)；TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: "Pembuat rumus IFS Excel — uji berurutan dengan TRUE sebagai penutup",
	tool_write_ifs_formula_in_excel_description: "Buat rumus IFS untuk Excel 2019 atau Microsoft 365 dari uji berurutan (sama dengan, berisi, kosong). Contoh: West → A, East → B, selain itu Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\"). Coba di browser, lalu salin. Tidak tersedia di Excel 2016 perpetual.",
	tool_write_ifs_formula_in_excel_article: "Tambahkan uji berurutan, tetapkan tiap hasil dan else TRUE, pratinjau nilai uji coba, lalu salin rumus IFS lengkap.",
	tool_write_ifs_formula_in_excel_desc: "Uji berurutan → rumus IFS dengan TRUE penutup, uji coba di browser, dan salin.",

	tool_write_ifs_formula_in_excel_hint: "Kondisi diuji dari atas ke bawah. Pembuat menambahkan TRUE,else sebagai penutup. Memerlukan Excel 2019, Microsoft 365, atau lebih baru. Nama bahasa Inggris dan koma.",
	tool_write_ifs_formula_in_excel_note_2016: "IFS memerlukan Excel 2019, Microsoft 365, atau lebih baru. Untuk Excel lama gunakan pembuat IF bersarang.",
	tool_write_ifs_formula_in_excel_cell_label: "Sel target",
	tool_write_ifs_formula_in_excel_cell_ph: "mis. A1",
	tool_write_ifs_formula_in_excel_trial_label: "Nilai uji coba",
	tool_write_ifs_formula_in_excel_trial_ph: "mis. West",
	tool_write_ifs_formula_in_excel_else_label: "Else (TRUE penutup)",
	tool_write_ifs_formula_in_excel_else_ph: "mis. Other",
	tool_write_ifs_formula_in_excel_col_op: "Uji",
	tool_write_ifs_formula_in_excel_col_val: "Nilai / teks",
	tool_write_ifs_formula_in_excel_col_then: "Lalu hasil",
	tool_write_ifs_formula_in_excel_op_eq: "sama dengan",
	tool_write_ifs_formula_in_excel_op_contains: "berisi",
	tool_write_ifs_formula_in_excel_op_blank: "kosong",
	tool_write_ifs_formula_in_excel_add: "Tambah kondisi",
	tool_write_ifs_formula_in_excel_write: "Tulis rumus",
	tool_write_ifs_formula_in_excel_sample: "Muat contoh",
	tool_write_ifs_formula_in_excel_clear: "Hapus",
	tool_write_ifs_formula_in_excel_copy: "Salin rumus",
	tool_write_ifs_formula_in_excel_copied: "Disalin.",
	tool_write_ifs_formula_in_excel_formula_label: "Rumus IFS",
	tool_write_ifs_formula_in_excel_trial_result_label: "Hasil uji coba",
	tool_write_ifs_formula_in_excel_empty: "Tambahkan setidaknya satu kondisi (atau muat contoh), lalu tulis rumus.",
	tool_write_ifs_formula_in_excel_copy_fail: "Tidak bisa menyalin. Pilih rumus dan salin secara manual.",

	tool_write_ifs_formula_in_excel_how_title: "Cara menulis rumus IFS",
	tool_write_ifs_formula_in_excel_how_body: "Masukkan sel target dan uji berurutan. Tulis rumus menampilkan IFS dengan TRUE penutup dan mengevaluasi nilai uji coba. Salinan memakai sintaks Excel bahasa Inggris dengan koma.",
	tool_write_ifs_formula_in_excel_how_item_1: "Tetapkan sel target dan nilai uji coba opsional.",
	tool_write_ifs_formula_in_excel_how_item_2: "Tambahkan baris sama dengan, berisi, atau kosong sesuai urutan evaluasi.",
	tool_write_ifs_formula_in_excel_how_item_3: "Isi tiap Lalu hasil dan nilai Else (dipasangkan dengan TRUE).",
	tool_write_ifs_formula_in_excel_how_item_4: "Klik Tulis rumus, periksa uji coba, lalu Salin. Gunakan IF bersarang jika masih Excel 2016.",

	tool_write_ifs_formula_in_excel_why_choose_title: "Yang diberikan pembuat IFS ini",
	tool_write_ifs_formula_in_excel_why_choose_item_1: "Uji berurutan sama dengan / berisi / kosong dalam satu panggilan IFS.",
	tool_write_ifs_formula_in_excel_why_choose_item_2: "Pasangan otomatis TRUE,else sebagai penutup.",
	tool_write_ifs_formula_in_excel_why_choose_item_3: "Uji coba di browser sebelum menempel ke Excel.",
	tool_write_ifs_formula_in_excel_why_choose_item_4: "Rotasi contoh untuk wilayah, nilai, dan berisi.",
	tool_write_ifs_formula_in_excel_why_choose_item_5: "Batas Excel 2016 jelas dengan tautan ke IF bersarang.",

	tool_write_ifs_formula_in_excel_rules_title: "Aturan yang perlu diantisipasi",
	tool_write_ifs_formula_in_excel_rules_body: "Pembuat mengeluarkan IFS(uji,nilai,...,TRUE,else). Tanda kutip teks digandakan di dalam string Excel.",
	tool_write_ifs_formula_in_excel_rules_item_1: "Tanda kutip teks digandakan di dalam string Excel.",
	tool_write_ifs_formula_in_excel_rules_item_2: "Berisi mengeluarkan ISNUMBER(SEARCH(...)); kosong menguji teks kosong.",
	tool_write_ifs_formula_in_excel_rules_item_3: "Uji pertama yang cocok menang; TRUE penutup berjalan terakhir.",
	tool_write_ifs_formula_in_excel_rules_item_4: "IFS memerlukan Excel 2019, Microsoft 365, atau lebih baru — bukan Excel 2016 perpetual.",
	tool_write_ifs_formula_in_excel_rules_item_5: "Nama fungsi bahasa Inggris dan koma mungkin perlu dilokalkan di instalasi Excel Anda.",

	tool_write_ifs_formula_in_excel_example_title: "Contoh kerja",
	tool_write_ifs_formula_in_excel_example: "Muat contoh dimulai dengan West → A dan East → B, else Other → =IFS(...,TRUE,\"Other\"), uji coba West → A. Berikutnya membangun nilai sederhana. Contoh terakhir memakai berisi untuk \"promo\".",

	tool_write_ifs_formula_in_excel_usecases_title: "Kapan memakai pembuat rumus IFS",
	tool_write_ifs_formula_in_excel_usecase_1: "Memetakan kode wilayah ke label tanpa kurung IF bersarang yang dalam.",
	tool_write_ifs_formula_in_excel_usecase_2: "Menyusun pita nilai atau risiko untuk buku kerja Microsoft 365.",
	tool_write_ifs_formula_in_excel_usecase_3: "Menguji urutan cabang sebelum menempel ke lembar bersama.",
	tool_write_ifs_formula_in_excel_usecase_4: "Beralih ke halaman IF bersarang saat rekan masih memakai Excel 2016.",

	tool_write_ifs_formula_in_excel_faq_q1: "Apakah Excel 2016 menjalankan IFS?",
	tool_write_ifs_formula_in_excel_faq_a1: "Rilis perpetual Excel 2016 tidak. Gunakan IF bersarang, Excel 2019 atau lebih baru, atau Microsoft 365.",
	tool_write_ifs_formula_in_excel_faq_q2: "Apa yang terjadi jika tidak ada uji yang cocok?",
	tool_write_ifs_formula_in_excel_faq_a2: "TRUE dipasangkan dengan nilai else Anda sebagai hasil penutup.",
	tool_write_ifs_formula_in_excel_faq_q3: "Apakah nilai diunggah?",
	tool_write_ifs_formula_in_excel_faq_a3: "Tidak. Pembuatan dan evaluasi uji coba tetap di browser Anda.",
	tool_write_ifs_formula_in_excel_faq_q4: "Apakah Excel terlokalisasi akan menerimanya?",
	tool_write_ifs_formula_in_excel_faq_a4: "Beberapa instalasi membutuhkan nama fungsi terjemahan atau pemisah titik koma.",
	tool_write_ifs_formula_in_excel_faq_q5: "Apa bedanya dengan IF bersarang?",
	tool_write_ifs_formula_in_excel_faq_a5: "IFS adalah daftar uji datar. IF bersarang membungkus IF di dalam IF. Gunakan halaman IF bersarang terkait untuk Excel lama.",
	tool_write_ifs_formula_in_excel_faq_q6: "Apa yang dikeluarkan oleh «berisi»?",
	tool_write_ifs_formula_in_excel_faq_a6: "ISNUMBER(SEARCH(\"teks\", sel)) sebagai argumen uji di dalam IFS.",

	tool_write_ifs_formula_in_excel_references: "Dokumentasi fungsi IFS Microsoft.",
	tool_write_ifs_formula_in_excel_ref_a_label: "Microsoft — fungsi IFS",
	tool_write_ifs_formula_in_excel_ref_b_label: "Microsoft — fungsi IF",
};

export default id;
