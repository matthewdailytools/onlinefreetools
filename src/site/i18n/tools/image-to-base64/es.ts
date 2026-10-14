/**
 * i18n tool shard (image-to-base64 / es).
 * Imagen a Base64 / Base64 a imagen; pestañas Codificar y Decodificar; HUD de progreso.
 * Solo se editan las claves de esta herramienta; el conjunto de claves sigue a en.ts.
 */
import type { SiteLangDict } from '../../../types';

/** Diccionario de textos en español (neutro, tuteo) para image-to-base64. */
const es: SiteLangDict = {
	tool_image_to_base64_title: 'Imagen a Base64 — codificar y decodificar en local',
	tool_image_to_base64_desc:
		'Convierte imágenes a Base64 o data URL y vuelve de Base64 a imagen; el archivo no sale del dispositivo ni se sube al servidor.',
	tool_image_to_base64_description:
		'Pasa una imagen a Base64 o data URL —o de Base64 a imagen— sin subirla al servidor. Pasos: elige la imagen, pulsa Codificar y luego Copiar o Descargar; o pega el Base64 y pulsa Decodificar. Ejemplo: PNG de muestra → data:image/png;base64,… para tu HTML.',
	tool_image_to_base64_mode_label: 'Modo',
	tool_image_to_base64_tab_encode: 'Codificar',
	tool_image_to_base64_tab_decode: 'Decodificar',
	tool_image_to_base64_choose_file: 'Elegir imagen',
	tool_image_to_base64_drop_hint: 'O arrastra aquí un JPEG, PNG, WebP o GIF. Todo se procesa en esta pestaña.',
	tool_image_to_base64_encode: 'Codificar',
	tool_image_to_base64_decode_btn: 'Decodificar',
	tool_image_to_base64_copy: 'Copiar',
	tool_image_to_base64_copy_done: 'Copiado',
	tool_image_to_base64_download: 'Descargar',
	tool_image_to_base64_sample: 'Cargar ejemplo',
	tool_image_to_base64_clear: 'Borrar',
	tool_image_to_base64_advanced: 'Configuración avanzada (opcional)',
	tool_image_to_base64_strip_prefix: 'Quitar el prefijo data: (solo Base64 puro)',
	tool_image_to_base64_strip_hint:
		'Desactivado (por defecto) conserva data:image/…;base64, para pegarlo tal cual en HTML. Activado copia solo el contenido en Base64.',
	tool_image_to_base64_decode_mime_label: 'MIME por defecto para Base64 sin prefijo',
	tool_image_to_base64_decode_mime_hint:
		'Solo se aplica si lo que pegas no empieza por data:. Las data URL mantienen su propio MIME.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'Pega data:image/…;base64,… o Base64 sin prefijo',
	tool_image_to_base64_output_label: 'Resultado',
	tool_image_to_base64_preview_label: 'Vista previa',
	tool_image_to_base64_progress: 'Procesando…',
	tool_image_to_base64_step_read: 'Leer archivo',
	tool_image_to_base64_step_encode: 'Codificar',
	tool_image_to_base64_step_ready: 'Listo',
	tool_image_to_base64_read_step: 'Leyendo el archivo…',
	tool_image_to_base64_encode_step: 'Generando la data URL…',
	tool_image_to_base64_ready_step: 'Resultado listo',
	tool_image_to_base64_decode_step_parse: 'Analizar',
	tool_image_to_base64_decode_step_blob: 'Crear imagen',
	tool_image_to_base64_decode_step_ready: 'Listo',
	tool_image_to_base64_parse_step: 'Analizando el Base64…',
	tool_image_to_base64_blob_step: 'Reconstruyendo la imagen…',
	tool_image_to_base64_elapsed: '{s} s transcurridos',
	tool_image_to_base64_empty: 'Primero elige una imagen.',
	tool_image_to_base64_empty_decode: 'Primero pega una data URL o una cadena Base64.',
	tool_image_to_base64_err_decode:
		'No se pudo decodificar. Comprueba que la cadena sea una data URL de imagen o un Base64 válido.',
	tool_image_to_base64_err_encode: 'No se pudo codificar el archivo. Prueba con JPEG, PNG o WebP.',
	tool_image_to_base64_err_invalid: 'Base64 o data URL no válidos.',
	tool_image_to_base64_warn_large: 'Entrada grande (más de 25 MB): puede ir lenta o consumir mucha memoria.',
	tool_image_to_base64_status_working: 'Procesando…',
	tool_image_to_base64_status_done: 'Listo: copia la cadena o pulsa Descargar.',
	tool_image_to_base64_status_decoded: 'Listo: ya tienes la vista previa; pulsa Descargar para guardar la imagen.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} caracteres · {bytes}',
	tool_image_to_base64_how_title: 'Cómo convertir una imagen a Base64',
	tool_image_to_base64_how_body:
		'Codificar lee la imagen en el navegador y te la devuelve como data URL; Decodificar hace el camino inverso a partir de una data URL completa o de Base64 sin prefijo (con el MIME por defecto de la configuración avanzada). El archivo no sale del dispositivo ni se sube al servidor.',
	tool_image_to_base64_how_item_1: 'En la pestaña Codificar, elige una imagen (o arrástrala) y pulsa Codificar.',
	tool_image_to_base64_how_item_2:
		'Si una API te pide Base64 puro, abre la configuración avanzada y activa «Quitar el prefijo data:».',
	tool_image_to_base64_how_item_3:
		'Pulsa Copiar para llevar la cadena al portapapeles, o Descargar para guardar la imagen original.',
	tool_image_to_base64_how_item_4:
		'Para pasar de Base64 a imagen, cambia a Decodificar, pega la data URL o el Base64, pulsa Decodificar y descarga la imagen recuperada.',
	tool_image_to_base64_why_choose_title: 'Por qué usar este conversor de imagen a Base64',
	tool_image_to_base64_why_choose_item_1:
		'Codificas y decodificas en la misma página: de imagen a Base64 y de Base64 a imagen sin cambiar de herramienta.',
	tool_image_to_base64_why_choose_item_2:
		'Tras cada operación ves la imagen en la vista previa, no solo una cadena de texto interminable.',
	tool_image_to_base64_why_choose_item_3:
		'Un interruptor quita el prefijo data: cuando el campo de una API solo admite Base64 puro.',
	tool_image_to_base64_why_choose_item_4:
		'Te avisa si la entrada supera unos 25 MB y puede saturar la memoria del navegador.',
	tool_image_to_base64_why_choose_item_5:
		'Todo ocurre en esta pestaña: la imagen no sale del dispositivo ni se sube al servidor.',
	tool_image_to_base64_rules_title: 'Reglas a tener en cuenta',
	tool_image_to_base64_rules_body:
		'Codificar convierte el archivo tal cual en una data URL; Decodificar reconstruye la imagen a partir del texto para que puedas descargarla.',
	tool_image_to_base64_rules_item_1:
		'Por defecto, la salida es una cadena data:image/…;base64,… completa, lista para el src de un <img> en HTML.',
	tool_image_to_base64_rules_item_2:
		'Quitar el prefijo elimina todo lo que va antes de la primera coma; útil para APIs que solo aceptan Base64 puro.',
	tool_image_to_base64_rules_item_3:
		'El Base64 sin prefijo se interpreta con el MIME por defecto de la configuración avanzada (image/png si no lo cambias).',
	tool_image_to_base64_rules_item_4:
		'Si la cadena trae caracteres fuera del alfabeto Base64 o está cortada, verás un error; no se envía nada al servidor.',
	tool_image_to_base64_rules_item_5:
		'Los GIF animados se codifican como archivo completo; esta página no edita fotogramas.',
	tool_image_to_base64_example_title: 'Ejemplo',
	tool_image_to_base64_example:
		'Cargar ejemplo crea un PNG de 320×200 con el rótulo «Base64», lo codifica y deja en el resultado data:image/png;base64,…. Pega esa cadena en un <img src="…"> de tu HTML. Luego cambia a Decodificar, pega la misma cadena, pulsa Decodificar y descarga decoded.png.',
	tool_image_to_base64_usecases_title: 'Para qué sirve',
	tool_image_to_base64_usecase_1:
		'Incrustar un icono o un logotipo pequeño en HTML o CSS sin una petición de imagen aparte.',
	tool_image_to_base64_usecase_2: 'Revisar un correo o un Markdown que ya lleva la imagen como data URL.',
	tool_image_to_base64_usecase_3: 'Recuperar la imagen de vista previa que una API devuelve en Base64.',
	tool_image_to_base64_usecase_4:
		'Entregar el Base64 puro para un campo de formulario que rechaza el prefijo data:.',
	tool_image_to_base64_faq_q1: '¿Se suben mis imágenes a algún servidor?',
	tool_image_to_base64_faq_a1:
		'No. Codificar y Decodificar funcionan dentro de la pestaña del navegador: el archivo no sale del dispositivo ni se sube al servidor.',
	tool_image_to_base64_faq_q2: '¿Qué diferencia hay entre una data URL y el Base64 puro?',
	tool_image_to_base64_faq_a2:
		'La data URL empieza por data:image/png;base64, y sigue con el contenido, así que se pega directamente en HTML. El Base64 puro es solo el contenido; para copiarlo así, activa «Quitar el prefijo data:» en la configuración avanzada.',
	tool_image_to_base64_faq_q3: '¿Puedo convertir imágenes muy pesadas?',
	tool_image_to_base64_faq_a3:
		'Sí, pero consume mucha memoria: el Base64 ocupa alrededor de un 33 % más que el archivo original. Si pasa de unos 25 MB, comprímela o redúcela antes.',
	tool_image_to_base64_faq_q4: '¿Qué tipo MIME se usa al decodificar?',
	tool_image_to_base64_faq_a4:
		'El que indique la data URL, si lo trae. Para Base64 sin prefijo se aplica el «MIME por defecto» de la configuración avanzada (image/png de serie).',
	tool_image_to_base64_faq_q5: '¿Sirve con GIF animados?',
	tool_image_to_base64_faq_a5:
		'Sí: Codificar convierte el archivo entero en data URL y la animación se conserva. Esta página no separa ni edita fotogramas.',
	tool_image_to_base64_faq_q6: '¿En qué se diferencia de un convertidor de formatos de imagen?',
	tool_image_to_base64_faq_a6:
		'Aquí obtienes texto (o recuperas una imagen a partir de texto). Si lo que necesitas es pasar de PNG a JPG o WebP sin Base64, usa el Convertidor de formatos de imagen.',
	tool_image_to_base64_faq_q7: '¿Por qué Copiar está desactivado o no copia nada?',
	tool_image_to_base64_faq_a7:
		'Copiar necesita un resultado de Codificar: elige una imagen, pulsa Codificar y después Copiar. En Decodificar, usa Descargar para guardar el archivo de imagen.',
	tool_image_to_base64_article:
		'Imagen a Base64 en el navegador: Codificar genera una data URL y Decodificar acepta data URL o Base64 sin prefijo con un MIME por defecto configurable.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — URLs de datos',
};

export default es;
