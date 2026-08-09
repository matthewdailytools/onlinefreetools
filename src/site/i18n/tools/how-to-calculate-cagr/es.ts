/**
 * i18n tool shard (how-to-calculate-cagr / es).
 * Reescritura independiente en español: UI completa, How/Formula/FAQ y aviso YMYL.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_cagr_title: 'Calculadora CAGR — Tasa de crecimiento anual compuesto',
	tool_cagr_description:
		'Obtén el CAGR a partir del valor inicial, el valor final y los años. Ejemplo: 10.000 → 16.105,10 en 5 años → unos 10,00%. Se calcula en tu navegador; solo con fines educativos — no es asesoramiento de inversión.',
	tool_cagr_article:
		'El CAGR es la tasa anual constante que lleva un valor inicial a un valor final en varios años, asumiendo capitalización una vez al año. Sirve para comparar crecimientos plurianuales a grosso modo; no es una previsión y no incluye flujos a mitad de periodo.',
	tool_cagr_calculate: 'Calcular',
	tool_cagr_sample: 'Cargar ejemplo',
	tool_cagr_clear: 'Borrar',
	tool_cagr_begin_label: 'Valor inicial',
	tool_cagr_begin_ph: 'p. ej. 10000',
	tool_cagr_end_label: 'Valor final',
	tool_cagr_end_ph: 'p. ej. 16105.10',
	tool_cagr_years_label: 'Número de años',
	tool_cagr_years_ph: 'p. ej. 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: 'Solo ilustración educativa — no es asesoramiento de inversión.',
	tool_cagr_err_begin: 'El valor inicial debe ser mayor que cero.',
	tool_cagr_err_end: 'El valor final debe ser mayor que cero.',
	tool_cagr_err_years: 'El número de años debe ser mayor que cero.',
	tool_cagr_how_title: 'Cómo usarla',
	tool_cagr_how_body:
		'Introduce un valor inicial, un valor final y unos años, todos positivos. La herramienta aplica la fórmula estándar del CAGR en %. Rechaza ceros o negativos. Todo ocurre en el navegador y es solo educativo.',
	tool_cagr_formula_title: 'Fórmula y supuestos',
	tool_cagr_formula_body:
		'CAGR = ((Valor final ÷ Valor inicial)^(1 ÷ Años) − 1) × 100. Ten en cuenta:',
	tool_cagr_formula_item_1: 'La capitalización se trata como una vez al año; se ignora el momento exacto dentro del año.',
	tool_cagr_formula_item_2: 'Sin aportes ni retiros intermedios: solo inicial, final y años.',
	tool_cagr_formula_item_3: 'Los resultados son ilustraciones educativas, no previsiones ni consejos de inversión.',
	tool_cagr_example_title: 'Ejemplo',
	tool_cagr_example:
		'Ejemplo: inicial 10.000, final 16.105,10, años 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10,00%.',
	tool_cagr_usecases_title: 'Cuándo usarla',
	tool_cagr_usecase_1: 'Comparar el crecimiento plurianual de una inversión o de ingresos en base anualizada (solo ilustración).',
	tool_cagr_usecase_2: 'Práctica de clase: ensayar el porcentaje CAGR con cifras fijas.',
	tool_cagr_usecase_3: 'Boceto rápido de rentabilidad anualizada antes de hablar con un asesor — no sustituye un análisis completo.',
	tool_cagr_faq_q1: '¿Qué fórmula de CAGR usa esta página?',
	tool_cagr_faq_a1:
		'CAGR = ((Valor final ÷ Valor inicial)^(1 ÷ Años) − 1) × 100. Inicial, final y años deben ser mayores que cero.',
	tool_cagr_faq_q2: '¿En qué se diferencia el CAGR del ROI simple?',
	tool_cagr_faq_a2:
		'El ROI simple es un porcentaje de un solo periodo e ignora cuántos años duró el cambio. El CAGR anualiza ese crecimiento según los años que indiques.',
	tool_cagr_faq_q3: '¿Y si el valor inicial o final es cero o negativo?',
	tool_cagr_faq_a3:
		'La calculadora exige ambos valores mayores que cero. Ceros o negativos hacen la fórmula estándar indefinida o engañosa aquí.',
	tool_cagr_faq_q4: '¿Es esto asesoramiento de inversión?',
	tool_cagr_faq_a4:
		'No. Las cifras son solo ilustraciones educativas y no constituyen asesoramiento de inversión, fiscal o financiero. El crecimiento pasado o hipotético no garantiza resultados futuros.',
	tool_cagr_disclaimer:
		'Los resultados del CAGR son solo ilustraciones educativas y no constituyen asesoramiento de inversión, fiscal o financiero. Las rentabilidades pasadas o hipotéticas no garantizan resultados futuros. Las carteras reales afrontan comisiones, impuestos, flujos de caja y riesgos que esta página no modela.',
	tool_cagr_references:
		'Definición y fórmulas de CAGR en Investopedia; tasa anualizada estándar ((EV/BV)^(1/n) − 1).',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate (CAGR)',
	tool_cagr_ref_formula_label: 'Investopedia — Fórmula para calcular el CAGR',
};

export default es;
