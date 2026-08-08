/**
 * i18n tool shard (ip-address / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_ip_address_article:
    'Mostra IP de saída pública mais região aproximada e nome de rede do edge (sem geo externa). Útil para VPN, suporte e allowlists. Não é geolocalização precisa, consulta de fatura da operadora nem «buscar IP de outra pessoa».',
  tool_ip_address_description:
    'Consulte IP público e região aproximada vistos pelo edge (só metadados Cloudflare request.cf, sem API de terceiros). Processo: abra ou Atualizar; o worker lê IP confiável e geo. Exemplo: 203.0.113.10 com país/ISP se houver dados. VPN/proxy mostra a saída, não o 192.168 do roteador.',
  tool_ip_address_example:
    'Exemplo: edge vê 203.0.113.10 (TEST-NET-3) com dicas de país/ISP se houver metadados. Seu resultado real é o IP público de saída, com rótulo IPv4 ou IPv6.',
  tool_ip_address_example_title: 'Exemplo',
  tool_ip_address_faq_a1:
    'No roteador costuma aparecer 192.168.x.x — é o IP privado da LAN. Aqui você vê o IP público de saída na Internet, o que a maioria dos sites enxerga.',
  tool_ip_address_faq_a2:
    'Em geral você vê o IP de saída do VPN/proxy, não o da banda larga. Atualize após mudar VPN para confirmar.',
  tool_ip_address_faq_a3:
    'Não. Cada consulta retorna um endereço — IPv4 ou IPv6 conforme a rota usada. Em dual-stack pode mudar ao reconectar ou trocar de rede.',
  tool_ip_address_faq_a4: 'O navegador chama a API no edge; o worker devolve o IP de cliente confiável dessa conexão.',
  tool_ip_address_faq_a5:
    'A consulta é um pedido curto no edge. Não há histórico de IP; trate o resultado como exibição temporária.',
  tool_ip_address_faq_a6:
    'Vêm de metadados Cloudflare ligados a este IP — muitas vezes país/região/cidade e titular ASN. VPN/proxy mostra a saída; móvel ou CGNAT pode errar. Não usamos bases geo externas.',
  tool_ip_address_faq_q1: 'Por que difere do IP do roteador?',
  tool_ip_address_faq_q2: 'E se eu usar VPN ou proxy?',
  tool_ip_address_faq_q3: 'Recebo IPv4 e IPv6 ao mesmo tempo?',
  tool_ip_address_faq_q4: 'Como a página obtém meu IP?',
  tool_ip_address_faq_q5: 'Vocês armazenam meu IP?',
  tool_ip_address_faq_q6: 'Quão precisos são local e ISP?',
  tool_ip_address_how_body:
    'O navegador chama a API no edge. O worker retorna o IP de cliente confiável e, se existirem, país/região/cidade/fuso e organização ASN de request.cf. Um endereço por consulta — IPv4 ou IPv6.',
  tool_ip_address_how_title: 'Como funciona',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — O que é um endereço IP?',
  tool_ip_address_ref_mdn_label: 'MDN — Cabeçalho X-Forwarded-For (riscos de spoofing)',
  tool_ip_address_rules_body:
    'É o endereço público associado à sua conexão TCP/TLS no edge — a identidade de saída que sites costumam ver. Limites:',
  tool_ip_address_rules_item_1: 'Com VPN ou proxy HTTP você vê o IP de saída do provedor, não o LAN de casa.',
  tool_ip_address_rules_item_2: 'Com NAT, vários dispositivos compartilham um IP público; 192.168.x.x não aparece aqui.',
  tool_ip_address_rules_item_3: 'Preferimos o IP de cliente do edge a X-Forwarded-For sozinho (pode ser falsificado).',
  tool_ip_address_rules_item_4: 'Pode aparecer IPv4 ou IPv6 conforme o caminho; em dual-stack pode mudar ao reconectar.',
  tool_ip_address_rules_item_5:
    'Local e ISP vêm de metadados IP do edge — muitas vezes nível cidade; móvel/CGNAT pode errar; VPN mostra o nó de saída.',
  tool_ip_address_rules_title: 'O que esse IP significa',
  tool_ip_address_title: 'Qual é o meu IP — Consulta IP pública (IPv4/IPv6)',
  tool_ip_address_usecase_1: 'Desktop remoto, NAS ou jogos: informar o IP público atual para firewall ou portas.',
  tool_ip_address_usecase_2: 'Ligue/desligue VPN/proxy e atualize para ver se o IP de saída mudou.',
  tool_ip_address_usecase_3: 'Antes de security groups na nuvem, firewall corporativo ou allowlist de API.',
  tool_ip_address_usecases_title: 'Quando usar',
};
export default pt;
