#!/usr/bin/env python3
"""生成 OGG/AIFF 剩余 locale 分片。"""
from __future__ import annotations

import os

ROOT = os.path.join(os.path.dirname(__file__), '..', 'src/site/i18n/tools')

def esc(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")

def write_shard(slug: str, lang: str, prefix: str, data: dict[str, str]) -> None:
    d = os.path.join(ROOT, slug)
    os.makedirs(d, exist_ok=True)
    comment = f'{lang} strings for {slug}. Rich How≥4 Why≥4 Rules≥4 FAQ≥5; local convert only.'
    lines = [
        "import type { SiteLangDict } from '../../../types';",
        '',
        '/**',
        f' * {comment}',
        ' */',
        f'const {lang}: SiteLangDict = {{',
    ]
    for k, v in data.items():
        lines.append(f"  {prefix}_{k}: '{esc(v)}',")
    lines += ['};', f'export default {lang};', '']
    with open(os.path.join(d, f'{lang}.ts'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

# --- OGG remaining langs (en/zh exist) ---
OGG = {
'es': {
'title':'Convertir un archivo OGG a MP3','desc':'Convierte una grabación OGG u Opus local a MP3. El audio permanece en tu dispositivo y no se sube a un servidor.',
'description':'Convierte OGG a MP3 en el navegador sin subir. Pasos: elige OGG u Opus, elige bitrate, Convertir a MP3, previsualiza y descarga. Ejemplo: tono Opus-in-OGG estéreo de cinco segundos da unos 120 KiB de MP3 a 192 kbps. Usa decodeAudioData si el navegador decodifica OGG/Opus, luego lamejs; error claro si falla. Archivos en el dispositivo.',
'article':'Notas de voz y audio de juegos llegan como OGG Vorbis u Opus, pero a veces hace falta MP3. Esta página convierte un contenedor OGG local completo—Vorbis u Opus—en un MP3 previsualizable. Codificar a MP3 es otro paso con pérdida; conserva el original.',
'choose':'Elegir un archivo OGG u Opus','hint':'Un .ogg, .oga o .opus. Hasta 40 MiB y 10 minutos; mono o estéreo. Decodificación según el navegador.',
'convert':'Convertir a MP3','download':'Descargar MP3','sample':'Cargar ejemplo','clear':'Vaciar','advanced':'Ajustes avanzados (opcional)','bitrate':'Bitrate MP3',
'settings_hint':'192 kbps por defecto. 128 ahorra espacio; 320 usa más datos. Salida 44,1 kHz, canales originales.',
'progress':'Progreso de conversión','read':'Leer grabación','decode':'Decodificar audio','encode':'Codificar MP3','done':'Listo. Escucha el resultado y luego Descarga MP3.',
'failed':'Conversión fallida. Prueba un OGG u Opus más corto que tu navegador pueda decodificar.','elapsed':'Transcurrido: {s}s','preview':'Escuchar el MP3',
'result':'{seconds}s decodificados · Entrada {input} KiB → MP3 {output} KiB · {kbps} kbps · 44,1 kHz · {channels} canal(es)','sample_name':'five-second-ogg-demo',
'empty':'Elige OGG u Opus o carga el ejemplo primero.','err_file':'Suelta exactamente un archivo OGG u Opus.',
'err_format':'OGG no válido. Contenedor OggS con Vorbis u Opus. OGG solo vídeo, Speex-only y listas no se aceptan.',
'err_limit':'Supera 40 MiB o 10 minutos, o no es mono/estéreo.','err_decode':'Este navegador no pudo decodificar OGG u Opus. Prueba un navegador actual o un archivo más corto.',
'err_encoder':'No se pudo cargar el codificador MP3. Revisa la conexión y vuelve a Convertir a MP3.','err_sample':'No se pudo cargar el ejemplo. Revisa la conexión e inténtalo de nuevo.',
'how_title':'Cómo convertir una grabación OGG a MP3','how_body':'Crea una copia MP3 de un OGG u Opus completo cuando el reproductor del destinatario espera MP3.',
'how_item_1':'Elige OGG u Opus o pulsa Cargar ejemplo.','how_item_2':'Mantén el bitrate o abre Ajustes avanzados y pulsa Convertir a MP3.',
'how_item_3':'Espera Leer → Decodificar → Codificar. Si falla, verás un error claro de soporte del navegador.','how_item_4':'Escucha el MP3, compara tamaños y pulsa Descargar MP3.',
'why_choose_title':'Por qué Convertir un archivo OGG a MP3','why_choose_item_1':'El ejemplo Opus-in-OGG usa la misma ruta de decodificación y MP3.',
'why_choose_item_2':'Oyes la salida real y ves tamaños medidos antes de guardar.','why_choose_item_3':'Se comprueba OggS primero; flujos no soportados fallan pronto.',
'why_choose_item_4':'El proceso queda en tu dispositivo; no se sube la grabación para convertirla.',
'rules_title':'Bitrate, Opus y límites','rules_body':'Bytes MP3 ≈ segundos × kbps × 1000 ÷ 8. Tamaño mostrado medido; padding del codificador añade un poco.',
'rules_item_1':'128 para voz, 192 para compartir, 320 para más detalle. MP3 pierde frente a OGG/Opus.',
'rules_item_2':'Salida 44,1 kHz, 1–2 canales. Etiquetas no copiadas. Padding puede alargar un poco la reproducción.',
'rules_item_3':'Un OGG/Opus hasta 40 MiB y 10 minutos. Sin OGG solo vídeo, surround, DRM ni lotes.',
'rules_item_4':'Opus a MP3 se absorbe en esta misma página. Para FLAC o M4A usa los conversores relacionados.',
'example_title':'Ejemplo real de conversión OGG','example':'Al abrir, un tono Opus-in-OGG estéreo de cinco segundos se convierte a unos 120 KiB de MP3 a 192 kbps. Cargar ejemplo lo repite. No se reproduce solo.',
'usecases_title':'Para qué sirve','usecase_1':'Enviar un clip OGG de juego o chat a quien espera MP3.','usecase_2':'Convertir nota Opus en adjunto MP3 conservando el original.',
'faq_q1':'¿También convierto Opus a MP3?','faq_a1':'Sí. Opus en OGG (y .opus que el navegador trata como OGG) usa el mismo Convertir a MP3. Renombrar la extensión no convierte.',
'faq_q2':'¿Se sube mi audio? ¿Funciona sin red?','faq_a2':'El archivo permanece en tu dispositivo. La página y el codificador necesitan red al cargar; offline no garantizado.',
'faq_q3':'¿Por qué falla un OGG válido en el móvil?','faq_a3':'El navegador puede carecer de soporte Vorbis/Opus o memoria. OGG solo vídeo y multicanal se rechazan. Prueba el ejemplo integrado.',
'faq_q4':'¿OGG a MP3 es sin pérdida?','faq_a4':'No. OGG/Opus y MP3 son con pérdida. Mayor bitrate MP3 no restaura detalle descartado.',
'faq_q5':'¿Varios archivos u OGG a WAV?','faq_a5':'Un OGG/Opus local completo → un MP3. Sin matriz de formatos, listas, vídeo ni lotes.',
},
'ja': {
'title':'OGGファイルをMP3に変換','desc':'ローカルのOGGまたはOpus録音をMP3にします。音声は端末内に留まり、サーバーへアップロードされません。',
'description':'ブラウザでOGGをMP3に変換し、アップロードしません。手順：OGG/Opusを選び、ビットレートを選び、「MP3に変換」、試聴してダウンロード。例：5秒のOpus-in-OGGステレオが192 kbpsで約120 KiBのMP3に。decodeAudioDataとlamejs；デコード失敗時は明確なエラー。ファイルは端末に留まります。',
'article':'音声メモやゲーム音はOGG Vorbis/Opusで届くことが多いが、共有先はMP3を求める場合があります。1本のローカルOGG（Vorbis/Opus）を試聴可能なMP3に。MP3化はさらに不可逆—原本を残してください。成功はブラウザのOGGデコード能力次第です。',
'choose':'OGGまたはOpusファイルを選ぶ','hint':'1つの.ogg/.oga/.opus。最大40 MiB・10分、モノ/ステレオ。デコードはブラウザ次第。',
'convert':'MP3に変換','download':'MP3をダウンロード','sample':'サンプルを読み込む','clear':'クリア','advanced':'詳細設定（任意）','bitrate':'MP3ビットレート',
'settings_hint':'既定192 kbps。128は省サイズ、320はより多くのデータ。出力44.1 kHz、元のチャンネル。',
'progress':'変換の進捗','read':'読み取り','decode':'デコード','encode':'MP3エンコード','done':'完了。結果を聴いてからMP3をダウンロード。',
'failed':'変換失敗。短いOGG/Opusか対応ブラウザを試してください。','elapsed':'経過: {s}秒','preview':'MP3を聴く',
'result':'デコード {seconds}秒 · 入力 {input} KiB → MP3 {output} KiB · {kbps} kbps · 44.1 kHz · {channels} ch','sample_name':'five-second-ogg-demo',
'empty':'先にOGG/Opusを選ぶかサンプルを読み込んでください。','err_file':'OGG/Opusは1つだけドロップ。',
'err_format':'非対応または破損OGG。OggSコンテナにVorbis/Opus。動画のみOGG、Speex-only、プレイリスト不可。',
'err_limit':'40 MiB超、10分超、またはモノ/ステレオ以外。','err_decode':'このブラウザはOGG/Opusをデコードできません。最新ブラウザか短いファイルを。',
'err_encoder':'MP3エンコーダー読み込み失敗。接続確認後「MP3に変換」を再試行。','err_sample':'サンプル読み込み失敗。接続確認後再試行。',
'how_title':'OGG録音をMP3に変換する方法','how_body':'相手のプレーヤーがMP3を求めるとき、OGG/Opus全体のMP3コピーを作成。',
'how_item_1':'OGG/Opusを選ぶか「サンプルを読み込む」。','how_item_2':'ビットレート確認後「MP3に変換」。',
'how_item_3':'読み取り→デコード→エンコードを待つ。失敗時はブラウザ支持エラー。','how_item_4':'MP3を聴きサイズ確認後ダウンロード。',
'why_choose_title':'このOGG→MP3ツールを選ぶ理由','why_choose_item_1':'内蔵Opus-in-OGGサンプルは本番と同じ経路。',
'why_choose_item_2':'実出力を聴き実測サイズを確認してから保存。','why_choose_item_3':'OggSを先に検査；非対応は早期失敗。',
'why_choose_item_4':'処理は端末内。変換のためアップロードしません。',
'rules_title':'ビットレート・Opus・制限','rules_body':'MP3概算 ≈ 秒×kbps×1000÷8。表示は実測。',
'rules_item_1':'話し声128、共有192、音楽320。OGG/Opus源に対しMP3は不可逆。',
'rules_item_2':'出力44.1 kHz、1〜2ch。タグ非コピー。','rules_item_3':'OGG/Opus1本、最大40 MiB・10分。動画のみ・surround・DRM・バッチ不可。',
'rules_item_4':'Opus→MP3は同一ページ。FLAC/M4Aは関連ツールへ。',
'example_title':'実際のOGG変換例','example':'5秒Opus-in-OGGが192 kbpsで約120 KiB MP3に。自動再生なし。',
'usecases_title':'こんなときに','usecase_1':'ゲーム/チャットOGGをMP3が必要な相手へ。','usecase_2':'Opus音声メモをMP3添付に、原本は保持。',
'faq_q1':'OpusもMP3に？','faq_a1':'はい。OGG内Opusと.opusは同じ「MP3に変換」。拡張子変更だけでは不可。',
'faq_q2':'アップロード？オフライン？','faq_a2':'端末内処理。初回読み込みに通信必要、オフライン保証なし。',
'faq_q3':'正常OGGがスマホで失敗？','faq_a3':'Vorbis/Opus非対応やメモリ不足。動画のみ・多chは拒否。サンプルを先に。',
'faq_q4':'OGG→MP3はロスレス？','faq_a4':'いいえ。両方不可逆。高bitrateでも復元不可。',
'faq_q5':'複数ファイルやOGG→WAV？','faq_a5':'1本のOGG/Opus→1 MP3のみ。形式マトリクス・プレイリスト・バッチ不可。',
},
}

# Continue OGG de, fr, pt, id, ar, ru and AIFF all langs in part 2 via exec of appended data
exec(open(os.path.join(os.path.dirname(__file__), 'gen_remaining_i18n_data.py'), encoding='utf-8').read())

if __name__ == '__main__':
    count = 0
    for lang, data in OGG.items():
        write_shard('convert-an-ogg-file-to-mp3', lang, 'tool_convert_an_ogg_file_to_mp3', data)
        count += 1
    for lang, data in AIFF.items():
        write_shard('convert-an-aiff-file-to-wav', lang, 'tool_convert_an_aiff_file_to_wav', data)
        count += 1
    print(f'Wrote {count} shards')
