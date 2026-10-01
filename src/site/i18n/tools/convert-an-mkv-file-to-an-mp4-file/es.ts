import type { SiteLangDict } from '../../../types';

/**
 * Español: convertir MKV a MP4 en el navegador (AAC estéreo, D2).
 * No es remux puro; sin YouTube; ~unos 5 GiB con OPFS (unos 1 GiB sin OPFS).
 */
const es: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'Convertir un archivo MKV a MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'Convierte un MKV local a MP4 en el navegador con audio AAC estéreo. El vídeo se copia cuando puede. ~unos 5 GiB con OPFS (unos 1 GiB sin OPFS). Sin subir.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'Convierte un MKV local a MP4 en tu dispositivo, con AAC estéreo para que reproductores y herramientas de extracción usen la pista. Pasos: elige MKV → Convertir → Descargar. Ejemplo: Cargar ejemplo convierte un clip Matroska corto sintético. Los paquetes de vídeo se copian si el navegador mantiene el códec; el audio siempre se recodifica a AAC (E-AC-3/DDP se decodifica con un ayudante WASM en la página). Límite inicial ~unos 5 GiB con OPFS (unos 1 GiB sin OPFS) escritorio. Solo local, no descarga de enlaces YouTube, sin subir. ¿Solo voz después? Extraer audio de un archivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'Editores y móviles suelen pedir MP4; las capturas llegan en MKV. Esta página remuxea cuando es seguro y siempre escribe AAC estéreo, no un remux silencioso con E-AC-3. No obtiene URLs remotas, aún no hay ZIP por lotes, y no sustituye las páginas de extracción — tras el MP4 con AAC, usa las herramientas relacionadas.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'Elegir archivo MKV',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'Suelta un .mkv local (~unos 5 GiB con OPFS (unos 1 GiB sin OPFS). El audio pasa a AAC estéreo. No es YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'Convertir',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'Descargar',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'Cargar ejemplo',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'Borrar',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'Detener',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'Ajustes de audio (opcional)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'Canales de audio',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'Estéreo (predeterminado)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'Mono',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'Calidad AAC',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'Menor tamaño',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'Equilibrado',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'Mayor calidad (predeterminado)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'Los valores por defecto valen para la mayoría: AAC estéreo en alta calidad. Cambiar ajustes borra una descarga terminada.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'Progreso de conversión',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'Cargar motor',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'Leer',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'Decodificar',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'Codificar',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'Escribir',
  tool_convert_an_mkv_file_to_an_mp4_file_done:
    'Listo. Descarga el MP4 o abre la herramienta de extracción MP4 solo para audio.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed:
    'La conversión falló. Prueba un MKV más pequeño u otra pista de audio.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '{s}s transcurridos',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'Vista previa del MP4 convertido',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'Entrada {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'demo-corto-mkv-a-mp4',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'Elige un MKV o carga el ejemplo primero.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'Aún no hay archivo. Suelta un .mkv local (~unos 5 GiB con OPFS (unos 1 GiB sin OPFS). No es YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'Detenido. No se guarda MP4 parcial.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'Suelta exactamente un archivo MKV.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'Archivo no admitido. En esta página solo .mkv.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'Este MKV supera ~unos 5 GiB con OPFS (unos 1 GiB sin OPFS). Usa ffmpeg en el escritorio para archivos mayores.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'No se pudo abrir como Matroska o no quedó pista de vídeo/audio usable.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'Un códec de audio o vídeo no se pudo decodificar o codificar aquí. Prueba otra pista o convierte en el PC con ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'No se pudo escribir el MP4. Vuelve a Convertir.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'No se pudo cargar el MKV de ejemplo. Usa tu propio archivo.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'No se pudo cargar el motor de conversión en este navegador.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'La conversión se detuvo.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'Cómo convertir un archivo MKV a MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'Suelta un MKV local, pulsa Convertir y Descarga el MP4 — el audio pasa a AAC estéreo para extracciones posteriores.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1:
    'Elige un .mkv local (~unos 5 GiB con OPFS (unos 1 GiB sin OPFS).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2:
    'Opcional: abre Ajustes de audio para mono o menor calidad AAC.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    'Clic en Convertir y espera Cargar motor → Leer → Decodificar → Codificar → Escribir (o Detener).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'Previsualiza si se ofrece, luego Descargar. Solo voz: Extraer audio de un archivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title:
    'Por qué usar Convertir un archivo MKV a MP4 aquí',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    'AAC estéreo a propósito — no un remux que deja E-AC-3 sin reproducir en muchos navegadores.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    'El vídeo se copia cuando puede; clips largos terminan antes que un reencode completo.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    'El procesamiento queda en tu dispositivo; la primera carga del motor es solo desde este sitio.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    'Siguiente paso claro: página de extracción MP4 relacionada tras Descargar.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV a MP4 con AAC — límites claros',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'Un MKV local por ejecución. El audio se recodifica a AAC. Límites y códecs sin adornos — rips de varios GB pueden necesitar ffmpeg de escritorio.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    '~unos 5 GiB con OPFS (unos 1 GiB sin OPFS). Por encima → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'Sin URL ni descarga de YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3/DDP se decodifica con el ayudante AC-3 incluido, luego AAC estéreo. Códecs de vídeo raros pueden dar err_codec.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'El MKV original no se sobrescribe. Para varios archivos use Convertir archivos MKV a MP4 por lotes (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'Probar una conversión real',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    'Cargar ejemplo trae un MKV corto del sitio y ejecuta Convertir. Para pruebas reales, usa tu .mkv bajo el límite.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'Cuándo ayuda',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1:
    'Un MKV de captura debe abrirse en un editor que solo acepta MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'Un MKV DDP/Atmos necesita AAC antes de Extraer audio de un archivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'Quieres un MP4 para compartir sin subir el Matroska a un convertidor en la nube.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: '¿Puedo pegar una URL de YouTube?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'No. Solo .mkv local.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: '¿Es solo remux (mismo códec de audio)?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'No. El audio siempre se recodifica a AAC para demux en el navegador y muchos reproductores. El vídeo puede copiarse sin reencode.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'Mi MKV tiene Dolby Atmos / DDP / E-AC-3 — ¿funciona?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'A menudo sí bajo el límite de tamaño: carga decodificador AC-3/E-AC-3, mezcla a AAC estéreo y escribe MP4. Rips enormes pueden fallar o ir lentos — usa ffmpeg de escritorio.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: '¿Se sube mi archivo?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4:
    'No. La conversión corre en tu navegador. Los scripts del motor cargan una vez desde este sitio.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'Solo necesito la pista de audio — ¿uso esta página?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'Si el MKV ya encaja en el fallback de extracción y tiene códec amigable al navegador: Extraer audio de un archivo MKV. Si es DDP o demasiado grande para extraer, convierte aquí y luego Extraer audio de un archivo MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: '¿WebM o MOV en lugar de MKV?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6:
    'Esta página solo acepta .mkv. Otros contenedores tendrán sus propias páginas más adelante.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: '¿Puedo convertir muchos MKV a la vez?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7:
    'Aún no hay lote ZIP en esta página. Convierte un archivo cada vez por ahora.',
};
export default es;
