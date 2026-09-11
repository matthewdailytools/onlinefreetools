/**
 * i18n tool shard (split-an-audio-file-by-duration / pt).
 * H1 em frase de tarefa; partes iguais / a cada 60 s no desc e FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Cópia em português: dividir um arquivo de áudio por duração e baixar um ZIP. */
const pt: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'Configurações avançadas (opcional)',
  tool_split_an_audio_file_by_duration_article:
    'Divida um arquivo de áudio por duração nesta aba: abra o arquivo, defina os segundos, clique em Dividir por duração e depois em Baixar ZIP. Cada clipe dura N segundos, o último fica com o resto. O arquivo permanece no dispositivo e não é enviado ao servidor.',
  tool_split_an_audio_file_by_duration_bitrate: 'Taxa MP3',
  tool_split_an_audio_file_by_duration_bitrate_hint: 'Padrão 128 kbps. Só entra se o ZIP for MP3.',
  tool_split_an_audio_file_by_duration_chip_180: '3 min',
  tool_split_an_audio_file_by_duration_chip_30: '30 s',
  tool_split_an_audio_file_by_duration_chip_300: '5 min',
  tool_split_an_audio_file_by_duration_chip_60: '60 s',
  tool_split_an_audio_file_by_duration_choose_file: 'Escolher um arquivo de áudio',
  tool_split_an_audio_file_by_duration_chunk: 'Duração de cada trecho (segundos)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '2 s combina com o exemplo. Em uma aula, teste 60 s ou 3 min. O último clipe guarda o tempo que sobrar.',
  tool_split_an_audio_file_by_duration_clear: 'Limpar',
  tool_split_an_audio_file_by_duration_clip_download: 'Baixar este clipe',
  tool_split_an_audio_file_by_duration_clip_play: 'Tocar este clipe',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'Clipe {n} · {dur}s ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'Clipes prontos para o ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'Corte o arquivo em clipes de mesma duração e baixe um ZIP; fica no dispositivo, sem enviar ao servidor.',
  tool_split_an_audio_file_by_duration_description:
    'Divida um arquivo de áudio por duração no dispositivo: trechos iguais, o último com o resto, ZIP para baixar — sem enviar ao servidor. Passos: abra o arquivo, defina os segundos (o exemplo usa 2 s; chips 30 / 60 / 180 / 300 s), Dividir por duração, Baixar ZIP. Exemplo: 5,00 s a 2 s viram 2,00 / 2,00 / 1,00 s. Dividir áudio por duração, partir mp3 em partes iguais ou cortar a cada 60 segundos é o mesmo trabalho. Não corta no silêncio, nem cue, nem recorte manual, nem silencia vídeo.',
  tool_split_an_audio_file_by_duration_download_zip: 'Baixar ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: 'Ou solte um WAV, MP3, M4A ou OGG aqui. O processamento fica nesta aba.',
  tool_split_an_audio_file_by_duration_empty: 'Escolha primeiro um arquivo de áudio.',
  tool_split_an_audio_file_by_duration_equal_parts: 'Ou partir em N partes iguais',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'Vazio = campo de segundos. 2–50 define a duração como total ÷ N neste corte.',
  tool_split_an_audio_file_by_duration_err_caps:
    'O arquivo passa do limite deste dispositivo (cerca de 40 MB / 20 min no desktop, 20 MB / 8 min em tela estreita). Encurte antes ou use um arquivo menor.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'A duração deve ficar entre 0,5 e 1200 segundos. Aumente se bater no teto de 50 clipes.',
  tool_split_an_audio_file_by_duration_err_decode:
    'Este navegador não conseguiu decodificar o arquivo. Tente WAV ou MP3, ou um clipe sem DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'Nada para processar. Carregue um arquivo ou o exemplo.',
  tool_split_an_audio_file_by_duration_err_lame: 'O encoder MP3 não carregou. Fique nesta aba e tente Baixar ZIP de novo.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'Mais de 50 clipes. Aumente os segundos (60 s ou 3 min). A página recusa em vez de truncar.',
  tool_split_an_audio_file_by_duration_err_video:
    'Esta página não aceita vídeo como entrada principal. Ela divide um arquivo de som por duração; não silencia um vídeo.',
  tool_split_an_audio_file_by_duration_err_zip: 'A biblioteca ZIP não carregou. Fique nesta aba e tente Baixar ZIP de novo.',
  tool_split_an_audio_file_by_duration_example:
    'Carregar exemplo cria um tom de 5,00 s a 440 Hz. Dividir por duração em 2,00 s corta em 2,00 s e 4,00 s: três clipes 2,00 / 2,00 / 1,00 s (o último guarda o resto). Baixar ZIP grava sample-01.wav, a menos que você escolha MP3 em Configurações avançadas.',
  tool_split_an_audio_file_by_duration_example_title: 'Exemplo',
  tool_split_an_audio_file_by_duration_faq_a1:
    'Não. Decodificar, cortar e empacotar o ZIP acontecem nesta aba. Os scripts vêm deste site. O arquivo não vai para os nossos servidores.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'Sim. Dividir áudio por duração, partir mp3 em partes iguais, cortar a cada 60 segundos ou baixar clipes em ZIP é esta ferramenta: cortar o arquivo local a cada N segundos e levar muitos ficheiros num ZIP. N partes iguais ficam em Configurações avançadas.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'O último clipe fica com o tempo que sobrar. 5,00 s a 2 s viram 2,00 / 2,00 / 1,00 s, sem silêncio extra.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'Não. Dividir uma gravação nos silêncios corta nas pausas. Aqui manda o relógio. Cue e corte por tamanho em MB ficam de fora.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'No exemplo deixe 2 s. Para redes, 30 s ou 60 s; para aula, 3 min ou 5 min. Quatro ficheiros iguais: digite 4 no avançado.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'No ZIP os nomes são {stem}-01.wav (ou .mp3). Também dá para baixar um clipe da lista. Teto 50; acima disso recusa.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'Não. Sem redução de ruído, sem silenciar vídeo, sem cue/APE, sem recorte manual, sem baixar YouTube. Use um áudio de que você tenha direitos.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'Desktop: cerca de 40 MB ou 20 minutos. Tela estreita: cerca de 20 MB ou 8 minutos. Acima do limite, recusa antes de decodificar.',
  tool_split_an_audio_file_by_duration_faq_q1: 'O arquivo de áudio é enviado ao servidor?',
  tool_split_an_audio_file_by_duration_faq_q2:
    'Busquei partir mp3 em partes iguais ou dividir áudio por duração. É outra ferramenta?',
  tool_split_an_audio_file_by_duration_faq_q3: 'Se não dividir certo, o que acontece com o último clipe?',
  tool_split_an_audio_file_by_duration_faq_q4: 'Corta no silêncio, segue um cue ou parte por tamanho?',
  tool_split_an_audio_file_by_duration_faq_q5: 'Quantos segundos por trecho?',
  tool_split_an_audio_file_by_duration_faq_q6: 'Como os ficheiros se chamam e quantos clipes cabem?',
  tool_split_an_audio_file_by_duration_faq_q7: 'Dá para tirar ruído, cortar vídeo, ler cue ou baixar YouTube?',
  tool_split_an_audio_file_by_duration_faq_q8: 'Qual o tamanho máximo do arquivo?',
  tool_split_an_audio_file_by_duration_format: 'Formato dentro do ZIP',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV é PCM sem perda. O MP3 só carrega o encoder quando você clica em Baixar ZIP.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'Corte a cada N segundos no relógio, deixe o resto no último clipe e baixe um ZIP sem enviar o arquivo ao servidor.',
  tool_split_an_audio_file_by_duration_how_item_1: 'Abra um arquivo de áudio (ou clique em Carregar exemplo).',
  tool_split_an_audio_file_by_duration_how_item_2: 'Mantenha 2 segundos, ou toque um chip / digite a duração.',
  tool_split_an_audio_file_by_duration_how_item_3: 'Clique em Dividir por duração.',
  tool_split_an_audio_file_by_duration_how_item_4: 'Clique em Baixar ZIP.',
  tool_split_an_audio_file_by_duration_how_title: 'Como usar',
  tool_split_an_audio_file_by_duration_hud_decode: 'Decodificando o arquivo nesta aba…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'Decodificado. As marcas brancas são cortes previstos. Clique em Dividir por duração se a duração estiver boa.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '{s}s decorridos',
  tool_split_an_audio_file_by_duration_hud_encode: 'Codificando clipes MP3…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'Ajuste o arquivo ou os segundos e clique de novo em Dividir por duração.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'Dividir por duração parou',
  tool_split_an_audio_file_by_duration_hud_next: 'Concluído. Próximo passo: Baixar ZIP.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'Concluído. O download do ZIP deve começar.',
  tool_split_an_audio_file_by_duration_hud_pack: 'Empacotando clipes num ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'Cortando clipes de mesma duração…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'Decodificar',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'Empacotar',
  tool_split_an_audio_file_by_duration_hud_step_split: 'Cortar',
  tool_split_an_audio_file_by_duration_hud_title: 'Progresso de Dividir por duração',
  tool_split_an_audio_file_by_duration_hud_working: 'A começar…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} canais',
  tool_split_an_audio_file_by_duration_pause: 'Pausa',
  tool_split_an_audio_file_by_duration_play: 'Tocar',
  tool_split_an_audio_file_by_duration_preview_hint: 'As marcas brancas são cortes a cada N segundos. Tocar ouve o arquivo atual.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}s · a duração do trecho cobre o arquivo inteiro, então o ZIP teria só este ficheiro. Encurte os segundos e clique de novo em Dividir por duração. Baixar ZIP já está pronto.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}s · a cada {chunk}s → {count} clipe(s): {list}. Baixar ZIP já está pronto.',
  tool_split_an_audio_file_by_duration_rules_body:
    'Os cortes caem em k × D segundos, D é a duração do trecho. O último clipe é [floor(T / D) × D, T] e pode ser mais curto. Se você puser N partes iguais, D = T / N nesta execução. WAV é PCM de 16 bits. MP3 é CBR na taxa escolhida. O ZIP nasce nesta aba.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'O exemplo usa 2 s. Os chips escrevem 30 s, 60 s, 180 s (3 min) ou 300 s (5 min) no mesmo campo. N partes iguais (2–50) é opcional no avançado.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'Limite no desktop: cerca de 40 MB ou 20 minutos; tela estreita: cerca de 20 MB ou 8 minutos. Acima disso recusa, sem truncar. Mais de 50 clipes também.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'Os arquivos ficam no dispositivo; não são enviados ao servidor. JSZip e o encoder MP3 carregam deste site só depois de Baixar ZIP.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'A decodificação depende do navegador. DRM, alguns codecs e contentores de vídeo falham com erro explícito.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'Esta página exporta muitos ficheiros num ZIP pelo relógio. Não corta no silêncio, não segue cue, não parte por megabytes, não tira ruído, não silencia vídeo nem puxa YouTube.',
  tool_split_an_audio_file_by_duration_rules_title: 'Regras que você deve esperar',
  tool_split_an_audio_file_by_duration_sample: 'Carregar exemplo',
  tool_split_an_audio_file_by_duration_split: 'Dividir por duração',
  tool_split_an_audio_file_by_duration_status_done: 'Concluído.',
  tool_split_an_audio_file_by_duration_title: 'Divida um arquivo de áudio por duração',
  tool_split_an_audio_file_by_duration_usecase_1:
    'Cortar uma aula em fatias de 3 min para o trajeto e levar um ZIP, sem esperar pausas.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'Partir um mp3 em partes iguais de 60 segundos para redes, a partir de um episódio longo.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'Cortar um áudio de voz longo para o limite de um chat; o último clipe guarda o resto.',
  tool_split_an_audio_file_by_duration_usecases_title: 'Quando faz sentido',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'Feita para um ZIP cortado no relógio, com chips 30 s / 60 s / 3 min / 5 min e um último clipe mais curto à vista.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'Corta a cada N segundos e mete muitos ficheiros no ZIP; o último clipe guarda o resto em vez de encher com silêncio.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    'Chips 30 s / 60 s / 3 min / 5 min e N partes iguais opcionais; não é um detetor de silêncio a fingir cortes iguais.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'O arquivo fica nesta aba do navegador e não é enviado ao servidor; JSZip e lamejs só carregam quando você clica em Baixar ZIP.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'Arquivos grandes demais e mais de 50 clipes são recusados antes de um ZIP pela metade — sem promessa de 1 GB que derruba a aba.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'Por que usar Divida um arquivo de áudio por duração',
};
export default pt;
