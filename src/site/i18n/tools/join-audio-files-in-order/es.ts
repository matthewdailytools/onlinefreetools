import type { SiteLangDict } from '../../../types';

/**
 * Spanish copy for join-audio-files-in-order (F7 A2).
 * Unir archivos de audio en orden; ≠ mezcla superpuesta; ≠ fundido cruzado.
 */
const es: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'Unir archivos de audio en orden',
  tool_join_audio_files_in_order_desc:
    'Une varios clips locales uno tras otro según la lista y descarga un WAV de 16 bits. Solo en el dispositivo—no es mezcla superpuesta.',
  tool_join_audio_files_in_order_description:
    'Une varios archivos de audio locales de extremo a extremo en el orden de la lista en el navegador y descarga un WAV de 16 bits. Pasos: Añade clips, reordena si hace falta, Une, previsualiza y descarga. Ejemplo: carga dos tonos de muestra. Solo concatena—no mezcla superpuesta ni fundido cruzado. Nunca se sube.',
  tool_join_audio_files_in_order_article:
    'Tomas de podcast, notas de voz y secciones de canciones a menudo deben ser un solo archivo continuo. Esta página permite soltar varios archivos locales, reordenarlos en una lista, decodificar cada clip en el navegador, alinear frecuencia de muestreo y canales, y concatenar las muestras en ese orden en un único WAV PCM de 16 bits. No apila pistas a la vez (mezcla), no hace fundido cruzado entre canciones y no extrae audio de vídeo. El éxito depende de si el navegador puede decodificar cada contenedor. Los canales quedan en uno o dos. Conserva los originales; la descarga es un archivo nuevo. Todo corre en tu dispositivo.',
  tool_join_audio_files_in_order_choose: 'Añadir archivos de audio',
  tool_join_audio_files_in_order_hint:
    'Suelta o elige varios WAV, MP3, M4A, AAC u OGG. Puedes añadir más. Hasta 20 clips, 40 MiB cada uno, 20 minutos en total tras unir; mono o estéreo.',
  tool_join_audio_files_in_order_list_label: 'Orden de unión',
  tool_join_audio_files_in_order_move_up: 'Subir',
  tool_join_audio_files_in_order_move_down: 'Bajar',
  tool_join_audio_files_in_order_remove: 'Quitar',
  tool_join_audio_files_in_order_convert: 'Unir',
  tool_join_audio_files_in_order_download: 'Descargar WAV',
  tool_join_audio_files_in_order_sample: 'Cargar muestra',
  tool_join_audio_files_in_order_clear: 'Borrar',
  tool_join_audio_files_in_order_advanced: 'Notas de unión',
  tool_join_audio_files_in_order_settings_hint:
    'Los clips se unen de extremo a extremo en el orden de la lista. Las frecuencias distintas se alinean al primer clip. Solo concatena—no mezcla ni fundido cruzado.',
  tool_join_audio_files_in_order_progress: 'Progreso de unión',
  tool_join_audio_files_in_order_read: 'Leer',
  tool_join_audio_files_in_order_decode: 'Decodificar',
  tool_join_audio_files_in_order_join: 'Unir',
  tool_join_audio_files_in_order_write: 'Escribir',
  tool_join_audio_files_in_order_done: 'Listo. Previsualiza el WAV unido y descarga.',
  tool_join_audio_files_in_order_failed: 'La unión falló. Prueba con menos archivos, más cortos y válidos.',
  tool_join_audio_files_in_order_elapsed: '{s}s transcurridos',
  tool_join_audio_files_in_order_preview: 'Escuchar el WAV unido',
  tool_join_audio_files_in_order_result:
    '{files} archivos · {seconds}s · {channels} ch · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: 'tono-union',
  tool_join_audio_files_in_order_empty: 'Añade al menos dos archivos de audio o carga la muestra primero.',
  tool_join_audio_files_in_order_empty_state:
    'Aún no hay clips. Suelta varios archivos locales o pulsa Cargar muestra para dos tonos cortos. Esta herramienta concatena en orden de lista—no mezcla pistas a la vez.',
  tool_join_audio_files_in_order_queue_count: '{n} archivo(s) en cola',
  tool_join_audio_files_in_order_err_file: 'Añade al menos dos archivos de audio compatibles.',
  tool_join_audio_files_in_order_err_format:
    'Audio no compatible o dañado. Usa WAV, MP3, M4A, AAC u OGG que el navegador pueda decodificar.',
  tool_join_audio_files_in_order_err_limit:
    'Hasta 20 archivos, 40 MiB cada uno, mono o estéreo, con duración total unida bajo 20 minutos.',
  tool_join_audio_files_in_order_err_decode:
    'El navegador no pudo decodificar uno de los archivos. Quítalo o prueba otra codificación.',
  tool_join_audio_files_in_order_err_encoder: 'No se pudo escribir el WAV unido. Prueba Unir de nuevo.',
  tool_join_audio_files_in_order_how_title: 'Cómo unir archivos de audio en orden',
  tool_join_audio_files_in_order_how_body:
    'Añade varios clips locales, fija el orden, pulsa Unir, escucha y descarga un WAV de 16 bits—sin subir los archivos.',
  tool_join_audio_files_in_order_how_item_1:
    'Añade dos o más archivos de audio (o Cargar muestra para dos tonos cortos). Suelta de nuevo para añadir más.',
  tool_join_audio_files_in_order_how_item_2:
    'Usa Subir / Bajar / Quitar en la lista para que el orden coincida con lo que quieres oír.',
  tool_join_audio_files_in_order_how_item_3:
    'Pulsa Unir y espera Leer → Decodificar → Unir → Escribir.',
  tool_join_audio_files_in_order_how_item_4:
    'Previsualiza la pista continua, revisa la línea de resultado y pulsa Descargar WAV.',
  tool_join_audio_files_in_order_why_choose_title: 'Por qué elegir nuestras herramientas Unir archivos de audio en orden',
  tool_join_audio_files_in_order_why_choose_item_1:
    'Ve el número de archivos, duración, canales, frecuencia y KiB de salida antes de guardar.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'Un trabajo claro de concatenación—orden de lista extremo a extremo—con límites honestos si un clip no decodifica.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'Lectura, decodificación y escritura corren en tu dispositivo; la página no sube tus clips para procesarlos.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'Cambiar la cola borra la descarga anterior para no guardar un WAV obsoleto por error.',
  tool_join_audio_files_in_order_rules_title: 'Reglas de concatenación y límites honestos del navegador',
  tool_join_audio_files_in_order_rules_body:
    'Cada ejecución une clips de extremo a extremo en orden de lista. Las frecuencias se alinean al primer clip. La exportación es WAV de 16 bits. No es mezcla superpuesta, ni fundido cruzado, ni extracción de vídeo.',
  tool_join_audio_files_in_order_rules_item_1:
    'De dos a veinte archivos locales, cada uno hasta 40 MiB. La duración unida queda bajo veinte minutos. Canales: uno o dos.',
  tool_join_audio_files_in_order_rules_item_2:
    'Esta página concatena. No apila voz sobre música a la vez y no hace fundido cruzado entre canciones.',
  tool_join_audio_files_in_order_rules_item_3:
    'No se copian etiquetas. Los originales no se sobrescriben. El éxito depende de la decodificación del navegador por archivo.',
  tool_join_audio_files_in_order_rules_item_4:
    'Tras unir, usa Recortar un clip de audio y exportar para cortes. Para vídeo, extrae el audio primero.',
  tool_join_audio_files_in_order_example_title: 'Prueba dos tonos cortos',
  tool_join_audio_files_in_order_example:
    'Cargar muestra añade dos tonos WAV cortos (distinta altura) a la cola y ejecuta Unir. Debes oír el tono A y luego el B sin solapamiento. La reproducción no arranca sola—pulsa play en la vista previa si quieres oírlo.',
  tool_join_audio_files_in_order_usecases_title: 'Cuándo ayuda',
  tool_join_audio_files_in_order_usecase_1:
    'Varias notas de voz deben ser una pista continua—añade en orden, Une, descarga WAV.',
  tool_join_audio_files_in_order_usecase_2:
    'Secciones de canción o capítulos de podcast guardados por separado necesitan una exportación sin subirlos a un sitio de unión.',
  tool_join_audio_files_in_order_faq_q1: '¿Es lo mismo que mezclar o superponer dos pistas?',
  tool_join_audio_files_in_order_faq_a1:
    'No. La mezcla superpuesta reproduce clips a la vez (por ejemplo voz sobre música). Esta página solo los coloca uno detrás de otro en orden de lista.',
  tool_join_audio_files_in_order_faq_q2: '¿Hace fundido cruzado entre canciones?',
  tool_join_audio_files_in_order_faq_a2:
    'No. No hay fundido cruzado ni transición de DJ. Los clips se encuentran de extremo a extremo. El fundido cruzado es otro trabajo.',
  tool_join_audio_files_in_order_faq_q3: '¿Puedo cambiar el orden de unión?',
  tool_join_audio_files_in_order_faq_a3:
    'Sí. Usa Subir y Bajar en cada fila, o Quitar un clip y añadirlo de nuevo. Unir siempre sigue la lista de arriba abajo.',
  tool_join_audio_files_in_order_faq_q4: '¿Y si los archivos tienen distinta frecuencia de muestreo?',
  tool_join_audio_files_in_order_faq_a4:
    'Los clips posteriores se alinean a la frecuencia del primero antes de concatenar. Los canales se mantienen en mono o estéreo.',
  tool_join_audio_files_in_order_faq_q5: '¿Se sube mi audio a un servidor?',
  tool_join_audio_files_in_order_faq_a5:
    'No. Lectura, decodificación y escritura corren en tu navegador en el dispositivo. La página necesita red al cargar; no se garantiza el uso sin conexión.',
  tool_join_audio_files_in_order_faq_q6: '¿Puedo unir audio extraído de un vídeo?',
  tool_join_audio_files_in_order_faq_a6:
    'Extrae primero la pista con Extraer audio de un archivo de vídeo y luego añade el audio exportado aquí. Esta página no acepta contenedores de vídeo como entradas de unión.',
};
export default es;
