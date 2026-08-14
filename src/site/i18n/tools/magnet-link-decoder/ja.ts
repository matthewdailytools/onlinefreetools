/** i18n tool shard (magnet-link-decoder / ja). */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_magnet_link_decoder_article: 'torrent クライアントを開かずに Magnet URI を確認できます。重複パラメータを順番どおり保持し、BitTorrent v1/v2 の exact topic、tracker、サイズ、エンコード形式を調べ、壊れた値も警告付きで残します。',
  tool_magnet_link_decoder_clear: 'クリア', tool_magnet_link_decoder_copy_done: 'コピー済み', tool_magnet_link_decoder_copy_hash: 'info hash コピー', tool_magnet_link_decoder_copy_json: 'JSON コピー', tool_magnet_link_decoder_copy_normalized: '正規化 URI コピー', tool_magnet_link_decoder_copy_trackers: 'tracker コピー', tool_magnet_link_decoder_decode: '解析',
  tool_magnet_link_decoder_desc: 'Magnet リンクをブラウザ内で解析し、info hash、名前、サイズ、tracker、web seed、peer ヒント、形式警告をダウンロードせず確認します。',
  tool_magnet_link_decoder_description: '手順は Magnet リンクを貼り付け、パーセントエンコードを復号し、複数の tracker を保持して btih / btmh info hash の形式をブラウザ内で確認するだけです。例では sample-linux.iso、1 MiB、1 個の info hash、2 個の tracker を表示します。リンクは送信されず、tracker、DHT、peer にも接続しません。',
  tool_magnet_link_decoder_disclaimer: 'リンク構造の確認専用です。コンテンツのダウンロード、metadata 取得、tracker/DHT/peer への接続、.torrent 作成、安全性や適法性の判定は行いません。',
  tool_magnet_link_decoder_empty: 'Magnet URI を貼り付けてください。', tool_magnet_link_decoder_error_scheme: '入力は magnet:? で始めてください。',
  tool_magnet_link_decoder_example: '入力：xt=urn:btih:0123456789abcdef0123456789abcdef01234567、dn=sample-linux.iso、xl=1048576、2 個の tr を含む URI。出力：有効な btih、名前、1,048,576 bytes（1 MiB）、2 tracker、警告なし。', tool_magnet_link_decoder_example_title: '例',
  tool_magnet_link_decoder_faq_a1: 'いいえ。現在のブラウザにある URI 文字列だけを解析します。tracker、DHT node、peer、web seed、metadata service へ接続せず、torrent クライアントも起動しません。',
  tool_magnet_link_decoder_faq_a2: 'xt は exact topic です。urn:btih は通常、40 桁の16進数または32文字の Base32 で v1 info hash を表します。v2 では、16進 multihash を持つ urn:btmh がよく使われます。',
  tool_magnet_link_decoder_faq_a3: '予備 tracker を複数指定できるため tr は繰り返せます。この解析器は元の順番で全値を保持し、不正な URL らしき値を警告し、1 行 1 URL でコピーできます。',
  tool_magnet_link_decoder_faq_a4: 'できません。Magnet URI はコンテンツを識別しても、.torrent に必要なファイル metadata を含まない場合があります。変換には peer network などからの取得が必要ですが、このツールは通信しません。',
  tool_magnet_link_decoder_faq_a5: '送信しません。復号、グループ化、形式確認、正規化、JSON 作成はこのタブ内で実行されます。ただし共有端末では非公開リンクを貼らないでください。',
  tool_magnet_link_decoder_faq_q1: 'Magnet リンク解析でダウンロードは始まりますか？', tool_magnet_link_decoder_faq_q2: 'xt=urn:btih と urn:btmh は何ですか？', tool_magnet_link_decoder_faq_q3: 'tr tracker が複数あるのはなぜですか？', tool_magnet_link_decoder_faq_q4: '.torrent ファイルへ変換できますか？', tool_magnet_link_decoder_faq_q5: 'Magnet リンクはサーバーへ送られますか？',
  tool_magnet_link_decoder_field_display_name: '表示名（dn）', tool_magnet_link_decoder_field_exact_topics: 'Exact topic（xt）', tool_magnet_link_decoder_field_exact_sources: 'Exact source（xs）', tool_magnet_link_decoder_field_other: 'その他のパラメータ', tool_magnet_link_decoder_field_peer_hints: 'Peer ヒント（x.pe）', tool_magnet_link_decoder_field_size: '正確な長さ（xl）', tool_magnet_link_decoder_field_trackers: 'Tracker（tr）', tool_magnet_link_decoder_field_web_seeds: 'Web seed（ws）',
  tool_magnet_link_decoder_how_body: '完全な Magnet URI を貼り付けて解析します。クエリを順序付きのキーと値に分け、% エスケープと + を復号し、重複キーをまとめ、exact topic、URL、サイズの形式を確認して、正規化 URI と JSON を作ります。壊れたエンコードは原因調査のため原文を残します。', tool_magnet_link_decoder_how_title: '解析の流れ',
  tool_magnet_link_decoder_input_label: 'Magnet URI', tool_magnet_link_decoder_input_placeholder: 'magnet:?xt=urn:btih:...&dn=...&tr=...', tool_magnet_link_decoder_json_label: '解析 JSON', tool_magnet_link_decoder_normalized_label: '正規化 URI', tool_magnet_link_decoder_privacy: 'ブラウザ内だけで動作し、アップロードや tracker、DHT、peer、web seed、metadata への通信はありません。', tool_magnet_link_decoder_result_empty: '解析したフィールドがここに表示されます。', tool_magnet_link_decoder_results_title: '解析フィールド',
  tool_magnet_link_decoder_rules_body: 'Magnet パラメータは重複可能なクエリです。すべての出現を保持して形式を確認しますが、対象コンテンツの存在は保証しません。',
  tool_magnet_link_decoder_rules_item_1: 'フィールド：xt は exact topic、dn は表示名、tr は tracker、xl は byte 長、ws は web seed、xs は exact source、x.pe は peer ヒントです。未知のキーも残します。',
  tool_magnet_link_decoder_rules_item_2: 'Hash 形式：btih は40桁の16進数または32文字の Base32。btmh は偶数長の16進 multihash で、BitTorrent v2 では 1220 と64桁の SHA-256 が一般的です。',
  tool_magnet_link_decoder_rules_item_3: '復号規則：キーと値はパーセント復号し、+ は空白です。不正な % エスケープは削除せず原文を保持して警告します。',
  tool_magnet_link_decoder_rules_item_4: '確認の限界：URL と整数の検査は怪しい構文を見つけるだけで、tracker の応答、metadata の存在、ファイルの安全性、共有許可を証明しません。', tool_magnet_link_decoder_rules_title: 'Magnet URI の規則',
  tool_magnet_link_decoder_sample: 'サンプル', tool_magnet_link_decoder_size_bytes: '{bytes} bytes（{human}）', tool_magnet_link_decoder_status_invalid: '無効', tool_magnet_link_decoder_status_valid: '有効', tool_magnet_link_decoder_status_warning: '警告あり', tool_magnet_link_decoder_summary: '{fields} フィールド、{trackers} tracker、{warnings} 警告', tool_magnet_link_decoder_title: 'Magnet リンク解析 — info hash と tracker をブラウザで確認', tool_magnet_link_decoder_unknown_value: '（空の値）',
  tool_magnet_link_decoder_usecase_1: '開発時の確認：生成した Magnet URI のエンコード、exact topic、重複 tracker を公開前に点検します。', tool_magnet_link_decoder_usecase_2: 'サポート・審査：torrent クライアントを開かず、投稿リンクの tracker、web seed、source、peer ヒントを確認します。', tool_magnet_link_decoder_usecase_3: '資料・学習：安全な例を使い、info hash 抽出と xt、dn、xl、複数 tr の対応を説明します。', tool_magnet_link_decoder_usecases_title: '確認に役立つ場面',
  tool_magnet_link_decoder_warn_bad_encoding: 'パラメータ {key} の % エンコードが不正なため、原文を保持しました。', tool_magnet_link_decoder_warn_bad_hash: '未対応または不正な info hash：{value}', tool_magnet_link_decoder_warn_bad_peer: 'x.pe は host:port または [IPv6]:port で指定してください：{value}', tool_magnet_link_decoder_warn_bad_size: 'xl は 0 以上の整数 byte 長で指定してください。', tool_magnet_link_decoder_warn_bad_url: '{key} は有効な絶対 URL ではありません：{value}', tool_magnet_link_decoder_warn_missing_xt: 'xt exact-topic パラメータがありません。',
};
export default ja;
