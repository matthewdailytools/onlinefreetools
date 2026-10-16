/**
 * i18n 工具分片（create-budget-spreadsheet / pt）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 教育规划，非理财建议。
 * 检索向：criar planilha de orçamento / orçamento Excel / baixar orçamento xlsx。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "Criar planilha de orçamento — categorias e valores em xlsx",
	tool_create_budget_spreadsheet_description: "Monte uma planilha de orçamento simples: linhas de categoria e valor, veja o total na prévia e baixe um .xlsx com fórmula SUM ativa. Exemplo: Aluguel 1200 + Alimentação 400 → Total 1600. Roda no navegador — só números de planejamento, sem conselho financeiro, fiscal ou de investimento.",
	tool_create_budget_spreadsheet_article: "Digite linhas categoria,valor, confira o total na prévia e baixe um orcamento.xlsx cuja célula Total usa SUM.",
	tool_create_budget_spreadsheet_desc: "Valores por categoria → total na prévia → xlsx com SUM. Só no dispositivo.",

	tool_create_budget_spreadsheet_safety_banner: "Só números de planejamento. Esta página monta uma lista de categorias com total SUM. Não é razão contábil, declaração de imposto nem conselho de investimento.",
	tool_create_budget_spreadsheet_hint: "Uma linha por entrada: categoria,valor (vírgula ou tab). Os valores devem ser números finitos. Linhas malformadas são ignoradas.",
	tool_create_budget_spreadsheet_input_label: "Linhas do orçamento (categoria, valor)",
	tool_create_budget_spreadsheet_input_ph: "ex. Aluguel,1200",
	tool_create_budget_spreadsheet_write: "Criar planilha",
	tool_create_budget_spreadsheet_download: "Baixar xlsx",
	tool_create_budget_spreadsheet_sample: "Carregar exemplo",
	tool_create_budget_spreadsheet_clear: "Limpar",
	tool_create_budget_spreadsheet_preview_title: "Prévia",
	tool_create_budget_spreadsheet_col_category: "Categoria",
	tool_create_budget_spreadsheet_col_amount: "Valor",
	tool_create_budget_spreadsheet_total_label: "Total",
	tool_create_budget_spreadsheet_rows_label: "Linhas contadas",
	tool_create_budget_spreadsheet_ready_note: "Prévia pronta. O download grava orcamento.xlsx com fórmula SUM na célula Total.",
	tool_create_budget_spreadsheet_empty: "Adicione ao menos uma linha válida categoria,valor (por exemplo Aluguel,1200) ou carregue o exemplo.",
	tool_create_budget_spreadsheet_need_lib: "Falha ao carregar a biblioteca de planilha. Verifique a rede e atualize.",
	tool_create_budget_spreadsheet_sheet_name: "Orcamento",

	tool_create_budget_spreadsheet_how_title: "Como criar uma planilha de orçamento",
	tool_create_budget_spreadsheet_how_body: "Liste cada categoria de gasto e o valor, gere a prévia com o total e baixe um .xlsx. Alterar um valor no Excel recalcula o total SUM.",
	tool_create_budget_spreadsheet_how_item_1: "Digite uma linha por entrada no formato categoria,valor.",
	tool_create_budget_spreadsheet_how_item_2: "Clique em Criar planilha para pré-visualizar linhas e total.",
	tool_create_budget_spreadsheet_how_item_3: "Corrija ou remova linhas ignoradas se o total parecer errado.",
	tool_create_budget_spreadsheet_how_item_4: "Clique em Baixar xlsx para salvar orcamento.xlsx com SUM dinâmico.",

	tool_create_budget_spreadsheet_why_choose_title: "O que este criador de planilha de orçamento oferece",
	tool_create_budget_spreadsheet_why_choose_item_1: "Lista rápida de categorias com total pré-visualizado na página.",
	tool_create_budget_spreadsheet_why_choose_item_2: "A célula Total do arquivo baixado usa fórmula Excel SUM ativa.",
	tool_create_budget_spreadsheet_why_choose_item_3: "Exemplos em rotação: mensal, viagem e lista de clube.",
	tool_create_budget_spreadsheet_why_choose_item_4: "Roda no navegador — as linhas não são enviadas.",
	tool_create_budget_spreadsheet_why_choose_item_5: "Limite YMYL claro: só planejamento — não é razão contábil nem ferramenta fiscal.",

	tool_create_budget_spreadsheet_rules_title: "Regras que você deve esperar",
	tool_create_budget_spreadsheet_rules_body: "Esta ferramenta monta uma folha de planejamento a partir de valores por categoria. Não é software de contabilidade.",
	tool_create_budget_spreadsheet_rules_item_1: "Os valores devem ser números finitos; linhas malformadas são ignoradas.",
	tool_create_budget_spreadsheet_rules_item_2: "A célula Total baixada usa =SUM sobre a coluna de valores.",
	tool_create_budget_spreadsheet_rules_item_3: "Só uma lista estilo despesas — sem motor de variação receita vs despesa.",
	tool_create_budget_spreadsheet_rules_item_4: "Os valores ficam no seu dispositivo e não são enviados.",
	tool_create_budget_spreadsheet_rules_item_5: "O formato segue a prática comum OOXML/xlsx via SheetJS no navegador.",

	tool_create_budget_spreadsheet_example_title: "Exemplos trabalhados",
	tool_create_budget_spreadsheet_example: "Carregar exemplo começa com Aluguel 1200 e Alimentação 400 → Total 1600. Depois soma Utilidades 150 e Transporte 200. O último exemplo é uma lista curta de viagem (Hotel, Voos, Comida).",

	tool_create_budget_spreadsheet_usecases_title: "Quando criar uma planilha de orçamento aqui",
	tool_create_budget_spreadsheet_usecase_1: "Rascunhar um orçamento envelope mensal antes de um modelo mais completo.",
	tool_create_budget_spreadsheet_usecase_2: "Juntar custos previstos de viagem ou evento numa folha para baixar.",
	tool_create_budget_spreadsheet_usecase_3: "Preparar o plano de gastos de um clube antes da contabilidade formal.",
	tool_create_budget_spreadsheet_usecase_4: "Entregar um .xlsx com total SUM que ainda recalcula no Excel.",

	tool_create_budget_spreadsheet_faq_q1: "Isto é um livro-razão?",
	tool_create_budget_spreadsheet_faq_a1: "Não. Não tem contas, lançamentos, conciliação nem histórico de auditoria.",
	tool_create_budget_spreadsheet_faq_q2: "As minhas linhas são enviadas?",
	tool_create_budget_spreadsheet_faq_a2: "Não. A análise e a escrita do xlsx rodam no seu navegador.",
	tool_create_budget_spreadsheet_faq_q3: "O xlsx baixado recalcula?",
	tool_create_budget_spreadsheet_faq_a3: "Sim. A célula Total contém uma fórmula SUM sobre a coluna de valores.",
	tool_create_budget_spreadsheet_faq_q4: "Acompanha receita versus despesas?",
	tool_create_budget_spreadsheet_faq_a4: "Não. Para receita, metas, variações ou gráficos, use um modelo de orçamento mais completo.",
	tool_create_budget_spreadsheet_faq_q5: "Qual o formato categoria,valor?",
	tool_create_budget_spreadsheet_faq_a5: "Uma linha por entrada, categoria e depois valor separados por vírgula ou tab. Exemplo: Aluguel,1200.",
	tool_create_budget_spreadsheet_faq_q6: "Isto é conselho financeiro?",
	tool_create_budget_spreadsheet_faq_a6: "Não. Só aritmética de planejamento — sem conselho financeiro, fiscal ou de investimento.",

	tool_create_budget_spreadsheet_disclaimer: "Só números de planejamento — sem conselho financeiro, fiscal, contábil ou de investimento.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML; documentação SheetJS para escrita xlsx no navegador.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "Docs SheetJS",
};

export default pt;
