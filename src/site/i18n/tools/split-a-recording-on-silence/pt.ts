/**
 * i18n tool shard (split-a-recording-on-silence / pt).
 * Job: split a recording on silence into a ZIP of clips (dividir nos silêncios).
 */
import type { SiteLangDict } from '../../../types';

/** Portuguese copy: divida uma gravação nos silêncios e baixe um ZIP de clips. */
const pt: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'Ajustes avançados (opcional)',
  tool_split_a_recording_on_silence_article:
    'Nesta aba você divide áudio por silêncios: abra um arquivo do disco, clique Dividir nos silêncios e depois Baixar ZIP. Pausas longas viram corte no meio do vão; cada clip continua um arquivo. A gravação fica no dispositivo e não é enviada a um servidor.',
  tool_split_a_recording_on_silence_bitrate: 'Bitrate MP3',
  tool_split_a_recording_on_silence_bitrate_hint: '128 kbps de partida. Só entra se o ZIP for MP3.',
  tool_split_a_recording_on_silence_choose_file: 'Escolher um arquivo de áudio',
  tool_split_a_recording_on_silence_clear: 'Limpar',
  tool_split_a_recording_on_silence_clip_download: 'Salvar este clip',
  tool_split_a_recording_on_silence_clip_play: 'Ouvir o clip',
  tool_split_a_recording_on_silence_clip_row_tpl: 'Clip {n} · {dur}s ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'Clips prontos para o ZIP',
  tool_split_a_recording_on_silence_desc:
    'Separe a gravação nas pausas e baixe clips em ZIP — fica no dispositivo, sem enviar ao servidor.',
  tool_split_a_recording_on_silence_description:
    'Divida uma gravação nos silêncios no próprio aparelho: pausas longas viram corte e o ZIP junta os clips; o arquivo não vai para o servidor. Quem procura dividir áudio por silêncios, separar gravação nas pausas, cortar faixas no silêncio ou baixar clips em ZIP está neste mesmo trabalho de vários arquivos. Passos: abra o áudio, clique Dividir nos silêncios (padrão −40 dB / 1.0 s / 0.3 s de clip mínimo) e Baixar ZIP. Exemplo: amostra de 5.00 s com dois vãos de 1.20 s vira três clips 1.40 / 2.00 / 1.60 s. Não é tirar silêncio de um arquivo só, nem cortar em duração igual, nem mutar vídeo.',
  tool_split_a_recording_on_silence_download_zip: 'Baixar ZIP',
  tool_split_a_recording_on_silence_drop_hint: 'Ou solte um WAV, MP3, M4A ou OGG aqui. O processamento fica nesta aba.',
  tool_split_a_recording_on_silence_empty: 'Escolha primeiro um arquivo de áudio.',
  tool_split_a_recording_on_silence_err_caps:
    'Este arquivo passa do teto de tamanho ou duração deste dispositivo (cerca de 40 MB / 20 min no desktop, 20 MB / 8 min em tela estreita). Encurte em outro lugar ou use um arquivo menor.',
  tool_split_a_recording_on_silence_err_decode:
    'Este navegador não conseguiu decodificar o arquivo. Tente WAV ou MP3, ou um clip sem DRM.',
  tool_split_a_recording_on_silence_err_empty: 'Nada para processar. Carregue um arquivo ou o exemplo primeiro.',
  tool_split_a_recording_on_silence_err_lame: 'O encoder MP3 não carregou. Fique nesta aba e tente Baixar ZIP de novo.',
  tool_split_a_recording_on_silence_err_no_clips:
    'Nenhum clip chega ao mínimo. Diminua o clip mínimo ou aumente o silêncio mínimo para que um suspiro não vire corte.',
  tool_split_a_recording_on_silence_err_too_many:
    'Mais de 50 clips. Suba o silêncio mínimo ou deixe o limiar mais negativo para fundir pausas vizinhas e clique Dividir nos silêncios outra vez. A página recusa; não trunca.',
  tool_split_a_recording_on_silence_err_video:
    'Vídeo não entra como entrada principal. Aqui se parte um arquivo de som nas pausas; não se muta vídeo nem se jump-cut o footage.',
  tool_split_a_recording_on_silence_err_zip: 'A biblioteca ZIP não carregou. Fique nesta aba e tente Baixar ZIP de novo.',
  tool_split_a_recording_on_silence_example:
    'Carregar exemplo monta um tom de 5.00 s com dois vãos mudos de 1.20 s (0.80 + 1.20 + 0.80 + 1.20 + 1.00). Dividir nos silêncios em −40 dB / 1.0 s / 0.3 s de clip mínimo corta em 1.40 s e 3.40 s, logo três clips 1.40 / 2.00 / 1.60 s. Baixar ZIP grava WAV com nome sample-01.wav, salvo se você escolher MP3 em Ajustes avançados.',
  tool_split_a_recording_on_silence_example_title: 'Exemplo numérico',
  tool_split_a_recording_on_silence_faq_a1:
    'Não. Decodificar, detectar, cortar e montar o ZIP acontece nesta aba. Os scripts vêm deste site. O arquivo não é enviado aos nossos servidores.',
  tool_split_a_recording_on_silence_faq_a2:
    'É esta página. Dividir áudio por silêncios, separar gravação nas pausas, cortar faixas no silêncio ou baixar clips em ZIP significa: cortes em pausas longas e muitos arquivos num ZIP.',
  tool_split_a_recording_on_silence_faq_a3:
    'Outro trabalho. Remover silêncio de uma gravação tira o ar morto e costura um arquivo só, mais curto. Aqui as pausas são cortes e saem muitos clips. Se não quiser ZIP, use a ferramenta de um arquivo.',
  tool_split_a_recording_on_silence_faq_a4:
    'Não. Cortar em duração igual (a cada N segundos) é outra tarefa. Álbum com cue sheet também fica de fora. Só corta onde o vão mudo dura o bastante.',
  tool_split_a_recording_on_silence_faq_a5:
    'Comece por Fala (−40 dB / 1.0 s / 0.3 s de clip mínimo). Aula: Aula (−40 dB / 2.0 s). Vãos de álbum: Álbum (−45 dB / 1.5 s / 1.0 s de clip mínimo). Se suspiros virarem clips, suba o silêncio mínimo.',
  tool_split_a_recording_on_silence_faq_a6:
    'Dentro do ZIP: {stem}-01.wav (ou .mp3). Dá para baixar um clip da lista. Teto de 50 clips; acima disso o corte é recusado.',
  tool_split_a_recording_on_silence_faq_a7:
    'Não. Sem denoising, sem tirar ãh/éh, sem mutar vídeo, sem cue/APE, sem ripar YouTube. Use um arquivo de som que você já tem direito de usar.',
  tool_split_a_recording_on_silence_faq_a8:
    'Desktop: cerca de 40 MB ou 20 minutos. Tela estreita: cerca de 20 MB ou 8 minutos. Acima do teto recusa antes de decodificar. Música com grande dinâmica pode parecer silêncio — suba o vão mínimo ou use outra ferramenta.',
  tool_split_a_recording_on_silence_faq_q1: 'A gravação é enviada a algum servidor?',
  tool_split_a_recording_on_silence_faq_q2: 'Procurei dividir áudio por silêncios ou baixar clips em ZIP. É outra ferramenta?',
  tool_split_a_recording_on_silence_faq_q3: 'Eu queria um arquivo só, mais curto, sem ar morto. Isto remove silêncio?',
  tool_split_a_recording_on_silence_faq_q4: 'Divide em partes iguais ou segue uma cue sheet?',
  tool_split_a_recording_on_silence_faq_q5: 'Qual limiar usar? Corta também os suspiros?',
  tool_split_a_recording_on_silence_faq_q6: 'Como os arquivos se chamam e quantos clips cabem?',
  tool_split_a_recording_on_silence_faq_q7: 'Dá para denoising, cortar vídeo, ler cue ou ripar YouTube?',
  tool_split_a_recording_on_silence_faq_q8: 'Qual o tamanho máximo? E música bem baixa?',
  tool_split_a_recording_on_silence_format: 'Formato dos arquivos no ZIP',
  tool_split_a_recording_on_silence_format_hint: 'WAV é PCM sem perda. O MP3 só carrega o encoder quando você clica Baixar ZIP.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'Ache vãos quietos o bastante, corte no meio de cada um e baixe um ZIP de clips; o arquivo fica no dispositivo e não vai ao servidor.',
  tool_split_a_recording_on_silence_how_item_1: 'Abra uma gravação (ou clique Carregar exemplo).',
  tool_split_a_recording_on_silence_how_item_2: 'Deixe o padrão, ou abra Ajustes avançados (opcional) para limiar e silêncio mínimo.',
  tool_split_a_recording_on_silence_how_item_3: 'Clique Dividir nos silêncios.',
  tool_split_a_recording_on_silence_how_item_4: 'Clique Baixar ZIP.',
  tool_split_a_recording_on_silence_how_title: 'Como fazer',
  tool_split_a_recording_on_silence_hud_decode: 'Decodificando o arquivo nesta aba…',
  tool_split_a_recording_on_silence_hud_decoded: 'Decodificado. Marcas vermelhas são vãos. Clique Dividir nos silêncios se os ajustes estiverem bons.',
  tool_split_a_recording_on_silence_hud_detect: 'Medindo janelas quietas…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}s decorridos',
  tool_split_a_recording_on_silence_hud_encode: 'Codificando clips MP3…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'Ajuste o arquivo ou os valores e clique Dividir nos silêncios de novo.',
  tool_split_a_recording_on_silence_hud_fail_title: 'Dividir nos silêncios parou',
  tool_split_a_recording_on_silence_hud_next: 'Pronto. Próximo: Baixar ZIP.',
  tool_split_a_recording_on_silence_hud_next_zip: 'Pronto. O download do ZIP deve começar.',
  tool_split_a_recording_on_silence_hud_pack: 'Empacotando clips no ZIP…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'Cortando no meio do silêncio…',
  tool_split_a_recording_on_silence_hud_step_decode: 'Decodificar',
  tool_split_a_recording_on_silence_hud_step_detect: 'Detectar',
  tool_split_a_recording_on_silence_hud_step_pack: 'Empacotar',
  tool_split_a_recording_on_silence_hud_step_split: 'Dividir',
  tool_split_a_recording_on_silence_hud_title: 'Progresso de Dividir nos silêncios',
  tool_split_a_recording_on_silence_hud_working: 'Começando…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'Clip mínimo (segundos)',
  tool_split_a_recording_on_silence_min_clip_hint: 'Padrão 0.3 s. Fatias menores depois de um corte são descartadas.',
  tool_split_a_recording_on_silence_min_silence: 'Silêncio mínimo (segundos)',
  tool_split_a_recording_on_silence_min_silence_hint: 'Padrão 1.0 s para um suspiro não virar ponto de corte.',
  tool_split_a_recording_on_silence_pause: 'Pausa',
  tool_split_a_recording_on_silence_play: 'Reproduzir',
  tool_split_a_recording_on_silence_preset_album: 'Álbum',
  tool_split_a_recording_on_silence_preset_hint: 'Fala é o padrão. Aula espera pausas de capítulo mais longas. Álbum espera vãos entre faixas.',
  tool_split_a_recording_on_silence_preset_lecture: 'Aula',
  tool_split_a_recording_on_silence_preset_speech: 'Fala',
  tool_split_a_recording_on_silence_preview_hint: 'Faixas vermelhas são vãos longos o bastante para cortar. Reproduzir pré-ouve o arquivo atual.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}s · nenhuma pausa longa o bastante, então o ZIP teria só este arquivo. Baixe o silêncio mínimo ou aproxime o limiar de 0. Baixar ZIP está pronto.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}s · {gaps} vão(s) → {count} clip(s): {list}. Baixar ZIP pronto.',
  tool_split_a_recording_on_silence_rules_body:
    'A cada ~50 ms a página mede RMS e passa para dB: levelDb = 20 × log10(rms). Um trecho abaixo do limiar que dure pelo menos o silêncio mínimo é cortado no meio. Clips menores que o mínimo caem. WAV é PCM de 16 bits. MP3 é CBR no bitrate escolhido. O ZIP nasce nesta aba.',
  tool_split_a_recording_on_silence_rules_item_1:
    'Fala: −40 dB, 1.0 s de silêncio mínimo, 0.3 s de clip mínimo. Aula: −40 dB / 2.0 s / 0.5 s. Vãos de álbum: −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'Teto desktop: cerca de 40 MB ou 20 minutos; tela estreita: cerca de 20 MB ou 8 minutos. Acima do teto recusa, não trunca. Mais de 50 clips também recusa.',
  tool_split_a_recording_on_silence_rules_item_3:
    'Os arquivos ficam no dispositivo; não são enviados a um servidor. JSZip e o encoder MP3 carregam deste site só depois de Baixar ZIP.',
  tool_split_a_recording_on_silence_rules_item_4:
    'A decodificação depende do navegador. DRM, alguns codecs e contêineres de vídeo falham com erro explícito.',
  tool_split_a_recording_on_silence_rules_item_5:
    'Exporta muitos arquivos num ZIP. Não costura um arquivo só mais curto, não corta por duração fixa, não segue cue, não faz denoising, não muta vídeo e não busca YouTube.',
  tool_split_a_recording_on_silence_rules_title: 'Regras com as quais contar',
  tool_split_a_recording_on_silence_sample: 'Carregar exemplo',
  tool_split_a_recording_on_silence_split: 'Dividir nos silêncios',
  tool_split_a_recording_on_silence_status_done: 'Pronto.',
  tool_split_a_recording_on_silence_threshold: 'Limiar de silêncio (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'Padrão −40 dB. Mais perto de 0 trata mais do arquivo como silêncio.',
  tool_split_a_recording_on_silence_title: 'Divida uma gravação nos silêncios',
  tool_split_a_recording_on_silence_usecase_1:
    'Aula com pausas de capítulo: cada bloco vira arquivo no ZIP, sem picar em duração igual.',
  tool_split_a_recording_on_silence_usecase_2:
    'Entrevista: respostas saem em clips separados para rotular depois.',
  tool_split_a_recording_on_silence_usecase_3:
    'Mixtape com vãos entre faixas e sem cue sheet: separar gravação nas pausas resolve.',
  tool_split_a_recording_on_silence_usecases_title: 'Encaixa bem quando',
  tool_split_a_recording_on_silence_why_choose_body:
    'Feito para um ZIP de clips cortados no meio da pausa, com perfis Fala / Aula / Álbum visíveis na página.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'Corta no meio dos vãos longos e coloca muitos arquivos no ZIP; não costura um arquivo só mais curto.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'Fala (−40 dB / 1.0 s / 0.3 s de clip mínimo) evita picar suspiros; Aula e Álbum aparecem com nome na página.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'O arquivo fica nesta aba do navegador e não é enviado ao servidor; JSZip e lamejs só carregam ao clicar Baixar ZIP.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'Arquivos grandes demais e mais de 50 clips são recusados antes de um ZIP pela metade, em vez de prometer 1 GB e derrubar a aba.',
  tool_split_a_recording_on_silence_why_choose_title: 'Por que usar Divida uma gravação nos silêncios neste site',
};
export default pt;
