/**
 * i18n tool shard (text-diff / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_text_diff_article:
    'Ferramenta grátis para comparar dois textos lado a lado. Modo linha para configs e código; modo palavra para texto e prompts; modo caractere para erros finos. Tudo no navegador — não enviamos seu texto.',
  tool_text_diff_clear: 'Limpar',
  tool_text_diff_compare: 'Comparar',
  tool_text_diff_description:
    'Compare dois textos online e veja o que mudou. Processo: cole o original e a versão revisada, escolha linha, palavra ou caractere, opcionalmente ignore espaços ou unifique quebras Windows (CRLF→LF), e destaque adições e remoções no navegador. Exemplo: mude "olá mundo" para "olá amigo" — o modo palavra mostra uma substituição.',
  tool_text_diff_empty_hint: 'Cole texto em um ou ambos os lados e compare.',
  tool_text_diff_example:
    'Exemplo (modo palavra): A = "Olá mundo", B = "Olá amigo" → uma alteração (mundo → amigo). Se só a linha do meio muda num bloco de três, o modo linha marca essa linha.',
  tool_text_diff_example_title: 'Exemplo',
  tool_text_diff_faq_a1: 'Linha para código e configs. Palavra para frases, e-mails e prompts — destaca palavras isoladas.',
  tool_text_diff_faq_a2:
    'O texto colado não é enviado nem guardado por nós — a comparação corre no browser. A página pode carregar jsdiff (open source) via CDN; isso não envia o seu texto para os nossos servidores.',
  tool_text_diff_faq_a3: 'Windows usa CRLF; Mac/Linux costumam usar LF. Ative “Tratar CRLF e LF iguais” e compare de novo.',
  tool_text_diff_faq_a4: 'Não. Apenas texto simples.',
  tool_text_diff_faq_q1: 'Comparar por linha ou por palavra?',
  tool_text_diff_faq_q2: 'Meu texto vai para um servidor?',
  tool_text_diff_faq_q3: 'Por que só a quebra de linha deixa a linha toda vermelha?',
  tool_text_diff_faq_q4: 'Posso comparar imagens ou arquivos binários?',
  tool_text_diff_how_body:
    'Cole duas versões, escolha linha, palavra ou caractere, e veja adições em verde e remoções em vermelho. O texto colado não é enviado nem guardado por nós. A página pode carregar a biblioteca open-source jsdiff via CDN para comparar no browser.',
  tool_text_diff_how_title: 'Como funciona',
  tool_text_diff_ignore_ws: 'Ignorar espaços',
  tool_text_diff_label_a: 'Texto original',
  tool_text_diff_label_b: 'Texto revisado',
  tool_text_diff_large_warn: 'Colagem muito grande (>100k caracteres). Pode ficar lento — tente um trecho menor.',
  tool_text_diff_legend: 'Verde = adicionado · Vermelho = removido',
  tool_text_diff_mode_chars: 'Caractere',
  tool_text_diff_mode_label: 'Comparar por',
  tool_text_diff_mode_lines: 'Linha',
  tool_text_diff_mode_words: 'Palavra',
  tool_text_diff_need_lib: 'Não foi possível carregar o comparador. Verifique a conexão e recarregue.',
  tool_text_diff_no_diff: 'Sem diferenças — os dois textos são iguais.',
  tool_text_diff_normalize_eol: 'Tratar CRLF e LF iguais',
  tool_text_diff_placeholder_a: 'Cole o texto original…',
  tool_text_diff_placeholder_b: 'Cole o texto revisado…',
  tool_text_diff_result_label: 'Diferenças',
  tool_text_diff_rules_body:
    'A ferramenta procura uma lista curta de edições de A para B (diff clássico / abordagem Myers com jsdiff). Modo linha: configs e código. Modo palavra: frases e prompts. Modo caractere: erros pequenos, mas mais barulho. Ignorar espaços esconde só indentação. Tratar CRLF e LF iguais evita linha inteira vermelha só por causa da quebra.',
  tool_text_diff_rules_intro:
    'A ferramenta procura uma lista curta de edições para passar do texto A ao B (diff clássico / abordagem Myers com jsdiff). Escolha o modo conforme a tarefa:',
  tool_text_diff_rules_item_chars: 'Caractere — ideal para typos pequenos; o mais preciso, mas ruidoso em edições longas.',
  tool_text_diff_rules_item_lines:
    'Linha — ideal para .env, YAML e código; uma linha alterada fica toda marcada. Rápido de ler, mas uma só palavra também marca a linha inteira.',
  tool_text_diff_rules_item_words:
    'Palavra — ideal para frases, e-mails e prompts; destaca palavras. Mais claro em prosa; pontuação pode fragmentar o resultado.',
  tool_text_diff_rules_options:
    'Ignorar espaços esconde mudanças só de indentação. Tratar CRLF e LF iguais evita que uma linha inteira fique vermelha só pelo tipo de quebra (Windows vs Unix).',
  tool_text_diff_rules_title: 'Como as diferenças são calculadas',
  tool_text_diff_sample_a: 'Olá mundo\\nsegunda linha\\nterceira linha',
  tool_text_diff_sample_b: 'Olá amigo\\nsegunda linha\\nterceira linha',
  tool_text_diff_summary: '{added} adicionados, {removed} removidos',
  tool_text_diff_swap: 'Trocar lados',
  tool_text_diff_usecase_1: 'Conferir config: compare trechos .env ou YAML linha a linha.',
  tool_text_diff_usecase_2: 'Ajustar um prompt: modo palavra para ver o que entrou ou saiu.',
  tool_text_diff_usecase_3: 'Revisar texto ou tradução: confirme que só as frases previstas mudaram.',
  tool_text_diff_usecases_title: 'Quando usar',
};
export default pt;
