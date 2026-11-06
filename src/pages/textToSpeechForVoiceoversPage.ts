import { renderMossVoicePage, type MossVoicePageOptions } from './site/mossVoicePage';

const samples = {
  en: {
    text: 'Welcome to the field notes podcast. Today we are heading out before sunrise.',
    url: '/samples/moss-nano-voiceover-en.wav',
    voice: 'en-a',
  },
  zh: {
    text: '欢迎收听晨间电台。今天，我们从海边出发。',
    url: '/samples/moss-nano-voiceover-zh.wav',
    voice: 'zh-a',
  },
};

export const renderTextToSpeechForVoiceoversPage = (opts: MossVoicePageOptions) =>
  renderMossVoicePage(opts, {
    slug: 'text-to-speech-for-voiceovers',
    sample: opts.lang === 'zh' ? samples.zh : samples.en,
  });
