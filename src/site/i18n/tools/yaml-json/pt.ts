/**
 * i18n tool shard (yaml-json / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_yaml_json_article:
    'YAML ↔ JSON nos dois sentidos, com regras de tipo claras, política multi-documento e notas honestas de processamento local. Feito para trocar configs, não para outra URL rasa.',
  tool_yaml_json_clear: 'Limpar',
  tool_yaml_json_convert: 'Converter',
  tool_yaml_json_copy_done: 'Copiado',
  tool_yaml_json_copy_json: 'Copiar JSON',
  tool_yaml_json_copy_yaml: 'Copiar YAML',
  tool_yaml_json_description:
    'Converter YAML para JSON e JSON para YAML na mesma página. Passos: escolha o sentido, cole a config, ative tipos seguros se precisar, depois copie ou baixe. Vários documentos com --- viram um array JSON. Exemplo: transformar um mapa de serviço curto em JSON indentado para um cliente de API — a colagem fica no navegador.',
  tool_yaml_json_dir_label: 'Direção da conversão',
  tool_yaml_json_download_json: 'Baixar JSON',
  tool_yaml_json_download_yaml: 'Baixar YAML',
  tool_yaml_json_empty: 'Cole alguma entrada primeiro.',
  tool_yaml_json_example:
    'YAML `nome: demo` com lista `itens: [a, b]` → JSON `{"nome":"demo","itens":["a","b"]}`. JSON `{"titulo":"Olá","count":2}` vira YAML indentado. Limite: `flag: yes` solto no DEFAULT vira true; com tipos seguros JSON permanece a string "yes".',
  tool_yaml_json_example_title: 'Exemplo',
  tool_yaml_json_faq_a1:
    'Não. Comentários não sobrevivem ao JSON. Âncoras expandem. Dump de JSON para YAML não devolve comentários nem nomes de âncora.',
  tool_yaml_json_faq_a2:
    'No schema padrão do js-yaml, muitas vezes sim. Marque “Tipos seguros JSON” para manter esses escalares como string, salvo tipagem explícita.',
  tool_yaml_json_faq_a3:
    'Documentos separados por --- usam loadAll. Um → um valor JSON; dois ou mais → array. Não ficamos só com o primeiro.',
  tool_yaml_json_faq_a4: 'A conversão fica na aba. Um CDN pode servir js-yaml; isso baixa código, não envia seu YAML/JSON.',
  tool_yaml_json_faq_a5:
    'YAML inválido pode trazer mark com linha e coluna. JSON inválido vem de JSON.parse, sem marks estilo YAML.',
  tool_yaml_json_faq_q1: 'Dá para ir e voltar sem perder nada?',
  tool_yaml_json_faq_q2: 'yes/no sem aspas vira boolean?',
  tool_yaml_json_faq_q3: 'Como tratam YAML com vários documentos (---)?',
  tool_yaml_json_faq_q4: 'O texto colado sai do navegador?',
  tool_yaml_json_faq_q5: 'De onde vêm linha e coluna no erro?',
  tool_yaml_json_how_body:
    'Na mesma página: escolha YAML → JSON ou o inverso. A conversão usa js-yaml nesta aba. Blocos separados por --- passam por loadAll — um documento vira um valor JSON; dois ou mais, um array. Erros de YAML podem trazer linha e coluna quando o parser marca o ponto.',
  tool_yaml_json_how_title: 'Fluxo',
  tool_yaml_json_indent_2: '2 espaços',
  tool_yaml_json_indent_4: '4 espaços',
  tool_yaml_json_indent_label: 'Indentação',
  tool_yaml_json_indent_minify: 'Minificar JSON',
  tool_yaml_json_json_input_label: 'Entrada JSON',
  tool_yaml_json_json_output_label: 'Saída JSON',
  tool_yaml_json_json_placeholder: '{\n  "titulo": "Olá",\n  "count": 2\n}',
  tool_yaml_json_json_safe: 'Tipos seguros JSON (yes/no soltos como texto)',
  tool_yaml_json_large_warn: 'Colagem muito grande (>200k caracteres). Pode ficar lento — tente um trecho menor.',
  tool_yaml_json_need_lib: 'Não foi possível carregar js-yaml. Verifique a conexão e atualize.',
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
  tool_yaml_json_rules_title: 'O que esperar',
  tool_yaml_json_sample: 'Carregar exemplo',
  tool_yaml_json_sample_json: '{\n  "titulo": "Olá",\n  "count": 2\n}',
  tool_yaml_json_sample_yaml: 'nome: demo\nativo: true\nitens:\n  - a\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'De YAML para JSON — e JSON de volta a YAML',
  tool_yaml_json_usecase_1: 'Pipelines de dados / IA: ligar parâmetros YAML editados à mão a ferramentas só-JSON.',
  tool_yaml_json_usecase_2: 'DevOps: YAML multi-recurso Kubernetes (---) → array JSON para scripts.',
  tool_yaml_json_usecase_3: 'Dev: reformatar payload JSON de API em YAML legível antes de editar config.',
  tool_yaml_json_usecases_title: 'Quando ajuda',
  tool_yaml_json_yaml_input_label: 'Entrada YAML',
  tool_yaml_json_yaml_output_label: 'Saída YAML',
  tool_yaml_json_yaml_placeholder: 'nome: demo\nativo: true\nitens:\n  - a\n  - b',
};
export default pt;
