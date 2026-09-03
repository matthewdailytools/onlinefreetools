/**
 * i18n 工具分片（compress-pdf / es）。按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_compress_pdf_article:
    'Reduce el tamaño de un PDF en el navegador volviendo a dibujar cada página como JPEG y reconstruyendo el documento: el archivo permanece en tu dispositivo, sin subirlo a un servidor. Es compresión limitada y honesta, no re-codificación en la nube.',
  tool_compress_pdf_choose_file: 'Elegir PDF',
  tool_compress_pdf_clear: 'Limpiar',
  tool_compress_pdf_compress: 'Comprimir',
  tool_compress_pdf_desc:
    'Comprime un PDF en el navegador para reducir el tamaño: el archivo se queda en tu dispositivo, sin subirlo a un servidor.',
  tool_compress_pdf_description:
    'Comprime el tamaño de un PDF en el navegador y compara bytes antes y después—nada se sube a un servidor. Pasos: abre un PDF, elige Medio o Bajo, comprime y descarga. Ejemplo: una muestra de dos páginas con imágenes pasa de ~180 KB a ~90 KB en Medio. Los PDF solo texto pueden apenas cambiar. Los cifrados fallan con un error claro. No es lo mismo que Organizar (reordenar) ni Unir (combinar).',
  tool_compress_pdf_download: 'Descargar',
  tool_compress_pdf_drop_hint: 'O suelta un PDF aquí. El proceso queda en esta pestaña.',
  tool_compress_pdf_empty: 'Añade un PDF para comprimir.',
  tool_compress_pdf_err_compress: 'No se pudo comprimir. Revisa el archivo e inténtalo de nuevo.',
  tool_compress_pdf_err_encrypted: 'Este PDF parece protegido con contraseña. Desbloquéalo primero.',
  tool_compress_pdf_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_compress_pdf_example:
    'La muestra carga un PDF de dos páginas con bloques de color y JPEG incrustados, aplica compresión Media, muestra tamaño antes/después con porcentaje ahorrado y habilita la descarga de compressed.pdf.',
  tool_compress_pdf_example_title: 'Reducir el tamaño del PDF',
  tool_compress_pdf_faq_a1:
    'No. pdf.js y la biblioteca PDF corren en tu pestaña (las librerías pueden cargar desde un CDN). El PDF no se sube a nuestros servidores.',
  tool_compress_pdf_faq_a2:
    'Esta herramienta rasteriza cada página a JPEG y reconstruye el PDF. Archivos solo texto o ya optimizados pueden apenas reducirse. No es recompresión en servidor de flujos incrustados.',
  tool_compress_pdf_faq_a3:
    'No. Las páginas se redibujan como imágenes en el navegador. No hay paso en la nube—tus bytes no salen del dispositivo.',
  tool_compress_pdf_faq_a4: 'Los PDF con contraseña suelen fallar aquí. Quita la contraseña y vuelve a intentar.',
  tool_compress_pdf_faq_a5:
    'Medio conserva más detalle (escala 1.2, JPEG ~72%). Bajo es más pequeño pero más suave (escala 1.0, JPEG ~55%). Elige según límites de correo vs legibilidad.',
  tool_compress_pdf_faq_q1: '¿Se sube mi PDF?',
  tool_compress_pdf_faq_q2: '¿Por qué apenas se redujo?',
  tool_compress_pdf_faq_q3: '¿Es re-codificación en la nube?',
  tool_compress_pdf_faq_q4: '¿Y los PDF cifrados?',
  tool_compress_pdf_faq_q5: '¿Qué calidad debo elegir?',
  tool_compress_pdf_how_body:
    'Elige un PDF, selecciona Medio o Bajo, pulsa Comprimir y Descargar. Cada página se renderiza y guarda como JPEG en un PDF nuevo. Las estadísticas muestran tamaño original, nuevo y porcentaje. Las librerías cargan al primer uso.',
  tool_compress_pdf_how_title: 'Cómo funciona',
  tool_compress_pdf_pages_label: 'Páginas',
  tool_compress_pdf_quality_label: 'Calidad',
  tool_compress_pdf_quality_low: 'Baja — archivo más pequeño',
  tool_compress_pdf_quality_med: 'Media — equilibrada',
  tool_compress_pdf_rules_body:
    'Cómo funcionan los presets JPEG, las estadísticas antes/después, la privacidad y los fallos al comprimir localmente.',
  tool_compress_pdf_rules_item_1:
    'Motor: pdf.js dibuja cada página en canvas; la biblioteca PDF incrusta JPEG en un PDF nuevo—sin enviar tu archivo al servidor.',
  tool_compress_pdf_rules_item_2:
    'Presets: Medio (escala 1.2, JPEG ~72%) vs Bajo (escala 1.0, JPEG ~55%). Preset más bajo = archivo más pequeño pero más blando.',
  tool_compress_pdf_rules_item_3:
    'Estadísticas: bytes originales, comprimidos y porcentaje de cambio. Ahorros menores al 5% muestran aviso de poco cambio.',
  tool_compress_pdf_rules_item_4:
    'Límites: PDF cifrados o dañados fallan con error legible; archivos muy grandes (>~25 MB) pueden ir lentos; PDF solo texto puede no reducirse mucho.',
  tool_compress_pdf_rules_title: 'Reglas que debes esperar',
  tool_compress_pdf_sample: 'Cargar muestra',
  tool_compress_pdf_stats_tpl: '{from} → {to} · {pct}% ahorrado',
  tool_compress_pdf_status_done: 'Listo — pulsa Descargar para guardar compressed.pdf.',
  tool_compress_pdf_status_working: 'Comprimiendo PDF…',
  tool_compress_pdf_title: 'Reducir el tamaño del PDF',
  tool_compress_pdf_usecase_1: 'Oficina: reduce un escaneo antes del límite del correo.',
  tool_compress_pdf_usecase_2: 'Estudiantes: achica un PDF con fotos para subirlo a un formulario.',
  tool_compress_pdf_usecase_3: 'Webmasters: recorta un PDF de marketing para compartir más rápido cuando la calidad raster basta.',
  tool_compress_pdf_usecases_title: 'Buenos casos',
  tool_compress_pdf_warn_large: 'El archivo supera ~25 MB — comprimir puede ir lento o fallar en algunos navegadores.',
  tool_compress_pdf_warn_little: 'Casi sin cambio—PDF solo texto o ya comprimidos pueden no beneficiarse del JPEG raster.',
  tool_compress_pdf_warn_pdflib: 'No se cargó la librería PDF. Revisa la red e inténtalo de nuevo.',
  tool_compress_pdf_warn_pdfjs: 'No se cargó el renderizador PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
