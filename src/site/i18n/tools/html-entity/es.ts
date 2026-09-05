/**
 * i18n tool shard (html-entity / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_html_entity_article:
    'Codificación y decodificación de entidades HTML con alcance, forma de salida y notas sobre doble escape, pensado para limpiar cadenas de API o CMS.',
  tool_html_entity_clear: 'Limpiar',
  tool_html_entity_convert: 'Convertir',
  tool_html_entity_copy: 'Copiar salida',
  tool_html_entity_copy_done: 'Copiado',
  tool_html_entity_desc:
    'Entidades HTML: alcance, salida con nombre/decimal/hex y decodificación estricta, todo en el navegador.',
  tool_html_entity_description:
    'Codifica o decodifica referencias de caracteres HTML en el navegador. Pasos: elige Codificar o Decodificar, pega el texto, define el alcance (mínimo, solo no ASCII o todo) y la forma (nombre, decimal, hex), luego copia. Ejemplo: Tom & Jerry → Tom &amp; Jerry. Soporta &copy;, &#169; y emoji — el pegado no se sube.',
  tool_html_entity_dir_label: 'Modo',
  tool_html_entity_empty: 'Pega algo primero.',
  tool_html_entity_error_invalid: 'Referencia de carácter inválida o incompleta (modo estricto).',
  tool_html_entity_example:
    'Codificar: Tom & Jerry → Tom &amp; Jerry. Decodificar: &lt;p&gt;Tom &amp; Jerry &copy; &#x1F600;&lt;/p&gt; → texto plano en la vista previa.',
  tool_html_entity_example_title: 'Ejemplo',
  tool_html_entity_faq_a1:
    'Mínimo solo escapa cinco caracteres críticos. Solo no ASCII codifica todo lo que no sea ASCII. Todo aplica ambos.',
  tool_html_entity_faq_a2: 'Al decodificar, sí — todos dan ©. Al codificar, elige nombre o número según tu plantilla.',
  tool_html_entity_faq_a3: 'Verás &amp;amp;. Decodifica una vez o elige Hasta estable (hasta ocho pasadas).',
  tool_html_entity_faq_a4: 'No. Solo representa caracteres; la vista previa nunca renderiza HTML vivo.',
  tool_html_entity_faq_a5: 'No. Todo ocurre en el navegador, sin CDN ni subida.',
  tool_html_entity_faq_q1: '¿Qué diferencia hay entre los alcances?',
  tool_html_entity_faq_q2: '¿&copy;, &#169; y &#xA9; son iguales?',
  tool_html_entity_faq_q3: '¿Y si está codificado dos veces?',
  tool_html_entity_faq_q4: '¿Esto desinfecta HTML o evita XSS?',
  tool_html_entity_faq_q5: '¿Se sube mi texto?',
  tool_html_entity_form_decimal: 'Decimal &#…;',
  tool_html_entity_form_hex: 'Hex &#x…;',
  tool_html_entity_form_label: 'Forma de salida',
  tool_html_entity_form_named: 'Nombre si existe',
  tool_html_entity_how_body:
    'Elige Codificar para convertir caracteres en entidades HTML, o Decodificar para revertirlas. La codificación recorre carácter a carácter; elige alcance y forma (&copy;, &#169;, &#xA9;). La decodificación usa un textarea seguro; la vista previa es solo texto plano.',
  tool_html_entity_how_title: 'Cómo funciona',
  tool_html_entity_input_label: 'Entrada',
  tool_html_entity_input_placeholder: 'Pega texto plano o entidades…',
  tool_html_entity_large_warn: 'Entrada muy grande (>1M). Puede ir lento — prueba un fragmento más corto.',
  tool_html_entity_output_label: 'Salida',
  tool_html_entity_passes_label: 'Pasadas',
  tool_html_entity_passes_once: 'Una vez',
  tool_html_entity_passes_stable: 'Hasta estable',
  tool_html_entity_preview_label: 'Vista previa decodificada (texto plano)',
  tool_html_entity_rules_body: 'Qué cambia según el alcance y cómo se relacionan nombres y números.',
  tool_html_entity_rules_item_1: 'Mínimo escapa & < > " \'. Solo no ASCII deja el ASCII intacto. Todo combina ambos.',
  tool_html_entity_rules_item_2: '&copy;, &#169; y &#xA9; decodifican igual. Al codificar, “Nombre si existe” usa nombres comunes.',
  tool_html_entity_rules_item_3:
    'Codificar texto ya escapado produce doble escape (&amp;amp;). Usa Decodificar → Hasta estable si lo sospechas: los < y > sueltos se conservan tal cual en cada pasada, no se leen como etiquetas.',
  tool_html_entity_rules_item_4: 'Privacidad: no se sube tu pegado; sin librerías externas.',
  tool_html_entity_rules_title: 'Reglas que debes conocer',
  tool_html_entity_sample: 'Cargar ejemplo',
  tool_html_entity_sample_decode: '&lt;p&gt;Tom &amp; Jerry &copy; &#x1F600;&lt;/p&gt;',
  tool_html_entity_sample_encode: 'Tom & Jerry <3 "quotes" © 😀',
  tool_html_entity_scope_all: 'Todo (mínimo + no ASCII)',
  tool_html_entity_scope_label: 'Alcance',
  tool_html_entity_scope_minimal: 'Mínimo (< > & " \')',
  tool_html_entity_scope_nonascii: 'Solo no ASCII',
  tool_html_entity_strict_label: 'Modo decode',
  tool_html_entity_strict_lenient: 'Flexible',
  tool_html_entity_strict_strict: 'Estricto',
  tool_html_entity_tab_decode: 'Decodificar',
  tool_html_entity_tab_encode: 'Codificar',
  tool_html_entity_title: 'Codificar y decodificar entidades HTML — escape local',
  tool_html_entity_usecase_1: 'Desarrolladores: decodificar cadenas &lt;div&gt;… de una API antes de comparar.',
  tool_html_entity_usecase_2: 'CMS: codificar títulos con & o < antes de meterlos en plantillas HTML.',
  tool_html_entity_usecase_3: 'Email: convertir emoji a entidades numéricas para clientes antiguos.',
  tool_html_entity_usecases_title: 'Cuándo usarlo',
};
export default es;
