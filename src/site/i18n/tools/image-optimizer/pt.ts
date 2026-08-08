/**
 * i18n tool shard (image-optimizer / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_image_optimizer_article:
    'Otimizador local com WASM: escolha de codec, qualidade/esforço, limite opcional do lado máximo, comparação deslizante e avisos honestos sobre AVIF.',
  tool_image_optimizer_avif_slow: 'AVIF pode demorar em fotos grandes — você pode cancelar.',
  tool_image_optimizer_cancel: 'Cancelar',
  tool_image_optimizer_cancelled: 'Cancelado.',
  tool_image_optimizer_choose_file: 'Escolher imagem',
  tool_image_optimizer_clear: 'Limpar',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'Codec / saída',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'Otimize imagens para a web no navegador com MozJPEG, WebP, AVIF ou OxiPNG. Passos: escolha a foto, carregue o motor, selecione o codec e os ajustes, compare antes/depois no controle deslizante e baixe. Ex.: transforme um JPEG hero grande em WebP menor — fica no dispositivo após carregar o motor.',
  tool_image_optimizer_download: 'Baixar',
  tool_image_optimizer_drop_hint: 'Ou solte um JPEG, PNG ou WebP aqui. Depois de carregar o motor, a otimização fica nesta aba.',
  tool_image_optimizer_effort_label: 'Esforço / velocidade',
  tool_image_optimizer_empty: 'Escolha uma imagem primeiro.',
  tool_image_optimizer_engine_failed: 'Falha ao carregar o motor. Verifique a conexão e tente de novo.',
  tool_image_optimizer_engine_loading: 'Carregando motor…',
  tool_image_optimizer_engine_needed: 'Carregue o motor antes de codificar.',
  tool_image_optimizer_engine_ready: 'Motor pronto — escolha o codec e otimize.',
  tool_image_optimizer_err_decode: 'Não foi possível decodificar. Tente JPEG, PNG ou WebP.',
  tool_image_optimizer_err_encode: 'Falha na codificação. Tente outro codec, menos esforço ou uma imagem menor.',
  tool_image_optimizer_example:
    'O mesmo JPEG de celular (~3–4 MB): MozJPEG costuma ficar menor que um JPEG casual do navegador; WebP costuma cortar mais com visual semelhante; AVIF pode reduzir ainda mais, mas em um quadro grande leva segundos. Trate como ordem de grandeza e confie no controle com o seu arquivo.',
  tool_image_optimizer_example_title: 'Exemplo',
  tool_image_optimizer_faq_a1:
    'O compressor é um passe rápido de tamanho/qualidade (ótimo para mirar KB). Aqui você carrega um motor para escolher MozJPEG, WebP, AVIF ou OxiPNG e comparar com o controle.',
  tool_image_optimizer_faq_a2:
    'Codificar AVIF pesa no processador, sobretudo em fotos grandes. Mostramos progresso e permitimos cancelar em vez de fingir que é instantâneo.',
  tool_image_optimizer_faq_a3:
    'Não. Depois de carregar o motor, decodificar e codificar ficam nesta aba. Confira no Network que a imagem não é enviada por POST.',
  tool_image_optimizer_faq_a4:
    'Os codecs são grandes. Esperamos o clique para a primeira tela ficar leve — você só baixa quando precisa otimizar no nível do codec.',
  tool_image_optimizer_faq_a5:
    'Quando o foco é mudar o tipo (incluindo fundo JPEG para transparência). Use este otimizador quando peso e controle do codec importam mais do que trocar formato rápido.',
  tool_image_optimizer_faq_a6:
    'Animados viram um quadro estático. Reencode costuma remover EXIF; inspecione antes com a ferramenta EXIF se precisar.',
  tool_image_optimizer_faq_q1: 'Qual a diferença do compressor de imagens?',
  tool_image_optimizer_faq_q2: 'Por que AVIF é tão lento?',
  tool_image_optimizer_faq_q3: 'Meus arquivos saem do navegador?',
  tool_image_optimizer_faq_q4: 'Por que preciso carregar um motor?',
  tool_image_optimizer_faq_q5: 'Quando usar o conversor de formato?',
  tool_image_optimizer_faq_q6: 'E animação e EXIF?',
  tool_image_optimizer_how_body:
    'Escolha uma foto, carregue o motor uma vez, selecione MozJPEG, WebP, AVIF ou OxiPNG, ajuste qualidade ou esforço, opcionalmente limite o lado mais longo e deslize para comparar. Tudo nesta aba. Se só quiser reduzir peso rápido sem escolher codec, use o compressor leve.',
  tool_image_optimizer_how_title: 'Como funciona',
  tool_image_optimizer_load_engine: 'Carregar motor',
  tool_image_optimizer_max_edge_label: 'Lado máximo',
  tool_image_optimizer_optimize: 'Otimizar',
  tool_image_optimizer_optimizing: 'Otimizando…',
  tool_image_optimizer_preview_after: 'Depois',
  tool_image_optimizer_preview_before: 'Antes',
  tool_image_optimizer_quality_label: 'Qualidade',
  tool_image_optimizer_ratio_tpl: '{from} → {to} ({pct}% menor)',
  tool_image_optimizer_resize_on: 'Limitar o lado mais longo',
  tool_image_optimizer_rules_body:
    'Cada codec equilibra peso, aparência, transparência e tempo. Leia antes de perseguir o menor arquivo possível.',
  tool_image_optimizer_rules_item_1:
    'MozJPEG: JPEG com perda, em geral menor que um JPEG típico do navegador — útil quando ainda precisa de .jpg.',
  tool_image_optimizer_rules_item_2: 'WebP: fotos menores com visual parecido; aceita transparência. Bom padrão para muitos sites.',
  tool_image_optimizer_rules_item_3: 'AVIF: costuma ser o menor com perda, mas mais lento — progresso e cancelamento fazem parte do fluxo.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG: encolhe PNG sem perda. Fotos continuam grandes; brilha em UI nítida com alfa. Reencode costuma remover EXIF; os bytes não saem da aba.',
  tool_image_optimizer_rules_title: 'O que esperar',
  tool_image_optimizer_sample: 'Carregar exemplo',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} ms',
  tool_image_optimizer_status_done: 'Pronto — confira o controle e o tamanho, depois baixe.',
  tool_image_optimizer_title: 'Otimizar imagem — WebP, AVIF e MozJPEG no dispositivo',
  tool_image_optimizer_usecase_1: 'Publicar hero ou foto de produto em WebP/AVIF depois de conferir o visual no controle deslizante.',
  tool_image_optimizer_usecase_2: 'Manter entrega JPEG, mas com MozJPEG quando o JPEG padrão do navegador ainda pesa demais.',
  tool_image_optimizer_usecase_3: 'Reduzir PNG de UI com transparência com OxiPNG ou WebP quase sem perda antes de entregar.',
  tool_image_optimizer_usecases_title: 'Bons encaixes',
  tool_image_optimizer_warn_animation: 'Animados: só o primeiro quadro é otimizado.',
  tool_image_optimizer_warn_edge: 'Dimensões muito grandes (>8192 px) — espere lentidão; limite o lado máximo.',
  tool_image_optimizer_warn_large: 'Arquivo grande (>25 MB) — pode ficar lento ou sem memória.',
};
export default pt;
