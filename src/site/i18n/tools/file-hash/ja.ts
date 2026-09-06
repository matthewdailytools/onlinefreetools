/**
 * i18n tool shard (file-hash / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_file_hash_algo_label: 'アルゴリズム',
  tool_file_hash_article:
    '貼り付けテキストまたはローカルファイルの MD5 / SHA 16進ダイジェストを計算。リリース checksum、設定フィンガープリント、ダウンロード検証に — MD5 選択時の本サイト読み込みを除きブラウザ内で完結。',
  tool_file_hash_clear: 'クリア',
  tool_file_hash_copy: 'すべてコピー',
  tool_file_hash_copy_done: 'コピー済み',
  tool_file_hash_desc:
    'テキストやファイルをローカルでハッシュ — MD5、SHA-1、SHA-256 などの 16進ダイジェスト。',
  tool_file_hash_description:
    'ブラウザで貼り付けテキストまたはローカルファイルのハッシュを計算。手順：テキスト/ファイルを選び、MD5/SHA にチェック、ハッシュをクリック、小文字 hex をコピー。例：テキスト `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`。ファイルはローカル読み込み；MD5 のみ このサイトから crypto-js を取得。',
  tool_file_hash_empty: '先にテキストを貼るかファイルを選んでください。',
  tool_file_hash_example:
    'テキスト `hello` で SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`。同じ文字列の MD5 → `5d41402abc4b2a76b9719d911017c592`。テキストは UTF-8 バイト、ファイルは生バイト。',
  tool_file_hash_example_title: '例',
  tool_file_hash_faq_a1:
    'MD5 は高速で、旧 checksum リストや一部 CDN ETag にまだ使われます。署名・改ざん検知などセキュリティ用途は SHA-256 / SHA-512 を推奨。SHA-1 は証明書では非推奨ですが古い成果物に残ることがあります。',
  tool_file_hash_faq_a2:
    '大きなファイルはチャンク読み込み＋進捗バー。約 100 MB 超で警告しますが処理は試みます。超大容量は遅い・メモリ不足の可能性 — 数 GB 級はデスクトップツールを。',
  tool_file_hash_faq_a3:
    'テキストは UTF-8 エンコードバイトでハッシュ。ファイルは生バイト列。`.txt` 内の同じ文字列でもエンコーディングや改行が違えば digest は変わります。',
  tool_file_hash_faq_a4:
    'アップロードなし。テキストとファイルは端末内。SHA 系は Web Crypto。MD5 のみこのサイトから crypto-js を読みます — 内容は第三者に送りません。',
  tool_file_hash_faq_a5:
    '小文字 hex、`0x` なし、アルゴリズムごとに 1 行。Linux / macOS の `md5sum` / `sha256sum` と同形式。',
  tool_file_hash_faq_q1: 'MD5 と SHA-256 はいつ使い分ける？',
  tool_file_hash_faq_q2: '大きなファイルはどう扱う？',
  tool_file_hash_faq_q3: '貼り付けテキストとファイルは同じハッシュ？',
  tool_file_hash_faq_q4: 'ファイルやテキストはアップロードされる？',
  tool_file_hash_faq_q5: 'hex の出力形式は？',
  tool_file_hash_file_bytes: 'バイト',
  tool_file_hash_file_label: 'ファイルを選択',
  tool_file_hash_hash: 'ハッシュ',
  tool_file_hash_how_body:
    'テキストで貼り付け（UTF-8 バイト）、ファイルでローカルファイル（生バイト）をハッシュ。アルゴリズムを 1 つ以上選んでハッシュ。SHA は Web Crypto、MD5 は初回のみ小さなライブラリを読込。結果は小文字 hex、各アルゴリズム 1 行。',
  tool_file_hash_how_title: '使い方',
  tool_file_hash_input_mode_label: '入力モード',
  tool_file_hash_large_warn:
    'ファイルが 100 MB 超。処理が遅い・メモリを多く使う可能性 — 超大容量はデスクトップツールを検討。',
  tool_file_hash_md5_fail: 'このサイトから MD5 ライブラリを読み込めませんでした。SHA-256 を試すかネットワークを確認。',
  tool_file_hash_no_algo: '少なくとも 1 つのアルゴリズムを選んでください。',
  tool_file_hash_output_label: '16進ダイジェスト',
  tool_file_hash_progress_label: 'ファイル読み込み中…',
  tool_file_hash_rules_body:
    'アルゴリム選択、バイトの扱い、出力形式 — 他ツールと digest を比較する前に知っておくこと。',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex（128 bit）。SHA-1 → 40 hex。SHA-256 → 64 hex。SHA-384 → 96 hex。SHA-512 → 128 hex。すべて小文字、プレフィックスなし。',
  tool_file_hash_rules_item_2:
    'テキスト：`TextEncoder` で UTF-8。ファイル：全バイト列。UTF-8 BOM や CRLF があると貼り付けと digest が異なります。',
  tool_file_hash_rules_item_3:
    '空テキストや 0 バイトファイルも各アルゴリズムの標準空入力 digest（有効な hex）を返します。',
  tool_file_hash_rules_item_4:
    'プライバシー：アップロードなし。本サイト読み込みは MD5 のみ；SHA 系は組み込み Web Crypto のみ。',
  tool_file_hash_rules_title: 'ルール',
  tool_file_hash_sample: 'サンプル',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'ファイル',
  tool_file_hash_tab_text: 'テキスト',
  tool_file_hash_text_label: 'テキスト入力',
  tool_file_hash_text_placeholder: 'UTF-8 としてハッシュするテキストを貼り付け…',
  tool_file_hash_title: 'ファイルハッシュチェッカー — ブラウザでダイジェストを確認',
  tool_file_hash_usecase_1:
    'リリース：インストーラの SHA-256 をダウンロードページの公開値と照合。',
  tool_file_hash_usecase_2:
    '設定：デプロイ前後で JSON や `.env` 断片のフィンガープリント。',
  tool_file_hash_usecase_3:
    'レガシー QA：旧 MD5 マニフェストが再ビルド成果物と一致するか確認。',
  tool_file_hash_usecases_title: '向いている用途',
};
export default ja;
