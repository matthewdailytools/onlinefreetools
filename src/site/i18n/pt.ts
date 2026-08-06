import type { SiteLangDict } from './types';
const pt: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Início',
  nav_devlogs: 'Registros de Desenvolvimento',
  nav_tools: 'Ferramentas',
  footer_text: 'Online Free Tools · Projeto de aprendizagem · Em iteração',
  tool_headers_title: 'Verificar cabeçalhos HTTP de um site — Inspecionar response headers',
  tool_headers_description:
    'Verifique online os headers HTTP de resposta de uma URL pelo nosso edge. Fluxo: cole https, envie HEAD (GET se precisar), siga redirecionamentos, mostre status e mapa de headers; bloqueie hosts privados. Exemplo: leia Cache-Control, CORS e HSTS ao depurar CDN ou redirects.',
  tool_headers_article:
    'Veja os headers que o edge recebe de uma URL pública — útil para cache, CORS, redirecionamentos e checagens de segurança. A requisição é proxyada; não guardamos o corpo da página.',
  url_label: 'URL',
  url_placeholder: 'por exemplo https://exemplo.com',
  fetch_button: 'Verificar cabeçalhos',
  result_title: 'Resultado',
  status_label: 'Status',
  final_url_label: 'URL Final',
  headers_label: 'Cabeçalhos',
  error_prefix: 'Erro: ',
  note_title: 'Notas',
  note_1: 'Sites que rejeitam HEAD recebem GET. O foco são os headers, não baixar o HTML inteiro.',
  note_2: 'localhost e redes privadas ficam bloqueados para impedir sondagem interna pelo worker.',
  tool_headers_how_title: 'Como usar',
  tool_headers_how_body:
    'Cole uma URL pública http(s) e clique em verificar. O worker no edge envia HEAD (GET se necessário), segue redirects e devolve status, URL final e headers vistos. Destinos privados são recusados. É a visão do edge — pode divergir do seu navegador se o CDN rotear por região.',
  tool_headers_rules_title: 'O que o verificador faz',
  tool_headers_rules_body:
    'Proxy de curta duração só para inspecionar headers; não armazena conteúdo da página. Nomes seguem a semântica HTTP (veja Referências).',
  tool_headers_rules_item_1: 'HEAD primeiro; GET quando o origin não aceita HEAD.',
  tool_headers_rules_item_2: 'Segue redirecionamentos e informa a URL final.',
  tool_headers_rules_item_3: 'Bloqueia localhost e IPs de rede privada.',
  tool_headers_rules_item_4: 'Destaca headers comuns: Cache-Control, CORS, CSP, etc.',
  tool_headers_example_title: 'Exemplo',
  tool_headers_example:
    'exemplo.com → status 200, URL final igual; headers com content-type: text/html e, conforme o origin, cache-control ou headers de segurança.',
  tool_headers_usecases_title: 'Bom para',
  tool_headers_usecase_1: 'Antes do deploy, confirme Cache-Control ou cache do CDN.',
  tool_headers_usecase_2: 'Depure preflight CORS lendo Access-Control-* na resposta.',
  tool_headers_usecase_3: 'Confira se CSP, HSTS e outros headers de segurança realmente saem do servidor.',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semântica HTTP',
  tool_headers_ref_mdn_label: 'MDN — Headers HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Cache HTTP',
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
    'O que a conversão cobre: qual sintaxe Markdown é suportada, como o HTML é sanitizado e como seu texto colado é tratado localmente.',
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
  tool_yaml_json_title: 'De YAML para JSON — e JSON de volta a YAML',
  tool_yaml_json_description:
    'Converter YAML para JSON e JSON para YAML na mesma página. Passos: escolha o sentido, cole a config, ative tipos seguros se precisar, depois copie ou baixe. Vários documentos com --- viram um array JSON. Exemplo: transformar um mapa de serviço curto em JSON indentado para um cliente de API — a colagem fica no navegador.',
  tool_yaml_json_article:
    'YAML ↔ JSON nos dois sentidos, com regras de tipo claras, política multi-documento e notas honestas de processamento local. Feito para trocar configs, não para outra URL rasa.',
  tool_yaml_json_dir_label: 'Direção da conversão',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_convert: 'Converter',
  tool_yaml_json_copy_json: 'Copiar JSON',
  tool_yaml_json_copy_yaml: 'Copiar YAML',
  tool_yaml_json_copy_done: 'Copiado',
  tool_yaml_json_download_json: 'Baixar JSON',
  tool_yaml_json_download_yaml: 'Baixar YAML',
  tool_yaml_json_sample: 'Carregar exemplo',
  tool_yaml_json_clear: 'Limpar',
  tool_yaml_json_json_safe: 'Tipos seguros JSON (yes/no soltos como texto)',
  tool_yaml_json_indent_label: 'Indentação',
  tool_yaml_json_indent_2: '2 espaços',
  tool_yaml_json_indent_4: '4 espaços',
  tool_yaml_json_indent_minify: 'Minificar JSON',
  tool_yaml_json_yaml_input_label: 'Entrada YAML',
  tool_yaml_json_json_output_label: 'Saída JSON',
  tool_yaml_json_json_input_label: 'Entrada JSON',
  tool_yaml_json_yaml_output_label: 'Saída YAML',
  tool_yaml_json_yaml_placeholder: 'nome: demo\nativo: true\nitens:\n  - a\n  - b',
  tool_yaml_json_json_placeholder: '{\n  "titulo": "Olá",\n  "count": 2\n}',
  tool_yaml_json_sample_yaml: 'nome: demo\nativo: true\nitens:\n  - a\n  - b',
  tool_yaml_json_sample_json: '{\n  "titulo": "Olá",\n  "count": 2\n}',
  tool_yaml_json_large_warn:
    'Colagem muito grande (>200k caracteres). Pode ficar lento — tente um trecho menor.',
  tool_yaml_json_need_lib: 'Não foi possível carregar js-yaml. Verifique a conexão e atualize.',
  tool_yaml_json_empty: 'Cole alguma entrada primeiro.',
  tool_yaml_json_how_title: 'Fluxo',
  tool_yaml_json_how_body:
    'Na mesma página: escolha YAML → JSON ou o inverso. A conversão usa js-yaml nesta aba. Blocos separados por --- passam por loadAll — um documento vira um valor JSON; dois ou mais, um array. Erros de YAML podem trazer linha e coluna quando o parser marca o ponto.',
  tool_yaml_json_rules_title: 'O que esperar',
  tool_yaml_json_rules_body:
    'O que esperar ao converter: como valores sem aspas recebem tipo, como o YAML multidocumento vira JSON e onde uma ida e volta pode perder comentários ou formatação.',
  tool_yaml_json_rules_item_1:
    'Tipos: no schema DEFAULT, yes/no/on/off sem aspas e alguns escalares com cara de data podem virar boolean ou outro tipo. Tipos seguros JSON mantêm escalares sem aspas como string, salvo tipagem explícita.',
  tool_yaml_json_rules_item_2:
    'Multi-doc: loadAll — 1 documento → aquele valor JSON; 2+ → array JSON. Não descartamos o resto em silêncio.',
  tool_yaml_json_rules_item_3:
    'Ida e volta: comentários somem (JSON não tem); âncoras/aliases expandem; dump de JSON para YAML pode mudar ordem e estilo.',
  tool_yaml_json_rules_item_4:
    'Privacidade: a colagem não sobe. Se o CDN servir js-yaml, só baixa código da biblioteca — não o texto da sua config.',
  tool_yaml_json_example_title: 'Exemplo',
  tool_yaml_json_example:
    'YAML `nome: demo` com lista `itens: [a, b]` → JSON `{"nome":"demo","itens":["a","b"]}`. JSON `{"titulo":"Olá","count":2}` vira YAML indentado. Limite: `flag: yes` solto no DEFAULT vira true; com tipos seguros JSON permanece a string "yes".',
  tool_yaml_json_usecases_title: 'Quando ajuda',
  tool_yaml_json_usecase_1:
    'Pipelines de dados / IA: ligar parâmetros YAML editados à mão a ferramentas só-JSON.',
  tool_yaml_json_usecase_2:
    'DevOps: YAML multi-recurso Kubernetes (---) → array JSON para scripts.',
  tool_yaml_json_usecase_3:
    'Dev: reformatar payload JSON de API em YAML legível antes de editar config.',
  tool_yaml_json_faq_q1: 'Dá para ir e voltar sem perder nada?',
  tool_yaml_json_faq_a1:
    'Não. Comentários não sobrevivem ao JSON. Âncoras expandem. Dump de JSON para YAML não devolve comentários nem nomes de âncora.',
  tool_yaml_json_faq_q2: 'yes/no sem aspas vira boolean?',
  tool_yaml_json_faq_a2:
    'No schema padrão do js-yaml, muitas vezes sim. Marque “Tipos seguros JSON” para manter esses escalares como string, salvo tipagem explícita.',
  tool_yaml_json_faq_q3: 'Como tratam YAML com vários documentos (---)?',
  tool_yaml_json_faq_a3:
    'Documentos separados por --- usam loadAll. Um → um valor JSON; dois ou mais → array. Não ficamos só com o primeiro.',
  tool_yaml_json_faq_q4: 'O texto colado sai do navegador?',
  tool_yaml_json_faq_a4:
    'A conversão fica na aba. Um CDN pode servir js-yaml; isso baixa código, não envia seu YAML/JSON.',
  tool_yaml_json_faq_q5: 'De onde vêm linha e coluna no erro?',
  tool_yaml_json_faq_a5:
    'YAML inválido pode trazer mark com linha e coluna. JSON inválido vem de JSON.parse, sem marks estilo YAML.',
  tool_bmi_title: 'Calculadora de IMC — Como calcular o índice de massa corporal',
  tool_bmi_description:
    'Calcule o índice de massa corporal (IMC) com a fórmula de triagem para adultos. Passos: escolha métrico ou imperial, informe peso e altura, veja o IMC e compare com as faixas usuais. Exemplo: 70 kg e 175 cm → IMC 22,9 (normal). Uso educativo — não substitui avaliação clínica.',
  tool_bmi_article:
    'Ferramenta gratuita que mostra como o IMC adulto é obtido a partir de peso e altura: fórmulas, pontos de corte, limites para atletas e crianças. O cálculo roda no seu navegador, sem envio de dados.',
  tool_bmi_weight_label: 'Peso (kg)',
  tool_bmi_weight_placeholder: 'Digite o peso em quilogramas',
  tool_bmi_height_label: 'Altura (cm)',
  tool_bmi_height_placeholder: 'Digite a altura em centímetros',
  tool_bmi_calculate: 'Calcular IMC',
  tool_bmi_how_title: 'Como usar',
  tool_bmi_how_body:
    'Escolha métrico ou imperial, preencha peso e altura e calcule. O IMC sai com uma casa decimal e é classificado nas faixas de triagem mais comuns. Tudo local no navegador — suas medidas não sobem para nosso servidor.',
  tool_bmi_formula_title: 'Fórmula do IMC e faixas adultas',
  tool_bmi_formula_body:
    'Métrico: IMC = peso (kg) ÷ altura (m)². Imperial: IMC = 703 × peso (lb) ÷ altura (in)². Os cortes adultos seguem bandas de triagem amplamente divulgadas.',
  tool_bmi_formula_item_1: 'Abaixo do peso: IMC < 18,5',
  tool_bmi_formula_item_2: 'Normal: IMC 18,5–24,9',
  tool_bmi_formula_item_3: 'Sobrepeso: IMC 25–29,9',
  tool_bmi_formula_item_4: 'Obesidade: IMC ≥ 30',
  tool_bmi_example_title: 'Exemplo',
  tool_bmi_example:
    'Exemplo (métrico): peso 70 kg, altura 175 cm → altura = 1,75 m → IMC = 70 / (1,75²) ≈ 22,9 → faixa normal de triagem.',
  tool_bmi_usecases_title: 'Quando ajuda',
  tool_bmi_usecase_1: 'Checagem rápida antes de uma consulta de rotina (triagem, não diagnóstico).',
  tool_bmi_usecase_2: 'Registrar um IMC inicial junto com outros indicadores no treino.',
  tool_bmi_usecase_3: 'Conferir a mesma medida em unidades métricas e imperiais.',
  tool_bmi_ref_who_label: 'OMS — Folha informativa sobre obesidade e sobrepeso',
  tool_bmi_ref_cdc_label: 'CDC — Categorias de IMC em adultos',
  bmi_chart_title: 'Faixas de IMC adulto (triagem)',
  bmi_underweight: 'Abaixo do peso',
  bmi_normal: 'Normal',
  bmi_overweight: 'Sobrepeso',
  bmi_obese: 'Obesidade',
  bmi_metric_units: 'Métrico',
  bmi_imperial_units: 'Imperial',
  bmi_unit_group_label: 'Sistema de unidades',
  bmi_result_label: 'Seu IMC',
  bmi_invalid_input: 'Informe peso e altura positivos para calcular.',
  bmi_weight_lbs: 'Peso (lb)',
  bmi_weight_lbs_placeholder: 'Peso em libras',
  bmi_height_ft: 'Altura (ft)',
  bmi_height_ft_placeholder: 'Pés',
  bmi_height_in: 'Altura (in)',
  bmi_height_in_placeholder: 'Polegadas',
  bmi_interpretation_underweight:
    'Triagem: faixa abaixo do peso. IMC não diagnostica — fale com um profissional de saúde se precisar.',
  bmi_interpretation_normal:
    'Triagem: faixa normal para adultos. IMC sozinho não mede gordura corporal nem condicionamento.',
  bmi_interpretation_overweight:
    'Triagem: faixa de sobrepeso. IMC não diagnostica — fale com um profissional de saúde se precisar.',
  bmi_interpretation_obese:
    'Triagem: faixa de obesidade. IMC não diagnostica — fale com um profissional de saúde se precisar.',
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
  tool_headers_faq_q1: 'O que mostram os headers de resposta HTTP?',
  tool_headers_faq_a1:
    'Metadados da resposta: tipo de conteúdo, cache, redirects e políticas como HSTS, CSP ou CORS.',
  tool_headers_faq_q2: 'A ferramenta baixa o HTML inteiro?',
  tool_headers_faq_a2:
    'Prefere HEAD e usa GET só se precisar. O foco é inspecionar headers, não raspar nem guardar o corpo.',
  tool_headers_faq_q3: 'Por que localhost e IPs privados são bloqueados?',
  tool_headers_faq_a3:
    'Redes privadas ficam fora para que o worker não sirva de sonda contra hosts internos.',
  tool_headers_faq_q4: 'Dá o mesmo resultado que o DevTools?',
  tool_headers_faq_a4:
    'Nem sempre. Você vê a resposta do nosso edge; CDN, geo ou anti-bot podem diferir do seu navegador local.',
  tool_headers_faq_q5: 'Vocês guardam histórico das URLs que verifico?',
  tool_headers_faq_a5:
    'Cada consulta é uma requisição curta no edge. Não há histórico de URLs; evite colar segredos na query string.',
  tool_bmi_faq_q1: 'Qual é a fórmula do IMC?',
  tool_bmi_faq_a1: 'Métrico: IMC = peso(kg) / altura(m)². Imperial: IMC = 703 × peso(lb) / altura(in)².',
  tool_bmi_faq_q2: 'O que significam as faixas de IMC?',
  tool_bmi_faq_a2:
    'Cortes comuns em adultos: abaixo do peso <18,5; normal 18,5–24,9; sobrepeso 25–29,9; obesidade ≥30. São referências de triagem, não diagnóstico.',
  tool_bmi_faq_q3: 'O IMC vale para atletas?',
  tool_bmi_faq_a3:
    'Nem sempre. IMC não separa músculo de gordura. Atletas podem cair em faixa alta com pouca gordura — peça avaliação individual a um profissional.',
  tool_bmi_faq_q4: 'Serve para crianças ou gestantes?',
  tool_bmi_faq_a4:
    'Estes cortes adultos não servem para menores ou gravidez. Use curvas por idade e orientação clínica.',
  tool_bmi_disclaimer:
    'Esta calculadora de IMC é apenas para triagem educativa em adultos. Não é orientação médica, não diagnostica doenças e não substitui um profissional de saúde qualificado.',
  tool_bmi_references:
    'Folha informativa da OMS sobre obesidade; orientação do CDC sobre categorias de IMC adulto; fórmulas métricas e imperiais padrão.',

  /* --- IG: ip / roi / mr --- */
tool_ip_address_title: 'Qual é o meu IP — Ver seu IP público',
  tool_ip_address_description:
    'Veja o IP público que nosso edge observa na sua conexão. Processo: abra a página ou toque em Atualizar; o worker lê o endereço de cliente confiável. Exemplo: pode mostrar 203.0.113.10. Com VPN ou proxy aparece o IP de saída, não o da LAN.',
  tool_ip_address_article:
    'Esta página mostra o IP de saída público visto pelo nosso edge — útil para checar VPN, informar suporte ou depurar allowlists. Não é geolocalização nem consulta de ISP.',
  tool_ip_address_how_title: 'Como funciona',
  tool_ip_address_how_body:
    'O navegador chama nossa API no edge. O worker retorna o IP de cliente ligado à conexão (não só um cabeçalho falsificável). Atualize quando quiser; sem conta.',
  tool_ip_address_rules_title: 'O que esse IP significa',
  tool_ip_address_rules_body:
    'É o endereço público associado à sua conexão TCP/TLS no edge — a identidade de saída que sites costumam ver. Limites:',
  tool_ip_address_rules_item_1: 'Com VPN ou proxy HTTP você vê o IP de saída do provedor, não o LAN de casa.',
  tool_ip_address_rules_item_2: 'Com NAT, vários dispositivos compartilham um IP público; 192.168.x.x não aparece aqui.',
  tool_ip_address_rules_item_3: 'Preferimos o IP de cliente do edge a X-Forwarded-For sozinho (pode ser falsificado).',
  tool_ip_address_rules_item_4: 'Pode aparecer IPv4 ou IPv6 conforme o caminho; em dual-stack pode mudar ao reconectar.',
  tool_ip_address_example_title: 'Exemplo',
  tool_ip_address_example:
    'Exemplo de documentação: o edge vê 203.0.113.10 (endereço reservado TEST-NET-3). Seu resultado real será o IP público de saída.',
  tool_ip_address_usecases_title: 'Quando usar',
  tool_ip_address_usecase_1: 'Confirmar se a VPN/proxy realmente mudou o IP público.',
  tool_ip_address_usecase_2: 'Informar ao suporte ou firewall qual IP público liberar.',
  tool_ip_address_usecase_3: 'Checagem rápida ao depurar acesso remoto ou allowlist de API.',
  tool_ip_address_ref_mdn_label: 'MDN — Cabeçalho X-Forwarded-For (riscos de spoofing)',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — O que é um endereço IP?',
  ip_label: 'Seu IP público',
  fetch_ip_button: 'Atualizar',
  fetching_message: 'Buscando…',
  tool_ip_address_faq_q1: 'Vocês armazenam meu IP?',
  tool_ip_address_faq_a1:
    'A consulta é um pedido curto no edge. Não há histórico de IP; trate o resultado como exibição temporária.',
  tool_ip_address_faq_q2: 'Como a página obtém meu IP?',
  tool_ip_address_faq_a2:
    'O navegador chama a API no edge; o worker devolve o IP de cliente confiável dessa conexão.',
  tool_ip_address_faq_q3: 'E se eu usar VPN ou proxy?',
  tool_ip_address_faq_a3:
    'Em geral você vê o IP de saída do VPN/proxy. É esperado: sites veem a mesma identidade.',
  tool_ip_address_faq_q4: 'Por que difere do IP da LAN?',
  tool_ip_address_faq_a4:
    'Endereços privados (ex.: 192.168.x.x) ficam na rede local via NAT. Aqui só aparece o IP público.',

  tool_roi_title: 'Calculadora de ROI — Como calcular o retorno sobre investimento',
  tool_roi_description:
    'Calcule o ROI simples com (Retorno − Custo) / Custo × 100%, ou (Valor final − Inicial) / Inicial × 100%. Processo: informe custo e valor final (ou ganho líquido) e revise hipóteses de impostos, taxas e tempo. Exemplo: custo 1000, final 1300 → ROI 30%. Apenas ilustração educativa — não é conselho de investimento.',
  tool_roi_article:
    'O ROI simples compara o ganho líquido ao custo em percentual. Use para recaps aproximados de campanhas ou projetos; não calcula IRR/VPL multiperíodo.',
  tool_roi_initial_label: 'Investimento inicial (custo)',
  tool_roi_initial_placeholder: 'ex.: 1000',
  tool_roi_final_label: 'Valor final',
  tool_roi_final_placeholder: 'ex.: 1300',
  tool_roi_gain_label: 'Ganho líquido (opcional)',
  tool_roi_gain_placeholder: 'Se conhecido, substitui final − inicial',
  tool_roi_calculate: 'Calcular',
  tool_roi_result_label: 'ROI',
  tool_roi_how_title: 'Como funciona',
  tool_roi_how_body:
    'Informe o custo e o valor final ou um ganho líquido conhecido. ROI = líquido / custo × 100%. Sem ganho preenchido, líquido = final − inicial. Custo zero é rejeitado.',
  tool_roi_formula_title: 'Fórmula e hipóteses',
  tool_roi_formula_body:
    'ROI = (Valor final − Investimento inicial) / Investimento inicial × 100%, ou Ganho líquido / Custo × 100%. Lembre-se:',
  tool_roi_formula_item_1: 'Impostos: não estimamos — use valores após impostos se for o seu critério.',
  tool_roi_formula_item_2: 'Tempo: o ROI simples ignora o período de retenção; não é retorno anualizado.',
  tool_roi_formula_item_3: 'Taxas: inclua comissões e tarifas no custo ou no valor final.',
  tool_roi_formula_item_4: 'Fluxos multiperíodo e IRR/VPL ficam fora deste percentual de um período.',
  tool_roi_example_title: 'Exemplo',
  tool_roi_example:
    'Exemplo: custo 1000, valor final 1300 → ganho 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_usecases_title: 'Quando usar',
  tool_roi_usecase_1: 'Marketing: ROI aproximado de campanha com gasto e receita já conhecidos.',
  tool_roi_usecase_2: 'Estudos: praticar o percentual básico de ROI com números fixos.',
  tool_roi_usecase_3: 'Revisão de projeto: resumir uma iniciativa como par custo/ganho (só estimativa).',
  tool_roi_ref_investopedia_label: 'Investopedia — Retorno sobre investimento (ROI)',
  tool_roi_ref_guide_label: 'Investopedia — Guia para calcular ROI',
  tool_roi_interpret_positive: 'ROI positivo (ganho em relação ao custo) — só ilustração educativa.',
  tool_roi_interpret_zero: 'ROI zero — sem ganho nem perda nestes dados.',
  tool_roi_interpret_negative: 'ROI negativo (perda em relação ao custo) — só ilustração educativa.',
  tool_roi_zero_cost: 'O investimento inicial deve ser maior que zero.',
  tool_roi_faq_q1: 'E se o investimento inicial for zero?',
  tool_roi_faq_a1: 'ROI é indefinido (divisão por zero). Informe um custo positivo.',
  tool_roi_faq_q2: 'Qual fórmula a ferramenta usa?',
  tool_roi_faq_a2:
    'ROI = (Final − Inicial) / Inicial × 100%, ou Ganho líquido / Custo × 100% se informar o ganho.',
  tool_roi_faq_q3: 'Como ficam impostos, taxas e tempo?',
  tool_roi_faq_a3:
    'Não estimamos impostos nem taxas — incorpore você mesmo. O ROI simples também não anualiza o período.',
  tool_roi_faq_q4: 'Isto é conselho de investimento?',
  tool_roi_faq_a4: 'Não. Os resultados são apenas ilustrações educativas.',
  tool_roi_disclaimer:
    'Os resultados de ROI são apenas ilustrações educativas e não constituem conselho de investimento, fiscal ou financeiro. Retornos passados ou hipotéticos não garantem resultados futuros.',
  tool_roi_references:
    'Definições e guias da Investopedia sobre ROI; ROI simples = ganho líquido / custo.',

  tool_marginal_revenue_title: 'Calculadora de receita marginal — Fórmula ΔRT / ΔQ',
  tool_marginal_revenue_description:
    'Calcule a receita marginal com MR = ΔRT / ΔQ. Processo: informe quantidade e receita total em dois pontos, obtenha ΔRT e ΔQ e divida. Exemplo: Q 10→11, RT 1000→1080 → MR = 80. Apenas educativo — não é conselho de preços.',
  tool_marginal_revenue_article:
    'Receita marginal é a variação da receita total quando a quantidade muda. Esta calculadora mostra a derivação discreta entre dois pontos.',
  tool_marginal_revenue_how_title: 'Como funciona',
  tool_marginal_revenue_how_body:
    'Informe quantidade e receita total do nível 1 e do nível 2. Calculamos ΔRT = RT2 − RT1, ΔQ = Q2 − Q1 e MR = ΔRT / ΔQ no navegador.',
  tool_marginal_revenue_formula_title: 'Derivação da fórmula',
  tool_marginal_revenue_formula_body:
    'Por definição, a receita marginal mede como a receita total muda com a quantidade. Com dois pontos:',
  tool_marginal_revenue_formula_item_1: 'ΔRT = RT₂ − RT₁ (variação da receita total)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (variação da quantidade)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔRT / ΔQ quando ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Um passo discreto aproxima o MR médio do intervalo; modelos contínuos usam dRT/dQ. MR negativo indica receita caindo com mais quantidade.',
  tool_marginal_revenue_example_title: 'Exemplo',
  tool_marginal_revenue_example:
    'Exemplo: Q₁ = 10, RT₁ = 1000; Q₂ = 11, RT₂ = 1080 → ΔRT = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_usecases_title: 'Quando usar',
  tool_marginal_revenue_usecase_1: 'Trabalho escolar: conferir tabela de quantidade/receita em dois níveis.',
  tool_marginal_revenue_usecase_2: 'Estimativa rápida: quanto a receita muda ao subir uma unidade.',
  tool_marginal_revenue_usecase_3: 'Comparar receita marginal e receita média em microeconomia introdutória.',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Receita marginal (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Princípios de microeconomia (concorrência)',
  tool_marginal_revenue_q1_label: 'Quantidade (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'ex.: 10',
  tool_marginal_revenue_tr1_label: 'Receita total (RT₁)',
  tool_marginal_revenue_tr1_placeholder: 'ex.: 1000',
  tool_marginal_revenue_q2_label: 'Quantidade (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'ex.: 11',
  tool_marginal_revenue_tr2_label: 'Receita total (RT₂)',
  tool_marginal_revenue_tr2_placeholder: 'ex.: 1080',
  tool_marginal_revenue_quantity_label: 'Quantidade',
  tool_marginal_revenue_revenue_label: 'Receita total',
  tool_marginal_revenue_calculate: 'Calcular MR',
  tool_marginal_revenue_result_label: 'Receita marginal',
  tool_marginal_revenue_zero_dq: 'ΔQ é 0 — a quantidade precisa mudar entre os dois pontos.',
  tool_marginal_revenue_detail_tpl: 'ΔRT = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_faq_q1: 'Como a receita marginal é derivada aqui?',
  tool_marginal_revenue_faq_a1:
    'MR = ΔRT / ΔQ com ΔRT = RT₂ − RT₁ e ΔQ = Q₂ − Q₁. É derivação discreta, não derivada contínua.',
  tool_marginal_revenue_faq_q2: 'O que acontece se ΔQ for zero?',
  tool_marginal_revenue_faq_a2: 'MR é indefinido se a quantidade não muda. Escolha dois pontos diferentes.',
  tool_marginal_revenue_faq_q3: 'Qual a diferença para a receita média?',
  tool_marginal_revenue_faq_a3:
    'Receita média é RT / Q em um nível. Marginal é a variação de RT quando Q muda; coincidem só em casos especiais.',
  tool_marginal_revenue_faq_q4: 'MR positivo significa aumentar a produção?',
  tool_marginal_revenue_faq_a4:
    'Não. Esta ferramenta não dá conselho de preço ou produção; também importa o custo marginal.',
  tool_marginal_revenue_disclaimer:
    'Esta calculadora é para aprender conceitos de microeconomia. Não é conselho empresarial, de preços ou de investimento.',
  tool_marginal_revenue_references:
    'Entrada da Investopedia sobre receita marginal; tratamento introdutório de MR = ΔRT/ΔQ (ex.: OpenStax).',

  tool_squarefeet_title: 'Pés quadrados para m² — Conversão para imóveis e reformas',
  tool_squarefeet_description:
    'Converta a área do cômodo entre pés quadrados e metros quadrados para anúncios e reformas. Processo: escolha ft/m/in, informe comprimento × largura, calcule a área e mostre ft² e m² com o fator NIST 1 ft² = 0.09290304 m². Exemplo: apartamento de 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_article:
    'Estime a área retangular a partir do comprimento e da largura e converta entre pés quadrados e metros quadrados. Feito para anúncios, piso e pintura — não é avaliação imobiliária nem distingue área útil e construída.',
  tool_squarefeet_length_label: 'Comprimento',
  tool_squarefeet_length_placeholder: 'Informe o comprimento',
  tool_squarefeet_width_label: 'Largura',
  tool_squarefeet_width_placeholder: 'Informe a largura',
  tool_squarefeet_calculate: 'Converter área',
  tool_squarefeet_unit_group_label: 'Unidades de entrada',
  unit_feet: 'Pés',
  unit_meters: 'Metros',
  unit_inches: 'Polegadas',
  sqft_unit: 'sq ft',
  tool_squarefeet_result_note: 'Arredondado a duas casas. Fator: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_invalid_input: 'Informe comprimento e largura positivos.',
  tool_squarefeet_usage_title: 'Uso',
  tool_squarefeet_usage: 'Escolha a unidade, informe comprimento e largura e obtenha pés quadrados mais o equivalente em m².',
  tool_squarefeet_how_title: 'Como funciona',
  tool_squarefeet_how_body:
    'Escolha se as medidas estão em pés, metros ou polegadas. Multiplique comprimento × largura após converter ambos para pés e passe para m² com o fator SI. Valores vazios ou negativos são rejeitados.',
  tool_squarefeet_formula_title: 'Fórmula de área e fator de conversão',
  tool_squarefeet_formula_body:
    'Área (ft²) = comprimento (ft) × largura (ft). Em metros: ft² = (L×W) ÷ 0.09290304. Em polegadas: divida cada lado por 12. Fator: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Entrada em pés: área_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Entrada em metros: área_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Entrada em polegadas: área_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = área_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_example_title: 'Exemplo',
  tool_squarefeet_example:
    'Anúncio: apartamento de 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Cômodo: 10 ft × 12 ft = 120 sq ft ≈ 11,15 m².',
  tool_squarefeet_usecases_title: 'Para que serve',
  tool_squarefeet_usecase_1: 'Comparar anúncio em sq ft com listagens locais em m².',
  tool_squarefeet_usecase_2: 'Estimar piso ou carpete de um cômodo retangular antes de pedir material.',
  tool_squarefeet_usecase_3: 'Checagem rápida de tinta ou reforma quando o desenho mistura unidades.',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guia do Sistema Internacional de Unidades (SI)',
  tool_squarefeet_faq_q1: 'Qual fator usam entre ft² e m²?',
  tool_squarefeet_faq_a1: 'Exatamente 1 ft² = 0.09290304 m² (orientação SI / NIST). Resultado com duas casas decimais.',
  tool_squarefeet_faq_q2: 'Distingue área útil e construída?',
  tool_squarefeet_faq_a2: 'Não. Só converte a área plana de um retângulo.',
  tool_squarefeet_faq_q3: 'Serve para avaliar o preço do imóvel?',
  tool_squarefeet_faq_a3: 'Não. Conversão de área não é avaliação nem modelo de preço.',
  tool_squarefeet_faq_q4: 'E cômodos em L?',
  tool_squarefeet_faq_a4: 'Divida em retângulos, converta cada um e some.',
  tool_percentage_change_title: 'Calculadora de variação percentual — Do valor antigo ao novo',
  tool_percentage_change_description:
    'Calcule o aumento ou a queda percentual de um valor antigo para um novo. Processo: informe ambos, aplique (novo − antigo) / antigo × 100 e leia o sinal. Exemplo: 80 → 100 = +25%. Feito para receita MoM, DAU e preços — não são pontos percentuais.',
  tool_percentage_change_article:
    'A variação percentual relativa responde quanto a métrica se moveu frente à base. Informe o valor antigo e o novo; usamos (novo − antigo) / antigo × 100. Serve para KPIs, não substitui ROI.',
  tool_percentage_change_original_label: 'Valor antigo',
  tool_percentage_change_new_label: 'Valor novo',
  tool_percentage_change_calculate: 'Calcular',
  tool_percentage_change_result_label: 'Variação percentual',
  tool_percentage_change_example:
    'Exemplo completo: antigo 80, novo 100 → Δ = 20 → (20 / 80) × 100 = 25% de aumento. Queda: 100 → 80 = −20%.',
  tool_percentage_change_result_invalid: 'O valor antigo deve ser um número diferente de zero.',
  tool_percentage_change_increase: 'aumento',
  tool_percentage_change_decrease: 'diminuição',
  tool_percentage_change_no_change: 'sem alteração',
  tool_percentage_change_abs_note: 'Variação absoluta: {delta}',
  tool_percentage_change_how_title: 'Como funciona',
  tool_percentage_change_how_body:
    'Informe a base (antigo) e o valor posterior. Subtraímos, dividimos pelo antigo e multiplicamos por 100. Positivo sobe; negativo cai. Se antigo = 0, a variação relativa é indefinida.',
  tool_percentage_change_formula_title: 'Fórmula da variação percentual',
  tool_percentage_change_formula_body:
    'Variação % = (novo − antigo) / antigo × 100. Usamos o antigo com sinal no denominador (não |antigo|).',
  tool_percentage_change_formula_item_1: 'Δ = novo − antigo',
  tool_percentage_change_formula_item_2: 'percentual = (Δ / antigo) × 100',
  tool_percentage_change_formula_item_3: 'antigo = 0 → indefinido (erro)',
  tool_percentage_change_example_title: 'Exemplo',
  tool_percentage_change_usecases_title: 'Usos de negócio e dados',
  tool_percentage_change_usecase_1: 'Receita mês a mês: GMV 80 no mês passado vs 100 neste → +25%.',
  tool_percentage_change_usecase_2: 'Produto: DAU de 50k para 55k → +10% relativo.',
  tool_percentage_change_usecase_3: 'Preço: de 40 para 34 → −15% (não “6 pontos percentuais”).',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_faq_q1: 'Qual é a fórmula da variação percentual?',
  tool_percentage_change_faq_a1: 'Variação % = (novo − antigo) / antigo × 100. Positivo = aumento; negativo = queda.',
  tool_percentage_change_faq_q2: 'Por que o valor antigo não pode ser zero?',
  tool_percentage_change_faq_a2: 'Divisão por zero é indefinida. Sem base não há variação relativa.',
  tool_percentage_change_faq_q3: 'É a mesma coisa que pontos percentuais?',
  tool_percentage_change_faq_a3: 'Não. De 10% para 12% são 2 pontos percentuais, mas aumento relativo de 20%.',
  tool_percentage_change_faq_q4: 'Qual a diferença para o ROI?',
  tool_percentage_change_faq_a4: 'ROI compara ganho com custo do investimento. Variação percentual compara qualquer valor novo a uma base antiga.',
  tool_gradient_title: 'Calculadora de gradiente — ∇f multivariable (derivadas parciais)',
  tool_gradient_description:
    'Calcule o gradiente ∇f de um campo escalar como vetor de derivadas parciais. Processo: derive em cada variável, monte ∇f e avalie num ponto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); em (1,2) → (4,4). Útil em otimização e descida de gradiente em ML.',
  tool_gradient_desc:
    'Calcule o gradiente ∇f de um campo escalar como vetor de derivadas parciais. Processo: derive em cada variável, monte ∇f e avalie num ponto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); em (1,2) → (4,4). Útil em otimização e descida de gradiente em ML.',
  tool_gradient_article:
    'O gradiente de uma função escalar multivariável é o vetor das derivadas parciais de primeira ordem. Aponta para o maior aumento local. Esta página não é uma calculadora de inclinação entre dois pontos.',
  tool_gradient_fn_hint: 'Função demo (fixa na caixa interativa):',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'ex.: 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'ex.: 2',
  tool_gradient_calculate: 'Avaliar ∇f',
  tool_gradient_result_label: 'Gradiente no seu ponto',
  tool_gradient_result_note: 'Avaliado f(x,y)=x²y+3y em ({x}, {y}).',
  tool_gradient_invalid_input: 'Informe valores numéricos finitos para x e y.',
  tool_gradient_how_title: 'Como funciona',
  tool_gradient_how_body:
    'Para um escalar f, calcule cada parcial ∂f/∂xᵢ mantendo as outras fixas, empilhe em ∇f e substitua as coordenadas. A caixa usa f(x,y)=x²y+3y para conferir o cálculo.',
  tool_gradient_formula_title: 'Fórmula do gradiente multivariável',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). Em duas variáveis: ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f é a subida mais íngreme; −∇f entra na descida de gradiente.',
  tool_gradient_formula_item_1: 'Calcule ∂f/∂xᵢ para cada variável',
  tool_gradient_formula_item_2: 'Monte o vetor ∇f',
  tool_gradient_formula_item_3: 'Avalie os componentes no ponto',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_example_title: 'Exemplo',
  tool_gradient_example:
    'f(x,y)=x²y+3y. Parciais: ∂f/∂x=2xy, ∂f/∂y=x²+3. Em (1,2): ∇f=(4,4).',
  tool_gradient_usecases_title: 'Otimização e aprendizado de máquina',
  tool_gradient_usecase_1: 'Conferir parciais de exercício antes do passo de otimização.',
  tool_gradient_usecase_2: 'Explicar descida de gradiente: cada passo vai no sentido oposto a ∇loss.',
  tool_gradient_usecase_3: 'Intuição física: ∇f aponta onde o campo escalar cresce mais rápido.',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradiente',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_faq_q1: 'O que é um gradiente no cálculo multivariável?',
  tool_gradient_faq_a1: '∇f é o vetor de derivadas parciais e aponta para o maior aumento local de f.',
  tool_gradient_faq_q2: 'Como calcular à mão?',
  tool_gradient_faq_a2: 'Derive em cada variável mantendo as outras fixas, monte o vetor e avalie num ponto.',
  tool_gradient_faq_q3: 'É o mesmo “gradiente” do gradient descent em ML?',
  tool_gradient_faq_a3: 'Sim, o mesmo objeto: ∇ de uma perda escalar. A página ensina a definição; não treina modelo.',
  tool_gradient_faq_q4: 'É uma calculadora de inclinação entre dois pontos?',
  tool_gradient_faq_a4: 'Não. Inclinação rise/run é outra ferramenta; aqui ∇f é o vetor de parciais.',

};
export default pt;