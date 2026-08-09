/**
 * i18n tool shard (how-to-calculate-aspect-ratio / pt).
 * Portuguese rewrite for busca «proporção / relação de aspecto».
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_aspect_ratio_title: 'Calculadora de proporção — Como calcular e escalar razões',
	tool_aspect_ratio_description:
		'Encontre a proporção simplificada a partir da largura × altura e escale para uma largura (ou altura) alvo. Os presets 16:9, 4:3 e 1:1 ficam na mesma página. Exemplo: 1920×1080 → 16:9; largura 1280 → altura 720. Roda no navegador; os números ficam no dispositivo e não são enviados ao servidor.',
	tool_aspect_ratio_article:
		'Simplifica um par de dimensões com o máximo divisor comum e mantém a razão ao escolher um novo tamanho de exportação.',
	tool_aspect_ratio_calculate: 'Calcular',
	tool_aspect_ratio_sample: 'Carregar exemplo',
	tool_aspect_ratio_clear: 'Limpar',
	tool_aspect_ratio_preset_label: 'Predefinição (opcional)',
	tool_aspect_ratio_preset_custom: 'Personalizado',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'Largura',
	tool_aspect_ratio_h_label: 'Altura',
	tool_aspect_ratio_w_ph: 'ex. 1920',
	tool_aspect_ratio_h_ph: 'ex. 1080',
	tool_aspect_ratio_scale_mode_label: 'Escalar por',
	tool_aspect_ratio_scale_by_w: 'Largura alvo',
	tool_aspect_ratio_scale_by_h: 'Altura alvo',
	tool_aspect_ratio_target_w_label: 'Largura alvo',
	tool_aspect_ratio_target_h_label: 'Altura alvo',
	tool_aspect_ratio_target_w_ph: 'ex. 1280',
	tool_aspect_ratio_target_h_ph: 'ex. 720',
	tool_aspect_ratio_result_ratio: 'Proporção',
	tool_aspect_ratio_result_scaled: 'Tamanho escalado',
	tool_aspect_ratio_err_input: 'Informe largura e altura positivas e um tamanho alvo positivo para o lado que você escala.',
	tool_aspect_ratio_how_title: 'Como funciona',
	tool_aspect_ratio_how_body:
		'Digite largura e altura ou escolha 16:9, 4:3 ou 1:1. A ferramenta simplifica com o MDC e calcula o outro lado ao definir o alvo. Tudo no navegador; nada vai para o servidor.',
	tool_aspect_ratio_formula_title: 'Fórmula e premissas',
	tool_aspect_ratio_formula_body: 'Simplificação e escala usam o mdc do par de entrada:',
	tool_aspect_ratio_formula_item_1: 'g = mdc(arredondar(W), arredondar(H)). Razão = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'Por largura: H′ = alvoW × H ÷ W. Por altura: W′ = alvoH × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'Presets só preenchem tamanhos de exemplo; não são páginas separadas.',
	tool_aspect_ratio_example_title: 'Exemplo',
	tool_aspect_ratio_example:
		'Exemplo: 1920×1080. mdc=120 → 16:9. Com largura 1280, altura = 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'Quando usar',
	tool_aspect_ratio_usecase_1: 'Definir exportação de vídeo 16:9 sem esticar a imagem.',
	tool_aspect_ratio_usecase_2: 'Alinhar um canvas de design à proporção do celular ou monitor.',
	tool_aspect_ratio_usecase_3: 'Transformar uma resolução conhecida em rótulo curto de proporção.',
	tool_aspect_ratio_faq_q1: 'Como a proporção é simplificada?',
	tool_aspect_ratio_faq_a1: 'Dividindo largura e altura pelo máximo divisor comum após arredondar; 1920×1080 vira 16:9.',
	tool_aspect_ratio_faq_q2: 'Posso escalar pela altura?',
	tool_aspect_ratio_faq_a2: 'Sim. Escolha altura alvo e a ferramenta resolve a largura mantendo a mesma razão.',
	tool_aspect_ratio_faq_q3: 'Por que 16:9 é só predefinição?',
	tool_aspect_ratio_faq_a3: 'É um ponto de partida comum; manter na mesma página evita calculadoras quase iguais.',
	tool_aspect_ratio_faq_q4: 'Meus números são enviados?',
	tool_aspect_ratio_faq_a4: 'Não. O cálculo fica no navegador do seu dispositivo, sem envio ao servidor.',
	tool_aspect_ratio_references: 'NIST SP 811 sobre conversões de comprimento e unidades.',
	tool_aspect_ratio_ref_nist_label: 'NIST — Publicação especial 811 (conversões)',
};

export default pt;
