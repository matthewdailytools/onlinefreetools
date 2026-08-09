/**
 * i18n tool shard (how-to-calculate-exponent / pt).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_exponent_title: "Calculadora de expoentes — Como calcular potências",
	tool_exponent_description: "Calcule potências a^b com o exemplo 2^10=1024. Avisa Infinity para magnitudes enormes e NaN em algumas bases negativas com expoentes não inteiros. No navegador, com logs e notação científica.",
	tool_exponent_calculate: "Calcular",
	tool_exponent_sample: "Carregar exemplo",
	tool_exponent_clear: "Limpar",
	tool_exponent_base_label: "Base a",
	tool_exponent_base_ph: "ex.: 2",
	tool_exponent_exp_label: "Expoente b",
	tool_exponent_exp_ph: "ex.: 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "Calcula a^b com Math.pow para estudar. |b| muito grande pode virar Infinity.",
	tool_exponent_err_generic: "Informe base e expoente finitos.",
	tool_exponent_how_title: "Como funciona",
	tool_exponent_how_body: "Digite a e b. Devolve a^b. Bases negativas com expoentes não inteiros podem ser NaN e viram erro.",
	tool_exponent_formula_title: "Fórmula",
	tool_exponent_formula_body: "Exponenciação a^b:",
	tool_exponent_formula_item_1: "Se b é inteiro não negativo, a^b é a multiplicado b vezes.",
	tool_exponent_formula_item_2: "Expoentes fracionários/negativos seguem Math.pow real.",
	tool_exponent_formula_item_3: "0^0 é 1 aqui (convenção de programação) — há debate.",
	tool_exponent_formula_item_4: "Combine com a página de logs para checar log_a(a^b)=b.",
	tool_exponent_example_title: "Exemplo",
	tool_exponent_example: "Exemplo: 2^10 = 1024.",
	tool_exponent_usecases_title: "Quando usar",
	tool_exponent_usecase_1: "Tarefa: potências simples como 2^10.",
	tool_exponent_usecase_2: "Checar fatores de notação científica.",
	tool_exponent_usecase_3: "Conferir logs com potências inversas.",
	tool_exponent_disclaimer: "Apenas potências reais educativas; não é um CAS.",
	tool_exponent_references: "Wikipedia exponenciação.",
	tool_exponent_ref_exp_label: "Wikipedia — Exponenciação",
	tool_exponent_ref_pow_label: "Wikipedia — Expoente",
	tool_exponent_article: "Calcule potências a^b no navegador com notas de domínio.",
	tool_exponent_faq_q1: "0^0 nesta página?",
	tool_exponent_faq_a1: "Tratado como 1 (convenção JS); há debate matemático.",
	tool_exponent_faq_q2: "Bases negativas?",
	tool_exponent_faq_a2: "Potências reais não inteiras costumam ser NaN em JS.",
	tool_exponent_faq_q3: "Pode dar Infinity?",
	tool_exponent_faq_a3: "Sim para magnitudes enormes.",
	tool_exponent_faq_q4: "Checar com logs?",
	tool_exponent_faq_a4: "Quando definido, log_a(a^b)≈b.",
};

export default pt;
