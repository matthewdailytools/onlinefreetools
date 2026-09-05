/**
 * i18n tool shard (meta-serp-preview / de).
 * German locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_serp_home_title: 'Google-Ergebnisvorschau',
	tool_serp_home_desc: 'Gekürzte Titel kosten dich Klicks in der Suche — prüfe die Kürzung vor der Veröffentlichung.',
	tool_serp_title: 'Google-Ergebnisvorschau — prüfe Abschneiden von Titel und Beschreibung',
	tool_serp_description:
		'Abgeschnittene Titles kosten Google-Klicks. Titel und Beschreibung einfügen, Desktop-/Mobil-Schnitt prüfen. Nur Browser. Beispiel: EN vs CJK.',
	tool_serp_preview: 'Vorschau',
	tool_serp_sample: 'Beispiel',
	tool_serp_clear: 'Leeren',
	tool_serp_copy: 'Kopieren',
	tool_serp_copied: 'Kopiert',
	tool_serp_title_label: 'Titel',
	tool_serp_title_ph: 'Der Seitentitel, der in den Suchergebnissen erscheint',
	tool_serp_desc_label: 'Meta-Beschreibung',
	tool_serp_desc_ph: 'Der Snippet-Text unter dem Ergebnis-Titel',
	tool_serp_url_label: 'URL (optional)',
	tool_serp_url_ph: 'z. B. https://example.com/page',
	tool_serp_compare_label: 'Mit einem zweiten Titel vergleichen',
	tool_serp_title_b_label: 'Titel B',
	tool_serp_title_b_ph: 'Alternativen Titel zum Vergleichen einfügen',
	tool_serp_desktop: 'Desktop-Vorschau',
	tool_serp_mobile: 'Mobile-Vorschau',
	tool_serp_char_count: '{n} Zeichen',
	tool_serp_px_width: '~{n}px',
	tool_serp_cut_warning: 'Gekürzt – die Zeile überschreitet den ~{limit}px-Viewport',
	tool_serp_fit: 'Passt in den Viewport',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'Gib einen Titel ein, um die Vorschau zu sehen.',
	tool_serp_how_title: 'So funktioniert es',
	tool_serp_how_body:
		'Gib Titel, Beschreibung und optionale URL ein oder füge sie ein. Das Tool schätzt, wie viele Zeichen und ungefähre Pixel jede Zeile belegt, anhand einer Schriftsatz-Näherung (breite CJK-Glyphen zählen mehr als schmale ASCII-Buchstaben), und zeichnet dann einen Google-artigen Snippet für Desktop und einen für Mobil. Zeilen, die breiter als der geschätzte Viewport sind, erhalten eine Kürzungsmarkierung.',
	tool_serp_rules_title: 'Was die Vorschau zeigt',
	tool_serp_rules_body:
		'Die Pixel-Limits sind Näherungswerte. Google misst die gerenderte Breite, nicht die Zeichenanzahl. Dichte Sprachen und breite Glyphen kürzen daher bei weniger Zeichen.',
	tool_serp_rules_item_1: 'Das Desktop-Titellimit wird auf ~600px geschätzt, das Mobile-Limit auf ~460px. Eine breitere Zeile wird mit Kürzungsmarkierung angezeigt.',
	tool_serp_rules_item_2: 'Beschreibungen werden auf etwa zwei Zeilen geschätzt (Desktop ~600px, Mobile ~460px pro Zeile).',
	tool_serp_rules_item_3: 'Die Glyphenbreite wird geschätzt: ASCII-Buchstaben und -Ziffern etwa ein halbes em, CJK-Zeichen nahe einem em, Emojis noch breiter.',
	tool_serp_rules_item_4: 'Das sind Schätzwerte zur Planung. Google kann Titel oder Beschreibungen umschreiben, und die tatsächliche Darstellung hängt von Schriftart und Viewport des Suchenden ab.',
	tool_serp_example_title: 'Beispiel',
	tool_serp_example:
		'Beispiel: Titel „Meta SERP Preview — How to Preview Google Title & Description Truncation Online“, Beschreibung über etwa zwei Zeilen, URL example.com/page → auf Desktop wird der Titel nahe dem 57. Zeichen mit „…“ gekürzt, auf Mobil früher; die Beschreibung bleibt innerhalb von zwei Zeilen.',
	tool_serp_usecases_title: 'Gut geeignet für',
	tool_serp_usecase_1: 'Vor der Veröffentlichung: füge den finalen Titel und die Beschreibung ein, um zu sehen, ob wichtige Begriffe die Pixel-Kürzung überstehen.',
	tool_serp_usecase_2: 'Vergleiche zwei Titelkandidaten nebeneinander und wähle den, der das Haupt-Keyword auf Mobil sichtbar hält.',
	tool_serp_usecase_3: 'CJK-Seiten: prüfe, wie viele chinesische Zeichen vor der Kürzung passen, weil breite Glyphen das Limit schneller erreichen.',
	tool_serp_faq_q1: 'Warum kürzt ein 30-Zeichen-CJK-Titel vor einem 60-Zeichen-englischen Titel?',
	tool_serp_faq_a1: 'Suchergebnisse kürzen nach gerenderter Pixelbreite, nicht nach Zeichenanzahl. CJK-Glyphen sind etwa ein em breit, ASCII-Buchstaben im Schnitt ein halbes em, daher füllen weniger Zeichen denselben Viewport.',
	tool_serp_faq_q2: 'Sind die Pixel-Limits exakt?',
	tool_serp_faq_a2: 'Nein. Desktop- und Mobile-Viewports variieren je nach Gerät und Schrift. Dieses Tool nutzt die üblichen ~600px (Desktop) und ~460px (Mobile) als Planungsschätzung, nicht als Garantie dafür, wie Google deine Seite rendert.',
	tool_serp_faq_q3: 'Kann ein Google-Tool das endgültige Snippet zeigen?',
	tool_serp_faq_a3: 'Nein. Die URL-Prüfung meldet Crawl- und Indexierungsstatus samt Screenshot der gerenderten Seite, der Rich-Results-Test prüft die Eignung strukturierter Daten – das Text-Snippet zeigt keines von beiden. Google schreibt den Titellink zudem um, wenn der Seitentitel schlecht zur Suchanfrage passt. Echte Gewissheit gibt nur die Suche nach der Live-URL.',
	tool_serp_faq_q4: 'Wird mein Titel irgendwohin hochgeladen?',
	tool_serp_faq_a4: 'Nein. Der gesamte Text bleibt in deinem Browser-Tab und wird nie an einen Server gesendet. Schließe den Tab, und alles ist weg.',
	tool_serp_references: 'Google Search Central – Titel-Links steuern; Google Search Central – Snippets steuern.',
	tool_serp_ref_title_label: 'Search Central – Titel-Links steuern',
	tool_serp_ref_snippet_label: 'Search Central – Snippets steuern',
};

export default de;
