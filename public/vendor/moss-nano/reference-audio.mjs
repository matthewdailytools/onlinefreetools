const MAX_BYTES = 10 * 1024 * 1024;
const RATE = 48000;
const MIN_SECONDS = 2;
const MAX_SECONDS = 12;
const RECORD_SECONDS = 10;

export function setupReferenceAudio(copy, invalidate, onRecording) {
  const fileInput = document.getElementById('mossReference');
  const dropZone = document.getElementById('mossDrop');
  const player = document.getElementById('mossReferenceAudio');
  const consent = document.getElementById('mossConsent');
  const record = document.getElementById('mossRecord');
  const status = document.getElementById('mossRecordStatus');
  const remove = document.getElementById('mossRemoveReference');
  const name = document.getElementById('mossReferenceName');
  const feedback = document.getElementById('mossMicFeedback');
  const level = document.getElementById('mossMicLevel');
  const time = document.getElementById('mossMicTime');
  const defaultRecordLabel = record.textContent;
  let source;
  let url;
  let recorder;
  let version = 0;
  let recorded = false;

  function setSource(blob, label = '', fromMic = false) {
    version += 1;
    player.pause();
    if (url) URL.revokeObjectURL(url);
    source = blob;
    recorded = fromMic;
    fileInput.value = '';
    consent.disabled = !blob;
    name.textContent = label;
    player.hidden = !blob;
    remove.hidden = !blob;
    if (blob) {
      url = URL.createObjectURL(blob);
      player.src = url;
    } else {
      url = undefined;
      player.removeAttribute('src');
      player.load();
    }
    invalidate();
  }

  function chooseFile(file) {
    if (!file) return;
    status.textContent = '';
    if (!file.size || file.size > MAX_BYTES) {
      setSource();
      status.textContent = copy.error_reference;
      return;
    }
    setSource(file, file.name);
  }

  fileInput.addEventListener('change', () => chooseFile(fileInput.files[0]));
  if (dropZone) {
    dropZone.addEventListener('dragover', (event) => {
      if (!event.dataTransfer?.types.includes('Files')) return;
      event.preventDefault();
      const enabled = !fileInput.matches(':disabled');
      event.dataTransfer.dropEffect = enabled ? 'copy' : 'none';
      dropZone.classList.toggle('is-dragover', enabled);
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('is-dragover'));
    dropZone.addEventListener('drop', (event) => {
      event.preventDefault();
      dropZone.classList.remove('is-dragover');
      const files = event.dataTransfer?.files;
      if (fileInput.matches(':disabled') || !files?.length) return;
      if (files.length === 1) {
        chooseFile(files[0]);
      } else {
        setSource();
        status.textContent = copy.error_reference;
      }
    });
  }
  remove.addEventListener('click', () => {
    setSource();
    status.textContent = '';
    fileInput.focus();
  });
  consent.addEventListener('change', invalidate);

  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
    record.disabled = true;
    status.textContent = copy.error_mic;
  } else {
    record.addEventListener('click', async () => {
      if (recorder?.state === 'recording') {
        recorder.stop();
        return;
      }
      version += 1;
      onRecording(true);
      player.pause();
      fileInput.disabled = true;
      remove.disabled = true;
      record.disabled = true;
      status.textContent = copy.mic_request;
      let stream;
      let timer;
      let animation;
      let audioContext;
      let analyser;
      const waveform = new Float32Array(1024);
      const updateMeter = (started) => {
        const seconds = Math.min(RECORD_SECONDS, Math.floor((performance.now() - started) / 1000));
        time.textContent = `${seconds} / ${RECORD_SECONDS} s`;
        if (analyser) {
          analyser.getFloatTimeDomainData(waveform);
          const rms = Math.sqrt(waveform.reduce((sum, value) => sum + value * value, 0) / waveform.length);
          level.value = Math.min(1, rms * 5);
        }
        animation = requestAnimationFrame(() => updateMeter(started));
      };
      function finish() {
        clearTimeout(timer);
        cancelAnimationFrame(animation);
        audioContext?.close().catch(() => {});
        if (feedback) feedback.hidden = true;
        if (level) level.value = 0;
        stream?.getTracks().forEach((track) => track.stop());
        recorder = undefined;
        fileInput.disabled = false;
        remove.disabled = false;
        record.disabled = false;
        record.textContent = defaultRecordLabel;
        onRecording(false);
      }
      try {
        // Create the meter during the click gesture. Recording still works
        // if the browser cannot start Web Audio.
        try { audioContext = new AudioContext(); } catch {}
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (audioContext) {
          try {
            analyser = audioContext.createAnalyser();
            analyser.fftSize = waveform.length;
            audioContext.createMediaStreamSource(stream).connect(analyser);
            audioContext.resume().catch(() => {});
          } catch {
            analyser = undefined;
          }
        }
        recorder = new MediaRecorder(stream);
        const chunks = [];
        let captureFailed = false;
        recorder.ondataavailable = ({ data }) => { if (data.size) chunks.push(data); };
        recorder.onerror = () => { captureFailed = true; };
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: recorder.mimeType });
          finish();
          if (captureFailed || !blob.size) {
            status.textContent = copy.error_mic;
          } else {
            setSource(blob, copy.mic_clip, true);
            status.textContent = '';
          }
        };
        recorder.start();
        timer = setTimeout(() => { if (recorder?.state === 'recording') recorder.stop(); }, RECORD_SECONDS * 1000);
        if (feedback && level && time) {
          level.hidden = !analyser;
          feedback.hidden = false;
          updateMeter(performance.now());
        }
        record.disabled = false;
        record.textContent = copy.stop_recording;
        status.textContent = copy.mic_recording;
      } catch {
        finish();
        status.textContent = copy.error_mic;
      }
    });
    window.addEventListener('pagehide', () => {
      if (recorder?.state === 'recording') recorder.stop();
    });
  }

  async function loadSample() {
    setSource();
    status.textContent = '';
    const request = version;
    try {
      const response = await fetch(fileInput.dataset.sample);
      if (!response.ok) throw new Error('sample');
      const blob = await response.blob();
      if (request === version) setSource(blob, copy.sample_reference);
    } catch {
      if (request === version) status.textContent = copy.error_reference;
    }
  }

  async function read() {
    if (!source) throw new Error('reference_missing');
    if (!consent.checked) throw new Error('consent');
    player.pause();
    const blob = source;
    const fromMic = recorded;
    if (!fromMic) {
      if (Number.isNaN(player.duration) && !player.error) {
        await new Promise((resolve) => {
          const listeners = new AbortController();
          const timer = setTimeout(finish, 4000);
          function finish() {
            clearTimeout(timer);
            listeners.abort();
            resolve();
          }
          player.addEventListener('loadedmetadata', finish, { signal: listeners.signal });
          player.addEventListener('error', finish, { signal: listeners.signal });
        });
      }
      if (!(player.duration >= MIN_SECONDS && player.duration <= MAX_SECONDS)) throw new Error('reference');
    }

    let decoded;
    try {
      const decoder = new OfflineAudioContext(2, 1, RATE);
      decoded = await decoder.decodeAudioData(await blob.arrayBuffer());
    } catch (cause) {
      throw new Error('reference', { cause });
    }
    const { length, numberOfChannels } = decoded;
    if (length < MIN_SECONDS * RATE || length > MAX_SECONDS * RATE || numberOfChannels > 2) {
      throw new Error('reference');
    }
    const first = decoded.getChannelData(0);
    const second = numberOfChannels === 2 ? decoded.getChannelData(1) : first;
    const energy = first.reduce((sum, value, index) => sum + value * value + second[index] * second[index], 0);
    if (Math.sqrt(energy / (length * 2)) < 0.002) throw new Error('reference_quiet');
    const pcm = new Float32Array(length * 2);
    pcm.set(first);
    pcm.set(second, length);
    return { pcm, frames: length };
  }

  return { loadSample, read };
}
