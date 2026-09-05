/**
 * i18n tool shard (protect-pdf / es). Reescrito para búsquedas en español.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_protect_pdf_article:
    'Proteja un PDF con contraseña en el navegador antes de enviar adjuntos sensibles. El archivo no sale del dispositivo.',
  tool_protect_pdf_choose_file: 'Elegir PDF',
  tool_protect_pdf_clear: 'Limpiar',
  tool_protect_pdf_confirm_label: 'Confirmar contraseña',
  tool_protect_pdf_desc: 'Añada contraseña de apertura a un PDF en su dispositivo; sin subir al servidor.',
  tool_protect_pdf_description:
    'Proteja un PDF con contraseña en el navegador antes de compartirlo: nada se sube al servidor. Pasos: elija un PDF, escriba y confirme la contraseña (se rechazan vacías), pulse Proteger y descargue protected.pdf. Ejemplo: una muestra de una página se cifra con sample y queda lista para descargar. Es cifrado estándar con contraseña de usuario, no grado militar; para abrirlo después necesita esa misma clave. Use la herramienta Desbloquear PDF disponible; aquí no se rompen contraseñas. Archivos de ~25 MB o más pueden ir lentos.',
  tool_protect_pdf_download: 'Descargar',
  tool_protect_pdf_drop_hint: 'O suelte un PDF aquí. Todo se procesa en esta pestaña.',
  tool_protect_pdf_empty: 'Primero elija un PDF.',
  tool_protect_pdf_err_encrypted:
    'Este PDF ya parece protegido. Quítelo con la contraseña que conoce y vuelva a proteger.',
  tool_protect_pdf_err_load: 'No se pudo leer el PDF (dañado o no compatible). Pruebe otro archivo.',
  tool_protect_pdf_err_password_empty: 'Escriba una contraseña; no se permiten vacías.',
  tool_protect_pdf_err_password_mismatch: 'Las contraseñas no coinciden. Vuelva a escribirlas.',
  tool_protect_pdf_err_protect: 'Falló el cifrado. Revise archivo y contraseña e intente de nuevo.',
  tool_protect_pdf_example:
    'La muestra crea una página, la cifra con sample, habilita Descargar protected.pdf y muestra la clave en el estado.',
  tool_protect_pdf_example_title: 'Proteger un PDF con contraseña',
  tool_protect_pdf_faq_a1:
    'No. la biblioteca PDF corre en su pestaña (los scripts pueden cargarse desde una CDN). Su PDF no se sube a nuestros servidores.',
  tool_protect_pdf_faq_a2:
    'Aplica cifrado PDF habitual: hay que escribir la contraseña para abrir. No es grado militar; elija una clave fuerte que recuerde.',
  tool_protect_pdf_faq_a3:
    'Necesita la misma contraseña que puso aquí. Cuando tengamos Desbloquear PDF, úsela allí: este sitio no descifra ni fuerza claves.',
  tool_protect_pdf_faq_a4:
    'Los PDF ya cifrados suelen fallar al cargar. Quite la contraseña anterior con una herramienta de confianza y proteja de nuevo.',
  tool_protect_pdf_faq_q1: '¿Se sube mi PDF?',
  tool_protect_pdf_faq_q2: '¿Qué tan fuerte es el cifrado?',
  tool_protect_pdf_faq_q3: '¿Cómo lo abro después?',
  tool_protect_pdf_faq_q4: '¿Y si ya estaba protegido?',
  tool_protect_pdf_how_body:
    'Elija un PDF, escriba la contraseña dos veces igual, pulse Proteger y Descargar. El cifrado es local tras cargar la biblioteca PDF.',
  tool_protect_pdf_how_item_1: "Selecciona la entrada con «Elegir PDF»",
  tool_protect_pdf_how_item_2: "Ajusta las opciones y pulsa «Proteger»",
  tool_protect_pdf_how_item_3: "Revisa la vista previa, el número de páginas o el estado",
  tool_protect_pdf_how_item_4: "Pulsa «Descargar» para guardar el resultado",
  tool_protect_pdf_how_title: 'Cómo funciona',
  tool_protect_pdf_pages_label: 'Páginas',
  tool_protect_pdf_password_label: 'Contraseña',
  tool_protect_pdf_protect: 'Proteger',
  tool_protect_pdf_rules_body: 'Reglas de contraseña, alcance del cifrado, privacidad y fallos.',
  tool_protect_pdf_rules_item_1: 'Contraseña obligatoria; confirmación debe coincidir. Vacías se rechazan antes de cifrar.',
  tool_protect_pdf_rules_item_2: 'la biblioteca PDF usa la misma clave de usuario y propietario: hace falta para abrir.',
  tool_protect_pdf_rules_item_3: 'Salida: un PDF cifrado (protected.pdf). Entradas ya protegidas muestran error claro.',
  tool_protect_pdf_rules_item_4: 'Privacidad: bytes en la pestaña; no es grado militar; aviso ~25 MB; archivos enormes pueden fallar.',
  tool_protect_pdf_rules_title: 'Reglas que debe esperar',
  tool_protect_pdf_sample: 'Cargar ejemplo',
  tool_protect_pdf_stats_tpl: '{pages} pág. · cifrado · {bytes}',
  tool_protect_pdf_status_done: 'Listo — pulse Descargar para guardar protected.pdf.',
  tool_protect_pdf_status_sample_pwd: 'Ejemplo listo — contraseña: «{pwd}». Descargue protected.pdf para probar.',
  tool_protect_pdf_status_working: 'Cifrando PDF…',
  tool_protect_pdf_title: 'Proteger un PDF con contraseña',
  tool_protect_pdf_usecase_1: 'Oficina: contraseña de apertura antes de enviar un contrato por correo.',
  tool_protect_pdf_usecase_2: 'Operaciones: bloquee un informe puntual antes del portal del cliente.',
  tool_protect_pdf_usecase_3: 'Estudiantes: proteja un escaneo con clave solo para el profesor.',
  tool_protect_pdf_usecases_title: 'Casos útiles',
  tool_protect_pdf_warn_large: 'Archivo mayor de ~25 MB — el cifrado puede ir lento o fallar.',
  tool_protect_pdf_warn_pdflib: 'No se cargó la biblioteca PDF. Revise la red e intente de nuevo.',
};
export default es;
