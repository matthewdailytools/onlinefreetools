/**
 * i18n tool shard (batch-checksum-release-files / pt).
 * H1 segue a busca «Checksum de arquivos de release em lote».
 */
import type { SiteLangDict } from '../../../types';

/** Português: tabela SHA-256 de assets de release e conferência SUMS. */
const pt: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'Hasheie uma pasta de assets de release nesta aba. Você recebe tabela, CSV e SHA256SUMS — não um ZIP dos binários. Cole uma lista oficial para marcar coincidência ou diferença. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_checksum_release_files_choose_files: 'Escolher arquivos',
	tool_batch_checksum_release_files_chip_md5: 'Também MD5',
	tool_batch_checksum_release_files_clear: 'Limpar',
	tool_batch_checksum_release_files_col_compare: 'Comparar',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'Caminho',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'Tamanho',
	tool_batch_checksum_release_files_desc:
		'Checksum de arquivos de release em lote: tabela SHA-256, MD5 opcional, colar SHA256SUMS, exportar CSV ou SUMS; ficam no dispositivo, sem enviar a um servidor.',
	tool_batch_checksum_release_files_description:
		'Checksum de arquivos de release em lote: coloque os assets, hasheie cada um com SHA-256 nesta aba, acrescente MD5 se precisar, cole uma lista SHA256SUMS para comparar, exporte CSV ou texto SUMS — não um ZIP dos binários. Passos: escolha o conjunto, hasheie tudo, cole a lista se tiver, exporte. Exemplo: dois binários de amostra preenchem duas linhas SHA-256 e uma coluna de coincidência. Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_checksum_release_files_drop_hint: 'Solte arquivos de release (até 20). O hash fica nesta aba. Esta página não empacota os originais em ZIP.',
	tool_batch_checksum_release_files_empty: 'Adicione arquivos primeiro.',
	tool_batch_checksum_release_files_err_md5: 'A biblioteca MD5 não carregou. Tente um navegador atual ou deixe o MD5 desligado.',
	tool_batch_checksum_release_files_err_read: 'Não foi possível ler este arquivo. Ignorado.',
	tool_batch_checksum_release_files_err_too_many: 'No máximo 20 arquivos. Os extras não entraram.',
	tool_batch_checksum_release_files_example:
		'Carregar exemplo hasheia dois binários pequenos, preenche linhas SHA-256, cola uma linha SUMS do primeiro para essa linha coincidir, e ativa CSV e SUMS.',
	tool_batch_checksum_release_files_example_title: 'Exemplo',
	tool_batch_checksum_release_files_export_csv: 'Exportar CSV',
	tool_batch_checksum_release_files_export_sums: 'Exportar SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'Não. O hash ocorre nesta aba. Os arquivos ficam no dispositivo e não são enviados a um servidor. SHA-256 usa Web Crypto. MD5 pode carregar crypto-js de um CDN; seus bytes não saem da aba.',
	tool_batch_checksum_release_files_faq_a2:
		'Não. As exportações são uma tabela CSV e um SHA256SUMS. Empacotar binários é Criar ZIP — outro trabalho.',
	tool_batch_checksum_release_files_faq_a3:
		'Hash de arquivo trata um arquivo ou um texto. Esta página hasheia um conjunto de release, compara um SHA256SUMS colado e exporta CSV e SUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'Ligue Também MD5. SHA-256 sempre roda. MD5 é extra para listas antigas; não há uma segunda URL.',
	tool_batch_checksum_release_files_faq_a5:
		'A coluna de caminho prefere webkitRelativePath. Nomes repetidos na fila ganham um sufixo para as linhas SUMS não colidirem.',
	tool_batch_checksum_release_files_faq_q1: 'Os arquivos sobem para um servidor?',
	tool_batch_checksum_release_files_faq_q2: 'Isto empacota os binários num ZIP?',
	tool_batch_checksum_release_files_faq_q3: 'Qual a diferença para Hash de arquivo?',
	tool_batch_checksum_release_files_faq_q4: 'Onde está o MD5?',
	tool_batch_checksum_release_files_faq_q5: 'E se dois arquivos compartilham o nome?',
	tool_batch_checksum_release_files_file_count_tpl: '{n} arquivos na fila',
	tool_batch_checksum_release_files_hash_all: 'Hashear tudo',
	tool_batch_checksum_release_files_how_body:
		'Coloque os assets, hasheie cada arquivo com SHA-256, cole um SHA256SUMS se tiver, exporte CSV ou SUMS — não um ZIP dos arquivos.',
	tool_batch_checksum_release_files_how_item_1: 'Escolha os binários, instaladores ou checksums que vai publicar.',
	tool_batch_checksum_release_files_how_item_2: 'Mantenha SHA-256. Ligue Também MD5 só se uma lista antiga ainda usar.',
	tool_batch_checksum_release_files_how_item_3: 'Toque em Hashear tudo. O progresso é por arquivo. Erro de leitura ignora essa linha.',
	tool_batch_checksum_release_files_how_item_4: 'Cole uma lista SHA256SUMS oficial para marcar coincidência, diferença ou falta.',
	tool_batch_checksum_release_files_how_item_5: 'Exporte CSV ou SUMS quando houver pelo menos um hash. Só um arquivo? Use Hash de arquivo.',
	tool_batch_checksum_release_files_how_title: 'Como tirar o checksum do lote',
	tool_batch_checksum_release_files_md5_label: 'Calcular também MD5',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 usa Web Crypto em bytes lidos em fatias de 4 MiB e concatenados. A saída é tabela, CSV e SUMS, nunca um ZIP dos originais.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 sempre roda. MD5 é opcional e carrega crypto-js de um CDN; os bytes ficam na aba.',
	tool_batch_checksum_release_files_rules_item_2:
		'Linhas SUMS seguem o sha256sum GNU: hex, dois espaços ou espaço-asterisco, depois o nome. Nomes a mais no colado saem como faltando.',
	tool_batch_checksum_release_files_rules_item_3:
		'Falhas de leitura ignoram essa linha. Nomes duplicados na fila ganham sufixo. Fila vazia desliga a exportação.',
	tool_batch_checksum_release_files_rules_item_4:
		'Os arquivos ficam no dispositivo e não são enviados a um servidor.',
	tool_batch_checksum_release_files_rules_title: 'O que esperar',
	tool_batch_checksum_release_files_sample: 'Carregar exemplo',
	tool_batch_checksum_release_files_status_done: 'Lote pronto — confira a tabela e exporte CSV ou SUMS.',
	tool_batch_checksum_release_files_status_hashing: 'Hasheando cada arquivo de release…',
	tool_batch_checksum_release_files_status_match: 'Coincide',
	tool_batch_checksum_release_files_status_mismatch: 'Não coincide',
	tool_batch_checksum_release_files_status_missing: 'Faltando',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'Hasheado',
	tool_batch_checksum_release_files_status_skip: 'Ignorado',
	tool_batch_checksum_release_files_summary_tpl: '{ok} hasheados · {skip} ignorados · {match} coincidem · {mismatch} não coincidem',
	tool_batch_checksum_release_files_sums_label: 'Cole SHA256SUMS para comparar',
	tool_batch_checksum_release_files_sums_placeholder: 'hex  nome',
	tool_batch_checksum_release_files_title: 'Checksum de arquivos de release em lote',
	tool_batch_checksum_release_files_usecase_1: 'Assets de um GitHub Release que precisam de um SHA256SUMS ao lado dos downloads.',
	tool_batch_checksum_release_files_usecase_2: 'Comparar arquivos de um espelho com a lista de checksums da origem.',
	tool_batch_checksum_release_files_usecase_3: 'Hashear vários arquivos sem empacotar os binários num ZIP.',
	tool_batch_checksum_release_files_usecases_title: 'Quando faz sentido',
	tool_batch_checksum_release_files_warn_large: 'Há um arquivo maior que 64 MB — esta aba pode ficar sem memória nessa linha.',
};

export default pt;
