/**
 * i18n tool shard (ip-address / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_ip_address_article:
    '公衆出口IPに加え、エッジのおおよその地域とASN組織名を表示（外部geo APIなし）。VPN確認、サポート連絡、allowlist向け。精密位置情報・キャリア課金照会・「他人のIP検索」ではありません。',
  tool_ip_address_description:
    'この接続でエッジが見るグローバルIPとおおよその地域・回線名を表示（Cloudflare request.cf のみ、第三者APIなし）。手順：ページを開くか「更新」—ワーカーが信頼IPとgeoメタデータを返します。例：203.0.113.10 と国/ISPのヒント。VPN/プロキシ時は出口で、ルーターの192.168ではありません。',
  tool_ip_address_example: '例：エッジが 203.0.113.10（TEST-NET-3）を見て、メタデータがあれば国/ISPのヒント付き。実際の結果は本物の公衆出口IPで、IPv4/IPv6ラベル付き。',
  tool_ip_address_example_title: '例',
  tool_ip_address_faq_a1: 'ルーター画面の 192.168.x.x はLAN内のプライベートIPです。ここではインternet側の公衆出口IP—サイトが通常見るアドレス—を表示します。',
  tool_ip_address_faq_a2: '多くの場合、VPN/プロキシの出口IPが表示されます。切り替え後に更新して変化を確認してください。',
  tool_ip_address_faq_a3: 'いいえ。1回のリクエストで1つ—接続経路が IPv4 か IPv6 か—だけ返します。デュアルスタックでは再接続やネット変更で切り替わることがあります。',
  tool_ip_address_faq_a4: 'ブラウザがエッジAPIに問い合わせ、ワーカーがその接続の信頼できるクライアントIPを返します。',
  tool_ip_address_faq_a5: '照会は短時間のエッジリクエストです。IP履歴機能はありません。一時表示として扱ってください。',
  tool_ip_address_faq_a6: 'このIPに紐づくCloudflareエッジメタデータ—多くは国/地域/都市とASN所有者名。VPN/プロキシは出口；モバイルやCGNATでずれることがあります。外部GeoIP DBは使いません。',
  tool_ip_address_faq_q1: 'ルーターに表示されるIPと違うのはなぜ？',
  tool_ip_address_faq_q2: 'VPNやプロキシを使うとどうなりますか？',
  tool_ip_address_faq_q3: 'IPv4 と IPv6 を同時に取得できますか？',
  tool_ip_address_faq_q4: 'どうやってIPを取得していますか？',
  tool_ip_address_faq_q5: 'IPは保存されますか？',
  tool_ip_address_faq_q6: '地域とISPの精度は？',
  tool_ip_address_how_body:
    'ブラウザがエッジAPIを呼び出します。ワーカーは信頼できるクライアントIPと、あれば request.cf の国/地域/都市/タイムゾーン・ASN組織を返します。1リクエストにつき IPv4 または IPv6 の1件。',
  tool_ip_address_how_title: '使い方',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — IPアドレスとは',
  tool_ip_address_ref_mdn_label: 'MDN — X-Forwarded-For（なりすまし注意）',
  tool_ip_address_rules_body: '表示値は、エッジがあなたのTCP/TLS接続に関連付けた公衆アドレスです。サイトが通常見る出口識別子として扱ってください。注意点：',
  tool_ip_address_rules_item_1: 'VPNやHTTPプロキシ利用時は、自宅LANではなく提供者の出口IPが見えます。',
  tool_ip_address_rules_item_2: 'NAT配下では複数端末が1つの公衆IPを共有します。192.168.x.x はここには出ません。',
  tool_ip_address_rules_item_3: '改ざん可能な X-Forwarded-For 単独より、エッジの信頼できるクライアントIPを優先します。',
  tool_ip_address_rules_item_4: '経路によって IPv4 / IPv6 のどちらかが出ます。デュアルスタックでは再接続後に切り替わることがあります。',
  tool_ip_address_rules_item_5: '地域とISPはエッジIPメタデータ由来—多くは都市レベル；モバイル/CGNATで誤ることがあり；VPNは出口ノードを表示。',
  tool_ip_address_rules_title: 'このIPの意味',
  tool_ip_address_title: '自分のIPアドレス確認 — グローバルIP表示（IPv4/IPv6）',
  tool_ip_address_usecase_1: 'リモートデスクトップ・NAS・オンラインゲーム：ファイアウォール許可用の公衆IPを確認。',
  tool_ip_address_usecase_2: 'VPN/プロキシのオンオフ後に更新し、出口IPが変わったか確認。',
  tool_ip_address_usecase_3: 'クラウドのセキュリティグループ、社内FW、API allowlist 設定前の確認。',
  tool_ip_address_usecases_title: 'こんなときに',
};
export default ja;
