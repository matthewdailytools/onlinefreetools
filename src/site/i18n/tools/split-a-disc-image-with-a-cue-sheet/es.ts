/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / es).
 * H1 de tarea; separar pistas cue / dividir flac cue en desc y FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy en español: dividir una imagen de disco con una hoja cue en un ZIP de pistas. */
const es: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'Ajustes avanzados (opcional)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'En esta pestaña divide una imagen de disco con una hoja cue: abre la imagen y el .cue, pulsa Separar pistas y luego Descargar ZIP. Los cortes siguen INDEX 01 (75 fotogramas por segundo). Los archivos se quedan en tu dispositivo y no se suben a un servidor.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'Tasa de bits MP3',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: '128 kbps por defecto. Solo se usa si el ZIP es MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'Elige una imagen de disco y un archivo .cue',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'Borrar',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'Descargar pista',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'Reproducir pista',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'Hoja cue',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'Corta una imagen local en INDEX 01 del cue y baja pistas con nombre en un ZIP; se queda en el dispositivo, no se sube.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'Divide una imagen de disco con una hoja cue en tu dispositivo: cortes INDEX 01, pistas con nombre en un ZIP, sin subir nada. Pasos: abre la imagen y el .cue (o pega la hoja), pulsa Separar pistas, Descargar ZIP. Ejemplo: una muestra de 6,00 s con INDEX 01 en 0 / 2 / 4 s da tres pistas 2,00 / 2,00 / 2,00 s (Intro / Middle / Outro). Buscar cue splitter, dividir flac cue, dividir wav cue o extraer pistas de un cue es el mismo trabajo. No es corte por silencios, ni trozos de igual duración, ni capítulos de YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'Descargar ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'Suelta los dos archivos: WAV, FLAC, MP3 o BIN más el .cue. El proceso se queda en esta pestaña.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'Añade primero la imagen y la hoja cue.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'Añade la imagen que corresponde (WAV, FLAC, MP3 o BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: 'Añade un .cue o pega la hoja cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'Este navegador no puede decodificar APE. Convierte la imagen a WAV o FLAC, conserva la misma hoja cue y vuelve a Separar pistas.',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'La imagen supera el tope de este dispositivo (unos 80 MB / 30 min en escritorio, 30 MB / 10 min en pantalla estrecha). Un .bin de CD de 700 MB no cabe aquí.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'Ese texto no es una hoja cue usable. Hacen falta líneas TRACK e INDEX 01 en MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'Esta hoja describe un disco de datos (pistas MODE), no una imagen de audio. Solo se cortan pistas AUDIO.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'Este navegador no pudo decodificar esa imagen. Prueba WAV o FLAC, o un archivo sin DRM. Aquí no se decodifica APE.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'No hay nada que procesar. Carga archivos o el ejemplo.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'El codificador MP3 no cargó. Quédate en la pestaña y prueba Descargar ZIP otra vez.',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'Esta hoja lista más de un FILE. Esa disposición ya es un archivo por pista; aquí no hay nada que partir.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'No hay marcas INDEX 01. Un separador cue necesita esos inicios MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'Más de 50 pistas. La página se niega a truncar. Parte una hoja más corta o usa shnsplit en el escritorio.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'Esta página no acepta vídeo como entrada principal. Parte una imagen de audio con una hoja cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'La librería ZIP no cargó. Quédate en la pestaña y prueba Descargar ZIP otra vez.',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'Cargar ejemplo crea una imagen de 6,00 s (440 / 550 / 660 Hz, dos segundos cada una) y una hoja cue con INDEX 01 en 00:00:00, 00:02:00 y 00:04:00 (Intro Tone, Middle Tone, Outro Tone). Separar pistas deja tres archivos de 2,00 s. Descargar ZIP escribe 01 Intro Tone.wav salvo que elijas MP3 en ajustes avanzados.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'Ejemplo',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'No. El análisis, la decodificación, el corte y el ZIP ocurren en esta pestaña. Los scripts salen de este sitio. La imagen y la hoja no se envían a nuestros servidores.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'Sí. Buscar cue splitter, dividir flac cue, dividir wav cue, split ape cue o extraer pistas de un cue es esta herramienta: seguir INDEX 01 y bajar un ZIP con nombres. APE como búsqueda es el mismo trabajo, pero el navegador no abre .ape: convierte a WAV o FLAC y conserva el cue.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 es el inicio de pista (MM:SS:FF a 75 fotogramas por segundo). INDEX 00 marca un pregap; se muestra, pero el corte por defecto es 01. La última pista llega al final de la imagen.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'No. Cortar por silencios es otra página. Trocear por duración igual también. Aquí solo se sigue una hoja cue. Las listas de capítulos de YouTube sin FILE/INDEX quedan fuera.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'Pega el texto bajo la zona de archivos si no tienes un .cue suelto. Soltar un .cue hace el mismo análisis.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'Dentro del ZIP los nombres son {nn} {title}.wav (o .mp3). También puedes bajar una pista de la lista. El tope es 50; si se pasa, se rechaza.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'No. Ni reducción de ruido, ni silenciar vídeo, ni trozos iguales, ni recorte a mano, ni bajar YouTube, ni ISO de datos. Usa una imagen de audio sobre la que tengas derechos.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'Escritorio: unos 80 MB o 30 minutos. Pantalla estrecha: unos 30 MB o 10 minutos. Un .bin de CD de 700 MB se rechaza. Los archivos por encima del tope se paran antes de decodificar.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: '¿Se suben mi imagen de disco y la hoja cue?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2:
    'Busqué cue splitter, dividir flac cue o extraer pistas de un cue. ¿Es otra herramienta?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: '¿Qué diferencia hay entre INDEX 01 e INDEX 00?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: '¿Corta por silencios, por duración o por capítulos de YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: '¿Puedo pegar la hoja cue en lugar de un archivo .cue?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: '¿Cómo se nombran los archivos y cuántas pistas caben?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: '¿Decodifica APE, parte vídeo, trocea igual o extrae YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: '¿Qué tan grande puede ser la imagen?',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'Formato dentro del ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV es PCM sin pérdida. El MP3 carga el codificador solo al pulsar Descargar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'Lee los tiempos INDEX 01 de la hoja cue, corta la imagen de disco ahí y descarga un ZIP de pistas con nombre, sin subir nada.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'Abre una imagen de disco y su .cue (o pulsa Cargar ejemplo).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'O pega la hoja cue si solo tienes el texto.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'Pulsa Separar pistas.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'Pulsa Descargar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'Cómo funciona',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'Decodificando la imagen en esta pestaña…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'Hoja leída e imagen decodificada. Las marcas blancas son inicios INDEX 01. Pulsa Separar pistas si la lista está bien.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '{s}s transcurridos',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'Codificando pistas MP3…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'Corrige la hoja o la imagen y vuelve a Separar pistas.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'Corte cue detenido',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'Listo. Siguiente paso: Descargar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'Listo. La descarga del ZIP debería empezar.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'Empaquetando pistas en un ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'Leyendo la hoja cue…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'Cortando pistas en INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'Decodificar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'Empaquetar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'Analizar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'Separar',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'Progreso del corte cue',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'Empezando…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'Imagen de disco',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'Pega una hoja cue completa (FILE, TRACK, INDEX 01). No una lista de capítulos de YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'O pega la hoja cue',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'Pausa',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'Reproducir',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'Las marcas blancas son inicios INDEX 01. Reproducir escucha toda la imagen.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}s · {count} pista(s): {list}. Ya puedes Descargar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'Cada INDEX 01 es mm:ss:ff a 75 fotogramas por segundo: t = mm×60 + ss + ff/75. La pista n va de ese instante al siguiente INDEX 01; la última llega al final. El PCM de 16 bits WAV/BIN se corta por desplazamiento de bytes. Otros formatos usan el decodificador del navegador. El ZIP se arma aquí.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'El corte es INDEX 01. INDEX 00 se muestra como pregap y no es el corte por defecto. Los tiempos usan fotogramas de CD, no milisegundos.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'Tope de escritorio: unos 80 MB o 30 minutos; pantalla estrecha: unos 30 MB o 10 minutos. Por encima se rechaza, no se trunca. Más de 50 pistas también. Un .bin de 700 MB no cabe.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'Los archivos se quedan en tu dispositivo; no se suben a un servidor. JSZip y el codificador MP3 se cargan desde este sitio solo tras Descargar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE y BINARY (.bin, sectores CDDA de 2352 bytes) se pueden cortar sin códec completo. MP3/FLAC/M4A necesitan el decodificador del navegador. APE/TTA/WavPack fallan con un error claro.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'Esta página sigue un solo FILE más INDEX 01. No corta por silencio, duración igual, capítulos de YouTube, tamaño, ni silencia vídeo, ni extrae YouTube. Una hoja con varios FILE ya está partida.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'Reglas que debes esperar',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'Cargar ejemplo',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'Separar pistas',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'Listo.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'Divide una imagen de disco con una hoja cue',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}s ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'Pistas listas para el ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'Separar un rip FLAC+CUE de Exact Audio Copy o XLD en pistas con nombre, sin instalar shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'Partir una imagen WAV o BIN de un lado de vinilo o un CD con su hoja cue y llevarte el ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'Sacar pistas de una sesión DJ que llegó con hoja cue, usando INDEX 01 en lugar de adivinar silencios.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'Buenos encajes',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'Hecho para cortes INDEX 01 con pistas nombradas en ZIP, y honesto con APE y los .bin enormes.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'Corta en INDEX 01 (75 fps) y nombra el ZIP con TITLE, no en trozos de N segundos ni en huecos de silencio.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'Una sola zona para la imagen y el .cue, con pegado de la misma hoja; no es un editor de capítulos de YouTube disfrazado.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'Los archivos se quedan en esta pestaña y no se suben; JSZip y lamejs cargan solo al pulsar Descargar ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE, hojas con varios FILE e imágenes demasiado grandes se rechazan en claro, no con una promesa de 700 MB que tumba la pestaña.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title:
    'Por qué usar Divide una imagen de disco con una hoja cue',
};
export default es;
