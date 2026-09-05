/**
 * i18n tool shard (json-schema-validator / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_json_schema_validator_article:
    'Validez du JSON avec un Schema draft-07 dans le navigateur. Les échecs affichent des JSON Pointer pour corriger une sortie modèle ou un feed sans envoyer vos données.',
  tool_json_schema_validator_bad_instance: "L'instance n'est pas un JSON valide.",
  tool_json_schema_validator_bad_schema: "Le Schema n'est pas un JSON valide (ou la compilation a échoué).",
  tool_json_schema_validator_clear: 'Effacer',
  tool_json_schema_validator_copy_done: 'Copié',
  tool_json_schema_validator_copy_errors: 'Copier les erreurs',
  tool_json_schema_validator_desc:
    'Validez du JSON avec un Schema et des erreurs JSON Pointer — draft-07 local.',
  tool_json_schema_validator_description:
    'Validez du JSON contre un JSON Schema (draft-07) dans le navigateur. Étapes : collez Schema et instance, validez, puis lisez chaque échec via son JSON Pointer. Exemple : un produit sans price échoue avec missingProperty. Le texte reste dans l’onglet ; Ajv ne charge que du code depuis un CDN.',
  tool_json_schema_validator_draft_note: 'Moteur : Ajv 8 · JSON Schema draft-07 (par défaut).',
  tool_json_schema_validator_empty: 'Collez d’abord le Schema et le JSON d’instance.',
  tool_json_schema_validator_example:
    'Le Schema exige sku (chaîne) et price (nombre ≥ 0). Valide : {"sku":"A-1","price":9.5}. Échec : {"sku":"A-1"} — missingProperty pour price à la racine (/).',
  tool_json_schema_validator_example_title: 'Exemple',
  tool_json_schema_validator_fail: 'Échec — voir les chemins ci-dessous',
  tool_json_schema_validator_faq_a1:
    'Causes fréquentes : clés required manquantes, mauvais types, ou additionalProperties:false. Lisez le Pointer et le message du mot-clé.',
  tool_json_schema_validator_faq_a2:
    'instancePath est un JSON Pointer dans l’instance (vide affiché comme /). Si une propriété required manque, Ajv ajoute missingProperty dans params.',
  tool_json_schema_validator_faq_a3:
    'Cette page utilise le dialecte draft-07 d’Ajv. Les drafts 2019-09 / 2020-12 demandent d’autres builds et ne sont pas choisis ici.',
  tool_json_schema_validator_faq_a4:
    'Votre Schema et votre JSON ne sont pas envoyés. Le CDN ne télécharge que le code Ajv.',
  tool_json_schema_validator_faq_a5:
    'Collez Schema et JSON du modèle, validez, corrigez chaque Pointer jusqu’à la réussite — utile avant d’envoyer une sortie structurée plus loin.',
  tool_json_schema_validator_faq_q1: 'Pourquoi la validation a-t-elle échoué ?',
  tool_json_schema_validator_faq_q2: 'Comment lire une erreur JSON Pointer ?',
  tool_json_schema_validator_faq_q3: 'Quel draft utilise cette page ?',
  tool_json_schema_validator_faq_q4: 'Mon JSON quitte-t-il le navigateur ?',
  tool_json_schema_validator_faq_q5: 'Comment contrôler une sortie structurée de LLM ?',
  tool_json_schema_validator_how_body:
    'Collez le Schema à gauche et l’instance à droite. Ajv (draft-07) compile, valide et liste chaque erreur avec un JSON Pointer. Des exemples en échec et valides sont disponibles ; la page charge l’exemple en échec à l’ouverture.',
  tool_json_schema_validator_how_item_1: 'Collez un JSON Schema (draft-07) à gauche.',
  tool_json_schema_validator_how_item_2: 'Collez l’instance JSON à droite.',
  tool_json_schema_validator_how_item_3: 'Cliquez sur Valider.',
  tool_json_schema_validator_how_item_4: 'Corrigez chaque erreur via le chemin JSON Pointer.',
  tool_json_schema_validator_how_title: 'Fonctionnement',
  tool_json_schema_validator_instance_label: 'JSON d’instance',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    'Collage très volumineux (>200k caractères au total). Peut être lent — essayez un extrait plus court.',
  tool_json_schema_validator_need_lib: 'Impossible de charger Ajv. Vérifiez la connexion et actualisez.',
  tool_json_schema_validator_pass: 'Valide — l’instance correspond au Schema',
  tool_json_schema_validator_result_label: 'Résultat',
  tool_json_schema_validator_rules_body:
    'Sur cette page : parser → compiler le Schema draft-07 → valider l’instance → émettre des Pointers.',
  tool_json_schema_validator_rules_item_1:
    'Parse : les deux panneaux doivent passer JSON.parse. Les erreurs de syntaxe/compilation sont séparées des échecs de validation.',
  tool_json_schema_validator_rules_item_2:
    'Validation : allErrors collecte tous les échecs. Chaque ligne = instancePath + message (+ missingProperty si pertinent).',
  tool_json_schema_validator_rules_item_3:
    'Draft : dialecte draft-07. Ne supposez pas les mots-clés 2020-12 ici.',
  tool_json_schema_validator_rules_item_4:
    'Confidentialité : le collage reste dans l’onglet. Le CDN ne charge que le code Ajv.',
  tool_json_schema_validator_rules_title: 'Règles à prévoir',
  tool_json_schema_validator_sample_fail: 'Exemple en échec',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: 'Exemple valide',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'Validateur JSON Schema — Chemins draft-07 et local',
  tool_json_schema_validator_usecase_1:
    'IA / agents : vérifier si le JSON structuré du modèle omet des champs avant de lui faire confiance.',
  tool_json_schema_validator_usecase_2:
    'Feeds commerce : valider le JSON produit contre un Schema avant import.',
  tool_json_schema_validator_usecase_3:
    'Débogage API : coller un corps requête/réponse sur un fragment de Schema du contrat.',
  tool_json_schema_validator_usecases_title: 'Bons cas d’usage',
  tool_json_schema_validator_validate: 'Valider',
};
export default fr;
