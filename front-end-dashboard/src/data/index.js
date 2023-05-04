import userMainData from './mockedData.json'

function getUsers (dataType){
    if(dataType === 'mock'){
     return userMainData      
    }
}
export default getUsers