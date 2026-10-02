import type { SiteLangDict } from '../../../types';

/**
 * Español: extraer audio de varios archivos MOV (solo .mov; ZIP; no YouTube).
 * H1 alineado con «extraer audio de varios mov» / lote mov a mp3.
 */
const es: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: 'Extraer audio de varios archivos MOV',
	tool_batch_extract_audio_from_mov_files_desc:
		'Cola solo MOV locales: uno a uno, omite fallos, ZIP de WAV/MP3; sin subir al servidor.',
	tool_batch_extract_audio_from_mov_files_description:
		'Extrae audio de varios archivos MOV locales—uno cada vez—y descarga un ZIP de WAV o MP3. Pasos: añade .mov → Extraer → Descargar ZIP. Ejemplo: Cargar muestra crea dos MOV sintéticos cortos y empaqueta el audio. Cada archivo sigue los mismos topes demux+OPFS que la herramienta MOV individual (unos 5 GiB / 6 h con OPFS, unos 1 GiB sin). Los fallos se omiten con códigos claros; los aciertos se empaquetan. Solo en tu dispositivo; no se sube. No es YouTube. ¿Un solo MOV? Usa Extraer audio de un archivo MOV. ¿MP4/WebM/MKV mezclados? Usa Extraer audio de archivos de vídeo por lotes.',
	tool_batch_extract_audio_from_mov_files_article:
		'Las carpetas de exportes MOV del móvil suelen necesitar solo las pistas AAC. Esta página encola solo .mov, rechaza otras extensiones al añadir, extrae uno a uno para memoria estable, omite fallos y mete los aciertos en un ZIP. No descarga listas de YouTube y no es el hub de contenedores mixtos.',
	tool_batch_extract_audio_from_mov_files_choose: 'Elegir archivos MOV',
	tool_batch_extract_audio_from_mov_files_hint:
		'Hasta 30 .mov locales. Otros vídeos se rechazan—usa la página de lote mixto. Los topes por archivo coinciden con la herramienta MOV individual.',
	tool_batch_extract_audio_from_mov_files_list_label: 'Cola MOV',
	tool_batch_extract_audio_from_mov_files_convert: 'Extraer',
	tool_batch_extract_audio_from_mov_files_stop: 'Detener',
	tool_batch_extract_audio_from_mov_files_download: 'Descargar ZIP',
	tool_batch_extract_audio_from_mov_files_sample: 'Cargar muestra',
	tool_batch_extract_audio_from_mov_files_clear: 'Borrar',
	tool_batch_extract_audio_from_mov_files_advanced: 'Formato de exportación (opcional)',
	tool_batch_extract_audio_from_mov_files_format_label: 'Formato de salida',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16 bits)',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'Bitrate MP3',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'WAV por defecto en MOV cortos. Archivos grandes pueden ir a MP3 por streaming. Sin URL ni YouTube.',
	tool_batch_extract_audio_from_mov_files_progress: 'Progreso del lote MOV',
	tool_batch_extract_audio_from_mov_files_read: 'Leer',
	tool_batch_extract_audio_from_mov_files_decode: 'Demux',
	tool_batch_extract_audio_from_mov_files_extract: 'Extraer',
	tool_batch_extract_audio_from_mov_files_write: 'Escribir',
	tool_batch_extract_audio_from_mov_files_pack: 'Empaquetar ZIP',
	tool_batch_extract_audio_from_mov_files_done: 'Listo. Descarga el ZIP con el audio extraído.',
	tool_batch_extract_audio_from_mov_files_failed: 'El lote falló. Quita MOV dañados o reduce la cola.',
	tool_batch_extract_audio_from_mov_files_elapsed: '{s}s transcurridos',
	tool_batch_extract_audio_from_mov_files_preview: 'Resultado del lote',
	tool_batch_extract_audio_from_mov_files_result: 'Empaquetados {n} audios · ZIP {output} KiB',
	tool_batch_extract_audio_from_mov_files_partial: 'OK {ok}, fallidos {fail} · el ZIP incluye los aciertos ({output} KiB)',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'Añade al menos un MOV o carga la muestra.',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'Sin MOV aún. Suelta .mov locales o carga la muestra. No acepta YouTube ni vídeos que no sean MOV.',
	tool_batch_extract_audio_from_mov_files_remove: 'Quitar',
	tool_batch_extract_audio_from_mov_files_queue_count: '{n} MOV en cola',
	tool_batch_extract_audio_from_mov_files_status_pending: 'En espera',
	tool_batch_extract_audio_from_mov_files_status_running: 'Extrayendo…',
	tool_batch_extract_audio_from_mov_files_status_ok: 'Listo',
	tool_batch_extract_audio_from_mov_files_status_fail: 'Falló',
	tool_batch_extract_audio_from_mov_files_status_stopped: 'Detenido',
	tool_batch_extract_audio_from_mov_files_err_file: 'Añade solo archivos .mov.',
	tool_batch_extract_audio_from_mov_files_err_format:
		'Solo se acepta .mov. MP4, WebM o MKV van en Extraer audio de archivos de vídeo por lotes.',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'Un MOV supera el tope demux (unos 5 GiB / 6 h con OPFS, si no unos 1 GiB). Esa fila se omite.',
	tool_batch_extract_audio_from_mov_files_err_container:
		'Un archivo no es un MOV ISOBMFF válido para demux. Esa fila se omite.',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'Un MOV usa un códec de audio que esta ruta no puede decodificar. Esa fila se omite.',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'Un MOV tiene un diseño de canales que el extractor no admite. Esa fila se omite.',
	tool_batch_extract_audio_from_mov_files_err_decode: 'El navegador no pudo decodificar el audio de un MOV. Esa fila se omite.',
	tool_batch_extract_audio_from_mov_files_err_encoder: 'No se pudo escribir un audio. Revisa el formato y vuelve a Extraer.',
	tool_batch_extract_audio_from_mov_files_err_zip: 'No se pudo crear el ZIP. Prueba con menos MOV.',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'El límite de cola es 30 archivos MOV.',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'No se pudieron crear MOV de muestra en este navegador. Suelta tus propios .mov.',
	tool_batch_extract_audio_from_mov_files_err_unsupported: 'Este navegador no tiene Web Audio para extraer.',
	tool_batch_extract_audio_from_mov_files_err_empty: 'No hubo audio usable en la cola MOV.',
	tool_batch_extract_audio_from_mov_files_forced_mp3: 'Un MOV largo/grande usó MP3 por streaming en esa fila.',
	tool_batch_extract_audio_from_mov_files_how_title: 'Cómo extraer audio de varios MOV',
	tool_batch_extract_audio_from_mov_files_how_body:
		'Encola MOV locales, extrae cada pista una a una y descarga un ZIP—sin subir ni pegar URL.',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'Elige varios .mov locales, o Cargar muestra para dos MOV sintéticos cortos.',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'Abre Formato de exportación si quieres MP3 en lugar de WAV y ajusta el bitrate.',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'Pulsa Extraer y sigue Leer → Demux → Extraer → Escribir por archivo; Detener cancela el resto.',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'Cuando el HUD termine, pulsa Descargar ZIP. Las filas fallidas se omiten; si hay al menos un acierto, se empaquetan.',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'Por qué este lote MOV',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'Acepta solo MOV: las carpetas «lote mov a mp3» no mezclan MP4, WebM ni MKV en silencio.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'La extracción secuencial mantiene la memoria estable cuando cada export del móvil puede pesar gigabytes con AAC en ISOBMFF.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'El estado por fila (espera, extrayendo, listo, falló) evita que un MOV malo borre todo el ZIP.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'Detener corta el lote; Descargar ZIP sigue desactivado hasta que exista un archivo real.',
	tool_batch_extract_audio_from_mov_files_rules_title: 'Cola MOV, extracción secuencial y ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'Cada MOV se clasifica, se extrae solo y se guarda en el ZIP. Los ZIP parciales conservan aciertos. No es YouTube-a-MP3 ni exportar vídeo mudo.',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'Hasta 30 .mov; cada uno sigue topes demux (unos 5 GiB / 6 h con OPFS).',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'Lo que no sea MOV se rechaza al encolar (err_format)—usa el hub mixto para MP4/WebM/MKV.',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'Un fallo omite solo esa fila; otros MOV siguen si al menos uno funciona.',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'Todo corre en tu dispositivo; no se sube a un servidor.',
	tool_batch_extract_audio_from_mov_files_example_title: 'Prueba un lote MOV real',
	tool_batch_extract_audio_from_mov_files_example:
		'Cargar muestra crea dos clips MOV cortos con tonos (si MediaRecorder admite H.264+AAC), ejecuta Extraer y mete dos audios en un ZIP.',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'Cuándo ayuda',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'Tienes una carpeta de MOV del móvil y quieres audio estilo «mov a mp3» en un ZIP sin nube.',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'Una semana de grabaciones de pantalla en MOV deben ser audios compartibles en disco—no desde YouTube.',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'Sacar en lote las pistas AAC de exports MOV de cámara sin tocar los originales.',
	tool_batch_extract_audio_from_mov_files_faq_q1: '¿Puedo pegar una URL o lista de YouTube?',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'No. Solo .mov locales que sueltes o elijas. Guarda primero el vídeo en tu dispositivo.',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'Solo tengo un MOV—¿debo usar esta página?',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'Usa Extraer audio de un archivo MOV para uno solo. Esta página es para muchos MOV y un ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'Mi carpeta tiene .mov y .mp4—¿qué hago?',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'Aquí solo entra .mov. Abre Extraer audio de archivos de vídeo por lotes para contenedores mixtos.',
	tool_batch_extract_audio_from_mov_files_faq_q4: '¿Es un «lote mov a mp3» online?',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'Misma idea para MOV locales: demux AAC y empaquetar MP3 o WAV en un ZIP en tu dispositivo—sin fetch de URL.',
	tool_batch_extract_audio_from_mov_files_faq_q5: '¿Por qué procesar un MOV cada vez?',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'Decodificar todos a la vez dispara la memoria. Lo secuencial solo mantiene el audio del archivo actual en el ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q6: '¿Se sube mi vídeo a un servidor?',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'No. Lectura, demux y empaquetado ZIP corren en el navegador de tu dispositivo.',
};
export default es;
