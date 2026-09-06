/**
 * i18n tool shard（split-pdf / pt）. Reescrita independente.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_split_pdf_article:
    'Separe um PDF em ficheiros por página ou intervalos com pdf-lib no cliente. Várias saídas saem em ZIP via fflate — sem enviar ao servidor; os ficheiros ficam no dispositivo.',
  tool_split_pdf_choose_file: 'Escolher um PDF',
  tool_split_pdf_clear: 'Limpar',
  tool_split_pdf_desc: 'Extraia páginas de um PDF no dispositivo — cada página ou intervalos; ZIP quando preciso; sem enviar ao servidor.',
  tool_split_pdf_description:
    'Separe um PDF no navegador e descarregue páginas ou intervalos — sem enviar ao servidor. Passos: escolha um PDF, marque cada página ou escreva intervalos como 1-3,5, separe e descarregue. Exemplo: uma amostra de três páginas torna-se um ZIP com page-1.pdf a page-3.pdf. Um único ficheiro de saída descarrega como PDF. Ficheiros encriptados falham com mensagem clara.',
  tool_split_pdf_download: 'Descarregar',
  tool_split_pdf_drop_hint: 'Ou largue um PDF aqui. O processamento fica neste separador.',
  tool_split_pdf_empty: 'Escolha um ficheiro PDF primeiro.',
  tool_split_pdf_err_encrypted: 'Este PDF parece protegido por palavra-passe. Desbloqueie e tente de novo.',
  tool_split_pdf_err_fflate: 'Falha ao carregar a biblioteca ZIP. Verifique a rede e tente de novo.',
  tool_split_pdf_err_load: 'Não foi possível ler o PDF (danificado ou incompatível). Tente outro ficheiro.',
  tool_split_pdf_err_range: 'Páginas inválidas ou fora do intervalo. Use intervalos a partir de 1, p.ex. 1-3,5.',
  tool_split_pdf_err_split: 'A separação falhou. Verifique o ficheiro e os intervalos e tente novamente.',
  tool_split_pdf_example:
    'O exemplo cria um PDF de três páginas, separa cada página e ativa Descarregar para um ZIP com page-1.pdf, page-2.pdf e page-3.pdf.',
  tool_split_pdf_example_title: 'Dividir meu PDF',
  tool_split_pdf_faq_a1:
    'Não. pdf-lib e fflate correm no seu separador (os scripts vêm deste site). O PDF não é enviado para os nossos servidores.',
  tool_split_pdf_faq_a2:
    'Páginas a partir de 1: 1-3,5 significa as páginas 1–3 e a 5. Espaços são opcionais. Valores vazios ou fora do intervalo falham.',
  tool_split_pdf_faq_a3:
    'Se houver mais de um ficheiro, descarrega um ZIP. Um único ficheiro de saída descarrega como PDF.',
  tool_split_pdf_faq_a4:
    'PDFs com palavra-passe costumam falhar aqui. Remova a palavra-passe com uma ferramenta de confiança e depois separe.',
  tool_split_pdf_faq_a5:
    'Juntar PDF une vários PDFs num só. Esta ferramenta extrai páginas de um único PDF para ficheiros separados.',
  tool_split_pdf_faq_q1: 'O meu PDF é enviado?',
  tool_split_pdf_faq_q2: 'Como funcionam os intervalos?',
  tool_split_pdf_faq_q3: 'Quando é ZIP e quando é PDF?',
  tool_split_pdf_faq_q4: 'E PDFs encriptados?',
  tool_split_pdf_faq_q5: 'Qual a diferença para Juntar PDF?',
  tool_split_pdf_how_body:
    'Escolha um PDF, selecione cada página ou intervalos, clique Separar e depois Descarregar. Várias saídas vão num ZIP; uma só é PDF. Tudo local após carregar as bibliotecas.',
  tool_split_pdf_how_item_1: "Selecione a entrada com “Escolher um PDF”",
  tool_split_pdf_how_item_2: "Ajuste as opções e clique em “Separar”",
  tool_split_pdf_how_item_3: "Confira a prévia, a contagem de páginas ou o status",
  tool_split_pdf_how_item_4: "Clique em “Descarregar” para salvar o resultado",
  tool_split_pdf_how_title: 'Como funciona',
  tool_split_pdf_mode_every: 'Cada página (um ficheiro por página)',
  tool_split_pdf_mode_label: 'Modo de separação',
  tool_split_pdf_mode_ranges: 'Intervalos de páginas personalizados',
  tool_split_pdf_pages_label: 'Páginas no ficheiro',
  tool_split_pdf_ranges_hint: 'Exemplo: 1-3,5 (a partir de 1)',
  tool_split_pdf_ranges_label: 'Intervalos de páginas',
  tool_split_pdf_rules_body:
    'Intervalos a partir de 1, nomes, ZIP vs PDF, privacidade e falhas na separação local.',
  tool_split_pdf_rules_item_1:
    'Modos: cada página → um PDF por página; intervalos → um PDF por segmento separado por vírgulas (p.ex. 1-3 e 5).',
  tool_split_pdf_rules_item_2:
    'Nomes: page-N.pdf para uma página; pages-A-B.pdf para um intervalo contínuo.',
  tool_split_pdf_rules_item_3:
    'Saída: mais de um ficheiro → ZIP com fflate; exatamente um → descarrega esse PDF.',
  tool_split_pdf_rules_item_4:
    'Privacidade e limites: bytes ficam no separador; PDFs encriptados/corruptos falham com clareza; ficheiros enormes podem ser lentos.',
  tool_split_pdf_rules_title: 'Regras a esperar',
  tool_split_pdf_sample: 'Carregar exemplo',
  tool_split_pdf_split: 'Separar',
  tool_split_pdf_stats_tpl: '{n} ficheiro(s) · {bytes}',
  tool_split_pdf_status_done: 'Concluído — clique em Descarregar para guardar.',
  tool_split_pdf_status_splitting: 'A separar PDF…',
  tool_split_pdf_title: 'Dividir meu PDF',
  tool_split_pdf_usecase_1: 'Escritório: retirar uma página assinada de um contrato longo.',
  tool_split_pdf_usecase_2: 'Ensino: dividir um PDF de slides em folhetos por página.',
  tool_split_pdf_usecase_3: 'Ops: arquivar cada página digitalizada como ficheiro próprio.',
  tool_split_pdf_usecases_title: 'Bons encaixes',
  tool_split_pdf_warn_large: 'Ficheiro maior que ~25 MB — a separação pode ser lenta ou falhar em alguns navegadores.',
  tool_split_pdf_warn_pdflib: 'Falha ao carregar a biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
