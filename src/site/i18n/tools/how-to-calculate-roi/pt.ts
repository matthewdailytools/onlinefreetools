/**
 * i18n tool shard (how-to-calculate-roi / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_roi_article:
    'O ROI simples compara o ganho líquido ao custo em percentual. Use para recaps aproximados de campanhas ou projetos; não calcula IRR/VPL multiperíodo.',
  tool_roi_calculate: 'Calcular',
  tool_roi_description:
    'Aprenda como calcular o ROI (retorno sobre investimento) com (Retorno − Custo) / Custo × 100% ou (Valor final − Inicial) / Inicial × 100%. Processo: informe custo e valor final (ou ganho líquido). Exemplo: custo 1000, final 1300 → ROI 30%. Apenas ilustração educativa — não é conselho de investimento.',
  tool_roi_disclaimer:
    'Os resultados de ROI são apenas ilustrações educativas e não constituem conselho de investimento, fiscal ou financeiro. Retornos passados ou hipotéticos não garantem resultados futuros.',
  tool_roi_example: 'Exemplo: custo 1000, valor final 1300 → ganho 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_example_title: 'Exemplo',
  tool_roi_faq_a1: 'ROI é indefinido (divisão por zero). Informe um custo positivo.',
  tool_roi_faq_a2: 'ROI = (Final − Inicial) / Inicial × 100%, ou Ganho líquido / Custo × 100% se informar o ganho.',
  tool_roi_faq_a3:
    'Não estimamos impostos nem taxas — incorpore você mesmo. O ROI simples também não anualiza o período.',
  tool_roi_faq_a4: 'Não. Os resultados são apenas ilustrações educativas.',
  tool_roi_faq_q1: 'E se o investimento inicial for zero?',
  tool_roi_faq_q2: 'Qual fórmula a ferramenta usa?',
  tool_roi_faq_q3: 'Como ficam impostos, taxas e tempo?',
  tool_roi_faq_q4: 'Isto é conselho de investimento?',
  tool_roi_final_label: 'Valor final',
  tool_roi_final_placeholder: 'ex.: 1300',
  tool_roi_formula_body:
    'ROI = (Valor final − Investimento inicial) / Investimento inicial × 100%, ou Ganho líquido / Custo × 100%. Lembre-se:',
  tool_roi_formula_item_1: 'Impostos: não estimamos — use valores após impostos se for o seu critério.',
  tool_roi_formula_item_2: 'Tempo: o ROI simples ignora o período de retenção; não é retorno anualizado.',
  tool_roi_formula_item_3: 'Taxas: inclua comissões e tarifas no custo ou no valor final.',
  tool_roi_formula_item_4: 'Fluxos multiperíodo e IRR/VPL ficam fora deste percentual de um período.',
  tool_roi_formula_title: 'Fórmula e hipóteses',
  tool_roi_gain_label: 'Ganho líquido (opcional)',
  tool_roi_gain_placeholder: 'Se conhecido, substitui final − inicial',
  tool_roi_how_body:
    'Informe o custo e o valor final ou um ganho líquido conhecido. ROI = líquido / custo × 100%. Sem ganho preenchido, líquido = final − inicial. Custo zero é rejeitado.',
  tool_roi_how_title: 'Como funciona',
  tool_roi_initial_label: 'Investimento inicial (custo)',
  tool_roi_initial_placeholder: 'ex.: 1000',
  tool_roi_interpret_negative: 'ROI negativo (perda em relação ao custo) — só ilustração educativa.',
  tool_roi_interpret_positive: 'ROI positivo (ganho em relação ao custo) — só ilustração educativa.',
  tool_roi_interpret_zero: 'ROI zero — sem ganho nem perda nestes dados.',
  tool_roi_ref_guide_label: 'Investopedia — Guia para calcular ROI',
  tool_roi_ref_investopedia_label: 'Investopedia — Retorno sobre investimento (ROI)',
  tool_roi_references: 'Definições e guias da Investopedia sobre ROI; ROI simples = ganho líquido / custo.',
  tool_roi_result_label: 'ROI',
  tool_roi_title: 'Como calcular o ROI — Calculadora com fórmula e exemplo',
  tool_roi_usecase_1: 'Marketing: ROI aproximado de campanha com gasto e receita já conhecidos.',
  tool_roi_usecase_2: 'Estudos: praticar o percentual básico de ROI com números fixos.',
  tool_roi_usecase_3: 'Revisão de projeto: resumir uma iniciativa como par custo/ganho (só estimativa).',
  tool_roi_usecases_title: 'Quando usar',
  tool_roi_zero_cost: 'O investimento inicial deve ser maior que zero.',
};
export default pt;
