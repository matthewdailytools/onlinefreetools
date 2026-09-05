/**
 * i18n tool shard (hreflang-generator / es).
 * Español — reescritura independiente orientada a búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_hreflang_home_title: 'Generador de hreflang',
	tool_hreflang_home_desc:
		'Di a Google qué versión de idioma mostrar a cada usuario — convierte URLs de idioma en etiquetas hreflang, cabeceras HTTP Link y marcado de sitemap desde tu navegador.',
	tool_hreflang_title: 'Generador de hreflang — crea etiquetas para sitios multilingües',
	tool_hreflang_description:
		'Sin hreflang, Google puede tratar traducciones como duplicados. Convierte URLs por idioma en link, HTTP Link o sitemap—local. Ejemplo: en, es y ja.',
	tool_hreflang_input_label: 'Lista de URLs por idioma',
	tool_hreflang_input_ph:
		'Un par por línea: código de idioma + URL. Ejemplo:\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'Cada línea es «código-idioma URL» o «URL código-idioma». Los códigos usan la forma BCP 47, como en, en-US o zh-Hans.',
	tool_hreflang_xdefault_label: 'URL de respaldo x-default',
	tool_hreflang_xdefault_none: '— sin x-default —',
	tool_hreflang_xdefault_hint:
		'Opcional. x-default indica a Google qué versión mostrar cuando ningún idioma coincide, útil para una raíz o página inicial en inglés.',
	tool_hreflang_generate: 'Generar',
	tool_hreflang_sample: 'Cargar ejemplo',
	tool_hreflang_clear: 'Limpiar',
	tool_hreflang_copy: 'Copiar',
	tool_hreflang_copied: 'Copiado',
	tool_hreflang_error_prefix: 'Error: ',
	tool_hreflang_url_protocol: 'Una URL no tenía protocolo — se añadió https:// automáticamente.',
	tool_hreflang_lang_invalid: 'Código de idioma no válido: {lang}. Usa la forma BCP 47, como en, en-US o zh-Hans.',
	tool_hreflang_no_valid_rows: 'No hay filas válidas. Añade al menos un código de idioma y una URL.',
	tool_hreflang_output_label: 'Marcado generado',
	tool_hreflang_tab_link: 'Etiquetas <link>',
	tool_hreflang_tab_http: 'Cabecera HTTP Link',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'Cómo funciona',
	tool_hreflang_how_body:
		'El generador analiza cada línea en un código de idioma y una URL, y luego renderiza el mismo conjunto de relaciones en tres formas. La forma <link> va en el <head> de cada página. La forma de cabecera HTTP Link se envía en la respuesta del servidor. La forma sitemap incrusta <xhtml:link> dentro de cada bloque <url>. Cada URL recibe una anotación hreflang de autorreferencia para que cada versión de idioma apunte a sí misma, y la entrada x-default opcional cubre a los visitantes cuyo idioma no aparece.',
	tool_hreflang_how_item_1: 'Pega pares idioma|URL (un par por línea).',
	tool_hreflang_how_item_2: 'Opcionalmente añade una URL x-default.',
	tool_hreflang_how_item_3: 'Elige etiquetas <link>, cabecera HTTP Link o salida sitemap xhtml:link.',
	tool_hreflang_how_item_4: 'Haz clic en Generar y copia el marcado de ese formato.',
	tool_hreflang_rules_title: 'Reglas usadas por el generador',
	tool_hreflang_rules_body: 'Estas reglas provienen de Google Search Central y del estándar de etiquetas BCP 47.',
	tool_hreflang_rules_item_1:
		'Cada versión de idioma debe incluir una anotación hreflang de autorreferencia que apunte a su propia URL. Omitirla debilita la señal.',
	tool_hreflang_rules_item_2:
		'Cada URL debe aparecer desde todas las versiones: el conjunto completo de alternativas está en cada página, no solo en una dirección.',
	tool_hreflang_rules_item_3:
		'Los códigos de idioma usan BCP 47: un idioma de dos letras, opcionalmente una región (en-US) y opcionalmente un sistema de escritura (zh-Hans). x-default es el código de respaldo especial.',
	tool_hreflang_rules_item_4:
		'x-default apunta a la página mostrada cuando ningún idioma listado coincide, por ejemplo una raíz en inglés. Google puede usarla como respaldo para todos los idiomas no detectados.',
	tool_hreflang_rules_item_5:
		'Google considera las tres formas equivalentes y sí permite usarlas a la vez, aunque avisa de que no aporta nada en Búsqueda. Quédate con una por conjunto de páginas: tres implementaciones acaban desincronizándose y las anotaciones contradictorias se ignoran.',
	tool_hreflang_example_title: 'Ejemplo',
	tool_hreflang_example:
		'La muestra lista tres versiones de una página: https://example.com/ (en), https://example.com/es/ (es) y https://example.com/ja/ (ja). Las etiquetas <link> generadas incluyen autorreferencias para cada idioma más un x-default opcional que apunta a la raíz en inglés.',
	tool_hreflang_usecases_title: 'Buenos usos',
	tool_hreflang_usecase_1:
		'Lanzar un sitio multilingüe: genera las etiquetas <link> una vez por plantilla y verifica que cada versión de idioma liste el conjunto completo.',
	tool_hreflang_usecase_2:
		'Tras una reestructuración del sitio, regenera el marcado para que el mapeo de URLs se mantenga coherente entre idiomas.',
	tool_hreflang_usecase_3:
		'Cuando los resultados de búsqueda muestran el idioma equivocado, comprueba que existan autorreferencias y x-default y que las URLs apunten a páginas canónicas.',
	tool_hreflang_faq_q1: '¿Cuál de las tres formas debo usar?',
	tool_hreflang_faq_a1:
		'Usa las etiquetas <link> si puedes editar el HTML. Usa la cabecera HTTP Link cuando el servidor es tuyo y cuesta cambiar el HTML. Usa la forma sitemap si prefieres mantenerlo en el sitemap XML.',
	tool_hreflang_faq_q2: '¿Cuándo debo añadir x-default?',
	tool_hreflang_faq_a2:
		'x-default indica a Google qué versión mostrar cuando el idioma del visitante no coincide con ningún código listado. Añádelo cuando tengas una raíz o página de respaldo, normalmente en inglés.',
	tool_hreflang_faq_q3: '¿Cada URL necesita una hreflang de autorreferencia?',
	tool_hreflang_faq_a3:
		'Sí. Cada versión de idioma debe incluir su propia URL en el conjunto, con una hreflang de autorreferencia que apunte a sí misma. Google usa el conjunto completo para elegir la página correcta por idioma.',
	tool_hreflang_faq_q4: '¿Qué formato de código de idioma es válido?',
	tool_hreflang_faq_a4:
		'Códigos BCP 47: un idioma de dos o tres letras, opcionalmente una región (en-US) y opcionalmente un sistema de escritura (zh-Hans). El idioma en minúsculas, y no inventes códigos como «en-us-en».',
	tool_hreflang_faq_q5: '¿Hreflang va en <head> o en el sitemap?',
	tool_hreflang_faq_a5:
		'Cualquiera funciona, pero usa una sola forma coherente por conjunto de páginas. Las etiquetas <link> van en <head>, la cabecera HTTP Link se envía con la respuesta, y el sitemap usa bloques xhtml:link.',
	tool_hreflang_faq_q6: '¿Mis URLs se suben a algún sitio?',
	tool_hreflang_faq_a6: 'No. El generador funciona íntegramente en tu navegador y no se sube nada.',
	tool_hreflang_references: 'Google Search Central — Versiones localizadas (hreflang); etiquetas de idioma BCP 47.',
	tool_hreflang_ref_searchcentral_label: 'Search Central — Versiones localizadas (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — Etiquetas para identificar idiomas',
};

export default es;
