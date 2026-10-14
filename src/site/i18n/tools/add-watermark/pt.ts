/**
 * i18n tool shard (add-watermark / pt).
 * Brazilian Portuguese (você) search-oriented rewrite of the 2026-10-14 English master:
 * "colocar marca d’água em foto", size as a percentage of the photo width, single mark or repeated
 * across the image, contrast shadow / outline, Adicionar marca d’água → Baixar imagem.
 * Sample signature: © 2026 Ana Souza.
 */
import type { SiteLangDict } from '../../../types';

/** Brazilian Portuguese strings for the add-text-watermark tool. */
const pt: SiteLangDict = {
	tool_add_watermark_title: "Colocar marca d’água em foto — Coloque seu nome ou © no canto ou repetido pela imagem",
	tool_add_watermark_desc: "Digite seu nome, um aviso © ou seu site, coloque no canto ou repita pela foto inteira e baixe a imagem pronta.",
	tool_add_watermark_description:
		"Coloque marca d’água de texto em foto direto no navegador, grátis. Em poucos passos: escolha a imagem, digite seu nome ou aviso de direitos autorais, posicione no canto ou repita pela imagem, ajuste tamanho e opacidade, clique em Adicionar marca d’água e baixe. Um exemplo: “© 2026 Ana Souza” no canto inferior direito de uma foto de 960 × 640.",
	tool_add_watermark_choose_file: "Escolher foto",
	tool_add_watermark_drop_hint: "Ou arraste para cá uma imagem JPEG, PNG, WebP, GIF, BMP ou AVIF.",
	tool_add_watermark_text_label: "Texto da marca d’água",
	tool_add_watermark_text_ph: "ex.: © 2026 Seu Nome",
	tool_add_watermark_text_hint: "Aperte Enter para criar uma segunda linha, como o endereço do seu site.",
	tool_add_watermark_insert_copyright: "Inserir © e ano",
	tool_add_watermark_layout_label: "Disposição",
	tool_add_watermark_layout_single: "Marca única",
	tool_add_watermark_layout_tile: "Repetida pela foto inteira",
	tool_add_watermark_layout_hint: "No modo repetido, o texto se espalha na diagonal e não some com um simples corte.",
	tool_add_watermark_position_label: "Posição",
	tool_add_watermark_position_hint: "Ou clique em qualquer ponto da pré-visualização.",
	tool_add_watermark_pos_tl: "Canto superior esquerdo",
	tool_add_watermark_pos_tc: "Centro superior",
	tool_add_watermark_pos_tr: "Canto superior direito",
	tool_add_watermark_pos_ml: "Centro à esquerda",
	tool_add_watermark_pos_mc: "Centro",
	tool_add_watermark_pos_mr: "Centro à direita",
	tool_add_watermark_pos_bl: "Canto inferior esquerdo",
	tool_add_watermark_pos_bc: "Centro inferior",
	tool_add_watermark_pos_br: "Canto inferior direito",
	tool_add_watermark_size_label: "Tamanho",
	tool_add_watermark_size_hint: "O tamanho é a largura da linha mais longa em relação à largura da foto, então a marca fica igual numa imagem de 1.000 px ou de 6.000 px.",
	tool_add_watermark_opacity_label: "Opacidade",
	tool_add_watermark_rotation_label: "Ângulo",
	tool_add_watermark_color_label: "Cor",
	tool_add_watermark_apply: "Adicionar marca d’água",
	tool_add_watermark_download: "Baixar imagem",
	tool_add_watermark_sample: "Carregar exemplo",
	tool_add_watermark_clear: "Limpar",
	tool_add_watermark_advanced: "Configurações avançadas (opcional)",
	tool_add_watermark_effect_label: "Efeito de contraste",
	tool_add_watermark_effect_shadow: "Sombra suave",
	tool_add_watermark_effect_outline: "Contorno",
	tool_add_watermark_effect_none: "Nenhum",
	tool_add_watermark_effect_hint: "Deixa o texto legível tanto nas partes claras quanto nas escuras da foto.",
	tool_add_watermark_font_label: "Fonte",
	tool_add_watermark_font_sans: "Sem serifa (limpa)",
	tool_add_watermark_font_serif: "Com serifa (clássica)",
	tool_add_watermark_font_mono: "Monoespaçada",
	tool_add_watermark_bold: "Negrito",
	tool_add_watermark_margin_label: "Distância da borda",
	tool_add_watermark_margin_hint: "Porcentagem do lado menor da foto.",
	tool_add_watermark_gap_label: "Espaço entre as repetições",
	tool_add_watermark_gap_hint: "Menor = padrão mais denso e difícil de remover; maior = mais da foto à mostra.",
	tool_add_watermark_format_label: "Formato de saída",
	tool_add_watermark_format_same: "Igual ao original",
	tool_add_watermark_format_jpeg: "JPEG",
	tool_add_watermark_format_png: "PNG",
	tool_add_watermark_format_webp: "WebP",
	tool_add_watermark_format_hint: "JPEG, PNG e WebP mantêm o formato; as outras imagens são salvas em PNG.",
	tool_add_watermark_quality_label: "Qualidade",
	tool_add_watermark_quality_hint: "Só para JPEG e WebP.",
	tool_add_watermark_resize_label: "Reduzir para a web",
	tool_add_watermark_resize_none: "Manter o tamanho original",
	tool_add_watermark_resize_2048: "Lado maior com 2048 px",
	tool_add_watermark_resize_1600: "Lado maior com 1600 px",
	tool_add_watermark_resize_1080: "Lado maior com 1080 px (redes sociais)",
	tool_add_watermark_resize_hint: "Imagens menores nunca são ampliadas. Publicar uma cópia reduzida também garante que só você tenha o original em resolução máxima.",
	tool_add_watermark_preview_label: "Pré-visualização",
	tool_add_watermark_progress: "Adicionando a marca d’água…",
	tool_add_watermark_step_decode: "Ler foto",
	tool_add_watermark_step_draw: "Desenhar texto",
	tool_add_watermark_step_encode: "Salvar",
	tool_add_watermark_decode_step: "Preparando a foto em tamanho original…",
	tool_add_watermark_draw_step: "Desenhando a marca d’água…",
	tool_add_watermark_encode_step: "Salvando em {fmt}…",
	tool_add_watermark_elapsed: "{s} s decorridos",
	tool_add_watermark_status_working: "Processando…",
	tool_add_watermark_status_done: "Pronto — clique em Baixar imagem para salvar.",
	tool_add_watermark_stats_tpl: "{w} × {h} px · formato {fmt} · {bytes}",
	tool_add_watermark_empty: "Escolha uma foto primeiro.",
	tool_add_watermark_empty_text: "Digite o texto da marca d’água primeiro.",
	tool_add_watermark_err_decode: "Não foi possível abrir este arquivo como imagem. Fotos HEIC do iPhone precisam ser salvas como JPEG antes.",
	tool_add_watermark_err_encode: "Não foi possível salvar a imagem. Tente Reduzir para a web ou outro formato.",
	tool_add_watermark_warn_large: "Arquivo grande (mais de 25 MB) — salvar pode demorar.",
	tool_add_watermark_warn_edge: "Um dos lados passa de cerca de 8.192 px — alguns navegadores não conseguem processar; escolha um tamanho menor em Reduzir para a web.",
	tool_add_watermark_warn_animation: "GIF animado: só o primeiro quadro é mantido.",
	tool_add_watermark_sample_text: "© 2026 Ana Souza",
	tool_add_watermark_how_title: "Como colocar marca d’água em uma foto",
	tool_add_watermark_how_body:
		"O texto é desenhado nos pixels de uma nova cópia da sua foto, então a marca continua lá onde quer que o arquivo seja publicado. A pré-visualização se atualiza a cada ajuste.",
	tool_add_watermark_how_item_1: "Escolha uma foto ou arraste-a para a caixa.",
	tool_add_watermark_how_item_2: "Digite o texto — Inserir © e ano coloca o símbolo de direitos autorais — e aperte Enter se quiser o seu site numa segunda linha, abaixo do nome.",
	tool_add_watermark_how_item_3: "Selecione Marca única e uma posição (ou clique na pré-visualização), ou Repetida pela foto inteira; depois ajuste tamanho, opacidade, ângulo e cor.",
	tool_add_watermark_how_item_4: "Clique em Adicionar marca d’água, aguarde a barra de progresso e clique em Baixar imagem.",
	tool_add_watermark_why_choose_title: "Por que usar esta ferramenta para colocar marca d’água em foto",
	tool_add_watermark_why_choose_item_1:
		"Modo repetido para as imagens que você precisa proteger: o texto se repete inclinado pela imagem toda, e cortar um canto não tira a marca.",
	tool_add_watermark_why_choose_item_2:
		"O tamanho acompanha a foto, não um tamanho de fonte fixo. Em 35%, a linha mais longa ocupa 35% da largura tanto numa foto de celular quanto num arquivo de câmera de 24 megapixels — chega de marca minúscula em imagem grande.",
	tool_add_watermark_why_choose_item_3: "Marca em duas linhas, © com o ano atual em um clique e posicionamento com um clique na pré-visualização, para não cobrir o que importa na foto.",
	tool_add_watermark_why_choose_item_4: "Sombra suave ou contorno numa cor de contraste escolhida automaticamente: texto branco continua legível num céu claro, e texto escuro, sobre as sombras.",
	tool_add_watermark_why_choose_item_5: "Fotos de celular ficam na orientação certa, o nome do arquivo ganha o acréscimo “-watermarked” e a foto é processada nesta aba do navegador, sem enviar ao servidor.",
	tool_add_watermark_rules_title: "Como o tamanho, a posição e o arquivo final são calculados",
	tool_add_watermark_rules_body: "Todas as medidas são relativas à foto, por isso a pré-visualização e o download em tamanho original batem.",
	tool_add_watermark_rules_item_1:
		"Tamanho: a linha mais longa é desenhada na porcentagem escolhida da largura da imagem (35% por padrão, de 5% a 100%); o espaçamento entre linhas é de 1,2 × o tamanho da fonte, e o bloco inteiro fica limitado a 90% da altura da imagem.",
	tool_add_watermark_rules_item_2:
		"Posição: a distância da borda é uma porcentagem do lado menor (3% por padrão), medida até a caixa externa do texto já girado, de modo que uma marca inclinada nunca sai da foto. Nas posições da esquerda o texto fica alinhado à esquerda; nas da direita, à direita.",
	tool_add_watermark_rules_item_3:
		"Repetida: o padrão gira em torno do centro da foto, e uma fileira sim, outra não, é deslocada meio passo; o espaçamento é uma porcentagem da largura do texto na horizontal e da altura do texto na vertical.",
	tool_add_watermark_rules_item_4:
		"Cor de contraste: se a cor do texto for clara (brilho de 140 ou mais numa escala de 0 a 255, calculado por 0,299 R + 0,587 G + 0,114 B), a sombra ou o contorno ficam escuros; caso contrário, ficam brancos.",
	tool_add_watermark_rules_item_5:
		"Arquivo final: a imagem é recodificada; em JPEG, as áreas transparentes são preenchidas de branco. Os dados da câmera e a localização GPS (EXIF) não são copiados para o novo arquivo. GIFs animados mantêm só o primeiro quadro.",
	tool_add_watermark_example_title: "Exemplo",
	tool_add_watermark_example:
		"O exemplo é uma foto de lago de 960 × 640 com “© 2026 Ana Souza” em branco, 70% de opacidade e sombra suave. Com tamanho 35%, o texto fica com 336 px de largura, e uma margem de 3% mantém o bloco de texto a 19 px das bordas direita e inferior (3% do lado menor, de 640 px). Mude a Disposição para Repetida pela foto inteira e o mesmo texto se repete a −30° e tamanho 25% sobre a imagem toda.",
	tool_add_watermark_usecases_title: "Quando usar",
	tool_add_watermark_usecase_1: "Fotógrafos e artistas que postam o trabalho na internet: um nome ou © discreto no canto garante o crédito quando a imagem é compartilhada.",
	tool_add_watermark_usecase_2: "Provas e prévias para clientes: “PROVA” ou “AMOSTRA” repetido sobre a imagem para que ela não seja usada antes do pagamento.",
	tool_add_watermark_usecase_3: "RG, CNH e documentos enviados por foto: escreva por cima “Cópia válida apenas para cadastro de aluguel no Banco XYZ”, para que não seja reaproveitada em outro lugar.",
	tool_add_watermark_usecase_4: "Vendedores e anúncios: o nome da sua loja ou o seu site na foto do produto ou do imóvel antes de publicar no marketplace.",
	tool_add_watermark_faq_q1: "Como colocar marca d’água em foto de graça?",
	tool_add_watermark_faq_a1:
		"Escolha a foto, digite o texto, selecione um canto ou Repetida pela foto inteira e clique em Adicionar marca d’água e depois em Baixar imagem. Não precisa criar conta, e o resultado não leva nenhuma marca nossa.",
	tool_add_watermark_faq_q2: "Onde colocar a marca d’água para não ser fácil de tirar?",
	tool_add_watermark_faq_a2:
		"Uma marca no canto sai com um simples corte. Uma marca semitransparente sobre o assunto principal, ou o modo repetido, é bem mais difícil de remover. Nenhuma marca d’água visível é impossível de apagar com edição, então trate-a como forma de desestimular o uso indevido e de dar crédito, e publique cópias reduzidas em vez dos originais.",
	tool_add_watermark_faq_q3: "O que escrever numa marca d’água de direitos autorais?",
	tool_add_watermark_faq_a3:
		"O formato comum é o símbolo ©, o ano da primeira publicação e o nome do titular, por exemplo “© 2026 Ana Souza”; incluir seu site ajuda as pessoas a encontrar você. Pela Convenção de Berna, a obra é protegida mesmo sem nenhum aviso, então a marca d’água serve principalmente para mostrar a quem a imagem pertence.",
	tool_add_watermark_faq_q4: "Dá para colocar marca d’água em várias fotos de uma vez?",
	tool_add_watermark_faq_a4:
		"Esta página trabalha com uma foto por vez para você posicionar a marca no olho. Para uma pasta de fotos de produtos ou de um evento com a mesma marca, use uma ferramenta de marca d’água em lote.",
	tool_add_watermark_faq_q5: "Por que minha marca d’água fica minúscula em algumas fotos?",
	tool_add_watermark_faq_a5:
		"A maioria das ferramentas usa um tamanho de fonte fixo em pixels: um texto de 48 px parece grande numa imagem de 1.000 px, mas fica minúsculo numa foto de câmera de 6.000 px. Aqui o tamanho é uma porcentagem da largura da imagem, então o mesmo ajuste dá o mesmo resultado em qualquer resolução.",
	tool_add_watermark_faq_q6: "Minha foto é enviada para algum servidor? A localização é mantida?",
	tool_add_watermark_faq_a6:
		"A foto não é enviada ao servidor: a marca d’água é desenhada nesta aba do navegador e o arquivo fica no seu dispositivo. A cópia baixada não inclui os dados EXIF originais, então os dados da câmera e a localização GPS ficam de fora — guarde o original se precisar deles.",
	tool_add_watermark_faq_q7: "Posso colocar um logo em vez de texto?",
	tool_add_watermark_faq_a7:
		"Esta página desenha apenas texto digitado. Para colocar um logo em PNG sobre uma foto, use uma ferramenta de sobreposição de imagens, que posiciona uma imagem sobre outra com transparência.",
	tool_add_watermark_article: "Colocar marca d’água de texto em uma foto",
	tool_add_watermark_ref_a_label: "U.S. Copyright Office — Circular 3: aviso de direitos autorais (em inglês)",
	tool_add_watermark_ref_b_label: "MDN — CanvasRenderingContext2D.fillText(), como desenhar texto no canvas",
};

export default pt;
