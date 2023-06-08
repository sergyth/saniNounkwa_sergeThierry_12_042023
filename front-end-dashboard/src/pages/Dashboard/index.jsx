import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Greetings from '../../Components/Greetings'
import UserModel from '../../model/UserModel'
import UserModelActivity from '../../model/UserModelActivity'
import UserModelObjectif from '../../model/UserModelObjectif'
import UserModelPerformance from '../../model/UserModelPerformance'
import ErrorPage from '../ErrorPage'
import ChartActivity from '../../Components/Charts/ChartActivity/'
import ChartObjectif from '../../Components/Charts/ChartObjectif'
import ChartRadar from '../../Components/Charts/ChartRadar'
import {
  getUserMainActivity,
  getUserMainData,
  getUserMainSessions,
  getUserMainPerformance
} from '../../service/getData'

const Dashboard = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  
  useEffect(() => {
   loadUserData(userId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const loadUserData = (userId) => {
   
    const userMainActivity = getUserMainActivity(userId)
    const userMainData = getUserMainData(userId)
    const userPerformance = getUserMainPerformance(userId)
    const activity = userMainActivity.sessions.map(session => new UserModelActivity(session).getModelActivity());
    const firstName = userMainData.userInfos.firstName
    const userSessions = getUserMainSessions(userId)
    const objectif = userSessions.sessions.map(session => new UserModelObjectif(session).getModelObjectif())
    const performance = new UserModelPerformance(userPerformance)
    //console.log(objectif)
    //console.log(userPerformance.data.map(element => element.value))
    const userModel = new UserModel(activity, userMainData, objectif, firstName, performance)
    setUser(userModel)

    
  }
  if (!user) {
    return <ErrorPage />
  }
  return (
    
    <div>
      <Greetings firstname={user.getFirstName()} />
      <ChartActivity data={user.getActivity()} />
      <ChartObjectif data={user.getSessions()}/>
      <ChartRadar    data={user.getPerformance()}/> 
    </div>
  )
}

export default Dashboard
