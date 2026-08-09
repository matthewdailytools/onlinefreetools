/**
 * i18n tool shard (utm-builder / es).
 * Español — reescritura independiente orientada a búsquedas locales.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_utm_home_title: 'Creador de UTM',
	tool_utm_home_desc:
		'Mide qué campañas generan realmente tu tráfico: crea enlaces de seguimiento limpios con utm_source, medium, campaign, term y content desde el navegador.',
	tool_utm_title: 'Creador de UTM — genera enlaces de seguimiento de campañas',
	tool_utm_description:
		'Las etiquetas UTM limpias son la única forma de demostrar qué campañas, correos o publicaciones generan realmente tu tráfico: sin ellas, tu inversión en SEO y marketing queda invisible en los análisis. Construye un enlace de seguimiento con tu URL de destino y utm_source, utm_medium, utm_campaign, utm_term y utm_content. Pasos: pega la URL base, completa los cinco parámetros, copia el enlace generado con la codificación de URL correcta. Los parámetros de consulta existentes se conservan y se combinan, no se sobrescriben. Funciona por completo en tu dispositivo: no se sube nada. Ejemplo: https://example.com/page con source=newsletter, medium=email y campaign=summer_sale.',
	tool_utm_url_label: 'URL de destino',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'Introduce la URL de destino.',
	tool_utm_url_invalid: 'La URL parece inválida. Revisa la dirección e inténtalo de nuevo.',
	tool_utm_url_protocol: 'No se detectó protocolo: se añadió https:// automáticamente.',
	tool_utm_source_label: 'Fuente de la campaña (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'Dónde se ve el enlace: newsletter, facebook, google.',
	tool_utm_medium_label: 'Medio de la campaña (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'Cómo se entrega el enlace: email, cpc, social, referral.',
	tool_utm_campaign_label: 'Nombre de la campaña (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'La promoción o producto al que pertenece el enlace.',
	tool_utm_campaign_required: 'El nombre de la campaña (utm_campaign) es obligatorio.',
	tool_utm_term_label: 'Término de la campaña (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'Opcional. Identifica palabras clave de búsqueda de pago.',
	tool_utm_content_label: 'Contenido de la campaña (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'Opcional. Distingue anuncios o enlaces que apuntan a la misma URL.',
	tool_utm_generate: 'Generar',
	tool_utm_sample: 'Ejemplo',
	tool_utm_clear: 'Limpiar',
	tool_utm_copy: 'Copiar',
	tool_utm_copied: 'Copiado',
	tool_utm_error_prefix: 'Error: ',
	tool_utm_output_label: 'Enlace generado',
	tool_utm_table_title: 'Desglose de parámetros',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'Valor',
	tool_utm_param_status: 'Estado',
	tool_utm_param_required: 'Obligatorio',
	tool_utm_param_optional: 'Opcional',
	tool_utm_param_empty: 'Vacío',
	tool_utm_encoding_note:
		'Los valores se codifican con encodeURIComponent: los espacios se vuelven %20 y los caracteres no ASCII se codifican en porcentaje.',
	tool_utm_case_note:
		'Google Analytics distingue mayúsculas en los valores. Usa un estilo consistente en minúsculas para que el mismo canal se agrupe.',
	tool_utm_how_title: 'Cómo funciona',
	tool_utm_how_body:
		'El creador analiza tu URL base, conserva sus parámetros de consulta existentes y añade los parámetros UTM con separador &. Cada valor se codifica en porcentaje para que espacios, caracteres chinos y símbolos sobrevivan en el enlace. Si la URL tiene un hash, se coloca después de todos los parámetros. Los cinco parámetros UTM son lo que lee Google Analytics para atribuir la visita a una fuente, medio y campaña.',
	tool_utm_rules_title: 'Reglas del creador',
	tool_utm_rules_body: 'Estas son las definiciones y reglas de codificación de los parámetros UTM según la documentación de Google Analytics.',
	tool_utm_rules_item_1: 'utm_source identifica dónde se vio el enlace; utm_medium identifica cómo se entregó. Ambos son obligatorios para la atribución.',
	tool_utm_rules_item_2: 'utm_campaign es el nombre de la promoción y es obligatorio aquí. utm_term y utm_content son opcionales: term para palabras clave de pago, content para diferenciar dos enlaces.',
	tool_utm_rules_item_3: 'Si la URL base ya tiene parámetros de consulta, se conservan y los UTM se añaden con &; un parámetro existente con el mismo nombre se reemplaza.',
	tool_utm_rules_item_4: 'Los valores se codifican en porcentaje: los espacios se vuelven %20 y los caracteres no ASCII también. El fragmento (#ancla) siempre queda después de la cadena de consulta.',
	tool_utm_rules_item_5: 'Usa un estilo consistente en minúsculas. Los valores UTM distinguen mayúsculas en Google Analytics, así que facebook y Facebook serían dos fuentes.',
	tool_utm_example_title: 'Ejemplo',
	tool_utm_example:
		'La entrada de ejemplo es https://example.com/page con utm_source=newsletter, utm_medium=email y utm_campaign=summer_sale. El enlace generado es https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'Buenos usos',
	tool_utm_usecase_1:
		'Campañas sociales: crea un enlace por plataforma con el mismo utm_campaign para que GA4 reporte toda la promoción en una fila.',
	tool_utm_usecase_2:
		'Envíos de email: usa utm_source=newsletter, utm_medium=email y valores de content distintos para comparar dos banners que apuntan a la misma página.',
	tool_utm_usecase_3:
		'Códigos QR e impresos: una URL UTM completa es larga, pero puedes acortarla después de generarla conservando los parámetros.',
	tool_utm_faq_q1: '¿Cuál es la diferencia entre utm_source y utm_medium?',
	tool_utm_faq_a1:
		'utm_source indica dónde se vio el enlace (newsletter, facebook, google), mientras utm_medium indica cómo se entregó (email, cpc, social, referral). GA4 los combina con utm_campaign para nombrar la fuente de tráfico.',
	tool_utm_faq_q2: 'La URL ya tiene parámetros de consulta. ¿Se perderán?',
	tool_utm_faq_a2:
		'No. Los parámetros existentes se conservan y los UTM se añaden con &. Si la URL ya contiene un parámetro con el mismo nombre, el nuevo valor lo reemplaza.',
	tool_utm_faq_q3: '¿Y los espacios, caracteres chinos o símbolos en los valores?',
	tool_utm_faq_a3:
		'Cada valor se codifica en porcentaje: los espacios se vuelven %20 y los caracteres no ASCII también se codifican. El enlace generado sigue siendo válido en clientes de email, mensajeros y navegadores.',
	tool_utm_faq_q4: '¿Los valores UTM distinguen mayúsculas?',
	tool_utm_faq_a4:
		'Sí. Google Analytics trata utm_source=Facebook y utm_source=facebook como dos fuentes distintas. Usa un estilo consistente en minúsculas para que el mismo canal se agrupe.',
	tool_utm_faq_q5: '¿Cuándo debo usar utm_term y utm_content?',
	tool_utm_faq_a5:
		'utm_term identifica palabras clave de búsqueda de pago, útil para Google Ads. utm_content distingue dos enlaces o anuncios que apuntan a la misma URL, como un banner de cabecera y un enlace de pie.',
	tool_utm_faq_q6: '¿Mi URL se envía a algún lugar?',
	tool_utm_faq_a6: 'No. El creador funciona por completo en tu navegador y no se sube nada.',
	tool_utm_references: 'Google Analytics — Campañas personalizadas (UTM); Google Search Central — Parámetros de URL.',
	tool_utm_ref_ga_label: 'Google Analytics — Campañas personalizadas (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central — Parámetros de URL',
};

export default es;
