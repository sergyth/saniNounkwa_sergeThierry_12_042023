import { Link } from "react-router-dom";
import './user.css'

const User = (props) => {
  const userId = props.id
  return (
    <Link className='userButton' to={`/user/${userId}`} key={props.id} >{props.firstName}</Link>
  )
}

export default User