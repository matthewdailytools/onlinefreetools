/**
 * i18n tool shard (how-to-calculate-body-fat / id).
 * Independent rewrite in Indonesian (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_body_fat_title: 'Kalkulator lemak tubuh — Estimasi persen lemak dengan lingkar tubuh',
	tool_body_fat_description:
		'Perkirakan persentase lemak tubuh dengan rumus lingkar U.S. Navy (opsi Army di halaman yang sama). Contoh: pria, tinggi 178 cm, leher 40 cm, pinggang 86 cm → ~15,3 %. Hitung di browser; hanya edukasi — bukan saran medis atau diagnosis.',
	tool_body_fat_article:
		'Metode lingkar tubuh memperkirakan lemak dari tinggi badan dan pengukuran meteran. Navy dan Army (keluarga DoD) ada di URL edukasi yang sama; skinfold dijelaskan di FAQ sebagai metode berbeda, tanpa halaman terpisah.',
	tool_body_fat_calculate: 'Hitung',
	tool_body_fat_sample: 'Muat contoh',
	tool_body_fat_clear: 'Hapus',
	tool_body_fat_method_label: 'Metode',
	tool_body_fat_method_navy: 'Lingkar tubuh U.S. Navy',
	tool_body_fat_method_army: 'Lingkar tubuh U.S. Army / gaya DoD',
	tool_body_fat_sex_label: 'Jenis kelamin (tabel rumus)',
	tool_body_fat_sex_male: 'Pria',
	tool_body_fat_sex_female: 'Wanita',
	tool_body_fat_height_label: 'Tinggi (cm)',
	tool_body_fat_height_ph: 'mis. 178',
	tool_body_fat_neck_label: 'Lingkar leher (cm)',
	tool_body_fat_neck_ph: 'mis. 40',
	tool_body_fat_waist_label: 'Lingkar pinggang (cm)',
	tool_body_fat_waist_ph: 'mis. 86',
	tool_body_fat_hip_label: 'Lingkar pinggul (cm, wanita)',
	tool_body_fat_hip_ph: 'mis. 96',
	tool_body_fat_result_label: 'Lemak tubuh perkiraan',
	tool_body_fat_result_note: 'Hanya estimasi edukasi — bukan saran medis atau diagnosis.',
	tool_body_fat_err_input: 'Tinggi, leher, dan pinggang harus angka positif.',
	tool_body_fat_err_hip: 'Rumus wanita membutuhkan lingkar pinggul positif.',
	tool_body_fat_err_geom: 'Pinggang harus lebih besar dari leher (dan pinggang+pinggul > leher untuk wanita).',
	tool_body_fat_how_title: 'Cara kerja',
	tool_body_fat_how_body:
		'Masukkan jenis kelamin, tinggi, dan ukuran meteran dalam sentimeter. Alat mengonversi ke inci untuk rumus log10 yang dipublikasikan, lalu menampilkan % lemak perkiraan. Skinfold ada di FAQ — halaman yang sama.',
	tool_body_fat_formula_title: 'Rumus dan asumsi pengukuran',
	tool_body_fat_formula_body:
		'Pria: %lemak ≈ 86,010×log10(pinggang−leher) − 70,041×log10(tinggi) + 36,387 (inci). Wanita: %lemak ≈ 163,205×log10(pinggang+pinggul−leher) − 97,684×log10(tinggi) + 78,387. Asumsi:',
	tool_body_fat_formula_item_1: 'Meteran di titik standar Navy/DoD; postur dan pakaian mengubah hasil.',
	tool_body_fat_formula_item_2: 'Input sentimeter; konversi 1 in = 2,54 cm sebelum rumus log10.',
	tool_body_fat_formula_item_3: 'Estimasi edukasi, bukan hasil klinis DXA/Bod Pod atau saran medis.',
	tool_body_fat_example_title: 'Contoh',
	tool_body_fat_example:
		'Contoh: pria, metode Navy, tinggi 178 cm, leher 40 cm, pinggang 86 cm → ~15,3 % lemak tubuh.',
	tool_body_fat_usecases_title: 'Kapan dipakai',
	tool_body_fat_usecase_1: 'Kelas: latihan rumus lingkar Navy dengan angka tetap.',
	tool_body_fat_usecase_2: 'Ilustrasi kasar pelacakan kebugaran sebelum konsultasi klinis (bukan diagnosis).',
	tool_body_fat_usecase_3: 'Bandingkan label Navy vs Army di satu halaman tanpa URL kedua.',
	tool_body_fat_faq_q1: 'Rumus apa yang dipakai?',
	tool_body_fat_faq_a1:
		'Rumus log10 lingkar gaya U.S. Navy / DoD, dalam inci setelah konversi dari cm.',
	tool_body_fat_faq_q2: 'Navy vs Army di halaman ini?',
	tool_body_fat_faq_a2:
		'Keduanya estimator lingkar dari keluarga yang sama. Label membantu pencarian; disiplin pengukuran lebih penting dari nama.',
	tool_body_fat_faq_q3: 'Apakah ini saran medis?',
	tool_body_fat_faq_a3:
		'Tidak. Hasil hanya estimasi edukasi, bukan diagnosis, rencana perawatan, atau tes komposisi tubuh klinis.',
	tool_body_fat_faq_q4: 'Bagaimana dengan skinfold?',
	tool_body_fat_faq_a4:
		'Persamaan skinfold butuh beberapa titik dan teknik terlatih. Dijelaskan di FAQ di sini, bukan URL alat terpisah.',
	tool_body_fat_disclaimer:
		'Estimasi lemak tubuh hanya ilustrasi edukasi dan bukan pengganti saran medis, diagnosis, atau tes komposisi tubuh klinis. Konsultasikan profesional berkualifikasi untuk keputusan kesehatan.',
	tool_body_fat_references:
		'Persamaan metode lingkar U.S. Navy / DoD; catatan edukasi ACE tentang kalkulator lemak tubuh; literatur metode lingkar yang direview sejawat.',
	tool_body_fat_ref_ace_label: 'ACE — Kalkulator lemak tubuh (edukasi)',
	tool_body_fat_ref_pmc_label: 'PMC — Metode lemak tubuh berbasis lingkar',
};

export default id;
