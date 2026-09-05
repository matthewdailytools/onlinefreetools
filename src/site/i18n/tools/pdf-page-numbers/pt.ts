/**
 * i18n tool shard (pdf-page-numbers / pt). Reescrito para buscas locais.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_pdf_page_numbers_add: 'Numerar',
  tool_pdf_page_numbers_article:
    'Adicione números de página a cada folha do PDF no navegador com a biblioteca PDF. Escolha canto ou centro, número inicial e margem—o arquivo fica no dispositivo, sem enviar ao servidor.',
  tool_pdf_page_numbers_choose_file: 'Escolher PDF',
  tool_pdf_page_numbers_clear: 'Limpar',
  tool_pdf_page_numbers_desc:
    'Numerar PDF no navegador—posição e número inicial à sua escolha; sem enviar ao servidor, ficam no dispositivo.',
  tool_pdf_page_numbers_description:
    'Adicione números de página a um PDF no navegador—sem enviar ao servidor. Passos: abra um PDF, escolha centro inferior ou canto, defina o primeiro número (padrão 1), margem e tamanho, opcionalmente «Página N», numere e baixe. Exemplo: amostra de três páginas com números no centro inferior a partir de 1 e download numbered.pdf. PDF criptografados falham com erro claro.',
  tool_pdf_page_numbers_download: 'Baixar',
  tool_pdf_page_numbers_drop_hint: 'Ou solte um PDF aqui. Tudo roda nesta aba.',
  tool_pdf_page_numbers_empty: 'Escolha um PDF primeiro.',
  tool_pdf_page_numbers_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie e tente de novo.',
  tool_pdf_page_numbers_err_load: 'Não foi possível ler o PDF (corrompido ou incompatível). Tente outro arquivo.',
  tool_pdf_page_numbers_err_number: 'Falha na numeração. Verifique arquivo e ajustes e tente novamente.',
  tool_pdf_page_numbers_example:
    'A amostra cria um PDF de três páginas, numera no centro inferior a partir de 1 e habilita Baixar numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'Exemplo',
  tool_pdf_page_numbers_faq_a1:
    'Não. O a biblioteca PDF roda na sua aba (scripts podem vir de CDN). Seu PDF não é enviado aos nossos servidores.',
  tool_pdf_page_numbers_faq_a2:
    'Sim—«Começar em» é o número na página 1 (ex.: 0 para capa, ou 5 após remover folhas). Cada página seguinte soma 1.',
  tool_pdf_page_numbers_faq_a3:
    'Números simples (1, 2, 3…) ou rótulos «Página N». Posição, margem (pt) e tamanho valem para todas as folhas.',
  tool_pdf_page_numbers_faq_a4:
    'PDF com senha geralmente não abre aqui. Remova a senha com uma ferramenta confiável e numere de novo.',
  tool_pdf_page_numbers_faq_q1: 'Meu PDF é enviado?',
  tool_pdf_page_numbers_faq_q2: 'Posso começar depois da capa?',
  tool_pdf_page_numbers_faq_q3: 'Quais formatos e posições?',
  tool_pdf_page_numbers_faq_q4: 'E PDF criptografados?',
  tool_pdf_page_numbers_font_size_label: 'Tamanho (pt)',
  tool_pdf_page_numbers_format_label: 'Formato',
  tool_pdf_page_numbers_format_number: 'Só número',
  tool_pdf_page_numbers_format_page_n: 'Página N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Página {n}',
  tool_pdf_page_numbers_how_body:
    'Escolha um PDF, posição (centro inferior padrão), primeiro número, margem e tamanho, clique Numerar e Baixar. Números desenhados em cada página. Biblioteca carrega no primeiro uso.',
  tool_pdf_page_numbers_how_item_1: "Selecione a entrada com “Escolher PDF”",
  tool_pdf_page_numbers_how_item_2: "Ajuste as opções e clique em “Numerar”",
  tool_pdf_page_numbers_how_item_3: "Confira a prévia, a contagem de páginas ou o status",
  tool_pdf_page_numbers_how_item_4: "Clique em “Baixar” para salvar o resultado",
  tool_pdf_page_numbers_how_title: 'Como funciona',
  tool_pdf_page_numbers_margin_label: 'Margem (pt)',
  tool_pdf_page_numbers_pages_label: 'Páginas',
  tool_pdf_page_numbers_position_bc: 'Centro inferior',
  tool_pdf_page_numbers_position_bl: 'Inferior esquerdo',
  tool_pdf_page_numbers_position_br: 'Inferior direito',
  tool_pdf_page_numbers_position_label: 'Posição',
  tool_pdf_page_numbers_position_tc: 'Centro superior',
  tool_pdf_page_numbers_position_tl: 'Superior esquerdo',
  tool_pdf_page_numbers_position_tr: 'Superior direito',
  tool_pdf_page_numbers_rules_body:
    'Posições, valor inicial, formato, privacidade e limites da numeração local.',
  tool_pdf_page_numbers_rules_item_1:
    'Posição: centro inferior (padrão), centro topo/base ou cantos. Margem em pontos PDF (24 pt padrão).',
  tool_pdf_page_numbers_rules_item_2:
    'Começar em: número na página 1 (1 padrão). Cada folha +1—útil após excluir páginas no Organize PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'Formato: dígito ou «Página N». Tamanho 12 pt padrão. Saída nova; original não vai ao servidor.',
  tool_pdf_page_numbers_rules_item_4:
    'Limites: PDF criptografado/corrompido falha claro; >~25 MB pode ficar lento; números ficam gravados—precisa do original.',
  tool_pdf_page_numbers_rules_title: 'Regras esperadas',
  tool_pdf_page_numbers_sample: 'Carregar exemplo',
  tool_pdf_page_numbers_start_at_label: 'Começar em',
  tool_pdf_page_numbers_stats_tpl: '{n} página(s) numerada(s) · {bytes}',
  tool_pdf_page_numbers_status_done: 'Pronto — clique Baixar para salvar numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'Numerando páginas…',
  tool_pdf_page_numbers_title: 'Numerar PDF — adicione números de página no navegador',
  tool_pdf_page_numbers_usecase_1: 'Escritório: numerar relatório antes de imprimir para citar «página 12».',
  tool_pdf_page_numbers_usecase_2: 'Estudantes: rodapé 1–N na tese após juntar capítulos.',
  tool_pdf_page_numbers_usecase_3: 'Donos de site: numerar apostilas já reorganizadas ou com marca d’água.',
  tool_pdf_page_numbers_usecases_title: 'Bons casos',
  tool_pdf_page_numbers_warn_large: 'Arquivo maior que ~25 MB — numeração pode ficar lenta ou falhar.',
  tool_pdf_page_numbers_warn_pdflib: 'Falha ao carregar biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
