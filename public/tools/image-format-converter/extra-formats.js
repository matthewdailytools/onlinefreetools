/**
 * Extra image encoders for image-format-converter (BMP / GIF / ICO / SVG).
 * Attaches window.OFT_IFC_EXTRA — no bundler; loaded as a classic script.
 * ASCII comments only (safe for all encodings).
 */
(function (global) {
  'use strict';

  /**
   * Encode ImageData as 24-bit top-down BMP.
   * @param {ImageData} imageData
   * @returns {Blob}
   */
  function encodeBmp(imageData) {
    var w = imageData.width;
    var h = imageData.height;
    var data = imageData.data;
    var rowSize = (w * 3 + 3) & ~3;
    var pixelSize = rowSize * h;
    var fileSize = 54 + pixelSize;
    var buf = new ArrayBuffer(fileSize);
    var view = new DataView(buf);
    var bytes = new Uint8Array(buf);

    view.setUint8(0, 0x42);
    view.setUint8(1, 0x4d);
    view.setUint32(2, fileSize, true);
    view.setUint32(10, 54, true);
    view.setUint32(14, 40, true);
    view.setInt32(18, w, true);
    view.setInt32(22, -h, true);
    view.setUint16(26, 1, true);
    view.setUint16(28, 24, true);
    view.setUint32(34, pixelSize, true);

    var offset = 54;
    for (var y = 0; y < h; y++) {
      var row = offset + y * rowSize;
      for (var x = 0; x < w; x++) {
        var i = (y * w + x) * 4;
        var p = row + x * 3;
        bytes[p] = data[i + 2];
        bytes[p + 1] = data[i + 1];
        bytes[p + 2] = data[i];
      }
    }
    return new Blob([buf], { type: 'image/bmp' });
  }

  /**
   * Build a 256-color palette via 6x6x6 cube + nearest fill; map pixels to indices.
   * If any alpha < 128, index 0 is reserved for transparency (opaque colors start at 1).
   * @param {ImageData} imageData
   * @returns {{ palette: number[][], indices: Uint8Array, transparent: boolean }}
   */
  function quantizeForGif(imageData) {
    var w = imageData.width;
    var h = imageData.height;
    var data = imageData.data;
    var hasTransparency = false;
    var n = w * h;
    var i;
    for (i = 0; i < n; i++) {
      if (data[i * 4 + 3] < 128) {
        hasTransparency = true;
        break;
      }
    }

    /** Index 0 reserved for transparent when needed. */
    var palette = hasTransparency ? [[0, 0, 0]] : [];
    var keyToIndex = Object.create(null);
    var minOpaque = hasTransparency ? 1 : 0;

    function addColor(r, g, b) {
      var key = r + ',' + g + ',' + b;
      if (keyToIndex[key] !== undefined) return keyToIndex[key];
      if (palette.length >= 256) {
        var best = minOpaque;
        var bestD = 1e9;
        for (var pi = minOpaque; pi < palette.length; pi++) {
          var pr = palette[pi][0] - r;
          var pg = palette[pi][1] - g;
          var pb = palette[pi][2] - b;
          var d = pr * pr + pg * pg + pb * pb;
          if (d < bestD) {
            bestD = d;
            best = pi;
          }
        }
        return best;
      }
      var idx = palette.length;
      palette.push([r, g, b]);
      keyToIndex[key] = idx;
      return idx;
    }

    var indices = new Uint8Array(n);
    for (i = 0; i < n; i++) {
      var o = i * 4;
      if (data[o + 3] < 128) {
        indices[i] = 0;
        continue;
      }
      var r = Math.round(data[o] / 51) * 51;
      var g = Math.round(data[o + 1] / 51) * 51;
      var b = Math.round(data[o + 2] / 51) * 51;
      indices[i] = addColor(r, g, b);
    }
    if (!palette.length) palette.push([0, 0, 0]);
    return { palette: palette, indices: indices, transparent: hasTransparency };
  }

  /**
   * LZW-compress GIF index stream.
   * @param {Uint8Array} indices
   * @param {number} minCodeSize
   * @returns {Uint8Array}
   */
  function lzwEncode(indices, minCodeSize) {
    var clearCode = 1 << minCodeSize;
    var endCode = clearCode + 1;
    var nextCode = endCode + 1;
    var codeSize = minCodeSize + 1;
    var maxCode = 1 << codeSize;

    var dict = Object.create(null);
    function resetDict() {
      dict = Object.create(null);
      nextCode = endCode + 1;
      codeSize = minCodeSize + 1;
      maxCode = 1 << codeSize;
    }
    resetDict();

    var out = [];
    var bitBuf = 0;
    var bitLen = 0;
    function writeCode(code) {
      bitBuf |= code << bitLen;
      bitLen += codeSize;
      while (bitLen >= 8) {
        out.push(bitBuf & 0xff);
        bitBuf >>= 8;
        bitLen -= 8;
      }
    }

    writeCode(clearCode);
    var w = String(indices[0]);
    for (var i = 1; i < indices.length; i++) {
      var k = String(indices[i]);
      var wk = w + ',' + k;
      if (dict[wk] !== undefined) {
        w = wk;
      } else {
        writeCode(w.indexOf(',') === -1 ? Number(w) : dict[w]);
        if (nextCode < 4096) {
          dict[wk] = nextCode++;
          if (nextCode === maxCode + 1 && codeSize < 12) {
            codeSize++;
            maxCode = 1 << codeSize;
          }
        } else {
          writeCode(clearCode);
          resetDict();
        }
        w = k;
      }
    }
    writeCode(w.indexOf(',') === -1 ? Number(w) : dict[w]);
    writeCode(endCode);
    if (bitLen > 0) out.push(bitBuf & 0xff);
    return new Uint8Array(out);
  }

  /**
   * Encode ImageData as single-frame GIF89a.
   * @param {ImageData} imageData
   * @returns {Blob}
   */
  function encodeGif(imageData) {
    var w = imageData.width;
    var h = imageData.height;
    var q = quantizeForGif(imageData);
    var palette = q.palette.slice();
    while (palette.length < 2) palette.push([0, 0, 0]);
    var colorBits = 1;
    while (1 << colorBits < palette.length && colorBits < 8) colorBits++;
    var colorCount = 1 << colorBits;
    while (palette.length < colorCount) palette.push([0, 0, 0]);

    var minCodeSize = Math.max(2, colorBits);
    var lzw = lzwEncode(q.indices, minCodeSize);

    var parts = [];
    parts.push(new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61]));
    var head = new ArrayBuffer(7);
    var hv = new DataView(head);
    hv.setUint16(0, w, true);
    hv.setUint16(2, h, true);
    hv.setUint8(4, 0x80 | ((colorBits - 1) << 4) | (colorBits - 1));
    hv.setUint8(5, 0);
    hv.setUint8(6, 0);
    parts.push(new Uint8Array(head));

    var pal = new Uint8Array(colorCount * 3);
    for (var i = 0; i < colorCount; i++) {
      pal[i * 3] = palette[i][0];
      pal[i * 3 + 1] = palette[i][1];
      pal[i * 3 + 2] = palette[i][2];
    }
    parts.push(pal);

    if (q.transparent) {
      parts.push(new Uint8Array([0x21, 0xf9, 0x04, 0x01, 0x00, 0x00, 0x00, 0x00]));
    }

    parts.push(new Uint8Array([0x2c]));
    var imgDesc = new ArrayBuffer(9);
    var iv = new DataView(imgDesc);
    iv.setUint16(0, 0, true);
    iv.setUint16(2, 0, true);
    iv.setUint16(4, w, true);
    iv.setUint16(6, h, true);
    iv.setUint8(8, 0);
    parts.push(new Uint8Array(imgDesc));
    parts.push(new Uint8Array([minCodeSize]));

    var pos = 0;
    while (pos < lzw.length) {
      var chunk = Math.min(255, lzw.length - pos);
      parts.push(new Uint8Array([chunk]));
      parts.push(lzw.subarray(pos, pos + chunk));
      pos += chunk;
    }
    parts.push(new Uint8Array([0x00, 0x3b]));
    return new Blob(parts, { type: 'image/gif' });
  }

  /**
   * Wrap PNG bytes in an ICO container (Vista+ PNG icon).
   * @param {Uint8Array} pngBytes
   * @param {number} w
   * @param {number} h
   * @returns {Blob}
   */
  function encodeIcoFromPng(pngBytes, w, h) {
    var header = new ArrayBuffer(6 + 16);
    var view = new DataView(header);
    view.setUint16(0, 0, true);
    view.setUint16(2, 1, true);
    view.setUint16(4, 1, true);
    view.setUint8(6, w >= 256 ? 0 : w);
    view.setUint8(7, h >= 256 ? 0 : h);
    view.setUint8(8, 0);
    view.setUint8(9, 0);
    view.setUint16(10, 1, true);
    view.setUint16(12, 32, true);
    view.setUint32(14, pngBytes.byteLength, true);
    view.setUint32(18, 22, true);
    return new Blob([header, pngBytes], { type: 'image/x-icon' });
  }

  /**
   * Embed a PNG data URL in a minimal SVG document.
   * @param {string} pngDataUrl
   * @param {number} w
   * @param {number} h
   * @returns {Blob}
   */
  function encodeSvg(pngDataUrl, w, h) {
    var svg =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
      w +
      '" height="' +
      h +
      '" viewBox="0 0 ' +
      w +
      ' ' +
      h +
      '">' +
      '<image width="' +
      w +
      '" height="' +
      h +
      '" href="' +
      pngDataUrl +
      '"/>' +
      '</svg>';
    return new Blob([svg], { type: 'image/svg+xml' });
  }

  /**
   * Canvas toBlob as Promise (PNG helper for ICO/SVG).
   * @param {HTMLCanvasElement} canvas
   * @returns {Promise<Blob>}
   */
  function canvasPngBlob(canvas) {
    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        if (!blob) reject(new Error('encode'));
        else resolve(blob);
      }, 'image/png');
    });
  }

  /**
   * Encode canvas to one of the extra formats.
   * @param {HTMLCanvasElement} canvas
   * @param {string} mime image/bmp | image/gif | image/x-icon | image/svg+xml
   * @returns {Promise<Blob>}
   */
  function encodeExtra(canvas, mime) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return Promise.reject(new Error('encode'));
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    mime = String(mime || '').toLowerCase();

    if (mime === 'image/bmp') {
      return Promise.resolve(encodeBmp(imageData));
    }
    if (mime === 'image/gif') {
      return Promise.resolve(encodeGif(imageData));
    }
    if (mime === 'image/x-icon' || mime === 'image/vnd.microsoft.icon') {
      return canvasPngBlob(canvas).then(function (png) {
        return png.arrayBuffer().then(function (ab) {
          return encodeIcoFromPng(new Uint8Array(ab), canvas.width, canvas.height);
        });
      });
    }
    if (mime === 'image/svg+xml') {
      return canvasPngBlob(canvas).then(function (png) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.onload = function () {
            resolve(encodeSvg(String(reader.result), canvas.width, canvas.height));
          };
          reader.onerror = function () {
            reject(new Error('encode'));
          };
          reader.readAsDataURL(png);
        });
      });
    }
    return Promise.reject(new Error('encode'));
  }

  /** Public API for the converter page script. */
  global.OFT_IFC_EXTRA = {
    encodeExtra: encodeExtra,
    /** MIME values handled by this module (not browser toBlob). */
    mimes: ['image/bmp', 'image/gif', 'image/x-icon', 'image/svg+xml'],
  };
})(typeof window !== 'undefined' ? window : globalThis);
