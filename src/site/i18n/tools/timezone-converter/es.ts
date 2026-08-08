/**
 * i18n tool shard (timezone-converter / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_timezone_converter_article:
    'Elige un instante en una zona IANA de origen y mira la misma hora en UTC, Nueva York, Londres, Tokio y otras zonas seleccionadas. Pensado para equipos remotos, logs y reloj mundial — todo en el navegador con Intl, sin subidas.',
  tool_timezone_converter_clear: 'Limpiar',
  tool_timezone_converter_col_local: 'Fecha y hora local',
  tool_timezone_converter_col_offset: 'Desfase UTC',
  tool_timezone_converter_col_zone: 'Zona horaria',
  tool_timezone_converter_compare_zones: 'Comparar en estas zonas',
  tool_timezone_converter_convert: 'Convertir',
  tool_timezone_converter_desc:
    'Compara un mismo instante entre zonas IANA con notas de horario de verano — local en el navegador.',
  tool_timezone_converter_description:
    'Convierte una fecha y hora de una zona IANA a varias destino en tu navegador. Proceso: introduce la hora local, elige la zona origen, marca zonas de comparación y pulsa Convertir. Ejemplo: 15-jun-2026 14:30 Los Ángeles → filas para Nueva York, Londres, Tokio y UTC con desfase. Avisa huecos DST; no es paquete de reunión exportable.',
  tool_timezone_converter_error_dst_gap:
    'Esa hora local no existe en la zona origen (salto de horario de verano). Elige la hora vecina.',
  tool_timezone_converter_error_empty: 'Introduce fecha/hora y marca al menos una zona de comparación.',
  tool_timezone_converter_error_invalid: 'Formato inválido. Usa el selector o AAAA-MM-DDTHH:MM.',
  tool_timezone_converter_example:
    'Muestra fija al cargar: 15-jun-2026 14:30 America/Los_Angeles → UTC, Nueva York, Londres y Tokio con reloj local y desfase UTC según reglas IANA de esa fecha.',
  tool_timezone_converter_example_title: 'Ejemplo',
  tool_timezone_converter_faq_a1:
    'Usamos identificadores IANA como America/New_York o Asia/Tokyo — los mismos que navegadores y servidores. Abreviaturas como EST o JST son ambiguas; en calendarios usa siempre el nombre IANA completo.',
  tool_timezone_converter_faq_a2:
    'Al iniciar el horario de verano faltan horas locales — verás un error claro. En el retroceso otoñal la misma hora puede repetirse; Intl elige un desfase — revisa reuniones críticas esos días.',
  tool_timezone_converter_faq_a3:
    'Los conversores Unix pasan segundos epoch ↔ reloj, muchas veces en UTC. Aquí mantienes la zona origen con nombre y ves varias destino en tabla — ideal para «¿a qué hora es allí?».',
  tool_timezone_converter_faq_a4:
    'No. Es una tabla instantánea para consulta propia. No genera paquete compartible de reunión, lista de asistentes ni export ICS.',
  tool_timezone_converter_faq_a5:
    'Sí, todo local: solo Intl.DateTimeFormat integrado; tu fecha no sale del navegador.',
  tool_timezone_converter_faq_q1: '¿Por qué nombres IANA y no EST, PST o GMT?',
  tool_timezone_converter_faq_q2: '¿Qué pasa el día del cambio de horario de verano?',
  tool_timezone_converter_faq_q3: '¿En qué se diferencia de un conversor Unix timestamp?',
  tool_timezone_converter_faq_q4: '¿Puedo exportar un paquete de zonas para reuniones?',
  tool_timezone_converter_faq_q5: '¿Se envía mi fecha/hora a un servidor?',
  tool_timezone_converter_how_body:
    'Introduce hora local y zona IANA origen. Marca zonas de comparación y pulsa Convertir. La tabla muestra reloj local y desfase UTC del mismo instante, calculado con Intl en tu navegador.',
  tool_timezone_converter_how_title: 'Cómo funciona',
  tool_timezone_converter_local_tz: 'tu navegador',
  tool_timezone_converter_now: 'Ahora',
  tool_timezone_converter_rules_body:
    'Reglas IANA, comportamiento DST y límites frente a epoch o exportación de reuniones.',
  tool_timezone_converter_rules_item_1:
    'Las zonas siguen la base IANA (tzdata). Los desfases cambian con el DST — la tabla refleja la fecha que introduces, no un GMT fijo.',
  tool_timezone_converter_rules_item_2:
    'Huecos de primavera: hora inexistente → mensaje de error. Solapamientos de otoño: hora duplicada → Intl elige un desfase; verifica casos límite.',
  tool_timezone_converter_rules_item_3:
    'Siglas como CST o IST pueden ser distintas regiones. En APIs y cron usa nombres IANA completos.',
  tool_timezone_converter_rules_item_4:
    'Privacidad: sin subida. Solo comparación — no es planificador de reuniones ni geolocalización IP.',
  tool_timezone_converter_rules_title: 'Reglas a tener en cuenta',
  tool_timezone_converter_sample: 'Cargar ejemplo',
  tool_timezone_converter_source_time: 'Fecha y hora origen',
  tool_timezone_converter_source_tz: 'Zona horaria origen',
  tool_timezone_converter_title: 'Convertidor de zona horaria — comparar un momento en todo el mundo',
  tool_timezone_converter_usecase_1:
    'Equipos remotos: alguien dice «3:30 PM Pacífico» — mira Nueva York, Londres y Tokio en una sola tabla.',
  tool_timezone_converter_usecase_2:
    'Ops / logs: un registro en hora de Chicago — compara con UTC y tu zona sin calcular a mano.',
  tool_timezone_converter_usecase_3:
    'Viajes: ancla una llegada en Dubái y lee Sydney y Los Ángeles en paralelo para llamadas.',
  tool_timezone_converter_usecases_title: 'Cuándo encaja',
};
export default es;
