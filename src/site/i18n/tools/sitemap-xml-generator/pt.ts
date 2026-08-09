/**
 * i18n tool shard (sitemap-xml-generator / pt).
 * Portuguese independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_sitemap_home_title: 'Gerador de sitemap XML',
	tool_sitemap_home_desc:
		'Transforme uma lista de URLs em um sitemap.xml válido com lastmod, changefreq e priority, direto no navegador.',
	tool_sitemap_title: 'Gerador de sitemap XML — crie sitemap.xml a partir de URLs',
	tool_sitemap_description:
		'Gere sitemap.xml no seu navegador. Passos: cole uma URL https por linha com lastmod / changefreq / priority opcionais, visualize o XML com o escaping correto e copie para a raiz do site. Explica as regras e limites do protocolo. Nada é enviado. Exemplo: 3 URLs → urlset com três elementos url.',
	tool_sitemap_generate: 'Gerar',
	tool_sitemap_sample: 'Exemplo',
	tool_sitemap_clear: 'Limpar',
	tool_sitemap_copy: 'Copiar',
	tool_sitemap_copied: 'Copiado',
	tool_sitemap_download: 'Baixar',
	tool_sitemap_urls_label: 'URLs (uma por linha)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'Cada linha: URL, ou URL | lastmod (yyyy-MM-dd), ou URL | lastmod | changefreq | priority. Exemplo: https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'URL não http ignorada: {url}',
	tool_sitemap_warn_bad_lastmod: 'lastmod inválido (use yyyy-MM-dd ou data-hora W3C): {url}',
	tool_sitemap_warn_too_many: 'Mais de 50.000 URLs: divida em vários sitemaps e ligue-os com um sitemap index.',
	tool_sitemap_how_title: 'Como funciona',
	tool_sitemap_how_body:
		'Cole sua lista de URLs, uma por linha. Após a barra vertical você pode adicionar lastmod (yyyy-MM-dd), changefreq e priority. A página analisa cada linha, escapa os caracteres reservados, confere se a URL começa com http(s) e monta um urlset segundo o protocolo. Copie o XML para a raiz do site e referencie-o no robots.txt ou envie no Search Console.',
	tool_sitemap_rules_title: 'Regras e limites do protocolo',
	tool_sitemap_rules_body: 'Estas são as regras do protocolo sitemap e do Google que este gerador segue.',
	tool_sitemap_rules_item_1:
		'Obrigatório: cada <url> precisa de um <loc> com a URL completa. lastmod, changefreq e priority são opcionais.',
	tool_sitemap_rules_item_2:
		'Formato de lastmod: uma data W3C (yyyy-MM-dd) ou datetime como 2026-08-01T12:00:00+00:00. Outros formatos são ignorados ou rejeitados.',
	tool_sitemap_rules_item_3:
		'changefreq é uma dica, não um sinal. O Google ignora, então preenchê-la não muda a frequência de rastreio.',
	tool_sitemap_rules_item_4:
		'Limites: um sitemap suporta no máximo 50.000 URLs e 50MB após compressão. Além disso, divida e use um sitemap index.',
	tool_sitemap_example_title: 'Exemplo',
	tool_sitemap_example:
		'Entrada de exemplo: https://example.com/ e https://example.com/products com lastmod 2026-08-01, mais https://example.com/about — a saída é um urlset com três elementos url, o do meio com lastmod.',
	tool_sitemap_usecases_title: 'Bons usos',
	tool_sitemap_usecase_1:
		'Sites novos: gere seu primeiro sitemap.xml a partir da lista de URLs e envie no Search Console.',
	tool_sitemap_usecase_2:
		'Conteúdo atualizado: adicione lastmod a páginas recém-mudadas para o rastreador captar o sinal de frescor.',
	tool_sitemap_usecase_3:
		'Descoberta: aponte o robots.txt para o sitemap e os rastreadores o encontram sem esperar o envio.',
	tool_sitemap_faq_q1: 'Qual é o limite de URLs de um sitemap?',
	tool_sitemap_faq_a1:
		'50.000 URLs ou 50MB (sem compressão). O gerador avisa quando a lista passa de 50.000 para você dividir e usar um sitemap index.',
	tool_sitemap_faq_q2: 'Qual formato de lastmod é exigido?',
	tool_sitemap_faq_a2:
		'Uma data W3C (yyyy-MM-dd) ou datetime completo como 2026-08-01T12:00:00+00:00. O gerador marca linhas com lastmod incorreto para você corrigir antes de salvar.',
	tool_sitemap_faq_q3: 'O changefreq afeta o rastreio?',
	tool_sitemap_faq_a3:
		'Não. O Google ignora changefreq; é só uma dica para outros consumidores. Priority também é ignorada. O valor que vale manter exato é o lastmod.',
	tool_sitemap_faq_q4: 'Qual a diferença para o IndexNow?',
	tool_sitemap_faq_a4:
		'O IndexNow avisa na hora os mecanismos participantes sobre uma mudança de URL; um sitemap é uma lista permanente que os rastreadores consultam. Use os dois: IndexNow para notificação imediata, sitemap para descoberta contínua.',
	tool_sitemap_references: 'sitemaps.org — protocolo sitemap; Google Search Central — criar e enviar um sitemap.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — protocolo',
	tool_sitemap_ref_google_label: 'Search Central — criar e enviar um sitemap',
};

export default pt;
