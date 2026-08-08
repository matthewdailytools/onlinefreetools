/**
 * i18n tool shard (how-to-calculate-marginal-revenue / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_marginal_revenue_article:
    'El ingreso marginal es el cambio del ingreso total al cambiar la cantidad. Esta calculadora muestra la derivación discreta entre dos puntos para deberes y comprobaciones rápidas.',
  tool_marginal_revenue_calculate: 'Calcular MR',
  tool_marginal_revenue_description:
    'Calcula el ingreso marginal con MR = ΔIT / ΔQ. Proceso: introduce cantidad e ingreso total en dos puntos, resta para obtener ΔIT y ΔQ, y divide. Ejemplo: Q 10→11, IT 1000→1080 → MR = 80. Solo uso educativo — no es consejo de precios.',
  tool_marginal_revenue_detail_tpl: 'ΔIT = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer:
    'Esta calculadora sirve para aprender conceptos de microeconomía. No es consejo empresarial, de precios ni de inversión.',
  tool_marginal_revenue_example: 'Ejemplo: Q₁ = 10, IT₁ = 1000; Q₂ = 11, IT₂ = 1080 → ΔIT = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_example_title: 'Ejemplo',
  tool_marginal_revenue_faq_a1:
    'No. Esta herramienta no da consejos de precios ni de producción; también hacen falta el coste marginal y otras restricciones.',
  tool_marginal_revenue_faq_a2:
    'MR = ΔIT / ΔQ con ΔIT = IT₂ − IT₁ y ΔQ = Q₂ − Q₁. Es una derivación discreta, no una derivada continua.',
  tool_marginal_revenue_faq_a3: 'El MR no está definido si la cantidad no cambia. Elige dos cantidades distintas.',
  tool_marginal_revenue_faq_a4:
    'El ingreso medio es IT / Q en un nivel de producción. El marginal es el cambio de IT al cambiar Q; solo coinciden en casos especiales (p. ej. precio constante).',
  tool_marginal_revenue_faq_q1: '¿Un MR positivo implica subir la producción?',
  tool_marginal_revenue_faq_q2: '¿Cómo se deriva el ingreso marginal aquí?',
  tool_marginal_revenue_faq_q3: '¿Qué ocurre si ΔQ es cero?',
  tool_marginal_revenue_faq_q4: '¿En qué se diferencia del ingreso medio?',
  tool_marginal_revenue_formula_body:
    'Por definición, el ingreso marginal mide cómo cambia el ingreso total cuando cambia la cantidad. Con dos puntos observados:',
  tool_marginal_revenue_formula_item_1: 'ΔIT = IT₂ − IT₁ (cambio del ingreso total)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (cambio de cantidad)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔIT / ΔQ si ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Un paso discreto aproxima el MR medio del intervalo; los modelos continuos usan dIT/dQ. Un MR negativo indica que el ingreso bajó al subir la cantidad.',
  tool_marginal_revenue_formula_title: 'Derivación de la fórmula',
  tool_marginal_revenue_how_body:
    'Introduce cantidad e ingreso total del tramo 1 y del tramo 2. Se calcula ΔIT = IT2 − IT1, ΔQ = Q2 − Q1 y MR = ΔIT / ΔQ. Todo ocurre en el navegador.',
  tool_marginal_revenue_how_title: 'Cómo funciona',
  tool_marginal_revenue_q1_label: 'Cantidad (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'p. ej. 10',
  tool_marginal_revenue_q2_label: 'Cantidad (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'p. ej. 11',
  tool_marginal_revenue_quantity_label: 'Cantidad',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Ingreso marginal (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principios de microeconomía (competencia)',
  tool_marginal_revenue_references:
    'Entrada de Investopedia sobre ingreso marginal; tratamiento introductorio de MR = ΔIT/ΔQ (p. ej. OpenStax).',
  tool_marginal_revenue_result_label: 'Ingreso marginal',
  tool_marginal_revenue_revenue_label: 'Ingreso total',
  tool_marginal_revenue_title: 'Calculadora de ingreso marginal — Fórmula ΔIT / ΔQ',
  tool_marginal_revenue_tr1_label: 'Ingreso total (IT₁)',
  tool_marginal_revenue_tr1_placeholder: 'p. ej. 1000',
  tool_marginal_revenue_tr2_label: 'Ingreso total (IT₂)',
  tool_marginal_revenue_tr2_placeholder: 'p. ej. 1080',
  tool_marginal_revenue_usecase_1: 'Deberes: comprobar una tabla de cantidad/ingreso de dos niveles.',
  tool_marginal_revenue_usecase_2: 'Estimación rápida: cuánto cambia el ingreso al subir una unidad de producción.',
  tool_marginal_revenue_usecase_3: 'Contrastar ingreso marginal e ingreso medio en microeconomía introductoria.',
  tool_marginal_revenue_usecases_title: 'Para qué sirve',
  tool_marginal_revenue_zero_dq: 'ΔQ es 0 — la cantidad debe cambiar entre los dos puntos.',
};
export default es;
