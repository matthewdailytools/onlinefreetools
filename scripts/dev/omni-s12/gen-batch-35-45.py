#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成 §12 #35–#45 的 omni-s12 工具定义（十语独立 UI）。"""
from __future__ import annotations
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent / "tools"
LANGS = ["en", "zh", "es", "ar", "pt", "id", "fr", "ja", "ru", "de"]


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def ensure_len(s: str, min_len: int = 125, pad: str = "") -> str:
    """保证 description 达到 SEO 下限（zh/ja 尤甚）。"""
    out = s
    while len(out) < min_len:
        out = out.rstrip("。．. ") + (pad or " Educational illustration only.")
    return out


def write_tool(name: str, meta: dict, locales: dict) -> None:
    lines: list[str] = []
    lines.append(f'/**\n * §12 #{meta["seq"]} {meta["slug"]} 工具定义（十语独立 UI）。\n */')
    lines.append("import { withBtns } from '../locale-ui-common.mjs';\n")
    lines.append("const _ui = {")
    for lang in LANGS:
        loc = locales[lang]
        ui = {k: v for k, v in loc.items() if k not in ("title", "description")}
        lines.append(f"\t{lang}: withBtns({esc(lang)}, {{")
        for k, v in ui.items():
            if k in ("calculate", "sample", "clear"):
                continue
            lines.append(f"\t\t{esc(k)}: {esc(v)},")
        lines.append("\t}),")
    lines.append("};\n")
    lines.append("export default {")
    for k in ("seq", "slug", "prefix", "pageFile", "pageExport", "nameZh", "ymyl", "related", "anchor", "glyph", "sampleHint"):
        if k == "seq":
            lines.append(f"\tseq: {meta['seq']},")
        elif k == "ymyl":
            lines.append(f"\tymyl: {str(meta['ymyl']).lower()},")
        elif k == "related":
            lines.append(f"\trelated: {json.dumps(meta['related'])},")
        else:
            lines.append(f"\t{k}: {esc(meta[k])},")
    lines.append("\ttitles: {")
    for lang in LANGS:
        lines.append(f"\t\t{lang}: {esc(locales[lang]['title'])},")
    lines.append("\t},")
    lines.append("\tdescriptions: {")
    for lang in LANGS:
        d = locales[lang]["description"]
        if lang in ("zh", "ja"):
            d = ensure_len(d, 125, "；结果仅供学习对照，请以官方规则为准。" if lang == "zh" else "。学習用の目安であり、公式の前提を必ず確認してください。")
        lines.append(f"\t\t{lang}: {esc(d)},")
    lines.append("\t},")
    lines.append("\tui: _ui,")
    lines.append(f"\tfields: {json.dumps(meta['fields'], ensure_ascii=False, indent=2).replace(chr(10), chr(10)+chr(9))},")
    lines.append(f"\tresults: {json.dumps(meta['results'], ensure_ascii=False, indent=2).replace(chr(10), chr(10)+chr(9))},")
    lines.append(f"\trefs: {json.dumps(meta['refs'], ensure_ascii=False, indent=2).replace(chr(10), chr(10)+chr(9))},")
    lines.append("\tcomputeJs: `" + meta["computeJs"] + "`,")
    lines.append("\tsampleJs: `" + meta["sampleJs"] + "`,")
    lines.append("};\n")
    path = ROOT / f"{name}.mjs"
    path.write_text("\n".join(lines), encoding="utf-8")
    print("wrote", path.name)


def base_edu(lang: str, topic: str) -> dict:
    """共用 disclaimer/references 骨架，各语独立措辞。"""
    D = {
        "en": dict(
            disclaimer=f"Educational {topic} illustration only — not financial, tax, or investment advice.",
            references="Investopedia and standard textbook formulas for educational context.",
        ),
        "zh": dict(
            disclaimer=f"结果仅为{topic}学习演示，不构成投资、理财或税务建议。",
            references="Investopedia 与常见教材公式，供教育对照。",
        ),
        "es": dict(
            disclaimer=f"Solo ilustración educativa de {topic}; no es consejo financiero ni fiscal.",
            references="Investopedia y fórmulas de libro de texto con fines educativos.",
        ),
        "ar": dict(
            disclaimer=f"توضيح تعليمي لـ {topic} فقط وليس نصيحة مالية أو ضريبية.",
            references="Investopedia وصيغ دراسية للسياق التعليمي.",
        ),
        "pt": dict(
            disclaimer=f"Apenas ilustração educativa de {topic}; não é conselho financeiro ou fiscal.",
            references="Investopedia e fórmulas de livro didático para contexto educativo.",
        ),
        "id": dict(
            disclaimer=f"Hanya ilustrasi edukatif {topic}; bukan saran keuangan atau pajak.",
            references="Investopedia dan rumus buku teks untuk konteks edukasi.",
        ),
        "fr": dict(
            disclaimer=f"Illustration éducative de {topic} uniquement — pas un conseil financier ou fiscal.",
            references="Investopedia et formules de manuel à des fins éducatives.",
        ),
        "ja": dict(
            disclaimer=f"{topic}の学習用試算であり、投資・税務・ファイナンスの助言ではありません。",
            references="Investopedia と標準的な教科書公式（学習用）。",
        ),
        "ru": dict(
            disclaimer=f"Только учебная иллюстрация ({topic}) — не финансовый и не налоговый совет.",
            references="Investopedia и стандартные учебные формулы.",
        ),
        "de": dict(
            disclaimer=f"Nur zur Veranschaulichung von {topic} — keine Finanz- oder Steuerberatung.",
            references="Investopedia und gängige Lehrbuchformeln zu Lernzwecken.",
        ),
    }
    return D[lang]


def pack_simple(lang: str, labels: dict, how: dict, faq: list, example: str, article: str, topic: str) -> dict:
    """组装一语 UI：labels + how/formula/usecases + faq pairs + edu。"""
    edu = base_edu(lang, topic)
    out = {**labels, **how, "example_title": how.get("example_title", {"en": "Example", "zh": "示例", "es": "Ejemplo", "ar": "مثال", "pt": "Exemplo", "id": "Contoh", "fr": "Exemple", "ja": "例", "ru": "Пример", "de": "Beispiel"}[lang]), "example": example, "article": article, **edu}
    for i, (q, a) in enumerate(faq, 1):
        out[f"faq_q{i}"] = q
        out[f"faq_a{i}"] = a
    # refs labels
    out.setdefault("ref_a_label", "Investopedia")
    out.setdefault("ref_b_label", "Wikipedia")
    return out


# ===================== #35 MARKUP =====================
def gen_markup():
    titles = {
        "en": "Markup Calculator — How to Calculate Markup Percentage",
        "zh": "加价率计算器 — 如何计算 Markup",
        "es": "Calculadora de markup — Porcentaje de margen sobre costo",
        "ar": "حاسبة Markup — نسبة الزيادة على التكلفة",
        "pt": "Calculadora de markup — Percentual sobre o custo",
        "id": "Kalkulator markup — Persentase kenaikan atas biaya",
        "fr": "Calculateur de markup — Pourcentage sur le coût",
        "ja": "マークアップ計算 — 原価に対する上乗せ率",
        "ru": "Калькулятор markup — Наценка к себестоимости",
        "de": "Markup-Rechner — Aufschlag auf die Kosten",
    }
    descs = {
        "en": "Calculate markup % from cost and selling price. Example: cost 50, sell 80 → markup 60%. Distinct from profit margin (which divides by sales). Educational retail math in your browser — not business advice.",
        "zh": "用成本与售价计算加价率（Markup）。示例：成本 50、售价 80 → 加价率 60%。与利润率（分母是收入）不同。全程浏览器本地计算，数据不上传服务器；零售算术学习用，不构成经营建议。",
        "es": "Calcula el % de markup con costo y precio de venta. Ejemplo: costo 50, venta 80 → markup 60%. Distinto del margen de beneficio (divide por ventas). Matemáticas educativas en el navegador.",
        "ar": "احسب نسبة Markup من التكلفة وسعر البيع. مثال: تكلفة 50 وبيع 80 → Markup 60%. يختلف عن هامش الربح. حساب تعليمي في المتصفح.",
        "pt": "Calcule o % de markup com custo e preço de venda. Exemplo: custo 50, venda 80 → markup 60%. Diferente da margem de lucro. Matemática educativa no navegador.",
        "id": "Hitung % markup dari biaya dan harga jual. Contoh: biaya 50, jual 80 → markup 60%. Berbeda dari margin laba. Matematika edukatif di browser.",
        "fr": "Calculez le % de markup à partir du coût et du prix de vente. Exemple : coût 50, vente 80 → markup 60 %. Différent de la marge. Maths éducatives dans le navigateur.",
        "ja": "原価と売価からマークアップ率を計算します。例：原価 50、売価 80 → マークアップ 60%。利益率（分母が売上）とは別物です。ブラウザ内の学習用計算であり、経営助言ではありません。サーバーにアップロードしません。",
        "ru": "Считайте % markup из себестоимости и цены продажи. Пример: cost 50, sell 80 → 60%. Это не profit margin. Учебная розничная арифметика в браузере.",
        "de": "Berechnen Sie den Markup-% aus Kosten und Verkaufspreis. Beispiel: Kosten 50, Verkauf 80 → Markup 60%. Anders als die Gewinnmarge. Bildungsmathematik im Browser.",
    }
    locales = {}
    for lang in LANGS:
        labels = {
            "en": dict(cost_label="Cost", cost_ph="e.g. 50", sell_label="Selling price", sell_ph="e.g. 80", markupOut_label="Markup %", profitOut_label="Dollar markup", result_note="Markup = (price − cost) / cost × 100. Not the same as margin.", err_generic="Enter cost > 0 and selling price ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — Profit margin"),
            "zh": dict(cost_label="成本", cost_ph="例如 50", sell_label="售价", sell_ph="例如 80", markupOut_label="加价率 %", profitOut_label="加价金额", result_note="加价率 = (售价 − 成本) / 成本 × 100。与利润率不同。", err_generic="请填写成本 > 0，售价 ≥ 0。", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — 利润率"),
        }.get(lang) or {
            "es": dict(cost_label="Costo", cost_ph="p. ej. 50", sell_label="Precio de venta", sell_ph="p. ej. 80", markupOut_label="Markup %", profitOut_label="Markup en dinero", result_note="Markup = (precio − costo) / costo × 100. No es margen.", err_generic="Costo > 0 y precio ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — Margen"),
            "ar": dict(cost_label="التكلفة", cost_ph="مثال 50", sell_label="سعر البيع", sell_ph="مثال 80", markupOut_label="Markup %", profitOut_label="قيمة الزيادة", result_note="Markup = (السعر − التكلفة) / التكلفة × 100.", err_generic="تكلفة > 0 وسعر ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — الهامش"),
            "pt": dict(cost_label="Custo", cost_ph="ex. 50", sell_label="Preço de venda", sell_ph="ex. 80", markupOut_label="Markup %", profitOut_label="Markup em valor", result_note="Markup = (preço − custo) / custo × 100. Não é margem.", err_generic="Custo > 0 e preço ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — Margem"),
            "id": dict(cost_label="Biaya", cost_ph="mis. 50", sell_label="Harga jual", sell_ph="mis. 80", markupOut_label="Markup %", profitOut_label="Markup nominal", result_note="Markup = (harga − biaya) / biaya × 100. Bukan margin.", err_generic="Biaya > 0 dan harga ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — Margin"),
            "fr": dict(cost_label="Coût", cost_ph="ex. 50", sell_label="Prix de vente", sell_ph="ex. 80", markupOut_label="Markup %", profitOut_label="Markup en montant", result_note="Markup = (prix − coût) / coût × 100. Pas la marge.", err_generic="Coût > 0 et prix ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — Marge"),
            "ja": dict(cost_label="原価", cost_ph="例 50", sell_label="売価", sell_ph="例 80", markupOut_label="マークアップ %", profitOut_label="上乗せ額", result_note="マークアップ = (売価 − 原価) / 原価 × 100。利益率とは別。", err_generic="原価 > 0、売価 ≥ 0 を入力。", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — 利益率"),
            "ru": dict(cost_label="Себестоимость", cost_ph="напр. 50", sell_label="Цена продажи", sell_ph="напр. 80", markupOut_label="Markup %", profitOut_label="Наценка в деньгах", result_note="Markup = (цена − себестоимость) / себестоимость × 100.", err_generic="Себестоимость > 0 и цена ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — Маржа"),
            "de": dict(cost_label="Kosten", cost_ph="z. B. 50", sell_label="Verkaufspreis", sell_ph="z. B. 80", markupOut_label="Markup %", profitOut_label="Aufschlag Betrag", result_note="Markup = (Preis − Kosten) / Kosten × 100. Nicht die Marge.", err_generic="Kosten > 0 und Preis ≥ 0.", ref_a_label="Investopedia — Markup", ref_b_label="Investopedia — Marge"),
        }[lang]
        hows = {
            "en": dict(how_title="How it works", how_body="Enter cost and selling price. Markup divides the dollar mark-up by cost, not by sales. Compare with the margin page when you need the sales-based view.", formula_title="Formula", formula_body="Markup % = (price − cost) / cost × 100. Keep in mind:", formula_item_1="Denominator is cost — that is what separates markup from margin.", formula_item_2="Negative markup means selling below cost.", formula_item_3="Taxes and discounts are not modeled unless baked into the inputs.", usecases_title="When to use it", usecase_1="Retail homework: convert cost and list price to markup %.", usecase_2="Sanity-check a pricing sheet before talking to finance.", usecase_3="Contrast with gross-margin when stakeholders mix the terms."),
            "zh": dict(how_title="怎么用", how_body="填入成本与售价。加价率用「加价金额 ÷ 成本」，不是 ÷ 收入。需要收入视角时请用利润率/毛利率工具。", formula_title="公式", formula_body="加价率 % = (售价 − 成本) / 成本 × 100。注意：", formula_item_1="分母是成本——这是与利润率的关键差别。", formula_item_2="负加价表示低于成本出售。", formula_item_3="税费与折扣除非并入输入，否则不建模。", usecases_title="适合什么场景", usecase_1="零售作业：由成本与标价求加价率。", usecase_2="见财务前粗核价目表。", usecase_3="与毛利率对照，避免术语混用。"),
        }.get(lang) or {
            "es": dict(how_title="Cómo funciona", how_body="Introduce costo y precio. El markup divide por el costo, no por las ventas.", formula_title="Fórmula", formula_body="Markup % = (precio − costo) / costo × 100. Notas:", formula_item_1="El denominador es el costo — ahí se diferencia del margen.", formula_item_2="Markup negativo = vender bajo costo.", formula_item_3="Impuestos y descuentos no se modelan solos.", usecases_title="Cuándo usarlo", usecase_1="Deberes de retail: pasar de costo y precio a %.", usecase_2="Revisar una lista de precios antes de finanzas.", usecase_3="Contrastar con margen bruto cuando se mezclan términos."),
            "ar": dict(how_title="طريقة الاستخدام", how_body="أدخل التكلفة وسعر البيع. الـ Markup يقسم على التكلفة لا على المبيعات.", formula_title="الصيغة", formula_body="Markup % = (السعر − التكلفة) / التكلفة × 100. ملاحظات:", formula_item_1="المقام هو التكلفة — فرق أساسي عن الهامش.", formula_item_2="Markup سالب يعني البيع دون التكلفة.", formula_item_3="الضرائب والخصومات غير مُنمذَجة تلقائياً.", usecases_title="متى تستخدمه", usecase_1="واجب تجزئة: من التكلفة والسعر إلى %.", usecase_2="مراجعة قائمة أسعار قبل المالية.", usecase_3="مقارنته بهامش الربح الإجمالي."),
            "pt": dict(how_title="Como funciona", how_body="Informe custo e preço. Markup divide pelo custo, não pelas vendas.", formula_title="Fórmula", formula_body="Markup % = (preço − custo) / custo × 100. Notas:", formula_item_1="Denominador é o custo — diferença frente à margem.", formula_item_2="Markup negativo = vender abaixo do custo.", formula_item_3="Impostos e descontos não entram sozinhos.", usecases_title="Quando usar", usecase_1="Tarefa de varejo: custo e preço → %.", usecase_2="Checar tabela de preços antes do financeiro.", usecase_3="Contrastar com margem bruta."),
            "id": dict(how_title="Cara kerja", how_body="Isi biaya dan harga jual. Markup membagi dengan biaya, bukan penjualan.", formula_title="Rumus", formula_body="Markup % = (harga − biaya) / biaya × 100. Catatan:", formula_item_1="Penyebut adalah biaya — beda dari margin.", formula_item_2="Markup negatif = jual di bawah biaya.", formula_item_3="Pajak/diskon tidak otomatis.", usecases_title="Kapan dipakai", usecase_1="PR ritel: biaya & harga → %.", usecase_2="Cek daftar harga sebelum keuangan.", usecase_3="Bandingkan dengan gross margin."),
            "fr": dict(how_title="Fonctionnement", how_body="Saisissez coût et prix. Le markup divise par le coût, pas par les ventes.", formula_title="Formule", formula_body="Markup % = (prix − coût) / coût × 100. Notes :", formula_item_1="Le dénominateur est le coût — différence avec la marge.", formula_item_2="Markup négatif = vendre sous le coût.", formula_item_3="Taxes et remises non modélisées seules.", usecases_title="Cas d’usage", usecase_1="Devoir retail : coût et prix → %.", usecase_2="Vérifier une grille avant la finance.", usecase_3="Contraster avec la marge brute."),
            "ja": dict(how_title="使い方", how_body="原価と売価を入力します。マークアップは差額を原価で割ります（売上ではありません）。", formula_title="計算式", formula_body="マークアップ% = (売価 − 原価) / 原価 × 100。注意:", formula_item_1="分母は原価 — 利益率との違いです。", formula_item_2="負の値は原価割れ販売。", formula_item_3="税や値引きは入力に含めない限り扱いません。", usecases_title="こんなときに", usecase_1="小売の宿題：原価と定価から上乗せ率。", usecase_2="財務確認前の価格表チェック。", usecase_3="粗利率と用語を混同しないための対照。"),
            "ru": dict(how_title="Как пользоваться", how_body="Введите себестоимость и цену. Markup делит на себестоимость, не на продажи.", formula_title="Формула", formula_body="Markup % = (цена − себестоимость) / себестоимость × 100. Замечания:", formula_item_1="Знаменатель — себестоимость; в этом отличие от маржи.", formula_item_2="Отрицательный markup = продажа ниже себестоимости.", formula_item_3="Налоги и скидки сами не моделируются.", usecases_title="Когда использовать", usecase_1="Домашка по ритейлу: cost и price → %.", usecase_2="Проверить прайс до разговора с финансами.", usecase_3="Сравнить с валовой маржой."),
            "de": dict(how_title="So funktioniert’s", how_body="Kosten und Verkaufspreis eingeben. Markup teilt durch Kosten, nicht durch Umsatz.", formula_title="Formel", formula_body="Markup % = (Preis − Kosten) / Kosten × 100. Hinweise:", formula_item_1="Nenner sind die Kosten — Unterschied zur Marge.", formula_item_2="Negativer Markup = Verkauf unter Kosten.", formula_item_3="Steuern/Rabatte werden nicht automatisch modelliert.", usecases_title="Wann sinnvoll", usecase_1="Retail-Übung: Kosten und Preis → %.", usecase_2="Preisliste vor Finance prüfen.", usecase_3="Mit Bruttomarge kontrastieren."),
        }[lang]
        faqs = {
            "en": [("How is markup different from margin?", "Markup divides by cost; margin divides by selling price (or revenue)."), ("What is the sample result?", "Cost 50 and sell 80 → (80−50)/50 × 100 = 60% markup."), ("Can markup be over 100%?", "Yes, if price is more than double the cost."), ("Is this pricing advice?", "No — educational arithmetic only.")],
            "zh": [("加价率和利润率有何不同？", "加价率 ÷ 成本；利润率 ÷ 售价/收入。"), ("样例结果是多少？", "成本 50、售价 80 → (80−50)/50 × 100 = 60%。"), ("加价率能超过 100% 吗？", "可以，只要售价超过成本两倍。"), ("这是定价建议吗？", "不是，仅供算术学习。")],
        }.get(lang) or [
            ("¿Markup vs margen?", "Markup divide por costo; margen por precio/ventas."),
            ("¿Resultado del ejemplo?", "Costo 50, venta 80 → 60%."),
            ("¿Puede superar 100%?", "Sí, si el precio supera el doble del costo."),
            ("¿Es consejo de precios?", "No, solo aritmética educativa."),
        ] if lang == "es" else [
            ("ما الفرق عن الهامش؟", "Markup يقسم على التكلفة؛ الهامش على السعر."),
            ("نتيجة المثال؟", "50 و80 → 60٪."),
            ("هل يتجاوز 100٪؟", "نعم إذا تجاوز السعر ضعف التكلفة."),
            ("هل هي نصيحة تسعير؟", "لا، حساب تعليمي فقط."),
        ] if lang == "ar" else [
            ("Markup vs margem?", "Markup divide pelo custo; margem pelo preço."),
            ("Resultado do exemplo?", "50 e 80 → 60%."),
            ("Pode passar de 100%?", "Sim, se o preço for mais que o dobro do custo."),
            ("É conselho de preço?", "Não, só aritmética educativa."),
        ] if lang == "pt" else [
            ("Markup vs margin?", "Markup dibagi biaya; margin dibagi harga."),
            ("Hasil contoh?", "50 dan 80 → 60%."),
            ("Boleh >100%?", "Ya jika harga > 2× biaya."),
            ("Saran harga?", "Bukan, hanya aritmetika edukatif."),
        ] if lang == "id" else [
            ("Markup vs marge ?", "Le markup divise par le coût ; la marge par le prix."),
            ("Résultat de l’exemple ?", "50 et 80 → 60 %."),
            ("Peut dépasser 100 % ?", "Oui si le prix > 2× le coût."),
            ("Conseil de prix ?", "Non, arithmétique éducative."),
        ] if lang == "fr" else [
            ("マークアップと利益率の違いは？", "マークアップは原価で割り、利益率は売価で割ります。"),
            ("例の結果は？", "原価50・売価80 → 60%。"),
            ("100%を超えますか？", "売価が原価の2倍超なら可能です。"),
            ("価格助言ですか？", "いいえ、学習用の計算です。"),
        ] if lang == "ja" else [
            ("Чем отличается от маржи?", "Markup делит на себестоимость; маржа — на цену."),
            ("Результат примера?", "50 и 80 → 60%."),
            ("Может быть >100%?", "Да, если цена больше чем 2× себестоимость."),
            ("Это совет по ценам?", "Нет, только учебная арифметика."),
        ] if lang == "ru" else [
            ("Markup vs Marge?", "Markup teilt durch Kosten; Marge durch Preis."),
            ("Beispielergebnis?", "50 und 80 → 60%."),
            ("Über 100% möglich?", "Ja, wenn Preis > 2× Kosten."),
            ("Preisberatung?", "Nein, nur Bildungsarithmetik."),
        ]
        example = {
            "en": "Example: cost 50, sell 80 → markup = (80−50)/50 × 100 = 60%.",
            "zh": "示例：成本 50、售价 80 → 加价率 = (80−50)/50 × 100 = 60%。",
            "ja": "例：原価 50、売価 80 → マークアップ = (80−50)/50 × 100 = 60%。",
        }.get(lang, "Example / Ejemplo: cost 50, sell 80 → 60% markup.")
        article = titles[lang]
        locales[lang] = {"title": titles[lang], "description": descs[lang], **pack_simple(lang, labels, hows, faqs, example, article, "markup")}
    write_tool(
        "markup",
        dict(
            seq=35,
            slug="how-to-calculate-markup",
            prefix="tool_markup",
            pageFile="howToCalculateMarkupPage",
            pageExport="renderHowToCalculateMarkupPage",
            nameZh="加价率计算器",
            ymyl=True,
            related=["how-to-calculate-discount", "how-to-calculate-gross-margin"],
            anchor="markup",
            glyph="M8 22V10h6v12M18 22V6h6",
            sampleHint="cost 50 sell 80 → markup 60%",
            fields=[
                dict(id="cost", type="number", half=True, labelKey="cost_label", phKey="cost_ph"),
                dict(id="sell", type="number", half=True, labelKey="sell_label", phKey="sell_ph"),
            ],
            results=[dict(id="markupOut", labelKey="markupOut_label"), dict(id="profitOut", labelKey="profitOut_label")],
            refs=[
                dict(labelKey="ref_a_label", href="https://www.investopedia.com/terms/m/markup.asp"),
                dict(labelKey="ref_b_label", href="https://www.investopedia.com/terms/p/profitmargin.asp"),
            ],
            computeJs="""
        var cost = parseFloat(costEl.value);
        var sell = parseFloat(sellEl.value);
        if (!(cost > 0) || !Number.isFinite(sell) || sell < 0) return { ok: false, error: msgErr };
        var profit = sell - cost;
        var markup = (profit / cost) * 100;
        return { ok: true, values: { markupOut: fmt(markup) + '%', profitOut: fmt(profit) } };
""",
            sampleJs="""
        costEl.value = '50';
        sellEl.value = '80';
""",
        ),
        locales,
    )


if __name__ == "__main__":
    gen_markup()
    print("partial: markup only — continuing in next chunk")
