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
		'Comprimir fotos de produto em lote: junte as fotos do anúncio, compartilhe o lado mais longo e um teto de 200 KB, recodifique JPEG ou WebP aqui, pule falhas e baixe o ZIP. Passos: escolha o lote, mantenha o chip de 200 KB se o canal pedir, comprima e leia acerto ou falha. Exemplo: ao abrir, duas fotos de amostra já são comprimidas. Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_product_photos_download_zip: 'Baixar ZIP',
	tool_bulk_compress_product_photos_drop_hint: 'Solte JPEG, PNG ou WebP (até 20). A compactação fica nesta aba.',
	tool_bulk_compress_product_photos_empty: 'Adicione fotos de produto primeiro.',
	tool_bulk_compress_product_photos_err_decode: 'Não foi possível ler esta foto; ela foi ignorada.',
	tool_bulk_compress_product_photos_err_encode: 'Não foi possível comprimir esta foto; ela foi ignorada.',
	tool_bulk_compress_product_photos_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_bulk_compress_product_photos_err_too_many: 'No máximo 20 fotos. As extras não entraram.',
	tool_bulk_compress_product_photos_err_webp: 'Este navegador não grava WebP. JPEG (.jpg) foi selecionado.',
	tool_bulk_compress_product_photos_example:
		'Carregar exemplo coloca duas fotos, comprime no JPEG de 200 KB, preenche a tabela e ativa Baixar ZIP. Nomes repetidos viram name (2).jpg.',
	tool_bulk_compress_product_photos_example_title: 'Exemplo',
	tool_bulk_compress_product_photos_faq_a1:
		'Não. Tudo roda nesta aba. Os arquivos ficam no dispositivo, sem enviar ao servidor. O script do ZIP pode vir de um CDN; suas fotos não viajam.',
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
	tool_bulk_compress_product_photos_how_body:
		'Junte as fotos do anúncio, compartilhe um teto de peso, comprima aqui e leve o ZIP do que deu certo.',
	tool_bulk_compress_product_photos_how_item_1: 'Escolha as fotos de produto que precisam ficar menores.',
	tool_bulk_compress_product_photos_how_item_2: 'Mantenha o chip de 200 KB se o marketplace pedir. O padrão é JPEG (.jpg).',
	tool_bulk_compress_product_photos_how_item_3: 'Se o celular dispara enorme, limite primeiro o lado mais longo.',
	tool_bulk_compress_product_photos_how_item_4: 'Toque em Comprimir tudo e leia acerto, teto perdido ou ignorada.',
	tool_bulk_compress_product_photos_how_item_5: 'Baixe o ZIP se pelo menos uma deu certo. O exemplo já rodou ao abrir.',
	tool_bulk_compress_product_photos_how_title: 'Como usar',
	tool_bulk_compress_product_photos_jpeg_bg_black: 'Preto',
	tool_bulk_compress_product_photos_jpeg_bg_custom: 'Personalizado',
	tool_bulk_compress_product_photos_jpeg_bg_label: 'Fundo JPEG',
	tool_bulk_compress_product_photos_jpeg_bg_white: 'Branco',
	tool_bulk_compress_product_photos_max_edge_label: 'Lado máximo',
	tool_bulk_compress_product_photos_output_label: 'Saída',
	tool_bulk_compress_product_photos_quality_label: 'Qualidade',
	tool_bulk_compress_product_photos_resize_on: 'Limitar o lado mais longo',
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
	tool_bulk_compress_product_photos_title: 'Comprimir fotos de produto em lote',
	tool_bulk_compress_product_photos_usecase_1: 'Dia de cadastro: baixar fotos SKU rumo ao teto de 200 KB.',
	tool_bulk_compress_product_photos_usecase_2: 'Mandar fotos ao comprador sem estourar o anexo.',
	tool_bulk_compress_product_photos_usecase_3: 'Entregar ao design um ZIP leve do mesmo ensaio.',
	tool_bulk_compress_product_photos_usecases_title: 'Quando combina',
	tool_bulk_compress_product_photos_warn_anim: 'Animação: só o primeiro quadro é comprimido.',
	tool_bulk_compress_product_photos_warn_edge: 'Há foto com mais de 8192 px — pode ficar lento.',
	tool_bulk_compress_product_photos_warn_large: 'Há arquivo com mais de 25 MB — a aba pode ficar sem memória.',
};

export default pt;
