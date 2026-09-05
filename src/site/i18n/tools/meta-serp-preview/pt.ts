/**
 * i18n tool shard (meta-serp-preview / pt).
 * Portuguese locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_serp_home_title: 'Prévia de resultados Google',
	tool_serp_home_desc: 'Um título cortado custa cliques no Google — confira o corte antes de publicar.',
	tool_serp_title: 'Prévia de resultados Google — confira o corte do título e da descrição',
	tool_serp_description:
		'Títulos cortados perdem cliques no Google. Cole título e descrição para ver o corte no desktop e celular. Só no navegador. Exemplo: EN e CJK.',
	tool_serp_preview: 'Prévia',
	tool_serp_sample: 'Exemplo',
	tool_serp_clear: 'Limpar',
	tool_serp_copy: 'Copiar',
	tool_serp_copied: 'Copiado',
	tool_serp_title_label: 'Título',
	tool_serp_title_ph: 'O título da página exibido nos resultados',
	tool_serp_desc_label: 'Meta descrição',
	tool_serp_desc_ph: 'O texto do trecho abaixo do título',
	tool_serp_url_label: 'URL (opcional)',
	tool_serp_url_ph: 'ex.: https://example.com/page',
	tool_serp_compare_label: 'Comparar com um segundo título',
	tool_serp_title_b_label: 'Título B',
	tool_serp_title_b_ph: 'Cole um título alternativo para comparar',
	tool_serp_desktop: 'Visualização desktop',
	tool_serp_mobile: 'Visualização mobile',
	tool_serp_char_count: '{n} caracteres',
	tool_serp_px_width: '~{n}px',
	tool_serp_cut_warning: 'Cortado — a linha excede o viewport de ~{limit}px',
	tool_serp_fit: 'Cabe no viewport',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'Digite um título para ver a prévia.',
	tool_serp_how_title: 'Como funciona',
	tool_serp_how_body:
		'Digite ou cole o título, a descrição e uma URL opcional. A ferramenta estima quantos caracteres e pixels aproximados cada linha ocupa usando uma aproximação de métricas de fonte (glifos largos CJK contam mais que letras ASCII estreitas) e desenha um trecho estilo Google para desktop e outro para mobile. Linhas mais largas que o viewport estimado recebem uma marca de corte.',
	tool_serp_how_item_1: 'Informe título e meta description (URL de exibição opcional).',
	tool_serp_how_item_2: 'Alterne entre estimativa desktop ou mobile se ambas importarem.',
	tool_serp_how_item_3: 'Acompanhe dicas de comprimento e pixels enquanto edita.',
	tool_serp_how_item_4: 'Revise o texto até a prévia truncar de forma limpa.',
	tool_serp_rules_title: 'O que a prévia mostra',
	tool_serp_rules_body:
		'Os limites de pixels são aproximados. O Google mede a largura renderizada, não a contagem de caracteres, então idiomas densos e glifos largos cortam com menos caracteres.',
	tool_serp_rules_item_1: 'O limite do título no desktop é estimado em ~600px e no mobile em ~460px. Linhas mais largas são exibidas com marca de corte.',
	tool_serp_rules_item_2: 'Descrições são estimadas em cerca de duas linhas (~600px no desktop e 460px no mobile por linha).',
	tool_serp_rules_item_3: 'A largura do glifo é estimada: letras e dígitos ASCII cerca de 0.5em, caracteres CJK perto de 1em e emojis mais largos.',
	tool_serp_rules_item_4: 'São estimativas para planejar. O Google pode reescrever títulos ou descrições, e a renderização real depende da fonte e do viewport do usuário.',
	tool_serp_example_title: 'Exemplo',
	tool_serp_example:
		'Exemplo: título “Meta SERP Preview — How to Preview Google Title & Description Truncation Online”, descrição com cerca de duas linhas, URL example.com/page → no desktop o título corta perto do 57º caractere com “…” e no mobile antes; a descrição cabe em duas linhas.',
	tool_serp_usecases_title: 'Quando usar',
	tool_serp_usecase_1: 'Antes de publicar: cole o título e a descrição finais para ver se as palavras-chave sobrevivem ao corte.',
	tool_serp_usecase_2: 'Compare dois títulos candidatos lado a lado e escolha o que mantém a palavra-chave principal visível no mobile.',
	tool_serp_usecase_3: 'Páginas CJK: confira quantos caracteres chineses cabem antes do corte, já que glifos largos atingem o limite com menos caracteres.',
	tool_serp_faq_q1: 'Por que um título CJK de 30 caracteres corta antes de um em inglês de 60?',
	tool_serp_faq_a1: 'Os resultados cortam pela largura renderizada em pixels, não pela contagem de caracteres. Glifos CJK têm quase um em, enquanto letras ASCII têm em média meio em, então menos caracteres preenchem o mesmo viewport.',
	tool_serp_faq_q2: 'Os limites de pixels são exatos?',
	tool_serp_faq_a2: 'Não. Os viewports de desktop e mobile variam por dispositivo e fonte. Esta ferramenta usa os limites comuns de ~600px no desktop e ~460px no mobile como estimativa para planejamento, não como garantia de como o Google renderizará sua página.',
	tool_serp_faq_q3: 'Alguma ferramenta do Google mostra o snippet definitivo?',
	tool_serp_faq_a3: 'Não. A inspeção de URLs informa o status de rastreamento e indexação com uma captura da página renderizada, e o teste de resultados enriquecidos verifica a elegibilidade dos dados estruturados — nenhuma delas prevê o texto do snippet. Fora que o Google reescreve o título do link quando ele combina mal com a consulta, então a única checagem que vale é pesquisar a URL já publicada.',
	tool_serp_faq_q4: 'Meu título é enviado para algum lugar?',
	tool_serp_faq_a4: 'Não. Todo o texto fica na aba do seu navegador e nunca é enviado a um servidor. Feche a aba e tudo desaparece.',
	tool_serp_references: 'Google Search Central — Controle os títulos nos resultados; Google Search Central — Controle os trechos.',
	tool_serp_ref_title_label: 'Search Central — Controle de títulos',
	tool_serp_ref_snippet_label: 'Search Central — Controle de trechos',
};

export default pt;
