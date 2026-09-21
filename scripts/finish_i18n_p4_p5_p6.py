#!/usr/bin/env python3
"""完成 OGG/AIFF 剩余 locale 分片。"""
import os

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), '..', 'src/site/i18n/tools'))

KEYS = [
    'title','desc','description','article','choose','hint','convert','download','sample','clear',
    'advanced','bitrate','settings_hint','progress','read','decode','encode','done','failed','elapsed',
    'preview','result','sample_name','empty','err_file','err_format','err_limit','err_decode',
    'err_encoder','err_sample','how_title','how_body','how_item_1','how_item_2','how_item_3',
    'how_item_4','why_choose_title','why_choose_item_1','why_choose_item_2','why_choose_item_3',
    'why_choose_item_4','rules_title','rules_body','rules_item_1','rules_item_2','rules_item_3',
    'rules_item_4','example_title','example','usecases_title','usecase_1','usecase_2',
    'faq_q1','faq_a1','faq_q2','faq_a2','faq_q3','faq_a3','faq_q4','faq_a4','faq_q5','faq_a5',
]

def esc(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")

def write(slug: str, lang: str, prefix: str, d: dict) -> None:
    path_dir = os.path.join(ROOT, slug)
    os.makedirs(path_dir, exist_ok=True)
    lines = [
        "import type { SiteLangDict } from '../../../types';", '', '/**',
        f' * {lang} strings for {slug}. Rich How≥4 Why≥4 Rules≥4 FAQ≥5; local convert only.', ' */',
        f'const {lang}: SiteLangDict = {{',
    ]
    for k in KEYS:
        lines.append(f"  {prefix}_{k}: '{esc(d[k])}',")
    lines += ['};', f'export default {lang};', '']
    with open(os.path.join(path_dir, f'{lang}.ts'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

OGG_P = 'tool_convert_an_ogg_file_to_mp3'
AIFF_P = 'tool_convert_an_aiff_file_to_wav'

OGG = {}
AIFF = {}

# --- OGG fr pt id ar ru ---
OGG['fr'] = {
'title':'Convertir un fichier OGG en MP3','desc':'Transformez un enregistrement OGG ou Opus local en MP3. L\'audio reste sur votre appareil et n\'est pas envoyé à un serveur.',
'description':'Convertissez OGG en MP3 dans le navigateur sans téléverser. Étapes : choisir OGG/Opus, choisir le débit, Convertir en MP3, écouter, télécharger. Exemple : tonalité Opus-in-OGG stéréo de cinq secondes → environ 120 Kio de MP3 à 192 kbps. decodeAudioData puis lamejs ; erreur claire si échec. Fichiers sur l\'appareil.',
'article':'Notes vocales et audio de jeux arrivent souvent en OGG Vorbis ou Opus, mais le destinataire peut exiger MP3. Cette page convertit un conteneur OGG local complet — Vorbis ou Opus — en MP3 prévisualisable. L\'encodage MP3 ajoute une perte ; conservez l\'original.',
'choose':'Choisir un fichier OGG ou Opus','hint':'Un .ogg, .oga ou .opus, jusqu\'à 40 Mio et 10 minutes ; mono/stéréo. Décodage selon le navigateur.',
'convert':'Convertir en MP3','download':'Télécharger le MP3','sample':'Charger l\'exemple','clear':'Effacer','advanced':'Réglages avancés (facultatif)','bitrate':'Débit MP3',
'settings_hint':'192 kbps par défaut. 128 économise l\'espace ; 320 en consomme plus. Sortie 44,1 kHz, canaux d\'origine.',
'progress':'Progression','read':'Lire l\'enregistrement','decode':'Décoder l\'audio','encode':'Encoder le MP3','done':'Prêt. Écoutez le résultat, puis Télécharger le MP3.',
'failed':'Échec. Essayez un OGG/Opus plus court que le navigateur peut décoder.','elapsed':'Écoulé : {s} s','preview':'Écouter le MP3',
'result':'{seconds} s décodées · Entrée {input} Kio → MP3 {output} Kio · {kbps} kbps · 44,1 kHz · {channels} canal(aux)','sample_name':'five-second-ogg-demo',
'empty':'Choisissez OGG/Opus ou chargez l\'exemple.','err_file':'Déposez exactement un fichier OGG ou Opus.',
'err_format':'OGG non pris en charge. Conteneur OggS avec Vorbis ou Opus. OGG vidéo seule, Speex seul et listes refusés.',
'err_limit':'Plus de 40 Mio ou 10 minutes, ou pas mono/stéréo.','err_decode':'Ce navigateur n\'a pas pu décoder OGG/Opus. Essayez un navigateur récent ou un fichier plus court.',
'err_encoder':'Encodeur MP3 introuvable. Vérifiez la connexion et relancez Convertir en MP3.','err_sample':'Exemple introuvable. Vérifiez la connexion et réessayez.',
'how_title':'Comment convertir un OGG en MP3','how_body':'Créez une copie MP3 d\'un OGG/Opus entier quand le lecteur du destinataire attend MP3.',
'how_item_1':'Choisissez OGG/Opus ou cliquez Charger l\'exemple.','how_item_2':'Gardez le débit par défaut ou ouvrez Réglages avancés, puis Convertir en MP3.',
'how_item_3':'Attendez Lire → Décoder → Encoder. Échec de décodage → message clair sur le navigateur.','how_item_4':'Écoutez le MP3, comparez les tailles, puis Télécharger le MP3.',
'why_choose_title':'Pourquoi Convertir un fichier OGG en MP3','why_choose_item_1':'L\'exemple Opus-in-OGG suit le même chemin décodage + MP3.',
'why_choose_item_2':'Vous entendez la sortie réelle et voyez les tailles mesurées avant de sauver.','why_choose_item_3':'OggS vérifié en premier ; flux non pris en charge échouent tôt.',
'why_choose_item_4':'Traitement sur l\'appareil — l\'enregistrement n\'est pas téléversé pour convertir.',
'rules_title':'Débit, Opus et limites','rules_body':'Octets MP3 ≈ secondes × kbps × 1000 ÷ 8. Taille affichée mesurée ; padding possible.',
'rules_item_1':'128 kbps voix, 192 partage, 320 musique. MP3 perd face à OGG/Opus.',
'rules_item_2':'Sortie 44,1 kHz, 1–2 canaux. Tags non copiés.','rules_item_3':'Un OGG/Opus, max 40 Mio et 10 min. Pas OGG vidéo seule, surround, DRM ou lot.',
'rules_item_4':'Opus→MP3 absorbé sur cette page. Pour FLAC/M4A, convertisseurs liés.',
'example_title':'Exemple réel de conversion OGG','example':'À l\'ouverture, un ton Opus-in-OGG stéréo de cinq secondes se convertit à 192 kbps (~120 Kio MP3). Charger l\'exemple répète. Pas de lecture auto.',
'usecases_title':'Utile pour','usecase_1':'Envoyer un clip OGG de jeu ou chat à qui attend MP3.','usecase_2':'Note Opus en pièce jointe MP3 en gardant l\'original.',
'faq_q1':'Opus vers MP3 aussi ?','faq_a1':'Oui. Opus dans OGG (et .opus traité comme OGG) utilise le même Convertir en MP3. Renommer l\'extension ne convertit pas.',
'faq_q2':'Mon enregistrement est-il téléversé ?','faq_a2':'Non. Décodage et encodage dans le navigateur sur l\'appareil. Chargement initial de la page, exemple et encodeur nécessitent une connexion.',
'faq_q3':'Pourquoi un OGG valide échoue sur mobile ?','faq_a3':'Le navigateur peut manquer Vorbis/Opus ou mémoire. OGG vidéo seule et multicanal refusés. Essayez l\'exemple intégré.',
'faq_q4':'OGG vers MP3 sans perte ?','faq_a4':'Non. OGG/Opus et MP3 sont avec perte. Un débit MP3 plus élevé ne restaure pas le détail perdu.',
'faq_q5':'Plusieurs fichiers ou OGG vers WAV ?','faq_a5':'Un OGG/Opus local complet → un MP3. Pas de matrice, listes, vidéo ni dossiers par lot.',
}

OGG['pt'] = {
'title':'Converter um arquivo OGG para MP3','desc':'Transforme uma gravação OGG ou Opus local em MP3. O áudio permanece no dispositivo e não é enviado a um servidor.',
'description':'Converta OGG para MP3 no navegador sem enviar. Passos: escolher OGG/Opus, escolher taxa, Converter para MP3, ouvir, baixar. Exemplo: tom Opus-in-OGG estéreo de cinco segundos vira cerca de 120 KiB de MP3 a 192 kbps. decodeAudioData e lamejs; erro claro se falhar. Arquivos no dispositivo.',
'article':'Notas de voz e áudio de jogos chegam como OGG Vorbis ou Opus, mas o destinatário pode precisar de MP3. Esta página converte um contêiner OGG local completo — Vorbis ou Opus — em MP3 previsível. MP3 é outro passo com perda; guarde o original.',
'choose':'Escolher um arquivo OGG ou Opus','hint':'Um .ogg, .oga ou .opus, até 40 MiB e 10 minutos; mono/estéreo. Decodificação depende do navegador.',
'convert':'Converter para MP3','download':'Baixar MP3','sample':'Carregar exemplo','clear':'Limpar','advanced':'Configurações avançadas (opcional)','bitrate':'Taxa de bits do MP3',
'settings_hint':'192 kbps por padrão. 128 economiza espaço; 320 usa mais dados. Saída 44,1 kHz, canais originais.',
'progress':'Progresso da conversão','read':'Ler gravação','decode':'Decodificar áudio','encode':'Codificar MP3','done':'Pronto. Ouça o resultado e depois Baixar MP3.',
'failed':'Conversão falhou. Tente OGG/Opus mais curto que o navegador decodifique.','elapsed':'Decorrido: {s} s','preview':'Ouvir o MP3',
'result':'{seconds} s decodificados · Entrada {input} KiB → MP3 {output} KiB · {kbps} kbps · 44,1 kHz · {channels} canal(is)','sample_name':'five-second-ogg-demo',
'empty':'Escolha OGG/Opus ou carregue o exemplo.','err_file':'Solte exatamente um arquivo OGG ou Opus.',
'err_format':'OGG não suportado. Contêiner OggS com Vorbis ou Opus. OGG só vídeo, Speex-only e listas não aceitos.',
'err_limit':'Excede 40 MiB ou 10 minutos, ou não é mono/estéreo.','err_decode':'Este navegador não decodificou OGG/Opus. Tente navegador atual ou arquivo mais curto.',
'err_encoder':'Codificador MP3 não carregou. Verifique a conexão e clique Converter para MP3 novamente.','err_sample':'Exemplo não carregou. Verifique a conexão e tente Carregar exemplo.',
'how_title':'Como converter OGG para MP3','how_body':'Crie uma cópia MP3 de um OGG/Opus inteiro quando o player do destinatário espera MP3.',
'how_item_1':'Escolha OGG/Opus ou clique Carregar exemplo.','how_item_2':'Mantenha a taxa padrão ou abra Configurações avançadas, depois Converter para MP3.',
'how_item_3':'Aguarde Ler → Decodificar → Codificar. Falha de decodificação mostra erro claro.','how_item_4':'Ouça o MP3, compare tamanhos e clique Baixar MP3.',
'why_choose_title':'Por que Converter um arquivo OGG para MP3','why_choose_item_1':'Exemplo Opus-in-OGG usa o mesmo caminho de decodificação e MP3.',
'why_choose_item_2':'Você ouve a saída real e vê tamanhos medidos antes de salvar.','why_choose_item_3':'OggS verificado primeiro; fluxos não suportados falham cedo.',
'why_choose_item_4':'Processamento no dispositivo — a gravação não é enviada para converter.',
'rules_title':'Taxa de bits, Opus e limites','rules_body':'Bytes MP3 ≈ segundos × kbps × 1000 ÷ 8. Tamanho exibido é medido; padding do codificador acrescenta um pouco.',
'rules_item_1':'128 kbps voz, 192 compartilhar, 320 música. MP3 perde face a OGG/Opus.',
'rules_item_2':'Saída 44,1 kHz, 1–2 canais. Tags não copiadas.','rules_item_3':'Um OGG/Opus, máx 40 MiB e 10 min. Sem OGG só vídeo, surround, DRM ou lote.',
'rules_item_4':'Opus→MP3 absorvido nesta página. Para FLAC/M4A, conversores relacionados.',
'example_title':'Exemplo real de conversão OGG','example':'Ao abrir, tom Opus-in-OGG estéreo de cinco segundos converte a 192 kbps (~120 KiB MP3). Carregar exemplo repete. Sem reprodução automática.',
'usecases_title':'Útil para','usecase_1':'Enviar clip OGG de jogo ou chat para quem espera MP3.','usecase_2':'Nota Opus como anexo MP3 mantendo o original.',
'faq_q1':'Opus para MP3 também?','faq_a1':'Sim. Opus em OGG (e .opus tratado como OGG) usa o mesmo Converter para MP3. Renomear extensão não converte.',
'faq_q2':'Minha gravação é enviada?','faq_a2':'Não. Decodificação e codificação no navegador no dispositivo. Carregamento inicial da página, exemplo e codificador precisam de conexão.',
'faq_q3':'Por que OGG válido falha no celular?','faq_a3':'Navegador pode faltar Vorbis/Opus ou memória. OGG só vídeo e multicanal rejeitados. Tente o exemplo integrado.',
'faq_q4':'OGG para MP3 é sem perda?','faq_a4':'Não. OGG/Opus e MP3 são com perda. Taxa MP3 maior não restaura detalhe descartado.',
'faq_q5':'Vários arquivos ou OGG para WAV?','faq_a5':'Um OGG/Opus local completo → um MP3. Sem matriz, listas, vídeo ou pastas em lote.',
}

OGG['id'] = {
'title':'Ubah berkas OGG menjadi MP3','desc':'Ubah rekaman OGG atau Opus lokal menjadi MP3. Audio tetap di perangkat dan tidak diunggah ke server.',
'description':'Ubah OGG ke MP3 di browser tanpa unggah. Langkah: pilih OGG/Opus, pilih bitrate, Ubah ke MP3, dengarkan, unduh. Contoh: nada Opus-in-OGG stereo lima detik ~120 KiB MP3 pada 192 kbps. decodeAudioData lalu lamejs; error jelas jika gagal. Berkas di perangkat.',
'article':'Memo suara dan audio game sering OGG Vorbis atau Opus, tetapi penerima mungkin butuh MP3. Halaman ini mengonversi satu kontainer OGG lokal utuh — Vorbis atau Opus — menjadi MP3 yang bisa didengar. MP3 menambah lossy; simpan aslinya.',
'choose':'Pilih berkas OGG atau Opus','hint':'Satu .ogg, .oga atau .opus, hingga 40 MiB dan 10 menit; mono/stereo. Dekode bergantung browser.',
'convert':'Ubah ke MP3','download':'Unduh MP3','sample':'Muat contoh','clear':'Hapus','advanced':'Pengaturan lanjutan (opsional)','bitrate':'Bitrate MP3',
'settings_hint':'Default 192 kbps. 128 hemat ruang; 320 lebih banyak data. Keluaran 44,1 kHz, kanal asli.',
'progress':'Progres konversi','read':'Baca rekaman','decode':'Dekode audio','encode':'Enkode MP3','done':'Siap. Dengarkan hasilnya, lalu Unduh MP3.',
'failed':'Konversi gagal. Coba OGG/Opus lebih pendek yang browser bisa dekode.','elapsed':'Berlalu: {s} d','preview':'Dengarkan MP3',
'result':'{seconds} d terdekode · Masuk {input} KiB → MP3 {output} KiB · {kbps} kbps · 44,1 kHz · {channels} saluran','sample_name':'five-second-ogg-demo',
'empty':'Pilih OGG/Opus atau muat contoh dulu.','err_file':'Letakkan tepat satu berkas OGG atau Opus.',
'err_format':'OGG tidak didukung. Kontainer OggS dengan Vorbis atau Opus. OGG video-only, Speex-only, playlist ditolak.',
'err_limit':'Melebihi 40 MiB atau 10 menit, atau bukan mono/stereo.','err_decode':'Browser ini tidak mendekode OGG/Opus. Coba browser terbaru atau berkas lebih pendek.',
'err_encoder':'Enkoder MP3 gagal dimuat. Periksa koneksi dan klik Ubah ke MP3 lagi.','err_sample':'Contoh gagal dimuat. Periksa koneksi dan coba Muat contoh lagi.',
'how_title':'Cara mengubah OGG menjadi MP3','how_body':'Buat salinan MP3 dari OGG/Opus utuh saat pemutar penerima minta MP3.',
'how_item_1':'Pilih OGG/Opus atau klik Muat contoh.','how_item_2':'Pertahankan bitrate default atau buka Pengaturan lanjutan, lalu Ubah ke MP3.',
'how_item_3':'Tunggu Baca → Dekode → Enkode. Gagal dekode menampilkan error dukungan browser.','how_item_4':'Dengarkan MP3, bandingkan ukuran, lalu Unduh MP3.',
'why_choose_title':'Mengapa Ubah berkas OGG menjadi MP3','why_choose_item_1':'Contoh Opus-in-OGG bawaan melewati jalur dekode + MP3 yang sama.',
'why_choose_item_2':'Anda mendengar keluaran nyata dan melihat ukuran terukur sebelum menyimpan.','why_choose_item_3':'OggS dicek dulu; aliran tidak didukung gagal lebih awal.',
'why_choose_item_4':'Pemrosesan di perangkat — rekaman tidak diunggah untuk konversi.',
'rules_title':'Bitrate, Opus, dan batas','rules_body':'Byte MP3 ≈ detik × kbps × 1000 ÷ 8. Ukuran ditampilkan terukur; padding enkoder menambah sedikit.',
'rules_item_1':'128 kbps suara, 192 berbagi, 320 musik. MP3 lossy dibanding OGG/Opus.',
'rules_item_2':'Keluaran 44,1 kHz, 1–2 saluran. Tag tidak disalin.','rules_item_3':'Satu OGG/Opus, maks 40 MiB dan 10 menit. Tanpa OGG video-only, surround, DRM, batch.',
'rules_item_4':'Opus→MP3 diserap di halaman ini. Untuk FLAC/M4A, konverter terkait.',
'example_title':'Contoh konversi OGG nyata','example':'Saat dibuka, nada Opus-in-OGG stereo lima detik dikonversi 192 kbps (~120 KiB MP3). Muat contoh mengulang. Tidak autoplay.',
'usecases_title':'Berguna untuk','usecase_1':'Kirim klip OGG game/chat ke yang butuh MP3.','usecase_2':'Memo Opus jadi lampiran MP3 sambil simpan asli.',
'faq_q1':'Opus ke MP3 juga?','faq_a1':'Ya. Opus di OGG (dan .opus diperlakukan OGG) pakai Ubah ke MP3 yang sama. Ganti ekstensi saja tidak mengonversi.',
'faq_q2':'Apakah rekaman diunggah?','faq_a2':'Tidak. Dekode dan enkode di browser di perangkat. Muat halaman, contoh, enkoder awal butuh koneksi.',
'faq_q3':'Mengapa OGG valid gagal di ponsel?','faq_a3':'Browser mungkin kurang Vorbis/Opus atau memori. OGG video-only dan multichannel ditolak. Coba contoh bawaan.',
'faq_q4':'OGG ke MP3 lossless?','faq_a4':'Tidak. OGG/Opus dan MP3 lossy. Bitrate MP3 lebih tinggi tidak memulihkan detail.',
'faq_q5':'Beberapa berkas atau OGG ke WAV?','faq_a5':'Satu OGG/Opus lokal utuh → satu MP3. Tanpa matriks, playlist, video, folder batch.',
}

OGG['ar'] = {
'title':'تحويل ملف OGG إلى MP3','desc':'حوّل تسجيل OGG أو Opus محليًا إلى MP3. يبقى الصوت على جهازك ولا يُرفع إلى خادم.',
'description':'حوّل OGG إلى MP3 في المتصفح دون رفع. الخطوات: اختر OGG/Opus، اختر معدل البت، تحويل إلى MP3، استمع، نزّل. مثال: نغمة Opus-in-OGG ستيريو لخمس ثوانٍ ~120 KiB MP3 عند 192 kbps. decodeAudioData ثم lamejs؛ خطأ واضح عند الفشل. الملفات على الجهاز.',
'article':'المذكرات الصوتية وصوت الألعاب غالبًا OGG Vorbis أو Opus، لكن المستلم قد يحتاج MP3. تحوّل هذه الصفحة حاوية OGG محلية كاملة — Vorbis أو Opus — إلى MP3 قابل للمعاينة. MP3 خطوة فقد إضافية؛ احتفظ بالأصل.',
'choose':'اختر ملف OGG أو Opus','hint':'ملف .ogg أو .oga أو .opus واحد، حتى 40 ميغابايت و10 دقائق؛ أحادي/ستيريو. فك الترميز يعتمد على المتصفح.',
'convert':'تحويل إلى MP3','download':'تنزيل MP3','sample':'تحميل مثال','clear':'مسح','advanced':'إعدادات متقدمة (اختياري)','bitrate':'معدل بت MP3',
'settings_hint':'192 kbps افتراضيًا. 128 يوفر مساحة؛ 320 يستخدم بيانات أكثر. مخرجات 44.1 kHz، القنوات الأصلية.',
'progress':'تقدم التحويل','read':'قراءة التسجيل','decode':'فك ترميز الصوت','encode':'تشفير MP3','done':'جاهز. استمع للنتيجة ثم تنزيل MP3.',
'failed':'فشل التحويل. جرّب OGG/Opus أقصر يستطيع المتصفح فكّه.','elapsed':'المنقضي: {s} ث','preview':'استمع إلى MP3',
'result':'{seconds} ث مفكوكة · مدخل {input} KiB → MP3 {output} KiB · {kbps} kbps · 44.1 kHz · {channels} قناة','sample_name':'five-second-ogg-demo',
'empty':'اختر OGG/Opus أو حمّل المثال أولًا.','err_file':'أسقط ملف OGG أو Opus واحدًا فقط.',
'err_format':'OGG غير مدعوم. حاوية OggS مع Vorbis أو Opus. OGG فيديو فقط وSpeex-only وقوائم مرفوضة.',
'err_limit':'يتجاوز 40 ميغابايت أو 10 دقائق، أو ليس أحادي/ستيريو.','err_decode':'تعذّر على هذا المتصفح فك OGG/Opus. جرّب متصفحًا حديثًا أو ملفًا أقصر.',
'err_encoder':'تعذّر تحميل مشفّر MP3. تحقق من الاتصال واضغط تحويل إلى MP3 مجددًا.','err_sample':'تعذّر تحميل المثال. تحقق من الاتصال وجرّب مجددًا.',
'how_title':'كيفية تحويل OGG إلى MP3','how_body':'أنشئ نسخة MP3 من OGG/Opus كامل عندما يتوقع المستلم MP3.',
'how_item_1':'اختر OGG/Opus أو انقر تحميل مثال.','how_item_2':'أبقِ المعدل الافتراضي أو افتح الإعدادات المتقدمة، ثم تحويل إلى MP3.',
'how_item_3':'انتظر قراءة → فك → تشفير. فشل الفك يظهر رسالة دعم المتصفح.','how_item_4':'استمع للـ MP3، قارن الأحجام، ثم تنزيل MP3.',
'why_choose_title':'لماذا تحويل ملف OGG إلى MP3','why_choose_item_1':'مثال Opus-in-OGG المدمج يمر بنفس مسار فك الترميز وMP3.',
'why_choose_item_2':'تسمع المخرجات الفعلية وترى الأحجام المقاسة قبل الحفظ.','why_choose_item_3':'OggS يُفحص أولًا؛ التدفقات غير المدعومة تفشل مبكرًا.',
'why_choose_item_4':'المعالجة على جهازك — لا يُرفع التسجيل للتحويل.',
'rules_title':'معدل البت وOpus وحدود','rules_body':'بايت MP3 ≈ الثواني × kbps × 1000 ÷ 8. الحجم المعروض مقاس؛ الحشو قد يزيد قليلًا.',
'rules_item_1':'128 kbps للكلام، 192 للمشاركة، 320 للموسيقى. MP3 بفقد مقابل OGG/Opus.',
'rules_item_2':'مخرجات 44.1 kHz، قناة أو قناتان. لا تُنسخ العلامات.','rules_item_3':'OGG/Opus واحد، حتى 40 ميغابايت و10 دقائق. بلا OGG فيديو فقط أو surround أو DRM أو دفعات.',
'rules_item_4':'Opus→MP3 يُستوعب في هذه الصفحة. لـ FLAC/M4A استخدم المحولات ذات الصلة.',
'example_title':'مثال تحويل OGG حقيقي','example':'عند الفتح، نغمة Opus-in-OGG ستيريو لخمس ثوانٍ تُحوَّل عند 192 kbps (~120 KiB MP3). تحميل مثال يكرر. لا تشغيل تلقائي.',
'usecases_title':'مفيد لـ','usecase_1':'إرسال مقطع OGG لعبة/دردشة لمن يتوقع MP3.','usecase_2':'مذكرة Opus كمرفق MP3 مع الاحتفاظ بالأصل.',
'faq_q1':'Opus إلى MP3 أيضًا؟','faq_a1':'نعم. Opus داخل OGG (و.opus يُعامل كOGG) يستخدم نفس تحويل إلى MP3. إعادة تسمية الامتداد لا تحوّل.',
'faq_q2':'هل يُرفع تسجيلي؟','faq_a2':'لا. فك الترميز والتشفير في المتصفح على جهازك. التحميل الأولي للصفحة والمثال والمشفّر يحتاج اتصالًا.',
'faq_q3':'لماذا يفشل OGG صالح على الهاتف؟','faq_a3':'قد يفتقر المتصفح إلى Vorbis/Opus أو الذاكرة. OGG فيديو فقط ومتعدد القنوات مرفوض. جرّب المثال المدمج.',
'faq_q4':'هل OGG إلى MP3 بدون فقد؟','faq_a4':'لا. OGG/Opus وMP3 مضغوطان بفقد. معدل MP3 أعلى لا يستعيد التفاصيل.',
'faq_q5':'عدة ملفات أو OGG إلى WAV؟','faq_a5':'OGG/Opus محلي كامل → MP3 واحد. بلا مصفوفة أو قوائم أو فيديو أو مجلدات دفعية.',
}

OGG['ru'] = {
'title':'Конвертировать файл OGG в MP3','desc':'Преобразуйте локальную запись OGG или Opus в MP3. Аудио остаётся на устройстве и не загружается на сервер.',
'description':'Конвертируйте OGG в MP3 в браузере без загрузки. Шаги: выберите OGG/Opus, выберите битрейт, Конвертировать в MP3, прослушайте, скачайте. Пример: пятисекундный Opus-in-OGG стереотон ~120 KiB MP3 при 192 kbps. decodeAudioData и lamejs; явная ошибка при сбое. Файлы на устройстве.',
'article':'Голосовые заметки и игровое аудио часто в OGG Vorbis или Opus, но получателю может понадобиться MP3. Страница конвертирует один полный локальный OGG-контейнер — Vorbis или Opus — в MP3 с предпрослушиванием. MP3 — ещё один lossy шаг; сохраните оригинал.',
'choose':'Выбрать файл OGG или Opus','hint':'Один .ogg, .oga или .opus, до 40 МиБ и 10 минут; моно/стерео. Декодирование зависит от браузера.',
'convert':'Конвертировать в MP3','download':'Скачать MP3','sample':'Загрузить пример','clear':'Очистить','advanced':'Расширенные настройки (необязательно)','bitrate':'Битрейт MP3',
'settings_hint':'По умолчанию 192 kbps. 128 экономит место; 320 использует больше данных. Выход 44,1 kHz, исходные каналы.',
'progress':'Ход конвертации','read':'Чтение записи','decode':'Декодирование','encode':'Кодирование MP3','done':'Готово. Прослушайте результат, затем Скачать MP3.',
'failed':'Конвертация не удалась. Попробуйте более короткий OGG/Opus или другой браузер.','elapsed':'Прошло: {s} с','preview':'Прослушать MP3',
'result':'{seconds} с декодировано · Вход {input} KiB → MP3 {output} KiB · {kbps} kbps · 44,1 kHz · {channels} кан.','sample_name':'five-second-ogg-demo',
'empty':'Сначала выберите OGG/Opus или загрузите пример.','err_file':'Перетащите ровно один файл OGG или Opus.',
'err_format':'Неподдерживаемый OGG. Контейнер OggS с Vorbis или Opus. OGG только видео, Speex-only и плейлисты не принимаются.',
'err_limit':'Больше 40 МиБ или 10 минут, или не моно/стерео.','err_decode':'Браузер не смог декодировать OGG/Opus. Попробуйте актуальный браузер или более короткий файл.',
'err_encoder':'Кодировщик MP3 не загрузился. Проверьте соединение и нажмите Конвертировать в MP3 снова.','err_sample':'Пример не загрузился. Проверьте соединение и попробуйте снова.',
'how_title':'Как конвертировать OGG в MP3','how_body':'Создайте MP3-копию целого OGG/Opus, когда плеер получателя ожидает MP3.',
'how_item_1':'Выберите OGG/Opus или нажмите Загрузить пример.','how_item_2':'Оставьте битрейт по умолчанию или откройте Расширенные настройки, затем Конвертировать в MP3.',
'how_item_3':'Дождитесь Чтение → Декодирование → Кодирование. При сбое декодирования — явное сообщение.','how_item_4':'Прослушайте MP3, сравните размеры, затем Скачать MP3.',
'why_choose_title':'Почему Конвертировать файл OGG в MP3','why_choose_item_1':'Встроенный пример Opus-in-OGG проходит тот же путь декодирования и MP3.',
'why_choose_item_2':'Вы слышите реальный результат и видите измеренные размеры до сохранения.','why_choose_item_3':'OggS проверяется первым; неподдерживаемые потоки падают рано.',
'why_choose_item_4':'Обработка на устройстве — запись не загружается для конвертации.',
'rules_title':'Битрейт, Opus и ограничения','rules_body':'Байты MP3 ≈ секунды × kbps × 1000 ÷ 8. Показан измеренный размер; padding кодировщика добавляет немного.',
'rules_item_1':'128 kbps речь, 192 обмен, 320 музыка. MP3 с потерями относительно OGG/Opus.',
'rules_item_2':'Выход 44,1 kHz, 1–2 канала. Теги не копируются.','rules_item_3':'Один OGG/Opus, макс 40 МиБ и 10 мин. Без OGG только видео, surround, DRM, пакетов.',
'rules_item_4':'Opus→MP3 на этой же странице. Для FLAC/M4A — связанные конвертеры.',
'example_title':'Реальный пример конвертации OGG','example':'При открытии пятисекундный Opus-in-OGG стереотон конвертируется при 192 kbps (~120 KiB MP3). Загрузить пример повторяет. Без автовоспроизведения.',
'usecases_title':'Полезно для','usecase_1':'Отправить OGG-клип из игры/чата тому, кто ждёт MP3.','usecase_2':'Opus-заметку как MP3-вложение, сохранив оригинал.',
'faq_q1':'Opus в MP3 тоже?','faq_a1':'Да. Opus в OGG (и .opus как OGG) использует тот же Конвертировать в MP3. Переименование расширения не конвертирует.',
'faq_q2':'Загружается ли моя запись?','faq_a2':'Нет. Декодирование и кодирование в браузере на устройстве. Первичная загрузка страницы, примера и кодировщика требует сети.',
'faq_q3':'Почему валидный OGG падает на телефоне?','faq_a3':'Браузер может не поддерживать Vorbis/Opus или не хватать памяти. OGG только видео и многоканальный отклоняются. Попробуйте встроенный пример.',
'faq_q4':'OGG в MP3 без потерь?','faq_a4':'Нет. OGG/Opus и MP3 с потерями. Больший битрейт MP3 не восстанавливает детали.',
'faq_q5':'Несколько файлов или OGG в WAV?','faq_a5':'Один полный локальный OGG/Opus → один MP3. Без матрицы, плейлистов, видео, пакетных папок.',
}

# AIFF langs except en/zh
AIFF['es'] = {
'title':'Convertir un archivo AIFF a WAV','desc':'Convierte una grabación AIFF o CAF local a WAV. El audio permanece en tu dispositivo y no se sube a un servidor.',
'description':'Convierte AIFF a WAV en el navegador sin subir. Pasos: elige AIFF/CAF, elige frecuencia, Convertir a WAV, previsualiza y descarga. Ejemplo: tono AIFF estéreo de cinco segundos a 44,1 kHz → WAV PCM de 16 bits. La decodificación varía; error claro si falla. Archivos en el dispositivo.',
'article':'Logic Pro y herramientas Mac antiguas exportan AIFF o CAF. Muchos editores prefieren WAV. Esta página abre un AIFF/CAF local, el navegador decodifica y escribe WAV PCM de 16 bits en el dispositivo. Soporte variable; mensaje claro al fallar. La ruta PCM es sin pérdida respecto a las muestras decodificadas.',
'choose':'Elegir un archivo AIFF o CAF','hint':'Un .aiff, .aif o .caf. Hasta 40 MiB y 10 minutos; mono o estéreo. Decodificación según el navegador.',
'convert':'Convertir a WAV','download':'Descargar WAV','sample':'Cargar ejemplo','clear':'Vaciar','advanced':'Ajustes avanzados (opcional)','bitrate':'Frecuencia de muestreo WAV',
'settings_hint':'44,1 kHz por defecto, o 48 kHz. Salida WAV PCM de 16 bits con los canales originales.',
'progress':'Progreso de conversión','read':'Leer grabación','decode':'Decodificar audio','encode':'Codificar WAV','done':'Listo. Escucha el resultado y luego Descarga WAV.',
'failed':'Conversión fallida. Prueba un AIFF/CAF más corto u otro navegador si falla la decodificación.','elapsed':'Transcurrido: {s}s','preview':'Escuchar el WAV',
'result':'{seconds}s decodificados · Entrada {input} KiB → WAV {output} KiB · {kbps} Hz · {channels} canal(es)','sample_name':'five-second-aiff-demo',
'empty':'Elige AIFF/CAF o carga el ejemplo primero.','err_file':'Suelta exactamente un archivo AIFF o CAF.',
'err_format':'Audio no válido. AIFF/CAF que el navegador pueda decodificar. Vídeo, DRM y otros contenedores no aceptados.',
'err_limit':'Supera 40 MiB o 10 minutos, o no es mono/estéreo.','err_decode':'Este navegador no pudo decodificar AIFF/CAF. Prueba Chrome/Firefox o un archivo más corto.',
'err_encoder':'No se pudo escribir el WAV. Revisa la conexión y vuelve a Convertir a WAV.','err_sample':'No se pudo cargar el ejemplo. Revisa la conexión e inténtalo de nuevo.',
'how_title':'Cómo convertir AIFF a WAV','how_body':'Crea una copia WAV de un AIFF/CAF completo para un editor que espera WAV—sin subir el archivo.',
'how_item_1':'Elige AIFF/CAF o pulsa Cargar ejemplo.','how_item_2':'Mantén 44,1 kHz o elige 48 kHz en Ajustes avanzados, luego Convertir a WAV.',
'how_item_3':'Espera Leer → Decodificar → Codificar. Si falla, verás un error claro de soporte del navegador.','how_item_4':'Escucha el WAV, compara tamaños y pulsa Descargar WAV.',
'why_choose_title':'Por qué Convertir un archivo AIFF a WAV','why_choose_item_1':'El ejemplo AIFF integrado usa la misma ruta de decodificación y WAV.',
'why_choose_item_2':'Oyes la salida real y ves KiB entrada/salida antes de guardar.','why_choose_item_3':'Los fallos de decodificación son explícitos—el soporte AIFF/CAF varía.',
'why_choose_item_4':'Proceso en el dispositivo; conversores MP3→WAV y FLAC→MP3 relacionados a un clic.',
'rules_title':'Frecuencia, ruta PCM y límites','rules_body':'Tamaño WAV ≈ segundos × frecuencia × canales × 2 bytes (PCM 16 bits). Tamaño mostrado medido.',
'rules_item_1':'44,1 kHz para la mayoría de flujos musicales o 48 kHz alineado a vídeo. PCM no aplica pérdida tipo MP3.',
'rules_item_2':'Salida PCM de 16 bits, 1–2 canales. Etiquetas no copiadas.','rules_item_3':'Un AIFF/CAF, máx 40 MiB y 10 min. Sin DRM, vídeo, surround ni lotes.',
'rules_item_4':'Esta página solo WAV—no MP3. Para MP3 usa los conversores FLAC o M4A relacionados.',
'example_title':'Ejemplo real de conversión AIFF','example':'Al abrir, un tono AIFF estéreo de cinco segundos se convierte a WAV PCM de 16 bits a 44,1 kHz. Cargar ejemplo repite. No se reproduce solo.',
'usecases_title':'Para qué sirve','usecase_1':'Abrir export AIFF de Logic en un editor Windows que prefiere WAV.','usecase_2':'Convertir memo CAF a WAV conservando el contenedor original.',
'faq_q1':'¿También archivos CAF?','faq_a1':'Sí. Suelta .caf si el navegador puede decodificarlo—el mismo Convertir a WAV sirve para AIFF y CAF.',
'faq_q2':'¿AIFF a WAV es sin pérdida?','faq_a2':'Las muestras decodificadas se escriben como PCM de 16 bits sin otro códec con pérdida; el soporte del navegador varía y no se copian metadatos.',
'faq_q3':'¿Se sube mi grabación?','faq_a3':'No. Decodificación y escritura WAV en el navegador en tu dispositivo. Carga inicial de página y ejemplo necesita conexión.',
'faq_q4':'¿Puedo obtener MP3 aquí?','faq_a4':'No. Esta página es AIFF/CAF → WAV solamente. Para MP3 usa las páginas FLAC o M4A relacionadas.',
'faq_q5':'¿Por qué falla un AIFF válido?','faq_a5':'El soporte AIFF/CAF del navegador varía. Prueba un navegador actual, un archivo más corto o exporta WAV desde tu app.',
}

# Load AIFF ja de fr pt id ar ru from second part - inline below
from finish_i18n_p4_p5_p6_part2 import AIFF_REST  # type: ignore
AIFF.update(AIFF_REST)

if __name__ == '__main__':
    n = 0
    for lang, data in OGG.items():
        write('convert-an-ogg-file-to-mp3', lang, OGG_P, data)
        n += 1
    for lang, data in AIFF.items():
        write('convert-an-aiff-file-to-wav', lang, AIFF_P, data)
        n += 1
    print(f'Wrote {n} shards')
