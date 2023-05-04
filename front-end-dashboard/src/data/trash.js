import { USER_MAIN_DATA} from './mockedData'
import User from '../Components/User'
//import { useParams } from 'react-router-dom'
//, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE
function getUsers (dataType){
    if(dataType === 'mock'){
        /*charger les données des fichiers du mock**/ 
        const result = USER_MAIN_DATA.filter(userMainData => userMainData.user.id = ???);


        function getUserMainData(id) {
            return USER_MAIN_DATA.filter(userMainData => userMainData.user.id = ???);
        }
        
        function getUserActivity(id) {
            return USER_XXXX.filter(userMainData => userMainData.user.id = ???);
        }
        
        function getUserXXXX(id) {
            return USER_XXXX.filter(userMainData => userMainData.user.id = ???);
        }
        

        let buttons = ''
        const wrapper = document.querySelector('.dataType-wrapper')
        wrapper.innerHTML = ''
        
        USER_MAIN_DATA.(user =>{

            //utiliser filter
            user.userInfos.filter(info =>{
                const userButton = 
                < User key = {user.id} >{info.firstName}</User>
               return wrapper.innerHTML += userButton
            })
         
            
        
           
            // userButton.textContent = `${ user.userInfos.firstName}`
            // userButton.classList.add('userButton')
           
        
            return buttons
        } )
        
    }else{
        /*api*/
    }
}
export default getUsers