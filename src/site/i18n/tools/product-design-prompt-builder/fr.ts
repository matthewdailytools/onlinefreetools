/**
 * i18n tool shard (product-design-prompt-builder / fr).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Constructeur de prompts design produit — Local + IA optionnelle pour ChatGPT, Gemini, Claude et DeepSeek : assemblage local par défaut, puis Expand/Polish optionnel via Cloudflare Workers AI (Turnstile requis, quota). L’exemple s’exécute à l’ouverture. Markdown par défaut ; JSON pour pipelines. Le texte reste sur l’appareil sauf IA.',
	tool_product_design_prompt_builder_build:
		'Créer le prompt',
	tool_product_design_prompt_builder_clear:
		'Effacer',
	tool_product_design_prompt_builder_copy:
		'Copier',
	tool_product_design_prompt_builder_desc:
		'Constructeur de prompts design produit — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_product_design_prompt_builder_description:
		'Processus et exemple : Constructeur de prompts design produit — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_product_design_prompt_builder_download:
		'Télécharger',
	tool_product_design_prompt_builder_empty:
		'Remplissez au moins un champ avant de créer.',
	tool_product_design_prompt_builder_example:
		'Load sample fills the default preset, builds Markdown, and enables Copy. Optional AI sends only the text you submit for that click after Turnstile.',
	tool_product_design_prompt_builder_example_title:
		'Exemple',
	tool_product_design_prompt_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_product_design_prompt_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_product_design_prompt_builder_faq_a3:
		'Constructeur de prompts design produit covers generic Role/Task/Constraints/Output templates. This page focuses on product design prompt builder fields with a dedicated sample and rules for this scenario.',
	tool_product_design_prompt_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_product_design_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_product_design_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_product_design_prompt_builder_faq_q1:
		'Is my prompt uploaded?',
	tool_product_design_prompt_builder_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_product_design_prompt_builder_faq_q3:
		'How is this different from Constructeur de prompts design produit?',
	tool_product_design_prompt_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_product_design_prompt_builder_faq_q5:
		'Can I get JSON output?',
	tool_product_design_prompt_builder_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_product_design_prompt_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_product_design_prompt_builder_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_product_design_prompt_builder_ai_expand:
		'Expandir con IA',
	tool_product_design_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_product_design_prompt_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_product_design_prompt_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_product_design_prompt_builder_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_product_design_prompt_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_product_design_prompt_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'Format de sortie',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'Persona',
	tool_product_design_prompt_builder_persona_ph:
		'Sample persona…',
	tool_product_design_prompt_builder_problem_label:
		'Problem',
	tool_product_design_prompt_builder_problem_ph:
		'Sample problem…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'Wireframe / Scope',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'Sample wireframe scope…',
	tool_product_design_prompt_builder_design_tokens_label:
		'Design / Tokens',
	tool_product_design_prompt_builder_design_tokens_ph:
		'Sample design tokens…',
	tool_product_design_prompt_builder_how_body:
		'Fill Constructeur de prompts design produit fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_product_design_prompt_builder_how_item_1:
		'Load sample already ran the default preset on first paint.',
	tool_product_design_prompt_builder_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_product_design_prompt_builder_how_item_3:
		'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_product_design_prompt_builder_how_item_4:
		'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_product_design_prompt_builder_how_title:
		'Comment ça marche',
	tool_product_design_prompt_builder_load_sample:
		'Charger un exemple',
	tool_product_design_prompt_builder_platforms_lead:
		'Pour ChatGPT, Gemini, Claude et DeepSeek — copiez le prompt fini dans n’importe quel chat.',
	tool_product_design_prompt_builder_result_label:
		'Sortie du prompt',
	tool_product_design_prompt_builder_rules_body:
		'Persona/problem/wireframe/tokens for UX briefs. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_product_design_prompt_builder_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_product_design_prompt_builder_rules_item_3:
		'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_product_design_prompt_builder_rules_item_4:
		'This tool assembles text only; it does not run product design prompt builder engines or call chat APIs locally.',
	tool_product_design_prompt_builder_rules_title:
		'Règles à connaître',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output format',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'Copié.',
	tool_product_design_prompt_builder_status_done:
		'Prompt prêt.',
	tool_product_design_prompt_builder_status_working:
		'Création du prompt…',
	tool_product_design_prompt_builder_title:
		'Constructeur de prompts design produit — Local + IA optionnelle',
	tool_product_design_prompt_builder_usecase_1:
		'Ship a paste-ready product design prompt builder brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_product_design_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_product_design_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_product_design_prompt_builder_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_product_design_prompt_builder_usecases_title:
		'Bonnes utilisations',
};

export default fr;
