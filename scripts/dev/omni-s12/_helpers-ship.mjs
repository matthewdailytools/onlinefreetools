/**
 * 共用：pad / buildUi / euroOverlay / writeTool / shipDef（供 gen-rest-46-62 使用）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const OUT = path.join(__dirname, 'tools');
export const LANGS = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

export const pad = (lang, s) => {
	let d = s;
	const extra =
		lang === 'zh'
			? '；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，请核对公式假设。'
			: lang === 'ja'
				? '。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり公式の前提を確認してください。'
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

export const edu = (lang, topic, health = false) => {
	if (health) {
		return {
			en: { disclaimer: `Educational ${topic} only — not medical advice. Consult a qualified clinician.`, references: 'CDC / ACSM-style educational references.' },
			zh: { disclaimer: `结果仅为${topic}健康教育演示，不构成医疗诊断或治疗建议。请咨询专业人士。`, references: 'CDC / ACSM 等公开教育资料。' },
			es: { disclaimer: `Solo ilustración educativa (${topic}); no es consejo médico.`, references: 'Referencias educativas.' },
			ar: { disclaimer: `توضيح تعليمي فقط (${topic}) وليس نصيحة طبية.`, references: 'مراجع تعليمية.' },
			pt: { disclaimer: `Apenas ilustração educativa (${topic}); não é conselho médico.`, references: 'Referências educativas.' },
			id: { disclaimer: `Hanya ilustrasi edukatif (${topic}); bukan saran medis.`, references: 'Referensi edukatif.' },
			fr: { disclaimer: `Illustration éducative (${topic}) uniquement — pas un avis médical.`, references: 'Références éducatives.' },
			ja: { disclaimer: `${topic}の学習用試算であり、医療診断・治療の助言ではありません。専門家にご相談ください。`, references: 'CDC/ACSM などの公開資料。' },
			ru: { disclaimer: `Только учебная иллюстрация (${topic}) — не медицинский совет.`, references: 'Образовательные ссылки.' },
			de: { disclaimer: `Nur zur Veranschaulichung (${topic}) — keine medizinische Beratung.`, references: 'Bildungsreferenzen.' },
		}[lang];
	}
	return {
		en: { disclaimer: `Educational ${topic} only — not professional advice.`, references: 'Standard textbook formulas.' },
		zh: { disclaimer: `结果仅为${topic}学习演示，不构成专业建议。`, references: '常见教材公式。' },
		es: { disclaimer: `Solo ilustración educativa (${topic}).`, references: 'Fórmulas de libro.' },
		ar: { disclaimer: `توضيح تعليمي فقط (${topic}).`, references: 'صيغ دراسية.' },
		pt: { disclaimer: `Apenas ilustração educativa (${topic}).`, references: 'Fórmulas didáticas.' },
		id: { disclaimer: `Hanya ilustrasi edukatif (${topic}).`, references: 'Rumus buku teks.' },
		fr: { disclaimer: `Illustration éducative (${topic}) uniquement.`, references: 'Formules de manuel.' },
		ja: { disclaimer: `${topic}の学習用試算であり、専門的助言ではありません。`, references: '標準的な教科書公式。' },
		ru: { disclaimer: `Только учебная иллюстрация (${topic}).`, references: 'Учебные формулы.' },
		de: { disclaimer: `Nur zur Veranschaulichung (${topic}).`, references: 'Lehrbuchformeln.' },
	}[lang];
};

export const T = (...a) => Object.fromEntries(LANGS.map((l, i) => [l, a[i]]));

export function writeTool(file, t) {
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

export function buildUi(enCore, locMaps, topic, health = false) {
	const ui = {};
	for (const lang of LANGS) {
		const m = locMaps[lang] || {};
		const e = edu(lang, m.topic || topic, health);
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

export function euroOverlay(titles, labelsByLang, howByLang, exampleByLang) {
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
			ref_a: 'Wikipedia',
			ref_b: 'Textbook formula',
		};
	}
	return out;
}

export function shipDef(cfg) {
	const { file, titles, descriptions, enCore, zh, ja, health, ...rest } = cfg;
	const locMaps = {
		zh,
		ja,
		...euroOverlay(
			titles,
			Object.fromEntries(
				['es', 'ar', 'pt', 'id', 'fr', 'ru', 'de'].map((l) => [
					l,
					(rest.labelMaps && rest.labelMaps[l]) || enCore.labelsBase,
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
	if (rest.labelMaps) {
		for (const l of Object.keys(rest.labelMaps)) {
			locMaps[l] = {
				...(locMaps[l] || {}),
				labels: rest.labelMaps[l],
				how_body: rest.howMaps?.[l] || locMaps[l]?.how_body,
				example: rest.exMaps?.[l] || locMaps[l]?.example,
				article: titles[l],
			};
		}
	}
	writeTool(file, {
		...rest,
		titles,
		descriptions,
		ui: buildUi(enCore, locMaps, rest.topic || 'math', Boolean(health)),
	});
}
