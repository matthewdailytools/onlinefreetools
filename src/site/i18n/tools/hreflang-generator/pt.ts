/**
 * i18n tool shard (hreflang-generator / pt).
 * Português — reescrita independente orientada a buscas locais.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_hreflang_home_title: 'Gerador de hreflang',
	tool_hreflang_home_desc:
		'Diga ao Google qual versão de idioma mostrar a cada usuário — transforme URLs de idioma em tags hreflang, cabeçalho HTTP Link e marcação de sitemap no seu navegador.',
	tool_hreflang_title: 'Gerador de hreflang — crie tags para sites multilíngues',
	tool_hreflang_description:
		'Sem hreflang, o Google pode tratar traduções como duplicatas. Transforme URLs por idioma em link, HTTP Link ou sitemap—local. Exemplo: en, es e ja.',
	tool_hreflang_input_label: 'Lista de URLs por idioma',
	tool_hreflang_input_ph:
		'Um par por linha: código do idioma + URL. Exemplo:\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'Cada linha é «código-idioma URL» ou «URL código-idioma». Os códigos usam a forma BCP 47, como en, en-US ou zh-Hans.',
	tool_hreflang_xdefault_label: 'URL de fallback x-default',
	tool_hreflang_xdefault_none: '— sem x-default —',
	tool_hreflang_xdefault_hint:
		'Opcional. x-default diz ao Google qual versão mostrar quando nenhum idioma coincide, útil para uma raiz ou página inicial em inglês.',
	tool_hreflang_generate: 'Gerar',
	tool_hreflang_sample: 'Carregar exemplo',
	tool_hreflang_clear: 'Limpar',
	tool_hreflang_copy: 'Copiar',
	tool_hreflang_copied: 'Copiado',
	tool_hreflang_error_prefix: 'Erro: ',
	tool_hreflang_url_protocol: 'Uma URL não tinha protocolo — https:// foi adicionado automaticamente.',
	tool_hreflang_lang_invalid: 'Código de idioma inválido: {lang}. Use a forma BCP 47, como en, en-US ou zh-Hans.',
	tool_hreflang_no_valid_rows: 'Nenhuma linha válida. Adicione ao menos um código de idioma e uma URL.',
	tool_hreflang_output_label: 'Marcação gerada',
	tool_hreflang_tab_link: 'Tags <link>',
	tool_hreflang_tab_http: 'Cabeçalho HTTP Link',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'Como funciona',
	tool_hreflang_how_body:
		'O gerador analisa cada linha em um código de idioma e uma URL, e então renderiza o mesmo conjunto de relações em três formas. A forma <link> vai no <head> de cada página. A forma de cabeçalho HTTP Link é enviada na resposta do servidor. A forma sitemap incorpora <xhtml:link> dentro de cada bloco <url>. Cada URL recebe uma anotação hreflang de autorreferência, e a entrada x-default opcional cobre visitantes cujo idioma não aparece na lista.',
	tool_hreflang_how_item_1: 'Cole pares idioma|URL (um par por linha).',
	tool_hreflang_how_item_2: 'Opcionalmente adicione uma URL x-default.',
	tool_hreflang_how_item_3: 'Escolha tags <link>, cabeçalho HTTP Link ou saída sitemap xhtml:link.',
	tool_hreflang_how_item_4: 'Clique em Gerar e copie a marcação desse formato.',
	tool_hreflang_rules_title: 'Regras usadas pelo gerador',
	tool_hreflang_rules_body: 'Estas regras vêm do Google Search Central e do padrão BCP 47 de tags de idioma.',
	tool_hreflang_rules_item_1:
		'Cada versão de idioma deve incluir uma anotação hreflang de autorreferência que aponte para sua própria URL. Omiti-la enfraquece o sinal.',
	tool_hreflang_rules_item_2:
		'Cada URL deve aparecer a partir de todas as versões: o conjunto completo de alternativas está em cada página, não apenas em uma direção.',
	tool_hreflang_rules_item_3:
		'Os códigos de idioma usam BCP 47: um idioma de duas letras, opcionalmente uma região (en-US) e opcionalmente um sistema de escrita (zh-Hans). x-default é o código especial de fallback.',
	tool_hreflang_rules_item_4:
		'x-default aponta para a página mostrada quando nenhum idioma listado coincide, por exemplo uma raiz em inglês. O Google pode usá-la como fallback para todos os idiomas não detectados.',
	tool_hreflang_rules_item_5:
		'O Google considera as três formas equivalentes e até permite usar as três de uma vez, mas diz que isso não traz ganho na Busca. Fique com uma por conjunto de páginas: três implementações acabam se desencontrando e anotações contraditórias são ignoradas.',
	tool_hreflang_example_title: 'Exemplo',
	tool_hreflang_example:
		'A amostra lista três versões de uma página: https://example.com/ (en), https://example.com/es/ (es) e https://example.com/ja/ (ja). As tags <link> geradas incluem autorreferências para cada idioma, além de um x-default opcional apontando para a raiz em inglês.',
	tool_hreflang_usecases_title: 'Bons usos',
	tool_hreflang_usecase_1:
		'Lançar um site multilíngue: gere as tags <link> uma vez por template e verifique se cada versão de idioma lista o conjunto completo.',
	tool_hreflang_usecase_2:
		'Após uma reestruturação do site, regenere a marcação para que o mapeamento de URLs permaneça consistente entre idiomas.',
	tool_hreflang_usecase_3:
		'Quando os resultados de busca mostram o idioma errado, verifique se existem autorreferências e x-default e se as URLs apontam para páginas canônicas.',
	tool_hreflang_faq_q1: 'Qual das três formas devo usar?',
	tool_hreflang_faq_a1:
		'Use as tags <link> quando puder editar o HTML. Use o cabeçalho HTTP Link quando as páginas forem servidas por um servidor que você controla e for difícil mudar o HTML. Use a forma sitemap se preferir mantê-lo no sitemap XML.',
	tool_hreflang_faq_q2: 'Quando devo adicionar x-default?',
	tool_hreflang_faq_a2:
		'x-default diz ao Google qual versão mostrar quando o idioma do visitante não coincide com nenhum código listado. Adicione-o quando tiver uma raiz ou página de fallback, geralmente em inglês.',
	tool_hreflang_faq_q3: 'Toda URL precisa de uma hreflang de autorreferência?',
	tool_hreflang_faq_a3:
		'Sim. Cada versão de idioma deve incluir sua própria URL no conjunto, com uma hreflang de autorreferência apontando para si mesma. O Google usa o conjunto completo para escolher a página certa por idioma.',
	tool_hreflang_faq_q4: 'Qual formato de código de idioma é válido?',
	tool_hreflang_faq_a4:
		'Códigos BCP 47: um idioma de duas ou três letras, opcionalmente uma região (en-US) e opcionalmente um sistema de escrita (zh-Hans). O idioma em minúsculas, e não invente códigos como «en-us-en».',
	tool_hreflang_faq_q5: 'Hreflang vai no <head> ou no sitemap?',
	tool_hreflang_faq_a5:
		'Ambos funcionam, mas use uma única forma consistente por conjunto de páginas. As tags <link> ficam no <head>, o cabeçalho HTTP Link é enviado com a resposta e o sitemap usa blocos xhtml:link.',
	tool_hreflang_faq_q6: 'Minhas URLs são enviadas para algum lugar?',
	tool_hreflang_faq_a6: 'Não. O gerador roda inteiramente no seu navegador e nada é enviado.',
	tool_hreflang_references: 'Google Search Central — Versões localizadas (hreflang); tags de idioma BCP 47.',
	tool_hreflang_ref_searchcentral_label: 'Search Central — Versões localizadas (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — Tags para identificar idiomas',
};

export default pt;
