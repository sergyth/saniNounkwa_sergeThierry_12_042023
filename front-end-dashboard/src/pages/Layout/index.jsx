import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import './layout.css'

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
