#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const updates = {
  'src/site/i18n/en.ts': {
    tool_headers_description: "Fetch a URL's HTTP response headers server-side (use HEAD, fall back to GET). Process: send HEAD, follow redirects, collect headers, block private hosts. Example: inspect CORS, Cache-Control, and Strict-Transport-Security headers to debug redirects and CDN settings.",
    tool_markdown_description: "Convert Markdown into sanitized HTML with preview. Process: parse CommonMark, sanitize output, and render code blocks/lists/links. Example: transform a blog post Markdown into safe HTML ready for publishing.",
    tool_markdown_export_description: "Generate a full HTML document from Markdown including sanitization and template wrapping. Steps: render Markdown, inject into HTML template, add meta and assets, provide download. Example: export a post as a standalone .html file.",
    tool_bmi_description: "Calculate Body Mass Index (BMI) = weight(kg) / (height(m))^2. Process: choose metric/imperial, convert units if needed, compute BMI, map to category. Example: 70kg & 175cm → BMI 22.9 (Normal).",
    tool_ip_address_description: "Discover your public IP address and basic metadata. Process: server returns requester IP, optionally look up geolocation/ISP; include IPv4/IPv6 handling. Example: shows IP and country for troubleshooting remote access.",
    tool_squarefeet_description: "Calculate area in square feet from a length and width. Process: select units (ft/m/in), convert to feet, compute area (length × width), convert units as needed. Example: 3m × 4m = 12 m² ≈ 129.17 sq ft."
  },
  'src/site/i18n/zh.ts': {
    tool_headers_description: "通过服务器端请求获取网址的 HTTP 响应 Header（优先 HEAD，遇 405/501 回退到 GET）。流程：发送 HEAD、跟随重定向、收集头部、屏蔽内网主机。示例：检查 CORS、Cache-Control、Strict-Transport-Security 以排查重定向与 CDN 配置。",
    tool_markdown_description: "将 Markdown 转换为已净化的 HTML 并预览。流程：解析 CommonMark、清理不安全标签、渲染代码块/列表/链接。示例：把博客文章 Markdown 转为可发布的安全 HTML。",
    tool_markdown_export_description: "把 Markdown 导出为完整 HTML 文档并打包（含模板、meta 与资源）。步骤：渲染 Markdown、注入模板、添加 meta、提供下载。示例：导出为独立的 .html 博客文章。",
    tool_bmi_description: "计算 BMI：BMI = 体重(kg) / (身高(m))^2。流程：选择公制/英制，必要时换算单位，计算数值并判定分类。示例：70kg 与 175cm → BMI 22.9（正常）。",
    tool_ip_address_description: "查询公网 IP 及基础元信息。流程：服务器返回请求来源 IP，支持 IPv4/IPv6，并可做简单地理/ISP 查询。示例：显示 IP 与国家，便于远程访问与故障排查。",
    tool_squarefeet_description: "根据长度与宽度计算平方英尺面积。流程：选择单位（英尺/米/英寸）、必要时换算为英尺、计算面积（长×宽）、并转换为平方英尺。示例：3m × 4m = 12 m² ≈ 129.17 平方英尺。"
  },
  'src/site/i18n/es.ts': {
    tool_headers_description: "Obtener los encabezados HTTP de una URL desde el servidor (usar HEAD, fallback a GET). Proceso: enviar HEAD, seguir redirecciones, recopilar encabezados y bloquear hosts privados. Ejemplo: inspeccionar CORS, Cache-Control y HSTS para depurar redirecciones y configuración CDN.",
    tool_markdown_description: "Convertir Markdown a HTML sanitizado con vista previa. Proceso: parsear CommonMark, sanitizar salida y renderizar bloques de código/listas/enlaces. Ejemplo: convertir un post de blog a HTML listo para publicar.",
    tool_markdown_export_description: "Generar un documento HTML completo desde Markdown, con plantilla y metadatos. Pasos: renderizar Markdown, inyectar en plantilla HTML, añadir meta/recursos y permitir descarga. Ejemplo: exportar un artículo como archivo .html independiente.",
    tool_bmi_description: "Calcular IMC: IMC = peso(kg) / (altura(m))^2. Proceso: elegir unidades, convertir si es necesario, calcular y mapear a categoría. Ejemplo: 70kg y 175cm → IMC 22.9 (Normal).",
    tool_ip_address_description: "Descubrir tu IP pública y metadatos básicos. Proceso: el servidor devuelve la IP del solicitante, manejar IPv4/IPv6 y opcionalmente resolver geolocalización/ISP. Ejemplo: muestra IP y país para resolución de problemas.",
    tool_squarefeet_description: "Calcular área en pies cuadrados a partir de largo y ancho. Proceso: seleccionar unidad (ft/m/in), convertir a pies, calcular área (largo × ancho) y convertir si es necesario. Ejemplo: 3m × 4m = 12 m² ≈ 129.17 sq ft."
  },
  'src/site/i18n/fr.ts': {
    tool_headers_description: "Récupérer les en-têtes HTTP d'une URL côté serveur (HEAD, fallback GET). Processus : envoyer HEAD, suivre les redirections, collecter les en-têtes et bloquer les hôtes privés. Exemple : vérifier CORS, Cache-Control et HSTS pour diagnostiquer les redirections et la configuration CDN.",
    tool_markdown_description: "Convertir Markdown en HTML assaini avec aperçu. Processus : parser CommonMark, assainir le HTML et rendre les blocs de code/listes/liens. Exemple : transformer un article de blog Markdown en HTML prêt à publier.",
    tool_markdown_export_description: "Générer un document HTML complet depuis Markdown, en l'encapsulant dans un template. Étapes : rendre le Markdown, injecter dans le template, ajouter meta/assets et proposer le téléchargement. Exemple : exporter un billet en fichier .html autonome.",
    tool_bmi_description: "Calculer l'IMC : IMC = poids(kg) / (taille(m))^2. Processus : choisir unités, convertir si besoin, calculer IMC et déterminer la catégorie. Exemple : 70kg et 175cm → IMC 22,9 (Normal).",
    tool_ip_address_description: "Découvrir votre adresse IP publique et métadonnées. Processus : le serveur renvoie l'IP du client (IPv4/IPv6) et peut effectuer une recherche géo/ISP. Exemple : afficher l'IP et le pays pour le dépannage.",
    tool_squarefeet_description: "Calculer la surface en pieds carrés à partir de longueur et largeur. Processus : sélectionner l'unité (ft/m/in), convertir en pieds, calculer (L × W) et convertir en sq ft. Exemple : 3m × 4m = 12 m² ≈ 129,17 sq ft."
  },
  'src/site/i18n/de.ts': {
    tool_headers_description: "HTTP-Response-Header einer URL serverseitig abrufen (HEAD, Fallback GET). Ablauf: HEAD senden, Redirects folgen, Header sammeln, private Hosts blockieren. Beispiel: CORS, Cache-Control, HSTS prüfen, um Redirects und CDN-Einstellungen zu debuggen.",
    tool_markdown_description: "Markdown in bereinigtes HTML umwandeln mit Vorschau. Ablauf: CommonMark parsen, HTML sanitizen, Codeblöcke/Listen/Links rendern. Beispiel: Blog-Markdown in veröffentlichungsfähiges HTML konvertieren.",
    tool_markdown_export_description: "Eine vollständige HTML-Datei aus Markdown erzeugen, inkl. Template und Metadaten. Schritte: rendern, in Template einfügen, meta/assets hinzufügen, Download bereitstellen. Beispiel: Beitrag als eigenständige .html exportieren.",
    tool_bmi_description: "BMI berechnen: BMI = Gewicht(kg) / (Größe(m))^2. Ablauf: Einheit wählen, ggf. umrechnen, BMI berechnen und Kategorie bestimmen. Beispiel: 70kg und 175cm → BMI 22,9 (Normal).",
    tool_ip_address_description: "Ihre öffentliche IP und Basis-Metadaten ermitteln. Ablauf: Server liefert anfragende IP (IPv4/IPv6), ggf. Geo/ISP-Abfrage. Beispiel: IP und Land anzeigen zur Fehlerbehebung.",
    tool_squarefeet_description: "Fläche in Quadratfuß aus Länge und Breite berechnen. Ablauf: Einheit wählen (ft/m/in), in Fuß umrechnen, Fläche berechnen (L × W), ggf. in sq ft umrechnen. Beispiel: 3m × 4m = 12 m² ≈ 129,17 sq ft."
  },
  'src/site/i18n/ru.ts': {
    tool_headers_description: "Получить HTTP-заголовки ответа для URL на сервере (HEAD, fallback на GET). Процесс: отправить HEAD, следовать редиректам, собрать заголовки, блокировать приватные хосты. Пример: проверить CORS, Cache-Control, HSTS для отладки редиректов и настроек CDN.",
    tool_markdown_description: "Преобразовать Markdown в очищенный HTML с просмотром. Процесс: парсинг CommonMark, очистка HTML, рендеринг блоков кода/списков/ссылок. Пример: конвертировать статью в HTML для публикации.",
    tool_markdown_export_description: "Сгенерировать полный HTML-документ из Markdown с шаблоном и метаданными. Шаги: рендер, вставка в шаблон, добавление meta/assets, скачивание. Пример: экспортировать пост как автономный .html.",
    tool_bmi_description: "Рассчитать ИМТ: ИМТ = вес(кг) / (рост(м))^2. Процесс: выбрать единицы, при необходимости преобразовать, вычислить и отнести к категории. Пример: 70кг и 175см → ИМТ 22.9 (Нормально).",
    tool_ip_address_description: "Определить публичный IP и базовую информацию. Процесс: сервер возвращает IP запроса (IPv4/IPv6), опционально гео/ISP. Пример: показать IP и страну для устранения неполадок.",
    tool_squarefeet_description: "Вычислить площадь в квадратных футах по длине и ширине. Процесс: выбрать единицы (ft/m/in), преобразовать в футы, вычислить площадь (L × W), при необходимости сконвертировать в sq ft. Пример: 3m × 4m = 12 m² ≈ 129.17 sq ft."
  },
  'src/site/i18n/pt.ts': {
    tool_headers_description: "Buscar headers HTTP de uma URL no servidor (usar HEAD, fallback para GET). Processo: enviar HEAD, seguir redirecionamentos, coletar headers e bloquear hosts privados. Exemplo: inspecionar CORS, Cache-Control e HSTS para depurar redirecionamentos e configuração de CDN.",
    tool_markdown_description: "Converter Markdown em HTML sanitizado com pré-visualização. Processo: parsear CommonMark, sanitizar saída e renderizar blocos de código/listas/links. Exemplo: converter um post de blog em HTML pronto para publicação.",
    tool_markdown_export_description: "Gerar um documento HTML completo a partir do Markdown, incluindo template e metadados. Passos: renderizar, injetar no template, adicionar meta/assets e permitir download. Exemplo: exportar um artigo como .html independente.",
    tool_bmi_description: "Calcular IMC: IMC = peso(kg) / (altura(m))^2. Processo: escolher unidades, converter se necessário, calcular e mapear para categoria. Exemplo: 70kg e 175cm → IMC 22.9 (Normal).",
    tool_ip_address_description: "Descobrir o IP público e metadados básicos. Processo: o servidor retorna o IP do solicitante (IPv4/IPv6); opcionalmente buscar geo/ISP. Exemplo: mostrar IP e país para troubleshooting.",
    tool_squarefeet_description: "Calcular área em pés quadrados a partir de comprimento e largura. Processo: selecionar unidade (ft/m/in), converter para pés, calcular área (L × W) e converter conforme necessário. Exemplo: 3m × 4m = 12 m² ≈ 129,17 sq ft."
  },
  'src/site/i18n/ja.ts': {
    tool_headers_description: "サーバー側で URL の HTTP レスポンスヘッダーを取得（HEAD、405/501 の場合は GET にフォールバック）。手順：HEAD を送信し、リダイレクトを追跡、ヘッダーを収集、プライベートホストをブロック。例：CORS、Cache-Control、HSTS を確認してリダイレクトや CDN 設定をデバッグ。",
    tool_markdown_description: "Markdown をサニタイズされた HTML に変換してプレビュー表示。手順：CommonMark をパース、不要タグを除去、コードブロック/リスト/リンクをレンダリング。例：ブログ記事の Markdown を公開可能な HTML に変換。",
    tool_markdown_export_description: "Markdown からテンプレートを適用した完全な HTML ドキュメントを生成。ステップ：レンダリング、テンプレート挿入、meta/assets 追加、ダウンロード提供。例：記事を単体の .html としてエクスポート。",
    tool_bmi_description: "BMI 計算：BMI = 体重(kg) / (身長(m))^2。手順：単位を選択して換算、BMI を計算し分類を表示。例：70kg と 175cm → BMI 22.9（正常）。",
    tool_ip_address_description: "公開 IP と基本メタデータを検出。手順：サーバーがリクエスト元 IP（IPv4/IPv6）を返し、任意で geo/ISP を引く。例：トラブルシューティング用に IP と国を表示。",
    tool_squarefeet_description: "長さと幅から平方フィートで面積を計算。手順：単位（ft/m/in）を選択してフィートに換算、面積を計算（L × W）、必要なら sq ft に変換。例：3m × 4m = 12 m² ≈ 129.17 sq ft。"
  },
  'src/site/i18n/id.ts': {
    tool_headers_description: "Ambil header HTTP sebuah URL di server (HEAD, fallback ke GET). Proses: kirim HEAD, ikuti redirect, kumpulkan header, blokir host privat. Contoh: periksa CORS, Cache-Control, HSTS untuk debug redirect dan pengaturan CDN.",
    tool_markdown_description: "Ubah Markdown menjadi HTML yang telah disanitasi dengan pratinjau. Proses: parse CommonMark, sanitasi output, render blok kode/daftar/link. Contoh: konversi post blog menjadi HTML siap terbit.",
    tool_markdown_export_description: "Hasilkan dokumen HTML penuh dari Markdown dengan template dan meta. Langkah: render Markdown, injek ke template, tambahkan meta/assets, sediakan opsi unduh. Contoh: ekspor artikel sebagai .html mandiri.",
    tool_bmi_description: "Hitung BMI: BMI = berat(kg) / (tinggi(m))^2. Proses: pilih unit, konversi bila perlu, hitung dan tentukan kategori. Contoh: 70kg & 175cm → BMI 22.9 (Normal).",
    tool_ip_address_description: "Temukan IP publik dan metadata dasar. Proses: server mengembalikan IP peminta (IPv4/IPv6), opsional lookup geo/ISP. Contoh: tampilkan IP dan negara untuk troubleshooting.",
    tool_squarefeet_description: "Hitung luas dalam kaki persegi dari panjang dan lebar. Proses: pilih unit (ft/m/in), konversi ke kaki, hitung luas (L × W), konversi ke sq ft bila perlu. Contoh: 3m × 4m = 12 m² ≈ 129.17 sq ft."
  },
  'src/site/i18n/ar.ts': {
    tool_headers_description: "جلب رؤوس استجابة HTTP لعنوان URL على الخادم (HEAD، وإذا لزم fallback إلى GET). العملية: إرسال HEAD، اتباع إعادة التوجيه، جمع الرؤوس، حظر المضيفات الداخلية. مثال: فحص CORS وCache-Control وHSTS لتصحيح إعادة التوجيه وإعدادات CDN.",
    tool_markdown_description: "تحويل Markdown إلى HTML مُعقَّم مع معاينة. العملية: تحليل CommonMark، تنقية HTML، عرض كتل الكود/القوائم/الروابط. مثال: تحويل منشور مدونة إلى HTML جاهز للنشر.",
    tool_markdown_export_description: "توليد مستند HTML كامل من Markdown مع قالب وبيانات وصفية. الخطوات: تصيير Markdown، إدراجه في القالب، إضافة meta/assets، وتمكين التحميل. مثال: تصدير منشور كملف .html مستقل.",
    tool_bmi_description: "حساب مؤشر كتلة الجسم: BMI = الوزن(kg) / (الطول(m))^2. العملية: اختيار الوحدات وتحويلها عند الحاجة، حساب المؤشر، وتحديد الفئة. مثال: 70kg و175cm → BMI 22.9 (طبيعي).",
    tool_ip_address_description: "اكتشاف عنوان IP العام والبيانات الأساسية. العملية: يعيد الخادم IP المرسل (IPv4/IPv6) ويمكن إجراء بحث جغرافي/مزود خدمة اختياري. مثال: عرض IP والبلد لتشخيص المشكلات عن بُعد.",
    tool_squarefeet_description: "حساب المساحة بالقدم المربعة من الطول والعرض. العملية: اختيار الوحدة (قدم/متر/بوصة) وتحويلها إلى قدم، حساب المساحة (الطول × العرض)، والتحويل إلى قدم مربع عند الحاجة. مثال: 3m × 4m = 12 m² ≈ 129.17 قدم مربع."
  }
}

function backupFile(filePath) {
  const ts = Date.now();
  const bakPath = `${filePath}.bak.${ts}`;
  fs.copyFileSync(filePath, bakPath);
  console.log('Backup created:', bakPath);
}

for (const [file, kv] of Object.entries(updates)) {
  const fp = path.resolve(file);
  if (!fs.existsSync(fp)) {
    console.warn('File not found, skipping:', fp);
    continue;
  }
  let content = fs.readFileSync(fp, 'utf8');
  backupFile(fp);

  for (const [key, val] of Object.entries(kv)) {
    const jsonVal = JSON.stringify(val);
    const keyRegex = new RegExp('(\\b' + key + '\\s*:\\s*)([\'"`])([\\s\\S]*?)\\2', 'm');
    if (keyRegex.test(content)) {
      content = content.replace(keyRegex, `$1${jsonVal}`);
      console.log(`Replaced ${key} in ${file}`);
    } else {
      const insertAt = content.lastIndexOf('};');
      const addition = `  ${key}: ${jsonVal},\n`;
      if (insertAt !== -1) {
        content = content.slice(0, insertAt) + addition + content.slice(insertAt);
        console.log(`Inserted ${key} into ${file}`);
      } else {
        content += '\n' + addition;
        console.log(`Appended ${key} to ${file}`);
      }
    }
  }

  fs.writeFileSync(fp, content, 'utf8');
  console.log('Updated file:', file);
}

console.log('i18n update complete. Please review changes and run build if needed.');
