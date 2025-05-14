import React, { useState } from 'react';

const AvatarBuilder = ({ onComplete }) => {
  const [character, setCharacter] = useState('Explorer');

  return (
    <div className="avatar-builder">
      <h2>Choose Your Hero</h2>
      <select onChange={(e) => setCharacter(e.target.value)}>
        <option value="Explorer">Explorer</option>
        <option value="Scientist">Scientist</option>
        <option value="Knight">Knight</option>
        <option value="Astronaut">Astronaut</option>
      </select>
      <button onClick={onComplete}>Confirm</button>
    </div>
  );
};

export default AvatarBuilder;
