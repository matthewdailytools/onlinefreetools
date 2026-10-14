/**
 * i18n tool shard (flip-image / pt).
 * 葡语用户检索「virar imagem / espelhar imagem」；按钮 Virar / Baixar。
 * 键集须与 en.ts 完全一致；仅编辑本工具键。
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语文案字典（virar / espelhar，本地 Canvas 处理）。 */
const pt: SiteLangDict = {
	tool_flip_image_title: 'Virar imagem — espelho horizontal ou vertical',
	tool_flip_image_desc: 'Espelhe uma foto da esquerda para a direita ou de cima para baixo no dispositivo e baixe em JPEG, WebP ou PNG — sem enviar ao servidor.',
	tool_flip_image_description:
		'Espelhe uma foto na horizontal ou na vertical no navegador, sem enviar o arquivo ao servidor. O processo é direto: escolha a imagem, marque a direção, clique em Virar e depois em Baixar. Exemplo: na grade A/B/C/D, a A vai para a direita. Ideal para corrigir selfie em espelho.',
	tool_flip_image_choose_file: 'Escolher imagem',
	tool_flip_image_drop_hint: 'Ou solte um JPEG, PNG, WebP ou GIF aqui. O processamento fica nesta aba.',
	tool_flip_image_flip: 'Virar',
	tool_flip_image_download: 'Baixar',
	tool_flip_image_sample: 'Carregar exemplo',
	tool_flip_image_clear: 'Limpar',
	tool_flip_image_flip_h: 'Virar na horizontal',
	tool_flip_image_flip_v: 'Virar na vertical',
	tool_flip_image_advanced: 'Configurações avançadas (opcional)',
	tool_flip_image_format_label: 'Formato de saída',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint: 'WebP fica leve e mantém transparência. PNG é sem perdas. JPEG precisa de uma cor de fundo.',
	tool_flip_image_quality_label: 'Qualidade',
	tool_flip_image_quality_hint: 'Vale só para JPEG e WebP. PNG ignora este controle.',
	tool_flip_image_jpeg_bg_label: 'Fundo do JPEG',
	tool_flip_image_jpeg_bg_hint: 'Preenche píxeis transparentes antes de exportar em JPEG. O padrão é branco.',
	tool_flip_image_preview_label: 'Pré-visualização',
	tool_flip_image_progress: 'Virando a imagem…',
	tool_flip_image_step_decode: 'Ler',
	tool_flip_image_step_flip: 'Virar píxeis',
	tool_flip_image_step_encode: 'Codificar',
	tool_flip_image_decode_step: 'Lendo a imagem…',
	tool_flip_image_flip_step: 'Redesenhando em espelho…',
	tool_flip_image_encode_step: 'Codificando em {fmt}…',
	tool_flip_image_elapsed: 'Decorridos {s} s',
	tool_flip_image_empty: 'Escolha uma imagem primeiro.',
	tool_flip_image_no_flip: 'Marque Virar na horizontal e/ou Virar na vertical.',
	tool_flip_image_err_decode: 'Não foi possível ler a imagem. Tente JPEG, PNG ou WebP.',
	tool_flip_image_err_encode: 'Não foi possível exportar. Tente uma imagem menor ou outro formato.',
	tool_flip_image_warn_large: 'Arquivo grande (mais de 25 MB) — pode demorar.',
	tool_flip_image_warn_edge: 'Uma borda passa de cerca de 8192 px — alguns navegadores podem falhar.',
	tool_flip_image_warn_animation: 'GIF animado: só o primeiro quadro é usado.',
	tool_flip_image_status_working: 'A trabalhar…',
	tool_flip_image_status_done: 'Pronto — clique em Baixar para guardar.',
	tool_flip_image_stats_tpl: 'Virada {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'Como virar uma imagem',
	tool_flip_image_how_body:
		'Virar é espelhar: a foto troca de lado sobre um eixo, não gira por um ângulo. A ferramenta redesenha os píxeis de verdade e depois grava no formato que você escolher nas configurações avançadas.',
	tool_flip_image_how_item_1: 'Clique em Escolher imagem ou solte um JPEG, PNG, WebP ou GIF na caixa.',
	tool_flip_image_how_item_2: 'Marque Virar na horizontal (esquerda ↔ direita) e/ou Virar na vertical (cima ↔ baixo). A pré-visualização atualiza na hora.',
	tool_flip_image_how_item_3: 'Se quiser, abra Configurações avançadas e escolha JPEG, WebP ou PNG, a qualidade e a cor de fundo do JPEG.',
	tool_flip_image_how_item_4: 'Clique em Virar, espere a barra de progresso e depois clique em Baixar.',
	tool_flip_image_why_choose_title: 'Por que usar Virar imagem',
	tool_flip_image_why_choose_item_1: 'A foto fica no dispositivo e não é enviada ao servidor — o trabalho acontece nesta aba.',
	tool_flip_image_why_choose_item_2: 'Pré-visualização ao vivo: você vê para onde o detalhe se move antes de baixar.',
	tool_flip_image_why_choose_item_3: 'Horizontal e vertical na mesma passagem; marcar as duas equivale a um giro de 180° em fotos retangulares.',
	tool_flip_image_why_choose_item_4: 'Exportação em JPEG, WebP ou PNG com qualidade e fundo para JPEG nas configurações avançadas.',
	tool_flip_image_why_choose_item_5: 'Avisos suaves para arquivos enormes, lados gigantes e GIF animado (só o primeiro quadro).',
	tool_flip_image_rules_title: 'Regras do espelhamento',
	tool_flip_image_rules_body:
		'Um canvas do mesmo tamanho da foto original recebe a imagem espelhada no eixo marcado; em seguida o arquivo é gerado no formato escolhido.',
	tool_flip_image_rules_item_1: 'Horizontal: reflexão no eixo vertical — o que estava à esquerda passa à direita.',
	tool_flip_image_rules_item_2: 'Vertical: reflexão no eixo horizontal — o topo vira a base.',
	tool_flip_image_rules_item_3: 'As duas opções juntas = equivalente a girar 180° (os cantos trocam de lugar na diagonal).',
	tool_flip_image_rules_item_4: 'GIF animado usa só o primeiro quadro; PNG e WebP mantêm transparência; JPEG preenche com a cor de fundo.',
	tool_flip_image_rules_item_5: 'Virar só reordena píxeis; salvar em JPEG ou WebP recomprime e pode mudar o tamanho do arquivo.',
	tool_flip_image_example_title: 'Exemplo',
	tool_flip_image_example:
		'Carregar exemplo monta uma grade 480×320 com A e B em cima e C e D embaixo. Com Virar na horizontal (padrão), clique em Virar: a letra A vai para o lado direito. Baixe o arquivo ou marque também Virar na vertical e clique em Virar de novo — a A fica embaixo à direita, como num giro de 180°.',
	tool_flip_image_usecases_title: 'Quando usar',
	tool_flip_image_usecase_1: 'Corrigir uma selfie espelhada pela câmera frontal para o texto da camisa ou de um cartaz ficar legível.',
	tool_flip_image_usecase_2: 'Trocar o lado de um produto no mockup para o call-to-action ficar onde o anúncio pede.',
	tool_flip_image_usecase_3: 'Virar na vertical uma página escaneada ou fotografada de cabeça para baixo.',
	tool_flip_image_usecase_4: 'Gerar a variante espelhada de um layout para impressão (transfer, serigrafia) sem abrir um editor no computador.',
	tool_flip_image_faq_q1: 'As imagens são enviadas ao servidor?',
	tool_flip_image_faq_a1:
		'Não. Ler, virar e exportar acontecem nesta aba do navegador. Os scripts vêm da pasta vendor deste site só quando precisamos; os bytes do seu arquivo ficam no dispositivo.',
	tool_flip_image_faq_q2: 'A qualidade cai ao virar?',
	tool_flip_image_faq_a2:
		'O espelhamento em si só troca a posição dos píxeis. Salvar em JPEG ou WebP recomprime e pode alterar o arquivo. Para baixar sem perdas, escolha PNG nas configurações avançadas.',
	tool_flip_image_faq_q3: 'Virar é o mesmo que girar?',
	tool_flip_image_faq_a3:
		'Não. Virar espelha sobre um eixo; girar muda o ângulo. Esta página só espelha — use uma ferramenta de rotação se precisar de passos de 90°.',
	tool_flip_image_faq_q4: 'Posso virar nos dois eixos ao mesmo tempo?',
	tool_flip_image_faq_a4:
		'Sim. Marque Virar na horizontal e Virar na vertical juntos. Em foto retangular, o resultado equivale a um giro de 180°.',
	tool_flip_image_faq_q5: 'E GIFs animados?',
	tool_flip_image_faq_a5:
		'Só o primeiro quadro é lido e virado. A animação de vários quadros não vai no arquivo baixado.',
	tool_flip_image_faq_q6: 'Por que o JPEG parece diferente da pré-visualização?',
	tool_flip_image_faq_a6:
		'JPEG não tem transparência. Os píxeis transparentes são preenchidos com a cor de fundo do JPEG antes da codificação. Na página, a pré-visualização usa um tabuleiro de xadrez para mostrar transparência.',
	tool_flip_image_faq_q7: 'Virar imagem ou cortar / escala de cinza?',
	tool_flip_image_faq_a7:
		'Esta página só espelha. Cortar remove bordas; escala de cinza tira a cor. Use Cortar e redimensionar imagem ou Escala de cinza nas ferramentas relacionadas.',
	tool_flip_image_article:
		'Espelhamento local na horizontal e na vertical: os píxeis são redesenhados de verdade, não só com um efeito visual de CSS.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

/** 默认导出：供 merge:tools 合并进站点 pt 字典。 */
export default pt;
