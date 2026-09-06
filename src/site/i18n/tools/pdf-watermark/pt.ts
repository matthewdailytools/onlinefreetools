/**
 * i18n tool shard (pdf-watermark / pt). Reescrito para buscas locais.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_pdf_watermark_apply: 'Aplicar',
  tool_pdf_watermark_article:
    'Carimbe DRAFT, CONFIDENCIAL ou texto personalizado em cada página do PDF no navegador com a biblioteca PDF. Logo PNG/JPG opcional — o arquivo fica no dispositivo, sem enviar ao servidor.',
  tool_pdf_watermark_choose_file: 'Escolher PDF',
  tool_pdf_watermark_clear: 'Limpar',
  tool_pdf_watermark_desc:
    'Carimbe texto em cada página do PDF no navegador — sem enviar ao servidor; ficam no dispositivo.',
  tool_pdf_watermark_description:
    'Adicione marca d’água de texto em cada página de um PDF no navegador, sem enviar ao servidor. Passos: abra o PDF, digite o carimbo (ex. DRAFT), ajuste opacidade e ângulo, opcionalmente um logo PNG/JPG, aplique e baixe. Exemplo: amostra de duas páginas com DRAFT central, −45° e 35% de opacidade; download watermarked.pdf. PDFs criptografados falham com erro claro. Diferente de Adicionar marca d’água (fotos) e Rotacionar PDF.',
  tool_pdf_watermark_download: 'Baixar',
  tool_pdf_watermark_drop_hint: 'Ou solte um PDF aqui. Tudo processado nesta aba.',
  tool_pdf_watermark_empty: 'Adicione um PDF para marcar.',
  tool_pdf_watermark_err_apply: 'Falha ao aplicar marca. Verifique arquivo e opções.',
  tool_pdf_watermark_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie antes.',
  tool_pdf_watermark_err_image: 'Não foi possível ler a imagem. Use PNG ou JPG.',
  tool_pdf_watermark_err_load: 'Não foi possível ler o PDF (corrompido ou incompatível).',
  tool_pdf_watermark_example:
    'A amostra cria PDF de duas páginas, aplica DRAFT central com 35% opacidade e −45° em cada página e habilita Baixar watermarked.pdf.',
  tool_pdf_watermark_example_title: 'Exemplo',
  tool_pdf_watermark_faq_a1:
    'Não. a biblioteca PDF roda na sua aba (scripts vêm deste site). Seu PDF não é enviado aos nossos servidores.',
  tool_pdf_watermark_faq_a2:
    'Adicionar marca d’água sobrepõe texto ou logos em fotos. Esta ferramenta carimba cada página de um documento PDF.',
  tool_pdf_watermark_faq_a3:
    'Não. Ao baixar, a marca fica integrada. Remover exige o original ou edição pesada.',
  tool_pdf_watermark_faq_a4:
    'PDFs com senha geralmente não abrem aqui. Remova a senha com ferramenta confiável.',
  tool_pdf_watermark_faq_a5:
    'Sim — escolha PNG ou JPG. Escala ~um terço da página, mesma posição/opacidade/rotação do texto.',
  tool_pdf_watermark_faq_q1: 'Meu PDF é enviado?',
  tool_pdf_watermark_faq_q2: 'Como difere da marca d’água para imagens?',
  tool_pdf_watermark_faq_q3: 'Posso remover a marca depois?',
  tool_pdf_watermark_faq_q4: 'E PDFs criptografados?',
  tool_pdf_watermark_faq_q5: 'Posso adicionar um logo?',
  tool_pdf_watermark_how_body:
    'Escolha um PDF, digite o carimbo, ajuste opacidade e rotação, posição, opcionalmente logo PNG/JPG, clique Aplicar e Baixar. Cada página recebe a mesma camada.',
  tool_pdf_watermark_how_item_1: "Selecione a entrada com “Escolher PDF”",
  tool_pdf_watermark_how_item_2: "Ajuste as opções e clique em “Aplicar”",
  tool_pdf_watermark_how_item_3: "Confira a prévia, a contagem de páginas ou o status",
  tool_pdf_watermark_how_item_4: "Clique em “Baixar” para salvar o resultado",
  tool_pdf_watermark_how_title: 'Como funciona',
  tool_pdf_watermark_image_hint: 'Logo PNG/JPG opcional (mesma posição do texto).',
  tool_pdf_watermark_image_label: 'Marca de imagem (opcional)',
  tool_pdf_watermark_opacity_label: 'Opacidade',
  tool_pdf_watermark_pages_label: 'Páginas',
  tool_pdf_watermark_position_bl: 'Inferior esquerdo',
  tool_pdf_watermark_position_br: 'Inferior direito',
  tool_pdf_watermark_position_center: 'Centro',
  tool_pdf_watermark_position_label: 'Posição',
  tool_pdf_watermark_position_tl: 'Superior esquerdo',
  tool_pdf_watermark_position_tr: 'Superior direito',
  tool_pdf_watermark_rotation_label: 'Rotação (graus)',
  tool_pdf_watermark_rules_body:
    'Regras de texto/imagem, posição, opacidade, privacidade e falhas na marca local.',
  tool_pdf_watermark_rules_item_1:
    'Texto: carimbo Helvetica em cada página; amostra usa DRAFT central, 35% opacidade, −45°.',
  tool_pdf_watermark_rules_item_2:
    'Imagem: PNG/JPG opcional ~35% da página, mesma posição/opacidade/rotação.',
  tool_pdf_watermark_rules_item_3:
    'Posições: centro ou cantos; opacidade 0,1–1; rotação −180° a 180°. Saída: PDF novo sem enviar bytes ao servidor.',
  tool_pdf_watermark_rules_item_4:
    'Limites: PDF criptografado/corrompido falha; >~25 MB pode ser lento; remoção não suportada.',
  tool_pdf_watermark_rules_title: 'Regras esperadas',
  tool_pdf_watermark_sample: 'Carregar amostra',
  tool_pdf_watermark_stats_tpl: '{pages} página(s) marcada(s) · {bytes}',
  tool_pdf_watermark_status_done: 'Pronto — clique Baixar para salvar watermarked.pdf.',
  tool_pdf_watermark_status_working: 'Aplicando marca…',
  tool_pdf_watermark_text_label: 'Texto da marca',
  tool_pdf_watermark_title: 'Marca d’água em PDF — carimbe texto em cada página no dispositivo',
  tool_pdf_watermark_usecase_1: 'Jurídico/ops: CONFIDENCIAL em rascunhos de contrato antes de enviar.',
  tool_pdf_watermark_usecase_2: 'Estudantes: DRAFT em capítulos compartilhados para revisão.',
  tool_pdf_watermark_usecase_3: 'Donos de site: logo semitransparente em cada página de PDF de prévia.',
  tool_pdf_watermark_usecases_title: 'Bons casos',
  tool_pdf_watermark_warn_large: 'Arquivo >~25 MB — pode ficar lento ou falhar.',
  tool_pdf_watermark_warn_pdflib: 'Biblioteca PDF não carregou. Verifique a rede.',
};
export default pt;
