import type { SiteLangDict } from '../../../types';

/**
 * Portuguese copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const pt: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "Reduzir o ruído de fundo de um memo de voz",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "Abaixe o chiado estável de ventilador ou ar-condicionado num memo com Light, Medium ou Strong (passa-alta + gate de piso de ruído) e baixe um WAV de 16 bits. Só aproximação no dispositivo.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "Reduza o ruído de fundo de um memo de voz com presets Light, Medium ou Strong: passa-alta mais gate no piso de ruído. Passos: Reduzir ruído, pré-ouvir, baixar WAV. Exemplo: carregue a amostra com chiado. Aprox. do navegador—não é Adobe Enhance Speech, não é dehum 50/60 Hz, não é EQ de voz abafada. O áudio fica no dispositivo; nunca é enviado.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "Memos de voz costumam carregar chiado estável de ventilador, ar-condicionado ou sala. Esta página aplica passa-alta, estima o piso de ruído em quadros quietos e atenua suavemente perto desse piso. Light, Medium e Strong mudam a agressividade. Aproximação honesta no navegador—não Enhance na nuvem, não entalhe de zumbido elétrico, não EQ de três bandas. Música pode ficar opaca. Canais 1 ou 2. Guarde o original; o download é um novo WAV de 16 bits. Processamento no dispositivo.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "Escolher um arquivo de áudio",
  tool_reduce_background_noise_on_a_voice_memo_hint: "Solte um WAV, MP3, M4A, AAC ou OGG. Máximo 40 MiB e 10 minutos; mono ou estéreo.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "Reduzir ruído",
  tool_reduce_background_noise_on_a_voice_memo_download: "Baixar WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "Carregar amostra",
  tool_reduce_background_noise_on_a_voice_memo_clear: "Limpar",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "Força da redução",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "Intensidade da redução de ruído",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "Light",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "Medium",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "Strong",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "Medium equilibra fala e chiado. Light é mais suave. Strong atenua mais os trechos quietos e pode afinar consoantes. Passa-alta + gate—não Enhance por ML.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "Progresso da redução",
  tool_reduce_background_noise_on_a_voice_memo_read: "Ler",
  tool_reduce_background_noise_on_a_voice_memo_decode: "Decodificar",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "Reduzir ruído",
  tool_reduce_background_noise_on_a_voice_memo_write: "Escrever",
  tool_reduce_background_noise_on_a_voice_memo_done: "Pronto. Pré-ouça o WAV e baixe.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "Falha na redução. Tente um áudio válido menor.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "{s}s decorridos",
  tool_reduce_background_noise_on_a_voice_memo_preview: "Ouvir o WAV reduzido",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds}s · {preset} · piso {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "demo-memo-com-chiado-tres-segundos",
  tool_reduce_background_noise_on_a_voice_memo_empty: "Escolha um áudio ou carregue a amostra primeiro.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "Solte exatamente um arquivo de áudio.",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "Áudio incompatível ou danificado. Use WAV, MP3, M4A, AAC ou OGG.",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "No máximo 40 MiB ou 10 minutos, com um ou dois canais.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "O navegador não conseguiu decodificar este áudio.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "Não foi possível escrever o WAV. Verifique a intensidade e tente de novo.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "Nível quase silêncio—nada a reduzir. Use uma gravação audível.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "Como reduzir o ruído de fundo de um memo de voz",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "Escolha a intensidade, rode passa-alta e gate, ouça e baixe um WAV de 16 bits—sem enviar o arquivo.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "Escolha um áudio ou Carregar amostra (demo de três segundos com chiado).",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "Abra Força e escolha Light, Medium (padrão) ou Strong.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "Clique Reduzir ruído e aguarde Ler → Decodificar → Reduzir ruído → Escrever.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "Pré-ouça, confira a linha de resultado e Baixar WAV.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "Por que escolher nossas ferramentas Reduzir o ruído de fundo de um memo de voz",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "Veja intensidade, piso estimado e KiB de saída antes de salvar.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "Três intensidades claras—um único job de denoise, não um DAW nem Enhance na nuvem.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "Decodificação, passa-alta, gate e WAV rodam no dispositivo; a gravação não é enviada.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "Mudar intensidade ou entrada limpa o download antigo.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "Intensidade, piso de ruído e limites honestos do navegador",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "Cada intensidade: passa-alta, estima o piso em trechos quietos e faz gate suave. Chiado estável melhora mais; consoantes e música podem afinar.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "Light, Medium e Strong mudam o corte da passa-alta e o ganho residual. Padrão: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "Aproximação do navegador. Não é Adobe Enhance Speech, nem dehum 50/60 Hz, nem EQ de voz abafada.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "Canais 1 ou 2. Tags não são copiadas. O original nunca é sobrescrito.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "Um arquivo até 40 MiB e dez minutos. Strong pode deixar artefatos; se soar oco, volte a Light ou Medium.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "Experimente um memo com chiado",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "Carregar amostra cria três segundos de tom tipo fala sob chiado e aplica Medium automaticamente. A reprodução não começa sozinha—pressione play na prévia.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "Quando ajuda",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "Memo do telefone com ventilador ou AC—escolha Medium, reduza, baixe WAV.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "Nota rápida que precisa de menos chiado antes de fades ou EQ em outro lugar.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "É o mesmo que Adobe Enhance Speech?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "Não. Enhance na nuvem reconstrói a fala com modelos grandes. Aqui só passa-alta e gate de piso no navegador—resultado modesto e honesto.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "Remove zumbido elétrico 50/60 Hz?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "Não como dehum dedicado. Melhora sobretudo o chiado de banda larga. Para um notch estreito de 50/60 Hz use Remover o zumbido da rede de uma gravação.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "É o mesmo que EQ a muffled voice recording?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "Não. Aquela página muda o tom. Esta reduz ruído de fundo estável. Depois do denoise, use EQ a muffled voice recording para o timbre.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "Strong pode estragar fala ou música?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "Sim. Strong atenua mais trechos quietos e pode afinar consoantes. Prefira Medium; use Light se a fala já for suave.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "O que Light, Medium e Strong mudam?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "Sobem um pouco o corte da passa-alta e baixam o ganho residual perto do piso estimado. Padrão: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "Meu áudio é enviado a um servidor?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "Não. Decodificação, redução e WAV rodam no navegador. Rede necessária no primeiro carregamento; offline não é garantido. Para bordas suaves use Fade in and fade out an audio clip; para tom abafado, EQ a muffled voice recording.",
};
export default pt;
