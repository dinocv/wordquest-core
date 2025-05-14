import React from 'react';

const WorldMap = ({ onSelectWorld }) => {
  return (
    <div className="world-map">
      <h2>🌍 Explore New Worlds</h2>
      <button onClick={onSelectWorld}>🚀 Space of Science</button>
      <button disabled>🔒 Forest of Language (Coming Soon)</button>
    </div>
  );
};

export default WorldMap;
