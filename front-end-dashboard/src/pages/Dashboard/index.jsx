

import {useParams} from 'react-router-dom'
import Greetings from '../../Components/Greetings'
import userMainData from '../../data/mockedData.json'
import ErrorPage from '../ErrorPage'

const Dashboard = () => {
    const {userId} = useParams()
    const user = userMainData.find(user => user.id.toString() === userId)
  if(!user){
    return <ErrorPage/>
  }
  return (
    <div>
        <Greetings firstname={user.userInfos.firstName}/>
    </div>
  )
}

export default Dashboard