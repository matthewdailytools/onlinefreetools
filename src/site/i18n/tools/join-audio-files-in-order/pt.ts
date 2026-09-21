import type { SiteLangDict } from '../../../types';

/**
 * Portuguese copy for join-audio-files-in-order (F7 A2).
 * Juntar ficheiros de áudio por ordem; ≠ mistura sobreposta; ≠ crossfade.
 */
const pt: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'Juntar ficheiros de áudio por ordem',
  tool_join_audio_files_in_order_desc:
    'Junte vários clips locais ponta a ponta pela ordem da lista e descarregue um WAV de 16 bits. Só no dispositivo—não é mistura sobreposta.',
  tool_join_audio_files_in_order_description:
    'Junte vários ficheiros de áudio locais ponta a ponta na ordem da lista no browser e descarregue um WAV de 16 bits. Passos: Adicionar clips, reordenar se preciso, Juntar, pré-ouvir, descarregar. Exemplo: carregar dois tons de amostra. Só concatena—não mistura sobreposta nem crossfade. Nunca é enviado.',
  tool_join_audio_files_in_order_article:
    'Takes de podcast, notas de voz e secções de música precisam muitas vezes de um único ficheiro contínuo. Esta página deixa largar vários ficheiros locais, reordená-los numa lista, descodificar cada clip no browser, alinhar taxa de amostragem e canais, e concatenar as amostras nessa ordem num WAV PCM de 16 bits. Não empilha faixas ao mesmo tempo (mistura), não faz crossfade entre músicas e não extrai áudio de vídeo. O sucesso depende de o browser conseguir descodificar cada contentor. Canais ficam um ou dois. Guarde os originais; a descarga é um ficheiro novo. O trabalho corre no seu dispositivo.',
  tool_join_audio_files_in_order_choose: 'Adicionar ficheiros de áudio',
  tool_join_audio_files_in_order_hint:
    'Largue ou escolha vários WAV, MP3, M4A, AAC ou OGG. Pode acrescentar mais. Até 20 clips, 40 MiB cada, 20 minutos no total após juntar; mono ou estéreo.',
  tool_join_audio_files_in_order_list_label: 'Ordem de junção',
  tool_join_audio_files_in_order_move_up: 'Subir',
  tool_join_audio_files_in_order_move_down: 'Descer',
  tool_join_audio_files_in_order_remove: 'Remover',
  tool_join_audio_files_in_order_convert: 'Juntar',
  tool_join_audio_files_in_order_download: 'Baixar WAV',
  tool_join_audio_files_in_order_sample: 'Carregar amostra',
  tool_join_audio_files_in_order_clear: 'Limpar',
  tool_join_audio_files_in_order_advanced: 'Notas de junção',
  tool_join_audio_files_in_order_settings_hint:
    'Os clips são juntos ponta a ponta na ordem da lista. Taxas diferentes alinham-se ao primeiro clip. Só concatena—não mistura nem crossfade.',
  tool_join_audio_files_in_order_progress: 'Progresso da junção',
  tool_join_audio_files_in_order_read: 'Ler',
  tool_join_audio_files_in_order_decode: 'Descodificar',
  tool_join_audio_files_in_order_join: 'Juntar',
  tool_join_audio_files_in_order_write: 'Escrever',
  tool_join_audio_files_in_order_done: 'Pronto. Pré-ouça o WAV juntado e descarregue.',
  tool_join_audio_files_in_order_failed: 'A junção falhou. Tente menos ficheiros, mais curtos e válidos.',
  tool_join_audio_files_in_order_elapsed: '{s}s decorridos',
  tool_join_audio_files_in_order_preview: 'Ouvir o WAV juntado',
  tool_join_audio_files_in_order_result:
    '{files} ficheiros · {seconds}s · {channels} ch · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: 'tom-juncao',
  tool_join_audio_files_in_order_empty: 'Adicione pelo menos dois ficheiros de áudio ou carregue primeiro a amostra.',
  tool_join_audio_files_in_order_empty_state:
    'Ainda sem clips. Largue vários ficheiros locais ou carregue a amostra com dois tons curtos. Esta ferramenta concatena na ordem da lista—não sobrepõe faixas.',
  tool_join_audio_files_in_order_queue_count: '{n} ficheiro(s) na fila',
  tool_join_audio_files_in_order_err_file: 'Adicione pelo menos dois ficheiros de áudio suportados.',
  tool_join_audio_files_in_order_err_format:
    'Áudio não suportado ou danificado. Use WAV, MP3, M4A, AAC ou OGG que o browser possa descodificar.',
  tool_join_audio_files_in_order_err_limit:
    'Até 20 ficheiros, 40 MiB cada, mono ou estéreo, com duração total juntada sob 20 minutos.',
  tool_join_audio_files_in_order_err_decode:
    'O browser não conseguiu descodificar um dos ficheiros. Remova-o ou tente outra codificação.',
  tool_join_audio_files_in_order_err_encoder: 'Não foi possível escrever o WAV juntado. Tente Juntar de novo.',
  tool_join_audio_files_in_order_how_title: 'Como juntar ficheiros de áudio por ordem',
  tool_join_audio_files_in_order_how_body:
    'Adicione vários clips locais, defina a ordem, execute Juntar, ouça e descarregue um WAV de 16 bits—sem enviar os ficheiros.',
  tool_join_audio_files_in_order_how_item_1:
    'Adicione dois ou mais ficheiros de áudio (ou Carregar amostra para dois tons curtos). Largue outra vez para acrescentar.',
  tool_join_audio_files_in_order_how_item_2:
    'Use Subir / Descer / Remover na lista para a ordem coincidir com o que quer ouvir.',
  tool_join_audio_files_in_order_how_item_3:
    'Clique Juntar e aguarde Ler → Descodificar → Juntar → Escrever.',
  tool_join_audio_files_in_order_how_item_4:
    'Pré-ouça a faixa contínua, confira a linha de resultado e clique Baixar WAV.',
  tool_join_audio_files_in_order_why_choose_title: 'Porquê escolher as nossas ferramentas Juntar ficheiros de áudio por ordem',
  tool_join_audio_files_in_order_why_choose_item_1:
    'Veja o número de ficheiros, duração, canais, taxa e KiB de saída antes de guardar.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'Um trabalho claro de concatenação—ordem da lista ponta a ponta—com limites honestos se um clip não descodificar.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'Leitura, descodificação e escrita correm no seu dispositivo; a página não envia os clips para processar.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'Alterar a fila limpa a descarga antiga para não guardar um WAV desatualizado.',
  tool_join_audio_files_in_order_rules_title: 'Regras de concatenação e limites honestos do browser',
  tool_join_audio_files_in_order_rules_body:
    'Cada execução junta clips ponta a ponta na ordem da lista. As taxas alinham-se ao primeiro clip. A exportação é WAV de 16 bits. Não é mistura sobreposta, nem crossfade, nem extração de vídeo.',
  tool_join_audio_files_in_order_rules_item_1:
    'Dois a vinte ficheiros locais, cada um até 40 MiB. Duração juntada sob vinte minutos. Canais um ou dois.',
  tool_join_audio_files_in_order_rules_item_2:
    'Esta página concatena. Não empilha voz sobre música ao mesmo tempo e não faz crossfade entre músicas.',
  tool_join_audio_files_in_order_rules_item_3:
    'Etiquetas não são copiadas. Originais nunca são sobrescritos. O sucesso depende da descodificação do browser por ficheiro.',
  tool_join_audio_files_in_order_rules_item_4:
    'Depois de juntar, use Recortar um clip de áudio e exportar para cortes. Para vídeo, extraia o áudio primeiro.',
  tool_join_audio_files_in_order_example_title: 'Experimente dois tons curtos',
  tool_join_audio_files_in_order_example:
    'Carregar amostra adiciona dois tons WAV curtos (alturas diferentes) à fila e executa Juntar. Deve ouvir o tom A e depois o B sem sobreposição. A reprodução não começa sozinha—prima play na pré-visualização.',
  tool_join_audio_files_in_order_usecases_title: 'Quando ajuda',
  tool_join_audio_files_in_order_usecase_1:
    'Várias notas de voz devem virar uma faixa contínua—adicione por ordem, Juntar, descarregue WAV.',
  tool_join_audio_files_in_order_usecase_2:
    'Secções de música ou capítulos de podcast em ficheiros separados precisam de uma exportação sem enviar a um site de junção.',
  tool_join_audio_files_in_order_faq_q1: 'É o mesmo que misturar ou sobrepor duas faixas?',
  tool_join_audio_files_in_order_faq_a1:
    'Não. A mistura sobreposta toca clips ao mesmo tempo (por exemplo voz sobre música). Esta página só os coloca um após o outro na ordem da lista.',
  tool_join_audio_files_in_order_faq_q2: 'Faz crossfade entre músicas?',
  tool_join_audio_files_in_order_faq_a2:
    'Não. Não há crossfade nem transição de DJ. Os clips encontram-se ponta a ponta. Crossfade é outro trabalho.',
  tool_join_audio_files_in_order_faq_q3: 'Posso mudar a ordem de junção?',
  tool_join_audio_files_in_order_faq_a3:
    'Sim. Use Subir e Descer em cada linha, ou Remover e voltar a adicionar. Juntar segue sempre a lista de cima para baixo.',
  tool_join_audio_files_in_order_faq_q4: 'E se os ficheiros tiverem taxas de amostragem diferentes?',
  tool_join_audio_files_in_order_faq_a4:
    'Os clips seguintes alinham-se à taxa do primeiro antes da concatenação. Os canais mantêm-se mono ou estéreo.',
  tool_join_audio_files_in_order_faq_q5: 'O meu áudio é enviado para um servidor?',
  tool_join_audio_files_in_order_faq_a5:
    'Não. Leitura, descodificação e escrita correm no browser no seu dispositivo. A página precisa de rede no primeiro carregamento; o uso offline não é garantido.',
  tool_join_audio_files_in_order_faq_q6: 'Posso juntar áudio extraído de um vídeo?',
  tool_join_audio_files_in_order_faq_a6:
    'Extraia primeiro a faixa com Extrair áudio de um ficheiro de vídeo e depois adicione o áudio exportado aqui. Esta página não aceita contentores de vídeo como entradas de junção.',
};
export default pt;
