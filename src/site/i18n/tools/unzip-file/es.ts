import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
  tool_unzip_file_article:
    'Abre un ZIP en el navegador, revisa el árbol de archivos, previsualiza texto o imágenes y descarga lo necesario. El archivo permanece en tu dispositivo y no se sube al servidor.',
  tool_unzip_file_choose_file: 'Elegir ZIP',
  tool_unzip_file_clear: 'Limpiar',
  tool_unzip_file_desc:
    'Descomprime ZIP online, previsualiza el contenido y descarga archivos en el navegador, sin subir al servidor.',
  tool_unzip_file_description:
    'Descomprime un ZIP online en el navegador: elige o arrastra el archivo, revisa el árbol, previsualiza texto o imágenes y descarga un archivo o exporta todo. Los archivos no salen de tu dispositivo ni se suben al servidor. El ejemplo project-files.zip muestra readme.txt, assets/logo.png y docs/notes.md con rutas seguras.',
  tool_unzip_file_download_all: 'Exportar todo',
  tool_unzip_file_download_file: 'Descargar archivo',
  tool_unzip_file_drop_hint: 'Suelta aquí un .zip. El proceso se queda en esta pestaña.',
  tool_unzip_file_empty: 'Elige primero un archivo ZIP.',
  tool_unzip_file_err_archive: 'No se pudo leer el ZIP. Puede estar dañado, cifrado o no ser un archivo ZIP.',
  tool_unzip_file_err_fflate: 'No se pudo cargar el motor ZIP. Revisa la red e inténtalo de nuevo.',
  tool_unzip_file_err_no_file: 'No hay ningún archivo extraído seleccionado.',
  tool_unzip_file_example:
    'El ejemplo project-files.zip extrae tres entradas seguras: readme.txt, assets/logo.png y docs/notes.md. La página muestra el árbol, previsualiza readme.txt y activa Descargar archivo y Exportar todo.',
  tool_unzip_file_example_title: 'Ejemplo',
  tool_unzip_file_exported_all: 'Los archivos se empaquetaron en un ZIP nuevo con rutas seguras.',
  tool_unzip_file_faq_a1:
    'No. El ZIP se lee en la pestaña del navegador y los datos extraídos permanecen en tu dispositivo. El motor ZIP puede cargarse desde un CDN, pero tu archivo no se sube a nuestros servidores.',
  tool_unzip_file_faq_a2:
    'Esta página se centra en ZIP. RAR, 7Z, ISO y TAR.GZ requieren un motor de archivos más pesado y deben tratarse en un extractor de archivos aparte cuando exista ese soporte.',
  tool_unzip_file_faq_a3:
    'Los ZIP con contraseña pueden fallar si no se añade soporte compatible. Esta herramienta no descifra ni recupera contraseñas.',
  tool_unzip_file_faq_a4:
    'Las rutas absolutas, segmentos ../, nombres vacíos o duplicados se renombran o bloquean antes de exportar. La lista indica cuándo se cambió una ruta.',
  tool_unzip_file_faq_a5:
    'Los ZIP grandes pueden ser lentos o agotar memoria en el navegador, sobre todo en móviles. La página avisa si el número de archivos, el tamaño extraído o la expansión parecen arriesgados.',
  tool_unzip_file_faq_q1: '¿Se sube mi ZIP?',
  tool_unzip_file_faq_q2: '¿Extrae RAR, 7Z o TAR.GZ?',
  tool_unzip_file_faq_q3: '¿Abre ZIP con contraseña?',
  tool_unzip_file_faq_q4: '¿Qué pasa con rutas inseguras?',
  tool_unzip_file_faq_q5: '¿Cómo maneja ZIP muy grandes?',
  tool_unzip_file_file_count_label: 'Archivos',
  tool_unzip_file_how_body:
    'Elige o suelta un ZIP. La página lee el archivo, normaliza rutas, crea la lista de archivos y muestra vistas previas seguras para texto e imágenes. Selecciona una fila para previsualizar y descargar, o exporta todo como un ZIP nuevo con rutas limpiadas.',
  tool_unzip_file_how_title: 'Cómo funciona',
  tool_unzip_file_load_sample: 'Cargar ejemplo',
  tool_unzip_file_no_preview:
    'No hay vista previa para este tipo de archivo. Aun así puedes descargarlo.',
  tool_unzip_file_preview_title: 'Vista previa',
  tool_unzip_file_rules_body:
    'La extracción de ZIP en el navegador necesita reglas claras para rutas, vistas previas, descargas y errores.',
  tool_unzip_file_rules_item_1:
    'Seguridad de rutas: barras iniciales, unidades, segmentos ../ y nombres duplicados se limpian antes de exportar.',
  tool_unzip_file_rules_item_2:
    'Vista previa: texto pequeño, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP y SVG se pueden previsualizar; otros archivos solo muestran metadatos.',
  tool_unzip_file_rules_item_3:
    'Descarga: el archivo seleccionado se descarga directo; Exportar todo crea un ZIP nuevo con los archivos saneados.',
  tool_unzip_file_rules_item_4:
    'Límites: archivos cifrados, divididos, dañados o con expansión inusual pueden fallar o requerir confirmación en versiones futuras.',
  tool_unzip_file_rules_title: 'Reglas que conviene saber',
  tool_unzip_file_selected_label: 'Seleccionado',
  tool_unzip_file_size_label: 'Tamaño extraído',
  tool_unzip_file_status_done: 'ZIP extraído: selecciona un archivo o exporta todo.',
  tool_unzip_file_status_reading: 'Leyendo ZIP...',
  tool_unzip_file_title: 'Descomprimir ZIP online — ver y extraer archivos en el navegador',
  tool_unzip_file_total_size_label: 'Tamaño extraído',
  tool_unzip_file_usecase_1:
    'Oficina: abre un ZIP de un proveedor y descarga solo la factura o imagen que necesitas.',
  tool_unzip_file_usecase_2:
    'Estudio: revisa materiales de un curso en un equipo administrado o una tableta sin instalar software.',
  tool_unzip_file_usecase_3:
    'Desarrollo: revisa el árbol de una versión de código y guarda después el checksum del ZIP original.',
  tool_unzip_file_usecases_title: 'Cuándo encaja',
  tool_unzip_file_warn_dangerous:
    'Algunas rutas se renombraron por seguridad antes de exportar.',
  tool_unzip_file_warn_large:
    'Aviso de archivo grande: este ZIP puede ser lento o usar mucha memoria en el navegador.',
};

export default es;
