/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / pt).
 * 当地主词：Converter vários JPG em texto com OCR.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'Definições avançadas (opcional)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'Largue várias fotos impressas ou prints, clique em Converter tudo e baixe um ZIP. Cada imagem vira um .txt; o combinado junta com o nome do arquivo. Uma foto embaçada é pulada. Os arquivos ficam no dispositivo, sem enviar ao servidor. Só uma foto? Use Converter um JPG em texto com OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'Escolha JPG, PNG ou WebP',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'Limpar',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'Notas',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'Arquivo',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'Pixels',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'Ligado por padrão. O ZIP inclui combined.txt com --- nome --- entre as fotos.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'Incluir combined.txt no ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'Converter tudo',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'Copiado.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'Copiar texto combinado',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} arquivos (máx. 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'Converta vários JPG em texto com OCR: fila, Converter tudo, ZIP — no dispositivo, sem enviar ao servidor.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'Passe vários JPG ou prints a um ZIP de textos. O OCR corre nesta aba, foto a foto, sem enviar ao servidor. Passos: adicionar imagens, Converter tudo, Baixar ZIP. Exemplo: duas fotos impressas viram dois TXT mais um combinado. Também se busca como OCR em lote. Uma foto só? Use a página de um JPG.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'Baixar ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: 'Solte várias fotos aqui (máx. 10). O processamento fica nesta aba.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'Adicione fotos primeiro.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'Nenhum texto impresso. Pulada. Tente uma página nítida, não manuscrito.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'O motor OCR não carregou. Atualize e clique em Converter tudo. Linhas prontas continuam baixáveis.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'Não foi possível montar o ZIP neste navegador. Tente um atual.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'Não deu para ler a imagem. Use JPEG, PNG ou WebP. Pulada.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'Esta página lê fotos, não PDF. Esse arquivo não entrou na fila.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'Maior que 12 MB. Comprima ou recorte. Pulada.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: 'No máximo 10 fotos. As demais não foram adicionadas.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'Carregar exemplo adiciona sample-1.jpg e sample-2.jpg, corre Converter tudo e ativa Baixar ZIP com dois TXT e combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'Exemplo',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'Não. As fotos ficam nesta aba. Scripts do motor e do ZIP vêm deste site; nada sobe aos nossos servidores.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'A página de um JPG copia um único texto. Aqui há fila: Converter tudo, pular a linha falha, Baixar ZIP. Mesmo motor, outro trabalho.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3: 'Não. Essa foto é pulada e o resto segue. O que deu certo entra no ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'Um .txt por foto com o nome original. Combined.txt vem ligado, com --- arquivo --- entre páginas, para vários JPG virarem texto de uma vez.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'Para um JPG use Converter um JPG em texto com OCR. Aqui os botões são Converter tudo e Baixar ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6: 'Sim. JPEG, PNG e WebP na mesma fila, sem outra URL.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'Letra impressa funciona melhor. Manuscrito costuma falhar nessa linha. Não é serviço de digitalização.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'Sem PDF, Word ou planilha. PDF digital com camada de texto vai para Extrair texto de um PDF.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: 'As fotos são enviadas a um servidor?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: 'Qual a diferença de converter um único JPG com OCR?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'Se uma foto falhar, o lote inteiro para?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'O que tem dentro do ZIP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'Só tenho uma foto. Posso usar mesmo assim?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'Dá para lotar PNG ou prints WebP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: 'Serve para manuscrito ou serviço de scanner?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'Posso soltar um PDF digitalizado?',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'Transforme um monte de fotos impressas num ZIP de textos: adicione as imagens, clique em Converter tudo (o motor carrega no primeiro clique e lê uma após a outra) e depois Baixar ZIP ou Copiar texto combinado.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'Solte vários JPG, PNG ou WebP (ou escolha arquivos).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2: 'Opcional: idioma para o lote inteiro (chinês e inglês por padrão).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'Clique em Converter tudo — a primeira vez carrega o motor nesta aba e lê foto a foto. Uma foto falha é pulada.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'Clique em Baixar ZIP (um TXT por foto, mais o combinado) ou Copiar texto combinado.',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'Como funciona',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'Árabe',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'Inglês',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'Japonês',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'Idioma de reconhecimento para o lote inteiro',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'Chinês',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'Chinês + inglês',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'Lado mais longo antes de ler (px)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'Padrão 2048. No celular, um valor menor alivia a memória.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'Prévia do texto combinado',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'Até 10 fotos. Se o lado longo passa o limite, reduz. Um worker OCR lê em série. A linha falha é pulada; o texto certo vai ao ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'Os nomes do ZIP seguem o original. Combined.txt (ligado) insere --- arquivo --- entre fotos, como um caderno fotografado.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'Os arquivos ficam no dispositivo e não são enviados ao servidor. Os scripts vêm deste site.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'Manuscrito, desfoque forte e perspectiva extrema costumam falhar nessa linha. Tabelas saem em ordem de leitura, não CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'Sem PDF, Word ou PDF pesquisável. Uma foto com copiar texto vai para Converter um JPG em texto com OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'O que esperar',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'Carregar exemplo',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'Pronto',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'Na fila',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'Lendo',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'Pulado',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'Pronto.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: 'Carregando o motor OCR…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'Converter vários JPG em texto com OCR',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1:
		'Fotografe várias folhas de apostila e baixe um ZIP de TXT para o bloco.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2:
		'Passe a texto um monte de prints de chat ou erro quando não dá para selecionar.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3:
		'Una fotos de cardápio num combined.txt com separadores e copie para revisar.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'Quando combina',
};

export default pt;
