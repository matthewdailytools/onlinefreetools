/**
 * i18n tool shard (convert-html-web-pages-to-word-document / pt).
 * H1: Converter páginas HTML em um documento Word.
 * IG: títulos/listas/tabelas Word editáveis — não PDF A4, não captura, não PDF→Word, não imagens→Word.
 */
import type { SiteLangDict } from '../../../types';

/** Textos visíveis do conversor HTML→Word (pt). */
const pt: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'Configurações avançadas (opcional)',
	tool_convert_html_web_pages_to_word_document_article:
		'Cole HTML ou um endereço público e saia um .docx que dá para editar: títulos, listas, tabelas e links viram estilos Word. Não é PDF A4 nem captura de tela. O HTML colado fica nesta aba, sem enviar ao servidor. A URL é buscada uma vez e não é armazenada. Impressão: Converter HTML para PDF. Já tem PDF: Transformar PDF em documento Word.',
	tool_convert_html_web_pages_to_word_document_clear: 'Limpar',
	tool_convert_html_web_pages_to_word_document_convert: 'Converter',
	tool_convert_html_web_pages_to_word_document_desc:
		'Cole HTML ou busque uma URL e baixe Word editável — não é PDF nem captura.',
	tool_convert_html_web_pages_to_word_document_description:
		'Converter páginas HTML em um documento Word (HTML para Word / HTML para DOCX): cole ou busque uma URL e gere .docx editável, não um PDF A4. Passos: colar ou buscar, Converter, Baixar. Exemplo: notas de versão com tabela viram estilos Word. O HTML colado fica nesta aba; a URL é buscada uma vez e não é guardada.',
	tool_convert_html_web_pages_to_word_document_download: 'Baixar',
	tool_convert_html_web_pages_to_word_document_empty: 'Cole HTML ou informe um endereço público primeiro.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'Não deu para montar o Word com esse HTML. Confira as tags e tente de novo.',
	tool_convert_html_web_pages_to_word_document_err_load: 'A biblioteca Word não carregou. Atualize e tente outra vez.',
	tool_convert_html_web_pages_to_word_document_err_url: 'Não foi possível carregar essa URL. Confira o endereço ou o site bloqueia a busca.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'Informe primeiro uma URL http(s) válida.',
	tool_convert_html_web_pages_to_word_document_example:
		'Carregar exemplo preenche HTML de notas de versão (H1, lista, tabela de duas colunas e um link), roda Converter e libera Baixar. O .docx usa estilos de título e tabela: dá para mudar o texto. Na aba URL, Converter busca um endereço ao vivo.',
	tool_convert_html_web_pages_to_word_document_example_title: 'Exemplo',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'Converter HTML para PDF pagina em folhas A4 para impressão. Aqui o HTML vira parágrafos, títulos, listas e tabelas editáveis. Mesmo HTML, outro arquivo.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'O download é .docx (HTML para DOCX). Abra no Word ou em editor que leia Office Open XML. Não é .doc binário nem .mhtml do Chrome.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'Sim. Abra a aba URL, cole um https e toque Converter. Scripts saem. Telas de login e apps em JavaScript quase nunca batem com o site ao vivo. O CSS não é refeito pixel a pixel.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'Transformar PDF em documento Word começa num PDF e na camada de texto. Aqui você começa no HTML colado ou numa URL. Se já tem PDF, use aquela ferramenta.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'O HTML colado não sai desta aba e não é enviado ao servidor. Se converter uma URL, mandamos o endereço uma vez para buscar o HTML e não guardamos. O .docx é montado no navegador.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'Não. Exporte ou copie o HTML. O pacote de página completa / MHTML do Chrome é outro formato e não é analisado aqui.',
	tool_convert_html_web_pages_to_word_document_faq_q1: 'Qual a diferença para Converter HTML para PDF?',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'O resultado é HTML para Word / um .docx?',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'Dá para converter uma URL (página web para Word)?',
	tool_convert_html_web_pages_to_word_document_faq_q4: 'Qual a diferença para Transformar PDF em documento Word?',
	tool_convert_html_web_pages_to_word_document_faq_q5: 'Meu HTML ou a URL são enviados e armazenados?',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'Dá para converter um .mhtml do Chrome?',
	tool_convert_html_web_pages_to_word_document_how_body:
		'Isto não pagina em A4: você cola HTML (HTML para Word) ou uma URL, toca Converter e baixa um .docx cujos títulos e tabelas ainda se editam.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'Código na mão: fique em Colar HTML. Um https público (página web para Word): aba URL.',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'Toque Converter. Scripts são removidos. Títulos, listas, tabelas e links entram no Word. Imagens que falham são puladas.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'Quer as <img> do HTML? Abra as configurações avançadas — Incluir imagens vem ligado e ainda ignora fotos bloqueadas.',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'Folhas A4: Converter HTML para PDF. Captura: Converter várias páginas web para PNG ou JPG. Já é PDF: Transformar PDF em documento Word.',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'Quando Converter terminar, Baixar. Abra o .docx e edite o texto.',
	tool_convert_html_web_pages_to_word_document_how_title: 'Como usar',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'Cole um trecho ou um HTML inteiro. Scripts saem antes da conversão. O CSS de layout não é recriado pixel a pixel.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>Notas de versão</h1><p>Cole o HTML aqui…</p>',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'Ligado: tentamos embutir <img> que o navegador consiga ler. Imagens quebradas ou bloqueadas são puladas. Desligue para Word só de texto.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'Incluir imagens',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'Incluir imagens tenta embutir as fotos do HTML. Posicionamento CSS não é mapeado. A saída é sempre um .docx.',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'Um Converter gera um .docx. Títulos, parágrafos, listas, tabelas, links e imagens opcionais são mapeados. CSS absoluto, barras fixas e scripts não.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'O HTML colado fica nesta aba, sem enviar ao servidor. Uma URL é buscada uma vez e não é armazenada.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'h1–h6 viram títulos Word. ul/ol listas. table uma tabela. a um hiperlink.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'Login, apps JavaScript e CSS de impressão quase nunca batem com o site ao vivo. Isto não é raster de captura.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'Perante Converter HTML para PDF: Word editável, não folhas A4. Perante Transformar PDF em documento Word: a entrada é HTML ou URL, não um PDF. Perante Imagens para Word: a entrada é marcação, não um monte de fotos.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'Regras e limites',
	tool_convert_html_web_pages_to_word_document_sample: 'Carregar exemplo',
	tool_convert_html_web_pages_to_word_document_status_done: 'Word pronto — baixe o .docx e edite.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'Buscando o HTML da URL…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Montando o documento Word…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'Colar HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: 'URL',
	tool_convert_html_web_pages_to_word_document_title: 'Converter páginas HTML em um documento Word',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'Uma URL http(s) pública. Buscamos o HTML uma vez e reescrevemos CSS/imagens. Scripts saem antes do mapeamento para Word.',
	tool_convert_html_web_pages_to_word_document_url_label: 'URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'Levar um HTML exportado da central de ajuda a um rascunho que o jurídico comente — títulos continuam títulos.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'Buscar uma URL pública de notas de versão e manter a tabela como tabela Word de verdade.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'Deixe A4 em Converter HTML para PDF e capturas no lote PNG; use isto quando precisar de .docx editável.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'Quando encaixa',
};

export default pt;
