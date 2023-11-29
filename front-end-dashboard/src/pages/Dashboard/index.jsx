import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Greetings from '../../Components/Greetings'
import UserModel from '../../model/UserModel'
import UserModelActivity from '../../model/UserModelActivity'
import UserModelObjectif from '../../model/UserModelObjectif'
import UserModelPerformance from '../../model/UserModelPerformance'
import UserModelScore from '../../model/UserModelScore'
import UserModelKeyData from '../../model/UserModelKeyData'
import ErrorPage from '../ErrorPage'
import ChartActivity from '../../Components/Charts/ChartActivity/'
import ChartObjectif from '../../Components/Charts/ChartObjectif'
import ChartRadar from '../../Components/Charts/ChartRadar'
import ChartRadial from '../../Components/Charts/ChartRadial'
import './dashboard.css'
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../../service/fetchData'
import calories from '../../assets/calories.png'
import proteines from '../../assets/proteines.png'
import glucides from '../../assets/glucides.png'
import lipides from '../../assets/lipides.png'

const Dashboard = ({ useMockData }) => {
  const [user, setUser] = useState(null)
  const { userId } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUserData = async () => {
      if (userId) {
        const userData = await getUserData(userId, useMockData)
        const userActivity = await getUserActivity(userId, useMockData)
        const userAverageSessions = await getUserAverageSessions(
          userId,
          useMockData
        )
        const userPerformance = await getUserPerformance(userId, useMockData)
        const keyDataModel = new UserModelKeyData(userData.data)
        const activityModel = userActivity.data.sessions.map((session) =>
          new UserModelActivity(session).getModelActivity()
        )
        const objectifModel = userAverageSessions.data.sessions.map((session) =>
          new UserModelObjectif(session).getModelObjectif()
        )
        const performanceModel = new UserModelPerformance(
          userPerformance.data
        ).getUserModelPerformance()
        const scoreModel = new UserModelScore(userData.data).getUserModelScore()
        const userModel = new UserModel(
          activityModel,
          userData.userInfos,
          objectifModel,
          userData.data.userInfos.firstName,
          performanceModel,
          scoreModel,
          keyDataModel
        )
        setUser(userModel)
        setIsLoading(false)
      }
    }
    setTimeout(()=>{    
      loadUserData()
      .catch(console.error)},1000)



  }, [userId, useMockData])


    return isLoading? <div>...en attente de chargement</div>: (
      <div className="dashboard">
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
              <p className="calories">{`${user.keyData.calorie}kCal`}</p>
              <span>Calories</span>
            </div>
          </div>
          <div className="parameter proteines">
            <img src={proteines} alt="icone de viande" />
            <div>
              <p className="proteines">{`${user.keyData.proteine}g`}</p>
              <span>Proteines</span>
            </div>
          </div>
          <div className="parameter glucides">
            <img src={glucides} alt="icone de pomme" />
            <div>
              <p className="glucides">{`${user.keyData.glucide}g`}</p>
              <span>Glucides</span>
            </div>
          </div>
          <div className="parameter lipides">
            <img src={lipides} alt="icone hamburger" />
            <div>
              <p className="lipides">{`${user.keyData.lipide}g`}</p>
              <span>Lipides</span>
            </div>
          </div>
        </div>
      </div>
    )
    
  }


export default Dashboard
