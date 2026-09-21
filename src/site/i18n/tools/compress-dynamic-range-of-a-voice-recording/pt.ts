import type { SiteLangDict } from '../../../types';

/**
 * Portuguese copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const pt: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "Comprimir a faixa dinâmica de uma gravação de voz",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    "Suavize picos de voz com presets suave/médio/forte e makeup opcional; baixe WAV de 16 bits. Só no dispositivo.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    
    "Comprima a faixa dinâmica de uma gravação de voz com presets suave, médio ou forte e makeup opcional. Passos: comprimir, pré-ouvir, baixar WAV. Exemplo: carregue a amostra irregular. Remodela dinâmica—não comprimir tamanho MP3, não ganho dB fixo, não normalizar pico nem LUFS. O áudio fica no dispositivo; nunca é enviado.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    
    "Tomas de voz costumam saltar de sussurros a picos. Esta página usa um compressor de envelope de pico em JavaScript puro: suave/médio com soft knee, forte com hard knee (suave ≈ −18 dB / 2:1, médio ≈ −24 / 3:1 padrão, forte ≈ −30 / 6:1). Makeup opcional restaura o nível geral após domar picos, com proteção suave antes do WAV 16 bits. Isso é compressão de faixa dinâmica, não encolher MP3 por bytes, não ganho fixo, não normalizar pico nem igualar LUFS. 1 ou 2 canais. Guarde o master; o download é novo.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "Escolher um ficheiro de áudio",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "Largue um WAV, MP3, M4A, AAC ou OGG. Máximo 40 MiB e 10 minutos; mono ou estéreo.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "Comprimir",
  tool_compress_dynamic_range_of_a_voice_recording_download: "Baixar WAV",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "Carregar amostra",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "Limpar",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "Definições do compressor",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "Preset de intensidade",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "Suave",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "Médio",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "Forte",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "Ganho makeup",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "Ligado",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "Desligado",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    
    "Suave (−18 dB, 2:1, soft knee) é leve. Médio (−24 dB, 3:1) serve para muitas vozes. Forte (−30 dB, 6:1, hard knee) aperta mais. Makeup (Ligado por padrão) restaura o nível após comprimir com proteção de pico.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "Progresso da compressão",
  tool_compress_dynamic_range_of_a_voice_recording_read: "Ler",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "Descodificar",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "Comprimir",
  tool_compress_dynamic_range_of_a_voice_recording_write: "Escrever",
  tool_compress_dynamic_range_of_a_voice_recording_done: "Pronto. Pré-ouça o WAV comprimido e baixe.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "A compressão falhou. Tente um áudio válido menor.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "{s}s decorridos",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "Ouvir o WAV comprimido",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds}s · {preset} · makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "demo-voz-dinamica-dois-segundos",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "Escolha um áudio ou carregue a amostra primeiro.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "Largue exatamente um ficheiro de áudio.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format:
    "Áudio não suportado ou danificado. Use um ficheiro que o browser possa descodificar (WAV, MP3, M4A, AAC ou OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "Use um ficheiro com no máximo 40 MiB ou 10 minutos, com um ou dois canais.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "O browser não conseguiu descodificar este áudio. Tente outra gravação válida.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "Não foi possível escrever o WAV comprimido. Verifique preset e makeup e tente Comprimir de novo.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "O nível é essencialmente silêncio—nada a comprimir.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "Como comprimir a faixa dinâmica de uma gravação de voz",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    
    "Escolha um preset de intensidade, ative makeup se quiser, comprima, ouça e baixe um WAV 16 bits—sem enviar o ficheiro.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "Escolha uma gravação de voz, ou Carregar amostra para um tom de dois segundos com alta dinâmica.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    
    "Abra as definições e escolha Suave, Médio (padrão) ou Forte; deixe Makeup Ligado salvo se só quiser controlar picos.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "Clique Comprimir e aguarde Ler → Descodificar → Comprimir → Escrever.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "Pré-ouça, confira preset/limiar/ratio/makeup e picos, depois Baixar WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "Porque escolher as nossas ferramentas de compressão de faixa dinâmica",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "Veja preset, limiar, ratio, makeup, picos e KiB de saída antes de guardar.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "Três presets claros de voz—um trabalho de dinâmica, não um muro de tamanho MP3/ganho/normalizar.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "Descodificação, compressão e WAV correm no dispositivo; a página não envia a gravação.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "Mudar preset, makeup ou entrada limpa o download antigo para não guardar um WAV obsoleto.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "Limiar, ratio, makeup e limites",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    
    "Um compressor de envelope reduz o ganho acima do limiar segundo o ratio (soft knee em Suave/Médio; hard knee em Forte). Makeup multiplica depois; proteção suave mantém amostras sob ~0,99. Remodela alto vs suave—diferente de ganho fixo, normalizar pico, LUFS ou reduzir bitrate MP3.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    
    "Médio (−24 dB, 3:1, soft knee) é o padrão. Suave é mais leve; Forte usa limiar mais baixo, ratio mais alto e hard knee.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2:
    
    "Makeup por padrão Ligado restaura o nível após domar picos. Desligado se só quiser picos mais baixos sem elevação.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "A exportação mantém 1 ou 2 canais. Etiquetas não são copiadas. O original nunca é sobrescrito.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4:
    "Um ficheiro até 40 MiB e dez minutos. Não é compressão de tamanho MP3, nem ganho fixo, nem normalizar pico, nem igualar LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "Experimente uma compressão real de faixa dinâmica",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    
    "Carregar amostra cria um tom 440 Hz de dois segundos com rajadas altas e suaves, depois Comprimir em Médio com Makeup Ligado automaticamente. A reprodução não começa sozinha—prima play na pré-visualização.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "Quando isto ajuda",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "Uma voice-over que salta de frases quietas a picos altos—escolha Podcast, comprima, baixe WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "Uma entrevista que quer mais uniforme antes de igualar loudness, sem encolher um MP3 por tamanho.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_3: "Sussurros e picos lutam na mesma take e quer nível de escuta mais uniforme.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "É o mesmo que comprimir / reduzir o tamanho de um MP3?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "Não. Aqui “comprimir” é faixa dinâmica (limiar/ratio), não bitrate ou bytes. Para MP3 menores use Reduce an MP3 file size. Em chinês: 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "É o mesmo que tornar uma gravação baixa mais alta com ganho dB fixo?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "Não. Ganho fixo multiplica o clip inteiro. Aqui as partes altas são mais reduzidas. Para boost uniforme use Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "É normalizar ao pico ou igualar LUFS de podcast?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "Não. Pico mira dBFS; LUFS mira loudness integrado. Esta página remodela dinâmica com um compressor. Use Normalize an audio file to peak ou Match podcast loudness to −16 LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "O que mudam Suave, Médio e Forte?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4:
    
    "Definem limiar, ratio e knee. Suave ≈ −18 / 2:1 soft; Médio ≈ −24 / 3:1 soft; Forte ≈ −30 / 6:1 hard. Makeup Ligado/Desligado é separado.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "Devo deixar Makeup Ligado?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    
    "Em geral sim—a compressão pode baixar a média; o makeup restaura com proteção de pico. Escolha Desligado para picos mais baixos apenas.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "O meu áudio é enviado para um servidor?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "Não. Descodificação, compressão e WAV correm no browser no dispositivo. É preciso rede no primeiro carregamento; offline não é garantido. Para loudness ou ganho: Match podcast loudness to −16 LUFS ou Make a quiet recording louder.",
};
export default pt;
