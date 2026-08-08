/**
 * i18n tool shard (uuid-generator / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_uuid_generator_article:
    'Gere identificadores UUID v4 ou ULID localmente com aleatoriedade criptográfica. Copie lotes para dados de teste, trace IDs ou stubs de schema — nada é enviado.',
  tool_uuid_generator_clear: 'Limpar',
  tool_uuid_generator_copy_all: 'Copiar tudo',
  tool_uuid_generator_copy_done: 'Copiado',
  tool_uuid_generator_count_label: 'Quantidade (1–100)',
  tool_uuid_generator_desc: 'Gere UUID v4 e ULID localmente — até 100, copie com um clique.',
  tool_uuid_generator_description:
    'Gere strings UUID v4 ou ULID no navegador. Passos: escolha o tipo, defina quantidade (1–100), clique Gerar, copie tudo. Exemplo: três UUID v4 estilo RFC como `550e8400-e29b-41d4-a716-446655440000`. Usa crypto.getRandomValues — IDs ficam no seu dispositivo.',
  tool_uuid_generator_example:
    'UUID v4 (minúsculas, com hífens): `550e8400-e29b-41d4-a716-446655440000`. ULID (26 chars Crockford Base32, prefixo ordenável): `01ARZ3NDEKTSV4RRFFQ69G5FAV`. Carregar exemplo preenche três v4 fixos para checar formato.',
  tool_uuid_generator_example_title: 'Exemplo',
  tool_uuid_generator_faq_a1:
    'UUID v4 são 128 bits aleatórios (nibble de versão fixo), bons para IDs opacos. ULID acrescenta prefixo de timestamp em ms e ordena lexicograficamente por criação — útil em logs e bancos que querem chaves temporais sem inteiro sequencial.',
  tool_uuid_generator_faq_a2:
    'Não garantimos unicidade global. IDs usam crypto.getRandomValues (ou randomUUID). Imprevisíveis na prática, mas sua app deve tratar colisões se o domínio exigir.',
  tool_uuid_generator_faq_a3:
    'Lote limitado a 100 por clique para manter a página responsiva. Clique Gerar de novo para mais lotes.',
  tool_uuid_generator_faq_a4:
    'Sem upload e sem geração no servidor. Tudo roda na aba do navegador.',
  tool_uuid_generator_faq_a5:
    'UUID v4: 36 caracteres com hífens, hex minúsculas. ULID: 26 caracteres Crockford Base32 maiúsculos, sem hífens.',
  tool_uuid_generator_faq_q1: 'UUID v4 vs ULID — quando escolher?',
  tool_uuid_generator_faq_q2: 'Os IDs são criptograficamente seguros?',
  tool_uuid_generator_faq_q3: 'Por que o lote máximo é 100?',
  tool_uuid_generator_faq_q4: 'Os IDs saem do navegador?',
  tool_uuid_generator_faq_q5: 'Qual formato de saída?',
  tool_uuid_generator_generate: 'Gerar',
  tool_uuid_generator_how_body:
    'Escolha UUID v4 para UUIDs aleatórios padrão ou ULID para IDs de 26 caracteres ordenáveis no tempo. Defina quantos precisa (1–100) e Gerar. Copiar tudo coloca um ID por linha. Bytes aleatórios vêm do CSPRNG do navegador.',
  tool_uuid_generator_how_title: 'Como funciona',
  tool_uuid_generator_output_label: 'IDs gerados',
  tool_uuid_generator_rules_body:
    'Diferenças de formato e limites práticos ao colar IDs em código ou banco de dados.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 segue RFC 4122: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` com bits de variante; saída em hex minúsculas.',
  tool_uuid_generator_rules_item_2:
    'ULID empacota timestamp Unix ms de 48 bits + 80 bits aleatórios em 26 chars Crockford Base32 (sem I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'Esta ferramenta não garante unicidade entre máquinas ou tempos — trate a saída como amostras aleatórias fortes, não um serviço distribuído de IDs.',
  tool_uuid_generator_rules_item_4:
    'Privacidade: sem rede para gerar; IDs não saem do dispositivo a menos que você copie.',
  tool_uuid_generator_rules_title: 'Regras que você deve esperar',
  tool_uuid_generator_sample: 'Carregar exemplo',
  tool_uuid_generator_title: 'Gerador UUID e ULID — criar identificadores no navegador',
  tool_uuid_generator_type_label: 'Tipo de ID',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'Semear banco de dev com chaves primárias opacas antes de importar fixtures.',
  tool_uuid_generator_usecase_2: 'Criar lote de trace ou correlation IDs para testes de integração.',
  tool_uuid_generator_usecase_3: 'Prototipar APIs que aceitam identificadores ULID ordenáveis no corpo da requisição.',
  tool_uuid_generator_usecases_title: 'Bons casos de uso',
};
export default pt;
