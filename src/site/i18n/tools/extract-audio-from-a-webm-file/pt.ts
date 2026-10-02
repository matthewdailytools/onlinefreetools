import type { SiteLangDict } from '../../../types';

/**
 * Português: Extrair áudio de um ficheiro WebM.
 * Apenas .webm ; fallback MediaElement (~500 MiB / 4 h)—sem demux 5 GiB.
 * Processamento local ; saída WAV ou MP3 ; sem URL YouTube.
 */
const pt: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'Extrair áudio de um ficheiro WebM',
  tool_extract_audio_from_a_webm_file_desc:
    'Extrair áudio Opus/Vorbis de um WebM local para WAV ou MP3 no dispositivo. Fallback do browser ~500 MiB / 4 h—sem demux 5 GiB.',
  tool_extract_audio_from_a_webm_file_description:
    'Extrair a faixa de áudio de um WebM local no browser e descarregar WAV ou MP3. Passos: escolher WebM → Extrair → pré-ouvir → descarregar. Exemplo: Carregar amostra cria um WebM sintético curto quando MediaRecorder está disponível. Esta página WebM usa o fallback MediaElement partilhado (~500 MiB / 4 h)—ficheiros grandes falham depressa com err_container. Demux grande de MP4/MOV está nessas páginas de formato ou no hub de vídeo. Só local—não descarrega YouTube nem URL. Nunca enviado. Muitos WebM? Use Extrair áudio de ficheiros WebM em lote.',
  tool_extract_audio_from_a_webm_file_article:
    'Gravações de ecrã e capturas do browser costumam sair em WebM com Opus. Esta página aceita só .webm, segue o caminho de fallback da tabela de capacidades e escreve WAV ou MP3 sem upload. Não reivindica demux ISOBMFF nem streaming OPFS multi-gigabyte—isso é para MP4/MOV. Não obtém URLs YouTube. Pastas mistas pertencem ao hub ou ao lote do hub.',
  tool_extract_audio_from_a_webm_file_choose: 'Escolher um ficheiro WebM',
  tool_extract_audio_from_a_webm_file_hint:
    'Largue um .webm local. Limite de fallback ~500 MiB / 4 h. WebMs maiores falham com mensagem de contentor clara—remuxe para MP4 no caminho de demux grande, ou reduza o ficheiro.',
  tool_extract_audio_from_a_webm_file_convert: 'Extrair',
  tool_extract_audio_from_a_webm_file_download: 'Descarregar',
  tool_extract_audio_from_a_webm_file_download_wav: 'Descarregar WAV',
  tool_extract_audio_from_a_webm_file_download_mp3: 'Descarregar MP3',
  tool_extract_audio_from_a_webm_file_sample: 'Carregar amostra',
  tool_extract_audio_from_a_webm_file_clear: 'Limpar',
  tool_extract_audio_from_a_webm_file_advanced: 'Formato de exportação',
  tool_extract_audio_from_a_webm_file_format_label: 'Formato de saída',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV (16 bits)',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'Taxa de bits MP3',
  tool_extract_audio_from_a_webm_file_settings_hint:
    'WAV por defeito para WebMs curtos. Clipes maiores podem transmitir MP3. O limite é o fallback (~500 MiB), não demux MP4. Sem URL.',
  tool_extract_audio_from_a_webm_file_progress: 'Progresso da extração',
  tool_extract_audio_from_a_webm_file_read: 'Ler',
  tool_extract_audio_from_a_webm_file_decode: 'Descodificar',
  tool_extract_audio_from_a_webm_file_extract: 'Extrair',
  tool_extract_audio_from_a_webm_file_write: 'Escrever',
  tool_extract_audio_from_a_webm_file_done: 'Pronto. Pré-ouça o áudio e descarregue WAV ou MP3.',
  tool_extract_audio_from_a_webm_file_failed:
    'A extração falhou. Experimente um WebM mais pequeno que o browser consiga descodificar.',
  tool_extract_audio_from_a_webm_file_elapsed: '{s}s decorridos',
  tool_extract_audio_from_a_webm_file_preview: 'Ouvir o áudio extraído',
  tool_extract_audio_from_a_webm_file_result: '{seconds}s · {channels} can. · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_a_webm_file_sample_name: 'demo-webm-audio-curto',
  tool_extract_audio_from_a_webm_file_empty: 'Escolha primeiro um ficheiro WebM ou carregue a amostra.',
  tool_extract_audio_from_a_webm_file_empty_state:
    'Ainda sem ficheiro. Largue um .webm local (~500 MiB) ou Carregar amostra. Não é YouTube.',
  tool_extract_audio_from_a_webm_file_err_file: 'Largue exatamente um ficheiro WebM.',
  tool_extract_audio_from_a_webm_file_err_format:
    'Ficheiro não suportado. Use só .webm (video/webm) nesta página.',
  tool_extract_audio_from_a_webm_file_err_limit:
    'Este WebM excede um limite de duração ou tamanho no caminho de fallback.',
  tool_extract_audio_from_a_webm_file_err_container:
    'Este WebM ultrapassa o limite de fallback (~500 MiB / 4 h) ou não é descodificável aqui. Remuxe para MP4 no demux grande, ou use um WebM mais pequeno.',
  tool_extract_audio_from_a_webm_file_err_codec:
    'O codec de áudio deste WebM não é suportado no caminho de fallback do browser.',
  tool_extract_audio_from_a_webm_file_err_channels:
    'Esta faixa usa um layout de canais que o extrator não consegue tratar.',
  tool_extract_audio_from_a_webm_file_err_decode: 'O browser não conseguiu descodificar áudio deste WebM.',
  tool_extract_audio_from_a_webm_file_err_encoder: 'Não foi possível escrever o ficheiro de áudio. Tente Extrair de novo.',
  tool_extract_audio_from_a_webm_file_err_sample:
    'Não foi possível criar um WebM de amostra. Largue o seu próprio .webm.',
  tool_extract_audio_from_a_webm_file_err_unsupported:
    'Este browser não tem Web Audio necessário para a extração.',
  tool_extract_audio_from_a_webm_file_err_empty: 'Não foram capturadas amostras de áudio utilizáveis.',
  tool_extract_audio_from_a_webm_file_stop: 'Parar',
  tool_extract_audio_from_a_webm_file_status_stopped: 'Parado. Nenhum ficheiro de áudio parcial é guardado.',
  tool_extract_audio_from_a_webm_file_forced_mp3:
    'Entrada longa/grande usou MP3 em stream no caminho de fallback.',
  tool_extract_audio_from_a_webm_file_how_title: 'Como extrair áudio de um ficheiro WebM',
  tool_extract_audio_from_a_webm_file_how_body:
    'Largue um WebM local, escolha WAV ou MP3, Extrair, pré-ouça, descarregue—sem upload.',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'Escolha um .webm local (~500 MiB), ou Carregar amostra quando MediaRecorder funcionar.',
  tool_extract_audio_from_a_webm_file_how_item_2:
    'Abra Formato de exportação e escolha WAV ou MP3; defina a taxa de bits se precisar.',
  tool_extract_audio_from_a_webm_file_how_item_3:
    'Clique Extrair e aguarde Ler → Descodificar → Extrair → Escrever (ou Parar).',
  tool_extract_audio_from_a_webm_file_how_item_4: 'Pré-ouça, depois Descarregar WAV ou Descarregar MP3.',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'Por que usar Extrair áudio de um ficheiro WebM',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'Aceita só WebM para capturas de ecrã não se misturarem com landings MP4.',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'Limites de fallback honestos—sem marketing falso de demux 5 GiB para WebM.',
  tool_extract_audio_from_a_webm_file_why_choose_item_3:
    'Processamento no seu dispositivo; Parar cancela a meio.',
  tool_extract_audio_from_a_webm_file_why_choose_item_4:
    'Hub e páginas de ficheiros grandes MP4/MOV por perto quando precisa de demux.',
  tool_extract_audio_from_a_webm_file_rules_title: 'Só WebM e limites de fallback',
  tool_extract_audio_from_a_webm_file_rules_body:
    'Um WebM local por execução no caminho MediaElement de fallback. Não é YouTube para MP3. Não exporta vídeo mudo.',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    '~500 MiB / 4 h de fallback. Acima → err_container. Demux grande hoje só MP4/MOV.',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'Sem URL nem descarga YouTube.',
  tool_extract_audio_from_a_webm_file_rules_item_3: 'O sucesso depende do suporte WebM/Opus do browser.',
  tool_extract_audio_from_a_webm_file_rules_item_4:
    'O WebM original nunca é sobrescrito. Vários WebM: ferramenta de lote WebM.',
  tool_extract_audio_from_a_webm_file_example_title: 'Experimentar uma extração WebM real',
  tool_extract_audio_from_a_webm_file_example:
    'Carregar amostra cria um WebM sintético curto quando MediaRecorder está disponível, depois Extrair corre. Prefira o seu .webm se a amostra falhar.',
  tool_extract_audio_from_a_webm_file_usecases_title: 'Quando ajuda',
  tool_extract_audio_from_a_webm_file_usecase_1:
    'Captura de ecrã WebM do browser → MP3 partilhável sem upload.',
  tool_extract_audio_from_a_webm_file_usecase_2:
    'Um clip de entrevista WebM precisa só da faixa Opus em WAV.',
  tool_extract_audio_from_a_webm_file_usecase_3:
    'Já sabe que o ficheiro é WebM e quer uma landing por formato—não o hub misto.',
  tool_extract_audio_from_a_webm_file_faq_q1: 'Posso colar um URL do YouTube?',
  tool_extract_audio_from_a_webm_file_faq_a1: 'Não. Só .webm local.',
  tool_extract_audio_from_a_webm_file_faq_q2: 'Porquê não 5 GiB como na página MP4?',
  tool_extract_audio_from_a_webm_file_faq_a2:
    'O demux grande hoje é ISOBMFF (MP4/MOV). WebM usa fallback MediaElement ~500 MiB até haver demux WebM.',
  tool_extract_audio_from_a_webm_file_faq_q3: 'Isto silencia um WebM (vídeo mudo)?',
  tool_extract_audio_from_a_webm_file_faq_a3: 'Não. Extrai apenas áudio para WAV/MP3.',
  tool_extract_audio_from_a_webm_file_faq_q4: 'O meu ficheiro é enviado?',
  tool_extract_audio_from_a_webm_file_faq_a4: 'Não. Descodificação e escrita no seu browser.',
  tool_extract_audio_from_a_webm_file_faq_q5: 'Tenho muitos WebM—qual página?',
  tool_extract_audio_from_a_webm_file_faq_a5:
    'Use Extrair áudio de ficheiros WebM em lote para um ZIP dos sucessos.',
  tool_extract_audio_from_a_webm_file_faq_q6: 'Posso cortar depois da extração?',
  tool_extract_audio_from_a_webm_file_faq_a6:
    'Não aqui. Descarregue e use Cortar um clip de áudio e exportar.',
};
export default pt;
