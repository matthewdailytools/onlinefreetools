/**
 * i18n tool shard (terraform-cidrsubnet / pt).
 * Buscas locais: terraform cidrsubnet, calcular cidrsubnet, sub-rede terraform.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Veja o CIDR filho que o Terraform devolveria',
	tool_terraform_cidrsubnet_desc:
		'Calcular terraform cidrsubnet. Exemplo: 10.1.2.0/24, 4, 15 → 10.1.2.240/28. Fica no dispositivo, sem enviar ao servidor.',
	tool_terraform_cidrsubnet_description:
		'Calcule terraform cidrsubnet: informe o prefixo pai, newbits e netnum para obter o CIDR filho. Exemplo: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. Também avalia cidrhost e cidrnetmask. Os números ficam no dispositivo e não são enviados ao servidor.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet devolve um prefixo filho, não um IP de host. newbits são bits extra de prefixo, não “quatro sub-redes”. netnum começa em 0. cidrhost dá o host; cidrnetmask só existe em IPv4. O cálculo corre no navegador segundo as regras da HashiCorp.',
	tool_terraform_cidrsubnet_evaluate: 'Calcular',
	tool_terraform_cidrsubnet_sample: 'Carregar exemplo',
	tool_terraform_cidrsubnet_clear: 'Limpar',
	tool_terraform_cidrsubnet_copy_cidr: 'Copiar CIDR',
	tool_terraform_cidrsubnet_copy_hcl: 'Copiar HCL',
	tool_terraform_cidrsubnet_copy_ip: 'Copiar endereço',
	tool_terraform_cidrsubnet_copy_done: 'Copiado',
	tool_terraform_cidrsubnet_prefix_label: 'Prefixo pai',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'CIDR filho',
	tool_terraform_cidrsubnet_result_hcl_label: 'Chamada HCL',
	tool_terraform_cidrsubnet_result_len_label: 'Novo comprimento',
	tool_terraform_cidrsubnet_result_range_label: 'netnum válido',
	tool_terraform_cidrsubnet_result_bits_label: 'Como os bits se separam',
	tool_terraform_cidrsubnet_table_title: 'Todos os netnum deste newbits',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'Outras funções',
	tool_terraform_cidrsubnet_host_prefix_label: 'Prefixo do cidrhost',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'Calcular cidrhost',
	tool_terraform_cidrsubnet_host_result_label: 'Endereço de host',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'Prefixo do cidrnetmask (só IPv4)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'Calcular cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: 'Máscara',
	tool_terraform_cidrsubnet_err_empty: 'Indique um prefixo CIDR e inteiros newbits e netnum.',
	tool_terraform_cidrsubnet_err_prefix: 'Isso não é um prefixo CIDR (precisa de endereço/comprimento, IPv4 ou IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits deve ser um inteiro ≥ 0 e o comprimento final não pode ultrapassar 32 (IPv4) ou 128 (IPv6).',
	tool_terraform_cidrsubnet_err_netnum:
		'Com newbits={nb} só cabem netnum 0–{max}; {nn} não cabe — o Terraform também recusaria.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum não cabe nos bits de host restantes.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask é só IPv4. Para IPv6 use cidrsubnet ou cidrhost.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'Pai /{old} mais {nb} bits → /{neu}. netnum {nn} preenche os bits extra; bits de host restantes: {hb}.',
	tool_terraform_cidrsubnet_how_title: 'Como funciona',
	tool_terraform_cidrsubnet_how_body:
		'Cole os três argumentos do seu HCL e confira o CIDR filho antes do apply.',
	tool_terraform_cidrsubnet_how_item_1: 'cidrsubnet devolve o prefixo da sub-rede. O IP de host vem do cidrhost.',
	tool_terraform_cidrsubnet_how_item_2: 'Cole o CIDR pai da variável Terraform (exemplo 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'Defina newbits (bits extra) e netnum (qual sub-rede, a partir de 0).',
	tool_terraform_cidrsubnet_how_item_4: 'Leia o CIDR filho, copie o HCL ou compare com terraform console.',
	tool_terraform_cidrsubnet_how_item_5: 'Se newbits não couber netnum, aparece erro — o Terraform rejeitaria os mesmos valores.',
	tool_terraform_cidrsubnet_formula_title: 'Regras',
	tool_terraform_cidrsubnet_formula_body:
		'Zera-se a parte de host do pai e grava-se netnum nos bits extra. Octetos IPv4 com zeros à esquerda leem-se em decimal, como a HashiCorp documenta.',
	tool_terraform_cidrsubnet_formula_item_1: 'comprimento_novo = comprimento_pai + newbits (IPv4 ≤ 32, IPv6 ≤ 128).',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits.',
	tool_terraform_cidrsubnet_formula_item_3: 'Endereço de rede OR (netnum deslocado pelos bits de host restantes).',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost coloca hostnum nos bits de host (negativo conta do fim). cidrnetmask é a máscara IPv4 com pontos.',
	tool_terraform_cidrsubnet_example_title: 'Exemplo',
	tool_terraform_cidrsubnet_example:
		'Entrada: 10.1.2.0/24, newbits 4, netnum 15. Saída: 10.1.2.240/28. Quatro bits extra admitem 0–15; o 15 preenche o nibble alto do último octeto (240).',
	tool_terraform_cidrsubnet_usecases_title: 'Quando usar',
	tool_terraform_cidrsubnet_usecase_1:
		'Pré-visualizar sub-redes VPC com cidrsubnet(var.vpc_cidr, 8, count.index) — AZ0 é netnum 0.',
	tool_terraform_cidrsubnet_usecase_2:
		'Conferir o exemplo oficial 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28 e depois cidrhost nesse /28 (hosts 1 e 14).',
	tool_terraform_cidrsubnet_usecase_3:
		'Cortar um ULA IPv6: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: 'Os prefixos são enviados ao servidor?',
	tool_terraform_cidrsubnet_faq_a1:
		'Não. Ficam no dispositivo, nesta aba, e não são enviados ao servidor. Se precisar de uma versão específica do CLI, use terraform console.',
	tool_terraform_cidrsubnet_faq_q2: 'newbits=4 significa quatro sub-redes?',
	tool_terraform_cidrsubnet_faq_a2:
		'Não. São quatro bits extra de prefixo: 16 netnum (0–15) e o filho fica quatro bits mais longo (/24 → /28).',
	tool_terraform_cidrsubnet_faq_q3: 'Por que netnum 16 falha com newbits 4?',
	tool_terraform_cidrsubnet_faq_a3:
		'Quatro bits só guardam 0–15. O Terraform não dá a volta: falha. Aqui também, para você não copiar um CIDR que nunca aplica.',
	tool_terraform_cidrsubnet_faq_q4: 'Qual a diferença entre cidrhost e cidrsubnet?',
	tool_terraform_cidrsubnet_faq_a4:
		'cidrsubnet devolve prefixo + comprimento. cidrhost devolve um host. hostnum 0 é a rede; negativo conta do fim (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q5: 'Por que cidrnetmask recusa IPv6?',
	tool_terraform_cidrsubnet_faq_a5:
		'A função da HashiCorp é só IPv4 e devolve máscaras com pontos (255.255.255.0). Em IPv6 mantenha o comprimento e use cidrsubnet ou cidrhost.',
	tool_terraform_cidrsubnet_faq_q6: 'Vocês avaliam cidrsubnets ou o módulo hashicorp/subnets/cidr?',
	tool_terraform_cidrsubnet_faq_a6:
		'Não. cidrsubnets (plural) aloca vários prefixos seguidos a partir de zero. O módulo do Registry é outra ferramenta. Aqui avalia-se uma chamada de cada vez.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — função cidrsubnet',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — função cidrhost',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — função cidrnetmask',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — notação CIDR',
	tool_terraform_cidrsubnet_disclaimer:
		'O objetivo é acompanhar cidrsubnet, cidrhost e cidrnetmask da HashiCorp. Não substitui o terraform console se a versão divergir da documentação.',
};

export default pt;
