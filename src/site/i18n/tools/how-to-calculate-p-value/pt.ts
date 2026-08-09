/**
 * i18n tool shard (how-to-calculate-p-value / pt).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_p_value_title: "Calculadora de valor-p — Como calcular um p-valor",
	tool_p_value_description: "Valor-p normal bicaudal a partir de um z com aproximação erfc. Exemplo: z = 1,96 → p ≈ 0,05. Deixa claros os pressupostos de normal padrão e duas caudas. No navegador, para estudo e checagens rápidas.",
	tool_p_value_calculate: "Calcular",
	tool_p_value_sample: "Carregar exemplo",
	tool_p_value_clear: "Limpar",
	tool_p_value_z_label: "Escore z",
	tool_p_value_z_ph: "ex.: 1.96",
	tool_p_value_pOut_label: "Valor-p bicaudal",
	tool_p_value_result_note: "Aproximação normal padrão bicaudal para estudo — não é um suite completo de testes.",
	tool_p_value_err_generic: "Informe um z finito.",
	tool_p_value_how_title: "Como funciona",
	tool_p_value_how_body: "Digite um z de um teste normal padrão. A ferramenta estima o valor-p bicaudal com aproximação erfc e deixa claros os pressupostos: modelo normal padrão e duas caudas. No navegador, para aula e checagens rápidas.",
	tool_p_value_formula_title: "Fórmula e pressupostos",
	tool_p_value_formula_body: "p bicaudal ≈ erfc(|z| / √2) sob normal padrão. Limites:",
	tool_p_value_formula_item_1: "Assume z normal padrão contínuo, não t, χ² nem teste exato discreto.",
	tool_p_value_formula_item_2: "Apenas bicaudal nesta página.",
	tool_p_value_formula_item_3: "Usa aproximação numérica erfc; para aprendizado, não software certificado.",
	tool_p_value_formula_item_4: "Um p pequeno não prova sozinho uma afirmação científica.",
	tool_p_value_example_title: "Exemplo",
	tool_p_value_example: "Exemplo: z = 1,96 → p bicaudal ≈ 0,05 (cerca de 0,049996 nesta aproximação).",
	tool_p_value_usecases_title: "Quando usar",
	tool_p_value_usecase_1: "Tarefa: converter um z conhecido em p bicaudal aproximado.",
	tool_p_value_usecase_2: "Conferir após obter z a partir de média e desvio.",
	tool_p_value_usecase_3: "Comparar a regra 1,96 ↔ 0,05 com um número.",
	tool_p_value_faq_q1: "Qual distribuição é assumida?",
	tool_p_value_faq_a1: "Normal padrão contínua. Não é calculadora t, χ² ou binomial exata.",
	tool_p_value_faq_q2: "Uni ou bicaudal?",
	tool_p_value_faq_a2: "Bicaudal: conta os dois lados além de ±|z|.",
	tool_p_value_faq_q3: "Por que z=1,96 ≈ 0,05?",
	tool_p_value_faq_a3: "Valor crítico habitual para 5% bicaudal; a erfc dá perto de 0,05.",
	tool_p_value_faq_q4: "p pequeno prova a alternativa?",
	tool_p_value_faq_a4: "Não. É probabilidade de cauda sob pressupostos, não prova automática.",
	tool_p_value_disclaimer: "Resultados educacionais sob modelo normal padrão bicaudal; não substituem software estatístico nem análise profissional.",
	tool_p_value_references: "Artigos da Wikipedia sobre valor-p e distribuição normal; função erro complementar.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Valor-p",
	tool_p_value_ref_normal_label: "Wikipedia — Distribuição normal",
	tool_p_value_article: "Calcule um valor-p normal bicaudal a partir de z com aproximação erfc e pressupostos explícitos.",
};

export default pt;
