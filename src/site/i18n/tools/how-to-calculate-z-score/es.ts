/**
 * Fragmento i18n de la herramienta (how-to-calculate-z-score / es).
 * Convierte puntuación bruta ↔ puntuación z (estándar) con z = (x − media) / DE;
 * pasos visibles y rechazo si DE ≤ 0. Solo escala lineal educativa — no prueba
 * de normalidad, valor p ni diseño de estudio.
 */
import type { SiteLangDict } from '../../../types';

/** Español: calculadora de puntuación z / puntuación estándar */
const es: SiteLangDict = {
	tool_z_score_title: "Calculadora de puntuación z — Puntuación bruta ↔ estándar",
	tool_z_score_description:
		"Convierte una puntuación bruta en puntuación z (puntuación estándar) con z = (x − media) / DE, o recupera la puntuación bruta a partir de z. Ejemplo: x = 85, media = 70, DE = 10 → z = 1.5. Exige DE > 0. Solo escala lineal educativa — no es una prueba de normalidad ni calcula un valor p.",
	tool_z_score_article:
		"Obtén la puntuación estándar desde un valor bruto, media y DE, o recupera el valor bruto desde z, con el desarrollo paso a paso.",
	tool_z_score_desc: "Puntuación bruta ↔ z con z = (x − media) / DE. Muestra pasos y |z|.",

	tool_z_score_mode_label: "¿Qué quieres obtener?",
	tool_z_score_mode_z: "Puntuación z desde la bruta",
	tool_z_score_mode_x: "Puntuación bruta desde z",
	tool_z_score_hint:
		"Introduce la media y una desviación estándar positiva. Elige si partes de la puntuación bruta o de z.",
	tool_z_score_x_label: "Puntuación bruta (x)",
	tool_z_score_x_ph: "p. ej. 85",
	tool_z_score_z_label: "Puntuación z (z)",
	tool_z_score_z_ph: "p. ej. 1.5",
	tool_z_score_mean_label: "Media (μ)",
	tool_z_score_mean_ph: "p. ej. 70",
	tool_z_score_sd_label: "Desviación estándar (σ)",
	tool_z_score_sd_ph: "p. ej. 10",
	tool_z_score_calculate: "Calcular",
	tool_z_score_sample: "Cargar ejemplo",
	tool_z_score_clear: "Borrar",
	tool_z_score_zOut_label: "Puntuación z",
	tool_z_score_xOut_label: "Puntuación bruta",
	tool_z_score_diffOut_label: "x − media",
	tool_z_score_absOut_label: "|z| (DE respecto a la media)",
	tool_z_score_steps_title: "Pasos",
	tool_z_score_step_z_tpl: "z = (x − media) / DE = ({x} − {mean}) / {sd} = {z}.",
	tool_z_score_step_x_tpl: "x = media + z × DE = {mean} + {z} × {sd} = {x}.",
	tool_z_score_step_diff_tpl: "Diferencia respecto a la media: x − media = {x} − {mean} = {diff}.",
	tool_z_score_step_abs_tpl: "Distancia en DE: |z| = |{z}| = {abs}.",
	tool_z_score_result_note:
		"El álgebra de z no exige normalidad; muchos usos posteriores (valores p normales) sí. Solo educativo — no sustituye software estadístico ni el diseño de un estudio.",
	tool_z_score_err_generic:
		"Introduce números finitos en los campos activos y una desviación estándar mayor que 0 (por ejemplo x=85, media=70, DE=10).",

	tool_z_score_how_title: "Cómo usar la calculadora de puntuación z",
	tool_z_score_how_body:
		"Elige bruta→z o z→bruta, introduce media y DE > 0 y pulsa Calcular. Cargar ejemplo cicla 85/70/10 → 1.5, el inverso 1.5 → 85, media igual a x → 0, y una puntuación por debajo de la media.",
	tool_z_score_how_item_1: "Elige «Puntuación z desde la bruta» o «Puntuación bruta desde z».",
	tool_z_score_how_item_2: "Introduce la media y una desviación estándar positiva.",
	tool_z_score_how_item_3: "Según el modo, escribe la puntuación bruta o la puntuación z.",
	tool_z_score_how_item_4: "Pulsa Calcular para ver el resultado, x−media, |z| y las líneas de pasos.",

	tool_z_score_why_choose_title: "Qué ofrece esta calculadora de puntuación z",
	tool_z_score_why_choose_item_1: "Ambos sentidos: puntuación bruta → z, o z → puntuación bruta.",
	tool_z_score_why_choose_item_2: "Líneas de pasos que sustituyen tus números en z = (x − μ) / σ.",
	tool_z_score_why_choose_item_3: "Bloqueo claro si DE ≤ 0 para que nunca se divida entre cero.",
	tool_z_score_why_choose_item_4: "|z| mostrado como cuántas desviaciones estándar hay respecto a la media.",
	tool_z_score_why_choose_item_5: "Límite honesto: solo escala lineal — no prueba de normalidad ni valor p.",

	tool_z_score_formula_title: "Fórmulas de la puntuación z",
	tool_z_score_formula_body:
		"Una puntuación z (puntuación estándar) reescala un valor respecto a una media y una desviación estándar dadas. Las unidades se cancelan; z es adimensional.",
	tool_z_score_formula_item_1: "z = (x − μ) / σ. Ejemplo: (85 − 70) / 10 = 1.5.",
	tool_z_score_formula_item_2: "x = μ + z × σ. Ejemplo: 70 + 1.5 × 10 = 85.",
	tool_z_score_formula_item_3: "σ debe ser positiva; DE cero o negativa se rechaza.",
	tool_z_score_formula_item_4: "z = 0 cuando x coincide con la media; z negativa indica por debajo de la media.",
	tool_z_score_formula_item_5:
		"El álgebra no exige normalidad; los valores p de cola normal sí — usa la página de valor p relacionada.",

	tool_z_score_example_title: "Ejemplos resueltos",
	tool_z_score_example:
		"Cargar ejemplo empieza con x=85, media=70, DE=10 → z=1.5. El siguiente invierte z=1.5 a x=85. Luego x=media → z=0. El último usa x=55 → z=−1.5 (una DE y media por debajo de la media).",

	tool_z_score_usecases_title: "Cuándo usar una calculadora de puntuación z",
	tool_z_score_usecase_1: "Deberes: pasar una nota de examen a puntuación estándar con pasos visibles.",
	tool_z_score_usecase_2: "Comparar puntuaciones de distribuciones con medias o dispersiones distintas.",
	tool_z_score_usecase_3: "Recuperar la puntuación bruta cuando ya conoces z, media y DE.",
	tool_z_score_usecase_4: "Preparar un z para comprobar después un valor p de cola normal en otra página.",

	tool_z_score_faq_q1: "¿Qué significa z = 1.5?",
	tool_z_score_faq_a1: "La puntuación bruta está 1.5 desviaciones estándar por encima de la media indicada.",
	tool_z_score_faq_q2: "¿Puede ser cero la DE?",
	tool_z_score_faq_a2: "No. La división entre cero no está definida; introduce DE > 0.",
	tool_z_score_faq_q3: "¿Cómo se convierte una puntuación z otra vez en puntuación bruta?",
	tool_z_score_faq_a3: "Usa x = media + z × DE. Ejemplo: 70 + 1.5 × 10 = 85.",
	tool_z_score_faq_q4: "¿Esto asume una distribución normal?",
	tool_z_score_faq_a4:
		"El álgebra de z no exige normalidad, pero muchos usos posteriores (como valores p normales) sí.",
	tool_z_score_faq_q5: "¿Un |z| grande es siempre estadísticamente significativo?",
	tool_z_score_faq_a5:
		"No por sí solo. La significación necesita un modelo y un valor p o un valor crítico — no solo el número z.",
	tool_z_score_faq_q6: "¿Qué pasa si x es igual a la media?",
	tool_z_score_faq_a6: "Entonces z = 0. La puntuación queda exactamente en el centro de la distribución indicada.",
	tool_z_score_faq_q7: "¿Dónde obtengo un valor p a partir de z?",
	tool_z_score_faq_a7:
		"Usa la calculadora de valor p relacionada cuando ya tengas z. Esta página solo hace la transformación lineal de z.",

	tool_z_score_disclaimer:
		"Solo educativo: z = (x − media) / DE. No sustituye software estadístico, pruebas de normalidad ni el diseño de un estudio.",
	tool_z_score_references: "Wikipedia: puntuación estándar y desviación estándar (contexto educativo).",
	tool_z_score_ref_z_label: "Wikipedia — Puntuación estándar",
	tool_z_score_ref_sd_label: "Wikipedia — Desviación estándar",
};

export default es;
