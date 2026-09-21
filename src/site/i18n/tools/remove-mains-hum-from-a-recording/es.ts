import type { SiteLangDict } from '../../../types';

/**
 * Spanish copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const es: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "Quitar el zumbido de red de una grabación",
  tool_remove_mains_hum_from_a_recording_desc:
    "Corta el zumbido eléctrico de 50 o 60 Hz con filtros notch y armónicos opcionales; luego descarga un WAV de 16 bits. Solo en el dispositivo.",
  tool_remove_mains_hum_from_a_recording_description:
    "Quita el zumbido de red de una grabación con filtros notch de 50 o 60 Hz y armónicos 2.º–5.º opcionales. Pasos: Quitar zumbido, previsualizar, descargar WAV. Ejemplo: carga la muestra con zumbido. Notch estrechos para zumbido eléctrico—no denoise de banda ancha, no declick, no EQ de voz apagada. El audio permanece en tu dispositivo; nunca se sube.",
  tool_remove_mains_hum_from_a_recording_article: "Las grabaciones cerca de fuentes, atenuadores o equipos mal conectados a tierra a menudo captan un zumbido estable de 50 o 60 Hz, a veces con armónicos. Esta página encadena etapas notch EQ filter en on-device audio processing en el fundamental elegido y, opcionalmente, los armónicos 2.º a 5.º bajo Nyquist. Ataca tonos eléctricos estrechos—no denoise de silbido de ventilador, no reparación de clics y no EQ de tres bandas para voz apagada. El bajo cerca del notch puede adelgazarse un poco. Los canales siguen en 1 o 2. Conserva el original; la descarga es un WAV de 16 bits nuevo. Todo corre en el navegador en tu dispositivo.",
  tool_remove_mains_hum_from_a_recording_choose: "Elige un archivo de audio",
  tool_remove_mains_hum_from_a_recording_hint: "Suelta un WAV, MP3, M4A, AAC u OGG. Máximo 40 MiB y 10 minutos; mono o estéreo.",
  tool_remove_mains_hum_from_a_recording_convert: "Quitar zumbido",
  tool_remove_mains_hum_from_a_recording_download: "Descargar WAV",
  tool_remove_mains_hum_from_a_recording_sample: "Cargar muestra",
  tool_remove_mains_hum_from_a_recording_clear: "Borrar",
  tool_remove_mains_hum_from_a_recording_advanced: "Frecuencia de red y armónicos",
  tool_remove_mains_hum_from_a_recording_hz_label: "Frecuencia de red",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "Armónicos",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "Solo fundamental",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "Incluir armónicos",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "Por defecto 50 Hz con armónicos aplica notch al fundamental y a los 2.º–5.º bajo Nyquist. Elige 60 Hz para redes de América del Norte y similares. Solo fundamental es más suave con el bajo cercano.",
  tool_remove_mains_hum_from_a_recording_progress: "Progreso de quitar zumbido",
  tool_remove_mains_hum_from_a_recording_read: "Leer",
  tool_remove_mains_hum_from_a_recording_decode: "Decodificar",
  tool_remove_mains_hum_from_a_recording_dehum: "Quitar zumbido",
  tool_remove_mains_hum_from_a_recording_write: "Escribir",
  tool_remove_mains_hum_from_a_recording_done: "Listo. Previsualiza el WAV sin zumbido y descarga el WAV.",
  tool_remove_mains_hum_from_a_recording_failed: "Falló quitar el zumbido. Prueba un archivo de audio válido más pequeño.",
  tool_remove_mains_hum_from_a_recording_elapsed: "{s}s transcurridos",
  tool_remove_mains_hum_from_a_recording_preview: "Escucha el WAV sin zumbido",
  tool_remove_mains_hum_from_a_recording_result: "{seconds}s · {hz} Hz · {harmonics} · {notches} notches · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "demo-zumbido-red-tres-segundos",
  tool_remove_mains_hum_from_a_recording_empty: "Elige un archivo de audio o carga la muestra primero.",
  tool_remove_mains_hum_from_a_recording_err_file: "Suelta exactamente un archivo de audio.",
  tool_remove_mains_hum_from_a_recording_err_format: "Audio no admitido o dañado. Usa un archivo que el navegador pueda decodificar (WAV, MP3, M4A, AAC u OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit: "Usa un archivo de como máximo 40 MiB o 10 minutos, con uno o dos canales.",
  tool_remove_mains_hum_from_a_recording_err_decode: "El navegador no pudo decodificar este audio. Prueba otra grabación válida.",
  tool_remove_mains_hum_from_a_recording_err_encoder: "No se pudo escribir el WAV sin zumbido. Revisa frecuencia y armónicos e inténtalo de nuevo.",
  tool_remove_mains_hum_from_a_recording_err_silence: "El nivel es casi silencio: no hay nada que limpiar. Prueba una grabación con nivel audible.",
  tool_remove_mains_hum_from_a_recording_how_title: "Cómo quitar el zumbido de red de una grabación",
  tool_remove_mains_hum_from_a_recording_how_body:
    "Elige 50 o 60 Hz, decide los armónicos, aplica los notches, escucha y descarga un WAV de 16 bits—sin subir el archivo.",
  tool_remove_mains_hum_from_a_recording_how_item_1: "Elige un archivo de audio, o selecciona Cargar muestra para una demostración de tres segundos con zumbido.",
  tool_remove_mains_hum_from_a_recording_how_item_2: "Abre Frecuencia de red y armónicos: elige 50 o 60 Hz, luego Solo fundamental o Incluir armónicos.",
  tool_remove_mains_hum_from_a_recording_how_item_3: "Haz clic en Quitar zumbido y espera Leer → Decodificar → Quitar zumbido → Escribir.",
  tool_remove_mains_hum_from_a_recording_how_item_4: "Previsualiza el fondo eléctrico más quieto, revisa la línea de resultado y descarga el WAV.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "Por qué elegir nuestras herramientas Quitar el zumbido de red de una grabación",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "Ve Hz de red, modo de armónicos, número de notches y KiB de salida antes de guardar.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "Un trabajo claro de dehum—notches 50/60 Hz con armónicos opcionales, no un rack DAW enterrado.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "La decodificación, el filtrado notch y la escritura WAV corren en tu dispositivo; la página no sube la grabación para procesarla.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "Cambiar frecuencia, armónicos o la entrada borra la descarga antigua para que no guardes un WAV obsoleto.",
  tool_remove_mains_hum_from_a_recording_rules_title: "Frecuencia notch, armónicos y límites honestos del navegador",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "Cada ejecución encadena filtros notch estrechos en el fundamental elegido y, si está activado, armónicos 2–5 bajo Nyquist. Los tonos de red reales mejoran más; el silbido de banda ancha necesita denoise en otro sitio. La protección de pico suave mantiene el WAV bajo escala completa.",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 Hz o 60 Hz fijan el fundamental. Incluir armónicos añade notches en 2×–5× bajo Nyquist. Por defecto: 50 Hz con armónicos.",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "Es una cadena notch del navegador. No es denoise de banda ancha, no repara clics y no es EQ de voz apagada.",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "La exportación conserva 1 o 2 canales. No se copian etiquetas. El archivo original nunca se sobrescribe.",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "Un archivo de hasta 40 MiB y diez minutos. El bajo cerca del notch puede adelgazarse; si suena hueco, prueba Solo fundamental.",
  tool_remove_mains_hum_from_a_recording_example_title: "Prueba un clip con zumbido real",
  tool_remove_mains_hum_from_a_recording_example:
    "Cargar muestra crea un tono similar a voz de tres segundos bajo zumbido de 50 Hz más armónicos, luego Quitar zumbido a 50 Hz con armónicos automáticamente. La reproducción no arranca sola: pulsa play en la vista previa si quieres oír el fondo más quieto.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "Cuándo ayuda",
  tool_remove_mains_hum_from_a_recording_usecase_1: "Una nota de voz con zumbido eléctrico estable de un cargador o atenuador—elige los Hz de tu red, Quitar zumbido, descarga WAV.",
  tool_remove_mains_hum_from_a_recording_usecase_2: "Una toma de campo que necesita quitar el tono de red antes de denoising de silbido o EQ de voz apagada en otro sitio.",
  tool_remove_mains_hum_from_a_recording_usecase_3: "Se oye un zumbido de 50/60 Hz de la corriente bajo la toma.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "¿Es lo mismo que reducir el ruido de fondo de un memo de voz?",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "No. Esa página aplica paso alto y puerta al silbido de ventilador o aire acondicionado. Esta página aplica notch a tonos eléctricos estrechos de 50/60 Hz. Usa Reducir el ruido de fondo de un memo de voz para silbido de banda ancha.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "¿Quita clics y pops?",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "No. Clics, pops de boca y crepitado de vinilo necesitan un trabajo de declick. Esta página solo aplica notch al fundamental de red y a armónicos opcionales.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "¿Es lo mismo que EQ a muffled voice recording?",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "No. Esa página remodela el tono con Clarity, Warmth o Presence. Esta página quita zumbido eléctrico. Para tono apagado después del dehum, usa EQ a muffled voice recording.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "¿Debo elegir 50 Hz o 60 Hz?",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "Coincide con tu red eléctrica. Gran parte de Europa, Asia, África y Australia usa 50 Hz. América del Norte y partes de Japón y Sudamérica usan 60 Hz. Hz incorrectos dejan el zumbido casi intacto.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "¿Qué hace Incluir armónicos?",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "Añade notches en dos a cinco veces el fundamental cuando esas frecuencias están bajo Nyquist. El zumbido suele tener armónicos; Solo fundamental es más suave con el bajo cercano.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "¿Se sube mi audio a un servidor?",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "No. La decodificación, el filtrado notch y la escritura WAV corren en tu navegador en el dispositivo. La página necesita red al cargarse; no se garantiza uso offline. Para silbido de banda ancha usa Reducir el ruido de fondo de un memo de voz; para tono apagado usa EQ a muffled voice recording.",
};
export default es;
