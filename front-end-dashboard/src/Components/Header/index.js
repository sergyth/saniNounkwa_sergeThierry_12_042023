import logo from '../../assets/logo.png'
import Navbar from '../Navbar'
import './header.css'

const Header = () => {
    return(
        <div className="nav-l">
            <img src={logo} alt="logo de sportSee" className='logo' />
            <Navbar/>
        </div>
    )
}
export default Header