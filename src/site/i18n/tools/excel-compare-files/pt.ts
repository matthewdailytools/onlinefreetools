/**
 * i18n（excel-compare-files / pt）。
 * H1: Comparar arquivos Excel（“online” não entra no H1）。
 * Primeira planilha por padrão; células vazias = string vazia.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_excel_compare_files_article:
		'Escolha duas planilhas e compare a folha atual célula a célula. Células vazias contam como string vazia. Os arquivos ficam no dispositivo e não são enviados ao servidor.',
	tool_excel_compare_files_clear: 'Limpar',
	tool_excel_compare_files_col_addr: 'Célula',
	tool_excel_compare_files_col_left: 'Primeiro arquivo',
	tool_excel_compare_files_col_right: 'Segundo arquivo',
	tool_excel_compare_files_compare: 'Comparar',
	tool_excel_compare_files_desc:
		'Comparar arquivos Excel: escolha duas planilhas, compare a folha atual célula a célula — ficam no dispositivo, sem enviar ao servidor.',
	tool_excel_compare_files_description:
		'Comparar arquivos Excel no navegador. Processo: escolha dois xlsx ou csv, use a folha atual (a primeira por padrão) e liste as células cujo valor difere. Os arquivos ficam no dispositivo e não são enviados ao servidor. Exemplo: duas tabelas de 3 linhas em que B3 passa de 2 para 9. “Online” descreve o funcionamento, não o título. Deslocamento de colunas compara por endereço, não pelo nome do cabeçalho.',
	tool_excel_compare_files_empty: 'Escolha primeiro dois arquivos de planilha, ou carregue o exemplo.',
	tool_excel_compare_files_err_read:
		'Não foi possível ler a planilha. Tente xlsx ou csv e desbloqueie pastas de trabalho protegidas.',
	tool_excel_compare_files_example:
		'Carregar exemplo compara duas tabelas CSV. Os cabeçalhos Name/Qty batem; a quantidade de Gadget é 2 versus 9, então B3 aparece. Na primeira pintura essa célula já está visível.',
	tool_excel_compare_files_example_title: 'Exemplo',
	tool_excel_compare_files_faq_a1:
		'Não. Os bytes são lidos nesta aba com SheetJS. A biblioteca pode chegar via CDN; seus arquivos não são enviados aos nossos servidores.',
	tool_excel_compare_files_faq_a2:
		'Sim: a primeira folha vem selecionada por padrão. Use as listas se precisar de outra aba do mesmo arquivo. As demais só entram quando você as escolhe.',
	tool_excel_compare_files_faq_a3:
		'Sim. CSV é lido como uma única folha. Quem busca comparar dois csv usa esta mesma página, sem outra URL.',
	tool_excel_compare_files_faq_a4:
		'Células ausentes e vazias viram string vazia. Uma coluna deslocada ainda alinha A1 com A1, não “a coluna Name” pelo cabeçalho, para não casar errado quando os títulos se mexem.',
	tool_excel_compare_files_faq_q1: 'Meus arquivos Excel são enviados?',
	tool_excel_compare_files_faq_q2: 'Só compara a primeira folha?',
	tool_excel_compare_files_faq_q3: 'Posso comparar dois CSV aqui?',
	tool_excel_compare_files_faq_q4: 'Como células vazias e colunas deslocadas são tratadas?',
	tool_excel_compare_files_how_body:
		'Escolha duas tabelas e veja quais endereços de célula diferem nas folhas atuais.',
	tool_excel_compare_files_how_item_1: 'Escolher a primeira planilha (xlsx, xls ou csv).',
	tool_excel_compare_files_how_item_2: 'Escolher a segunda planilha.',
	tool_excel_compare_files_how_item_3: 'Deixar a primeira folha, salvo se precisar de outra aba.',
	tool_excel_compare_files_how_item_4: 'Comparar lista células diferentes; Carregar exemplo já rodou na abertura.',
	tool_excel_compare_files_how_title: 'Como usar',
	tool_excel_compare_files_label_a: 'Primeira planilha',
	tool_excel_compare_files_label_b: 'Segunda planilha',
	tool_excel_compare_files_load_sample: 'Carregar exemplo',
	tool_excel_compare_files_need_lib: 'O SheetJS não carregou. Verifique a rede e atualize.',
	tool_excel_compare_files_no_diff: 'Não há diferenças de célula nas folhas atuais.',
	tool_excel_compare_files_result_label: 'Diferenças de célula',
	tool_excel_compare_files_rules_body: 'Os valores se comparam pelo endereço da grade só na folha escolhida.',
	tool_excel_compare_files_rules_item_1: 'O SheetJS lê a pasta de trabalho. A folha padrão é o primeiro nome no arquivo.',
	tool_excel_compare_files_rules_item_2:
		'Cada célula vira texto após a conversão do SheetJS. Vazias e ausentes são "".',
	tool_excel_compare_files_rules_item_3:
		'Uma coluna inserida de um lado ainda alinha por A1/B1, não pelos rótulos de cabeçalho.',
	tool_excel_compare_files_rules_item_4:
		'As outras folhas da pasta são ignoradas até você escolhê-las. Não há varredura padrão de toda a pasta.',
	tool_excel_compare_files_rules_title: 'O que esperar',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'Folha no primeiro arquivo',
	tool_excel_compare_files_sheet_b: 'Folha no segundo arquivo',
	tool_excel_compare_files_summary: '{n} células diferem',
	tool_excel_compare_files_title: 'Comparar arquivos Excel',
	tool_excel_compare_files_usecase_1: 'Cotações: duas listas de preço exportadas em que algumas células se moveram.',
	tool_excel_compare_files_usecase_2: 'Presença ou estoque em CSV, uma semana contra a outra.',
	tool_excel_compare_files_usecase_3: 'Tabelas de dever salvas como xlsx por dois alunos.',
	tool_excel_compare_files_usecases_title: 'Quando encaixa',
};

export default pt;
