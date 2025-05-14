import React from 'react';

const RewardsHub = ({ score, onContinue }) => {
  return (
    <div className="rewards-hub">
      <h2>🏆 Rewards Earned</h2>
      <p>Your Score: {score}</p>
      <button onClick={onContinue}>Back to Map</button>
    </div>
  );
};

export default RewardsHub;
