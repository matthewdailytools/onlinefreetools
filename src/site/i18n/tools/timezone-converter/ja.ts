/**
 * i18n tool shard (timezone-converter / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_timezone_converter_article:
    'ソース IANA ゾーンのある時刻を選び、UTC・ニューヨーク・ロンドン・東京など複数ゾーンのローカル時刻を一覧表示。リモート定例、ログ照合、世界時計向け — Intl でブラウザ内完結、アップロードなし。',
  tool_timezone_converter_clear: 'クリア',
  tool_timezone_converter_col_local: 'ローカル日時',
  tool_timezone_converter_col_offset: 'UTC オフセット',
  tool_timezone_converter_col_zone: 'タイムゾーン',
  tool_timezone_converter_compare_zones: '比較するゾーン',
  tool_timezone_converter_convert: '変換',
  tool_timezone_converter_desc:
    'IANA タイムゾーン間で同一瞬間を対照。DST の注意付き、ブラウザ内ローカル処理。',
  tool_timezone_converter_description:
    'ブラウザで IANA ゾーンの日時を複数ゾーンに変換。手順：ローカル日時入力 → ソースゾーン選択 → 比較ゾーンにチェック → 変換。例：2026-06-15 14:30 ロサンゼルス → ニューヨーク・ロンドン・東京・UTC の行とオフセット。DST の欠落時刻を説明。会議エクスポートパックではありません。',
  tool_timezone_converter_error_dst_gap:
    'ソースゾーンに存在しないローカル時刻です（サマータイム開始で飛ばされた時間）。前後の時刻を選んでください。',
  tool_timezone_converter_error_empty: '日時を入力し、比較ゾーンを1つ以上選んでください。',
  tool_timezone_converter_error_invalid: '日時形式が不正です。ピッカーまたは YYYY-MM-DDTHH:MM を使用。',
  tool_timezone_converter_example:
    '読み込み時の固定例：2026-06-15 14:30 America/Los_Angeles → UTC・NY・ロンドン・東京のローカル表示と UTC オフセット（その日の IANA ルールに従う）。',
  tool_timezone_converter_example_title: '例',
  tool_timezone_converter_faq_a1:
    'America/New_York や Asia/Tokyo など IANA 名称を使用（ブラウザ・サーバーと同じ）。EST や JST など略称は曖昧 — 予定にはフル IANA 名を。',
  tool_timezone_converter_faq_a2:
    'サマータイム開始日は存在しない時刻があり — エラー表示。終了日は同じローカル時刻が二重になる場合あり — Intl は一方を採用。重要な会議はその日手動確認を。',
  tool_timezone_converter_faq_a3:
    'Unix タイムスタンプツールは epoch 秒 ↔ 時刻（多くは UTC）。本ページは名前付きソースゾーンを保ち複数列で対照 — 「向こうは何時？」向け。',
  tool_timezone_converter_faq_a4:
    'いいえ。個人参照用の即時対照表。共有可能な会議パック、参加者リスト、ICS 出力はありません。',
  tool_timezone_converter_faq_a5:
    'はい。組み込み Intl.DateTimeFormat のみ — 日時はブラウザ外に出ません。',
  tool_timezone_converter_faq_q1: 'EST/PST ではなく IANA 名なのは？',
  tool_timezone_converter_faq_q2: 'サマータイム切替日はどうなる？',
  tool_timezone_converter_faq_q3: 'Unix タイムスタンプ変換との違いは？',
  tool_timezone_converter_faq_q4: 'チーム会議用タイムゾーンパックをここで出力できる？',
  tool_timezone_converter_faq_q5: '日時はサーバーに送られる？',
  tool_timezone_converter_how_body:
    'ローカル日時と IANA ソースゾーンを入力。比較ゾーンにチェックして変換。同一瞬間の各ゾーンの時刻と UTC オフセットを表で表示（Intl、ブラウザ内）。',
  tool_timezone_converter_how_title: '使い方',
  tool_timezone_converter_local_tz: 'ブラウザ',
  tool_timezone_converter_now: '現在',
  tool_timezone_converter_rules_body:
    'IANA ルール、DST の挙動、epoch や会議エクスポート系との役割分担。',
  tool_timezone_converter_rules_item_1:
    'ゾーンは IANA Time Zone Database（tzdata）に従う。オフセットは DST で変化 — 入力日のルールで計算（固定 GMT 差ではない）。',
  tool_timezone_converter_rules_item_2:
    '春の欠落：存在しない時刻 → エラー。秋の重複：同じローカル時刻 → Intl が一方のオフセット — 境界日は要確認。',
  tool_timezone_converter_rules_item_3:
    'CST や IST など略称は地域が複数。API・cron・招待には IANA フル名を。',
  tool_timezone_converter_rules_item_4:
    'プライバシー：アップロードなし。読み取り専用対照 — 会議スケジューラでも IP 位置でもない。',
  tool_timezone_converter_rules_title: '想定されるルール',
  tool_timezone_converter_sample: 'サンプル読込',
  tool_timezone_converter_source_time: 'ソース日時',
  tool_timezone_converter_source_tz: 'ソースタイムゾーン',
  tool_timezone_converter_title: 'タイムゾーン変換 — 同一時刻を世界で対照',
  tool_timezone_converter_usecase_1:
    'リモートチーム：「太平洋 15:30」— NY・ロンドン・東京を一表で確認してから参加。',
  tool_timezone_converter_usecase_2:
    '運用ログ：Chicago ローカルで記録 — UTC と自ゾーンを暗算なしで対照。',
  tool_timezone_converter_usecase_3:
    '渡航：Dubai 到着を基準に Sydney と LA を並べて引き継ぎ通話に。',
  tool_timezone_converter_usecases_title: 'こんなときに',
};
export default ja;
