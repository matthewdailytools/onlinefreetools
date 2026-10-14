/**
 * i18n tool shard (compare-two-pdfs / pt).
 * Compara a camada de texto de dois PDFs (pt-BR): destaca acréscimos e remoções, mostra páginas; sem OCR.
 */
import type { SiteLangDict } from '../../../types';

/** Dicionário de textos em português do Brasil para a ferramenta «Comparar dois PDFs». */
const pt: SiteLangDict = {
	tool_compare_two_pdfs_title: "Comparar dois PDFs — destacar diferenças de texto",
	tool_compare_two_pdfs_desc: "Veja as diferenças de texto entre dois PDFs, sem enviar ao servidor, e baixe o resultado em HTML.",
	tool_compare_two_pdfs_description:
		"Compare dois PDFs e destaque, palavra por palavra, o texto que entrou e o que saiu. Passos: escolha o PDF A e o PDF B, clique em Comparar e use Baixar diff HTML. Exemplo: “trinta dias” contra “sessenta dias” fica marcado. Só a camada de texto: PDFs escaneados precisam de OCR antes.",
	tool_compare_two_pdfs_file_a: "PDF A (antigo / original)",
	tool_compare_two_pdfs_file_b: "PDF B (novo / revisado)",
	tool_compare_two_pdfs_choose_file: "Escolha um PDF ou arraste para esta caixa",
	tool_compare_two_pdfs_choose_files: "Escolher arquivos",
	tool_compare_two_pdfs_drop_hint: "Ou solte um PDF aqui. O processamento acontece nesta aba.",
	tool_compare_two_pdfs_compare: "Comparar",
	tool_compare_two_pdfs_download: "Baixar diff HTML",
	tool_compare_two_pdfs_sample: "Carregar exemplo",
	tool_compare_two_pdfs_clear: "Limpar",
	tool_compare_two_pdfs_advanced: "Configurações avançadas (opcional)",
	tool_compare_two_pdfs_ignore_case: "Ignorar maiúsculas e minúsculas",
	tool_compare_two_pdfs_ignore_space: "Juntar espaços repetidos e quebras de linha",
	tool_compare_two_pdfs_advanced_hint: "Ajuda quando uma exportação quebra as linhas em outro ponto, mas o texto é o mesmo.",
	tool_compare_two_pdfs_result_label: "Diferenças de texto (A → B)",
	tool_compare_two_pdfs_legend_added: "Incluído em B",
	tool_compare_two_pdfs_legend_removed: "Removido de A",
	tool_compare_two_pdfs_empty: "Escolha o PDF A e o PDF B primeiro.",
	tool_compare_two_pdfs_err_convert: "Não foi possível montar a comparação. Atualize a página e tente de novo.",
	tool_compare_two_pdfs_err_encrypted: "Este PDF parece estar protegido por senha. Desbloqueie e compare de novo.",
	tool_compare_two_pdfs_err_load: "Não foi possível ler um dos arquivos PDF.",
	tool_compare_two_pdfs_err_notext: "Nenhum texto selecionável encontrado. PDFs escaneados (só imagem) precisam passar por OCR antes de serem comparados aqui.",
	tool_compare_two_pdfs_err_pdfjs: "Não foi possível carregar o leitor de PDF.",
	tool_compare_two_pdfs_status_working: "Extraindo o texto e comparando…",
	tool_compare_two_pdfs_status_done: "Pronto: verde é o que entrou em B, vermelho é o que saiu de A. Ao baixar, você recebe um arquivo HTML.",
	tool_compare_two_pdfs_status_identical: "Nenhuma diferença de texto com as opções atuais.",
	tool_compare_two_pdfs_summary_tpl: "{added} incluídos · {removed} removidos",
	tool_compare_two_pdfs_pages_tpl: "páginas A={a}, B={b}",
	tool_compare_two_pdfs_warn_large: "Arquivo grande — a comparação pode demorar.",
	tool_compare_two_pdfs_how_title: "Como comparar dois PDFs",
	tool_compare_two_pdfs_how_body:
		"A ferramenta lê o texto de cada PDF e compara palavra por palavra. Diagramação, fontes e imagens não entram na conta — só o texto que dá para selecionar.",
	tool_compare_two_pdfs_how_item_1: "Escolha o PDF A (original) e o PDF B (revisado) ou arraste cada arquivo para a sua caixa.",
	tool_compare_two_pdfs_how_item_2: "Se precisar, abra Configurações avançadas para ignorar maiúsculas ou juntar espaços.",
	tool_compare_two_pdfs_how_item_3: "Clique em Comparar e acompanhe a barra de progresso enquanto os dois arquivos são lidos.",
	tool_compare_two_pdfs_how_item_4: "Confira o destaque em verde e vermelho e as contagens; depois clique em Baixar diff HTML se quiser o arquivo.",
	tool_compare_two_pdfs_why_choose_title: "Por que usar o Comparar dois PDFs",
	tool_compare_two_pdfs_why_choose_item_1: "Mostra a prévia dos dois PDFs lado a lado e um único destaque das mudanças, palavra por palavra.",
	tool_compare_two_pdfs_why_choose_item_2: "Informa quantos trechos entraram e quantos saíram, além do número de páginas de cada arquivo.",
	tool_compare_two_pdfs_why_choose_item_3: "Dá para ignorar maiúsculas e espaços quando a nova exportação só mudou as quebras de linha.",
	tool_compare_two_pdfs_why_choose_item_4: "Avisa com clareza quando o PDF tem senha ou é um escaneado sem texto.",
	tool_compare_two_pdfs_why_choose_item_5: "Roda no navegador: os PDFs ficam no dispositivo, sem enviar ao servidor.",
	tool_compare_two_pdfs_rules_title: "Regras",
	tool_compare_two_pdfs_rules_body: "A comparação olha só a camada de texto — não é uma comparação visual nem pixel a pixel.",
	tool_compare_two_pdfs_rules_item_1: "O texto selecionável de A e B é extraído com PDF.js e as diferenças são destacadas com jsdiff.",
	tool_compare_two_pdfs_rules_item_2: "Tudo acontece nesta aba; escolher um arquivo não envia nada ao servidor.",
	tool_compare_two_pdfs_rules_item_3: "Não há OCR. Escaneados que são só imagem precisam passar por OCR em outra ferramenta.",
	tool_compare_two_pdfs_rules_item_4: "PDF com senha ou corrompido mostra uma mensagem de erro fácil de entender.",
	tool_compare_two_pdfs_rules_item_5: "O arquivo baixado traz o texto destacado em HTML — não um PDF com anotações.",
	tool_compare_two_pdfs_example_title: "Exemplo",
	tool_compare_two_pdfs_example:
		"Carregar exemplo gera dois contratos de uma página. O A diz “Pagamento em trinta dias.” e o B diz “Pagamento em sessenta dias.”. Ao clicar em Comparar, “trinta” aparece em vermelho como removido e “sessenta” em verde como incluído. Com “Ignorar maiúsculas e minúsculas” ligado, “Dias” e “dias” contam como iguais.",
	tool_compare_two_pdfs_usecases_title: "Quando usar",
	tool_compare_two_pdfs_usecase_1: "Conferir o contrato em PDF que voltou revisado com a versão que você mandou na semana passada.",
	tool_compare_two_pdfs_usecase_2: "Achar mudanças de redação em termos de uso ou numa política em PDF antes de assinar.",
	tool_compare_two_pdfs_usecase_3: "Comparar duas exportações quando só as palavras importam, não as fontes nem as margens.",
	tool_compare_two_pdfs_usecase_4: "Comparar rascunhos sigilosos sem que eles saiam do dispositivo.",
	tool_compare_two_pdfs_faq_q1: "Meus PDFs são enviados para algum servidor?",
	tool_compare_two_pdfs_faq_a1:
		"Não. A prévia e a extração do texto rodam na aba do navegador. Os scripts vêm do próprio site, mas o conteúdo dos seus arquivos fica no dispositivo.",
	tool_compare_two_pdfs_faq_q2: "Por que um PDF escaneado aparece como “sem texto selecionável”?",
	tool_compare_two_pdfs_faq_a2:
		"Escaneados são imagens sem camada de texto, e esta página não faz OCR. Passe o arquivo por um OCR, exporte um PDF pesquisável e compare aqui.",
	tool_compare_two_pdfs_faq_q3: "E PDF protegido por senha?",
	tool_compare_two_pdfs_faq_a3:
		"Arquivos criptografados não abrem aqui. Desbloqueie no seu leitor de PDF, salve uma cópia sem proteção e escolha essa cópia.",
	tool_compare_two_pdfs_faq_q4: "Qual a diferença para comparar texto puro?",
	tool_compare_two_pdfs_faq_a4:
		"Aqui você solta os PDFs, vê as prévias e o número de páginas. A ferramenta de comparar textos serve para texto colado ou arquivos .txt, sem ler PDF.",
	tool_compare_two_pdfs_faq_q5: "Ela compara diagramação, imagens ou assinaturas?",
	tool_compare_two_pdfs_faq_a5:
		"Não. Só o texto selecionável entra na comparação. Um logotipo mudado de lugar ou outra fonte com as mesmas palavras parecem idênticos aqui.",
	tool_compare_two_pdfs_faq_q6: "O que vem no arquivo baixado?",
	tool_compare_two_pdfs_faq_a6:
		"Um arquivo HTML com o mesmo destaque em verde e vermelho da tela — prático para mandar por e-mail ou arquivar. Não é um PDF marcado.",
	tool_compare_two_pdfs_faq_q7: "Quando vale ignorar maiúsculas ou espaços?",
	tool_compare_two_pdfs_faq_a7:
		"Quando uma das exportações só trocou maiúsculas ou quebras de linha. Ligue as opções se o texto é o mesmo, mas o conteúdo extraído não bate.",
	tool_compare_two_pdfs_article: "Compare o texto selecionável de dois PDFs e baixe em HTML as diferenças palavra por palavra.",
	tool_compare_two_pdfs_references: "PDF.js para extrair o texto; jsdiff para destacar as diferenças palavra por palavra.",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — leitor de PDF da Mozilla",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — biblioteca de comparação de texto",
};

export default pt;
