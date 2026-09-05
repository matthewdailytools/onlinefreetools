/**
 * i18n 工具分片（compress-pdf / pt）。按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_compress_pdf_article:
    'Reduza o tamanho de um PDF no navegador redesenhando cada página como JPEG e reconstruindo o documento—o arquivo fica no dispositivo, sem enviar ao servidor. Compressão limitada e honesta, não re-codificação na nuvem.',
  tool_compress_pdf_choose_file: 'Escolher PDF',
  tool_compress_pdf_clear: 'Limpar',
  tool_compress_pdf_compress: 'Comprimir',
  tool_compress_pdf_desc:
    'Comprima um PDF no navegador para diminuir o tamanho—o arquivo permanece no dispositivo, sem envio ao servidor.',
  tool_compress_pdf_description:
    'Comprima o tamanho de um PDF no navegador e veja bytes antes e depois—nada é enviado ao servidor. Passos: abra um PDF, escolha Médio ou Baixo, comprima e baixe. Exemplo: amostra de duas páginas com imagens cai de ~180 KB para ~90 KB no Médio. PDFs só texto podem quase não mudar. Criptografados falham com erro claro. Diferente de Organizar (reordenar) e Mesclar (juntar).',
  tool_compress_pdf_download: 'Baixar',
  tool_compress_pdf_drop_hint: 'Ou solte um PDF aqui. O processamento fica nesta aba.',
  tool_compress_pdf_empty: 'Adicione um PDF para comprimir.',
  tool_compress_pdf_err_compress: 'Falha ao comprimir. Verifique o arquivo e tente de novo.',
  tool_compress_pdf_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie primeiro.',
  tool_compress_pdf_err_load: 'Não foi possível ler o PDF (danificado ou incompatível). Tente outro arquivo.',
  tool_compress_pdf_example:
    'A amostra carrega um PDF de duas páginas com blocos coloridos e JPEG embutido, aplica compressão Média, mostra tamanho antes/depois com percentual economizado e habilita o download de compressed.pdf.',
  tool_compress_pdf_example_title: 'Reduzir o tamanho do PDF',
  tool_compress_pdf_faq_a1:
    'Não. pdf.js e a biblioteca PDF rodam na sua aba (bibliotecas podem carregar de um CDN). O PDF não é enviado aos nossos servidores.',
  tool_compress_pdf_faq_a2:
    'A ferramenta rasteriza cada página em JPEG e reconstrói o PDF. Arquivos só texto ou já otimizados podem quase não encolher. Não é recompressão na nuvem de fluxos embutidos.',
  tool_compress_pdf_faq_a3:
    'Não. As páginas são redesenhadas como imagens no navegador—sem etapa na nuvem e seus bytes não saem do dispositivo.',
  tool_compress_pdf_faq_a4: 'PDFs com senha geralmente falham aqui. Remova a senha e tente de novo.',
  tool_compress_pdf_faq_a5:
    'Médio mantém mais detalhe (escala 1.2, JPEG ~72%). Baixo é menor porém mais suave (escala 1.0, JPEG ~55%). Escolha conforme limite de e-mail vs legibilidade.',
  tool_compress_pdf_faq_q1: 'Meu PDF é enviado?',
  tool_compress_pdf_faq_q2: 'Por que quase não diminuiu?',
  tool_compress_pdf_faq_q3: 'É re-codificação na nuvem?',
  tool_compress_pdf_faq_q4: 'E PDFs criptografados?',
  tool_compress_pdf_faq_q5: 'Qual qualidade escolher?',
  tool_compress_pdf_how_body:
    'Escolha um PDF, selecione Médio ou Baixo, clique Comprimir e Baixar. Cada página vira JPEG em um PDF novo. Estatísticas mostram tamanho original, novo e percentual. Bibliotecas carregam no primeiro uso.',
  tool_compress_pdf_how_item_1: "Selecione a entrada com “Escolher PDF”",
  tool_compress_pdf_how_item_2: "Ajuste as opções e clique em “Comprimir”",
  tool_compress_pdf_how_item_3: "Confira a prévia, a contagem de páginas ou o status",
  tool_compress_pdf_how_item_4: "Clique em “Baixar” para salvar o resultado",
  tool_compress_pdf_how_title: 'Como funciona',
  tool_compress_pdf_pages_label: 'Páginas',
  tool_compress_pdf_quality_label: 'Qualidade',
  tool_compress_pdf_quality_low: 'Baixa — arquivo menor',
  tool_compress_pdf_quality_med: 'Média — equilibrada',
  tool_compress_pdf_rules_body:
    'Como funcionam presets JPEG, estatísticas antes/depois, privacidade e falhas ao comprimir localmente.',
  tool_compress_pdf_rules_item_1:
    'Motor: pdf.js desenha cada página no canvas; a biblioteca PDF embute JPEG em PDF novo—sem enviar seu arquivo ao servidor.',
  tool_compress_pdf_rules_item_2:
    'Presets: Médio (escala 1.2, JPEG ~72%) vs Baixo (escala 1.0, JPEG ~55%). Preset menor = arquivo menor porém mais macio.',
  tool_compress_pdf_rules_item_3:
    'Estatísticas: bytes originais, comprimidos e percentual de mudança. Economia abaixo de 5% mostra aviso de pouca redução.',
  tool_compress_pdf_rules_item_4:
    'Limites: PDF criptografado/corrompido falha com erro legível; arquivos muito grandes (>~25 MB) podem ser lentos; PDF só texto pode pouco encolher.',
  tool_compress_pdf_rules_title: 'Regras esperadas',
  tool_compress_pdf_sample: 'Carregar amostra',
  tool_compress_pdf_stats_tpl: '{from} → {to} · {pct}% economizado',
  tool_compress_pdf_status_done: 'Pronto — clique Baixar para salvar compressed.pdf.',
  tool_compress_pdf_status_working: 'Comprimindo PDF…',
  tool_compress_pdf_title: 'Reduzir o tamanho do PDF',
  tool_compress_pdf_usecase_1: 'Escritório: encolha um escaneamento antes do limite de anexo.',
  tool_compress_pdf_usecase_2: 'Estudantes: reduza PDF com fotos para caber no formulário.',
  tool_compress_pdf_usecase_3: 'Sites: alivie um PDF de marketing para compartilhar quando qualidade raster basta.',
  tool_compress_pdf_usecases_title: 'Bons casos',
  tool_compress_pdf_warn_large: 'Arquivo maior que ~25 MB—comprimir pode ser lento ou falhar em alguns navegadores.',
  tool_compress_pdf_warn_little: 'Quase sem mudança—PDF só texto ou já comprimido pode não se beneficiar do JPEG raster.',
  tool_compress_pdf_warn_pdflib: 'Falha ao carregar biblioteca PDF. Verifique a rede e tente de novo.',
  tool_compress_pdf_warn_pdfjs: 'Falha ao carregar renderizador PDF. Verifique a rede e tente de novo.',
};
export default pt;
