import icon1 from '../../assets/relax.png'
import icon2 from '../../assets/swimming.png'
import icon3 from '../../assets/cycling.png'
import icon4 from '../../assets/weight.png'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="nav-t ">
      <ul className="icon-list">
        <li>
          <img src={icon1} alt="icone relax" className="icon" />
        </li>
        <li>
          <img src={icon2} alt="icone nageur" className="icon" />
        </li>
        <li>
          <img src={icon3} alt="icone cycliste" className="icon" />
        </li>
        <li>
          <img src={icon4} alt="icone poids" className="icon" />
        </li>
      </ul>
      <div className="copyright ">Copyright, SportSee 2020</div>
    </div>
  )
}
export default Sidebar
