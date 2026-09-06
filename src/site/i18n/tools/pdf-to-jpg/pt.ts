/**
 * i18n tool shard (pdf-to-jpg / pt). Reescrita independente para buscas em português.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'Renderiza cada página do PDF em JPEG no navegador com o renderizador de páginas. Várias páginas baixam em ZIP via a biblioteca ZIP—o arquivo não sai do dispositivo.',
  tool_pdf_to_jpg_choose_file: 'Escolher PDF',
  tool_pdf_to_jpg_clear: 'Limpar',
  tool_pdf_to_jpg_convert: 'Converter',
  tool_pdf_to_jpg_desc: 'Transforme páginas PDF em JPG no dispositivo—ZIP com várias páginas; sem enviar ao servidor.',
  tool_pdf_to_jpg_description:
    'Converta páginas PDF em imagens JPG no navegador—o arquivo fica no dispositivo e não é enviado ao servidor. Passos: escolha um PDF, clique Converter e Baixar. Exemplo: uma amostra de duas páginas gera page-1.jpg e page-2.jpg dentro de um ZIP. PDF de uma página baixa um JPG direto. Arquivos com senha ou corrompidos mostram erro claro.',
  tool_pdf_to_jpg_download: 'Baixar',
  tool_pdf_to_jpg_drop_hint: 'Ou solte um PDF aqui. O processamento fica nesta aba.',
  tool_pdf_to_jpg_empty: 'Escolha um PDF primeiro.',
  tool_pdf_to_jpg_err_convert: 'A conversão falhou. Verifique o arquivo e tente de novo.',
  tool_pdf_to_jpg_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie antes de converter.',
  tool_pdf_to_jpg_err_fflate: 'Falha ao carregar a biblioteca ZIP. Verifique a rede e tente novamente.',
  tool_pdf_to_jpg_err_load: 'Não foi possível ler o PDF (danificado ou incompatível). Tente outro arquivo.',
  tool_pdf_to_jpg_err_pdfjs: 'Falha ao carregar o renderizador PDF. Verifique a rede e tente novamente.',
  tool_pdf_to_jpg_example:
    'A amostra cria um PDF de duas páginas, converte cada uma e habilita Baixar com ZIP contendo page-1.jpg e page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'Converter páginas PDF em JPG',
  tool_pdf_to_jpg_faq_a1:
    'Não. o renderizador de páginas e a biblioteca ZIP rodam na sua aba (scripts vêm deste site). Seu PDF não é enviado aos nossos servidores.',
  tool_pdf_to_jpg_faq_a2:
    'Mais de uma página → ZIP pdf-pages.zip com page-1.jpg, page-2.jpg etc. Uma página → um JPG direto.',
  tool_pdf_to_jpg_faq_a3:
    'Imagens para PDF junta fotos em um PDF multipágina. Esta ferramenta exporta cada página do PDF como JPG separado.',
  tool_pdf_to_jpg_faq_a4:
    'Páginas renderizam em escala 2× para texto mais nítido. PDFs muito grandes podem demorar mais.',
  tool_pdf_to_jpg_faq_a5:
    'Esta página gera só JPG. Use o conversor de formato de imagem se precisar de PNG ou WebP a partir de uma imagem.',
  tool_pdf_to_jpg_faq_q1: 'Meu PDF é enviado?',
  tool_pdf_to_jpg_faq_q2: 'Quando recebo ZIP e quando um JPG?',
  tool_pdf_to_jpg_faq_q3: 'Qual a diferença de Imagens para PDF?',
  tool_pdf_to_jpg_faq_q4: 'Por que o JPG fica nítido ou borrado?',
  tool_pdf_to_jpg_faq_q5: 'Posso obter PNG?',
  tool_pdf_to_jpg_how_body:
    'Escolha um PDF, clique Converter e depois Baixar. Cada página vira JPG; várias páginas vão em ZIP. Tudo local após carregar as bibliotecas.',
  tool_pdf_to_jpg_how_title: 'Como funciona',
  tool_pdf_to_jpg_pages_label: 'Páginas',
  tool_pdf_to_jpg_rules_body: 'Escala de renderização, saída JPG, ZIP vs arquivo único, privacidade e falhas.',
  tool_pdf_to_jpg_rules_item_1:
    'Cada página exporta JPEG com escala 2× e qualidade 0.92—bom para slides e digitalizações.',
  tool_pdf_to_jpg_rules_item_2: 'Nomes: page-N.jpg para a página N. Várias páginas → pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3: 'Saída: 1 página → JPG; 2 ou mais → ZIP via a biblioteca ZIP.',
  tool_pdf_to_jpg_rules_item_4:
    'Privacidade e limites: bytes ficam na aba; PDF criptografado/corrompido falha com mensagem clara; >25 MB pode ficar lento.',
  tool_pdf_to_jpg_rules_title: 'Regras esperadas',
  tool_pdf_to_jpg_sample: 'Carregar exemplo',
  tool_pdf_to_jpg_stats_tpl: '{n} página(s) · {bytes}',
  tool_pdf_to_jpg_status_converting: 'Convertendo páginas para JPG…',
  tool_pdf_to_jpg_status_done: 'Pronto — clique Baixar para salvar.',
  tool_pdf_to_jpg_title: 'Converter páginas PDF em JPG',
  tool_pdf_to_jpg_usecase_1: 'Escritório: exporte um slide ou página assinada para colar no chat.',
  tool_pdf_to_jpg_usecase_2: 'Marketing: extraia miniaturas JPG de um catálogo em PDF.',
  tool_pdf_to_jpg_usecase_3: 'Estudantes: salve páginas de PDF como imagens para anotações.',
  tool_pdf_to_jpg_usecases_title: 'Bons casos de uso',
  tool_pdf_to_jpg_warn_large: 'Arquivo maior que ~25 MB — a conversão pode ficar lenta ou falhar em alguns navegadores.',
  tool_pdf_to_jpg_warn_pdflib: 'Falha ao carregar a biblioteca PDF. Verifique a rede e tente novamente.',
};
export default pt;
