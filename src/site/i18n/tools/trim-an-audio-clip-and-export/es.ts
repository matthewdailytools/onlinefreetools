/**
 * i18n tool shard (trim-an-audio-clip-and-export / es).
 * H1 de tarea: recortar un clip; cortar mp3 se absorbe en FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copy en español para recortar un clip y exportarlo. */
const es: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'Ajustes avanzados (opcional)',
  tool_trim_an_audio_clip_and_export_article:
    'Abre un audio del dispositivo, marca Inicio y Fin, pulsa Recortar y luego Exportar WAV o Exportar MP3. El archivo no sale del dispositivo ni se sube al servidor. Es un recorte de un tramo, no un editor de forma de onda.',
  tool_trim_an_audio_clip_and_export_bitrate: 'Tasa de bits MP3',
  tool_trim_an_audio_clip_and_export_bitrate_hint: '128 kbps por defecto. Solo se usa al pulsar Exportar MP3.',
  tool_trim_an_audio_clip_and_export_choose_file: 'Elige un archivo de audio',
  tool_trim_an_audio_clip_and_export_clear: 'Borrar',
  tool_trim_an_audio_clip_and_export_desc:
    'Recorta audio o un clip del dispositivo entre inicio y fin, luego exporta WAV o MP3. No sale del dispositivo; sin subir al servidor.',
  tool_trim_an_audio_clip_and_export_description:
    'Recorta audio en el dispositivo: marca Inicio y Fin de un clip local y descarga WAV o MP3; el archivo no se sube al servidor. Pasos: abre el archivo, pulsa o arrastra la forma de onda (o escribe Inicio y Fin), Recortar, Exportar WAV o Exportar MP3. Ejemplo: de un tono de 5 s conserva 1,00–3,00 s en WAV (o MP3 a 128 kbps). Cortar mp3, recortar mp3, cortar audio, recortar canción, recortar clip o un trimmer de audio es el mismo recorte. No es un editor de onda completo; no admite vídeo como entrada principal.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'O suelta aquí un WAV, MP3, M4A u OGG. El trabajo queda en esta pestaña.',
  tool_trim_an_audio_clip_and_export_empty: 'Elige primero un archivo de audio.',
  tool_trim_an_audio_clip_and_export_end: 'Fin (segundos)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'Este archivo supera el tope de este aparato (unos 40 MB / 20 min en escritorio, 20 MB / 8 min en pantalla estrecha). Acórtalo en otro sitio o usa un archivo más corto.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'Este navegador no pudo decodificar el archivo. Prueba WAV o MP3, o un clip sin DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'No hay nada que recortar. Carga un archivo o el ejemplo.',
  tool_trim_an_audio_clip_and_export_err_lame: 'El codificador MP3 no cargó. Quédate en esta pestaña y pulsa Exportar MP3 otra vez.',
  tool_trim_an_audio_clip_and_export_err_range: 'Fin debe ir después de Inicio, dentro de la duración decodificada.',
  tool_trim_an_audio_clip_and_export_err_video:
    'Esta página no acepta vídeo como entrada principal. Extrae el audio primero y recorta el sonido.',
  tool_trim_an_audio_clip_and_export_example:
    'Cargar ejemplo crea en memoria un tono de 5,00 s, pone Inicio 1,00 y Fin 3,00, y Recortar deja unos 2,00 s. Exportar WAV escribe PCM; Exportar MP3 usa 128 kbps salvo que cambies los ajustes avanzados.',
  tool_trim_an_audio_clip_and_export_example_title: 'Ejemplo',
  tool_trim_an_audio_clip_and_export_export_mp3: 'Exportar MP3',
  tool_trim_an_audio_clip_and_export_export_wav: 'Exportar WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'No. La decodificación y el corte ocurren en esta pestaña. Los scripts salen de este sitio. El archivo no se envía a nuestros servidores.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'No. Cortar mp3, recortar mp3, recortar audio, cortar audio, recortar canción o un trimmer de audio es esta herramienta: deja un tramo Inicio–Fin y pulsa Exportar WAV o Exportar MP3.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'Por defecto el corte se acerca a un cruce por cero para que no chasquee. Puedes desactivarlo en Ajustes avanzados (opcional).',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV guarda el PCM recortado. MP3 pesa menos (128 kbps por defecto) y el codificador solo carga al pulsar Exportar MP3.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'No. Aquí solo se recorta inicio y fin y se exporta. Un editor de audio / estación de forma de onda es otra herramienta, más adelante.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'Puedes dejar unos 30 s, pero no escribimos M4A ni un fundido automático. Esa ficha de tono de llamada es otro trabajo.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'No. Extraer audio de vídeo o de YouTube queda fuera. Usa un archivo de sonido que ya tengas derecho a tratar.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'Escritorio: unos 40 MB o 20 minutos. Pantalla estrecha: unos 20 MB u 8 minutos. Si pasa el tope se rechaza; no se recorta en silencio.',
  tool_trim_an_audio_clip_and_export_faq_q1: '¿Se sube mi audio?',
  tool_trim_an_audio_clip_and_export_faq_q2: 'Busqué cortar mp3, recortar mp3 o recortar audio. ¿Es otra herramienta?',
  tool_trim_an_audio_clip_and_export_faq_q3: '¿Por qué el corte se mueve un poco? En otros sitios oigo un clic.',
  tool_trim_an_audio_clip_and_export_faq_q4: '¿Exporto WAV o MP3?',
  tool_trim_an_audio_clip_and_export_faq_q5: '¿Esto es un editor de audio online?',
  tool_trim_an_audio_clip_and_export_faq_q6: '¿Puedo hacer un tono M4A de iPhone?',
  tool_trim_an_audio_clip_and_export_faq_q7: '¿Puedo sacar el audio de un vídeo o de YouTube?',
  tool_trim_an_audio_clip_and_export_faq_q8: '¿Hasta qué tamaño puedo recortar?',
  tool_trim_an_audio_clip_and_export_how_body:
    'Quédate solo con el tramo entre Inicio y Fin y descarga WAV o MP3 sin subir el archivo al servidor.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'Abre un archivo de audio (o pulsa Cargar ejemplo).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'Haz clic o arrastra en la forma de onda (o escribe Inicio y Fin) el tramo a conservar.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'Pulsa Recortar.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'Pulsa Exportar WAV o Exportar MP3.',
  tool_trim_an_audio_clip_and_export_how_title: 'Cómo funciona',
  tool_trim_an_audio_clip_and_export_hud_decode: 'Decodificando el archivo en esta pestaña…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'Decodificado. Fija Inicio y Fin y pulsa Recortar.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '{s}s transcurridos',
  tool_trim_an_audio_clip_and_export_hud_encode: 'Codificando MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'Corrige el archivo o los tiempos y vuelve a Recortar.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'Recorte detenido',
  tool_trim_an_audio_clip_and_export_hud_next: 'Listo. Siguiente: Exportar WAV o Exportar MP3.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'Listo. La descarga MP3 debería empezar.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'Decodificar',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'Codificar',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'Recortar',
  tool_trim_an_audio_clip_and_export_hud_title: 'Progreso del recorte',
  tool_trim_an_audio_clip_and_export_hud_trim: 'Cortando el tramo inicio–fin…',
  tool_trim_an_audio_clip_and_export_hud_working: 'Empezando…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_trim_an_audio_clip_and_export_pause: 'Pausa',
  tool_trim_an_audio_clip_and_export_play: 'Reproducir',
  tool_trim_an_audio_clip_and_export_preview_hint: 'Haz clic o arrastra la forma de onda para marcar Inicio y Fin. Reproducir escucha ese tramo.',
  tool_trim_an_audio_clip_and_export_result_tpl: 'Conservados {dur}s ({start}–{end}s). Ya puedes exportar.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'Las muestras entre Inicio y Fin se copian a un búfer nuevo. El ajuste por defecto acerca cada borde a un cruce por cero. WAV escribe PCM de 16 bits. MP3 es CBR a la tasa elegida.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'En escritorio el tope es unos 40 MB o 20 minutos; en pantalla estrecha, unos 20 MB u 8 minutos. Si se pasa, se rechaza, no se recorta a escondidas.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'El archivo permanece en el dispositivo; no se sube al servidor. El codificador MP3 carga desde este sitio solo tras Exportar MP3.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'La decodificación depende del navegador. DRM, algunos códecs y contenedores de vídeo fallan con un error explícito.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'No mezcla pistas, no añade fundidos, no escribe M4A ni descarga YouTube. Un archivo, un tramo, una exportación.',
  tool_trim_an_audio_clip_and_export_rules_title: 'Reglas que debes esperar',
  tool_trim_an_audio_clip_and_export_sample: 'Cargar ejemplo',
  tool_trim_an_audio_clip_and_export_start: 'Inicio (segundos)',
  tool_trim_an_audio_clip_and_export_status_done: 'Hecho.',
  tool_trim_an_audio_clip_and_export_title: 'Recorta un clip de audio y expórtalo',
  tool_trim_an_audio_clip_and_export_trim: 'Recortar',
  tool_trim_an_audio_clip_and_export_usecase_1: 'Recorta audio de un pódcast: sáltate el bumper de 8 s y exporta MP3 para el chat.',
  tool_trim_an_audio_clip_and_export_usecase_2: 'Quédate con 12 s de una reunión y descarga WAV para archivo.',
  tool_trim_an_audio_clip_and_export_usecase_3: 'Quita el silencio de ambos extremos de un memo de voz: el mismo recorte que cortar mp3 o recortar canción.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'Buenos encajes',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'Hecho para un recorte y una descarga, con topes y anti-clic que puedes comprobar en la página.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'Decodificar y cortar se quedan en esta pestaña; el script del codificador aparece la primera vez que pulsas Exportar MP3.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'Si el archivo es demasiado grande o largo se rechaza antes de seguir, no se recorta en silencio.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'El cruce por cero viene activado para que el empalme chasquee menos; lo puedes apagar.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV y MP3 son botones de exportar distintos, iguales a los pasos; la tasa de bits vive solo en avanzado.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'Por qué elegir nuestras herramientas Recorta un clip de audio y expórtalo',
  tool_trim_an_audio_clip_and_export_zerocross: 'Ajustar Inicio y Fin al cruce por cero más cercano',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'Activado por defecto. Reduce clics en el empalme. Apágalo si quieres el borde exacto a la muestra.',
};
export default es;
