/**
 * Fragmento i18n (bulk-convert-images-to-jpg / pt).
 * H1 segue a busca «Converter imagens para JPG em lote».
 */
import type { SiteLangDict } from '../../../types';

/** Português: quando o formulário só aceita JPG; tom de ferramenta do dia a dia. */
const pt: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'Quando o anexo precisa ser .jpg, passe um lote de fotos, logos PNG e HEIC do celular nesta aba: um fundo compartilhado na transparência, pule o que falhar e baixe um ZIP. Ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'Fundo branco',
	tool_bulk_convert_images_to_jpg_choose_files: 'Escolher imagens',
	tool_bulk_convert_images_to_jpg_clear: 'Limpar',
	tool_bulk_convert_images_to_jpg_col_after: 'Depois',
	tool_bulk_convert_images_to_jpg_col_before: 'Antes',
	tool_bulk_convert_images_to_jpg_col_name: 'Arquivo',
	tool_bulk_convert_images_to_jpg_col_status: 'Status',
	tool_bulk_convert_images_to_jpg_convert: 'Converter tudo',
	tool_bulk_convert_images_to_jpg_desc:
		'Converter imagens para JPG em lote com fundo compartilhado e baixar ZIP; ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_convert_images_to_jpg_description:
		'Converter imagens para JPG em lote: junte fotos, logos PNG ou HEIC, pinte um fundo atrás da transparência, grave .jpg nesta aba, pule falhas e baixe um ZIP. Passos: escolha o lote, mantenha o fundo branco salvo se pedirem preto, converta tudo. Exemplo: uma foto e um logo vazado no branco viram dois .jpg. Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_convert_images_to_jpg_download_zip: 'Baixar ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'Solte PNG, JPEG, WebP, GIF ou HEIC (até 20). A conversão fica nesta aba.',
	tool_bulk_convert_images_to_jpg_empty: 'Adicione imagens primeiro.',
	tool_bulk_convert_images_to_jpg_err_decode: 'Não deu para ler este arquivo (HEIC pode pedir outro navegador). Pulado.',
	tool_bulk_convert_images_to_jpg_err_encode: 'Não deu para gravar um .jpg deste arquivo. Pulado.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'Este navegador não montou o ZIP. Tente um navegador atual.',
	tool_bulk_convert_images_to_jpg_err_too_many: 'No máximo 20 imagens. As extras não entraram.',
	tool_bulk_convert_images_to_jpg_example:
		'Carregar exemplo coloca um bloco opaco e um logo transparente, pinta os dois no branco, gera dois nomes .jpg e liga Baixar ZIP.',
	tool_bulk_convert_images_to_jpg_example_title: 'Exemplo',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'Não. A leitura e a gravação .jpg acontecem nesta aba. Ficam no dispositivo, sem enviar ao servidor. O auxiliar do ZIP pode vir deste site; suas fotos não saem da aba.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'Sim. PNG para JPG é aqui: escolha os arquivos, deixe o fundo branco para os buracos não virarem pretos, converta tudo.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'Se o navegador não ler HEIC, essa linha é pulada e o resto entra no ZIP. Tente o Safari ou converta no celular antes.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'Não. JPEG e JPG são a mesma saída. Os arquivos se chamam .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'Aqui só muda o sufixo para JPG. Encolher fotos de anúncio rumo a 200 KB é Comprimir fotos de produto em lote.',
	tool_bulk_convert_images_to_jpg_faq_q1: 'As fotos vão para algum servidor?',
	tool_bulk_convert_images_to_jpg_faq_q2: 'Como passo PNG para JPG aqui?',
	tool_bulk_convert_images_to_jpg_faq_q3: 'E se HEIC para JPG falhar?',
	tool_bulk_convert_images_to_jpg_faq_q4: 'Preciso de outra ferramenta JPEG além de JPG?',
	tool_bulk_convert_images_to_jpg_faq_q5: 'Isso comprime as fotos?',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} imagens na fila',
	tool_bulk_convert_images_to_jpg_how_body:
		'Se o formulário só aceita JPG, coloque as imagens na fila, use um fundo para os pixels transparentes, converta aqui e leve o ZIP das que deram certo.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'Escolha as fotos, PNG ou HEIC que o formulário só aceita como JPG.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'Mantenha Fundo branco salvo se pedirem preto. JPG não guarda buracos.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'Abaixe um pouco a qualidade se o e-mail precisar ser leve — a tarefa ainda é virar JPG, não caçar 200 KB.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'Toque em Converter tudo. HEIC ilegível é pulado; o resto vira .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'Baixe o ZIP quando houver pelo menos um acerto. Carregar exemplo já rodou na abertura.',
	tool_bulk_convert_images_to_jpg_how_title: 'Como ficar só com JPG',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'Preto',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'Personalizado',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'Fundo atrás da transparência',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'Branco',
	tool_bulk_convert_images_to_jpg_quality_label: 'Qualidade JPG',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG não tem canal alfa. Cada arquivo é pintado no mesmo fundo e salvo como .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'Os nomes de saída sempre terminam em .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'Pixels transparentes ganham o fundo compartilhado antes de gravar. Não há modo «sem fundo» que deixe blocos pretos sem explicação.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'Falha de leitura ou gravação pula aquela linha. Nomes repetidos no ZIP viram nome (2).jpg. Animação usa o primeiro quadro.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'Os arquivos ficam no dispositivo, sem enviar ao servidor.',
	tool_bulk_convert_images_to_jpg_rules_title: 'O que esperar',
	tool_bulk_convert_images_to_jpg_sample: 'Carregar exemplo',
	tool_bulk_convert_images_to_jpg_status_compressing: 'Convertendo o lote para JPG…',
	tool_bulk_convert_images_to_jpg_status_done: 'Lote concluído — confira a tabela e baixe o ZIP.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG pronto',
	tool_bulk_convert_images_to_jpg_status_skip: 'Pulado',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} prontas · {skip} puladas',
	tool_bulk_convert_images_to_jpg_title: 'Converter imagens para JPG em lote',
	tool_bulk_convert_images_to_jpg_usecase_1: 'Cadastro que recusa PNG e só aceita anexo JPG.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'Enviar por e-mail um pacote de fotos de produto que a gráfica pede em .jpg.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'HEIC do celular que o Windows não abre — converta o que este navegador conseguir ler.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'Quando combina',
	tool_bulk_convert_images_to_jpg_warn_anim: 'Arquivos animados: só o primeiro quadro é convertido.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'Há um arquivo mais largo ou mais alto que 8192 px — vai demorar.',
	tool_bulk_convert_images_to_jpg_warn_large: 'Há um arquivo maior que 25 MB — esta aba pode ficar sem memória.',
};

export default pt;
