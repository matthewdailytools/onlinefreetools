/**
 * i18n tool shard (aws-vpc-cidr-planner / es).
 * Consultas: planificador cidr vpc aws / bloque cidr vpc.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_aws_vpc_cidr_planner_title: 'Planificador CIDR de VPC AWS — Parte la VPC en subredes por AZ',
	tool_aws_vpc_cidr_planner_desc:
		'Planificador CIDR de VPC AWS: pega 10.0.0.0/16 y elige 3 AZ para subredes públicas/privadas. En tu dispositivo.',
	tool_aws_vpc_cidr_planner_description:
		'Planificador CIDR de VPC AWS: pega un CIDR de VPC (ejemplo 10.0.0.0/16) y elige 2 o 3 AZ para obtener subredes públicas y privadas. Respeta /16–/28 de AWS, resta cinco direcciones reservadas por subred y avisa si solapa 172.17.0.0/16 (puente Docker). Notas Azure opcionales. Se calcula en tu dispositivo, no se sube a un servidor.',
	tool_aws_vpc_cidr_planner_article:
		'Convierte un CIDR de VPC en subredes por zona. No hace falta cuenta AWS; solo aritmética de prefijos.',
	tool_aws_vpc_cidr_planner_plan: 'Planificar',
	tool_aws_vpc_cidr_planner_sample: 'Cargar ejemplo',
	tool_aws_vpc_cidr_planner_clear: 'Limpiar',
	tool_aws_vpc_cidr_planner_copy: 'Copiar tabla',
	tool_aws_vpc_cidr_planner_copy_done: 'Copiado',
	tool_aws_vpc_cidr_planner_input_label: 'CIDR de VPC',
	tool_aws_vpc_cidr_planner_input_ph: '10.0.0.0/16',
	tool_aws_vpc_cidr_planner_az_label: 'Zonas de disponibilidad',
	tool_aws_vpc_cidr_planner_az_2: '2 AZ',
	tool_aws_vpc_cidr_planner_az_3: '3 AZ',
	tool_aws_vpc_cidr_planner_plat_label: 'Reglas de direcciones reservadas',
	tool_aws_vpc_cidr_planner_plat_aws: 'AWS (cinco por subred)',
	tool_aws_vpc_cidr_planner_plat_azure: 'Estilo Azure (primeras cuatro + última)',
	tool_aws_vpc_cidr_planner_result_label: 'Plan de subredes',
	tool_aws_vpc_cidr_planner_col_role: 'Rol',
	tool_aws_vpc_cidr_planner_col_cidr: 'CIDR',
	tool_aws_vpc_cidr_planner_col_usable: 'IP usables',
	tool_aws_vpc_cidr_planner_role_pub: 'AZ {n} pública',
	tool_aws_vpc_cidr_planner_role_priv: 'AZ {n} privada',
	tool_aws_vpc_cidr_planner_warn_docker:
		'Esta VPC solapa 172.17.0.0/16, el puente por defecto de Docker. Suele chocar el enrutado en el mismo host.',
	tool_aws_vpc_cidr_planner_reserved_aws:
		'AWS reserva cinco direcciones por subred: red, +1 router VPC, +2 DNS, +3 futuro y broadcast.',
	tool_aws_vpc_cidr_planner_reserved_azure:
		'El recuento estilo Azure reserva las cuatro primeras y la última (también cinco).',
	tool_aws_vpc_cidr_planner_err_empty: 'Introduce un CIDR de VPC como 10.0.0.0/16.',
	tool_aws_vpc_cidr_planner_err_parse: 'No se pudo interpretar como CIDR IPv4.',
	tool_aws_vpc_cidr_planner_err_vpc: 'Los CIDR IPv4 de VPC AWS deben estar entre /16 y /28.',
	tool_aws_vpc_cidr_planner_err_fit: 'Esta VPC no cabe en {slots} subredes iguales dentro de /28. Acorta el prefijo o usa menos AZ.',
	tool_aws_vpc_cidr_planner_err_ipv6: 'Este planificador solo admite CIDR IPv4 de VPC.',
	tool_aws_vpc_cidr_planner_how_title: 'Cómo funciona',
	tool_aws_vpc_cidr_planner_how_body:
		'El planificador CIDR de VPC AWS parte un prefijo en subredes públicas/privadas por AZ. Sales con CIDR para pegar, no con un login de consola.',
	tool_aws_vpc_cidr_planner_how_item_1: 'Aclara que vas a partir un CIDR de VPC, no a crear una VPC real en AWS.',
	tool_aws_vpc_cidr_planner_how_item_2: 'Pega 10.0.0.0/16 y elige 2 o 3 AZ (o carga el ejemplo).',
	tool_aws_vpc_cidr_planner_how_item_3: 'Lee cada CIDR público/privado y las IP usables tras las reservadas.',
	tool_aws_vpc_cidr_planner_how_item_4: 'Si aparece el aviso 172.17.0.0/16, cambia de bloque si Docker corre en el mismo host.',
	tool_aws_vpc_cidr_planner_how_item_5: 'Para evaluar cidrsubnet() de Terraform, usa la herramienta relacionada.',
	tool_aws_vpc_cidr_planner_formula_title: 'Fórmula',
	tool_aws_vpc_cidr_planner_formula_body:
		'Hacen falta 2×AZ subredes iguales. Bits extra = ceil(log2(2×AZ)). Prefijo de subred = prefijo VPC + extra (≤28). Se cortan en orden desde la red VPC. IP usables = 2^(32−prefijoSubred) − 5.',
	tool_aws_vpc_cidr_planner_formula_item_1: 'Rechaza prefijos VPC fuera de /16–/28 y rechaza IPv6.',
	tool_aws_vpc_cidr_planner_formula_item_2: 'Los primeros AZ bloques son públicos; los siguientes, privados.',
	tool_aws_vpc_cidr_planner_formula_item_3: 'AWS reserva red, router, DNS, futuro y broadcast. Azure-style usa el mismo recuento.',
	tool_aws_vpc_cidr_planner_formula_item_4: 'Solapar 172.17.0.0/16 es aviso, no error duro.',
	tool_aws_vpc_cidr_planner_example_title: 'Ejemplo',
	tool_aws_vpc_cidr_planner_example:
		'Entrada: 10.0.0.0/16, 3 AZ, reglas AWS. Seis /19: 10.0.0.0/19 AZ1 pública … 10.0.160.0/19 AZ3 privada. Cada una 8192−5 = 8187 IP usables.',
	tool_aws_vpc_cidr_planner_usecases_title: 'Cuándo ayuda',
	tool_aws_vpc_cidr_planner_usecase_1: 'Cuenta nueva: partir 10.0.0.0/16 en tres AZ antes de Terraform.',
	tool_aws_vpc_cidr_planner_usecase_2: 'Pillar un plan sobre 172.17.0.0/16 antes de que Docker pelee.',
	tool_aws_vpc_cidr_planner_usecase_3: 'Comparar los /19 con cidrsubnet(prefix, 3, netnum).',
	tool_aws_vpc_cidr_planner_faq_q1: '¿Qué tamaños de CIDR de VPC permite AWS?',
	tool_aws_vpc_cidr_planner_faq_a1: 'CIDR IPv4 de VPC: /16 a /28. Las subredes de este planificador no superan /28. Coincide con la documentación AWS.',
	tool_aws_vpc_cidr_planner_faq_q2: '¿Por qué faltan cinco direcciones?',
	tool_aws_vpc_cidr_planner_faq_a2: 'AWS guarda red, router VPC, DNS, futuro y broadcast. Útiles = total − 5. Azure-style también resta cinco.',
	tool_aws_vpc_cidr_planner_faq_q3: '¿Por qué avisar de 172.17.0.0/16?',
	tool_aws_vpc_cidr_planner_faq_a3: 'El puente Docker usa ese bloque. Si la VPC solapa, los contenedores a menudo no llegan a recursos VPC. Aquí se muestra la tabla y un aviso.',
	tool_aws_vpc_cidr_planner_faq_q4: '¿En qué se diferencia de Terraform cidrsubnet?',
	tool_aws_vpc_cidr_planner_faq_a4: 'Esta página asigna un diseño público/privado completo. cidrsubnet() evalúa una llamada. Usa la herramienta Terraform si ya sabes newbits y netnum.',
	tool_aws_vpc_cidr_planner_faq_q5: '¿El interruptor Azure crea una VNet?',
	tool_aws_vpc_cidr_planner_faq_a5: 'No. Solo cambia la explicación de reservadas. El H1 sigue siendo el planificador AWS. No llama APIs.',
	tool_aws_vpc_cidr_planner_faq_q6: '¿Hace falta cuenta AWS? ¿Se suben los CIDR?',
	tool_aws_vpc_cidr_planner_faq_a6: 'No hace falta cuenta. Los prefijos se quedan en tu dispositivo, en esta pestaña, y no se envían a un servidor.',
	tool_aws_vpc_cidr_planner_ref_vpc_label: 'Docs AWS — Bloques CIDR de VPC',
	tool_aws_vpc_cidr_planner_ref_subnet_label: 'Docs AWS — Tamaño de subred',
	tool_aws_vpc_cidr_planner_disclaimer:
		'Las cifras siguen el dimensionado IPv4 de VPC/subred publicado por AWS. No es consejo oficial de arquitectura; confirma la documentación vigente.',
};

export default es;
