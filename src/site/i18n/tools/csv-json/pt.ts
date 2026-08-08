/**
 * i18n tool shard (csv-json / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_csv_json_article:
    'CSV ↔ JSON bidirecional com regras claras de tipos, separador e aspas, e como o JSON aninhado é achatado em colunas. Feito para a troca planilha ↔ API, não para mais uma URL vazia.',
  tool_csv_json_clear: 'Limpar',
  tool_csv_json_convert: 'Converter',
  tool_csv_json_copy_csv: 'Copiar CSV',
  tool_csv_json_copy_done: 'Copiado',
  tool_csv_json_copy_json: 'Copiar JSON',
  tool_csv_json_csv_input_label: 'Entrada CSV',
  tool_csv_json_csv_output_label: 'Saída CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'Detecção automática',
  tool_csv_json_delimiter_comma: 'Vírgula ,',
  tool_csv_json_delimiter_label: 'Separador',
  tool_csv_json_delimiter_semicolon: 'Ponto e vírgula ;',
  tool_csv_json_delimiter_tab: 'Tabulação',
  tool_csv_json_description:
    'Converta CSV para JSON ou JSON para CSV no navegador. Passos: escolha a direção, cole ou envie, defina o separador e o cabeçalho e copie ou baixe. Trata campos entre aspas com vírgulas, ponto e vírgula e tabulações; de JSON para CSV, objetos aninhados são achatados em colunas. Exemplo: transforme uma planilha de produtos (sku, título, preço) em um array JSON — os dados ficam locais.',
  tool_csv_json_dir_label: 'Direção da conversão',
  tool_csv_json_download_csv: 'Baixar CSV',
  tool_csv_json_download_json: 'Baixar JSON',
  tool_csv_json_empty: 'Cole algum conteúdo primeiro.',
  tool_csv_json_example:
    'O CSV `sku,title,price` com a linha `A-001,"Chair, oak",129.9` vira JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (sem tipos, price fica como texto; ative-os para o número 129.9). Ao contrário: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` gera o cabeçalho `sku,dim.w,dim.h` com a linha `A-001,40,90`.',
  tool_csv_json_example_title: 'Exemplo',
  tool_csv_json_faq_a1:
    'Por padrão cada célula fica como texto, então 007 e IDs longos são preservados. Se ativar «Inferir tipos», valores numéricos viram números: 007 vira 7 e dígitos muito longos podem perder precisão. Deixe desativado para SKU, CEP e telefones.',
  tool_csv_json_faq_a2:
    'Sim. Escolha vírgula, ponto e vírgula ou tabulação, ou deixe na detecção automática e o Papa Parse adivinha. Ponto e vírgula é comum em exportações de Excel europeias; tabulação é TSV.',
  tool_csv_json_faq_a3:
    'Ficam entre aspas duplas e as aspas internas são duplicadas, seguindo a RFC 4180. Assim um título como Chair, oak permanece em um campo em vez de virar duas colunas.',
  tool_csv_json_faq_a4:
    'Objetos são achatados em colunas com caminho por pontos (dim.w, dim.h). Arrays viram uma string JSON em uma única célula. As colunas são a união das chaves de todos os registros e o que falta fica em branco.',
  tool_csv_json_faq_a5:
    'Não. A análise fica nesta aba e os arquivos escolhidos são lidos localmente. Um CDN pode servir o Papa Parse; essa requisição só baixa código, não envia seu CSV ou JSON.',
  tool_csv_json_faq_q1: 'Meus números, zeros à esquerda e identificadores ficam intactos?',
  tool_csv_json_faq_q2: 'Ele lida com ponto e vírgula ou tabulação, não só vírgula?',
  tool_csv_json_faq_q3: 'Como campos com vírgulas, aspas ou quebras de linha são tratados?',
  tool_csv_json_faq_q4: 'Como o JSON aninhado vira colunas de CSV?',
  tool_csv_json_faq_q5: 'Meus dados saem do navegador?',
  tool_csv_json_header: 'Primeira linha é cabeçalho',
  tool_csv_json_how_body:
    'Escolha CSV → JSON ou JSON → CSV; a análise e a geração acontecem aqui com o Papa Parse. No CSV você escolhe o separador (ou detecção automática), se a primeira linha é cabeçalho e se infere números/booleanos. No JSON, objetos aninhados viram colunas com caminho por pontos e as colunas são a união de todas as chaves.',
  tool_csv_json_how_title: 'Como funciona',
  tool_csv_json_indent_2: '2 espaços',
  tool_csv_json_indent_4: '4 espaços',
  tool_csv_json_indent_label: 'Recuo',
  tool_csv_json_indent_minify: 'Minificar JSON',
  tool_csv_json_json_input_label: 'Entrada JSON',
  tool_csv_json_json_output_label: 'Saída JSON',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_large_warn:
    'Entrada muito grande (mais de 2 milhões de caracteres). A conversão pode ficar lenta; tente um arquivo menor.',
  tool_csv_json_need_lib: 'Não foi possível carregar o Papa Parse. Verifique a conexão e recarregue.',
  tool_csv_json_rules_body:
    'O que esperar ao converter: como os tipos de célula são tratados, quais separadores e aspas se aplicam e como o JSON aninhado vira colunas.',
  tool_csv_json_rules_item_1:
    'Tipos: células CSV são texto por padrão. Ative «Inferir tipos» para números/booleanos, mas 007 vira 7 e números muito longos podem perder precisão; deixe desativado para SKU, CEP e telefones.',
  tool_csv_json_rules_item_2:
    'Separadores: vírgula, ponto e vírgula (comum no Excel europeu) e tabulação (TSV); a detecção automática adivinha pelo texto. Campos com o separador, aspas ou quebras de linha ficam entre aspas duplas conforme a RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: objetos são achatados com caminhos por pontos (dim.w, dim.h); arrays viram uma string JSON em uma célula; as colunas são a união de todas as chaves e o que falta fica em branco.',
  tool_csv_json_rules_item_4:
    'Privacidade: seu texto e arquivos não são enviados. Buscar o Papa Parse em um CDN só baixa o código da biblioteca, não os seus dados.',
  tool_csv_json_rules_title: 'Regras que você deve esperar',
  tool_csv_json_sample: 'Carregar exemplo',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'Conversor CSV ↔ JSON — tipos, separador e local',
  tool_csv_json_typing: 'Inferir tipos (números/booleanos)',
  tool_csv_json_usecase_1:
    'E-commerce: transforme uma planilha de produtos exportada (sku, título, preço) em um array JSON para a API de uma loja ou marketplace.',
  tool_csv_json_usecase_2: 'Desenvolvedores: converta uma resposta JSON em CSV para planilhas, conciliação ou entrega.',
  tool_csv_json_usecase_3:
    'Dados/operações: leve um CSV de relatórios ou eventos (vírgula, ponto e vírgula ou TSV) para JSON em um pipeline, com vírgulas e quebras de linha escapadas.',
  tool_csv_json_usecases_title: 'Bons usos',
};
export default pt;
