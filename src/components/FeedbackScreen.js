import React from 'react';

const FeedbackScreen = ({ feedback, onNext }) => {
  return (
    <div className="feedback-screen">
      <h3>{feedback.isCorrect ? "🎉 Correct!" : "❌ Try Again"}</h3>
      <p>{feedback.explanation || "Good job!"}</p>
      <button onClick={onNext}>Next Question</button>
    </div>
  );
};

export default FeedbackScreen;
