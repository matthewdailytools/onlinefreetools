/**
 * Fragmento i18n (find-and-validate-xml-sitemap / pt).
 * Cena: URL do site → descobrir sitemap → validar XML e amostras de loc (não gera).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'Encontrar e validar sitemap XML',
	tool_find_and_validate_xml_sitemap_home_desc:
		'Descubra o sitemap em robots.txt ou /sitemap.xml e confira estrutura, tipo e locs de amostra.',
	tool_find_and_validate_xml_sitemap_desc:
		'Descubra o sitemap em robots.txt ou /sitemap.xml e confira estrutura, tipo e locs de amostra.',
	tool_find_and_validate_xml_sitemap_title: 'Encontrar e validar sitemap XML',
	tool_find_and_validate_xml_sitemap_description:
		'Informe a URL do site para achar o sitemap XML pelas linhas Sitemap: do robots.txt ou /sitemap.xml; valide a estrutura, conte locs e marque urlset vs sitemapindex. Não gera arquivo. Exemplo: sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'URL do site',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'Encontrar e validar',
	tool_find_and_validate_xml_sitemap_sample: 'Exemplo',
	tool_find_and_validate_xml_sitemap_clear: 'Limpar',
	tool_find_and_validate_xml_sitemap_running: 'Descobrindo e validando sitemaps…',
	tool_find_and_validate_xml_sitemap_url_error: 'Informe uma URL http(s) válida do site (origem ou página inicial).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'Erro: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'Não foi possível buscar candidatos de sitemap. O host pode estar offline ou bloquear bots.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'A URL e o hostname vão ao nosso Worker para buscar robots.txt e sitemaps. Não guardamos como base de produto.',
	tool_find_and_validate_xml_sitemap_result_site: 'Origem do site',
	tool_find_and_validate_xml_sitemap_result_candidates: 'Candidatos testados',
	tool_find_and_validate_xml_sitemap_result_primary: 'Resultado principal',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'Nenhuma estrutura de sitemap válida entre os candidatos',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'Status HTTP',
	tool_find_and_validate_xml_sitemap_col_kind: 'Tipo',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'Qtd. de loc',
	tool_find_and_validate_xml_sitemap_col_valid: 'Estrutura válida',
	tool_find_and_validate_xml_sitemap_col_samples: 'Locs de amostra',
	tool_find_and_validate_xml_sitemap_valid_yes: 'Sim',
	tool_find_and_validate_xml_sitemap_valid_no: 'Não',
	tool_find_and_validate_xml_sitemap_empty_findings: 'Nenhum achado para este site.',
	tool_find_and_validate_xml_sitemap_how_title: 'Como funciona',
	tool_find_and_validate_xml_sitemap_how_body:
		'Uma tarefa só: achar o sitemap XML do site e ver se parece urlset ou sitemapindex válido — sem gerar arquivo novo.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'Informe a origem ou a URL da home.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'Clique em Encontrar e validar; o Worker lê Sitemap: no robots.txt e tenta /sitemap.xml e índices comuns.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'Na tabela, veja o tipo raiz, a contagem de URLs e as <loc> de amostra.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'Corrija XML ou descoberta antes de IndexNow ou Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'Regras de descoberta e validação',
	tool_find_and_validate_xml_sitemap_formula_body:
		'Alinhado ao protocolo sitemaps.org: XML bem formado com raiz urlset ou sitemapindex e <loc> contáveis.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'Ordem: diretivas Sitemap: do robots.txt, depois /sitemap.xml, /sitemap_index.xml e /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'Estrutura válida se a resposta parece XML de sitemap e o HTTP está OK.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex lista sitemaps filhos; urlset lista locs de páginas — ambos aparecem.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'Contamos <loc> e mostramos até 10 amostras; não rastreamos cada URL listada.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'Gzip, corpos grandes, redirecionamentos e não-XML podem falhar. Hosts privados são rejeitados.',
	tool_find_and_validate_xml_sitemap_example_title: 'Exemplo',
	tool_find_and_validate_xml_sitemap_example:
		'Entrada de exemplo https://www.sitemaps.org/. O Worker testa Sitemap: e caminhos comuns e mostra status HTTP, tipo, contagem de loc, amostras e validStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'Quando ajuda',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'Localizador de sitemap: após migrar CMS ou CDN, confirme onde o mapa é publicado.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'Verificador / validador XML: antes do Search Console, confira se o arquivo está bem formado e se é índice ou urlset.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'Checagem rápida de loc: após regenerar um sitemap grande, veja amostras sem baixar o arquivo inteiro.',
	tool_find_and_validate_xml_sitemap_faq_q1: 'Isto é um gerador de sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'Não — só encontra e valida. Para montar um arquivo a partir de uma lista de URLs use o gerador XML Sitemap.',
	tool_find_and_validate_xml_sitemap_faq_q2: 'Onde vocês procuram o sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'Primeiro as linhas Sitemap: do robots.txt; depois /sitemap.xml e índices comuns no mesmo host.',
	tool_find_and_validate_xml_sitemap_faq_q3: 'Qual a diferença entre sitemapindex e urlset?',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex lista sitemaps filhos; urlset lista locs de página. Ambos são raízes válidas; a tabela mostra o tipo.',
	tool_find_and_validate_xml_sitemap_faq_q4: 'Vocês rastreiam cada URL do sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'Não. Contamos <loc>, mostramos uma amostra e checamos a estrutura — sem status ao vivo de cada página.',
	tool_find_and_validate_xml_sitemap_faq_q5: 'Minha URL é enviada ou armazenada?',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'A URL/hostname precisa chegar ao Worker para buscar os arquivos. Não guardamos checagens como base de produto. É ferramenta de borda, não «sem upload».',
	tool_find_and_validate_xml_sitemap_references:
		'Protocolo sitemaps.org; Google Search Central — visão geral de sitemaps.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — Protocolo',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — Visão geral de sitemaps',
};

export default pt;
