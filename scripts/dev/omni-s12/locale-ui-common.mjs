/**
 * 十语共用短按钮文案（计算器工具）。
 * 各工具仍须独立重写 how/FAQ 等长文，禁止整页英模同构。
 */
export const BTN = {
	en: { calculate: 'Calculate', sample: 'Load sample', clear: 'Clear' },
	zh: { calculate: '计算', sample: '加载样例', clear: '清空' },
	es: { calculate: 'Calcular', sample: 'Cargar ejemplo', clear: 'Limpiar' },
	ar: { calculate: 'احسب', sample: 'تحميل مثال', clear: 'مسح' },
	pt: { calculate: 'Calcular', sample: 'Carregar exemplo', clear: 'Limpar' },
	id: { calculate: 'Hitung', sample: 'Muat contoh', clear: 'Hapus' },
	fr: { calculate: 'Calculer', sample: 'Charger l’exemple', clear: 'Effacer' },
	ja: { calculate: '計算する', sample: 'サンプル', clear: 'クリア' },
	ru: { calculate: 'Рассчитать', sample: 'Загрузить пример', clear: 'Очистить' },
	de: { calculate: 'Berechnen', sample: 'Beispiel laden', clear: 'Leeren' },
};

/**
 * 合并按钮短词与某语 UI 主体。
 * @param {string} lang
 * @param {Record<string,string>} body
 */
export const withBtns = (lang, body) => ({ ...BTN[lang], ...body });
