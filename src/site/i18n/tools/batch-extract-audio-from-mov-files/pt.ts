import type { SiteLangDict } from '../../../types';

/**
 * Português: vários MOV locais → ZIP de áudio (só .mov, sequencial, sem YouTube).
 * Direção de busca: «extrair áudio mov lote», «vários mov para mp3».
 */
const pt: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: 'Extrair áudio de vários arquivos MOV',
	tool_batch_extract_audio_from_mov_files_desc:
		'Fila só de MOV locais: um a um, falhas ignoradas, ZIP WAV/MP3. Sem upload ao servidor.',
	tool_batch_extract_audio_from_mov_files_description:
		'Extrai áudio de vários MOV locais um a um no navegador e salva um ZIP WAV ou MP3. Passos: adicionar .mov → Extrair → baixar o ZIP. Exemplo: «Carregar exemplo» cria dois MOV sintéticos curtos e empacota os áudios. Por arquivo, os mesmos limites demux+OPFS da ferramenta MOV única (com OPFS ~5 GiB / 6 h, senão ~1 GiB). Linhas com falha ignoradas, sucessos empacotados. No dispositivo — sem upload. Sem YouTube. Um arquivo → «Extrair áudio de um arquivo MOV». MP4/WebM/MKV mistos → «Extrair áudio de arquivos de vídeo (lote)».',
	tool_batch_extract_audio_from_mov_files_article:
		'Pastas de MOV do celular costumam precisar só da faixa AAC. Esta página enfileira só .mov, recusa outras extensões, extrai em série para RAM estável e coloca sucessos num ZIP. Não é baixador de YouTube nem hub de contentores mistos.',
	tool_batch_extract_audio_from_mov_files_choose: 'Escolher arquivos MOV',
	tool_batch_extract_audio_from_mov_files_hint:
		'Até 30 .mov locais. Outros formatos recusados — veja lote misto. Limite por arquivo = ferramenta MOV única.',
	tool_batch_extract_audio_from_mov_files_list_label: 'Fila MOV',
	tool_batch_extract_audio_from_mov_files_convert: 'Extrair',
	tool_batch_extract_audio_from_mov_files_stop: 'Parar',
	tool_batch_extract_audio_from_mov_files_download: 'Baixar ZIP',
	tool_batch_extract_audio_from_mov_files_sample: 'Carregar exemplo',
	tool_batch_extract_audio_from_mov_files_clear: 'Limpar',
	tool_batch_extract_audio_from_mov_files_advanced: 'Formato de exportação (opcional)',
	tool_batch_extract_audio_from_mov_files_format_label: 'Formato de saída',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16 bits)',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'Taxa de bits MP3',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'MOV curtos: WAV padrão. Arquivos grandes podem forçar MP3 em streaming por linha. Sem URL/YouTube.',
	tool_batch_extract_audio_from_mov_files_progress: 'Progresso da extração MOV em lote',
	tool_batch_extract_audio_from_mov_files_read: 'Ler',
	tool_batch_extract_audio_from_mov_files_decode: 'Demux',
	tool_batch_extract_audio_from_mov_files_extract: 'Extrair',
	tool_batch_extract_audio_from_mov_files_write: 'Escrever',
	tool_batch_extract_audio_from_mov_files_pack: 'Empacotar ZIP',
	tool_batch_extract_audio_from_mov_files_done: 'Concluído. Baixe o ZIP com o áudio extraído.',
	tool_batch_extract_audio_from_mov_files_failed: 'Falha no lote. Remova MOV corrompidos ou reduza a quantidade.',
	tool_batch_extract_audio_from_mov_files_elapsed: 'Decorrido {s} s',
	tool_batch_extract_audio_from_mov_files_preview: 'Resultado do lote',
	tool_batch_extract_audio_from_mov_files_result: '{n} áudios empacotados · ZIP {output} KiB',
	tool_batch_extract_audio_from_mov_files_partial: '{ok} ok, {fail} falha · ZIP só sucessos ({output} KiB)',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'Adicione pelo menos um MOV ou carregue um exemplo.',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'Ainda sem MOV. Solte .mov locais ou carregue um exemplo. Sem YouTube, sem não-MOV.',
	tool_batch_extract_audio_from_mov_files_remove: 'Remover',
	tool_batch_extract_audio_from_mov_files_queue_count: '{n} MOV na fila',
	tool_batch_extract_audio_from_mov_files_status_pending: 'Pendente',
	tool_batch_extract_audio_from_mov_files_status_running: 'Extraindo…',
	tool_batch_extract_audio_from_mov_files_status_ok: 'Concluído',
	tool_batch_extract_audio_from_mov_files_status_fail: 'Falhou',
	tool_batch_extract_audio_from_mov_files_status_stopped: 'Parado',
	tool_batch_extract_audio_from_mov_files_err_file: 'Adicione apenas arquivos .mov.',
	tool_batch_extract_audio_from_mov_files_err_format:
		'Só .mov. Para MP4, WebM ou MKV: lote de vídeo misto.',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'MOV acima do limite demux (OPFS ~5 GiB / 6 h, senão ~1 GiB). Linha ignorada.',
	tool_batch_extract_audio_from_mov_files_err_container:
		'MOV ISOBMFF não demuxável. Linha ignorada.',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'MOV com codec de áudio que este caminho não decodifica. Linha ignorada.',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'MOV com layout de canais não suportado. Linha ignorada.',
	tool_batch_extract_audio_from_mov_files_err_decode: 'O navegador não conseguiu decodificar o áudio do MOV. Linha ignorada.',
	tool_batch_extract_audio_from_mov_files_err_encoder: 'Falha ao exportar áudio. Verifique o formato e extraia de novo.',
	tool_batch_extract_audio_from_mov_files_err_zip: 'Não foi possível criar o ZIP. Use menos MOV.',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'Máximo de 30 MOV na fila.',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'Não dá para criar MOV de exemplo neste navegador. Solte seus .mov.',
	tool_batch_extract_audio_from_mov_files_err_unsupported: 'Web Audio necessário para extrair está ausente.',
	tool_batch_extract_audio_from_mov_files_err_empty: 'Nenhum áudio utilizável na fila MOV.',
	tool_batch_extract_audio_from_mov_files_forced_mp3: 'Este MOV longo/grande forçou MP3 em streaming nesta linha.',
	tool_batch_extract_audio_from_mov_files_how_title: 'Como extrair áudio de vários MOV',
	tool_batch_extract_audio_from_mov_files_how_body:
		'Enfileire MOV locais, extraia um a um, baixe o ZIP — sem upload e sem colar URL.',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'Escolha vários .mov locais ou «Carregar exemplo» para dois MOV sintéticos curtos.',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'Se precisar de MP3, abra «Formato de exportação» e a taxa.',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'Clique «Extrair»: Ler → Demux → Extrair → Escrever por arquivo. «Parar» cancela o restante.',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'Após o HUD: «Baixar ZIP». Falhas ignoradas; ≥1 sucesso → empacota.',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'Por que este lote MOV?',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'Só MOV — sem misturar MP4/WebM/MKV em silêncio numa pasta «vários mov para mp3».',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'Extração sequencial mantém a RAM estável em MOV de celular de vários GiB (AAC em ISOBMFF).',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'Status por linha Pendente/Extraindo/Concluído/Falhou — um MOV ruim não quebra o ZIP inteiro.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'«Parar» interrompe. O download ZIP fica desativado até existir um arquivo real.',
	tool_batch_extract_audio_from_mov_files_rules_title: 'Fila MOV, sequencial, ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'Classificar cada MOV, extrair sozinho, colocar no ZIP. Sucessos parciais ficam. Não é YouTube→MP3 nem reencode de vídeo mudo.',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'Até 30 .mov; limite demux por arquivo (OPFS ~5 GiB / 6 h).',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'Não-MOV recusados na fila — MP4/WebM/MKV → hub misto.',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'Falha de linha = só essa linha; ≥1 sucesso → empacota.',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'Tudo no navegador no dispositivo — sem upload ao servidor.',
	tool_batch_extract_audio_from_mov_files_example_title: 'Testar um lote MOV real',
	tool_batch_extract_audio_from_mov_files_example:
		'Carregar exemplo cria dois MOV curtos com som (se MediaRecorder fizer H.264+AAC), extrai e coloca dois áudios no ZIP.',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'Casos de uso',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'Pasta de MOV do celular em ZIP de áudio estilo «mov para mp3 lote», sem nuvem.',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'Capturas de tela MOV da semana em áudios compartilháveis — local, não YouTube.',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'Juntar AAC de takes da câmera e manter os MOV originais intactos.',
	tool_batch_extract_audio_from_mov_files_faq_q1: 'Posso colar URLs ou playlists do YouTube?',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'Não. Só .mov locais por soltar ou escolher. Salve antes no dispositivo.',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'Tenho só um MOV — esta página?',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'Um arquivo → ferramenta MOV única. Esta página é para vários MOV e ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'Pasta com .mov e .mp4 misturados?',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'Aqui só .mov. Contentores mistos: «Extrair áudio de arquivos de vídeo (lote)».',
	tool_batch_extract_audio_from_mov_files_faq_q4: 'É um «mov para mp3 lote» online?',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'Mesma intenção para MOV locais: demux AAC, ZIP MP3/WAV no dispositivo — sem buscar URL.',
	tool_batch_extract_audio_from_mov_files_faq_q5: 'Por que sequencial e não paralelo?',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'Decodificar em paralelo dispara a RAM. Em série, só o áudio atual fica para o ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q6: 'Os vídeos sobem para um servidor?',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'Não. Leitura, demux e ZIP ficam no navegador no seu dispositivo.',
};
export default pt;
