/**
 * i18n tool shard (json-schema-validator / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_json_schema_validator_article:
    'ブラウザ内で draft-07 の Schema に対して JSON を検証します。失敗は JSON Pointer で示され、モデル出力や feed の修正に使えます。データはアップロードしません。',
  tool_json_schema_validator_bad_instance: 'インスタンスが有効な JSON ではありません。',
  tool_json_schema_validator_bad_schema: 'Schema が有効な JSON ではないか、コンパイルに失敗しました。',
  tool_json_schema_validator_clear: 'クリア',
  tool_json_schema_validator_copy_done: 'コピー済み',
  tool_json_schema_validator_copy_errors: 'エラーをコピー',
  tool_json_schema_validator_desc:
    'Schema で JSON を検証し JSON Pointer で場所を示す — ローカル draft-07。',
  tool_json_schema_validator_description:
    'ブラウザで JSON Schema（draft-07）に対して JSON を検証します。手順：Schema とインスタンスを貼り、検証し、失敗ごとに JSON Pointer を確認。例：price が無い商品オブジェクトは missingProperty で失敗します。貼り付けはタブ内に留まり、Ajv は CDN からライブラリだけ取得します。',
  tool_json_schema_validator_draft_note: 'エンジン: Ajv 8 · JSON Schema draft-07（既定）。',
  tool_json_schema_validator_empty: '先に Schema とインスタンス JSON を貼ってください。',
  tool_json_schema_validator_example:
    'Schema は sku（文字列）と price（0 以上の数値）を必須にします。成功例: {"sku":"A-1","price":9.5}。失敗例: {"sku":"A-1"} — ルート (/) で price の missingProperty が出ます。',
  tool_json_schema_validator_example_title: '例',
  tool_json_schema_validator_fail: '失敗 — 下のパスを確認',
  tool_json_schema_validator_faq_a1:
    'よくある原因は required 不足、型の不一致、additionalProperties:false です。Pointer 行とキーワードの説明を見てください。',
  tool_json_schema_validator_faq_a2:
    'instancePath はインスタンスへの JSON Pointer です（空は /）。required 欠落時は params に missingProperty も付きます。',
  tool_json_schema_validator_faq_a3:
    '本ページは Ajv の draft-07 を使います。2019-09 / 2020-12 は別ビルドが必要で、ここでは選べません。',
  tool_json_schema_validator_faq_a4:
    'Schema と JSON はアップロードされません。CDN は Ajv のコードだけを取得します。',
  tool_json_schema_validator_faq_a5:
    'Schema とモデル JSON を貼って検証し、各 Pointer を直して通るまで繰り返します。構造化出力を下流に渡す前の確認向きです。',
  tool_json_schema_validator_faq_q1: 'なぜ検証に失敗しますか？',
  tool_json_schema_validator_faq_q2: 'JSON Pointer エラーの読み方は？',
  tool_json_schema_validator_faq_q3: 'このページの draft は？',
  tool_json_schema_validator_faq_q4: 'JSON はブラウザの外に出ますか？',
  tool_json_schema_validator_faq_q5: 'LLM の構造化出力をどう確認しますか？',
  tool_json_schema_validator_how_body:
    '左に Schema、右にインスタンスを貼ります。Ajv（draft-07）がコンパイルと検証を行い、各エラーを JSON Pointer 付きで一覧します。失敗／成功サンプルがあり、入場時は失敗サンプルで実パスをすぐ見せます。',
  tool_json_schema_validator_how_item_1: '左に JSON Schema（draft-07）を貼り付けます。',
  tool_json_schema_validator_how_item_2: '右に JSON インスタンスを貼り付けます。',
  tool_json_schema_validator_how_item_3: '「検証」を押します。',
  tool_json_schema_validator_how_item_4: 'JSON Pointer パスに従い各エユーザーを修正します。',
  tool_json_schema_validator_how_title: '使い方',
  tool_json_schema_validator_instance_label: 'インスタンス JSON',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    '貼り付け合計が約 20 万文字を超えると遅くなることがあります。短い抜粋で試してください。',
  tool_json_schema_validator_need_lib: 'Ajv を読み込めません。接続を確認して再読み込みしてください。',
  tool_json_schema_validator_pass: '成功 — インスタンスは Schema に一致',
  tool_json_schema_validator_result_label: '結果',
  tool_json_schema_validator_rules_body:
    'このページの流れ：解析 → draft-07 Schema をコンパイル → インスタンス検証 → エラーごとに Pointer を出す。',
  tool_json_schema_validator_rules_item_1:
    '解析：両パネルとも JSON.parse できる必要があります。構文／コンパイルエラーは検証失敗と分けて表示します。',
  tool_json_schema_validator_rules_item_2:
    '検証：allErrors ですべての失敗を集めます。各行は instancePath + message（必要なら missingProperty）。',
  tool_json_schema_validator_rules_item_3:
    'Draft：既定は draft-07。ここでは 2020-12 の語彙を前提にしないでください。',
  tool_json_schema_validator_rules_item_4:
    'プライバシー：貼り付けはタブ内。CDN は Ajv コードのみ取得します。',
  tool_json_schema_validator_rules_title: '想定されるルール',
  tool_json_schema_validator_sample_fail: '失敗サンプル',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: '成功サンプル',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'JSON Schema バリデータ — draft-07 のパス、ローカル',
  tool_json_schema_validator_usecase_1:
    'AI / エージェント：モデルの構造化 JSON に欠けたフィールドがないか、パイプライン投入前に確認する。',
  tool_json_schema_validator_usecase_2:
    '商用 feed：商品 JSON を Schema で検証してから取り込む。',
  tool_json_schema_validator_usecase_3:
    'API 調査：契約から抜いた Schema 断片にリクエスト／レスポンス本体を貼って照合する。',
  tool_json_schema_validator_usecases_title: 'こんなときに',
  tool_json_schema_validator_validate: '検証',
};
export default ja;
