/**
 * i18n tool shard (svg-optimizer / de).
 * H1: SVG-Optimierer.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Texte. */
const de: SiteLangDict = {
	tool_svg_optimizer_article:
		'SVG einfügen oder ablegen, Bereinigungsoptionen wählen und Byte-Ersparnis mit Vorschau sehen. Inspiriert von SVGOMG — läuft im Browser; Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_svg_optimizer_choose_file: 'SVG-Datei wählen',
	tool_svg_optimizer_clear: 'Leeren',
	tool_svg_optimizer_copy: 'Kopieren',
	tool_svg_optimizer_desc:
		'SVG im Browser optimieren mit Byte-Vergleich und Vorschau; ohne Server-Upload.',
	tool_svg_optimizer_description:
		'SVG-Optimierer: SVG einfügen oder ablegen, Bereinigungsoptionen wählen und Original- vs. optimierte Bytes mit Vorschau vergleichen. Beispiel: Beim ersten Laden erscheint ein Beispiel-Icon; nach Entfernen von Kommentaren und Editor-Metadaten sinkt die Größe. Ergebnis kopieren oder herunterladen. Dateien bleiben auf Ihrem Gerät und werden nicht hochgeladen. Leichter Browser-Durchlauf, kein vollständiges SVGO.',
	tool_svg_optimizer_download: 'Herunterladen',
	tool_svg_optimizer_drop_hint: 'Oder .svg hier ablegen. Optimierung bleibt in diesem Tab.',
	tool_svg_optimizer_empty: 'Zuerst SVG einfügen oder Datei wählen.',
	tool_svg_optimizer_err_not_svg: 'Sieht nicht nach SVG aus. Markup mit <svg>-Wurzel einfügen.',
	tool_svg_optimizer_example:
		'Beispiel laden fügt ein Icon mit XML-Kommentaren, Inkscape-Rauschen und Extra-Leerzeichen ein. Mit allen Optionen sinken die Bytes; die Vorschau bleibt gleich.',
	tool_svg_optimizer_example_title: 'Beispiel',
	tool_svg_optimizer_faq_a1:
		'Nein. SVG wird in diesem Tab gelesen und optimiert. Nichts wird an unsere Server gesendet.',
	tool_svg_optimizer_faq_a2:
		'Leichte Text-Pipeline (Kommentare, Metadaten, Leerzeichen, Rundung, leere Gruppen). Vollständiges SVGO ist tiefer — nutzen Sie es bei Bedarf.',
	tool_svg_optimizer_faq_a3:
		'Kommentare entfernen: <!-- … -->. Editor-Metadaten: Inkscape/Sketch-xmlns und <metadata>. Leerzeichen einklappen. Zahlen runden: zwei Dezimalstellen in Pfaden. Leere Gruppen: leere <g></g> entfernen.',
	tool_svg_optimizer_faq_a4:
		'Die Vorschau zeigt optimiertes SVG nur als Bild in diesem Tab; kein Markup wird in das Seiten-DOM injiziert.',
	tool_svg_optimizer_faq_q1: 'Wird mein SVG hochgeladen?',
	tool_svg_optimizer_faq_q2: 'Unterschied zu SVGO oder SVGOMG?',
	tool_svg_optimizer_faq_q3: 'Was machen die Optionen?',
	tool_svg_optimizer_faq_q4: 'Ist die Vorschau sicher?',
	tool_svg_optimizer_how_body:
		'SVG einfügen oder ablegen, Optionen anpassen, Bytes und Vorschau prüfen, dann kopieren oder herunterladen. Alles lokal im Browser.',
	tool_svg_optimizer_how_item_1: 'SVG-Markup einfügen oder .svg-Datei ablegen.',
	tool_svg_optimizer_how_item_2: 'Optionen: Kommentare, Editor-Metadaten, Leerzeichen, Dezimalen, leere Gruppen.',
	tool_svg_optimizer_how_item_3: 'Original-Bytes, optimierte Bytes und Ersparnis in Prozent lesen.',
	tool_svg_optimizer_how_item_4: 'Vorschau prüfen und optimized.svg kopieren oder speichern.',
	tool_svg_optimizer_how_title: 'So funktioniert’s',
	tool_svg_optimizer_input_label: 'SVG-Eingabe',
	tool_svg_optimizer_input_ph: '<svg>…</svg> hier einfügen…',
	tool_svg_optimizer_load_sample: 'Beispiel laden',
	tool_svg_optimizer_opt_collapse_whitespace: 'Leerzeichen zwischen Tags einklappen',
	tool_svg_optimizer_opt_round_numbers: 'Pfadzahlen auf 2 Dezimalstellen runden',
	tool_svg_optimizer_opt_strip_comments: 'XML/HTML-Kommentare entfernen',
	tool_svg_optimizer_opt_strip_empty: 'Leere <g> und Attribut-Leerzeichen entfernen',
	tool_svg_optimizer_opt_strip_metadata: 'Editor-Metadaten entfernen (Inkscape, Sketch…)',
	tool_svg_optimizer_optimize: 'Optimieren',
	tool_svg_optimizer_options_label: 'Optionen',
	tool_svg_optimizer_output_label: 'Optimiertes SVG',
	tool_svg_optimizer_preview_label: 'Vorschau',
	tool_svg_optimizer_rules_body:
		'Browser-SVG-Bereinigung tauscht Vollständigkeit gegen sofortiges Feedback. Vor dem Release prüfen.',
	tool_svg_optimizer_rules_item_1:
		'Kommentare und Editor-xmlns sind für Prod-Icons meist sicher entfernbar.',
	tool_svg_optimizer_rules_item_2:
		'Koordinaten runden verkleinert, kann Striche minimal verschieben — Vorschau prüfen.',
	tool_svg_optimizer_rules_item_3:
		'Leere Gruppen helfen bei Sketch/Figma-Exporten; Gruppen mit id/transform bleiben.',
	tool_svg_optimizer_rules_item_4:
		'Raster auch komprimieren? Bild-Optimierer für PNG/WebP nutzen — hier bleibt es Vektor.',
	tool_svg_optimizer_rules_title: 'Was Sie erwarten sollten',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'Optimiert',
	tool_svg_optimizer_size_original: 'Original',
	tool_svg_optimizer_size_saved: 'Ersparnis',
	tool_svg_optimizer_stats_tpl: 'Original {orig} B → Optimiert {opt} B ({pct}% gespart)',
	tool_svg_optimizer_status_copied: 'In Zwischenablage kopiert.',
	tool_svg_optimizer_status_done: 'Optimiert — Bytes und Vorschau prüfen.',
	tool_svg_optimizer_title: 'SVG-Optimierer',
	tool_svg_optimizer_usecase_1: 'Icon aus Sketch verkleinern, bevor es ins Repo kommt.',
	tool_svg_optimizer_usecase_2: 'Inline-SVG auf einer Landing bereinigen ohne SVGO-Installation.',
	tool_svg_optimizer_usecase_3: 'Kommentare aus Design-Handoff entfernen bei gleicher Vorschau.',
	tool_svg_optimizer_usecases_title: 'Gute Einsätze',
};

export default de;
