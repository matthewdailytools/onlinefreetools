import type { SiteLangDict } from '../../../types';

/**
 * Español (es) para mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for search habits—not a verbatim machine translation of en.
 * Stereo L/R beat WAV; entretenimiento/ambiente only; no claims of therapy or cure.
 */
const es: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'Mezclar latidos binaurales para concentrarse',
  tool_mix_binaural_beats_for_focus_desc:
    'Mezcla latidos binaurales para concentrarte con una portadora y una diferencia de ritmo, luego descarga un WAV estéreo. Solo en el dispositivo—ambiente de entretenimiento, no tratamiento.',
  tool_mix_binaural_beats_for_focus_description:
    'Mezcla latidos binaurales para concentrarte en el navegador con una portadora y una diferencia de ritmo, luego descarga un WAV estéreo de 16 bits. Pasos: define Hz de portadora y ritmo o toca un preajuste, elige duración, Mezclar, escucha con auriculares, descarga. Ejemplo: portadora 200 Hz con 10 Hz de diferencia durante 10 segundos. Solo entretenimiento y ambiente de concentración—no es tratamiento médico. Nunca se sube.',
  tool_mix_binaural_beats_for_focus_article:
    'Quien busca latidos binaurales para una sesión de concentración suele querer un archivo estéreo sencillo que pueda guardar. Aquí defines la frecuencia de portadora para el oído izquierdo y una un poco más alta a la derecha para que la diferencia sea el ritmo, eliges duración, sintetizas PCM estéreo a 44,1 kHz en el navegador y descargas un WAV de 16 bits. Usa auriculares: la diferencia izquierda/derecha es el punto. Los preajustes solo cambian hercios; son atajos de ambiente, no protocolos médicos. Esta página no afirma eficacia terapéutica, no diagnostica ni trata ninguna condición, y es solo para entretenimiento o escucha ambiental personal. No es un generador de seno mono ni un creador de pitidos de interfaz. Todo corre en tu dispositivo.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'Portadora (oído izquierdo, Hz)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'Frecuencia del canal izquierdo, típico 80–500 Hz. Predeterminado 200 Hz.',
  tool_mix_binaural_beats_for_focus_beat_label: 'Diferencia de ritmo (Hz)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'El oído derecho reproduce portadora + este valor. Mantén la diferencia entre 1 y 40 Hz.',
  tool_mix_binaural_beats_for_focus_preset_label: 'Preajustes de ritmo ambiental',
  tool_mix_binaural_beats_for_focus_dur_label: 'Duración',
  tool_mix_binaural_beats_for_focus_convert: 'Mezclar',
  tool_mix_binaural_beats_for_focus_download: 'Descargar WAV',
  tool_mix_binaural_beats_for_focus_sample: 'Cargar muestra',
  tool_mix_binaural_beats_for_focus_clear: 'Borrar',
  tool_mix_binaural_beats_for_focus_advanced: 'Notas binaurales',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'La salida es un WAV estéreo de 16 bits a 44,1 kHz con fundidos cortos. Se requieren auriculares para la diferencia izquierda/derecha. Solo entretenimiento y ambiente de concentración—no es tratamiento médico ni terapia.',
  tool_mix_binaural_beats_for_focus_progress: 'Progreso de mezcla',
  tool_mix_binaural_beats_for_focus_synth: 'Síntesis',
  tool_mix_binaural_beats_for_focus_write: 'Escribir',
  tool_mix_binaural_beats_for_focus_done: 'Listo. Preescucha con auriculares y luego Descargar WAV.',
  tool_mix_binaural_beats_for_focus_failed: 'La mezcla falló. Revisa portadora, diferencia de ritmo y duración.',
  tool_mix_binaural_beats_for_focus_elapsed: '{s}s transcurridos',
  tool_mix_binaural_beats_for_focus_preview: 'Escuchar el WAV binaural',
  tool_mix_binaural_beats_for_focus_result:
    'I {left} Hz · D {right} Hz · ritmo {beat} Hz · {seconds}s · estéreo · {rate} Hz · WAV {output} KiB',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'Define portadora y ritmo en Hz o carga la muestra primero.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'Define portadora y diferencia de ritmo (o toca un preajuste), elige duración y Mezclar—o Cargar muestra (200 Hz / 10 Hz / 10 s). Usa auriculares. Solo ambiente de entretenimiento—no es tratamiento médico.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'Introduce una portadora entre 80 y 1000 Hz.',
  tool_mix_binaural_beats_for_focus_err_beat: 'Introduce una diferencia de ritmo entre 1 y 40 Hz (derecha = portadora + ritmo).',
  tool_mix_binaural_beats_for_focus_err_limit: 'La duración debe estar entre 0 y 120 segundos.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'No se pudo escribir el WAV estéreo. Intenta Mezclar de nuevo.',
  tool_mix_binaural_beats_for_focus_how_title: 'Cómo mezclar latidos binaurales para concentrarse',
  tool_mix_binaural_beats_for_focus_how_body:
    'Define portadora y ritmo en Hz, elige duración, Mezclar, escucha con auriculares y descarga un WAV estéreo—sin subir archivos y sin afirmaciones de terapia.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'Introduce Hz de portadora para el oído izquierdo (o deja 200 Hz) y la diferencia de ritmo para el derecho.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'Opcional: toca un preajuste ambiental (diferencia 4, 10 o 16 Hz)—solo cambian números, no protocolos médicos.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'Elige un chip de duración, pulsa Mezclar y espera Síntesis → Escribir.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'Preescucha con auriculares, revisa la línea de resultado y pulsa Descargar WAV.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'Por qué elegir nuestras herramientas Mezclar latidos binaurales para concentrarse',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'Ves Hz izquierdo, derecho, diferencia de ritmo, duración y KiB de salida antes de guardar.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'Un solo trabajo binaural estéreo con límites YMYL honestos—ambiente de entretenimiento, no tratamiento.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'La síntesis y la escritura corren en tu dispositivo; no se sube nada para procesar los tonos.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'Cambiar portadora, ritmo o duración borra la descarga antigua para no guardar un WAV obsoleto.',
  tool_mix_binaural_beats_for_focus_rules_title: 'Reglas binaurales y límites honestos',
  tool_mix_binaural_beats_for_focus_rules_body:
    'Cada pasada sintetiza izquierda = portadora y derecha = portadora + ritmo a 44,1 kHz con fundidos cortos. Exportación WAV estéreo 16 bits. Solo entretenimiento/ambiente—no es tratamiento médico—ni generador de seno mono ni pitido de UI.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'Portadora entre 80 y 1000 Hz. Diferencia de ritmo entre 1 y 40 Hz. Duración hasta 120 segundos. Salida estéreo.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'Se requieren auriculares para una verdadera diferencia izquierda/derecha. Los altavoces mezclan canales y ocultan el efecto de ritmo.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'Esta página no afirma eficacia médica, de sueño ni terapéutica. Las etiquetas son atajos ambientales—no protocolos de tratamiento.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'Los fundidos cortos reducen clics. La descarga es un archivo nuevo; no se sube nada. No es generador de seno mono ni sonido de notificación de UI.',
  tool_mix_binaural_beats_for_focus_example_title: 'Prueba portadora 200 Hz con ritmo de 10 Hz durante 10 segundos',
  tool_mix_binaural_beats_for_focus_example:
    'Cargar muestra fija portadora 200 Hz, diferencia 10 Hz y 10 segundos, y Mezclar se ejecuta solo. Deberías oír un par estéreo estable con auriculares. La reproducción no arranca sola—pulsa play si quieres escuchar.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'Cuándo ayuda',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'Quieres un WAV ambiental de concentración reutilizable: define portadora y ritmo, Mezclar, descarga y guarda el archivo para auriculares.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'Necesitas una demo rápida de ritmo estéreo sin instalar una app de tonos ni confiar en afirmaciones de terapia.',
  tool_mix_binaural_beats_for_focus_usecase_3: 'Quieres un ambiente estéreo corto de carrier y beat Hz solo con auriculares.',
  tool_mix_binaural_beats_for_focus_faq_q1: '¿Es esto tratamiento médico o terapia?',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'No. Esta página solo crea sonido de entretenimiento y ambiente personal de concentración. No diagnostica, trata ni cura ninguna condición y no afirma eficacia terapéutica.',
  tool_mix_binaural_beats_for_focus_faq_q2: '¿Necesito auriculares?',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'Sí para la diferencia izquierda/derecha prevista. En altavoces los canales se mezclan y el efecto de ritmo se reduce o se pierde.',
  tool_mix_binaural_beats_for_focus_faq_q3: '¿Es lo mismo que un generador de tono seno mono?',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'No. Una página de seno hace una frecuencia en mono. Esta página siempre escribe estéreo con dos frecuencias ligeramente distintas.',
  tool_mix_binaural_beats_for_focus_faq_q4: '¿Qué significan los preajustes ambientales?',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'Solo fijan la diferencia de ritmo en hercios (por ejemplo 4, 10 o 16 Hz). No son protocolos médicos y no prometen resultados de sueño o concentración.',
  tool_mix_binaural_beats_for_focus_faq_q5: '¿Se sube algo a un servidor?',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'No. La síntesis y la escritura corren en tu navegador en el dispositivo. La página necesita red al cargar por primera vez; no se garantiza uso sin conexión.',
  tool_mix_binaural_beats_for_focus_faq_q6: '¿Qué formato tiene la descarga?',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'Un WAV PCM estéreo de 16 bits a 44,1 kHz. Es un archivo nuevo que puedes guardar como clip ambiental reutilizable.',
};
export default es;
