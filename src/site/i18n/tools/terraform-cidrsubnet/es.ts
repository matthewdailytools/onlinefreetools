/**
 * i18n tool shard (terraform-cidrsubnet / es).
 * Búsquedas locales: terraform cidrsubnet, calcular cidrsubnet, subred terraform.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Obtén el CIDR hijo que devolvería Terraform',
	tool_terraform_cidrsubnet_desc:
		'Calcula el CIDR hijo de terraform cidrsubnet. Ejemplo: 10.1.2.0/24, 4, 15 → 10.1.2.240/28. En el dispositivo, sin subir al servidor.',
	tool_terraform_cidrsubnet_description:
		'Calcula terraform cidrsubnet: indica el prefijo padre, newbits y netnum para obtener el CIDR hijo. Ejemplo: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. También puedes evaluar cidrhost y cidrnetmask. Los números se quedan en tu dispositivo y no se suben al servidor.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet recorta un prefijo hijo; no entrega una IP de host. newbits son bits extra de prefijo (no “cuatro subredes”). netnum elige cuál, desde 0. cidrhost da un host; cidrnetmask solo existe en IPv4. El cálculo corre en el navegador según las reglas de HashiCorp.',
	tool_terraform_cidrsubnet_evaluate: 'Calcular',
	tool_terraform_cidrsubnet_sample: 'Cargar ejemplo',
	tool_terraform_cidrsubnet_clear: 'Limpiar',
	tool_terraform_cidrsubnet_copy_cidr: 'Copiar CIDR',
	tool_terraform_cidrsubnet_copy_hcl: 'Copiar HCL',
	tool_terraform_cidrsubnet_copy_ip: 'Copiar dirección',
	tool_terraform_cidrsubnet_copy_done: 'Copiado',
	tool_terraform_cidrsubnet_prefix_label: 'Prefijo padre',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'CIDR hijo',
	tool_terraform_cidrsubnet_result_hcl_label: 'Llamada HCL',
	tool_terraform_cidrsubnet_result_len_label: 'Nueva longitud',
	tool_terraform_cidrsubnet_result_range_label: 'netnum válido',
	tool_terraform_cidrsubnet_result_bits_label: 'Cómo se parten los bits',
	tool_terraform_cidrsubnet_table_title: 'Todos los netnum para este newbits',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'Otras funciones',
	tool_terraform_cidrsubnet_host_prefix_label: 'Prefijo para cidrhost',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'Calcular cidrhost',
	tool_terraform_cidrsubnet_host_result_label: 'Dirección de host',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'Prefijo para cidrnetmask (solo IPv4)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'Calcular cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: 'Máscara',
	tool_terraform_cidrsubnet_err_empty: 'Indica un prefijo CIDR y enteros newbits y netnum.',
	tool_terraform_cidrsubnet_err_prefix: 'Eso no es un prefijo CIDR (hace falta dirección/longitud, IPv4 o IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits debe ser un entero ≥ 0 y la longitud resultante no puede pasar de 32 (IPv4) o 128 (IPv6).',
	tool_terraform_cidrsubnet_err_netnum:
		'Con newbits={nb} solo caben netnum 0–{max}; {nn} no cabe — Terraform también lo rechazaría.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum no cabe en los bits de host que quedan.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask es solo IPv4. Para IPv6 usa cidrsubnet o cidrhost.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'Padre /{old} más {nb} bits → /{neu}. netnum {nn} ocupa los bits extra; bits de host restantes: {hb}.',
	tool_terraform_cidrsubnet_how_title: 'Cómo usarlo',
	tool_terraform_cidrsubnet_how_body:
		'Si en HCL llamas a cidrsubnet, copia esos tres argumentos aquí y compara el CIDR antes de aplicar.',
	tool_terraform_cidrsubnet_how_item_1: 'Recuerda: cidrsubnet devuelve un prefijo de red, no una IP de host (eso es cidrhost).',
	tool_terraform_cidrsubnet_how_item_2: 'Pega el CIDR padre de tu variable de Terraform (por ejemplo 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'Escribe newbits (bits extra) y netnum (qué subred, desde 0).',
	tool_terraform_cidrsubnet_how_item_4: 'Lee el CIDR hijo y copia la llamada HCL, o contrástala con terraform console.',
	tool_terraform_cidrsubnet_how_item_5: 'Si netnum no cabe en newbits, verás un error: Terraform haría lo mismo.',
	tool_terraform_cidrsubnet_formula_title: 'Reglas de cálculo',
	tool_terraform_cidrsubnet_formula_body:
		'Se pone a cero la parte de host del padre y se escribe netnum en los bits extra. Los octetos IPv4 con ceros a la izquierda se leen en decimal, como documenta HashiCorp.',
	tool_terraform_cidrsubnet_formula_item_1: 'longitud_nueva = longitud_padre + newbits (IPv4 ≤ 32, IPv6 ≤ 128).',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits.',
	tool_terraform_cidrsubnet_formula_item_3: 'Dirección de red OR (netnum desplazado por los bits de host que quedan).',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost inserta hostnum en los bits de host (negativo cuenta desde el final). cidrnetmask es la máscara IPv4 con puntos.',
	tool_terraform_cidrsubnet_example_title: 'Ejemplo',
	tool_terraform_cidrsubnet_example:
		'Entrada: 10.1.2.0/24, newbits 4, netnum 15. Salida: 10.1.2.240/28. Cuatro bits extra admiten 0–15; el 15 llena el nibble alto del último octeto (240).',
	tool_terraform_cidrsubnet_usecases_title: 'Para qué sirve',
	tool_terraform_cidrsubnet_usecase_1:
		'Antes de aplicar, mira las subredes VPC: cidrsubnet(var.vpc_cidr, 8, count.index) — AZ0 es netnum 0.',
	tool_terraform_cidrsubnet_usecase_2:
		'Reproduce el ejemplo oficial 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28 y luego cidrhost en ese /28 (hosts 1 y 14).',
	tool_terraform_cidrsubnet_usecase_3:
		'Parte un ULA IPv6: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: '¿cidrhost y cidrsubnet hacen lo mismo?',
	tool_terraform_cidrsubnet_faq_a1:
		'No. cidrsubnet devuelve prefijo + longitud. cidrhost devuelve una dirección de host. hostnum 0 es la red; un hostnum negativo cuenta desde el final (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q2: '¿newbits=4 significa cuatro subredes?',
	tool_terraform_cidrsubnet_faq_a2:
		'No. Son cuatro bits extra de prefijo: 16 netnum posibles (0–15) y el hijo es cuatro bits más largo (/24 → /28).',
	tool_terraform_cidrsubnet_faq_q3: '¿Por qué falla netnum 16 con newbits 4?',
	tool_terraform_cidrsubnet_faq_a3:
		'Cuatro bits solo guardan 0–15. Terraform no envuelve el número: falla. Aquí igual, para que no copies un CIDR que nunca aplicará.',
	tool_terraform_cidrsubnet_faq_q4: '¿Por qué cidrnetmask no acepta IPv6?',
	tool_terraform_cidrsubnet_faq_a4:
		'La función de HashiCorp es solo IPv4 y devuelve máscaras con puntos (255.255.255.0). En IPv6 conserva la longitud (/64) y usa cidrsubnet o cidrhost.',
	tool_terraform_cidrsubnet_faq_q5: '¿Calculáis cidrsubnets o el módulo hashicorp/subnets/cidr?',
	tool_terraform_cidrsubnet_faq_a5:
		'No. cidrsubnets (plural) reparte varios prefijos seguidos desde cero. El módulo del Registry es otra herramienta. Aquí se evalúa una llamada cada vez.',
	tool_terraform_cidrsubnet_faq_q6: '¿Se suben los prefijos al servidor?',
	tool_terraform_cidrsubnet_faq_a6:
		'No. Se quedan en tu dispositivo, en esta pestaña, y no se suben al servidor. Si necesitas una versión concreta del CLI, usa terraform console.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — función cidrsubnet',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — función cidrhost',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — función cidrnetmask',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — notación CIDR',
	tool_terraform_cidrsubnet_disclaimer:
		'El objetivo es alinearse con cidrsubnet, cidrhost y cidrnetmask de HashiCorp. No sustituye a terraform console si la versión discrepa de la documentación.',
};

export default es;
