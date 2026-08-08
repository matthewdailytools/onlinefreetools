/**
 * i18n tool shard (crop-pdf / pt). Reescrito para buscas locais.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_crop_pdf_all_sides_label: 'Todos os lados (pt)',
  tool_crop_pdf_article:
    'Aparar margens de PDF no navegador com a biblioteca PDF—uniforme ou por lado em pontos. Não é editor de arrastar pixels; o arquivo fica no dispositivo.',
  tool_crop_pdf_bottom_label: 'Inferior (pt)',
  tool_crop_pdf_choose_file: 'Escolher PDF',
  tool_crop_pdf_clear: 'Limpar',
  tool_crop_pdf_crop: 'Cortar',
  tool_crop_pdf_desc:
    'Aparar margens de PDF no dispositivo—uniforme ou por lado em pontos; sem enviar ao servidor.',
  tool_crop_pdf_description:
    'Corte margens de PDF no navegador ajustando o CropBox—nada é enviado ao servidor. Defina margens superior/direita/inferior/esquerda em pontos (36 padrão) ou um valor para todos, e baixe. Exemplo: amostra de uma página corta 36 pt em cada lado e habilita cropped.pdf com tamanhos antes/depois. Não é editor de arrastar; PDF criptografados falham com erro claro.',
  tool_crop_pdf_download: 'Baixar',
  tool_crop_pdf_drop_hint: 'Ou solte um PDF aqui. O processamento fica nesta aba.',
  tool_crop_pdf_empty: 'Escolha um PDF primeiro.',
  tool_crop_pdf_err_crop: 'Falha ao cortar. Verifique margens e arquivo e tente de novo.',
  tool_crop_pdf_err_encrypted: 'Este PDF parece protegido por senha. Desbloqueie antes de cortar.',
  tool_crop_pdf_err_load: 'Não foi possível ler o PDF (corrompido ou incompatível). Tente outro arquivo.',
  tool_crop_pdf_err_margin:
    'Margens grandes demais—a largura ou altura cortada seria ≤ 10 pt. Reduza um ou mais lados.',
  tool_crop_pdf_example:
    'A amostra cria um PDF de uma página, corta 36 pt em todos os lados e habilita cropped.pdf com estatísticas de tamanho.',
  tool_crop_pdf_example_title: 'Exemplo',
  tool_crop_pdf_faq_a1:
    'Não. a biblioteca PDF roda na sua aba (scripts podem vir de um CDN). Seu PDF não é enviado aos nossos servidores.',
  tool_crop_pdf_faq_a2:
    'Esta ferramenta ajusta caixas PDF por margens em pontos—não arrasta um retângulo na prévia como em imagem.',
  tool_crop_pdf_faq_a3:
    'Correto. Só margens em pontos; sem caixa livre nem edição por pixel—use ferramenta de imagem se precisar.',
  tool_crop_pdf_faq_a4:
    'PDFs com senha geralmente não abrem aqui. Remova a senha com ferramenta confiável e depois corte.',
  tool_crop_pdf_faq_q1: 'Meu PDF é enviado?',
  tool_crop_pdf_faq_q2: 'Como difere de cortar imagem?',
  tool_crop_pdf_faq_q3: 'É editor de arrastar pixels?',
  tool_crop_pdf_faq_q4: 'E PDF criptografado?',
  tool_crop_pdf_how_body:
    'Escolha um PDF, defina margens em pontos (todas iguais ou por borda), clique Cortar e Baixar. CropBox e MediaBox encolhem; leitores e impressão respeitam os novos limites. Tudo local após carregar a biblioteca.',
  tool_crop_pdf_how_title: 'Como funciona',
  tool_crop_pdf_left_label: 'Esquerda (pt)',
  tool_crop_pdf_margins_title: 'Margens a aparar (pontos)',
  tool_crop_pdf_pages_label: 'Páginas no arquivo',
  tool_crop_pdf_right_label: 'Direita (pt)',
  tool_crop_pdf_rules_body: 'Cálculo de margens, caixas PDF, limites, privacidade e falhas no corte local.',
  tool_crop_pdf_rules_item_1: 'Unidades: margens em pontos PDF (pt). 72 pt ≈ 1 polegada. Amostra usa 36 pt (½ polegada) por lado.',
  tool_crop_pdf_rules_item_2: 'Caixas: CropBox e MediaBox encolhem de cada borda. Origem canto inferior esquerdo (spec PDF).',
  tool_crop_pdf_rules_item_3: 'Segurança: se largura ou altura cortada ≤ 10 pt, rejeita antes de salvar.',
  tool_crop_pdf_rules_item_4: 'Privacidade e limites: bytes na aba; criptografado/corrompido falha claro; arquivos enormes podem ficar lentos.',
  tool_crop_pdf_rules_title: 'Regras esperadas',
  tool_crop_pdf_sample: 'Carregar exemplo',
  tool_crop_pdf_stats_page_tpl: 'Página {n}: {ow}×{oh} pt → {nw}×{nh} pt',
  tool_crop_pdf_stats_tpl: '{pages} · {bytes}',
  tool_crop_pdf_status_cropping: 'Cortando PDF…',
  tool_crop_pdf_status_done: 'Pronto — clique Baixar para salvar cropped.pdf.',
  tool_crop_pdf_title: 'Cortar PDF — aparar margens no navegador',
  tool_crop_pdf_top_label: 'Superior (pt)',
  tool_crop_pdf_uniform_hint: 'Alterar «Todos os lados» atualiza cada borda; ajuste cada uma se quiser.',
  tool_crop_pdf_usecase_1: 'Escritório: remova bordas brancas de scan antes de imprimir ou arquivar.',
  tool_crop_pdf_usecase_2: 'Estudantes: aperte margens de apostilas para ver mais conteúdo na tela.',
  tool_crop_pdf_usecase_3: 'Donos de site: aparar a mesma margem em flyer exportado de uma página.',
  tool_crop_pdf_usecases_title: 'Bons casos',
  tool_crop_pdf_warn_large: 'Arquivo maior que ~25 MB — corte pode ficar lento ou falhar em alguns navegadores.',
  tool_crop_pdf_warn_pdflib: 'Falha ao carregar biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
