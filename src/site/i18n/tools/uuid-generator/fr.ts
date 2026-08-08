/**
 * i18n tool shard (uuid-generator / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_uuid_generator_article:
    'Générez des identifiants UUID v4 ou ULID en local avec une randomisation cryptographique. Copiez des lots pour données de test, trace IDs ou stubs de schéma — rien n\'est envoyé.',
  tool_uuid_generator_clear: 'Effacer',
  tool_uuid_generator_copy_all: 'Tout copier',
  tool_uuid_generator_copy_done: 'Copié',
  tool_uuid_generator_count_label: 'Quantité (1–100)',
  tool_uuid_generator_desc: 'Générez UUID v4 et ULID en local — jusqu\'à 100, copie en un clic.',
  tool_uuid_generator_description:
    'Générez des chaînes UUID v4 ou ULID dans votre navigateur. Étapes : choisissez le type, réglez la quantité (1–100), cliquez Générer, copiez tout. Exemple : trois UUID v4 style RFC comme `550e8400-e29b-41d4-a716-446655440000`. Utilise crypto.getRandomValues — les IDs restent sur votre appareil.',
  tool_uuid_generator_example:
    'UUID v4 (minuscules, avec tirets) : `550e8400-e29b-41d4-a716-446655440000`. ULID (26 car. Crockford Base32, préfixe triable) : `01ARZ3NDEKTSV4RRFFQ69G5FAV`. Charger l\'exemple remplit trois v4 fixes pour vérifier le format.',
  tool_uuid_generator_example_title: 'Exemple',
  tool_uuid_generator_faq_a1:
    'UUID v4 = 128 bits aléatoires (nibble de version fixe), adaptés aux IDs opaques. ULID ajoute un préfixe horodaté en ms et se trie lexicographiquement par création — pratique pour logs et bases voulant des clés temporelles sans entier séquentiel.',
  tool_uuid_generator_faq_a2:
    'Pas de garantie d\'unicité globale. Les IDs utilisent crypto.getRandomValues (ou randomUUID). Imprévisibles en pratique, mais votre app doit gérer les collisions si le domaine l\'exige.',
  tool_uuid_generator_faq_a3:
    'Lot plafonné à 100 par clic pour garder la page réactive. Relancez Générer pour d\'autres lots.',
  tool_uuid_generator_faq_a4:
    'Pas d\'envoi ni de génération côté serveur. Tout se passe dans l\'onglet du navigateur.',
  tool_uuid_generator_faq_a5:
    'UUID v4 : 36 caractères avec tirets, hex minuscules. ULID : 26 caractères Crockford Base32 majuscules, sans tirets.',
  tool_uuid_generator_faq_q1: 'UUID v4 vs ULID — lequel choisir ?',
  tool_uuid_generator_faq_q2: 'Les IDs sont-ils cryptographiquement sûrs ?',
  tool_uuid_generator_faq_q3: 'Pourquoi le lot est limité à 100 ?',
  tool_uuid_generator_faq_q4: 'Les IDs quittent-ils le navigateur ?',
  tool_uuid_generator_faq_q5: 'Quel format de sortie ?',
  tool_uuid_generator_generate: 'Générer',
  tool_uuid_generator_how_body:
    'Choisissez UUID v4 pour des UUID aléatoires standard ou ULID pour des IDs de 26 caractères triables dans le temps. Réglez le nombre (1–100) puis Générer. Tout copier met un ID par ligne. Les octets aléatoires viennent du CSPRNG du navigateur.',
  tool_uuid_generator_how_title: 'Fonctionnement',
  tool_uuid_generator_output_label: 'IDs générés',
  tool_uuid_generator_rules_body:
    'Différences de format et limites pratiques quand vous collez des IDs dans du code ou une base.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 suit RFC 4122 : `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` avec bits de variante ; hex minuscules.',
  tool_uuid_generator_rules_item_2:
    'ULID compacte timestamp Unix ms 48 bits + 80 bits aléatoires en 26 car. Crockford Base32 (sans I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'Cet outil ne garantit pas l\'unicité entre machines ou dans le temps — traitez la sortie comme des échantillons aléatoires forts, pas un service d\'IDs distribué.',
  tool_uuid_generator_rules_item_4:
    'Confidentialité : pas d\'appel réseau pour générer ; les IDs ne quittent l\'appareil que si vous les copiez.',
  tool_uuid_generator_rules_title: 'Règles à connaître',
  tool_uuid_generator_sample: 'Charger l\'exemple',
  tool_uuid_generator_title: 'Générateur UUID et ULID — créer des identifiants dans le navigateur',
  tool_uuid_generator_type_label: 'Type d\'ID',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'Peupler une base de dev avec des clés primaires opaques avant d\'importer des fixtures.',
  tool_uuid_generator_usecase_2: 'Créer un lot de trace ou correlation IDs pour tests d\'intégration.',
  tool_uuid_generator_usecase_3: 'Prototyper des APIs acceptant des identifiants ULID triables dans le corps de requête.',
  tool_uuid_generator_usecases_title: 'Cas d\'usage adaptés',
};
export default fr;
