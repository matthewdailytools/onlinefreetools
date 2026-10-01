import type { SiteLangDict } from '../../../types';

/**
 * Português: legendas SRT a partir de áudio — Whisper tiny no dispositivo (q8),
 * mesmas chaves que en.ts; privacidade: ficam no dispositivo / sem enviar ao servidor.
 */
const pt: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'Criar legendas SRT a partir de um arquivo de áudio',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'Transforme uma gravação de fala local em cues .srt com tempos usando Whisper tiny na aba — os arquivos ficam no dispositivo, sem enviar ao servidor.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'Crie legendas SRT com tempos a partir de um arquivo de áudio ou faixa de vídeo local no navegador, com Whisper tiny no dispositivo — arquivos no dispositivo, sem enviar ao servidor. Passos: escolher arquivo de fala, idioma (ou auto), Criar SRT, editar cues, baixar .srt. Exemplo: Amostra passa um clipe falado curto pelo Whisper e mostra o SRT. Na primeira vez, cerca de 45 MB de modelo uma vez (depois cache). Não é API na nuvem; os tempos vêm dos segmentos Whisper.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'Quem busca «áudio para srt» ou «legendas a partir de áudio» quer um arquivo de legenda com tempos, baixável, a partir de uma gravação local. Esta página executa Whisper tiny no dispositivo com scripts /vendor/whisper da mesma origem: decodifica no aba, obtém timestamps de segmento, formata SRT padrão editável e baixa. Vídeo com faixa de áudio é aceito quando o navegador consegue decodificar. Ditado no microfone usa Web Speech só quando o navegador expõe — APIs de fala ausentes não bloqueiam Criar SRT. A primeira execução baixa cerca de 45 MB de modelo uma vez e guarda em cache. Os tempos das cues são limites de segmento Whisper, não alinhamento forçado quadro a quadro; a página não queima legendas no vídeo.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'Escolher um arquivo de fala',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'WAV, MP3, M4A local ou outro áudio que o navegador possa decodificar — até cerca de 120 MiB e cerca de 2 horas após a decodificação. Arquivos longos usam janelas deslizantes (janela n de N; Parar mantém SRT parcial quando possível). Vídeo com faixa de áudio OK se a decodificação funcionar; senão, erro claro.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'Idioma da fala',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'Auto deixa o Whisper detectar o idioma. Escolha o idioma quando souber, para cues mais estáveis. O ditado no microfone usa a mesma escolha quando Web Speech estiver disponível.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'Detectar automaticamente',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'Inglês',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'Chinês',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'Espanhol',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'Japonês',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'Alemão',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'Francês',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'Português',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'Indonésio',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'Árabe',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'Russo',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'Criar SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'Ditado no microfone',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'Parar',
  tool_make_srt_subtitles_from_an_audio_file_download: 'Baixar SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'Amostra',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'Limpar',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'Reproduzir áudio original',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'Limites honestos',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny roda nesta aba a partir dos arquivos /vendor/whisper da mesma origem. O primeiro Criar SRT baixa cerca de 45 MB uma vez e depois reutiliza o cache. Os tempos das cues seguem segmentos Whisper — não alinhamento forçado quadro a quadro. Ditado no microfone é Web Speech opcional e pode usar um serviço de fala do fabricante. Esta página não queima legendas no vídeo.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'Progresso das legendas',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'Progresso das legendas',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next:
    'Concluído. Próximo passo: edite as cues se precisar, depois Baixar SRT.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'Não foi possível concluir o SRT',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint:
    'Tente outro arquivo, um clipe mais curto ou Amostra. Os arquivos ficam no dispositivo.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'Baixando {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'Iniciando…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'Modelo',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'Decodificar',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'Transcrever',
  tool_make_srt_subtitles_from_an_audio_file_write: 'Escrever SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: 'Pronto. Edite o SRT se precisar, depois Baixar SRT.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'Não foi possível montar o SRT. Tente Amostra, uma gravação mais clara ou um clipe mais curto abaixo de cerca de 2 horas.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '{s}s decorridos',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'Prévia SRT',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'Provisório (microfone)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} cues · {chars} caracteres',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty:
    'Escolha um arquivo de fala local ou use Ditado no microfone quando disponível.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'Ainda sem SRT. Solte um arquivo de fala e clique Criar SRT. Amostra passa um clipe falado curto pelo Whisper no dispositivo. Os arquivos ficam no dispositivo.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'Mídia: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'Ditado no microfone indisponível neste navegador (sem API Web Speech). Criar SRT com Whisper continua funcionando para arquivos locais.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'O Whisper devolveu pouco ou nenhum texto de fala. Tente uma gravação mais clara ou escolha o idioma falado.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic:
    'Ouvindo o microfone… fale com clareza e depois Parar. Os tempos das cues usam o tempo decorrido da sessão.',
  tool_make_srt_subtitles_from_an_audio_file_status_model:
    'Carregando o modelo Whisper no dispositivo (a primeira execução pode baixar ~45 MB)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'Decodificando áudio nesta aba…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Transcrevendo com Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'A transcrever a janela {n} de {total}…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'Parado. SRT parcial mantido quando já havia cues.',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'Escrevendo cues SRT com tempos…',
  tool_make_srt_subtitles_from_an_audio_file_err_file:
    'Escolha um arquivo de áudio ou vídeo local, ou use Amostra.',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    'Tipo de mídia não suportado. Use áudio comum ou vídeo com faixa de áudio que o navegador possa decodificar.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit:
    'Use mídia de até cerca de 120 MiB e cerca de 2 horas após a decodificação. Em telemóveis com pouca memória, clips muito longos podem falhar—corte ou comprima antes.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'O navegador não conseguiu decodificar este arquivo como áudio. Vídeo sem faixa de áudio utilizável, ou codec não suportado, falha aqui.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported:
    'As APIs Web Audio ou de fala necessárias neste caminho estão indisponíveis neste navegador.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'Permissão de microfone negada. Autorize o acesso para Ditado no microfone, ou use Criar SRT em um arquivo.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt:
    'O Whisper não produziu texto de fala utilizável. Tente outro clipe ou outra configuração de idioma.',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'Não foi possível carregar o modelo Whisper no dispositivo a partir deste site. Fique online no primeiro download e tente de novo.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'Como criar legendas SRT a partir de um arquivo de áudio',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'Escolha um arquivo de fala local, rode o Whisper no dispositivo para obter cues com tempos, edite a prévia e baixe o .srt.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1:
    'Escolha um arquivo de fala local (ou Amostra) e selecione Detectar automaticamente ou um idioma da fala.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2:
    'Clique em Criar SRT. Acompanhe o cartão de progresso: Modelo, Decodificar, Transcrever e depois Escrever SRT.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3:
    'Opcional: clique em Ditado no microfone se o navegador tiver Web Speech, fale e depois Parar.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4:
    'Edite a prévia SRT se precisar e depois Baixar SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title:
    'Por que usar Criar legendas SRT a partir de um arquivo de áudio',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'Whisper tiny no dispositivo a partir dos arquivos vendor da mesma origem — sua gravação não é enviada aos nossos servidores para ASR (sem enviar ao servidor).',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Custo da primeira execução declarado: cerca de 45 MB de modelo uma vez, com cartão de progresso Modelo / Decodificar / Transcrever / Escrever SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'Prévia .srt padrão editável antes do download — não só TXT simples e não queimada no vídeo.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'Ferramentas próximas cobrem transcrição em texto puro e vídeo em forma de onda, sem forçar um editor hub.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'Regras SRT e limites do Whisper no dispositivo',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'Esta página executa Whisper tiny no navegador a partir de assets da mesma origem. Os tempos das cues vêm dos segmentos do modelo. Limites de tamanho e duração mantêm a aba responsiva.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'O caminho principal precisa de decodificação Web Audio mais a pilha Whisper em /vendor/whisper. Ditado no microfone precisa de Web Speech e é opcional.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'Cerca de 120 MiB de tamanho e cerca de 2 horas após a decodificação, em janelas deslizantes. Arquivos maiores ou mais longos mostram um erro de limite claro; telemóveis com pouca memória podem precisar de um clip mais curto.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'Os timestamps são limites de segmento Whisper — úteis para players, não alinhamento forçado quadro a quadro.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Seu arquivo fica no dispositivo para o Whisper. O ditado opcional no microfone ainda pode usar um serviço de fala do fabricante — confira as configurações de privacidade do navegador.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'Experimente o clipe de fala de amostra',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'Amostra busca um WAV falado curto, executa Criar SRT pelo Whisper no dispositivo e preenche a prévia SRT. A página não roda a amostra ao abrir, para não impor o primeiro download de ~45 MB a cada visitante.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'Quando isso ajuda',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'Você tem uma nota de voz ou entrevista local em WAV/MP3 e precisa de um .srt baixável para um player ou editor.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'Você tem um vídeo curto com faixa de áudio e quer legendas com tempos sem enviar o arquivo a um site de ASR na nuvem.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'Você precisa de um SRT inicial do Whisper no dispositivo para editar antes de publicar, ou cai no Ditado no microfone quando não há arquivo.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: 'É Whisper local ou upload para a nuvem?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'Criar SRT executa Whisper tiny no dispositivo a partir dos arquivos vendor da mesma origem. Seu áudio ou vídeo fica no dispositivo, sem enviar ao servidor nosso para reconhecimento. Ditado no microfone (opcional) usa a API Web Speech do navegador, que pode envolver um serviço de fala do fabricante.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: 'Por que o primeiro Criar SRT é lento ou grande?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'A primeira execução baixa cerca de 45 MB de modelo Whisper tiny e assets WASM deste site para o cache do navegador. Execuções seguintes reutilizam esse cache. O progresso aparece na etapa Modelo.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'Quão precisos são os tempos do SRT?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'Seguem o início e o fim dos segmentos Whisper — suficientes para a maioria dos players e editores, não alinhamento forçado quadro a quadro de um pipeline de estúdio no desktop.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: 'Meu áudio é enviado a um servidor?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'Não no caminho de arquivo Whisper: decodificação e transcrição na aba; arquivos no dispositivo, sem enviar ao servidor nosso. Fique online só para buscar os scripts do modelo da mesma origem na primeira vez.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: 'Diferença de Transcrever um arquivo de áudio para texto?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'Aquela ferramenta relacionada foca no texto de transcrição puro. Esta página formata cues SRT numeradas com início e fim para players e editores que esperam .srt.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: 'Dá para queimar legendas em um arquivo de vídeo?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'Não. Só baixa um .srt ao lado. Para um vídeo em forma de onda a partir do áudio, veja a ferramenta relacionada de vídeo de forma de onda — sem captions queimadas.',
};
export default pt;
