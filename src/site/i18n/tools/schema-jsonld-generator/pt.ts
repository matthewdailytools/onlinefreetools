/**
 * i18n tool shard (schema-jsonld-generator / pt).
 * Portuguese locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_schema_home_title: 'Gerador de JSON-LD',
	tool_schema_home_desc:
		'Ajude o Google a entender sua página e conquiste resultados mais ricos e clicáveis com JSON-LD de Schema.org, gerado no seu navegador.',
	tool_schema_title: 'Gerador de JSON-LD — crie dados estruturados para FAQ, artigo e trilha',
	tool_schema_description:
		'Dados estruturados ajudam o Google e podem enriquecer resultados. Escolha o tipo, preencha e copie JSON-LD pronto. Exemplo: FAQ com duas perguntas.',
	tool_schema_generate: 'Gerar',
	tool_schema_sample: 'Exemplo',
	tool_schema_clear: 'Limpar',
	tool_schema_copy: 'Copiar',
	tool_schema_copied: 'Copiado',
	tool_schema_download: 'Baixar',
	tool_schema_type_label: 'Tipo de esquema',
	tool_schema_required: 'Obrigatório',
	tool_schema_optional: 'Opcional',
	tool_schema_fields_label: 'Campos',
	tool_schema_output_label: 'Saída JSON-LD',
	tool_schema_wrap_script: 'Envolver em <script type="application/ld+json">',
	tool_schema_missing_required: 'Falta o campo obrigatório: {field}',
	tool_schema_err_no_fields: 'Preencha os campos obrigatórios primeiro.',
	tool_schema_breadcrumb_min: 'A trilha precisa de pelo menos dois níveis.',
	tool_schema_type_faq: 'FAQ',
	tool_schema_type_article: 'Artigo',
	tool_schema_type_breadcrumb: 'Trilha',
	tool_schema_type_organization: 'Organização',
	tool_schema_faq_question: 'Pergunta {n}',
	tool_schema_faq_answer: 'Resposta {n}',
	tool_schema_faq_add: 'Adicionar pergunta',
	tool_schema_faq_remove: 'Remover',
	tool_schema_article_headline: 'Manchete',
	tool_schema_article_description: 'Descrição',
	tool_schema_article_author: 'Nome do autor',
	tool_schema_article_date_published: 'Data de publicação (AAAA-MM-DD)',
	tool_schema_article_date_modified: 'Data de modificação (AAAA-MM-DD)',
	tool_schema_article_image: 'URL da imagem (opcional)',
	tool_schema_article_url: 'URL da página',
	tool_schema_breadcrumb_name: 'Nome {n}',
	tool_schema_breadcrumb_url: 'URL {n}',
	tool_schema_breadcrumb_add: 'Adicionar nível',
	tool_schema_org_name: 'Nome da organização',
	tool_schema_org_url: 'URL do site',
	tool_schema_org_logo: 'URL do logo (opcional)',
	tool_schema_org_description: 'Descrição curta (opcional)',
	tool_schema_how_title: 'Como funciona',
	tool_schema_how_body:
		'Escolha um tipo de esquema, preencha o formulário e clique em Gerar. A página monta um objeto JSON-LD do Schema.org, verifica se os campos obrigatórios estão presentes e mostra o resultado formatado envolto em uma tag script para colar no <head> da sua página. Antes de renderizar, roda uma checagem de sintaxe; campos obrigatórios ausentes são listados em vez de produzir um marcado quebrado em silêncio.',
	tool_schema_rules_title: 'O que o gerador verifica',
	tool_schema_rules_body:
		'Cada tipo tem uma forma mínima válida. O gerador valida que o JSON está bem-formado e aponta campos obrigatórios vazios, mas não consegue dizer se o marcado corresponde ao conteúdo visível da sua página.',
	tool_schema_rules_item_1:
		'FAQ: mainEntity guarda uma matriz de nós Question; cada item precisa de name e acceptedAnswer.text.',
	tool_schema_rules_item_2:
		'Artigo: headline e author são obrigatórios; datePublished, dateModified, image e description são opcionais, mas recomendados.',
	tool_schema_rules_item_3:
		'Trilha: itemListElement é uma lista ordenada em que cada position precisa ser sequencial (1, 2, 3…).',
	tool_schema_rules_item_4:
		'Consistência: o Google compara dados estruturados com a página visível. Marcar conteúdo que não está na página viola as políticas de spam.',
	tool_schema_example_title: 'Exemplo',
	tool_schema_example:
		'Exemplo de FAQ com duas perguntas: “Como instalo o SDK?” e “Os dados são processados localmente?” → a saída traz uma matriz mainEntity com dois objetos Question, cada um com acceptedAnswer.text, pronta para colar no head da sua página.',
	tool_schema_usecases_title: 'Quando usar',
	tool_schema_usecase_1:
		'Páginas de FAQ: adicione uma lista de perguntas como dados estruturados para que os buscadores entendam melhor as perguntas e respostas.',
	tool_schema_usecase_2:
		'Artigos e documentação: insira o marcado Article com autor e datas em sites de conteúdo e bases de conhecimento.',
	tool_schema_usecase_3:
		'Produto e estrutura do site: use Breadcrumb para descrever caminhos de navegação e Organization para nome e logo da marca.',
	tool_schema_faq_q1: 'Para quem são os dados estruturados JSON-LD?',
	tool_schema_faq_a1:
		'Para buscadores e outros consumidores que leem o marcado do Schema.org. Ele fica embutido no seu HTML para que máquinas entendam entidades, relações e fatos — não é conteúdo visível ao usuário.',
	tool_schema_faq_q2: 'Adicionar o schema FAQ garante um resultado rico?',
	tool_schema_faq_a2:
		'Não. Os resultados ricos de FAQ pararam de aparecer em todo o site em maio de 2026, e os de HowTo antes. O Google pode continuar lendo o marcado para entender a página, mas não há garantia de rich result, então trate o schema como clareza para compreensão, não como KPI de ranking ou rich result.',
	tool_schema_faq_q3: 'Quais campos são obrigatórios no marcado gerado?',
	tool_schema_faq_a3:
		'FAQ precisa de pergunta e resposta por item; Artigo precisa de manchete e autor; Trilha precisa de pelo menos dois níveis com nome e URL; Organização precisa de nome e URL. A página marca os obrigatórios e lista o que faltar.',
	tool_schema_faq_q4: 'Por que o marcado precisa corresponder ao conteúdo visível?',
	tool_schema_faq_a4:
		'O Google considera enganosos os dados estruturados que não refletem a página visível. Por exemplo, uma pergunta de FAQ que a página não responde de fato pode ser vista como abuso de marcado mesmo quando o JSON é válido.',
	tool_schema_references: 'Schema.org; Google Search Central — Fundamentos de dados estruturados.',
	tool_schema_ref_schema_label: 'Schema.org',
	tool_schema_ref_google_label: 'Search Central — Dados estruturados',
};

export default pt;
