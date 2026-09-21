import type { SiteLangDict } from '../../../types';

/**
 * es copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. Fusiona audio local sobre vídeo local; no YouTube; no solo silenciar; no solo extraer.
 */
const es: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'Añadir una pista de audio a un vídeo',
  tool_add_an_audio_track_to_a_video_desc:
    'Fusiona una banda sonora local con un vídeo local y descarga el resultado. Solo en el dispositivo—sin descarga de YouTube.',
  tool_add_an_audio_track_to_a_video_description:
    'Añade una pista de audio a un vídeo local en el navegador fusionando imagen y banda sonora, luego descarga. Pasos: elige vídeo y audio, Añadir audio, previsualiza, descarga. Ejemplo: clip mudo más un WAV corto. Usa captureStream y MediaRecorder—a menudo WebM; no es remux sin pérdida. Nunca se sube. Sin descarga de YouTube.',
  tool_add_an_audio_track_to_a_video_article:
    'Los clips mudos o con voz débil suelen necesitar una banda nueva antes de compartir. Esta página abre un vídeo y un audio locales, captura fotogramas sin las pistas originales, decodifica la banda en AudioContext, combina y reencodea con MediaRecorder—a menudo WebM según el navegador. La duración sigue al vídeo; el audio más largo se corta y el más corto termina antes. No descarga YouTube ni otras URL, no solo silencia sin añadir sonido y no extrae audio como archivo aparte. El éxito depende de poder reproducir ambos archivos y de MediaRecorder con audio. Conserva los originales. Todo corre en tu dispositivo.',
  tool_add_an_audio_track_to_a_video_choose_video: 'Elegir un archivo de vídeo',
  tool_add_an_audio_track_to_a_video_hint_video:
    'Suelta o elige un MP4, WebM, MOV o M4V local que el navegador pueda reproducir. Hasta 80 MiB y unos 3 minutos. Sin YouTube ni pegar URL.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'Elegir un archivo de audio',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'Suelta o elige un WAV, MP3, M4A u otro formato local que el navegador pueda decodificar. Hasta 40 MiB.',
  tool_add_an_audio_track_to_a_video_convert: 'Añadir audio',
  tool_add_an_audio_track_to_a_video_download: 'Descargar',
  tool_add_an_audio_track_to_a_video_sample: 'Cargar muestra',
  tool_add_an_audio_track_to_a_video_clear: 'Borrar',
  tool_add_an_audio_track_to_a_video_advanced: 'Notas de fusión',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'Los navegadores suelen reencodear con MediaRecorder tras quitar el audio original y adjuntar tu banda. La salida suele ser WebM, no remux sin pérdida del MP4. Esta página nunca descarga YouTube.',
  tool_add_an_audio_track_to_a_video_progress: 'Progreso de añadir audio',
  tool_add_an_audio_track_to_a_video_read: 'Leer',
  tool_add_an_audio_track_to_a_video_decode: 'Decodificar',
  tool_add_an_audio_track_to_a_video_merge: 'Fusionar',
  tool_add_an_audio_track_to_a_video_write: 'Escribir',
  tool_add_an_audio_track_to_a_video_done: 'Listo. Previsualiza el vídeo fusionado y descarga.',
  tool_add_an_audio_track_to_a_video_failed:
    'No se pudo fusionar el audio. Prueba archivos más cortos que el navegador pueda reproducir.',
  tool_add_an_audio_track_to_a_video_elapsed: '{s}s transcurridos',
  tool_add_an_audio_track_to_a_video_preview: 'Previsualizar vídeo fusionado',
  tool_add_an_audio_track_to_a_video_result: '{seconds}s · con audio · {mime} · {output} KiB',
  tool_add_an_audio_track_to_a_video_sample_name: 'muestra-añadir-audio',
  tool_add_an_audio_track_to_a_video_empty: 'Elige un vídeo y un audio locales, o carga la muestra primero.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'Aún no hay archivos. Suelta un vídeo y una banda, o Cargar muestra. Esta herramienta fusiona audio sobre imagen—no solo silencia, no solo extrae y no descarga YouTube.',
  tool_add_an_audio_track_to_a_video_video_label: 'Vídeo: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'Audio: {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'Elige un vídeo y un audio locales compatibles.',
  tool_add_an_audio_track_to_a_video_err_format:
    'Archivos no admitidos o irreproducibles. Usa tipos habituales que el navegador pueda decodificar. Sin URL de YouTube.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'Usa un vídeo local de hasta 80 MiB / unos 3 minutos y un audio de hasta 40 MiB.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'El navegador no pudo decodificar el vídeo o el audio. Prueba otro contenedor o un clip más corto.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'MediaRecorder no pudo escribir el vídeo fusionado. Prueba Chrome/Edge o WebM/MP4 más cortos más WAV/MP3.',
  tool_add_an_audio_track_to_a_video_how_title: 'Cómo añadir una pista de audio a un vídeo',
  tool_add_an_audio_track_to_a_video_how_body:
    'Elige vídeo y audio locales, pulsa Añadir audio, previsualiza y descarga—sin subir y sin descarga de YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'Elige un vídeo y un audio locales (o Cargar muestra). No pegues enlaces de YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    'Pulsa Añadir audio y espera Leer → Decodificar → Fusionar → Escribir.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'Previsualiza el resultado. Debes oír la nueva banda con la imagen.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'Revisa la línea de resultado y pulsa Descargar.',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'Por qué elegir nuestras herramientas para añadir audio a un vídeo',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'Ves duración, tipo MIME y KiB de salida antes de guardar.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'Un trabajo de fusión claro con límites honestos de MediaRecorder—sin fingir remux sin pérdida.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'Lectura y grabación en tu dispositivo; la página no sube tus archivos para procesarlos.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'Cambiar cualquiera de los archivos borra la descarga anterior para no guardar una fusión obsoleta.',
  tool_add_an_audio_track_to_a_video_rules_title: 'Reglas de fusión y límites honestos del navegador',
  tool_add_an_audio_track_to_a_video_rules_body:
    'Cada ejecución quita el audio original, adjunta tu banda y reencodea con MediaRecorder. La salida suele ser WebM. No es descarga de YouTube, no es solo silenciar y no es extracción de audio.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'Un vídeo local de hasta 80 MiB y unos tres minutos, más un audio local de hasta 40 MiB. Primero debe poder reproducirse/decodificarse.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'La duración de salida sigue al vídeo. Audio más largo se trunca; más corto termina antes que la imagen.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'Sin YouTube, URL de podcast ni descarga remota. Pegar enlaces no está soportado.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'Contenedores y códecs pueden cambiar. Conserva los originales; la descarga es un archivo reencodeado nuevo.',
  tool_add_an_audio_track_to_a_video_example_title: 'Prueba un clip mudo corto más un tono base',
  tool_add_an_audio_track_to_a_video_example:
    'Cargar muestra crea un vídeo corto de lienzo y un tono simple; luego Añadir audio se ejecuta solo. Verás imagen con la nueva banda. La reproducción no arranca sola—pulsa play si quieres verlo.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'Cuándo ayuda',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'Tienes una captura de pantalla muda y un WAV base—fúndelos aquí y descarga para compartir.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'Quieres sustituir una pista débil por una banda local más clara sin instalar un editor de escritorio.',
  tool_add_an_audio_track_to_a_video_faq_q1: '¿Puede descargar YouTube o pegar una URL?',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'No. Solo archivos locales que ya tengas. No hay descargador de YouTube ni obtención remota.',
  tool_add_an_audio_track_to_a_video_faq_q2: '¿Es lo mismo que quitar el audio de un vídeo?',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'No. Silenciar/quitar es otro trabajo. Esta página adjunta una banda nueva a la imagen.',
  tool_add_an_audio_track_to_a_video_faq_q3: '¿Extrae el audio como descarga aparte?',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'No. Extraer audio de un vídeo es otra herramienta. Aquí el resultado es un vídeo con sonido fusionado.',
  tool_add_an_audio_track_to_a_video_faq_q4: '¿La salida será el mismo MP4 que el origen?',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'Normalmente no. Los navegadores reencodean con MediaRecorder, a menudo a WebM. Calidad y contenedor pueden cambiar.',
  tool_add_an_audio_track_to_a_video_faq_q5: '¿Se sube algo a un servidor?',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'No. Decodificación y grabación corren en tu navegador. La página necesita red al cargar; no se garantiza uso sin conexión.',
  tool_add_an_audio_track_to_a_video_faq_q6: '¿Y si el audio es más largo que el vídeo?',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'La fusión sigue la duración del vídeo. El audio que sobra tras la imagen no se guarda en la descarga.',
};
export default es;
