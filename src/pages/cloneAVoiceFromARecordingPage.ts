import { renderMossVoicePage, type MossVoicePageOptions } from './site/mossVoicePage';

export const renderCloneAVoiceFromARecordingPage = (opts: MossVoicePageOptions) =>
  renderMossVoicePage(opts, {
    slug: 'clone-a-voice-from-a-recording',
    sample: {
      text: 'The lights are on. Your studio is ready for the next take.',
      url: '/samples/clone-a-voice-from-a-recording.wav',
      referenceUrl: '/samples/moss-nano-voiceover-en.wav',
    },
  });
