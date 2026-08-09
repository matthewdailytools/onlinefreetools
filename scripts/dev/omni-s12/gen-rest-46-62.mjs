/**
 * Omni §12 tools #46–#62：写入 scripts/dev/omni-s12/tools/*.mjs 定义。
 * 用法（仓库根目录）：node scripts/dev/omni-s12/gen-rest-46-62.mjs
 *
 * 每个工具一次 shipDef({...})；zh/ja/欧语标签用下方辅助函数组装。
 */
import { T, shipDef } from './_helpers-ship.mjs';

/** 欧语 howMaps / exMaps。 */
const M = (es, ar, pt, id, fr, ru, de) => ({ es, ar, pt, id, fr, ru, de });

/**
 * 由「键 → 七语数组」生成 labelMaps（es/ar/pt/id/fr/ru/de）。
 * @param {Record<string, string[]>} rows
 */
function euroL(rows) {
	const langs = ['es', 'ar', 'pt', 'id', 'fr', 'ru', 'de'];
	const out = Object.fromEntries(langs.map((l) => [l, {}]));
	for (const [key, arr] of Object.entries(rows)) {
		langs.forEach((l, i) => {
			out[l][key] = arr[i];
		});
	}
	return out;
}

/**
 * 组装中文 locale 块。
 * @param {object} p 文案字段
 */
function zhPack(p) {
	return {
		labels: p.labels,
		result_note: p.result_note,
		err_generic: p.err_generic,
		how_body: p.how_body,
		formula_body: p.formula_body,
		fi1: p.fi1,
		fi2: p.fi2,
		fi3: p.fi3,
		example: p.example,
		uc1: p.uc1,
		uc2: p.uc2,
		uc3: p.uc3,
		faq: p.faq,
		article: p.article,
		topic: p.topic,
		ref_a: p.ref_a,
		ref_b: p.ref_b,
	};
}

/** 组装日文 locale 块（字段同 zhPack）。 */
function jaPack(p) {
	return zhPack(p);
}

// #46 age
shipDef({
  seq: 46,
  file: "age.mjs",
  slug: "how-to-calculate-age",
  prefix: "tool_age",
  pageFile: "howToCalculateAgePage",
  pageExport: "renderHowToCalculateAgePage",
  nameZh: "年龄计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-date-difference", "how-to-calculate-tip"],
  anchor: "age",
  glyph: "M8 8h16v4H8zm4 6h8v8h-8z",
  sampleHint: "birth 2000-01-01 asof 2026-08-09 → 26y 7m 8d",
  topic: "age",
  titles: T("Age Calculator — Chronological Age from Birthdate", "年龄计算器 — 由出生日期算周岁", "Calculadora de edad desde el nacimiento", "حاسبة العمر من تاريخ الميلاد", "Calculadora de idade a partir do nascimento", "Kalkulator usia dari tanggal lahir", "Calculateur d’âge depuis la naissance", "年齢計算ツール — 生年月日から満年齢", "Калькулятор возраста от даты рождения", "Altersrechner — Alter aus Geburtsdatum"),
  descriptions: T("Calculate calendar age from a birth date and an as-of date (UTC YYYY-MM-DD). Sample: born 2000-01-01 as of 2026-08-09 → 26 years, 7 months, 8 days. Browser-only.", "按出生日期与截止日期（UTC YYYY-MM-DD）计算日历年龄。示例：2000-01-01 出生、截至 2026-08-09 → 26 岁 7 个月 8 天。浏览器本地计算，数据不上传。", "Calcula la edad calendario desde nacimiento y fecha de corte (UTC). Ejemplo: 2000-01-01 a 2026-08-09 → 26 años, 7 meses, 8 días.", "احسب العمر التقويمي من تاريخ الميلاد وتاريخ القطع (UTC). مثال: 2000-01-01 حتى 2026-08-09 → 26 سنة و7 أشهر و8 أيام.", "Calcule a idade calendário a partir do nascimento e da data de referência (UTC). Exemplo: 2000-01-01 até 2026-08-09 → 26 anos, 7 meses, 8 dias.", "Hitung usia kalender dari tanggal lahir dan tanggal acuan (UTC). Contoh: 2000-01-01 s/d 2026-08-09 → 26 tahun, 7 bulan, 8 hari.", "Calculez l’âge calendaire à partir de la naissance et d’une date de référence (UTC). Exemple : 2000-01-01 au 2026-08-09 → 26 ans, 7 mois, 8 jours.", "生年月日と基準日（UTC YYYY-MM-DD）から暦年齢を計算します。例：2000-01-01 生まれ、2026-08-09 時点 → 26歳7か月8日。ブラウザ内計算です。", "Считайте календарный возраст от даты рождения и даты отсчёта (UTC). Пример: 2000-01-01 на 2026-08-09 → 26 лет, 7 месяцев, 8 дней.", "Kalenderalter aus Geburts- und Stichtag (UTC). Beispiel: geboren 2000-01-01, Stichtag 2026-08-09 → 26 Jahre, 7 Monate, 8 Tage."),
  enCore: {
    labelsBase: {birth_label:"Birth date",asof_label:"As-of date",yearsOut_label:"Years",monthsOut_label:"Months",daysOut_label:"Days",totalDaysOut_label:"Total days"},
    result_note: "Calendar age in years / months / days using UTC calendar dates (not clock time).",
    err_generic: "Enter valid YYYY-MM-DD dates; as-of must be on or after birth.",
    how_body: "Pick a birth date and an as-of date. Age is the calendar difference (years, then leftover months and days), plus total whole days between the dates.",
    formula_body: "Parse YYYY-MM-DD as UTC midnight. Subtract calendar components with month/day borrow; totalDays = (asof−birth)/86400000. Notes:",
    fi1: "Uses calendar months, not a fixed 30-day month.",
    fi2: "Ignores local timezone offsets by using UTC date parts.",
    fi3: "Leap days affect day totals when they fall in the interval.",
    example: "Example: birth 2000-01-01, as-of 2026-08-09 → 26 years, 7 months, 8 days.",
    uc1: "Forms that need age in Y/M/D.",
    uc2: "Homework on calendar differences.",
    uc3: "Pair with date-difference for span drills.",
    article: "Calendar age",
    ref_a: "Wikipedia — Ageing",
    ref_b: "Wikipedia — Calendar date",
    faq: [["Sample?","2000-01-01 to 2026-08-09 → 26y 7m 8d."],["Timezone?","Dates are treated as UTC calendar days."],["Future birth?","As-of must be ≥ birth."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {birth_label:"出生日期",asof_label:"截止日期",yearsOut_label:"岁（年）",monthsOut_label:"月",daysOut_label:"天",totalDaysOut_label:"总天数"},
  result_note: "按 UTC 日历日期计算岁/月/天。",
  err_generic: "请填写有效 YYYY-MM-DD；截止 ≥ 出生。",
  how_body: "填写出生与截止日期，输出岁/月/天与总天数。",
  formula_body: "UTC 解析后借位相减。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：2000-01-01 → 2026-08-09 = 26岁7月8天。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：2000-01-01 → 2026-08-09 = 26岁7月8天。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "日历年龄",
  topic: "年龄",
  ref_a: "Wikipedia — Ageing",
  ref_b: "Wikipedia — Calendar date",
}),
  ja: jaPack({
  labels: {birth_label:"生年月日",asof_label:"基準日",yearsOut_label:"年",monthsOut_label:"月",daysOut_label:"日",totalDaysOut_label:"総日数"},
  result_note: "UTC暦日で年/月/日。",
  err_generic: "有効なYYYY-MM-DD。基準日≥生年月日。",
  how_body: "生年月日と基準日を入力。",
  formula_body: "UTC解釈し借りて減算。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：2000-01-01 → 2026-08-09 = 26歳7か月8日。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：2000-01-01 → 2026-08-09 = 26歳7か月8日。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "暦年齢",
  topic: "年齢",
  ref_a: "Wikipedia — Ageing",
  ref_b: "Wikipedia — Calendar date",
}),
  labelMaps: euroL({
  birth_label: ["Fecha de nacimiento", "تاريخ الميلاد", "Data de nascimento", "Tanggal lahir", "Date de naissance", "Дата рождения", "Geburtsdatum"],
  asof_label: ["Fecha de corte", "تاريخ القطع", "Data de referência", "Tanggal acuan", "Date de référence", "Дата отсчёта", "Stichtag"],
  yearsOut_label: ["Años", "سنوات", "Anos", "Tahun", "Années", "Годы", "Jahre"],
  monthsOut_label: ["Meses", "أشهر", "Meses", "Bulan", "Mois", "Месяцы", "Monate"],
  daysOut_label: ["Días", "أيام", "Dias", "Hari", "Jours", "Дни", "Tage"],
  totalDaysOut_label: ["Días totales", "إجمالي الأيام", "Dias totais", "Total hari", "Jours totaux", "Всего дней", "Tage gesamt"]
}),
  howMaps: M("Introduce nacimiento y fecha de corte.", "أدخل تاريخ الميلاد وتاريخ القطع.", "Informe nascimento e data de referência.", "Isi tanggal lahir dan tanggal acuan.", "Saisissez naissance et date de référence.", "Введите дату рождения и дату отсчёта.", "Geburts- und Stichtag eingeben."),
  exMaps: M("Ejemplo: 26a 7m 8d.", "مثال: 26س 7ش 8ي.", "Exemplo: 26a 7m 8d.", "Contoh: 26t 7b 8h.", "Exemple : 26a 7m 8j.", "Пример: 26л 7м 8д.", "Beispiel: 26J 7M 8T."),
  fields: [{"id": "birth", "type": "date", "half": true, "labelKey": "birth_label"}, {"id": "asof", "type": "date", "half": true, "labelKey": "asof_label"}],
  results: [{"id": "yearsOut", "labelKey": "yearsOut_label"}, {"id": "monthsOut", "labelKey": "monthsOut_label"}, {"id": "daysOut", "labelKey": "daysOut_label"}, {"id": "totalDaysOut", "labelKey": "totalDaysOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Ageing"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Calendar_date"}],
  computeJs: `
        function parseYMD(s){
          var m=/^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(String(s||'').trim());
          if(!m) return null;
          var y=+m[1], mo=+m[2]-1, d=+m[3];
          var dt=new Date(Date.UTC(y,mo,d));
          if(dt.getUTCFullYear()!==y||dt.getUTCMonth()!==mo||dt.getUTCDate()!==d) return null;
          return dt;
        }
        var birth=parseYMD(birthEl.value), asof=parseYMD(asofEl.value);
        if(!birth||!asof||asof.getTime()<birth.getTime()) return {ok:false,error:msgErr};
        var years=asof.getUTCFullYear()-birth.getUTCFullYear();
        var months=asof.getUTCMonth()-birth.getUTCMonth();
        var days=asof.getUTCDate()-birth.getUTCDate();
        if(days<0){
          months--;
          var prev=new Date(Date.UTC(asof.getUTCFullYear(), asof.getUTCMonth(), 0));
          days+=prev.getUTCDate();
        }
        if(months<0){ years--; months+=12; }
        var totalDays=Math.round((asof.getTime()-birth.getTime())/86400000);
        return {ok:true, values:{ yearsOut:String(years), monthsOut:String(months), daysOut:String(days), totalDaysOut:String(totalDays) }};
`,
  sampleJs: `
        birthEl.value='2000-01-01';
        asofEl.value='2026-08-09';
`,
});

// #47 date-difference
shipDef({
  seq: 47,
  file: "date-difference.mjs",
  slug: "how-to-calculate-date-difference",
  prefix: "tool_date_difference",
  pageFile: "howToCalculateDateDifferencePage",
  pageExport: "renderHowToCalculateDateDifferencePage",
  nameZh: "日期间隔计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-age", "how-to-calculate-tip"],
  anchor: "date-difference",
  glyph: "M6 8h20v4H6zm2 8h8v8H8zm10 0h8v8h-8z",
  sampleHint: "2024-01-01 to 2024-01-11 → 10 days",
  topic: "date difference",
  titles: T("Date Difference Calculator — Days and Weeks", "日期间隔计算器 — 天数与周数", "Calculadora de diferencia de fechas", "حاسبة الفرق بين تاريخين", "Calculadora de diferença entre datas", "Kalkulator selisih tanggal", "Calculateur d’écart entre dates", "日付差計算ツール — 日数と週", "Калькулятор разницы дат", "Datums-Differenz-Rechner"),
  descriptions: T("Find whole days and weeks between two UTC calendar dates. Sample: 2024-01-01 to 2024-01-11 → 10 days. Browser-only arithmetic.", "计算两个 UTC 日历日之间的整天数与周数。示例：2024-01-01 到 2024-01-11 → 10 天。浏览器本地计算，数据不上传。", "Calcula días y semanas entre dos fechas UTC. Ejemplo: 2024-01-01 a 2024-01-11 → 10 días.", "احسب الأيام والأسابيع بين تاريخين UTC. مثال: من 2024-01-01 إلى 2024-01-11 → 10 أيام.", "Calcule dias e semanas entre duas datas UTC. Exemplo: 2024-01-01 a 2024-01-11 → 10 dias.", "Hitung hari dan minggu antara dua tanggal UTC. Contoh: 2024-01-01 ke 2024-01-11 → 10 hari.", "Calculez jours et semaines entre deux dates UTC. Exemple : 2024-01-01 au 2024-01-11 → 10 jours.", "2つのUTC暦日間の日数と週数を計算します。例：2024-01-01から2024-01-11 → 10日。ブラウザ内計算です。", "Считайте дни и недели между двумя датами UTC. Пример: 2024-01-01 — 2024-01-11 → 10 дней.", "Tage und Wochen zwischen zwei UTC-Daten. Beispiel: 2024-01-01 bis 2024-01-11 → 10 Tage."),
  enCore: {
    labelsBase: {start_label:"Start date",end_label:"End date",daysOut_label:"Days",weeksOut_label:"Weeks"},
    result_note: "Days = |end−start| in whole UTC days; weeks = days / 7.",
    err_generic: "Enter two valid YYYY-MM-DD dates.",
    how_body: "Enter start and end dates. The tool reports absolute whole days between them and days/7 as weeks.",
    formula_body: "Parse UTC YYYY-MM-DD; days = round(|end−start|/86400000); weeks = days/7. Notes:",
    fi1: "Order does not matter for the absolute span.",
    fi2: "Clock time is ignored — calendar dates only.",
    fi3: "Pair with the age tool for Y/M/D breakdowns.",
    example: "Example: 2024-01-01 to 2024-01-11 → 10 days.",
    uc1: "Project duration sketches.",
    uc2: "Homework on day counts.",
    uc3: "Compare with age for calendar age.",
    article: "Date difference",
    ref_a: "Wikipedia — ISO 8601",
    ref_b: "Wikipedia — Calendar date",
    faq: [["Sample?","2024-01-01 → 2024-01-11 = 10 days."],["Signed?","We report absolute days."],["Timezones?","UTC calendar days."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {start_label:"开始日期",end_label:"结束日期",daysOut_label:"天数",weeksOut_label:"周数"},
  result_note: "结果按日期间隔公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算日期间隔。",
  formula_body: "日期间隔相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：2024-01-01 到 2024-01-11 → 10 天。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：2024-01-01 到 2024-01-11 → 10 天。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "日期间隔",
  topic: "日期间隔",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {start_label:"開始日",end_label:"終了日",daysOut_label:"日数",weeksOut_label:"週数"},
  result_note: "日付差の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて日付差を計算します。",
  formula_body: "日付差の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：2024-01-01〜2024-01-11 → 10日。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：2024-01-01〜2024-01-11 → 10日。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "日付差",
  topic: "日付差",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  start_label: ["Fecha inicio", "تاريخ البداية", "Data inicial", "Tanggal mulai", "Date de début", "Дата начала", "Startdatum"],
  end_label: ["Fecha fin", "تاريخ النهاية", "Data final", "Tanggal akhir", "Date de fin", "Дата конца", "Enddatum"],
  daysOut_label: ["Días", "أيام", "Dias", "Hari", "Jours", "Дни", "Tage"],
  weeksOut_label: ["Semanas", "أسابيع", "Semanas", "Minggu", "Semaines", "Недели", "Wochen"]
}),
  howMaps: M("Introduce fechas de inicio y fin.", "أدخل تاريخ البداية والنهاية.", "Informe datas inicial e final.", "Isi tanggal mulai dan akhir.", "Saisissez début et fin.", "Введите даты начала и конца.", "Start- und Enddatum eingeben."),
  exMaps: M("Ejemplo: 10 días.", "مثال: 10 أيام.", "Exemplo: 10 dias.", "Contoh: 10 hari.", "Exemple : 10 jours.", "Пример: 10 дней.", "Beispiel: 10 Tage."),
  fields: [{"id": "start", "type": "date", "half": true, "labelKey": "start_label"}, {"id": "end", "type": "date", "half": true, "labelKey": "end_label"}],
  results: [{"id": "daysOut", "labelKey": "daysOut_label"}, {"id": "weeksOut", "labelKey": "weeksOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/ISO_8601"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Calendar_date"}],
  computeJs: `
        function parseYMD(s){
          var m=/^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(String(s||'').trim());
          if(!m) return null;
          var y=+m[1], mo=+m[2]-1, d=+m[3];
          var dt=new Date(Date.UTC(y,mo,d));
          if(dt.getUTCFullYear()!==y||dt.getUTCMonth()!==mo||dt.getUTCDate()!==d) return null;
          return dt;
        }
        var a=parseYMD(startEl.value), b=parseYMD(endEl.value);
        if(!a||!b) return {ok:false,error:msgErr};
        var days=Math.round(Math.abs(b.getTime()-a.getTime())/86400000);
        return {ok:true, values:{ daysOut:String(days), weeksOut:fmt(days/7) }};
`,
  sampleJs: `
        startEl.value='2024-01-01';
        endEl.value='2024-01-11';
`,
});

// #48 mean
shipDef({
  seq: 48,
  file: "mean.mjs",
  slug: "how-to-calculate-mean",
  prefix: "tool_mean",
  pageFile: "howToCalculateMeanPage",
  pageExport: "renderHowToCalculateMeanPage",
  nameZh: "平均数计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-median", "how-to-calculate-standard-deviation"],
  anchor: "mean",
  glyph: "M8 8h16v4H8zm4 8h8v8h-8z",
  sampleHint: "1,2,3,4,5 arithmetic → 3",
  topic: "mean",
  titles: T("Mean Calculator — Average of a Number List", "平均数计算器 — 列表均值", "Calculadora de media", "حاسبة المتوسط", "Calculadora de média", "Kalkulator rata-rata", "Calculateur de moyenne", "平均の計算ツール — 相加/相乗/調和", "Калькулятор среднего", "Mittelwert-Rechner"),
  descriptions: T("Compute arithmetic, geometric, or harmonic mean from a number list. Sample: 1,2,3,4,5 arithmetic → 3. Browser-only.", "对数字列表计算算术、几何或调和平均数。示例：1,2,3,4,5 算术平均 → 3。浏览器本地计算，数据不上传。", "Calcula media aritmética, geométrica o armónica. Ejemplo: 1,2,3,4,5 → 3.", "احسب المتوسط الحسابي أو الهندسي أو التوافقي. مثال: 1,2,3,4,5 → 3.", "Calcule média aritmética, geométrica ou harmônica. Exemplo: 1,2,3,4,5 → 3.", "Hitung mean aritmetika, geometris, atau harmonik. Contoh: 1,2,3,4,5 → 3.", "Calculez moyenne arithmétique, géométrique ou harmonique. Exemple : 1,2,3,4,5 → 3.", "数値リストの相加・相乗・調和平均を計算します。例：1,2,3,4,5 の相加平均 → 3。ブラウザ内計算です。", "Считайте среднее арифметическое, геометрическое или гармоническое. Пример: 1,2,3,4,5 → 3.", "Arithmetisches, geometrisches oder harmonisches Mittel. Beispiel: 1,2,3,4,5 → 3."),
  enCore: {
    labelsBase: {nums_label:"Numbers",nums_ph:"e.g. 1,2,3,4,5",type_label:"Mean type",type_arithmetic:"Arithmetic",type_geometric:"Geometric",type_harmonic:"Harmonic",meanOut_label:"Mean"},
    result_note: "Arithmetic: sum/n. Geometric: (Πxi)^(1/n) (all > 0). Harmonic: n / Σ(1/xi) (none zero).",
    err_generic: "Enter a non-empty number list; check type constraints.",
    how_body: "Paste numbers separated by commas or spaces, choose arithmetic / geometric / harmonic, then calculate.",
    formula_body: "Ā = (Σx)/n; G = (Πx)^(1/n); H = n / Σ(1/x). Notes:",
    fi1: "Geometric mean needs every value > 0.",
    fi2: "Harmonic mean rejects zeros.",
    fi3: "Pair with median / SD tools for distribution drills.",
    example: "Example: 1,2,3,4,5 arithmetic → 3.",
    uc1: "Homework averages.",
    uc2: "Quick dataset center.",
    uc3: "Compare with median.",
    article: "Means",
    ref_a: "Wikipedia — Mean",
    ref_b: "Wikipedia — Average",
    faq: [["Sample?","1–5 arithmetic → 3."],["Geometric of negatives?","Not defined here."],["Empty list?","Rejected."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {nums_label:"数字列表",nums_ph:"例如 1,2,3,4,5",type_label:"平均类型",type_arithmetic:"算术平均",type_geometric:"几何平均",type_harmonic:"调和平均",meanOut_label:"平均数"},
  result_note: "结果按平均数公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算平均数。",
  formula_body: "平均数相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：1,2,3,4,5 算术平均 → 3。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：1,2,3,4,5 算术平均 → 3。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "平均数",
  topic: "平均数",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {nums_label:"数値リスト",nums_ph:"例 1,2,3,4,5",type_label:"平均の種類",type_arithmetic:"相加平均",type_geometric:"相乗平均",type_harmonic:"調和平均",meanOut_label:"平均"},
  result_note: "平均の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて平均を計算します。",
  formula_body: "平均の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：1,2,3,4,5 の相加平均 → 3。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：1,2,3,4,5 の相加平均 → 3。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "平均",
  topic: "平均",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  nums_label: ["Números", "الأرقام", "Números", "Angka", "Nombres", "Числа", "Zahlen"],
  nums_ph: ["p. ej. 1,2,3,4,5", "مثال 1,2,3,4,5", "ex. 1,2,3,4,5", "mis. 1,2,3,4,5", "ex. 1,2,3,4,5", "напр. 1,2,3,4,5", "z. B. 1,2,3,4,5"],
  type_label: ["Tipo", "النوع", "Tipo", "Jenis", "Type", "Тип", "Typ"],
  type_arithmetic: ["Aritmética", "حسابي", "Aritmética", "Aritmetika", "Arithmétique", "Арифметическое", "Arithmetisch"],
  type_geometric: ["Geométrica", "هندسي", "Geométrica", "Geometris", "Géométrique", "Геометрическое", "Geometrisch"],
  type_harmonic: ["Armónica", "توافقي", "Harmônica", "Harmonik", "Harmonique", "Гармоническое", "Harmonisch"],
  meanOut_label: ["Media", "المتوسط", "Média", "Rata-rata", "Moyenne", "Среднее", "Mittelwert"]
}),
  howMaps: M("Pega números y elige el tipo.", "الصق الأرقام واختر النوع.", "Cole números e escolha o tipo.", "Tempel angka dan pilih jenis.", "Collez des nombres et choisissez le type.", "Вставьте числа и выберите тип.", "Zahlen einfügen und Typ wählen."),
  exMaps: M("Ejemplo: 1–5 → 3.", "مثال: 1–5 → 3.", "Exemplo: 1–5 → 3.", "Contoh: 1–5 → 3.", "Exemple : 1–5 → 3.", "Пример: 1–5 → 3.", "Beispiel: 1–5 → 3."),
  fields: [{"id": "nums", "type": "textarea", "labelKey": "nums_label", "phKey": "nums_ph", "rows": 4}, {"id": "type", "type": "select", "half": true, "labelKey": "type_label", "options": [{"value": "arithmetic", "labelKey": "type_arithmetic", "selected": true}, {"value": "geometric", "labelKey": "type_geometric"}, {"value": "harmonic", "labelKey": "type_harmonic"}]}],
  results: [{"id": "meanOut", "labelKey": "meanOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Mean"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Average"}],
  computeJs: `
        var raw=String(numsEl.value||'');
        var parts=raw.split(/[\\s,;]+/).map(function(s){return s.trim();}).filter(Boolean);
        var xs=parts.map(parseFloat);
        if(!xs.length||xs.some(function(x){return !Number.isFinite(x);})) return {ok:false,error:msgErr};
        var n=xs.length, kind=typeEl.value, mean;
        if(kind==='geometric'){
          if(xs.some(function(x){return !(x>0);})) return {ok:false,error:msgErr};
          var logSum=0; for(var i=0;i<n;i++) logSum+=Math.log(xs[i]);
          mean=Math.exp(logSum/n);
        } else if(kind==='harmonic'){
          if(xs.some(function(x){return x===0||!Number.isFinite(1/x);})) return {ok:false,error:msgErr};
          var inv=0; for(var j=0;j<n;j++) inv+=1/xs[j];
          mean=n/inv;
        } else {
          var sum=0; for(var k=0;k<n;k++) sum+=xs[k];
          mean=sum/n;
        }
        return {ok:true, values:{ meanOut:fmt(mean) }};
`,
  sampleJs: `
        numsEl.value='1,2,3,4,5';
        typeEl.value='arithmetic';
`,
});

// #49 median
shipDef({
  seq: 49,
  file: "median.mjs",
  slug: "how-to-calculate-median",
  prefix: "tool_median",
  pageFile: "howToCalculateMedianPage",
  pageExport: "renderHowToCalculateMedianPage",
  nameZh: "中位数与众数计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-mean", "how-to-calculate-standard-deviation"],
  anchor: "median",
  glyph: "M8 10h16v2H8zm2 6h12v6H10z",
  sampleHint: "1,2,2,3,4 → median 2 mode 2",
  topic: "median",
  titles: T("Median and Mode Calculator", "中位数与众数计算器", "Calculadora de mediana y moda", "حاسبة الوسيط والمنوال", "Calculadora de mediana e moda", "Kalkulator median dan modus", "Calculateur de médiane et mode", "中央値と最頻値の計算ツール", "Калькулятор медианы и моды", "Median- und Modalwert-Rechner"),
  descriptions: T("Find the median and mode of a number list. Sample: 1,2,2,3,4 → median 2, mode 2. Browser-only.", "计算数字列表的中位数与众数。示例：1,2,2,3,4 → 中位数 2、众数 2。浏览器本地计算，数据不上传。", "Calcula mediana y moda. Ejemplo: 1,2,2,3,4 → mediana 2, moda 2.", "احسب الوسيط والمنوال. مثال: 1,2,2,3,4 → وسيط 2 ومنوال 2.", "Calcule mediana e moda. Exemplo: 1,2,2,3,4 → mediana 2, moda 2.", "Hitung median dan modus. Contoh: 1,2,2,3,4 → median 2, modus 2.", "Calculez médiane et mode. Exemple : 1,2,2,3,4 → médiane 2, mode 2.", "数値リストの中央値と最頻値を計算します。例：1,2,2,3,4 → 中央値2、最頻値2。", "Считайте медиану и моду. Пример: 1,2,2,3,4 → медиана 2, мода 2.", "Median und Modalwert. Beispiel: 1,2,2,3,4 → Median 2, Modus 2."),
  enCore: {
    labelsBase: {nums_label:"Numbers",nums_ph:"e.g. 1,2,2,3,4",medianOut_label:"Median",modeOut_label:"Mode"},
    result_note: "Sort values; median is middle (or average of two middles). Mode is the most frequent value (ties: smallest).",
    err_generic: "Enter a non-empty number list.",
    how_body: "Paste numbers separated by commas or spaces. The tool reports median and a single mode.",
    formula_body: "Sort x; odd n → x[(n+1)/2]; even → average of two central. Mode = argmax frequency. Notes:",
    fi1: "Even-length median uses the mean of the two central values.",
    fi2: "If all frequencies tie, mode is the smallest value.",
    fi3: "Pair with mean / SD tools.",
    example: "Example: 1,2,2,3,4 → median 2, mode 2.",
    uc1: "Homework median/mode.",
    uc2: "Quick center vs peak.",
    uc3: "Compare with mean.",
    article: "Median and mode",
    ref_a: "Wikipedia — Median",
    ref_b: "Wikipedia — Mode",
    faq: [["Sample?","1,2,2,3,4 → 2 and 2."],["Multimodal?","We return one mode (smallest among ties)."],["Empty?","Rejected."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {nums_label:"数字列表",nums_ph:"例如 1,2,2,3,4",medianOut_label:"中位数",modeOut_label:"众数"},
  result_note: "结果按中位数公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算中位数。",
  formula_body: "中位数相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：1,2,2,3,4 → 中位 2、众数 2。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：1,2,2,3,4 → 中位 2、众数 2。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "中位数",
  topic: "中位数",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {nums_label:"数値リスト",nums_ph:"例 1,2,2,3,4",medianOut_label:"中央値",modeOut_label:"最頻値"},
  result_note: "中央値の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて中央値を計算します。",
  formula_body: "中央値の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：1,2,2,3,4 → 中央値2、最頻値2。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：1,2,2,3,4 → 中央値2、最頻値2。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "中央値",
  topic: "中央値",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  nums_label: ["Números", "الأرقام", "Números", "Angka", "Nombres", "Числа", "Zahlen"],
  nums_ph: ["p. ej. 1,2,2,3,4", "مثال 1,2,2,3,4", "ex. 1,2,2,3,4", "mis. 1,2,2,3,4", "ex. 1,2,2,3,4", "напр. 1,2,2,3,4", "z. B. 1,2,2,3,4"],
  medianOut_label: ["Mediana", "الوسيط", "Mediana", "Median", "Médiane", "Медиана", "Median"],
  modeOut_label: ["Moda", "المنوال", "Moda", "Modus", "Mode", "Мода", "Modalwert"]
}),
  howMaps: M("Pega la lista de números.", "الصق قائمة الأرقام.", "Cole a lista de números.", "Tempel daftar angka.", "Collez la liste.", "Вставьте список чисел.", "Zahlenliste einfügen."),
  exMaps: M("Ejemplo: mediana 2, moda 2.", "مثال: وسيط 2 ومنوال 2.", "Exemplo: mediana 2, moda 2.", "Contoh: median 2, modus 2.", "Exemple : médiane 2, mode 2.", "Пример: медиана 2, мода 2.", "Beispiel: Median 2, Modus 2."),
  fields: [{"id": "nums", "type": "textarea", "labelKey": "nums_label", "phKey": "nums_ph", "rows": 4}],
  results: [{"id": "medianOut", "labelKey": "medianOut_label"}, {"id": "modeOut", "labelKey": "modeOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Median"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Mode_(statistics)"}],
  computeJs: `
        var raw=String(numsEl.value||'');
        var parts=raw.split(/[\\s,;]+/).map(function(s){return s.trim();}).filter(Boolean);
        var xs=parts.map(parseFloat);
        if(!xs.length||xs.some(function(x){return !Number.isFinite(x);})) return {ok:false,error:msgErr};
        var sorted=xs.slice().sort(function(a,b){return a-b;});
        var n=sorted.length, median;
        if(n%2===1) median=sorted[(n-1)/2];
        else median=(sorted[n/2-1]+sorted[n/2])/2;
        var freq={}, best=sorted[0], bestC=0;
        for(var i=0;i<n;i++){
          var v=sorted[i];
          freq[v]=(freq[v]||0)+1;
          if(freq[v]>bestC||(freq[v]===bestC&&v<best)){ bestC=freq[v]; best=v; }
        }
        return {ok:true, values:{ medianOut:fmt(median), modeOut:fmt(best) }};
`,
  sampleJs: `
        numsEl.value='1,2,2,3,4';
`,
});

// #50 permutation-combination
shipDef({
  seq: 50,
  file: "permutation-combination.mjs",
  slug: "how-to-calculate-permutation-combination",
  prefix: "tool_permutation_combination",
  pageFile: "howToCalculatePermutationCombinationPage",
  pageExport: "renderHowToCalculatePermutationCombinationPage",
  nameZh: "排列组合计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-quadratic-equation", "how-to-calculate-slope"],
  anchor: "permutation-combination",
  glyph: "M8 8h6v6H8zm10 0h6v6h-6zM8 18h16v4H8z",
  sampleHint: "n=5 r=2 → P=20 C=10",
  topic: "permutations and combinations",
  titles: T("Permutation and Combination Calculator", "排列组合计算器 — P 与 C", "Calculadora de permutaciones y combinaciones", "حاسبة التباديل والتوافيق", "Calculadora de permutação e combinação", "Kalkulator permutasi dan kombinasi", "Calculateur de permutations et combinaisons", "順列・組合せの計算ツール", "Калькулятор перестановок и сочетаний", "Permutations- und Kombinationsrechner"),
  descriptions: T("Compute P(n,r) and C(n,r) for integers 0≤r≤n. Sample: n=5, r=2 → P=20, C=10. Browser-only factorials.", "计算排列 P(n,r) 与组合 C(n,r)（0≤r≤n 整数）。示例：n=5、r=2 → P=20、C=10。浏览器本地计算。", "Calcula P(n,r) y C(n,r). Ejemplo: n=5, r=2 → P=20, C=10.", "احسب P(n,r) و C(n,r). مثال: n=5 و r=2 → P=20 و C=10.", "Calcule P(n,r) e C(n,r). Exemplo: n=5, r=2 → P=20, C=10.", "Hitung P(n,r) dan C(n,r). Contoh: n=5, r=2 → P=20, C=10.", "Calculez P(n,r) et C(n,r). Exemple : n=5, r=2 → P=20, C=10.", "整数0≤r≤nの順列Pと組合せCを計算します。例：n=5、r=2 → P=20、C=10。", "Считайте P(n,r) и C(n,r). Пример: n=5, r=2 → P=20, C=10.", "Berechnen Sie P(n,r) und C(n,r). Beispiel: n=5, r=2 → P=20, C=10."),
  enCore: {
    labelsBase: {n_label:"n",n_ph:"e.g. 5",r_label:"r",r_ph:"e.g. 2",pOut_label:"P(n,r)",cOut_label:"C(n,r)"},
    result_note: "P(n,r)=n!/(n−r)!; C(n,r)=n!/(r!(n−r)!). Requires integers 0≤r≤n.",
    err_generic: "Enter integers n≥0 and 0≤r≤n.",
    how_body: "Enter n and r. Factorials are computed iteratively.",
    formula_body: "P = n×(n−1)×…×(n−r+1); C = P / r!. Notes:",
    fi1: "r > n is rejected.",
    fi2: "Non-integers are rejected.",
    fi3: "Pair with quadratic / slope for algebra drills.",
    example: "Example: n=5, r=2 → P=20, C=10.",
    uc1: "Counting problems.",
    uc2: "Homework P/C.",
    uc3: "Compare related algebra tools.",
    article: "Permutations and combinations",
    ref_a: "Wikipedia — Permutation",
    ref_b: "Wikipedia — Combination",
    faq: [["Sample?","5P2=20, 5C2=10."],["r>n?","Invalid."],["Large n?","May lose precision in JS Number."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {n_label:"n",n_ph:"例如 5",r_label:"r",r_ph:"例如 2",pOut_label:"P(n,r)",cOut_label:"C(n,r)"},
  result_note: "结果按排列组合公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算排列组合。",
  formula_body: "排列组合相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：n=5、r=2 → P=20、C=10。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：n=5、r=2 → P=20、C=10。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "排列组合",
  topic: "排列组合",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {n_label:"n",n_ph:"例 5",r_label:"r",r_ph:"例 2",pOut_label:"P(n,r)",cOut_label:"C(n,r)"},
  result_note: "順列・組合せの公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて順列・組合せを計算します。",
  formula_body: "順列・組合せの式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：n=5、r=2 → P=20、C=10。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：n=5、r=2 → P=20、C=10。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "順列・組合せ",
  topic: "順列・組合せ",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  n_label: ["n", "n", "n", "n", "n", "n", "n"],
  n_ph: ["p. ej. 5", "مثال 5", "ex. 5", "mis. 5", "ex. 5", "напр. 5", "z. B. 5"],
  r_label: ["r", "r", "r", "r", "r", "r", "r"],
  r_ph: ["p. ej. 2", "مثال 2", "ex. 2", "mis. 2", "ex. 2", "напр. 2", "z. B. 2"],
  pOut_label: ["P(n,r)", "P(n,r)", "P(n,r)", "P(n,r)", "P(n,r)", "P(n,r)", "P(n,r)"],
  cOut_label: ["C(n,r)", "C(n,r)", "C(n,r)", "C(n,r)", "C(n,r)", "C(n,r)", "C(n,r)"]
}),
  howMaps: M("Introduce n y r.", "أدخل n و r.", "Informe n e r.", "Isi n dan r.", "Saisissez n et r.", "Введите n и r.", "n und r eingeben."),
  exMaps: M("Ejemplo: P=20, C=10.", "مثال: P=20 و C=10.", "Exemplo: P=20, C=10.", "Contoh: P=20, C=10.", "Exemple : P=20, C=10.", "Пример: P=20, C=10.", "Beispiel: P=20, C=10."),
  fields: [{"id": "n", "type": "number", "half": true, "labelKey": "n_label", "phKey": "n_ph"}, {"id": "r", "type": "number", "half": true, "labelKey": "r_label", "phKey": "r_ph"}],
  results: [{"id": "pOut", "labelKey": "pOut_label"}, {"id": "cOut", "labelKey": "cOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Permutation"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Combination"}],
  computeJs: `
        function isInt(x){ return Number.isInteger(x); }
        function fact(k){ var f=1; for(var i=2;i<=k;i++) f*=i; return f; }
        var n=parseFloat(nEl.value), r=parseFloat(rEl.value);
        if(!isInt(n)||!isInt(r)||n<0||r<0||r>n) return {ok:false,error:msgErr};
        var p=1; for(var i=0;i<r;i++) p*= (n-i);
        var c = r===0 ? 1 : p / fact(r);
        return {ok:true, values:{ pOut:fmt(p), cOut:fmt(c) }};
`,
  sampleJs: `
        nEl.value='5';
        rEl.value='2';
`,
});

// #51 quadratic-equation
shipDef({
  seq: 51,
  file: "quadratic-equation.mjs",
  slug: "how-to-calculate-quadratic-equation",
  prefix: "tool_quadratic_equation",
  pageFile: "howToCalculateQuadraticEquationPage",
  pageExport: "renderHowToCalculateQuadraticEquationPage",
  nameZh: "一元二次方程计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-permutation-combination", "how-to-calculate-slope"],
  anchor: "quadratic-equation",
  glyph: "M6 22 L16 6 L26 22",
  sampleHint: "a=1 b=-5 c=6 → roots 2 and 3",
  topic: "quadratic equation",
  titles: T("Quadratic Equation Solver — Roots and Discriminant", "一元二次方程计算器 — 根与判别式", "Resolvedor de ecuación cuadrática", "حلال المعادلة التربيعية", "Resolvedor de equação do 2º grau", "Penyelesai persamaan kuadrat", "Solveur d’équation du second degré", "二次方程式の解 — 根と判別式", "Решатель квадратного уравнения", "Quadratische Gleichung — Wurzeln"),
  descriptions: T("Solve ax²+bx+c=0 for real roots and show the discriminant. Sample: a=1, b=-5, c=6 → roots 2 and 3. Browser-only.", "解 ax²+bx+c=0 的实根并显示判别式。示例：a=1、b=-5、c=6 → 根 2 与 3。浏览器本地计算。", "Resuelve ax²+bx+c=0. Ejemplo: 1, −5, 6 → raíces 2 y 3.", "حل ax²+bx+c=0. مثال: 1 و−5 و6 → الجذور 2 و3.", "Resolva ax²+bx+c=0. Exemplo: 1, −5, 6 → raízes 2 e 3.", "Selesaikan ax²+bx+c=0. Contoh: 1, −5, 6 → akar 2 dan 3.", "Résolvez ax²+bx+c=0. Exemple : 1, −5, 6 → racines 2 et 3.", "ax²+bx+c=0 の実数解と判別式を求めます。例：a=1、b=-5、c=6 → 根 2 と 3。", "Решите ax²+bx+c=0. Пример: 1, −5, 6 → корни 2 и 3.", "Lösen Sie ax²+bx+c=0. Beispiel: 1, −5, 6 → Wurzeln 2 und 3."),
  enCore: {
    labelsBase: {a_label:"a",a_ph:"e.g. 1",b_label:"b",b_ph:"e.g. -5",c_label:"c",c_ph:"e.g. 6",discOut_label:"Discriminant",r1Out_label:"Root 1",r2Out_label:"Root 2"},
    result_note: "Discriminant Δ=b²−4ac. Roots (−b±√Δ)/(2a) when Δ≥0 and a≠0.",
    err_generic: "Enter finite a,b,c with a≠0; real roots require Δ≥0.",
    how_body: "Enter coefficients a, b, c. Complex roots are not listed — when Δ<0 the tool errors.",
    formula_body: "Δ=b²−4ac; x=(−b±√Δ)/(2a). Notes:",
    fi1: "a must be non-zero.",
    fi2: "Δ=0 yields a repeated root.",
    fi3: "Pair with permutation / slope tools.",
    example: "Example: a=1, b=-5, c=6 → roots 2 and 3.",
    uc1: "Homework quadratics.",
    uc2: "Quick root check.",
    uc3: "Algebra drill with related tools.",
    article: "Quadratic equation",
    ref_a: "Wikipedia — Quadratic equation",
    ref_b: "Wikipedia — Discriminant",
    faq: [["Sample?","1,−5,6 → 2 and 3."],["Complex?","Not shown — Δ must be ≥0."],["a=0?","Not a quadratic here."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {a_label:"a",a_ph:"例如 1",b_label:"b",b_ph:"例如 -5",c_label:"c",c_ph:"例如 6",discOut_label:"判别式",r1Out_label:"根 1",r2Out_label:"根 2"},
  result_note: "结果按一元二次方程公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算一元二次方程。",
  formula_body: "一元二次方程相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：a=1、b=-5、c=6 → 2 与 3。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：a=1、b=-5、c=6 → 2 与 3。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "一元二次方程",
  topic: "一元二次方程",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {a_label:"a",a_ph:"例 1",b_label:"b",b_ph:"例 -5",c_label:"c",c_ph:"例 6",discOut_label:"判別式",r1Out_label:"解1",r2Out_label:"解2"},
  result_note: "二次方程式の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて二次方程式を計算します。",
  formula_body: "二次方程式の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：a=1、b=-5、c=6 → 2 と 3。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：a=1、b=-5、c=6 → 2 と 3。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "二次方程式",
  topic: "二次方程式",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  a_label: ["a", "a", "a", "a", "a", "a", "a"],
  a_ph: ["p. ej. 1", "مثال 1", "ex. 1", "mis. 1", "ex. 1", "напр. 1", "z. B. 1"],
  b_label: ["b", "b", "b", "b", "b", "b", "b"],
  b_ph: ["p. ej. -5", "مثال -5", "ex. -5", "mis. -5", "ex. -5", "напр. -5", "z. B. -5"],
  c_label: ["c", "c", "c", "c", "c", "c", "c"],
  c_ph: ["p. ej. 6", "مثال 6", "ex. 6", "mis. 6", "ex. 6", "напр. 6", "z. B. 6"],
  discOut_label: ["Discriminante", "المميز", "Discriminante", "Diskriminan", "Discriminant", "Дискриминант", "Diskriminante"],
  r1Out_label: ["Raíz 1", "الجذر 1", "Raiz 1", "Akar 1", "Racine 1", "Корень 1", "Wurzel 1"],
  r2Out_label: ["Raíz 2", "الجذر 2", "Raiz 2", "Akar 2", "Racine 2", "Корень 2", "Wurzel 2"]
}),
  howMaps: M("Introduce a, b y c.", "أدخل a و b و c.", "Informe a, b e c.", "Isi a, b, dan c.", "Saisissez a, b et c.", "Введите a, b и c.", "a, b und c eingeben."),
  exMaps: M("Ejemplo: raíces 2 y 3.", "مثال: الجذور 2 و3.", "Exemplo: raízes 2 e 3.", "Contoh: akar 2 dan 3.", "Exemple : racines 2 et 3.", "Пример: корни 2 и 3.", "Beispiel: Wurzeln 2 und 3."),
  fields: [{"id": "a", "type": "number", "half": true, "labelKey": "a_label", "phKey": "a_ph"}, {"id": "b", "type": "number", "half": true, "labelKey": "b_label", "phKey": "b_ph"}, {"id": "c", "type": "number", "half": true, "labelKey": "c_label", "phKey": "c_ph"}],
  results: [{"id": "discOut", "labelKey": "discOut_label"}, {"id": "r1Out", "labelKey": "r1Out_label"}, {"id": "r2Out", "labelKey": "r2Out_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Quadratic_equation"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Discriminant"}],
  computeJs: `
        var a=parseFloat(aEl.value), b=parseFloat(bEl.value), c=parseFloat(cEl.value);
        if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||a===0) return {ok:false,error:msgErr};
        var disc=b*b-4*a*c;
        if(disc<0) return {ok:false,error:msgErr};
        var s=Math.sqrt(disc);
        var r1=(-b+s)/(2*a), r2=(-b-s)/(2*a);
        return {ok:true, values:{ discOut:fmt(disc), r1Out:fmt(r1), r2Out:fmt(r2) }};
`,
  sampleJs: `
        aEl.value='1';
        bEl.value='-5';
        cEl.value='6';
`,
});

// #52 triangle-area
shipDef({
  seq: 52,
  file: "triangle-area.mjs",
  slug: "how-to-calculate-triangle-area",
  prefix: "tool_triangle_area",
  pageFile: "howToCalculateTriangleAreaPage",
  pageExport: "renderHowToCalculateTriangleAreaPage",
  nameZh: "三角形面积计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-circle", "how-to-calculate-volume"],
  anchor: "triangle-area",
  glyph: "M16 6 L26 22 L6 22 Z",
  sampleHint: "base 10 height 6 → 30",
  topic: "triangle area",
  titles: T("Triangle Area Calculator", "三角形面积计算器", "Calculadora de área de triángulo", "حاسبة مساحة المثلث", "Calculadora de área do triângulo", "Kalkulator luas segitiga", "Calculateur d’aire de triangle", "三角形の面積計算ツール", "Калькулятор площади треугольника", "Dreiecksflächen-Rechner"),
  descriptions: T("Compute triangle area from base and height (area = base×height/2). Sample: base 10, height 6 → 30. Browser-only.", "按底×高/2 计算三角形面积。示例：底 10、高 6 → 30。浏览器本地计算，数据不上传。", "Calcula el área con base y altura. Ejemplo: 10 y 6 → 30.", "احسب المساحة بالقاعدة والارتفاع. مثال: 10 و6 → 30.", "Calcule a área com base e altura. Exemplo: 10 e 6 → 30.", "Hitung luas dengan alas dan tinggi. Contoh: 10 dan 6 → 30.", "Calculez l’aire avec base et hauteur. Exemple : 10 et 6 → 30.", "底辺×高さ÷2で三角形の面積を計算します。例：底10、高さ6 → 30。", "Считайте площадь по основанию и высоте. Пример: 10 и 6 → 30.", "Fläche aus Grundseite und Höhe. Beispiel: 10 und 6 → 30."),
  enCore: {
    labelsBase: {mode_label:"Mode",mode_bh:"Base × height",base_label:"Base",base_ph:"e.g. 10",height_label:"Height",height_ph:"e.g. 6",areaOut_label:"Area"},
    result_note: "Area = base × height / 2 (base-height mode).",
    err_generic: "Enter base > 0 and height > 0.",
    how_body: "Choose base-height mode, enter base and perpendicular height, then calculate.",
    formula_body: "A = (b×h)/2. Notes:",
    fi1: "Height must be perpendicular to the chosen base.",
    fi2: "Other modes are not included in this page.",
    fi3: "Pair with circle / volume tools.",
    example: "Example: base 10, height 6 → 30.",
    uc1: "Geometry homework.",
    uc2: "Quick area sketch.",
    uc3: "Compare related shape tools.",
    article: "Triangle area",
    ref_a: "Wikipedia — Triangle",
    ref_b: "Wikipedia — Area",
    faq: [["Sample?","10×6/2=30."],["Units?","Same units as inputs squared."],["Oblique?","Still use perpendicular height."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {mode_label:"模式",mode_bh:"底×高",base_label:"底边",base_ph:"例如 10",height_label:"高",height_ph:"例如 6",areaOut_label:"面积"},
  result_note: "结果按三角形面积公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算三角形面积。",
  formula_body: "三角形面积相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：底 10、高 6 → 30。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：底 10、高 6 → 30。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "三角形面积",
  topic: "三角形面积",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {mode_label:"モード",mode_bh:"底×高さ",base_label:"底辺",base_ph:"例 10",height_label:"高さ",height_ph:"例 6",areaOut_label:"面積"},
  result_note: "三角形の面積の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて三角形の面積を計算します。",
  formula_body: "三角形の面積の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：底10、高さ6 → 30。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：底10、高さ6 → 30。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "三角形の面積",
  topic: "三角形の面積",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  mode_label: ["Modo", "الوضع", "Modo", "Mode", "Mode", "Режим", "Modus"],
  mode_bh: ["Base × altura", "قاعدة × ارتفاع", "Base × altura", "Alas × tinggi", "Base × hauteur", "Основание × высота", "Grundseite × Höhe"],
  base_label: ["Base", "القاعدة", "Base", "Alas", "Base", "Основание", "Grundseite"],
  base_ph: ["p. ej. 10", "مثال 10", "ex. 10", "mis. 10", "ex. 10", "напр. 10", "z. B. 10"],
  height_label: ["Altura", "الارتفاع", "Altura", "Tinggi", "Hauteur", "Высота", "Höhe"],
  height_ph: ["p. ej. 6", "مثال 6", "ex. 6", "mis. 6", "ex. 6", "напр. 6", "z. B. 6"],
  areaOut_label: ["Área", "المساحة", "Área", "Luas", "Aire", "Площадь", "Fläche"]
}),
  howMaps: M("Introduce base y altura.", "أدخل القاعدة والارتفاع.", "Informe base e altura.", "Isi alas dan tinggi.", "Saisissez base et hauteur.", "Введите основание и высоту.", "Grundseite und Höhe eingeben."),
  exMaps: M("Ejemplo: área 30.", "مثال: المساحة 30.", "Exemplo: área 30.", "Contoh: luas 30.", "Exemple : aire 30.", "Пример: площадь 30.", "Beispiel: Fläche 30."),
  fields: [{"id": "mode", "type": "select", "half": true, "labelKey": "mode_label", "options": [{"value": "bh", "labelKey": "mode_bh", "selected": true}]}, {"id": "base", "type": "number", "half": true, "labelKey": "base_label", "phKey": "base_ph"}, {"id": "height", "type": "number", "half": true, "labelKey": "height_label", "phKey": "height_ph"}],
  results: [{"id": "areaOut", "labelKey": "areaOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Triangle"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Area"}],
  computeJs: `
        var base=parseFloat(baseEl.value), height=parseFloat(heightEl.value);
        if(!(base>0)||!(height>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ areaOut:fmt(base*height/2) }};
`,
  sampleJs: `
        modeEl.value='bh';
        baseEl.value='10';
        heightEl.value='6';
`,
});

// #53 circle
shipDef({
  seq: 53,
  file: "circle.mjs",
  slug: "how-to-calculate-circle",
  prefix: "tool_circle",
  pageFile: "howToCalculateCirclePage",
  pageExport: "renderHowToCalculateCirclePage",
  nameZh: "圆面积与周长计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-triangle-area", "how-to-calculate-volume"],
  anchor: "circle",
  glyph: "M16 6a10 10 0 1 0 0.001 0",
  sampleHint: "r=7 → area≈153.94 circ≈43.98",
  topic: "circle",
  titles: T("Circle Calculator — Area and Circumference", "圆计算器 — 面积与周长", "Calculadora de círculo", "حاسبة الدائرة", "Calculadora de círculo", "Kalkulator lingkaran", "Calculateur de cercle", "円の計算ツール — 面積と周長", "Калькулятор круга", "Kreisrechner — Fläche und Umfang"),
  descriptions: T("Compute circle area (πr²) and circumference (2πr). Sample: r=7 → area ≈ 153.94, circumference ≈ 43.98. Browser-only.", "计算圆面积 πr² 与周长 2πr。示例：r=7 → 面积约 153.94、周长约 43.98。浏览器本地计算。", "Calcula área πr² y circunferencia 2πr. Ejemplo: r=7 → ≈153.94 / ≈43.98.", "احسب المساحة πr² والمحيط 2πr. مثال: r=7 → ≈153.94 / ≈43.98.", "Calcule área πr² e circunferência 2πr. Exemplo: r=7 → ≈153.94 / ≈43.98.", "Hitung luas πr² dan keliling 2πr. Contoh: r=7 → ≈153.94 / ≈43.98.", "Calculez aire πr² et circonférence 2πr. Exemple : r=7 → ≈153.94 / ≈43.98.", "円の面積πr²と周長2πrを計算します。例：r=7 → 面積約153.94、周長約43.98。", "Считайте площадь πr² и длину 2πr. Пример: r=7 → ≈153.94 / ≈43.98.", "Fläche πr² und Umfang 2πr. Beispiel: r=7 → ≈153.94 / ≈43.98."),
  enCore: {
    labelsBase: {r_label:"Radius",r_ph:"e.g. 7",areaOut_label:"Area",circOut_label:"Circumference"},
    result_note: "Area = πr²; circumference = 2πr (JS Math.PI).",
    err_generic: "Enter radius > 0.",
    how_body: "Enter the radius. Results use the browser Math.PI constant.",
    formula_body: "A=πr²; C=2πr. Notes:",
    fi1: "Diameter is not a separate input — use r = d/2.",
    fi2: "Units are those of r, squared for area.",
    fi3: "Pair with triangle / volume tools.",
    example: "Example: r=7 → area ≈ 153.94, circumference ≈ 43.98.",
    uc1: "Geometry homework.",
    uc2: "Quick circle check.",
    uc3: "Compare related shape tools.",
    article: "Circle area and circumference",
    ref_a: "Wikipedia — Circle",
    ref_b: "Wikipedia — Circumference",
    faq: [["Sample?","r=7 → ≈153.94 and ≈43.98."],["Diameter?","Halve it to get r."],["Exact π?","Uses Math.PI."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {r_label:"半径",r_ph:"例如 7",areaOut_label:"面积",circOut_label:"周长"},
  result_note: "结果按圆公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算圆。",
  formula_body: "圆相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：r=7 → 面积约 153.94、周长约 43.98。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：r=7 → 面积约 153.94、周长约 43.98。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "圆",
  topic: "圆",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {r_label:"半径",r_ph:"例 7",areaOut_label:"面積",circOut_label:"周長"},
  result_note: "円の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて円を計算します。",
  formula_body: "円の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：r=7 → 面積約153.94、周長約43.98。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：r=7 → 面積約153.94、周長約43.98。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "円",
  topic: "円",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  r_label: ["Radio", "نصف القطر", "Raio", "Jari-jari", "Rayon", "Радиус", "Radius"],
  r_ph: ["p. ej. 7", "مثال 7", "ex. 7", "mis. 7", "ex. 7", "напр. 7", "z. B. 7"],
  areaOut_label: ["Área", "المساحة", "Área", "Luas", "Aire", "Площадь", "Fläche"],
  circOut_label: ["Circunferencia", "المحيط", "Circunferência", "Keliling", "Circonférence", "Длина окружности", "Umfang"]
}),
  howMaps: M("Introduce el radio.", "أدخل نصف القطر.", "Informe o raio.", "Isi jari-jari.", "Saisissez le rayon.", "Введите радиус.", "Radius eingeben."),
  exMaps: M("Ejemplo: r=7.", "مثال: r=7.", "Exemplo: r=7.", "Contoh: r=7.", "Exemple : r=7.", "Пример: r=7.", "Beispiel: r=7."),
  fields: [{"id": "r", "type": "number", "half": true, "labelKey": "r_label", "phKey": "r_ph"}],
  results: [{"id": "areaOut", "labelKey": "areaOut_label"}, {"id": "circOut", "labelKey": "circOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Circle"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Circumference"}],
  computeJs: `
        var r=parseFloat(rEl.value);
        if(!(r>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ areaOut:fmt(Math.PI*r*r), circOut:fmt(2*Math.PI*r) }};
`,
  sampleJs: `
        rEl.value='7';
`,
});

// #54 volume
shipDef({
  seq: 54,
  file: "volume.mjs",
  slug: "how-to-calculate-volume",
  prefix: "tool_volume",
  pageFile: "howToCalculateVolumePage",
  pageExport: "renderHowToCalculateVolumePage",
  nameZh: "体积计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-triangle-area", "how-to-calculate-circle"],
  anchor: "volume",
  glyph: "M8 10h16v12H8z",
  sampleHint: "box 2×3×4 → 24",
  topic: "volume",
  titles: T("Volume Calculator — Box and Sphere", "体积计算器 — 长方体与球", "Calculadora de volumen", "حاسبة الحجم", "Calculadora de volume", "Kalkulator volume", "Calculateur de volume", "体積計算ツール — 直方体と球", "Калькулятор объёма", "Volumenrechner — Quader und Kugel"),
  descriptions: T("Compute volume for a box (L×W×H) or sphere (4/3 πr³). Sample: box 2×3×4 → 24. Browser-only.", "计算长方体（长×宽×高）或球（4/3 πr³）体积。示例：长方体 2×3×4 → 24。浏览器本地计算。", "Calcula volumen de caja o esfera. Ejemplo: caja 2×3×4 → 24.", "احسب حجم الصندوق أو الكرة. مثال: صندوق 2×3×4 → 24.", "Calcule volume de caixa ou esfera. Exemplo: caixa 2×3×4 → 24.", "Hitung volume kotak atau bola. Contoh: kotak 2×3×4 → 24.", "Calculez le volume d’une boîte ou d’une sphère. Exemple : boîte 2×3×4 → 24.", "直方体（L×W×H）または球（4/3 πr³）の体積を計算します。例：直方体 2×3×4 → 24。", "Считайте объём ящика или сферы. Пример: ящик 2×3×4 → 24.", "Volumen von Quader oder Kugel. Beispiel: Quader 2×3×4 → 24."),
  enCore: {
    labelsBase: {shape_label:"Shape",shape_box:"Box",shape_sphere:"Sphere",l_label:"Length",l_ph:"e.g. 2",w_label:"Width",w_ph:"e.g. 3",h_label:"Height",h_ph:"e.g. 4",radius_label:"Radius",radius_ph:"e.g. 1",volOut_label:"Volume"},
    result_note: "Box: L×W×H. Sphere: (4/3)πr³.",
    err_generic: "Enter positive dimensions for the selected shape.",
    how_body: "Choose box or sphere. For a box enter L,W,H; for a sphere enter radius.",
    formula_body: "V_box=LWH; V_sphere=4/3 πr³. Notes:",
    fi1: "Unused fields for the other shape are ignored.",
    fi2: "Uses Math.PI for spheres.",
    fi3: "Pair with triangle / circle tools.",
    example: "Example: box L=2, W=3, H=4 → 24.",
    uc1: "Geometry homework.",
    uc2: "Packaging sketch.",
    uc3: "Compare related shape tools.",
    article: "Volume",
    ref_a: "Wikipedia — Volume",
    ref_b: "Wikipedia — Sphere",
    faq: [["Sample?","2×3×4=24."],["Sphere sample?","Enter radius and choose sphere."],["Units?","Cubed units of inputs."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {shape_label:"形状",shape_box:"长方体",shape_sphere:"球",l_label:"长",l_ph:"例如 2",w_label:"宽",w_ph:"例如 3",h_label:"高",h_ph:"例如 4",radius_label:"半径",radius_ph:"例如 1",volOut_label:"体积"},
  result_note: "结果按体积公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算体积。",
  formula_body: "体积相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：长方体 2×3×4 → 24。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：长方体 2×3×4 → 24。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "体积",
  topic: "体积",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {shape_label:"形状",shape_box:"直方体",shape_sphere:"球",l_label:"長さ",l_ph:"例 2",w_label:"幅",w_ph:"例 3",h_label:"高さ",h_ph:"例 4",radius_label:"半径",radius_ph:"例 1",volOut_label:"体積"},
  result_note: "体積の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて体積を計算します。",
  formula_body: "体積の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：直方体 2×3×4 → 24。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：直方体 2×3×4 → 24。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "体積",
  topic: "体積",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  shape_label: ["Forma", "الشكل", "Forma", "Bentuk", "Forme", "Форма", "Form"],
  shape_box: ["Caja", "صندوق", "Caixa", "Kotak", "Boîte", "Ящик", "Quader"],
  shape_sphere: ["Esfera", "كرة", "Esfera", "Bola", "Sphère", "Сфера", "Kugel"],
  l_label: ["Largo", "الطول", "Comprimento", "Panjang", "Longueur", "Длина", "Länge"],
  l_ph: ["p. ej. 2", "مثال 2", "ex. 2", "mis. 2", "ex. 2", "напр. 2", "z. B. 2"],
  w_label: ["Ancho", "العرض", "Largura", "Lebar", "Largeur", "Ширина", "Breite"],
  w_ph: ["p. ej. 3", "مثال 3", "ex. 3", "mis. 3", "ex. 3", "напр. 3", "z. B. 3"],
  h_label: ["Alto", "الارتفاع", "Altura", "Tinggi", "Hauteur", "Высота", "Höhe"],
  h_ph: ["p. ej. 4", "مثال 4", "ex. 4", "mis. 4", "ex. 4", "напр. 4", "z. B. 4"],
  radius_label: ["Radio", "نصف القطر", "Raio", "Jari-jari", "Rayon", "Радиус", "Radius"],
  radius_ph: ["p. ej. 1", "مثال 1", "ex. 1", "mis. 1", "ex. 1", "напр. 1", "z. B. 1"],
  volOut_label: ["Volumen", "الحجم", "Volume", "Volume", "Volume", "Объём", "Volumen"]
}),
  howMaps: M("Elige forma e introduce dimensiones.", "اختر الشكل وأدخل الأبعاد.", "Escolha a forma e as dimensões.", "Pilih bentuk dan isi ukuran.", "Choisissez la forme et les dimensions.", "Выберите форму и размеры.", "Form und Maße wählen."),
  exMaps: M("Ejemplo: caja 24.", "مثال: صندوق 24.", "Exemplo: caixa 24.", "Contoh: kotak 24.", "Exemple : boîte 24.", "Пример: ящик 24.", "Beispiel: Quader 24."),
  fields: [{"id": "shape", "type": "select", "half": true, "labelKey": "shape_label", "options": [{"value": "box", "labelKey": "shape_box", "selected": true}, {"value": "sphere", "labelKey": "shape_sphere"}]}, {"id": "l", "type": "number", "half": true, "labelKey": "l_label", "phKey": "l_ph"}, {"id": "w", "type": "number", "half": true, "labelKey": "w_label", "phKey": "w_ph"}, {"id": "h", "type": "number", "half": true, "labelKey": "h_label", "phKey": "h_ph"}, {"id": "radius", "type": "number", "half": true, "labelKey": "radius_label", "phKey": "radius_ph"}],
  results: [{"id": "volOut", "labelKey": "volOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Volume"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Sphere"}],
  computeJs: `
        var shape=shapeEl.value;
        if(shape==='sphere'){
          var radius=parseFloat(radiusEl.value);
          if(!(radius>0)) return {ok:false,error:msgErr};
          return {ok:true, values:{ volOut:fmt((4/3)*Math.PI*radius*radius*radius) }};
        }
        var L=parseFloat(lEl.value), W=parseFloat(wEl.value), H=parseFloat(hEl.value);
        if(!(L>0)||!(W>0)||!(H>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ volOut:fmt(L*W*H) }};
`,
  sampleJs: `
        shapeEl.value='box';
        lEl.value='2';
        wEl.value='3';
        hEl.value='4';
`,
});

// #55 macros
shipDef({
  seq: 55,
  file: "macros.mjs",
  slug: "how-to-calculate-macros",
  prefix: "tool_macros",
  pageFile: "howToCalculateMacrosPage",
  pageExport: "renderHowToCalculateMacrosPage",
  nameZh: "宏量营养素计算器",
  ymyl: true, health: true,
  related: ["how-to-calculate-heart-rate", "how-to-calculate-bmr-tdee"],
  anchor: "macros",
  glyph: "M8 8h16v4H8zm4 8h8v8h-8z",
  sampleHint: "2000 kcal 30/40/30 → 150/200/66.67 g",
  topic: "macronutrients",
  titles: T("Macro Calculator — Calories to Protein Carb Fat Grams", "宏量营养素计算器 — 热量分配到克数", "Calculadora de macros", "حاسبة المغذيات الكبرى", "Calculadora de macros", "Kalkulator makro", "Calculateur de macros", "マクロ栄養素計算ツール — カロリーからグラムへ", "Калькулятор макронутриентов", "Makro-Rechner — Kalorien in Gramm"),
  descriptions: T("Split daily calories into protein, carb, and fat grams (4 / 4 / 9 kcal per gram). Sample: 2000 kcal at 30/40/30% → 150 g / 200 g / ≈66.67 g. Educational only — not medical advice.", "按热量与比例把蛋白/碳水/脂肪换成克数（每克 4/4/9 kcal）。示例：2000 kcal、30%/40%/30% → 150 g / 200 g / 约 66.67 g。健康教育演示，非医疗建议；浏览器本地计算。", "Reparte calorías en gramos de proteína, carb y grasa (4/4/9). Ejemplo: 2000 a 30/40/30% → 150/200/≈66.67 g. Solo educativo.", "قسّم السعرات إلى جرامات بروتين وكربوهيدرات ودهون (4/4/9). مثال: 2000 بنسبة 30/40/30٪ → 150/200/≈66.67 جم. تعليمي فقط.", "Divida calorias em gramas de proteína, carbo e gordura (4/4/9). Exemplo: 2000 a 30/40/30% → 150/200/≈66.67 g. Apenas educativo.", "Bagi kalori jadi gram protein, karbo, lemak (4/4/9). Contoh: 2000 pada 30/40/30% → 150/200/≈66.67 g. Edukatif saja.", "Répartissez les calories en grammes P/C/L (4/4/9). Exemple : 2000 à 30/40/30 % → 150/200/≈66.67 g. Éducatif seulement.", "カロリーをたんぱく/炭水化物/脂質のグラムに配分（1gあたり4/4/9kcal）。例：2000kcal・30/40/30% → 150/200/約66.67g。学習用であり医療助言ではありません。", "Разделите калории на граммы Б/У/Ж (4/4/9). Пример: 2000 при 30/40/30% → 150/200/≈66.67 г. Только учебно.", "Kalorien in Protein-/Kohlenhydrat-/Fettgramm (4/4/9). Beispiel: 2000 bei 30/40/30% → 150/200/≈66.67 g. Nur Bildung."),
  enCore: {
    labelsBase: {cal_label:"Calories (kcal)",cal_ph:"e.g. 2000",pPct_label:"Protein %",pPct_ph:"e.g. 30",cPct_label:"Carb %",cPct_ph:"e.g. 40",fPct_label:"Fat %",fPct_ph:"e.g. 30",pG_label:"Protein (g)",cG_label:"Carbs (g)",fG_label:"Fat (g)"},
    result_note: "Grams = (kcal × percent/100) ÷ kcal-per-gram (P/C=4, fat=9). Percents should sum to 100.",
    err_generic: "Enter calories > 0 and percents ≥ 0 that sum to 100.",
    how_body: "Enter daily calories and protein/carb/fat percents. This is textbook energy arithmetic, not a meal plan.",
    formula_body: "g_P = kcal×p%/4; g_C = kcal×c%/4; g_F = kcal×f%/9. Notes:",
    fi1: "Percents must sum to 100 (± tiny float).",
    fi2: "Not individualized nutrition therapy.",
    fi3: "Pair with heart-rate / BMR–TDEE tools for education.",
    example: "Example: 2000 kcal at 30/40/30% → 150 g protein, 200 g carbs, ≈66.67 g fat.",
    uc1: "Classroom macro math.",
    uc2: "Compare percent splits.",
    uc3: "Educational pairing with BMR/TDEE.",
    article: "Macronutrient grams",
    ref_a: "Wikipedia — Food energy",
    ref_b: "CDC Nutrition",
    faq: [["Sample?","2000 @ 30/40/30 → 150/200/≈66.67 g."],["Medical advice?","No — educational only."],["Why 9 for fat?","Fat has ~9 kcal/g; P/C ~4."],["Sum ≠100?","Rejected."]],
  },
  zh: zhPack({
  labels: {cal_label:"热量 (kcal)",cal_ph:"例如 2000",pPct_label:"蛋白质 %",pPct_ph:"例如 30",cPct_label:"碳水 %",cPct_ph:"例如 40",fPct_label:"脂肪 %",fPct_ph:"例如 30",pG_label:"蛋白质 (g)",cG_label:"碳水 (g)",fG_label:"脂肪 (g)"},
  result_note: "克数=(热量×比例/100)÷每克热量（P/C=4，脂肪=9）。比例宜合计 100%。",
  err_generic: "热量>0，比例≥0 且合计 100%。",
  how_body: "填写热量与三大营养素比例。这是教材能量算术，不是膳食处方。",
  formula_body: "宏量营养素相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：2000 kcal、30/40/30% → 150/200/约66.67 g。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：2000 kcal、30/40/30% → 150/200/约66.67 g。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "宏量营养素",
  topic: "宏量营养素",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {cal_label:"カロリー (kcal)",cal_ph:"例 2000",pPct_label:"たんぱく %",pPct_ph:"例 30",cPct_label:"炭水化物 %",cPct_ph:"例 40",fPct_label:"脂質 %",fPct_ph:"例 30",pG_label:"たんぱく (g)",cG_label:"炭水化物 (g)",fG_label:"脂質 (g)"},
  result_note: "マクロ栄養素の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れてマクロ栄養素を計算します。",
  formula_body: "マクロ栄養素の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：2000kcal・30/40/30% → 150/200/約66.67g。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：2000kcal・30/40/30% → 150/200/約66.67g。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "マクロ栄養素",
  topic: "マクロ栄養素",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  cal_label: ["Calorías (kcal)", "السعرات (kcal)", "Calorias (kcal)", "Kalori (kcal)", "Calories (kcal)", "Калории (ккал)", "Kalorien (kcal)"],
  cal_ph: ["p. ej. 2000", "مثال 2000", "ex. 2000", "mis. 2000", "ex. 2000", "напр. 2000", "z. B. 2000"],
  pPct_label: ["Proteína %", "بروتين %", "Proteína %", "Protein %", "Protéines %", "Белки %", "Protein %"],
  pPct_ph: ["p. ej. 30", "مثال 30", "ex. 30", "mis. 30", "ex. 30", "напр. 30", "z. B. 30"],
  cPct_label: ["Carbos %", "كربوهيدرات %", "Carboidratos %", "Karbo %", "Glucides %", "Углеводы %", "Kohlenhydrate %"],
  cPct_ph: ["p. ej. 40", "مثال 40", "ex. 40", "mis. 40", "ex. 40", "напр. 40", "z. B. 40"],
  fPct_label: ["Grasa %", "دهون %", "Gordura %", "Lemak %", "Lipides %", "Жиры %", "Fett %"],
  fPct_ph: ["p. ej. 30", "مثال 30", "ex. 30", "mis. 30", "ex. 30", "напр. 30", "z. B. 30"],
  pG_label: ["Proteína (g)", "بروتين (غ)", "Proteína (g)", "Protein (g)", "Protéines (g)", "Белки (г)", "Protein (g)"],
  cG_label: ["Carbos (g)", "كربوهيدرات (غ)", "Carboidratos (g)", "Karbo (g)", "Glucides (g)", "Углеводы (г)", "Kohlenhydrate (g)"],
  fG_label: ["Grasa (g)", "دهون (غ)", "Gordura (g)", "Lemak (g)", "Lipides (g)", "Жиры (г)", "Fett (g)"]
}),
  howMaps: M("Introduce calorías y %.", "أدخل السعرات والنسب.", "Informe calorias e %.", "Isi kalori dan %.", "Saisissez calories et %.", "Введите калории и %.", "Kalorien und % eingeben."),
  exMaps: M("Ejemplo: 150/200/≈66.67 g.", "مثال: 150/200/≈66.67 جم.", "Exemplo: 150/200/≈66.67 g.", "Contoh: 150/200/≈66.67 g.", "Exemple : 150/200/≈66.67 g.", "Пример: 150/200/≈66.67 г.", "Beispiel: 150/200/≈66.67 g."),
  fields: [{"id": "cal", "type": "number", "half": true, "labelKey": "cal_label", "phKey": "cal_ph"}, {"id": "pPct", "type": "number", "half": true, "labelKey": "pPct_label", "phKey": "pPct_ph"}, {"id": "cPct", "type": "number", "half": true, "labelKey": "cPct_label", "phKey": "cPct_ph"}, {"id": "fPct", "type": "number", "half": true, "labelKey": "fPct_label", "phKey": "fPct_ph"}],
  results: [{"id": "pG", "labelKey": "pG_label"}, {"id": "cG", "labelKey": "cG_label"}, {"id": "fG", "labelKey": "fG_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Food_energy"}, {"labelKey": "ref_b_label", "href": "https://www.cdc.gov/nutrition/"}],
  computeJs: `
        var cal=parseFloat(calEl.value), p=parseFloat(pPctEl.value), c=parseFloat(cPctEl.value), f=parseFloat(fPctEl.value);
        if(!(cal>0)||!(p>=0)||!(c>=0)||!(f>=0)||Math.abs(p+c+f-100)>1e-6) return {ok:false,error:msgErr};
        var pG=(cal*p/100)/4, cG=(cal*c/100)/4, fG=(cal*f/100)/9;
        return {ok:true, values:{ pG:fmt(pG), cG:fmt(cG), fG:fmt(fG) }};
`,
  sampleJs: `
        calEl.value='2000';
        pPctEl.value='30';
        cPctEl.value='40';
        fPctEl.value='30';
`,
});

// #56 heart-rate
shipDef({
  seq: 56,
  file: "heart-rate.mjs",
  slug: "how-to-calculate-heart-rate",
  prefix: "tool_heart_rate",
  pageFile: "howToCalculateHeartRatePage",
  pageExport: "renderHowToCalculateHeartRatePage",
  nameZh: "心率区间计算器",
  ymyl: true, health: true,
  related: ["how-to-calculate-macros", "how-to-calculate-bmr-tdee"],
  anchor: "heart-rate",
  glyph: "M6 16c4-8 8 8 12 0s8-8 12 0",
  sampleHint: "age 30 → max 190; zones as % of max",
  topic: "heart rate zones",
  titles: T("Heart Rate Zone Calculator", "心率区间计算器", "Calculadora de zonas de frecuencia cardíaca", "حاسبة مناطق معدل ضربات القلب", "Calculadora de zonas de frequência cardíaca", "Kalkulator zona denyut jantung", "Calculateur de zones de fréquence cardiaque", "心拍ゾーン計算ツール", "Калькулятор пульсовых зон", "Herzfrequenzzonen-Rechner"),
  descriptions: T("Estimate max HR (220−age) and simple training zones as percent ranges of max. Sample: age 30 → max 190; moderate often ~50–70% of max. Educational only — not medical advice.", "估算最大心率（220−年龄）及占最大心率百分比的简易训练区间。示例：年龄 30 → 最大 190；中等强度常约 50–70%。健康教育演示，非医疗建议。", "Estima FC máx (220−edad) y zonas %. Ejemplo: 30 → máx 190. Solo educativo.", "قدّر أقصى معدل (220−العمر) والمناطق %. مثال: 30 → 190. تعليمي فقط.", "Estime FC máx (220−idade) e zonas %. Exemplo: 30 → 190. Apenas educativo.", "Perkirakan HR maks (220−usia) dan zona %. Contoh: 30 → 190. Edukatif saja.", "Estimez FC max (220−âge) et zones %. Exemple : 30 → 190. Éducatif seulement.", "最大心拍（220−年齢）とゾーン（最大の%）を見積もります。例：30歳 → 最大190。学習用であり医療助言ではありません。", "Оцените ЧССмакс (220−возраст) и зоны %. Пример: 30 → 190. Только учебно.", "Schätzen Sie HFmax (220−Alter) und Zonen %. Beispiel: 30 → 190. Nur Bildung."),
  enCore: {
    labelsBase: {age_label:"Age (years)",age_ph:"e.g. 30",maxOut_label:"Estimated max HR",z1Out_label:"Zone 1 (50–60%)",z2Out_label:"Zone 2 (60–70%)",z3Out_label:"Zone 3 (70–85%)"},
    result_note: "max ≈ 220−age. Zones shown as bpm ranges from percent of max (educational 50–60 / 60–70 / 70–85).",
    err_generic: "Enter age between 1 and 120.",
    how_body: "Enter age to sketch max HR and three percent-based zones. Formulas vary by lab — this is a classroom classic, not a clinical test.",
    formula_body: "max=220−age; zone = [lo%, hi%] × max. Notes:",
    fi1: "220−age is a rough teaching estimate.",
    fi2: "Stop exercise and seek care for symptoms — not advice.",
    fi3: "Pair with macros / BMR–TDEE for education.",
    example: "Example: age 30 → max 190; moderate band often cited near 50–70% of max.",
    uc1: "Classroom zone math.",
    uc2: "Compare percent bands.",
    uc3: "Educational pairing with macros.",
    article: "Heart-rate zones",
    ref_a: "Wikipedia — Heart rate",
    ref_b: "CDC heart rate",
    faq: [["Sample?","Age 30 → max 190."],["Medical advice?","No."],["Why these %?","Common teaching bands; protocols differ."],["Symptoms?","Seek a clinician — not this tool."]],
  },
  zh: zhPack({
  labels: {age_label:"年龄（岁）",age_ph:"例如 30",maxOut_label:"估算最大心率",z1Out_label:"区间 1（50–60%）",z2Out_label:"区间 2（60–70%）",z3Out_label:"区间 3（70–85%）"},
  result_note: "结果按心率区间公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算心率区间。",
  formula_body: "心率区间相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：年龄 30 → 最大 190。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：年龄 30 → 最大 190。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "心率区间",
  topic: "心率区间",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {age_label:"年齢（歳）",age_ph:"例 30",maxOut_label:"推定最大心拍",z1Out_label:"ゾーン1（50–60%）",z2Out_label:"ゾーン2（60–70%）",z3Out_label:"ゾーン3（70–85%）"},
  result_note: "心拍ゾーンの公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて心拍ゾーンを計算します。",
  formula_body: "心拍ゾーンの式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：30歳 → 最大190。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：30歳 → 最大190。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "心拍ゾーン",
  topic: "心拍ゾーン",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  age_label: ["Edad (años)", "العمر (سنوات)", "Idade (anos)", "Usia (tahun)", "Âge (ans)", "Возраст (лет)", "Alter (Jahre)"],
  age_ph: ["p. ej. 30", "مثال 30", "ex. 30", "mis. 30", "ex. 30", "напр. 30", "z. B. 30"],
  maxOut_label: ["FC máx estimada", "أقصى معدل تقديري", "FC máx estimada", "HR maks perkiraan", "FC max estimée", "Оценка ЧССмакс", "Geschätzte HFmax"],
  z1Out_label: ["Zona 1 (50–60%)", "المنطقة 1 (50–60%)", "Zona 1 (50–60%)", "Zona 1 (50–60%)", "Zone 1 (50–60 %)", "Зона 1 (50–60%)", "Zone 1 (50–60 %)"],
  z2Out_label: ["Zona 2 (60–70%)", "المنطقة 2 (60–70%)", "Zona 2 (60–70%)", "Zona 2 (60–70%)", "Zone 2 (60–70 %)", "Зона 2 (60–70%)", "Zone 2 (60–70 %)"],
  z3Out_label: ["Zona 3 (70–85%)", "المنطقة 3 (70–85%)", "Zona 3 (70–85%)", "Zona 3 (70–85%)", "Zone 3 (70–85 %)", "Зона 3 (70–85%)", "Zone 3 (70–85 %)"]
}),
  howMaps: M("Introduce la edad.", "أدخل العمر.", "Informe a idade.", "Isi usia.", "Saisissez l’âge.", "Введите возраст.", "Alter eingeben."),
  exMaps: M("Ejemplo: edad 30 → máx 190.", "مثال: عمر 30 → 190.", "Exemplo: idade 30 → 190.", "Contoh: usia 30 → 190.", "Exemple : âge 30 → 190.", "Пример: возраст 30 → 190.", "Beispiel: Alter 30 → 190."),
  fields: [{"id": "age", "type": "number", "half": true, "labelKey": "age_label", "phKey": "age_ph"}],
  results: [{"id": "maxOut", "labelKey": "maxOut_label"}, {"id": "z1Out", "labelKey": "z1Out_label"}, {"id": "z2Out", "labelKey": "z2Out_label"}, {"id": "z3Out", "labelKey": "z3Out_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Heart_rate"}, {"labelKey": "ref_b_label", "href": "https://www.cdc.gov/physicalactivity/basics/measuring/heartrate.htm"}],
  computeJs: `
        var age=parseFloat(ageEl.value);
        if(!(age>=1)||!(age<=120)||!Number.isFinite(age)) return {ok:false,error:msgErr};
        var max=220-age;
        function band(lo,hi){ return Math.round(max*lo)+'\\u2013'+Math.round(max*hi)+' bpm'; }
        return {ok:true, values:{ maxOut:String(Math.round(max)), z1Out:band(0.50,0.60), z2Out:band(0.60,0.70), z3Out:band(0.70,0.85) }};
`,
  sampleJs: `
        ageEl.value='30';
`,
});

// #57 pace
shipDef({
  seq: 57,
  file: "pace.mjs",
  slug: "how-to-calculate-pace",
  prefix: "tool_pace",
  pageFile: "howToCalculatePacePage",
  pageExport: "renderHowToCalculatePacePage",
  nameZh: "配速计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-one-rep-max", "how-to-calculate-heart-rate"],
  anchor: "pace",
  glyph: "M8 20h16v2H8zM10 6h4v10h-4z",
  sampleHint: "5 km in 25 min → 5:00 /km",
  topic: "running pace",
  titles: T("Pace Calculator — min/km and Speed", "配速计算器 — 分/公里与时速", "Calculadora de ritmo", "حاسبة الإيقاع", "Calculadora de ritmo", "Kalkulator pace", "Calculateur d’allure", "ペース計算ツール — 分/km と速度", "Калькулятор темпа", "Pace-Rechner — min/km und Tempo"),
  descriptions: T("Convert distance and time into pace (mm:ss per km) and speed (km/h). Sample: 5 km in 25 minutes → 5:00 /km and 12 km/h. Browser-only.", "由距离与时间计算配速（分:秒 /km）与速度（km/h）。示例：5 km、25 分钟 → 5:00 /km、12 km/h。浏览器本地计算。", "Convierte distancia y tiempo en ritmo y velocidad. Ejemplo: 5 km en 25 min → 5:00 /km.", "حوّل المسافة والوقت إلى إيقاع وسرعة. مثال: 5 كم في 25 دقيقة → 5:00 /كم.", "Converta distância e tempo em ritmo e velocidade. Exemplo: 5 km em 25 min → 5:00 /km.", "Ubah jarak dan waktu jadi pace dan kecepatan. Contoh: 5 km dalam 25 menit → 5:00 /km.", "Convertissez distance et temps en allure et vitesse. Exemple : 5 km en 25 min → 5:00 /km.", "距離と時間からペース（分:秒/km）と速度（km/h）を出します。例：5km・25分 → 5:00/km、12km/h。", "Переведите дистанцию и время в темп и скорость. Пример: 5 км за 25 мин → 5:00 /км.", "Distanz und Zeit in Pace und Tempo. Beispiel: 5 km in 25 min → 5:00 /km."),
  enCore: {
    labelsBase: {distKm_label:"Distance (km)",distKm_ph:"e.g. 5",minutes_label:"Time (minutes)",minutes_ph:"e.g. 25",paceOut_label:"Pace",speedOut_label:"Speed (km/h)"},
    result_note: "Pace = minutes/distance as mm:ss per km; speed = distance / (minutes/60).",
    err_generic: "Enter distance > 0 and minutes > 0.",
    how_body: "Enter kilometers and total minutes. Pace is formatted as mm:ss /km.",
    formula_body: "min_per_km = minutes/dist; speed = dist/(minutes/60). Notes:",
    fi1: "Does not model elevation or splits.",
    fi2: "Seconds are rounded to nearest second.",
    fi3: "Pair with one-rep-max / heart-rate tools.",
    example: "Example: 5 km in 25 min → 5:00 /km, 12 km/h.",
    uc1: "Run workout planning.",
    uc2: "Homework pace math.",
    uc3: "Compare with HR zones educationally.",
    article: "Running pace",
    ref_a: "Wikipedia — Pace",
    ref_b: "Wikipedia — Running",
    faq: [["Sample?","5 km / 25 min → 5:00 /km."],["Miles?","Convert to km first."],["Seconds input?","Enter decimal minutes if needed."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {distKm_label:"距离 (km)",distKm_ph:"例如 5",minutes_label:"时间（分钟）",minutes_ph:"例如 25",paceOut_label:"配速",speedOut_label:"速度 (km/h)"},
  result_note: "结果按配速公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算配速。",
  formula_body: "配速相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：5 km、25 分钟 → 5:00 /km、12 km/h。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：5 km、25 分钟 → 5:00 /km、12 km/h。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "配速",
  topic: "配速",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {distKm_label:"距離 (km)",distKm_ph:"例 5",minutes_label:"時間（分）",minutes_ph:"例 25",paceOut_label:"ペース",speedOut_label:"速度 (km/h)"},
  result_note: "ペースの公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れてペースを計算します。",
  formula_body: "ペースの式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：5km・25分 → 5:00/km、12km/h。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：5km・25分 → 5:00/km、12km/h。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "ペース",
  topic: "ペース",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  distKm_label: ["Distancia (km)", "المسافة (كم)", "Distância (km)", "Jarak (km)", "Distance (km)", "Дистанция (км)", "Distanz (km)"],
  distKm_ph: ["p. ej. 5", "مثال 5", "ex. 5", "mis. 5", "ex. 5", "напр. 5", "z. B. 5"],
  minutes_label: ["Tiempo (min)", "الوقت (دقائق)", "Tempo (min)", "Waktu (menit)", "Temps (min)", "Время (мин)", "Zeit (Min)"],
  minutes_ph: ["p. ej. 25", "مثال 25", "ex. 25", "mis. 25", "ex. 25", "напр. 25", "z. B. 25"],
  paceOut_label: ["Ritmo", "الإيقاع", "Ritmo", "Pace", "Allure", "Темп", "Pace"],
  speedOut_label: ["Velocidad (km/h)", "السرعة (كم/س)", "Velocidade (km/h)", "Kecepatan (km/j)", "Vitesse (km/h)", "Скорость (км/ч)", "Tempo (km/h)"]
}),
  howMaps: M("Introduce km y minutos.", "أدخل الكم والدقائق.", "Informe km e minutos.", "Isi km dan menit.", "Saisissez km et minutes.", "Введите км и минуты.", "km und Minuten eingeben."),
  exMaps: M("Ejemplo: 5:00 /km.", "مثال: 5:00 /كم.", "Exemplo: 5:00 /km.", "Contoh: 5:00 /km.", "Exemple : 5:00 /km.", "Пример: 5:00 /км.", "Beispiel: 5:00 /km."),
  fields: [{"id": "distKm", "type": "number", "half": true, "labelKey": "distKm_label", "phKey": "distKm_ph"}, {"id": "minutes", "type": "number", "half": true, "labelKey": "minutes_label", "phKey": "minutes_ph"}],
  results: [{"id": "paceOut", "labelKey": "paceOut_label"}, {"id": "speedOut", "labelKey": "speedOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Pace_(speed)"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Running"}],
  computeJs: `
        var dist=parseFloat(distKmEl.value), minutes=parseFloat(minutesEl.value);
        if(!(dist>0)||!(minutes>0)) return {ok:false,error:msgErr};
        var minPerKm=minutes/dist;
        var totalSec=Math.round(minPerKm*60);
        var mm=Math.floor(totalSec/60), ss=totalSec%60;
        var pace=String(mm)+':'+String(ss).padStart(2,'0')+' /km';
        var speed=dist/(minutes/60);
        return {ok:true, values:{ paceOut:pace, speedOut:fmt(speed) }};
`,
  sampleJs: `
        distKmEl.value='5';
        minutesEl.value='25';
`,
});

// #58 one-rep-max
shipDef({
  seq: 58,
  file: "one-rep-max.mjs",
  slug: "how-to-calculate-one-rep-max",
  prefix: "tool_one_rep_max",
  pageFile: "howToCalculateOneRepMaxPage",
  pageExport: "renderHowToCalculateOneRepMaxPage",
  nameZh: "一次最大重量计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-pace", "how-to-calculate-body-fat"],
  anchor: "one-rep-max",
  glyph: "M8 14h16v4H8zM12 8h8v4h-8z",
  sampleHint: "Epley: 100×5 → 116.67",
  topic: "one-rep max safety estimate",
  titles: T("One-Rep Max Calculator (Epley)", "一次最大重量计算器（Epley）", "Calculadora de 1RM (Epley)", "حاسبة أقصى تكرار واحد (Epley)", "Calculadora de 1RM (Epley)", "Kalkulator 1RM (Epley)", "Calculateur de 1RM (Epley)", "1RM計算ツール（Epley）", "Калькулятор 1ПМ (Epley)", "1RM-Rechner (Epley)"),
  descriptions: T("Estimate one-rep max with the Epley formula: 1RM ≈ w×(1+reps/30). Sample: 100 for 5 reps → ≈116.67. Educational estimate with a safety note — not coaching advice.", "用 Epley 公式估算 1RM：1RM ≈ w×(1+次数/30)。示例：100×5 次 → 约 116.67。含安全提示的学习估算，非训练指导；浏览器本地计算。", "Estima 1RM con Epley: w×(1+reps/30). Ejemplo: 100×5 → ≈116.67. Solo educativo.", "قدّر 1RM بصيغة Epley. مثال: 100×5 → ≈116.67. تعليمي فقط.", "Estime 1RM com Epley. Exemplo: 100×5 → ≈116.67. Apenas educativo.", "Perkirakan 1RM dengan Epley. Contoh: 100×5 → ≈116.67. Edukatif saja.", "Estimez le 1RM avec Epley. Exemple : 100×5 → ≈116.67. Éducatif seulement.", "Epley式で1RMを見積もります：w×(1+回/30)。例：100を5回 → 約116.67。安全注意付きの学習用であり指導ではありません。", "Оцените 1ПМ по Эпли. Пример: 100×5 → ≈116.67. Только учебно.", "1RM nach Epley schätzen. Beispiel: 100×5 → ≈116.67. Nur Bildung."),
  enCore: {
    labelsBase: {weight_label:"Weight",weight_ph:"e.g. 100",reps_label:"Reps",reps_ph:"e.g. 5",ormOut_label:"Estimated 1RM"},
    result_note: "Epley: 1RM ≈ weight × (1 + reps/30). Warm up; do not max on a rough estimate.",
    err_generic: "Enter weight > 0 and integer reps ≥ 1 (typically ≤ 10 for this estimate).",
    how_body: "Enter a submaximal weight and successful reps. Treat the result as a classroom estimate, not a prescription.",
    formula_body: "1RM ≈ w(1+r/30). Notes:",
    fi1: "Accuracy falls as reps get high.",
    fi2: "Stop if form breaks — safety first.",
    fi3: "Pair with pace / body-fat educational tools.",
    example: "Example: w=100, reps=5 → 100×(1+5/30)=116.67.",
    uc1: "Classroom strength math.",
    uc2: "Rough program sketch.",
    uc3: "Compare related fitness tools.",
    article: "One-rep max (Epley)",
    ref_a: "Wikipedia — One-repetition maximum",
    ref_b: "Wikipedia — Strength training",
    faq: [["Sample?","100×5 → ≈116.67."],["Safe to test 1RM?","Not advice — use care and coaching."],["Other formulas?","This page uses Epley only."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {weight_label:"重量",weight_ph:"例如 100",reps_label:"次数",reps_ph:"例如 5",ormOut_label:"估算 1RM"},
  result_note: "Epley：1RM≈重量×(1+次数/30)。热身；勿把粗估当极限测试。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算一次最大重量。",
  formula_body: "一次最大重量相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：100×5 → 约 116.67。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：100×5 → 约 116.67。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "一次最大重量",
  topic: "一次最大重量安全估算",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {weight_label:"重量",weight_ph:"例 100",reps_label:"回数",reps_ph:"例 5",ormOut_label:"推定1RM"},
  result_note: "Epley：1RM≈重量×(1+回数/30)。ウォームアップを。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて1RMを計算します。",
  formula_body: "1RMの式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：100×5 → 約116.67。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：100×5 → 約116.67。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "1RM",
  topic: "1RMの安全な見積もり",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  weight_label: ["Peso", "الوزن", "Peso", "Berat", "Charge", "Вес", "Gewicht"],
  weight_ph: ["p. ej. 100", "مثال 100", "ex. 100", "mis. 100", "ex. 100", "напр. 100", "z. B. 100"],
  reps_label: ["Reps", "تكرارات", "Repetições", "Repetisi", "Répétitions", "Повторы", "Wdhl."],
  reps_ph: ["p. ej. 5", "مثال 5", "ex. 5", "mis. 5", "ex. 5", "напр. 5", "z. B. 5"],
  ormOut_label: ["1RM estimado", "1RM تقديري", "1RM estimado", "1RM perkiraan", "1RM estimé", "Оценка 1ПМ", "Geschätztes 1RM"]
}),
  howMaps: M("Introduce peso y reps.", "أدخل الوزن والتكرارات.", "Informe peso e reps.", "Isi berat dan repetisi.", "Saisissez charge et reps.", "Введите вес и повторы.", "Gewicht und Wdhl. eingeben."),
  exMaps: M("Ejemplo: ≈116.67.", "مثال: ≈116.67.", "Exemplo: ≈116.67.", "Contoh: ≈116.67.", "Exemple : ≈116.67.", "Пример: ≈116.67.", "Beispiel: ≈116.67."),
  fields: [{"id": "weight", "type": "number", "half": true, "labelKey": "weight_label", "phKey": "weight_ph"}, {"id": "reps", "type": "number", "half": true, "labelKey": "reps_label", "phKey": "reps_ph"}],
  results: [{"id": "ormOut", "labelKey": "ormOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/One-repetition_maximum"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Strength_training"}],
  computeJs: `
        var w=parseFloat(weightEl.value), reps=parseFloat(repsEl.value);
        if(!(w>0)||!Number.isInteger(reps)||reps<1) return {ok:false,error:msgErr};
        var orm=w*(1+reps/30);
        return {ok:true, values:{ ormOut:fmt(orm) }};
`,
  sampleJs: `
        weightEl.value='100';
        repsEl.value='5';
`,
});

// #59 ohms-law
shipDef({
  seq: 59,
  file: "ohms-law.mjs",
  slug: "how-to-calculate-ohms-law",
  prefix: "tool_ohms_law",
  pageFile: "howToCalculateOhmsLawPage",
  pageExport: "renderHowToCalculateOhmsLawPage",
  nameZh: "欧姆定律计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-density", "how-to-calculate-velocity"],
  anchor: "ohms-law",
  glyph: "M6 16h20M10 10v12M22 10v12",
  sampleHint: "V=12 I=2 → R=6 P=24",
  topic: "Ohm's law",
  titles: T("Ohm’s Law Calculator — Resistance and Power", "欧姆定律计算器 — 电阻与功率", "Calculadora de la ley de Ohm", "حاسبة قانون أوم", "Calculadora da lei de Ohm", "Kalkulator hukum Ohm", "Calculateur de la loi d’Ohm", "オームの法則 — 抵抗と電力", "Калькулятор закона Ома", "Ohmsches Gesetz — Widerstand und Leistung"),
  descriptions: T("Solve resistance R=V/I and power P=VI from voltage and current. Sample: V=12, I=2 → R=6, P=24. Browser-only.", "由电压与电流求电阻 R=V/I 与功率 P=VI。示例：V=12、I=2 → R=6、P=24。浏览器本地计算。", "Calcula R=V/I y P=VI. Ejemplo: V=12, I=2 → R=6, P=24.", "احسب R=V/I و P=VI. مثال: V=12 و I=2 → R=6 و P=24.", "Calcule R=V/I e P=VI. Exemplo: V=12, I=2 → R=6, P=24.", "Hitung R=V/I dan P=VI. Contoh: V=12, I=2 → R=6, P=24.", "Calculez R=V/I et P=VI. Exemple : V=12, I=2 → R=6, P=24.", "電圧と電流から抵抗R=V/Iと電力P=VIを求めます。例：V=12、I=2 → R=6、P=24。", "Считайте R=V/I и P=VI. Пример: V=12, I=2 → R=6, P=24.", "R=V/I und P=VI. Beispiel: V=12, I=2 → R=6, P=24."),
  enCore: {
    labelsBase: {V_label:"Voltage V",V_ph:"e.g. 12",I_label:"Current I",I_ph:"e.g. 2",rOut_label:"Resistance R",pOut_label:"Power P"},
    result_note: "R = V/I; P = V×I (solve R from V and I).",
    err_generic: "Enter finite V and I with I ≠ 0.",
    how_body: "Enter voltage and current. This mode solves resistance and also shows power.",
    formula_body: "R=V/I; P=VI. Notes:",
    fi1: "Units must be consistent (e.g., volts and amperes → ohms, watts).",
    fi2: "Ideal DC form only.",
    fi3: "Pair with density / velocity tools.",
    example: "Example: V=12, I=2 → R=6, P=24.",
    uc1: "Electronics homework.",
    uc2: "Quick bench check.",
    uc3: "Compare related physics tools.",
    article: "Ohm's law",
    ref_a: "Wikipedia — Ohm's law",
    ref_b: "Wikipedia — Electric power",
    faq: [["Sample?","12 V / 2 A → 6 Ω, 24 W."],["AC?","Not modeled."],["I=0?","Rejected."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {V_label:"电压 V",V_ph:"例如 12",I_label:"电流 I",I_ph:"例如 2",rOut_label:"电阻 R",pOut_label:"功率 P"},
  result_note: "结果按欧姆定律公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算欧姆定律。",
  formula_body: "欧姆定律相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：V=12、I=2 → R=6、P=24。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：V=12、I=2 → R=6、P=24。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "欧姆定律",
  topic: "欧姆定律",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {V_label:"電圧 V",V_ph:"例 12",I_label:"電流 I",I_ph:"例 2",rOut_label:"抵抗 R",pOut_label:"電力 P"},
  result_note: "オームの法則の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れてオームの法則を計算します。",
  formula_body: "オームの法則の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：V=12、I=2 → R=6、P=24。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：V=12、I=2 → R=6、P=24。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "オームの法則",
  topic: "オームの法則",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  V_label: ["Voltaje V", "الجهد V", "Tensão V", "Tegangan V", "Tension V", "Напряжение V", "Spannung V"],
  V_ph: ["p. ej. 12", "مثال 12", "ex. 12", "mis. 12", "ex. 12", "напр. 12", "z. B. 12"],
  I_label: ["Corriente I", "التيار I", "Corrente I", "Arus I", "Courant I", "Ток I", "Strom I"],
  I_ph: ["p. ej. 2", "مثال 2", "ex. 2", "mis. 2", "ex. 2", "напр. 2", "z. B. 2"],
  rOut_label: ["Resistencia R", "المقاومة R", "Resistência R", "Hambatan R", "Résistance R", "Сопротивление R", "Widerstand R"],
  pOut_label: ["Potencia P", "القدرة P", "Potência P", "Daya P", "Puissance P", "Мощность P", "Leistung P"]
}),
  howMaps: M("Introduce V e I.", "أدخل V و I.", "Informe V e I.", "Isi V dan I.", "Saisissez V et I.", "Введите V и I.", "V und I eingeben."),
  exMaps: M("Ejemplo: R=6, P=24.", "مثال: R=6 و P=24.", "Exemplo: R=6, P=24.", "Contoh: R=6, P=24.", "Exemple : R=6, P=24.", "Пример: R=6, P=24.", "Beispiel: R=6, P=24."),
  fields: [{"id": "V", "type": "number", "half": true, "labelKey": "V_label", "phKey": "V_ph"}, {"id": "I", "type": "number", "half": true, "labelKey": "I_label", "phKey": "I_ph"}],
  results: [{"id": "rOut", "labelKey": "rOut_label"}, {"id": "pOut", "labelKey": "pOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Ohm%27s_law"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Electric_power"}],
  computeJs: `
        var V=parseFloat(VEl.value), I=parseFloat(IEl.value);
        if(!Number.isFinite(V)||!Number.isFinite(I)||I===0) return {ok:false,error:msgErr};
        return {ok:true, values:{ rOut:fmt(V/I), pOut:fmt(V*I) }};
`,
  sampleJs: `
        VEl.value='12';
        IEl.value='2';
`,
});

// #60 density
shipDef({
  seq: 60,
  file: "density.mjs",
  slug: "how-to-calculate-density",
  prefix: "tool_density",
  pageFile: "howToCalculateDensityPage",
  pageExport: "renderHowToCalculateDensityPage",
  nameZh: "密度计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-volume", "how-to-calculate-ohms-law"],
  anchor: "density",
  glyph: "M10 8h12v16H10z",
  sampleHint: "m=10 V=2 → density 5",
  topic: "density",
  titles: T("Density Calculator — Mass over Volume", "密度计算器 — 质量÷体积", "Calculadora de densidad", "حاسبة الكثافة", "Calculadora de densidade", "Kalkulator massa jenis", "Calculateur de densité", "密度計算ツール — 質量÷体積", "Калькулятор плотности", "Dichte-Rechner — Masse durch Volumen"),
  descriptions: T("Compute density ρ = m/V. Sample: mass 10, volume 2 → density 5. Browser-only.", "计算密度 ρ = m/V。示例：质量 10、体积 2 → 密度 5。浏览器本地计算。", "Calcula densidad ρ=m/V. Ejemplo: 10 / 2 → 5.", "احسب الكثافة ρ=m/V. مثال: 10 / 2 → 5.", "Calcule densidade ρ=m/V. Exemplo: 10 / 2 → 5.", "Hitung densitas ρ=m/V. Contoh: 10 / 2 → 5.", "Calculez la densité ρ=m/V. Exemple : 10 / 2 → 5.", "密度ρ=m/Vを計算します。例：質量10、体積2 → 密度5。", "Считайте плотность ρ=m/V. Пример: 10 / 2 → 5.", "Dichte ρ=m/V. Beispiel: 10 / 2 → 5."),
  enCore: {
    labelsBase: {mass_label:"Mass",mass_ph:"e.g. 10",volume_label:"Volume",volume_ph:"e.g. 2",densOut_label:"Density"},
    result_note: "ρ = mass / volume.",
    err_generic: "Enter mass ≥ 0 and volume > 0.",
    how_body: "Enter mass and volume in consistent units (e.g., kg and m³ → kg/m³).",
    formula_body: "ρ=m/V. Notes:",
    fi1: "Volume must be positive.",
    fi2: "Temperature/pressure effects not modeled.",
    fi3: "Pair with volume / Ohm tools.",
    example: "Example: m=10, V=2 → density 5.",
    uc1: "Science homework.",
    uc2: "Quick ρ check.",
    uc3: "Compare related physics tools.",
    article: "Density",
    ref_a: "Wikipedia — Density",
    ref_b: "Wikipedia — Mass",
    faq: [["Sample?","10/2=5."],["Units?","Keep mass/volume consistent."],["V=0?","Rejected."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {mass_label:"质量",mass_ph:"例如 10",volume_label:"体积",volume_ph:"例如 2",densOut_label:"密度"},
  result_note: "结果按密度公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算密度。",
  formula_body: "密度相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：m=10、V=2 → 5。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：m=10、V=2 → 5。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "密度",
  topic: "密度",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {mass_label:"質量",mass_ph:"例 10",volume_label:"体積",volume_ph:"例 2",densOut_label:"密度"},
  result_note: "密度の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて密度を計算します。",
  formula_body: "密度の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：m=10、V=2 → 5。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：m=10、V=2 → 5。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "密度",
  topic: "密度",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  mass_label: ["Masa", "الكتلة", "Massa", "Massa", "Masse", "Масса", "Masse"],
  mass_ph: ["p. ej. 10", "مثال 10", "ex. 10", "mis. 10", "ex. 10", "напр. 10", "z. B. 10"],
  volume_label: ["Volumen", "الحجم", "Volume", "Volume", "Volume", "Объём", "Volumen"],
  volume_ph: ["p. ej. 2", "مثال 2", "ex. 2", "mis. 2", "ex. 2", "напр. 2", "z. B. 2"],
  densOut_label: ["Densidad", "الكثافة", "Densidade", "Densitas", "Densité", "Плотность", "Dichte"]
}),
  howMaps: M("Introduce masa y volumen.", "أدخل الكتلة والحجم.", "Informe massa e volume.", "Isi massa dan volume.", "Saisissez masse et volume.", "Введите массу и объём.", "Masse und Volumen eingeben."),
  exMaps: M("Ejemplo: densidad 5.", "مثال: الكثافة 5.", "Exemplo: densidade 5.", "Contoh: densitas 5.", "Exemple : densité 5.", "Пример: плотность 5.", "Beispiel: Dichte 5."),
  fields: [{"id": "mass", "type": "number", "half": true, "labelKey": "mass_label", "phKey": "mass_ph"}, {"id": "volume", "type": "number", "half": true, "labelKey": "volume_label", "phKey": "volume_ph"}],
  results: [{"id": "densOut", "labelKey": "densOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Density"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Mass"}],
  computeJs: `
        var mass=parseFloat(massEl.value), volume=parseFloat(volumeEl.value);
        if(!(mass>=0)||!(volume>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ densOut:fmt(mass/volume) }};
`,
  sampleJs: `
        massEl.value='10';
        volumeEl.value='2';
`,
});

// #61 velocity
shipDef({
  seq: 61,
  file: "velocity.mjs",
  slug: "how-to-calculate-velocity",
  prefix: "tool_velocity",
  pageFile: "howToCalculateVelocityPage",
  pageExport: "renderHowToCalculateVelocityPage",
  nameZh: "速度计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-acceleration", "how-to-calculate-density"],
  anchor: "velocity",
  glyph: "M6 16h14l4-4",
  sampleHint: "d=100 t=20 → v=5",
  topic: "velocity",
  titles: T("Velocity Calculator — Distance over Time", "速度计算器 — 距离÷时间", "Calculadora de velocidad", "حاسبة السرعة", "Calculadora de velocidade", "Kalkulator kecepatan", "Calculateur de vitesse", "速度計算ツール — 距離÷時間", "Калькулятор скорости", "Geschwindigkeitsrechner — Weg durch Zeit"),
  descriptions: T("Compute average velocity v = d/t. Sample: distance 100, time 20 → velocity 5. Browser-only.", "计算平均速度 v = d/t。示例：距离 100、时间 20 → 速度 5。浏览器本地计算。", "Calcula velocidad media v=d/t. Ejemplo: 100 / 20 → 5.", "احسب السرعة المتوسطة v=d/t. مثال: 100 / 20 → 5.", "Calcule velocidade média v=d/t. Exemplo: 100 / 20 → 5.", "Hitung kecepatan rata-rata v=d/t. Contoh: 100 / 20 → 5.", "Calculez la vitesse moyenne v=d/t. Exemple : 100 / 20 → 5.", "平均速度 v=d/t を計算します。例：距離100、時間20 → 速度5。", "Считайте среднюю скорость v=d/t. Пример: 100 / 20 → 5.", "Mittlere Geschwindigkeit v=d/t. Beispiel: 100 / 20 → 5."),
  enCore: {
    labelsBase: {dist_label:"Distance",dist_ph:"e.g. 100",time_label:"Time",time_ph:"e.g. 20",velOut_label:"Velocity"},
    result_note: "v = distance / time (average speed along the path in 1D teaching form).",
    err_generic: "Enter distance ≥ 0 and time > 0.",
    how_body: "Enter distance and time in consistent units (e.g., m and s → m/s).",
    formula_body: "v=d/t. Notes:",
    fi1: "This is a scalar average-speed form for homework.",
    fi2: "Direction/vector velocity is not modeled.",
    fi3: "Pair with acceleration / density tools.",
    example: "Example: d=100, t=20 → v=5.",
    uc1: "Physics homework.",
    uc2: "Quick v check.",
    uc3: "Compare with acceleration.",
    article: "Velocity",
    ref_a: "Wikipedia — Velocity",
    ref_b: "Wikipedia — Speed",
    faq: [["Sample?","100/20=5."],["Vectors?","Not here."],["t=0?","Rejected."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {dist_label:"距离",dist_ph:"例如 100",time_label:"时间",time_ph:"例如 20",velOut_label:"速度"},
  result_note: "结果按速度公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算速度。",
  formula_body: "速度相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：d=100、t=20 → v=5。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：d=100、t=20 → v=5。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "速度",
  topic: "速度",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {dist_label:"距離",dist_ph:"例 100",time_label:"時間",time_ph:"例 20",velOut_label:"速度"},
  result_note: "速度の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて速度を計算します。",
  formula_body: "速度の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：d=100、t=20 → v=5。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：d=100、t=20 → v=5。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "速度",
  topic: "速度",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  dist_label: ["Distancia", "المسافة", "Distância", "Jarak", "Distance", "Расстояние", "Weg"],
  dist_ph: ["p. ej. 100", "مثال 100", "ex. 100", "mis. 100", "ex. 100", "напр. 100", "z. B. 100"],
  time_label: ["Tiempo", "الوقت", "Tempo", "Waktu", "Temps", "Время", "Zeit"],
  time_ph: ["p. ej. 20", "مثال 20", "ex. 20", "mis. 20", "ex. 20", "напр. 20", "z. B. 20"],
  velOut_label: ["Velocidad", "السرعة", "Velocidade", "Kecepatan", "Vitesse", "Скорость", "Geschwindigkeit"]
}),
  howMaps: M("Introduce distancia y tiempo.", "أدخل المسافة والوقت.", "Informe distância e tempo.", "Isi jarak dan waktu.", "Saisissez distance et temps.", "Введите путь и время.", "Weg und Zeit eingeben."),
  exMaps: M("Ejemplo: v=5.", "مثال: v=5.", "Exemplo: v=5.", "Contoh: v=5.", "Exemple : v=5.", "Пример: v=5.", "Beispiel: v=5."),
  fields: [{"id": "dist", "type": "number", "half": true, "labelKey": "dist_label", "phKey": "dist_ph"}, {"id": "time", "type": "number", "half": true, "labelKey": "time_label", "phKey": "time_ph"}],
  results: [{"id": "velOut", "labelKey": "velOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Velocity"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Speed"}],
  computeJs: `
        var dist=parseFloat(distEl.value), time=parseFloat(timeEl.value);
        if(!(dist>=0)||!(time>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ velOut:fmt(dist/time) }};
`,
  sampleJs: `
        distEl.value='100';
        timeEl.value='20';
`,
});

// #62 acceleration
shipDef({
  seq: 62,
  file: "acceleration.mjs",
  slug: "how-to-calculate-acceleration",
  prefix: "tool_acceleration",
  pageFile: "howToCalculateAccelerationPage",
  pageExport: "renderHowToCalculateAccelerationPage",
  nameZh: "加速度计算器",
  ymyl: false, health: false,
  related: ["how-to-calculate-velocity", "how-to-calculate-ohms-law"],
  anchor: "acceleration",
  glyph: "M6 18h8l8-10",
  sampleHint: "v0=0 v=10 t=2 → a=5",
  topic: "acceleration",
  titles: T("Acceleration Calculator — Change in Velocity", "加速度计算器 — 速度变化", "Calculadora de aceleración", "حاسبة التسارع", "Calculadora de aceleração", "Kalkulator percepatan", "Calculateur d’accélération", "加速度計算ツール — 速度の変化", "Калькулятор ускорения", "Beschleunigungsrechner"),
  descriptions: T("Compute constant acceleration a = (v − v0) / t. Sample: v0=0, v=10, t=2 → a=5. Browser-only.", "计算匀加速 a = (v − v0) / t。示例：v0=0、v=10、t=2 → a=5。浏览器本地计算。", "Calcula a=(v−v0)/t. Ejemplo: 0, 10, 2 → 5.", "احسب a=(v−v0)/t. مثال: 0 و10 و2 → 5.", "Calcule a=(v−v0)/t. Exemplo: 0, 10, 2 → 5.", "Hitung a=(v−v0)/t. Contoh: 0, 10, 2 → 5.", "Calculez a=(v−v0)/t. Exemple : 0, 10, 2 → 5.", "等加速度 a=(v−v0)/t を計算します。例：v0=0、v=10、t=2 → a=5。", "Считайте a=(v−v0)/t. Пример: 0, 10, 2 → 5.", "a=(v−v0)/t. Beispiel: 0, 10, 2 → 5."),
  enCore: {
    labelsBase: {v0_label:"Initial velocity v0",v0_ph:"e.g. 0",v_label:"Final velocity v",v_ph:"e.g. 10",t_label:"Time t",t_ph:"e.g. 2",accOut_label:"Acceleration"},
    result_note: "a = (v − v0) / t for constant acceleration.",
    err_generic: "Enter finite v0, v and t > 0.",
    how_body: "Enter initial and final velocity and the elapsed time.",
    formula_body: "a=(v−v0)/t. Notes:",
    fi1: "Assumes constant acceleration.",
    fi2: "Signs follow your velocity convention.",
    fi3: "Pair with velocity / Ohm tools.",
    example: "Example: v0=0, v=10, t=2 → a=5.",
    uc1: "Physics homework.",
    uc2: "Quick a check.",
    uc3: "Compare with velocity tool.",
    article: "Acceleration",
    ref_a: "Wikipedia — Acceleration",
    ref_b: "Wikipedia — Kinematics",
    faq: [["Sample?","(10−0)/2=5."],["Negative a?","Allowed if v < v0."],["t=0?","Rejected."],["Advice?","Educational only."]],
  },
  zh: zhPack({
  labels: {v0_label:"初速度 v0",v0_ph:"例如 0",v_label:"末速度 v",v_ph:"例如 10",t_label:"时间 t",t_ph:"例如 2",accOut_label:"加速度"},
  result_note: "结果按加速度公式在浏览器本地计算。",
  err_generic: "请检查输入是否有效。",
  how_body: "填写所需字段后计算加速度。",
  formula_body: "加速度相关公式见 Formula 节。注意：",
  fi1: "核对单位与符号。",
  fi2: "边界输入可能无定义。",
  fi3: "仅供学习对照。",
  example: "示例：v0=0、v=10、t=2 → a=5。",
  uc1: "课堂作业。",
  uc2: "快速验算。",
  uc3: "与相关工具对照。",
  faq: [["样例？","示例：v0=0、v=10、t=2 → a=5。"],["公式？","见公式节。"],["专业建议？","不是。"],["相关？","见相关工具。"]],
  article: "加速度",
  topic: "加速度",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  ja: jaPack({
  labels: {v0_label:"初速度 v0",v0_ph:"例 0",v_label:"終速度 v",v_ph:"例 10",t_label:"時間 t",t_ph:"例 2",accOut_label:"加速度"},
  result_note: "加速度の公式でブラウザ内計算します。",
  err_generic: "入力を確認してください。",
  how_body: "必要な項目を入れて加速度を計算します。",
  formula_body: "加速度の式は Formula を参照。注意:",
  fi1: "単位と符号を確認。",
  fi2: "境界値は未定義の場合あり。",
  fi3: "学習用です。",
  example: "例：v0=0、v=10、t=2 → a=5。",
  uc1: "宿題。",
  uc2: "速算チェック。",
  uc3: "関連ツールと比較。",
  faq: [["例は？","例：v0=0、v=10、t=2 → a=5。"],["式は？","公式セクションへ。"],["助言？","学習用。"],["関連？","関連ツールへ。"]],
  article: "加速度",
  topic: "加速度",
  ref_a: "Wikipedia",
  ref_b: "Textbook formula",
}),
  labelMaps: euroL({
  v0_label: ["v0", "v0", "v0", "v0", "v0", "v0", "v0"],
  v0_ph: ["p. ej. 0", "مثال 0", "ex. 0", "mis. 0", "ex. 0", "напр. 0", "z. B. 0"],
  v_label: ["v", "v", "v", "v", "v", "v", "v"],
  v_ph: ["p. ej. 10", "مثال 10", "ex. 10", "mis. 10", "ex. 10", "напр. 10", "z. B. 10"],
  t_label: ["t", "t", "t", "t", "t", "t", "t"],
  t_ph: ["p. ej. 2", "مثال 2", "ex. 2", "mis. 2", "ex. 2", "напр. 2", "z. B. 2"],
  accOut_label: ["Aceleración", "التسارع", "Aceleração", "Percepatan", "Accélération", "Ускорение", "Beschleunigung"]
}),
  howMaps: M("Introduce v0, v y t.", "أدخل v0 و v و t.", "Informe v0, v e t.", "Isi v0, v, dan t.", "Saisissez v0, v et t.", "Введите v0, v и t.", "v0, v und t eingeben."),
  exMaps: M("Ejemplo: a=5.", "مثال: a=5.", "Exemplo: a=5.", "Contoh: a=5.", "Exemple : a=5.", "Пример: a=5.", "Beispiel: a=5."),
  fields: [{"id": "v0", "type": "number", "half": true, "labelKey": "v0_label", "phKey": "v0_ph"}, {"id": "v", "type": "number", "half": true, "labelKey": "v_label", "phKey": "v_ph"}, {"id": "t", "type": "number", "half": true, "labelKey": "t_label", "phKey": "t_ph"}],
  results: [{"id": "accOut", "labelKey": "accOut_label"}],
  refs: [{"labelKey": "ref_a_label", "href": "https://en.wikipedia.org/wiki/Acceleration"}, {"labelKey": "ref_b_label", "href": "https://en.wikipedia.org/wiki/Kinematics"}],
  computeJs: `
        var v0=parseFloat(v0El.value), v=parseFloat(vEl.value), t=parseFloat(tEl.value);
        if(!Number.isFinite(v0)||!Number.isFinite(v)||!(t>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ accOut:fmt((v-v0)/t) }};
`,
  sampleJs: `
        v0El.value='0';
        vEl.value='10';
        tEl.value='2';
`,
});

console.log('All #46–#62 defs written (17).');
