/**
 * i18n tool shard (schema-jsonld-generator / de).
 * German locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_schema_home_title: 'JSON-LD Generator',
	tool_schema_home_desc:
		'Erstelle Schema.org-JSON-LD für FAQ, Artikel, Breadcrumbs und Organisationen im Browser.',
	tool_schema_title: 'JSON-LD Generator — erstelle strukturierte Daten für FAQ, Artikel und Breadcrumbs',
	tool_schema_description:
		'JSON-LD direkt im Browser erzeugen. Schritte: Typ wählen (FAQ, Artikel, Breadcrumb, Organisation), Pflichtfelder ausfüllen und ein gültiges Schema.org-Markup mit einem einfügefertigen script-Tag kopieren. Die Seite unterscheidet Pflicht- und optionale Felder und validiert das JSON vor dem Kopieren. Es wird nichts hochgeladen. Beispiel: Ein FAQ mit zwei Fragen erzeugt ein mainEntity mit zwei Question-Knoten.',
	tool_schema_generate: 'Generieren',
	tool_schema_sample: 'Beispiel',
	tool_schema_clear: 'Leeren',
	tool_schema_copy: 'Kopieren',
	tool_schema_copied: 'Kopiert',
	tool_schema_download: 'Herunterladen',
	tool_schema_type_label: 'Schema-Typ',
	tool_schema_required: 'Pflicht',
	tool_schema_optional: 'Optional',
	tool_schema_fields_label: 'Felder',
	tool_schema_output_label: 'JSON-LD-Ausgabe',
	tool_schema_wrap_script: 'In <script type="application/ld+json"> einbetten',
	tool_schema_missing_required: 'Pflichtfeld fehlt: {field}',
	tool_schema_err_no_fields: 'Fülle zuerst die Pflichtfelder aus.',
	tool_schema_breadcrumb_min: 'Breadcrumbs brauchen mindestens zwei Ebenen.',
	tool_schema_type_faq: 'FAQ',
	tool_schema_type_article: 'Artikel',
	tool_schema_type_breadcrumb: 'Breadcrumb',
	tool_schema_type_organization: 'Organisation',
	tool_schema_faq_question: 'Frage {n}',
	tool_schema_faq_answer: 'Antwort {n}',
	tool_schema_faq_add: 'Frage hinzufügen',
	tool_schema_faq_remove: 'Entfernen',
	tool_schema_article_headline: 'Überschrift',
	tool_schema_article_description: 'Beschreibung',
	tool_schema_article_author: 'Name des Autors',
	tool_schema_article_date_published: 'Veröffentlichungsdatum (JJJJ-MM-TT)',
	tool_schema_article_date_modified: 'Änderungsdatum (JJJJ-MM-TT)',
	tool_schema_article_image: 'Bild-URL (optional)',
	tool_schema_article_url: 'Seiten-URL',
	tool_schema_breadcrumb_name: 'Name {n}',
	tool_schema_breadcrumb_url: 'URL {n}',
	tool_schema_breadcrumb_add: 'Ebene hinzufügen',
	tool_schema_org_name: 'Name der Organisation',
	tool_schema_org_url: 'Website-URL',
	tool_schema_org_logo: 'Logo-URL (optional)',
	tool_schema_org_description: 'Kurzbeschreibung (optional)',
	tool_schema_how_title: 'So funktioniert es',
	tool_schema_how_body:
		'Wähle einen Schema-Typ, fülle das Formular aus und drücke Generieren. Die Seite baut ein Schema.org-JSON-LD-Objekt, prüft, ob Pflichtfelder gefüllt sind, und zeigt das formatierte Ergebnis in einem script-Tag, damit du es in den <head> deiner Seite einfügen kannst. Vor dem Rendern läuft eine Syntaxprüfung; fehlende Pflichtfelder werden aufgelistet, statt stillschweigend kaputtes Markup zu erzeugen.',
	tool_schema_rules_title: 'Was der Generator prüft',
	tool_schema_rules_body:
		'Jeder Typ hat eine minimal gültige Form. Der Generator stellt sicher, dass das JSON wohlgeformt ist und weist auf leere Pflichtfelder hin – er kann aber nicht beurteilen, ob das Markup zum sichtbaren Inhalt deiner Seite passt.',
	tool_schema_rules_item_1:
		'FAQ: mainEntity enthält ein Array aus Question-Knoten; jedes Element braucht name und acceptedAnswer.text.',
	tool_schema_rules_item_2:
		'Artikel: headline und author sind Pflicht; datePublished, dateModified, image und description sind optional, aber empfohlen.',
	tool_schema_rules_item_3:
		'Breadcrumb: itemListElement ist eine geordnete Liste, bei der jede position fortlaufend sein muss (1, 2, 3…).',
	tool_schema_rules_item_4:
		'Konsistenz: Google gleicht strukturierte Daten mit der sichtbaren Seite ab. Markup für Inhalte, die nicht auf der Seite stehen, verstößt gegen die Spam-Richtlinien.',
	tool_schema_example_title: 'Beispiel',
	tool_schema_example:
		'FAQ-Beispiel mit zwei Fragen: „Wie installiere ich das SDK?“ und „Werden die Daten lokal verarbeitet?“ → die Ausgabe enthält ein mainEntity-Array mit zwei Question-Objekten, jeweils mit acceptedAnswer.text, bereit zum Einfügen in den head deiner Seite.',
	tool_schema_usecases_title: 'Gut geeignet für',
	tool_schema_usecase_1:
		'FAQ-Seiten: füge eine Fragenliste als strukturierte Daten hinzu, damit Suchmaschinen die Fragen und Antworten auf der Seite besser verstehen.',
	tool_schema_usecase_2:
		'Artikel und Doku: binde Artikel-Markup mit Autor und Daten für Content-Sites und Wissensdatenbanken ein.',
	tool_schema_usecase_3:
		'Produkt und Seitenstruktur: beschreibe Navigationspfade mit Breadcrumb und Markenname und Logo mit Organization.',
	tool_schema_faq_q1: 'Für wen sind die JSON-LD-Strukturdaten gedacht?',
	tool_schema_faq_a1:
		'Für Suchmaschinen und andere Leser von Schema.org-Markup. Es steckt im HTML, damit Maschinen Entitäten, Beziehungen und Fakten verstehen – es ist kein für Nutzer sichtbarer Inhalt.',
	tool_schema_faq_q2: 'Garantiert FAQ-Schema ein Rich Result?',
	tool_schema_faq_a2:
		'Nein. FAQ-Rich-Results werden seit Mai 2026 nicht mehr seitenweit angezeigt, HowTo noch früher. Google kann das Markup weiterhin zum Verständnis der Seite auswerten, aber es gibt keine Rich-Result-Garantie – behandle Schema als Klarheit für das Verständnis, nicht als KPI für Ranking oder Rich Results.',
	tool_schema_faq_q3: 'Welche Felder sind im erzeugten Markup Pflicht?',
	tool_schema_faq_a3:
		'FAQ braucht Frage + Antwort je Eintrag; Artikel braucht Überschrift und Autor; Breadcrumb braucht mindestens zwei Ebenen mit Name und URL; Organisation braucht Name und URL. Die Seite markiert Pflichtfelder und listet fehlende auf.',
	tool_schema_faq_q4: 'Warum muss das Markup zum sichtbaren Inhalt passen?',
	tool_schema_faq_a4:
		'Google behandelt strukturierte Daten, die nicht die sichtbare Seite widerspiegeln, als irreführend. Beispiel: Eine FAQ-Frage, die auf der Seite gar nicht beantwortet wird, kann selbst bei gültigem JSON als Markup-Missbrauch gelten.',
	tool_schema_references: 'Schema.org; Google Search Central – Grundlagen strukturierter Daten.',
	tool_schema_ref_schema_label: 'Schema.org',
	tool_schema_ref_google_label: 'Search Central – Strukturierte Daten',
};

export default de;
