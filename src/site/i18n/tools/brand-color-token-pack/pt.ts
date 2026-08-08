/**
 * i18n tool shard (brand-color-token-pack / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'Uma cor base da marca vira um pacote completo: HEX, RGB, HSL, OKLCH, escala 50–950, pares de texto preto/branco por degrau e variáveis CSS ou JSON copiáveis — tudo no navegador.',
  tool_brand_color_token_pack_bad_hex: 'Digite um HEX válido de 3 ou 6 dígitos (ex.: #2563EB).',
  tool_brand_color_token_pack_base_label: 'Cor base',
  tool_brand_color_token_pack_clear: 'Limpar',
  tool_brand_color_token_pack_contrast_col: 'Texto',
  tool_brand_color_token_pack_copy_css: 'Copiar CSS',
  tool_brand_color_token_pack_copy_done: 'Copiado',
  tool_brand_color_token_pack_copy_json: 'Copiar JSON',
  tool_brand_color_token_pack_desc:
    'Uma cor base → HEX/RGB/HSL/OKLCH, escala 50–950, pares de contraste, variáveis CSS — local.',
  tool_brand_color_token_pack_description:
    'Monte um pacote de tokens de cor da marca a partir de uma base no navegador. Passos: escolha a base (HEX ou seletor), veja HEX/RGB/HSL/OKLCH, gere a escala 50–950 com pares preto/branco em cada degrau e copie variáveis CSS ou JSON. Ao abrir, carrega o azul de exemplo #2563eb — nada é enviado.',
  tool_brand_color_token_pack_empty: 'Gere os tokens primeiro e depois copie CSS ou JSON.',
  tool_brand_color_token_pack_example:
    'Carregue a amostra (#2563EB). O bloco de espaços mostra HEX, RGB, HSL e OKLCH da base; a grade lista 50–950 com texto preto ou branco recomendado e razão de contraste. Copiar CSS retorna :root { --color-50: …; … --color-950: …; } pronto para sua folha de estilo.',
  tool_brand_color_token_pack_example_title: 'Exemplo',
  tool_brand_color_token_pack_faq_a1:
    'Não. Cálculo e exportação rodam nesta aba — suas cores não vão para servidor.',
  tool_brand_color_token_pack_faq_a2:
    'O degrau 500 é sua cor base. Degraus mais claros (50–400) misturam com branco; mais escuros (600–950) com preto. A mistura é linear em sRGB para manter o matiz estável.',
  tool_brand_color_token_pack_faq_a3:
    'Cada amostra compara texto preto e branco sobre aquele fundo e escolhe o de maior contraste WCAG. Os rótulos mostram a razão e se texto normal provavelmente atinge AA (4,5:1) ou AA grande (3:1).',
  tool_brand_color_token_pack_faq_a4:
    'Copiar CSS gera propriedades :root (--color-50 a --color-950). Copiar JSON entrega a mesma escala mais os espaços da base em dados estruturados para tokens de design.',
  tool_brand_color_token_pack_faq_a5:
    'São sugestões rápidas preto/branco por degrau. Para pares personalizados ou níveis WCAG exatos, abra o verificador de contraste WCAG e cole o HEX de qualquer amostra.',
  tool_brand_color_token_pack_faq_q1: 'Minha cor sai do navegador?',
  tool_brand_color_token_pack_faq_q2: 'Como a escala 50–950 é construída?',
  tool_brand_color_token_pack_faq_q3: 'O que significam as colunas de contraste?',
  tool_brand_color_token_pack_faq_q4: 'O que Copiar CSS e Copiar JSON incluem?',
  tool_brand_color_token_pack_faq_q5: 'Quando usar o verificador de contraste?',
  tool_brand_color_token_pack_generate: 'Gerar',
  tool_brand_color_token_pack_how_body:
    'Digite ou escolha uma cor base da marca. A página mostra HEX, RGB, HSL e OKLCH, gera escala de 11 degraus (50–950) com prévia de UI e recomenda texto preto ou branco com razão em cada amostra. Copie variáveis CSS ou JSON quando a rampa servir — tudo local.',
  tool_brand_color_token_pack_how_title: 'Como funciona',
  tool_brand_color_token_pack_preview_label: 'Prévia de UI',
  tool_brand_color_token_pack_rules_body:
    'O que esperar da escala, espaços de cor, dicas de contraste e privacidade.',
  tool_brand_color_token_pack_rules_item_1:
    'Degrau 500 é sua base. Abaixo clareia misturando com branco; acima escurece com preto (mistura linear em sRGB).',
  tool_brand_color_token_pack_rules_item_2:
    'O bloco base lista HEX, RGB, HSL e OKLCH da mesma cor. OKLCH usa conversão sRGB → linear → OKLab para alinhar com CSS moderno.',
  tool_brand_color_token_pack_rules_item_3:
    'Cada amostra recomenda texto preto ou branco — o que der maior contraste naquele fundo. Razões seguem luminância relativa WCAG; rótulos AA são orientativos.',
  tool_brand_color_token_pack_rules_item_4:
    'Privacidade: geração, prévia e cópia ocorrem localmente nesta aba — sem upload das cores da marca.',
  tool_brand_color_token_pack_rules_title: 'Regras que você deve saber',
  tool_brand_color_token_pack_sample: 'Amostra',
  tool_brand_color_token_pack_scale_label: 'Escala de cor (50–950)',
  tool_brand_color_token_pack_spaces_label: 'Espaços de cor (base)',
  tool_brand_color_token_pack_text_on: 'Texto sobre base',
  tool_brand_color_token_pack_title: 'Gerar escala de cor da marca — paleta 50–950 e tokens CSS',
  tool_brand_color_token_pack_ui_body: 'Corpo de prévia sobre sua cor base com texto sugerido.',
  tool_brand_color_token_pack_ui_btn: 'Ação principal',
  tool_brand_color_token_pack_ui_title: 'Título de prévia',
  tool_brand_color_token_pack_usecase_1:
    'Design systems: parta de um HEX de marca e entregue rampa 50–950 coerente com variáveis CSS para componentes.',
  tool_brand_color_token_pack_usecase_2:
    'Modo escuro: use tons claros (50–300) em superfícies e tons profundos (700–950) para texto sobre a marca.',
  tool_brand_color_token_pack_usecase_3:
    'Handoff para dev: copie tokens JSON ou propriedades CSS em vez de redigitar HEX de um print.',
  tool_brand_color_token_pack_usecases_title: 'Bons casos',
};
export default pt;
