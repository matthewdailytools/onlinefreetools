/**
 * i18n tool shard (trim-an-audio-clip-and-export / pt).
 * H1: recorte um trecho e exporte; cortar mp3 entra no FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy em português para recortar um trecho de áudio e exportar. */
const pt: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'Definições avançadas (opcional)',
  tool_trim_an_audio_clip_and_export_article:
    'Abra um áudio do aparelho, marque Início e Fim, clique Recortar e depois Exportar WAV ou Exportar MP3. O ficheiro fica no dispositivo, sem enviar ao servidor. É um recorte, não um estúdio de forma de onda.',
  tool_trim_an_audio_clip_and_export_bitrate: 'Taxa de bits MP3',
  tool_trim_an_audio_clip_and_export_bitrate_hint: 'Predefinição 128 kbps. Só entra quando clica Exportar MP3.',
  tool_trim_an_audio_clip_and_export_choose_file: 'Escolher um ficheiro de áudio',
  tool_trim_an_audio_clip_and_export_clear: 'Limpar',
  tool_trim_an_audio_clip_and_export_desc:
    'Corte ou recorte um áudio local entre início e fim e exporte WAV ou MP3. Fica no dispositivo, sem enviar ao servidor.',
  tool_trim_an_audio_clip_and_export_description:
    'Recorte um áudio já no dispositivo: marque Início e Fim e descarregue WAV ou MP3, sem enviar ao servidor. Passos: abra o ficheiro, clique ou arraste na forma de onda (ou escreva Início e Fim), Recortar, Exportar WAV ou Exportar MP3. Exemplo: num tom de 5 s fique com 1,00–3,00 s em WAV (ou MP3 a 128 kbps). Cortar mp3, cortar áudio, recortar áudio, aparar áudio ou cortar trecho de música é o mesmo recorte. Não é um editor de onda completo; vídeo não entra como input principal.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'Ou largue aqui um WAV, MP3, M4A ou OGG. O trabalho fica neste separador.',
  tool_trim_an_audio_clip_and_export_empty: 'Escolha primeiro um ficheiro de áudio.',
  tool_trim_an_audio_clip_and_export_end: 'Fim (segundos)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'Este ficheiro ultrapassa o tecto deste aparelho (cerca de 40 MB / 20 min no computador, 20 MB / 8 min em ecrã estreito). Corte noutro sítio ou use um ficheiro mais curto.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'Este browser não conseguiu descodificar o ficheiro. Tente WAV ou MP3, ou um clipe sem DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'Não há nada para recortar. Carregue um ficheiro ou o exemplo.',
  tool_trim_an_audio_clip_and_export_err_lame: 'O codificador MP3 falhou ao carregar. Fique neste separador e tente Exportar MP3 outra vez.',
  tool_trim_an_audio_clip_and_export_err_range: 'O Fim tem de ser depois do Início, dentro da duração descodificada.',
  tool_trim_an_audio_clip_and_export_err_video:
    'Esta página não aceita vídeo como entrada principal. Extraia o áudio primeiro e recorte o som.',
  tool_trim_an_audio_clip_and_export_example:
    'Carregar exemplo cria na memória um tom de 5,00 s, põe Início 1,00 e Fim 3,00, e Recortar deixa cerca de 2,00 s. Exportar WAV escreve PCM; Exportar MP3 usa 128 kbps salvo se alterar as definições avançadas.',
  tool_trim_an_audio_clip_and_export_example_title: 'Exemplo',
  tool_trim_an_audio_clip_and_export_export_mp3: 'Exportar MP3',
  tool_trim_an_audio_clip_and_export_export_wav: 'Exportar WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'Não. A descodificação e o corte correm neste separador. Os scripts vêm deste site. O ficheiro não é enviado aos nossos servidores.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'Não. Cortar mp3, cortar áudio, recortar áudio, aparar áudio ou cortar trecho de música é esta ferramenta: ficar com Início–Fim e Exportar WAV ou Exportar MP3.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'Por omissão o corte encosta a um cruzamento por zero para o splice estalar menos. Pode desligar em Definições avançadas (opcional).',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV guarda o PCM recortado. MP3 é mais pequeno (128 kbps por omissão) e o codificador só carrega ao clicar Exportar MP3.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'Não. Aqui só se recorta início e fim e se exporta. Um editor de áudio / estação de forma de onda é outra ferramenta, mais tarde.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'Pode deixar cerca de 30 s, mas não escrevemos M4A nem um fade automático. Essa ficha de toque é outro trabalho.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'Não. Demux de vídeo e rip de YouTube estão fora. Use um ficheiro de som que já tenha direito a tratar.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'Computador: cerca de 40 MB ou 20 minutos. Ecrã estreito: cerca de 20 MB ou 8 minutos. Acima do tecto rejeita-se; não se corta em silêncio.',
  tool_trim_an_audio_clip_and_export_faq_q1: 'O meu áudio é enviado?',
  tool_trim_an_audio_clip_and_export_faq_q2: 'Pesquisei cortar mp3, recortar áudio ou aparar áudio. É outra ferramenta?',
  tool_trim_an_audio_clip_and_export_faq_q3: 'Porque é que o corte salta um pouco? Noutros sítios oiço um clique.',
  tool_trim_an_audio_clip_and_export_faq_q4: 'Exporto WAV ou MP3?',
  tool_trim_an_audio_clip_and_export_faq_q5: 'Isto é um editor de áudio online?',
  tool_trim_an_audio_clip_and_export_faq_q6: 'Consigo um toque M4A de iPhone?',
  tool_trim_an_audio_clip_and_export_faq_q7: 'Posso extrair áudio de um vídeo ou do YouTube?',
  tool_trim_an_audio_clip_and_export_faq_q8: 'Até que tamanho posso recortar?',
  tool_trim_an_audio_clip_and_export_how_body:
    'Fique só com o trecho entre Início e Fim e descarregue WAV ou MP3 sem enviar o ficheiro ao servidor.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'Abra um ficheiro de áudio (ou clique Carregar exemplo).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'Clique ou arraste na forma de onda (ou escreva Início e Fim) o trecho a manter.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'Clique Recortar.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'Clique Exportar WAV ou Exportar MP3.',
  tool_trim_an_audio_clip_and_export_how_title: 'Como funciona',
  tool_trim_an_audio_clip_and_export_hud_decode: 'A descodificar o ficheiro neste separador…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'Descodificado. Defina Início e Fim e clique Recortar.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '{s}s decorridos',
  tool_trim_an_audio_clip_and_export_hud_encode: 'A codificar MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'Corrija o ficheiro ou os tempos e Recortar de novo.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'Recorte parado',
  tool_trim_an_audio_clip_and_export_hud_next: 'Concluído. Seguinte: Exportar WAV ou Exportar MP3.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'Concluído. A descarga MP3 deve começar.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'Descodificar',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'Codificar',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'Recortar',
  tool_trim_an_audio_clip_and_export_hud_title: 'Progresso do recorte',
  tool_trim_an_audio_clip_and_export_hud_trim: 'A cortar o intervalo início–fim…',
  tool_trim_an_audio_clip_and_export_hud_working: 'A começar…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_trim_an_audio_clip_and_export_pause: 'Pausa',
  tool_trim_an_audio_clip_and_export_play: 'Reproduzir',
  tool_trim_an_audio_clip_and_export_preview_hint: 'Clique ou arraste na forma de onda para marcar Início e Fim. Reproduzir ouve esse trecho.',
  tool_trim_an_audio_clip_and_export_result_tpl: 'Mantidos {dur}s ({start}–{end}s). Já pode exportar.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'As amostras entre Início e Fim copiam-se para um buffer novo. Por omissão cada bordo encosta a um cruzamento por zero. WAV escreve PCM de 16 bits. MP3 é CBR à taxa escolhida.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'No computador o tecto é cerca de 40 MB ou 20 minutos; em ecrã estreito, cerca de 20 MB ou 8 minutos. Acima disso rejeita-se, não se corta às escondidas.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'Os ficheiros ficam no dispositivo; sem enviar ao servidor. O codificador MP3 carrega deste site só depois de Exportar MP3.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'A descodificação depende do browser. DRM, alguns codecs e contentores de vídeo falham com erro explícito.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'Não mistura faixas, não adiciona fades, não escreve M4A nem vai buscar YouTube. Um ficheiro, um intervalo, uma exportação.',
  tool_trim_an_audio_clip_and_export_rules_title: 'Regras a esperar',
  tool_trim_an_audio_clip_and_export_sample: 'Carregar exemplo',
  tool_trim_an_audio_clip_and_export_start: 'Início (segundos)',
  tool_trim_an_audio_clip_and_export_status_done: 'Feito.',
  tool_trim_an_audio_clip_and_export_title: 'Recorte um trecho de áudio e exporte',
  tool_trim_an_audio_clip_and_export_trim: 'Recortar',
  tool_trim_an_audio_clip_and_export_usecase_1: 'Recorte um podcast: salte o bumper de 8 s e exporte MP3 para o chat.',
  tool_trim_an_audio_clip_and_export_usecase_2: 'Fique com 12 s de uma reunião e descarregue WAV para arquivo.',
  tool_trim_an_audio_clip_and_export_usecase_3: 'Corte o silêncio nas pontas de um memo de voz — o mesmo recorte que cortar mp3 ou aparar áudio.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'Encaixes úteis',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'Feito para um corte e uma descarga, com tectos e anti-clique que dá para conferir na página.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'Descodificar e cortar ficam neste separador; o script do codificador só aparece ao clicar Exportar MP3.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'Ficheiros grandes ou longos demais são recusados, não recortados em silêncio.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'O cruzamento por zero vem ligado para o splice estalar menos; pode desligar.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV e MP3 são botões de exportar distintos, iguais aos passos; a taxa de bits só nas avançadas.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'Porque escolher as nossas ferramentas Recorte um trecho de áudio e exporte',
  tool_trim_an_audio_clip_and_export_zerocross: 'Encostar Início e Fim a um cruzamento por zero próximo',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'Ligado por omissão. Reduz cliques no splice. Desligue para bordos exactos à amostra.',
};
export default pt;
