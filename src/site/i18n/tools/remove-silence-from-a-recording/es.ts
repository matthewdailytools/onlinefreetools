/**
 * i18n tool shard (remove-silence-from-a-recording / es).
 * H1 local: Elimina los silencios de una grabación.
 */
import type { SiteLangDict } from '../../../types';

/** Español: quitar silencios / aire muerto, un solo archivo. */
const es: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'Ajustes avanzados (opcional)',
  tool_remove_silence_from_a_recording_article:
    'Elimina los silencios de una grabación en esta pestaña: abre un archivo local, pulsa Quitar silencios y exporta WAV o MP3. El aire muerto se corta y el habla queda en un solo archivo más corto, sin subir al servidor.',
  tool_remove_silence_from_a_recording_bitrate: 'Tasa de bits MP3',
  tool_remove_silence_from_a_recording_bitrate_hint: '128 kbps por defecto. Solo se usa al pulsar Exportar MP3.',
  tool_remove_silence_from_a_recording_choose_file: 'Elige un archivo de audio',
  tool_remove_silence_from_a_recording_clear: 'Borrar',
  tool_remove_silence_from_a_recording_desc:
    'Quita silencios de una grabación local y descarga un WAV o MP3 más corto; no sale del dispositivo ni se sube al servidor.',
  tool_remove_silence_from_a_recording_description:
    'Elimina los silencios de una grabación en tu dispositivo: corta aire muerto y pausas largas, deja un solo archivo más corto y descarga WAV o MP3, sin subir al servidor. Pasos: abre la grabación, pulsa Quitar silencios (predeterminado −40 dB / 0,5 s / 0,15 s de margen) y Exportar WAV o Exportar MP3. Ejemplo: una muestra de 5,00 s con dos huecos de 1,20 s queda en unos 2,90 s. Buscar quitar silencios, eliminador de silencios o aire muerto es este mismo trabajo. No parte en ZIP ni silencia vídeo.',
  tool_remove_silence_from_a_recording_drop_hint: 'O suelta aquí un WAV, MP3, M4A u OGG. El proceso se queda en esta pestaña.',
  tool_remove_silence_from_a_recording_empty: 'Elige primero un archivo de audio.',
  tool_remove_silence_from_a_recording_err_caps:
    'El archivo supera el tope de este dispositivo (unos 40 MB / 20 min en escritorio, 20 MB / 8 min en pantalla estrecha). Acórtalo antes o usa uno más corto.',
  tool_remove_silence_from_a_recording_err_decode:
    'Este navegador no pudo decodificar el archivo. Prueba WAV o MP3, o un clip sin DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'No hay nada que procesar. Carga un archivo o el ejemplo.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'No queda audio. Baja el umbral (más negativo) o sube la duración mínima para no tratar el habla como silencio.',
  tool_remove_silence_from_a_recording_err_lame: 'El codificador MP3 no cargó. Quédate en esta pestaña y vuelve a Exportar MP3.',
  tool_remove_silence_from_a_recording_err_video:
    'Esta página no acepta vídeo como entrada principal. Acorta un archivo de sonido; no silencia un vídeo ni hace jump-cut.',
  tool_remove_silence_from_a_recording_example:
    'Cargar ejemplo crea 5,00 s de tono con dos huecos de 1,20 s (0,80 + 1,20 + 0,80 + 1,20 + 1,00). Quitar silencios a −40 dB / 0,5 s / 0,15 s deja unos 2,90 s. Exportar WAV escribe PCM; Exportar MP3 usa 128 kbps salvo que cambies los ajustes avanzados.',
  tool_remove_silence_from_a_recording_example_title: 'Ejemplo',
  tool_remove_silence_from_a_recording_export_mp3: 'Exportar MP3',
  tool_remove_silence_from_a_recording_export_wav: 'Exportar WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    'No. La decodificación y el corte ocurren en esta pestaña. Los scripts salen de este sitio. El archivo no se envía a nuestros servidores.',
  tool_remove_silence_from_a_recording_faq_a2:
    'Es la misma tarea. Quitar silencios, eliminar silencio del audio, aire muerto o recortar pausas largas es cortar huecos quietos y exportar un solo WAV o MP3 más corto.',
  tool_remove_silence_from_a_recording_faq_a3:
    'Empieza con Voz (−40 dB / 0,5 s / 0,15 s). Sala ruidosa: umbral hacia −30 dB y mínimo hacia 0,8 s. Estudio: Suave (−50 dB). Si se cortan finales de palabra, haz el umbral más negativo o sube el mínimo.',
  tool_remove_silence_from_a_recording_faq_a4:
    'Recortar un clip es marcar inicio y fin a mano. Aquí también se quitan huecos del medio y se cose un archivo. Si solo quieres recortar bordes a mano, usa el recortador.',
  tool_remove_silence_from_a_recording_faq_a5:
    'No. Dividir por silencios en muchos archivos o un ZIP es otro trabajo. Aquí siempre sale un archivo.',
  tool_remove_silence_from_a_recording_faq_a6:
    'No. Reducir ruido no acorta la duración. Quitar «eh» pide transcripción. Silenciar vídeo o bajar YouTube no entra. Usa un audio del que tengas derecho.',
  tool_remove_silence_from_a_recording_faq_a7:
    'Misma tarea, otro programa. Truncate Silence de Audacity acorta pasajes bajo un umbral el tiempo suficiente. Aquí se hace en el navegador; no es una guía de instalación.',
  tool_remove_silence_from_a_recording_faq_a8:
    'Escritorio: unos 40 MB o 20 minutos. Pantalla estrecha: unos 20 MB u 8 minutos. Los archivos por encima se rechazan. La música con pasajes muy bajos puede cortarse por error: sube el mínimo o no uses esta página.',
  tool_remove_silence_from_a_recording_faq_q1: '¿Se sube mi grabación?',
  tool_remove_silence_from_a_recording_faq_q2: 'Busqué quitar silencios, aire muerto o eliminador de silencios. ¿Es otra herramienta?',
  tool_remove_silence_from_a_recording_faq_q3: '¿Qué umbral uso? ¿Se cortan las respiraciones?',
  tool_remove_silence_from_a_recording_faq_q4: 'Solo quería recortar el principio y el final. ¿Es el recortador de audio?',
  tool_remove_silence_from_a_recording_faq_q5: '¿Parte la grabación en muchos archivos?',
  tool_remove_silence_from_a_recording_faq_q6: '¿Quita ruido, muletillas, el audio de un vídeo o un enlace de YouTube?',
  tool_remove_silence_from_a_recording_faq_q7: '¿Es lo mismo que Truncate Silence de Audacity?',
  tool_remove_silence_from_a_recording_faq_q8: '¿De qué tamaño puede ser el archivo? ¿Y la música suave?',
  tool_remove_silence_from_a_recording_how_body:
    'Detecta huecos lo bastante largos, los acorta, cose el habla en un archivo y descarga WAV o MP3 sin subir nada.',
  tool_remove_silence_from_a_recording_how_item_1: 'Abre una grabación (o pulsa Cargar ejemplo).',
  tool_remove_silence_from_a_recording_how_item_2: 'Deja los valores por defecto o abre Ajustes avanzados (opcional) para el umbral y el mínimo.',
  tool_remove_silence_from_a_recording_how_item_3: 'Pulsa Quitar silencios.',
  tool_remove_silence_from_a_recording_how_item_4: 'Pulsa Exportar WAV o Exportar MP3.',
  tool_remove_silence_from_a_recording_how_title: 'Cómo funciona',
  tool_remove_silence_from_a_recording_hud_cut: 'Cortando huecos y uniendo un archivo…',
  tool_remove_silence_from_a_recording_hud_decode: 'Decodificando el archivo en esta pestaña…',
  tool_remove_silence_from_a_recording_hud_decoded: 'Decodificado. El rojo marca huecos. Pulsa Quitar silencios cuando el ajuste te convenza.',
  tool_remove_silence_from_a_recording_hud_detect: 'Midiendo ventanas quietas…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '{s}s transcurridos',
  tool_remove_silence_from_a_recording_hud_encode: 'Codificando MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'Corrige el archivo o los ajustes y vuelve a Quitar silencios.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'Quitar silencios se detuvo',
  tool_remove_silence_from_a_recording_hud_next: 'Listo. Siguiente: Exportar WAV o Exportar MP3.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'Listo. La descarga MP3 debería empezar.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'Cortar',
  tool_remove_silence_from_a_recording_hud_step_decode: 'Decodificar',
  tool_remove_silence_from_a_recording_hud_step_detect: 'Detectar',
  tool_remove_silence_from_a_recording_hud_step_encode: 'Codificar',
  tool_remove_silence_from_a_recording_hud_title: 'Progreso de quitar silencios',
  tool_remove_silence_from_a_recording_hud_working: 'Empezando…',
  tool_remove_silence_from_a_recording_keep: 'Conservar en cada hueco (segundos)',
  tool_remove_silence_from_a_recording_keep_hint: '0,15 s por defecto para que el corte no salte. 0 quita el hueco entero.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_remove_silence_from_a_recording_min_silence: 'Silencio mínimo (segundos)',
  tool_remove_silence_from_a_recording_min_silence_hint: '0,5 s por defecto. Las pausas más cortas entre palabras se quedan.',
  tool_remove_silence_from_a_recording_pause: 'Pausa',
  tool_remove_silence_from_a_recording_play: 'Reproducir',
  tool_remove_silence_from_a_recording_preset_gentle: 'Suave',
  tool_remove_silence_from_a_recording_preset_hint: 'Voz es el valor inicial. Suave deja más pausas. Ajustado corta más.',
  tool_remove_silence_from_a_recording_preset_speech: 'Voz',
  tool_remove_silence_from_a_recording_preset_tight: 'Ajustado',
  tool_remove_silence_from_a_recording_preview_hint: 'Las bandas rojas son huecos lo bastante largos para cortar. Reproducir escucha el archivo actual (o el resultado).',
  tool_remove_silence_from_a_recording_remove: 'Quitar silencios',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}s → {next}s. Quitados {removed}s ({pct}%) en {gaps} hueco(s). Ya puedes exportar.',
  tool_remove_silence_from_a_recording_rules_body:
    'Cada ~50 ms se mide RMS y se pasa a dB: levelDb = 20 × log10(rms). Un tramo bajo el umbral y más largo que el mínimo se acorta al margen y se concatena el habla. WAV es PCM de 16 bits. MP3 es CBR a la tasa elegida.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'Voz: −40 dB, 0,5 s mínimo, 0,15 s de margen. Sala ruidosa: −30 dB / 0,8 s / 0,20 s. Estudio: −50 dB / 0,4 s / 0,15 s.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'Tope de escritorio: unos 40 MB o 20 minutos; pantalla estrecha: unos 20 MB u 8 minutos. Por encima se rechaza, no se recorta a escondidas.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'Los archivos se quedan en el dispositivo; no se suben al servidor. El codificador MP3 carga desde este sitio solo tras Exportar MP3.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'La decodificación depende del navegador. DRM, algunos códecs y contenedores de vídeo fallan con un error claro.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'Se exporta un archivo. No hay ZIP de clips, ni reducción de ruido, ni quitar muletillas, ni silenciar vídeo, ni bajar YouTube.',
  tool_remove_silence_from_a_recording_rules_title: 'Reglas que debes esperar',
  tool_remove_silence_from_a_recording_sample: 'Cargar ejemplo',
  tool_remove_silence_from_a_recording_status_done: 'Listo.',
  tool_remove_silence_from_a_recording_threshold: 'Umbral de silencio (dB)',
  tool_remove_silence_from_a_recording_threshold_hint: '−40 dB por defecto. Más cerca de 0 trata más audio como silencio.',
  tool_remove_silence_from_a_recording_title: 'Elimina los silencios de una grabación',
  tool_remove_silence_from_a_recording_usecase_1:
    'Quita el aire muerto de un podcast entre dos voces y deja un solo episodio más corto.',
  tool_remove_silence_from_a_recording_usecase_2:
    'Acorta el audio de una reunión cortando tramos sin habla y exporta un MP3.',
  tool_remove_silence_from_a_recording_usecase_3:
    'Limpia las pausas de pensar de una nota de voz y envía un único archivo.',
  tool_remove_silence_from_a_recording_usecases_title: 'Para qué encaja',
  tool_remove_silence_from_a_recording_why_choose_body:
    'Hecha para un archivo más corto, con tabla de umbral y segundos quitados visibles en la página.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'Los huecos se cortan y el habla se cose en un archivo; no se descarga un ZIP de cortes.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'Los valores de voz (−40 dB / 0,5 s / 0,15 s) encajan en locuciones; la línea de resultado muestra los segundos quitados.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'El archivo se queda en esta pestaña y no se sube; Exportar MP3 carga el codificador solo al pulsar.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'Los archivos demasiado grandes o largos se rechazan antes de decodificar, sin prometer 1 GB que tumbe la pestaña.',
  tool_remove_silence_from_a_recording_why_choose_title: 'Por qué usar Elimina los silencios de una grabación',
};
export default es;
