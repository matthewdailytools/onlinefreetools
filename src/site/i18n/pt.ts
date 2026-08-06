import type { SiteLangDict } from './types';
const pt: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Início',
  nav_devlogs: 'Registros de Desenvolvimento',
  nav_tools: 'Ferramentas',
  footer_text: 'Online Free Tools · Projeto de aprendizagem · Em iteração',
  tool_headers_title: 'Obter cabeçalhos de resposta do site',
  tool_headers_description:
    "Buscar headers HTTP de uma URL no servidor (usar HEAD, fallback para GET). Processo: enviar HEAD, seguir redirecionamentos, coletar headers e bloquear hosts privados. Exemplo: inspecionar CORS, Cache-Control e HSTS para depurar redirecionamentos e configuração de CDN.",
  tool_headers_article:
    'O que é: Obtenha e inspecione os cabeçalhos de resposta HTTP de um site. Útil para depurar CORS, cache, redirecionamentos e verificar cabeçalhos de segurança ou CDN. Cenários: depuração de desenvolvedor, verificações de SEO e verificação da configuração do servidor.',
  url_label: 'URL',
  url_placeholder: 'por exemplo https://exemplo.com',
  fetch_button: 'Obter Cabeçalhos',
  result_title: 'Resultado',
  status_label: 'Status',
  final_url_label: 'URL Final',
  headers_label: 'Cabeçalhos',
  error_prefix: 'Erro: ',
  note_title: 'Notas',
  note_1: 'Alguns sites não suportam HEAD; voltaremos ao GET.',
  note_2: 'Por segurança, são bloqueadas solicitações para localhost/redes privadas.',
  tool_markdown_title: 'De Markdown para HTML — e HTML de volta a Markdown',
  tool_markdown_description:
    'Quer publicar Markdown como HTML limpo, ou resgatar Markdown a partir de HTML colado? Escolha o sentido; marked/Turndown e DOMPurify rodam aí no navegador. Exemplo: rascunho de post vira .html, ou o HTML do CMS vira arquivo .md.',
  tool_markdown_article:
    'Dois sentidos, uma página, com avisos honestos sobre limpeza e perda. Colagem local; CDN só para bibliotecas.',
  tool_markdown_dir_label: 'Direção da conversão',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'Copiar HTML',
  tool_markdown_copy_md: 'Copiar Markdown',
  tool_markdown_copy_done: 'Copiado',
  tool_markdown_download: 'Baixar HTML',
  tool_markdown_download_md: 'Baixar Markdown',
  tool_markdown_clear: 'Limpar',
  tool_markdown_full_doc: 'Gerar documento HTML completo',
  tool_markdown_input_label: 'Entrada Markdown',
  tool_markdown_preview_label: 'Pré-visualização HTML',
  tool_markdown_html_input_label: 'Entrada HTML',
  tool_markdown_md_output_label: 'Saída Markdown',
  tool_markdown_placeholder:
    "# Título\n\nMarkdown básico: **negrito**, listas e blocos de código.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Olá Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>Título</h1>\n<p>Olá <strong>mundo</strong></p>',
  tool_markdown_sample_md:
    "# Título\n\nMarkdown básico: **negrito**, listas e blocos de código.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Olá Markdown');\n```",
  tool_markdown_sample_html: '<h1>Título</h1>\n<p>Olá <strong>mundo</strong></p>',
  tool_markdown_export_title: 'Exportação Markdown para HTML',
  tool_markdown_export_description:
    'Gerar um documento HTML completo a partir do Markdown com template e metadados. Passos: renderizar, injetar no template, adicionar meta e baixar. Exemplo: exportar um post como .html independente.',
  tool_markdown_large_warn:
    'Texto muito grande (>200k caracteres). A conversão pode ficar lenta — tente um trecho menor.',
  tool_markdown_need_lib: 'Não foi possível carregar a biblioteca de conversão. Verifique a conexão e atualize.',
  tool_markdown_loss_hint:
    'Pouco ou nenhum Markdown gerado — scripts, tags vazias ou marcação não suportada podem ter sido removidos. Veja Regras e FAQ.',
  tool_markdown_how_title: 'Fluxo',
  tool_markdown_how_body:
    'Use as abas. Entrada à esquerda, resultado à direita. No sentido HTML dá para copiar trecho ou documento simples; no sentido Markdown sai texto para Git ou LLM.',
  tool_markdown_rules_title: 'O que cada aba faz',
  tool_markdown_rules_intro:
    'Evita URL gêmea só para ranking de “html para markdown”.',
  tool_markdown_rules_item_md_html:
    'Para HTML: parse CommonMark + sanitização antes de mostrar.',
  tool_markdown_rules_item_html_md:
    'Para Markdown: limpa e converte com títulos ATX e blocos cercados.',
  tool_markdown_rules_item_loss:
    'Perde estilo pesado, scripts e muita tabela complexa. Ida e volta não é idêntica.',
  tool_markdown_rules_privacy:
    'Texto colado não sobe para o nosso servidor; CDN ≠ upload do conteúdo.',
  tool_markdown_example_title: 'Exemplo',
  tool_markdown_example:
    'Markdown com `# Título` vira heading seguro; HTML com `<strong>` volta como `**negrito**`.',
  tool_markdown_usecases_title: 'Quando ajuda',
  tool_markdown_usecase_1:
    'Entregar HTML sanitizado ao CMS.',
  tool_markdown_usecase_2:
    'Recuperar docs a partir de HTML exportado.',
  tool_markdown_usecase_3:
    'Preparar colagem rica para um modelo de linguagem.',
  tool_markdown_faq_q1: 'O HTML é limpo de scripts?',
  tool_markdown_faq_a1:
    'No sentido Markdown → HTML, DOMPurify age antes da pré-visualização e do download.',
  tool_markdown_faq_q2: 'HTML → Markdown mantém o visual?',
  tool_markdown_faq_a2:
    'Não conte com isso. O foco é texto editável.',
  tool_markdown_faq_q3: 'A colagem vai para a nuvem?',
  tool_markdown_faq_a3:
    'A conversão é no cliente. Biblioteca via CDN não envia seu artigo.',
  tool_markdown_faq_q4: 'Round-trip fiel?',
  tool_markdown_faq_a4:
    'Não garantido — use diff se precisar de igualdade.',
  tool_markdown_faq_q5: 'Quais recursos CommonMark e exportações?',
  tool_markdown_faq_a5:
    'Títulos, listas, links, ênfase, code fence; opção de HTML completo para partilha offline.',
  tool_text_diff_description:
    'Compare dois textos online e veja o que mudou. Processo: cole o original e a versão revisada, escolha linha, palavra ou caractere, opcionalmente ignore espaços ou unifique quebras Windows (CRLF→LF), e destaque adições e remoções no navegador. Exemplo: mude "olá mundo" para "olá amigo" — o modo palavra mostra uma substituição.',
  tool_text_diff_article:
    'Ferramenta grátis para comparar dois textos lado a lado. Modo linha para configs e código; modo palavra para texto e prompts; modo caractere para erros finos. Tudo no navegador — não enviamos seu texto.',
  tool_text_diff_example:
    'Exemplo (modo palavra): A = "Olá mundo", B = "Olá amigo" → uma alteração (mundo → amigo). Se só a linha do meio muda num bloco de três, o modo linha marca essa linha.',
  tool_text_diff_sample_a: 'Olá mundo\nsegunda linha\nterceira linha',
  tool_text_diff_sample_b: 'Olá amigo\nsegunda linha\nterceira linha',
  tool_text_diff_label_a: 'Texto original',
  tool_text_diff_label_b: 'Texto revisado',
  tool_text_diff_placeholder_a: 'Cole o texto original…',
  tool_text_diff_placeholder_b: 'Cole o texto revisado…',
  tool_text_diff_mode_label: 'Comparar por',
  tool_text_diff_mode_lines: 'Linha',
  tool_text_diff_mode_words: 'Palavra',
  tool_text_diff_mode_chars: 'Caractere',
  tool_text_diff_ignore_ws: 'Ignorar espaços',
  tool_text_diff_normalize_eol: 'Tratar CRLF e LF iguais',
  tool_text_diff_compare: 'Comparar',
  tool_text_diff_swap: 'Trocar lados',
  tool_text_diff_clear: 'Limpar',
  tool_text_diff_result_label: 'Diferenças',
  tool_text_diff_legend: 'Verde = adicionado · Vermelho = removido',
  tool_text_diff_summary: '{added} adicionados, {removed} removidos',
  tool_text_diff_no_diff: 'Sem diferenças — os dois textos são iguais.',
  tool_text_diff_empty_hint: 'Cole texto em um ou ambos os lados e compare.',
  tool_text_diff_large_warn: 'Colagem muito grande (>100k caracteres). Pode ficar lento — tente um trecho menor.',
  tool_text_diff_need_lib: 'Não foi possível carregar o comparador. Verifique a conexão e recarregue.',
  tool_text_diff_how_title: 'Como funciona',
  tool_text_diff_how_body:
    'Cole duas versões, escolha linha, palavra ou caractere, e veja adições em verde e remoções em vermelho. O texto colado não é enviado nem guardado por nós. A página pode carregar a biblioteca open-source jsdiff via CDN para comparar no browser.',
  tool_text_diff_rules_title: 'Como as diferenças são calculadas',
  tool_text_diff_rules_body:
    'A ferramenta procura uma lista curta de edições de A para B (diff clássico / abordagem Myers com jsdiff). Modo linha: configs e código. Modo palavra: frases e prompts. Modo caractere: erros pequenos, mas mais barulho. Ignorar espaços esconde só indentação. Tratar CRLF e LF iguais evita linha inteira vermelha só por causa da quebra.',
  tool_text_diff_rules_intro:
    'A ferramenta procura uma lista curta de edições para passar do texto A ao B (diff clássico / abordagem Myers com jsdiff). Escolha o modo conforme a tarefa:',
  tool_text_diff_rules_item_lines:
    'Linha — ideal para .env, YAML e código; uma linha alterada fica toda marcada. Rápido de ler, mas uma só palavra também marca a linha inteira.',
  tool_text_diff_rules_item_words:
    'Palavra — ideal para frases, e-mails e prompts; destaca palavras. Mais claro em prosa; pontuação pode fragmentar o resultado.',
  tool_text_diff_rules_item_chars:
    'Caractere — ideal para typos pequenos; o mais preciso, mas ruidoso em edições longas.',
  tool_text_diff_rules_options:
    'Ignorar espaços esconde mudanças só de indentação. Tratar CRLF e LF iguais evita que uma linha inteira fique vermelha só pelo tipo de quebra (Windows vs Unix).',
  tool_text_diff_example_title: 'Exemplo',
  tool_text_diff_usecases_title: 'Quando usar',
  tool_text_diff_usecase_1: 'Conferir config: compare trechos .env ou YAML linha a linha.',
  tool_text_diff_usecase_2: 'Ajustar um prompt: modo palavra para ver o que entrou ou saiu.',
  tool_text_diff_usecase_3: 'Revisar texto ou tradução: confirme que só as frases previstas mudaram.',
  tool_text_diff_faq_q1: 'Comparar por linha ou por palavra?',
  tool_text_diff_faq_a1: 'Linha para código e configs. Palavra para frases, e-mails e prompts — destaca palavras isoladas.',
  tool_text_diff_faq_q2: 'Meu texto vai para um servidor?',
  tool_text_diff_faq_a2:
    'O texto colado não é enviado nem guardado por nós — a comparação corre no browser. A página pode carregar jsdiff (open source) via CDN; isso não envia o seu texto para os nossos servidores.',
  tool_text_diff_faq_q3: 'Por que só a quebra de linha deixa a linha toda vermelha?',
  tool_text_diff_faq_a3: 'Windows usa CRLF; Mac/Linux costumam usar LF. Ative “Tratar CRLF e LF iguais” e compare de novo.',
  tool_text_diff_faq_q4: 'Posso comparar imagens ou arquivos binários?',
  tool_text_diff_faq_a4: 'Não. Apenas texto simples.',

};
export default pt;