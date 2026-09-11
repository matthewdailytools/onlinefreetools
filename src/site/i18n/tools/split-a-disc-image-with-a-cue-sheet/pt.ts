/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / pt).
 * H1 de tarefa; separar faixas cue / dividir flac cue no desc e FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Textos em português: dividir uma imagem de disco com uma folha cue. */
const pt: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'Definições avançadas (opcional)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'Neste separador, divida uma imagem de disco com uma folha cue: abra a imagem e o .cue, clique Separar faixas e depois Baixar ZIP. Os cortes seguem INDEX 01 (75 fotogramas por segundo). Os ficheiros ficam no dispositivo e não são enviados para um servidor.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'Taxa MP3',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: '128 kbps por omissão. Só quando o ZIP é MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'Escolher uma imagem de disco e um ficheiro .cue',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'Limpar',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'Baixar faixa',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'Tocar faixa',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'Folha cue',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'Cortar uma imagem local em INDEX 01 e levar faixas com nome num ZIP — fica no dispositivo, sem envio.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'Divida uma imagem de disco com uma folha cue no dispositivo: cortes INDEX 01, faixas com nome no ZIP, ficheiros não enviados. Passos: abra a imagem e o .cue (ou cole a folha), Separar faixas, Baixar ZIP. Exemplo: amostra de 6,00 s com INDEX 01 em 0 / 2 / 4 s vira Intro / Middle / Outro de 2,00 s. Procurar separar faixas cue, dividir flac cue ou extrair faixas do cue é o mesmo trabalho. Não é corte por silêncio, nem partes iguais, nem capítulos do YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'Baixar ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'Largue os dois ficheiros: WAV, FLAC, MP3 ou BIN mais o .cue. O processamento fica neste separador.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'Adicione primeiro a imagem e a folha cue.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'Adicione a imagem correspondente (WAV, FLAC, MP3 ou BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: 'Adicione um .cue ou cole a folha cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'Este navegador não descodifica APE. Converta a imagem para WAV ou FLAC, mantenha a mesma folha cue e volte a Separar faixas.',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'A imagem ultrapassa o limite deste dispositivo (cerca de 80 MB / 30 min no ambiente de trabalho, 30 MB / 10 min em ecrã estreito). Um .bin de CD de 700 MB não cabe neste separador.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'Esse texto não é uma folha cue utilizável. Precisa de linhas TRACK e INDEX 01 em MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'Esta folha descreve um disco de dados (faixas MODE), não uma imagem de áudio. Só se cortam faixas AUDIO.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'Este navegador não conseguiu descodificar essa imagem. Tente WAV ou FLAC, ou um ficheiro sem DRM. APE não é descodificado aqui.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'Nada para processar. Carregue ficheiros ou o exemplo.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'O encoder MP3 não carregou. Fique no separador e tente Baixar ZIP outra vez.',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'Esta folha lista mais do que um FILE. Já é um ficheiro por faixa; não há nada a partir aqui.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'Não há INDEX 01. Um divisor cue precisa desses inícios MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'Mais de 50 faixas. A página recusa truncar. Use uma folha mais curta ou shnsplit no computador.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'Esta página não aceita vídeo como entrada principal. Parte uma imagem de áudio com folha cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'A biblioteca ZIP não carregou. Fique no separador e tente Baixar ZIP outra vez.',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'Carregar exemplo cria uma imagem de 6,00 s (440 / 550 / 660 Hz, dois segundos cada) e uma folha com INDEX 01 em 00:00:00, 00:02:00 e 00:04:00 (Intro Tone, Middle Tone, Outro Tone). Separar faixas dá três ficheiros de 2,00 s. Baixar ZIP escreve 01 Intro Tone.wav, salvo se escolher MP3 nas definições avançadas.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'Exemplo',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'Não. Análise, descodificação, corte e ZIP correm neste separador. Os scripts vêm deste site. A imagem e a folha não vão para os nossos servidores.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'Sim. Separar faixas cue, dividir flac cue, split ape cue ou extrair faixas do cue é esta ferramenta: seguir INDEX 01 e baixar um ZIP com nomes. APE como pesquisa é o mesmo trabalho, mas o .ape não abre — converta para WAV/FLAC e fique com a folha.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 é o início da faixa (MM:SS:FF, 75 fotogramas/s). INDEX 00 marca pregap; mostra-se, o corte por omissão é 01. A última faixa vai até ao fim da imagem.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'Não. Cortar por silêncio ou por duração igual são outras páginas. Aqui só a folha cue. Listas de capítulos do YouTube sem FILE/INDEX ficam de fora.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'Cole o texto debaixo da zona de ficheiros se não tiver um .cue. Largar um .cue faz a mesma análise.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'No ZIP os nomes são {nn} {title}.wav (ou .mp3). Também pode baixar uma faixa da lista. Teto 50; acima disso, recusa.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'Não. Sem redução de ruído, silenciar vídeo, partes iguais, corte à mão, rip de YouTube ou ISO de dados. Use uma imagem de áudio a que tenha direito.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'Ambiente de trabalho: cerca de 80 MB ou 30 minutos. Ecrã estreito: cerca de 30 MB ou 10 minutos. Um .bin de CD de 700 MB é recusado. Acima do teto para antes da descodificação.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'A imagem de disco e a folha cue são enviadas?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2: 'Procurei separar faixas cue ou dividir flac cue. É outra ferramenta?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'Qual a diferença entre INDEX 01 e INDEX 00?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: 'Corta por silêncio, por duração ou por capítulos do YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: 'Posso colar a folha cue em vez de um ficheiro .cue?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'Como se chamam os ficheiros e quantas faixas cabem?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: 'Descodifica APE, parte vídeo, partes iguais ou ripa YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'Que tamanho de imagem posso tratar?',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'Formato dentro do ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV é PCM sem perdas. O encoder MP3 só carrega quando clica Baixar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'Ler os INDEX 01 da folha cue, cortar a imagem de disco aí e baixar um ZIP de faixas com nome, sem envio.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'Abrir uma imagem de disco e o .cue (ou Carregar exemplo).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'Ou colar a folha cue se só tiver o texto.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'Clicar Separar faixas.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'Clicar Baixar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'Como funciona',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'A descodificar a imagem neste separador…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'Folha lida e imagem descodificada. As marcas brancas são INDEX 01. Clique Separar faixas se a lista estiver certa.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '{s}s decorridos',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'A codificar faixas MP3…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'Corrija a folha ou a imagem e volte a Separar faixas.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'Corte cue parado',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'Concluído. Seguinte: Baixar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'Concluído. A transferência do ZIP deve começar.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'A meter as faixas no ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'A ler a folha cue…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'A cortar em INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'Descodificar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'Empacotar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'Analisar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'Separar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'Progresso do corte cue',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'A começar…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'Imagem de disco',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'Cole uma folha cue completa (FILE, TRACK, INDEX 01). Não uma lista de capítulos do YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'Ou colar a folha cue',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'Pausa',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'Tocar',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'As marcas brancas são inícios INDEX 01. Tocar ouve a imagem toda.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}s · {count} faixa(s): {list}. Já pode Baixar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'Cada INDEX 01 é mm:ss:ff a 75 fotogramas/s: t = mm×60 + ss + ff/75. A faixa n vai até ao INDEX 01 seguinte; a última até ao fim. PCM de 16 bits WAV/BIN corta-se por deslocamento de bytes. Outros formatos usam o descodificador do navegador. O ZIP monta-se aqui.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'O corte é INDEX 01. INDEX 00 mostra-se como pregap e não é o corte por omissão. Os tempos são frames de CD, não milissegundos.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'Teto no ambiente de trabalho: cerca de 80 MB ou 30 minutos; ecrã estreito: cerca de 30 MB ou 10 minutos. Acima recusa, não trunca. Mais de 50 faixas também. Um .bin de 700 MB não cabe.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'Os ficheiros ficam no dispositivo; não vão para um servidor. JSZip e o encoder MP3 carregam deste site só depois de Baixar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE e BINARY (.bin, setores CDDA de 2352 bytes) cortam-se sem codec completo. MP3/FLAC/M4A precisam do descodificador do navegador. APE/TTA/WavPack falham com erro explícito.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'Um FILE mais INDEX 01. Sem silêncio, duração igual, capítulos YouTube, tamanho, silenciar vídeo ou rip YouTube. Vários FILE já estão separados.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'Regras a esperar',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'Carregar exemplo',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'Separar faixas',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'Concluído.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'Divida uma imagem de disco com uma folha cue',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}s ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'Faixas prontas para o ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'Separar um rip FLAC+CUE do Exact Audio Copy ou XLD em faixas com nome, sem instalar shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'Partir uma imagem WAV ou BIN de um lado de vinil ou CD com a folha cue e levar o ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'Tirar faixas de um set de DJ que veio com folha cue, usando INDEX 01 em vez de adivinhar silêncios.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'Bons encaixes',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'Feito para cortes INDEX 01 com faixas nomeadas no ZIP, honesto sobre APE e .bin enormes.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'Corta em INDEX 01 (75 fps) e nomeia o ZIP a partir de TITLE, não em fatias de N segundos nem em silêncios.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'Uma zona para a imagem e o .cue, com colar da mesma folha — não é editor de capítulos do YouTube disfarçado.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'Os ficheiros ficam neste separador e não são enviados; JSZip e lamejs só carregam ao clicar Baixar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE, folhas com vários FILE e imagens grandes demais são recusados em texto claro, sem promessa de 700 MB que derruba o separador.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title:
    'Por que usar Divida uma imagem de disco com uma folha cue',
};
export default pt;
