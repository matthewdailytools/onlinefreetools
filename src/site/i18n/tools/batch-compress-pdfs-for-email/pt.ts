/**
 * i18n tool shard (batch-compress-pdfs-for-email / pt).
 * H1 segue a busca «Comprimir PDFs para e-mail em lote».
 */
import type { SiteLangDict } from '../../../types';

/** Português: vários anexos encolhem à parte e saem num ZIP. */
const pt: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'Antes do e-mail, encolha vários orçamentos ou digitalizações nesta aba. No ZIP continuam PDFs separados, não um caderno só. Cifrado ou pesado demais é ignorado e o resto baixa. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_compress_pdfs_for_email_choose_files: 'Escolher PDFs',
	tool_batch_compress_pdfs_for_email_chip_email: 'Predefinição e-mail',
	tool_batch_compress_pdfs_for_email_chip_max: 'Encolher ao máximo',
	tool_batch_compress_pdfs_for_email_chip_print: 'Predefinição impressão',
	tool_batch_compress_pdfs_for_email_clear: 'Limpar',
	tool_batch_compress_pdfs_for_email_col_after: 'Depois',
	tool_batch_compress_pdfs_for_email_col_before: 'Antes',
	tool_batch_compress_pdfs_for_email_col_name: 'Arquivo',
	tool_batch_compress_pdfs_for_email_col_status: 'Status',
	tool_batch_compress_pdfs_for_email_compress: 'Comprimir tudo',
	tool_batch_compress_pdfs_for_email_desc:
		'Comprimir PDFs para e-mail em lote: cada arquivo encolhe sozinho e o ZIP segue com vários PDFs; ficam no dispositivo, sem enviar a um servidor.',
	tool_batch_compress_pdfs_for_email_description:
		'Comprimir PDFs para e-mail em lote: coloque vários orçamentos ou digitalizações, aplique a predefinição de e-mail em cada um, ignore os cifrados ou pesados demais e baixe um ZIP de PDFs separados — não um caderno mesclado. Passos: escolha o lote, mantenha a predefinição de e-mail, comprima tudo, veja os bytes economizados. Exemplo: dois PDFs curtos de amostra continuam dois arquivos no ZIP. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_compress_pdfs_for_email_download_zip: 'Baixar ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: 'Solte PDFs (até 20). Cada arquivo é comprimido sozinho. O trabalho fica nesta aba.',
	tool_batch_compress_pdfs_for_email_empty: 'Adicione PDFs primeiro.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'Protegido por senha. Ignorado.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'Este navegador não montou o ZIP. Tente um atual.',
	tool_batch_compress_pdfs_for_email_err_load: 'Não foi possível ler este PDF. Ignorado.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'A biblioteca PDF não carregou. Tente um navegador atual.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'O pdf.js não carregou. Tente um navegador atual.',
	tool_batch_compress_pdfs_for_email_err_too_many: 'No máximo 20 PDFs. Os extras não entraram.',
	tool_batch_compress_pdfs_for_email_example:
		'Carregar exemplo cria dois PDFs curtos com uma página de imagem, aplica a predefinição de e-mail em cada um, deixa dois arquivos no ZIP e mostra os bytes economizados.',
	tool_batch_compress_pdfs_for_email_example_title: 'Exemplo',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'Não. A rasterização e a remontagem acontecem nesta aba. Os arquivos ficam no dispositivo e não são enviados a um servidor. pdf.js, pdf-lib e o auxiliar do ZIP podem carregar deste site; seus PDFs não saem da aba.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'Não. Você recebe um ZIP com N PDFs. Juntar num caderno é Mesclar PDF — outro trabalho, não esta página.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'Digitalizações com fotos costumam encolher. PDF só de texto às vezes quase não mexe. A tabela mostra o antes e o depois.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'Comprimir PDF trata um arquivo. Esta página compartilha uma predefinição de e-mail num lote e empacota os acertos num ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'Essa linha é ignorada e o resto segue. Desbloqueie noutro lugar e adicione de novo.',
	tool_batch_compress_pdfs_for_email_faq_q1: 'Os PDFs sobem para um servidor?',
	tool_batch_compress_pdfs_for_email_faq_q2: 'Isto junta tudo num único PDF?',
	tool_batch_compress_pdfs_for_email_faq_q3: 'Digitalizações encolhem mais que texto?',
	tool_batch_compress_pdfs_for_email_faq_q4: 'Qual a diferença para Comprimir PDF?',
	tool_batch_compress_pdfs_for_email_faq_q5: 'E se um arquivo estiver cifrado?',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} PDFs na fila',
	tool_batch_compress_pdfs_for_email_how_body:
		'Coloque vários anexos, escolha a predefinição de e-mail, comprima cada arquivo à parte e leve um ZIP dos que deram certo.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'Escolha os orçamentos ou digitalizações que precisam passar do limite do anexo.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'Mantenha a predefinição de e-mail, salvo se precisar de Impressão (mais nítido) ou Encolher ao máximo.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'Toque em Comprimir tudo. Os arquivos seguem separados. Nada vira um caderno só.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'Cifrados ou quebrados são ignorados. O resumo soma os bytes economizados nos acertos.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'Baixe o ZIP quando houver pelo menos um acerto. Só um PDF? Use Comprimir PDF.',
	tool_batch_compress_pdfs_for_email_how_title: 'Como comprimir o lote para o e-mail',
	tool_batch_compress_pdfs_for_email_preset_label: 'Predefinição compartilhada',
	tool_batch_compress_pdfs_for_email_rules_body:
		'Cada PDF é rasterizado em páginas JPEG e remontado. A saída é sempre um ZIP de PDFs separados.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'E-mail é o padrão: escala perto de 1.0 e JPEG perto de 0.55. Impressão é mais suave. O máximo encolhe mais.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'Cifrado, danificado ou sem memória ignora só aquela linha. Nomes repetidos no ZIP viram nome (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'Arquivo só de texto pode quase não encolher. É esperado; a tabela ainda informa os tamanhos.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_compress_pdfs_for_email_rules_title: 'O que esperar',
	tool_batch_compress_pdfs_for_email_sample: 'Carregar exemplo',
	tool_batch_compress_pdfs_for_email_status_compressing: 'Comprimindo cada PDF para o e-mail…',
	tool_batch_compress_pdfs_for_email_status_done: 'Lote pronto — confira a tabela e baixe o ZIP.',
	tool_batch_compress_pdfs_for_email_status_ok: 'Comprimido',
	tool_batch_compress_pdfs_for_email_status_skip: 'Ignorado',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} prontos · {skip} ignorados · economizados {saved}',
	tool_batch_compress_pdfs_for_email_title: 'Comprimir PDFs para e-mail em lote',
	tool_batch_compress_pdfs_for_email_usecase_1: 'Um lote de orçamentos que juntos estouram o teto de 25 MB da caixa.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'Enviar recibos digitalizados como anexos separados, não como um caderno.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'Encolher vários PDFs antes do e-mail sem mesclá-los.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'Quando faz sentido',
	tool_batch_compress_pdfs_for_email_warn_large: 'Há um arquivo maior que 40 MB — esta aba pode ficar sem memória nessa linha.',
};

export default pt;
