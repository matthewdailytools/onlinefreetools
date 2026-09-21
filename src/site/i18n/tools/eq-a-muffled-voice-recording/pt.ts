import type { SiteLangDict } from '../../../types';

/**
 * Portuguese copy for eq-a-muffled-voice-recording (S20).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ graves só / denoise / de-esser.
 */
const pt: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "Equalizar uma gravação de voz abafada",
  tool_eq_a_muffled_voice_recording_desc:
    "Abra uma voz abafada com presets Clarity, Warmth ou Presence de três bandas e baixe um WAV de 16 bits. Só no dispositivo.",
  tool_eq_a_muffled_voice_recording_description:
    "Equalize uma gravação de voz abafada com presets Clarity, Warmth ou Presence de três bandas. Passos: EQ, pré-visualizar, baixar WAV. Exemplo: carregue a amostra abafada. Só moldagem de tom—não é booster só de graves, nem redução de ruído, nem de-esser. O áudio fica no seu dispositivo; nunca é enviado.",
  tool_eq_a_muffled_voice_recording_article:
    "Chamadas, máscaras e micros distantes muitas vezes soam abafados: muita lama abaixo de algumas centenas de hertz e pouca clareza na faixa da fala. Esta página corre três estágios BiquadFilter no OfflineAudioContext—lowshelf, peaking e highshelf—como presets nomeados. Clarity corta lama e abre presença da fala; Warmth eleva o corpo e amolece agudos duros; Presence foca presença médio-aguda e ar. Isso é EQ tonal para voz abafada, não booster de uma banda só, não redução de ruído de fundo e não de-esser só de sibilância. Canais 1 ou 2. Guarde o master; o download é um novo WAV de 16 bits. O trabalho corre no navegador no seu dispositivo.",
  tool_eq_a_muffled_voice_recording_choose: "Escolher um ficheiro de áudio",
  tool_eq_a_muffled_voice_recording_hint: "Largue um WAV, MP3, M4A, AAC ou OGG. Máximo 40 MiB e 10 minutos; mono ou estéreo.",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "Baixar WAV",
  tool_eq_a_muffled_voice_recording_sample: "Carregar amostra",
  tool_eq_a_muffled_voice_recording_clear: "Limpar",
  tool_eq_a_muffled_voice_recording_advanced: "Presets EQ",
  tool_eq_a_muffled_voice_recording_preset_label: "Preset EQ de voz",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Clarity por defeito corta lama e abre a fala. Warmth dá corpo com agudos mais suaves. Presence eleva presença médio-aguda e ar. Proteção soft de pico evita clipping após boosts.",
  tool_eq_a_muffled_voice_recording_progress: "Progresso EQ",
  tool_eq_a_muffled_voice_recording_read: "Ler",
  tool_eq_a_muffled_voice_recording_decode: "Descodificar",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "Escrever",
  tool_eq_a_muffled_voice_recording_done: "Pronto. Pré-visualize o WAV equalizado e depois Baixar WAV.",
  tool_eq_a_muffled_voice_recording_failed: "EQ falhou. Tente um ficheiro de áudio menor e válido.",
  tool_eq_a_muffled_voice_recording_elapsed: "{s}s decorridos",
  tool_eq_a_muffled_voice_recording_preview: "Ouvir o WAV equalizado",
  tool_eq_a_muffled_voice_recording_result: "{seconds}s · {preset} · pico {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "demo-voz-abafada-dois-segundos",
  tool_eq_a_muffled_voice_recording_empty: "Escolha um ficheiro de áudio ou carregue a amostra primeiro.",
  tool_eq_a_muffled_voice_recording_err_file: "Largue exatamente um ficheiro de áudio.",
  tool_eq_a_muffled_voice_recording_err_format: "Áudio não suportado ou danificado. Use um ficheiro que o navegador possa descodificar (WAV, MP3, M4A, AAC ou OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "Use um ficheiro de no máximo 40 MiB ou 10 minutos, com um ou dois canais.",
  tool_eq_a_muffled_voice_recording_err_decode: "O navegador não conseguiu descodificar este áudio. Tente outra gravação válida.",
  tool_eq_a_muffled_voice_recording_err_encoder: "Não foi possível escrever o WAV equalizado. Verifique o preset e tente EQ de novo.",
  tool_eq_a_muffled_voice_recording_err_silence: "O nível é praticamente silêncio—nada a equalizar. Tente uma gravação com nível audível.",
  tool_eq_a_muffled_voice_recording_how_title: "Como equalizar uma gravação de voz abafada",
  tool_eq_a_muffled_voice_recording_how_body:
    "Escolha um preset de três bandas, remodelar o tom, ouça e baixe um WAV de 16 bits—sem enviar o ficheiro.",
  tool_eq_a_muffled_voice_recording_how_item_1: "Escolha um ficheiro de áudio, ou Carregar amostra para uma demo abafada de dois segundos.",
  tool_eq_a_muffled_voice_recording_how_item_2: "Abra Presets EQ e escolha Clarity (predefinição), Warmth ou Presence.",
  tool_eq_a_muffled_voice_recording_how_item_3: "Clique em EQ e aguarde Ler → Descodificar → EQ → Escrever.",
  tool_eq_a_muffled_voice_recording_how_item_4: "Pré-visualize o resultado, confira preset e picos, depois Baixar WAV.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "Por que escolher as nossas ferramentas Equalizar uma gravação de voz abafada",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "Veja nome do preset, pico antes/depois e KiB de saída antes de guardar.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "Três presets de voz claros—um trabalho de EQ abafado, não um brinquedo de dez bandas nem só graves.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "Descodificação, EQ Biquad e escrita WAV correm no seu dispositivo; a página não envia a gravação para processar.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "Mudar o preset ou a entrada limpa o download antigo para não guardar um WAV obsoleto.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity, Warmth, Presence e limites",
  tool_eq_a_muffled_voice_recording_rules_body:
    "Cada preset são três estágios Biquad (lowshelf, peaking, highshelf). Clarity abre fala abafada; Warmth dá corpo; Presence eleva presença e ar. Proteção soft de pico escala se os boosts clipassem.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Clarity por defeito corta graves lamacentos e eleva clareza da fala. Warmth eleva corpo grave e amolece agudos duros. Presence foca presença médio-aguda.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "Só EQ tonal. Não remove ruído de ventilador, não boost só de graves e não mira sibilância como um de-esser.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "A exportação mantém 1 ou 2 canais. Etiquetas não são copiadas. O original nunca é sobrescrito.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "Um ficheiro até 40 MiB e dez minutos. A proteção soft de pico pode reduzir o nível geral após boosts fortes para o WAV ficar abaixo da escala plena digital.",
  tool_eq_a_muffled_voice_recording_example_title: "Experimente um EQ real de voz abafada",
  tool_eq_a_muffled_voice_recording_example:
    "Carregar amostra cria um tom abafado de dois segundos com graves fortes e agudos fracos, depois EQ em Clarity automaticamente. A reprodução não começa sozinha—prima play na pré-visualização se quiser ouvir o resultado mais claro.",
  tool_eq_a_muffled_voice_recording_usecases_title: "Quando isto ajuda",
  tool_eq_a_muffled_voice_recording_usecase_1: "Uma take de telefone ou máscara que soa encaixotada—escolha Clarity, EQ, baixe WAV.",
  tool_eq_a_muffled_voice_recording_usecase_2: "Uma voz de podcast precisa de corpo mais quente ou mais presença sem abrir um EQ DAW completo.",
  tool_eq_a_muffled_voice_recording_faq_q1: "Isto é o mesmo que um booster de graves?",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "Não. Um booster de graves eleva sobretudo frequências baixas. Esta página oferece três presets de voz multibanda para fala abafada. Boost só de graves é outro trabalho (Boost bass on an MP3 quando disponível).",
  tool_eq_a_muffled_voice_recording_faq_q2: "Isto remove ruído de fundo?",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "Não. O EQ remodela o tom; não suprime ventiladores, chiado ou ruído de sala. Para denoise use uma ferramenta de redução de ruído quando disponível.",
  tool_eq_a_muffled_voice_recording_faq_q3: "Isto é um de-esser?",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "Não. Um de-esser mira sibilância dura (S/Sh). Estes presets moldam o tom abafado geral em graves, médios e agudos. Use uma ferramenta de-esser quando disponível.",
  tool_eq_a_muffled_voice_recording_faq_q4: "O que fazem Clarity, Warmth e Presence?",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity corta lama e abre a fala. Warmth adiciona corpo grave e amolece agudos duros. Presence eleva presença médio-aguda e ar. Proteção soft de pico evita clipping após boosts.",
  tool_eq_a_muffled_voice_recording_faq_q5: "E se o EQ deixar o ficheiro mais quente?",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "Após a cadeia de filtros, a proteção soft de pico escala o buffer se os picos excederem cerca de −0,2 dBFS, para o WAV ficar seguro. Para limitação dedicada de picos, use Limitar picos para que um arquivo não clippe.",
  tool_eq_a_muffled_voice_recording_faq_q6: "O meu áudio é enviado para um servidor?",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "Não. Descodificação, EQ e escrita WAV correm no navegador no seu dispositivo. A página precisa de rede no primeiro carregamento; offline não é garantido. Para dinâmica após o EQ, use Comprimir a faixa dinâmica de uma gravação de voz ou Limitar picos para que um arquivo não clippe.",
};
export default pt;
