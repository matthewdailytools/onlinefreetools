/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / pt).
 * Palavra local: Converter vários JPG em Word editável com OCR.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'Ajustes avançados (opcional)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'Solte várias fotos impressas ou capturas, clique em Converter tudo e depois em Baixar Word. Cada foto vira uma seção com o nome do arquivo no título e texto que você edita; a foto original fica acima por padrão para conferir. Uma foto borrada é pulada. Os arquivos ficam no seu dispositivo, não sobem para um servidor. Quer um ZIP de TXT? Use Converter vários JPG em texto com OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'Escolha JPG, PNG ou WebP',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'Limpar',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'Notas',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'Arquivo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'Pixels',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'Converter tudo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} arquivos (máx. 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'Converter vários JPG em Word editável com OCR: fila, Converter tudo, Baixar Word — fica no seu dispositivo, não sobe para um servidor.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'Solte vários JPG e baixe um Word que dá para editar: o reconhecimento corre nesta aba, foto a foto, e os arquivos ficam no seu dispositivo, não sobem para um servidor. Passos: adicione imagens, Converter tudo, Baixar Word. Exemplo: duas amostras impressas viram duas seções com título e foto opcional. Também se busca JPG para Word com OCR. Uma foto falha é pulada. ZIP de texto fica na página de lote para TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Baixar Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'Solte várias fotos aqui (máx. 10). O processamento fica nesta aba.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'Adicione fotos primeiro.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'Este navegador não montou o Word. Tente um navegador atual.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'Não achou texto impresso. Pulada. Tente uma página mais nítida, não manuscrito.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'O motor de OCR não carregou. Atualize e clique em Converter tudo. Seções já feitas ainda baixam.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'Não deu para ler essa imagem. Use JPEG, PNG ou WebP. Pulada.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'Esta página lê fotos, não PDF. Esse arquivo não entrou.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'Mais de 12 MB. Comprima ou recorte antes. Pulada.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'No máximo 10 fotos. As extras não entraram.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'Carregar exemplo adiciona sample-1.jpg (ONLINEFREETOOLS e The quick brown fox) e sample-2.jpg (SAMPLE TWO e 印刷体样例), roda Converter tudo e libera Baixar Word com duas seções tituladas.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'Exemplo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'Não. As fotos ficam nesta aba. O motor e o script do Word vêm deste site; os arquivos não sobem para nossos servidores.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'Converter vários JPG em texto com OCR baixa um ZIP de TXT. Aqui montamos um Word editável, uma seção por foto. Mesmo motor, outro trabalho.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'Imagens para Word cola as fotos como figuras: você não seleciona as letras. Aqui o OCR escreve parágrafos que dá para editar. A foto original é opcional, para conferir.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'Não. Essa foto é pulada; o resto entra no mesmo Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'Cada foto ok é uma seção: o título é o nome do arquivo, depois a foto opcional, os parágrafos OCR e uma quebra de página. Colunas e tabelas não copiam o layout original.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'Não. Esta página não aceita PDF. Passar um PDF digitalizado para Word é outra ferramenta (não esta URL). PDF digital com camada de texto vai em Transformar PDF em documento Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'Letra de impressão funciona melhor. Letra cursiva costuma falhar nessa linha. Isto não é produto de manuscrito.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'Sim: JPEG, PNG e WebP compartilham a fila. Mesmo uma só foto baixa Word, não TXT. Para uma imagem só use Converter um JPG em texto com OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: 'Minhas fotos sobem para a nuvem?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: 'Qual a diferença de converter vários JPG em texto com OCR?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: 'Qual a diferença de Imagens para Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'Se uma foto falhar, o Word fica vazio?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'Como fica cada seção no Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'Posso soltar um PDF digitalizado para OCR em Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: 'Letra manuscrita funciona?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'Posso usar PNG, ou só um JPG?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'Transforme um monte de fotos impressas num Word editável: adicione as imagens, clique em Converter tudo (o motor carrega no primeiro clique e lê uma foto após a outra) e depois Baixar Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'Solte vários JPG, PNG ou WebP (ou escolha arquivos).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'Opcional: escolha um chip de idioma para o lote todo (chinês e inglês são o padrão).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'Clique em Converter tudo — a primeira vez carrega o motor OCR nesta aba e depois lê uma foto após a outra. Foto falha é pulada.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'Clique em Baixar Word — um documento com uma seção por foto (título, foto opcional, texto editável).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'Como funciona',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'Árabe',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'Inglês',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'Japonês',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'Idioma de reconhecimento do lote inteiro',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'Chinês',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'Chinês + inglês',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'Lado mais longo antes de ler (px)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'Padrão 2048. Menor alivia o celular.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'Ligado por padrão. Cada seção mostra a foto acima dos parágrafos OCR para conferir no Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'Incluir a foto original acima do texto',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'Até 10 fotos na fila. Se o lado mais longo passar do limite, reduz e lê na ordem visual. Um único worker de OCR corre em série. Linha falha é pulada; as boas viram seções de um só Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'Cada foto ok é uma seção do Word: Título 1 é o nome do arquivo, depois a foto opcional, parágrafos OCR e quebra de página. Isso é JPG para Word com OCR em lote, não um ZIP de TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'Os arquivos ficam no seu dispositivo; não sobem para um servidor. Os scripts vêm deste site.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'Manuscrito, muito desfoque e perspectiva forte costumam falhar nessa linha. Tabelas viram linhas na ordem de leitura. Colunas não copiam a página original.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'Sem PDF. O ZIP de TXT está em Converter vários JPG em texto com OCR. Fotos sem OCR, em Imagens para Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'O que esperar',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'Carregar exemplo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'Pronto',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'Na fila',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'Lendo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'Pulada',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'Pronto.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'Carregando o motor de OCR…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Montando o Word…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'Converter vários JPG em Word editável com OCR',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'Fotografe várias folhas de um panfleto e baixe um Word para retitular.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'Passe fotos de cardápio para um documento com a imagem acima de cada seção OCR para conferir.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'Junte capturas de erro num Word editável e mande para um colega.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'Para que serve',
};

export default pt;
