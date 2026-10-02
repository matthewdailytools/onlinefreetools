import type { SiteLangDict } from '../../../types';

/**
 * Português: Extrair áudio de ficheiros WebM em lote.
 * Fila só .webm ; extração sequencial ; ZIP parcial com sucessos ;
 * limite de fallback ~500 MiB / 4 h por ficheiro ; máx. 30 ficheiros ; sem YouTube.
 */
const pt: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: 'Extrair áudio de ficheiros WebM em lote',
  tool_batch_extract_audio_from_webm_files_desc:
    'Extrair áudio de WebM locais um a um para um ZIP WAV/MP3. Fallback ~500 MiB cada—o ZIP parcial mantém os sucessos.',
  tool_batch_extract_audio_from_webm_files_description:
    'Enfileire WebM locais, extraia em sequência com o fallback do motor partilhado (~500 MiB / 4 h cada), ignore falhas com códigos claros, descarregue um ZIP. Passos: adicionar WebM → Extrair → Descarregar ZIP. Exemplo: Carregar amostra cria dois clips curtos quando MediaRecorder funciona. Não é YouTube. Para um ficheiro use Extrair áudio de um ficheiro WebM.',
  tool_batch_extract_audio_from_webm_files_article:
    'Pastas de capturas WebM precisam de pacotes ZIP só com voz. Esta página enfileira só .webm, extrai um a um, ignora ficheiros grandes demais com err_container e embala sucessos. Sem YouTube. Sem demux 5 GiB.',
  tool_batch_extract_audio_from_webm_files_choose: 'Escolher ficheiros WebM',
  tool_batch_extract_audio_from_webm_files_hint:
    'Até 30 ficheiros .webm locais. Fallback por ficheiro ~500 MiB / 4 h. Falhas são ignoradas; o ZIP mantém sucessos.',
  tool_batch_extract_audio_from_webm_files_list_label: 'Fila de ficheiros',
  tool_batch_extract_audio_from_webm_files_convert: 'Extrair',
  tool_batch_extract_audio_from_webm_files_stop: 'Parar',
  tool_batch_extract_audio_from_webm_files_download: 'Descarregar ZIP',
  tool_batch_extract_audio_from_webm_files_sample: 'Carregar amostra',
  tool_batch_extract_audio_from_webm_files_clear: 'Limpar',
  tool_batch_extract_audio_from_webm_files_advanced: 'Formato de exportação (opcional)',
  tool_batch_extract_audio_from_webm_files_format_label: 'Formato de saída',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV (16 bits)',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'Taxa de bits MP3',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    'WAV por defeito para clips curtos. Os limites seguem o caminho de fallback. Sem URL.',
  tool_batch_extract_audio_from_webm_files_progress: 'Progresso da extração em lote',
  tool_batch_extract_audio_from_webm_files_read: 'Ler',
  tool_batch_extract_audio_from_webm_files_decode: 'Descodificar',
  tool_batch_extract_audio_from_webm_files_extract: 'Extrair',
  tool_batch_extract_audio_from_webm_files_write: 'Escrever',
  tool_batch_extract_audio_from_webm_files_pack: 'Empacotar ZIP',
  tool_batch_extract_audio_from_webm_files_done: 'Pronto. Descarregue o ZIP dos ficheiros de áudio extraídos.',
  tool_batch_extract_audio_from_webm_files_failed:
    'A extração em lote falhou. Remova ficheiros danificados ou tente menos.',
  tool_batch_extract_audio_from_webm_files_elapsed: '{s}s decorridos',
  tool_batch_extract_audio_from_webm_files_preview: 'Resultado do lote',
  tool_batch_extract_audio_from_webm_files_result: '{n} ficheiros de áudio empacotados · ZIP {output} KiB',
  tool_batch_extract_audio_from_webm_files_partial:
    'OK {ok}, falhou {fail} · o ZIP ainda inclui sucessos ({output} KiB)',
  tool_batch_extract_audio_from_webm_files_sample_name: 'batch-webm-audio-demo',
  tool_batch_extract_audio_from_webm_files_empty: 'Adicione pelo menos um ficheiro WebM ou carregue a amostra.',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'Ainda sem ficheiros. Largue .webm locais. Não é YouTube.',
  tool_batch_extract_audio_from_webm_files_remove: 'Remover',
  tool_batch_extract_audio_from_webm_files_queue_count: '{n} ficheiro(s) na fila',
  tool_batch_extract_audio_from_webm_files_status_pending: 'À espera',
  tool_batch_extract_audio_from_webm_files_status_running: 'A extrair…',
  tool_batch_extract_audio_from_webm_files_status_ok: 'Concluído',
  tool_batch_extract_audio_from_webm_files_status_fail: 'Falhou',
  tool_batch_extract_audio_from_webm_files_status_stopped: 'Parado',
  tool_batch_extract_audio_from_webm_files_err_file: 'Adicione ficheiros WebM que o browser consiga descodificar.',
  tool_batch_extract_audio_from_webm_files_err_format:
    'Ficheiro não suportado. Use só .webm nesta página.',
  tool_batch_extract_audio_from_webm_files_err_limit:
    'Um ficheiro excedeu um limite de tamanho/duração no caminho de fallback.',
  tool_batch_extract_audio_from_webm_files_err_container:
    'Um ficheiro ultrapassa o limite de fallback ~500 MiB / 4 h—ou não é um WebM válido. Linha ignorada.',
  tool_batch_extract_audio_from_webm_files_err_codec:
    'Um ficheiro usa um codec de áudio não suportado. Linha ignorada.',
  tool_batch_extract_audio_from_webm_files_err_channels:
    'Um ficheiro usa um layout de canais não suportado. Linha ignorada.',
  tool_batch_extract_audio_from_webm_files_err_decode: 'O browser não conseguiu descodificar áudio de um ficheiro.',
  tool_batch_extract_audio_from_webm_files_err_encoder: 'Não foi possível escrever um ficheiro de áudio.',
  tool_batch_extract_audio_from_webm_files_err_zip: 'Não foi possível criar o ZIP.',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'O limite da fila é 30 ficheiros.',
  tool_batch_extract_audio_from_webm_files_err_sample: 'Não foi possível criar amostras. Largue os seus ficheiros.',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'Este browser não tem Web Audio.',
  tool_batch_extract_audio_from_webm_files_err_empty: 'Sem amostras de áudio utilizáveis.',
  tool_batch_extract_audio_from_webm_files_forced_mp3: 'Um ficheiro longo/grande usou MP3 em streaming.',
  tool_batch_extract_audio_from_webm_files_how_title: 'Como extrair áudio de ficheiros WebM em lote',
  tool_batch_extract_audio_from_webm_files_how_body:
    'Enfileire WebM locais, extraia um a um, descarregue o ZIP.',
  tool_batch_extract_audio_from_webm_files_how_item_1: 'Escolha vários .webm ou Carregar amostra.',
  tool_batch_extract_audio_from_webm_files_how_item_2: 'Opcionalmente defina MP3 em vez de WAV.',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    'Clique Extrair; use Parar para cancelar as linhas restantes.',
  tool_batch_extract_audio_from_webm_files_how_item_4: 'Descarregue o ZIP. Linhas com falha são ignoradas.',
  tool_batch_extract_audio_from_webm_files_why_choose_title:
    'Por que usar Extrair áudio de ficheiros WebM em lote',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    'A extração sequencial mantém a memória estável.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2:
    'Estado por linha; uma falha não apaga o ZIP.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3: 'Limites de fallback honestos para WebM.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    'Processamento no dispositivo; hub por perto para formatos mistos.',
  tool_batch_extract_audio_from_webm_files_rules_title: 'Extração WebM sequencial e honestidade do ZIP',
  tool_batch_extract_audio_from_webm_files_rules_body:
    'Cada WebM é classificado e depois extraído sozinho. ZIPs parciais mantêm sucessos.',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    'Até 30 ficheiros; cada um ~500 MiB / 4 h de fallback.',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'Sem URL nem descarga YouTube.',
  tool_batch_extract_audio_from_webm_files_rules_item_3:
    'Falhas ignoradas com err_container / err_codec quando aplicável.',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'Os ficheiros ficam no seu dispositivo.',
  tool_batch_extract_audio_from_webm_files_example_title: 'Experimentar um lote real',
  tool_batch_extract_audio_from_webm_files_example:
    'Carregar amostra cria dois clips curtos quando possível e depois empacota um ZIP.',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'Quando ajuda',
  tool_batch_extract_audio_from_webm_files_usecase_1:
    'Uma pasta de capturas WebM precisa das faixas de voz num só ZIP.',
  tool_batch_extract_audio_from_webm_files_usecase_2: 'Extração em massa sem enviar cada ficheiro.',
  tool_batch_extract_audio_from_webm_files_usecase_3:
    'Mistura com ficheiros demasiado grandes—o ZIP parcial ainda é útil.',
  tool_batch_extract_audio_from_webm_files_faq_q1: 'Playlist do YouTube?',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'Não. Só .webm locais.',
  tool_batch_extract_audio_from_webm_files_faq_q2: 'Só um ficheiro?',
  tool_batch_extract_audio_from_webm_files_faq_a2: 'Use a página de extração WebM unitária.',
  tool_batch_extract_audio_from_webm_files_faq_q3: 'Porquê 500 MiB e não 5 GiB?',
  tool_batch_extract_audio_from_webm_files_faq_a3:
    'Ainda não há demux WebM; aplicam-se os limites de fallback. MP4/MOV têm demux grande.',
  tool_batch_extract_audio_from_webm_files_faq_q4: 'Enviado?',
  tool_batch_extract_audio_from_webm_files_faq_a4: 'Não. Só no browser.',
  tool_batch_extract_audio_from_webm_files_faq_q5: 'Um ficheiro enorme falha?',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'Essa linha falha com err_container; as outras ainda se empacotam.',
  tool_batch_extract_audio_from_webm_files_faq_q6: 'Cortar depois?',
  tool_batch_extract_audio_from_webm_files_faq_a6:
    'Descarregue o ZIP e use a ferramenta de corte por ficheiro.',
};
export default pt;
