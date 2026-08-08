/**
 * i18n tool shard (how-to-calculate-percentage-change / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_percentage_change_abs_note: 'Cambio absoluto: {delta}',
  tool_percentage_change_article:
    'El cambio porcentual relativo responde «¿cuánto se movió la métrica frente a su base?». Introduce el valor antiguo y el nuevo; usamos (nuevo − antiguo) / antiguo × 100. Sirve para KPIs, no sustituye al ROI.',
  tool_percentage_change_calculate: 'Calcular',
  tool_percentage_change_decrease: 'disminución',
  tool_percentage_change_description:
    'Calcula el aumento o la bajada porcentual entre un valor antiguo y uno nuevo. Proceso: introduce ambos, aplica (nuevo − antiguo) / antiguo × 100 y lee el signo. Ejemplo: 80 → 100 = +25%. Pensado para ingresos MoM, DAU y precios — no son puntos porcentuales.',
  tool_percentage_change_example:
    'Ejemplo completo: antiguo 80, nuevo 100 → Δ = 20 → (20 / 80) × 100 = 25% de aumento. Bajada: 100 → 80 = −20%.',
  tool_percentage_change_example_title: 'Ejemplo',
  tool_percentage_change_faq_a1: 'Cambio % = (nuevo − antiguo) / antiguo × 100. Positivo = aumento; negativo = bajada.',
  tool_percentage_change_faq_a2: 'Dividir entre cero no está definido. Sin base no hay cambio porcentual relativo.',
  tool_percentage_change_faq_a3: 'No. De 10% a 12% son 2 puntos porcentuales, pero un aumento relativo del 20%.',
  tool_percentage_change_faq_a4:
    'El ROI compara ganancia con coste de inversión. El cambio porcentual compara cualquier valor nuevo con una base antigua.',
  tool_percentage_change_faq_q1: '¿Cuál es la fórmula del cambio porcentual?',
  tool_percentage_change_faq_q2: '¿Por qué el valor anterior no puede ser cero?',
  tool_percentage_change_faq_q3: '¿Es lo mismo que puntos porcentuales?',
  tool_percentage_change_faq_q4: '¿En qué se diferencia del ROI?',
  tool_percentage_change_formula_body:
    'Cambio % = (nuevo − antiguo) / antiguo × 100. Usamos el antiguo con signo en el denominador (no |antiguo|).',
  tool_percentage_change_formula_item_1: 'Δ = nuevo − antiguo',
  tool_percentage_change_formula_item_2: 'porcentaje = (Δ / antiguo) × 100',
  tool_percentage_change_formula_item_3: 'antiguo = 0 → indefinido (error)',
  tool_percentage_change_formula_title: 'Fórmula del cambio porcentual',
  tool_percentage_change_how_body:
    'Introduce la base (valor anterior) y el valor posterior. Restamos, dividimos por el antiguo y multiplicamos por 100. Positivo = sube; negativo = baja. Si antiguo = 0, el cambio relativo no está definido.',
  tool_percentage_change_how_title: 'Cómo funciona',
  tool_percentage_change_increase: 'aumento',
  tool_percentage_change_new_label: 'Valor nuevo',
  tool_percentage_change_no_change: 'sin cambio',
  tool_percentage_change_original_label: 'Valor anterior',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_result_invalid: 'El valor anterior debe ser un número distinto de cero.',
  tool_percentage_change_result_label: 'Cambio porcentual',
  tool_percentage_change_title: 'Calculadora de cambio porcentual — De valor antiguo a nuevo',
  tool_percentage_change_usecase_1: 'Ingresos mes a mes: GMV 80 el mes pasado frente a 100 este mes → +25%.',
  tool_percentage_change_usecase_2: 'Analítica de producto: DAU de 50k a 55k → +10% relativo.',
  tool_percentage_change_usecase_3: 'Precios: de 40 a 34 → −15% (no «6 puntos porcentuales»).',
  tool_percentage_change_usecases_title: 'Usos de negocio y datos',
};
export default es;
