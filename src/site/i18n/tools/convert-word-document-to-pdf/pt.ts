/**
 * i18n 工具分片（convert-word-document-to-pdf / pt）。
 * 葡萄牙语（巴西用法）检索向重写：Converter documento Word para PDF。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语文案表；键名与英文母版一一对应。 */
const pt: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: "O .docx vira PDF nesta aba. O arquivo fica no seu dispositivo e não é enviado a um servidor.",
  tool_convert_word_document_to_pdf_choose_file: "Escolher um arquivo Word (.docx)",
  tool_convert_word_document_to_pdf_choose_files: "Escolher arquivos",
  tool_convert_word_document_to_pdf_clear: "Limpar",
  tool_convert_word_document_to_pdf_convert: "Converter",
  tool_convert_word_document_to_pdf_desc: "Converter documento Word para PDF no navegador: escolha o .docx, leia a prévia HTML e exporte. O arquivo fica no dispositivo e não é enviado a um servidor.",
  tool_convert_word_document_to_pdf_description: "Quem já tem um .docx e precisa de um PDF para imprimir faz isso no navegador: «Escolher um arquivo Word (.docx)», ler a prévia HTML, «Converter» e «Baixar PDF». O arquivo fica neste dispositivo e não é enviado a um servidor. «Carregar exemplo» monta um parágrafo e um PDF de uma página.",
  tool_convert_word_document_to_pdf_download: "Baixar PDF",
  tool_convert_word_document_to_pdf_drop_hint: "Ou solte um .docx aqui. O processamento fica nesta aba.",
  tool_convert_word_document_to_pdf_empty: "Escolha primeiro um arquivo .docx.",
  tool_convert_word_document_to_pdf_err_convert: "A conversão falhou. Tente de novo com um documento mais simples.",
  tool_convert_word_document_to_pdf_err_encrypted: "Este arquivo parece protegido por senha. Desbloqueie antes.",
  tool_convert_word_document_to_pdf_err_load: "Não foi possível ler o arquivo .docx.",
  tool_convert_word_document_to_pdf_err_notext: "Não há texto legível no corpo deste documento.",
  tool_convert_word_document_to_pdf_err_pdfjs: "O renderizador de PDF não carregou.",
  tool_convert_word_document_to_pdf_example: "«Carregar exemplo» cria um .docx só com «Parágrafo de exemplo do Word para a conversão.», mostra a prévia HTML e exporta um PDF de uma página.",
  tool_convert_word_document_to_pdf_example_title: "Exemplo",
  tool_convert_word_document_to_pdf_faq_a1: "Não. A leitura e a exportação do PDF acontecem nesta aba; os scripts vêm deste site. O documento não é enviado aos nossos servidores.",
  tool_convert_word_document_to_pdf_faq_a2: "O caminho é .docx, prévia HTML e depois PDF. Cabeçalhos, formas flutuantes e algumas fontes ficam achatados. Se a marcação já existe, use «Converter HTML para PDF».",
  tool_convert_word_document_to_pdf_faq_a3: "Não. Salve antes como .docx. Esta página só aceita o pacote Office Open XML e não faz OCR de digitalização.",
  tool_convert_word_document_to_pdf_faq_a4: "Aqui se começa de um arquivo Word pronto. «Escrever documento PDF online» é um editor em branco.",
  tool_convert_word_document_to_pdf_faq_a5: "Um .docx grande pode ficar lento. Comece num navegador de desktop.",
  tool_convert_word_document_to_pdf_faq_q1: "O arquivo Word sai deste computador?",
  tool_convert_word_document_to_pdf_faq_q2: "Por que o PDF fica mais simples do que no Word?",
  tool_convert_word_document_to_pdf_faq_q3: "Dá para converter um .doc antigo?",
  tool_convert_word_document_to_pdf_faq_q4: "Qual a diferença de escrever um PDF no navegador?",
  tool_convert_word_document_to_pdf_faq_q5: "Arquivos grandes funcionam?",
  tool_convert_word_document_to_pdf_how_body: "Comece por «Escolher um arquivo Word (.docx)» ou «Carregar exemplo». Depois leia a área «Prévia HTML», use «Converter» e «Baixar PDF». O arquivo não sai desta aba.",
  tool_convert_word_document_to_pdf_how_item_1: "Clique em «Escolher um arquivo Word (.docx)» ou «Carregar exemplo».",
  tool_convert_word_document_to_pdf_how_item_2: "Leia a área «Prévia HTML» do texto.",
  tool_convert_word_document_to_pdf_how_item_3: "Clique em «Converter» para montar o PDF a partir dessa prévia.",
  tool_convert_word_document_to_pdf_how_item_4: "Clique em «Baixar PDF» quando o status mostrar «Pronto.».",
  tool_convert_word_document_to_pdf_how_title: "Como converter documento Word para PDF",
  tool_convert_word_document_to_pdf_preview_label: "Prévia HTML",
  tool_convert_word_document_to_pdf_rules_body: "Só entra .docx. Layout, cabeçalhos e estilos complexos podem ficar achatados no PDF.",
  tool_convert_word_document_to_pdf_rules_item_1: "A tarefa: transformar um documento Word em PDF para impressão, no navegador.",
  tool_convert_word_document_to_pdf_rules_item_2: "Somente no seu dispositivo; o arquivo não é enviado a um servidor.",
  tool_convert_word_document_to_pdf_rules_item_3: ".doc antigo e digitalização só de imagem não passam por OCR.",
  tool_convert_word_document_to_pdf_rules_item_4: "Pacote com senha ou danificado para com uma mensagem legível.",
  tool_convert_word_document_to_pdf_rules_item_5: "Cabeçalhos, formas flutuantes e algumas fontes ficam achatados porque o caminho é .docx, HTML e então PDF.",
  tool_convert_word_document_to_pdf_rules_title: "O que a conversão realmente mantém",
  tool_convert_word_document_to_pdf_sample: "Carregar exemplo",
  tool_convert_word_document_to_pdf_sample_paragraph: "Parágrafo de exemplo do Word para a conversão.",
  tool_convert_word_document_to_pdf_status_done: "Pronto.",
  tool_convert_word_document_to_pdf_status_working: "Convertendo…",
  tool_convert_word_document_to_pdf_title: "Converter documento Word para PDF",
  tool_convert_word_document_to_pdf_usecase_1: "Escritório sem Word instalado, para enviar o rascunho em PDF",
  tool_convert_word_document_to_pdf_usecase_2: "Trabalho curto: conferir a prévia antes de imprimir",
  tool_convert_word_document_to_pdf_usecase_3: "Carta reservada que precisa ficar no dispositivo",
  tool_convert_word_document_to_pdf_usecases_title: "Quando vale a pena",
  tool_convert_word_document_to_pdf_warn_large: "Arquivo grande: pode demorar.",
};
export default pt;
