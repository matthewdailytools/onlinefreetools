/**
 * i18n tool shard (csv-json / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_csv_json_article:
    'CSV ↔ JSON bidirectionnel avec des règles claires de types, séparateur et guillemets, et la façon dont le JSON imbriqué est aplati en colonnes. Pensé pour l’échange tableur ↔ API, pas pour une URL vide de plus.',
  tool_csv_json_clear: 'Effacer',
  tool_csv_json_convert: 'Convertir',
  tool_csv_json_copy_csv: 'Copier CSV',
  tool_csv_json_copy_done: 'Copié',
  tool_csv_json_copy_json: 'Copier JSON',
  tool_csv_json_csv_input_label: 'Entrée CSV',
  tool_csv_json_csv_output_label: 'Sortie CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\\nA-001,"Chair, oak",129.9\\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'Détection auto',
  tool_csv_json_delimiter_comma: 'Virgule ,',
  tool_csv_json_delimiter_label: 'Séparateur',
  tool_csv_json_delimiter_semicolon: 'Point-virgule ;',
  tool_csv_json_delimiter_tab: 'Tabulation',
  tool_csv_json_description:
    'Convertissez CSV en JSON ou JSON en CSV dans votre navigateur. Étapes : choisissez le sens, collez ou importez, réglez le séparateur et l’en-tête, puis copiez ou téléchargez. Gère les champs entre guillemets avec virgules, points-virgules et tabulations ; de JSON vers CSV, les objets imbriqués sont aplatis en colonnes. Exemple : transformez une feuille produits (sku, titre, prix) en tableau JSON — les données restent locales.',
  tool_csv_json_dir_label: 'Sens de conversion',
  tool_csv_json_download_csv: 'Télécharger CSV',
  tool_csv_json_download_json: 'Télécharger JSON',
  tool_csv_json_empty: 'Collez d’abord du contenu.',
  tool_csv_json_example:
    'Le CSV `sku,title,price` avec la ligne `A-001,"Chair, oak",129.9` devient JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (sans types, price reste du texte ; activez-les pour le nombre 129.9). Inversement : `[{"sku":"A-001","dim":{"w":40,"h":90}}]` génère l’en-tête `sku,dim.w,dim.h` avec la ligne `A-001,40,90`.',
  tool_csv_json_example_title: 'Exemple',
  tool_csv_json_faq_a1:
    'Oui. Choisissez virgule, point-virgule ou tabulation, ou laissez la détection auto : Papa Parse devine d’après le texte. Le point-virgule est fréquent dans les exports Excel européens ; la tabulation correspond au TSV.',
  tool_csv_json_faq_a2:
    'Par défaut chaque cellule reste du texte, donc 007 et les identifiants longs sont préservés. Avec « Inférer les types », les valeurs numériques deviennent des nombres : 007 devient 7 et les très longues suites de chiffres peuvent perdre en précision. Laissez désactivé pour SKU, codes postaux et téléphones.',
  tool_csv_json_faq_a3:
    'Ils sont entourés de guillemets doubles et les guillemets internes sont doublés, selon la RFC 4180. Un titre comme Chair, oak reste ainsi dans un seul champ au lieu d’être coupé en deux colonnes.',
  tool_csv_json_faq_a4:
    'Les objets sont aplatis en colonnes à chemin pointé (dim.w, dim.h). Les tableaux deviennent une chaîne JSON dans une seule cellule. Les colonnes sont l’union des clés de tous les enregistrements et les valeurs manquantes restent vides.',
  tool_csv_json_faq_a5:
    'Non. L’analyse reste dans cet onglet et les fichiers choisis sont lus en local. Un CDN peut servir Papa Parse ; cette requête ne télécharge que du code, elle n’envoie pas votre CSV ni votre JSON.',
  tool_csv_json_faq_q1: 'Le point-virgule ou la tabulation sont-ils gérés, pas seulement la virgule ?',
  tool_csv_json_faq_q2: 'Mes nombres, zéros initiaux et identifiants restent-ils intacts ?',
  tool_csv_json_faq_q3: 'Comment sont gérés les champs avec virgules, guillemets ou sauts de ligne ?',
  tool_csv_json_faq_q4: 'Comment le JSON imbriqué devient-il des colonnes CSV ?',
  tool_csv_json_faq_q5: 'Mes données quittent-elles le navigateur ?',
  tool_csv_json_header: 'Première ligne = en-têtes',
  tool_csv_json_how_body:
    'Choisissez CSV → JSON ou JSON → CSV ; l’analyse et la génération se font ici avec Papa Parse. En CSV, choisissez le séparateur (ou détection auto), si la première ligne est un en-tête et si les nombres/booléens sont inférés. En JSON, les objets imbriqués deviennent des colonnes en chemin pointé et les colonnes sont l’union de toutes les clés.',
  tool_csv_json_how_title: 'Comment ça marche',
  tool_csv_json_indent_2: '2 espaces',
  tool_csv_json_indent_4: '4 espaces',
  tool_csv_json_indent_label: 'Indentation',
  tool_csv_json_indent_minify: 'Minifier le JSON',
  tool_csv_json_json_input_label: 'Entrée JSON',
  tool_csv_json_json_output_label: 'Sortie JSON',
  tool_csv_json_json_placeholder: '[\\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\\n]',
  tool_csv_json_large_warn:
    'Entrée très volumineuse (plus de 2 millions de caractères). La conversion peut être lente ; essayez un fichier plus petit.',
  tool_csv_json_need_lib: 'Impossible de charger Papa Parse. Vérifiez votre connexion et rechargez.',
  tool_csv_json_rules_body:
    'À quoi s’attendre lors de la conversion : comment les types de cellule sont traités, quels séparateurs et guillemets s’appliquent, et comment le JSON imbriqué correspond aux colonnes.',
  tool_csv_json_rules_item_1:
    'Types : les cellules CSV sont du texte par défaut. Activez « Inférer les types » pour des nombres/booléens, mais 007 devient 7 et les longues suites de chiffres peuvent perdre en précision ; laissez désactivé pour SKU, codes postaux et téléphones.',
  tool_csv_json_rules_item_2:
    'Séparateurs : virgule, point-virgule (fréquent dans Excel européen) et tabulation (TSV) ; la détection auto devine d’après le texte. Les champs contenant le séparateur, des guillemets ou des sauts de ligne sont entourés de guillemets doubles selon la RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV : les objets sont aplatis en chemins pointés (dim.w, dim.h) ; les tableaux deviennent une chaîne JSON dans une cellule ; les colonnes sont l’union de toutes les clés, les valeurs manquantes restent vides.',
  tool_csv_json_rules_item_4:
    'Confidentialité : votre texte et vos fichiers ne sont pas envoyés. Charger Papa Parse depuis un CDN ne télécharge que le code de la bibliothèque, pas vos données.',
  tool_csv_json_rules_title: 'Règles à prévoir',
  tool_csv_json_sample: 'Charger un exemple',
  tool_csv_json_sample_csv: 'sku,title,price\\nA-001,"Chair, oak",129.9\\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\\n  {"sku":"A-002","title":"Desk","price":89}\\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'Convertisseur CSV ↔ JSON — types, séparateur, local',
  tool_csv_json_typing: 'Inférer les types (nombres/booléens)',
  tool_csv_json_usecase_1:
    'E-commerce : transformez une feuille produits exportée (sku, titre, prix) en tableau JSON pour l’API d’une boutique ou d’une marketplace.',
  tool_csv_json_usecase_2: 'Développeurs : reformatez une réponse JSON en CSV pour tableur, rapprochement ou livraison.',
  tool_csv_json_usecase_3:
    'Data/ops : passez un CSV de rapports ou d’événements (virgule, point-virgule ou TSV) en JSON pour un pipeline, virgules et sauts de ligne bien échappés.',
  tool_csv_json_usecases_title: 'Bons cas',
};
export default fr;
