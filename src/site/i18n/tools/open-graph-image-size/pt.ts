/**
 * Fragmento i18n (open-graph-image-size / pt).
 * H1: «Tamanho da imagem Open Graph». Atalho «og image» fica fora do título.
 * Secundários: 1200×630 e og:image no description / FAQ / casos.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_open_graph_image_size_article:
		'Recorte uma foto para o cartão Open Graph 1200×630 (cerca de 1,91:1) e baixe um JPEG. Os arquivos ficam no dispositivo e não sobem ao servidor.',
	tool_open_graph_image_size_choose_image: 'Escolher imagem',
	tool_open_graph_image_size_clear: 'Limpar',
	tool_open_graph_image_size_desc:
		'Exporte uma imagem Open Graph em 1200×630; fica no dispositivo, sem enviar ao servidor.',
	tool_open_graph_image_size_description:
		'Tamanho da imagem Open Graph: escolha uma foto, preencha 1200×630 (cerca de 1,91:1) e baixe um JPEG. Exemplo: a amostra já vem recortada no quadro do cartão. O par 1200×627 do LinkedIn é um chip opcional. As fotos ficam no dispositivo e não sobem ao servidor. Para conferir a tag og:image de um endereço, use a página de pré-visualização — não este H1. O título não é o atalho «og image».',
	tool_open_graph_image_size_download: 'Baixar JPEG',
	tool_open_graph_image_size_drop_hint: 'Solte uma foto. O preenchimento pode cortar as bordas.',
	tool_open_graph_image_size_empty: 'Escolha uma imagem primeiro.',
	tool_open_graph_image_size_err_decode: 'Não deu para ler essa imagem. Tente JPEG, PNG ou WebP.',
	tool_open_graph_image_size_example:
		'Carregar exemplo desenha uma paisagem, preenche 1200×630 e liga Baixar JPEG. 1200×627 é o chip do LinkedIn.',
	tool_open_graph_image_size_example_title: 'Exemplo',
	tool_open_graph_image_size_faq_a1:
		'Não. A foto fica nesta aba. Nada vai para o Facebook, o LinkedIn ou os nossos servidores.',
	tool_open_graph_image_size_faq_a2:
		'Buscas curtas por «og image» viram gíria. O H1 desta página é a frase inteira: Tamanho da imagem Open Graph.',
	tool_open_graph_image_size_faq_a3:
		'1200×630 é o cartão 1,91:1 mais comum. 1200×627 é quase igual e o LinkedIn pede esse par. Stories e arte de canal ficam de fora.',
	tool_open_graph_image_size_faq_a4:
		'Aqui só saem pixels. Para ver se og:image aparece num URL, use a ferramenta de pré-visualização Open Graph.',
	tool_open_graph_image_size_faq_a5:
		'Sim. O preenchimento amplia até cobrir 1200×630 e corta o que passar.',
	tool_open_graph_image_size_faq_q1: 'A minha foto é enviada?',
	tool_open_graph_image_size_faq_q2: 'Por que o título não é «og image»?',
	tool_open_graph_image_size_faq_q3: '1200×630 ou 1200×627?',
	tool_open_graph_image_size_faq_q4: 'Onde confirmo se og:image está aparecendo?',
	tool_open_graph_image_size_faq_q5: 'As bordas vão ser cortadas?',
	tool_open_graph_image_size_how_body:
		'Escolha a foto que deve aparecer ao partilhar o link, preencha 1200×630 e baixe. Depurar tags fica na pré-visualização.',
	tool_open_graph_image_size_how_item_1: 'Escolha a foto do cartão Open Graph — esse é o trabalho.',
	tool_open_graph_image_size_how_item_2: 'Mantenha 1200×630, salvo se pedirem exatamente 1200×627.',
	tool_open_graph_image_size_how_item_3: 'Baixe o JPEG. O corte evita faixas no cartão.',
	tool_open_graph_image_size_how_item_4: 'O exemplo já rodou ao abrir. Tags se conferem na pré-visualização.',
	tool_open_graph_image_size_how_title: 'Como usar',
	tool_open_graph_image_size_load_sample: 'Carregar exemplo',
	tool_open_graph_image_size_out_size_label: 'Tamanho de saída',
	tool_open_graph_image_size_quality_label: 'Qualidade JPEG',
	tool_open_graph_image_size_rules_body:
		'Exportar o cartão pede um quadro ~1,91:1, preenchimento com corte, e ficar separado da pré-visualização de tags.',
	tool_open_graph_image_size_rules_item_1:
		'Quadro padrão: 1200×630. Chip opcional: 1200×627. Proporção ~1,91:1.',
	tool_open_graph_image_size_rules_item_2:
		'Preenchimento (sem faixas). O excesso é cortado.',
	tool_open_graph_image_size_rules_item_3:
		'Depurar og:image é a página de pré-visualização, não este H1.',
	tool_open_graph_image_size_rules_item_4:
		'Stories, miniaturas do YouTube e arte de canal ficam fora.',
	tool_open_graph_image_size_rules_title: 'Regras que você deve esperar',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: 'Cartão pronto — baixe ou troque a foto.',
	tool_open_graph_image_size_status_working: 'Preenchendo…',
	tool_open_graph_image_size_title: 'Tamanho da imagem Open Graph',
	tool_open_graph_image_size_usecase_1:
		'Post de blog: exporte o JPEG 1200×630 antes de preencher og:image.',
	tool_open_graph_image_size_usecase_2:
		'URL de produto: recorte a embalagem no quadro do cartão sem abrir um app de design.',
	tool_open_graph_image_size_usecase_3:
		'LinkedIn: use o chip 1200×627 quando o parceiro pedir esse par.',
	tool_open_graph_image_size_usecases_title: 'Quando faz sentido',
};

export default pt;
