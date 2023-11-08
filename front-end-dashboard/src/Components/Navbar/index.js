import './navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navbar ">
        <li className="navbar-item"><NavLink to='/' className="navbar-item">Accueil</NavLink></li>
        <li className="navbar-item"><NavLink className="navbar-item">Profil</NavLink></li>
        <li className="navbar-item"><NavLink className="navbar-item">Réglages</NavLink></li>
        <li className="navbar-item"><NavLink className="navbar-item">Communauté</NavLink></li>
    </ul>
  )
}

export default Navbar