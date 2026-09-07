/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / pt).
 * H1 local: Converter várias páginas da web em PDF.
 * IG vs JPG: A4 retrato paginado para impressão, não captura de viewport.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Cole URLs públicas e transforme cada uma em PDF A4 retrato, fatiado para imprimir e ler página a página — não um JPEG infinito. Linhas com erro são puladas; as que deram certo vão para um ZIP. Cada endereço é buscado uma vez e não fica guardado. Prints para o chat ou comparar celular e desktop? Converter várias páginas da web em JPG.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Quadro oculto de captura',
	tool_batch_convert_web_pages_to_pdf_clear: 'Limpar',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Arquivo',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Converter tudo',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Guarde uma lista de URLs como PDFs A4 retrato para imprimir — ZIP; não é print de página.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Converter várias páginas da web em PDF: a lista sai em A4 retrato, para imprimir e folhear — não um JPEG alto. Passos: cole a lista, Converter tudo, Baixar ZIP. Exemplo: duas políticas viram dois PDFs. Cada URL é pedida uma vez e não é salva. HTML solto: Converter HTML para PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Baixar ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Cole pelo menos uma URL de página.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Esta página não virou PDF. Ignorada.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'A biblioteca de conversão não carregou. Atualize e tente de novo.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'No máximo 10 URLs. Linhas a mais não entraram.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Não foi possível carregar essa URL. Confira o endereço ou o site bloqueia a busca.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Essa linha não é uma URL http(s) válida. Ignorada.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Carregar exemplo preenche ajuda e política de example.com, gera dois PDFs A4 locais com quebra CSS (sem visitar o site) e ativa Baixar ZIP. Converter tudo busca os endereços que você colou. O CSS de impressão muda onde cada folha corta.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Exemplo',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'O papel é sempre A4 retrato. Páginas longas se partem com quebras CSS (e um fallback clássico). Não é uma folha infinita. Print longo: Converter várias páginas da web em JPG.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'A irmã JPG rasteriza um JPEG por URL em 1280 / 768 / 390, com qualidade e página inteira ou primeira tela. Aqui cada URL vira folhas A4 para imprimir. Mesma lista, outro artefato.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Esta página é lista de URLs: várias páginas públicas → PDFs A4 separados → ZIP. Para um HTML com prévia: Converter HTML para PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'A conversão roda nesta aba. Cada endereço vai ao servidor uma vez para buscar o HTML; não guardamos as páginas. O PDF nasce no dispositivo e o ZIP é montado aqui.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Cada linha ok vira um PDF separado no mesmo ZIP. Não juntamos — depois do download use Combinar arquivos em um PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'Não. Scripts saem. Login, paywall e apps em JavaScript quase nunca batem com o site ao vivo. O CSS de impressão também pode mover os cortes.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Qual o tamanho do papel? Vira uma página quilométrica?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Qual a diferença para Converter várias páginas da web em JPG?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Qual a diferença para Converter HTML para PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Minhas páginas são enviadas e guardadas no servidor?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'O resultado é um PDF só ou um ZIP com vários?',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'Uma página com login ou muito JavaScript fica igual ao site?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs na fila',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Cole as URLs públicas que você quer arquivar ou imprimir, converta em PDF A4 retrato e leve um ZIP das que deram certo.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Cole uma URL https por linha. Políticas, centrais de ajuda e docs públicos para imprimir caem bem.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Deixe a espera perto de 1 segundo, a menos que imagens saiam em branco numa folha A4.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Clique em Converter tudo. Cada URL pública é buscada uma vez e paginada em A4 retrato (quebras CSS podem cortar seções). Falhas são puladas.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'HTML com prévia? Converter HTML para PDF. Print no viewport em vez de papel? Converter várias páginas da web em JPG.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Baixe o ZIP quando pelo menos uma linha der certo. Carregar exemplo testa duas páginas A4 locais com quebra CSS.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'Para unir vários PDFs num caderno, baixe primeiro e use Combinar arquivos em um PDF.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Como funciona',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Progresso do lote',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s}s decorridos',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Buscar',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Imagens',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Uma URL http(s) por linha, no máximo 10. Saída é A4 retrato com quebras CSS, não um JPEG de página inteira. Conversão em série. Falhas puladas. PDFs ok vão para o ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Cada URL vai ao servidor uma vez para buscar HTML e não é armazenada. O PDF nasce nesta aba em A4 retrato.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'A paginação segue quebras CSS (com fallback clássico). O estilo de impressão pode diferir da tela. Páginas muito altas são limitadas para não derrubar a aba.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Rede privada, login e páginas inexistentes falham só aquela linha. Nomes repetidos no ZIP viram name (2).pdf. Scripts saem antes da captura.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Isto não rastreia o site inteiro nem é ferramenta de print. Cole as URLs públicas que você já tem.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'Perante Converter várias páginas da web em JPG: um JPEG no viewport. Perante Converter HTML para PDF: HTML colado. Perante Combinar arquivos em um PDF: aqui não há fusão.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Regras que você deve esperar',
	tool_batch_convert_web_pages_to_pdf_sample: 'Carregar exemplo',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Lote concluído — veja a tabela e baixe o ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Buscando o HTML…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF pronto',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Ignorado',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Esperando as imagens terminarem…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'Gerando o PDF… esta aba pode pausar por alguns segundos',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'Na fila',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Convertendo o lote…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} prontos · {skip} ignorados',
	tool_batch_convert_web_pages_to_pdf_title: 'Converter várias páginas da web em PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'Uma URL http(s) pública por linha, até 10. Buscamos cada página uma vez e reescrevemos CSS e imagens. Scripts saem; o resultado é A4 retrato com quebras CSS.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URLs da página (uma por linha)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Antes da reunião, arquive várias ajudas ou docs públicos como PDFs A4 imprimíveis, sem abrir Imprimir em cada aba.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Empacote políticas, termos ou avisos num ZIP para ler depois ou anexar no e-mail.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'HTML solto fica em Converter HTML para PDF. Prints de chat e contraste celular/desktop, em JPG. Aqui só o arquivo para impressão da lista de URLs.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Combina com',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Segundos a mais depois que as imagens começam a carregar em cada folha A4. O padrão é 1. Aumente se o PDF mostrar caixas vazias.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Espera de carga (s)',
};

export default pt;
