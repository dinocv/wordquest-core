import SpeechSynthesis from 'tts-react';

const tts = new SpeechSynthesis();

export const speakQuestion = (text) => {
  tts.speak(text);
};
