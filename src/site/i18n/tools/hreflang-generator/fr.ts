/**
 * i18n tool shard (hreflang-generator / fr).
 * Français — réécriture indépendante orientée recherche locale.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_hreflang_home_title: 'Générateur hreflang',
	tool_hreflang_home_desc:
		'Indiquez à Google quelle version linguistique afficher à qui — convertissez des URLs de langue en balises hreflang, en en-tête HTTP Link et en balisage sitemap depuis votre navigateur.',
	tool_hreflang_title: 'Générateur hreflang — créez des balises pour sites multilingues',
	tool_hreflang_description:
		'Sans hreflang, Google peut considérer vos pages traduites comme dupliquées et afficher la version dans la mauvaise langue dans les résultats. Convertissez un ensemble d’URLs de langue en balisage hreflang sous trois formes : balises <link>, en-tête HTTP Link et sitemap <xhtml:link>. Étapes : collez chaque URL de langue avec son code, choisissez une forme et copiez l’extrait généré. Chaque URL reçoit sa propre annotation d’autoréférence, et un repli x-default facultatif peut être ajouté. Fonctionne entièrement sur votre appareil : rien n’est envoyé. Exemple : trois versions d’une page en en, es et ja.',
	tool_hreflang_input_label: 'Liste d’URLs par langue',
	tool_hreflang_input_ph:
		'Une paire par ligne : code de langue + URL. Exemple :\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'Chaque ligne suit le format « code-langue URL » ou « URL code-langue ». Les codes utilisent la forme BCP 47, comme en, en-US ou zh-Hans.',
	tool_hreflang_xdefault_label: 'URL de repli x-default',
	tool_hreflang_xdefault_none: '— sans x-default —',
	tool_hreflang_xdefault_hint:
		'Facultatif. x-default indique à Google quelle version afficher quand aucune langue ne correspond, utile pour une racine ou une page d’accueil anglaise.',
	tool_hreflang_generate: 'Générer',
	tool_hreflang_sample: 'Charger un exemple',
	tool_hreflang_clear: 'Effacer',
	tool_hreflang_copy: 'Copier',
	tool_hreflang_copied: 'Copié',
	tool_hreflang_error_prefix: 'Erreur : ',
	tool_hreflang_url_protocol: 'Une URL n’avait pas de protocole — https:// a été ajouté automatiquement.',
	tool_hreflang_lang_invalid: 'Code de langue invalide : {lang}. Utilisez la forme BCP 47, comme en, en-US ou zh-Hans.',
	tool_hreflang_no_valid_rows: 'Aucune ligne valide. Ajoutez au moins un code de langue et une URL.',
	tool_hreflang_output_label: 'Balisage généré',
	tool_hreflang_tab_link: 'Balises <link>',
	tool_hreflang_tab_http: 'En-tête HTTP Link',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'Comment ça marche',
	tool_hreflang_how_body:
		'Le générateur analyse chaque ligne en un code de langue et une URL, puis rend le même ensemble de relations sous trois formes. La forme <link> se place dans le <head> de chaque page. La forme d’en-tête HTTP Link est envoyée dans la réponse du serveur. La forme sitemap intègre <xhtml:link> dans chaque bloc <url>. Chaque URL reçoit une annotation hreflang d’autoréférence, et l’entrée x-default facultative couvre les visiteurs dont la langue n’est pas listée.',
	tool_hreflang_rules_title: 'Règles utilisées par le générateur',
	tool_hreflang_rules_body: 'Ces règles proviennent de Google Search Central et de la norme BCP 47 de tags de langue.',
	tool_hreflang_rules_item_1:
		'Chaque version linguistique doit inclure une annotation hreflang d’autoréférence qui pointe vers sa propre URL. L’omettre affaiblit le signal.',
	tool_hreflang_rules_item_2:
		'Chaque URL doit être listée depuis toutes les versions : l’ensemble complet des alternatives apparaît sur chaque page, pas seulement dans un sens.',
	tool_hreflang_rules_item_3:
		'Les codes de langue utilisent BCP 47 : une langue de deux lettres, éventuellement une région (en-US) et éventuellement un système d’écriture (zh-Hans). x-default est le code de repli spécial.',
	tool_hreflang_rules_item_4:
		'x-default pointe vers la page affichée quand aucune langue listée ne correspond, par exemple une racine anglaise. Google peut l’utiliser comme repli pour toutes les langues non détectées.',
	tool_hreflang_rules_item_5:
		'Choisissez une seule forme de diffusion par ensemble : les balises <link> dans le HTML, l’en-tête HTTP Link ou le xhtml:link dans le sitemap. Ne mélangez pas les formes pour le même ensemble, sinon les signaux peuvent se contredire.',
	tool_hreflang_example_title: 'Exemple',
	tool_hreflang_example:
		'L’exemple liste trois versions d’une page : https://example.com/ (en), https://example.com/es/ (es) et https://example.com/ja/ (ja). Les balises <link> générées incluent les autoréférences de chaque langue, plus un x-default facultatif pointant vers la racine anglaise.',
	tool_hreflang_usecases_title: 'Bonnes utilisations',
	tool_hreflang_usecase_1:
		'Lancer un site multilingue : générez les balises <link> une fois par gabarit et vérifiez que chaque version liste l’ensemble complet.',
	tool_hreflang_usecase_2:
		'Après une restructuration du site, régénérez le balisage pour que le mappage des URLs reste cohérent entre les langues.',
	tool_hreflang_usecase_3:
		'Quand les résultats de recherche affichent la mauvaise langue, vérifiez que les autoréférences et x-default existent et que les URLs pointent vers des pages canoniques.',
	tool_hreflang_faq_q1: 'Laquelle des trois formes dois-je utiliser ?',
	tool_hreflang_faq_a1:
		'Utilisez les balises <link> si vous pouvez modifier le HTML. Utilisez l’en-tête HTTP Link quand les pages sont servies par un serveur que vous contrôlez et que le HTML est difficile à changer. Utilisez la forme sitemap si vous préférez la garder dans le sitemap XML.',
	tool_hreflang_faq_q2: 'Quand ajouter x-default ?',
	tool_hreflang_faq_a2:
		'x-default indique à Google quelle version afficher quand la langue du visiteur ne correspond à aucun code listé. Ajoutez-le quand vous avez une page racine ou de repli, généralement en anglais.',
	tool_hreflang_faq_q3: 'Chaque URL a-t-elle besoin d’une hreflang d’autoréférence ?',
	tool_hreflang_faq_a3:
		'Oui. Chaque version linguistique doit inclure sa propre URL dans l’ensemble, avec une hreflang d’autoréférence qui pointe vers elle-même. Google utilise l’ensemble complet pour choisir la bonne page par langue.',
	tool_hreflang_faq_q4: 'Quel format de code de langue est valide ?',
	tool_hreflang_faq_a4:
		'Les codes BCP 47 : une langue de deux ou trois lettres, éventuellement une région (en-US) et éventuellement un système d’écriture (zh-Hans). La langue en minuscules, sans inventer de codes comme « en-us-en ».',
	tool_hreflang_faq_q5: 'Hreflang va-t-il dans <head> ou dans le sitemap ?',
	tool_hreflang_faq_a5:
		'Les deux fonctionnent, mais utilisez une seule forme cohérente par ensemble de pages. Les balises <link> vont dans <head>, l’en-tête HTTP Link est envoyé avec la réponse et le sitemap utilise des blocs xhtml:link.',
	tool_hreflang_faq_q6: 'Mes URLs sont-elles envoyées quelque part ?',
	tool_hreflang_faq_a6: 'Non. Le générateur fonctionne entièrement dans votre navigateur et rien n’est envoyé.',
	tool_hreflang_references: 'Google Search Central — Versions localisées (hreflang) ; tags de langue BCP 47.',
	tool_hreflang_ref_searchcentral_label: 'Search Central — Versions localisées (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — Tags pour identifier les langues',
};

export default fr;
