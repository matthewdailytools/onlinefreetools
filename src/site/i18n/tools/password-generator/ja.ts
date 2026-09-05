/**
 * i18n tool shard (password-generator / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_password_generator_article:
    '選択した文字種から crypto.getRandomValues でランダムパスワードを生成。デモ、使い捨てアカウント、長さ/文字種ルールの試行向け — パスワードマネージャーではなく、強度保証でもありません。',
  tool_password_generator_charset_label: '文字種',
  tool_password_generator_clear: 'クリア',
  tool_password_generator_copy: 'コピー',
  tool_password_generator_copy_done: 'コピー済み',
  tool_password_generator_count_label: '件数（1–100）',
  tool_password_generator_desc:
    '長さと文字種を選べるランダムパスワード — crypto.getRandomValues でローカル生成。',
  tool_password_generator_description:
    'ブラウザでランダムパスワードを生成。手順：長さ（8–128）設定、大文字/小文字/数字/記号にチェック、必要なら紛らわしい文字を除外、生成クリック、コピー。例：16 文字で大小文字・数字・記号を混在。crypto.getRandomValues のみ — 保存・アップロードなし。',
  tool_password_generator_digits: '数字',
  tool_password_generator_disclaimer:
    'デモ向けの便利ツール — パスワード金庫ではありません。銀行口座やメインアカウントは専用パスワードマネージャーを。パスワードはローカル生成され、当社サーバーに保存されません。',
  tool_password_generator_empty_charset: '少なくとも 1 つの文字種を有効に（除外後も残ること）。',
  tool_password_generator_example:
    '長さ 16・全文字種オンなら `Xk9#mP2$vL4@nQ8!` のような混在 — 大小文字・数字・記号。クリックごとに新しい文字列；サンプルは長さ 16・全オン。',
  tool_password_generator_example_title: '例',
  tool_password_generator_exclude_ambiguous: '紛らわしい文字を除外（0 O I l 1）',
  tool_password_generator_faq_a1:
    'いいえ。生成はすべてブラウザ内。ここで作ったパスワードを記録・保存・送信しません。',
  tool_password_generator_faq_a2:
    '乱数は crypto.getRandomValues（CSPRNG）、Math.random ではありません。長く文字種が多いほど推測に強い傾向ですが、タブが「解読不能」を保証はしません — 組織ポリシーに従い、本番秘密はマネージャーを。',
  tool_password_generator_faq_a3:
    'できません。このページは新しいランダム文字列を作るだけ。既存パスワードの監査・クラック・復元は不可。',
  tool_password_generator_faq_a4:
    '視覚的に似た文字（0/O、1/l/I）を除き、読み上げ・手入力しやすく — 文字プールはやや小さくなります。',
  tool_password_generator_faq_a5:
    '1 回最大 100 件、1 行 1 パスワード。追加は再生成。',
  tool_password_generator_faq_q1: 'パスワードはサーバーに保存・送信される？',
  tool_password_generator_faq_q2: 'どのくらい強い？',
  tool_password_generator_faq_q3: '既存パスワードをクラックできる？',
  tool_password_generator_faq_q4: '「紛らわしい文字を除外」とは？',
  tool_password_generator_faq_q5: '一度に何件生成できる？',
  tool_password_generator_generate: '生成',
  tool_password_generator_how_body:
    '長さを調整し、文字クラスを選び、必要なら紛らわしい字形を除外、件数を設定して生成。各文字は結合プールから crypto.getRandomValues で選択。リストをコピー — ページを離れると残りません。',
  tool_password_generator_how_title: '使い方',
  tool_password_generator_length_label: '長さ',
  tool_password_generator_lower: '小文字',
  tool_password_generator_output_label: 'パスワード',
  tool_password_generator_rules_body:
    '文字種ルール、乱数源、正直な制限 — 実アカウントで使う前に読んでください。',
  tool_password_generator_rules_item_1:
    'プール：A–Z、a–z、0–9、デフォルト記号。トグルと除外後も最低 1 プール必要。',
  tool_password_generator_rules_item_2:
    '乱数インデックスは crypto.getRandomValues のバイトで、Math.random は使いません。剰余に偏りを生むバイトは捨てて引き直すため、文字プール内の各文字は等確率です。',
  tool_password_generator_rules_item_3:
    'NIST 認定の強制構成（各クラス 1 文字以上）ではありません。必要なセットを手動でオン。',
  tool_password_generator_rules_item_4:
    'プライバシー：ローカル生成のみ；共用 PC では終了後に出力を消去。',
  tool_password_generator_rules_title: 'ルール',
  tool_password_generator_sample: 'サンプル',
  tool_password_generator_symbols: '記号',
  tool_password_generator_title: 'ランダムパスワード生成 — ブラウザでパスワードを作成',
  tool_password_generator_upper: '大文字',
  tool_password_generator_usecase_1: 'すぐローテーションする staging ログイン用の使い捨て資格情報。',
  tool_password_generator_usecase_2: 'QA スクリプト用のサンプル強パスワードが必要なサインアップフォーム試作。',
  tool_password_generator_usecase_3: 'チームポリシー更新前に長さと記号が読みやすさに与える影響を比較。',
  tool_password_generator_usecases_title: '向いている用途',
};
export default ja;
