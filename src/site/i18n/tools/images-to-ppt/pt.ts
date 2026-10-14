/**
 * i18n tool shard (images-to-ppt / pt).
 * 多图转 PowerPoint 巴西葡萄牙语文案：一图一页 PPTX，可选 16:9/4:3、contain/cover、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 巴西葡萄牙语文案字典。 */
const pt: SiteLangDict = {
	tool_images_to_ppt_title: 'Imagens para PowerPoint — fotos em slides PPTX',
	tool_images_to_ppt_desc: 'Transforme fotos locais num .pptx com um slide por imagem.',
	tool_images_to_ppt_description:
		'Converta várias fotos para PowerPoint (.pptx) no navegador: uma imagem por slide, 16:9 ou 4:3, contain ou cover. Passos: Escolher imagens, Converter para PowerPoint, Baixar. Exemplo: três fotos → três slides. Os arquivos ficam nesta aba e não são enviados ao servidor.',
	tool_images_to_ppt_choose_files: 'Escolher imagens',
	tool_images_to_ppt_drop_hint: 'Ou solte aqui vários JPEG, PNG, WebP ou GIF. O processo fica nesta aba.',
	tool_images_to_ppt_convert: 'Converter para PowerPoint',
	tool_images_to_ppt_download: 'Baixar',
	tool_images_to_ppt_sample: 'Carregar exemplo',
	tool_images_to_ppt_clear: 'Limpar',
	tool_images_to_ppt_advanced: 'Configurações avançadas (opcional)',
	tool_images_to_ppt_layout_label: 'Tamanho do slide',
	tool_images_to_ppt_layout_16x9: 'Widescreen 16:9',
	tool_images_to_ppt_layout_4x3: 'Padrão 4:3',
	tool_images_to_ppt_layout_hint: 'A maioria dos projetores modernos usa 16:9. Escolha 4:3 para salas de aula antigas.',
	tool_images_to_ppt_fit_label: 'Como a imagem preenche o slide',
	tool_images_to_ppt_fit_contain: 'Encaixar imagem inteira (faixas)',
	tool_images_to_ppt_fit_cover: 'Preencher o slide (pode cortar)',
	tool_images_to_ppt_fit_hint: 'Contain mantém cada pixel visível. Cover preenche o slide e pode cortar fotos altas ou largas.',
	tool_images_to_ppt_bg_label: 'Fundo do slide',
	tool_images_to_ppt_bg_hint: 'Aparece nas faixas quando o ajuste é contain. O padrão é branco.',
	tool_images_to_ppt_progress: 'Montando o PowerPoint…',
	tool_images_to_ppt_step_encode: 'Codificar imagens',
	tool_images_to_ppt_step_build: 'Montar slides',
	tool_images_to_ppt_step_pack: 'Empacotar PPTX',
	tool_images_to_ppt_encode_step: 'Codificando imagem {i} de {n}…',
	tool_images_to_ppt_build_step: 'Adicionando slides à apresentação…',
	tool_images_to_ppt_pack_step: 'Empacotando o arquivo .pptx…',
	tool_images_to_ppt_elapsed: 'Decorrido {s}s',
	tool_images_to_ppt_move_up: 'Subir',
	tool_images_to_ppt_move_down: 'Descer',
	tool_images_to_ppt_remove: 'Remover',
	tool_images_to_ppt_empty: 'Adicione pelo menos uma imagem primeiro.',
	tool_images_to_ppt_err_decode: 'Não foi possível decodificar a imagem. Tente JPEG, PNG ou WebP.',
	tool_images_to_ppt_err_convert: 'Não foi possível montar o PowerPoint. Tente menos imagens ou arquivos menores.',
	tool_images_to_ppt_err_lib: 'Falha ao carregar a biblioteca PPTX. Atualize a página e tente de novo.',
	tool_images_to_ppt_warn_large: 'Arquivo grande (>25 MB) — a conversão pode ficar lenta.',
	tool_images_to_ppt_warn_edge: 'Uma borda passa de ~8192 px — alguns navegadores podem falhar.',
	tool_images_to_ppt_warn_animation: 'GIF animado: só o primeiro quadro vai para o slide.',
	tool_images_to_ppt_status_converting: 'Convertendo para PowerPoint…',
	tool_images_to_ppt_status_done: 'Pronto — clique em Baixar para salvar o .pptx.',
	tool_images_to_ppt_stats_tpl: '{n} slides → PPTX pronto ({bytes})',
	tool_images_to_ppt_how_title: 'Como converter imagens para PowerPoint',
	tool_images_to_ppt_how_body:
		'Cada arquivo da lista vira um slide. Reordene com as setas e depois converta. As configurações opcionais mudam o tamanho do slide, como as fotos preenchem a área e a cor das faixas.',
	tool_images_to_ppt_how_item_1: 'Escolher imagens ou soltar JPEG, PNG, WebP ou GIF na zona de arrastar.',
	tool_images_to_ppt_how_item_2: 'Reordene com Subir / Descer se a ordem dos slides estiver errada. Remova o que não precisar.',
	tool_images_to_ppt_how_item_3: 'Se quiser, abra Configurações avançadas para escolher 16:9 ou 4:3, contain ou cover, e uma cor de fundo.',
	tool_images_to_ppt_how_item_4: 'Clique em Converter para PowerPoint, espere a barra de progresso e depois clique em Baixar.',
	tool_images_to_ppt_why_choose_title: 'Por que usar Imagens para PowerPoint — fotos em slides PPTX',
	tool_images_to_ppt_why_choose_item_1: 'Um slide por foto, na ordem que você definir — sem enviar ao servidor e sem conta.',
	tool_images_to_ppt_why_choose_item_2: 'Widescreen 16:9 ou clássico 4:3, para a apresentação bater com o projetor da sala.',
	tool_images_to_ppt_why_choose_item_3: 'Contain mantém a foto inteira; cover preenche o slide quando você quer visual full-bleed.',
	tool_images_to_ppt_why_choose_item_4: 'Avisos leves para arquivos enormes, bordas gigantes em pixels e GIF animados (só o primeiro quadro).',
	tool_images_to_ppt_why_choose_item_5: 'Um HUD de progresso visível enquanto cada imagem é codificada e empacotada no .pptx.',
	tool_images_to_ppt_rules_title: 'Regras',
	tool_images_to_ppt_rules_body: 'A apresentação é montada com PptxGenJS inteiramente nesta aba do navegador.',
	tool_images_to_ppt_rules_item_1: 'O layout padrão é widescreen 16:9; mude para 4:3 em Configurações avançadas quando precisar.',
	tool_images_to_ppt_rules_item_2: 'A ordem dos slides segue a lista. Use Subir / Descer antes de converter.',
	tool_images_to_ppt_rules_item_3: 'Contain deixa faixas com a cor de fundo; cover corta para preencher a área de conteúdo.',
	tool_images_to_ppt_rules_item_4: 'GIFs animados contribuem só com o primeiro quadro. Títulos e transições não são adicionados — edite no PowerPoint depois de Baixar.',
	tool_images_to_ppt_rules_item_5: 'Carregar a biblioteca PPTX deste site não envia suas fotos aos nossos servidores.',
	tool_images_to_ppt_example_title: 'Exemplo',
	tool_images_to_ppt_example:
		'Carregar exemplo monta três slides de blocos de cor (sample-a, sample-b, sample-c) em 16:9 com ajuste contain. Converter para PowerPoint termina no navegador; Baixar salva images.pptx. Mude para 4:3 ou cover e converta de novo para comparar o corte.',
	tool_images_to_ppt_usecases_title: 'Quando usar',
	tool_images_to_ppt_usecase_1: 'Transformar um conjunto de fotos do celular numa apresentação rápida sem abrir o PowerPoint do desktop primeiro.',
	tool_images_to_ppt_usecase_2: 'Demonstrações de produto em que cada captura precisa do próprio slide full-bleed ou com faixas.',
	tool_images_to_ppt_usecase_3: 'Fotos de aula ou de campo que precisam bater com um projetor 4:3 ainda em uso.',
	tool_images_to_ppt_usecase_4: 'Montar um rascunho a partir de imagens antes de acrescentar títulos, notas e animações no PowerPoint ou no LibreOffice Impress.',
	tool_images_to_ppt_faq_q1: 'Minhas fotos são enviadas?',
	tool_images_to_ppt_faq_a1:
		'Não. Decodificação, layout dos slides e empacotamento PPTX rodam na sua aba. A única requisição de rede é carregar o script PptxGenJS da pasta vendor deste site.',
	tool_images_to_ppt_faq_q2: 'Preciso ter o Microsoft PowerPoint instalado?',
	tool_images_to_ppt_faq_a2:
		'Não. Qualquer app que abra .pptx funciona — PowerPoint, Google Slides (Arquivo → Importar), LibreOffice Impress, Keynote e outras.',
	tool_images_to_ppt_faq_q3: 'Posso adicionar títulos ou animações aqui?',
	tool_images_to_ppt_faq_a3:
		'Não nesta página. Exporte primeiro os slides com fotos e depois abra o arquivo no PowerPoint (ou Impress) para texto, transições e notas do apresentador.',
	tool_images_to_ppt_faq_q4: 'Imagens para PowerPoint ou imagens para PDF?',
	tool_images_to_ppt_faq_a4:
		'O PPTX continua editável como slides. O PDF fica fixo para handouts e impressão. Use a ferramenta Imagens para PDF quando precisar de um documento, não de uma apresentação.',
	tool_images_to_ppt_faq_q5: 'Contain ou cover — qual escolher?',
	tool_images_to_ppt_faq_a5:
		'Contain (padrão) mostra a foto inteira com faixas na cor de fundo. Cover preenche o slide e pode cortar bordas — útil para fotos de produto full-bleed.',
	tool_images_to_ppt_faq_q6: 'O que acontece com GIFs animados?',
	tool_images_to_ppt_faq_a6:
		'Só o primeiro quadro vai para o slide. O PowerPoint não reproduz GIFs de vários quadros como animação a partir desta exportação.',
	tool_images_to_ppt_faq_q7: 'Por que a conversão fica lenta ou falha?',
	tool_images_to_ppt_faq_a7:
		'Arquivos muito grandes (>25 MB) ou bordas acima de ~8192 px podem sobrecarregar o navegador. Redimensione ou comprima as imagens e converta de novo com menos arquivos se precisar.',
	tool_images_to_ppt_article: 'Converter imagens para uma apresentação PowerPoint PPTX no navegador',
	tool_images_to_ppt_references: 'Referências PptxGenJS e MDN Blob para o caminho de exportação no cliente.',
	tool_images_to_ppt_ref_a_label: 'PptxGenJS — biblioteca JavaScript de PowerPoint',
	tool_images_to_ppt_ref_b_label: 'MDN — Blob',
};

export default pt;
