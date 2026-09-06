/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / pt).
 * H1 local: Converter várias páginas da web em PDF.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Cole um endereço público por linha, converta cada página em PDF A4 nesta aba, pule as linhas que falharem e baixe um ZIP. Cada URL é buscada uma vez no servidor e não é guardada; a conversão fica no seu dispositivo.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Quadro oculto de captura',
	tool_batch_convert_web_pages_to_pdf_clear: 'Limpar',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Arquivo',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Converter tudo',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Converta várias páginas da web em PDF a partir de uma lista de URLs e baixe um ZIP; cada endereço é buscado uma vez e não fica armazenado.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Converter várias páginas da web em PDF: cole uma URL https por linha (até 10), gere um PDF A4 nesta aba, pule falhas e baixe um ZIP. Passos: cole a lista, clique em Converter tudo, veja a tabela, baixe. Exemplo: duas páginas de ajuda e política de amostra viram dois PDFs num ZIP. Cada URL é pedida uma vez ao servidor e não é salva; a conversão permanece no dispositivo. Se só tiver um trecho HTML, use Converter HTML em PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Baixar ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Cole pelo menos uma URL de página.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Esta página não virou PDF. Ignorada.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'A biblioteca de conversão não carregou. Atualize e tente de novo.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'No máximo 10 URLs. Linhas a mais não entraram.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Não foi possível carregar essa URL. Confira o endereço ou o site bloqueia a busca.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Essa linha não é uma URL http(s) válida. Ignorada.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Carregar exemplo preenche duas URLs de example.com, gera dois PDFs com HTML local (sem visitar o site ao vivo) e ativa Baixar ZIP. Converter tudo busca os endereços que você colou.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Exemplo',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'A conversão roda nesta aba. Ao converter uma lista, enviamos cada endereço ao servidor uma vez para buscar o HTML; não guardamos as páginas. Os PDFs nascem no seu dispositivo e o ZIP é montado aqui.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Esta página é para lista de URLs (várias páginas em PDF e depois ZIP). Para um HTML só ou um endereço com editor de prévia, use Converter HTML em PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Não. Scripts são removidos. Login, paywall e apps em JavaScript quase nunca batem com o site ao vivo. O CSS de impressão também pode diferir.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Cada linha ok vira um PDF separado no mesmo ZIP. Aqui não juntamos num arquivo só — depois do download use Combinar arquivos em um PDF se precisar.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Até 10 URLs http(s). O restante é ignorado. Linhas com erro são puladas para o lote continuar.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Minhas páginas são enviadas e guardadas no servidor?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Qual a diferença para Converter HTML em PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Uma página com login ou muito JavaScript fica igual ao site?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'O resultado é um PDF só ou um ZIP com vários?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Quantas URLs posso converter de uma vez?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs na fila',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Cole a lista de páginas públicas, converta uma após a outra e leve um ZIP com os PDFs que deram certo.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Cole uma URL https por linha (central de ajuda ou políticas caem bem).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Deixe a espera perto de 1 segundo, a menos que as imagens saiam em branco no PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Clique em Converter tudo. Cada URL pública é buscada uma vez; falhas são puladas.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Só um trecho HTML, sem lista? Use Converter HTML em PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Baixe o ZIP quando pelo menos uma linha der certo. Clique em Carregar exemplo para duas páginas locais; o painel de progresso aparece na conversão.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Como funciona',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Progresso do lote',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s}s decorridos',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Buscar',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Imagens',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Uma URL http(s) por linha, no máximo 10. Conversão em série. Falhas puladas. PDFs ok vão para o ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Cada URL vai ao servidor uma vez para buscar HTML e não é armazenada. O PDF nasce nesta aba.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Rede privada, login e páginas inexistentes falham só aquela linha. O resto segue.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Nomes repetidos no ZIP viram name (2).pdf. Scripts saem antes da captura.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Isto não rastreia o site inteiro. Cole as URLs que você já tem.',
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
		'Uma URL http(s) pública por linha, até 10. Buscamos cada página uma vez e reescrevemos CSS e imagens. Scripts saem antes do PDF.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URLs da página (uma por linha)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Guardar várias páginas de ajuda ou docs em PDF sem abrir cada uma.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Arquivar uma lista de URLs de políticas públicas num ZIP para ler depois.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'HTML solto fica em Converter HTML em PDF; use esta página quando já tiver muitos links.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Combina com',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Segundos a mais depois que as imagens começam a carregar. O padrão é 1. Aumente se o PDF mostrar caixas vazias.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Espera de carga (s)',
};

export default pt;
