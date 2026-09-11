/**
 * i18n tool shard (split-an-audio-file-by-duration / es).
 * H1 en frase de tarea; partes iguales / cada 60 s van en desc y FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copia en español: dividir un archivo de audio por duración y bajar un ZIP. */
const es: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'Ajustes avanzados (opcional)',
  tool_split_an_audio_file_by_duration_article:
    'Divide un archivo de audio por duración en esta pestaña: ábrelo, elige los segundos, pulsa Dividir por duración y luego Descargar ZIP. Cada clip dura N segundos salvo el último, que se queda con el resto. El archivo permanece en tu dispositivo y no se sube al servidor.',
  tool_split_an_audio_file_by_duration_bitrate: 'Tasa MP3',
  tool_split_an_audio_file_by_duration_bitrate_hint: '128 kbps por defecto. Solo se usa si el ZIP va en MP3.',
  tool_split_an_audio_file_by_duration_chip_180: '3 min',
  tool_split_an_audio_file_by_duration_chip_30: '30 s',
  tool_split_an_audio_file_by_duration_chip_300: '5 min',
  tool_split_an_audio_file_by_duration_chip_60: '60 s',
  tool_split_an_audio_file_by_duration_choose_file: 'Elige un archivo de audio',
  tool_split_an_audio_file_by_duration_chunk: 'Duración de cada trozo (segundos)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '2 s encaja con el ejemplo. En una clase, prueba 60 s o 3 min. El último clip conserva el tiempo sobrante.',
  tool_split_an_audio_file_by_duration_clear: 'Borrar',
  tool_split_an_audio_file_by_duration_clip_download: 'Descargar este clip',
  tool_split_an_audio_file_by_duration_clip_play: 'Reproducir este clip',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'Clip {n} · {dur}s ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'Clips listos para el ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'Parte el archivo en clips de igual duración y baja un ZIP; queda en el dispositivo, sin subir al servidor.',
  tool_split_an_audio_file_by_duration_description:
    'Divide un archivo de audio por duración en tu dispositivo: trozos iguales, el último con el resto, ZIP listo; no se sube al servidor. Pasos: Abre el archivo, fija los segundos (el ejemplo usa 2 s; chips 30 / 60 / 180 / 300 s), pulsa Dividir por duración, Descargar ZIP. Ejemplo: 5,00 s a 2 s salen tres clips 2,00 / 2,00 / 1,00 s. Buscar dividir audio por duración, partir mp3 en partes iguales o trocear audio cada 60 segundos es el mismo trabajo. No corta por silencios, ni cue, ni recorte a mano, ni silencia vídeo.',
  tool_split_an_audio_file_by_duration_download_zip: 'Descargar ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: 'O suelta aquí un WAV, MP3, M4A u OGG. El proceso se queda en esta pestaña.',
  tool_split_an_audio_file_by_duration_empty: 'Elige primero un archivo de audio.',
  tool_split_an_audio_file_by_duration_equal_parts: 'O partir en N partes iguales',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'Vacío = usa los segundos. Un número 2–50 pone la duración en total ÷ N para este corte.',
  tool_split_an_audio_file_by_duration_err_caps:
    'El archivo supera el tope de este dispositivo (unos 40 MB / 20 min en escritorio, 20 MB / 8 min en pantalla estrecha). Acórtalo antes o usa uno más corto.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'La duración debe estar entre 0,5 y 1200 segundos. Súbela si llegas al tope de 50 clips.',
  tool_split_an_audio_file_by_duration_err_decode:
    'Este navegador no pudo decodificar el archivo. Prueba WAV o MP3, o un clip sin DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'No hay nada que procesar. Carga un archivo o el ejemplo.',
  tool_split_an_audio_file_by_duration_err_lame: 'No cargó el codificador MP3. Quédate en la pestaña y vuelve a Descargar ZIP.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'Más de 50 clips. Sube los segundos (prueba 60 s o 3 min). La página rechaza en lugar de truncar.',
  tool_split_an_audio_file_by_duration_err_video:
    'Esta página no acepta vídeo como entrada principal. Parte un archivo de sonido por duración; no silencia un vídeo.',
  tool_split_an_audio_file_by_duration_err_zip: 'No cargó la librería ZIP. Quédate en la pestaña y vuelve a Descargar ZIP.',
  tool_split_an_audio_file_by_duration_example:
    'Cargar ejemplo crea un tono de 5,00 s a 440 Hz. Dividir por duración a 2,00 s corta en 2,00 s y 4,00 s: tres clips 2,00 / 2,00 / 1,00 s (el último guarda el resto). Descargar ZIP escribe sample-01.wav salvo que elijas MP3 en Ajustes avanzados.',
  tool_split_an_audio_file_by_duration_example_title: 'Ejemplo',
  tool_split_an_audio_file_by_duration_faq_a1:
    'No. Decodificar, cortar y empaquetar el ZIP ocurren en esta pestaña. Los scripts salen de este sitio. El archivo no se envía a nuestros servidores.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'Sí. Dividir audio por duración, partir mp3 en partes iguales, trocear audio cada 60 segundos o bajar clips en ZIP es esta herramienta: cortar el archivo local cada N segundos y llevarse muchos ficheros en un ZIP. Las N partes iguales están en Ajustes avanzados.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'El último clip se queda con el tiempo sobrante. Un archivo de 5,00 s a 2 s queda 2,00 / 2,00 / 1,00 s, sin silencio añadido.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'No. Cortar una grabación por silencios usa las pausas. Aquí manda el reloj. Tampoco hay cue ni corte por tamaño en MB.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'En el ejemplo deja 2 s. Para redes, 30 s o 60 s; para una clase, 3 min o 5 min. Si quieres cuatro archivos iguales, escribe 4 en avanzado.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'Dentro del ZIP se llaman {stem}-01.wav (o .mp3). También puedes bajar un clip de la lista. Tope 50; por encima se rechaza.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'No. Ni reducción de ruido, ni silenciar vídeo, ni cue/APE, ni recorte a mano, ni bajar YouTube. Usa un audio del que tengas derechos.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'Escritorio: unos 40 MB o 20 minutos. Pantalla estrecha: unos 20 MB u 8 minutos. Si se pasa, se rechaza antes de decodificar.',
  tool_split_an_audio_file_by_duration_faq_q1: '¿Se sube mi archivo de audio?',
  tool_split_an_audio_file_by_duration_faq_q2:
    'Busqué partir mp3 en partes iguales o dividir audio por duración. ¿Es otra herramienta?',
  tool_split_an_audio_file_by_duration_faq_q3: 'Si no cabe exacto, ¿qué pasa con el último clip?',
  tool_split_an_audio_file_by_duration_faq_q4: '¿Corta por silencios, sigue un cue o parte por tamaño?',
  tool_split_an_audio_file_by_duration_faq_q5: '¿Cuántos segundos pongo en cada trozo?',
  tool_split_an_audio_file_by_duration_faq_q6: '¿Cómo se nombran los ficheros y cuántos clips salen?',
  tool_split_an_audio_file_by_duration_faq_q7: '¿Quita ruido, corta vídeo, lee un cue o baja YouTube?',
  tool_split_an_audio_file_by_duration_faq_q8: '¿De qué tamaño puede ser el archivo?',
  tool_split_an_audio_file_by_duration_format: 'Formato dentro del ZIP',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV es PCM sin pérdida. El MP3 carga el codificador solo al pulsar Descargar ZIP.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'Corta cada N segundos según el reloj, deja el resto en el último clip y baja un ZIP sin subir el archivo.',
  tool_split_an_audio_file_by_duration_how_item_1: 'Abre un archivo de audio (o pulsa Cargar ejemplo).',
  tool_split_an_audio_file_by_duration_how_item_2: 'Deja 2 segundos, o toca un chip / escribe la duración.',
  tool_split_an_audio_file_by_duration_how_item_3: 'Pulsa Dividir por duración.',
  tool_split_an_audio_file_by_duration_how_item_4: 'Pulsa Descargar ZIP.',
  tool_split_an_audio_file_by_duration_how_title: 'Cómo funciona',
  tool_split_an_audio_file_by_duration_hud_decode: 'Decodificando el archivo en esta pestaña…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'Decodificado. Las marcas blancas son cortes previstos. Pulsa Dividir por duración si la longitud encaja.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '{s}s transcurridos',
  tool_split_an_audio_file_by_duration_hud_encode: 'Codificando clips MP3…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'Corrige el archivo o los segundos y vuelve a Dividir por duración.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'Dividir por duración se detuvo',
  tool_split_an_audio_file_by_duration_hud_next: 'Listo. Siguiente paso: Descargar ZIP.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'Listo. La descarga del ZIP debería empezar.',
  tool_split_an_audio_file_by_duration_hud_pack: 'Empaquetando clips en un ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'Cortando clips de igual duración…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'Decodificar',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'Empaquetar',
  tool_split_an_audio_file_by_duration_hud_step_split: 'Cortar',
  tool_split_an_audio_file_by_duration_hud_title: 'Progreso de dividir por duración',
  tool_split_an_audio_file_by_duration_hud_working: 'Empezando…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_split_an_audio_file_by_duration_pause: 'Pausa',
  tool_split_an_audio_file_by_duration_play: 'Reproducir',
  tool_split_an_audio_file_by_duration_preview_hint: 'Las marcas blancas son cortes cada N segundos. Reproducir escucha el archivo actual.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}s · la duración del trozo cubre el archivo entero, así que el ZIP llevaría solo este fichero. Acorta los segundos y vuelve a Dividir por duración. Descargar ZIP ya está listo.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}s · cada {chunk}s → {count} clip(s): {list}. Descargar ZIP ya está listo.',
  tool_split_an_audio_file_by_duration_rules_body:
    'Los cortes caen en k × D segundos, D es la duración del trozo. El último clip es [floor(T / D) × D, T] y puede ser más corto. Si pones N partes iguales, D = T / N en esa pasada. WAV es PCM de 16 bits. MP3 es CBR a la tasa elegida. El ZIP se arma en esta pestaña.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'El ejemplo usa 2 s. Los chips escriben 30 s, 60 s, 180 s (3 min) o 300 s (5 min) en el mismo campo. N partes iguales (2–50) es opcional en avanzado.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'Tope de escritorio: unos 40 MB o 20 minutos; pantalla estrecha: unos 20 MB u 8 minutos. Si se pasa, se rechaza. Más de 50 clips también.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'Los archivos se quedan en tu dispositivo; no se suben al servidor. JSZip y el codificador MP3 cargan desde este sitio solo tras Descargar ZIP.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'La decodificación depende del navegador. DRM, algunos códecs y contenedores de vídeo fallan con un error claro.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'Esta página exporta muchos ficheros en un ZIP según el reloj. No corta por silencio, no sigue un cue, no parte por megabytes, no quita ruido, no silencia vídeo ni baja YouTube.',
  tool_split_an_audio_file_by_duration_rules_title: 'Reglas que debes esperar',
  tool_split_an_audio_file_by_duration_sample: 'Cargar ejemplo',
  tool_split_an_audio_file_by_duration_split: 'Dividir por duración',
  tool_split_an_audio_file_by_duration_status_done: 'Hecho.',
  tool_split_an_audio_file_by_duration_title: 'Divide un archivo de audio por duración',
  tool_split_an_audio_file_by_duration_usecase_1:
    'Trocea una clase cada 3 minutos para el trayecto y baja un ZIP, sin esperar silencios.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'Parte un mp3 en partes iguales de 60 segundos para redes a partir de un episodio largo.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'Corta un memo de voz en trozos que quepan en el tope de un chat; el último clip guarda el resto.',
  tool_split_an_audio_file_by_duration_usecases_title: 'Cuándo encaja',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'Hecha para un ZIP cortado a reloj, con chips 30 s / 60 s / 3 min / 5 min y un último clip más corto a la vista.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'Corta cada N segundos y mete muchos ficheros en un ZIP; el último clip guarda el resto, no rellena silencio.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    'Chips de 30 s / 60 s / 3 min / 5 min y N partes iguales opcionales; no es un detector de silencios disfrazado de cortes iguales.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'El archivo se queda en esta pestaña del navegador y no se sube al servidor; JSZip y lamejs cargan solo al pulsar Descargar ZIP.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'Archivos demasiado grandes y más de 50 clips se rechazan antes de un ZIP a medias, no hay promesa de 1 GB que tumbe la pestaña.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'Por qué usar Divide un archivo de audio por duración',
};
export default es;
