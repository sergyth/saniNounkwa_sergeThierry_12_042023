import { getUserById, getUserActivityById, getUserAverageSession, getUserPerformance} from '../../../backend-dashboard/app/models'
import data from '../../../backend-dashboard/app/data'

const Dashboard = () => {
    data.find(user =>{
        getUserById(user.id))
    })
}
export default Dashboard