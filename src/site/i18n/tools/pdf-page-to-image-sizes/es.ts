/**
 * i18n tool shard (pdf-page-to-image-sizes / es). Reescrito para búsquedas en español.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'Elige una página PDF y expórtala como ZIP de JPEG listos para redes: cuadrado 1080, OG 1200×630, HD 1280×720 y vertical 1080×1920. el renderizador de páginas renderiza una vez; Canvas encaja cada preset con bandas blancas si hace falta.',
  tool_pdf_page_to_image_sizes_choose_file: 'Elegir PDF',
  tool_pdf_page_to_image_sizes_clear: 'Limpiar',
  tool_pdf_page_to_image_sizes_desc:
    'Exporta una página PDF como paquete JPEG multi-tamaño en tu dispositivo — ZIP; sin subir al servidor.',
  tool_pdf_page_to_image_sizes_description:
    'Convierte una página PDF en un paquete JPEG multi-tamaño en el navegador: el archivo permanece en tu dispositivo y no se sube al servidor. Elige un PDF, indica el número de página (por defecto 1), pulsa Exportar y descarga un ZIP con page-N-WxH.jpg. Ejemplo: la portada de muestra genera cuatro presets (1080², 1200×630, 1280×720, 1080×1920). PDFs con contraseña o dañados muestran un error claro.',
  tool_pdf_page_to_image_sizes_download: 'Descargar',
  tool_pdf_page_to_image_sizes_drop_hint: 'O suelta un PDF aquí. Todo se procesa en esta pestaña.',
  tool_pdf_page_to_image_sizes_empty: 'Primero elige un archivo PDF.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'Número de página fuera de rango. Revisa el total e inténtalo de nuevo.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo antes de exportar.',
  tool_pdf_page_to_image_sizes_err_export: 'La exportación falló. Revisa el archivo y la página e inténtalo otra vez.',
  tool_pdf_page_to_image_sizes_err_fflate: 'No se pudo cargar la biblioteca ZIP. Comprueba la red e inténtalo de nuevo.',
  tool_pdf_page_to_image_sizes_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'No se pudo cargar el renderizador PDF. Comprueba la red e inténtalo de nuevo.',
  tool_pdf_page_to_image_sizes_example:
    'La muestra crea un PDF de una página, exporta la página 1 en cuatro presets JPEG y habilita Descargar para page-1-sizes.zip.',
  tool_pdf_page_to_image_sizes_example_title: 'Ejemplo',
  tool_pdf_page_to_image_sizes_export: 'Exportar',
  tool_pdf_page_to_image_sizes_faq_a1:
    'No. el renderizador de páginas, la biblioteca PDF y la biblioteca ZIP se ejecutan en tu pestaña (los scripts pueden cargarse desde un CDN). Tu PDF no se sube a nuestros servidores.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF a JPG exporta cada página con su proporción original. Esta herramienta elige una página y la encaja en tamaños fijos de plataforma (contain, centrado, bandas blancas si hace falta).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (cuadrado Instagram), 1200×630 (vista previa Open Graph / Facebook), 1280×720 (HD horizontal), 1080×1920 (historia / vertical).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'La página se escala para caber entera sin recortar. El espacio vacío se rellena de blanco para un JPEG limpio.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'Archivos de más de ~25 MB pueden ir lentos o fallar en algunos navegadores. Páginas muy complejas usan más memoria al renderizar.',
  tool_pdf_page_to_image_sizes_faq_q1: '¿Se sube mi PDF?',
  tool_pdf_page_to_image_sizes_faq_q2: '¿En qué se diferencia de PDF a JPG?',
  tool_pdf_page_to_image_sizes_faq_q3: '¿Qué tamaños incluye?',
  tool_pdf_page_to_image_sizes_faq_q4: '¿Por qué hay espacio blanco alrededor?',
  tool_pdf_page_to_image_sizes_faq_q5: '¿Hay límite de tamaño?',
  tool_pdf_page_to_image_sizes_how_body:
    'Elige un PDF, escribe el número de página (desde 1), pulsa Exportar y descarga. Una sola renderización, luego encaje en cada preset y empaquetado ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'Cómo funciona',
  tool_pdf_page_to_image_sizes_page_label: 'Número de página',
  tool_pdf_page_to_image_sizes_pages_label: 'Páginas',
  tool_pdf_page_to_image_sizes_rules_body:
    'Tamaños preset, encaje contain, salida JPEG, nombres ZIP, privacidad y casos de error.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Presets: 1080×1080 (instagram-square), 1200×630 (og-facebook), 1280×720 (hd-landscape), 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'Renderiza la página elegida una vez a escala 2×, luego drawImage contain centrado en cada canvas; JPEG calidad 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'Nombres en ZIP: page-{N}-{W}x{H}.jpg. Archivo: page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'Privacidad y límites: los bytes permanecen en la pestaña; PDFs cifrados o corruptos fallan con mensaje claro; >~25 MB puede ir lento.',
  tool_pdf_page_to_image_sizes_rules_title: 'Reglas que debes conocer',
  tool_pdf_page_to_image_sizes_sample: 'Cargar ejemplo',
  tool_pdf_page_to_image_sizes_stats_tpl: 'Página {page} · {n} tamaños · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'Listo — pulsa Descargar para guardar el ZIP.',
  tool_pdf_page_to_image_sizes_status_exporting: 'Renderizando página y creando paquete de tamaños…',
  tool_pdf_page_to_image_sizes_title: 'Página PDF a varios tamaños — paquete multiplataforma',
  tool_pdf_page_to_image_sizes_usecase_1: 'Redes sociales: convierte un póster PDF en cuadrado IG, OG e historia en un solo ZIP.',
  tool_pdf_page_to_image_sizes_usecase_2: 'Webmasters: exporta una portada a 1200×630 para vistas previa de enlaces sin recortar a mano.',
  tool_pdf_page_to_image_sizes_usecase_3: 'Estudiantes: guarda una diapositiva en tamaños aptos para el móvil.',
  tool_pdf_page_to_image_sizes_usecases_title: 'Casos útiles',
  tool_pdf_page_to_image_sizes_warn_large: 'Archivo mayor de ~25 MB — la exportación puede ir lenta o fallar.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'No se pudo cargar la biblioteca PDF. Comprueba la red e inténtalo de nuevo.',
};
export default es;
