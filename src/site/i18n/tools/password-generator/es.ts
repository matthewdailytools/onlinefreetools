/**
 * i18n tool shard (password-generator / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_password_generator_article:
    'Crea contraseñas aleatorias con los juegos de caracteres que elijas usando crypto.getRandomValues — para demos rápidas, cuentas temporales o probar reglas de longitud/charset. No es un gestor de contraseñas ni garantía de fortaleza.',
  tool_password_generator_charset_label: 'Juegos de caracteres',
  tool_password_generator_clear: 'Limpiar',
  tool_password_generator_copy: 'Copiar',
  tool_password_generator_copy_done: 'Copiado',
  tool_password_generator_count_label: 'Cantidad (1–100)',
  tool_password_generator_desc:
    'Contraseñas aleatorias con longitud y charset configurables — generadas en local con crypto.getRandomValues.',
  tool_password_generator_description:
    'Genera contraseñas aleatorias en tu navegador. Pasos: define longitud (8–128), marca mayúsculas/minúsculas/dígitos/símbolos, opcional excluir ambiguos, pulsa Generar, copia. Ejemplo: 16 caracteres mezclando casos, dígitos y símbolos. Solo crypto.getRandomValues — no se guardan ni suben.',
  tool_password_generator_digits: 'Dígitos',
  tool_password_generator_disclaimer:
    'Generador de demostración por comodidad — no es una bóveda de contraseñas. Para banca o cuentas principales usa un gestor dedicado y su generador. Las contraseñas se crean en local y no se guardan en nuestros servidores.',
  tool_password_generator_empty_charset: 'Activa al menos un juego de caracteres (tras exclusiones).',
  tool_password_generator_example:
    'Longitud 16 con todos los juegos activos podría verse como `Xk9#mP2$vL4@nQ8!` — mayúsculas, minúsculas, dígitos y símbolos. Cada clic produce una cadena nueva; Cargar ejemplo usa longitud 16 y todo activado.',
  tool_password_generator_example_title: 'Ejemplo',
  tool_password_generator_exclude_ambiguous: 'Excluir ambiguos (0 O I l 1)',
  tool_password_generator_faq_a1:
    'No. La generación ocurre enteramente en tu navegador. No registramos, almacenamos ni transmitimos las contraseñas que crees aquí.',
  tool_password_generator_faq_a2:
    'La aleatoriedad viene de crypto.getRandomValues (CSPRNG), no de Math.random. Contraseñas más largas con más clases resisten mejor la adivinación, pero ninguna pestaña promete ser «indescifrable» — sigue la política de tu organización y usa un gestor para secretos de producción.',
  tool_password_generator_faq_a3:
    'No. Esta página solo crea cadenas aleatorias nuevas. No puede auditar, crackear ni recuperar contraseñas existentes.',
  tool_password_generator_faq_a4:
    'Quita caracteres visualmente similares (0/O, 1/l/I) para facilitar lectura en voz alta o tecleo — a costa de un charset algo menor.',
  tool_password_generator_faq_a5:
    'Hasta 100 contraseñas por clic, una por línea en la salida. Genera de nuevo para otro lote.',
  tool_password_generator_faq_q1: '¿Se guardan o envían las contraseñas a un servidor?',
  tool_password_generator_faq_q2: '¿Qué tan fuertes son estas contraseñas?',
  tool_password_generator_faq_q3: '¿Puede esta herramienta crackear mi contraseña actual?',
  tool_password_generator_faq_q4: '¿Qué hace «excluir ambiguos»?',
  tool_password_generator_faq_q5: '¿Cuántas contraseñas puedo generar a la vez?',
  tool_password_generator_generate: 'Generar',
  tool_password_generator_how_body:
    'Ajusta longitud, elige clases de caracteres, opcionalmente excluye glifos ambiguos, define cantidad y Generar. Cada carácter se elige con crypto.getRandomValues del pool combinado. Copia la lista — nada persiste al salir de la página.',
  tool_password_generator_how_title: 'Cómo funciona',
  tool_password_generator_length_label: 'Longitud',
  tool_password_generator_lower: 'Minúsculas',
  tool_password_generator_output_label: 'Contraseñas',
  tool_password_generator_rules_body:
    'Reglas de charset, fuente de aleatoriedad y límites honestos — léelo antes de usar la salida en una cuenta real.',
  tool_password_generator_rules_item_1:
    'Pools: A–Z, a–z, 0–9 y un set de símbolos por defecto. Al menos un pool debe quedar tras toggles y exclusión ambigua.',
  tool_password_generator_rules_item_2:
    'El índice aleatorio usa bytes de crypto.getRandomValues — nunca Math.random.',
  tool_password_generator_rules_item_3:
    'No es composición NIST certificada (sin regla forzada de «uno de cada clase»). Activa manualmente los sets que necesites.',
  tool_password_generator_rules_item_4:
    'Privacidad: generación solo local; borra la salida en equipos compartidos al terminar.',
  tool_password_generator_rules_title: 'Reglas que debes esperar',
  tool_password_generator_sample: 'Cargar ejemplo',
  tool_password_generator_symbols: 'Símbolos',
  tool_password_generator_title: 'Generador de contraseñas aleatorias — crear claves en el navegador',
  tool_password_generator_upper: 'Mayúsculas',
  tool_password_generator_usecase_1: 'Crear una credencial única para un login de staging que rotarás pronto.',
  tool_password_generator_usecase_2: 'Prototipar formularios de registro que necesitan contraseñas fuertes de muestra en scripts QA.',
  tool_password_generator_usecase_3: 'Comparar cómo longitud y símbolos cambian la legibilidad antes de actualizar la política del equipo.',
  tool_password_generator_usecases_title: 'Buenos casos de uso',
};
export default es;
