/**
 * i18n tool shard (schema-jsonld-generator / es).
 * Spanish locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_schema_home_title: 'Generador de JSON-LD',
	tool_schema_home_desc:
		'Ayuda a Google a entender tu página y consigue resultados más enriquecidos y con más clics con JSON-LD de Schema.org, creado en tu navegador.',
	tool_schema_title: 'Generador de JSON-LD — crea datos estructurados para FAQ, artículo y migas de pan',
	tool_schema_description:
		'Los datos estructurados ayudan a Google y pueden enriquecer resultados. Elige tipo, rellena y copia JSON-LD listo. Ejemplo: FAQ de dos preguntas.',
	tool_schema_generate: 'Generar',
	tool_schema_sample: 'Ejemplo',
	tool_schema_clear: 'Limpiar',
	tool_schema_copy: 'Copiar',
	tool_schema_copied: 'Copiado',
	tool_schema_download: 'Descargar',
	tool_schema_type_label: 'Tipo de esquema',
	tool_schema_required: 'Obligatorio',
	tool_schema_optional: 'Opcional',
	tool_schema_fields_label: 'Campos',
	tool_schema_output_label: 'Salida JSON-LD',
	tool_schema_wrap_script: 'Envolver en <script type="application/ld+json">',
	tool_schema_missing_required: 'Falta el campo obligatorio: {field}',
	tool_schema_err_no_fields: 'Rellena primero los campos obligatorios.',
	tool_schema_breadcrumb_min: 'Las migas de pan necesitan al menos dos niveles.',
	tool_schema_type_faq: 'FAQ',
	tool_schema_type_article: 'Artículo',
	tool_schema_type_breadcrumb: 'Migas de pan',
	tool_schema_type_organization: 'Organización',
	tool_schema_faq_question: 'Pregunta {n}',
	tool_schema_faq_answer: 'Respuesta {n}',
	tool_schema_faq_add: 'Añadir pregunta',
	tool_schema_faq_remove: 'Quitar',
	tool_schema_article_headline: 'Titular',
	tool_schema_article_description: 'Descripción',
	tool_schema_article_author: 'Nombre del autor',
	tool_schema_article_date_published: 'Fecha de publicación (AAAA-MM-DD)',
	tool_schema_article_date_modified: 'Fecha de modificación (AAAA-MM-DD)',
	tool_schema_article_image: 'URL de imagen (opcional)',
	tool_schema_article_url: 'URL de la página',
	tool_schema_breadcrumb_name: 'Nombre {n}',
	tool_schema_breadcrumb_url: 'URL {n}',
	tool_schema_breadcrumb_add: 'Añadir nivel',
	tool_schema_org_name: 'Nombre de la organización',
	tool_schema_org_url: 'URL del sitio',
	tool_schema_org_logo: 'URL del logo (opcional)',
	tool_schema_org_description: 'Descripción breve (opcional)',
	tool_schema_how_title: 'Cómo funciona',
	tool_schema_how_body:
		'Elige un tipo de esquema, rellena el formulario y pulsa Generar. La página construye un objeto JSON-LD de Schema.org, comprueba que los campos obligatorios estén presentes y muestra el resultado formateado envuelto en una etiqueta script para pegarlo en el <head> de tu página. Antes de renderizar el resultado se hace una comprobación de sintaxis; los campos obligatorios que falten se listan en vez de producir un marcado roto en silencio.',
	tool_schema_how_item_1: 'Elige un tipo de Schema.org de la lista.',
	tool_schema_how_item_2: 'Rellena los campos obligatorios de ese tipo.',
	tool_schema_how_item_3: 'Haz clic en Generar para construir JSON-LD.',
	tool_schema_how_item_4: 'Copia el bloque script a tu página y mantén coherencia con el contenido visible.',
	tool_schema_rules_title: 'Qué comprueba el generador',
	tool_schema_rules_body:
		'Cada tipo tiene una forma mínima válida. El generador valida que el JSON esté bien formado y señala los campos obligatorios vacíos, pero no puede saber si el marcado coincide con el contenido visible de tu página.',
	tool_schema_rules_item_1:
		'FAQ: mainEntity guarda un array de nodos Question; cada elemento necesita name y acceptedAnswer.text.',
	tool_schema_rules_item_2:
		'Artículo: headline y author son obligatorios; datePublished, dateModified, image y description son opcionales pero recomendados.',
	tool_schema_rules_item_3:
		'Migas de pan: itemListElement es una lista ordenada donde cada position debe ser secuencial (1, 2, 3…).',
	tool_schema_rules_item_4:
		'Coherencia: Google compara los datos estructurados con la página visible. Marcar contenido que no está en la página infringe las políticas de spam.',
	tool_schema_example_title: 'Ejemplo',
	tool_schema_example:
		'Muestra de FAQ con dos preguntas: «¿Cómo instalo el SDK?» y «¿Se procesan los datos localmente?» → la salida contiene un array mainEntity con dos objetos Question, cada uno con acceptedAnswer.text, listo para pegar en el head de tu página.',
	tool_schema_usecases_title: 'Para qué sirve',
	tool_schema_usecase_1:
		'Páginas FAQ: añade una lista de preguntas como datos estructurados para que los buscadores entiendan mejor las preguntas y respuestas.',
	tool_schema_usecase_2:
		'Artículos y documentación: incorpora marcado Article con autor y fechas en sitios de contenido y bases de conocimiento.',
	tool_schema_usecase_3:
		'Producto y estructura del sitio: usa Breadcrumb para describir rutas de navegación y Organization para nombre y logo de la marca.',
	tool_schema_faq_q1: '¿Para quién son los datos estructurados JSON-LD?',
	tool_schema_faq_a1:
		'Para buscadores y otros consumidores que leen el marcado de Schema.org. Está incrustado en tu HTML para que las máquinas entiendan entidades, relaciones y hechos — no es contenido visible para el usuario.',
	tool_schema_faq_q2: '¿Añadir schema FAQ garantiza un resultado enriquecido?',
	tool_schema_faq_a2:
		'No. Los resultados enriquecidos de FAQ dejaron de mostrarse en todo el sitio en mayo de 2026, y los de HowTo antes. Google puede seguir parseando el marcado para entender la página, pero no hay garantía de resultado enriquecido, así que trata el schema como claridad para la comprensión, no como KPI de ranking o rich result.',
	tool_schema_faq_q3: '¿Qué campos son obligatorios en el marcado generado?',
	tool_schema_faq_a3:
		'FAQ necesita pregunta y respuesta por elemento; Artículo necesita titular y autor; Migas de pan necesita al menos dos niveles con nombre y URL; Organización necesita nombre y URL. La página marca los obligatorios y lista los que falten.',
	tool_schema_faq_q4: '¿Por qué el marcado debe coincidir con el contenido visible?',
	tool_schema_faq_a4:
		'Google considera engañoso el dato estructurado que no refleja la página visible. Por ejemplo, una pregunta FAQ que la página no responde realmente puede verse como abuso de marcado aunque el JSON sea válido.',
	tool_schema_references: 'Schema.org; Google Search Central — Conceptos básicos de datos estructurados.',
	tool_schema_ref_schema_label: 'Schema.org',
	tool_schema_ref_google_label: 'Search Central — Datos estructurados',
};

export default es;
