/**
 * i18n tool shard (make-a-30-second-mp3-ringtone / es).
 * H1 de tarea: tono de llamada MP3 de 30 segundos; creador de tonos se absorbe en FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy en español para recortar una canción a un tono MP3 de unos 30 s. */
const es: SiteLangDict = {
  tool_make_a_30_second_mp3_ringtone_advanced: 'Ajustes avanzados (opcional)',
  tool_make_a_30_second_mp3_ringtone_article:
    'Haz un tono de llamada MP3 de 30 segundos en esta pestaña: abre una canción local, deja unos 30 s, añade fundido de entrada y de salida, pulsa Crear tono y luego Exportar MP3. El archivo no sale del dispositivo. Buscar creador de tonos o tono de llamada es este recorte, no un editor de onda ni un instalador M4R de iPhone.',
  tool_make_a_30_second_mp3_ringtone_bitrate: 'Tasa de bits MP3',
  tool_make_a_30_second_mp3_ringtone_bitrate_hint: '128 kbps por defecto. Solo se usa al pulsar Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_choose_file: 'Elige un archivo de audio',
  tool_make_a_30_second_mp3_ringtone_clear: 'Borrar',
  tool_make_a_30_second_mp3_ringtone_desc:
    'Haz un tono de llamada MP3 de 30 segundos en el dispositivo: recorta una canción local, funde los bordes y exporta MP3, sin subir al servidor.',
  tool_make_a_30_second_mp3_ringtone_description:
    'Haz un tono de llamada MP3 de 30 segundos en el dispositivo: recorta una canción local, aplica fundido de entrada y de salida y descarga MP3; el archivo no se sube al servidor. Pasos: abre el archivo, fija Inicio y Duración (30 s; chips 15 / 20 / 30 / 40), fundido 0,5 s / 1,5 s, Crear tono, Reproducir, Exportar MP3. Ejemplo: desde 1,00 s de un tono de 32 s, 30 s con esos fundidos quedan unos 30,00 s. Creador de tonos, crear tono mp3, ringtone de 30 segundos, cortar canción para tono o tono Android es el mismo trabajo. No es un editor de onda; no escribe M4R de iPhone ni baja YouTube.',
  tool_make_a_30_second_mp3_ringtone_disclaimer:
    'Debes tener derecho a tratar el archivo. Esta página no otorga licencias, no genera M4R y no descarga retransmisiones.',
  tool_make_a_30_second_mp3_ringtone_drop_hint: 'O suelta aquí un WAV, MP3, M4A u OGG. El trabajo queda en esta pestaña.',
  tool_make_a_30_second_mp3_ringtone_duration: 'Duración (segundos)',
  tool_make_a_30_second_mp3_ringtone_duration_hint:
    '30 segundos por defecto. Los chips ponen 15 / 20 / 30 / 40 desde el Inicio actual. Más de 40 s se rechaza.',
  tool_make_a_30_second_mp3_ringtone_empty: 'Elige primero un archivo de audio.',
  tool_make_a_30_second_mp3_ringtone_err_caps:
    'Este archivo supera el tope de este aparato (unos 40 MB / 20 min en escritorio, 20 MB / 8 min en pantalla estrecha). Acórtalo en otro sitio o usa un archivo más corto.',
  tool_make_a_30_second_mp3_ringtone_err_decode:
    'Este navegador no pudo decodificar el archivo. Prueba WAV o MP3, o un clip sin DRM.',
  tool_make_a_30_second_mp3_ringtone_err_empty: 'No hay material para el tono. Carga un archivo o el ejemplo.',
  tool_make_a_30_second_mp3_ringtone_err_fade:
    'La suma de fundidos debe ser menor que la Duración. Baja los fundidos o alarga el tramo.',
  tool_make_a_30_second_mp3_ringtone_err_lame:
    'No se pudo cargar el codificador MP3. Quédate en esta pestaña y vuelve a pulsar Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_err_long:
    'El tono no puede durar más de 40 segundos. Acorta Duración o mueve Inicio.',
  tool_make_a_30_second_mp3_ringtone_err_range: 'La duración debe quedar después de Inicio, dentro del archivo decodificado.',
  tool_make_a_30_second_mp3_ringtone_err_video:
    'Esta página no acepta vídeo como entrada principal. Extrae el audio y luego haz el tono con el sonido.',
  tool_make_a_30_second_mp3_ringtone_example:
    'Cargar ejemplo crea un tono de 32,00 s, Inicio 1,00 y Duración 30, fundido 0,5 s / 1,5 s; Crear tono deja unos 30,00 s. Exportar MP3 usa 128 kbps salvo que cambies los ajustes avanzados.',
  tool_make_a_30_second_mp3_ringtone_example_title: 'Ejemplo',
  tool_make_a_30_second_mp3_ringtone_export_mp3: 'Exportar MP3',
  tool_make_a_30_second_mp3_ringtone_fade_hint:
    'Fundido de entrada 0,5 s y de salida 1,5 s por defecto, para que el estribillo no corte en seco. Ganancia lineal; no acorta el archivo.',
  tool_make_a_30_second_mp3_ringtone_fade_in: 'Fundido de entrada (s)',
  tool_make_a_30_second_mp3_ringtone_fade_out: 'Fundido de salida (s)',
  tool_make_a_30_second_mp3_ringtone_faq_a1:
    'No. La decodificación y los fundidos ocurren en esta pestaña. Los scripts salen de este sitio. El archivo no se envía a nuestros servidores.',
  tool_make_a_30_second_mp3_ringtone_faq_a2:
    'No. Creador de tonos, tono de llamada, crear tono mp3, cortar canción para tono o ringtone de 30 segundos es esta herramienta: deja unos 30 s, funde los bordes y Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_faq_a3:
    'Treinta segundos es lo que la gente espera de un tono. También hay 15, 20 y 40 s. Más de 40 s se rechaza para no convertirlo en un recorte largo cualquiera.',
  tool_make_a_30_second_mp3_ringtone_faq_a4:
    'Son rampas lineales de volumen sobre el tramo. Por defecto 0,5 s al empezar y 1,5 s al terminar. Cambian la sonoridad, no la duración exportada. Juntos deben ser más cortos que Duración.',
  tool_make_a_30_second_mp3_ringtone_faq_a5:
    'Solo sale MP3 (128 kbps por defecto). No escribe M4R ni M4A. En Android el MP3 sirve como tono. En iPhone hace falta GarageBand o Finder; el navegador no instala el tono del sistema.',
  tool_make_a_30_second_mp3_ringtone_faq_a6:
    'En Android descarga el MP3, cópialo a la carpeta de tonos o elígelo en Ajustes → Sonido. Samsung usa el mismo archivo.',
  tool_make_a_30_second_mp3_ringtone_faq_a7:
    'No. Recortar a cualquier duración es otra página. Un bucle sin costura es un fundido cruzado de cola a cabeza, no este tono. Tampoco es un editor de sonido ni baja YouTube.',
  tool_make_a_30_second_mp3_ringtone_faq_a8:
    'Escritorio: unos 40 MB o 20 minutos. Pantalla estrecha: unos 20 MB o 8 minutos. El exceso se rechaza antes de decodificar. El tramo del tono no puede pasar de 40 s.',
  tool_make_a_30_second_mp3_ringtone_faq_q1: '¿Se sube mi audio?',
  tool_make_a_30_second_mp3_ringtone_faq_q2:
    'Busqué creador de tonos, tono de llamada o cortar canción para tono. ¿Es otra herramienta?',
  tool_make_a_30_second_mp3_ringtone_faq_q3: '¿Por qué el tono dura 30 segundos por defecto?',
  tool_make_a_30_second_mp3_ringtone_faq_q4: '¿Cómo funcionan los fundidos del tono?',
  tool_make_a_30_second_mp3_ringtone_faq_q5: '¿Puedo sacar un tono M4R para iPhone?',
  tool_make_a_30_second_mp3_ringtone_faq_q6: '¿Cómo pongo este MP3 como tono en Android o Samsung?',
  tool_make_a_30_second_mp3_ringtone_faq_q7: '¿Esto recorta audio, hace un bucle o es un editor?',
  tool_make_a_30_second_mp3_ringtone_faq_q8: '¿De qué tamaño puede ser el archivo?',
  tool_make_a_30_second_mp3_ringtone_how_body:
    'Deja unos 30 segundos de una canción local, funde los bordes para que el estribillo no corte en seco y descarga MP3 sin subir el archivo.',
  tool_make_a_30_second_mp3_ringtone_how_item_1: 'Abre un archivo de audio (o pulsa Cargar ejemplo).',
  tool_make_a_30_second_mp3_ringtone_how_item_2:
    'Arrastra la forma de onda o escribe Inicio y Duración (30 s; chips 15 / 20 / 30 / 40). Cambia el fundido de entrada / salida si 0,5 s / 1,5 s no encajan.',
  tool_make_a_30_second_mp3_ringtone_how_item_3: 'Pulsa Crear tono.',
  tool_make_a_30_second_mp3_ringtone_how_item_4: 'Pulsa Reproducir para oírlo en bucle y luego Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_how_title: 'Cómo funciona',
  tool_make_a_30_second_mp3_ringtone_hud_decode: 'Decodificando el archivo en esta pestaña…',
  tool_make_a_30_second_mp3_ringtone_hud_decoded: 'Decodificado. Ajusta Inicio, Duración y fundidos y pulsa Crear tono.',
  tool_make_a_30_second_mp3_ringtone_hud_elapsed_tpl: '{s} s transcurridos',
  tool_make_a_30_second_mp3_ringtone_hud_encode: 'Codificando MP3…',
  tool_make_a_30_second_mp3_ringtone_hud_fail_hint: 'Corrige el archivo, los tiempos o los fundidos y vuelve a Crear tono.',
  tool_make_a_30_second_mp3_ringtone_hud_fail_title: 'Crear tono se detuvo',
  tool_make_a_30_second_mp3_ringtone_hud_fade: 'Aplicando fundidos…',
  tool_make_a_30_second_mp3_ringtone_hud_next: 'Listo. Siguiente: Reproducir el tono y luego Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_hud_next_mp3: 'Listo. Debería empezar la descarga MP3.',
  tool_make_a_30_second_mp3_ringtone_hud_pct_tpl: '{pct} %',
  tool_make_a_30_second_mp3_ringtone_hud_step_decode: 'Decodificar',
  tool_make_a_30_second_mp3_ringtone_hud_step_encode: 'Codificar',
  tool_make_a_30_second_mp3_ringtone_hud_step_fade: 'Fundir',
  tool_make_a_30_second_mp3_ringtone_hud_title: 'Progreso del tono',
  tool_make_a_30_second_mp3_ringtone_hud_working: 'Empezando…',
  tool_make_a_30_second_mp3_ringtone_make: 'Crear tono',
  tool_make_a_30_second_mp3_ringtone_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_make_a_30_second_mp3_ringtone_pause: 'Pausa',
  tool_make_a_30_second_mp3_ringtone_play: 'Reproducir',
  tool_make_a_30_second_mp3_ringtone_preview_hint:
    'Pulsa o arrastra la forma de onda para fijar Inicio y Duración. Tras Crear tono, Reproducir repite el clip fundido como si sonara el teléfono.',
  tool_make_a_30_second_mp3_ringtone_result_tpl:
    'El tono dura {dur}s ({start}–{end}s) con entrada {fadeIn}s y salida {fadeOut}s. Ya puedes Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_rules_body:
    'Se copia el tramo Inicio + Duración (máximo 40 s). Los fundidos lineales solo cambian la ganancia; la duración exportada es la del tramo. El MP3 es CBR al pulsar Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_rules_item_1:
    'Tope de escritorio: unos 40 MB o 20 minutos; pantalla estrecha: unos 20 MB o 8 minutos. El exceso se rechaza. El tramo del tono no pasa de 40 s.',
  tool_make_a_30_second_mp3_ringtone_rules_item_2:
    'Los archivos se quedan en el dispositivo; no se suben al servidor. El codificador MP3 carga desde este sitio solo tras Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_rules_item_3:
    'Duración por defecto: 30 s. 0,5 s de entrada más 1,5 s de salida deben sumar menos que Duración. Los fundidos no acortan el archivo.',
  tool_make_a_30_second_mp3_ringtone_rules_item_4:
    'La decodificación depende del navegador. DRM, algunos códecs y contenedores de vídeo fallan con un error explícito.',
  tool_make_a_30_second_mp3_ringtone_rules_item_5:
    'No escribe M4R/M4A, no instala el tono en iPhone, no recorta sin el tope de 40 s, no hace un bucle sin costura ni baja YouTube. Un archivo, una ventana, un MP3.',
  tool_make_a_30_second_mp3_ringtone_rules_title: 'Reglas que debes esperar',
  tool_make_a_30_second_mp3_ringtone_sample: 'Cargar ejemplo',
  tool_make_a_30_second_mp3_ringtone_start: 'Inicio (segundos)',
  tool_make_a_30_second_mp3_ringtone_status_done: 'Hecho.',
  tool_make_a_30_second_mp3_ringtone_title: 'Haz un tono de llamada MP3 de 30 segundos',
  tool_make_a_30_second_mp3_ringtone_usecase_1:
    'Recorta el estribillo de una canción tuya a un tono MP3 de 30 s y asígnalo en Android o Samsung.',
  tool_make_a_30_second_mp3_ringtone_usecase_2:
    'Haz un aviso o alarma más corto con el chip de 15 o 20 s, deja el fundido de salida y Exportar MP3.',
  tool_make_a_30_second_mp3_ringtone_usecase_3:
    'Exporta el MP3 y, si aún quieres un tono de iPhone, llévalo a GarageBand; esta página no escribe M4R.',
  tool_make_a_30_second_mp3_ringtone_usecases_title: 'Cuándo encaja',
  tool_make_a_30_second_mp3_ringtone_why_choose_body:
    'Hecha para un solo MP3 de duración de tono, con fundidos audibles y un tope de 40 s visible en la página.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_1:
    'La decodificación y los fundidos se quedan en esta pestaña; Exportar MP3 es la primera carga del codificador.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_2:
    'La duración por defecto es 30 s, con chips 15 / 20 / 40; más de 40 s se rechaza.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_3:
    'El fundido 0,5 s / 1,5 s está en la primera pantalla, así el corte en seco no es el valor por defecto.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_4:
    'La página no finge escribir M4R ni instalar el tono de iPhone desde el navegador.',
  tool_make_a_30_second_mp3_ringtone_why_choose_title: 'Por qué usar Haz un tono de llamada MP3 de 30 segundos',
  tool_make_a_30_second_mp3_ringtone_zerocross: 'Ajustar los bordes a un cruce por cero cercano',
  tool_make_a_30_second_mp3_ringtone_zerocross_hint:
    'Activado por defecto. Suaviza el corte antes de los fundidos. Desactívalo si quieres precisión de muestra.',
};
export default es;
