/**
 * i18n tool shard (brand-color-token-pack / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'Un color base de marca se convierte en un pack completo: HEX, RGB, HSL, OKLCH, escala 50–950, parejas de texto negro/blanco por paso y variables CSS o JSON copiables — todo en el navegador.',
  tool_brand_color_token_pack_bad_hex: 'Introduce un HEX válido de 3 o 6 dígitos (p. ej. #2563EB).',
  tool_brand_color_token_pack_base_label: 'Color base',
  tool_brand_color_token_pack_clear: 'Limpiar',
  tool_brand_color_token_pack_contrast_col: 'Texto',
  tool_brand_color_token_pack_copy_css: 'Copiar CSS',
  tool_brand_color_token_pack_copy_done: 'Copiado',
  tool_brand_color_token_pack_copy_json: 'Copiar JSON',
  tool_brand_color_token_pack_desc:
    'Un color base → HEX/RGB/HSL/OKLCH, escala 50–950, parejas de contraste, variables CSS — local.',
  tool_brand_color_token_pack_description:
    'Genera un pack de tokens de color de marca desde un solo base en el navegador. Pasos: elige el base (HEX o selector), consulta HEX/RGB/HSL/OKLCH, crea la escala 50–950 con parejas negro/blanco en cada paso y copia variables CSS o JSON. Al abrir carga el azul de ejemplo #2563eb — nada se sube.',
  tool_brand_color_token_pack_empty: 'Genera los tokens primero y luego copia CSS o JSON.',
  tool_brand_color_token_pack_example:
    'Carga la muestra (#2563EB). El bloque de espacios muestra HEX, RGB, HSL y OKLCH del base; la cuadrícula lista 50–950 con texto negro o blanco recomendado y ratio de contraste. Copiar CSS devuelve :root { --color-50: …; … --color-950: …; } listo para tu hoja de estilos.',
  tool_brand_color_token_pack_example_title: 'Ejemplo',
  tool_brand_color_token_pack_faq_a1:
    'No. El cálculo y la exportación se ejecutan en esta pestaña; tus colores no se envían a ningún servidor.',
  tool_brand_color_token_pack_faq_a2:
    'El paso 500 coincide con tu color base. Los pasos más claros (50–400) se mezclan hacia blanco; los más oscuros (600–950) hacia negro. La mezcla es lineal en sRGB para mantener el matiz estable.',
  tool_brand_color_token_pack_faq_a3:
    'Cada muestra compara texto negro y blanco sobre ese fondo y elige el que da mayor contraste WCAG. Las etiquetas muestran el ratio y si el texto normal probablemente cumple AA (4,5:1) o AA grande (3:1).',
  tool_brand_color_token_pack_faq_a4:
    'Copiar CSS genera propiedades personalizadas :root (--color-50 a --color-950). Copiar JSON entrega la misma escala más los espacios del base en datos estructurados para tokens de diseño.',
  tool_brand_color_token_pack_faq_a5:
    'Son sugerencias rápidas negro/blanco por paso. Para pares personalizados o niveles WCAG exactos, abre el comprobador de contraste WCAG y pega el HEX de cualquier muestra.',
  tool_brand_color_token_pack_faq_q1: '¿Mi color sale del navegador?',
  tool_brand_color_token_pack_faq_q2: '¿Cómo se construye la escala 50–950?',
  tool_brand_color_token_pack_faq_q3: '¿Qué significan las columnas de contraste?',
  tool_brand_color_token_pack_faq_q4: '¿Qué incluyen Copiar CSS y Copiar JSON?',
  tool_brand_color_token_pack_faq_q5: '¿Cuándo usar el comprobador de contraste?',
  tool_brand_color_token_pack_generate: 'Generar',
  tool_brand_color_token_pack_how_body:
    'Introduce o elige un color base de marca. La página muestra HEX, RGB, HSL y OKLCH, genera una escala de 11 pasos (50–950) con vista previa de UI y recomienda texto negro o blanco con ratio en cada muestra. Copia variables CSS o JSON cuando la rampa encaje — todo local.',
  tool_brand_color_token_pack_how_title: 'Cómo funciona',
  tool_brand_color_token_pack_preview_label: 'Vista previa UI',
  tool_brand_color_token_pack_rules_body:
    'Qué esperar de la escala, los espacios de color, las pistas de contraste y la privacidad.',
  tool_brand_color_token_pack_rules_item_1:
    'El paso 500 es tu base. Por debajo se aclara mezclando hacia blanco; por encima se oscurece hacia negro (mezcla lineal en sRGB).',
  tool_brand_color_token_pack_rules_item_2:
    'El bloque base lista HEX, RGB, HSL y OKLCH del mismo color. OKLCH usa conversión sRGB → lineal → OKLab para alinearlo con la sintaxis CSS moderna.',
  tool_brand_color_token_pack_rules_item_3:
    'Cada muestra recomienda texto negro o blanco — el que ofrezca mayor contraste en ese fondo. Los ratios siguen la luminancia relativa WCAG; las etiquetas AA son orientativas.',
  tool_brand_color_token_pack_rules_item_4:
    'Privacidad: generación, vista previa y copia al portapapeles ocurren en local en esta pestaña.',
  tool_brand_color_token_pack_rules_title: 'Reglas que debes conocer',
  tool_brand_color_token_pack_sample: 'Muestra',
  tool_brand_color_token_pack_scale_label: 'Escala de color (50–950)',
  tool_brand_color_token_pack_spaces_label: 'Espacios de color (base)',
  tool_brand_color_token_pack_text_on: 'Texto sobre base',
  tool_brand_color_token_pack_title: 'Pack de tokens de color de marca — escala HEX HSL OKLCH',
  tool_brand_color_token_pack_ui_body: 'Cuerpo de vista previa sobre tu color base con texto sugerido.',
  tool_brand_color_token_pack_ui_btn: 'Acción principal',
  tool_brand_color_token_pack_ui_title: 'Título de vista previa',
  tool_brand_color_token_pack_usecase_1:
    'Sistemas de diseño: parte de un HEX de marca y entrega una rampa 50–950 coherente más variables CSS.',
  tool_brand_color_token_pack_usecase_2:
    'Modo oscuro: revisa tintes claros (50–300) para superficies y tonos profundos (700–950) para texto sobre marca.',
  tool_brand_color_token_pack_usecase_3:
    'Entrega a desarrollo: copia tokens JSON o propiedades CSS en lugar de reescribir HEX desde una captura.',
  tool_brand_color_token_pack_usecases_title: 'Cuándo encaja',
};
export default es;
