/**
 * i18n tool shard (writing-prompt-generator / fr).
 * Search H1: générateur de prompts d'écriture — dialogue, personnage, scénario, aléatoire; assemblage local.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Générateur de prompts d'écriture — fragment de texte en français */
const fr: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Assemblez des prompts d\'écriture prêts à coller : scènes de dialogue, fiches personnage, plans de scénario ou accroches aléatoires. Choisissez un mode, remplissez les champs ou lancez l\'aléatoire, puis copiez Markdown ou JSON dans ChatGPT, Gemini, Claude ou DeepSeek. Aucun appel à une API de modèle. Le texte reste sur l\'appareil et n\'est pas envoyé au serveur.',
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
		'Générateur de prompts d\'écriture pour dialogue, personnage, scénario et aléatoire — Markdown/JSON ; reste sur l\'appareil.',
	tool_writing_prompt_generator_description:
		'Générateur de prompts d\'écriture pour ChatGPT, Gemini, Claude et DeepSeek : assemblez localement des prompts dialogue, personnage, scénario ou histoire aléatoire. Le mode aléatoire tire genre, décor, objet et conflit sur la même page — générateur de prompts aléatoire intégré. Exemple : une scène de dialogue dans un diner nocturne s\'affiche à l\'ouverture. Markdown par défaut ; JSON émet {mode,fields,role,task,constraints,output}. Ce n\'est pas un LLM — le texte reste sur l\'appareil et n\'est pas envoyé au serveur.',
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
		'Charger l\'exemple sélectionne le mode Dialogue, remplit une scène de diner nocturne, génère un Markdown avec sections Role/Task/Constraints/Output et active Copier. Essayez les puces Personnage, Scénario ou Aléatoire pour d\'autres valeurs par défaut.',
	tool_writing_prompt_generator_example_title: 'Exemple',
	tool_writing_prompt_generator_faq_a1:
		'Non. Les prompts sont assemblés dans cet onglet du navigateur. Rien n\'est envoyé à OpenAI, Google, Anthropic, DeepSeek ou nos serveurs.',
	tool_writing_prompt_generator_faq_a2:
		'Non. Cette page formate seulement votre brief d\'écriture en blocs de prompt. Elle n\'appelle pas ChatGPT, Gemini, Claude, DeepSeek ni aucune autre API de modèle.',
	tool_writing_prompt_generator_faq_a3:
		'Le générateur de modèles de Prompt structure des templates génériques Role/Task/Constraints/Output. Cette page privilégie les modes d\'écriture — champs dialogue, fiches personnage, beats scénario et générateur de prompts aléatoire sur un seul canvas.',
	tool_writing_prompt_generator_faq_a4:
		'Oui. Le mode aléatoire tire genre, décor, objet, émotion et conflit. Un seed numérique optionnel reproduit le même tirage. La sortie aléatoire n\'est qu\'une inspiration — sans garantie de qualité.',
	tool_writing_prompt_generator_faq_a5:
		'Oui. La puce JSON émet {mode,fields,role,task,constraints,output} pour tests ou configs. Markdown utilise les titres ## Role / Task / Constraints / Output.',
	tool_writing_prompt_generator_faq_a6:
		'Oui. Copiez le prompt terminé dans ChatGPT, Gemini, Claude ou DeepSeek. Nous ne séparons pas les URLs par plateforme car le travail est de formater du texte, pas d\'appeler des APIs.',
	tool_writing_prompt_generator_faq_q1: 'Mon prompt d\'écriture est-il envoyé ?',
	tool_writing_prompt_generator_faq_q2: 'Est-ce qu\'un LLM est appelé ?',
	tool_writing_prompt_generator_faq_q3: 'En quoi diffère-t-il du générateur de modèles de Prompt ?',
	tool_writing_prompt_generator_faq_q4: 'Le générateur de prompts aléatoire fonctionne-t-il ici ?',
	tool_writing_prompt_generator_faq_q5: 'Puis-je obtenir du JSON ?',
	tool_writing_prompt_generator_faq_q6: 'Puis-je l\'utiliser avec ChatGPT, Gemini, Claude ou DeepSeek ?',
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
		'Les prompts d\'écriture exigent des champs par mode, des limites honnêtes de l\'aléatoire et la même confidentialité locale que les autres builders.',
	tool_writing_prompt_generator_rules_item_1:
		'Quatre blocs en sortie : Role, Task, Constraints, Output — alignés sur les templates structurés.',
	tool_writing_prompt_generator_rules_item_2:
		'Le mode aléatoire intègre le générateur de prompts aléatoire sur cette URL — sans page séparée.',
	tool_writing_prompt_generator_rules_item_3:
		'L\'export par défaut est Markdown. JSON est une puce sur le même canvas.',
	tool_writing_prompt_generator_rules_item_4:
		'Cet outil assemble du texte uniquement. Il ne génère pas d\'histoires finies ni n\'appelle de modèles cloud.',
	tool_writing_prompt_generator_rules_title: 'Ce qu\'il faut attendre',
	tool_writing_prompt_generator_scr_notes_label: 'Notes de beats',
	tool_writing_prompt_generator_scr_notes_ph: 'Nombre de scènes, rythme, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Prémisse / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Mise en place en un paragraphe…',
	tool_writing_prompt_generator_scr_structure_label: 'Structure',
	tool_writing_prompt_generator_scr_structure_ph: 'Trois actes, save the cat, épisodique…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'Copié dans le presse-papiers.',
	tool_writing_prompt_generator_status_done: 'Prompt prêt.',
	tool_writing_prompt_generator_status_working: 'Création du prompt…',
	tool_writing_prompt_generator_title: 'Générateur de prompts d\'écriture',
	tool_writing_prompt_generator_usecase_1:
		'Rédigez un prompt de scène de dialogue pour un groupe d\'écrivains — collez-le dans ChatGPT ou Claude pour des suggestions de beats, pas de prose complète.',
	tool_writing_prompt_generator_usecase_2:
		'Lancez l\'aléatoire quand vous voulez une accroche fraîche sans ouvrir un autre site de prompts aléatoires.',
	tool_writing_prompt_generator_usecase_3:
		'Exportez le JSON d\'un prompt fiche personnage pour un test de pipeline, puis ouvrez le générateur de modèles de Prompt pour des templates API à quatre champs.',
	tool_writing_prompt_generator_usecase_4:
		'Esquissez localement un plan de beats de court-métrage avant d\'envoyer le prompt dans Gemini pour des lectures à table.',
	tool_writing_prompt_generator_usecases_title: 'Bons cas d\'usage',
};

export default fr;
