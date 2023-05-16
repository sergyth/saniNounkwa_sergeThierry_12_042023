

import {useParams} from 'react-router-dom'
import Greetings from '../../Components/Greetings'
import userMainData from '../../data/mockedData.json'
import ErrorPage from '../ErrorPage'
import ChartActivity from '../../Components/Charts/ChartActivity';

const Dashboard = () => {
    const {userId} = useParams()
    const user = userMainData.find(user => user.id.toString() === userId)
  if(!user){
    return <ErrorPage/>
  }
  return (
    <div>
        <Greetings firstname={user.userInfos.firstName}/>
        <ChartActivity/>
    </div>
  )
}

export default Dashboard