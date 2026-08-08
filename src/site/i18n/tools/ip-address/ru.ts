/**
 * i18n tool shard (ip-address / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_ip_address_article:
    'Показывает исходящий IP плюс примерный регион и имя сети с edge (без внешней geo). Удобно для VPN, поддержки и allowlist. Не точная геолокация, не биллинг оператора, не «найти чужой IP».',
  tool_ip_address_description:
    'Узнайте публичный IP и примерный регион, как видит edge (только метаданные Cloudflare request.cf, без сторонних API). Процесс: откройте или «Обновить»; worker читает доверенный IP и geo. Пример: 203.0.113.10 с подсказками страны/ISP. При VPN/прокси — выход, не 192.168 роутера.',
  tool_ip_address_example:
    'Пример: edge видит 203.0.113.10 (TEST-NET-3) с подсказками страны/ISP при наличии метаданных. Живой результат — ваш реальный выходной IP с меткой IPv4 или IPv6.',
  tool_ip_address_example_title: 'Пример',
  tool_ip_address_faq_a1:
    'На роутере часто 192.168.x.x — частный LAN. Здесь публичный исходящий IP в интернете, который видят большинство сайтов.',
  tool_ip_address_faq_a2:
    'Обычно виден IP выхода VPN/прокси, а не домашний канал. Обновите после переключения, чтобы проверить.',
  tool_ip_address_faq_a3:
    'Нет. Один запрос — один адрес: IPv4 или IPv6 по использованному пути. При dual-stack версия может смениться после переподключения.',
  tool_ip_address_faq_a4: 'Браузер запрашивает edge API; worker возвращает доверенный IP клиента этого соединения.',
  tool_ip_address_faq_a5: 'Запрос короткий на edge. Истории IP нет; считайте результат временным отображением.',
  tool_ip_address_faq_a6:
    'Из метаданных Cloudflare для этого IP — часто страна/регион/город и владелец ASN. VPN/прокси показывает выход; mobile/CGNAT может ошибаться. Внешние geo-базы не используем.',
  tool_ip_address_faq_q1: 'Почему отличается от IP на роутере?',
  tool_ip_address_faq_q2: 'Что если включён VPN или прокси?',
  tool_ip_address_faq_q3: 'Получу ли IPv4 и IPv6 одновременно?',
  tool_ip_address_faq_q4: 'Как страница получает мой IP?',
  tool_ip_address_faq_q5: 'Храните ли вы мой IP?',
  tool_ip_address_faq_q6: 'Насколько точны регион и провайдер?',
  tool_ip_address_how_body:
    'Браузер вызывает edge API. Worker возвращает доверенный IP и при наличии страну/регион/город/часовой пояс и ASN-организацию из request.cf. Один адрес на запрос — IPv4 или IPv6.',
  tool_ip_address_how_title: 'Как это работает',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — что такое IP-адрес?',
  tool_ip_address_ref_mdn_label: 'MDN — заголовок X-Forwarded-For (риски подделки)',
  tool_ip_address_rules_body:
    'Значение — публичный адрес, который edge связывает с вашим TCP/TLS-соединением. Обычно так сайты видят вашу исходящую личность. Ограничения:',
  tool_ip_address_rules_item_1: 'При VPN или HTTP-прокси виден IP выхода провайдера, а не домашний LAN.',
  tool_ip_address_rules_item_2: 'За NAT несколько устройств делят один публичный IP; 192.168.x.x здесь не появляется.',
  tool_ip_address_rules_item_3: 'Мы предпочитаем доверенный IP клиента edge, а не только X-Forwarded-For (его можно подделать).',
  tool_ip_address_rules_item_4: 'Может быть IPv4 или IPv6 в зависимости от пути; в dual-stack после переподключения может смениться.',
  tool_ip_address_rules_item_5:
    'Регион и ISP из метаданных IP edge — часто уровень города; mobile/CGNAT может ошибаться; VPN показывает узел выхода.',
  tool_ip_address_rules_title: 'Что означает этот IP',
  tool_ip_address_title: 'Узнать свой IP — Публичный адрес (IPv4/IPv6)',
  tool_ip_address_usecase_1: 'Удалённый рабочий стол, NAS или игры: сообщить текущий публичный IP для firewall или портов.',
  tool_ip_address_usecase_2: 'Включите/выключите VPN/прокси и обновите — изменился ли IP выхода.',
  tool_ip_address_usecase_3: 'Перед security groups в облаке, корпоративным firewall или allowlist API.',
  tool_ip_address_usecases_title: 'Когда пригодится',
};
export default ru;
