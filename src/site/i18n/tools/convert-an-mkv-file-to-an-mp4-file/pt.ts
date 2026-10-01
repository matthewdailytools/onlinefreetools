import type { SiteLangDict } from '../../../types';

/**
 * Português (Brasil): converter MKV em MP4 no navegador (D2).
 * AAC estéreo; não é remux puro; sem YouTube; cerca de 5 GiB com OPFS (cerca de 1 GiB sem); E-AC-3 via helper WASM.
 * Chaves alinhadas à master EN; reescrita nativa, sem calque do inglês.
 */
const pt: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'Converter um arquivo MKV em arquivo MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'Converta um MKV local em MP4 no navegador, com áudio AAC estéreo. Vídeo copiado quando possível. cerca de 5 GiB com OPFS (cerca de 1 GiB sem). Nada é enviado.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'Converta um MKV local em MP4 no seu dispositivo, com faixa AAC estéreo para players e ferramentas de extração. Passos: escolher MKV → Converter → Baixar. Exemplo: Carregar amostra converte um clipe Matroska sintético curto. Pacotes de vídeo são copiados quando o navegador mantém o codec; o áudio é sempre recodificado em AAC (E-AC-3 / DDP decodificáveis via helper WASM na página). Limite inicial cerca de 5 GiB com OPFS (cerca de 1 GiB sem) — rips maiores continuam no ffmpeg do computador. Só local, não baixa link do YouTube. Nunca enviado. Só precisa da voz depois? Abra Extrair áudio de um arquivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'Editores e celulares pedem MP4, mas gravações chegam em MKV. Esta página remuxa quando é seguro e sempre grava AAC estéreo — não um remux mudo com E-AC-3 que o navegador não toca. Não busca URL remota, ainda não faz lote ZIP, nem substitui páginas de extração — com MP4 AAC, as ferramentas relacionadas vêm depois.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'Escolher um arquivo MKV',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'Solte um .mkv local (cerca de 5 GiB com OPFS (cerca de 1 GiB sem). O áudio vira AAC estéreo. Não é YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'Converter',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'Baixar',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'Carregar amostra',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'Limpar',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'Parar',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'Configurações de áudio (opcional)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'Canais de áudio',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'Estéreo (padrão)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'Mono',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'Qualidade AAC',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'Arquivo menor',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'Equilibrado',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'Maior qualidade (padrão)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'O padrão serve na maioria dos casos: AAC estéreo em qualidade alta. Alterar configurações apaga um download já pronto.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'Progresso da conversão',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'Carregar motor',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'Ler',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'Decodificar',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'Codificar',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'Gravar',
  tool_convert_an_mkv_file_to_an_mp4_file_done:
    'Pronto. Baixe o MP4 ou abra a ferramenta de extração MP4 só para o áudio.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed:
    'Falha na conversão. Tente um MKV menor ou outra faixa de áudio.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '{s} s decorridos',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'Prévia do MP4 convertido',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'Entrada {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'demo-curto-mkv-para-mp4',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'Escolha um MKV ou carregue a amostra primeiro.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'Nenhum arquivo ainda. Solte um .mkv local até cerca de 5 GiB com OPFS ou Carregar amostra. Não é YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'Parado. Nenhum MP4 parcial é mantido.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'Solte exatamente um arquivo MKV.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'Arquivo não suportado. Nesta página, só .mkv.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'Este MKV passa do limite cerca de 5 GiB com OPFS (cerca de 1 GiB sem) para conversão no navegador. Use ffmpeg no computador para arquivos maiores.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'Não foi possível abrir como Matroska ou não restou faixa de vídeo/áudio utilizável.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'Algum codec de áudio ou vídeo não pôde ser decodificado ou codificado aqui. Tente outra faixa ou converta no PC com ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'Não foi possível gravar o MP4. Tente Converter de novo.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'Não foi possível carregar o MKV de amostra. Use seu próprio arquivo.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'Não foi possível carregar o motor de conversão neste navegador.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'A conversão foi interrompida.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'Como converter um arquivo MKV em arquivo MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'Solte um MKV local, clique em Converter e baixe o MP4 — o áudio vira AAC estéreo para extrações depois.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1:
    'Escolha um .mkv local até cerca de 5 GiB com OPFS ou clique em Carregar amostra.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2:
    'Opcional: abra Configurações de áudio para mono ou AAC com arquivo menor.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    'Clique em Converter e aguarde Carregar motor → Ler → Decodificar → Codificar → Gravar (ou Parar).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'Pré-visualize se houver, depois Baixar. Só a voz em seguida: Extrair áudio de um arquivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title:
    'Por que converter MKV em MP4 nesta página',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    'AAC estéreo de propósito — não remux que mantém E-AC-3 injogável em muitos navegadores.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    'Vídeo copiado quando dá: clipes longos terminam mais rápido que recodificar tudo.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    'Processamento no dispositivo; o motor carrega uma vez só deste site.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    'Próximo passo claro para extrair áudio: página MP4 relacionada após o download.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV para MP4 com AAC: limites honestos',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'Um MKV local por execução. Áudio recodificado em AAC. Limites e codecs descritos com clareza — rips multi‑GB podem exigir ffmpeg no PC.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'cerca de 5 GiB com OPFS (cerca de 1 GiB sem). Acima disso → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'Sem download por URL ou YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3 / DDP decodificáveis pelo helper AC-3 incluído, depois AAC estéreo. Codecs de vídeo exóticos podem dar err_codec.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'O MKV original nunca é sobrescrito. Para vários arquivos use Converter arquivos MKV em MP4 em lote (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'Testar uma conversão real',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    'Carregar amostra busca um MKV curto no site e Converter roda em seguida. Para validar de verdade, use seu .mkv dentro do limite.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'Quando ajuda',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1:
    'Um MKV de gravação de tela precisa abrir num editor que só aceita MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'MKV com DDP/Atmos precisa de AAC antes de Extrair áudio de um arquivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'Quer um MP4 para compartilhar sem mandar o Matroska para conversor na nuvem.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'Posso colar um link do YouTube?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'Não. Só .mkv local.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'É só remux (mesmo codec de áudio)?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'Não. O áudio é sempre recodificado em AAC para demux no navegador e muitos players. O vídeo ainda pode ser copiado sem recodificar.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'Meu MKV tem Dolby Atmos / DDP / E-AC-3 — funciona?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'Muitas vezes sim dentro do limite: a página carrega decodificador AC-3/E-AC-3, faz downmix para AAC estéreo e grava MP4. Rips enormes podem falhar ou ficar lentos — use ffmpeg no PC.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'Meu arquivo é enviado?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4:
    'Não. A conversão roda no navegador. Os scripts do motor carregam uma vez deste site.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'Só preciso da faixa de áudio — uso esta página?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'Se o MKV já cabe no fallback de extração e o codec é amigável ao navegador: Extrair áudio de um arquivo MKV. Se for DDP ou grande demais para extrair: converta aqui, depois Extrair áudio de um arquivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'WebM ou MOV em vez de MKV?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6:
    'Esta página aceita só .mkv. Outros contêineres terão páginas próprias depois.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'Converter vários MKV de uma vez?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7:
    'Ainda não há lote ZIP nesta página. Por enquanto, um arquivo por vez.',
};
export default pt;
