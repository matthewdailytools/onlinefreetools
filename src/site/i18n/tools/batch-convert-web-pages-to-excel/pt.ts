/**
 * i18n tool shard (batch-convert-web-pages-to-excel / pt).
 * H1: Converter páginas web em Excel em lote.
 * IG: células de <table> HTML num único livro — não captura, não PDF A4, não prosa Word.
 */
import type { SiteLangDict } from '../../../types';

/** Textos visíveis do conversor web→Excel (pt). */
const pt: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'Configurações avançadas (opcional)',
	tool_batch_convert_web_pages_to_excel_article:
		'Tire tabelas HTML de uma lista de URLs públicas para um livro Excel: cada tabela vira uma planilha com células que dá para filtrar. Texto corrido e capturas ficam de fora. Não é PDF A4 nem documento Word. Cada endereço é buscado uma vez no servidor e não é guardado. O HTML colado fica nesta aba. Impressão: Converter páginas web em PDF em lote. Títulos editáveis: Converter páginas HTML em um documento Word.',
	tool_batch_convert_web_pages_to_excel_clear: 'Limpar',
	tool_batch_convert_web_pages_to_excel_col_file: 'Planilhas',
	tool_batch_convert_web_pages_to_excel_col_status: 'Status',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'Converter tudo',
	tool_batch_convert_web_pages_to_excel_desc:
		'Extraia tabelas HTML de uma lista de URLs para um livro Excel — não é captura, PDF nem Word.',
	tool_batch_convert_web_pages_to_excel_description:
		'Converter páginas web em Excel em lote: extraia tabelas HTML para um .xlsx (HTML para Excel / tabela HTML para Excel). Não é captura nem PDF A4. Passos: colar URLs, Converter tudo, Baixar Excel. Exemplo: lista de preços e estoque viram duas planilhas. A URL é buscada uma vez e não é armazenada.',
	tool_batch_convert_web_pages_to_excel_download: 'Baixar Excel',
	tool_batch_convert_web_pages_to_excel_empty: 'Cole pelo menos uma URL, ou mude para Colar HTML.',
	tool_batch_convert_web_pages_to_excel_err_convert: 'Essa página não tem tabela HTML usável. Ignorada.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'Cole primeiro HTML que tenha um <table>.',
	tool_batch_convert_web_pages_to_excel_err_load: 'A biblioteca Excel não carregou. Atualize e tente de novo.',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'No máximo 10 URLs. As linhas a mais não entraram.',
	tool_batch_convert_web_pages_to_excel_err_url: 'Não foi possível carregar essa URL. Confira o endereço ou o site bloqueia a busca.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'Essa linha não é uma URL http(s) válida. Ignorada.',
	tool_batch_convert_web_pages_to_excel_example:
		'Carregar exemplo preenche uma lista de preços e um estoque, monta um livro local com duas tabelas HTML (sem visitar o site ao vivo) e libera Baixar Excel. Converter tudo busca os endereços que você colou. Colar HTML é o mesmo mapeamento de tabelas sem URL.',
	tool_batch_convert_web_pages_to_excel_example_title: 'Exemplo',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'O HTML colado não sai desta aba. Se você converter URLs, enviamos cada endereço uma vez para buscar o HTML e não guardamos. O .xlsx é montado no seu navegador.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'A página Word mapeia títulos, listas e parágrafos para um .docx editável. Esta ignora a prosa e só copia células de tabelas HTML para planilhas Excel. Mesma busca, outro arquivo.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG são capturas de viewport (ZIP de imagens). PDF pagina A4 para imprimir. Aqui saem números e texto que você filtra no Excel: um livro, não um ZIP de fotos.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'Sim. Uma linha basta para página web para Excel. URLs que deram certo compartilham um .xlsx com várias planilhas.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'Não. Não há OCR nem leitor de PDF. Converta a página HTML ou cole a marcação da tabela. Se já tem CSV, use CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'Use a aba Colar HTML (HTML para Excel / tabela HTML para Excel). Página completa do Chrome / .mhtml fica de fora: exporte HTML ou copie a tabela. Isto não é Excel na web.',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'Minhas páginas são enviadas e guardadas?',
	tool_batch_convert_web_pages_to_excel_faq_q2: 'Qual a diferença para Converter páginas HTML em um documento Word?',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'E em relação a JPG, PNG ou PDF em lote?',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'Posso converter uma URL só?',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'Vocês extraem tabelas de um PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'Tenho HTML ou uma tabela HTML, não uma URL. E Excel online ou mhtml?',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} URLs na fila',
	tool_batch_convert_web_pages_to_excel_how_body:
		'Cole URLs públicas com tabelas HTML, clique em Converter tudo e baixe um livro Excel. O texto corrido é pulado; só células <table> viram planilhas.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'Uma URL https por linha (listas de preço e tabelas HTML públicas encaixam). Uma linha basta para página web para Excel.',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'Clique em Converter tudo. Cada URL pública é buscada uma vez; páginas sem tabela usável são ignoradas e o resto segue.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'Tem a marcação e não a URL (HTML para Excel / tabela HTML para Excel)? Abra Colar HTML, cole o código e Converter tudo.',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'Quer uma planilha por URL em vez de por tabela, ou manter tabelas minúsculas? Abra Configurações avançadas.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'PDF A4? Converter páginas web em PDF em lote. Títulos? Converter páginas HTML em um documento Word. Já tem CSV? CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'Baixar Excel quando pelo menos uma tabela tiver sido mapeada.',
	tool_batch_convert_web_pages_to_excel_how_title: 'Como usar',
	tool_batch_convert_web_pages_to_excel_html_hint: 'Cole um trecho ou um HTML completo com <table>. O mapeamento fica nesta aba; nada é enviado.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML com tabelas',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>Qtd</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'Planilhas',
	tool_batch_convert_web_pages_to_excel_layout_table: 'Uma planilha por tabela HTML',
	tool_batch_convert_web_pages_to_excel_layout_url: 'Uma planilha por URL (empilhar tabelas)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'O padrão é uma planilha por tabela HTML num único livro. Empilhar coloca todas as tabelas de uma URL numa planilha com uma linha vazia entre elas. Tabelas minúsculas (menos de duas linhas ou duas colunas) são ignoradas para menus não lotarem o arquivo.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'Só células de <table> HTML são copiadas. Uma URL http(s) por linha, até 10. Linhas com falha são ignoradas. Tabelas boas compartilham um .xlsx. Não é captura com outro sufixo nem exportação PDF.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'Cada URL é enviada uma vez para buscar HTML e não é guardada. O HTML colado não sai da aba. O livro é montado aqui.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'Redes privadas, login e páginas sem <table> falham nessa linha. O resto segue.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan insere células vazias. rowspan é achatado (cada linha é independente). Scripts são removidos, então tabela só-JS sai vazia.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'Não é crawler do site inteiro nem Excel na web. Cole as URLs ou o HTML que você já tem. Nomes de planilha cortam em 31 caracteres.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'Perante Converter páginas HTML em Word: só tabelas, não títulos/listas. Perante JPG/PNG/PDF em lote: células num livro, não ZIP de rasters nem A4. Perante CSV ↔ JSON: a entrada é uma página, não um arquivo que você já tem.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'Regras e limites',
	tool_batch_convert_web_pages_to_excel_sample: 'Carregar exemplo',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'Ignorar tabelas minúsculas (menos de 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'Mapeando tabelas HTML…',
	tool_batch_convert_web_pages_to_excel_status_done: 'Lote concluído — veja a tabela e baixe o Excel.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'Buscando o HTML da página…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'Tabelas mapeadas',
	tool_batch_convert_web_pages_to_excel_status_queued: 'Na fila',
	tool_batch_convert_web_pages_to_excel_status_skip: 'Ignorada',
	tool_batch_convert_web_pages_to_excel_status_working: 'Convertendo o lote…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} prontas · {skip} ignoradas',
	tool_batch_convert_web_pages_to_excel_tab_html: 'Colar HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'URLs da página',
	tool_batch_convert_web_pages_to_excel_title: 'Converter páginas web em Excel em lote',
	tool_batch_convert_web_pages_to_excel_url_hint: 'Uma URL http(s) pública por linha, até 10. Buscamos cada página uma vez. Scripts são removidos. Só tabelas HTML viram planilhas.',
	tool_batch_convert_web_pages_to_excel_url_label: 'URLs da página (uma por linha)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'Arquive uma lista de preços ou SKU em HTML no Excel para as quantidades continuarem números filtráveis — um PNG seria só pixels.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'Junte tabelas de parâmetros de duas ajudas num livro e acrescente seu SUM. O Word deixaria os títulos como prosa.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'Deixe a impressão A4 em Converter páginas web em PDF em lote e o CSV que você já tem em CSV ↔ JSON; use esta página quando a fonte ainda é tabela de página.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'Quando encaixa',
};

export default pt;
