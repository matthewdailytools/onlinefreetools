/**
 * Fragmento i18n da ferramenta amazon-main-image-size (pt).
 * H1 segue a cauda de busca; pixels ficam na descrição e no FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Texto em português de site de ferramentas, reescrito (não é calco do inglês). */
const pt: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'Encaixe a foto do produto num quadrado branco e baixe o JPEG da imagem principal. Os arquivos ficam no dispositivo e não sobem ao servidor.',
	tool_amazon_main_image_size_check_fill: 'Ocupar cerca de 85% do quadro',
	tool_amazon_main_image_size_choose_image: 'Escolher imagem',
	tool_amazon_main_image_size_clear: 'Limpar',
	tool_amazon_main_image_size_desc:
		'Imagem principal Amazon 2000×2000 no branco, com piso de zoom 1000 px — fica no dispositivo.',
	tool_amazon_main_image_size_description:
		'Tamanho da imagem principal da Amazon: escolha a foto do produto, exporte um JPEG 2000×2000 em fundo branco RGB 255 e confira o piso de zoom de 1000 px. Há um exemplo: a amostra cabe em cerca de 85% do quadrado. Os arquivos ficam no dispositivo e não são enviados ao servidor. Isto não é uma revisão oficial do Seller Central.',
	tool_amazon_main_image_size_download: 'Baixar JPEG',
	tool_amazon_main_image_size_drop_hint: 'Solte uma foto de produto. O processamento fica nesta aba.',
	tool_amazon_main_image_size_empty: 'Escolha primeiro uma foto de produto.',
	tool_amazon_main_image_size_err_decode: 'Não foi possível ler a imagem. Tente JPEG, PNG ou WebP.',
	tool_amazon_main_image_size_example:
		'Carregar exemplo desenha um produto substituto, encaixa-o num quadrado branco 2000×2000 a cerca de 85% e habilita Baixar JPEG. O chip de zoom mostra que o lado mais longo passa de 1000 px.',
	tool_amazon_main_image_size_example_title: 'Exemplo',
	tool_amazon_main_image_size_faq_a1:
		'Galeria e módulos A+ têm outro papel. Esta página só gera a imagem principal. Para recorte livre, use a ferramenta de recorte relacionada.',
	tool_amazon_main_image_size_faq_a2:
		'A exportação padrão é 2000×2000. 1600 ainda é um tamanho antigo comum e aparece como chip. Os pixels não entram no H1.',
	tool_amazon_main_image_size_faq_a3:
		'Espera-se fundo branco puro. A página preenche RGB 255,255,255 e, se quiser, deixa o produto em cerca de 85% do quadrado para não colar nas bordas.',
	tool_amazon_main_image_size_faq_a4:
		'Não. A foto é decodificada nesta aba do navegador. Nada é enviado aos nossos servidores nem à Amazon daqui.',
	tool_amazon_main_image_size_faq_a5:
		'O zoom da Amazon costuma exigir pelo menos 1000 pixels no lado mais longo. O chip compara a borda exportada com esse piso. Ampliar uma foto minúscula pode bater o número e continuar mole.',
	tool_amazon_main_image_size_faq_q1: 'Esta página também exporta imagens secundárias?',
	tool_amazon_main_image_size_faq_q2: 'Por que 2000×2000 e não 1600?',
	tool_amazon_main_image_size_faq_q3: 'E o fundo branco com 85% do quadro?',
	tool_amazon_main_image_size_faq_q4: 'Minha foto sobe para a Amazon ou para este site?',
	tool_amazon_main_image_size_faq_q5: 'Por que o zoom falha abaixo de 1000 px?',
	tool_amazon_main_image_size_fill_label: 'Preenchimento do quadro',
	tool_amazon_main_image_size_how_body:
		'Use a foto que deve virar imagem principal, mantenha o branco, baixe o quadrado e leia o chip de zoom. Outros tamanhos são só atalhos.',
	tool_amazon_main_image_size_how_item_1: 'Escolha a foto que será a imagem principal da Amazon.',
	tool_amazon_main_image_size_how_item_2: 'Deixe 2000×2000 marcado, salvo se ainda precisar do quadrado 1600.',
	tool_amazon_main_image_size_how_item_3: 'Mantenha o encaixe de 85% a menos que o produto já preencha o quadro como você quer.',
	tool_amazon_main_image_size_how_item_4: 'Baixe o JPEG e leia o chip do piso de zoom. O exemplo já rodou na abertura.',
	tool_amazon_main_image_size_how_title: 'Como usar',
	tool_amazon_main_image_size_load_sample: 'Carregar exemplo',
	tool_amazon_main_image_size_out_size_label: 'Tamanho de saída',
	tool_amazon_main_image_size_quality_label: 'Qualidade JPEG',
	tool_amazon_main_image_size_rules_body:
		'Exportar a imagem principal no navegador pede tela quadrada, preenchimento branco, piso de zoom e o aviso de que não há revisão oficial.',
	tool_amazon_main_image_size_rules_item_1:
		'Tela padrão 2000×2000; 1600×1600 é opcional. A foto é contida (sem esticar) sobre branco RGB 255.',
	tool_amazon_main_image_size_rules_item_2:
		'O encaixe opcional de 85% reduz o produto dentro do quadrado para não tocar as bordas.',
	tool_amazon_main_image_size_rules_item_3:
		'Chip de zoom: o lado mais longo exportado deve ser ≥1000 px. A página não afirma que a Amazon aceitará o arquivo.',
	tool_amazon_main_image_size_rules_item_4:
		'Imagens secundárias, infográficos e A+ ficam de fora. Isto não é Seller Central.',
	tool_amazon_main_image_size_rules_title: 'Regras a ter em conta',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'Imagem principal pronta — baixe ou troque a foto.',
	tool_amazon_main_image_size_status_working: 'Montando o quadrado…',
	tool_amazon_main_image_size_title: 'Tamanho da imagem principal da Amazon',
	tool_amazon_main_image_size_usecase_1:
		'Anúncio novo: transforme a foto do celular em imagem principal branca antes de abrir o Seller Central.',
	tool_amazon_main_image_size_usecase_2:
		'Zoom quebrado: veja se o lado mais longo ainda está abaixo de 1000 px e exporte de novo em 2000.',
	tool_amazon_main_image_size_usecase_3:
		'Troque uma imagem principal pequena herdada; se o JPEG pesar, continue no compressor relacionado.',
	tool_amazon_main_image_size_usecases_title: 'Quando vale a pena',
	tool_amazon_main_image_size_zoom_fail: 'O lado mais longo está abaixo de 1000 px — o zoom pode falhar.',
	tool_amazon_main_image_size_zoom_ok: 'O lado mais longo atinge o piso de zoom de 1000 px.',
	tool_amazon_main_image_size_zoom_label: 'Piso de zoom',
};

export default pt;
