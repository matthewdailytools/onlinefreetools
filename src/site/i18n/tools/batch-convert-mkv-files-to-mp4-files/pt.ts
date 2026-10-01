import type { SiteLangDict } from '../../../types';

/**
 * Português (D3 lote): vários MKV locais → MP4 AAC estéreo em ZIP.
 * Intenção: converter vários mkv para mp4, lote mkv, sem enviar ao servidor.
 */
const pt: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'Converter arquivos MKV em MP4 em lote',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'Converta vários MKV locais para MP4 com AAC estéreo no navegador e baixe um ZIP. ~20 arquivos, ~500 MiB cada. Sem enviar ao servidor.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'Converta em lote MKV locais para MP4 com AAC estéreo no seu dispositivo e baixe um ZIP. Passos: adicione MKV → Converter todos → Baixar ZIP. Exemplo: Carregar exemplo enfileira dois clipes Matroska curtos e empacota os dois MP4. ~500 MiB / 2 h por arquivo; até ~20 na fila. Linha com falha é ignorada; acertos vão para um ZIP parcial. Só arquivos locais, sem links YouTube; ficam no dispositivo e não são enviados ao servidor. Um arquivo só? Converter um arquivo MKV para MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'Pastas de capturas em Matroska precisam virar MP4 para muitos editores. Esta página usa a mesma conversão AAC da ferramenta de um arquivo, mas enfileira vários MKV, mostra status por linha e empacota MP4s ok em um ZIP. Não extrai só áudio em lote, não baixa URL — um clipe só → página de arquivo único.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'Escolher arquivos MKV',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'Solte vários .mkv locais (~500 MiB / 2 h cada, até ~20). O áudio vira AAC estéreo. Não é YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'Fila',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} arquivo(s) na fila',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'Converter todos',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'Baixar ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'Carregar exemplo',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'Limpar',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'Parar',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'Remover',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'Configurações de áudio (opcional)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'Canais de áudio',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'Estéreo (padrão)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Mono',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'Qualidade AAC',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'Menor tamanho',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'Equilibrado',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'Maior qualidade (padrão)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'Os padrões valem para cada arquivo da fila. Mudar configurações apaga um ZIP pronto.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'Progresso do lote',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'Carregar motor',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'Ler',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'Decodificar',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'Codificar',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'Empacotar ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    'Pronto. Baixe o ZIP — ou abra a conversão MKV→MP4 de um arquivo se tiver só um clipe.',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    'Falha no lote. Veja erros por linha ou tente MKV menores ou em menor quantidade.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '{s} s decorridos',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'Resultado ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 empacotado(s) · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} ok, {fail} falharam · ZIP {output} KiB (parcial). O download traz os sucessos.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'Adicione MKV ou carregue o exemplo primeiro.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'Nenhum arquivo ainda. Solte .mkv locais (~500 MiB cada) ou Carregar exemplo. Não é YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'Na fila',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'Convertendo…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 pronto',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'Falhou',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'Parado',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'Solte um ou mais arquivos MKV.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'Arquivo não suportado. Nesta página só .mkv.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'Um arquivo passa de ~500 MiB / 2 h ou a fila é grande demais para este navegador.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'Arquivos demais. Mantenha ~20 MKV ou menos por lote.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'Não abriu um arquivo como Matroska ou não sobrou faixa de vídeo/áudio utilizável.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'Um codec não pôde ser decodificado/codificado aqui. Essa linha falha; outras podem ir para o ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'Não deu para gravar MP4 numa linha. Tente de novo ou remova.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'Não deu para montar o ZIP. Clique Converter todos outra vez.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'Não carregou os MKV de exemplo. Use seus arquivos.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'Não carregou o motor de conversão neste navegador.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'Conversão interrompida.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'Como converter vários MKV para MP4',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'Enfileire MKV locais, Converter todos, depois Baixar ZIP — cada sucesso é MP4 AAC estéreo.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'Escolha vários .mkv locais (~500 MiB cada) ou Carregar exemplo.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    'Opcional: abra Configurações de áudio para mono ou AAC menor (vale para todo o lote).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    'Clique Converter todos e acompanhe cada linha (ou Parar). Falhas são ignoradas; o resto segue.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    'Quando o progresso terminar, Baixar ZIP. Um clipe só → página de um MKV para MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'Por que usar este lote MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'Um ZIP de MP4 AAC sem enviar uma pasta Matroska inteira para a nuvem.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    'Status por linha e pular falhas — uma faixa ruim não derruba o lote inteiro.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    'Mesmo motor AAC da página de um arquivo, com limites claros — não remux silencioso.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    'Caminho claro para conversão de um arquivo e extração de áudio depois dos MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'Limites do lote MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    'Só .mkv locais. Áudio é recodificado para AAC. Limites e falhas por linha são ditos de cara — rips enormes ainda pedem ffmpeg no desktop.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    '~500 MiB / 2 h por arquivo, ~20 por lote. Se passar, a página avisa claramente.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'Sem download por URL ou YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC estéreo (ou mono) de propósito. E-AC-3 pode decodificar com auxiliar compartilhado; vídeo exótico pode falhar uma linha.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'MKV originais não são sobrescritos. Não é extração só de áudio em lote — veja páginas relacionadas.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'Testar um lote de verdade',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'Carregar exemplo enfileira dois MKV curtos do site; Converter todos empacota. Para teste real, seus arquivos dentro do limite.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'Quando faz sentido',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    'Uma pasta de capturas MKV precisa virar MP4 porque o editor não aceita Matroska.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'Vários MKV com DDP/Atmos precisam de AAC antes de extrair áudio dos MP4 resultantes.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'Quer baixar um ZIP de uma vez sem mandar o lote para conversor online.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'Posso colar URLs do YouTube?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'Não. Apenas arquivos .mkv locais.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: 'Diferença de Converter um MKV para MP4?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'Aquela página é um arquivo e download direto de MP4. Esta enfileira vários e baixa ZIP. Mesmo motor AAC.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: 'E se um MKV falhar?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'A linha mostra Falhou e é ignorada. MP4s ok ainda vão para um ZIP parcial para Baixar ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'É só remux (mesmo codec de áudio)?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'Não. O áudio sempre é recodificado para AAC. Vídeo copia quando dá.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: 'Só quero WAV/MP3 de muitos MKV — página errada?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'Só voz: use extrair áudio em lote de MKV. Aqui você recebe MP4 com vídeo em ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'Minha pasta é enviada ao servidor?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'Não. A conversão roda no navegador; arquivos ficam no dispositivo sem envio ao servidor. Scripts do motor carregam uma vez deste site.',
};

export default pt;
