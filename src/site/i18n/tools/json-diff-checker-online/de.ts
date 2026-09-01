/**
 * i18n（json-diff-checker-online / de）。
 * H1: JSON-Diff online prüfen.
 * Schlüsselreihenfolge standardmäßig ignoriert; kein YAML/XML.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'Zwei JSON-Werte einfügen und Pfad-Änderungen auflisten. Die Schlüsselreihenfolge wird standardmäßig ignoriert. Der Text bleibt auf Ihrem Gerät und wird nicht hochgeladen. YAML und XML werden hier nicht geparst.',
	tool_json_diff_checker_online_array_as_set: 'Arrays als Mengen behandeln (Reihenfolge egal)',
	tool_json_diff_checker_online_clear: 'Leeren',
	tool_json_diff_checker_online_compare: 'Vergleichen',
	tool_json_diff_checker_online_desc:
		'JSON-Diff online prüfen: zwei JSON-Werte pfadweise vergleichen, Schlüsselreihenfolge standardmäßig ignorieren — bleibt auf dem Gerät.',
	tool_json_diff_checker_online_description:
		'JSON-Diff online prüfen, im Browser. Ablauf: zwei JSON-Werte einfügen, parsen, optional die Objektschlüssel-Reihenfolge ignorieren (standardmäßig an), dann Hinzufügungen, Löschungen und Änderungen je Pfad listen. Der eingefügte Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen. Beispiel: {"b":1,"a":2} und {"a":2,"b":1} stimmen überein; ändert sich price, erscheint /price. Kein YAML- oder XML-Prüfer.',
	tool_json_diff_checker_online_empty: 'JSON auf beiden Seiten einfügen oder das Beispiel laden.',
	tool_json_diff_checker_online_err_bad_a: 'Die linke Seite ist kein gültiges JSON.',
	tool_json_diff_checker_online_err_bad_b: 'Die rechte Seite ist kein gültiges JSON.',
	tool_json_diff_checker_online_example:
		'Das linke Beispiel listet sku, dann price; rechts steht price zuerst und 9.5 wird zu 10. Mit ignorierter Schlüsselreihenfolge erscheint nur /price. Schon beim ersten Anzeigen steht dieser Pfad.',
	tool_json_diff_checker_online_example_title: 'Beispiel',
	tool_json_diff_checker_online_faq_a1:
		'Nein. Der Text wird in diesem Tab mit JSON.parse gelesen. Nichts wird auf unsere Server hochgeladen.',
	tool_json_diff_checker_online_faq_a2:
		'Standardmäßig gelten {"a":1,"b":2} und {"b":2,"a":1} als dasselbe Objekt. „Schlüsselreihenfolge ignorieren“ abschalten, wenn die Schreibreihenfolge zählt.',
	tool_json_diff_checker_online_faq_a3:
		'Arrays sind Listen nach Index. [1,2] gegen [2,1] ist eine Änderung. „Arrays als Mengen“ nur, wenn die Reihenfolge egal sein soll.',
	tool_json_diff_checker_online_faq_a4:
		'Manche suchen json diff checker ohne „online“ — dieselbe Aufgabe. YAML oder XML braucht eine andere Seite (YAML zuerst umwandeln, falls nötig).',
	tool_json_diff_checker_online_faq_q1: 'Wird mein JSON hochgeladen?',
	tool_json_diff_checker_online_faq_q2: 'Zählt die Schlüsselreihenfolge als Unterschied?',
	tool_json_diff_checker_online_faq_q3: 'Wie werden Arrays verglichen?',
	tool_json_diff_checker_online_faq_q4: 'Ist das derselbe JSON Diff Checker bzw. ein YAML-/XML-Diff?',
	tool_json_diff_checker_online_how_body:
		'Zwei JSON-Dokumente einfügen und Pfad-Änderungen lesen. Die Schlüsselreihenfolge wird ignoriert, bis Sie das abschalten.',
	tool_json_diff_checker_online_how_item_1: 'Original-JSON links einfügen.',
	tool_json_diff_checker_online_how_item_2: 'Überarbeitetes JSON rechts einfügen.',
	tool_json_diff_checker_online_how_item_3: 'Schlüsselreihenfolge ignorieren anlassen, außer Sie brauchen die Schreibreihenfolge.',
	tool_json_diff_checker_online_how_item_4: 'Vergleichen listet Pfade; Beispiel laden lief schon beim ersten Anzeigen.',
	tool_json_diff_checker_online_how_title: 'So gehen Sie vor',
	tool_json_diff_checker_online_ignore_keys: 'Objektschlüssel-Reihenfolge ignorieren',
	tool_json_diff_checker_online_label_a: 'Original-JSON',
	tool_json_diff_checker_online_label_b: 'Überarbeitetes JSON',
	tool_json_diff_checker_online_load_sample: 'Beispiel laden',
	tool_json_diff_checker_online_no_diff: 'Unter den aktuellen Optionen keine semantischen Unterschiede.',
	tool_json_diff_checker_online_op_added: 'hinzugefügt',
	tool_json_diff_checker_online_op_changed: 'geändert',
	tool_json_diff_checker_online_op_removed: 'entfernt',
	tool_json_diff_checker_online_result_label: 'Pfad-Unterschiede',
	tool_json_diff_checker_online_rules_body:
		'Nach JSON.parse können Objektschlüssel sortiert werden, damit die Schreibreihenfolge keinen Scheinunterschied erzeugt.',
	tool_json_diff_checker_online_rules_item_1:
		'Ungültiges JSON wird je Seite gemeldet. Doppelte Schlüssel folgen JSON.parse (letzter gewinnt, wo der Motor das zulässt).',
	tool_json_diff_checker_online_rules_item_2:
		'Schlüsselreihenfolge ignorieren (standardmäßig an) sortiert Objektschlüssel vor dem Pfadgang.',
	tool_json_diff_checker_online_rules_item_3:
		'Arrays sind Indexlisten, außer Sie behandeln sie als Mengen (dann Sortierung per JSON-stringify).',
	tool_json_diff_checker_online_rules_item_4:
		'YAML und XML werden nicht geparst. YAML bei Bedarf zuerst auf der verwandten YAML-↔-JSON-Seite umwandeln.',
	tool_json_diff_checker_online_rules_title: 'Regeln des Vergleichs',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '{added} hinzugefügt, {removed} entfernt, {changed} geändert',
	tool_json_diff_checker_online_title: 'JSON-Diff online prüfen',
	tool_json_diff_checker_online_usecase_1:
		'API-Beispiele: zwei Antwortkörper, bei denen Pretty-Print die Schlüsselreihenfolge vertauscht.',
	tool_json_diff_checker_online_usecase_2: 'Config-Schnappschüsse: welche Pfade sich zwischen Deploys wirklich geändert haben.',
	tool_json_diff_checker_online_usecase_3: 'Modell-JSON: strukturierte Ausgabe prüfen, bevor sie weitergeht.',
	tool_json_diff_checker_online_usecases_title: 'Wann das passt',
};

export default de;
