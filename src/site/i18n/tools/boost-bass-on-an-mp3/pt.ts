import type { SiteLangDict } from '../../../types';

/**
 * Portuguese copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const pt: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "Aumentar os graves de um MP3",
  tool_boost_bass_on_an_mp3_desc:
    "Engrosse graves finos com presets Mild, Medium ou Strong de low-shelf e baixe um WAV de 16 bits. Só no dispositivo.",
  tool_boost_bass_on_an_mp3_description:
    "Aumentar os graves de um MP3 com presets Mild, Medium ou Strong de low-shelf. Passos: aumentar, pré-ouvir, baixar WAV. Exemplo: carregue a amostra de graves finos. Só graves em low-shelf—não um equalizador multibanda completo nem um aumentador de volume do arquivo inteiro. O áudio fica no seu dispositivo; nunca é enviado.",
  tool_boost_bass_on_an_mp3_article:
    "Exportações do telemóvel e altifalantes de portátil costumam deixar kick e baixo finos: médios a mais, peso a menos abaixo de ~100 Hz. Esta página corre uma etapa BiquadFilter lowshelf no OfflineAudioContext. Mild é suave; Medium (predefinição) o realce do dia a dia; Strong empurra mais. A proteção suave de picos escala se o boost clipasse. Isso é boost de graves—não o EQ de três bandas Clarity/Warmth/Presence para voz abafada, nem ganho dB plano em tudo. Canais 1 ou 2. Guarde o master; o download é um novo WAV de 16 bits. O trabalho corre no browser.",
  tool_boost_bass_on_an_mp3_choose: "Escolher um ficheiro de áudio",
  tool_boost_bass_on_an_mp3_hint: "Largue um WAV, MP3, M4A, AAC ou OGG. Máximo 40 MiB e 10 minutos; mono ou estéreo.",
  tool_boost_bass_on_an_mp3_convert: "Aumentar",
  tool_boost_bass_on_an_mp3_download: "Baixar WAV",
  tool_boost_bass_on_an_mp3_sample: "Carregar amostra",
  tool_boost_bass_on_an_mp3_clear: "Limpar",
  tool_boost_bass_on_an_mp3_advanced: "Presets de graves",
  tool_boost_bass_on_an_mp3_preset_label: "Preset de graves low-shelf",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "Medium (predefinição) sobe graves perto de 90 Hz. Mild é mais suave; Strong mais pesado. A proteção de picos evita clipping após o boost.",
  tool_boost_bass_on_an_mp3_progress: "Progresso do boost de graves",
  tool_boost_bass_on_an_mp3_read: "Ler",
  tool_boost_bass_on_an_mp3_decode: "Descodificar",
  tool_boost_bass_on_an_mp3_boost: "Aumentar",
  tool_boost_bass_on_an_mp3_write: "Escrever",
  tool_boost_bass_on_an_mp3_done: "Pronto. Pré-ouça o WAV com mais graves e baixe o WAV.",
  tool_boost_bass_on_an_mp3_failed: "Falha no boost de graves. Tente um ficheiro de áudio válido menor.",
  tool_boost_bass_on_an_mp3_elapsed: "{s}s decorridos",
  tool_boost_bass_on_an_mp3_preview: "Ouvir o WAV com graves aumentados",
  tool_boost_bass_on_an_mp3_result: "{seconds}s · {preset} · pico {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "demo-graves-finos-dois-segundos",
  tool_boost_bass_on_an_mp3_empty: "Escolha um ficheiro de áudio ou carregue a amostra primeiro.",
  tool_boost_bass_on_an_mp3_err_file: "Largue exatamente um ficheiro de áudio.",
  tool_boost_bass_on_an_mp3_err_format: "Áudio não suportado ou danificado. Use um ficheiro que o browser decodifique (WAV, MP3, M4A, AAC ou OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "Use um ficheiro de no máximo 40 MiB ou 10 minutos, com um ou dois canais.",
  tool_boost_bass_on_an_mp3_err_decode: "O browser não conseguiu descodificar este áudio. Tente outra gravação válida.",
  tool_boost_bass_on_an_mp3_err_encoder: "Não foi possível escrever o WAV aumentado. Verifique o preset e tente de novo.",
  tool_boost_bass_on_an_mp3_err_silence: "O nível é quase silêncio—nada a aumentar. Use uma gravação audível.",
  tool_boost_bass_on_an_mp3_how_title: "Como aumentar os graves de um MP3",
  tool_boost_bass_on_an_mp3_how_body:
    "Escolha um preset low-shelf, suba os graves, ouça e baixe um WAV de 16 bits—sem enviar o ficheiro.",
  tool_boost_bass_on_an_mp3_how_item_1: "Escolha um ficheiro de áudio, ou Carregar amostra para uma demo de graves finos de dois segundos.",
  tool_boost_bass_on_an_mp3_how_item_2: "Abra Presets de graves e escolha Mild, Medium (predefinição) ou Strong.",
  tool_boost_bass_on_an_mp3_how_item_3: "Clique Aumentar e aguarde Ler → Descodificar → Aumentar → Escrever.",
  tool_boost_bass_on_an_mp3_how_item_4: "Pré-ouça o resultado, confira preset e picos, depois Baixar WAV.",
  tool_boost_bass_on_an_mp3_why_choose_title: "Por que escolher as nossas ferramentas para aumentar graves de um MP3",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "Veja o nome do preset, picos antes/depois e KiB de saída antes de guardar.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "Três presets low-shelf claros—um só trabalho de graves, não um EQ de dez bandas nem um muro de volume.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "Descodificação, boost lowshelf e escrita WAV correm no dispositivo; a página não envia o áudio.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "Mudar o preset ou a entrada limpa o download antigo para não guardar um WAV obsoleto.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild, Medium, Strong e limites",
  tool_boost_bass_on_an_mp3_rules_body:
    "Cada preset é uma etapa lowshelf Biquad. Mild é suave; Medium o realce do dia a dia; Strong mais pesado. Proteção de picos se o boost clipasse.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Medium (predefinição) usa lowshelf perto de 90 Hz a cerca de +8 dB. Mild ~+4 dB; Strong ~+12 dB com shelf um pouco mais baixo.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "Só graves low-shelf. Não remodela médios/agudos como um EQ de voz abafada, nem amplifica todas as frequências como um volume booster.",
  tool_boost_bass_on_an_mp3_rules_item_3: "A exportação mantém 1 ou 2 canais. Etiquetas não são copiadas. O original não é sobrescrito.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "Um ficheiro até 40 MiB e dez minutos. Após Strong, a proteção pode baixar o nível global para o WAV ficar abaixo da escala completa.",
  tool_boost_bass_on_an_mp3_example_title: "Experimente um boost de graves real",
  tool_boost_bass_on_an_mp3_example:
    "Carregar amostra cria um tom de dois segundos com médios fortes e graves fracos, depois aumenta em Medium automaticamente. A reprodução não começa sozinha—prima play na pré-visualização se quiser ouvir o resultado mais pesado.",
  tool_boost_bass_on_an_mp3_usecases_title: "Quando ajuda",
  tool_boost_bass_on_an_mp3_usecase_1: "Um MP3 exportado que soa fino nos altifalantes—escolha Medium, Aumentar, baixe WAV.",
  tool_boost_bass_on_an_mp3_usecase_2: "Uma faixa que precisa de mais peso de kick sem abrir um EQ gráfico completo nem deixar a mistura toda mais alta.",
  tool_boost_bass_on_an_mp3_faq_q1: "É o mesmo que equalizar uma gravação de voz abafada?",
  tool_boost_bass_on_an_mp3_faq_a1:
    "Não. Essa página usa presets Clarity/Warmth/Presence de três bandas para fala abafada. Esta só sobe graves com lowshelf. Para EQ de voz abafada, use Equalizar uma gravação de voz abafada.",
  tool_boost_bass_on_an_mp3_faq_q2: "É o mesmo que tornar uma gravação silenciosa mais alta?",
  tool_boost_bass_on_an_mp3_faq_a2:
    "Não. Um aumentador de volume escala cada amostra com o mesmo ganho em dB. Esta página só faz shelf nos graves. Para ganho do ficheiro inteiro, use Tornar uma gravação silenciosa mais alta.",
  tool_boost_bass_on_an_mp3_faq_q3: "O que fazem Mild, Medium e Strong?",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mild é um lowshelf suave. Medium (predefinição) é o realce quotidiano. Strong é um shelf mais pesado. A proteção de picos evita clipping após o boost.",
  tool_boost_bass_on_an_mp3_faq_q4: "E se Aumentar aquecer o ficheiro?",
  tool_boost_bass_on_an_mp3_faq_a4:
    "Após o lowshelf, se os picos ultrapassassem cerca de −0,2 dBFS, a proteção escala o buffer. Para limitação dedicada, use Limitar picos para que um ficheiro não clippe.",
  tool_boost_bass_on_an_mp3_faq_q5: "O meu áudio é enviado para um servidor?",
  tool_boost_bass_on_an_mp3_faq_a5:
    "Não. Descodificação, boost de graves e escrita WAV correm no browser. É precisa rede ao carregar a página; o modo offline não é garantido.",
  tool_boost_bass_on_an_mp3_faq_q6: "Só MP3, ou também WAV e M4A?",
  tool_boost_bass_on_an_mp3_faq_a6:
    "Qualquer formato que o browser descodifique—WAV, MP3, M4A, AAC ou OGG. O título usa a pesquisa habitual de MP3; a exportação é sempre um novo WAV de 16 bits.",
};
export default pt;
