import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../../Components/ToggleButton';
import { USER_MAIN_DATA } from '../../data/data';
import './accueil.css'

const Accueil = ({handleData,useMockData, showUserList}) => {
   
    
  //const handleToggle = () =>{setUseMockData(!useMockData)}
  
  return (
    <div className='homePage '>
      <h1 className='title'>Page d'accueil</h1>
      <ToggleButton useMockData={useMockData} handleData={handleData} />
      {showUserList && (
        <div className="users">
          <div>Utilisateurs mockés</div>
          <div>
          {USER_MAIN_DATA.map(user => (
            <Link key={user.id} to={`/user/${user.id}`}>
              {user.userInfos.firstName} 
            </Link>
          ))}
          </div>
       
        </div>
      )}
    </div>
  );
};

export default Accueil;
