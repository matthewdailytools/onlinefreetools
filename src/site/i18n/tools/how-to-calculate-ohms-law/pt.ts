/**
 * i18n 工具分片（how-to-calculate-ohms-law / pt）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。
 * 仅教学算术：浏览器内理想直流公式，非布线或电气安全建议。
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语文案字典：键名与 en.ts 完全一致，占位符保留 {v}{i}{r}{p}。 */
const pt: SiteLangDict = {
	tool_ohms_law_title: "Calculadora da lei de Ohm — Resolva V, I ou R e a potência",
	tool_ohms_law_description: "Aplique a lei de Ohm para achar tensão, corrente ou resistência e veja a potência P=VI. Exemplo: V=12, I=2 → R=6 Ω e P=24 W. Só formas CC ideais — matemática educativa no navegador, não é orientação de fiação nem de segurança elétrica.",
	tool_ohms_law_article: "Escolha o que resolver, digite as outras duas grandezas e obtenha a incógnita mais a potência com as etapas.",
	tool_ohms_law_desc: "Lei de Ohm V=IR com modos para V, I ou R, mais potência. Só uso educativo em CC ideal.",

	tool_ohms_law_safety_banner: "Somente educacional. Aritmética CC ideal da lei de Ohm — não são instruções de fiação, ratings de produtos nem conselhos de segurança elétrica.",
	tool_ohms_law_hint: "Escolha o modo de resolução e digite as duas grandezas conhecidas. A corrente não pode ser zero ao resolver R. A resistência deve ser maior que zero ao resolver I ou V a partir de R.",
	tool_ohms_law_mode_label: "Resolver para",
	tool_ohms_law_mode_r: "Resistência R (a partir de V e I)",
	tool_ohms_law_mode_v: "Tensão V (a partir de I e R)",
	tool_ohms_law_mode_i: "Corrente I (a partir de V e R)",
	tool_ohms_law_V_label: "Tensão V (volts)",
	tool_ohms_law_V_ph: "ex.: 12",
	tool_ohms_law_I_label: "Corrente I (ampères)",
	tool_ohms_law_I_ph: "ex.: 2",
	tool_ohms_law_R_label: "Resistência R (ohms)",
	tool_ohms_law_R_ph: "ex.: 6",
	tool_ohms_law_calculate: "Calcular",
	tool_ohms_law_sample: "Carregar exemplo",
	tool_ohms_law_clear: "Limpar",
	tool_ohms_law_primary_label: "Resultado",
	tool_ohms_law_rOut_label: "Resistência R",
	tool_ohms_law_vOut_label: "Tensão V",
	tool_ohms_law_iOut_label: "Corrente I",
	tool_ohms_law_pOut_label: "Potência P",
	tool_ohms_law_steps_title: "Passos",
	tool_ohms_law_step_r_tpl: "R = V ÷ I = {v} ÷ {i} = {r} Ω.",
	tool_ohms_law_step_v_tpl: "V = I × R = {i} × {r} = {v} V.",
	tool_ohms_law_step_i_tpl: "I = V ÷ R = {v} ÷ {r} = {i} A.",
	tool_ohms_law_step_p_tpl: "P = V × I = {v} × {i} = {p} W.",
	tool_ohms_law_result_note: "Somente forma CC ideal. Mantenha unidades consistentes (V, A → Ω e W). Impedância CA e dispositivos não ôhmicos não são modelados.",
	tool_ohms_law_err_generic: "Digite valores finitos positivos nos campos conhecidos. Corrente ≠ 0 ao resolver R; resistência > 0 ao resolver V ou I.",

	tool_ohms_law_how_title: "Como usar a calculadora da lei de Ohm",
	tool_ohms_law_how_body: "Escolha se resolve R, V ou I. Informe as outras duas grandezas e calcule para ver a incógnita e a potência com os passos. Carregar exemplo percorre cada modo.",
	tool_ohms_law_how_item_1: "Selecione o modo: R a partir de V e I, V a partir de I e R, ou I a partir de V e R.",
	tool_ohms_law_how_item_2: "Digite as duas grandezas conhecidas com unidades consistentes.",
	tool_ohms_law_how_item_3: "Clique em Calcular para ver a incógnita, a potência e os passos.",
	tool_ohms_law_how_item_4: "Use Carregar exemplo para ciclar V=12/I=2, I=2/R=6 e V=12/R=6.",

	tool_ohms_law_why_choose_title: "O que esta calculadora da lei de Ohm oferece",
	tool_ohms_law_why_choose_item_1: "Três modos que cobrem os rearranjos de V = I·R.",
	tool_ohms_law_why_choose_item_2: "Potência P = V·I mostrada ao lado da incógnita.",
	tool_ohms_law_why_choose_item_3: "Linhas de passos que encaixam seus números nas fórmulas.",
	tool_ohms_law_why_choose_item_4: "Rotação de exemplos para cada modo.",
	tool_ohms_law_why_choose_item_5: "Limite claro: só CC ideal — não é conselho de fiação.",

	tool_ohms_law_formula_title: "Fórmulas da lei de Ohm",
	tool_ohms_law_formula_body: "Para um resistor ideal em CC, tensão, corrente e resistência ligam-se por V = I·R. A potência segue P = V·I.",
	tool_ohms_law_formula_item_1: "R = V ÷ I quando a corrente não é zero.",
	tool_ohms_law_formula_item_2: "V = I × R.",
	tool_ohms_law_formula_item_3: "I = V ÷ R quando a resistência é maior que zero.",
	tool_ohms_law_formula_item_4: "P = V × I (também P = I²R ou P = V²/R no caso ideal).",
	tool_ohms_law_formula_item_5: "Esta página usa só CC ideal — sem impedância CA nem projeto de segurança.",

	tool_ohms_law_example_title: "Exemplos resolvidos",
	tool_ohms_law_example: "Exemplo no modo R: V=12, I=2 → R=6 Ω, P=24 W. Modo V: I=2, R=6 → V=12. Modo I: V=12, R=6 → I=2.",

	tool_ohms_law_usecases_title: "Quando usar uma calculadora da lei de Ohm",
	tool_ohms_law_usecase_1: "Trabalho de eletrônica: rearranjar V = I·R para a grandeza que falta.",
	tool_ohms_law_usecase_2: "Checagem rápida em CC ideal de resistência ou potência a partir de leituras de medidor.",
	tool_ohms_law_usecase_3: "Comparar com páginas de física relacionadas (densidade, velocidade) para praticar unidades.",
	tool_ohms_law_usecase_4: "Ver a potência ao lado da variável resolvida sem uma ferramenta de potência separada.",

	tool_ohms_law_faq_q1: "O que afirma a lei de Ohm?",
	tool_ohms_law_faq_a1: "Para um resistor ideal em CC, V = I·R. Esta página também mostra P = V·I.",
	tool_ohms_law_faq_q2: "Posso resolver tensão ou corrente?",
	tool_ohms_law_faq_a2: "Sim. Use o controle Resolver para escolher V, I ou R.",
	tool_ohms_law_faq_q3: "Isto modela circuitos CA?",
	tool_ohms_law_faq_a3: "Não. Só formas CC ideais — impedância e fase não entram.",
	tool_ohms_law_faq_q4: "E se a corrente for zero ao resolver R?",
	tool_ohms_law_faq_a4: "R = V/I é indefinido em I = 0. A página rejeita esse caso.",
	tool_ohms_law_faq_q5: "Isto é orientação de fiação ou segurança?",
	tool_ohms_law_faq_a5: "Não. Só aritmética educativa — sem ratings de produtos nem orientação de segurança elétrica.",

	tool_ohms_law_disclaimer: "Lei de Ohm apenas educacional — não é conselho profissional, de fiação ou de segurança elétrica.",
	tool_ohms_law_references: "Referências padrão de livro-texto sobre a lei de Ohm e potência elétrica.",
	tool_ohms_law_ref_a_label: "Wikipédia — Lei de Ohm",
	tool_ohms_law_ref_b_label: "Wikipédia — Potência elétrica",
};

export default pt;
