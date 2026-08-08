/**
 * i18n tool shard (smart-website-color-scheme / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'Bajo AA',
  tool_smart_website_color_scheme_aa_pass: 'AA ok',
  tool_smart_website_color_scheme_add_theme: 'Añadir tema',
  tool_smart_website_color_scheme_article:
    'Parte de un color de marca y arma un esquema web completo: neutros compartidos, tokens semánticos (enlaces neutros, estados fijos), vista previa de chrome claro, autochequeo de contraste y CSS :root listo para pegar — todo en tu navegador.',
  tool_smart_website_color_scheme_bad_hex: 'Introduce un HEX válido de 3 o 6 dígitos (p. ej. #0F6E8C).',
  tool_smart_website_color_scheme_bad_id:
    'El id del tema debe ser único, 1–32 caracteres: letras, números, - o _.',
  tool_smart_website_color_scheme_check_muted: 'Texto secundario sobre superficie',
  tool_smart_website_color_scheme_check_on_action: 'Texto sobre acción (on-action)',
  tool_smart_website_color_scheme_check_text: 'Cuerpo sobre superficie',
  tool_smart_website_color_scheme_checks_label: 'Autochequeo de contraste (tema activo)',
  tool_smart_website_color_scheme_clear: 'Limpiar',
  tool_smart_website_color_scheme_col_role: 'Rol',
  tool_smart_website_color_scheme_col_token: 'Token',
  tool_smart_website_color_scheme_col_value: 'Valor',
  tool_smart_website_color_scheme_copy_css: 'Copiar CSS',
  tool_smart_website_color_scheme_copy_done: 'Copiado',
  tool_smart_website_color_scheme_copy_json: 'Copiar JSON',
  tool_smart_website_color_scheme_cp_brand: 'Marca',
  tool_smart_website_color_scheme_cp_btn: 'Botón outline',
  tool_smart_website_color_scheme_cp_card_body:
    'El cuerpo de la tarjeta usa texto atenuado. Los enlaces siguen neutros — no el color de acción de marca.',
  tool_smart_website_color_scheme_cp_card_title: 'Título de tarjeta',
  tool_smart_website_color_scheme_cp_err: 'El error usa danger, no la marca.',
  tool_smart_website_color_scheme_cp_link: 'Enlace relacionado',
  tool_smart_website_color_scheme_cp_nav: 'Ítem de nav',
  tool_smart_website_color_scheme_cp_side1: 'Barra lateral',
  tool_smart_website_color_scheme_cp_side2: 'Activo',
  tool_smart_website_color_scheme_desc:
    'Esquema web: neutros + tokens CSS semánticos, enlaces neutros y estados fijos — local.',
  tool_smart_website_color_scheme_description:
    'Genera un esquema de colores web en el navegador. Elige un HEX de marca (verde azulado de ejemplo #0F6E8C), obtén neutros compartidos, action/hover/soft/focus, enlaces neutros, colores de estado fijos, vista previa del chrome y autochequeos AA; luego copia CSS :root o JSON. Basado en reglas — no es IA en la nube; no se sube nada.',
  tool_smart_website_color_scheme_empty: 'Genera un esquema primero y luego copia CSS o JSON.',
  tool_smart_website_color_scheme_example:
    'Carga el ejemplo (id teal, #0F6E8C). La vista muestra superficie blanca, resalte suave teal en el ítem activo (sin barra izquierda), enlaces de cuerpo neutros y una línea danger en rojo. La semántica mapea --link al color de texto (no a --action). Copiar CSS da neutros en :root más overrides html[data-theme="teal"].',
  tool_smart_website_color_scheme_example_title: 'Ejemplo',
  tool_smart_website_color_scheme_faq_a1:
    'Aquí «inteligente» significa reglas deterministas: neutros fijos, la marca deriva action/hover/soft/focus, los enlaces siguen neutros y los estados no siguen la marca. Sin llamada a un modelo ni subida — el cálculo corre en esta pestaña.',
  tool_smart_website_color_scheme_faq_a2:
    'Los enlaces por defecto usan colores de texto para que la página no se convierta en un muro de hipervínculos de marca. El color de marca queda para acciones, selección, anillos de foco y rellenos soft ligeros.',
  tool_smart_website_color_scheme_faq_a3:
    'Danger, success, warning e info se mantienen fijos entre temas. Una marca ámbar no debe convertirse en el color de error, o toda la UI parece una alerta.',
  tool_smart_website_color_scheme_faq_a4:
    'Usa Generar escala de color de marca cuando necesites una rampa 50–950 o listados HEX/HSL/OKLCH. Esta página entrega un esquema semántico claro completo (bg/surface/link/action/status) listo para pegar.',
  tool_smart_website_color_scheme_faq_a5:
    'Los autochequeos cubren unos pares clave del tema activo. Para pares arbitrarios o AAA, abre el comprobador de contraste WCAG y pega el HEX de cualquier token.',
  tool_smart_website_color_scheme_faq_q1: '¿«Inteligente» significa generación con IA?',
  tool_smart_website_color_scheme_faq_q2: '¿Por qué los enlaces no usan el color de marca?',
  tool_smart_website_color_scheme_faq_q3: '¿Por qué los colores de estado no cambian con el tema?',
  tool_smart_website_color_scheme_faq_q4: '¿Cuándo conviene Generar escala de color de marca?',
  tool_smart_website_color_scheme_faq_q5: '¿Hasta dónde llega el autochequeo de contraste?',
  tool_smart_website_color_scheme_generate: 'Generar',
  tool_smart_website_color_scheme_how_body:
    'Añade hasta cuatro temas de marca (id + HEX). Se conserva una escalera neutra compartida, se derivan tokens de acción por marca, se mapean roles semánticos (enlaces neutros y estados fijos), se pinta un chrome claro, se corren autochequeos AA y puedes copiar variables CSS o JSON — todo local.',
  tool_smart_website_color_scheme_how_title: 'Cómo funciona',
  tool_smart_website_color_scheme_max_themes: 'Puedes añadir hasta 4 temas que comparten los mismos neutros.',
  tool_smart_website_color_scheme_preview_label: 'Vista previa UI clara',
  tool_smart_website_color_scheme_primitives_label: 'Primitivos (tema activo + neutros compartidos)',
  tool_smart_website_color_scheme_remove_theme: 'Quitar',
  tool_smart_website_color_scheme_role_action: 'Acción / énfasis de marca',
  tool_smart_website_color_scheme_role_bg: 'Fondo de página / sección',
  tool_smart_website_color_scheme_role_border: 'Bordes y divisores',
  tool_smart_website_color_scheme_role_focus: 'Anillo de foco',
  tool_smart_website_color_scheme_role_link: 'Enlaces por defecto (neutros)',
  tool_smart_website_color_scheme_role_muted: 'Texto secundario',
  tool_smart_website_color_scheme_role_on_action: 'Texto sobre acción sólida',
  tool_smart_website_color_scheme_role_status: 'Estado (desacoplado de la marca)',
  tool_smart_website_color_scheme_role_surface: 'Superficie elevada / tarjetas',
  tool_smart_website_color_scheme_role_text: 'Cuerpo / texto fuerte',
  tool_smart_website_color_scheme_rules_body:
    'Capas de tokens, enlace ≠ acción, estados independientes, pistas de contraste y privacidad.',
  tool_smart_website_color_scheme_rules_item_1:
    'Los primitivos guardan neutros crudos y derivados de marca. La semántica nombra el propósito (bg, surface, link, action…). Los componentes solo deberían referenciar semántica.',
  tool_smart_website_color_scheme_rules_item_2:
    'Marca → --action; hover oscurece ~22%; soft ≈ 10% alpha; focus-ring ≈ 40% alpha; --bg es un neutro ligeramente teñido.',
  tool_smart_website_color_scheme_rules_item_3:
    'Los enlaces mapean a text / text-strong (neutro). No enlaces el --link por defecto a --action.',
  tool_smart_website_color_scheme_rules_item_4:
    'Danger / success / warning / info se mantienen fijos entre temas para que la marca nunca reemplace la semántica de error.',
  tool_smart_website_color_scheme_rules_item_5:
    'Privacidad: generación, vista previa y copia al portapapeles ocurren en esta pestaña. No se suben colores de marca.',
  tool_smart_website_color_scheme_rules_title: 'Reglas que debes esperar',
  tool_smart_website_color_scheme_sample: 'Cargar ejemplo',
  tool_smart_website_color_scheme_semantics_label: 'Semántica (tema activo)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'id del tema',
  tool_smart_website_color_scheme_themes_hint:
    'Neutros y estados compartidos; cada tema solo sobrescribe tokens derivados de marca. Máx. 4 temas.',
  tool_smart_website_color_scheme_themes_label: 'Temas de marca',
  tool_smart_website_color_scheme_title: 'Esquema de colores web — tokens CSS semánticos',
  tool_smart_website_color_scheme_usecase_1:
    'Chrome de herramientas o SaaS: un shell claro legible con acentos de marca en selección y foco, no en cada enlace.',
  tool_smart_website_color_scheme_usecase_2:
    'Rebrand de landing: cambia marcas con html[data-theme] y conserva el esqueleto neutro y los estados.',
  tool_smart_website_color_scheme_usecase_3:
    'Entrega diseño→dev: pega variables CSS :root en lugar de listas HEX de capturas.',
  tool_smart_website_color_scheme_usecases_title: 'Dónde encaja bien',
  tool_smart_website_color_scheme_warn_contrast:
    'Aviso: el texto sobre el color de acción está por debajo de 4,5:1 — oscurece la marca o ajusta --on-action antes de publicar botones sólidos.',
};
export default es;
