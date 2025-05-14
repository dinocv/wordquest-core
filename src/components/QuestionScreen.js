import React from 'react';

const QuestionScreen = ({ question, onSubmit }) => {
  return (
    <div className="question-screen">
      <h3>{question.text}</h3>
      {question.options.map((opt, i) => (
        <button key={i} onClick={() => onSubmit(opt)}>{opt}</button>
      ))}
    </div>
  );
};

export default QuestionScreen;
