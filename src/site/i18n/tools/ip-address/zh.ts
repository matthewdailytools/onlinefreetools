/**
 * i18n tool shard (ip-address / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_ip_address_article:
    '显示边缘所见的公网（外网）出口 IP，以及 Cloudflare 附带的粗略地区与网络名称（不调用外部归属库）。适合报地址、核对 VPN 出口、防火墙白名单联调。非精确定位、非运营商套餐查询、不支持「查别人 IP」。',
  tool_ip_address_description:
    '在线查询公网 IP 与大致地区/运营商（仅读 Cloudflare 边缘元数据，无第三方 API）：打开即显，点「刷新」可重查。流程：浏览器请求边缘 API → 返回 IPv4 或 IPv6 及国家/城市/时区、ASN 组织名（若有）。示例：可能显示 203.0.113.10 及 CN 等提示。VPN/代理下为出口信息，不是路由器 192.168 地址。',
  tool_ip_address_example: '文档示例：边缘所见 203.0.113.10（TEST-NET-3），若有元数据会附带国家/运营商提示。你的实时结果是当前真实的公网出口 IP，并标注 IPv4 或 IPv6。',
  tool_ip_address_example_title: '示例',
  tool_ip_address_faq_a1: '路由器管理页常见 192.168.x.x，那是内网地址。本页显示的是运营商分配到宽带的公网（外网）出口 IP，网站和大多数在线服务看到的是这一地址。',
  tool_ip_address_faq_a2: '在本工具语境下可以等同理解：都是指互联网侧能看到的出口地址，不是 192.168 这类私网地址。不同地区口语会混用「公网」「外网」，含义一致。',
  tool_ip_address_faq_a3: '通常显示 VPN/代理节点的出口 IP，而不是家里宽带地址。这是预期行为——用来确认代理是否生效，也解释为什么开关 VPN 后刷新结果会变。',
  tool_ip_address_faq_a4: '取决于你的网络路径：可能看到 IPv4（如 203.0.113.10）或 IPv6。双栈环境下切换网络或重连后，显示的版本或地址可能变化。',
  tool_ip_address_faq_a5: '查询是短生命周期的边缘请求。我们不提供 IP 历史或归属地数据库；请把页面结果当作临时展示，而不是日志存档。',
  tool_ip_address_faq_a6: '来自 Cloudflare 边缘对本 IP 的元数据，多为国家/省/城市级与 ASN 所属组织名。VPN/代理显示出口；移动网或 NAT 可能偏差。我们不调用外部 GeoIP 数据库。',
  tool_ip_address_faq_q1: '为什么和路由器里显示的 IP 不一样？',
  tool_ip_address_faq_q2: '公网 IP 和外网 IP 是一回事吗？',
  tool_ip_address_faq_q3: '开了 VPN 或代理会怎样？',
  tool_ip_address_faq_q4: '显示的是 IPv4 还是 IPv6？',
  tool_ip_address_faq_q5: '会保存我的 IP 吗？',
  tool_ip_address_faq_q6: '地区和运营商准吗？',
  tool_ip_address_how_body:
    '进入页面会自动请求边缘 API；点「刷新」再查一次。Worker 返回本次连接的可信 IP，以及 request.cf 中的国家/省/城市/时区与 ASN 组织（字段可能缺失）。每次请求只显示一条 IPv4 或 IPv6。',
  tool_ip_address_how_title: '怎么用',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — 什么是 IP 地址？',
  tool_ip_address_ref_mdn_label: 'MDN — X-Forwarded-For（伪造风险说明）',
  tool_ip_address_rules_body: '显示的是互联网侧看到的公网地址（很多人口语里叫「外网 IP」），不是家里路由器管理页里的 192.168 内网地址。注意这些边界：',
  tool_ip_address_rules_item_1: '使用 VPN、机场或 HTTP 代理时，看到的是服务商出口 IP，不是宽带拨号的真实地址。',
  tool_ip_address_rules_item_2: '路由器 NAT 下，手机/电脑/电视往往共享同一个公网 IP；192.168.x.x 不会出现在这里。',
  tool_ip_address_rules_item_3: '优先采用边缘可信的客户端地址，而不是单独采信可伪造的 X-Forwarded-For。',
  tool_ip_address_rules_item_4: '双栈网络可能显示 IPv4 或 IPv6；重连宽带或切换 Wi‑Fi/蜂窝后，公网 IP 可能变化。',
  tool_ip_address_rules_item_5: '地区与运营商来自边缘 IP 库推断，多为城市级，移动网/CGNAT 可能不准；VPN 下显示的是出口节点信息。',
  tool_ip_address_rules_title: '这个 IP 代表什么',
  tool_ip_address_title: 'IP 地址查询 — 查看我的公网 IP（IPv4/IPv6）',
  tool_ip_address_usecase_1: '远程桌面、NAS、游戏联机：向管理员报当前外网 IP，申请白名单或端口放行。',
  tool_ip_address_usecase_2: '开关 VPN/代理后点刷新，确认出口 IP 是否已切换到预期节点。',
  tool_ip_address_usecase_3: '云服务器安全组、公司防火墙、API 回调白名单联调前，快速核对公网来源地址。',
  tool_ip_address_usecases_title: '适合什么场景',
};
export default zh;
