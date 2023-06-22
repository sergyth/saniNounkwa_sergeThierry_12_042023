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
import ChartRadial from '../../Components/Charts/ChartRadial'
import {
  getUserMainActivity,
  getUserMainData,
  getUserMainSessions,
  getUserMainPerformance,
  getUserMainScore
} from '../../service/getData'
import './dashboard.css'

const Dashboard = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    loadUserData(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadUserData = (userId) => {
    const userMainActivity = getUserMainActivity(userId)
    const userMainData = getUserMainData(userId)
    const userPerformance = getUserMainPerformance(userId)
    const activity = userMainActivity.sessions.map((session) =>
      new UserModelActivity(session).getModelActivity()
    )
    const firstName = userMainData.userInfos.firstName
    const userSessions = getUserMainSessions(userId)
    const objectif = userSessions.sessions.map((session) =>
      new UserModelObjectif(session).getModelObjectif()
    )
    const performance = new UserModelPerformance(
      userPerformance
    ).getUserModelPerformance()
    //console.log(performance)
    //console.log(activity)

    const userModel = new UserModel(
      activity,
      userMainData,
      objectif,
      firstName,
      performance,
    )
    setUser(userModel)
  }
  if (!user) {
    return <ErrorPage />
  }
  return (
    <div className="dashboard-wrapper">
      <Greetings firstname={user.getFirstName()} />
      <div className='dashboard-main'>
        <div className="charts-wrapper">
          <ChartActivity data={user.getActivity()} />
          <div className='charts-bottom'>
            <ChartObjectif data={user.getSessions()} />
            <ChartRadar data={user.getPerformance()} />
            {/* <ChartRadial data={user.getScore()}/> */}
          </div>
        </div>
        <div className="parameters-wrapper">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
