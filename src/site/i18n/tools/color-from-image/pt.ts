/**
 * i18n tool shard (color-from-image / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_color_from_image_article: 'Paleta de cores dominantes local com média regional ao clicar e HEX/RGB/HSL copiáveis.',
  tool_color_from_image_choose_file: 'Escolher imagem',
  tool_color_from_image_clear: 'Limpar',
  tool_color_from_image_copied: 'Copiado',
  tool_color_from_image_copy: 'Copiar HEX',
  tool_color_from_image_count_label: 'Cores',
  tool_color_from_image_description:
    'Obtenha cores dominantes e uma paleta completa de qualquer foto — ou use o seletor de cor com clique numa região. Passos: escolha a imagem, defina quantas cores (2–12), extraia, copie HEX/RGB/HSL, ou clique na pré-visualização para uma média local. Exemplo: seis tons de uma foto de marca e depois um clique no logo para um acento — o arquivo fica no dispositivo.',
  tool_color_from_image_drop_hint: 'Ou solte um JPEG, PNG ou WebP aqui. A extração fica nesta aba.',
  tool_color_from_image_empty: 'Escolha uma imagem primeiro.',
  tool_color_from_image_err_decode: 'Este navegador não decodificou o arquivo. Tente JPEG, PNG ou WebP.',
  tool_color_from_image_err_no_pixels: 'Sem pixels opacos para amostrar — a imagem pode ser totalmente transparente.',
  tool_color_from_image_example:
    'Carregue o exemplo de quatro blocos, mantenha Cores em 6 e extraia — deve ver teal, âmbar, verde, creme e vermelho. Depois clique no círculo vermelho: o cartão de cor escolhida mostra um HEX vermelho da média ~7×7 em torno desse ponto, pronto para copiar.',
  tool_color_from_image_example_title: 'Exemplo',
  tool_color_from_image_extract: 'Extrair',
  tool_color_from_image_faq_a1:
    'Não. Cálculo da paleta e amostragem por clique correm localmente. Veja o separador Rede — a imagem não é enviada por POST.',
  tool_color_from_image_faq_a2:
    'A página reduz a imagem, descarta pixels de baixa opacidade, divide o espaço de cor com median-cut, faz a média de cada grupo e ordena pelo número de amostras.',
  tool_color_from_image_faq_a3:
    'A ferramenta mapeia o clique para pixels de origem e faz a média de cores opacas num quadrado pequeno (~7×7). Obtém HEX/RGB/HSL dessa região, separado da lista da paleta.',
  tool_color_from_image_faq_a4:
    'Fotos e capturas de UI são ruidosas em 1×1. Uma média de região pequena é mais estável para acentos CSS e ainda reflete onde clicou.',
  tool_color_from_image_faq_a5: 'Só o primeiro quadro é desenhado, usado na paleta e disponível para pegar cor com clique.',
  tool_color_from_image_faq_q1: 'A minha imagem sai do navegador?',
  tool_color_from_image_faq_q2: 'Como são escolhidas as cores principais?',
  tool_color_from_image_faq_q3: 'O que acontece quando clico na imagem?',
  tool_color_from_image_faq_q4: 'Por que um clique não é um único pixel?',
  tool_color_from_image_faq_q5: 'GIFs animados são analisados por completo?',
  tool_color_from_image_how_body:
    'Escolha uma foto e extraia uma paleta: a página reduz uma cópia de trabalho (lado longo ~256 px), ignora pixels quase transparentes, agrupa cores e ordena pela frequência. Separadamente, clique na pré-visualização para fazer a média de um quadrado pequeno em torno desse ponto na resolução original e copiar HEX, RGB ou HSL — nada é enviado.',
  tool_color_from_image_how_title: 'Como funciona',
  tool_color_from_image_palette_label: 'Paleta',
  tool_color_from_image_pct_tpl: '{pct}% das amostras',
  tool_color_from_image_pick_hint:
    'Clique na imagem para fazer a média de uma região pequena em torno do ponto (cerca de 7×7 pixels de origem).',
  tool_color_from_image_pick_label: 'Cor escolhida',
  tool_color_from_image_pick_transparent: 'Esse ponto não tem pixels opacos — clique noutro sítio.',
  tool_color_from_image_pick_xy_tpl: 'Perto de ({x}, {y}) · média {size}×{size}',
  tool_color_from_image_preview_label: 'Origem — clique para pegar cor',
  tool_color_from_image_rules_body:
    'Extração de paleta e clique para pegar cor usam a mesma imagem, mas respondem a perguntas diferentes. Use a lista se uma cor parecer inesperada.',
  tool_color_from_image_rules_item_1:
    'A amostragem da paleta usa bitmap reduzido (borda máx. ~256 px) para fotos grandes continuarem rápidas. Detalhe fino pode fundir-se em tons próximos.',
  tool_color_from_image_rules_item_2:
    'Pixels com alfa abaixo de 128 são ignorados na paleta e nas médias por clique. Pontos totalmente transparentes mostram mensagem clara.',
  tool_color_from_image_rules_item_3:
    'Peça de 2 a 12 cores de paleta; imagens planas podem devolver menos. Cores ordenadas pela fatia de amostras.',
  tool_color_from_image_rules_item_4:
    'O clique faz a média de pixels opacos numa janela ~7×7 em torno do clique nas coordenadas de origem (não só a pré-visualização reduzida). É amostra de região, não conta-gotas de um pixel.',
  tool_color_from_image_rules_item_5: 'Privacidade: decodificação, cálculo da paleta e amostragem por clique correm localmente nesta aba.',
  tool_color_from_image_rules_title: 'O que esperar',
  tool_color_from_image_sample: 'Carregar exemplo',
  tool_color_from_image_status_done: 'Pronto — copie uma amostra ou clique na imagem para pegar uma região.',
  tool_color_from_image_status_extracting: 'Extraindo paleta…',
  tool_color_from_image_status_picked: 'Escolhido — clique em HEX/RGB/HSL para copiar.',
  tool_color_from_image_title: 'Extrair cores da imagem — paleta e clique',
  tool_color_from_image_usecase_1: 'Fotos de marca: monte uma paleta e depois clique num logo ou botão para um acento específico.',
  tool_color_from_image_usecase_2:
    'Capturas de UI: veja a paleta da interface e depois clique num chip ou ícone para a cor exata da região.',
  tool_color_from_image_usecase_3:
    'Ideias de gradiente: pegue dois acentos da paleta ou clicando, depois abra a calculadora de gradientes.',
  tool_color_from_image_usecases_title: 'Bons encaixes',
  tool_color_from_image_warn_animation: 'Arquivos animados: só o primeiro quadro é amostrado.',
  tool_color_from_image_warn_large: 'Arquivo grande (>25 MB) — a amostragem pode demorar.',
};
export default pt;
