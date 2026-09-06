/**
 * i18n tool shard (archive-extractor / pt).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
  tool_archive_extractor_article:
    'Abra arquivos ZIP, TAR e TAR.GZ no navegador, veja a árvore de arquivos, pré-visualize textos ou imagens comuns e exporte o conteúdo compatível como um ZIP limpo. O arquivo fica no seu dispositivo e não é enviado ao servidor.',
  tool_archive_extractor_choose_file: 'Escolher arquivo',
  tool_archive_extractor_clear: 'Limpar',
  tool_archive_extractor_desc:
    'Extrator de arquivos online para abrir ZIP, TAR e TAR.GZ no navegador, pré-visualizar arquivos e exportar ZIP sem enviar ao servidor.',
  tool_archive_extractor_description:
    'Use este extrator de arquivos online para abrir arquivos compactados no navegador: escolha ZIP, TAR ou TAR.GZ, veja a árvore, pré-visualize texto ou imagens, baixe um arquivo ou exporte o conteúdo compatível como ZIP limpo. Os arquivos ficam no dispositivo e não são enviados ao servidor. O exemplo sample-archive.tar.gz mostra README.txt, src/index.js e assets/logo.png com caminhos seguros.',
  tool_archive_extractor_download_all: 'Exportar ZIP',
  tool_archive_extractor_download_file: 'Baixar arquivo',
  tool_archive_extractor_drop_hint:
    'Solte um arquivo compactado. ZIP, TAR e TAR.GZ funcionam agora; RAR, 7Z e ISO mostram notas de suporte.',
  tool_archive_extractor_empty: 'Escolha um arquivo compactado primeiro.',
  tool_archive_extractor_engine_badge: 'notas de suporte',
  tool_archive_extractor_err_archive:
    'Não foi possível ler este arquivo. Ele pode estar danificado, criptografado, dividido em volumes ou usar um método de compactação não compatível.',
  tool_archive_extractor_err_engine:
    'RAR, 7Z e ISO precisam de um motor multiformato mais pesado que não está incluído nesta versão. ZIP, TAR e TAR.GZ continuam funcionando no navegador.',
  tool_archive_extractor_err_fflate: 'Não foi possível carregar o motor de arquivos. Verifique a rede e tente novamente.',
  tool_archive_extractor_err_no_file: 'Nenhum arquivo extraído está selecionado.',
  tool_archive_extractor_err_unsupported:
    'Este tipo de arquivo ainda não é suportado aqui. Tente ZIP, TAR ou TAR.GZ, ou use uma ferramenta desktop para esse formato.',
  tool_archive_extractor_example:
    'O exemplo sample-archive.tar.gz abre como um arquivo real com três entradas: README.txt, src/index.js e assets/logo.png. A página mostra a árvore, pré-visualiza README.txt e pode exportar o conteúdo compatível como extracted-archive.zip.',
  tool_archive_extractor_example_title: 'Exemplo',
  tool_archive_extractor_exported_all: 'Os arquivos foram empacotados em um novo ZIP com caminhos seguros.',
  tool_archive_extractor_faq_a1:
    'Não. O arquivo é lido na aba do navegador e os bytes extraídos ficam no seu dispositivo. O script auxiliar pode carregar deste site, mas seus arquivos não são enviados aos nossos servidores.',
  tool_archive_extractor_faq_a2:
    'Nesta versão funcionam ZIP, TAR, TAR.GZ e TGZ. RAR, 7Z e ISO aparecem como formatos com notas de suporte até que um motor multiformato mais pesado seja ativado.',
  tool_archive_extractor_faq_a3:
    'Arquivos com senha exigem que você informe a senha e ainda podem falhar se o formato ou a criptografia não for compatível. Esta ferramenta não quebra nem recupera senhas.',
  tool_archive_extractor_faq_a4:
    'Caminhos absolutos, segmentos ../, nomes duplicados ou caracteres inseguros são renomeados ou bloqueados antes da exportação. Destinos de links simbólicos não são escritos como links.',
  tool_archive_extractor_faq_a5:
    'Arquivos grandes podem ser lentos ou esgotar memória no navegador, especialmente em celulares. A página avisa quando a contagem de arquivos, o tamanho expandido ou a taxa de expansão parece arriscada.',
  tool_archive_extractor_faq_a6:
    'Exportar ZIP significa empacotar de novo os arquivos compatíveis já extraídos com caminhos limpos. Não promete preservar todos os recursos do formato original.',
  tool_archive_extractor_faq_q1: 'Meu arquivo é enviado ao servidor?',
  tool_archive_extractor_faq_q2: 'Quais formatos de arquivo funcionam?',
  tool_archive_extractor_faq_q3: 'Abre RAR ou 7Z com senha?',
  tool_archive_extractor_faq_q4: 'O que acontece com caminhos inseguros ou links simbólicos?',
  tool_archive_extractor_faq_q5: 'Como lida com arquivos muito grandes?',
  tool_archive_extractor_faq_q6: 'RAR para ZIP ou 7Z para ZIP é conversão real?',
  tool_archive_extractor_file_count_label: 'Arquivos',
  tool_archive_extractor_format_label: 'Formato',
  tool_archive_extractor_how_body:
    'Escolha ou solte um arquivo compactado. A página detecta ZIP, TAR ou TAR.GZ, cria uma lista segura e pré-visualiza pequenas entradas de texto ou imagem. Selecione uma linha para baixar um arquivo ou exporte os arquivos compatíveis como novo ZIP.',
  tool_archive_extractor_how_title: 'Como funciona',
  tool_archive_extractor_load_engine: 'Carregar motor multiformato',
  tool_archive_extractor_load_sample: 'Carregar exemplo',
  tool_archive_extractor_no_preview:
    'A pré-visualização não está disponível para este tipo de arquivo. Você ainda pode baixar o arquivo.',
  tool_archive_extractor_preview_title: 'Pré-visualização',
  tool_archive_extractor_rules_body:
    'A extração de arquivos precisa de regras claras para suporte de formato, segurança de caminhos, pré-visualização e exportação ZIP.',
  tool_archive_extractor_rules_item_1:
    'ZIP lê o diretório central. TAR.GZ abre em duas etapas: descompactar GZIP e depois ler os cabeçalhos TAR.',
  tool_archive_extractor_rules_item_2:
    'RAR, 7Z e ISO exigem um motor multiformato mais pesado; a página não finge que esses caminhos estão ativos antes do motor.',
  tool_archive_extractor_rules_item_3:
    'Segurança de caminhos: barras iniciais, letras de unidade, ../, nomes duplicados e caracteres inseguros são limpos antes de exportar.',
  tool_archive_extractor_rules_item_4:
    'Pré-visualização: textos pequenos, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP e SVG podem ser vistos; outros arquivos mostram apenas metadados.',
  tool_archive_extractor_rules_item_5:
    'Limites: arquivos criptografados, divididos, danificados, solid ou com expansão incomum podem falhar ou exigir ferramenta desktop.',
  tool_archive_extractor_rules_title: 'Regras esperadas',
  tool_archive_extractor_selected_label: 'Selecionado',
  tool_archive_extractor_size_label: 'Tamanho extraído',
  tool_archive_extractor_status_done: 'Arquivo aberto — selecione um arquivo ou exporte ZIP.',
  tool_archive_extractor_status_reading: 'Lendo arquivo...',
  tool_archive_extractor_title:
    'Extrator de arquivos online — abra arquivos compactados no navegador',
  tool_archive_extractor_total_size_label: 'Tamanho expandido',
  tool_archive_extractor_usecase_1:
    'Desenvolvimento: abra uma versão .tar.gz de código, revise README e src, e baixe só o necessário.',
  tool_archive_extractor_usecase_2:
    'Operações: revise um pacote ZIP, RAR ou 7Z de fornecedor e exporte arquivos compatíveis como ZIP limpo para a equipe.',
  tool_archive_extractor_usecase_3:
    'Dispositivos gerenciados: inspecione materiais de aula ou anexos em um Chromebook sem instalar software desktop.',
  tool_archive_extractor_usecases_title: 'Quando usar',
  tool_archive_extractor_warn_dangerous:
    'Alguns caminhos foram renomeados ou ignorados por segurança antes da exportação.',
  tool_archive_extractor_warn_large:
    'Aviso de arquivo grande: este arquivo pode ser lento ou consumir muita memória no navegador.',
};

export default pt;
