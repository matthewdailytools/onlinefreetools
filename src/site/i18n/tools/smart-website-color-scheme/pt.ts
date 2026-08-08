/**
 * i18n tool shard (smart-website-color-scheme / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'Abaixo de AA',
  tool_smart_website_color_scheme_aa_pass: 'AA ok',
  tool_smart_website_color_scheme_add_theme: 'Adicionar tema',
  tool_smart_website_color_scheme_article:
    'A partir de uma cor de marca, monte um esquema de site completo: neutros compartilhados, tokens semânticos (links neutros, status fixos), prévia de chrome claro, autochecagem de contraste e CSS :root para colar — tudo no navegador.',
  tool_smart_website_color_scheme_bad_hex: 'Informe um HEX válido de 3 ou 6 dígitos (ex.: #0F6E8C).',
  tool_smart_website_color_scheme_bad_id:
    'O id do tema deve ser único, 1–32 caracteres: letras, números, - ou _.',
  tool_smart_website_color_scheme_check_muted: 'Texto secundário na superfície',
  tool_smart_website_color_scheme_check_on_action: 'Texto sobre ação (on-action)',
  tool_smart_website_color_scheme_check_text: 'Corpo na superfície',
  tool_smart_website_color_scheme_checks_label: 'Autochecagem de contraste (tema ativo)',
  tool_smart_website_color_scheme_clear: 'Limpar',
  tool_smart_website_color_scheme_col_role: 'Papel',
  tool_smart_website_color_scheme_col_token: 'Token',
  tool_smart_website_color_scheme_col_value: 'Valor',
  tool_smart_website_color_scheme_copy_css: 'Copiar CSS',
  tool_smart_website_color_scheme_copy_done: 'Copiado',
  tool_smart_website_color_scheme_copy_json: 'Copiar JSON',
  tool_smart_website_color_scheme_cp_brand: 'Marca',
  tool_smart_website_color_scheme_cp_btn: 'Botão outline',
  tool_smart_website_color_scheme_cp_card_body:
    'O corpo do card usa texto atenuado. Links ficam neutros — não a cor de ação da marca.',
  tool_smart_website_color_scheme_cp_card_title: 'Título do card',
  tool_smart_website_color_scheme_cp_err: 'Erro usa danger, não a marca.',
  tool_smart_website_color_scheme_cp_link: 'Link relacionado',
  tool_smart_website_color_scheme_cp_nav: 'Item de nav',
  tool_smart_website_color_scheme_cp_side1: 'Barra lateral',
  tool_smart_website_color_scheme_cp_side2: 'Ativo',
  tool_smart_website_color_scheme_desc:
    'Esquema do site: neutros + tokens CSS semânticos, links neutros e status fixos — local.',
  tool_smart_website_color_scheme_description:
    'Gere um esquema de cores do site no navegador. Escolha um HEX de marca (teal de exemplo #0F6E8C), receba neutros compartilhados, action/hover/soft/focus, links neutros, cores de status fixas, prévia do chrome e autochecagens AA; depois copie CSS :root ou JSON. Baseado em regras — não é IA na nuvem; nada é enviado.',
  tool_smart_website_color_scheme_empty: 'Gere um esquema antes de copiar CSS ou JSON.',
  tool_smart_website_color_scheme_example:
    'Carregue o exemplo (id teal, #0F6E8C). A prévia mostra superfície branca, destaque suave teal no item ativo (sem barra esquerda), links de corpo neutros e uma linha danger vermelha. A semântica mapeia --link para a cor do texto (não --action). Copiar CSS entrega neutros em :root mais overrides html[data-theme="teal"].',
  tool_smart_website_color_scheme_example_title: 'Exemplo',
  tool_smart_website_color_scheme_faq_a1:
    'Aqui «inteligente» quer dizer regras determinísticas: neutros fixos, a marca deriva action/hover/soft/focus, links ficam neutros e status nunca seguem a marca. Sem chamada a modelo e sem upload — o cálculo roda nesta aba.',
  tool_smart_website_color_scheme_faq_a2:
    'Links padrão usam cores de texto para a página não virar um muro de hiperlinks da marca. A cor da marca fica para ações, seleção, anéis de foco e fills soft leves.',
  tool_smart_website_color_scheme_faq_a3:
    'Danger, success, warning e info permanecem fixos entre temas. Uma marca âmbar não pode virar a cor de erro, senão a UI inteira parece um alerta.',
  tool_smart_website_color_scheme_faq_a4:
    'Use Gerar escala de cor da marca quando precisar de uma rampa 50–950 ou listas HEX/HSL/OKLCH. Esta página entrega um esquema semântico claro completo (bg/surface/link/action/status) pronto para colar.',
  tool_smart_website_color_scheme_faq_a5:
    'As autochecagens cobrem alguns pares-chave do tema ativo. Para pares arbitrários ou AAA, abra o verificador de contraste WCAG e cole o HEX de qualquer token.',
  tool_smart_website_color_scheme_faq_q1: '«Inteligente» é a mesma coisa que IA de cores?',
  tool_smart_website_color_scheme_faq_q2: 'Por que os links não usam a cor da marca?',
  tool_smart_website_color_scheme_faq_q3: 'Por que as cores de status não mudam com o tema?',
  tool_smart_website_color_scheme_faq_q4: 'Quando usar Gerar escala de cor da marca?',
  tool_smart_website_color_scheme_faq_q5: 'Quão completa é a autochecagem de contraste?',
  tool_smart_website_color_scheme_generate: 'Gerar',
  tool_smart_website_color_scheme_how_body:
    'Informe até quatro temas de marca (id + HEX). A ferramenta mantém uma escada neutra compartilhada, deriva tokens de ação de cada marca, mapeia papéis semânticos (incluindo links neutros e status fixos), desenha um chrome claro, roda autochecagens AA e deixa copiar variáveis CSS ou JSON — tudo local.',
  tool_smart_website_color_scheme_how_title: 'Como funciona',
  tool_smart_website_color_scheme_max_themes: 'Você pode adicionar até 4 temas que compartilham os mesmos neutros.',
  tool_smart_website_color_scheme_preview_label: 'Prévia de UI clara',
  tool_smart_website_color_scheme_primitives_label: 'Primitivos (tema ativo + neutros compartilhados)',
  tool_smart_website_color_scheme_remove_theme: 'Remover',
  tool_smart_website_color_scheme_role_action: 'Ação / ênfase da marca',
  tool_smart_website_color_scheme_role_bg: 'Fundo da página / seção',
  tool_smart_website_color_scheme_role_border: 'Bordas e divisores',
  tool_smart_website_color_scheme_role_focus: 'Anel de foco',
  tool_smart_website_color_scheme_role_link: 'Links padrão (neutros)',
  tool_smart_website_color_scheme_role_muted: 'Texto secundário',
  tool_smart_website_color_scheme_role_on_action: 'Texto sobre ação sólida',
  tool_smart_website_color_scheme_role_status: 'Status (desacoplado da marca)',
  tool_smart_website_color_scheme_role_surface: 'Superfície elevada / cards',
  tool_smart_website_color_scheme_role_text: 'Corpo / texto forte',
  tool_smart_website_color_scheme_rules_body:
    'Camadas de tokens, link ≠ ação, status independente, dicas de contraste e privacidade.',
  tool_smart_website_color_scheme_rules_item_1:
    'Primitivos guardam neutros brutos e derivados da marca. A semântica nomeia o propósito (bg, surface, link, action…). Componentes devem referenciar só a semântica.',
  tool_smart_website_color_scheme_rules_item_2:
    'Marca → --action; hover escurece ~22%; soft ≈ 10% alpha; focus-ring ≈ 40% alpha; --bg é um neutro levemente tingido.',
  tool_smart_website_color_scheme_rules_item_3:
    'Links mapeiam para text / text-strong (neutro). Não ligue o --link padrão a --action.',
  tool_smart_website_color_scheme_rules_item_4:
    'Danger / success / warning / info ficam fixos entre temas para a marca nunca substituir a semântica de erro.',
  tool_smart_website_color_scheme_rules_item_5:
    'Privacidade: geração, prévia e cópia para a área de transferência rodam nesta aba. Nenhuma cor de marca é enviada.',
  tool_smart_website_color_scheme_rules_title: 'Regras que você deve esperar',
  tool_smart_website_color_scheme_sample: 'Carregar exemplo',
  tool_smart_website_color_scheme_semantics_label: 'Semântica (tema ativo)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'id do tema',
  tool_smart_website_color_scheme_themes_hint:
    'Neutros e status compartilhados; cada tema só sobrescreve tokens derivados da marca. Máx. 4 temas.',
  tool_smart_website_color_scheme_themes_label: 'Temas de marca',
  tool_smart_website_color_scheme_title: 'Esquema de cores do site — tokens CSS semânticos',
  tool_smart_website_color_scheme_usecase_1:
    'Chrome de ferramenta ou SaaS: casca clara legível com acentos de marca em seleção e foco, não em cada link.',
  tool_smart_website_color_scheme_usecase_2:
    'Rebrand de landing: troque marcas via html[data-theme] mantendo o esqueleto neutro e as cores de status.',
  tool_smart_website_color_scheme_usecase_3:
    'Handoff design→dev: cole variáveis CSS :root em vez de listas HEX de screenshot.',
  tool_smart_website_color_scheme_usecases_title: 'Bom encaixe',
  tool_smart_website_color_scheme_warn_contrast:
    'Aviso: o texto sobre a cor de ação está abaixo de 4,5:1 — escureça a marca ou ajuste --on-action antes de publicar botões sólidos.',
};
export default pt;
