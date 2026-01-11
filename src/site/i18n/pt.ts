import type { SiteLangDict } from './types';
const pt: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Início',
  nav_devlogs: 'Registros de Desenvolvimento',
  nav_tools: 'Ferramentas',
  footer_text: 'Online Free Tools · Projeto educacional · Em iteração',
  tool_headers_title: 'Buscar Cabeçalhos de Resposta do Site',
  tool_headers_description:
    'Insira uma URL para buscar seus cabeçalhos de resposta HTTP (solicitação do lado do servidor).',
  tool_headers_article:
    'O que é: Busca e inspeciona os cabeçalhos de resposta HTTP de um site. Útil para depurar CORS, cache, redirecionamentos e verificar cabeçalhos de segurança ou CDN. Cenários: depuração por desenvolvedores, verificações de SEO e confirmação da configuração do servidor.',
  url_label: 'URL',
  url_placeholder: 'por exemplo https://exemplo.com',
  fetch_button: 'Buscar Cabeçalhos',
  result_title: 'Resultado',
  status_label: 'Status',
  final_url_label: 'URL Final',
  headers_label: 'Cabeçalhos',
  error_prefix: 'Erro: ',
  note_title: 'Notas',
  note_1: 'Alguns sites não suportam HEAD; voltaremos para GET.',
  note_2: 'Por segurança, solicitações para localhost/redes privadas são bloqueadas.',
  tool_markdown_title: 'Markdown → HTML',
  tool_markdown_description:
    'Converter Markdown em HTML com visualização, cópia e download de documento completo.',
  tool_markdown_article:
    'O que é: Converter Markdown em HTML sanitizado com visualização e opções de exportação. Útil para preparar posts de blog, documentação ou compartilhar conteúdo renderizado. Cenários: criação de conteúdo, visualizações rápidas e geração de exportações HTML estáticas.',
  tool_markdown_copy: 'Copiar HTML',
  tool_markdown_copy_done: 'Copiado',
  tool_markdown_download: 'Baixar HTML',
  tool_markdown_clear: 'Limpar',
  tool_markdown_full_doc: 'Gerar documento HTML completo',
  tool_markdown_input_label: 'Entrada Markdown',
  tool_markdown_preview_label: 'Visualização HTML',
  tool_markdown_placeholder:
    "# Título\n\nMarkdown básico suportado: **negrito**, listas e blocos de código.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Olá Markdown');\n```",
  tool_markdown_export_title: 'Exportação Markdown para HTML',
  tool_markdown_export_description: 'Exportação HTML estática gerada a partir do Markdown',
  tool_ip_address_title: 'Qual é o meu endereço IP?',
  tool_ip_address_description: 'Descubra seu endereço IP público com um clique.',
  tool_ip_address_article: 'O que é: Encontre seu endereço IP público conforme visto pela internet. Seu IP identifica seu dispositivo na rede e é usado pelos sites para entregar conteúdo. Cenários: acesso remoto, solução de problemas de rede, configuração de firewall e serviços de geolocalização.',
  ip_label: 'Seu endereço IP',
  fetch_ip_button: 'Atualizar IP',
  fetching_message: 'Buscando seu endereço IP...',
  what_is_ip_title: 'O que é um endereço IP?',
  what_is_ip_content: 'Um endereço de Protocolo de Internet (IP) é uma etiqueta numérica atribuída a cada dispositivo conectado a uma rede de computadores. Serve duas funções principais: identificação de host ou interface de rede e endereçamento de localização. Atualmente há duas versões em uso: IPv4 e IPv6.',
};
export default pt;