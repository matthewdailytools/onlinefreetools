/**
 * i18n tool shard (make-a-seamless-audio-loop / es).
 * H1 de tarea: bucle sin costura; looper / fundido cruzado se absorben en FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy en español para crear un bucle de audio sin costura. */
const es: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'Ajustes avanzados (opcional)',
  tool_make_a_seamless_audio_loop_article:
    'Haz un bucle de audio sin costura en esta pestaña: abre un archivo local, marca Inicio y Fin, ajusta el fundido cruzado, pulsa Crear bucle y luego Exportar WAV o Exportar MP3. El final se mezcla con el principio para que el empalme no chasquee. El archivo no sale del dispositivo ni se sube al servidor.',
  tool_make_a_seamless_audio_loop_bitrate: 'Tasa de bits MP3',
  tool_make_a_seamless_audio_loop_bitrate_hint: '128 kbps por defecto. Solo se usa al pulsar Exportar MP3.',
  tool_make_a_seamless_audio_loop_choose_file: 'Elige un archivo de audio',
  tool_make_a_seamless_audio_loop_clear: 'Borrar',
  tool_make_a_seamless_audio_loop_crossfade: 'Fundido cruzado (ms)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    '50 ms por defecto. 20 ms para baterías; 200–500 ms para pads, drones y camas ambientales.',
  tool_make_a_seamless_audio_loop_desc:
    'Haz un bucle de audio sin costura en el dispositivo: funde el final de un clip local con el inicio y exporta WAV o MP3, sin subir al servidor.',
  tool_make_a_seamless_audio_loop_description:
    'Haz un bucle de audio sin costura en el dispositivo: aplica un fundido cruzado del final al inicio de un clip local y descarga WAV o MP3; el archivo no se sube al servidor. Pasos: abre el archivo, marca Inicio y Fin, ajusta el fundido (50 ms), Crear bucle, Reproducir para oír el empalme, Exportar WAV o Exportar MP3. Ejemplo: 1,00–3,00 s de un tono de 5 s con 50 ms de envolvente de potencia igual queda en unos 1,95 s. Loop de audio, audio en bucle, looper, loop maker o fundido cruzado es el mismo trabajo. No es un editor de onda; no cruza dos canciones distintas ni baja YouTube.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'Debes tener derecho a tratar el archivo. Esta página no otorga licencias musicales ni descarga retransmisiones.',
  tool_make_a_seamless_audio_loop_drop_hint: 'O suelta aquí un WAV, MP3, M4A u OGG. El trabajo queda en esta pestaña.',
  tool_make_a_seamless_audio_loop_empty: 'Elige primero un archivo de audio.',
  tool_make_a_seamless_audio_loop_end: 'Fin (segundos)',
  tool_make_a_seamless_audio_loop_equal_power: 'Fundido de potencia igual',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'Activado por defecto para que el empalme no baje de volumen. Desactívalo para una mezcla lineal.',
  tool_make_a_seamless_audio_loop_err_bake:
    'El archivo horneado superaría unos 3 minutos. Baja Repeticiones o acorta el tramo.',
  tool_make_a_seamless_audio_loop_err_caps:
    'Este archivo supera el tope de este aparato (unos 40 MB / 20 min en escritorio, 20 MB / 8 min en pantalla estrecha). Acórtalo en otro sitio o usa un archivo más corto.',
  tool_make_a_seamless_audio_loop_err_decode:
    'Este navegador no pudo decodificar el archivo. Prueba WAV o MP3, o un clip sin DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'No hay nada que ciclar. Carga un archivo o el ejemplo.',
  tool_make_a_seamless_audio_loop_err_fade:
    'El fundido cruzado debe ser más corto que el tramo. Baja los milisegundos o alarga Inicio–Fin.',
  tool_make_a_seamless_audio_loop_err_lame:
    'El codificador MP3 no cargó. Quédate en esta pestaña y pulsa Exportar MP3 otra vez.',
  tool_make_a_seamless_audio_loop_err_range: 'Fin debe ir después de Inicio, dentro de la duración decodificada.',
  tool_make_a_seamless_audio_loop_err_video:
    'Esta página no admite vídeo como entrada principal. Extrae el audio y luego crea el bucle.',
  tool_make_a_seamless_audio_loop_example:
    'Cargar ejemplo genera un tono de 5,00 s, marca Inicio 1,00 y Fin 3,00, usa 50 ms de potencia igual y Crear bucle deja unos 1,95 s (un ciclo). Exportar WAV escribe PCM; Exportar MP3 usa 128 kbps salvo que cambies los ajustes avanzados.',
  tool_make_a_seamless_audio_loop_example_title: 'Ejemplo',
  tool_make_a_seamless_audio_loop_export_mp3: 'Exportar MP3',
  tool_make_a_seamless_audio_loop_export_wav: 'Exportar WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    'No. La decodificación y el envolvente ocurren en esta pestaña. Los scripts salen de este sitio. El archivo no se envía a nuestros servidores.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'No. Un looper de audio, loop maker, bucle de audio, audio en bucle o loop de mp3 es esta misma página: marcas un tramo, fundes el empalme y exportas.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'El fundido cruzado mezcla la cola del tramo con su cabeza. 50 ms de potencia igual por defecto. Unos 20 ms van bien con batería; 200–500 ms con pads.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'El ciclo exportado es más corto que Inicio–Fin exactamente en la duración del fundido, porque el solape se mezcla una sola vez.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV para motores de juego que repiten el archivo. MP3 más pequeño (128 kbps) si el directo no sabe hacer loop; el codificador carga solo al pulsar Exportar MP3.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'Repeticiones vale 1 por defecto. En ajustes avanzados puedes hornear 4 u 8 copias. Más de unos 3 minutos se rechaza; no hay versión de 10 horas.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'No cruza dos temas distintos, no es un editor de audio online, no escribe tonos M4A, no busca el punto de loop solo ni baja YouTube.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'Escritorio: unos 40 MB o 20 minutos. Pantalla estrecha: unos 20 MB o 8 minutos. Por encima se rechaza, no se recorta a escondidas.',
  tool_make_a_seamless_audio_loop_faq_q1: '¿Se sube mi audio?',
  tool_make_a_seamless_audio_loop_faq_q2: 'Busqué looper, loop maker o loop de audio. ¿Es otra herramienta?',
  tool_make_a_seamless_audio_loop_faq_q3: '¿Cómo quita el chasquido el fundido cruzado?',
  tool_make_a_seamless_audio_loop_faq_q4: '¿Por qué el archivo sale más corto que el tramo?',
  tool_make_a_seamless_audio_loop_faq_q5: '¿Exporto WAV para el juego o MP3 para el directo?',
  tool_make_a_seamless_audio_loop_faq_q6: 'El programa de streaming no hace loop. ¿Puedo pegar varias vueltas?',
  tool_make_a_seamless_audio_loop_faq_q7: '¿Sirve para cruzar dos canciones, hacer un tono o encontrar el loop con IA?',
  tool_make_a_seamless_audio_loop_faq_q8: '¿De qué tamaño puede ser el archivo?',
  tool_make_a_seamless_audio_loop_how_body:
    'Marca el tramo a repetir, funde el final con el inicio y descarga WAV o MP3 sin subir el archivo.',
  tool_make_a_seamless_audio_loop_how_item_1: 'Abre un archivo de audio (o pulsa Cargar ejemplo).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'Pulsa o arrastra la forma de onda (o escribe Inicio y Fin). Cambia el fundido cruzado si 50 ms no encaja (20 / 50 / 200 / 500 ms).',
  tool_make_a_seamless_audio_loop_how_item_3: 'Pulsa Crear bucle.',
  tool_make_a_seamless_audio_loop_how_item_4: 'Pulsa Reproducir para oír el empalme y luego Exportar WAV o Exportar MP3.',
  tool_make_a_seamless_audio_loop_how_title: 'Cómo funciona',
  tool_make_a_seamless_audio_loop_hud_decode: 'Decodificando el archivo en esta pestaña…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'Listo. Ajusta Inicio, Fin y el fundido, luego pulsa Crear bucle.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '{s}s transcurridos',
  tool_make_a_seamless_audio_loop_hud_encode: 'Codificando MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'Corrige el archivo, los tiempos o el fundido y vuelve a Crear bucle.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'Crear bucle se detuvo',
  tool_make_a_seamless_audio_loop_hud_loop: 'Envolviendo la cola en la cabeza…',
  tool_make_a_seamless_audio_loop_hud_next: 'Hecho. Siguiente: Reproducir el empalme y Exportar WAV o Exportar MP3.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'Hecho. La descarga MP3 debería empezar.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'Decodificar',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'Codificar',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'Bucle',
  tool_make_a_seamless_audio_loop_hud_title: 'Progreso del bucle',
  tool_make_a_seamless_audio_loop_hud_working: 'Empezando…',
  tool_make_a_seamless_audio_loop_make: 'Crear bucle',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_make_a_seamless_audio_loop_pause: 'Pausa',
  tool_make_a_seamless_audio_loop_play: 'Reproducir',
  tool_make_a_seamless_audio_loop_preview_hint:
    'Pulsa o arrastra la forma de onda para Inicio y Fin. Tras Crear bucle, Reproducir repite el resultado para oír el empalme.',
  tool_make_a_seamless_audio_loop_repeats: 'Repeticiones (copias horneadas)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    '1 ciclo por defecto si el reproductor sabe hacer loop. Usa 4 u 8 si no. Más de unos 3 minutos se rechaza.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'El bucle dura {dur}s ({start}–{end}s, fundido {fade} ms, {n} repetición(es)). Ya puedes exportar.',
  tool_make_a_seamless_audio_loop_rules_body:
    'Se copia el tramo y un envolvente de potencia igual (o lineal) mezcla las últimas muestras con las primeras. La duración de salida es el tramo menos el fundido. Las repeticiones pegan ese ciclo. WAV es PCM de 16 bits. MP3 es CBR.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'Tope de escritorio: unos 40 MB o 20 minutos; pantalla estrecha: unos 20 MB u 8 minutos. Por encima se rechaza.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'El archivo permanece en el dispositivo; no se sube a un servidor. El codificador MP3 carga solo tras Exportar MP3.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'El fundido debe ser más corto que el tramo. El ciclo exportado pierde exactamente ese solape. Potencia igual es la curva por defecto.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'La decodificación depende del navegador. DRM, algunos códecs y contenedores de vídeo fallan con un error claro.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'No mezcla dos canciones, no escribe M4A, no mide BPM, no busca el punto de loop ni baja YouTube. Un archivo, un tramo, un bucle.',
  tool_make_a_seamless_audio_loop_rules_title: 'Reglas que debes esperar',
  tool_make_a_seamless_audio_loop_sample: 'Cargar ejemplo',
  tool_make_a_seamless_audio_loop_start: 'Inicio (segundos)',
  tool_make_a_seamless_audio_loop_status_done: 'Listo.',
  tool_make_a_seamless_audio_loop_title: 'Haz un bucle de audio sin costura',
  tool_make_a_seamless_audio_loop_usecase_1:
    'Convierte una cama de dos segundos de un juego en un bucle de audio sin costura y exporta WAV para el motor.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'Cama para un directo: marca el groove, deja 50 ms de fundido, hornea 8 vueltas en ajustes avanzados y exporta MP3.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'Suaviza un loop ambiental o de dron con 200–500 ms de fundido cruzado para que el empalme desaparezca.',
  tool_make_a_seamless_audio_loop_usecases_title: 'Cuándo encaja',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'Hecho para un solo envolvente y una descarga, con un fundido que puedes oír y topes visibles.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'La decodificación y el envolvente quedan en esta pestaña; Exportar MP3 es la primera carga del codificador.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'El fundido de potencia igual viene activado; las fichas 20 / 50 / 200 / 500 ms cubren batería y pads.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'Tras Crear bucle, Reproducir repite el resultado para juzgar el empalme antes de bajar el archivo.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'Archivos demasiado grandes y salidas horneadas de más de unos 3 minutos se rechazan, no se recortan a escondidas.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'Por qué usar Haz un bucle de audio sin costura',
  tool_make_a_seamless_audio_loop_zerocross: 'Ajustar Inicio y Fin al cruce por cero más cercano',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    'Activado por defecto. Estabiliza los bordes antes del fundido. Desactívalo si necesitas muestras exactas.',
};
export default es;
