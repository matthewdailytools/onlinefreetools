import type { SiteLangDict } from '../../../types';

/**
 * Spanish (es) copy for make-srt-subtitles-from-a-video-file.
 * Local search: video a srt / subtítulos desde video / generar srt de vídeo.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: sin subir al servidor; files stay on the device.
 */
const es: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'Crear subtítulos SRT desde un archivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'Convierte un vídeo local con diálogo en pistas .srt con tiempos usando Whisper en el dispositivo: los archivos no salen del equipo y no se suben al servidor.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'Crea subtítulos SRT con tiempos desde un archivo de vídeo local en el navegador con Whisper en el dispositivo: los archivos permanecen en tu equipo y no se suben al servidor. Pasos: elige un vídeo con diálogo, reprodúcelo para revisar el clip, idioma (o auto), Crear SRT, edita las pistas y descarga el .srt. Ejemplo: Cargar muestra pasa un MP4 hablado corto por Whisper. La primera vez descarga unos 45 MB (luego se cachea). WAV/MP3 solo de audio van en Crear subtítulos SRT desde un archivo de audio. No incrusta subtítulos; los tiempos salen de segmentos de Whisper.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'Quien busca «video a srt» o «generar srt de vídeo» quiere un archivo de subtítulos con tiempos desde metraje local—no una página de notas de voz. Esta herramienta ejecuta Whisper tiny en el dispositivo con scripts del mismo origen: decodifica la pista de audio del vídeo en la pestaña, muestra una vista previa para contrastar diálogo y imagen, obtiene marcas de segmento, formatea SRT editable y descarga. Los archivos solo de audio se rechazan con enlace claro a Crear subtítulos SRT desde un archivo de audio. Aquí no hay micrófono. La primera vez descarga unos 45 MB y los cachea. Los tiempos son límites de segmento de Whisper, no alineación fotograma a fotograma, y no incrusta subtítulos en el vídeo.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'Elegir un archivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'MP4, WebM, MOV u otro vídeo que el navegador pueda decodificar—hasta unos 120 MiB y unas 2 horas tras decodificar. Debe incluir una pista de audio usable. Clips largos van por ventanas deslizantes (ventana n de N; Detener guarda SRT parcial si hay cues). El audio puro pertenece a la herramienta SRT de audio relacionada.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'Idioma del habla',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'Auto deja que Whisper detecte el idioma en la pista. Elige uno si lo conoces para pistas más estables.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'Detección automática',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'Inglés',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'Chino',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'Español',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'Japonés',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'Alemán',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'Francés',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'Portugués',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'Indonesio',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'Árabe',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'Ruso',
  tool_make_srt_subtitles_from_a_video_file_convert: 'Crear SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: 'Detener',
  tool_make_srt_subtitles_from_a_video_file_download: 'Descargar SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: 'Cargar muestra',
  tool_make_srt_subtitles_from_a_video_file_clear: 'Borrar',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'Reproducir vídeo original',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'Límites honestos',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny corre en esta pestaña desde /vendor/whisper del mismo origen. El primer Crear SRT descarga unos 45 MB una vez y reutiliza la caché. Clips largos usan ventanas (~2 minutos). Los tiempos siguen segmentos de Whisper—no alineación fotograma a fotograma. Solo acepta vídeo y no incrusta subtítulos. Para notas de voz sin imagen, usa la herramienta SRT de audio relacionada.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'Progreso de subtítulos',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'Progreso de subtítulos',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'Listo. Siguiente: edita las pistas si hace falta y pulsa Descargar SRT.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'No se pudo terminar el SRT',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    'Prueba otro vídeo, un clip más corto o Cargar muestra. Los archivos no salen del dispositivo.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'Descargando {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'Empezando…',
  tool_make_srt_subtitles_from_a_video_file_model: 'Modelo',
  tool_make_srt_subtitles_from_a_video_file_decode: 'Decodificar',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'Transcribir',
  tool_make_srt_subtitles_from_a_video_file_write: 'Escribir SRT',
  tool_make_srt_subtitles_from_a_video_file_done: 'Listo. Edita el SRT si hace falta y pulsa Descargar SRT.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'No se pudo crear el SRT. Prueba Cargar muestra, un vídeo con habla más clara o un clip de menos de unas 2 horas.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '{s}s transcurridos',
  tool_make_srt_subtitles_from_a_video_file_preview: 'Vista previa SRT',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} pistas · {chars} caracteres',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'Elige un vídeo local con habla en la pista de audio.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'Aún no hay SRT. Suelta un vídeo con diálogo y pulsa Crear SRT. Cargar muestra pasa un MP4 hablado corto por Whisper en el dispositivo. Reproduce la vista previa para contrastar imagen y pistas. Los archivos no salen del dispositivo.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'Vídeo: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'Cargando modelo Whisper en el dispositivo (la primera vez puede descargar ~45 MB)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'Decodificando la pista de audio del vídeo en esta pestaña…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Transcribiendo con Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'Transcribiendo ventana {n} de {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'Escribiendo pistas SRT con tiempos…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'Detenido. Se guardó SRT parcial si ya había pistas.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'Elige un archivo de vídeo local, o usa Cargar muestra.',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    'Tipo no admitido. Usa un contenedor de vídeo habitual que el navegador pueda decodificar (por ejemplo MP4 o WebM) con pista de audio.',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'Usa vídeo de hasta unos 120 MiB y unas 2 horas tras decodificar. Clips muy largos en móviles con poca memoria pueden fallar—recorta o comprime antes.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'El navegador no pudo decodificar una pista de audio usable de este vídeo. Vídeo mudo, sin audio o códec no admitido fallan aquí.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio necesario para esta ruta no está disponible en este navegador.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper no produjo texto de habla usable. Prueba otro clip o idioma.',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'No se pudo cargar el modelo Whisper en el dispositivo desde este sitio. Mantén la conexión para la primera descarga y reintenta.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'Esta página solo acepta archivos de vídeo. Para WAV, MP3 u otro habla solo de audio, usa Crear subtítulos SRT desde un archivo de audio.',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'Cómo crear subtítulos SRT desde un archivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'Elige un vídeo local con habla, previsualiza el clip, ejecuta Whisper en el dispositivo para pistas con tiempos, edita el SRT y descarga.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'Elige un archivo de vídeo local (o Cargar muestra) y selecciona Detección automática o un idioma del habla.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    'Reproduce el vídeo original si quieres contrastar diálogo e imagen, luego pulsa Crear SRT.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'Mira la tarjeta de progreso: Modelo, Decodificar, Transcribir (ventana n de N en archivos largos), luego Escribir SRT. Detener cancela y guarda SRT parcial si es posible.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'Edita la vista previa SRT si hace falta y pulsa Descargar SRT.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'Por qué usar Crear subtítulos SRT desde un archivo de vídeo',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'Enfoque vídeo: previsualizas el clip en la página y sacas .srt de la pista con Whisper en el dispositivo—el metraje no se sube a nuestros servidores para ASR.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'Separación clara de la herramienta SRT de audio: esta página rechaza audio puro y no tiene micrófono, así quien busca vídeo a srt no cae en una UI de notas de voz.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'Coste de primera ejecución honesto (~45 MB una vez) y HUD con progreso de ventanas deslizantes en metraje largo.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'Solo .srt editable al lado—no quemado en el vídeo. Herramientas relacionadas cubren SRT solo de audio y vídeo de forma de onda.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'Reglas SRT y límites de Whisper con vídeo',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny corre en el navegador desde activos del mismo origen. El navegador debe decodificar una pista de audio usable del vídeo. Los topes de tamaño y duración mantienen la pestaña usable.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'Solo contenedores de vídeo (por ejemplo MP4, WebM, MOV). El audio puro debe usar la página SRT de audio relacionada.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'Unos 120 MiB y unas 2 horas tras decodificar, transcritos en ventanas deslizantes. Archivos más largos o pesados muestran un error de límite claro.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'Las marcas de tiempo son límites de segmento de Whisper—útiles para reproductores, no alineación fotograma a fotograma con cortes de imagen.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Tu vídeo permanece en el dispositivo para Whisper. Esta página no incrusta subtítulos en el archivo ni descarga subtítulos de plataformas de vídeo.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'Prueba el clip de vídeo de muestra',
  tool_make_srt_subtitles_from_a_video_file_example:
    'Cargar muestra obtiene un MP4 hablado corto, ejecuta Crear SRT con Whisper en el dispositivo y rellena la vista previa. La página no lanza la muestra al abrir, para que la primera descarga de ~45 MB no afecte a cada visitante.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'Cuándo ayuda',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'Tienes una entrevista, talking-head o grabación de pantalla en MP4 local y necesitas un .srt descargable para un reproductor o editor.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'Quieres subtitular un vídeo sin subir el metraje a un sitio ASR en la nube, y necesitas previsualizar la imagen al revisar las pistas.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'Ya exportaste un MP4/WebM desde cámara o editor y necesitas un SRT inicial para revisar antes de publicar.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: '¿Puedo usar WAV o MP3 aquí?',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'No. El audio puro se rechaza para no mezclar a quien busca vídeo a srt en una UI de audio. Abre Crear subtítulos SRT desde un archivo de audio para WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: '¿Es Whisper en el dispositivo o una subida a la nube?',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'Crear SRT ejecuta Whisper tiny en el dispositivo desde archivos vendor del mismo origen. Tu vídeo permanece en el equipo y no se sube a nuestros servidores para reconocimiento.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: '¿Por qué el primer Crear SRT es lento o grande?',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'La primera ejecución descarga unos 45 MB de modelo Whisper tiny y WASM de este sitio a la caché del navegador. Después se reutiliza. Vídeos largos muestran Transcribir como ventana n de N; Detener puede cancelar y guardar un SRT parcial.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: '¿En qué se diferencia de Crear subtítulos SRT desde un archivo de audio?',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'Esa herramienta relacionada es para notas de voz y otros archivos de audio primero (y dictado opcional por micrófono). Esta página es para vídeo: vista previa, lista solo de vídeo y redacción vídeo a srt. El mismo motor Whisper en el dispositivo por debajo.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: '¿Qué tan precisas son las marcas de tiempo del SRT?',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'Siguen el inicio y fin de segmentos de Whisper en la pista—suficiente para la mayoría de reproductores, no sincronización fotograma a fotograma con cada corte de imagen.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: '¿Puede incrustar subtítulos en el vídeo o bajarlos de YouTube?',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'No. Solo descarga un .srt al lado. Tampoco obtiene subtítulos automáticos de YouTube u otras plataformas.',
};
export default es;
