export const parseLines = (text) => String(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
export const formatStamp = (ms) => {
  const hundredths = Math.round(ms / 10);
  const minutes = Math.floor(hundredths / 6000);
  const seconds = Math.floor(hundredths / 100) % 60;
  return `[${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(hundredths % 100).padStart(2, '0')}]`;
};
export function buildLrc(lines, times, offsetMs = 0) {
  if (!lines.length || lines.length !== times.length || times.some((time) => !Number.isFinite(time))) throw new Error('missing');
  const adjusted = times.map((time) => Math.round(time + offsetMs));
  if (adjusted.some((time) => time < 0)) throw new Error('negative');
  if (adjusted.some((time, index) => index && time < adjusted[index - 1])) throw new Error('order');
  return lines.map((line, index) => `${formatStamp(adjusted[index])}${line}`).join('\n') + '\n';
}
