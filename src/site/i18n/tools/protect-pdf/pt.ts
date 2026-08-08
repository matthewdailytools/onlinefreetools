/**
 * i18n tool shard (protect-pdf / pt). Texto independente para buscas em português.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_protect_pdf_article:
    'Proteja um PDF com senha no navegador antes de enviar anexos sensíveis. O arquivo fica no dispositivo, sem envio ao servidor.',
  tool_protect_pdf_choose_file: 'Escolher PDF',
  tool_protect_pdf_clear: 'Limpar',
  tool_protect_pdf_confirm_label: 'Confirmar senha',
  tool_protect_pdf_desc: 'Adicione senha de abertura a um PDF no dispositivo — sem enviar ao servidor.',
  tool_protect_pdf_description:
    'Proteja um PDF com senha no navegador antes de compartilhar — nada vai ao servidor. Passos: escolha um PDF, digite e confirme a senha (vazias são recusadas), clique Proteger e baixe protected.pdf. Exemplo: amostra de uma página cifrada com sample pronta para download. Criptografia padrão com senha de usuário, não grau militar; para abrir depois use a mesma senha (Desbloquear PDF quando existir — não quebramos senhas). Arquivos ~25 MB podem ficar lentos.',
  tool_protect_pdf_download: 'Baixar',
  tool_protect_pdf_drop_hint: 'Ou solte um PDF aqui. Tudo roda nesta aba.',
  tool_protect_pdf_empty: 'Escolha um PDF primeiro.',
  tool_protect_pdf_err_encrypted: 'Este PDF já parece protegido. Remova com a senha conhecida e proteja de novo.',
  tool_protect_pdf_err_load: 'Não foi possível ler o PDF (corrompido ou incompatível). Tente outro arquivo.',
  tool_protect_pdf_err_password_empty: 'Digite uma senha — vazias não são permitidas.',
  tool_protect_pdf_err_password_mismatch: 'As senhas não coincidem. Digite novamente.',
  tool_protect_pdf_err_protect: 'Falha na criptografia. Verifique arquivo e senha e tente de novo.',
  tool_protect_pdf_example:
    'A amostra cria uma página, cifra com sample, habilita Baixar protected.pdf e mostra a senha no status.',
  tool_protect_pdf_example_title: 'Exemplo',
  tool_protect_pdf_faq_a1:
    'Não. a biblioteca PDF roda na sua aba (scripts podem vir de CDN). Seu PDF não é enviado aos nossos servidores.',
  tool_protect_pdf_faq_a2:
    'Aplica criptografia PDF comum: é preciso a senha para abrir. Não é grau militar — escolha uma senha forte que lembre.',
  tool_protect_pdf_faq_a3:
    'Precisa da mesma senha definida aqui. Quando houver Desbloquear PDF, use-a lá — não quebramos senhas.',
  tool_protect_pdf_faq_a4: 'PDFs já cifrados costumam falhar ao carregar. Remova a senha antiga com ferramenta confiável e proteja outra vez.',
  tool_protect_pdf_faq_q1: 'Meu PDF é enviado?',
  tool_protect_pdf_faq_q2: 'Quão forte é a criptografia?',
  tool_protect_pdf_faq_q3: 'Como abro depois?',
  tool_protect_pdf_faq_q4: 'E se já estava protegido?',
  tool_protect_pdf_how_body: 'Escolha um PDF, digite a senha duas vezes igual, clique Proteger e Baixar. Criptografia local após carregar a biblioteca PDF.',
  tool_protect_pdf_how_title: 'Como funciona',
  tool_protect_pdf_pages_label: 'Páginas',
  tool_protect_pdf_password_label: 'Senha',
  tool_protect_pdf_protect: 'Proteger',
  tool_protect_pdf_rules_body: 'Regras de senha, escopo da criptografia, privacidade e falhas.',
  tool_protect_pdf_rules_item_1: 'Senha obrigatória; confirmação deve coincidir. Vazias recusadas antes de cifrar.',
  tool_protect_pdf_rules_item_2: 'a biblioteca PDF usa mesma senha de usuário e proprietário — necessária para abrir.',
  tool_protect_pdf_rules_item_3: 'Saída: PDF cifrado (protected.pdf). Entradas já protegidas falham com mensagem clara.',
  tool_protect_pdf_rules_item_4: 'Privacidade: bytes na aba; não é grau militar; aviso ~25 MB; arquivos enormes podem falhar.',
  tool_protect_pdf_rules_title: 'Regras esperadas',
  tool_protect_pdf_sample: 'Carregar exemplo',
  tool_protect_pdf_stats_tpl: '{pages} pág. · cifrado · {bytes}',
  tool_protect_pdf_status_done: 'Pronto — clique Baixar para salvar protected.pdf.',
  tool_protect_pdf_status_sample_pwd: 'Exemplo pronto — senha: «{pwd}». Baixe protected.pdf para testar.',
  tool_protect_pdf_status_working: 'Cifrando PDF…',
  tool_protect_pdf_title: 'Proteger PDF — criptografe com senha no navegador',
  tool_protect_pdf_usecase_1: 'Escritório: senha de abertura antes de enviar contrato por e-mail.',
  tool_protect_pdf_usecase_2: 'Operações: trancar relatório pontual antes do portal do cliente.',
  tool_protect_pdf_usecase_3: 'Estudantes: proteger digitalização com senha só para o professor.',
  tool_protect_pdf_usecases_title: 'Bons casos',
  tool_protect_pdf_warn_large: 'Arquivo maior que ~25 MB — criptografia pode ficar lenta ou falhar.',
  tool_protect_pdf_warn_pdflib: 'Falha ao carregar biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
