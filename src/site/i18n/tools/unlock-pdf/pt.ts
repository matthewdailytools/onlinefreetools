/**
 * i18n tool shard (unlock-pdf / pt). Local rewrite; known password, not cracking.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_unlock_pdf_article:
    'Remova a senha de abertura de um PDF quando você já a sabe—no navegador, sem crackear. O arquivo fica no dispositivo.',
  tool_unlock_pdf_choose_file: 'Escolher PDF criptografado',
  tool_unlock_pdf_clear: 'Limpar',
  tool_unlock_pdf_desc:
    'Remova uma senha de abertura que você já conhece—no dispositivo, sem enviar ao servidor.',
  tool_unlock_pdf_description:
    'Desbloqueie um PDF protegido no navegador se você souber a senha de abertura—sem enviar ao servidor. Passos: escolha um PDF criptografado, digite a senha (vazia é rejeitada se necessário), clique Desbloquear e baixe unlocked.pdf. Exemplo: uma página criptografada com senha sample, preenchida e desbloqueada automaticamente. Não é crackear, força bruta nem recuperar senhas esquecidas. Acima de ~25 MB pode ficar lento.',
  tool_unlock_pdf_download: 'Baixar',
  tool_unlock_pdf_drop_hint: 'Ou solte um PDF criptografado aqui. Processamento nesta aba.',
  tool_unlock_pdf_empty: 'Escolha um PDF criptografado primeiro.',
  tool_unlock_pdf_encrypted_label: 'Com senha',
  tool_unlock_pdf_err_load: 'Não foi possível ler o PDF (danificado ou incompatível). Tente outro arquivo.',
  tool_unlock_pdf_err_not_encrypted:
    'Este PDF não parece ter senha de abertura. Use Mesclar PDF ou outras ferramentas.',
  tool_unlock_pdf_err_password_empty: 'Digite a senha de abertura—vazia é rejeitada se o arquivo exigir.',
  tool_unlock_pdf_err_password_wrong:
    'Senha incorreta. Redigite a que você definiu ao proteger o arquivo.',
  tool_unlock_pdf_err_unlock: 'Falha ao desbloquear. Verifique arquivo e senha e tente de novo.',
  tool_unlock_pdf_example:
    'O exemplo cria um PDF de uma página criptografado com senha sample, preenche a senha, desbloqueia e habilita Baixar unlocked.pdf.',
  tool_unlock_pdf_example_title: 'Exemplo',
  tool_unlock_pdf_faq_a1:
    'Não. Só remove a proteção se você informar a senha correta. Sem crackear, força bruta ou recuperar senhas desconhecidas.',
  tool_unlock_pdf_faq_a2:
    'Não. a biblioteca PDF roda na sua aba (scripts podem vir de CDN). Seu PDF não é enviado aos nossos servidores.',
  tool_unlock_pdf_faq_a3:
    'Você verá mensagem clara de senha errada. Use a mesma senha do Proteger PDF ou de outro app—não adivinhamos.',
  tool_unlock_pdf_faq_a4:
    'Proteger PDF adiciona senha; Mesclar PDF depois de desbloquear aqui. Desbloquear só funciona se o arquivo já pedir senha ao abrir.',
  tool_unlock_pdf_faq_q1: 'Isso crackeia ou recupera senhas esquecidas?',
  tool_unlock_pdf_faq_q2: 'Meu PDF é enviado?',
  tool_unlock_pdf_faq_q3: 'E se a senha estiver errada?',
  tool_unlock_pdf_faq_q4: 'Como se relaciona com Proteger PDF?',
  tool_unlock_pdf_how_body:
    'Escolha um PDF com senha, digite a senha que você já sabe, clique Desbloquear e Baixar. Descriptografia local após carregar a biblioteca PDF. Senha vazia é rejeitada quando necessário.',
  tool_unlock_pdf_how_title: 'Como funciona',
  tool_unlock_pdf_pages_label: 'Páginas',
  tool_unlock_pdf_password_label: 'Senha de abertura',
  tool_unlock_pdf_rules_body: 'Regras de senha, escopo, privacidade e falhas no desbloqueio local.',
  tool_unlock_pdf_rules_item_1:
    'Escopo: você precisa conhecer a senha. Sem crackear, força bruta ou recuperar senhas desconhecidas.',
  tool_unlock_pdf_rules_item_2: 'Entrada: só PDF criptografado. Sem senha é rejeitado com mensagem clara.',
  tool_unlock_pdf_rules_item_3: 'Saída: um PDF sem criptografia (unlocked.pdf). Senha errada = erro explícito.',
  tool_unlock_pdf_rules_item_4:
    'Privacidade: bytes na aba; sem envio ao servidor; aviso ~25 MB; arquivos enormes podem falhar.',
  tool_unlock_pdf_rules_title: 'Regras esperadas',
  tool_unlock_pdf_sample: 'Carregar exemplo',
  tool_unlock_pdf_stats_tpl: '{pages} pág. · desbloqueado · {bytes}',
  tool_unlock_pdf_status_done: 'Pronto — clique Baixar para salvar unlocked.pdf.',
  tool_unlock_pdf_status_sample_pwd: 'Exemplo pronto — senha «{pwd}». Baixe unlocked.pdf para testar.',
  tool_unlock_pdf_status_working: 'Desbloqueando PDF…',
  tool_unlock_pdf_title: 'Desbloquear PDF — remova uma senha que você já sabe',
  tool_unlock_pdf_unlock: 'Desbloquear',
  tool_unlock_pdf_usecase_1: 'Escritório: remova sua senha para mesclar ou imprimir em outro app.',
  tool_unlock_pdf_usecase_2: 'Operações: desbloqueie export que você criptografou antes de enviar a um portal.',
  tool_unlock_pdf_usecase_3: 'Estudantes: remova senha de digitalização após correção, com a senha que você definiu.',
  tool_unlock_pdf_usecases_title: 'Bons cenários',
  tool_unlock_pdf_warn_large: 'Arquivo maior que ~25 MB — pode ficar lento ou falhar em alguns navegadores.',
  tool_unlock_pdf_warn_pdflib: 'Falha ao carregar biblioteca PDF. Verifique a rede e tente de novo.',
};
export default pt;
