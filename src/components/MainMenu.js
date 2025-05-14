import React from 'react';

const MainMenu = ({ onStart }) => {
  return (
    <div className="main-menu">
      <h1>🌟 WordQuest</h1>
      <p>Where Words Unlock Worlds</p>
      <button onClick={onStart}>Play Now</button>
    </div>
  );
};

export default MainMenu;
