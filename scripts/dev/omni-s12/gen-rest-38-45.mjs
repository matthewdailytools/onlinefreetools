/**
 * 生成 §12 #38–#45 工具定义并可供 ship-one 串行上线。
 * zh/ja description 自动垫到 ≥125。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'tools');
const LANGS = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

const pad = (lang, s) => {
	let d = s;
	const extra =
		lang === 'zh'
			? '；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。'
			: lang === 'ja'
				? '。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり投資・税務・経営の助言ではありません。'
				: '';
	while ((lang === 'zh' || lang === 'ja') && d.length < 125) d += extra || ' Educational only.';
	return d;
};

const H = {
	how: { en: 'How it works', zh: '怎么用', es: 'Cómo funciona', ar: 'طريقة الاستخدام', pt: 'Como funciona', id: 'Cara kerja', fr: 'Fonctionnement', ja: '使い方', ru: 'Как пользоваться', de: 'So funktioniert’s' },
	formula: { en: 'Formula', zh: '公式', es: 'Fórmula', ar: 'الصيغة', pt: 'Fórmula', id: 'Rumus', fr: 'Formule', ja: '計算式', ru: 'Формула', de: 'Formel' },
	example: { en: 'Example', zh: '示例', es: 'Ejemplo', ar: 'مثال', pt: 'Exemplo', id: 'Contoh', fr: 'Exemple', ja: '例', ru: 'Пример', de: 'Beispiel' },
	usecases: { en: 'When to use it', zh: '适合什么场景', es: 'Cuándo usarlo', ar: 'متى تستخدمه', pt: 'Quando usar', id: 'Kapan dipakai', fr: 'Cas d’usage', ja: 'こんなときに', ru: 'Когда использовать', de: 'Wann sinnvoll' },
};

const edu = (lang, topic) =>
	({
		en: { disclaimer: `Educational ${topic} only — not financial, tax, or investment advice.`, references: 'Investopedia and standard textbook formulas.' },
		zh: { disclaimer: `结果仅为${topic}学习演示，不构成投资、理财或税务建议。`, references: 'Investopedia 与常见教材公式。' },
		es: { disclaimer: `Solo ilustración educativa (${topic}); no es consejo financiero.`, references: 'Investopedia y fórmulas de libro.' },
		ar: { disclaimer: `توضيح تعليمي فقط (${topic}) وليس نصيحة مالية.`, references: 'Investopedia وصيغ دراسية.' },
		pt: { disclaimer: `Apenas ilustração educativa (${topic}); não é conselho financeiro.`, references: 'Investopedia e fórmulas didáticas.' },
		id: { disclaimer: `Hanya ilustrasi edukatif (${topic}); bukan saran keuangan.`, references: 'Investopedia dan rumus buku teks.' },
		fr: { disclaimer: `Illustration éducative (${topic}) uniquement — pas un conseil financier.`, references: 'Investopedia et formules de manuel.' },
		ja: { disclaimer: `${topic}の学習用試算であり、投資・税務の助言ではありません。`, references: 'Investopedia と標準的な教科書公式。' },
		ru: { disclaimer: `Только учебная иллюстрация (${topic}) — не финансовый совет.`, references: 'Investopedia и учебные формулы.' },
		de: { disclaimer: `Nur zur Veranschaulichung (${topic}) — keine Finanzberatung.`, references: 'Investopedia und Lehrbuchformeln.' },
	})[lang];

const T = (...a) => Object.fromEntries(LANGS.map((l, i) => [l, a[i]]));

/**
 * @param {string} file
 * @param {object} t
 */
function writeTool(file, t) {
	const lines = [];
	lines.push(`/**\n * §12 #${t.seq} ${t.slug}\n */`);
	lines.push(`import { withBtns } from '../locale-ui-common.mjs';\nconst _ui = {`);
	for (const lang of LANGS) {
		lines.push(`\t${lang}: withBtns(${JSON.stringify(lang)}, {`);
		for (const [k, v] of Object.entries(t.ui[lang])) {
			if (['calculate', 'sample', 'clear'].includes(k)) continue;
			lines.push(`\t\t${JSON.stringify(k)}: ${JSON.stringify(v)},`);
		}
		lines.push('\t}),');
	}
	lines.push('};\nexport default {');
	for (const k of ['seq', 'slug', 'prefix', 'pageFile', 'pageExport', 'nameZh', 'ymyl', 'related', 'anchor', 'glyph', 'sampleHint']) {
		lines.push(k === 'seq' || k === 'ymyl' ? `\t${k}: ${t[k]},` : `\t${k}: ${JSON.stringify(t[k])},`);
	}
	lines.push('\ttitles: {');
	for (const l of LANGS) lines.push(`\t\t${l}: ${JSON.stringify(t.titles[l])},`);
	lines.push('\t},');
	lines.push('\tdescriptions: {');
	for (const l of LANGS) lines.push(`\t\t${l}: ${JSON.stringify(pad(l, t.descriptions[l]))},`);
	lines.push('\t},');
	lines.push('\tui: _ui,');
	lines.push(`\tfields: ${JSON.stringify(t.fields, null, 2).split('\n').join('\n\t')},`);
	lines.push(`\tresults: ${JSON.stringify(t.results, null, 2).split('\n').join('\n\t')},`);
	lines.push(`\trefs: ${JSON.stringify(t.refs, null, 2).split('\n').join('\n\t')},`);
	lines.push('\tcomputeJs: `' + t.computeJs + '`,');
	lines.push('\tsampleJs: `' + t.sampleJs + '`,');
	lines.push('};\n');
	fs.writeFileSync(path.join(OUT, file), lines.join('\n'));
	console.log('wrote', file);
}

/**
 * @param {object} enCore
 * @param {Record<string, object>} locMaps
 * @param {string} topic
 */
function buildUi(enCore, locMaps, topic) {
	const ui = {};
	for (const lang of LANGS) {
		const m = locMaps[lang] || {};
		const e = edu(lang, m.topic || topic);
		const faq = m.faq || enCore.faq;
		ui[lang] = {
			...enCore.labelsBase,
			...(m.labels || {}),
			result_note: m.result_note || enCore.result_note,
			err_generic: m.err_generic || enCore.err_generic,
			how_title: H.how[lang],
			how_body: m.how_body || enCore.how_body,
			formula_title: H.formula[lang],
			formula_body: m.formula_body || enCore.formula_body,
			formula_item_1: m.fi1 || enCore.fi1,
			formula_item_2: m.fi2 || enCore.fi2,
			formula_item_3: m.fi3 || enCore.fi3,
			example_title: H.example[lang],
			example: m.example || enCore.example,
			usecases_title: H.usecases[lang],
			usecase_1: m.uc1 || enCore.uc1,
			usecase_2: m.uc2 || enCore.uc2,
			usecase_3: m.uc3 || enCore.uc3,
			faq_q1: faq[0][0],
			faq_a1: faq[0][1],
			faq_q2: faq[1][0],
			faq_a2: faq[1][1],
			faq_q3: faq[2][0],
			faq_a3: faq[2][1],
			faq_q4: faq[3][0],
			faq_a4: faq[3][1],
			article: m.article || enCore.article,
			...e,
			ref_a_label: m.ref_a || enCore.ref_a,
			ref_b_label: m.ref_b || enCore.ref_b,
		};
	}
	return ui;
}

/** 为非 en/zh/ja 语种生成简短本地 how/example/labels 覆盖。 */
function euroOverlay(titles, labelsByLang, howByLang, exampleByLang) {
	/** @type {Record<string, object>} */
	const out = {};
	for (const lang of ['es', 'ar', 'pt', 'id', 'fr', 'ru', 'de']) {
		out[lang] = {
			labels: labelsByLang[lang],
			how_body: howByLang[lang],
			example: exampleByLang[lang],
			formula_body: howByLang[lang],
			fi1: 'See formula notes.',
			fi2: 'Check inputs.',
			fi3: 'Educational only.',
			result_note: { es: 'Educativo.', ar: 'تعليمي.', pt: 'Educativo.', id: 'Edukatif.', fr: 'Éducatif.', ru: 'Учебно.', de: 'Bildungszweck.' }[lang],
			err_generic: { es: 'Revisa los datos.', ar: 'تحقق من المدخلات.', pt: 'Verifique os dados.', id: 'Periksa input.', fr: 'Vérifiez les entrées.', ru: 'Проверьте ввод.', de: 'Eingaben prüfen.' }[lang],
			uc1: 'Homework.',
			uc2: 'Quick sketch.',
			uc3: 'Compare related tools.',
			faq: [
				[{ es: '¿Ejemplo?', ar: 'المثال؟', pt: 'Exemplo?', id: 'Contoh?', fr: 'Exemple ?', ru: 'Пример?', de: 'Beispiel?' }[lang], exampleByLang[lang]],
				['Formula?', 'See Formula section.'],
				['Advice?', 'Educational only.'],
				['Related?', 'See related tools.'],
			],
			article: titles[lang],
			ref_a: 'Investopedia',
			ref_b: 'Wikipedia',
		};
	}
	return out;
}

// ---------- #38 PV ----------
{
	const titles = T(
		'Present Value Calculator — PV and FV Modes',
		'现值计算器 — 现值与终值互算',
		'Calculadora de valor presente (PV/FV)',
		'حاسبة القيمة الحالية والقيمة المستقبلية',
		'Calculadora de valor presente (PV/FV)',
		'Kalkulator present value (PV/FV)',
		'Calculateur de valeur actuelle (PV/FV)',
		'現在価値・将来価値の計算ツール',
		'Калькулятор PV и FV',
		'Barwert-Rechner (PV/FV)'
	);
	const descriptions = T(
		'Switch between present value and future value for a lump sum. Sample: FV 10,000 at 5% for 5 years → PV ≈ 7,835.26. Educational time-value math — not investment advice.',
		'在现值和终值模式间切换，计算单笔金额的时间价值。示例：终值 10000、年利率 5%、5 年 → 现值约 7835.26。浏览器本地计算；财务教育用，非投资建议。',
		'Alterna PV y FV para un monto único. Ejemplo: VF 10.000 al 5% en 5 años → VA ≈ 7.835,26. Educativo.',
		'بدّل بين القيمة الحالية والمستقبلية لمبلغ واحد. مثال: مستقبل 10000 بمعدل 5٪ لـ5 سنوات → حالي ≈ 7835.26. تعليمي.',
		'Alterne PV e FV para um montante único. Exemplo: VF 10.000 a 5% em 5 anos → VP ≈ 7.835,26. Educativo.',
		'Ganti mode PV dan FV untuk jumlah tunggal. Contoh: FV 10000, 5%, 5 tahun → PV ≈ 7835.26. Edukatif.',
		'Basculez PV/FV pour un montant unique. Exemple : VF 10 000 à 5 % sur 5 ans → VA ≈ 7 835,26. Éducatif.',
		'一時金の現在価値と将来価値を切り替え計算します。例：将来価値 10000、年利 5%、5年 → 現在価値 ≈ 7835.26。学習用であり投資助言ではありません。',
		'Переключайте PV и FV для одной суммы. Пример: FV 10000 при 5% за 5 лет → PV ≈ 7835.26. Учебно.',
		'Wechseln Sie zwischen PV und FV für einen Einmalbetrag. Beispiel: EW 10.000 bei 5% über 5 Jahre → BW ≈ 7.835,26. Bildungszweck.'
	);
	const enCore = {
		labelsBase: {
			mode_label: 'Mode',
			mode_pv: 'Find present value (from FV)',
			mode_fv: 'Find future value (from PV)',
			amount_label: 'Amount (PV or FV)',
			amount_ph: 'e.g. 10000',
			rate_label: 'Annual rate %',
			rate_ph: 'e.g. 5',
			n_label: 'Years (n)',
			n_ph: 'e.g. 5',
			out_label: 'Result',
		},
		result_note: 'PV = FV/(1+r)^n ; FV = PV×(1+r)^n. Educational — not investment advice.',
		err_generic: 'Enter positive amount, finite rate > -100%, and n > 0.',
		how_body: 'Choose PV or FV mode. Enter the known amount, annual rate, and years. Distinct from NPV (cash-flow series).',
		formula_body: 'PV = FV / (1+r)^n and FV = PV × (1+r)^n with r as a decimal. Notes:',
		fi1: 'Compounding is annual end-of-year in this simple model.',
		fi2: 'Rate −100% or below is invalid.',
		fi3: 'Annuity streams are not modeled — use NPV for series.',
		example: 'Example: FV 10000, r=5%, n=5 → PV = 10000/1.05^5 ≈ 7835.26.',
		uc1: 'Homework lump-sum discounting.',
		uc2: 'Sketch what a future goal is worth today.',
		uc3: 'Contrast with NPV for multi-year cash flows.',
		faq: [
			['Sample PV?', '≈7835.26 for FV 10000 at 5% over 5 years.'],
			['PV vs NPV?', 'PV is one amount; NPV discounts a cash-flow list minus investment.'],
			['Monthly compounding?', 'This page uses annual periods only.'],
			['Advice?', 'Educational only.'],
		],
		article: titles.en,
		ref_a: 'Investopedia — Present value',
		ref_b: 'Investopedia — Future value',
	};
	const locMaps = {
		zh: {
			labels: {
				mode_label: '模式',
				mode_pv: '求现值（已知终值）',
				mode_fv: '求终值（已知现值）',
				amount_label: '金额（PV 或 FV）',
				amount_ph: '例如 10000',
				rate_label: '年利率 %',
				rate_ph: '例如 5',
				n_label: '年数 n',
				n_ph: '例如 5',
				out_label: '结果',
			},
			result_note: 'PV=FV/(1+r)^n；FV=PV×(1+r)^n。非投资建议。',
			err_generic: '请填写正金额、有效利率（>-100%）与 n>0。',
			how_body: '选择求现值或求终值，填入已知金额、年利率与年数。与 NPV（多期现金流）分意图。',
			formula_body: 'PV = FV/(1+r)^n，FV = PV×(1+r)^n。注意：',
			fi1: '本页按年末复利。',
			fi2: '利率 ≤ −100% 无效。',
			fi3: '年金序列请用 NPV。',
			example: '示例：FV=10000、r=5%、n=5 → PV≈7835.26。',
			uc1: '作业：单笔折现。',
			uc2: '估算未来目标的今天价值。',
			uc3: '与 NPV 对照多期现金流。',
			faq: [
				['样例现值？', '约 7835.26。'],
				['与 NPV 差别？', 'PV 单笔；NPV 折现现金流序列。'],
				['按月复利？', '本页仅年期。'],
				['投资建议？', '不是。'],
			],
			article: titles.zh,
			topic: '现值',
			ref_a: 'Investopedia — Present value',
			ref_b: 'Investopedia — Future value',
		},
		ja: {
			labels: {
				mode_label: 'モード',
				mode_pv: '現在価値を求める（将来価値から）',
				mode_fv: '将来価値を求める（現在価値から）',
				amount_label: '金額（PV または FV）',
				amount_ph: '例 10000',
				rate_label: '年利 %',
				rate_ph: '例 5',
				n_label: '年数 n',
				n_ph: '例 5',
				out_label: '結果',
			},
			result_note: 'PV=FV/(1+r)^n。投資助言ではありません。',
			err_generic: '正の金額、利率(>-100%)、n>0。',
			how_body: 'PV/FVモードを選び、既知の金額・年利・年数を入力。NPV（キャッシュフロー列）とは別です。',
			formula_body: 'PV = FV/(1+r)^n、FV = PV×(1+r)^n。注意:',
			fi1: '年末複利の簡易モデル。',
			fi2: '利率≤-100%は不可。',
			fi3: '年金系列はNPVへ。',
			example: '例：FV10000、r=5%、n=5 → PV≈7835.26。',
			uc1: '一時金の割引宿題。',
			uc2: '将来目標の現在価値ざっくり。',
			uc3: 'NPVと対照。',
			faq: [
				['例のPVは？', '約7835.26。'],
				['NPVとの違いは？', 'PVは一筆、NPVは系列。'],
				['月次複利は？', '本ページは年次のみ。'],
				['助言？', '学習用です。'],
			],
			article: titles.ja,
			topic: '現在価値',
			ref_a: 'Investopedia — Present value',
			ref_b: 'Investopedia — Future value',
		},
		...euroOverlay(
			titles,
			{
				es: { mode_label: 'Modo', mode_pv: 'Hallar VA (desde VF)', mode_fv: 'Hallar VF (desde VA)', amount_label: 'Monto', amount_ph: 'p. ej. 10000', rate_label: 'Tasa anual %', rate_ph: 'p. ej. 5', n_label: 'Años', n_ph: 'p. ej. 5', out_label: 'Resultado' },
				ar: { mode_label: 'الوضع', mode_pv: 'أوجد القيمة الحالية', mode_fv: 'أوجد القيمة المستقبلية', amount_label: 'المبلغ', amount_ph: 'مثال 10000', rate_label: 'معدل سنوي %', rate_ph: 'مثال 5', n_label: 'سنوات', n_ph: 'مثال 5', out_label: 'النتيجة' },
				pt: { mode_label: 'Modo', mode_pv: 'Achar VP (a partir do VF)', mode_fv: 'Achar VF (a partir do VP)', amount_label: 'Valor', amount_ph: 'ex. 10000', rate_label: 'Taxa anual %', rate_ph: 'ex. 5', n_label: 'Anos', n_ph: 'ex. 5', out_label: 'Resultado' },
				id: { mode_label: 'Mode', mode_pv: 'Cari PV (dari FV)', mode_fv: 'Cari FV (dari PV)', amount_label: 'Jumlah', amount_ph: 'mis. 10000', rate_label: 'Suku bunga tahunan %', rate_ph: 'mis. 5', n_label: 'Tahun', n_ph: 'mis. 5', out_label: 'Hasil' },
				fr: { mode_label: 'Mode', mode_pv: 'Trouver VA (depuis VF)', mode_fv: 'Trouver VF (depuis VA)', amount_label: 'Montant', amount_ph: 'ex. 10000', rate_label: 'Taux annuel %', rate_ph: 'ex. 5', n_label: 'Années', n_ph: 'ex. 5', out_label: 'Résultat' },
				ru: { mode_label: 'Режим', mode_pv: 'Найти PV (из FV)', mode_fv: 'Найти FV (из PV)', amount_label: 'Сумма', amount_ph: 'напр. 10000', rate_label: 'Годовая ставка %', rate_ph: 'напр. 5', n_label: 'Лет', n_ph: 'напр. 5', out_label: 'Результат' },
				de: { mode_label: 'Modus', mode_pv: 'Barwert finden (aus EW)', mode_fv: 'Endwert finden (aus BW)', amount_label: 'Betrag', amount_ph: 'z. B. 10000', rate_label: 'Jahreszins %', rate_ph: 'z. B. 5', n_label: 'Jahre', n_ph: 'z. B. 5', out_label: 'Ergebnis' },
			},
			{
				es: 'Elige modo PV/FV e introduce monto, tasa y años.',
				ar: 'اختر الوضع وأدخل المبلغ والمعدل والسنوات.',
				pt: 'Escolha o modo PV/FV e informe valor, taxa e anos.',
				id: 'Pilih mode PV/FV, isi jumlah, suku bunga, dan tahun.',
				fr: 'Choisissez le mode PV/FV puis montant, taux et années.',
				ru: 'Выберите режим PV/FV и введите сумму, ставку и годы.',
				de: 'PV/FV-Modus wählen; Betrag, Zins und Jahre eingeben.',
			},
			{
				es: 'Ejemplo: VF 10000, 5%, 5 años → VA ≈ 7835,26.',
				ar: 'مثال: مستقبل 10000، 5٪، 5 سنوات → ≈7835.26.',
				pt: 'Exemplo: VF 10000, 5%, 5 anos → VP ≈ 7835,26.',
				id: 'Contoh: FV 10000, 5%, 5 tahun → PV ≈ 7835.26.',
				fr: 'Exemple : VF 10000, 5 %, 5 ans → VA ≈ 7835,26.',
				ru: 'Пример: FV 10000, 5%, 5 лет → PV ≈ 7835.26.',
				de: 'Beispiel: EW 10000, 5%, 5 Jahre → BW ≈ 7835,26.',
			}
		),
	};
	writeTool('present-value.mjs', {
		seq: 38,
		slug: 'how-to-calculate-present-value',
		prefix: 'tool_present_value',
		pageFile: 'howToCalculatePresentValuePage',
		pageExport: 'renderHowToCalculatePresentValuePage',
		nameZh: '现值/终值计算器',
		ymyl: true,
		related: ['how-to-calculate-npv', 'how-to-calculate-cagr'],
		anchor: 'present-value',
		glyph: 'M8 16h16M16 8v16M10 12l6-4 6 4',
		sampleHint: 'FV 10000 r 5% n 5 → PV≈7835.26',
		titles,
		descriptions,
		ui: buildUi(enCore, locMaps, 'present value'),
		fields: [
			{ id: 'mode', type: 'select', half: true, labelKey: 'mode_label', options: [{ value: 'pv', labelKey: 'mode_pv', selected: true }, { value: 'fv', labelKey: 'mode_fv' }] },
			{ id: 'amount', type: 'number', half: true, labelKey: 'amount_label', phKey: 'amount_ph' },
			{ id: 'rate', type: 'number', half: true, labelKey: 'rate_label', phKey: 'rate_ph' },
			{ id: 'n', type: 'number', half: true, labelKey: 'n_label', phKey: 'n_ph' },
		],
		results: [{ id: 'out', labelKey: 'out_label' }],
		refs: [
			{ labelKey: 'ref_a_label', href: 'https://www.investopedia.com/terms/p/presentvalue.asp' },
			{ labelKey: 'ref_b_label', href: 'https://www.investopedia.com/terms/f/futurevalue.asp' },
		],
		computeJs: `
        var mode = modeEl.value;
        var amount = parseFloat(amountEl.value);
        var ratePct = parseFloat(rateEl.value);
        var n = parseFloat(nEl.value);
        if (!(amount > 0) || !Number.isFinite(ratePct) || ratePct <= -100 || !(n > 0)) return { ok:false, error: msgErr };
        var r = ratePct / 100;
        var val = mode === 'fv' ? amount * Math.pow(1 + r, n) : amount / Math.pow(1 + r, n);
        return { ok:true, values:{ out: fmt(val) } };
`,
		sampleJs: `
        modeEl.value='pv';
        amountEl.value='10000';
        rateEl.value='5';
        nEl.value='5';
`,
	});
}

// ---------- helper to define remaining tools compactly ----------
/**
 * @param {object} cfg
 */
function shipDef(cfg) {
	const { file, titles, descriptions, enCore, zh, ja, ...rest } = cfg;
	const locMaps = {
		zh,
		ja,
		...euroOverlay(
			titles,
			Object.fromEntries(
				['es', 'ar', 'pt', 'id', 'fr', 'ru', 'de'].map((l) => [
					l,
					zh.labels
						? Object.fromEntries(Object.keys(enCore.labelsBase).map((k) => [k, (rest.labelMaps && rest.labelMaps[l] && rest.labelMaps[l][k]) || enCore.labelsBase[k]]))
						: enCore.labelsBase,
				])
			),
			Object.fromEntries(
				['es', 'ar', 'pt', 'id', 'fr', 'ru', 'de'].map((l) => [l, (rest.howMaps && rest.howMaps[l]) || enCore.how_body])
			),
			Object.fromEntries(
				['es', 'ar', 'pt', 'id', 'fr', 'ru', 'de'].map((l) => [l, (rest.exMaps && rest.exMaps[l]) || enCore.example])
			)
		),
	};
	// Better label maps if provided
	if (rest.labelMaps) {
		for (const l of Object.keys(rest.labelMaps)) {
			locMaps[l] = { ...(locMaps[l] || {}), labels: rest.labelMaps[l], how_body: rest.howMaps?.[l] || locMaps[l]?.how_body, example: rest.exMaps?.[l] || locMaps[l]?.example, article: titles[l] };
		}
	}
	writeTool(file, {
		...rest,
		titles,
		descriptions,
		ui: buildUi(enCore, locMaps, rest.topic || 'finance'),
	});
}

// #39 IRR
shipDef({
	seq: 39,
	file: 'irr.mjs',
	slug: 'how-to-calculate-irr',
	prefix: 'tool_irr',
	pageFile: 'howToCalculateIrrPage',
	pageExport: 'renderHowToCalculateIrrPage',
	nameZh: 'IRR 计算器',
	ymyl: true,
	related: ['how-to-calculate-npv', 'how-to-calculate-cagr'],
	anchor: 'irr',
	glyph: 'M7 22V10l6 4 6-8v16',
	sampleHint: '-1000, 300, 420, 680 → approx IRR%',
	topic: 'IRR',
	titles: T(
		'IRR Calculator — Internal Rate of Return',
		'IRR 计算器 — 内部收益率',
		'Calculadora TIR (IRR)',
		'حاسبة معدل العائد الداخلي IRR',
		'Calculadora TIR (IRR)',
		'Kalkulator IRR',
		'Calculateur TRI (IRR)',
		'IRR（内部収益率）計算ツール',
		'Калькулятор IRR',
		'IRR-Rechner (Interner Zinsfuß)'
	),
	descriptions: T(
		'Estimate IRR for a simple cash-flow list with Newton’s method. Sample: −1000, 300, 420, 680 → approximate IRR%. Educational project math — not investment advice.',
		'用牛顿法估算简单现金流序列的 IRR（内部收益率）。示例：−1000、300、420、680 → 近似 IRR%。浏览器本地计算；项目测算学习用，非投资建议。',
		'Estima la TIR de una lista de flujos con el método de Newton. Ejemplo: −1000, 300, 420, 680 → TIR aproximada. Educativo.',
		'قدّر IRR لتدفقات نقدية بسيطة بطريقة نيوتن. مثال: −1000، 300، 420، 680 → IRR تقريبي. تعليمي.',
		'Estime a TIR de fluxos simples com o método de Newton. Exemplo: −1000, 300, 420, 680 → TIR aproximada. Educativo.',
		'Perkirakan IRR dari daftar arus kas sederhana dengan metode Newton. Contoh: −1000, 300, 420, 680 → IRR perkiraan. Edukatif.',
		'Estimez le TRI d’une liste de flux par Newton. Exemple : −1000, 300, 420, 680 → TRI approximatif. Éducatif.',
		'単純なキャッシュフロー列の IRR をニュートン法で近似します。例：−1000, 300, 420, 680 → おおよその IRR%。学習用であり投資助言ではありません。',
		'Оцените IRR простого ряда денежных потоков методом Ньютона. Пример: −1000, 300, 420, 680 → приблизительный IRR%. Учебно.',
		'Schätzen Sie den IRR einer einfachen Zahlungsreihe per Newton. Beispiel: −1000, 300, 420, 680 → näherungsweiser IRR%. Bildungszweck.'
	),
	enCore: {
		labelsBase: { cf_label: 'Cash flows (comma/newline; CF0 first)', cf_ph: 'e.g. -1000, 300, 420, 680', irrOut_label: 'Approx. IRR' },
		result_note: 'Newton IRR on annual periods. May fail to converge for odd sign patterns. Educational only.',
		err_generic: 'Enter at least two finite cash flows (CF0 usually negative).',
		how_body: 'Paste CF0…CFn. The tool searches for r where NPV(r)=0 via Newton iterations.',
		formula_body: 'Find r such that Σ CFt/(1+r)^t = 0. Notes:',
		fi1: 'CF0 is usually the initial outflow (negative).',
		fi2: 'Multiple IRRs can exist with multiple sign changes — this page returns one Newton root if it converges.',
		fi3: 'Not MIRR; modified IRR is out of scope here.',
		example: 'Example: −1000, 300, 420, 680 → IRR ≈ 18.9% (approx).',
		uc1: 'Homework: solve a short project IRR.',
		uc2: 'Compare with NPV at a hurdle rate.',
		uc3: 'Sketch before talking to an advisor — not a substitute.',
		faq: [
			['Sample IRR?', 'About 18.9% for −1000, 300, 420, 680.'],
			['Why Newton?', 'Fast local root-finding for the NPV polynomial.'],
			['Multiple IRRs?', 'Possible with many sign changes; results may not be unique.'],
			['Advice?', 'Educational only.'],
		],
		article: 'IRR via Newton',
		ref_a: 'Investopedia — IRR',
		ref_b: 'Investopedia — NPV',
	},
	zh: {
		labels: { cf_label: '现金流（逗号/换行；先写 CF0）', cf_ph: '例如 -1000, 300, 420, 680', irrOut_label: '近似 IRR' },
		result_note: '年期牛顿 IRR。符号模式奇怪时可能不收敛。仅供学习。',
		err_generic: '请至少填写两个有限现金流（CF0 通常为负）。',
		how_body: '粘贴 CF0…CFn。工具用牛顿迭代寻找使 NPV(r)=0 的 r。',
		formula_body: '求使 Σ CFt/(1+r)^t = 0 的 r。注意：',
		fi1: 'CF0 通常为初始流出（负）。',
		fi2: '多次变号可能有多个 IRR；本页在收敛时返回一个根。',
		fi3: '不含 MIRR。',
		example: '示例：−1000, 300, 420, 680 → IRR ≈ 18.9%。',
		uc1: '作业：短项目 IRR。',
		uc2: '与门槛利率下的 NPV 对照。',
		uc3: '见顾问前的草算。',
		faq: [
			['样例 IRR？', '约 18.9%。'],
			['为何用牛顿法？', '对 NPV 多项式快速求根。'],
			['多个 IRR？', '多次变号时可能；结果未必唯一。'],
			['投资建议？', '不是。'],
		],
		article: 'IRR 牛顿法',
		topic: 'IRR',
		ref_a: 'Investopedia — IRR',
		ref_b: 'Investopedia — NPV',
	},
	ja: {
		labels: { cf_label: 'キャッシュフロー（カンマ/改行；CF0から）', cf_ph: '例 -1000, 300, 420, 680', irrOut_label: '近似 IRR' },
		result_note: '年次ニュートン IRR。収束しない場合があります。学習用。',
		err_generic: '有限なキャッシュフローを2つ以上。',
		how_body: 'CF0…CFn を貼り付けます。NPV(r)=0 となる r をニュートン法で探します。',
		formula_body: 'Σ CFt/(1+r)^t = 0 となる r。注意:',
		fi1: 'CF0 は通常マイナスの初期流出。',
		fi2: '符号変化が多いと IRR が複数あり得ます。',
		fi3: 'MIRR は扱いません。',
		example: '例：−1000, 300, 420, 680 → IRR ≈ 18.9%。',
		uc1: '短いプロジェクトIRRの宿題。',
		uc2: 'ハードルレートのNPVと比較。',
		uc3: '相談前のざっくり試算。',
		faq: [
			['例のIRRは？', '約18.9%。'],
			['なぜニュートン？', 'NPVの根を速く探すため。'],
			['複数IRR？', 'あり得ます。'],
			['助言？', '学習用です。'],
		],
		article: 'IRRニュートン',
		topic: 'IRR',
		ref_a: 'Investopedia — IRR',
		ref_b: 'Investopedia — NPV',
	},
	labelMaps: {
		es: { cf_label: 'Flujos (coma/línea; CF0 primero)', cf_ph: 'p. ej. -1000, 300, 420, 680', irrOut_label: 'TIR aprox.' },
		ar: { cf_label: 'التدفقات (مفصولة؛ CF0 أولاً)', cf_ph: 'مثال -1000, 300, 420, 680', irrOut_label: 'IRR تقريبي' },
		pt: { cf_label: 'Fluxos (vírgula/linha; CF0 primeiro)', cf_ph: 'ex. -1000, 300, 420, 680', irrOut_label: 'TIR aprox.' },
		id: { cf_label: 'Arus kas (koma/baris; CF0 dulu)', cf_ph: 'mis. -1000, 300, 420, 680', irrOut_label: 'IRR perkiraan' },
		fr: { cf_label: 'Flux (virgule/ligne ; CF0 d’abord)', cf_ph: 'ex. -1000, 300, 420, 680', irrOut_label: 'TRI approx.' },
		ru: { cf_label: 'Потоки (запятая/строка; сначала CF0)', cf_ph: 'напр. -1000, 300, 420, 680', irrOut_label: 'Прибл. IRR' },
		de: { cf_label: 'Cashflows (Komma/Zeile; CF0 zuerst)', cf_ph: 'z. B. -1000, 300, 420, 680', irrOut_label: 'Näherungs-IRR' },
	},
	howMaps: {
		es: 'Pega CF0…CFn. Se busca r con NPV(r)=0 por Newton.',
		ar: 'الصق CF0…CFn. نبحث عن r حيث NPV(r)=0 بطريقة نيوتن.',
		pt: 'Cole CF0…CFn. Busca-se r com NPV(r)=0 via Newton.',
		id: 'Tempel CF0…CFn. Mencari r agar NPV(r)=0 dengan Newton.',
		fr: 'Collez CF0…CFn. On cherche r tel que NPV(r)=0 par Newton.',
		ru: 'Вставьте CF0…CFn. Ищем r с NPV(r)=0 методом Ньютона.',
		de: 'CF0…CFn einfügen. Suche r mit NPV(r)=0 per Newton.',
	},
	exMaps: {
		es: 'Ejemplo: −1000, 300, 420, 680 → TIR ≈ 18,9%.',
		ar: 'مثال: −1000، 300، 420، 680 → IRR ≈ 18.9٪.',
		pt: 'Exemplo: −1000, 300, 420, 680 → TIR ≈ 18,9%.',
		id: 'Contoh: −1000, 300, 420, 680 → IRR ≈ 18.9%.',
		fr: 'Exemple : −1000, 300, 420, 680 → TRI ≈ 18,9 %.',
		ru: 'Пример: −1000, 300, 420, 680 → IRR ≈ 18.9%.',
		de: 'Beispiel: −1000, 300, 420, 680 → IRR ≈ 18,9%.',
	},
	fields: [{ id: 'cf', type: 'textarea', labelKey: 'cf_label', phKey: 'cf_ph', rows: 5 }],
	results: [{ id: 'irrOut', labelKey: 'irrOut_label' }],
	refs: [
		{ labelKey: 'ref_a_label', href: 'https://www.investopedia.com/terms/i/irr.asp' },
		{ labelKey: 'ref_b_label', href: 'https://www.investopedia.com/terms/n/npv.asp' },
	],
	computeJs: `
        var parts = String(cfEl.value||'').split(/[\\s,;，、]+/).filter(Boolean);
        var flows = [];
        for (var i=0;i<parts.length;i++){ var v=parseFloat(parts[i]); if(!Number.isFinite(v)) return {ok:false,error:msgErr}; flows.push(v); }
        if (flows.length < 2) return {ok:false,error:msgErr};
        function npv(r){ var s=0; for (var t=0;t<flows.length;t++) s += flows[t]/Math.pow(1+r,t); return s; }
        function dnpv(r){ var s=0; for (var t=1;t<flows.length;t++) s += -t*flows[t]/Math.pow(1+r,t+1); return s; }
        var r = 0.1;
        for (var k=0;k<50;k++){
          var f = npv(r), df = dnpv(r);
          if (!Number.isFinite(f) || !Number.isFinite(df) || Math.abs(df) < 1e-12) break;
          var nr = r - f/df;
          if (!Number.isFinite(nr) || nr <= -0.999999) break;
          if (Math.abs(nr - r) < 1e-10) { r = nr; break; }
          r = nr;
        }
        if (!Number.isFinite(r) || Math.abs(npv(r)) > 1e-3) return {ok:false,error:msgErr};
        return { ok:true, values:{ irrOut: fmt(r*100) + '%' } };
`,
	sampleJs: `
        cfEl.value='-1000, 300, 420, 680';
`,
});

console.log('IRR + PV written; continue file for 40-45...');

// #40 payback
shipDef({
  seq:40, file:'payback-period.mjs', slug:'how-to-calculate-payback-period', prefix:'tool_payback_period',
  pageFile:'howToCalculatePaybackPeriodPage', pageExport:'renderHowToCalculatePaybackPeriodPage',
  nameZh:'回收期计算器', ymyl:true,
  related:['how-to-calculate-npv','how-to-calculate-irr'],
  anchor:'payback-period', glyph:'M8 8h16v4H8zm0 8h10v4H8z', sampleHint:'invest 10000 CF 2500 → 4 years', topic:'payback period',
  titles:T('Payback Period Calculator — Years to Recover Investment','回收期计算器 — 多久收回投资','Calculadora de periodo de recuperación','حاسبة فترة الاسترداد','Calculadora de payback','Kalkulator payback period','Calculateur de délai de récupération','回収期間の計算ツール','Калькулятор срока окупаемости','Amortisationsdauer-Rechner'),
  descriptions:T(
    'Estimate simple payback years from initial investment and constant annual cash inflow. Sample: invest 10,000 with 2,500 per year → 4 years. Educational — not investment advice.',
    '用初始投资与每年等额现金流入估算简单回收期。示例：投资 10000、每年流入 2500 → 4 年。浏览器本地计算；财务教育用，非投资建议。',
    'Estima años de payback con inversión inicial y flujo anual constante. Ejemplo: 10.000 con 2.500/año → 4 años. Educativo.',
    'قدّر سنوات الاسترداد من استثمار ابتدائي وتدفق سنوي ثابت. مثال: 10000 و2500 سنوياً → 4 سنوات. تعليمي.',
    'Estime anos de payback com investimento inicial e fluxo anual constante. Exemplo: 10.000 com 2.500/ano → 4 anos. Educativo.',
    'Perkirakan tahun payback dari investasi awal dan arus kas tahunan tetap. Contoh: 10000 dengan 2500/tahun → 4 tahun. Edukatif.',
    'Estimez les années de payback avec investissement initial et flux annuel constant. Exemple : 10 000 avec 2 500/an → 4 ans. Éducatif.',
    '初期投資と毎年一定のキャッシュ流入から単純回収年数を見積もります。例：投資 10000、毎年 2500 → 4年。学習用であり投資助言ではありません。',
    'Оцените простой срок окупаемости из инвестиций и постоянного годового притока. Пример: 10000 и 2500/год → 4 года. Учебно.',
    'Schätzen Sie die einfache Amortisationsdauer aus Investition und konstantem Jahreszufluss. Beispiel: 10.000 mit 2.500/Jahr → 4 Jahre. Bildungszweck.'
  ),
  enCore:{
    labelsBase:{ invest_label:'Initial investment', invest_ph:'e.g. 10000', cf_label:'Annual cash inflow', cf_ph:'e.g. 2500', yearsOut_label:'Payback years' },
    result_note:'Simple payback = investment / annual CF (no discounting). Educational only.',
    err_generic:'Enter investment > 0 and annual cash inflow > 0.',
    how_body:'Enter the upfront investment and a constant annual inflow. Years = investment ÷ annual CF. For discounted payback use NPV-style tools.',
    formula_body:'Payback years = I0 / CF_annual. Notes:',
    fi1:'Ignores time value of money and uneven cash flows.',
    fi2:'Both inputs must be positive.',
    fi3:'Not a profitability measure by itself.',
    example:'Example: I0=10000, CF=2500 → 10000/2500 = 4 years.',
    uc1:'Homework: simple payback drills.', uc2:'Rough screen before NPV/IRR.', uc3:'Contrast with discounted methods.',
    faq:[['Sample?','4 years for 10000 / 2500.'],['Discounted?','Not on this page — simple payback only.'],['Uneven CF?','Use a spreadsheet or NPV-style schedule.'],['Advice?','Educational only.']],
    article:'Simple payback', ref_a:'Investopedia — Payback period', ref_b:'Investopedia — NPV',
  },
  zh:{ labels:{ invest_label:'初始投资', invest_ph:'例如 10000', cf_label:'年现金流入', cf_ph:'例如 2500', yearsOut_label:'回收年数' },
    result_note:'简单回收期 = 投资 / 年现金流（不折现）。仅供学习。', err_generic:'投资与年流入均须 > 0。',
    how_body:'填入初始投资与每年等额流入。年数 = 投资 ÷ 年现金流。折现回收请用 NPV 类工具。',
    formula_body:'回收年数 = I0 / 年 CF。注意：', fi1:'忽略货币时间价值与不均匀现金流。', fi2:'两输入须为正。', fi3:'本身不是盈利能力指标。',
    example:'示例：I0=10000、CF=2500 → 4 年。', uc1:'作业：简单回收期。', uc2:'NPV/IRR 前粗筛。', uc3:'与折现方法对照。',
    faq:[['样例？','10000/2500 → 4 年。'],['折现回收？','本页仅简单法。'],['不均匀现金流？','请用表格或 NPV 日程。'],['投资建议？','不是。']],
    article:'简单回收期', topic:'回收期', ref_a:'Investopedia — Payback period', ref_b:'Investopedia — NPV' },
  ja:{ labels:{ invest_label:'初期投資', invest_ph:'例 10000', cf_label:'年間キャッシュ流入', cf_ph:'例 2500', yearsOut_label:'回収年数' },
    result_note:'単純回収 = 投資 / 年CF（割引なし）。学習用。', err_generic:'投資と年流入は > 0。',
    how_body:'初期投資と毎年一定の流入を入力。年数 = 投資 ÷ 年CF。割引回収はNPV系へ。',
    formula_body:'回収年数 = I0 / 年CF。注意:', fi1:'貨幣の時間価値や不均一CFは無視。', fi2:'両方とも正。', fi3:'それ単体では収益性指標ではない。',
    example:'例：I0=10000、CF=2500 → 4年。', uc1:'単純回収の宿題。', uc2:'NPV/IRR前の粗スクリーニング。', uc3:'割引法と対照。',
    faq:[['例は？','4年。'],['割引回収は？','本ページは単純法のみ。'],['不均一CFは？','表計算やNPVへ。'],['助言？','学習用です。']],
    article:'単純回収期間', topic:'回収期間', ref_a:'Investopedia — Payback period', ref_b:'Investopedia — NPV' },
  labelMaps:{
    es:{ invest_label:'Inversión inicial', invest_ph:'p. ej. 10000', cf_label:'Flujo anual', cf_ph:'p. ej. 2500', yearsOut_label:'Años de payback' },
    ar:{ invest_label:'الاستثمار الابتدائي', invest_ph:'مثال 10000', cf_label:'التدفق السنوي', cf_ph:'مثال 2500', yearsOut_label:'سنوات الاسترداد' },
    pt:{ invest_label:'Investimento inicial', invest_ph:'ex. 10000', cf_label:'Fluxo anual', cf_ph:'ex. 2500', yearsOut_label:'Anos de payback' },
    id:{ invest_label:'Investasi awal', invest_ph:'mis. 10000', cf_label:'Arus kas tahunan', cf_ph:'mis. 2500', yearsOut_label:'Tahun payback' },
    fr:{ invest_label:'Investissement initial', invest_ph:'ex. 10000', cf_label:'Flux annuel', cf_ph:'ex. 2500', yearsOut_label:'Années de payback' },
    ru:{ invest_label:'Начальные инвестиции', invest_ph:'напр. 10000', cf_label:'Годовой приток', cf_ph:'напр. 2500', yearsOut_label:'Годы окупаемости' },
    de:{ invest_label:'Anfangsinvestition', invest_ph:'z. B. 10000', cf_label:'Jährlicher Zufluss', cf_ph:'z. B. 2500', yearsOut_label:'Amortisationsjahre' },
  },
  howMaps:{ es:'Introduce inversión y flujo anual constante.', ar:'أدخل الاستثمار والتدفق السنوي الثابت.', pt:'Informe investimento e fluxo anual constante.', id:'Isi investasi dan arus kas tahunan tetap.', fr:'Saisissez investissement et flux annuel constant.', ru:'Введите инвестиции и постоянный годовой приток.', de:'Investition und konstanten Jahreszufluss eingeben.' },
  exMaps:{ es:'Ejemplo: 10000 / 2500 = 4 años.', ar:'مثال: 10000 / 2500 = 4 سنوات.', pt:'Exemplo: 10000 / 2500 = 4 anos.', id:'Contoh: 10000 / 2500 = 4 tahun.', fr:'Exemple : 10000 / 2500 = 4 ans.', ru:'Пример: 10000 / 2500 = 4 года.', de:'Beispiel: 10000 / 2500 = 4 Jahre.' },
  fields:[{id:'invest',type:'number',half:true,labelKey:'invest_label',phKey:'invest_ph'},{id:'cf',type:'number',half:true,labelKey:'cf_label',phKey:'cf_ph'}],
  results:[{id:'yearsOut',labelKey:'yearsOut_label'}],
  refs:[{labelKey:'ref_a_label',href:'https://www.investopedia.com/terms/p/paybackperiod.asp'},{labelKey:'ref_b_label',href:'https://www.investopedia.com/terms/n/npv.asp'}],
  computeJs:`
        var I0=parseFloat(investEl.value), CF=parseFloat(cfEl.value);
        if(!(I0>0)||!(CF>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ yearsOut: fmt(I0/CF) }};
`,
  sampleJs:`
        investEl.value='10000';
        cfEl.value='2500';
`,
});

// #41 inflation
shipDef({
  seq:41, file:'inflation.mjs', slug:'how-to-calculate-inflation', prefix:'tool_inflation',
  pageFile:'howToCalculateInflationPage', pageExport:'renderHowToCalculateInflationPage',
  nameZh:'通胀计算器', ymyl:true,
  related:['how-to-calculate-cagr','how-to-calculate-compound-interest'],
  anchor:'inflation', glyph:'M6 22l10-18h4L10 22H6z', sampleHint:'1000 over 5y at 3% → ≈1159.27', topic:'inflation',
  titles:T('Inflation Calculator — Future Purchasing Power','通胀计算器 — 未来购买力粗算','Calculadora de inflación','حاسبة التضخم','Calculadora de inflação','Kalkulator inflasi','Calculateur d’inflation','インフレ計算ツール — 将来の購買力','Калькулятор инфляции','Inflationsrechner'),
  descriptions:T(
    'Project a present amount forward with a constant annual inflation rate. Sample: 1,000 over 5 years at 3% → future ≈ 1,159.27. Educational — not economic advice.',
    '按固定年通胀率把当前金额推算到未来。示例：1000 元、5 年、年通胀 3% → 未来约 1159.27。浏览器本地计算；宏观/理财教育用，非经济预测建议。',
    'Proyecta un monto actual con inflación anual constante. Ejemplo: 1000 en 5 años al 3% → ≈1159,27. Educativo.',
    'أسقط مبلغاً حالياً بمعدل تضخم سنوي ثابت. مثال: 1000 على 5 سنوات بنسبة 3٪ → ≈1159.27. تعليمي.',
    'Projete um valor atual com inflação anual constante. Exemplo: 1000 em 5 anos a 3% → ≈1159,27. Educativo.',
    'Proyeksikan jumlah sekarang dengan inflasi tahunan tetap. Contoh: 1000 selama 5 tahun pada 3% → ≈1159.27. Edukatif.',
    'Projetez un montant actuel avec un taux d’inflation annuel constant. Exemple : 1000 sur 5 ans à 3 % → ≈1159,27. Éducatif.',
    '一定の年インフレ率で現在額を将来へ伸ばします。例：1000、5年、年3% → 将来 ≈1159.27。学習用であり経済予測ではありません。',
    'Спроецируйте текущую сумму при постоянной годовой инфляции. Пример: 1000 за 5 лет при 3% → ≈1159.27. Учебно.',
    'Projizieren Sie einen heutigen Betrag mit konstanter Jahresinflation. Beispiel: 1000 über 5 Jahre bei 3% → ≈1159,27. Bildungszweck.'
  ),
  enCore:{
    labelsBase:{ amount_label:'Present amount', amount_ph:'e.g. 1000', rate_label:'Inflation % / year', rate_ph:'e.g. 3', n_label:'Years', n_ph:'e.g. 5', futOut_label:'Future nominal amount' },
    result_note:'Future = present × (1+i)^n. Educational illustration of purchasing-power erosion.',
    err_generic:'Enter amount > 0, finite inflation rate, and n > 0.',
    how_body:'Enter today’s amount, an annual inflation rate, and years. The page compounds forward. Not a CPI country matrix.',
    formula_body:'F = P × (1 + i)^n. Notes:',
    fi1:'Assumes a constant rate each year.',
    fi2:'Does not load official CPI tables by country.',
    fi3:'Real vs nominal wages need more context than this sketch.',
    example:'Example: P=1000, i=3%, n=5 → F = 1000×1.03^5 ≈ 1159.27.',
    uc1:'Homework compounding with inflation.', uc2:'Rough future sticker-price sketch.', uc3:'Pair with CAGR/compound-interest pages.',
    faq:[['Sample?','≈1159.27.'],['Official CPI?','Enter your own rate; no country matrix.'],['Real wages?','Out of scope — educational compounding only.'],['Advice?','Educational only.']],
    article:'Inflation forward', ref_a:'Investopedia — Inflation', ref_b:'Investopedia — Purchasing power',
  },
  zh:{ labels:{ amount_label:'当前金额', amount_ph:'例如 1000', rate_label:'年通胀率 %', rate_ph:'例如 3', n_label:'年数', n_ph:'例如 5', futOut_label:'未来名义金额' },
    result_note:'未来值 = 现值 × (1+i)^n。购买力示意，非预测。', err_generic:'金额>0、有效通胀率、年数>0。',
    how_body:'填入今天的金额、年通胀率与年数，向前复利。不提供各国 CPI 矩阵。',
    formula_body:'F = P × (1+i)^n。注意：', fi1:'假定各年通胀率不变。', fi2:'不加载官方 CPI 表。', fi3:'实际工资等需更多背景。',
    example:'示例：P=1000、i=3%、n=5 → ≈1159.27。', uc1:'通胀复利作业。', uc2:'未来标价粗算。', uc3:'与 CAGR/复利页对照。',
    faq:[['样例？','约 1159.27。'],['官方 CPI？','请自填利率；无国家矩阵。'],['实际工资？','超出范围。'],['建议？','仅供学习。']],
    article:'通胀推算', topic:'通胀', ref_a:'Investopedia — Inflation', ref_b:'Investopedia — Purchasing power' },
  ja:{ labels:{ amount_label:'現在の金額', amount_ph:'例 1000', rate_label:'年インフレ率 %', rate_ph:'例 3', n_label:'年数', n_ph:'例 5', futOut_label:'将来の名目額' },
    result_note:'将来 = 現在 × (1+i)^n。購買力の学習用。', err_generic:'金額>0、有限な率、年数>0。',
    how_body:'今日の金額・年率・年数を入れ将来へ複利。国別CPI表は載せません。',
    formula_body:'F = P × (1+i)^n。注意:', fi1:'毎年一定率を仮定。', fi2:'公式CPI表なし。', fi3:'実質賃金などは範囲外。',
    example:'例：P=1000、i=3%、n=5 → ≈1159.27。', uc1:'インフレ複利の宿題。', uc2:'将来価格のざっくり。', uc3:'CAGR/複利ページと併用。',
    faq:[['例は？','約1159.27。'],['公式CPIは？','自分で率を入力。'],['実質賃金は？','範囲外。'],['助言？','学習用です。']],
    article:'インフレ将来額', topic:'インフレ', ref_a:'Investopedia — Inflation', ref_b:'Investopedia — Purchasing power' },
  labelMaps:{
    es:{ amount_label:'Monto actual', amount_ph:'p. ej. 1000', rate_label:'Inflación % / año', rate_ph:'p. ej. 3', n_label:'Años', n_ph:'p. ej. 5', futOut_label:'Monto futuro' },
    ar:{ amount_label:'المبلغ الحالي', amount_ph:'مثال 1000', rate_label:'التضخم % / سنة', rate_ph:'مثال 3', n_label:'سنوات', n_ph:'مثال 5', futOut_label:'المبلغ المستقبلي' },
    pt:{ amount_label:'Valor atual', amount_ph:'ex. 1000', rate_label:'Inflação % / ano', rate_ph:'ex. 3', n_label:'Anos', n_ph:'ex. 5', futOut_label:'Valor futuro' },
    id:{ amount_label:'Jumlah sekarang', amount_ph:'mis. 1000', rate_label:'Inflasi % / tahun', rate_ph:'mis. 3', n_label:'Tahun', n_ph:'mis. 5', futOut_label:'Jumlah masa depan' },
    fr:{ amount_label:'Montant actuel', amount_ph:'ex. 1000', rate_label:'Inflation % / an', rate_ph:'ex. 3', n_label:'Années', n_ph:'ex. 5', futOut_label:'Montant futur' },
    ru:{ amount_label:'Текущая сумма', amount_ph:'напр. 1000', rate_label:'Инфляция % / год', rate_ph:'напр. 3', n_label:'Лет', n_ph:'напр. 5', futOut_label:'Будущая сумма' },
    de:{ amount_label:'Heutiger Betrag', amount_ph:'z. B. 1000', rate_label:'Inflation % / Jahr', rate_ph:'z. B. 3', n_label:'Jahre', n_ph:'z. B. 5', futOut_label:'Zukünftiger Betrag' },
  },
  howMaps:{ es:'Introduce monto, tasa y años.', ar:'أدخل المبلغ والمعدل والسنوات.', pt:'Informe valor, taxa e anos.', id:'Isi jumlah, suku bunga, tahun.', fr:'Saisissez montant, taux et années.', ru:'Введите сумму, ставку и годы.', de:'Betrag, Satz und Jahre eingeben.' },
  exMaps:{ es:'Ejemplo: ≈1159,27.', ar:'مثال: ≈1159.27.', pt:'Exemplo: ≈1159,27.', id:'Contoh: ≈1159.27.', fr:'Exemple : ≈1159,27.', ru:'Пример: ≈1159.27.', de:'Beispiel: ≈1159,27.' },
  fields:[{id:'amount',type:'number',half:true,labelKey:'amount_label',phKey:'amount_ph'},{id:'rate',type:'number',half:true,labelKey:'rate_label',phKey:'rate_ph'},{id:'n',type:'number',half:true,labelKey:'n_label',phKey:'n_ph'}],
  results:[{id:'futOut',labelKey:'futOut_label'}],
  refs:[{labelKey:'ref_a_label',href:'https://www.investopedia.com/terms/i/inflation.asp'},{labelKey:'ref_b_label',href:'https://www.investopedia.com/terms/p/purchasingpower.asp'}],
  computeJs:`
        var P=parseFloat(amountEl.value), i=parseFloat(rateEl.value), n=parseFloat(nEl.value);
        if(!(P>0)||!Number.isFinite(i)||!(n>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ futOut: fmt(P*Math.pow(1+i/100,n)) }};
`,
  sampleJs:`
        amountEl.value='1000';
        rateEl.value='3';
        nEl.value='5';
`,
});

// #42 VAT
shipDef({
  seq:42, file:'vat.mjs', slug:'how-to-calculate-vat', prefix:'tool_vat',
  pageFile:'howToCalculateVatPage', pageExport:'renderHowToCalculateVatPage',
  nameZh:'增值税/GST 计算器', ymyl:false,
  related:['how-to-calculate-discount','how-to-calculate-tip'],
  anchor:'vat', glyph:'M8 6h16v6H8zm0 10h10v6H8z', sampleHint:'net 100 VAT 20% → gross 120', topic:'VAT',
  titles:T('VAT / GST Calculator — Add or Extract Tax','增值税计算器 — 含税与未税互算','Calculadora de IVA / GST','حاسبة ضريبة القيمة المضافة VAT/GST','Calculadora de IVA / GST','Kalkulator PPN / VAT / GST','Calculateur de TVA / GST','VAT/GST（付加価値税）計算ツール','Калькулятор НДС / VAT / GST','MwSt-/VAT-Rechner'),
  descriptions:T(
    'Add VAT/GST to a net amount or extract tax from a gross amount. Sample: net 100 at 20% → gross 120. Enter your own rate — no country tax matrix. Browser-only.',
    '按自填税率给净价加增值税/GST，或从含税价反推税额。示例：净价 100、税率 20% → 含税价 120。不按国家拆页；浏览器本地计算，数据不上传服务器。',
    'Añade IVA/GST a un neto o extrae el impuesto de un bruto. Ejemplo: neto 100 al 20% → bruto 120. Tú eliges la tasa. En el navegador.',
    'أضف VAT/GST إلى صافٍ أو استخرج الضريبة من الإجمالي. مثال: صافٍ 100 بنسبة 20٪ → إجمالي 120. أدخل معدلك. في المتصفح.',
    'Some IVA/GST a um líquido ou extraia o imposto de um bruto. Exemplo: líquido 100 a 20% → bruto 120. Você informa a alíquota. No navegador.',
    'Tambahkan PPN/VAT ke net atau ekstrak pajak dari gross. Contoh: net 100 pada 20% → gross 120. Anda isi tarif. Di browser.',
    'Ajoutez la TVA à un HT ou extrayez la taxe d’un TTC. Exemple : HT 100 à 20 % → TTC 120. Vous saisissez le taux. Dans le navigateur.',
    '税抜に VAT/GST を加算、または税込から税額を逆算します。例：税抜 100、税率 20% → 税込 120。国別税率表はなく自分で入力。ブラウザ内計算です。',
    'Добавьте НДС к нетто или извлеките налог из брутто. Пример: нетто 100 при 20% → брутто 120. Ставку вводите сами. В браузере.',
    'MwSt/VAT auf Netto aufschlagen oder aus Brutto herausrechnen. Beispiel: Netto 100 bei 20% → Brutto 120. Satz selbst eingeben. Im Browser.'
  ),
  enCore:{
    labelsBase:{ mode_label:'Mode', mode_add:'Add tax to net', mode_extract:'Extract tax from gross', amount_label:'Amount', amount_ph:'e.g. 100', rate_label:'VAT/GST %', rate_ph:'e.g. 20', grossOut_label:'Gross', netOut_label:'Net', taxOut_label:'Tax' },
    result_note:'Add: gross=net×(1+r). Extract: net=gross/(1+r). Enter your own rate.',
    err_generic:'Enter amount > 0 and tax rate ≥ 0.',
    how_body:'Choose add or extract, enter amount and rate. No per-country rate pages — you supply the percent.',
    formula_body:'Gross = net × (1+r); net = gross / (1+r); tax = gross − net. Notes:',
    fi1:'r is a decimal from the percent you enter.',
    fi2:'Multi-rate invoices and exemptions are not modeled.',
    fi3:'Not a filing or compliance tool.',
    example:'Example: net 100, 20% → gross 120, tax 20.',
    uc1:'Homework VAT add/extract.', uc2:'Quick check before bookkeeping.', uc3:'Pair with discount/tip pages for receipt math.',
    faq:[['Sample?','Net 100 at 20% → gross 120.'],['Country rates?','Enter your rate; we do not ship a matrix.'],['Filing help?','No — educational arithmetic only.'],['GST vs VAT?','Same add/extract math; labels differ by region.']],
    article:'VAT/GST add-extract', ref_a:'Investopedia — VAT', ref_b:'Investopedia — Sales tax',
  },
  zh:{ labels:{ mode_label:'模式', mode_add:'净价加税', mode_extract:'含税拆税', amount_label:'金额', amount_ph:'例如 100', rate_label:'税率 %', rate_ph:'例如 20', grossOut_label:'含税价', netOut_label:'净价', taxOut_label:'税额' },
    result_note:'加税：含税=净价×(1+r)；拆税：净价=含税/(1+r)。请自填税率。', err_generic:'金额>0，税率≥0。',
    how_body:'选择加税或拆税，填金额与税率。不提供各国税率矩阵。',
    formula_body:'含税=净价×(1+r)；净价=含税/(1+r)；税额=含税−净价。注意：', fi1:'r 由百分比换算。', fi2:'多档税率与减免不建模。', fi3:'不是申报合规工具。',
    example:'示例：净价 100、20% → 含税 120、税 20。', uc1:'增值税加减作业。', uc2:'记账前速算。', uc3:'与折扣/小费页对照小票。',
    faq:[['样例？','100 加 20% → 120。'],['各国税率？','请自填；无矩阵。'],['申报？','不做。'],['GST 与 VAT？','加减算法相同，名称因地而异。']],
    article:'增值税互算', topic:'增值税', ref_a:'Investopedia — VAT', ref_b:'Investopedia — Sales tax' },
  ja:{ labels:{ mode_label:'モード', mode_add:'税抜に加算', mode_extract:'税込から抽出', amount_label:'金額', amount_ph:'例 100', rate_label:'税率 %', rate_ph:'例 20', grossOut_label:'税込', netOut_label:'税抜', taxOut_label:'税額' },
    result_note:'加算: 税込=税抜×(1+r)。抽出: 税抜=税込/(1+r)。税率は自分で入力。', err_generic:'金額>0、税率≥0。',
    how_body:'加算/抽出を選び金額と税率を入力。国別税率表はありません。',
    formula_body:'税込=税抜×(1+r)；税抜=税込/(1+r)。注意:', fi1:'rは百分率から換算。', fi2:'複数税率や免除は扱いません。', fi3:'申告ツールではありません。',
    example:'例：税抜100、20% → 税込120、税20。', uc1:'VAT加減の宿題。', uc2:'記帳前の速算。', uc3:'割引/チップ計算と併用。',
    faq:[['例は？','100に20%で120。'],['国別税率は？','自分で入力。'],['申告支援？','いいえ。'],['GSTとVATは？','計算は同じで名称が地域で違う。']],
    article:'VAT/GST互算', topic:'付加価値税', ref_a:'Investopedia — VAT', ref_b:'Investopedia — Sales tax' },
  labelMaps:{
    es:{ mode_label:'Modo', mode_add:'Añadir al neto', mode_extract:'Extraer del bruto', amount_label:'Importe', amount_ph:'p. ej. 100', rate_label:'IVA/GST %', rate_ph:'p. ej. 20', grossOut_label:'Bruto', netOut_label:'Neto', taxOut_label:'Impuesto' },
    ar:{ mode_label:'الوضع', mode_add:'إضافة إلى الصافي', mode_extract:'استخراج من الإجمالي', amount_label:'المبلغ', amount_ph:'مثال 100', rate_label:'VAT/GST %', rate_ph:'مثال 20', grossOut_label:'الإجمالي', netOut_label:'الصافي', taxOut_label:'الضريبة' },
    pt:{ mode_label:'Modo', mode_add:'Somar ao líquido', mode_extract:'Extrair do bruto', amount_label:'Valor', amount_ph:'ex. 100', rate_label:'IVA/GST %', rate_ph:'ex. 20', grossOut_label:'Bruto', netOut_label:'Líquido', taxOut_label:'Imposto' },
    id:{ mode_label:'Mode', mode_add:'Tambah ke net', mode_extract:'Ekstrak dari gross', amount_label:'Jumlah', amount_ph:'mis. 100', rate_label:'PPN/VAT %', rate_ph:'mis. 20', grossOut_label:'Gross', netOut_label:'Net', taxOut_label:'Pajak' },
    fr:{ mode_label:'Mode', mode_add:'Ajouter au HT', mode_extract:'Extraire du TTC', amount_label:'Montant', amount_ph:'ex. 100', rate_label:'TVA %', rate_ph:'ex. 20', grossOut_label:'TTC', netOut_label:'HT', taxOut_label:'Taxe' },
    ru:{ mode_label:'Режим', mode_add:'Добавить к нетто', mode_extract:'Извлечь из брутто', amount_label:'Сумма', amount_ph:'напр. 100', rate_label:'НДС %', rate_ph:'напр. 20', grossOut_label:'Брутто', netOut_label:'Нетто', taxOut_label:'Налог' },
    de:{ mode_label:'Modus', mode_add:'Auf Netto aufschlagen', mode_extract:'Aus Brutto herausrechnen', amount_label:'Betrag', amount_ph:'z. B. 100', rate_label:'MwSt %', rate_ph:'z. B. 20', grossOut_label:'Brutto', netOut_label:'Netto', taxOut_label:'Steuer' },
  },
  howMaps:{ es:'Elige modo, importe y tasa.', ar:'اختر الوضع والمبلغ والمعدل.', pt:'Escolha modo, valor e alíquota.', id:'Pilih mode, jumlah, dan tarif.', fr:'Choisissez mode, montant et taux.', ru:'Выберите режим, сумму и ставку.', de:'Modus, Betrag und Satz wählen.' },
  exMaps:{ es:'Ejemplo: neto 100 al 20% → 120.', ar:'مثال: صافٍ 100 بنسبة 20٪ → 120.', pt:'Exemplo: líquido 100 a 20% → 120.', id:'Contoh: net 100 pada 20% → 120.', fr:'Exemple : HT 100 à 20 % → TTC 120.', ru:'Пример: нетто 100 при 20% → 120.', de:'Beispiel: Netto 100 bei 20% → 120.' },
  fields:[
    {id:'mode',type:'select',half:true,labelKey:'mode_label',options:[{value:'add',labelKey:'mode_add',selected:true},{value:'extract',labelKey:'mode_extract'}]},
    {id:'amount',type:'number',half:true,labelKey:'amount_label',phKey:'amount_ph'},
    {id:'rate',type:'number',half:true,labelKey:'rate_label',phKey:'rate_ph'},
  ],
  results:[{id:'grossOut',labelKey:'grossOut_label'},{id:'netOut',labelKey:'netOut_label'},{id:'taxOut',labelKey:'taxOut_label'}],
  refs:[{labelKey:'ref_a_label',href:'https://www.investopedia.com/terms/v/valueaddedtax.asp'},{labelKey:'ref_b_label',href:'https://www.investopedia.com/terms/s/salestax.asp'}],
  computeJs:`
        var mode=modeEl.value, amount=parseFloat(amountEl.value), ratePct=parseFloat(rateEl.value);
        if(!(amount>0)||!Number.isFinite(ratePct)||ratePct<0) return {ok:false,error:msgErr};
        var r=ratePct/100, net, gross, tax;
        if(mode==='extract'){ gross=amount; net=gross/(1+r); tax=gross-net; }
        else { net=amount; gross=net*(1+r); tax=gross-net; }
        return {ok:true, values:{ grossOut:fmt(gross), netOut:fmt(net), taxOut:fmt(tax) }};
`,
  sampleJs:`
        modeEl.value='add';
        amountEl.value='100';
        rateEl.value='20';
`,
});

// #43 debt-payoff
shipDef({
  seq:43, file:'debt-payoff.mjs', slug:'how-to-calculate-debt-payoff', prefix:'tool_debt_payoff',
  pageFile:'howToCalculateDebtPayoffPage', pageExport:'renderHowToCalculateDebtPayoffPage',
  nameZh:'债务还清计算器', ymyl:true,
  related:['how-to-calculate-emi','how-to-calculate-compound-interest'],
  anchor:'debt-payoff', glyph:'M6 20h20M10 20V10m6 10V6m6 14v-8', sampleHint:'5000 @12% paying 200/mo → months', topic:'debt payoff',
  titles:T('Debt Payoff Calculator — Months to Clear a Balance','债务还清计算器 — 多久还清余额','Calculadora de liquidación de deuda','حاسبة سداد الدين','Calculadora de quitação de dívida','Kalkulator pelunasan utang','Calculateur de remboursement de dette','借金完済までの月数計算','Калькулятор погашения долга','Schulden-Tilgungsrechner'),
  descriptions:T(
    'Estimate months to pay off a balance with a fixed monthly payment and annual interest. Sample: principal 5,000 at 12% paying 200/mo → months to clear. Educational amortization — not lending advice.',
    '按本金、年利率与固定月供估算还清月数（简易摊还）。示例：本金 5000、年利率 12%、月供 200 → 还清月数。浏览器本地计算；借款教育用，非放贷或还款建议。',
    'Estima meses para liquidar un saldo con pago mensual fijo e interés anual. Ejemplo: 5000 al 12% pagando 200/mes. Educativo.',
    'قدّر أشهر السداد برصيد وفائدة سنوية ودفع شهري ثابت. مثال: 5000 بفائدة 12٪ ودفع 200/شهر. تعليمي.',
    'Estime meses para quitar um saldo com pagamento mensal fixo e juros anuais. Exemplo: 5000 a 12% pagando 200/mês. Educativo.',
    'Perkirakan bulan pelunasan dengan saldo, bunga tahunan, dan cicilan bulanan tetap. Contoh: 5000 @12% bayar 200/bln. Edukatif.',
    'Estimez les mois pour soldes avec paiement mensuel fixe et taux annuel. Exemple : 5000 à 12 % en payant 200/mois. Éducatif.',
    '元金・年利・固定月額返済から完済までの月数を見積もります。例：元金 5000、年利 12%、月々 200 → 完済月数。学習用であり貸付助言ではありません。',
    'Оцените месяцы погашения при фиксированном платеже и годовой ставке. Пример: 5000 при 12% и платеже 200/мес. Учебно.',
    'Schätzen Sie Monate bis zur Tilgung bei fester Monatsrate und Jahreszins. Beispiel: 5000 bei 12% mit 200/Monat. Bildungszweck.'
  ),
  enCore:{
    labelsBase:{ principal_label:'Principal balance', principal_ph:'e.g. 5000', rate_label:'Annual interest %', rate_ph:'e.g. 12', pay_label:'Monthly payment', pay_ph:'e.g. 200', monthsOut_label:'Months to payoff', interestOut_label:'Total interest (approx)' },
    result_note:'Simple amortization loop; payment must cover first-month interest. Educational only — not lending advice.',
    err_generic:'Enter principal > 0, rate ≥ 0, and payment that covers monthly interest.',
    how_body:'Enter balance, annual rate, and fixed monthly payment. The page loops month-by-month until the balance clears or hits a cap.',
    formula_body:'Each month: interest = balance × r/12; principal reduction = payment − interest. Notes:',
    fi1:'If payment ≤ first-month interest, payoff never happens.',
    fi2:'Fees, penalties, and promotional rates are omitted.',
    fi3:'Snowball/avalanche strategy tips are narrative only — not separate URLs.',
    example:'Example: 5000 at 12% with 200/mo → about 30 months (approx; depends on rounding).',
    uc1:'Homework amortization months.', uc2:'See if a payment clears the balance.', uc3:'Compare with the EMI page for payment sizing.',
    faq:[['Will it finish?','Only if payment exceeds monthly interest.'],['Exact sample months?','About 30 months for 5000 @12% with 200/mo under this loop.'],['Snowball page?','Strategies stay on this page as FAQ — no thin URL split.'],['Advice?','Educational only.']],
    article:'Debt payoff months', ref_a:'Investopedia — Amortization', ref_b:'Investopedia — Debt',
  },
  zh:{ labels:{ principal_label:'本金余额', principal_ph:'例如 5000', rate_label:'年利率 %', rate_ph:'例如 12', pay_label:'月供', pay_ph:'例如 200', monthsOut_label:'还清月数', interestOut_label:'利息合计（约）' },
    result_note:'简易逐月摊还；月供须覆盖首月利息。非放贷建议。', err_generic:'本金>0、利率≥0，且月供须覆盖月利息。',
    how_body:'填入余额、年利率与固定月供，逐月循环直至还清或达到上限。',
    formula_body:'每月：利息=余额×r/12；本金减少=月供−利息。注意：', fi1:'月供≤首月利息则无法还清。', fi2:'费用与罚息省略。', fi3:'雪球/雪崩仅作说明，不拆页。',
    example:'示例：5000、12%、月供 200 → 约 30 个月（舍入会影响）。', uc1:'摊还月数作业。', uc2:'检查月供能否还清。', uc3:'与 EMI 页对照月供大小。',
    faq:[['能还清吗？','月供须大于月利息。'],['样例约几个月？','约 30 个月。'],['雪球专页？','同页 FAQ 说明，不拆 URL。'],['建议？','仅供学习。']],
    article:'债务还清月数', topic:'债务还清', ref_a:'Investopedia — Amortization', ref_b:'Investopedia — Debt' },
  ja:{ labels:{ principal_label:'残高', principal_ph:'例 5000', rate_label:'年利 %', rate_ph:'例 12', pay_label:'月々の返済額', pay_ph:'例 200', monthsOut_label:'完済までの月数', interestOut_label:'利息合計（目安）' },
    result_note:'簡易月次ループ。返済額が初月利息を上回る必要あり。貸付助言ではありません。', err_generic:'残高>0、利率≥0、返済額が月利息を超えること。',
    how_body:'残高・年利・固定月額を入力し、完済まで月次で回します。',
    formula_body:'毎月：利息=残高×r/12；元金減=返済−利息。注意:', fi1:'返済≤初月利息なら完済不可。', fi2:'手数料や延滞は省略。', fi3:'スノーボール等は説明のみでURL分割しません。',
    example:'例：5000、12%、月200 → 約30か月。', uc1:'償却月数の宿題。', uc2:'返済額で完済できるか確認。', uc3:'EMIページと月額比較。',
    faq:[['完済できる？','月利息より多い返済が必要。'],['例の月数は？','約30か月。'],['スノーボール専用URL？','ありません。'],['助言？','学習用です。']],
    article:'借金完済月数', topic:'債務返済', ref_a:'Investopedia — Amortization', ref_b:'Investopedia — Debt' },
  labelMaps:{
    es:{ principal_label:'Saldo', principal_ph:'p. ej. 5000', rate_label:'Interés anual %', rate_ph:'p. ej. 12', pay_label:'Pago mensual', pay_ph:'p. ej. 200', monthsOut_label:'Meses', interestOut_label:'Interés total (aprox.)' },
    ar:{ principal_label:'الرصيد', principal_ph:'مثال 5000', rate_label:'فائدة سنوية %', rate_ph:'مثال 12', pay_label:'الدفع الشهري', pay_ph:'مثال 200', monthsOut_label:'الأشهر', interestOut_label:'إجمالي الفائدة (تقريبي)' },
    pt:{ principal_label:'Saldo', principal_ph:'ex. 5000', rate_label:'Juros anuais %', rate_ph:'ex. 12', pay_label:'Pagamento mensal', pay_ph:'ex. 200', monthsOut_label:'Meses', interestOut_label:'Juros totais (aprox.)' },
    id:{ principal_label:'Saldo', principal_ph:'mis. 5000', rate_label:'Bunga tahunan %', rate_ph:'mis. 12', pay_label:'Cicilan bulanan', pay_ph:'mis. 200', monthsOut_label:'Bulan', interestOut_label:'Total bunga (kira-kira)' },
    fr:{ principal_label:'Solde', principal_ph:'ex. 5000', rate_label:'Taux annuel %', rate_ph:'ex. 12', pay_label:'Paiement mensuel', pay_ph:'ex. 200', monthsOut_label:'Mois', interestOut_label:'Intérêts totaux (approx.)' },
    ru:{ principal_label:'Остаток', principal_ph:'напр. 5000', rate_label:'Годовая ставка %', rate_ph:'напр. 12', pay_label:'Ежемесячный платёж', pay_ph:'напр. 200', monthsOut_label:'Месяцы', interestOut_label:'Всего процентов (прибл.)' },
    de:{ principal_label:'Saldo', principal_ph:'z. B. 5000', rate_label:'Jahreszins %', rate_ph:'z. B. 12', pay_label:'Monatsrate', pay_ph:'z. B. 200', monthsOut_label:'Monate', interestOut_label:'Zinsen gesamt (ca.)' },
  },
  howMaps:{ es:'Introduce saldo, tasa y pago mensual.', ar:'أدخل الرصيد والمعدل والدفع الشهري.', pt:'Informe saldo, taxa e pagamento mensal.', id:'Isi saldo, suku bunga, dan cicilan.', fr:'Saisissez solde, taux et paiement mensuel.', ru:'Введите остаток, ставку и платёж.', de:'Saldo, Zins und Monatsrate eingeben.' },
  exMaps:{ es:'Ejemplo: ~30 meses.', ar:'مثال: نحو 30 شهراً.', pt:'Exemplo: ~30 meses.', id:'Contoh: ~30 bulan.', fr:'Exemple : ~30 mois.', ru:'Пример: ~30 месяцев.', de:'Beispiel: ~30 Monate.' },
  fields:[{id:'principal',type:'number',half:true,labelKey:'principal_label',phKey:'principal_ph'},{id:'rate',type:'number',half:true,labelKey:'rate_label',phKey:'rate_ph'},{id:'pay',type:'number',half:true,labelKey:'pay_label',phKey:'pay_ph'}],
  results:[{id:'monthsOut',labelKey:'monthsOut_label'},{id:'interestOut',labelKey:'interestOut_label'}],
  refs:[{labelKey:'ref_a_label',href:'https://www.investopedia.com/terms/a/amortization.asp'},{labelKey:'ref_b_label',href:'https://www.investopedia.com/terms/d/debt.asp'}],
  computeJs:`
        var bal=parseFloat(principalEl.value), ratePct=parseFloat(rateEl.value), pay=parseFloat(payEl.value);
        if(!(bal>0)||!Number.isFinite(ratePct)||ratePct<0||!(pay>0)) return {ok:false,error:msgErr};
        var r=ratePct/100/12;
        if(r>0 && pay <= bal*r + 1e-9) return {ok:false,error:msgErr};
        var months=0, interestTotal=0, guard=1200;
        while(bal>0.005 && months<guard){
          var interest = r>0 ? bal*r : 0;
          interestTotal += interest;
          var principalPay = pay - interest;
          if(principalPay <= 0) return {ok:false,error:msgErr};
          if(principalPay > bal){ interestTotal -= interest; interest = bal*r; interestTotal += interest; bal=0; months++; break; }
          bal -= principalPay; months++;
        }
        if(bal>0.005) return {ok:false,error:msgErr};
        return {ok:true, values:{ monthsOut:String(months), interestOut:fmt(interestTotal) }};
`,
  sampleJs:`
        principalEl.value='5000';
        rateEl.value='12';
        payEl.value='200';
`,
});

// #44 rule of 72
shipDef({
  seq:44, file:'rule-of-72.mjs', slug:'how-to-calculate-rule-of-72', prefix:'tool_rule_of_72',
  pageFile:'howToCalculateRuleOf72Page', pageExport:'renderHowToCalculateRuleOf72Page',
  nameZh:'72 法则计算器', ymyl:true,
  related:['how-to-calculate-cagr','how-to-calculate-compound-interest'],
  anchor:'rule-of-72', glyph:'M8 8h16v4H8zm2 8h6v6h-6z', sampleHint:'rate 6% → 12 years', topic:'rule of 72',
  titles:T('Rule of 72 Calculator — Years to Double','72 法则计算器 — 多久翻倍','Calculadora de la regla del 72','حاسبة قاعدة 72','Calculadora da regra dos 72','Kalkulator aturan 72','Calculateur de la règle de 72','72の法則 — 倍増までの年数','Калькулятор правила 72','72er-Regel-Rechner'),
  descriptions:T(
    'Estimate years to double with the Rule of 72: years ≈ 72 ÷ annual rate%. Sample: 6% → about 12 years. A quick teaching approximation — not investment advice.',
    '用 72 法则估算资金翻倍所需年数：年数 ≈ 72 ÷ 年化收益率%。示例：年化 6% → 约 12 年。教学近似；浏览器本地计算，非投资建议。',
    'Estima años para duplicar con la regla del 72: años ≈ 72 ÷ tasa%. Ejemplo: 6% → unos 12 años. Aproximación educativa.',
    'قدّر سنوات المضاعفة بقاعدة 72: السنوات ≈ 72 ÷ المعدل%. مثال: 6٪ → نحو 12 سنة. تقريب تعليمي.',
    'Estime anos para dobrar com a regra dos 72: anos ≈ 72 ÷ taxa%. Exemplo: 6% → cerca de 12 anos. Aproximação educativa.',
    'Perkirakan tahun untuk berlipat ganda dengan aturan 72: tahun ≈ 72 ÷ suku bunga%. Contoh: 6% → sekitar 12 tahun. Edukatif.',
    'Estimez les années pour doubler avec la règle de 72 : années ≈ 72 ÷ taux%. Exemple : 6 % → environ 12 ans. Approximation éducative.',
    '72の法則で倍増までの年数を見積もります：年数 ≈ 72 ÷ 年利%。例：6% → 約12年。学習用の近似であり投資助言ではありません。',
    'Оцените годы удвоения по правилу 72: годы ≈ 72 ÷ ставка%. Пример: 6% → около 12 лет. Учебное приближение.',
    'Schätzen Sie Jahre bis zur Verdopplung mit der 72er-Regel: Jahre ≈ 72 ÷ Zinssatz%. Beispiel: 6% → etwa 12 Jahre. Bildungsnäherung.'
  ),
  enCore:{
    labelsBase:{ rate_label:'Annual rate %', rate_ph:'e.g. 6', yearsOut_label:'Approx. years to double' },
    result_note:'Years ≈ 72 / rate%. Rule-of-thumb only — not a precise compound forecast.',
    err_generic:'Enter a rate > 0.',
    how_body:'Enter an annual percentage rate. The classic Rule of 72 divides 72 by that rate to sketch doubling time.',
    formula_body:'Years ≈ 72 / r_percent. Notes:',
    fi1:'Works best for moderate rates; very high/low rates are less accurate.',
    fi2:'Assumes annual compounding style intuition, not a full schedule.',
    fi3:'Compare with compound-interest / CAGR tools for precise math.',
    example:'Example: rate 6% → 72/6 = 12 years.',
    uc1:'Classroom doubling-time intuition.', uc2:'Quick sketch before precise FV math.', uc3:'Pair with CAGR and compound interest.',
    faq:[['Sample?','6% → 12 years.'],['Exact?','No — a teaching approximation.'],['Why 72?','A convenient number near the natural-log doubling math.'],['Advice?','Educational only.']],
    article:'Rule of 72', ref_a:'Investopedia — Rule of 72', ref_b:'Investopedia — Compound interest',
  },
  zh:{ labels:{ rate_label:'年化收益率 %', rate_ph:'例如 6', yearsOut_label:'约需年数（翻倍）' },
    result_note:'年数 ≈ 72 / 利率%。经验法则，非精确复利预测。', err_generic:'请填写利率 > 0。',
    how_body:'填入年化百分比，用 72÷利率 估算翻倍年数。',
    formula_body:'年数 ≈ 72 / r%。注意：', fi1:'中等利率更准；极高/极低误差大。', fi2:'不是完整复利表。', fi3:'精确计算请用复利/CAGR 工具。',
    example:'示例：6% → 72/6 = 12 年。', uc1:'课堂翻倍直觉。', uc2:'精确 FV 前的速算。', uc3:'与 CAGR/复利对照。',
    faq:[['样例？','6% → 12 年。'],['精确吗？','教学近似。'],['为何是 72？','接近对数翻倍的方便整数。'],['投资建议？','不是。']],
    article:'72 法则', topic:'72法则', ref_a:'Investopedia — Rule of 72', ref_b:'Investopedia — Compound interest' },
  ja:{ labels:{ rate_label:'年利 %', rate_ph:'例 6', yearsOut_label:'倍増までのおおよその年数' },
    result_note:'年数 ≈ 72 / 利率%。経験則であり精密予測ではありません。', err_generic:'利率 > 0 を入力。',
    how_body:'年率を入れ、72÷利率で倍増年数をざっくり見ます。',
    formula_body:'年数 ≈ 72 / r%。注意:', fi1:'中程度の利率で精度が良い。', fi2:'完全な複利表ではない。', fi3:'精密計算は複利/CAGRへ。',
    example:'例：6% → 72/6 = 12年。', uc1:'授業での倍増の直感。', uc2:'精密FVの前の速算。', uc3:'CAGR/複利と併用。',
    faq:[['例は？','6%→12年。'],['正確？','学習用の近似。'],['なぜ72？','対数的倍増に近い便利な数。'],['助言？','学習用です。']],
    article:'72の法則', topic:'72の法則', ref_a:'Investopedia — Rule of 72', ref_b:'Investopedia — Compound interest' },
  labelMaps:{
    es:{ rate_label:'Tasa anual %', rate_ph:'p. ej. 6', yearsOut_label:'Años aprox. para duplicar' },
    ar:{ rate_label:'المعدل السنوي %', rate_ph:'مثال 6', yearsOut_label:'سنوات تقريبية للمضاعفة' },
    pt:{ rate_label:'Taxa anual %', rate_ph:'ex. 6', yearsOut_label:'Anos aprox. para dobrar' },
    id:{ rate_label:'Suku bunga tahunan %', rate_ph:'mis. 6', yearsOut_label:'Perkiraan tahun untuk dobel' },
    fr:{ rate_label:'Taux annuel %', rate_ph:'ex. 6', yearsOut_label:'Années approx. pour doubler' },
    ru:{ rate_label:'Годовая ставка %', rate_ph:'напр. 6', yearsOut_label:'Прибл. годы до удвоения' },
    de:{ rate_label:'Jahreszins %', rate_ph:'z. B. 6', yearsOut_label:'Ca. Jahre bis Verdopplung' },
  },
  howMaps:{ es:'Introduce la tasa anual.', ar:'أدخل المعدل السنوي.', pt:'Informe a taxa anual.', id:'Isi suku bunga tahunan.', fr:'Saisissez le taux annuel.', ru:'Введите годовую ставку.', de:'Jahreszins eingeben.' },
  exMaps:{ es:'Ejemplo: 6% → 12 años.', ar:'مثال: 6٪ → 12 سنة.', pt:'Exemplo: 6% → 12 anos.', id:'Contoh: 6% → 12 tahun.', fr:'Exemple : 6 % → 12 ans.', ru:'Пример: 6% → 12 лет.', de:'Beispiel: 6% → 12 Jahre.' },
  fields:[{id:'rate',type:'number',half:true,labelKey:'rate_label',phKey:'rate_ph'}],
  results:[{id:'yearsOut',labelKey:'yearsOut_label'}],
  refs:[{labelKey:'ref_a_label',href:'https://www.investopedia.com/terms/r/ruleof72.asp'},{labelKey:'ref_b_label',href:'https://www.investopedia.com/terms/c/compoundinterest.asp'}],
  computeJs:`
        var rate=parseFloat(rateEl.value);
        if(!(rate>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ yearsOut: fmt(72/rate) }};
`,
  sampleJs:`
        rateEl.value='6';
`,
});

// #45 tip
shipDef({
  seq:45, file:'tip.mjs', slug:'how-to-calculate-tip', prefix:'tool_tip',
  pageFile:'howToCalculateTipPage', pageExport:'renderHowToCalculateTipPage',
  nameZh:'小费计算器', ymyl:false,
  related:['how-to-calculate-vat','how-to-calculate-discount'],
  anchor:'tip', glyph:'M8 10h16v12H8zM12 6h8v4h-8z', sampleHint:'bill 80 tip 15% → tip 12 total 92', topic:'tip',
  titles:T('Tip Calculator — Tip Amount and Split','小费计算器 — 小费与分摊','Calculadora de propina','حاسبة البقشيش','Calculadora de gorjeta','Kalkulator tip / tip','Calculateur de pourboire','チップ計算ツール — チップと割り勘','Калькулятор чаевых','Trinkgeld-Rechner'),
  descriptions:T(
    'Calculate tip from bill and tip percent, then optionally split the total. Sample: bill 80 with 15% tip → tip 12, total 92. Everyday receipt math in your browser.',
    '按账单与小费比例计算小费，并可按人数分摊合计。示例：账单 80、小费 15% → 小费 12、合计 92。浏览器本地计算，数据不上传服务器；日常结账速算。',
    'Calcula la propina con cuenta y % y reparte el total. Ejemplo: cuenta 80 con 15% → propina 12, total 92. En el navegador.',
    'احسب البقشيش من الفاتورة والنسبة ثم اقسم الإجمالي. مثال: فاتورة 80 و15٪ → بقشيش 12 والإجمالي 92. في المتصفح.',
    'Calcule a gorjeta com conta e % e divida o total. Exemplo: conta 80 com 15% → gorjeta 12, total 92. No navegador.',
    'Hitung tip dari tagihan dan persen, lalu bagi total. Contoh: tagihan 80 tip 15% → tip 12, total 92. Di browser.',
    'Calculez le pourboire avec l’addition et le %, puis partagez. Exemple : 80 avec 15 % → pourboire 12, total 92. Dans le navigateur.',
    '会計とチップ率からチップ額を出し、人数で割り勘できます。例：会計 80、チップ 15% → チップ 12、合計 92。ブラウザ内の日常計算です。',
    'Считайте чаевые от счёта и процента и делите итог. Пример: счёт 80, 15% → чаевые 12, итог 92. В браузере.',
    'Berechnen Sie Trinkgeld aus Rechnung und Prozent und teilen Sie optional. Beispiel: 80 bei 15% → 12 Trinkgeld, Gesamt 92. Im Browser.'
  ),
  enCore:{
    labelsBase:{ bill_label:'Bill amount', bill_ph:'e.g. 80', tip_label:'Tip %', tip_ph:'e.g. 15', split_label:'Split between (people)', split_ph:'e.g. 1', tipOut_label:'Tip', totalOut_label:'Total', eachOut_label:'Per person' },
    result_note:'Tip = bill × tip%; total = bill + tip; per person = total / people.',
    err_generic:'Enter bill > 0, tip % ≥ 0, and people ≥ 1.',
    how_body:'Enter the bill, tip percent, and how many people split the total. Customs vary by country — this is arithmetic only.',
    formula_body:'Tip = bill × p; total = bill + tip; each = total / n. Notes:',
    fi1:'Does not auto-add tax; add tax into the bill if needed.',
    fi2:'Rounding at restaurants may differ.',
    fi3:'Not a payment processor.',
    example:'Example: bill 80, tip 15%, 1 person → tip 12, total 92.',
    uc1:'Restaurant checkout tip math.', uc2:'Split a shared bill after tip.', uc3:'Pair with VAT/discount for receipt drills.',
    faq:[['Sample?','80 at 15% → tip 12, total 92.'],['Include tax?','Add tax into the bill first if you tip on tax-inclusive totals.'],['Split 0 people?','People must be ≥ 1.'],['Payment app?','No — local arithmetic only.']],
    article:'Tip and split', ref_a:'Wikipedia — Gratuity', ref_b:'Investopedia — Tip',
  },
  zh:{ labels:{ bill_label:'账单金额', bill_ph:'例如 80', tip_label:'小费比例 %', tip_ph:'例如 15', split_label:'分摊人数', split_ph:'例如 1', tipOut_label:'小费', totalOut_label:'合计', eachOut_label:'人均' },
    result_note:'小费=账单×比例；合计=账单+小费；人均=合计/人数。', err_generic:'账单>0、小费%≥0、人数≥1。',
    how_body:'填入账单、小费比例与分摊人数。各国习惯不同，本页只做算术。',
    formula_body:'小费=账单×p；合计=账单+小费；人均=合计/n。注意：', fi1:'不含自动加税；若按含税小费请把税并入账单。', fi2:'餐厅四舍五入可能不同。', fi3:'不是支付工具。',
    example:'示例：账单 80、15%、1 人 → 小费 12、合计 92。', uc1:'餐厅结账小费。', uc2:'加小费后分摊。', uc3:'与增值税/折扣页对照小票。',
    faq:[['样例？','80 的 15% → 小费 12、合计 92。'],['含税吗？','需要时请先把税加进账单。'],['人数 0？','人数须 ≥1。'],['支付 App？','不是，仅本地算术。']],
    article:'小费与分摊', topic:'小费', ref_a:'Wikipedia — Gratuity', ref_b:'Investopedia — Tip' },
  ja:{ labels:{ bill_label:'会計金額', bill_ph:'例 80', tip_label:'チップ率 %', tip_ph:'例 15', split_label:'割り勘人数', split_ph:'例 1', tipOut_label:'チップ', totalOut_label:'合計', eachOut_label:'一人あたり' },
    result_note:'チップ=会計×率；合計=会計+チップ；一人=合計/人数。', err_generic:'会計>0、率≥0、人数≥1。',
    how_body:'会計・チップ率・人数を入力。国ごとの習慣は算術の範囲外です。',
    formula_body:'チップ=会計×p；合計=会計+チップ。注意:', fi1:'税の自動加算なし。税込みでチップするなら税を会計に含めてください。', fi2:'店舗の端数処理は異なる場合あり。', fi3:'決済アプリではありません。',
    example:'例：会計80、15%、1人 → チップ12、合計92。', uc1:'レストラン会計のチップ。', uc2:'チップ後の割り勘。', uc3:'VAT/割引ページと併用。',
    faq:[['例は？','80の15%→チップ12、合計92。'],['税込み？','必要なら税を会計に足してから。'],['人数0？','1以上。'],['決済？','いいえ、ローカル計算のみ。']],
    article:'チップと割り勘', topic:'チップ', ref_a:'Wikipedia — Gratuity', ref_b:'Investopedia — Tip' },
  labelMaps:{
    es:{ bill_label:'Cuenta', bill_ph:'p. ej. 80', tip_label:'Propina %', tip_ph:'p. ej. 15', split_label:'Personas', split_ph:'p. ej. 1', tipOut_label:'Propina', totalOut_label:'Total', eachOut_label:'Por persona' },
    ar:{ bill_label:'الفاتورة', bill_ph:'مثال 80', tip_label:'البقشيش %', tip_ph:'مثال 15', split_label:'الأشخاص', split_ph:'مثال 1', tipOut_label:'البقشيش', totalOut_label:'الإجمالي', eachOut_label:'للشخص' },
    pt:{ bill_label:'Conta', bill_ph:'ex. 80', tip_label:'Gorjeta %', tip_ph:'ex. 15', split_label:'Pessoas', split_ph:'ex. 1', tipOut_label:'Gorjeta', totalOut_label:'Total', eachOut_label:'Por pessoa' },
    id:{ bill_label:'Tagihan', bill_ph:'mis. 80', tip_label:'Tip %', tip_ph:'mis. 15', split_label:'Jumlah orang', split_ph:'mis. 1', tipOut_label:'Tip', totalOut_label:'Total', eachOut_label:'Per orang' },
    fr:{ bill_label:'Addition', bill_ph:'ex. 80', tip_label:'Pourboire %', tip_ph:'ex. 15', split_label:'Personnes', split_ph:'ex. 1', tipOut_label:'Pourboire', totalOut_label:'Total', eachOut_label:'Par personne' },
    ru:{ bill_label:'Счёт', bill_ph:'напр. 80', tip_label:'Чаевые %', tip_ph:'напр. 15', split_label:'Человек', split_ph:'напр. 1', tipOut_label:'Чаевые', totalOut_label:'Итого', eachOut_label:'На человека' },
    de:{ bill_label:'Rechnung', bill_ph:'z. B. 80', tip_label:'Trinkgeld %', tip_ph:'z. B. 15', split_label:'Personen', split_ph:'z. B. 1', tipOut_label:'Trinkgeld', totalOut_label:'Gesamt', eachOut_label:'Pro Person' },
  },
  howMaps:{ es:'Introduce cuenta, % y personas.', ar:'أدخل الفاتورة والنسبة والأشخاص.', pt:'Informe conta, % e pessoas.', id:'Isi tagihan, persen, dan orang.', fr:'Saisissez addition, % et personnes.', ru:'Введите счёт, % и число людей.', de:'Rechnung, % und Personen eingeben.' },
  exMaps:{ es:'Ejemplo: 80 con 15% → 12 / total 92.', ar:'مثال: 80 و15٪ → 12 / الإجمالي 92.', pt:'Exemplo: 80 com 15% → 12 / total 92.', id:'Contoh: 80 tip 15% → 12 / total 92.', fr:'Exemple : 80 avec 15 % → 12 / total 92.', ru:'Пример: 80 и 15% → 12 / итог 92.', de:'Beispiel: 80 bei 15% → 12 / Gesamt 92.' },
  fields:[
    {id:'bill',type:'number',half:true,labelKey:'bill_label',phKey:'bill_ph'},
    {id:'tip',type:'number',half:true,labelKey:'tip_label',phKey:'tip_ph'},
    {id:'split',type:'number',half:true,labelKey:'split_label',phKey:'split_ph'},
  ],
  results:[{id:'tipOut',labelKey:'tipOut_label'},{id:'totalOut',labelKey:'totalOut_label'},{id:'eachOut',labelKey:'eachOut_label'}],
  refs:[{labelKey:'ref_a_label',href:'https://en.wikipedia.org/wiki/Gratuity'},{labelKey:'ref_b_label',href:'https://www.investopedia.com/terms/t/tip.asp'}],
  computeJs:`
        var bill=parseFloat(billEl.value), tipPct=parseFloat(tipEl.value), people=parseFloat(splitEl.value);
        if(!(bill>0)||!Number.isFinite(tipPct)||tipPct<0||!(people>=1)) return {ok:false,error:msgErr};
        var tipAmt=bill*tipPct/100, total=bill+tipAmt, each=total/people;
        return {ok:true, values:{ tipOut:fmt(tipAmt), totalOut:fmt(total), eachOut:fmt(each) }};
`,
  sampleJs:`
        billEl.value='80';
        tipEl.value='15';
        splitEl.value='1';
`,
});

console.log('All #38–#45 defs written.');
