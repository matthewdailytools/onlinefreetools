/**
 * i18n tool shard (base64 / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_base64_article:
    'Codifica y decodifica texto UTF-8 o bytes en Base64 y Base64url en una sola página. Pensado para APIs, JWT y cadenas de configuración — distinto del conversor solo de imágenes.',
  tool_base64_clear: 'Limpiar',
  tool_base64_convert: 'Convertir',
  tool_base64_copy: 'Copiar salida',
  tool_base64_copy_done: 'Copiado',
  tool_base64_desc: 'Base64 para texto UTF-8 y archivos, con Base64url — todo en el navegador.',
  tool_base64_description:
    'Codifica o decodifica Base64 y Base64url para texto UTF-8 o bytes de archivo en el navegador. Pasos: elige Codificar o Decodificar, pega texto o elige archivo, activa Base64url si hace falta y copia. Ejemplo: Hello 世界 → SGVsbG8g5LiW55WM. Unicode vía UTF-8; nada se sube.',
  tool_base64_dir_label: 'Modo',
  tool_base64_empty: 'Pega algo primero.',
  tool_base64_error_invalid: 'Caracteres Base64 o padding inválidos.',
  tool_base64_example:
    'Codificar: Hello 世界 → SGVsbG8g5LiW55WM. Base64url: mismos bytes sin +/=. Decodificar devuelve Hello 世界.',
  tool_base64_example_title: 'Ejemplo',
  tool_base64_faq_a1:
    'Base64 estándar usa A–Z, a–z, 0–9, +, / y =. Base64url cambia + por - y / por _ y suele quitar el padding — típico en JWT.',
  tool_base64_faq_a2:
    'Sí. El texto se convierte a bytes UTF-8 antes del Base64. Al decodificar recuperas Unicode. Mojibake suele indicar entrada inválida u otro charset.',
  tool_base64_faq_a3:
    'Esta página trata texto/bytes generales y Base64url. Imagen ↔ Base64 se centra en fotos: vista previa, MIME y descarga.',
  tool_base64_faq_a4: 'No. Todo ocurre en el navegador con TextEncoder y btoa/atob; sin subida.',
  tool_base64_faq_a5:
    'Al decodificar se ignora el espacio en blanco. Caracteres inválidos o padding incorrecto dan error. Pegados enormes (>1M) pueden ir lentos.',
  tool_base64_faq_q1: '¿Qué diferencia hay entre Base64 y Base64url?',
  tool_base64_faq_q2: '¿Soporta Unicode / UTF-8?',
  tool_base64_faq_q3: '¿En qué se diferencia de Imagen ↔ Base64?',
  tool_base64_faq_q4: '¿Se sube mi texto o archivo?',
  tool_base64_faq_q5: '¿Qué pasa con Base64 inválido?',
  tool_base64_file_label: 'O codificar un archivo',
  tool_base64_file_large_warn: 'Archivo grande (>5 MB). Puede tardar un momento.',
  tool_base64_file_loaded: 'Archivo codificado: {name} ({size} bytes).',
  tool_base64_how_body:
    'Codificar convierte UTF-8 o bytes de archivo a Base64; Decodificar hace lo contrario. Unicode pasa por UTF-8. Base64url usa - y _ en lugar de + y /.',
  tool_base64_how_item_1: 'Elige Codificar o Decodificar.',
  tool_base64_how_item_2: 'Para codificar, pega texto o elige un archivo; para decodificar, pega Base64.',
  tool_base64_how_item_3: 'Activa Base64url si necesitas - y _ al estilo JWT, sin padding.',
  tool_base64_how_item_4: 'Pulsa Convertir, luego copia o descarga el resultado.',
  tool_base64_how_title: 'Cómo funciona',
  tool_base64_input_label: 'Entrada',
  tool_base64_input_placeholder: 'Pega texto o cadena Base64…',
  tool_base64_large_warn: 'Pegado muy grande (>1M caracteres). Prueba un fragmento más corto.',
  tool_base64_output_label: 'Salida',
  tool_base64_rules_body: 'Qué esperar: alfabetos, UTF-8, padding y archivo vs texto.',
  tool_base64_rules_item_1: 'Alfabeto estándar A–Z, a–z, 0–9, +, /. Base64url: +→-, /→_, sin =.',
  tool_base64_rules_item_2: 'Texto siempre UTF-8 antes de Base64. Un carácter Unicode puede ocupar varios símbolos Base64.',
  tool_base64_rules_item_3: 'Archivo = bytes crudos. El modo archivo limpia el área de texto y muestra un aviso.',
  tool_base64_rules_item_4: 'Privacidad: sin servidor. Sin librerías externas; RFC 4648 en el navegador.',
  tool_base64_rules_title: 'Reglas que verás',
  tool_base64_sample: 'Cargar ejemplo',
  tool_base64_sample_decode: 'SGVsbG8g5LiW55WM',
  tool_base64_sample_encode: 'Hello 世界',
  tool_base64_tab_decode: 'Decodificar',
  tool_base64_tab_encode: 'Codificar',
  tool_base64_title: 'Codificar y decodificar Base64 — convertir texto en el navegador',
  tool_base64_url_label: 'Base64url (-_ en lugar de +/, sin padding)',
  tool_base64_usecase_1: 'Desarrolladores: codificar JSON o UTF-8 para APIs o fixtures.',
  tool_base64_usecase_2: 'JWT: generar o revisar segmentos Base64url antes del decodificador JWT.',
  tool_base64_usecase_3: 'Config: incrustar blobs pequeños en YAML o variables CI.',
  tool_base64_usecases_title: 'Cuándo usarlo',
};
export default es;
