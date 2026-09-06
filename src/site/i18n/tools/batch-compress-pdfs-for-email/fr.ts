/**
 * Fragment i18n (batch-compress-pdfs-for-email / fr).
 * H1 suit la recherche « Compresser des PDF pour e-mail en lot ».
 */
import type { SiteLangDict } from '../../../types';

/** Français : plusieurs pièces jointes rapetissées chacune, puis un ZIP. */
const fr: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'Avant l\'envoi, rapetissez plusieurs devis ou scans dans cet onglet. Dans le ZIP ce sont encore des PDF séparés, pas un seul livret. Un fichier chiffré ou trop lourd est sauté, le reste se télécharge. Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur.',
	tool_batch_compress_pdfs_for_email_choose_files: 'Choisir des PDF',
	tool_batch_compress_pdfs_for_email_chip_email: 'Préréglage e-mail',
	tool_batch_compress_pdfs_for_email_chip_max: 'Réduire au maximum',
	tool_batch_compress_pdfs_for_email_chip_print: 'Préréglage impression',
	tool_batch_compress_pdfs_for_email_clear: 'Effacer',
	tool_batch_compress_pdfs_for_email_col_after: 'Après',
	tool_batch_compress_pdfs_for_email_col_before: 'Avant',
	tool_batch_compress_pdfs_for_email_col_name: 'Fichier',
	tool_batch_compress_pdfs_for_email_col_status: 'Statut',
	tool_batch_compress_pdfs_for_email_compress: 'Tout compresser',
	tool_batch_compress_pdfs_for_email_desc:
		'Compresser des PDF pour e-mail en lot : chaque fichier rapetisse tout seul et le ZIP garde plusieurs PDF ; restent sur l\'appareil, pas envoyés vers un serveur.',
	tool_batch_compress_pdfs_for_email_description:
		'Compresser des PDF pour e-mail en lot : ajoutez plusieurs devis ou scans, appliquez le préréglage e-mail à chaque fichier, sautez ceux qui sont chiffrés ou trop lourds, téléchargez un ZIP de PDF séparés — pas un livret fusionné. Étapes : choisissez la pile, gardez le préréglage e-mail, tout compresser, lisez les octets économisés. Exemple : deux petits PDF d\'exemple restent deux fichiers dans le ZIP. Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur.',
	tool_batch_compress_pdfs_for_email_download_zip: 'Télécharger le ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: 'Déposez des PDF (jusqu\'à 20). Chaque fichier est compressé tout seul. Le travail reste dans cet onglet.',
	tool_batch_compress_pdfs_for_email_empty: 'Ajoutez d\'abord des PDF.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'Protégé par mot de passe. Ignoré.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'Ce navigateur n\'a pas pu monter le ZIP. Essayez-en un plus récent.',
	tool_batch_compress_pdfs_for_email_err_load: 'Impossible de lire ce PDF. Ignoré.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'La bibliothèque PDF n\'a pas chargé. Essayez un navigateur actuel.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js n\'a pas chargé. Essayez un navigateur actuel.',
	tool_batch_compress_pdfs_for_email_err_too_many: '20 PDF au plus. Les autres n\'ont pas été ajoutés.',
	tool_batch_compress_pdfs_for_email_example:
		'Charger un exemple crée deux petits PDF avec une page image, applique le préréglage e-mail à chacun, laisse deux fichiers dans le ZIP et affiche les octets économisés.',
	tool_batch_compress_pdfs_for_email_example_title: 'Exemple',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'Non. Le tramage et le remontage se font dans cet onglet. Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur. pdf.js, pdf-lib et l\'aide ZIP peuvent venir de ce site ; vos PDF ne quittent pas l\'onglet.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'Non. Vous obtenez un ZIP de N PDF. Les coller en un livret, c\'est Fusionner PDF — un autre travail, pas cette page.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'Les scans avec photos rapetissent souvent. Un PDF de texte seul bouge parfois à peine. Le tableau montre avant et après.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'Compresser un PDF traite un fichier. Cette page partage un préréglage e-mail sur une pile et met les réussites dans un ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'Cette ligne est sautée, le reste continue. Déverrouillez-le ailleurs, puis ajoutez-le à nouveau.',
	tool_batch_compress_pdfs_for_email_faq_q1: 'Mes PDF partent-ils vers un serveur ?',
	tool_batch_compress_pdfs_for_email_faq_q2: 'Est-ce que tout est fusionné en un seul PDF ?',
	tool_batch_compress_pdfs_for_email_faq_q3: 'Les scans rapetissent-ils plus que le texte ?',
	tool_batch_compress_pdfs_for_email_faq_q4: 'Quelle différence avec Compresser un PDF ?',
	tool_batch_compress_pdfs_for_email_faq_q5: 'Et si un fichier est chiffré ?',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} PDF dans la file',
	tool_batch_compress_pdfs_for_email_how_body:
		'Mettez plusieurs pièces jointes, choisissez le préréglage e-mail, compressez chaque fichier à part, puis emportez un ZIP de ceux qui ont réussi.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'Choisissez les devis ou scans qui doivent passer le plafond de pièce jointe.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'Gardez le préréglage e-mail sauf si vous voulez Impression (plus net) ou Réduire au maximum.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'Appuyez sur Tout compresser. Les fichiers restent séparés. Rien n\'est collé en un livret.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'Chiffrés ou cassés sont sautés. Le résumé additionne les octets économisés sur les réussites.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'Téléchargez le ZIP dès qu\'au moins un fichier a réussi. Un seul PDF ? Utilisez Compresser un PDF.',
	tool_batch_compress_pdfs_for_email_how_title: 'Comment compresser le lot pour l\'e-mail',
	tool_batch_compress_pdfs_for_email_preset_label: 'Préréglage partagé',
	tool_batch_compress_pdfs_for_email_rules_body:
		'Chaque PDF est tramé en pages JPEG puis remonté. La sortie est toujours un ZIP de PDF séparés.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'E-mail est le défaut : échelle vers 1.0 et JPEG vers 0.55. Impression est plus doux. Le maximum rapetisse davantage.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'Chiffré, abîmé ou sans mémoire saute seulement cette ligne. Les noms en double dans le ZIP deviennent nom (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'Un fichier de texte seul peut à peine rapetisser. C\'est attendu ; le tableau affiche quand même les tailles.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur.',
	tool_batch_compress_pdfs_for_email_rules_title: 'Ce qu\'il faut attendre',
	tool_batch_compress_pdfs_for_email_sample: 'Charger un exemple',
	tool_batch_compress_pdfs_for_email_status_compressing: 'Compression de chaque PDF pour l\'e-mail…',
	tool_batch_compress_pdfs_for_email_status_done: 'Lot terminé — vérifiez le tableau, puis téléchargez le ZIP.',
	tool_batch_compress_pdfs_for_email_status_ok: 'Compressé',
	tool_batch_compress_pdfs_for_email_status_skip: 'Ignoré',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} prêts · {skip} ignorés · économisé {saved}',
	tool_batch_compress_pdfs_for_email_title: 'Compresser des PDF pour e-mail en lot',
	tool_batch_compress_pdfs_for_email_usecase_1: 'Une pile de devis qui, ensemble, dépassent le plafond 25 Mo de la boîte.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'Envoyer des reçus scannés en pièces jointes séparées, pas en un livret.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'Rapetisser plusieurs PDF avant l\'e-mail sans les fusionner.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'Quand ça aide',
	tool_batch_compress_pdfs_for_email_warn_large: 'Un fichier dépasse 40 Mo — cet onglet peut manquer de mémoire sur cette ligne.',
};

export default fr;
