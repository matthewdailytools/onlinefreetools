import type { SiteLangDict } from '../../../types';

/**
 * Spanish copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const es: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "Potenciar los graves de un MP3",
  tool_boost_bass_on_an_mp3_desc:
    "Engrosa graves finos con presets Mild, Medium o Strong de low-shelf y descarga un WAV de 16 bits. Solo en el dispositivo.",
  tool_boost_bass_on_an_mp3_description:
    "Potenciar los graves de un MP3 con presets Mild, Medium o Strong de low-shelf. Pasos: potenciar, previsualizar, descargar WAV. Ejemplo: carga la muestra de graves finos. Solo graves en estantería baja—no un ecualizador multibanda completo ni un potenciador de volumen de todo el archivo. El audio permanece en tu dispositivo; nunca se sube.",
  tool_boost_bass_on_an_mp3_article:
    "Las exportaciones del móvil y los altavoces del portátil suelen dejar el bombo y el bajo finos: mucho medio y poca peso bajo ~100 Hz. Esta página ejecuta una etapa BiquadFilter lowshelf en OfflineAudioContext. Mild es suave; Medium (predeterminado) es un realce cotidiano; Strong empuja más. La protección suave de picos escala el resultado si el realce recortaría. Eso es potenciar graves—no el EQ de tres bandas Clarity/Warmth/Presence para voz apagada, ni una ganancia plana en dB que sube todo. Se mantienen 1 o 2 canales. Conserva el máster; la descarga es un WAV de 16 bits nuevo. El trabajo corre en el navegador.",
  tool_boost_bass_on_an_mp3_choose: "Elige un archivo de audio",
  tool_boost_bass_on_an_mp3_hint: "Suelta un WAV, MP3, M4A, AAC u OGG. Máximo 40 MiB y 10 minutos; mono o estéreo.",
  tool_boost_bass_on_an_mp3_convert: "Potenciar",
  tool_boost_bass_on_an_mp3_download: "Descargar WAV",
  tool_boost_bass_on_an_mp3_sample: "Cargar muestra",
  tool_boost_bass_on_an_mp3_clear: "Borrar",
  tool_boost_bass_on_an_mp3_advanced: "Presets de graves",
  tool_boost_bass_on_an_mp3_preset_label: "Preset de graves low-shelf",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "Medium (predeterminado) realza lows cerca de 90 Hz. Mild es más suave; Strong más pesado. La protección de picos evita el clipping tras el boost.",
  tool_boost_bass_on_an_mp3_progress: "Progreso del boost de graves",
  tool_boost_bass_on_an_mp3_read: "Leer",
  tool_boost_bass_on_an_mp3_decode: "Decodificar",
  tool_boost_bass_on_an_mp3_boost: "Potenciar",
  tool_boost_bass_on_an_mp3_write: "Escribir",
  tool_boost_bass_on_an_mp3_done: "Listo. Previsualiza el WAV con más graves y descarga WAV.",
  tool_boost_bass_on_an_mp3_failed: "Falló el boost de graves. Prueba un archivo de audio válido más pequeño.",
  tool_boost_bass_on_an_mp3_elapsed: "{s}s transcurridos",
  tool_boost_bass_on_an_mp3_preview: "Escucha el WAV con graves potenciados",
  tool_boost_bass_on_an_mp3_result: "{seconds}s · {preset} · pico {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "demo-graves-finos-dos-segundos",
  tool_boost_bass_on_an_mp3_empty: "Elige un archivo de audio o carga la muestra primero.",
  tool_boost_bass_on_an_mp3_err_file: "Suelta exactamente un archivo de audio.",
  tool_boost_bass_on_an_mp3_err_format: "Audio no compatible o dañado. Usa un archivo que el navegador pueda decodificar (WAV, MP3, M4A, AAC u OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "Usa un archivo de como máximo 40 MiB o 10 minutos, con uno o dos canales.",
  tool_boost_bass_on_an_mp3_err_decode: "El navegador no pudo decodificar este audio. Prueba otra grabación válida.",
  tool_boost_bass_on_an_mp3_err_encoder: "No se pudo escribir el WAV potenciado. Revisa el preset y vuelve a potenciar.",
  tool_boost_bass_on_an_mp3_err_silence: "El nivel es casi silencio: no hay nada que potenciar. Usa una grabación audible.",
  tool_boost_bass_on_an_mp3_how_title: "Cómo potenciar los graves de un MP3",
  tool_boost_bass_on_an_mp3_how_body:
    "Elige un preset low-shelf, sube los graves, escucha y descarga un WAV de 16 bits—sin subir el archivo.",
  tool_boost_bass_on_an_mp3_how_item_1: "Elige un archivo de audio, o Cargar muestra para una demo de graves finos de dos segundos.",
  tool_boost_bass_on_an_mp3_how_item_2: "Abre Presets de graves y elige Mild, Medium (predeterminado) o Strong.",
  tool_boost_bass_on_an_mp3_how_item_3: "Pulsa Potenciar y espera Leer → Decodificar → Potenciar → Escribir.",
  tool_boost_bass_on_an_mp3_how_item_4: "Previsualiza el resultado, revisa preset y picos, luego Descargar WAV.",
  tool_boost_bass_on_an_mp3_why_choose_title: "Por qué elegir nuestras herramientas para potenciar graves de un MP3",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "Ve el nombre del preset, picos antes/después y KiB de salida antes de guardar.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "Tres presets low-shelf claros—un solo trabajo de graves, no un EQ de diez bandas ni un muro de volumen.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "La decodificación, el boost lowshelf y la escritura WAV corren en tu dispositivo; la página no sube el audio.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "Cambiar el preset o la entrada borra la descarga antigua para no guardar un WAV obsoleto.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild, Medium, Strong y límites",
  tool_boost_bass_on_an_mp3_rules_body:
    "Cada preset es una etapa lowshelf Biquad. Mild es suave; Medium el realce cotidiano; Strong más pesado. La protección de picos escala si el boost recortaría.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Medium (predeterminado) usa lowshelf cerca de 90 Hz a unos +8 dB. Mild ~+4 dB; Strong ~+12 dB con estantería un poco más baja.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "Solo graves low-shelf. No remodela medios/agudos como un EQ de voz apagada, ni amplifica todas las frecuencias como un volume booster.",
  tool_boost_bass_on_an_mp3_rules_item_3: "La exportación mantiene 1 o 2 canales. No se copian etiquetas. El original no se sobrescribe.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "Un archivo hasta 40 MiB y diez minutos. Tras Strong, la protección de picos puede bajar el nivel global para no superar escala completa.",
  tool_boost_bass_on_an_mp3_example_title: "Prueba un boost de graves real",
  tool_boost_bass_on_an_mp3_example:
    "Cargar muestra crea un tono de dos segundos con medios fuertes y graves débiles, luego potencia en Medium automáticamente. La reproducción no arranca sola—pulsa play en la vista previa si quieres oír el resultado más pesado.",
  tool_boost_bass_on_an_mp3_usecases_title: "Cuándo ayuda",
  tool_boost_bass_on_an_mp3_usecase_1: "Un MP3 exportado que suena fino en altavoces—elige Medium, Potenciar, descarga WAV.",
  tool_boost_bass_on_an_mp3_usecase_2: "Una pista que necesita más peso de bombo sin abrir un EQ gráfico completo ni subir toda la mezcla.",
  tool_boost_bass_on_an_mp3_faq_q1: "¿Es lo mismo que ecualizar una grabación de voz apagada?",
  tool_boost_bass_on_an_mp3_faq_a1:
    "No. Esa página usa presets Clarity/Warmth/Presence de tres bandas para voz apagada. Esta solo sube graves con lowshelf. Para EQ de voz apagada, usa Ecualizar una grabación de voz apagada.",
  tool_boost_bass_on_an_mp3_faq_q2: "¿Es lo mismo que hacer más alta una grabación silenciosa?",
  tool_boost_bass_on_an_mp3_faq_a2:
    "No. Un potenciador de volumen escala cada muestra con la misma ganancia en dB. Esta página solo hace estantería de graves. Para ganancia de todo el archivo, usa Hacer más alta una grabación silenciosa.",
  tool_boost_bass_on_an_mp3_faq_q3: "¿Qué hacen Mild, Medium y Strong?",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mild es un lowshelf suave. Medium (predeterminado) es el realce cotidiano. Strong es una estantería más pesada. La protección de picos evita el clipping tras el boost.",
  tool_boost_bass_on_an_mp3_faq_q4: "¿Y si Potenciar calienta el archivo?",
  tool_boost_bass_on_an_mp3_faq_a4:
    "Tras el lowshelf, si los picos superarían unos −0.2 dBFS, la protección escala el búfer. Para limitación dedicada, usa Limitar picos para que un archivo no recorte cuando esté disponible.",
  tool_boost_bass_on_an_mp3_faq_q5: "¿Se sube mi audio a un servidor?",
  tool_boost_bass_on_an_mp3_faq_a5:
    "No. Decodificación, boost de graves y escritura WAV corren en tu navegador. Hace falta red al cargar la página; no se garantiza uso sin conexión.",
  tool_boost_bass_on_an_mp3_faq_q6: "¿Solo MP3, o también WAV y M4A?",
  tool_boost_bass_on_an_mp3_faq_a6:
    "Cualquier formato que el navegador decodifique—WAV, MP3, M4A, AAC u OGG. El título usa la búsqueda habitual de MP3; la exportación siempre es un WAV de 16 bits nuevo.",
};
export default es;
