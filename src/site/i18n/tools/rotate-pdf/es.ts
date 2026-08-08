/**
 * i18n tool shard (rotate-pdf / es). Reescrito para búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° en sentido antihorario',
  tool_rotate_pdf_angle_90cw: '90° en sentido horario',
  tool_rotate_pdf_angle_label: 'Giro',
  tool_rotate_pdf_article:
    'Endereza páginas PDF torcidas o al revés en el navegador con la biblioteca PDF. Gira todas o un rango—sin subir el archivo al servidor.',
  tool_rotate_pdf_choose_file: 'Elegir PDF',
  tool_rotate_pdf_clear: 'Limpiar',
  tool_rotate_pdf_desc:
    'Corrige la orientación del PDF en tu dispositivo—todas las páginas o un rango; no se envía al servidor.',
  tool_rotate_pdf_description:
    'Rota páginas PDF en el navegador para arreglar mezclas apaisado/retrato—nada se sube al servidor. Pasos: elige un PDF, todas las páginas o rangos como 1-3,5, elige 90° horario, 180° o 90° antihorario, gira y descarga. Ejemplo: una muestra de dos páginas gira todo 90° horario y habilita Descargar rotated.pdf. Los cifrados fallan con error claro.',
  tool_rotate_pdf_download: 'Descargar',
  tool_rotate_pdf_drop_hint: 'O suelta un PDF aquí. El procesamiento queda en esta pestaña.',
  tool_rotate_pdf_empty: 'Primero elige un PDF.',
  tool_rotate_pdf_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo e inténtalo de nuevo.',
  tool_rotate_pdf_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_rotate_pdf_err_range: 'Páginas inválidas o fuera de rango. Usa rangos desde 1, p. ej. 1-3,5.',
  tool_rotate_pdf_err_rotate: 'Falló la rotación. Revisa archivo y rangos e inténtalo de nuevo.',
  tool_rotate_pdf_example:
    'La muestra crea un PDF de dos páginas, gira todas 90° horario y habilita Descargar rotated.pdf.',
  tool_rotate_pdf_example_title: 'Ejemplo',
  tool_rotate_pdf_faq_a1:
    'No. la biblioteca PDF corre en tu pestaña (los scripts pueden cargarse desde un CDN). Tu PDF no se sube a nuestros servidores.',
  tool_rotate_pdf_faq_a2:
    'Sí—el archivo descargado guarda la orientación nueva. Ábrelo en un visor antes de compartir.',
  tool_rotate_pdf_faq_a3:
    'Páginas desde 1: 1-3,5 son las páginas 1–3 y la 5. Los espacios son opcionales. Valores vacíos o fuera de rango fallan.',
  tool_rotate_pdf_faq_a4:
    'Los PDF con contraseña suelen no abrirse aquí. Quita la contraseña con una herramienta de confianza y rota.',
  tool_rotate_pdf_faq_q1: '¿Se sube mi PDF?',
  tool_rotate_pdf_faq_q2: '¿La rotación cambia el archivo para siempre?',
  tool_rotate_pdf_faq_q3: '¿Cómo funcionan los rangos?',
  tool_rotate_pdf_faq_q4: '¿Y los PDF cifrados?',
  tool_rotate_pdf_how_body:
    'Elige un PDF, todas las páginas o rangos, elige ángulo, pulsa Girar y Descargar. El giro se suma al ángulo actual. Todo local tras cargar la librería.',
  tool_rotate_pdf_how_title: 'Cómo funciona',
  tool_rotate_pdf_mode_all: 'Todas las páginas',
  tool_rotate_pdf_mode_label: 'Páginas a girar',
  tool_rotate_pdf_mode_ranges: 'Rangos personalizados',
  tool_rotate_pdf_pages_label: 'Páginas en el archivo',
  tool_rotate_pdf_ranges_hint: 'Ejemplo: 1-3,5 (desde 1)',
  tool_rotate_pdf_ranges_label: 'Rangos de páginas',
  tool_rotate_pdf_rotate: 'Girar',
  tool_rotate_pdf_rules_body: 'Ángulos, rotación acumulada, rangos, privacidad y errores.',
  tool_rotate_pdf_rules_item_1:
    'Ángulos: 90° horario, 180° o 90° antihorario (270°). Se suman al giro que ya tenga la página.',
  tool_rotate_pdf_rules_item_2: 'Páginas: todas o rangos desde 1 como 1-3,5 (misma sintaxis que Dividir PDF).',
  tool_rotate_pdf_rules_item_3: 'Salida: un PDF con las páginas elegidas reorientadas; el resto no cambia.',
  tool_rotate_pdf_rules_item_4:
    'Privacidad y límites: los bytes quedan en la pestaña; cifrados/dañados fallan claro; archivos enormes pueden ir lentos.',
  tool_rotate_pdf_rules_title: 'Reglas que debes esperar',
  tool_rotate_pdf_sample: 'Cargar ejemplo',
  tool_rotate_pdf_stats_tpl: '{n} página(s) girada(s) · {bytes}',
  tool_rotate_pdf_status_done: 'Listo — pulsa Descargar para guardar rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'Girando PDF…',
  tool_rotate_pdf_title: 'Rotar PDF — corrige la orientación en el navegador',
  tool_rotate_pdf_usecase_1: 'Oficina: endereza un escaneo lateral antes de imprimir o enviar.',
  tool_rotate_pdf_usecase_2: 'Estudiantes: arregla fotos de diapositivas con orientación mixta.',
  tool_rotate_pdf_usecase_3: 'Webmasters: corrige una sola página mal en un folleto sin reescanear todo.',
  tool_rotate_pdf_usecases_title: 'Buenos casos de uso',
  tool_rotate_pdf_warn_large: 'Archivo mayor de ~25 MB — la rotación puede ir lenta o fallar en algunos navegadores.',
  tool_rotate_pdf_warn_pdflib: 'No se cargó la librería PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
