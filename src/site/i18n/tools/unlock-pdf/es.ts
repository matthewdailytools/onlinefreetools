/**
 * i18n tool shard (unlock-pdf / es). Rewrite for local search; not password cracking.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_unlock_pdf_article:
    'Quita la contraseña de apertura de un PDF cuando ya la conoces—en el navegador, sin crackear. El archivo no sale del dispositivo.',
  tool_unlock_pdf_choose_file: 'Elegir PDF cifrado',
  tool_unlock_pdf_clear: 'Limpiar',
  tool_unlock_pdf_desc:
    'Quita una contraseña de apertura que ya sabes—en tu dispositivo, sin subir al servidor.',
  tool_unlock_pdf_description:
    'Desbloquea un PDF protegido en el navegador si conoces la contraseña de apertura—sin subir al servidor. Pasos: elige un PDF cifrado, escribe la contraseña (vacía se rechaza si hace falta), pulsa Desbloquear y descarga unlocked.pdf. Ejemplo: una página de muestra cifrada con contraseña sample, autocompletada y desbloqueada. No es crackeo, fuerza bruta ni recuperación de contraseñas olvidadas. Más de ~25 MB puede ir lento.',
  tool_unlock_pdf_download: 'Descargar',
  tool_unlock_pdf_drop_hint: 'O suelta aquí un PDF cifrado. Todo se procesa en esta pestaña.',
  tool_unlock_pdf_empty: 'Primero elige un PDF cifrado.',
  tool_unlock_pdf_encrypted_label: 'Con contraseña',
  tool_unlock_pdf_err_load: 'No se pudo leer el PDF (dañado o no compatible). Prueba otro archivo.',
  tool_unlock_pdf_err_not_encrypted:
    'Este PDF no parece tener contraseña de apertura. Usa Combinar PDF u otras herramientas.',
  tool_unlock_pdf_err_password_empty: 'Escribe la contraseña de apertura—vacía se rechaza si hace falta.',
  tool_unlock_pdf_err_password_wrong:
    'Contraseña incorrecta. Vuelve a escribir la que pusiste al proteger el archivo.',
  tool_unlock_pdf_err_unlock: 'Falló el desbloqueo. Revisa archivo y contraseña e inténtalo de nuevo.',
  tool_unlock_pdf_example:
    'El ejemplo crea un PDF de una página cifrado con contraseña sample, autocompleta la clave, lo desbloquea y habilita Descargar unlocked.pdf.',
  tool_unlock_pdf_example_title: 'Ejemplo',
  tool_unlock_pdf_faq_a1:
    'No. Solo quita la protección si introduces la contraseña correcta. No crackea, fuerza bruta ni recupera contraseñas desconocidas.',
  tool_unlock_pdf_faq_a2:
    'No. la biblioteca PDF corre en tu pestaña (scripts pueden cargarse desde CDN). Tu PDF no se sube a nuestros servidores.',
  tool_unlock_pdf_faq_a3:
    'Verás un mensaje claro de contraseña incorrecta. Usa la misma clave que en Proteger PDF u otra app—no la adivinamos.',
  tool_unlock_pdf_faq_a4:
    'Proteger PDF añade contraseña; Combinar PDF después de desbloquear aquí. Desbloquear solo sirve si el archivo ya pide contraseña al abrir.',
  tool_unlock_pdf_faq_q1: '¿Crackea o recupera contraseñas olvidadas?',
  tool_unlock_pdf_faq_q2: '¿Se sube mi PDF?',
  tool_unlock_pdf_faq_q3: '¿Qué pasa si la contraseña es incorrecta?',
  tool_unlock_pdf_faq_q4: '¿Cómo se relaciona con Proteger PDF?',
  tool_unlock_pdf_how_body:
    'Elige un PDF con contraseña, escribe la clave que ya conoces, pulsa Desbloquear y Descargar. Todo local tras cargar la biblioteca PDF. Contraseña vacía se rechaza si el archivo la exige.',
  tool_unlock_pdf_how_title: 'Cómo funciona',
  tool_unlock_pdf_pages_label: 'Páginas',
  tool_unlock_pdf_password_label: 'Contraseña de apertura',
  tool_unlock_pdf_rules_body: 'Reglas de contraseña, alcance, privacidad y fallos al desbloquear en el navegador.',
  tool_unlock_pdf_rules_item_1:
    'Alcance: debes conocer la contraseña. Sin crackeo, fuerza bruta ni recuperación de claves desconocidas.',
  tool_unlock_pdf_rules_item_2: 'Entrada: solo PDF cifrado. Sin contraseña se rechaza con mensaje claro.',
  tool_unlock_pdf_rules_item_3:
    'Salida: un PDF sin cifrar (unlocked.pdf). Contraseña mala muestra error explícito.',
  tool_unlock_pdf_rules_item_4:
    'Privacidad: bytes en la pestaña; sin subir al servidor; aviso ~25 MB; archivos enormes pueden fallar.',
  tool_unlock_pdf_rules_title: 'Reglas que debes esperar',
  tool_unlock_pdf_sample: 'Cargar ejemplo',
  tool_unlock_pdf_stats_tpl: '{pages} pág. · desbloqueado · {bytes}',
  tool_unlock_pdf_status_done: 'Listo — pulsa Descargar para guardar unlocked.pdf.',
  tool_unlock_pdf_status_sample_pwd: 'Ejemplo listo — contraseña «{pwd}». Descarga unlocked.pdf para probar.',
  tool_unlock_pdf_status_working: 'Desbloqueando PDF…',
  tool_unlock_pdf_title: 'Desbloquear PDF — quita una contraseña que ya conoces',
  tool_unlock_pdf_unlock: 'Desbloquear',
  tool_unlock_pdf_usecase_1: 'Oficina: quita tu propia contraseña para fusionar o imprimir en otra app.',
  tool_unlock_pdf_usecase_2: 'Operaciones: desbloquea un export que cifraste antes de subirlo a un portal.',
  tool_unlock_pdf_usecase_3: 'Estudiantes: quita la clave de un escaneo tras corregir, con la contraseña que pusiste.',
  tool_unlock_pdf_usecases_title: 'Buenos casos de uso',
  tool_unlock_pdf_warn_large: 'Archivo mayor de ~25 MB — puede ir lento o fallar en algunos navegadores.',
  tool_unlock_pdf_warn_pdflib: 'No se cargó la biblioteca PDF. Revisa la red e inténtalo de nuevo.',
};
export default es;
