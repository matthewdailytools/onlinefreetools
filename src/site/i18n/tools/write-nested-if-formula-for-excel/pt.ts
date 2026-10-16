/**
 * i18n 工具分片（write-nested-if-formula-for-excel / pt）。
 * 有序条件 → 嵌套 SE/IF 公式；浏览器试算；复制粘贴到 Excel。
 * 葡文检索主词：fórmula SE aninhada；公式输出仍为英文函数名与逗号。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Gerador de fórmula SE aninhada para Excel — condições ordenadas para copiar",
	tool_write_nested_if_formula_for_excel_description: "Monte uma fórmula SE aninhada (nested IF) para Excel a partir de testes igual, contém ou em branco, na ordem. Exemplo: West → A, East → B, senão Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). Teste o resultado no navegador e copie. Nomes de função em inglês e vírgulas.",
	tool_write_nested_if_formula_for_excel_article: "Adicione condições ordenadas, um resultado por linha e um senão final, pré-visualize um valor de teste e copie a fórmula SE aninhada completa.",
	tool_write_nested_if_formula_for_excel_desc: "Condições ordenadas → fórmula SE aninhada, teste no navegador e cópia.",

	tool_write_nested_if_formula_for_excel_hint: "As condições são testadas de cima para baixo. O primeiro match vence. Contém emite ISNUMBER(SEARCH(...)). Fórmulas em inglês com vírgulas.",
	tool_write_nested_if_formula_for_excel_cell_label: "Célula alvo",
	tool_write_nested_if_formula_for_excel_cell_ph: "ex. A1",
	tool_write_nested_if_formula_for_excel_trial_label: "Valor de teste",
	tool_write_nested_if_formula_for_excel_trial_ph: "ex. West",
	tool_write_nested_if_formula_for_excel_else_label: "Senão (falso final)",
	tool_write_nested_if_formula_for_excel_else_ph: "ex. Other",
	tool_write_nested_if_formula_for_excel_col_op: "Teste",
	tool_write_nested_if_formula_for_excel_col_val: "Valor / texto",
	tool_write_nested_if_formula_for_excel_col_then: "Então resultado",
	tool_write_nested_if_formula_for_excel_op_eq: "igual",
	tool_write_nested_if_formula_for_excel_op_contains: "contém",
	tool_write_nested_if_formula_for_excel_op_blank: "está em branco",
	tool_write_nested_if_formula_for_excel_add: "Adicionar condição",
	tool_write_nested_if_formula_for_excel_write: "Gerar fórmula",
	tool_write_nested_if_formula_for_excel_sample: "Carregar exemplo",
	tool_write_nested_if_formula_for_excel_clear: "Limpar",
	tool_write_nested_if_formula_for_excel_copy: "Copiar fórmula",
	tool_write_nested_if_formula_for_excel_copied: "Copiado.",
	tool_write_nested_if_formula_for_excel_formula_label: "Fórmula SE aninhada",
	tool_write_nested_if_formula_for_excel_trial_result_label: "Resultado do teste",
	tool_write_nested_if_formula_for_excel_empty: "Adicione pelo menos uma condição (ou carregue o exemplo) e depois gere a fórmula.",
	tool_write_nested_if_formula_for_excel_copy_fail: "Não foi possível copiar. Selecione a fórmula e copie manualmente.",

	tool_write_nested_if_formula_for_excel_how_title: "Como escrever uma fórmula SE aninhada",
	tool_write_nested_if_formula_for_excel_how_body: "Informe a célula alvo e as condições ordenadas. Gerar fórmula mostra o SE aninhado e avalia seu valor de teste. Copiar cola a sintaxe Excel em inglês com vírgulas.",
	tool_write_nested_if_formula_for_excel_how_item_1: "Defina a célula alvo e um valor de teste opcional.",
	tool_write_nested_if_formula_for_excel_how_item_2: "Adicione linhas igual, contém ou em branco na ordem em que o Excel deve testá-las.",
	tool_write_nested_if_formula_for_excel_how_item_3: "Preencha cada Então resultado e o valor Senão final.",
	tool_write_nested_if_formula_for_excel_how_item_4: "Clique Gerar fórmula, confira o resultado do teste e depois Copiar fórmula.",

	tool_write_nested_if_formula_for_excel_why_choose_title: "O que este gerador de SE aninhada oferece",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "Condições igual / contém / em branco ordenadas em um único SE aninhado.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "Teste no navegador para ver qual ramo vence antes de colar.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "Rotação de exemplos: regiões, faixas de nota e testes contém.",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "Cópia em um clique da string completa da fórmula.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "Nota clara: isto monta SE aninhado, não IFS (veja a página IFS relacionada).",

	tool_write_nested_if_formula_for_excel_rules_title: "Regras que você deve esperar",
	tool_write_nested_if_formula_for_excel_rules_body: "O gerador emite o SE aninhado clássico IF(...). Aspas dentro de textos Excel são duplicadas.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "Aspas dentro de textos Excel são duplicadas.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "Contém emite ISNUMBER(SEARCH(...)); em branco testa texto vazio.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "A primeira condição que corresponder vence (de cima para baixo).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "Nomes em inglês e vírgulas: seu Excel localizado pode exigir SE/ponto e vírgula.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "Para sintaxe IFS(), use a página write-IFS relacionada.",

	tool_write_nested_if_formula_for_excel_example_title: "Exemplos trabalhados",
	tool_write_nested_if_formula_for_excel_example: "Carregar exemplo começa com West → A e East → B, senão Other, teste West → A. O seguinte monta faixas de nota (≥90 / ≥80). O último usa um teste contém para \"promo\".",

	tool_write_nested_if_formula_for_excel_usecases_title: "Quando usar um gerador de fórmula SE aninhada",
	tool_write_nested_if_formula_for_excel_usecase_1: "Atribuir faixas de nota ou risco a partir de regras ordenadas.",
	tool_write_nested_if_formula_for_excel_usecase_2: "Transformar códigos de região em rótulos de relatório.",
	tool_write_nested_if_formula_for_excel_usecase_3: "Checar uma fórmula com vários ramos antes de colar na pasta de trabalho.",
	tool_write_nested_if_formula_for_excel_usecase_4: "Prototipar ramos contém/em branco sem escrever SEARCH à mão.",

	tool_write_nested_if_formula_for_excel_faq_q1: "Meus valores são enviados para algum lugar?",
	tool_write_nested_if_formula_for_excel_faq_a1: "Não. A montagem e o teste ficam no seu navegador.",
	tool_write_nested_if_formula_for_excel_faq_q2: "É a mesma coisa que IFS?",
	tool_write_nested_if_formula_for_excel_faq_a2: "Não. Esta página emite IF(...) aninhado. Use o gerador IFS relacionado para IFS().",
	tool_write_nested_if_formula_for_excel_faq_q3: "Como funciona contém?",
	tool_write_nested_if_formula_for_excel_faq_a3: "Emite ISNUMBER(SEARCH(\"texto\", célula)) dentro do teste IF.",
	tool_write_nested_if_formula_for_excel_faq_q4: "A fórmula cola em todos os idiomas do Excel?",
	tool_write_nested_if_formula_for_excel_faq_a4: "Usa nomes em inglês e vírgulas. Algumas instalações pedem SE/SES ou ponto e vírgula.",
	tool_write_nested_if_formula_for_excel_faq_q5: "Para que serve o valor de teste?",
	tool_write_nested_if_formula_for_excel_faq_a5: "Avalia a mesma ordem de ramos no navegador para confirmar qual Então/Senão vence.",
	tool_write_nested_if_formula_for_excel_faq_q6: "Posso aninhar mais de duas condições?",
	tool_write_nested_if_formula_for_excel_faq_a6: "Sim. Adicione linhas; cada uma vira outra camada IF em torno do Senão final.",

	tool_write_nested_if_formula_for_excel_references: "Documentação Microsoft da função IF.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — função IF",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — função IFS",
};

export default pt;
