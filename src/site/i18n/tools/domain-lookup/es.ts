/**
 * i18n tool shard (domain-lookup / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
	tool_domain_lookup_article:
		'Consulta en un solo sitio los registros DNS en vivo y los datos de registro de un dominio. Las peticiones pasan por nuestro edge hacia DNS-over-HTTPS y RDAP; los contactos suelen ir ocultos y el resultado puede diferir de tu resolver local.',
	tool_domain_lookup_clear: 'Limpiar',
	tool_domain_lookup_col_data: 'Datos',
	tool_domain_lookup_col_name: 'Nombre',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'Tipo',
	tool_domain_lookup_copied: 'Copiado',
	tool_domain_lookup_copy: 'Copiar resumen',
	tool_domain_lookup_desc:
		'Consulta de dominio: revisa DNS y registro (WHOIS/RDAP) — A/MX/NS, registrador y caducidad en una vista.',
	tool_domain_lookup_description:
		'Consulta de dominio online: comprueba registros DNS en vivo e información de registro al estilo WHOIS vía RDAP. Pasos: escribe un dominio como example.com, lanza DNS-over-HTTPS y RDAP en paralelo, y revisa A/AAAA/MX/NS/TXT junto con registrador, estado y fechas de caducidad. Los contactos suelen estar ocultos; la consulta pasa por nuestro edge y no guardamos historial.',
	tool_domain_lookup_domain_label: 'Dominio',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'Sin respuestas DNS para los tipos consultados.',
	tool_domain_lookup_dns_fail: 'Falló la consulta DNS.',
	tool_domain_lookup_dns_heading: 'Registros DNS',
	tool_domain_lookup_err_empty: 'Introduce un nombre de dominio.',
	tool_domain_lookup_err_need_one: 'Marca DNS, registro o ambos.',
	tool_domain_lookup_events: 'Eventos',
	tool_domain_lookup_example:
		'Ejemplo: consulta example.com → DNS puede mostrar A/AAAA/NS públicos vía DoH; Registro puede listar registrador, códigos de estado y eventos de caducidad/alta desde RDAP (campos ocultos posibles).',
	tool_domain_lookup_example_title: 'Ejemplo',
	tool_domain_lookup_faq_a1:
		'El navegador llama a nuestra API en el edge; el worker consulta DoH y RDAP aguas arriba. No ofrecemos historial de dominios; trata el resultado como efímero.',
	tool_domain_lookup_faq_a2:
		'La gente sigue diciendo WHOIS. En la mayoría de gTLD, el registro publica lo mismo por RDAP (JSON sobre HTTPS). Esta herramienta usa RDAP; algunos ccTLD pueden no tener servicio RDAP.',
	tool_domain_lookup_faq_a3:
		'Las respuestas DNS vienen de una vista pública (DoH). Los NS de RDAP son los que tiene el registro. Retrasos de propagación o cambios recientes pueden hacer que difieran.',
	tool_domain_lookup_faq_a4:
		'Tras las normas de privacidad, email y teléfono del titular suelen ocultarse. El registrador, estado y fechas suelen quedar visibles. Mostramos lo que devuelve el servidor RDAP.',
	tool_domain_lookup_faq_a5:
		'TLD no soportados, timeouts o DNS vacío tipo NXDOMAIN se muestran por sección para que un fallo no oculte el otro.',
	tool_domain_lookup_faq_q1: '¿Guardáis los dominios que consulto?',
	tool_domain_lookup_faq_q2: '¿Esto es una consulta WHOIS?',
	tool_domain_lookup_faq_q3: '¿Por qué los NS de DNS pueden diferir de los del registro?',
	tool_domain_lookup_faq_q4: '¿Por qué el contacto del titular está vacío?',
	tool_domain_lookup_faq_q5: '¿Qué pasa si falla DNS o RDAP?',
	tool_domain_lookup_how_body:
		'Escribe el dominio y elige DNS, registro o ambos. Desde el edge, el worker consulta Cloudflare DNS-over-HTTPS para tipos habituales y el RDAP del TLD (vía bootstrap IANA) para registrador, estado, eventos y NS del registro. Cada bloque puede acertar o fallar por separado.',
	tool_domain_lookup_how_title: 'Cómo funciona',
	tool_domain_lookup_loading: 'Consultando…',
	tool_domain_lookup_lookup: 'Consultar',
	tool_domain_lookup_ns_mismatch:
		'Nota: los NS de DNS difieren de los de RDAP — suele deberse a propagación o a un cambio reciente.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'Registro',
	tool_domain_lookup_rdap_fail: 'Falló la consulta de registro (RDAP).',
	tool_domain_lookup_rdap_heading: 'Registro (RDAP)',
	tool_domain_lookup_rdap_link: 'URL RDAP',
	tool_domain_lookup_rdap_ns: 'NS del registro',
	tool_domain_lookup_rdap_ok: 'Datos de registro desde RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — API DNS over HTTPS',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — Nombres de dominio',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'Registrador',
	tool_domain_lookup_rules_body:
		'Usa esta página para inspeccionar DNS del resolver y datos del registro. Límites y significado:',
	tool_domain_lookup_rules_item_1:
		'Tipos DNS consultados: A, AAAA, CNAME, MX, NS, TXT, SOA (vista DoH pública).',
	tool_domain_lookup_rules_item_2:
		'Los datos de registro vienen de RDAP, sucesor estructurado del WHOIS clásico en la mayoría de gTLD.',
	tool_domain_lookup_rules_item_3:
		'Los contactos pueden estar ocultos; no asumas datos completos del titular.',
	tool_domain_lookup_rules_item_4:
		'Las respuestas DNS y los NS de RDAP pueden no coincidir durante la propagación.',
	tool_domain_lookup_rules_item_5:
		'Las consultas pasan por nuestro edge a servidores aguas arriba; no modificamos tu DNS ni tu registro.',
	tool_domain_lookup_rules_title: 'Qué obtienes',
	tool_domain_lookup_sample: 'Ejemplo',
	tool_domain_lookup_status: 'Estado',
	tool_domain_lookup_title: 'Consulta de dominio — ver DNS y datos de registro',
	tool_domain_lookup_usecase_1:
		'Antes del go-live: confirma que A/AAAA/CNAME apuntan al host esperado.',
	tool_domain_lookup_usecase_2:
		'Renovación o traspaso: revisa registrador, estado y eventos de caducidad (contactos pueden ir ocultos).',
	tool_domain_lookup_usecase_3:
		'Correo: inspecciona MX y fragmentos TXT relacionados (no es una auditoría de entregabilidad completa).',
	tool_domain_lookup_usecases_title: 'Cuándo te sirve',
};
export default es;
