/**
 * i18n tool shard（merge-pdf / es）。Redacción independiente orientada a búsqueda.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_merge_pdf_article:
    'Une varios PDF en el orden de la lista con pdf-lib en el cliente, sin subir archivos. Reordena, entiende fallos de cifrado y descarga un solo documento.',
  tool_merge_pdf_choose_files: 'Elegir PDF',
  tool_merge_pdf_clear: 'Limpiar',
  tool_merge_pdf_desc: 'Combina varios PDF en uno solo en el navegador; no se suben a un servidor.',
  tool_merge_pdf_description:
    'Une archivos PDF en el navegador y descarga un solo documento, sin subidas. Pasos: añade al menos dos PDF, reordena la lista, une y descarga. Ejemplo: dos muestras de una página se convierten en un PDF de dos páginas. Los PDF cifrados o dañados fallan con un mensaje claro. No es lo mismo que Imágenes a PDF, que parte de fotos.',
  tool_merge_pdf_download: 'Descargar',
  tool_merge_pdf_drop_hint: 'O suelta PDF aquí. El proceso se queda en esta pestaña.',
  tool_merge_pdf_empty: 'Añade al menos dos PDF para unirlos.',
  tool_merge_pdf_err_encrypted: 'Un archivo parece protegido con contraseña. Desbloquéalo y vuelve a intentarlo.',
  tool_merge_pdf_err_load: 'No se pudo leer un PDF (dañado o no compatible). Prueba con otro archivo.',
  tool_merge_pdf_err_merge: 'La unión falló. Revisa los archivos e inténtalo de nuevo.',
  tool_merge_pdf_example:
    'El ejemplo carga dos PDF de una página (A y B), los une en el orden de la lista y activa Descargar para un merged.pdf de dos páginas.',
  tool_merge_pdf_example_title: 'Combinar archivos PDF en uno',
  tool_merge_pdf_faq_a1:
    'No. pdf-lib corre en tu pestaña (la librería puede cargar desde un CDN). No subimos tus PDF a nuestros servidores.',
  tool_merge_pdf_faq_a2:
    'Imágenes a PDF crea un PDF a partir de fotos. Esta herramienta junta PDF ya existentes en un solo archivo.',
  tool_merge_pdf_faq_a3:
    'Sí: usa Subir/Bajar en cada fila. El orden de la lista (de arriba abajo) es el orden de las páginas.',
  tool_merge_pdf_faq_a4:
    'Los PDF con contraseña suelen fallar al abrirse aquí. Quita la contraseña con una herramienta de confianza y luego únelos.',
  tool_merge_pdf_faq_a5: 'La mayoría de lectores de PDF en escritorio y móvil abren el resultado.',
  tool_merge_pdf_faq_q1: '¿Se suben mis PDF?',
  tool_merge_pdf_faq_q2: '¿En qué se diferencia de Imágenes a PDF?',
  tool_merge_pdf_faq_q3: '¿Puedo cambiar el orden?',
  tool_merge_pdf_faq_q4: '¿Y los PDF cifrados?',
  tool_merge_pdf_faq_q5: '¿Se abre en Acrobat o en el visor del sistema?',
  tool_merge_pdf_how_body:
    'Añade dos o más PDF, reordena si hace falta, pulsa Unir y luego Descargar. El orden de páginas sigue la lista. Todo corre en local tras cargar la librería.',
  tool_merge_pdf_how_item_1: "Selecciona la entrada con «Elegir PDF»",
  tool_merge_pdf_how_item_2: "Ajusta las opciones y pulsa «Unir»",
  tool_merge_pdf_how_item_3: "Revisa la vista previa, el número de páginas o el estado",
  tool_merge_pdf_how_item_4: "Pulsa «Descargar» para guardar el resultado",
  tool_merge_pdf_how_title: 'Cómo funciona',
  tool_merge_pdf_merge: 'Unir',
  tool_merge_pdf_move_down: 'Bajar',
  tool_merge_pdf_move_up: 'Subir',
  tool_merge_pdf_remove: 'Quitar',
  tool_merge_pdf_rules_body:
    'Orden de la lista, copyPages, privacidad y errores al unir PDF en local.',
  tool_merge_pdf_rules_item_1:
    'Orden: las páginas se copian según la lista (el archivo de arriba primero). Reordena antes de Unir.',
  tool_merge_pdf_rules_item_2:
    'Motor: pdf-lib carga cada PDF y usa copyPages en un documento nuevo; tus archivos no van al servidor.',
  tool_merge_pdf_rules_item_3:
    'Privacidad: los bytes se quedan en la pestaña. El script de la librería puede venir de un CDN.',
  tool_merge_pdf_rules_item_4:
    'Límites: hacen falta ≥2 archivos; PDF cifrados o corruptos fallan con un error legible; conjuntos muy grandes pueden ir lentos en memoria.',
  tool_merge_pdf_rules_title: 'Reglas a tener en cuenta',
  tool_merge_pdf_sample: 'Cargar ejemplo',
  tool_merge_pdf_stats_tpl: '{n} archivos → {pages} páginas · {bytes}',
  tool_merge_pdf_status_done: 'Listo — pulsa Descargar para guardar merged.pdf.',
  tool_merge_pdf_status_merging: 'Uniendo PDF…',
  tool_merge_pdf_title: 'Combinar archivos PDF en uno',
  tool_merge_pdf_usecase_1: 'Oficina: juntar firmas y anexos en un solo paquete.',
  tool_merge_pdf_usecase_2: 'Estudios: unir capítulos de un trabajo antes de entregarlo.',
  tool_merge_pdf_usecase_3: 'Operaciones: empaquetar briefs y especificaciones en un PDF.',
  tool_merge_pdf_usecases_title: 'Buenos encajes',
  tool_merge_pdf_warn_large: 'Un archivo supera ~25 MB: la unión puede ser lenta o fallar en algunos navegadores.',
  tool_merge_pdf_warn_pdflib: 'No se pudo cargar la librería PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
