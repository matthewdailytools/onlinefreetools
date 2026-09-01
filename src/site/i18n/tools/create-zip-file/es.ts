/**
 * i18n tool shard (create-zip-file / es).
 * H1 local: «Crear archivo zip»; no calca el inglés.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_create_zip_file_article:
		'Elige varios archivos en esta pestaña, empáquetalos en un ZIP y descárgalo. Los archivos se quedan en tu dispositivo y no se suben a un servidor. Gzip es un modo secundario de un solo archivo.',
	tool_create_zip_file_choose_files: 'Elegir archivos',
	tool_create_zip_file_clear: 'Limpiar',
	tool_create_zip_file_desc:
		'Crea un zip en el navegador con varios archivos o una carpeta con ruta, y descárgalo sin subirlo.',
	tool_create_zip_file_description:
		'Crear archivo zip: elige archivos (se conservan nombres de carpeta si el navegador da una ruta relativa), deja ZIP y descarga. Los archivos se quedan en tu dispositivo y no se suben a un servidor. El ejemplo mete notes.txt, photo.png y docs/readme.md en sample.zip. Gzip es un modo secundario de un solo archivo. El zip con contraseña es un límite de la FAQ, no una promesa de la primera pantalla.',
	tool_create_zip_file_download: 'Descargar ZIP',
	tool_create_zip_file_drop_hint: 'Suelta archivos aquí. Si arrastras una carpeta, se guardan las rutas relativas cuando el navegador las ofrece.',
	tool_create_zip_file_empty: 'Elige al menos un archivo primero.',
	tool_create_zip_file_err_fflate: 'No se pudo cargar el motor ZIP. Revisa la red e inténtalo de nuevo.',
	tool_create_zip_file_err_gzip_many: 'Gzip comprime un solo archivo. Pasa a ZIP para varios, o deja uno solo.',
	tool_create_zip_file_err_too_large: 'Este conjunto es demasiado grande para empaquetar con seguridad en el navegador. Quita archivos y reintenta.',
	tool_create_zip_file_example:
		'Cargar ejemplo mete notes.txt, un photo.png mínimo y docs/readme.md, y arma sample.zip. Descargar ZIP queda listo en la primera pantalla.',
	tool_create_zip_file_example_title: 'Ejemplo',
	tool_create_zip_file_faq_a1:
		'No. Los bytes se leen en esta pestaña. El script del motor ZIP puede cargar desde un CDN, pero tus archivos no se suben a nuestros servidores.',
	tool_create_zip_file_faq_a2:
		'Si el navegador informa webkitRelativePath (carpeta soltada o selector de directorio), esas rutas se guardan como entradas ZIP tras quitar ../. Esa es la tarea de zippear una carpeta en esta página.',
	tool_create_zip_file_faq_a3:
		'Esta página no crea ni descifra ZIP AES como función de primera pantalla. El zip con contraseña queda como límite en la FAQ.',
	tool_create_zip_file_faq_a4:
		'Usa Gzip solo con un archivo cuando necesites un .gz. Varios archivos van en ZIP. Gzip no comprime PDF.',
	tool_create_zip_file_faq_a5:
		'Conjuntos muy grandes pueden agotar la memoria de la pestaña. La página avisa y para. Para extraer, usa la página relacionada de descomprimir ZIP.',
	tool_create_zip_file_faq_q1: '¿Se suben mis archivos?',
	tool_create_zip_file_faq_q2: '¿Puedo comprimir una carpeta en zip?',
	tool_create_zip_file_faq_q3: '¿Crea un zip con contraseña?',
	tool_create_zip_file_faq_q4: '¿Cuándo usar Gzip en lugar de ZIP?',
	tool_create_zip_file_faq_q5: '¿Y archivos enormes? ¿Dónde descomprimo?',
	tool_create_zip_file_file_count_label: 'Archivos',
	tool_create_zip_file_how_body:
		'Elige lo que quieres enviar como un solo archivo, conserva carpetas si el navegador da la ruta, y descarga el ZIP. Gzip es otro modo de un archivo.',
	tool_create_zip_file_how_item_1: 'Elige los archivos que quieres enviar como un zip: esa es la tarea, no un segundo extractor.',
	tool_create_zip_file_how_item_2: 'Suelta una carpeta si el navegador conserva rutas relativas; se quitan los segmentos ../.',
	tool_create_zip_file_how_item_3: 'Deja ZIP (el valor por defecto) y descarga. El ejemplo ya empaqueta tres archivos al abrir.',
	tool_create_zip_file_how_item_4: 'Pasa a Gzip solo con un archivo y si quieres un .gz. Varios archivos siguen en ZIP.',
	tool_create_zip_file_how_title: 'Cómo funciona',
	tool_create_zip_file_level_label: 'Nivel de compresión',
	tool_create_zip_file_load_sample: 'Cargar ejemplo',
	tool_create_zip_file_mode_gzip: 'Gzip (un archivo)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'Tamaño empaquetado',
	tool_create_zip_file_rules_body:
		'Empaquetar en el navegador exige limpiar rutas, separar ZIP de Gzip, un tope de tamaño y un límite claro de contraseña.',
	tool_create_zip_file_rules_item_1:
		'ZIP usa DEFLATE con zipSync de fflate. El nivel 0–9 es opcional; el ejemplo usa un nivel bajo para pintar rápido.',
	tool_create_zip_file_rules_item_2:
		'Los nombres salen del nombre del archivo o de webkitRelativePath. Se quitan barras iniciales y ../.',
	tool_create_zip_file_rules_item_3:
		'Gzip llama a gzipSync con exactamente un archivo. Más de uno debe ir en ZIP.',
	tool_create_zip_file_rules_item_4:
		'El ZIP con contraseña no es la salida de la primera pantalla. Esta página no recupera ni descifra archivos cifrados.',
	tool_create_zip_file_rules_title: 'Reglas que debes esperar',
	tool_create_zip_file_status_done: 'Archivo listo: descárgalo o cambia los archivos.',
	tool_create_zip_file_status_packing: 'Empaquetando…',
	tool_create_zip_file_title: 'Crear archivo zip',
	tool_create_zip_file_usecase_1:
		'Correo: junta varios adjuntos en un zip antes de enviar, sin subirlos a un sitio de empaquetado.',
	tool_create_zip_file_usecase_2:
		'Tarea: zippea una carpeta de apuntes y una captura cuando piden un solo archivo.',
	tool_create_zip_file_usecase_3:
		'Paquete de código pequeño: readme más un par de archivos, luego verifica el zip en Hash de archivo.',
	tool_create_zip_file_usecases_title: 'Buenos encajes',
};

export default es;
