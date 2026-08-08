/**
 * i18n tool shard (ip-address / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_ip_address_article:
    'Zeigt öffentliche Exit-IP plus ungefähre Region und ASN-Organisation vom Edge (keine externe Geo-API). Nützlich für VPN-Checks, Support und Allowlists. Keine Präzisions-Geolokation, kein Carrier-Abrechnungs-Lookup, kein „fremde IP suchen“.',
  tool_ip_address_description:
    'Was ist meine IP-Adresse? Sehen Sie öffentliche IPv4/IPv6 plus grobe Region und Netzname laut Edge (nur Cloudflare request.cf, keine Drittanbieter-API). Ablauf: Seite öffnen oder Aktualisieren — Worker liest Client-IP und Geo-Metadaten. Beispiel: 203.0.113.10 mit Länder-/ISP-Hinweis. Mit VPN/Proxy sehen Sie die Exit-IP.',
  tool_ip_address_example:
    'Dokumentationsbeispiel: Edge sieht 203.0.113.10 (TEST-NET-3) mit Länder-/ISP-Hinweis, wenn Metadaten vorliegen. Live-Ergebnis ist Ihre echte Exit-IP mit IPv4/IPv6-Kennzeichnung.',
  tool_ip_address_example_title: 'Beispiel',
  tool_ip_address_faq_a1:
    'In der Router-Oberfläche steht oft 192.168.x.x — das ist die private LAN-Adresse. Hier sehen Sie die öffentliche Exit-IP im Internet, die die meisten Dienste sehen.',
  tool_ip_address_faq_a2:
    'Meist sehen Sie die Exit-IP von VPN/Proxy, nicht die Heim-Breitband-Adresse. Nach dem Umschalten aktualisieren, um die Änderung zu prüfen.',
  tool_ip_address_faq_a3:
    'Nein. Pro Anfrage eine Adresse — IPv4 oder IPv6, je nach Verbindungsweg. Bei Dual-Stack kann sich die Version nach Reconnect oder Netzwechsel ändern.',
  tool_ip_address_faq_a4:
    'Der Browser ruft die Edge-API auf; der Worker liefert die vertrauenswürdige Client-IP dieser Verbindung.',
  tool_ip_address_faq_a5:
    'Die Abfrage ist eine kurze Edge-Anfrage. Es gibt kein IP-Verlaufsprodukt; behandeln Sie das Ergebnis als temporäre Anzeige.',
  tool_ip_address_faq_a6:
    'Sie kommen aus Cloudflare-Edge-Metadaten zu dieser IP — oft Land/Region/Stadt und ASN-Inhaber. VPN/Proxy zeigt den Exit; Mobil/CGNAT kann abweichen. Keine externen Geo-Datenbanken.',
  tool_ip_address_faq_q1: 'Warum unterscheidet sie sich von der Router-IP?',
  tool_ip_address_faq_q2: 'Was bei VPN oder Proxy?',
  tool_ip_address_faq_q3: 'Bekomme ich IPv4 und IPv6 gleichzeitig?',
  tool_ip_address_faq_q4: 'Wie erhält die Seite meine IP?',
  tool_ip_address_faq_q5: 'Speichern Sie meine IP?',
  tool_ip_address_faq_q6: 'Wie genau sind Region und ISP?',
  tool_ip_address_how_body:
    'Der Browser ruft die Edge-API auf. Der Worker liefert die vertrauenswürdige Client-IP und optional Land/Region/Stadt/Zeitzone plus ASN-Organisation aus request.cf (Felder können fehlen). Pro Anfrage eine IPv4- oder IPv6-Adresse.',
  tool_ip_address_how_title: 'So funktioniert es',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — Was ist eine IP-Adresse?',
  tool_ip_address_ref_mdn_label: 'MDN — X-Forwarded-For-Header (Spoofing-Hinweise)',
  tool_ip_address_rules_body:
    'Der Wert ist die öffentliche Adresse, die unser Edge Ihrer TCP/TLS-Verbindung zuordnet — die Exit-Identität, die Websites meist sehen. Grenzen:',
  tool_ip_address_rules_item_1: 'Mit VPN oder HTTP-Proxy sehen Sie die Exit-IP des Anbieters, nicht die Heim-LAN-Adresse.',
  tool_ip_address_rules_item_2: 'Hinter NAT teilen sich Geräte eine öffentliche IP; 192.168.x.x erscheint hier nicht.',
  tool_ip_address_rules_item_3: 'Wir bevorzugen die Edge-Client-IP gegenüber alleinigem X-Forwarded-For (fälschbar).',
  tool_ip_address_rules_item_4: 'IPv4 oder IPv6 je nach Pfad; Dual-Stack kann nach Reconnect wechseln.',
  tool_ip_address_rules_item_5:
    'Region und ISP stammen aus Edge-IP-Metadaten — oft stadtnah, mobil/CGNAT kann falsch sein; VPN zeigt den Exit-Knoten.',
  tool_ip_address_rules_title: 'Was diese IP bedeutet',
  tool_ip_address_title: 'Was ist meine IP-Adresse? — IPv4/IPv6 sofort anzeigen',
  tool_ip_address_usecase_1: 'Remote-Desktop, NAS oder Gaming: aktuelle öffentliche IP fürs Firewall-Whitelist melden.',
  tool_ip_address_usecase_2: 'VPN/Proxy ein- oder ausschalten und aktualisieren, ob sich die Exit-IP ändert.',
  tool_ip_address_usecase_3: 'Vor Cloud-Security-Groups, Firmen-Firewall oder API-Allowlist — schneller Quell-IP-Check.',
  tool_ip_address_usecases_title: 'Wann sinnvoll',
};
export default de;
