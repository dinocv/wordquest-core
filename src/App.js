import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import WorldMap from './components/WorldMap';
import QuestionScreen from './components/QuestionScreen';
import FeedbackScreen from './components/FeedbackScreen';
import RewardsHub from './components/RewardsHub';

const App = () => {
  const [screen, setScreen] = useState('main-menu');
  const [question, setQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  const goToScreen = (newScreen) => setScreen(newScreen);

  const askQuestion = (newQuestion) => {
    setQuestion(newQuestion);
    setScreen('question');
  };

  const submitAnswer = (selectedOption) => {
    const isCorrect = selectedOption === question.correctAnswer;
    if (isCorrect) setScore(score + 10);
    setFeedback({ ...question, isCorrect });
    setTimeout(() => setScreen('feedback'), 500);
  };

  const nextQuestion = () => {
    const newQuestion = generateRandomQuestion();
    askQuestion(newQuestion);
  };

  return (
    <div className="app">
      {screen === 'main-menu' && <MainMenu onStart={() => goToScreen('avatar')} />}
      {screen === 'avatar' && <AvatarBuilder onComplete={() => goToScreen('world-map')} />}
      {screen === 'world-map' && <WorldMap onSelectWorld={() => askQuestion(generateRandomQuestion())} />}
      {screen === 'question' && <QuestionScreen question={question} onSubmit={submitAnswer} />}
      {screen === 'feedback' && <FeedbackScreen feedback={feedback} onNext={nextQuestion} />}
      {screen === 'rewards' && <RewardsHub score={score} onContinue={() => goToScreen('world-map')} />}
    </div>
  );
};

export default App;
