/**
 * i18n tool shard (domain-lookup / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
	tool_domain_lookup_article:
		'ドメインのライブ DNS レコードと登録情報を一画面で確認できます。クエリは当サイトのエッジ経由で DNS-over-HTTPS と RDAP に送られます。連絡先は多くの場合非表示で、結果はローカルリゾルバと異なることがあります。',
	tool_domain_lookup_clear: 'クリア',
	tool_domain_lookup_col_data: 'データ',
	tool_domain_lookup_col_name: '名前',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'タイプ',
	tool_domain_lookup_copied: 'コピー済み',
	tool_domain_lookup_copy: '概要をコピー',
	tool_domain_lookup_desc:
		'ドメイン照会：DNS と登録情報（WHOIS/RDAP）— A/MX/NS、レジストラ、有効期限を一覧表示。',
	tool_domain_lookup_description:
		'ドメイン照会：ライブ DNS レコードと WHOIS 相当の登録情報（RDAP）をオンラインで確認。手順：example.com などのドメインを入力し、DNS-over-HTTPS と RDAP を並行実行、A/AAAA/MX/NS/TXT とレジストラ・状態・期限イベントを照合。連絡先は非表示が多く、照会はエッジ経由で履歴製品には保存しません。',
	tool_domain_lookup_domain_label: 'ドメイン',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: '指定タイプの DNS 応答がありません。',
	tool_domain_lookup_dns_fail: 'DNS 照会に失敗しました。',
	tool_domain_lookup_dns_heading: 'DNS レコード',
	tool_domain_lookup_err_empty: 'ドメイン名を入力してください。',
	tool_domain_lookup_err_need_one: 'DNS、登録情報、または両方を選択してください。',
	tool_domain_lookup_events: 'イベント',
	tool_domain_lookup_example:
		'例：example.com を照会 → DNS では DoH 経由の公開 A/AAAA/NS が表示される場合があります。登録情報では RDAP からレジストラ、ステータス、期限/登録イベントが出ます（フィールドは非表示のことがあります）。',
	tool_domain_lookup_example_title: '例',
	tool_domain_lookup_faq_a1:
		'ブラウザは当サイトのエッジ API を呼び出し、Worker が上流の DoH と RDAP を問い合わせます。ドメイン履歴製品は提供せず、結果は一時的なものとして扱ってください。',
	tool_domain_lookup_faq_a2:
		'プライバシー規則により、登録者のメールや電話は多くの場合非表示です。レジストラ、状態、日付は通常残ります。RDAP サーバーが返す内容をそのまま表示します。',
	tool_domain_lookup_faq_a3:
		'TLD 非対応、タイムアウト、NXDOMAIN 相当の空 DNS はセクションごとに表示し、片方の失敗がもう片方を隠しません。',
	tool_domain_lookup_faq_a4:
		'WHOIS と呼ばれることは今もあります。多くの gTLD では RDAP（HTTPS JSON）で同種データを公開しています。本ツールは RDAP を使用。ccTLD によっては RDAP がありません。',
	tool_domain_lookup_faq_a5:
		'DNS 応答は公開リゾルバ視点（DoH）です。RDAP の NS はレジストリ登録値です。伝播遅延や直近の変更で食い違うことがあります。',
	tool_domain_lookup_faq_q1: '照会したドメインは保存されますか？',
	tool_domain_lookup_faq_q2: '所有者の連絡先が空なのはなぜ？',
	tool_domain_lookup_faq_q3: 'DNS または RDAP が失敗したら？',
	tool_domain_lookup_faq_q4: 'WHOIS 照会ですか？',
	tool_domain_lookup_faq_q5: 'DNS の NS と登録情報の NS が違う理由は？',
	tool_domain_lookup_how_body:
		'ドメインを入力し、DNS・登録情報・両方を選択します。エッジ Worker が Cloudflare DNS-over-HTTPS で一般的なレコードタイプを、IANA bootstrap 経由で TLD の RDAP サーバーからレジストラ・状態・イベント・レジストリ NS を取得します。各ブロックは独立して成功または失敗します。',
	tool_domain_lookup_how_title: '使い方',
	tool_domain_lookup_loading: '照会中…',
	tool_domain_lookup_lookup: '照会',
	tool_domain_lookup_ns_mismatch:
		'注意：DNS の NS と RDAP の NS が一致しません — 伝播中や直近の変更でよく起こります。',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: '登録情報',
	tool_domain_lookup_rdap_fail: '登録情報（RDAP）の照会に失敗しました。',
	tool_domain_lookup_rdap_heading: '登録情報（RDAP）',
	tool_domain_lookup_rdap_link: 'RDAP URL',
	tool_domain_lookup_rdap_ns: 'レジストリ NS',
	tool_domain_lookup_rdap_ok: 'RDAP から登録情報を取得しました。',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — DNS over HTTPS API',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup（RDAP）',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — ドメイン名',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'レジストラ',
	tool_domain_lookup_rules_body:
		'リゾルバ側 DNS とレジストリ登録データを確認するページです。制限と意味：',
	tool_domain_lookup_rules_item_1:
		'照会 DNS タイプ：A、AAAA、CNAME、MX、NS、TXT、SOA（公開 DoH 視点）。',
	tool_domain_lookup_rules_item_2:
		'登録データは RDAP 由来。多くの gTLD で従来 WHOIS の構造化後継です。',
	tool_domain_lookup_rules_item_3:
		'連絡先フィールドは非表示のことがあり、所有者の完全情報は期待しないでください。',
	tool_domain_lookup_rules_item_4:
		'伝播中は DNS 応答と RDAP の NS が一致しないことがあります。',
	tool_domain_lookup_rules_item_5:
		'照会はエッジから上流サーバーへ。DNS や登録内容は変更しません。',
	tool_domain_lookup_rules_title: '表示内容',
	tool_domain_lookup_sample: 'サンプル',
	tool_domain_lookup_status: '状態',
	tool_domain_lookup_title: 'ドメイン照会 — DNSと登録情報を確認',
	tool_domain_lookup_usecase_1:
		'公開前：A/AAAA/CNAME が想定ホストを指しているか確認。',
	tool_domain_lookup_usecase_2:
		'更新・移管：レジストラ、状態、期限イベントを確認（連絡先は非表示のことがあります）。',
	tool_domain_lookup_usecase_3:
		'メール設定：MX と関連 TXT を確認（完全な到達性監査ではありません）。',
	tool_domain_lookup_usecases_title: 'こんなときに',
};
export default ja;
