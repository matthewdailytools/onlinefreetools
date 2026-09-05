/**
 * i18n（json-diff-checker-online / pt）。
 * H1: Verificador de diff JSON online.
 * Ordem das chaves ignorada por padrão; não é YAML/XML.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'Cole dois valores JSON e liste acréscimos, remoções e mudanças por caminho. A ordem das chaves é ignorada por padrão. O texto cola fica no dispositivo e não é enviado. YAML e XML não são analisados aqui.',
	tool_json_diff_checker_online_array_as_set: "Ignorar ordem do array (repetidos contam)",
	tool_json_diff_checker_online_clear: 'Limpar',
	tool_json_diff_checker_online_compare: 'Comparar',
	tool_json_diff_checker_online_desc:
		'Verificador de diff JSON online: compare dois JSON por caminho, ignore a ordem das chaves por padrão — o texto fica no dispositivo.',
	tool_json_diff_checker_online_description:
		'Verificador de diff JSON online no navegador. Processo: cole dois JSON, analise-os, ignore a ordem das chaves do objeto (ligado por padrão) e liste acréscimos, remoções e mudanças por caminho. O texto fica no dispositivo e não é enviado ao servidor. Exemplo: {"b":1,"a":2} e {"a":2,"b":1} coincidem; mudar price aponta /price. Não é verificador de YAML nem de XML.',
	tool_json_diff_checker_online_empty: 'Cole JSON dos dois lados, ou carregue o exemplo.',
	tool_json_diff_checker_online_err_bad_a: 'O lado esquerdo não é JSON válido.',
	tool_json_diff_checker_online_err_bad_b: 'O lado direito não é JSON válido.',
	tool_json_diff_checker_online_example:
		'O exemplo da esquerda lista sku e depois price; o da direita coloca price na frente e troca 9.5 por 10. Com ignorar ordem das chaves, só /price é reportado. Na primeira pintura esse caminho já aparece.',
	tool_json_diff_checker_online_example_title: 'Exemplo',
	tool_json_diff_checker_online_faq_a1:
		'Não. O texto é analisado nesta aba com JSON.parse. Nada é enviado aos nossos servidores.',
	tool_json_diff_checker_online_faq_a2:
		'Por padrão, {"a":1,"b":2} e {"b":2,"a":1} são o mesmo objeto. Desligue “Ignorar ordem das chaves” se a ordem escrita importar.',
	tool_json_diff_checker_online_faq_a3:
		"Por padrão, arrays são comparados pelo índice. Ao ignorar a ordem, os itens normalizados são ordenados, repetições continuam contando e os índices do resultado seguem essa ordem; objetos não são pareados por id.",
	tool_json_diff_checker_online_faq_a4:
		"Só JSON válido é analisado. Sintaxe YAML ou XML não é aceita; converta YAML para JSON antes ou use um comparador específico do formato.",
	tool_json_diff_checker_online_faq_q1: 'Meu JSON é enviado?',
	tool_json_diff_checker_online_faq_q2: 'A ordem das chaves conta como diferença?',
	tool_json_diff_checker_online_faq_q3: 'Como os arrays são comparados?',
	tool_json_diff_checker_online_faq_q4: 'É o mesmo JSON Diff Checker, ou um diff de YAML/XML?',
	tool_json_diff_checker_online_how_body:
		'Cole dois JSON e leia as mudanças por caminho. A ordem das chaves é ignorada até você desligar isso.',
	tool_json_diff_checker_online_how_item_1: 'Colar o JSON original à esquerda.',
	tool_json_diff_checker_online_how_item_2: 'Colar o JSON revisado à direita.',
	tool_json_diff_checker_online_how_item_3: 'Deixar Ignorar ordem das chaves ligado, salvo se a ordem escrita for necessária.',
	tool_json_diff_checker_online_how_item_4: "Clique em Comparar para listar caminhos adicionados, removidos e alterados com as opções atuais.",
	tool_json_diff_checker_online_how_title: 'Como usar',
	tool_json_diff_checker_online_ignore_keys: 'Ignorar ordem das chaves do objeto',
	tool_json_diff_checker_online_label_a: 'JSON original',
	tool_json_diff_checker_online_label_b: 'JSON revisado',
	tool_json_diff_checker_online_load_sample: 'Carregar exemplo',
	tool_json_diff_checker_online_no_diff: 'Sem diferenças semânticas nas opções atuais.',
	tool_json_diff_checker_online_op_added: 'acrescentado',
	tool_json_diff_checker_online_op_changed: 'alterado',
	tool_json_diff_checker_online_op_removed: 'removido',
	tool_json_diff_checker_online_result_label: 'Diferenças por caminho',
	tool_json_diff_checker_online_rules_body:
		'Depois de JSON.parse, dá para ordenar as chaves para a ordem escrita não fingir mudança.',
	tool_json_diff_checker_online_rules_item_1:
		'JSON inválido é avisado por lado. Chaves duplicadas seguem JSON.parse (a última vence nos motores que permitem).',
	tool_json_diff_checker_online_rules_item_2:
		'Ignorar ordem das chaves (ligado por padrão) ordena as chaves do objeto antes de percorrer caminhos.',
	tool_json_diff_checker_online_rules_item_3:
		"Ignorar a ordem classifica itens normalizados, mas mantém repetições; os índices passam a indicar a ordem comparada, não a posição original.",
	tool_json_diff_checker_online_rules_item_4:
		'YAML e XML não são analisados. Se precisar, converta YAML na página YAML ↔ JSON relacionada.',
	tool_json_diff_checker_online_rules_title: 'O que esperar',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '{added} acrescentados, {removed} removidos, {changed} alterados',
	tool_json_diff_checker_online_title: 'Verificador de diff JSON online',
	tool_json_diff_checker_online_usecase_1:
		'Amostras de API: dois corpos em que o pretty-print embaralha a ordem das chaves.',
	tool_json_diff_checker_online_usecase_2: 'Snapshots de config: quais caminhos realmente mudaram entre deploys.',
	tool_json_diff_checker_online_usecase_3: 'JSON de modelo: conferir a saída estruturada antes de mandar adiante.',
	tool_json_diff_checker_online_usecases_title: 'Quando encaixa',
};

export default pt;
