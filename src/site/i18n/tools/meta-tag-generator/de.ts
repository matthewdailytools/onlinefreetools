/**
 * i18n tool shard (meta-tag-generator / de).
 * Deutsch — eigenständige, suchorientierte Neuformulierung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_meta_home_title: 'Meta-Tag-Generator',
	tool_meta_home_desc:
		'Schreibe title, description, canonical und Open-Graph-Tags, die in der Suche Klicks bringen — erstelle die kompletten Head-Tags deiner Seite direkt im Browser.',
	tool_meta_title: 'Meta-Tag-Generator — die kompletten Head-Tags deiner Seite erstellen',
	tool_meta_description:
		'Title und Meta-Description prägen Ihr Such-Snippet; der Canonical wählt bei Duplikaten die maßgebliche URL. Felder ausfüllen und fertige head-Tags samt Längenhinweisen kopieren. Beispiel: Canonical + og.',
	tool_meta_title_label: 'Meta-Title',
	tool_meta_title_ph: 'Meta-Tag-Generator — die kompletten Head-Tags deiner Seite erstellen',
	tool_meta_title_hint: 'Halte dich bei etwa 60 Zeichen. Suchmaschinen können längere Titel umschreiben.',
	tool_meta_desc_label: 'Meta-Description',
	tool_meta_desc_ph: 'Erstelle fertig einfügbare Head-Meta-Tags mit Längenhinweisen, robots-Werten und OG-Feldern.',
	tool_meta_desc_hint: 'Halte dich bei etwa 155–160 Zeichen. Längerer Text kann in den Suchergebnissen gekürzt werden.',
	tool_meta_canonical_label: 'Canonical-URL',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'Die bevorzugte URL dieser Seite. Trage die vollständige URL mit Protokoll ein.',
	tool_meta_robots_label: 'Robots-Meta',
	tool_meta_robots_none: '— ohne robots-Meta —',
	tool_meta_robots_index_follow: 'index, follow (Standard, Indexierung erlaubt)',
	tool_meta_robots_noindex_follow: 'noindex, follow (aus den Ergebnissen verstecken, Links weiterverfolgen)',
	tool_meta_robots_index_nofollow: 'index, nofollow (Indexierung erlaubt, Links nicht verfolgen)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (Seite verstecken und keine Links verfolgen)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (vollständige URL)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'Erstellen',
	tool_meta_sample: 'Beispiel laden',
	tool_meta_clear: 'Leeren',
	tool_meta_copy: 'Kopieren',
	tool_meta_copied: 'Kopiert',
	tool_meta_error_prefix: 'Fehler: ',
	tool_meta_canonical_protocol: 'Die Canonical-URL hat kein Protokoll – füge https:// oder http:// hinzu, damit Suchmaschinen sie lesen.',
	tool_meta_title_len: 'Titel: {n} Zeichen',
	tool_meta_title_len_warn: 'Titel: {n} Zeichen — über 60, kürzen erwägen.',
	tool_meta_desc_len: 'Description: {n} Zeichen',
	tool_meta_desc_len_warn: 'Description: {n} Zeichen — über 160, kann gekürzt werden.',
	tool_meta_output_label: 'Generierter Head-Snippet',
	tool_meta_how_title: 'So funktioniert es',
	tool_meta_how_body:
		'Der Generator nimmt deine Felder und baut die passenden Head-Tags. Leere optionale Felder werden übersprungen, sodass die Ausgabe nur das enthält, was du ausgefüllt hast. Jeder Wert wird HTML-escaped: Ein & wird zu &amp; und ein Kleiner-als-Zeichen zu &lt;, damit die Tags in deiner Seite gültig bleiben. Längenhinweise warnen, wenn Titel oder Description die üblichen Grenzen überschreiten, ohne deinen Text zu beschneiden.',
	tool_meta_rules_title: 'Regeln des Generators',
	tool_meta_rules_body: 'Diese Regeln folgen den Leitlinien von Google Search Central zu Meta-Tags, Title-Links und Canonical-URLs.',
	tool_meta_rules_item_1:
		'Meta-Title und Description sind Vorschläge, keine Anweisungen: Suchmaschinen können sie umschreiben oder kürzen, also halte den Titel bei etwa 60 Zeichen und die Description bei 155–160.',
	tool_meta_rules_item_2:
		'Alle Werte werden HTML-escaped: & < > " und \' werden zu Entitäten, sodass Zeichen in deinem Titel oder deiner Description das Markup nicht brechen können.',
	tool_meta_rules_item_3:
		'Die Canonical-URL sollte die vollständige absolute URL mit Protokoll sein. Eine relative oder protokolllose URL ist als Canonical-Ziel nicht brauchbar.',
	tool_meta_rules_item_4:
		'Das Robots-Meta nutzt die Werte index/noindex und follow/nofollow. Ohne Angabe verwenden Suchmaschinen ihren eigenen Standard, nämlich indexieren und folgen.',
	tool_meta_rules_item_5:
		'Canonical und Open-Graph-Tags können auf derselben Seite koexistieren: og:url sollte der Canonical-URL entsprechen, damit Social Shares auf dieselbe Adresse zeigen.',
	tool_meta_example_title: 'Beispiel',
	tool_meta_example:
		'Das Beispiel füllt Titel, Description, Canonical, Robots und drei Open-Graph-Felder. Der generierte Snippet gibt ein <title>-Tag, die Meta-Description, den Canonical-Link, das Robots-Meta und die ausgefüllten og:-Tags aus.',
	tool_meta_usecases_title: 'Geeignete Einsätze',
	tool_meta_usecase_1:
		'Neues Seiten-Template bauen: Head-Block einmal erzeugen, Längenhinweise prüfen und vor dem Go-live in das Template einfügen.',
	tool_meta_usecase_2:
		'Abgabe an einen Kunden: den exakten Head-Snippet mit Canonical und OG erzeugen und in das CMS einfügen.',
	tool_meta_usecase_3:
		'Vor der Veröffentlichung Tags erzeugen und mit einer SERP-Vorschau abgleichen, damit Titel und Description zur sichtbaren Seite passen.',
	tool_meta_faq_q1: 'Was bedeuten die Robots-Meta-Werte?',
	tool_meta_faq_a1:
		'index erlaubt Suchmaschinen, die Seite in den Ergebnissen zu zeigen, noindex hält sie heraus. follow erlaubt das Folgen von Links auf der Seite, nofollow verhindert es. Fehlt das Tag, gilt standardmäßig index, follow.',
	tool_meta_faq_q2: 'Werden Sonderzeichen in meinen Werten escapet?',
	tool_meta_faq_a2:
		'Ja. Der Generator escapet & < > " und \', sodass ein & zu &amp; und ein Kleiner-als-Zeichen zu &lt; wird. Deine Tags bleiben gültig, selbst wenn der Wert markup-ähnliche Zeichen enthält.',
	tool_meta_faq_q3: 'Können Canonical und Open Graph koexistieren?',
	tool_meta_faq_a3:
		'Ja, sie bedienen verschiedene Systeme. Der Canonical-Link sagt Suchmaschinen die bevorzugte URL, während og:-Tags die Seite fürs Social Sharing beschreiben. Halte og:url zur Canonical-URL passend.',
	tool_meta_faq_q4: 'Wie lang sollten Titel und Description sein?',
	tool_meta_faq_a4:
		'Etwa 60 Zeichen für den Titel und 155–160 für die Description sind übliche Orientierungswerte. Sie sind Vorschläge: Suchmaschinen können längere Werte umschreiben oder kürzen.',
	tool_meta_faq_q5: 'Was passiert mit leeren Feldern?',
	tool_meta_faq_a5:
		'Leere optionale Felder werden übersprungen, sodass der generierte Snippet nur die Tags der ausgefüllten Felder enthält.',
	tool_meta_faq_q6: 'Werden meine Daten irgendwohin gesendet?',
	tool_meta_faq_a6: 'Nein. Der Generator läuft komplett in deinem Browser und nichts wird hochgeladen.',
	tool_meta_references: 'Google Search Central – Meta-Tags, die Google versteht; Title-Links steuern; Canonical-URLs.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central – Meta-Tags, die Google versteht',
	tool_meta_ref_searchcentral_title_label: 'Search Central – Deine Title-Links steuern',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central – Canonical-URLs',
};

export default de;
