/**
 * Fragmento i18n (bulk-convert-images-to-webp / pt).
 * H1 segue a busca «Converter imagens para WebP em lote».
 */
import type { SiteLangDict } from '../../../types';

/** Português: assets do site em WebP com perda e alfa. */
const pt: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'Quando o site pede WebP, passe logos PNG e fotos nesta aba para .webp com perda: transparência fica se a origem tiver, o que este navegador não souber gravar é saltado, depois um ZIP. Alguns e-mails ainda recusam WebP; aí use JPG. Ficam no dispositivo, sem envio a um servidor.',
	tool_bulk_convert_images_to_webp_chip_q80: 'Qualidade 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'Escolher imagens',
	tool_bulk_convert_images_to_webp_clear: 'Limpar',
	tool_bulk_convert_images_to_webp_col_after: 'Depois',
	tool_bulk_convert_images_to_webp_col_before: 'Antes',
	tool_bulk_convert_images_to_webp_col_name: 'Arquivo',
	tool_bulk_convert_images_to_webp_col_status: 'Estado',
	tool_bulk_convert_images_to_webp_convert: 'Converter tudo',
	tool_bulk_convert_images_to_webp_desc:
		'Converter imagens para WebP em lote com qualidade com perda e alfa se a origem tiver; ZIP; ficam no dispositivo, sem envio a um servidor.',
	tool_bulk_convert_images_to_webp_description:
		'Converter imagens para WebP em lote: coloque logos PNG ou fotos, recodifique WebP com perda nesta aba sem fundo JPEG, salte o que este navegador não gravar e baixe um ZIP. Passos: escolha o lote, deixe a qualidade perto de 0.8, converta tudo. Exemplo: uma foto e um logo com furo viram .webp. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_bulk_convert_images_to_webp_download_zip: 'Baixar ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: 'Solte JPEG, PNG, WebP ou GIF (até 20). A conversão fica nesta aba.',
	tool_bulk_convert_images_to_webp_empty: 'Adicione imagens primeiro.',
	tool_bulk_convert_images_to_webp_err_decode: 'Não foi possível ler este arquivo. Ignorado.',
	tool_bulk_convert_images_to_webp_err_encode: 'Não foi possível gravar um WebP deste arquivo. Ignorado.',
	tool_bulk_convert_images_to_webp_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_bulk_convert_images_to_webp_err_too_many: 'No máximo 20 imagens. As extras não foram adicionadas.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'Este navegador não devolveu um blob WebP. Essa linha é ignorada; não grava JPEG.',
	tool_bulk_convert_images_to_webp_example:
		'Carregar exemplo coloca um bloco opaco e um logo transparente, grava dois .webp e ativa Baixar ZIP. O furo do logo permanece.',
	tool_bulk_convert_images_to_webp_example_title: 'Exemplo',
	tool_bulk_convert_images_to_webp_faq_a1:
		'Não. A leitura e a gravação WebP acontecem nesta aba. Ficam no dispositivo, sem envio a um servidor. O auxiliar do ZIP pode vir de um CDN; suas fotos continuam na aba.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'Sim. png para webp é esta página: escolha os arquivos, deixe a qualidade perto de 0.8, converta tudo. Furos ficam se o PNG tinha alfa.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'Alguns apps de e-mail e CMS ainda recusam WebP. Para esses anexos use Converter imagens para JPG em lote.',
	tool_bulk_convert_images_to_webp_faq_a4:
		'Essa linha é ignorada. Esta página não grava JPEG escondido. Tente Chrome, Edge ou Firefox atuais.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'Não. Só o primeiro quadro vira WebP estático, e essa linha é anotada.',
	tool_bulk_convert_images_to_webp_faq_q1: 'As imagens sobem para um servidor?',
	tool_bulk_convert_images_to_webp_faq_q2: 'Como faço PNG para WebP aqui?',
	tool_bulk_convert_images_to_webp_faq_q3: 'O e-mail aceita esses WebP?',
	tool_bulk_convert_images_to_webp_faq_q4: 'E se este navegador não gravar WebP?',
	tool_bulk_convert_images_to_webp_faq_q5: 'GIFs animados continuam animados?',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} imagens na fila',
	tool_bulk_convert_images_to_webp_how_body:
		'Escolha as imagens que devem virar WebP no site, converta aqui sem fundo JPEG, depois leve um ZIP das que deram certo.',
	tool_bulk_convert_images_to_webp_how_item_1: 'Escolha as fotos ou adesivos PNG que precisam ser WebP no site.',
	tool_bulk_convert_images_to_webp_how_item_2: 'Deixe a qualidade perto de 0.8 salvo se precisar de um arquivo menor. Não há fundo JPEG.',
	tool_bulk_convert_images_to_webp_how_item_3: 'Aperte Converter tudo. Se toBlob não for WebP, essa linha falha em vez de gravar JPEG.',
	tool_bulk_convert_images_to_webp_how_item_4: 'JPG para e-mail? Use Converter imagens para JPG em lote. PNG sem perda? Converter imagens para PNG em lote.',
	tool_bulk_convert_images_to_webp_how_item_5: 'Baixe o ZIP quando pelo menos um arquivo der certo. Carregar exemplo já rodou na abertura.',
	tool_bulk_convert_images_to_webp_how_title: 'Como passar para WebP',
	tool_bulk_convert_images_to_webp_quality_label: 'Qualidade WebP',
	tool_bulk_convert_images_to_webp_rules_body:
		'A saída é sempre WebP. Esta página não achata a transparência sobre um fundo JPEG nem cai para JPEG.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'O alfa fica se a origem o tiver. Um JPEG não tem alfa para guardar.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'A qualidade padrão é 0.8. Baixe só se o orçamento do site pedir um arquivo menor.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'Se este navegador não gravar WebP, essa linha é ignorada. Falhas de leitura saltam. Nomes repetidos no ZIP viram nome (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_bulk_convert_images_to_webp_rules_title: 'O que esperar',
	tool_bulk_convert_images_to_webp_sample: 'Carregar exemplo',
	tool_bulk_convert_images_to_webp_status_compressing: 'Convertendo o lote para WebP…',
	tool_bulk_convert_images_to_webp_status_done: 'Lote pronto — confira a tabela e baixe o ZIP.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP pronto',
	tool_bulk_convert_images_to_webp_status_skip: 'Ignorado',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} prontos · {skip} ignorados',
	tool_bulk_convert_images_to_webp_title: 'Converter imagens para WebP em lote',
	tool_bulk_convert_images_to_webp_usecase_1: 'Encolher heróis e miniaturas do site para WebP sem um seletor de formato.',
	tool_bulk_convert_images_to_webp_usecase_2: 'png para webp em adesivos que já têm furos.',
	tool_bulk_convert_images_to_webp_usecase_3: 'Fique no JPEG para e-mail se o cliente ainda recusar WebP.',
	tool_bulk_convert_images_to_webp_usecases_title: 'Quando combina',
	tool_bulk_convert_images_to_webp_warn_anim: 'Arquivos animados: só o primeiro quadro vira WebP estático.',
	tool_bulk_convert_images_to_webp_warn_edge: 'Há um arquivo mais largo ou alto que 8192 px; vai demorar.',
	tool_bulk_convert_images_to_webp_warn_large: 'Há um arquivo maior que 25 MB; esta aba pode ficar sem memória.',
};

export default pt;
