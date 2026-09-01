/**
 * i18n tool shard (file-metadata-analyzer / es).
 */
import type { SiteLangDict } from '../../../types';

/** 西班牙语文案键表。 */
const es: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'Analizando…',
	tool_file_metadata_analyzer_article:
		'Arrastra o elige un archivo local para ver nombre, tamaño, tipo MIME y fecha de modificación. Las imágenes muestran ancho×alto; audio y vídeo muestran duración si el navegador puede decodificarlos. Pistas magic-byte para contenedores comunes. No se sube al servidor; no sale del dispositivo.',
	tool_file_metadata_analyzer_choose_file: 'Elegir archivo',
	tool_file_metadata_analyzer_clear: 'Limpiar',
	tool_file_metadata_analyzer_decode_fail: 'No se pudieron decodificar campos extra; la info básica sigue visible.',
	tool_file_metadata_analyzer_desc:
		'Inspecciona metadatos locales — tamaño, tipo, dimensiones, duración. Sin subir al servidor; en el dispositivo.',
	tool_file_metadata_analyzer_description:
		'Analizador de metadatos: suelta o elige un archivo para leer nombre, bytes, MIME y modificación. Imágenes → dimensiones; audio/vídeo → duración si es decodificable. Pistas magic-byte: PNG, JPEG, GIF, WebP, PDF, ZIP, MP4. Ejemplo: PNG 16×16 al cargar. Para EXIF profundo, usa la herramienta EXIF relacionada. Sin subir al servidor; no sale del dispositivo.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'O suelta un archivo aquí. El análisis queda en esta pestaña.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'Elige o suelta un archivo primero.',
	tool_file_metadata_analyzer_example:
		'Cargar ejemplo crea un PNG 16×16 sample-icon.png en memoria. La tabla muestra ~100+ bytes, image/png, modificación de hoy, 16×16 px y pista PNG — sin subir nada.',
	tool_file_metadata_analyzer_example_title: 'Ejemplo',
	tool_file_metadata_analyzer_faq_a1:
		'No. El archivo se lee con la File API en esta pestaña. Nada se envía a nuestros servidores.',
	tool_file_metadata_analyzer_faq_a2:
		'Esta página muestra lo básico del contenedor más dimensiones o duración cuando se puede. La herramienta EXIF lee o elimina etiquetas de cámara — úsala para GPS, obturador o borrado.',
	tool_file_metadata_analyzer_faq_a3:
		'A veces file.type queda vacío. Igual verás tamaño y nombre; magic-byte puede sugerir PNG/JPEG/PDF/ZIP/MP4.',
	tool_file_metadata_analyzer_faq_a4:
		'Algunos códecs fallan en video/audio o createImageBitmap. Los campos File API siguen; la fila de nota lo indica.',
	tool_file_metadata_analyzer_faq_a5:
		'Leemos ~12 bytes iniciales (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4 ftyp). Es una pista, no una base completa.',
	tool_file_metadata_analyzer_faq_q1: '¿Se sube mi archivo?',
	tool_file_metadata_analyzer_faq_q2: '¿En qué se diferencia de la herramienta EXIF?',
	tool_file_metadata_analyzer_faq_q3: '¿Por qué MIME está vacío?',
	tool_file_metadata_analyzer_faq_q4: '¿Por qué faltan dimensiones o duración?',
	tool_file_metadata_analyzer_faq_q5: '¿Qué son las pistas magic-byte?',
	tool_file_metadata_analyzer_field_decode_note: 'Nota de decodificación',
	tool_file_metadata_analyzer_field_dimensions: 'Dimensiones',
	tool_file_metadata_analyzer_field_duration: 'Duración',
	tool_file_metadata_analyzer_field_magic: 'Pista magic-byte',
	tool_file_metadata_analyzer_field_modified: 'Última modificación',
	tool_file_metadata_analyzer_field_name: 'Nombre',
	tool_file_metadata_analyzer_field_size: 'Tamaño (bytes)',
	tool_file_metadata_analyzer_field_size_human: 'Tamaño (legible)',
	tool_file_metadata_analyzer_field_type: 'MIME / tipo',
	tool_file_metadata_analyzer_how_body:
		'Elige o suelta un archivo local. Listamos campos File y profundizamos imágenes y A/V cuando el navegador puede decodificar.',
	tool_file_metadata_analyzer_how_item_1: 'Suelta un archivo o pulsa Elegir archivo.',
	tool_file_metadata_analyzer_how_item_2: 'Lee nombre, bytes, tamaño legible, MIME y modificación en la tabla.',
	tool_file_metadata_analyzer_how_item_3: 'En imágenes mira ancho×alto; en audio/vídeo mira duración (y tamaño de vídeo si hay).',
	tool_file_metadata_analyzer_how_item_4: 'Usa Cargar ejemplo para el PNG demo o Limpiar para reiniciar.',
	tool_file_metadata_analyzer_how_title: 'Cómo funciona',
	tool_file_metadata_analyzer_load_sample: 'Cargar ejemplo',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'Resultados de metadatos',
	tool_file_metadata_analyzer_rules_body: 'Origen de campos y límites — qué garantiza este analizador.',
	tool_file_metadata_analyzer_rules_item_1: 'Nombre, tamaño, tipo y lastModified vienen del objeto File del navegador.',
	tool_file_metadata_analyzer_rules_item_2: 'Dimensiones de imagen con createImageBitmap o Image — misma pestaña, sin subida.',
	tool_file_metadata_analyzer_rules_item_3: 'Duración A/V con elemento media preload=metadata; códecs raros pueden fallar.',
	tool_file_metadata_analyzer_rules_item_4: 'Magic-byte es superficial — no sustituye hash de integridad ni EXIF profundo.',
	tool_file_metadata_analyzer_rules_title: 'Reglas que debes esperar',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'Análisis completo.',
	tool_file_metadata_analyzer_title: 'analizador de metadatos de archivos',
	tool_file_metadata_analyzer_usecase_1: 'Confirma que un export es 1920×1080 antes de subirlo a un CMS.',
	tool_file_metadata_analyzer_usecase_2: 'Mira la duración de una nota de voz sin abrir un inspector de escritorio.',
	tool_file_metadata_analyzer_usecase_3: 'Compara MIME reportado con magic-byte si la extensión parece sospechosa.',
	tool_file_metadata_analyzer_usecases_title: 'Buenos casos',
	tool_file_metadata_analyzer_waiting: 'Elige un archivo o carga el ejemplo.',
};

export default es;
