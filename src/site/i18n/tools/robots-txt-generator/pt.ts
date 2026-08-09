/**
 * i18n tool shard (robots-txt-generator / pt).
 * Portuguese locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_robots_home_title: 'Gerador de robots.txt',
	tool_robots_home_desc:
		'Controle como os buscadores rastreiam seu site com um robots.txt válido: permissões, bloqueios e rastreadores de IA no navegador.',
	tool_robots_title: 'Gerador de robots.txt — gerencie permissões e bloqueios de rastreadores de IA',
	tool_robots_description:
		'Seu robots.txt diz ao Google quais páginas rastrear e indexar — uma regra errada pode esconder seu site inteiro da busca. Gere um arquivo robots.txt no seu navegador. Passos: escolha os user-agents, adicione caminhos Allow / Disallow e uma linha Sitemap, e copie o resultado em texto puro com as regras de sintaxe e os user-agents atualizados de rastreadores de IA explicados. Roda localmente — nada é enviado. Exemplo: bloquear o GPTBot enquanto mantém o Googlebot totalmente habilitado.',
	tool_robots_generate: 'Gerar',
	tool_robots_sample: 'Exemplo',
	tool_robots_clear: 'Limpar',
	tool_robots_copy: 'Copiar',
	tool_robots_copied: 'Copiado',
	tool_robots_agents_label: 'User-agents',
	tool_robots_agents_hint: 'Marque os rastreadores que deseja incluir e adicione caminhos para cada grupo.',
	tool_robots_include: 'Incluir este user-agent',
	tool_robots_agent_add: 'Adicionar agente personalizado',
	tool_robots_agent_remove: 'Remover agente',
	tool_robots_allow_label: 'Caminhos Allow (um por linha)',
	tool_robots_disallow_label: 'Caminhos Disallow (um por linha)',
	tool_robots_sitemap_label: 'URL do Sitemap (opcional)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'Baixar',
	tool_robots_empty_agent: 'Escolha ou adicione primeiro um user-agent.',
	tool_robots_owner_of: 'Proprietário: {owner}',
	tool_robots_how_title: 'Como funciona',
	tool_robots_how_body:
		'Selecione os rastreadores que você quer atingir, adicione caminhos Allow e Disallow para cada grupo, opcionalmente uma linha Sitemap e clique em Gerar. A página monta o arquivo em texto puro seguindo o layout do RFC 9309: uma linha User-agent por grupo, suas linhas Allow/Disallow abaixo, linha em branco entre grupos e a linha Sitemap no fim. Copie o resultado para a raiz do seu site em /robots.txt.',
	tool_robots_rules_title: 'Regras de sintaxe importantes',
	tool_robots_rules_body:
		'As regras de robots.txt são prefixos de caminho, não padrões, e um rastreador aplica o último grupo que o corresponder no arquivo. Estas são as regras que este gerador segue.',
	tool_robots_rules_item_1:
		'Ordem dos grupos: uma linha User-agent começa um grupo para aquele rastreador; uma linha em branco o termina. O último grupo que corresponde a um rastreador vence.',
	tool_robots_rules_item_2:
		'Correspondência por prefixo: Allow e Disallow correspondem a prefixos de caminho, não substrings nem regex. Apenas * e $ são especiais (RFC 9309).',
	tool_robots_rules_item_3:
		'Disallow: / bloqueia esse agente em todo o site. Disallow com valor vazio permite tudo para esse agente.',
	tool_robots_rules_item_4:
		'Sitemap é uma extensão, não parte do RFC 9309. Não diferencia maiúsculas e pode ir em qualquer lugar, embora seja usual colocá-lo no fim.',
	tool_robots_example_title: 'Exemplo',
	tool_robots_example:
		'Muestra: Googlebot com Allow: / (totalmente habilitado), GPTBot com Disallow: / (bloqueado) e uma linha Sitemap apontando para /sitemap.xml. A saída reflete esse layout: um grupo por rastreador, linha em branco entre grupos e sitemap no fim.',
	tool_robots_usecases_title: 'Quando usar',
	tool_robots_usecase_1:
		'Sites novos: gere um robots.txt inicial que mantém os buscadores habilitados e oculta caminhos de staging privados.',
	tool_robots_usecase_2:
		'Controle de rastreadores de IA: bloqueie GPTBot, ClaudeBot, Google-Extended, CCBot ou PerplexityBot para treinamento ou extração de resumos sem tocar no Googlebot.',
	tool_robots_usecase_3:
		'Descoberta: combine robots.txt com uma linha Sitemap para que os rastreadores encontrem seu sitemap.',
	tool_robots_faq_q1: 'O que acontece se eu escrever Disallow: / ?',
	tool_robots_faq_a1:
		'Ele diz àquele rastreador para não buscar nenhuma URL sob a raiz do site. Se o Googlebot receber Disallow: /, suas páginas podem sumir do Google Search. Para um caminho de staging use Disallow: /private/ em vez disso.',
	tool_robots_faq_q2: 'Como bloqueio rastreadores de IA como o GPTBot?',
	tool_robots_faq_a2:
		'Crie um grupo com o User-agent do rastreador (por exemplo GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot) e adicione Disallow: /. Consulte a documentação oficial do rastreador, pois rastreadores de IA atualizam seus user-agents e faixas de IP de tempos em tempos.',
	tool_robots_faq_q3: 'Onde deve ficar a linha Sitemap?',
	tool_robots_faq_a3:
		'A posição não afeta como os buscadores a leem, mas a convenção a coloca no fim do arquivo. O gerador a anexa por último quando você informa uma URL.',
	tool_robots_faq_q4: 'Meu robots.txt é enviado para algum lugar?',
	tool_robots_faq_a4:
		'Não. O arquivo é gerado no seu navegador e nunca é enviado a um servidor. Feche a aba e nada é mantido.',
	tool_robots_references: 'RFC 9309 Protocolo de exclusão de robôs; Google Search Central — robots.txt; Google Search Central — Gerenciar rastreadores de IA.',
	tool_robots_ref_rfc_label: 'RFC 9309 — Protocolo de exclusão de robôs',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — Rastreadores de IA',
};

export default pt;
