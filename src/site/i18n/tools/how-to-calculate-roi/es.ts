/**
 * i18n tool shard (how-to-calculate-roi / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_roi_article:
    'El ROI simple expresa la ganancia neta frente al coste en porcentaje. Úsalo para recaps aproximados de campañas o proyectos; no calcula IRR/VAN multiperiodo.',
  tool_roi_calculate: 'Calcular',
  tool_roi_description:
    'Aprende cómo calcular el ROI (retorno de la inversión) con la fórmula (Ganancia − Coste) / Coste × 100% o (Final − Inicial) / Inicial × 100%. Proceso: introduce coste y valor final (o ganancia neta). Ejemplo: coste 1000, final 1300 → ROI 30%. Solo ilustración educativa, no es consejo de inversión.',
  tool_roi_disclaimer:
    'Los resultados de ROI son solo ilustraciones educativas y no constituyen consejo de inversión, fiscal ni financiero. Rentabilidades pasadas o hipotéticas no garantizan resultados futuros.',
  tool_roi_example: 'Ejemplo: coste 1000, valor final 1300 → ganancia 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_example_title: 'Ejemplo',
  tool_roi_faq_a1:
    'No. Los resultados son ilustraciones educativas y no constituyen consejo financiero, fiscal ni de inversión.',
  tool_roi_faq_a2:
    'ROI = (Final − Inicial) / Inicial × 100%, o Ganancia neta / Coste × 100% si introduces la ganancia. Positivo = ganancia; negativo = pérdida.',
  tool_roi_faq_a3: 'No estimamos impuestos ni comisiones: incorpóralos tú. El ROI simple tampoco anualiza el periodo.',
  tool_roi_faq_a4: 'El ROI no está definido (división por cero). Introduce un coste positivo.',
  tool_roi_faq_q1: '¿Es esto un consejo de inversión?',
  tool_roi_faq_q2: '¿Qué fórmula usa la calculadora?',
  tool_roi_faq_q3: '¿Y los impuestos, comisiones y el tiempo?',
  tool_roi_faq_q4: '¿Qué pasa si el coste es cero?',
  tool_roi_final_label: 'Valor final',
  tool_roi_final_placeholder: 'p. ej. 1300',
  tool_roi_formula_body:
    'ROI = (Valor final − Inversión inicial) / Inversión inicial × 100%, o Ganancia neta / Coste × 100%. Ten en cuenta:',
  tool_roi_formula_item_1: 'Impuestos: no se estiman; introduce cifras después de impuestos si ese es tu criterio.',
  tool_roi_formula_item_2: 'Tiempo: el ROI simple ignora el periodo de tenencia; no es rentabilidad anualizada.',
  tool_roi_formula_item_3: 'Comisiones: inclúyelas tú en el coste o en el valor final.',
  tool_roi_formula_item_4: 'Flujos multiperiodo e IRR/VAN quedan fuera de este porcentaje de un solo periodo.',
  tool_roi_formula_title: 'Fórmula y supuestos',
  tool_roi_gain_label: 'Ganancia neta (opcional)',
  tool_roi_gain_placeholder: 'Si la conoces, sustituye final − inicial',
  tool_roi_how_body:
    'Introduce el coste y el valor final o una ganancia neta conocida. ROI = neto / coste × 100%. Si dejas la ganancia en blanco, neto = final − inicial. Coste cero no está permitido.',
  tool_roi_how_title: 'Cómo funciona',
  tool_roi_initial_label: 'Inversión inicial (coste)',
  tool_roi_initial_placeholder: 'p. ej. 1000',
  tool_roi_interpret_negative: 'ROI negativo (pérdida respecto al coste) — solo ilustración educativa.',
  tool_roi_interpret_positive: 'ROI positivo (ganancia respecto al coste) — solo ilustración educativa.',
  tool_roi_interpret_zero: 'ROI cero — sin ganancia ni pérdida con estos datos.',
  tool_roi_ref_guide_label: 'Investopedia — Guía para calcular el ROI',
  tool_roi_ref_investopedia_label: 'Investopedia — Retorno de la inversión (ROI)',
  tool_roi_references: 'Definiciones y guías de Investopedia sobre ROI; ROI simple = ganancia neta / coste.',
  tool_roi_result_label: 'ROI',
  tool_roi_title: 'Cómo calcular el ROI — Calculadora con fórmula y ejemplo',
  tool_roi_usecase_1: 'Marketing: ROI aproximado de una campaña cuando ya conoces gasto e ingresos atribuidos.',
  tool_roi_usecase_2: 'Clase: practicar el porcentaje básico de ROI con números fijos.',
  tool_roi_usecase_3: 'Cierre de proyecto: resumir una iniciativa como un par coste/ganancia (solo estimación).',
  tool_roi_usecases_title: 'Para qué sirve',
  tool_roi_zero_cost: 'La inversión inicial debe ser mayor que cero.',
};
export default es;
