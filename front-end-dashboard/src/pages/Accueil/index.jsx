import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../../Components/ToggleButton';
import { USER_MAIN_DATA } from '../../data/data';
import './accueil.css'

const Accueil = () => {
    const [useMockData, setUseMockData] = useState(false);
    const [showUserList, setShowUserList] = useState(false);
    const handleToggle = () => {
      setUseMockData(!useMockData);
      setShowUserList(!useMockData); // Affiche la liste des utilisateurs mockés si useMockData est activé
    };
  
  return (
    <div className='homePage '>
      <h1 className='title'>Page d'accueil</h1>
      <ToggleButton useMockData={useMockData} setUseMockData={handleToggle} />
      {showUserList && (
        <div className="users">
          {USER_MAIN_DATA.map(user => (
            <Link key={user.id} to={`/user/${user.id}`}>
              {user.userInfos.firstName} 
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accueil;
