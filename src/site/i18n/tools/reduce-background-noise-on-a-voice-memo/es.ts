import type { SiteLangDict } from '../../../types';

/**
 * Spanish copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const es: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "Reducir el ruido de fondo de un memo de voz",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "Baja el siseo estable de ventilador o aire acondicionado en un memo con Light, Medium o Strong (paso alto + puerta de suelo de ruido) y descarga un WAV de 16 bits. Solo en el dispositivo.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "Reduce el ruido de fondo de un memo de voz con presets Light, Medium o Strong: paso alto más puerta por suelo de ruido. Pasos: Reducir ruido, previsualizar, descargar WAV. Ejemplo: carga la muestra con siseo. Aprox. del navegador—no es Adobe Enhance Speech, no es dehum 50/60 Hz, no es EQ de voz apagada. El audio permanece en tu dispositivo; nunca se sube.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "Los memos de voz suelen llevar un siseo estable de ventilador, aire acondicionado o sala que tapa el habla. Esta página aplica un paso alto, estima el suelo de ruido en fotogramas quietos y atenúa con suavidad cerca de ese suelo. Light, Medium y Strong cambian cuánto se atenúan los tramos quietos. Es una aproximación honesta en el navegador—no Enhance en la nube, no muesca de zumbido eléctrico, no EQ de tres bandas. La música puede opacarse. Canales 1 o 2. Conserva el original; la descarga es un WAV de 16 bits nuevo. Todo corre en tu dispositivo.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "Elige un archivo de audio",
  tool_reduce_background_noise_on_a_voice_memo_hint: "Suelta un WAV, MP3, M4A, AAC u OGG. Máximo 40 MiB y 10 minutos; mono o estéreo.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "Reducir ruido",
  tool_reduce_background_noise_on_a_voice_memo_download: "Descargar WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "Cargar muestra",
  tool_reduce_background_noise_on_a_voice_memo_clear: "Borrar",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "Intensidad de reducción",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "Intensidad de reducción de ruido",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "Light",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "Medium",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "Strong",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "Medium equilibra habla y siseo. Light es más suave. Strong atenúa más los tramos quietos y puede adelgazar consonantes. Es paso alto + puerta—no Enhance por ML.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "Progreso de reducción",
  tool_reduce_background_noise_on_a_voice_memo_read: "Leer",
  tool_reduce_background_noise_on_a_voice_memo_decode: "Decodificar",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "Reducir ruido",
  tool_reduce_background_noise_on_a_voice_memo_write: "Escribir",
  tool_reduce_background_noise_on_a_voice_memo_done: "Listo. Previsualiza el WAV y descarga.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "Falló la reducción. Prueba un audio válido más pequeño.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "{s}s transcurridos",
  tool_reduce_background_noise_on_a_voice_memo_preview: "Escucha el WAV reducido",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds}s · {preset} · suelo {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "demo-memo-con-siseo-tres-segundos",
  tool_reduce_background_noise_on_a_voice_memo_empty: "Elige un audio o carga la muestra primero.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "Suelta exactamente un archivo de audio.",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "Audio no compatible o dañado. Usa WAV, MP3, M4A, AAC u OGG.",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "Máximo 40 MiB o 10 minutos, con uno o dos canales.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "El navegador no pudo decodificar este audio.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "No se pudo escribir el WAV. Revisa la intensidad e inténtalo de nuevo.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "Nivel casi silencio—nada que reducir. Usa un audio audible.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "Cómo reducir el ruido de fondo de un memo de voz",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "Elige intensidad, aplica paso alto y puerta, escucha y descarga un WAV de 16 bits—sin subir el archivo.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "Elige un audio o Cargar muestra (demo de tres segundos con siseo).",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "Abre Intensidad y elige Light, Medium (predeterminado) o Strong.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "Pulsa Reducir ruido y espera Leer → Decodificar → Reducir ruido → Escribir.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "Previsualiza, revisa la línea de resultado y Descargar WAV.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "Por qué elegir nuestras herramientas Reducir el ruido de fondo de un memo de voz",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "Ves intensidad, suelo estimado y KiB de salida antes de guardar.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "Tres intensidades claras—un solo trabajo de denoise, no un DAW ni Enhance en la nube.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "Decodificación, paso alto, puerta y WAV corren en tu dispositivo; no se sube la grabación.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "Cambiar intensidad o entrada borra la descarga antigua.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "Intensidad, suelo de ruido y límites honestos del navegador",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "Cada intensidad aplica paso alto, estima el suelo en tramos quietos y atenúa cerca de él. El siseo estable mejora más; consonantes y música pueden adelgazarse.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "Light, Medium y Strong cambian el corte del paso alto y la ganancia residual. Predeterminado: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "Aproximación del navegador. No es Adobe Enhance Speech, ni dehum 50/60 Hz, ni EQ de voz apagada.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "Canales 1 o 2. No se copian etiquetas. El original no se sobrescribe.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "Un archivo hasta 40 MiB y diez minutos. Strong puede dejar artefactos; si suena hueco, vuelve a Light o Medium.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "Prueba un memo con siseo real",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "Cargar muestra crea tres segundos de tono tipo habla bajo siseo y aplica Medium automáticamente. La reproducción no arranca sola—pulsa play en la vista previa.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "Cuándo ayuda",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "Memo del teléfono con ventilador o AC—elige Medium, reduce, descarga WAV.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "Nota rápida que necesita menos siseo antes de fundidos o EQ en otro sitio.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_3: "Un ventilador o aire acondicionado constante queda bajo la voz y un gate suave debe callar los huecos.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "¿Es lo mismo que Adobe Enhance Speech?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "No. Enhance en la nube reconstruye el habla con modelos grandes. Aquí solo hay paso alto y puerta por suelo en el navegador. Resultado modesto y honesto.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "¿Quita el zumbido eléctrico 50/60 Hz?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "No como dehum dedicado. Mejora sobre todo el siseo de banda ancha. Para un notch estrecho de 50/60 Hz use Quitar el zumbido de red de una grabación.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "¿Es lo mismo que EQ a muffled voice recording?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "No. Esa página cambia el tono con Clarity/Warmth/Presence. Esta reduce ruido de fondo estable. Tras denoise, usa EQ a muffled voice recording para el tono.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "¿Strong puede dañar el habla o la música?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "Sí. Atenúa más los tramos quietos y puede adelgazar consonantes. Prefiere Medium; usa Light si el habla ya es suave.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "¿Qué cambian Light, Medium y Strong?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "Suben un poco el corte del paso alto y bajan la ganancia cuando un fotograma está cerca del suelo estimado. Predeterminado: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "¿Se sube mi audio a un servidor?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "No. Decodificación, denoise y WAV corren en tu navegador. Hace falta red al cargar la página; no se garantiza uso offline. Para bordes suaves usa Fade in and fade out an audio clip; para tono apagado, EQ a muffled voice recording.",
};
export default es;
