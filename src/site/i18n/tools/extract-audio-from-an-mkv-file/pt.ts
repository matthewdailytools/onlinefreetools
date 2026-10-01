import type { SiteLangDict } from '../../../types';

/**
 * Português (Brasil): extrair áudio de um arquivo MKV.
 * Honestidade D1: fallback MediaElement ~500 MiB / 4 h; MKV multi‑GB ou DDP/Atmos → ffmpeg no PC → MP4 AAC estéreo → página MP4.
 * Chaves alinhadas à master EN; reescrita nativa, sem calque do espanhol ou do inglês.
 */
const pt: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'Extrair áudio de um arquivo MKV',
  tool_extract_audio_from_an_mkv_file_desc:
    'Extraia áudio de um MKV local em WAV ou MP3 no navegador quando o arquivo couber no fallback ~500 MiB / 4 h. MKV multi‑gigabyte ou DDP/Atmos: converta primeiro para MP4 AAC no computador e use a ferramenta MP4.',
  tool_extract_audio_from_an_mkv_file_description:
    'Extraia a faixa de áudio de um MKV local no navegador e baixe WAV ou MP3. Passos: escolher MKV → Extrair → ouvir → baixar. Exemplo: Carregar amostra gera um substituto sintético curto se o MediaRecorder funcionar—prefira um .mkv real com cerca de 500 MiB. Esta página usa fallback MediaElement (~500 MiB / 4 h); arquivos maiores falham na hora com err_container. MKV multi‑GB ou Dolby Digital Plus / Atmos (E-AC-3) não são suportados aqui—no PC, use ffmpeg para MP4 AAC estéreo (vídeo pode ser copy), depois abra Extrair áudio de um arquivo MP4 para demux grande. Só local—não é download de URL do YouTube. Nunca enviado. Vários MKV? Use Extrair áudio de arquivos MKV em lote.',
  tool_extract_audio_from_an_mkv_file_article:
    'Gravações de tela e capturas costumam vir em MKV. Esta página aceita só .mkv, usa a rota compartilhada de extração em fallback e grava WAV ou MP3 sem envio. Não promete demux ISOBMFF nem streaming OPFS multi‑GB—isso é para MP4/MOV com AAC. Também não decodifica E-AC-3 / DTS no navegador. Para rip multi‑GB ou faixa Atmos, converta no dispositivo com ffmpeg para MP4 AAC e vá à landing MP4. Pastas mistas: hub de vídeo ou lote do hub.',
  tool_extract_audio_from_an_mkv_file_choose: 'Escolher um arquivo MKV',
  tool_extract_audio_from_an_mkv_file_hint:
    'Solte um .mkv local com cerca de 500 MiB / 4 h. MKV maior ou DDP/Atmos: no PC, ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, depois Extrair áudio de um arquivo MP4.',
  tool_extract_audio_from_an_mkv_file_convert: 'Extrair',
  tool_extract_audio_from_an_mkv_file_download: 'Baixar',
  tool_extract_audio_from_an_mkv_file_download_wav: 'Baixar WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'Baixar MP3',
  tool_extract_audio_from_an_mkv_file_sample: 'Carregar amostra',
  tool_extract_audio_from_an_mkv_file_clear: 'Limpar',
  tool_extract_audio_from_an_mkv_file_advanced: 'Formato de exportação',
  tool_extract_audio_from_an_mkv_file_format_label: 'Formato de saída',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16 bits)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'Taxa de bits MP3',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'WAV padrão serve para MKV curtos. Clipes longos podem ir para MP3 em streaming. O teto é o fallback (~500 MiB), não demux MP4. Sem URL.',
  tool_extract_audio_from_an_mkv_file_progress: 'Progresso da extração',
  tool_extract_audio_from_an_mkv_file_read: 'Ler',
  tool_extract_audio_from_an_mkv_file_decode: 'Decodificar',
  tool_extract_audio_from_an_mkv_file_extract: 'Extrair',
  tool_extract_audio_from_an_mkv_file_write: 'Gravar',
  tool_extract_audio_from_an_mkv_file_done: 'Pronto. Ouça o áudio e baixe WAV ou MP3.',
  tool_extract_audio_from_an_mkv_file_failed:
    'Falha na extração. Tente um MKV menor ou converta primeiro para MP4 AAC com ffmpeg.',
  tool_extract_audio_from_an_mkv_file_elapsed: '{s}s decorridos',
  tool_extract_audio_from_an_mkv_file_preview: 'Ouvir o áudio extraído',
  tool_extract_audio_from_an_mkv_file_result: '{seconds}s · {channels} can. · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: 'demo-mkv-curto',
  tool_extract_audio_from_an_mkv_file_empty: 'Escolha um MKV ou carregue a amostra primeiro.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'Nenhum arquivo ainda. Solte um .mkv local (~500 MiB) ou carregue a amostra. Multi‑GB / DDP: converta para MP4 AAC com ffmpeg antes. Não é YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'Solte exatamente um arquivo MKV.',
  tool_extract_audio_from_an_mkv_file_err_format: 'Arquivo não suportado. Nesta página use só .mkv.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'Este MKV excede limite de tamanho ou duração no fallback.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'Este MKV passa do teto fallback (~500 MiB / 4 h) ou não decodifica aqui. No computador: ffmpeg para MP4 AAC estéreo (copy no vídeo), depois Extrair áudio de um arquivo MP4—or use um MKV menor.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'O codec de áudio deste MKV não é suportado no navegador (muitas vezes E-AC-3 / DDP / Atmos). Converta para AAC em MP4 com ffmpeg e use a página de extração MP4.',
  tool_extract_audio_from_an_mkv_file_err_channels:
    'Esta faixa usa layout de canais que o extrator não trata. Faça downmix para AAC estéreo em MP4 primeiro.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'O navegador não decodificou áudio deste MKV.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'Não foi possível gravar o áudio. Tente Extrair de novo.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'Não foi possível gerar amostra MKV. Use seu próprio .mkv.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'Este navegador não tem Web Audio necessário para extrair.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'Nenhuma amostra de áudio útil foi capturada.',
  tool_extract_audio_from_an_mkv_file_stop: 'Parar',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'Parado. Nenhum arquivo parcial é mantido.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'Entrada longa/grande usou MP3 em streaming no fallback.',
  tool_extract_audio_from_an_mkv_file_how_title: 'Como extrair áudio de um arquivo MKV',
  tool_extract_audio_from_an_mkv_file_how_body:
    'MKV local pequeno: soltar, Extrair, baixar. Multi‑GB ou DDP/Atmos: converta para MP4 AAC com ffmpeg no dispositivo e use a ferramenta MP4.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'Escolha um .mkv local (~500 MiB) ou carregue amostra se o MediaRecorder funcionar. Se for multi‑GB ou DDP/Atmos, pare aqui e converta com ffmpeg.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'Abra Formato de exportação e escolha WAV ou MP3; ajuste a taxa se precisar.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'Clique Extrair e aguarde Ler → Decodificar → Extrair → Gravar (ou Parar).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'Ouça e depois Baixar WAV ou Baixar MP3.',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'Por que usar Extrair áudio de um arquivo MKV',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1:
    'Aceita só MKV para não misturar Matroska com landings MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2:
    'Limites de fallback honestos—sem marketing falso de demux 5 GiB para MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3:
    'Caminho claro para arquivos grandes ou DDP: ffmpeg no PC → MP4 AAC → página MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'Processamento no dispositivo; Parar cancela no meio.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'Só MKV e limites do fallback',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'Um MKV local por execução na rota fallback MediaElement. Não é YouTube para MP3. Não exporta vídeo mudo. MKV grande ou codec exótico exige MP4 AAC no dispositivo antes.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    'Fallback ~500 MiB / 4 h. Acima do teto → err_container. Demux grande só MP4/MOV hoje.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'Sem URL ou download do YouTube.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS costumam falhar com err_codec. Exemplo no PC: ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 depois Extrair áudio de um arquivo MP4.',
  tool_extract_audio_from_an_mkv_file_rules_item_4:
    'O MKV original nunca é sobrescrito. Vários MKV: ferramenta batch MKV.',
  tool_extract_audio_from_an_mkv_file_example_title: 'Testar uma extração MKV real',
  tool_extract_audio_from_an_mkv_file_example:
    'Carregar amostra cria um substituto sintético curto quando o MediaRecorder funciona e então Extrair roda. Prefira seu .mkv dentro do teto fallback. Rips multi‑GB: converta para MP4 AAC com ffmpeg e use a página MP4.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'Quando ajuda',
  tool_extract_audio_from_an_mkv_file_usecase_1:
    'Captura de tela MKV no navegador (~500 MiB) → MP3 compartilhável sem envio.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'Clip curto de entrevista em MKV: só a faixa de áudio em WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'Você sabe que é MKV enorme ou DDP—converta para MP4 AAC localmente e use a ferramenta MP4 em vez desta página.',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'Posso colar URL do YouTube?',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'Não. Só .mkv local.',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'Por que não 5 GiB como na página MP4?',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'Demux grande hoje é ISOBMFF (MP4/MOV). MKV usa fallback MediaElement ~500 MiB até existir demux Matroska.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'Meu MKV é multi‑GB ou Dolby Atmos / DDP—o que fazer?',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'Esta página vai recusar (err_container e/ou err_codec). No computador, converta para MP4 AAC estéreo, por exemplo: ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. Depois abra Extrair áudio de um arquivo MP4 para demux grande. Remux puro sem AAC ainda falha se a faixa continuar E-AC-3.',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'Isso deixa o MKV mudo (vídeo sem som)?',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'Não. Só extrai áudio para WAV/MP3.',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'Meu arquivo é enviado?',
  tool_extract_audio_from_an_mkv_file_faq_a5:
    'Não. Decodificação e gravação rodam no navegador. O passo ffmpeg (se precisar) também fica no seu computador.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'Tenho muitos MKV—qual página?',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'Pastas de MKV pequenos: Extrair áudio de arquivos MKV em lote. Enormes ou DDP: converta cada um para MP4 AAC, depois Extrair áudio de arquivos MP4 em lote ou a página MP4 única.',
  tool_extract_audio_from_an_mkv_file_faq_q7: 'Posso cortar depois de extrair?',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'Não aqui. Baixe e use Recorte um trecho de áudio e exporte.',
};
export default pt;
