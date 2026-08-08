/**
 * i18n tool shard (file-hash / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_file_hash_algo_label: 'Algoritmos',
  tool_file_hash_article:
    'Calcula resúmenes hex MD5 y SHA de texto pegado o un archivo local. Compara checksums de releases, huellas de configs o verifica descargas — el hash se hace en tu navegador salvo una carga puntual de CDN al elegir MD5.',
  tool_file_hash_clear: 'Limpiar',
  tool_file_hash_copy: 'Copiar todo',
  tool_file_hash_copy_done: 'Copiado',
  tool_file_hash_desc:
    'Hash de texto o archivos en local — resúmenes hex MD5, SHA-1, SHA-256, SHA-384, SHA-512.',
  tool_file_hash_description:
    'Calcula hash de texto pegado o un archivo local en tu navegador. Pasos: elige Texto o Archivo, marca MD5/SHA, pulsa Hash, copia hex en minúsculas. Ejemplo: texto `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. Los archivos se leen en local; MD5 solo carga crypto-js del CDN si lo seleccionas.',
  tool_file_hash_empty: 'Pega texto o elige un archivo primero.',
  tool_file_hash_example:
    'Texto `hello` con SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 del mismo texto → `5d41402abc4b2a76b9719d911017c592`. El texto usa bytes UTF-8; los archivos, bytes crudos.',
  tool_file_hash_example_title: 'Ejemplo',
  tool_file_hash_faq_a1:
    'MD5 es rápido y aún se usa en checksums heredados (listas `md5sum` antiguas, algunos ETag de CDN). Para seguridad (firmas, contraseñas, prueba de manipulación) prefiere SHA-256 o SHA-512. SHA-1 está obsoleto en certificados pero puede aparecer en artefactos viejos.',
  tool_file_hash_faq_a2:
    'Los archivos grandes se leen por bloques con barra de progreso. Por encima de ~100 MB verás aviso pero seguimos intentando. Archivos muy grandes pueden ir lentos o agotar memoria — para archivos multi-GB usa una herramienta de escritorio.',
  tool_file_hash_faq_a3:
    'El texto se hashea como bytes codificados en UTF-8. Un archivo se hashea como flujo de bytes crudos. Las mismas letras en un `.txt` pueden diferir del texto pegado si cambian codificación o finales de línea.',
  tool_file_hash_faq_a4:
    'Sin subida. Texto y archivos permanecen en tu dispositivo. SHA-* usa Web Crypto del navegador. Solo MD5 carga crypto-js de jsDelivr — tu contenido no se envía al CDN.',
  tool_file_hash_faq_a5:
    'Mostramos hex en minúsculas sin prefijo `0x`, una línea por algoritmo. Coincide con `md5sum` / `sha256sum` habituales en Linux y macOS.',
  tool_file_hash_faq_q1: '¿Cuándo usar MD5 y cuándo SHA-256?',
  tool_file_hash_faq_q2: '¿Cómo se tratan archivos grandes?',
  tool_file_hash_faq_q3: '¿El texto pegado hashea igual que un archivo?',
  tool_file_hash_faq_q4: '¿Se sube mi archivo o texto?',
  tool_file_hash_faq_q5: '¿Qué formato hex devuelven?',
  tool_file_hash_file_bytes: 'bytes',
  tool_file_hash_file_label: 'Elegir archivo',
  tool_file_hash_hash: 'Hash',
  tool_file_hash_how_body:
    'Elige Texto para hashear un pegado (bytes UTF-8) o Archivo para un archivo local (bytes crudos). Marca uno o más algoritmos y pulsa Hash. SHA usa Web Crypto; MD5 carga una librería pequeña al primer uso. Resultados en hex minúsculas, una fila por algoritmo.',
  tool_file_hash_how_title: 'Cómo funciona',
  tool_file_hash_input_mode_label: 'Modo de entrada',
  tool_file_hash_large_warn:
    'El archivo supera 100 MB. El hash puede ir lento o usar mucha memoria — considera una herramienta de escritorio para archivos muy grandes.',
  tool_file_hash_md5_fail: 'No se pudo cargar la librería MD5 del CDN. Prueba SHA-256 o revisa tu red.',
  tool_file_hash_no_algo: 'Selecciona al menos un algoritmo.',
  tool_file_hash_output_label: 'Resúmenes hex',
  tool_file_hash_progress_label: 'Leyendo archivo…',
  tool_file_hash_rules_body:
    'Elección de algoritmo, semántica de bytes y formato de salida — qué esperar antes de comparar un digest en otro sitio.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex (128 bits). SHA-1 → 40 hex. SHA-256 → 64 hex. SHA-384 → 96 hex. SHA-512 → 128 hex. Todo en minúsculas, sin prefijo.',
  tool_file_hash_rules_item_2:
    'Modo texto: UTF-8 con `TextEncoder`. Modo archivo: flujo completo de bytes. Un BOM UTF-8 o CRLF en archivo cambia el digest respecto al pegado plano.',
  tool_file_hash_rules_item_3:
    'Texto vacío o archivo de cero bytes produce el digest estándar de entrada vacía para cada algoritmo (hex válido).',
  tool_file_hash_rules_item_4:
    'Privacidad: sin subida. MD5 es la única vía que descarga crypto-js del CDN; SHA-* usa solo Web Crypto integrado.',
  tool_file_hash_rules_title: 'Reglas que debes esperar',
  tool_file_hash_sample: 'Cargar ejemplo',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'Archivo',
  tool_file_hash_tab_text: 'Texto',
  tool_file_hash_text_label: 'Entrada de texto',
  tool_file_hash_text_placeholder: 'Pega texto para hashear como UTF-8…',
  tool_file_hash_title: 'Comprobador de hash — verificar resúmenes en el navegador',
  tool_file_hash_usecase_1:
    'Release: compara el SHA-256 de un instalador con el valor publicado en la página de descarga.',
  tool_file_hash_usecase_2:
    'Config: huella digital de un JSON o fragmento `.env` antes y después de un despliegue.',
  tool_file_hash_usecase_3:
    'QA heredado: verifica que un manifiesto MD5 antiguo siga coincidiendo con el artefacto reconstruido.',
  tool_file_hash_usecases_title: 'Buenos casos de uso',
};
export default es;
