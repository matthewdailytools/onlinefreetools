import type { SiteLangDict } from '../../../types';

/**
 * Portuguese copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const pt: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "Aplicar fade in e fade out a um clipe",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "Suavize inícios e fins abruptos com chips de 0,5–3 s e curvas linear ou equal-power; baixe um WAV de 16 bits. Só no dispositivo.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "Aplicar fade in e fade out a um clipe com chips de 0,5, 1, 2 ou 3 segundos em cada ponta e curva linear ou equal-power. Passos: aplicar, pré-ouvir, baixar WAV. Exemplo: carregue a amostra abrupta. Só bordas—não um crossfade envolvente para loop sem costura, nem limiter nem EQ. O áudio fica no seu dispositivo; nunca é enviado.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "Cortes duros no início ou no fim clicam nos alto-falantes e soam abruptos na timeline. Esta página aplica um envelope de entrada no começo e de saída no fim. Escolha 0,5, 1, 2 ou 3 s por ponta, depois Linear ou Equal-power. Se a soma passar da duração, os dois lados encolhem em proporção. É fade de bordas num clipe—não envolver a cauda na cabeça para um loop sem costura, nem limitar picos nem equalizar. Canais ficam 1 ou 2. Guarde o original; o download é um WAV de 16 bits novo. O trabalho roda no navegador.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "Escolher um arquivo de áudio",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "Solte um WAV, MP3, M4A, AAC ou OGG. Máximo 40 MiB e 10 minutos; mono ou estéreo.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "Aplicar",
  tool_fade_in_and_fade_out_an_audio_clip_download: "Baixar WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "Carregar amostra",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "Limpar",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "Ajustes de fade",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "Fade in",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "Fade out",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "Curva",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "Linear",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "Padrão: 1 s in, 1 s out, Equal-power. Chips curtos para bateria; longos para pads e fala. Se ultrapassarem a duração, encolhem juntos.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "Progresso do fade",
  tool_fade_in_and_fade_out_an_audio_clip_read: "Ler",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "Decodificar",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "Aplicar",
  tool_fade_in_and_fade_out_an_audio_clip_write: "Gravar",
  tool_fade_in_and_fade_out_an_audio_clip_done: "Pronto. Pré-ouça o WAV com fade e depois Baixe WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "O fade falhou. Tente um arquivo de áudio válido menor.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "{s}s decorridos",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "Ouvir o WAV com fade",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds}s · in {fadeIn}s · out {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "demo-abrupta-quatro-segundos",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "Escolha um arquivo de áudio ou carregue a amostra primeiro.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "Solte exatamente um arquivo de áudio.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "Áudio não suportado ou danificado. Use um arquivo que o navegador possa decodificar (WAV, MP3, M4A, AAC ou OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "Use um arquivo de no máximo 40 MiB ou 10 minutos, com um ou dois canais.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "O navegador não pôde decodificar este áudio. Tente outra gravação válida.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "Não foi possível gravar o WAV com fade. Confira os ajustes e tente Aplicar de novo.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "Nível quase silêncio—nada para suavizar. Tente uma gravação audível.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "Clipe curto demais para um fade útil. Use um arquivo com mais de cerca de 50 ms.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "Como aplicar fade in e fade out a um clipe",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "Escolha durações e curva, aplique, ouça e baixe um WAV de 16 bits—sem enviar o arquivo.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "Escolha um arquivo de áudio, ou Carregar amostra para uma demo abrupta de quatro segundos.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "Abra Ajustes de fade e escolha chips de entrada e saída (0,5 / 1 / 2 / 3 s). Padrão: 1 s cada.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "Escolha Linear ou Equal-power (padrão), clique Aplicar e aguarde Ler → Decodificar → Aplicar → Gravar.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "Pré-ouça o início e o fim suaves, confira a linha de resultado e clique Baixar WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title: "Por que escolher nossas ferramentas Aplicar fade in e fade out a um clipe",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "Veja segundos de in/out, nome da curva e KiB de saída antes de salvar.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "Chips claros e duas curvas—um trabalho de bordas, não um loop sem costura nem uma cadeia de limiter/EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "Decodificação, envelopes e gravação WAV rodam no seu dispositivo; a página não envia sua gravação.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "Mudar chips, curva ou entrada limpa o download antigo para não salvar um WAV velho.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "Durações, curvas e limites",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "Fade in sobe do silêncio; fade out cai ao silêncio. Linear é rampa reta; Equal-power usa seno/cosseno. Pedidos sobrepostos encolhem em proporção.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "Cada ponta oferece 0,5, 1, 2 ou 3 segundos. Padrão: 1 s / 1 s e Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "Só suaviza as bordas de um clipe. Não envolve a cauda na cabeça para loop sem costura, não limita picos e não refaz EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "A exportação mantém 1 ou 2 canais. Tags não são copiadas. O original nunca é sobrescrito.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "Um arquivo até 40 MiB e dez minutos. Se a soma passar da duração, os dois lados diminuem juntos.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "Experimente um fade real de bordas",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "Carregar amostra cria um tom de quatro segundos que começa e termina de repente, depois Aplicar a 1 s / 1 s Equal-power automaticamente. A reprodução não começa sozinha—aperte play na prévia se quiser ouvir as bordas suaves.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "Quando ajuda",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "Narração ou cama musical que clica nos cortes—escolha 1 s / 1 s, Aplicar, baixe WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "Clipe que precisa de bordas suaves antes de cortar em outro lugar ou ir à timeline—sem montar um loop sem costura.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_3: "Um toque ou bumper começa e acaba de repente e precisa de bordas suaves.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "É o mesmo que Fazer um loop de áudio sem costura?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "Não. Aquela ferramenta envolve a cauda selecionada na cabeça com crossfade para a junta circular limpa. Esta página só suaviza o início e o fim de um clipe. Para loops sem costura, use Fazer um loop de áudio sem costura.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "Isso limita picos ou equaliza o tom?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "Não. Só multiplica amostras por um envelope. Para limiting, boost de graves ou EQ de voz abafada, use as ferramentas dedicadas.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "Equal-power versus Linear?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "Linear sobe o ganho em linha reta. Equal-power usa seno no fade in e a forma cosseno correspondente no fade out para sonoridade mais suave. Padrão: Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "E se 3 s + 3 s for maior que o clipe?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "As duas pontas encolhem em proporção para a soma não passar da duração. A linha de resultado mostra os segundos reais aplicados.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "Posso fazer fade só numa ponta?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "Os chips definem as duas pontas; use o chip mais curto (0,5 s) na que quase não quiser tocar, ou corte antes com Recortar um clipe de áudio e exportar.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "Meu áudio é enviado a um servidor?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "Não. Decodificação, fades e gravação WAV rodam no navegador. A página precisa de rede no primeiro carregamento; offline não é garantido. Para loops sem costura ou corte de duração, use as ferramentas dedicadas.",
};
export default pt;
