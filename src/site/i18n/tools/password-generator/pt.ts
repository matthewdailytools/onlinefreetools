/**
 * i18n tool shard (password-generator / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_password_generator_article:
    'Crie senhas aleatórias com os conjuntos de caracteres escolhidos usando crypto.getRandomValues — para demos rápidas, contas descartáveis ou testar regras de comprimento/charset. Não é gerenciador de senhas nem garantia de força.',
  tool_password_generator_charset_label: 'Conjuntos de caracteres',
  tool_password_generator_clear: 'Limpar',
  tool_password_generator_copy: 'Copiar',
  tool_password_generator_copy_done: 'Copiado',
  tool_password_generator_count_label: 'Quantidade (1–100)',
  tool_password_generator_desc:
    'Senhas aleatórias com comprimento e charset configuráveis — geradas localmente com crypto.getRandomValues.',
  tool_password_generator_description:
    'Gere senhas aleatórias no navegador. Passos: defina comprimento (8–128), marque maiúsculas/minúsculas/dígitos/símbolos, opcional excluir ambíguos, clique Gerar, copie. Exemplo: 16 caracteres misturando casos, dígitos e símbolos. Só crypto.getRandomValues — não armazena nem envia.',
  tool_password_generator_digits: 'Dígitos',
  tool_password_generator_disclaimer:
    'Gerador de demonstração por conveniência — não é cofre de senhas. Para banco ou contas principais use um gerenciador dedicado e seu gerador. Senhas são criadas localmente e não ficam nos nossos servidores.',
  tool_password_generator_empty_charset: 'Ative pelo menos um conjunto (após exclusões).',
  tool_password_generator_example:
    'Comprimento 16 com todos os conjuntos pode parecer `Xk9#mP2$vL4@nQ8!` — maiúsculas, minúsculas, dígitos e símbolos. Cada clique gera nova string; Carregar exemplo usa 16 e tudo ativo.',
  tool_password_generator_example_title: 'Exemplo',
  tool_password_generator_exclude_ambiguous: 'Excluir ambíguos (0 O I l 1)',
  tool_password_generator_faq_a1:
    'Não. A geração roda inteiramente no navegador. Não registramos, armazenamos nem transmitimos senhas criadas aqui.',
  tool_password_generator_faq_a2:
    'Aleatoriedade vem de crypto.getRandomValues (CSPRNG), não Math.random. Senhas mais longas com mais classes resistem melhor, mas nenhuma aba promete ser «inquebrável» — siga a política da org e use gerenciador para segredos de produção.',
  tool_password_generator_faq_a3:
    'Não. Esta página só cria strings aleatórias novas. Não audita, quebra nem recupera senhas existentes.',
  tool_password_generator_faq_a4:
    'Remove caracteres visualmente parecidos (0/O, 1/l/I) para facilitar leitura ou digitação — com charset um pouco menor.',
  tool_password_generator_faq_a5:
    'Até 100 senhas por clique, uma por linha. Gere de novo para outro lote.',
  tool_password_generator_faq_q1: 'As senhas são armazenadas ou enviadas ao servidor?',
  tool_password_generator_faq_q2: 'Quão fortes são essas senhas?',
  tool_password_generator_faq_q3: 'Esta ferramenta quebra minha senha atual?',
  tool_password_generator_faq_q4: 'O que faz «excluir ambíguos»?',
  tool_password_generator_faq_q5: 'Quantas senhas posso gerar de uma vez?',
  tool_password_generator_generate: 'Gerar',
  tool_password_generator_how_body:
    'Ajuste comprimento, escolha classes, opcionalmente exclua glifos ambíguos, defina quantidade e Gerar. Cada caractere vem de crypto.getRandomValues do pool combinado. Copie a lista — nada persiste ao sair da página.',
  tool_password_generator_how_item_1: 'Defina o comprimento com o cursor.',
  tool_password_generator_how_item_2: 'Marque as classes de caracteres; opcionalmente exclua glifos ambíguos.',
  tool_password_generator_how_item_3: 'Defina quantas palavras-passe gerar e clique em Gerar.',
  tool_password_generator_how_item_4: 'Copie uma linha ou copie tudo e guarde num gestor de palavras-passe.',
  tool_password_generator_how_title: 'Como funciona',
  tool_password_generator_length_label: 'Comprimento',
  tool_password_generator_lower: 'Minúsculas',
  tool_password_generator_output_label: 'Senhas',
  tool_password_generator_rules_body:
    'Regras de charset, fonte de aleatoriedade e limites honestos — leia antes de usar em conta real.',
  tool_password_generator_rules_item_1:
    'Pools: A–Z, a–z, 0–9 e símbolos padrão. Pelo menos um pool deve restar após toggles e exclusão ambígua.',
  tool_password_generator_rules_item_2:
    'O índice aleatório usa bytes de crypto.getRandomValues, nunca Math.random. Bytes que enviesariam o módulo são descartados, então todo caractere do conjunto tem a mesma chance.',
  tool_password_generator_rules_item_3:
    'Não é composição NIST certificada (sem regra forçada de «um de cada classe»). Ative os sets manualmente.',
  tool_password_generator_rules_item_4:
    'Privacidade: geração só local; limpe a saída em máquinas compartilhadas.',
  tool_password_generator_rules_title: 'Regras que você deve esperar',
  tool_password_generator_sample: 'Carregar exemplo',
  tool_password_generator_symbols: 'Símbolos',
  tool_password_generator_title: 'Gerador de senhas aleatórias — criar senhas no navegador',
  tool_password_generator_upper: 'Maiúsculas',
  tool_password_generator_usecase_1: 'Criar credencial única para login de staging que você rotacionará em breve.',
  tool_password_generator_usecase_2: 'Prototipar formulários de cadastro que precisam de senhas fortes de amostra em scripts QA.',
  tool_password_generator_usecase_3: 'Comparar como comprimento e símbolos afetam legibilidade antes de atualizar política do time.',
  tool_password_generator_usecases_title: 'Bons casos de uso',
};
export default pt;
