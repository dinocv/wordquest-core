import questions from '../data/questions';

let userProfile = {
  accuracy: 0.8,
  speed: 4.2,
  preferences: {
    science: 0.9,
    history: 0.6,
    math: 0.7
  }
};

export const generateRandomQuestion = () => {
  // Simulate dynamic question selection
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

export const evaluateAnswer = (userAnswer, correctAnswer) => {
  return userAnswer === correctAnswer;
};
