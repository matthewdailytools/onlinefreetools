/**
 * i18n tool shard (image-grayscale / pt).
 * Portuguese (pt-BR, você) rewrite: converter foto em preto e branco / escala de cinza,
 * dessaturação parcial, Converter → Baixar with gold HUD and collapsed export settings.
 */
import type { SiteLangDict } from '../../../types';

/** Portuguese (Brazil) strings for the image grayscale converter. */
const pt: SiteLangDict = {
	tool_image_grayscale_title: 'Converter foto em preto e branco — escala de cinza com o método que você escolher',
	tool_image_grayscale_desc: 'Deixe a foto preto e branco no navegador, escolha o método e baixe.',
	tool_image_grayscale_description:
		'Converta uma foto colorida para preto e branco (escala de cinza) no navegador. Passos: escolha a imagem, escolha luminância, média, leveza ou um canal, ajuste a intensidade, clique em Converter e baixe JPEG, WebP ou PNG. Inclui fórmula e exemplo com barras de cor.',
	tool_image_grayscale_choose_file: 'Escolher imagem',
	tool_image_grayscale_drop_hint: 'Ou solte aqui um JPEG, PNG, WebP ou GIF.',
	tool_image_grayscale_convert: 'Converter para preto e branco',
	tool_image_grayscale_download: 'Baixar',
	tool_image_grayscale_sample: 'Carregar exemplo',
	tool_image_grayscale_clear: 'Limpar',
	tool_image_grayscale_method_label: 'Método de escala de cinza',
	tool_image_grayscale_method_luma601: 'Luminância — Rec.601 (recomendado)',
	tool_image_grayscale_method_luma709: 'Luminância — Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'Média de R, G, B',
	tool_image_grayscale_method_lightness: 'Leveza (máx. + mín.) ÷ 2',
	tool_image_grayscale_method_red: 'Só o canal vermelho (efeito filtro vermelho)',
	tool_image_grayscale_method_green: 'Só o canal verde',
	tool_image_grayscale_method_blue: 'Só o canal azul',
	tool_image_grayscale_method_hint: 'A luminância mantém o brilho que o olho enxerga. A prévia atualiza quando você troca.',
	tool_image_grayscale_amount_label: 'Intensidade',
	tool_image_grayscale_amount_hint: '100% = preto e branco total; valores menores deixam um pouco de cor (dessaturar).',
	tool_image_grayscale_show_original: 'Mostrar original',
	tool_image_grayscale_advanced: 'Configurações avançadas (opcional)',
	tool_image_grayscale_format_label: 'Formato de saída',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP fica leve e mantém transparência. PNG é sem perda. JPEG precisa de uma cor de fundo.',
	tool_image_grayscale_quality_label: 'Qualidade',
	tool_image_grayscale_quality_hint: 'Só JPEG e WebP; PNG ignora.',
	tool_image_grayscale_jpeg_bg_label: 'Fundo JPEG',
	tool_image_grayscale_jpeg_bg_hint: 'Preenche áreas transparentes antes de exportar em JPEG. O padrão é branco.',
	tool_image_grayscale_preview_label: 'Prévia',
	tool_image_grayscale_progress: 'Convertendo para escala de cinza…',
	tool_image_grayscale_step_decode: 'Decodificar',
	tool_image_grayscale_step_gray: 'Converter pixels',
	tool_image_grayscale_step_encode: 'Codificar',
	tool_image_grayscale_decode_step: 'Lendo a imagem…',
	tool_image_grayscale_gray_step: 'Recalculando cada pixel…',
	tool_image_grayscale_encode_step: 'Salvando como {fmt}…',
	tool_image_grayscale_elapsed: 'Decorridos {s}s',
	tool_image_grayscale_empty: 'Escolha uma imagem primeiro.',
	tool_image_grayscale_err_decode: 'Não foi possível abrir este arquivo como imagem. Tente JPEG, PNG ou WebP.',
	tool_image_grayscale_err_encode: 'Não foi possível salvar a imagem. Tente uma menor ou outro formato.',
	tool_image_grayscale_warn_large: 'Arquivo grande (mais de 25 MB) — a conversão pode ficar lenta.',
	tool_image_grayscale_warn_edge: 'Um lado passa de cerca de 8.192 px — alguns navegadores podem falhar ao processar.',
	tool_image_grayscale_warn_animation: 'GIF animado: só o primeiro quadro é convertido.',
	tool_image_grayscale_status_working: 'Processando…',
	tool_image_grayscale_status_done: 'Pronto — clique em Baixar para salvar.',
	tool_image_grayscale_stats_tpl: '{w} × {h} px · {method} → {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'Como converter uma foto para preto e branco',
	tool_image_grayscale_how_body:
		'Em cada pixel, os valores de vermelho, verde e azul são trocados por um único cinza, de modo que R = G = B. O método define como esse cinza é calculado; por isso a mesma foto pode sair mais clara, mais escura ou mais plana.',
	tool_image_grayscale_how_item_1: 'Escolha uma foto ou solte-a na caixa.',
	tool_image_grayscale_how_item_2: 'Escolha o método de escala de cinza e a intensidade; marque Mostrar original para comparar.',
	tool_image_grayscale_how_item_3: 'Clique em Converter para preto e branco e aguarde a barra de progresso.',
	tool_image_grayscale_how_item_4: 'Clique em Baixar. Abra antes as Configurações avançadas se precisar de PNG, JPEG ou outra qualidade.',
	tool_image_grayscale_why_choose_title: 'Por que usar este conversor para preto e branco',
	tool_image_grayscale_why_choose_item_1:
		'O controle de intensidade dá um visual dessaturado pela metade, além do preto e branco total.',
	tool_image_grayscale_why_choose_item_2:
		'Sete métodos em vez de um filtro fixo. No exemplo, o vermelho puro vira 76 com luminância Rec.601 e 85 com a média simples — e a leveza transforma vermelho, verde, azul e amarelo no mesmo cinza 128.',
	tool_image_grayscale_why_choose_item_3:
		'Os modos de um canal recriam efeitos de filtro preto e branco: o canal vermelho escurece céus azuis e suaviza a pele; o azul clareia o céu e destaca sardas.',
	tool_image_grayscale_why_choose_item_4:
		'Os pixels são reescritos, então o arquivo baixado continua preto e branco em qualquer app — diferente de um filtro CSS ou de um ajuste de tela.',
	tool_image_grayscale_why_choose_item_5:
		'A transparência é mantida em PNG e WebP, e a foto é processada nesta aba do navegador, sem envio ao servidor.',
	tool_image_grayscale_rules_title: 'Fórmulas de escala de cinza usadas',
	tool_image_grayscale_rules_body: 'R, G e B são os valores 0–255 do pixel; o resultado Y é gravado nos três canais.',
	tool_image_grayscale_rules_item_1:
		'Luminância Rec.601: Y = 0,299 R + 0,587 G + 0,114 B — o peso clássico de TV e JPEG, o mais próximo do brilho que cada cor parece ter.',
	tool_image_grayscale_rules_item_2:
		'Luminância Rec.709: Y = 0,2126 R + 0,7152 G + 0,0722 B — pesos de vídeo HD, também usados pelo filtro CSS grayscale(). Como a maioria dos editores, aplica-se aos valores sRGB armazenados sem linearizar o gama.',
	tool_image_grayscale_rules_item_3:
		'Média: Y = (R + G + B) ÷ 3. Leveza: Y = (o maior + o menor) ÷ 2. Os modos de canal copiam só R, G ou B.',
	tool_image_grayscale_rules_item_4:
		'Intensidade s: novo valor = original + (Y − original) × s. Em 100% cada pixel é cinza; em 50% as cores ficam a meio caminho do cinza.',
	tool_image_grayscale_rules_item_5:
		'O alfa (transparência) não muda; o JPEG preenche com a cor de fundo. GIFs animados usam o primeiro quadro. Salvar recodifica a imagem.',
	tool_image_grayscale_example_title: 'Exemplo',
	tool_image_grayscale_example:
		'O exemplo tem barras de vermelho, verde, azul e amarelo puros acima de uma faixa arco-íris. Com Rec.601 elas viram 76, 150, 29 e 226 — quatro cinzas bem diferentes. Rec.709 dá 54, 182, 18 e 237; a média dá 85, 85, 85 e 170, então vermelho, verde e azul se misturam; a leveza deixa os quatro em 128. Troque os métodos para ver a prévia mudar, depois Converter e Baixar.',
	tool_image_grayscale_usecases_title: 'Quando usar',
	tool_image_grayscale_usecase_1:
		'Fotos preto e branco para retratos, redes ou um visual vintage — experimente o canal vermelho para um filtro de filme clássico.',
	tool_image_grayscale_usecase_2:
		'Impressão em laser monocromática ou jornal: converta antes para ver como as cores se separam em cinza.',
	tool_image_grayscale_usecase_3:
		'Conferir um gráfico, logo ou paleta de interface: se duas cores virarem o mesmo cinza, quem tem deficiência de visão de cores pode não distinguir.',
	tool_image_grayscale_usecase_4:
		'Preparar digitalizações e documentos: a escala de cinza remove o tom do papel e deixa o arquivo mais simples.',
	tool_image_grayscale_faq_q1: 'O arquivo baixado é mesmo em escala de cinza, e fica menor?',
	tool_image_grayscale_faq_a1:
		'Cada pixel tem R, G e B iguais, então exibe e imprime como cinza puro. Os navegadores salvam como RGB normal, não como um único canal, então a redução de tamanho é modesta — em geral maior no PNG. Use um editor se precisar do modo de cor escala de cinza de 8 bits.',
	tool_image_grayscale_faq_q2: 'Posso manter um pouco de cor?',
	tool_image_grayscale_faq_a2:
		'Sim. Diminua a intensidade: 70–80% dá um visual desbotado e dessaturado; 0% deixa a foto igual. Manter só uma cor (cor seletiva) exige máscaras, e esta página não faz isso.',
	tool_image_grayscale_faq_q3: 'Qual método de escala de cinza eu escolho?',
	tool_image_grayscale_faq_a3:
		'Em fotos, comece pela luminância Rec.601: ela pesa mais o verde e menos o azul, alinhada ao brilho percebido. Rec.709 fica um pouco mais clara nos verdes. Média e leveza são mais simples, mas podem achatar imagens bem coloridas. Use um canal só quando quiser um efeito de filtro de propósito.',
	tool_image_grayscale_faq_q4: 'Por que minha foto preto e branco parece plana?',
	tool_image_grayscale_faq_a4:
		'Cores que diferem só no tom podem virar o mesmo cinza. Uma flor vermelha sobre folhas verdes é o caso clássico: com a média as duas dão 85. Passe para luminância ou teste o canal vermelho ou verde para separá-las.',
	tool_image_grayscale_faq_q5: 'É igual ao filtro CSS grayscale() ou ao filtro mono do celular?',
	tool_image_grayscale_faq_a5:
		'CSS grayscale(100%) usa os mesmos pesos da opção Rec.709, mas só muda como a página mostra a imagem; o arquivo continua colorido. Filtros do celular costumam adicionar contraste ou tom. Esta ferramenta grava pixels cinza em um arquivo novo.',
	tool_image_grayscale_faq_q6: 'O que acontece com PNGs transparentes?',
	tool_image_grayscale_faq_a6:
		'A transparência é preservada ao baixar PNG ou WebP. JPEG não guarda transparência, então essas áreas são preenchidas com a cor de fundo JPEG das Configurações avançadas.',
	tool_image_grayscale_faq_q7: 'Minha foto é enviada para algum lugar?',
	tool_image_grayscale_faq_a7:
		'Não. Decodificação, conversão e salvamento rodam nesta aba do navegador. Guarde o original se puder querer a versão colorida de volta — o download em cinza não volta a ser colorido.',
	tool_image_grayscale_article: 'Imagem para escala de cinza',
	tool_image_grayscale_ref_a_label: 'Wikipedia — Escala de cinza (conversão de cor para cinza)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — matriz grayscale()',
};

export default pt;
