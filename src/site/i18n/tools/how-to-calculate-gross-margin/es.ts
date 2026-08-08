/**
 * i18n tool shard (how-to-calculate-gross-margin / es).
 * Español: margen bruto / beneficio bruto — reescritura independiente.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_gross_margin_title: 'Calculadora de margen bruto — Beneficio bruto y porcentaje',
	tool_gross_margin_description:
		'Calcula el beneficio bruto y el margen bruto (%) a partir de ingresos y coste de ventas (COGS). Ejemplo: ingresos 10.000, COGS 6.000 → beneficio 4.000 y margen 40%. En el navegador; solo educativo — no es consejo empresarial ni de inversión.',
	tool_gross_margin_article:
		'El margen bruto muestra qué parte de los ingresos queda tras el coste de ventas. Esta página une beneficio bruto y margen % en una sola URL educativa; el margen neto u operativo va en otra herramienta.',
	tool_gross_margin_calculate: 'Calcular',
	tool_gross_margin_sample: 'Cargar ejemplo',
	tool_gross_margin_clear: 'Borrar',
	tool_gross_margin_revenue_label: 'Ingresos (ventas)',
	tool_gross_margin_revenue_ph: 'p. ej. 10000',
	tool_gross_margin_cogs_label: 'Coste de ventas (COGS)',
	tool_gross_margin_cogs_ph: 'p. ej. 6000',
	tool_gross_margin_result_profit: 'Beneficio bruto',
	tool_gross_margin_result_margin: 'Margen bruto',
	tool_gross_margin_result_note: 'Solo ilustración educativa — no es consejo empresarial ni de inversión.',
	tool_gross_margin_err_revenue: 'Los ingresos deben ser mayores que cero.',
	tool_gross_margin_err_cogs: 'El COGS debe ser cero o un número positivo.',
	tool_gross_margin_how_title: 'Cómo funciona',
	tool_gross_margin_how_body:
		'Introduce ingresos y COGS. La herramienta calcula beneficio bruto y margen %. Markup vs margen y beneficio neto quedan en FAQ u otras herramientas — sin URLs puerta.',
	tool_gross_margin_formula_title: 'Fórmula y supuestos',
	tool_gross_margin_formula_body:
		'Beneficio bruto = Ingresos − COGS. Margen bruto % = (Beneficio bruto ÷ Ingresos) × 100. Supuestos:',
	tool_gross_margin_formula_item_1: 'Ingresos y COGS usan el mismo periodo y moneda; impuestos y gastos operativos no se modelan.',
	tool_gross_margin_formula_item_2: 'COGS es solo coste de producto; SG&A e intereses quedan fuera.',
	tool_gross_margin_formula_item_3: 'Los resultados son ilustraciones educativas, no previsiones ni consejo.',
	tool_gross_margin_example_title: 'Ejemplo',
	tool_gross_margin_example:
		'Ejemplo: ingresos 10.000, COGS 6.000 → beneficio bruto 4.000 → margen bruto 40%.',
	tool_gross_margin_usecases_title: 'Cuándo usarla',
	tool_gross_margin_usecase_1: 'Clase: practicar la fórmula de margen bruto con ingresos y COGS fijos.',
	tool_gross_margin_usecase_2: 'Boceto de margen de producto antes de hablar con un asesor (solo ilustración).',
	tool_gross_margin_usecase_3: 'Ver beneficio y margen % juntos sin una URL solo de markup.',
	tool_gross_margin_faq_q1: '¿Qué fórmula de margen bruto usa esta página?',
	tool_gross_margin_faq_a1:
		'Beneficio bruto = Ingresos − COGS. Margen bruto % = Beneficio bruto ÷ Ingresos × 100.',
	tool_gross_margin_faq_q2: '¿Y si el COGS supera los ingresos?',
	tool_gross_margin_faq_a2:
		'Beneficio y margen salen negativos. El modelo lo permite para ver pérdidas — sigue sin ser consejo.',
	tool_gross_margin_faq_q3: '¿Es consejo empresarial?',
	tool_gross_margin_faq_a3:
		'No. Las cifras son solo ilustraciones educativas y no son consejo fiscal, empresarial ni de inversión.',
	tool_gross_margin_faq_q4: '¿Margen bruto vs markup?',
	tool_gross_margin_faq_a4:
		'El margen divide el beneficio por ingresos; el markup lo divide por coste. Esta página se centra en el margen; el markup solo se explica en FAQ.',
	tool_gross_margin_disclaimer:
		'Los resultados de margen bruto son solo ilustraciones educativas y no constituyen consejo empresarial, financiero, fiscal ni de inversión. Los negocios reales tienen tasas, impuestos y clasificaciones de coste que esta página no modela.',
	tool_gross_margin_references:
		'Definiciones de Investopedia de gross margin y gross profit; fórmula estándar (Ingresos − COGS) / Ingresos.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default es;
