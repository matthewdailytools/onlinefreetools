/**
 * i18n tool shard (file-hash / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_file_hash_algo_label: 'Algorithmes',
  tool_file_hash_article:
    'Calculez des empreintes hex MD5 et SHA pour du texte collé ou un fichier local. Comparez checksums de release, empreintes de config ou vérifiez des téléchargements — le hash reste dans le navigateur sauf un chargement ponctuel depuis ce site si vous cochez MD5.',
  tool_file_hash_clear: 'Effacer',
  tool_file_hash_copy: 'Tout copier',
  tool_file_hash_copy_done: 'Copié',
  tool_file_hash_desc:
    'Hash de texte ou fichiers en local — empreintes hex MD5, SHA-1, SHA-256, SHA-384, SHA-512.',
  tool_file_hash_description:
    'Calculez le hash d\'un texte collé ou d\'un fichier local dans votre navigateur. Étapes : choisissez Texte ou Fichier, cochez MD5/SHA, cliquez Hash, copiez l\'hex en minuscules. Exemple : texte `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. Les fichiers sont lus localement ; MD5 charge crypto-js depuis ce site uniquement si sélectionné.',
  tool_file_hash_empty: 'Collez du texte ou choisissez un fichier d\'abord.',
  tool_file_hash_example:
    'Texte `hello` avec SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 du même texte → `5d41402abc4b2a76b9719d911017c592`. Le texte utilise des octets UTF-8 ; les fichiers, des octets bruts.',
  tool_file_hash_example_title: 'Exemple',
  tool_file_hash_faq_a1:
    'MD5 est rapide et encore utilisé pour des checksums hérités (anciennes listes `md5sum`, certains ETag CDN). Pour la sécurité (signatures, mots de passe, preuve d\'altération) préférez SHA-256 ou SHA-512. SHA-1 est déprécié pour les certificats mais peut apparaître dans de vieux artefacts.',
  tool_file_hash_faq_a2:
    'Les gros fichiers sont lus par blocs avec barre de progression. Au-delà de ~100 Mo un avertissement s\'affiche mais nous essayons quand même. Les très gros fichiers peuvent être lents ou saturer la mémoire — pour des archives multi-Go, utilisez un outil desktop.',
  tool_file_hash_faq_a3:
    'Le texte est hashé en octets UTF-8. Un fichier est hashé en flux d\'octets bruts. Les mêmes lettres dans un `.txt` peuvent différer du texte collé si l\'encodage ou les fins de ligne changent.',
  tool_file_hash_faq_a4:
    'Pas d\'envoi. Texte et fichiers restent sur votre appareil. SHA-* utilise Web Crypto. Seul MD5 charge crypto-js depuis ce site — votre contenu n\'est pas envoyé à des tiers.',
  tool_file_hash_faq_a5:
    'Nous affichons de l\'hex en minuscules sans préfixe `0x`, une ligne par algorithme. Cela correspond aux `md5sum` / `sha256sum` courants sous Linux et macOS.',
  tool_file_hash_faq_q1: 'Quand utiliser MD5 plutôt que SHA-256 ?',
  tool_file_hash_faq_q2: 'Comment sont gérés les gros fichiers ?',
  tool_file_hash_faq_q3: 'Le texte collé hash-t-il comme un fichier ?',
  tool_file_hash_faq_q4: 'Mon fichier ou texte est-il envoyé ?',
  tool_file_hash_faq_q5: 'Quel format hex est produit ?',
  tool_file_hash_file_bytes: 'octets',
  tool_file_hash_file_label: 'Choisir un fichier',
  tool_file_hash_hash: 'Hash',
  tool_file_hash_how_body:
    'Choisissez Texte pour hasher un collage (octets UTF-8) ou Fichier pour un fichier local (octets bruts). Cochez un ou plusieurs algorithmes puis Hash. SHA passe par Web Crypto ; MD5 charge une petite bibliothèque au premier usage. Résultats en hex minuscules, une ligne par algorithme.',
  tool_file_hash_how_title: 'Fonctionnement',
  tool_file_hash_input_mode_label: 'Mode d\'entrée',
  tool_file_hash_large_warn:
    'Fichier supérieur à 100 Mo. Le hash peut être lent ou gourmand en mémoire — pensez à un outil desktop pour de très grosses archives.',
  tool_file_hash_md5_fail: 'Impossible de charger la bibliothèque MD5 depuis ce site. Essayez SHA-256 ou vérifiez le réseau.',
  tool_file_hash_no_algo: 'Sélectionnez au moins un algorithme.',
  tool_file_hash_output_label: 'Empreintes hex',
  tool_file_hash_progress_label: 'Lecture du fichier…',
  tool_file_hash_rules_body:
    'Choix d\'algorithme, sémantique des octets et format de sortie — ce qu\'il faut savoir avant de comparer un digest ailleurs.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex (128 bits). SHA-1 → 40 hex. SHA-256 → 64 hex. SHA-384 → 96 hex. SHA-512 → 128 hex. Tout en minuscules, sans préfixe.',
  tool_file_hash_rules_item_2:
    'Mode texte : UTF-8 via `TextEncoder`. Mode fichier : flux complet d\'octets. Un BOM UTF-8 ou CRLF dans le fichier change le digest vs un collage simple.',
  tool_file_hash_rules_item_3:
    'Texte vide ou fichier zéro octet produit le digest standard d\'entrée vide pour chaque algorithme (hex valide).',
  tool_file_hash_rules_item_4:
    'Confidentialité : pas d\'envoi. MD5 est le seul chemin qui récupère crypto-js sur ce site ; SHA-* n\'utilise que Web Crypto intégré.',
  tool_file_hash_rules_title: 'Règles à connaître',
  tool_file_hash_sample: 'Charger l\'exemple',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'Fichier',
  tool_file_hash_tab_text: 'Texte',
  tool_file_hash_text_label: 'Saisie texte',
  tool_file_hash_text_placeholder: 'Collez du texte à hasher en UTF-8…',
  tool_file_hash_title: 'Vérificateur de hash — contrôler les empreintes dans le navigateur',
  tool_file_hash_usecase_1:
    'Release : comparez le SHA-256 d\'un installeur avec la valeur publiée sur la page de téléchargement.',
  tool_file_hash_usecase_2:
    'Config : empreinte d\'un JSON ou d\'un extrait `.env` avant et après déploiement.',
  tool_file_hash_usecase_3:
    'QA hérité : vérifiez qu\'un ancien manifest MD5 correspond encore à l\'artefact reconstruit.',
  tool_file_hash_usecases_title: 'Cas d\'usage adaptés',
};
export default fr;
