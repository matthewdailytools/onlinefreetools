import type { SiteLangDict } from '../../../types';

/**
 * pt copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. Mescla áudio local sobre vídeo local; sem YouTube; não só silenciar; não só extrair.
 */
const pt: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'Adicionar uma faixa de áudio a um vídeo',
  tool_add_an_audio_track_to_a_video_desc:
    'Mescle uma trilha local com um vídeo local e baixe o resultado. Só no dispositivo—sem download do YouTube.',
  tool_add_an_audio_track_to_a_video_description: 'Adicione uma faixa de áudio a um vídeo local no navegador mesclando imagem e trilha escolhida, depois baixe. Passos: escolha vídeo e áudio, Adicionar áudio, pré-visualize, baixe. Exemplo: clipe mudo mais um WAV curto. Usa captureStream e browser media recording—muitas vezes WebM; não é remux sem perda. Nunca enviado. Sem download do YouTube.',
  tool_add_an_audio_track_to_a_video_article: 'Clipes mudos ou com som fraco muitas vezes precisam de uma trilha nova antes de compartilhar. Esta página abre um vídeo e um áudio locais, captura quadros sem as faixas originais, decodifica a trilha no the browser audio engine, combina e reencoda com browser media recording—muitas vezes WebM conforme o navegador. A duração segue o vídeo; áudio mais longo é cortado e o mais curto termina antes. Não baixa YouTube nem outras URLs, não só silencia sem adicionar som e não extrai áudio como arquivo separado. O sucesso depende de reproduzir ambos os arquivos e de browser media recording com áudio. Guarde os originais. Tudo roda no seu dispositivo.',
  tool_add_an_audio_track_to_a_video_choose_video: 'Escolher um arquivo de vídeo',
  tool_add_an_audio_track_to_a_video_hint_video:
    'Solte ou escolha um MP4, WebM, MOV ou M4V local que o navegador possa reproduzir. Até 80 MiB e cerca de 3 minutos. Sem YouTube nem colar URL.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'Escolher um arquivo de áudio',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'Solte ou escolha um WAV, MP3, M4A ou similar local que o navegador possa decodificar. Até 40 MiB.',
  tool_add_an_audio_track_to_a_video_convert: 'Adicionar áudio',
  tool_add_an_audio_track_to_a_video_download: 'Baixar',
  tool_add_an_audio_track_to_a_video_sample: 'Carregar amostra',
  tool_add_an_audio_track_to_a_video_clear: 'Limpar',
  tool_add_an_audio_track_to_a_video_advanced: 'Notas de mesclagem',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'Os navegadores costumam reencodar via browser media recording após remover as faixas originais e anexar sua trilha. Saída muitas vezes WebM, não remux sem perda. Esta página nunca baixa YouTube.',
  tool_add_an_audio_track_to_a_video_progress: 'Progresso de adicionar áudio',
  tool_add_an_audio_track_to_a_video_read: 'Ler',
  tool_add_an_audio_track_to_a_video_decode: 'Decodificar',
  tool_add_an_audio_track_to_a_video_merge: 'Mesclar',
  tool_add_an_audio_track_to_a_video_write: 'Escrever',
  tool_add_an_audio_track_to_a_video_done: 'Pronto. Pré-visualize o vídeo mesclado e depois baixe.',
  tool_add_an_audio_track_to_a_video_failed:
    'Não foi possível mesclar o áudio neste vídeo. Tente arquivos mais curtos que o navegador reproduza.',
  tool_add_an_audio_track_to_a_video_elapsed: '{s}s decorridos',
  tool_add_an_audio_track_to_a_video_preview: 'Pré-visualizar vídeo mesclado',
  tool_add_an_audio_track_to_a_video_result: '{seconds}s · com áudio · {mime} · {output} KiB',
  tool_add_an_audio_track_to_a_video_sample_name: 'amostra-adicionar-audio',
  tool_add_an_audio_track_to_a_video_empty: 'Escolha um vídeo e um áudio locais, ou carregue a amostra primeiro.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'Ainda sem arquivos. Solte um vídeo e uma trilha locais, ou carregue a amostra. Esta ferramenta mescla áudio na imagem—não só silencia, não só extrai e não baixa YouTube.',
  tool_add_an_audio_track_to_a_video_video_label: 'Vídeo: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'Áudio: {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'Escolha um vídeo e um áudio locais compatíveis.',
  tool_add_an_audio_track_to_a_video_err_format:
    'Arquivos sem suporte ou ilegíveis. Use tipos de vídeo/áudio comuns que o navegador decodifique. Sem URLs do YouTube.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'Use um vídeo local de até 80 MiB / cerca de 3 minutos e áudio de até 40 MiB.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'O navegador não conseguiu decodificar o vídeo ou o áudio. Tente outro contêiner ou um clipe mais curto.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'O browser media recording não conseguiu escrever o vídeo mesclado. Tente Chrome/Edge ou WebM/MP4 mais curto mais WAV/MP3.',
  tool_add_an_audio_track_to_a_video_how_title: 'Como adicionar uma faixa de áudio a um vídeo',
  tool_add_an_audio_track_to_a_video_how_body:
    'Escolha vídeo e áudio locais, execute Adicionar áudio, pré-visualize e baixe—sem enviar e sem YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'Escolha um vídeo e um áudio locais (ou carregue a amostra). Não cole links do YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    'Clique em Adicionar áudio e aguarde Ler → Decodificar → Mesclar → Escrever.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'Pré-visualize. Você deve ouvir a nova trilha com a imagem.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'Confira a linha de resultado e clique em Baixar.',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'Por que escolher nossas ferramentas para adicionar faixa de áudio',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'Veja duração, tipo MIME e KiB de saída antes de salvar.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'Um trabalho de mescla claro com limites honestos do browser media recording—sem promessa falsa de remux sem perda.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'Leitura e gravação no seu dispositivo; a página não envia seus arquivos para processar.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'Trocar qualquer arquivo limpa o download antigo para não salvar uma mescla desatualizada.',
  tool_add_an_audio_track_to_a_video_rules_title: 'Regras de mescla e limites honestos do navegador',
  tool_add_an_audio_track_to_a_video_rules_body:
    'Cada execução remove as faixas originais, anexa sua trilha e reencoda com browser media recording. Saída muitas vezes WebM. Não é YouTube, não é só silenciar e não é extrair áudio.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'Um vídeo local de até 80 MiB e cerca de três minutos, mais um áudio local de até 40 MiB. Reprodução/decodificação primeiro.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'A duração segue o vídeo. Áudio mais longo é truncado; mais curto termina antes da imagem.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'Sem YouTube, URL de podcast ou download remoto. Colar não é suportado.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'Contêineres e codecs podem mudar. Guarde os originais; o download é um arquivo reencodado novo.',
  tool_add_an_audio_track_to_a_video_example_title: 'Experimente um clipe mudo curto mais um tom',
  tool_add_an_audio_track_to_a_video_example:
    'Carregar amostra cria um vídeo curto em canvas e um tom simples; depois Adicionar áudio roda sozinho. Você vê a imagem com a nova trilha. A reprodução não começa sozinha—aperte play se quiser assistir.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'Quando isso ajuda',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'Gravação de tela muda e uma base WAV—mescle aqui e baixe para compartilhar.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'Substituir uma faixa fraca embutida por uma trilha local mais clara sem instalar editor de desktop.',
  tool_add_an_audio_track_to_a_video_usecase_3: 'Você tem uma gravação de tela muda e uma narração separada para juntar antes de enviar.',
  tool_add_an_audio_track_to_a_video_faq_q1: 'Pode baixar YouTube ou colar uma URL?',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'Não. Só arquivos locais que você já tem. Não há downloader do YouTube nem busca remota.',
  tool_add_an_audio_track_to_a_video_faq_q2: 'É o mesmo que remover o áudio de um vídeo?',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'Não. Silenciar/remover é outro trabalho. Esta página anexa uma trilha nova à imagem.',
  tool_add_an_audio_track_to_a_video_faq_q3: 'Extrai o áudio como download separado?',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'Não. Extrair áudio de um vídeo é outra ferramenta. Aqui o resultado é um vídeo com som mesclado.',
  tool_add_an_audio_track_to_a_video_faq_q4: 'A saída será o mesmo MP4 da fonte?',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'Em geral não. Os navegadores costumam reencodar com browser media recording, muitas vezes para WebM. Qualidade e contêiner podem mudar.',
  tool_add_an_audio_track_to_a_video_faq_q5: 'Algo é enviado a um servidor?',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'Não. Decodificação e gravação rodam no navegador no seu dispositivo. A página precisa de rede no primeiro carregamento; offline não é garantido.',
  tool_add_an_audio_track_to_a_video_faq_q6: 'E se o áudio for mais longo que o vídeo?',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'A mescla segue a duração do vídeo. Áudio além do fim da imagem não entra no download.',
};
export default pt;
