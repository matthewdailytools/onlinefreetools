/**
 * i18n tool shard (yaml-json / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_yaml_json_article:
    'YAML ↔ JSON bidireccional con reglas de tipos explícitas, política multi-documento y notas honestas de proceso local. Para intercambiar configs, no otra URL delgada.',
  tool_yaml_json_clear: 'Limpiar',
  tool_yaml_json_convert: 'Convertir',
  tool_yaml_json_copy_done: 'Copiado',
  tool_yaml_json_copy_json: 'Copiar JSON',
  tool_yaml_json_copy_yaml: 'Copiar YAML',
  tool_yaml_json_description:
    'Conversor YAML a JSON y JSON a YAML en una sola página. Pasos: elige el sentido, pega la config, activa tipos seguros si hace falta, luego copia o descarga. Varios documentos con --- pasan a un array JSON. Ejemplo: convertir un mapa de servicio corto en JSON indentado para un cliente API — lo pegado se queda en el navegador.',
  tool_yaml_json_dir_label: 'Dirección de conversión',
  tool_yaml_json_download_json: 'Descargar JSON',
  tool_yaml_json_download_yaml: 'Descargar YAML',
  tool_yaml_json_empty: 'Pega algo de entrada primero.',
  tool_yaml_json_example:
    'YAML `nombre: demo` con lista `items: [a, b]` → JSON `{"nombre":"demo","items":["a","b"]}`. JSON `{"titulo":"Hola","count":2}` se vuelca a YAML indentado. Límite: `flag: yes` suelto bajo DEFAULT pasa a true; con tipos seguros JSON se queda el string "yes".',
  tool_yaml_json_example_title: 'Ejemplo concreto',
  tool_yaml_json_faq_a1:
    'Los documentos separados por --- se parsean con loadAll. Uno → un valor JSON; dos o más → un array. No descartamos lo que viene después del primero.',
  tool_yaml_json_faq_a2:
    'Sí. Puede haber una petición CDN para bajar js-yaml; eso descarga código, no sube tu YAML ni tu JSON.',
  tool_yaml_json_faq_a3:
    'Con el schema por defecto de js-yaml, a menudo sí. Marca “Tipos seguros JSON” para dejar esos escalares como string salvo tipado explícito.',
  tool_yaml_json_faq_a4:
    'No. Los comentarios no sobreviven al JSON. Las anclas se expanden. Volcar JSON a YAML no restaura comentarios ni nombres de ancla.',
  tool_yaml_json_faq_a5:
    'YAML inválido puede traer mark con línea y columna. JSON inválido lo reporta JSON.parse sin marks al estilo YAML.',
  tool_yaml_json_faq_q1: '¿Qué pasa con varios documentos YAML?',
  tool_yaml_json_faq_q2: '¿La conversión se queda en el navegador?',
  tool_yaml_json_faq_q3: '¿yes o no sueltos se vuelven booleanos?',
  tool_yaml_json_faq_q4: '¿Puedo ir y volver sin perder comentarios?',
  tool_yaml_json_faq_q5: '¿De dónde salen línea y columna en el error?',
  tool_yaml_json_how_body:
    'Pegá YAML o JSON y elegí la pestaña. js-yaml corre en esta pestaña. Varios bloques separados por --- pasan por loadAll: un documento → un valor JSON; dos o más → array. Si el parser YAML marca el error, verás línea y columna.',
  tool_yaml_json_how_item_1: 'Elige YAML → JSON o JSON → YAML.',
  tool_yaml_json_how_item_2: 'Pega la entrada en el cuadro izquierdo (varios documentos YAML pueden usar ---).',
  tool_yaml_json_how_item_3: 'Opcionalmente activa tipos seguros o cambia la indentación JSON.',
  tool_yaml_json_how_item_4: 'Pulsa Convertir, luego copia o descarga la salida.',
  tool_yaml_json_how_title: 'Pasos rápidos',
  tool_yaml_json_indent_2: '2 espacios',
  tool_yaml_json_indent_4: '4 espacios',
  tool_yaml_json_indent_label: 'Indentación',
  tool_yaml_json_indent_minify: 'Minificar JSON',
  tool_yaml_json_json_input_label: 'Entrada JSON',
  tool_yaml_json_json_output_label: 'Salida JSON',
  tool_yaml_json_json_placeholder: '{\n  "titulo": "Hola",\n  "count": 2\n}',
  tool_yaml_json_json_safe: 'Tipos seguros JSON (yes/no sueltos como texto)',
  tool_yaml_json_large_warn: 'Pegado muy grande (>200k caracteres). Puede ir lento; prueba un trozo más corto.',
  tool_yaml_json_need_lib: 'No se pudo cargar js-yaml. Revisa la conexión y recarga.',
  tool_yaml_json_rules_body:
    'Qué esperar al convertir: cómo se tipan los valores sin comillas, cómo el YAML multidocumento se asigna a JSON y dónde una ida y vuelta puede perder comentarios o formato.',
  tool_yaml_json_rules_item_1:
    'Tipos: con el schema DEFAULT, yes/no/on/off sin comillas y algunos escalares con pinta de fecha pueden volverse booleanos u otros tipos. Tipos seguros JSON dejan esos escalares como string salvo tipado explícito.',
  tool_yaml_json_rules_item_2:
    'Multi-doc: loadAll — un documento → ese valor JSON; dos o más → array JSON. No nos quedamos solo con el primero en silencio.',
  tool_yaml_json_rules_item_3:
    'Ida y vuelta: los comentarios desaparecen (JSON no los tiene); anclas/alias se expanden; al volcar JSON a YAML pueden cambiar orden y estilo.',
  tool_yaml_json_rules_item_4:
    'Privacidad: tu pegado no se sube. El CDN, si carga js-yaml, solo trae código de la librería, no tu texto de config.',
  tool_yaml_json_rules_title: 'Reglas que conviene conocer',
  tool_yaml_json_sample: 'Cargar ejemplo',
  tool_yaml_json_sample_json: '{\n  "titulo": "Hola",\n  "count": 2\n}',
  tool_yaml_json_sample_yaml: 'nombre: demo\nactivo: true\nlista:\n  - a\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'YAML a JSON (y al revés) — tipos, multi-doc, local',
  tool_yaml_json_usecase_1: 'Desarrollo: pasar un payload JSON de API a YAML legible antes de editar a mano.',
  tool_yaml_json_usecase_2: 'DevOps: YAML multi-recurso de Kubernetes (separado por ---) → array JSON para scripts.',
  tool_yaml_json_usecase_3: 'Datos / IA: unir parámetros YAML editados a mano con herramientas que solo hablan JSON.',
  tool_yaml_json_usecases_title: 'Para qué sirve',
  tool_yaml_json_yaml_input_label: 'Entrada YAML',
  tool_yaml_json_yaml_output_label: 'Salida YAML',
  tool_yaml_json_yaml_placeholder: 'nombre: demo\nactivo: true\nlista:\n  - a\n  - b',
};
export default es;
