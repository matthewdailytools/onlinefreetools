/**
 * i18n 工具分片（write-ifs-formula-in-excel / pt）。
 * 有序条件 → =IFS(...)；TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: "Gerador de fórmula IFS (SES) no Excel — testes ordenados com TRUE de reserva",
	tool_write_ifs_formula_in_excel_description: "Monte uma fórmula IFS para Excel 2019 ou Microsoft 365 a partir de testes ordenados (igual, contém, em branco). Exemplo: West → A, East → B, senão Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\"). Teste no navegador e depois copie. Não disponível no Excel 2016 perpétuo.",
	tool_write_ifs_formula_in_excel_article: "Adicione testes ordenados, defina cada resultado e um senão com TRUE, pré-visualize um valor de teste e copie uma fórmula IFS completa.",
	tool_write_ifs_formula_in_excel_desc: "Testes ordenados → fórmula IFS com TRUE de reserva, teste no navegador e cópia.",

	tool_write_ifs_formula_in_excel_hint: "As condições são testadas de cima para baixo. O gerador acrescenta TRUE,senão como reserva. Exige Excel 2019, Microsoft 365 ou posterior. Nomes em inglês e vírgulas.",
	tool_write_ifs_formula_in_excel_note_2016: "IFS exige Excel 2019, Microsoft 365 ou posterior. Em Excel mais antigo use o gerador SE aninhado.",
	tool_write_ifs_formula_in_excel_cell_label: "Célula alvo",
	tool_write_ifs_formula_in_excel_cell_ph: "ex. A1",
	tool_write_ifs_formula_in_excel_trial_label: "Valor de teste",
	tool_write_ifs_formula_in_excel_trial_ph: "ex. West",
	tool_write_ifs_formula_in_excel_else_label: "Senão (TRUE de reserva)",
	tool_write_ifs_formula_in_excel_else_ph: "ex. Other",
	tool_write_ifs_formula_in_excel_col_op: "Teste",
	tool_write_ifs_formula_in_excel_col_val: "Valor / texto",
	tool_write_ifs_formula_in_excel_col_then: "Então resultado",
	tool_write_ifs_formula_in_excel_op_eq: "igual a",
	tool_write_ifs_formula_in_excel_op_contains: "contém",
	tool_write_ifs_formula_in_excel_op_blank: "está em branco",
	tool_write_ifs_formula_in_excel_add: "Adicionar condição",
	tool_write_ifs_formula_in_excel_write: "Escrever fórmula",
	tool_write_ifs_formula_in_excel_sample: "Carregar exemplo",
	tool_write_ifs_formula_in_excel_clear: "Limpar",
	tool_write_ifs_formula_in_excel_copy: "Copiar fórmula",
	tool_write_ifs_formula_in_excel_copied: "Copiado.",
	tool_write_ifs_formula_in_excel_formula_label: "Fórmula IFS",
	tool_write_ifs_formula_in_excel_trial_result_label: "Resultado do teste",
	tool_write_ifs_formula_in_excel_empty: "Adicione pelo menos uma condição (ou carregue o exemplo) e depois escreva a fórmula.",
	tool_write_ifs_formula_in_excel_copy_fail: "Não foi possível copiar. Selecione a fórmula e copie manualmente.",

	tool_write_ifs_formula_in_excel_how_title: "Como escrever uma fórmula IFS",
	tool_write_ifs_formula_in_excel_how_body: "Informe a célula alvo e os testes ordenados. Escrever fórmula mostra IFS com TRUE de reserva e avalia seu valor de teste. A cópia usa sintaxe Excel em inglês com vírgulas.",
	tool_write_ifs_formula_in_excel_how_item_1: "Defina a célula alvo e um valor de teste opcional.",
	tool_write_ifs_formula_in_excel_how_item_2: "Adicione linhas igual, contém ou em branco na ordem de avaliação.",
	tool_write_ifs_formula_in_excel_how_item_3: "Preencha cada Então e o valor Senão (pareado com TRUE).",
	tool_write_ifs_formula_in_excel_how_item_4: "Clique Escrever fórmula, confira o teste e depois Copiar. Use SE aninhado no Excel 2016.",

	tool_write_ifs_formula_in_excel_why_choose_title: "O que este gerador IFS oferece",
	tool_write_ifs_formula_in_excel_why_choose_item_1: "Testes ordenados igual / contém / em branco em uma única chamada IFS.",
	tool_write_ifs_formula_in_excel_why_choose_item_2: "Par automático TRUE,senão de reserva.",
	tool_write_ifs_formula_in_excel_why_choose_item_3: "Teste no navegador antes de colar no Excel.",
	tool_write_ifs_formula_in_excel_why_choose_item_4: "Exemplos rotativos para regiões, notas e contém.",
	tool_write_ifs_formula_in_excel_why_choose_item_5: "Limite clara do Excel 2016 com caminho para SE aninhado.",

	tool_write_ifs_formula_in_excel_rules_title: "Regras que você deve esperar",
	tool_write_ifs_formula_in_excel_rules_body: "O gerador emite IFS(teste,valor,...,TRUE,senão). Aspas de texto são duplicadas dentro de strings do Excel.",
	tool_write_ifs_formula_in_excel_rules_item_1: "Aspas de texto são duplicadas dentro de strings do Excel.",
	tool_write_ifs_formula_in_excel_rules_item_2: "Contém emite ISNUMBER(SEARCH(...)); em branco testa texto vazio.",
	tool_write_ifs_formula_in_excel_rules_item_3: "O primeiro teste verdadeiro vence; TRUE de reserva roda por último.",
	tool_write_ifs_formula_in_excel_rules_item_4: "IFS exige Excel 2019, Microsoft 365 ou posterior — não o Excel 2016 perpétuo.",
	tool_write_ifs_formula_in_excel_rules_item_5: "Nomes de funções em inglês e vírgulas podem precisar de localização na sua instalação do Excel.",

	tool_write_ifs_formula_in_excel_example_title: "Exemplos práticos",
	tool_write_ifs_formula_in_excel_example: "Carregar exemplo começa com West → A e East → B, senão Other → =IFS(...,TRUE,\"Other\"), teste West → A. O seguinte monta notas simples. O último usa contém para \"promo\".",

	tool_write_ifs_formula_in_excel_usecases_title: "Quando usar um gerador de fórmula IFS",
	tool_write_ifs_formula_in_excel_usecase_1: "Mapear códigos de região para rótulos sem parênteses SE profundamente aninhados.",
	tool_write_ifs_formula_in_excel_usecase_2: "Rascunhar faixas de nota ou risco para pastas Microsoft 365.",
	tool_write_ifs_formula_in_excel_usecase_3: "Testar a ordem dos ramos antes de colar numa planilha compartilhada.",
	tool_write_ifs_formula_in_excel_usecase_4: "Mudar para a página SE aninhado quando colegas ainda usam Excel 2016.",

	tool_write_ifs_formula_in_excel_faq_q1: "O Excel 2016 executa IFS?",
	tool_write_ifs_formula_in_excel_faq_a1: "A edição perpétua do Excel 2016 não. Use SE aninhado, Excel 2019 ou posterior, ou Microsoft 365.",
	tool_write_ifs_formula_in_excel_faq_q2: "O que acontece quando nenhum teste corresponde?",
	tool_write_ifs_formula_in_excel_faq_a2: "TRUE é pareado com o valor senão como resultado de reserva.",
	tool_write_ifs_formula_in_excel_faq_q3: "Os valores são enviados ao servidor?",
	tool_write_ifs_formula_in_excel_faq_a3: "Não. Montagem e teste ficam no seu navegador.",
	tool_write_ifs_formula_in_excel_faq_q4: "O Excel localizado aceitará?",
	tool_write_ifs_formula_in_excel_faq_a4: "Algumas instalações precisam de nomes traduzidos (ex. SES) ou ponto e vírgula.",
	tool_write_ifs_formula_in_excel_faq_q5: "Em que isso difere do SE aninhado?",
	tool_write_ifs_formula_in_excel_faq_a5: "IFS é uma lista plana de testes. SE aninhado envolve SE dentro de SE. Use a página SE aninhado relacionada para Excel antigo.",
	tool_write_ifs_formula_in_excel_faq_q6: "O que «contém» emite?",
	tool_write_ifs_formula_in_excel_faq_a6: "ISNUMBER(SEARCH(\"texto\", célula)) como argumento de teste dentro de IFS.",

	tool_write_ifs_formula_in_excel_references: "Documentação Microsoft da função IFS.",
	tool_write_ifs_formula_in_excel_ref_a_label: "Microsoft — função IFS",
	tool_write_ifs_formula_in_excel_ref_b_label: "Microsoft — função IF",
};

export default pt;
