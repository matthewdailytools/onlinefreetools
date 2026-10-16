/**
 * Fragmento i18n del tool (how-to-calculate-macros / es).
 * Convierte calorías diarias y % de proteína/carbohidrato/grasa en gramos (4/4/9).
 * Solo aritmética educativa de energía — no consejo médico ni plan nutricional (YMYL).
 */
import type { SiteLangDict } from '../../../types';

/** Español: calculadora de macros (porcentajes calóricos → gramos) — copia completa */
const es: SiteLangDict = {
	tool_macros_title: "Calculadora de macros — Gramos diarios desde porcentajes",
	tool_macros_description:
		"Convierte las calorías diarias y los porcentajes de proteína, carbohidrato y grasa en gramos con los factores 4 / 4 / 9 kcal por gramo. Ejemplo: 2000 kcal al 30/40/30% → 150 g de proteína, 200 g de carbohidratos y ≈66,7 g de grasa. Los tres porcentajes deben sumar exactamente 100. Solo aritmética energética educativa: no es consejo médico ni terapia nutricional.",
	tool_macros_article:
		"Reparte las calorías diarias en gramos de proteína, carbohidrato y grasa con factores Atwater, atajos de reparto y pasos visibles.",
	tool_macros_desc: "Calorías y % de macros → gramos de P/C/G (4/4/9). Solo con fines educativos.",

	tool_macros_safety_banner:
		"Solo educativo. Esta página hace la aritmética de calorías a gramos de un libro de texto. No es consejo médico, un menú ni terapia nutricional personalizada.",
	tool_macros_hint:
		"Introduce kcal diarias y tres porcentajes no negativos que sumen 100. Los chips solo rellenan campos: no son dietas recomendadas.",
	tool_macros_cal_label: "Calorías (kcal)",
	tool_macros_cal_ph: "p. ej. 2000",
	tool_macros_pPct_label: "Proteína %",
	tool_macros_pPct_ph: "p. ej. 30",
	tool_macros_cPct_label: "Carbohidrato %",
	tool_macros_cPct_ph: "p. ej. 40",
	tool_macros_fPct_label: "Grasa %",
	tool_macros_fPct_ph: "p. ej. 30",
	tool_macros_chips_label: "Atajos de reparto habitual",
	tool_macros_chip_304030: "30 / 40 / 30",
	tool_macros_chip_404020: "40 / 40 / 20",
	tool_macros_chip_255025: "25 / 50 / 25",
	tool_macros_calculate: "Calcular",
	tool_macros_sample: "Cargar ejemplo",
	tool_macros_clear: "Borrar",
	tool_macros_pG_label: "Proteína",
	tool_macros_cG_label: "Carbohidratos",
	tool_macros_fG_label: "Grasa",
	tool_macros_sumOut_label: "Suma de porcentajes",
	tool_macros_kcalP_label: "kcal de proteína",
	tool_macros_kcalC_label: "kcal de carbohidrato",
	tool_macros_kcalF_label: "kcal de grasa",
	tool_macros_steps_title: "Pasos",
	tool_macros_step_p_tpl: "Proteína: {cal} × {pct}% = {kcal} kcal → {kcal} ÷ 4 = {g} g.",
	tool_macros_step_c_tpl: "Carbohidratos: {cal} × {pct}% = {kcal} kcal → {kcal} ÷ 4 = {g} g.",
	tool_macros_step_f_tpl: "Grasa: {cal} × {pct}% = {kcal} kcal → {kcal} ÷ 9 = {g} g.",
	tool_macros_step_sum_tpl: "Comprobar porcentajes: {p}% + {c}% + {f}% = 100%.",
	tool_macros_result_note:
		"Usa factores Atwater: P/C ≈ 4 y grasa ≈ 9 kcal/g. No modela alcohol, ajustes de fibra ni redondeo de etiquetas. Solo educativo — no consejo médico.",
	tool_macros_err_generic:
		"Introduce calorías mayores que 0 y tres porcentajes no negativos que sumen exactamente 100 (por ejemplo 2000 kcal al 30/40/30).",

	tool_macros_how_title: "Cómo usar la calculadora de macros",
	tool_macros_how_body:
		"Escribe calorías diarias y los % de proteína/carbohidrato/grasa (o pulsa un atajo) y luego Calcular. Cargar ejemplo rota 2000@30/40/30, 1800@40/40/20, 2500@25/50/25 y 2200@30/35/35.",
	tool_macros_how_item_1: "Introduce las calorías diarias en kcal.",
	tool_macros_how_item_2: "Introduce % de proteína, carbohidrato y grasa que sumen 100 (o pulsa un chip).",
	tool_macros_how_item_3: "Pulsa Calcular para ver gramos, kcal por macro y los pasos.",
	tool_macros_how_item_4: "Usa Cargar ejemplo para rotar repartos típicos de clase.",

	tool_macros_why_choose_title: "Por qué usar esta calculadora de macros",
	tool_macros_why_choose_item_1: "Gramos a partir de calorías con los factores 4 / 4 / 9 kcal por gramo.",
	tool_macros_why_choose_item_2: "Comprobación estricta: si los % no suman 100, no se muestran gramos.",
	tool_macros_why_choose_item_3: "Los chips de reparto son atajos de tecleo, no dietas prescritas.",
	tool_macros_why_choose_item_4: "Líneas de pasos con kcal por macro y la división a gramos.",
	tool_macros_why_choose_item_5: "Límite YMYL claro: solo aritmética educativa, no consejo médico.",

	tool_macros_formula_title: "Fórmulas de macros",
	tool_macros_formula_body:
		"Asigna la parte calórica por porcentaje y divide por la densidad energética Atwater. Los % deben sumar 100.",
	tool_macros_formula_item_1: "Gramos de proteína = (kcal × proteína%) ÷ 4. Ejemplo: 2000 × 30% ÷ 4 = 150 g.",
	tool_macros_formula_item_2: "Gramos de carbohidrato = (kcal × carbohidrato%) ÷ 4. Ejemplo: 2000 × 40% ÷ 4 = 200 g.",
	tool_macros_formula_item_3: "Gramos de grasa = (kcal × grasa%) ÷ 9. Ejemplo: 2000 × 30% ÷ 9 ≈ 66,67 g.",
	tool_macros_formula_item_4: "Se rechazan entradas cuyos porcentajes no sumen 100.",
	tool_macros_formula_item_5: "Los factores son promedios de libro; etiquetas y laboratorio pueden diferir un poco.",

	tool_macros_example_title: "Ejemplos resueltos",
	tool_macros_example:
		"Cargar ejemplo empieza con 2000 kcal al 30/40/30% → 150 g / 200 g / ≈66,7 g. Luego 1800 al 40/40/20; después 2500 al 25/50/25; por último 2200 al 30/35/35. Los presets son solo ejemplos.",

	tool_macros_usecases_title: "Cuándo usar una calculadora de macros",
	tool_macros_usecase_1: "Deberes: pasar un presupuesto calórico y un reparto % a gramos.",
	tool_macros_usecase_2: "Comparar dos repartos porcentuales con el mismo total de calorías.",
	tool_macros_usecase_3: "Combinar con una estimación BMR/TDEE para matemáticas de energía en clase (sigue sin ser consejo médico).",
	tool_macros_usecase_4: "Comprobar que los % de un plan escrito suman 100 antes de pasarlos a gramos.",

	tool_macros_faq_q1: "¿Cómo se calculan los gramos de macros a partir de las calorías?",
	tool_macros_faq_a1:
		"Multiplica las calorías por cada porcentaje; divide las kcal de proteína/carbohidrato entre 4 y las de grasa entre 9. Ejemplo: 2000 al 30/40/30 → 150 / 200 / ≈66,7 g.",
	tool_macros_faq_q2: "¿Por qué los porcentajes deben sumar 100?",
	tool_macros_faq_a2: "Si no, las partes calóricas se solapan o dejan un hueco. Esta página rechaza sumas distintas de 100.",
	tool_macros_faq_q3: "¿Por qué la grasa se divide entre 9?",
	tool_macros_faq_a3: "En el sistema Atwater la grasa aporta unas 9 kcal/g; proteína y carbohidrato unas 4.",
	tool_macros_faq_q4: "¿Los repartos predefinidos son dietas recomendadas?",
	tool_macros_faq_a4: "No. Los chips solo rellenan los campos de porcentaje. No son recomendaciones médicas ni de coaching.",
	tool_macros_faq_q5: "¿Esto es consejo médico?",
	tool_macros_faq_a5: "No. Solo aritmética energética educativa: no diagnóstico, menús ni terapia nutricional.",
	tool_macros_faq_q6: "¿Incluye alcohol o ajustes de fibra?",
	tool_macros_faq_a6: "No. Solo proteína, carbohidrato y grasa con factores 4/4/9.",
	tool_macros_faq_q7: "¿De dónde salen las calorías diarias?",
	tool_macros_faq_a7: "Las introduces tú. Herramientas BMR/TDEE relacionadas pueden estimar necesidades para aprender — sigue sin ser consejo médico.",

	tool_macros_disclaimer:
		"Solo aritmética educativa de calorías a gramos — no consejo médico, dietético ni de terapia nutricional. Consulta a un profesional cualificado para orientación personalizada.",
	tool_macros_references: "Wikipedia energía de los alimentos (factores Atwater); resumen nutricional de los CDC con contexto educativo.",
	tool_macros_ref_a_label: "Wikipedia — Energía de los alimentos",
	tool_macros_ref_b_label: "CDC — Nutrición",
};

export default es;
