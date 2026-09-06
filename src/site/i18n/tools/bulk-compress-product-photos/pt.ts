/**
 * Fragmento i18n (bulk-compress-product-photos / pt).
 * H1 de busca: comprimir fotos de produto em lote.
 */
import type { SiteLangDict } from '../../../types';

/** Português de ferramenta: fotos de anúncio, não calque do inglês. */
const pt: SiteLangDict = {
	tool_bulk_compress_product_photos_article:
		'Comprima um lote de fotos de anúncio nesta aba, com um teto de tamanho, pule as que falharem e baixe um ZIP. Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_product_photos_chip_200kb: '200 KB',
	tool_bulk_compress_product_photos_chip_jpeg: 'JPEG',
	tool_bulk_compress_product_photos_chip_jpg: '.jpg',
	tool_bulk_compress_product_photos_choose_files: 'Escolher fotos de produto',
	tool_bulk_compress_product_photos_clear: 'Limpar',
	tool_bulk_compress_product_photos_col_after: 'Depois',
	tool_bulk_compress_product_photos_col_before: 'Antes',
	tool_bulk_compress_product_photos_col_name: 'Arquivo',
	tool_bulk_compress_product_photos_col_status: 'Status',
	tool_bulk_compress_product_photos_compress: 'Comprimir tudo',
	tool_bulk_compress_product_photos_desc:
		'Comprima fotos de produto rumo a 200 KB e baixe um ZIP; ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_product_photos_description:
		'Comprimir fotos de produto em lote: junte as fotos do anúncio, escolha se precisar uma regra de tamanho, um teto de KB e JPEG/WebP/PNG, recodifique aqui, pule falhas e baixe o ZIP. Passos: escolha o lote; as opções começam em Nenhum e mantêm formato e pixels; chip de 200 KB só se o canal pedir; comprima e leia acerto ou falha. As fotos de exemplo só entram se você clicar em Carregar exemplo. Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_product_photos_download_zip: 'Baixar ZIP',
	tool_bulk_compress_product_photos_drop_hint: 'Solte JPEG, PNG ou WebP (até 20). A compactação fica nesta aba.',
	tool_bulk_compress_product_photos_empty: 'Adicione fotos de produto primeiro.',
	tool_bulk_compress_product_photos_err_decode: 'Não foi possível ler esta foto; ela foi ignorada.',
	tool_bulk_compress_product_photos_err_encode: 'Não foi possível comprimir esta foto; ela foi ignorada.',
	tool_bulk_compress_product_photos_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_bulk_compress_product_photos_err_too_many: 'No máximo 20 fotos. As extras não entraram.',
	tool_bulk_compress_product_photos_err_webp: 'Este navegador não grava WebP. JPEG (.jpg) foi selecionado.',
	tool_bulk_compress_product_photos_example:
		'Carregar exemplo coloca duas fotos e comprime com as opções atuais (Nenhum mantém JPEG, sem busca de KB), preenche a tabela e ativa Baixar ZIP. Nomes repetidos viram name (2).jpg.',
	tool_bulk_compress_product_photos_example_title: 'Exemplo',
	tool_bulk_compress_product_photos_faq_a1:
		'Não. Tudo roda nesta aba. Os arquivos ficam no dispositivo, sem enviar ao servidor. O script do ZIP pode vir deste site; suas fotos não viajam.',
	tool_bulk_compress_product_photos_faq_a2:
		'Nem sempre. Se a qualidade 0.5 ainda passa do teto, a linha marca falha mas guarda o arquivo mais próximo.',
	tool_bulk_compress_product_photos_faq_a3:
		'Não precisa de outra página. JPEG e JPG são a mesma saída, com extensão .jpg.',
	tool_bulk_compress_product_photos_faq_a4:
		'PNG que precisa ficar transparente vai numa página de comprimir PNG. Aqui o trabalho é aliviar foto de catálogo.',
	tool_bulk_compress_product_photos_faq_a5:
		'Não. Só o primeiro quadro vira imagem parada.',
	tool_bulk_compress_product_photos_faq_q1: 'As fotos sobem para um servidor?',
	tool_bulk_compress_product_photos_faq_q2: 'Toda foto cabe em 200 KB?',
	tool_bulk_compress_product_photos_faq_q3: 'JPEG pede outra ferramenta além de JPG?',
	tool_bulk_compress_product_photos_faq_q4: 'Serve para logo PNG transparente?',
	tool_bulk_compress_product_photos_faq_q5: 'GIF animado continua em movimento?',
	tool_bulk_compress_product_photos_file_count_tpl: '{n} fotos na fila',
	tool_bulk_compress_product_photos_format_jpeg: 'JPEG (.jpg)',
	tool_bulk_compress_product_photos_format_webp: 'WebP',
	tool_bulk_compress_product_photos_chip_100kb: '100 KB',
	tool_bulk_compress_product_photos_chip_png: 'PNG',
	tool_bulk_compress_product_photos_chip_webp: 'WebP',
	tool_bulk_compress_product_photos_format_png: 'PNG',
	tool_bulk_compress_product_photos_preset_custom: 'Personalizado',
	tool_bulk_compress_product_photos_preset_email: 'E-mail — 1280 px · 100 KB',
	tool_bulk_compress_product_photos_preset_group_combo: 'Cenas de anúncio (tamanho + KB)',
	tool_bulk_compress_product_photos_preset_group_edge: 'Só regra de tamanho',
	tool_bulk_compress_product_photos_preset_group_kb: 'Só tamanho alvo',
	tool_bulk_compress_product_photos_preset_hint: 'Preenche regra, pixels e KB',
	tool_bulk_compress_product_photos_preset_label: 'Predefinições de tamanho',
	tool_bulk_compress_product_photos_preset_listing: 'Anúncio padrão — 1280 px · 200 KB',
	tool_bulk_compress_product_photos_preset_listing_hd: 'Anúncio HD — 1920 px',
	tool_bulk_compress_product_photos_preset_social: 'Social / celular — 1080 px · 150 KB',
	tool_bulk_compress_product_photos_preset_thumb: 'Largura miniatura — 800 px · 50 KB',
	tool_bulk_compress_product_photos_preset_tiny: 'Altura mínima — 512 px · 30 KB',
	tool_bulk_compress_product_photos_quality_hint_png: 'PNG é sem perdas — o controle de qualidade não reduz bytes.',
	tool_bulk_compress_product_photos_quality_hint_target:
		'Com teto de KB o controle é o início da busca, não a qualidade final.',
	tool_bulk_compress_product_photos_size_px_height: 'Altura máx.',
	tool_bulk_compress_product_photos_size_px_width: 'Largura máx.',
	tool_bulk_compress_product_photos_size_rule_label: 'Regra de tamanho',
	tool_bulk_compress_product_photos_size_rule_max_edge: 'Lado mais longo',
	tool_bulk_compress_product_photos_size_rule_max_height: 'Altura máxima',
	tool_bulk_compress_product_photos_size_rule_max_width: 'Largura máxima',
	tool_bulk_compress_product_photos_warn_png: 'PNG costuma ficar grande; para limites de anúncio prefira JPEG ou WebP.',
	tool_bulk_compress_product_photos_warn_png_target:
		'PNG não busca um teto de KB. Fique no PNG, ou mude para JPEG/WebP se precisar do teto.',
	tool_bulk_compress_product_photos_how_body:
		'Junte as fotos do anúncio, compartilhe um teto de peso, comprima aqui e leve o ZIP do que deu certo.',
	tool_bulk_compress_product_photos_how_item_1: 'Escolha as fotos de produto que precisam ficar menores.',
	tool_bulk_compress_product_photos_how_item_2: 'Formato, KB e tamanho começam em Nenhum: só recodificar. O marketplace pede JPEG ou 200 KB? Ligue o chip ou um preset. Também há WebP e PNG.',
	tool_bulk_compress_product_photos_how_item_3: 'Se o celular dispara enorme, limite lado mais longo, largura ou altura. Nenhum não muda os pixels.',
	tool_bulk_compress_product_photos_how_item_4: 'Toque em Comprimir tudo e leia acerto, teto perdido ou ignorada.',
	tool_bulk_compress_product_photos_how_item_5: 'Baixe o ZIP se pelo menos uma deu certo. O exemplo é opcional e não roda sozinho.',
	tool_bulk_compress_product_photos_how_title: 'Como usar',
	tool_bulk_compress_product_photos_jpeg_bg_black: 'Preto',
	tool_bulk_compress_product_photos_jpeg_bg_custom: 'Personalizado',
	tool_bulk_compress_product_photos_jpeg_bg_hint:
		'JPEG não tem alfa. Só os buracos transparentes ganham esta cor; fotos opacas não mudam. Nenhum = sem fundo.',
	tool_bulk_compress_product_photos_jpeg_bg_label: 'Preencher transparência',
	tool_bulk_compress_product_photos_jpeg_bg_white: 'Branco',
	tool_bulk_compress_product_photos_max_edge_label: 'Lado máximo',
	tool_bulk_compress_product_photos_opt_none: 'Nenhum',
	tool_bulk_compress_product_photos_output_label: 'Saída',
	tool_bulk_compress_product_photos_quality_label: 'Qualidade',
	tool_bulk_compress_product_photos_resize_on: 'Limitar tamanho de saída',
	tool_bulk_compress_product_photos_rules_body:
		'Os mesmos controles valem para o lote. Se uma foto não entra no teto, a tabela mostra.',
	tool_bulk_compress_product_photos_rules_item_1: 'O lado mais longo só reduz; nunca amplia.',
	tool_bulk_compress_product_photos_rules_item_2: 'Qualidade vale para JPEG e WebP. O teto de 200 KB desce até 0.5.',
	tool_bulk_compress_product_photos_rules_item_3: 'Falha de leitura ignora só aquela linha. Duplicatas no ZIP viram name (2).jpg.',
	tool_bulk_compress_product_photos_rules_item_4: 'Os arquivos ficam no dispositivo, sem enviar ao servidor. O EXIF costuma sumir.',
	tool_bulk_compress_product_photos_rules_title: 'Regras esperadas',
	tool_bulk_compress_product_photos_sample: 'Carregar exemplo',
	tool_bulk_compress_product_photos_status_compressing: 'Comprimindo o lote…',
	tool_bulk_compress_product_photos_status_done: 'Lote pronto — veja a tabela e baixe o ZIP.',
	tool_bulk_compress_product_photos_status_hit: 'Dentro',
	tool_bulk_compress_product_photos_status_miss: 'Fora do teto',
	tool_bulk_compress_product_photos_status_skip: 'Ignorada',
	tool_bulk_compress_product_photos_summary_tpl: '{ok} prontas · {miss} fora do teto · {skip} ignoradas',
	tool_bulk_compress_product_photos_target_kb_label: 'Tamanho máximo',
	tool_bulk_compress_product_photos_target_on: 'Buscar tamanho alvo',
	tool_bulk_compress_product_photos_title: 'Comprimir fotos de produto em lote (JPEG, PNG, WebP)',
	tool_bulk_compress_product_photos_usecase_1: 'Dia de cadastro: baixar fotos SKU rumo ao teto de 200 KB.',
	tool_bulk_compress_product_photos_usecase_2: 'Mandar fotos ao comprador sem estourar o anexo.',
	tool_bulk_compress_product_photos_usecase_3: 'Entregar ao design um ZIP leve do mesmo ensaio.',
	tool_bulk_compress_product_photos_usecases_title: 'Quando combina',
	tool_bulk_compress_product_photos_warn_anim: 'Animação: só o primeiro quadro é comprimido.',
	tool_bulk_compress_product_photos_warn_edge: 'Há foto com mais de 8192 px — pode ficar lento.',
	tool_bulk_compress_product_photos_warn_large: 'Há arquivo com mais de 25 MB — a aba pode ficar sem memória.',
};

export default pt;
