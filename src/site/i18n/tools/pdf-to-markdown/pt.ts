/**
 * i18n tool shard (pdf-to-markdown / pt). Redação independente.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'Extraia texto selecionável da camada de texto do PDF no navegador e baixe Markdown — o arquivo fica no dispositivo, sem enviar ao servidor. Sem OCR.',
  tool_pdf_to_markdown_choose_file: 'Escolher um PDF',
  tool_pdf_to_markdown_clear: 'Limpar',
  tool_pdf_to_markdown_convert: 'Converter',
  tool_pdf_to_markdown_desc:
    'Transforme texto de PDF em Markdown no dispositivo para notas — sem enviar ao servidor.',
  tool_pdf_to_markdown_description:
    'Extraia texto de PDF para Markdown no navegador para notas ou LLM — o arquivo fica no dispositivo e não é enviado ao servidor. Passos: escolha um PDF com camada de texto, Converta, veja a prévia e baixe .md. Exemplo: a amostra de uma página gera .md com «Hello PDF to Markdown sample.» Escaneamentos só imagem falham (sem OCR). Criptografados mostram erro claro.',
  tool_pdf_to_markdown_download: 'Baixar .md',
  tool_pdf_to_markdown_drop_hint: 'Ou solte um PDF aqui. O processamento fica nesta aba.',
  tool_pdf_to_markdown_empty: 'Escolha um arquivo PDF primeiro.',
  tool_pdf_to_markdown_err_convert: 'A conversão falhou. Verifique o arquivo e tente de novo.',
  tool_pdf_to_markdown_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie e tente novamente.',
  tool_pdf_to_markdown_err_load: 'Não foi possível ler o PDF (danificado ou incompatível). Tente outro arquivo.',
  tool_pdf_to_markdown_err_notext:
    'Nenhum texto selecionável. Só lemos a camada de texto — sem OCR. Tente PDF digital ou PDF para JPG para imagens.',
  tool_pdf_to_markdown_err_pdfjs: 'Falha ao carregar o renderizador PDF. Verifique a rede e tente de novo.',
  tool_pdf_to_markdown_example:
    'A amostra cria PDF de uma página com Helvetica, converte, mostra a frase na prévia e habilita Baixar .md.',
  tool_pdf_to_markdown_example_title: 'Exemplo',
  tool_pdf_to_markdown_faq_a1:
    'Não. O o renderizador de páginas roda na sua aba (scripts podem vir de CDN). Seu PDF não é enviado aos nossos servidores.',
  tool_pdf_to_markdown_faq_a2:
    'Escaneamentos costumam ser imagens sem camada de texto. Sem OCR, a extração fica vazia e falha com mensagem clara.',
  tool_pdf_to_markdown_faq_a3: 'Não reconstrói títulos ou tabelas — linhas de texto plano por posição.',
  tool_pdf_to_markdown_faq_a4:
    'Extrair texto de PDF baixa .txt simples com linhas em branco entre páginas. Esta ferramenta envolve cada página como ## Page N e separa com --- para editores Markdown.',
  tool_pdf_to_markdown_faq_a5:
    'PDF para JPG rasteriza cada página como imagem. Use esta ferramenta quando precisar de texto editável.',
  tool_pdf_to_markdown_faq_q1: 'Meu PDF é enviado?',
  tool_pdf_to_markdown_faq_q2: 'Por que meu PDF escaneado falha?',
  tool_pdf_to_markdown_faq_q3: 'Preserva títulos ou tabelas?',
  tool_pdf_to_markdown_faq_q4: 'Como difere de Extrair texto de PDF?',
  tool_pdf_to_markdown_faq_q5: 'Quando usar PDF para JPG?',
  tool_pdf_to_markdown_how_body:
    'Escolha um PDF com camada de texto, converta, revise o rascunho Markdown com títulos por página e baixe .md. Páginas escaneadas sem texto falham claramente — sem OCR.',
  tool_pdf_to_markdown_how_item_1: "Escolha ou solte um PDF com camada de texto (ou Carregar exemplo)",
  tool_pdf_to_markdown_how_item_2: "Clique em Converter para montar o rascunho Markdown",
  tool_pdf_to_markdown_how_item_3: "Revise seções ## Page N e separadores --- na prévia",
  tool_pdf_to_markdown_how_item_4: "Clique em Baixar .md para salvar o rascunho",
  tool_pdf_to_markdown_how_title: 'Como funciona',
  tool_pdf_to_markdown_pages_label: 'Páginas',
  tool_pdf_to_markdown_preview_label: 'Prévia Markdown',
  tool_pdf_to_markdown_rules_body: 'Extração de camada de texto, separadores, sem OCR, privacidade e falhas.',
  tool_pdf_to_markdown_rules_item_1: 'Cada página vira ## Page N mais linhas de texto; páginas separadas por --- para editores Markdown.',
  tool_pdf_to_markdown_rules_item_2: 'Diferente de Extrair texto de PDF (.txt): este download é um rascunho .md para editores — não conversão fiel ao layout.',
  tool_pdf_to_markdown_rules_item_3: 'Sem OCR: texto vazio após trim → falha com mensagem legível.',
  tool_pdf_to_markdown_rules_item_4: 'Limites: bytes na aba; criptografado/corrompido falha claro; >~25 MB pode demorar.',
  tool_pdf_to_markdown_rules_title: 'Regras esperadas',
  tool_pdf_to_markdown_sample: 'Carregar amostra',
  tool_pdf_to_markdown_stats_tpl: '{n} página(s) · {chars} caracteres',
  tool_pdf_to_markdown_status_converting: 'Extraindo texto…',
  tool_pdf_to_markdown_status_done: 'Pronto — clique Baixar .md para salvar.',
  tool_pdf_to_markdown_title: 'PDF para Markdown — extraia texto para notas no dispositivo',
  tool_pdf_to_markdown_usecase_1: 'Escritório: copie cláusulas de contratos para notas sem redigitar.',
  tool_pdf_to_markdown_usecase_2: 'Autores e IA: exporte relatórios em Markdown para editar ou prompts.',
  tool_pdf_to_markdown_usecase_3: 'Estudantes: texto legível de PDFs com camada de texto.',
  tool_pdf_to_markdown_usecases_title: 'Bons casos de uso',
  tool_pdf_to_markdown_warn_large: 'Arquivo maior que ~25 MB — extração pode ficar lenta ou falhar.',
  tool_pdf_to_markdown_warn_pdflib: 'Falha ao carregar biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
