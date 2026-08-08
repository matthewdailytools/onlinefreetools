/**
 * i18n tool shard (image-merge / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_image_merge_article:
    'Colagem local de várias imagens com layout, espaço, fundo, ajuste em grade, formato e presets de tamanho.',
  tool_image_merge_bg_label: 'Fundo',
  tool_image_merge_choose_files: 'Adicionar imagens',
  tool_image_merge_clear: 'Limpar',
  tool_image_merge_cols_label: 'Colunas',
  tool_image_merge_description:
    'Combine fotos num collage ou imagem unida no navegador. Passos: adicione imagens, escolha layout horizontal/vertical/grade, ajuste espaço e fundo, una e baixe JPEG/WebP/PNG. Exemplo: três blocos em fila, fundo branco, 8 px de espaço → um WebP — os ficheiros não saem do dispositivo; presets de tamanho opcionais para publicações comuns.',
  tool_image_merge_download: 'Baixar',
  tool_image_merge_drop_hint: 'Ou solte dois ou mais JPEG, PNG ou WebP aqui. A união fica nesta aba.',
  tool_image_merge_empty: 'Adicione pelo menos uma imagem primeiro.',
  tool_image_merge_err_decode: 'O navegador não decodificou um dos ficheiros. Tente JPEG, PNG ou WebP.',
  tool_image_merge_err_encode: 'Não foi possível exportar a imagem unida. Tente um layout menor ou outro formato.',
  tool_image_merge_example:
    'Carregue a amostra de três cores, mantenha Horizontal, espaço 8 px, fundo branco, WebP 0,90, preset Nenhum, e una. Deve obter uma faixa ~728×180 px. Mude para Grade com 3 colunas para alinhar numa fila de células iguais.',
  tool_image_merge_example_title: 'Exemplo',
  tool_image_merge_faq_a1:
    'Não. Decodificar, maquetar e exportar corre no navegador. Veja o separador Rede — não há POST de imagens.',
  tool_image_merge_faq_a2:
    'Horizontal unifica altura e cresce em largura; vertical unifica largura e cresce em altura. A grade usa células fixas com conter ou cobrir.',
  tool_image_merge_faq_a3: 'Não. São apenas tamanhos de saída comuns. As regras das apps mudam; confira onde publica.',
  tool_image_merge_faq_a4: 'Só o primeiro fotograma é decodificado e desenhado. A animação não se mantém.',
  tool_image_merge_faq_a5:
    'Bordas acima de ~8192 px ou muitos megapíxeis podem exceder a memória do navegador. Reduza imagens, colunas da grade ou recorte antes.',
  tool_image_merge_faq_q1: 'As minhas fotos são enviadas?',
  tool_image_merge_faq_q2: 'Qual a diferença entre horizontal e vertical?',
  tool_image_merge_faq_q3: 'Os presets 1080 ou 1200 garantem aprovação no Instagram/Facebook?',
  tool_image_merge_faq_q4: 'O que acontece com GIF animado?',
  tool_image_merge_faq_q5: 'Por que falhou uma colagem enorme?',
  tool_image_merge_fit_contain: 'Conter',
  tool_image_merge_fit_cover: 'Cobrir',
  tool_image_merge_fit_label: 'Ajuste na célula',
  tool_image_merge_format_jpeg: 'JPEG',
  tool_image_merge_format_label: 'Formato de saída',
  tool_image_merge_format_png: 'PNG',
  tool_image_merge_format_webp: 'WebP',
  tool_image_merge_gap_label: 'Espaço (px)',
  tool_image_merge_how_body:
    'Adicione duas ou mais imagens, reordene se precisar, escolha layout, espaço e fundo, e una. A página cria uma tela local, desenha cada foto por ordem, pode escalar o resultado para tamanhos quadrados ou de link comuns, e deixa transferir — sem upload.',
  tool_image_merge_how_title: 'Como funciona',
  tool_image_merge_layout_grid: 'Grade',
  tool_image_merge_layout_horizontal: 'Horizontal',
  tool_image_merge_layout_label: 'Layout',
  tool_image_merge_layout_vertical: 'Vertical',
  tool_image_merge_merge: 'Unir',
  tool_image_merge_move_down: 'Descer',
  tool_image_merge_move_up: 'Subir',
  tool_image_merge_need_two: 'São necessárias pelo menos duas imagens para unir.',
  tool_image_merge_preset_fb: '1200×630 (pré-visualização de link comum)',
  tool_image_merge_preset_ig: '1080×1080 (quadrado comum)',
  tool_image_merge_preset_label: 'Preset de tamanho',
  tool_image_merge_preset_none: 'Nenhum',
  tool_image_merge_preview_label: 'Pré-visualização unida',
  tool_image_merge_quality_label: 'Qualidade',
  tool_image_merge_remove: 'Remover',
  tool_image_merge_rules_body:
    'O tamanho da tela segue as fórmulas abaixo. Na grade as células partilham largura e altura; conter deixa margens, cobrir recorta.',
  tool_image_merge_rules_item_1:
    'Horizontal: altura = máximo das fontes; cada imagem escala para essa altura; largura = soma das larguras escaladas + (n−1)×espaço.',
  tool_image_merge_rules_item_2:
    'Vertical: largura = máximo das fontes; cada imagem escala para essa largura; altura = soma das alturas escaladas + (n−1)×espaço.',
  tool_image_merge_rules_item_3:
    'Grade: 2–4 colunas; linhas = ceil(n/cols); célula = max largura × max altura; espaço entre células; conter ou cobrir dentro de cada célula.',
  tool_image_merge_rules_item_4:
    'Presets escalam a colagem final para 1080×1080 ou 1200×630 com a sua cor de fundo (tamanhos comuns, não aprovação de plataforma). O fundo é preenchido antes de desenhar.',
  tool_image_merge_rules_title: 'Regras de layout',
  tool_image_merge_sample: 'Carregar amostra',
  tool_image_merge_stats_tpl: '{w}×{h} · {mime} · {bytes}',
  tool_image_merge_status_done: 'Concluído — pré-visualização abaixo; clique Baixar para guardar.',
  tool_image_merge_status_merging: 'A unir imagens…',
  tool_image_merge_title: 'Unir imagens — combine fotos num collage',
  tool_image_merge_usecase_1: 'Antes/depois: duas fotos lado a lado para reviews ou progresso fitness.',
  tool_image_merge_usecase_2: 'Passos de tutorial: empilhe capturas em vertical numa imagem longa.',
  tool_image_merge_usecase_3: 'Ângulos de produto ou storyboard: grade 3×3 e depois comprima se o ficheiro for pesado.',
  tool_image_merge_usecases_title: 'Bons encaixes',
  tool_image_merge_warn_animation: 'GIF animado: só o primeiro fotograma é unido.',
  tool_image_merge_warn_edge: 'A borda da tela excede ~8192 px — alguns navegadores podem falhar ou ficar sem memória.',
  tool_image_merge_warn_large: 'Ficheiro grande (>25 MB) — a decodificação pode demorar.',
};
export default pt;
