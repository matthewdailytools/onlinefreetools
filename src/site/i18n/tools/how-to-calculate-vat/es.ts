/**
 * i18n tool shard (how-to-calculate-vat / es).
 * Añadir IVA/GST al neto o extraer impuesto del bruto; chips de tasa; comprobación inversa.
 */
import type { SiteLangDict } from '../../../types';

/** Español: calculadora IVA / GST (neto ↔ bruto) */
const es: SiteLangDict = {
	tool_vat_title: "Calculadora de IVA / GST — Añadir al neto o extraer del bruto",
	tool_vat_description:
		"Añade IVA o GST a un importe neto, o extrae el impuesto de un precio bruto con IVA incluido. Ejemplo: neto 100 al 20% → bruto 120, impuesto 20. Introduce tu propia tasa; sin tabla por país. Solo aritmética educativa, no asesoramiento fiscal ni contable.",
	tool_vat_article:
		"Suma IVA/GST a un precio neto o descompone un bruto en neto e impuesto, con pasos detallados y comprobación inversa.",
	tool_vat_desc:
		"Añade o extrae IVA/GST con tu tasa. Muestra neto, bruto, impuesto y comprobación inversa.",

	tool_vat_safety_banner:
		"Solo educativo. Introduce tú la tasa que aplique a tu caso: esta página no consulta tasas por país y no es asesoramiento de declaración ni cumplimiento.",
	tool_vat_mode_label: "Modo",
	tool_vat_mode_add: "Añadir impuesto al neto",
	tool_vat_mode_extract: "Extraer impuesto del bruto",
	tool_vat_amount_label: "Importe",
	tool_vat_amount_ph: "p. ej. 100",
	tool_vat_rate_label: "IVA/GST %",
	tool_vat_rate_ph: "p. ej. 20",
	tool_vat_hint:
		"Elige añadir (neto → bruto) o extraer (bruto → neto). Escribe cualquier porcentaje no negativo. Los chips son atajos: confirma la tasa legal de tu factura.",
	tool_vat_chips_label: "Atajos de tasa frecuentes",
	tool_vat_chip_5: "5%",
	tool_vat_chip_10: "10%",
	tool_vat_chip_20: "20%",
	tool_vat_chip_21: "21%",
	tool_vat_calculate: "Calcular",
	tool_vat_sample: "Cargar ejemplo",
	tool_vat_clear: "Limpiar",
	tool_vat_grossOut_label: "Bruto",
	tool_vat_netOut_label: "Neto",
	tool_vat_taxOut_label: "Impuesto",
	tool_vat_row_check: "Comprobación inversa",
	tool_vat_steps_title: "Pasos",
	tool_vat_step_add_tpl:
		"Añadir: bruto = neto × (1 + tasa/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_step_extract_tpl:
		"Extraer: neto = bruto ÷ (1 + tasa/100) = {gross} ÷ (1 + {pct}/100) = {net}.",
	tool_vat_step_tax_tpl: "Impuesto = bruto − neto = {gross} − {net} = {tax}.",
	tool_vat_step_check_tpl:
		"Comprobar: neto × (1 + tasa/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_result_note:
		"Tú indicas el porcentaje. Facturas con varias tasas, exenciones y reglas de declaración no están modeladas. Solo educativo: no es asesoramiento fiscal, contable ni de inversión.",
	tool_vat_err_generic:
		"Introduce un importe positivo y una tasa de 0 o más (por ejemplo importe 100 y tasa 20).",

	tool_vat_how_title: "Cómo usar la calculadora de IVA / GST",
	tool_vat_how_body:
		"Elige añadir o extraer, escribe importe y tasa, luego Calcular. Cargar ejemplo rota: añadir 100@20%, extraer 120@20%, añadir 50@10% y extraer 107,1@7%.",
	tool_vat_how_item_1: "Elige Añadir impuesto al neto o Extraer impuesto del bruto.",
	tool_vat_how_item_2: "Introduce el importe y el porcentaje de IVA/GST (o pulsa un chip de tasa).",
	tool_vat_how_item_3: "Pulsa Calcular para ver bruto, neto, impuesto y la línea de comprobación inversa.",
	tool_vat_how_item_4: "Usa Cargar ejemplo para alternar casos habituales de añadir/extraer.",

	tool_vat_why_choose_title: "Por qué usar esta calculadora de IVA / GST",
	tool_vat_why_choose_item_1: "Ambas direcciones: sumar impuesto al neto o sacar neto e impuesto de un bruto.",
	tool_vat_why_choose_item_2: "Comprobación inversa que multiplica neto × (1+r) de vuelta al bruto.",
	tool_vat_why_choose_item_3: "Líneas de paso que sustituyen tus cifras en las fórmulas.",
	tool_vat_why_choose_item_4: "Chips de tasa (5 / 10 / 20 / 21%) como atajos de escritura, no asesoramiento legal de tasas.",
	tool_vat_why_choose_item_5: "Límite claro: tú pones la tasa; sin matriz fiscal por país ni ayuda de declaración.",

	tool_vat_formula_title: "Fórmulas de IVA / GST",
	tool_vat_formula_body:
		"Sea r la tasa decimal (porcentaje ÷ 100). Las mismas identidades valen para IVA, GST o impuesto sobre ventas cuando el impuesto es un único porcentaje del neto.",
	tool_vat_formula_item_1: "Añadir: bruto = neto × (1 + r). Ejemplo: 100 × 1,20 = 120 al 20%.",
	tool_vat_formula_item_2: "Extraer: neto = bruto ÷ (1 + r). Ejemplo: 120 ÷ 1,20 = 100 al 20%.",
	tool_vat_formula_item_3: "Impuesto = bruto − neto. Mismo ejemplo → impuesto 20.",
	tool_vat_formula_item_4: "Fracción del bruto = r ÷ (1 + r). Al 20%, el impuesto es 1/6 del bruto.",
	tool_vat_formula_item_5: "GST frente a IVA: la aritmética es la misma; nombres y declaración cambian según el país.",

	tool_vat_example_title: "Ejemplos resueltos",
	tool_vat_example:
		"Cargar ejemplo empieza añadiendo: neto 100 al 20% → bruto 120, impuesto 20. Luego extrae el mismo 120 a neto 100. Después añade 50 al 10% → 55. El último extrae 107,1 al 7% ≈ neto 100. Confirma siempre la tasa de tu factura.",

	tool_vat_usecases_title: "Cuándo usar una calculadora de IVA / GST",
	tool_vat_usecase_1: "Deberes: añadir impuesto a un neto y mostrar los pasos con (1+r).",
	tool_vat_usecase_2: "Revisar tickets: partir de un total con IVA incluido y recuperar neto e impuesto.",
	tool_vat_usecase_3: "Presupuestos rápidos: aplicar un porcentaje conocido sin abrir una hoja de cálculo.",
	tool_vat_usecase_4: "Aclarar la diferencia GST vs IVA usando la misma aritmética.",

	tool_vat_faq_q1: "¿Cómo se añade IVA a un importe neto?",
	tool_vat_faq_a1: "Multiplica por (1 + tasa/100). Neto 100 al 20% → 100 × 1,20 = 120 bruto; impuesto 20.",
	tool_vat_faq_q2: "¿Cómo se extrae IVA de un precio bruto?",
	tool_vat_faq_a2: "Divide por (1 + tasa/100). Bruto 120 al 20% → 120 ÷ 1,20 = 100 neto; impuesto 20.",
	tool_vat_faq_q3: "¿Incluyen tasas de IVA por país?",
	tool_vat_faq_a3: "No. Escribe el porcentaje tú. Los chips son solo atajos, no una tabla legal de tasas.",
	tool_vat_faq_q4: "¿El GST se calcula distinto del IVA?",
	tool_vat_faq_a4: "Con un único porcentaje sobre el neto, las fórmulas de añadir/extraer son iguales. Nombres y declaración varían según la jurisdicción.",
	tool_vat_faq_q5: "¿Puede la tasa ser cero?",
	tool_vat_faq_a5: "Sí. Al 0%, neto = bruto e impuesto = 0, útil para ejemplos docentes de tipo cero.",
	tool_vat_faq_q6: "¿Varias tasas de IVA en una factura?",
	tool_vat_faq_a6: "No. Calcula cada línea por separado o usa software contable con tasas mixtas y exenciones.",
	tool_vat_faq_q7: "¿Es asesoramiento de declaración?",
	tool_vat_faq_a7: "No. Solo aritmética educativa: no contabilidad, declaración fiscal ni inversión.",

	tool_vat_disclaimer:
		"Solo aritmética educativa de IVA/GST: no es asesoramiento financiero, fiscal, contable ni de inversión.",
	tool_vat_references: "Investopedia y fórmulas de libro de texto para contexto educativo.",
	tool_vat_ref_a_label: "Investopedia — IVA",
	tool_vat_ref_b_label: "Investopedia — Impuesto sobre ventas",
};

export default es;
