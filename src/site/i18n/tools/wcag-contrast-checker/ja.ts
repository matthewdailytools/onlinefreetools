/**
 * i18n tool shard (wcag-contrast-checker / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA 大きい文字',
  tool_wcag_contrast_checker_aa_normal: 'AA 通常文字',
  tool_wcag_contrast_checker_aaa_large: 'AAA 大きい文字',
  tool_wcag_contrast_checker_aaa_normal: 'AAA 通常文字',
  tool_wcag_contrast_checker_article:
    '相対輝度に基づく WCAG コントラスト比チェック。通常/大文字の AA・AAA 判定、ライブプレビュー、配色提案 — すべてブラウザ内で完結。',
  tool_wcag_contrast_checker_bad_hex: '有効な #RGB または #RRGGBB の HEX を入力してください。',
  tool_wcag_contrast_checker_bg_label: '背景色',
  tool_wcag_contrast_checker_check: '判定',
  tool_wcag_contrast_checker_clear: 'クリア',
  tool_wcag_contrast_checker_copy: '概要をコピー',
  tool_wcag_contrast_checker_copy_done: 'コピーしました',
  tool_wcag_contrast_checker_desc: '前景/背景のコントラスト比と AA/AAA の合否を、ブラウザ内だけで確認。',
  tool_wcag_contrast_checker_description:
    '文字色と背景色を選ぶと WCAG コントラスト比と、通常/大きい文字それぞれの AA・AAA 合否がわかります。手順：色を選ぶか HEX を入力 →「判定」→ 比率とバッジを確認 → 入れ替えや提案を試す。例：#767676 を #ffffff の上に置くと約 4.54:1 — AA 通常文字は合格、AAA 通常文字は不合格。色データはアップロードされません。',
  tool_wcag_contrast_checker_empty: '先に判定してからコピーしてください。',
  tool_wcag_contrast_checker_example:
    'サンプル読込：前景 #767676、背景 #ffffff で約 4.54:1。AA 通常文字は合格（4.5:1 以上）、AA 大きい文字は合格（3:1 以上）、AAA 通常文字は不合格（7:1 以上）、AAA 大きい文字は合格（4.5:1 以上）。色を入れ替えると比率の変化が確認できます。',
  tool_wcag_contrast_checker_example_title: '例',
  tool_wcag_contrast_checker_fail: '不合格',
  tool_wcag_contrast_checker_faq_a1:
    'AA 通常文字は 4.5:1 以上、AA 大きい文字（18 pt 通常または 14 pt 太字以上）は 3:1 以上、AAA 通常文字は 7:1 以上、AAA 大きい文字は 4.5:1 以上です。このページでは 4 つのバッジを一度に表示します。',
  tool_wcag_contrast_checker_faq_a2:
    '大きい文字は読みやすいため、より低いコントラストでも許容されます。WCAG では 18 pt 以上の通常字、または 14 pt 以上の太字が「大きい文字」です。プレビューに大きい行と通常行の両方を表示しています。',
  tool_wcag_contrast_checker_faq_a3:
    'いいえ。計算はすべてブラウザ内で行われ、色の値は送信されません。',
  tool_wcag_contrast_checker_faq_a4:
    '4.5:1 を下回る場合、AA 通常文字を満たす前景または背景の明るさ調整案を示すことがあります。白/黒へ混ぜた起点色であり、ブランドカラーの最終案ではありません。',
  tool_wcag_contrast_checker_faq_a5:
    '任意の文字/背景の組み合わせを検証するのに使えます。セマンティックトークン付きのブランドパレット全体はブランドカラートークンツールへ。写真から色を拾う場合は画像から色抽出ツールも利用できます。',
  tool_wcag_contrast_checker_faq_q1: 'WCAG のコントラスト閾値は？',
  tool_wcag_contrast_checker_faq_q2: '大きい文字とは？',
  tool_wcag_contrast_checker_faq_q3: '色データは外部に送られますか？',
  tool_wcag_contrast_checker_faq_q4: '配色提案の使い方は？',
  tool_wcag_contrast_checker_faq_q5: 'ブランドカラートークンとの関係は？',
  tool_wcag_contrast_checker_fg_label: '前景色',
  tool_wcag_contrast_checker_how_body:
    'カラーピッカーまたは HEX 入力で前景と背景を指定します。sRGB を相対輝度に変換し、コントラスト比を算出。AA/AAA（通常/大きい文字）の合格/不合格を表示します。色の入れ替え、概要コピー、コントラスト不足時の提案適用が可能です。',
  tool_wcag_contrast_checker_how_title: '使い方',
  tool_wcag_contrast_checker_pass: '合格',
  tool_wcag_contrast_checker_preview_label: 'ライブプレビュー',
  tool_wcag_contrast_checker_preview_large: '大きい文字サンプル',
  tool_wcag_contrast_checker_preview_normal: '通常文字サンプル',
  tool_wcag_contrast_checker_ratio_label: 'コントラスト比',
  tool_wcag_contrast_checker_rules_body:
    'WCAG コントラストは色相だけでなく相対輝度に基づきます。比率が想定と違うときは次を確認してください。',
  tool_wcag_contrast_checker_rules_item_1:
    '相対輝度 L は sRGB チャンネルを WCAG の線形化曲線で変換して求めます。比率 = (明るい L + 0.05) / (暗い L + 0.05)。',
  tool_wcag_contrast_checker_rules_item_2:
    '閾値：AA 通常文字 4.5:1、AA 大きい文字 3:1、AAA 通常文字 7:1、AAA 大きい文字 4.5:1。1 つの比率で 4 バッジすべてを判定します。',
  tool_wcag_contrast_checker_rules_item_3:
    '不透明 sRGB の HEX（#RGB / #RRGGBB）のみ対応。無効な HEX はエラー表示。前景と背景が同じ場合は 1:1 で全レベル不合格です。',
  tool_wcag_contrast_checker_rules_item_4:
    'プライバシー：色はこのタブ内でローカル処理され、サーバーには送信されません。',
  tool_wcag_contrast_checker_rules_title: '知っておくべきルール',
  tool_wcag_contrast_checker_sample: 'サンプル',
  tool_wcag_contrast_checker_suggest_bg: '背景 {hex} をこの前景色と組み合わせて AA 通常文字を満たす案。',
  tool_wcag_contrast_checker_suggest_fg: '前景 {hex} をこの背景に置いて AA 通常文字を満たす案。',
  tool_wcag_contrast_checker_suggest_label: '提案',
  tool_wcag_contrast_checker_suggest_none: 'AA 通常文字（4.5:1）をすでに満たしています。',
  tool_wcag_contrast_checker_swap: '入れ替え',
  tool_wcag_contrast_checker_title: 'WCAGコントラストチェッカー — AA/AAA比率',
  tool_wcag_contrast_checker_usecase_1: 'UI デザイン：納品前に本文・ラベルとブランド背景のコントラストを確認。',
  tool_wcag_contrast_checker_usecase_2: 'ボタン・チップ：白文字 on カラー、またはその逆が AA 通常/大文字を満たすか検証。',
  tool_wcag_contrast_checker_usecase_3: 'ダークモード：明/暗サーフェスを入れ替え、補助テキストが 4.5:1 または大文字 3:1 を維持するか確認。',
  tool_wcag_contrast_checker_usecases_title: 'こんなときに',
};
export default ja;
