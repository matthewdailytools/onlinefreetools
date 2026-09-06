/**
 * i18n tool shard (archive-extractor / es).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
  tool_archive_extractor_article:
    'Abre archivos ZIP, TAR y TAR.GZ en el navegador, revisa el árbol, previsualiza textos o imágenes habituales y exporta el contenido compatible como un ZIP limpio. El archivo se queda en tu dispositivo y no se sube al servidor.',
  tool_archive_extractor_choose_file: 'Elegir archivo',
  tool_archive_extractor_clear: 'Limpiar',
  tool_archive_extractor_desc:
    'Extractor de archivos online para abrir ZIP, TAR y TAR.GZ en el navegador, previsualizar y exportar ZIP sin subir al servidor.',
  tool_archive_extractor_description:
    'Usa este extractor de archivos online para abrir archivos comprimidos en el navegador: elige un ZIP, TAR o TAR.GZ, revisa el árbol, previsualiza texto o imágenes, descarga un archivo o exporta el contenido compatible como ZIP limpio. Los archivos no salen del dispositivo ni se suben al servidor. El ejemplo sample-archive.tar.gz muestra README.txt, src/index.js y assets/logo.png con rutas seguras.',
  tool_archive_extractor_download_all: 'Exportar ZIP',
  tool_archive_extractor_download_file: 'Descargar archivo',
  tool_archive_extractor_drop_hint:
    'Suelta un archivo comprimido. ZIP, TAR y TAR.GZ funcionan ahora; RAR, 7Z e ISO muestran notas de soporte.',
  tool_archive_extractor_empty: 'Elige primero un archivo comprimido.',
  tool_archive_extractor_engine_badge: 'notas de soporte',
  tool_archive_extractor_err_archive:
    'No se pudo leer este archivo. Puede estar dañado, cifrado, dividido en volúmenes o usar un método de compresión no compatible.',
  tool_archive_extractor_err_engine:
    'RAR, 7Z e ISO necesitan un motor multiformato más pesado que no está incluido en esta versión. ZIP, TAR y TAR.GZ siguen funcionando en el navegador.',
  tool_archive_extractor_err_fflate: 'No se pudo cargar el motor de archivos. Revisa la red e inténtalo de nuevo.',
  tool_archive_extractor_err_no_file: 'No hay ningún archivo extraído seleccionado.',
  tool_archive_extractor_err_unsupported:
    'Este tipo de archivo aún no está soportado aquí. Prueba ZIP, TAR o TAR.GZ, o usa una herramienta de escritorio para este formato.',
  tool_archive_extractor_example:
    'El ejemplo integrado sample-archive.tar.gz se abre como un archivo real con tres entradas: README.txt, src/index.js y assets/logo.png. La página muestra el árbol, previsualiza README.txt y puede exportar el contenido compatible como extracted-archive.zip.',
  tool_archive_extractor_example_title: 'Ejemplo',
  tool_archive_extractor_exported_all: 'Los archivos se empaquetaron en un ZIP nuevo con rutas seguras.',
  tool_archive_extractor_faq_a1:
    'No. El archivo se lee en la pestaña del navegador y los bytes extraídos permanecen en tu dispositivo. El script auxiliar puede cargarse desde este sitio, pero tus archivos no se suben a nuestros servidores.',
  tool_archive_extractor_faq_a2:
    'En esta versión funcionan ZIP, TAR, TAR.GZ y TGZ. RAR, 7Z e ISO aparecen como formatos con notas de soporte hasta que se active un motor multiformato más pesado.',
  tool_archive_extractor_faq_a3:
    'Los archivos con contraseña requieren que escribas la contraseña y aun así pueden fallar si el formato o el cifrado no está soportado. Esta herramienta no rompe ni recupera contraseñas.',
  tool_archive_extractor_faq_a4:
    'Las rutas absolutas, segmentos ../, nombres duplicados o caracteres inseguros se renombran o bloquean antes de exportar. Los destinos de enlaces simbólicos no se escriben como enlaces.',
  tool_archive_extractor_faq_a5:
    'Los archivos grandes pueden ser lentos o agotar memoria en el navegador, sobre todo en teléfonos. La página avisa si el número de archivos, el tamaño expandido o la proporción de expansión parecen arriesgados.',
  tool_archive_extractor_faq_a6:
    'Exportar ZIP significa empaquetar de nuevo los archivos compatibles ya extraídos con rutas limpias. No promete conservar todas las funciones del formato original.',
  tool_archive_extractor_faq_q1: '¿Se sube mi archivo?',
  tool_archive_extractor_faq_q2: '¿Qué formatos de archivo funcionan?',
  tool_archive_extractor_faq_q3: '¿Abre RAR o 7Z con contraseña?',
  tool_archive_extractor_faq_q4: '¿Qué pasa con rutas inseguras o enlaces simbólicos?',
  tool_archive_extractor_faq_q5: '¿Cómo maneja archivos muy grandes?',
  tool_archive_extractor_faq_q6: '¿RAR a ZIP o 7Z a ZIP es una conversión real?',
  tool_archive_extractor_file_count_label: 'Archivos',
  tool_archive_extractor_format_label: 'Formato',
  tool_archive_extractor_how_body:
    'Elige o suelta un archivo comprimido. La página detecta ZIP, TAR o TAR.GZ, crea una lista segura y previsualiza entradas pequeñas de texto o imagen. Selecciona una fila para descargar un archivo o exporta los archivos compatibles como un ZIP nuevo.',
  tool_archive_extractor_how_title: 'Cómo funciona',
  tool_archive_extractor_load_engine: 'Cargar motor multiformato',
  tool_archive_extractor_load_sample: 'Cargar ejemplo',
  tool_archive_extractor_no_preview:
    'La vista previa no está disponible para este tipo de archivo. Aun así puedes descargarlo.',
  tool_archive_extractor_preview_title: 'Vista previa',
  tool_archive_extractor_rules_body:
    'La extracción de archivos necesita reglas claras sobre formatos, rutas, vista previa y exportación ZIP.',
  tool_archive_extractor_rules_item_1:
    'ZIP lee el directorio central. TAR.GZ se abre en dos pasos: descomprimir GZIP y luego leer las cabeceras TAR.',
  tool_archive_extractor_rules_item_2:
    'RAR, 7Z e ISO necesitan un motor multiformato más pesado; la página no finge que esas rutas están activas antes de cargarlo.',
  tool_archive_extractor_rules_item_3:
    'Seguridad de rutas: barras iniciales, letras de unidad, ../, nombres duplicados y caracteres inseguros se limpian antes de exportar.',
  tool_archive_extractor_rules_item_4:
    'Vista previa: texto pequeño, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP y SVG pueden verse; otros archivos solo muestran metadatos.',
  tool_archive_extractor_rules_item_5:
    'Límites: archivos cifrados, divididos, dañados, solid o con expansión anormal pueden fallar o requerir una herramienta de escritorio.',
  tool_archive_extractor_rules_title: 'Reglas esperadas',
  tool_archive_extractor_selected_label: 'Seleccionado',
  tool_archive_extractor_size_label: 'Tamaño extraído',
  tool_archive_extractor_status_done: 'Archivo abierto — selecciona un archivo o exporta ZIP.',
  tool_archive_extractor_status_reading: 'Leyendo archivo...',
  tool_archive_extractor_title:
    'Extractor de archivos online — abre archivos comprimidos en el navegador',
  tool_archive_extractor_total_size_label: 'Tamaño expandido',
  tool_archive_extractor_usecase_1:
    'Desarrollo: abre una versión .tar.gz de código, revisa README y src, y descarga solo lo necesario.',
  tool_archive_extractor_usecase_2:
    'Operaciones: revisa un paquete ZIP, RAR o 7Z de un proveedor y exporta los archivos compatibles como ZIP limpio para tu equipo.',
  tool_archive_extractor_usecase_3:
    'Equipos gestionados: inspecciona materiales de clase o adjuntos en un Chromebook sin instalar software de escritorio.',
  tool_archive_extractor_usecases_title: 'Cuándo encaja',
  tool_archive_extractor_warn_dangerous:
    'Algunas rutas se renombraron o se omitieron por seguridad antes de exportar.',
  tool_archive_extractor_warn_large:
    'Aviso de archivo grande: este archivo puede ser lento o consumir mucha memoria en el navegador.',
};

export default es;
