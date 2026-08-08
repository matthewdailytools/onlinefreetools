/**
 * i18n tool shard (timezone-converter / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_timezone_converter_article:
    'Choisissez un instant dans une zone IANA source, puis lisez la même heure à UTC, New York, Londres, Tokyo et d’autres fuseaux cochés. Pensé pour stand-ups distants, corrélation de logs et horloge mondiale — Intl dans le navigateur, sans envoi.',
  tool_timezone_converter_clear: 'Effacer',
  tool_timezone_converter_col_local: 'Date et heure locales',
  tool_timezone_converter_col_offset: 'Décalage UTC',
  tool_timezone_converter_col_zone: 'Fuseau',
  tool_timezone_converter_compare_zones: 'Comparer dans ces fuseaux',
  tool_timezone_converter_convert: 'Convertir',
  tool_timezone_converter_desc:
    'Comparez un instant entre fuseaux IANA avec notes heure d’été — local dans le navigateur.',
  tool_timezone_converter_description:
    'Convertissez une date-heure d’un fuseau IANA vers plusieurs autres dans le navigateur. Processus : saisir l’heure locale, choisir le fuseau source, cocher les fuseaux à comparer, puis Convertir. Exemple : 15-juin-2026 14:30 Los Angeles → lignes New York, Londres, Tokyo et UTC avec décalage. Signale les trous DST ; ce n’est pas un pack de réunion exportable.',
  tool_timezone_converter_error_dst_gap:
    'Cette heure locale n’existe pas dans le fuseau source (trou DST au passage à l’heure d’été). Choisissez l’heure voisine.',
  tool_timezone_converter_error_empty: 'Saisissez une date-heure et cochez au moins un fuseau de comparaison.',
  tool_timezone_converter_error_invalid: 'Format invalide. Utilisez le sélecteur ou AAAA-MM-JJTHH:MM.',
  tool_timezone_converter_example:
    'Exemple au chargement : 15-juin-2026 14:30 America/Los_Angeles → UTC, New York, Londres, Tokyo avec horloge locale et décalage UTC selon les règles IANA de cette date.',
  tool_timezone_converter_example_title: 'Exemple',
  tool_timezone_converter_faq_a1:
    'Nous utilisons des identifiants IANA (America/New_York, Asia/Tokyo…) — comme les navigateurs et serveurs. EST, JST, etc. sont ambigus ; pour planifier, préférez le nom IANA complet.',
  tool_timezone_converter_faq_a2:
    'Au début de l’heure d’été certaines heures locales sont sautées — erreur explicite. À la fin, une même heure peut exister deux fois ; Intl en retient une — vérifiez les réunions sensibles ces jours-là.',
  tool_timezone_converter_faq_a3:
    'Un outil timestamp Unix fait surtout epoch ↔ horloge, souvent en UTC. Ici vous gardez un fuseau source nommé et voyez plusieurs cibles côte à côte — pour « il est quelle heure chez eux ? ».',
  tool_timezone_converter_faq_a4:
    'Non. Tableau instantané pour votre usage. Pas de pack partageable, liste d’invités ni export ICS.',
  tool_timezone_converter_faq_a5:
    'Oui, tout reste local : Intl.DateTimeFormat intégré uniquement ; rien n’est téléversé.',
  tool_timezone_converter_faq_q1: 'Pourquoi des noms IANA plutôt que EST, PST ou GMT ?',
  tool_timezone_converter_faq_q2: 'Que se passe-t-il les jours de changement d’heure d’été ?',
  tool_timezone_converter_faq_q3: 'Différence avec un convertisseur timestamp Unix ?',
  tool_timezone_converter_faq_q4: 'Puis-je exporter un pack fuseaux pour une réunion d’équipe ?',
  tool_timezone_converter_faq_q5: 'Ma date-heure part-elle vers un serveur ?',
  tool_timezone_converter_how_body:
    'Saisissez une date-heure locale et le fuseau IANA source. Cochez les fuseaux à comparer, puis Convertir. Le tableau affiche l’horloge locale et le décalage UTC du même instant, calculés avec Intl dans le navigateur.',
  tool_timezone_converter_how_title: 'Fonctionnement',
  tool_timezone_converter_local_tz: 'votre navigateur',
  tool_timezone_converter_now: 'Maintenant',
  tool_timezone_converter_rules_body:
    'Règles IANA, comportement DST et limites par rapport à epoch ou export de réunion.',
  tool_timezone_converter_rules_item_1:
    'Les fuseaux suivent la base IANA (tzdata). Les décalages évoluent avec le DST — le tableau reflète la date saisie, pas un GMT fixe.',
  tool_timezone_converter_rules_item_2:
    'Trous de printemps : heure inexistante → message d’erreur. Chevauchements d’automne : heure dupliquée → Intl choisit un décalage ; vérifiez les cas limites.',
  tool_timezone_converter_rules_item_3:
    'CST, IST, etc. peuvent désigner des régions différentes. Dans les API et cron, utilisez le nom IANA complet.',
  tool_timezone_converter_rules_item_4:
    'Confidentialité : aucun envoi. Comparaison en lecture seule — pas planificateur de réunion ni géolocalisation IP.',
  tool_timezone_converter_rules_title: 'Règles attendues',
  tool_timezone_converter_sample: 'Charger l’exemple',
  tool_timezone_converter_source_time: 'Date et heure source',
  tool_timezone_converter_source_tz: 'Fuseau source',
  tool_timezone_converter_title: 'Convertisseur de fuseau horaire — comparer un instant dans le monde',
  tool_timezone_converter_usecase_1:
    'Équipes distantes : « 15 h 30 Pacifique » — voyez New York, Londres et Tokyo d’un coup d’œil.',
  tool_timezone_converter_usecase_2:
    'Ops / logs : horodatage en heure de Chicago — comparez UTC et votre fuseau sans calcul mental.',
  tool_timezone_converter_usecase_3:
    'Voyage : atterrissage à Dubaï — lisez Sydney et Los Angeles en parallèle pour vos appels.',
  tool_timezone_converter_usecases_title: 'Cas d’usage',
};
export default fr;
