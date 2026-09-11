/**
 * i18n tool shard (make-a-seamless-audio-loop / pt).
 * H1: loop sem emenda; looper / crossfade entram no FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Português: criar um loop de áudio sem emenda e exportar. */
const pt: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'Definições avançadas (opcional)',
  tool_make_a_seamless_audio_loop_article:
    'Faça um loop de áudio sem emenda nesta separador: abra um ficheiro local, marque Início e Fim, ajuste o crossfade, clique em Fazer loop e depois Exportar WAV ou Exportar MP3. O fim mistura-se com o início para a junta não estalar. O ficheiro fica no dispositivo e não é enviado ao servidor.',
  tool_make_a_seamless_audio_loop_bitrate: 'Taxa de bits MP3',
  tool_make_a_seamless_audio_loop_bitrate_hint: '128 kbps por omissão. Só entra quando clica em Exportar MP3.',
  tool_make_a_seamless_audio_loop_choose_file: 'Escolha um ficheiro de áudio',
  tool_make_a_seamless_audio_loop_clear: 'Limpar',
  tool_make_a_seamless_audio_loop_crossfade: 'Crossfade (ms)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    '50 ms por omissão. 20 ms para bateria; 200–500 ms para pads, drones e camas ambiente.',
  tool_make_a_seamless_audio_loop_desc:
    'Faça um loop de áudio sem emenda no dispositivo: misture o fim do clip com o início e exporte WAV ou MP3, sem enviar ao servidor.',
  tool_make_a_seamless_audio_loop_description:
    'Faça um loop de áudio sem emenda no dispositivo: aplique crossfade do fim para o início de um clip local e descarregue WAV ou MP3 — o ficheiro não é enviado ao servidor. Passos: abrir o ficheiro, marcar Início e Fim, ajustar o crossfade (50 ms), Fazer loop, Reproduzir para ouvir a junta, Exportar WAV ou Exportar MP3. Exemplo: 1,00–3,00 s de um tom de 5 s com 50 ms de potência igual fica cerca de 1,95 s. Loop de áudio, áudio em loop, repetir áudio ou loop perfeito é o mesmo trabalho. Não é um editor de onda; não cruza duas músicas nem baixa YouTube.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'Tem de ter o direito de tratar o ficheiro. Esta página não concede licenças musicais nem captura streams.',
  tool_make_a_seamless_audio_loop_drop_hint: 'Ou largue aqui um WAV, MP3, M4A ou OGG. O processamento fica neste separador.',
  tool_make_a_seamless_audio_loop_empty: 'Escolha primeiro um ficheiro de áudio.',
  tool_make_a_seamless_audio_loop_end: 'Fim (segundos)',
  tool_make_a_seamless_audio_loop_equal_power: 'Crossfade de potência igual',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'Ligado por omissão para a junta não baixar de volume. Desligue para uma mistura linear.',
  tool_make_a_seamless_audio_loop_err_bake:
    'A saída colada passaria de cerca de 3 minutos. Reduza as Repetições ou encurte o trecho.',
  tool_make_a_seamless_audio_loop_err_caps:
    'Este ficheiro ultrapassa o limite deste aparelho (cerca de 40 MB / 20 min no computador, 20 MB / 8 min no ecrã estreito). Corte-o noutro sítio ou use um ficheiro mais curto.',
  tool_make_a_seamless_audio_loop_err_decode:
    'Este browser não conseguiu descodificar o ficheiro. Tente WAV ou MP3, ou um clip sem DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'Não há nada para ciclar. Carregue um ficheiro ou o exemplo.',
  tool_make_a_seamless_audio_loop_err_fade:
    'O crossfade tem de ser mais curto do que o trecho. Baixe os milissegundos ou alargue Início–Fim.',
  tool_make_a_seamless_audio_loop_err_lame:
    'O codificador MP3 não carregou. Fique neste separador e clique outra vez em Exportar MP3.',
  tool_make_a_seamless_audio_loop_err_range: 'O Fim tem de ser depois do Início, dentro da duração descodificada.',
  tool_make_a_seamless_audio_loop_err_video:
    'Esta página não aceita vídeo como entrada principal. Extraia o áudio e depois faça o loop.',
  tool_make_a_seamless_audio_loop_example:
    'Carregar exemplo cria um tom de 5,00 s, marca Início 1,00 e Fim 3,00, usa 50 ms de potência igual e Fazer loop deixa cerca de 1,95 s (um ciclo). Exportar WAV escreve PCM; Exportar MP3 usa 128 kbps salvo se alterar as definições avançadas.',
  tool_make_a_seamless_audio_loop_example_title: 'Exemplo',
  tool_make_a_seamless_audio_loop_export_mp3: 'Exportar MP3',
  tool_make_a_seamless_audio_loop_export_wav: 'Exportar WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    'Não. A descodificação e o envelopamento correm neste separador. Os scripts vêm deste site. O ficheiro não é enviado para os nossos servidores.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'Não. Loop de áudio, áudio em loop, repetir áudio, loop perfeito ou looper é esta ferramenta: marca um trecho, faz crossfade na junta e exporta.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'O crossfade mistura a cauda do trecho com a cabeça. 50 ms de potência igual por omissão. Cerca de 20 ms para bateria; 200–500 ms para pads.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'O ciclo exportado é mais curto do que Início–Fim exatamente pelo comprimento do crossfade, porque a sobreposição só se mistura uma vez.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV para motores de jogo que repetem o ficheiro. MP3 mais pequeno (128 kbps) se a app de direto não souber fazer loop; o codificador só carrega em Exportar MP3.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'Repetições vale 1 por omissão. Nas definições avançadas pode colar 4 ou 8 cópias. Mais de cerca de 3 minutos é recusado. Não há versão de 10 horas.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'Não cruza duas músicas diferentes, não é um editor de áudio online, não grava toques M4A, não encontra o ponto de loop sozinho nem baixa YouTube.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'Computador: cerca de 40 MB ou 20 minutos. Ecrã estreito: cerca de 20 MB ou 8 minutos. Acima disso recusa, não corta à calada.',
  tool_make_a_seamless_audio_loop_faq_q1: 'O áudio é enviado para um servidor?',
  tool_make_a_seamless_audio_loop_faq_q2: 'Pesquisei loop de áudio, áudio em loop ou loop perfeito. É outra ferramenta?',
  tool_make_a_seamless_audio_loop_faq_q3: 'Como é que o crossfade tira o estalo da junta?',
  tool_make_a_seamless_audio_loop_faq_q4: 'Porque é que a exportação fica mais curta do que o trecho?',
  tool_make_a_seamless_audio_loop_faq_q5: 'Exporto WAV para o jogo ou MP3 para o direto?',
  tool_make_a_seamless_audio_loop_faq_q6: 'O programa de streaming não faz loop. Posso colar várias voltas?',
  tool_make_a_seamless_audio_loop_faq_q7: 'Serve para cruzar duas músicas, fazer toque ou achar o loop com IA?',
  tool_make_a_seamless_audio_loop_faq_q8: 'Qual é o tamanho máximo do ficheiro?',
  tool_make_a_seamless_audio_loop_how_body:
    'Marque o trecho a repetir, misture o fim com o início e descarregue WAV ou MP3 sem enviar o ficheiro.',
  tool_make_a_seamless_audio_loop_how_item_1: 'Abra um ficheiro de áudio (ou clique em Carregar exemplo).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'Clique ou arraste a forma de onda (ou escreva Início e Fim). Mude o crossfade se 50 ms não servir (20 / 50 / 200 / 500 ms).',
  tool_make_a_seamless_audio_loop_how_item_3: 'Clique em Fazer loop.',
  tool_make_a_seamless_audio_loop_how_item_4: 'Clique em Reproduzir para ouvir a junta e depois Exportar WAV ou Exportar MP3.',
  tool_make_a_seamless_audio_loop_how_title: 'Como funciona',
  tool_make_a_seamless_audio_loop_hud_decode: 'A descodificar o ficheiro neste separador…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'Descodificado. Ajuste Início, Fim e o crossfade e clique em Fazer loop.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '{s}s decorridos',
  tool_make_a_seamless_audio_loop_hud_encode: 'A codificar MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'Corrija o ficheiro, os tempos ou o crossfade e volte a Fazer loop.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'Fazer loop parou',
  tool_make_a_seamless_audio_loop_hud_loop: 'A envolver a cauda na cabeça…',
  tool_make_a_seamless_audio_loop_hud_next: 'Concluído. Seguinte: Reproduzir a junta e Exportar WAV ou Exportar MP3.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'Concluído. A descarga MP3 deve começar.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'Descodificar',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'Codificar',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'Loop',
  tool_make_a_seamless_audio_loop_hud_title: 'Progresso do loop',
  tool_make_a_seamless_audio_loop_hud_working: 'A começar…',
  tool_make_a_seamless_audio_loop_make: 'Fazer loop',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_make_a_seamless_audio_loop_pause: 'Pausa',
  tool_make_a_seamless_audio_loop_play: 'Reproduzir',
  tool_make_a_seamless_audio_loop_preview_hint:
    'Clique ou arraste a forma de onda para Início e Fim. Depois de Fazer loop, Reproduzir repete o resultado para ouvir a junta.',
  tool_make_a_seamless_audio_loop_repeats: 'Repetições (cópias coladas)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    '1 ciclo por omissão se o leitor souber fazer loop. Use 4 ou 8 se não souber. Mais de cerca de 3 minutos é recusado.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'O loop dura {dur}s ({start}–{end}s, crossfade {fade} ms, {n} repetição(ões)). Já pode exportar.',
  tool_make_a_seamless_audio_loop_rules_body:
    'Copia-se o trecho e um envelope de potência igual (ou linear) mistura as últimas amostras com as primeiras. A duração de saída é o trecho menos o crossfade. As repetições colam esse ciclo. WAV é PCM de 16 bits. MP3 é CBR.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'Limite no computador: cerca de 40 MB ou 20 minutos; ecrã estreito: cerca de 20 MB ou 8 minutos. Acima disso recusa.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'O ficheiro fica no dispositivo; não é enviado a um servidor. O codificador MP3 só carrega depois de Exportar MP3.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'O crossfade tem de ser mais curto do que o trecho. O ciclo exportado perde exatamente essa sobreposição. Potência igual é a curva por omissão.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'A descodificação depende do browser. DRM, alguns codecs e contentores de vídeo falham com um erro explícito.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'Não mistura duas músicas, não escreve M4A, não mede BPM, não procura o ponto de loop nem baixa YouTube. Um ficheiro, um trecho, um loop.',
  tool_make_a_seamless_audio_loop_rules_title: 'Regras a esperar',
  tool_make_a_seamless_audio_loop_sample: 'Carregar exemplo',
  tool_make_a_seamless_audio_loop_start: 'Início (segundos)',
  tool_make_a_seamless_audio_loop_status_done: 'Concluído.',
  tool_make_a_seamless_audio_loop_title: 'Faça um loop de áudio sem emenda',
  tool_make_a_seamless_audio_loop_usecase_1:
    'Transforme uma cama de dois segundos de um jogo num loop de áudio sem emenda e exporte WAV para o motor.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'Cama para direto: marque o groove, mantenha 50 ms de crossfade, cole 8 voltas nas definições avançadas e exporte MP3.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'Suavize um loop ambiente ou de drone com 200–500 ms de crossfade para a junta desaparecer.',
  tool_make_a_seamless_audio_loop_usecases_title: 'Quando faz sentido',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'Feito para um envelopamento e uma descarga, com um fade que se ouve e limites visíveis na página.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'A descodificação e o envelopamento ficam neste separador; Exportar MP3 é a primeira carga do codificador.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'O crossfade de potência igual vem ligado; as fichas 20 / 50 / 200 / 500 ms cobrem bateria e pads.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'Depois de Fazer loop, Reproduzir repete o resultado para julgar a junta antes de descarregar.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'Ficheiros demasiado grandes e saídas coladas com mais de cerca de 3 minutos são recusados, não cortados à calada.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'Porque usar Faça um loop de áudio sem emenda',
  tool_make_a_seamless_audio_loop_zerocross: 'Ajustar Início e Fim ao cruzamento por zero mais próximo',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    'Ligado por omissão. Estabiliza as bordas antes do crossfade. Desligue se precisar de amostras exactas.',
};
export default pt;
