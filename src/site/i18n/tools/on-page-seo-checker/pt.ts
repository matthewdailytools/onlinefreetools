/**
 * i18n tool shard (on-page-seo-checker / pt).
 * Português — reescrita independente orientada à busca local.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_onpage_home_title: 'Verificador SEO On-Page',
	tool_onpage_home_desc:
		'Descubra as tags que seguram sua página no Google: confira title, H1, meta description, canonical, Open Graph e JSON-LD no navegador.',
	tool_onpage_title: 'Verificador SEO On-Page — encontre e corrija problemas nas tags da página',
	tool_onpage_description:
		'Um title fraco, uma meta description ausente, H1 duplicado ou canonical errado podem custar posições e cliques no Google. Cole uma URL ou o HTML para auditar title, H1, meta description, canonical, Open Graph, JSON-LD, conteúdo misto e bloqueio de renderização, cada um com sugestão de correção. O modo colar roda no seu dispositivo; o modo URL busca a página uma vez sem armazená-la. Exemplo: uma página com dois H1 e uma imagem http://.',
	tool_onpage_url_tab: 'Buscar URL',
	tool_onpage_html_tab: 'Colar HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'Verificar URL',
	tool_onpage_html_ph: 'Cole aqui o HTML do <head> (e um trecho do body)…',
	tool_onpage_check: 'Verificar página',
	tool_onpage_sample: 'Exemplo',
	tool_onpage_clear: 'Limpar',
	tool_onpage_copy: 'Copiar',
	tool_onpage_copied: 'Copiado',
	tool_onpage_running: 'Verificando…',
	tool_onpage_error_prefix: 'Erro: ',
	tool_onpage_url_error: 'Digite uma URL http(s) válida.',
	tool_onpage_fetch_failed: 'Não foi possível buscar a URL. A página pode estar offline, bloquear bots ou não retornar HTML.',
	tool_onpage_no_html: 'Cole algum HTML primeiro ou busque uma URL.',
	tool_onpage_no_results: 'Ainda não há verificações para mostrar.',
	tool_onpage_summary_title: 'Resumo da verificação',
	tool_onpage_summary_n_ok: '{n} aprovadas',
	tool_onpage_summary_n_warn: '{n} avisos',
	tool_onpage_summary_n_err: '{n} problemas',
	tool_onpage_status_ok: 'OK',
	tool_onpage_status_warn: 'Aviso',
	tool_onpage_status_err: 'Problema',
	tool_onpage_title_check: 'Title',
	tool_onpage_title_missing: 'Nenhum <title> encontrado. Adicione um dentro de <head>.',
	tool_onpage_title_ok: 'Title com {n} caracteres. Perto de 50–60 caracteres exibe bem nos resultados de busca.',
	tool_onpage_title_long: 'O title tem {n} caracteres e provavelmente será cortado nos resultados. Mire cerca de 50–60 caracteres.',
	tool_onpage_title_short: 'O title tem apenas {n} caracteres. Adicione o foco específico da página para deixá-lo mais informativo.',
	tool_onpage_desc_check: 'Meta description',
	tool_onpage_desc_missing: 'Nenhuma meta description encontrada. Escreva um resumo de 140–160 caracteres que corresponda ao conteúdo.',
	tool_onpage_desc_ok: 'Descrição com {n} caracteres. O intervalo de 140–160 caracteres aparece bem na maioria dos snippets.',
	tool_onpage_desc_long: 'A descrição tem {n} caracteres; snippets costumam cortar por volta de 160.',
	tool_onpage_desc_short: 'A descrição tem apenas {n} caracteres. Use o espaço para resumir o que a página oferece.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'Nenhum H1 encontrado. Use exatamente um H1 que declare o tema da página.',
	tool_onpage_h1_multiple: '{n} tags H1 encontradas. Mantenha um único H1 por página e use H2–H6 para as seções.',
	tool_onpage_h1_ok: 'Um H1 encontrado, dentro de <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'Nenhuma URL canônica definida. Adicione <link rel="canonical"> quando o mesmo conteúdo for acessível por várias URLs.',
	tool_onpage_canonical_ok: 'Canonical autorreferente encontrado.',
	tool_onpage_canonical_other: 'O canonical aponta para outra URL. Use um canonical autorreferente, a menos que esta página seja cópia do destino.',
	tool_onpage_robots_check: 'Robots meta',
	tool_onpage_robots_missing: 'Sem robots meta. O padrão é index,follow, o que é adequado para a maioria das páginas públicas.',
	tool_onpage_robots_noindex: 'A página define noindex e não aparecerá na busca do Google. Remova quando a página precisar ser indexada.',
	tool_onpage_robots_ok: 'O robots meta permite indexar e seguir links.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'Nenhuma tag og: encontrada. Adicione og:title, og:description e og:image para as prévias de compartilhamento.',
	tool_onpage_og_partial: 'Faltam {n} campos og: obrigatórios. Garanta que og:title, og:description e og:image estejam presentes.',
	tool_onpage_og_ok: 'og:title, og:description e og:image estão presentes.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'Nenhum dado estruturado JSON-LD encontrado. Considere adicionar marcação schema.org quando descrever conteúdo visível.',
	tool_onpage_jsonld_invalid: 'Um bloco JSON-LD não pôde ser analisado como JSON. Verifique os erros de sintaxe.',
	tool_onpage_jsonld_ok: '{n} bloco(s) JSON-LD encontrado(s). Mantenha os dados estruturados coerentes com o que os visitantes veem.',
	tool_onpage_mixed_check: 'Conteúdo misto',
	tool_onpage_mixed_none: 'Nenhuma referência http:// encontrada em contexto https.',
	tool_onpage_mixed_found: '{n} referência(s) http:// encontrada(s). Os navegadores bloqueiam conteúdo misto; sirva esses recursos via https.',
	tool_onpage_render_check: 'Bloqueio de renderização',
	tool_onpage_render_none: 'Nenhuma folha de estilo ou script bloqueando renderização de forma óbvia.',
	tool_onpage_render_found: '{n} <link rel="stylesheet"> sem media no <head>. Aplique CSS crítico inline ou adie o carregamento para melhorar o LCP.',
	tool_onpage_unknown: 'Não foi possível determinar: {label}',
	tool_onpage_how_title: 'Como funciona',
	tool_onpage_how_body:
		'O verificador analisa o código que você cola (ou o HTML buscado de uma URL) e avalia uma lista fixa de verificações SEO on-page. Cada verificação lê um tipo de tag: title, meta description, H1, canonical, robots meta, campos Open Graph, blocos JSON-LD, conteúdo misto e recursos que bloqueiam renderização. O modo colar roda inteiramente no seu navegador; o modo URL busca a página uma vez pelo nosso worker e não a armazena.',
	tool_onpage_rules_title: 'Regras seguidas pelas verificações',
	tool_onpage_rules_body:
		'Estes são os padrões contra os quais cada verificação compara, vindos do Google Search Central e da especificação HTML.',
	tool_onpage_rules_item_1:
		'Title: a página deve ter um <title> descritivo. O Google pode reescrevê-lo, mas um título conciso perto de 50–60 caracteres costuma exibir bem.',
	tool_onpage_rules_item_2:
		'H1: use exatamente um H1 que declare o tema. Os demais cabeçalhos devem ser H2–H6 e formar um roteiro lógico.',
	tool_onpage_rules_item_3:
		'Canonical: um canonical autorreferente diz ao Google qual URL é a preferida quando há duplicatas. O Link rel="canonical" vai no <head>.',
	tool_onpage_rules_item_4:
		'Conteúdo misto: uma página https que referencia recursos http:// é bloqueada pelos navegadores. Esta verificação os lista como avisos.',
	tool_onpage_rules_item_5:
		'Bloqueio de renderização: uma folha de estilo no <head> sem atributo media bloqueia a renderização. Esta verificação é heurística e não mede tempo real de carregamento.',
	tool_onpage_example_title: 'Exemplo',
	tool_onpage_example:
		'A entrada de exemplo é uma página com title de 71 caracteres, sem meta description, dois H1, um canonical para outra URL, um og:image, um bloco JSON-LD válido e uma imagem http://. O verificador reporta o title como provável corte, H1 como aviso, canonical como não autorreferente e conteúdo misto como aviso, igual ao que a ferramenta mostra ao carregar o exemplo.',
	tool_onpage_usecases_title: 'Bons usos',
	tool_onpage_usecase_1:
		'Antes de um redesign ou relançamento: passe a mesma página pelo verificador e corrija os problemas reportados de uma vez.',
	tool_onpage_usecase_2:
		'Entrega de template: ao receber HTML de uma agência ou construtor de páginas, confira as tags do head em vez de confiar na exportação.',
	tool_onpage_usecase_3:
		'Atualizações de conteúdo: após editar no CMS, confirme que title, description e canonical continuam coerentes com a nova página.',
	tool_onpage_faq_q1: 'O que um verificador SEO on-page analisa?',
	tool_onpage_faq_a1:
		'Ele verifica as tags que a página controla: title, meta description, H1, canonical, robots meta, campos Open Graph, dados estruturados JSON-LD, conteúdo misto e recursos de bloqueio de renderização. Não mede posicionamento nem backlinks.',
	tool_onpage_faq_q2: 'Por que a página deve ter exatamente um H1?',
	tool_onpage_faq_a2:
		'Um único H1 declara o tema com clareza para leitores e mecanismos de busca. Vários H1 turvam a hierarquia; use um H1 e organize o restante com H2–H6.',
	tool_onpage_faq_q3: 'O canonical precisa apontar para si mesmo?',
	tool_onpage_faq_a3:
		'Para a página que deve ranquear, sim — um canonical autorreferente é o sinal mais claro. Apontar para outra URL diz ao Google que a página é duplicata, útil apenas quando isso é verdade.',
	tool_onpage_faq_q4: 'Por que o verificador marca recursos http:// como conteúdo misto?',
	tool_onpage_faq_a4:
		'Quando uma página é servida por https e referencia imagens, scripts ou estilos http://, o navegador bloqueia a requisição por padrão. Esta verificação os lista como avisos para que você os troque por https.',
	tool_onpage_faq_q5: 'A verificação JSON-LD testa a validação?',
	tool_onpage_faq_a5:
		'Ela confirma que os blocos são analisados como JSON válido e lembra de manter os dados estruturados coerentes com o conteúdo visível. Não executa um validador schema.org completo.',
	tool_onpage_faq_q6: 'Meu HTML é enviado para algum lugar?',
	tool_onpage_faq_a6:
		'Não. Ao colar HTML, a análise acontece no seu dispositivo e nada é enviado a um servidor. O modo URL busca a página uma vez pelo nosso worker e não a armazena.',
	tool_onpage_references: 'Google Search Central — meta tags; Google Search Central — canonical; MDN — elemento <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — Meta tags que o Google entende',
	tool_onpage_ref_canonical_label: 'Search Central — URLs canônicas',
	tool_onpage_ref_mdn_label: 'MDN — <meta>: o elemento de metadados',
};

export default pt;
