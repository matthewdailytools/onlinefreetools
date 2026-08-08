/**
 * i18n tool shard (wcag-contrast-checker / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA texto grande',
  tool_wcag_contrast_checker_aa_normal: 'AA texto normal',
  tool_wcag_contrast_checker_aaa_large: 'AAA texto grande',
  tool_wcag_contrast_checker_aaa_normal: 'AAA texto normal',
  tool_wcag_contrast_checker_article:
    'Verificador de contraste WCAG com luminância relativa, selos AA/AAA, pré-visualização e sugestões de cor acessíveis — tudo no navegador.',
  tool_wcag_contrast_checker_bad_hex: 'Informe cores HEX válidas (#RGB ou #RRGGBB).',
  tool_wcag_contrast_checker_bg_label: 'Fundo',
  tool_wcag_contrast_checker_check: 'Verificar',
  tool_wcag_contrast_checker_clear: 'Limpar',
  tool_wcag_contrast_checker_copy: 'Copiar resumo',
  tool_wcag_contrast_checker_copy_done: 'Copiado',
  tool_wcag_contrast_checker_desc:
    'Confira a razão de contraste e o cumprimento AA/AAA — sem enviar cores ao servidor.',
  tool_wcag_contrast_checker_description:
    'Escolha cor de texto e fundo para ver a razão WCAG e o resultado AA/AAA em texto normal e grande. Passos: selecione ou digite HEX, clique Verificar, leia a razão e os selos, troque ou teste sugestões. Exemplo: #767676 sobre #ffffff ≈ 4,54:1 — passa AA em texto normal, não atinge AAA em texto normal. As cores ficam no navegador.',
  tool_wcag_contrast_checker_empty: 'Faça uma verificação antes de copiar.',
  tool_wcag_contrast_checker_example:
    'Carregue o exemplo: primeiro plano #767676 sobre fundo #ffffff dá cerca de 4,54:1. AA texto normal aprova (≥4,5:1), AA texto grande aprova (≥3:1), AAA texto normal reprova (≥7:1), AAA texto grande aprova (≥4,5:1). Troque as cores para ver a razão mudar.',
  tool_wcag_contrast_checker_example_title: 'Exemplo',
  tool_wcag_contrast_checker_fail: 'Reprovado',
  tool_wcag_contrast_checker_faq_a1:
    'AA texto normal exige pelo menos 4,5:1; AA texto grande (18 pt regular ou 14 pt negrito) 3:1; AAA texto normal 7:1; AAA texto grande 4,5:1. Esta página mostra os quatro selos de uma vez.',
  tool_wcag_contrast_checker_faq_a2:
    'Texto grande tolera menos contraste por ser mais legível. WCAG considera grande quando ≥18 pt regular ou ≥14 pt em negrito. A pré-visualização traz linha grande e normal para comparar.',
  tool_wcag_contrast_checker_faq_a3:
    'Não. O cálculo roda no navegador. Confira a aba Rede — os valores de cor não são enviados.',
  tool_wcag_contrast_checker_faq_a4:
    'Abaixo de 4,5:1, a ferramenta pode sugerir um primeiro plano ou fundo mais claro/escuro que atinja AA em texto normal. São pontos de partida misturando com branco ou preto, não paletas finais de marca.',
  tool_wcag_contrast_checker_faq_a5:
    'Use esta página para validar qualquer par texto/fundo. Para paleta de marca com tokens semânticos, abra a ferramenta de tokens de cor; também dá para amostrar cores de uma foto com a extração de cores.',
  tool_wcag_contrast_checker_faq_q1: 'Quais são os limites de contraste WCAG?',
  tool_wcag_contrast_checker_faq_q2: 'O que conta como texto grande?',
  tool_wcag_contrast_checker_faq_q3: 'Minhas cores saem do navegador?',
  tool_wcag_contrast_checker_faq_q4: 'Como usar as sugestões de cor?',
  tool_wcag_contrast_checker_faq_q5: 'Qual a relação com tokens de marca?',
  tool_wcag_contrast_checker_fg_label: 'Primeiro plano',
  tool_wcag_contrast_checker_how_body:
    'Defina texto e fundo com o seletor ou digitando HEX. A página converte sRGB em luminância relativa, calcula a razão e exibe Aprovado/Reprovado para AA e AAA (texto normal e grande). Troque o par, copie um resumo ou aplique uma sugestão quando o contraste for baixo.',
  tool_wcag_contrast_checker_how_title: 'Como funciona',
  tool_wcag_contrast_checker_pass: 'Aprovado',
  tool_wcag_contrast_checker_preview_label: 'Pré-visualização',
  tool_wcag_contrast_checker_preview_large: 'Amostra de texto grande',
  tool_wcag_contrast_checker_preview_normal: 'Amostra de texto normal',
  tool_wcag_contrast_checker_ratio_label: 'Razão de contraste',
  tool_wcag_contrast_checker_rules_body:
    'O contraste WCAG usa luminância relativa — não só o matiz. Consulte estas regras se a razão parecer estranha.',
  tool_wcag_contrast_checker_rules_item_1:
    'A luminância relativa L vem dos canais sRGB após a curva de linearização WCAG. Razão = (Lclaro + 0,05) / (Lescuro + 0,05).',
  tool_wcag_contrast_checker_rules_item_2:
    'Limites: AA texto normal 4,5:1, AA texto grande 3:1, AAA texto normal 7:1, AAA texto grande 4,5:1. Uma razão alimenta os quatro selos.',
  tool_wcag_contrast_checker_rules_item_3:
    'Somente HEX sRGB opaco (#RGB ou #RRGGBB). HEX inválido gera erro; primeiro plano e fundo iguais dão 1:1 e reprovam todos os níveis.',
  tool_wcag_contrast_checker_rules_item_4:
    'Privacidade: as cores são processadas localmente nesta aba — nada vai ao servidor.',
  tool_wcag_contrast_checker_rules_title: 'Regras esperadas',
  tool_wcag_contrast_checker_sample: 'Exemplo',
  tool_wcag_contrast_checker_suggest_bg: 'Teste fundo {hex} com este primeiro plano para AA texto normal.',
  tool_wcag_contrast_checker_suggest_fg: 'Teste primeiro plano {hex} neste fundo para AA texto normal.',
  tool_wcag_contrast_checker_suggest_label: 'Sugestões',
  tool_wcag_contrast_checker_suggest_none: 'Já atende AA em texto normal (4,5:1).',
  tool_wcag_contrast_checker_swap: 'Trocar',
  tool_wcag_contrast_checker_title: 'Verificador de contraste WCAG — razão AA/AAA',
  tool_wcag_contrast_checker_usecase_1:
    'UI: valide corpo de texto e rótulos sobre o fundo da marca antes da entrega.',
  tool_wcag_contrast_checker_usecase_2:
    'Botões e chips: confira branco sobre cor ou o inverso para AA normal ou grande.',
  tool_wcag_contrast_checker_usecase_3:
    'Modo escuro: troque superfícies claras/escuras e garanta que texto secundário mantenha 4,5:1 ou 3:1 no grande.',
  tool_wcag_contrast_checker_usecases_title: 'Bons momentos',
};
export default pt;
