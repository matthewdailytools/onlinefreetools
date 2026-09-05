/**
 * i18n tool shard (on-page-seo-checker / de).
 * Deutsch — eigenständige, suchorientierte Neuformulierung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_onpage_home_title: 'On-Page-SEO-Prüfung',
	tool_onpage_home_desc:
		'Finde die Tags, die deine Seite in der Suche zurückhalten: prüfe title, H1, Meta-Description, canonical, Open Graph und JSON-LD im Browser.',
	tool_onpage_title: 'On-Page-SEO-Prüfung — Seiten-Tags finden und korrigieren',
	tool_onpage_description:
		'Prüfe title, Meta-Description, H1, canonical, robots, Open Graph und JSON-LD. HTML einfügen: es bleibt auf deinem Gerät. Beispiel: zwei H1 werden gemeldet.',
	tool_onpage_url_tab: 'URL laden',
	tool_onpage_html_tab: 'HTML einfügen',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'URL prüfen',
	tool_onpage_html_ph: 'Hier das HTML von <head> (und einen Body-Ausschnitt) einfügen…',
	tool_onpage_check: 'Seite prüfen',
	tool_onpage_sample: 'Beispiel',
	tool_onpage_clear: 'Leeren',
	tool_onpage_copy: 'Kopieren',
	tool_onpage_copied: 'Kopiert',
	tool_onpage_running: 'Wird geprüft…',
	tool_onpage_error_prefix: 'Fehler: ',
	tool_onpage_url_error: 'Bitte eine gültige http(s)-URL eingeben.',
	tool_onpage_fetch_failed: 'Die URL konnte nicht geladen werden. Die Seite ist evtl. offline, blockt Bots oder liefert kein HTML.',
	tool_onpage_no_html: 'Füge zuerst HTML ein oder lade eine URL.',
	tool_onpage_no_results: 'Noch keine Prüfungen anzuzeigen.',
	tool_onpage_summary_title: 'Prüfzusammenfassung',
	tool_onpage_summary_n_ok: '{n} bestanden',
	tool_onpage_summary_n_warn: '{n} Warnungen',
	tool_onpage_summary_n_err: '{n} Probleme',
	tool_onpage_status_ok: 'OK',
	tool_onpage_status_warn: 'Warnung',
	tool_onpage_status_err: 'Problem',
	tool_onpage_title_check: 'Title',
	tool_onpage_title_missing: 'Kein <title> gefunden. Füge eines innerhalb von <head> hinzu.',
	tool_onpage_title_ok: 'Title mit {n} Zeichen. Nahe 50–60 Zeichen wird er in den Suchergebnissen gut angezeigt.',
	tool_onpage_title_long: 'Der Title hat {n} Zeichen und wird in den Suchergebnissen voraussichtlich abgeschnitten. Ziel: ca. 50–60 Zeichen.',
	tool_onpage_title_short: 'Der Title hat nur {n} Zeichen. Ergänze den konkreten Seitenfokus, damit er aussagekräftiger wird.',
	tool_onpage_desc_check: 'Meta-Description',
	tool_onpage_desc_missing: 'Keine Meta-Description gefunden. Google baut das Snippet dann aus dem Seitentext. Schreibe eine eigene Zusammenfassung, wenn du diese Formulierung steuern willst.',
	tool_onpage_desc_ok: 'Description mit {n} Zeichen. Der Bereich 140–160 Zeichen wird in den meisten Snippets gut angezeigt.',
	tool_onpage_desc_long: 'Die Description hat {n} Zeichen – Snippets schneiden meist bei ca. 160 Zeichen ab.',
	tool_onpage_desc_short: 'Die Description hat nur {n} Zeichen. Nutze den Platz, um das Angebot der Seite kurz zu beschreiben.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'Kein H1 gefunden. Ergänze eine Überschrift oberster Ebene, die das Seitenthema nennt – Screenreader und Snippet-Titel stützen sich darauf.',
	tool_onpage_h1_multiple: '{n} H1-Tags gefunden. Google rankt Seiten mit beliebig vielen H1, das ist also keine Abstrafung. Ein H1 plus Abschnitte in H2–H6 liest sich für Screenreader trotzdem klarer.',
	tool_onpage_h1_ok: 'Ein H1 gefunden und innerhalb von <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'Keine Canonical-URL gesetzt. Füge <link rel="canonical"> hinzu, wenn derselbe Inhalt über mehrere URLs erreichbar ist.',
	tool_onpage_canonical_ok: 'Selbstreferenzierender Canonical gefunden.',
	tool_onpage_canonical_other: 'Der Canonical zeigt auf eine andere URL – damit erklärst du diese Seite zum Duplikat jener URL. Behalte das nur, wenn es stimmt; der Canonical ist ein Hinweis, Google kann weiterhin eine andere URL wählen.',
	tool_onpage_robots_check: 'Robots-Meta',
	tool_onpage_robots_missing: 'Kein Robots-Meta. Standard ist index,follow und für die meisten öffentlichen Seiten passend.',
	tool_onpage_robots_noindex: 'Die Seite setzt noindex und erscheint nicht in der Google-Suche. Entferne es, wenn die Seite indexiert werden soll.',
	tool_onpage_robots_ok: 'Das Robots-Meta erlaubt Indexierung und Verfolgen von Links.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'Keine og:-Tags gefunden. Ergänze og:title, og:description und og:image für Social-Sharing-Vorschauen.',
	tool_onpage_og_partial: 'Es fehlen {n} Pflichtfelder og:. Stelle sicher, dass og:title, og:description und og:image vorhanden sind.',
	tool_onpage_og_ok: 'og:title, og:description und og:image sind vorhanden.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'Keine strukturierten JSON-LD-Daten gefunden. Erwäge schema.org-Markup, wenn es sichtbaren Inhalt beschreibt.',
	tool_onpage_jsonld_invalid: 'Ein JSON-LD-Block konnte nicht als JSON geparst werden. Prüfe die Syntax.',
	tool_onpage_jsonld_ok: '{n} JSON-LD-Blöcke gefunden. Halte die strukturierten Daten konsistent mit dem, was Besucher sehen.',
	tool_onpage_mixed_check: 'Gemischte Inhalte',
	tool_onpage_mixed_none: 'Keine http://-Referenzen im https-Kontext gefunden.',
	tool_onpage_mixed_found: '{n} http://-Referenzen gefunden. Browser blockieren gemischte Inhalte; liefere diese Ressourcen über https aus.',
	tool_onpage_render_check: 'Renderblockierung',
	tool_onpage_render_none: 'Keine offensichtlich renderblockierenden Stylesheets oder Skripte erkannt.',
	tool_onpage_render_found: '{n} <link rel="stylesheet"> ohne media im <head>. Bette kritisches CSS ein oder verschiebe das Laden, um LCP zu verbessern.',
	tool_onpage_unknown: 'Nicht bestimmbar: {label}',
	tool_onpage_how_title: 'So funktioniert es',
	tool_onpage_how_body:
		'Die Prüfung parst das eingefügte Markup (oder das von einer URL geladene HTML) und bewertet eine feste Liste von On-Page-SEO-Prüfungen. Jede Prüfung liest eine Art von Tag: title, Meta-Description, H1, canonical, Robots-Meta, Open-Graph-Felder, JSON-LD-Blöcke, gemischte Inhalte und renderblockierende Ressourcen. Der Einfüge-Modus läuft komplett im Browser; der URL-Modus ruft die Seite einmal über unseren Worker ab und speichert sie nicht.',
	tool_onpage_how_item_1: 'Bleibe bei HTML einfügen oder wechsle zu URL laden für eine Live-Seite.',
	tool_onpage_how_item_2: 'Füge Markup ein oder gib eine https-URL ein.',
	tool_onpage_how_item_3: 'Klicke auf Seite prüfen (oder Beispiel für ein Demo-Dokument).',
	tool_onpage_how_item_4: 'Prüfe jeden Check-Status und behebe die gemeldeten Tags.',
	tool_onpage_rules_title: 'Regeln der Prüfungen',
	tool_onpage_rules_body:
		'Woran jede Prüfung misst – und wie verbindlich das ist. Das Verhalten der Tags (robots, canonical, gemischte Inhalte) folgt Google Search Central und der HTML-Spezifikation. Empfehlungen zu Länge und Überschriften sind Darstellungs- und Lesbarkeitsheuristiken, keine Ranking-Regeln.',
	tool_onpage_rules_item_1:
		'Title: Eine Seite sollte einen beschreibenden <title> haben. Google kann ihn umschreiben, aber ein knapper Titel um 50–60 Zeichen wird meist gut angezeigt.',
	tool_onpage_rules_item_2:
		'H1: Eine Seite braucht eine Überschrift, die ihr Thema nennt. Google kennt keine ideale Anzahl an Überschriften und straft zusätzliche H1 nicht ab; mehrere H1 werden hier nur wegen Gliederung und Barrierefreiheit gemeldet.',
	tool_onpage_rules_item_3:
		'Canonical: <link rel="canonical"> im <head> ist ein Hinweis auf die bevorzugte URL unter Duplikaten, keine Anweisung. Google wägt ihn mit Weiterleitungen, Sitemaps und internen Links ab, bevor es sich entscheidet.',
	tool_onpage_rules_item_4:
		'Gemischte Inhalte: Eine https-Seite, die auf http://-Ressourcen verweist, wird von Browsern blockiert. Diese Prüfung listet die Referenzen als Warnungen.',
	tool_onpage_rules_item_5:
		'Renderblockierung: Ein Stylesheet im <head> ohne media-Attribut blockiert das Rendering. Diese Prüfung ist heuristisch und misst keine echten Ladezeiten.',
	tool_onpage_example_title: 'Beispiel',
	tool_onpage_example:
		'Die Beispieleingabe ist eine Seite mit 71 Zeichen langem Title, ohne Meta-Description, mit zwei H1, einem Canonical auf eine andere URL, einem og:image, einem gültigen JSON-LD-Block und einem http://-Bild. Die Prüfung meldet den Title als wahrscheinlich abgeschnitten, H1 als Warnung, Canonical als nicht selbstreferenzierend und gemischte Inhalte als Warnung – identisch zum Ergebnis beim Laden des Beispiels.',
	tool_onpage_usecases_title: 'Geeignete Einsätze',
	tool_onpage_usecase_1:
		'Vor Redesign oder Relaunch: dieselbe Seite durch die Prüfung laufen lassen und die gemeldeten Probleme in einem Durchgang beheben.',
	tool_onpage_usecase_2:
		'Template-Übergabe: Bei HTML von einer Agentur oder einem Page-Builder die head-Tags prüfen, statt dem Export zu vertrauen.',
	tool_onpage_usecase_3:
		'Content-Updates: Nach CMS-Bearbeitung prüfen, ob title, description und canonical noch zur neuen Seite passen.',
	tool_onpage_faq_q1: 'Was prüft ein On-Page-SEO-Checker?',
	tool_onpage_faq_a1:
		'Er prüft die Tags, die eine Seite selbst steuert: title, Meta-Description, H1, canonical, Robots-Meta, Open-Graph-Felder, strukturierte JSON-LD-Daten, gemischte Inhalte und renderblockierende Ressourcen. Er misst weder Rankings noch Backlinks.',
	tool_onpage_faq_q2: 'Schaden mehrere H1-Tags dem SEO?',
	tool_onpage_faq_a2:
		'Nein. Google sagt, es gebe keine ideale Anzahl an Überschriften, und rankt Seiten mit keinem, einem oder mehreren H1. Für ein einzelnes H1 sprechen Barrierefreiheit und eine klare Gliederung – dazu die größere Chance, dass Google deine Überschrift als Snippet-Titel übernimmt.',
	tool_onpage_faq_q3: 'Muss der Canonical auf sich selbst zeigen?',
	tool_onpage_faq_a3:
		'Nicht zwingend, aber ein selbstreferenzierender Canonical ist das klarste Signal für eine Seite, die eigenständig ranken soll. Zeigt er woanders hin, erklärst du die Seite zum Duplikat. In beiden Fällen behandelt Google den Canonical als Hinweis und kann eine andere URL wählen.',
	tool_onpage_faq_q4: 'Warum markiert die Prüfung http://-Ressourcen als gemischte Inhalte?',
	tool_onpage_faq_a4:
		'Wenn eine Seite über https ausgeliefert wird und auf Bilder, Skripte oder Styles über http:// verweist, blockiert der Browser den Abruf standardmäßig. Diese Prüfung listet die Referenzen als Warnungen, damit du auf https wechselst.',
	tool_onpage_faq_q5: 'Testet die JSON-LD-Prüfung auch die Validierung?',
	tool_onpage_faq_a5:
		'Sie prüft, ob sich die Blöcke als gültiges JSON parsen lassen, und erinnert daran, strukturierte Daten konsistent mit sichtbarem Inhalt zu halten. Ein vollständiger schema.org-Validator wird nicht ausgeführt.',
	tool_onpage_faq_q6: 'Wird mein HTML irgendwohin hochgeladen?',
	tool_onpage_faq_a6:
		'Nein. Beim Einfügen von HTML erfolgt die Analyse auf deinem Gerät, nichts wird an einen Server gesendet. Der URL-Modus ruft die Seite einmal über unseren Worker ab und speichert sie nicht.',
	tool_onpage_references: 'Google Search Central — Meta-Tags; Google Search Central — Canonical; MDN — Element <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — Meta-Tags, die Google versteht',
	tool_onpage_ref_canonical_label: 'Search Central — Kanonische URLs',
	tool_onpage_ref_mdn_label: 'MDN — <meta>: das Metadaten-Element',
};

export default de;
