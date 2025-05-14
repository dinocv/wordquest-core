import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Confetti from 'react-confetti'; // Use the UMD global from react-confetti script

// Difficulty levels
const DIFFICULTIES = {
    tiny: { name: "Tiny Explorers", age: "3-5", points: 1, promptDetail: "simple concepts like colors, shapes, or common animals (e.g., cat, dog, sun, blue, circle), suitable for preschoolers." },
    junior: { name: "Junior Detectives", age: "6-9", points: 1, promptDetail: "topics like basic science (e.g., rain, plants), nature (e.g., butterfly, tree), simple math, or everyday objects (e.g., clock, book), suitable for early elementary students." },
    master: { name: "Master Minds", age: "10+", points: 1, promptDetail: "topics like history (e.g., pyramid, knight), geography (e.g., river, mountain), STEM concepts (e.g., magnet, computer), or wordplay (e.g., echo, shadow), suitable for older children and pre-teens." }
};

const DIFFICULTY_ORDER = ['tiny', 'junior', 'master'];

function App() {
    const [difficulty, setDifficulty] = useState('tiny');
    const [riddle, setRiddle] = useState(null);
    const [streak, setStreak] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const generateRiddle = async () => {
        // Simulate API call for riddle generation
        const mockRiddle = {
            question: "I’m yellow, I peel, and monkeys love me.",
            answer: "banana",
            options: ["apple", "banana", "carrot", "grape"],
        };
        setRiddle(mockRiddle);
        setFeedback(null);
    };

    const handleAnswerSelection = (selectedOption) => {
        if (!riddle) return;

        const isCorrect = selectedOption === riddle.answer;
        setFeedback(isCorrect ? "Correct!" : `Not quite! The answer was: ${riddle.answer}`);

        if (isCorrect) {
            const nextStreak = streak + 1;
            setStreak(nextStreak);
            if (nextStreak % 5 === 0) setShowConfetti(true);
        } else {
            setStreak(0);
        }

        setTimeout(() => {
            setShowConfetti(false);
            generateRiddle();
        }, 3000);
    };

    return (
        <div id="root">
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <h1>WordQuest</h1>
            <h2>{DIFFICULTIES[difficulty].name} Challenge!</h2>

            <div className="riddle-card">
                {riddle ? (
                    <>
                        <p>{riddle.question}</p>
                        <div className="options-grid">
                            {riddle.options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`option-btn ${
                                        feedback &&
                                        (option === riddle.answer
                                            ? 'correct'
                                            : option === feedback.split("'")[1]?.toLowerCase()?.trim()
                                            ? 'incorrect'
                                            : '')
                                    }`}
                                    onClick={() => handleAnswerSelection(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {feedback && <div className={`feedback ${feedback.includes("Correct!") ? 'correct' : 'incorrect'}`}>{feedback}</div>}
                    </>
                ) : (
                    <p>Loading riddle...</p>
                )}
            </div>

            <div className="difficulty-controls">
                <button onClick={() => setDifficulty('tiny')}>Tiny Explorers</button>
                <button onClick={() => setDifficulty('junior')}>Junior Detectives</button>
                <button onClick={() => setDifficulty('master')}>Master Minds</button>
            </div>
        </div>
    );
}

export default App;
