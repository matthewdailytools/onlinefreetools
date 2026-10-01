import type { SiteLangDict } from '../../../types';

/**
 * Español: extraer audio de un archivo MKV.
 * Honestidad D1: fallback MediaElement ~500 MiB / 4 h; MKV multi‑GiB o DDP/Atmos → ffmpeg en el PC a MP4 AAC estéreo, luego la página de extracción MP4.
 * Mismo conjunto de claves que el master en inglés; redacción nativa, no calco del inglés.
 */
const es: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'Extraer audio de un archivo MKV',
  tool_extract_audio_from_an_mkv_file_desc:
    'Extrae audio de un MKV local a WAV o MP3 en el navegador cuando el archivo cabe en la ruta fallback (~500 MiB / 4 h). MKV de varios GiB o con DDP/Atmos: convierte primero a MP4 AAC en tu PC y usa «Extraer audio de un archivo MP4».',
  tool_extract_audio_from_an_mkv_file_description:
    'Extrae la pista de audio de un MKV local en el navegador y descarga WAV o MP3. Pasos: elegir MKV → Extraer → escuchar → descargar. Ejemplo: Cargar muestra genera un sustituto sintético corto si MediaRecorder funciona—mejor un .mkv real por debajo de ~500 MiB. Esta página usa fallback MediaElement (~500 MiB / 4 h); archivos mayores fallan al instante con err_container. MKV multi‑GiB o pistas Dolby Digital Plus / Atmos (E-AC-3) no van aquí—en el ordenador, ffmpeg a MP4 AAC estéreo (vídeo puede copiarse), luego «Extraer audio de un archivo MP4» para demux grande. Solo local—no descarga por URL de YouTube. Sin subir al servidor. ¿Muchos MKV? «Extraer audio de archivos MKV por lotes».',
  tool_extract_audio_from_an_mkv_file_article:
    'Grabaciones de pantalla suelen llegar en MKV. Esta página solo acepta .mkv, usa la ruta fallback compartida y escribe WAV o MP3 sin subir. No promete demux ISOBMFF ni streaming OPFS multi‑GiB—eso es MP4/MOV con AAC. Tampoco decodifica E-AC-3 / DTS en el navegador. Si es un rip multi‑GiB o Atmos, convierte en el dispositivo con ffmpeg a MP4 AAC y pasa a la landing MP4. Carpetas mixtas: hub de vídeo o lote del hub.',
  tool_extract_audio_from_an_mkv_file_choose: 'Elegir un archivo MKV',
  tool_extract_audio_from_an_mkv_file_hint:
    'Suelta un .mkv local de hasta ~500 MiB / 4 h. Más grande o DDP/Atmos: en el PC ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, luego «Extraer audio de un archivo MP4».',
  tool_extract_audio_from_an_mkv_file_convert: 'Extraer',
  tool_extract_audio_from_an_mkv_file_download: 'Descargar',
  tool_extract_audio_from_an_mkv_file_download_wav: 'Descargar WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'Descargar MP3',
  tool_extract_audio_from_an_mkv_file_sample: 'Cargar muestra',
  tool_extract_audio_from_an_mkv_file_clear: 'Borrar',
  tool_extract_audio_from_an_mkv_file_advanced: 'Formato de exportación',
  tool_extract_audio_from_an_mkv_file_format_label: 'Formato de salida',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16 bits)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'Bitrate MP3',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'WAV por defecto vale para MKV cortos. Clips largos pueden ir a MP3 por streaming. El tope es el fallback (~500 MiB), no demux MP4. Sin URL.',
  tool_extract_audio_from_an_mkv_file_progress: 'Progreso de extracción',
  tool_extract_audio_from_an_mkv_file_read: 'Leer',
  tool_extract_audio_from_an_mkv_file_decode: 'Decodificar',
  tool_extract_audio_from_an_mkv_file_extract: 'Extraer',
  tool_extract_audio_from_an_mkv_file_write: 'Escribir',
  tool_extract_audio_from_an_mkv_file_done: 'Listo. Escucha el audio y descarga WAV o MP3.',
  tool_extract_audio_from_an_mkv_file_failed:
    'La extracción falló. Prueba un MKV más pequeño o convierte antes a MP4 AAC con ffmpeg.',
  tool_extract_audio_from_an_mkv_file_elapsed: '{s}s transcurridos',
  tool_extract_audio_from_an_mkv_file_preview: 'Escuchar el audio extraído',
  tool_extract_audio_from_an_mkv_file_result: '{seconds}s · {channels} ch · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: 'demo-mkv-audio-corto',
  tool_extract_audio_from_an_mkv_file_empty: 'Elige un MKV o carga la muestra primero.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'Sin archivo. Suelta un .mkv local de hasta ~500 MiB o Cargar muestra. Multi‑GiB / DDP: convierte antes a MP4 AAC con ffmpeg. No YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'Suelta exactamente un archivo MKV.',
  tool_extract_audio_from_an_mkv_file_err_format: 'Archivo no admitido. En esta página solo .mkv.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'Este MKV supera el tope de tamaño o duración de la ruta fallback.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'Este MKV supera el tope fallback (~500 MiB / 4 h) o no se decodifica aquí. En el ordenador: ffmpeg a MP4 AAC estéreo (copiar vídeo), luego «Extraer audio de un archivo MP4»—o usa un MKV más pequeño.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'El códec de audio de este MKV no está soportado en el navegador (a menudo E-AC-3 / DDP / Atmos). Convierte a AAC dentro de un MP4 con ffmpeg y usa la página de extracción MP4.',
  tool_extract_audio_from_an_mkv_file_err_channels:
    'La pista usa un layout de canales que el extractor no puede tratar. Mezcla a AAC estéreo en MP4 primero.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'El navegador no pudo decodificar audio de este MKV.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'No se pudo escribir el audio. Intenta Extraer de nuevo.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'No se pudo crear la muestra MKV. Suelta tu propio .mkv.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'Este navegador no tiene Web Audio necesario para extraer.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'No se capturaron muestras de audio útiles.',
  tool_extract_audio_from_an_mkv_file_stop: 'Detener',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'Detenido. No se guarda audio parcial.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'Entrada larga/grande usó MP3 por streaming en la ruta fallback.',
  tool_extract_audio_from_an_mkv_file_how_title: 'Cómo extraer audio de un archivo MKV',
  tool_extract_audio_from_an_mkv_file_how_body:
    'MKV local pequeño: soltar, Extraer, descargar. Multi‑GiB o DDP/Atmos: convierte primero a MP4 AAC con ffmpeg en tu dispositivo, luego la herramienta MP4.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'Elige un .mkv local de hasta ~500 MiB o Cargar muestra si MediaRecorder funciona. Si el archivo es multi‑GiB o DDP/Atmos, para aquí y convierte con ffmpeg primero.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'Abre Formato de exportación y elige WAV o MP3; ajusta bitrate si hace falta.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'Pulsa Extraer y espera Leer → Decodificar → Extraer → Escribir (o Detener).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'Escucha y luego Descargar WAV o Descargar MP3.',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'Por qué usar «Extraer audio de un archivo MKV»',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1:
    'Solo MKV para que archivos Matroska no se mezclen con landings MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2:
    'Topes fallback honestos—sin marketing falso de demux 5 GiB para MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3:
    'Ruta clara para archivos grandes/DDP: ffmpeg en el PC → MP4 AAC → página de extracción MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'El procesamiento queda en tu dispositivo; Detener cancela a mitad.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'Solo MKV y límites fallback',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'Un MKV local por ejecución en fallback MediaElement. No es YouTube a MP3. No exporta vídeo mudo. MKV grandes o con códec raro necesitan MP4 AAC en el dispositivo primero.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    '~500 MiB / 4 h fallback. Si pasas el tope → err_container. Demux grande solo MP4/MOV hoy.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'Sin URL ni descarga de YouTube.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS suelen fallar con err_codec. Ejemplo en el PC: ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 y luego «Extraer audio de un archivo MP4».',
  tool_extract_audio_from_an_mkv_file_rules_item_4: 'El MKV original no se sobrescribe. Lotes MKV en la herramienta batch MKV.',
  tool_extract_audio_from_an_mkv_file_example_title: 'Prueba una extracción MKV real',
  tool_extract_audio_from_an_mkv_file_example:
    'Cargar muestra crea un sustituto sintético corto cuando MediaRecorder funciona y luego Extraer. Mejor tu .mkv bajo el tope fallback. Rips multi‑GiB: convierte a MP4 AAC con ffmpeg y usa la página MP4.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'Cuándo ayuda',
  tool_extract_audio_from_an_mkv_file_usecase_1:
    'Captura MKV del navegador bajo ~500 MiB → MP3 compartible sin subir.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'Un clip MKV de entrevista solo necesita la pista de audio en WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'Sabes que es MKV enorme o DDP—convierte localmente a MP4 AAC y usa la herramienta MP4 en lugar de esta página.',
  tool_extract_audio_from_an_mkv_file_faq_q1: '¿Puedo pegar una URL de YouTube?',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'No. Solo .mkv local.',
  tool_extract_audio_from_an_mkv_file_faq_q2: '¿Por qué no 5 GiB como la página MP4?',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'El demux grande hoy es ISOBMFF (MP4/MOV). MKV usa fallback MediaElement ~500 MiB hasta que exista demux Matroska.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'Mi MKV es multi‑GiB o Dolby Atmos / DDP—¿qué hago?',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'Esta página lo rechazará (err_container y/o err_codec). En el ordenador, convierte a MP4 AAC estéreo, por ejemplo: ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. Luego abre «Extraer audio de un archivo MP4» para la ruta de demux grande. Un remux puro sin AAC sigue fallando si la pista sigue siendo E-AC-3.',
  tool_extract_audio_from_an_mkv_file_faq_q4: '¿Silencia el MKV (vídeo mudo)?',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'No. Solo extrae audio a WAV/MP3.',
  tool_extract_audio_from_an_mkv_file_faq_q5: '¿Se sube mi archivo?',
  tool_extract_audio_from_an_mkv_file_faq_a5:
    'No. Decodificación y escritura en tu navegador. El paso ffmpeg (si hace falta) también queda en tu ordenador.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'Tengo muchos MKV—¿qué página?',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'Carpetas MKV pequeñas: «Extraer audio de archivos MKV por lotes». Archivos enormes o DDP: convierte cada uno a MP4 AAC primero, luego «Extraer audio de archivos MP4 por lotes» o la página MP4 individual.',
  tool_extract_audio_from_an_mkv_file_faq_q7: '¿Recortar después de extraer?',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'No aquí. Descarga y usa «Recorta un clip de audio y expórtalo».',
};
export default es;
