/**
 * Fragmento i18n (batch-watermark-product-photos / pt).
 * H1 segue a busca «Marca d'água em fotos de produto em lote».
 */
import type { SiteLangDict } from '../../../types';

/** Português: um mesmo carimbo de copyright num lote de fotos de anúncio. */
const pt: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: 'Baixo',
	tool_batch_watermark_product_photos_anchor_bl: 'Baixo esq.',
	tool_batch_watermark_product_photos_anchor_br: 'Baixo dir.',
	tool_batch_watermark_product_photos_anchor_label: 'Âncora',
	tool_batch_watermark_product_photos_anchor_mc: 'Centro',
	tool_batch_watermark_product_photos_anchor_ml: 'Meio esq.',
	tool_batch_watermark_product_photos_anchor_mr: 'Meio dir.',
	tool_batch_watermark_product_photos_anchor_tc: 'Topo',
	tool_batch_watermark_product_photos_anchor_tl: 'Topo esq.',
	tool_batch_watermark_product_photos_anchor_tr: 'Topo dir.',
	tool_batch_watermark_product_photos_apply: 'Aplicar em todas',
	tool_batch_watermark_product_photos_article:
		'Carimbe uma linha de copyright num lote de fotos de anúncio nesta aba. O tamanho segue o lado curto de cada foto para paisagem e retrato caírem no mesmo canto relativo. Pré-visualize um quadro, aplique em todas, pule telas minúsculas, baixe um ZIP. Ficam no dispositivo, sem envio a um servidor.',
	tool_batch_watermark_product_photos_chip_draft: 'DRAFT na diagonal',
	tool_batch_watermark_product_photos_choose_files: 'Escolher fotos',
	tool_batch_watermark_product_photos_clear: 'Limpar',
	tool_batch_watermark_product_photos_col_after: 'Depois',
	tool_batch_watermark_product_photos_col_before: 'Antes',
	tool_batch_watermark_product_photos_col_name: 'Arquivo',
	tool_batch_watermark_product_photos_col_status: 'Estado',
	tool_batch_watermark_product_photos_color_label: 'Cor',
	tool_batch_watermark_product_photos_desc:
		'Marca d\'água em fotos de produto em lote, tamanho pelo lado curto, pré-visualizar, aplicar em todas, ZIP; ficam no dispositivo, sem envio a um servidor.',
	tool_batch_watermark_product_photos_description:
		'Marca d\'água em fotos de produto em lote: coloque um lote de fotos de anúncio, um carimbo cujo tamanho sai do lado curto, pré-visualize um quadro, aplique em todas, pule telas minúsculas, baixe um ZIP. Passos: escolha o lote, deixe a marca de canto, pré-visualize uma, aplique em todas. Exemplo: uma paisagem e um retrato compartilham o mesmo SAMPLE relativo. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_watermark_product_photos_download_zip: 'Baixar ZIP',
	tool_batch_watermark_product_photos_drop_hint: 'Solte JPEG, PNG ou WebP de anúncio (até 20). O carimbo fica nesta aba.',
	tool_batch_watermark_product_photos_empty: 'Adicione fotos primeiro.',
	tool_batch_watermark_product_photos_empty_text: 'Digite o texto do carimbo antes de aplicar.',
	tool_batch_watermark_product_photos_err_decode: 'Não foi possível ler este arquivo. Ignorado.',
	tool_batch_watermark_product_photos_err_encode: 'Não foi possível gravar este arquivo. Ignorado.',
	tool_batch_watermark_product_photos_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_batch_watermark_product_photos_err_tiny: 'Lado curto menor que 64 px — essa linha é ignorada.',
	tool_batch_watermark_product_photos_err_too_many: 'No máximo 20 fotos. As extras não foram adicionadas.',
	tool_batch_watermark_product_photos_example:
		'Carregar exemplo coloca um bloco paisagem e um retrato, define SAMPLE, pré-visualiza o primeiro, aplica a mesma marca relativa aos dois e ativa Baixar ZIP.',
	tool_batch_watermark_product_photos_example_title: 'Exemplo',
	tool_batch_watermark_product_photos_faq_a1:
		'Não. A leitura e o carimbo no Canvas acontecem nesta aba. Ficam no dispositivo, sem envio a um servidor. O auxiliar do ZIP pode vir deste site; suas fotos continuam na aba.',
	tool_batch_watermark_product_photos_faq_a2:
		'Não. O tamanho é um percentual do lado curto e as nove âncoras são frações daquela tela. Retrato e paisagem ficam no mesmo canto relativo.',
	tool_batch_watermark_product_photos_faq_a3:
		'Não. Esta página carimba fotos. Marca em PDF é outro trabalho — use a ferramenta de PDF quando precisar de páginas, não JPEG de anúncio.',
	tool_batch_watermark_product_photos_faq_a4:
		'Adicionar marca d\'água é uma foto com ajuste em pixel. Esta página compartilha um carimbo no lote, pré-visualiza uma e aplica todas num ZIP.',
	tool_batch_watermark_product_photos_faq_a5:
		'Também se busca marcar fotos em lote. Neste site esse trabalho mora aqui; não há uma segunda URL bulk-watermark.',
	tool_batch_watermark_product_photos_faq_q1: 'As fotos sobem para um servidor?',
	tool_batch_watermark_product_photos_faq_q2: 'Paisagem e retrato deslocam?',
	tool_batch_watermark_product_photos_faq_q3: 'Posso marcar um PDF aqui?',
	tool_batch_watermark_product_photos_faq_q4: 'Qual a diferença de Adicionar marca d\'água?',
	tool_batch_watermark_product_photos_faq_q5: 'Busquei marcar fotos em lote — é esta página?',
	tool_batch_watermark_product_photos_file_count_tpl: '{n} fotos na fila',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: 'Saída',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'Coloque o lote na fila, defina um carimbo, pré-visualize um quadro, aplique a mesma marca relativa em todas e leve um ZIP.',
	tool_batch_watermark_product_photos_how_item_1: 'Escolha as fotos de anúncio que precisam da mesma linha de copyright.',
	tool_batch_watermark_product_photos_how_item_2: 'Defina texto, canto e percentual do lado curto. Padrão SAMPLE no canto inferior direito, 8%.',
	tool_batch_watermark_product_photos_how_item_3: 'Aperte Pré-visualizar. Confira se paisagem e retrato caem no mesmo canto relativo.',
	tool_batch_watermark_product_photos_how_item_4: 'Aperte Aplicar em todas. Telas com menos de 64 px saltam. JPEG pinta fundo branco primeiro.',
	tool_batch_watermark_product_photos_how_item_5: 'Baixe o ZIP quando pelo menos um arquivo der certo. Ajuste de uma foto: Adicionar marca d\'água.',
	tool_batch_watermark_product_photos_how_title: 'Como carimbar o lote',
	tool_batch_watermark_product_photos_opacity_label: 'Opacidade',
	tool_batch_watermark_product_photos_pct_label: 'Tamanho vs lado curto',
	tool_batch_watermark_product_photos_preview: 'Pré-visualizar',
	tool_batch_watermark_product_photos_rotation_label: 'Ângulo',
	tool_batch_watermark_product_photos_rules_body:
		'O tamanho em pixels é o lado curto vezes o percentual. Âncoras são frações daquela tela, não pixels fixos.',
	tool_batch_watermark_product_photos_rules_item_1:
		'Carimbo padrão: SAMPLE, baixo direita, 8% de min(largura, altura), opacidade 45%. JPEG usa fundo branco.',
	tool_batch_watermark_product_photos_rules_item_2:
		'Lado curto menor que 64 px falha nessa linha. Texto vazio desativa Aplicar em todas. Falhas de leitura saltam.',
	tool_batch_watermark_product_photos_rules_item_3:
		'DRAFT na diagonal ladrilha a palavra. Nomes repetidos no ZIP viram nome (2).jpg ou .png.',
	tool_batch_watermark_product_photos_rules_item_4:
		'Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_watermark_product_photos_rules_title: 'O que esperar',
	tool_batch_watermark_product_photos_sample: 'Carregar exemplo',
	tool_batch_watermark_product_photos_status_applying: 'Carimbando o lote…',
	tool_batch_watermark_product_photos_status_done: 'Lote pronto — confira a tabela e baixe o ZIP.',
	tool_batch_watermark_product_photos_status_ok: 'Carimbada',
	tool_batch_watermark_product_photos_status_preview: 'A pré-visualização é a primeira foto da fila.',
	tool_batch_watermark_product_photos_status_skip: 'Ignorado',
	tool_batch_watermark_product_photos_status_tiny: 'Pequena demais',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} carimbadas · {skip} ignoradas',
	tool_batch_watermark_product_photos_text_label: 'Texto do carimbo',
	tool_batch_watermark_product_photos_title: 'Marca d\'água em fotos de produto em lote',
	tool_batch_watermark_product_photos_usecase_1: 'Carimbar o nome da loja numa pasta de fotos de anúncio antes de publicar.',
	tool_batch_watermark_product_photos_usecase_2: 'Marcar amostras SAMPLE para o comprador não reusar a prévia como anúncio.',
	tool_batch_watermark_product_photos_usecase_3: 'Acrescentar uma linha de copyright em várias imagens sem abrir cada arquivo.',
	tool_batch_watermark_product_photos_usecases_title: 'Quando combina',
	tool_batch_watermark_product_photos_warn_anim: 'Arquivos animados: só o primeiro quadro é carimbado.',
	tool_batch_watermark_product_photos_warn_edge: 'Há um arquivo mais largo ou alto que 8192 px; vai demorar.',
	tool_batch_watermark_product_photos_warn_large: 'Há um arquivo maior que 25 MB; esta aba pode ficar sem memória.',
};

export default pt;
