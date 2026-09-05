/**
 * i18n（json-diff-checker-online / es）。
 * H1: Comprobador de diferencias JSON online.
 * 默认忽略键序；不解析 YAML/XML。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'Pega dos valores JSON y lista añadidos, eliminados y cambios por ruta. Por defecto se ignora el orden de las claves. El pegado se queda en el dispositivo y no se sube. Aquí no se parsea YAML ni XML.',
	tool_json_diff_checker_online_array_as_set: "Ignorar el orden del array (los duplicados cuentan)",
	tool_json_diff_checker_online_clear: 'Borrar',
	tool_json_diff_checker_online_compare: 'Comparar',
	tool_json_diff_checker_online_desc:
		'Comprobador de diferencias JSON online: compara dos JSON por ruta, ignora el orden de claves por defecto; el pegado no sale del dispositivo.',
	tool_json_diff_checker_online_description:
		'Comprobador de diferencias JSON online en el navegador. Proceso: pega dos JSON, analízalos e ignora el orden de claves del objeto (activado por defecto), luego lista añadidos, eliminados y cambios por ruta. El pegado se queda en el dispositivo y no se sube al servidor. Ejemplo: {"b":1,"a":2} frente a {"a":2,"b":1} coinciden; al cambiar price se informa /price. No es un comprobador de YAML ni de XML.',
	tool_json_diff_checker_online_empty: 'Pega JSON a ambos lados, o carga el ejemplo.',
	tool_json_diff_checker_online_err_bad_a: 'La izquierda no es JSON válido.',
	tool_json_diff_checker_online_err_bad_b: 'La derecha no es JSON válido.',
	tool_json_diff_checker_online_example:
		'El ejemplo izquierdo pone sku y luego price; el derecho pone price primero y cambia 9.5 por 10. Con ignorar orden de claves, solo se informa /price. Al abrir ya ves esa ruta.',
	tool_json_diff_checker_online_example_title: 'Ejemplo',
	tool_json_diff_checker_online_faq_a1:
		'No. El texto se parsea en esta pestaña con JSON.parse. Nada se sube a nuestros servidores.',
	tool_json_diff_checker_online_faq_a2:
		'Por defecto, {"a":1,"b":2} y {"b":2,"a":1} son el mismo objeto. Desactiva “Ignorar orden de claves” si te importa el orden escrito.',
	tool_json_diff_checker_online_faq_a3:
		"Por defecto los arrays se comparan por índice. Al ignorar el orden se ordenan los elementos normalizados, los duplicados siguen contando y los índices del resultado pertenecen a ese orden; no se emparejan objetos por id.",
	tool_json_diff_checker_online_faq_a4:
		"Solo se analiza JSON válido. No acepta sintaxis YAML ni XML; convierte YAML a JSON primero o usa un comparador específico del formato.",
	tool_json_diff_checker_online_faq_q1: '¿Se sube mi JSON?',
	tool_json_diff_checker_online_faq_q2: '¿El orden de las claves cuenta como diferencia?',
	tool_json_diff_checker_online_faq_q3: '¿Cómo se comparan los arrays?',
	tool_json_diff_checker_online_faq_q4: '¿Es lo mismo que un JSON Diff Checker, o un diff de YAML/XML?',
	tool_json_diff_checker_online_how_body:
		'Pega dos JSON y lee cambios por ruta. El orden de claves se ignora salvo que lo desactives.',
	tool_json_diff_checker_online_how_item_1: 'Pega el JSON original a la izquierda.',
	tool_json_diff_checker_online_how_item_2: 'Pega el JSON revisado a la derecha.',
	tool_json_diff_checker_online_how_item_3: 'Deja Ignorar orden de claves activo, salvo que quieras el orden escrito.',
	tool_json_diff_checker_online_how_item_4: "Pulsa Comparar para listar las rutas añadidas, eliminadas y modificadas con las opciones actuales.",
	tool_json_diff_checker_online_how_title: 'Cómo usarlo',
	tool_json_diff_checker_online_ignore_keys: 'Ignorar orden de claves del objeto',
	tool_json_diff_checker_online_label_a: 'JSON original',
	tool_json_diff_checker_online_label_b: 'JSON revisado',
	tool_json_diff_checker_online_load_sample: 'Cargar ejemplo',
	tool_json_diff_checker_online_no_diff: 'No hay diferencias semánticas con las opciones actuales.',
	tool_json_diff_checker_online_op_added: 'añadido',
	tool_json_diff_checker_online_op_changed: 'cambiado',
	tool_json_diff_checker_online_op_removed: 'eliminado',
	tool_json_diff_checker_online_result_label: 'Diferencias por ruta',
	tool_json_diff_checker_online_rules_body:
		'Tras JSON.parse, se pueden ordenar las claves para que el orden escrito no finja un cambio.',
	tool_json_diff_checker_online_rules_item_1:
		'El JSON inválido se avisa por lado. Claves duplicadas siguen JSON.parse (en motores que lo permiten, gana la última).',
	tool_json_diff_checker_online_rules_item_2:
		'Ignorar orden de claves (activado por defecto) ordena las claves antes de recorrer rutas.',
	tool_json_diff_checker_online_rules_item_3:
		"Ignorar el orden ordena los elementos normalizados pero conserva duplicados; los índices corresponden al orden comparado, no a la posición original.",
	tool_json_diff_checker_online_rules_item_4:
		'YAML y XML no se parsean. Si hace falta, convierte YAML en la página YAML ↔ JSON relacionada.',
	tool_json_diff_checker_online_rules_title: 'Reglas de la comparación',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '{added} añadidos, {removed} eliminados, {changed} cambiados',
	tool_json_diff_checker_online_title: 'Comprobador de diferencias JSON online',
	tool_json_diff_checker_online_usecase_1:
		'Muestras de API: dos cuerpos donde el pretty-print reordena claves y no debería contar.',
	tool_json_diff_checker_online_usecase_2: 'Instantáneas de config: ver qué rutas cambiaron de verdad entre despliegues.',
	tool_json_diff_checker_online_usecase_3: 'JSON de modelo: contrastar la salida estructurada antes de enviarla.',
	tool_json_diff_checker_online_usecases_title: 'Cuándo encaja',
};

export default es;
