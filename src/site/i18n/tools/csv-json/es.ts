/**
 * i18n tool shard (csv-json / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_csv_json_article:
    'CSV ↔ JSON bidireccional con reglas claras de tipos, separador y comillas, y cómo el JSON anidado se aplana en columnas. Pensado para el intercambio hoja de cálculo ↔ API, no para otra URL vacía.',
  tool_csv_json_clear: 'Limpiar',
  tool_csv_json_convert: 'Convertir',
  tool_csv_json_copy_csv: 'Copiar CSV',
  tool_csv_json_copy_done: 'Copiado',
  tool_csv_json_copy_json: 'Copiar JSON',
  tool_csv_json_csv_input_label: 'Entrada CSV',
  tool_csv_json_csv_output_label: 'Salida CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'Detección automática',
  tool_csv_json_delimiter_comma: 'Coma ,',
  tool_csv_json_delimiter_label: 'Separador',
  tool_csv_json_delimiter_semicolon: 'Punto y coma ;',
  tool_csv_json_delimiter_tab: 'Tabulador',
  tool_csv_json_description:
    'Convierte CSV a JSON o JSON a CSV en tu navegador. Pasos: elige la dirección, pega o sube, define el separador y la cabecera, y copia o descarga. Maneja campos entre comillas con comas, punto y coma y tabuladores; de JSON a CSV, los objetos anidados se aplanan en columnas. Ejemplo: convierte una hoja de productos (sku, título, precio) en un arreglo JSON — los datos se quedan en local.',
  tool_csv_json_dir_label: 'Dirección de conversión',
  tool_csv_json_download_csv: 'Descargar CSV',
  tool_csv_json_download_json: 'Descargar JSON',
  tool_csv_json_empty: 'Pega algo de contenido primero.',
  tool_csv_json_example:
    'El CSV `sku,title,price` con la fila `A-001,"Chair, oak",129.9` se vuelve JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (sin tipos, price queda como texto; actívalos para el número 129.9). Al revés: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` genera la cabecera `sku,dim.w,dim.h` con la fila `A-001,40,90`.',
  tool_csv_json_example_title: 'Ejemplo',
  tool_csv_json_faq_a1:
    'Por defecto cada celda se mantiene como texto, así 007 y los identificadores largos se conservan. Si activas «Inferir tipos», los valores numéricos se vuelven números: 007 pasa a 7 y los dígitos muy largos pueden perder precisión. Déjalo desactivado para SKU, códigos postales y teléfonos.',
  tool_csv_json_faq_a2:
    'Sí. Elige coma, punto y coma o tabulador, o deja la detección automática y Papa Parse lo adivina. El punto y coma es habitual en exportaciones de Excel europeas; el tabulador es TSV.',
  tool_csv_json_faq_a3:
    'Se encierran entre comillas dobles y las comillas internas se duplican, según RFC 4180. Así un título como Chair, oak queda en un campo en vez de dividirse en dos columnas.',
  tool_csv_json_faq_a4:
    'Los objetos se aplanan a columnas con ruta por puntos (dim.w, dim.h). Los arreglos se escriben como cadena JSON en una sola celda. Las columnas son la unión de las claves de todos los registros y lo que falta queda vacío.',
  tool_csv_json_faq_a5:
    'No. El análisis se queda en esta pestaña y los archivos que eliges se leen localmente. Este sitio puede servir Papa Parse; esa petición solo descarga código, no sube tu CSV ni tu JSON.',
  tool_csv_json_faq_q1: '¿Se conservan mis números, ceros a la izquierda e identificadores?',
  tool_csv_json_faq_q2: '¿Admite punto y coma o tabuladores, no solo comas?',
  tool_csv_json_faq_q3: '¿Cómo se tratan los campos con comas, comillas o saltos de línea?',
  tool_csv_json_faq_q4: '¿Cómo se vuelve columnas el JSON anidado?',
  tool_csv_json_faq_q5: '¿Mis datos salen del navegador?',
  tool_csv_json_header: 'La primera fila es cabecera',
  tool_csv_json_how_body:
    'Elige CSV → JSON o JSON → CSV; el análisis y la generación se hacen aquí con Papa Parse. En CSV eliges separador (o detección automática), si la primera fila es cabecera y si se infieren números/booleanos. En JSON, los objetos anidados se aplanan a columnas con ruta por puntos y las columnas son la unión de todas las claves.',
  tool_csv_json_how_item_1: 'Elige CSV → JSON o JSON → CSV.',
  tool_csv_json_how_item_2: 'Pega la entrada y configura delimitador / cabecera para CSV.',
  tool_csv_json_how_item_3: 'Pulsa Convertir (JSON anidado se aplana a columnas al exportar CSV).',
  tool_csv_json_how_item_4: 'Copia o descarga el resultado.',
  tool_csv_json_how_title: 'Cómo funciona',
  tool_csv_json_indent_2: '2 espacios',
  tool_csv_json_indent_4: '4 espacios',
  tool_csv_json_indent_label: 'Sangría',
  tool_csv_json_indent_minify: 'Minificar JSON',
  tool_csv_json_json_input_label: 'Entrada JSON',
  tool_csv_json_json_output_label: 'Salida JSON',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_large_warn:
    'Entrada muy grande (más de 2 millones de caracteres). La conversión puede ir lenta; prueba con un archivo más pequeño.',
  tool_csv_json_need_lib: 'No se pudo cargar Papa Parse. Revisa tu conexión y recarga.',
  tool_csv_json_rules_body:
    'Qué esperar al convertir: cómo se tratan los tipos de celda, qué separadores y comillas se aplican y cómo el JSON anidado se asigna a columnas.',
  tool_csv_json_rules_item_1:
    'Tipos: las celdas CSV son texto por defecto. Activa «Inferir tipos» para números/booleanos, pero 007 se vuelve 7 y los números largos pueden perder precisión; déjalo desactivado para SKU, códigos postales y teléfonos.',
  tool_csv_json_rules_item_2:
    'Separadores: coma, punto y coma (habitual en Excel europeo) y tabulador (TSV); la detección automática lo adivina del texto. Los campos con el separador, comillas o saltos de línea se encierran entre comillas dobles según RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: los objetos se aplanan con rutas por puntos (dim.w, dim.h); los arreglos se escriben como cadena JSON en una celda; las columnas son la unión de todas las claves y lo que falta queda vacío.',
  tool_csv_json_rules_item_4:
    'Privacidad: tu texto y archivos no se suben. Traer Papa Parse desde este sitio solo descarga el código de la librería, no tus datos.',
  tool_csv_json_rules_title: 'Reglas que debes esperar',
  tool_csv_json_sample: 'Cargar ejemplo',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'Conversor CSV ↔ JSON — tipos, separador y local',
  tool_csv_json_typing: 'Inferir tipos (números/booleanos)',
  tool_csv_json_usecase_1:
    'E-commerce: convierte una hoja de productos exportada (sku, título, precio) en un arreglo JSON para la API de una tienda o marketplace.',
  tool_csv_json_usecase_2: 'Desarrolladores: reforma una respuesta JSON en CSV para hojas de cálculo, conciliación o entrega.',
  tool_csv_json_usecase_3:
    'Datos/operaciones: pasa un CSV de reportes o eventos (coma, punto y coma o TSV) a JSON para un pipeline, con comas y saltos de línea bien escapados.',
  tool_csv_json_usecases_title: 'Buenos usos',
};
export default es;
