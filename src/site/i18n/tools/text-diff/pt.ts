/**
 * i18n tool shard (text-diff / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_text_diff_article:
    'Ferramenta grátis para comparar dois textos lado a lado. Modo linha para configs e código; modo palavra para texto e prompts; modo caractere para erros finos. Tudo no navegador — não enviamos seu texto.',
  tool_text_diff_clear: 'Limpar',
  tool_text_diff_compare: 'Comparar',
  tool_text_diff_desc:
    'Verificar diferenças entre dois textos colando os dois lados no navegador, sem enviar arquivos.',
  tool_text_diff_description:
    'Verificar diferenças entre dois textos no navegador. Processo: cole o original e a revisão, escolha linha, palavra ou caractere, em linha ou palavra, ignore espaços ou unifique CRLF e LF, e destaque adições e remoções. Os arquivos ficam no dispositivo e não são enviados. Exemplo: mude "olá mundo" para "olá amigo" — o modo palavra mostra uma substituição. A entrada é texto colado, não arquivos Word, Excel ou JSON estruturado.',
  tool_text_diff_empty_hint: 'Cole texto em um ou ambos os lados e compare.',
  tool_text_diff_example:
    'Exemplo (modo palavra): A = "Olá mundo", B = "Olá amigo" → uma alteração (mundo → amigo). Se só a linha do meio muda num bloco de três, o modo linha marca essa linha.',
  tool_text_diff_example_title: 'Exemplo',
  tool_text_diff_faq_a1: 'Linha para código e configs. Palavra para frases, e-mails e prompts — destaca palavras isoladas.',
  tool_text_diff_faq_a2:
    'O texto colado não é enviado nem guardado por nós — a comparação corre no browser. A página pode carregar jsdiff (open source) via CDN; isso não envia o seu texto para os nossos servidores.',
  tool_text_diff_faq_a3: 'Windows usa CRLF; Mac/Linux costumam usar LF. Ative “Tratar CRLF e LF iguais” e compare de novo.',
  tool_text_diff_faq_a4:
    'Não. Só texto colado — sem imagens, ZIP, Word, Excel ou JSON estruturado. Para abrir .txt, .docx ou planilhas, use a página desse formato.',
  tool_text_diff_faq_a5:
    "Não. O modo caractere compara cada caractere e desativa essa opção. Use linha ou palavra para omitir alterações apenas de espaços.",
  tool_text_diff_faq_q1: 'Comparar por linha ou por palavra?',
  tool_text_diff_faq_q2: 'Meu texto vai para um servidor?',
  tool_text_diff_faq_q3: 'Por que só a quebra de linha deixa a linha toda vermelha?',
  tool_text_diff_faq_q4: 'Posso comparar imagens, Word ou arquivos binários?',
  tool_text_diff_faq_q5: "Ignorar espaços funciona no modo caractere?",
  tool_text_diff_how_body:
    "Cole o texto original à esquerda e a revisão à direita, escolha linha, palavra ou caractere e confira adições verdes e remoções vermelhas. O texto fica no seu dispositivo e não é enviado ao servidor.",
  tool_text_diff_load_sample: "Carregar exemplo",
  tool_text_diff_how_item_1: "Cole o texto original à esquerda.",
  tool_text_diff_how_item_2: "Cole a versão revisada à direita.",
  tool_text_diff_how_item_3: "Escolha linha, palavra ou caractere e ajuste espaços e quebras quando as opções estiverem disponíveis.",
  tool_text_diff_how_item_4: "Clique em Comparar e confira as adições e remoções destacadas.",
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
    "O modo escolhido define a unidade de mudança. No modo caractere, Ignorar espaços fica desativado porque essa opção só vale para linhas e palavras.",
  tool_text_diff_rules_intro:
    'A ferramenta procura uma lista curta de edições para passar do texto A ao B (diff clássico / abordagem Myers com jsdiff). Escolha o modo conforme a tarefa:',
  tool_text_diff_rules_item_3: 'Caractere — ideal para typos pequenos; o mais preciso, mas ruidoso em edições longas.',
  tool_text_diff_rules_item_1:
    'Linha — ideal para .env, YAML e código; uma linha alterada fica toda marcada. Rápido de ler, mas uma só palavra também marca a linha inteira.',
  tool_text_diff_rules_item_2:
    'Palavra — ideal para frases, e-mails e prompts; destaca palavras. Mais claro em prosa; pontuação pode fragmentar o resultado.',
  tool_text_diff_rules_item_4:
    "Ignorar espaços vale apenas para linha e palavra. Tratar CRLF e LF como iguais normaliza quebras de Windows e Unix em todos os modos.",
  tool_text_diff_rules_title: 'Como as diferenças são calculadas',
  tool_text_diff_sample_a: 'Olá mundo\nsegunda linha\nterceira linha',
  tool_text_diff_sample_b: 'Olá amigo\nsegunda linha\nterceira linha',
  tool_text_diff_summary: '{added} adicionados, {removed} removidos',
  tool_text_diff_swap: 'Trocar lados',
  tool_text_diff_usecase_1: 'Conferir config: compare trechos .env ou YAML linha a linha.',
  tool_text_diff_usecase_2: 'Ajustar um prompt: modo palavra para ver o que entrou ou saiu.',
  tool_text_diff_usecase_3: 'Revisar texto ou tradução: confirme que só as frases previstas mudaram.',
  tool_text_diff_usecases_title: 'Quando usar',
  tool_text_diff_title: 'Verificar diferenças entre dois textos',
};
export default pt;
