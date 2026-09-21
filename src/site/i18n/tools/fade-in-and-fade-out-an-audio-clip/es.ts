import type { SiteLangDict } from '../../../types';

/**
 * Spanish copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const es: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "Añadir fundido de entrada y salida a un clip",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "Suaviza inicios y finales bruscos con chips de 0,5–3 s y curvas lineal o equal-power; descarga un WAV de 16 bits. Solo en el dispositivo.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "Añadir fundido de entrada y salida a un clip con chips de 0,5, 1, 2 o 3 segundos en cada extremo y curva lineal o equal-power. Pasos: fundir, previsualizar, descargar WAV. Ejemplo: carga la muestra brusca. Solo bordes—no un cruce envolvente para bucle sin costura, ni limitador ni ecualizador. El audio permanece en tu dispositivo; nunca se sube.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "Los cortes duros al inicio o al final hacen clic en altavoces y suenan bruscos en la línea de tiempo. Esta página aplica una envolvente de entrada al comienzo y de salida al final. Elige 0,5, 1, 2 o 3 s por extremo, luego Lineal o Equal-power. Si la suma supera la duración, ambos lados se acortan en proporción. Es fundido de bordes en un clip—no envolver la cola en la cabeza para un bucle sin costura, ni limitar picos ni ecualizar. Se mantienen 1 o 2 canales. Conserva el original; la descarga es un WAV de 16 bits nuevo. El trabajo corre en el navegador.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "Elige un archivo de audio",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "Suelta un WAV, MP3, M4A, AAC u OGG. Máximo 40 MiB y 10 minutos; mono o estéreo.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "Fundir",
  tool_fade_in_and_fade_out_an_audio_clip_download: "Descargar WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "Cargar muestra",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "Borrar",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "Ajustes de fundido",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "Fundido de entrada",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "Fundido de salida",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "Curva",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "Lineal",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "Por defecto 1 s de entrada, 1 s de salida y Equal-power. Chips cortos para percusión; largos para pads y voz. Si se solapan más allá de la duración, se acortan juntos.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "Progreso del fundido",
  tool_fade_in_and_fade_out_an_audio_clip_read: "Leer",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "Decodificar",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "Fundir",
  tool_fade_in_and_fade_out_an_audio_clip_write: "Escribir",
  tool_fade_in_and_fade_out_an_audio_clip_done: "Listo. Previsualiza el WAV con fundido y luego Descarga WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "El fundido falló. Prueba un archivo de audio válido más pequeño.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "{s}s transcurridos",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "Escucha el WAV con fundido",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds}s · in {fadeIn}s · out {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "demo-brusca-cuatro-segundos",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "Elige un archivo de audio o carga la muestra primero.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "Suelta exactamente un archivo de audio.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "Audio no compatible o dañado. Usa un archivo que el navegador pueda decodificar (WAV, MP3, M4A, AAC u OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "Usa un archivo de no más de 40 MiB o 10 minutos, con uno o dos canales.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "El navegador no pudo decodificar este audio. Prueba otra grabación válida.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "No se pudo escribir el WAV con fundido. Revisa los ajustes y pulsa Fundir de nuevo.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "El nivel es casi silencio: no hay nada que fundir. Prueba una grabación audible.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "El clip es demasiado corto para un fundido útil. Usa un archivo de más de unos 50 ms.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "Cómo añadir fundido de entrada y salida a un clip",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "Elige duraciones y curva, aplica el fundido, escucha y descarga un WAV de 16 bits—sin subir el archivo.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "Elige un archivo de audio, o Cargar muestra para una demostración brusca de cuatro segundos.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "Abre Ajustes de fundido y elige chips de entrada y salida (0,5 / 1 / 2 / 3 s). Por defecto 1 s cada uno.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "Elige Lineal o Equal-power (predeterminado), pulsa Fundir y espera Leer → Decodificar → Fundir → Escribir.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "Previsualiza el inicio y el final suaves, revisa la línea de resultado y pulsa Descargar WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title:
    "Por qué elegir nuestras herramientas Añadir fundido de entrada y salida a un clip",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "Ve segundos de entrada/salida, nombre de curva y KiB de salida antes de guardar.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "Chips claros y dos curvas—un trabajo de bordes, no un bucle sin costura ni una cadena de limitador/EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "La decodificación, las envolventes y la escritura WAV corren en tu dispositivo; la página no sube tu grabación para procesarla.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "Cambiar chips, curva o entrada borra la descarga anterior para no guardar un WAV obsoleto.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "Duraciones, curvas y límites",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "La entrada sube desde silencio; la salida cae a silencio. Lineal es rampa recta; Equal-power usa seno/coseno. Las solicitudes solapadas se acortan en proporción.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "Cada extremo ofrece 0,5, 1, 2 o 3 segundos. Por defecto 1 s / 1 s y Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "Solo funde los bordes de un clip. No envuelve la cola en la cabeza para un bucle sin costura, ni limita picos ni reeqializa bandas.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "La exportación conserva 1 o 2 canales. No se copian etiquetas. El original nunca se sobrescribe.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "Un archivo hasta 40 MiB y diez minutos. Si la suma supera la duración, ambos lados se escalan hacia abajo.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "Prueba un fundido real de bordes",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "Cargar muestra crea un tono de cuatro segundos que empieza y termina de golpe, luego Fundir a 1 s / 1 s Equal-power automáticamente. La reproducción no arranca sola—pulsa play en la vista previa si quieres oír los bordes suaves.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "Cuándo ayuda",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "Una voz en off o cama musical que hace clic en los cortes—elige 1 s / 1 s, Fundir, descarga WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "Un clip que necesita bordes suaves antes de recortar o colocar en la línea de tiempo—sin construir un bucle sin costura.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "¿Es lo mismo que Hacer un bucle de audio sin costuras?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "No. Esa herramienta envuelve la cola seleccionada en la cabeza con un cruce para que el empalme ciclique limpio. Esta página solo suaviza el inicio y el final de un clip. Para bucles sin costura, usa Hacer un bucle de audio sin costuras.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "¿Limita picos o ecualiza el tono?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "No. Solo multiplica muestras por una envolvente. Para limitar picos usa la herramienta de limitación; para graves usa Potenciar los graves de un MP3.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "¿Qué es Equal-power frente a Lineal?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "Lineal rampa la ganancia en línea recta. Equal-power usa seno en la entrada y la forma coseno correspondiente en la salida para una sonoridad más suave. El valor predeterminado es Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "¿Y si 3 s + 3 s es más largo que mi clip?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "Ambos extremos se acortan en proporción para que la suma no supere la duración. La línea de resultado muestra los segundos reales aplicados.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "¿Puedo fundir solo un extremo?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "Los chips fijan ambos extremos; usa el chip más corto (0,5 s) en el que apenas quieras tocar, o recorta primero con Recortar un clip de audio y exportar.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "¿Se sube mi audio a un servidor?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "No. La decodificación, los fundidos y la escritura WAV corren en tu navegador. La página necesita red al cargar; no se garantiza uso sin conexión. Para bucles sin costura usa esa herramienta; para cortar duración, Recortar un clip de audio y exportar.",
};
export default es;
