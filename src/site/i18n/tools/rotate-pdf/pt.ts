/**
 * i18n tool shard (rotate-pdf / pt). Reescrito para buscas locais.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° anti-horário',
  tool_rotate_pdf_angle_90cw: '90° horário',
  tool_rotate_pdf_angle_label: 'Rotação',
  tool_rotate_pdf_article:
    'Endireite páginas PDF de lado ou de cabeça para baixo no navegador com a biblioteca PDF. Gire todas ou um intervalo—sem enviar ao servidor.',
  tool_rotate_pdf_choose_file: 'Escolher PDF',
  tool_rotate_pdf_clear: 'Limpar',
  tool_rotate_pdf_desc:
    'Corrija a orientação do PDF no dispositivo—todas as páginas ou um intervalo; nada vai ao servidor.',
  tool_rotate_pdf_description:
    'Gire páginas PDF no navegador para corrigir mistura paisagem/retrato—nada é enviado ao servidor. Passos: escolha um PDF, todas as páginas ou intervalos como 1-3,5, escolha 90° horário, 180° ou 90° anti-horário, gire e baixe. Exemplo: amostra de duas páginas gira tudo 90° horário e habilita Baixar rotated.pdf. Criptografados falham com erro claro.',
  tool_rotate_pdf_download: 'Baixar',
  tool_rotate_pdf_drop_hint: 'Ou solte um PDF aqui. O processamento fica nesta aba.',
  tool_rotate_pdf_empty: 'Escolha um PDF primeiro.',
  tool_rotate_pdf_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie e tente de novo.',
  tool_rotate_pdf_err_load: 'Não foi possível ler o PDF (danificado ou incompatível). Tente outro arquivo.',
  tool_rotate_pdf_err_range: 'Páginas inválidas ou fora do intervalo. Use intervalos a partir de 1, ex.: 1-3,5.',
  tool_rotate_pdf_err_rotate: 'Falha na rotação. Verifique arquivo e intervalos e tente de novo.',
  tool_rotate_pdf_example:
    'A amostra cria um PDF de duas páginas, gira todas 90° horário e habilita Baixar rotated.pdf.',
  tool_rotate_pdf_example_title: 'Exemplo',
  tool_rotate_pdf_faq_a1:
    'Não. a biblioteca PDF roda na sua aba (scripts podem vir de um CDN). Seu PDF não é enviado aos nossos servidores.',
  tool_rotate_pdf_faq_a2: 'Sim—o arquivo baixado guarda a orientação nova. Abra em um leitor antes de compartilhar.',
  tool_rotate_pdf_faq_a3: 'Páginas a partir de 1: 1-3,5 são as páginas 1–3 e a 5. Espaços são opcionais. Vazio ou fora do intervalo falha.',
  tool_rotate_pdf_faq_a4: 'PDFs com senha geralmente não abrem aqui. Remova a senha com uma ferramenta confiável e gire.',
  tool_rotate_pdf_faq_q1: 'Meu PDF é enviado?',
  tool_rotate_pdf_faq_q2: 'A rotação muda o arquivo permanentemente?',
  tool_rotate_pdf_faq_q3: 'Como funcionam os intervalos?',
  tool_rotate_pdf_faq_q4: 'E PDFs criptografados?',
  tool_rotate_pdf_how_body:
    'Escolha um PDF, todas as páginas ou intervalos, escolha o ângulo, clique Girar e Baixar. A rotação soma ao ângulo atual. Tudo local após carregar a biblioteca.',
  tool_rotate_pdf_how_item_1: "Selecione a entrada com “Escolher PDF”",
  tool_rotate_pdf_how_item_2: "Ajuste as opções e clique em “Girar”",
  tool_rotate_pdf_how_item_3: "Confira a prévia, a contagem de páginas ou o status",
  tool_rotate_pdf_how_item_4: "Clique em “Baixar” para salvar o resultado",
  tool_rotate_pdf_how_title: 'Como funciona',
  tool_rotate_pdf_mode_all: 'Todas as páginas',
  tool_rotate_pdf_mode_label: 'Páginas a girar',
  tool_rotate_pdf_mode_ranges: 'Intervalos personalizados',
  tool_rotate_pdf_pages_label: 'Páginas no arquivo',
  tool_rotate_pdf_ranges_hint: 'Exemplo: 1-3,5 (a partir de 1)',
  tool_rotate_pdf_ranges_label: 'Intervalos de páginas',
  tool_rotate_pdf_rotate: 'Girar',
  tool_rotate_pdf_rules_body: 'Ângulos, rotação cumulativa, intervalos, privacidade e falhas.',
  tool_rotate_pdf_rules_item_1: 'Ângulos: 90° horário, 180° ou 90° anti-horário (270°). Somam ao ângulo atual da página.',
  tool_rotate_pdf_rules_item_2: 'Páginas: todas ou intervalos a partir de 1 como 1-3,5 (mesma sintaxe do Dividir PDF).',
  tool_rotate_pdf_rules_item_3: 'Saída: um PDF com páginas escolhidas reorientadas; as demais ficam iguais.',
  tool_rotate_pdf_rules_item_4: 'Privacidade e limites: bytes ficam na aba; criptografado/corrompido falha claro; arquivos enormes podem ficar lentos.',
  tool_rotate_pdf_rules_title: 'Regras esperadas',
  tool_rotate_pdf_sample: 'Carregar exemplo',
  tool_rotate_pdf_stats_tpl: '{n} página(s) girada(s) · {bytes}',
  tool_rotate_pdf_status_done: 'Pronto — clique Baixar para salvar rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'Girando PDF…',
  tool_rotate_pdf_title: 'Girar PDF — corrija a orientação no navegador',
  tool_rotate_pdf_usecase_1: 'Escritório: endireite um scan de lado antes de imprimir ou enviar.',
  tool_rotate_pdf_usecase_2: 'Estudantes: corrija fotos de slides com orientação mista.',
  tool_rotate_pdf_usecase_3: 'Donos de site: ajuste uma página errada sem reescanear tudo.',
  tool_rotate_pdf_usecases_title: 'Bons cenários',
  tool_rotate_pdf_warn_large: 'Arquivo maior que ~25 MB — rotação pode ficar lenta ou falhar em alguns navegadores.',
  tool_rotate_pdf_warn_pdflib: 'Falha ao carregar biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
