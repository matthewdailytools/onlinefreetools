/**
 * Fragmento i18n (bulk-convert-images-to-png / pt).
 * H1 segue a busca «Converter imagens para PNG em lote».
 */
import type { SiteLangDict } from '../../../types';

/** Português: capturas e logos que precisam ser PNG com transparência; tom de ferramenta do dia a dia. */
const pt: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'Quando a entrega tem de ser PNG, passe fotos JPEG, capturas e logos com furo nesta aba: se a origem tem transparência ela fica, as que falham são saltadas e você baixa um ZIP. JPEG para PNG costuma crescer; a tabela marca. Ficam no dispositivo, sem envio a um servidor.',
	tool_bulk_convert_images_to_png_choose_files: 'Escolher imagens',
	tool_bulk_convert_images_to_png_clear: 'Limpar',
	tool_bulk_convert_images_to_png_col_after: 'Depois',
	tool_bulk_convert_images_to_png_col_before: 'Antes',
	tool_bulk_convert_images_to_png_col_name: 'Arquivo',
	tool_bulk_convert_images_to_png_col_status: 'Estado',
	tool_bulk_convert_images_to_png_convert: 'Converter tudo',
	tool_bulk_convert_images_to_png_desc:
		'Converter imagens para PNG em lote, manter a transparência se a origem tiver e baixar um ZIP; ficam no dispositivo, sem envio a um servidor.',
	tool_bulk_convert_images_to_png_description:
		'Converter imagens para PNG em lote: coloque JPEGs ou capturas, recodifique como PNG nesta aba sem um fundo JPEG, salte falhas e baixe um ZIP. Passos: escolha o lote, converta tudo, veja na tabela se um JPEG cresceu como PNG. Exemplo: uma foto opaca e um logo com furo viram .png. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_bulk_convert_images_to_png_download_zip: 'Baixar ZIP',
	tool_bulk_convert_images_to_png_drop_hint: 'Solte JPEG, PNG, WebP ou GIF (até 20). A conversão fica nesta aba.',
	tool_bulk_convert_images_to_png_empty: 'Adicione imagens primeiro.',
	tool_bulk_convert_images_to_png_err_decode: 'Não foi possível ler este arquivo. Ignorado.',
	tool_bulk_convert_images_to_png_err_encode: 'Não foi possível gravar um PNG deste arquivo. Ignorado.',
	tool_bulk_convert_images_to_png_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_bulk_convert_images_to_png_err_too_many: 'No máximo 20 imagens. As extras não foram adicionadas.',
	tool_bulk_convert_images_to_png_example:
		'Carregar exemplo coloca um bloco JPEG e um logo transparente, grava dois .png e ativa Baixar ZIP. A linha JPEG costuma mostrar um PNG maior.',
	tool_bulk_convert_images_to_png_example_title: 'Exemplo',
	tool_bulk_convert_images_to_png_faq_a1:
		'Não. A leitura e a gravação PNG acontecem nesta aba. Ficam no dispositivo, sem envio a um servidor. O auxiliar do ZIP pode vir deste site; suas fotos continuam na aba.',
	tool_bulk_convert_images_to_png_faq_a2:
		'Não. JPEG nunca guardou furos. jpg para png só troca o envelope; o fundo segue opaco. Furos de verdade só sobrevivem se a origem já tinha alfa.',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG é sem perdas. Um JPEG de foto costuma crescer. A tabela marca «maior». Encolha pixels em Comprimir imagens PNG em lote, ou fique no JPEG se não precisa de PNG.',
	tool_bulk_convert_images_to_png_faq_a4:
		'Comprimir PNG é para arquivos que já são PNG e devem continuar PNG, só menores. Esta página muda o sufixo para PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'Não. Só o primeiro quadro vira PNG estático, e essa linha é anotada.',
	tool_bulk_convert_images_to_png_faq_q1: 'As imagens sobem para um servidor?',
	tool_bulk_convert_images_to_png_faq_q2: 'JPG para PNG recupera a transparência?',
	tool_bulk_convert_images_to_png_faq_q3: 'Por que o PNG ficou maior que o JPEG?',
	tool_bulk_convert_images_to_png_faq_q4: 'Qual a diferença de comprimir PNG?',
	tool_bulk_convert_images_to_png_faq_q5: 'GIFs animados continuam animados?',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} imagens na fila',
	tool_bulk_convert_images_to_png_how_body:
		'Escolha as imagens que devem virar PNG, converta aqui sem pintar um fundo, depois leve um ZIP das que deram certo.',
	tool_bulk_convert_images_to_png_how_item_1: 'Escolha as capturas ou logos que precisam ser PNG.',
	tool_bulk_convert_images_to_png_how_item_2: 'Não há controle de fundo branco — furos continuam se a origem tiver alfa.',
	tool_bulk_convert_images_to_png_how_item_3: 'Aperte Converter tudo. JPEG vira PNG opaco; a tabela avisa se cresceu.',
	tool_bulk_convert_images_to_png_how_item_4: 'Quer JPG? Use Converter imagens para JPG em lote. Quer PNG menor? Use Comprimir imagens PNG em lote.',
	tool_bulk_convert_images_to_png_how_item_5: 'Baixe o ZIP quando pelo menos um arquivo der certo. Carregar exemplo já rodou na abertura.',
	tool_bulk_convert_images_to_png_how_title: 'Como passar para PNG',
	tool_bulk_convert_images_to_png_max_edge_label: 'Lado máximo',
	tool_bulk_convert_images_to_png_resize_on: 'Limitar o lado mais longo',
	tool_bulk_convert_images_to_png_rules_body:
		'A saída é sempre PNG. Esta página não achata a transparência sobre um fundo JPEG.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'O alfa fica se a origem o tiver. Um JPEG não tem alfa para guardar.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'O encolhimento opcional do lado longo vem desligado para a conversão não redimensionar escondido.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'Se o PNG for maior que o original, a linha diz. Falhas de leitura saltam. Nomes repetidos no ZIP viram nome (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_bulk_convert_images_to_png_rules_title: 'O que esperar',
	tool_bulk_convert_images_to_png_sample: 'Carregar exemplo',
	tool_bulk_convert_images_to_png_status_compressing: 'Convertendo o lote para PNG…',
	tool_bulk_convert_images_to_png_status_done: 'Lote pronto — confira a tabela e baixe o ZIP.',
	tool_bulk_convert_images_to_png_status_larger: 'Maior que a origem',
	tool_bulk_convert_images_to_png_status_ok: 'PNG pronto',
	tool_bulk_convert_images_to_png_status_skip: 'Ignorado',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} prontos · {larger} maiores · {skip} ignorados',
	tool_bulk_convert_images_to_png_title: 'Converter imagens para PNG em lote',
	tool_bulk_convert_images_to_png_usecase_1: 'Arquivar capturas como PNG para um handoff de design.',
	tool_bulk_convert_images_to_png_usecase_2: 'Unificar adesivos como PNG quando a origem já tem furos.',
	tool_bulk_convert_images_to_png_usecase_3: 'jpg para png quando o CMS só aceita PNG — espere um arquivo de foto maior.',
	tool_bulk_convert_images_to_png_usecases_title: 'Quando combina',
	tool_bulk_convert_images_to_png_warn_anim: 'Arquivos animados: só o primeiro quadro vira PNG estático.',
	tool_bulk_convert_images_to_png_warn_edge: 'Há um arquivo mais largo ou alto que 8192 px; vai demorar.',
	tool_bulk_convert_images_to_png_warn_large: 'Há um arquivo maior que 25 MB; esta aba pode ficar sem memória.',
	tool_bulk_convert_images_to_png_warn_larger: 'Alguns PNGs ficaram maiores que o original. É esperado em JPEG de foto.',
};

export default pt;
