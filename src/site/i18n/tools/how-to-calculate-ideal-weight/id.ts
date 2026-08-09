/**
 * i18n tool shard (how-to-calculate-ideal-weight / id).
 * Penulisan ulang mandiri sesuai brief 03 (berat ideal); bukan salinan struktur Inggris.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_ideal_weight_title: 'Kalkulator berat ideal — Estimasi rentang berat badan',
	tool_ideal_weight_description:
		'Perkirakan berat badan ideal (IBW) dengan Devine, Robinson, Miller, dan Hamwi di satu halaman. Contoh: pria 178 cm → Devine sekitar 73,2 kg (rentang sekitar 70,4–75,2 kg antar rumus). Dihitung di browser; hanya edukasi — bukan saran medis atau diagnosis.',
	tool_ideal_weight_article:
		'Rumus berat ideal memperkirakan berat acuan dari tinggi dan jenis kelamin. Halaman ini menampilkan Devine, Robinson, Miller, dan Hamwi bersama-sama agar rentang bisa dibandingkan, dengan penafian non-medis.',
	tool_ideal_weight_calculate: 'Hitung',
	tool_ideal_weight_sample: 'Muat contoh',
	tool_ideal_weight_clear: 'Hapus',
	tool_ideal_weight_sex_label: 'Jenis kelamin (tabel rumus)',
	tool_ideal_weight_sex_male: 'Pria',
	tool_ideal_weight_sex_female: 'Wanita',
	tool_ideal_weight_height_label: 'Tinggi (cm)',
	tool_ideal_weight_height_ph: 'mis. 178',
	tool_ideal_weight_formula_label: 'Tampilan rumus',
	tool_ideal_weight_formula_all: 'Semua rumus (rentang)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'Perkiraan berat ideal',
	tool_ideal_weight_result_range: 'Rentang rumus',
	tool_ideal_weight_result_note: 'Estimasi edukasi saja — bukan saran medis atau diagnosis.',
	tool_ideal_weight_err_height: 'Tinggi harus lebih dari nol.',
	tool_ideal_weight_err_short:
		'Rumus IBW ini kurang terdefinisi di bawah sekitar 152 cm (5 ft). Anggap hasil hanya sebagai ilustrasi.',
	tool_ideal_weight_how_title: 'Cara kerja',
	tool_ideal_weight_how_body:
		'Masukkan jenis kelamin dan tinggi dalam sentimeter. Alat mengonversi ke inci untuk rumus IBW klasik dan menampilkan kilogram. Bandingkan rumus di sini; BMI dan lemak tubuh ada di alat lain.',
	tool_ideal_weight_formula_title: 'Rumus dan asumsi',
	tool_ideal_weight_formula_body:
		'Konversi: 1 in = 2,54 cm. Di atas 60 in (5 ft), Devine pria = 50 + 2,3×(in−60); wanita = 45,5 + 2,3×(in−60). Robinson, Miller, dan Hamwi memakai bentuk linear serupa dengan koefisien berbeda. Perhatikan:',
	tool_ideal_weight_formula_item_1: 'Berasal dari konteks dosis/acuan dewasa — bukan target pribadi.',
	tool_ideal_weight_formula_item_2: 'Ukuran rangka, massa otot, dan kehamilan tidak dimodelkan.',
	tool_ideal_weight_formula_item_3: 'Hasil adalah ilustrasi edukasi, bukan sasaran klinis atau saran medis.',
	tool_ideal_weight_example_title: 'Contoh',
	tool_ideal_weight_example:
		'Contoh: pria, 178 cm → Devine sekitar 73,2 kg; Robinson ~71,1, Miller ~70,4, Hamwi ~75,2 (sekitar 70,4–75,2 kg).',
	tool_ideal_weight_usecases_title: 'Kapan dipakai',
	tool_ideal_weight_usecase_1: 'Kelas: bandingkan rumus IBW klasik dengan satu tinggi.',
	tool_ideal_weight_usecase_2: 'Acuan edukasi kasar sebelum berbicara dengan klinisi (bukan rencana target).',
	tool_ideal_weight_usecase_3: 'Lihat Devine vs Robinson di satu halaman tanpa URL terpisah.',
	tool_ideal_weight_faq_q1: 'Rumus berat ideal mana yang “benar”?',
	tool_ideal_weight_faq_a1:
		'Tidak ada yang benar secara universal. Devine umum di pengajaran; Robinson, Miller, dan Hamwi berbeda koefisien. Bandingkan di sini.',
	tool_ideal_weight_faq_q2: 'Apakah sama dengan BMI?',
	tool_ideal_weight_faq_a2:
		'Tidak. BMI memakai rasio berat dan tinggi. IBW memperkirakan berat acuan hanya dari tinggi dan jenis kelamin.',
	tool_ideal_weight_faq_q3: 'Apakah ini saran medis?',
	tool_ideal_weight_faq_a3:
		'Bukan. Angka hanya estimasi edukasi — bukan diagnosis, rencana pengobatan, atau resep nutrisi.',
	tool_ideal_weight_faq_q4: 'Mengapa dikonversi ke inci?',
	tool_ideal_weight_faq_a4:
		'Persamaan gaya Devine yang dipublikasikan didefinisikan dalam inci di atas 5 kaki. Input sentimeter dikonversi sebelum rumus diterapkan.',
	tool_ideal_weight_disclaimer:
		'Hasil berat ideal hanyalah ilustrasi edukasi dan bukan saran medis, diagnosis, atau pengganti penilaian klinis. Konsultasikan profesional yang berkualifikasi untuk keputusan kesehatan.',
	tool_ideal_weight_references:
		'Persamaan IBW klasik Devine/Robinson/Miller/Hamwi; konteks edukasi dosis/IBW NCBI Bookshelf.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — konteks berat badan ideal',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default id;
