import type { SiteLangDict } from '../../../types';

/**
 * Português (pt) para mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for local search habits—not a verbatim machine translation of en.
 * WAV estéreo L/R; só entretenimento/ambiente; sem alegações de terapia ou cura.
 */
const pt: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'Misturar batidas binaurais para foco',
  tool_mix_binaural_beats_for_focus_desc:
    'Misture batidas binaurais para foco a partir de uma portadora e uma diferença de batida, depois baixe um WAV estéreo. Só no dispositivo—ambiente de entretenimento, não tratamento.',
  tool_mix_binaural_beats_for_focus_description:
    'Misture batidas binaurais para foco no navegador a partir de uma portadora e uma diferença de batida, depois baixe um WAV estéreo de 16 bits. Passos: defina Hz de portadora e batida ou toque um preset, escolha a duração, Misturar, ouça com fones, baixe. Exemplo: portadora 200 Hz com diferença de 10 Hz por 10 segundos. Só entretenimento e som ambiente de foco—não é tratamento médico. Nunca é enviado.',
  tool_mix_binaural_beats_for_focus_article:
    'Quem procura batidas binaurais para uma sessão de foco costuma querer um arquivo estéreo simples para guardar. Aqui você define a frequência portadora para o ouvido esquerdo e uma um pouco mais alta à direita para que a diferença seja a taxa de batida, escolhe a duração, sintetiza PCM estéreo a 44,1 kHz no navegador e baixa um WAV de 16 bits. Use fones—a diferença esquerda/direita é o ponto. Presets só mudam hertz; são atalhos de ambiente, não protocolos médicos. Esta página não afirma eficácia terapêutica, não diagnostica nem trata nenhuma condição, e serve só para entretenimento ou escuta ambiental pessoal. Não é um gerador de seno mono nem um criador de bipes de interface. Tudo roda no seu dispositivo.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'Portadora (ouvido esquerdo, Hz)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'Frequência do canal esquerdo, típico 80–500 Hz. Padrão 200 Hz.',
  tool_mix_binaural_beats_for_focus_beat_label: 'Diferença de batida (Hz)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'O ouvido direito toca portadora + este valor. Mantenha a diferença entre 1 e 40 Hz.',
  tool_mix_binaural_beats_for_focus_preset_label: 'Presets de batida ambiente',
  tool_mix_binaural_beats_for_focus_dur_label: 'Duração',
  tool_mix_binaural_beats_for_focus_convert: 'Misturar',
  tool_mix_binaural_beats_for_focus_download: 'Baixar WAV',
  tool_mix_binaural_beats_for_focus_sample: 'Carregar amostra',
  tool_mix_binaural_beats_for_focus_clear: 'Limpar',
  tool_mix_binaural_beats_for_focus_advanced: 'Notas binaurais',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'A saída é um WAV estéreo de 16 bits a 44,1 kHz com fades curtos. Fones necessários para a diferença esquerda/direita. Só entretenimento e som ambiente de foco—não é tratamento médico nem terapia.',
  tool_mix_binaural_beats_for_focus_progress: 'Progresso da mistura',
  tool_mix_binaural_beats_for_focus_synth: 'Síntese',
  tool_mix_binaural_beats_for_focus_write: 'Gravar',
  tool_mix_binaural_beats_for_focus_done: 'Pronto. Ouça com fones e depois Baixar WAV.',
  tool_mix_binaural_beats_for_focus_failed: 'A mistura falhou. Verifique portadora, diferença de batida e duração.',
  tool_mix_binaural_beats_for_focus_elapsed: '{s}s decorridos',
  tool_mix_binaural_beats_for_focus_preview: 'Ouvir o WAV binaural',
  tool_mix_binaural_beats_for_focus_result:
    'E {left} Hz · D {right} Hz · batida {beat} Hz · {seconds}s · estéreo · {rate} Hz · WAV {output} KiB',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'Defina primeiro portadora e batida em Hz, ou carregue a amostra.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'Defina portadora e diferença de batida (ou toque um preset), escolha a duração e Misturar—ou Carregar amostra (200 Hz / 10 Hz / 10 s). Use fones. Só ambiente de entretenimento—não é tratamento médico.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'Informe uma portadora entre 80 e 1000 Hz.',
  tool_mix_binaural_beats_for_focus_err_beat: 'Informe uma diferença de batida entre 1 e 40 Hz (direita = portadora + batida).',
  tool_mix_binaural_beats_for_focus_err_limit: 'A duração deve estar entre 0 e 120 segundos.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'Não foi possível gravar o WAV estéreo. Tente Misturar de novo.',
  tool_mix_binaural_beats_for_focus_how_title: 'Como misturar batidas binaurais para foco',
  tool_mix_binaural_beats_for_focus_how_body:
    'Defina portadora e batida em Hz, escolha a duração, Misturar, ouça com fones e baixe um WAV estéreo—sem enviar arquivos e sem alegações de terapia.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'Informe Hz de portadora para o ouvido esquerdo (ou mantenha 200 Hz) e a diferença de batida para o direito.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'Opcional: toque um preset ambiente (diferença 4, 10 ou 16 Hz)—só mudam números, não protocolos médicos.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'Escolha um chip de duração, clique em Misturar e aguarde Síntese → Gravar.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'Ouça com fones, confira a linha de resultado e clique em Baixar WAV.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'Por que escolher nossas ferramentas Misturar batidas binaurais para foco',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'Você vê Hz esquerdo, direito, diferença de batida, duração e KiB de saída antes de salvar.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'Um único trabalho binaural estéreo com limites YMYL honestos—ambiente de entretenimento, não tratamento.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'Síntese e gravação rodam no seu dispositivo; nada é enviado para processar os tons.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'Mudar portadora, batida ou duração limpa o download antigo para você não salvar um WAV desatualizado.',
  tool_mix_binaural_beats_for_focus_rules_title: 'Regras binaurais e limites honestos',
  tool_mix_binaural_beats_for_focus_rules_body:
    'Cada execução sintetiza esquerda = portadora e direita = portadora + batida a 44,1 kHz com fades curtos. Exportação WAV estéreo 16 bits. Só entretenimento/ambiente—não é tratamento médico—nem gerador de seno mono nem bipe de UI.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'Portadora entre 80 e 1000 Hz. Diferença de batida entre 1 e 40 Hz. Duração até 120 segundos. Saída estéreo.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'Fones são necessários para uma verdadeira diferença esquerda/direita. Alto-falantes misturam canais e escondem o efeito de batida.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'Esta página não afirma eficácia médica, de sono ou terapêutica. Rótulos são atalhos de ambiente—não protocolos de tratamento.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'Fades curtos reduzem cliques. O download é um arquivo novo; nada é enviado. Não é gerador de seno mono nem som de notificação de UI.',
  tool_mix_binaural_beats_for_focus_example_title: 'Tente portadora 200 Hz com batida de 10 Hz por 10 segundos',
  tool_mix_binaural_beats_for_focus_example:
    'Carregar amostra define portadora 200 Hz, diferença 10 Hz e 10 segundos, e Misturar roda sozinho. Com fones você deve ouvir um par estéreo estável. A reprodução não começa sozinha—aperte play se quiser ouvir.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'Quando isso ajuda',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'Você quer um WAV ambiente de foco reutilizável: defina portadora e batida, Misturar, baixe e guarde o arquivo para fones.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'Você precisa de uma demo rápida de batida estéreo sem instalar app de tons nem confiar em alegações de terapia.',
  tool_mix_binaural_beats_for_focus_faq_q1: 'Isto é tratamento médico ou terapia?',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'Não. Esta página só cria som de entretenimento e ambiente pessoal de foco. Não diagnostica, trata nem cura nenhuma condição e não afirma eficácia terapêutica.',
  tool_mix_binaural_beats_for_focus_faq_q2: 'Preciso de fones?',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'Sim para a diferença esquerda/direita pretendida. Em alto-falantes os canais se misturam e o efeito de batida diminui ou some.',
  tool_mix_binaural_beats_for_focus_faq_q3: 'É a mesma coisa que um gerador de tom seno mono?',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'Não. Uma página de seno faz uma frequência em mono. Esta página sempre grava estéreo com duas frequências ligeiramente diferentes.',
  tool_mix_binaural_beats_for_focus_faq_q4: 'O que significam os presets ambiente?',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'Eles só definem a diferença de batida em hertz (por exemplo 4, 10 ou 16 Hz). Não são protocolos médicos e não prometem resultados de sono ou foco.',
  tool_mix_binaural_beats_for_focus_faq_q5: 'Algo é enviado a um servidor?',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'Não. Síntese e gravação rodam no navegador no seu dispositivo. A página precisa de rede no primeiro carregamento; uso offline não é garantido.',
  tool_mix_binaural_beats_for_focus_faq_q6: 'Qual é o formato do download?',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'Um WAV PCM estéreo de 16 bits a 44,1 kHz. É um arquivo novo que você pode guardar como clipe ambiente reutilizável.',
};
export default pt;
