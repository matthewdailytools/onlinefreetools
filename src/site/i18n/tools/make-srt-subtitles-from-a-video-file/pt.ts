import type { SiteLangDict } from '../../../types';

/**
 * Portuguese (pt) copy for make-srt-subtitles-from-a-video-file.
 * Local search: vídeo para srt / legendas a partir de vídeo / gerar srt de vídeo.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: sem enviar ao servidor; ficam no dispositivo.
 */
const pt: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'Criar legendas SRT a partir de um arquivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'Transforma um vídeo local com fala em faixas .srt com tempos usando Whisper no dispositivo—os arquivos ficam no dispositivo e não são enviados a um servidor.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'Crie legendas SRT com tempos a partir de um arquivo de vídeo local no navegador com Whisper no dispositivo: os arquivos ficam no seu dispositivo e não são enviados a um servidor. Passos: escolha um vídeo com diálogo, reproduza para conferir o clipe, idioma (ou auto), Criar SRT, edite as faixas, baixe o .srt. Exemplo: Amostra passa um MP4 falado curto pelo Whisper. A primeira execução baixa cerca de 45 MB uma vez (depois cache). WAV/MP3 só de áudio vão em Criar legendas SRT a partir de um arquivo de áudio. Sem burn-in; tempos dos segmentos Whisper.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'Quem busca «vídeo para srt» ou «gerar srt de vídeo» quer um arquivo de legendas com tempos baixável a partir de material local—não uma página de memorando de voz. Esta ferramenta executa Whisper tiny no dispositivo a partir de scripts same-origin /vendor/whisper: decodifica a faixa de áudio do vídeo na aba, mostra prévia de vídeo para cruzar diálogo e imagem, obtém marcas de segmento, formata SRT padrão editável e baixa. Arquivos só de áudio são rejeitados com link claro para Criar legendas SRT a partir de um arquivo de áudio. Não há caminho de microfone. A primeira execução baixa cerca de 45 MB uma vez e coloca em cache. Os tempos das cues são limites de segmento Whisper, não alinhamento forçado quadro a quadro, e a página não grava legendas no vídeo.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'Escolher um arquivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'MP4, WebM, MOV local ou outro vídeo que o navegador possa decodificar—até cerca de 120 MiB e cerca de 2 horas após a decodificação. O arquivo precisa de uma faixa de áudio utilizável. Cliques longos usam janelas deslizantes (janela n de N; Parar mantém SRT parcial quando possível). Áudio puro pertence à ferramenta SRT de áudio relacionada.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'Idioma da fala',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'Auto deixa o Whisper detectar o idioma falado na faixa. Escolha um idioma quando souber, para faixas mais estáveis.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'Detecção automática',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'Inglês',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'Chinês',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'Espanhol',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'Japonês',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'Alemão',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'Francês',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'Português',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'Indonésio',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'Árabe',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'Russo',
  tool_make_srt_subtitles_from_a_video_file_convert: 'Criar SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: 'Parar',
  tool_make_srt_subtitles_from_a_video_file_download: 'Baixar SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: 'Amostra',
  tool_make_srt_subtitles_from_a_video_file_clear: 'Limpar',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'Reproduzir vídeo original',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'Limites honestos',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny roda nesta aba a partir de /vendor/whisper same-origin. O primeiro Criar SRT baixa cerca de 45 MB uma vez e reutiliza o cache. Cliques longos usam janelas (~2 minutos). Os tempos seguem segmentos Whisper—não alinhamento forçado quadro a quadro. Esta página aceita só vídeo e não grava legendas. Para memorandos de voz sem imagem, use a ferramenta SRT de áudio relacionada.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'Progresso das legendas',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'Progresso das legendas',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'Concluído. Próximo passo: edite as faixas se precisar, depois Baixar SRT.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'Não foi possível concluir o SRT',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    'Tente outro vídeo, um clipe mais curto ou Amostra. Os arquivos ficam no dispositivo.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'Baixando {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'Iniciando…',
  tool_make_srt_subtitles_from_a_video_file_model: 'Modelo',
  tool_make_srt_subtitles_from_a_video_file_decode: 'Decodificar',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'Transcrever',
  tool_make_srt_subtitles_from_a_video_file_write: 'Escrever SRT',
  tool_make_srt_subtitles_from_a_video_file_done: 'Pronto. Edite o SRT se precisar, depois Baixar SRT.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'Não foi possível criar o SRT. Tente Amostra, um vídeo falado mais claro ou um clipe mais curto sob cerca de 2 horas.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '{s}s decorridos',
  tool_make_srt_subtitles_from_a_video_file_preview: 'Prévia SRT',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} faixas · {chars} caracteres',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'Escolha um arquivo de vídeo local com fala na faixa de áudio.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'Ainda sem SRT. Solte um vídeo com diálogo e clique em Criar SRT. Amostra passa um MP4 falado curto pelo Whisper no dispositivo. Reproduza a prévia para cruzar imagem e faixas. Os arquivos ficam no dispositivo.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'Vídeo: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'Carregando modelo Whisper no dispositivo (a primeira execução pode baixar ~45 MB)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'Decodificando a faixa de áudio do vídeo nesta aba…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Transcrevendo com Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'Transcrevendo janela {n} de {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'Escrevendo faixas SRT com tempos…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'Parado. SRT parcial mantido quando já havia faixas.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'Escolha um arquivo de vídeo local, ou use Amostra.',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    'Tipo não suportado. Use um contêiner de vídeo comum que o navegador possa decodificar (por exemplo MP4 ou WebM) com faixa de áudio.',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'Use vídeo até cerca de 120 MiB e cerca de 2 horas após a decodificação. Cliques muito longos em celulares com pouca memória ainda podem falhar—corte ou comprima antes.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'O navegador não conseguiu decodificar uma faixa de áudio utilizável deste vídeo. Vídeo mudo, áudio ausente ou codec não suportado falham aqui.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio necessário para este caminho está indisponível neste navegador.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper não produziu texto de fala utilizável. Tente outro clipe ou configuração de idioma.',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'Não foi possível carregar o modelo Whisper no dispositivo deste site. Fique online na primeira descarga e tente de novo.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'Esta página aceita apenas arquivos de vídeo. Para WAV, MP3 ou outra fala só de áudio, use Criar legendas SRT a partir de um arquivo de áudio.',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'Como criar legendas SRT a partir de um arquivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'Escolha um vídeo local com fala, visualize o clipe, rode Whisper no dispositivo para faixas com tempos, edite o SRT e baixe.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'Escolha um arquivo de vídeo local (ou Amostra) e Detecção automática ou um idioma da fala.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    'Reproduza o vídeo original se quiser cruzar diálogo e imagem, depois clique em Criar SRT.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'Acompanhe o cartão de progresso: Modelo, Decodificar, Transcrever (janela n de N em arquivos longos), depois Escrever SRT. Parar cancela e mantém SRT parcial quando possível.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'Edite a prévia SRT se precisar, depois Baixar SRT.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'Por que usar Criar legendas SRT a partir de um arquivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'Foco em vídeo: prévia do clipe na página, depois .srt da faixa com Whisper no dispositivo—o material não é enviado aos nossos servidores para ASR.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'Separação clara da ferramenta SRT de áudio: esta página rejeita áudio puro e não tem microfone, para quem busca vídeo para srt não cair numa UI de memorando de voz.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'Custo da primeira execução honesto (~45 MB uma vez) e HUD com progresso de janelas deslizantes em material longo.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'Apenas .srt editável ao lado—não gravado no vídeo. Ferramentas relacionadas cobrem SRT só de áudio e vídeo de forma de onda.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'Regras SRT e limites do Whisper com vídeo',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny roda no navegador a partir de assets same-origin. O navegador precisa decodificar uma faixa de áudio utilizável do seu vídeo. Os tetos de tamanho e duração mantêm a aba utilizável.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'Somente contêineres de vídeo (por exemplo MP4, WebM, MOV). Arquivos só de áudio devem usar a página SRT de áudio relacionada.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'Cerca de 120 MiB e cerca de 2 horas após a decodificação, transcritos em janelas deslizantes. Arquivos mais longos ou pesados mostram um erro de limite claro.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'Os carimbos de tempo são limites de segmento Whisper—úteis para players, não alinhamento forçado quadro a quadro com cortes de imagem.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Seu vídeo fica no dispositivo para o Whisper. Esta página não grava legendas no arquivo e não baixa legendas de plataformas de vídeo.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'Experimente o clipe de vídeo de amostra',
  tool_make_srt_subtitles_from_a_video_file_example:
    'Amostra busca um MP4 falado curto, executa Criar SRT com Whisper no dispositivo e preenche a prévia SRT. A página não executa a amostra ao abrir para que a primeira descarga de modelo ~45 MB não atinja cada visitante.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'Quando isso ajuda',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'Você tem uma entrevista, talking-head ou gravação de tela em MP4 local e precisa de um .srt baixável para um player ou editor.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'Quer legendas em um arquivo de vídeo sem enviar o material a um site ASR na nuvem, e precisa pré-visualizar a imagem ao conferir as faixas.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'Já exportou um MP4/WebM da câmera ou do editor e precisa de um SRT inicial para revisar antes de publicar.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'Posso usar WAV ou MP3 aqui?',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'Não. Áudio puro é rejeitado para não misturar quem busca vídeo para srt numa UI de áudio. Abra Criar legendas SRT a partir de um arquivo de áudio para WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: 'É Whisper no dispositivo ou upload para a nuvem?',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'Criar SRT executa Whisper tiny no dispositivo a partir de arquivos vendor same-origin. Seu vídeo fica no dispositivo e não é enviado aos nossos servidores para reconhecimento.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: 'Por que o primeiro Criar SRT é lento ou grande?',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'A primeira execução baixa cerca de 45 MB de modelo Whisper tiny e WASM deste site para o cache do navegador. Depois reutiliza. Vídeos longos mostram Transcrever como janela n de N; Parar pode cancelar e manter um SRT parcial.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: 'Qual a diferença em relação a Criar legendas SRT a partir de um arquivo de áudio?',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'Aquela ferramenta relacionada é para memorandos de voz e outros arquivos com áudio em primeiro plano (e ditado opcional por microfone). Esta página é para arquivos de vídeo: prévia de vídeo, lista só de vídeo e redação vídeo para srt. O mesmo motor Whisper no dispositivo por baixo.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'Quão precisos são os carimbos de tempo do SRT?',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'Seguem o início e o fim dos segmentos Whisper na faixa—bons o bastante para a maioria dos players, não sincronização quadro a quadro com cada corte de imagem.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: 'Dá para gravar legendas no vídeo ou baixar do YouTube?',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'Não. Só baixa um .srt sidecar. Também não obtém legendas automáticas do YouTube ou de outras plataformas.',
};
export default pt;
