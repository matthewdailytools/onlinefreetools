/**
 * i18n tool shard (csv-json / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_csv_json_article:
    'CSV ↔ JSON の双方向変換。型推定・区切り文字・引用のルール、そして入れ子 JSON をどう列に平坦化するかを明示します。表計算 ↔ API のデータ受け渡し向けで、薄い URL の量産ではありません。',
  tool_csv_json_clear: 'クリア',
  tool_csv_json_convert: '変換',
  tool_csv_json_copy_csv: 'CSVをコピー',
  tool_csv_json_copy_done: 'コピーしました',
  tool_csv_json_copy_json: 'JSONをコピー',
  tool_csv_json_csv_input_label: 'CSV入力',
  tool_csv_json_csv_output_label: 'CSV出力',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: '自動判定',
  tool_csv_json_delimiter_comma: 'カンマ ,',
  tool_csv_json_delimiter_label: '区切り文字',
  tool_csv_json_delimiter_semicolon: 'セミコロン ;',
  tool_csv_json_delimiter_tab: 'タブ',
  tool_csv_json_description:
    'ブラウザ内で CSV を JSON に、または JSON を CSV に変換します。手順：方向を選び、貼り付けかアップロード、区切り文字とヘッダーを設定し、コピーまたはダウンロード。カンマ・セミコロン・タブを含む引用符付きフィールドに対応し、JSON から CSV では入れ子オブジェクトを列に平坦化します。例：商品表（sku・タイトル・価格）を JSON 配列に変換し、データは端末内に留まります。',
  tool_csv_json_dir_label: '変換方向',
  tool_csv_json_download_csv: 'CSVをダウンロード',
  tool_csv_json_download_json: 'JSONをダウンロード',
  tool_csv_json_empty: 'まず内容を貼り付けてください。',
  tool_csv_json_example:
    'CSV `sku,title,price` の行 `A-001,"Chair, oak",129.9` は JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` になります（型オフでは price は文字列、オンで数値 129.9）。逆に `[{"sku":"A-001","dim":{"w":40,"h":90}}]` はヘッダー `sku,dim.w,dim.h` と行 `A-001,40,90` を生成します。',
  tool_csv_json_example_title: '例',
  tool_csv_json_faq_a1: 'はい。カンマ・セミコロン・タブから選べます。自動判定のままにすれば Papa Parse が本文から推測します。セミコロンは欧州の Excel 書き出しで一般的で、タブは TSV です。',
  tool_csv_json_faq_a2:
    '既定では各セルを文字列として扱うため、007 や長い ID は保たれます。「型を推定」を有効にすると数値らしい値が数値になり、007 は 7 に、非常に長い数字列は精度を失うことがあります。SKU・郵便番号・電話番号ではオフのままに。',
  tool_csv_json_faq_a3: 'RFC 4180 に従い二重引用符で囲み、内側の引用符は二重化します。そのため Chair, oak のようなタイトルは2列に分かれず1フィールドに収まります。',
  tool_csv_json_faq_a4: 'オブジェクトはドットパスの列に平坦化されます（dim.w、dim.h）。配列は1セル内の JSON 文字列になります。列はすべてのレコードのキーの和集合で、そのキーを持たないレコードは空欄です。',
  tool_csv_json_faq_a5:
    'いいえ。解析はこのタブ内で行われ、選んだファイルもローカルで読み込みます。このサイトが Papa Parse を配信することはありますが、それはコードのダウンロードであり、CSV や JSON のアップロードではありません。',
  tool_csv_json_faq_q1: 'セミコロンやタブにも対応しますか（カンマだけでなく）？',
  tool_csv_json_faq_q2: '数値・先頭ゼロ・ID はそのまま保たれますか？',
  tool_csv_json_faq_q3: 'カンマ・引用符・改行を含むフィールドはどう扱われますか？',
  tool_csv_json_faq_q4: '入れ子の JSON はどう CSV の列になりますか？',
  tool_csv_json_faq_q5: 'データはブラウザの外に出ますか？',
  tool_csv_json_header: '先頭行をヘッダーにする',
  tool_csv_json_how_body:
    'CSV → JSON か JSON → CSV を選ぶと、解析と生成はこのタブ内で Papa Parse により行われます。CSV では区切り文字（または自動判定）、先頭行をヘッダーにするか、数値/真偽を推定するかを選べます。JSON では入れ子オブジェクトをドットパスの列に平坦化し、列はすべてのキーの和集合になります。',
  tool_csv_json_how_item_1: 'CSV → JSON または JSON → CSV を選びます。',
  tool_csv_json_how_item_2: '入力を貼り、CSV の区切り / ヘッダー設定を行います。',
  tool_csv_json_how_item_3: '「変換」を押します（ネスト JSON は CSV 出力時に列へ展開）。',
  tool_csv_json_how_item_4: '結果をコピーまたはダウンロードします。',
  tool_csv_json_how_title: '仕組み',
  tool_csv_json_indent_2: 'スペース2',
  tool_csv_json_indent_4: 'スペース4',
  tool_csv_json_indent_label: 'インデント',
  tool_csv_json_indent_minify: 'JSONを圧縮',
  tool_csv_json_json_input_label: 'JSON入力',
  tool_csv_json_json_output_label: 'JSON出力',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_large_warn: '入力がとても大きいです（200万文字超）。変換が遅く感じることがあります。小さいファイルでお試しください。',
  tool_csv_json_need_lib: 'Papa Parse を読み込めませんでした。接続を確認して再読み込みしてください。',
  tool_csv_json_rules_body: '変換時に想定できること：セルの型の扱い、適用される区切り文字と引用のルール、入れ子 JSON が列にどう対応するか。',
  tool_csv_json_rules_item_1: '型：CSV のセルは既定で文字列です。「型を推定」で数値/真偽になりますが、007 は 7 になり、長い数字列は精度を失うことがあります。SKU・郵便番号・電話番号ではオフのままにしてください。',
  tool_csv_json_rules_item_2:
    '区切り文字：カンマ、セミコロン（欧州の Excel で一般的）、タブ（TSV）に対応し、自動判定は本文から推測します。区切り文字・引用符・改行を含むフィールドは RFC 4180 に従い二重引用符で囲みます。',
  tool_csv_json_rules_item_3: 'JSON → CSV：オブジェクトはドットパスに平坦化（dim.w、dim.h）、配列は1セル内の JSON 文字列として書き出します。列はすべてのキーの和集合で、欠けた値は空欄になります。',
  tool_csv_json_rules_item_4: 'プライバシー：貼り付けやファイルはアップロードされません。このサイトから Papa Parse を取得してもライブラリのコードを落とすだけで、データは送られません。',
  tool_csv_json_rules_title: '想定しておくルール',
  tool_csv_json_sample: 'サンプルを読み込む',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'CSV と JSON を相互変換 — ブラウザ内で表を変換',
  tool_csv_json_typing: '型を推定（数値/真偽）',
  tool_csv_json_usecase_1: 'EC：書き出した商品表（sku・タイトル・価格）を、ストアやマーケットプレイスの API 用に JSON 配列へ変換。',
  tool_csv_json_usecase_2: '開発者：API/JSON の応答を、表計算・照合・受け渡し用に CSV へ整形。',
  tool_csv_json_usecase_3: 'データ/運用：レポートやイベントの CSV（カンマ・セミコロン・TSV）を JSON にしてパイプラインへ。カンマや改行も安全にエスケープ。',
  tool_csv_json_usecases_title: 'こんなときに',
};
export default ja;
