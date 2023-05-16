import dataActivity from  '../data/mockedDataUserActivity.json'
import UserData from '../model/UserData'
import {useParams} from 'react-router-dom'

const getData = () =>{
    const {userId} = useParams()
    const data = dataActivity.find(user => user.id.toString() === userId)
    console.log(data)
    return data? new UserData(data):null
}
export default GetData