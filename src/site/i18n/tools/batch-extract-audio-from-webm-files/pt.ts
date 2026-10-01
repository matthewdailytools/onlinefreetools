import type { SiteLangDict } from '../../../types';

/** Español: extraer audio de archivos WebM por lotes (fallback ~500 MiB / 4 h por archivo). */
const pt: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: 'Extrair áudio de ficheiros WebM em lote',
  tool_batch_extract_audio_from_webm_files_desc:
    'Solo WebM local: cola uno a uno, omite fallos, ZIP WAV/MP3; sin subir al servidor.',
  tool_batch_extract_audio_from_webm_files_description:
    'Extrae pistas solo de WebM locales, uno a uno, y descarga ZIP WAV o MP3. Pasos: añadir .webm → Extraer → Descargar ZIP. Ejemplo: Cargar muestra crea dos WebM cortos. ~500 MiB / 4 h por archivo (ruta fallback), no demux MP4/MOV. Fallos se omiten; aciertos se empaquetan. Archivos en tu dispositivo, no se suben. No YouTube. Un WebM: Extraer audio de un archivo WebM. Mezcla MP4/MOV/MKV: hub de vídeo por lotes. Processo em passos: escolher ficheiro → extrair → transferir. Exemplo: carregar amostra.',
  tool_batch_extract_audio_from_webm_files_article:
    'Carpetas de capturas WebM suelen necesitar solo la voz. Esta página encola solo .webm, extrae uno a uno, omite fallos y empaqueta aciertos. No YouTube ni lote mixto del hub.',
  tool_batch_extract_audio_from_webm_files_choose: 'Elegir archivos WebM',
  tool_batch_extract_audio_from_webm_files_hint:
    'Hasta 30 .webm locales. No WebM → err_format. ~500 MiB / 4 h por archivo.',
  tool_batch_extract_audio_from_webm_files_list_label: 'Cola WebM',
  tool_batch_extract_audio_from_webm_files_convert: 'Extraer',
  tool_batch_extract_audio_from_webm_files_stop: 'Detener',
  tool_batch_extract_audio_from_webm_files_download: 'Descargar ZIP',
  tool_batch_extract_audio_from_webm_files_sample: 'Cargar muestra',
  tool_batch_extract_audio_from_webm_files_clear: 'Borrar',
  tool_batch_extract_audio_from_webm_files_advanced: 'Formato de exportación (opcional)',
  tool_batch_extract_audio_from_webm_files_format_label: 'Formato de salida',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV (16 bits)',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'Bitrate MP3',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    'WAV por defecto en WebM cortos. Clips largos pueden ir a MP3 por streaming. Sin URL ni YouTube.',
  tool_batch_extract_audio_from_webm_files_progress: 'Progreso del lote',
  tool_batch_extract_audio_from_webm_files_read: 'Leer',
  tool_batch_extract_audio_from_webm_files_decode: 'Reproducir',
  tool_batch_extract_audio_from_webm_files_extract: 'Extraer',
  tool_batch_extract_audio_from_webm_files_write: 'Escribir',
  tool_batch_extract_audio_from_webm_files_pack: 'Empaquetar ZIP',
  tool_batch_extract_audio_from_webm_files_done: 'Listo. Descarga el ZIP de audio.',
  tool_batch_extract_audio_from_webm_files_failed: 'El lote falló. Quita WebM dañados o reduce la cola.',
  tool_batch_extract_audio_from_webm_files_elapsed: '{s}s transcurridos',
  tool_batch_extract_audio_from_webm_files_preview: 'Resultado del lote',
  tool_batch_extract_audio_from_webm_files_result: 'Empaquetados {n} audios · ZIP {output} KiB',
  tool_batch_extract_audio_from_webm_files_partial: 'OK {ok}, fallidos {fail} · el ZIP incluye aciertos ({output} KiB)',
  tool_batch_extract_audio_from_webm_files_sample_name: 'demo-lote-webm',
  tool_batch_extract_audio_from_webm_files_empty: 'Añade al menos un WebM o carga la muestra.',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'Sin WebM. Suelta .webm o Cargar muestra. No YouTube ni otros formatos.',
  tool_batch_extract_audio_from_webm_files_remove: 'Quitar',
  tool_batch_extract_audio_from_webm_files_queue_count: '{n} WebM en cola',
  tool_batch_extract_audio_from_webm_files_status_pending: 'En espera',
  tool_batch_extract_audio_from_webm_files_status_running: 'Extrayendo…',
  tool_batch_extract_audio_from_webm_files_status_ok: 'Listo',
  tool_batch_extract_audio_from_webm_files_status_fail: 'Falló',
  tool_batch_extract_audio_from_webm_files_status_stopped: 'Detenido',
  tool_batch_extract_audio_from_webm_files_err_file: 'Añade solo archivos WebM.',
  tool_batch_extract_audio_from_webm_files_err_format:
    'Solo .webm. MP4/MOV/MKV: Extraer audio de archivos de vídeo por lotes.',
  tool_batch_extract_audio_from_webm_files_err_limit: 'Un WebM superó ~500 MiB / 4 h; fila omitida.',
  tool_batch_extract_audio_from_webm_files_err_container: 'Un WebM demasiado grande o largo (~500 MiB / 4 h); fila omitida.',
  tool_batch_extract_audio_from_webm_files_err_codec: 'Códec de audio no soportado en un WebM; fila omitida.',
  tool_batch_extract_audio_from_webm_files_err_channels: 'Layout de canales no soportado; fila omitida.',
  tool_batch_extract_audio_from_webm_files_err_decode: 'No se pudo decodificar audio de un WebM; fila omitida.',
  tool_batch_extract_audio_from_webm_files_err_encoder: 'No se pudo escribir audio. Revisa formato e inténtalo.',
  tool_batch_extract_audio_from_webm_files_err_zip: 'No se pudo crear el ZIP. Reduce la cola.',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'Límite de cola: 30 WebM.',
  tool_batch_extract_audio_from_webm_files_err_sample: 'No se pudo crear muestra WebM. Añade tus .webm.',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'Este navegador no tiene Web Audio.',
  tool_batch_extract_audio_from_webm_files_err_empty: 'No se capturó audio útil en la cola.',
  tool_batch_extract_audio_from_webm_files_forced_mp3: 'Un WebM largo usó MP3 por streaming en esa fila.',
  tool_batch_extract_audio_from_webm_files_how_title: 'Cómo extraer audio de archivos WebM por lotes',
  tool_batch_extract_audio_from_webm_files_how_body:
    'Encola WebM locales, extrae uno a uno, descarga ZIP—sin subir ni URL.',
  tool_batch_extract_audio_from_webm_files_how_item_1: 'Elige varios .webm o Cargar muestra (dos WebM cortos).',
  tool_batch_extract_audio_from_webm_files_how_item_2: 'Cambia a MP3 en Formato de exportación si lo necesitas.',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    'Pulsa Extraer; sigue Leer→Reproducir→Extraer→Escribir; Detener cancela el resto.',
  tool_batch_extract_audio_from_webm_files_how_item_4:
    'Descargar ZIP. Filas fallidas se omiten; basta un acierto para empaquetar.',
  tool_batch_extract_audio_from_webm_files_why_choose_title: 'Por qué usar Extraer audio de archivos WebM por lotes',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    'Solo WebM—encaja con carpetas de captura sin mezclar MP4/MOV.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2: 'Uno a uno evita picos de memoria con varios WebM grandes.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3:
    'Estado por fila: un WebM malo no borra todo el ZIP.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    'WebM enormes se omiten con mensaje de contenedor; demux grande en MP4/MOV.',
  tool_batch_extract_audio_from_webm_files_rules_title: 'Cola WebM, extracción secuencial y ZIP',
  tool_batch_extract_audio_from_webm_files_rules_body:
    'Cada WebM se clasifica, reproduce y entra al ZIP. ZIP parciales conservan aciertos. No YouTube a MP3.',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    'Hasta 30 .webm; ~500 MiB / 4 h cada uno. Demux grande MP4/MOV en páginas hermanas.',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'No WebM → err_format. Mezcla: hub por lotes.',
  tool_batch_extract_audio_from_webm_files_rules_item_3: 'Un fallo omite la fila; otros pueden empaquetarse.',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'Procesamiento en tu dispositivo; no se sube al servidor.',
  tool_batch_extract_audio_from_webm_files_example_title: 'Prueba un lote WebM real',
  tool_batch_extract_audio_from_webm_files_example:
    'Cargar muestra crea dos WebM cortos cuando es posible y empaqueta un ZIP.',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'Cuándo ayuda',
  tool_batch_extract_audio_from_webm_files_usecase_1: 'Carpeta de capturas WebM → ZIP estilo webm a MP3.',
  tool_batch_extract_audio_from_webm_files_usecase_2: 'Exportaciones del navegador a audio sin subir cada archivo.',
  tool_batch_extract_audio_from_webm_files_usecase_3: 'Sacar Opus de WebM VP9 conservando los vídeos originales.',
  tool_batch_extract_audio_from_webm_files_faq_q1: '¿Lista de reproducción de YouTube?',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'No. Solo WebM local. Descarga primero al dispositivo.',
  tool_batch_extract_audio_from_webm_files_faq_q2: '¿Solo un WebM?',
  tool_batch_extract_audio_from_webm_files_faq_a2: 'Usa Extraer audio de un archivo WebM. Esta página es para ZIP.',
  tool_batch_extract_audio_from_webm_files_faq_q3: '¿Carpeta con .mp4 y .webm?',
  tool_batch_extract_audio_from_webm_files_faq_a3: 'Solo .webm aquí. Mezcla: hub por lotes de vídeo.',
  tool_batch_extract_audio_from_webm_files_faq_q4: '¿Es webm a MP3 online en lote?',
  tool_batch_extract_audio_from_webm_files_faq_a4:
    'Similar para WebM local: captura Opus y ZIP MP3/WAV; no pega URL.',
  tool_batch_extract_audio_from_webm_files_faq_q5: '¿Por qué uno a uno?',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'Decodificar varios WebM a la vez dispara memoria. Secuencial mantiene solo el blob actual.',
  tool_batch_extract_audio_from_webm_files_faq_q6: '¿Se suben los vídeos?',
  tool_batch_extract_audio_from_webm_files_faq_a6: 'No. Lectura, captura y ZIP en tu navegador.',
};
export default pt;
