import type { SiteLangDict } from '../../../types';

/**
 * Spanish (es) copy for make-srt-subtitles-from-an-audio-file.
 * Local search: audio a srt / subtítulos desde audio / whisper en el navegador.
 * On-device Whisper tiny; first ~45 MB model download; editable SRT; optional mic.
 * Privacy: sin subir al servidor; files stay on the device. How labels match UI buttons.
 */
const es: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'Crear subtítulos SRT desde un archivo de audio',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'Convierte una grabación local en pistas .srt con tiempos usando Whisper en el dispositivo: los archivos no salen del navegador y no se suben al servidor.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'Genera subtítulos SRT con tiempos a partir de un audio o vídeo local en el navegador con Whisper en el dispositivo: los archivos permanecen en tu equipo y no se suben al servidor. Pasos: elige un archivo de voz, idioma (o auto), Crear SRT, edita las pistas y descarga el .srt. Ejemplo: Cargar muestra pasa un clip corto por Whisper y muestra el SRT. La primera vez descarga unos 45 MB de modelo (luego se cachea). No es una API en la nube; los tiempos salen de los segmentos de Whisper.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'Quien busca «audio a srt» o «subtítulos desde audio» quiere un archivo de subtítulos con tiempos descargable desde una grabación local. Esta herramienta ejecuta Whisper tiny en el dispositivo con scripts del mismo origen: decodifica en la pestaña, obtiene marcas de segmento, formatea SRT editable y descarga. Acepta vídeo con pista de audio si el navegador lo decodifica. «Dictar con micrófono» usa Web Speech solo si está disponible—sin esa API, Crear SRT sigue funcionando. La primera vez descarga unos 45 MB y los cachea. Los tiempos son límites de segmento de Whisper, no alineación fotograma a fotograma, y no incrusta subtítulos en el vídeo.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'Elegir un archivo de voz',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'WAV, MP3, M4A u otro audio que el navegador pueda decodificar—hasta unos 120 MiB y unas 2 horas tras decodificar. Los archivos largos van por ventanas deslizantes (ventana n de N; Detener guarda SRT parcial si hay cues). El vídeo con pista de audio vale si la decodificación funciona; si no, verás un error claro.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'Idioma del habla',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'Auto deja que Whisper detecte el idioma. Elige uno si lo conoces para pistas más estables. El dictado por micrófono usa la misma opción cuando Web Speech está disponible.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'Detección automática',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'Inglés',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'Chino',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'Español',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'Japonés',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'Alemán',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'Francés',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'Portugués',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'Indonesio',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'Árabe',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'Ruso',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'Crear SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'Dictar con micrófono',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'Detener',
  tool_make_srt_subtitles_from_an_audio_file_download: 'Descargar SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'Cargar muestra',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'Borrar',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'Reproducir audio original',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'Límites honestos',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny corre en esta pestaña desde /vendor/whisper del mismo origen. El primer Crear SRT descarga unos 45 MB una vez y reutiliza la caché. Los tiempos siguen segmentos de Whisper—no alineación fotograma a fotograma. El dictado es Web Speech opcional y puede usar el servicio de voz del navegador. Esta herramienta no incrusta subtítulos en el vídeo.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'Progreso de subtítulos',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'Progreso de subtítulos',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: 'Listo. Siguiente: edita las pistas si hace falta y pulsa Descargar SRT.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'No se pudo terminar el SRT',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint:
    'Prueba otro archivo, un clip más corto o Cargar muestra. Los archivos no salen del dispositivo.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'Descargando {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'Iniciando…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'Modelo',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'Decodificar',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'Transcribir',
  tool_make_srt_subtitles_from_an_audio_file_write: 'Escribir SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: 'Listo. Edita el SRT si hace falta y pulsa Descargar SRT.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'No se pudo crear el SRT. Prueba Cargar muestra, una grabación más clara o un clip de menos de unas 2 horas.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '{s}s transcurridos',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'Vista previa SRT',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'Provisional (micrófono)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} pistas · {chars} caracteres',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty:
    'Elige un archivo de voz local, o usa Dictar con micrófono cuando esté disponible.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'Aún no hay SRT. Suelta un archivo de voz y pulsa Crear SRT. Cargar muestra pasa un clip corto por Whisper en el dispositivo. Los archivos no se suben al servidor.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'Medio: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'Dictar con micrófono no está disponible en este navegador (sin Web Speech API). Crear SRT con Whisper sigue funcionando con archivos locales.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'Whisper devolvió poco o ningún texto de voz. Prueba una grabación más clara o elige el idioma hablado.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic:
    'Escuchando el micrófono… habla con claridad y pulsa Detener. Los tiempos usan el tiempo de la sesión.',
  tool_make_srt_subtitles_from_an_audio_file_status_model:
    'Cargando el modelo Whisper en el dispositivo (la primera vez puede descargar ~45 MB)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'Decodificando audio en esta pestaña…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Transcribiendo con Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'Transcribiendo ventana {n} de {total}…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'Detenido. Se conserva el SRT parcial si ya había cues.',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'Escribiendo pistas SRT con tiempos…',
  tool_make_srt_subtitles_from_an_audio_file_err_file: 'Elige un archivo de audio o vídeo local, o usa Cargar muestra.',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    'Tipo de medio no admitido. Usa audio habitual, o vídeo con pista de audio que el navegador pueda decodificar.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit: 'Usa medios de hasta unos 120 MiB y unas 2 horas tras decodificar. En móviles con poca memoria, clips muy largos pueden fallar—recorta o comprime antes.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'El navegador no pudo decodificar este archivo como audio. Un vídeo sin pista usable o un códec no admitido fallan aquí.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported:
    'Las APIs de Web Audio o de voz necesarias para esta vía no están disponibles en este navegador.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'Se denegó el permiso del micrófono. Autorízalo para Dictar con micrófono, o usa Crear SRT con un archivo.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt:
    'Whisper no produjo texto de voz usable. Prueba otro clip o otra opción de idioma.',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'No se pudo cargar el modelo Whisper en el dispositivo desde este sitio. Mantén la conexión para la primera descarga e inténtalo de nuevo.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'Cómo crear subtítulos SRT desde un archivo de audio',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'Elige un archivo de voz local, ejecuta Whisper en el dispositivo para obtener pistas con tiempos, edita la vista previa y descarga el .srt.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1:
    'Elige un archivo de voz local (o Cargar muestra) y selecciona Detección automática o un idioma del habla.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2:
    'Pulsa Crear SRT. Mira la tarjeta de progreso: Modelo, Decodificar, Transcribir y luego Escribir SRT.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3:
    'Opcional: pulsa Dictar con micrófono si el navegador admite Web Speech, habla y luego Detener.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4: 'Edita la vista previa SRT si hace falta y pulsa Descargar SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title: 'Por qué usar Crear subtítulos SRT desde un archivo de audio',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'Whisper tiny en el dispositivo desde archivos vendor del mismo origen—tu grabación no se sube a nuestros servidores para ASR.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Coste inicial claro: unos 45 MB de modelo una sola vez, con tarjeta de progreso Modelo / Decodificar / Transcribir / Escribir SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'Vista previa .srt estándar editable antes de descargar—no solo TXT plano ni incrustado en el vídeo.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'Herramientas cercanas cubren transcripción en texto plano y vídeo de forma de onda sin forzar un editor central.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'Reglas SRT y límites de Whisper en el dispositivo',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'Esta herramienta ejecuta Whisper tiny en el navegador con recursos del mismo origen. Los tiempos vienen de segmentos del modelo. Los topes de tamaño y duración mantienen la pestaña usable.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'La vía principal necesita decodificación Web Audio y la pila Whisper bajo /vendor/whisper. El dictado por micrófono requiere Web Speech y es opcional.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'Unos 120 MiB de tamaño y unas 2 horas tras decodificar, en ventanas deslizantes. Archivos más largos o grandes muestran un error de límite claro; móviles con poca memoria pueden necesitar un clip más corto.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'Las marcas de tiempo son límites de segmento de Whisper—útiles para reproductores, no alineación forzada fotograma a fotograma.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Tu archivo permanece en el dispositivo para Whisper y no se sube al servidor. El dictado opcional puede usar el servicio de voz del navegador—revisa la privacidad del navegador.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'Prueba el clip de voz de muestra',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'Cargar muestra obtiene un WAV hablado corto, ejecuta Crear SRT con Whisper en el dispositivo y rellena la vista previa. La página no lanza la muestra al abrir para no forzar la descarga inicial de ~45 MB a cada visitante.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'Cuándo ayuda',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'Tienes una nota de voz o entrevista en WAV/MP3 y necesitas un .srt descargable para un reproductor o editor.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'Tienes un vídeo corto con pista de audio y quieres subtítulos con tiempos sin subir el archivo a un sitio ASR en la nube.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'Necesitas un SRT inicial de Whisper en el dispositivo para editar antes de publicar, o recurrir a Dictar con micrófono si no tienes archivo.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: '¿Es Whisper local o una subida a la nube?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'Crear SRT ejecuta Whisper tiny en el dispositivo desde archivos vendor del mismo origen. Tu audio o vídeo permanece en el dispositivo y no se sube a nuestros servidores para reconocimiento. Dictar con micrófono (opcional) usa la Web Speech API del navegador, que puede implicar el servicio de voz del fabricante.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: '¿Por qué el primer Crear SRT es lento o grande?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'La primera vez descarga unos 45 MB del modelo Whisper tiny y WASM de este sitio a la caché del navegador. Las siguientes reutilizan esa caché. El progreso aparece en el paso Modelo.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: '¿Qué tan precisos son los tiempos del SRT?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'Siguen el inicio y el fin de cada segmento de Whisper—suficientes para la mayoría de reproductores y editores, no alineación forzada fotograma a fotograma de un flujo de estudio.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: '¿Se sube mi audio a un servidor?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'No en la vía Whisper con archivo: la decodificación y la transcripción ocurren en tu pestaña; los archivos permanecen en el dispositivo y no se suben a nuestros servidores. Solo necesitas conexión para obtener los scripts del modelo la primera vez.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: '¿En qué se diferencia de Transcribir un archivo de audio a texto?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'Esa herramienta relacionada se centra en el texto de transcripción. Esta formatea pistas SRT numeradas con inicio y fin para reproductores y editores que esperan .srt.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: '¿Puede incrustar subtítulos en un archivo de vídeo?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'No. Solo descarga un .srt aparte. Para un vídeo estilo forma de onda desde audio, mira la herramienta relacionada—tampoco son subtítulos quemados.',
};
export default es;
