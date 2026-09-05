/**
 * i18n tool shard (uuid-generator / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_uuid_generator_article:
    'UUID v4 または ULID をローカルで一括生成。暗号学的に強い乱数を使用。テストデータ、trace id、スキーマ stub に — アップロードなし。',
  tool_uuid_generator_clear: 'クリア',
  tool_uuid_generator_copy_all: 'すべてコピー',
  tool_uuid_generator_copy_done: 'コピー済み',
  tool_uuid_generator_count_label: '件数（1–100）',
  tool_uuid_generator_desc: 'UUID v4 と ULID をローカル生成 — 最大 100 件、ワンクリックコピー。',
  tool_uuid_generator_description:
    'ブラウザで UUID v4 または ULID 文字列を生成。手順：タイプ選択、件数（1–100）設定、生成クリック、すべてコピー。例：RFC 形式 v4 を 3 件、`550e8400-e29b-41d4-a716-446655440000` など。crypto.getRandomValues 使用 — ID は端末外に出ません。',
  tool_uuid_generator_example:
    'UUID v4（小文字・ハイフン付き）：`550e8400-e29b-41d4-a716-446655440000`。ULID（26 文字 Crockford Base32、時間ソート可能）：`01ARZ3NDEKTSV4RRFFQ69G5FAV`。サンプルで固定 v4 を 3 件入力し形式確認。',
  tool_uuid_generator_example_title: '例',
  tool_uuid_generator_faq_a1:
    'UUID v4 は 128 ビット乱数（バージョンニブル固定）で不透明 ID に向く。ULID はミリ秒タイムスタンプ接頭辞があり作成時刻で辞書順ソート — ログや時系列キー向け。',
  tool_uuid_generator_faq_a2:
    'グローバル一意性は保証しません。crypto.getRandomValues（または randomUUID）使用。実用上予測困難ですが、ドメイン次第で衝突処理が必要です。',
  tool_uuid_generator_faq_a3: '1 回最大 100 件でページ応答性を維持。追加は再生成。',
  tool_uuid_generator_faq_a4: 'アップロード・サーバー生成なし。ブラウザタブ内で完結。',
  tool_uuid_generator_faq_a5: 'UUID v4：36 文字・ハイフン・小文字 hex。ULID：26 文字・大文字 Crockford Base32・ハイフンなし。',
  tool_uuid_generator_faq_q1: 'UUID v4 と ULID はどう選ぶ？',
  tool_uuid_generator_faq_q2: '生成 ID は暗号学的に安全？',
  tool_uuid_generator_faq_q3: 'なぜ一括上限 100？',
  tool_uuid_generator_faq_q4: 'ID はブラウザ外に出る？',
  tool_uuid_generator_faq_q5: '出力形式は？',
  tool_uuid_generator_generate: '生成',
  tool_uuid_generator_how_body:
    'UUID v4 で標準ランダム UUID、ULID で 26 文字の時間ソート可能 ID。件数（1–100）を設定して生成。すべてコピーで 1 行 1 ID。乱数はブラウザ CSPRNG から。',
  tool_uuid_generator_how_item_1: 'UUID v4 または ULID を選びます。',
  tool_uuid_generator_how_item_2: '生成数を 1–100 で設定します。',
  tool_uuid_generator_how_item_3: '「生成」を押します（または「サンプル」で固定デモ ID）。',
  tool_uuid_generator_how_item_4: '「すべてコピー」で 1 行 1 ID をクリップボードへ。',
  tool_uuid_generator_how_title: '使い方',
  tool_uuid_generator_output_label: '生成された ID',
  tool_uuid_generator_rules_body:
    'コードや DB に貼る際の形式差と実用上の制限。',
  tool_uuid_generator_rules_item_1:
    'UUID v4 は RFC 4122：`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`、小文字 hex。',
  tool_uuid_generator_rules_item_2:
    'ULID：48 ビット Unix ms + 80 ビット乱数を 26 文字 Crockford Base32（I/L/O/U なし）に。',
  tool_uuid_generator_rules_item_3:
    'マシン・時間を跨いだ一意性は保証しない — 強い乱数サンプルとして扱い、分散 ID サービスではない。',
  tool_uuid_generator_rules_item_4:
    'プライバシー：生成にネットワーク不要；コピーしない限り端末外に出ない。',
  tool_uuid_generator_rules_title: 'ルール',
  tool_uuid_generator_sample: 'サンプル',
  tool_uuid_generator_title: 'UUID/ULID ジェネレーター — ブラウザで ID を作成',
  tool_uuid_generator_type_label: 'ID タイプ',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'fixture 投入前に dev DB へ不透明主キーを一括投入。',
  tool_uuid_generator_usecase_2: '統合テスト用 trace / correlation id を一括作成。',
  tool_uuid_generator_usecase_3: 'リクエストボディで ULID 風ソート可能 ID を受ける API の試作。',
  tool_uuid_generator_usecases_title: '向いている用途',
};
export default ja;
