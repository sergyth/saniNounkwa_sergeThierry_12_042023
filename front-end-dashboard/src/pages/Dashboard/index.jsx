import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Greetings from '../../Components/Greetings'
import UserModel from '../../model/UserModel'
import UserModelActivity from '../../model/UserModelActivity'
import UserModelObjectif from '../../model/UserModelObjectif'
import UserModelPerformance from '../../model/UserModelPerformance'
import UserModelScore from '../../model/UserModelScore'
import ErrorPage from '../ErrorPage'
import ChartActivity from '../../Components/Charts/ChartActivity/'
import ChartObjectif from '../../Components/Charts/ChartObjectif'
import ChartRadar from '../../Components/Charts/ChartRadar'
import ChartRadial from '../../Components/Charts/ChartRadial'
import './dashboard.css'
import {DataSourceProvider} from '../../contexts/DataSourceContext'
import { getData } from '../../service/getData'
import calories from '../../assets/calories.png'
import proteines from '../../assets/proteines.png'
import glucides from '../../assets/glucides.png'
import lipides from '../../assets/lipides.png'

const Dashboard = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    loadUserData(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(getData(userId, true).userMainData)
  const loadUserData = (userId) => {
    const userMainActivity = getData(userId).userActivity
    const userMainData = getData(userId).userMainData
    const userPerformance = getData(userId).userPerformance
    const activity = userMainActivity.sessions.map((session) =>
      new UserModelActivity(session).getModelActivity()
    )
    const firstName = userMainData.userInfos.firstName
    const userSessions = getData(userId).userSessions
    const objectif = userSessions.sessions.map((session) =>
      new UserModelObjectif(session).getModelObjectif()
    )
    const performance = new UserModelPerformance(
      userPerformance
    ).getUserModelPerformance()
    const score = new UserModelScore(userMainData).getUserModelScore()
    const userModel = new UserModel(
      activity,
      userMainData,
      objectif,
      firstName,
      performance,
      score
    )
    setUser(userModel)
  }
  
  const calorie = getData(userId).userMainData.keyData.calorieCount;
  const proteine= getData(userId).userMainData.keyData.proteinCount;
  const glucide = getData(userId).userMainData.keyData.carbohydrateCount;
  const lipide = getData(userId).userMainData.keyData.lipidCount;

  if (!user) {
    return <ErrorPage />
  }
  return (
    <DataSourceProvider>
      <Greetings firstname={user.getFirstName()} />
      <ChartActivity data={user.getActivity()} />
      <div className="charts-bottom">
        <ChartObjectif data={user.getSessions()} />
        <ChartRadar data={user.getPerformance()} />
        <ChartRadial data={user.getScore()} />
      </div>
      <div className="params">
        <div className="parameter calories ">
          <img src={calories} alt="icone de feu" />
          <div>
            <p className="calories">{`${calorie}kCal`}</p>
            <span>Calories</span>
          </div>
        </div>
        <div className="parameter proteines">
          <img src={proteines} alt="icone de viande" />
          <div>
            <p className="proteines">{`${proteine}g`}</p>
            <span>Proteines</span>
          </div>
        </div>
        <div className="parameter glucides">
          <img src={glucides} alt="icone de pomme" />
          <div>
            <p className="glucides">{`${glucide}g`}</p>
            <span>Glucides</span>
          </div>
        </div>
        <div className="parameter lipides">
          <img src={lipides} alt="icone hamburger" />
          <div>
            <p className="lipides">{`${lipide}g`}</p>
            <span>Lipides</span>
          </div>
        </div>
      </div>
    </DataSourceProvider>
  )
}

export default Dashboard
