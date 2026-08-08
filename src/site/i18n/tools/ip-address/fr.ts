/**
 * i18n tool shard (ip-address / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_ip_address_article:
    'Affiche l’IP de sortie publique plus région approximative et nom réseau depuis l’edge (pas de geo externe). Utile pour VPN, support et allowlists. Pas de géolocalisation précise, pas de facturation opérateur, pas de « trouver l’IP d’un autre ».',
  tool_ip_address_description:
    'Consultez IP publique et région approximative vues par notre edge (métadonnées Cloudflare request.cf uniquement, sans API tierce). Processus : ouvrez ou Actualiser ; le worker lit l’IP de confiance et la geo. Exemple : 203.0.113.10 avec pays/ISP si disponible. VPN/proxy = IP de sortie, pas le 192.168 du routeur.',
  tool_ip_address_example:
    'Exemple : l’edge voit 203.0.113.10 (TEST-NET-3) avec indices pays/ISP si métadonnées disponibles. Votre résultat réel est votre IP publique de sortie, étiquetée IPv4 ou IPv6.',
  tool_ip_address_example_title: 'Exemple',
  tool_ip_address_faq_a1:
    'Sur le routeur on voit souvent 192.168.x.x — adresse privée du LAN. Ici c’est l’IP publique de sortie sur Internet, celle que voient la plupart des sites.',
  tool_ip_address_faq_a2:
    'Vous voyez en général l’IP de sortie du VPN/proxy, pas celle de la box. Actualisez après changement pour vérifier.',
  tool_ip_address_faq_a3:
    'Non. Chaque requête renvoie une adresse — IPv4 ou IPv6 selon le chemin utilisé. En dual-stack, cela peut changer après reconnexion.',
  tool_ip_address_faq_a4: 'Le navigateur interroge l’API edge ; le worker renvoie l’IP client de confiance de cette connexion.',
  tool_ip_address_faq_a5:
    'La requête est courte sur l’edge. Pas d’historique d’IP ; considérez le résultat comme affichage temporaire.',
  tool_ip_address_faq_a6:
    'Issus des métadonnées Cloudflare liées à cette IP — souvent pays/région/ville et titulaire ASN. VPN/proxy = sortie ; mobile ou CGNAT peut fausser. Pas de bases geo externes.',
  tool_ip_address_faq_q1: 'Pourquoi différente de l’IP du routeur ?',
  tool_ip_address_faq_q2: 'Que se passe-t-il avec un VPN ou un proxy ?',
  tool_ip_address_faq_q3: 'Ai-je IPv4 et IPv6 en même temps ?',
  tool_ip_address_faq_q4: 'Comment la page obtient-elle mon IP ?',
  tool_ip_address_faq_q5: 'Stockez-vous mon IP ?',
  tool_ip_address_faq_q6: 'Quelle précision pour lieu et FAI ?',
  tool_ip_address_how_body:
    'Le navigateur appelle l’API edge. Le worker renvoie l’IP client de confiance et, si présents, pays/région/ville/fuseau plus organisation ASN depuis request.cf. Une adresse par requête — IPv4 ou IPv6.',
  tool_ip_address_how_title: 'Fonctionnement',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — Qu’est-ce qu’une adresse IP ?',
  tool_ip_address_ref_mdn_label: 'MDN — En-tête X-Forwarded-For (risques d’usurpation)',
  tool_ip_address_rules_body:
    'C’est l’adresse publique associée à votre connexion TCP/TLS sur l’edge — l’identité de sortie que voient souvent les sites. Limites :',
  tool_ip_address_rules_item_1: 'Avec un VPN ou un proxy HTTP, vous voyez l’IP de sortie du fournisseur, pas le LAN domestique.',
  tool_ip_address_rules_item_2: 'Derrière le NAT, plusieurs appareils partagent une IP publique ; 192.168.x.x n’apparaît pas ici.',
  tool_ip_address_rules_item_3: 'Nous privilégions l’IP client de l’edge plutôt que X-Forwarded-For seul (falsifiable).',
  tool_ip_address_rules_item_4: 'IPv4 ou IPv6 selon le chemin ; en dual-stack, cela peut changer après reconnexion.',
  tool_ip_address_rules_item_5:
    'Lieu et ISP viennent des métadonnées IP edge — souvent niveau ville ; mobile/CGNAT peut fausser ; VPN montre le nœud de sortie.',
  tool_ip_address_rules_title: 'Ce que signifie cette IP',
  tool_ip_address_title: 'Quelle est mon adresse IP — IP publique (IPv4/IPv6)',
  tool_ip_address_usecase_1: 'Bureau à distance, NAS ou jeux en ligne : indiquer l’IP publique actuelle pour pare-feu ou ports.',
  tool_ip_address_usecase_2: 'Activez/désactivez VPN/proxy et actualisez pour voir si l’IP de sortie change.',
  tool_ip_address_usecase_3: 'Avant groupes de sécurité cloud, pare-feu d’entreprise ou allowlist d’API.',
  tool_ip_address_usecases_title: 'Cas d’usage',
};
export default fr;
