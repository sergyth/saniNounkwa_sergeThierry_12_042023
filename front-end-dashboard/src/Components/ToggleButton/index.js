import React from 'react';
import'./toggleButton.css'

const ToggleButton = ({ useMockData, setUseMockData }) => {

  return (
    <button onClick={() => setUseMockData(!useMockData)} className='toggleButton red'>
      {useMockData ? 'Utiliser API' : 'Utiliser Mock'}
    </button>
  );
};

export default ToggleButton;
