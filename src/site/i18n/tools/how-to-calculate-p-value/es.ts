/**
 * i18n tool shard (how-to-calculate-p-value / es).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_p_value_title: "Calculadora de valor p — Cómo calcular un p-valor",
	tool_p_value_description: "Valor p normal a dos colas desde un z con aproximación erfc. Ejemplo: z = 1,96 → p ≈ 0,05. Deja claros los supuestos de normal estándar y dos colas. En el navegador, para clase y comprobaciones rápidas de aprendizaje.",
	tool_p_value_calculate: "Calcular",
	tool_p_value_sample: "Cargar ejemplo",
	tool_p_value_clear: "Limpiar",
	tool_p_value_z_label: "Puntuación z",
	tool_p_value_z_ph: "p. ej. 1.96",
	tool_p_value_pOut_label: "Valor p bilaterial",
	tool_p_value_result_note: "Aproximación normal estándar a dos colas para aprender — no es un paquete completo de contraste.",
	tool_p_value_err_generic: "Introduce un valor z finito.",
	tool_p_value_how_title: "Cómo funciona",
	tool_p_value_how_body: "Introduce un z de un contraste normal estándar. La herramienta estima el valor p a dos colas con una aproximación erfc. Deja claras las hipótesis: modelo normal estándar y ambas colas. En el navegador, para clase y comprobaciones rápidas.",
	tool_p_value_formula_title: "Fórmula y supuestos",
	tool_p_value_formula_body: "p a dos colas ≈ erfc(|z| / √2) bajo normal estándar. Límites:",
	tool_p_value_formula_item_1: "Asume z normal estándar continuo, no t, χ² ni prueba exacta discreta.",
	tool_p_value_formula_item_2: "Solo dos colas en esta página.",
	tool_p_value_formula_item_3: "Usa una aproximación numérica erfc; para aprendizaje, no software certificado.",
	tool_p_value_formula_item_4: "Un p pequeño no prueba por sí solo una afirmación científica.",
	tool_p_value_example_title: "Ejemplo",
	tool_p_value_example: "Ejemplo: z = 1,96 → p a dos colas ≈ 0,05 (cerca de 0,049996 con esta aproximación).",
	tool_p_value_usecases_title: "Cuándo usarlo",
	tool_p_value_usecase_1: "Deberes: pasar de un z conocido a un p aproximado a dos colas.",
	tool_p_value_usecase_2: "Comprobar tras calcular z a partir de media y desviación.",
	tool_p_value_usecase_3: "Contrastar la regla 1,96 ↔ 0,05 con un número concreto.",
	tool_p_value_faq_q1: "¿Qué distribución se asume?",
	tool_p_value_faq_a1: "Normal estándar continua. No es una calculadora t, χ² o binomial exacta.",
	tool_p_value_faq_q2: "¿Una o dos colas?",
	tool_p_value_faq_a2: "Dos colas: cuenta ambos lados más allá de ±|z|.",
	tool_p_value_faq_q3: "¿Por qué z=1,96 ≈ 0,05?",
	tool_p_value_faq_a3: "Es el valor crítico habitual al 5% a dos colas; la aproximación erfc da cerca de 0,05.",
	tool_p_value_faq_q4: "¿Un p pequeño demuestra la alternativa?",
	tool_p_value_faq_a4: "No. Es una probabilidad de cola bajo supuestos, no una prueba automática.",
	tool_p_value_disclaimer: "Resultados educativos bajo un modelo normal estándar a dos colas; no sustituyen software estadístico ni análisis profesional.",
	tool_p_value_references: "Artículos de Wikipedia sobre valor p y distribución normal; función de error complementaria.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Valor p",
	tool_p_value_ref_normal_label: "Wikipedia — Distribución normal",
	tool_p_value_article: "Calcula un valor p normal a dos colas desde un z con aproximación erfc, dejando claros los supuestos.",
};

export default es;
