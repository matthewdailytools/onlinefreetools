/**
 * i18n tool shard (json-schema-validator / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_json_schema_validator_article:
    'Valide JSON com um Schema draft-07 no navegador. Falhas mostram JSON Pointer para corrigir saída de modelo ou feed sem enviar dados.',
  tool_json_schema_validator_bad_instance: 'A instância não é JSON válido.',
  tool_json_schema_validator_bad_schema: 'O Schema não é JSON válido (ou falhou ao compilar).',
  tool_json_schema_validator_clear: 'Limpar',
  tool_json_schema_validator_copy_done: 'Copiado',
  tool_json_schema_validator_copy_errors: 'Copiar erros',
  tool_json_schema_validator_desc:
    'Valide JSON com Schema e erros JSON Pointer — draft-07 local.',
  tool_json_schema_validator_description:
    'Valide JSON contra um JSON Schema (draft-07) no navegador. Passos: cole Schema e instância, valide e leia cada falha com JSON Pointer. Exemplo: produto sem price falha com missingProperty. O texto fica na aba; o Ajv só carrega código da CDN.',
  tool_json_schema_validator_draft_note: 'Motor: Ajv 8 · JSON Schema draft-07 (padrão).',
  tool_json_schema_validator_empty: 'Cole primeiro o Schema e o JSON da instância.',
  tool_json_schema_validator_example:
    'O Schema exige sku (string) e price (número ≥ 0). Válido: {"sku":"A-1","price":9.5}. Falha: {"sku":"A-1"} — missingProperty de price na raiz (/).',
  tool_json_schema_validator_example_title: 'Exemplo',
  tool_json_schema_validator_fail: 'Falhou — veja os caminhos abaixo',
  tool_json_schema_validator_faq_a1:
    'Causas comuns: required ausente, tipo errado ou additionalProperties:false. Leia o Pointer e a mensagem do keyword.',
  tool_json_schema_validator_faq_a2:
    'instancePath é um JSON Pointer na instância (vazio aparece como /). Em required ausente, o Ajv inclui missingProperty nos params.',
  tool_json_schema_validator_faq_a3:
    'Esta página usa draft-07 do Ajv. Drafts 2019-09 / 2020-12 precisam de outros builds e não são selecionados aqui.',
  tool_json_schema_validator_faq_a4:
    'Seu Schema e JSON não são enviados. A CDN só baixa o código do Ajv.',
  tool_json_schema_validator_faq_a5:
    'Cole Schema e o JSON do modelo, valide e corrija cada Pointer até passar — útil antes de enviar saída estruturada adiante.',
  tool_json_schema_validator_faq_q1: 'Por que a validação falhou?',
  tool_json_schema_validator_faq_q2: 'Como ler um erro JSON Pointer?',
  tool_json_schema_validator_faq_q3: 'Qual draft esta página usa?',
  tool_json_schema_validator_faq_q4: 'Meu JSON sai do navegador?',
  tool_json_schema_validator_faq_q5: 'Como checar saída estruturada de um LLM?',
  tool_json_schema_validator_how_body:
    'Cole o Schema à esquerda e a instância à direita. O Ajv (draft-07) compila, valida e lista cada erro com JSON Pointer. Há amostras com erro e válidas; a página abre com a amostra com erro.',
  tool_json_schema_validator_how_item_1: 'Cole um JSON Schema (draft-07) à esquerda.',
  tool_json_schema_validator_how_item_2: 'Cole a instância JSON à direita.',
  tool_json_schema_validator_how_item_3: 'Clique em Validar.',
  tool_json_schema_validator_how_item_4: 'Corrija cada erro usando o caminho JSON Pointer.',
  tool_json_schema_validator_how_title: 'Como funciona',
  tool_json_schema_validator_instance_label: 'JSON da instância',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    'Colagem muito grande (>200k caracteres juntos). Pode ficar lento — use um trecho menor.',
  tool_json_schema_validator_need_lib: 'Não foi possível carregar o Ajv. Verifique a conexão e recarregue.',
  tool_json_schema_validator_pass: 'Válido — a instância corresponde ao Schema',
  tool_json_schema_validator_result_label: 'Resultado',
  tool_json_schema_validator_rules_body:
    'Nesta página: parse → compilar Schema draft-07 → validar instância → emitir Pointers.',
  tool_json_schema_validator_rules_item_1:
    'Parse: os dois painéis precisam aceitar JSON.parse. Erros de sintaxe/compilação ficam separados das falhas de validação.',
  tool_json_schema_validator_rules_item_2:
    'Validação: allErrors reúne todas as falhas. Cada linha é instancePath + message (+ missingProperty quando couber).',
  tool_json_schema_validator_rules_item_3:
    'Draft: dialeto draft-07. Não assuma keywords de 2020-12 aqui.',
  tool_json_schema_validator_rules_item_4:
    'Privacidade: a colagem fica na aba. A CDN só traz código do Ajv.',
  tool_json_schema_validator_rules_title: 'Regras a esperar',
  tool_json_schema_validator_sample_fail: 'Amostra com erro',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: 'Amostra válida',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'Validador JSON Schema — Caminhos draft-07 e local',
  tool_json_schema_validator_usecase_1:
    'IA / agentes: ver se o JSON estruturado do modelo omite campos antes de confiar nele.',
  tool_json_schema_validator_usecase_2:
    'Feeds de comércio: validar JSON de produto contra um Schema antes de importar.',
  tool_json_schema_validator_usecase_3:
    'Depurar API: colar corpo de request/response em um fragmento de Schema do contrato.',
  tool_json_schema_validator_usecases_title: 'Bons encaixes',
  tool_json_schema_validator_validate: 'Validar',
};
export default pt;
