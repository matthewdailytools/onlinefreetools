/**
 * i18n（compare-two-word-documents-for-differences / pt）。
 * H1: Comparar dois documentos Word para ver diferenças.
 * Não é Revisão → Comparar da Microsoft.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'Escolha dois .docx e compare o texto visível. Estilos, cabeçalhos e o painel de Revisão do Word não são reproduzidos. Os arquivos ficam no dispositivo e não são enviados ao servidor.',
	tool_compare_two_word_documents_for_differences_clear: 'Limpar',
	tool_compare_two_word_documents_for_differences_compare: 'Comparar',
	tool_compare_two_word_documents_for_differences_desc:
		'Comparar dois documentos Word para ver diferenças: extrair texto visível de dois .docx no navegador, sem enviar ao servidor.',
	tool_compare_two_word_documents_for_differences_description:
		'Comparar dois documentos Word para ver diferenças no navegador. Processo: escolha dois .docx, extraia o texto visível dos parágrafos e marque o que foi acrescentado ou apagado. Os arquivos ficam no dispositivo e não são enviados ao servidor. Exemplo: dois memorandos curtos em que uma frase muda. Isto não é Revisão → Comparar da Microsoft; cabeçalhos e estilos são descartados. PDF fica de fora.',
	tool_compare_two_word_documents_for_differences_empty: 'Escolha primeiro dois arquivos Word, ou carregue o exemplo.',
	tool_compare_two_word_documents_for_differences_err_extract:
		'Não foi possível ler o texto. Pode estar danificado, criptografado ou não ser .docx.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'Nenhum arquivo tem texto extraível (vazio ou só imagens).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'Use .docx (Office Open XML). O .doc antigo não é suportado.',
	tool_compare_two_word_documents_for_differences_example:
		'Carregar exemplo gera dois .docx minúsculos. O segundo memo troca “meet at noon” por “meet at 3pm”. Na primeira pintura já aparece essa diferença de redação.',
	tool_compare_two_word_documents_for_differences_example_title: 'Exemplo',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'Não. Os arquivos são lidos nesta aba. mammoth e jsdiff podem chegar como biblioteca depuis ce site; seus documentos não são enviados aos nossos servidores.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'Não. O Word compara formatação e alterações controladas. Esta página só extrai o texto visível e faz o diff dessa redação. Cabeçalhos, rodapés e estilos são descartados.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'Se a extração falhar, costuma ser senha, arquivo corrompido ou não OOXML. Páginas só com imagem geram texto vazio.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		"A comparação aceita dois .docx e verifica o texto extraído. PDF e .doc antigo não são analisados, e formatação ou histórico de revisão do Word ficam fora do resultado.",
	tool_compare_two_word_documents_for_differences_faq_q1: 'Meus arquivos Word são enviados?',
	tool_compare_two_word_documents_for_differences_faq_q2: 'É o mesmo que Revisão → Comparar no Word?',
	tool_compare_two_word_documents_for_differences_faq_q3: 'Por que a extração falha ou faltam cabeçalhos?',
	tool_compare_two_word_documents_for_differences_faq_q4: 'Posso comparar PDF ou quaisquer dois documentos?',
	tool_compare_two_word_documents_for_differences_how_body:
		'Escolha dois Word e leia o diff de redação. Esta página não abre o painel de Revisão.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'Escolher o primeiro .docx (original).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'Escolher o segundo .docx (revisado).',
	tool_compare_two_word_documents_for_differences_how_item_3:
		"Clique em Comparar para extrair o texto visível e calcular as diferenças de redação.",
	tool_compare_two_word_documents_for_differences_how_item_4: 'Ler o verde (acrescentado) e o vermelho (apagado).',
	tool_compare_two_word_documents_for_differences_how_title: 'Como usar',
	tool_compare_two_word_documents_for_differences_label_a: 'Primeiro documento Word',
	tool_compare_two_word_documents_for_differences_label_b: 'Segundo documento Word',
	tool_compare_two_word_documents_for_differences_legend: 'Verde = acrescentado · Vermelho = apagado',
	tool_compare_two_word_documents_for_differences_load_sample: 'Carregar exemplo',
	tool_compare_two_word_documents_for_differences_need_lib: 'Uma biblioteca não carregou. Verifique a rede e atualize.',
	tool_compare_two_word_documents_for_differences_no_diff: 'O texto extraído não tem diferenças de redação.',
	tool_compare_two_word_documents_for_differences_result_label: 'Diferenças de redação',
	tool_compare_two_word_documents_for_differences_rules_body:
		'A comparação é um diff de texto depois da extração. Formatação não é trilha de revisões.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth lê parágrafos visíveis do OOXML. Esse texto é comparado linha a linha com jsdiff.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'Cabeçalhos, rodapés, comentários e a maior parte dos estilos são descartados. Dois arquivos só com visual diferente podem parecer iguais.',
	tool_compare_two_word_documents_for_differences_rules_item_3: '.docx criptografado ou danificado falha. O .doc legado não é analisado.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'Não é “Comparar documentos” da Microsoft. Se precisar de formatação com controle de alterações, use o Word.',
	tool_compare_two_word_documents_for_differences_rules_title: 'O que esperar',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '{added} acrescentados, {removed} apagados',
	tool_compare_two_word_documents_for_differences_title: 'Comparar dois documentos Word para ver diferenças',
	tool_compare_two_word_documents_for_differences_usecase_1:
		'Rascunhos de contrato: ver quais frases mudaram entre dois exports .docx.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'Atas: o arquivo da reunião passada contra o desta semana.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'Tarefas: duas entregas Word em que a redação importa, não o layout.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'Quando encaixa',
};

export default pt;
