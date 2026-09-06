/**
 * i18n tool shard (create-zip-file / pt).
 * H1 local: Criar arquivo zip.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_create_zip_file_article:
		'Escolha arquivos nesta aba, junte-os num ZIP e baixe. Os arquivos ficam no seu dispositivo e não sobem a um servidor. Gzip é um modo secundário de um só arquivo.',
	tool_create_zip_file_choose_files: 'Escolher arquivos',
	tool_create_zip_file_clear: 'Limpar',
	tool_create_zip_file_desc:
		'Crie um zip no navegador com vários arquivos ou uma pasta com caminho e baixe sem enviar ao servidor.',
	tool_create_zip_file_description:
		'Criar arquivo zip: escolha arquivos (nomes de pasta são mantidos se o navegador informar caminho relativo), deixe ZIP e baixe. Os arquivos ficam no seu dispositivo e não são enviados a um servidor. O exemplo coloca notes.txt, photo.png e docs/readme.md em sample.zip. Gzip é modo secundário de um arquivo. Zip com senha é limite da FAQ, não promessa da primeira tela.',
	tool_create_zip_file_download: 'Baixar ZIP',
	tool_create_zip_file_drop_hint: 'Solte arquivos aqui. Pastas arrastadas guardam caminhos relativos quando o navegador os oferece.',
	tool_create_zip_file_empty: 'Escolha pelo menos um arquivo primeiro.',
	tool_create_zip_file_err_fflate: 'Falha ao carregar o motor ZIP. Verifique a rede e tente de novo.',
	tool_create_zip_file_err_gzip_many: 'Gzip compacta um arquivo. Volte ao ZIP para vários, ou deixe só um.',
	tool_create_zip_file_err_too_large: 'Este conjunto é grande demais para empacotar com segurança no navegador. Remova arquivos e tente de novo.',
	tool_create_zip_file_example:
		'Carregar exemplo coloca notes.txt, um photo.png mínimo e docs/readme.md, e monta sample.zip. Baixar ZIP já aparece na primeira tela.',
	tool_create_zip_file_example_title: 'Exemplo',
	tool_create_zip_file_faq_a1:
		'Não. Os bytes são lidos nesta aba. O script do motor ZIP pode vir deste site, mas seus arquivos não sobem aos nossos servidores.',
	tool_create_zip_file_faq_a2:
		'Se o navegador informar webkitRelativePath (pasta solta ou seletor de diretório), esses caminhos viram entradas ZIP depois de tirar ../. Essa é a tarefa de zipar pasta nesta página.',
	tool_create_zip_file_faq_a3:
		'Esta página não cria nem quebra ZIP AES na primeira tela. Zip com senha fica só como limite na FAQ.',
	tool_create_zip_file_faq_a4:
		'Use Gzip só com um arquivo quando precisar de .gz. Vários arquivos vão no ZIP. Gzip não comprime PDF.',
	tool_create_zip_file_faq_a5:
		'Conjuntos enormes podem esgotar a memória da aba. A página avisa e para. Para extrair, use a página relacionada de descompactar ZIP.',
	tool_create_zip_file_faq_q1: 'Meus arquivos são enviados?',
	tool_create_zip_file_faq_q2: 'Posso zipar uma pasta?',
	tool_create_zip_file_faq_q3: 'Cria zip com senha?',
	tool_create_zip_file_faq_q4: 'Quando usar Gzip em vez de ZIP?',
	tool_create_zip_file_faq_q5: 'E arquivos enormes? Onde extraio?',
	tool_create_zip_file_file_count_label: 'Arquivos',
	tool_create_zip_file_how_body:
		'Escolha o que quer enviar como um arquivo só, conserve pastas se o navegador der o caminho, e baixe o ZIP. Gzip é outro modo de um arquivo.',
	tool_create_zip_file_how_item_1: 'Escolha os arquivos que quer enviar como um zip — essa é a tarefa, não um segundo extrator.',
	tool_create_zip_file_how_item_2: 'Solte uma pasta se o navegador guardar caminhos relativos; trechos ../ são removidos.',
	tool_create_zip_file_how_item_3: 'Deixe ZIP (o padrão) e baixe. O exemplo já empacota três arquivos ao abrir.',
	tool_create_zip_file_how_item_4: 'Mude para Gzip só com um arquivo e se quiser .gz. Vários arquivos continuam no ZIP.',
	tool_create_zip_file_how_title: 'Como funciona',
	tool_create_zip_file_level_label: 'Nível de compressão',
	tool_create_zip_file_load_sample: 'Carregar exemplo',
	tool_create_zip_file_mode_gzip: 'Gzip (um arquivo)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'Tamanho empacotado',
	tool_create_zip_file_rules_body:
		'Empacotar no navegador exige limpar caminhos, separar ZIP de Gzip, um teto de tamanho e um limite claro de senha.',
	tool_create_zip_file_rules_item_1:
		'ZIP usa DEFLATE via zipSync do fflate. Nível 0–9 é opcional; o exemplo usa nível baixo para pintar rápido.',
	tool_create_zip_file_rules_item_2:
		'Os nomes vêm do nome do arquivo ou de webkitRelativePath. Barras iniciais e ../ são removidos.',
	tool_create_zip_file_rules_item_3:
		'O modo Gzip chama gzipSync em exatamente um arquivo. Mais de um deve usar ZIP.',
	tool_create_zip_file_rules_item_4:
		'ZIP com senha não é a saída da primeira tela. Esta página não recupera nem quebra arquivos cifrados.',
	tool_create_zip_file_rules_title: 'Regras que você deve esperar',
	tool_create_zip_file_status_done: 'Arquivo pronto — baixe ou troque os arquivos.',
	tool_create_zip_file_status_packing: 'Empacotando…',
	tool_create_zip_file_title: 'Criar arquivo zip',
	tool_create_zip_file_usecase_1:
		'E-mail: junte vários anexos num zip antes de enviar, sem subir a um site de empacotamento.',
	tool_create_zip_file_usecase_2:
		'Trabalho escolar: zipar uma pasta de anotações e um print quando pedem um único arquivo.',
	tool_create_zip_file_usecase_3:
		'Pacote pequeno de código: readme mais alguns arquivos, depois confira o zip no Hash de arquivo.',
	tool_create_zip_file_usecases_title: 'Bons encaixes',
};

export default pt;
