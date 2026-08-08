/**
 * i18n tool shard (text-diff / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_text_diff_article:
    'Herramienta gratis para comparar dos textos lado a lado. Usa modo línea para configs y código; modo palabra para redacción y prompts; modo carácter para erratas. Todo ocurre en tu navegador: no subimos tu texto.',
  tool_text_diff_clear: 'Borrar',
  tool_text_diff_compare: 'Comparar',
  tool_text_diff_description:
    'Compara dos textos online y ve qué cambió. Proceso: pega el texto original y el revisado, elige comparar por línea, por palabra o por carácter, opcionalmente ignora espacios o unifica saltos Windows (CRLF→LF), y marca añadidos y eliminados en el navegador. Ejemplo: cambia "hola mundo" por "hola amigo" — en modo palabra verás un solo cambio.',
  tool_text_diff_empty_hint: 'Pega texto en uno o ambos lados y pulsa Comparar.',
  tool_text_diff_example:
    'Ejemplo (modo palabra): A = "Hola mundo", B = "Hola amigo" → un cambio (mundo → amigo). Si solo cambia la línea del medio en un bloque de tres, el modo línea marca esa línea.',
  tool_text_diff_example_title: 'Ejemplo',
  tool_text_diff_faq_a1:
    'Línea para código y configs. Palabra para frases, correos y prompts: resalta palabras sueltas en lugar de toda la línea.',
  tool_text_diff_faq_a2:
    'Tu texto pegado no se sube ni se guarda en nuestros servidores: la comparación corre en el navegador. La página puede cargar jsdiff (open source) desde un CDN; eso no envía tu texto a nuestros servidores.',
  tool_text_diff_faq_a3: 'Windows usa CRLF y Unix/Mac suelen usar LF. Activa “Igualar CRLF y LF” antes de comparar.',
  tool_text_diff_faq_a4: 'No. Solo texto plano.',
  tool_text_diff_faq_q1: '¿Comparar por línea o por palabra?',
  tool_text_diff_faq_q2: '¿Se sube mi texto a un servidor?',
  tool_text_diff_faq_q3: '¿Por qué un cambio de salto de línea pone toda la línea en rojo?',
  tool_text_diff_faq_q4: '¿Puedo comparar imágenes o archivos binarios?',
  tool_text_diff_how_body:
    'Pega dos versiones, elige si quieres ver cambios por línea, palabra o carácter, y revisa en verde lo añadido y en rojo lo borrado. Tu texto pegado no se sube ni se guarda en nuestros servidores. La página puede cargar la librería open-source jsdiff desde un CDN para poder comparar en el navegador.',
  tool_text_diff_how_title: 'Cómo usarlo',
  tool_text_diff_ignore_ws: 'Ignorar espacios',
  tool_text_diff_label_a: 'Texto original',
  tool_text_diff_label_b: 'Texto revisado',
  tool_text_diff_large_warn: 'Pegado muy grande (>100k caracteres). Puede ir lento; prueba un trozo más corto.',
  tool_text_diff_legend: 'Verde = añadido · Rojo = eliminado',
  tool_text_diff_mode_chars: 'Carácter',
  tool_text_diff_mode_label: 'Comparar por',
  tool_text_diff_mode_lines: 'Línea',
  tool_text_diff_mode_words: 'Palabra',
  tool_text_diff_need_lib: 'No se pudo cargar el comparador. Revisa la conexión y recarga.',
  tool_text_diff_no_diff: 'Sin diferencias: los dos textos coinciden.',
  tool_text_diff_normalize_eol: 'Igualar CRLF y LF',
  tool_text_diff_placeholder_a: 'Pega el texto original…',
  tool_text_diff_placeholder_b: 'Pega el texto revisado…',
  tool_text_diff_result_label: 'Diferencias',
  tool_text_diff_rules_body:
    'La herramienta busca una lista corta de ediciones para pasar del texto A al B (diff clásico / estilo Myers con jsdiff). Modo línea: configs y código. Modo palabra: frases y prompts. Modo carácter: erratas finas, pero más ruido. Ignorar espacios oculta cambios solo de sangría. Igualar CRLF y LF evita que toda una línea se ponga roja solo por el tipo de salto.',
  tool_text_diff_rules_intro:
    'La herramienta busca una lista corta de ediciones para pasar del texto A al B (diff clásico / estilo Myers con jsdiff). Elige el modo según la tarea:',
  tool_text_diff_rules_item_chars: 'Carácter — ideal para erratas finas; más preciso, pero ruidoso en ediciones largas.',
  tool_text_diff_rules_item_lines:
    'Línea — ideal para .env, YAML y código; una línea cambiada se marca entera. Rápido de leer, pero un solo cambio de palabra también enrojece toda la línea.',
  tool_text_diff_rules_item_words:
    'Palabra — ideal para frases, correos y prompts; resalta palabras sueltas. Más claro en prosa; la puntuación puede fragmentar el resultado.',
  tool_text_diff_rules_options:
    'Ignorar espacios oculta cambios solo de sangría. Igualar CRLF y LF evita que toda una línea se ponga roja solo por el tipo de salto (Windows vs Unix).',
  tool_text_diff_rules_title: 'Cómo se calculan las diferencias',
  tool_text_diff_sample_a: 'Hola mundo\nsegunda línea\ntercera línea',
  tool_text_diff_sample_b: 'Hola amigo\nsegunda línea\ntercera línea',
  tool_text_diff_summary: '{added} añadidos, {removed} eliminados',
  tool_text_diff_swap: 'Intercambiar lados',
  tool_text_diff_usecase_1: 'Revisar configs: compara dos fragmentos .env o YAML línea a línea.',
  tool_text_diff_usecase_2: 'Retocar un prompt: modo palabra para ver qué frases se añadieron o quitaron.',
  tool_text_diff_usecase_3: 'Corregir textos o traducciones: comprueba que solo cambiaron las frases previstas.',
  tool_text_diff_usecases_title: 'Para qué sirve',
};
export default es;
