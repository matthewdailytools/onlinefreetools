/**
 * §12 #27 how-to-calculate-significant-figures 工具定义（十语独立 UI）。
 * prefix: tool_significant_figures；page: howToCalculateSignificantFiguresPage / renderHowToCalculateSignificantFiguresPage。
 */
import { withBtns } from '../locale-ui-common.mjs';

/** 十语 UI（how/formula/faq/usecase 等须独立重写，禁止英模同构）。 */
const _ui = {
	en: withBtns('en', {
		"mode_label": "Mode",
		"mode_count": "Count sig figs",
		"mode_round": "Round to N sig figs",
		"num_label": "Number (as text)",
		"num_ph": "e.g. 0.00304 or 1234.56",
		"n_label": "N (for round)",
		"n_ph": "e.g. 3",
		"countOut_label": "Significant figures",
		"roundedOut_label": "Rounded value",
		"sciOut_label": "Scientific form",
		"result_note": "Count from the string; round uses half away from zero (half-up for positives).",
		"err_generic": "Enter a valid number string; for round, also N ≥ 1.",
		"how_title": "How it works",
		"how_body": "Choose Count or Round. Paste the number as text so leading zeros stay visible. Count returns how many sig figs; Round needs N and shows a decimal string plus scientific form like 1.23e3.",
		"formula_title": "Rules documented here",
		"formula_body": "Standard school counting and half-away rounding:",
		"formula_item_1": "Non-zero digits always count; zeros between them count.",
		"formula_item_2": "Leading zeros never count (0.00304 → 3).",
		"formula_item_3": "Trailing zeros after a decimal count; bare trailing zeros in integers without a decimal do not.",
		"formula_item_4": "Rounding: scale mantissa to N digits; halfway cases move away from zero (positives half-up).",
		"example_title": "Example",
		"example": "Count 0.00304 → 3. Round 1234.56 to 3 → 1230 and 1.23e3.",
		"usecases_title": "When to use it",
		"usecase_1": "Lab homework: check how many sig figs a measurement string carries.",
		"usecase_2": "Round a calculated result to the allowed precision.",
		"usecase_3": "Compare ordinary and scientific displays of the same round.",
		"disclaimer": "Educational counting/rounding rules only — lab SOPs may define trailing zeros differently.",
		"references": "Wikipedia significant figures and rounding.",
		"ref_sig_label": "Wikipedia — Significant figures",
		"ref_round_label": "Wikipedia — Rounding",
		"article": "Count or round significant figures from a number string with explicit school rules.",
		"faq_q1": "Do leading zeros count?",
		"faq_a1": "No. In 0.00304 only 3, 0, and 4 count → 3.",
		"faq_q2": "What about trailing zeros in 1200?",
		"faq_a2": "Without a decimal point this page does not count them (2 sig figs).",
		"faq_q3": "How is halfway rounded?",
		"faq_a3": "Away from zero; for positives that is half-up.",
		"faq_q4": "Why keep the input as text?",
		"faq_a4": "So forms like 0.00304 keep visible leading zeros for counting.",
	}),
	zh: withBtns('zh', {
		"mode_label": "模式",
		"mode_count": "计数有效数字",
		"mode_round": "修约到 N 位",
		"num_label": "数字（文本）",
		"num_ph": "例如 0.00304 或 1234.56",
		"n_label": "N（修约用）",
		"n_ph": "例如 3",
		"countOut_label": "有效数字位数",
		"roundedOut_label": "修约结果",
		"sciOut_label": "科学计数形式",
		"result_note": "按字符串计数；修约采用半分远离零（正数等同 half-up）。",
		"err_generic": "请输入合法数字字符串；修约模式还需 N≥1。",
		"how_title": "怎么用",
		"how_body": "选择计数或修约。用文本粘贴数字以保留前导零。计数返回位数；修约需 N，并同时给出普通写法与如 1.23e3 的科学形式。",
		"formula_title": "本页写明的规则",
		"formula_body": "常用教材计数与半分远离零修约：",
		"formula_item_1": "非零数字必计；夹在中间的零也计。",
		"formula_item_2": "前导零不计（0.00304 → 3）。",
		"formula_item_3": "小数点后的末尾零计入；无小数点的整数末尾零本页不计。",
		"formula_item_4": "修约：把尾数缩到 N 位；恰为半分时远离零（正数向上）。",
		"example_title": "示例",
		"example": "计数 0.00304 → 3。把 1234.56 修约到 3 位 → 1230 与 1.23e3。",
		"usecases_title": "适合什么场景",
		"usecase_1": "实验作业：核对测量字符串有几位有效数字。",
		"usecase_2": "把计算结果修约到允许精度。",
		"usecase_3": "对照普通写法与科学计数显示。",
		"disclaimer": "仅为教育用计数/修约规则；实验室 SOP 可能对末尾零另有约定。",
		"references": "维基百科有效数字与舍入条目。",
		"ref_sig_label": "维基百科 — 有效数字",
		"ref_round_label": "维基百科 — 舍入",
		"article": "按字符串计数或修约有效数字，并写明教材常用规则。",
		"faq_q1": "为什么要用文本输入？",
		"faq_a1": "才能保留 0.00304 这类前导零以便计数。",
		"faq_q2": "1200 的末尾零怎么算？",
		"faq_a2": "无小数点时本页不计，记为 2 位有效数字。",
		"faq_q3": "0.00304 为什么是 3 位？",
		"faq_a3": "前导零不计，只计 3、0、4。",
		"faq_q4": "半分如何处理？",
		"faq_a4": "远离零；对正数即 half-up。",
	}),
	es: withBtns('es', {
		"mode_label": "Modo",
		"mode_count": "Contar cifras",
		"mode_round": "Redondear a N",
		"num_label": "Número (texto)",
		"num_ph": "p. ej. 0,00304 o 1234,56",
		"n_label": "N (redondeo)",
		"n_ph": "p. ej. 3",
		"countOut_label": "Cifras significativas",
		"roundedOut_label": "Valor redondeado",
		"sciOut_label": "Forma científica",
		"result_note": "Cuenta desde la cadena; el redondeo usa mitad lejos de cero.",
		"err_generic": "Introduce una cadena numérica válida; en redondeo, N ≥ 1.",
		"how_title": "Cómo funciona",
		"how_body": "Elige Contar o Redondear. Pega el número como texto para ver ceros a la izquierda. Contar da la cantidad; Redondear pide N y muestra forma decimal y científica.",
		"formula_title": "Reglas documentadas",
		"formula_body": "Conteo escolar y redondeo mitad lejos de cero:",
		"formula_item_1": "Los dígitos no nulos siempre cuentan; los ceros intermedios también.",
		"formula_item_2": "Los ceros a la izquierda no cuentan (0,00304 → 3).",
		"formula_item_3": "Ceros finales tras el decimal sí; en enteros sin decimal, no en esta página.",
		"formula_item_4": "Redondeo: mantisa a N dígitos; empates lejos de cero.",
		"example_title": "Ejemplo",
		"example": "Contar 0,00304 → 3. Redondear 1234,56 a 3 → 1230 y 1,23e3.",
		"usecases_title": "Cuándo usarlo",
		"usecase_1": "Prácticas: comprobar cifras de una medida.",
		"usecase_2": "Ajustar un resultado a la precisión permitida.",
		"usecase_3": "Comparar forma ordinaria y científica.",
		"disclaimer": "Solo reglas educativas; los SOP de laboratorio pueden diferir en ceros finales.",
		"references": "Wikipedia cifras significativas y redondeo.",
		"ref_sig_label": "Wikipedia — Cifras significativas",
		"ref_round_label": "Wikipedia — Redondeo",
		"article": "Cuenta o redondea cifras significativas desde una cadena con reglas explícitas.",
		"faq_q1": "¿Los ceros a la izquierda cuentan?",
		"faq_a1": "No. En 0,00304 solo 3, 0 y 4 → 3 cifras.",
		"faq_q2": "¿Y los ceros finales de 1200?",
		"faq_a2": "Sin punto decimal esta página no los cuenta (2 cifras).",
		"faq_q3": "¿Cómo se redondea el empate?",
		"faq_a3": "Lejos de cero; en positivos es half-up.",
		"faq_q4": "¿Por qué texto y no número?",
		"faq_a4": "Para conservar ceros a la izquierda visibles al contar.",
	}),
	ar: withBtns('ar', {
		"mode_label": "الوضع",
		"mode_count": "عد الأرقام المعنوية",
		"mode_round": "تقريب إلى N",
		"num_label": "العدد (نص)",
		"num_ph": "مثال 0.00304 أو 1234.56",
		"n_label": "N (للتقريب)",
		"n_ph": "مثال 3",
		"countOut_label": "عدد الأرقام المعنوية",
		"roundedOut_label": "القيمة المقرّبة",
		"sciOut_label": "الصيغة العلمية",
		"result_note": "العد من السلسلة؛ التقريب نصف بعيد عن الصفر.",
		"err_generic": "أدخل سلسلة عددية صالحة؛ وللتقريب N ≥ 1.",
		"how_title": "طريقة الاستخدام",
		"how_body": "اختر العد أو التقريب. الصق العدد كنص للإبقاء على الأصفار البادئة. العد يعيد العدد؛ التقريب يحتاج N ويعرض الشكل العشري والعلمي.",
		"formula_title": "القواعد الموثّقة",
		"formula_body": "عدّ مدرسي وتقريب النصف بعيدًا عن الصفر:",
		"formula_item_1": "الأرقام غير الصفرية تُحسب دائمًا وكذلك الأصفار بينها.",
		"formula_item_2": "الأصفار البادئة لا تُحسب (0.00304 → 3).",
		"formula_item_3": "الأصفار اللاحقة بعد الفاصلة تُحسب؛ في الأعداد الصحيحة بلا فاصلة لا تُحسب هنا.",
		"formula_item_4": "التقريب: اختزال الجزء الصحيح إلى N؛ عند النصف بعيدًا عن الصفر.",
		"example_title": "مثال",
		"example": "عد 0.00304 → 3. قرّب 1234.56 إلى 3 → 1230 و1.23e3.",
		"usecases_title": "متى تستخدمه",
		"usecase_1": "مختبر: التحقق من أرقام قياس.",
		"usecase_2": "تقريب نتيجة إلى الدقة المسموحة.",
		"usecase_3": "مقارنة العرض العادي والعلمي.",
		"disclaimer": "قواعد تعليمية فقط؛ إجراءات المختبر قد تختلف بشأن الأصفار اللاحقة.",
		"references": "ويكيبيديا الأرقام المعنوية والتقريب.",
		"ref_sig_label": "ويكيبيديا — الأرقام المعنوية",
		"ref_round_label": "ويكيبيديا — التقريب",
		"article": "عُد أو قرّب الأرقام المعنوية من سلسلة عددية بقواعد صريحة.",
		"faq_q1": "هل تُحسب الأصفار البادئة؟",
		"faq_a1": "لا. في 0.00304 تُحسب 3 و0 و4 فقط → 3.",
		"faq_q2": "كيف يُعامل النصف؟",
		"faq_a2": "بعيدًا عن الصفر؛ للموجب مثل half-up.",
		"faq_q3": "لماذا الإدخال نصي؟",
		"faq_a3": "للحفاظ على الأصفار البادئة عند العد.",
		"faq_q4": "أصفار 1200 اللاحقة؟",
		"faq_a4": "بلا فاصلة عشرية لا تُحسب هنا (رقمان معنويان).",
	}),
	pt: withBtns('pt', {
		"mode_label": "Modo",
		"mode_count": "Contar algarismos",
		"mode_round": "Arredondar para N",
		"num_label": "Número (texto)",
		"num_ph": "ex.: 0,00304 ou 1234,56",
		"n_label": "N (arredondamento)",
		"n_ph": "ex.: 3",
		"countOut_label": "Algarismos significativos",
		"roundedOut_label": "Valor arredondado",
		"sciOut_label": "Forma científica",
		"result_note": "Contagem pela string; arredondamento metade longe de zero.",
		"err_generic": "Informe uma string numérica válida; no arredondamento, N ≥ 1.",
		"how_title": "Como funciona",
		"how_body": "Escolha Contar ou Arredondar. Cole o número como texto para manter zeros à esquerda. Contar devolve a quantidade; Arredondar pede N e mostra forma decimal e científica.",
		"formula_title": "Regras documentadas",
		"formula_body": "Contagem escolar e arredondamento metade longe de zero:",
		"formula_item_1": "Dígitos não nulos sempre contam; zeros entre eles também.",
		"formula_item_2": "Zeros à esquerda não contam (0,00304 → 3).",
		"formula_item_3": "Zeros finais após o decimal contam; em inteiros sem decimal, não nesta página.",
		"formula_item_4": "Arredondamento: mantissa a N dígitos; empates longe de zero.",
		"example_title": "Exemplo",
		"example": "Contar 0,00304 → 3. Arredondar 1234,56 para 3 → 1230 e 1,23e3.",
		"usecases_title": "Quando usar",
		"usecase_1": "Laboratório: checar algarismos de uma medida.",
		"usecase_2": "Ajustar resultado à precisão permitida.",
		"usecase_3": "Comparar forma comum e científica.",
		"disclaimer": "Apenas regras educativas; SOPs de laboratório podem tratar zeros finais de outro modo.",
		"references": "Wikipedia algarismos significativos e arredondamento.",
		"ref_sig_label": "Wikipedia — Algarismos significativos",
		"ref_round_label": "Wikipedia — Arredondamento",
		"article": "Conte ou arredonde algarismos significativos a partir de uma string com regras explícitas.",
		"faq_q1": "Zeros à esquerda contam?",
		"faq_a1": "Não. Em 0,00304 só 3, 0 e 4 → 3.",
		"faq_q2": "Por que entrada em texto?",
		"faq_a2": "Para manter zeros iniciais visíveis na contagem.",
		"faq_q3": "E zeros finais em 1200?",
		"faq_a3": "Sem decimal esta página não os conta (2 algarismos).",
		"faq_q4": "Empate no arredondamento?",
		"faq_a4": "Longe de zero; em positivos é half-up.",
	}),
	id: withBtns('id', {
		"mode_label": "Mode",
		"mode_count": "Hitung angka penting",
		"mode_round": "Bulatkan ke N",
		"num_label": "Angka (teks)",
		"num_ph": "mis. 0,00304 atau 1234,56",
		"n_label": "N (untuk bulat)",
		"n_ph": "mis. 3",
		"countOut_label": "Angka penting",
		"roundedOut_label": "Nilai dibulatkan",
		"sciOut_label": "Bentuk ilmiah",
		"result_note": "Hitung dari string; pembulatan half away from zero.",
		"err_generic": "Masukkan string angka valid; untuk bulat, N ≥ 1.",
		"how_title": "Cara kerja",
		"how_body": "Pilih Hitung atau Bulatkan. Tempel angka sebagai teks agar nol di depan tetap ada. Hitung mengembalikan jumlah; Bulatkan butuh N dan menampilkan bentuk desimal serta ilmiah.",
		"formula_title": "Aturan yang didokumentasikan",
		"formula_body": "Aturan sekolah dan pembulatan menjauh dari nol:",
		"formula_item_1": "Digit bukan nol selalu dihitung; nol di antaranya juga.",
		"formula_item_2": "Nol di depan tidak dihitung (0,00304 → 3).",
		"formula_item_3": "Nol trailing setelah desimal dihitung; pada bilangan bulat tanpa desimal, tidak di halaman ini.",
		"formula_item_4": "Pembulatan: mantissa ke N digit; kasus setengah menjauh dari nol.",
		"example_title": "Contoh",
		"example": "Hitung 0,00304 → 3. Bulatkan 1234,56 ke 3 → 1230 dan 1,23e3.",
		"usecases_title": "Kapan dipakai",
		"usecase_1": "Praktikum: cek angka penting pengukuran.",
		"usecase_2": "Bulatkan hasil ke ketelitian yang diizinkan.",
		"usecase_3": "Bandingkan tampilan biasa dan ilmiah.",
		"disclaimer": "Hanya aturan edukasi; SOP lab bisa berbeda soal nol trailing.",
		"references": "Wikipedia significant figures dan rounding.",
		"ref_sig_label": "Wikipedia — Significant figures",
		"ref_round_label": "Wikipedia — Rounding",
		"article": "Hitung atau bulatkan angka penting dari string dengan aturan eksplisit.",
		"faq_q1": "Apakah nol di depan dihitung?",
		"faq_a1": "Tidak. Pada 0,00304 hanya 3, 0, 4 → 3.",
		"faq_q2": "Nol trailing pada 1200?",
		"faq_a2": "Tanpa desimal, halaman ini tidak menghitungnya (2 angka penting).",
		"faq_q3": "Setengah dibulatkan bagaimana?",
		"faq_a3": "Menjauh dari nol; untuk positif = half-up.",
		"faq_q4": "Mengapa input teks?",
		"faq_a4": "Agar nol di depan tetap terlihat saat menghitung.",
	}),
	fr: withBtns('fr', {
		"mode_label": "Mode",
		"mode_count": "Compter les chiffres",
		"mode_round": "Arrondir à N",
		"num_label": "Nombre (texte)",
		"num_ph": "ex. 0,00304 ou 1234,56",
		"n_label": "N (arrondi)",
		"n_ph": "ex. 3",
		"countOut_label": "Chiffres significatifs",
		"roundedOut_label": "Valeur arrondie",
		"sciOut_label": "Forme scientifique",
		"result_note": "Comptage depuis la chaîne ; arrondi moitié loin de zéro.",
		"err_generic": "Saisissez une chaîne numérique valide ; pour l’arrondi, N ≥ 1.",
		"how_title": "Fonctionnement",
		"how_body": "Choisissez Compter ou Arrondir. Collez le nombre en texte pour garder les zéros de tête. Compter renvoie le nombre de chiffres ; Arrondir demande N et affiche forme décimale et scientifique.",
		"formula_title": "Règles documentées",
		"formula_body": "Comptage scolaire et arrondi moitié loin de zéro :",
		"formula_item_1": "Les chiffres non nuls comptent toujours ; les zéros intercalaires aussi.",
		"formula_item_2": "Les zéros de tête ne comptent pas (0,00304 → 3).",
		"formula_item_3": "Zéros finaux après la virgule oui ; entiers sans décimale : non sur cette page.",
		"formula_item_4": "Arrondi : mantisse à N chiffres ; égalité loin de zéro.",
		"example_title": "Exemple",
		"example": "Compter 0,00304 → 3. Arrondir 1234,56 à 3 → 1230 et 1,23e3.",
		"usecases_title": "Quand l’utiliser",
		"usecase_1": "TP : vérifier les chiffres d’une mesure.",
		"usecase_2": "Ramener un résultat à la précision autorisée.",
		"usecase_3": "Comparer affichage ordinaire et scientifique.",
		"disclaimer": "Règles pédagogiques seulement ; les SOP de labo peuvent traiter autrement les zéros finaux.",
		"references": "Wikipedia chiffres significatifs et arrondi.",
		"ref_sig_label": "Wikipedia — Chiffre significatif",
		"ref_round_label": "Wikipedia — Arrondi",
		"article": "Comptez ou arrondissez les chiffres significatifs depuis une chaîne avec règles explicites.",
		"faq_q1": "Les zéros de tête comptent-ils ?",
		"faq_a1": "Non. Dans 0,00304 seuls 3, 0 et 4 → 3.",
		"faq_q2": "Et les zéros finaux de 1200 ?",
		"faq_a2": "Sans décimale cette page ne les compte pas (2 chiffres).",
		"faq_q3": "Arrondi à mi-chemin ?",
		"faq_a3": "Loin de zéro ; pour les positifs, half-up.",
		"faq_q4": "Pourquoi une saisie texte ?",
		"faq_a4": "Pour garder les zéros de tête visibles au comptage.",
	}),
	ja: withBtns('ja', {
		"mode_label": "モード",
		"mode_count": "有効数字を数える",
		"mode_round": "N 桁に丸める",
		"num_label": "数値（テキスト）",
		"num_ph": "例: 0.00304 または 1234.56",
		"n_label": "N（丸め用）",
		"n_ph": "例: 3",
		"countOut_label": "有効数字の桁数",
		"roundedOut_label": "丸め結果",
		"sciOut_label": "科学表記",
		"result_note": "文字列から計数。丸めはゼロから遠ざかる半分（正数は half-up 相当）。",
		"err_generic": "有効な数値文字列を入力。丸めでは N ≥ 1 も必要です。",
		"how_title": "使い方",
		"how_body": "計数か丸めを選びます。先頭ゼロを残すためテキストで貼り付けます。計数は桁数を返し、丸めは N が必要で通常表記と 1.23e3 のような科学表記を出します。",
		"formula_title": "ここに書いた規則",
		"formula_body": "教材的な計数と半分遠ざかり丸め：",
		"formula_item_1": "非ゼロは必ず数え、間のゼロも数える。",
		"formula_item_2": "先頭ゼロは数えない（0.00304 → 3）。",
		"formula_item_3": "小数点以下の末尾ゼロは数える。小数点のない整数の末尾ゼロはこのページでは数えない。",
		"formula_item_4": "丸め：仮数を N 桁に。ちょうど半分はゼロから遠ざける。",
		"example_title": "例",
		"example": "0.00304 を数える → 3。1234.56 を 3 桁に → 1230 と 1.23e3。",
		"usecases_title": "こんなときに",
		"usecase_1": "実験：測定値の有効数字を確認。",
		"usecase_2": "計算結果を許容桁に丸める。",
		"usecase_3": "通常表記と科学表記を見比べる。",
		"disclaimer": "教育用の計数・丸め規則のみ。実験室 SOP は末尾ゼロの扱いが異なる場合があります。",
		"references": "Wikipedia の有効数字と端数処理。",
		"ref_sig_label": "Wikipedia — 有効数字",
		"ref_round_label": "Wikipedia — 端数処理",
		"article": "数値文字列から有効数字を数え、または丸め、規則を明示します。",
		"faq_q1": "先頭のゼロは数える？",
		"faq_a1": "数えません。0.00304 は 3・0・4 のみで 3 桁。",
		"faq_q2": "1200 の末尾ゼロは？",
		"faq_a2": "小数点がない場合、このページでは数えず 2 桁。",
		"faq_q3": "半分の丸めは？",
		"faq_a3": "ゼロから遠ざかります。正数では half-up 相当。",
		"faq_q4": "なぜテキスト入力？",
		"faq_a4": "計数のため先頭ゼロを残すためです。",
	}),
	ru: withBtns('ru', {
		"mode_label": "Режим",
		"mode_count": "Подсчитать цифры",
		"mode_round": "Округлить до N",
		"num_label": "Число (текст)",
		"num_ph": "напр. 0,00304 или 1234,56",
		"n_label": "N (для округления)",
		"n_ph": "напр. 3",
		"countOut_label": "Значащие цифры",
		"roundedOut_label": "Округлённое значение",
		"sciOut_label": "Научная форма",
		"result_note": "Подсчёт по строке; округление половины от нуля.",
		"err_generic": "Введите корректную числовую строку; для округления также N ≥ 1.",
		"how_title": "Как пользоваться",
		"how_body": "Выберите Подсчёт или Округление. Вставьте число текстом, чтобы сохранить ведущие нули. Подсчёт возвращает количество; округление требует N и показывает обычный и научный вид.",
		"formula_title": "Задокументированные правила",
		"formula_body": "Школьный подсчёт и округление половины от нуля:",
		"formula_item_1": "Ненулевые цифры всегда считаются; нули между ними тоже.",
		"formula_item_2": "Ведущие нули не считаются (0,00304 → 3).",
		"formula_item_3": "Хвостовые нули после десятичной считаются; у целых без точки — нет на этой странице.",
		"formula_item_4": "Округление: мантисса до N цифр; ровно половина — от нуля.",
		"example_title": "Пример",
		"example": "Подсчёт 0,00304 → 3. Округление 1234,56 до 3 → 1230 и 1,23e3.",
		"usecases_title": "Когда применять",
		"usecase_1": "Лабораторная: проверить цифры измерения.",
		"usecase_2": "Округлить результат до допустимой точности.",
		"usecase_3": "Сравнить обычный и научный вид.",
		"disclaimer": "Только учебные правила; лабораторные SOP могут иначе трактовать хвостовые нули.",
		"references": "Wikipedia о значащих цифрах и округлении.",
		"ref_sig_label": "Wikipedia — Значащие цифры",
		"ref_round_label": "Wikipedia — Округление",
		"article": "Подсчитайте или округлите значащие цифры из строки с явными правилами.",
		"faq_q1": "Считаются ли ведущие нули?",
		"faq_a1": "Нет. В 0,00304 считаются 3, 0 и 4 → 3.",
		"faq_q2": "Как округляется половина?",
		"faq_a2": "От нуля; для положительных — half-up.",
		"faq_q3": "Почему текстовый ввод?",
		"faq_a3": "Чтобы сохранить ведущие нули при подсчёте.",
		"faq_q4": "Хвостовые нули в 1200?",
		"faq_a4": "Без десятичной точки здесь не считаются (2 цифры).",
	}),
	de: withBtns('de', {
		"mode_label": "Modus",
		"mode_count": "Stellen zählen",
		"mode_round": "Auf N runden",
		"num_label": "Zahl (Text)",
		"num_ph": "z. B. 0,00304 oder 1234,56",
		"n_label": "N (zum Runden)",
		"n_ph": "z. B. 3",
		"countOut_label": "Signifikante Stellen",
		"roundedOut_label": "Gerundeter Wert",
		"sciOut_label": "Wissenschaftliche Form",
		"result_note": "Zählen aus der Zeichenkette; Runden mit Hälfte weg von null.",
		"err_generic": "Gültige Zahlzeichenkette eingeben; beim Runden auch N ≥ 1.",
		"how_title": "So funktioniert’s",
		"how_body": "Wählen Sie Zählen oder Runden. Zahl als Text einfügen, damit führende Nullen bleiben. Zählen liefert die Anzahl; Runden braucht N und zeigt Dezimal- sowie wissenschaftliche Form.",
		"formula_title": "Dokumentierte Regeln",
		"formula_body": "Schulmäßiges Zählen und Hälfte-weg-Runden:",
		"formula_item_1": "Nichtnullziffern zählen immer; Nullen dazwischen auch.",
		"formula_item_2": "Führende Nullen zählen nicht (0,00304 → 3).",
		"formula_item_3": "Nachgestellte Nullen nach dem Dezimalpunkt zählen; bei Ganzzahlen ohne Punkt hier nicht.",
		"formula_item_4": "Runden: Mantisse auf N Stellen; genau Hälfte weg von null.",
		"example_title": "Beispiel",
		"example": "Zählen 0,00304 → 3. Runden 1234,56 auf 3 → 1230 und 1,23e3.",
		"usecases_title": "Wann sinnvoll",
		"usecase_1": "Praktikum: Stellen einer Messung prüfen.",
		"usecase_2": "Ergebnis auf erlaubte Genauigkeit runden.",
		"usecase_3": "Gewöhnliche und wissenschaftliche Darstellung vergleichen.",
		"disclaimer": "Nur Lernregeln; Labor-SOPs können nachgestellte Nullen anders definieren.",
		"references": "Wikipedia signifikante Stellen und Runden.",
		"ref_sig_label": "Wikipedia — Signifikante Stelle",
		"ref_round_label": "Wikipedia — Runden",
		"article": "Zählen oder Runden signifikanter Stellen aus einer Zeichenkette mit klaren Regeln.",
		"faq_q1": "Zählen führende Nullen?",
		"faq_a1": "Nein. Bei 0,00304 zählen 3, 0 und 4 → 3.",
		"faq_q2": "Warum Texteingabe?",
		"faq_a2": "Damit führende Nullen beim Zählen sichtbar bleiben.",
		"faq_q3": "Trailing-Nullen bei 1200?",
		"faq_a3": "Ohne Dezimalpunkt zählt diese Seite sie nicht (2 Stellen).",
		"faq_q4": "Halb genau — wohin runden?",
		"faq_a4": "Weg von null; bei Positiven half-up.",
	}),
};

export default {
	seq: 27,
	slug: "how-to-calculate-significant-figures",
	prefix: "tool_significant_figures",
	nameZh: "有效数字计算器",
	category: 'calculator',
	ymyl: false,
	pageFile: "howToCalculateSignificantFiguresPage",
	pageExport: "renderHowToCalculateSignificantFiguresPage",
	anchor: "significant-figures",
	related: ["how-to-calculate-scientific-notation","how-to-calculate-z-score"],
	glyph: "M8 24V8h6l4 10 4-10h6v16",
	sampleHint: "count 0.00304 → 3; round 1234.56 to 3 → 1230 / 1.23e3",
	titles: {
		"en": "Significant Figures Calculator — How to Count and Round Sig Figs",
		"zh": "有效数字计算器 — 如何计数与修约有效数字",
		"es": "Calculadora de cifras significativas — Contar y redondear",
		"ar": "حاسبة الأرقام المعنوية — العد والتقريب",
		"pt": "Calculadora de algarismos significativos — Contar e arredondar",
		"id": "Kalkulator angka penting — Menghitung dan membulatkan",
		"fr": "Calculateur de chiffres significatifs — Compter et arrondir",
		"ja": "有効数字計算ツール — 桁の数え方と丸め方",
		"ru": "Калькулятор значащих цифр — Подсчёт и округление",
		"de": "Signifikante Stellen Rechner — Zählen und Runden"
	},
	descriptions: {
		"en": "Count significant figures in a number string or round to N sig figs. Leading zeros do not count; trailing zeros after a decimal do. Example: 0.00304 → 3 sig figs; round 1234.56 to 3 → 1230 (1.23e3). Half away from zero. Runs in your browser to calculate and check homework.",
		"zh": "对数字字符串统计有效数字，或按 N 位有效数字修约。前导零不计；小数点后的末尾零计入。示例：0.00304 → 3 位；把 1234.56 修约到 3 位 → 1230，科学计数 1.23e3。正数半分远离零（等同 half-up）。浏览器内计算，适合作业核对计数规则与修约结果，并写明整数末尾零的歧义处理。",
		"es": "Cuenta cifras significativas en una cadena o redondea a N. Los ceros a la izquierda no cuentan; los finales tras el decimal sí. Ejemplo: 0,00304 → 3; 1234,56 a 3 → 1230 (1,23e3). Mitad lejos de cero. En el navegador.",
		"ar": "عد الأرقام المعنوية في سلسلة أو قرّب إلى N. الأصفار البادئة لا تُحسب؛ اللاحقة بعد الفاصلة تُحسب. مثال: 0.00304 → 3؛ تقريب 1234.56 إلى 3 → 1230 (1.23e3). النصف بعيدًا عن الصفر. في المتصفح.",
		"pt": "Conte algarismos significativos em uma string ou arredonde para N. Zeros à esquerda não contam; zeros finais após o decimal contam. Exemplo: 0,00304 → 3; 1234,56 para 3 → 1230 (1,23e3). Metade longe de zero. No navegador.",
		"id": "Hitung angka penting pada string angka atau bulatkan ke N. Nol di depan tidak dihitung; nol trailing setelah desimal dihitung. Contoh: 0,00304 → 3; 1234,56 ke 3 → 1230 (1,23e3). Half away from zero. Di browser.",
		"fr": "Comptez les chiffres significatifs d’une chaîne ou arrondissez à N. Les zéros de tête ne comptent pas ; les zéros finaux après la virgule oui. Exemple : 0,00304 → 3 ; 1234,56 à 3 → 1230 (1,23e3). Moitié loin de zéro. Dans le navigateur.",
		"ja": "数値文字列の有効数字を数え、または N 桁に丸めます。先頭のゼロは数えず、小数点以下の末尾ゼロは数えます。例：0.00304 → 3 桁；1234.56 を 3 桁に → 1230（1.23e3）。正数はゼロから遠ざかる半分（half-up 相当）。ブラウザ内で、計数規則と丸め結果の確認向けです。整数の末尾ゼロの扱いも明記します。",
		"ru": "Подсчитайте значащие цифры в строке или округлите до N. Ведущие нули не считаются; конечные после десятичной — считаются. Пример: 0,00304 → 3; 1234,56 до 3 → 1230 (1,23e3). Половина от нуля. В браузере.",
		"de": "Zählen Sie signifikante Stellen in einer Zahlzeichenkette oder runden Sie auf N. Führende Nullen zählen nicht; nachgestellte nach dem Dezimalpunkt schon. Beispiel: 0,00304 → 3; 1234,56 auf 3 → 1230 (1,23e3). Hälfte weg von null. Im Browser."
	},
	ui: _ui,
	fields: [
		{
			"id": "mode",
			"type": "select",
			"half": true,
			"labelKey": "mode_label",
			"options": [
				{
					"value": "count",
					"labelKey": "mode_count",
					"selected": true
				},
				{
					"value": "round",
					"labelKey": "mode_round"
				}
			]
		},
		{
			"id": "num",
			"type": "text",
			"half": true,
			"labelKey": "num_label",
			"phKey": "num_ph"
		},
		{
			"id": "n",
			"type": "number",
			"half": true,
			"labelKey": "n_label",
			"phKey": "n_ph"
		}
	],
	results: [
		{
			"id": "countOut",
			"labelKey": "countOut_label"
		},
		{
			"id": "roundedOut",
			"labelKey": "roundedOut_label"
		},
		{
			"id": "sciOut",
			"labelKey": "sciOut_label"
		}
	],
	refs: [
		{
			"labelKey": "ref_sig_label",
			"href": "https://en.wikipedia.org/wiki/Significant_figures"
		},
		{
			"labelKey": "ref_round_label",
			"href": "https://en.wikipedia.org/wiki/Rounding"
		}
	],
	computeJs: `
        /** 从数字字符串计数有效数字（科学计数看系数；整数末尾 0 无小数点不计）。 */
        function countSigFigs(raw) {
          var s = String(raw).trim().replace(/,/g, '');
          if (!s) return null;
          var em = s.match(/^([+-]?(?:\\d+\\.?\\d*|\\.\\d+))[eE]([+-]?\\d+)$/);
          if (em) s = em[1];
          s = s.replace(/^[+-]/, '');
          if (!/^\\d*\\.?\\d+$/.test(s)) return null;
          if (/^0*\\.?0*$/.test(s)) return 1;
          var t = s.replace(/^0+/, '');
          if (t.charAt(0) === '.') {
            t = t.replace(/^\\.0*/, '');
            return t.replace(/\\./g, '').length;
          }
          if (t.indexOf('.') >= 0) {
            return t.replace(/\\./g, '').length;
          }
          return t.replace(/0+$/, '').length || 1;
        }

        /** 半远离零（正数等同 half-up）修约到 n 位有效数字。 */
        function roundSig(num, n) {
          if (!Number.isFinite(num) || !(n >= 1) || n > 15) return null;
          if (num === 0) return { rounded: '0', sci: '0e0' };
          var sign = num < 0 ? -1 : 1;
          var abs = Math.abs(num);
          var exp = Math.floor(Math.log10(abs));
          var mant = abs / Math.pow(10, exp);
          var factor = Math.pow(10, n - 1);
          var scaled = mant * factor;
          var roundedScaled = Math.floor(scaled + 0.5);
          var roundedMant = roundedScaled / factor;
          if (roundedMant >= 10) {
            roundedMant /= 10;
            exp += 1;
          }
          var value = sign * roundedMant * Math.pow(10, exp);
          var sciMant = roundedMant.toFixed(n - 1);
          var sci = (sign < 0 ? '-' : '') + sciMant + 'e' + exp;
          var rounded;
          if (exp >= n - 1) {
            rounded = String(Math.round(value));
          } else if (exp >= 0) {
            rounded = value.toFixed(n - 1 - exp);
          } else {
            rounded = value.toFixed(n - 1 - exp);
          }
          if (sign < 0 && rounded.charAt(0) !== '-') rounded = '-' + rounded;
          return { rounded: rounded, sci: sci };
        }

        var mode = modeEl.value;
        var raw = String(numEl.value || '').trim();
        if (!raw) return { ok: false, error: msgErr };
        if (mode === 'count') {
          var c = countSigFigs(raw);
          if (c == null) return { ok: false, error: msgErr };
          return { ok: true, values: { countOut: String(c), roundedOut: '—', sciOut: '—' } };
        }
        var n = parseInt(nEl.value, 10);
        var x = Number(raw.replace(/,/g, ''));
        if (!Number.isFinite(x) || !(n >= 1)) return { ok: false, error: msgErr };
        var r = roundSig(x, n);
        if (!r) return { ok: false, error: msgErr };
        return { ok: true, values: { countOut: '—', roundedOut: r.rounded, sciOut: r.sci } };
`,
	sampleJs: `
        modeEl.value = 'count';
        numEl.value = '0.00304';
        nEl.value = '3';
`,
};
