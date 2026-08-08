/**
 * i18n tool shard (ip-address / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_ip_address_article:
    'Muestra IP de salida pública más región aproximada y nombre de red del edge (sin geo externa). Sirve para VPN, soporte y allowlists. No es geolocalización precisa, consulta de facturación del operador ni «buscar la IP de otro».',
  tool_ip_address_description:
    'Consulta tu IP pública y ubicación aproximada como las ve nuestro edge (solo metadatos Cloudflare request.cf, sin API de terceros). Proceso: abre la página o pulsa Actualizar; el worker lee IP de confianza y geo. Ejemplo: 203.0.113.10 con país e ISP si hay datos. Con VPN/proxy verás la salida, no la 192.168 del router.',
  tool_ip_address_example:
    'Ejemplo: el edge ve 203.0.113.10 (TEST-NET-3) con pistas de país/ISP si hay metadatos. Tu resultado real es tu IP pública de salida, con etiqueta IPv4 o IPv6.',
  tool_ip_address_example_title: 'Ejemplo',
  tool_ip_address_faq_a1:
    'En el router suele aparecer 192.168.x.x — es la IP privada de la LAN. Aquí ves la IP pública de salida en Internet, la que ven la mayoría de sitios.',
  tool_ip_address_faq_a2:
    'Normalmente verás la IP de salida del VPN/proxy, no la de tu banda ancha. Actualiza tras cambiar VPN para confirmarlo.',
  tool_ip_address_faq_a3:
    'No. Cada consulta devuelve una dirección — IPv4 o IPv6 según la ruta usada. En dual-stack puede cambiar al reconectar o cambiar de red.',
  tool_ip_address_faq_a4:
    'Tu navegador pide la API del edge; el worker responde con la IP de cliente de confianza de esa conexión.',
  tool_ip_address_faq_a5:
    'La consulta es una petición corta en el edge. No hay historial de IP; trátalo como visualización temporal.',
  tool_ip_address_faq_a6:
    'Vienen de metadatos Cloudflare ligados a esta IP — a menudo país/región/ciudad y titular ASN. VPN/proxy muestra la salida; móvil o CGNAT puede equivocarse. No usamos bases geo externas.',
  tool_ip_address_faq_q1: '¿Por qué no coincide con la IP de mi router?',
  tool_ip_address_faq_q2: '¿Qué pasa si uso VPN o proxy?',
  tool_ip_address_faq_q3: '¿Obtengo IPv4 e IPv6 a la vez?',
  tool_ip_address_faq_q4: '¿Cómo obtiene la página mi IP?',
  tool_ip_address_faq_q5: '¿Guardáis mi IP?',
  tool_ip_address_faq_q6: '¿Qué tan exactos son ubicación e ISP?',
  tool_ip_address_how_body:
    'El navegador llama a la API del edge. El worker devuelve la IP de cliente de confianza y, si existen, país/región/ciudad/zona horaria y organización ASN desde request.cf. Una dirección por consulta — IPv4 o IPv6.',
  tool_ip_address_how_title: 'Cómo funciona',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — ¿Qué es una dirección IP?',
  tool_ip_address_ref_mdn_label: 'MDN — Cabecera X-Forwarded-For (riesgo de spoofing)',
  tool_ip_address_rules_body:
    'Es la dirección pública ligada a tu conexión TCP/TLS en el edge — la identidad de salida que suelen ver los sitios. Límites importantes:',
  tool_ip_address_rules_item_1: 'Con VPN o proxy HTTP verás la IP de salida del proveedor, no la LAN de casa.',
  tool_ip_address_rules_item_2: 'Tras NAT, varios dispositivos comparten una IP pública; 192.168.x.x no aparece aquí.',
  tool_ip_address_rules_item_3:
    'Priorizamos la IP de cliente del edge frente a X-Forwarded-For solo (esa cabecera se puede falsificar).',
  tool_ip_address_rules_item_4: 'Puede salir IPv4 o IPv6 según la ruta; en dual-stack puede cambiar al reconectar.',
  tool_ip_address_rules_item_5:
    'Ubicación e ISP vienen de metadatos IP del edge — a menudo a nivel ciudad; móvil/CGNAT puede fallar; VPN muestra el nodo de salida.',
  tool_ip_address_rules_title: 'Qué significa esta IP',
  tool_ip_address_title: 'Cuál es mi IP — Consulta tu IP pública (IPv4/IPv6)',
  tool_ip_address_usecase_1: 'Escritorio remoto, NAS o juegos online: informar la IP pública actual para firewall o puertos.',
  tool_ip_address_usecase_2: 'Activa o desactiva VPN/proxy y actualiza para ver si cambió la IP de salida.',
  tool_ip_address_usecase_3: 'Antes de grupos de seguridad en la nube, firewall corporativo o allowlist de API.',
  tool_ip_address_usecases_title: 'Para qué sirve',
};
export default es;
