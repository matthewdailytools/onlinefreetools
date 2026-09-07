/**
 * i18n tool shard (batch-convert-web-pages-to-png / pt).
 * H1: Converter várias páginas web para PNG. IG vs JPG: PNG sem perda, borda de 1 px nítida, fundo transparente opcional, 1×/2× — não qualidade JPEG, não A4.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'Ajustes avançados (opcional)',
	tool_batch_convert_web_pages_to_png_article:
		'Cada URL pública vira um PNG sem perda na largura escolhida (desktop 1280, tablet 768 ou telefone 390). Fundo branco ou transparente, 1× ou 2×, e um ZIP das linhas que deram certo. Serve para print de interface nítida — não é JPEG de chat nem PDF A4. Cada endereço é buscado uma vez (HTML) e não fica armazenado. A conversão acontece nesta aba. Arquivo menor para enviar: Converter várias páginas da web em JPG.',
	tool_batch_convert_web_pages_to_png_bg_label: 'Fundo',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'Transparente',
	tool_batch_convert_web_pages_to_png_bg_white: 'Branco',
	tool_batch_convert_web_pages_to_png_capture_first: 'Primeira tela',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'Moldura oculta de captura',
	tool_batch_convert_web_pages_to_png_capture_full: 'Página inteira',
	tool_batch_convert_web_pages_to_png_capture_label: 'Alcance da captura',
	tool_batch_convert_web_pages_to_png_clear: 'Limpar',
	tool_batch_convert_web_pages_to_png_col_file: 'Arquivo',
	tool_batch_convert_web_pages_to_png_col_status: 'Status',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'Converter tudo',
	tool_batch_convert_web_pages_to_png_desc:
		'Lista de URL em PNG sem perda (fundo transparente e 2× opcionais) e ZIP. Não é JPEG nem A4.',
	tool_batch_convert_web_pages_to_png_description:
		'Converter várias páginas web para PNG: capturas sem perda e ZIP a partir de uma lista de URL. Branco ou transparente, 1× ou 2×. Passos: cole URLs, Converter tudo, Baixar ZIP. Exemplo: dois kits de UI saem nítidos. Uma linha basta para captura de página em PNG. Busca uma vez, não guarda; conversão nesta aba.',
	tool_batch_convert_web_pages_to_png_download_zip: 'Baixar ZIP',
	tool_batch_convert_web_pages_to_png_empty: 'Cole primeiro pelo menos uma URL pública.',
	tool_batch_convert_web_pages_to_png_err_convert: 'Este endereço não virou PNG. Pulado.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'Este navegador não montou o ZIP. Tente um navegador atual.',
	tool_batch_convert_web_pages_to_png_err_load: 'A biblioteca de conversão não carregou. Atualize e tente de novo.',
	tool_batch_convert_web_pages_to_png_err_too_many: 'No máximo 10 URLs. Linhas a mais não foram incluídas.',
	tool_batch_convert_web_pages_to_png_err_url: 'Não foi possível carregar essa URL. Confira o endereço ou o site bloqueia a busca.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'Essa linha não é uma URL http(s) válida. Pulada.',
	tool_batch_convert_web_pages_to_png_example:
		'Carregar exemplo preenche um kit de componentes e um overlay translúcido, gera dois PNG nesta aba (borda de 1 px nítida; fundo transparente preserva o alfa) sem buscar o site ao vivo, e libera Baixar ZIP. Converter tudo busca as URLs coladas. Largura, fundo, escala e página inteira vs primeira tela mudam os pixels.',
	tool_batch_convert_web_pages_to_png_example_title: 'Exemplo',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'Converter várias páginas da web em JPG gera JPEG com perda (controle de qualidade) para chat e tickets. Aqui o arquivo é PNG sem perda: texto e borda de 1 px nítidos, PNG transparente opcional e escala 1×/2×. Mesma lista de URL, outro artefato — sem slider JPEG.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'Transparente só aparece onde o HTML tem alfa ou não pinta o fundo. Uma home branca continua branca. 2× dobra os pixels (revisão retina) e aumenta o arquivo. Um bloco de cor sólida não vira tabuleiro.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'A conversão roda nesta aba. Se você converter uma lista, enviamos cada endereço uma vez ao nosso servidor para buscar o HTML; não armazenamos as páginas. Os PNG nascem no seu navegador e o ZIP é montado aqui, sem enviar o resultado a um servidor para guardar.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'Linhas ok viram PNG separados num único ZIP. Uma URL também vale (captura de página em PNG / URL para PNG sem perda): cole uma linha. Não juntamos várias imagens num arquivo só.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'Converter várias páginas da web em PDF pagina em A4 para leitura e impressão. Aqui é um PNG raster por URL. Precisa imprimir? Use a ferramenta PDF.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'Não. Scripts são removidos. Muros de login, paywalls e apps desenhados em JavaScript quase nunca batem com a vista autenticada. O CSS responsivo segue a largura escolhida.',
	tool_batch_convert_web_pages_to_png_faq_q1: 'Qual a diferença para Converter várias páginas da web em JPG?',
	tool_batch_convert_web_pages_to_png_faq_q2: 'Quando o fundo transparente aparece e o que o 2× muda?',
	tool_batch_convert_web_pages_to_png_faq_q3: 'Minhas páginas são enviadas e guardadas num servidor?',
	tool_batch_convert_web_pages_to_png_faq_q4: 'O resultado é um PNG ou um ZIP? Dá para converter uma URL só?',
	tool_batch_convert_web_pages_to_png_faq_q5: 'E em relação a Converter várias páginas da web em PDF?',
	tool_batch_convert_web_pages_to_png_faq_q6: 'Um site com login ou muito JavaScript fica igual ao ao vivo?',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} URLs na fila',
	tool_batch_convert_web_pages_to_png_how_body:
		'Cole os prints de kit de componentes que você quer nítidos, clique Converter tudo (padrão: desktop 1280, fundo branco, 1×, página inteira) e baixe o ZIP dos PNG que deram certo.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'Uma URL https por linha (kits de componentes e docs de UI públicas encaixam bem). Uma linha basta para captura de página em PNG.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'Clique Converter tudo. Padrão: desktop 1280, branco, 1×, página inteira. Cada URL pública é buscada uma vez; linhas com falha são puladas.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'Quer fundo transparente, 2×, largura de telefone ou só a primeira tela? Abra Ajustes avançados (opcional) para vista, fundo, escala, alcance e espera de carga.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'JPEG menor para o chat: Converter várias páginas da web em JPG. A4 imprimível: Converter várias páginas da web em PDF. Fotos já no dispositivo: Converter imagens para PNG em lote.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'Com pelo menos uma linha ok, clique Baixar ZIP.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'Carregar exemplo testa duas interfaces locais; o painel de progresso aparece durante a conversão.',
	tool_batch_convert_web_pages_to_png_how_title: 'Como usar',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '{s}s decorridos',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'Buscar',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'Imagens',
	tool_batch_convert_web_pages_to_png_hud_title: 'Progresso do lote',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'A largura da vista muda o layout. Fundo transparente guarda o alfa. 2× dobra pixels. Página inteira é um print alto; primeira tela tem cerca de uma altura de vista.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'Uma URL http(s) por linha, até 10. Conversão em série. Falhas pulam. PNG ok vão para o ZIP. Fundo e escala mudam os pixels — não é JPEG renomeado nem exportação PDF.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'Cada URL vai uma vez ao nosso servidor para buscar HTML e não é armazenada. O PNG é gerado nesta aba.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'Redes privadas, logins e endereços inexistentes falham só essa linha. O resto do lote segue.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'Nomes duplicados no ZIP viram name (2).png. Scripts e armadilhas noscript de recarga são removidos. Capturas muito altas têm teto para não derrubar a aba.',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'Não é um crawler de site inteiro. Cole as URLs que você já tem.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'Em relação ao lote JPG: PNG sem perda, sem controle JPEG, fundo transparente opcional. Em relação ao lote PDF: sem paginar A4. Em relação a Converter imagens para PNG em lote: a entrada é URL da web, não foto no dispositivo.',
	tool_batch_convert_web_pages_to_png_rules_title: 'Regras esperadas',
	tool_batch_convert_web_pages_to_png_sample: 'Carregar exemplo',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2× (retina)',
	tool_batch_convert_web_pages_to_png_scale_label: 'Escala de pixels',
	tool_batch_convert_web_pages_to_png_status_converting: 'Renderizando PNG… esta aba pode pausar alguns segundos',
	tool_batch_convert_web_pages_to_png_status_done: 'Lote concluído — veja a tabela e baixe o ZIP.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'Buscando o HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG pronto',
	tool_batch_convert_web_pages_to_png_status_queued: 'Na fila',
	tool_batch_convert_web_pages_to_png_status_skip: 'Pulado',
	tool_batch_convert_web_pages_to_png_status_waiting: 'Esperando as imagens terminarem…',
	tool_batch_convert_web_pages_to_png_status_working: 'Convertendo o lote…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} prontos · {skip} pulados',
	tool_batch_convert_web_pages_to_png_title: 'Converter várias páginas web para PNG',
	tool_batch_convert_web_pages_to_png_url_hint:
		'Uma URL http(s) pública por linha, até 10. Buscamos uma vez e reescrevemos CSS/imagens. Scripts saem antes da captura. O layout segue a largura da vista.',
	tool_batch_convert_web_pages_to_png_url_label: 'URLs (uma por linha)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'Guardar um kit de componentes como PNG nítido: rótulos e borda de 1 px continuam legíveis. JPEG borra as arestas.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'Exportar um painel flutuante com PNG transparente e soltar no Figma. Home branca sólida continua opaca.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'Deixe o JPEG de chat em Converter várias páginas da web em JPG e o A4 em Converter várias páginas da web em PDF; use isto quando precisar de raster de UI sem perda.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'Onde encaixa',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'Largura da vista',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'Telefone 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'Segundos extras depois que as imagens remotas começam a carregar. Padrão 1. Aumente se o PNG mostrar caixas vazias.',
	tool_batch_convert_web_pages_to_png_wait_label: 'Espera de carga (s)',
};

export default pt;
