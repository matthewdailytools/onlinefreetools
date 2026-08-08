/**
 * i18n tool shard (pdf-page-numbers / es). Reescrito para búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_pdf_page_numbers_add: 'Numerar',
  tool_pdf_page_numbers_article:
    'Añade números de página a cada hoja del PDF en el navegador con la biblioteca PDF. Elige esquina o centro, número inicial y margen—el archivo no sale del dispositivo.',
  tool_pdf_page_numbers_choose_file: 'Elegir PDF',
  tool_pdf_page_numbers_clear: 'Limpiar',
  tool_pdf_page_numbers_desc:
    'Numerar un PDF en el navegador—posición y número inicial a tu gusto; no se sube al servidor, queda en el dispositivo.',
  tool_pdf_page_numbers_description:
    'Añade números de página a un PDF en el navegador—sin subir al servidor. Pasos: abre un PDF, elige abajo-centro o una esquina, fija el primer número (por defecto 1), margen y tamaño, opcionalmente formato «Página N», numera y descarga. Ejemplo: muestra de tres páginas con números abajo-centro desde 1 y descarga numbered.pdf. Los PDF cifrados fallan con error claro.',
  tool_pdf_page_numbers_download: 'Descargar',
  tool_pdf_page_numbers_drop_hint: 'O suelta un PDF aquí. Todo se procesa en esta pestaña.',
  tool_pdf_page_numbers_empty: 'Primero elige un PDF.',
  tool_pdf_page_numbers_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo e inténtalo de nuevo.',
  tool_pdf_page_numbers_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_pdf_page_numbers_err_number: 'Falló la numeración. Revisa archivo y ajustes e inténtalo otra vez.',
  tool_pdf_page_numbers_example:
    'La muestra crea un PDF de tres páginas, numera abajo-centro desde 1 y habilita Descargar numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'Ejemplo',
  tool_pdf_page_numbers_faq_a1:
    'No. la biblioteca PDF corre en tu pestaña (los scripts pueden cargarse desde un CDN). Tu PDF no se sube a nuestros servidores.',
  tool_pdf_page_numbers_faq_a2:
    'Sí—«Empezar en» es el número de la página 1 (p. ej. 0 para portada sin contar, o 5 si quitaste hojas antes). Cada página siguiente suma 1.',
  tool_pdf_page_numbers_faq_a3:
    'Números simples (1, 2, 3…) o etiquetas «Página N». Posición, margen (pt) y tamaño se aplican igual en todas las hojas.',
  tool_pdf_page_numbers_faq_a4:
    'Los PDF con contraseña suelen no abrirse aquí. Quita la contraseña con una herramienta de confianza y vuelve a numerar.',
  tool_pdf_page_numbers_faq_q1: '¿Se sube mi PDF?',
  tool_pdf_page_numbers_faq_q2: '¿Puedo empezar después de una portada?',
  tool_pdf_page_numbers_faq_q3: '¿Qué formatos y posiciones hay?',
  tool_pdf_page_numbers_faq_q4: '¿Y los PDF cifrados?',
  tool_pdf_page_numbers_font_size_label: 'Tamaño (pt)',
  tool_pdf_page_numbers_format_label: 'Formato',
  tool_pdf_page_numbers_format_number: 'Solo número',
  tool_pdf_page_numbers_format_page_n: 'Página N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Página {n}',
  tool_pdf_page_numbers_how_body:
    'Elige un PDF, posición (abajo-centro por defecto), primer número, margen y tamaño, pulsa Numerar y Descargar. Los números se dibujan en cada hoja. La biblioteca carga al primer uso.',
  tool_pdf_page_numbers_how_title: 'Cómo funciona',
  tool_pdf_page_numbers_margin_label: 'Margen (pt)',
  tool_pdf_page_numbers_pages_label: 'Páginas',
  tool_pdf_page_numbers_position_bc: 'Abajo centro',
  tool_pdf_page_numbers_position_bl: 'Abajo izquierda',
  tool_pdf_page_numbers_position_br: 'Abajo derecha',
  tool_pdf_page_numbers_position_label: 'Posición',
  tool_pdf_page_numbers_position_tc: 'Arriba centro',
  tool_pdf_page_numbers_position_tl: 'Arriba izquierda',
  tool_pdf_page_numbers_position_tr: 'Arriba derecha',
  tool_pdf_page_numbers_rules_body:
    'Posiciones, valor inicial, formato, privacidad y límites de la numeración local.',
  tool_pdf_page_numbers_rules_item_1:
    'Posición: abajo-centro (predeterminado), centro arriba/abajo o esquinas. Margen en puntos PDF (24 pt por defecto).',
  tool_pdf_page_numbers_rules_item_2:
    'Empezar en: número visible en la página 1 (1 por defecto). Cada hoja siguiente +1—útil tras borrar páginas en Organizar PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'Formato: dígito o «Página N». Tamaño 12 pt por defecto. Salida nueva; el original no se envía al servidor.',
  tool_pdf_page_numbers_rules_item_4:
    'Límites: PDF cifrados o dañados fallan claro; >~25 MB puede ir lento; los números quedan grabados—hace falta el original para quitarlos.',
  tool_pdf_page_numbers_rules_title: 'Reglas que conviene saber',
  tool_pdf_page_numbers_sample: 'Cargar ejemplo',
  tool_pdf_page_numbers_start_at_label: 'Empezar en',
  tool_pdf_page_numbers_stats_tpl: '{n} página(s) numerada(s) · {bytes}',
  tool_pdf_page_numbers_status_done: 'Listo — pulsa Descargar para guardar numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'Numerando páginas…',
  tool_pdf_page_numbers_title: 'Numerar un PDF — añade números de página en el navegador',
  tool_pdf_page_numbers_usecase_1: 'Oficina: numerar un informe antes de imprimir para citar «página 12».',
  tool_pdf_page_numbers_usecase_2: 'Estudiantes: pie 1–N en la tesis tras unir capítulos.',
  tool_pdf_page_numbers_usecase_3: 'Webmasters: numerar apuntes ya reorganizados o con marca de agua.',
  tool_pdf_page_numbers_usecases_title: 'Cuándo encaja',
  tool_pdf_page_numbers_warn_large: 'Archivo mayor de ~25 MB — la numeración puede ir lenta o fallar.',
  tool_pdf_page_numbers_warn_pdflib: 'No se cargó la biblioteca PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
