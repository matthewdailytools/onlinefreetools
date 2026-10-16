/**
 * Fragmento i18n (how-to-calculate-discount / es).
 * Precio rebajado desde % de descuento, % entre dos precios o precio original;
 * segundo descuento opcional en cascada. Solo aritmética educativa, no caja ni impuestos.
 */
import type { SiteLangDict } from '../../../types';

/** Español: calculadora de descuento / precio de oferta */
const es: SiteLangDict = {
	tool_discount_title: "Calculadora de descuento — Precio final o porcentaje",
	tool_discount_description:
		"Calcula el precio rebajado a partir del importe original y el porcentaje de descuento, recupera el precio de lista desde el ticket, o mide el % de descuento entre dos precios. Ejemplo: 100 con 20% de descuento → 80. Un segundo descuento opcional se aplica sobre el precio ya rebajado. Aritmética de compra educativa — no es una caja de tienda.",
	tool_discount_article:
		"Precio de oferta por % de descuento, porcentaje entre dos precios o precio original desde el total rebajado, con segundo descuento opcional en cascada y pasos visibles.",
	tool_discount_desc:
		"Precio rebajado, % de descuento o precio original. Apila un segundo descuento y ve el % efectivo ahorrado.",

	tool_discount_mode_label: "¿Qué quieres calcular?",
	tool_discount_mode_sale: "Precio rebajado desde el %",
	tool_discount_mode_pct: "% de descuento entre dos precios",
	tool_discount_mode_original: "Precio original desde oferta + %",
	tool_discount_hint:
		"Elige el modo según los dos valores que ya conoces. Un segundo descuento, si lo pones, multiplica el precio ya rebajado (cascada), no el original.",
	tool_discount_original_label: "Precio original",
	tool_discount_original_ph: "p. ej. 100",
	tool_discount_sale_label: "Precio de oferta / final",
	tool_discount_sale_ph: "p. ej. 80",
	tool_discount_pct_label: "Descuento (% off)",
	tool_discount_pct_ph: "p. ej. 20",
	tool_discount_pct2_label: "Segundo descuento % (opcional)",
	tool_discount_pct2_ph: "p. ej. 10",
	tool_discount_chips_label: "Atajos de porcentaje habituales",
	tool_discount_chip_10: "10% dto.",
	tool_discount_chip_15: "15% dto.",
	tool_discount_chip_20: "20% dto.",
	tool_discount_chip_25: "25% dto.",
	tool_discount_chip_50: "50% dto.",
	tool_discount_calculate: "Calcular",
	tool_discount_sample: "Cargar ejemplo",
	tool_discount_clear: "Borrar",
	tool_discount_finalOut_label: "Precio rebajado",
	tool_discount_savedOut_label: "Importe ahorrado",
	tool_discount_pctOut_label: "Porcentaje de descuento",
	tool_discount_originalOut_label: "Precio original",
	tool_discount_effectiveOut_label: "% efectivo de descuento",
	tool_discount_steps_title: "Pasos",
	tool_discount_step_sale_tpl: "Tras el primer descuento: {original} × (1 − {pct}/100) = {mid}.",
	tool_discount_step_sale2_tpl: "Cascada del segundo descuento: {mid} × (1 − {pct2}/100) = {final}.",
	tool_discount_step_saved_tpl: "Ahorro = original − oferta = {original} − {final} = {saved}.",
	tool_discount_step_pct_tpl:
		"% de descuento = (original − oferta) ÷ original × 100 = ({original} − {sale}) ÷ {original} × 100 = {pct}%.",
	tool_discount_step_original_tpl:
		"Original = oferta ÷ (1 − pct/100) = {sale} ÷ (1 − {pct}/100) = {original}.",
	tool_discount_step_effective_tpl:
		"% efectivo = (original − final) ÷ original × 100 = ({original} − {final}) ÷ {original} × 100 = {eff}%.",
	tool_discount_result_note:
		"El segundo descuento, si existe, se aplica al precio ya rebajado (cascada). No se modelan impuestos, cupones de importe fijo ni redondeos de tienda. Solo educativo — no es una caja.",
	tool_discount_err_generic:
		"Introduce importes positivos acordes al modo (por ejemplo original 100 y 20% de descuento, u original 100 y oferta 80). El % de descuento debe estar entre 0 y 100; para recuperar el original el % debe ser menor que 100.",

	tool_discount_how_title: "Cómo usar la calculadora de descuento",
	tool_discount_how_body:
		"Elige precio rebajado, % de descuento o precio original. Introduce los valores conocidos, opcionalmente toca un chip de porcentaje y pulsa Calcular. Cargar ejemplo rota: 100@20% → 80, % entre 100→80, invertir 80 tras 20%, y cascada 20%+10%.",
	tool_discount_how_item_1: "Elige el modo que coincida con los dos números que ya tienes.",
	tool_discount_how_item_2: "Introduce el original y/o la oferta y el % de descuento (o un chip).",
	tool_discount_how_item_3: "Opcional: añade un segundo % en cascada en el modo precio rebajado.",
	tool_discount_how_item_4: "Pulsa Calcular para ver la respuesta, el ahorro y las líneas de pasos.",

	tool_discount_why_choose_title: "Qué te aporta esta calculadora de descuento",
	tool_discount_why_choose_item_1:
		"Tres sentidos: precio rebajado desde %, % entre precios, u original desde el total de oferta.",
	tool_discount_why_choose_item_2: "Segundo descuento opcional en cascada con % combinado efectivo.",
	tool_discount_why_choose_item_3: "Líneas de pasos que sustituyen tus números en las fórmulas.",
	tool_discount_why_choose_item_4: "Chips de % (10 / 15 / 20 / 25 / 50%) como atajos de escritura.",
	tool_discount_why_choose_item_5:
		"Límite claro: solo aritmética de % de descuento — sin impuestos, cupones fijos ni redondeo de caja.",

	tool_discount_formula_title: "Fórmulas de descuento",
	tool_discount_formula_body:
		"Sea d el porcentaje de descuento ÷ 100. Precio rebajado y original inverso usan el factor (1 − d). Los descuentos en cascada multiplican factores sucesivos.",
	tool_discount_formula_item_1:
		"Precio rebajado = original × (1 − d). Ejemplo: 100 × 0,80 = 80 con 20% de descuento.",
	tool_discount_formula_item_2: "Ahorro = original − oferta. Mismo ejemplo → ahorro 20.",
	tool_discount_formula_item_3:
		"% de descuento = (original − oferta) ÷ original × 100. Ejemplo: (100 − 80) ÷ 100 × 100 = 20%.",
	tool_discount_formula_item_4:
		"Original desde oferta = oferta ÷ (1 − d). Ejemplo: 80 ÷ 0,80 = 100 con 20% de descuento.",
	tool_discount_formula_item_5:
		"Cascada: final = original × (1 − d₁) × (1 − d₂). 20% y luego 10% sobre 100 → 72 (28% efectivo), no 30%.",

	tool_discount_example_title: "Ejemplos resueltos",
	tool_discount_example:
		"Cargar ejemplo empieza con original 100 al 20% → oferta 80, ahorro 20. Luego mide el % de 100→80 (=20%). Después invierte oferta 80 tras 20% hasta original 100. El último apila 20% y luego 10% sobre 100 → 72 (28% efectivo).",

	tool_discount_usecases_title: "Cuándo usar una calculadora de descuento",
	tool_discount_usecase_1:
		"Compras: convertir un «% de descuento» anunciado en el precio que esperas antes de impuestos.",
	tool_discount_usecase_2:
		"Deberes: practicar descuentos simples y sucesivos con pasos visibles.",
	tool_discount_usecase_3:
		"Revisar tickets: recuperar el precio de lista desde el total rebajado y un % conocido.",
	tool_discount_usecase_4:
		"Comparar ofertas en cascada: ver que 20% y luego 10% no es lo mismo que 30% de descuento.",

	tool_discount_faq_q1: "¿Cómo se calcula el precio rebajado desde un % de descuento?",
	tool_discount_faq_a1:
		"Multiplica por (1 − porcentaje/100). Original 100 con 20% de descuento → 100 × 0,80 = 80; ahorro = 20.",
	tool_discount_faq_q2: "¿Cómo se aplica un doble descuento?",
	tool_discount_faq_a2:
		"El segundo % multiplica el precio ya rebajado, no el original. 20% y luego 10% sobre 100 → 72, un 28% efectivo — no 30%.",
	tool_discount_faq_q3: "¿Cómo se halla el % de descuento entre dos precios?",
	tool_discount_faq_a3:
		"% de descuento = (original − oferta) ÷ original × 100. De 100 a 80 → 20% de descuento.",
	tool_discount_faq_q4: "¿Cómo se obtiene el precio original tras un descuento?",
	tool_discount_faq_a4:
		"Divide el precio de oferta entre (1 − porcentaje/100). Oferta 80 tras 20% → 80 ÷ 0,80 = 100.",
	tool_discount_faq_q5: "¿«20% de descuento» es lo mismo que «pagar el 20%»?",
	tool_discount_faq_a5:
		"No. 20% de descuento significa que pagas el 80% del original (multiplicar por 0,8).",
	tool_discount_faq_q6: "¿Incluye el IVA o el impuesto sobre ventas?",
	tool_discount_faq_a6:
		"No. Introduce importes antes de impuestos. Usa una página de impuestos aparte si necesitas IVA/GST o sales tax encima.",
	tool_discount_faq_q7: "¿Puedo introducir un cupón de importe fijo?",
	tool_discount_faq_a7:
		"Esta página solo usa % de descuento. Resta el cupón fijo tú mismo antes o después del cálculo porcentual.",

	tool_discount_disclaimer:
		"Solo ilustración educativa de precios — no es caja de tienda, motor fiscal ni consejo financiero.",
	tool_discount_references:
		"Resumen de descuentos en Investopedia; aritmética de descuentos minoristas en OpenStax, contexto educativo.",
	tool_discount_ref_a_label: "Investopedia — Discount",
	tool_discount_ref_b_label: "OpenStax — Discounts, Markups, and Sales Tax",
};

export default es;
