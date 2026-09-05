# -*- coding: utf-8 -*-
"""Locale titles + meta descriptions for Excel scene tools (SEO-critical unique copy).

Each description must stay ≥120 characters after pad_description() and include a
local process/example keyword from lint:seo.
"""

from __future__ import annotations

# Scene H1 / title per locale (strip when emitting; ar IFNA had a leading space).
T = {
    "write-nested-if-formula-for-excel": {
        "en": "Write a nested IF formula for Excel",
        "zh": "写出 Excel 嵌套 IF 公式",
        "es": "Escribe una fórmula SI anidada para Excel",
        "ar": "اكتب صيغة IF متداخلة لإكسل",
        "pt": "Escreva uma fórmula SE aninhada no Excel",
        "id": "Tulis rumus IF bersarang untuk Excel",
        "fr": "Écrire une formule SI imbriquée pour Excel",
        "ja": "Excel用のネストしたIF数式を書く",
        "ru": "Написать вложенную формулу ЕСЛИ для Excel",
        "de": "Eine geschachtelte WENN-Formel für Excel schreiben",
    },
    "write-ifs-formula-in-excel": {
        "en": "Write an IFS formula in Excel",
        "zh": "写出 Excel 的 IFS 公式",
        "es": "Escribe una fórmula SISI en Excel",
        "ar": "اكتب صيغة IFS في إكسل",
        "pt": "Escreva uma fórmula SES em Excel",
        "id": "Tulis rumus IFS di Excel",
        "fr": "Écrire une formule SIES dans Excel",
        "ja": "ExcelでIFS数式を書く",
        "ru": "Написать формулу ЕСЛИМН в Excel",
        "de": "Eine WENNS-Formel in Excel schreiben",
    },
    "wrap-formula-with-ifna": {
        "en": "Wrap a formula with IFNA",
        "zh": "用 IFNA 包住公式",
        "es": "Envuelve una fórmula con SINA",
        "ar": "غلّف صيغة بـ IFNA",
        "pt": "Envolva uma fórmula com SENA",
        "id": "Bungkus rumus dengan IFNA",
        "fr": "Entourer une formule avec SINA",
        "ja": "数式をIFNAで包む",
        "ru": "Обернуть формулу в ЕСНД",
        "de": "Eine Formel mit WENNNV umhüllen",
    },
    "write-countif-formula-in-excel": {
        "en": "Write a COUNTIF formula in Excel",
        "zh": "写出 Excel 的 COUNTIF 公式",
        "es": "Escribe una fórmula CONTAR.SI en Excel",
        "ar": "اكتب صيغة COUNTIF في إكسل",
        "pt": "Escreva uma fórmula CONT.SE no Excel",
        "id": "Tulis rumus COUNTIF di Excel",
        "fr": "Écrire une formule NB.SI dans Excel",
        "ja": "ExcelでCOUNTIF数式を書く",
        "ru": "Написать формулу СЧЁТЕСЛИ в Excel",
        "de": "Eine ZÄHLENWENN-Formel in Excel schreiben",
    },
    "excel-formulas-cheat-sheet": {
        "en": "Copy common Excel formulas",
        "zh": "复制常用 Excel 公式",
        "es": "Copia fórmulas habituales de Excel",
        "ar": "انسخ صيغ إكسل الشائعة",
        "pt": "Copie fórmulas comuns do Excel",
        "id": "Salin rumus Excel yang sering dipakai",
        "fr": "Copier des formules Excel courantes",
        "ja": "よく使うExcel数式をコピーする",
        "ru": "Скопировать частые формулы Excel",
        "de": "Gängige Excel-Formeln kopieren",
    },
    "create-invoice-spreadsheet": {
        "en": "Create an invoice spreadsheet",
        "zh": "做出一份发票电子表",
        "es": "Crea una hoja de factura",
        "ar": "أنشئ جدول فاتورة",
        "pt": "Crie uma planilha de fatura",
        "id": "Buat spreadsheet faktur",
        "fr": "Créer un tableur de facture",
        "ja": "請求書スプレッドシートを作る",
        "ru": "Собрать таблицу счёта",
        "de": "Eine Rechnungs-Tabelle erstellen",
    },
    "create-budget-spreadsheet": {
        "en": "Create a budget spreadsheet",
        "zh": "做出一份预算表",
        "es": "Crea una hoja de presupuesto",
        "ar": "أنشئ جدول ميزانية",
        "pt": "Crie uma planilha de orçamento",
        "id": "Buat spreadsheet anggaran",
        "fr": "Créer un tableur de budget",
        "ja": "予算スプレッドシートを作る",
        "ru": "Собрать таблицу бюджета",
        "de": "Eine Budget-Tabelle erstellen",
    },
    "create-excel-timesheet": {
        "en": "Create an Excel timesheet",
        "zh": "做出一份 Excel 工时表",
        "es": "Crea un parte de horas en Excel",
        "ar": "أنشئ كشف ساعات في إكسل",
        "pt": "Crie uma folha de horas no Excel",
        "id": "Buat timesheet Excel",
        "fr": "Créer une feuille de temps Excel",
        "ja": "Excelの勤務表を作る",
        "ru": "Собрать табель в Excel",
        "de": "Ein Excel-Stundenzettel erstellen",
    },
    "create-graph-from-spreadsheet-data": {
        "en": "Create a graph from spreadsheet data",
        "zh": "用表格数据画出图",
        "es": "Crea un gráfico con datos de hoja",
        "ar": "ارسم مخططاً من بيانات الجدول",
        "pt": "Crie um gráfico a partir da planilha",
        "id": "Buat grafik dari data spreadsheet",
        "fr": "Créer un graphique à partir d’un tableur",
        "ja": "表データからグラフを作る",
        "ru": "Построить график по таблице",
        "de": "Ein Diagramm aus Tabellendaten erstellen",
    },
    "create-excel-dashboard": {
        "en": "Create an Excel dashboard",
        "zh": "做出一份 Excel 看板",
        "es": "Crea un panel tipo Excel",
        "ar": "أنشئ لوحة مؤشرات من الجدول",
        "pt": "Crie um painel tipo Excel",
        "id": "Buat dasbor dari spreadsheet",
        "fr": "Créer un tableau de bord Excel",
        "ja": "表からExcel風ダッシュボードを作る",
        "ru": "Собрать дашборд из таблицы",
        "de": "Ein Excel-Dashboard erstellen",
    },
    "build-pivot-table-from-spreadsheet": {
        "en": "Build a pivot table from a spreadsheet",
        "zh": "用表格做出透视表",
        "es": "Arma una tabla dinámica desde una hoja",
        "ar": "ابنِ جدولاً محورياً من جدول",
        "pt": "Monte uma tabela dinâmica a partir da planilha",
        "id": "Bangun pivot dari spreadsheet",
        "fr": "Construire un tableau croisé depuis un tableur",
        "ja": "表からピボットテーブルを作る",
        "ru": "Собрать сводную таблицу из листа",
        "de": "Eine Pivot-Tabelle aus Tabellendaten bauen",
    },
    "open-excel-file-in-browser": {
        "en": "Open an Excel file in the browser",
        "zh": "在浏览器打开 Excel 文件",
        "es": "Abre un archivo Excel en el navegador",
        "ar": "افتح ملف إكسل في المتصفح",
        "pt": "Abra um arquivo Excel no navegador",
        "id": "Buka file Excel di browser",
        "fr": "Ouvrir un fichier Excel dans le navigateur",
        "ja": "ブラウザでExcelファイルを開く",
        "ru": "Открыть файл Excel в браузере",
        "de": "Eine Excel-Datei im Browser öffnen",
    },
}

# lint:seo keyword lists (must appear in description, case-insensitive).
SEO_KW = {
    "en": ["calculate", "calculate the", "formula", "steps", "process", "example"],
    "zh": ["计算", "过程", "步骤", "示例", "例子", "公式"],
    "es": ["calcula", "calcular", "proceso", "pasos", "ejemplo", "fórmula"],
    "fr": ["calcul", "calculer", "processus", "exemple", "formule", "étapes"],
    "de": ["berechnen", "berechnung", "prozess", "beispiel", "formel", "schritte"],
    "ru": ["расч", "процесс", "пример", "формула", "шаг"],
    "pt": ["calcular", "processo", "exemplo", "fórmula", "passos"],
    "ja": ["計算", "プロセス", "手順", "例", "方式", "公式"],
    "id": ["hitung", "proses", "contoh", "rumus", "langkah"],
    "ar": ["حساب", "عملية", "مثال", "خطوات", "صيغة"],
}

# Unique tails (not a copy of the first sentence) so pad_description can hit ≥130 + keywords.
SEO_TAIL = {
    "en": " The process and example match the on-page sample; the formula is calculated in this tab. Files stay on your device and are not uploaded to a server.",
    "zh": "计算在浏览器内完成；过程见步骤，示例与进页样例一致。输入留在本机，不上传服务器。",
    "es": " El proceso y el ejemplo coinciden con la muestra. Se calcula en esta pestaña. No se sube al servidor.",
    "ar": " الحساب في المتصفح. العملية والخطوات تطابق المثال الظاهر. دون رفع إلى خادم.",
    "pt": " O processo e o exemplo batem com a amostra. Dá para calcular nesta aba, sem enviar ao servidor.",
    "id": " Proses dan contoh sama dengan sampel. Rumus dihitung di tab ini, tanpa unggah ke server.",
    "fr": " Le processus et l’exemple suivent l’échantillon. Le calcul reste dans l’onglet, sans envoi au serveur.",
    "ja": "計算はブラウザ内。手順と例はサンプルと同じ方式です。ファイルは端末内で、サーバーにアップロードしません。",
    "ru": " Расчёт в этой вкладке. Процесс и пример совпадают с образцом, без загрузки на сервер.",
    "de": " Berechnung im Tab. Prozess und Beispiel folgen der Probe. Formel bleibt lokal, ohne Server-Upload.",
}

# Scene-specific first sentences (may be short; pad_description lengthens them).
D = {
    "write-nested-if-formula-for-excel": {
        "en": "Write a nested IF formula for Excel: add ordered equals, contains, or blank tests, set each result and the final else, then copy the complete formula. Example: West → A, East → B, otherwise Other.",
        "zh": "在浏览器里写出 Excel 嵌套 IF 公式。步骤：加等于/包含/空白条件行，填否则值，再复制 IF 套 IF。示例：A1=West 得 A，East 得 B，其余 Other。",
        "es": "Escribe una fórmula SI anidada para Excel. Proceso: filas igual/contiene/vacío, valor si no, y copias SI(SI()). Ejemplo: A1=West → A.",
        "ar": "اكتب صيغة IF متداخلة لإكسل في المتصفح. العملية: صفوف يساوي/يحتوي/فارغ ثم انسخ الصيغة. مثال: A1=West يعطي A.",
        "pt": "Escreva uma fórmula SE aninhada no Excel. Processo: linhas igual/contém/vazio e copie SE(SE()). Exemplo: A1=West → A.",
        "id": "Tulis rumus IF bersarang untuk Excel. Proses: baris sama/berisi/kosong lalu salin IF(IF()). Contoh: A1=West → A.",
        "fr": "Écrire une formule SI imbriquée. Processus : lignes égal/contient/vide, puis copier SI(SI()). Exemple : A1=West → A.",
        "ja": "ブラウザでネストしたIF数式を書く。手順：等しい/含む/空白の行を足し、それ以外を入れてコピー。例：A1=WestならA。",
        "ru": "Написать вложенную ЕСЛИ. Процесс: строки равно/содержит/пусто, затем скопировать. Пример: A1=West → A.",
        "de": "Eine geschachtelte WENN-Formel schreiben. Prozess: Zeilen gleich/enthält/leer, sonst-Wert, kopieren. Beispiel: A1=West → A.",
    },
    "write-ifs-formula-in-excel": {
        "en": "Write an IFS formula in Excel: list tests in order, add a TRUE catch-all result, and copy the formula. Example: West → A, East → B, otherwise Other. Requires Excel 2019, Microsoft 365, or later.",
        "zh": "写出 Excel IFS 公式：按顺序填写条件与结果，用 TRUE 接住其余情况，再复制完整公式。示例：West 得 A、East 得 B、其余为 Other。需要 Excel 2019、Microsoft 365 或更新版本。",
        "es": "Escribe SISI/IFS con pruebas ordenadas y un resultado final VERDADERO. Ejemplo: West → A, East → B y el resto → Other. Requiere Excel 2019, Microsoft 365 o posterior.",
        "ar": "اكتب صيغة IFS باختبارات مرتبة ونتيجة أخيرة مع TRUE. مثال: West يعطي A وEast يعطي B والباقي Other. تحتاج Excel 2019 أو Microsoft 365 أو إصداراً أحدث.",
        "pt": "Escreva SES/IFS com testes em ordem e um resultado final VERDADEIRO. Exemplo: West → A, East → B e o restante → Other. Requer Excel 2019, Microsoft 365 ou posterior.",
        "id": "Tulis rumus IFS dengan pengujian berurutan dan hasil akhir TRUE. Contoh: West → A, East → B, selain itu Other. Memerlukan Excel 2019, Microsoft 365, atau versi lebih baru.",
        "fr": "Écrivez SIES/IFS avec des tests ordonnés et une dernière branche VRAI. Exemple : West → A, East → B, sinon Other. Nécessite Excel 2019, Microsoft 365 ou une version ultérieure.",
        "ja": "条件を順番に並べ、最後をTRUEの結果にしたIFS数式を作ります。例：WestはA、EastはB、それ以外はOther。Excel 2019、Microsoft 365以降が必要です。",
        "ru": "Создайте ЕСЛИМН/IFS с проверками по порядку и запасным результатом ИСТИНА. Пример: West → A, East → B, иначе Other. Нужен Excel 2019, Microsoft 365 или новее.",
        "de": "Erstellen Sie eine WENNS/IFS-Formel mit geordneten Tests und einem abschließenden WAHR-Ergebnis. Beispiel: West → A, East → B, sonst Other. Benötigt Excel 2019, Microsoft 365 oder neuer.",
    },
    "wrap-formula-with-ifna": {
        "en": "Wrap a formula with IFNA so #N/A becomes your alternate. Process: paste the inner formula, set the fallback, copy IFNA(). Example: NA() with 0 → 0. This is not IFERROR (other errors still show).",
        "zh": "用 IFNA 包住公式，把 #N/A 换成你的备选值。步骤：贴内部公式、填备选、复制 IFNA()。示例：NA() 配 0 得到 0。不是 IFERROR。",
        "es": "Envuelve con SINA/IFNA. Proceso: pega la fórmula interior y el valor alterno. Ejemplo: NA() y 0. No es SI.ERROR.",
        "ar": "غلّف الصيغة بـ IFNA. العملية: الصق الصيغة الداخلية والقيمة البديلة. مثال NA() مع 0. ليست IFERROR.",
        "pt": "Envolva com SENA/IFNA. Processo: cole a fórmula interna e o valor. Exemplo NA() e 0.",
        "id": "Bungkus rumus dengan IFNA. Proses: tempel rumus dalam dan cadangan. Contoh NA() dan 0.",
        "fr": "Entourer avec SINA/IFNA. Processus : coller la formule interne et la valeur. Exemple NA() et 0.",
        "ja": "IFNAで数式を包み、#N/Aを別値にする。手順：内側の式と代替値を入れてコピー。例：NA()と0。IFERRORではない。",
        "ru": "Обернуть в ЕСНД/IFNA. Процесс: внутренняя формула и запас. Пример NA() и 0.",
        "de": "Mit WENNNV/IFNA umhüllen. Prozess: Innenformel und Ersatz. Beispiel NA() und 0.",
    },
    "write-countif-formula-in-excel": {
        "en": "Write a COUNTIF formula in Excel. Process: type an A1-style range and criteria, including * ? wildcards for a LIKE search. Example: A2:A6 and West. COUNTIFS (many tests) is not this page.",
        "zh": "写出 Excel 的 COUNTIF 公式。步骤：填 A1 区域和条件，可用 * ? 做模糊匹配。示例：A2:A6 与 West。多条件 COUNTIFS 不在本页。",
        "es": "Escribe CONTAR.SI/COUNTIF. Proceso: rango A1 y criterio, con * ?. Ejemplo A2:A6 y West.",
        "ar": "اكتب صيغة COUNTIF. العملية: نطاق A1 والمعيار مع * ?. مثال A2:A6 وWest.",
        "pt": "Escreva CONT.SE/COUNTIF. Processo: intervalo A1 e critério com * ?. Exemplo A2:A6 e West.",
        "id": "Tulis rumus COUNTIF. Proses: rentang A1 dan kriteria * ?. Contoh A2:A6 dan West.",
        "fr": "Écrire NB.SI/COUNTIF. Processus : plage A1 et critère * ?. Exemple A2:A6 et West.",
        "ja": "COUNTIF数式を書く。手順：A1範囲と条件。* ?であいまい一致。例：A2:A6とWest。COUNTIFSは別。",
        "ru": "Написать формулу СЧЁТЕСЛИ/COUNTIF. Процесс: диапазон A1 и критерий * ?. Пример A2:A6 и West.",
        "de": "ZÄHLENWENN/COUNTIF schreiben. Prozess: A1-Bereich und Kriterium mit * ?. Beispiel A2:A6 und West.",
    },
    "excel-formulas-cheat-sheet": {
        "en": "Copy common Excel formulas from a filterable cheat sheet. Process: type a function name, open the card, copy the snippet. Example: IF card copies =IF(A1>0,\"yes\",\"no\"). This is lookup, not a nested-IF builder.",
        "zh": "从可筛选速查里复制常用 Excel 公式。步骤：搜函数名、打开卡片、复制。示例：IF 卡片复制 =IF(A1>0,\"yes\",\"no\")。这是速查不是条件生成器。",
        "es": "Copia fórmulas de una chuleta. Proceso: filtra, abre la tarjeta, copia. Ejemplo: IF. No es el constructor SI anidado.",
        "ar": "انسخ الصيغ من ورقة غش. العملية: صفّ ثم انسخ. مثال بطاقة IF. ليست منشئ IF المتداخل.",
        "pt": "Copie fórmulas de um guia. Processo: filtre e copie. Exemplo cartão IF. Não é o gerador de SE aninhado.",
        "id": "Salin rumus dari lembar ringkas. Proses: saring lalu salin. Contoh kartu IF. Bukan pembangun IF bersarang.",
        "fr": "Copier des formules d’une fiche. Processus : filtrer puis copier. Exemple carte SI. Pas le générateur SI imbriqué.",
        "ja": "一覧からよく使うExcel数式をコピー。手順：名前で絞り、カードからコピー。例：IF。ネストIF作成器ではない。",
        "ru": "Скопировать формулы из шпаргалки. Процесс: фильтр и копия. Пример карточка IF. Это не конструктор вложенного ЕСЛИ.",
        "de": "Gängige Formeln aus einem Spickzettel kopieren. Prozess: filtern, Karte, kopieren. Beispiel IF. Kein geschachtelter-WENN-Generator.",
    },
    "create-invoice-spreadsheet": {
        "en": "Create an invoice spreadsheet with live Excel formulas. Enter seller, buyer, description, quantity, price, and tax, preview every row, then download xlsx. Example: 2 units × 10 plus 10% tax → 22.",
        "zh": "创建带 Excel 动态公式的发票表：填写买卖方、说明、数量、单价和税率，核对明细后下载 xlsx。示例：2 件 × 10，加 10% 税，合计 22。不是法定电子发票。",
        "es": "Crea una hoja de factura y descarga xlsx. Proceso: vendedor, líneas, impuesto. Ejemplo: 2×10 con 10% → 22. No es factura fiscal.",
        "ar": "أنشئ جدول فاتورة وحمل xlsx. العملية: بائع وبنود وضريبة. مثال سطرين×10 وضريبة 10٪ → 22.",
        "pt": "Crie uma planilha de fatura e baixe xlsx. Processo: vendedor, linhas, imposto. Exemplo 2×10 com 10% → 22.",
        "id": "Buat spreadsheet faktur dan unduh xlsx. Proses: penjual, baris, pajak. Contoh 2×10 pajak 10% → 22.",
        "fr": "Créer un tableur de facture et télécharger xlsx. Processus : vendeur, lignes, taxe. Exemple 2×10 à 10% → 22.",
        "ja": "請求書表を作ってxlsxをダウンロード。手順：売主・行・税率。例：2行×10、税10%で22。電子インボイスではない。",
        "ru": "Собрать счёт и скачать xlsx. Процесс: продавец, строки, налог. Пример 2×10 и 10% → 22.",
        "de": "Eine Rechnungstabelle erstellen und xlsx laden. Prozess: Verkäufer, Zeilen, Steuer. Beispiel 2×10 mit 10% → 22.",
    },
    "create-budget-spreadsheet": {
        "en": "Create a budget spreadsheet and download xlsx. Process: add category rows and amounts, read the total, download. Example: Rent 1200 + Food 400 → 1600. Not a general ledger.",
        "zh": "做出一份预算表并下载 xlsx。步骤：加类别和金额、看合计、下载。示例：房租 1200 + 餐饮 400 = 1600。不是总账软件。",
        "es": "Crea un presupuesto y descarga xlsx. Proceso: categorías y importes. Ejemplo: alquiler 1200 + comida 400.",
        "ar": "أنشئ ميزانية وحمل xlsx. العملية: فئات ومبالغ. مثال إيجار 1200 وطعام 400.",
        "pt": "Crie um orçamento e baixe xlsx. Processo: categorias e valores. Exemplo aluguel 1200 + comida 400.",
        "id": "Buat anggaran dan unduh xlsx. Proses: kategori dan jumlah. Contoh sewa 1200 + makanan 400.",
        "fr": "Créer un budget et télécharger xlsx. Processus : catégories et montants. Exemple loyer 1200 + nourriture 400.",
        "ja": "予算表を作ってxlsxを保存。手順：費目と金額。例：家賃1200+食費400。会計ソフトではない。",
        "ru": "Собрать бюджет и скачать xlsx. Процесс: статьи и суммы. Пример аренда 1200 + еда 400.",
        "de": "Ein Budget erstellen und xlsx laden. Prozess: Kategorien und Beträge. Beispiel Miete 1200 + Essen 400.",
    },
    "create-excel-timesheet": {
        "en": "Create an Excel timesheet with a live SUM formula. Enter date, project, and decimal hours, verify the total, then download xlsx. Example: 2026-09-07 to 2026-09-11 at 8 hours per weekday → 40.",
        "zh": "创建带动态 SUM 公式的 Excel 工时表：填写日期、项目和小数工时，核对合计后下载 xlsx。示例：2026-09-07 至 2026-09-11 每个工作日 8 小时，共 40 小时。",
        "es": "Crea un parte de horas y descarga xlsx. Proceso: fecha, proyecto, horas. Ejemplo: 5×8 → 40.",
        "ar": "أنشئ كشف ساعات وحمل xlsx. العملية: تاريخ ومشروع وساعات. مثال خمسة أيام×8 → 40.",
        "pt": "Crie uma folha de horas e baixe xlsx. Processo: data, projeto, horas. Exemplo 5×8 → 40.",
        "id": "Buat timesheet dan unduh xlsx. Proses: tanggal, proyek, jam. Contoh 5×8 → 40.",
        "fr": "Créer une feuille de temps et télécharger xlsx. Processus : date, projet, heures. Exemple 5×8 → 40.",
        "ja": "勤務表を作ってxlsxを保存。手順：日付・案件・時間。例：平日5日×8で40。給与計算ではない。",
        "ru": "Собрать табель и скачать xlsx. Процесс: дата, проект, часы. Пример 5×8 → 40.",
        "de": "Einen Stundenzettel erstellen und xlsx laden. Prozess: Datum, Projekt, Stunden. Beispiel 5×8 → 40.",
    },
    "create-graph-from-spreadsheet-data": {
        "en": "Create a graph from spreadsheet data in the browser. Process: paste CSV, pick label and value columns, draw bars or a line. Example: Jan 10, Feb 18. Not an Excel chart object.",
        "zh": "用表格数据在浏览器里画出图。步骤：粘贴 CSV、选标签列和数值列、画柱或折线。示例：1 月 10、2 月 18。不是 Excel 图表对象。",
        "es": "Crea un gráfico con datos pegados. Proceso: CSV, columnas, barras o línea. Ejemplo ene 10, feb 18.",
        "ar": "ارسم مخططاً من CSV. العملية: الصق واختر الأعمدة. مثال يناير 10 فبراير 18.",
        "pt": "Crie um gráfico com CSV. Processo: cole e escolha colunas. Exemplo jan 10, fev 18.",
        "id": "Buat grafik dari CSV. Proses: tempel dan pilih kolom. Contoh Jan 10, Feb 18.",
        "fr": "Créer un graphique depuis un CSV. Processus : coller, colonnes, barres. Exemple janv. 10, févr. 18.",
        "ja": "表データからグラフを描く。手順：CSVを貼り、ラベルと値の列を選ぶ。例：1月10、2月18。Excelグラフオブジェクトではない。",
        "ru": "Построить график по CSV. Процесс: вставить и выбрать столбцы. Пример янв 10, фев 18.",
        "de": "Ein Diagramm aus CSV zeichnen. Prozess: einfügen, Spalten, Balken. Beispiel Jan 10, Feb 18.",
    },
    "create-excel-dashboard": {
        "en": "Create an Excel-style dashboard from a paste: KPI cards plus two small charts. Process: CSV with two numeric columns, read sums and row count. Example: Region,Q1,Q2 three rows. Not Power BI and not a full workbook dashboard.",
        "zh": "用粘贴的表做出 Excel 风看板：指标卡加两张小图。步骤：至少两列数字、看合计和行数。示例：地区、Q1、Q2 三行。不是 Power BI。",
        "es": "Crea un panel: tarjetas y dos gráficos. Proceso: CSV con dos columnas numéricas. Ejemplo Región,Q1,Q2.",
        "ar": "أنشئ لوحة: بطاقات ومخططان. العملية: CSV بعمودين رقميين. مثال منطقة وQ1 وQ2.",
        "pt": "Crie um painel: cartões e dois gráficos. Processo: CSV com duas colunas numéricas. Exemplo Região,Q1,Q2.",
        "id": "Buat dasbor: kartu dan dua grafik. Proses: CSV dua kolom angka. Contoh Wilayah,Q1,Q2.",
        "fr": "Créer un tableau de bord : cartes et deux graphes. Processus : CSV à deux colonnes numériques. Exemple Région,Q1,Q2.",
        "ja": "貼り付け表からダッシュボード：KPIと小さなグラフ2つ。手順：数値列が2つ。例：地域,Q1,Q2。Power BIではない。",
        "ru": "Собрать дашборд: карточки и два графика. Процесс: CSV с двумя числовыми столбцами. Пример Регион,Q1,Q2.",
        "de": "Ein Dashboard: Kacheln und zwei Diagramme. Prozess: CSV mit zwei Zahlenspalten. Beispiel Region,Q1,Q2.",
    },
    "build-pivot-table-from-spreadsheet": {
        "en": "Build a pivot table from a spreadsheet paste. Process: pick a row field and a value field, choose sum or count. Example: East 10 + East 5 → East 15. This is not Excel’s PivotTable cache UI.",
        "zh": "用粘贴的表做出透视汇总。步骤：选行字段和值字段，选求和或计数。示例：East 10 + East 5 → East 15。不是 Excel 透视表缓存界面。",
        "es": "Arma una tabla dinámica. Proceso: campo de fila y valor, suma o recuento. Ejemplo East 10+5.",
        "ar": "ابنِ جدولاً محورياً. العملية: حقل صف وقيمة ثم جمع أو عد. مثال East 10+5.",
        "pt": "Monte uma tabela dinâmica. Processo: campo de linha e valor, soma ou contagem. Exemplo East 10+5.",
        "id": "Bangun pivot. Proses: bidang baris dan nilai, jumlah atau hitung. Contoh East 10+5.",
        "fr": "Construire un tableau croisé. Processus : champ ligne et valeur, somme ou compte. Exemple East 10+5.",
        "ja": "貼り付け表からピボットを作る。手順：行と値、合計か件数。例：East 10+5。ExcelのピボットキャッシュUIではない。",
        "ru": "Собрать сводную. Процесс: поле строки и значение, сумма или счёт. Пример East 10+5.",
        "de": "Eine Pivot-Tabelle bauen. Prozess: Zeilenfeld und Wert, Summe oder Anzahl. Beispiel East 10+5.",
    },
    "open-excel-file-in-browser": {
        "en": "Open an Excel file in the browser as a read-only grid. Process: choose xlsx, xls, or csv, pick a sheet, scroll the table. Example: a 3×3 Name/Qty sample. This is not Excel Online editing.",
        "zh": "在浏览器只读打开 Excel 文件。步骤：选 xlsx/xls/csv、选工作表、滚动查看。示例：3×3 的名称/数量样例。不是在线编辑套件。",
        "es": "Abre Excel solo lectura. Proceso: xlsx/xls/csv, hoja, tabla. Ejemplo 3×3. No es Excel Online.",
        "ar": "افتح إكسل للعرض فقط. العملية: xlsx أو csv ثم الورقة. مثال 3×3. ليس Excel Online.",
        "pt": "Abra Excel só leitura. Processo: xlsx/csv, aba, tabela. Exemplo 3×3.",
        "id": "Buka Excel hanya baca. Proses: xlsx/csv, sheet, tabel. Contoh 3×3.",
        "fr": "Ouvrir Excel en lecture seule. Processus : xlsx/csv, feuille, tableau. Exemple 3×3.",
        "ja": "ブラウザでExcelを読み取り専用で開く。手順：xlsx/csvを選び、シートを表示。例：3×3。オンライン編集ではない。",
        "ru": "Открыть Excel только для чтения. Процесс: xlsx/csv, лист, таблица. Пример 3×3.",
        "de": "Excel nur lesen im Browser. Prozess: xlsx/csv, Blatt, Tabelle. Beispiel 3×3.",
    },
}


# Second clause if one tail is still under 120 (must stay unique vs SEO_TAIL).
SEO_TAIL2 = {
    "en": " Load the sample any time; it matches the example on the page.",
    "zh": "可随时加载示例，与页上例子一致。",
    "es": " Carga el ejemplo cuando quieras; coincide con el de la página.",
    "ar": " حمّل المثال متى شئت وهو يطابق الصفحة.",
    "pt": " Carregue o exemplo quando quiser; coincide com o da página.",
    "id": " Muat contoh kapan saja; sama dengan contoh di halaman.",
    "fr": " Chargez l’exemple à tout moment ; il suit celui de la page.",
    "ja": "いつでもサンプルを読めます。ページの例と同じです。",
    "ru": " Пример можно загрузить в любой момент — как на странице.",
    "de": " Beispiel jederzeit laden; es entspricht der Seite.",
}


def pad_description(lang: str, text: str) -> str:
    """Ensure meta description ≥120 chars and contains a lint:seo process/example keyword.

    @param lang Locale code
    @param text First-pass description
    """
    t = (text or "").strip()
    kws = SEO_KW.get(lang) or SEO_KW["en"]
    tail = SEO_TAIL.get(lang) or SEO_TAIL["en"]
    tail2 = SEO_TAIL2.get(lang) or SEO_TAIL2["en"]
    has_kw = any(k.lower() in t.lower() for k in kws)
    if len(t) >= 130 and has_kw:
        return t
    if tail.strip() not in t:
        t = (t + tail).strip()
    if len(t) < 130 and tail2.strip() not in t:
        t = (t + tail2).strip()
    return t
