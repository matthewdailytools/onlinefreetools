/**
 * Fragmento i18n (bulk-compress-png-images / pt).
 * O H1 segue a busca «Comprimir imagens PNG em lote».
 */
import type { SiteLangDict } from '../../../types';

/** Português: logos PNG transparentes continuam PNG no dispositivo. */
const pt: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'Compacte nesta aba uma pasta de logos ou recortes PNG, preserve a transparência, pule falhas e baixe um ZIP. Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: 'Só recodificar',
	tool_bulk_compress_png_images_choose_files: 'Escolher imagens PNG',
	tool_bulk_compress_png_images_clear: 'Limpar',
	tool_bulk_compress_png_images_col_after: 'Depois',
	tool_bulk_compress_png_images_col_before: 'Antes',
	tool_bulk_compress_png_images_col_name: 'Arquivo',
	tool_bulk_compress_png_images_col_status: 'Status',
	tool_bulk_compress_png_images_compress: 'Comprimir tudo',
	tool_bulk_compress_png_images_desc:
		'Compactar PNG em lote, manter transparência, baixar ZIP — ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_png_images_description:
		'Comprimir imagens PNG em lote: junte logos ou recortes de interface, preserve a transparência, limite o lado mais longo se precisar, recodifique PNG nesta aba, pule falhas e baixe um ZIP. Passos: escolha o lote, deixe o chip de 1024 px se os ícones devem encolher, comprima tudo e leia a tabela. Exemplo: dois tabuleiros de amostra continuam PNG com buracos. Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_png_images_download_zip: 'Baixar ZIP',
	tool_bulk_compress_png_images_drop_hint: 'Solte PNG (até 20). Outras imagens também saem como PNG. Fica nesta aba.',
	tool_bulk_compress_png_images_empty: 'Adicione imagens PNG primeiro.',
	tool_bulk_compress_png_images_err_decode: 'Não foi possível decodificar esta imagem. Ela foi pulada.',
	tool_bulk_compress_png_images_err_encode: 'Não foi possível gravar esta imagem como PNG. Ela foi pulada.',
	tool_bulk_compress_png_images_err_fflate: 'Não foi possível montar o ZIP neste navegador. Tente outro navegador atual.',
	tool_bulk_compress_png_images_err_too_many: 'No máximo 20 arquivos de uma vez. Os extras não foram adicionados.',
	tool_bulk_compress_png_images_example:
		'Carregar exemplo coloca dois PNG de tabuleiro transparente, recodifica como PNG, preenche a tabela e libera Baixar ZIP. Nomes repetidos viram name (2).png.',
	tool_bulk_compress_png_images_example_title: 'Exemplo',
	tool_bulk_compress_png_images_faq_a1:
		'Não. A decodificação e o PNG rodam nesta aba. Os arquivos ficam no dispositivo, sem enviar ao servidor. O auxiliar ZIP pode vir deste site; suas imagens não saem da aba.',
	tool_bulk_compress_png_images_faq_a2:
		'Não. A saída é sempre PNG. Não há fundo JPEG. Se aceitar JPEG para fotos de produto menores, use Compactar fotos de produto em lote.',
	tool_bulk_compress_png_images_faq_a3:
		'Sim. Os pixels são desenhados sem fundo sólido e salvos como PNG, então os buracos continuam buracos.',
	tool_bulk_compress_png_images_faq_a4:
		'Com frequência, se você não reduzir o lado mais longo. Este PNG de tela não otimiza paleta como algumas nuvens. Cor indexada pode mostrar faixas após recodificar.',
	tool_bulk_compress_png_images_faq_a5:
		'Não. Só o primeiro quadro é salvo como PNG estático.',
	tool_bulk_compress_png_images_faq_q1: 'Reduzir PNG envia meus arquivos ao servidor?',
	tool_bulk_compress_png_images_faq_q2: 'Compactar PNG online vira JPEG?',
	tool_bulk_compress_png_images_faq_q3: 'Dá para comprimir PNG sem perder transparência?',
	tool_bulk_compress_png_images_faq_q4: 'Por que o arquivo continua grande depois de comprimir?',
	tool_bulk_compress_png_images_faq_q5: 'GIF animado continua animado?',
	tool_bulk_compress_png_images_file_count_tpl: '{n} arquivos na fila',
	tool_bulk_compress_png_images_how_body:
		'Antes de compactar, confirme que o lote precisa continuar em PNG; compartilhe um teto de lado mais longo se precisar, comprima aqui e leve o ZIP do que deu certo.',
	tool_bulk_compress_png_images_how_item_1: 'Escolha os logos ou recortes PNG que precisam manter transparência.',
	tool_bulk_compress_png_images_how_item_2: 'Use o chip de 1024 px quando os ícones devem encolher; Só recodificar quando o tamanho em pixels não pode mudar.',
	tool_bulk_compress_png_images_how_item_3: 'Toque em Comprimir tudo. Cada linha segue PNG. Falhas são puladas e o resto entra no pacote.',
	tool_bulk_compress_png_images_how_item_4: 'Se um PNG tipo foto quase não encolhe, a tabela avisa — JPEG na página de fotos de produto costuma ser menor.',
	tool_bulk_compress_png_images_how_item_5: 'Baixe o ZIP quando pelo menos um arquivo tiver dado certo. Carregar exemplo já rodou na primeira pintura.',
	tool_bulk_compress_png_images_how_title: 'Como compactar o lote',
	tool_bulk_compress_png_images_max_edge_label: 'Lado máximo',
	tool_bulk_compress_png_images_resize_on: 'Limitar o lado mais longo',
	tool_bulk_compress_png_images_rules_body:
		'Nunca se pinta um fundo JPEG. O peso cai sobretudo ao reduzir o lado mais longo, não só ao salvar de novo.',
	tool_bulk_compress_png_images_rules_item_1:
		'O MIME de saída é PNG. O alfa não é achatado. Não há controle de qualidade porque este PNG é sem perdas.',
	tool_bulk_compress_png_images_rules_item_2:
		'O lado mais longo reduz em proporção e nunca aumenta. Só recodificar mantém os pixels e pode quase não mudar os bytes.',
	tool_bulk_compress_png_images_rules_item_3:
		'Falha ao decodificar ou gravar pula aquela linha. Nomes repetidos no ZIP viram name (2).png. Paletas indexadas podem mostrar faixas.',
	tool_bulk_compress_png_images_rules_item_4:
		'Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_compress_png_images_rules_title: 'Limites que você deve esperar',
	tool_bulk_compress_png_images_sample: 'Carregar exemplo',
	tool_bulk_compress_png_images_status_compressing: 'Comprimindo o lote PNG…',
	tool_bulk_compress_png_images_status_done: 'Lote concluído — confira a tabela e baixe o ZIP.',
	tool_bulk_compress_png_images_status_ok: 'PNG pronto',
	tool_bulk_compress_png_images_status_same: 'Ainda grande',
	tool_bulk_compress_png_images_status_skip: 'Pulado',
	tool_bulk_compress_png_images_summary_tpl: '{ok} prontos · {same} quase iguais · {skip} pulados',
	tool_bulk_compress_png_images_title: 'Comprimir imagens PNG em lote',
	tool_bulk_compress_png_images_usecase_1: 'Uma pasta de logos transparentes que a vitrine precisa continuar servindo em PNG.',
	tool_bulk_compress_png_images_usecase_2: 'Recortes de UI que precisam do mesmo lado mais longo antes da entrega.',
	tool_bulk_compress_png_images_usecase_3: 'Adesivos promocionais com buracos; JPEG preencheria os buracos com um fundo.',
	tool_bulk_compress_png_images_usecases_title: 'Quando vale a pena',
	tool_bulk_compress_png_images_warn_anim: 'Arquivos animados: só o primeiro quadro vira PNG estático.',
	tool_bulk_compress_png_images_warn_edge: 'Um arquivo tem mais de 8192 px de largura ou altura — espere lentidão.',
	tool_bulk_compress_png_images_warn_large: 'Um arquivo tem mais de 25 MB — esta aba pode ficar sem memória.',
	tool_bulk_compress_png_images_warn_same: 'Alguns PNG quase não encolheram. Reduza o lado mais longo, ou use a compactação de fotos de produto se JPEG servir.',
};

export default pt;
