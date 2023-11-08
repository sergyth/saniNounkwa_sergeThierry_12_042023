import {USER_MAIN_DATA} from './data.js'

async function fetchUser(userId) {
  try {
    const apiUrl = `http://localhost:3000/user/${userId}`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Erreur de requête HTTP : ' + response.status)
    }
    const user = await response.json()
    console.log(user)
    return user
 
  } catch (error) {
    // Gérez les erreurs
    console.error("Une erreur s'est produite : " + error)
  } 
}

function getUsers(dataType, userId) {
  if (dataType === 'mock') {
    return USER_MAIN_DATA
  } else if (dataType === 'api') {
     fetchUser(userId)
  }
}
export default getUsers
