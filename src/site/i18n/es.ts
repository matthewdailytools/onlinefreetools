import type { SiteLangDict } from './types';
const es: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Inicio',
  nav_devlogs: 'Registros de Desarrollo',
  nav_tools: 'Herramientas',
  footer_text: 'Online Free Tools · Proyecto de aprendizaje · Iterando',
  tool_headers_title: 'Obtener encabezados de respuesta del sitio web',
  tool_headers_description:
    'Ingrese una URL para obtener sus encabezados de respuesta HTTP (solicitud del lado del servidor).',
  tool_headers_article:
    'Qué: Obtenga e inspeccione los encabezados de respuesta HTTP de un sitio web. Útil para depurar CORS, caché, redirecciones y verificar encabezados de seguridad o CDN. Escenarios: depuración de desarrollador, verificaciones de SEO y verificación de configuración del servidor.',
  url_label: 'URL',
  url_placeholder: 'por ejemplo https://ejemplo.com',
  fetch_button: 'Obtener Encabezados',
  result_title: 'Resultado',
  status_label: 'Estado',
  final_url_label: 'URL Final',
  headers_label: 'Encabezados',
  error_prefix: 'Error: ',
  note_title: 'Notas',
  note_1: 'Algunos sitios no admiten HEAD; retrocederemos a GET.',
  note_2: 'Por seguridad, se bloquean las solicitudes a localhost/redes privadas.',
  tool_markdown_title: 'Markdown → HTML',
  tool_markdown_description:
    'Convierte Markdown en HTML con vista previa, copia y descarga de documento completo.',
  tool_markdown_article:
    'Qué: Convierte Markdown en HTML saneado con vista previa y opciones de exportación. Útil para preparar entradas de blog, documentación o compartir contenido renderizado. Escenarios: creación de contenido, vistas previas rápidas y generación de exportaciones HTML estáticas.',
  tool_markdown_copy: 'Copiar HTML',
  tool_markdown_copy_done: 'Copiado',
  tool_markdown_download: 'Descargar HTML',
  tool_markdown_clear: 'Limpiar',
  tool_markdown_full_doc: 'Generar documento HTML completo',
  tool_markdown_input_label: 'Entrada Markdown',
  tool_markdown_preview_label: 'Vista Previa HTML',
  tool_markdown_placeholder:
    "# Título\n\nMarkdown básico soportado: **negrita**, listas y bloques de código.\n\n- Artículo 1\n- Artículo 2\n\n```js\nconsole.log('Hola Markdown');\n```",
  tool_markdown_export_title: 'Exportación Markdown a HTML',
  tool_markdown_export_description: 'Exportación HTML estática generada desde Markdown',
  tool_ip_address_title: '¿Cuál es mi dirección IP?',
  tool_ip_address_description: 'Descubre tu dirección IP pública con un clic.',
  tool_ip_address_article: 'Qué: Encuentra tu dirección IP pública tal como la ven en internet. Tu dirección IP identifica tu dispositivo en la red y es usada por sitios web para entregar contenido. Escenarios: acceso remoto, solución de problemas de red, configuración de firewall y servicios de geolocalización.',
  ip_label: 'Tu dirección IP',
  fetch_ip_button: 'Actualizar IP',
  fetching_message: 'Obteniendo tu dirección IP...',
  what_is_ip_title: '¿Qué es una dirección IP?',
  what_is_ip_content: 'Una dirección de Protocolo de Internet (IP) es una etiqueta numérica asignada a cada dispositivo conectado a una red informática. Sirve dos funciones principales: identificación del host o interfaz de red y direccionamiento de ubicación. Actualmente hay dos versiones en uso: IPv4 y IPv6.',
};
export default es;