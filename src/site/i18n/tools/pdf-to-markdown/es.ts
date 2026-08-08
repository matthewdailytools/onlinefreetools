/**
 * i18n tool shard (pdf-to-markdown / es). Redacción independiente.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'Extrae texto seleccionable de la capa de texto del PDF en el navegador y descarga Markdown: el archivo no sale del dispositivo ni se sube a un servidor. Sin OCR.',
  tool_pdf_to_markdown_choose_file: 'Elegir un PDF',
  tool_pdf_to_markdown_clear: 'Limpiar',
  tool_pdf_to_markdown_convert: 'Convertir',
  tool_pdf_to_markdown_desc:
    'Pasa texto de PDF a Markdown en tu dispositivo para notas o prompts: sin subir al servidor.',
  tool_pdf_to_markdown_description:
    'Extrae texto de PDF a Markdown en el navegador para notas o LLM, sin subir al servidor. Pasos: elige un PDF con capa de texto, pulsa Convertir, revisa la vista previa y descarga .md. Ejemplo: la muestra de una página genera un .md con «Hello PDF to Markdown sample.» Los escaneos solo imagen fallan (sin OCR). Los cifrados muestran un error claro.',
  tool_pdf_to_markdown_download: 'Descargar .md',
  tool_pdf_to_markdown_drop_hint: 'O suelta un PDF aquí. El proceso se queda en esta pestaña.',
  tool_pdf_to_markdown_empty: 'Elige un archivo PDF primero.',
  tool_pdf_to_markdown_err_convert: 'La conversión falló. Revisa el archivo e inténtalo de nuevo.',
  tool_pdf_to_markdown_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo y vuelve a intentarlo.',
  tool_pdf_to_markdown_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba con otro archivo.',
  tool_pdf_to_markdown_err_notext:
    'No hay texto seleccionable. Solo leemos la capa de texto; no hacemos OCR. Prueba un PDF digital o usa PDF a JPG para imágenes.',
  tool_pdf_to_markdown_err_pdfjs: 'No se pudo cargar el renderizador PDF. Revisa la red e inténtalo de nuevo.',
  tool_pdf_to_markdown_example:
    'El ejemplo crea un PDF de una página con Helvetica, lo convierte, muestra la frase en la vista previa y activa Descargar .md.',
  tool_pdf_to_markdown_example_title: 'Ejemplo',
  tool_pdf_to_markdown_faq_a1:
    'No. el renderizador de páginas corre en tu pestaña (los scripts pueden cargar desde un CDN). No subimos tu PDF.',
  tool_pdf_to_markdown_faq_a2:
    'Los escaneos suelen ser imágenes sin capa de texto. Sin OCR, la extracción queda vacía y falla con un mensaje claro.',
  tool_pdf_to_markdown_faq_a3:
    'No reconstruye títulos ni tablas: exporta líneas de texto plano agrupadas por posición.',
  tool_pdf_to_markdown_faq_a4:
    'Markdown a HTML convierte sintaxis Markdown en una página web. Esta herramienta saca texto del PDF a un .md editable.',
  tool_pdf_to_markdown_faq_a5:
    'PDF a JPG rasteriza cada página como imagen. Usa esta herramienta cuando necesites texto editable de un PDF digital.',
  tool_pdf_to_markdown_faq_q1: '¿Se sube mi PDF?',
  tool_pdf_to_markdown_faq_q2: '¿Por qué falla mi PDF escaneado?',
  tool_pdf_to_markdown_faq_q3: '¿Conserva encabezados o tablas?',
  tool_pdf_to_markdown_faq_q4: '¿En qué se diferencia de Markdown a HTML?',
  tool_pdf_to_markdown_faq_q5: '¿Cuándo usar PDF a JPG?',
  tool_pdf_to_markdown_how_body:
    'Elige un PDF, pulsa Convertir, revisa la vista previa y descarga .md. Las líneas se agrupan por posición vertical; las páginas se separan con ---. Todo local tras cargar las librerías.',
  tool_pdf_to_markdown_how_title: 'Cómo funciona',
  tool_pdf_to_markdown_pages_label: 'Páginas',
  tool_pdf_to_markdown_preview_label: 'Vista previa Markdown',
  tool_pdf_to_markdown_rules_body:
    'Extracción de capa de texto, separadores de página, sin OCR, privacidad y casos de fallo.',
  tool_pdf_to_markdown_rules_item_1:
    'Motor: getTextContent por página; ítems con y similar se unen en líneas con espacios.',
  tool_pdf_to_markdown_rules_item_2: 'Páginas: salida unida con línea en blanco, --- y otra línea en blanco.',
  tool_pdf_to_markdown_rules_item_3:
    'Sin OCR: si el texto recortado está vacío, la conversión falla con un mensaje legible.',
  tool_pdf_to_markdown_rules_item_4:
    'Límites: bytes en la pestaña; cifrados/dañados fallan claro; >~25 MB puede ir lento.',
  tool_pdf_to_markdown_rules_title: 'Reglas que debes esperar',
  tool_pdf_to_markdown_sample: 'Cargar ejemplo',
  tool_pdf_to_markdown_stats_tpl: '{n} página(s) · {chars} caracteres',
  tool_pdf_to_markdown_status_converting: 'Extrayendo texto…',
  tool_pdf_to_markdown_status_done: 'Listo — pulsa Descargar .md para guardar.',
  tool_pdf_to_markdown_title: 'PDF a Markdown — extrae texto para notas en el navegador',
  tool_pdf_to_markdown_usecase_1: 'Oficina: copia cláusulas de contratos a notas sin reescribir.',
  tool_pdf_to_markdown_usecase_2: 'Autores e IA: exporta informes a Markdown para editar o prompts.',
  tool_pdf_to_markdown_usecase_3: 'Estudiantes: saca texto legible de PDFs con capa de texto.',
  tool_pdf_to_markdown_usecases_title: 'Buenos casos de uso',
  tool_pdf_to_markdown_warn_large: 'Archivo mayor de ~25 MB — la extracción puede ir lenta o fallar.',
  tool_pdf_to_markdown_warn_pdflib: 'No se pudo cargar la librería PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
