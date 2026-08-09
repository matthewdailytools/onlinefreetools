/**
 * i18n tool shard (utm-builder / de).
 * Deutsch — eigenständige, suchorientierte Neuformulierung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_utm_home_title: 'UTM-Builder',
	tool_utm_home_desc:
		'Miss, welche Kampagnen deinen Traffic wirklich bringen — erstelle saubere Tracking-Links mit utm_source, medium, campaign, term und content im Browser.',
	tool_utm_title: 'UTM-Builder — Tracking-Links für Kampagnen erstellen',
	tool_utm_description:
		'Saubere UTM-Tags sind der einzige Weg, zu belegen, welche Kampagnen, E-Mails oder Posts wirklich deinen Traffic bringen – ohne sie bleiben deine SEO- und Marketing-Bemühungen in den Analysen unsichtbar. Baue aus deiner Zielseiten-URL und utm_source, utm_medium, utm_campaign, utm_term und utm_content einen Tracking-Link. Schritte: Basis-URL einfügen, die fünf Parameter ausfüllen, den generierten Link mit korrekter URL-Kodierung kopieren. Vorhandene Query-Parameter werden behalten und zusammengeführt, nicht überschrieben. Läuft komplett auf deinem Gerät – nichts wird hochgeladen. Beispiel: https://example.com/page mit source=newsletter, medium=email und campaign=summer_sale.',
	tool_utm_url_label: 'Zielseiten-URL',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'Bitte die Zielseiten-URL eingeben.',
	tool_utm_url_invalid: 'Die URL sieht ungültig aus. Prüfe die Adresse und versuche es erneut.',
	tool_utm_url_protocol: 'Kein Protokoll erkannt – https:// wurde automatisch ergänzt.',
	tool_utm_source_label: 'Kampagnenquelle (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'Wo der Link gesehen wird: newsletter, facebook, google.',
	tool_utm_medium_label: 'Kampagnenmedium (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'Wie der Link ausgeliefert wird: email, cpc, social, referral.',
	tool_utm_campaign_label: 'Kampagnenname (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'Die Aktion oder das Produkt, zu dem der Link gehört.',
	tool_utm_campaign_required: 'Der Kampagnenname (utm_campaign) ist Pflicht.',
	tool_utm_term_label: 'Kampagnenbegriff (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'Optional. Identifiziert Keywords bezahlter Suche.',
	tool_utm_content_label: 'Kampagneninhalt (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'Optional. Unterscheidet Anzeigen oder Links zur selben URL.',
	tool_utm_generate: 'Erstellen',
	tool_utm_sample: 'Beispiel',
	tool_utm_clear: 'Leeren',
	tool_utm_copy: 'Kopieren',
	tool_utm_copied: 'Kopiert',
	tool_utm_error_prefix: 'Fehler: ',
	tool_utm_output_label: 'Generierte URL',
	tool_utm_table_title: 'Parameter-Aufschlüsselung',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'Wert',
	tool_utm_param_status: 'Status',
	tool_utm_param_required: 'Pflicht',
	tool_utm_param_optional: 'Optional',
	tool_utm_param_empty: 'Leer',
	tool_utm_encoding_note:
		'Die Werte werden mit encodeURIComponent kodiert: Leerzeichen werden zu %20 und Nicht-ASCII-Zeichen werden ebenfalls kodiert.',
	tool_utm_case_note:
		'Google Analytics unterscheidet Groß-/Kleinschreibung bei Werten. Nutze durchgängig Kleinschreibung, damit derselbe Kanal zusammenbleibt.',
	tool_utm_how_title: 'So funktioniert es',
	tool_utm_how_body:
		'Der Builder parst deine Basis-URL, behält ihre vorhandenen Query-Parameter und hängt die UTM-Parameter mit & an. Jeder Wert wird prozentkodiert, sodass Leerzeichen, chinesische Zeichen und Sonderzeichen im Link überleben. Hat die URL einen Hash, wird er hinter alle Parameter verschoben. Die fünf UTM-Parameter sind das, was Google Analytics liest, um den Besuch einer Quelle, einem Medium und einer Kampagne zuzuordnen.',
	tool_utm_rules_title: 'Regeln des Builders',
	tool_utm_rules_body: 'Das sind die Definitionen und Kodierungsregeln der UTM-Parameter laut Google-Analytics-Dokumentation.',
	tool_utm_rules_item_1: 'utm_source zeigt, wo der Link gesehen wurde; utm_medium zeigt, wie er ausgeliefert wurde. Beide sind für die Zuordnung Pflicht.',
	tool_utm_rules_item_2: 'utm_campaign ist der Name der Aktion und hier Pflicht. utm_term und utm_content sind optional: term für bezahlte Keywords, content zum Unterscheiden zweier Links.',
	tool_utm_rules_item_3: 'Hat die Basis-URL bereits Query-Parameter, werden sie behalten und die UTM mit & angehängt; ein vorhandener Parameter mit gleichem Namen wird ersetzt.',
	tool_utm_rules_item_4: 'Die Werte werden prozentkodiert: Leerzeichen zu %20 und auch Nicht-ASCII-Zeichen. Ein Fragment (#anker) bleibt immer hinter der Query-String.',
	tool_utm_rules_item_5: 'Nutze durchgängig Kleinschreibung. UTM-Werte sind in Google Analytics case-sensitiv, daher wären facebook und Facebook zwei Quellen.',
	tool_utm_example_title: 'Beispiel',
	tool_utm_example:
		'Die Beispieleingabe ist https://example.com/page mit utm_source=newsletter, utm_medium=email und utm_campaign=summer_sale. Der generierte Link ist https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'Geeignete Einsätze',
	tool_utm_usecase_1:
		'Social-Kampagnen: pro Plattform einen Link mit gleichem utm_campaign bauen, damit GA4 die ganze Aktion in einer Zeile meldet.',
	tool_utm_usecase_2:
		'Email-Versand: utm_source=newsletter, utm_medium=email und verschiedene content-Werte nutzen, um zwei Banner zur selben Seite zu vergleichen.',
	tool_utm_usecase_3:
		'QR-Codes und gedruckte Links: Eine vollständige UTM-URL ist lang, lässt sich nach der Erstellung aber kürzen, während die Parameter erhalten bleiben.',
	tool_utm_faq_q1: 'Was ist der Unterschied zwischen utm_source und utm_medium?',
	tool_utm_faq_a1:
		'utm_source sagt, wo der Link gesehen wurde (newsletter, facebook, google), während utm_medium sagt, wie er ausgeliefert wurde (email, cpc, social, referral). GA4 kombiniert beide mit utm_campaign, um die Traffic-Quelle zu benennen.',
	tool_utm_faq_q2: 'Die URL hat bereits Query-Parameter. Gehen sie verloren?',
	tool_utm_faq_a2:
		'Nein. Vorhandene Parameter bleiben erhalten und die UTM werden mit & angehängt. Enthält die URL bereits einen Parameter mit gleichem Namen, ersetzt ihn der neue Wert.',
	tool_utm_faq_q3: 'Was ist mit Leerzeichen, chinesischen Zeichen oder Sonderzeichen in Werten?',
	tool_utm_faq_a3:
		'Jeder Wert wird prozentkodiert: Leerzeichen werden zu %20 und Nicht-ASCII-Zeichen ebenfalls. Der generierte Link bleibt in E-Mail-Clients, Messengern und Browsern gültig.',
	tool_utm_faq_q4: 'Sind UTM-Werte case-sensitiv?',
	tool_utm_faq_a4:
		'Ja. Google Analytics behandelt utm_source=Facebook und utm_source=facebook als zwei verschiedene Quellen. Nutze durchgängig Kleinschreibung, damit derselbe Kanal zusammenbleibt.',
	tool_utm_faq_q5: 'Wann sollte ich utm_term und utm_content verwenden?',
	tool_utm_faq_a5:
		'utm_term identifiziert Keywords bezahlter Suche, nützlich für Google Ads. utm_content unterscheidet zwei Links oder Anzeigen zur selben URL, etwa einen Header-Banner und einen Footer-Link.',
	tool_utm_faq_q6: 'Wird meine URL irgendwohin gesendet?',
	tool_utm_faq_a6: 'Nein. Der Builder läuft komplett in deinem Browser und nichts wird hochgeladen.',
	tool_utm_references: 'Google Analytics – Benutzerdefinierte Kampagnen (UTM); Google Search Central – URL-Parameter.',
	tool_utm_ref_ga_label: 'Google Analytics – Benutzerdefinierte Kampagnen (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central – URL-Parameter',
};

export default de;
