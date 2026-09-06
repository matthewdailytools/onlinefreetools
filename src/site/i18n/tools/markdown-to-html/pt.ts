/**
 * i18n tool shard (markdown-to-html / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_markdown_article:
    'Dois sentidos, uma página, com avisos honestos sobre limpeza e perda. Colagem local; este site só para bibliotecas.',
  tool_markdown_clear: 'Limpar',
  tool_markdown_copy: 'Copiar HTML',
  tool_markdown_copy_done: 'Copiado',
  tool_markdown_copy_md: 'Copiar Markdown',
  tool_markdown_description:
    'Quer publicar Markdown como HTML limpo, ou resgatar Markdown a partir de HTML colado? Escolha o sentido; marked/Turndown e DOMPurify rodam aí no navegador. Exemplo: rascunho de post vira .html, ou o HTML do CMS vira arquivo .md.',
  tool_markdown_dir_label: 'Direção da conversão',
  tool_markdown_download: 'Baixar HTML',
  tool_markdown_download_md: 'Baixar Markdown',
  tool_markdown_example: 'Markdown com `# Título` vira heading seguro; HTML com `<strong>` volta como `**negrito**`.',
  tool_markdown_example_title: 'Exemplo',
  tool_markdown_export_description:
    'Gerar um documento HTML completo a partir do Markdown com template e metadados. Passos: renderizar, injetar no template, adicionar meta e baixar. Exemplo: exportar um post como .html independente.',
  tool_markdown_export_title: 'Exportação Markdown para HTML',
  tool_markdown_faq_a1: 'No sentido Markdown → HTML, DOMPurify age antes da pré-visualização e do download.',
  tool_markdown_faq_a2: 'Não conte com isso. O foco é texto editável.',
  tool_markdown_faq_a3: 'A conversão é no cliente. Biblioteca depuis ce site não envia seu artigo.',
  tool_markdown_faq_a4: 'Não garantido — use diff se precisar de igualdade.',
  tool_markdown_faq_a5: 'Títulos, listas, links, ênfase, code fence; opção de HTML completo para partilha offline.',
  tool_markdown_faq_q1: 'O HTML é limpo de scripts?',
  tool_markdown_faq_q2: 'HTML → Markdown mantém o visual?',
  tool_markdown_faq_q3: 'A colagem vai para a nuvem?',
  tool_markdown_faq_q4: 'Round-trip fiel?',
  tool_markdown_faq_q5: 'Quais recursos CommonMark e exportações?',
  tool_markdown_full_doc: 'Gerar documento HTML completo',
  tool_markdown_how_body:
    'Use as abas. Entrada à esquerda, resultado à direita. No sentido HTML dá para copiar trecho ou documento simples; no sentido Markdown sai texto para Git ou LLM.',
  tool_markdown_how_item_1: 'Escolha o separador Markdown → HTML ou HTML → Markdown.',
  tool_markdown_how_item_2: 'Cole a entrada à esquerda (ou clique em Carregar exemplo).',
  tool_markdown_how_item_3: 'Em Markdown → HTML, opcionalmente envolva um documento HTML mínimo.',
  tool_markdown_how_item_4: 'Copie ou descarregue a saída convertida à direita.',
  tool_markdown_how_title: 'Fluxo',
  tool_markdown_html_input_label: 'Entrada HTML',
  tool_markdown_html_placeholder: '<h1>Título</h1>\n<p>Olá <strong>mundo</strong></p>',
  tool_markdown_input_label: 'Entrada Markdown',
  tool_markdown_large_warn: 'Texto muito grande (>200k caracteres). A conversão pode ficar lenta — tente um trecho menor.',
  tool_markdown_loss_hint:
    'Pouco ou nenhum Markdown gerado — scripts, tags vazias ou marcação não suportada podem ter sido removidos. Veja Regras e FAQ.',
  tool_markdown_md_output_label: 'Saída Markdown',
  tool_markdown_need_lib: 'Não foi possível carregar a biblioteca de conversão. Verifique a conexão e atualize.',
  tool_markdown_placeholder:
    '# Título\n\nMarkdown básico: **negrito**, listas e blocos de código.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log(\'Olá Markdown\');\n```',
  tool_markdown_preview_label: 'Pré-visualização HTML',
  tool_markdown_rules_intro:
    'O que a conversão cobre: qual sintaxe Markdown é suportada, como o HTML é sanitizado e como seu texto colado é tratado localmente.',
  tool_markdown_rules_item_html_md: 'Para Markdown: limpa e converte com títulos ATX e blocos cercados.',
  tool_markdown_rules_item_loss: 'Perde estilo pesado, scripts e muita tabela complexa. Ida e volta não é idêntica.',
  tool_markdown_rules_item_md_html: 'Para HTML: parse CommonMark + sanitização antes de mostrar.',
  tool_markdown_rules_privacy: 'Texto colado não sobe para o nosso servidor; charger ce site ≠ upload do conteúdo.',
  tool_markdown_rules_title: 'O que cada aba faz',
  tool_markdown_sample_html: '<h1>Título</h1>\n<p>Olá <strong>mundo</strong></p>',
  tool_markdown_sample_md:
    '# Título\n\nMarkdown básico: **negrito**, listas e blocos de código.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log(\'Olá Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'De Markdown para HTML — e HTML de volta a Markdown',
  tool_markdown_usecase_1: 'Entregar HTML sanitizado ao CMS.',
  tool_markdown_usecase_2: 'Recuperar docs a partir de HTML exportado.',
  tool_markdown_usecase_3: 'Preparar colagem rica para um modelo de linguagem.',
  tool_markdown_usecases_title: 'Quando ajuda',
};
export default pt;
