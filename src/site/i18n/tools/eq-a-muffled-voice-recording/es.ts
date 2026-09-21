import type { SiteLangDict } from '../../../types';

/**
 * Spanish copy for eq-a-muffled-voice-recording (S20).
 * ≠ solo graves (S21), ≠ reducción de ruido (S24), ≠ de-esser (S31).
 */
const es: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "Ecualizar una grabación de voz apagada",
  tool_eq_a_muffled_voice_recording_desc:
    "Abre una voz apagada con Clarity, Warmth o Presence (tres bandas) y descarga un WAV de 16 bits. Solo en el dispositivo.",
  tool_eq_a_muffled_voice_recording_description:
    "Ecualizar una grabación de voz apagada con presets de tres bandas Clarity, Warmth o Presence. Pasos: ecualizar, previsualizar, descargar WAV. Ejemplo: carga la muestra apagada. Solo tono—no es refuerzo solo de graves, no es reducción de ruido, no es de-esser. El audio permanece en tu dispositivo; nunca se sube.",
  tool_eq_a_muffled_voice_recording_article:
    "Llamadas, mascarillas y micros lejanos suelen sonar apagados: demasiado barro bajo unos cientos de hercios y poca claridad en la banda de voz. Esta página encadena tres BiquadFilter en OfflineAudioContext—lowshelf, peaking y highshelf—como presets con nombre. Clarity corta el barro y abre la voz; Warmth aporta cuerpo y suaviza agudos duros; Presence eleva presencia media-alta y aire. Es EQ tonal para voz apagada, no un refuerzo solo de graves, no reducción de ruido de fondo ni un de-esser de sibilantes. Se mantienen 1 o 2 canales. Conserva el máster; la descarga es un WAV nuevo de 16 bits. Todo corre en el navegador.",
  tool_eq_a_muffled_voice_recording_choose: "Elige un archivo de audio",
  tool_eq_a_muffled_voice_recording_hint: "Suelta un WAV, MP3, M4A, AAC u OGG. Máximo 40 MiB y 10 minutos; mono o estéreo.",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "Descargar WAV",
  tool_eq_a_muffled_voice_recording_sample: "Cargar muestra",
  tool_eq_a_muffled_voice_recording_clear: "Borrar",
  tool_eq_a_muffled_voice_recording_advanced: "Presets de EQ",
  tool_eq_a_muffled_voice_recording_preset_label: "Preset de EQ de voz",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Clarity (predeterminado) corta barro y abre la voz. Warmth añade cuerpo con agudos más suaves. Presence eleva presencia media-alta y aire. La protección de picos evita el clipping tras los boosts.",
  tool_eq_a_muffled_voice_recording_progress: "Progreso del EQ",
  tool_eq_a_muffled_voice_recording_read: "Leer",
  tool_eq_a_muffled_voice_recording_decode: "Decodificar",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "Escribir",
  tool_eq_a_muffled_voice_recording_done: "Listo. Previsualiza el WAV ecualizado y luego Descargar WAV.",
  tool_eq_a_muffled_voice_recording_failed: "El EQ falló. Prueba un archivo de audio válido y más pequeño.",
  tool_eq_a_muffled_voice_recording_elapsed: "{s}s transcurridos",
  tool_eq_a_muffled_voice_recording_preview: "Escucha el WAV ecualizado",
  tool_eq_a_muffled_voice_recording_result: "{seconds}s · {preset} · pico {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "demo-voz-apagada-dos-segundos",
  tool_eq_a_muffled_voice_recording_empty: "Elige un archivo de audio o carga la muestra primero.",
  tool_eq_a_muffled_voice_recording_err_file: "Suelta exactamente un archivo de audio.",
  tool_eq_a_muffled_voice_recording_err_format: "Audio no admitido o dañado. Usa un archivo que el navegador pueda decodificar (WAV, MP3, M4A, AAC u OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "Usa un archivo de como máximo 40 MiB o 10 minutos, con uno o dos canales.",
  tool_eq_a_muffled_voice_recording_err_decode: "El navegador no pudo decodificar este audio. Prueba otra grabación válida.",
  tool_eq_a_muffled_voice_recording_err_encoder: "No se pudo escribir el WAV ecualizado. Revisa el preset e inténtalo de nuevo.",
  tool_eq_a_muffled_voice_recording_err_silence: "El nivel es casi silencio: no hay nada que ecualizar. Prueba una grabación audible.",
  tool_eq_a_muffled_voice_recording_how_title: "Cómo ecualizar una grabación de voz apagada",
  tool_eq_a_muffled_voice_recording_how_body:
    "Elige un preset de tres bandas, remodela el tono, escucha y descarga un WAV de 16 bits—sin subir el archivo.",
  tool_eq_a_muffled_voice_recording_how_item_1: "Elige un archivo de audio, o Cargar muestra para una demostración de voz apagada de dos segundos.",
  tool_eq_a_muffled_voice_recording_how_item_2: "Abre Presets de EQ y elige Clarity (predeterminado), Warmth o Presence.",
  tool_eq_a_muffled_voice_recording_how_item_3: "Pulsa EQ y espera Leer → Decodificar → EQ → Escribir.",
  tool_eq_a_muffled_voice_recording_how_item_4: "Previsualiza el resultado, comprueba preset y picos, luego Descargar WAV.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "Por qué elegir nuestras herramientas para ecualizar una grabación de voz apagada",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "Ves el preset, picos antes/después y KiB de salida antes de guardar.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "Tres presets claros de voz—un trabajo de EQ apagado, no un juguete de diez bandas ni solo graves.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "La decodificación, el EQ Biquad y la escritura WAV ocurren en tu dispositivo; la página no sube la grabación.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "Cambiar el preset o la entrada borra la descarga anterior para no guardar un WAV obsoleto.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity, Warmth, Presence y límites",
  tool_eq_a_muffled_voice_recording_rules_body:
    "Cada preset son tres etapas Biquad (lowshelf, peaking, highshelf). Clarity abre la voz apagada; Warmth aporta cuerpo; Presence eleva presencia y aire. La protección de picos escala el resultado si los boosts recortarían.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Clarity por defecto corta graves fangosos y abre la claridad de voz. Warmth eleva el cuerpo grave y suaviza agudos duros. Presence enfoca la presencia media-alta.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "Solo EQ tonal. No elimina ruido de ventilador, no es solo graves y no apunta a sibilantes como un de-esser.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "La exportación mantiene 1 o 2 canales. No se copian etiquetas. El original nunca se sobrescribe.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "Un archivo de hasta 40 MiB y diez minutos. La protección de picos puede bajar el nivel global tras boosts fuertes para no saturar el WAV.",
  tool_eq_a_muffled_voice_recording_example_title: "Prueba un EQ real de voz apagada",
  tool_eq_a_muffled_voice_recording_example:
    "Cargar muestra crea un tono apagado de dos segundos con graves fuertes y agudos débiles, y aplica Clarity automáticamente. La reproducción no arranca sola—pulsa play en la vista previa si quieres oír el resultado más claro.",
  tool_eq_a_muffled_voice_recording_usecases_title: "Cuándo ayuda",
  tool_eq_a_muffled_voice_recording_usecase_1: "Una toma de teléfono o mascarilla que suena encajonada—elige Clarity, EQ, descarga WAV.",
  tool_eq_a_muffled_voice_recording_usecase_2: "Una voz de podcast que necesita más cuerpo o presencia sin abrir un EQ completo de DAW.",
  tool_eq_a_muffled_voice_recording_faq_q1: "¿Es lo mismo que un refuerzo de graves?",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "No. Un refuerzo de graves principalmente eleva bajas frecuencias. Esta página ofrece tres presets multibanda para voz apagada. El refuerzo solo de graves es otro trabajo (Boost bass on an MP3 cuando esté disponible).",
  tool_eq_a_muffled_voice_recording_faq_q2: "¿Elimina el ruido de fondo?",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "No. El EQ remodela el tono; no suprime ventiladores, siseo ni ruido de sala. Para denoise usa una herramienta dedicada cuando esté disponible.",
  tool_eq_a_muffled_voice_recording_faq_q3: "¿Es un de-esser?",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "No. Un de-esser ataca sibilantes (S/Sh). Estos presets dan forma al tono apagado en graves, medios y agudos. Usa un de-esser dedicado cuando esté disponible.",
  tool_eq_a_muffled_voice_recording_faq_q4: "¿Qué hacen Clarity, Warmth y Presence?",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity corta barro y abre la voz. Warmth añade cuerpo grave y suaviza agudos duros. Presence eleva presencia media-alta y aire. La protección de picos evita el clipping tras los boosts.",
  tool_eq_a_muffled_voice_recording_faq_q5: "¿Qué pasa si el EQ calienta el archivo?",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "Tras la cadena de filtros, la protección de picos escala el búfer si los picos superarían unos −0,2 dBFS. Para limitación dedicada, usa Limitar picos para que un archivo no recorte.",
  tool_eq_a_muffled_voice_recording_faq_q6: "¿Se sube mi audio a un servidor?",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "No. Decodificación, EQ y escritura WAV ocurren en tu navegador. Hace falta red al cargar la página; no se garantiza uso offline. Para dinámica tras el EQ, usa Comprimir el rango dinámico de una grabación de voz o Limitar picos para que un archivo no recorte.",
};
export default es;
