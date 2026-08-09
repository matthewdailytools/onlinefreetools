/**
 * i18n tool shard (open-graph-preview / de).
 * Deutsch — eigenständige, suchorientierte Neuformulierung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_og_home_title: 'Open-Graph-Vorschau',
	tool_og_home_desc:
		'Mach aus jedem Teilen deiner Seite Klicks — prüfe, wie sie beim Teilen auf Facebook, X und in Messaging-Apps aussieht, direkt im Browser.',
	tool_og_title: 'Open-Graph-Vorschau — prüfe Social-Share-Karten',
	tool_og_description:
		'Open-Graph-Tags entscheiden, wie deine Seite bei jedem Teilen aussieht: Ein fehlendes Bild oder ein fehlender Titel kostet dich Klicks und Shares. Füge deine og:/twitter:card-Tags oder eine URL ein, um die Share-Karte für Facebook, X und im WhatsApp-Stil zu sehen, fehlende Felder zu finden und das Bildformat zu korrigieren. Schritte: Tags einfügen oder URL laden, die drei Karten und die Feldtabelle lesen, dann Fehlendes ergänzen. Der Einfüge-Modus läuft auf deinem Gerät; der URL-Modus ruft die Seite einmal ab und speichert sie nicht. Beispiel: eine Seite mit einem 1200×630 großen og:image wird als große Karte geteilt.',
	tool_og_tags_tab: 'Tags einfügen',
	tool_og_url_tab: 'URL laden',
	tool_og_tags_ph: 'Füge hier deine <meta property="og:*">- und <meta name="twitter:*">-Tags ein…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'URL laden',
	tool_og_preview: 'Vorschau',
	tool_og_sample: 'Beispiel',
	tool_og_clear: 'Leeren',
	tool_og_copy: 'Kopieren',
	tool_og_copied: 'Kopiert',
	tool_og_running: 'Wird geprüft…',
	tool_og_error_prefix: 'Fehler: ',
	tool_og_url_error: 'Bitte eine gültige http(s)-URL eingeben.',
	tool_og_fetch_failed: 'Die URL konnte nicht geladen werden. Die Seite ist evtl. offline, blockt Bots oder liefert kein HTML.',
	tool_og_no_tags: 'Keine OG-Tags erkannt',
	tool_og_no_tags_fallback:
		'Ohne Open-Graph-Tags bauen Facebook, X und WhatsApp die Vorschau aus Titel, Meta-Description und dem ersten Bild der Seite.',
	tool_og_required_label: 'Pflicht',
	tool_og_optional_label: 'Optional',
	tool_og_missing_label: 'Fehlt',
	tool_og_ok_label: 'Vorhanden',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'Tag-Status',
	tool_og_ratio_warning: 'og:image sollte etwa 1200×630 px (1.91:1) groß sein.',
	tool_og_ratio_ok: 'og:image ist nahe 1200×630 px (1.91:1).',
	tool_og_ratio_unknown: 'Die Bildgröße konnte nicht aus der URL gelesen werden.',
	tool_og_dimensions: '{w}×{h} px',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'Messaging-Apps (WhatsApp-Stil)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'Kein twitter:card gesetzt – die Plattformen leiten eine summary-Karte aus den og:-Tags ab.',
	tool_og_how_title: 'So funktioniert es',
	tool_og_how_body:
		'Die Vorschau parst die eingefügten og:/twitter:-Tags (oder extrahiert sie aus dem für eine URL geladenen HTML) und zeichnet drei Karten. Facebook zeigt das 1.91:1-Bild links, darunter Titel, Beschreibung und Domain. X folgt twitter:card: summary_large_image zeigt ein großes Bild oben, summary ein kleines neben dem Text. Messaging-Apps wie WhatsApp zeigen eine große Karte. Die Tabelle markiert og:title, og:description und og:image als Pflicht und listet optionale Felder.',
	tool_og_rules_title: 'Regeln der Vorschau',
	tool_og_rules_body: 'Das sind die Bildgrößen und Fallbacks der Plattformen, laut Open-Graph-Protokoll und der X-Cards-Dokumentation.',
	tool_og_rules_item_1: 'Pflichtfelder: og:title, og:description und og:image. Fehlende werden markiert, damit du sie vor dem Veröffentlichen ergänzt.',
	tool_og_rules_item_2: 'og:image mit 1200×630 px (1.91:1) funktioniert auf allen großen Plattformen. Facebook unterstützt inzwischen auch 2:1- und 1:1-Zuschnitte; sehr kleine Bilder werden oft vergrößert und wirken unscharf.',
	tool_og_rules_item_3: 'twitter:card summary_large_image passt zu einem großen Bild, summary zu einem kleinen. Ohne twitter:card leiten die Plattformen eine summary-Karte aus den og:-Tags ab.',
	tool_og_rules_item_4: 'Fehlen og:title oder og:image, verwenden die Plattformen den HTML-Titel, die Meta-Description und das erste Bild der Seite.',
	tool_og_rules_item_5: 'Die Größe wird durch Laden des Bildes im Browser gemessen; lässt es sich nicht laden (blockiert, offline oder falsche URL), meldet die Prüfung „unbekannt“.',
	tool_og_example_title: 'Beispiel',
	tool_og_example:
		'Die Beispiel-Tags beschreiben einen Blogbeitrag mit 1200×630 großem og:image und twitter:card summary_large_image. Die Vorschau zeigt eine Facebook-Karte mit Bild links, eine große X-Karte, eine WhatsApp-Stil-Karte und eine Tabelle, in der alle Pflichtfelder vorhanden sind.',
	tool_og_usecases_title: 'Geeignete Einsätze',
	tool_og_usecase_1:
		'Vor dem Veröffentlichen eines Beitrags oder einer Landingpage die Tags einmal einfügen und prüfen, ob die Karte auf Facebook, X und in Messaging-Apps korrekt aussieht.',
	tool_og_usecase_2:
		'Zeigt ein geteilter Link kein Bild oder ein beschnittenes, die og:-Tags einfügen und prüfen, ob og:image fehlt oder das Format falsch ist.',
	tool_og_usecase_3:
		'Nach einem CMS- oder Theme-Update die Live-URL laden und prüfen, ob die og:-Tags noch zur Seite passen.',
	tool_og_faq_q1: 'Was passiert, wenn eine Seite keine Open-Graph-Tags hat?',
	tool_og_faq_a1:
		'Facebook, X und WhatsApp bauen die Vorschau aus HTML-Titel, Meta-Description und dem ersten Bild der Seite. Die Karte kann unvollständig sein oder das falsche Bild zeigen – genau deshalb gibt es die Pflicht-felder og:.',
	tool_og_faq_q2: 'Wie groß sollte og:image sein?',
	tool_og_faq_a2:
		'Die sichere Größe ist 1200×630 px, ein 1.91:1-Format, das alle großen Plattformen akzeptieren. Facebook unterstützt inzwischen auch 2:1- und 1:1-Zuschnitte. Sehr kleine Bilder werden oft vergrößert und wirken unscharf.',
	tool_og_faq_q3: 'Wie hängt twitter:card mit den og:-Tags zusammen?',
	tool_og_faq_a3:
		'twitter:card wählt das Layout: summary_large_image zeigt ein breites Bild, summary ein kleines. Fehlen twitter:title, twitter:description oder twitter:image, fällt X auf das jeweilige og:-Tag zurück.',
	tool_og_faq_q4: 'Was macht eine Plattform, wenn og:image fehlt?',
	tool_og_faq_a4:
		'Sie fällt auf das erste Bild im Seiten-HTML zurück oder zeigt die Karte ohne Bild. Ein fehlendes og:image ist der häufigste Grund, warum ein geteilter Link kein Vorschaubild hat.',
	tool_og_faq_q5: 'Warum meldet die Format-Prüfung „unbekannt“?',
	tool_og_faq_a5:
		'Die Vorschau versucht, og:image mit einem Browser-Bildladevorgang zu laden, um die echte Größe zu lesen. Ist das Bild blockiert, offline, langsam oder lehnt der Server die Anfrage ab, kann die Größe nicht gelesen werden und die Prüfung meldet unbekannt.',
	tool_og_faq_q6: 'Werden meine Tags irgendwohin hochgeladen?',
	tool_og_faq_a6:
		'Nein. Im Einfüge-Modus laufen Analyse und Vorschau auf deinem Gerät. Der URL-Modus ruft die Seite einmal über unseren Worker ab und speichert sie nicht.',
	tool_og_references: 'ogp.me — Das Open-Graph-Protokoll; X — Cards-Markup.',
	tool_og_ref_ogp_label: 'ogp.me — Das Open-Graph-Protokoll',
	tool_og_ref_x_label: 'X — Cards-Markup',
};

export default de;
