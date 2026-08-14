import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
  tool_unzip_file_article:
    'Abra um ZIP no navegador, veja a árvore de arquivos, pré-visualize texto ou imagens e baixe o que precisar. O arquivo fica no dispositivo e não é enviado ao servidor.',
  tool_unzip_file_choose_file: 'Escolher ZIP',
  tool_unzip_file_clear: 'Limpar',
  tool_unzip_file_desc:
    'Descompacte ZIP online, pré-visualize conteúdo e baixe arquivos no navegador, sem enviar ao servidor.',
  tool_unzip_file_description:
    'Descompacte um ZIP online no navegador: escolha ou arraste o arquivo, confira a árvore, pré-visualize textos ou imagens e baixe um arquivo ou exporte tudo. Os arquivos ficam no seu dispositivo e não são enviados ao servidor. O exemplo project-files.zip mostra readme.txt, assets/logo.png e docs/notes.md com caminhos seguros.',
  tool_unzip_file_download_all: 'Exportar tudo',
  tool_unzip_file_download_file: 'Baixar arquivo',
  tool_unzip_file_drop_hint: 'Solte um .zip aqui. O processamento fica nesta aba.',
  tool_unzip_file_empty: 'Escolha um arquivo ZIP primeiro.',
  tool_unzip_file_err_archive: 'Não foi possível ler o ZIP. Ele pode estar danificado, criptografado ou não ser um arquivo ZIP.',
  tool_unzip_file_err_fflate: 'Falha ao carregar o motor ZIP. Verifique a rede e tente novamente.',
  tool_unzip_file_err_no_file: 'Nenhum arquivo extraído está selecionado.',
  tool_unzip_file_example:
    'O exemplo project-files.zip extrai três entradas seguras: readme.txt, assets/logo.png e docs/notes.md. A página mostra a árvore, pré-visualiza readme.txt e ativa Baixar arquivo e Exportar tudo.',
  tool_unzip_file_example_title: 'Exemplo',
  tool_unzip_file_exported_all: 'Os arquivos foram empacotados em um novo ZIP com caminhos seguros.',
  tool_unzip_file_faq_a1:
    'Não. O ZIP é lido na aba do navegador e os bytes extraídos ficam no seu dispositivo. O motor ZIP pode carregar de um CDN, mas o seu arquivo não é enviado aos nossos servidores.',
  tool_unzip_file_faq_a2:
    'Esta página é focada em ZIP. RAR, 7Z, ISO e TAR.GZ precisam de um motor multi-formato mais pesado e devem ficar em um extrator de arquivos separado quando houver esse suporte.',
  tool_unzip_file_faq_a3:
    'ZIPs protegidos por senha podem falhar se o suporte compatível ainda não existir. Esta ferramenta não quebra nem recupera senhas.',
  tool_unzip_file_faq_a4:
    'Caminhos absolutos, segmentos ../, nomes vazios ou duplicados são renomeados ou bloqueados antes da exportação. A lista mostra quando um caminho foi alterado.',
  tool_unzip_file_faq_a5:
    'ZIPs grandes podem ser lentos ou consumir muita memória no navegador, especialmente em celulares. A página avisa quando a contagem de arquivos, o tamanho extraído ou a taxa de expansão parecem arriscados.',
  tool_unzip_file_faq_q1: 'Meu ZIP é enviado?',
  tool_unzip_file_faq_q2: 'Ele extrai RAR, 7Z ou TAR.GZ?',
  tool_unzip_file_faq_q3: 'Abre ZIP protegido por senha?',
  tool_unzip_file_faq_q4: 'O que acontece com caminhos inseguros?',
  tool_unzip_file_faq_q5: 'Como lida com ZIPs muito grandes?',
  tool_unzip_file_file_count_label: 'Arquivos',
  tool_unzip_file_how_body:
    'Escolha ou solte um ZIP. A página lê o arquivo, normaliza caminhos, monta a lista e mostra prévias seguras para textos e imagens. Selecione uma linha para pré-visualizar e baixar, ou exporte tudo como um ZIP novo com caminhos limpos.',
  tool_unzip_file_how_title: 'Como funciona',
  tool_unzip_file_load_sample: 'Carregar exemplo',
  tool_unzip_file_no_preview:
    'Não há pré-visualização para este tipo de arquivo. Você ainda pode baixá-lo.',
  tool_unzip_file_preview_title: 'Pré-visualização',
  tool_unzip_file_rules_body:
    'Extrair ZIP no navegador exige regras claras para caminhos, prévias, modos de download e falhas.',
  tool_unzip_file_rules_item_1:
    'Segurança de caminhos: barras iniciais, letras de unidade, segmentos ../ e nomes duplicados são limpos antes de exportar.',
  tool_unzip_file_rules_item_2:
    'Prévia: textos pequenos, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP e SVG podem aparecer; outros arquivos mostram apenas metadados.',
  tool_unzip_file_rules_item_3:
    'Download: o arquivo selecionado baixa diretamente; Exportar tudo cria um novo ZIP com os arquivos saneados.',
  tool_unzip_file_rules_item_4:
    'Limites: arquivos criptografados, divididos, danificados ou com expansão incomum podem falhar ou exigir confirmação em versões futuras.',
  tool_unzip_file_rules_title: 'Regras esperadas',
  tool_unzip_file_selected_label: 'Selecionado',
  tool_unzip_file_size_label: 'Tamanho extraído',
  tool_unzip_file_status_done: 'ZIP extraído — selecione um arquivo ou exporte tudo.',
  tool_unzip_file_status_reading: 'Lendo ZIP...',
  tool_unzip_file_title: 'Descompactar ZIP online — ver e extrair arquivos no navegador',
  tool_unzip_file_total_size_label: 'Tamanho extraído',
  tool_unzip_file_usecase_1:
    'Escritório: abra um ZIP de fornecedor e baixe só a nota fiscal ou imagem necessária.',
  tool_unzip_file_usecase_2:
    'Estudo: veja materiais de curso em computador gerenciado ou tablet sem instalar software.',
  tool_unzip_file_usecase_3:
    'Desenvolvimento: confira a árvore de uma release de código e registre depois o checksum do ZIP original.',
  tool_unzip_file_usecases_title: 'Bons usos',
  tool_unzip_file_warn_dangerous:
    'Alguns caminhos foram renomeados por segurança antes da exportação.',
  tool_unzip_file_warn_large:
    'Aviso de arquivo grande: este ZIP pode ser lento ou usar muita memória no navegador.',
};

export default pt;
