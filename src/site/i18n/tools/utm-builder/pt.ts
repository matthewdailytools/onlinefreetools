/**
 * i18n tool shard (utm-builder / pt).
 * Português — reescrita independente orientada a buscas locais.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_utm_home_title: 'Criador de UTM',
	tool_utm_home_desc:
		'Meça quais campanhas realmente geram seu tráfego: crie links de rastreamento limpos com utm_source, medium, campaign, term e content no navegador.',
	tool_utm_title: 'Criador de UTM — gere links de rastreamento de campanha',
	tool_utm_description:
		'Tags UTM limpas são a única forma de provar quais campanhas, e-mails ou posts realmente geram seu tráfego: sem elas, seu investimento em SEO e marketing fica invisível nas análises. Monte um link de rastreamento a partir do URL da sua página de destino e utm_source, utm_medium, utm_campaign, utm_term e utm_content. Passos: cole o URL base, preencha os cinco parâmetros, copie o link gerado com a codificação de URL correta. Parâmetros de consulta existentes são mantidos e mesclados, não sobrescritos. Roda inteiramente no seu dispositivo — nada é enviado. Exemplo: https://example.com/page com source=newsletter, medium=email e campaign=summer_sale.',
	tool_utm_url_label: 'URL da página de destino',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'Informe o URL da página de destino.',
	tool_utm_url_invalid: 'O URL parece inválido. Verifique o endereço e tente novamente.',
	tool_utm_url_protocol: 'Nenhum protocolo detectado — https:// foi adicionado automaticamente.',
	tool_utm_source_label: 'Origem da campanha (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'Onde o link é visto: newsletter, facebook, google.',
	tool_utm_medium_label: 'Mídia da campanha (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'Como o link é entregue: email, cpc, social, referral.',
	tool_utm_campaign_label: 'Nome da campanha (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'A promoção ou o produto a que o link pertence.',
	tool_utm_campaign_required: 'O nome da campanha (utm_campaign) é obrigatório.',
	tool_utm_term_label: 'Termo da campanha (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'Opcional. Identifica palavras-chave de busca paga.',
	tool_utm_content_label: 'Conteúdo da campanha (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'Opcional. Distingue anúncios ou links que apontam para o mesmo URL.',
	tool_utm_generate: 'Gerar',
	tool_utm_sample: 'Exemplo',
	tool_utm_clear: 'Limpar',
	tool_utm_copy: 'Copiar',
	tool_utm_copied: 'Copiado',
	tool_utm_error_prefix: 'Erro: ',
	tool_utm_output_label: 'URL gerado',
	tool_utm_table_title: 'Detalhamento de parâmetros',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'Valor',
	tool_utm_param_status: 'Status',
	tool_utm_param_required: 'Obrigatório',
	tool_utm_param_optional: 'Opcional',
	tool_utm_param_empty: 'Vazio',
	tool_utm_encoding_note:
		'Os valores são codificados com encodeURIComponent: espaços viram %20 e caracteres não ASCII são codificados.',
	tool_utm_case_note:
		'O Google Analytics diferencia maiúsculas e minúsculas nos valores. Use um padrão consistente em minúsculas para que o mesmo canal se agrupe.',
	tool_utm_how_title: 'Como funciona',
	tool_utm_how_body:
		'O criador analisa seu URL base, mantém os parâmetros de consulta existentes e acrescenta os parâmetros UTM com &. Cada valor é codificado para que espaços, caracteres chineses e símbolos sobrevivam no link. Se o URL tiver um hash, ele é movido para depois de todos os parâmetros. Os cinco parâmetros UTM são o que o Google Analytics lê para atribuir a visita a uma origem, mídia e campanha.',
	tool_utm_rules_title: 'Regras do criador',
	tool_utm_rules_body: 'Estas são as definições e regras de codificação dos parâmetros UTM, segundo a documentação do Google Analytics.',
	tool_utm_rules_item_1: 'utm_source identifica onde o link foi visto; utm_medium identifica como foi entregue. Ambos são obrigatórios para atribuição.',
	tool_utm_rules_item_2: 'utm_campaign é o nome da promoção e é obrigatório aqui. utm_term e utm_content são opcionais: term para palavras-chave pagas, content para diferenciar dois links.',
	tool_utm_rules_item_3: 'Se o URL base já tem parâmetros de consulta, eles são mantidos e os UTM são acrescentados com &; um parâmetro existente com o mesmo nome é substituído.',
	tool_utm_rules_item_4: 'Os valores são codificados: espaços viram %20 e caracteres não ASCII também. O fragmento (#âncora) sempre fica depois da string de consulta.',
	tool_utm_rules_item_5: 'Use um padrão consistente em minúsculas. Os valores UTM diferenciam maiúsculas no Google Analytics, então facebook e Facebook seriam duas origens.',
	tool_utm_example_title: 'Exemplo',
	tool_utm_example:
		'A entrada de exemplo é https://example.com/page com utm_source=newsletter, utm_medium=email e utm_campaign=summer_sale. O link gerado é https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'Bons usos',
	tool_utm_usecase_1:
		'Campanhas sociais: crie um link por plataforma com o mesmo utm_campaign, para o GA4 reportar toda a promoção em uma linha.',
	tool_utm_usecase_2:
		'Envios de e-mail: use utm_source=newsletter, utm_medium=email e valores de content distintos para comparar dois banners que apontam para a mesma página.',
	tool_utm_usecase_3:
		'QR codes e links impressos: um URL UTM completo é longo, mas você pode encurtá-lo após gerar, mantendo os parâmetros.',
	tool_utm_faq_q1: 'Qual a diferença entre utm_source e utm_medium?',
	tool_utm_faq_a1:
		'utm_source diz onde o link foi visto (newsletter, facebook, google), enquanto utm_medium diz como foi entregue (email, cpc, social, referral). O GA4 os combina com utm_campaign para nomear a origem do tráfego.',
	tool_utm_faq_q2: 'O URL já tem parâmetros de consulta. Eles serão perdidos?',
	tool_utm_faq_a2:
		'Não. Os parâmetros existentes são mantidos e os UTM são acrescentados com &. Se o URL já contém um parâmetro com o mesmo nome, o novo valor o substitui.',
	tool_utm_faq_q3: 'E espaços, caracteres chineses ou símbolos nos valores?',
	tool_utm_faq_a3:
		'Cada valor é codificado: espaços viram %20 e caracteres não ASCII também são codificados. O link gerado continua válido em clientes de e-mail, mensageiros e navegadores.',
	tool_utm_faq_q4: 'Os valores UTM diferenciam maiúsculas?',
	tool_utm_faq_a4:
		'Sim. O Google Analytics trata utm_source=Facebook e utm_source=facebook como origens diferentes. Use um padrão consistente em minúsculas para que o mesmo canal se agrupe.',
	tool_utm_faq_q5: 'Quando devo usar utm_term e utm_content?',
	tool_utm_faq_a5:
		'utm_term identifica palavras-chave de busca paga, útil para o Google Ads. utm_content distingue dois links ou anúncios que apontam para o mesmo URL, como um banner de cabeçalho e um link de rodapé.',
	tool_utm_faq_q6: 'Meu URL é enviado para algum lugar?',
	tool_utm_faq_a6: 'Não. O criador roda inteiramente no seu navegador e nada é enviado.',
	tool_utm_references: 'Google Analytics — Campanhas personalizadas (UTM); Google Search Central — Parâmetros de URL.',
	tool_utm_ref_ga_label: 'Google Analytics — Campanhas personalizadas (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central — Parâmetros de URL',
};

export default pt;
