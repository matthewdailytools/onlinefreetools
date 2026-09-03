/**
 * i18n tool shard（split-pdf / es）. Redacción independiente.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_split_pdf_article:
    'Divide un PDF en archivos separados por página o rangos con pdf-lib en el cliente. Varias salidas se descargan en ZIP con fflate, sin subir nada.',
  tool_split_pdf_choose_file: 'Elegir un PDF',
  tool_split_pdf_clear: 'Limpiar',
  tool_split_pdf_desc: 'Extrae páginas de un PDF en tu dispositivo: cada página o rangos; ZIP si hace falta. No se sube a un servidor.',
  tool_split_pdf_description:
    'Divide un PDF en el navegador y descarga páginas o rangos por separado, sin subidas. Pasos: elige un PDF, marca cada página o escribe rangos como 1-3,5, divide y descarga. Ejemplo: una muestra de tres páginas se convierte en un ZIP con page-1.pdf a page-3.pdf. Un solo archivo de salida se descarga como PDF. Los cifrados fallan con un mensaje claro.',
  tool_split_pdf_download: 'Descargar',
  tool_split_pdf_drop_hint: 'O suelta un PDF aquí. El proceso se queda en esta pestaña.',
  tool_split_pdf_empty: 'Elige un archivo PDF primero.',
  tool_split_pdf_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo y vuelve a intentarlo.',
  tool_split_pdf_err_fflate: 'No se pudo cargar la librería ZIP. Revisa la red e inténtalo de nuevo.',
  tool_split_pdf_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba con otro archivo.',
  tool_split_pdf_err_range: 'Páginas inválidas o fuera de rango. Usa rangos desde 1, p. ej. 1-3,5.',
  tool_split_pdf_err_split: 'La división falló. Revisa el archivo y los rangos e inténtalo de nuevo.',
  tool_split_pdf_example:
    'El ejemplo crea un PDF de tres páginas, lo divide por página y activa Descargar para un ZIP con page-1.pdf, page-2.pdf y page-3.pdf.',
  tool_split_pdf_example_title: 'Dividir mi PDF',
  tool_split_pdf_faq_a1:
    'No. pdf-lib y fflate corren en tu pestaña (los scripts pueden cargar desde un CDN). No subimos tu PDF.',
  tool_split_pdf_faq_a2:
    'Páginas desde 1: 1-3,5 significa las páginas 1–3 y la 5. Los espacios son opcionales. Valores vacíos o fuera de rango fallan.',
  tool_split_pdf_faq_a3:
    'Si hay más de un archivo, descargas un ZIP. Un solo archivo de salida se descarga como PDF.',
  tool_split_pdf_faq_a4:
    'Los PDF con contraseña suelen fallar al abrirse aquí. Quita la contraseña con una herramienta de confianza y luego divide.',
  tool_split_pdf_faq_a5:
    'Unir PDF junta varios PDF en uno. Esta herramienta extrae páginas de un solo PDF a archivos separados.',
  tool_split_pdf_faq_q1: '¿Se sube mi PDF?',
  tool_split_pdf_faq_q2: '¿Cómo funcionan los rangos?',
  tool_split_pdf_faq_q3: '¿Cuándo es ZIP y cuándo PDF?',
  tool_split_pdf_faq_q4: '¿Y los PDF cifrados?',
  tool_split_pdf_faq_q5: '¿En qué se diferencia de Unir PDF?',
  tool_split_pdf_how_body:
    'Elige un PDF, selecciona cada página o escribe rangos, pulsa Dividir y luego Descargar. Varias salidas van en un ZIP; una sola es PDF. Todo es local tras cargar las librerías.',
  tool_split_pdf_how_title: 'Cómo funciona',
  tool_split_pdf_mode_every: 'Cada página (un archivo por página)',
  tool_split_pdf_mode_label: 'Modo de división',
  tool_split_pdf_mode_ranges: 'Rangos de páginas personalizados',
  tool_split_pdf_pages_label: 'Páginas del archivo',
  tool_split_pdf_ranges_hint: 'Ejemplo: 1-3,5 (desde 1)',
  tool_split_pdf_ranges_label: 'Rangos de páginas',
  tool_split_pdf_rules_body:
    'Rangos desde 1, nombres, ZIP frente a PDF, privacidad y errores al dividir en local.',
  tool_split_pdf_rules_item_1:
    'Modos: cada página → un PDF por página; rangos → un PDF por segmento separado por comas (p. ej. 1-3 y 5).',
  tool_split_pdf_rules_item_2:
    'Nombres: page-N.pdf para una página; pages-A-B.pdf para un tramo continuo.',
  tool_split_pdf_rules_item_3:
    'Salida: más de un archivo → ZIP con fflate; exactamente uno → descarga ese PDF.',
  tool_split_pdf_rules_item_4:
    'Privacidad y límites: los bytes se quedan en la pestaña; PDF cifrados/corruptos fallan con claridad; archivos enormes pueden ir lentos.',
  tool_split_pdf_rules_title: 'Reglas a tener en cuenta',
  tool_split_pdf_sample: 'Cargar ejemplo',
  tool_split_pdf_split: 'Dividir',
  tool_split_pdf_stats_tpl: '{n} archivo(s) · {bytes}',
  tool_split_pdf_status_done: 'Listo — pulsa Descargar para guardar.',
  tool_split_pdf_status_splitting: 'Dividiendo PDF…',
  tool_split_pdf_title: 'Dividir mi PDF',
  tool_split_pdf_usecase_1: 'Oficina: sacar una página firmada de un contrato largo.',
  tool_split_pdf_usecase_2: 'Docencia: partir un PDF de diapositivas en folletos por página.',
  tool_split_pdf_usecase_3: 'Ops: archivar cada página escaneada como archivo propio.',
  tool_split_pdf_usecases_title: 'Buenos encajes',
  tool_split_pdf_warn_large: 'El archivo supera ~25 MB: la división puede ser lenta o fallar en algunos navegadores.',
  tool_split_pdf_warn_pdflib: 'No se pudo cargar la librería PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
