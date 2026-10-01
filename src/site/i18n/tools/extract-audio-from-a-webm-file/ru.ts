import type { SiteLangDict } from '../../../types';

/**
 * Español: extraer audio de un archivo WebM (solo .webm; fallback ~500 MiB / 4 h).
 */
const ru: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'Извлечь аудио из WebM-файла',
  tool_extract_audio_from_a_webm_file_desc:
    'Solo WebM local: captura Opus/Vorbis en el dispositivo y descarga WAV o MP3; ruta fallback ~500 MiB / 4 h—sin prometer demux de 5 GiB.',
  tool_extract_audio_from_a_webm_file_description:
    'Extrae la pista de un WebM local en el navegador y descarga WAV o MP3. Pasos: elegir WebM → Extraer → escuchar → descargar. Ejemplo: Cargar muestra crea un WebM corto si MediaRecorder está disponible. Esta página usa la ruta fallback MediaElement (~500 MiB / 4 h); archivos más grandes fallan al instante con mensaje de contenedor. Demux grande de MP4/MOV está en esas páginas o en el hub de vídeo. Solo local—no YouTube ni URL. No se sube al servidor. ¿Muchos WebM? Usa Extraer audio de archivos WebM por lotes. Процесс: шаги извлечения и пример с локальным файлом.',
  tool_extract_audio_from_a_webm_file_article:
    'Grabaciones de pantalla y capturas del navegador suelen ser WebM con Opus. Esta página acepta solo .webm, usa la ruta fallback compartida y escribe WAV o MP3 sin subir. No promete demux ISOBMFF ni streaming OPFS multi‑GiB—eso es para MP4/MOV. No obtiene URL de YouTube. Carpetas mixtas: hub o lote del hub.',
  tool_extract_audio_from_a_webm_file_choose: 'Elegir un archivo WebM',
  tool_extract_audio_from_a_webm_file_hint:
    'Suelta un .webm local. Tope fallback ~500 MiB / 4 h. WebM más grandes fallan con mensaje claro—remux a MP4 para demux grande o reduce el archivo.',
  tool_extract_audio_from_a_webm_file_convert: 'Extraer',
  tool_extract_audio_from_a_webm_file_download: 'Descargar',
  tool_extract_audio_from_a_webm_file_download_wav: 'Descargar WAV',
  tool_extract_audio_from_a_webm_file_download_mp3: 'Descargar MP3',
  tool_extract_audio_from_a_webm_file_sample: 'Cargar muestra',
  tool_extract_audio_from_a_webm_file_clear: 'Borrar',
  tool_extract_audio_from_a_webm_file_advanced: 'Formato de exportación',
  tool_extract_audio_from_a_webm_file_format_label: 'Formato de salida',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV (16 bits)',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'Bitrate MP3',
  tool_extract_audio_from_a_webm_file_settings_hint:
    'WAV por defecto vale para WebM cortos. Clips largos pueden ir a MP3 por streaming. El tope es la ruta fallback (~500 MiB), no demux MP4. Sin URL.',
  tool_extract_audio_from_a_webm_file_progress: 'Progreso de extracción',
  tool_extract_audio_from_a_webm_file_read: 'Leer',
  tool_extract_audio_from_a_webm_file_decode: 'Reproducir',
  tool_extract_audio_from_a_webm_file_extract: 'Extraer',
  tool_extract_audio_from_a_webm_file_write: 'Escribir',
  tool_extract_audio_from_a_webm_file_done: 'Listo. Escucha el audio y descarga WAV o MP3.',
  tool_extract_audio_from_a_webm_file_failed: 'La extracción falló. Prueba un WebM más pequeño que el navegador pueda decodificar.',
  tool_extract_audio_from_a_webm_file_elapsed: '{s}s transcurridos',
  tool_extract_audio_from_a_webm_file_preview: 'Escuchar el audio extraído',
  tool_extract_audio_from_a_webm_file_result: '{seconds}s · {channels} ch · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_a_webm_file_sample_name: 'demo-webm-corto',
  tool_extract_audio_from_a_webm_file_empty: 'Elige un WebM o carga la muestra primero.',
  tool_extract_audio_from_a_webm_file_empty_state:
    'Sin archivo. Suelta un .webm local (~500 MiB) o Cargar muestra. No YouTube.',
  tool_extract_audio_from_a_webm_file_err_file: 'Suelta exactamente un archivo WebM.',
  tool_extract_audio_from_a_webm_file_err_format: 'Archivo no admitido. En esta página solo .webm (video/webm).',
  tool_extract_audio_from_a_webm_file_err_limit: 'Este WebM supera el tope de tamaño o duración de la ruta fallback.',
  tool_extract_audio_from_a_webm_file_err_container:
    'Este WebM supera el tope fallback (~500 MiB / 4 h) o no se puede decodificar aquí. Remux a MP4 para demux grande o usa un WebM más pequeño.',
  tool_extract_audio_from_a_webm_file_err_codec: 'El códec de audio de este WebM no está soportado en la ruta fallback.',
  tool_extract_audio_from_a_webm_file_err_channels: 'La pista usa un layout de canales que el extractor no puede tratar.',
  tool_extract_audio_from_a_webm_file_err_decode: 'El navegador no pudo decodificar audio de este WebM.',
  tool_extract_audio_from_a_webm_file_err_encoder: 'No se pudo escribir el audio. Intenta Extraer de nuevo.',
  tool_extract_audio_from_a_webm_file_err_sample: 'No se pudo crear la muestra WebM. Suelta tu propio .webm.',
  tool_extract_audio_from_a_webm_file_err_unsupported: 'Este navegador no tiene Web Audio necesario para extraer.',
  tool_extract_audio_from_a_webm_file_err_empty: 'No se capturaron muestras de audio útiles.',
  tool_extract_audio_from_a_webm_file_stop: 'Detener',
  tool_extract_audio_from_a_webm_file_status_stopped: 'Detenido. No se guarda audio parcial.',
  tool_extract_audio_from_a_webm_file_forced_mp3: 'Entrada larga/grande usó MP3 por streaming en la ruta fallback.',
  tool_extract_audio_from_a_webm_file_how_title: 'Cómo extraer audio de un archivo WebM',
  tool_extract_audio_from_a_webm_file_how_body:
    'Suelta un WebM local, elige WAV o MP3, Extraer, escucha y descarga—sin subir ni pegar URL.',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'Elige un .webm local (~500 MiB) o Cargar muestra si MediaRecorder funciona.',
  tool_extract_audio_from_a_webm_file_how_item_2: 'Abre Formato de exportación y elige WAV o MP3; ajusta bitrate si hace falta.',
  tool_extract_audio_from_a_webm_file_how_item_3: 'Pulsa Extraer y espera Leer → Reproducir → Extraer → Escribir (o Detener).',
  tool_extract_audio_from_a_webm_file_how_item_4: 'Escucha y luego Descargar WAV o Descargar MP3.',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'Por qué usar Extraer audio de un archivo WebM',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'Solo acepta WebM para que capturas de pantalla no se mezclen con landings MP4.',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'Topes fallback honestos—sin marketing falso de demux 5 GiB para WebM.',
  tool_extract_audio_from_a_webm_file_why_choose_item_3: 'El procesamiento queda en tu dispositivo; Detener cancela a mitad.',
  tool_extract_audio_from_a_webm_file_why_choose_item_4: 'Hub y páginas MP4/MOV de archivos grandes cerca cuando necesites demux.',
  tool_extract_audio_from_a_webm_file_rules_title: 'Solo WebM y límites fallback',
  tool_extract_audio_from_a_webm_file_rules_body:
    'Un WebM local por ejecución en la ruta fallback MediaElement. No es YouTube a MP3. No exporta vídeo mudo.',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    '~500 MiB / 4 h fallback. Si pasas el tope → mensaje de contenedor. Demux grande solo MP4/MOV hoy.',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'Sin URL ni descarga de YouTube.',
  tool_extract_audio_from_a_webm_file_rules_item_3: 'Depende del soporte WebM/Opus del navegador.',
  tool_extract_audio_from_a_webm_file_rules_item_4: 'El WebM original no se sobrescribe. Lotes WebM en la herramienta batch WebM.',
  tool_extract_audio_from_a_webm_file_example_title: 'Prueba una extracción WebM real',
  tool_extract_audio_from_a_webm_file_example:
    'Cargar muestra crea un WebM sintético corto cuando MediaRecorder está disponible y luego Extraer. Mejor tu propio .webm si la muestra no se crea.',
  tool_extract_audio_from_a_webm_file_usecases_title: 'Cuándo ayuda',
  tool_extract_audio_from_a_webm_file_usecase_1: 'Captura WebM del navegador → MP3 compartible sin subir.',
  tool_extract_audio_from_a_webm_file_usecase_2: 'Un clip WebM de entrevista solo necesita la pista Opus en WAV.',
  tool_extract_audio_from_a_webm_file_usecase_3: 'Ya sabes que es WebM y quieres una landing de formato—not el hub mixto.',
  tool_extract_audio_from_a_webm_file_faq_q1: '¿Puedo pegar una URL de YouTube?',
  tool_extract_audio_from_a_webm_file_faq_a1: 'No. Solo .webm local.',
  tool_extract_audio_from_a_webm_file_faq_q2: '¿Por qué no 5 GiB como la página MP4?',
  tool_extract_audio_from_a_webm_file_faq_a2:
    'Demux grande hoy es ISOBMFF (MP4/MOV). WebM usa fallback MediaElement ~500 MiB hasta que exista demux WebM.',
  tool_extract_audio_from_a_webm_file_faq_q3: '¿Silencia el WebM (vídeo mudo)?',
  tool_extract_audio_from_a_webm_file_faq_a3: 'No. Solo extrae audio a WAV/MP3.',
  tool_extract_audio_from_a_webm_file_faq_q4: '¿Se sube mi archivo?',
  tool_extract_audio_from_a_webm_file_faq_a4: 'No. Decodificación y escritura en tu navegador.',
  tool_extract_audio_from_a_webm_file_faq_q5: 'Tengo muchos WebM—¿qué página?',
  tool_extract_audio_from_a_webm_file_faq_a5: 'Usa Extraer audio de archivos WebM por lotes para un ZIP de aciertos.',
  tool_extract_audio_from_a_webm_file_faq_q6: '¿Recortar después de extraer?',
  tool_extract_audio_from_a_webm_file_faq_a6: 'No aquí. Descarga y usa Recortar un clip de audio y exportar.',
};
export default ru;
