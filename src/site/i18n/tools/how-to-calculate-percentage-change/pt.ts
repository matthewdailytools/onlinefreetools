/**
 * i18n tool shard (how-to-calculate-percentage-change / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_percentage_change_abs_note: 'Variação absoluta: {delta}',
  tool_percentage_change_article:
    'A variação percentual relativa responde quanto a métrica se moveu frente à base. Informe o valor antigo e o novo; usamos (novo − antigo) / antigo × 100. Serve para KPIs, não substitui ROI.',
  tool_percentage_change_calculate: 'Calcular',
  tool_percentage_change_decrease: 'diminuição',
  tool_percentage_change_description:
    'Calcule o aumento ou a queda percentual de um valor antigo para um novo. Processo: informe ambos, aplique (novo − antigo) / antigo × 100 e leia o sinal. Exemplo: 80 → 100 = +25%. Feito para receita MoM, DAU e preços — não são pontos percentuais.',
  tool_percentage_change_example:
    'Exemplo completo: antigo 80, novo 100 → Δ = 20 → (20 / 80) × 100 = 25% de aumento. Queda: 100 → 80 = −20%.',
  tool_percentage_change_example_title: 'Exemplo',
  tool_percentage_change_faq_a1: 'Variação % = (novo − antigo) / antigo × 100. Positivo = aumento; negativo = queda.',
  tool_percentage_change_faq_a2: 'Divisão por zero é indefinida. Sem base não há variação relativa.',
  tool_percentage_change_faq_a3: 'Não. De 10% para 12% são 2 pontos percentuais, mas aumento relativo de 20%.',
  tool_percentage_change_faq_a4:
    'ROI compara ganho com custo do investimento. Variação percentual compara qualquer valor novo a uma base antiga.',
  tool_percentage_change_faq_q1: 'Qual é a fórmula da variação percentual?',
  tool_percentage_change_faq_q2: 'Por que o valor antigo não pode ser zero?',
  tool_percentage_change_faq_q3: 'É a mesma coisa que pontos percentuais?',
  tool_percentage_change_faq_q4: 'Qual a diferença para o ROI?',
  tool_percentage_change_formula_body:
    'Variação % = (novo − antigo) / antigo × 100. Usamos o antigo com sinal no denominador (não |antigo|).',
  tool_percentage_change_formula_item_1: 'Δ = novo − antigo',
  tool_percentage_change_formula_item_2: 'percentual = (Δ / antigo) × 100',
  tool_percentage_change_formula_item_3: 'antigo = 0 → indefinido (erro)',
  tool_percentage_change_formula_title: 'Fórmula da variação percentual',
  tool_percentage_change_how_body:
    'Informe a base (antigo) e o valor posterior. Subtraímos, dividimos pelo antigo e multiplicamos por 100. Positivo sobe; negativo cai. Se antigo = 0, a variação relativa é indefinida.',
  tool_percentage_change_how_title: 'Como funciona',
  tool_percentage_change_increase: 'aumento',
  tool_percentage_change_new_label: 'Valor novo',
  tool_percentage_change_no_change: 'sem alteração',
  tool_percentage_change_original_label: 'Valor antigo',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_result_invalid: 'O valor antigo deve ser um número diferente de zero.',
  tool_percentage_change_result_label: 'Variação percentual',
  tool_percentage_change_title: 'Calculadora de variação percentual — Do valor antigo ao novo',
  tool_percentage_change_usecase_1: 'Receita mês a mês: GMV 80 no mês passado vs 100 neste → +25%.',
  tool_percentage_change_usecase_2: 'Produto: DAU de 50k para 55k → +10% relativo.',
  tool_percentage_change_usecase_3: 'Preço: de 40 para 34 → −15% (não “6 pontos percentuais”).',
  tool_percentage_change_usecases_title: 'Usos de negócio e dados',
};
export default pt;
