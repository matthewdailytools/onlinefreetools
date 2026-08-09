/**
 * i18n tool shard (how-to-calculate-exponent / es).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_exponent_title: "Calculadora de exponentes — Cómo calcular potencias",
	tool_exponent_description: "Calcula potencias a^b con el ejemplo 2^10=1024. Advierte Infinity por magnitudes enormes y NaN en algunas bases negativas con exponentes no enteros. En el navegador, con logs y notación científica.",
	tool_exponent_calculate: "Calcular",
	tool_exponent_sample: "Cargar ejemplo",
	tool_exponent_clear: "Limpiar",
	tool_exponent_base_label: "Base a",
	tool_exponent_base_ph: "p. ej. 2",
	tool_exponent_exp_label: "Exponente b",
	tool_exponent_exp_ph: "p. ej. 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "Calcula a^b con Math.pow para aprender. |b| muy grande puede dar Infinity.",
	tool_exponent_err_generic: "Introduce base y exponente finitos.",
	tool_exponent_how_title: "Cómo funciona",
	tool_exponent_how_body: "Introduce a y b. Devuelve a^b. Bases negativas con exponentes no enteros pueden ser NaN en reales y se tratan como error.",
	tool_exponent_formula_title: "Fórmula",
	tool_exponent_formula_body: "Potenciación a^b:",
	tool_exponent_formula_item_1: "Si b es entero no negativo, a^b es a multiplicado b veces.",
	tool_exponent_formula_item_2: "Exponentes fraccionarios/negativos siguen Math.pow real.",
	tool_exponent_formula_item_3: "0^0 se toma como 1 (convención de programación) — hay debate.",
	tool_exponent_formula_item_4: "Combínalo con la página de logs para comprobar log_a(a^b)=b.",
	tool_exponent_example_title: "Ejemplo",
	tool_exponent_example: "Ejemplo: 2^10 = 1024.",
	tool_exponent_usecases_title: "Cuándo usarlo",
	tool_exponent_usecase_1: "Deberes: potencias simples como 2^10.",
	tool_exponent_usecase_2: "Comprobar factores de notación científica.",
	tool_exponent_usecase_3: "Cruzar con logaritmos inversos.",
	tool_exponent_disclaimer: "Solo potencias reales educativas; no es un CAS.",
	tool_exponent_references: "Wikipedia potenciación.",
	tool_exponent_ref_exp_label: "Wikipedia — Potenciación",
	tool_exponent_ref_pow_label: "Wikipedia — Exponente",
	tool_exponent_article: "Calcula potencias a^b en el navegador con notas de dominio.",
	tool_exponent_faq_q1: "¿0^0 aquí?",
	tool_exponent_faq_a1: "Se toma 1 (convención JS); en matemáticas se debate.",
	tool_exponent_faq_q2: "¿Puede salir Infinity?",
	tool_exponent_faq_a2: "Sí con magnitudes enormes; no es precisión arbitraria.",
	tool_exponent_faq_q3: "¿Bases negativas?",
	tool_exponent_faq_a3: "Potencias reales no enteras suelen ser NaN en JS.",
	tool_exponent_faq_q4: "¿Comprobar con logs?",
	tool_exponent_faq_a4: "Si está definido, log_a(a^b) ≈ b.",
};

export default es;
