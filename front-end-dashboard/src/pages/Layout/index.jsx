import {Outlet} from 'react-router-dom'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import './layout.css'

const Layout = () => {
  return (
    <div>
        <Header/>
        <div className="layout-wrapper">
            <Sidebar/>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default Layout