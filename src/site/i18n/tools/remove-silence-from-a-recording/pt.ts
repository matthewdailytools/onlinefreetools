/**
 * i18n tool shard (remove-silence-from-a-recording / pt).
 * H1: Remova os silêncios de uma gravação.
 */
import type { SiteLangDict } from '../../../types';

/** Português: remover silêncios / cortar pausas, um arquivo. */
const pt: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'Ajustes avançados (opcional)',
  tool_remove_silence_from_a_recording_article:
    'Remova os silêncios de uma gravação nesta aba: abra um arquivo local, clique em Remover silêncios e exporte WAV ou MP3. As pausas longas saem; a fala fica num arquivo mais curto, sem enviar ao servidor.',
  tool_remove_silence_from_a_recording_bitrate: 'Taxa MP3',
  tool_remove_silence_from_a_recording_bitrate_hint: '128 kbps por padrão. Só ao clicar em Exportar MP3.',
  tool_remove_silence_from_a_recording_choose_file: 'Escolher um arquivo de áudio',
  tool_remove_silence_from_a_recording_clear: 'Limpar',
  tool_remove_silence_from_a_recording_desc:
    'Tire silêncios de uma gravação local e baixe um WAV ou MP3 mais curto; os arquivos ficam no dispositivo, sem enviar ao servidor.',
  tool_remove_silence_from_a_recording_description:
    'Remova os silêncios de uma gravação no dispositivo: corte pausas longas, mantenha um arquivo mais curto e baixe WAV ou MP3 — sem enviar ao servidor. Passos: abra a gravação, clique em Remover silêncios (−40 dB / 0,5 s / 0,15 s de folga), Exportar WAV ou Exportar MP3. Exemplo: 5,00 s com dois vãos de 1,20 s viram cerca de 2,90 s. Buscar remover silêncio do áudio, eliminar silêncios ou cortar pausas é a mesma tarefa. Sem ZIP e sem silenciar vídeo.',
  tool_remove_silence_from_a_recording_drop_hint: 'Ou solte WAV, MP3, M4A ou OGG aqui. O processamento fica nesta aba.',
  tool_remove_silence_from_a_recording_empty: 'Escolha primeiro um arquivo de áudio.',
  tool_remove_silence_from_a_recording_err_caps:
    'O arquivo passa do limite deste dispositivo (cerca de 40 MB / 20 min no desktop, 20 MB / 8 min em tela estreita). Encurte antes ou use um arquivo menor.',
  tool_remove_silence_from_a_recording_err_decode:
    'Este navegador não decodificou o arquivo. Tente WAV ou MP3, ou um trecho sem DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'Nada para processar. Carregue um arquivo ou o exemplo.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'Não restou áudio. Deixe o limiar mais negativo ou aumente o silêncio mínimo para não tratar fala como vão.',
  tool_remove_silence_from_a_recording_err_lame: 'O encoder MP3 não carregou. Fique nesta aba e tente Exportar MP3 de novo.',
  tool_remove_silence_from_a_recording_err_video:
    'Esta página não aceita vídeo como entrada principal. Ela encurta um arquivo de som; não silencia vídeo nem faz jump-cut.',
  tool_remove_silence_from_a_recording_example:
    'Carregar exemplo cria 5,00 s de tom com dois vãos de 1,20 s (0,80 + 1,20 + 0,80 + 1,20 + 1,00). Remover silêncios em −40 dB / 0,5 s / 0,15 s deixa cerca de 2,90 s. WAV grava PCM; MP3 usa 128 kbps salvo mudança nos avançados.',
  tool_remove_silence_from_a_recording_example_title: 'Exemplo',
  tool_remove_silence_from_a_recording_export_mp3: 'Exportar MP3',
  tool_remove_silence_from_a_recording_export_wav: 'Exportar WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    'Não. Decodificar e cortar acontecem nesta aba. Os scripts vêm deste site. O arquivo não vai aos nossos servidores.',
  tool_remove_silence_from_a_recording_faq_a2:
    'É a mesma tarefa. Remover silêncio do áudio, eliminar silêncios ou cortar pausas é tirar vãos quietos e exportar um WAV ou MP3 mais curto.',
  tool_remove_silence_from_a_recording_faq_a3:
    'Comece com Fala (−40 dB / 0,5 s / 0,15 s). Sala barulhenta: limiar rumo a −30 dB e mínimo rumo a 0,8 s. Estúdio: Suave (−50 dB). Se sumirem finais de palavra, limiar mais negativo ou mínimo maior.',
  tool_remove_silence_from_a_recording_faq_a4:
    'Recortar é marcar início e fim à mão. Aqui os vãos do meio também saem e vira um arquivo. Só as bordas à mão: use o recortador.',
  tool_remove_silence_from_a_recording_faq_a5:
    'Não. Dividir no silêncio em muitos arquivos ou um ZIP é outro trabalho. Aqui sempre sai um arquivo.',
  tool_remove_silence_from_a_recording_faq_a6:
    'Não. Reduzir ruído não encurta. Tirar «ãhn» pede transcrição. Silenciar vídeo ou baixar YouTube fica de fora. Use áudio que você tem direito de tratar.',
  tool_remove_silence_from_a_recording_faq_a7:
    'Mesma tarefa, outro programa. O Truncate Silence do Audacity encurta trechos abaixo de um limiar por tempo suficiente. Aqui no navegador; não é guia de instalação.',
  tool_remove_silence_from_a_recording_faq_a8:
    'Desktop: cerca de 40 MB ou 20 minutos. Tela estreita: cerca de 20 MB ou 8 minutos. Acima disso, recusa antes de decodificar. Música bem baixa pode ser cortada por engano — suba o mínimo ou não use esta página.',
  tool_remove_silence_from_a_recording_faq_q1: 'A gravação é enviada ao servidor?',
  tool_remove_silence_from_a_recording_faq_q2: 'Busquei remover silêncios ou cortar pausas. É outra ferramenta?',
  tool_remove_silence_from_a_recording_faq_q3: 'Qual limiar? Corta respirações?',
  tool_remove_silence_from_a_recording_faq_q4: 'Eu só queria recortar início e fim. É o recorte de áudio?',
  tool_remove_silence_from_a_recording_faq_q5: 'Divide a gravação em muitos arquivos?',
  tool_remove_silence_from_a_recording_faq_q6: 'Tira ruído, muletas, silencia vídeo ou baixa YouTube?',
  tool_remove_silence_from_a_recording_faq_q7: 'É o Truncate Silence do Audacity?',
  tool_remove_silence_from_a_recording_faq_q8: 'Qual o tamanho máximo? E música baixa?',
  tool_remove_silence_from_a_recording_how_body:
    'Achar vãos longos o bastante, encurtá-los, costurar a fala num arquivo e baixar WAV ou MP3 sem enviar ao servidor.',
  tool_remove_silence_from_a_recording_how_item_1: 'Abra uma gravação (ou clique em Carregar exemplo).',
  tool_remove_silence_from_a_recording_how_item_2: 'Deixe os padrões ou abra Ajustes avançados (opcional) para limiar e mínimo.',
  tool_remove_silence_from_a_recording_how_item_3: 'Clique em Remover silêncios.',
  tool_remove_silence_from_a_recording_how_item_4: 'Clique em Exportar WAV ou Exportar MP3.',
  tool_remove_silence_from_a_recording_how_title: 'Como funciona',
  tool_remove_silence_from_a_recording_hud_cut: 'Cortando vãos e unindo um arquivo…',
  tool_remove_silence_from_a_recording_hud_decode: 'Decodificando o arquivo nesta aba…',
  tool_remove_silence_from_a_recording_hud_decoded: 'Decodificado. O vermelho marca vãos. Clique em Remover silêncios.',
  tool_remove_silence_from_a_recording_hud_detect: 'Medindo janelas quietas…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '{s}s decorridos',
  tool_remove_silence_from_a_recording_hud_encode: 'Codificando MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'Ajuste o arquivo ou os valores e clique de novo em Remover silêncios.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'Remover silêncios parou',
  tool_remove_silence_from_a_recording_hud_next: 'Pronto. Próximo: Exportar WAV ou Exportar MP3.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'Pronto. O download do MP3 deve começar.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'Cortar',
  tool_remove_silence_from_a_recording_hud_step_decode: 'Decodificar',
  tool_remove_silence_from_a_recording_hud_step_detect: 'Detectar',
  tool_remove_silence_from_a_recording_hud_step_encode: 'Codificar',
  tool_remove_silence_from_a_recording_hud_title: 'Progresso de remover silêncios',
  tool_remove_silence_from_a_recording_hud_working: 'Começando…',
  tool_remove_silence_from_a_recording_keep: 'Manter em cada vão (segundos)',
  tool_remove_silence_from_a_recording_keep_hint: '0,15 s por padrão para o corte não pular. 0 remove o vão inteiro.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_remove_silence_from_a_recording_min_silence: 'Silêncio mínimo (segundos)',
  tool_remove_silence_from_a_recording_min_silence_hint: '0,5 s por padrão. Pausas mais curtas entre palavras ficam.',
  tool_remove_silence_from_a_recording_pause: 'Pausar',
  tool_remove_silence_from_a_recording_play: 'Reproduzir',
  tool_remove_silence_from_a_recording_preset_gentle: 'Suave',
  tool_remove_silence_from_a_recording_preset_hint: 'Fala é o início. Suave deixa mais pausas. Apertado corta mais.',
  tool_remove_silence_from_a_recording_preset_speech: 'Fala',
  tool_remove_silence_from_a_recording_preset_tight: 'Apertado',
  tool_remove_silence_from_a_recording_preview_hint: 'As faixas vermelhas são vãos longos o bastante para cortar. Reproduzir ouve o arquivo atual (ou o resultado).',
  tool_remove_silence_from_a_recording_remove: 'Remover silêncios',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}s → {next}s. Removidos {removed}s ({pct}%) em {gaps} vão(s). Pronto para exportar.',
  tool_remove_silence_from_a_recording_rules_body:
    'A cada ~50 ms mede-se RMS e passa a dB: levelDb = 20 × log10(rms). Um trecho abaixo do limiar e maior que o mínimo encolhe até a folga e a fala é concatenada. WAV é PCM 16 bits. MP3 é CBR na taxa escolhida.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'Fala: −40 dB, 0,5 s mínimo, 0,15 s de folga. Sala barulhenta: −30 dB / 0,8 s / 0,20 s. Estúdio: −50 dB / 0,4 s / 0,15 s.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'Limite no desktop: cerca de 40 MB ou 20 minutos; tela estreita: cerca de 20 MB ou 8 minutos. Acima disso recusa, sem cortar às escondidas.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'Os arquivos ficam no dispositivo, sem enviar ao servidor. O encoder MP3 carrega deste site só depois de Exportar MP3.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'A decodificação depende do navegador. DRM, alguns codecs e contêineres de vídeo falham com erro claro.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'Um arquivo. Sem ZIP, sem reduzir ruído, sem muletas, sem silenciar vídeo, sem YouTube.',
  tool_remove_silence_from_a_recording_rules_title: 'Regras que você deve esperar',
  tool_remove_silence_from_a_recording_sample: 'Carregar exemplo',
  tool_remove_silence_from_a_recording_status_done: 'Pronto.',
  tool_remove_silence_from_a_recording_threshold: 'Limiar de silêncio (dB)',
  tool_remove_silence_from_a_recording_threshold_hint: '−40 dB por padrão. Mais perto de 0 trata mais trechos como silêncio.',
  tool_remove_silence_from_a_recording_title: 'Remova os silêncios de uma gravação',
  tool_remove_silence_from_a_recording_usecase_1:
    'Tirar pausas longas de um podcast a duas vozes e ficar com um episódio mais curto.',
  tool_remove_silence_from_a_recording_usecase_2:
    'Encurtar a gravação de uma reunião sem fala e exportar um MP3.',
  tool_remove_silence_from_a_recording_usecase_3:
    'Limpar pausas de pensamento de um memo de voz e enviar um único arquivo.',
  tool_remove_silence_from_a_recording_usecases_title: 'Quando combina',
  tool_remove_silence_from_a_recording_why_choose_body:
    'Feita para um arquivo mais curto, com tabela de limiar e segundos removidos visíveis na página.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'Os vãos saem e a fala vira um arquivo; não baixa um ZIP de cortes.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'Os valores de fala (−40 dB / 0,5 s / 0,15 s) servem a voz; a linha de resultado mostra os segundos tirados.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'O arquivo fica nesta aba, sem enviar ao servidor; o encoder MP3 só carrega no clique.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'Arquivos grandes ou longos demais são recusados antes de decodificar, sem prometer 1 GB que derruba a aba.',
  tool_remove_silence_from_a_recording_why_choose_title: 'Por que usar Remova os silêncios de uma gravação',
};
export default pt;
