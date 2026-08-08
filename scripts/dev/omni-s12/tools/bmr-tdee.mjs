/**
 * §12 #9 how-to-calculate-bmr-tdee 工具定义。
 */
export default {
	seq: 9,
	slug: 'how-to-calculate-bmr-tdee',
	prefix: 'tool_bmr_tdee',
	nameZh: 'BMR / TDEE / 卡路里',
	category: 'calculator',
	ymyl: true,
	pageFile: 'howToCalculateBmrTdeePage',
	pageExport: 'renderHowToCalculateBmrTdeePage',
	anchor: 'bmr-tdee',
	related: ['how-to-calculate-bmi'],
	glyph: 'M8 20c4-8 12-8 16 0M10 12h12M16 8v8',
	titles: {
		en: 'BMR & TDEE Calculator — How to Calculate Daily Calories',
		zh: 'BMR / TDEE 计算器 — 如何估算基础代谢与每日消耗',
		es: 'Calculadora BMR y TDEE — Calorías diarias',
		ar: 'حاسبة BMR و TDEE — السعرات اليومية',
		pt: 'Calculadora de BMR e TDEE — Calorias diárias',
		id: 'Kalkulator BMR & TDEE — Kalori harian',
		fr: 'Calculateur BMR et TDEE — Calories quotidiennes',
		ja: 'BMR / TDEE 計算ツール — 1日の消費カロリーの目安',
		ru: 'Калькулятор BMR и TDEE — суточные калории',
		de: 'BMR- & TDEE-Rechner — Täglichen Kalorienbedarf schätzen',
	},
	descriptions: {
		en: 'Estimate basal metabolic rate (BMR) with Mifflin-St Jeor, Harris-Benedict, or Katch-McArdle, then multiply by an activity factor for TDEE. Example: male, 70 kg, 175 cm, age 30, Mifflin, activity 1.55 → BMR ≈ 1648.75 and TDEE ≈ 2555.56 kcal/day. Runs in your browser; educational only — not medical advice.',
		zh: '用 Mifflin、Harris-Benedict 或 Katch-McArdle 估算基础代谢率（BMR），再乘活动系数得到 TDEE。示例：男性 70kg、175cm、30 岁、Mifflin、活动系数 1.55 → BMR≈1648.75、TDEE≈2555.56 kcal/日。浏览器内计算；仅供教育，非医疗建议。',
		es: 'Estima el BMR con Mifflin, Harris-Benedict o Katch-McArdle y multiplica por el factor de actividad para el TDEE. Ejemplo: hombre 70 kg, 175 cm, 30 años, Mifflin, 1.55 → BMR ≈ 1648,75 y TDEE ≈ 2555,56 kcal/día. En el navegador; solo educativo, no es consejo médico.',
		ar: 'قدّر معدل الأيض الأساسي (BMR) بصيغ Mifflin أو Harris أو Katch ثم اضرب بعامل النشاط للحصول على TDEE. مثال: ذكر 70 كغ 175 سم عمر 30 Mifflin وعامل 1.55 → BMR≈1648.75 و TDEE≈2555.56. في المتصفح؛ للتعليم فقط وليس نصيحة طبية.',
		pt: 'Estime o BMR com Mifflin, Harris-Benedict ou Katch-McArdle e multiplique pelo fator de atividade para o TDEE. Exemplo: homem 70 kg, 175 cm, 30 anos, Mifflin, 1,55 → BMR ≈ 1648,75 e TDEE ≈ 2555,56 kcal/dia. No navegador; apenas educativo, não é conselho médico.',
		id: 'Perkirakan BMR dengan Mifflin, Harris-Benedict, atau Katch-McArdle, lalu kalikan faktor aktivitas untuk TDEE. Contoh: pria 70 kg, 175 cm, usia 30, Mifflin, 1,55 → BMR ≈ 1648,75 dan TDEE ≈ 2555,56 kkal/hari. Di browser; hanya edukasi, bukan saran medis.',
		fr: 'Estimez le BMR avec Mifflin, Harris-Benedict ou Katch-McArdle, puis multipliez par le facteur d’activité pour le TDEE. Exemple : homme 70 kg, 175 cm, 30 ans, Mifflin, 1,55 → BMR ≈ 1648,75 et TDEE ≈ 2555,56 kcal/jour. Dans le navigateur ; usage pédagogique, pas un avis médical.',
		ja: 'Mifflin・Harris-Benedict・Katch-McArdle で基礎代謝量（BMR）を推定し、活動係数を掛けて TDEE を出します。例：男性 70kg・175cm・30歳・Mifflin・1.55 → BMR≈1648.75、TDEE≈2555.56 kcal/日。ブラウザ内；学習用であり医療助言ではありません。',
		ru: 'Оцените BMR по Mifflin, Harris-Benedict или Katch-McArdle и умножьте на коэффициент активности для TDEE. Пример: мужчина 70 кг, 175 см, 30 лет, Mifflin, 1,55 → BMR ≈ 1648,75 и TDEE ≈ 2555,56 ккал/сут. В браузере; только обучение, не медицинский совет.',
		de: 'Schätzen Sie den BMR mit Mifflin, Harris-Benedict oder Katch-McArdle und multiplizieren Sie mit dem Aktivitätsfaktor für den TDEE. Beispiel: Mann 70 kg, 175 cm, 30 Jahre, Mifflin, 1,55 → BMR ≈ 1648,75 und TDEE ≈ 2555,56 kcal/Tag. Im Browser; nur zu Lernzwecken, keine medizinische Beratung.',
	},
	ui: {
		en: {
			calculate: 'Calculate',
			sample: 'Load sample',
			clear: 'Clear',
			sex_label: 'Sex',
			sex_male: 'Male',
			sex_female: 'Female',
			weight_label: 'Weight (kg)',
			weight_ph: 'e.g. 70',
			height_label: 'Height (cm)',
			height_ph: 'e.g. 175',
			age_label: 'Age (years)',
			age_ph: 'e.g. 30',
			formula_label: 'BMR equation',
			formula_mifflin: 'Mifflin-St Jeor',
			formula_harris: 'Harris-Benedict (revised)',
			formula_katch: 'Katch-McArdle (needs body fat %)',
			activity_label: 'Activity factor',
			act_12: 'Sedentary (1.2)',
			act_1375: 'Light (1.375)',
			act_155: 'Moderate (1.55)',
			act_1725: 'Active (1.725)',
			act_19: 'Very active (1.9)',
			bodyfat_label: 'Body fat % (Katch)',
			bodyfat_ph: 'e.g. 20',
			bmrOut_label: 'BMR (kcal/day)',
			tdeeOut_label: 'TDEE (kcal/day)',
			result_note: 'Educational estimate only — not medical or diet advice.',
			err_generic: 'Check weight, height, age, and (for Katch) body-fat percent.',
			how_title: 'How it works',
			how_body:
				'Enter sex, weight, height, and age. Pick a BMR equation (Mifflin by default). For Katch-McArdle, also enter body-fat percent. Choose an activity factor to get TDEE ≈ BMR × factor. Deficit or surplus ideas stay on this page as FAQ — not separate calorie tools.',
			formula_title: 'Formula and assumptions',
			formula_body:
				'Mifflin (male): 10w + 6.25h − 5a + 5; female uses −161. Harris-Benedict revised and Katch-McArdle (370 + 21.6 × lean mass) are selectable. Assumptions:',
			formula_item_1: 'Inputs are adult educational estimates; equations differ and are not diagnoses.',
			formula_item_2: 'Activity factors are rough multipliers, not wearable measurements.',
			formula_item_3: 'Harris and Katch share this URL — no separate calculator pages.',
			formula_item_4: 'Not medical, nutrition, or weight-loss advice.',
			example_title: 'Example',
			example:
				'Example: male, 70 kg, 175 cm, age 30, Mifflin-St Jeor, activity 1.55 → BMR ≈ 1648.75 kcal/day and TDEE ≈ 2555.56 kcal/day.',
			usecases_title: 'When to use it',
			usecase_1: 'Classroom: compare Mifflin vs Harris on the same body stats.',
			usecase_2: 'Rough maintenance calorie sketch before talking to a clinician (illustration only).',
			usecase_3: 'See how activity factors change TDEE without a separate calorie URL.',
			faq_q1: 'What is BMR vs TDEE?',
			faq_a1: 'BMR is estimated resting burn; TDEE multiplies BMR by an activity factor for a rough daily total.',
			faq_q2: 'Which equation should I pick?',
			faq_a2: 'Mifflin-St Jeor is a common default. Harris is revised classic; Katch needs body-fat % and uses lean mass.',
			faq_q3: 'Can I plan a calorie deficit here?',
			faq_a3: 'This page explains the idea in FAQ only. It does not prescribe diets or medical plans.',
			faq_q4: 'Is this medical advice?',
			faq_a4: 'No. Numbers are educational illustrations only and are not medical or nutrition advice.',
			faq_q5: 'What if body-fat % is missing for Katch?',
			faq_a5: 'Katch-McArdle needs a body-fat percent between 0 and 100. Switch to Mifflin if you do not have it.',
			disclaimer:
				'BMR and TDEE results are educational estimates only and are not medical, diagnostic, or nutrition advice. Individual needs vary; seek qualified care for health decisions.',
			references:
				'NCBI Bookshelf metabolism education materials; NHLBI educational BMI/weight resources; standard Mifflin-St Jeor / Harris-Benedict / Katch-McArdle formulas.',
			ref_ncbi_label: 'NCBI Bookshelf — metabolism education',
			ref_nhlbi_label: 'NHLBI — educational weight resources',
			article:
				'BMR estimates resting energy use; TDEE scales it by activity. This page keeps Mifflin, Harris-Benedict, and Katch-McArdle on one URL with a clear non-medical disclaimer.',
		},
	},
	fields: [
		{
			id: 'sex',
			type: 'select',
			half: true,
			labelKey: 'sex_label',
			options: [
				{ value: 'male', labelKey: 'sex_male', selected: true },
				{ value: 'female', labelKey: 'sex_female' },
			],
		},
		{ id: 'age', type: 'number', half: true, labelKey: 'age_label', phKey: 'age_ph' },
		{ id: 'weight', type: 'number', half: true, labelKey: 'weight_label', phKey: 'weight_ph' },
		{ id: 'height', type: 'number', half: true, labelKey: 'height_label', phKey: 'height_ph' },
		{
			id: 'formula',
			type: 'select',
			half: true,
			labelKey: 'formula_label',
			options: [
				{ value: 'mifflin', labelKey: 'formula_mifflin', selected: true },
				{ value: 'harris', labelKey: 'formula_harris' },
				{ value: 'katch', labelKey: 'formula_katch' },
			],
		},
		{
			id: 'activity',
			type: 'select',
			half: true,
			labelKey: 'activity_label',
			options: [
				{ value: '1.2', labelKey: 'act_12' },
				{ value: '1.375', labelKey: 'act_1375' },
				{ value: '1.55', labelKey: 'act_155', selected: true },
				{ value: '1.725', labelKey: 'act_1725' },
				{ value: '1.9', labelKey: 'act_19' },
			],
		},
		{ id: 'bodyfat', type: 'number', half: true, labelKey: 'bodyfat_label', phKey: 'bodyfat_ph' },
	],
	results: [
		{ id: 'bmrOut', labelKey: 'bmrOut_label' },
		{ id: 'tdeeOut', labelKey: 'tdeeOut_label' },
	],
	refs: [
		{ labelKey: 'ref_ncbi_label', href: 'https://www.ncbi.nlm.nih.gov/books/NBK278991/' },
		{ labelKey: 'ref_nhlbi_label', href: 'https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm' },
	],
	computeJs: `
        var sex = sexEl.value;
        var w = parseFloat(weightEl.value);
        var h = parseFloat(heightEl.value);
        var age = parseFloat(ageEl.value);
        var formula = formulaEl.value;
        var act = parseFloat(activityEl.value);
        var bf = parseFloat(bodyfatEl.value);
        if (!(w > 0 && h > 0 && age > 0) || !Number.isFinite(act)) {
          return { ok: false, error: msgErr };
        }
        var bmr;
        if (formula === 'mifflin') {
          bmr = sex === 'male' ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
        } else if (formula === 'harris') {
          bmr = sex === 'male'
            ? 88.362 + 13.397 * w + 4.799 * h - 5.677 * age
            : 447.593 + 9.247 * w + 3.098 * h - 4.330 * age;
        } else {
          if (!(bf >= 0 && bf < 100) || !Number.isFinite(bf)) return { ok: false, error: msgErr };
          var lbm = w * (1 - bf / 100);
          bmr = 370 + 21.6 * lbm;
        }
        if (!Number.isFinite(bmr)) return { ok: false, error: msgErr };
        var tdee = bmr * act;
        return { ok: true, values: { bmrOut: fmt(bmr), tdeeOut: fmt(tdee) } };
`,
	sampleJs: `
        sexEl.value = 'male';
        weightEl.value = '70';
        heightEl.value = '175';
        ageEl.value = '30';
        formulaEl.value = 'mifflin';
        activityEl.value = '1.55';
        bodyfatEl.value = '';
`,
};
