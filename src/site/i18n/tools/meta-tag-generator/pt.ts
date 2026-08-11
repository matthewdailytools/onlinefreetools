/**
 * i18n tool shard (meta-tag-generator / pt).
 * Português — reescrita independente orientada a buscas locais.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_meta_home_title: 'Gerador de meta tags',
	tool_meta_home_desc:
		'Escreva os title, description, canonical e tags Open Graph que geram cliques na busca: gere o head da sua página por completo no navegador.',
	tool_meta_title: 'Gerador de meta tags — gere o head da sua página por completo',
	tool_meta_description:
		'Title e meta description são seu cartão no Google; canonical errado espalha sinais. Preencha campos para tags head prontas. Exemplo: canonical + og.',
	tool_meta_title_label: 'Meta title',
	tool_meta_title_ph: 'Gerador de meta tags — gere o head da sua página por completo',
	tool_meta_title_hint: 'Mantenha perto de 60 caracteres. Mecanismos de busca podem reescrever títulos mais longos.',
	tool_meta_desc_label: 'Meta description',
	tool_meta_desc_ph: 'Gere meta tags de head prontas para colar, com dicas de tamanho, valores de robots e campos OG.',
	tool_meta_desc_hint: 'Mantenha perto de 155–160 caracteres. Texto mais longo pode ser truncado no SERP.',
	tool_meta_canonical_label: 'URL canônica',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'A URL preferida desta página. Adicione a URL completa com o protocolo.',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— sem robots meta —',
	tool_meta_robots_index_follow: 'index, follow (padrão, permite indexar)',
	tool_meta_robots_noindex_follow: 'noindex, follow (oculta dos resultados, segue links)',
	tool_meta_robots_index_nofollow: 'index, nofollow (permite indexar, não segue links)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (oculta página e não segue links)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (URL completa)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'Gerar',
	tool_meta_sample: 'Carregar exemplo',
	tool_meta_clear: 'Limpar',
	tool_meta_copy: 'Copiar',
	tool_meta_copied: 'Copiado',
	tool_meta_error_prefix: 'Erro: ',
	tool_meta_canonical_protocol: 'A URL canônica não tem protocolo — adicione https:// ou http:// para os mecanismos de busca lerem.',
	tool_meta_title_len: 'Título: {n} caracteres',
	tool_meta_title_len_warn: 'Título: {n} caracteres — acima de 60, considere encurtar.',
	tool_meta_desc_len: 'Descrição: {n} caracteres',
	tool_meta_desc_len_warn: 'Descrição: {n} caracteres — acima de 160, pode ser truncada.',
	tool_meta_output_label: 'Trecho de head gerado',
	tool_meta_how_title: 'Como funciona',
	tool_meta_how_body:
		'O gerador pega seus campos e constrói as tags de head correspondentes. Campos opcionais vazios são ignorados, então a saída contém apenas o que você preencheu. Cada valor é escapado em HTML: um & comercial vira &amp; e um sinal de menor vira &lt;, mantendo as tags válidas na sua página. As dicas de tamanho avisam quando o título ou a descrição passam dos limites comuns, sem cortar seu texto.',
	tool_meta_rules_title: 'Regras usadas pelo gerador',
	tool_meta_rules_body: 'Estas regras seguem as orientações do Google Search Central sobre meta tags, title links e URLs canônicas.',
	tool_meta_rules_item_1:
		'O meta title e a description são sugestões, não diretivas: os mecanismos podem reescrevê-los ou truncá-los, então mantenha o título perto de 60 caracteres e a description perto de 155–160.',
	tool_meta_rules_item_2:
		'Todos os valores são escapados em HTML: & < > " e \' viram entidades, para que caracteres do título ou da description não quebrem a marcação.',
	tool_meta_rules_item_3:
		'A URL canônica deve ser a URL absoluta completa com protocolo. Uma URL relativa ou sem protocolo não serve como destino canônico.',
	tool_meta_rules_item_4:
		'O robots meta usa os valores index/noindex e follow/nofollow. Quando omitido, os mecanismos usam o próprio padrão, que é indexar e seguir.',
	tool_meta_rules_item_5:
		'Canonical e Open Graph podem coexistir na mesma página: og:url deve coincidir com a URL canônica para que os compartilhamentos apontem para o mesmo endereço.',
	tool_meta_example_title: 'Exemplo',
	tool_meta_example:
		'A amostra preenche título, description, canonical, robots e três campos Open Graph. O trecho gerado emite uma tag <title>, a meta description, o link canônico, o robots meta e as tags og: preenchidas.',
	tool_meta_usecases_title: 'Bons usos',
	tool_meta_usecase_1:
		'Construir um novo template de página: gere o bloco de head uma vez, revise as dicas de tamanho e cole no template antes de publicar.',
	tool_meta_usecase_2:
		'Entregar trabalho a um cliente: gere o trecho de head exato com canonical e OG e cole no CMS.',
	tool_meta_usecase_3:
		'Antes de publicar, gere as tags e compare com uma prévia do resultado de busca para o título e a description baterem com a página visível.',
	tool_meta_faq_q1: 'O que significam os valores do robots meta?',
	tool_meta_faq_a1:
		'index permite que os mecanismos incluam a página nos resultados, enquanto noindex a mantém fora. follow permite rastrear links da página e nofollow impede. Sem a tag, o padrão é index, follow.',
	tool_meta_faq_q2: 'Caracteres especiais nos meus valores são escapados?',
	tool_meta_faq_a2:
		'Sim. O gerador escapa & < > " e \', então um & comercial vira &amp; e um sinal de menor vira &lt;. Suas tags continuam válidas mesmo se o valor contiver caracteres parecidos com marcação.',
	tool_meta_faq_q3: 'Canonical e Open Graph podem coexistir?',
	tool_meta_faq_a3:
		'Sim, cobrem sistemas diferentes. O link canônico diz aos mecanismos a URL preferida, enquanto as tags og: descrevem a página para compartilhamento social. Mantenha og:url alinhada com a URL canônica.',
	tool_meta_faq_q4: 'Quanto devem medir o título e a description?',
	tool_meta_faq_a4:
		'Cerca de 60 caracteres para o título e 155–160 para a description são limites comuns. São sugestões: os mecanismos podem reescrever ou truncar valores mais longos.',
	tool_meta_faq_q5: 'E os campos vazios?',
	tool_meta_faq_a5:
		'Campos opcionais vazios são ignorados, então o trecho gerado contém apenas as tags dos campos que você preencheu.',
	tool_meta_faq_q6: 'Meus dados são enviados para algum lugar?',
	tool_meta_faq_a6: 'Não. O gerador roda inteiramente no seu navegador e nada é enviado.',
	tool_meta_references: 'Google Search Central — Meta tags que o Google entende; Controle seus title links; URLs canônicas.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Meta tags que o Google entende',
	tool_meta_ref_searchcentral_title_label: 'Search Central — Controle seus title links',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — URLs canônicas',
};

export default pt;
