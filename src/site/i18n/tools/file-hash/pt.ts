/**
 * i18n tool shard (file-hash / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_file_hash_algo_label: 'Algoritmos',
  tool_file_hash_article:
    'Calcule resumos hex MD5 e SHA de texto colado ou de um arquivo local. Compare checksums de release, impressões digitais de config ou verifique downloads — o hash fica no navegador, exceto um fetch único deste site ao marcar MD5.',
  tool_file_hash_clear: 'Limpar',
  tool_file_hash_copy: 'Copiar tudo',
  tool_file_hash_copy_done: 'Copiado',
  tool_file_hash_desc:
    'Hash de texto ou arquivos localmente — resumos hex MD5, SHA-1, SHA-256, SHA-384, SHA-512.',
  tool_file_hash_description:
    'Calcule hash de texto colado ou arquivo local no navegador. Passos: escolha Texto ou Arquivo, marque MD5/SHA, clique em Hash, copie hex minúsculo. Exemplo: texto `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. Arquivos são lidos localmente; MD5 só carrega crypto-js deste site se selecionado.',
  tool_file_hash_empty: 'Cole texto ou escolha um arquivo primeiro.',
  tool_file_hash_example:
    'Texto `hello` com SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 do mesmo texto → `5d41402abc4b2a76b9719d911017c592`. Texto usa bytes UTF-8; arquivos usam bytes brutos.',
  tool_file_hash_example_title: 'Exemplo',
  tool_file_hash_faq_a1:
    'MD5 é rápido e ainda aparece em checksums legados (listas `md5sum` antigas, alguns ETags de CDN). Para segurança (assinaturas, senhas, prova de adulteração) prefira SHA-256 ou SHA-512. SHA-1 está obsoleto em certificados, mas pode surgir em artefatos antigos.',
  tool_file_hash_faq_a2:
    'Arquivos grandes são lidos em blocos com barra de progresso. Acima de ~100 MB há aviso, mas tentamos mesmo assim. Arquivos enormes podem ficar lentos ou estourar memória — para arquivos multi-GB use uma ferramenta desktop.',
  tool_file_hash_faq_a3:
    'Texto é hasheado como bytes UTF-8. Arquivo é hasheado como fluxo bruto de bytes. As mesmas letras num `.txt` podem diferir do texto colado se codificação ou quebras de linha mudarem.',
  tool_file_hash_faq_a4:
    'Sem upload. Texto e arquivos ficam no seu dispositivo. SHA-* usa Web Crypto do navegador. Só MD5 carrega crypto-js deste site — seu conteúdo não vai a terceiros.',
  tool_file_hash_faq_a5:
    'Saída em hex minúsculo sem prefixo `0x`, uma linha por algoritmo. Igual a `md5sum` / `sha256sum` comuns no Linux e macOS.',
  tool_file_hash_faq_q1: 'Quando usar MD5 e quando SHA-256?',
  tool_file_hash_faq_q2: 'Como arquivos grandes são tratados?',
  tool_file_hash_faq_q3: 'Texto colado hasheia igual a um arquivo?',
  tool_file_hash_faq_q4: 'Meu arquivo ou texto é enviado?',
  tool_file_hash_faq_q5: 'Qual formato hex vocês exibem?',
  tool_file_hash_file_bytes: 'bytes',
  tool_file_hash_file_label: 'Escolher arquivo',
  tool_file_hash_hash: 'Hash',
  tool_file_hash_how_body:
    'Escolha Texto para hashear uma colagem (bytes UTF-8) ou Arquivo para um arquivo local (bytes brutos). Marque um ou mais algoritmos e clique Hash. SHA usa Web Crypto; MD5 carrega uma biblioteca pequena no primeiro uso. Resultados em hex minúsculo, uma linha por algoritmo.',
  tool_file_hash_how_title: 'Como funciona',
  tool_file_hash_input_mode_label: 'Modo de entrada',
  tool_file_hash_large_warn:
    'Arquivo acima de 100 MB. O hash pode ficar lento ou usar muita memória — considere ferramenta desktop para arquivos muito grandes.',
  tool_file_hash_md5_fail: 'Não foi possível carregar a biblioteca MD5 deste site. Tente SHA-256 ou verifique a rede.',
  tool_file_hash_no_algo: 'Selecione pelo menos um algoritmo.',
  tool_file_hash_output_label: 'Resumos hex',
  tool_file_hash_progress_label: 'Lendo arquivo…',
  tool_file_hash_rules_body:
    'Escolha de algoritmo, semântica de bytes e formato de saída — o que esperar antes de comparar um digest em outro lugar.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex (128 bits). SHA-1 → 40 hex. SHA-256 → 64 hex. SHA-384 → 96 hex. SHA-512 → 128 hex. Tudo minúsculo, sem prefixo.',
  tool_file_hash_rules_item_2:
    'Modo texto: UTF-8 com `TextEncoder`. Modo arquivo: fluxo completo de bytes. BOM UTF-8 ou CRLF no arquivo muda o digest vs colagem simples.',
  tool_file_hash_rules_item_3:
    'Texto vazio ou arquivo zero bytes produz o digest padrão de entrada vazia para cada algoritmo (hex válido).',
  tool_file_hash_rules_item_4:
    'Privacidade: sem upload. MD5 é o único caminho que busca crypto-js neste site; SHA-* usa só Web Crypto integrado.',
  tool_file_hash_rules_title: 'Regras que você deve esperar',
  tool_file_hash_sample: 'Carregar exemplo',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'Arquivo',
  tool_file_hash_tab_text: 'Texto',
  tool_file_hash_text_label: 'Entrada de texto',
  tool_file_hash_text_placeholder: 'Cole texto para hashear como UTF-8…',
  tool_file_hash_title: 'Verificador de hash — conferir resumos no navegador',
  tool_file_hash_usecase_1:
    'Release: compare o SHA-256 de um instalador com o valor publicado na página de download.',
  tool_file_hash_usecase_2:
    'Config: impressão digital de JSON ou trecho `.env` antes e depois do deploy.',
  tool_file_hash_usecase_3:
    'QA legado: confira se um manifest MD5 antigo ainda bate com o artefato reconstruído.',
  tool_file_hash_usecases_title: 'Bons casos de uso',
};
export default pt;
