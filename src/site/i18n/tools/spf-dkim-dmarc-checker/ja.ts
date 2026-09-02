/**
 * i18n tool shard (spf-dkim-dmarc-checker / ja).
 * 検索: SPF DKIM DMARC チェック; DMARC レコード 確認; SPF 照会。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'SPF DKIM DMARCチェッカー',
	tool_spf_dkim_dmarc_checker_desc:
		'ドメインの SPF・DKIM・DMARC を DNS で確認し、~all/-all と p= ポリシーを平易に説明します。',
	tool_spf_dkim_dmarc_checker_description:
		'送信ドメインと任意の DKIMセレクタ（既定 google）を入力。DoH で SPF・_dmarc・selector._domainkey を照会し、~all/-all と DMARC p= を説明します。例: google.com。',
	tool_spf_dkim_dmarc_checker_domain_label: 'ドメイン',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'DKIMセレクタ',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: '確認',
	tool_spf_dkim_dmarc_checker_sample: 'サンプル',
	tool_spf_dkim_dmarc_checker_clear: 'クリア',
	tool_spf_dkim_dmarc_checker_running: 'DNS で SPF・DKIM・DMARC を照会しています…',
	tool_spf_dkim_dmarc_checker_domain_error: '有効なドメインを入力してください（ホスト名、または URL を貼り付け）。',
	tool_spf_dkim_dmarc_checker_error_prefix: 'エラー: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'DNS 照会に失敗しました。リゾルバに届かないか、名前が拒否された可能性があります。',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'ドメインと DKIMセレクタは DNS-over-HTTPS のため Worker に送られます。プロダクト用の長期データベースとしては保持しません。',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'あり',
	tool_spf_dkim_dmarc_checker_result_found_no: 'なし',
	tool_spf_dkim_dmarc_checker_result_record: 'レコード',
	tool_spf_dkim_dmarc_checker_result_explain: '説明',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'all 修飾子',
	tool_spf_dkim_dmarc_checker_result_policy: 'DMARC ポリシー (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'セレクタ',
	tool_spf_dkim_dmarc_checker_result_pubkey: '公開鍵 (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'あり',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'なし / 空',
	tool_spf_dkim_dmarc_checker_how_title: '使い方',
	tool_spf_dkim_dmarc_checker_how_body:
		'到達性の確認では SPF・DKIM・DMARC をまとめて見るのが一般的です。送信ドメインを入れ、必要ならセレクタを変え、各 TXT とポリシー要約を読んでください。',
	tool_spf_dkim_dmarc_checker_how_item_1: '送信ドメインと任意の DKIMセレクタ（既定 google）を入力します。',
	tool_spf_dkim_dmarc_checker_how_item_2: '「確認」を押すと、Worker が DoH で SPF・_dmarc・selector._domainkey の TXT を照会します。',
	tool_spf_dkim_dmarc_checker_how_item_3: '各レコードと、SPF の ~all/-all、DMARC の p= の平易な説明を確認します。',
	tool_spf_dkim_dmarc_checker_how_item_4: 'DNS 事業者側で修正してから再確認してください。このページはゾーンを書き換えません。',
	tool_spf_dkim_dmarc_checker_formula_title: '照会の内容',
	tool_spf_dkim_dmarc_checker_formula_body:
		'照会は RFC 7208 / 6376 / 7489 の公開 TXT 形式に沿います。ポリシー項目を要約するだけで、送信やメールボックス探査は行いません。',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: ドメイン上の v=spf1 TXT。末尾の all（~all ソフト失敗、-all ハード失敗）を表示します。',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: _dmarc.ドメイン の v=DMARC1 TXT。p=（none / quarantine / reject）と任意の pct を強調します。',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: {selector}._domainkey.ドメイン の TXT。空でない公開鍵 p= があるかを確認します。',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'欠落レコードは正直に表示します。DoH 失敗はエラーになります（ESP の実署名テストではありません）。',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'SMTP RCPT 探査もゾーン編集もしません。「メールアドレスの存在確認」は対象外です。',
	tool_spf_dkim_dmarc_checker_example_title: '例',
	tool_spf_dkim_dmarc_checker_example:
		'サンプル入力は google.com、DKIMセレクタ google。Worker が SPF・_dmarc.google.com・google._domainkey.google.com を照会し、あり/レコード/説明を表示します。',
	tool_spf_dkim_dmarc_checker_usecases_title: 'こんなときに',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'公開前: ESP の DNS を追加したあと、送信ドメインに SPF・DKIM・DMARC があるか確認する。',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'DMARC レコード確認: 生 TXT だけでなく、p=none と quarantine/reject の違いを平易に読む。',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'迷惑メール行きのときの SPF 照会: ~all か -all かを見て、DKIMセレクタを ESP に合わせる。',
	tool_spf_dkim_dmarc_checker_faq_q1: 'なぜ 1 ページで 3 つを確認するのですか？',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'受信側は多くの場合 3 つをまとめて評価します。DMARC だけだと、壊れた SPF や誤った DKIMセレクタを見逃すことがあります。',
	tool_spf_dkim_dmarc_checker_faq_q2: '既定の DKIMセレクタは？',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google（Google Workspace で多い値）です。ESP が別セレクタ（s1 や k1 など）なら変更してください。',
	tool_spf_dkim_dmarc_checker_faq_q3: 'メールアドレスの存在確認ですか？',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'いいえ。ドメイン認証 DNS（SPF 照会・DKIM 鍵・DMARC ポリシー）のみです。アドレス存在チェックは対象外です。',
	tool_spf_dkim_dmarc_checker_faq_q4: '結果は生 TXT だけですか？',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'いいえ。レコードに加え、SPF の all と DMARC の p= を説明する行があります。',
	tool_spf_dkim_dmarc_checker_faq_q5: 'ドメインは保存されますか？',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'DNS-over-HTTPS のためドメインとセレクタは Worker に届く必要があります。照会を長期のプロダクト DB としては保存しません。エッジ DNS ツールであり、「アップロードなし」ではありません。',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF; RFC 6376 DKIM; RFC 7489 DMARC。',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default ja;
