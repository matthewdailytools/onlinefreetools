/**
 * i18n tool shard (pdf-page-to-image-sizes / pt). Reescrito para buscas em português.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'Escolha uma página PDF e exporte um ZIP de JPEG prontos para redes — quadrado 1080, OG 1200×630, HD 1280×720 e vertical 1080×1920. o renderizador de páginas renderiza uma vez; Canvas encaixa cada preset com faixas brancas se preciso.',
  tool_pdf_page_to_image_sizes_choose_file: 'Escolher PDF',
  tool_pdf_page_to_image_sizes_clear: 'Limpar',
  tool_pdf_page_to_image_sizes_desc:
    'Exporte uma página PDF como pacote JPEG multi-tamanho no dispositivo — ZIP; sem enviar ao servidor.',
  tool_pdf_page_to_image_sizes_description:
    'Transforme uma página PDF em pacote JPEG multi-tamanho no navegador — o arquivo fica no dispositivo e não é enviado ao servidor. Escolha um PDF, informe o número da página (padrão 1), clique Exportar e baixe um ZIP com page-N-WxH.jpg. Exemplo: a capa de amostra gera quatro presets (1080², 1200×630, 1280×720, 1080×1920). PDFs com senha ou corrompidos mostram erro claro.',
  tool_pdf_page_to_image_sizes_download: 'Baixar',
  tool_pdf_page_to_image_sizes_drop_hint: 'Ou solte um PDF aqui. Tudo roda nesta aba.',
  tool_pdf_page_to_image_sizes_empty: 'Escolha um arquivo PDF primeiro.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'Número de página fora do intervalo. Confira o total e tente de novo.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie antes de exportar.',
  tool_pdf_page_to_image_sizes_err_export: 'Falha na exportação. Verifique o arquivo e a página.',
  tool_pdf_page_to_image_sizes_err_fflate: 'Biblioteca ZIP não carregou. Verifique a rede.',
  tool_pdf_page_to_image_sizes_err_load: 'Não foi possível ler o PDF (corrompido ou incompatível). Tente outro arquivo.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'Renderizador PDF não carregou. Verifique a rede.',
  tool_pdf_page_to_image_sizes_example:
    'A amostra cria um PDF de uma página, exporta a página 1 em quatro presets JPEG e habilita Baixar para page-1-sizes.zip.',
  tool_pdf_page_to_image_sizes_example_title: 'Exemplo',
  tool_pdf_page_to_image_sizes_export: 'Exportar',
  tool_pdf_page_to_image_sizes_faq_a1:
    'Não. o renderizador de páginas, a biblioteca PDF e a biblioteca ZIP rodam na sua aba (scripts podem vir de CDN). Seu PDF não é enviado aos nossos servidores.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF para JPG exporta cada página na proporção original. Esta ferramenta escolhe uma página e encaixa em tamanhos fixos de plataforma (contain, centralizado, faixas brancas).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (quadrado Instagram), 1200×630 (preview Open Graph / Facebook), 1280×720 (HD paisagem), 1080×1920 (story / vertical).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'A página é redimensionada para caber inteira sem recorte. Espaço vazio vira branco para JPEG limpo.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'Arquivos acima de ~25 MB podem ficar lentos ou falhar em alguns navegadores. Páginas complexas usam mais memória.',
  tool_pdf_page_to_image_sizes_faq_q1: 'Meu PDF é enviado?',
  tool_pdf_page_to_image_sizes_faq_q2: 'Qual a diferença do PDF para JPG?',
  tool_pdf_page_to_image_sizes_faq_q3: 'Quais tamanhos vêm no pacote?',
  tool_pdf_page_to_image_sizes_faq_q4: 'Por que há espaço branco ao redor?',
  tool_pdf_page_to_image_sizes_faq_q5: 'Há limite de tamanho?',
  tool_pdf_page_to_image_sizes_how_body:
    'Escolha um PDF, digite o número da página (a partir de 1), clique Exportar e baixe. Uma renderização, encaixe em cada preset e ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'Como funciona',
  tool_pdf_page_to_image_sizes_page_label: 'Número da página',
  tool_pdf_page_to_image_sizes_pages_label: 'Páginas',
  tool_pdf_page_to_image_sizes_rules_body:
    'Tamanhos preset, encaixe contain, JPEG, nomes ZIP, privacidade e falhas.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Presets: 1080×1080 (instagram-square), 1200×630 (og-facebook), 1280×720 (hd-landscape), 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'Renderize a página escolhida uma vez em escala 2×, depois drawImage contain centralizado; JPEG qualidade 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'Nomes no ZIP: page-{N}-{W}x{H}.jpg. Arquivo: page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'Privacidade e limites: bytes ficam na aba; PDF cifrado/corrompido falha claro; >~25 MB pode demorar.',
  tool_pdf_page_to_image_sizes_rules_title: 'Regras esperadas',
  tool_pdf_page_to_image_sizes_sample: 'Carregar amostra',
  tool_pdf_page_to_image_sizes_stats_tpl: 'Página {page} · {n} tamanhos · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'Pronto — clique Baixar para salvar o ZIP.',
  tool_pdf_page_to_image_sizes_status_exporting: 'Renderizando página e montando pacote de tamanhos…',
  tool_pdf_page_to_image_sizes_title: 'Página PDF em vários tamanhos — pacote multiplataforma',
  tool_pdf_page_to_image_sizes_usecase_1: 'Social: transforme um pôster PDF em quadrado IG, OG e story num ZIP.',
  tool_pdf_page_to_image_sizes_usecase_2: 'Sites: exporte capa 1200×630 para preview de link sem recorte manual.',
  tool_pdf_page_to_image_sizes_usecase_3: 'Estudantes: salve um slide em tamanhos amigáveis ao celular.',
  tool_pdf_page_to_image_sizes_usecases_title: 'Bons usos',
  tool_pdf_page_to_image_sizes_warn_large: 'Arquivo maior que ~25 MB — exportação pode ficar lenta ou falhar.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'Biblioteca PDF não carregou. Verifique a rede.',
};
export default pt;
