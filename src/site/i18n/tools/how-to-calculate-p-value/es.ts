/**
 * Fragmento i18n (how-to-calculate-p-value / es).
 * p unilateral o bilateral bajo normal estándar a partir de z con erfc;
 * atajos de z críticos y pasos intermedios. Solo con fines educativos.
 */
import type { SiteLangDict } from '../../../types';

/** Español: textos de la calculadora de valor p desde una puntuación z */
const es: SiteLangDict = {
	tool_p_value_title: "Calculadora de valor p — Desde una puntuación z",
	tool_p_value_description:
		"Obtén el valor p normal unilateral o bilateral a partir de una puntuación z con una aproximación erfc. Ejemplo: z = 1.96 → p bilateral ≈ 0.05. La página muestra también el otro tipo de cola, |z| y los pasos. Supone una normal estándar continua — no es una prueba t, χ² ni exacta. Solo con fines educativos; no sustituye software estadístico ni un análisis profesional.",
	tool_p_value_article:
		"Aproxima el valor p normal estándar unilateral o bilateral desde z, con atajos de z críticos y el desarrollo paso a paso.",
	tool_p_value_desc: "Valor p normal uni- o bilateral desde z. Muestra ambas colas y |z|.",

	tool_p_value_mode_label: "Tipo de cola",
	tool_p_value_mode_two: "Bilateral",
	tool_p_value_mode_one: "Unilateral",
	tool_p_value_hint:
		"Usa un modelo normal estándar. Con la misma |z|, el p unilateral es la mitad del bilateral en una normal simétrica.",
	tool_p_value_z_label: "Puntuación z",
	tool_p_value_z_ph: "p. ej. 1.96",
	tool_p_value_chips_label: "Atajos de z críticos habituales",
	tool_p_value_chip_1645: "z = 1.645",
	tool_p_value_chip_196: "z = 1.96",
	tool_p_value_chip_2576: "z = 2.576",
	tool_p_value_calculate: "Calcular",
	tool_p_value_sample: "Cargar ejemplo",
	tool_p_value_clear: "Borrar",
	tool_p_value_pOut_label: "Valor p bilateral",
	tool_p_value_pOneOut_label: "Valor p unilateral",
	tool_p_value_altOut_label: "El otro tipo de cola",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "Pasos",
	tool_p_value_step_abs_tpl: "Usa el valor absoluto: |z| = |{z}| = {abs}.",
	tool_p_value_step_two_tpl: "p bilateral ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}.",
	tool_p_value_step_one_tpl: "p unilateral ≈ bilateral / 2 = {two} / 2 ≈ {one}.",
	tool_p_value_result_note:
		"Aproximación normal estándar para aprender. No es una prueba t, χ², binomial exacta ni un servicio de diseño de estudio. Un p pequeño no demuestra por sí solo una afirmación.",
	tool_p_value_err_generic: "Introduce una puntuación z finita (por ejemplo 1.96).",

	tool_p_value_how_title: "Cómo usar la calculadora de valor p",
	tool_p_value_how_body:
		"Elige bilateral o unilateral, escribe z (o pulsa un atajo de z crítico) y pulsa Calcular. Cargar ejemplo rota 1.96 bilateral, 1.96 unilateral, z=0 y z=2.576.",
	tool_p_value_how_item_1: "Elige bilateral o unilateral.",
	tool_p_value_how_item_2: "Introduce una z finita, o pulsa 1.645 / 1.96 / 2.576.",
	tool_p_value_how_item_3: "Pulsa Calcular para ver el p elegido, la otra cola y los pasos.",
	tool_p_value_how_item_4: "Usa Cargar ejemplo para rotar puntos habituales de libro de texto.",

	tool_p_value_why_choose_title:
		"Por qué usar Calculadora de valor p — Desde una puntuación z",
	tool_p_value_why_choose_item_1: "p normal unilateral y bilateral a partir de la misma z.",
	tool_p_value_why_choose_item_2:
		"Atajos de z críticos para los puntos bilaterales ≈10% / 5% / 1%.",
	tool_p_value_why_choose_item_3: "Líneas de pasos con erfc(|z|/√2) y la mitad unilateral.",
	tool_p_value_why_choose_item_4: "Supuesto explícito: solo normal estándar continua.",
	tool_p_value_why_choose_item_5:
		"Límite honesto: no es un paquete completo de contraste de hipótesis ni una prueba de una afirmación.",

	tool_p_value_formula_title: "Fórmulas del valor p normal",
	tool_p_value_formula_body:
		"Bajo una normal estándar continua, p bilateral ≈ erfc(|z| / √2). El p unilateral es la mitad en una normal simétrica.",
	tool_p_value_formula_item_1: "p bilateral ≈ erfc(|z| / √2). Ejemplo: |z|=1.96 → p ≈ 0.05.",
	tool_p_value_formula_item_2:
		"p unilateral ≈ bilateral / 2. Misma |z|=1.96 → unilateral ≈ 0.025.",
	tool_p_value_formula_item_3:
		"Usa una aproximación numérica de erfc — precisión de aprendizaje, no software certificado.",
	tool_p_value_formula_item_4: "Asume z de normal estándar, no t, χ² ni pruebas exactas discretas.",
	tool_p_value_formula_item_5: "z = 0 → p bilateral = 1; mayor |z| → menor p.",

	tool_p_value_example_title: "Ejemplos resueltos",
	tool_p_value_example:
		"Cargar ejemplo empieza con z=1.96 bilateral → p≈0.05. Luego muestra la mitad unilateral ≈0.025. Después z=0 → p=1. El último ejemplo usa z=2.576 (cerca del valor crítico bilateral al 1%).",

	tool_p_value_usecases_title: "Cuándo usar una calculadora de valor p",
	tool_p_value_usecase_1: "Tareas: pasar de una z conocida a un p de cola normal aproximado.",
	tool_p_value_usecase_2:
		"Comprobación rápida tras calcular z con media y DE en la página relacionada de puntuación z.",
	tool_p_value_usecase_3: "Confrontar la regla 1.96 ↔ 0.05 con una salida numérica.",
	tool_p_value_usecase_4: "Ver unilateral frente a bilateral lado a lado con la misma |z|.",

	tool_p_value_faq_q1: "¿Es unilateral o bilateral?",
	tool_p_value_faq_a1:
		"Ambos. Elige el modo. Lo bilateral cubre ±|z|; lo unilateral es la mitad bajo una normal simétrica.",
	tool_p_value_faq_q2: "¿Qué distribución se asume?",
	tool_p_value_faq_a2:
		"Una normal estándar continua para z. No es una calculadora de t, χ² ni binomial exacta.",
	tool_p_value_faq_q3: "¿Por qué z = 1.96 está cerca de 0.05?",
	tool_p_value_faq_a3:
		"En una normal estándar, |z| ≈ 1.96 es el valor crítico habitual de una prueba bilateral al 5%; la aproximación erfc da cerca de 0.05.",
	tool_p_value_faq_q4: "¿Un p pequeño demuestra la hipótesis alternativa?",
	tool_p_value_faq_a4:
		"No. Un valor p es una probabilidad de cola bajo supuestos declarados, no una prueba automática de una afirmación.",
	tool_p_value_faq_q5: "¿Cómo se relacionan aquí unilateral y bilateral?",
	tool_p_value_faq_a5:
		"En una normal simétrica, p unilateral ≈ p bilateral ÷ 2 para la misma |z|.",
	tool_p_value_faq_q6: "¿Puedo introducir una z negativa?",
	tool_p_value_faq_a6:
		"Sí. La página usa |z|, así que −1.96 y 1.96 dan el mismo p bilateral.",
	tool_p_value_faq_q7: "¿Dónde obtengo primero la puntuación z?",
	tool_p_value_faq_a7:
		"Usa la calculadora relacionada de puntuación z si partes de una puntuación bruta, media y DE.",

	tool_p_value_disclaimer:
		"Aproximación educativa bajo un modelo normal estándar únicamente — no sustituye software estadístico, diseño de estudio ni análisis profesional.",
	tool_p_value_references:
		"Wikipedia: valor p y distribución normal; función de error complementaria para colas normales.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Valor p",
	tool_p_value_ref_normal_label: "Wikipedia — Distribución normal",
};

export default es;
