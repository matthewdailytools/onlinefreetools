/**
 * i18n tool shard (terraform-cidrsubnet / ja)。
 * 当地检索：terraform cidrsubnet、cidrsubnet 計算、Terraform サブネット。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Terraform と同じ子ネット CIDR を求める',
	tool_terraform_cidrsubnet_desc:
		'terraform cidrsubnet の計算。例: 10.1.2.0/24, 4, 15 → 10.1.2.240/28。端末内で処理し、サーバーにアップロードしません。',
	tool_terraform_cidrsubnet_description:
		'Terraform cidrsubnet を計算します。親プレフィックス・newbits・netnum を入れると子ネット CIDR が出ます。例: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28。cidrhost と cidrnetmask も同じページで確認できます。値は端末内に留まり、サーバーには上がりません。',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet が返すのは子のネットワークプレフィックスであり、ホスト IP ではありません。newbits は「4 本に分割」ではなく追加するプレフィックス長、netnum は 0 始まりの番号です。cidrhost がホスト、cidrnetmask は IPv4 の点付きマスクです。ブラウザ内で HashiCorp の規則に合わせて計算します。',
	tool_terraform_cidrsubnet_evaluate: '計算',
	tool_terraform_cidrsubnet_sample: 'サンプル読込',
	tool_terraform_cidrsubnet_clear: 'クリア',
	tool_terraform_cidrsubnet_copy_cidr: 'CIDR をコピー',
	tool_terraform_cidrsubnet_copy_hcl: 'HCL をコピー',
	tool_terraform_cidrsubnet_copy_ip: 'アドレスをコピー',
	tool_terraform_cidrsubnet_copy_done: 'コピーしました',
	tool_terraform_cidrsubnet_prefix_label: '親プレフィックス',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: '子 CIDR',
	tool_terraform_cidrsubnet_result_hcl_label: 'HCL 呼び出し',
	tool_terraform_cidrsubnet_result_len_label: '新しいプレフィックス長',
	tool_terraform_cidrsubnet_result_range_label: '使える netnum',
	tool_terraform_cidrsubnet_result_bits_label: 'ビットの内訳',
	tool_terraform_cidrsubnet_table_title: 'この newbits の全 netnum',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: '関連する関数',
	tool_terraform_cidrsubnet_host_prefix_label: 'cidrhost のプレフィックス',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'cidrhost を計算',
	tool_terraform_cidrsubnet_host_result_label: 'ホストアドレス',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'cidrnetmask のプレフィックス（IPv4 のみ）',
	tool_terraform_cidrsubnet_netmask_evaluate: 'cidrnetmask を計算',
	tool_terraform_cidrsubnet_netmask_result_label: 'ネットマスク',
	tool_terraform_cidrsubnet_err_empty: 'CIDR プレフィックスと整数の newbits・netnum を入力してください。',
	tool_terraform_cidrsubnet_err_prefix: 'CIDR プレフィックスではありません（アドレス/長さ、IPv4 または IPv6）。',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits は 0 以上の整数で、合計長は IPv4 なら 32、IPv6 なら 128 を超えてはいけません。',
	tool_terraform_cidrsubnet_err_netnum:
		'newbits={nb} に入る netnum は 0–{max} です。{nn} は入りません。Terraform でも拒否されます。',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum が残りのホストビットに収まりません。',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask は IPv4 専用です。IPv6 は cidrsubnet か cidrhost を使ってください。',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'親 /{old} に {nb} ビット足すと /{neu}。netnum {nn} が追加ビット、残りホストビットは {hb}。',
	tool_terraform_cidrsubnet_how_title: '使い方',
	tool_terraform_cidrsubnet_how_body:
		'HCL に書く三引数をここに入れて、apply 前に子ネット CIDR を確認します。',
	tool_terraform_cidrsubnet_how_item_1: 'cidrsubnet は子ネットのプレフィックスを返します。ホスト IP が欲しいときは cidrhost です。',
	tool_terraform_cidrsubnet_how_item_2: 'Terraform 変数の親 CIDR を貼ります（例: 10.1.2.0/24）。',
	tool_terraform_cidrsubnet_how_item_3: 'newbits（追加するプレフィックス長）と netnum（0 始まりの番号）を入れます。',
	tool_terraform_cidrsubnet_how_item_4: '子 CIDR を読み、HCL をコピーするか terraform console と突き合わせます。',
	tool_terraform_cidrsubnet_how_item_5: 'newbits に netnum が入らない場合はエラーになります。Terraform も同じ値を拒否します。',
	tool_terraform_cidrsubnet_formula_title: '計算式',
	tool_terraform_cidrsubnet_formula_body:
		'親のホストビットを 0 にしてから、追加プレフィックスへ netnum を書き込みます。IPv4 オクテットの先頭ゼロは十進として読みます（HashiCorp の説明どおり）。',
	tool_terraform_cidrsubnet_formula_item_1: '新しい長さ = 親の長さ + newbits（IPv4 ≤32、IPv6 ≤128）。',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits。',
	tool_terraform_cidrsubnet_formula_item_3: 'ネットワークアドレス OR（残りのホストビット数だけ左シフトした netnum）。',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost はホストビットに hostnum を入れます（負数は末尾から）。cidrnetmask は IPv4 の点付きマスクです。',
	tool_terraform_cidrsubnet_example_title: '例',
	tool_terraform_cidrsubnet_example:
		'入力: 10.1.2.0/24、newbits 4、netnum 15。出力: 10.1.2.240/28。追加 4 ビットは 0–15。15 は最終オクテットの上位ニブルになり 240 になります。',
	tool_terraform_cidrsubnet_usecases_title: 'こんなときに',
	tool_terraform_cidrsubnet_usecase_1:
		'VPC サブネットを apply する前に cidrsubnet(var.vpc_cidr, 8, count.index) の結果を見る。AZ0 は netnum 0。',
	tool_terraform_cidrsubnet_usecase_2:
		'公式の手計算 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28 を確認し、その /28 で cidrhost の 1 と 14 を取る。',
	tool_terraform_cidrsubnet_usecase_3:
		'IPv6 ULA を切る: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72。',
	tool_terraform_cidrsubnet_faq_q1: 'cidrnetmask が IPv6 を受けないのはなぜ？',
	tool_terraform_cidrsubnet_faq_a1:
		'HashiCorp の cidrnetmask は IPv4 専用で、255.255.255.0 のような点付きマスクを返します。IPv6 はプレフィックス長を残し、cidrsubnet か cidrhost を使います。',
	tool_terraform_cidrsubnet_faq_q2: 'newbits=4 はサブネット 4 本という意味？',
	tool_terraform_cidrsubnet_faq_a2:
		'違います。追加するプレフィックスが 4 ビットなので、netnum は 0–15 の 16 通り、子は 4 ビット長くなります（/24 → /28）。',
	tool_terraform_cidrsubnet_faq_q3: 'newbits が 4 なのに netnum 16 が失敗する理由は？',
	tool_terraform_cidrsubnet_faq_a3:
		'4 ビットに入るのは 0–15 だけです。Terraform は回り込みせずエラーにします。誤った CIDR を HCL に貼らないよう、ここでも拒否します。',
	tool_terraform_cidrsubnet_faq_q4: 'cidrhost と cidrsubnet の違いは？',
	tool_terraform_cidrsubnet_faq_a4:
		'cidrsubnet はプレフィックス（アドレス+長さ）。cidrhost はプレフィックス内のホスト 1 件。hostnum 0 はネットワーク自身、負数は末尾から数えます（cidrhost("10.0.0.0/8", -2) → 10.255.255.254）。',
	tool_terraform_cidrsubnet_faq_q5: 'cidrsubnets や hashicorp/subnets/cidr モジュールは？',
	tool_terraform_cidrsubnet_faq_a5:
		'扱いません。複数形の cidrsubnets は 0 から連続割り当て、Registry モジュールは別物です。このページは 1 回の cidrsubnet / cidrhost / cidrnetmask だけです。',
	tool_terraform_cidrsubnet_faq_q6: 'プレフィックスはサーバーに上がりますか？',
	tool_terraform_cidrsubnet_faq_a6:
		'上がりません。値はお使いの端末・このタブ内に留まり、サーバーにはアップロードしません。特定 CLI 版が必要なら terraform console を使ってください。',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — cidrsubnet 関数',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — cidrhost 関数',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — cidrnetmask 関数',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — CIDR 表記',
	tool_terraform_cidrsubnet_disclaimer:
		'HashiCorp の cidrsubnet / cidrhost / cidrnetmask に合わせることを目指しています。terraform console の代替ではなく、版差は公式ドキュメントを優先してください。',
};

export default ja;
