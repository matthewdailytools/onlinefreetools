#!/usr/bin/env python3
"""Generate catalog shards, icons, Page.ts, and ten-locale i18n for Excel scene tools."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

from _excel_i18n_body import overlay as locale_overlay
from _excel_i18n_td import D, T, pad_description
from _excel_impl_lib import LANGS, TOOLS, export_name, kebab_to_camel, prefix_for

ROOT = Path(__file__).resolve().parents[2]
LAUNCHED_AT = "2026-09-04T14:10:00.000Z"
UPDATED_AT = "2026-09-05T12:22:00.000Z"

UI = {
    "en": dict(sample="Load sample", clear="Clear", copy="Copy", write="Write formula", add="Add row",
               download="Download xlsx", empty="Load the sample or fill the fields first.",
               need_lib="Spreadsheet library failed to load. Check the network and refresh.",
               how_t="How it works", rules_t="Rules you should expect", ex_t="Example", uc_t="Good fits"),
    "zh": dict(sample="加载示例", clear="清空", copy="复制", write="写出公式", add="加一行",
               download="下载 xlsx", empty="请先加载示例或填写字段。",
               need_lib="表格库加载失败，请检查网络后刷新。",
               how_t="怎么用", rules_t="规则与边界", ex_t="示例", uc_t="适合什么时候"),
    "es": dict(sample="Cargar ejemplo", clear="Borrar", copy="Copiar", write="Escribir fórmula", add="Añadir fila",
               download="Descargar xlsx", empty="Carga el ejemplo o rellena los campos.",
               need_lib="No se cargó la biblioteca. Revisa la red.",
               how_t="Cómo funciona", rules_t="Reglas", ex_t="Ejemplo", uc_t="Cuándo ayuda"),
    "ar": dict(sample="تحميل مثال", clear="مسح", copy="نسخ", write="اكتب الصيغة", add="أضف صفاً",
               download="تنزيل xlsx", empty="حمّل المثال أو املأ الحقول.",
               need_lib="تعذر تحميل المكتبة. تحقق من الشبكة.",
               how_t="كيف يعمل", rules_t="القواعد", ex_t="مثال", uc_t="متى يفيد"),
    "pt": dict(sample="Carregar exemplo", clear="Limpar", copy="Copiar", write="Escrever fórmula", add="Adicionar linha",
               download="Baixar xlsx", empty="Carregue o exemplo ou preencha os campos.",
               need_lib="A biblioteca não carregou. Verifique a rede.",
               how_t="Como funciona", rules_t="Regras", ex_t="Exemplo", uc_t="Quando ajuda"),
    "id": dict(sample="Muat contoh", clear="Hapus", copy="Salin", write="Tulis rumus", add="Tambah baris",
               download="Unduh xlsx", empty="Muat contoh atau isi kolom dulu.",
               need_lib="Pustaka gagal dimuat. Periksa jaringan.",
               how_t="Cara kerja", rules_t="Aturan", ex_t="Contoh", uc_t="Cocok untuk"),
    "fr": dict(sample="Charger l’exemple", clear="Effacer", copy="Copier", write="Écrire la formule", add="Ajouter une ligne",
               download="Télécharger xlsx", empty="Chargez l’exemple ou remplissez les champs.",
               need_lib="La bibliothèque n’a pas chargé. Vérifiez le réseau.",
               how_t="Fonctionnement", rules_t="Règles", ex_t="Exemple", uc_t="Quand ça aide"),
    "ja": dict(sample="サンプルを読み込む", clear="クリア", copy="コピー", write="数式を出す", add="行を追加",
               download="xlsxを保存", empty="サンプルを読むか項目を入力してください。",
               need_lib="ライブラリを読み込めません。通信を確認してください。",
               how_t="使い方", rules_t="ルール", ex_t="例", uc_t="こんなときに"),
    "ru": dict(sample="Загрузить пример", clear="Очистить", copy="Копировать", write="Записать формулу", add="Добавить строку",
               download="Скачать xlsx", empty="Сначала пример или заполните поля.",
               need_lib="Библиотека не загрузилась. Проверьте сеть.",
               how_t="Как это работает", rules_t="Правила", ex_t="Пример", uc_t="Когда помогает"),
    "de": dict(sample="Beispiel laden", clear="Leeren", copy="Kopieren", write="Formel schreiben", add="Zeile hinzufügen",
               download="xlsx herunterladen", empty="Beispiel laden oder Felder füllen.",
               need_lib="Bibliothek nicht geladen. Netz prüfen.",
               how_t="So geht’s", rules_t="Regeln", ex_t="Beispiel", uc_t="Wann das hilft"),
}


def js(s: str) -> str:
    """Emit a TypeScript string literal via JSON (double quotes)."""
    return json.dumps(s, ensure_ascii=False)


def extra_copy(slug: str, lang: str) -> dict:
    """How/FAQ/example unique-enough per slug+lang (rotated FAQ order)."""
    title = T[slug][lang]
    u = UI[lang]
    # Language-specific fallback openings; task-specific packs override their actual steps.
    openings = {
        "en": "Do this job, then use the buttons.",
        "zh": "先办这件事，再点按钮。",
        "es": "Resuelve la tarea; los botones van después.",
        "ar": "أنجز المهمة ثم استخدم الأزرار.",
        "pt": "Resolva a tarefa; os botões vêm depois.",
        "id": "Selesaikan tugasnya dulu, tombol belakangan.",
        "fr": "Faites d’abord le travail, les boutons ensuite.",
        "ja": "先に用事を済ませ、それからボタン。",
        "ru": "Сначала задача, потом кнопки.",
        "de": "Zuerst die Aufgabe, dann die Buttons.",
    }
    how0 = openings[lang]
    packs = {
        "write-nested-if-formula-for-excel": {
            "article": "Build ordered conditions and copy a nested IF formula, with a browser trial before you paste it into Excel.",
            "how": ["Enter the target cell and a trial value.", "Add equals, contains, or blank conditions in the order Excel should test them.", "Set each result and the final else value.", "Write and copy the complete nested IF formula; compare the trial result."],
            "rules": ["Text quotes are doubled inside Excel strings.", "Contains emits ISNUMBER(SEARCH(...)); blank tests empty text.", "The first matching condition wins.", "English function names and commas may need localization in your Excel installation."],
            "example": "A1=West → A; A1=East → B; otherwise Other. Output: =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")); trial West → A.",
            "uc": ["Assign grade or risk bands from ordered rules.", "Turn region codes into reporting labels.", "Check a multi-branch formula before pasting it into a workbook."],
            "faq": [
                ("Are values uploaded?", "No. They stay on your device, not uploaded to a server."),
                ("Is this IFS?", "No. Use the IFS page for IFS()."),
                ("What about contains?", "Choose contains; it emits SEARCH."),
                ("Will the formula paste into every Excel language?", "It uses English function names and commas. Some installations require translated names or semicolon separators."),
            ],
        },
        "write-ifs-formula-in-excel": {
            "article": "Build an ordered IFS formula for Microsoft 365 or Excel 2019 and later, with TRUE as the final catch-all test.",
            "how": ["Enter the target cell and a trial value.", "Add tests and results in evaluation order.", "Enter the final else value; the builder pairs it with TRUE.", "Write and copy IFS, or use nested IF for older Excel."],
            "rules": ["TRUE supplies the final else branch.", "Perpetual Excel 2016 and older do not support IFS.", "The first true test wins.", "English function names and commas may need localization in your Excel installation."],
            "example": "A1=West → A; A1=East → B; otherwise Other. Output: =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\").",
            "uc": ["Replace a hard-to-read nested IF in Microsoft 365.", "Assign labels from ordered business rules.", "Compare IFS with a compatibility-safe nested IF."],
            "faq": [
                ("Does Excel 2016 run IFS?", "The perpetual Excel 2016 release does not. Use nested IF, Excel 2019 or later, or Microsoft 365."),
                ("What happens when no test matches?", "TRUE pairs with your else value to provide a catch-all result."),
                ("Uploaded?", "No. Values stay on your device and are not uploaded to a server."),
                ("Will localized Excel accept it?", "Some installations require localized function names or semicolon separators instead of English comma syntax."),
            ],
        },
        "wrap-formula-with-ifna": {
            "article": "Paste an existing formula, choose the value to return only for #N/A, and copy the wrapped IFNA formula.",
            "how": ["Paste the inner formula with or without its leading equals sign.", "Enter the number or text to return for #N/A.", "Write the IFNA wrapper.", "Copy it into Excel and test a known missing lookup."],
            "rules": ["A leading equals sign is removed before wrapping.", "IFNA catches #N/A only; IFERROR catches more error types.", "Text fallbacks are quoted and embedded quotes are doubled.", "English function names and commas may need localization in your Excel installation."],
            "example": "Inner formula NA() with fallback 0 outputs =IFNA(NA(),0). Excel returns 0 because NA() produces #N/A.",
            "uc": ["Replace missing VLOOKUP matches without hiding other errors.", "Supply a fallback for XLOOKUP results.", "Keep #N/A out of a chart while preserving other failures."],
            "faq": [
                ("Why use IFNA instead of IFERROR?", "IFNA replaces only #N/A, so unrelated formula errors remain visible."),
                ("Uploaded?", "No. Stays on the device, not uploaded to a server."),
                ("Must I type = ?", "No. A leading equals sign is optional and is removed."),
                ("Does this page calculate the inner formula?", "No. It generates wrapper syntax; evaluate the completed formula in Excel."),
            ],
        },
        "write-countif-formula-in-excel": {
            "article": "Enter one range and one criterion, then copy a complete COUNTIF formula for text, numbers, operators, or wildcards.",
            "how": ["Enter an A1-style range such as A2:A6.", "Enter one criterion, including * or ? for wildcard matching.", "Write the COUNTIF formula.", "Copy it into Excel and verify it against a known range."],
            "rules": ["Asterisk matches any sequence and question mark matches one character.", "Use COUNTIFS when several ranges or conditions must match.", "Numbers remain unquoted; text and operators are quoted.", "English function names and commas may need localization in your Excel installation."],
            "example": "A2:A6 with West outputs =COUNTIF(A2:A6,\"West\"); *west* outputs =COUNTIF(A2:A6,\"*west*\").",
            "uc": ["Count one status in an attendance list.", "Count a SKU or numeric threshold.", "Build a contains-style wildcard count such as *west*."],
            "faq": [
                ("When should I use COUNTIFS?", "Use COUNTIFS when two or more ranges or criteria must be tested together."),
                ("How do wildcards work?", "Use * for any sequence or ? for one character; use ~ to escape a literal wildcard."),
                ("Uploaded?", "No. Device, not uploaded to a server."),
                ("How are numbers and operators quoted?", "Bare numbers stay unquoted; criteria such as >10 are quoted."),
            ],
        },
        "excel-formulas-cheat-sheet": {
            "article": "Filter eight common formula patterns, copy a starting point, or open a specialized condition builder.",
            "how": ["Type a function name or formula fragment.", "Select a card to show and copy its snippet.", "Replace sample references and values for your worksheet.", "Open a linked IF, IFS, IFNA, or COUNTIF builder for custom inputs."],
            "rules": ["This is a curated eight-pattern reference, not a complete function catalog.", "Ctrl+` toggles formula display inside Excel.", "Copied snippets use English function names and commas.", "Filtering and copying stay on your device."],
            "example": "Filter IF, copy =IF(A1>0,\"yes\",\"no\").",
            "uc": ["Recall SUMIF or lookup argument order.", "Start from a known example before changing references.", "Move from a reference card to a condition builder."],
            "faq": [
                ("Which formulas are included?", "IF, IFS, IFNA, COUNTIF, SUMIF, VLOOKUP, XLOOKUP, and TEXT."),
                ("Can it show formulas from my workbook?", "No. Use Excel's Ctrl+` shortcut inside an open workbook."),
                ("Uploaded?", "No. The filter and copied snippet stay on your device."),
                ("Where are custom builders?", "Use the links below the cards for nested IF, IFS, IFNA, and COUNTIF."),
            ],
        },
        "create-invoice-spreadsheet": {
            "article": "Enter invoice parties, line items, and tax; preview the rows and download an xlsx with live formulas.",
            "how": ["Enter seller, buyer, and each line as description,quantity,price.", "Set the tax percentage.", "Create and review the line amounts, subtotal, tax, and total.", "Download the xlsx; its formulas recalculate when values change."],
            "rules": ["Line amount is quantity × price; tax is applied to the subtotal.", "The xlsx contains formulas for lines, subtotal, tax, and total.", "Descriptions cannot contain commas; malformed rows are skipped.", "This is not a jurisdiction-specific fiscal or legal e-invoice."],
            "example": "Widget quantity 2 at 10 gives subtotal 20; 10% tax is 2; total is 22.",
            "uc": ["Draft a freelance invoice before accounting review.", "Prepare an internal billing worksheet.", "Teach quantity, price, subtotal, and tax arithmetic."],
            "faq": [
                ("Is this a legally valid invoice?", "Not by itself. Required fields, numbering, tax rules, and e-invoice formats vary by jurisdiction."),
                ("Uploaded?", "No. Files stay on your device, not uploaded to a server."),
                ("Will totals update after editing the xlsx?", "Yes. Line amounts, subtotal, tax, and total are Excel formulas."),
                ("What input rows are accepted?", "Use description,quantity,price. Malformed rows are skipped, and descriptions cannot contain commas."),
            ],
            "disclaimer": "This is a spreadsheet sketch, not tax, legal, or accounting advice.",
        },
        "create-budget-spreadsheet": {
            "article": "List category amounts, verify the total, and download a reusable xlsx whose SUM formula updates in Excel.",
            "how": ["Enter each row as category,amount.", "Create the spreadsheet and verify the total.", "Correct malformed rows before downloading.", "Download the xlsx; changing an amount recalculates the SUM total."],
            "rules": ["Amounts must be finite numbers; malformed rows are skipped.", "The downloaded Total cell uses a live SUM formula.", "This is one planning list, not a ledger or income-versus-expense system.", "Values stay on your device and are not uploaded."],
            "example": "Rent 1200 + Food 400 → 1600.",
            "uc": ["Draft a short monthly envelope budget.", "Add expected trip or event costs.", "Prepare a club spending plan before bookkeeping."],
            "faq": [
                ("Is this a general ledger?", "No. It has no accounts, transactions, reconciliation, or audit history."),
                ("Uploaded?", "No. Device, not uploaded to a server."),
                ("Does the xlsx recalculate?", "Yes. Its Total cell contains a SUM formula."),
                ("Does it track income versus expenses?", "No. Use a fuller budget template for income, targets, variances, or charts."),
            ],
            "disclaimer": "Planning numbers only — not financial, tax, or investment advice.",
        },
        "create-excel-timesheet": {
            "article": "List date, project, and decimal hours, verify the total, and download an xlsx whose SUM formula updates.",
            "how": ["Enter each row as date,project,hours.", "Create the spreadsheet and verify total hours.", "Correct malformed or non-numeric rows.", "Download the xlsx; changing Hours cells recalculates the total."],
            "rules": ["Hours must be finite decimal numbers; malformed rows are skipped.", "The downloaded Total cell uses a live SUM formula.", "This does not calculate breaks, overtime, pay rates, or payroll.", "Entries stay on your device and are not uploaded."],
            "example": "Monday–Friday, 2026-09-07 to 2026-09-11, at 8 hours per day → 40 hours.",
            "uc": ["Prepare a weekly project-hours log.", "Record contractor hours before invoicing.", "Summarize class, lab, or volunteer hours."],
            "faq": [
                ("Does this calculate payroll or overtime?", "No. It totals entered decimal hours only."),
                ("Uploaded?", "No. Entries stay on your device and are not uploaded."),
                ("Does the xlsx recalculate?", "Yes. The Total cell contains a SUM formula."),
                ("Can it calculate clock-in and clock-out?", "No. Enter decimal hours directly; break and elapsed-time arithmetic is outside this compact sheet."),
            ],
        },
        "create-graph-from-spreadsheet-data": {
            "article": how0 + " Canvas chart from CSV.",
            "how": [how0, "Paste CSV.", "Pick label and value columns.", "Switch bar/line."],
            "rules": ["Non-numeric values skip.", "Not an Excel chart object.", "Timeline labels if the first column looks like dates.", "Local paste."],
            "example": "Jan 10, Feb 18 two bars.",
            "uc": ["Tiny sales list.", "Homework plot.", "Timeline-like months."],
            "faq": [
                ("Excel chart file?", "No. Canvas only."),
                ("Uploaded?", "No. Paste stays on the device, not uploaded to a server."),
                ("Dashboard?", "Two-chart page is separate."),
                ("Pivot?", "Other page."),
            ],
        },
        "create-excel-dashboard": {
            "article": how0 + " KPI cards and two charts, not Power BI.",
            "how": [how0, "Paste CSV with two numeric columns.", "Read sums and row count.", "See two small charts."],
            "rules": ["Needs two numeric columns.", "Not a full Excel dashboard workbook.", "Not Power BI.", "Local."],
            "example": "Region,Q1,Q2 three rows → two bars.",
            "uc": ["Tiny ops snapshot.", "Class KPI demo.", "Two-series compare."],
            "faq": [
                ("Power BI?", "No."),
                ("Uploaded?", "No. Not uploaded to a server."),
                ("One chart only?", "Use the graph page."),
                ("Pivot?", "Other page."),
            ],
        },
        "build-pivot-table-from-spreadsheet": {
            "article": how0 + " Sum or count by row field.",
            "how": [how0, "Paste a header row.", "Pick row and value fields.", "Choose sum or count."],
            "rules": ["Not Excel PivotTable cache.", "Blanks group as (blank).", "One value field.", "Local."],
            "example": "East 10+5 → East 15.",
            "uc": ["Region totals.", "Count tickets.", "Homework pivot."],
            "faq": [
                ("Excel PivotTable UI?", "No. Simple aggregate table."),
                ("Uploaded?", "No. Not uploaded to a server."),
                ("H1 pivot table excel?", "Head term stays in FAQ."),
                ("Chart?", "Graph page."),
            ],
        },
        "open-excel-file-in-browser": {
            "article": how0 + " Read-only grid, not Excel Online.",
            "how": [how0, "Choose xlsx/xls/csv.", "Pick a sheet.", "Scroll. No cell edit."],
            "rules": ["First sheet default.", "No editing.", "Protected books may fail.", "CDN library; your file is not uploaded."],
            "example": "3×3 Name/Qty sample.",
            "uc": ["Quick peek without Excel.", "CSV check.", "Compare later on the compare page."],
            "faq": [
                ("Can I edit cells?", "No. Viewer only."),
                ("Uploaded?", "No. Files stay on your device, not uploaded to a server."),
                ("xls online?", "Same viewer."),
                ("Excel Online clone?", "No."),
            ],
        },
    }
    p = packs[slug]
    # Rotate FAQ order by language index to avoid isomorphic Q1.
    rot = LANGS.index(lang)
    faqs = p["faq"][rot % 4 :] + p["faq"][: rot % 4]
    out = {
        "article": p["article"],
        "how_body": p["article"],
        "example": p["example"],
        "disclaimer": p.get("disclaimer", ""),
    }
    for i, h in enumerate(p["how"], 1):
        out[f"how_item_{i}"] = h
    for i, r in enumerate(p["rules"], 1):
        out[f"rules_item_{i}"] = r
    for i, urow in enumerate(p["uc"], 1):
        out[f"usecase_{i}"] = urow
    for i, (q, a) in enumerate(faqs, 1):
        out[f"faq_q{i}"] = q
        out[f"faq_a{i}"] = a
    # Independent locale rewrite (not English Q1 lock); en keeps the source pack.
    over = locale_overlay(slug, lang)
    if over:
        out.update(over)
    return out


def native_faqs(slug: str, lang: str):
    """Non-English FAQ for coverage langs; None keeps rotated English."""
    if lang == "en":
        return None
    table = {
        "zh": {
            "write-nested-if-formula-for-excel": [
                ("会上传吗？", "不会。输入留在本机，不上传服务器。"),
                ("这是 IFS 吗？", "不是。IFS 请用另一页。"),
                ("包含条件？", "选包含，会写出 SEARCH。"),
                ("不装 Excel 能试算吗？", "可以，用示例单元格的值。"),
            ],
            "write-ifs-formula-in-excel": [
                ("Excel 2010 能用 IFS 吗？", "不能，请用嵌套 IF。"),
                ("为什么标题不是 IFS Excel？", "那是头词；本页用场景句。"),
                ("上传吗？", "不上传服务器。"),
                ("和嵌套 IF 同一套条件？", "是，只是语法不同。"),
            ],
        },
        "ja": {
            "write-nested-if-formula-for-excel": [
                ("アップロードしますか？", "しません。端末内で、サーバーに上げません。"),
                ("IFSですか？", "違います。IFSページへ。"),
                ("含む条件は？", "含むを選ぶとSEARCHになります。"),
                ("Excelなしで試せますか？", "サンプルセルの値で試算します。"),
            ],
        },
        "es": {
            "write-nested-if-formula-for-excel": [
                ("¿Se sube al servidor?", "No. Se queda en el dispositivo."),
                ("¿Es SISI/IFS?", "No. Esa es otra página."),
                ("¿Contiene?", "Elige contiene y sale SEARCH."),
                ("¿Prueba sin Excel?", "Sí, con el valor de ejemplo."),
            ],
        },
    }
    return table.get(lang, {}).get(slug)


def native_hows(slug: str, lang: str):
    """Native how steps for zh (always) and ja/es for nested IF; others keep mixed."""
    if lang != "zh":
        return None
    m = {
        "write-nested-if-formula-for-excel": [
            "先写出嵌套 IF，再点按钮。",
            "填单元格（A1）。",
            "加等于/包含/空白行。",
            "复制公式并看试算。",
        ],
        "write-ifs-formula-in-excel": [
            "先写出 IFS，再复制。",
            "像嵌套 IF 一样填条件。",
            "否则用 TRUE。",
            "2013 及更早请改嵌套 IF。",
        ],
        "wrap-formula-with-ifna": [
            "先包住 #N/A。",
            "贴内部公式。",
            "填备选值。",
            "复制 IFNA 并看试算。",
        ],
        "write-countif-formula-in-excel": [
            "先写出 COUNTIF。",
            "填区域。",
            "填条件，可用 * ?。",
            "复制公式。",
        ],
        "excel-formulas-cheat-sheet": [
            "先复制常用公式。",
            "按名字筛选。",
            "打开卡片复制。",
            "要生成嵌套 IF 请去另一页。",
        ],
        "create-invoice-spreadsheet": [
            "先做出发票表。",
            "填买卖方和明细。",
            "填税率。",
            "预览后下载 xlsx。",
        ],
        "create-budget-spreadsheet": [
            "先做出预算表。",
            "加类别和金额。",
            "看合计。",
            "下载 xlsx。",
        ],
        "create-excel-timesheet": [
            "先做出工时表。",
            "填日期、项目、小时。",
            "看总工时。",
            "下载 xlsx。",
        ],
        "create-graph-from-spreadsheet-data": [
            "先用表数据画图。",
            "粘贴 CSV。",
            "选标签列和数值列。",
            "切换柱/线。",
        ],
        "create-excel-dashboard": [
            "先做出看板。",
            "粘贴至少两列数字。",
            "看合计和行数。",
            "看两张小图。",
        ],
        "build-pivot-table-from-spreadsheet": [
            "先做出透视汇总。",
            "粘贴带表头的表。",
            "选行字段和值字段。",
            "选求和或计数。",
        ],
        "open-excel-file-in-browser": [
            "先打开文件看格子。",
            "选 xlsx/xls/csv。",
            "选工作表。",
            "只读滚动，不能改格。",
        ],
    }
    return m.get(slug)


def write_label(lang: str, kind: str) -> str:
    """Primary action label: formula tools vs spreadsheet builders."""
    formula = kind in ("nested_if", "ifs", "ifna", "countif")
    table = {
        "en": ("Write formula", "Create spreadsheet", "Build table"),
        "zh": ("写出公式", "生成表格", "做出汇总"),
        "es": ("Escribir fórmula", "Crear hoja", "Armar tabla"),
        "ar": ("اكتب الصيغة", "أنشئ الجدول", "ابنِ الجدول"),
        "pt": ("Escrever fórmula", "Criar planilha", "Montar tabela"),
        "id": ("Tulis rumus", "Buat spreadsheet", "Bangun tabel"),
        "fr": ("Écrire la formule", "Créer le tableur", "Construire le tableau"),
        "ja": ("数式を出す", "表を作る", "集計する"),
        "ru": ("Записать формулу", "Собрать таблицу", "Собрать сводную"),
        "de": ("Formel schreiben", "Tabelle erstellen", "Pivot bauen"),
    }[lang]
    if formula:
        return table[0]
    if kind == "pivot":
        return table[2]
    return table[1]


def i18n_dict(slug: str, lang: str, kind: str, ymyl: bool) -> dict:
    """Assemble all i18n keys for one locale."""
    p = prefix_for(slug)
    u = UI[lang]
    extra = extra_copy(slug, lang)
    title = T[slug][lang].strip()
    desc_long = pad_description(lang, D[slug][lang])
    home = extra.get("how_body") or title
    d = {
        f"{p}_title": title,
        f"{p}_desc": home,
        f"{p}_description": desc_long,
        f"{p}_article": extra["article"],
        f"{p}_sample": u["sample"],
        f"{p}_clear": u["clear"],
        f"{p}_copy": u["copy"],
        f"{p}_write": write_label(lang, kind),
        f"{p}_add": u["add"],
        f"{p}_download": u["download"],
        f"{p}_empty": u["empty"],
        f"{p}_need_lib": u["need_lib"],
        f"{p}_how_title": u["how_t"],
        f"{p}_how_body": extra["how_body"],
        f"{p}_rules_title": u["rules_t"],
        f"{p}_rules_body": " ".join(extra[f"rules_item_{i}"] for i in (1, 2)),
        f"{p}_example_title": u["ex_t"],
        f"{p}_example": extra["example"],
        f"{p}_usecases_title": u["uc_t"],
        f"{p}_cell": {"en": "Cell", "zh": "单元格", "es": "Celda", "ar": "خلية", "pt": "Célula", "id": "Sel", "fr": "Cellule", "ja": "セル", "ru": "Ячейка", "de": "Zelle"}[lang],
        f"{p}_else": {"en": "Else", "zh": "否则", "es": "Si no", "ar": "وإلا", "pt": "Senão", "id": "Jika tidak", "fr": "Sinon", "ja": "それ以外", "ru": "Иначе", "de": "Sonst"}[lang],
        f"{p}_trial": {"en": "Trial value", "zh": "试算", "es": "Prueba", "ar": "تجربة", "pt": "Teste", "id": "Uji", "fr": "Essai", "ja": "試算", "ru": "Проба", "de": "Probe"}[lang],
        f"{p}_formula": {"en": "Formula", "zh": "公式", "es": "Fórmula", "ar": "صيغة", "pt": "Fórmula", "id": "Rumus", "fr": "Formule", "ja": "数式", "ru": "Формула", "de": "Formel"}[lang],
        f"{p}_inner": {"en": "Inner formula", "zh": "内部公式", "es": "Fórmula interior", "ar": "الصيغة الداخلية", "pt": "Fórmula interna", "id": "Rumus dalam", "fr": "Formule interne", "ja": "内側の数式", "ru": "Внутренняя", "de": "Innenformel"}[lang],
        f"{p}_alt": {"en": "If #N/A then", "zh": "#N/A 时", "es": "Si #N/A", "ar": "إذا #N/A", "pt": "Se #N/A", "id": "Jika #N/A", "fr": "Si #N/A", "ja": "#N/Aのとき", "ru": "Если #N/A", "de": "Bei #N/A"}[lang],
        f"{p}_range": {"en": "Range", "zh": "区域", "es": "Rango", "ar": "نطاق", "pt": "Intervalo", "id": "Rentang", "fr": "Plage", "ja": "範囲", "ru": "Диапазон", "de": "Bereich"}[lang],
        f"{p}_criteria": {"en": "Criteria", "zh": "条件", "es": "Criterio", "ar": "معيار", "pt": "Critério", "id": "Kriteria", "fr": "Critère", "ja": "条件", "ru": "Критерий", "de": "Kriterium"}[lang],
        f"{p}_filter": {"en": "Filter", "zh": "筛选", "es": "Filtro", "ar": "تصفية", "pt": "Filtro", "id": "Saring", "fr": "Filtrer", "ja": "絞り込み", "ru": "Фильтр", "de": "Filter"}[lang],
        f"{p}_op_eq": {"en": "equals", "zh": "等于", "es": "igual", "ar": "يساوي", "pt": "igual", "id": "sama", "fr": "égal", "ja": "等しい", "ru": "равно", "de": "gleich"}[lang],
        f"{p}_op_contains": {"en": "contains", "zh": "包含", "es": "contiene", "ar": "يحتوي", "pt": "contém", "id": "berisi", "fr": "contient", "ja": "含む", "ru": "содержит", "de": "enthält"}[lang],
        f"{p}_op_blank": {"en": "is blank", "zh": "空白", "es": "vacío", "ar": "فارغ", "pt": "vazio", "id": "kosong", "fr": "vide", "ja": "空白", "ru": "пусто", "de": "leer"}[lang],
        f"{p}_note_2016": {"en": "IFS needs Excel 2019, Microsoft 365, or later.", "zh": "IFS 需要 Excel 2019、Microsoft 365 或更新版本。", "es": "IFS requiere Excel 2019, Microsoft 365 o posterior.", "ar": "تحتاج IFS إلى Excel 2019 أو Microsoft 365 أو إصدار أحدث.", "pt": "IFS requer Excel 2019, Microsoft 365 ou posterior.", "id": "IFS memerlukan Excel 2019, Microsoft 365, atau versi lebih baru.", "fr": "IFS exige Excel 2019, Microsoft 365 ou une version ultérieure.", "ja": "IFSにはExcel 2019、Microsoft 365以降が必要です。", "ru": "Для IFS нужен Excel 2019, Microsoft 365 или более новая версия.", "de": "WENNS benötigt Excel 2019, Microsoft 365 oder neuer."}[lang],
        f"{p}_csv": {"en": "CSV paste", "zh": "粘贴 CSV", "es": "Pegar CSV", "ar": "لصق CSV", "pt": "Colar CSV", "id": "Tempel CSV", "fr": "Coller CSV", "ja": "CSVを貼る", "ru": "Вставить CSV", "de": "CSV einfügen"}[lang],
        f"{p}_draw": {"en": "Draw", "zh": "绘图", "es": "Dibujar", "ar": "رسم", "pt": "Desenhar", "id": "Gambar", "fr": "Dessiner", "ja": "描く", "ru": "Рисовать", "de": "Zeichnen"}[lang],
        f"{p}_bar": {"en": "Bars", "zh": "柱形", "es": "Barras", "ar": "أعمدة", "pt": "Barras", "id": "Batang", "fr": "Barres", "ja": "棒", "ru": "Столбцы", "de": "Balken"}[lang],
        f"{p}_line": {"en": "Line", "zh": "折线", "es": "Línea", "ar": "خط", "pt": "Linha", "id": "Garis", "fr": "Ligne", "ja": "折れ線", "ru": "Линия", "de": "Linie"}[lang],
        f"{p}_row_field": {"en": "Row field", "zh": "行字段", "es": "Campo de fila", "ar": "حقل الصف", "pt": "Campo de linha", "id": "Bidang baris", "fr": "Champ ligne", "ja": "行フィールド", "ru": "Поле строки", "de": "Zeilenfeld"}[lang],
        f"{p}_val_field": {"en": "Value field", "zh": "值字段", "es": "Campo de valor", "ar": "حقل القيمة", "pt": "Campo de valor", "id": "Bidang nilai", "fr": "Champ valeur", "ja": "値フィールド", "ru": "Поле значения", "de": "Wertefeld"}[lang],
        f"{p}_sum": {"en": "Sum", "zh": "求和", "es": "Suma", "ar": "جمع", "pt": "Soma", "id": "Jumlah", "fr": "Somme", "ja": "合計", "ru": "Сумма", "de": "Summe"}[lang],
        f"{p}_count": {"en": "Count", "zh": "计数", "es": "Recuento", "ar": "عد", "pt": "Contagem", "id": "Hitung", "fr": "Compte", "ja": "件数", "ru": "Счёт", "de": "Anzahl"}[lang],
        f"{p}_file": {"en": "Spreadsheet file", "zh": "表格文件", "es": "Archivo", "ar": "ملف", "pt": "Arquivo", "id": "Berkas", "fr": "Fichier", "ja": "ファイル", "ru": "Файл", "de": "Datei"}[lang],
        f"{p}_sheet": {"en": "Sheet", "zh": "工作表", "es": "Hoja", "ar": "ورقة", "pt": "Planilha", "id": "Sheet", "fr": "Feuille", "ja": "シート", "ru": "Лист", "de": "Blatt"}[lang],
        f"{p}_err_read": {"en": "Could not read that file. Try xlsx, xls, or csv.", "zh": "读不了该文件，请换 xlsx/xls/csv。", "es": "No se pudo leer. Prueba xlsx, xls o csv.", "ar": "تعذر القراءة. جرّب xlsx أو csv.", "pt": "Não foi possível ler. Tente xlsx/csv.", "id": "Gagal membaca. Coba xlsx/csv.", "fr": "Lecture impossible. Essayez xlsx/csv.", "ja": "読めません。xlsx/csvを試してください。", "ru": "Не прочиталось. Попробуйте xlsx/csv.", "de": "Lesen fehlgeschlagen. xlsx/csv versuchen."}[lang],
        f"{p}_seller": {"en": "Seller", "zh": "卖方", "es": "Vendedor", "ar": "البائع", "pt": "Vendedor", "id": "Penjual", "fr": "Vendeur", "ja": "売主", "ru": "Продавец", "de": "Verkäufer"}[lang],
        f"{p}_buyer": {"en": "Buyer", "zh": "买方", "es": "Comprador", "ar": "المشتري", "pt": "Comprador", "id": "Pembeli", "fr": "Acheteur", "ja": "買主", "ru": "Покупатель", "de": "Käufer"}[lang],
        f"{p}_lines": {"en": "desc,qty,price", "zh": "说明,数量,单价", "es": "desc,cant,precio", "ar": "وصف,كمية,سعر", "pt": "desc,qtd,preço", "id": "desc,qty,harga", "fr": "libellé,qté,prix", "ja": "品名,数量,単価", "ru": "название,кол,цена", "de": "Pos,Menge,Preis"}[lang],
        f"{p}_tax": {"en": "Tax %", "zh": "税率 %", "es": "Impuesto %", "ar": "ضريبة ٪", "pt": "Imposto %", "id": "Pajak %", "fr": "Taxe %", "ja": "税率 %", "ru": "Налог %", "de": "Steuer %"}[lang],
    }
    for i in range(1, 5):
        d[f"{p}_how_item_{i}"] = extra[f"how_item_{i}"]
        d[f"{p}_rules_item_{i}"] = extra[f"rules_item_{i}"]
        d[f"{p}_faq_q{i}"] = extra[f"faq_q{i}"]
        d[f"{p}_faq_a{i}"] = extra[f"faq_a{i}"]
    for i in range(1, 4):
        d[f"{p}_usecase_{i}"] = extra[f"usecase_{i}"]
    if extra.get("disclaimer"):
        d[f"{p}_disclaimer"] = extra["disclaimer"]
    elif ymyl:
        d[f"{p}_disclaimer"] = {
            "en": "Spreadsheet sketch only — not tax or legal advice.",
            "zh": "仅电子表草稿，不构成税务或法律建议。",
            "es": "Solo un borrador de hoja, no asesoría fiscal.",
            "ar": "مسودة جدول فقط، ليست مشورة ضريبية.",
            "pt": "Apenas rascunho, não é conselho fiscal.",
            "id": "Hanya sketsa, bukan nasihat pajak.",
            "fr": "Simple brouillon, pas un conseil fiscal.",
            "ja": "表の下書きであり、税務・法律助言ではありません。",
            "ru": "Черновик таблицы, не налоговая консультация.",
            "de": "Nur Tabellenentwurf, keine Steuerberatung.",
        }[lang]
    return d


def write_i18n(slug: str, kind: str, ymyl: bool) -> None:
    """Write ten locale shards."""
    folder = ROOT / "src/site/i18n/tools" / slug
    folder.mkdir(parents=True, exist_ok=True)
    pfx = prefix_for(slug)
    for lang in LANGS:
        body = i18n_dict(slug, lang, kind, ymyl)
        lines = [
            f"/** i18n ({slug} / {lang}). Local search H1; files stay on the device. */",
            "import type { SiteLangDict } from '../../../types';",
            "",
            f"const {lang}: SiteLangDict = {{",
        ]
        for k, v in sorted(body.items()):
            lines.append(f"\t{k}: {js(v)},")
        lines += [ "};", "", f"export default {lang};", ""]
        (folder / f"{lang}.ts").write_text("\n".join(lines), encoding="utf-8")


def write_catalog(t: dict) -> None:
    """Write catalog shard."""
    slug = t["slug"]
    camel = kebab_to_camel(slug)
    exp = export_name(slug)
    pfx = prefix_for(slug)
    shard = {
        "slug": slug,
        "path": f"/tools/{slug}",
        "updatedAt": UPDATED_AT,
        "launchedAt": LAUNCHED_AT,
        "category": t["category"],
        "primaryTopic": t["topic"],
        "featured": True,
        "ymyl": t["ymyl"],
        "i18nKey": f"{pfx}_title",
        "homeTitleKey": f"{pfx}_title",
        "homeDescKey": f"{pfx}_desc",
        "faqPrefix": pfx,
        "related": t["related"],
        "logo": f"/icons/tools/{slug}.svg",
        "page": {
            "module": f"../pages/{camel}Page",
            "export": exp,
            "style": "opts",
        },
        "localProcessing": True,
        "scenario": "documents",
        "subject": "data",
    }
    path = ROOT / "src/site/tool-catalog.d" / f"{slug}.json"
    path.write_text(json.dumps(shard, indent=2) + "\n", encoding="utf-8")


def write_icon(slug: str, letter: str) -> None:
    """ASCII-only SVG icon (Excel green)."""
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img">
  <rect width="32" height="32" rx="8" fill="#217346"/>
  <rect x="6" y="8" width="20" height="16" rx="1.4" fill="#fff" opacity=".95"/>
  <path d="M6 14h20M14 8v16" stroke="#217346" stroke-width="1.5"/>
  <text x="21" y="22" text-anchor="middle" font-size="9" fill="#217346" font-family="ui-sans-serif,sans-serif">{letter}</text>
</svg>
'''
    (ROOT / "public/icons/tools" / f"{slug}.svg").write_text(svg, encoding="utf-8")


def jtx(key: str) -> str:
    """TypeScript expression injecting an i18n string into extraBodyHtml."""
    return "${JSON.stringify(tx(opts.lang, '" + key + "'))}"


def page_chrome(t: dict, form: str, script: str, style: str) -> str:
    """Emit a complete opts-style Page.ts."""
    slug = t["slug"]
    pfx = prefix_for(slug)
    camel = kebab_to_camel(slug)
    exp = export_name(slug)
    anchor = slug.split("-")[0]
    refs = ",\n\t\t\t".join(
        "{ label: %s, href: %s }" % (js(a), js(b)) for a, b in t["refs"]
    )
    xlsx_tag = (
        '  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>\n'
        if t["xlsx"]
        else ""
    )
    return f'''/**
 * {slug} tool page.
 * Scene H1 from Excel Planner analysis; local processing only.
 */
import type {{ SiteLang }} from '../site/i18n';
import {{ t, supportedLangs }} from '../site/i18n';
import {{ renderFooter }} from './site/footer';
import {{ renderHeader }} from './site/header';
import {{ buildToolPageNavItems }} from './site/nav';
import {{ renderLayout, type HreflangAlternate, escapeHtml }} from './site/layout';
import {{ renderSidebar, buildToolSidebarItems }} from './site/sidebar';
import {{ getToolBySlug }} from '../site/tools';
import {{
	renderToolExtraSections,
	renderToolIgSections,
	renderToolReferencesSection,
	buildToolJsonLd,
}} from './site/toolContent';

/** i18n prefix (catalog faqPrefix). */
const PREFIX = '{pfx}';

/**
 * Prefix a path with the language segment (default language has none).
 * @param lang Active language
 * @param pathname Absolute path
 * @param defaultLang Site default language
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {{
	const safe = pathname.startsWith('/') ? pathname : `/${{pathname}}`;
	return lang === defaultLang ? safe : `/${{lang}}${{safe}}`;
}};

/**
 * Read one i18n suffix for this tool.
 * @param lang Active language
 * @param suffix Key after PREFIX_
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${{PREFIX}}_${{suffix}}` as Parameters<typeof t>[1]);

/**
 * Render the {slug} page.
 * @param opts.lang Active language
 * @param opts.defaultLang Default language
 * @param opts.enabledLangs Enabled languages
 */
export const {exp} = (opts: {{
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}}) => {{
	/** Canonical tool path without language prefix. */
	const toolPath = '/tools/{slug}';
	/** Language-aware canonical path. */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** Document title. */
	const title = `${{tx(opts.lang, 'title')}} | ${{t(opts.lang, 'brand')}}`;
	/** Meta description. */
	const description = tx(opts.lang, 'description');
	/** Header nav. */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * Language switcher URLs always include an explicit language prefix.
	 * @param code Target language
	 * @param pathname Tool path
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {{
		const safe = pathname.startsWith('/') ? pathname : `/${{pathname}}`;
		return `/${{code}}${{safe}}`.replace(/\\/{{2,}}/g, '/');
	}};

	/** Language menu map. */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);
	/** hreflang list. */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({{
		lang: code,
		href: `https://onlinefreetools.org${{withLangPrefix(code, toolPath, opts.defaultLang)}}`,
	}}));
	/** Header HTML. */
	const headerHtml = renderHeader({{
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	}});
	/** Sidebar HTML. */
	const sidebarHtml = renderSidebar({{
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({{
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: '{slug}',
			currentAnchor: '#{anchor}',
		}}),
		id: 'toolNav',
	}});
	/** Footer HTML. */
	const footerHtml = renderFooter({{ lang: opts.lang }});
	/** Page-local CSS. */
	const extraHeadHtml = `
  <style>
    {style}
  </style>`;
	/** Interactive card. */
	const contentHtml = `
    <div id="{anchor}" class="tool-hero">
      <h1 class="tool-title">${{escapeHtml(tx(opts.lang, 'title'))}}</h1>
      <p class="tool-lead">${{escapeHtml(description)}}</p>
    </div>
    <div class="tool-panel">
      {form}
    </div>`;
	/** How / rules / example. */
	const igHtml = renderToolIgSections({{
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	}});
	/** References. */
	const referencesHtml = renderToolReferencesSection({{
		lang: opts.lang,
		links: [
			{refs}
		],
	}});
	/** Client script (loadSample required). */
	const extraBodyHtml = `
{xlsx_tag}  <script>
    (function () {{
      {script}
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    }})();
  </script>`;
	const toolMeta = getToolBySlug('{slug}');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({{ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta }})
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({{
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as Parameters<typeof t>[1]),
				description,
				canonicalPath,
			}})
		: '';
	return renderLayout({{
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		ogType: 'website',
		alternates,
		headerHtml,
		sidebarHtml,
		contentHtml: `${{contentHtml}}${{igHtml}}${{toolSeoHtml}}${{referencesHtml}}`,
		footerHtml,
		extraHeadHtml: `${{extraHeadHtml}}${{toolJsonLd}}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	}});
}};
'''


def script_if_builder(mode: str) -> str:
    """Nested IF or IFS client logic."""
    emit = "emitNested" if mode == "nested" else "emitIfs"
    note = f"noteEl.textContent = {jtx('note_2016')};" if mode == "ifs" else "noteEl.textContent = '';"
    return f"""
      var cellEl = document.getElementById('exCell');
      var elseEl = document.getElementById('exElse');
      var trialEl = document.getElementById('exTrial');
      var body = document.getElementById('exRows');
      var out = document.getElementById('exOut');
      var trialOut = document.getElementById('exTrialOut');
      var errEl = document.getElementById('exErr');
      var noteEl = document.getElementById('exNote');
      var msgEmpty = {jtx('empty')};
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function xlQ(s) {{ return '"' + String(s).replace(/"/g, '""') + '"'; }}
      function testExpr(cell, op, val) {{
        if (op === 'blank') return cell + '=""';
        if (op === 'contains') return 'ISNUMBER(SEARCH(' + xlQ(val) + ',' + cell + '))';
        var n = String(val).trim();
        if (/^-?\\d+(\\.\\d+)?$/.test(n)) return cell + '=' + n;
        return cell + '=' + xlQ(val);
      }}
      function lit(val) {{
        var n = String(val).trim();
        if (/^-?\\d+(\\.\\d+)?$/.test(n)) return n;
        return xlQ(val);
      }}
      function rows() {{
        var list = [];
        body.querySelectorAll('tr').forEach(function (tr) {{
          list.push({{
            op: tr.querySelector('.exOp').value,
            val: tr.querySelector('.exVal').value,
            then: tr.querySelector('.exThen').value
          }});
        }});
        return list;
      }}
      function emitNested(cell, list, els) {{
        var acc = lit(els);
        for (var i = list.length - 1; i >= 0; i--) {{
          acc = 'IF(' + testExpr(cell, list[i].op, list[i].val) + ',' + lit(list[i].then) + ',' + acc + ')';
        }}
        return '=' + acc;
      }}
      function emitIfs(cell, list, els) {{
        var parts = [];
        list.forEach(function (r) {{ parts.push(testExpr(cell, r.op, r.val) + ',' + lit(r.then)); }});
        parts.push('TRUE,' + lit(els));
        return '=IFS(' + parts.join(',') + ')';
      }}
      function jsTest(cellVal, op, val) {{
        var a = String(cellVal);
        if (op === 'blank') return a === '';
        if (op === 'contains') return a.toLowerCase().indexOf(String(val).toLowerCase()) >= 0;
        return a.trim().toLowerCase() === String(val).trim().toLowerCase();
      }}
      function trial(list, cellVal, els) {{
        for (var i = 0; i < list.length; i++) {{
          if (jsTest(cellVal, list[i].op, list[i].val)) return list[i].then;
        }}
        return els;
      }}
      function addRow(op, val, thenv) {{
        var tr = document.createElement('tr');
        tr.innerHTML = '<td><select class="form-select form-select-sm exOp"><option value="eq">' + {jtx('op_eq')} + '</option><option value="contains">' + {jtx('op_contains')} + '</option><option value="blank">' + {jtx('op_blank')} + '</option></select></td>' +
          '<td><input class="form-control form-control-sm exVal"></td>' +
          '<td><input class="form-control form-control-sm exThen"></td>';
        body.appendChild(tr);
        tr.querySelector('.exOp').value = op || 'eq';
        tr.querySelector('.exVal').value = val || '';
        tr.querySelector('.exThen').value = thenv || '';
      }}
      function run() {{
        var cell = (cellEl.value || 'A1').trim();
        var list = rows();
        if (!list.length) {{ showErr(msgEmpty); return; }}
        showErr('');
        var formula = {emit}(cell, list, elseEl.value);
        out.textContent = formula;
        trialOut.textContent = String(trial(list, trialEl.value, elseEl.value));
        {note}
      }}
      function loadSample() {{
        body.innerHTML = '';
        cellEl.value = 'A1';
        trialEl.value = 'West';
        elseEl.value = 'Other';
        addRow('eq', 'West', 'A');
        addRow('eq', 'East', 'B');
        run();
      }}
      document.getElementById('exAdd').addEventListener('click', function () {{ addRow('eq', '', ''); }});
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ body.innerHTML = ''; out.textContent = ''; trialOut.textContent = ''; showErr(msgEmpty); }});
      document.getElementById('exCopy').addEventListener('click', function () {{
        if (out.textContent && navigator.clipboard) navigator.clipboard.writeText(out.textContent);
      }});
"""


def form_if_builder() -> str:
    """Shared condition-table markup."""
    return """
      <div class="row g-2 mb-2">
        <div class="col-6 col-md-3"><label class="form-label" for="exCell">${escapeHtml(tx(opts.lang, 'cell'))}</label><input id="exCell" class="form-control form-control-sm" value="A1"></div>
        <div class="col-6 col-md-3"><label class="form-label" for="exTrial">${escapeHtml(tx(opts.lang, 'trial'))}</label><input id="exTrial" class="form-control form-control-sm"></div>
        <div class="col-12 col-md-6"><label class="form-label" for="exElse">${escapeHtml(tx(opts.lang, 'else'))}</label><input id="exElse" class="form-control form-control-sm"></div>
      </div>
      <div class="table-responsive mb-2"><table class="table table-sm"><thead><tr><th></th><th></th><th></th></tr></thead><tbody id="exRows"></tbody></table></div>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exAdd">${escapeHtml(tx(opts.lang, 'add'))}</button>
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exCopy">${escapeHtml(tx(opts.lang, 'copy'))}</button>
      </div>
      <p id="exNote" class="small text-muted"></p>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <p class="small mb-1">${escapeHtml(tx(opts.lang, 'formula'))}</p>
      <pre id="exOut" class="small bg-light p-2"></pre>
      <p class="small mb-0">${escapeHtml(tx(opts.lang, 'trial'))}: <span id="exTrialOut"></span></p>
"""


# Remaining scripts/forms will be appended below in write_pages().

IFNA_SCRIPT = None  # filled in main via functions


def main() -> None:
    """Write all engineering artifacts."""
    letters = "NIFWCKIBTGDPV"
    for i, t in enumerate(TOOLS):
        write_catalog(t)
        write_icon(t["slug"], letters[i % len(letters)])
        write_i18n(t["slug"], t["kind"], t["ymyl"])
        kind = t["kind"]
        style = ".tool-panel pre{white-space:pre-wrap;word-break:break-all} #exOut{min-height:3rem}"
        if kind == "nested_if":
            form, script = form_if_builder(), script_if_builder("nested")
        elif kind == "ifs":
            form, script = form_if_builder(), script_if_builder("ifs")
        elif kind == "ifna":
            form, script = form_ifna(), script_ifna()
        elif kind == "countif":
            form, script = form_countif(), script_countif()
        elif kind == "cheat":
            form, script = form_cheat(), script_cheat()
        elif kind == "invoice":
            form, script = form_invoice(), script_invoice()
        elif kind == "budget":
            form, script = form_budget(), script_budget()
        elif kind == "timesheet":
            form, script = form_timesheet(), script_timesheet()
        elif kind == "graph":
            form, script = form_graph(), script_graph()
        elif kind == "dashboard":
            form, script = form_dashboard(), script_dashboard()
        elif kind == "pivot":
            form, script = form_pivot(), script_pivot()
        else:
            form, script = form_viewer(), script_viewer()
        src = page_chrome(t, form, script, style)
        path = ROOT / "src/pages" / (kebab_to_camel(t["slug"]) + "Page.ts")
        path.write_text(src, encoding="utf-8")
        print("wrote", t["slug"])


def form_ifna() -> str:
    """Render the IFNA wrapper form without pretending to evaluate Excel formulas."""
    return """
      <label class="form-label" for="exInner">${escapeHtml(tx(opts.lang, 'inner'))}</label>
      <input id="exInner" class="form-control mb-2">
      <label class="form-label" for="exAlt">${escapeHtml(tx(opts.lang, 'alt'))}</label>
      <input id="exAlt" class="form-control mb-2">
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exCopy">${escapeHtml(tx(opts.lang, 'copy'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <pre id="exOut" class="small bg-light p-2"></pre>
"""


def script_ifna() -> str:
    """Emit IFNA syntax; arbitrary Excel formulas are not evaluated in JavaScript."""
    return f"""
      var inner = document.getElementById('exInner');
      var alt = document.getElementById('exAlt');
      var out = document.getElementById('exOut');
      var errEl = document.getElementById('exErr');
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function lit(val) {{
        var n = String(val).trim();
        if (/^-?\\d+(\\.\\d+)?$/.test(n)) return n;
        return '"' + String(val).replace(/"/g, '""') + '"';
      }}
      function run() {{
        var raw = (inner.value || '').trim().replace(/^=/, '');
        if (!raw) {{ showErr({jtx('empty')}); return; }}
        showErr('');
        out.textContent = '=IFNA(' + raw + ',' + lit(alt.value) + ')';
      }}
      function loadSample() {{ inner.value = 'NA()'; alt.value = '0'; run(); }}
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ inner.value = ''; alt.value = ''; out.textContent = ''; }});
      document.getElementById('exCopy').addEventListener('click', function () {{ if (out.textContent && navigator.clipboard) navigator.clipboard.writeText(out.textContent); }});
"""


def form_countif() -> str:
    return """
      <label class="form-label" for="exRange">${escapeHtml(tx(opts.lang, 'range'))}</label>
      <input id="exRange" class="form-control mb-2">
      <label class="form-label" for="exCrit">${escapeHtml(tx(opts.lang, 'criteria'))}</label>
      <input id="exCrit" class="form-control mb-2">
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exCopy">${escapeHtml(tx(opts.lang, 'copy'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <pre id="exOut" class="small bg-light p-2"></pre>
"""


def script_countif() -> str:
    return f"""
      var range = document.getElementById('exRange');
      var crit = document.getElementById('exCrit');
      var out = document.getElementById('exOut');
      var errEl = document.getElementById('exErr');
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function run() {{
        var r = (range.value || '').trim();
        var c = (crit.value || '').trim();
        if (!r || !c) {{ showErr({jtx('empty')}); return; }}
        showErr('');
        var lit = /^-?\\d+(\\.\\d+)?$/.test(c) ? c : '"' + c.replace(/"/g, '""') + '"';
        out.textContent = '=COUNTIF(' + r + ',' + lit + ')';
      }}
      function loadSample() {{ range.value = 'A2:A6'; crit.value = 'West'; run(); }}
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ range.value = ''; crit.value = ''; out.textContent = ''; }});
      document.getElementById('exCopy').addEventListener('click', function () {{ if (out.textContent && navigator.clipboard) navigator.clipboard.writeText(out.textContent); }});
"""


def form_cheat() -> str:
    """Render formula cards plus direct links to the specialized builders."""
    return """
      <label class="form-label" for="exFilter">${escapeHtml(tx(opts.lang, 'filter'))}</label>
      <input id="exFilter" class="form-control mb-2">
      <div id="exCards" class="small"></div>
      <button type="button" class="btn btn-outline-secondary btn-sm mt-2" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
      <pre id="exOut" class="small bg-light p-2 mt-2"></pre>
      <div class="small mt-3 d-flex flex-wrap gap-3">
        <a href="${withLangPrefix(opts.lang, '/tools/write-nested-if-formula-for-excel', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_write_nested_if_formula_for_excel_title' as Parameters<typeof t>[1]))}</a>
        <a href="${withLangPrefix(opts.lang, '/tools/write-ifs-formula-in-excel', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_write_ifs_formula_in_excel_title' as Parameters<typeof t>[1]))}</a>
        <a href="${withLangPrefix(opts.lang, '/tools/wrap-formula-with-ifna', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_wrap_formula_with_ifna_title' as Parameters<typeof t>[1]))}</a>
        <a href="${withLangPrefix(opts.lang, '/tools/write-countif-formula-in-excel', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_write_countif_formula_in_excel_title' as Parameters<typeof t>[1]))}</a>
      </div>
"""


def script_cheat() -> str:
    """Filter and copy the small curated formula reference."""
    return f"""
      var cards = [
        {{ k: 'IF', f: '=IF(A1>0,"yes","no")' }},
        {{ k: 'IFS', f: '=IFS(A1="West","A",TRUE,"Other")' }},
        {{ k: 'IFNA', f: '=IFNA(VLOOKUP(A1,B:C,2,FALSE),0)' }},
        {{ k: 'COUNTIF', f: '=COUNTIF(A:A,"West")' }},
        {{ k: 'SUMIF', f: '=SUMIF(A:A,"West",B:B)' }},
        {{ k: 'VLOOKUP', f: '=VLOOKUP(A1,B:C,2,FALSE)' }},
        {{ k: 'XLOOKUP', f: '=XLOOKUP(A1,B:B,C:C,"")' }},
        {{ k: 'TEXT', f: '=TEXT(A1,"yyyy-mm-dd")' }}
      ];
      var box = document.getElementById('exCards');
      var filter = document.getElementById('exFilter');
      var out = document.getElementById('exOut');
      function render() {{
        var q = (filter.value || '').toLowerCase();
        box.innerHTML = '';
        cards.forEach(function (c) {{
          if (q && c.k.toLowerCase().indexOf(q) < 0 && c.f.toLowerCase().indexOf(q) < 0) return;
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn-outline-success btn-sm me-1 mb-1';
          b.textContent = c.k;
          b.addEventListener('click', function () {{
            out.textContent = c.f;
            if (navigator.clipboard) navigator.clipboard.writeText(c.f);
          }});
          box.appendChild(b);
        }});
      }}
      function loadSample() {{ filter.value = 'IF'; render(); out.textContent = '=IF(A1>0,"yes","no")'; }}
      filter.addEventListener('input', render);
      document.getElementById('exSample').addEventListener('click', loadSample);
"""


def form_invoice() -> str:
    """Invoice form: parties, lines, tax percent (labels from i18n)."""
    return """
      <div class="row g-2 mb-2">
        <div class="col-md-6"><label class="form-label" for="invSeller">${escapeHtml(tx(opts.lang, 'seller'))}</label><input id="invSeller" class="form-control form-control-sm" placeholder="${escapeHtml(tx(opts.lang, 'seller'))}"></div>
        <div class="col-md-6"><label class="form-label" for="invBuyer">${escapeHtml(tx(opts.lang, 'buyer'))}</label><input id="invBuyer" class="form-control form-control-sm" placeholder="${escapeHtml(tx(opts.lang, 'buyer'))}"></div>
      </div>
      <label class="form-label" for="invLines">${escapeHtml(tx(opts.lang, 'lines'))}</label>
      <textarea id="invLines" class="form-control mb-2" rows="4" placeholder="${escapeHtml(tx(opts.lang, 'lines'))}"></textarea>
      <label class="form-label" for="invTax">${escapeHtml(tx(opts.lang, 'tax'))}</label>
      <input id="invTax" class="form-control form-control-sm mb-2" value="10">
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exDl">${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <pre id="exOut" class="small bg-light p-2"></pre>
"""


def script_invoice() -> str:
    """Preview invoice rows and export an xlsx with live line and total formulas."""
    return f"""
      var errEl = document.getElementById('exErr');
      var out = document.getElementById('exOut');
      var last = null;
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function rows() {{
        var lines = (document.getElementById('invLines').value || '').trim().split(String.fromCharCode(10));
        var items = [];
        lines.forEach(function (ln) {{
          var p = ln.split(',');
          if (p.length < 3) return;
          var qty = Number(p[1]); var price = Number(p[2]);
          if (!isFinite(qty) || !isFinite(price)) return;
          items.push({{ d: p[0].trim(), qty: qty, price: price, line: qty * price }});
        }});
        return items;
      }}
      function aoa() {{
        var items = rows();
        var sub = 0;
        items.forEach(function (it) {{ sub += it.line; }});
        var taxp = Number(document.getElementById('invTax').value) || 0;
        var tax = sub * taxp / 100;
        var aoa = [['Seller', document.getElementById('invSeller').value], ['Buyer', document.getElementById('invBuyer').value], [], ['Item','Qty','Price','Line'],];
        items.forEach(function (it) {{ aoa.push([it.d, it.qty, it.price, it.line]); }});
        aoa.push([]); aoa.push(['Subtotal', sub]); aoa.push(['Tax', tax]); aoa.push(['Total', sub + tax]);
        return {{ aoa: aoa, items: items, subtotal: sub, taxPercent: taxp, total: sub + tax }};
      }}
      function run() {{
        var r = aoa();
        if (!r.items.length) {{ showErr({jtx('empty')}); last = null; out.textContent = ''; return; }}
        showErr('');
        last = r;
        out.textContent = r.aoa.map(function (row) {{ return row.join('\\t'); }}).join(String.fromCharCode(10));
      }}
      function loadSample() {{
        document.getElementById('invSeller').value = 'North Shop';
        document.getElementById('invBuyer').value = 'Ada';
        document.getElementById('invLines').value = 'Widget,2,10';
        document.getElementById('invTax').value = '10';
        run();
      }}
      function dl() {{
        if (typeof XLSX === 'undefined') {{ showErr({jtx('need_lib')}); return; }}
        if (!last) run();
        if (!last) return;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.aoa_to_sheet(last.aoa);
        last.items.forEach(function (item, index) {{
          var row = index + 5;
          ws['D' + row] = {{ t: 'n', f: 'B' + row + '*C' + row, v: item.line }};
        }});
        var subtotalRow = last.items.length + 6;
        var taxRow = subtotalRow + 1;
        var totalRow = subtotalRow + 2;
        ws['B' + subtotalRow] = {{ t: 'n', f: 'SUM(D5:D' + (last.items.length + 4) + ')', v: last.subtotal }};
        ws['B' + taxRow] = {{ t: 'n', f: 'B' + subtotalRow + '*' + last.taxPercent + '%', v: last.subtotal * last.taxPercent / 100 }};
        ws['B' + totalRow] = {{ t: 'n', f: 'B' + subtotalRow + '+B' + taxRow, v: last.total }};
        XLSX.utils.book_append_sheet(wb, ws, 'Invoice');
        XLSX.writeFile(wb, 'invoice.xlsx');
      }}
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exDl').addEventListener('click', dl);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{
        document.getElementById('invSeller').value = '';
        document.getElementById('invBuyer').value = '';
        document.getElementById('invLines').value = '';
        document.getElementById('invTax').value = '';
        out.textContent = '';
        last = null;
        showErr('');
      }});
"""


def form_budget() -> str:
    return """
      <textarea id="bdg" class="form-control mb-2" rows="5" placeholder="Rent,1200"></textarea>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exDl">${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <pre id="exOut" class="small bg-light p-2"></pre>
"""


def script_budget() -> str:
    """Preview budget totals and export a reusable xlsx SUM formula."""
    return f"""
      var errEl = document.getElementById('exErr'); var out = document.getElementById('exOut'); var last = null;
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function build() {{
        var aoa = [['Category','Amount']]; var sum = 0;
        (document.getElementById('bdg').value || '').split(String.fromCharCode(10)).forEach(function (ln) {{
          var p = ln.split(','); if (p.length < 2) return;
          var n = Number(p[1]); if (!isFinite(n)) return;
          aoa.push([p[0].trim(), n]); sum += n;
        }});
        aoa.push(['Total', sum]);
        return {{ aoa: aoa, sum: sum }};
      }}
      function run() {{
        var r = build();
        if (r.aoa.length < 3) {{ showErr({jtx('empty')}); return; }}
        showErr(''); last = r.aoa; out.textContent = 'total ' + r.sum;
      }}
      function loadSample() {{ document.getElementById('bdg').value = ['Rent,1200','Food,400'].join(String.fromCharCode(10)); run(); }}
      function dl() {{
        if (typeof XLSX === 'undefined') {{ showErr({jtx('need_lib')}); return; }}
        if (!last) run(); if (!last) return;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.aoa_to_sheet(last);
        var totalRow = last.length;
        ws['B' + totalRow] = {{ t: 'n', f: 'SUM(B2:B' + (totalRow - 1) + ')', v: last[totalRow - 1][1] }};
        XLSX.utils.book_append_sheet(wb, ws, 'Budget');
        XLSX.writeFile(wb, 'budget.xlsx');
      }}
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exDl').addEventListener('click', dl);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ document.getElementById('bdg').value = ''; out.textContent = ''; last = null; }});
"""


def form_timesheet() -> str:
    return """
      <textarea id="ts" class="form-control mb-2" rows="5" placeholder="2026-09-01,Ops,8"></textarea>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exDl">${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <pre id="exOut" class="small bg-light p-2"></pre>
"""


def script_timesheet() -> str:
    """Preview total hours and export a reusable xlsx SUM formula."""
    return f"""
      var errEl = document.getElementById('exErr'); var out = document.getElementById('exOut'); var last = null;
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function build() {{
        var aoa = [['Date','Project','Hours']]; var sum = 0;
        (document.getElementById('ts').value || '').split(String.fromCharCode(10)).forEach(function (ln) {{
          var p = ln.split(','); if (p.length < 3) return;
          var n = Number(p[2]); if (!isFinite(n)) return;
          aoa.push([p[0].trim(), p[1].trim(), n]); sum += n;
        }});
        aoa.push(['Total','', sum]);
        return {{ aoa: aoa, sum: sum }};
      }}
      function run() {{
        var r = build();
        if (r.aoa.length < 3) {{ showErr({jtx('empty')}); return; }}
        showErr(''); last = r.aoa; out.textContent = 'hours ' + r.sum;
      }}
      function loadSample() {{
        document.getElementById('ts').value = ['2026-09-07,Ops,8','2026-09-08,Ops,8','2026-09-09,Ops,8','2026-09-10,Ops,8','2026-09-11,Ops,8'].join(String.fromCharCode(10));
        run();
      }}
      function dl() {{
        if (typeof XLSX === 'undefined') {{ showErr({jtx('need_lib')}); return; }}
        if (!last) run(); if (!last) return;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.aoa_to_sheet(last);
        var totalRow = last.length;
        ws['C' + totalRow] = {{ t: 'n', f: 'SUM(C2:C' + (totalRow - 1) + ')', v: last[totalRow - 1][2] }};
        XLSX.utils.book_append_sheet(wb, ws, 'Timesheet');
        XLSX.writeFile(wb, 'timesheet.xlsx');
      }}
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exDl').addEventListener('click', dl);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ document.getElementById('ts').value = ''; out.textContent = ''; last = null; }});
"""


def form_graph() -> str:
    return """
      <label class="form-label" for="exCsv">${escapeHtml(tx(opts.lang, 'csv'))}</label>
      <textarea id="exCsv" class="form-control mb-2" rows="5"></textarea>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exDraw">${escapeHtml(tx(opts.lang, 'draw'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exBar">${escapeHtml(tx(opts.lang, 'bar'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exLine">${escapeHtml(tx(opts.lang, 'line'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <canvas id="exCv" width="640" height="240" class="w-100 border bg-white"></canvas>
"""


def script_graph() -> str:
    return f"""
      var mode = 'bar';
      var errEl = document.getElementById('exErr');
      var cv = document.getElementById('exCv');
      var ctx = cv.getContext('2d');
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function parse() {{
        var lines = (document.getElementById('exCsv').value || '').trim().split(String.fromCharCode(10));
        var pts = [];
        lines.forEach(function (ln, i) {{
          if (!ln.trim() || (i === 0 && /[a-zA-Z]/.test(ln) && ln.indexOf(',') >= 0 && !/^-?\\d/.test(ln.split(',')[1] || ''))) {{
            if (i === 0) return;
          }}
          var p = ln.split(','); if (p.length < 2) return;
          var n = Number(p[1]); if (!isFinite(n)) return;
          pts.push({{ l: p[0].trim(), v: n }});
        }});
        return pts;
      }}
      function draw() {{
        var pts = parse();
        if (!pts.length) {{ showErr({jtx('empty')}); return; }}
        showErr('');
        var w = cv.width, h = cv.height, pad = 28;
        ctx.clearRect(0,0,w,h);
        var max = 1;
        pts.forEach(function (p) {{ if (p.v > max) max = p.v; }});
        if (mode === 'bar') {{
          var bw = (w - pad * 2) / pts.length * 0.7;
          pts.forEach(function (p, i) {{
            var x = pad + i * (w - pad * 2) / pts.length;
            var bh = (p.v / max) * (h - pad * 2);
            ctx.fillStyle = '#217346';
            ctx.fillRect(x, h - pad - bh, bw, bh);
            ctx.fillStyle = '#333'; ctx.font = '11px sans-serif';
            ctx.fillText(p.l, x, h - 8);
          }});
        }} else {{
          ctx.beginPath(); ctx.strokeStyle = '#217346'; ctx.lineWidth = 2;
          pts.forEach(function (p, i) {{
            var x = pad + i * (w - pad * 2) / Math.max(pts.length - 1, 1);
            var y = h - pad - (p.v / max) * (h - pad * 2);
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }});
          ctx.stroke();
        }}
      }}
      function loadSample() {{ document.getElementById('exCsv').value = ['Month,Sales','Jan,10','Feb,18','Mar,14'].join(String.fromCharCode(10)); mode = 'bar'; draw(); }}
      document.getElementById('exDraw').addEventListener('click', draw);
      document.getElementById('exBar').addEventListener('click', function () {{ mode = 'bar'; draw(); }});
      document.getElementById('exLine').addEventListener('click', function () {{ mode = 'line'; draw(); }});
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ document.getElementById('exCsv').value = ''; ctx.clearRect(0,0,cv.width,cv.height); }});
"""


def form_dashboard() -> str:
    return """
      <textarea id="exCsv" class="form-control mb-2" rows="5"></textarea>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exDraw">${escapeHtml(tx(opts.lang, 'draw'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <p id="exKpi" class="small"></p>
      <canvas id="exA" width="320" height="160" class="border me-2"></canvas>
      <canvas id="exB" width="320" height="160" class="border"></canvas>
"""


def script_dashboard() -> str:
    return f"""
      var errEl = document.getElementById('exErr');
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function bars(cv, vals, labels) {{
        var ctx = cv.getContext('2d'); var w = cv.width, h = cv.height, pad = 20;
        ctx.clearRect(0,0,w,h);
        var max = 1; vals.forEach(function (v) {{ if (v > max) max = v; }});
        var bw = (w - pad * 2) / vals.length * 0.7;
        vals.forEach(function (v, i) {{
          var x = pad + i * (w - pad * 2) / vals.length;
          var bh = (v / max) * (h - pad * 2);
          ctx.fillStyle = '#217346'; ctx.fillRect(x, h - pad - bh, bw, bh);
          ctx.fillStyle = '#333'; ctx.font = '10px sans-serif'; ctx.fillText(labels[i] || '', x, h - 4);
        }});
      }}
      function run() {{
        var lines = (document.getElementById('exCsv').value || '').trim().split(String.fromCharCode(10));
        if (lines.length < 2) {{ showErr({jtx('empty')}); return; }}
        var labels = [], a = [], b = [];
        lines.slice(1).forEach(function (ln) {{
          var p = ln.split(','); if (p.length < 3) return;
          var n1 = Number(p[1]), n2 = Number(p[2]);
          if (!isFinite(n1) || !isFinite(n2)) return;
          labels.push(p[0].trim()); a.push(n1); b.push(n2);
        }});
        if (!a.length) {{ showErr({jtx('empty')}); return; }}
        showErr('');
        var s1 = 0, s2 = 0; a.forEach(function (n) {{ s1 += n; }}); b.forEach(function (n) {{ s2 += n; }});
        document.getElementById('exKpi').textContent = 'n=' + a.length + ' sumA=' + s1 + ' sumB=' + s2;
        bars(document.getElementById('exA'), a, labels);
        bars(document.getElementById('exB'), b, labels);
      }}
      function loadSample() {{
        document.getElementById('exCsv').value = ['Region,Q1,Q2','East,10,12','West,7,9','North,4,8'].join(String.fromCharCode(10));
        run();
      }}
      document.getElementById('exDraw').addEventListener('click', run);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ document.getElementById('exCsv').value = ''; document.getElementById('exKpi').textContent = ''; }});
"""


def form_pivot() -> str:
    return """
      <textarea id="exCsv" class="form-control mb-2" rows="6"></textarea>
      <div class="row g-2 mb-2">
        <div class="col-md-4"><label class="form-label">${escapeHtml(tx(opts.lang, 'row_field'))}</label><select id="exRow" class="form-select form-select-sm"></select></div>
        <div class="col-md-4"><label class="form-label">${escapeHtml(tx(opts.lang, 'val_field'))}</label><select id="exVal" class="form-select form-select-sm"></select></div>
        <div class="col-md-4"><label class="form-label">${escapeHtml(tx(opts.lang, 'sum'))}</label><select id="exAgg" class="form-select form-select-sm"><option value="sum">${escapeHtml(tx(opts.lang, 'sum'))}</option><option value="count">${escapeHtml(tx(opts.lang, 'count'))}</option></select></div>
      </div>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <div id="exOut" class="table-responsive small"></div>
"""


def script_pivot() -> str:
    return f"""
      var errEl = document.getElementById('exErr');
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function parse() {{
        var lines = (document.getElementById('exCsv').value || '').trim().split(String.fromCharCode(10)).filter(Boolean);
        if (lines.length < 2) return null;
        var headers = lines[0].split(',').map(function (s) {{ return s.trim(); }});
        var rows = [];
        lines.slice(1).forEach(function (ln) {{
          var p = ln.split(',');
          var o = {{}};
          headers.forEach(function (h, i) {{ o[h] = (p[i] || '').trim(); }});
          rows.push(o);
        }});
        return {{ headers: headers, rows: rows }};
      }}
      function fillSel() {{
        var d = parse(); if (!d) return;
        ['exRow','exVal'].forEach(function (id) {{
          var sel = document.getElementById(id); sel.innerHTML = '';
          d.headers.forEach(function (h) {{ var o = document.createElement('option'); o.value = h; o.textContent = h; sel.appendChild(o); }});
        }});
        if (d.headers[0]) document.getElementById('exRow').value = d.headers[0];
        if (d.headers[1]) document.getElementById('exVal').value = d.headers[d.headers.length - 1];
      }}
      function run() {{
        var d = parse();
        if (!d) {{ showErr({jtx('empty')}); return; }}
        showErr('');
        var rf = document.getElementById('exRow').value;
        var vf = document.getElementById('exVal').value;
        var agg = document.getElementById('exAgg').value;
        var map = {{}};
        d.rows.forEach(function (r) {{
          var k = r[rf] || '(blank)';
          if (!map[k]) map[k] = {{ sum: 0, n: 0 }};
          var n = Number(r[vf]);
          map[k].n += 1;
          if (isFinite(n)) map[k].sum += n;
        }});
        var html = '<table class="table table-sm"><thead><tr><th>' + rf + '</th><th>' + vf + '</th></tr></thead><tbody>';
        Object.keys(map).sort().forEach(function (k) {{
          var v = agg === 'count' ? map[k].n : map[k].sum;
          html += '<tr><td>' + k + '</td><td>' + v + '</td></tr>';
        }});
        html += '</tbody></table>';
        document.getElementById('exOut').innerHTML = html;
      }}
      function loadSample() {{
        document.getElementById('exCsv').value = ['Region,Amount','East,10','East,5','West,7'].join(String.fromCharCode(10));
        fillSel(); run();
      }}
      document.getElementById('exCsv').addEventListener('change', fillSel);
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ document.getElementById('exCsv').value = ''; document.getElementById('exOut').innerHTML = ''; }});
"""


def form_viewer() -> str:
    return """
      <label class="form-label" for="exFile">${escapeHtml(tx(opts.lang, 'file'))}</label>
      <input id="exFile" type="file" class="form-control mb-2" accept=".xlsx,.xls,.csv,text/csv">
      <label class="form-label" for="exSheet">${escapeHtml(tx(opts.lang, 'sheet'))}</label>
      <select id="exSheet" class="form-select form-select-sm mb-2"></select>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <div id="exOut" class="table-responsive small"></div>
"""


def script_viewer() -> str:
    return f"""
      var errEl = document.getElementById('exErr');
      var sel = document.getElementById('exSheet');
      var out = document.getElementById('exOut');
      var wb = null;
      function showErr(t) {{ errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }}
      function grid(aoa) {{
        function esc(s) {{
          return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }}
        var h = '<table class="table table-sm table-bordered">';
        aoa.forEach(function (row, ri) {{
          h += '<tr>';
          (row || []).forEach(function (c) {{ h += (ri === 0 ? '<th>' : '<td>') + esc(c) + (ri === 0 ? '</th>' : '</td>'); }});
          h += '</tr>';
        }});
        h += '</table>';
        out.innerHTML = h;
      }}
      function showSheet(name) {{
        if (!wb || typeof XLSX === 'undefined') return;
        var ws = wb.Sheets[name];
        grid(XLSX.utils.sheet_to_json(ws, {{ header: 1, defval: '' }}));
      }}
      function loadWb(buf, isCsv, name) {{
        if (typeof XLSX === 'undefined') {{ showErr({jtx('need_lib')}); return; }}
        try {{
          wb = isCsv ? XLSX.read(buf, {{ type: 'string' }}) : XLSX.read(buf, {{ type: 'array' }});
          sel.innerHTML = '';
          wb.SheetNames.forEach(function (n) {{ var o = document.createElement('option'); o.value = n; o.textContent = n; sel.appendChild(o); }});
          showSheet(wb.SheetNames[0]);
          showErr('');
        }} catch (e) {{ showErr({jtx('err_read')}); }}
      }}
      function loadSample() {{
        var csv = ['Name,Qty','Widget,1','Gadget,2'].join(String.fromCharCode(10));
        loadWb(csv, true, 'sample.csv');
      }}
      document.getElementById('exFile').addEventListener('change', function () {{
        var f = this.files && this.files[0]; if (!f) return;
        var isCsv = /csv$/i.test(f.name);
        var reader = new FileReader();
        reader.onload = function () {{
          if (isCsv) loadWb(String(reader.result), true, f.name);
          else loadWb(new Uint8Array(reader.result), false, f.name);
        }};
        if (isCsv) reader.readAsText(f); else reader.readAsArrayBuffer(f);
      }});
      sel.addEventListener('change', function () {{ showSheet(sel.value); }});
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {{ out.innerHTML = ''; sel.innerHTML = ''; wb = null; document.getElementById('exFile').value = ''; }});
"""


if __name__ == "__main__":
    main()
