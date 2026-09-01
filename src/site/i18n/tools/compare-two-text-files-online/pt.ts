/**
 * i18n shard for compare-two-text-files-online (Portuguese).
 * H1 is the search task “Comparar dois arquivos de texto online”; PT-BR search phrasing, not an English clone.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'Nesta aba você escolhe dois arquivos de texto e vê inclusões e exclusões por linha. Os arquivos ficam no seu dispositivo e não são enviados. Não há caixas grandes de colar: só colar texto fica em «Verificar diferenças entre dois textos».',
	tool_compare_two_text_files_online_clear: 'Limpar',
	tool_compare_two_text_files_online_compare: 'Comparar',
	tool_compare_two_text_files_online_desc:
		'Comparar dois arquivos de texto online: escolha dois .txt e veja o diff no navegador, sem enviar nada.',
	tool_compare_two_text_files_online_description:
		'Comparar dois arquivos de texto online no navegador. Processo: escolha o arquivo original e o revisado, decode UTF-8 (BOM é removido), recuse bytes binários e destaque inclusões e exclusões por linha. Os arquivos ficam no seu dispositivo e não são enviados. Exemplo: notes-a.txt contra notes-b.txt, só a linha do meio muda. Word, Excel e JSON têm outras páginas; aqui só arquivos de texto. Comparar txt entra no mesmo uso.',
	tool_compare_two_text_files_online_empty: 'Escolha primeiro dois arquivos de texto, ou carregue o exemplo.',
	tool_compare_two_text_files_online_err_binary:
		'Um arquivo parece binário (bytes nulos). Esta página só compara texto simples, como .txt.',
	tool_compare_two_text_files_online_err_too_large:
		'Um arquivo passa de cerca de 1 MB. Use um trecho menor para a aba não travar.',
	tool_compare_two_text_files_online_example:
		'Carregar exemplo contrapõe notes-a.txt (alpha / segunda linha / terceira) a notes-b.txt, cujo meio é «linha alterada». O modo por linhas marca só essa. Na primeira pintura o resultado já aparece.',
	tool_compare_two_text_files_online_example_title: 'Exemplo',
	tool_compare_two_text_files_online_faq_a1:
		'Não. O FileReader lê os bytes nesta aba. O jsdiff pode vir de um CDN como biblioteca; seus arquivos não sobem para os nossos servidores.',
	tool_compare_two_text_files_online_faq_a2:
		'Decodificação UTF-8. Um BOM no começo é retirado para a primeira linha não parecer alterada só por essa marca. Outras encodings podem sair ilegíveis — salve antes como UTF-8.',
	tool_compare_two_text_files_online_faq_a3:
		'Byte nulo vira binário e é recusado. Use um visualizador hex ou um extrator. Word e Excel têm páginas próprias de comparação.',
	tool_compare_two_text_files_online_faq_a4:
		'Esta página é para .txt / .text. Quem busca comparar txt ou um diff de arquivos online costuma querer isso. Se «comparar dois arquivos» era Word ou planilha, use aquelas páginas. Colar dois textos sem arquivos: «Verificar diferenças entre dois textos».',
	tool_compare_two_text_files_online_faq_q1: 'Meus arquivos são enviados?',
	tool_compare_two_text_files_online_faq_q2: 'Como ficam a encoding e o BOM?',
	tool_compare_two_text_files_online_faq_q3: 'Dá para comparar binário, Word ou Excel aqui?',
	tool_compare_two_text_files_online_faq_q4: 'É a mesma coisa que comparar txt ou comparar dois arquivos?',
	tool_compare_two_text_files_online_how_body:
		'Pegue dois arquivos de texto que já estão no disco e leia as linhas destacadas. Na primeira tela não há um campo grande para colar.',
	tool_compare_two_text_files_online_how_item_1: 'Escolha o primeiro arquivo de texto (exportação ou cópia original).',
	tool_compare_two_text_files_online_how_item_2: 'Escolha o segundo arquivo de texto (versão revisada).',
	tool_compare_two_text_files_online_how_item_3:
		'A comparação roda sozinha quando os dois estão escolhidos; Carregar exemplo já fez isso na primeira pintura.',
	tool_compare_two_text_files_online_how_item_4: 'Verde é inclusão, vermelho é exclusão. Limpar tira os dois arquivos desta aba.',
	tool_compare_two_text_files_online_how_title: 'Como funciona',
	tool_compare_two_text_files_online_label_a: 'Primeiro arquivo de texto',
	tool_compare_two_text_files_online_label_b: 'Segundo arquivo de texto',
	tool_compare_two_text_files_online_legend: 'Verde = adicionado · Vermelho = removido',
	tool_compare_two_text_files_online_load_sample: 'Carregar exemplo',
	tool_compare_two_text_files_online_need_lib: 'O comparador não carregou. Confira a rede e atualize.',
	tool_compare_two_text_files_online_no_diff: 'Sem diferenças: os dois arquivos batem como texto.',
	tool_compare_two_text_files_online_result_label: 'Diferenças por linha',
	tool_compare_two_text_files_online_rules_body:
		'Depois do decode UTF-8 vem o diff por linha. Encoding, BOM e binário são checados antes do destaque.',
	tool_compare_two_text_files_online_rules_item_1:
		'Cada arquivo é lido com FileReader / ArrayBuffer e decodificado como UTF-8. Um BOM UTF-8 no início é cortado para não fingir mudança na primeira linha.',
	tool_compare_two_text_files_online_rules_item_2:
		'Byte nulo significa binário e é recusado. Isto não é um dump hexadecimal.',
	tool_compare_two_text_files_online_rules_item_3:
		'O diff é por linhas (jsdiff diffLines). Se uma palavra da linha muda, a linha inteira costuma ser marcada.',
	tool_compare_two_text_files_online_rules_item_4:
		'Não há caixa de colar na primeira tela. Para colar dois textos sem arquivos, use «Verificar diferenças entre dois textos».',
	tool_compare_two_text_files_online_rules_title: 'Regras que você deve esperar',
	tool_compare_two_text_files_online_sample_a: 'alpha\nsegunda linha\nterceira',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\nlinha alterada\nterceira',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '{added} adicionadas, {removed} removidas',
	tool_compare_two_text_files_online_title: 'Comparar dois arquivos de texto online',
	tool_compare_two_text_files_online_usecase_1:
		'Exportações: confrontar o log.txt de ontem com o de hoje sem colar dezenas de milhares de linhas.',
	tool_compare_two_text_files_online_usecase_2:
		'Backup de config: dois snapshots .env ou .txt no disco, linha a linha.',
	tool_compare_two_text_files_online_usecase_3:
		'Trabalho da escola: dois .txt da entrega, para ver quais linhas mudaram.',
	tool_compare_two_text_files_online_usecases_title: 'Quando usar',
};

export default pt;
