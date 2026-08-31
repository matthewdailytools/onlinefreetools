/**
 * i18n tool shard (aws-vpc-cidr-planner / ja).
 * 当地：AWS VPC CIDR 設計 / サブネット分割。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_aws_vpc_cidr_planner_title: 'AWS VPC CIDR プランナー — AZ ごとにサブネットへ分割',
	tool_aws_vpc_cidr_planner_desc:
		'AWS VPC CIDR 設計：10.0.0.0/16 を貼り 3 AZ を選ぶと公開/プライベートサブネットが出ます。端末内で、サーバーへ送りません。',
	tool_aws_vpc_cidr_planner_description:
		'AWS VPC CIDR プランナー：VPC CIDR（例 10.0.0.0/16）を貼り、2 または 3 AZ を選ぶと公開・プライベートのサブネット CIDR が得られます。AWS の /16–/28 制限を守り、サブネットごとに予約 5 アドレスを引き、172.17.0.0/16（Docker 既定ブリッジ）との重なりを警告します。Azure 風の予約説明も選べます。計算はお使いの端末内で、サーバーにはアップロードしません。',
	tool_aws_vpc_cidr_planner_article:
		'1 本の VPC プレフィックスを AZ ごとのサブネットにします。AWS アカウントは不要で、プレフィックス計算だけです。',
	tool_aws_vpc_cidr_planner_plan: '計画',
	tool_aws_vpc_cidr_planner_sample: 'サンプル読込',
	tool_aws_vpc_cidr_planner_clear: 'クリア',
	tool_aws_vpc_cidr_planner_copy: '表をコピー',
	tool_aws_vpc_cidr_planner_copy_done: 'コピーしました',
	tool_aws_vpc_cidr_planner_input_label: 'VPC CIDR',
	tool_aws_vpc_cidr_planner_input_ph: '10.0.0.0/16',
	tool_aws_vpc_cidr_planner_az_label: 'アベイラビリティーゾーン',
	tool_aws_vpc_cidr_planner_az_2: '2 AZ',
	tool_aws_vpc_cidr_planner_az_3: '3 AZ',
	tool_aws_vpc_cidr_planner_plat_label: '予約アドレスの規則',
	tool_aws_vpc_cidr_planner_plat_aws: 'AWS（サブネットあたり 5）',
	tool_aws_vpc_cidr_planner_plat_azure: 'Azure 風（先頭 4 + 末尾）',
	tool_aws_vpc_cidr_planner_result_label: 'サブネット計画',
	tool_aws_vpc_cidr_planner_col_role: '役割',
	tool_aws_vpc_cidr_planner_col_cidr: 'CIDR',
	tool_aws_vpc_cidr_planner_col_usable: '利用可能 IP',
	tool_aws_vpc_cidr_planner_role_pub: 'AZ {n} パブリック',
	tool_aws_vpc_cidr_planner_role_priv: 'AZ {n} プライベート',
	tool_aws_vpc_cidr_planner_warn_docker:
		'この VPC は Docker 既定ブリッジ 172.17.0.0/16 と重なります。同じホストでは経路衝突が起きやすいです。',
	tool_aws_vpc_cidr_planner_reserved_aws:
		'AWS はサブネットごとに 5 アドレスを予約します：ネットワーク、+1 VPC ルータ、+2 DNS、+3 将来、ブロードキャスト。',
	tool_aws_vpc_cidr_planner_reserved_azure:
		'Azure 風の数え方は先頭 4 と末尾を予約します（同じく 5）。',
	tool_aws_vpc_cidr_planner_err_empty: '10.0.0.0/16 のような VPC CIDR を入力してください。',
	tool_aws_vpc_cidr_planner_err_parse: 'IPv4 CIDR として解釈できません。',
	tool_aws_vpc_cidr_planner_err_vpc: 'AWS VPC の IPv4 CIDR は /16 から /28 です。',
	tool_aws_vpc_cidr_planner_err_fit: 'この VPC は /28 以内の等長サブネット {slots} 本を収められません。プレフィックスを短くするか AZ を減らしてください。',
	tool_aws_vpc_cidr_planner_err_ipv6: 'このプランナーは IPv4 VPC CIDR のみです。',
	tool_aws_vpc_cidr_planner_how_title: '使い方',
	tool_aws_vpc_cidr_planner_how_body:
		'AWS VPC CIDR プランナーは 1 本の VPC を AZ ごとの公開/プライベートに分けます。コンソールログインではなく、貼り付け用 CIDR が得られます。',
	tool_aws_vpc_cidr_planner_how_item_1: '作業は VPC CIDR の分割であり、AWS 上に実 VPC を作ることではないと確認する。',
	tool_aws_vpc_cidr_planner_how_item_2: '10.0.0.0/16 を貼り、2 または 3 AZ を選ぶ（またはサンプル）。',
	tool_aws_vpc_cidr_planner_how_item_3: '各公開/プライベート CIDR と、予約を除いた利用可能 IP を読む。',
	tool_aws_vpc_cidr_planner_how_item_4: '172.17.0.0/16 の警告が出たら、同じホストで Docker を使う場合は別ブロックにする。',
	tool_aws_vpc_cidr_planner_how_item_5: 'cidrsubnet() の評価は関連の Terraform ツールへ。',
	tool_aws_vpc_cidr_planner_formula_title: '計算式',
	tool_aws_vpc_cidr_planner_formula_body:
		'2×AZ 本の等長サブネットが必要。追加ビット = ceil(log2(2×AZ))。サブネット長 = VPC 長 + 追加（≤28）。VPC ネットワークから順に切る。利用可能 IP = 2^(32−サブネット長) − 5。',
	tool_aws_vpc_cidr_planner_formula_item_1: '/16–/28 外の VPC と IPv6 は拒否する。',
	tool_aws_vpc_cidr_planner_formula_item_2: '先の AZ 本がパブリック、次がプライベート。',
	tool_aws_vpc_cidr_planner_formula_item_3: 'AWS 予約はネットワーク、ルータ、DNS、将来、ブロードキャスト。Azure 風は同じ個数。',
	tool_aws_vpc_cidr_planner_formula_item_4: '172.17.0.0/16 との重なりは警告のみ。',
	tool_aws_vpc_cidr_planner_example_title: '例',
	tool_aws_vpc_cidr_planner_example:
		'入力: 10.0.0.0/16、3 AZ、AWS。出力は 6 本の /19：10.0.0.0/19 AZ1 パブリック … 10.0.160.0/19 AZ3 プライベート。各 8192−5 = 8187 利用可能。',
	tool_aws_vpc_cidr_planner_usecases_title: 'こんなときに',
	tool_aws_vpc_cidr_planner_usecase_1: '新規アカウントで 10.0.0.0/16 を 3 AZ に切ってから Terraform を書く。',
	tool_aws_vpc_cidr_planner_usecase_2: '172.17.0.0/16 に乗った計画を Docker と衝突する前に見つける。',
	tool_aws_vpc_cidr_planner_usecase_3: '出力した /19 を cidrsubnet(prefix, 3, netnum) と照合する。',
	tool_aws_vpc_cidr_planner_faq_q1: 'AWS が許す VPC CIDR の大きさは？',
	tool_aws_vpc_cidr_planner_faq_a1: 'IPv4 VPC CIDR は /16 から /28。本プランナーのサブネットも /28 より細かくしません。AWS ドキュメントと一致します。',
	tool_aws_vpc_cidr_planner_faq_q2: 'なぜサブネットごとに 5 アドレス足りないのですか？',
	tool_aws_vpc_cidr_planner_faq_a2: 'AWS はネットワーク、VPC ルータ、DNS、将来用、ブロードキャストを予約します。利用可能 = 総数 − 5。Azure 風も 5 を引きます。',
	tool_aws_vpc_cidr_planner_faq_q3: 'なぜ 172.17.0.0/16 を警告するのですか？',
	tool_aws_vpc_cidr_planner_faq_a3: 'Docker 既定ブリッジがその空間です。重なるとコンテナから VPC へ届かないことがあります。表は出し、警告を添えます。',
	tool_aws_vpc_cidr_planner_faq_q4: 'Terraform cidrsubnet との違いは？',
	tool_aws_vpc_cidr_planner_faq_a4: '本ページは公開/プライベート一式を割り当てます。cidrsubnet() は 1 回の関数です。newbits と netnum が分かっているときは Terraform ツールへ。',
	tool_aws_vpc_cidr_planner_faq_q5: 'Azure 切替は VNet を作りますか？',
	tool_aws_vpc_cidr_planner_faq_a5: 'いいえ。予約アドレスの説明だけ変えます。H1 は AWS VPC CIDR プランナーのままです。API は呼びません。',
	tool_aws_vpc_cidr_planner_faq_q6: 'AWS アカウントは必要ですか。CIDR は送信されますか。',
	tool_aws_vpc_cidr_planner_faq_a6: 'アカウント不要。プレフィックスはお使いの端末のこのタブ内に留まり、サーバーへはアップロードしません。',
	tool_aws_vpc_cidr_planner_ref_vpc_label: 'AWS ドキュメント — VPC CIDR ブロック',
	tool_aws_vpc_cidr_planner_ref_subnet_label: 'AWS ドキュメント — サブネットサイズ',
	tool_aws_vpc_cidr_planner_disclaimer:
		'数値は公開されている AWS IPv4 VPC/サブネット規模（予約アドレス含む）に従います。公式アーキテクチャ助言ではありません。本番前に現行ドキュメントを確認してください。',
};

export default ja;
