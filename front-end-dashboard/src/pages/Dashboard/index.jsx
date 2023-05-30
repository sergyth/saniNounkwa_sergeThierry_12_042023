import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Greetings from '../../Components/Greetings'
import UserModel from '../../model/UserModel'

import ErrorPage from '../ErrorPage'
import ChartActivity from '../../Components/Charts/ChartActivity'
import {
  getUserActivity,
  getUserMainData,
  getPerformance,
  getSessions,
} from '../../service/getData'

const Dashboard = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
   loadUserData(userId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const loadUserData = (userId) => {
    
    const userActivity = getUserActivity(userId)
    const userMainData = getUserMainData(userId)
    const firstName = userMainData.userInfos.firstName
    //const userPerformance = getPerformance(userId)
    const userSessions = getSessions(userId)
    const userModel = new UserModel(userActivity, userMainData, userSessions, firstName)
    setUser(userModel)
  }
  if (!user) {
    return <ErrorPage />
  }
  return (
    <div>
      <Greetings firstname={user.getFirstName()} />
      <ChartActivity dataActivity={user.getActivity()} />
    </div>
  )
}

export default Dashboard
