import type { SiteLangDict } from '../../../types';

/**
 * Spanish copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const es: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "Comprimir el rango dinámico de una grabación de voz",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    "Aplana picos de voz irregulares con presets suave/medio/fuerte y makeup opcional; descarga WAV 16 bits. Solo en el dispositivo.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    "Comprime el rango dinámico de una grabación de voz con presets suave, medio o fuerte y makeup opcional. Pasos: comprimir, preescuchar, descargar WAV. Ejemplo: carga la muestra irregular. Remodela dinámica—no comprimir tamaño MP3, no ganancia dB fija, no normalizar pico ni LUFS. El audio permanece en tu dispositivo; nunca se sube.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    "Las tomas de voz suelen saltar de susurros a picos. Esta página ejecuta un compresor de envolvente de pico en JavaScript puro: suave/medio con soft knee, fuerte con hard knee (suave ≈ −18 dB / 2:1, medio ≈ −24 / 3:1 por defecto, fuerte ≈ −30 / 6:1). Makeup opcional restaura el nivel tras domesticar picos, con protección suave antes del WAV 16 bits. Eso es compresión de rango dinámico, no reducir un MP3 para ahorrar bytes, no boost dB fijo, no normalizar pico ni igualar LUFS. 1 o 2 canales. Conserva el master. Trabajo en el navegador.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "Elige un archivo de audio",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "Suelta un WAV, MP3, M4A, AAC u OGG. Máximo 40 MiB y 10 minutos; mono o estéreo.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "Comprimir",
  tool_compress_dynamic_range_of_a_voice_recording_download: "Descargar WAV",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "Cargar muestra",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "Borrar",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "Ajustes del compresor",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "Preset de intensidad",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "Suave",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "Medio",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "Fuerte",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "Ganancia makeup",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "Sí",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "No",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    "Suave (−18 dB, 2:1, soft knee) es leve. Medio (−24 dB, 3:1) sirve para muchas voces. Fuerte (−30 dB, 6:1, hard knee) aprieta más. Makeup (Sí por defecto) restaura el nivel tras comprimir con protección de pico.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "Progreso de compresión",
  tool_compress_dynamic_range_of_a_voice_recording_read: "Leer",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "Decodificar",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "Comprimir",
  tool_compress_dynamic_range_of_a_voice_recording_write: "Escribir",
  tool_compress_dynamic_range_of_a_voice_recording_done: "Listo. Preescucha el WAV comprimido y descarga.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "La compresión falló. Prueba un audio válido más pequeño.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "{s}s transcurridos",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "Escucha el WAV comprimido",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds}s · {preset} · makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "demo-voz-dinamica-dos-segundos",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "Elige un audio o carga la muestra primero.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "Suelta exactamente un archivo de audio.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format: "Audio no compatible o dañado. Usa un archivo que el navegador pueda decodificar (WAV, MP3, M4A, AAC u OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "Usa un archivo de no más de 40 MiB o 10 minutos, con uno o dos canales.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "El navegador no pudo decodificar este audio. Prueba otra grabación válida.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "No se pudo escribir el WAV. Revisa preset y makeup e intenta Comprimir de nuevo.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "El nivel es casi silencio: no hay nada que comprimir.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "Cómo comprimir el rango dinámico de una grabación de voz",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    "Elige un preset de intensidad, activa o no el makeup, comprime, escucha y descarga un WAV de 16 bits—sin subir el archivo.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "Elige una grabación de voz, o Cargar muestra para un tono de dos segundos con alta dinámica.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    "Abre Ajustes del compresor y elige Suave, Medio (predeterminado) o Fuerte; deja Makeup en Sí salvo que solo quieras controlar picos.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "Pulsa Comprimir y espera Leer → Decodificar → Comprimir → Escribir.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "Preescucha, revisa preset/umbral/ratio/makeup y picos, luego Descargar WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "Por qué elegir nuestras herramientas de compresión de rango dinámico",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "Ve preset, umbral, ratio, makeup, picos y KiB de salida antes de guardar.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "Tres presets claros de voz—un trabajo de dinámica, no un muro de tamaño MP3/ganancia/normalizar.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "Decodificación, compresión y WAV corren en tu dispositivo; la página no sube la grabación.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "Cambiar preset, makeup o entrada borra la descarga antigua para no guardar un WAV obsoleto.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "Umbral, ratio, makeup y límites",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    "Un compresor de envolvente reduce la ganancia al cruzar el umbral según el ratio (soft knee en Suave/Medio; hard knee en Fuerte). Makeup multiplica después; la protección suave mantiene muestras bajo ~0.99. Remodela fuerte vs suave—a diferencia de ganancia fija, normalizar pico, LUFS o bajar bitrate MP3.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    "Medio (−24 dB, 3:1, soft knee) es el predeterminado. Suave es más leve; Fuerte usa umbral más bajo, ratio más alto y hard knee.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2:
    "Makeup por defecto Sí restaura el nivel tras domesticar picos. Pon No si solo quieres picos más bajos sin elevación.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "La exportación conserva 1 o 2 canales. No se copian etiquetas. El original no se sobrescribe.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4:
    "Un archivo hasta 40 MiB y diez minutos. No es comprimir tamaño MP3, ni ganancia fija, ni normalizar pico, ni igualar LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "Prueba una compresión real de rango dinámico",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    "Cargar muestra crea un tono de 440 Hz de dos segundos con ráfagas fuertes y suaves, luego Comprimir en Medio con Makeup Sí automáticamente. La reproducción no arranca sola—pulsa play en la vista previa.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "Cuándo ayuda",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "Una voz en off que salta de frases quietas a picos fuertes—elige Podcast, comprime y descarga WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "Una entrevista que quieres más pareja antes de igualar loudness, sin reducir un MP3 por tamaño.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_3: "Susurros y picos pelean en una toma y quieres un nivel de escucha más pareja.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "¿Es lo mismo que comprimir / reducir el tamaño de un MP3?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "No. Aquí «comprimir» es rango dinámico (umbral/ratio), no bajar bitrate o bytes. Para MP3 más pequeños usa Reduce an MP3 file size. En chino, 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "¿Es lo mismo que subir una grabación quieta con ganancia dB fija?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "No. La ganancia fija multiplica todo el clip. Aquí lo fuerte se reduce más que lo suave. Para boost uniforme usa Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "¿Es normalizar a pico o igualar LUFS de podcast?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "No. Normalizar a pico apunta a un dBFS; LUFS apunta a sonoridad integrada. Esta página remodela dinámica con un compresor. Usa Normalize an audio file to peak o Match podcast loudness to −16 LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "¿Qué cambian Suave, Medio y Fuerte?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4:
    "Fijan umbral, ratio y knee. Suave ≈ −18 / 2:1 soft; Medio ≈ −24 / 3:1 soft; Fuerte ≈ −30 / 6:1 hard. Makeup Sí/No es aparte.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "¿Debo dejar Makeup en Sí?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    "Suele sí: la compresión puede bajar el promedio; makeup lo restaura con protección de pico. Pon No si solo quieres picos más quietos sin boost.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "¿Se sube mi audio a un servidor?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "No. Decodificación, compresión y WAV corren en tu navegador. Hace falta red al cargar la página; no se garantiza uso offline. Para loudness o ganancia usa Match podcast loudness to −16 LUFS o Make a quiet recording louder.",
};
export default es;
