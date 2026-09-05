# -*- coding: utf-8 -*-
"""Native How/FAQ/rules/use-case overlays for Excel scene tools.

English packs live in the generator; this module rewrites other locales with
local search phrasing (not a locked English Q1 order).
"""

from __future__ import annotations

# Privacy answers used in FAQ (device + not uploaded).
PRIV = {
    "zh": "不会。输入留在本机，不上传服务器。",
    "es": "No. Se queda en el dispositivo y no se sube al servidor.",
    "ar": "لا. تبقى على الجهاز دون رفع إلى خادم.",
    "pt": "Não. Fica no dispositivo, sem enviar ao servidor.",
    "id": "Tidak. Tetap di perangkat, tanpa unggah ke server.",
    "fr": "Non. Ça reste sur l’appareil, sans envoi au serveur.",
    "ja": "しません。端末内で、サーバーにアップロードしません。",
    "ru": "Нет. Остаётся на устройстве, без загрузки на сервер.",
    "de": "Nein. Bleibt auf dem Gerät, ohne Server-Upload.",
}

# YMYL disclaimers (invoice / budget).
DISCLAIM = {
    "invoice": {
        "zh": "仅电子表草稿，不构成税务、法律或会计建议。",
        "es": "Solo un borrador de hoja; no es asesoría fiscal, legal ni contable.",
        "ar": "مسودة جدول فقط، ليست مشورة ضريبية أو قانونية.",
        "pt": "Apenas rascunho de planilha, não é conselho fiscal, jurídico ou contábil.",
        "id": "Hanya sketsa spreadsheet, bukan nasihat pajak, hukum, atau akuntansi.",
        "fr": "Simple brouillon de tableur, pas un conseil fiscal, juridique ou comptable.",
        "ja": "表の下書きであり、税務・法律・会計の助言ではありません。",
        "ru": "Черновик таблицы, не налоговая, юридическая или бухгалтерская консультация.",
        "de": "Nur Tabellenentwurf, keine Steuer-, Rechts- oder Buchhaltungsberatung.",
    },
    "budget": {
        "zh": "仅规划数字，不构成投资、理财或税务建议。",
        "es": "Solo cifras de planificación; no es consejo financiero, fiscal ni de inversión.",
        "ar": "أرقام تخطيط فقط، ليست مشورة مالية أو ضريبية أو استثمارية.",
        "pt": "Só números de planeamento, não é conselho financeiro, fiscal ou de investimento.",
        "id": "Angka perencanaan saja — bukan nasihat keuangan, pajak, atau investasi.",
        "fr": "Chiffres de planification seulement — pas un conseil financier, fiscal ou d’investissement.",
        "ja": "計画用の数字であり、投資・税務の助言ではありません。",
        "ru": "Только плановые цифры — не финансовый, налоговый или инвестиционный совет.",
        "de": "Nur Planungszahlen — keine Finanz-, Steuer- oder Anlageberatung.",
    },
}

# slug -> lang -> overlay dict keys matching extra_copy output.
# Coverage langs zh/es/ja are fully rewritten; other langs use local syntax too.
_OV: dict[str, dict[str, dict]] = {}


def _put(slug: str, lang: str, data: dict) -> None:
    """Register one locale overlay for a slug."""
    _OV.setdefault(slug, {})[lang] = data


def _faq(pairs: list[tuple[str, str]]) -> dict:
    """Turn Q/A pairs into faq_qN / faq_aN keys."""
    out = {}
    for i, (q, a) in enumerate(pairs, 1):
        out[f"faq_q{i}"] = q
        out[f"faq_a{i}"] = a
    return out


def _how(items: list[str]) -> dict:
    """Build ordered How steps; the caller supplies a separate explanatory body."""
    out = {}
    for i, h in enumerate(items, 1):
        out[f"how_item_{i}"] = h
    return out


def _rules(items: list[str]) -> dict:
    """Build the four constraint-focused Rules items."""
    out = {}
    for i, r in enumerate(items, 1):
        out[f"rules_item_{i}"] = r
    return out


def _uc(items: list[str]) -> dict:
    """usecase_1..3."""
    return {f"usecase_{i}": u for i, u in enumerate(items, 1)}


def _pack(article: str, how: list[str], rules: list[str], example: str, uc: list[str], faq: list[tuple[str, str]], disclaimer: str = "") -> dict:
    """Assemble overlay fields for one locale."""
    d = {"article": article, "how_body": article, "example": example, **_how(how), **_rules(rules), **_uc(uc), **_faq(faq)}
    d["rules_body"] = " ".join(rules[:2])
    if disclaimer:
        d["disclaimer"] = disclaimer
    return d


# --- write-nested-if-formula-for-excel ---
_put("write-nested-if-formula-for-excel", "zh", _pack(
    "先写出嵌套 IF，不要当成 IFS。",
    ["先写出嵌套 IF，再点按钮。", "填单元格（A1）。", "加等于/包含/空白行。", "复制公式并看试算。"],
    ["字符串里的引号要写成两个引号。", "「包含」会写成 SEARCH。", "空白是在测空文本。", "IFS 在另一页。"],
    "A1 为 West/East/其余 → 嵌套 IF，试算得 A。",
    ["分数段。", "地区标签。", "作业里的多层 IF。"],
    [("会上传吗？", PRIV["zh"]), ("这是 IFS 吗？", "不是。IFS 请用另一页。"), ("包含条件？", "选包含，会写出 SEARCH。"), ("不装 Excel 能试算吗？", "可以，用示例单元格的值。")],
))
_put("write-nested-if-formula-for-excel", "es", _pack(
    "Empieza por la SI anidada; IFS es otra página.",
    ["Resuelve la SI anidada; los botones van después.", "Pon la celda (A1).", "Añade igual / contiene / vacío.", "Copia la fórmula y mira la prueba."],
    ["Las comillas dentro de texto Excel se duplican.", "«Contiene» emite SEARCH.", "Vacío comprueba texto vacío.", "SISI/IFS vive en otra URL."],
    "A1 West/East/resto → SI anidada; la prueba da A.",
    ["Bandas de nota.", "Etiquetas de región.", "Deberes de SI anidada."],
    [("¿Se sube al servidor?", PRIV["es"]), ("¿Es SISI/IFS?", "No. Esa es otra página."), ("¿Contiene?", "Elige contiene y sale SEARCH."), ("¿Prueba sin Excel?", "Sí, con el valor de ejemplo.")],
))
_put("write-nested-if-formula-for-excel", "ja", _pack(
    "ネストしたIFを先に書く。IFSは別ページ。",
    ["まずネストIFを書き、それからボタン。", "セル（A1）を入れる。", "等しい／含む／空白の行を足す。", "数式をコピーして試算を見る。"],
    ["Excel文字列内の引用符は二つにする。", "「含む」はSEARCHになる。", "空白は空文字の判定。", "IFSは別ツール。"],
    "A1がWest/East/その他 → ネストIF、試算はA。",
    ["成績帯。", "地域ラベル。", "宿題の入れ子IF。"],
    [("アップロードしますか？", PRIV["ja"]), ("IFSですか？", "違います。IFSページへ。"), ("含む条件は？", "含むを選ぶとSEARCHになります。"), ("Excelなしで試せますか？", "サンプルセルの値で試算します。")],
))

# --- write-ifs-formula-in-excel ---
_put("write-ifs-formula-in-excel", "zh", _pack(
    "按顺序填写条件与结果，用 TRUE 接住其余情况；适用于 Excel 2019、Microsoft 365 及更新版本。",
    ["填写目标单元格和试算值。", "按判断顺序添加条件与结果。", "填写最终否则值，工具会配上 TRUE。", "生成并复制 IFS；旧版 Excel 改用嵌套 IF。"],
    ["TRUE 是最终否则分支。", "永久版 Excel 2016 及更早版本不支持 IFS。", "首个为真的条件生效。", "部分本地版 Excel 需改函数名或分号。"],
    "A1=West 得 A、East 得 B、其余为 Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\")。",
    ["简化 Microsoft 365 中难读的嵌套 IF。", "按顺序给业务状态打标签。", "选择 IFS 或兼容旧版的嵌套 IF。"],
    [("Excel 2016 能用 IFS 吗？", "永久版不能；请用嵌套 IF、Excel 2019 及更新版本或 Microsoft 365。"), ("没有条件命中怎么办？", "TRUE 和否则值会作为最终兜底。"), ("上传吗？", PRIV["zh"]), ("复制后公式错误怎么办？", "部分本地版 Excel 使用本地函数名或分号参数分隔符。")],
))
_put("write-ifs-formula-in-excel", "es", _pack(
    "Ordena pruebas y resultados y termina con VERDADERO; requiere Excel 2019, Microsoft 365 o posterior.",
    ["Indica la celda y un valor de prueba.", "Añade condiciones y resultados en orden.", "Escribe el resultado final; se empareja con VERDADERO.", "Genera IFS o usa SI anidada en Excel antiguo."],
    ["VERDADERO actúa como rama final.", "Excel 2016 perpetuo y versiones anteriores no admiten IFS.", "Gana la primera condición verdadera.", "Excel localizado puede requerir nombres traducidos o punto y coma."],
    "A1=West → A; East → B; resto Other: =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\").",
    ["Simplificar un SI anidado en Microsoft 365.", "Etiquetar estados con reglas ordenadas.", "Comparar IFS con SI anidada compatible."],
    [("¿Excel 2016 admite IFS?", "La edición perpetua no. Usa SI anidada, Excel 2019 o posterior, o Microsoft 365."), ("¿Y si nada coincide?", "VERDADERO devuelve el resultado final."), ("¿Se sube?", PRIV["es"]), ("¿Error al pegar?", "Excel localizado puede necesitar nombres traducidos o punto y coma.")],
))
_put("write-ifs-formula-in-excel", "ja", _pack(
    "条件と結果を順番に並べ、最後をTRUEの結果にします。Excel 2019、Microsoft 365以降向けです。",
    ["対象セルと試算値を入力する。", "判定順に条件と結果を追加する。", "最後の「それ以外」を入力する。", "IFSを生成してコピーし、旧版ではネストIFを使う。"],
    ["TRUEが最後の「それ以外」です。", "永続版Excel 2016以前はIFS非対応です。", "最初に真になった条件が採用されます。", "環境によって関数名や区切りの変更が必要です。"],
    "同じWest/East行 → IFS(...,TRUE,\"Other\").",
    ["Microsoft 365の長いネストIFを読みやすくする。", "業務状態を順序付きルールで分類する。", "IFSと旧版互換のネストIFを比較する。"],
    [("Excel 2016で使えますか？", "永続版では使えません。ネストIF、Excel 2019以降、またはMicrosoft 365を使います。"), ("一致しない場合は？", "TRUEと最後の値が兜底になります。"), ("アップロード？", PRIV["ja"]), ("貼り付けエラーは？", "Excelの言語・地域設定に合わせて関数名や区切りを変更してください。")],
))

# Remaining slugs: zh/es/ja packs (phase-4 sample langs) plus a helper for other langs.


def _fill_rest() -> None:
    """Register zh/es/ja overlays for the remaining ten slugs."""
    specs = {
        "wrap-formula-with-ifna": {
            "zh": _pack("贴入已有公式并设置 #N/A 时的备选值，再复制 IFNA 包装公式。", ["贴入内部公式，可带或不带等号。", "填写 #N/A 时返回的数字或文本。", "生成 IFNA 包装公式。", "复制到 Excel，用已知缺失项验证。"],
                        ["开头的等号会去掉。", "IFNA 只处理 #N/A，其他错误仍会显示。", "文本备选值会加引号。", "部分本地版 Excel 需调整函数名或分隔符。"],
                        "内部公式 NA()、备选值 0 → =IFNA(NA(),0)；在 Excel 中结果为 0。", ["处理 VLOOKUP 未命中。", "给 XLOOKUP 缺失项设置备选。", "出图前清理 #N/A 而不隐藏其他错误。"],
                        [("为什么不用 IFERROR？", "IFNA 只替换 #N/A，不会隐藏其他类型的公式错误。"), ("上传吗？", PRIV["zh"]), ("必须打等号吗？", "不用，开头等号可有可无。"), ("这里会执行内部公式吗？", "不会，只生成包装语法；请在 Excel 中计算。")]),
            "es": _pack("Pega una fórmula y define el valor alterno solo para #N/A.", ["Pega la fórmula interior, con o sin =.", "Escribe el valor para #N/A.", "Genera el envoltorio SINA/IFNA.", "Cópialo en Excel y comprueba una búsqueda ausente."],
                        ["Se quita el = inicial.", "SINA solo trata #N/A; otros errores siguen visibles.", "El texto alterno se pone entre comillas.", "Excel localizado puede requerir otro nombre o separador."],
                        "NA() con 0 → =IFNA(NA(),0); Excel devuelve 0.", ["BUSCARV sin coincidencia.", "XLOOKUP no encontrado.", "Limpiar #N/A sin ocultar otros errores."],
                        [("¿Por qué no SI.ERROR?", "SINA sustituye solo #N/A y deja visibles los demás errores."), ("¿Se sube?", PRIV["es"]), ("¿Hace falta =?", "No; se elimina si aparece al principio."), ("¿Se calcula aquí?", "No. La página genera la sintaxis; Excel ejecuta la fórmula.")]),
            "ja": _pack("既存の数式と#N/A時の代替値を入力し、IFNAで包んだ数式をコピーします。", ["内側の数式を貼る。先頭の=は任意。", "#N/A時の数値または文字を入れる。", "IFNA数式を生成する。", "Excelにコピーして既知の未検出値で確認する。"],
                        ["先頭の=は外します。", "IFNAは#N/Aだけを処理し、他のエラーは残します。", "文字の代替値は引用符で囲みます。", "Excelの言語によって関数名や区切りの変更が必要です。"],
                        "NA()と代替値0 → =IFNA(NA(),0)。Excelでは0になります。", ["VLOOKUPの未検出を置き換える。", "XLOOKUPの代替値を用意する。", "他のエラーを隠さず#N/Aだけ除く。"],
                        [("IFERRORとの違いは？", "IFNAは#N/Aだけを置き換え、他のエラーを残します。"), ("アップロード？", PRIV["ja"]), ("=は必須？", "不要です。先頭にあれば除去します。"), ("ここで計算しますか？", "いいえ。構文を生成し、計算はExcelで行います。")]),
        },
        "write-countif-formula-in-excel": {
            "zh": _pack("先写出 COUNTIF，一个区域一个条件。", ["先写出 COUNTIF。", "填区域。", "填条件，可用 * ?。", "复制公式。"],
                        ["* 和 ? 是 Excel 通配符。", "COUNTIFS 不在本页。", "文本条件要加引号。", "只在本机。"],
                        "区域 A2:A6、条件 West → =COUNTIF(A2:A6,\"West\")；条件 *west* 会生成模糊匹配公式。", ["统计出勤名单中的一个状态。", "统计指定 SKU 或数值阈值。", "用 *west* 做包含式计数。"],
                        [("什么时候用 COUNTIFS？", "需要同时判断多个区域或条件时用 COUNTIFS；本页只生成单条件 COUNTIF。"), ("通配符怎么用？", "* 匹配任意长度文本，? 匹配一个字符，~ 可转义通配符。"), ("上传吗？", PRIV["zh"]), ("数字和比较符如何加引号？", "纯数字不加引号，>10 这类条件会加引号。")]),
            "es": _pack("CONTAR.SI: un rango, un criterio.", ["Escribe CONTAR.SI.", "Pon el rango.", "Pon el criterio, * ? si hace falta.", "Copia la fórmula."],
                        ["* y ? son comodines Excel.", "CONTAR.SI.CONJUNTO no está aquí.", "Texto entre comillas.", "Solo local."],
                        "A2:A6 con West → =COUNTIF(A2:A6,\"West\"); *west* genera una coincidencia parcial.", ["Contar un estado de asistencia.", "Contar un SKU o umbral.", "Buscar texto con *west*."],
                        [("¿Cuándo usar CONTAR.SI.CONJUNTO?", "Cuando deban cumplirse varios rangos o criterios; aquí se genera un solo COUNTIF."), ("¿Cómo funcionan los comodines?", "* representa cualquier texto, ? un carácter y ~ escapa un comodín."), ("¿Se sube?", PRIV["es"]), ("¿Números y operadores?", "Los números quedan sin comillas; criterios como >10 se escriben entre comillas.")]),
            "ja": _pack("COUNTIFは範囲一つ・条件一つ。", ["COUNTIFを書く。", "範囲を入れる。", "条件。* ?も可。", "数式をコピー。"],
                        ["* と ? はExcelのワイルドカード。", "COUNTIFSはここにはない。", "文字条件は引用符。", "端末内のみ。"],
                        "範囲A2:A6、条件West → =COUNTIF(A2:A6,\"West\")。*west*なら部分一致です。", ["出席状態を一つ数える。", "SKUや数値しきい値を数える。", "*west*で含む検索を作る。"],
                        [("COUNTIFSはいつ使う？", "複数の範囲や条件を同時に判定するときです。本ページは単一条件です。"), ("ワイルドカードは？", "*は任意文字列、?は1文字、~はワイルドカードのエスケープです。"), ("アップロード？", PRIV["ja"]), ("数値と演算子は？", "数値は引用符なし、>10のような条件は引用符付きです。")]),
        },
        "excel-formulas-cheat-sheet": {
            "zh": _pack("先复制常用公式；不要在这里生成嵌套 IF。", ["先复制常用公式。", "按名字筛选。", "打开卡片复制。", "要生成嵌套 IF 请去另一页。"],
                        ["这是查阅不是生成。", "Ctrl+` 仍在 Excel 里。", "卡片只覆盖常用函数。", "筛选在本机。"],
                        "筛 IF，复制 =IF(A1>0,\"yes\",\"no\")。", ["想起 SUMIF。", "跳到嵌套 IF 生成器。", "教函数名。"],
                        [("包含哪些公式？", "包含 IF、IFS、IFNA、COUNTIF、SUMIF、VLOOKUP、XLOOKUP 和 TEXT 八种常用写法。"), ("能显示工作簿里的全部公式吗？", "不能；请在 Excel 中按 Ctrl+` 切换显示。"), ("上传吗？", PRIV["zh"]), ("自定义公式生成器在哪里？", "卡片下方可直接打开嵌套 IF、IFS、IFNA 和 COUNTIF 工具。")]),
            "es": _pack("Copia tarjetas; no genera SI anidada aquí.", ["Copia fórmulas habituales.", "Filtra por nombre.", "Abre la tarjeta y copia.", "El constructor SI anidada es otra URL."],
                        ["Consulta, no genera.", "Ctrl+` sigue en Excel.", "Solo funciones comunes.", "Filtro local."],
                        "Filtra IF y copia =IF(A1>0,\"yes\",\"no\").", ["Recordar SUMAR.SI.", "Saltar al constructor SI.", "Enseñar nombres de función."],
                        [("¿Qué fórmulas incluye?", "IF, IFS, IFNA, COUNTIF, SUMIF, VLOOKUP, XLOOKUP y TEXT."), ("¿Muestra todas las fórmulas de un libro?", "No; usa Ctrl+` dentro de Excel."), ("¿Se sube?", PRIV["es"]), ("¿Dónde están los constructores?", "Los enlaces bajo las tarjetas abren SI anidada, IFS, IFNA y COUNTIF.")]),
            "ja": _pack("よく使う数式をコピー。ネストIFは作らない。", ["まずよく使う数式をコピー。", "名前で絞る。", "カードを開いてコピー。", "ネストIFを作るなら別ページ。"],
                        ["参照であり生成ではない。", "Ctrl+` はExcel側。", "カードはよく使う関数だけ。", "絞り込みは端末内。"],
                        "IFで絞り =IF(A1>0,\"yes\",\"no\") をコピー。", ["SUMIFを思い出す。", "ネストIF作成へ飛ぶ。", "関数名の授業。"],
                        [("収録数式は？", "IF、IFS、IFNA、COUNTIF、SUMIF、VLOOKUP、XLOOKUP、TEXTの8種類です。"), ("ブック内の全数式を表示できますか？", "できません。Excel側でCtrl+`を使います。"), ("アップロード？", PRIV["ja"]), ("カスタム作成ツールは？", "カード下のリンクからネストIF、IFS、IFNA、COUNTIFを開けます。")]),
        },
        "create-invoice-spreadsheet": {
            "zh": _pack("填写买卖方、明细和税率，核对每一行后下载带动态公式的 xlsx。", ["按说明,数量,单价格式填写明细。", "填写买卖方和税率。", "生成后核对行金额、小计、税额与总额。", "下载 xlsx；修改数值后公式会重新计算。"],
                        ["行金额=数量×单价，税额按小计计算。", "xlsx 的行金额、小计、税额和总额都是动态公式。", "说明中不能含逗号，格式错误的行会跳过。", "不是符合特定地区法规的法定电子发票。"],
                        "Widget 数量 2、单价 10 → 小计 20；税率 10% → 税额 2、总额 22。", ["自由职业发票草稿。", "内部结算核算表。", "讲解数量、单价、小计和税额。"],
                        [("这是法定发票吗？", "不一定。必填字段、编号、税务及电子发票格式因地区而异。"), ("上传吗？", PRIV["zh"]), ("修改 xlsx 后会重新计算吗？", "会。行金额、小计、税额和总额使用 Excel 公式。"), ("明细行格式是什么？", "使用说明,数量,单价；错误行会跳过，说明不能包含逗号。")],
                        DISCLAIM["invoice"]["zh"]),
            "es": _pack("Introduce las partes, líneas e impuesto, revisa cada importe y descarga un xlsx con fórmulas.", ["Escribe cada línea como descripción,cantidad,precio.", "Añade vendedor, comprador e impuesto.", "Revisa líneas, subtotal, impuesto y total.", "Descarga el xlsx; sus fórmulas recalculan los cambios."],
                        ["Línea=cantidad×precio; impuesto sobre subtotal.", "El xlsx conserva fórmulas de línea y total.", "La descripción no admite comas; las filas mal formadas se omiten.", "No es una factura fiscal específica de una jurisdicción."],
                        "Widget: 2 unidades × 10 = 20; impuesto 10%=2; total 22.", ["Borrador para autónomos.", "Hoja de cobro interno.", "Explicar subtotal e impuesto."],
                        [("¿Es una factura legal?", "Depende de los requisitos, numeración e impuestos de cada jurisdicción."), ("¿Se sube?", PRIV["es"]), ("¿Recalcula el xlsx?", "Sí. Líneas, subtotal, impuesto y total son fórmulas."), ("¿Formato de líneas?", "descripción,cantidad,precio; las filas incorrectas se omiten.")],
                        DISCLAIM["invoice"]["es"]),
            "ja": _pack("売主・買主、明細、税率を入力し、各行を確認して数式付きxlsxを保存します。", ["明細を説明,数量,単価で入力する。", "売主・買主と税率を入れる。", "行金額、小計、税、合計を確認する。", "xlsxを保存し、Excelで編集後も再計算する。"],
                        ["行金額=数量×単価、税は小計に掛けます。", "xlsxには行金額と合計の数式が入ります。", "説明にカンマは使えず、不正な行は飛ばします。", "地域固有の法定電子インボイスではありません。"],
                        "Widget 2個×10=小計20、税10%=2、合計22。", ["フリーランスの下書き。", "内部請求の計算表。", "小計と税の教材。"],
                        [("法的に有効ですか？", "必要項目、番号、税制、電子形式は地域ごとに異なります。"), ("アップロード？", PRIV["ja"]), ("xlsxは再計算しますか？", "はい。行金額、小計、税、合計はExcel数式です。"), ("明細形式は？", "説明,数量,単価です。不正な行は飛ばします。")],
                        DISCLAIM["invoice"]["ja"]),
        },
        "create-budget-spreadsheet": {
            "zh": _pack("逐行填写类别和金额，核对总额并下载带动态 SUM 公式的 xlsx。", ["按类别,金额填写每一行。", "生成并核对总额。", "下载前修正格式错误的行。", "下载 xlsx；修改金额后总额会重新计算。"],
                        ["金额必须是有限数字，错误行会跳过。", "下载文件的总额单元格使用 SUM 公式。", "这是单列表，不是总账或收支对比系统。", "数据留在本机，不上传服务器。"],
                        "房租 1200 + 餐饮 400 → 1600。", ["月度信封。", "旅行预算。", "社团现金。"],
                        [("这是总账吗？", "不是，不含账户、交易、对账或审计记录。"), ("上传吗？", PRIV["zh"]), ("xlsx 会重新计算吗？", "会，总额单元格使用 SUM 公式。"), ("能比较收入和支出吗？", "不能；需要收入、目标、差异或图表时请使用更完整的预算模板。")],
                        DISCLAIM["budget"]["zh"]),
            "es": _pack("Añade categorías e importes, revisa el total y descarga un xlsx con fórmula SUMA.", ["Escribe cada fila como categoría,importe.", "Genera y comprueba el total.", "Corrige las filas mal formadas.", "Descarga el xlsx; el total se recalcula al editar."],
                        ["Los importes deben ser números finitos.", "La celda Total contiene una fórmula SUMA.", "Es una lista, no un libro mayor ni comparación de ingresos.", "Los datos no salen del dispositivo."],
                        "Alquiler 1200 + comida 400 → 1600.", ["Sobre mensual.", "Viaje.", "Caja de club."],
                        [("¿Es un libro mayor?", "No; no incluye cuentas, transacciones, conciliación ni historial."), ("¿Se sube?", PRIV["es"]), ("¿Recalcula el xlsx?", "Sí. La celda Total usa una fórmula SUMA."), ("¿Compara ingresos y gastos?", "No; para objetivos, variaciones y gráficos hace falta una plantilla más completa.")],
                        DISCLAIM["budget"]["es"]),
            "ja": _pack("費目と金額を入力し、合計を確認してSUM数式付きxlsxを保存します。", ["各行を費目,金額で入力する。", "生成して合計を確認する。", "不正な行を修正する。", "xlsxを保存し、金額編集後も再計算する。"],
                        ["金額は有限数で、不正な行は飛ばします。", "TotalセルにはSUM数式が入ります。", "単一リストであり総勘定元帳ではありません。", "データは端末内で処理します。"],
                        "家賃1200+食費400 → 1600。", ["月の封筒。", "旅行予算。", "サークルの現金。"],
                        [("総勘定元帳ですか？", "いいえ。勘定、取引、照合、監査履歴はありません。"), ("アップロード？", PRIV["ja"]), ("xlsxは再計算しますか？", "はい。TotalセルはSUM数式です。"), ("収入と支出を比較できますか？", "できません。目標や差異、グラフにはより完全な予算テンプレートが必要です。")],
                        DISCLAIM["budget"]["ja"]),
        },
        "create-excel-timesheet": {
            "zh": _pack("逐行填写日期、项目和小数工时，核对总工时并下载带 SUM 公式的 xlsx。", ["按日期,项目,小时填写每一行。", "生成并核对总工时。", "修正格式错误或非数字工时。", "下载 xlsx；修改工时后总额会重新计算。"],
                        ["工时必须是有限小数，错误行会跳过。", "下载文件的总额单元格使用 SUM 公式。", "不计算上下班时间、休息、加班、工资或税。", "输入留在本机，不上传服务器。"],
                        "2026-09-07 至 2026-09-11，周一到周五每天 8 小时 → 40 小时。", ["提交每周项目工时。", "在开票前记录外包工时。", "汇总课堂、实验或志愿服务时间。"],
                        [("会计算工资或加班吗？", "不会，只合计输入的小数工时。"), ("上传吗？", PRIV["zh"]), ("xlsx 会重新计算吗？", "会，总额单元格使用 SUM 公式。"), ("能按上下班时间计算吗？", "不能，请直接输入小数工时；休息和时差计算不在本工具范围内。")]),
            "es": _pack("Añade fecha, proyecto y horas decimales, revisa el total y descarga un xlsx con fórmula SUMA.", ["Escribe fecha,proyecto,horas por fila.", "Genera y revisa el total.", "Corrige filas inválidas.", "Descarga el xlsx; el total se recalcula."],
                        ["Las horas deben ser números finitos.", "La celda Total usa una fórmula SUMA.", "No calcula pausas, horas extra, tarifa ni nómina.", "Los datos quedan en el dispositivo."],
                        "Cinco días × 8 → 40.", ["Horas semanales.", "Log de contratista.", "Asistencia de clase."],
                        [("¿Calcula nómina u horas extra?", "No; solo suma las horas decimales introducidas."), ("¿Se sube?", PRIV["es"]), ("¿Recalcula el xlsx?", "Sí. La celda Total contiene una fórmula SUMA."), ("¿Calcula entrada y salida?", "No; introduce horas decimales directamente.")]),
            "ja": _pack("日付、案件、小数時間を入力し、合計を確認してSUM数式付きxlsxを保存します。", ["各行を日付,案件,時間で入力する。", "生成して合計時間を確認する。", "不正な行や数値でない時間を直す。", "xlsxを保存し、編集後も再計算する。"],
                        ["時間は有限の小数で、不正な行は飛ばします。", "TotalセルはSUM数式です。", "休憩、残業、賃金、給与は計算しません。", "入力は端末内で処理します。"],
                        "2026-09-07から09-11まで平日5日×8時間 → 40時間。", ["週の案件時間を提出する。", "請求前に業務委託時間を記録する。", "授業・実験・ボランティア時間を集計する。"],
                        [("給与や残業を計算しますか？", "いいえ。入力した小数時間を合計するだけです。"), ("アップロード？", PRIV["ja"]), ("xlsxは再計算しますか？", "はい。TotalセルはSUM数式です。"), ("出退勤時刻から計算できますか？", "できません。小数時間を直接入力してください。")]),
        },
        "create-graph-from-spreadsheet-data": {
            "zh": _pack("用 CSV 在画布上画图。", ["先用表数据画图。", "粘贴 CSV。", "选标签列和数值列。", "切换柱/线。"],
                        ["非数字会跳过。", "不是 Excel 图表对象。", "第一列像日期时可当地轴。", "粘贴留在本机。"],
                        "1 月 10、2 月 18 两根柱。", ["小销售表。", "作业作图。", "按月的时间轴。"],
                        [("Excel 图表文件？", "不是，只有画布。"), ("上传吗？", PRIV["zh"]), ("看板？", "双图那页另开。"), ("透视？", "另一页。")]),
            "es": _pack("Gráfico en canvas desde CSV.", ["Dibuja con datos pegados.", "Pega CSV.", "Elige etiqueta y valor.", "Barras o línea."],
                        ["Lo no numérico se salta.", "No es un objeto gráfico de Excel.", "Si la 1ª columna parece fechas, eje de tiempo.", "El pegado queda local."],
                        "Ene 10, feb 18: dos barras.", ["Lista de ventas pequeña.", "Gráfico de deberes.", "Meses tipo línea de tiempo."],
                        [("¿Archivo de gráfico Excel?", "No. Solo canvas."), ("¿Se sube?", PRIV["es"]), ("¿Panel?", "La página de dos gráficos es otra."), ("¿Tabla dinámica?", "Otra URL.")]),
            "ja": _pack("CSVからキャンバスにグラフ。", ["表データから描く。", "CSVを貼る。", "ラベル列と値列。", "棒／折れ線を切り替え。"],
                        ["数値でない行は飛ばす。", "Excelのグラフオブジェクトではない。", "1列目が日付っぽければ時間軸。", "貼り付けは端末内。"],
                        "1月10、2月18の棒2本。", ["小さな売上表。", "宿題のプロット。", "月のタイムライン風。"],
                        [("Excelのグラフファイル？", "いいえ。キャンバスだけ。"), ("アップロード？", PRIV["ja"]), ("ダッシュボード？", "2グラフのページは別。"), ("ピボット？", "別ページ。")]),
        },
        "create-excel-dashboard": {
            "zh": _pack("指标卡加两张小图，不是 Power BI。", ["先做出看板。", "粘贴至少两列数字。", "看合计和行数。", "看两张小图。"],
                        ["需要两列数字。", "不是完整工作簿看板。", "不是 Power BI。", "本机。"],
                        "地区,Q1,Q2 三行 → 两组柱。", ["小型运维快照。", "课堂 KPI。", "两列对比。"],
                        [("Power BI？", "不是。"), ("上传吗？", PRIV["zh"]), ("只要一张图？", "用出图那页。"), ("透视？", "另一页。")]),
            "es": _pack("Tarjetas KPI y dos gráficos; no Power BI.", ["Arma el panel.", "CSV con dos columnas numéricas.", "Lee sumas y filas.", "Mira los dos gráficos chicos."],
                        ["Hacen falta dos columnas numéricas.", "No es un dashboard de libro completo.", "No es Power BI.", "Local."],
                        "Región,Q1,Q2 tres filas → dos barras.", ["Snapshot de ops.", "KPI de clase.", "Comparar dos series."],
                        [("¿Power BI?", "No."), ("¿Se sube?", PRIV["es"]), ("¿Un solo gráfico?", "Usa la página de gráfico."), ("¿Tabla dinámica?", "Otra.")]),
            "ja": _pack("KPIカードと小さなグラフ2つ。Power BIではない。", ["まずダッシュボード。", "数値列が2つのCSV。", "合計と行数。", "小さなグラフ2つ。"],
                        ["数値列が2つ必要。", "ブック全体のダッシュボードではない。", "Power BIではない。", "端末内。"],
                        "地域,Q1,Q2の3行 → 棒2本。", ["小さな運用スナップ。", "授業のKPI。", "2系列の比較。"],
                        [("Power BI？", "違います。"), ("アップロード？", PRIV["ja"]), ("グラフ1つだけ？", "グラフページへ。"), ("ピボット？", "別ページ。")]),
        },
        "build-pivot-table-from-spreadsheet": {
            "zh": _pack("按行字段求和或计数。", ["先做出透视汇总。", "粘贴带表头的表。", "选行字段和值字段。", "选求和或计数。"],
                        ["不是 Excel 透视表缓存。", "空白归为 (blank)。", "一个值字段。", "本机。"],
                        "East 10+5 → East 15。", ["地区合计。", "工单计数。", "作业透视。"],
                        [("Excel 透视表界面？", "不是，只是简单汇总表。"), ("上传吗？", PRIV["zh"]), ("H1 写成 pivot table excel？", "头词放 FAQ，标题用场景句。"), ("图？", "出图那页。")]),
            "es": _pack("Suma o recuento por campo de fila.", ["Arma la tabla dinámica.", "Pega con cabecera.", "Campo de fila y valor.", "Suma o recuento."],
                        ["No es la caché de tabla dinámica de Excel.", "Los vacíos agrupan como (blank).", "Un campo de valor.", "Local."],
                        "East 10+5 → East 15.", ["Totales por región.", "Contar tickets.", "Pivot de deberes."],
                        [("¿UI de tabla dinámica Excel?", "No. Agregado simple."), ("¿Se sube?", PRIV["es"]), ("¿H1 pivot table excel?", "El término cabeza queda en FAQ."), ("¿Gráfico?", "Página de gráfico.")]),
            "ja": _pack("行フィールドで合計か件数。", ["まずピボットを作る。", "見出し付きの表を貼る。", "行と値を選ぶ。", "合計か件数。"],
                        ["ExcelのピボットキャッシュUIではない。", "空白は(blank)にまとまる。", "値フィールドは1つ。", "端末内。"],
                        "East 10+5 → East 15。", ["地域合計。", "チケット件数。", "宿題のピボット。"],
                        [("ExcelのピボットUI？", "いいえ。単純な集計表です。"), ("アップロード？", PRIV["ja"]), ("H1をpivot table excelに？", "頭語はFAQ。見出しはシーン文。"), ("グラフ？", "グラフページ。")]),
        },
        "open-excel-file-in-browser": {
            "zh": _pack("只读格子，不是 Excel Online。", ["先打开文件看格子。", "选 xlsx/xls/csv。", "选工作表。", "只读滚动，不能改格。"],
                        ["默认第一张表。", "不能编辑。", "受保护工作簿可能失败。", "库走 CDN；你的文件不上传。"],
                        "3×3 名称/数量样例。", ["没装 Excel 时先看一眼。", "核对 CSV。", "之后可去对比页。"],
                        [("能改单元格吗？", "不能，只是查看。"), ("上传吗？", PRIV["zh"]), ("xls 在线？", "同一个查看器。"), ("Excel Online 克隆？", "不是。")]),
            "es": _pack("Rejilla de solo lectura, no Excel Online.", ["Abre el archivo y mira la rejilla.", "Elige xlsx/xls/csv.", "Elige la hoja.", "Desplaza. Sin editar celdas."],
                        ["Primera hoja por defecto.", "Sin edición.", "Libros protegidos pueden fallar.", "La librería va por CDN; tu archivo no se sube."],
                        "Muestra 3×3 Nombre/Cant.", ["Echar un vistazo sin Excel.", "Revisar CSV.", "Luego comparar en la otra página."],
                        [("¿Puedo editar celdas?", "No. Solo visor."), ("¿Se sube?", PRIV["es"]), ("¿xls online?", "El mismo visor."), ("¿Clon de Excel Online?", "No.")]),
            "ja": _pack("読み取り専用グリッド。Excel Onlineではない。", ["ファイルを開いてマスを見る。", "xlsx/xls/csvを選ぶ。", "シートを選ぶ。", "スクロールのみ。セルは編集できない。"],
                        ["既定は先頭シート。", "編集なし。", "保護ブックは失敗することがある。", "ライブラリはCDN。ファイルは上げない。"],
                        "3×3のName/Qtyサンプル。", ["Excelなしのチラ見。", "CSV確認。", "あとで比較ページへ。"],
                        [("セルを編集できる？", "できません。ビューアです。"), ("アップロード？", PRIV["ja"]), ("xls online？", "同じビューア。"), ("Excel Onlineのクローン？", "違います。")]),
        },
    }
    for slug, langs in specs.items():
        for lang, pack in langs.items():
            _put(slug, lang, pack)


_fill_rest()

# Other locales: local syntax templates + slug job nouns (not English FAQ order).
_JOB = {
    "write-nested-if-formula-for-excel": {
        "ar": "صيغة IF متداخلة", "pt": "SE aninhada", "id": "IF bersarang",
        "fr": "SI imbriquée", "ru": "вложенную ЕСЛИ", "de": "geschachtelte WENN",
    },
    "write-ifs-formula-in-excel": {
        "ar": "صيغة IFS", "pt": "SES/IFS", "id": "IFS", "fr": "SIES/IFS", "ru": "ЕСЛИМН", "de": "WENNS",
    },
    "wrap-formula-with-ifna": {
        "ar": "تغليف IFNA", "pt": "SENA/IFNA", "id": "IFNA", "fr": "SINA/IFNA", "ru": "ЕСНД", "de": "WENNNV",
    },
    "write-countif-formula-in-excel": {
        "ar": "صيغة COUNTIF", "pt": "CONT.SE", "id": "COUNTIF", "fr": "NB.SI", "ru": "СЧЁТЕСЛИ", "de": "ZÄHLENWENN",
    },
    "excel-formulas-cheat-sheet": {
        "ar": "نسخ الصيغ الشائعة", "pt": "fórmulas comuns", "id": "rumus biasa",
        "fr": "formules courantes", "ru": "частые формулы", "de": "gängige Formeln",
    },
    "create-invoice-spreadsheet": {
        "ar": "جدول فاتورة", "pt": "planilha de fatura", "id": "spreadsheet faktur",
        "fr": "tableur de facture", "ru": "таблицу счёта", "de": "Rechnungstabelle",
    },
    "create-budget-spreadsheet": {
        "ar": "جدول ميزانية", "pt": "planilha de orçamento", "id": "spreadsheet anggaran",
        "fr": "tableur de budget", "ru": "таблицу бюджета", "de": "Budgettabelle",
    },
    "create-excel-timesheet": {
        "ar": "كشف ساعات", "pt": "folha de horas", "id": "timesheet",
        "fr": "feuille de temps", "ru": "табель", "de": "Stundenzettel",
    },
    "create-graph-from-spreadsheet-data": {
        "ar": "مخطط من الجدول", "pt": "gráfico da planilha", "id": "grafik spreadsheet",
        "fr": "graphique tableur", "ru": "график по таблице", "de": "Diagramm aus Tabelle",
    },
    "create-excel-dashboard": {
        "ar": "لوحة مؤشرات", "pt": "painel tipo Excel", "id": "dasbor",
        "fr": "tableau de bord", "ru": "дашборд", "de": "Dashboard",
    },
    "build-pivot-table-from-spreadsheet": {
        "ar": "جدول محوري", "pt": "tabela dinâmica", "id": "pivot",
        "fr": "tableau croisé", "ru": "сводную", "de": "Pivot-Tabelle",
    },
    "open-excel-file-in-browser": {
        "ar": "فتح إكسل للعرض", "pt": "abrir Excel só leitura", "id": "buka Excel baca saja",
        "fr": "ouvrir Excel en lecture", "ru": "открыть Excel для чтения", "de": "Excel nur lesen",
    },
}

_STEPS = {
    "ar": lambda j: [f"ابدأ بإدخال بيانات {j}.", "املأ الحقول بالترتيب الظاهر.", "حمّل المثال وقارن النتيجة.", "انسخ الصيغة أو نزّل ملف xlsx."],
    "pt": lambda j: [f"Comece pelos dados de {j}.", "Preencha os campos na ordem mostrada.", "Carregue o exemplo e confira o resultado.", "Copie a fórmula ou baixe o xlsx."],
    "id": lambda j: [f"Mulai dengan data untuk {j}.", "Isi kolom sesuai urutan yang ditampilkan.", "Muat contoh dan periksa hasilnya.", "Salin rumus atau unduh xlsx."],
    "fr": lambda j: [f"Commencez par les données de {j}.", "Remplissez les champs dans l’ordre affiché.", "Chargez l’exemple et vérifiez le résultat.", "Copiez la formule ou téléchargez le xlsx."],
    "ru": lambda j: [f"Сначала введите данные для {j}.", "Заполните поля в показанном порядке.", "Загрузите пример и проверьте результат.", "Скопируйте формулу или скачайте xlsx."],
    "de": lambda j: [f"Beginnen Sie mit den Daten für {j}.", "Füllen Sie die Felder in der gezeigten Reihenfolge aus.", "Laden Sie das Beispiel und prüfen Sie das Ergebnis.", "Kopieren Sie die Formel oder laden Sie xlsx herunter."],
}

_RULES_L = {
    "ar": ["راجع تنسيق الحقول قبل النسخ أو التنزيل.", "الصفوف غير الصالحة قد تُتجاهل.", "النتيجة المعروضة تطابق بيانات المثال.", "تبقى البيانات على الجهاز دون رفع إلى خادم."],
    "pt": ["Confira o formato dos campos antes de copiar ou baixar.", "Linhas inválidas podem ser ignoradas.", "O resultado visível usa os dados do exemplo.", "Os dados ficam no dispositivo, sem envio ao servidor."],
    "id": ["Periksa format kolom sebelum menyalin atau mengunduh.", "Baris tidak valid dapat dilewati.", "Hasil yang terlihat memakai data contoh.", "Data tetap di perangkat tanpa unggah ke server."],
    "fr": ["Vérifiez le format des champs avant de copier ou télécharger.", "Les lignes invalides peuvent être ignorées.", "Le résultat visible utilise les données de l’exemple.", "Les données restent sur l’appareil, sans envoi au serveur."],
    "ru": ["Проверьте формат полей перед копированием или скачиванием.", "Некорректные строки могут пропускаться.", "Видимый результат построен по данным примера.", "Данные остаются на устройстве без загрузки на сервер."],
    "de": ["Prüfen Sie das Feldformat vor dem Kopieren oder Herunterladen.", "Ungültige Zeilen können übersprungen werden.", "Das sichtbare Ergebnis verwendet die Beispieldaten.", "Die Daten bleiben auf dem Gerät, ohne Server-Upload."],
}

# Formula-specific boundaries for the six fallback locales.
_FORMULA_RULES = {
    "ar": ["تحقق من ترتيب الشروط والمراجع قبل النسخ.", "تستخدم الصيغة أسماء الدوال الإنجليزية والفواصل.", "قد يحتاج Excel المحلي إلى أسماء مترجمة أو فاصلة منقوطة.", "تبقى المدخلات على الجهاز دون رفع إلى خادم."],
    "pt": ["Confira a ordem das condições e referências antes de copiar.", "A fórmula usa nomes de função em inglês e vírgulas.", "O Excel localizado pode exigir nomes traduzidos ou ponto e vírgula.", "Os dados ficam no dispositivo, sem envio ao servidor."],
    "id": ["Periksa urutan kondisi dan referensi sebelum menyalin.", "Rumus memakai nama fungsi Inggris dan koma.", "Excel lokal mungkin memerlukan nama terjemahan atau titik koma.", "Input tetap di perangkat tanpa unggah ke server."],
    "fr": ["Vérifiez l’ordre des conditions et les références avant de copier.", "La formule emploie les noms de fonctions anglais et des virgules.", "Excel localisé peut exiger des noms traduits ou des points-virgules.", "Les données restent sur l’appareil, sans envoi au serveur."],
    "ru": ["Проверьте порядок условий и ссылки перед копированием.", "Формула использует английские имена функций и запятые.", "Локализованный Excel может требовать перевод имён или точку с запятой.", "Данные остаются на устройстве без загрузки на сервер."],
    "de": ["Prüfen Sie Bedingungsreihenfolge und Bezüge vor dem Kopieren.", "Die Formel verwendet englische Funktionsnamen und Kommas.", "Lokalisiertes Excel kann übersetzte Namen oder Semikolons verlangen.", "Die Daten bleiben auf dem Gerät, ohne Server-Upload."],
}

# Slugs whose output is formula syntax rather than an xlsx workbook.
_FORMULA_SLUGS = {
    "write-nested-if-formula-for-excel",
    "write-ifs-formula-in-excel",
    "wrap-formula-with-ifna",
    "write-countif-formula-in-excel",
    "excel-formulas-cheat-sheet",
}

# Exact, language-neutral input→output evidence for fallback locales.
_EXAMPLE_BY_SLUG = {
    "write-nested-if-formula-for-excel": 'A1=West → A; East → B; else Other: =IF(A1="West","A",IF(A1="East","B","Other")).',
    "write-ifs-formula-in-excel": 'A1=West → A; East → B; else Other: =IFS(A1="West","A",A1="East","B",TRUE,"Other").',
    "wrap-formula-with-ifna": "NA() + fallback 0 → =IFNA(NA(),0); Excel result 0.",
    "write-countif-formula-in-excel": 'A2:A6 + West → =COUNTIF(A2:A6,"West").',
    "excel-formulas-cheat-sheet": 'Filter IF → copy =IF(A1>0,"yes","no").',
    "create-invoice-spreadsheet": "Widget 2×10 = 20; tax 10% = 2; total 22.",
    "create-budget-spreadsheet": "Rent 1200 + Food 400 → total 1600.",
    "create-excel-timesheet": "2026-09-07…2026-09-11, 5×8 hours → total 40.",
}


def overlay(slug: str, lang: str) -> dict:
    """Return native overlay fields for slug+lang; empty dict for en (source pack)."""
    if lang == "en":
        return {}
    hit = _OV.get(slug, {}).get(lang)
    if hit:
        return hit
    job = _JOB.get(slug, {}).get(lang) or slug.replace("-", " ")
    how = _STEPS.get(lang, _STEPS["pt"])(job)
    rules = (
        _FORMULA_RULES.get(lang, _FORMULA_RULES["pt"])
        if slug in _FORMULA_SLUGS
        else _RULES_L.get(lang, _RULES_L["pt"])
    )
    priv = PRIV.get(lang, PRIV["pt"])
    faq = [
        ("?", priv),  # replaced below
    ]
    # Distinct FAQ order / wording per language (anti-isomorphism).
    faqs = {
        "ar": [(f"هل تُرفع الملفات عند {job}؟", priv), ("هل هذا Excel Online؟", "لا."), ("أين المثال؟", "زر المثال يملأ الحقول."), ("هل يمكن التحرير؟", "حسب الأداة؛ العارض للقراءة فقط.")],
        "pt": [(f"O ficheiro sobe ao fazer {job}?", priv), ("Isto é Excel Online?", "Não."), ("Onde está o exemplo?", "O botão de exemplo preenche os campos."), ("Dá para editar células?", "Só no visor é leitura; as outras páginas geram texto ou xlsx.")],
        "id": [(f"Apakah berkas diunggah saat {job}?", priv), ("Ini Excel Online?", "Bukan."), ("Contoh di mana?", "Tombol contoh mengisi kolom."), ("Bisa edit sel?", "Viewer hanya baca; yang lain menulis rumus atau xlsx.")],
        "fr": [(f"Les fichiers sont-ils envoyés pour {job} ?", priv), ("Est-ce Excel Online ?", "Non."), ("Où est l’exemple ?", "Le bouton exemple remplit les champs."), ("Peut-on modifier les cellules ?", "Le visualiseur est en lecture ; les autres pages écrivent une formule ou un xlsx.")],
        "ru": [(f"Файлы загружаются, когда нужна {job}?", priv), ("Это Excel Online?", "Нет."), ("Где пример?", "Кнопка примера заполняет поля."), ("Можно править ячейки?", "Просмотр только чтение; остальные пишут формулу или xlsx.")],
        "de": [(f"Werden Dateien hochgeladen bei {job}?", priv), ("Ist das Excel Online?", "Nein."), ("Wo ist das Beispiel?", "Die Beispiel-Schaltfläche füllt die Felder."), ("Zellen bearbeiten?", "Der Viewer ist nur lesen; andere Seiten schreiben Formel oder xlsx.")],
    }[lang]
    uc = {
        "ar": ["واجب صف.", "مسودة سريعة.", "تحقق قبل اللصق في إكسل."],
        "pt": ["Trabalho de aula.", "Rascunho rápido.", "Conferir antes de colar no Excel."],
        "id": ["Tugas kelas.", "Draf cepat.", "Cek sebelum tempel ke Excel."],
        "fr": ["Devoir.", "Brouillon rapide.", "Vérifier avant de coller dans Excel."],
        "ru": ["Классная работа.", "Быстрый черновик.", "Проверить перед вставкой в Excel."],
        "de": ["Hausaufgabe.", "Schneller Entwurf.", "Prüfen vor dem Einfügen in Excel."],
    }[lang]
    article = {
        "ar": f"أنجز {job} في المتصفح دون رفع.",
        "pt": f"Faça {job} no navegador, sem enviar ao servidor.",
        "id": f"Kerjakan {job} di browser, tanpa unggah ke server.",
        "fr": f"Faites {job} dans le navigateur, sans envoi au serveur.",
        "ru": f"Сделайте {job} в браузере, без загрузки на сервер.",
        "de": f"{job[:1].upper() + job[1:]} im Browser, ohne Server-Upload.",
    }[lang]
    example = _EXAMPLE_BY_SLUG[slug]
    d = _pack(article, how, rules, example, uc, faqs)
    if slug == "create-invoice-spreadsheet":
        d["disclaimer"] = DISCLAIM["invoice"][lang]
    if slug == "create-budget-spreadsheet":
        d["disclaimer"] = DISCLAIM["budget"][lang]
    return d
