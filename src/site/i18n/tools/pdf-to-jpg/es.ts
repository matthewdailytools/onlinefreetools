/**
 * i18n tool shard (pdf-to-jpg / es). Reescritura independiente para búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'Renderiza cada página del PDF a JPEG en el navegador con el renderizador de páginas. Varias páginas se descargan en ZIP con la biblioteca ZIP; el archivo no sale del dispositivo.',
  tool_pdf_to_jpg_choose_file: 'Elegir PDF',
  tool_pdf_to_jpg_clear: 'Limpiar',
  tool_pdf_to_jpg_convert: 'Convertir',
  tool_pdf_to_jpg_desc: 'Convierte páginas PDF en JPG en tu dispositivo—ZIP si hay varias; sin subir al servidor.',
  tool_pdf_to_jpg_description:
    'Convierte páginas PDF a imágenes JPG en el navegador: el archivo permanece en tu dispositivo y no se sube al servidor. Pasos: elige un PDF, pulsa Convertir y Descargar. Ejemplo: una muestra de dos páginas genera page-1.jpg y page-2.jpg dentro de un ZIP. Un PDF de una sola página descarga un JPG directo. Los archivos con contraseña o dañados muestran un error claro.',
  tool_pdf_to_jpg_download: 'Descargar',
  tool_pdf_to_jpg_drop_hint: 'O suelta un PDF aquí. El proceso ocurre en esta pestaña.',
  tool_pdf_to_jpg_empty: 'Elige un PDF primero.',
  tool_pdf_to_jpg_err_convert: 'La conversión falló. Revisa el archivo e inténtalo de nuevo.',
  tool_pdf_to_jpg_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo antes de convertir.',
  tool_pdf_to_jpg_err_fflate: 'No se pudo cargar la librería ZIP. Comprueba la red e inténtalo otra vez.',
  tool_pdf_to_jpg_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_pdf_to_jpg_err_pdfjs: 'No se pudo cargar el renderizador PDF. Comprueba la red e inténtalo otra vez.',
  tool_pdf_to_jpg_example:
    'La muestra crea un PDF de dos páginas, convierte cada una y habilita Descargar con un ZIP que incluye page-1.jpg y page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'Ejemplo',
  tool_pdf_to_jpg_faq_a1:
    'No. el renderizador de páginas y la biblioteca ZIP se ejecutan en tu pestaña (los scripts pueden cargarse desde un CDN). Tu PDF no se sube a nuestros servidores.',
  tool_pdf_to_jpg_faq_a2:
    'Más de una página → ZIP pdf-pages.zip con page-1.jpg, page-2.jpg, etc. Una sola página → un JPG directo.',
  tool_pdf_to_jpg_faq_a3:
    'Imágenes a PDF une fotos en un PDF multipágina. Esta herramienta exporta cada página del PDF como imagen JPG aparte.',
  tool_pdf_to_jpg_faq_a4:
    'Las páginas se renderizan a escala 2× para texto más nítido en pantalla y chats. PDFs muy grandes pueden tardar más.',
  tool_pdf_to_jpg_faq_a5:
    'Esta página solo genera JPG. Usa el convertidor de formato de imagen si necesitas PNG o WebP desde una imagen existente.',
  tool_pdf_to_jpg_faq_q1: '¿Se sube mi PDF?',
  tool_pdf_to_jpg_faq_q2: '¿Cuándo recibo ZIP y cuándo un JPG?',
  tool_pdf_to_jpg_faq_q3: '¿En qué se diferencia de Imágenes a PDF?',
  tool_pdf_to_jpg_faq_q4: '¿Por qué el JPG se ve borroso o nítido?',
  tool_pdf_to_jpg_faq_q5: '¿Puedo obtener PNG?',
  tool_pdf_to_jpg_how_body:
    'Elige un PDF, pulsa Convertir y luego Descargar. Cada página es un JPG; varias páginas van en ZIP. Todo ocurre en esta pestaña tras cargar las librerías: el archivo no se sube a un servidor.',
  tool_pdf_to_jpg_how_title: 'Cómo funciona',
  tool_pdf_to_jpg_pages_label: 'Páginas',
  tool_pdf_to_jpg_rules_body:
    'Escala de renderizado, salida JPG, ZIP vs archivo único, privacidad y errores habituales.',
  tool_pdf_to_jpg_rules_item_1:
    'Cada página se exporta a JPEG con escala 2× y calidad 0.92—equilibrio para diapositivas y escaneos.',
  tool_pdf_to_jpg_rules_item_2: 'Nombres: page-N.jpg para la página N. Varios archivos → pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3: 'Salida: 1 página → JPG suelto; 2 o más → ZIP con la biblioteca ZIP.',
  tool_pdf_to_jpg_rules_item_4:
    'Privacidad y límites: los bytes permanecen en la pestaña; PDF cifrado o dañado falla con mensaje claro; >25 MB puede ir lento.',
  tool_pdf_to_jpg_rules_title: 'Reglas que debes conocer',
  tool_pdf_to_jpg_sample: 'Cargar ejemplo',
  tool_pdf_to_jpg_stats_tpl: '{n} página(s) · {bytes}',
  tool_pdf_to_jpg_status_converting: 'Convirtiendo páginas a JPG…',
  tool_pdf_to_jpg_status_done: 'Listo — pulsa Descargar para guardar.',
  tool_pdf_to_jpg_title: 'PDF a JPG — convierte páginas en imágenes en el navegador',
  tool_pdf_to_jpg_usecase_1: 'Oficina: exporta una diapositiva o página firmada para pegarla en el chat.',
  tool_pdf_to_jpg_usecase_2: 'Marketing: saca miniaturas JPG de un catálogo en PDF.',
  tool_pdf_to_jpg_usecase_3: 'Estudiantes: guarda páginas de apuntes PDF como imágenes.',
  tool_pdf_to_jpg_usecases_title: 'Casos útiles',
  tool_pdf_to_jpg_warn_large: 'Archivo mayor de ~25 MB — la conversión puede ir lenta o fallar en algunos navegadores.',
  tool_pdf_to_jpg_warn_pdflib: 'No se pudo cargar la librería PDF. Comprueba la red e inténtalo otra vez.',
};
export default es;
