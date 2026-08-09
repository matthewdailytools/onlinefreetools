/**
 * i18n tool shard (open-graph-preview / pt).
 * Português — reescrita independente orientada a buscas locais.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_og_home_title: 'Prévia de Open Graph',
	tool_og_home_desc:
		'Faça cada compartilhamento da sua página gerar cliques: veja como ela vai aparecer no Facebook, X e apps de mensagem, direto no navegador.',
	tool_og_title: 'Prévia de Open Graph — confira os cards de redes sociais',
	tool_og_description:
		'As tags Open Graph decidem como sua página aparece cada vez que é compartilhada: uma imagem ou título ausente custa cliques e compartilhamentos. Cole suas tags og:/twitter:card ou uma URL para ver a prévia do card no Facebook, X e estilo WhatsApp, detectar campos faltantes e corrigir a proporção da imagem. Passos: cole as tags ou busque uma URL, leia os três cards e a tabela de campos, e corrija o que falta. O modo colar roda no seu dispositivo; o modo URL busca a página uma vez e não a armazena. Exemplo: uma página com og:image de 1200×630 compartilhada como card grande.',
	tool_og_tags_tab: 'Colar tags',
	tool_og_url_tab: 'Buscar URL',
	tool_og_tags_ph: 'Cole aqui suas tags <meta property="og:*"> e <meta name="twitter:*">…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'Buscar URL',
	tool_og_preview: 'Prévia',
	tool_og_sample: 'Exemplo',
	tool_og_clear: 'Limpar',
	tool_og_copy: 'Copiar',
	tool_og_copied: 'Copiado',
	tool_og_running: 'Verificando…',
	tool_og_error_prefix: 'Erro: ',
	tool_og_url_error: 'Digite uma URL http(s) válida.',
	tool_og_fetch_failed: 'Não foi possível buscar a URL. A página pode estar offline, bloquear bots ou não retornar HTML.',
	tool_og_no_tags: 'Nenhuma tag OG detectada',
	tool_og_no_tags_fallback:
		'Sem tags Open Graph, Facebook, X e WhatsApp montam a prévia com o título, a meta description e a primeira imagem da página.',
	tool_og_required_label: 'Obrigatório',
	tool_og_optional_label: 'Opcional',
	tool_og_missing_label: 'Faltando',
	tool_og_ok_label: 'Presente',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'Status das tags',
	tool_og_ratio_warning: 'og:image deve ter cerca de 1200×630 px (1.91:1).',
	tool_og_ratio_ok: 'og:image está próxima de 1200×630 px (1.91:1).',
	tool_og_ratio_unknown: 'Não foi possível ler o tamanho da imagem pela URL.',
	tool_og_dimensions: '{w}×{h} px',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'Apps de mensagem (estilo WhatsApp)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'Nenhum twitter:card definido — as plataformas inferem um card summary a partir das tags og:.',
	tool_og_how_title: 'Como funciona',
	tool_og_how_body:
		'A prévia analisa as tags og:/twitter: que você cola (ou as extrai do HTML buscado de uma URL) e desenha três cards. O Facebook usa a imagem 1.91:1 à esquerda com título, descrição e domínio abaixo. O X segue twitter:card: summary_large_image mostra uma imagem grande em cima, summary mostra uma pequena ao lado do texto. Apps de mensagem como WhatsApp mostram um card grande. A tabela marca og:title, og:description e og:image como obrigatórios e lista os opcionais.',
	tool_og_rules_title: 'Regras usadas pela prévia',
	tool_og_rules_body: 'Estes são os tamanhos e fallbacks que as plataformas usam, com base no protocolo Open Graph e na documentação do X Cards.',
	tool_og_rules_item_1: 'Campos obrigatórios: og:title, og:description e og:image. Os faltantes são marcados para você corrigir antes de publicar.',
	tool_og_rules_item_2: 'og:image em 1200×630 px (1.91:1) funciona em todas as plataformas principais. O Facebook também aceita recortes 2:1 e 1:1; imagens pequenas costumam ser ampliadas e ficar borradas.',
	tool_og_rules_item_3: 'twitter:card summary_large_image combina com imagem grande; summary com uma menor. Sem twitter:card, as plataformas inferem um card summary das tags og:.',
	tool_og_rules_item_4: 'Quando og:title ou og:image faltam, as plataformas usam o título HTML, a meta description e a primeira imagem da página.',
	tool_og_rules_item_5: 'O tamanho é medido carregando a imagem no navegador; se ela não carregar (bloqueada, offline ou URL errada), a verificação reporta desconhecido.',
	tool_og_example_title: 'Exemplo',
	tool_og_example:
		'As tags de exemplo descrevem um post com og:image de 1200×630 e twitter:card summary_large_image. A prévia mostra um card do Facebook com a imagem à esquerda, um card grande do X, um card estilo WhatsApp e uma tabela com todos os campos obrigatórios presentes.',
	tool_og_usecases_title: 'Bons usos',
	tool_og_usecase_1:
		'Antes de publicar um post ou landing page, cole as tags uma vez e confirme que o card fica certo no Facebook, X e apps de mensagem.',
	tool_og_usecase_2:
		'Quando um link compartilhado não mostra imagem ou sai cortado, cole as tags og: para ver se og:image está faltando ou com proporção errada.',
	tool_og_usecase_3:
		'Depois de atualizar um CMS ou tema, busque a URL ao vivo e verifique se as tags og: ainda correspondem à página.',
	tool_og_faq_q1: 'O que acontece se uma página não tem tags Open Graph?',
	tool_og_faq_a1:
		'Facebook, X e WhatsApp montam a prévia com o título HTML, a meta description e a primeira imagem da página. O card pode sair incompleto ou com a imagem errada, e é por isso que os campos og: obrigatórios existem.',
	tool_og_faq_q2: 'Qual deve ser o tamanho de og:image?',
	tool_og_faq_a2:
		'O tamanho seguro é 1200×630 px, proporção 1.91:1 que todas as plataformas principais aceitam. O Facebook agora também suporta recortes 2:1 e 1:1. Imagens muito pequenas costumam ser ampliadas e ficam borradas.',
	tool_og_faq_q3: 'Como twitter:card se relaciona com as tags og:?',
	tool_og_faq_a3:
		'twitter:card escolhe o layout: summary_large_image mostra uma imagem larga, summary mostra uma pequena. Quando twitter:title, twitter:description ou twitter:image faltam, o X usa a tag og: correspondente.',
	tool_og_faq_q4: 'O que a plataforma faz quando og:image está faltando?',
	tool_og_faq_a4:
		'Ela usa a primeira imagem encontrada no HTML da página, ou mostra o card sem imagem. A falta de og:image é a causa mais comum de um link compartilhado sem imagem de prévia.',
	tool_og_faq_q5: 'Por que a verificação de proporção diz “desconhecido”?',
	tool_og_faq_a5:
		'A prévia tenta carregar og:image com um carregamento de imagem do navegador para ler o tamanho real. Quando a imagem está bloqueada, offline, lenta ou o servidor recusa a requisição, o tamanho não pode ser lido e a verificação reporta desconhecido.',
	tool_og_faq_q6: 'Minhas tags são enviadas para algum lugar?',
	tool_og_faq_a6:
		'Não. No modo colar, a análise e a prévia rodam no seu dispositivo. O modo URL busca a página uma vez através do nosso worker e não a armazena.',
	tool_og_references: 'ogp.me — O protocolo Open Graph; X — Marcação de cards.',
	tool_og_ref_ogp_label: 'ogp.me — O protocolo Open Graph',
	tool_og_ref_x_label: 'X — Marcação de cards',
};

export default pt;
