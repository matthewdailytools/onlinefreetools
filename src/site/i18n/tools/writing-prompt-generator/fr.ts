/**
 * i18n tool shard (writing-prompt-generator / fr).
 * H1 orienté recherche : générateur de prompts d'écriture — dialogue, personnage, scénario, aléatoire.
 * L'assemblage se fait dans le navigateur ; Développer/Peaufiner est optionnel via Cloudflare
 * Workers AI (Turnstile + quota) et sa réponse remplace le bloc de résultat.
 * ChatGPT / Gemini / Claude / DeepSeek figurent dans la description et au premier écran.
 */
import type { SiteLangDict } from '../../../types';

/** Générateur de prompts d'écriture — fragment de texte en français */
const fr: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Assemblez des prompts d\'écriture prêts à coller : scènes de dialogue, fiches personnage, plans de scénario ou accroches aléatoires. Choisissez un mode, remplissez les champs ou lancez l\'aléatoire, puis copiez Markdown ou JSON dans ChatGPT, Gemini, Claude ou DeepSeek. Par défaut le prompt est assemblé dans votre navigateur et nous n\'appelons l\'API d\'aucun chat à votre place ; ce n\'est qu\'en cliquant sur Développer ou Peaufiner avec l\'IA que le brouillon en cours part vers Cloudflare Workers AI (Turnstile obligatoire, quota limité).',
	tool_writing_prompt_generator_build: 'Créer le prompt',
	tool_writing_prompt_generator_char_flaw_label: 'Défaut / faiblesse',
	tool_writing_prompt_generator_char_flaw_ph: 'Ce qui le freine…',
	tool_writing_prompt_generator_char_goal_label: 'Objectif',
	tool_writing_prompt_generator_char_goal_ph: 'Ce qu\'il veut dans cette histoire…',
	tool_writing_prompt_generator_char_name_label: 'Nom du personnage',
	tool_writing_prompt_generator_char_name_ph: 'Prénom ou rôle…',
	tool_writing_prompt_generator_char_traits_label: 'Traits',
	tool_writing_prompt_generator_char_traits_ph: 'Personnalité, habitudes, contradictions…',
	tool_writing_prompt_generator_char_voice_label: 'Voix / diction',
	tool_writing_prompt_generator_char_voice_ph: 'Rythme des phrases, vocabulaire…',
	tool_writing_prompt_generator_clear: 'Effacer',
	tool_writing_prompt_generator_copy: 'Copier',
	tool_writing_prompt_generator_desc:
		'Générateur de prompts d\'écriture — modes dialogue, personnage, scénario et aléatoire ; assemblage local dans le navigateur, IA Cloudflare en option.',
	tool_writing_prompt_generator_description:
		'Générateur de prompts d\'écriture : choisissez un mode — dialogue, personnage, scénario ou aléatoire —, remplissez les champs et obtenez un prompt prêt à coller dans ChatGPT, Gemini, Claude ou DeepSeek. Un exemple de dialogue tourne dès l\'ouverture ; en aléatoire vous tirez une accroche et un seed rejoue le même tirage. Export Markdown ou JSON ; l\'assemblage est local et l\'IA Cloudflare reste optionnelle.',
	tool_writing_prompt_generator_dlg_characters_label: 'Personnages',
	tool_writing_prompt_generator_dlg_characters_ph: 'Noms + rôle en une ligne…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Conflit',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Quelle tension anime la scène…',
	tool_writing_prompt_generator_dlg_genre_label: 'Genre / ton',
	tool_writing_prompt_generator_dlg_genre_ph: 'Drame contemporain, comédie romantique…',
	tool_writing_prompt_generator_dlg_setting_label: 'Décor',
	tool_writing_prompt_generator_dlg_setting_ph: 'Lieu, époque, atmosphère…',
	tool_writing_prompt_generator_dlg_tone_label: 'Style de dialogue',
	tool_writing_prompt_generator_dlg_tone_ph: 'Sous-texte, répartie, sobre…',
	tool_writing_prompt_generator_download: 'Télécharger',
	tool_writing_prompt_generator_empty: 'Remplissez au moins un champ dans ce mode avant de créer.',
	tool_writing_prompt_generator_example:
		'Entrée (Dialogue, Charger l’exemple) : Genre = drame contemporain ; Characters = Maya (barista) et Jonah (musicien) ; Conflict = Maya reconnaît la chanson sur son ex. Sortie (Markdown) : ## Rôle → coach d’écriture ; ## Tâche → lignes genre/characters/setting/conflict/tone. Scénario = mystère du fax du phare — pas le food-truck du film.',
	tool_writing_prompt_generator_example_title: 'Exemple',
	tool_writing_prompt_generator_faq_a1:
		'Par défaut, le prompt est assemblé dans cet onglet et rien n\'en sort. Seul Développer/Peaufiner envoie le texte de ce clic vers Cloudflare Workers AI ; depuis nos serveurs, rien ne part vers OpenAI, Google, Anthropic ou DeepSeek.',
	tool_writing_prompt_generator_faq_a2:
		'Le mode local se contente de mettre vos champs d\'écriture en forme dans cet onglet. Développer/Peaufiner passe par Cloudflare Workers AI après le Turnstile : nous n\'ouvrons ni ChatGPT, ni Gemini, ni Claude, ni DeepSeek à votre place.',
	tool_writing_prompt_generator_faq_a3:
		'Le générateur de modèles de Prompt structure des templates génériques Role/Task/Constraints/Output. Cette page privilégie les modes d\'écriture — champs dialogue, fiches personnage, beats scénario et générateur de prompts aléatoire sur un seul canvas.',
	tool_writing_prompt_generator_faq_a4:
		'Oui. Le mode aléatoire tire genre, décor, objet, émotion et conflit. Un seed numérique optionnel rejoue exactement le même tirage. Ce qui sort sert d\'amorce : aucune garantie de qualité.',
	tool_writing_prompt_generator_faq_a5:
		'Oui. Validez le widget Turnstile du panneau IA avant Développer ou Peaufiner ; sans jeton valide le bouton renvoie une erreur, et le mode local continue de fonctionner.',
	tool_writing_prompt_generator_faq_a6:
		'Oui. La puce JSON émet {mode,fields,role,task,constraints,output} pour tests ou configs. Markdown utilise les titres ## Rôle / Tâche / Contraintes / Format de sortie.',
	tool_writing_prompt_generator_faq_q1: 'Mon prompt d\'écriture est-il envoyé ?',
	tool_writing_prompt_generator_faq_q2: 'Est-ce qu\'un LLM est appelé ?',
	tool_writing_prompt_generator_faq_q3: 'En quoi diffère-t-il du générateur de modèles de Prompt ?',
	tool_writing_prompt_generator_faq_q4:
		'Le générateur de prompts aléatoire fonctionne-t-il ici ?',
	tool_writing_prompt_generator_faq_q5: 'Pourquoi l\'IA optionnelle demande-t-elle un Turnstile ?',
	tool_writing_prompt_generator_faq_q6: 'Puis-je obtenir du JSON ?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Format de sortie',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Choisissez un mode d\'écriture, remplissez les champs ou lancez l\'aléatoire, créez le bloc de prompt, puis collez dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Choisissez Dialogue, Personnage, Scénario ou Aléatoire — Charger l\'exemple a déjà exécuté le preset dialogue à l\'ouverture.',
	tool_writing_prompt_generator_how_item_2: 'Remplissez les champs du mode (ou entrez un seed et cliquez Tirer aléatoire).',
	tool_writing_prompt_generator_how_item_3: 'Cliquez Créer le prompt (masqué en Aléatoire — utilisez Tirer aléatoire).',
	tool_writing_prompt_generator_how_item_4: 'Copiez ou téléchargez Markdown/JSON et collez dans votre interface de chat.',
	tool_writing_prompt_generator_how_title: 'Comment ça marche',
	tool_writing_prompt_generator_load_sample: 'Charger l\'exemple',
	tool_writing_prompt_generator_mode_character: 'Personnage',
	tool_writing_prompt_generator_mode_dialogue: 'Dialogue',
	tool_writing_prompt_generator_mode_label: 'Mode d\'écriture',
	tool_writing_prompt_generator_mode_random: 'Aléatoire',
	tool_writing_prompt_generator_mode_script: 'Scénario / plan',
	tool_writing_prompt_generator_platforms_lead:
		'Conçu pour ChatGPT, Gemini, Claude et DeepSeek — copiez le prompt d\'écriture terminé dans l\'une de ces interfaces.',
	tool_writing_prompt_generator_random_lead:
		'Tirez une accroche d\'histoire à partir du genre, décor, objet, émotion et conflit. Un seed optionnel répète le même tirage.',
	tool_writing_prompt_generator_random_roll: 'Tirer aléatoire',
	tool_writing_prompt_generator_random_seed_label: 'Seed (optionnel)',
	tool_writing_prompt_generator_random_seed_ph: 'p. ex. 42',
	tool_writing_prompt_generator_result_label: 'Prompt d\'écriture',
	tool_writing_prompt_generator_rules_body:
		'Les prompts d\'écriture exigent des champs propres à chaque mode, des limites annoncées franchement sur ce que donne le tirage, et le même assemblage local que les autres builders.',
	tool_writing_prompt_generator_rules_item_1:
		'Quatre blocs en sortie : Role, Task, Constraints, Output — alignés sur les templates structurés.',
	tool_writing_prompt_generator_rules_item_2:
		'Le mode aléatoire tient sur ce même canvas : il tire genre, décor, objet, émotion et conflit, et un seed rejoue le tirage.',
	tool_writing_prompt_generator_rules_item_3:
		'L\'export par défaut est Markdown. JSON est une puce sur le même canvas.',
	tool_writing_prompt_generator_rules_item_4:
		'L\'IA Cloudflare optionnelle ne remplace jamais le mode local : relisez son texte avant de copier. Cet outil assemble le prompt, il n\'écrit pas l\'histoire finie.',
	tool_writing_prompt_generator_rules_title: 'Ce qu\'il faut attendre',
	tool_writing_prompt_generator_scr_notes_label: 'Notes de beats',
	tool_writing_prompt_generator_scr_notes_ph: 'Nombre de scènes, rythme, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Prémisse / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Mise en place en un paragraphe…',
	tool_writing_prompt_generator_scr_structure_label: 'Structure',
	tool_writing_prompt_generator_scr_structure_ph: 'Trois actes, save the cat, épisodique…',
	tool_writing_prompt_generator_sec_constraints: 'Contraintes',
	tool_writing_prompt_generator_sec_output: 'Format de sortie',
	tool_writing_prompt_generator_sec_role: 'Rôle',
	tool_writing_prompt_generator_sec_task: 'Tâche',
	tool_writing_prompt_generator_status_copied: 'Copié dans le presse-papiers.',
	tool_writing_prompt_generator_status_done: 'Prompt prêt.',
	tool_writing_prompt_generator_status_working: 'Création du prompt…',
	tool_writing_prompt_generator_title:
		'Générateur de prompts d\'écriture — Local + IA optionnelle',
	tool_writing_prompt_generator_usecase_1:
		'Rédigez un prompt de scène de dialogue pour un groupe d\'écrivains — collez-le dans ChatGPT ou Claude pour des suggestions de beats, pas de prose complète.',
	tool_writing_prompt_generator_usecase_2:
		'Lancez l\'aléatoire quand vous voulez une accroche fraîche sans ouvrir un autre site de prompts aléatoires.',
	tool_writing_prompt_generator_usecase_3:
		'Exportez le JSON d\'un prompt fiche personnage pour un test de pipeline, puis ouvrez le générateur de modèles de Prompt pour des templates API à quatre champs.',
	tool_writing_prompt_generator_usecase_4:
		'Esquissez localement un plan de beats de court-métrage avant d\'envoyer le prompt dans Gemini pour des lectures à table.',
	tool_writing_prompt_generator_usecases_title: 'Bons cas d\'usage',
	tool_writing_prompt_generator_ai_expand:
		'Développer avec l\'IA',
	tool_writing_prompt_generator_ai_polish:
		'Peaufiner avec l\'IA',
	tool_writing_prompt_generator_ai_panel_label:
		'IA Cloudflare optionnelle (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'Envoyer le texte à Cloudflare Workers AI ?',
	tool_writing_prompt_generator_ai_consent_body:
		'Cette étape optionnelle envoie votre brouillon actuel à Cloudflare Workers AI pour inférence. Depuis nos serveurs, rien ne part vers OpenAI, Google, Anthropic ou DeepSeek. Sans IA, l\'assemblage local fonctionne toujours.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Continuer',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Annuler',
	tool_writing_prompt_generator_ai_working:
		'L\'IA Cloudflare travaille…',
	tool_writing_prompt_generator_ai_done:
		'Le texte de l\'IA a été écrit en entier dans le résultat. Relisez-le avant de copier.',
	tool_writing_prompt_generator_ai_err_generic:
		'Échec de l\'IA. Votre prompt local est inchangé.',
	tool_writing_prompt_generator_ai_err_rate:
		'Quota IA atteint. Restez en mode local ou réessayez demain (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Validez le Turnstile avant d\'utiliser l\'IA.',
	tool_writing_prompt_generator_faq_q7:
		'Puis-je l\'utiliser avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_writing_prompt_generator_faq_a7:
		'Oui. Copiez le prompt terminé dans ChatGPT, Gemini, Claude ou DeepSeek. Cette page prépare seulement le texte, elle ne se connecte à aucun service et n\'appelle aucune API.',
	tool_writing_prompt_generator_faq_q8:
		'Quelle différence entre le mode local et l\'IA Cloudflare optionnelle ?',
	tool_writing_prompt_generator_faq_a8:
		'Local : tout est assemblé dans cet onglet, sans envoi. Développer/Peaufiner transmet le brouillon à Cloudflare Workers AI (Turnstile et quota journalier) et la réponse remplace le bloc de résultat. En cas d\'échec ou de quota atteint, restez en mode local.',
};

export default fr;
