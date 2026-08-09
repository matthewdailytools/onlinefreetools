/**
 * i18n tool shard (how-to-calculate-aspect-ratio / de).
 * German rewrite for Suche «Seitenverhältnis / Auflösung skalieren».
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_aspect_ratio_title: 'Seitenverhältnis-Rechner — Verhältnis berechnen und skalieren',
	tool_aspect_ratio_description:
		'Ermitteln Sie das vereinfachte Seitenverhältnis aus Breite × Höhe und skalieren Sie auf eine Zielbreite (oder -höhe). Die Vorgaben 16:9, 4:3 und 1:1 bleiben Optionen auf einer Seite. Beispiel: 1920×1080 → 16:9; Breite 1280 → Höhe 720. Berechnung im Browser; Zahlen bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_aspect_ratio_article:
		'Kürzt ein Größenpaar mit dem ggT und behält das Verhältnis, wenn Sie eine neue Exportgröße wählen.',
	tool_aspect_ratio_calculate: 'Berechnen',
	tool_aspect_ratio_sample: 'Beispiel',
	tool_aspect_ratio_clear: 'Löschen',
	tool_aspect_ratio_preset_label: 'Voreinstellung (optional)',
	tool_aspect_ratio_preset_custom: 'Benutzerdefiniert',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'Breite',
	tool_aspect_ratio_h_label: 'Höhe',
	tool_aspect_ratio_w_ph: 'z. B. 1920',
	tool_aspect_ratio_h_ph: 'z. B. 1080',
	tool_aspect_ratio_scale_mode_label: 'Skalieren nach',
	tool_aspect_ratio_scale_by_w: 'Zielbreite',
	tool_aspect_ratio_scale_by_h: 'Zielhöhe',
	tool_aspect_ratio_target_w_label: 'Zielbreite',
	tool_aspect_ratio_target_h_label: 'Zielhöhe',
	tool_aspect_ratio_target_w_ph: 'z. B. 1280',
	tool_aspect_ratio_target_h_ph: 'z. B. 720',
	tool_aspect_ratio_result_ratio: 'Seitenverhältnis',
	tool_aspect_ratio_result_scaled: 'Skalierte Größe',
	tool_aspect_ratio_err_input: 'Geben Sie positive Breite und Höhe sowie eine positive Zielgröße für die skalierte Seite ein.',
	tool_aspect_ratio_how_title: 'So funktioniert’s',
	tool_aspect_ratio_how_body:
		'Breite und Höhe eingeben oder 16:9 / 4:3 / 1:1 wählen. Das Tool kürzt mit dem ggT und berechnet die andere Seite bei gesetztem Ziel. Alles im Browser-Tab; kein Server-Upload.',
	tool_aspect_ratio_formula_title: 'Formel und Annahmen',
	tool_aspect_ratio_formula_body: 'Vereinfachung und Skalierung nutzen den ggT des Eingabepaars:',
	tool_aspect_ratio_formula_item_1: 'g = ggT(runden(W), runden(H)). Verhältnis = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'Nach Breite: H′ = ZielW × H ÷ W. Nach Höhe: W′ = ZielH × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'Voreinstellungen füllen nur Beispielgrößen; es sind keine eigenen Seiten.',
	tool_aspect_ratio_example_title: 'Beispiel',
	tool_aspect_ratio_example:
		'Beispiel: 1920×1080. ggT=120 → 16:9. Bei Breite 1280 ist Höhe = 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'Wann sinnvoll',
	tool_aspect_ratio_usecase_1: 'Exportgröße für 16:9-Video wählen, ohne das Bild zu verzerren.',
	tool_aspect_ratio_usecase_2: 'Design-Canvas an Handy- oder Monitorverhältnis anpassen.',
	tool_aspect_ratio_usecase_3: 'Bekannte Auflösung in ein kurzes Verhältnis-Label für Specs umwandeln.',
	tool_aspect_ratio_faq_q1: 'Wie wird das Verhältnis vereinfacht?',
	tool_aspect_ratio_faq_a1: 'Breite und Höhe werden nach dem Runden durch ihren ggT geteilt; 1920×1080 wird zu 16:9.',
	tool_aspect_ratio_faq_q2: 'Kann ich nach Höhe skalieren?',
	tool_aspect_ratio_faq_a2: 'Ja. Wechseln Sie zur Zielhöhe; die passende Breite bleibt im gleichen Verhältnis.',
	tool_aspect_ratio_faq_q3: 'Warum ist 16:9 nur eine Option?',
	tool_aspect_ratio_faq_a3: 'Es ist ein üblicher Startpunkt; eine Seite mit Optionen vermeidet fast identische Rechner.',
	tool_aspect_ratio_faq_q4: 'Werden meine Zahlen hochgeladen?',
	tool_aspect_ratio_faq_a4: 'Nein. Die Berechnung läuft im Browser auf Ihrem Gerät, ohne Server-Upload.',
	tool_aspect_ratio_references: 'NIST SP 811 zu Längen- und Einheitenumrechnungen.',
	tool_aspect_ratio_ref_nist_label: 'NIST — Special Publication 811 (Einheitenumrechnung)',
};

export default de;
