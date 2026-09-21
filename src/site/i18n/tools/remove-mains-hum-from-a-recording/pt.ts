import type { SiteLangDict } from '../../../types';

/**
 * Portuguese copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const pt: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "Remover o zumbido da rede de uma gravação",
  tool_remove_mains_hum_from_a_recording_desc:
    "Corte zumbido elétrico de 50 ou 60 Hz com filtros notch e harmônicos opcionais; depois baixe um WAV de 16 bits. Só no dispositivo.",
  tool_remove_mains_hum_from_a_recording_description:
    "Remova o zumbido da rede de uma gravação com filtros notch de 50 ou 60 Hz e harmônicos 2.º–5.º opcionais. Passos: Remover zumbido, pré-ouvir, baixar WAV. Exemplo: carregue a amostra com zumbido. Notches estreitos para zumbido elétrico—não denoise de banda larga, não declick, não EQ de voz abafada. O áudio fica no seu dispositivo; nunca é enviado.",
  tool_remove_mains_hum_from_a_recording_article: "Gravações perto de fontes, dimmers ou equipamentos mal aterrados costumam captar um zumbido estável de 50 ou 60 Hz, às vezes com harmônicos. Esta página encadeia estágios notch EQ filter no on-device audio processing no fundamental escolhido e, opcionalmente, nos 2.º a 5.º harmônicos abaixo de Nyquist. Mira tons elétricos estreitos—não denoise de chiado de ventilador, não reparo de cliques e não EQ de três bandas para voz abafada. O grave perto do notch pode afinizar um pouco. Os canais permanecem 1 ou 2. Guarde o original; o download é um novo WAV de 16 bits. O trabalho roda no navegador no seu dispositivo.",
  tool_remove_mains_hum_from_a_recording_choose: "Escolher um arquivo de áudio",
  tool_remove_mains_hum_from_a_recording_hint: "Solte um WAV, MP3, M4A, AAC ou OGG. Máximo 40 MiB e 10 minutos; mono ou estéreo.",
  tool_remove_mains_hum_from_a_recording_convert: "Remover zumbido",
  tool_remove_mains_hum_from_a_recording_download: "Baixar WAV",
  tool_remove_mains_hum_from_a_recording_sample: "Carregar amostra",
  tool_remove_mains_hum_from_a_recording_clear: "Limpar",
  tool_remove_mains_hum_from_a_recording_advanced: "Frequência da rede e harmônicos",
  tool_remove_mains_hum_from_a_recording_hz_label: "Frequência da rede",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "Harmônicos",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "Só fundamental",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "Incluir harmônicos",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "O padrão 50 Hz com harmônicos aplica notch no fundamental e nos 2.º–5.º abaixo de Nyquist. Escolha 60 Hz para a América do Norte e redes semelhantes. Só fundamental é mais suave no grave próximo.",
  tool_remove_mains_hum_from_a_recording_progress: "Progresso de remover zumbido",
  tool_remove_mains_hum_from_a_recording_read: "Ler",
  tool_remove_mains_hum_from_a_recording_decode: "Decodificar",
  tool_remove_mains_hum_from_a_recording_dehum: "Remover zumbido",
  tool_remove_mains_hum_from_a_recording_write: "Escrever",
  tool_remove_mains_hum_from_a_recording_done: "Pronto. Pré-ouça o WAV sem zumbido e baixe o WAV.",
  tool_remove_mains_hum_from_a_recording_failed: "Falha ao remover o zumbido. Tente um arquivo de áudio válido menor.",
  tool_remove_mains_hum_from_a_recording_elapsed: "{s}s decorridos",
  tool_remove_mains_hum_from_a_recording_preview: "Ouvir o WAV sem zumbido",
  tool_remove_mains_hum_from_a_recording_result: "{seconds}s · {hz} Hz · {harmonics} · {notches} notches · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "demo-zumbido-rede-tres-segundos",
  tool_remove_mains_hum_from_a_recording_empty: "Escolha um arquivo de áudio ou carregue a amostra primeiro.",
  tool_remove_mains_hum_from_a_recording_err_file: "Solte exatamente um arquivo de áudio.",
  tool_remove_mains_hum_from_a_recording_err_format: "Áudio não suportado ou danificado. Use um arquivo que o navegador possa decodificar (WAV, MP3, M4A, AAC ou OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit: "Use um arquivo de no máximo 40 MiB ou 10 minutos, com um ou dois canais.",
  tool_remove_mains_hum_from_a_recording_err_decode: "O navegador não pôde decodificar este áudio. Tente outra gravação válida.",
  tool_remove_mains_hum_from_a_recording_err_encoder: "Não foi possível escrever o WAV sem zumbido. Verifique frequência e harmônicos e tente Remover zumbido de novo.",
  tool_remove_mains_hum_from_a_recording_err_silence: "O nível é essencialmente silêncio—nada a limpar. Tente uma gravação com nível audível.",
  tool_remove_mains_hum_from_a_recording_how_title: "Como remover o zumbido da rede de uma gravação",
  tool_remove_mains_hum_from_a_recording_how_body:
    "Escolha 50 ou 60 Hz, decida os harmônicos, rode os notches, ouça e baixe um WAV de 16 bits—sem enviar o arquivo.",
  tool_remove_mains_hum_from_a_recording_how_item_1: "Escolha um arquivo de áudio, ou selecione Carregar amostra para uma demonstração de três segundos com zumbido.",
  tool_remove_mains_hum_from_a_recording_how_item_2: "Abra Frequência da rede e harmônicos: escolha 50 ou 60 Hz, depois Só fundamental ou Incluir harmônicos.",
  tool_remove_mains_hum_from_a_recording_how_item_3: "Clique em Remover zumbido e aguarde Ler → Decodificar → Remover zumbido → Escrever.",
  tool_remove_mains_hum_from_a_recording_how_item_4: "Pré-ouça o fundo elétrico mais quieto, confira a linha de resultado e baixe o WAV.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "Por que escolher nossas ferramentas Remover o zumbido da rede de uma gravação",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "Veja Hz da rede, modo de harmônicos, contagem de notches e KiB de saída antes de salvar.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "Um trabalho claro de dehum—notches 50/60 Hz com harmônicos opcionais, não um rack DAW enterrado.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "Decodificação, filtragem notch e escrita WAV rodam no seu dispositivo; a página não envia a gravação para processar.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "Mudar frequência, harmônicos ou a entrada limpa o download antigo para você não salvar um WAV velho.",
  tool_remove_mains_hum_from_a_recording_rules_title: "Frequência notch, harmônicos e limites honestos do navegador",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "Cada execução encadeia filtros notch estreitos no fundamental escolhido e, se ativado, harmônicos 2–5 abaixo de Nyquist. Tons reais da rede melhoram mais; chiado de banda larga precisa de denoise em outro lugar. Proteção de pico suave mantém o WAV abaixo da escala cheia.",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 Hz ou 60 Hz definem o fundamental. Incluir harmônicos adiciona notches em 2×–5× abaixo de Nyquist. Padrão: 50 Hz com harmônicos.",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "É uma cadeia notch do navegador. Não é denoise de banda larga, não repara cliques e não é EQ de voz abafada.",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "A exportação mantém 1 ou 2 canais. Tags não são copiadas. O arquivo original nunca é sobrescrito.",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "Um arquivo de até 40 MiB e dez minutos. O grave perto do notch pode afinizar; se soar oco, tente Só fundamental.",
  tool_remove_mains_hum_from_a_recording_example_title: "Experimente um clipe com zumbido real",
  tool_remove_mains_hum_from_a_recording_example:
    "Carregar amostra cria um tom semelhante à fala de três segundos sob zumbido de 50 Hz mais harmônicos, depois Remover zumbido a 50 Hz com harmônicos automaticamente. A reprodução nunca começa sozinha—pressione play na prévia se quiser ouvir o fundo mais quieto.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "Quando isso ajuda",
  tool_remove_mains_hum_from_a_recording_usecase_1: "Uma nota de voz com zumbido elétrico estável de carregador ou dimmer—escolha os Hz da sua rede, Remover zumbido, baixe WAV.",
  tool_remove_mains_hum_from_a_recording_usecase_2: "Uma gravação de campo que precisa tirar o tom da rede antes de denoise de chiado ou EQ de voz abafada em outro lugar.",
  tool_remove_mains_hum_from_a_recording_usecase_3: "Ouve-se um zumbido de 50/60 Hz da corrente sob a take.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "É o mesmo que reduzir o ruído de fundo de um memo de voz?",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "Não. Aquela página aplica passa-alta e gate ao chiado estável de ventilador ou ar-condicionado. Esta página aplica notch a tons elétricos estreitos de 50/60 Hz. Use Reduzir o ruído de fundo de um memo de voz para chiado de banda larga.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "Isso remove cliques e pops?",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "Não. Cliques, pops de boca e crepitação de vinil precisam de um trabalho de declick. Esta página só aplica notch no fundamental da rede e harmônicos opcionais.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "É o mesmo que EQ a muffled voice recording?",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "Não. Aquela página remodela o tom com Clarity, Warmth ou Presence. Esta página remove zumbido elétrico. Para tom abafado após o dehum, use EQ a muffled voice recording.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "Devo escolher 50 Hz ou 60 Hz?",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "Combine com sua rede elétrica. Grande parte da Europa, Ásia, África e Austrália usa 50 Hz. América do Norte e partes do Japão e América do Sul usam 60 Hz. Hz errados deixam o zumbido quase intacto.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "O que faz Incluir harmônicos?",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "Adiciona notches em duas a cinco vezes o fundamental quando essas frequências estão abaixo de Nyquist. O zumbido costuma ter harmônicos; Só fundamental é mais suave no grave próximo.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "Meu áudio é enviado a um servidor?",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "Não. Decodificação, filtragem notch e escrita WAV rodam no navegador no seu dispositivo. A página precisa de rede no primeiro carregamento; disponibilidade offline não é garantida. Para chiado de banda larga use Reduzir o ruído de fundo de um memo de voz; para tom abafado use EQ a muffled voice recording.",
};
export default pt;
