/**
 * i18n tool shard (uuid-generator / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_uuid_generator_article:
    'Genera identificadores UUID v4 o ULID en local con aleatoriedad criptográfica. Copia lotes para datos de prueba, trace IDs o stubs de esquema — nada se sube.',
  tool_uuid_generator_clear: 'Limpiar',
  tool_uuid_generator_copy_all: 'Copiar todo',
  tool_uuid_generator_copy_done: 'Copiado',
  tool_uuid_generator_count_label: 'Cantidad (1–100)',
  tool_uuid_generator_desc: 'Genera UUID v4 y ULID en local — hasta 100, copia con un clic.',
  tool_uuid_generator_description:
    'Genera cadenas UUID v4 o ULID en tu navegador. Pasos: elige tipo, define cantidad (1–100), pulsa Generar, copia todo. Ejemplo: tres UUID v4 estilo RFC como `550e8400-e29b-41d4-a716-446655440000`. Usa crypto.getRandomValues — los IDs no salen de tu equipo.',
  tool_uuid_generator_example:
    'UUID v4 (minúsculas, con guiones): `550e8400-e29b-41d4-a716-446655440000`. ULID (26 chars Crockford Base32, prefijo ordenable): `01ARZ3NDEKTSV4RRFFQ69G5FAV`. Cargar ejemplo rellena tres v4 fijos para revisar formato.',
  tool_uuid_generator_example_title: 'Ejemplo',
  tool_uuid_generator_faq_a1:
    'UUID v4 son 128 bits aleatorios (nibble de versión fijo), buenos para IDs opacos. ULID añade prefijo de timestamp en ms y ordena lexicográficamente por creación — útil en logs y bases que quieren claves temporales sin entero secuencial.',
  tool_uuid_generator_faq_a2:
    'No garantizamos unicidad global. Los IDs usan crypto.getRandomValues (o randomUUID si existe). Son impredecibles en la práctica, pero tu app debe manejar colisiones si el dominio lo exige.',
  tool_uuid_generator_faq_a3:
    'El lote se limita a 100 por clic para mantener la página ágil. Pulsa Generar otra vez para más tandas.',
  tool_uuid_generator_faq_a4:
    'Sin subida ni generación en servidor. Todo ocurre en la pestaña del navegador.',
  tool_uuid_generator_faq_a5:
    'UUID v4: 36 caracteres con guiones, hex minúsculas. ULID: 26 caracteres Crockford Base32 en mayúsculas, sin guiones.',
  tool_uuid_generator_faq_q1: 'UUID v4 vs ULID — ¿cuál elegir?',
  tool_uuid_generator_faq_q2: '¿Los IDs son criptográficamente seguros?',
  tool_uuid_generator_faq_q3: '¿Por qué el lote máximo es 100?',
  tool_uuid_generator_faq_q4: '¿Los IDs salen del navegador?',
  tool_uuid_generator_faq_q5: '¿Qué formato de salida usan?',
  tool_uuid_generator_generate: 'Generar',
  tool_uuid_generator_how_body:
    'Elige UUID v4 para UUID aleatorios estándar o ULID para IDs de 26 caracteres ordenables en el tiempo. Indica cuántos necesitas (1–100) y Generar. Copiar todo pone un ID por línea. Los bytes aleatorios vienen del CSPRNG del navegador.',
  tool_uuid_generator_how_title: 'Cómo funciona',
  tool_uuid_generator_output_label: 'IDs generados',
  tool_uuid_generator_rules_body:
    'Diferencias de formato y límites prácticos al pegar IDs en código o base de datos.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 sigue RFC 4122: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` con bits de variante; salida en hex minúsculas.',
  tool_uuid_generator_rules_item_2:
    'ULID empaqueta timestamp Unix ms de 48 bits + 80 bits aleatorios en 26 chars Crockford Base32 (sin I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'Esta herramienta no garantiza unicidad entre máquinas o tiempos — trata la salida como muestras aleatorias fuertes, no un servicio distribuido de IDs.',
  tool_uuid_generator_rules_item_4:
    'Privacidad: sin llamadas de red para generar; los IDs no salen del dispositivo salvo que los copies.',
  tool_uuid_generator_rules_title: 'Reglas que debes esperar',
  tool_uuid_generator_sample: 'Cargar ejemplo',
  tool_uuid_generator_title: 'Generador UUID y ULID — crear identificadores en el navegador',
  tool_uuid_generator_type_label: 'Tipo de ID',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'Sembrar una base de dev con claves primarias opacas antes de importar fixtures.',
  tool_uuid_generator_usecase_2: 'Crear un lote de trace o correlation IDs para pruebas de integración.',
  tool_uuid_generator_usecase_3: 'Prototipar APIs que aceptan identificadores ULID ordenables en el cuerpo de la petición.',
  tool_uuid_generator_usecases_title: 'Buenos casos de uso',
};
export default es;
