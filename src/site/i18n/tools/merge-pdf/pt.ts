/**
 * i18n tool shard（merge-pdf / pt）. Reescrita independente para busca.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_merge_pdf_article:
    'Junte vários PDF na ordem da lista com pdf-lib no cliente, sem envio. Reordene, trate falhas de criptografia e baixe um único documento.',
  tool_merge_pdf_choose_files: 'Escolher PDFs',
  tool_merge_pdf_clear: 'Limpar',
  tool_merge_pdf_desc: 'Combine vários PDFs num só ficheiro no navegador — sem enviar ao servidor; os ficheiros ficam no dispositivo.',
  tool_merge_pdf_description:
    'Junte ficheiros PDF no navegador e descarregue um único documento — sem enviar ao servidor. Passos: adicione dois ou mais PDFs, reordene a lista, junte e descarregue. Exemplo: duas amostras de uma página tornam-se um PDF de duas páginas. PDFs encriptados ou danificados falham com mensagem clara. Diferente de Imagens para PDF, que parte de fotos.',
  tool_merge_pdf_download: 'Descarregar',
  tool_merge_pdf_drop_hint: 'Ou largue PDFs aqui. O processamento fica neste separador.',
  tool_merge_pdf_empty: 'Adicione pelo menos dois PDFs para juntar.',
  tool_merge_pdf_err_encrypted: 'Um ficheiro parece protegido por palavra-passe. Desbloqueie e tente de novo.',
  tool_merge_pdf_err_load: 'Não foi possível ler um PDF (danificado ou incompatível). Tente outro ficheiro.',
  tool_merge_pdf_err_merge: 'A junção falhou. Verifique os ficheiros e tente novamente.',
  tool_merge_pdf_example:
    'O exemplo carrega dois PDFs de uma página (A e B), junta na ordem da lista e ativa Descarregar para um merged.pdf de duas páginas.',
  tool_merge_pdf_example_title: 'Combinar arquivos PDF em um só',
  tool_merge_pdf_faq_a1:
    'Não. O pdf-lib corre no seu separador (a biblioteca pode vir de um CDN). Os PDFs não são enviados para os nossos servidores.',
  tool_merge_pdf_faq_a2:
    'Imagens para PDF cria um PDF a partir de fotos. Esta ferramenta junta PDFs já existentes num só documento.',
  tool_merge_pdf_faq_a3:
    'Sim — use Subir/Descer em cada linha. A ordem da lista (de cima para baixo) é a ordem das páginas.',
  tool_merge_pdf_faq_a4:
    'PDFs com palavra-passe costumam falhar aqui. Remova a palavra-passe com uma ferramenta de confiança e depois junte.',
  tool_merge_pdf_faq_a5: 'A maioria dos leitores de PDF em computador e telemóvel abre o resultado.',
  tool_merge_pdf_faq_q1: 'Os meus PDFs são enviados?',
  tool_merge_pdf_faq_q2: 'Qual a diferença para Imagens para PDF?',
  tool_merge_pdf_faq_q3: 'Posso alterar a ordem?',
  tool_merge_pdf_faq_q4: 'E PDFs encriptados?',
  tool_merge_pdf_faq_q5: 'Abre no Acrobat ou no Pré-visualizador?',
  tool_merge_pdf_how_body:
    'Adicione dois ou mais PDFs, reordene se precisar, clique em Juntar e depois Descarregar. A ordem das páginas segue a lista. Tudo corre localmente após carregar a biblioteca.',
  tool_merge_pdf_how_title: 'Como funciona',
  tool_merge_pdf_merge: 'Juntar',
  tool_merge_pdf_move_down: 'Descer',
  tool_merge_pdf_move_up: 'Subir',
  tool_merge_pdf_remove: 'Remover',
  tool_merge_pdf_rules_body:
    'Ordem da lista, copyPages, privacidade e falhas ao juntar PDFs localmente.',
  tool_merge_pdf_rules_item_1:
    'Ordem: as páginas são copiadas pela lista (ficheiro de cima primeiro). Reordene antes de Juntar.',
  tool_merge_pdf_rules_item_2:
    'Motor: o pdf-lib carrega cada PDF e usa copyPages num documento novo — sem envio dos seus ficheiros.',
  tool_merge_pdf_rules_item_3:
    'Privacidade: os bytes ficam no separador. O script da biblioteca pode carregar de um CDN.',
  tool_merge_pdf_rules_item_4:
    'Limites: precisa de ≥2 ficheiros; PDFs encriptados ou corruptos falham com erro legível; conjuntos muito grandes podem ser lentos.',
  tool_merge_pdf_rules_title: 'Regras a esperar',
  tool_merge_pdf_sample: 'Carregar exemplo',
  tool_merge_pdf_stats_tpl: '{n} ficheiros → {pages} páginas · {bytes}',
  tool_merge_pdf_status_done: 'Concluído — clique em Descarregar para guardar merged.pdf.',
  tool_merge_pdf_status_merging: 'A juntar PDFs…',
  tool_merge_pdf_title: 'Combinar arquivos PDF em um',
  tool_merge_pdf_usecase_1: 'Escritório: juntar assinaturas e anexos num só pacote.',
  tool_merge_pdf_usecase_2: 'Estudos: unir capítulos de um trabalho antes de entregar.',
  tool_merge_pdf_usecase_3: 'Operações: empacotar briefs e especificações num PDF.',
  tool_merge_pdf_usecases_title: 'Bons encaixes',
  tool_merge_pdf_warn_large: 'Um ficheiro tem mais de ~25 MB — a junção pode ser lenta ou falhar em alguns navegadores.',
  tool_merge_pdf_warn_pdflib: 'Falha ao carregar a biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
