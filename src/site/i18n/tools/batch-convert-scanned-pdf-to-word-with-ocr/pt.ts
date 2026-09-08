/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / pt).
 * H1 local: Converter PDFs digitalizados em Word com OCR.
 * Chaves iguais às de en.ts; valores reescritos em português (não calco do inglês).
 */
import type { SiteLangDict } from '../../../types';

/** Dicionário da ferramenta em português: botões, FAQ, regras e cartão da home. */
const pt: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'Ajustes avançados (opcional)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'Uma fila de PDFs digitalizados vira Word: solte os arquivos, Converter tudo, Baixar Word. O padrão é um Word para o lote inteiro; dá para mudar para um Word por PDF (vários acertos viram Baixar ZIP). Cada PDF vira um título; cada página lida vira parágrafos que dá para editar. A imagem da página entra por padrão para conferir. Página embaçada é pulada e o resto fica no mesmo documento. Os arquivos ficam no dispositivo, sem enviar ao servidor. PDF digital com camada de texto: Transformar PDF em documento Word. Fotos: Converter vários JPG em Word editável com OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'Escolher arquivos PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'Limpar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'Arquivo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'Notas',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'Páginas',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'Status',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'Converter tudo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} arquivos (máx. 5, 20 páginas)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'Converter PDFs digitalizados em Word com OCR: enfileire, Converter tudo, Baixar Word — ficam no dispositivo, sem enviar ao servidor.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'PDF digitalizado para Word nesta aba: cada página é desenhada, lida e junta num DOCX que você edita. Passos: incluir PDFs, Converter tudo, Baixar Word. Exemplo: um PDF impresso de duas páginas vira um Word com título e imagens opcionais. Também se busca OCR de PDF para Word, vários PDFs para Word e digitalizar para Word. Os arquivos ficam no dispositivo, sem enviar ao servidor. Camada de texto pronta vai em Transformar PDF em documento Word. Fotos vão em Converter vários JPG em Word editável com OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Baixar Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'Baixar ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'Solte PDFs digitalizados aqui (máx. 5 arquivos, 20 páginas). O processamento fica nesta aba.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'Inclua PDFs digitalizados primeiro.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'Este navegador não montou o Word. Tente um atual.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'Não achou texto impresso nessa página. Pulada. Use um scan mais nítido, não rascunho à mão.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'Esse PDF tem senha. Não entrou na fila.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'O desenho do PDF ou o OCR não carregou. Atualize e clique Converter tudo. Páginas já lidas ainda baixam.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'Aqui entram PDFs digitalizados, não fotos. JPG, PNG ou WebP vão em Converter vários JPG em Word editável com OCR. Esse arquivo não entrou.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'Não deu para ler esse PDF. Pulado.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'O visualizador de PDF não carregou nesta aba. Atualize e tente de novo.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'Passa de 12 MB. Comprima antes. Esse arquivo não entrou.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'No máximo 5 PDFs. Os extras não entraram.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: 'O lote lê no máximo 20 páginas. Arquivos a mais não entraram.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'Carregar exemplo coloca sample-scan.pdf (página 1: ONLINEFREETOOLS e The quick brown fox; página 2: SAMPLE TWO e Printed sample page), dispara Converter tudo e libera Baixar Word com um título e duas páginas.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'Exemplo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'Não. Os PDFs ficam nesta aba. Scripts de desenho, OCR e montagem do Word vêm deste site; nada sobe para os nossos servidores.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'Transformar PDF em documento Word copia a camada de texto que já existe e não faz OCR. Aqui cada página vira imagem e essa imagem é lida, então um scan sem texto selecionável ainda vira parágrafos. Se você já marca palavras, use aquela ferramenta.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'Converter vários JPG em Word editável com OCR é fila de fotos. Aqui só PDF. JPG solto é recusado de propósito.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'Não. A página que falhou é pulada; as outras páginas e os outros PDFs entram no mesmo Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'No modo padrão «um Word para o lote», cada PDF ok vira um título (nome do arquivo). Cada página ok: imagem opcional, parágrafos OCR, quebra de página. Quer documentos soltos? Troque para um Word por PDF. Tabelas e colunas não copiam o layout original.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'Não. Fotos vão em Converter vários JPG em Word editável com OCR. Esta zona só aceita PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'Letra impressa funciona melhor. Cursiva manuscrita costuma falhar nessa página. Isto não é produto de caligrafia.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'A saída é Word, não TXT e não um PDF pesquisável regravado. Quem busca PDF digitalizado para Word, digitalizar para Word ou OCR de PDF para Word de um scan está no lugar certo. Despejo de camada de texto: Extrair texto de um PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'Até 5 PDFs, 12 MB cada, 20 páginas no lote. Um único PDF também usa Converter tudo e Baixar Word; não há outro endereço para arquivo avulso.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'Dá. Marque um Word por PDF e clique Converter tudo. Um PDF bem-sucedido ainda usa Baixar Word. Dois ou mais usam Baixar ZIP, com um .docx por arquivo de entrada. Juntar num Word só continua sendo o padrão.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'Os PDFs saem do meu computador?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'Meu PDF já deixa selecionar palavras. É o Transformar PDF em documento Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'Tenho fotos JPG, não PDF. Qual ferramenta?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'Uma página falhou. O Word inteiro some?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'O que vem dentro do Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'Posso soltar JPG aqui?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: 'Manuscrito entra no OCR daqui?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'Isto gera TXT ou um PDF pesquisável, ou só Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'Qual o teto de arquivos e páginas?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'Dá para sair um Word por PDF, sem juntar tudo?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'Scan de papel vira Word editável: inclua os PDFs, clique Converter tudo (na primeira vez o desenho e o OCR carregam nesta aba, página a página) e depois Baixar Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'Solte um ou mais PDFs digitalizados (ou escolha arquivos).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: 'Opcional: escolha um chip de idioma para o lote inteiro (chinês e inglês por padrão).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'Opcional: deixe um Word para o lote, ou escolha um Word por PDF (vários PDFs ok → Baixar ZIP).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'Clique Converter tudo — a primeira vez carrega o desenho do PDF e o OCR nesta aba, depois lê uma página após a outra. Página falha é pulada.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'Clique Baixar Word — ou Baixar ZIP se marcou um Word por PDF e mais de um arquivo deu certo.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'Como usar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '{s}s decorridos',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'Atualize e clique Converter tudo. Páginas já lidas ainda baixam.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'A conversão parou',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'Pronto. Próximo passo: Baixar Word, ou Baixar ZIP se marcou um Word por PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'Carregar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'Montar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'Ler',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'Desenhar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'Andamento da conversão',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'Começando…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'Árabe',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'Inglês',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'Japonês',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'Idioma de reconhecimento do lote inteiro',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'Chinês',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'Chinês + inglês',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'Lado mais longo antes de ler (px)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'Padrão 2048. Menor alivia o celular.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'Padrão: um Word só. Um Word por PDF: Baixar Word se um der certo; Baixar ZIP se vários derem certo.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Saída em Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'Um Word para o lote inteiro',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'Um Word para cada PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'Ligado por padrão. Cada página do Word mostra o scan acima dos parágrafos OCR para conferir.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'Incluir a imagem da página acima do texto',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · página {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'Entram até 5 PDFs e 20 páginas. Cada página é desenhada, reduzida se o lado longo passar do limite e lida na ordem visual. Um único OCR corre em série. Página falha é pulada. A saída é um Word mesclado ou um Word por PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'Padrão: um Word, título por PDF, imagem opcional e parágrafos OCR por página, depois quebra. Um Word por PDF: cada entrada ok vira o próprio .docx; vários arquivos baixam num ZIP. Não é ZIP de TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'Os arquivos ficam no dispositivo; não sobem para um servidor. Os scripts vêm deste site.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'Letra à mão, desfoque forte e perspectiva marcada costumam falhar nessa página. Tabelas viram linhas na ordem de leitura. Colunas não copiam o original. Um PDF digital com camada de texto também é rasterizado aqui; use Transformar PDF em documento Word se só quiser essa camada.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'Sem foto. Pilhas de JPG vão em Converter vários JPG em Word editável com OCR. Não grava PDF pesquisável e não baixa TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'O que esperar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'Carregar exemplo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'Pronto',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'Na fila',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'Lendo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'Desenhando',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'Pulada',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'Em andamento',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'Pronto.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: 'Carregando desenho do PDF e OCR…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Montando o Word…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'Converter PDFs digitalizados em Word com OCR',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'Jogue na fila o PDF digitalizado da aula e baixe um Word para retitular trechos.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'Una dois contratos digitalizados num documento de conferência, com a imagem de cada página acima do OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'Passe um scan de fatura de várias páginas para Word e mande a um colega editar (campos de fatura não são extraídos).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'Onde encaixa',
};

export default pt;
