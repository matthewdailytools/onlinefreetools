/**
 * i18n tool shard (split-a-recording-on-silence / es).
 * Job: split a recording on silence into a ZIP of clips (dividir por silencios).
 */
import type { SiteLangDict } from '../../../types';

/** Spanish copy: divide una grabación por los silencios y descarga un ZIP de clips. */
const es: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'Ajustes avanzados (opcional)',
  tool_split_a_recording_on_silence_article:
    'En esta pestaña puedes dividir audio por silencios: elige un archivo del disco, pulsa Dividir por silencios y luego Descargar ZIP. Cada pausa larga se corta por el punto medio; los clips salen como archivos sueltos. El audio se queda en el dispositivo y no se envía a ningún servidor.',
  tool_split_a_recording_on_silence_bitrate: 'Tasa de bits MP3',
  tool_split_a_recording_on_silence_bitrate_hint: '128 kbps de partida. Solo aplica si el ZIP va en MP3.',
  tool_split_a_recording_on_silence_choose_file: 'Elige un archivo de audio',
  tool_split_a_recording_on_silence_clear: 'Borrar',
  tool_split_a_recording_on_silence_clip_download: 'Bajar este clip',
  tool_split_a_recording_on_silence_clip_play: 'Reproducir clip',
  tool_split_a_recording_on_silence_clip_row_tpl: 'Clip {n} · {dur}s ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'Clips listos para el ZIP',
  tool_split_a_recording_on_silence_desc:
    'Parte una grabación en silencios y baja un ZIP de clips: permanece en el dispositivo, sin subir al servidor.',
  tool_split_a_recording_on_silence_description:
    'Divide una grabación por los silencios en el propio dispositivo: las pausas largas marcan el corte y el ZIP reúne los clips; el archivo no se sube al servidor. Quien busca dividir audio por silencios, partir grabación en silencios, separar pistas por silencios o exportar clips en ZIP llega a este mismo trabajo de varios archivos. Pasos: abre el audio, pulsa Dividir por silencios (de fábrica −40 dB / 1.0 s / 0.3 s de clip mínimo) y Descargar ZIP. Ejemplo: una muestra de 5.00 s con dos huecos de 1.20 s deja tres clips 1.40 / 2.00 / 1.60 s. No quita el silencio de un solo archivo, no parte a duración fija y no silencia vídeo.',
  tool_split_a_recording_on_silence_download_zip: 'Descargar ZIP',
  tool_split_a_recording_on_silence_drop_hint: 'O suelta aquí un WAV, MP3, M4A u OGG. Todo ocurre en esta pestaña.',
  tool_split_a_recording_on_silence_empty: 'Primero elige un archivo de audio.',
  tool_split_a_recording_on_silence_err_caps:
    'Este archivo supera el tope de tamaño o duración de este dispositivo (unos 40 MB / 20 min en escritorio, 20 MB / 8 min en pantalla estrecha). Acórtalo fuera o usa uno más corto.',
  tool_split_a_recording_on_silence_err_decode:
    'Este navegador no pudo decodificar el archivo. Prueba WAV o MP3, o un clip sin DRM.',
  tool_split_a_recording_on_silence_err_empty: 'No hay nada que procesar. Carga un archivo o el ejemplo primero.',
  tool_split_a_recording_on_silence_err_lame: 'No cargó el codificador MP3. Quédate en la pestaña y vuelve a Descargar ZIP.',
  tool_split_a_recording_on_silence_err_no_clips:
    'Ningún clip llega al mínimo. Baja la duración mínima del clip o sube el silencio mínimo para que un suspiro no cuente como corte.',
  tool_split_a_recording_on_silence_err_too_many:
    'Más de 50 clips. Sube el silencio mínimo o haz el umbral más negativo para que pausas vecinas se fusionen, y pulsa Dividir por silencios otra vez. La página se niega; no recorta a escondidas.',
  tool_split_a_recording_on_silence_err_video:
    'El vídeo no entra como entrada principal. Aquí se parte un archivo de sonido en las pausas; no se silencia ni se recorta metraje.',
  tool_split_a_recording_on_silence_err_zip: 'No cargó la librería ZIP. Quédate en la pestaña y vuelve a Descargar ZIP.',
  tool_split_a_recording_on_silence_example:
    'Cargar ejemplo fabrica un tono de 5.00 s con dos huecos mudos de 1.20 s (0.80 + 1.20 + 0.80 + 1.20 + 1.00). Dividir por silencios a −40 dB / 1.0 s / 0.3 s de clip mínimo corta en 1.40 s y 3.40 s, así que quedan tres clips 1.40 / 2.00 / 1.60 s. Descargar ZIP escribe WAV con nombres sample-01.wav salvo que en Ajustes avanzados elijas MP3.',
  tool_split_a_recording_on_silence_example_title: 'Ejemplo concreto',
  tool_split_a_recording_on_silence_faq_a1:
    'No. Decodificar, detectar, cortar y empaquetar el ZIP ocurre en esta pestaña. Los scripts salen de este sitio. El archivo no se publica en nuestros servidores.',
  tool_split_a_recording_on_silence_faq_a2:
    'Es esta misma página. Dividir audio por silencios, partir grabación en silencios, separar pistas por silencios o bajar segmentos en ZIP significa: cortes en pausas largas y muchos archivos dentro de un ZIP.',
  tool_split_a_recording_on_silence_faq_a3:
    'Eso es otro trabajo. Quitar silencios de una grabación elimina el aire muerto y deja un solo archivo más corto. Aquí las pausas son puntos de corte y salen muchos clips. Si no quieres ZIP, usa la herramienta de un solo archivo.',
  tool_split_a_recording_on_silence_faq_a4:
    'Tampoco. Partir a duración igual (cada N segundos) es otra tarea. Separar un álbum con cue sheet tampoco entra. Solo corta donde el hueco mudo dura lo suficiente.',
  tool_split_a_recording_on_silence_faq_a5:
    'Empieza por Habla (−40 dB / 1.0 s / 0.3 s de clip mínimo). Clases: Clase (−40 dB / 2.0 s). Huecos de álbum: Álbum (−45 dB / 1.5 s / 1.0 s de clip mínimo). Si los suspiros se vuelven clips, sube el silencio mínimo.',
  tool_split_a_recording_on_silence_faq_a6:
    'Dentro del ZIP van {stem}-01.wav (o .mp3). También puedes bajar un clip suelto de la lista. El tope es 50 clips; por encima se rechaza el corte.',
  tool_split_a_recording_on_silence_faq_a7:
    'No. Ni denoising, ni quitar um/uh, ni silenciar vídeo, ni cue/APE, ni extraer YouTube. Usa un archivo de sonido del que ya tengas derechos.',
  tool_split_a_recording_on_silence_faq_a8:
    'Escritorio: unos 40 MB o 20 minutos. Pantalla estrecha: unos 20 MB o 8 minutos. Lo que pasa el tope se rechaza antes de decodificar. Música con mucho rango dinámico puede parecer silencio: sube el hueco mínimo o usa otra herramienta.',
  tool_split_a_recording_on_silence_faq_q1: '¿Se sube mi grabación a algún servidor?',
  tool_split_a_recording_on_silence_faq_q2: 'Busqué dividir audio por silencios o partir grabación en silencios. ¿Es otra página?',
  tool_split_a_recording_on_silence_faq_q3: 'Quería un solo archivo más corto, sin aire muerto. ¿Esto quita silencios?',
  tool_split_a_recording_on_silence_faq_q4: '¿Parte en trozos iguales o sigue una cue sheet?',
  tool_split_a_recording_on_silence_faq_q5: '¿Qué umbral uso? ¿Corta también los suspiros?',
  tool_split_a_recording_on_silence_faq_q6: '¿Cómo se llaman los archivos y cuántos clips caben?',
  tool_split_a_recording_on_silence_faq_q7: '¿Hace denoising, corta vídeo, lee cue o extrae YouTube?',
  tool_split_a_recording_on_silence_faq_q8: '¿De qué tamaño puede ser el archivo? ¿Y si la música es muy baja?',
  tool_split_a_recording_on_silence_format: 'Formato dentro del ZIP',
  tool_split_a_recording_on_silence_format_hint: 'WAV es PCM sin pérdida. El MP3 solo carga el codificador al pulsar Descargar ZIP.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'Localiza huecos lo bastante largos, corta en el punto medio de cada uno y baja un ZIP de clips; el archivo no sale del dispositivo ni se envía al servidor.',
  tool_split_a_recording_on_silence_how_item_1: 'Abre una grabación (o pulsa Cargar ejemplo).',
  tool_split_a_recording_on_silence_how_item_2: 'Deja los valores de fábrica, o abre Ajustes avanzados (opcional) para umbral y silencio mínimo.',
  tool_split_a_recording_on_silence_how_item_3: 'Pulsa Dividir por silencios.',
  tool_split_a_recording_on_silence_how_item_4: 'Pulsa Descargar ZIP.',
  tool_split_a_recording_on_silence_how_title: 'Cómo se hace',
  tool_split_a_recording_on_silence_hud_decode: 'Decodificando el archivo en esta pestaña…',
  tool_split_a_recording_on_silence_hud_decoded: 'Listo. Las marcas rojas son huecos. Pulsa Dividir por silencios si los ajustes te convencen.',
  tool_split_a_recording_on_silence_hud_detect: 'Midiendo ventanas quietas…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}s transcurridos',
  tool_split_a_recording_on_silence_hud_encode: 'Codificando clips MP3…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'Corrige el archivo o los ajustes y vuelve a Dividir por silencios.',
  tool_split_a_recording_on_silence_hud_fail_title: 'Dividir por silencios se detuvo',
  tool_split_a_recording_on_silence_hud_next: 'Hecho. Siguiente: Descargar ZIP.',
  tool_split_a_recording_on_silence_hud_next_zip: 'Hecho. Debería empezar la descarga del ZIP.',
  tool_split_a_recording_on_silence_hud_pack: 'Empaquetando clips en un ZIP…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'Cortando en el punto medio del silencio…',
  tool_split_a_recording_on_silence_hud_step_decode: 'Decodificar',
  tool_split_a_recording_on_silence_hud_step_detect: 'Detectar',
  tool_split_a_recording_on_silence_hud_step_pack: 'Empaquetar',
  tool_split_a_recording_on_silence_hud_step_split: 'Cortar',
  tool_split_a_recording_on_silence_hud_title: 'Progreso de Dividir por silencios',
  tool_split_a_recording_on_silence_hud_working: 'Arrancando…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'Clip mínimo (segundos)',
  tool_split_a_recording_on_silence_min_clip_hint: 'De fábrica 0.3 s. Los trozos más cortos tras un corte se descartan.',
  tool_split_a_recording_on_silence_min_silence: 'Silencio mínimo (segundos)',
  tool_split_a_recording_on_silence_min_silence_hint: 'De fábrica 1.0 s para que un suspiro no sea punto de corte.',
  tool_split_a_recording_on_silence_pause: 'Pausa',
  tool_split_a_recording_on_silence_play: 'Reproducir',
  tool_split_a_recording_on_silence_preset_album: 'Álbum',
  tool_split_a_recording_on_silence_preset_hint: 'Habla es el valor inicial. Clase espera pausas de capítulo más largas. Álbum espera huecos entre pistas.',
  tool_split_a_recording_on_silence_preset_lecture: 'Clase',
  tool_split_a_recording_on_silence_preset_speech: 'Habla',
  tool_split_a_recording_on_silence_preview_hint: 'Las franjas rojas son huecos lo bastante largos para cortar. Reproducir previsualiza el archivo actual.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}s · ninguna pausa lo bastante larga, así que el ZIP llevaría este único archivo. Baja el silencio mínimo o sube el umbral (más cerca de 0). Descargar ZIP ya está listo.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}s · {gaps} hueco(s) → {count} clip(s): {list}. Descargar ZIP listo.',
  tool_split_a_recording_on_silence_rules_body:
    'Cada ~50 ms la página mide RMS y lo pasa a dB: levelDb = 20 × log10(rms). Un tramo por debajo del umbral que dure al menos el silencio mínimo se corta en su punto medio. Los clips más cortos que el mínimo se tiran. WAV es PCM de 16 bits. MP3 es CBR al bitrate elegido. El ZIP se arma en esta pestaña.',
  tool_split_a_recording_on_silence_rules_item_1:
    'Habla de fábrica: −40 dB, 1.0 s de silencio mínimo, 0.3 s de clip mínimo. Clase: −40 dB / 2.0 s / 0.5 s. Huecos de álbum: −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'Tope de escritorio: unos 40 MB o 20 minutos; pantalla estrecha: unos 20 MB o 8 minutos. Lo que pasa el tope se rechaza, no se recorta. Más de 50 clips también se rechaza.',
  tool_split_a_recording_on_silence_rules_item_3:
    'Los archivos se quedan en el dispositivo; no se suben a un servidor. JSZip y el codificador MP3 se cargan desde este sitio solo después de Descargar ZIP.',
  tool_split_a_recording_on_silence_rules_item_4:
    'La decodificación depende del navegador. DRM, algunos códecs y contenedores de vídeo fallan con un error explícito.',
  tool_split_a_recording_on_silence_rules_item_5:
    'Esta página exporta muchos archivos en un ZIP. No cose un solo archivo más corto, no parte a duración fija, no sigue cue, no hace denoising, no silencia vídeo ni descarga YouTube.',
  tool_split_a_recording_on_silence_rules_title: 'Reglas que conviene esperar',
  tool_split_a_recording_on_silence_sample: 'Cargar ejemplo',
  tool_split_a_recording_on_silence_split: 'Dividir por silencios',
  tool_split_a_recording_on_silence_status_done: 'Listo.',
  tool_split_a_recording_on_silence_threshold: 'Umbral de silencio (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'De fábrica −40 dB. Más cerca de 0 trata más del archivo como silencio.',
  tool_split_a_recording_on_silence_title: 'Divide una grabación por los silencios',
  tool_split_a_recording_on_silence_usecase_1:
    'Una clase con pausas de capítulo: cada bloque sale como archivo propio en el ZIP, sin trocear a tiempo fijo.',
  tool_split_a_recording_on_silence_usecase_2:
    'Una entrevista: las respuestas quedan en clips sueltos para etiquetar después.',
  tool_split_a_recording_on_silence_usecase_3:
    'Un mixtape con huecos entre pistas y sin cue sheet: partir grabación en silencios basta.',
  tool_split_a_recording_on_silence_usecases_title: 'Cuándo encaja bien',
  tool_split_a_recording_on_silence_why_choose_body:
    'Hecha para un ZIP de clips cortados en el punto medio de la pausa, con perfiles Habla / Clase / Álbum que puedes comprobar en la página.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'Corta en el punto medio de los huecos largos y mete muchos archivos en un ZIP; no cose un solo archivo más corto.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'Habla (−40 dB / 1.0 s / 0.3 s de clip mínimo) evita trocear suspiros; Clase y Álbum están nombrados en la página.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'El archivo permanece en esta pestaña del navegador y no se sube al servidor; JSZip y lamejs cargan solo al pulsar Descargar ZIP.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'Archivos demasiado grandes y más de 50 clips se rechazan antes de un ZIP a medias, en vez de prometer 1 GB y tumbar la pestaña.',
  tool_split_a_recording_on_silence_why_choose_title: 'Por qué usar Divide una grabación por los silencios en este sitio',
};
export default es;
