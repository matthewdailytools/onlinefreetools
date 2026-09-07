/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / pt).
 * H1: Converter várias páginas da web em JPG (não o calque Batch convert…).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'Configurações avançadas (opcional)',
	tool_batch_convert_web_pages_to_jpg_article:
		'Cole um endereço público por linha, capture cada página como JPEG na largura que escolher, pule as linhas que falharem e baixe um ZIP. Cada URL é buscada uma vez no servidor e não é guardada; a imagem nasce nesta aba. É um print, não um PDF A4.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'Só a primeira tela',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'Quadro oculto de captura',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'Página inteira',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'Captura',
	tool_batch_convert_web_pages_to_jpg_clear: 'Limpar',
	tool_batch_convert_web_pages_to_jpg_col_file: 'Arquivo',
	tool_batch_convert_web_pages_to_jpg_col_status: 'Status',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'Converter tudo',
	tool_batch_convert_web_pages_to_jpg_desc:
		'Converta várias páginas da web em JPG a partir de uma lista de URLs e baixe um ZIP. Cada endereço é buscado uma vez e não fica armazenado.',
	tool_batch_convert_web_pages_to_jpg_description:
		'Converter várias páginas da web em JPG a partir de uma lista de URLs (uma linha também vale). Escolha largura e qualidade JPEG, página inteira ou primeira tela, depois baixe um ZIP. Passos: colar URLs, Converter tudo, Baixar ZIP. Exemplo: duas páginas de ajuda viram dois JPEGs. Cada URL é pedida uma vez e não é salva.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'Baixar ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: 'Cole pelo menos uma URL de página.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'Esta página não pôde virar JPEG. Ignorada.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'Este navegador não conseguiu montar o ZIP. Tente um atual.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'A biblioteca de conversão não carregou. Atualize e tente de novo.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'No máximo 10 URLs. As linhas a mais não entraram.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'Não deu para carregar essa URL. Confira o endereço ou o site bloqueia a busca.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'Essa linha não é uma URL http(s) válida. Ignorada.',
	tool_batch_convert_web_pages_to_jpg_example:
		'Carregar exemplo preenche duas URLs de example.com, monta dois JPEGs com HTML local (sem visitar o site ao vivo) e ativa Baixar ZIP. Converter tudo busca os endereços que você colou. Viewport, qualidade e página inteira vs primeira tela mudam os pixels.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'Exemplo',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'A conversão acontece nesta aba. Ao converter uma lista mandamos cada endereço ao servidor uma vez para trazer o HTML; não guardamos as páginas. Os JPEGs nascem no seu aparelho e aqui viram ZIP.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'A irmã em PDF pagina em A4 para ler e imprimir. Esta página rasteriza um JPEG por URL na largura que você escolhe (desktop 1280, tablet 768 ou celular 390), com qualidade e página inteira ou primeira tela. Mesma lista, outro arquivo.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF para JPG começa de um arquivo PDF que você envia. Aqui o ponto de partida são URLs de páginas. Se já tem PDFs, use PDF para JPG; se tem uma lista de links, use esta página.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'Não. Os scripts são removidos. Muros de login, paywalls e apps pesadas em JavaScript quase nunca batem com o site ao vivo. O CSS responsivo segue a largura de viewport que você escolheu.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'Cada linha ok vira um JPEG separado dentro de um ZIP. Uma URL só também funciona. Aqui as imagens não são fundidas num arquivo só.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'A largura do viewport muda o layout (celular vs desktop). A qualidade JPEG equilibra tamanho e artefatos. Página inteira captura a altura de rolagem (com teto para não derrubar a aba); primeira tela fica mais ou menos um viewport.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'Minhas páginas são enviadas e guardadas no servidor?',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'Qual a diferença de Converter várias páginas da web em PDF?',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'Qual a diferença de PDF para JPG?',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'Um site com login ou muito JavaScript vai ficar igual ao vivo?',
	tool_batch_convert_web_pages_to_jpg_faq_q5: 'Sai um JPG só ou um ZIP? Dá para converter uma URL só?',
	tool_batch_convert_web_pages_to_jpg_faq_q6: 'O que mudam o viewport, a qualidade JPEG e a primeira tela?',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} URLs na fila',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'Cole a lista de páginas públicas, clique em Converter tudo (desktop 1280, JPEG 85 %, página inteira por padrão) e leve um ZIP das que deram certo.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'Cole uma URL https por linha (central de ajuda ou tickets caem bem). Uma linha basta para URL em JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'Clique em Converter tudo. Padrão: desktop 1280, JPEG 85 % e página inteira. Cada URL pública é buscada uma vez; linhas com falha são puladas.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'Precisa de celular, só a primeira tela, ou mais espera se as fotos saírem em branco? Abra Configurações avançadas para viewport, qualidade JPEG, recorte e espera de carga.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: 'Precisa de A4 imprimível em vez de prints? Use Converter várias páginas da web em PDF. Já tem um PDF? Use PDF para JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'Baixe o ZIP quando pelo menos uma linha der certo.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'Carregar exemplo testa duas páginas locais; o painel de progresso aparece enquanto convertem.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'Como funciona',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '{s}s decorridos',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'Busca',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'Imagens',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'Progresso do lote',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'A largura do viewport muda o layout. A qualidade JPEG muda o tamanho. Página inteira é um print alto; primeira tela tem mais ou menos um viewport.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'Qualidade JPEG',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'Uma URL http(s) por linha, até 10. Conversão em série. Linhas com falha são puladas. JPEGs ok vão para um ZIP. Viewport, qualidade e modo de captura mudam os pixels: não é PDF com outra extensão.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'Cada URL vai ao servidor uma vez para buscar o HTML e não é guardada. O JPEG é montado nesta aba.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'Redes privadas, logins e páginas ausentes falham aquela linha. O resto do lote segue.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'Nomes ZIP repetidos viram name (2).jpg. Scripts e armadilhas noscript de refresh saem. Homepages muito altas são limitadas para não derrubar a aba.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'Isto não é um rastreador de site inteiro. Cole as URLs que você já tem.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'Perante Converter várias páginas da web em PDF: sem paginação A4. Perante PDF para JPG: a entrada é uma lista de URLs, não um PDF. Perante conversores de foto: a entrada é uma página, não um arquivo local.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'Regras que você deve esperar',
	tool_batch_convert_web_pages_to_jpg_sample: 'Carregar exemplo',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'Gerando JPEG… esta aba pode pausar alguns segundos',
	tool_batch_convert_web_pages_to_jpg_status_done: 'Lote terminado — confira a tabela e baixe o ZIP.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'Buscando o HTML da página…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG pronto',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'Na fila',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'Ignorada',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'Esperando as imagens terminarem…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'Convertendo o lote…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} prontas · {skip} ignoradas',
	tool_batch_convert_web_pages_to_jpg_title: 'Converter várias páginas da web em JPG',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'Uma URL http(s) pública por linha, até 10. Buscamos cada página uma vez e reescrevemos CSS e imagens. Scripts saem antes da captura.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'URLs da página (uma por linha)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'Jogue várias URLs de ajuda ou tickets e tire prints JPEG para o chat sem abrir cada aba.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'Capture a mesma página pública em 390 (celular) e 1280 (desktop) para comparar a primeira tela antes da revisão.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'Deixe PDFs A4 de arquivo em Converter várias páginas da web em PDF; use esta página quando precisar de imagens a partir de uma lista de URLs.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'Encaixes bons',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'Largura da tela',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'Celular 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'Segundos extras depois que as imagens começam a carregar. O padrão é 1. Suba se o JPEG mostrar caixas vazias.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'Espera de carga (s)',
};

export default pt;
