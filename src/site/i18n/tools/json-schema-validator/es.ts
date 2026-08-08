/**
 * i18n tool shard (json-schema-validator / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_json_schema_validator_article:
    'Valida JSON con un Schema draft-07 en el navegador. Los fallos muestran JSON Pointer para corregir salidas de modelos o feeds sin subir datos.',
  tool_json_schema_validator_bad_instance: 'La instancia no es JSON válido.',
  tool_json_schema_validator_bad_schema: 'El Schema no es JSON válido (o falló al compilar).',
  tool_json_schema_validator_clear: 'Limpiar',
  tool_json_schema_validator_copy_done: 'Copiado',
  tool_json_schema_validator_copy_errors: 'Copiar errores',
  tool_json_schema_validator_desc:
    'Valida JSON con un Schema y errores JSON Pointer — draft-07 local.',
  tool_json_schema_validator_description:
    'Valida JSON frente a un JSON Schema (draft-07) en el navegador. Pasos: pega Schema e instancia, valida y lee cada fallo con su JSON Pointer. Ejemplo: un producto sin price falla por missingProperty. El texto no se sube; Ajv solo se descarga como librería desde un CDN.',
  tool_json_schema_validator_draft_note: 'Motor: Ajv 8 · JSON Schema draft-07 (predeterminado).',
  tool_json_schema_validator_empty: 'Pega primero el Schema y el JSON de instancia.',
  tool_json_schema_validator_example:
    'El Schema exige sku (string) y price (número ≥ 0). Válido: {"sku":"A-1","price":9.5}. Fallo: {"sku":"A-1"} — se informa missingProperty de price en la raíz (/).',
  tool_json_schema_validator_example_title: 'Ejemplo',
  tool_json_schema_validator_fail: 'Falló — mira las rutas abajo',
  tool_json_schema_validator_faq_a1:
    'Suele fallar por claves required ausentes, tipos incorrectos o additionalProperties:false. Mira el Pointer y el mensaje del keyword.',
  tool_json_schema_validator_faq_a2:
    'instancePath es un JSON Pointer hacia la instancia (vacío se muestra como /). Si falta una propiedad required, Ajv añade missingProperty en params.',
  tool_json_schema_validator_faq_a3:
    'Esta página usa el dialecto draft-07 de Ajv. Drafts 2019-09 / 2020-12 requieren otros builds y no se eligen aquí.',
  tool_json_schema_validator_faq_a4:
    'Tu Schema y JSON no se suben. El CDN solo descarga el código de Ajv, no tu pegado.',
  tool_json_schema_validator_faq_a5:
    'Pega Schema y el JSON del modelo, valida y corrige cada Pointer hasta que pase — útil antes de enviar salida estructurada aguas abajo.',
  tool_json_schema_validator_faq_q1: '¿Por qué falló la validación?',
  tool_json_schema_validator_faq_q2: '¿Cómo leo un error JSON Pointer?',
  tool_json_schema_validator_faq_q3: '¿Qué draft usa esta página?',
  tool_json_schema_validator_faq_q4: '¿Sale mi JSON del navegador?',
  tool_json_schema_validator_faq_q5: '¿Cómo reviso la salida estructurada de un LLM?',
  tool_json_schema_validator_how_body:
    'Pega el Schema a la izquierda y la instancia a la derecha. Ajv (draft-07) compila y valida, listando cada error con JSON Pointer. Hay muestras con error y válidas; al entrar se carga la muestra con error para ver rutas reales.',
  tool_json_schema_validator_how_title: 'Cómo funciona',
  tool_json_schema_validator_instance_label: 'JSON de instancia',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    'Pegado muy grande (>200k caracteres juntos). Puede ir lento: prueba un extracto más corto.',
  tool_json_schema_validator_need_lib: 'No se pudo cargar Ajv. Revisa la conexión y recarga.',
  tool_json_schema_validator_pass: 'Válido — la instancia cumple el Schema',
  tool_json_schema_validator_result_label: 'Resultado',
  tool_json_schema_validator_rules_body:
    'En esta página: parsear → compilar Schema draft-07 → validar instancia → emitir Pointers por error.',
  tool_json_schema_validator_rules_item_1:
    'Parseo: ambos paneles deben admitir JSON.parse. Errores de compilación o sintaxis se muestran aparte de fallos de validación.',
  tool_json_schema_validator_rules_item_2:
    'Validación: allErrors reúne todos los fallos. Cada línea es instancePath + message (+ missingProperty si aplica).',
  tool_json_schema_validator_rules_item_3:
    'Draft: dialecto draft-07. No asumas keywords de 2020-12 aquí.',
  tool_json_schema_validator_rules_item_4:
    'Privacidad: el pegado queda en la pestaña. El CDN solo trae código de Ajv.',
  tool_json_schema_validator_rules_title: 'Reglas a esperar',
  tool_json_schema_validator_sample_fail: 'Ejemplo con error',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: 'Ejemplo válido',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'Validador JSON Schema — Rutas draft-07 y local',
  tool_json_schema_validator_usecase_1:
    'IA / agentes: comprobar si el JSON estructurado del modelo omite campos antes de confiar en él.',
  tool_json_schema_validator_usecase_2:
    'Feeds de comercio: validar JSON de producto contra un Schema antes de importar.',
  tool_json_schema_validator_usecase_3:
    'Depurar API: pegar cuerpo de petición/respuesta contra un fragmento de Schema del contrato.',
  tool_json_schema_validator_usecases_title: 'Buenos encajes',
  tool_json_schema_validator_validate: 'Validar',
};
export default es;
