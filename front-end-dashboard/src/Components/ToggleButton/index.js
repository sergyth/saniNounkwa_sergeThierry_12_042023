import  React from 'react';
import'./toggleButton.css'

const ToggleButton = ({useMockData, handleData}) => {
  return (
    <button  onClick={handleData} className='toggleButton red'>
      {useMockData ? 'Utiliser API' : 'Utiliser Mock'}
    </button>
  );
};

export default ToggleButton;
