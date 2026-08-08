/**
 * i18n tool shard (timezone-converter / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_timezone_converter_article:
    'Escolha um instante num fuso IANA de origem e veja a mesma hora em UTC, Nova York, Londres, Tóquio e outros fusos marcados. Para equipas remotas, logs e relógio mundial — Intl no browser, sem envio.',
  tool_timezone_converter_clear: 'Limpar',
  tool_timezone_converter_col_local: 'Data e hora local',
  tool_timezone_converter_col_offset: 'Desvio UTC',
  tool_timezone_converter_col_zone: 'Fuso horário',
  tool_timezone_converter_compare_zones: 'Comparar nestes fusos',
  tool_timezone_converter_convert: 'Converter',
  tool_timezone_converter_desc:
    'Compare um instante entre fusos IANA com notas de horário de verão — local no browser.',
  tool_timezone_converter_description:
    'Converta data e hora de um fuso IANA para vários destinos no browser. Processo: insira a hora local, escolha o fuso origem, marque fusos de comparação e Converta. Exemplo: 15-jun-2026 14:30 Los Angeles → linhas Nova York, Londres, Tóquio e UTC com desvio. Avisa lacunas DST; não é pacote de reunião exportável.',
  tool_timezone_converter_error_dst_gap:
    'Essa hora local não existe no fuso origem (salto de horário de verão). Escolha a hora vizinha.',
  tool_timezone_converter_error_empty: 'Insira data/hora e marque pelo menos um fuso de comparação.',
  tool_timezone_converter_error_invalid: 'Formato inválido. Use o seletor ou AAAA-MM-DDTHH:MM.',
  tool_timezone_converter_example:
    'Amostra fixa ao abrir: 15-jun-2026 14:30 America/Los_Angeles → UTC, Nova York, Londres e Tóquio com relógio local e desvio UTC segundo regras IANA dessa data.',
  tool_timezone_converter_example_title: 'Exemplo',
  tool_timezone_converter_faq_a1:
    'Usamos identificadores IANA como America/New_York ou Asia/Tokyo — os mesmos de browsers e servidores. Siglas EST ou JST são ambíguas; em convites use sempre o nome IANA completo.',
  tool_timezone_converter_faq_a2:
    'No início do horário de verão faltam horas locais — erro explícito. No fim, a mesma hora pode repetir-se; Intl escolhe um desvio — confirme reuniões críticas nesses dias.',
  tool_timezone_converter_faq_a3:
    'Conversores Unix fazem epoch ↔ relógio, muitas vezes UTC. Aqui mantém o fuso origem nomeado e mostra vários destinos em tabela — para «que horas são lá?».',
  tool_timezone_converter_faq_a4:
    'Não. Tabela instantânea para consulta própria. Não gera pacote partilhável, lista de participantes nem export ICS.',
  tool_timezone_converter_faq_a5:
    'Sim, tudo local: só Intl.DateTimeFormat integrado; nada é enviado.',
  tool_timezone_converter_faq_q1: 'Por que nomes IANA e não EST, PST ou GMT?',
  tool_timezone_converter_faq_q2: 'O que acontece no dia da mudança de horário de verão?',
  tool_timezone_converter_faq_q3: 'Diferença para um conversor Unix timestamp?',
  tool_timezone_converter_faq_q4: 'Posso exportar um pacote de fusos para reunião de equipa?',
  tool_timezone_converter_faq_q5: 'A minha data/hora vai para um servidor?',
  tool_timezone_converter_how_body:
    'Insira hora local e fuso IANA origem. Marque fusos de comparação e Converta. A tabela mostra relógio local e desvio UTC do mesmo instante, calculado com Intl no browser.',
  tool_timezone_converter_how_title: 'Como funciona',
  tool_timezone_converter_local_tz: 'seu browser',
  tool_timezone_converter_now: 'Agora',
  tool_timezone_converter_rules_body:
    'Regras IANA, comportamento DST e limites face a epoch ou exportação de reuniões.',
  tool_timezone_converter_rules_item_1:
    'Fusos seguem a base IANA (tzdata). Desvios mudam com DST — a tabela reflete a data inserida, não GMT fixo.',
  tool_timezone_converter_rules_item_2:
    'Lacunas de primavera: hora inexistente → erro. Sobreposições de outono: hora duplicada → Intl escolhe um desvio; verifique casos limite.',
  tool_timezone_converter_rules_item_3:
    'CST, IST, etc. podem ser regiões diferentes. Em APIs e cron use nomes IANA completos.',
  tool_timezone_converter_rules_item_4:
    'Privacidade: sem envio. Só comparação — não é agendador de reuniões nem geolocalização IP.',
  tool_timezone_converter_rules_title: 'Regras esperadas',
  tool_timezone_converter_sample: 'Carregar exemplo',
  tool_timezone_converter_source_time: 'Data e hora origem',
  tool_timezone_converter_source_tz: 'Fuso horário origem',
  tool_timezone_converter_title: 'Conversor de fuso horário — comparar um momento no mundo',
  tool_timezone_converter_usecase_1:
    'Equipas remotas: «15h30 Pacífico» — veja Nova York, Londres e Tóquio numa só tabela.',
  tool_timezone_converter_usecase_2:
    'Ops / logs: registo em hora de Chicago — compare UTC e o seu fuso sem conta de cabeça.',
  tool_timezone_converter_usecase_3:
    'Viagem: chegada em Dubai — leia Sydney e Los Angeles em paralelo para chamadas.',
  tool_timezone_converter_usecases_title: 'Quando usar',
};
export default pt;
