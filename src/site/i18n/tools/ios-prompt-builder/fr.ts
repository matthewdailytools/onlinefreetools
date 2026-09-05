/**
 * i18n tool shard (ios-prompt-builder / fr).
 * Recherches locales : « générateur de prompt iOS », « prompt ChatGPT développement iOS ». Terme principal dans le H1 ; termes secondaires (stack Swift, SwiftUI, HIG, VoiceOver, export JSON) dans la description, la FAQ et les cas d’usage.
 * Limites réelles : assemblage dans le navigateur sans requête ; Développer/Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile, quota) et la réponse remplace toute la zone de résultat.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_ios_prompt_builder_article:
		'Mettez un besoin iOS sous forme de prompt prêt à coller : décrivez la fonctionnalité, la stack Swift, l’écran en SwiftUI et les règles d’accessibilité des HIG ; la page assemble le texte en Markdown ou en JSON directement dans le navigateur. Par défaut aucune requête ne part ; seul un clic sur Développer ou Peaufiner transmet le brouillon en cours à Cloudflare Workers AI (Turnstile requis, usage plafonné).',
	tool_ios_prompt_builder_build:
		'Générer le prompt',
	tool_ios_prompt_builder_clear:
		'Effacer',
	tool_ios_prompt_builder_copy:
		'Copier',
	tool_ios_prompt_builder_desc:
		'Générateur de prompts iOS : renseignez la fonctionnalité, la stack Swift, l’écran SwiftUI et les règles des HIG ; le texte est assemblé dans le navigateur en Markdown ou JSON, IA en option.',
	tool_ios_prompt_builder_description:
		'Générateur de prompts iOS : indiquez la fonctionnalité, la stack (Swift 5.10, SwiftUI, iOS 17+, SwiftData), l’écran et les règles d’accessibilité des HIG, et la page les range en blocs Role / Task / Constraints / Output, en Markdown ou en JSON, sans quitter le navigateur. Exemple : « tendance hebdomadaire des pas HealthKit et plage de fréquence au repos » ressort avec Dynamic Type jusqu’à XXL et des libellés VoiceOver sur les points du graphique. Charger l’exemple remplit le préréglage et monte le prompt ; Développer ou Peaufiner via Cloudflare Workers AI reste optionnel (Turnstile, quota).',
	tool_ios_prompt_builder_download:
		'Télécharger',
	tool_ios_prompt_builder_empty:
		'Renseignez au moins un champ avant de générer.',
	tool_ios_prompt_builder_example:
		'Entrée : Fonctionnalité = tendance hebdomadaire des pas HealthKit et plage de fréquence au repos, autorisations expliquées en langage clair ; Stack = Swift 5.10, SwiftUI, iOS 17+, async/await, cache SwiftData ; Écran = NavigationStack et Charts, feuille d’autorisation avant la première requête ; HIG = Dynamic Type jusqu’à XXL, libellés VoiceOver sur les points du graphique, pas de force-unwrap. Sortie (Markdown) : ## Role décrit le profil d’ingénieure iOS confirmée, ## Task reprend une ligne par champ.',
	tool_ios_prompt_builder_example_title:
		'Exemple',
	tool_ios_prompt_builder_faq_a1:
		'Par défaut, non. Remplir les champs et cliquer sur Générer le prompt se passe uniquement dans cet onglet, sans requête. Le brouillon ne part que si vous cliquez sur Développer ou Peaufiner, et il va alors vers Cloudflare Workers AI ; nos serveurs ne le relaient pas vers OpenAI, Google, Anthropic ou DeepSeek.',
	tool_ios_prompt_builder_faq_a2:
		'Non. Le mode local se contente de mettre vos champs en forme dans les blocs Role / Task / Constraints / Output. L’IA optionnelle passe par Cloudflare Workers AI après Turnstile, pas par les API de ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_ios_prompt_builder_faq_a3:
		'Le générateur de modèles de prompts fournit les quatre blocs génériques Role / Task / Constraints / Output, valables pour n’importe quel sujet. Ici les champs sont déjà ceux d’un projet iOS : fonctionnalité, stack Swift, navigation et graphiques en SwiftUI, règles des HIG sur Dynamic Type et VoiceOver, avec un exemple et des limites propres à ce cas.',
	tool_ios_prompt_builder_faq_a4:
		'Oui. Validez le widget Turnstile du panneau IA avant de cliquer sur Développer ou Peaufiner. Sans jeton valide, les boutons renvoient une erreur et le mode local reste utilisable.',
	tool_ios_prompt_builder_faq_a5:
		'Oui. Passez le format de sortie sur JSON : vous récupérez chaque champ séparément plus le prompt assemblé, exploitable dans des cas XCTest ou une chaîne de configuration.',
	tool_ios_prompt_builder_faq_a6:
		'Oui. Le résultat est du texte brut : copiez-le puis collez-le dans ChatGPT, Gemini, Claude ou DeepSeek. La page n’appelle pas ces API à votre place.',
	tool_ios_prompt_builder_faq_q1:
		'Ce que je saisis est-il envoyé quelque part ?',
	tool_ios_prompt_builder_faq_q2:
		'La page appelle-t-elle l’API de ChatGPT ou d’un autre modèle ?',
	tool_ios_prompt_builder_faq_q3:
		'Quelle différence avec le générateur de modèles de prompts ?',
	tool_ios_prompt_builder_faq_q4:
		'Pourquoi l’IA optionnelle demande-t-elle Turnstile ?',
	tool_ios_prompt_builder_faq_q5:
		'Puis-je exporter en JSON ?',
	tool_ios_prompt_builder_faq_q6:
		'Est-ce utilisable avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_ios_prompt_builder_faq_q7:
		'Qu’est-ce qui change entre le mode local et l’IA Cloudflare ?',
	tool_ios_prompt_builder_faq_a7:
		'Le mode local se limite à ranger vos champs : aucune requête, aucun quota. Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile obligatoire, usage limité) et le texte renvoyé remplace entièrement la zone de résultat — relisez-le avant de copier. En cas d’échec ou de quota atteint, restez en mode local.',
	tool_ios_prompt_builder_ai_expand:
		'Développer avec l’IA',
	tool_ios_prompt_builder_ai_polish:
		'Peaufiner avec l’IA',
	tool_ios_prompt_builder_ai_panel_label:
		'IA Cloudflare en option (Turnstile)',
	tool_ios_prompt_builder_ai_consent_title:
		'Envoyer le brouillon à Cloudflare Workers AI ?',
	tool_ios_prompt_builder_ai_consent_body:
		'Étape optionnelle : votre brouillon actuel est envoyé à Cloudflare Workers AI pour l’inférence. Nos serveurs ne le transmettent pas à OpenAI, Google, Anthropic ni DeepSeek. Sans IA, l’assemblage dans le navigateur fonctionne toujours.',
	tool_ios_prompt_builder_ai_consent_ok:
		'Continuer',
	tool_ios_prompt_builder_ai_consent_cancel:
		'Annuler',
	tool_ios_prompt_builder_ai_working:
		'Cloudflare AI travaille…',
	tool_ios_prompt_builder_ai_done:
		'Le texte de l’IA a remplacé le résultat. Relisez avant de copier.',
	tool_ios_prompt_builder_ai_err_generic:
		'Échec de l’IA ; le résultat est inchangé.',
	tool_ios_prompt_builder_ai_err_rate:
		'Quota d’IA atteint. Restez en local ou revenez demain (UTC).',
	tool_ios_prompt_builder_ai_err_turnstile:
		'Validez Turnstile avant d’utiliser l’IA.',
	tool_ios_prompt_builder_fmt_json:
		'JSON',
	tool_ios_prompt_builder_fmt_label:
		'Format de sortie',
	tool_ios_prompt_builder_fmt_md:
		'Markdown',
	tool_ios_prompt_builder_feature_spec_label:
		'Fonctionnalité / Spéc.',
	tool_ios_prompt_builder_feature_spec_ph:
		'Ex. : tendance des pas et fréquence au repos…',
	tool_ios_prompt_builder_swift_stack_label:
		'Swift / Stack technique',
	tool_ios_prompt_builder_swift_stack_ph:
		'Ex. : Swift 5.10, SwiftUI, iOS 17+, SwiftData…',
	tool_ios_prompt_builder_swiftui_ui_label:
		'SwiftUI / Écran',
	tool_ios_prompt_builder_swiftui_ui_ph:
		'Ex. : NavigationStack, Charts, feuille d’autorisation…',
	tool_ios_prompt_builder_hig_constraints_label:
		'HIG / Accessibilité',
	tool_ios_prompt_builder_hig_constraints_ph:
		'Ex. : Dynamic Type XXL, VoiceOver, pas de force-unwrap…',
	tool_ios_prompt_builder_how_body:
		'Remplissez les quatre champs, laissez la page assembler le Markdown (ou le JSON) dans le navigateur, puis demandez si besoin un développement à Cloudflare AI avant de coller le prompt dans votre chat.',
	tool_ios_prompt_builder_how_item_1:
		'Cliquez sur Charger l’exemple : le préréglage se remplit et un prompt est monté, partez de là.',
	tool_ios_prompt_builder_how_item_2:
		'Modifiez fonctionnalité, stack, écran et règles des HIG puis cliquez sur Générer le prompt ; basculez en JSON pour exporter les champs.',
	tool_ios_prompt_builder_how_item_3:
		'Facultatif : validez Turnstile puis cliquez sur Développer ou Peaufiner — le texte de l’IA occupe alors la zone de résultat.',
	tool_ios_prompt_builder_how_item_4:
		'Copiez ou téléchargez le résultat, puis collez-le dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_ios_prompt_builder_how_title:
		'Mode d’emploi',
	tool_ios_prompt_builder_load_sample:
		'Charger l’exemple',
	tool_ios_prompt_builder_platforms_lead:
		'Le prompt final est du texte brut : il se colle tel quel dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_ios_prompt_builder_result_label:
		'Prompt produit',
	tool_ios_prompt_builder_rules_body:
		'La page se limite à mettre le besoin en forme : elle ne compile rien et ne lance pas Xcode. L’IA optionnelle est plafonnée et exige Turnstile.',
	tool_ios_prompt_builder_rules_item_1:
		'Chaque champ alimente un bloc distinct du Markdown : Role, Task, Constraints, Output.',
	tool_ios_prompt_builder_rules_item_2:
		'La sortie par défaut est Markdown ; la même zone peut afficher le JSON avec les champs et le prompt assemblé.',
	tool_ios_prompt_builder_rules_item_3:
		'L’IA Cloudflare ne remplace pas le mode local : sa réponse occupe toute la zone de résultat, relisez-la avant de copier.',
	tool_ios_prompt_builder_rules_item_4:
		'L’outil assemble seulement du texte : il ne compile pas Swift, ne lance pas Xcode et n’appelle pas les API de chat pour vous.',
	tool_ios_prompt_builder_rules_title:
		'Limites à connaître',
	tool_ios_prompt_builder_sec_constraints:
		'Constraints',
	tool_ios_prompt_builder_sec_output:
		'Output',
	tool_ios_prompt_builder_sec_role:
		'Role',
	tool_ios_prompt_builder_sec_task:
		'Task',
	tool_ios_prompt_builder_status_copied:
		'Copié dans le presse-papiers.',
	tool_ios_prompt_builder_status_done:
		'Prompt prêt.',
	tool_ios_prompt_builder_status_working:
		'Assemblage du prompt…',
	tool_ios_prompt_builder_title:
		'Générateur de prompts iOS — local, avec IA en option',
	tool_ios_prompt_builder_usecase_1:
		'Reprendre le besoin exposé en revue de conception sous forme de prompt collable dans le chat de l’équipe.',
	tool_ios_prompt_builder_usecase_2:
		'Exporter le JSON pour transformer les règles d’accessibilité en liste de vérification, puis développer via Cloudflare AI si nécessaire.',
	tool_ios_prompt_builder_usecase_3:
		'Si les champs iOS sont inutiles et qu’un modèle générique à quatre blocs suffit, passez au générateur de modèles de prompts.',
	tool_ios_prompt_builder_usecase_4:
		'Rédiger dans le navigateur la description d’une fonctionnalité non annoncée, puis décider si elle part vers l’IA optionnelle.',
	tool_ios_prompt_builder_usecases_title:
		'Quand c’est utile',
};

export default fr;
