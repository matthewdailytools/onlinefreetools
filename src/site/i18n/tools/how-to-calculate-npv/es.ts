/**
 * i18n tool shard (how-to-calculate-npv / es).
 * Español reescrito de forma independiente (no calco del inglés).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_npv_title: 'Calculadora VAN (NPV) — Valor actual neto',
	tool_npv_description:
		'Calcula el VAN (NPV) con una tasa de descuento anual, la inversión inicial y los flujos de caja por año. Ejemplo: inviertes 10.000 al 10% con flujos 3.000 / 4.200 / 6.800 → VAN ≈ 1.307,29. Todo ocurre en el navegador; es una ilustración educativa, no un consejo de inversión.',
	tool_npv_article:
		'El valor actual neto descuenta los flujos futuros a una tasa anual elegida y resta la inversión inicial. Un VAN positivo solo indica que, bajo tus supuestos, las entradas descontadas superan la salida; no es un pronóstico ni una recomendación de compra.',
	tool_npv_calculate: 'Calcular',
	tool_npv_sample: 'Cargar ejemplo',
	tool_npv_clear: 'Limpiar',
	tool_npv_rate_label: 'Tasa de descuento (% anual)',
	tool_npv_rate_ph: 'p. ej. 10',
	tool_npv_invest_label: 'Inversión inicial (salida)',
	tool_npv_invest_ph: 'p. ej. 10000',
	tool_npv_cf_label: 'Flujos de caja por año (coma o salto de línea)',
	tool_npv_cf_ph: 'p. ej. 3000, 4200, 6800',
	tool_npv_cf_hint: 'Introduce CF1…CFn para los años 1…n. Positivo = entrada; se permiten negativos.',
	tool_npv_result_label: 'VAN (NPV)',
	tool_npv_result_note: 'Solo ilustración educativa — no es consejo de inversión.',
	tool_npv_err_rate: 'Indica una tasa de descuento finita (% anual). No se admite −100% o menos.',
	tool_npv_err_invest: 'La inversión inicial debe ser mayor que cero.',
	tool_npv_err_cf: 'Introduce al menos un número de flujo válido (separado por comas o saltos de línea).',
	tool_npv_how_title: 'Cómo funciona',
	tool_npv_how_body:
		'Escribe la tasa anual, una inversión inicial positiva (salida en t=0) y la lista de flujos de los años 1…n. La herramienta descuenta cada flujo y resta el desembolso inicial. El cálculo queda en tu navegador y solo sirve para aprender.',
	tool_npv_formula_title: 'Fórmula y supuestos',
	tool_npv_formula_body:
		'VAN = −I₀ + Σ (CFₜ / (1 + r)ᵗ) para t = 1…n, donde r es la tasa anual en decimal. Ten en cuenta:',
	tool_npv_formula_item_1: 'Los flujos se tratan al final de cada año; se ignora el momento intra-anual.',
	tool_npv_formula_item_2: 'La tasa es constante; impuestos, comisiones e inflación no se modelan salvo que los incorpores tú.',
	tool_npv_formula_item_3: 'El resultado es una ilustración educativa, no un pronóstico ni consejo de inversión.',
	tool_npv_example_title: 'Ejemplo',
	tool_npv_example:
		'Ejemplo: inversión 10.000, tasa 10% anual, flujos 3.000 / 4.200 / 6.800 → VAN = −10000 + 3000/1,1 + 4200/1,1² + 6800/1,1³ ≈ 1.307,29.',
	tool_npv_usecases_title: 'Cuándo usarla',
	tool_npv_usecase_1: 'Cribado rápido de proyectos: comparar entradas descontadas con el coste inicial (solo ilustración).',
	tool_npv_usecase_2: 'Ejercicios: practicar la suma del VAN con tasa fija y una lista corta de flujos.',
	tool_npv_usecase_3: 'Borrador antes de hablar con un asesor — no sustituye un análisis completo.',
	tool_npv_faq_q1: '¿Qué fórmula de VAN usa esta página?',
	tool_npv_faq_a1:
		'VAN = −I₀ + Σ (CFₜ / (1 + r)ᵗ). I₀ es la inversión inicial, r la tasa anual en decimal y CFₜ los flujos de los años 1…n.',
	tool_npv_faq_q2: '¿En qué se diferencia del ROI simple o del CAGR?',
	tool_npv_faq_a2:
		'El ROI simple es un porcentaje de un solo periodo. El CAGR anualiza el crecimiento entre dos valores. El VAN descuenta una secuencia de flujos y da un importe, no una tasa de crecimiento.',
	tool_npv_faq_q3: '¿Cómo introduzco los flujos?',
	tool_npv_faq_a3:
		'Lista los importes del año 1 al n separados por comas o saltos de línea. Positivos = entradas; negativos = salidas posteriores. Hace falta al menos un número válido.',
	tool_npv_faq_q4: '¿Es un consejo de inversión?',
	tool_npv_faq_a4:
		'No. Las cifras son solo ilustraciones educativas y no constituyen consejo de inversión, fiscal o financiero. Un VAN positivo con tus datos no garantiza beneficio real.',
	tool_npv_disclaimer:
		'Los resultados del VAN son solo ilustraciones educativas y no constituyen consejo de inversión, fiscal o financiero. La tasa, el calendario de flujos, comisiones, impuestos y riesgo están simplificados. Las cifras hipotéticas no garantizan resultados futuros.',
	tool_npv_references:
		'Definición de NPV en Investopedia y guía de valor actual frente a valor actual neto; fórmula estándar de flujos descontados.',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value (NPV)',
	tool_npv_ref_pv_label: 'Investopedia — Valor actual vs valor actual neto',
};

export default es;
