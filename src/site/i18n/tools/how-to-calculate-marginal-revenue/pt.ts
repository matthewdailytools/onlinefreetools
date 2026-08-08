/**
 * i18n tool shard (how-to-calculate-marginal-revenue / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_marginal_revenue_article:
    'Receita marginal é a variação da receita total quando a quantidade muda. Esta calculadora mostra a derivação discreta entre dois pontos.',
  tool_marginal_revenue_calculate: 'Calcular MR',
  tool_marginal_revenue_description:
    'Calcule a receita marginal com MR = ΔRT / ΔQ. Processo: informe quantidade e receita total em dois pontos, obtenha ΔRT e ΔQ e divida. Exemplo: Q 10→11, RT 1000→1080 → MR = 80. Apenas educativo — não é conselho de preços.',
  tool_marginal_revenue_detail_tpl: 'ΔRT = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer:
    'Esta calculadora é para aprender conceitos de microeconomia. Não é conselho empresarial, de preços ou de investimento.',
  tool_marginal_revenue_example: 'Exemplo: Q₁ = 10, RT₁ = 1000; Q₂ = 11, RT₂ = 1080 → ΔRT = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_example_title: 'Exemplo',
  tool_marginal_revenue_faq_a1: 'MR = ΔRT / ΔQ com ΔRT = RT₂ − RT₁ e ΔQ = Q₂ − Q₁. É derivação discreta, não derivada contínua.',
  tool_marginal_revenue_faq_a2: 'MR é indefinido se a quantidade não muda. Escolha dois pontos diferentes.',
  tool_marginal_revenue_faq_a3:
    'Receita média é RT / Q em um nível. Marginal é a variação de RT quando Q muda; coincidem só em casos especiais.',
  tool_marginal_revenue_faq_a4: 'Não. Esta ferramenta não dá conselho de preço ou produção; também importa o custo marginal.',
  tool_marginal_revenue_faq_q1: 'Como a receita marginal é derivada aqui?',
  tool_marginal_revenue_faq_q2: 'O que acontece se ΔQ for zero?',
  tool_marginal_revenue_faq_q3: 'Qual a diferença para a receita média?',
  tool_marginal_revenue_faq_q4: 'MR positivo significa aumentar a produção?',
  tool_marginal_revenue_formula_body: 'Por definição, a receita marginal mede como a receita total muda com a quantidade. Com dois pontos:',
  tool_marginal_revenue_formula_item_1: 'ΔRT = RT₂ − RT₁ (variação da receita total)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (variação da quantidade)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔRT / ΔQ quando ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Um passo discreto aproxima o MR médio do intervalo; modelos contínuos usam dRT/dQ. MR negativo indica receita caindo com mais quantidade.',
  tool_marginal_revenue_formula_title: 'Derivação da fórmula',
  tool_marginal_revenue_how_body:
    'Informe quantidade e receita total do nível 1 e do nível 2. Calculamos ΔRT = RT2 − RT1, ΔQ = Q2 − Q1 e MR = ΔRT / ΔQ no navegador.',
  tool_marginal_revenue_how_title: 'Como funciona',
  tool_marginal_revenue_q1_label: 'Quantidade (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'ex.: 10',
  tool_marginal_revenue_q2_label: 'Quantidade (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'ex.: 11',
  tool_marginal_revenue_quantity_label: 'Quantidade',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Receita marginal (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Princípios de microeconomia (concorrência)',
  tool_marginal_revenue_references:
    'Entrada da Investopedia sobre receita marginal; tratamento introdutório de MR = ΔRT/ΔQ (ex.: OpenStax).',
  tool_marginal_revenue_result_label: 'Receita marginal',
  tool_marginal_revenue_revenue_label: 'Receita total',
  tool_marginal_revenue_title: 'Calculadora de receita marginal — Fórmula ΔRT / ΔQ',
  tool_marginal_revenue_tr1_label: 'Receita total (RT₁)',
  tool_marginal_revenue_tr1_placeholder: 'ex.: 1000',
  tool_marginal_revenue_tr2_label: 'Receita total (RT₂)',
  tool_marginal_revenue_tr2_placeholder: 'ex.: 1080',
  tool_marginal_revenue_usecase_1: 'Trabalho escolar: conferir tabela de quantidade/receita em dois níveis.',
  tool_marginal_revenue_usecase_2: 'Estimativa rápida: quanto a receita muda ao subir uma unidade.',
  tool_marginal_revenue_usecase_3: 'Comparar receita marginal e receita média em microeconomia introdutória.',
  tool_marginal_revenue_usecases_title: 'Quando usar',
  tool_marginal_revenue_zero_dq: 'ΔQ é 0 — a quantidade precisa mudar entre os dois pontos.',
};
export default pt;
