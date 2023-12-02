import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Greetings from '../../Components/Greetings';
import ErrorPage from '../ErrorPage';
import UserModel from '../../model/UserModel';
import UserModelActivity from '../../model/UserModelActivity';
import UserModelObjectif from '../../model/UserModelObjectif';
import UserModelPerformance from '../../model/UserModelPerformance';
import UserModelScore from '../../model/UserModelScore';
import UserModelKeyData from '../../model/UserModelKeyData';
import ChartActivity from '../../Components/Charts/ChartActivity/';
import ChartObjectif from '../../Components/Charts/ChartObjectif';
import ChartRadar from '../../Components/Charts/ChartRadar';
import ChartRadial from '../../Components/Charts/ChartRadial';
import './dashboard.css';
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../../service/fetchData';
import calories from '../../assets/calories.png';
import proteines from '../../assets/proteines.png';
import glucides from '../../assets/glucides.png';
import lipides from '../../assets/lipides.png';

const Dashboard = ({ useMockData }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const isValidUserId = (id) => {
    return id && !isNaN(id) && Number.isFinite(Number(id));
  };

  useEffect(() => {
    const loadUserData = async () => {
      if (!isValidUserId(userId)) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      try {
        const [userData, userActivity, userAverageSessions, userPerformance] = 
          await Promise.all([
            getUserData(userId, useMockData),
            getUserActivity(userId, useMockData),
            getUserAverageSessions(userId, useMockData),
            getUserPerformance(userId, useMockData),
          ]);

        if (!userData || !userActivity || !userAverageSessions || !userPerformance) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        // Transformez les données récupérées en modèles
        const keyDataModel = new UserModelKeyData(userData.data.keyData);
        const activityModel = userActivity.data.sessions.map(
          session => new UserModelActivity(session).getModelActivity()
        );
        const objectifModel = userAverageSessions.data.sessions.map(
          session => new UserModelObjectif(session).getModelObjectif()
        );
        const performanceModel = new UserModelPerformance(userPerformance.data).getUserModelPerformance();
        const scoreModel = new UserModelScore(userData.data).getUserModelScore();
        const userModel = new UserModel(
          activityModel,
          userData.data.userInfos,
          objectifModel,
          userData.data.userInfos.firstName,
          performanceModel,
          scoreModel,
          keyDataModel
        );

        setUser(userModel);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [userId, useMockData]);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <div>...en attente de chargement</div>;
  }

  return (
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
  );
};

export default Dashboard;
