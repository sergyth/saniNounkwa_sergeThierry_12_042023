import { Link } from "react-router-dom";
import './user.css'

const User = (props) => {
  const userId = props.id
  return (
    <Link className='userButton' to={`/userMock/${userId}`} key={props.id}  >{props.firstName}</Link>
  )
}

export default User